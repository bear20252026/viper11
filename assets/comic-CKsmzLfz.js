import{K as p,O as C,X as h,aa as b,L as z,p as P}from"./three.module-9D8i-8qh.js";import{P as a,C as S}from"./motion-usu7YCPa.js";const x={value:0},g={value:null},r=8,m={abOn:.5,pullOn:6.2,pullOff:5,zoomS:1.7,holdS:1.45};let w=null;const n=()=>w??=Object.assign(new p(new Uint8Array(4),1,1,C,h),{needsUpdate:!0});function u(e){const t=new p(e.data,e.w,e.h,C,h);return t.generateMipmaps=!0,t.minFilter=z,t.wrapS=t.wrapT=P,t.anisotropy=4,t.needsUpdate=!0,t}function A(e=1){g.value??=n();const t=()=>Array.from({length:r},()=>new b);return{on:{value:0},top:{value:n()},bot:{value:n()},side:{value:n()},zoomAt:{value:-99},skreeAt:{value:-99},ink:{value:e},wA:{value:t()},wP:{value:t()},wU:{value:t()},wT:{value:t()},pops:{value:1},st:{ab:!1,pull:!1,slots:Array.from({length:r},()=>({kind:"",t0:-99,life:0,rank:0}))}}}function O(e,t){for(const s of["top","bot","side"])e[s].value!==w&&e[s].value.dispose();if(!t){e.on.value=0,e.top.value=e.bot.value=e.side.value=n();return}e.top.value=u(t.top),e.bot.value=u(t.bottom),e.side.value=u(t.side),e.on.value=1}const W=e=>({uCmOn:e.on,tCmTop:e.top,tCmBot:e.bot,tCmSide:e.side,uCmT:x,uCmZoom:e.zoomAt,uCmSkree:e.skreeAt,uCmInk:e.ink,uCmWA:e.wA,uCmWP:e.wP,uCmWU:e.wU,uCmWT:e.wT,uCmPops:e.pops,tCmAtlas:g}),d=new WeakMap;function q(e){if(!e)return null;let t=d.get(e.root);return t===void 0&&(t=null,e.root.traverse(s=>{const i=s.material?.userData?.comic;i&&!t&&(t=i)}),d.set(e.root,t)),t}function I(e,t,s){if(!e.on.value)return;const l=x.value,i=m,v=t>i.abOn;v&&!e.st.ab&&!(l-e.zoomAt.value>=0&&l-e.zoomAt.value<.9)&&(e.zoomAt.value=l),e.st.ab=v;const f=e.st.pull?s>i.pullOff:s>i.pullOn;f&&!e.st.pull?e.skreeAt.value=l:f&&l-e.skreeAt.value>i.holdS&&(e.skreeAt.value=l-.4),e.st.pull=f}const o=e=>e.toFixed(4),c=S,y=`
uniform float uCmOn; uniform sampler2D tCmTop; uniform sampler2D tCmBot; uniform sampler2D tCmSide;
uniform float uCmT; uniform float uCmZoom; uniform float uCmSkree; uniform float uCmInk;
uniform vec4 uCmWA[${r}]; uniform vec4 uCmWP[${r}]; uniform vec4 uCmWU[${r}]; uniform vec4 uCmWT[${r}];
uniform float uCmPops; uniform sampler2D tCmAtlas;
float cmInkK = 0.0;
// how squarely the surface faces sideways (the caller sets it: the words on the flanks stay off the curve over the top)
float cmSideK = 1.0;
vec2 cmUvP(vec2 xz) { return vec2((xz.x - ${o(a.x0)}) / ${o(a.x1-a.x0)}, 1.0 - (xz.y - ${o(a.z0)}) / ${o(a.z1-a.z0)}); }
vec2 cmUvS(vec2 zy, float side) {
  float yv = clamp((zy.y - ${o(a.y0)}) / ${o(a.y1-a.y0)}, 0.002, 0.998);
  return side < 0.0 ? vec2((zy.x - ${o(a.z0)}) / ${o(a.z1-a.z0)}, 0.5 + 0.5 * yv) : vec2((${o(a.z1)} - zy.x) / ${o(a.z1-a.z0)}, 0.5 * yv);
}
// a decal's scale as it pops: in fast and big, squashes back, settles
float cmPop(float age) {
  if (age < 0.0 || age > ${o(m.zoomS)}) return 0.0;
  if (age < 0.09) return mix(0.25, 1.32, age / 0.09);
  if (age < 0.22) return mix(1.32, 0.9, (age - 0.09) / 0.13);
  if (age < 0.34) return mix(0.9, 1.05, (age - 0.22) / 0.12);
  return mix(1.05, 1.0, min(1.0, (age - 0.34) / 0.25));
}
float cmFade(float age) { return 1.0 - smoothstep(${o(m.zoomS-.35)}, ${o(m.zoomS)}, age); }
// a decal channel: 0.5 its ink, 1 its fill → (ink, fill)
vec2 cmLetters(float v) { float f = smoothstep(0.7, 0.86, v); return vec2(smoothstep(0.2, 0.36, v) * (1.0 - f), f); }
// a word's scale over its life: in fast and big, squashes back, settles, holds (the fade is the caller's)
float cmPopL(float age, float life) {
  if (age < 0.0 || age > life) return 0.0;
  if (age < 0.08) return mix(0.2, 1.38, age / 0.08);
  if (age < 0.2) return mix(1.38, 0.86, (age - 0.08) / 0.12);
  if (age < 0.32) return mix(0.86, 1.06, (age - 0.2) / 0.12);
  return mix(1.06, 1.0, min(1.0, (age - 0.32) / 0.25));
}
// the fight's words on the airframe: each slot a burst and its lettering from the atlas, in its projection's plane,
// read as that view reads (from above: nose up; a side: nose toward the reader's left or right as it faces)
void comicWords(inout vec3 col, vec3 P, float wT, float wS, float side) {
  vec3 dPx = dFdx(P), dPy = dFdy(P);
  for (int i = 0; i < ${r}; i++) {
    vec4 A = uCmWA[i], W = uCmWP[i];
    float code = mod(W.x, 4.0);
    if (code < 0.5) continue;
    float life = uCmWT[i].w, age = uCmT - W.y;
    float s = cmPopL(age, life);
    if (s <= 0.0) continue;
    bool top = code < 1.5;
    float w = top ? wT : ((code < 2.5) == (side < 0.0) ? wS * cmSideK : 0.0);
    if (w < 0.02) continue;
    vec2 c = A.xy;
    if (top) c.y += W.w * age; else c.x += W.w * age;
    vec2 pl = top ? P.xz : P.zy, gx = top ? dPx.xz : dPx.zy, gy = top ? dPy.xz : dPy.zy;
    vec2 fl = top ? vec2(1.0, -1.0) : (code < 2.5 ? vec2(1.0, 1.0) : vec2(-1.0, 1.0));
    float cr = cos(W.z), sr = sin(W.z);
    mat2 R = mat2(cr, sr, -sr, cr);
    vec2 q = R * ((pl - c) * fl), qx = R * (gx * fl), qy = R * (gy * fl);
    // squash and stretch with the pop: wide and squat as it overshoots, narrow and tall as it springs back
    vec2 k = s * vec2(1.0 + 0.45 * (s - 1.0), 1.0 - 0.45 * (s - 1.0));
    float a = w * uCmPops * (1.0 - smoothstep(life - 0.3, life, age));
    vec2 kb = k * A.zw * vec2(1.22, 2.5), qb = q / kb;
    if (max(abs(qb.x), abs(qb.y)) < 1.0) {
      float b = floor(W.x / 4.0);
      vec4 r = vec4(b * 0.25 + 0.0039, 0.0039, b * 0.25 + 0.2461, 0.2461);
      vec2 h = (r.zw - r.xy) * 0.5;
      vec4 t = textureGrad(tCmAtlas, r.xy + (qb + 1.0) * h, qx / kb * h, qy / kb * h);
      col = mix(col, t.rgb * uCmWT[i].rgb, t.a * a);
    }
    vec2 kw = k * A.zw, qw = q / kw;
    if (max(abs(qw.x), abs(qw.y)) < 1.0) {
      vec4 r = uCmWU[i];
      vec2 h = (r.zw - r.xy) * 0.5;
      vec4 t = textureGrad(tCmAtlas, r.xy + (qw + 1.0) * h, qx / kw * h, qy / kw * h);
      col = mix(col, t.rgb, t.a * a);
    }
  }
}
void comicSkin(inout vec3 col, vec3 P, float wT, float wB, float wS, float side, float fw) {
  vec2 uvP = cmUvP(P.xz), uvS = cmUvS(P.zy, side);
  vec4 a = texture2D(tCmTop, uvP) * wT + texture2D(tCmBot, uvP) * wB + texture2D(tCmSide, uvS) * wS;
  // the bursts' pulse: a bright ring running out from the centre, twice a second
  if (a.r > 0.04) {
    float p = 0.5 + 0.5 * sin(uCmT * 7.0 + a.r * 11.0);
    col = mix(col, vec3(1.0, 0.96, 0.62), p * p * p * 0.5 * smoothstep(0.04, 0.12, a.r));
  }
  // the halftone's shimmer: white dots swelling in a band that sweeps nose to tail (gone where a dot is under a pixel)
  if (a.g > 0.02) {
    vec2 q = (wS > 0.5 ? P.zy : P.xz) / 0.085;
    float c = cos(0.2618), s = sin(0.2618);
    q = vec2(c * q.x - s * q.y, s * q.x + c * q.y);
    vec2 cell = fract(q + 0.5) - 0.5;
    vec2 cell2 = fract(q) - 0.5;
    float d = min(length(cell), length(cell2));
    float b = fract(P.z * 0.09 - P.y * 0.04 + abs(P.x) * 0.03 - uCmT * 0.3);
    float band = smoothstep(0.0, 0.06, b) * (1.0 - smoothstep(0.06, 0.2, b));
    float r = 0.3 * band, aa = max(0.04, fw * 0.8);
    float dotK = (1.0 - smoothstep(r - aa, r + aa, d)) * step(0.01, r);
    // farther out, where the dots are under a pixel, their average: the band still sweeps, a sheen over the halftone
    float far = smoothstep(0.3, 0.7, fw);
    col = mix(col, vec3(1.0, 0.98, 0.9), mix(dotK * 0.85, min(1.0, 6.2832 * r * r) * 0.6, far) * a.g);
  }
  // ZOOM! (the afterburner): the aft flanks (SIDE) and the stabilators (TOP), each scaled about its centre
  float za = uCmT - uCmZoom, zs = cmPop(za) * step(0.5, uCmPops);
  if (zs > 0.0) {
    vec2 cS = vec2(${o(c.zoomSide.c[0])}, ${o(c.zoomSide.c[1])});
    vec2 cT = vec2(sign(P.x) * ${o(c.zoomStab.c[0])}, ${o(c.zoomStab.c[1])});
    float v = texture2D(tCmSide, cmUvS(cS + (P.zy - cS) / zs, side)).b * wS + texture2D(tCmTop, cmUvP(cT + (P.xz - cT) / zs)).b * wT;
    vec2 l = cmLetters(v) * cmFade(za);
    col = mix(col, vec3(0.006), l.x);
    col = mix(col, za < 0.12 ? vec3(1.0, 0.9, 0.3) : vec3(1.0, 0.97, 0.9), l.y);
  }
  // SKREEE! (a hard pull): the wing tops, rattling while it's held
  float sa = uCmT - uCmSkree, ss = cmPop(sa) * step(0.5, uCmPops);
  if (ss > 0.0) {
    vec2 cW = vec2(sign(P.x) * ${o(c.skreeWing.c[0])}, ${o(c.skreeWing.c[1])}) + 0.035 * vec2(sin(uCmT * 53.0), cos(uCmT * 47.0));
    float v = texture2D(tCmTop, cmUvP(cW + (P.xz - cW) / ss)).a * wT;
    vec2 l = cmLetters(v) * cmFade(sa);
    col = mix(col, vec3(0.006), l.x);
    col = mix(col, vec3(1.0, 0.66, 0.01), l.y);
  }
  comicWords(col, P, wT, wS, side);
}`,D=e=>y.replace("uniform sampler2D tCmTop; uniform sampler2D tCmBot; uniform sampler2D tCmSide;","").replaceAll("tCmTop",e.top).replaceAll("tCmBot",e.bot).replaceAll("tCmSide",e.side),L=`
  if (uCmOn > 0.5 && uCmInk > 0.5) {
    float cmNV = abs(dot(normal, normalize(vViewPosition)));
    cmInkK = 1.0 - smoothstep(5.0, 8.0, cmNV / max(fwidth(cmNV), 1e-5));
  }`,$=`
  #if NUM_DIR_LIGHTS > 0
  if (uCmOn > 0.5 && uCmInk > 0.5) {
    vec3 cmW = vec3(0.2126, 0.7152, 0.0722);
    float sunL = max(1e-4, dot(directionalLights[0].color, cmW));
    float albL = max(1e-4, dot(material.diffuseColor, cmW));
    float ratio = dot(reflectedLight.directDiffuse, cmW) * PI / (albL * sunL);
    float tone = mix(0.36, 0.92, smoothstep(0.14, 0.22, ratio)) + 0.12 * smoothstep(0.86, 0.92, ratio);
    vec3 sunC = mix(vec3(sunL), directionalLights[0].color, 0.55);
    reflectedLight.directDiffuse = material.diffuseColor * sunC * tone / PI;
  }
  #endif
  if (uCmOn > 0.5 && uCmInk > 0.5) {
    // printed ink, not lacquer: the sky's mirror and the satin coat's haze mostly gone, the sun's highlight kept small
    reflectedLight.indirectSpecular *= 0.35;
    reflectedLight.directSpecular *= 0.5;
    #ifdef USE_CLEARCOAT
      clearcoatSpecularIndirect *= 0.2; clearcoatSpecularDirect *= 0.4;
    #endif
    #ifdef USE_SHEEN
      sheenSpecularIndirect *= 0.0; sheenSpecularDirect *= 0.0;
    #endif
  }`,U=`
  if (uCmOn > 0.5) gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.004), cmInkK);`;export{x as C,A as a,W as b,I as c,D as d,q as e,L as f,$ as g,U as h,g as i,O as s};
