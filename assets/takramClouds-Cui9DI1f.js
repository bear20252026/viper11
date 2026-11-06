import{h as Kt,t as Yt,i as $t,g as wt,N as Zt,n as qe,k as ue,D as Ke,d as Xt,e as Jt,G as et,l as tt,m as Fe,_ as xt,S as We,P as Qt,o as Ee,f as $,u as St,x as ye,s as ea,p as ta,q as aa,r as ra,v as oa,w as Tt,y as ia,C as na,A as Ct,I as U}from"./shared-oZu7p6SI.js";import{V as y,d as m,M as ae,P as re,e as V,W as he,bX as Ye,_,p as ee,bi as De,aa as D,R as H,U as n,c as M,bY as sa,bV as Et,k as C,bQ as ca,ah as la,a3 as at,bH as rt,as as ot,x as ua,bZ as ha,Y as Ae,bC as $e,O as da,aE as it,F as pa}from"./three.module-9D8i-8qh.js";import{T as Dt}from"./index-DxQAg0pk.js";import{g as fa}from"./blueNoise-Xopz6Ulp.js";import{e as ma,F as J}from"./geo-DYayEwnZ.js";const nt=Kt,st=$t,ct=Yt,Ze=`
vec3 hash33(vec3 p) {
  p = fract(p * vec3(0.1031, 0.1030, 0.0973));
  p += dot(p, p.yxz + 33.33);
  return fract((p.xxy + p.yxx) * p.zyx);
}
vec2 hash22(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.xx + p3.yz) * p3.zy);
}
// Gradient noise in [-1, 1] with period 'freq' (x already scaled by freq).
float gnoise3(vec3 x, float freq) {
  vec3 p = floor(x), w = fract(x), u = w * w * w * (w * (w * 6.0 - 15.0) + 10.0);
  #define G3(o) dot(hash33(mod(p + o, freq)) * 2.0 - 1.0, w - o)
  float a = G3(vec3(0, 0, 0)), b = G3(vec3(1, 0, 0)), c = G3(vec3(0, 1, 0)), d = G3(vec3(1, 1, 0));
  float e = G3(vec3(0, 0, 1)), f = G3(vec3(1, 0, 1)), g = G3(vec3(0, 1, 1)), h = G3(vec3(1, 1, 1));
  return mix(mix(mix(a, b, u.x), mix(c, d, u.x), u.y), mix(mix(e, f, u.x), mix(g, h, u.x), u.y), u.z);
}
float gnoise2(vec2 x, float freq) {
  vec2 p = floor(x), w = fract(x), u = w * w * w * (w * (w * 6.0 - 15.0) + 10.0);
  #define G2(o) dot(hash22(mod(p + o, freq)) * 2.0 - 1.0, w - o)
  float a = G2(vec2(0, 0)), b = G2(vec2(1, 0)), c = G2(vec2(0, 1)), d = G2(vec2(1, 1));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
// Inverted Worley F1 in [0, 1] (1 at feature points).
float worley3(vec3 uv, float freq) {
  vec3 id = floor(uv), p = fract(uv);
  float md = 1e4;
  for (float x = -1.0; x <= 1.0; x++) for (float y = -1.0; y <= 1.0; y++) for (float z = -1.0; z <= 1.0; z++) {
    vec3 o = vec3(x, y, z);
    vec3 h = hash33(mod(id + o, vec3(freq))) + o;
    vec3 d = p - h;
    md = min(md, dot(d, d));
  }
  return 1.0 - md;
}
float perlinFbm3(vec3 p, float freq, int octaves) {
  float G = exp2(-0.85), amp = 1.0, n = 0.0;
  for (int i = 0; i < 8; ++i) {
    if (i >= octaves) break;
    n += amp * gnoise3(p * freq, freq);
    freq *= 2.0; amp *= G;
  }
  return n;
}
// Gradient noise with separate integer periods per axis (anisotropic tiling).
float gnoise2p(vec2 x, vec2 per) {
  vec2 p = floor(x), w = fract(x), u = w * w * w * (w * (w * 6.0 - 15.0) + 10.0);
  #define G2P(o) dot(hash22(mod(p + o, per)) * 2.0 - 1.0, w - o)
  float a = G2P(vec2(0, 0)), b = G2P(vec2(1, 0)), c = G2P(vec2(0, 1)), d = G2P(vec2(1, 1));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
float fbm2p(vec2 x, vec2 per, int octaves) {
  float amp = 0.5, n = 0.0;
  for (int i = 0; i < 8; ++i) {
    if (i >= octaves) break;
    n += amp * gnoise2p(x, per);
    x *= 2.0; per *= 2.0; amp *= 0.5;
  }
  return n;
}
float fbm2(vec2 p, float freq, int octaves) {
  float amp = 0.5, n = 0.0;
  for (int i = 0; i < 8; ++i) {
    if (i >= octaves) break;
    n += amp * gnoise2(p * freq, freq);
    freq *= 2.0; amp *= 0.5;
  }
  return n;
}
float worleyFbm3(vec3 p, float freq) {
  return worley3(p * freq, freq) * 0.625 + worley3(p * freq * 2.0, freq * 2.0) * 0.25 + worley3(p * freq * 4.0, freq * 4.0) * 0.125;
}
float remap(float x, float a, float b, float c, float d) { return c + (x - a) / (b - a) * (d - c); }
`,ve=`
precision highp float;
in vec2 vUv;
uniform vec2 uSparseCenter;   // weather-tile UV of the scattered zone around the airfield
uniform vec2 uSparseRadii;    // inner / outer radius of that zone, tile UV units
uniform vec4 uCells[4];       // placed cells: tile UV centre, radius (tile UV), coverage
uniform mat2 uUvToKm;         // local metric: tile-UV delta → km (east, north); the cube-sphere UV is ~1.3:1 anisotropic here
uniform float uKmPerTile;     // mean km per tile-UV unit
uniform float uDeckThreshold;   // cumulus-area threshold in the deck beyond the scattered zone (lower = more)
uniform float uSparseThreshold; // ... and inside the scattered zone (airfield, climb-out)
uniform vec4 uSeed;            // weather seed: xy shifts the noise fields and lattices, zw the cell hashes
uniform float uMacroBias;       // shifts the whole field: + more cumulus areas, - more clear sky
uniform float uRag;           // outline lobing, fraction of the radius
uniform float uDome;          // weather profile exponent across a cell (1 = paraboloid dome)
uniform vec2 uStratoKm;       // stratocumulus fades in between these distances (km) from the scattered zone
uniform float uCellTypes[4];
uniform int uCellCount;
layout(location = 0) out vec4 outColor;
${Ze}
// 1 inside the scattered zone (climb-out near the airfield), 0 in the denser
// deck further out: the clip shows scattered cumulus at 3,500 ft and a
// 50-60 % carpet below 16,000 ft, so coverage varies in space, not globally.
float sparseAt(vec2 uv) {
  vec2 d = uv - uSparseCenter;
  d -= floor(d + 0.5);
  return 1.0 - smoothstep(uSparseRadii.x, uSparseRadii.y, length(d));
}
// Max over neighbouring cells of a soft disc of random radius; also returns the
// winning cell's random value for per-cloud variation. Presence and size
// depend on the regional density.
float cells(vec2 uv, float period, float presenceSparse, float presenceDense, out float cellRand) {
  vec2 x = uv * period, id = floor(x), f = fract(x);
  float best = 0.0; cellRand = 0.0;
  for (float j = -1.0; j <= 1.0; j++) for (float i = -1.0; i <= 1.0; i++) {
    vec2 o = vec2(i, j);
    vec2 cid = mod(id + o, period);
    vec2 h = hash22(cid);
    vec2 h2 = hash22(cid + 17.31);
    float sp = sparseAt((cid + 0.5) / period);
    if (h2.x > mix(presenceDense, presenceSparse, sp)) continue;
    vec2 c = o + 0.15 + 0.7 * h;
    float rad = mix(0.28, 0.62, h2.y) * mix(1.1, 1.0, sp);
    // Slightly elongated along the wind.
    vec2 d = (f - c) * vec2(0.85, 1.1);
    float v = 1.0 - dot(d, d) / (rad * rad);
    v = v > 0.0 ? sqrt(v) * mix(0.75, 1.0, h.x) : 0.0;
    if (v > best) { best = v; cellRand = h2.y; }
  }
  return best;
}
// Domain warp (~12 km features, ~1.5 km displacement) so the cell lattices
// and the cluster field never line up into a visible grid.
vec2 warpUv(vec2 uv) {
  vec2 s = uv + uSeed.yx;
  vec2 w1 = vec2(fbm2(s + 5.1, 8.0, 3), fbm2(s + 9.7, 8.0, 3));
  return uv + 0.015 * w1 + 0.004 * vec2(fbm2(s + w1 * 0.05 + 2.2, 24.0, 2), fbm2(s + 7.4, 24.0, 2));
}
// 1 within a few km of a placed cell: a cluster around it, so a scripted pass
// flies past and between clouds (ref 10), not through one isolated tower.
float placedNear(vec2 uv) {
  float c = 0.0;
  for (int i = 0; i < 4; i++) {
    if (i >= uCellCount) break;
    vec2 d = uv - uCells[i].xy;
    d -= floor(d + 0.5);
    c = max(c, 1.0 - smoothstep(1.5, 4.5, length(uUvToKm * d)));
  }
  return c;
}
// Where cumulus grows: one domain-warped, multi-octave field mixing a macro
// scale (25-50 km) with the ~8 km cluster scale, so groups of clouds (big
// cells with their satellites) and large clear areas alternate irregularly.
// The threshold is higher around the airfield (scattered zone) than in the
// deck further out, which stays fuller for the 16,000 ft carpet.
float clusterAt(vec2 uv) {
  vec2 q = uv + 0.06 * vec2(fbm2(uv + 1.9, 2.0, 2), fbm2(uv + 6.3, 2.0, 2));
  q += uSeed.xy;
  float macro = fbm2(q + 0.7, 3.0, 3) + 0.35 * fbm2(q + 4.4, 7.0, 2);
  float meso = fbm2(q + 3.3, 10.0, 3) + 0.25 * fbm2(q, 40.0, 2);
  float f = 0.65 * macro + 0.6 * meso + uMacroBias;
  float t = mix(uDeckThreshold, uSparseThreshold, sparseAt(uv));
  return max(smoothstep(t, t + 0.12, f), placedNear(uv));
}
// Cells whose presence depends on the cluster field at the cell centre:
// presIn inside groups, presOut in the gaps; radius scaled by radScale.
// off shifts the lattice (unrelated cells per level) but not the cluster
// field, so every size class gathers in the same cumulus areas.
float clusterCells(vec2 uv, vec2 off, float period, float presIn, float gate, float radScale, out float cellRand) {
  off += uSeed.xy;
  vec2 x = (warpUv(uv) + off) * period, id = floor(x), f = fract(x);
  float best = 0.0; cellRand = 0.0;
  for (float j = -1.0; j <= 1.0; j++) for (float i = -1.0; i <= 1.0; i++) {
    vec2 o = vec2(i, j);
    vec2 cid = mod(id + o, period);
    vec2 h = hash22(cid + 3.7 + uSeed.zw);
    vec2 h2 = hash22(cid + 29.1 + uSeed.zw);
    vec2 cuv = (cid + 0.5) / period - off;
    // Nothing in the clear areas: presence ramps in from the cluster fringe
    // (D = gate) to its core. Smaller classes use a higher gate, so they only
    // gather around the bigger clouds, and a ~2 km noise rejects them in
    // irregular patches so they never read as a lattice of dots.
    float d = clusterAt(cuv);
    float pres = presIn * smoothstep(gate, min(1.0, gate + 0.45), d);
    if (gate > 0.3) pres *= smoothstep(-0.05, 0.2, fbm2(cuv + 8.8 + uSeed.xy, 50.0, 2));
    if (h2.x > pres) continue;
    vec2 c = o + 0.05 + 0.9 * h;
    float cellKm = uKmPerTile / period;
    // Strongly skewed radius within a level (mostly small, a few large).
    vec2 h3 = hash22(cid + 61.3 + uSeed.zw);
    float rad = mix(0.22, 0.62, h3.x * h3.x) * radScale * cellKm;
    // Distance in km in the local east/north frame (the weather UV is
    // anisotropic), slightly wider along the wind, with a ragged outline.
    vec2 dkm = uUvToKm * ((f - c) / period);
    dkm *= vec2(0.85, 1.0);
    // Lobed (not noisy) outline: this 2D field is extruded through the whole
    // layer, so anything finer than a few hundred metres turns into vertical
    // fluting on the flanks. Raggedness comes from the 3D shape noise instead.
    float rag = fbm2(uv, 384.0, 2) * uRag * rad;
    float r = length(dkm) + rag;
    float v = 1.0 - (r * r) / (rad * rad);
    // Paraboloid, not a hemisphere: the top height follows the weather value,
    // so sqrt() made near-vertical walls with flat lids; this makes domes.
    // Bigger cells within a level also grow taller.
    v = v > 0.0 ? pow(v, uDome) * mix(0.75, 1.0, h3.x) : 0.0;
    if (v > best) { best = v; cellRand = h3.x; }
  }
  return best;
}
void main() {
  vec2 uv = vUv;
  float sp = sparseAt(uv);
  // Fair-weather cumulus (r), clumped (refs 05/09): large towering cells and
  // mid-size ones in groups with smaller ones around them, big clear gaps
  // between groups. Bigger cells carry larger values (taller tops in both
  // renderers) and a higher type.
  // Three size classes on unrelated, warped lattices; four times as many
  // candidates per halving of size, so counts follow a power law (few big
  // cells, more small ones around them). Diameters: ~1.2-3.4 km, 0.6-1.7 km,
  // 0.3-0.9 km. Smaller classes are lower (value scale). No lone fragments:
  // the clear areas stay empty.
  float r1, r2, r3;
  float big = clusterCells(uv, vec2(0.0), 30.0, 0.7, 0.0, 0.85, r1);
  float mid = clusterCells(uv, vec2(0.37), 60.0, 0.6, 0.2, 0.85, r2) * 0.8;
  // Small (~0.3-0.9 km, ~350 m deep): only in cluster cores, in patches.
  float small = clusterCells(uv, vec2(0.71), 120.0, 0.45, 0.5, 0.85, r3) * 0.55;
  float edge = fbm2(uv, 192.0, 2) * 0.15;
  float cov = max(max(big, mid), small);
  cov = clamp(cov + edge * step(0.01, cov), 0.0, 1.0);
  float type = big >= max(mid, small) ? 0.65 + 0.35 * r1 : mid >= small ? 0.4 + 0.3 * r2 : 0.2 + 0.2 * r3;
  // Placed cells (e.g. one the scripted flight climbs through), soft-edged.
  for (int i = 0; i < 4; i++) {
    if (i >= uCellCount) break;
    vec2 d = uv - uCells[i].xy;
    d -= floor(d + 0.5);
    vec2 dk = uUvToKm * d;
    float rk = uCells[i].z * uKmPerTile;
    float rr = length(dk) + fbm2(uv, 384.0, 2) * uRag * rk;
    float k = 1.0 - rr * rr / (rk * rk);
    // Same dome profile as the procedural cells, with a broad lumpiness (a
    // flat-topped disc renders as a smooth blob; fine 2D noise as fluting).
    float v = k > 0.0 ? pow(k, uDome) * uCells[i].w * (0.92 + 0.16 * fbm2(uv + float(i) * 0.13, 150.0, 2)) : 0.0;
    v = clamp(v + edge * step(0.01, v), 0.0, 1.0);
    if (v > cov) { cov = v; type = uCellTypes[i]; }
  }
  // Stratocumulus (a): rolls / cloud streets along the wind. Coordinates are
  // rotated by an integer matrix (keeps the map tileable) and the noise is
  // stretched ~8:1 along the wind; a slower patch field breaks the rows into
  // elongated patches.
  vec2 q = mat2(2.0, -1.0, 1.0, 2.0) * uv;                     // wind along (2, 1)
  vec2 warp = vec2(fbm2(uv, 10.0, 2), fbm2(uv + 5.3, 10.0, 2)) * 0.03;
  // Periods must divide the lattice shifts of q (u+1 → (12, -24)·…), so they
  // equal the scale: ~7.5 km along the wind, ~1.9 km between rows.
  float rows = fbm2p((q + warp) * vec2(6.0, 24.0), vec2(6.0, 24.0), 4);
  float patches = fbm2(uv + 2.7, 6.0, 3);
  float strato = smoothstep(0.0, 0.22, rows * 0.9 + patches * 0.5);
  // Only far out: near the climb a 250 m-thick slab reads as a flat blanket;
  // from 16,000 ft the far rows foreshorten into the bright horizon band (ref 09).
  vec2 dc = uv - uSparseCenter;
  dc -= floor(dc + 0.5);
  strato *= smoothstep(-0.2, 0.15, patches) * smoothstep(uStratoKm.x, uStratoKm.y, length(uUvToKm * dc));
  // Altocumulus (b): small clumpy patches in loose groups, thin and sparse.
  float rA;
  float alto = cells(uv + 0.71, 320.0, 0.35, 0.5, rA) * smoothstep(-0.05, 0.25, fbm2(uv + 8.1, 14.0, 3));
  outColor = vec4(cov, type, alto, strato);
}
`,te=`
in vec3 position;
out vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,va=ve.slice(0,ve.indexOf("void main() {"))+`
// One class of convective cells on a warped lattice: a lobed disc of radius radKm per cell, its value a
// plateau (pow < 1: steep walls, a broad top) scaled by the cell's height class.
float towers(vec2 uv, vec2 off, float period, float presence, vec2 radKm, vec2 peak, float wall, out float cr) {
  off += uSeed.xy;
  vec2 x = (warpUv(uv) + off) * period, id = floor(x), f = fract(x);
  float best = 0.0; cr = 0.0;
  for (float j = -1.0; j <= 1.0; j++) for (float i = -1.0; i <= 1.0; i++) {
    vec2 o = vec2(i, j);
    vec2 cid = mod(id + o, period);
    vec2 h = hash22(cid + 3.7 + uSeed.zw);
    vec2 h2 = hash22(cid + 29.1 + uSeed.zw);
    vec2 h3 = hash22(cid + 61.3 + uSeed.zw);
    vec2 cuv = (cid + 0.5) / period - off;
    // gathered into complexes (~20-40 km) with wide clear lanes between them; fewer right over the field
    float wet = smoothstep(-0.12, 0.12, fbm2(cuv + 4.4 + uSeed.xy, 4.0, 3));
    float pres = presence * mix(0.06, 1.0, wet) * mix(1.0, 0.4, sparseAt(cuv));
    if (h2.x > pres) continue;
    vec2 c = o + 0.25 + 0.5 * h;
    float rad = mix(radKm.x, radKm.y, h3.x);
    vec2 dkm = uUvToKm * ((f - c) / period);
    float ang = atan(dkm.y, dkm.x);
    float lobes = 0.1 * sin(ang * 2.0 + h.x * 6.2832) + 0.06 * sin(ang * 3.0 + h.y * 6.2832) + 0.03 * sin(ang * 5.0 + h2.y * 6.2832);
    float r = length(dkm) / (rad * (1.0 + lobes));
    float v = 1.0 - r * r;
    if (v <= 0.0) continue;
    v = pow(v, wall) * mix(peak.x, peak.y, h3.y);
    if (v > best) { best = v; cr = h3.y; }
  }
  return best;
}
void main() {
  vec2 uv = vUv;
  float sp = sparseAt(uv);
  float r1, r2, r3;
  // the towers: ~7 km lattice, 1.6-3.6 km radius; half reach the top
  float big = towers(uv, vec2(0.13), 10.0, 0.95, vec2(3.0, 5.4), vec2(0.62, 1.0), 0.7, r1);
  // cumulus congestus between them: ~2.5 km lattice, 0.5-1.3 km, tops a third to half way up
  float mid = towers(uv, vec2(0.41), 30.0, 0.75, vec2(0.9, 2.1), vec2(0.3, 0.6), 0.6, r2);
  // small fair-weather cumulus near the base, in patches
  float small = towers(uv, vec2(0.77), 110.0, 0.4, vec2(0.18, 0.45), vec2(0.12, 0.22), 0.7, r3)
    * smoothstep(-0.1, 0.2, fbm2(uv + 8.8 + uSeed.xy, 30.0, 2));
  float edge = fbm2(uv, 192.0, 2) * 0.08;
  float cov = max(max(big, mid), small);
  cov = clamp(cov + edge * step(0.01, cov), 0.0, 1.0);
  float type = big >= max(mid, small) ? 0.7 + 0.3 * r1 : mid >= small ? 0.4 + 0.3 * r2 : 0.2 + 0.2 * r3;
  // placed cells (the scripted climb's), as the fair map
  for (int i = 0; i < 4; i++) {
    if (i >= uCellCount) break;
    vec2 d = uv - uCells[i].xy;
    d -= floor(d + 0.5);
    vec2 dk = uUvToKm * d;
    float rk = uCells[i].z * uKmPerTile;
    float rr = length(dk) + fbm2(uv, 384.0, 2) * uRag * rk;
    float k = 1.0 - rr * rr / (rk * rk);
    float v = k > 0.0 ? pow(k, uDome) * uCells[i].w * (0.92 + 0.16 * fbm2(uv + float(i) * 0.13, 150.0, 2)) : 0.0;
    if (v > cov) { cov = v; type = uCellTypes[i]; }
  }
  // the low deck (a): rows along the wind broken into patches, ~55 % cover, thinner over the field
  vec2 q = mat2(2.0, -1.0, 1.0, 2.0) * uv;
  vec2 warp = vec2(fbm2(uv, 10.0, 2), fbm2(uv + 5.3, 10.0, 2)) * 0.03;
  float rows = fbm2p((q + warp) * vec2(6.0, 24.0), vec2(6.0, 24.0), 4);
  float patches = fbm2(uv + 2.7, 9.0, 3);
  float strato = smoothstep(-0.05, 0.18, rows * 0.6 + patches * 0.8) * smoothstep(-0.2, 0.05, patches);
  strato *= mix(1.0, 0.35, sp);
  // the mid deck (b): broad torn sheets (~15-30 km) with clumps in them
  float sheet = fbm2(uv + 8.1, 5.0, 4);
  float clumps = fbm2(uv + 1.3, 90.0, 3);
  float alto = smoothstep(0.0, 0.3, sheet + 0.25 * clumps) * smoothstep(-0.3, 0.3, clumps + 0.2);
  outColor = vec4(cov, type, alto, strato);
}
`,ga=ve.slice(0,ve.indexOf("void main() {"))+`
// where the trades' cumulus is: streets along the wind (~4-6 km apart, tens of km long) broken into clumps,
// and some wide clear areas
float tradeWet(vec2 uv) {
  vec2 q = mat2(2.0, -1.0, 1.0, 2.0) * uv;   // (the strato rows' frame: along the wind)
  vec2 warp = vec2(fbm2(uv + 0.7, 12.0, 2), fbm2(uv + 3.9, 12.0, 2)) * 0.02;
  float streets = fbm2p((q + warp) * vec2(5.0, 20.0), vec2(5.0, 20.0), 3);
  float clumps = fbm2(uv + 3.1 + uSeed.xy, 26.0, 2);
  float clear = smoothstep(-0.45, -0.1, fbm2(uv + 6.6 + uSeed.xy, 3.0, 2));
  return smoothstep(-0.2, 0.08, streets * 0.75 + clumps * 0.55) * clear;
}
// one class of cells on a warped lattice (as the dramatic map's towers): a lobed disc of radius radKm per cell,
// its value a dome (pow < 1: a broad top) scaled by the cell's height class
float tradeCells(vec2 uv, vec2 off, float period, float presence, vec2 radKm, vec2 peak, float wall, out float cr) {
  off += uSeed.xy;
  vec2 x = (warpUv(uv) + off) * period, id = floor(x), f = fract(x);
  float best = 0.0; cr = 0.0;
  for (float j = -1.0; j <= 1.0; j++) for (float i = -1.0; i <= 1.0; i++) {
    vec2 o = vec2(i, j);
    vec2 cid = mod(id + o, period);
    vec2 h = hash22(cid + 3.7 + uSeed.zw);
    vec2 h2 = hash22(cid + 29.1 + uSeed.zw);
    vec2 h3 = hash22(cid + 61.3 + uSeed.zw);
    vec2 cuv = (cid + 0.5) / period - off;
    if (h2.x > presence * tradeWet(cuv)) continue;
    vec2 c = o + 0.2 + 0.6 * h;
    float rad = mix(radKm.x, radKm.y, h3.x * h3.x);
    vec2 dkm = uUvToKm * ((f - c) / period);
    float ang = atan(dkm.y, dkm.x);
    float lobes = 0.14 * sin(ang * 2.0 + h.x * 6.2832) + 0.08 * sin(ang * 3.0 + h.y * 6.2832) + 0.05 * sin(ang * 5.0 + h2.y * 6.2832);
    float r = length(dkm) / (rad * (1.0 + lobes));
    float v = 1.0 - r * r;
    if (v <= 0.0) continue;
    // (bigger cells are taller)
    v = pow(v, wall) * mix(peak.x, peak.y, mix(h3.y, h3.x, 0.6));
    if (v > best) { best = v; cr = h3.y; }
  }
  return best;
}
void main() {
  vec2 uv = vUv;
  float r1, r2, r3;
  // trade cumulus: ~1.4 km lattice, 0.5-1.5 km across, tops a quarter to two thirds up the ~2 km layer
  float a = tradeCells(uv, vec2(0.21), 70.0, 0.97, vec2(0.3, 0.85), vec2(0.4, 0.85), 0.6, r1);
  // the small ones between them: ~0.8 km lattice, 0.3-0.7 km across, low
  float b = tradeCells(uv, vec2(0.57), 120.0, 0.85, vec2(0.18, 0.4), vec2(0.25, 0.5), 0.7, r2);
  // the odd congestus: ~5 km lattice, 1.2-2 km across, to the top
  float c = tradeCells(uv, vec2(0.83), 20.0, 0.18, vec2(0.6, 1.0), vec2(0.8, 1.0), 0.55, r3);
  float edge = fbm2(uv, 384.0, 2) * 0.1;
  float cov = max(max(a, b), c);
  cov = clamp(cov + edge * step(0.01, cov), 0.0, 1.0);
  float type = c >= max(a, b) ? 0.8 + 0.2 * r3 : a >= b ? 0.4 + 0.3 * r1 : 0.2 + 0.2 * r2;
  // placed cells (the scripted climb's), as the fair map
  for (int i = 0; i < 4; i++) {
    if (i >= uCellCount) break;
    vec2 d = uv - uCells[i].xy;
    d -= floor(d + 0.5);
    vec2 dk = uUvToKm * d;
    float rk = uCells[i].z * uKmPerTile;
    float rr = length(dk) + fbm2(uv, 384.0, 2) * uRag * rk;
    float k = 1.0 - rr * rr / (rk * rk);
    float v = k > 0.0 ? pow(k, uDome) * uCells[i].w * (0.92 + 0.16 * fbm2(uv + float(i) * 0.13, 150.0, 2)) : 0.0;
    if (v > cov) { cov = v; type = uCellTypes[i]; }
  }
  outColor = vec4(cov, type, 0.0, 0.0);
}
`;function ya(i,e=new m){const t=i.clone().normalize(),a=new y(Math.abs(t.x),Math.abs(t.y),Math.abs(t.z)),o=Math.max(a.x,a.y,a.z),r=t.clone().divideScalar(o);let s;a.y>a.x&&a.y>a.z?s=r.y>0?[-t.x,t.z]:[t.x,t.z]:a.x>a.y&&a.x>a.z?s=r.x>0?[t.y,t.z]:[-t.y,t.z]:s=r.z>0?[t.x,t.y]:[t.x,-t.y];const l=s[0]*s[0],u=s[1]*s[1],d=-2*l+2*u-3,h=Math.sqrt(1.5+l-u-.5*Math.sqrt(-24*l+d*d))*(s[0]>0?1:-1),v=Math.sqrt(6/(3-h*h))*s[1];return e.set(h*.5+.5,v*.5+.5)}const At=ma(Dt.origin),wa=wt(new y().setFromMatrixPosition(At),qe.DEFAULT.bottomRadius,Zt.WGS84,new y);function me(i,e,t=new m){const a=i.clone().applyMatrix4(At).add(wa);return ya(a,t).multiplyScalar(e)}const Y=100,xe=10007/Y,xa=new y(Math.sin(208*Math.PI/180)*6e3,0,-Math.cos(208*Math.PI/180)*6e3),Sa=[11,24],b={center:xa.clone(),radiiKm:[...Sa],cells:[]};function to(i){i.center&&b.center.copy(i.center),i.radiiKm&&(b.radiiKm=[...i.radiiKm]),i.cells&&(b.cells=i.cells.slice(0,4).map(e=>({...e,at:e.at.clone()}))),i.stratoKm&&(b.stratoKm=[...i.stratoKm]),i.style&&(i.style==="fair"?delete b.style:b.style=i.style)}function Ta(i){const e=me(i,Y),t=me(i.clone().add(new y(1e3,0,0)),Y).sub(e),a=me(i.clone().add(new y(0,0,-1e3)),Y).sub(e),o=t.x*a.y-a.x*t.y;return new sa().set(a.y/o,-a.x/o,-t.y/o,t.x/o)}const Pe=4711,lt=(()=>{if(typeof location>"u")return Pe;const i=new URLSearchParams(location.search),e=i.get("seed");return e==="demo"?Pe:e!==null&&e!==""&&Number.isFinite(Number(e))?Math.floor(Number(e)):i.has("still")||i.has("rec")?Pe:1+Math.floor(Math.random()*99999)})();function Ca(i){if(i===0)return new D;let e=i>>>0;const t=()=>(e=e*1664525+1013904223>>>0,e/4294967296);return new D(t(),t(),Math.floor(t()*997),Math.floor(t()*991))}function Q(i,e){const t=typeof location>"u"?null:new URLSearchParams(location.search).get(i);return t===null?e:Number(t)}const ke=new ae(new re(2,2));ke.frustumCulled=!1;const Ea=new V;function Rt(i,e,t,a=0){const o=i.getRenderTarget();ke.material=e,i.setRenderTarget(t,a),i.render(ke,Ea),i.setRenderTarget(o)}class ge{static SIZE=2048;size=ge.SIZE;target;material;needsRender=!0;constructor(){this.target=new he(this.size,this.size,{depthBuffer:!1});const e=this.target.texture;e.generateMipmaps=!0,e.minFilter=Ye,e.magFilter=_,e.wrapS=e.wrapT=ee,e.colorSpace=De;const t=me(b.center,Y),a=b.cells??[],o=Array.from({length:4},(r,s)=>{const l=a[s];if(!l)return new D;const u=me(l.at,Y);return new D(u.x-Math.floor(u.x),u.y-Math.floor(u.y),l.radiusKm/xe,l.coverage)});this.material=new H({glslVersion:M,vertexShader:te,fragmentShader:b.style==="dramatic"?va:b.style==="tropical"?ga:ve,uniforms:{uSparseCenter:new n(new m(t.x-Math.floor(t.x),t.y-Math.floor(t.y))),uSparseRadii:new n(new m(b.radiiKm[0]/xe,b.radiiKm[1]/xe)),uCells:new n(o),uCellTypes:new n(Array.from({length:4},(r,s)=>a[s]?.type??.8)),uCellCount:new n(a.length),uUvToKm:new n(Ta(b.center)),uKmPerTile:new n(xe),uRag:new n(Q("w_rag",.3)),uDeckThreshold:new n(Q("w_deck",-.05)),uSparseThreshold:new n(Q("w_sparse",.2)),uMacroBias:new n(Q("w_macro",0)),uSeed:new n(Ca(lt)),uDome:new n(Q("w_dome",1)),uStratoKm:new n(new m(Q("w_s0",b.stratoKm?.[0]??40),Q("w_s1",b.stratoKm?.[1]??70)))}})}static shared(){const e=JSON.stringify([b,lt]);let t=Se.get(e);return t||(t={tex:new ge,refs:0},t.tex.sharedKey=e,Se.set(e,t)),t.refs++,t.tex}sharedKey=null;get texture(){return this.target.texture}render(e){this.needsRender&&(this.needsRender=!1,Rt(e,this.material,this.target))}read(e){this.render(e);const t=new Uint8Array(this.size*this.size*4);return e.readRenderTargetPixels(this.target,0,0,this.size,this.size,t),t}dispose(){if(this.sharedKey!==null){const e=Se.get(this.sharedKey);if(e&&--e.refs>0)return;Se.delete(this.sharedKey)}this.target.dispose(),this.material.dispose()}}const Se=new Map,Da=`
precision highp float;
in vec2 vUv;
uniform float uZ;
layout(location = 0) out vec4 outColor;
${Ze}
void main() {
  vec3 uv = vec3(vUv, uZ);
  float freq = 4.0;
  // ridge.js folded the Perlin fbm with abs(), which suits a cloud sea seen
  // from above but leaves crease *sheets* in 3D that light up as stripes on
  // cumulus flanks. Plain (unfolded) Perlin, as in Schneider's Perlin-Worley.
  float pfbm = clamp(perlinFbm3(uv, 4.0, 7) * 0.7 + 0.5, 0.0, 1.0);
  float wf0 = worleyFbm3(uv, freq), wf1 = worleyFbm3(uv, freq * 2.0), wf2 = worleyFbm3(uv, freq * 4.0);
  float pw = remap(pfbm, 0.0, 1.0, wf0, 1.0);
  outColor = vec4(clamp(pw, 0.0, 1.0), wf0, wf1, wf2);
}`,Aa=`
precision highp float;
in vec2 vUv;
uniform float uZ;
layout(location = 0) out vec4 outColor;
${Ze}
void main() {
  vec3 uv = vec3(vUv, uZ);
  outColor = vec4(worleyFbm3(uv, 2.0), worleyFbm3(uv, 4.0), worleyFbm3(uv, 8.0), 1.0);
}`;function bt(i,e,t){const a=new Et(e,e,e,{depthBuffer:!1}),o=a.texture;o.wrapS=o.wrapT=o.wrapR=ee,o.minFilter=Ye,o.magFilter=_,o.generateMipmaps=!0,o.colorSpace=De;const r=new H({glslVersion:M,vertexShader:te,fragmentShader:t,uniforms:{uZ:new n(0)}});for(let s=0;s<e;s++)r.uniforms.uZ.value=(s+.5)/e,Rt(i,r,a,s);return r.dispose(),a}function ao(i,e=128){return bt(i,e,Da)}function ro(i,e=32){return bt(i,e,Aa)}const Ra={base:7300*J,top:10800*J,coverage:.35,cirrusAltitude:26e3*J,cirrusCoverage:.6,strato:{base:11800*J,top:12600*J,density:.065},sheet:{altitude:28e3*J,tau:.014,deckAltitude:13950*J,deckStart:3e4,deckGain:1.8}};class Re{constructor(e=0,t=0,a=0,o=0){this.expTerm=e,this.exponent=t,this.linearTerm=a,this.constantTerm=o}set(e=0,t=0,a=0,o=0){return this.expTerm=e,this.exponent=t,this.linearTerm=a,this.constantTerm=o,this}clone(){return new Re(this.expTerm,this.exponent,this.linearTerm,this.constantTerm)}copy(e){return this.expTerm=e.expTerm,this.exponent=e.exponent,this.linearTerm=e.linearTerm,this.constantTerm=e.constantTerm,this}}const ba=["channel","altitude","height","densityScale","shapeAmount","shapeDetailAmount","weatherExponent","shapeAlteringBias","coverageFilterWidth","shadow","densityProfile"];function Oa(i,e){if(e!=null)for(const t of ba){const a=e[t];a!=null&&(i[t]instanceof Re?i[t].copy(a):i[t]=a)}}const Ge=class Ot{constructor(e){this.channel="r",this.altitude=0,this.height=0,this.densityScale=.2,this.shapeAmount=1,this.shapeDetailAmount=1,this.weatherExponent=1,this.shapeAlteringBias=.35,this.coverageFilterWidth=.6,this.densityProfile=new Re(0,0,.75,.25),this.shadow=!1,this.set(e)}set(e){return Oa(this,e),this}clone(){return new Ot(this)}copy(e){return this.channel=e.channel,this.altitude=e.altitude,this.height=e.height,this.densityScale=e.densityScale,this.shapeAmount=e.shapeAmount,this.shapeDetailAmount=e.shapeDetailAmount,this.weatherExponent=e.weatherExponent,this.shapeAlteringBias=e.shapeAlteringBias,this.coverageFilterWidth=e.coverageFilterWidth,this.densityProfile.copy(e.densityProfile),this.shadow=e.shadow,this}};Ge.DEFAULT=new Ge;let G=Ge;const ce=Array.from({length:8},()=>({value:0,flag:0})),pe=Array.from({length:3},()=>({min:0,max:0}));function Pa(i,e){return i.value!==e.value?i.value-e.value:i.flag-e.flag}const Be=class Pt extends Array{constructor(e){super(new G(e?.[0]),new G(e?.[1]),new G(e?.[2]),new G(e?.[3]))}set(e){return this[0].set(e?.[0]),this[1].set(e?.[1]),this[2].set(e?.[2]),this[3].set(e?.[3]),this}reset(){return this[0].copy(G.DEFAULT),this[1].copy(G.DEFAULT),this[2].copy(G.DEFAULT),this[3].copy(G.DEFAULT),this}clone(){return new Pt(this)}copy(e){return this[0].copy(e[0]),this[1].copy(e[1]),this[2].copy(e[2]),this[3].copy(e[3]),this}get localWeatherChannels(){return this[0].channel+this[1].channel+this[2].channel+this[3].channel}packValues(e,t){return t.set(this[0][e],this[1][e],this[2][e],this[3][e])}packSums(e,t,a){return a.set(this[0][e]+this[0][t],this[1][e]+this[1][t],this[2][e]+this[2][t],this[3][e]+this[3][t])}packDensityProfiles(e,t){return t.set(this[0].densityProfile[e],this[1].densityProfile[e],this[2].densityProfile[e],this[3].densityProfile[e])}packIntervalHeights(e,t){for(let s=0;s<4;++s){const l=this[s];let u=ce[s];u.value=l.altitude,u.flag=0,u=ce[s+4],u.value=l.altitude+l.height,u.flag=1}ce.sort(Pa);let a=0,o=0;for(let s=0;s<ce.length;++s){const{value:l,flag:u}=ce[s];if(o===0&&s>0){const d=pe[a++];d.min=ce[s-1].value,d.max=l}o+=u===0?1:-1}for(;a<3;++a){const s=pe[a];s.min=0,s.max=0}let r=pe[0];e.x=r.min,t.x=r.max,r=pe[1],e.y=r.min,t.y=r.max,r=pe[2],e.z=r.min,t.z=r.max}};Be.DEFAULT=new Be([{channel:"r",altitude:750,height:650,densityScale:.2,shapeAmount:1,shapeDetailAmount:1,weatherExponent:1,shapeAlteringBias:.35,coverageFilterWidth:.6,shadow:!0},{channel:"g",altitude:1e3,height:1200,densityScale:.2,shapeAmount:1,shapeDetailAmount:1,weatherExponent:1,shapeAlteringBias:.35,coverageFilterWidth:.6,shadow:!0},{channel:"b",altitude:7500,height:500,densityScale:.003,shapeAmount:.4,shapeDetailAmount:0,weatherExponent:1,shapeAlteringBias:.35,coverageFilterWidth:.5},{channel:"a"}]);let Na=Be;var Ia="Invariant failed";function K(i,e){if(!i)throw new Error(Ia)}let Nt=class Ve{constructor(e,t){this.near=[new y,new y,new y,new y],this.far=[new y,new y,new y,new y],e!=null&&t!=null&&this.setFromCamera(e,t)}clone(){return new Ve().copy(this)}copy(e){for(let t=0;t<4;++t)this.near[t].copy(e.near[t]),this.far[t].copy(e.far[t]);return this}setFromCamera(e,t){const a=e.isOrthographicCamera===!0,o=e.projectionMatrixInverse;this.near[0].set(1,1,-1),this.near[1].set(1,-1,-1),this.near[2].set(-1,-1,-1),this.near[3].set(-1,1,-1);for(let r=0;r<4;++r)this.near[r].applyMatrix4(o);this.far[0].set(1,1,1),this.far[1].set(1,-1,1),this.far[2].set(-1,-1,1),this.far[3].set(-1,1,1);for(let r=0;r<4;++r){const s=this.far[r];s.applyMatrix4(o);const l=Math.abs(s.z);a?s.z*=Math.min(t/l,1):s.multiplyScalar(Math.min(t/l,1))}return this}split(e,t=[]){for(let a=0;a<e.length;++a){const o=t[a]??=new Ve;if(a===0)for(let r=0;r<4;++r)o.near[r].copy(this.near[r]);else for(let r=0;r<4;++r)o.near[r].lerpVectors(this.near[r],this.far[r],e[a-1]);if(a===e.length-1)for(let r=0;r<4;++r)o.far[r].copy(this.far[r]);else for(let r=0;r<4;++r)o.far[r].lerpVectors(this.near[r],this.far[r],e[a])}return t.length=e.length,t}applyMatrix4(e){for(let t=0;t<4;++t)this.near[t].applyMatrix4(e),this.far[t].applyMatrix4(e);return this}};const La={uniform:(i,e,t,a,o=[])=>{for(let r=0;r<i;++r)o[r]=(e+(t-e)*(r+1)/i)/t;return o.length=i,o},logarithmic:(i,e,t,a,o=[])=>{for(let r=0;r<i;++r)o[r]=e*(t/e)**((r+1)/i)/t;return o.length=i,o},practical:(i,e,t,a=.5,o=[])=>{for(let r=0;r<i;++r){const s=(e+(t-e)*(r+1)/i)/t,l=e*(t/e)**((r+1)/i)/t;o[r]=xt(s,l,a)}return o.length=i,o}};function _a(i,e,t,a,o,r=[]){return La[i](e,t,a,o,r)}const ut=new y,ht=new y,Ma=new C,dt=new C,Ua=new Nt,za=new ua,Ha={maxFar:null,farScale:1,splitMode:"practical",splitLambda:.5,margin:0,fade:!0};class Fa{constructor(e){this.cascades=[],this.mapSize=new m,this.cameraFrustum=new Nt,this.frusta=[],this.splits=[],this._far=0;const{cascadeCount:t,mapSize:a,maxFar:o,farScale:r,splitMode:s,splitLambda:l,margin:u,fade:d}={...Ha,...e};this.cascadeCount=t,this.mapSize.copy(a),this.maxFar=o,this.farScale=r,this.splitMode=s,this.splitLambda=l,this.margin=u,this.fade=d}get cascadeCount(){return this.cascades.length}set cascadeCount(e){if(e!==this.cascadeCount){for(let t=0;t<e;++t)this.cascades[t]??={interval:new m,matrix:new C,inverseMatrix:new C,projectionMatrix:new C,inverseProjectionMatrix:new C,viewMatrix:new C,inverseViewMatrix:new C};this.cascades.length=e}}get far(){return this._far}updateIntervals(e){const t=this.cascadeCount,a=this.splits,o=this.far;_a(this.splitMode,t,e.near,o,this.splitLambda,a),this.cameraFrustum.setFromCamera(e,o),this.cameraFrustum.split(a,this.frusta);const r=this.cascades;for(let s=0;s<t;++s)r[s].interval.set(a[s-1]??0,a[s]??0)}getFrustumRadius(e,t){const a=t.near,o=t.far;let r=Math.max(o[0].distanceTo(o[2]),o[0].distanceTo(a[2]));if(this.fade){const s=e.near,l=this.far,u=o[0].z/(l-s);r+=.25*u**2*(l-s)}return r*.5}updateMatrices(e,t,a=1){const o=Ma.lookAt(ut.setScalar(0),ht.copy(t).multiplyScalar(-1),ot.DEFAULT_UP),r=dt.multiplyMatrices(dt.copy(o).invert(),e.matrixWorld),s=this.frusta,l=this.cascades;K(s.length===l.length);const u=this.margin,d=this.mapSize;for(let h=0;h<s.length;++h){const v=s[h],w=l[h],f=this.getFrustumRadius(e,s[h]),g=-f,S=f,E=f,F=-f;w.projectionMatrix.makeOrthographic(g,S,E,F,-this.margin,f*2+this.margin);const{near:ie,far:N}=Ua.copy(v).applyMatrix4(r),Z=za.makeEmpty();for(let W=0;W<4;W++)Z.expandByPoint(ie[W]),Z.expandByPoint(N[W]);const I=Z.getCenter(ut);I.z=Z.max.z+u;const X=(S-g)/d.width,ne=(E-F)/d.height;I.x=Math.round(I.x/X)*X,I.y=Math.round(I.y/ne)*ne,I.applyMatrix4(o);const se=ht.copy(t).multiplyScalar(a).add(I);w.inverseViewMatrix.lookAt(I,se,ot.DEFAULT_UP).setPosition(se)}}update(e,t,a){this._far=this.maxFar!=null?Math.min(this.maxFar,e.far*this.farScale):e.far*this.farScale,this.updateIntervals(e),this.updateMatrices(e,t,a);const o=this.cascades,r=this.cascadeCount;for(let s=0;s<r;++s){const{matrix:l,inverseMatrix:u,projectionMatrix:d,inverseProjectionMatrix:h,viewMatrix:v,inverseViewMatrix:w}=o[s];h.copy(d).invert(),v.copy(w).invert(),l.copy(d).multiply(v),u.copy(w).multiply(h)}}}const pt=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],It=pt.reduce((i,e,t)=>{const a=new m;for(let o=0;o<16;++o)if(pt[o]===t){a.set((o%4+.5)/4,(Math.floor(o/4)+.5)/4);break}return[...i,a]},[]),Wa={resolutionScale:1,lightShafts:!0,shapeDetail:!0,turbulence:!0,haze:!0,clouds:{multiScatteringOctaves:8,accurateSunSkyLight:!0,accuratePhaseFunction:!1,maxIterationCount:500,minStepSize:50,maxStepSize:1e3,maxRayDistance:2e5,perspectiveStepScale:1.01,minDensity:1e-5,minExtinction:1e-5,minTransmittance:.01,maxIterationCountToGround:3,maxIterationCountToSun:2,minSecondaryStepSize:100,secondaryStepScale:2,maxShadowLengthIterationCount:500,minShadowLengthStepSize:50,maxShadowLengthRayDistance:2e5},shadow:{cascadeCount:3,mapSize:new m(512,512),maxIterationCount:50,minStepSize:100,maxStepSize:1e3,minDensity:1e-5,minExtinction:1e-5,minTransmittance:1e-4}},p=Wa,ka={low:{...p,lightShafts:!1,shapeDetail:!1,turbulence:!1,clouds:{...p.clouds,accurateSunSkyLight:!1,maxIterationCount:200,minStepSize:100,maxRayDistance:1e5,minDensity:1e-4,minExtinction:1e-4,minTransmittance:.1,maxIterationCountToGround:0,maxIterationCountToSun:1},shadow:{...p.shadow,maxIterationCount:25,minDensity:1e-4,minExtinction:1e-4,minTransmittance:.01,cascadeCount:2,mapSize:new m(256,256)}},medium:{...p,lightShafts:!1,turbulence:!1,clouds:{...p.clouds,minDensity:1e-4,minExtinction:1e-4,accurateSunSkyLight:!1,maxIterationCountToSun:2,maxIterationCountToGround:1},shadow:{...p.shadow,minDensity:1e-4,minExtinction:1e-4,mapSize:new m(256,256)}},high:p,ultra:{...p,clouds:{...p.clouds,minStepSize:10},shadow:{...p.shadow,mapSize:new m(1024,1024)}}},Ga=`precision highp float;
precision highp sampler3D;
precision highp sampler2DArray;

