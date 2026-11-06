import{c as yt}from"./atmosphere-DStunFO5.js";import{g as rt,a as wt}from"./blueNoise-Xopz6Ulp.js";import{d as le,e as Ae,s as Me,f as _e,x as ke,g as Pe,N as Ie,n as Ne,B as ve}from"./shared-oZu7p6SI.js";import{F as Ue,a as ut,W as nt,e as oe,f as Le,i as Be,g as ze,h as Ge,j as it,s as Ct,k as St}from"./takramClouds-Cui9DI1f.js";import{M as ae,P as ge,e as xe,ah as Oe,k as U,c as re,U as G,d as We,V as h,R as He,W as K,_ as z,Y as Q,aE as he,F as st,C as lt,Z as Et,ac as bt,n as Tt,g as Dt,bX as Ft,Q as Rt}from"./three.module-9D8i-8qh.js";import{E as se}from"./geo-DYayEwnZ.js";import{T as ye}from"./index-DxQAg0pk.js";const At=`
precision highp float;
precision highp sampler3D;

#include "core/math"
#include "bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "bruneton/common"
#include "bruneton/runtime"

uniform vec3 sunDirection;        // ECEF
uniform sampler3D uBlueNoise;
uniform sampler2D uDepth;

uniform mat4 uInvProj;
uniform mat4 uCamRot;             // camera.matrixWorld (camera at render origin)
uniform vec3 uCamFwd;
uniform float uLogDepthFar;       // log2(far + 1)
uniform vec3 uSunENU;
uniform int uFrame;

uniform float uExtinction;
uniform float uCirrusAlt, uCirrusCov, uMaxDist, uSkyScale, uSilver, uPowder, uGroundBounce;
uniform int uDebug;
uniform float uDiffuse, uShadow;

in vec2 vUv;
layout(location = 0) out vec4 outColor;
layout(location = 1) out vec4 outDepth;

const float RECIP_4PI = 0.0795774715;

#include "density"

vec3 viewRay(vec2 uv) {
  vec4 c = uInvProj * vec4(uv * 2.0 - 1.0, 1.0, 1.0);
  return normalize((uCamRot * vec4(c.xyz / c.w, 0.0)).xyz);
}
float sceneDistance(vec2 uv, vec3 rd) {
  float d = texture(uDepth, uv).r;
  if (d >= 0.999999) return 1e9;
  float w = exp2(d * uLogDepthFar) - 1.0;
  return w / max(dot(rd, uCamFwd), 1e-4);
}
// Distances where a ray from the camera crosses altitude h (sphere about the
// Earth centre), computed without large-number cancellation.
vec2 shell(float mu, float h) {
  float r0 = RE + uCamAlt;
  float c = (uCamAlt - h) * (2.0 * RE + uCamAlt + h);   // r0² - (RE+h)²
  float b = r0 * mu;
  float disc = b * b - c;
  if (disc < 0.0) return vec2(-1.0);
  float s = sqrt(disc);
  return vec2(-b - s, -b + s);
}

float hg(float mu, float g) { float g2 = g * g; return RECIP_4PI * (1.0 - g2) / pow(max(1e-4, 1.0 + g2 - 2.0 * g * mu), 1.5); }
float phase(float mu, float atten) {
  // Dual-lobe HG plus a sharp forward lobe for the silver lining.
  return mix(hg(mu, -0.2 * atten), hg(mu, 0.75 * atten), 0.55) + uSilver * 0.15 * hg(mu, 0.95 * atten);
}

float lightMarch(vec3 p, float jitter) {
  // Six exponentially growing steps toward the sun, each jittered on its own
  // (golden-ratio sequence) so the slices dither into noise the temporal
  // resolve removes, instead of contouring as stripes.
  float od = 0.0;
  float t0 = 0.0;
  float step = 36.0;
  for (int j = 0; j < 6; j++) {
    float r = fract(jitter + float(j) * 0.618034);
    vec3 lp = p + uSunENU * (t0 + step * r);
    od += density(lp, altitudeOf(lp), false) * step;
    t0 += step;
    step *= 1.85;
  }
  return od * uExtinction;
}

float multiScatter(float od, float mu) {
  float s = 0.0, a = 1.0, b = 1.0, c = 1.0;
  for (int k = 0; k < 4; k++) {
    s += a * exp(-od * b) * phase(mu, c);
    a *= 0.5; b *= 0.5; c *= 0.5;
  }
  return s;
}

void main() {
  vec3 rd = viewRay(vUv);
  float sceneT = sceneDistance(vUv, rd);
  float mu = dot(rd, uUp);
  float cosSun = dot(rd, uSunENU);

  ivec3 bnSize = textureSize(uBlueNoise, 0);
  float bn = texelFetch(uBlueNoise, ivec3(ivec2(gl_FragCoord.xy) % bnSize.xy, uFrame % bnSize.z), 0).r;

  // March range through the cumulus shell.
  vec2 sb = shell(mu, uBase), st = shell(mu, uTop);
  float t0 = 0.0, t1 = -1.0;
  if (uCamAlt < uBase) {
    if (sb.y > 0.0) { t0 = sb.y; t1 = st.y; }
  } else if (uCamAlt <= uTop) {
    t0 = 0.0;
    t1 = sb.x > 0.0 ? sb.x : st.y;
  } else {
    if (st.x > 0.0) { t0 = st.x; t1 = sb.x > 0.0 ? sb.x : st.y; }
  }
  t1 = min(min(t1, sceneT), uMaxDist);

  // Sun and sky irradiance at the deck's base and top above/below the camera.
  vec3 upECEF = normalize(uCamECEF);
  vec3 skyB, skyT;
  vec3 sunB = GetSunAndSkyScalarIrradiance(upECEF * (ATMOSPHERE.bottom_radius + uBase * METER_TO_LENGTH_UNIT), sunDirection, skyB);
  vec3 sunT = GetSunAndSkyScalarIrradiance(upECEF * (ATMOSPHERE.bottom_radius + uTop * METER_TO_LENGTH_UNIT), sunDirection, skyT);
  vec3 groundIrr = sunB * max(dot(uUp, uSunENU), 0.0) + skyB * 0.5;

  vec3 L = vec3(0.0);
  float T = 1.0;
  float wSum = 0.0, tSum = 0.0;
  if (t1 > t0) {
    float t = t0;
    float baseStep = clamp((t1 - t0) / 110.0, 30.0, 250.0);
    t += baseStep * bn;
    float lastStep = 0.0;
    bool refined = false;
    for (int i = 0; i < 192; i++) {
      if (t > t1 || T < 0.01) break;
      vec3 p = rd * t;
      float h = altitudeOf(p);
      float d = density(p, h, true);
      float fine = 30.0 + t * 0.0015;
      if (d > 0.001 && !refined && lastStep > fine * 1.5) {
        // Entered a cloud on a long empty step: rewind and re-enter with fine,
        // jittered steps, otherwise the entry depth is quantised into rings.
        t -= lastStep - fine * bn;
        refined = true;
        lastStep = fine;
        continue;
      }
      float step;
      if (d > 0.001) {
        refined = true;
        step = min(max(baseStep, t * 0.005), fine);
        float sigma = d * uExtinction;
        float od = uDebug == 2 ? 0.0 : lightMarch(p, bn);
        float hf = clamp((h - uBase) / (uTop - uBase), 0.0, 1.0);
        vec3 sunIrr = mix(sunB, sunT, hf);
        vec3 skyIrr = mix(skyB, skyT, hf);
        vec3 S = sunIrr * multiScatter(od, cosSun);
        // Deep-interior diffusion: light that has scattered many times is
        // nearly isotropic and decays slowly, so cloud interiors stay white.
        S += sunIrr * RECIP_4PI * uDiffuse * exp(-od * 0.04);
        // Ambient: sky from above (darker in the belly) + desert bounce from below.
        S += skyIrr * RECIP_4PI * mix(0.35, 1.0, hf) * uSkyScale;
        S += groundIrr * 0.3 / PI * RECIP_4PI * (1.0 - hf) * uGroundBounce * exp(-od * 0.25);
        S *= sigma;
        S *= 1.0 - uPowder * exp(-sigma * 140.0);
        float tr = exp(-sigma * step);
        L += T * (S - S * tr) / sigma;
        T *= tr;
        wSum += T * t * (1.0 - tr) + 1e-6; tSum += (1.0 - tr) * T + 1e-6;
      } else {
        step = min(max(baseStep, t * 0.005), 600.0) * (refined ? 1.0 : 1.6);
        refined = false;
      }
      lastStep = step;
      t += step;
    }
  }
  float cloudDepth = tSum > 0.0 ? wSum / tSum : -1.0;
  // Opaque once transmittance hits the march cut-off (as takram does), or the
  // sun disk's enormous radiance leaks through the last 1%.
  T = T <= 0.0101 ? 0.0 : T;
  vec4 color = vec4(L, 1.0 - T);
  if (cloudDepth > 0.0) {
    vec3 trans;
    vec3 ins = GetSkyRadianceToPoint(uCamECEF, toECEF(rd * cloudDepth), 0.0, sunDirection, trans);
    color.rgb = color.rgb * trans + ins * color.a;
  }

  // Cloud shadow on the ground: march the deck along the sun ray from the
  // ground point and darken it through the overlay's alpha.
  float groundShadow = 0.0;
  if (sceneT < 3e5 && T > 0.02 && uShadow > 0.0) {
    vec3 g = rd * sceneT;
    float gh = altitudeOf(g);
    float sMu = dot(normalize(g + uUp * (RE + uCamAlt)), uSunENU);
    float r0 = RE + gh;
    float c0 = (gh - uBase) * (2.0 * RE + gh + uBase), c1 = (gh - uTop) * (2.0 * RE + gh + uTop);
    float tb = -r0 * sMu + sqrt(max(0.0, r0 * r0 * sMu * sMu - c0));
    float tt = -r0 * sMu + sqrt(max(0.0, r0 * r0 * sMu * sMu - c1));
    float od = 0.0;
    float ds = (tt - tb) / 8.0;
    for (int k = 0; k < 8; k++) {
      vec3 q = g + uSunENU * (tb + ds * (float(k) + bn));
      od += density(q, altitudeOf(q), false) * ds;
    }
    groundShadow = (1.0 - exp(-od * uExtinction)) * uShadow * T;
  }

  // Thin cirrus sheet: a single textured shell far above the deck.
  if (uCirrusCov > 0.0 && uCamAlt < uCirrusAlt) {
    vec2 sc = shell(mu, uCirrusAlt);
    float tc = sc.y;
    if (tc > 0.0 && tc < sceneT && tc < 3.5e5) {
      vec3 pc = rd * tc + uCamWorld;
      vec4 w = textureLod(uWeather, cubeSphereUv(toECEF(rd * tc)) * uWeatherRepeat * 0.3, 0.0);
      vec2 sxz = vec2(pc.x * 0.8 + pc.z * 0.6, -pc.x * 0.6 + pc.z * 0.8);
      float fib = texture(uShape, vec3(sxz.x / 26000.0, 0.37, sxz.y / 2600.0)).g;
      float fib2 = texture(uShape, vec3(sxz.x / 9000.0, 0.61, sxz.y / 700.0)).b;
      float a = smoothstep(0.25, 0.85, w.b * (0.55 + 0.6 * fib) - (1.0 - fib2) * 0.15) * uCirrusCov * 0.45;
      a *= smoothstep(0.0, 0.05, mu);
      if (a > 0.0) {
        vec3 skyC;
        vec3 sunC = GetSunAndSkyScalarIrradiance(upECEF * (ATMOSPHERE.bottom_radius + uCirrusAlt * METER_TO_LENGTH_UNIT), sunDirection, skyC);
        vec3 c = sunC * (hg(cosSun, 0.6) * 0.8 + 0.08) + skyC * RECIP_4PI;
        vec3 tr;
        vec3 ins = GetSkyRadianceToPoint(uCamECEF, toECEF(rd * tc), 0.0, sunDirection, tr);
        vec3 ci = (c * tr + ins) * a;
        color.rgb += T * ci;
        color.a += T * a;
        if (cloudDepth < 0.0) cloudDepth = tc;
      }
    }
  }
  color.a += (1.0 - color.a) * groundShadow;
  outColor = color;
  if (uDebug == 1) outColor = vec4(vec3(bn) * 0.08, 1.0);
  if (uDebug == 3) outColor = vec4(textureLod(uShape, vec3(vUv.x, 0.5, vUv.y), 0.0).rgb * 0.08, 1.0);
  outDepth = vec4(cloudDepth, min(sceneT, 1e9), 0.0, 1.0);
}
`,ct=`
precision highp float;
uniform sampler2D uCurrent;
uniform sampler2D uCurrentDepth;
uniform sampler2D uHistory;
uniform mat4 uInvProj;
uniform mat4 uCamRot;
uniform mat4 uPrevViewProj;       // previous frame, expressed in this frame's render space
uniform float uBlend;             // weight of the current frame
uniform bool uValidHistory;
in vec2 vUv;
layout(location = 0) out vec4 outColor;

vec3 viewRay(vec2 uv) {
  vec4 c = uInvProj * vec4(uv * 2.0 - 1.0, 1.0, 1.0);
  return normalize((uCamRot * vec4(c.xyz / c.w, 0.0)).xyz);
}
void main() {
  vec4 cur = texture(uCurrent, vUv);
  if (!uValidHistory) { outColor = cur; return; }
  vec2 texel = 1.0 / vec2(textureSize(uCurrent, 0));
  vec4 mn = cur, mx = cur, m1 = vec4(0.0), m2 = vec4(0.0);
  float closest = 1e9;
  for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
    vec2 o = vec2(x, y) * texel;
    vec4 c = texture(uCurrent, vUv + o);
    m1 += c; m2 += c * c;
    float dd = texture(uCurrentDepth, vUv + o).r;
    if (dd > 0.0) closest = min(closest, dd);
  }
  // Variance clipping box.
  m1 /= 9.0; m2 /= 9.0;
  vec4 sigma = sqrt(max(m2 - m1 * m1, 0.0));
  mn = m1 - sigma * 1.6; mx = m1 + sigma * 1.6;
  float depth = closest < 1e8 ? closest : 1e6;
  vec3 world = viewRay(vUv) * depth;
  vec4 clip = uPrevViewProj * vec4(world, 1.0);
  vec2 prevUv = clip.xy / clip.w * 0.5 + 0.5;
  if (clip.w <= 0.0 || any(lessThan(prevUv, vec2(0.0))) || any(greaterThan(prevUv, vec2(1.0)))) { outColor = cur; return; }
  vec4 hist = clamp(texture(uHistory, prevUv), mn, mx);
  outColor = mix(hist, cur, uBlend);
}
`,Mt=`
precision highp float;
uniform sampler2D uClouds;        // half-res resolved
uniform sampler2D uLowDepth;      // half-res (cloud depth, scene depth)
uniform sampler2D uDepth;         // full-res scene depth
uniform mat4 uInvProj;
uniform mat4 uCamRot;
uniform vec3 uCamFwd;
uniform float uLogDepthFar;
in vec2 vUv;
layout(location = 0) out vec4 outColor;

vec3 viewRay(vec2 uv) {
  vec4 c = uInvProj * vec4(uv * 2.0 - 1.0, 1.0, 1.0);
  return normalize((uCamRot * vec4(c.xyz / c.w, 0.0)).xyz);
}
float sceneDistance(vec2 uv) {
  float d = texture(uDepth, uv).r;
  if (d >= 0.999999) return 1e9;
  float w = exp2(d * uLogDepthFar) - 1.0;
  return w / max(dot(viewRay(uv), uCamFwd), 1e-4);
}
void main() {
  vec2 lowSize = vec2(textureSize(uClouds, 0));
  vec2 texel = 1.0 / lowSize;
  float dFull = min(sceneDistance(vUv), 2e5);
  vec2 tc = vUv * lowSize - 0.5;
  vec2 f = fract(tc);
  vec2 b = (floor(tc) + 0.5) * texel;
  vec4 acc = vec4(0.0);
  float wsum = 0.0, wmin = 1.0;
  for (int j = 0; j < 2; j++) for (int i = 0; i < 2; i++) {
    vec2 uv = b + vec2(i, j) * texel;
    float wb = (i == 0 ? 1.0 - f.x : f.x) * (j == 0 ? 1.0 - f.y : f.y);
    float dl = min(texture(uLowDepth, uv).g, 2e5);
    float wd = exp(-abs(log(max(dl, 0.1)) - log(max(dFull, 0.1))) * 6.0);
    float w = wb * wd + 1e-5;
    acc += texture(uClouds, uv) * w;
    wsum += w;
    wmin = min(wmin, wd);
  }
  vec4 c = acc / wsum;
  // Away from geometry edges a plain bilinear tap is smoother.
  c = mix(c, texture(uClouds, vUv), smoothstep(0.6, 0.95, wmin));
  outColor = c;
}
`,ft=`
uniform sampler2D uWeather;
uniform sampler3D uShape;
uniform sampler3D uDetail;
uniform vec3 uCamWorld;           // ENU world position of the camera
uniform float uCamAlt;            // metres MSL
uniform vec3 uUp;                 // local vertical at the camera, render space
uniform vec3 uCamECEF;            // km, altitude-corrected
uniform mat3 uToECEF;             // render-space directions → ECEF
uniform vec2 uWind;
uniform float uPixelAngle;        // radians per pixel (LOD)
uniform float uBase, uTop, uCoverage, uWeatherRepeat, uShapeScale, uDetailScale, uDetailAmount;
// Stratocumulus slab (weather alpha: wind-aligned rows). uStratoTop <= uStratoBase disables it.
uniform float uStratoBase, uStratoTop, uStratoCov;

const float RE = 6371008.8;

// Altitude MSL of a render-space point (camera-local tangent + curvature).
float altitudeOf(vec3 p) {
  float v = dot(p, uUp);
  return uCamAlt + v + (dot(p, p) - v * v) / (2.0 * RE);
}
// Same cube-sphere UV as takram's clouds, so both implementations place the
// same weather cells at the same spot on the globe.
vec2 cubeSphereUv(const vec3 position) {
  vec3 n = normalize(position);
  vec3 f = abs(n);
  vec3 c = n / max(f.x, max(f.y, f.z));
  vec2 m;
  if (all(greaterThan(f.yy, f.xz))) m = c.y > 0.0 ? vec2(-n.x, n.z) : n.xz;
  else if (all(greaterThan(f.xx, f.yz))) m = c.x > 0.0 ? n.yz : vec2(-n.y, n.z);
  else m = c.z > 0.0 ? n.xy : vec2(n.x, -n.y);
  vec2 m2 = m * m;
  float q = dot(m2.xy, vec2(-2.0, 2.0)) - 3.0;
  float q2 = q * q;
  vec2 uv;
  uv.x = sqrt(1.5 + m2.x - m2.y - 0.5 * sqrt(-24.0 * m2.x + q2)) * (m.x > 0.0 ? 1.0 : -1.0);
  uv.y = sqrt(6.0 / (3.0 - uv.x * uv.x)) * m.y;
  return uv * 0.5 + 0.5;
}
vec3 toECEF(vec3 p) { return uCamECEF + uToECEF * p * METER_TO_LENGTH_UNIT; }

struct Weather { float cov; float type; };
Weather weatherAt(vec3 p) {
  vec4 w = textureLod(uWeather, cubeSphereUv(toECEF(p)) * uWeatherRepeat + uWind, 0.0);
  Weather o;
  o.cov = w.r;
  o.type = w.g;
  return o;
}

// Stratocumulus: a thin, lumpy-flat slab whose coverage follows the
// wind-aligned rows in the weather map's alpha channel.
float stratoDensity(vec3 p, float h, bool detail) {
  float w = textureLod(uWeather, cubeSphereUv(toECEF(p)) * uWeatherRepeat + uWind, 0.0).a * uStratoCov;
  if (w < 0.02) return 0.0;
  float hn = (h - uStratoBase) / (uStratoTop - uStratoBase);
  float grad = smoothstep(0.0, 0.2, hn) * (1.0 - smoothstep(0.55, 1.0, hn));
  vec3 q = vec3(p.x + uCamWorld.x, h * 2.0, p.z + uCamWorld.z);
  float footprint = length(p) * uPixelAngle;
  vec4 n = textureLod(uShape, q / (uShapeScale * 0.7), log2(max(1.0, footprint * 128.0 / (uShapeScale * 0.7))));
  float fbm = n.g * 0.625 + n.b * 0.25 + n.a * 0.125;
  float margin = fbm * grad - (1.0 - w);
  if (detail && margin > -0.2) {
    vec3 dn = textureLod(uDetail, q / uDetailScale, 0.0).rgb;
    margin -= (1.0 - (dn.r * 0.625 + dn.g * 0.25 + dn.b * 0.125)) * uDetailAmount * 0.25;
  }
  return smoothstep(0.0, 0.15, margin) * 0.55;
}

float cumulusDensity(vec3 p, float h, bool detail);
// Density of the enterable (volumetric) layers: cumulus and stratocumulus.
float density(vec3 p, float h, bool detail) {
  float d = (h >= uBase && h <= uTop) ? cumulusDensity(p, h, detail) : 0.0;
  if (uStratoTop > uStratoBase && h >= uStratoBase && h <= uStratoTop) d = max(d, stratoDensity(p, h, detail));
  return d;
}

// Cumulus density at a render-space point (world xz, altitude h).
float cumulusDensity(vec3 p, float h, bool detail) {
  Weather wx = weatherAt(p);
  vec3 world = p + uCamWorld;
  // Cloud-top height for this column: humilis (flat) → mediocris (tall), and
  // bigger cells grow taller.
  float topFrac = mix(0.38, 1.0, clamp(wx.type * 0.7 + wx.cov * 0.45, 0.0, 1.0));
  float hn = (h - uBase) / ((uTop - uBase) * topFrac);
  if (hn >= 1.0) return 0.0;
  // Height gradient: hard flat base, rounded dome. Coverage needed to keep
  // cloud rises towards the top, so only cell centres reach it.
  float grad = smoothstep(0.0, 0.06, hn) * (1.0 - smoothstep(0.2, 1.0, hn));
  float cov = clamp(wx.cov * uCoverage * 1.4, 0.0, 1.0);
  if (cov * grad < 0.02) return 0.0;
  vec3 q = vec3(world.x, h * 1.15, world.z);
  // Explicit LOD from the pixel footprint (no derivatives inside the loop);
  // without it the 3D noise aliases into contour-like terraces far away.
  float footprint = length(p) * uPixelAngle;
  vec4 n = textureLod(uShape, q / uShapeScale, log2(max(1.0, footprint * 128.0 / uShapeScale)));
  float fbm = n.g * 0.625 + n.b * 0.25 + n.a * 0.125;
  float base = remap(n.r, fbm - 1.0, 1.0, 0.0, 1.0);
  // Signed margin above the coverage threshold: > 0 inside the cloud.
  float margin = base * grad - (1.0 - cov);
  if (margin < -0.25) return 0.0;
  float detailFade = 1.0 - smoothstep(0.25, 1.0, footprint * 32.0 / uDetailScale);
  if (detail && detailFade > 0.0) {
    vec3 dn = textureLod(uDetail, q / uDetailScale, log2(max(1.0, footprint * 32.0 / uDetailScale))).rgb;
    float dfbm = dn.r * 0.625 + dn.g * 0.25 + dn.b * 0.125;
    // Wispy (inverted) at the base, billowy cauliflower towards the top.
    float m = mix(1.0 - dfbm, dfbm, clamp(hn * 3.0, 0.0, 1.0));
    margin -= (1.0 - m) * uDetailAmount * 0.35 * detailFade;
  }
  // Defined boundary over a short distance, then dense inside.
  float d = smoothstep(0.0, 0.1, margin);
  // Denser towards the top (condensation increases with height).
  return d * mix(0.55, 1.0, hn);
}

`;class _t extends Me{constructor(a){super({name:"NubisMarch",glslVersion:re,vertexShader:oe,fragmentShader:_e(At,{core:{math:ke},bruneton:{common:ze,definitions:Be,runtime:Le},density:ft}),uniforms:a})}onBeforeRender(){}}class kt extends le{depthTexture=null;onSize=()=>{};onUpdate=()=>{};constructor(){super("NubisCloudsEffect",`
      void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) { outputColor = inputColor; }`,{attributes:Ae.DEPTH})}setDepthTexture(a){this.depthTexture=a}setSize(a,u){this.onSize(a,u)}update(a,u,l){this.onUpdate(a,l??0)}}const Fe=new ae(new ge(2,2));Fe.frustumCulled=!1;const Pt=new xe;function be(i,a,u){Fe.material=a,i.setRenderTarget(u),i.render(Fe,Pt)}const et=(i,a)=>new He({glslVersion:re,vertexShader:oe,fragmentShader:i,uniforms:a,depthTest:!1,depthWrite:!1});function It(i,a=Ue){const u=new kt,l=new ut;let c=null,d=null;const e={coverage:a.coverage,extinction:.06,shapeScale:2200,detailScale:280,detailAmount:1.2,weatherRepeat:nt,skyScale:1,silver:1,powder:.6,groundBounce:1,cirrus:0,maxDist:9e4,blend:.12,temporal:!0,resolution:.5,debug:0,diffuse:.35,groundShadow:.6};for(const[s,S]of new URLSearchParams(location.search)){const C=s.slice(2);s.startsWith("b_")&&C in e&&(e[C]=typeof e[C]=="boolean"?S!=="0":Number(S))}const o=s=>new G(s),t=new _t({sunDirection:o(new h),uWeather:o(l.texture),uShape:o(null),uDetail:o(null),uBlueNoise:o(rt()),uDepth:o(null),uInvProj:o(new U),uCamRot:o(new U),uCamFwd:o(new h),uLogDepthFar:o(1),uCamWorld:o(new h),uCamAlt:o(0),uUp:o(new h(0,1,0)),uCamECEF:o(new h),uToECEF:o(new Oe),uSunENU:o(new h),uFrame:o(0),uBase:o(a.base),uTop:o(a.top),uCoverage:o(e.coverage),uExtinction:o(e.extinction),uWeatherRepeat:o(e.weatherRepeat),uShapeScale:o(e.shapeScale),uDetailScale:o(e.detailScale),uDetailAmount:o(e.detailAmount),uCirrusAlt:o(a.cirrusAltitude),uCirrusCov:o(e.cirrus),uMaxDist:o(e.maxDist),uSkyScale:o(e.skyScale),uSilver:o(e.silver),uPowder:o(e.powder),uGroundBounce:o(e.groundBounce),uWind:o(new We),uDebug:o(0),uStratoBase:o(0),uStratoTop:o(0),uStratoCov:o(0),uDiffuse:o(.35),uShadow:o(.75),uPixelAngle:o(.002)}),r=t.uniforms,m=et(ct,{uCurrent:o(null),uCurrentDepth:o(null),uHistory:o(null),uInvProj:r.uInvProj,uCamRot:r.uCamRot,uPrevViewProj:o(new U),uBlend:o(e.blend),uValidHistory:o(!1)}),p=et(Mt,{uClouds:o(null),uLowDepth:o(null),uDepth:o(null),uInvProj:r.uInvProj,uCamRot:r.uCamRot,uCamFwd:r.uCamFwd,uLogDepthFar:r.uLogDepthFar});let n=null,x=null,_=null,v=1,T=1;const k=()=>{n?.dispose(),x?.forEach(A=>A.dispose()),_?.dispose();const s=Math.max(1,Math.round(v*e.resolution)),S=Math.max(1,Math.round(T*e.resolution));n=new K(s,S,{count:2,type:Q,depthBuffer:!1,minFilter:z,magFilter:z}),n.textures[1].minFilter=n.textures[1].magFilter=he;const C=()=>new K(s,S,{type:Q,depthBuffer:!1,minFilter:z,magFilter:z});x=[C(),C()],_=new K(v,T,{type:Q,depthBuffer:!1,minFilter:z,magFilter:z}),y=!1};u.onSize=(s,S)=>{v=s,T=S,k()};const b=new U,w=new U,L=new U,W=new h,f=new h;let y=!1,D=0,E=null;const P=new h,M=new h;u.onUpdate=s=>{if(!E||!n||!x||!_||!u.depthTexture)return;l.render(s),c||(c=Ge(s),d=it(s),r.uShape.value=c.texture,r.uDetail.value=d.texture);const S=s.getRenderTarget();r.uDepth.value=u.depthTexture,r.uFrame.value=D++,be(s,t,n);const[C,A]=x;m.uniforms.uCurrent.value=n.textures[0],m.uniforms.uCurrentDepth.value=n.textures[1],m.uniforms.uHistory.value=A.texture,m.uniforms.uValidHistory.value=y&&e.temporal,m.uniforms.uBlend.value=e.blend,L.makeTranslation(f.x-W.x,f.y-W.y,f.z-W.z),m.uniforms.uPrevViewProj.value.multiplyMatrices(b,L),be(s,m,C),x=[A,C],p.uniforms.uClouds.value=C.texture,p.uniforms.uLowDepth.value=n.textures[1],p.uniforms.uDepth.value=u.depthTexture,be(s,p,_),s.setRenderTarget(S),E.aerial.overlay={map:_.texture},b.copy(w),W.copy(f),y=!0};const O={enabled:!0,id:"b",label:"Nubis raymarcher (ours)",effect:u,attach(s){E=s,t.irradianceTexture=s.textures.irradianceTexture,t.scatteringTexture=s.textures.scatteringTexture,t.transmittanceTexture=s.textures.transmittanceTexture,t.singleMieScatteringTexture=s.textures.singleMieScatteringTexture??null,t.higherOrderScatteringTexture=s.textures.higherOrderScatteringTexture??null;const S=u.update.bind(u);u.update=(C,A,B)=>{if(!O.enabled){s.aerial.overlay=null;return}s.timer.mark("clouds"),S(C,A,B),s.timer.mark("post")}},update({cameraWorld:s}){if(!E)return;f.copy(s),i.updateMatrixWorld(),r.uInvProj.value.copy(i.projectionMatrixInverse),r.uCamRot.value.copy(i.matrixWorld),i.getWorldDirection(r.uCamFwd.value),r.uLogDepthFar.value=Math.log2(i.far+1),w.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse);const S=se,C=ye.origin.height,A=s.x,B=s.y+S+C,q=s.z,F=Math.hypot(A,B,q);r.uCamWorld.value.copy(s),r.uCamAlt.value=F-S,r.uUp.value.set(A/F,B/F,q/F),M.setFromMatrixPosition(E.worldToECEF),Pe(M,Ne.DEFAULT.bottomRadius,Ie.WGS84,P),r.uCamECEF.value.copy(M).add(P).multiplyScalar(.001),r.uToECEF.value.setFromMatrix4(E.worldToECEF),r.uSunENU.value.copy(E.sunENU),r.sunDirection.value.copy(E.sunECEF),r.uCoverage.value=e.coverage,r.uExtinction.value=e.extinction,r.uShapeScale.value=e.shapeScale,r.uDetailScale.value=e.detailScale,r.uDetailAmount.value=e.detailAmount,r.uWeatherRepeat.value=e.weatherRepeat,r.uSkyScale.value=e.skyScale,r.uSilver.value=e.silver,r.uPowder.value=e.powder,r.uGroundBounce.value=e.groundBounce,r.uCirrusCov.value=e.cirrus,r.uMaxDist.value=e.maxDist,r.uDebug.value=e.debug,r.uDiffuse.value=e.diffuse,r.uShadow.value=e.groundShadow,r.uPixelAngle.value=i.fov*Math.PI/180/Math.max(1,n?.height??450)},resetHistory(){y=!1},gui(s){s.add(e,"coverage",0,1,.01),s.add(e,"extinction",.005,.2,.001),s.add(e,"shapeScale",1e3,12e3,10),s.add(e,"detailScale",100,2e3,10),s.add(e,"detailAmount",0,1,.01),s.add(e,"weatherRepeat",100,1e3,1),s.add(e,"skyScale",0,3,.01),s.add(e,"silver",0,4,.01),s.add(e,"powder",0,1,.01),s.add(e,"groundBounce",0,3,.01),s.add(e,"cirrus",0,1,.01),s.add(e,"diffuse",0,2,.01),s.add(e,"groundShadow",0,1,.01),s.add(e,"maxDist",1e4,2e5,1e3),s.add(e,"blend",.02,1,.01),s.add(e,"temporal"),s.add(e,"resolution",.25,1,.05).onFinishChange(k)},stats:()=>({impl:"B nubis",res:`${n?.width}x${n?.height}`})};return O}const Nt=`
precision highp float;
precision highp sampler3D;
#include "core/math"
#include "bruneton/definitions"
uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;
#include "bruneton/common"
#include "bruneton/runtime"
uniform vec3 sunDirection;     // ECEF
uniform sampler3D uShape;
uniform mat4 uInvProj;
uniform mat4 uCamRot;
uniform vec3 uCamWorld;
uniform float uCamAlt;
uniform vec3 uUp;
uniform vec3 uCamECEF;         // km, altitude-corrected
uniform mat3 uToECEF;
uniform vec3 uSunENU;
uniform float uAlt;            // sheet altitude, m MSL
uniform float uTau;            // vertical optical depth at full coverage
uniform float uCover;          // coverage bias: 0 the clip's sparse wisps, + more of the sky (the dramatic sky)
uniform float uFarStart;       // distance where the far stratiform deck begins, m
uniform float uDeckAlt;        // top of the far stratiform deck, m MSL (0 = off)
uniform float uDeckGain;       // brightness of the deck top (albedo x phase), ~1 = Lambertian 0.75
uniform sampler2D uDepth;
uniform vec3 uCamFwd;
uniform float uLogDepthFar;
uniform vec2 uWindDir;         // ENU xz, unit
uniform float uTime;
in vec2 vUv;
layout(location = 0) out vec4 outColor;

const float RE = 6371008.8;
const float RECIP_4PI = 0.0795774715;
float hg(float mu, float g) { float g2 = g * g; return RECIP_4PI * (1.0 - g2) / pow(max(1e-4, 1.0 + g2 - 2.0 * g * mu), 1.5); }
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 x) {
  vec2 i = floor(x), f = fract(x), u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1, 0)), u.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), u.x), u.y);
}
float vfbm(vec2 x) { return vnoise(x) * 0.55 + vnoise(x * 2.1 + 7.3) * 0.3 + vnoise(x * 4.3 - 2.1) * 0.15; }
vec3 viewRay(vec2 uv) {
  vec4 c = uInvProj * vec4(uv * 2.0 - 1.0, 1.0, 1.0);
  return normalize((uCamRot * vec4(c.xyz / c.w, 0.0)).xyz);
}
float sceneDistance(vec2 uv, vec3 rd) {
  float d = texture(uDepth, uv).r;
  if (d >= 0.999999) return 1e9;
  float w = exp2(d * uLogDepthFar) - 1.0;
  return w / max(dot(rd, uCamFwd), 1e-4);
}
// Distance along the ray to altitude h (sphere about the Earth's centre);
// pick the near root when the camera is above h.
float shellT(float mu, float h, bool fromAbove) {
  float r0 = RE + uCamAlt;
  float c = (uCamAlt - h) * (2.0 * RE + uCamAlt + h);
  float b = r0 * mu;
  float disc = b * b - c;
  if (disc < 0.0) return -1.0;
  return fromAbove ? -b - sqrt(disc) : -b + sqrt(disc);
}

// High cirrus / cirrostratus, seen from below.
vec4 highSheet(vec3 rd, float mu, float sceneT, vec3 upECEF) {
  if (uCamAlt >= uAlt) return vec4(0.0);
  float t = shellT(mu, uAlt, false);
  if (t <= 0.0 || t > 9e5 || t > sceneT) return vec4(0.0);
  vec3 pr = rd * t;
  vec3 upP = normalize(pr + uUp * (RE + uCamAlt));
  float muS = max(dot(rd, upP), 0.02);
  // Fibrous pattern in world xz, stretched along the wind and advected by a
  // slow warp field.
  vec2 xz = (pr + uCamWorld).xz;
  vec2 along = uWindDir, across = vec2(-uWindDir.y, uWindDir.x);
  vec2 w = vec2(texture(uShape, vec3(xz / 90000.0, 0.11)).g, texture(uShape, vec3(xz / 90000.0 + 0.5, 0.67)).g) - 0.5;
  vec2 xzw = xz + w * 5000.0 + uWindDir * uTime * 12.0;
  vec2 s = vec2(dot(xzw, along), dot(xzw, across));
  float f1 = texture(uShape, vec3(s.x / 70000.0, 0.31, s.y / 4500.0)).g;
  float f2 = texture(uShape, vec3(s.x / 18000.0, 0.73, s.y / 1100.0)).b;
  float f3 = texture(uShape, vec3(s.x / 5000.0, 0.47, s.y / 420.0)).a;
  // Sparse wisps (clear blue between them), thickening slowly far away.
  float cover = smoothstep(0.58 - uCover, 0.78 - uCover, vfbm(xz / 60000.0));
  cover = mix(cover, 1.0, smoothstep(120000.0, 260000.0, t));
  float fib = smoothstep(0.5, 0.9, f1 * 0.5 + f2 * 0.35 + f3 * 0.15);
  float tauV = uTau * cover * (0.35 + 2.5 * fib);
  float alpha = 1.0 - exp(-tauV / muS);
  if (alpha < 1e-3) return vec4(0.0);
  vec3 sky;
  vec3 sun = GetSunAndSkyScalarIrradiance(upECEF * (ATMOSPHERE.bottom_radius + uAlt * METER_TO_LENGTH_UNIT), sunDirection, sky);
  float cosSun = dot(rd, uSunENU);
  // Ice crystals: strong forward scattering plus a broad lobe.
  vec3 L = sun * (0.55 * hg(cosSun, 0.85) + 0.45 * hg(cosSun, 0.25)) + sky * RECIP_4PI * 0.9;
  vec3 tr;
  vec3 ins = GetSkyRadianceToPoint(uCamECEF, uCamECEF + uToECEF * pr * METER_TO_LENGTH_UNIT, 0.0, sunDirection, tr);
  return vec4(alpha * (L * tr + ins), alpha);
}

// Far stratiform deck seen from above (ref 09): beyond uFarStart the
// sunlit top of an extensive stratus/stratocumulus deck. At a grazing angle
// it compresses into a thin, bright, sharp-edged band hugging the horizon,
// above the cumulus carpet and below the blue.
vec4 farDeck(vec3 rd, float mu, float sceneT, vec3 upECEF) {
  if (uDeckAlt <= 0.0 || uCamAlt <= uDeckAlt) return vec4(0.0);
  float t = shellT(mu, uDeckAlt, true);
  if (t <= 0.0 || t > sceneT || t > 6e5) return vec4(0.0);
  vec3 pr = rd * t;
  vec2 xz = (pr + uCamWorld).xz;
  // Sharp near edge, a ragged boundary, a few gaps.
  float edge = uFarStart + (vfbm(xz / 30000.0) - 0.5) * 20000.0;
  // Gaps near the edge only: further out the deck closes up so its far
  // horizon reads as one crisp, unbroken line (ref 09).
  float gaps = mix(smoothstep(0.25, 0.4, vfbm(xz / 15000.0 + 3.1)), 1.0, smoothstep(60000.0, 120000.0, t));
  float cover = smoothstep(edge - 2500.0, edge + 2500.0, t) * gaps;
  if (cover < 1e-3) return vec4(0.0);
  vec3 sky;
  vec3 sun = GetSunAndSkyScalarIrradiance(upECEF * (ATMOSPHERE.bottom_radius + uDeckAlt * METER_TO_LENGTH_UNIT), sunDirection, sky);
  vec3 upP = normalize(pr + uUp * (RE + uCamAlt));
  // Sunlit top of a thick cloud deck: near-Lambertian, albedo ~0.75, plus sky.
  vec3 L = uDeckGain * (sun * 0.75 * max(dot(upP, uSunENU), 0.0) / PI + sky * 0.75 / PI * 0.5);
  vec3 tr;
  vec3 ins = GetSkyRadianceToPoint(uCamECEF, uCamECEF + uToECEF * pr * METER_TO_LENGTH_UNIT, 0.0, sunDirection, tr);
  return vec4(cover * (L * tr + ins), cover);
}

void main() {
  vec3 rd = viewRay(vUv);
  float mu = dot(rd, uUp);
  float sceneT = sceneDistance(vUv, rd);
  vec3 upECEF = normalize(uCamECEF);
  vec4 hi = highSheet(rd, mu, sceneT, upECEF);
  vec4 lo = farDeck(rd, mu, sceneT, upECEF);
  // The deck (below, nearer for downward rays) over the high sheet.
  outColor = lo + (1.0 - lo.a) * hi;
}`;class Ut extends Me{constructor(a){super({name:"HighCloudSheet",glslVersion:re,vertexShader:oe,fragmentShader:_e(Nt,{core:{math:ke},bruneton:{common:ze,definitions:Be,runtime:Le}}),uniforms:a})}onBeforeRender(){}}class Lt extends le{depthTexture=null;onUpdate=()=>{};constructor(){super("HighSheetEffect",`
      uniform sampler2D uSheet;
      uniform sampler2D uOverlay;
      uniform bool uHasOverlay;
      uniform bool uEnabled;
      void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
        outputColor = inputColor;
        if (!uEnabled) return;
        vec4 sh = texture(uSheet, uv);
        if (sh.a <= 0.0) return;
        vec4 ov = uHasOverlay ? texture(uOverlay, uv) : vec4(0.0);
        outputColor.rgb = inputColor.rgb * (1.0 - sh.a) + sh.a * ov.rgb + (1.0 - ov.a) * sh.rgb;
      }`,{blendFunction:ve.SRC,attributes:Ae.DEPTH,uniforms:new Map([["uSheet",new G(null)],["uOverlay",new G(null)],["uHasOverlay",new G(!1)],["uEnabled",new G(!1)]])})}setDepthTexture(a){this.depthTexture=a}update(a,u){this.onUpdate(a,u?.width??a.domElement.width,u?.height??a.domElement.height)}}function Bt(i,a,u=0,l=45e3,c=1,d=0){const e=new Lt,o={altitude:i,tau:a,enabled:a>0},t=w=>new G(w),r=new Ut({sunDirection:t(new h),uShape:t(null),uInvProj:t(new U),uCamRot:t(new U),uCamWorld:t(new h),uCamAlt:t(0),uUp:t(new h(0,1,0)),uCamECEF:t(new h),uToECEF:t(new Oe),uSunENU:t(new h),uAlt:t(i),uTau:t(a),uCover:t(d),uFarStart:t(l),uDeckAlt:t(u),uDeckGain:t(c),uDepth:t(null),uCamFwd:t(new h),uLogDepthFar:t(1),uWindDir:t(new We(.8,.6)),uTime:t(0)}),m=r.uniforms,p=new ae(new ge(2,2),r);p.frustumCulled=!1;const n=new xe;let x=null,_=null,v=null,T=!1;const k=new h,b=new h;return e.onUpdate=(w,L,W)=>{const f=e.uniforms;if(f.get("uEnabled").value=!1,!v||!o.enabled||!T||!e.depthTexture)return;m.uDepth.value=e.depthTexture,_||(_=Ge(w),m.uShape.value=_.texture);const y=Math.max(1,Math.round(L/2)),D=Math.max(1,Math.round(W/2));(!x||x.width!==y||x.height!==D)&&(x?.dispose(),x=new K(y,D,{type:Q,depthBuffer:!1,minFilter:z,magFilter:z}));const E=w.getRenderTarget();w.setRenderTarget(x),w.render(p,n),w.setRenderTarget(E);const P=v.aerial.overlay?.map??null;f.get("uSheet").value=x.texture,f.get("uOverlay").value=P,f.get("uHasOverlay").value=P!=null,f.get("uEnabled").value=!0},{effect:e,params:o,attach(w){v=w,r.irradianceTexture=w.textures.irradianceTexture,r.scatteringTexture=w.textures.scatteringTexture,r.transmittanceTexture=w.textures.transmittanceTexture,r.singleMieScatteringTexture=w.textures.singleMieScatteringTexture??null,r.higherOrderScatteringTexture=w.textures.higherOrderScatteringTexture??null},update(w,L,W){if(!v)return;const f=se,y=ye.origin.height,D=w.x,E=w.y+f+y,P=w.z,M=Math.hypot(D,E,P);L.updateMatrixWorld(),m.uInvProj.value.copy(L.projectionMatrixInverse),m.uCamRot.value.copy(L.matrixWorld),L.getWorldDirection(m.uCamFwd.value),m.uLogDepthFar.value=Math.log2(L.far+1),m.uCamWorld.value.copy(w),m.uCamAlt.value=M-f,m.uUp.value.set(D/M,E/M,P/M),b.setFromMatrixPosition(v.worldToECEF),Pe(b,Ne.DEFAULT.bottomRadius,Ie.WGS84,k),m.uCamECEF.value.copy(b).add(k).multiplyScalar(.001),m.uToECEF.value.setFromMatrix4(v.worldToECEF),m.uSunENU.value.copy(v.sunENU),m.sunDirection.value.copy(v.sunECEF),m.uAlt.value=o.altitude,m.uTau.value=o.tau,m.uTime.value=W,T=!0}}}const zt=3;class tt{constructor(a,u){this.renderer=a,this.out=u}renderer;out;ring=[];seq=0;ready=!1;read(a,u,l,c,d,e=!1){const o=this.renderer;if(e)return this.drop(),o.readRenderTargetPixels(a,u,l,c,d,this.out),this.ready=!0,!0;const t=o.getContext();if(!this.ring.length){for(let n=0;n<zt;n++){const x=t.createBuffer();t.bindBuffer(t.PIXEL_PACK_BUFFER,x),t.bufferData(t.PIXEL_PACK_BUFFER,this.out.byteLength,t.STREAM_READ),this.ring.push({buf:x,fence:null,seq:0})}t.bindBuffer(t.PIXEL_PACK_BUFFER,null)}let r=!1,m=null;for(const n of this.ring)!n.fence||t.getSyncParameter(n.fence,t.SYNC_STATUS)!==t.SIGNALED||(!m||n.seq>m.seq)&&(m=n);if(m){t.bindBuffer(t.PIXEL_PACK_BUFFER,m.buf),t.getBufferSubData(t.PIXEL_PACK_BUFFER,0,this.out),t.bindBuffer(t.PIXEL_PACK_BUFFER,null),this.ready=r=!0;for(const n of this.ring)n.fence&&n.seq<=m.seq&&t.getSyncParameter(n.fence,t.SYNC_STATUS)===t.SIGNALED&&(t.deleteSync(n.fence),n.fence=null)}const p=this.ring.find(n=>!n.fence);if(p){const n=o.getRenderTarget();o.setRenderTarget(a),t.bindBuffer(t.PIXEL_PACK_BUFFER,p.buf),t.readPixels(u,l,c,d,t.RGBA,a.texture.type===st?t.FLOAT:t.UNSIGNED_BYTE,0),t.bindBuffer(t.PIXEL_PACK_BUFFER,null),o.setRenderTarget(n),p.fence=t.fenceSync(t.SYNC_GPU_COMMANDS_COMPLETE,0),p.seq=++this.seq,t.flush()}return r}drop(){if(!this.ring.length)return;const a=this.renderer.getContext();for(const u of this.ring)u.fence&&a.deleteSync(u.fence),a.deleteBuffer(u.buf);this.ring=[]}dispose(){this.drop()}}const dt=900,Gt=typeof location<"u"&&new URLSearchParams(location.search).has("syncprobe"),Ot=450,Wt=typeof location>"u"||new URLSearchParams(location.search).get("restprobe")!=="0",mt=`
#include "core/math"
#include "bruneton/definitions"
uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;
#include "bruneton/common"
#include "bruneton/runtime"
uniform vec3 sunDirection;
#include "density"
`,Ht=`
precision highp float;
precision highp sampler3D;
${mt}
uniform vec3 uLead;
uniform sampler2D uFront;   // takram's front depth (r, metres)
uniform bool uHasFront;
layout(location = 0) out vec4 outColor;
void main() {
  // Fraction of the view where takram's clouds start within 60 m: the camera
  // is inside one of *its* clouds, even where our density disagrees.
  float takIn = 0.0;
  if (uHasFront) {
    for (int y = 0; y < 3; y++) for (int x = 0; x < 3; x++)
      takIn += texture(uFront, vec2(0.25 + 0.25 * float(x), 0.25 + 0.25 * float(y))).r < 30.0 ? 1.0 / 9.0 : 0.0; // gated by altitude band in JS
    // Only when it's all around us, not a fringe on part of the view.
    takIn = smoothstep(0.7, 1.0, takIn);
  }
  float d = 0.0;
  const vec3 o[7] = vec3[7](vec3(0), vec3(40, 0, 0), vec3(-40, 0, 0), vec3(0, 40, 0), vec3(0, -40, 0), vec3(0, 0, 40), vec3(0, 0, -40));
  for (int i = 0; i < 7; i++) d += density(o[i], altitudeOf(o[i]), true);
  d /= 7.0;
  float ahead = 0.0;
  for (int i = 1; i <= 4; i++) {
    vec3 q = uLead * (float(i) / 4.0);
    ahead = max(ahead, density(q, altitudeOf(q), true) * (1.0 - 0.15 * float(i - 1)));
  }
  float near = max(d, ahead);
  const vec3 r[6] = vec3[6](vec3(1, 0, 0), vec3(-1, 0, 0), vec3(0, 1, 0), vec3(0, -1, 0), vec3(0, 0, 1), vec3(0, 0, -1));
  for (int i = 0; i < 6; i++) {
    vec3 q = r[i] * 150.0;
    near = max(near, density(q, altitudeOf(q), false));
  }
  outColor = vec4(max(d, ahead), takIn, ahead, near);
}`,jt=`
precision highp float;
precision highp sampler3D;
${mt}
uniform sampler2D uDepth;
uniform sampler3D uBlueNoise;
uniform mat4 uInvProj;
uniform mat4 uCamRot;
uniform vec3 uCamFwd;
uniform float uLogDepthFar;
uniform vec3 uSunENU;
uniform int uFrame;
uniform float uRange;
uniform float uFine;
uniform float uExtinction;
uniform float uWisp;
uniform float uDiffuse;
uniform float uTime;
uniform float uFloor;   // fog where takram has cloud and our density doesn't
in vec2 vUv;
layout(location = 0) out vec4 outColor;
layout(location = 1) out vec4 outDepth;

const float RECIP_4PI = 0.0795774715;
vec3 viewRay(vec2 uv) {
  vec4 c = uInvProj * vec4(uv * 2.0 - 1.0, 1.0, 1.0);
  return normalize((uCamRot * vec4(c.xyz / c.w, 0.0)).xyz);
}
float sceneDistance(vec2 uv, vec3 rd) {
  float d = texture(uDepth, uv).r;
  if (d >= 0.999999) return 1e9;
  float w = exp2(d * uLogDepthFar) - 1.0;
  return w / max(dot(rd, uCamFwd), 1e-4);
}
float hg(float mu, float g) { float g2 = g * g; return RECIP_4PI * (1.0 - g2) / pow(max(1e-4, 1.0 + g2 - 2.0 * g * mu), 1.5); }
// Multi-scatter octaves (Wrenninge): each octave sees less optical depth and a
// more isotropic phase, so deep interiors stay lit but lose the sun glow.
float multiScatter(float od, float mu) {
  float s = 0.0, a = 1.0, b = 1.0, c = 1.0;
  for (int k = 0; k < 4; k++) {
    s += a * exp(-od * b) * mix(hg(mu, -0.15 * c), hg(mu, 0.7 * c), 0.6);
    a *= 0.55; b *= 0.4; c *= 0.5;
  }
  return s;
}
// Cloud density plus near-field wisps: high-frequency Worley erosion that
// shreds the edges and thins pockets, drifting slowly with the air.
float nearDensity(vec3 p, float h) {
  float d = density(p, h, true);
  if (d <= 0.0) return 0.0;
  vec3 w = (p + uCamWorld) + vec3(uTime * 3.0, 0.0, uTime * 1.5);
  vec3 n = texture(uDetail, w / 60.0).rgb;
  float f = n.r * 0.6 + n.g * 0.3 + n.b * 0.1;
  float edge = 1.0 - smoothstep(0.35, 0.95, d);           // strongest where the cloud is thin
  d = clamp(d - (1.0 - f) * uWisp * (0.25 + 0.6 * edge), 0.0, 1.0);
  // Pockets: a slower 3D modulation so the interior isn't uniform.
  vec4 pk = texture(uShape, w / 650.0);
  float pocket = pk.g * 0.7 + pk.b * 0.3;
  return d * mix(0.2, 1.5, smoothstep(0.3, 0.85, pocket));
}
// Optical depth toward the sun: the first two steps see the pockets and
// wisps, so lighting varies at the scale you fly through; then coarse.
float sunOpticalDepth(vec3 p, float jitter) {
  float od = 0.0;
  const float steps[3] = float[3](30.0, 110.0, 380.0);
  float t = 0.0;
  for (int j = 0; j < 3; j++) {
    vec3 q = p + uSunENU * (t + steps[j] * jitter);
    float h = altitudeOf(q);
    od += (j == 0 ? nearDensity(q, h) : density(q, h, false)) * steps[j];
    t += steps[j];
  }
  return od * uExtinction;
}
// Optical depth straight up: denser cloud overhead shades the sky light.
float skyOpticalDepth(vec3 p) {
  vec3 a = p + uUp * 80.0;
  return density(a, altitudeOf(a), false) * 170.0 * uExtinction;
}
void main() {
  vec3 rd = viewRay(vUv);
  float sceneT = sceneDistance(vUv, rd);
  float tMax = min(sceneT, uRange);
  ivec3 bnSize = textureSize(uBlueNoise, 0);
  float bn = texelFetch(uBlueNoise, ivec3(ivec2(gl_FragCoord.xy) % bnSize.xy, uFrame % bnSize.z), 0).r;
  float mu = dot(rd, uSunENU);

  vec3 upECEF = normalize(uCamECEF);
  vec3 skyIrr;
  vec3 sunIrr = GetSunAndSkyScalarIrradiance(uCamECEF, sunDirection, skyIrr);
  vec3 skyB, skyT;
  GetSunAndSkyScalarIrradiance(upECEF * (ATMOSPHERE.bottom_radius + uBase * METER_TO_LENGTH_UNIT), sunDirection, skyB);
  GetSunAndSkyScalarIrradiance(upECEF * (ATMOSPHERE.bottom_radius + uTop * METER_TO_LENGTH_UNIT), sunDirection, skyT);
  vec3 groundIrr = sunIrr * max(dot(uUp, uSunENU), 0.0) * 0.6 + skyB * 0.5;

  const int N_FINE = 20, N_COARSE = 8;
  vec3 L = vec3(0.0);
  float T = 1.0, wSum = 0.0, tSum = 0.0;
  float tPrev = 0.0;
  for (int i = 0; i < N_FINE + N_COARSE; i++) {
    // Fine and denser near the camera (where wisps parallax fastest), then
    // coarse out to the hand-off; jittered per pixel.
    bool fine = i < N_FINE;
    float tNext = fine ? uFine * pow((float(i) + 1.0) / float(N_FINE), 1.6)
                       : mix(uFine, uRange, (float(i - N_FINE) + 1.0) / float(N_COARSE));
    float t = mix(tPrev, tNext, bn);
    float dt = tNext - tPrev;
    tPrev = tNext;
    if (t > tMax || T < 0.02) break;
    vec3 p = rd * t;
    float h = altitudeOf(p);
    // Hand off to takram toward the far end.
    float d = (fine ? nearDensity(p, h) : density(p, h, false));
    if (uFloor > 0.0 && t < 350.0) {
      // Inside takram's cloud but outside ours: a textured fog floor so the
      // interior never falls back to takram's flat blue.
      vec3 w = p + uCamWorld;
      float f = texture(uDetail, w / 90.0).r * 0.6 + texture(uShape, w / 500.0).g * 0.4;
      d = max(d, uFloor * mix(0.05, 0.4, f) * (1.0 - smoothstep(120.0, 260.0, t)));
    }
    d *= 1.0 - smoothstep(uRange * 0.75, uRange, t);
    if (d <= 0.002) continue;
    float sigma = d * uExtinction;
    // Coarse samples are far and mostly hidden: approximate their lighting.
    float od = fine ? sunOpticalDepth(p, bn) : 4.0;
    float hf = clamp((h - uBase) / (uTop - uBase), 0.0, 1.0);
    vec3 sky = mix(skyB, skyT, hf);
    vec3 S = sunIrr * multiScatter(od, mu);
    // Diffusion: sunlight that has scattered many times inside the cloud is
    // near-isotropic and falls off slowly (roughly 1 / (1 + k·τ) for a thick,
    // almost non-absorbing slab), so interiors stay grey-white, brighter on the
    // sun side and toward the top, dimmer and bluer deep in and at the base.
    S += sunIrr * RECIP_4PI * uDiffuse * mix(0.75, 1.1, hf) / (1.0 + 0.22 * od);
    // Sky from above (more of it near the top), shaded by cloud overhead;
    // desert bounce from below.
    S += sky * RECIP_4PI * mix(0.35, 0.75, hf) * (0.25 + 0.75 * exp(-(fine ? skyOpticalDepth(p) : 2.0) * 0.6));
    S += groundIrr * (0.3 / PI) * RECIP_4PI * (1.0 - hf);
    // Local self-shadowing below the light-march resolution: small dense
    // knots shade their surroundings, which gives the interior its streaming,
    // mottled texture (two Worley scales, world-anchored so they parallax).
    if (fine) {
      vec3 w = p + uCamWorld;
      float m1 = texture(uDetail, w / 55.0).r, m2 = texture(uDetail, w / 210.0).g;
      S *= mix(0.55, 1.2, m1 * 0.45 + m2 * 0.55);
    }
    S *= sigma;
    float tr = exp(-sigma * min(dt, tMax - t + dt));
    L += T * (S - S * tr) / sigma;
    wSum += T * (1.0 - tr) * t; tSum += T * (1.0 - tr);
    T *= tr;
  }
  outColor = vec4(L, 1.0 - T);
  outDepth = vec4(tSum > 1e-4 ? wSum / tSum : -1.0, min(sceneT, 1e9), 0.0, 1.0);
}`;class at extends Me{constructor(a,u,l){super({name:a,glslVersion:re,vertexShader:oe,fragmentShader:_e(u,{core:{math:ke},bruneton:{common:ze,definitions:Be,runtime:Le},density:ft}),uniforms:l})}onBeforeRender(){}}class qt extends le{depthTexture=null;onUpdate=()=>{};constructor(){super("NearCloudEffect",`
      uniform sampler2D uNear;
      uniform float uWeight;
      uniform float uDebug;
      void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
        if (uDebug > 0.0) { vec4 n = texture(uNear, uv); outputColor = vec4(n.a > 0.5 ? 0.05 : 0.0, n.a > 0.1 && n.a <= 0.5 ? 0.05 : 0.0, n.a <= 0.1 ? 0.05 : 0.0, 1.0); return; }
        if (uWeight <= 0.0) { outputColor = inputColor; return; }
        // Small cross blur while upsampling the half-res buffer: hides the
        // stochastic sampling that temporal accumulation hasn't averaged yet.
        vec2 t = 1.0 / vec2(textureSize(uNear, 0));
        vec4 n = texture(uNear, uv) * 0.4 + (texture(uNear, uv + vec2(t.x, 0.0)) + texture(uNear, uv - vec2(t.x, 0.0))
               + texture(uNear, uv + vec2(0.0, t.y)) + texture(uNear, uv - vec2(0.0, t.y))) * 0.15;
        n *= uWeight;
        outputColor = vec4(inputColor.rgb * (1.0 - n.a) + n.rgb, inputColor.a);
      }`,{blendFunction:ve.SRC,attributes:Ae.DEPTH,uniforms:new Map([["uNear",new G(null)],["uWeight",new G(0)],["uDebug",new G(new URLSearchParams(location.search).has("neardebug")?1:0)]])})}setDepthTexture(a){this.depthTexture=a}update(a,u){this.onUpdate(a,u?.width??a.domElement.width,u?.height??a.domElement.height)}}function Vt(i=Ue,a=null){const u=new qt,l=ut.shared();let c=null,d=null;const e=g=>new G(g),o={sunDirection:e(new h),uWeather:e(l.texture),uShape:e(null),uDetail:e(null),uCamWorld:e(new h),uCamAlt:e(0),uUp:e(new h(0,1,0)),uCamECEF:e(new h),uToECEF:e(new Oe),uWind:e(new We),uPixelAngle:e(0),uBase:e(i.base),uTop:e(i.top),uCoverage:e(i.coverage*1.15),uWeatherRepeat:e(nt),uStratoBase:e(i.strato?.base??0),uStratoTop:e(i.strato?.top??0),uStratoCov:e(i.strato?1:0),uShapeScale:e(2200),uDetailScale:e(280),uDetailAmount:e(1)},t=new at("InCloudProbe",Ht,{...o,uLead:e(new h),uFront:e(null),uHasFront:e(!1)}),r=new at("NearCloudMarch",jt,{...o,uDepth:e(null),uBlueNoise:e(rt()),uInvProj:e(new U),uCamRot:e(new U),uCamFwd:e(new h),uLogDepthFar:e(1),uSunENU:e(new h),uFrame:e(0),uRange:e(dt),uFine:e(Ot),uExtinction:e(.02),uWisp:e(.9),uDiffuse:e(.35),uTime:e(0),uFloor:e(0)}),m=new He({glslVersion:re,vertexShader:oe,fragmentShader:ct,depthTest:!1,depthWrite:!1,uniforms:{uCurrent:e(null),uCurrentDepth:e(null),uHistory:e(null),uInvProj:r.uniforms.uInvProj,uCamRot:r.uniforms.uCamRot,uPrevViewProj:e(new U),uBlend:e(.2),uValidHistory:e(!1)}}),p=t.uniforms,n=r.uniforms,x=new ae(new ge(2,2));x.frustumCulled=!1;const _=new xe,v=(g,R,I)=>{x.material=R,g.setRenderTarget(I),g.render(x,_)},T=new K(1,1,{type:st,depthBuffer:!1,minFilter:he,magFilter:he}),k=new Float32Array(4);let b=null,w=!1,L=0,W=!1,f=!1,y=null,D=null;const E=(g,R)=>{if(y&&y.width===g&&y.height===R)return;y?.dispose(),D?.forEach(N=>N.dispose()),y=new K(g,R,{count:2,type:Q,depthBuffer:!1,minFilter:z,magFilter:z}),y.textures[1].minFilter=y.textures[1].magFilter=he;const I=()=>new K(g,R,{type:Q,depthBuffer:!1,minFilter:z,magFilter:z});D=[I(),I()],ue=!1},P=new h,M=new h,O=new h,s=new h,S=new h,C=new h,A=new U,B=new U,q=new U;let F=null,j=0,V=0,H=0,Z=0,J=8,ce=!1,ue=!1,gt=0,je=0,we=!1,Ce=null;u.onUpdate=(g,R,I)=>{if(u.uniforms.get("uWeight").value=H,!we||!u.depthTexture||!Ce||!F){ue=!1;return}const N=g.getRenderTarget();E(Math.max(1,Math.round(R/2)),Math.max(1,Math.round(I/2))),n.uDepth.value=u.depthTexture,n.uFrame.value=gt++,n.uPixelAngle.value=Ce.fov*Math.PI/180/y.height,v(g,r,y);const[X,fe]=D,Y=m.uniforms;Y.uCurrent.value=y.textures[0],Y.uCurrentDepth.value=y.textures[1],Y.uHistory.value=fe.texture,Y.uValidHistory.value=ue,Y.uBlend.value=Math.min(.7,.2+s.length()/400),q.makeTranslation(S.x-C.x,S.y-C.y,S.z-C.z),Y.uPrevViewProj.value.multiplyMatrices(B,q),v(g,m,X),D=[fe,X],g.setRenderTarget(N),u.uniforms.get("uNear").value=X.texture,B.copy(A),C.copy(S),ue=!0};const qe=(g,R)=>{g.irradianceTexture=R.textures.irradianceTexture,g.scatteringTexture=R.textures.scatteringTexture,g.transmittanceTexture=R.textures.transmittanceTexture,g.singleMieScatteringTexture=R.textures.singleMieScatteringTexture??null,g.higherOrderScatteringTexture=R.textures.higherOrderScatteringTexture??null},Ve={realtime:!1,effect:u,get value(){return j},get density(){return V},get nearWeight(){return H},get floor(){return Z},get proximity(){return w},setFrontDepth(g){p.uFront.value=g,p.uHasFront.value=g!=null},reset(){J=8,ce=!1,s.set(0,0,0),ue=!1},attach(g){F=g,qe(t,g),qe(r,g)},update(g,R,I,N){if(!F)return;Ce=R,l.render(N),c||(c=Ge(N),d=it(N),o.uShape.value=c.texture,o.uDetail.value=d.texture);const X=se,fe=ye.origin.height,Y=g.x,Ye=g.y+X+fe,Ke=g.z,ee=Math.hypot(Y,Ye,Ke);if(S.copy(g),o.uCamWorld.value.copy(g),o.uCamAlt.value=ee-X,o.uUp.value.set(Y/ee,Ye/ee,Ke/ee),M.setFromMatrixPosition(F.worldToECEF),Pe(M,Ne.DEFAULT.bottomRadius,Ie.WGS84,P),o.uCamECEF.value.copy(M).add(P).multiplyScalar(.001),o.uToECEF.value.setFromMatrix4(F.worldToECEF),o.sunDirection.value.copy(F.sunECEF),ce&&I>0&&s.subVectors(g,O).divideScalar(I),(I>0||!ce)&&(O.copy(g),ce=!0),p.uLead.value.copy(s).multiplyScalar(.6),je+=I,a)V=a.density,j=a.value,H=a.nearWeight,Z=a.floor,w=a.proximity,J=0;else{const Xe=ee-X,$e=150+s.length()*.6+100,Qe=(ie,xt)=>Xe<ie-$e||Xe>xt+$e,ne=Wt&&Qe(i.base,i.top)&&(i.strato==null||i.strato.top<=i.strato.base||Qe(i.strato.base,i.strato.top));if(ne){if(k.fill(0),b&&(b.dispose(),b=null),!f){f=!0;const ie=N.getRenderTarget();x.material=t,N.setRenderTarget(T),N.render(x,_),N.setRenderTarget(ie)}}else!b&&W&&(b=new tt(N,k),b.ready=!0);W=ne;const Ze=!ne&&(Gt||!Ve.realtime||I<=0||J>0||!b?.ready),Je=!ne&&(Ze||L++%2===0);if(Je){const ie=N.getRenderTarget();x.material=t,N.setRenderTarget(T),N.render(x,_),N.setRenderTarget(ie)}ne||(b??=new tt(N,k)),Je&&b.read(T,0,0,1,1,Ze);const de=ee-X,me=de>i.base-60&&de<i.top+60||i.strato!=null&&de>i.strato.base-60&&de<i.strato.top+60?k[1]:0;V=Math.max(k[0],me*.2);const Se=ot(.03,.25,V);w=k[3]>.002||me>0;const Ee=ot(.01,.12,V);J>0?Z=me:I>0&&(Z+=(me-Z)*(1-Math.exp(-I/.1))),J>0?(j=Se,H=Ee,J--):I>0&&(j+=(Se-j)*(1-Math.exp(-I/(Se>j?.08:.35))),H+=(Ee-H)*(1-Math.exp(-I/(Ee>H?.06:.4))))}n.uFloor.value=Z,we=w||H>.002,we&&(R.updateMatrixWorld(),n.uInvProj.value.copy(R.projectionMatrixInverse),n.uCamRot.value.copy(R.matrixWorld),R.getWorldDirection(n.uCamFwd.value),n.uLogDepthFar.value=Math.log2(R.far+1),n.uSunENU.value.copy(F.sunENU),n.uTime.value=je,A.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse))}};return Ve}const ot=(i,a,u)=>{const l=Math.min(1,Math.max(0,(u-i)/(a-i)));return l*l*(3-2*l)},ht=12,pt=[.1643,.1403,.1238,.1619,.1376,.1204,.1549,.13,.111,.1441,.1185,.0975,.1304,.1046,.0829,.1152,.0902,.0702,.0998,.0773,.0621,.0858,.0676,.0605,.0743,.0623,.0657,.0665,.0622,.0769,.063,.0672,.092,.0641,.0765,.1082,.0697,.089,.1225,.0792,.1029,.1322,.0916,.1163,.1356,.1058,.1275,.1319,.1202,.135,.1216,.1336,.1378,.106,.1446,.1354,.0873,.1519,.128,.0676,.1549,.1164,.0492,.1531,.1017,.0337,.1466,.0852,.0223,.1357,.0684,.0152,.1214,.0527,.0122,.1045,.039,.0126,.0865,.0281,.0152,.0684,.0204,.0189,.0516,.0158,.0227,.0368,.0139,.0258,.025,.0144,.0278,.0163,.0163,.0284,.0109,.0191,.0276,.0085,.0221,.0259,.0087,.0248,.0234,.0108,.0267,.0207,.0142,.0278,.0179,.0182,.0279,.0154,.0222,.0271,.0134,.0257,.0257,.0118,.0283,.0237,.0107,.0298,.0214,.01,.0303,.0191,.0097,.0298,.017,.0095,.0283,.015,.0094,.0263,.0134,.0093,.0239,.0121,.0092,.0214,.0112,.009,.0189,.0105,.0088,.0166,.01,.0084,.0146,.0097,.008,.013,.0094,.0075,.0117,.0092,.007,.0108,.009,.0064,.0101,.0087,.0059,.0097,.0085,.0054,.0093,.0082,.005,.009,.0079,.0046,.0088,.0076,.0043,.0085,.0073,.004,.0082,.007,.0037,.0078,.0066,.0035,.0075,.0063,.0033,.0071,.006,.0032,.0068,.0056,.003,.0065,.0053,.0029,.0062,.0049,.0027,.0059,.0045,.0026,.0056,.0041,.0025,.0054,.0038,.0024,.0052,.0034,.0024,.0049,.0031,.0023,.0046,.0029,.0022,.0043,.0026,.0021,.004,.0024,.002,.0036,.0023,.0019,.0032,.0022,.0017,.0028,.0021,.0015,.0024,.002,.0013,.002,.002,.0011,.0016,.0019,8e-4,.0013,.0018,6e-4,.001,.0017,4e-4,8e-4,.0016,2e-4,6e-4,.0015,1e-4,5e-4,.0014,-0,4e-4,.0012,-1e-4,3e-4,.0011,-1e-4,3e-4,9e-4,-2e-4,2e-4,8e-4,-1e-4,2e-4,7e-4,-1e-4,2e-4,5e-4,-1e-4,2e-4,4e-4,-0,1e-4,3e-4,-0,1e-4,2e-4,0,0,1e-4,0,0,0,0],Re=256,te=64,Yt=Math.tan(.533/2*Math.PI/180),vt=7e3,pe=pt.length/3,Kt=()=>{const i=[];for(let a=0;a<pe;a++)i.push(`vec3(${pt.slice(a*3,a*3+3).map(u=>u.toFixed(4)).join(",")})`);return`const vec3 GLY_TABLE[${pe}] = vec3[](${i.join(",")});`},Xt=`
precision highp float;
in vec2 vUv;
layout(location = 0) out vec4 outColor;
uniform sampler2D uOverlay;
uniform sampler2D uFront;
uniform sampler2D uMask;
uniform bool uShadowOn;
uniform mat4 uInvProj;
uniform mat4 uCamRot;
uniform vec3 uAnti;          // antisolar direction, render space
uniform vec3 uMaskC;         // mask centre relative to the camera, render space
uniform vec3 uMaskR;
uniform vec3 uMaskU;
uniform float uGloryGain;
uniform float uShadowK;
uniform float uDiffuse;
uniform float uDebug;
${Kt()}
const float GLY_MAX = ${ht.toFixed(1)};
const float GLY_SPAN = ${te.toFixed(1)};
const float GLY_TEXEL0 = ${(te/Re).toFixed(5)};
const float GLY_SUN_TAN = ${Yt.toFixed(7)};

vec3 gloryAt(float deg) {
  float f = clamp(deg / GLY_MAX, 0.0, 1.0) * float(${pe-1});
  int i = int(floor(f));
  int j = min(i + 1, ${pe-1});
  return mix(GLY_TABLE[i], GLY_TABLE[j], f - float(i));
}
float maskAt(vec2 lat, float lod) {
  vec2 m = lat / GLY_SPAN + 0.5;
  if (any(lessThan(m, vec2(0.0))) || any(greaterThan(m, vec2(1.0)))) return 0.0;
  return textureLod(uMask, m, lod).r;
}
// Occlusion of the sun's disc (0..1) at a point \`along\` metres down-sun of the jet,
// \`lat\` metres off the jet's sun axis: the silhouette convolved with the sun disc.
float jetShadow(vec2 lat, float along, vec2 px) {
  float r = along * GLY_SUN_TAN + uDiffuse;
  if (length(lat) > r + 14.0) return 0.0;
  float spacing = r * 0.443;            // sqrt(pi / 16) r: one tap per disc area / 16
  float lod = max(0.0, log2(spacing / GLY_TEXEL0));
  float rot = 6.2831853 * fract(52.9829189 * fract(dot(px, vec2(0.06711056, 0.00583715))));
  float s = 0.0;
  for (int k = 0; k < 16; k++) {
    float fk = float(k);
    float rr = sqrt((fk + 0.5) / 16.0) * r;
    float a = fk * 2.39996323 + rot;
    s += maskAt(lat + rr * vec2(cos(a), sin(a)), lod);
  }
  return s / 16.0;
}

void main() {
  // the change in radiance the glory and the shadow make to the composited image
  outColor = vec4(0.0);
  vec2 uv = vUv;
  vec4 ov = texture(uOverlay, uv);
  if (ov.a < 0.01) return;
  vec4 c = uInvProj * vec4(uv * 2.0 - 1.0, 1.0, 1.0);
  vec3 rd = normalize((uCamRot * vec4(c.xyz / c.w, 0.0)).xyz);
  float deg = degrees(acos(clamp(dot(rd, uAnti), -1.0, 1.0)));
  vec3 glory = deg < GLY_MAX ? gloryAt(deg) * uGloryGain * smoothstep(0.35, 0.95, ov.a) : vec3(0.0);
  float occ = 0.0;
  if (uShadowOn) {
    float t = texture(uFront, uv).a;
    vec3 d = rd * t - uMaskC;
    float along = dot(d, uAnti);
    if (along > 1.0 && t < 2.0e5) occ = jetShadow(vec2(dot(d, uMaskR), dot(d, uMaskU)), along, gl_FragCoord.xy);
  }
  outColor.rgb = ov.rgb * ((1.0 + glory) * (1.0 - uShadowK * occ) - 1.0);
  if (uDebug > 1.5) { outColor = vec4(occ, texture(uFront, uv).a, 0.0, 0.0); return; }  // numbers for checks
  if (uDebug > 0.5) outColor.rgb = vec3(occ, glory.r * 3.0, 0.0) * 4.0;
}`;class $t extends le{onUpdate=()=>{};constructor(){super("CloudGloryEffect",`
      uniform sampler2D uDelta;
      uniform bool uEnabled;
      void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
        outputColor = inputColor;
        if (uEnabled) outputColor.rgb = max(inputColor.rgb + texture(uDelta, uv).rgb, vec3(0.0));
      }`,{blendFunction:ve.SRC,uniforms:new Map([["uDelta",new G(null)],["uEnabled",new G(!1)]])})}update(a,u){this.onUpdate(a,u?.width??a.domElement.width,u?.height??a.domElement.height)}}class Qt{target;centre=new h;right=new h(1,0,0);up=new h(0,0,1);valid=!1;scene=new Et;cam=new bt(-te/2,te/2,te/2,-te/2,1,400);mat=new Tt({color:16777215,side:Dt});caster=null;clearColor=new lt;proxies=[];extra=[];constructor(){this.target=new K(Re,Re,{depthBuffer:!1,generateMipmaps:!0,minFilter:Ft,magFilter:z}),this.scene.matrixWorldAutoUpdate=!1}ignoreHidden=new Set;setCaster(a,u=[],l={}){this.ignoreHidden=new Set(l.ignoreHidden??[]);for(const c of[...this.proxies.map(d=>d.proxy),...this.extra])this.scene.remove(c);if(this.proxies=[],this.extra=[],this.caster=a,!!a){a.traverse(c=>{const d=c;if(!d.isMesh||!d.geometry)return;const e=new ae(d.geometry,this.mat);e.matrixAutoUpdate=!1,e.frustumCulled=!1,this.proxies.push({src:d,proxy:e}),this.scene.add(e)});for(const c of u){const d=new ae(c,this.mat);d.matrixAutoUpdate=!1,d.frustumCulled=!1,this.extra.push(d),this.scene.add(d)}}}get active(){return this.caster!=null}shown(a){for(let u=a;u;u=u.parent)if(!u.visible&&!this.ignoreHidden.has(u.name))return!1;return!0}render(a,u){const l=this.caster;if(!l){this.valid=!1;return}l.getWorldPosition(this.centre);for(const{src:t,proxy:r}of this.proxies)r.visible=this.shown(t),r.matrix.copy(t.matrixWorld),r.matrixWorld.copy(t.matrixWorld);for(const t of this.extra)t.matrix.copy(l.matrixWorld),t.matrixWorld.copy(l.matrixWorld);const c=this.cam;c.position.copy(this.centre).addScaledVector(u,200),c.up.set(0,1,0),Math.abs(u.y)>.98&&c.up.set(1,0,0),c.lookAt(this.centre),c.updateMatrixWorld(),this.right.setFromMatrixColumn(c.matrixWorld,0),this.up.setFromMatrixColumn(c.matrixWorld,1);const d=a.getRenderTarget(),e=a.getClearAlpha(),o=a.getClearColor(this.clearColor);a.setRenderTarget(this.target),a.setClearColor(0,0),a.clear(!0,!1,!1),a.render(this.scene,c),a.setRenderTarget(d),a.setClearColor(o,e),this.valid=!0}}const Te=new h,$=new h,Zt=new h,De=new h,Jt=new Rt;function ea(i,a,u,l){const c=[1/0,1/0,-1/0,-1/0];let d=0,e=0;const o=p=>{if($.copy(p).applyMatrix4(i.matrixWorldInverse),$.z>-1){e++;return}d++,$.applyMatrix4(i.projectionMatrix),c[0]=Math.min(c[0],$.x),c[1]=Math.min(c[1],$.y),c[2]=Math.max(c[2],$.x),c[3]=Math.max(c[3],$.y)},t=Zt.setFromMatrixPosition(i.matrixWorld);De.set(0,1,0),Math.abs(a.y)>.9&&De.set(1,0,0);const r=De.cross(a).normalize(),m=new h().copy(a).applyAxisAngle(r,ht*Math.PI/180);o(Te.copy(a).multiplyScalar(1e4).add(t));for(let p=0;p<12;p++)o(Te.copy(m).applyQuaternion(Jt.setFromAxisAngle(a,p/12*Math.PI*2)).multiplyScalar(1e4).add(t));if(u)for(const p of[Math.max(1,l-300),l+300,l+1500,vt])for(const n of[-20,20])o(Te.copy(a).multiplyScalar(p).add(u).addScaledVector(r,n));return d?e?[-1,-1,1,1]:c[0]>1||c[1]>1||c[2]<-1||c[3]<-1?null:c:null}function ta(i,a){const u=new $t,l=f=>new G(f),c=new He({name:"CloudGlory",glslVersion:re,vertexShader:oe,fragmentShader:Xt,depthTest:!1,depthWrite:!1,uniforms:{uOverlay:l(null),uFront:l(null),uMask:l(null),uShadowOn:l(!1),uInvProj:l(new U),uCamRot:l(new U),uAnti:l(new h(0,-1,0)),uMaskC:l(new h),uMaskR:l(new h(1,0,0)),uMaskU:l(new h(0,0,1)),uGloryGain:l(1),uShadowK:l(.75),uDiffuse:l(1),uDebug:l(0)}}),d=f=>c.uniforms[f],e=new ae(new ge(2,2),c);e.frustumCulled=!1;const o=new xe;let t=null;const r={glory:!0,shadow:!0,gloryGain:2.5,shadowK:.75,diffuse:.3,debug:!1},m=a,p=m?.mask??new Qt,n={shadow:!1,reach:1/0,glory:!1,pixels:0};let x=null,_=()=>null,v=0;const T=[i.top,i.strato?.top??-1,i.alto?.top??-1].filter(f=>f>0),k=[i.base,i.strato?.base??-1,i.alto?.base??-1].filter(f=>f>0);let b=null;const w=new lt;let L=0;return u.onUpdate=(f,y,D)=>{f.getClearColor(w),L=f.getClearAlpha();const E=x?.sunENU,P=x?.aerial.overlay?.map??null,M=!!E&&!!P&&!!b&&E.y>.01&&(r.glory||r.shadow);if(u.uniforms.get("uEnabled").value=M,n.glory=M&&r.glory,!M||!E||!b){n.shadow=!1;return}d("uOverlay").value=P,d("uAnti").value.copy(E).negate(),d("uInvProj").value.copy(b.projectionMatrixInverse),d("uCamRot").value.copy(b.matrixWorld),d("uGloryGain").value=r.glory?r.gloryGain:0,d("uShadowK").value=r.shadowK,d("uDiffuse").value=r.diffuse,d("uDebug").value=r.debug?typeof r.debug=="number"?r.debug:1:0;let O=1/0;for(let F=0;F<T.length;F++)v>k[F]&&(O=Math.min(O,(v-Math.min(T[F],v))/E.y));n.reach=O;const s=_(),S=r.shadow&&p.active&&!!s&&O<vt;S&&!m&&p.render(f,E),n.shadow=S&&p.valid,d("uShadowOn").value=n.shadow,n.shadow&&(d("uFront").value=s,d("uMask").value=p.target.texture,d("uMaskC").value.copy(p.centre),d("uMaskR").value.copy(p.right),d("uMaskU").value.copy(p.up));const C=Math.max(1,Math.round(y/2)),A=Math.max(1,Math.round(D/2));(!t||t.width!==C||t.height!==A)&&(t?.dispose(),t=new K(C,A,{type:Q,depthBuffer:!1,minFilter:z,magFilter:z}));const B=ea(b,d("uAnti").value,n.shadow?p.centre:null,O),q=f.getRenderTarget();if(f.setRenderTarget(t),t.scissorTest=!1,f.setClearColor(0,0),f.clear(!0,!1,!1),B){const F=Math.max(0,Math.floor((B[0]*.5+.5)*C)-2),j=Math.max(0,Math.floor((B[1]*.5+.5)*A)-2),V=Math.min(C,Math.ceil((B[2]*.5+.5)*C)+2),H=Math.min(A,Math.ceil((B[3]*.5+.5)*A)+2);n.pixels=Math.max(0,V-F)*Math.max(0,H-j)/(C*A),V>F&&H>j&&(t.scissor.set(F,j,V-F,H-j),t.scissorTest=!0,f.setRenderTarget(t),f.render(e,o),t.scissorTest=!1)}else n.pixels=0;u.uniforms.get("uEnabled").value=n.pixels>0,f.setRenderTarget(q),f.setClearColor(w,L),u.uniforms.get("uDelta").value=t.texture},{effect:u,params:r,state:n,mask:p,get target(){return t},bench(f,y=400){const D=f.getContext(),E=new Uint8Array(4),P=()=>{f.setRenderTarget(null),D.readPixels(0,0,1,1,D.RGBA,D.UNSIGNED_BYTE,E)},M=A=>{P();const B=performance.now();for(let q=0;q<y;q++)A();return P(),(performance.now()-B)/y},O=f.getRenderTarget(),s=t?M(()=>{f.setRenderTarget(t),f.render(e,o)}):NaN,S=x?.sunENU,C=S&&p.active?M(()=>p.render(f,S)):NaN;return f.setRenderTarget(O),{delta:+s.toFixed(4),mask:+C.toFixed(4)}},setCaster(f,y,D){p.setCaster(f,y,D)},attach(f,y){x=f,_=y},update(f,y){b=y;const D=se+ye.origin.height;v=Math.hypot(f.x,f.y+D,f.z)-se}}}class aa extends le{constructor(a={saturation:1,tint:[1,1,1]}){const u=new h(...a.tint);u.divideScalar(.2126*u.x+.7152*u.y+.0722*u.z),super("SkyGradeEffect",`
      uniform float uSaturation;
      uniform vec3 uTint;
      void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
        float y = dot(inputColor.rgb, vec3(0.2126, 0.7152, 0.0722));
        outputColor = vec4(max(vec3(0.0), mix(vec3(y), inputColor.rgb, uSaturation)) * uTint, inputColor.a);
      }`,{blendFunction:ve.SRC,uniforms:new Map([["uSaturation",new G(a.saturation)],["uTint",new G(u)]])})}get saturation(){return this.uniforms.get("uSaturation").value}set saturation(a){this.uniforms.get("uSaturation").value=a}}function fa(i,a,u,l={}){const c=l.clouds??Ue;(l.weather||c.style)&&Ct({...l.weather,style:c.style??"fair"});const d=l.impl??"a",e=d==="a"?St(u,c):It(u,c),o=Vt(c,l.follow?.whiteout??null),t=l.whiteout??d==="a",r={...c.sheet??{altitude:c.cirrusAltitude,tau:0}};if(typeof location<"u")for(const[v,T]of new URLSearchParams(location.search))(v==="s_deckAltitude"||v==="s_deckStart"||v==="s_deckGain")&&(r[v.slice(2)]=Number(T));const m=Bt(r.altitude,typeof location<"u"&&new URLSearchParams(location.search).has("nosheet")?0:r.tau,r.deckAltitude??0,r.deckStart,r.deckGain,r.cover??0),p=ta(c,l.follow?.glory),n=yt(i,a,u,{preEffects:[e.effect],postEffects:[p.effect,m.effect,...t?[o.effect]:[],...c.grade?[new aa(c.grade)]:[]],lighting:l.lighting,separateOutput:l.separateOutput,toneMapping:!l.hdr,deferExposure:l.deferExposure,shareTables:l.follow?.atmosphere});e.attach(n),o.attach(n),m.attach(n),p.attach(n,()=>e.frontDepth?.()??null);let x=0;const _=Promise.all([n.ready,wt()]).then(()=>{});return{atmosphere:n,clouds:e,whiteout:o,highSheet:m,glory:p,ready:_,get inCloud(){return o.value},update(v,T,k){n.update(v),e.update({cameraWorld:v,camera:T,delta:k}),x+=k,m.update(v,T,x),p.update(v,T),o.setFrontDepth(t?e.frontDepth?.()??null:null),o.update(v,T,k,i),e.nearFieldFade?.(t?o.nearWeight:0,dt)},cut(){e.resetHistory(),o.reset()},render(v){n.render(v)},setSize(v,T){n.setSize(v,T)}}}export{tt as A,fa as c};
