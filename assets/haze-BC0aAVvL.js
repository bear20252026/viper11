import{aa as l,C as o,V as i,S as c,i as h,M as d,be as f}from"./three.module-9D8i-8qh.js";import{E as u}from"./geo-DYayEwnZ.js";function p(e){return{uHazeColor:{value:new o(.66,.78,.88)},uHazeSunColor:{value:new o(1.15,1,.82)},uHazeDensity:{value:1/32e3},uHazeHeight:{value:2200},uCamWorld:{value:new i},uCamAlt:{value:e},uOriginAlt:{value:e},uSunDir:{value:new i(-.5,.65,.4).normalize()},uSunColor:{value:new o(1,.94,.84).multiplyScalar(2.6)},uSkyColor:{value:new o(.38,.55,.75)},uGroundColor:{value:new o(.36,.28,.2)},uZenith:{value:new o(.03,.2,.5)},uWet:{value:0},uNightLights:{value:0},uNightField:{value:0},uNightNear:{value:null},uNightFar:{value:null},uNightNearXf:{value:new l(0,0,-10,-10)},uNightFarXf:{value:new l(0,0,-10,-10)},uNightRoads:{value:null},uNightRoadsXf:{value:new l(0,0,-10,-10)},uNightTime:{value:0},uNightPx:{value:1}}}const g=`
uniform float uNightLights;
uniform sampler2D uNightNear, uNightFar, uNightRoads;
uniform vec4 uNightNearXf, uNightFarXf, uNightRoadsXf;
uniform float uNightTime;
uniform float uNightPx;
// the roads field's reach (m), the near map's G scale (class x m per m²), a streetlight's flux (display x m², a
// motorway's), a light's spot (px radius) and brightest pixel, the streetlights' cell (m) and lights per m of road
#define NL_REACH 80.0
#define NL_DENS 0.04
#define NL_PHI 260.0
#define NL_RPX 0.62
#define NL_CAP 2.4
#define NL_C 34.0
#define NL_PER_M 0.027
vec4 nlHash(vec2 p) {
  vec4 q = fract(vec4(p.xyxy) * vec4(0.1031, 0.1030, 0.0973, 0.1099));
  q += dot(q, q.wzxy + 33.33);
  return fract((q.xxyz + q.yzzw) * q.zywx);
}
// a stretch (~400 m) of road is one kind of lamp: high-pressure sodium, LED, an older cool white; streets warmer
vec3 nlRoadColour(vec2 at, float cls) {
  vec4 h = nlHash(floor(at / 420.0) + floor(cls * 4.0) * 13.0);
  if (cls > 0.4) return h.x < 0.5 ? vec3(1.0, 0.47, 0.13) : h.x < 0.88 ? vec3(1.0, 0.86, 0.68) : vec3(0.84, 0.92, 1.0);
  return h.x < 0.3 ? vec3(1.0, 0.5, 0.16) : vec3(1.0, 0.78, 0.52);
}
const vec3 NL_ROAD_AVG = vec3(1.0, 0.66, 0.36);
// the Strip's signs and towers: gold, white, magenta, cyan; the city's own
vec3 nlColour(float h, float hot) {
  if (hot > 0.25 && h > 0.4) return h < 0.58 ? vec3(1.0, 0.7, 0.28) : h < 0.74 ? vec3(1.0, 0.95, 0.9) : h < 0.87 ? vec3(1.0, 0.32, 0.72) : vec3(0.4, 0.85, 1.0);
  return h < 0.4 ? vec3(1.0, 0.5, 0.17) : h < 0.85 ? vec3(1.0, 0.78, 0.52) : vec3(0.82, 0.9, 1.0);
}
// a point light at world xz 'at' carrying 'phi' (display x m²): a small round spot on the screen, its brightest
// pixel capped
float nlPoint(vec2 w, vec2 at, float phi, float cap, mat2 Ji, float det) {
  vec2 px = Ji * (at - w);
  float d2 = dot(px, px) / (NL_RPX * NL_RPX);
  if (d2 > 4.5) return 0.0;
  return min(phi / (1.5708 * NL_RPX * NL_RPX * det), cap) * exp(-d2 * 2.0);
}
// the roads field at world xz: the offset (m) to the nearest road, its class x how lit (0: none)
vec3 nlRoad(vec2 p) {
  vec2 uv = p * uNightRoadsXf.xy + uNightRoadsXf.zw;
  vec3 r = textureLod(uNightRoads, uv, 0.0).rgb;
  return vec3((r.rg - 0.5) * (2.0 * NL_REACH), r.b);
}
// the streetlights round the pixel: a candidate in each of the 2x2 nearest cells snapped onto its nearest road,
// kept if it lands in its own cell (so one light per cell a road crosses: every ~35-50 m, both carriageways)
vec3 nlRoadDots(vec2 w, mat2 Ji, float det) {
  vec3 acc = vec3(0.0);
  vec2 base = floor(w / NL_C - 0.5);
  for (int k = 0; k < 4; k++) {
    vec2 id = base + vec2(float(k & 1), float(k >> 1));
    vec4 h = nlHash(id + 71.0);
    vec3 r = nlRoad((id + 0.1 + 0.8 * h.yz) * NL_C);
    if (r.z < 0.03 || h.x > 0.9) continue;
    vec2 at = (id + 0.1 + 0.8 * h.yz) * NL_C + r.xy;
    if (floor(at / NL_C) != id) continue;
    acc += nlRoadColour(at, r.z) * nlPoint(w, at, NL_PHI * r.z * (0.6 + 0.8 * h.w), NL_CAP * (0.4 + 0.6 * r.z), Ji, det);
  }
  return acc;
}
// the streetlights further off, where a pixel spans more than a streetlight cell: one light per C-metre cell (C 136 m,
// 544 m: the cells grow 4x a level, so on the screen they stay ~1-4 px apart), at a random spot snapped onto its
// nearest road, carrying the cell's light by area (the near map's streets at the pixel: g) weighted to the brighter
// roads: a city of points to the horizon, not lines of light. (The 2x2 cells round the pixel: its footprint is under a cell here.)
vec3 nlRoadDotsFar(vec2 w, float C, mat2 Ji, float det, float seed, float g) {
  vec3 acc = vec3(0.0);
  vec2 base = floor(w / C - 0.5);
  for (int k = 0; k < 4; k++) {
    vec2 id = base + vec2(float(k & 1), float(k >> 1));
    vec4 h = nlHash(id * 1.37 + seed);
    vec2 c = (id + 0.1 + 0.8 * h.yz) * C;
    vec3 r = nlRoad(c);
    if (r.z < 0.03) continue;
    vec2 at = c + r.xy;
    // (the cell's streetlights' light; ~1 cell in 5 finds no road in reach, its share carried by the rest)
    float q = r.z / 0.55;
    float phi = NL_PHI * NL_PER_M * 0.9 * NL_DENS * g * C * C * 0.8 * q * q * (0.35 + 1.3 * h.w);
    acc += nlRoadColour(at, r.z) * nlPoint(w, at, phi, NL_CAP * (0.15 + 0.85 * r.z * r.z), Ji, det);
  }
  return acc;
}
// smooth value noise (0..1) on a grid of 1
float nlNoise(vec2 p) {
  vec2 i = floor(p), f = p - i;
  f = f * f * (3.0 - 2.0 * f);
  vec4 a = nlHash(i), b = nlHash(i + vec2(1.0, 0.0)), c = nlHash(i + vec2(0.0, 1.0)), d = nlHash(i + vec2(1.0, 1.0));
  return mix(mix(a.x, b.x, f.x), mix(c.x, d.x, f.x), f.y);
}
// the arterials and freeways (class > ~0.55) far off: lines of their light over the pixel's width across them, beaded
// along their length every ~1.5 px (a string of lights too fine to resolve, not a drawn line); half their light, the
// coarse points the rest
vec3 nlArterials(vec2 w, vec2 dx, vec2 dy, float foot) {
  vec3 r = nlRoad(w);
  float k = smoothstep(0.45, 0.65, r.z);
  if (k <= 0.0) return vec3(0.0);
  float d = length(r.xy);
  vec2 n = d > 0.5 ? r.xy / d : vec2(1.0, 0.0);
  float wid = max(abs(dot(dx, n)) + abs(dot(dy, n)), 2.0);
  vec2 s = w + r.xy;
  float v = nlNoise(s / max(17.0, foot * 1.6));
  float bead = (0.12 + 2.6 * v * v * v) / 0.77;
  return nlRoadColour(s, r.z) * (NL_PHI * NL_PER_M * 0.9 * r.z) * 0.5 * k * bead * max(0.0, 1.0 - d / wid) / wid;
}
// (the fallback, a theater without the roads field) a light in a random spot of each cell c where the map says so,
// along a ~110 m procedural street grid, each carrying its cell's share
vec3 nlDots(vec2 w, float c, vec3 pk, vec3 ak, mat2 Ji, float det, float streets) {
  vec2 id = floor(w / c);
  vec4 h = nlHash(id);
  vec2 at = (id + 0.2 + 0.6 * h.yz) * c;
  vec3 m = texture2D(uNightNear, at * uNightNearXf.xy + uNightNearXf.zw).rgb;
  float p = clamp(dot(vec3(smoothstep(0.15, 0.7, m.r), 0.0, m.b), pk), 0.0, 1.0);
  float share = 1.0;
  if (streets > 0.0) {
    vec2 cc = (id + 0.5) * c;
    vec2 q = cc + 25.0 * sin(cc.yx / vec2(370.0, 410.0));
    vec2 off = floor(q / 110.0 + 0.5) * 110.0 - q;
    bool sx = abs(off.x) < 0.5 * c, sz = abs(off.y) < 0.5 * c;
    if (sx && (!sz || h.w > 0.5)) at.x = cc.x + off.x + (h.y - 0.5) * 8.0;
    else if (sz) at.y = cc.y + off.y + (h.z - 0.5) * 8.0;
    else p = 0.0;
    // (the share of cells a street runs through: their lights carry all the area's light)
    share = 1.0 / (1.0 - (1.0 - c / 110.0) * (1.0 - c / 110.0));
  }
  if (h.x >= p) return vec3(0.0);
  float phi = dot(vec3(smoothstep(0.15, 0.7, m.r), 0.0, m.b), ak) * c * c / max(p, 0.02) * share * (0.4 + 1.2 * h.w);
  return nlColour(fract(h.w * 7.13 + h.y), m.b) * nlPoint(w, at, phi, NL_CAP * (0.6 + 0.6 * m.b), Ji, det);
}
vec3 nightLights(vec3 renderPos) {
  vec2 w = renderPos.xz + uCamWorld.xz;
  vec2 un = w * uNightNearXf.xy + uNightNearXf.zw;
  vec2 uf = w * uNightFarXf.xy + uNightFarXf.zw;
  vec2 ur = w * uNightRoadsXf.xy + uNightRoadsXf.zw;
  // the pixel's footprint on the ground: its Jacobian (ground m per pixel), the area, the larger side
  // (in reference pixels: a supersampled frame's finer pixels each see a fraction of one)
  vec2 dx = dFdx(w) * uNightPx, dy = dFdy(w) * uNightPx;
  float det = max(abs(dx.x * dy.y - dx.y * dy.x), 1e-4);
  mat2 Ji = mat2(dy.y, -dx.y, -dy.x, dx.x) / (dx.x * dy.y - dx.y * dy.x + 1e-9);
  float foot = max(length(dx), length(dy));
  // the maps (mip-mapped: far off they're the area's average)
  vec3 n = texture2D(uNightNear, un).rgb;
  float bmFar = texture2D(uNightFar, uf).r;
  // the area's own glow (Black Marble: windows, car parks), the Strip's, the streets' light by area
  const float A_DIFFUSE = 0.012, A_HOT = 1.1;
  // (the Strip's glow in its casinos: blocks of ~220 m, some blazing, some dark between, each its own colour,
  // while they're bigger than a pixel)
  vec2 hq = w / 220.0 + 0.3 * sin(w.yx / 530.0);
  vec4 hb = nlHash(floor(hq) + 3.0);
  vec2 hf = fract(hq) - 0.5;
  float core = smoothstep(0.55, 0.05, length(hf));
  float blocks = mix(1.0, 0.45 + 2.2 * hb.x * hb.x * core / 0.38 * 0.55, 1.0 - smoothstep(120.0, 400.0, foot));
  vec3 hotCol = (hb.z < 0.6 ? vec3(1.0, 0.7, 0.36) : hb.z < 0.82 ? vec3(1.0, 0.9, 0.8) : hb.z < 0.92 ? vec3(1.0, 0.45, 0.6) : vec3(0.6, 0.8, 1.0)) * blocks;
  float lit = smoothstep(0.15, 0.7, n.r);
  // (the near map's edge: over its last 6 km into the far map's light alone, matched by area)
  vec2 eN = min(un, 1.0 - un);
  float inNear = smoothstep(0.0, 0.075, min(eN.x, eN.y));
  vec3 farMean = NL_ROAD_AVG * bmFar * 0.09;
  if (inNear <= 0.0) return all(greaterThan(uf, vec2(0.0))) && all(lessThan(uf, vec2(1.0))) ? farMean : vec3(0.0);
  vec3 roadMean = NL_ROAD_AVG * (NL_PHI * NL_PER_M * 0.9 * NL_DENS) * n.g;
  vec3 areaMean = NL_ROAD_AVG * A_DIFFUSE * lit + hotCol * A_HOT * n.b;
  // the points while a light's spot is under ~a cell (the 2x2 cells round the pixel hold it), then the lines /
  // the Strip's glow
  float pts = 1.0 - smoothstep(7.0, 20.0, foot);
  vec3 col = areaMean;
  vec2 eR = min(ur, 1.0 - ur);
  float inRoads = uNightRoadsXf.z > -5.0 ? smoothstep(0.0, 0.05, min(eR.x, eR.y)) : 0.0;
  if (inRoads > 0.0) {
    // points all the way out: the streetlights (34 m cells) close in, then one light per 136 m, then per 544 m cell
    // (each level 4x the last, handed over across a wide band of the pixel's footprint), under a little of their light
    // by area (what a point's capped spot can't carry far off); past ~0.5 km a pixel, their light by area
    float lev = clamp(log2(max(foot, 1.0) / 9.0) * 0.5, 0.0, 2.0);
    float far = 1.0 - smoothstep(320.0, 700.0, foot);
    vec3 roads = roadMean;
    if (far > 0.0) {
      float l0 = min(floor(lev), 1.0), t = smoothstep(0.3, 0.7, lev - l0);
      vec3 a = t < 1.0 ? (l0 < 0.5 ? nlRoadDots(w, Ji, det) : nlRoadDotsFar(w, 4.0 * NL_C, Ji, det, 7.0, n.g)) : vec3(0.0);
      vec3 b = t > 0.0 ? nlRoadDotsFar(w, (l0 < 0.5 ? 4.0 : 16.0) * NL_C, Ji, det, l0 < 0.5 ? 7.0 : 19.0, n.g) : vec3(0.0);
      // (the glow under the points: none close in, a third of the light by area once they're the coarse levels)
      float coarse = smoothstep(0.3, 1.0, lev);
      vec3 pts2 = mix(a, b, t) + (roadMean * 0.3 + (coarse > 0.0 ? nlArterials(w, dx, dy, foot) : vec3(0.0))) * coarse;
      roads = mix(roadMean, pts2, far);
    }
    col += mix(roadMean, roads, inRoads);
    // the Strip's points (dense, the casinos' colours) in place of its glow
    if (pts > 0.0 && n.b > 0.01) col += (nlDots(w + 5.0, 13.0, vec3(0.0, 0.0, 1.2), vec3(0.0, 0.0, A_HOT), Ji, det, 0.0) - hotCol * A_HOT * n.b) * pts;
  } else {
    // (no roads field) the lights scattered along a procedural street grid, then their glow by area
    vec3 meanFb = NL_ROAD_AVG * 0.05 * lit + hotCol * A_HOT * n.b;
    col = meanFb;
    if (pts > 0.0 && (n.r + n.b) > 0.003) col = mix(meanFb, nlDots(w, 30.0, vec3(0.8, 0.0, 1.5), vec3(0.05, 0.0, A_HOT), Ji, det, 1.0), pts);
  }
  return mix(farMean, col, inNear);
}
`,n=`
uniform vec3 uHazeColor;
uniform vec3 uHazeSunColor;
uniform float uHazeDensity;
uniform float uHazeHeight;
uniform vec3 uCamWorld;
uniform float uCamAlt;
uniform float uOriginAlt;
uniform vec3 uSunDir;
float hazeAlt(vec3 renderPos) {
  vec3 w = renderPos + uCamWorld;
  return uOriginAlt + w.y + dot(w.xz, w.xz) * ${(.5/u).toExponential(8)};
}
float hazeExpAvg(float h0, float h1, float H) {
  float a = exp(-h0 / H), b = exp(-h1 / H), dh = (h1 - h0) / H;
  return abs(dh) < 1e-3 ? a : (a - b) / dh;
}
vec3 hazeInscatter(vec3 dir) {
  float s = pow(max(dot(dir, uSunDir), 0.0), 6.0);
  return mix(uHazeColor, uHazeColor * uHazeSunColor, s);
}
// Ground-level reference density, falling off with altitude (scale height uHazeHeight).
vec3 applyHaze(vec3 col, vec3 renderPos) {
  float d = length(renderPos);
  float h1 = hazeAlt(renderPos);
  float od = d * uHazeDensity * hazeExpAvg(max(uCamAlt - 600.0, 0.0), max(h1 - 600.0, 0.0), uHazeHeight);
  float T = exp(-od);
  return col * T + hazeInscatter(renderPos / max(d, 1e-3)) * (1.0 - T);
}
`;function x(e,r){const t=e.onBeforeCompile;return e.onBeforeCompile=(a,s)=>{t?.call(e,a,s),Object.assign(a.uniforms,r),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vHazePos;`).replace("#include <project_vertex>",`#include <project_vertex>
vHazePos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vHazePos;
${n}`).replace("#include <tonemapping_fragment>",`gl_FragColor.rgb = applyHaze(gl_FragColor.rgb, vHazePos);
#include <tonemapping_fragment>`)},e.customProgramCacheKey=()=>"hazify",e}function w(e){const r=new c({uniforms:{...e},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = position;
        vec4 p = projectionMatrix * mat4(mat3(viewMatrix)) * vec4(position, 1.0);
        gl_Position = p.xyww;
      }`,fragmentShader:`
      ${n}
      uniform vec3 uZenith;
      varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        // geometric horizon dips below 0 with altitude
        float dip = -acos(clamp(6371000.0 / (6371000.0 + max(uCamAlt, 0.0)), 0.0, 1.0));
        float e = asin(clamp(d.y, -1.0, 1.0)) - dip;
        float t = clamp(e / 1.2, 0.0, 1.0);
        vec3 hor = hazeInscatter(d);
        vec3 sky = mix(hor, uZenith, pow(t, 0.45));
        // thinner air: deeper blue overhead as we climb
        sky = mix(sky, uZenith * 0.75, clamp(uCamAlt / 12000.0, 0.0, 0.6) * smoothstep(0.02, 0.4, t));
        float sun = max(dot(d, uSunDir), 0.0);
        sky += vec3(1.0, 0.9, 0.75) * (smoothstep(0.99996, 0.99999, sun) * 60.0 + pow(sun, 400.0) * 2.0 + pow(sun, 12.0) * 0.18);
        gl_FragColor = vec4(e < 0.0 ? hor : sky, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,side:h,depthWrite:!1,depthTest:!1}),t=new d(new f(1,4),r);return t.frustumCulled=!1,t.renderOrder=-1e3,t.name="sky-dome",t}export{n as H,g as N,w as a,p as c,x as h};