#include <common>
#include <packing>

#include "core/depth"
#include "core/math"
#include "core/turbo"
#include "core/generators"
#include "core/raySphereIntersection"
#include "core/cascadedShadowMaps"
#include "core/interleavedGradientNoise"
#include "core/vogelDisk"

#include "atmosphere/bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "atmosphere/bruneton/common"
#include "atmosphere/bruneton/runtime"

#include "types"
#include "parameters"
#include "clouds"

#if !defined(RECIPROCAL_PI4)
#define RECIPROCAL_PI4 0.07957747154594767
#endif // !defined(RECIPROCAL_PI4)

uniform sampler2D depthBuffer;
uniform mat4 viewMatrix;
uniform mat4 reprojectionMatrix;
uniform mat4 viewReprojectionMatrix;
uniform float cameraNear;
uniform float cameraFar;
uniform float cameraHeight;
uniform vec2 temporalJitter;
uniform vec2 targetUvScale;
uniform float mipLevelScale;

// Scattering
const vec2 scatterAnisotropy = vec2(SCATTER_ANISOTROPY_1, SCATTER_ANISOTROPY_2);
const float scatterAnisotropyMix = SCATTER_ANISOTROPY_MIX;
uniform float skyLightScale;
uniform float groundBounceScale;
uniform float powderScale;
uniform float powderExponent;

// Primary raymarch
uniform int maxIterationCount;
uniform float minStepSize;
uniform float maxStepSize;
uniform float maxRayDistance;
uniform float perspectiveStepScale;

// Secondary raymarch
uniform int maxIterationCountToSun;
uniform int maxIterationCountToGround;
uniform float minSecondaryStepSize;
uniform float secondaryStepScale;

// Beer shadow map
uniform sampler2DArray shadowBuffer;
uniform vec2 shadowTexelSize;
uniform vec2 shadowIntervals[SHADOW_CASCADE_COUNT];
uniform mat4 shadowMatrices[SHADOW_CASCADE_COUNT];
uniform float shadowFar;
uniform float maxShadowFilterRadius;

// Shadow length
#ifdef SHADOW_LENGTH
uniform int maxShadowLengthIterationCount;
uniform float minShadowLengthStepSize;
uniform float maxShadowLengthRayDistance;
#endif // SHADOW_LENGTH

in vec2 vUv;
in vec3 vCameraPosition;
in vec3 vCameraDirection; // Direction to the center of screen
in vec3 vRayDirection; // Direction to the texel
in vec3 vViewPosition;
in GroundIrradiance vGroundIrradiance;
in CloudsIrradiance vCloudsIrradiance;

layout(location = 0) out vec4 outputColor;
layout(location = 1) out vec3 outputDepthVelocity;
#ifdef SHADOW_LENGTH
layout(location = 2) out float outputShadowLength;
#endif // SHADOW_LENGTH

float getViewZ(const float depth) {
  #ifdef PERSPECTIVE_CAMERA
  return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
  #else // PERSPECTIVE_CAMERA
  return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
  #endif // PERSPECTIVE_CAMERA
}

vec3 ecefToWorld(const vec3 positionECEF) {
  return (ecefToWorldMatrix * vec4(positionECEF - altitudeCorrection, 1.0)).xyz;
}

vec2 getShadowUv(const vec3 worldPosition, const int cascadeIndex) {
  vec4 clip = shadowMatrices[cascadeIndex] * vec4(worldPosition, 1.0);
  clip /= clip.w;
  return clip.xy * 0.5 + 0.5;
}

float getDistanceToShadowTop(const vec3 rayPosition) {
  // Distance to the top of the shadows along the sun direction, which matches
  // the ray origin of BSM.
  return raySphereSecondIntersection(
    rayPosition,
    sunDirection,
    vec3(0.0),
    bottomRadius + shadowTopHeight
  );
}

#ifdef DEBUG_SHOW_CASCADES

const vec3 cascadeColors[4] = vec3[4](
  vec3(1.0, 0.0, 0.0),
  vec3(0.0, 1.0, 0.0),
  vec3(0.0, 0.0, 1.0),
  vec3(1.0, 1.0, 0.0)
);

vec3 getCascadeColor(const vec3 rayPosition) {
  vec3 worldPosition = ecefToWorld(rayPosition);
  int cascadeIndex = getCascadeIndex(
    viewMatrix,
    worldPosition,
    shadowIntervals,
    cameraNear,
    shadowFar
  );
  vec2 uv = getShadowUv(worldPosition, cascadeIndex);
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
    return vec3(1.0);
  }
  return cascadeColors[cascadeIndex];
}

vec3 getFadedCascadeColor(const vec3 rayPosition, const float jitter) {
  vec3 worldPosition = ecefToWorld(rayPosition);
  int cascadeIndex = getFadedCascadeIndex(
    viewMatrix,
    worldPosition,
    shadowIntervals,
    cameraNear,
    shadowFar,
    jitter
  );
  return cascadeIndex >= 0
    ? cascadeColors[cascadeIndex]
    : vec3(1.0);
}

#endif // DEBUG_SHOW_CASCADES

float readShadowOpticalDepth(
  const vec2 uv,
  const float distanceToTop,
  const float distanceOffset,
  const int cascadeIndex
) {
  // r: frontDepth, g: meanExtinction, b: maxOpticalDepth, a: maxOpticalDepthTail
  // Also see the discussion here: https://x.com/shotamatsuda/status/1885322308908442106
  vec4 shadow = texture(shadowBuffer, vec3(uv, float(cascadeIndex)));
  float distanceToFront = max(0.0, distanceToTop - distanceOffset - shadow.r);
  return min(shadow.b + shadow.a, shadow.g * distanceToFront);
}

float sampleShadowOpticalDepthPCF(
  const vec3 worldPosition,
  const float distanceToTop,
  const float distanceOffset,
  const float radius,
  const int cascadeIndex
) {
  vec2 uv = getShadowUv(worldPosition, cascadeIndex);
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
    return 0.0;
  }
  if (radius < 0.1) {
    return readShadowOpticalDepth(uv, distanceToTop, distanceOffset, cascadeIndex);
  }
  float sum = 0.0;
  vec2 offset;
  #pragma unroll_loop_start
  for (int i = 0; i < 16; ++i) {
    #if UNROLLED_LOOP_INDEX < SHADOW_SAMPLE_COUNT
    offset = vogelDisk(
      UNROLLED_LOOP_INDEX,
      SHADOW_SAMPLE_COUNT,
      interleavedGradientNoise(gl_FragCoord.xy + temporalJitter * resolution) * PI2
    );
    sum += readShadowOpticalDepth(
      uv + offset * radius * shadowTexelSize,
      distanceToTop,
      distanceOffset,
      cascadeIndex
    );
    #endif // UNROLLED_LOOP_INDEX < SHADOW_SAMPLE_COUNT
  }
  #pragma unroll_loop_end
  return sum / float(SHADOW_SAMPLE_COUNT);
}

float sampleShadowOpticalDepth(
  const vec3 rayPosition,
  const float distanceOffset,
  const float radius,
  const float jitter
) {
  float distanceToTop = getDistanceToShadowTop(rayPosition);
  if (distanceToTop <= 0.0) {
    return 0.0;
  }
  vec3 worldPosition = ecefToWorld(rayPosition);
  int cascadeIndex = getFadedCascadeIndex(
    viewMatrix,
    worldPosition,
    shadowIntervals,
    cameraNear,
    shadowFar,
    jitter
  );
  return cascadeIndex >= 0
    ? sampleShadowOpticalDepthPCF(
      worldPosition,
      distanceToTop,
      distanceOffset,
      radius,
      cascadeIndex
    )
    : 0.0;
}

#ifdef DEBUG_SHOW_SHADOW_MAP
vec4 getCascadedShadowMaps(vec2 uv) {
  vec4 coord = vec4(vUv, vUv - 0.5) * 2.0;
  vec4 shadow = vec4(0.0);
  if (uv.y > 0.5) {
    if (uv.x < 0.5) {
      shadow = texture(shadowBuffer, vec3(coord.xw, 0.0));
    } else {
      #if SHADOW_CASCADE_COUNT > 1
      shadow = texture(shadowBuffer, vec3(coord.zw, 1.0));
      #endif // SHADOW_CASCADE_COUNT > 1
    }
  } else {
    if (uv.x < 0.5) {
      #if SHADOW_CASCADE_COUNT > 2
      shadow = texture(shadowBuffer, vec3(coord.xy, 2.0));
      #endif // SHADOW_CASCADE_COUNT > 2
    } else {
      #if SHADOW_CASCADE_COUNT > 3
      shadow = texture(shadowBuffer, vec3(coord.zy, 3.0));
      #endif // SHADOW_CASCADE_COUNT > 3
    }
  }

  #if !defined(DEBUG_SHOW_SHADOW_MAP_TYPE)
  #define DEBUG_SHOW_SHADOW_MAP_TYPE 0
  #endif // !defined(DEBUG_SHOW_SHADOW_MAP_TYPE

  const float frontDepthScale = 1e-5;
  const float meanExtinctionScale = 10.0;
  const float maxOpticalDepthScale = 0.01;
  vec3 color;
  #if DEBUG_SHOW_SHADOW_MAP_TYPE == 1
  color = vec3(shadow.r * frontDepthScale);
  #elif DEBUG_SHOW_SHADOW_MAP_TYPE == 2
  color = vec3(shadow.g * meanExtinctionScale);
  #elif DEBUG_SHOW_SHADOW_MAP_TYPE == 3
  color = vec3((shadow.b + shadow.a) * maxOpticalDepthScale);
  #else // DEBUG_SHOW_SHADOW_MAP_TYPE
  color =
    (shadow.rgb + vec3(0.0, 0.0, shadow.a)) *
    vec3(frontDepthScale, meanExtinctionScale, maxOpticalDepthScale);
  #endif // DEBUG_SHOW_SHADOW_MAP_TYPE
  return vec4(color, 1.0);
}
#endif // DEBUG_SHOW_SHADOW_MAP

