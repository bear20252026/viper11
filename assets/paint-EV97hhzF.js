import{N as W0,c as C0,f as x0}from"./nations-Dd4_VpyO.js";import{l as B,p as m0,w as i0}from"./f16-CpBbns-k.js";import{r as _0,P as p,F as b,l as O,h as $,w as P0,W as N,S as b0,n as D,o as K0}from"./motion-usu7YCPa.js";import{K as G0,a3 as U0,q as V0,bi as Q0,L as L0,_ as J0,p as Y0,ae as w0}from"./three.module-9D8i-8qh.js";import{L as Z,i as H0,r as Z0}from"./paintkit-B10y6Ppt.js";const E0=["f16"],X0=t=>typeof t=="string"&&E0.includes(t),y0=["solid","split","stripe","chevron","pixel","tiger","splinter","sweep","tile"],tt=["gloss","satin","matte"],M0=["tr","fr","it","de","pl","ua","jp","nl","ie","at","be","se","fi","no","dk","gr","in","br"],ot=["tile","fin","nose","wing"],et=["chrome","metal","flake","pearl","glow","gloss"],$0=["base","accent","ink","second"],at=["lava","nebula","amethyst","abyss","storm","aurora","glitch","drip","koi","irezumi","wyrm","sakura","phoenix","comet","raijin","circuit"],st=["shark"],to="stock",nt=48,lt=/^p:[a-z0-9-]{1,32}$/,it=/^s:[a-z0-9-]{1,32}$/,ct=/^c:[a-z0-9]{16,40}$/;function oo(t){if(!(typeof t!="string"||t.length>nt))return lt.test(t)||ct.test(t)||it.test(t)?t:void 0}const eo=t=>!!t&&t.startsWith("c:"),ao=t=>!!t&&t.startsWith("s:"),rt=/^#[0-9a-f]{6}$/,V=t=>{if(typeof t!="string")return null;let a=t.trim().toLowerCase();return/^[0-9a-f]{6}$/.test(a)&&(a=`#${a}`),/^#[0-9a-f]{3}$/.test(a)&&(a=`#${a[1]}${a[1]}${a[2]}${a[2]}${a[3]}${a[3]}`),rt.test(a)?a:null};function so(t,a={}){const e=[],o=t&&typeof t=="object"?t:{},l=a.jet??(X0(o.jet)?o.jet:null);l||e.push(`jet: one of ${E0.join(", ")}`);const i=o.colors&&typeof o.colors=="object"?o.colors:{},s=V(i.base),n=V(i.accent),c=V(i.ink),r=i.second===void 0||i.second===null?void 0:V(i.second);s||e.push("colors.base: #rrggbb"),n||e.push("colors.accent: #rrggbb"),c||e.push("colors.ink: #rrggbb"),r===null&&e.push("colors.second: #rrggbb or none");const h=y0.includes(String(o.pattern))?o.pattern:null;h||e.push(`pattern: one of ${y0.join(", ")}`);const f=tt.includes(String(o.finish))?o.finish:"satin",m={jet:l??"f16",colors:{base:s??"#000000",accent:n??"#ffffff",ink:c??"#ffffff",...r?{second:r}:{}},pattern:h??"solid",finish:f};if(o.tail===!0&&(m.tail=!0),o.flag!==void 0&&o.flag!==null&&o.flag!==""&&o.flag!=="none"&&(M0.includes(String(o.flag))?m.flag=o.flag:e.push(`flag: one of ${M0.join(", ")} or none`)),(o.belly==="hatch"||o.belly==="crescent")&&(m.belly=o.belly),m.belly==="crescent"&&m.flag!=="tr"&&(m.belly="hatch"),(o.radome==="grey"||o.radome==="base")&&(m.radome=o.radome),typeof o.tileM=="number"&&Number.isFinite(o.tileM)&&(m.tileM=Math.min(8,Math.max(1.5,o.tileM))),o.art&&typeof o.art=="object"&&a.allowArt){const d={};for(const u of ot){const g=o.art[u];typeof g=="string"&&g.length<=2048&&a.allowArt(u,g)&&(d[u]=g)}Object.keys(d).length&&(m.art=d)}if(a.premium){if(o.mat&&typeof o.mat=="object"){const d={};for(const u of $0){const g=o.mat[u];et.includes(String(g))&&(d[u]=g)}Object.keys(d).length&&(m.mat=d)}typeof o.wear=="number"&&Number.isFinite(o.wear)&&o.wear>0&&(m.wear=Math.min(1,o.wear)),st.includes(String(o.nose))&&(m.nose=o.nose),at.includes(String(o.motion))&&(m.motion=o.motion),o.comic===!0&&(m.comic=!0),typeof o.studio=="string"&&/^[a-z0-9-]{1,32}$/.test(o.studio)&&(m.studio=o.studio)}return a.nations&&typeof o.nation=="string"&&W0.includes(o.nation)&&(m.nation=o.nation),m.pattern==="tile"&&!m.art?.tile&&(m.pattern="solid"),(h==="splinter"||h==="sweep")&&!m.colors.second&&(m.colors.second=ft(m.colors.base,m.colors.accent)),{ok:e.length?null:m,errors:e}}function ft(t,a){const e=parseInt(t.slice(1),16),o=parseInt(a.slice(1),16),l=i=>Math.round(((e>>i&255)+(o>>i&255))/2);return`#${[16,8,0].map(i=>l(i).toString(16).padStart(2,"0")).join("")}`}const ht=t=>JSON.stringify([t.jet,t.colors.base,t.colors.accent,t.colors.ink,t.colors.second??"",t.pattern,t.finish,t.tail??!1,t.flag??"",t.belly??"",t.radome??"",t.tileM??0,t.art??{},...t.mat||t.wear||t.nose?[$0.map(a=>t.mat?.[a]??""),t.wear??0,t.nose??""]:[],...t.motion?[`motion:${t.motion}`]:[],...t.nation?[`nation:${t.nation}`]:[],...t.comic?["comic"]:[],...t.studio?[`studio:${t.studio}`]:[]]),R=(t,a,e)=>{const o=Math.min(1,Math.max(0,(e-t)/(a-t)));return o*o*(3-2*o)},X=t=>{const a=Math.sin(t*127.1+311.7)*43758.5453;return a-Math.floor(a)},pt=`
vec3 moFire(float h) {
  return vec3(0.9, 0.12, 0.01) * smoothstep(0.0, 0.35, h) + vec3(0.1, 0.38, 0.06) * smoothstep(0.25, 0.9, h) + vec3(0.0, 0.25, 0.4) * smoothstep(0.85, 1.6, h);
}
MoOut moEval(MoIn i, MoOut o) {
  vec3 p = i.p;
  float pw = uMoIn.x, ab = smoothstep(0.8, 1.0, pw), night = uMoIn.w, flow = uMoAux.x;
  // the crust's plates: cells warped by a slow field so no two are alike (no honeycomb)
  vec4 warp = moN(p * 0.045 + 0.13);
  vec3 wq = p * 0.17 + (warp.rgb - 0.5) * 0.22;
  vec4 c = moN(wq);
  vec4 big = moN(p * 0.035 + vec3(0.0, 0.0, -flow * 0.0025));     // where the crust has opened: rivers, creeping aft
  vec4 f = moN(vec3(p.x * 0.24, p.y * 0.24, (p.z - flow) * 0.11));    // the melt itself, flowing aft
  float river = smoothstep(0.54, 0.76, big.g);
  // cracks: thin where the crust is thick, opening toward the rivers, wider with power
  float w = (0.018 + 0.03 * c.a * c.a) * (1.0 + 0.8 * pw + 1.4 * ab) + 0.3 * river + 0.05 * smoothstep(0.4, 0.8, warp.a);
  float crack = 1.0 - smoothstep(0.0, w, c.b);
  float fine = 0.0, grain = 0.5;
#if MO_Q > 0
  vec4 c2 = moN(wq * 3.1 + vec3(0.31, 0.17, 0.53));               // the fracture between the plates' own cracks
  fine = (1.0 - smoothstep(0.0, 0.03 + 0.03 * pw, c2.b)) * smoothstep(0.45, 0.85, f.r + river * 0.6 + (1.0 - smoothstep(0.0, 0.25, c.b)) * 0.4);
  grain = c2.r;
#endif
  float molten = max(crack, fine * 0.7);
  float pulse = 0.72 + 0.28 * sin((p.z - flow * 1.6) * 1.1 + f.b * 3.0);   // waves of heat running aft
  float heat = molten * (0.35 + 0.9 * f.g) * pulse * (0.65 + 0.5 * pw + 0.8 * ab) * (1.0 + 0.6 * river) * (1.0 + 0.45 * uMoAux.y);
  float near = 1.0 - smoothstep(0.0, 0.3, c.b);
  vec3 crust = vec3(0.028, 0.025, 0.024) * (0.55 + 1.1 * grain) * (0.8 + 0.4 * warp.b);
  o.alb = mix(crust, vec3(0.1, 0.02, 0.0), molten);
  o.rough = mix(0.62, 0.45, molten);
  o.metal = 0.0;
  o.sheen = 0.0; o.coat = 0.2; o.spec = 0.45;
  float gain = mix(4.2, 3.8, night);
  // the melt's light, and its glow on the crust round it (the plates lit from their cracks)
  o.emit = moFire(heat * 1.3) * heat * gain + vec3(0.9, 0.16, 0.02) * near * near * (1.0 - molten) * (0.025 + 0.03 * pw + 0.06 * ab) * gain;
  // plates domed in their middles, sinking to the cracks
  o.N = moBumpH(i, o.N, smoothstep(0.0, 0.45, c.b) * 0.015 + grain * 0.003);
#if MO_Q > 0
  // embers: sparks riding the airflow off the melt, more in burner
  {
    vec3 q = (p - vec3(0.0, 0.0, flow * 3.5)) * vec3(7.0, 7.0, 2.2);
    vec3 cell = floor(q); vec3 h3 = moH3(cell);
    float on = step(0.975 - 0.03 * ab, h3.x) * smoothstep(0.2, 0.7, near + river);
    vec3 d = (fract(q) - (0.25 + 0.5 * h3)) / vec3(7.0, 7.0, 2.2);
    float r = 0.01 + 0.01 * h3.y, pix = moPix(i);
    float s = on * smoothstep(max(r, pix), 0.0, length(d)) * min(1.0, r / max(pix, 1e-4));
    o.emit += vec3(1.0, 0.42, 0.08) * s * (2.0 + 5.0 * ab) * gain * (0.6 + 0.4 * sin(uMoT * 9.0 + h3.z * 40.0));
  }
#endif
  return o;
}`,mt=`
vec3 moNeb(vec3 q, float t, float k, float sw) {
  vec4 a = moN(q * 0.06 + vec3(t * 0.0035, 0.0, -t * 0.006));
  // (a pull swirls it: the warp between the layers deepens, its inner layer turning against the outer)
  vec4 b = moN(q * 0.19 + (a.rgb - 0.5) * (0.4 + 0.55 * sw) + vec3(sw * 0.08 * sin(t * 0.05), t * 0.004, -sw * 0.08 * cos(t * 0.05)));
  float d = smoothstep(0.5, 0.9, a.r * 0.62 + b.g * 0.55);
  float dust = smoothstep(0.55, 0.75, b.r) * d;                         // dark lanes through it
  float fil = smoothstep(0.55, 0.9, 1.0 - abs(b.b - 0.5) * 2.0) * d;   // brighter wisps inside the cloud
  float core = smoothstep(0.7, 0.95, a.r * 0.62 + b.g * 0.55);           // a glowing heart where it's densest
  vec3 tint = mix(vec3(0.9, 0.1, 0.55), vec3(0.06, 0.62, 0.75), smoothstep(0.38, 0.72, a.g + k * 0.15));
  tint = mix(tint, vec3(0.38, 0.14, 0.95), smoothstep(0.5, 0.82, a.b));
  return (tint * (d * d * 0.4 + fil * 0.25) + mix(tint, vec3(1.0, 0.85, 0.95), 0.5) * core * 0.35) * (1.0 - 0.75 * dust);
}
float moStars(MoIn i, vec3 q, float g, float t, out vec3 tint) {
  vec3 cell = floor(q / g); vec3 h = moH3(cell);
  tint = mix(vec3(0.7, 0.8, 1.0), vec3(1.0, 0.85, 0.7), h.z);
  if (h.x < 0.7) return 0.0;
  vec3 c = (cell + 0.25 + 0.5 * moH3(cell + 17.0)) * g;
  float d = length(q - c);
  float r = g * (0.025 + 0.05 * h.y * h.y), pix = moPix(i) * 0.7;
  float re = max(r, pix);
  float tw = 0.5 + 0.5 * sin(t * (1.5 + 4.0 * h.z) + h.y * 40.0);
  float big = smoothstep(0.97, 1.0, h.x);
  return (smoothstep(re, 0.0, d) * (r * r) / (re * re) * 5.0 * (0.6 + 0.4 * tw) + big * exp(-d / (r * 3.0)) * 0.6 * tw);
}
MoOut moEval(MoIn i, MoOut o) {
  vec3 p = i.p, Vo = i.Vo;
  // t: the stars' twinkle (time); dr: the clouds' drift (its own clock, quicker with speed, g and the burner); sw the pull
  float t = uMoT, night = uMoIn.w, dr = uMoAux.x, sw = uMoAux.z;
  // the skin is glass over deep space: what's drawn sits behind it along the eye's ray (the parallax)
  vec3 col = vec3(0.0015, 0.001, 0.006);
  vec3 st; float s;
#if MO_Q > 0
  // (deeper layers than before: more parallax as the view moves, the far cloud drifting slower than the near)
  col += moNeb(p - Vo * 2.6, dr * 0.7, 1.0, sw) * 0.55;
  col += moNeb(p - Vo * 0.7 + 3.7, dr, 0.0, sw);
  s = moStars(i, p - Vo * 3.6, 0.3, t, st); col += st * s * 0.5;
  s = moStars(i, p - Vo * 0.9 + 1.3, 0.2, t, st); col += st * s;
#else
  col += moNeb(p, dr, 0.0, sw) * 1.2;
  s = moStars(i, p, 0.2, t, st); col += st * s;
#endif
  // a meteor now and then: a streak along the jet on one face (top / left / right), ~1.2 s
  {
    float per = 4.4, ev = floor(t / per), u = (t - ev * per) / 1.2;
    vec3 h = moH3(vec3(ev, 3.0, 9.0));
    if (u < 1.0 && h.x > 0.2) {
      float face = floor(h.y * 3.0);
      float wTop = moTopW(i.n) * step(0.0, i.n.y);
      float wF = face < 0.5 ? wTop : (1.0 - moTopW(i.n)) * step(0.0, face < 1.5 ? -i.n.x : i.n.x);
      vec2 c = face < 0.5 ? vec2(p.z, p.x) : vec2(p.z, p.y);
      float l0 = face < 0.5 ? (h.z - 0.5) * 2.4 : 1.6 + h.z * 1.4;
      float slope = (moH(vec3(ev, 5.0, 1.0)) - 0.5) * 0.25;
      float zh = mix(-9.5, 7.0, u);
      float along = zh - c.x, lat = abs(c.y - (l0 + slope * (c.x + 9.5)));
      float k = step(0.0, along) * exp(-along / 1.6) * exp(-lat * lat / 0.0012) * sin(u * 3.14159);
      col += vec3(0.75, 0.88, 1.0) * k * wF * 3.0;
    }
  }
  o.alb = vec3(0.004, 0.003, 0.008);
  o.rough = 0.12;
  o.metal = 0.0;
  o.sheen = 0.0; o.coat = 0.6;
  // a pull or the burner brightens the clouds a little
  o.emit = col * mix(3.2, 2.6, night) * (1.0 + 0.45 * sw + 0.3 * smoothstep(0.8, 1.0, uMoIn.x));
  return o;
}`,dt=`
// 3D cells, exact: the nearest site (its id and the distance to the wall with the next): x F1, y edge, zw unused
vec3 moCells(vec3 q, out vec3 id) {
  // (the 2x2x2 cells nearest the point, sites kept in the middle half of their cell: 8 lookups, not 27)
  vec3 b = floor(q), f = q - b;
  float f1 = 9.0, f2 = 9.0; id = b;
  vec3 o0 = step(0.5, f) - 1.0;
  for (int z = 0; z <= 1; z++) for (int y = 0; y <= 1; y++) for (int x = 0; x <= 1; x++) {
    vec3 g = vec3(float(x), float(y), float(z)) + o0;
    vec3 r = g + 0.25 + 0.5 * moH3(b + g) - f;
    float d = dot(r, r);
    if (d < f1) { f2 = f1; f1 = d; id = b + g; } else if (d < f2) f2 = d;
  }
  return vec3(sqrt(f1), sqrt(f2) - sqrt(f1), 0.0);
}
MoOut moEval(MoIn i, MoOut o) {
  vec3 p = i.p, Vo = i.Vo;
  float t = uMoT, night = uMoIn.w, pix = moPix(i);
  vec4 big = moN(p * 0.045 + 0.21);
  // crystals: cells ~0.45 m, each a facet with its own tilt and colour
  vec3 id;
  vec3 cq = p * 2.2 + (big.rgb - 0.5) * 0.8;
  vec3 c = moCells(cq, id);
  vec3 hh = moH3(id + 31.0);
  float h = hh.x;
  vec3 g = (moH3(id + 7.0) - 0.5) * 0.9;
  float crystal = smoothstep(0.3, 0.38, big.r);
  vec3 deep = vec3(0.05, 0.008, 0.13), mid = vec3(0.26, 0.06, 0.5), pale = vec3(0.72, 0.6, 0.92);
  vec3 cc = mix(deep, mid, smoothstep(0.0, 0.75, h));
  cc = mix(cc, pale, smoothstep(0.9, 1.0, h) * 0.5);
  // growth zones inside each crystal: soft bands along its own axis (faded where a pixel covers several)
  float zf = 14.0;
  float zone = 0.5 + 0.5 * sin(dot(p, normalize(g + vec3(0.2, 0.3, 0.1))) * zf + hh.y * 30.0);
  zone = mix(0.5, zone, 1.0 - smoothstep(0.04, 0.12, pix * zf));
  cc *= 0.7 + 0.5 * zone;
  // toward its point the crystal clears and pales (a geode's, end-on)
  cc = mix(cc, mid * 1.6 + 0.05, (1.0 - smoothstep(0.0, 0.45, c.x)) * 0.4);
  float bf = 7.0;
  float band = 0.5 + 0.5 * sin((big.g * 3.0 + big.b * 1.5) * bf * 3.14159);
  band = mix(0.5, band, 1.0 - smoothstep(0.05, 0.2, pix * bf));
  vec3 ag = mix(vec3(0.16, 0.13, 0.22), vec3(0.5, 0.44, 0.6), band);
  float ew = max(0.03, pix * 2.2 * 1.5);
  float edge = (1.0 - smoothstep(0.0, ew, c.y)) * (1.0 - smoothstep(0.1, 0.3, pix * 2.2));
  o.alb = mix(ag, cc, crystal);
  o.alb = mix(o.alb, pale * 0.7, edge * crystal * 0.35);
  o.rough = mix(0.2, 0.06, crystal);
  o.metal = 0.0;
  o.sheen = 0.0; o.coat = 1.2;
  // each facet its own tilt (the sun and the sky glint off it as the view moves); agate stays smooth
  o.N = moBump(i, o.N, g * crystal);
  vec3 e = vec3(0.0);
  float sweepZ = mod(uMoAux.x * 2.6, 26.0) - 11.0;               // a sweep of light nose to tail (~7 s; quicker pulling)
  float sweep = exp(-pow((p.z - sweepZ - p.y * 0.4) / 1.1, 2.0));
#if MO_Q > 0
  // inner facets seen through the surface (they slide against it with the view: the refraction)
  vec4 ci = moN((p - Vo * 0.2) * 0.5 + 0.37);
  float inner = 1.0 - smoothstep(0.0, 0.05, ci.b);
  float look = pow(abs(dot(Vo, normalize(vec3(fract(ci.a * 5.3), fract(ci.a * 9.1), fract(ci.a * 3.7)) - 0.5))), 8.0);
  e += mix(mid, pale, 0.6) * inner * (0.02 + 0.5 * look) * crystal;
  // glitter: tiny cells, each a mirror of its own (bright only when it faces between the eye and the sky)
  {
    vec3 q = p * 40.0; vec3 cell = floor(q); vec3 h3 = moH3(cell);
    vec3 m = normalize(h3 - 0.5 + i.n * 0.8);
    float gp = pix * 40.0;
    float gl = pow(max(0.0, dot(normalize(Vo + vec3(0.0, 1.0, 0.0)), m)), 120.0) * step(0.55, h3.z) * (1.0 - smoothstep(0.6, 1.6, gp));
    e += vec3(1.0, 0.95, 1.0) * gl * 3.0;
  }
#endif
  // the sweep lights the crystals from inside: their edges, their points
  e += pale * sweep * (0.06 + 1.2 * edge + 0.5 * (1.0 - smoothstep(0.0, 0.4, c.x))) * crystal + vec3(0.7, 0.6, 0.9) * sweep * 0.08 * (1.0 - crystal);
#if MO_Q > 0
  // thin-film colour at grazing angles on the facets
  float nv = clamp(dot(i.N, i.V), 0.0, 1.0);
  vec3 film = 0.5 + 0.5 * cos(6.28318 * (nv * 1.4 + h + vec3(0.0, 0.33, 0.67)));
  o.alb = mix(o.alb, o.alb * 0.6 + film * 0.2, crystal * pow(1.0 - nv, 2.0));
#endif
  // after dark the crystals hold a little light of their own, their points and edges most; a pull lights them up
  o.emit = e * mix(1.6, 2.2, night) * (1.0 + 0.5 * uMoAux.z) + (cc * 0.16 + pale * 0.2 * edge + mid * 0.28 * (1.0 - smoothstep(0.0, 0.45, c.x))) * crystal * night;
  return o;
}`,ut=`
MoOut moEval(MoIn i, MoOut o) {
  vec3 p = i.p, n = i.n;
  // (the water's own clock: quicker with airspeed and the burner)
  float t = uMoAux.x, night = uMoIn.w;
  float up = smoothstep(-0.7, 0.9, n.y);
  vec3 deep = vec3(0.001, 0.01, 0.04), shallow = vec3(0.006, 0.13, 0.22);
  vec3 col = mix(deep, shallow, up * (0.5 + 0.5 * smoothstep(1.2, 3.4, p.y)));
  // caustics: light through a moving surface overhead, falling straight down (the sides take it as long ripples);
  // the surface's slow swell warps them
  vec2 cq = vec2(p.x, p.z);
  vec4 sw = moN(vec3(cq * 0.04, t * 0.008 + 0.3));
  cq += (sw.rg - 0.5) * 2.2;
  float c1 = moN(vec3(cq * 0.15, t * 0.03)).b;
  float k1 = 1.0 - smoothstep(0.0, 0.15, c1);
  float caus = k1 * k1;
#if MO_Q > 0
  float c2 = moN(vec3(cq * 0.205 + 0.43, t * 0.041 + 0.5)).b;
  float k2 = 1.0 - smoothstep(0.0, 0.12, c2);
  caus = k1 * k1 * 0.55 + k2 * k2 * 0.45 + k1 * k2 * 1.6;
#endif
  caus *= 0.55 + 0.9 * sw.b;
  float fall = smoothstep(-0.35, 0.85, n.y) * (0.55 + 0.45 * smoothstep(1.0, 3.5, p.y));
  vec3 cc = vec3(0.4, 0.9, 1.0);
  vec3 e = cc * caus * fall * 0.9;
  // shafts of light slanting down, drifting
  float shaft = moN(vec3(p.x * 0.06 + p.y * 0.035, p.z * 0.035 - p.y * 0.02, t * 0.006)).r;
  e += vec3(0.08, 0.38, 0.5) * smoothstep(0.55, 0.8, shaft) * 0.18 * up;
#if MO_Q > 0
  // bubbles rising and swept aft
  {
    vec3 q = (p + vec3(0.0, -t * 0.22, -t * 0.4)) * 2.6;
    vec3 cell = floor(q); vec3 h3 = moH3(cell);
    vec3 d = (fract(q) - (0.3 + 0.4 * h3)) / 2.6;
    float r = 0.012 + 0.03 * h3.y * h3.y, dl = length(d), pix = moPix(i);
    float ring = smoothstep(r + pix, r, dl) * smoothstep(r * 0.55 - pix, r, dl) * step(0.9, h3.x);
    float glint = smoothstep(r * 0.35, 0.0, length(d - vec3(-0.35, 0.35, 0.0) * r)) * step(0.9, h3.x);
    e += vec3(0.6, 0.95, 1.0) * (ring * 0.8 + glint * 1.6) * min(1.0, r / max(pix, 1e-4));
  }
#endif
  o.alb = col + cc * caus * fall * 0.1;
  o.rough = 0.14;
  o.metal = 0.0;
  o.sheen = 0.0; o.coat = 2.0;
  o.emit = e * mix(2.4, 2.2, night) * (1.0 + 0.4 * uMoAux.z) + col * 0.15 * night;
  return o;
}`,gt=`
// a jagged line: piecewise-straight zigzag (bilinear white noise along a row), three octaves, metres
float moJag(float x, float seed) {
  float r = (floor(seed * 200.0) + 0.5) / 256.0;
  return (moW(vec2(x * 1.1 / 256.0, r)).r - 0.5) * 0.9 + (moW(vec2(x * 3.2 / 256.0, r + 0.27)).g - 0.5) * 0.32 + (moW(vec2(x * 9.0 / 256.0, r + 0.53)).b - 0.5) * 0.1;
}
float moBolt(vec2 c, float x0, float x1, float lat, float w, float glow) {
  float u = (c.x - x0) / (x1 - x0);
  float d = abs(c.y - lat);
  float m = smoothstep(-0.03, 0.03, u) * smoothstep(1.0, 0.85, u);
  float ww = w * mix(1.0, 0.45, clamp(u, 0.0, 1.0));
  return m * (smoothstep(ww, ww * 0.25, d) * 2.6 + glow * exp(-d / 0.12) + glow * 0.25 * exp(-d / 0.5));
}
MoOut moEval(MoIn i, MoOut o) {
  vec3 p = i.p, n = i.n;
  // t: the cloud's churn (its own clock: quicker with g and the burner)
  float t = uMoAux.w, night = uMoIn.w, gk = uMoAux.z;
  // the cloud: billows drifting aft
  vec3 q = p * 0.12 + vec3(0.0, 0.0, -t * 0.02);
  vec4 a = moN(q);
  float dens = a.r, b2 = 0.5;
#if MO_Q > 0
  vec4 b = moN(q * 2.6 + (a.rgb - 0.5) * 0.25);
  dens = a.r * 0.62 + b.g * 0.55 - 0.08;
  b2 = moN(q * 6.0 + 0.3).r;    // the puffs' cauliflower edges
  dens += (b2 - 0.5) * 0.18;
#endif
  float bill = smoothstep(0.4, 0.78, dens);
  // the thunderhead: near-black slate in the gaps, billows lit grey-blue on their tops, a bruised violet in places
  // the thunderhead: a dark blue-slate, cumulus puffs lit white on their tops and edges, a bruised violet in places
  float puff = smoothstep(0.45, 0.72, dens);
  float lit = puff * smoothstep(-0.3, 0.8, n.y * 0.6 + 0.4 + (b2 - 0.5));
  vec3 col = mix(vec3(0.012, 0.016, 0.03), vec3(0.04, 0.05, 0.08), bill);
  col = mix(col, vec3(0.42, 0.44, 0.5), lit * lit);
  col = mix(col, vec3(0.07, 0.045, 0.13), smoothstep(0.55, 0.8, a.g) * 0.6 * (1.0 - lit));
  o.alb = col;
  o.rough = 0.6;
  o.metal = 0.0;
  o.sheen = 0.0; o.coat = 0.5; o.spec = 0.6;
  o.N = moBumpH(i, o.N, bill * 0.02);
  vec3 e = vec3(0.0);
  float flash = uMoFx.y * uMoFx.x;
  // the strike: a bolt with two forks on one face of the jet, chosen per strike (uMoFx.z its seed, .w the face)
  if (flash > 0.01) {
    float seed = uMoFx.z, face = uMoFx.w;
    float wTop = moTopW(n);
    float wF = face < 0.5 ? wTop * step(0.0, n.y) : face < 2.5 ? (1.0 - wTop) * step(0.0, face < 1.5 ? -n.x : n.x) : wTop * step(n.y, 0.0);
    vec2 c = (face < 0.5 || face > 2.5) ? vec2(p.z, p.x) : vec2(p.z, p.y);
    vec3 h = moH3(vec3(seed * 91.0, 1.0, 2.0));
    float x0 = -9.0 + h.x * 3.5, x1 = 2.0 + h.y * 4.5;
    float l0 = (face < 0.5 || face > 2.5) ? (h.z - 0.5) * 0.8 : 1.9 + h.z * 0.9;
    float main = l0 + (c.x - x0) * (h.y - 0.5) * 0.12 + moJag(c.x, seed);
    float k = moBolt(c, x0, x1, main, 0.04, 0.6);
    float xf = mix(x0, x1, 0.25 + 0.3 * h.x), xf2 = mix(x0, x1, 0.55 + 0.2 * h.z);
    float s1 = (face < 0.5 || face > 2.5) ? 0.9 + h.z : -(0.25 + 0.3 * h.y), s2 = (face < 0.5 || face > 2.5) ? -(0.8 + h.x) : 0.3 + 0.3 * h.x;
    float f1 = main + (c.x - xf) * s1 + moJag(c.x * 1.3, seed + 0.31) * 0.6;
    float f2 = main + (c.x - xf2) * s2 + moJag(c.x * 1.4, seed + 0.57) * 0.6;
    k += moBolt(c, xf, xf + 3.2 + 2.0 * h.y, f1, 0.022, 0.4) * step(xf, c.x);
    k += moBolt(c, xf2, xf2 + 2.4 + 1.6 * h.x, f2, 0.018, 0.35) * step(xf2, c.x);
    vec3 bc = mix(vec3(0.55, 0.45, 1.0), vec3(1.0), smoothstep(1.5, 2.6, k));
    e += bc * k * wF * flash * 7.0;
    // the flash lights the cloud from inside: near the bolt most, the whole jet a little
    float near = exp(-abs(c.y - main) / 1.3) * wF;
    e += vec3(0.42, 0.4, 0.72) * flash * (0.04 + 0.4 * near) * (0.2 + bill);
  }
#if MO_Q > 0
  // crackle under g: short arcs flickering over the skin
  if (gk > 0.02) {
    float wTop = moTopW(n);
    vec2 c = mix(vec2(p.z, p.y), vec2(p.z, p.x), step(0.5, wTop)) * 1.6;
    vec2 cell = floor(c), f = fract(c);
    float slot = floor(uMoAux.y * 9.0);
    float hc = moH(vec3(cell, slot));
    float on = step(1.0 - 0.22 * gk, hc);
    float lat = 0.5 + moJag(f.x * 2.5 + hc * 50.0, hc) * 0.35;
    float d = abs(f.y - lat);
    float span = smoothstep(0.1, 0.3, f.x) * smoothstep(0.9, 0.7, f.x);
    float arc = on * span * (smoothstep(0.012, 0.0, d) + 0.35 * exp(-d / 0.05));
    float fl = 0.5 + 0.5 * sin(uMoAux.y * 70.0 + hc * 20.0);
    e += vec3(0.55, 0.6, 1.0) * arc * (1.5 + 3.0 * gk) * fl * uMoFx.x;
  }
#endif
  // the cloud lit from within: slow pulses of distant lightning wandering through it (mostly seen at night)
  float glowT = moN(vec3(p.x * 0.05 + t * 0.07, p.z * 0.05, t * 0.11)).r;
  float pulse = smoothstep(0.62, 0.8, glowT) * (0.6 + 0.4 * sin(uMoT * 23.0 + p.z));
  e += vec3(0.32, 0.3, 0.55) * bill * (0.05 + 0.6 * pulse) * (0.15 + night) * uMoFx.x;
  e += col * 0.18 * night;
  o.emit = e * mix(1.0, 1.5, night);
  return o;
}`,vt=`
float moCurtain(vec2 c, float t, float base, float seed, out float s) {
  float x = c.x;
  // the curtain's fold: slow waves travelling along it, and a ripple running through
  float line = base + 0.55 * sin(x * 0.26 + t * 0.16 + seed) + 0.28 * sin(x * 0.67 - t * 0.23 + seed * 2.0) + 0.08 * sin(x * 2.1 - t * 0.9 + seed);
  s = c.y - line;
  // the rays: thin vertical striations drifting along the curtain
  float rays = moN(vec3(x * 0.3 + seed - t * 0.012, 0.37 + seed * 0.1, s * 0.03 + t * 0.006)).r;
  float rays2 = moN(vec3(x * 0.9 + seed * 2.0 + t * 0.02, 0.71 + s * 0.02, t * 0.01)).g;
  float r = smoothstep(0.3, 0.85, rays) * (0.45 + 0.8 * smoothstep(0.35, 0.8, rays2));
  // bright lower hem, fading upward, a dark gap under it; the curtain's height varies along it
  float tall = 0.3 + 0.45 * moN(vec3(x * 0.08 + seed, 0.2, t * 0.004)).b;
  float prof = smoothstep(-0.04, 0.02, s) * (exp(-max(s, 0.0) / tall) * 0.8 + 0.6 * exp(-max(s, 0.0) / 0.1));
  return prof * r;
}
MoOut moEval(MoIn i, MoOut o) {
  vec3 p = i.p, n = i.n;
  // (the curtains' own clock: quicker on a pull)
  float t = uMoAux.x, night = uMoIn.w;
  float wTop = moTopW(n);
  vec2 cs = vec2(p.z, p.y), ct = vec2(p.z, abs(p.x));
  vec3 e = vec3(0.0);
  float s;
  // the curtains on the sides (rising up the fuselage and the fin) and over the top (out along the wings)
  float k = moCurtain(cs, t, 1.5, 0.0, s);
  vec3 cA = mix(vec3(0.08, 1.0, 0.42), vec3(0.6, 0.12, 0.95), smoothstep(0.25, 1.5, s));
  e += cA * k * (1.0 - wTop);
  float k2 = moCurtain(ct, t * 0.9, 0.7, 3.1, s);
  vec3 cB = mix(vec3(0.1, 1.0, 0.5), vec3(0.72, 0.15, 0.85), smoothstep(0.25, 1.6, s));
  e += cB * k2 * wTop * step(0.0, n.y);
#if MO_Q > 0
  float k3 = moCurtain(cs + vec2(4.0, 0.0), t * 1.1, 2.75, 6.2, s);
  e += mix(vec3(0.12, 0.85, 0.6), vec3(0.85, 0.2, 0.65), smoothstep(0.1, 1.3, s)) * k3 * 0.55 * (1.0 - wTop);
  // stars behind
  {
    vec3 q = p * 7.0; vec3 cell = floor(q); vec3 h3 = moH3(cell);
    float d = length(fract(q) - (0.3 + 0.4 * h3)) / 7.0, r = 0.007, pix = moPix(i);
    e += vec3(0.8, 0.85, 1.0) * step(0.9, h3.x) * smoothstep(max(r, pix), 0.0, d) * min(1.0, r / max(pix, 1e-4)) * (0.55 + 0.45 * sin(t * 3.0 + h3.y * 30.0)) * 1.2;
  }
#endif
  o.alb = mix(vec3(0.003, 0.005, 0.022), vec3(0.008, 0.014, 0.045), smoothstep(-0.5, 0.8, n.y));
  o.rough = 0.2;
  o.metal = 0.0;
  o.sheen = 0.0; o.coat = 2.0;
  o.emit = e * mix(1.6, 2.4, night) * (1.0 + 0.45 * uMoAux.z);
  return o;
}`,xt=`
vec3 moGlitchAt(vec3 p) {
  vec3 c1 = floor(p / 0.12), c2 = floor(p / 0.36), c3 = floor(p / 1.08);
  // digital camo: three sizes of pixel, dark greys
  float g = moH(c1) * 0.35 + moH(c2) * 0.4 + moH(c3) * 0.25;
  vec3 col = vec3(0.02 + 0.2 * g * g * g * 2.0) * vec3(0.92, 0.95, 1.0);
  // neon clusters: a slow field, quantized to the pixels
  float m = moN(c2 * 0.36 * 0.06 + 0.5).r + (moH(c1 + 3.0) - 0.5) * 0.14;
  float acc = smoothstep(0.62, 0.64, m);
  float which = step(0.5, moN(c3 * 1.08 * 0.05 + 0.2).g);
  vec3 neon = mix(vec3(1.0, 0.05, 0.75), vec3(0.0, 0.85, 1.0), which);
  col = mix(col, neon * (0.45 + 0.55 * moH(c1 + 11.0)), acc);
  // a few white pixels
  col = mix(col, vec3(0.85), step(0.994, moH(c1 + 5.0)));
  return col;
}
MoOut moEval(MoIn i, MoOut o) {
  vec3 p = i.p;
  float t = uMoT, night = uMoIn.w, burst = uMoFx.y;
  float slot = floor(t * 8.0);
  // datamosh: rows of the pattern slip along the jet (a few at a time; many in a burst)
  float row = floor(p.y / 0.12) + floor(p.x / 0.72) * 37.0;
  float hr = moH(vec3(row, slot, 1.0));
  float on = step(1.0 - (0.05 + 0.45 * burst), hr);
  float shift = on * (moH(vec3(row, slot, 2.0)) - 0.5) * (0.5 + 2.4 * burst);
  vec3 q = p + vec3(0.0, 0.0, shift);
  float split = 0.03 + 0.14 * burst + 0.05 * on;
  vec3 col;
#if MO_Q > 0
  col.r = moGlitchAt(q + vec3(0.0, 0.0, split)).r;
  col.g = moGlitchAt(q).g;
  col.b = moGlitchAt(q - vec3(0.0, 0.0, split)).b;
#else
  col = moGlitchAt(q);
#endif
  // in a burst some blocks invert
  float inv = step(1.0 - 0.22 * burst, moH(floor(q / 0.48) + slot));
  col = mix(col, vec3(0.8) - col, inv * 0.85);
  // scanlines crawling up (faded where a pixel covers several)
  float pix = moPix(i);
  float sl = 1.0 - (0.2 + 0.25 * burst) * step(0.5, fract(p.y * 16.0 - t * 2.2)) * (1.0 - smoothstep(0.02, 0.05, pix));
  col *= sl;
  float neon = smoothstep(0.25, 0.7, max(col.r, col.b) - col.g * 0.5) + smoothstep(0.3, 0.7, col.g - col.r);
  o.alb = col;
  o.rough = 0.38;
  o.metal = 0.0;
  o.sheen = 0.2; o.coat = 1.0;
  o.emit = col * (neon * (0.6 + 1.1 * night) + 1.6 * burst * on) * (1.0 + 0.6 * burst);
  return o;
}`,bt=`
// the paint in one of the two surface frames (c.x along, aft; c.y across): its mask, and which band it is
float moDrips(vec2 c, float clock, float stretch, out float band) {
  float z = c.x;
  float k = 0.0; band = 0.0;
  // only the band just forward of here and the one before it can reach this far aft
  float b0 = clamp(floor((z + 3.9 + 0.3) / 2.05), 0.0, 3.0);
  for (int b = 0; b < 2; b++) {
    float fb = b0 - float(b);
    if (fb < 0.0) break;
    float z0 = -3.9 + fb * 2.05 + 0.3 * sin(fb * 3.1);
    float wB = 0.42 + 0.16 * sin(fb * 1.7);
    // the band's edges: hand-poured, wavy
    float za = z0 + 0.05 * sin(c.y * 3.1 + fb * 4.0);
    float zf = z0 + wB + 0.06 * sin(c.y * 2.3 + fb) + 0.035 * sin(c.y * 7.1 + fb * 2.0);
    float inBand = smoothstep(za - 0.012, za + 0.012, z) * smoothstep(zf + 0.012, zf - 0.012, z);
    // drips off the band's aft edge, one column every ~0.24 m (not all of them drip)
    float cw = 0.24;
    float col = floor(c.y / cw), lx = fract(c.y / cw) - 0.5;
    vec3 h = moH3(vec3(col, fb, 7.0));
    float drips = step(0.35, h.x);
    float ph = fract(clock * (0.5 + 0.7 * h.y) + h.z);
    float len = (0.3 + 1.7 * h.x * h.x) * stretch * smoothstep(0.0, 0.9, ph);
    float a = z - zf;
    float w = (0.035 + 0.035 * h.y) * mix(1.0, 0.5, clamp(a / max(len, 0.01), 0.0, 1.0));
    float x = lx * cw + (h.z - 0.5) * cw * 0.4 + 0.03 * sin(a * 2.4 + h.x * 20.0) * clamp(a, 0.0, 1.0);
    float body = drips * smoothstep(w + 0.008, w, abs(x)) * step(-0.03, a) * smoothstep(len + 0.01, len - 0.02, a);
    // the root widens where it leaves the band, the head swells into a bead
    float root = drips * smoothstep(0.09, 0.0, a) * step(-0.03, a) * smoothstep(w * 2.2 + 0.01, w * 2.2, abs(x));
    float bulb = drips * smoothstep(w * 1.6 + 0.008, w * 1.6 - 0.006, length(vec2((a - len) * 0.75, x)));
    float m = max(inBand, max(max(body, bulb), root));
    if (m > k) { k = m; band = fb; }
  }
  return k;
}
MoOut moEval(MoIn i, MoOut o) {
  vec3 p = i.p, n = i.n;
  float night = uMoIn.w, clock = uMoAux.x, stretch = 1.0 + uMoIn.z / 220.0;
  float wTop = moTopW(n);
  // one frame per point: the top's (across = x) or the side's (across = y), switched at the chines
  float band;
  vec2 c = wTop > 0.5 ? vec2(p.z, p.x) : vec2(p.z, p.y * (n.x < 0.0 ? 1.0 : -1.0) + 7.0);
  float k = moDrips(c, clock, stretch, band);
  vec3 neon = band < 0.5 ? vec3(1.0, 0.22, 0.0) : band < 1.5 ? vec3(0.95, 0.02, 0.45) : band < 2.5 ? vec3(0.35, 1.0, 0.0) : vec3(0.95, 0.02, 0.45);
  // splatter: fine specks near the bands
  vec3 sq = floor(p * 24.0);
  vec3 hs = moH3(sq);
  float spk = 0.0;
#if MO_Q > 0
  spk = step(0.975, hs.x) * (1.0 - smoothstep(0.02, 0.05, moPix(i)));
#endif
  vec3 spc = hs.y < 0.33 ? vec3(1.0, 0.22, 0.0) : hs.y < 0.66 ? vec3(0.95, 0.02, 0.45) : vec3(0.35, 1.0, 0.0);
  o.alb = mix(vec3(0.008, 0.008, 0.01), neon * 0.8, k);
  o.alb = mix(o.alb, spc * 0.7, spk * (1.0 - k));
  o.rough = mix(0.22, 0.04, k);
  o.metal = 0.0;
  o.sheen = 0.0; o.coat = mix(1.2, 2.0, k);
  // the paint stands proud: its edge rounds over (a wet highlight along every drip)
#if MO_Q > 0
  o.N = moBumpH(i, o.N, k * 0.004);
#endif
  o.emit = (neon * k + spc * spk * (1.0 - k) * 0.6) * mix(0.45, 1.3, night);
  return o;
}`,F0=[{id:"lava",glsl:pt,day:.55,step(t,a,e,o){t.x+=o*(.3+.7*e.power+1.4*R(.8,1,e.power)),t.y+=(R(1.5,7,e.g)-t.y)*Math.min(1,o*3)}},{id:"nebula",glsl:mt,step(t,a,e,o){Q(t,e,o),t.x+=o*(1.5+.5*c0(e)+2.2*t.z+1.5*R(.8,1,e.power))}},{id:"amethyst",glsl:dt,step(t,a,e,o){Q(t,e,o),t.x+=o*(1.45+1.5*t.z+1*R(.8,1,e.power))}},{id:"abyss",glsl:ut,step(t,a,e,o){Q(t,e,o),t.x+=o*(1.4+.6*c0(e)+1.2*R(.8,1,e.power))}},{id:"storm",glsl:gt,day:1.1,step:wt},{id:"aurora",glsl:vt,step(t,a,e,o){Q(t,e,o),t.x+=o*(1.5+.3*c0(e)+1.6*t.z+.8*R(.8,1,e.power))}},{id:"glitch",glsl:xt,step:yt},{id:"drip",glsl:bt,step(t,a,e,o){t.x+=o*(.08+Math.min(1,e.speed/300)*.1+.08*R(.8,1,e.power))}}],k0=[0,1,2,0,2,1,0,3],z0=new WeakMap,c0=t=>R(60,260,t.speed);function Q(t,a,e){t.z+=(R(1.5,7,a.g)-t.z)*Math.min(1,e*3)}function wt(t,a,e,o){const l=R(2.2,7.5,e.g),i=R(.8,1,e.power);t.z+=(l-t.z)*Math.min(1,o*3),t.x+=o*(1+2.6*t.z+1.2*i),t.y+=o,t.w+=o*(1+1.5*t.z+.8*i);const s=z0.get(t)??{at:-9,n:0,hard:!1,ab:!1},n=e.g>5.5,c=i>.5;(n&&!s.hard||c&&!s.ab)&&(s.at=t.y,s.n++),s.hard=n,s.ab=c,z0.set(t,s);const r=t.y-s.at,h=1.5,f=r<.7?5e3+s.n:Math.floor(t.x/h),m=r<.7?r:t.x-f*h-.45*X(f+9.1);if((r<.7?0:X(f))<.8&&m>=0&&m<.7){let u=0;for(const[g,y]of[[0,1],[.09,.7],[.24,.85]])m>=g&&(u=Math.max(u,y*Math.exp(-(m-g)*16)));a.y=u,a.z=f%997/997+.0013,a.w=k0[f%k0.length]}else a.y=0}function yt(t,a,e,o){const l=Math.min(1,Math.abs(e.g-1)/5+Math.abs(e.power-(t.w||e.power))*6);t.w=e.power,t.z+=(l-t.z)*Math.min(1,o*4),t.x+=o*(1+3*t.z);const i=2.3,s=Math.floor(t.x/i),n=t.x-s*i,c=X(s)<.45+.5*t.z,r=.25+.35*X(s+.3),h=c&&n<r?.55+.45*t.z:.15*t.z;a.y+=(h-a.y)*Math.min(1,o*30)}for(const t of F0)_0(t);F0.map(t=>t.id);const p0="/skins/shop/living",K=(t,a,e)=>{const o=Math.min(1,Math.max(0,(e-t)/(a-t)));return o*o*(3-2*o)},Mt=t=>{const a=Math.sin(t*127.1+311.7)*43758.5453;return a-Math.floor(a)},U=t=>K(60,260,t.speed),E=t=>K(.8,1,t.power),kt=(t,a,e)=>{t.z+=(K(1.5,7,a.g)-t.z)*Math.min(1,e*3)};function zt(t){const a=Math.floor(10.6*t),e=Math.floor(15.6*t),o=Math.floor(15.6*t),l=Math.floor(4.4*t),i=s=>s.toFixed(1);return`
uniform sampler2D tLaData;
uniform sampler2D tLaSprite;
#define LA_K ${i(t)}
#define LA_TW ${i(a)}
#define LA_TH ${i(e)}
#define LA_SW ${i(o)}
#define LA_SH ${i(l)}
const vec2 LA_AT = vec2(${i(2*a)}, ${i(e+l)});
float laLum(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
// the art's data where this point is painted: the plan maps (top or bottom by the normal) and the side map, blended as
// the skin blends its maps (src/aircraft/f16/materials.ts)
vec4 laData(vec3 p, vec3 n) {
  float wP = smoothstep(0.42, 0.75, abs(n.y));
  vec2 q = clamp(vec2((p.x + 5.3) * LA_K, (p.z + 9.6) * LA_K), vec2(0.5), vec2(LA_TW, LA_TH) - 0.5);
  q.x += n.y < 0.0 ? LA_TW : 0.0;
  vec2 s = clamp(vec2((p.z + 9.6) * LA_K, (5.0 - p.y) * LA_K), vec2(0.5), vec2(LA_SW, LA_SH) - 0.5);
  s.y += LA_TH;
  return texture(tLaData, q / LA_AT) * wP + texture(tLaData, s / LA_AT) * (1.0 - wP);
}
// the chine line's height along the jet (src/aircraft/f16/skin.ts OUT_Y), metres
float laChine(float z) {
  return z < -6.57 ? mix(1.57, 1.65, clamp((z + 8.72) / 2.15, 0.0, 1.0)) : z < -5.67 ? mix(1.65, 1.75, (z + 6.57) / 0.9) : mix(1.75, 1.73, clamp((z + 5.67) / 10.0, 0.0, 1.0));
}
// fire: dark red, orange, gold, white with heat
vec3 laFire(float h) {
  return vec3(1.0, 0.22, 0.03) * smoothstep(0.0, 0.35, h) + vec3(0.0, 0.42, 0.1) * smoothstep(0.25, 0.75, h) + vec3(0.0, 0.22, 0.5) * smoothstep(0.7, 1.3, h);
}
// value noise in ALU (no texture unit: the showroom's paint is at WebGL2's 16 samplers): ~0..1, smooth
float laVN(vec3 p) {
  vec3 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = moH(i), b = moH(i + vec3(1.0, 0.0, 0.0)), c = moH(i + vec3(0.0, 1.0, 0.0)), d = moH(i + vec3(1.0, 1.0, 0.0));
  float e = moH(i + vec3(0.0, 0.0, 1.0)), g = moH(i + vec3(1.0, 0.0, 1.0)), h = moH(i + vec3(0.0, 1.0, 1.0)), k = moH(i + vec3(1.0));
  return mix(mix(mix(a, b, f.x), mix(c, d, f.x), f.y), mix(mix(e, g, f.x), mix(h, k, f.x), f.y), f.z);
}
mat2 laRot(float a) { float c = cos(a), s = sin(a); return mat2(c, s, -s, c); }
`}const Tt=`
// a koi from the sheet (cell 0..2: 512 x 1024 cells across the top half, head up) centred at P, heading T, in a 2D
// frame q (metres); its tail beating with phase wig. side: the side map's frame (y up) vs the plan's (z aft = down)
vec4 laKoi(vec2 q, vec2 dqx, vec2 dqy, vec2 P, vec2 T, float sideF, float len, float cell, float wig) {
  vec2 Rr = sideF > 0.5 ? vec2(T.y, -T.x) : vec2(-T.y, T.x);
  vec2 d = q - P;
  float al = dot(d, T), ac = dot(d, Rr);
  if (abs(al) > len * 0.56 || abs(ac) > len * 0.4) return vec4(0.0);
  // the body bends into a travelling wave: none at the head, most at the tail fin
  float tail = smoothstep(0.25, -0.55, al / len);
  ac += sin(al / len * 5.5 + wig) * len * 0.075 * tail;
  vec2 c = vec2(0.5 + ac / (len * 0.5), 0.5 - al / len);
  if (c.x < 0.0 || c.x > 1.0 || c.y < 0.0 || c.y > 1.0) return vec4(0.0);
  vec2 uv = vec2((cell + c.x) * 0.25, c.y * 0.5);
  vec2 gx = vec2(dot(dqx, Rr) * 0.5 / len, -dot(dqx, T) * 0.5 / len), gy = vec2(dot(dqy, Rr) * 0.5 / len, -dot(dqy, T) * 0.5 / len);
  return textureGrad(tLaSprite, uv, gx, gy);
}
// a lazy loop: an ellipse round c (radii r), wobbling, phase ph (turns), dir ±1
void laLoop(float ph, vec2 c, vec2 r, float dir, float wob, out vec2 P, out vec2 T) {
  float a = ph * 6.2832 * dir;
  vec2 rr = r * (1.0 + wob * vec2(sin(a * 2.0 + 1.3), cos(a * 3.0 + 0.4)));
  P = c + vec2(cos(a), sin(a)) * rr;
  T = normalize(vec2(-sin(a), cos(a)) * r * dir + 1e-4);
}
MoOut moEval(MoIn i, MoOut o) {
  vec3 p = i.p, n = i.n;
  float night = uMoIn.w, sw = uMoAux.x, flow = uMoAux.y, beat = uMoAux.z;
  vec4 D = laData(p, n);          // r: wave, g: foam, b: the waves' deep blue
  float wTop = smoothstep(0.42, 0.75, abs(n.y)), wS = 1.0 - wTop;
  // the painted waves alive: their foam churns aft, a light rolls over the crests
  vec3 fq = vec3(p.x, p.y, p.z - flow * 0.6) * 2.2;
  vec2 fn = vec2(laVN(fq), laVN(fq * 0.5 + 7.3));
  o.alb *= 1.0 + D.g * (fn.x - 0.5) * 0.55 - D.b * (fn.y - 0.5) * 0.3;
  float roll = pow(0.5 + 0.5 * sin(p.z * 1.6 - flow * 1.4 + fn.y * 5.0), 6.0);
  vec3 e = vec3(0.6, 0.8, 1.0) * D.g * roll * 0.08;
  float wave = D.r;
  // the great waves rolling aft along the lower fuselage: the frieze (the sheet's lower half, seamless along its length)
  {
    float H = 1.65, yTop = laChine(p.z) + 0.85;
    float v = (yTop - p.y) / H, u = (p.z - flow) / (H * 2.3326);
    vec2 uv = vec2(u, 0.5 + clamp(v, 0.0, 1.0) * 0.4287);
    vec2 gx = vec2(i.dpx.z / (H * 2.3326), -i.dpx.y / H * 0.4287), gy = vec2(i.dpy.z / (H * 2.3326), -i.dpy.y / H * 0.4287);
    vec3 fc = textureGrad(tLaSprite, uv, gx, gy).rgb;
    float foam = smoothstep(0.45, 0.75, laLum(fc));
    // the foam's claws flicker as the crest breaks
    float fb = laVN(vec3((p.z - flow * 0.64) * 4.0, p.y * 4.0, 0.37));
    fc *= 1.0 + foam * (fb - 0.5) * 0.45;
    float bw = wS * smoothstep(-6.4, -5.3, p.z) * smoothstep(3.6, 2.3, p.z) * smoothstep(0.0, 0.16, v) * step(v, 1.0);
    o.alb = mix(o.alb, fc, bw);
    wave = max(wave, bw * smoothstep(0.08, 0.22, laLum(fc)));
    e += vec3(0.6, 0.8, 1.0) * foam * bw * pow(0.5 + 0.5 * sin(p.z * 2.2 - flow * 2.0 + fb * 4.0), 8.0) * 0.06;
  }
  // the koi: two on the plan's upper side, one along each flank
  vec4 k = vec4(0.0);
  float under = 0.0;
  {
    vec2 q = p.xz, dqx = i.dpx.xz, dqy = i.dpy.xz;
    float onTop = wTop * step(0.0, n.y);
    vec2 P, T;
    laLoop(sw + 0.13, vec2(2.1, -0.3), vec2(1.5, 2.5), 1.0, 0.12, P, T);
    vec4 a = laKoi(q, dqx, dqy, P, T, 0.0, 2.6, 0.0, beat) * onTop;
    float da = smoothstep(0.35, 0.9, sin(sw * 9.0 + 1.0));
    laLoop(sw * 0.93 + 0.61, vec2(-2.0, -1.0), vec2(1.4, 2.7), -1.0, 0.1, P, T);
    vec4 b = laKoi(q, dqx, dqy, P, T, 0.0, 2.4, 1.0, beat * 1.13 + 2.0) * onTop;
    float db = smoothstep(0.35, 0.9, sin(sw * 7.0 + 3.3));
    k = a * (1.0 - da * wave); under = da * a.a;
    k = mix(k, b * (1.0 - db * wave), b.a); under = max(under, db * b.a);
#if MO_Q > 0
    // their shadows on the lacquer (a little below and aft: the light from above)
    laLoop(sw + 0.13, vec2(2.1, -0.3), vec2(1.5, 2.5), 1.0, 0.12, P, T);
    float sa = laKoi(q - vec2(0.07, 0.12), dqx, dqy, P, T, 0.0, 2.6, 0.0, beat).a;
    laLoop(sw * 0.93 + 0.61, vec2(-2.0, -1.0), vec2(1.4, 2.7), -1.0, 0.1, P, T);
    float sb = laKoi(q - vec2(0.07, 0.12), dqx, dqy, P, T, 0.0, 2.4, 1.0, beat * 1.13 + 2.0).a;
    o.alb *= 1.0 - 0.45 * onTop * max(sa * (1.0 - da), sb * (1.0 - db));
#endif
  }
  {
    // along the flank, above the waves: out aft and back, diving under the crests at its turns
    vec2 q = p.zy, dqx = i.dpx.zy, dqy = i.dpy.zy;
    vec2 P, T;
    laLoop(sw * 1.21 + 0.4, vec2(-1.6, 2.32), vec2(4.3, 0.42), 1.0, 0.0, P, T);
    vec4 c = laKoi(q, dqx, dqy, P, T, 1.0, 1.9, 2.0, beat * 0.9 + 4.0) * wS;
    float dc = smoothstep(0.5, 0.95, sin(sw * 6.0 + 0.7));
#if MO_Q > 0
    float sc = laKoi(q - vec2(0.08, -0.06), dqx, dqy, P, T, 1.0, 1.9, 2.0, beat * 0.9 + 4.0).a * wS;
    o.alb *= 1.0 - 0.4 * sc * (1.0 - dc);
#endif
    k = mix(k, c * (1.0 - dc * wave), c.a); under = max(under, dc * c.a);
    // a second, lower, the other way: in and out of the rolling crests
    laLoop(sw * 1.07 + 0.85, vec2(-0.8, 2.05), vec2(3.6, 0.32), -1.0, 0.05, P, T);
    vec4 c2 = laKoi(q, dqx, dqy, P, T, 1.0, 1.7, 0.0, beat * 1.07 + 1.0) * wS;
    float dc2 = smoothstep(0.2, 0.8, sin(sw * 5.0 + 2.2));
    k = mix(k, c2 * (1.0 - dc2 * wave), c2.a); under = max(under, dc2 * c2.a);
  }
  // a koi under the water: its colour seen through the indigo
  vec3 kc = mix(k.rgb, k.rgb * vec3(0.3, 0.42, 0.75), under * 0.5);
  o.alb = mix(o.alb, kc, k.a);
  // lacquer: the waves and fish under a deep clear coat
  o.rough = mix(0.26, 0.34, wave); o.metal = 0.0;
  o.coat = 1.3; o.sheen = 0.0; o.spec = 0.75;
  // at night the koi glow faintly, like lanterns under the water
  e += k.rgb * k.a * (0.04 + 0.3 * night);
  o.emit = e;
  return o;
}`,qt=`
float laGlint(vec2 d, float r) {
  float c = exp(-dot(d, d) / (r * r));
  float s = exp(-abs(d.x) / (r * 0.18)) * exp(-abs(d.y) / (r * 3.2)) + exp(-abs(d.y) / (r * 0.18)) * exp(-abs(d.x) / (r * 3.2));
  return c * 1.6 + s * 0.8;
}
MoOut moEval(MoIn i, MoOut o) {
  vec3 p = i.p, n = i.n;
  float t = uMoT, night = uMoIn.w, ab = smoothstep(0.8, 1.0, uMoIn.x), br = uMoAux.x;
  vec4 D = laData(p, n);          // r: the dragon, g: clouds, b: gold, a: its scales' rims
  float wTop = smoothstep(0.42, 0.75, abs(n.y));
  float nv = clamp(dot(normalize(i.N), i.V), 0.0, 1.0);
  // the breath: a slow swell running from the head (the nose) aft along the body
  float breath = 0.5 + 0.5 * sin(p.z * 0.5 - br);
  breath *= breath;
  // the scales shimmer: a sheen travelling the body, caught on each scale's rim, a thin film's hue with the view
  float sh = pow(0.5 + 0.5 * sin(p.z * 2.1 + (p.x + p.y) * 0.9 - t * 3.4), 8.0);
  vec3 film = 0.5 + 0.5 * cos(6.2832 * (nv * 1.1 + p.z * 0.04 + vec3(0.0, 0.33, 0.67)));
  o.alb = o.alb * (1.0 + D.r * 0.22 * breath) + D.r * D.a * sh * film * 0.35;
  o.rough = mix(0.46, 0.24, D.r);
  o.coat = mix(0.7, 1.6, D.r); o.sheen = 0.0;
  // gold leaf: metal, catching the light as the jet turns
  o.metal = D.b * 0.9;
  o.rough = mix(o.rough, 0.18, D.b);
  // mist drifting aft through the grey clouds
  vec4 m = moN(vec3(p.x * 0.32, p.y * 0.32, p.z * 0.32 - t * 0.07));
  float wisp = smoothstep(0.42, 0.78, m.r + (moN(vec3(p * 0.9) + vec3(0.0, 0.0, -t * 0.15)).g - 0.5) * 0.4);
  o.alb = mix(o.alb, o.alb * 1.3 + 0.025, D.g * wisp * 0.7);
  o.alb *= 1.0 - D.g * (1.0 - wisp) * 0.15;
  // the dragon lit from within: its breath at night, burning in afterburner
  vec3 e = o.alb * D.r * breath * (0.05 + 0.5 * night + 1.4 * ab + 0.4 * uMoAux.z);
  float fl = moN(vec3(p.x * 2.0, p.y * 2.0, p.z * 2.0 - t * 1.2)).g;
  e += vec3(1.0, 0.55, 0.14) * D.b * smoothstep(0.5, 0.8, fl) * (0.04 + 0.35 * night + 0.8 * ab);
  // the eyes: a glint every few seconds (the head on the spine, the mask on the nose, the head along each flank)
  float g1 = pow(max(0.0, sin(t * 0.8)), 40.0), g2 = pow(max(0.0, sin(t * 0.8 - 1.9)), 40.0), g3 = pow(max(0.0, sin(t * 0.8 + 2.4)), 40.0);
  float onTop = wTop * step(0.0, n.y);
  float gl = (laGlint(p.xz - vec2(0.231, -1.374), 0.035) + laGlint(p.xz - vec2(0.598, -1.374), 0.035)) * g1 * onTop
    + (laGlint(p.xz - vec2(-0.22, -6.05), 0.03) + laGlint(p.xz - vec2(0.25, -6.05), 0.03)) * g2 * onTop
    + laGlint(p.zy - vec2(-4.6, 1.84), 0.04) * g3 * (1.0 - wTop);
  e += vec3(1.0, 0.92, 0.7) * gl * 3.0;
  o.emit = e;
  return o;
}`,At=`
// the visible scale at q (u: along the jet, aft; v: across), rows overlapping aft: (its centre, its distance 0..1, its id)
vec4 laScale(vec2 q, float s) {
  float R = s * 0.64;
  vec4 best = vec4(0.0, 0.0, 9.0, 0.0);
  float bestRow = -1e9;
  float r0 = floor(q.x / s);
  for (int dr = -1; dr <= 0; dr++) {
    float row = r0 + float(dr);
    float off = mod(row, 2.0) * 0.5;
    float c0 = floor(q.y / s - off);
    for (int dc = 0; dc <= 1; dc++) {
      vec2 c = vec2((row + 0.5) * s, (c0 + float(dc) + off + 0.5) * s);
      float d = length((q - c) / vec2(1.0, 0.9)) / R;
      if (d < 1.0 && row > bestRow) { bestRow = row; best = vec4(c, d, moH(vec3(row, c0 + float(dc), 7.0))); }
    }
  }
  return best;
}
MoOut moEval(MoIn i, MoOut o) {
  vec3 p = i.p, n = i.n;
  float night = uMoIn.w, ph = uMoAux.x;
  float wTop = smoothstep(0.45, 0.6, abs(n.y));
  bool plan = abs(n.y) > 0.52;
  bool belly = n.y < -0.52;
  // the frame the scales lie in: along the jet (z) and across (x on the plan, y on the side)
  vec2 q = plan ? vec2(p.z, p.x) : vec2(p.z, p.y);
  float spine = plan && !belly ? 1.0 - smoothstep(0.18, 0.3, abs(p.x)) : 0.0;
  float s = belly ? 0.5 : mix(0.34, 0.2, spine);
  vec4 sc = laScale(q, s);
  float d = sc.z;
  float inside = step(d, 1.0);
  // the wave of lift running nose to tail, per scale (its centre)
  float lift = pow(0.5 + 0.5 * sin(sc.x * 0.85 - ph), 5.0);
  float nv = clamp(dot(normalize(i.N), i.V), 0.0, 1.0);
  vec3 col;
  if (belly) {
    // gold armour plates
    col = mix(vec3(0.55, 0.36, 0.09), vec3(0.85, 0.62, 0.22), sc.w * 0.5 + 0.3);
    o.metal = 0.85; o.rough = 0.3 - 0.12 * lift;
  } else {
    // the film: emerald through teal to blue-violet at the rims and the grazing angles; the lift shifts it
    // emerald in the scale's middle, through teal to blue-violet toward its rim and at grazing angles; the lift
    // sweeps the hue along
    float th = d * 0.55 + (1.0 - nv) * 0.5 + lift * 0.3 + sc.w * 0.1;
    vec3 emer = vec3(0.01, 0.22, 0.09), teal = vec3(0.0, 0.24, 0.3), viol = vec3(0.09, 0.05, 0.36);
    col = mix(emer, teal, smoothstep(0.25, 0.65, th));
    col = mix(col, viol, smoothstep(0.6, 1.05, th));
    col *= 0.85 + 0.5 * (1.0 - d) * (1.0 - d);
    col = mix(col, col * 0.3, spine * 0.7);
    o.metal = 0.3; o.rough = 0.28 - 0.12 * lift;
  }
  // the rims: a dark seam between the scales
  float rim = smoothstep(0.8, 0.97, d) * inside + (1.0 - inside);
  col *= 1.0 - rim * 0.9;
  o.alb = col;
  o.coat = 1.4; o.sheen = 0.0; o.spec = 1.2;
#if MO_Q > 0
  // each scale a dome, lifted at its trailing edge by the wave: the normal from its height's gradient
  {
    float R = s * 0.64;
    vec2 dq = (q - sc.xy) / R;
    // flat on top, rolling over at the edge (no glint in each middle)
    float h = 1.0 - smoothstep(0.5, 1.0, d);
    float dh = -(6.0 * (d - 0.5) * (1.0 - d) / 0.25) * step(0.5, d);   // d(h)/d(d) of the smoothstep's falloff
    vec2 g2 = dh * normalize(dq + 1e-5) / R * (0.025 + 0.04 * lift) * inside;
    vec3 g = plan ? vec3(g2.y, 0.0, g2.x) : vec3(0.0, g2.y, g2.x);
    o.N = moBump(i, o.N, g);
    o.alb *= 0.8 + 0.2 * h;
  }
#endif
  // the wave's sheen, and a faint inner glow along the rims at night
  vec3 e = mix(vec3(0.05, 0.6, 0.45), vec3(0.3, 0.25, 1.0), lift) * lift * (1.0 - rim) * (1.0 - d) * 0.09 * (1.0 - float(belly)) + vec3(0.1, 0.9, 0.6) * rim * inside * night * 0.08;
  o.emit = e;
  return o;
}`,It=`
// one layer of petals tumbling aft in a 2D frame (x across, y along the flow), cells cs metres; sheet 4 x 3 of 256²
vec4 laPetals(vec2 q, vec2 dqx, vec2 dqy, float flow, float cs, float seed, float dens, float t) {
  vec2 c = q + vec2(0.35 * sin(q.y * 0.45 - t * 0.6 + seed), -flow);
  vec2 cell = floor(c / cs);
  vec3 h = moH3(vec3(cell, seed));
  float h4 = moH(vec3(cell.yx, seed + 3.1));
  if (h.x > dens) return vec4(0.0);
  vec2 ctr = (cell + 0.3 + 0.4 * h.yz) * cs;
  float r = cs * (0.2 + 0.1 * h4);
  float a = h.x * 40.0 + t * (0.7 + 1.6 * h.y) * (h.z > 0.5 ? 1.0 : -1.0);
  float fl = 0.35 + 0.65 * abs(cos(t * (1.2 + h.z) + h.y * 20.0));    // tumbling: seen edge-on now and then
  mat2 M = laRot(a);
  vec2 l = (M * (c - ctr)) / vec2(r * fl, r) * 0.5 + 0.5;
  if (l.x < 0.0 || l.x > 1.0 || l.y < 0.0 || l.y > 1.0) return vec4(0.0);
  float idx = floor(h4 * 10.99);
  vec2 uv = (vec2(mod(idx, 4.0), floor(idx / 4.0)) + l) / vec2(4.0, 3.0);
  vec2 gx = (M * dqx) / vec2(r * fl, r) * 0.5 / vec2(4.0, 3.0), gy = (M * dqy) / vec2(r * fl, r) * 0.5 / vec2(4.0, 3.0);
  return textureGrad(tLaSprite, uv, gx, gy);
}
MoOut moEval(MoIn i, MoOut o) {
  vec3 p = i.p, n = i.n;
  float t = uMoT, night = uMoIn.w, flow = uMoAux.x;
  vec4 D = laData(p, n);          // r: blossoms, g: the branches
  float wTop = smoothstep(0.42, 0.75, abs(n.y));
  // pearl: a faint thin film over the white with the view
  float nv = clamp(dot(normalize(i.N), i.V), 0.0, 1.0);
  vec3 film = 0.5 + 0.5 * cos(6.2832 * (nv * 1.3 + p.z * 0.03 + vec3(0.0, 0.33, 0.67)));
  o.alb = mix(o.alb, o.alb * 0.88 + film * 0.12 * laLum(o.alb), (1.0 - D.g) * 0.8);
  // the blush deepening toward the tail
  o.alb = mix(o.alb, o.alb * vec3(1.0, 0.72, 0.8), smoothstep(-5.0, 5.0, p.z) * (1.0 - D.g) * 0.55);
  // denser toward the tail, as the storm gathers
  float dens = mix(0.32, 0.75, smoothstep(-7.0, 4.0, p.z));
  bool plan = wTop > 0.5;
  vec2 q = plan ? p.xz : vec2(p.y, p.z);
  vec2 dqx = plan ? i.dpx.xz : vec2(i.dpx.y, i.dpx.z), dqy = plan ? i.dpy.xz : vec2(i.dpy.y, i.dpy.z);
  vec4 a = laPetals(q, dqx, dqy, flow, 0.85, 1.0, dens, t);
#if MO_Q > 0
  vec4 b = laPetals(q, dqx, dqy, flow * 1.35, 0.55, 5.0, dens * 0.85, t * 1.1);
  a = mix(b, a, a.a);
  a.a = max(a.a, b.a);
  // their shadows on the pearl
  float sh = laPetals(q - vec2(0.04, -0.06), dqx, dqy, flow, 0.85, 1.0, dens, t).a;
  o.alb *= 1.0 - 0.3 * sh * (1.0 - a.a);
#endif
  o.alb = mix(o.alb, a.rgb * vec3(1.0, 0.78, 0.86), a.a);
  o.rough = mix(0.24, 0.4, a.a); o.metal = 0.0;
  o.coat = 1.6; o.sheen = 0.2; o.spec = 1.0;
  // the blossoms glow a little at night, like paper lanterns
  o.emit = (vec3(1.0, 0.55, 0.7) * D.r * 0.05 + a.rgb * a.a * 0.06) * night;
  return o;
}`,St=`
MoOut moEval(MoIn i, MoOut o) {
  vec3 p = i.p, n = i.n;
  // ab: the burner, eased; gk: the pull, eased (the feathers flare with either)
  float night = uMoIn.w, fc = uMoAux.x, ember = uMoAux.y, ab = uMoAux.z, gk = uMoAux.w, flare = max(ab, 0.45 * gk);
  vec4 D = laData(p, n);          // r: the painted fire, g: its spread, b: the trailing edges
  float wTop = smoothstep(0.42, 0.75, abs(n.y));
  // the fire flows outboard and aft on the plan, up and aft on the flanks
  vec3 adv = mix(vec3(0.0, 0.55, 1.0), vec3(sign(p.x) * 0.75, 0.0, 1.0), wTop) * fc;
  vec4 a = moN(p * 0.5 - adv * 0.3);
  vec4 b = moN(p * 1.45 - adv * 0.95 + 0.37);
  float tongue = a.r * 0.55 + b.g * 0.55 - 0.05;
  // the feather tips flicker
  float flick = D.r * (0.5 + 1.1 * (tongue - 0.45));
  // in afterburner the flames flare off the feathers and spread across the wings
  // (by day the flames spread less far: the feathers flare, the whole airframe doesn't catch)
  float reach = mix(1.05, mix(0.15, 0.5, uMoD), flare);
  float lick = smoothstep(0.38, 0.62, b.g * 0.7 + a.b * 0.5);         // tongues of flame with dark between
  float burn = smoothstep(reach, reach + 0.18, D.g + (tongue - 0.5) * 0.9) * lick * flare;
  float h = min(1.15, max(flick, burn * (0.35 + 0.8 * tongue)));
  vec3 fire = laFire(min(h * 1.1, 0.95 + 0.25 * flick)) * h;
  o.alb = mix(o.alb, laFire(h) * 0.7, burn * 0.55);
  o.rough = 0.34; o.coat = 0.8; o.metal = 0.1 * D.r; o.sheen = 0.0; o.spec = 0.75;
  // (by day the burner's and the pull's flare held to half: against the sun the spread fire read white-hot all over)
  vec3 e = fire * (0.35 + 1.4 * night + (0.9 * ab + 0.25 * gk) * mix(1.0, 0.5, uMoD));
#if MO_Q > 0
  // embers streaming off the trailing edges, more in afterburner
  {
    vec3 q = (p - vec3(0.0, 0.0, ember)) * vec3(6.0, 6.0, 2.2);
    vec3 cell = floor(q), h3 = moH3(cell);
    float on = step(0.93 - 0.05 * ab, h3.x) * smoothstep(0.05, 0.4, D.b + D.r * 0.3);
    vec3 d = (fract(q) - (0.25 + 0.5 * h3)) / vec3(6.0, 6.0, 2.2);
    float r = 0.012 + 0.012 * h3.y, pix = moPix(i);
    float sp = on * smoothstep(max(r, pix), 0.0, length(d * vec3(1.0, 1.0, 0.45))) * min(1.0, r / max(pix, 1e-4));
    e += vec3(1.0, 0.5, 0.1) * sp * (2.5 + 6.0 * ab * mix(1.0, 0.35, uMoD)) * (0.6 + 0.4 * sin(uMoT * 11.0 + h3.z * 40.0));
  }
#endif
  o.emit = e;
  return o;
}`,Ot=`
vec3 laComet(float k) {
  // violet → red → orange → gold → white with the heat
  vec3 c = mix(vec3(0.35, 0.05, 0.6), vec3(0.95, 0.12, 0.08), smoothstep(0.05, 0.3, k));
  c = mix(c, vec3(1.0, 0.5, 0.08), smoothstep(0.3, 0.55, k));
  c = mix(c, vec3(1.0, 0.85, 0.35), smoothstep(0.55, 0.8, k));
  return mix(c, vec3(1.0), smoothstep(0.8, 1.0, k));
}
MoOut moEval(MoIn i, MoOut o) {
  vec3 p = i.p, n = i.n;
  float night = uMoIn.w, fl = uMoAux.x, sparks = uMoAux.y, stretch = uMoAux.z;
  float wTop = smoothstep(0.42, 0.75, abs(n.y));
  // the tail: a curve along each shoulder (x ±xc, height yc by station) from the head on the nose, under the canopy's
  // sill, over the spine and up the fin; the band wraps the skin round it (3D distance to the curve)
  float zh = -8.1;
  float s = p.z - zh;
  float yc = p.z < 0.0 ? mix(1.95, 2.55, smoothstep(-8.0, 0.0, p.z)) : 2.55 + 0.27 * p.z + 0.07 * p.z * p.z;
  float xc = p.z < -3.0 ? mix(0.25, 0.5, smoothstep(-8.5, -3.0, p.z)) : p.z < 0.5 ? 0.5 : max(0.0, 0.5 - (p.z - 0.5) * 0.35);
  float w = clamp(0.12 + 0.04 * s, 0.12, 0.55);
  vec2 dv = vec2(abs(p.x) - xc, p.y - yc) / w;
  float d = length(dv) * sign(dv.y + 1e-4);
  float L = 6.5 + 6.0 * stretch;
  float I = exp(-max(s, 0.0) / L * 1.05) * smoothstep(-0.35, 0.05, s);
  // streaming: long filaments running aft, shimmering
  vec4 f1 = moN(vec3(s * 0.11 - fl * 0.5, d * 0.35, 0.21));
  float f = f1.r * 0.7 + 0.3;
#if MO_Q > 0
  vec4 f2 = moN(vec3(s * 0.32 - fl * 1.4, d * 1.1, 0.67));
  f = f1.r * 0.55 + f2.g * 0.6 - 0.05;
#endif
  float prof = exp(-d * d * (2.2 + 1.2 * (1.0 - f)));
  float k = I * prof * (0.55 + 0.75 * f);
  // the head: a white-hot core that pulses
  vec2 hd = vec2(s, length(vec2(abs(p.x) - 0.25, p.y - 1.95))) / vec2(0.55, 0.3);
  k += exp(-dot(hd, hd)) * (1.1 + 0.15 * sin(uMoT * 9.0));
  float side = 1.0 - wTop;
  float kk = k;
  // its colour by how far down the tail: white-hot at the head, through gold and orange to red and violet
  float heat = pow(I, 1.7) * prof * 1.7 + (k - I * prof * (0.55 + 0.75 * f));
  vec3 col = laComet(clamp(heat, 0.0, 1.0));
  o.alb = mix(vec3(0.012, 0.011, 0.014), col * 0.45, smoothstep(0.15, 0.6, kk));
  o.rough = 0.16; o.metal = 0.0; o.coat = 2.2; o.sheen = 0.0; o.spec = 1.0;
  // (the faint fringes stay dark: only the tail itself burns)
  vec3 e = col * kk * smoothstep(0.04, 0.3, kk) * (2.4 + 1.5 * night);
#if MO_Q > 0
  // sparks breaking off: over the wings and round the tail, streaking aft
  {
    vec3 q = (p - vec3(0.0, 0.0, sparks)) * vec3(4.5, 4.5, 1.2);
    vec3 cell = floor(q), h3 = moH3(cell + 3.0);
    float zone = max(smoothstep(0.08, 0.3, k) * side, smoothstep(1.0, 1.6, abs(p.x)) * smoothstep(-3.0, -1.0, p.z) * smoothstep(2.0, 0.5, p.z) * wTop * step(0.0, n.y));
    float on = step(0.88, h3.x) * zone;
    vec3 dd = (fract(q) - (0.2 + 0.6 * h3)) / vec3(4.5, 4.5, 1.2);
    float r = 0.008 + 0.008 * h3.y, pix = moPix(i);
    float spk = on * smoothstep(max(r, pix), 0.0, length(dd * vec3(1.0, 1.0, 0.12))) * min(1.0, r / max(pix, 1e-4));
    e += vec3(1.0, 0.55, 0.15) * spk * (3.0 + 3.0 * stretch) * (0.5 + 0.5 * sin(uMoT * 14.0 + h3.z * 50.0));
  }
#endif
  o.emit = e;
  return o;
}`,Nt=`
float laJag(float x, float seed) {
  float r = (floor(seed * 200.0) + 0.5) / 256.0;
  return (moW(vec2(x * 1.3 / 256.0, r)).r - 0.5) * 0.7 + (moW(vec2(x * 3.6 / 256.0, r + 0.27)).g - 0.5) * 0.26 + (moW(vec2(x * 10.0 / 256.0, r + 0.53)).b - 0.5) * 0.08;
}
MoOut moEval(MoIn i, MoOut o) {
  vec3 p = i.p, n = i.n;
  float night = uMoIn.w, ab = smoothstep(0.8, 1.0, uMoIn.x), cr = uMoAux.x;
  vec4 D = laData(p, n);          // r: the painted bolts, g: their white cores, b: their glow
  float wTop = smoothstep(0.42, 0.75, abs(n.y));
  // energy crawling aft through the painted bolts
  float nz = laVN(p * 2.2);
  float crawl = pow(0.5 + 0.5 * sin(p.z * 2.4 - cr * 7.0 + nz * 6.0), 6.0);
  vec3 blue = vec3(0.22, 0.42, 1.0), white = vec3(0.85, 0.92, 1.0);
  float gain = (0.35 + 1.2 * night) * (1.0 + 0.9 * ab);
  vec3 e = (blue * D.r * (0.12 + 0.9 * crawl) + white * D.g * (0.25 + 1.2 * crawl)) * gain;
  o.rough = 0.2; o.coat = 1.8; o.metal = 0.0; o.sheen = 0.2;
  // a new strike: a cel-shaded bolt with forks on one face, its flash lighting the airframe
  float flash = uMoFx.y * uMoFx.x;
  if (flash + uMoAux.y > 0.005) {
    float seed = uMoFx.z, face = uMoFx.w;
    float wF = face < 0.5 ? wTop * step(0.0, n.y) : face < 2.5 ? (1.0 - wTop) : wTop * step(n.y, 0.0);
    vec2 c = (face < 0.5 || face > 2.5) ? vec2(p.z, p.x) : vec2(p.z, p.y);
    vec3 h = moH3(vec3(seed * 91.0, 1.0, 2.0));
    float x0 = -8.5 + h.x * 3.0, x1 = 1.5 + h.y * 4.0;
    float l0 = (face < 0.5 || face > 2.5) ? (h.z - 0.5) * 2.4 : 2.25 + h.z * 0.35;
    float u = (c.x - x0) / (x1 - x0);
    float main = l0 + (c.x - x0) * (h.y - 0.5) * 0.08 + laJag(c.x, seed) * 0.8;
    float span = smoothstep(-0.02, 0.02, u) * smoothstep(1.0, 0.9, u);
    // the strike grows from its start along the bolt in the first instants
    span *= step(u, uMoAux.w * 3.0);
    float dm = abs(c.y - main);
    float xf = mix(x0, x1, 0.3 + 0.3 * h.x);
    float f1 = main + (c.x - xf) * (0.55 + 0.4 * h.z) * (h.y > 0.5 ? 1.0 : -1.0) + laJag(c.x * 1.4, seed + 0.31) * 0.5;
    float df = abs(c.y - f1) + step(c.x, xf) * 9.0 + step(xf + 2.5, c.x) * 9.0;
    float w = 0.1 * mix(1.0, 0.45, clamp(u, 0.0, 1.0));
    float core = max(smoothstep(w, w * 0.4, dm), smoothstep(w * 0.6, w * 0.25, df)) * span;
    float ink = max(smoothstep(w * 1.9, w * 1.5, dm), smoothstep(w * 1.3, w * 0.95, df)) * span;
    float glow = (exp(-dm / 0.25) + 0.6 * exp(-df / 0.2)) * span;
    float vis = smoothstep(0.0, 0.15, flash + uMoAux.y) * wF;
    // the ink outline stays a beat after the flash (the afterimage), the core and glow with the flash
    o.alb = mix(o.alb, vec3(0.015, 0.02, 0.05), ink * (1.0 - core) * vis);
    o.alb = mix(o.alb, white, core * vis);
    e += (white * core * (1.5 + 6.0 * flash) + vec3(0.3, 0.45, 1.0) * glow * (0.4 + 2.4 * flash)) * vis;
    // the flash on the white paint: near the bolt most, the whole jet a little
    e += o.alb * vec3(0.7, 0.8, 1.0) * flash * (0.05 + 0.35 * exp(-dm / 1.2) * wF);
    e += blue * D.r * flash * 1.5;
  }
  o.emit = e;
  return o;
}`,Dt=`
MoOut moEval(MoIn i, MoOut o) {
  vec3 p = i.p, n = i.n;
  float night = uMoIn.w, pw = uMoIn.x, clk = uMoAux.x, surge = uMoAux.y, pz = uMoAux.z;
  vec4 D = laData(p, n);          // r: traces, g: distance from the cockpit along them (/ 24 m), b: pads and chips, a: hue
  float dist = D.g * 24.0;
  float tr = smoothstep(0.25, 0.75, D.r);
  // data packets racing outward: a few per trace at once, tighter and quicker with the throttle
  float ph = dist * 0.9 - clk;
  float pk = pow(fract(ph), 10.0 + 10.0 * pz) + pow(fract(ph * 0.37 + 0.31), 14.0) * 0.7;
  // the afterburner's surge: a bright front sweeping out through the whole board
  float sg = exp(-pow((dist - surge) / 0.9, 2.0)) * step(0.0, surge) + smoothstep(surge, surge - 6.0, dist) * step(0.0, surge) * 0.25;
  vec3 cyan = vec3(0.1, 0.95, 1.0), mag = vec3(1.0, 0.18, 0.75);
  vec3 hue = mix(cyan, mag, step(0.5, D.a));
  float base = 0.12 + 0.18 * pz;                   // the traces' standing glow
  float gain = (0.45 + 1.6 * night);
  vec3 e = hue * tr * (base + pk * (1.4 + 1.2 * pz) + sg * 3.0) * gain;
  // the pads and chips: a slow blink, lit by the packets passing
  e += hue * D.b * (0.08 + 0.5 * pk + 0.4 * sg) * gain * 0.6;
  o.alb = mix(o.alb, hue * 0.5, tr * 0.3);
  o.rough = mix(0.62, 0.3, max(tr, D.b)); o.metal = D.b * 0.7;
  o.coat = 0.5; o.sheen = 0.0; o.spec = 0.8;
  o.emit = e;
  return o;
}`,T0=[1,0,2,1,3,2,0,1],q0=new WeakMap,e0=[{motion:"koi",glsl:Tt,k:64,sprites:!0,rough:.3,detail:.55,step(t,a,e,o){const l=U(e);t.x+=o*(.032+.085*l),t.y+=o*(.32+2.6*l),t.z+=o*(4.2+6.5*l)}},{motion:"irezumi",glsl:qt,k:64,rough:.45,detail:.5,step(t,a,e,o){kt(t,e,o),t.x+=o*(1.8+2.4*E(e)+1*t.z)}},{motion:"wyrm",glsl:At,k:64,rough:.35,detail:.35,step(t,a,e,o){const l=K(1.3,7.5,e.g);t.z+=(l-t.z)*Math.min(1,o*3),t.x+=o*(3+12*t.z+2*E(e))}},{motion:"sakura",glsl:It,k:64,sprites:!0,rough:.3,detail:.45,step(t,a,e,o){t.x+=o*(.5+4.8*U(e)+1.5*E(e))}},{motion:"phoenix",glsl:St,k:64,rough:.36,detail:.45,day:1.4,step(t,a,e,o){const l=E(e);t.z+=(l-t.z)*Math.min(1,o*(l>t.z?2.6:1.1)),t.w+=(K(1.8,7.5,e.g)-t.w)*Math.min(1,o*3),t.x+=o*(1.2+2.8*t.z+1*U(e)+1.2*t.w),t.y+=o*(2.2+6.5*U(e)+4*t.z)}},{motion:"comet",glsl:Ot,k:64,rough:.25,detail:.4,step(t,a,e,o){const l=U(e);t.z+=(l-t.z)*Math.min(1,o*1.5),t.x+=o*(1.6+3.2*t.z+1.5*E(e)),t.y+=o*(4+18*t.z+6*E(e))}},{motion:"raijin",glsl:Nt,k:64,rough:.28,detail:.5,step:Rt},{motion:"circuit",glsl:Dt,k:128,rough:.66,detail:.3,step(t,a,e,o){const l=E(e);t.z+=(e.power-t.z)*Math.min(1,o*2),t.x+=o*(1.1+3.4*t.z+3*l),l>.5&&a.z<.5&&(t.y=0,a.z=1),l<.2&&(a.z=0),t.y>=0&&(t.y=t.y>30?-1:t.y+o*14)}}];function Rt(t,a,e,o){const l=Math.min(1,E(e)+K(2.5,7.5,e.g)*.6);t.z+=(l-t.z)*Math.min(1,o*3),t.x+=o*(1.6+2*t.z);const i=1.35-.65*t.z,s=(q0.get(t)??0)+o/i;q0.set(t,s);const n=Math.floor(s),c=(s-n)*i;if(Mt(n)<.9&&c<.75){let h=0;for(const[f,m]of[[0,1],[.1,.65],[.26,.9]])c>=f&&(h=Math.max(h,m*Math.exp(-(c-f)*7)));a.y=h,a.z=n%997/997+.0013,a.w=T0[n%T0.length],t.w=Math.min(1,c/.06),t.y=Math.max(0,1-c/.75)}else a.y=0,t.y=0,t.w=0}const A0=()=>Object.assign(new G0(new Uint8Array(4),1,1),{needsUpdate:!0}),j0=new Map;for(const t of e0){const a={tLaData:{value:A0()},tLaSprite:{value:A0()}};j0.set(t.motion,a),_0({id:t.motion,glsl:zt(t.k)+t.glsl,step:t.step,uniforms:a,day:t.day})}e0.map(t=>t.motion);const _t=t=>!!t&&e0.some(a=>a.motion===t);function I0(t,a,e){const o=new U0(t);return o.flipY=!1,o.colorSpace=a?V0:Q0,o.generateMipmaps=!0,o.minFilter=L0,o.magFilter=J0,o.anisotropy=4,o.wrapS=e?Y0:w0,o.wrapT=w0,o.needsUpdate=!0,o}const r0=new Map;function Pt(t){let a=r0.get(t.motion);return a||(a=(async()=>{const e=j0.get(t.motion),[o,l]=await Promise.all([B(`${p0}/${t.motion}/data.webp`),t.sprites?B(`${p0}/${t.motion}/sprites.webp`):Promise.resolve(null)]);e.tLaData.value=I0(o,!1,!1),l&&(e.tLaSprite.value=I0(l,!0,!0))})(),r0.set(t.motion,a),a.catch(()=>r0.delete(t.motion))),a}const S0=new Map;function Ht(t,a){const e=`${t}|${a}`;let o=S0.get(e);return o||(o=m0({livery:{colors:{base:"#808080",accent:"#808080",ink:"#808080"},pattern:"solid",finish:"satin",radome:"base"}},t,a),S0.set(e,o)),o}async function Et(t){const a=e0.find(s=>s.motion===t.motion);if(!a)throw new Error(`no living livery ${t.motion}`);const[e,o,l]=await Promise.all(["top","bottom","side"].map(s=>B(`${p0}/${a.motion}/${s}.webp`)));await Pt(a).catch(s=>console.warn("living art",a.motion,s));const i=new Map;return(s,n)=>{const c=`${s}|${n}`;let r=i.get(c);if(r)return r;const h=128*s,f=I=>Math.round(I/4)*4,m=f((p.x1-p.x0)*h),d=f((p.z1-p.z0)*h),u=(I,k,M)=>{const z=new Z(k,M,h);return z.col.drawImage(I,0,0,k,M),z.rough.fillStyle=H0(a.rough),z.rough.fillRect(0,0,k,M),z.bytes()},g={top:u(e,m,d),bottom:u(o,m,d),side:u(l,f((p.z1-p.z0)*h),f(2*(p.y1-p.y0)*h))},y=Ht(s,n);for(const I of["top","bottom","side"]){const k=g[I].data,M=y[I].data;if(k.length===M.length)for(let z=0;z<k.length;z+=4){const H=Math.pow(Math.min(1.25,Math.max(.12,(M[z]+M[z+1]+M[z+2])/384)),a.detail);k[z]=Math.min(255,k[z]*H),k[z+1]=Math.min(255,k[z+1]*H),k[z+2]=Math.min(255,k[z+2]*H),k[z+3]=Math.min(255,Math.max(0,k[z+3]+(M[z+3]-72)*.3))}}return r={...g,motion:a.motion},i.set(c,r),r}}let L=null;const $t="VPComic";function Ft(){return L||(L=(async()=>{if(!(typeof document>"u"||typeof FontFace>"u"))try{const t=new FontFace($t,'url(/fonts/bangers-400-normal.woff2) format("woff2")',{weight:"400",style:"normal"});await t.load(),document.fonts.add(t)}catch(t){console.warn("comic font",t)}})(),L)}const jt=[[p.x0,p.z0],[p.x1,p.z0],[p.x1,p.z1],[p.x0,p.z1]];p.z0,p.y0,p.z1,p.y0,p.z1,p.y1,p.z0,p.y1;const _=-6.6,a0=t=>K0(t)+.03,w=(t,a=64)=>Array.from({length:a+1},(e,o)=>t(o/a)),t0=(t,a)=>[...t,...a.slice().reverse()],v=(t,a,e)=>t+(a-t)*e,j=t=>Math.max(0,Math.min(1,t)),q=(t,a,e)=>{const o=j((e-t)/(a-t));return o*o*(3-2*o)},x=t=>{const a=parseInt(t.slice(1),16);return[a>>16&255,a>>8&255,a&255]},T=(t,a,e)=>[v(t[0],a[0],e),v(t[1],a[1],e),v(t[2],a[2],e)],S=(t,a,e=0)=>{let o=t*374761393+a*668265263+e*2147483647|0;return o=(o^o>>>13)*1274126177,o^=o>>>16,(o>>>0)/4294967296};function o0(t,a,e=0){const o=Math.floor(t),l=Math.floor(a),i=t-o,s=a-l,n=i*i*(3-2*i),c=s*s*(3-2*s);return v(v(S(o,l,e),S(o+1,l,e),n),v(S(o,l+1,e),S(o+1,l+1,e),n),c)}const G=(t,a,e=0,o=4)=>{let l=0,i=.5,s=1;for(let n=0;n<o;n++)l+=i*o0(t*s,a*s,e+n*17),i*=.5,s*=2.03;return l/(1-.5**o)},O0=(t,a,e,o,l=60)=>(t-o[0])**2+(a-o[1])**2+(e-o[2])**2<l*l,d0=(t,a,e)=>(.2126*t+.7152*a+.0722*e)/255,u0=(t,a,e)=>{const o=Math.max(t,a,e),l=Math.min(t,a,e);return o?(o-l)/o:0},B0=(t=.1)=>[[O(b.yRoot-.2)-t,b.yRoot-.2],[O(b.yTip)-t,b.yTip+t],[D(b.yTip)+t,b.yTip+t],[D(b.yRoot-.2)+t,b.yRoot-.2]],g0=(t=-7.6,a=4.4,e=0)=>w(o=>{const l=v(t,a,o);return[l,a0(l)+e]},120),v0=(t,a,e,o)=>t.poly(jt,a,e),A={};A["candy-apple"]={base:"#6c0510",rough:.3,detail:.35,paint(t){t.field("top",()=>[150,14,26],.3);for(const a of["left","right"])t.field(a,(e,o)=>o<2?[70,3,9]:null,.3);t.flanks(a=>{a.stroke(g0(-7.9,4.5,.02),.032,"#e0b85c",.3),a.stroke([[O(b.yRoot)+.12,b.yRoot],[O(b.yTip-.15)+.12,b.yTip-.15]],.032,"#e0b85c",.3)})},fx:(t,a,e)=>t>150&&a>120&&e<140?[255,0,0,150]:t>2.2*a?[128,0,0,110]:null};{const t="#ecebe6",a="#3b3e43",e="#c27a4c",o="#6a6d72",l=i=>i<-6.4?1.62:v(a0(i)+.02,2.25,q(-2,4.6,i));A["pearl-graphite"]={base:t,rough:.3,detail:.45,paint(i){i.plan(!1,s=>{s.poly([[p.x0,p.z0],[p.x1,p.z0],[p.x1,_],[p.x0,_]],o,.48)}),i.plan(!0,s=>v0(s,a,.48)),i.flanks(s=>{const n=w(c=>{const r=v(-6.4,6,c);return[r,l(r)]},160);s.poly([...n,[6,p.y0],[-6.4,p.y0]],a,.48),s.poly([[p.z0,p.y0],[_,p.y0],[_,p.y1],[p.z0,p.y1]],o,.48),s.stroke(n,.03,e,.3),s.stroke([[_,1.5],[_,2.6]],.03,e,.3)})},fx:(i,s,n)=>d0(i,s,n)>.7?[0,0,190,150]:i>s+30&&i>140?[255,0,0,150]:null}}{const t=o=>{const l=(o-3.4)/1.5;if(l<0||l>1)return null;const i=[[0,x("#a8a9aa")],[.3,x("#dcb25c")],[.5,x("#b45e36")],[.66,x("#6c3aa6")],[.82,x("#2f6ad6")],[1,x("#8494aa")]];for(let s=1;s<i.length;s++)if(l<=i[s][0])return T(i[s-1][1],i[s][1],(l-i[s-1][0])/(i[s][0]-i[s-1][0]));return null},a=(o,l)=>{const i=Math.floor(o/.025),s=Math.floor(l/.025),n=i+Math.floor(s/2)*2+s>>1&1,c=o/.025%1,r=l/.025%1,f=22+30*Math.sin(n?Math.PI*r:Math.PI*c)*(n?1:.7);return[f,f+1,f+4]},e=(o,l)=>{const s=158+34*(S(Math.floor(l*900),3)*.6+o0(o*.8,l*900,5)*.4-.5)+10*(G(o*.5,l*.5,9,3)-.5);return[s,s+1,s+3]};A["brushed-titanium"]={base:"#a8a9aa",rough:.46,detail:.5,paint(o){o.field("top",(l,i)=>{const s=e(i,l),n=Math.abs(l)<1.3?t(i):null;return n?T(s,n,.85):s}),o.field("bottom",(l,i)=>{const s=e(i,l),n=Math.abs(l)<1.3?t(i):null;return n?T(s,n,.85):s});for(const l of["left","right"])o.field(l,(i,s)=>{const n=e(i,s),c=s<3?t(i):null;return c?T(n,c,.85):n});o.field("top",(l,i)=>Math.abs(l)<.32+.06*q(-2.6,0,i)&&i>-2.75&&i<4.6?a(l,i):null);for(const l of["left","right"])o.field(l,(i,s)=>s>b.yRoot-.05&&i>O(s)-.15&&i<4.9?a(i,s):null);for(const l of["left","right"])o.field(l,(i,s)=>s>2.56&&i>-2.75&&i<4.6?a(i,s):null)},fx:(o,l,i)=>d0(o,l,i)<.25?[0,0,0,70]:u0(o,l,i)>.25?[230,0,0,90]:[200,0,0,30]}}A["holo-foil"]={base:"#c9ccd3",rough:.3,detail:.3,paint(t){const a=(e,o)=>{const i=((e*.55+o*.35+.25*G(e*.3,o*.3,4,3))%1+1)%1,s=[.5+.5*Math.cos(6.283*i),.5+.5*Math.cos(6.283*(i+.33)),.5+.5*Math.cos(6.283*(i+.67))];return[176+76*s[0],176+76*s[1],182+72*s[2]]};for(const e of["top","bottom","left","right"])t.field(e,a)},fx:()=>[70,0,120,140]};{const t=a=>a<-9?1.48:a<-6?v(1.48,2.05,(a+9)/3):a<-4?v(2.05,2.2,(a+6)/2):a<.6?v(2.2,2.6,q(-4,-3.3,a)):v(2.6,2.5,q(.6,5,a));A["swiss-minimal"]={base:"#ece9e1",rough:.64,detail:.5,paint(a){a.plan(!1,e=>{e.poly([[-.46,p.z0],[.46,p.z0],[.46,p.z1],[-.46,p.z1]],"#151618",.62),e.stroke([[.49,-3.3],[.49,p.z1]],.07,"#ff5a14",.62),e.stroke([[-.49,-3.3],[-.49,p.z1]],.07,"#ff5a14",.62)}),a.flanks(e=>{const o=w(l=>{const i=v(p.z0,p.z1,l);return[i,t(i)]},160);e.poly([...o,[p.z1,p.y1],[p.z0,p.y1]],"#151618",.62),e.stroke(w(l=>{const i=v(-9.2,4.8,l);return[i,t(i)-.045]},200),.07,"#ff5a14",.62)})}}}{const t=["#5a3420","#c8641e","#d9a52a"],o=l=>l<-5.6?v(1.95,2.3,q(-8,-5.6,l)):l<.5?v(2.3,2.62,q(-5.6,-2.2,l)):2.62;A["seventies-stripes"]={base:"#efe5cf",rough:.29,detail:.45,paint(l){l.flanks(i=>{i.poly([[p.z0,p.y0],[-6.9,p.y0],[-6.6,p.y1],[p.z0,p.y1]],t[0],.29),t.forEach((s,n)=>{const c=n*.24000000000000002,r=w(u=>{const g=v(-6.9,.9,u);return[g,o(g)-c]},120),h=r.map(([u,g])=>[u,g-.2]);i.poly(t0(r,h),s,.29);const f=.12+n*(.2+.04)*1.6,m=[[.9+f,o(.9)-c],[O(b.yTip)+f,b.yTip+.1]],d=[[.9+f+.2*1.6,o(.9)-c-.2],[O(b.yTip)+f+.2*1.6,b.yTip+.1]];i.poly(t0(m,d),s,.29),i.poly([[.5,o(.5)-c],[.9+f,o(.9)-c],[.9+f+.2*1.6,o(.9)-c-.2],[.5,o(.5)-c-.2]],s,.29)})}),l.plan(!1,i=>{i.poly([[p.x0,p.z0],[p.x1,p.z0],[p.x1,-6.75],[p.x0,-6.75]],t[0],.29),t.forEach((s,n)=>{for(const c of[1,-1]){const r=(.2+n*.24000000000000002)*c,h=(.2+n*(.2+.04)+.2)*c;i.poly([[r,-6.75],[h,-6.75],[h,4.4],[r,4.4]],s,.29)}})})}}}{const t=[x("#1d0b4a"),x("#5a1a8c"),x("#d82a8a"),x("#ff8a30")],a=[255,46,196],e=[60,240,255],o=[24,8,52];A.synthwave={base:"#2a0f5c",rough:.42,detail:.4,paint(l){const i=[x("#8a4ad0"),x("#3a1474")];for(const s of["left","right"])l.field(s,(n,c)=>{const r=a0(n),h=2.9,f=T(i[0],i[1],q(-9.4,-6,n));if(c<r)return T(f,T(x("#e0287a"),x("#ff8a30"),j((r-c)/.8)),q(-6.6,-5.4,n));const m=q(-5.4,-4.4,n);if(m<=0)return T(f,x("#c0287e"),j((r+.25-c)/.25)*.8);const d=(c-r)/.2,u=(n+9.6)/.36,y=(Math.abs(d-Math.round(d))<.12||Math.abs(u-Math.round(u))<.07)&&c<h-.05?[a[0],a[1],a[2]]:T(o,t[1],j((c-r)/(h-r))*.6);return T(f,y,m)});for(const s of["left","right"])l.field(s,(n,c)=>{if(c<b.yRoot-.05)return null;const r=3.05,h=3.35,f=.95,m=n-r,d=c-h;if(Math.hypot(m,d)<f){if(d<0&&Math.abs(d*-1/.17%1-.5)<.12+-d/f*.35)return[42,10,78];const I=j((d+f)/(2*f));return T(x("#ff3a8c"),x("#ffe14a"),I)}const g=S(Math.floor(n*40),Math.floor(c*40),7)>.995?230:0;return g?[g,g,255]:T(t[0],t[1],j((4.9-c)/2.4))});l.flanks(s=>{s.stroke(g0(-8.1,4.6,0),.045,"#3cf0ff",.25),s.stroke(w(n=>{const c=v(b.yRoot,b.yTip,n);return[O(c)+.03,c]},20),.04,"#3cf0ff",.25)}),l.field("top",(s,n)=>{const c=Math.abs(s)>1.05&&n>$(Math.abs(s))-.05&&n<P0(Math.abs(s))+.1,r=Math.abs(s)>1.05&&n>2.8;if(c||r){const h=Math.abs(s)%.45,f=(n+9.6)%.45;return h<.03||f<.03?[a[0],a[1],a[2]]:[o[0],o[1],o[2]]}return T(x("#7a3cc0"),x("#3a1474"),q(-9.4,-5.5,n))}),l.plan(!1,s=>{for(const n of[1,-1])s.stroke([[1.1*n,$(1.1)+.03],[N.xTip*n,$(N.xTip)+.03]],.05,"#3cf0ff",.25)}),l.field("bottom",s=>T(x("#ff8a30"),x("#e0287a"),q(.4,1.6,Math.abs(s))*.8))},fx:(l,i,s)=>O0(l,i,s,a,50)||O0(l,i,s,e,60)?[0,210,0,120]:l>200&&i>150&&s<120?[0,120,0,60]:null}}{const t=x("#64757f"),a=x("#e9ecec"),e=x("#29343d"),o=Array.from({length:17},(i,s)=>({z:-4.1+s*.56+(S(s,3)-.5)*.22,w:.12+S(s,5)*.12,tilt:(S(s,7)-.5)*.25})),l=(i,s)=>{for(const n of o){const c=Math.abs(i-(n.z+(s-2.5)*n.tilt)+.05*Math.sin(s*9+n.z));if(c<n.w/2)return 1-c/(n.w/2)*.3}return 0};A["tiger-shark"]={base:"#64757f",rough:.66,detail:.5,paint(i){for(const s of["left","right"])i.field(s,(n,c)=>{const r=1.58+.16*q(-7.5,-5,n)*(1-q(0,4,n))+.09*Math.sin(n*2.3)+.06*Math.sin(n*5.1+1),h=q(r-.04,r+.04,c);let f=T(a,t,h);const m=l(n,c)*q(r,r+.45,c)*.85;m>0&&(f=T(f,e,m));const d=(S(Math.floor(n*180),Math.floor(c*180),2)-.5)*10;return[f[0]+d,f[1]+d,f[2]+d]});i.field("top",(s,n)=>{const c=Math.abs(s),r=l(n+c*.35+.07*Math.sin(s*6+n),3+.4*Math.sin(s*2.3))*.75*q(-5.2,-3.8,n),h=r>0?T(t,e,r):t,f=(S(Math.floor(s*180),Math.floor(n*180),3)-.5)*10;return[h[0]+f,h[1]+f,h[2]+f]}),i.field("bottom",()=>a),i.flanks(s=>{for(let h=0;h<5;h++){const f=-3.4+h*.2,m=w(d=>[f-.1*Math.sin(d*Math.PI),v(2.1,2.58-h*.015,d)],16);s.stroke(m,.065,"#141a20",.7),s.stroke(m.map(([d,u])=>[d+.04,u]),.014,"rgba(255,255,255,0.3)",.7)}i.plan(!1,h=>{for(const f of[1,-1])for(let m=0;m<5;m++){const d=-3.4+m*.2;h.stroke(w(u=>[f*v(.62,1.02,u),d-.1*Math.sin(u*Math.PI)],16),.065,"#141a20",.7)}});const n=[-5.65,1.97],c=w(h=>[n[0]+.17*Math.cos(h*6.283),n[1]+.12*Math.sin(h*6.283)],40);s.poly(c,"#dfe3e4",.5),s.poly(c.map(([h,f])=>[n[0]+(h-n[0])*.74,n[1]+(f-n[1])*.86]),"#0b0e12",.28),s.poly(w(h=>[n[0]-.05+.03*Math.cos(h*6.283),n[1]+.035+.024*Math.sin(h*6.283)],16),"#ffffff",.28);const r=w(h=>[v(-9.1,-7.2,h),1.42+.06*h*h+(h>.85?(h-.85)*.9:0)],40);s.stroke(r,.035,"#1b2228",.6)})},fx:(i,s,n)=>i<20&&s<25&&n<30?[0,0,0,200]:null}}{const t=[x("#4a2a84"),x("#2c1858"),x("#1d7378"),x("#121018"),x("#a6ff2e")],a=(e,o)=>{const i=Math.floor(e/.09),s=Math.floor(o/.09),n=G(i*.11,s*.11,3,3),c=G(i*.23+40,s*.23,11,2),r=S(i,s,5)*.12,h=n+r;return c+r>.8?t[4]:h<.4?t[3]:h<.52?t[2]:h<.66?t[0]:t[1]};A["violet-digital"]={base:"#3a2470",rough:.45,detail:.5,paint(e){for(const o of["top","bottom","left","right"])e.field(o,a)}}}{const t=["#a9b3bb","#4b555f","#ff5a1a","#dde2e6"],a=[.32,.27,.19,.22],e=(o,l,i,s)=>{for(let n=0;n<s;n++){const c=v(i[0],i[2],l.rnd()),r=v(i[1],i[3],l.rnd()),h=.8+l.rnd()*2.2,f=l.rnd()*Math.PI,m=3+Math.floor(l.rnd()*2),d=[];for(let y=0;y<m;y++){const I=f+y/m*Math.PI*2+(l.rnd()-.5)*.9,k=h*(.45+l.rnd()*.75);d.push([c+Math.cos(I)*k*1.5,r+Math.sin(I)*k*.6])}let u=l.rnd(),g=0;for(;g<a.length-1&&u>a[g];)u-=a[g],g++;o.poly(d,t[g],.66)}};A["neon-splinter"]={base:"#d3d9de",rough:.66,detail:.5,paint(o){o.plan(!1,l=>e(l,o,[p.x0,p.z0,p.x1,p.z1],150)),o.plan(!0,l=>e(l,o,[p.x0,p.z0,p.x1,p.z1],60)),o.flanks(l=>e(l,o,[p.z0,p.y0,p.z1,p.y1],150)),o.plan(!1,l=>l.poly([[p.x0,p.z0],[p.x1,p.z0],[p.x1,_],[p.x0,_]],"#c9ced3",.6)),o.flanks(l=>l.poly([[p.z0,p.y0],[_,p.y0],[_,p.y1],[p.z0,p.y1]],"#c9ced3",.6))}}}{const t=x("#141516"),a=x("#f1f1ee"),e=x("#5b7590"),o=i=>Array.from({length:7},(s,n)=>({a:S(n,1,i),b:S(n,2,i),ang:S(n,3,i)*Math.PI,w:.3+S(n,4,i)*.25,pal:S(n,5,i)>.4?[t,a]:S(n,6,i)>.25?[t,e]:[e,a]})),l=(i,s)=>(n,c)=>{let r=1e9,h=i[0];for(const u of i){const g=n-v(s[0],s[2],u.a),y=(c-v(s[1],s[3],u.b))*1.3,I=g*g+y*y;I<r&&(r=I,h=u)}const f=-n*Math.sin(h.ang)+c*Math.cos(h.ang),m=(n*Math.cos(h.ang)+c*Math.sin(h.ang)+.35*Math.sin(f*.8+h.a*6))/h.w,d=h.pal[Math.floor(m)&1];return[d[0],d[1],d[2]]};A.dazzle={base:"#f1f1ee",rough:.5,detail:.45,paint(i){i.field("top",l(o(1),[-4,-9,4,6])),i.field("bottom",l(o(2),[-4,-9,4,6])),i.field("left",l(o(3),[-9,.8,5.5,4.8])),i.field("right",l(o(3),[-9,.8,5.5,4.8])),i.flanks(s=>s.poly([[p.z0,p.y0],[-7.7,p.y0],[-7.7,p.y1],[p.z0,p.y1]],"#141516",.4)),i.plan(!1,s=>s.poly([[p.x0,p.z0],[p.x1,p.z0],[p.x1,-7.7],[p.x0,-7.7]],"#141516",.4))}}}{const t="#d42a1f",a="#f2bf18",e="#1f4fa8",o="#151515",i=(s,n,c=3.4,r=1.75)=>[[s,c],[n,c],[n+(c-r)*.35,r],[s+(c-r)*.35,r]];A.bauhaus={base:"#efe9dc",rough:.55,detail:.45,paint(s){s.flanks(n=>{n.poly([[-8.05,0],[-6.75,0],[-6.75,5],[-8.05,5]],a,.5),n.poly([[-8.35,1.62],[-7.45,1.95],[-7.45,5],[-8.35,5]],t,.5),n.poly(w(c=>[-5.45+.42*Math.cos(c*6.283),1.68+.42*Math.sin(c*6.283)],48),o,.5),n.poly(i(-3.55,-2.65),e,.5),n.poly(i(-1.75,-.55),t,.5),n.poly(i(-.55,-.38),o,.5),n.poly(i(.35,2.25),a,.5),n.poly(i(2.25,2.45),o,.5),n.poly(i(2.45,3.6,3),e,.5),n.poly([[-4.45,2.14],[-.95,2.14],[-.95,2.34],[-4.45,2.34]],o,.5),n.poly([[-4.9,0],[-4.1,0],[-4.1,1.32],[-4.9,1.32]],e,.5),n.poly([[-4.1,0],[-3.05,0],[-3.05,1.32],[-4.1,1.32]],t,.5),n.poly([[-3.05,0],[-2.2,0],[-2.2,1.32],[-3.05,1.32]],a,.5),n.poly([[-2.2,0],[-1.6,0],[-1.6,1.32],[-2.2,1.32]],e,.5),n.poly(B0(.2),t,.5),n.poly(w(c=>{const r=v(b.yRoot-.2,b.yTip+.1,c);return[D(r)-.5,r]},2).concat(w(c=>{const r=v(b.yTip+.1,b.yRoot-.2,c);return[D(r)-.32,r]},2)),o,.5),n.poly(w(c=>{const r=v(b.yRoot-.2,b.yTip+.1,c);return[D(r)-.32,r]},2).concat(w(c=>{const r=v(b.yTip+.1,b.yRoot-.2,c);return[D(r)+.2,r]},2)),"#efe9dc",.5)}),s.plan(!1,n=>{n.poly([[p.x0,-8.05],[p.x1,-8.05],[p.x1,-6.75],[p.x0,-6.75]],a,.5),n.poly([[p.x0,-8.35],[p.x1,-8.35],[p.x1,-7.45],[p.x0,-7.45]],t,.5);const c=(r,h,f,m=1.15)=>n.poly([[-m,r],[m,r],[m,h],[-m,h]],f,.5);c(-3.55,-2.65,e),c(-1.75,-.55,t),c(-.55,-.38,o),c(.35,2.25,a),c(2.25,2.45,o),c(2.45,3.6,e,1);for(const r of[1,-1])n.poly([[1.1*r,$(1.1)-.1],[(N.xTip+.1)*r,$(N.xTip)-.1],[(N.xTip+.1)*r,$(N.xTip)+.3],[1.1*r,$(1.1)+.3]],t,.5),n.poly([[3.55*r,-1.5],[3.75*r,-1.5],[3.75*r,2.6],[3.55*r,2.6]],o,.5),n.poly([[3.75*r,-1.5],[(N.xTip+.2)*r,-1.5],[(N.xTip+.2)*r,2.6],[3.75*r,2.6]],r>0?a:t,.5),n.poly([[1.15*r,3],[(b0.xTip+.2)*r,3],[(b0.xTip+.2)*r,5.8],[1.15*r,5.8]],r>0?e:a,.5)}),s.plan(!0,n=>{n.poly([[-.4,-4],[.4,-4],[.4,3],[-.4,3]],t,.5),n.poly([[p.x0,-8.05],[p.x1,-8.05],[p.x1,-6.75],[p.x0,-6.75]],a,.5)})}}}{const t="#e2b45c",a=(e,o,l,i)=>{const s=(n,c,r,h,f,m)=>{const d=[[n,c]];let u=r;for(let g=0;g<h;g++)u+=(o.rnd()-.5)*.5,n+=Math.cos(u)*.18,c+=Math.sin(u)*.18,d.push([n,c]),m<2&&o.rnd()<.1&&s(n,c,u+(o.rnd()<.5?1:-1)*(.6+o.rnd()*.7),Math.floor(h*.4),f*.6,m+1);e.stroke(d,f*1.5,"rgba(110,80,30,0.25)",.3),e.stroke(d,f,t,.3),e.poly(w(g=>[d[0][0]+f*1.4*Math.cos(g*6.283),d[0][1]+f*1.4*Math.sin(g*6.283)],12),t,.3)};for(let n=0;n<i;n++)s(v(l[0],l[2],o.rnd()),v(l[1],l[3],o.rnd()),o.rnd()*6.283,26+Math.floor(o.rnd()*34),.035+o.rnd()*.03,0)};A.kintsugi={base:"#121315",rough:.6,detail:.4,paint(e){e.plan(!1,o=>a(o,e,[-4.6,-8.6,4.6,5.6],13)),e.plan(!0,o=>a(o,e,[-4.6,-8.6,4.6,5.6],7)),e.flanks(o=>a(o,e,[-8.6,1,4.8,4.8],11))},fx:(e,o,l)=>e>120&&o>80&&l<120&&e>l+50?[235,0,0,90]:null}}{const t="#1d3fae",a="#f4f4f2",e="#d6a63e";A["starburst-display"]={base:t,rough:.29,detail:.4,paint(o){const l=[0,-2.4],i=(s,n,c,r,h,f)=>{const m=(c-r)*Math.PI/180,d=(c+r)*Math.PI/180;s.poly([[l[0]+n*.02,l[1]],[l[0]+n*Math.sin(m)*h,l[1]+Math.cos(m)*h],[l[0]+n*Math.sin(d)*h,l[1]+Math.cos(d)*h]],f,.29)};o.plan(!1,s=>{for(const c of[1,-1]){for(const[r,h]of[[9,2.2],[33,3.2],[58,3.6],[82,3]])i(s,c,r,h,9,a);for(const[r,h]of[[21,1.2],[46,1.5],[70,1.4]])i(s,c,r,h,9,e)}const n=(c,r,h)=>s.poly([...w(f=>{const m=v(-.9,.9,f);return[m,-7.15+c+1.15*Math.abs(m)]},24),...w(f=>{const m=v(.9,-.9,f);return[m,-7.15+c+r+1.15*Math.abs(m)]},24)],h,.29);n(0,.15,e),n(.15,.4,a),s.poly(w(c=>[.22*Math.cos(c*6.283),-2.4+.3*Math.sin(c*6.283)],24),a,.29)}),o.plan(!0,s=>v0(s,a,.32)),o.flanks(s=>{const n=w(f=>{const m=v(-9.6,6,f);return[m,v(.6,1.32,q(-6.5,-4,m))+.25*q(1,5,m)]},120);s.poly([...n,[6,p.y0],[-9.6,p.y0]],a,.32);const c=w(f=>[v(-7.1,-3.4,f),v(2.32,1.3,f**.9)+.16*Math.sin(Math.PI*f)],60),r=c.map(([f,m],d)=>[f+.05,m-.15-.06*Math.sin(Math.PI*d/60)]),h=c.map(([f,m],d)=>[f+.12,m-.45-.12*Math.sin(Math.PI*d/60)]);s.poly(t0(r,h),a,.29),s.poly(t0(c,r),e,.29),s.stroke(w(f=>[v(-4.4,-2.3,f),v(2.6,1.75,f*f)+.12*Math.sin(Math.PI*f)],40),.14,e,.29),s.poly([[-2.45,2.75],[-2.15,2.75],[-.9,1.35],[-1.6,1.35]],a,.29);for(let f=0;f<4;f++){const m=.9+f*.55,d=w(u=>[v(m,3.6+f*.32,u)-.25*Math.sin(Math.PI*u),v(2.6,4.95,u)],30);s.stroke(d,f%2?.08:.2,f%2?e:a,.29)}s.poly([[O(4.62)-.1,4.62],[D(4.62)+.1,4.62],[D(5)+.1,5],[O(5)-.1,5]],e,.29)})},fx:(o,l,i)=>o>160&&l>110&&i<110?[255,0,0,160]:d0(o,l,i)>.8?[0,0,0,120]:[0,0,60,120]}}{const t="#6f6e52",a="#a9aca6",e="#9fa198",o=(l,i,s,n)=>{l.poly(w(c=>[i[0]+.55*s*Math.cos(c*6.283),i[1]-.15*s+.42*s*Math.sin(c*6.283)],20),n,.7);for(const[c,r]of[[-.62,.42],[-.22,.72],[.22,.72],[.62,.42]])l.poly(w(h=>[i[0]+c*s+.2*s*Math.cos(h*6.283),i[1]+r*s+.24*s*Math.sin(h*6.283)],12),n,.7)};A["tiger-nose-art"]={base:t,rough:.72,detail:.75,art:["nose"],paint(l,i){l.plan(!0,c=>{v0(c,a,.7),i0(c,l.rnd,.9,"bottom")}),l.plan(!1,c=>{c.poly([[p.x0,p.z0],[p.x1,p.z0],[p.x1,-7],[p.x0,-7]],e,.68),i0(c,l.rnd,.9,"top")});const s=(c,r)=>{const h=G(c*1.3,r*1.3,21,4),f=S(Math.floor(c*60),Math.floor(r*60),9);return h>.6||h>.5&&f>.8?[150,148,126]:null};for(const c of["top","left","right"])l.field(c,s,.45);const n=(c,r)=>{const h=G(c*.9+7,r*.9,33,4),f=Math.floor(c/.035),m=Math.floor(r/.025);return h>.6&&S(f,m,12)>.84-(h-.6)*1.5?[214,214,206]:null};for(const c of["top","left","right"])l.field(c,n,.7);l.flanks(c=>{c.poly([[p.z0,p.y0],[-7,p.y0],[-7,p.y1],[p.z0,p.y1]],e,.68);const r=w(h=>{const f=v(p.z0,p.z1,h);return[f,1.55+.03*Math.sin(f*3)]},120);if(c.poly([...r,[p.z1,p.y0],[p.z0,p.y0]],a,.7),i0(c,l.rnd,.9,"side"),i.nose){const h=i.nose,f=2.05,m=f*h.height/h.width,d=[-6.4,1.8],u=c.col;u.save(),u.translate(d[0]-f/2,d[1]+m/2),u.scale(1,-1),u.drawImage(h,0,0,f,m),u.restore()}for(let h=0;h<2;h++)for(let f=0;f<8;f++){const m=[-5+f*.22,2.27-h*.23];if((f+h)%3===2)for(let d=0;d<4;d++)c.stroke([[m[0]-.07+d*.035,m[1]-.07],[m[0]-.05+d*.035,m[1]+.07]],.018,"#e07a1e",.7);else o(c,m,.085,"#e07a1e")}})}}}const W=["left","top","bottom"],s0=(t,a,e)=>t>140&&a>95&&e<125&&t-e>55&&u0(t,a,e)>.28;A["forged-carbon"]={base:"#1d1e20",rough:.27,detail:.3,art:W,fx:(t,a,e)=>a>140&&a>t+25&&a>e+60?[0,30,0,190]:[0,0,0,205]};A["marble-gold"]={base:"#ecebe8",rough:.27,detail:.3,art:W,grade:{gamma:1.1,contrast:1.25,pivot:.82,saturation:1.15},fx:(t,a,e)=>s0(t,a,e)?[255,0,0,200]:[0,0,0,175]};A["mecha-vanguard"]={base:"#e9e6de",rough:.42,detail:.35,art:W,paint(t){t.flanks(a=>{const e=(o,l=.1)=>{const i=b.yRoot-.2,s=b.yTip+.1;return[[v(O(i),D(i),o),i],[v(O(s),D(s),o),s],[D(s)+l,s],[D(i)+l,i]]};a.poly(B0(.1),"#5d6266",.45),a.poly(e(.32),"#f08a24",.42)}),t.plan(!1,a=>{for(const e of[1,-1]){const o=n=>$(n)-.06;a.poly([[1.15*e,o(1.15)],[4*e,o(4)],[4*e,o(4)+.34],[1.15*e,o(1.15)+.34]],"#f08a24",.42);for(let n=1.15;n<4-.12;n+=.26){const c=n,r=Math.min(4,n+.13);a.poly([[c*e,o(c)],[r*e,o(r)],[Math.min(4,r+.14)*e,o(Math.min(4,r+.14))+.34],[Math.min(4,c+.14)*e,o(Math.min(4,c+.14))+.34]],"#17181a",.42)}a.poly([[4*e,o(4)],[(N.xTip+.1)*e,o(N.xTip+.1)],[(N.xTip+.1)*e,o(N.xTip+.1)+.55],[4*e,o(4)+.55]],"#22a39a",.42)}})}};A["spray-mural"]={base:"#8d8f91",rough:.55,detail:.4,art:W};A["deco-sunburst"]={base:"#141c3a",rough:.27,detail:.35,art:W,fx:(t,a,e)=>s0(t,a,e)?[255,0,0,185]:[0,0,0,150]};A["onyx-filigree"]={base:"#0d0d0f",rough:.26,detail:.3,art:W,fx:(t,a,e)=>s0(t,a,e)?[255,0,0,175]:[0,0,0,200]};A.glacier={base:"#cfe6ee",rough:.55,detail:.35,art:W,grade:{gamma:1.12,contrast:1.2,pivot:.78,saturation:1.45},fx:(t,a,e)=>e>t+50&&u0(t,a,e)>.35?[0,0,150,190]:null};{const t=x("#4e5d71"),a=x("#2e3846"),e=x("#6a7b91"),o=x("#1d232b"),l=x("#ece4d0"),i=x("#7b6f62"),s=(r,h,f)=>{const m=(o0(r*1.5,h*1.5,4)-.5)*.12,d=(h+9.6)/.32+.9*Math.abs(r),u=Math.abs(d-Math.round(d))<.06?.22:0;return T(T(e,t,j(.55+f*.45+m)),a,u)},n=(r,h)=>{const f=(r+9.6)/.3+.35*Math.abs(h);return Math.abs(f-Math.round(f))<.05&&o0(r*3,h*3,8)>.45},c=(r,h)=>{const f=Math.abs(r),m=P0(f)-h;if(f<1.1||m<0||m>1.6+.4*q(2,4.5,f))return null;const d=(f-1.1+m*.25)/.24,g=d-Math.floor(d)<.07?.8:0,y=q(.9,.1,m)*.35+q(3.5,4.6,f)*.35;return T(T(t,a,y),o,g*.6)};A["raptor-feathers"]={base:"#4e5d71",rough:.4,detail:.4,paint(r){for(const h of["left","right"])r.field(h,(f,m)=>{const d=a0(f)+.05+.04*Math.sin(f*4);if(m<d)return n(f,(m-d)*3)?i:l;if(m>b.yRoot+.1&&f>O(m)-.1){const y=(m-b.yRoot)/.42;return Math.abs(y-Math.round(y))<.12?a:T(e,t,.6)}const u=f<-6?1-q(-6.4,-6,f):0,g=Math.abs(f-(-6.55+(2.05-m)*.25))<.16+(m-d)*.12&&m<2.15?1:0;return T(s(m,f,q(d,d+.9,m)),o,Math.max(u,g)*.95)});r.field("top",(h,f)=>f<-6?T(s(h,f,1),o,1-q(-6.4,-6,f)):c(h,f)??s(h,f,1)),r.field("bottom",(h,f)=>n(f,h)?i:l),r.flanks(h=>{h.stroke(g0(-8.6,4.6,.06),.03,"#d6a84c",.3),h.poly([[-8.95,.6],[-8.85,.6],[-8.85,4],[-8.95,4]],"#d6a84c",.3)}),r.plan(!1,h=>h.poly([[p.x0,-8.95],[p.x1,-8.95],[p.x1,-8.85],[p.x0,-8.85]],"#d6a84c",.3))},fx:(r,h,f)=>s0(r,h,f)?[255,0,0,160]:null}}const Bt="/skins/shop/studio",J=t=>Math.round(t/4)*4;function Wt(t,a){const e=128*t,o=J((p.x1-p.x0)*e),l=J((p.z1-p.z0)*e),i=new Z(o,l,e),s=new Z(o,l,e),n=new Z(J((p.z1-p.z0)*e),J(2*(p.y1-p.y0)*e),e),c=(f,m)=>{const d=f?s:i;d.frame(e,0,0,e,-p.x0*e,-p.z0*e),m(d)},r=(f,m)=>{const d=n,u=d.h/2;for(const g of[d.col,d.rough])g.save(),g.setTransform(1,0,0,1,0,0),g.beginPath(),g.rect(0,f?u:0,d.w,u),g.clip();f?d.frame(-e,0,0,-e,p.z1*e,u+p.y1*e):d.frame(e,0,0,-e,-p.z0*e,p.y1*e),m(d);for(const g of[d.col,d.rough])g.restore()},h=(f,m,d=1)=>{const u=f==="top"?i:f==="bottom"?s:n,g=n.h/2,y=f==="right"?g:0,I=f==="left"||f==="right"?g:u.h,k=u.col.getImageData(0,y,u.w,I),M=k.data;for(let z=0;z<I;z++)for(let H=0;H<u.w;H++){const n0=(H+.5)/e,l0=(z+.5)/e,F=f==="top"||f==="bottom"?m(p.x0+n0,p.z0+l0):f==="left"?m(p.z0+n0,p.y1-l0):m(p.z1-n0,p.y1-l0);if(!F)continue;const P=(z*u.w+H)*4;d>=1?(M[P]=F[0],M[P+1]=F[1],M[P+2]=F[2]):(M[P]+=(F[0]-M[P])*d,M[P+1]+=(F[1]-M[P+1])*d,M[P+2]+=(F[2]-M[P+2])*d)}u.col.putImageData(k,0,y)};return{k:e,rnd:Z0(a),top:i,bottom:s,side:n,plan:c,flank:r,flanks:f=>{r(!1,m=>f(m,!1)),r(!0,m=>f(m,!0))},field:h}}function Ct(t,a,e){for(const[o,l]of[[t.col,a],[t.rough,H0(e)]])o.save(),o.setTransform(1,0,0,1,0,0),o.fillStyle=l,o.fillRect(0,0,t.w,t.h),o.restore()}function Y(t,a,e,o,l,i,s=!1){const n=t.col;n.save(),n.setTransform(1,0,0,1,0,0),n.imageSmoothingQuality="high",s?(n.translate(e+l,o),n.scale(-1,1),n.drawImage(a,0,0,l,i)):n.drawImage(a,e,o,l,i),n.restore()}function Kt(t,a){const e=t.col.getImageData(0,0,t.w,t.h),o=e.data,l=a.contrast??1,i=a.saturation??1,s=a.gamma??1,n=a.pivot??.5,c=new Uint8ClampedArray(256);for(let r=0;r<256;r++)c[r]=255*((Math.pow(r/255,s)-n)*l+n);for(let r=0;r<o.length;r+=4){let h=c[o[r]],f=c[o[r+1]],m=c[o[r+2]];const d=.2126*h+.7152*f+.0722*m;h=d+(h-d)*i,f=d+(f-d)*i,m=d+(m-d)*i,o[r]=h,o[r+1]=f,o[r+2]=m}t.col.putImageData(e,0,0)}const N0=new Map;function Gt(t,a){const e=`${t}|${a}`;let o=N0.get(e);return o||(o=m0({livery:{colors:{base:"#808080",accent:"#808080",ink:"#808080"},pattern:"solid",finish:"satin"}},t,a),N0.set(e,o)),o}const Ut=Math.round((.42-.25)/.6*255);function f0(t,a,e){if(e<=0)return;const o=t.data,l=a.data;for(let i=0;i<o.length;i+=4){const s=(l[i]*.3+l[i+1]*.59+l[i+2]*.11)/128,n=1+e*(Math.min(1.25,s)-1);o[i]=Math.min(255,o[i]*n),o[i+1]=Math.min(255,o[i+1]*n),o[i+2]=Math.min(255,o[i+2]*n),o[i+3]=Math.max(0,Math.min(255,o[i+3]+e*(l[i+3]-Ut)))}}function h0(t,a){const{data:e,w:o,h:l}=t,i=Math.max(1,o>>1),s=Math.max(1,l>>1),n=new Uint8Array(i*s*4),c=new Map,r=h=>{const f=e[h]>>2<<18|e[h+1]>>2<<12|e[h+2]>>2<<6|e[h+3]>>2;let m=c.get(f);return m===void 0&&(m=a(e[h],e[h+1],e[h+2],e[h+3]),c.size<1<<18&&c.set(f,m)),m};for(let h=0;h<s;h++)for(let f=0;f<i;f++){let m=0,d=0,u=0,g=0;for(let I=0;I<2;I++)for(let k=0;k<2;k++){const M=r((Math.min(l-1,2*h+I)*o+Math.min(o-1,2*f+k))*4);M&&(m+=M[0],d+=M[1],u+=M[2],g+=M[3])}const y=(h*i+f)*4;n[y]=m>>2,n[y+1]=d>>2,n[y+2]=u>>2,n[y+3]=g>>2}return{data:n,w:i,h:s}}function Vt(t,a,e=1,o=16){const l=Wt(e,o),i=t.rough??.4;for(const f of[l.top,l.bottom,l.side])Ct(f,t.base,i);const s=l.side.h/2;if(a.top&&Y(l.top,a.top,0,0,l.top.w,l.top.h),a.bottom&&Y(l.bottom,a.bottom,0,0,l.bottom.w,l.bottom.h),a.left&&Y(l.side,a.left,0,0,l.side.w,s),(a.right??a.left)&&Y(l.side,a.right??a.left,0,s,l.side.w,s,!a.right),t.grade)for(const f of[l.top,l.bottom,l.side])Kt(f,t.grade);t.paint?.(l,a);const n={top:l.top.bytes(),bottom:l.bottom.bytes(),side:l.side.bytes()},c=Gt(e,o),r=t.detail??.55;f0(n.top,c.top,r),f0(n.bottom,c.bottom,r),f0(n.side,c.side,r);const h=t.coat??i<.36;return n.finish={specular:t.specular??(h?.15:.3),sheen:t.sheen??.04,coat:h},t.fx&&(n.fx={top:h0(n.top,t.fx),bottom:h0(n.bottom,t.fx),side:h0(n.side,t.fx)}),n}const D0=new Map;function Qt(t){let a=D0.get(t);return a||(a=(async()=>{const e=A[t];if(!e)throw new Error(`no studio livery ${t}`);const o={};await Promise.all((e.art??[]).map(async s=>{try{o[s]=await B(`${Bt}/${t}/${s}.webp`)}catch(n){console.warn("studio art",t,s,n)}}));const l=new Map;return(s,n)=>{const c=`${s}|${n}`;let r=l.get(c);return r||(r=Vt(e,o,s,n),l.set(c,r)),r}})(),D0.set(t,a)),a}const C=new Map;function no(t){const a=ht(t);let e=C.get(a);return!e&&t.motion&&_t(t.motion)&&(e=Et(t),C.set(a,e)),e||(e=t.studio?Qt(t.studio):(async()=>{const o={};t.comic&&await Ft(),await Promise.all(Object.entries(t.art??{}).map(async([n,c])=>{if(c)try{o[n]=await B(c)}catch(r){console.warn("skin art",n,r)}}));const l=t.nation?C0(t.nation):null;if(l){try{o.flag=await R0(l.id)}catch(n){console.warn("skin flag",l.id,n)}if(l.reverse==="shift")try{o.flagRev=await R0(l.id,!0)}catch(n){console.warn("skin flag reverse",l.id,n)}}const i=new Map;return(n,c)=>{const r=`${n}|${c}`;let h=i.get(r);return h||(h=m0({livery:{...t,pattern:t.pattern==="tile"&&!o.tile?"solid":t.pattern},art:o},n,c),t.motion&&(h={...h,motion:t.motion}),i.set(r,h)),h}})(),C.set(a,e),C.size>24&&C.delete(C.keys().next().value)),e}async function R0(t,a=!1){if(!a)return await B(x0(t));const e=await(await fetch(x0(t))).text(),o=e.replace(/(<g transform="matrix\(\.2091873 0 0 \.22203612 )([0-9.]+)/,(i,s,n)=>`${s}${(+n+250).toFixed(5)}`);if(o===e)throw new Error("flag reverse: the arms group was not found");const l=URL.createObjectURL(new Blob([o],{type:"image/svg+xml"}));try{return await B(l)}finally{setTimeout(()=>URL.revokeObjectURL(l),1e3)}}export{$t as C,to as S,eo as a,ao as b,oo as c,A as d,X0 as i,Ft as l,no as s,so as v};
