import{F as j,z as Z,a as ee,j as te,V as ae,H as oe,T as ne,b as F,E as ie,R as re,c as I,d as se,B as le}from"./shared-oZu7p6SI.js";import{V as m,ah as E,U as u,k as A,C as ue,S as ce,A as me,y as he,s as fe,d as U,aa as S,Y as de}from"./three.module-9D8i-8qh.js";import{e as ge}from"./geo-DYayEwnZ.js";import{T as G}from"./index-DxQAg0pk.js";import{g as pe}from"./blueNoise-Xopz6Ulp.js";const ve={...G.sky.defaultTime};function Q({day:a,hour:t},e=2025){return new Date(Date.UTC(e,0,1)+((a-1)*24+t-G.sky.utcOffset)*36e5)}function ye(a,t=new m){return j(Q(a),t)}function Be(a,t,e=new m){const o=new E().setFromMatrix4(t).transpose();return ye(a,e).applyMatrix3(o).normalize()}function Ye(a){const t=Math.asin(Math.max(-1,Math.min(1,a.y)))*180/Math.PI,e=(Math.atan2(a.x,-a.z)*180/Math.PI+360)%360;return{elevation:t,azimuth:e}}function qe(a,t,e=new m){const o=a*Math.PI/180,n=t*Math.PI/180;return e.set(Math.sin(o)*Math.cos(n),Math.sin(n),-Math.cos(o)*Math.cos(n))}class xe{supported;gl;ext;current=null;pending=[];frameSums=new Map;frame=0;avg=new Map;samples=[];enabled=!0;constructor(t){this.gl=t.getContext(),this.ext=this.gl.getExtension("EXT_disjoint_timer_query_webgl2"),this.supported=this.ext!=null}mark(t){if(!this.supported||!this.enabled)return;this.end();const e=this.gl.createQuery();e&&(this.gl.beginQuery(this.ext.TIME_ELAPSED_EXT,e),this.current={query:e,name:t,frame:this.frame})}stop(){!this.supported||!this.enabled||(this.end(),this.frame++,this.poll())}reset(){this.avg.clear(),this.samples.length=0,this.frameSums.clear()}end(){this.current&&(this.gl.endQuery(this.ext.TIME_ELAPSED_EXT),this.pending.push(this.current),this.current=null)}poll(){const t=this.gl,e=t.getParameter(this.ext.GPU_DISJOINT_EXT);for(;this.pending.length;){const n=this.pending[0];if(!t.getQueryParameter(n.query,t.QUERY_RESULT_AVAILABLE))break;this.pending.shift();const g=t.getQueryParameter(n.query,t.QUERY_RESULT);if(t.deleteQuery(n.query),e){this.frameSums.delete(n.frame);continue}let f=this.frameSums.get(n.frame);f||this.frameSums.set(n.frame,f=new Map),f.set(n.name,(f.get(n.name)??0)+g/1e6)}const o=this.pending.length?this.pending[0].frame:this.frame;for(const[n,g]of this.frameSums){if(n>=o)continue;let f=0;const i={};for(const[r,c]of g)f+=c,i[r]=c,this.avg.set(r,H(this.avg.get(r),c));i.total=f,this.avg.set("total",H(this.avg.get("total"),f)),this.samples.push(i),this.samples.length>600&&this.samples.shift(),this.frameSums.delete(n)}}stats(){if(!this.supported)return{gpu:"no timer ext"};const t={};for(const[e,o]of this.avg)t[`gpu_${e}`]=`${o.toFixed(2)} ms`;return t}}const H=(a,t)=>a===void 0?t:a*.9+t*.1,we="/assets/stars-kM9bgGHh.bin",P=Math.PI/180,O=-4.5,Ee=21e-7,Ne=.02,R=[.18,.35],Me=3,Pe=new E().set(-.0548755604,-.8734370902,-.4838350155,.4941094279,-.44482963,.7469822445,-.867666149,-.1980763734,.4559837762),s={uNight:new u(0),uNightEcefToEnu:new u(new E),uNightCam:new u(new m),uNightRealSun:new u(new m(0,0,1)),uNightMoon:new u(new m(0,0,1)),uNightMoonDisc:new u(new S(.0045,0,0,0)),uNightSunDisc:new u(1),uNightTwilight:new u(0),uNightAirglow:new u(new m),uNightStars:new u(0),uNightEnuToGal:new u(new E),uNightMilkyGain:new u(0),uNightGlow:new u([new S,new S,new S,new S]),uNightGlowColor:new u(new m(1,.62,.36)),uNightCloudUp:new u(new m),uNightCloudAmb:new u(new m),uNightCloudAlt:new u(new U(2500,4500)),uNightScotopic:new u(new U(0,1))},Se=`
uniform float uNight;
uniform mat3 uNightEcefToEnu;
uniform vec3 uNightCam;
uniform vec3 uNightRealSun;
uniform vec3 uNightMoon;
uniform vec4 uNightMoonDisc;
uniform float uNightTwilight;
uniform vec3 uNightAirglow;
uniform float uNightStars;
uniform mat3 uNightEnuToGal;
uniform float uNightMilkyGain;
uniform vec4 uNightGlow[4];
uniform vec3 uNightGlowColor;
uniform vec3 uNightCloudUp;
uniform vec3 uNightCloudAmb;
uniform vec2 uNightCloudAlt;
uniform vec2 uNightScotopic;

vec3 nightScotopic(vec3 c) {
  if (uNightScotopic.x <= 0.0) return c;
  float Y = dot(c, vec3(0.2126, 0.7152, 0.0722));
  float s = uNightScotopic.x * (1.0 - smoothstep(0.004, 0.09, Y * uNightScotopic.y));
  return mix(c, Y * vec3(0.80, 0.96, 1.30), s);
}

// the cities' light scattered in the air: a dome on the horizon toward each (over it, all round)
float nightGlowAt(vec3 d) {
  float sum = 0.0;
  float el = asin(clamp(d.y, -1.0, 1.0));
  float lh = length(d.xz);
  float aloft = exp(-max(uNightCam.y - 1200.0, 0.0) / 3500.0);
  for (int i = 0; i < 4; i++) {
    vec4 g = uNightGlow[i];
    if (g.w <= 0.0) continue;
    vec2 to = g.xy - uNightCam.xz;
    float D = length(to), R = g.z;
    float cosA = (lh > 1e-4 && D > 1.0) ? dot(d.xz / lh, to / D) : 1.0;
    float ang = acos(clamp(cosA, -1.0, 1.0));
    float spread = atan(R, D);
    float lobe = exp(-pow(max(ang - 0.7 * spread, 0.0) / (0.45 * spread + 0.16), 2.0));
    lobe = mix(lobe, 1.0, smoothstep(1.3 * R, 0.3 * R, D));
    float h = 0.07 + 0.45 * R / (R + D);
    float e0 = max(el, -0.03);
    float dome = exp(-e0 / h) + 0.12 * exp(-e0 / (4.0 * h));
    float fall = pow(1.0 + D / R, -2.3);
    sum += g.w * lobe * dome * fall * mix(0.3, 1.0, aloft);
  }
  return sum;
}

// the Milky Way, procedural (no texture unit to spare in this pass): g the direction in galactic coordinates
float nmHash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float nmNoise(vec3 x) {
  vec3 i = floor(x), f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(nmHash(i), nmHash(i + vec3(1, 0, 0)), f.x), mix(nmHash(i + vec3(0, 1, 0)), nmHash(i + vec3(1, 1, 0)), f.x), f.y),
             mix(mix(nmHash(i + vec3(0, 0, 1)), nmHash(i + vec3(1, 0, 1)), f.x), mix(nmHash(i + vec3(0, 1, 1)), nmHash(i + vec3(1, 1, 1)), f.x), f.y), f.z);
}
vec3 nightMilkyWay(vec3 g) {
  float b = asin(clamp(g.z, -1.0, 1.0)) * 57.29578;
  if (abs(b) > 40.0) return vec3(0.0);
  float l = atan(g.y, g.x) * 57.29578;
  float toward = 0.5 + 0.5 * cos(radians(l));
  float sig = 3.5 + 3.5 * toward;
  float I = exp(-pow((b + 0.4) / sig, 2.0)) * (0.25 + 0.75 * pow(toward, 1.6));
  I += 1.1 * exp(-pow(l / 11.0, 2.0) - pow((b + 1.5) / 8.0, 2.0));
  I += 0.4 * exp(-pow((l - 75.0) / 8.0, 2.0) - pow((b - 1.0) / 5.6, 2.0));
  I += 0.45 * exp(-pow((l - 27.0) / 4.0, 2.0) - pow((b + 2.0) / 2.8, 2.0));
  float n = 0.5 * nmNoise(g * 9.0) + 0.25 * nmNoise(g * 19.0) + 0.125 * nmNoise(g * 41.0) + 0.0625 * nmNoise(g * 83.0);
  I *= 0.5 + 1.0 * n;
  // the dust: the Great Rift (Cygnus to Sagittarius, just above the plane)
  if (l > -10.0 && l < 85.0) {
    float lane = exp(-pow((b - 0.8 - 0.02 * l) / (1.4 + 0.012 * l), 2.0));
    I *= 1.0 - 0.75 * lane * (0.6 + 0.8 * nmNoise(g * 30.0 + 7.0));
  }
  return vec3(0.95 + 0.1 * toward, 0.93, 0.95 - 0.12 * toward) * I * 0.55;
}

// The moon's near side, procedural (no texture unit to spare in this pass), in selenographic body coordinates
// P = (sin lon cos lat, sin lat, cos lon cos lat): +x east, +y north, +z toward the Earth. The maria from their real
// places and sizes (IAU), the boundaries warped; the bright ray craters (Tycho, Copernicus, Kepler, Aristarchus,
// Proclus); three octaves of craters (bowl, rim, young ones' ejecta) faded out under a pixel, so a 1,200 mm lens
// sees a cratered surface and a normal lens a clean disc. Albedo is relative to the highlands (~1).
vec3 nmSel(float lat, float lon) { lat = radians(lat); lon = radians(lon); return vec3(sin(lon) * cos(lat), sin(lat), cos(lon) * cos(lat)); }
float nmMare(vec3 P, float lat, float lon, float r) { float d = length(P - nmSel(lat, lon)) / radians(r); return exp(-d * d * 0.7); }
float nmMaria(vec3 P, float wob, out float dark) {
  float m = 0.0;
  // Procellarum (several lobes), Imbrium, Serenitatis, Tranquillitatis, Crisium, Fecunditatis, Nectaris, Nubium,
  // Cognitum, Humorum, Insularum, Vaporum, the Sinus, Frigoris (a band), the limb's Smythii, Marginis, Australe
  m = max(m, nmMare(P, 26.0, -56.0, 15.0)); m = max(m, nmMare(P, 12.0, -52.0, 13.0)); m = max(m, nmMare(P, 0.0, -43.0, 11.0));
  m = max(m, nmMare(P, 38.0, -62.0, 10.0)); m = max(m, nmMare(P, 6.0, -64.0, 10.0)); m = max(m, nmMare(P, -6.0, -50.0, 7.0));
  m = max(m, nmMare(P, 33.0, -16.0, 17.0)); m = max(m, nmMare(P, 40.0, -28.0, 9.0));
  float ser = nmMare(P, 27.5, 17.5, 10.0); m = max(m, ser);
  float tra = max(nmMare(P, 8.5, 31.0, 11.0), nmMare(P, 13.0, 24.0, 7.0)); m = max(m, tra);
  m = max(m, nmMare(P, 17.0, 59.0, 7.5)) ;
  m = max(m, nmMare(P, -4.0, 51.0, 9.0)); m = max(m, nmMare(P, -12.0, 52.0, 6.5));
  m = max(m, nmMare(P, -15.2, 35.0, 5.0));
  m = max(m, nmMare(P, -21.0, -16.5, 9.5)); m = max(m, nmMare(P, -10.0, -22.0, 6.0));
  m = max(m, nmMare(P, -24.4, -38.6, 5.5)); m = max(m, nmMare(P, 7.5, -31.0, 7.0));
  m = max(m, nmMare(P, 13.3, 3.6, 4.5)); m = max(m, nmMare(P, 11.0, -8.0, 5.0)); m = max(m, 0.8 * nmMare(P, 2.0, 1.0, 3.5)); m = max(m, nmMare(P, 18.0, 10.0, 5.0)); m = max(m, nmMare(P, -2.0, 18.0, 6.0));
  m = max(m, nmMare(P, 56.0, -28.0, 5.0)); m = max(m, nmMare(P, 57.0, -10.0, 5.0)); m = max(m, nmMare(P, 56.0, 8.0, 5.0)); m = max(m, nmMare(P, 58.0, 26.0, 4.5));
  m = max(m, nmMare(P, -1.0, 86.0, 5.0)); m = max(m, nmMare(P, 13.0, 86.0, 4.0)); m = max(m, 0.7 * nmMare(P, -46.0, 88.0, 7.0));
  // dark floors: Plato, Grimaldi
  m = max(m, nmMare(P, 51.6, -9.4, 1.6)); m = max(m, nmMare(P, -5.2, -68.6, 3.0));
  // the darkest: Tranquillitatis, Procellarum's west, Serenitatis's rim (its middle is lighter)
  dark = 0.55 * tra + 0.35 * nmMare(P, 20.0, -60.0, 9.0) + 0.3 * ser * (1.0 - nmMare(P, 27.5, 17.5, 6.5));
  // the lobes' sum as a field, its edge cut with noise: the basins merge into one dark complex with ragged shores
  return smoothstep(0.12, 0.62, m + wob);
}
float nmRays(vec3 P, float lat, float lon, float rc, float len, float n, float seed) {
  vec3 C = nmSel(lat, lon), t1 = normalize(cross(vec3(0.0, 1.0, 0.0), C)), t2 = cross(C, t1), v = P - C;
  float d = length(v); vec2 a = vec2(dot(v, t1), dot(v, t2)) / max(d, 1e-5);
  rc = radians(rc); len = radians(len);
  float s = nmNoise(vec3(a * n, seed)) * 0.65 + nmNoise(vec3(a * n * 2.7, seed + 3.0)) * 0.35;
  s = smoothstep(0.52, 0.85, s) * (0.55 + 0.45 * nmNoise(vec3(a * n * 1.3, d * 40.0 + seed)));
  float halo = exp(-max(d - rc, 0.0) / (rc * 2.5));
  return max(s * exp(-max(d - rc, 0.0) / len), halo) * smoothstep(rc * 0.6, rc * 1.05, d) + smoothstep(rc, 0.0, d) * 0.6;
}
// one octave of craters: the nearest in the 3x3x3 cells. Returns (albedo change, height gradient on P's tangent plane)
vec4 nmCraters(vec3 P, float F, float mare, float seed, float fade) {
  vec3 g = P * F, i = floor(g);
  vec4 out4 = vec4(0.0);
  for (int z = -1; z <= 1; z++) for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
    vec3 c = i + vec3(x, y, z);
    float h = nmHash(c + seed), h2 = nmHash(c + seed + 17.3), h3 = nmHash(c + seed + 41.7);
    if (h > mix(0.6, 0.92, mare)) {
      vec3 ctr = c + vec3(h2, h3, nmHash(c + seed + 5.1));
      vec3 v = g - ctr; v -= P * dot(v, P);
      float r = 0.18 + 0.32 * h3 * h3, d = length(v) / r;
      if (d < 2.2) {
        // the profile: a bowl, a rim at 1, the ejecta falling off; the young (bright) ones ~1 in 8
        float dh = d < 1.0 ? 2.0 * d : -1.6 * exp(-(d - 1.0) * 4.0) * step(1.0, d);
        out4.yzw += normalize(v + 1e-6) * dh * 0.35 * fade;
        float young = step(0.95, h2);
        out4.x += fade * (young * (0.22 * smoothstep(1.8, 0.8, d)) + (1.0 - young) * (0.035 * smoothstep(1.15, 0.9, d) * step(0.85, d) - 0.025 * smoothstep(0.9, 0.2, d)));
      }
    }
  }
  return out4;
}
vec3 nightMoonAlbedo(vec3 P, float px, out vec3 grad) {
  // px: pixels per lunar radius; the detail fades in from ~1.5 pixels per crater cell
  vec3 W = vec3(nmNoise(P * 5.0 + 1.0), nmNoise(P * 5.0 + 7.0), nmNoise(P * 5.0 + 13.0)) - 0.5;
  W += 0.5 * (vec3(nmNoise(P * 13.0 + 3.0), nmNoise(P * 13.0 + 9.0), nmNoise(P * 13.0 + 21.0)) - 0.5);
  vec3 Pw = normalize(P + 0.07 * W);
  float wob = 0.24 * (nmNoise(P * 9.0 + 5.0) - 0.5) + 0.14 * (nmNoise(P * 23.0 + 2.0) - 0.5) + 0.07 * (nmNoise(P * 57.0 + 8.0) - 0.5);
  float dark, m = nmMaria(Pw, wob, dark);
  float f1 = nmNoise(P * 9.0), f2 = nmNoise(P * 23.0), f3 = nmNoise(P * 61.0) * smoothstep(20.0, 60.0, px);
  // the southern highlands brighter
  float hi = 1.0 + 0.08 * smoothstep(0.0, -0.7, P.y) + 0.18 * (f1 - 0.5) + 0.12 * (f2 - 0.5) + 0.08 * (f3 - 0.5);
  // the maria's own flows: lighter and darker lava, the wrinkle ridges' faint lines
  float fl = nmNoise(Pw * 17.0 + 4.0), rid = 1.0 - abs(2.0 * nmNoise(Pw * 31.0 + 9.0) - 1.0);
  float ma = 0.6 + 0.12 * (f1 - 0.5) + 0.16 * (fl - 0.5) + 0.05 * (f3 - 0.5) + 0.05 * smoothstep(0.75, 0.97, rid) * smoothstep(20.0, 60.0, px) - 0.09 * dark;
  float a = mix(hi, ma, m);
  // the ray craters
  float rays = 0.0;
  rays += 0.75 * nmRays(P, -43.3, -11.2, 0.75, 22.0, 9.0, 1.0);    // Tycho
  rays += 0.55 * nmRays(P, 9.6, -20.1, 0.8, 9.0, 11.0, 2.0);       // Copernicus
  rays += 0.45 * nmRays(P, 8.1, -38.0, 0.45, 6.0, 12.0, 3.0);      // Kepler
  rays += 0.9 * nmRays(P, 23.7, -47.4, 0.35, 2.0, 14.0, 4.0);      // Aristarchus
  rays += 0.45 * nmRays(P, 16.1, 46.8, 0.4, 5.0, 10.0, 5.0);       // Proclus
  rays += 0.35 * nmRays(P, -8.9, 61.1, 1.1, 3.0, 12.0, 6.0);       // Langrenus
  rays += 0.4 * nmRays(P, -32.5, 54.0, 0.6, 6.0, 12.0, 7.0);       // Stevinus, Furnerius
  rays += 0.35 * nmRays(P, 73.0, -10.0, 0.7, 7.0, 10.0, 8.0);      // Anaxagoras
  a += rays * 0.4;
  // the craters, three octaves
  grad = vec3(0.0);
  for (int k = 0; k < 3; k++) {
    float F = k == 0 ? 14.0 : k == 1 ? 34.0 : 80.0;
    float fade = smoothstep(1.5, 4.0, px / F);
    if (fade <= 0.0) break;
    vec4 c = nmCraters(P, F, m, float(k) * 11.0, fade);
    a += c.x * (k == 0 ? 0.9 : k == 1 ? 0.7 : 0.5);
    grad += c.yzw;
  }
  // a touch of colour: the titanium-rich maria bluish, the others brownish (barely)
  return a * mix(vec3(1.0), vec3(0.975, 0.99, 1.025), m * (0.4 + dark));
}

vec3 nightMoonDisc(vec3 rayEcef, float fragAngle0) {
  if (uNightMoonDisc.y <= 0.0) return vec3(0.0);
  // (the pass's ray derivative is unreliable at a silhouette: a pixel is never wider than this here)
  float fragAngle = min(fragAngle0, 0.002);
  float cr = uNightMoonDisc.x;
  vec3 m = uNightMoon;
  float c = dot(rayEcef, m);
  float ang = acos(clamp(c, -1.0, 1.0));
  if (ang > cr + 2.0 * fragAngle) return vec3(0.0);
  vec3 e = normalize(cross(vec3(0.0, 0.0, 1.0), m));
  vec3 n = cross(m, e);
  vec3 off = rayEcef - m * c;
  vec2 q = vec2(dot(off, e), dot(off, n)) / sin(cr);
  float q2 = min(dot(q, q), 1.0);
  // the disc as seen from the north: sky east (+e) is selenographic west
  vec3 P = vec3(-q.x, q.y, sqrt(1.0 - q2));
  vec3 grad;
  vec3 alb = nightMoonAlbedo(P, cr / max(fragAngle, 1e-7), grad);
  vec3 Pn = normalize(P - grad * 0.06);
  vec3 N = -Pn.x * e + Pn.y * n - Pn.z * m;
  float mu0 = dot(N, uNightRealSun), muv = max(dot(N, -m), 0.0);
  // Lommel-Seeliger with a little Lambert (the full moon nearly flat to the limb, a soft terminator)
  float lit = mu0 > 0.0 ? mix(mu0, 2.0 * mu0 / (mu0 + muv + 1e-3), 0.78) : 0.0;
  lit *= mix(0.9, 1.0, sqrt(max(1.0 - q2, 0.0)));
  float aa = smoothstep(cr + fragAngle, cr - fragAngle, ang);
  return vec3(1.0, 0.965, 0.92) * alb * 0.95 * (lit + uNightMoonDisc.w) * aa * uNightMoonDisc.y * GetSolarRadiance();
}

vec3 nightSky(vec3 sky, vec3 rayEcef, vec3 scene, float shadowLength, float fragAngle) {
  if (uNightTwilight > 0.0) {
    vec3 t2;
    sky += GetSkyRadiance(vCameraPosition, rayEcef, shadowLength, uNightRealSun, t2) * uNightTwilight;
  }
  vec3 add = nightMoonDisc(rayEcef, fragAngle);
  // (by day only the moon's disc: nothing else to do off it)
  if (uNight <= 0.0 && add.r <= 0.0) return sky;
  float r = length(vCameraPosition), mu = dot(vCameraPosition, rayEcef) / r;
  vec3 Tv = RayIntersectsGround(ATMOSPHERE, r, mu) ? vec3(0.0) : GetTransmittanceToTopAtmosphereBoundary(ATMOSPHERE, transmittance_texture, max(r, ATMOSPHERE.bottom_radius), mu);
  if (uNight > 0.0) {
    vec3 d = normalize(uNightEcefToEnu * rayEcef);
    add += scene * uNightStars;
    if (uNightMilkyGain > 0.0) add += nightMilkyWay(uNightEnuToGal * d) * uNightMilkyGain;
    // airglow (~95 km): brighter toward the horizon (van Rhijn), dimmed by the air below it
    float sz2 = 1.0 - d.y * d.y;
    float vr = inversesqrt(max(1.0 - 0.9708 * sz2, 0.03));
    sky += uNightAirglow * vr * (0.35 + 0.65 * Tv) * step(-0.02, d.y);
    sky += uNightGlowColor * nightGlowAt(d);
  }
  return nightScotopic(sky + Tv * add);
}

vec3 nightGround(vec3 radiance, vec3 positionECEF, float shadowLength, float dist, vec3 rayEcef) {
  if (uNightTwilight > 0.0) {
    vec3 t2;
    radiance += GetSkyRadianceToPoint(vCameraPosition, positionECEF, shadowLength, uNightRealSun, t2) * uNightTwilight;
  }
  if (uNight > 0.0) {
    vec3 d = normalize(uNightEcefToEnu * rayEcef);
    radiance += uNightGlowColor * nightGlowAt(d) * 0.7 * (1.0 - exp(-dist / 22000.0));
  }
  return nightScotopic(radiance);
}

vec4 nightCloud(vec4 ov, vec3 rayEcef) {
  if (uNight <= 0.0 || ov.a <= 0.0) return ov;
  vec3 d = normalize(uNightEcefToEnu * rayEcef);
  float y = uNightCam.y, t = -1.0, below = 1.0;
  if (y < uNightCloudAlt.x) { if (d.y > 0.01) t = (uNightCloudAlt.x - y) / d.y; }
  else if (y > uNightCloudAlt.y) { if (d.y < -0.01) { t = (y - uNightCloudAlt.y) / -d.y; below = 0.3; } }
  else t = 1500.0;
  float up = 0.0;
  if (t > 0.0) {
    // the cities under the cloud (the glow sources: their light spread a little past their edge)
    vec2 xz = uNightCam.xz + d.xz * min(t, 250000.0);
    for (int i = 0; i < 4; i++) {
      vec4 g = uNightGlow[i];
      if (g.w <= 0.0) continue;
      vec2 o = (xz - g.xy) / (1.15 * g.z);
      up += g.w * exp(-dot(o, o));
    }
    up *= below;
  }
  ov.rgb += ov.a * (uNightCloudUp * up + uNightCloudAmb);
  return ov;
}
`,Ce=[["vec3 readNormal(",`${Se}
vec3 readNormal(`],["vec3 getLunarRadiance(",`uniform float uNightSunDisc;
vec3 getLunarRadiance(`],["radiance += transmittance * GetSolarRadiance() * antialias;","radiance += transmittance * GetSolarRadiance() * antialias * uNightSunDisc;"],["vec4 overlay = texture(overlayBuffer, uv);","vec4 overlay = nightCloud(texture(overlayBuffer, uv), normalize(vRayDirection));"],[`    outputColor.a = 1.0;
    #else // SKY`,`    outputColor.rgb = nightSky(outputColor.rgb, rayDirection, inputColor.rgb, shadowLength, fragmentAngle);
    outputColor.a = 1.0;
    #else // SKY`],["applyTransmittanceInscatter(positionECEF, shadowLength, radiance);",`applyTransmittanceInscatter(positionECEF, shadowLength, radiance);
  radiance = nightGround(radiance, positionECEF, shadowLength, length(viewPosition), rayDirection);`]];function be(a){const t=a;let e=t.getFragmentShader();for(const[o,n]of Ce){if(!e.includes(o)){console.warn(`[night] aerial perspective shader changed: no "${o.slice(0,50)}"; the night sky is off`);return}e=e.replace(o,n)}t.setFragmentShader(e);for(const[o,n]of Object.entries(s))t.uniforms.set(o,n)}function Te(){const a={uEciToEnu:{value:new E},uGain:{value:0},uPx:{value:1},uFar:{value:1e6}},t=new ce({uniforms:a,transparent:!0,depthWrite:!1,depthTest:!0,blending:me,vertexColors:!0,vertexShader:`
      attribute float magnitude;
      uniform mat3 uEciToEnu;
      uniform float uGain, uPx, uFar;
      varying vec3 vCol;
      varying float vCore;
      void main() {
        vec3 d = normalize(uEciToEnu * position);
        float m = mix(-2.0, 8.0, magnitude);
        float flux = pow(10.0, -0.4 * m);
        // the brightest stars a little larger, all at least ~1.6 px (so they survive the lens's resampling)
        float px = (1.7 + 1.2 * smoothstep(1.5, -1.0, m)) * uPx;
        // twinkle is the lens's job; extinction is the aerial perspective's
        vCol = color * flux * uGain * 2.2 / (px * px * 0.6);
        vCore = px;
        vec4 mv = viewMatrix * vec4(d * uFar * 0.9, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = m > 6.8 || uGain <= 0.0 ? 0.0 : px;
      }`,fragmentShader:`
      varying vec3 vCol;
      varying float vCore;
      void main() {
        // at the far plane: only where nothing else was drawn (the sky), however far the terrain reaches
        gl_FragDepth = 1.0;
        vec2 c = gl_PointCoord * 2.0 - 1.0;
        float r2 = dot(c, c);
        if (r2 > 1.0) discard;
        gl_FragColor = vec4(vCol * exp(-r2 * 3.0), 1.0);
      }`}),e=new he(new fe,t);e.name="stars",e.frustumCulled=!1,e.renderOrder=-10,e.visible=!1;const o=fetch(we).then(n=>n.arrayBuffer()).then(n=>{e.geometry.dispose(),e.geometry=new te(n)}).catch(n=>console.warn("[night] stars",n));return{points:e,uniforms:a,ready:o}}const z={stars:1.6,milkyWay:.05,airglow:[.0045,.0062,.0058],glow:.11,cloudUp:.05,scotopic:.65,earthshine:.0012,ground:[.02,.024,.03]},Ae=typeof location>"u"?[]:(new URLSearchParams(location.search).get("nightoff")??"").split(",").filter(Boolean),ke=new A,Fe=new A,B=new E,Re=new E,Y=new m;function ze(){const a=Te(),t={...z,airglow:[...z.airglow],ground:[...z.ground]},e={mode:"sun",sunEl:45,moonEl:-90,moonAz:0,moonLit:0,phase:0,gain:1,dark:0,realSunECEF:new m,realSunENU:new m,moonECEF:new m,moonENU:new m};let o={sources:[]},n="",g=typeof location>"u"||new URLSearchParams(location.search).get("nightsky")!=="0";const f=new ue;return{state:e,look:t,uniforms:s,get stars(){return a.points},starsReady:a.ready,get enabled(){return g},set enabled(i){g=i,n=""},setCity(i){o=i},update(i,r,c){const v=`${i.getTime()}`;if(v!==n){n=v;const d=B.setFromMatrix4(r),y=s.uNightEcefToEnu.value.copy(d).transpose();Y.setFromMatrixPosition(r),j(i,e.realSunECEF),Z(i,e.moonECEF,Y),e.realSunENU.copy(e.realSunECEF).applyMatrix3(y).normalize(),e.moonENU.copy(e.moonECEF).applyMatrix3(y).normalize(),e.sunEl=Math.asin(e.realSunENU.y)/P,e.moonEl=Math.asin(e.moonENU.y)/P,e.moonAz=(Math.atan2(e.moonENU.x,-e.moonENU.z)/P+360)%360;const x=180-Math.acos(Math.max(-1,Math.min(1,e.realSunECEF.dot(e.moonECEF))))/P;e.moonLit=(1+Math.cos(x*P))/2,e.phase=10**(-.4*(.026*Math.abs(x)+4e-9*x**4)),e.mode=g&&e.sunEl<O?"moon":"sun",e.gain=e.mode==="moon"?1/(Ee*Math.max(e.phase,Ne)):1,e.dark=g?Math.min(1,Math.max(0,(2-e.sunEl)/17))**1.5:0;const w=ee(i,ke),l=B.setFromMatrix4(Fe.copy(r).invert().multiply(w));a.uniforms.uEciToEnu.value.copy(l),s.uNightEnuToGal.value.copy(Pe).multiply(Re.copy(l).transpose())}return c.copy(e.mode==="moon"?e.moonECEF:e.realSunECEF),s.uNightRealSun.value.copy(e.realSunECEF),s.uNightMoon.value.copy(e.moonECEF),e},shade(i){const r=e,c=r.dark,v=1/Math.max(i.exposure,1e-6),d=r.mode==="moon";s.uNight.value=c,s.uNightCam.value.copy(i.camera),s.uNightSunDisc.value=d?0:1,s.uNightTwilight.value=d&&r.sunEl>-18?r.gain:0,s.uNightMoonDisc.value.set(.2595*P*1,g&&r.moonEl>-2?16e-7*r.gain*(i.moonDisc??1):0,0,t.earthshine/Math.max(r.moonLit,.02));const y=3e4/2e4;s.uNightMoonDisc.value.y>y&&(s.uNightMoonDisc.value.y=y);const N=Math.max(0,Math.min(1,(r.moonEl+2)/12))*Math.min(1,r.phase*4);s.uNightStars.value=c>0?1:0,a.points.visible=c>.01,a.uniforms.uGain.value=t.stars*v*c*(1-.6*N),a.uniforms.uPx.value=i.pixelRatio??1,a.uniforms.uFar.value=i.far??1e6;const x=o.sources.reduce((l,h)=>l+h.power*(1+Math.hypot(h.x-i.camera.x,h.z-i.camera.z)/h.r)**-2.3,0);s.uNightMilkyGain.value=t.milkyWay*v*c**2*(1-N)*Math.max(0,1-x*12),s.uNightAirglow.value.set(...t.airglow).multiplyScalar(v*c);const w=s.uNightGlow.value;for(let l=0;l<4;l++){const h=o.sources[l];h?w[l].set(h.x,h.z,h.r,h.power*t.glow*v*c):w[l].set(0,0,1,0)}if(s.uNightCloudUp.value.set(1,.6,.34).multiplyScalar(t.cloudUp/t.glow),i.cloudAlt&&s.uNightCloudAlt.value.set(i.cloudAlt[0],i.cloudAlt[1]),f.setRGB(0,0,0),d&&i.twilightSky){const l=Math.min(1,Math.max(0,(O-r.sunEl)/Me));f.copy(i.twilightSky).multiplyScalar(r.gain*(R[0]+(R[1]-R[0])*l*l*(3-2*l)))}s.uNightCloudAmb.value.set(f.r,f.g,f.b),s.uNightScotopic.value.set(t.scotopic*Math.min(1,c*1.4),i.exposure);for(const l of Ae)if(l==="scene")s.uNightStars.value=0;else if(l==="air")s.uNightAirglow.value.set(0,0,0);else if(l==="scotopic")s.uNightScotopic.value.x=0;else if(l==="glow")for(const h of w)h.w=0;else l==="moon"?s.uNightMoonDisc.value.y=0:l==="stars"&&(a.points.visible=!1)}}}const q=ze();class Ge extends se{constructor(){super("ExposureEffect",`
      uniform float exposure;
      uniform vec3 whiteBalance;
      void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
        outputColor = vec4(inputColor.rgb * exposure * whiteBalance, inputColor.a);
      }`,{blendFunction:le.SRC,uniforms:new Map([["exposure",new u(8)],["whiteBalance",new u(new m(1,1,1))]])})}get exposure(){return this.uniforms.get("exposure").value}set exposure(t){this.uniforms.get("exposure").value=t}get whiteBalance(){return this.uniforms.get("whiteBalance").value}}const W={aces:F.ACES_FILMIC,agx:F.AGX,neutral:F.NEUTRAL};function We(a,t,e,o={}){const n=o.shareTables?null:new ae(a),g=o.shareTables?.textures??n.textures,f=o.shareTables?.ready??n.update().then(()=>{}),i=o.lighting==="forward",r=new oe(e,{...g,sky:!0,sun:!0,moon:!1,sunLight:!i,skyLight:!i,correctGeometricError:!0});r.stbnTexture=pe(),i&&De(r),be(r);const c=new Ge,v=new ne({mode:W.aces}),d=new ie(a,{frameBufferType:de,multisampling:0});d.autoRenderToScreen=!0;const y=new re(t,e);d.addPass(y);const N=o.separateOutput??!1,x=o.toneMapping===!1&&!!o.deferExposure,w=x?[]:o.toneMapping===!1?[c]:[c,v],l=new I(e,...o.preEffects??[],r,...o.postEffects??[],...N?[]:w);d.addPass(l);const h=N&&w.length?new I(e,...w):null;h&&d.addPass(h);const C=new xe(a),V=y.render.bind(y);y.render=(...p)=>{C.mark("scene"),V(...p),C.mark("post")};const b=ge(G.origin),X=new E().setFromMatrix4(b).transpose(),k=new A,$=new A,T=new m,_=new m,D={...ve,...o.sunTime},M={day:D.day,hour:D.hour,exposure:8,toneMap:"aces",whiteBalance:new m(1,1,1)};return{composer:d,aerial:r,textures:g,timer:C,enuToEcef:b,worldToECEF:k,sunECEF:T,sunENU:_,params:M,ready:f,deferredExposure:x,night:q.state,update(p){q.update(Q({day:M.day,hour:M.hour}),b,T),_.copy(T).applyMatrix3(X).normalize(),k.multiplyMatrices(b,$.makeTranslation(p.x,p.y,p.z)),r.worldToECEFMatrix.copy(k),r.sunDirection.copy(T),c.exposure=M.exposure,c.whiteBalance.copy(M.whiteBalance),v.mode=W[M.toneMap]},render(p){d.render(p),C.stop()},setSize(p,J){const L=a.getPixelRatio();d.setSize(p/L,J/L,!1)},insertBeforeOutput(p){if(x){d.addPass(p);return}if(!h)throw new Error("insertBeforeOutput needs createAtmosphere({ separateOutput: true })");d.addPass(p,d.passes.indexOf(h))}}}const K=`#else // defined(SUN_LIGHT) || defined(SKY_LIGHT)
  radiance = inputColor.rgb;
  #endif // defined(SUN_LIGHT) || defined(SKY_LIGHT)`,_e=`#else // defined(SUN_LIGHT) || defined(SKY_LIGHT)
  radiance = inputColor.rgb;
  #ifdef HAS_SHADOW
  {
    vec3 skyIrr;
    vec3 sunIrr = GetSunAndSkyIrradiance(positionECEF, normalize(positionECEF), sunDirection, skyIrr);
    float sunY = dot(sunIrr, vec3(0.2126, 0.7152, 0.0722));
    float skyY = dot(skyIrr, vec3(0.2126, 0.7152, 0.0722));
    // (only the light the ground reflects: at most an albedo of 0.5 of the irradiance; what's brighter than that
    // is its own light (the city's at night, a glint) and stays lit under a cloud's shadow)
    float k = (skyY + sunY * sunTransmittance) / max(skyY + sunY, 1e-6);
    float L = dot(radiance, vec3(0.2126, 0.7152, 0.0722));
    float Lr = min(L, 0.16 * (skyY + sunY));
    radiance *= 1.0 - (1.0 - k) * Lr / max(L, 1e-9);
  }
  #endif // HAS_SHADOW
  #endif // defined(SUN_LIGHT) || defined(SKY_LIGHT)`;function De(a){const t=a,e=t.getFragmentShader();if(!e.includes(K))throw new Error("AerialPerspectiveEffect shader changed: cannot patch forward cloud shadows");t.setFragmentShader(e.replace(K,_e))}export{ve as D,Ee as K,q as N,We as c,qe as d,Ye as e,Be as s};