vec2 henyeyGreenstein(const vec2 g, const float cosTheta) {
  vec2 g2 = g * g;
  // prettier-ignore
  return RECIPROCAL_PI4 *
    ((1.0 - g2) / max(vec2(1e-7), pow(1.0 + g2 - 2.0 * g * cosTheta, vec2(1.5))));
}

#ifdef ACCURATE_PHASE_FUNCTION

float draine(float u, float g, float a) {
  float g2 = g * g;
  // prettier-ignore
  return (1.0 - g2) *
    (1.0 + a * u * u) /
    (4.0 * (1.0 + a * (1.0 + 2.0 * g2) / 3.0) * PI * pow(1.0 + g2 - 2.0 * g * u, 1.5));
}

// Numerically-fitted large particles (d=10) phase function It won't be
// plausible without a more precise multiple scattering.
// Reference: https://research.nvidia.com/labs/rtr/approximate-mie/
float phaseFunction(const float cosTheta, const float attenuation) {
  const float gHG = 0.988176691700256; // exp(-0.0990567/(d-1.67154))
  const float gD = 0.5556712547839497; // exp(-2.20679/(d+3.91029) - 0.428934)
  const float alpha = 21.995520856274638; // exp(3.62489 - 8.29288/(d+5.52825))
  const float weight = 0.4819554318404214; // exp(-0.599085/(d-0.641583)-0.665888)
  return mix(
    henyeyGreenstein(vec2(gHG) * attenuation, cosTheta).x,
    draine(cosTheta, gD * attenuation, alpha),
    weight
  );
}

#else // ACCURATE_PHASE_FUNCTION

float phaseFunction(const float cosTheta, const float attenuation) {
  const vec2 g = scatterAnisotropy;
  const vec2 weights = vec2(1.0 - scatterAnisotropyMix, scatterAnisotropyMix);
  // A similar approximation is described in the Frostbite's paper, where phase
  // angle is attenuated instead of anisotropy.
  return dot(henyeyGreenstein(g * attenuation, cosTheta), weights);
}

#endif // ACCURATE_PHASE_FUNCTION

float phaseFunction(const float cosTheta) {
  return phaseFunction(cosTheta, 1.0);
}

float marchOpticalDepth(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const int maxIterationCount,
  const float mipLevel,
  const float jitter,
  out float rayDistance
) {
  int iterationCount = int(
    max(0.0, remap(mipLevel, 0.0, 1.0, float(maxIterationCount + 1), 1.0) - jitter)
  );
  if (iterationCount == 0) {
    // Fudge factor to approximate the mean optical depth.
    // TODO: Remove it.
    return 0.5;
  }
  float stepSize = minSecondaryStepSize / float(iterationCount);
  float nextDistance = stepSize * jitter;
  float opticalDepth = 0.0;
  for (int i = 0; i < iterationCount; ++i) {
    rayDistance = nextDistance;
    vec3 position = rayDistance * rayDirection + rayOrigin;
    vec2 uv = getGlobeUv(position);
    float height = length(position) - bottomRadius;
    WeatherSample weather = sampleWeather(uv, height, mipLevel);
    MediaSample media = sampleMedia(weather, position, uv, mipLevel, jitter);
    opticalDepth += media.extinction * stepSize;
    nextDistance += stepSize;
    stepSize *= secondaryStepScale;
  }
  return opticalDepth;
}

float marchOpticalDepth(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const int maxIterationCount,
  const float mipLevel,
  const float jitter
) {
  float rayDistance;
  return marchOpticalDepth(
    rayOrigin,
    rayDirection,
    maxIterationCount,
    mipLevel,
    jitter,
    rayDistance
  );
}

float approximateMultipleScattering(const float opticalDepth, const float cosTheta) {
  // Multiple scattering approximation
  // See: https://fpsunflower.github.io/ckulla/data/oz_volumes.pdf
  // a: attenuation, b: contribution, c: phase attenuation
  vec3 coeffs = vec3(1.0); // [a, b, c]
  const vec3 attenuation = vec3(0.5, 0.5, 0.5); // Should satisfy a <= b
  float scattering = 0.0;
  float beerLambert;
  #pragma unroll_loop_start
  for (int i = 0; i < 12; ++i) {
    #if UNROLLED_LOOP_INDEX < MULTI_SCATTERING_OCTAVES
    beerLambert = exp(-opticalDepth * coeffs.y);
    scattering += coeffs.x * beerLambert * phaseFunction(cosTheta, coeffs.z);
    coeffs *= attenuation;
    #endif // UNROLLED_LOOP_INDEX < MULTI_SCATTERING_OCTAVES
  }
  #pragma unroll_loop_end
  return scattering;
}

// TODO: Construct spherical harmonics of degree 2 using 2 sample points
// positioned near the horizon occlusion points on the sun direction plane.
vec3 getGroundSunSkyIrradiance(
  const vec3 position,
  const vec3 surfaceNormal,
  const float height,
  out vec3 skyIrradiance
) {
  #ifdef ACCURATE_SUN_SKY_LIGHT
  return GetSunAndSkyIrradiance(
    (position - surfaceNormal * height) * METER_TO_LENGTH_UNIT,
    surfaceNormal,
    sunDirection,
    skyIrradiance
  );
  #else // ACCURATE_SUN_SKY_LIGHT
  skyIrradiance = vGroundIrradiance.sky;
  return vGroundIrradiance.sun;
  #endif // ACCURATE_SUN_SKY_LIGHT
}

vec3 getCloudsSunSkyIrradiance(const vec3 position, const float height, out vec3 skyIrradiance) {
  #ifdef ACCURATE_SUN_SKY_LIGHT
  return GetSunAndSkyScalarIrradiance(position * METER_TO_LENGTH_UNIT, sunDirection, skyIrradiance);
  #else // ACCURATE_SUN_SKY_LIGHT
  float alpha = remapClamped(height, minHeight, maxHeight);
  skyIrradiance = mix(vCloudsIrradiance.minSky, vCloudsIrradiance.maxSky, alpha);
  return mix(vCloudsIrradiance.minSun, vCloudsIrradiance.maxSun, alpha);
  #endif // ACCURATE_SUN_SKY_LIGHT
}

#ifdef GROUND_BOUNCE
vec3 approximateRadianceFromGround(
  const vec3 position,
  const vec3 surfaceNormal,
  const float height,
  const float mipLevel,
  const float jitter
) {
  float opticalDepthToGround = marchOpticalDepth(
    position,
    -surfaceNormal,
    maxIterationCountToGround,
    mipLevel,
    jitter
  );
  vec3 skyIrradiance;
  vec3 sunIrradiance = getGroundSunSkyIrradiance(position, surfaceNormal, height, skyIrradiance);
  const float groundAlbedo = 0.3;
  vec3 groundIrradiance = skyIrradiance + (1.0 - coverage) * sunIrradiance;
  vec3 bouncedRadiance = groundAlbedo * RECIPROCAL_PI * groundIrradiance;
  return bouncedRadiance * exp(-opticalDepthToGround);
}
#endif // GROUND_BOUNCE

vec4 marchClouds(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const vec2 rayNearFar,
  const float cosTheta,
  const float jitter,
  const float rayStartTexelsPerPixel,
  out float frontDepth,
  out ivec3 sampleCount
) {
  vec3 radianceIntegral = vec3(0.0);
  float transmittanceIntegral = 1.0;
  float weightedDistanceSum = 0.0;
  float transmittanceSum = 0.0;

  float maxRayDistance = rayNearFar.y - rayNearFar.x;
  float stepSize = minStepSize + (perspectiveStepScale - 1.0) * rayNearFar.x;
  // I don't understand why spatial aliasing remains unless doubling the jitter.
  float rayDistance = stepSize * jitter * 2.0;

  for (int i = 0; i < maxIterationCount; ++i) {
    if (rayDistance > maxRayDistance) {
      break; // Termination
    }

    vec3 position = rayDistance * rayDirection + rayOrigin;
    float height = length(position) - bottomRadius;
    float mipLevel = log2(max(1.0, rayStartTexelsPerPixel + rayDistance * 1e-5));

    #if !defined(DEBUG_MARCH_INTERVALS)
    if (insideLayerIntervals(height)) {
      stepSize *= perspectiveStepScale;
      rayDistance += mix(stepSize, maxStepSize, min(1.0, mipLevel));
      continue;
    }
    #endif // !defined(DEBUG_MARCH_INTERVALS)

    // Sample rough weather.
    vec2 uv = getGlobeUv(position);
    WeatherSample weather = sampleWeather(uv, height, mipLevel);

    #ifdef DEBUG_SHOW_SAMPLE_COUNT
    ++sampleCount.x;
    #endif // DEBUG_SHOW_SAMPLE_COUNT

    if (!any(greaterThan(weather.density, vec4(minDensity)))) {
      // Step longer in empty space.
      // TODO: This produces banding artifacts.
      // Possible improvement: Binary search refinement
      stepSize *= perspectiveStepScale;
      rayDistance += mix(stepSize, maxStepSize, min(1.0, mipLevel));
      continue;
    }

    // Sample detailed participating media.
    MediaSample media = sampleMedia(weather, position, uv, mipLevel, jitter, sampleCount);

    if (media.extinction > minExtinction) {
      vec3 skyIrradiance;
      vec3 sunIrradiance = getCloudsSunSkyIrradiance(position, height, skyIrradiance);
      vec3 surfaceNormal = normalize(position);

      // March optical depth to the sun for finer details, which BSM lacks.
      float sunRayDistance = 0.0;
      float opticalDepth = marchOpticalDepth(
        position,
        sunDirection,
        maxIterationCountToSun,
        mipLevel,
        jitter,
        sunRayDistance
      );

      if (height < shadowTopHeight) {
        // Obtain the optical depth from BSM at the ray position.
        opticalDepth += sampleShadowOpticalDepth(
          position,
          // Take account of only positions further than the marched ray
          // distance.
          sunRayDistance,
          // Apply PCF only when the sun is close to the horizon.
          maxShadowFilterRadius * remapClamped(dot(sunDirection, surfaceNormal), 0.1, 0.0),
          jitter
        );
      }

      vec3 radiance = sunIrradiance * approximateMultipleScattering(opticalDepth, cosTheta);

      #ifdef GROUND_BOUNCE
      // Fudge factor for the irradiance from ground.
      if (height < shadowTopHeight && mipLevel < 0.5) {
        vec3 groundRadiance = approximateRadianceFromGround(
          position,
          surfaceNormal,
          height,
          mipLevel,
          jitter
        );
        radiance += groundRadiance * RECIPROCAL_PI4 * groundBounceScale;
      }
      #endif // GROUND_BOUNCE

      // Crude approximation of sky gradient. Better than none in the shadows.
      float skyGradient = dot(weather.heightFraction * 0.5 + 0.5, media.weight);
      radiance += skyIrradiance * RECIPROCAL_PI4 * skyGradient * skyLightScale;

      // Finally multiply by scattering.
      radiance *= media.scattering;

      #ifdef POWDER
      radiance *= 1.0 - powderScale * exp(-media.extinction * powderExponent);
      #endif // POWDER

      #ifdef DEBUG_SHOW_CASCADES
      if (height < shadowTopHeight) {
        radiance = 1e-3 * getFadedCascadeColor(position, jitter);
      }
      #endif // DEBUG_SHOW_CASCADES

      // Energy-conserving analytical integration of scattered light
      // See 5.6.3 in https://media.contentapi.ea.com/content/dam/eacom/frostbite/files/s2016-pbs-frostbite-sky-clouds-new.pdf
      float transmittance = exp(-media.extinction * stepSize);
      float clampedExtinction = max(media.extinction, 1e-7);
      vec3 scatteringIntegral = (radiance - radiance * transmittance) / clampedExtinction;
      radianceIntegral += transmittanceIntegral * scatteringIntegral;
      transmittanceIntegral *= transmittance;

      // Aerial perspective affecting clouds
      // See 5.9.1 in https://media.contentapi.ea.com/content/dam/eacom/frostbite/files/s2016-pbs-frostbite-sky-clouds-new.pdf
      weightedDistanceSum += rayDistance * transmittanceIntegral;
      transmittanceSum += transmittanceIntegral;
    }

    if (transmittanceIntegral <= minTransmittance) {
      break; // Early termination
    }

    // Take a shorter step because we've already hit the clouds.
    stepSize *= perspectiveStepScale;
    rayDistance += stepSize;
  }

  // The final product of 5.9.1 and we'll evaluate this in aerial perspective.
  frontDepth = transmittanceSum > 0.0 ? weightedDistanceSum / transmittanceSum : -1.0;

  return vec4(radianceIntegral, remapClamped(transmittanceIntegral, 1.0, minTransmittance));
}

#ifdef SHADOW_LENGTH

float marchShadowLength(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const vec2 rayNearFar,
  const float jitter
) {
  float shadowLength = 0.0;
  float maxRayDistance = rayNearFar.y - rayNearFar.x;
  float stepSize = minShadowLengthStepSize;
  float rayDistance = stepSize * jitter;
  const float attenuationFactor = 1.0 - 5e-4;
  float attenuation = 1.0;

  // TODO: This march is closed, and sample resolution can be much lower.
  // Refining the termination by binary search will make it much more efficient.
  for (int i = 0; i < maxShadowLengthIterationCount; ++i) {
    if (rayDistance > maxRayDistance) {
      break; // Termination
    }
    vec3 position = rayDistance * rayDirection + rayOrigin;
    float opticalDepth = sampleShadowOpticalDepth(position, 0.0, 0.0, jitter);
    shadowLength += (1.0 - exp(-opticalDepth)) * stepSize * attenuation;
    stepSize *= perspectiveStepScale;
    rayDistance += stepSize;
  }
  return shadowLength;
}

#endif // SHADOW_LENGTH

#ifdef HAZE

vec4 approximateHaze(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const float maxRayDistance,
  const float cosTheta,
  const float shadowLength
) {
  float modulation = remapClamped(coverage, 0.2, 0.4);
  if (cameraHeight * modulation < 0.0) {
    return vec4(0.0);
  }
  float density = modulation * hazeDensityScale * exp(-cameraHeight * hazeExponent);
  if (density < 1e-7) {
    return vec4(0.0); // Prevent artifact in views from space
  }

  // Blend two normals by the difference in angle so that normal near the
  // ground becomes that of the origin, and in the sky that of the horizon.
  vec3 normalAtOrigin = normalize(rayOrigin);
  vec3 normalAtHorizon = (rayOrigin - dot(rayOrigin, rayDirection) * rayDirection) / bottomRadius;
  float alpha = remapClamped(dot(normalAtOrigin, normalAtHorizon), 0.9, 1.0);
  vec3 normal = mix(normalAtOrigin, normalAtHorizon, alpha);

  // Analytical optical depth where density exponentially decreases with height.
  // Based on: https://iquilezles.org/articles/fog/
  float angle = max(dot(normal, rayDirection), 1e-5);
  float exponent = angle * hazeExponent;
  float linearTerm = density / hazeExponent / angle;

  // Derive the optical depths separately for with and without shadow length.
  float expTerm = 1.0 - exp(-maxRayDistance * exponent);
  float shadowExpTerm = 1.0 - exp(-min(maxRayDistance, shadowLength) * exponent);
  float opticalDepth = expTerm * linearTerm;
  float shadowOpticalDepth = max((expTerm - shadowExpTerm) * linearTerm, 0.0);
  float transmittance = saturate(1.0 - exp(-opticalDepth));
  float shadowTransmittance = saturate(1.0 - exp(-shadowOpticalDepth));

  vec3 skyIrradiance = vGroundIrradiance.sky;
  vec3 sunIrradiance = vGroundIrradiance.sun;
  vec3 inscatter = sunIrradiance * phaseFunction(cosTheta) * shadowTransmittance;
  inscatter += skyIrradiance * RECIPROCAL_PI4 * skyLightScale * transmittance;
  inscatter *= hazeScatteringCoefficient / (hazeAbsorptionCoefficient + hazeScatteringCoefficient);
  return vec4(inscatter, transmittance);
}

#endif // HAZE

void applyAerialPerspective(
  const vec3 cameraPosition,
  const vec3 frontPosition,
  const float shadowLength,
  inout vec4 color
) {
  vec3 transmittance;
  vec3 inscatter = GetSkyRadianceToPoint(
    cameraPosition * METER_TO_LENGTH_UNIT,
    frontPosition * METER_TO_LENGTH_UNIT,
    shadowLength * METER_TO_LENGTH_UNIT,
    sunDirection,
    transmittance
  );
  color.rgb = color.rgb * transmittance + inscatter * color.a;
}

bool rayIntersectsGround(const vec3 cameraPosition, const vec3 rayDirection) {
  float r = length(cameraPosition);
  float mu = dot(cameraPosition, rayDirection) / r;
  return mu < 0.0 && r * r * (mu * mu - 1.0) + bottomRadius * bottomRadius >= 0.0;
}

struct IntersectionResult {
  bool ground;
  vec4 first;
  vec4 second;
};

IntersectionResult getIntersections(const vec3 cameraPosition, const vec3 rayDirection) {
  IntersectionResult intersections;
  intersections.ground = rayIntersectsGround(cameraPosition, rayDirection);
  raySphereIntersections(
    cameraPosition,
    rayDirection,
    bottomRadius + vec4(0.0, minHeight, maxHeight, shadowTopHeight),
    intersections.first,
    intersections.second
  );
  return intersections;
}

vec2 getRayNearFar(const IntersectionResult intersections) {
  vec2 nearFar;
  if (cameraHeight < minHeight) {
    // View below the clouds
    if (intersections.ground) {
      nearFar = vec2(-1.0); // No clouds to the ground
    } else {
      nearFar = vec2(intersections.second.y, intersections.second.z);
      nearFar.y = min(nearFar.y, maxRayDistance);
    }
  } else if (cameraHeight < maxHeight) {
    // View inside the total cloud layer
    if (intersections.ground) {
      nearFar = vec2(cameraNear, intersections.first.y);
    } else {
      nearFar = vec2(cameraNear, intersections.second.z);
    }
  } else {
    // View above the clouds
    nearFar = vec2(intersections.first.z, intersections.second.z);
    if (intersections.ground) {
      // Clamp the ray at the min height.
      nearFar.y = intersections.first.y;
    }
  }
  return nearFar;
}

#ifdef SHADOW_LENGTH
vec2 getShadowRayNearFar(const IntersectionResult intersections) {
  vec2 nearFar;
  if (cameraHeight < shadowTopHeight) {
    if (intersections.ground) {
      nearFar = vec2(cameraNear, intersections.first.x);
    } else {
      nearFar = vec2(cameraNear, intersections.second.w);
    }
  } else {
    nearFar = vec2(intersections.first.w, intersections.second.w);
    if (intersections.ground) {
      // Clamp the ray at the ground.
      nearFar.y = intersections.first.x;
    }
  }
  nearFar.y = min(nearFar.y, maxShadowLengthRayDistance);
  return nearFar;
}
#endif // SHADOW_LENGTH

#ifdef HAZE
vec2 getHazeRayNearFar(const IntersectionResult intersections) {
  vec2 nearFar;
  if (cameraHeight < maxHeight) {
    if (intersections.ground) {
      nearFar = vec2(cameraNear, intersections.first.x);
    } else {
      nearFar = vec2(cameraNear, intersections.second.z);
    }
  } else {
    nearFar = vec2(cameraNear, intersections.second.z);
    if (intersections.ground) {
      // Clamp the ray at the ground.
      nearFar.y = intersections.first.x;
    }
  }
  return nearFar;
}
#endif // HAZE

float getRayDistanceToScene(const vec3 rayDirection, out float viewZ) {
  float depth = readDepthValue(depthBuffer, vUv * targetUvScale + temporalJitter);
  if (depth < 1.0 - 1e-7) {
    depth = reverseLogDepth(depth, cameraNear, cameraFar);
    viewZ = getViewZ(depth);
    return -viewZ / dot(rayDirection, vCameraDirection);
  }
  viewZ = 0.0;
  return 0.0;
}

void main() {
  #ifdef DEBUG_SHOW_SHADOW_MAP
  outputColor = getCascadedShadowMaps(vUv);
  outputDepthVelocity = vec3(0.0);
  #ifdef SHADOW_LENGTH
  outputShadowLength = 0.0;
  #endif // SHADOW_LENGTH
  return;
  #endif // DEBUG_SHOW_SHADOW_MAP

  vec3 cameraPosition = vCameraPosition + altitudeCorrection;
  vec3 rayDirection = normalize(vRayDirection);
  float cosTheta = dot(sunDirection, rayDirection);

  IntersectionResult intersections = getIntersections(cameraPosition, rayDirection);
  vec2 rayNearFar = getRayNearFar(intersections);
  #ifdef SHADOW_LENGTH
  vec2 shadowRayNearFar = getShadowRayNearFar(intersections);
  #endif // SHADOW_LENGTH
  #ifdef HAZE
  vec2 hazeRayNearFar = getHazeRayNearFar(intersections);
  #endif // HAZE

  float sceneViewZ;
  float rayDistanceToScene = getRayDistanceToScene(rayDirection, sceneViewZ);
  if (rayDistanceToScene > 0.0) {
    rayNearFar.y = min(rayNearFar.y, rayDistanceToScene);
    #ifdef SHADOW_LENGTH
    shadowRayNearFar.y = min(shadowRayNearFar.y, rayDistanceToScene);
    #endif // SHADOW_LENGTH
    #ifdef HAZE
    hazeRayNearFar.y = min(hazeRayNearFar.y, rayDistanceToScene);
    #endif // HAZE
  }

  bool intersectsGround = any(lessThan(rayNearFar, vec2(0.0)));
  bool intersectsScene = rayNearFar.y < rayNearFar.x;

  float stbn = getSTBN();

  vec4 color = vec4(0.0);
  float frontDepth = rayNearFar.y;
  vec3 depthVelocity = vec3(0.0);
  float shadowLength = 0.0;
  bool hitClouds = false;

  if (!intersectsGround && !intersectsScene) {
    vec3 rayOrigin = rayNearFar.x * rayDirection + cameraPosition;

    vec2 globeUv = getGlobeUv(rayOrigin);
    #ifdef DEBUG_SHOW_UV
    outputColor = vec4(vec3(checker(globeUv, localWeatherRepeat + localWeatherOffset)), 1.0);
    outputDepthVelocity = vec3(0.0);
    #ifdef SHADOW_LENGTH
    outputShadowLength = 0.0;
    #endif // SHADOW_LENGTH
    return;
    #endif // DEBUG_SHOW_UV

    float mipLevel = getMipLevel(globeUv * localWeatherRepeat) * mipLevelScale;
    mipLevel = mix(0.0, mipLevel, min(1.0, 0.2 * cameraHeight / maxHeight));

    float marchedFrontDepth;
    ivec3 sampleCount = ivec3(0);
    color = marchClouds(
      rayOrigin,
      rayDirection,
      rayNearFar,
      cosTheta,
      stbn,
      pow(2.0, mipLevel),
      marchedFrontDepth,
      sampleCount
    );

    #ifdef DEBUG_SHOW_SAMPLE_COUNT
    outputColor = vec4(vec3(sampleCount) / vec3(500.0, 5.0, 5.0), 1.0);
    outputDepthVelocity = vec3(0.0);
    #ifdef SHADOW_LENGTH
    outputShadowLength = 0.0;
    #endif // SHADOW_LENGTH
    return;
    #endif // DEBUG_SHOW_SAMPLE_COUNT

    // Front depth will be -1.0 when no samples are accumulated.
    hitClouds = marchedFrontDepth >= 0.0;
    if (hitClouds) {
      frontDepth = rayNearFar.x + marchedFrontDepth;

      #ifdef SHADOW_LENGTH
      // Clamp the shadow length ray at the clouds.
      shadowRayNearFar.y = mix(
        shadowRayNearFar.y,
        min(frontDepth, shadowRayNearFar.y),
        color.a // Interpolate by the alpha for smoother edges.
      );

      // Shadow length must be computed before applying aerial perspective.
      if (all(greaterThanEqual(shadowRayNearFar, vec2(0.0)))) {
        shadowLength = marchShadowLength(
          shadowRayNearFar.x * rayDirection + cameraPosition,
          rayDirection,
          shadowRayNearFar,
          stbn
        );
      }
      #endif // SHADOW_LENGTH

      #ifdef HAZE
      // Clamp the haze ray at the clouds.
      hazeRayNearFar.y = mix(
        hazeRayNearFar.y,
        min(frontDepth, hazeRayNearFar.y),
        color.a // Interpolate by the alpha for smoother edges.
      );
      #endif // HAZE

      // Apply aerial perspective.
      vec3 frontPosition = cameraPosition + frontDepth * rayDirection;
      applyAerialPerspective(cameraPosition, frontPosition, shadowLength, color);

      // Velocity for temporal resolution.
      vec3 frontPositionWorld = ecefToWorld(frontPosition);
      vec4 prevClip = reprojectionMatrix * vec4(frontPositionWorld, 1.0);
      prevClip /= prevClip.w;
      vec2 prevUv = prevClip.xy * 0.5 + 0.5;
      vec2 velocity = vUv - prevUv;
      depthVelocity = vec3(frontDepth, velocity);
    }
  }

  if (!hitClouds) {
    #ifdef SHADOW_LENGTH
    if (all(greaterThanEqual(shadowRayNearFar, vec2(0.0)))) {
      shadowLength = marchShadowLength(
        shadowRayNearFar.x * rayDirection + cameraPosition,
        rayDirection,
        shadowRayNearFar,
        stbn
      );
    }
    #endif // SHADOW_LENGTH

    // Velocity for temporal resolution. Here reproject in the view space for
    // greatly reducing the precision errors.
    frontDepth = sceneViewZ < 0.0 ? -sceneViewZ : cameraFar;
    vec3 frontView = vViewPosition * frontDepth;
    vec4 prevClip = viewReprojectionMatrix * vec4(frontView, 1.0);
    prevClip /= prevClip.w;
    vec2 prevUv = prevClip.xy * 0.5 + 0.5;
    vec2 velocity = vUv - prevUv;
    depthVelocity = vec3(frontDepth, velocity);
  }

  #ifdef DEBUG_SHOW_FRONT_DEPTH
  outputColor = vec4(turbo(frontDepth / maxRayDistance), 1.0);
  outputDepthVelocity = vec3(0.0);
  #ifdef SHADOW_LENGTH
  outputShadowLength = 0.0;
  #endif // SHADOW_LENGTH
  return;
  #endif // DEBUG_SHOW_FRONT_DEPTH

  #ifdef HAZE
  vec4 haze = approximateHaze(
    cameraNear * rayDirection + cameraPosition,
    rayDirection,
    hazeRayNearFar.y - hazeRayNearFar.x,
    cosTheta,
    shadowLength
  );
  color.rgb = mix(color.rgb, haze.rgb, haze.a);
  color.a = color.a * (1.0 - haze.a) + haze.a;
  #endif // HAZE

  outputColor = color;
  outputDepthVelocity = depthVelocity;
  #ifdef SHADOW_LENGTH
  outputShadowLength = shadowLength * METER_TO_LENGTH_UNIT;
  #endif // SHADOW_LENGTH
}
`,Lt=`float getSTBN() {
  ivec3 size = textureSize(stbnTexture, 0);
  vec3 scale = 1.0 / vec3(size);
  return texture(stbnTexture, vec3(gl_FragCoord.xy, float(frame % size.z)) * scale).r;
}

// Straightforward spherical mapping
vec2 getSphericalUv(const vec3 position) {
  vec2 st = normalize(position.yx);
  float phi = atan(st.x, st.y);
  float theta = asin(normalize(position).z);
  return vec2(phi * RECIPROCAL_PI2 + 0.5, theta * RECIPROCAL_PI + 0.5);
}

vec2 getCubeSphereUv(const vec3 position) {
  // Cube-sphere relaxation by: http://mathproofs.blogspot.com/2005/07/mapping-cube-to-sphere.html
  // TODO: Tile and fix seams.
  // Possible improvements:
  // https://iquilezles.org/articles/texturerepetition/
  // https://gamedev.stackexchange.com/questions/184388/fragment-shader-map-dot-texture-repeatedly-over-the-sphere
  // https://github.com/mmikk/hextile-demo

  vec3 n = normalize(position);
  vec3 f = abs(n);
  vec3 c = n / max(f.x, max(f.y, f.z));
  vec2 m;
  if (all(greaterThan(f.yy, f.xz))) {
    m = c.y > 0.0 ? vec2(-n.x, n.z) : n.xz;
  } else if (all(greaterThan(f.xx, f.yz))) {
    m = c.x > 0.0 ? n.yz : vec2(-n.y, n.z);
  } else {
    m = c.z > 0.0 ? n.xy : vec2(n.x, -n.y);
  }

  vec2 m2 = m * m;
  float q = dot(m2.xy, vec2(-2.0, 2.0)) - 3.0;
  float q2 = q * q;
  vec2 uv;
  uv.x = sqrt(1.5 + m2.x - m2.y - 0.5 * sqrt(-24.0 * m2.x + q2)) * (m.x > 0.0 ? 1.0 : -1.0);
  uv.y = sqrt(6.0 / (3.0 - uv.x * uv.x)) * m.y;
  return uv * 0.5 + 0.5;
}

vec2 getGlobeUv(const vec3 position) {
  return getCubeSphereUv(position);
}

float getMipLevel(const vec2 uv) {
  const float mipLevelScale = 0.1;
  vec2 coord = uv * resolution;
  vec2 ddx = dFdx(coord);
  vec2 ddy = dFdy(coord);
  float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy)) * mipLevelScale;
  return max(0.0, 0.5 * log2(max(1.0, deltaMaxSqr)));
}

bool insideLayerIntervals(const float height) {
  bvec3 gt = greaterThan(vec3(height), minIntervalHeights);
  bvec3 lt = lessThan(vec3(height), maxIntervalHeights);
  return any(bvec3(gt.x && lt.x, gt.y && lt.y, gt.z && lt.z));
}

struct WeatherSample {
  vec4 heightFraction; // Normalized height of each layer
  vec4 density;
};

vec4 shapeAlteringFunction(const vec4 heightFraction, const vec4 bias) {
  // Apply a semi-circle transform to round the clouds towards the top.
  vec4 biased = pow(heightFraction, bias);
  vec4 x = clamp(biased * 2.0 - 1.0, -1.0, 1.0);
  return 1.0 - x * x;
}

WeatherSample sampleWeather(const vec2 uv, const float height, const float mipLevel) {
  WeatherSample weather;
  weather.heightFraction = remapClamped(vec4(height), minLayerHeights, maxLayerHeights);

  vec4 localWeather = pow(
    textureLod(
      localWeatherTexture,
      uv * localWeatherRepeat + localWeatherOffset,
      mipLevel
    ).LOCAL_WEATHER_CHANNELS,
    weatherExponents
  );
  #ifdef SHADOW
  localWeather *= shadowLayerMask;
  #endif // SHADOW

  vec4 heightScale = shapeAlteringFunction(weather.heightFraction, shapeAlteringBiases);

  // Modulation to control weather by coverage parameter.
  // Reference: https://github.com/Prograda/Skybolt/blob/master/Assets/Core/Shaders/Clouds.h#L63
  vec4 factor = 1.0 - coverage * heightScale;
  weather.density = remapClamped(
    mix(localWeather, vec4(1.0), coverageFilterWidths),
    factor,
    factor + coverageFilterWidths
  );

  return weather;
}

vec4 getLayerDensity(const vec4 heightFraction) {
  // prettier-ignore
  return densityProfile.expTerms * exp(densityProfile.exponents * heightFraction) +
    densityProfile.linearTerms * heightFraction +
    densityProfile.constantTerms;
}

struct MediaSample {
  float density;
  vec4 weight;
  float scattering;
  float extinction;
};

MediaSample sampleMedia(
  const WeatherSample weather,
  const vec3 position,
  const vec2 uv,
  const float mipLevel,
  const float jitter,
  out ivec3 sampleCount
) {
  vec4 density = weather.density;

  // TODO: Define in physical length.
  vec3 surfaceNormal = normalize(position);
  float localWeatherSpeed = length(localWeatherOffset);
  vec3 evolution = -surfaceNormal * localWeatherSpeed * 2e4;

  vec3 turbulence = vec3(0.0);
  #ifdef TURBULENCE
  vec2 turbulenceUv = uv * localWeatherRepeat * turbulenceRepeat;
  turbulence =
    turbulenceDisplacement *
    (texture(turbulenceTexture, turbulenceUv).rgb * 2.0 - 1.0) *
    dot(density, remapClamped(weather.heightFraction, vec4(0.3), vec4(0.0)));
  #endif // TURBULENCE

  vec3 shapePosition = (position + evolution + turbulence) * shapeRepeat + shapeOffset;
  float shape = texture(shapeTexture, shapePosition).r;
  density = remapClamped(density, vec4(1.0 - shape) * shapeAmounts, vec4(1.0));

  #ifdef DEBUG_SHOW_SAMPLE_COUNT
  ++sampleCount.y;
  #endif // DEBUG_SHOW_SAMPLE_COUNT

  #ifdef SHAPE_DETAIL
  if (mipLevel * 0.5 + (jitter - 0.5) * 0.5 < 0.5) {
    vec3 detailPosition = (position + turbulence) * shapeDetailRepeat + shapeDetailOffset;
    float detail = texture(shapeDetailTexture, detailPosition).r;
    // Fluffy at the top and whippy at the bottom.
    vec4 modifier = mix(
      vec4(pow(detail, 6.0)),
      vec4(1.0 - detail),
      remapClamped(weather.heightFraction, vec4(0.2), vec4(0.4))
    );
    modifier = mix(vec4(0.0), modifier, shapeDetailAmounts);
    density = remapClamped(density * 2.0, vec4(modifier * 0.5), vec4(1.0));

    #ifdef DEBUG_SHOW_SAMPLE_COUNT
    ++sampleCount.z;
    #endif // DEBUG_SHOW_SAMPLE_COUNT
  }
  #endif // SHAPE_DETAIL

  // Apply the density profiles.
  density = saturate(density * densityScales * getLayerDensity(weather.heightFraction));

  MediaSample media;
  float densitySum = density.x + density.y + density.z + density.w;
  media.weight = density / densitySum;
  media.scattering = densitySum * scatteringCoefficient;
  media.extinction = densitySum * absorptionCoefficient + media.scattering;
  return media;
}

MediaSample sampleMedia(
  const WeatherSample weather,
  const vec3 position,
  const vec2 uv,
  const float mipLevel,
  const float jitter
) {
  ivec3 sampleCount;
  return sampleMedia(weather, position, uv, mipLevel, jitter, sampleCount);
}
`,Ba=`precision highp float;
precision highp sampler3D;

#include "atmosphere/bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "atmosphere/bruneton/common"
#include "atmosphere/bruneton/runtime"

#include "types"

uniform mat4 inverseProjectionMatrix;
uniform mat4 inverseViewMatrix;
uniform vec3 cameraPosition;
uniform mat4 worldToECEFMatrix;
uniform vec3 altitudeCorrection;

// Atmosphere
uniform float bottomRadius;
uniform vec3 sunDirection;

// Cloud layers
uniform float minHeight;
uniform float maxHeight;

layout(location = 0) in vec3 position;

out vec2 vUv;
out vec3 vCameraPosition;
out vec3 vCameraDirection; // Direction to the center of screen
out vec3 vRayDirection; // Direction to the texel
out vec3 vViewPosition;

out GroundIrradiance vGroundIrradiance;
out CloudsIrradiance vCloudsIrradiance;

void sampleSunSkyIrradiance(const vec3 positionECEF) {
  vGroundIrradiance.sun = GetSunAndSkyScalarIrradiance(
    positionECEF * METER_TO_LENGTH_UNIT,
    sunDirection,
    vGroundIrradiance.sky
  );

  vec3 surfaceNormal = normalize(positionECEF);
  vec2 radii = (bottomRadius + vec2(minHeight, maxHeight)) * METER_TO_LENGTH_UNIT;
  vCloudsIrradiance.minSun = GetSunAndSkyScalarIrradiance(
    surfaceNormal * radii.x,
    sunDirection,
    vCloudsIrradiance.minSky
  );
  vCloudsIrradiance.maxSun = GetSunAndSkyScalarIrradiance(
    surfaceNormal * radii.y,
    sunDirection,
    vCloudsIrradiance.maxSky
  );
}

void main() {
  vUv = position.xy * 0.5 + 0.5;

  vec3 viewPosition = (inverseProjectionMatrix * vec4(position, 1.0)).xyz;
  vec3 worldDirection = (inverseViewMatrix * vec4(viewPosition.xyz, 0.0)).xyz;
  vec3 cameraDirection = normalize((inverseViewMatrix * vec4(0.0, 0.0, -1.0, 0.0)).xyz);
  vCameraPosition = (worldToECEFMatrix * vec4(cameraPosition, 1.0)).xyz;
  vCameraDirection = (worldToECEFMatrix * vec4(cameraDirection, 0.0)).xyz;
  vRayDirection = (worldToECEFMatrix * vec4(worldDirection, 0.0)).xyz;
  vViewPosition = viewPosition;

  sampleSunSkyIrradiance(vCameraPosition + altitudeCorrection);

  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`,_t=`uniform vec2 resolution;
uniform int frame;
uniform sampler3D stbnTexture;

// Atmosphere
uniform float bottomRadius;
uniform mat4 worldToECEFMatrix;
uniform mat4 ecefToWorldMatrix;
uniform vec3 altitudeCorrection;
uniform vec3 sunDirection;

// Participating medium
uniform float scatteringCoefficient;
uniform float absorptionCoefficient;

// Primary raymarch
uniform float minDensity;
uniform float minExtinction;
uniform float minTransmittance;

// Shape and weather
uniform sampler2D localWeatherTexture;
uniform vec2 localWeatherRepeat;
uniform vec2 localWeatherOffset;
uniform float coverage;
uniform sampler3D shapeTexture;
uniform vec3 shapeRepeat;
uniform vec3 shapeOffset;

#ifdef SHAPE_DETAIL
uniform sampler3D shapeDetailTexture;
uniform vec3 shapeDetailRepeat;
uniform vec3 shapeDetailOffset;
#endif // SHAPE_DETAIL

#ifdef TURBULENCE
uniform sampler2D turbulenceTexture;
uniform vec2 turbulenceRepeat;
uniform float turbulenceDisplacement;
#endif // TURBULENCE

// Haze
#ifdef HAZE
uniform float hazeDensityScale;
uniform float hazeExponent;
uniform float hazeScatteringCoefficient;
uniform float hazeAbsorptionCoefficient;
#endif // HAZE

// Cloud layers
uniform vec4 minLayerHeights;
uniform vec4 maxLayerHeights;
uniform vec3 minIntervalHeights;
uniform vec3 maxIntervalHeights;
uniform vec4 densityScales;
uniform vec4 shapeAmounts;
uniform vec4 shapeDetailAmounts;
uniform vec4 weatherExponents;
uniform vec4 shapeAlteringBiases;
uniform vec4 coverageFilterWidths;
uniform float minHeight;
uniform float maxHeight;
uniform float shadowTopHeight;
uniform float shadowBottomHeight;
uniform vec4 shadowLayerMask;
uniform CloudDensityProfile densityProfile;
`,je=`struct GroundIrradiance {
  vec3 sun;
  vec3 sky;
};

struct CloudsIrradiance {
  vec3 minSun;
  vec3 minSky;
  vec3 maxSun;
  vec3 maxSky;
};

struct CloudDensityProfile {
  vec4 expTerms;
  vec4 exponents;
  vec4 linearTerms;
  vec4 constantTerms;
};
`;var Va=Object.defineProperty,P=(i,e,t,a)=>{for(var o=void 0,r=i.length-1,s;r>=0;r--)(s=i[r])&&(o=s(e,t,o)||o);return o&&Va(e,t,o),o};const ja=new y,qa=new na;class O extends ea{constructor({parameterUniforms:e,layerUniforms:t,atmosphereUniforms:a},o=qe.DEFAULT){super({name:"CloudsMaterial",glslVersion:M,vertexShader:$(Ba,{atmosphere:{bruneton:{common:st,definitions:ct,runtime:nt}},types:je}),fragmentShader:Ee($(Ga,{core:{depth:ia,math:ye,turbo:Tt,generators:oa,raySphereIntersection:St,cascadedShadowMaps:ra,interleavedGradientNoise:aa,vogelDisk:ta},atmosphere:{bruneton:{common:st,definitions:ct,runtime:nt}},types:je,parameters:_t,clouds:Lt})),uniforms:{...e,...t,...a,depthBuffer:new n(null),viewMatrix:new n(new C),inverseProjectionMatrix:new n(new C),inverseViewMatrix:new n(new C),reprojectionMatrix:new n(new C),viewReprojectionMatrix:new n(new C),resolution:new n(new m),cameraNear:new n(0),cameraFar:new n(0),cameraHeight:new n(0),frame:new n(0),temporalJitter:new n(new m),targetUvScale:new n(new m),mipLevelScale:new n(1),stbnTexture:new n(null),skyLightScale:new n(1),groundBounceScale:new n(1),powderScale:new n(.8),powderExponent:new n(150),maxIterationCount:new n(p.clouds.maxIterationCount),minStepSize:new n(p.clouds.minStepSize),maxStepSize:new n(p.clouds.maxStepSize),maxRayDistance:new n(p.clouds.maxRayDistance),perspectiveStepScale:new n(p.clouds.perspectiveStepScale),minDensity:new n(p.clouds.minDensity),minExtinction:new n(p.clouds.minExtinction),minTransmittance:new n(p.clouds.minTransmittance),maxIterationCountToSun:new n(p.clouds.maxIterationCountToSun),maxIterationCountToGround:new n(p.clouds.maxIterationCountToGround),minSecondaryStepSize:new n(p.clouds.minSecondaryStepSize),secondaryStepScale:new n(p.clouds.secondaryStepScale),shadowBuffer:new n(null),shadowTexelSize:new n(new m),shadowIntervals:new n(Array.from({length:4},()=>new m)),shadowMatrices:new n(Array.from({length:4},()=>new C)),shadowFar:new n(0),maxShadowFilterRadius:new n(6),shadowLayerMask:new n(new D().setScalar(1)),maxShadowLengthIterationCount:new n(p.clouds.maxShadowLengthIterationCount),minShadowLengthStepSize:new n(p.clouds.minShadowLengthStepSize),maxShadowLengthRayDistance:new n(p.clouds.maxShadowLengthRayDistance),hazeDensityScale:new n(3e-5),hazeExponent:new n(.001),hazeScatteringCoefficient:new n(.9),hazeAbsorptionCoefficient:new n(.5)}},o),this.temporalUpscale=!0,this.depthPacking=0,this.localWeatherChannels="rgba",this.shapeDetail=p.shapeDetail,this.turbulence=p.turbulence,this.shadowLength=p.lightShafts,this.haze=p.haze,this.multiScatteringOctaves=p.clouds.multiScatteringOctaves,this.accurateSunSkyLight=p.clouds.accurateSunSkyLight,this.accuratePhaseFunction=p.clouds.accuratePhaseFunction,this.shadowCascadeCount=p.shadow.cascadeCount,this.shadowSampleCount=8,this.scatterAnisotropy1=.7,this.scatterAnisotropy2=-.2,this.scatterAnisotropyMix=.5}onBeforeRender(e,t,a,o,r,s){const l=this.defines.USE_LOGARITHMIC_DEPTH_BUFFER!=null,u=e.capabilities.logarithmicDepthBuffer;u!==l&&(u?this.defines.USE_LOGARITHMIC_DEPTH_BUFFER="1":delete this.defines.USE_LOGARITHMIC_DEPTH_BUFFER);const d=this.defines.POWDER!=null,h=this.uniforms.powderScale.value>0;h!==d&&(h?this.defines.POWDER="1":delete this.defines.POWDER,this.needsUpdate=!0);const v=this.defines.GROUND_BOUNCE!=null;(this.uniforms.groundBounceScale.value>0&&this.uniforms.maxIterationCountToGround.value>0)!==v&&(h?this.defines.GROUND_BOUNCE="1":delete this.defines.GROUND_BOUNCE,this.needsUpdate=!0)}copyCameraSettings(e){e.isPerspectiveCamera===!0?this.defines.PERSPECTIVE_CAMERA!=="1"&&(this.defines.PERSPECTIVE_CAMERA="1",this.needsUpdate=!0):this.defines.PERSPECTIVE_CAMERA!=null&&(delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0);const t=this.uniforms;t.viewMatrix.value.copy(e.matrixWorldInverse),t.inverseViewMatrix.value.copy(e.matrixWorld);const a=this.previousProjectionMatrix??e.projectionMatrix,o=this.previousViewMatrix??e.matrixWorldInverse,r=t.inverseProjectionMatrix.value,s=t.inverseViewMatrix.value,l=t.reprojectionMatrix.value,u=t.viewReprojectionMatrix.value;if(this.temporalUpscale){const v=t.frame.value%16,w=t.resolution.value,f=It[v],g=(f.x-.5)/w.x*4,S=(f.y-.5)/w.y*4;t.temporalJitter.value.set(g,S),t.mipLevelScale.value=.25,r.copy(e.projectionMatrix),r.elements[8]+=g*2,r.elements[9]+=S*2,r.invert(),l.copy(a),l.elements[8]+=g*2,l.elements[9]+=S*2,l.multiply(o),u.copy(l).multiply(s)}else t.temporalJitter.value.setScalar(0),t.mipLevelScale.value=1,r.copy(e.projectionMatrixInverse),l.copy(a).multiply(o),u.copy(l).multiply(s);t.cameraNear.value=e.near,t.cameraFar.value=e.far;const d=e.getWorldPosition(t.cameraPosition.value),h=ja.copy(d).applyMatrix4(t.worldToECEFMatrix.value);try{t.cameraHeight.value=qa.setFromECEF(h).height}catch{}}copyReprojectionMatrix(e){this.previousProjectionMatrix??=new C,this.previousViewMatrix??=new C,this.previousProjectionMatrix.copy(e.projectionMatrix),this.previousViewMatrix.copy(e.matrixWorldInverse)}setSize(e,t,a,o){this.uniforms.resolution.value.set(e,t),a!=null&&o!=null?this.uniforms.targetUvScale.value.set(e/a,t/o):this.uniforms.targetUvScale.value.setScalar(1),this.previousProjectionMatrix=void 0,this.previousViewMatrix=void 0}setShadowSize(e,t){this.uniforms.shadowTexelSize.value.set(1/e,1/t)}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(e){this.uniforms.depthBuffer.value=e}}P([ue("DEPTH_PACKING")],O.prototype,"depthPacking");P([Ct("LOCAL_WEATHER_CHANNELS",{validate:i=>/^[rgba]{4}$/.test(i)})],O.prototype,"localWeatherChannels");P([U("SHAPE_DETAIL")],O.prototype,"shapeDetail");P([U("TURBULENCE")],O.prototype,"turbulence");P([U("SHADOW_LENGTH")],O.prototype,"shadowLength");P([U("HAZE")],O.prototype,"haze");P([ue("MULTI_SCATTERING_OCTAVES",{min:1,max:12})],O.prototype,"multiScatteringOctaves");P([U("ACCURATE_SUN_SKY_LIGHT")],O.prototype,"accurateSunSkyLight");P([U("ACCURATE_PHASE_FUNCTION")],O.prototype,"accuratePhaseFunction");P([ue("SHADOW_CASCADE_COUNT",{min:1,max:4})],O.prototype,"shadowCascadeCount");P([ue("SHADOW_SAMPLE_COUNT",{min:1,max:16})],O.prototype,"shadowSampleCount");P([Ke("SCATTER_ANISOTROPY_1")],O.prototype,"scatterAnisotropy1");P([Ke("SCATTER_ANISOTROPY_2")],O.prototype,"scatterAnisotropy2");P([Ke("SCATTER_ANISOTROPY_MIX")],O.prototype,"scatterAnisotropyMix");const Ka=`// Taken from https://gist.github.com/TheRealMJP/c83b8c0f46b63f3a88a5986f4fa982b1
// TODO: Use 5-taps version: https://www.shadertoy.com/view/MtVGWz
// Or even 4 taps (requires preprocessing in the input buffer):
// https://www.shadertoy.com/view/4tyGDD

/**
 * MIT License
 *
 * Copyright (c) 2019 MJP
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

vec4 textureCatmullRom(sampler2D tex, vec2 uv) {
  vec2 texSize = vec2(textureSize(tex, 0));

  // We're going to sample a a 4x4 grid of texels surrounding the target UV
  // coordinate. We'll do this by rounding down the sample location to get the
  // exact center of our "starting" texel. The starting texel will be at
  // location [1, 1] in the grid, where [0, 0] is the top left corner.
  vec2 samplePos = uv * texSize;
  vec2 texPos1 = floor(samplePos - 0.5) + 0.5;

  // Compute the fractional offset from our starting texel to our original
  // sample location, which we'll feed into the Catmull-Rom spline function to
  // get our filter weights.
  vec2 f = samplePos - texPos1;

  // Compute the Catmull-Rom weights using the fractional offset that we
  // calculated earlier. These equations are pre-expanded based on our knowledge
  // of where the texels will be located, which lets us avoid having to evaluate
  // a piece-wise function.
  vec2 w0 = f * (-0.5 + f * (1.0 - 0.5 * f));
  vec2 w1 = 1.0 + f * f * (-2.5 + 1.5 * f);
  vec2 w2 = f * (0.5 + f * (2.0 - 1.5 * f));
  vec2 w3 = f * f * (-0.5 + 0.5 * f);

  // Work out weighting factors and sampling offsets that will let us use
  // bilinear filtering to simultaneously evaluate the middle 2 samples from the
  // 4x4 grid.
  vec2 w12 = w1 + w2;
  vec2 offset12 = w2 / (w1 + w2);

  // Compute the final UV coordinates we'll use for sampling the texture
  vec2 texPos0 = texPos1 - 1.0;
  vec2 texPos3 = texPos1 + 2.0;
  vec2 texPos12 = texPos1 + offset12;

  texPos0 /= texSize;
  texPos3 /= texSize;
  texPos12 /= texSize;

  vec4 result = vec4(0.0);
  result += texture(tex, vec2(texPos0.x, texPos0.y)) * w0.x * w0.y;
  result += texture(tex, vec2(texPos12.x, texPos0.y)) * w12.x * w0.y;
  result += texture(tex, vec2(texPos3.x, texPos0.y)) * w3.x * w0.y;

  result += texture(tex, vec2(texPos0.x, texPos12.y)) * w0.x * w12.y;
  result += texture(tex, vec2(texPos12.x, texPos12.y)) * w12.x * w12.y;
  result += texture(tex, vec2(texPos3.x, texPos12.y)) * w3.x * w12.y;

  result += texture(tex, vec2(texPos0.x, texPos3.y)) * w0.x * w3.y;
  result += texture(tex, vec2(texPos12.x, texPos3.y)) * w12.x * w3.y;
  result += texture(tex, vec2(texPos3.x, texPos3.y)) * w3.x * w3.y;

  return result;
}

vec4 textureCatmullRom(sampler2DArray tex, vec3 uv) {
  vec2 texSize = vec2(textureSize(tex, 0));
  vec2 samplePos = uv.xy * texSize;
  vec2 texPos1 = floor(samplePos - 0.5) + 0.5;
  vec2 f = samplePos - texPos1;
  vec2 w0 = f * (-0.5 + f * (1.0 - 0.5 * f));
  vec2 w1 = 1.0 + f * f * (-2.5 + 1.5 * f);
  vec2 w2 = f * (0.5 + f * (2.0 - 1.5 * f));
  vec2 w3 = f * f * (-0.5 + 0.5 * f);
  vec2 w12 = w1 + w2;
  vec2 offset12 = w2 / (w1 + w2);
  vec2 texPos0 = texPos1 - 1.0;
  vec2 texPos3 = texPos1 + 2.0;
  vec2 texPos12 = texPos1 + offset12;
  texPos0 /= texSize;
  texPos3 /= texSize;
  texPos12 /= texSize;
  vec4 result = vec4(0.0);
  result += texture(tex, vec3(texPos0.x, texPos0.y, uv.z)) * w0.x * w0.y;
  result += texture(tex, vec3(texPos12.x, texPos0.y, uv.z)) * w12.x * w0.y;
  result += texture(tex, vec3(texPos3.x, texPos0.y, uv.z)) * w3.x * w0.y;
  result += texture(tex, vec3(texPos0.x, texPos12.y, uv.z)) * w0.x * w12.y;
  result += texture(tex, vec3(texPos12.x, texPos12.y, uv.z)) * w12.x * w12.y;
  result += texture(tex, vec3(texPos3.x, texPos12.y, uv.z)) * w3.x * w12.y;
  result += texture(tex, vec3(texPos0.x, texPos3.y, uv.z)) * w0.x * w3.y;
  result += texture(tex, vec3(texPos12.x, texPos3.y, uv.z)) * w12.x * w3.y;
  result += texture(tex, vec3(texPos3.x, texPos3.y, uv.z)) * w3.x * w3.y;
  return result;
}
`,Ya=`precision highp float;
precision highp sampler2DArray;

#include "core/turbo"
#include "catmullRomSampling"
#include "varianceClipping"

uniform sampler2D colorBuffer;
uniform sampler2D depthVelocityBuffer;
uniform sampler2D colorHistoryBuffer;

#ifdef SHADOW_LENGTH
uniform sampler2D shadowLengthBuffer;
uniform sampler2D shadowLengthHistoryBuffer;
#endif // SHADOW_LENGTH

uniform vec2 texelSize;
uniform int frame;
uniform float varianceGamma;
uniform float temporalAlpha;
uniform vec2 jitterOffset;

in vec2 vUv;

layout(location = 0) out vec4 outputColor;
#ifdef SHADOW_LENGTH
layout(location = 1) out float outputShadowLength;
#endif // SHADOW_LENGTH

const ivec2 neighborOffsets[9] = ivec2[9](
  ivec2(-1, -1),
  ivec2(-1, 0),
  ivec2(-1, 1),
  ivec2(0, -1),
  ivec2(0, 0),
  ivec2(0, 1),
  ivec2(1, -1),
  ivec2(1, 0),
  ivec2(1, 1)
);

const ivec4[4] bayerIndices = ivec4[4](
  ivec4(0, 12, 3, 15),
  ivec4(8, 4, 11, 7),
  ivec4(2, 14, 1, 13),
  ivec4(10, 6, 9, 5)
);

vec4 getClosestFragment(const ivec2 coord) {
  vec4 result = vec4(1e7, 0.0, 0.0, 0.0);
  vec4 neighbor;
  #pragma unroll_loop_start
  for (int i = 0; i < 9; ++i) {
    neighbor = texelFetchOffset(depthVelocityBuffer, coord, 0, neighborOffsets[i]);
    if (neighbor.r < result.r) {
      result = neighbor;
    }
  }
  #pragma unroll_loop_end
  return result;
}

void temporalUpscale(
  const ivec2 coord,
  const ivec2 lowResCoord,
  const bool currentFrame,
  out vec4 outputColor,
  out float outputShadowLength
) {
  vec4 currentColor = texelFetch(colorBuffer, lowResCoord, 0);
  #ifdef SHADOW_LENGTH
  vec4 currentShadowLength = vec4(texelFetch(shadowLengthBuffer, lowResCoord, 0).rgb, 1.0);
  #endif // SHADOW_LENGTH

  if (currentFrame) {
    // Use the texel just rendered without any accumulation.
    outputColor = currentColor;
    #ifdef SHADOW_LENGTH
    outputShadowLength = currentShadowLength.r;
    #endif // SHADOW_LENGTH
    return;
  }

  vec4 depthVelocity = getClosestFragment(lowResCoord);
  vec2 velocity = depthVelocity.gb;
  vec2 prevUv = vUv - velocity;
  if (prevUv.x < 0.0 || prevUv.x > 1.0 || prevUv.y < 0.0 || prevUv.y > 1.0) {
    outputColor = currentColor;
    #ifdef SHADOW_LENGTH
    outputShadowLength = currentShadowLength.r;
    #endif // SHADOW_LENGTH
    return; // Rejection
  }

  // Variance clipping with a large variance gamma seems to work fine for
  // upsampling. This increases ghosting, of course, but it's hard to notice on
  // clouds.
  // vec4 historyColor = textureCatmullRom(colorHistoryBuffer, prevUv);
  vec4 historyColor = texture(colorHistoryBuffer, prevUv);
  vec4 clippedColor = varianceClipping(colorBuffer, vUv, currentColor, historyColor, varianceGamma);
  outputColor = clippedColor;

  #ifdef SHADOW_LENGTH
  // Sampling the shadow length history using scene depth doesn't make much
  // sense, but it's too hard to derive it properly. At least this approach
  // resolves the edges of scene objects.
  // vec4 historyShadowLength = vec4(textureCatmullRom(shadowLengthHistoryBuffer, prevUv).rgb, 1.0);
  vec4 historyShadowLength = vec4(texture(shadowLengthHistoryBuffer, prevUv).rgb, 1.0);
  vec4 clippedShadowLength = varianceClipping(
    shadowLengthBuffer,
    vUv,
    currentShadowLength,
    historyShadowLength,
    varianceGamma
  );
  outputShadowLength = clippedShadowLength.r;
  #endif // SHADOW_LENGTH
}

void temporalAntialiasing(const ivec2 coord, out vec4 outputColor, out float outputShadowLength) {
  vec4 currentColor = texelFetch(colorBuffer, coord, 0);
  #ifdef SHADOW_LENGTH
  vec4 currentShadowLength = vec4(texelFetch(shadowLengthBuffer, coord, 0).rgb, 1.0);
  #endif // SHADOW_LENGTH

  vec4 depthVelocity = getClosestFragment(coord);
  vec2 velocity = depthVelocity.gb;

  vec2 prevUv = vUv - velocity;
  if (prevUv.x < 0.0 || prevUv.x > 1.0 || prevUv.y < 0.0 || prevUv.y > 1.0) {
    outputColor = currentColor;
    #ifdef SHADOW_LENGTH
    outputShadowLength = currentShadowLength.r;
    #endif // SHADOW_LENGTH
    return; // Rejection
  }

  vec4 historyColor = texture(colorHistoryBuffer, prevUv);
  vec4 clippedColor = varianceClipping(colorBuffer, coord, currentColor, historyColor);
  outputColor = mix(clippedColor, currentColor, temporalAlpha);

  #ifdef SHADOW_LENGTH
  vec4 historyShadowLength = vec4(texture(shadowLengthHistoryBuffer, prevUv).rgb, 1.0);
  vec4 clippedShadowLength = varianceClipping(
    shadowLengthBuffer,
    coord,
    currentShadowLength,
    historyShadowLength
  );
  outputShadowLength = mix(clippedShadowLength.r, currentShadowLength.r, temporalAlpha);
  #endif // SHADOW_LENGTH
}

void main() {
  ivec2 coord = ivec2(gl_FragCoord.xy);

  #if !defined(SHADOW_LENGTH)
  float outputShadowLength;
  #endif // !defined(SHADOW_LENGTH)

  #ifdef TEMPORAL_UPSCALE
  ivec2 lowResCoord = coord / 4;
  int bayerValue = bayerIndices[coord.x % 4][coord.y % 4];
  bool currentFrame = bayerValue == frame % 16;
  temporalUpscale(coord, lowResCoord, currentFrame, outputColor, outputShadowLength);
  #else // TEMPORAL_UPSCALE
  temporalAntialiasing(coord, outputColor, outputShadowLength);
  #endif // TEMPORAL_UPSCALE

  #if defined(SHADOW_LENGTH) && defined(DEBUG_SHOW_SHADOW_LENGTH)
  outputColor = vec4(turbo(outputShadowLength * 0.05), 1.0);
  #endif // defined(SHADOW_LENGTH) && defined(DEBUG_SHOW_SHADOW_LENGTH)

  #ifdef DEBUG_SHOW_VELOCITY
  outputColor.rgb = outputColor.rgb + vec3(abs(texture(depthVelocityBuffer, vUv).gb) * 10.0, 0.0);
  #endif // DEBUG_SHOW_VELOCITY
}
`,$a=`precision highp float;

layout(location = 0) in vec3 position;

out vec2 vUv;

void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`,Mt=`#ifdef VARIANCE_9_SAMPLES
#define VARIANCE_OFFSET_COUNT 8
const ivec2 varianceOffsets[8] = ivec2[8](
  ivec2(-1, -1),
  ivec2(-1, 1),
  ivec2(1, -1),
  ivec2(1, 1),
  ivec2(1, 0),
  ivec2(0, -1),
  ivec2(0, 1),
  ivec2(-1, 0)
);
#else // VARIANCE_9_SAMPLES
#define VARIANCE_OFFSET_COUNT 4
const ivec2 varianceOffsets[4] = ivec2[4](ivec2(1, 0), ivec2(0, -1), ivec2(0, 1), ivec2(-1, 0));
#endif // VARIANCE_9_SAMPLES

// Reference: https://github.com/playdeadgames/temporal
vec4 clipAABB(const vec4 current, const vec4 history, const vec4 minColor, const vec4 maxColor) {
  vec3 pClip = 0.5 * (maxColor.rgb + minColor.rgb);
  vec3 eClip = 0.5 * (maxColor.rgb - minColor.rgb) + 1e-7;
  vec4 vClip = history - vec4(pClip, current.a);
  vec3 vUnit = vClip.xyz / eClip;
  vec3 aUnit = abs(vUnit);
  float maUnit = max(aUnit.x, max(aUnit.y, aUnit.z));
  if (maUnit > 1.0) {
    return vec4(pClip, current.a) + vClip / maUnit;
  }
  return history;
}

#ifdef VARIANCE_SAMPLER_ARRAY
#define VARIANCE_SAMPLER sampler2DArray
#define VARIANCE_SAMPLER_COORD ivec3
#else // VARIANCE_SAMPLER_ARRAY
#define VARIANCE_SAMPLER sampler2D
#define VARIANCE_SAMPLER_COORD ivec2
#endif // VARIANCE_SAMPLER_ARRAY

// Variance clipping
// Reference: https://developer.download.nvidia.com/gameworks/events/GDC2016/msalvi_temporal_supersampling.pdf
vec4 varianceClipping(
  const VARIANCE_SAMPLER inputBuffer,
  const VARIANCE_SAMPLER_COORD coord,
  const vec4 current,
  const vec4 history,
  const float gamma
) {
  vec4 moment1 = current;
  vec4 moment2 = current * current;
  vec4 neighbor;
  #pragma unroll_loop_start
  for (int i = 0; i < 8; ++i) {
    #if UNROLLED_LOOP_INDEX < VARIANCE_OFFSET_COUNT
    neighbor = texelFetchOffset(inputBuffer, coord, 0, varianceOffsets[i]);
    moment1 += neighbor;
    moment2 += neighbor * neighbor;
    #endif // UNROLLED_LOOP_INDEX < VARIANCE_OFFSET_COUNT
  }
  #pragma unroll_loop_end

  const float N = float(VARIANCE_OFFSET_COUNT + 1);
  vec4 mean = moment1 / N;
  vec4 varianceGamma = sqrt(max(moment2 / N - mean * mean, 0.0)) * gamma;
  vec4 minColor = mean - varianceGamma;
  vec4 maxColor = mean + varianceGamma;
  return clipAABB(clamp(mean, minColor, maxColor), history, minColor, maxColor);
}

vec4 varianceClipping(
  const VARIANCE_SAMPLER inputBuffer,
  const VARIANCE_SAMPLER_COORD coord,
  const vec4 current,
  const vec4 history
) {
  return varianceClipping(inputBuffer, coord, current, history, 1.0);
}

vec4 varianceClipping(
  const sampler2D inputBuffer,
  const vec2 coord,
  const vec4 current,
  const vec4 history,
  const float gamma
) {
  vec4 moment1 = current;
  vec4 moment2 = current * current;
  vec4 neighbor;
  #pragma unroll_loop_start
  for (int i = 0; i < 8; ++i) {
    #if UNROLLED_LOOP_INDEX < VARIANCE_OFFSET_COUNT
    neighbor = textureOffset(inputBuffer, coord, varianceOffsets[i]);
    moment1 += neighbor;
    moment2 += neighbor * neighbor;
    #endif // UNROLLED_LOOP_INDEX < VARIANCE_OFFSET_COUNT
  }
  #pragma unroll_loop_end

  const float N = float(VARIANCE_OFFSET_COUNT + 1);
  vec4 mean = moment1 / N;
  vec4 varianceGamma = sqrt(max(moment2 / N - mean * mean, 0.0)) * gamma;
  vec4 minColor = mean - varianceGamma;
  vec4 maxColor = mean + varianceGamma;
  return clipAABB(clamp(mean, minColor, maxColor), history, minColor, maxColor);
}

vec4 varianceClipping(
  const sampler2D inputBuffer,
  const vec2 coord,
  const vec4 current,
  const vec4 history
) {
  return varianceClipping(inputBuffer, coord, current, history, 1.0);
}
`;var Za=Object.defineProperty,Ut=(i,e,t,a)=>{for(var o=void 0,r=i.length-1,s;r>=0;r--)(s=i[r])&&(o=s(e,t,o)||o);return o&&Za(e,t,o),o};class Xe extends H{constructor({colorBuffer:e=null,depthVelocityBuffer:t=null,shadowLengthBuffer:a=null,colorHistoryBuffer:o=null,shadowLengthHistoryBuffer:r=null}={}){super({name:"CloudsResolveMaterial",glslVersion:M,vertexShader:$a,fragmentShader:Ee($(Ya,{core:{turbo:Tt},catmullRomSampling:Ka,varianceClipping:Mt})),uniforms:{colorBuffer:new n(e),depthVelocityBuffer:new n(t),shadowLengthBuffer:new n(a),colorHistoryBuffer:new n(o),shadowLengthHistoryBuffer:new n(r),texelSize:new n(new m),frame:new n(0),jitterOffset:new n(new m),varianceGamma:new n(2),temporalAlpha:new n(.1)}}),this.temporalUpscale=!0,this.shadowLength=!0}setSize(e,t){this.uniforms.texelSize.value.set(1/e,1/t)}onBeforeRender(e,t,a,o,r,s){const l=this.uniforms.frame.value%16,u=It[l],d=(u.x-.5)*4,h=(u.y-.5)*4;this.uniforms.jitterOffset.value.set(d,h)}}Ut([U("TEMPORAL_UPSCALE")],Xe.prototype,"temporalUpscale");Ut([U("SHADOW_LENGTH")],Xe.prototype,"shadowLength");class zt extends Qt{constructor(e,t){super(e),this._mainCamera=new V;const{shadow:a}=t;this.shadow=a}get mainCamera(){return this._mainCamera}set mainCamera(e){this._mainCamera=e}}function Ne(i,{depthVelocity:e,shadowLength:t}){const a=new he(1,1,{depthBuffer:!1,type:Ae});a.texture.minFilter=_,a.texture.magFilter=_,a.texture.name=i;let o;e&&(o=a.texture.clone(),o.isRenderTargetTexture=!0,a.depthVelocity=o,a.textures.push(o));let r;return t&&(r=a.texture.clone(),r.isRenderTargetTexture=!0,r.format=$e,a.shadowLength=r,a.textures.push(r)),Object.assign(a,{depthVelocity:o??null,shadowLength:r??null})}class Xa extends zt{constructor({parameterUniforms:e,layerUniforms:t,atmosphereUniforms:a,...o},r){super("CloudsPass",o),this.atmosphere=r,this.width=0,this.height=0,this.currentMaterial=new O({parameterUniforms:e,layerUniforms:t,atmosphereUniforms:a},r),this.currentPass=new We(this.currentMaterial),this.resolveMaterial=new Xe,this.resolvePass=new We(this.resolveMaterial),this.initRenderTargets({depthVelocity:!0,shadowLength:p.lightShafts})}copyCameraSettings(e){this.currentMaterial.copyCameraSettings(e)}initialize(e,t,a){this.currentPass.initialize(e,t,a),this.resolvePass.initialize(e,t,a)}initRenderTargets(e){this.currentRenderTarget?.dispose(),this.resolveRenderTarget?.dispose(),this.historyRenderTarget?.dispose();const t=Ne("Clouds",e),a=Ne("Clouds.A",{...e,depthVelocity:!1}),o=Ne("Clouds.B",{...e,depthVelocity:!1});this.currentRenderTarget=t,this.resolveRenderTarget=a,this.historyRenderTarget=o;const r=this.resolveMaterial.uniforms;r.colorBuffer.value=t.texture,r.depthVelocityBuffer.value=t.depthVelocity,r.shadowLengthBuffer.value=t.shadowLength,r.colorHistoryBuffer.value=o.texture,r.shadowLengthHistoryBuffer.value=o.shadowLength}copyShadow(){const e=this.shadow,t=this.currentMaterial.uniforms;for(let a=0;a<e.cascadeCount;++a){const o=e.cascades[a];t.shadowIntervals.value[a].copy(o.interval),t.shadowMatrices.value[a].copy(o.matrix)}t.shadowFar.value=e.far}copyReprojection(){this.currentMaterial.copyReprojectionMatrix(this.mainCamera)}swapBuffers(){const e=this.historyRenderTarget,t=this.resolveRenderTarget;this.resolveRenderTarget=e,this.historyRenderTarget=t;const a=this.resolveMaterial.uniforms;a.colorHistoryBuffer.value=t.texture,a.shadowLengthHistoryBuffer.value=t.shadowLength}update(e,t,a){this.currentMaterial.uniforms.frame.value=t,this.resolveMaterial.uniforms.frame.value=t,this.copyCameraSettings(this.mainCamera),this.copyShadow(),this.currentPass.render(e,null,this.currentRenderTarget),this.resolvePass.render(e,null,this.resolveRenderTarget),this.copyReprojection(),this.swapBuffers()}setSize(e,t){if(this.width=e,this.height=t,this.temporalUpscale){const a=Math.ceil(e/4),o=Math.ceil(t/4);this.currentRenderTarget.setSize(a,o),this.currentMaterial.setSize(a*4,o*4,e,t)}else this.currentRenderTarget.setSize(e,t),this.currentMaterial.setSize(e,t);this.resolveRenderTarget.setSize(e,t),this.resolveMaterial.setSize(e,t),this.historyRenderTarget.setSize(e,t)}setShadowSize(e,t,a){this.currentMaterial.shadowCascadeCount=a,this.currentMaterial.setShadowSize(e,t)}setDepthTexture(e,t){this.currentMaterial.depthBuffer=e,this.currentMaterial.depthPacking=t??0}get outputBuffer(){return this.historyRenderTarget.texture}get shadowBuffer(){return this.currentMaterial.uniforms.shadowBuffer.value}set shadowBuffer(e){this.currentMaterial.uniforms.shadowBuffer.value=e}get shadowLengthBuffer(){return this.historyRenderTarget.shadowLength}get temporalUpscale(){return this.currentMaterial.temporalUpscale}set temporalUpscale(e){e!==this.temporalUpscale&&(this.currentMaterial.temporalUpscale=e,this.resolveMaterial.temporalUpscale=e,this.setSize(this.width,this.height))}get lightShafts(){return this.currentMaterial.shadowLength}set lightShafts(e){e!==this.lightShafts&&(this.currentMaterial.shadowLength=e,this.resolveMaterial.shadowLength=e,this.initRenderTargets({depthVelocity:!0,shadowLength:e}),this.setSize(this.width,this.height))}}function Ja(i,e){const t=i.properties.get(e.texture).__webglTexture,a=i.getContext();K(a instanceof WebGL2RenderingContext),i.setRenderTarget(e);const o=[];if(t!=null)for(let r=0;r<e.depth;++r)a.framebufferTextureLayer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+r,t,0,r),o.push(a.COLOR_ATTACHMENT0+r);a.drawBuffers(o)}class ft extends We{render(e,t,a,o,r){const s=this.fullscreenMaterial.uniforms;t!==null&&s?.[this.input]!=null&&(s[this.input].value=t.texture),Ja(e,a),e.render(this.scene,this.camera)}}const Qa=`precision highp float;
precision highp sampler3D;

#include <common>

#include "core/math"
#include "core/raySphereIntersection"
#include "types"
#include "parameters"
#include "structuredSampling"
#include "clouds"

uniform mat4 inverseShadowMatrices[CASCADE_COUNT];
uniform mat4 reprojectionMatrices[CASCADE_COUNT];

// Primary raymarch
uniform int maxIterationCount;
uniform float minStepSize;
uniform float maxStepSize;
uniform float opticalDepthTailScale;

in vec2 vUv;

layout(location = 0) out vec4 outputColor[CASCADE_COUNT];

// Redundant notation for prettier.
#if CASCADE_COUNT == 1
layout(location = 1) out vec3 outputDepthVelocity[CASCADE_COUNT];
#elif CASCADE_COUNT == 2
layout(location = 2) out vec3 outputDepthVelocity[CASCADE_COUNT];
#elif CASCADE_COUNT == 3
layout(location = 3) out vec3 outputDepthVelocity[CASCADE_COUNT];
#elif CASCADE_COUNT == 4
layout(location = 4) out vec3 outputDepthVelocity[CASCADE_COUNT];
#endif // CASCADE_COUNT

vec4 marchClouds(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const float maxRayDistance,
  const float jitter,
  const float mipLevel
) {
  // Setup structured volume sampling (SVS).
  // While SVS introduces spatial aliasing, it is indeed temporally stable,
  // which is important for lower-resolution shadow maps where a flickering
  // single pixel can be highly noticeable.
  vec3 normal = getStructureNormal(rayDirection, jitter);
  float rayDistance;
  float stepSize;
  intersectStructuredPlanes(
    normal,
    rayOrigin,
    rayDirection,
    clamp(maxRayDistance / float(maxIterationCount), minStepSize, maxStepSize),
    rayDistance,
    stepSize
  );

  #ifdef TEMPORAL_JITTER
  rayDistance -= stepSize * jitter;
  #endif // TEMPORAL_JITTER

  float extinctionSum = 0.0;
  float maxOpticalDepth = 0.0;
  float maxOpticalDepthTail = 0.0;
  float transmittanceIntegral = 1.0;
  float weightedDistanceSum = 0.0;
  float transmittanceSum = 0.0;

  int sampleCount = 0;
  for (int i = 0; i < maxIterationCount; ++i) {
    if (rayDistance > maxRayDistance) {
      break; // Termination
    }

    vec3 position = rayDistance * rayDirection + rayOrigin;
    float height = length(position) - bottomRadius;

    #if !defined(DEBUG_MARCH_INTERVALS)
    if (insideLayerIntervals(height)) {
      rayDistance += stepSize;
      continue;
    }
    #endif // !defined(DEBUG_MARCH_INTERVALS)

    // Sample rough weather.
    vec2 uv = getGlobeUv(position);
    WeatherSample weather = sampleWeather(uv, height, mipLevel);

    if (any(greaterThan(weather.density, vec4(minDensity)))) {
      // Sample detailed participating media.
      // Note this assumes an homogeneous medium.
      MediaSample media = sampleMedia(weather, position, uv, mipLevel, jitter);
      if (media.extinction > minExtinction) {
        extinctionSum += media.extinction;
        maxOpticalDepth += media.extinction * stepSize;
        transmittanceIntegral *= exp(-media.extinction * stepSize);
        weightedDistanceSum += rayDistance * transmittanceIntegral;
        transmittanceSum += transmittanceIntegral;
        ++sampleCount;
      }
    }

    if (transmittanceIntegral <= minTransmittance) {
      // A large amount of optical depth accumulates in the tail, beyond the
      // point of minimum transmittance. The expected optical depth seems to
      // decrease exponentially with the number of samples taken before reaching
      // the minimum transmittance.
      // See the discussion here: https://x.com/shotamatsuda/status/1886259549931520437
      maxOpticalDepthTail = min(
        opticalDepthTailScale * stepSize * exp(float(1 - sampleCount)),
        stepSize * 0.5 // Excessive optical depth only introduces aliasing.
      );
      break; // Early termination
    }
    rayDistance += stepSize;
  }

  if (sampleCount == 0) {
    return vec4(maxRayDistance, 0.0, 0.0, 0.0);
  }
  float frontDepth = min(weightedDistanceSum / transmittanceSum, maxRayDistance);
  float meanExtinction = extinctionSum / float(sampleCount);
  return vec4(frontDepth, meanExtinction, maxOpticalDepth, maxOpticalDepthTail);
}

void getRayNearFar(
  const vec3 sunPosition,
  const vec3 rayDirection,
  out float rayNear,
  out float rayFar
) {
  vec4 firstIntersections = raySphereFirstIntersection(
    sunPosition,
    rayDirection,
    vec3(0.0),
    bottomRadius + vec4(shadowTopHeight, shadowBottomHeight, 0.0, 0.0)
  );
  rayNear = max(0.0, firstIntersections.x);
  rayFar = firstIntersections.y;
  if (rayFar < 0.0) {
    rayFar = 1e6;
  }
}

void cascade(
  const int cascadeIndex,
  const float mipLevel,
  out vec4 outputColor,
  out vec3 outputDepthVelocity
) {
  vec2 clip = vUv * 2.0 - 1.0;
  vec4 point = inverseShadowMatrices[cascadeIndex] * vec4(clip.xy, -1.0, 1.0);
  point /= point.w;
  vec3 sunPosition = (worldToECEFMatrix * vec4(point.xyz, 1.0)).xyz + altitudeCorrection;

  vec3 rayDirection = normalize(-sunDirection);
  float rayNear;
  float rayFar;
  getRayNearFar(sunPosition, rayDirection, rayNear, rayFar);

  vec3 rayOrigin = rayNear * rayDirection + sunPosition;
  float stbn = getSTBN();
  vec4 color = marchClouds(rayOrigin, rayDirection, rayFar - rayNear, stbn, mipLevel);
  outputColor = color;

  // Velocity for temporal resolution.
  #ifdef TEMPORAL_PASS
  vec3 frontPosition = color.x * rayDirection + rayOrigin;
  vec3 frontPositionWorld = (ecefToWorldMatrix * vec4(frontPosition - altitudeCorrection, 1.0)).xyz;
  vec4 prevClip = reprojectionMatrices[cascadeIndex] * vec4(frontPositionWorld, 1.0);
  prevClip /= prevClip.w;
  vec2 prevUv = prevClip.xy * 0.5 + 0.5;
  vec2 velocity = (vUv - prevUv) * resolution;
  outputDepthVelocity = vec3(color.x, velocity);
  #else // TEMPORAL_PASS
  outputDepthVelocity = vec3(0.0);
  #endif // TEMPORAL_PASS
}

// TODO: Calculate from the main camera frustum perhaps?
const float mipLevels[4] = float[4](0.0, 0.5, 1.0, 2.0);

void main() {
  #pragma unroll_loop_start
  for (int i = 0; i < 4; ++i) {
    #if UNROLLED_LOOP_INDEX < CASCADE_COUNT
    cascade(UNROLLED_LOOP_INDEX, mipLevels[i], outputColor[i], outputDepthVelocity[i]);
    #endif // UNROLLED_LOOP_INDEX < CASCADE_COUNT
  }
  #pragma unroll_loop_end
}
`,er=`precision highp float;

layout(location = 0) in vec3 position;

out vec2 vUv;

void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`,tr=`// Implements Structured Volume Sampling in fragment shader:
// https://github.com/huwb/volsample
// Implementation reference:
// https://www.shadertoy.com/view/ttVfDc

void getIcosahedralVertices(const vec3 direction, out vec3 v1, out vec3 v2, out vec3 v3) {
  // Normalization scalers to fit dodecahedron to unit sphere.
  const float a = 0.85065080835204; // phi / sqrt(2 + phi)
  const float b = 0.5257311121191336; // 1 / sqrt(2 + phi)

  // Derive the vertices of icosahedron where triangle intersects the direction.
  // See: https://www.ppsloan.org/publications/AmbientDice.pdf
  const float kT = 0.6180339887498948; // 1 / phi
  const float kT2 = 0.38196601125010515; // 1 / phi^2
  vec3 absD = abs(direction);
  float selector1 = dot(absD, vec3(1.0, kT2, -kT));
  float selector2 = dot(absD, vec3(-kT, 1.0, kT2));
  float selector3 = dot(absD, vec3(kT2, -kT, 1.0));
  v1 = selector1 > 0.0 ? vec3(a, b, 0.0) : vec3(-b, 0.0, a);
  v2 = selector2 > 0.0 ? vec3(0.0, a, b) : vec3(a, -b, 0.0);
  v3 = selector3 > 0.0 ? vec3(b, 0.0, a) : vec3(0.0, a, -b);
  vec3 octantSign = sign(direction);
  v1 *= octantSign;
  v2 *= octantSign;
  v3 *= octantSign;
}

void swapIfBigger(inout vec4 a, inout vec4 b) {
  if (a.w > b.w) {
    vec4 t = a;
    a = b;
    b = t;
  }
}

void sortVertices(inout vec3 a, inout vec3 b, inout vec3 c) {
  const vec3 base = vec3(0.5, 0.5, 1.0);
  vec4 aw = vec4(a, dot(a, base));
  vec4 bw = vec4(b, dot(b, base));
  vec4 cw = vec4(c, dot(c, base));
  swapIfBigger(aw, bw);
  swapIfBigger(bw, cw);
  swapIfBigger(aw, bw);
  a = aw.xyz;
  b = bw.xyz;
  c = cw.xyz;
}

vec3 getPentagonalWeights(const vec3 direction, const vec3 v1, const vec3 v2, const vec3 v3) {
  float d1 = dot(v1, direction);
  float d2 = dot(v2, direction);
  float d3 = dot(v3, direction);
  vec3 w = exp(vec3(d1, d2, d3) * 40.0);
  return w / (w.x + w.y + w.z);
}

vec3 getStructureNormal(
  const vec3 direction,
  const float jitter,
  out vec3 a,
  out vec3 b,
  out vec3 c,
  out vec3 weights
) {
  getIcosahedralVertices(direction, a, b, c);
  sortVertices(a, b, c);
  weights = getPentagonalWeights(direction, a, b, c);
  return jitter < weights.x
    ? a
    : jitter < weights.x + weights.y
      ? b
      : c;
}

vec3 getStructureNormal(const vec3 direction, const float jitter) {
  vec3 a, b, c, weights;
  return getStructureNormal(direction, jitter, a, b, c, weights);
}

// Reference: https://github.com/huwb/volsample/blob/master/src/unity/Assets/Shaders/RayMarchCore.cginc
void intersectStructuredPlanes(
  const vec3 normal,
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const float samplePeriod,
  out float stepOffset,
  out float stepSize
) {
  float NoD = dot(rayDirection, normal);
  stepSize = samplePeriod / abs(NoD);

  // Skips leftover bit to get from rayOrigin to first strata plane.
  stepOffset = -mod(dot(rayOrigin, normal), samplePeriod) / NoD;

  // mod() gives different results depending on if the arg is negative or
  // positive. This line makes it consistent, and ensures the first sample is in
  // front of the viewer.
  if (stepOffset < 0.0) {
    stepOffset += stepSize;
  }
}
`;var ar=Object.defineProperty,de=(i,e,t,a)=>{for(var o=void 0,r=i.length-1,s;r>=0;r--)(s=i[r])&&(o=s(e,t,o)||o);return o&&ar(e,t,o),o};class oe extends H{constructor({parameterUniforms:e,layerUniforms:t,atmosphereUniforms:a}){super({name:"ShadowMaterial",glslVersion:M,vertexShader:er,fragmentShader:Ee($(Qa,{core:{math:ye,raySphereIntersection:St},types:je,parameters:_t,structuredSampling:tr,clouds:Lt})),uniforms:{...e,...t,...a,inverseShadowMatrices:new n(Array.from({length:4},()=>new C)),reprojectionMatrices:new n(Array.from({length:4},()=>new C)),resolution:new n(new m),frame:new n(0),stbnTexture:new n(null),maxIterationCount:new n(p.shadow.maxIterationCount),minStepSize:new n(p.shadow.minStepSize),maxStepSize:new n(p.shadow.maxStepSize),minDensity:new n(p.shadow.minDensity),minExtinction:new n(p.shadow.minExtinction),minTransmittance:new n(p.shadow.minTransmittance),opticalDepthTailScale:new n(2)},defines:{SHADOW:"1",TEMPORAL_PASS:"1",TEMPORAL_JITTER:"1"}}),this.localWeatherChannels="rgba",this.cascadeCount=p.shadow.cascadeCount,this.temporalPass=!0,this.temporalJitter=!0,this.shapeDetail=p.shapeDetail,this.turbulence=p.turbulence,this.cascadeCount=p.shadow.cascadeCount}setSize(e,t){this.uniforms.resolution.value.set(e,t)}}de([Ct("LOCAL_WEATHER_CHANNELS",{validate:i=>/^[rgba]{4}$/.test(i)})],oe.prototype,"localWeatherChannels");de([ue("CASCADE_COUNT",{min:1,max:4})],oe.prototype,"cascadeCount");de([U("TEMPORAL_PASS")],oe.prototype,"temporalPass");de([U("TEMPORAL_JITTER")],oe.prototype,"temporalJitter");de([U("SHAPE_DETAIL")],oe.prototype,"shapeDetail");de([U("TURBULENCE")],oe.prototype,"turbulence");const rr=`precision highp float;
precision highp sampler2DArray;

#define VARIANCE_9_SAMPLES 1
#define VARIANCE_SAMPLER_ARRAY 1

#include "varianceClipping"

uniform sampler2DArray inputBuffer;
uniform sampler2DArray historyBuffer;

uniform vec2 texelSize;
uniform float varianceGamma;
uniform float temporalAlpha;

in vec2 vUv;

layout(location = 0) out vec4 outputColor[CASCADE_COUNT];

const ivec2 neighborOffsets[9] = ivec2[9](
  ivec2(-1, -1),
  ivec2(-1, 0),
  ivec2(-1, 1),
  ivec2(0, -1),
  ivec2(0, 0),
  ivec2(0, 1),
  ivec2(1, -1),
  ivec2(1, 0),
  ivec2(1, 1)
);

vec4 getClosestFragment(const ivec3 coord) {
  vec4 result = vec4(1e7, 0.0, 0.0, 0.0);
  vec4 neighbor;
  #pragma unroll_loop_start
  for (int i = 0; i < 9; ++i) {
    neighbor = texelFetchOffset(
      inputBuffer,
      coord + ivec3(0, 0, CASCADE_COUNT),
      0,
      neighborOffsets[i]
    );
    if (neighbor.r < result.r) {
      result = neighbor;
    }
  }
  #pragma unroll_loop_end
  return result;
}

void cascade(const int cascadeIndex, out vec4 outputColor) {
  ivec3 coord = ivec3(gl_FragCoord.xy, cascadeIndex);
  vec4 current = texelFetch(inputBuffer, coord, 0);

  vec4 depthVelocity = getClosestFragment(coord);
  vec2 velocity = depthVelocity.gb * texelSize;
  vec2 prevUv = vUv - velocity;
  if (prevUv.x < 0.0 || prevUv.x > 1.0 || prevUv.y < 0.0 || prevUv.y > 1.0) {
    outputColor = current;
    return; // Rejection
  }

  vec4 history = texture(historyBuffer, vec3(prevUv, float(cascadeIndex)));
  vec4 clippedHistory = varianceClipping(inputBuffer, coord, current, history, varianceGamma);
  outputColor = mix(clippedHistory, current, temporalAlpha);
}

void main() {
  #pragma unroll_loop_start
  for (int i = 0; i < 4; ++i) {
    #if UNROLLED_LOOP_INDEX < CASCADE_COUNT
    cascade(UNROLLED_LOOP_INDEX, outputColor[i]);
    #endif // UNROLLED_LOOP_INDEX < CASCADE_COUNT
  }
  #pragma unroll_loop_end
}
`,or=`precision highp float;

layout(location = 0) in vec3 position;

out vec2 vUv;

void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`;var ir=Object.defineProperty,nr=(i,e,t,a)=>{for(var o=void 0,r=i.length-1,s;r>=0;r--)(s=i[r])&&(o=s(e,t,o)||o);return o&&ir(e,t,o),o};class Ht extends H{constructor({inputBuffer:e=null,historyBuffer:t=null}={}){super({name:"ShadowResolveMaterial",glslVersion:M,vertexShader:or,fragmentShader:Ee($(rr,{varianceClipping:Mt})),uniforms:{inputBuffer:new n(e),historyBuffer:new n(t),texelSize:new n(new m),varianceGamma:new n(1),temporalAlpha:new n(.01)},defines:{}}),this.cascadeCount=p.shadow.cascadeCount}setSize(e,t){this.uniforms.texelSize.value.set(1/e,1/t)}}nr([ue("CASCADE_COUNT",{min:1,max:4})],Ht.prototype,"cascadeCount");function Ie(i){const e=new ha(1,1,1,{depthBuffer:!1});return e.texture.type=Ae,e.texture.minFilter=_,e.texture.magFilter=_,e.texture.name=i,e}class sr extends zt{constructor({parameterUniforms:e,layerUniforms:t,atmosphereUniforms:a,...o}){super("ShadowPass",o),this.width=0,this.height=0,this.currentMaterial=new oe({parameterUniforms:e,layerUniforms:t,atmosphereUniforms:a}),this.currentPass=new ft(this.currentMaterial),this.resolveMaterial=new Ht,this.resolvePass=new ft(this.resolveMaterial),this.initRenderTargets()}initialize(e,t,a){this.currentPass.initialize(e,t,a),this.resolvePass.initialize(e,t,a)}initRenderTargets(){this.currentRenderTarget?.dispose(),this.resolveRenderTarget?.dispose(),this.historyRenderTarget?.dispose();const e=Ie("Shadow"),t=this.temporalPass?Ie("Shadow.A"):null,a=this.temporalPass?Ie("Shadow.B"):null;this.currentRenderTarget=e,this.resolveRenderTarget=t,this.historyRenderTarget=a;const o=this.resolveMaterial.uniforms;o.inputBuffer.value=e.texture,o.historyBuffer.value=a?.texture??null}copyShadow(){const e=this.shadow,t=this.currentMaterial.uniforms;for(let a=0;a<e.cascadeCount;++a){const o=e.cascades[a];t.inverseShadowMatrices.value[a].copy(o.inverseMatrix)}}copyReprojection(){const e=this.shadow,t=this.currentMaterial.uniforms;for(let a=0;a<e.cascadeCount;++a){const o=e.cascades[a];t.reprojectionMatrices.value[a].copy(o.matrix)}}swapBuffers(){K(this.historyRenderTarget!=null),K(this.resolveRenderTarget!=null);const e=this.historyRenderTarget,t=this.resolveRenderTarget;this.resolveRenderTarget=e,this.historyRenderTarget=t,this.resolveMaterial.uniforms.historyBuffer.value=t.texture}update(e,t,a){this.currentMaterial.uniforms.frame.value=t,this.copyShadow(),this.currentPass.render(e,null,this.currentRenderTarget),this.temporalPass&&(K(this.resolveRenderTarget!=null),this.resolvePass.render(e,null,this.resolveRenderTarget),this.copyReprojection(),this.swapBuffers())}setSize(e,t,a=this.shadow.cascadeCount){this.width=e,this.height=t,this.currentMaterial.cascadeCount=a,this.resolveMaterial.cascadeCount=a,this.currentMaterial.setSize(e,t),this.resolveMaterial.setSize(e,t),this.currentRenderTarget.setSize(e,t,this.temporalPass?a*2:a),this.resolveRenderTarget?.setSize(e,t,a),this.historyRenderTarget?.setSize(e,t,a)}get outputBuffer(){return this.temporalPass?(K(this.historyRenderTarget!=null),this.historyRenderTarget.texture):this.currentRenderTarget.texture}get temporalPass(){return this.currentMaterial.temporalPass}set temporalPass(e){e!==this.temporalPass&&(this.currentMaterial.temporalPass=e,this.initRenderTargets(),this.setSize(this.width,this.height))}}function cr(i){return{scatteringCoefficient:new n(1),absorptionCoefficient:new n(0),coverage:new n(.3),localWeatherTexture:new n(i.localWeatherTexture),localWeatherRepeat:new n(i.localWeatherRepeat),localWeatherOffset:new n(i.localWeatherOffset),shapeTexture:new n(i.shapeTexture),shapeRepeat:new n(i.shapeRepeat),shapeOffset:new n(i.shapeOffset),shapeDetailTexture:new n(i.shapeDetailTexture),shapeDetailRepeat:new n(i.shapeDetailRepeat),shapeDetailOffset:new n(i.shapeDetailOffset),turbulenceTexture:new n(i.turbulenceTexture),turbulenceRepeat:new n(i.turbulenceRepeat),turbulenceDisplacement:new n(350)}}function lr(){return{minLayerHeights:new n(new D),maxLayerHeights:new n(new D),minIntervalHeights:new n(new y),maxIntervalHeights:new n(new y),densityScales:new n(new D),shapeAmounts:new n(new D),shapeDetailAmounts:new n(new D),weatherExponents:new n(new D),shapeAlteringBiases:new n(new D),coverageFilterWidths:new n(new D),minHeight:new n(0),maxHeight:new n(0),shadowTopHeight:new n(0),shadowBottomHeight:new n(0),shadowLayerMask:new n(new D),densityProfile:new n({expTerms:new D,exponents:new D,linearTerms:new D,constantTerms:new D})}}const Le=[0,0,0,0];function ur(i,e){e.packValues("altitude",i.minLayerHeights.value),e.packSums("altitude","height",i.maxLayerHeights.value),e.packIntervalHeights(i.minIntervalHeights.value,i.maxIntervalHeights.value),e.packValues("densityScale",i.densityScales.value),e.packValues("shapeAmount",i.shapeAmounts.value),e.packValues("shapeDetailAmount",i.shapeDetailAmounts.value),e.packValues("weatherExponent",i.weatherExponents.value),e.packValues("shapeAlteringBias",i.shapeAlteringBiases.value),e.packValues("coverageFilterWidth",i.coverageFilterWidths.value);const t=i.densityProfile.value;e.packDensityProfiles("expTerm",t.expTerms),e.packDensityProfiles("exponent",t.exponents),e.packDensityProfiles("linearTerm",t.linearTerms),e.packDensityProfiles("constantTerm",t.constantTerms);let a=1/0,o=0,r=1/0,s=0;Le.fill(0);for(let l=0;l<e.length;++l){const{altitude:u,height:d,shadow:h}=e[l],v=u+d;d>0&&(u<a&&(a=u),h&&u<r&&(r=u),v>o&&(o=v),h&&v>s&&(s=v)),Le[l]=h?1:0}a!==1/0?(i.minHeight.value=a,i.maxHeight.value=o):(K(o===0),i.minHeight.value=0),r!==1/0?(i.shadowBottomHeight.value=r,i.shadowTopHeight.value=s):(K(s===0),i.shadowBottomHeight.value=0),i.shadowLayerMask.value.fromArray(Le)}function hr(i,e){return{bottomRadius:new n(i.bottomRadius),topRadius:new n(i.topRadius),worldToECEFMatrix:new n(e.worldToECEFMatrix),ecefToWorldMatrix:new n(e.ecefToWorldMatrix),altitudeCorrection:new n(e.altitudeCorrection),sunDirection:new n(e.sunDirection)}}const dr=`uniform sampler2D cloudsBuffer;

void mainImage(const vec4 inputColor, const vec2 uv, out vec4 outputColor) {
  #ifdef SKIP_RENDERING
  outputColor = inputColor;
  #else // SKIP_RENDERING
  vec4 clouds = texture(cloudsBuffer, uv);
  outputColor.rgb = inputColor.rgb * (1.0 - clouds.a) + clouds.rgb;
  outputColor.a = inputColor.a * (1.0 - clouds.a) + clouds.a;
  #endif // SKIP_RENDERING
}
`;var pr=Object.defineProperty,fr=(i,e,t,a)=>{for(var o=void 0,r=i.length-1,s;r>=0;r--)(s=i[r])&&(o=s(e,t,o)||o);return o&&pr(e,t,o),o};const fe=new y,mr=new m,vr=new la,gr=["maxIterationCount","minStepSize","maxStepSize","maxRayDistance","perspectiveStepScale","minDensity","minExtinction","minTransmittance","maxIterationCountToSun","maxIterationCountToGround","minSecondaryStepSize","secondaryStepScale","maxShadowFilterRadius","maxShadowLengthIterationCount","minShadowLengthStepSize","maxShadowLengthRayDistance","hazeDensityScale","hazeExponent","hazeScatteringCoefficient","hazeAbsorptionCoefficient"],yr=["multiScatteringOctaves","accurateSunSkyLight","accuratePhaseFunction"],wr=["maxIterationCount","minStepSize","maxStepSize","minDensity","minExtinction","minTransmittance","opticalDepthTailScale"],xr=["temporalJitter"],Sr=["temporalPass"],Tr=["cascadeCount","mapSize","maxFar","farScale","splitMode","splitLambda"],k={type:"change"},Cr={resolutionScale:p.resolutionScale,width:Fe.AUTO_SIZE,height:Fe.AUTO_SIZE};class Ce extends Xt{constructor(e=new V,t,a=qe.DEFAULT){super("CloudsEffect",dr,{attributes:Jt.DEPTH,uniforms:new Map([["cloudsBuffer",new n(null)]])}),this.camera=e,this.atmosphere=a,this.cloudLayers=Na.DEFAULT.clone(),this.correctAltitude=!0,this.localWeatherRepeat=new m().setScalar(100),this.localWeatherOffset=new m,this.shapeRepeat=new y().setScalar(3e-4),this.shapeOffset=new y,this.shapeDetailRepeat=new y().setScalar(.006),this.shapeDetailOffset=new y,this.turbulenceRepeat=new m().setScalar(20),this.worldToECEFMatrix=new C,this.ecefToWorldMatrix=new C,this.altitudeCorrection=new y,this.sunDirection=new y,this.localWeatherVelocity=new m,this.shapeVelocity=new y,this.shapeDetailVelocity=new y,this._atmosphereOverlay=null,this._atmosphereShadow=null,this._atmosphereShadowLength=null,this.events=new ca,this.frame=0,this.shadowCascadeCount=0,this.shadowMapSize=new m,this.onResolutionChange=()=>{this.setSize(this.resolution.baseWidth,this.resolution.baseHeight)},this.skipRendering=!0;const{resolutionScale:o,width:r,height:s,resolutionX:l=r,resolutionY:u=s}={...Cr,...t};this.shadowMaps=new Fa({cascadeCount:p.shadow.cascadeCount,mapSize:p.shadow.mapSize,splitLambda:.6}),this.parameterUniforms=cr({localWeatherTexture:this.proceduralLocalWeather?.texture??null,localWeatherRepeat:this.localWeatherRepeat,localWeatherOffset:this.localWeatherOffset,shapeTexture:this.proceduralShape?.texture??null,shapeRepeat:this.shapeRepeat,shapeOffset:this.shapeOffset,shapeDetailTexture:this.proceduralShapeDetail?.texture??null,shapeDetailRepeat:this.shapeDetailRepeat,shapeDetailOffset:this.shapeDetailOffset,turbulenceTexture:this.proceduralTurbulence?.texture??null,turbulenceRepeat:this.turbulenceRepeat}),this.layerUniforms=lr(),this.atmosphereUniforms=hr(a,{worldToECEFMatrix:this.worldToECEFMatrix,ecefToWorldMatrix:this.ecefToWorldMatrix,altitudeCorrection:this.altitudeCorrection,sunDirection:this.sunDirection});const d={shadow:this.shadowMaps,parameterUniforms:this.parameterUniforms,layerUniforms:this.layerUniforms,atmosphereUniforms:this.atmosphereUniforms};this.shadowPass=new sr(d),this.shadowPass.mainCamera=e,this.cloudsPass=new Xa(d,a),this.cloudsPass.mainCamera=e,this.clouds=et(tt({},this.cloudsPass.currentMaterial,gr),this.cloudsPass.currentMaterial,yr),this.shadow=et(tt({},this.shadowPass.currentMaterial,wr),this.shadowPass.currentMaterial,xr,this.shadowPass,Sr,this.shadowMaps,Tr),this.resolution=new Fe(this,l,u,o),this.resolution.addEventListener("change",this.onResolutionChange)}get mainCamera(){return this.camera}set mainCamera(e){this.camera=e,this.shadowPass.mainCamera=e,this.cloudsPass.mainCamera=e}initialize(e,t,a){this.shadowPass.initialize(e,t,a),this.cloudsPass.initialize(e,t,a)}updateSharedUniforms(e){ur(this.layerUniforms,this.cloudLayers);const{parameterUniforms:t}=this;t.localWeatherOffset.value.add(mr.copy(this.localWeatherVelocity).multiplyScalar(e)),t.shapeOffset.value.add(fe.copy(this.shapeVelocity).multiplyScalar(e)),t.shapeDetailOffset.value.add(fe.copy(this.shapeDetailVelocity).multiplyScalar(e));const a=this.worldToECEFMatrix;this.ecefToWorldMatrix.copy(a).invert();const o=this.camera.getWorldPosition(fe).applyMatrix4(this.worldToECEFMatrix),r=this.altitudeCorrection;this.correctAltitude?wt(o,this.atmosphere.bottomRadius,this.ellipsoid,r):r.setScalar(0);const s=this.ellipsoid.getSurfaceNormal(o,fe),l=this.sunDirection.dot(s),u=xt(1e6,1e3,l),d=vr.setFromMatrix4(a).transpose();this.shadowMaps.update(this.camera,fe.copy(this.sunDirection).applyMatrix3(d),u)}updateWeatherTextureChannels(){const e=this.cloudLayers.localWeatherChannels;this.cloudsPass.currentMaterial.localWeatherChannels=e,this.shadowPass.currentMaterial.localWeatherChannels=e}updateAtmosphereComposition(){const{shadowMaps:e,shadowPass:t,cloudsPass:a}=this,o=t.currentMaterial.uniforms,r=a.currentMaterial.uniforms,s=this._atmosphereOverlay,l=Object.assign(this._atmosphereOverlay??{},{map:a.outputBuffer});s!==l&&(this._atmosphereOverlay=l,k.target=this,k.property="atmosphereOverlay",this.events.dispatchEvent(k));const u=this._atmosphereShadow,d=Object.assign(this._atmosphereShadow??{},{map:t.outputBuffer,mapSize:e.mapSize,cascadeCount:e.cascadeCount,intervals:r.shadowIntervals.value,matrices:r.shadowMatrices.value,inverseMatrices:o.inverseShadowMatrices.value,far:e.far,topHeight:r.shadowTopHeight.value});u!==d&&(this._atmosphereShadow=d,k.target=this,k.property="atmosphereShadow",this.events.dispatchEvent(k));const h=this._atmosphereShadowLength,v=a.shadowLengthBuffer!=null?Object.assign(this._atmosphereShadowLength??{},{map:a.shadowLengthBuffer}):null;h!==v&&(this._atmosphereShadowLength=v,k.target=this,k.property="atmosphereShadowLength",this.events.dispatchEvent(k))}update(e,t,a=0){const{shadowMaps:o,shadowPass:r,cloudsPass:s}=this;if(o.cascadeCount!==this.shadowCascadeCount||!o.mapSize.equals(this.shadowMapSize)){const{width:l,height:u}=o.mapSize,d=o.cascadeCount;this.shadowMapSize.set(l,u),this.shadowCascadeCount=d,r.setSize(l,u,d),s.setShadowSize(l,u,d)}this.proceduralLocalWeather?.render(e,a),this.proceduralShape?.render(e,a),this.proceduralShapeDetail?.render(e,a),this.proceduralTurbulence?.render(e,a),++this.frame,this.updateSharedUniforms(a),this.updateWeatherTextureChannels(),r.update(e,this.frame,a),s.shadowBuffer=r.outputBuffer,s.update(e,this.frame,a),this.updateAtmosphereComposition(),this.uniforms.get("cloudsBuffer").value=this.cloudsPass.outputBuffer}setSize(e,t){const{resolution:a}=this;a.setBaseSize(e,t);const{width:o,height:r}=a;this.cloudsPass.setSize(o,r)}setDepthTexture(e,t){this.shadowPass.setDepthTexture(e,t),this.cloudsPass.setDepthTexture(e,t)}set qualityPreset(e){const{clouds:t,shadow:a,...o}=ka[e];Object.assign(this,o),Object.assign(this.clouds,t),Object.assign(this.shadow,a)}get localWeatherTexture(){return this.proceduralLocalWeather??this.parameterUniforms.localWeatherTexture.value}set localWeatherTexture(e){e instanceof at||e==null?(this.proceduralLocalWeather=void 0,this.parameterUniforms.localWeatherTexture.value=e):(this.proceduralLocalWeather=e,this.parameterUniforms.localWeatherTexture.value=e.texture)}get shapeTexture(){return this.proceduralShape??this.parameterUniforms.shapeTexture.value}set shapeTexture(e){e instanceof rt||e==null?(this.proceduralShape=void 0,this.parameterUniforms.shapeTexture.value=e):(this.proceduralShape=e,this.parameterUniforms.shapeTexture.value=e.texture)}get shapeDetailTexture(){return this.proceduralShapeDetail??this.parameterUniforms.shapeDetailTexture.value}set shapeDetailTexture(e){e instanceof rt||e==null?(this.proceduralShapeDetail=void 0,this.parameterUniforms.shapeDetailTexture.value=e):(this.proceduralShapeDetail=e,this.parameterUniforms.shapeDetailTexture.value=e.texture)}get turbulenceTexture(){return this.proceduralTurbulence??this.parameterUniforms.turbulenceTexture.value}set turbulenceTexture(e){e instanceof at||e==null?(this.proceduralTurbulence=void 0,this.parameterUniforms.turbulenceTexture.value=e):(this.proceduralTurbulence=e,this.parameterUniforms.turbulenceTexture.value=e.texture)}get stbnTexture(){return this.cloudsPass.currentMaterial.uniforms.stbnTexture.value}set stbnTexture(e){this.cloudsPass.currentMaterial.uniforms.stbnTexture.value=e,this.shadowPass.currentMaterial.uniforms.stbnTexture.value=e}get resolutionScale(){return this.resolution.scale}set resolutionScale(e){this.resolution.scale=e}get temporalUpscale(){return this.cloudsPass.temporalUpscale}set temporalUpscale(e){this.cloudsPass.temporalUpscale=e}get lightShafts(){return this.cloudsPass.lightShafts}set lightShafts(e){this.cloudsPass.lightShafts=e}get shapeDetail(){return this.cloudsPass.currentMaterial.shapeDetail}set shapeDetail(e){this.cloudsPass.currentMaterial.shapeDetail=e,this.shadowPass.currentMaterial.shapeDetail=e}get turbulence(){return this.cloudsPass.currentMaterial.turbulence}set turbulence(e){this.cloudsPass.currentMaterial.turbulence=e,this.shadowPass.currentMaterial.turbulence=e}get haze(){return this.cloudsPass.currentMaterial.haze}set haze(e){this.cloudsPass.currentMaterial.haze=e}get scatteringCoefficient(){return this.parameterUniforms.scatteringCoefficient.value}set scatteringCoefficient(e){this.parameterUniforms.scatteringCoefficient.value=e}get absorptionCoefficient(){return this.parameterUniforms.absorptionCoefficient.value}set absorptionCoefficient(e){this.parameterUniforms.absorptionCoefficient.value=e}get coverage(){return this.parameterUniforms.coverage.value}set coverage(e){this.parameterUniforms.coverage.value=e}get turbulenceDisplacement(){return this.parameterUniforms.turbulenceDisplacement.value}set turbulenceDisplacement(e){this.parameterUniforms.turbulenceDisplacement.value=e}get scatterAnisotropy1(){return this.cloudsPass.currentMaterial.scatterAnisotropy1}set scatterAnisotropy1(e){this.cloudsPass.currentMaterial.scatterAnisotropy1=e}get scatterAnisotropy2(){return this.cloudsPass.currentMaterial.scatterAnisotropy2}set scatterAnisotropy2(e){this.cloudsPass.currentMaterial.scatterAnisotropy2=e}get scatterAnisotropyMix(){return this.cloudsPass.currentMaterial.scatterAnisotropyMix}set scatterAnisotropyMix(e){this.cloudsPass.currentMaterial.scatterAnisotropyMix=e}get skyLightScale(){return this.cloudsPass.currentMaterial.uniforms.skyLightScale.value}set skyLightScale(e){this.cloudsPass.currentMaterial.uniforms.skyLightScale.value=e}get groundBounceScale(){return this.cloudsPass.currentMaterial.uniforms.groundBounceScale.value}set groundBounceScale(e){this.cloudsPass.currentMaterial.uniforms.groundBounceScale.value=e}get powderScale(){return this.cloudsPass.currentMaterial.uniforms.powderScale.value}set powderScale(e){this.cloudsPass.currentMaterial.uniforms.powderScale.value=e}get powderExponent(){return this.cloudsPass.currentMaterial.uniforms.powderExponent.value}set powderExponent(e){this.cloudsPass.currentMaterial.uniforms.powderExponent.value=e}get atmosphereOverlay(){return this._atmosphereOverlay}get atmosphereShadow(){return this._atmosphereShadow}get atmosphereShadowLength(){return this._atmosphereShadowLength}get irradianceTexture(){return this.cloudsPass.currentMaterial.irradianceTexture}set irradianceTexture(e){this.cloudsPass.currentMaterial.irradianceTexture=e}get scatteringTexture(){return this.cloudsPass.currentMaterial.scatteringTexture}set scatteringTexture(e){this.cloudsPass.currentMaterial.scatteringTexture=e}get transmittanceTexture(){return this.cloudsPass.currentMaterial.transmittanceTexture}set transmittanceTexture(e){this.cloudsPass.currentMaterial.transmittanceTexture=e}get singleMieScatteringTexture(){return this.cloudsPass.currentMaterial.singleMieScatteringTexture}set singleMieScatteringTexture(e){this.cloudsPass.currentMaterial.singleMieScatteringTexture=e}get higherOrderScatteringTexture(){return this.cloudsPass.currentMaterial.higherOrderScatteringTexture}set higherOrderScatteringTexture(e){this.cloudsPass.currentMaterial.higherOrderScatteringTexture=e}get ellipsoid(){return this.cloudsPass.currentMaterial.ellipsoid}set ellipsoid(e){this.cloudsPass.currentMaterial.ellipsoid=e}get sunAngularRadius(){return this.cloudsPass.currentMaterial.sunAngularRadius}set sunAngularRadius(e){this.cloudsPass.currentMaterial.sunAngularRadius=e}}fr([U("SKIP_RENDERING")],Ce.prototype,"skipRendering");const Er=128,Dr=32;class Ft{constructor({size:e,fragmentShader:t}){this.needsRender=!0,this.camera=new V,this.size=e,this.material=new H({glslVersion:M,vertexShader:`
        in vec3 position;
        out vec2 vUv;
        void main() {
          vUv = position.xy * 0.5 + 0.5;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,fragmentShader:t,uniforms:{layer:new n(0)}}),this.mesh=new ae(new re(2,2),this.material),this.renderTarget=new Et(e,e,e,{depthBuffer:!1,format:$e});const a=this.renderTarget.texture;a.minFilter=_,a.magFilter=_,a.wrapS=ee,a.wrapT=ee,a.wrapR=ee,a.colorSpace=De,a.needsUpdate=!0}dispose(){this.renderTarget.dispose(),this.material.dispose()}render(e,t){if(this.needsRender){this.needsRender=!1;for(let a=0;a<this.size;++a)this.material.uniforms.layer.value=a/this.size,e.setRenderTarget(this.renderTarget,a),e.render(this.mesh,this.camera);e.setRenderTarget(null)}}get texture(){return this.renderTarget.texture}}const Ar=`// Based on the following work with slight modifications.
// https://github.com/sebh/TileableVolumeNoise

/**
 * The MIT License (MIT)
 *
 * Copyright(c) 2017 Sébastien Hillaire
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

precision highp float;
precision highp int;

#include "core/math"
#include "perlin"
#include "tileableNoise"

uniform float layer;

in vec2 vUv;

layout(location = 0) out float outputColor;

float getPerlinWorley(const vec3 point) {
  int octaveCount = 3;
  float frequency = 8.0;
  float perlin = getPerlinNoise(point, frequency, octaveCount);
  perlin = clamp(perlin, 0.0, 1.0);

  float cellCount = 4.0;
  vec3 noise = vec3(
    1.0 - getWorleyNoise(point, cellCount * 2.0),
    1.0 - getWorleyNoise(point, cellCount * 8.0),
    1.0 - getWorleyNoise(point, cellCount * 14.0)
  );
  float fbm = dot(noise, vec3(0.625, 0.25, 0.125));
  return remap(perlin, 0.0, 1.0, fbm, 1.0);
}

float getWorleyFbm(const vec3 point) {
  float cellCount = 4.0;
  vec4 noise = vec4(
    1.0 - getWorleyNoise(point, cellCount * 2.0),
    1.0 - getWorleyNoise(point, cellCount * 4.0),
    1.0 - getWorleyNoise(point, cellCount * 8.0),
    1.0 - getWorleyNoise(point, cellCount * 16.0)
  );
  vec3 fbm = vec3(
    dot(noise.xyz, vec3(0.625, 0.25, 0.125)),
    dot(noise.yzw, vec3(0.625, 0.25, 0.125)),
    dot(noise.zw, vec2(0.75, 0.25))
  );
  return dot(fbm, vec3(0.625, 0.25, 0.125));
}

void main() {
  vec3 point = vec3(vUv.x, vUv.y, layer);
  float perlinWorley = getPerlinWorley(point);
  float worleyFbm = getWorleyFbm(point);
  outputColor = remap(perlinWorley, worleyFbm - 1.0, 1.0);
}
`,Je=`// Ported from GLM: https://github.com/g-truc/glm/blob/master/glm/gtc/noise.inl

/**
 * OpenGL Mathematics (GLM)
 *
 * GLM is licensed under The Happy Bunny License or MIT License
 *
 * The Happy Bunny License (Modified MIT License)
 *
 * Copyright (c) 2005 - G-Truc Creation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * Restrictions:
 *  By making use of the Software for military purposes, you choose to make a
 *  Bunny unhappy.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * The MIT License
 *
 * Copyright (c) 2005 - G-Truc Creation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

vec4 mod289(const vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(const vec4 v) {
  return mod289((v * 34.0 + 1.0) * v);
}

vec4 taylorInvSqrt(const vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec4 fade(const vec4 v) {
  return v * v * v * (v * (v * 6.0 - 15.0) + 10.0);
}

// Classic Perlin noise, periodic version
float perlin(const vec4 position, const vec4 rep) {
  vec4 Pi0 = mod(floor(position), rep); // Integer part modulo rep
  vec4 Pi1 = mod(Pi0 + 1.0, rep); // Integer part + 1 mod rep
  vec4 Pf0 = fract(position); // Fractional part for interpolation
  vec4 Pf1 = Pf0 - 1.0; // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.y, Pi0.y, Pi1.y, Pi1.y);
  vec4 iz0 = vec4(Pi0.z);
  vec4 iz1 = vec4(Pi1.z);
  vec4 iw0 = vec4(Pi0.w);
  vec4 iw1 = vec4(Pi1.w);

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);
  vec4 ixy00 = permute(ixy0 + iw0);
  vec4 ixy01 = permute(ixy0 + iw1);
  vec4 ixy10 = permute(ixy1 + iw0);
  vec4 ixy11 = permute(ixy1 + iw1);

  vec4 gx00 = ixy00 / 7.0;
  vec4 gy00 = floor(gx00) / 7.0;
  vec4 gz00 = floor(gy00) / 6.0;
  gx00 = fract(gx00) - 0.5;
  gy00 = fract(gy00) - 0.5;
  gz00 = fract(gz00) - 0.5;
  vec4 gw00 = vec4(0.75) - abs(gx00) - abs(gy00) - abs(gz00);
  vec4 sw00 = step(gw00, vec4(0));
  gx00 -= sw00 * (step(0.0, gx00) - 0.5);
  gy00 -= sw00 * (step(0.0, gy00) - 0.5);

  vec4 gx01 = ixy01 / 7.0;
  vec4 gy01 = floor(gx01) / 7.0;
  vec4 gz01 = floor(gy01) / 6.0;
  gx01 = fract(gx01) - 0.5;
  gy01 = fract(gy01) - 0.5;
  gz01 = fract(gz01) - 0.5;
  vec4 gw01 = vec4(0.75) - abs(gx01) - abs(gy01) - abs(gz01);
  vec4 sw01 = step(gw01, vec4(0.0));
  gx01 -= sw01 * (step(0.0, gx01) - 0.5);
  gy01 -= sw01 * (step(0.0, gy01) - 0.5);

  vec4 gx10 = ixy10 / 7.0;
  vec4 gy10 = floor(gx10) / 7.0;
  vec4 gz10 = floor(gy10) / 6.0;
  gx10 = fract(gx10) - 0.5;
  gy10 = fract(gy10) - 0.5;
  gz10 = fract(gz10) - 0.5;
  vec4 gw10 = vec4(0.75) - abs(gx10) - abs(gy10) - abs(gz10);
  vec4 sw10 = step(gw10, vec4(0.0));
  gx10 -= sw10 * (step(0.0, gx10) - 0.5);
  gy10 -= sw10 * (step(0.0, gy10) - 0.5);

  vec4 gx11 = ixy11 / 7.0;
  vec4 gy11 = floor(gx11) / 7.0;
  vec4 gz11 = floor(gy11) / 6.0;
  gx11 = fract(gx11) - 0.5;
  gy11 = fract(gy11) - 0.5;
  gz11 = fract(gz11) - 0.5;
  vec4 gw11 = vec4(0.75) - abs(gx11) - abs(gy11) - abs(gz11);
  vec4 sw11 = step(gw11, vec4(0.0));
  gx11 -= sw11 * (step(0.0, gx11) - 0.5);
  gy11 -= sw11 * (step(0.0, gy11) - 0.5);

  vec4 g0000 = vec4(gx00.x, gy00.x, gz00.x, gw00.x);
  vec4 g1000 = vec4(gx00.y, gy00.y, gz00.y, gw00.y);
  vec4 g0100 = vec4(gx00.z, gy00.z, gz00.z, gw00.z);
  vec4 g1100 = vec4(gx00.w, gy00.w, gz00.w, gw00.w);
  vec4 g0010 = vec4(gx10.x, gy10.x, gz10.x, gw10.x);
  vec4 g1010 = vec4(gx10.y, gy10.y, gz10.y, gw10.y);
  vec4 g0110 = vec4(gx10.z, gy10.z, gz10.z, gw10.z);
  vec4 g1110 = vec4(gx10.w, gy10.w, gz10.w, gw10.w);
  vec4 g0001 = vec4(gx01.x, gy01.x, gz01.x, gw01.x);
  vec4 g1001 = vec4(gx01.y, gy01.y, gz01.y, gw01.y);
  vec4 g0101 = vec4(gx01.z, gy01.z, gz01.z, gw01.z);
  vec4 g1101 = vec4(gx01.w, gy01.w, gz01.w, gw01.w);
  vec4 g0011 = vec4(gx11.x, gy11.x, gz11.x, gw11.x);
  vec4 g1011 = vec4(gx11.y, gy11.y, gz11.y, gw11.y);
  vec4 g0111 = vec4(gx11.z, gy11.z, gz11.z, gw11.z);
  vec4 g1111 = vec4(gx11.w, gy11.w, gz11.w, gw11.w);

  vec4 norm00 = taylorInvSqrt(
    vec4(dot(g0000, g0000), dot(g0100, g0100), dot(g1000, g1000), dot(g1100, g1100))
  );
  g0000 *= norm00.x;
  g0100 *= norm00.y;
  g1000 *= norm00.z;
  g1100 *= norm00.w;

  vec4 norm01 = taylorInvSqrt(
    vec4(dot(g0001, g0001), dot(g0101, g0101), dot(g1001, g1001), dot(g1101, g1101))
  );
  g0001 *= norm01.x;
  g0101 *= norm01.y;
  g1001 *= norm01.z;
  g1101 *= norm01.w;

  vec4 norm10 = taylorInvSqrt(
    vec4(dot(g0010, g0010), dot(g0110, g0110), dot(g1010, g1010), dot(g1110, g1110))
  );
  g0010 *= norm10.x;
  g0110 *= norm10.y;
  g1010 *= norm10.z;
  g1110 *= norm10.w;

  vec4 norm11 = taylorInvSqrt(
    vec4(dot(g0011, g0011), dot(g0111, g0111), dot(g1011, g1011), dot(g1111, g1111))
  );
  g0011 *= norm11.x;
  g0111 *= norm11.y;
  g1011 *= norm11.z;
  g1111 *= norm11.w;

  float n0000 = dot(g0000, Pf0);
  float n1000 = dot(g1000, vec4(Pf1.x, Pf0.y, Pf0.z, Pf0.w));
  float n0100 = dot(g0100, vec4(Pf0.x, Pf1.y, Pf0.z, Pf0.w));
  float n1100 = dot(g1100, vec4(Pf1.x, Pf1.y, Pf0.z, Pf0.w));
  float n0010 = dot(g0010, vec4(Pf0.x, Pf0.y, Pf1.z, Pf0.w));
  float n1010 = dot(g1010, vec4(Pf1.x, Pf0.y, Pf1.z, Pf0.w));
  float n0110 = dot(g0110, vec4(Pf0.x, Pf1.y, Pf1.z, Pf0.w));
  float n1110 = dot(g1110, vec4(Pf1.x, Pf1.y, Pf1.z, Pf0.w));
  float n0001 = dot(g0001, vec4(Pf0.x, Pf0.y, Pf0.z, Pf1.w));
  float n1001 = dot(g1001, vec4(Pf1.x, Pf0.y, Pf0.z, Pf1.w));
  float n0101 = dot(g0101, vec4(Pf0.x, Pf1.y, Pf0.z, Pf1.w));
  float n1101 = dot(g1101, vec4(Pf1.x, Pf1.y, Pf0.z, Pf1.w));
  float n0011 = dot(g0011, vec4(Pf0.x, Pf0.y, Pf1.z, Pf1.w));
  float n1011 = dot(g1011, vec4(Pf1.x, Pf0.y, Pf1.z, Pf1.w));
  float n0111 = dot(g0111, vec4(Pf0.x, Pf1.y, Pf1.z, Pf1.w));
  float n1111 = dot(g1111, Pf1);

  vec4 fade_xyzw = fade(Pf0);
  vec4 n_0w = mix(vec4(n0000, n1000, n0100, n1100), vec4(n0001, n1001, n0101, n1101), fade_xyzw.w);
  vec4 n_1w = mix(vec4(n0010, n1010, n0110, n1110), vec4(n0011, n1011, n0111, n1111), fade_xyzw.w);
  vec4 n_zw = mix(n_0w, n_1w, fade_xyzw.z);
  vec2 n_yzw = mix(n_zw.xy, n_zw.zw, fade_xyzw.y);
  float n_xyzw = mix(n_yzw.x, n_yzw.y, fade_xyzw.x);
  return 2.2 * n_xyzw;
}
`,Qe=`// Based on the following work with slight modifications.
// https://github.com/sebh/TileableVolumeNoise

/**
 * The MIT License (MIT)
 *
 * Copyright(c) 2017 Sébastien Hillaire
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

float hash(const float n) {
  return fract(sin(n + 1.951) * 43758.5453);
}

float noise(const vec3 x) {
  vec3 p = floor(x);
  vec3 f = fract(x);

  f = f * f * (3.0 - 2.0 * f);
  float n = p.x + p.y * 57.0 + 113.0 * p.z;
  return mix(
    mix(mix(hash(n + 0.0), hash(n + 1.0), f.x), mix(hash(n + 57.0), hash(n + 58.0), f.x), f.y),
    mix(
      mix(hash(n + 113.0), hash(n + 114.0), f.x),
      mix(hash(n + 170.0), hash(n + 171.0), f.x),
      f.y
    ),
    f.z
  );
}

float getWorleyNoise(const vec3 p, const float cellCount) {
  vec3 cell = p * cellCount;
  float d = 1.0e10;
  for (int x = -1; x <= 1; ++x) {
    for (int y = -1; y <= 1; ++y) {
      for (int z = -1; z <= 1; ++z) {
        vec3 tp = floor(cell) + vec3(x, y, z);
        tp = cell - tp - noise(mod(tp, cellCount / 1.0));
        d = min(d, dot(tp, tp));
      }
    }
  }
  return clamp(d, 0.0, 1.0);
}

float getPerlinNoise(const vec3 point, const vec3 frequency, const int octaveCount) {
  // Noise frequency factor between octave, forced to 2.
  const float octaveFrequencyFactor = 2.0;

  // Compute the sum for each octave.
  float sum = 0.0;
  float roughness = 0.5;
  float weightSum = 0.0;
  float weight = 1.0;
  vec3 nextFrequency = frequency;
  for (int i = 0; i < octaveCount; ++i) {
    vec4 p = vec4(point.x, point.y, point.z, 0.0) * vec4(nextFrequency, 1.0);
    float value = perlin(p, vec4(nextFrequency, 1.0));
    sum += value * weight;
    weightSum += weight;
    weight *= roughness;
    nextFrequency *= octaveFrequencyFactor;
  }

  return sum / weightSum; // Intentionally skip clamping.
}

float getPerlinNoise(const vec3 point, const float frequency, const int octaveCount) {
  return getPerlinNoise(point, vec3(frequency), octaveCount);
}
`;class Rr extends Ft{constructor(){super({size:Er,fragmentShader:$(Ar,{core:{math:ye},perlin:Je,tileableNoise:Qe})})}}const br=`// Based on the following work with slight modifications.
// https://github.com/sebh/TileableVolumeNoise

/**
 * The MIT License (MIT)
 *
 * Copyright(c) 2017 Sébastien Hillaire
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

precision highp float;
precision highp int;

#include "core/math"
#include "perlin"
#include "tileableNoise"

uniform float layer;

in vec2 vUv;

layout(location = 0) out float outputColor;

void main() {
  vec3 point = vec3(vUv.x, vUv.y, layer);
  float cellCount = 2.0;
  vec4 noise = vec4(
    1.0 - getWorleyNoise(point, cellCount * 1.0),
    1.0 - getWorleyNoise(point, cellCount * 2.0),
    1.0 - getWorleyNoise(point, cellCount * 4.0),
    1.0 - getWorleyNoise(point, cellCount * 8.0)
  );
  vec3 fbm = vec3(
    dot(noise.xyz, vec3(0.625, 0.25, 0.125)),
    dot(noise.yzw, vec3(0.625, 0.25, 0.125)),
    dot(noise.zw, vec2(0.75, 0.25))
  );
  outputColor = dot(fbm, vec3(0.625, 0.25, 0.125));
}
`;class Or extends Ft{constructor(){super({size:Dr,fragmentShader:$(br,{core:{math:ye},perlin:Je,tileableNoise:Qe})})}}class Pr{constructor({size:e,fragmentShader:t}){this.needsRender=!0,this.camera=new V,this.size=e,this.material=new H({glslVersion:M,vertexShader:`
        in vec3 position;
        out vec2 vUv;
        void main() {
          vUv = position.xy * 0.5 + 0.5;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,fragmentShader:t,uniforms:{layer:new n(0)}}),this.mesh=new ae(new re(2,2),this.material),this.renderTarget=new he(e,e,{depthBuffer:!1,format:da});const a=this.renderTarget.texture;a.generateMipmaps=!0,a.minFilter=Ye,a.magFilter=_,a.wrapS=ee,a.wrapT=ee,a.colorSpace=De,a.needsUpdate=!0}dispose(){this.renderTarget.dispose(),this.material.dispose()}render(e,t){this.needsRender&&(this.needsRender=!1,e.setRenderTarget(this.renderTarget),e.render(this.mesh,this.camera),e.setRenderTarget(null))}get texture(){return this.renderTarget.texture}}const Nr=`precision highp float;
precision highp int;

#include "core/math"
#include "perlin"
#include "tileableNoise"

in vec2 vUv;

layout(location = 0) out vec4 outputColor;

const vec3 frequency = vec3(12.0);
const int octaveCount = 3;

float perlin(const vec3 point) {
  return getPerlinNoise(point, frequency, octaveCount);
}

vec3 perlin3d(const vec3 point) {
  float perlin1 = perlin(point);
  float perlin2 = perlin(point.yzx + vec3(-19.1, 33.4, 47.2));
  float perlin3 = perlin(point.zxy + vec3(74.2, -124.5, 99.4));
  return vec3(perlin1, perlin2, perlin3);
}

vec3 curl(vec3 point) {
  const float delta = 0.1;
  vec3 dx = vec3(delta, 0.0, 0.0);
  vec3 dy = vec3(0.0, delta, 0.0);
  vec3 dz = vec3(0.0, 0.0, delta);

  vec3 px0 = perlin3d(point - dx);
  vec3 px1 = perlin3d(point + dx);
  vec3 py0 = perlin3d(point - dy);
  vec3 py1 = perlin3d(point + dy);
  vec3 pz0 = perlin3d(point - dz);
  vec3 pz1 = perlin3d(point + dz);

  float x = py1.z - py0.z - pz1.y + pz0.y;
  float y = pz1.x - pz0.x - px1.z + px0.z;
  float z = px1.y - px0.y - py1.x + py0.x;

  const float divisor = 1.0 / (2.0 * delta);
  return normalize(vec3(x, y, z) * divisor);
}

void main() {
  vec3 point = vec3(vUv.x, vUv.y, 0.0);
  outputColor.rgb = 0.5 * curl(point) + 0.5;
  outputColor.a = 1.0;
}
`;class Ir extends Pr{constructor(){super({size:128,fragmentShader:$(Nr,{core:{math:ye},perlin:Je,tileableNoise:Qe})})}}const Lr=["density","light","steps","shadow","cascades","shafts","lowres","fill"],B=typeof location>"u"?new URLSearchParams:new URLSearchParams(location.search),le=Lr.includes(B.get("cloudDebug"))?B.get("cloudDebug"):null,mt=Number(B.get("cloudDebugGain")??{density:.025,light:6,steps:.25,shadow:.12,cascades:1,shafts:.1,lowres:1,fill:1}[le??"density"]),_e=Number(B.get("cloudDebugDim")??.97),_r=Number(B.get("cloudStepsMax")??64),Mr=B.get("cloudStepsCh")==="y"?"y":"x",Me=B.get("cloudCascade");function j(i,e,t,a){const o=i.replace(e,t);return o===i&&console.warn(`cloudDebug: takram shader changed, ${a} not installed`),o}function Ur(i,e,t){let a=i.fragmentShader;i.uniforms.viperDebugGain=new n(mt);const o=a.indexOf("vec4 marchClouds(");if(a=`${a.slice(0,o)}uniform float viperDebugGain;
vec4 viperDbg = vec4(-1.0);
${a.slice(o)}`,(t==="density"||t==="steps"||t==="light")&&(a=j(a,/void main\(\) \{\n/,`void main() {
  viperDbg = vec4(0.0, 0.0, 0.0, ${_e.toFixed(3)});
`,"dim")),t==="density"&&(a=j(a,/(color = marchClouds\([\s\S]*?\);)/,`$1
    viperDbg = vec4(vec3(color.a) * viperDebugGain, max(color.a, ${_e.toFixed(3)}));`,"density")),t==="light"&&(a=j(a,/(color = marchClouds\([\s\S]*?\);)/,`$1
    viperDbg = vec4(color.rgb, max(color.a, ${_e.toFixed(3)}));`,"light mask"),a=j(a,/(\n(\s*)\/\/ Finally multiply by scattering\.)/,`
$2{ float viperSun = clamp(1.0 - opticalDepth / 16.0, 0.0, 1.0);   // log-ish: how deep in the cloud's own shadow
$2  radiance = mix(vec3(0.015, 0.02, 0.07), vec3(1.0, 0.74, 0.36), smoothstep(0.05, 0.95, viperSun))
$2    * dot(sunIrradiance, vec3(0.2126, 0.7152, 0.0722)) * 0.12 * viperDebugGain; }$1`,"light")),t==="steps"&&(i.defines.DEBUG_SHOW_SAMPLE_COUNT="1",a=j(a,/(#ifdef DEBUG_SHOW_SAMPLE_COUNT\n\s*)outputColor = vec4\(vec3\(sampleCount\) \/ vec3\(500\.0, 5\.0, 5\.0\), 1\.0\);[\s\S]*?return;\n(\s*#endif \/\/ DEBUG_SHOW_SAMPLE_COUNT)/,`$1viperDbg = vec4(turbo(0.12 + 0.88 * clamp(float(sampleCount.${Mr}) / ${_r.toFixed(1)}, 0.0, 1.0)) * viperDebugGain, 1.0);
$2`,"steps")),t==="shadow"&&(i.defines.DEBUG_SHOW_SHADOW_MAP="1",i.defines.DEBUG_SHOW_SHADOW_MAP_TYPE="3",a=j(a,"outputColor = getCascadedShadowMaps(vUv);",Me!==null?`outputColor = vec4(vec3(sqrt((texture(shadowBuffer, vec3(vUv, ${Number(Me).toFixed(1)})).b + texture(shadowBuffer, vec3(vUv, ${Number(Me).toFixed(1)})).a) * 0.01)) * viperDebugGain, 1.0);`:"outputColor = getCascadedShadowMaps(vUv); outputColor.rgb = sqrt(outputColor.rgb) * viperDebugGain;","shadow")),t==="cascades"&&(i.defines.DEBUG_SHOW_CASCADES="1"),t==="shafts"){e.defines.DEBUG_SHOW_SHADOW_LENGTH="1",e.uniforms.viperDebugGain=new n(mt);let r=e.fragmentShader;r=r.replace("void main() {",`uniform float viperDebugGain;
void main() {`),r=j(r,"outputColor = vec4(turbo(outputShadowLength * 0.05), 1.0);","outputColor = vec4(turbo(clamp(outputShadowLength * 0.05, 0.0, 1.0)) * viperDebugGain, 1.0);","shafts"),e.fragmentShader=r,e.needsUpdate=!0}a=j(a,/outputColor = color;\n(\s*)outputDepthVelocity = depthVelocity;/,`outputColor = viperDbg.a >= 0.0 ? viperDbg : color;
$1outputDepthVelocity = depthVelocity;`,"output"),i.fragmentShader=a,i.needsUpdate=!0}const zr=`
precision highp float;
precision highp int;
uniform sampler2D uResolved;   // takram's resolved overlay (full res)
uniform sampler2D uLow;        // this frame's march (quarter res)
uniform int uMode;             // 0 lowres, 1 fill
uniform int uFrame;
uniform int uFill;
uniform int uCell;   // fill: draw each of the 16 slots as a uCell x uCell block (legible after video compression)
in vec2 vUv;
layout(location = 0) out vec4 outColor;
const ivec4 bayer[4] = ivec4[4](ivec4(0, 12, 3, 15), ivec4(8, 4, 11, 7), ivec4(2, 14, 1, 13), ivec4(10, 6, 9, 5));
void main() {
  ivec2 c = ivec2(gl_FragCoord.xy);
  if (uMode == 0) {
    // the low-res march, nearest: one ray per 4 x 4 block
    ivec2 lc = min(c / 4, textureSize(uLow, 0) - 1);
    outColor = texelFetch(uLow, lc, 0);
    return;
  }
  // pixels whose own ray was marched within the last uFill frames (as takram's resolve picks them)
  ivec2 cc = c / uCell;
  int b = bayer[cc.x % 4][cc.y % 4];
  int age = ((uFrame - b) % 16 + 16) % 16;
  vec4 v = texelFetch(uResolved, c, 0);
  outColor = age < uFill ? v : vec4(0.0, 0.0, 0.0, 1.0);
}`;class Hr{target=null;material=new H({glslVersion:M,vertexShader:te,fragmentShader:zr,depthTest:!1,depthWrite:!1,uniforms:{uResolved:new n(null),uLow:new n(null),uMode:new n(0),uFrame:new n(0),uFill:new n(1),uCell:new n(Math.max(1,Number(B.get("cloudFillCell")??1)))}});quad=new ae(new re(2,2),this.material);cam=new V;overlay={map:null};render(e,t,a,o,r){const{width:s,height:l}=a.image;(!this.target||this.target.width!==s||this.target.height!==l)&&(this.target?.dispose(),this.target=new he(s,l,{type:Ae,depthBuffer:!1,minFilter:_,magFilter:_}));const u=this.material.uniforms,d=globalThis.__cloudFill;u.uResolved.value=a,u.uLow.value=o,u.uMode.value=t==="lowres"?0:1,u.uFrame.value=r,u.uFill.value=Math.max(1,Math.min(16,Math.round(d??Number(B.get("cloudFill")??1))));const h=e.getRenderTarget();return e.setRenderTarget(this.target),this.quad.frustumCulled=!1,e.render(this.quad,this.cam),e.setRenderTarget(h),this.overlay.map=this.target.texture,this.overlay}}const Fr=`
precision highp float;
uniform sampler2D uCurrent;
uniform sampler2D uHistory;
uniform sampler2D uVelocity;   // takram depthVelocity (low res): g,b = uv - prevUv
uniform bool uHasVelocity;
uniform bool uValid;
uniform float uAlpha;
uniform float uGamma;
uniform float uNearWeight;   // hand-off to the near-field cloud (inCloud.ts)
uniform float uNearRange;
in vec2 vUv;
layout(location = 0) out vec4 outColor;
void main() {
  vec4 cur = texture(uCurrent, vUv);
  vec2 texel = 1.0 / vec2(textureSize(uCurrent, 0));
  // Neighbourhood statistics at takram's low-res texel spacing (4 px): its
  // stochastic samples are 4x4 blocks, so a 1 px neighbourhood can't see them
  // as outliers. The centre is excluded so isolated blocks are rejected.
  vec4 m1 = vec4(0.0), m2 = vec4(0.0);
  float mw = 0.0;
  for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
    if (x == 0 && y == 0) continue;
    vec2 uv = vUv + vec2(x, y) * texel * 4.0;
    vec4 c = texture(uCurrent, uv);
    m1 += c; m2 += c * c; mw += 1.0;
  }
  m1 /= max(mw, 1e-3); m2 /= max(mw, 1e-3);
  vec4 sigma = sqrt(max(m2 - m1 * m1, 0.0));
  vec3 dv = uHasVelocity ? texture(uVelocity, vUv).rgb : vec3(1e9, 0.0, 0.0);
  vec2 vel = dv.gb;
  // While the camera is in or beside a cloud the near-field march owns the
  // first NEAR_RANGE metres: fade takram's clouds whose front is closer.
  float keep = 1.0;
  if (uNearWeight > 0.0 && uHasVelocity) {
    vec2 lowSize = vec2(textureSize(uVelocity, 0));
    ivec2 i0 = ivec2(vUv * lowSize);
    ivec2 mx = ivec2(lowSize) - 1;
    // Average the fade over 3x3 low-res texels: takram's front depth is
    // stochastic per texel, and a per-texel fade shows up as dots.
    float k = 0.0;
    for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++)
      k += smoothstep(uNearRange * 0.5, uNearRange, texelFetch(uVelocity, clamp(i0 + ivec2(x, y), ivec2(0), mx), 0).r);
    keep = mix(1.0, k / 9.0, uNearWeight);
  }
  cur *= keep; m1 *= keep; sigma *= keep;
  // Motion in full-res pixels per frame.
  float motion = length(vel / texel);
  float moving = smoothstep(0.75, 6.0, motion);
  // takram's upscale fills disoccluded / fast-moving texels from single
  // low-res samples, which show as speckles (sparkle) all over the clouds in
  // a roll. Pull outliers into the neighbourhood box, then build a spatially
  // denoised current frame: a tent filter over the 4 px blocks (centre
  // included) that stands in for history wherever history is missing or
  // rejected, so a fast camera trades sharpness for noise, never the reverse.
  vec4 tamed = clamp(cur, m1 - sigma * mix(1.0, 0.6, moving) - 0.002, m1 + sigma * mix(1.0, 0.6, moving) + 0.002);
  vec4 blur = tamed * 0.25;
  float bw = 0.25;
  for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
    if (x == 0 && y == 0) continue;
    vec2 uv = vUv + vec2(x, y) * texel * 2.0;
    float w = (x == 0 || y == 0) ? 0.125 : 0.0625;
    blur += texture(uCurrent, uv) * keep * w; bw += w;
  }
  blur /= bw;
  blur = clamp(blur, m1 - sigma, m1 + sigma);
  vec4 spatial = mix(tamed, blur, 0.5 + 0.5 * moving);
  cur = mix(tamed, spatial, 0.6 * moving);
  if (!uValid) { outColor = spatial; return; }
  vec2 prevUv = vUv - vel;
  if (any(lessThan(prevUv, vec2(0.0))) || any(greaterThan(prevUv, vec2(1.0)))) { outColor = spatial; return; }
  // Clamp history to the neighbourhood box (no ghosting). How far it had to
  // move measures rejection: rejected history hands over to the denoised
  // current frame instead of the raw one.
  float gamma = mix(uGamma, 1.0, moving);
  vec4 raw = texture(uHistory, prevUv);
  vec4 hist = clamp(raw, m1 - gamma * sigma, m1 + gamma * sigma);
  float rej = clamp(length(raw - hist) / (length(sigma) + 0.01), 0.0, 1.0);
  vec4 now = mix(cur, spatial, rej);
  outColor = mix(hist, now, mix(uAlpha, 0.22, max(moving, rej * 0.5)));
}`,Wr=`
precision highp float;
uniform sampler2D uOverlay;
uniform sampler2D uDepth;      // the scene's depth, full res (logarithmic depth buffer)
uniform vec2 uOcclude;         // the depth-buffer values of occludeNear / occludeFar (log2(1 + z) / log2(far + 1))
uniform bool uHasMarch;        // the march's own textures below are set
uniform sampler2D uMarchDepth; // the depth the march read (NearStrip's)
uniform sampler2D uLowColor;   // the march this frame, a quarter res (premultiplied radiance, alpha)
uniform sampler2D uLowFront;   // its depthVelocity: r the clouds' mean front distance (0: none), a the surface (T = 0.5)
uniform bool uSurface;         // .a is the surface (takramClouds.ts installSurfaceDepth); else the mean front stands in
uniform vec2 uTargetUvScale;   // the march's own mapping of its texel to the depth it read (CloudsMaterial)
uniform vec2 uJitter;
uniform float uLogFar;         // log2(far + 1)
uniform vec2 uTanHalf;         // tan of the half field of view, x and y
uniform float uSkyStop;        // the depth-buffer value of skyStopFar: the sky's fringe fix looks only at surfaces nearer
in vec2 vUv;
layout(location = 0) out vec4 outColor;
/** The rays round texel c0 that reached the sky (two texels each way, every other one): their mean in .rgba, and in
 *  n.x how many reached the sky, n.y how many stopped short at a surface nearer than skyStopFar (a jet, not the far terrain). */
vec4 skyRays(ivec2 c0, ivec2 mx, vec2 lowSize, out vec2 n) {
  vec4 sky = vec4(0.0);
  n = vec2(0.0);
  for (int y = -2; y <= 2; y += 1) for (int x = -2; x <= 2; x += 1) {
    if (((x + y) & 1) != 0) continue;
    ivec2 t = clamp(c0 + ivec2(x, y), ivec2(0), mx);
    float dt = texture(uMarchDepth, ((vec2(t) + 0.5) / lowSize) * uTargetUvScale + uJitter).r;
    // (sky only if the texel's whole footprint is: its jittered sample and its far corners)
    vec2 tc = ((vec2(t) + 0.5) / lowSize) * uTargetUvScale, hw = 0.5 / lowSize * uTargetUvScale;
    dt = min(dt, min(texture(uMarchDepth, tc - hw).r, texture(uMarchDepth, tc + hw).r));
    if (dt >= 1.0 - 1e-7) { sky += texelFetch(uLowColor, t, 0); n.x += 1.0; } else if (dt < uSkyStop) n.y += 1.0;
  }
  return n.x > 0.0 ? sky / n.x : sky;
}
void main() {
  vec4 ov = texture(uOverlay, vUv);
  float d = texture(uDepth, vUv).r;
  float near = smoothstep(uOcclude.x, uOcclude.y, d);
  ov *= near;
  // a near surface (no takram cloud at all), or no march to look at: done
  if (!uHasMarch || d <= uOcclude.x) { outColor = ov; return; }
  // The 3x3 quarter-res texels whose march fed this pixel (takram's upscale and the accumulation above read that far):
  // where each one's ray ended (the depth it read, at its own jittered pixel), against this pixel's surface.
  vec2 lowSize = vec2(textureSize(uLowColor, 0));
  ivec2 c0 = ivec2(vUv * vec2(textureSize(uOverlay, 0)) / 4.0);
  ivec2 mx = ivec2(lowSize) - 1;
  if (d >= 1.0 - 1e-7) {
    // The sky beside a surface the march stopped at (a jet past occludeNear against a cloud deck): the texels whose
    // ray ended on the jet carry no cloud, and the upscale spread them up to two texels onto the sky round it, a
    // bright fringe hugging the outline (a long lens shows it plainly; a bandit a km out wears it as a pale blob).
    // The sky's own share is the rays that reached the sky round it, where any stopped short: two texels each way
    // (the upscale's 3x3 and the accumulation's taps on top of it reach that far).
    vec2 n;
    vec4 sky = skyRays(c0, mx, lowSize, n);
    outColor = n.y > 0.0 && n.x > 0.0 ? sky : ov;
    return;
  }
  // this pixel's surface: its distance along the ray (m)
  vec2 ndc = vUv * 2.0 - 1.0;
  float S = (exp2(d * uLogFar) - 1.0) * length(vec3(ndc * uTanHalf, 1.0));
  vec4 same = vec4(0.0);
  float nSame = 0.0, behind = 0.0, behindA = 0.0, pastA = 0.0;
  for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
    ivec2 t = clamp(c0 + ivec2(x, y), ivec2(0), mx);
    float dt = texture(uMarchDepth, ((vec2(t) + 0.5) / lowSize) * uTargetUvScale + uJitter).r;
    // (log depth: the difference is log2 of the distances' ratio; 0.07 is 5 %)
    float rel = (dt - d) * uLogFar;
    if (rel > 0.07) {
      // the march went past this surface (the sky or something farther behind it). Its cloud is this pixel's only
      // where it is in front of the surface: the depth where its transmittance fell to a half (a), against ours.
      vec4 f = texelFetch(uLowFront, t, 0);
      float alpha = f.r > 0.0 ? texelFetch(uLowColor, t, 0).a : 0.0;
      float b = smoothstep(S * 1.05 + 50.0, S * 1.25 + 150.0, uSurface ? f.a : f.r) * alpha;
      behind = max(behind, b);
      behindA += b; pastA += alpha;
    } else if (rel > -0.07) {
      // the march stopped at this surface too: its result is this pixel's (the clouds and haze in front of it)
      same += texelFetch(uLowColor, t, 0);
      nSame += 1.0;
    }
  }
  // no cloud behind the surface round here (the usual case: terrain under or behind the clouds, a jet in clear
  // air or deep in a cloud): the overlay as it was. Else it can be the cloud behind, pasted over a jet in front of
  // it: this frame's rays that stopped at the surface instead, or with none, the overlay less the share behind it.
  vec4 est = nSame > 0.0 ? same / nSame * near : ov * (1.0 - behindA / max(pastA, 1e-4));
  outColor = mix(ov, est, clamp(behind * 2.0, 0.0, 1.0));
}`,kr=`
precision highp float;
uniform sampler2D uDepth;
uniform float uNear;        // the depth-buffer value under which a surface is left out
in vec2 vUv;
layout(location = 0) out vec4 outColor;
void main() { float d = texture(uDepth, vUv).r; outColor = vec4(d < uNear ? 1.0 : d, 0.0, 0.0, 1.0); }`,Te=(i,e)=>Math.log2(i+1)/Math.log2(e+1);class Gr{near=300;target=new he(1,1,{type:pa,format:$e,depthBuffer:!1,minFilter:it,magFilter:it});material=new H({glslVersion:M,vertexShader:te,fragmentShader:kr,depthTest:!1,depthWrite:!1,uniforms:{uDepth:new n(null),uNear:new n(0)}});quad=new ae(new re(2,2),this.material);cam=new V;render(e,t,a){const{width:o,height:r}=t.image;(this.target.width!==o||this.target.height!==r)&&this.target.setSize(o,r),this.material.uniforms.uDepth.value=t,this.material.uniforms.uNear.value=Te(this.near,a.far);const s=e.getRenderTarget();e.setRenderTarget(this.target),this.quad.frustumCulled=!1,e.render(this.quad,this.cam),e.setRenderTarget(s)}}class Br{alpha=.15;gamma=1.25;nearWeight=0;nearRange=450;occludeNear=300;occludeFar=600;skyStopFar=6e3;targets=null;masked=null;valid=!1;material=new H({glslVersion:M,vertexShader:te,fragmentShader:Fr,depthTest:!1,depthWrite:!1,uniforms:{uCurrent:new n(null),uHistory:new n(null),uVelocity:new n(null),uHasVelocity:new n(!1),uValid:new n(!1),uAlpha:new n(.15),uGamma:new n(1.25),uNearWeight:new n(0),uNearRange:new n(450)}});maskMaterial=new H({glslVersion:M,vertexShader:te,fragmentShader:Wr,depthTest:!1,depthWrite:!1,uniforms:{uOverlay:new n(null),uDepth:new n(null),uOcclude:new n(new m),uHasMarch:new n(!1),uMarchDepth:new n(null),uLowColor:new n(null),uLowFront:new n(null),uSurface:new n(!0),uTargetUvScale:new n(new m(1,1)),uJitter:new n(new m),uLogFar:new n(1),uTanHalf:new n(new m(1,1)),uSkyStop:new n(0)}});quad=new ae(new re(2,2),this.material);cam=new V;reset(){this.valid=!1}render(e,t,a,o){const{width:r,height:s}=t.image,l=()=>new he(r,s,{type:Ae,depthBuffer:!1,minFilter:_,magFilter:_});(!this.targets||this.targets[0].width!==r||this.targets[0].height!==s)&&(this.targets?.forEach(f=>f.dispose()),this.masked?.dispose(),this.masked=null,this.targets=[l(),l()],this.valid=!1);const[u,d]=this.targets,h=this.material.uniforms;h.uCurrent.value=t,h.uHistory.value=d.texture,h.uVelocity.value=a,h.uHasVelocity.value=a!=null,h.uValid.value=this.valid,h.uAlpha.value=this.alpha,h.uGamma.value=this.gamma,h.uNearWeight.value=this.nearWeight,h.uNearRange.value=this.nearRange;const v=e.getRenderTarget();this.quad.frustumCulled=!1,this.quad.material=this.material,e.setRenderTarget(u),e.render(this.quad,this.cam),this.targets=[d,u],this.valid=!0;let w=u.texture;if(o?.texture){this.masked??=l();const f=this.maskMaterial.uniforms;f.uOverlay.value=u.texture,f.uDepth.value=o.texture,f.uOcclude.value.set(Te(this.occludeNear,o.camera.far),Te(this.occludeFar,o.camera.far));const g=o.march;if(f.uHasMarch.value=!!g,f.uSurface.value=g?.surface??!1,g){f.uMarchDepth.value=g.depth,f.uLowColor.value=g.color,f.uLowFront.value=g.front,f.uTargetUvScale.value.copy(g.targetUvScale),f.uJitter.value.copy(g.jitter);const S=o.camera,E=Math.tan(S.fov*Math.PI/360)/S.zoom;f.uLogFar.value=Math.log2(S.far+1),f.uSkyStop.value=Te(this.skyStopFar,S.far),f.uTanHalf.value.set(E*S.aspect,E)}this.quad.material=this.maskMaterial,e.setRenderTarget(this.masked),e.render(this.quad,this.cam),w=this.masked.texture}return e.setRenderTarget(v),w}}const Ue="  #if defined(SHADOW_LENGTH) && defined(DEBUG_SHOW_SHADOW_LENGTH)";function Vr(i){const e=i.cloudsPass.resolveMaterial;if(!e.fragmentShader.includes(Ue)){console.warn("takram clouds resolve shader changed: NaN guard not installed");return}e.fragmentShader=e.fragmentShader.replace(Ue,`  if (any(equal(floatBitsToUint(outputColor) & 0x7f800000u, uvec4(0x7f800000u)))) outputColor = vec4(0.0);
  #ifdef SHADOW_LENGTH
  if ((floatBitsToUint(outputShadowLength) & 0x7f800000u) == 0x7f800000u) outputShadowLength = 0.0;
  #endif
${Ue}`),e.needsUpdate=!0}const q={decl:"layout(location = 1) out vec3 outputDepthVelocity;",step:"transmittanceIntegral *= transmittance;",hit:"frontDepth = rayNearFar.x + marchedFrontDepth;",out:"outputDepthVelocity = depthVelocity;"};function jr(i){const e=i.cloudsPass.currentMaterial,t=e.fragmentShader,a=o=>t.split(o).length===2;return Object.values(q).every(a)?(e.fragmentShader=t.replace(q.decl,`layout(location = 1) out vec4 glyDepthVelocity;
vec3 outputDepthVelocity;
float glySurface = -1.0;
float glySurfaceOut = -1.0;`).replace(q.step,`${q.step}
      if (glySurface < 0.0 && transmittanceIntegral < 0.5) glySurface = rayDistance;`).replace(q.hit,`${q.hit}
      glySurfaceOut = glySurface >= 0.0 ? rayNearFar.x + glySurface : frontDepth;`).replace(q.out,`${q.out}
  glyDepthVelocity = vec4(outputDepthVelocity, glySurfaceOut > 0.0 ? glySurfaceOut : outputDepthVelocity.r);`),e.needsUpdate=!0,!0):(console.warn("takram clouds shader changed: no surface depth (the jet shadow falls on the mean depth)"),!1)}const vt="vec3 groundIrradiance = skyIrradiance + (1.0 - coverage) * sunIrradiance;";function qr(i){const e=i.cloudsPass.currentMaterial;if(!e.fragmentShader.includes(vt)){console.warn("takram clouds shader changed: ground bounce not clamped (coverage > 1 blanks the clouds)");return}e.fragmentShader=e.fragmentShader.replace(vt,"vec3 groundIrradiance = skyIrradiance + max(0.0, 1.0 - coverage) * sunIrradiance;"),e.needsUpdate=!0}const gt="float mipLevel = log2(max(1.0, rayStartTexelsPerPixel + rayDistance * 1e-5));",ze="vec4 marchClouds(",He="WeatherSample sampleWeather(const vec2 uv, const float height, const float mipLevel) {",yt=`weatherExponents
  );
  #ifdef SHADOW`;function Kr(i,e){const t=i.cloudsPass.currentMaterial;return[gt,ze,He,yt].every(a=>t.fragmentShader.includes(a))?(t.fragmentShader=t.fragmentShader.replace(He,`uniform float cloudMipGain;
${He}`).replace(yt,`weatherExponents
  );
  localWeather = min(localWeather * (1.0 + cloudMipGain * max(mipLevel - 1.0, 0.0)), vec4(1.0));
  #ifdef SHADOW`).replace(ze,`uniform float cloudPixelAngle;    // radians per output pixel
uniform float cloudWeatherTexelM;  // metres per weather texel
uniform float cloudMipScale;       // 1: the footprint's mip; 0: takram's
float footprintMip(const float startMip, const float rayDistance, const float cameraDistance, const vec3 direction, const vec3 position) {
  float takram = log2(max(1.0, startMip + rayDistance * 1e-5));
  // the pixel's footprint on the layer: across the ray, and along it stretched by the grazing angle (to 8x)
  float grazing = max(abs(dot(direction, normalize(position))), 0.125);
  float foot = cloudPixelAngle * cameraDistance / grazing;
  return max(takram, cloudMipScale * log2(max(1.0, foot / cloudWeatherTexelM)));
}
${ze}`).replace(gt,"float mipLevel = footprintMip(rayStartTexelsPerPixel, rayDistance, rayNearFar.x + rayDistance, rayDirection, position);"),Object.assign(t.uniforms,e),t.needsUpdate=!0,!0):(console.warn("takram clouds shader changed: no footprint mip (the far field may shimmer)"),!1)}const Yr=i=>`precision highp float;
uniform sampler2D uSrc;
in vec2 vUv;
layout(location = 0) out vec4 outColor;
${i?"layout(location = 1) out vec4 outShadowLength;":""}
void main() { outColor = texture(uSrc, vUv);${i?" outShadowLength = vec4(0.0);":""} }`;function $r(i){const e=i.cloudsPass,t=e.initRenderTargets.bind(e),a=e.setSize.bind(e),o=new Map,r=new ae(new re(2,2));r.frustumCulled=!1;const s=new V,l=(w,f,g)=>{const S=g.textures.length>1;let E=o.get(S);E||(E=new H({glslVersion:M,vertexShader:te,fragmentShader:Yr(S),depthTest:!1,depthWrite:!1,uniforms:{uSrc:new n(null)}}),o.set(S,E)),E.uniforms.uSrc.value=f,r.material=E;const F=w.getRenderTarget();w.setRenderTarget(g),w.render(r,s),w.setRenderTarget(F)};let u=null;e.initRenderTargets=w=>{const f=e.historyRenderTarget;if(!f){t(w);return}u?.dispose();const g=f.dispose;f.dispose=()=>{};try{t(w)}finally{f.dispose=g}u=f};let d=0,h=0,v=null;return e.setSize=(w,f)=>{d?v=[w,f]:(d=w,h=f,a(w,f))},w=>{if(v){let[f,g]=v;v=null;const S=(E,F)=>Math.abs(E-F)<=Math.max(2,.02*F);if(S(f,d)&&S(g,h))f=d,g=h;else if(!u&&e.historyRenderTarget){const E=e.historyRenderTarget;u=E.clone(),u.textures.length=1,l(w,E.texture,u)}d=f,h=g,a(f,g)}if(u){const f=u;u=null,l(w,f.texture,e.historyRenderTarget),f.dispose()}}}const Wt=[{scale:.5,shafts:!1,iterations:280,toSun:1,shadowSize:256,cascades:2,shadowSteps:25,shadowEvery:3},{scale:.65,shafts:!1,iterations:300,toSun:2,shadowSize:256,cascades:2,shadowSteps:30,shadowEvery:2},{scale:.8,shafts:!1,iterations:400,toSun:2,shadowSize:384,cascades:3,shadowSteps:40,shadowEvery:2},{scale:1,shafts:!0,iterations:500,toSun:2,shadowSize:512,cascades:3,shadowSteps:50,shadowEvery:1}],oo={...Wt[3],scale:.8,shadowSize:384,shadowSteps:40,shadowEvery:2,shaftStep:150},kt=new WeakMap;function io(i,e){kt.get(i)?.(typeof e=="number"?Wt[Math.max(0,Math.min(3,Math.round(e)))]:e)}const Gt=new WeakSet;function no(i,e){const t=i.effect,a=e.effect;!(t instanceof Ce)||!(a instanceof Ce)||(Gt.add(t),t.shadowPass.update=()=>{t.shadow.cascadeCount!==a.shadow.cascadeCount&&(t.shadow.cascadeCount=a.shadow.cascadeCount),t.shadow.mapSize.equals(a.shadow.mapSize)||t.shadow.mapSize.copy(a.shadow.mapSize);const o=t.shadowMaps.cascades,r=a.shadowMaps.cascades;for(let s=0;s<Math.min(o.length,r.length);s++)o[s].interval.copy(r[s].interval),o[s].matrix.copy(r[s].matrix),o[s].inverseMatrix.copy(r[s].inverseMatrix);t.shadowMaps._far=a.shadowMaps.far},t.shadowMaps.update=()=>{},Object.defineProperty(t.shadowPass,"outputBuffer",{get:()=>a.shadowPass.outputBuffer,configurable:!0}))}function so(i,e=Ra,t="high"){const a=new Ce(i);a.qualityPreset=t,a.localWeatherTexture=ge.shared(),a.shapeTexture=new Rr,a.shapeDetailTexture=new Or,a.turbulenceTexture=new Ir,a.stbnTexture=fa(),a.localWeatherRepeat.setScalar(Y);const o=new URLSearchParams(location.search);a.shadow.maxFar=o.has("smaxfar")?Number(o.get("smaxfar")):8e4;const r={coverage:e.coverage+.13,densityScale:e.densityScale??.18,shapeAlteringBias:.3,coverageFilterWidth:.6,cirrusDensity:.0025,skyLightScale:e.skyLightScale??1,groundBounceScale:1,powderScale:.8,lightShafts:!0,haze:!0,temporalUpscale:!0,reprojectionFix:!0,accumulate:!0,cumulusExponent:1.4,secondLayer:!0,minStepSize:50,accumulateAlpha:.1,accumulateGamma:1.5,groundShadows:!new URLSearchParams(location.search).has("noshadow"),shapeRepeat:5e-4,detailRepeat:.006,turbulence:600,perspectiveStepScale:1.01,maxIterations:500,anisotropy1:.7,anisotropy2:-.2,anisotropyMix:.5,hazeDensity:3e-5,hazeExponent:.001},s=e.look,l=e.style==="dramatic";if(s){for(const c of["densityScale","shapeAlteringBias","coverageFilterWidth","cumulusExponent","skyLightScale","groundBounceScale","powderScale","detailRepeat","turbulence","shapeRepeat"])s[c]!==void 0&&(r[c]=s[c]);s.anisotropy&&([r.anisotropy1,r.anisotropy2,r.anisotropyMix]=s.anisotropy),s.haze&&([r.hazeDensity,r.hazeExponent]=s.haze)}for(const[c,T]of new URLSearchParams(location.search)){const x=c.slice(2);c.startsWith("a_")&&x in r&&(r[x]=typeof r[x]=="boolean"?T!=="0":Number(T))}const u=()=>{const[c,T,x,A]=a.cloudLayers,z=e.top-e.base;c.set({channel:"r",altitude:e.base,height:z,densityScale:r.densityScale,shapeAmount:1,shapeDetailAmount:l?.55:1,weatherExponent:r.cumulusExponent,shapeAlteringBias:r.shapeAlteringBias,coverageFilterWidth:r.coverageFilterWidth,shadow:!0,densityProfile:{expTerm:0,exponent:0,linearTerm:.75,constantTerm:.25}});const R=e.strato;l&&R?T.set({channel:"a",altitude:R.base,height:R.top-R.base,densityScale:R.density,shapeAmount:1,shapeDetailAmount:1,weatherExponent:1.2,shapeAlteringBias:.45,coverageFilterWidth:.4,shadow:!0,densityProfile:{expTerm:0,exponent:0,linearTerm:.6,constantTerm:.45}}):T.set(R&&r.secondLayer?{channel:"a",altitude:R.base,height:R.top-R.base,densityScale:R.density,shapeAmount:1,shapeDetailAmount:1,weatherExponent:1.5,shapeAlteringBias:.6,coverageFilterWidth:.35,shadow:!0,densityProfile:{expTerm:0,exponent:0,linearTerm:.3,constantTerm:.6}}:{height:0});const L=e.alto;l&&L?x.set({channel:"b",altitude:L.base,height:L.top-L.base,densityScale:L.density,shapeAmount:1,shapeDetailAmount:1,weatherExponent:1.3,shapeAlteringBias:.6,coverageFilterWidth:.4,shadow:!0,densityProfile:{expTerm:0,exponent:0,linearTerm:.4,constantTerm:.5}}):x.set(L?{channel:"b",altitude:L.base,height:L.top-L.base,densityScale:L.density,shapeAmount:.7,shapeDetailAmount:.8,weatherExponent:1,shapeAlteringBias:.8,coverageFilterWidth:.6,shadow:!1,densityProfile:{expTerm:0,exponent:0,linearTerm:0,constantTerm:1}}:{height:0}),A.copy(G.DEFAULT)};u();const d=()=>{a.coverage=r.coverage,a.skyLightScale=r.skyLightScale,a.groundBounceScale=r.groundBounceScale,a.powderScale=r.powderScale,a.lightShafts=r.lightShafts,a.haze=r.haze,a.temporalUpscale=r.temporalUpscale,a.shapeRepeat.setScalar(r.shapeRepeat),a.shapeDetailRepeat.setScalar(r.detailRepeat),a.turbulenceDisplacement=r.turbulence,a.clouds.perspectiveStepScale=r.perspectiveStepScale,a.clouds.maxIterationCount=r.maxIterations,s&&(a.scatterAnisotropy1=r.anisotropy1,a.scatterAnisotropy2=r.anisotropy2,a.scatterAnisotropyMix=r.anisotropyMix,a.clouds.hazeDensityScale=r.hazeDensity,a.clouds.hazeExponent=r.hazeExponent),u()};d();const h=a;Vr(h),qr(h);const v=e.look?.footprintMip?{cloudPixelAngle:new n(.001),cloudWeatherTexelM:new n(10007e3/Y/ge.SIZE),cloudMipScale:new n(o.has("mipscale")?Number(o.get("mipscale")):1),cloudMipGain:new n(o.has("mipgain")?Number(o.get("mipgain")):.2)}:null;v&&Kr(h,v);const w=$r(h),f=jr(h),g=le==="lowres"||le==="fill"?new Hr:null;le&&!g&&Ur(h.cloudsPass.currentMaterial,h.cloudsPass.resolveMaterial,le);const S=new y;let E=!1;const F=new C;let ie=null;const N=new Br;{const c=new URLSearchParams(location.search);c.has("occludeNear")&&(N.occludeNear=Number(c.get("occludeNear")),N.occludeFar=N.occludeNear*2)}const Z={map:null};let I=null;const X=new Gr;{const c=a,T=c.setDepthTexture.bind(a),x=h.cloudsPass;c.setDepthTexture=(A,z)=>{I=A,T(A,z),x.setDepthTexture(X.target.texture,z)}}const ne={enabled:!0,id:"a",label:"takram three-clouds 0.7",effect:a,attach(c){ie=c,a.irradianceTexture=c.textures.irradianceTexture,a.scatteringTexture=c.textures.scatteringTexture,a.transmittanceTexture=c.textures.transmittanceTexture,a.singleMieScatteringTexture=c.textures.singleMieScatteringTexture??null,a.higherOrderScatteringTexture=c.textures.higherOrderScatteringTexture??null;const T=a.update.bind(a);a.update=(x,A,z)=>{if(!ne.enabled){c.aerial.overlay=null,c.aerial.shadow=null,c.aerial.shadowLength=null;return}c.timer.mark("clouds"),I&&(X.near=N.occludeNear,X.render(x,I,i)),v&&(v.cloudPixelAngle.value=2*Math.tan(i.fov*Math.PI/360)/Math.max(1,A?.height??x.domElement.height)),w(x),T(x,A,z);const R=a.atmosphereOverlay;if(R&&r.accumulate&&r.temporalUpscale){N.alpha=r.accumulateAlpha,N.gamma=r.accumulateGamma;const jt=h.cloudsPass.currentRenderTarget?.depthVelocity??null,Oe=h.cloudsPass.currentRenderTarget,we=h.cloudsPass.currentMaterial.uniforms,qt=Oe?.depthVelocity&&we?.targetUvScale&&we.temporalJitter?{color:Oe.texture,front:Oe.depthVelocity,surface:f,depth:X.target.texture,targetUvScale:we.targetUvScale.value,jitter:we.temporalJitter.value}:null;Z.map=N.render(x,R.map,jt,{texture:I,camera:i,march:qt}),c.aerial.overlay=Z}else c.aerial.overlay=R;const L=h.cloudsPass.currentRenderTarget?.texture;g&&R&&L&&(c.aerial.overlay=g.render(x,le,R.map,L,h.cloudsPass.resolveMaterial.uniforms.frame.value)),c.aerial.shadow=r.groundShadows?a.atmosphereShadow:null,c.aerial.shadowLength=a.atmosphereShadowLength,c.timer.mark("post")}},update({cameraWorld:c}){if(!ie)return;const T=c.y+Dt.origin.height,x=T>e.base-300&&T<e.top+300;if(a.clouds.minStepSize=x?Math.min(r.minStepSize,l?30:18):r.minStepSize,a.sunDirection.copy(ie.sunECEF),a.worldToECEFMatrix.copy(ie.worldToECEF),E&&r.reprojectionFix){const A=c.clone().sub(S);if(A.lengthSq()>0){F.makeTranslation(A.x,A.y,A.z),h.cloudsPass.currentMaterial.previousViewMatrix?.multiply(F);for(const z of h.shadowPass.currentMaterial.uniforms.reprojectionMatrices.value)z.multiply(F)}}S.copy(c),E=!0},resetHistory(){E=!1,N.reset(),be=!0},nearFieldFade(c,T){N.nearWeight=c,N.nearRange=T},frontDepth:()=>h.cloudsPass.currentRenderTarget?.depthVelocity??null,gui(c){c.add(r,"coverage",0,1,.01).onChange(d),c.add(r,"densityScale",0,1,.01).onChange(d),c.add(r,"shapeAlteringBias",0,1,.01).onChange(d),c.add(r,"coverageFilterWidth",0,1,.01).onChange(d),c.add(r,"cirrusDensity",0,.02,5e-4).onChange(d),c.add(r,"skyLightScale",0,3,.01).onChange(d),c.add(r,"groundBounceScale",0,3,.01).onChange(d),c.add(r,"powderScale",0,1,.01).onChange(d),c.add(r,"lightShafts").onChange(d),c.add(r,"haze").onChange(d),c.add(r,"temporalUpscale").onChange(d),c.add(r,"reprojectionFix"),c.add(r,"groundShadows"),c.add(r,"accumulate").name("overlay accumulation"),c.add(r,"accumulateAlpha",.02,1,.01)},stats:()=>({impl:"A takram"})};let se=null,W=1,Bt=0,be=!0;{const c=a,T=c.shadowPass.update.bind(c.shadowPass),x=c.shadowMaps.update.bind(c.shadowMaps);let A=!0;c.shadowMaps.update=(...z)=>{A=be||W<=1||++Bt%W===1%W,be=!1,A&&x(...z)},c.shadowPass.update=(...z)=>{A&&T(...z)}}const Vt=Object.fromEntries((o.get("cloudq")??"").split(",").filter(Boolean).map(c=>{const[T,x]=c.split(":");return[T,T==="shafts"||T==="accumulate"?x==="1"||x==="true":Number(x)]}));return kt.set(ne,c=>{if(c={...c,...Vt},se&&JSON.stringify(se)===JSON.stringify(c))return;se=c,Gt.has(a)&&(c={...c,shadowSize:a.shadow.mapSize.x,cascades:a.shadow.cascadeCount}),r.lightShafts=c.shafts,a.lightShafts=c.shafts,r.maxIterations=c.iterations,a.clouds.maxIterationCount=c.iterations,a.clouds.maxIterationCountToSun=c.toSun,a.resolutionScale=c.scale,a.shadow.mapSize.set(c.shadowSize,c.shadowSize),a.shadow.cascadeCount=c.cascades;const T=r.accumulate;r.accumulate=c.accumulate??!0,a.shadow.maxIterationCount=c.shadowSteps??50,a.clouds.minShadowLengthStepSize=c.shaftStep??50,W=Math.max(1,c.shadowEvery??1),r.accumulate&&!T&&N.reset()}),ne}export{oo as C,Ra as F,Y as W,ge as a,io as b,lt as c,Wt as d,te as e,nt as f,st as g,ao as h,ct as i,ro as j,so as k,no as l,to as s,me as w};
