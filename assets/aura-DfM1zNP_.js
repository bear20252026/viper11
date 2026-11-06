import{ad as Fe,bi as Be,L as Ie,r as qe,V as B,I as we,t as Y,u as oe,aa as w,S as xe,A as _e,d as Oe,M as ye,b5 as ke,$ as ze,a0 as Se,a1 as Pe,g as Ge,C as Ne}from"./three.module-9D8i-8qh.js";import{D as Z,N as ie,F as m,S as H,W as x,w as Te,h as ne}from"./motion-usu7YCPa.js";import{T as je}from"./tiers-C6qrfcrB.js";function He(e){const t=(e-m.yRoot)/(m.yTip-m.yRoot);return m.zRootTE+(m.zTipTE-m.zRootTE)*t-(m.zRootLE+(m.zTipLE-m.zRootLE)*t)}const Ue=(()=>{const e=x.xTip+.12,t=(H.xTip-H.xRoot)*Math.tan(H.anhedral);return{center:[0,x.y+.3,-1.6],tip:[e,x.y,Te(x.xTip)-.15],leRoot:[x.lefIn,x.y+.02,ne(x.lefIn)],leTip:[x.xTip,x.y+.02,ne(x.xTip)],stabTip:[H.xTip,H.y-t,Z.zTail-.1],finRoot:[0,m.yRoot+.15,m.zRootLE+.1],finTip:[0,m.yTip-.05,m.zTipLE],nozzle:[0,ie.y,ie.zExit+.15],nozzleR:ie.rExitAB,zNose:Z.zNose,zTail:Z.zTail,halfSpan:Z.span/2,fin:[0,3.83,3.65],finSkin:m.tc*He(3.83)*.5,finR:.74,wing:[2.55,x.y+x.tc*(Te(2.55)-ne(2.55))*.5,.2],wingR:1.02}})();function f0(e,t){const s=(e[1]+t[1])*.5,r=t[2]-e[2],l=Math.max(-e[0],t[0]),n=p=>e[2]+r*p,h=e[1]+(t[1]-e[1])*.36;return{center:[0,s,n(.5)],tip:[l*.98,h,n(.7)],leRoot:[l*.25,h,n(.45)],leTip:[l*.95,h,n(.64)],stabTip:[l*.55,h,n(.98)],finRoot:[0,s+.4,n(.72)],finTip:[0,t[1]-.05,n(.9)],nozzle:[0,s,t[2]+.1],nozzleR:.5,zNose:e[2],zTail:t[2],halfSpan:l,fin:[0,s+(t[1]-s)*.6,n(.82)],finSkin:.06,finR:.6,wing:[l*.55,h+.05,n(.6)],wingR:.8}}const De=["tip","edge","orbit","ember","spark","plume","beacon","shard"],L=(e,t={})=>({kind:"beacon",count:1,life:1e4,size:.01,bright:2.6,lag:0,drift:0,spread:0,sparkle:.7,streak:0,accent:0,hot:0,r0:140,r1:650,minPx:e,...t}),X=(e,t={})=>({kind:"shard",count:e,life:3.6,size:.075,bright:2.2,lag:0,drift:.45,spread:0,sparkle:.6,streak:0,accent:.4,hot:.2,minPx:1.4,...t}),A=(e={})=>({kind:"tip",count:190,life:1.4,size:.07,bright:2.8,lag:.06,drift:2.2,spread:.18,sparkle:.2,streak:.08,accent:.25,hot:.12,minPx:1.3,...e}),re=(e={})=>({kind:"edge",count:160,life:.9,size:.12,bright:2.2,lag:.08,drift:.6,spread:.06,sparkle:1,streak:0,accent:.3,hot:.25,minPx:1.4,...e}),Ve=(e={})=>({kind:"orbit",count:110,life:3.2,size:.1,bright:2,lag:0,drift:1.1,spread:.3,sparkle:.3,streak:.35,accent:.35,hot:.2,r0:3.4,r1:6.4,zSpan:.7,minPx:1.5,...e}),Qe=(e={})=>({kind:"ember",count:170,life:2.8,size:.085,bright:1.8,lag:.05,drift:.7,spread:1,sparkle:0,streak:0,accent:.6,hot:.1,minPx:1.4,...e}),Ee=(e={})=>({kind:"spark",count:100,life:.45,size:.06,bright:2.2,lag:.15,drift:8,spread:.2,sparkle:0,streak:.3,accent:.3,hot:.2,gate:"g",gLo:3.2,gHi:7,minPx:1.4,...e}),We=(e={})=>({kind:"plume",count:140,life:.9,size:.12,bright:2,lag:.3,drift:2.5,spread:.45,sparkle:0,streak:.6,accent:.7,hot:.2,gate:"ab",minPx:1.4,...e}),F=(e,t={})=>({level:e,scale:.62,layers:2,height:.035,taper:.98,walls:.18,ribs:0,lines:.55,fill:.06,sheen:.15,sway:.03,twist:0,breath:.006,scans:0,rings:1,dashes:0,badge:.8,bright:.88,...t}),ue={gold:{id:"aura-gold",tier:"gold",name:"Gilt hologram",note:"Your Gold badge projected in light over your wings and fin: its outline and line work glowing, two layers deep, a shimmer of fine gold motes off your wingtips.",color:"#ffc21f",accent:"#fff0b8",hot:"#fffaf0",motes:[A({count:210}),L(10)],emblem:F(1),gain:1,gReact:.08,abReact:.15},platinum:{id:"aura-platinum",tier:"platinum",name:"Platinum hologram",note:"Your Platinum badge as a hologram over wings and fin, three layers joined by light walls, a fine shimmer off every tip.",color:"#63e6d2",accent:"#e4fffa",hot:"#ffffff",motes:[A({count:230,accent:.4,hot:.18,sparkle:.35}),A({count:90,more:!0,size:.06,bright:1.4,spread:.12}),L(11)],emblem:F(2,{scale:.64,height:.04,walls:.22,lines:.6,sheen:.2,dashes:24,rings:2,bright:.88}),gain:1,gReact:.08,abReact:.15},emerald:{id:"aura-emerald",tier:"emerald",name:"Emerald hologram",note:"Your Emerald badge as a three-layer hologram over wings and fin, ribs of light up its walls, crystal glints shed along your leading edges.",color:"#2ff07a",accent:"#c8ffd9",hot:"#f4fff8",motes:[re({count:170}),A({count:90,size:.07,bright:1.3}),L(12,{sparkle:1})],emblem:F(3,{scale:.66,height:.045,walls:.25,lines:.65,sheen:.25,twist:.03,rings:2,bright:.9}),gain:1,gReact:.1,abReact:.15},diamond:{id:"aura-diamond",tier:"diamond",name:"Diamond hologram",note:"Your Diamond badge as a four-layer hologram, scan bands climbing its column, ice-blue glints and shards.",color:"#6fb4ff",accent:"#e6f4ff",hot:"#ffffff",motes:[X(10,{sparkle:1}),re({count:230,sparkle:1,hot:.4,bright:2.6}),re({count:70,more:!0,bright:2.2}),A({count:110,sparkle:.7,accent:.5,size:.07}),L(13,{sparkle:1,bright:3})],emblem:F(4,{scale:.68,layers:3,height:.055,taper:.97,walls:.3,lines:.7,fill:.08,sheen:.3,twist:.04,scans:1,rings:2,dashes:32,badge:.78,bright:.88}),gain:1,gReact:.1,abReact:.15},master:{id:"aura-master",tier:"master",name:"Master hologram",note:"Your Master badge as a tall four-layer hologram over wings and fin, shards circling it, violet motes orbiting the jet.",color:"#b55cff",accent:"#f0d6ff",hot:"#ffffff",motes:[X(26),Ve({count:90,r0:2.6,r1:4.2}),A({count:110,accent:.4}),L(14)],emblem:F(5,{scale:.7,layers:3,height:.06,taper:.97,walls:.32,ribs:12,lines:.75,fill:.08,sheen:.35,twist:.05,scans:1,rings:2,badge:.78,bright:.9}),gain:1,gReact:.12,abReact:.25},grandmaster:{id:"aura-grandmaster",tier:"grandmaster",name:"Grandmaster hologram",note:"Your Grandmaster badge as a five-layer hologram column, shards circling it; a hard pull throws sparks.",color:"#ff4436",accent:"#ffb08a",hot:"#fff2e0",motes:[X(36),Ee({count:110}),A({count:100,accent:.4}),L(15,{bright:3})],emblem:F(6,{scale:.72,layers:3,height:.065,taper:.96,walls:.34,ribs:16,lines:.8,fill:.09,sheen:.4,twist:.05,scans:1,rings:2,dashes:20,badge:.78,bright:.92}),gain:1,gReact:.14,abReact:.3},marshal:{id:"aura-marshal",tier:"marshal",name:"Marshal hologram",note:"The full projection: your Marshal badge six layers deep over both wings and the fin, its walls ribbed with light, shards circling it, amber embers rising round you, sparks on the pull, a glowing wake behind the burner.",color:"#ffc85a",accent:"#ff9a2e",hot:"#fff6e0",motes:[Qe({count:120,accent:.65}),X(56,{accent:.5}),Ee({count:100,bright:2.4}),We({count:130}),A({count:110,accent:.5,sparkle:.5}),L(18,{bright:3.4,sparkle:1})],emblem:F(7,{scale:.76,layers:3,height:.075,taper:.96,walls:.4,ribs:20,lines:.85,fill:.1,sheen:.5,twist:.06,breath:.008,scans:2,rings:3,dashes:28,badge:.75,bright:1}),gain:1,gReact:.14,abReact:.35}},Ke={gold:.4,platinum:.42,emerald:.45,diamond:.5,master:.55,grandmaster:.55,marshal:.6};for(const[e,t]of Object.entries(Ke)){const a=ue[e];a.motes=a.motes.map(s=>s.kind==="beacon"?s:{...s,count:Math.max(4,Math.round(s.count*t)),bright:s.bright*.8})}const $e=je.filter(e=>!!ue[e]);Object.fromEntries($e.map(e=>[e,`aura-${e}`]));const h0=e=>e?ue[e]??null:null,Re=new Map,Ye=()=>"/";function Ze(e,t,a,s){let r=Re.get(e);if(r)return r.image?s?.():r.userData.waiters.push(s),r;const l=[s];return r=new Fe().load(t,()=>{for(const n of l)n?.();l.length=0}),r.userData.waiters=l,r.colorSpace=Be,r.minFilter=Ie,r.anisotropy=4,Re.set(e,r),r}function Xe(e,t){return Ze(`holo:${e}`,`${Ye()}rank/aura/holo-${e}.webp`,!1,t)}const se={wall:0,layer:1,foot:2};function Je(e,t=6){const a=[],s=[],r=[],l=e.length;for(let h=0;h<=l;h++)for(let p=0;p<=t;p++)a.push(h/l,p/t,0),s.push(e[h%l]);for(let h=0;h<l;h++)for(let p=0;p<t;p++){const E=h*(t+1)+p,u=E+t+1;r.push(E,u,E+1,u,u+1,E+1)}const n=a.length/3;return a.push(-1,-1,1,1,-1,1,1,1,1,-1,1,1),s.push(0,0,0,0),r.push(n,n+1,n+2,n,n+2,n+3),{g:a,r:s,idx:r}}const e0="vec3 rotA(vec3 v, vec3 k, float a) { float c = cos(a), s = sin(a); return v * c + cross(k, v) * s + k * dot(k, v) * (1.0 - c); }",t0=`
  #include <common>
  #include <logdepthbuf_pars_vertex>
  attribute vec3 aG;
  attribute float aR;
  attribute vec4 eC;   // the site on the skin (xyz), the badge quad's half-size (m)
  attribute vec4 eU;   // the site's right (the badge's), kind (0 wall, 1 layer, 2 footprint)
  attribute vec4 eV;   // the site's up (the badge's top), phase
  attribute vec4 eP;   // the column's lift and height (m), the layer's place in it (0 bottom .. 1 top), the beam's taper
  attribute vec4 eQ;   // brightness, the layer's index, the top layer (1), the wall's ribs
  uniform float uTime, uSpinT, uG, uAB;
  uniform vec4 uMove;  // sway (rad), twist (rad), breath, scan bands
  uniform float uBadgeK; // the badge's share of the emblem's reach (the flat rings round it take the rest)
  varying vec3 vL;     // x, y: the quad's (walls: round, up), z: kind
  varying vec4 vQ;     // brightness, the place in the column, top, ribs
  varying float vFace; // how squarely it faces the eye (0 edge-on .. 1)
  varying float vAxis; // how nearly the eye looks down the column (1: straight down it)
  ${e0}
  void main() {
    vec3 U = eU.xyz, V = eV.xyz, N = cross(U, V);
    int kind = int(eU.w + 0.5);
    float ph = eV.w;
    // each instance keeps its own part, the other collapses
    if ((kind >= 1) != (aG.z > 0.5)) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
    float gx = clamp(uG - 1.0, 0.0, 7.0);
    // the place up the column: a wall's vertex its own, a layer its own, the footprint on the skin
    float f = kind == 0 ? aG.y : eP.z;
    float lift = eP.x, height = eP.y * (1.0 + 0.045 * gx);
    float h = lift + height * f + 0.012 * sin(uTime * 1.1 + ph) * f;
    if (kind == 2) h = lift * 0.5;
    // the beam spreads as it rises, and breathes
    float s = mix(eP.w, 1.0, f) * (1.0 + uMove.z * sin(uTime * 1.3 + ph + f * 2.4));
    if (kind == 2) s = eP.w * 0.98;
    // a slow sway in the plane; the lower layers lag (the column twists, slowly)
    float ang = uMove.x * sin(uTime * 0.23 + ph) + uMove.y * (1.0 - f) * sin(uTime * 0.37 + ph * 1.7 + uSpinT * 0.05);
    vec3 u = rotA(U, N, ang), v = rotA(V, N, ang);
    vec3 c = eC.xyz + N * h;
    vec3 p, nrm;
    if (kind == 0) {
      float th = aG.x * 6.2831853;
      vec3 dir = u * cos(th) + v * sin(th);
      p = c + dir * aR * uBadgeK * eC.w * s;
      nrm = dir;
      vL = vec3(aG.x, aG.y, 0.0);
    } else {
      p = c + (u * aG.x + v * aG.y) * eC.w * s;
      nrm = N;
      vL = vec3(aG.xy, float(kind));
    }
    vQ = vec4(eQ.x, f, eQ.z, eQ.w);
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    vFace = abs(dot(normalize(normalMatrix * nrm), normalize(-mv.xyz)));
    vAxis = abs(dot(normalize(normalMatrix * N), normalize(-mv.xyz)));
    gl_Position = projectionMatrix * mv;
    #include <logdepthbuf_vertex>
  }
`,a0=`
  #include <logdepthbuf_pars_fragment>
  uniform sampler2D uHolo;
  uniform float uHasHolo, uTime, uSpinT, uBright, uAB, uG;
  uniform vec4 uMove;  // sway, twist, breath, scan bands
  uniform vec4 uLook;  // the line work, the body, the walls, the sheen
  uniform float uReach; // the emblem's reach in the quad (its half-size 1): the outer ring; the badge is uBadgeK of it
  uniform float uBadgeK;
  uniform vec4 uRings;  // flat concentric rings round the badge, in its plane: count, brightness, dashes, -
  uniform vec3 uC0, uC1, uC2;
  varying vec3 vL;
  varying vec4 vQ;
  varying float vFace;
  varying float vAxis;
  float hash(float n) { return fract(sin(n) * 43758.5453); }
  // a dark tier colour (Master's violet, Grandmaster's red) lifted to a common luminance, so every tier reads on a
  // bright afternoon skin
  vec3 lift(vec3 c) { float l = dot(c, vec3(0.2126, 0.7152, 0.0722)); return c * clamp(0.55 / max(l, 1e-3), 1.0, 2.5); }
  // the scan bands climbing the column (0 .. 1 up it): how lit this height is now
  float band(float y) {
    float n = uMove.w, b = 0.0;
    for (int k = 0; k < 3; k++) {
      if (float(k) >= n) break;
      float at = fract(uSpinT * 0.32 + float(k) / max(1.0, n)) * 1.25 - 0.1;
      float d = (y - at) / 0.09;
      b += exp(-d * d);
    }
    return b;
  }
  void main() {
    #include <logdepthbuf_fragment>
    int kind = int(vL.z + 0.5);
    float pulse = 0.94 + 0.06 * sin(uTime * 1.7);
    // (the game's gain is ~3 / exposure: lines at ~2 there keep their colour instead of burning to cream)
    float bright = uBright * vQ.x * pulse * 0.5;
    if (kind == 0) {
      // a light wall: brightest where you look along it, fading up the column, ribs of light, the scan bands
      float y = vL.y;
      // (a curtain of light: faint face-on, a bright edge where you look along it, so the column reads edge-on)
      float edge = pow(max(0.0, 1.0 - vFace), 3.0);
      float vert = pow(max(0.0, 1.0 - y), 1.6) * smoothstep(0.0, 0.08, y);
      float ribs = vQ.w > 0.5 ? pow(abs(sin(vL.x * 3.14159265 * vQ.w)), 80.0) : 0.0;
      float I = uLook.z * ((0.03 + 0.9 * edge) * vert + ribs * (0.03 + 0.3 * edge) * vert + band(y) * (0.05 + 0.3 * edge));
      float shimmer = 0.75 + 0.25 * sin(vL.x * 140.0 + uTime * 3.0 + y * 20.0);
      // (looking down the column the walls stand edge-on round the outline: they give way to the layers)
      I *= shimmer * (1.0 - 0.85 * smoothstep(0.55, 0.92, vAxis));
      if (I < 0.004) discard;
      vec3 col = lift(mix(uC0, uC1, 0.25 + 0.3 * y));
      gl_FragColor = vec4(col * I * bright, 0.0);
      return;
    }
    vec2 q = vL.xy;
    if (uHasHolo < 0.5 || dot(q, q) > (uReach + 0.06) * (uReach + 0.06)) discard;
    if (kind == 2) {
      // the footprint: a soft shade of the badge's shape on the skin, the projector's light pooled in it
      float s = texture2D(uHolo, vec2(0.75, 0.5) + clamp(q / uBadgeK, -0.99, 0.99) * vec2(0.25, 0.5), 3.0).b;
      float r = length(q) / uReach;
      float glow = s * (0.18 + 0.22 * exp(-r * r * 3.0));
      if (s < 0.004) discard;
      gl_FragColor = vec4(uC0 * glow * bright * 0.6, s * 0.22);
      return;
    }
    // a layer: the hologram (the top) or an echo of its outline (below)
    float top = vQ.z, f = vQ.y;
    // a rare glitch: a band of the top layer slips sideways for a moment
    float gt = floor(uTime * 7.0);
    float tear = step(0.985, hash(gt * 1.31 + vQ.x)) * step(abs(q.y - (hash(gt) * 1.6 - 0.8)), 0.06);
    vec2 uv = q / uBadgeK * 0.5 + 0.5 + vec2(tear * 0.025 * (hash(gt * 2.7) - 0.5), 0.0);
    // the atlas: the near detail on the left, a bolder version for far off on the right; how fine the art is on
    // screen (texels of the 512 square per pixel) picks between them, and far off the outline is kept a crisp line
    // by a threshold on its blurred value (the fine line work would average to a wash)
    uv = clamp(uv, 0.004, 0.996);
    vec2 dx = dFdx(uv) * 512.0, dy = dFdy(uv) * 512.0;
    float lod = 0.5 * log2(max(1e-6, max(dot(dx, dx), dot(dy, dy))));
    // (and how far off it is, the finer axis: a layer seen edge-on up close is still near)
    float lodNear = 0.5 * log2(max(1e-6, min(dot(dx, dx), dot(dy, dy))));
    float detail = 1.0 - smoothstep(0.4, 1.6, lod);
    vec3 tn = texture2D(uHolo, uv * vec2(0.5, 1.0)).rgb;
    vec3 tf = texture2D(uHolo, uv * vec2(0.5, 1.0) + vec2(0.5, 0.0)).rgb;
    vec3 t = mix(tf, tn, detail);
    float far = smoothstep(1.6, 3.0, lod);
    float outline = mix(t.r, smoothstep(0.12, 0.45, t.r), far);
    // (the line work fades as it gets too fine to draw: thresholding its mush would fill the badge in)
    float lines = t.g * (1.0 - 0.92 * smoothstep(1.3, 2.5, lod));
    float body = t.b * mix(1.0, 0.4, far);
    float bandI = band(f);
    float I;
    if (top > 0.5) {
      float scan = 0.7 + 0.3 * sin(q.y * 95.0 - uTime * 5.0);
      float sheen = pow(max(0.0, sin(q.x * 1.3 + q.y * 0.9 - uTime * 0.7)), 18.0) * uLook.w;
      I = outline * 0.65 + lines * uLook.x * (0.8 + 0.3 * sheen) + body * (uLook.y * 0.5 * scan + sheen * 0.05);
      I *= 0.88 + 0.12 * scan;
    } else {
      // the echoes: the outline (and a trace of the line work), fading down the column, each flickering on its own
      float fade = 0.06 + 0.24 * f;
      float flick = 0.8 + 0.2 * sin(uTime * 2.3 + f * 17.0);
      // (far off the echoes merge into a solid can: they fade, and the column is left to its top and its walls)
      I = (outline + lines * uLook.x * 0.12 * f) * fade * flick * (1.0 - 0.7 * smoothstep(0.6, 0.95, vAxis)) * (1.0 - 0.85 * smoothstep(0.8, 2.0, lodNear));
    }
    // the flat rings: concentric circles round the badge in its own plane (the outermost the emblem's edge), a line
    // of at least ~1 px, the dashed ones turning slowly in the plane; the echoes below carry the outer one faintly
    float rr = length(q) / uReach, rw = max(0.007, fwidth(rr) * 0.9), ang = atan(q.y, q.x) / 6.2831853;
    float rings = 0.0;
    for (int k = 0; k < 3; k++) {
      if (float(k) >= uRings.x || (top < 0.5 && k > 0)) break;
      float rk = 1.0 - float(k) * 0.085;
      float ln = 1.0 - smoothstep(rw * 0.5, rw * 1.6, abs(rr - rk));
      if (uRings.z > 0.5 && k == 1) ln *= step(0.4, fract(ang * uRings.z + uTime * 0.04));
      rings += ln * (1.0 - 0.3 * float(k));
    }
    I += rings * uRings.y * (top > 0.5 ? 1.0 : 0.3 * (0.4 + 0.6 * f)) * (1.0 - 0.6 * smoothstep(1.2, 2.6, lodNear) * (1.0 - top));
    I *= 1.0 + 0.6 * bandI;
    // edge-on, a layer thins to a line: keep it, softer
    I *= mix(0.45, 1.0, smoothstep(0.04, 0.3, vFace));
    if (I < 0.004) discard;
    // the colour: the tier's, whiter where the line is hottest; the lower echoes toward the accent
    vec3 col = lift(mix(uC0, uC1, (1.0 - top) * 0.3));
    col = mix(col, uC2, clamp((I - 0.9) * 0.5, 0.0, 0.35));
    // (the lines cover a little of what's behind: on a bright sky or skin they read as colour, not as a wash)
    float cover = top > 0.5 ? mix(0.7, 0.45, far) * clamp(outline + lines * uLook.x * 0.7 + rings * 0.6, 0.0, 1.0) : 0.2 * (outline + rings * 0.5) * (0.3 + 0.7 * f);
    gl_FragColor = vec4(col * I * bright, cover);
  }
`,o0={gold:[.693,.676,.67,.695,.735,.775,.816,.792,.689,.635,.66,.718,.775,.778,.727,.668,.654,.684,.704,.685,.654,.647,.665,.701,.72,.697,.661,.646,.656,.684,.699,.673,.64,.657,.725,.776,.769,.717,.657,.628,.686,.79,.814,.771,.731,.69,.655,.657,.678,.67,.639,.616,.62,.662,.714,.729,.713,.703,.705,.744,.777,.736,.699,.707,.715,.717,.718,.717,.718,.72,.719,.726,.736,.733,.724,.723,.723,.724,.724,.723,.723,.715,.714,.754,.785,.753,.72,.721,.733,.741,.725,.688,.654,.633,.646,.682],platinum:[.633,.685,.73,.769,.799,.826,.784,.67,.627,.664,.729,.773,.717,.624,.588,.601,.635,.657,.638,.603,.581,.58,.601,.637,.659,.636,.599,.577,.577,.599,.632,.647,.627,.598,.605,.661,.732,.762,.719,.656,.622,.671,.787,.826,.791,.76,.732,.691,.636,.589,.553,.53,.529,.539,.564,.584,.576,.574,.58,.585,.603,.615,.607,.605,.627,.658,.677,.685,.689,.684,.681,.684,.683,.682,.681,.685,.693,.69,.658,.61,.596,.6,.593,.59,.591,.587,.585,.58,.578,.582,.569,.547,.534,.533,.556,.59],emerald:[.745,.732,.728,.731,.741,.765,.802,.844,.849,.816,.797,.766,.714,.701,.732,.764,.756,.736,.724,.705,.703,.731,.754,.779,.799,.78,.754,.73,.703,.705,.725,.736,.757,.771,.746,.71,.716,.766,.799,.821,.852,.839,.805,.777,.748,.735,.735,.739,.75,.752,.751,.759,.762,.761,.759,.75,.755,.785,.81,.785,.732,.719,.743,.774,.782,.767,.744,.714,.712,.752,.785,.802,.801,.777,.765,.758,.743,.742,.752,.763,.775,.771,.742,.712,.726,.783,.808,.786,.757,.742,.745,.75,.753,.75,.743,.746],diamond:[.647,.687,.681,.695,.721,.757,.802,.781,.705,.694,.682,.643,.645,.658,.693,.706,.692,.709,.684,.645,.692,.697,.668,.741,.803,.74,.668,.698,.689,.637,.679,.706,.686,.7,.69,.669,.698,.717,.715,.694,.705,.781,.809,.781,.746,.703,.673,.678,.637,.582,.633,.693,.697,.696,.708,.724,.71,.689,.708,.701,.661,.68,.727,.691,.606,.635,.683,.624,.6,.669,.726,.74,.736,.722,.712,.671,.62,.642,.715,.693,.636,.691,.718,.671,.67,.713,.705,.679,.709,.73,.712,.701,.706,.69,.622,.587],master:[.734,.749,.762,.771,.783,.801,.832,.86,.874,.891,.905,.86,.769,.708,.675,.674,.704,.748,.793,.795,.769,.764,.781,.823,.858,.845,.804,.764,.737,.752,.792,.788,.738,.696,.69,.702,.755,.847,.889,.882,.866,.848,.826,.804,.784,.766,.752,.732,.71,.723,.751,.741,.716,.71,.739,.777,.781,.77,.769,.761,.736,.718,.754,.799,.786,.767,.77,.761,.76,.78,.798,.831,.855,.82,.777,.756,.739,.743,.771,.787,.776,.754,.77,.8,.781,.758,.761,.76,.738,.705,.693,.707,.719,.738,.755,.742],grandmaster:[.689,.711,.729,.748,.77,.79,.808,.83,.853,.869,.881,.819,.707,.697,.698,.652,.685,.734,.696,.661,.715,.751,.749,.778,.8,.752,.706,.743,.723,.658,.693,.705,.656,.675,.71,.674,.689,.812,.875,.863,.857,.84,.811,.785,.768,.755,.738,.711,.681,.651,.625,.608,.602,.606,.618,.631,.647,.666,.679,.684,.692,.704,.718,.74,.758,.764,.763,.769,.784,.798,.812,.821,.824,.827,.83,.823,.805,.788,.778,.772,.767,.757,.741,.729,.718,.704,.696,.684,.664,.647,.637,.625,.617,.619,.634,.661],marshal:[.677,.697,.717,.737,.769,.8,.819,.836,.851,.88,.906,.914,.865,.756,.694,.686,.697,.717,.715,.722,.76,.777,.773,.8,.825,.801,.77,.769,.756,.722,.715,.718,.693,.679,.693,.758,.869,.918,.908,.881,.852,.836,.82,.804,.773,.739,.719,.701,.682,.654,.631,.632,.653,.673,.682,.689,.7,.714,.719,.723,.732,.755,.801,.823,.799,.787,.799,.807,.808,.82,.834,.827,.82,.829,.835,.82,.804,.8,.798,.786,.797,.823,.804,.756,.731,.721,.718,.714,.7,.688,.679,.669,.652,.634,.632,.652]},ce=6;function i0(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let a=t;return a=Math.imul(a^a>>>15,a|1),a^=a+Math.imul(a^a>>>7,a|61),((a^a>>>14)>>>0)/4294967296}}const le=e=>new Ne(e),T=e=>new B(e[0],e[1],e[2]),n0=`
  vec3 hash33(vec3 p3) { p3 = fract(p3 * vec3(.1031, .1030, .0973)); p3 += dot(p3, p3.yxz + 33.33); return fract((p3.xxy + p3.yxx) * p3.zyx); }
  float hash11(float p) { p = fract(p * .1031); p *= p + 33.33; p *= p + p; return fract(p); }
  vec3 rotA(vec3 v, vec3 k, float a) { float c = cos(a), s = sin(a); return v * c + cross(k, v) * s + k * dot(k, v) * (1.0 - c); }
`,r0=`
  #include <common>
  #include <logdepthbuf_pars_vertex>
  ${n0}
  attribute vec4 aSeed;   // x: emitter, yzw: randoms
  attribute vec4 aSeed2;
  uniform float uTime, uOrbT, uSpeed, uIdle, uG, uAB, uPxAngle, uBright;
  uniform vec3 uFlow, uOmega;
  uniform vec3 uCenter, uTip, uLeA, uLeB, uStab, uFinA, uFinB;
  uniform vec4 uNoz;      // xyz, r
  uniform vec3 uSpan;     // zNose, zTail, halfSpan
  uniform vec4 uSiteF, uSiteW;   // the right fin side's and the right wing's hologram column: its middle, radius
  uniform vec2 uSiteH;           // their columns' half-heights (fin, wing)
  uniform vec4 uE[${ce*5}];
  uniform vec3 uC0, uC1, uC2;
  varying vec3 vCol;
  varying vec3 vShape;    // x: stretch, y: sparkle, z: unused
  varying vec2 vUv;

  // a point released t seconds ago where it is now in the jet's frame: left behind in the airflow (part of the
  // airspeed by its lag) and swung by the jet's turn since
  vec3 behind(vec3 p, float t, float lag) {
    p += uFlow * (uIdle + uSpeed * lag) * t;
    float w = length(uOmega);
    if (w > 1e-4) p = uCenter + rotA(p - uCenter, uOmega / w, -w * t * clamp(lag * 5.0, 0.0, 1.0));
    return p;
  }

  vec3 motePos(int kind, float t, float back, vec3 r, vec3 r2, int e) {
    vec4 E0 = uE[e * 5], E1 = uE[e * 5 + 1], E3 = uE[e * 5 + 3], E4 = uE[e * 5 + 4];
    float lag = E1.x, drift = E1.y, spread = E1.z;
    float side = r.x < 0.5 ? -1.0 : 1.0;
    vec3 j = (r2 - 0.5) * 2.0 * spread;
    t = max(0.0, t - back);
    if (kind == 0) {                                     // tip: the shimmer streaming off the tips
      vec3 b = (E3.z > 0.5 && fract(r2.x * 7.31) < 0.4) ? uStab : uTip;
      b.x *= side;
      float ang = r.y * 6.2832 + t * drift * 2.2 * side;
      float rad = 0.04 + 0.16 * t * (0.5 + r.z);
      vec3 p = b + j + vec3(cos(ang) * rad + side * 0.25 * t, sin(ang) * rad - 0.05 * t, 0.0);
      return behind(p, t, lag);
    }
    if (kind == 1) {                                     // edge: glints shed along the leading edges
      vec3 b;
      if (E3.z > 0.5 && fract(r2.x * 5.17) < 0.45) b = mix(uFinA, uFinB, r.y);
      else { b = mix(uLeA, uLeB, r.y); b.x *= side; }
      vec3 p = b + j + vec3(0.0, 0.06 + drift * 0.18 * t, -0.04) + uFlow * drift * t;
      return behind(p, t, lag);
    }
    if (kind == 2) {                                     // orbit: carried round the jet
      float rr = mix(E4.x, E4.y, r.y);
      float len = uSpan.y - uSpan.x;
      float dir = r2.x < 0.8 ? 1.0 : -1.0;
      float th = r.x * 6.2832 + (uOrbT - back) * drift * dir * (0.75 + 0.5 * r2.y) * 4.5 / rr;
      vec3 p;
      if (E4.w > 0.5) p = vec3(cos(th) * rr, 0.0, sin(th) * rr) + uCenter + vec3(0.0, (r.z - 0.5) * 0.3, 0.4);   // flat: round the jet
      else {
        p = vec3(cos(th) * rr, sin(th) * rr * 0.72, 0.0);
        float tl = (r2.z - 0.5) * 0.9;
        p = vec3(p.x, p.y * cos(tl), p.y * sin(tl));
        p += vec3(uCenter.xy, uCenter.z + (r.z - 0.5) * E4.z * len);
      }
      p.y += sin(uOrbT * 1.3 + r2.y * 6.2832) * 0.18;
      return p;
    }
    if (kind == 3) {                                     // ember: rising round the jet
      vec3 d = normalize(r - 0.5 + vec3(1e-3));
      float len = uSpan.y - uSpan.x;
      vec3 ax = vec3(uSpan.z * 1.25, 2.6, len * 0.55);
      vec3 p = uCenter + d * mix(0.6, 1.05, r2.x) * ax;
      p += vec3(sin(t * 1.7 + r2.y * 6.0) * 0.35, drift * t, cos(t * 1.3 + r2.z * 6.0) * 0.35);
      return behind(p, t, lag);
    }
    if (kind == 4) {                                     // spark: thrown off the tips and edges on a pull
      vec3 b = r2.x < 0.5 ? uTip : mix(uLeA, uLeB, 0.3 + 0.7 * r.y);
      b.x *= side;
      vec3 v0 = normalize(vec3(side * (0.3 + r.z), (r2.y - 0.35) * 1.4, 0.2 + r2.z)) * drift * (0.5 + r.y);
      vec3 p = b + v0 * t + vec3(0.0, -6.0, 0.0) * t * t;
      return behind(p, t, lag);
    }
    if (kind == 6) return uCenter;                     // beacon: the far signature, on the jet
    if (kind == 7) {                                   // shard: a glyph circling an emblem, at its own depth
      bool fin = r.z < 0.3;
      vec4 S = fin ? uSiteF : uSiteW;
      vec3 c = S.xyz;
      c.x *= side;
      vec3 N = fin ? vec3(side, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
      vec3 A = fin ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0), B = vec3(0.0, 0.0, 1.0);
      float rr = mix(0.55, 0.85, r2.y) * S.w;
      float th = r.y * 6.2832 + (uOrbT - back) * drift * (r2.x < 0.5 ? 1.0 : -1.0) * (1.2 / max(0.3, rr));
      float dz = ((r2.z - 0.5) * 1.7 + 0.12 * sin(uOrbT * 1.4 + r.y * 9.0)) * (fin ? uSiteH.x : uSiteH.y);
      return c + (A * cos(th) + B * sin(th)) * rr + N * dz;
    }
    // plume: a glowing wake behind the burner
    float ang = r.x * 6.2832, rr = sqrt(r.y) * uNoz.w;
    vec3 rad = vec3(cos(ang), sin(ang), 0.0);
    vec3 p = uNoz.xyz + rad * rr + rad * spread * t + uFlow * drift * 6.0 * t;
    return behind(p, t, lag);
  }

  void main() {
    int e = int(aSeed.x + 0.5);
    vec4 E0 = uE[e * 5], E1 = uE[e * 5 + 1], E2 = uE[e * 5 + 2], E3 = uE[e * 5 + 3];
    int kind = int(E0.x + 0.5);
    float life = E0.y;
    float u = uTime / life + aSeed.y;
    float cyc = floor(u), a = fract(u), t = a * life;
    vec3 r = hash33(vec3(aSeed.zw * 91.7, cyc * 0.6180339 + aSeed.y * 13.1));
    vec3 r2 = hash33(vec3(aSeed2.xy * 57.3, cyc * 0.4142 + aSeed2.z * 7.7));
    float alive = 1.0;
    // the gate: g (E2.w 1) or the burner (2): a share of the motes born each cycle
    if (E2.w > 0.5) {
      float rate = E2.w < 1.5 ? smoothstep(E3.x, E3.y, uG) : uAB;
      alive = step(hash11(cyc * 1.37 + aSeed2.w * 113.0), rate) * (0.35 + 0.65 * rate);
    }
    float fin = kind == 2 ? smoothstep(0.0, 0.25, a) : smoothstep(0.0, kind == 4 ? 0.02 : 0.12, a);
    float fout = 1.0 - smoothstep(kind == 2 ? 0.7 : (kind == 4 ? 0.2 : 0.5), 1.0, a);
    float sparkle = E1.w, streak = E2.x;
    float tw = 1.0;
    if (sparkle > 0.0) tw = mix(1.0, 0.25 + 1.6 * pow(0.5 + 0.5 * sin(uTime * (7.0 + r2.y * 13.0) + r2.z * 40.0), 4.0), sparkle);
    if (kind == 3) tw *= 0.65 + 0.35 * sin(uTime * (5.0 + 6.0 * r2.x) + r.y * 30.0);
    float bright = E0.w * uBright * fin * fout * tw * alive * (0.55 + 0.9 * r2.x * r2.x);
    if (kind == 6) bright = E0.w * uBright * (0.85 + 0.15 * sin(uTime * 2.1));

    vec3 p1 = motePos(kind, t, 0.0, r, r2, e);
    vec4 c1 = modelViewMatrix * vec4(p1, 1.0);
    vec3 c0 = c1.xyz;
    if (streak > 0.0) c0 = (modelViewMatrix * vec4(motePos(kind, t, 0.045 * streak, r, r2, e), 1.0)).xyz;
    float dist = max(0.5, -c1.z);
    if (kind == 6) { c1.xyz += normalize(-c1.xyz) * min(dist * 0.5, 12.0); c0 = c1.xyz; }   // drawn in front of the jet
    float sizeW = E0.z * (0.45 + 1.3 * r.z * r.z);
    float size = max(sizeW, E3.w * dist * uPxAngle);
    if (kind == 6) { vec4 E4b = uE[e * 5 + 4]; bright *= smoothstep(E4b.x, E4b.y, dist); }
    else bright *= min(1.0, sizeW / size) * 0.55 + 0.45;
    if (bright <= 0.002) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
    float quad = size * 0.5 * (1.0 + 1.6 * sparkle);
    vec2 d = c1.xy - c0.xy;
    float L = length(d);
    vec2 ax = L > 1e-4 ? d / L : vec2(1.0, 0.0);
    vec2 pr = vec2(-ax.y, ax.x);
    float halfLen = quad + L * 0.5;
    vec3 mid = (c1.xyz + c0) * 0.5;
    vec3 pv = mid + vec3(ax * position.x * halfLen + pr * position.y * quad, 0.0);
    vec3 col = mix(uC0, uC1, clamp(E2.y + (r2.y - 0.5) * 0.5, 0.0, 1.0));
    if (r2.z < E2.z) col = mix(col, uC2, 0.75);
    vCol = col * bright;
    vShape = vec3(halfLen / quad, sparkle, kind == 6 ? 1.0 : (kind == 7 ? 2.0 : 0.0));
    vUv = position.xy;
    gl_Position = projectionMatrix * vec4(pv, 1.0);
    #include <logdepthbuf_vertex>
  }
`,s0=`
  #include <logdepthbuf_pars_fragment>
  varying vec3 vCol;
  varying vec3 vShape;
  varying vec2 vUv;
  void main() {
    #include <logdepthbuf_fragment>
    float st = vShape.x, sp = vShape.y;
    float k = 1.0 + 1.6 * sp;
    float along = vUv.x * st;
    float dd = length(vec2(max(abs(along) - (st - 1.0), 0.0), vUv.y)) * k;
    float a = pow(max(0.0, 1.0 - dd * dd), 2.4);
    // the beacon: a soft glow with a dimmer middle (the jet still reads through it)
    if (vShape.z > 1.5) {
      // a shard: a small diamond's outline and a bright point
      vec2 q = abs(vUv) * (1.0 + 1.6 * sp);
      float dm = q.x * 1.6 + q.y;
      a = (1.0 - smoothstep(0.06, 0.16, abs(dm - 0.75))) + exp(-dot(q, q) * 30.0);
    } else if (vShape.z > 0.5) a = exp(-dd * dd * 5.0) * (0.12 + 0.88 * smoothstep(0.08, 0.45, dd));
    if (sp > 0.0) {
      vec2 q = abs(vUv) * k;
      float star = exp(-q.x * 9.0) * exp(-q.y * 1.4) + exp(-q.y * 9.0) * exp(-q.x * 1.4);
      a += sp * 0.55 * star * (1.0 - smoothstep(0.7, 1.0, max(abs(vUv.x), abs(vUv.y))));
    }
    if (a <= 0.004) discard;
    gl_FragColor = vec4(vCol * a, 1.0);
  }
`;function d0(e){const t=e.look,a=e.airframe??Ue,s=e.density??1,r=i0(2654435769^(e.seed??1)*2654435761),l=new qe;l.name=`aura:${t.tier}`;const n=t.motes.slice(0,ce),h=le(t.color),p=le(t.accent),E=le(t.hot),u={uTime:{value:0},uOrbT:{value:0},uSpinT:{value:0},uSpeed:{value:0},uIdle:{value:e.idleDrift??2.5},uG:{value:1},uAB:{value:0},uPxAngle:{value:.001},uBright:{value:1},uArt:{value:.35},uFlow:{value:new B(0,0,1)},uOmega:{value:new B},uC0:{value:new B(h.r,h.g,h.b)},uC1:{value:new B(p.r,p.g,p.b)},uC2:{value:new B(E.r,E.g,E.b)}},fe=new w,he=new w,de=new Oe;let v=null,I=0,G=0;if(n.length){const o=n.map(f=>Math.max(4,Math.round(f.count*s)));I=o.reduce((f,i)=>f+i,0);const d=new we;d.setAttribute("position",new Y([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),d.setIndex([0,1,2,0,2,3]);const b=new Float32Array(I*4),g=new Float32Array(I*4),k=n.map((f,i)=>i).sort((f,i)=>(n[i].kind==="beacon"?1:0)-(n[f].kind==="beacon"?1:0));G=k.filter(f=>n[f].kind==="beacon").reduce((f,i)=>f+o[i],0);let z=0;for(const f of k)for(let i=0;i<o[f];i++,z++)b.set([f,r(),r(),r()],z*4),g.set([r(),r(),r(),r()],z*4);d.setAttribute("aSeed",new oe(b,4)),d.setAttribute("aSeed2",new oe(g,4)),d.instanceCount=I;const S=[];for(let f=0;f<ce;f++){const i=n[f];if(!i){for(let K=0;K<5;K++)S.push(new w);continue}S.push(new w(De.indexOf(i.kind),i.life,i.size,i.bright)),S.push(new w(i.lag,i.drift,i.spread,i.sparkle)),S.push(new w(i.streak,i.accent,i.hot,i.gate==="g"?1:i.gate==="ab"?2:0)),S.push(new w(i.gLo??3,i.gHi??7,i.more?1:0,i.minPx??1.4)),S.push(new w(i.r0??4,i.r1??6,i.zSpan??.6,i.flat?1:0))}const W=new xe({uniforms:{...u,uE:{value:S},uCenter:{value:T(a.center)},uTip:{value:T(a.tip)},uLeA:{value:T(a.leRoot)},uLeB:{value:T(a.leTip)},uStab:{value:T(a.stabTip)},uFinA:{value:T(a.finRoot)},uFinB:{value:T(a.finTip)},uNoz:{value:new w(a.nozzle[0],a.nozzle[1],a.nozzle[2],a.nozzleR)},uSpan:{value:new B(a.zNose,a.zTail,a.halfSpan)},uSiteF:{value:fe},uSiteW:{value:he},uSiteH:{value:de}},vertexShader:r0,fragmentShader:s0,transparent:!0,depthWrite:!1,depthTest:!0,blending:_e});v=new ye(d,W),v.name="aura:motes",v.renderOrder=14,d.boundingSphere=new ke(T(a.center),40),l.add(v)}const c=t.emblem,ge=o0[t.tier]??Array.from({length:96},()=>.85),me=Math.max(...ge),J=[],y=[],U={fin:.055,wing:.06},D=(o,d,b,g,k,z,S)=>{const W=k*c.scale,f=W/me,i=c.height*k,K=z+i;y.push([o[0]+d[0]*(z+i*.5),o[1]+d[1]*(z+i*.5),o[2]+d[2]*(z+i*.5),W,i*.5]);const te=(C,ae,Le)=>J.push([...o,f],[...b,C],[...g,S],[z,i,ae,c.taper],Le);te(se.foot,0,[c.bright,0,0,0]);const $=Math.max(1,c.layers);for(let C=0;C<$;C++){const ae=$===1?1:C/($-1);te(se.layer,ae,[c.bright,C,C===$-1?1:0,0])}return c.walls>0&&te(se.wall,0,[c.bright,0,0,c.ribs]),K},q=a.fin,_=a.wing;D([q[0]+a.finSkin,q[1],q[2]],[1,0,0],[0,0,-1],[0,1,0],a.finR,U.fin,.3),D([q[0]-a.finSkin,q[1],q[2]],[-1,0,0],[0,0,1],[0,1,0],a.finR,U.fin,1.9),D([_[0],_[1],_[2]],[0,1,0],[1,0,0],[0,0,-1],a.wingR,U.wing,2.7),D([-_[0],_[1],_[2]],[0,1,0],[1,0,0],[0,0,-1],a.wingR,U.wing,4.1);const V=J.length/5,R=new we,Q=Je(ge);R.setAttribute("aG",new Y(Q.g,3)),R.setAttribute("aR",new Y(Q.r,1)),R.setAttribute("position",new Y(Q.g,3)),R.setIndex(Q.idx);for(const[o,d]of["eC","eU","eV","eP","eQ"].entries()){const b=new Float32Array(V*4);for(let g=0;g<V;g++)b.set(J[g*5+o],g*4);R.setAttribute(d,new oe(b,4))}R.instanceCount=V;const ee={value:0},Ae=e.badge??Xe(t.tier,()=>{ee.value=1});e.badge&&(ee.value=1);const Me=new xe({uniforms:{...u,uHolo:{value:Ae},uHasHolo:ee,uReach:{value:me},uBadgeK:{value:c.badge},uRings:{value:new w(c.rings,.55,c.dashes,0)},uMove:{value:new w(c.sway,c.twist,c.breath,c.scans)},uLook:{value:new w(c.lines,c.fill,c.walls,c.sheen)}},vertexShader:t0,fragmentShader:a0,transparent:!0,depthWrite:!1,depthTest:!0,side:Ge,blending:Pe,blendSrc:Se,blendDst:ze,blendSrcAlpha:Se,blendDstAlpha:ze}),O=new ye(R,Me);O.name="aura:emblems",O.renderOrder=13,R.boundingSphere=new ke(T(a.center),12),l.add(O),fe.set(y[0][0],y[0][1],y[0][2],y[0][3]),he.set(y[2][0],y[2][1],y[2][2],y[2][3]),de.set(y[0][4],y[2][4]);const pe=new w,ve=(o,d,b)=>{const g=b;g.isPerspectiveCamera&&(o.getCurrentViewport(pe),u.uPxAngle.value=2*Math.tan(g.fov*Math.PI/360)/Math.max(1,pe.w/Math.max(.001,g.zoom)))};v&&(v.onBeforeRender=ve),O.onBeforeRender=ve;let N=1,M=0,j=0,be=-1,P=!1;const Ce=Math.max(.05,...n.map(o=>o.lag*o.life));return{object:l,look:t,update(o){const d=Math.max(0,Math.min(.25,o.delta)),b=k=>1-Math.exp(-d*k);be<0&&(N=o.g??1,M=o.ab??0,j=o.speed??0),N+=((o.g??1)-N)*b(6),M+=((o.ab??0)-M)*b(4),j+=((o.speed??0)-j)*b(3),be=o.time;const g=Math.max(0,Math.min(6,N-1));if(u.uTime.value=o.time,u.uSpinT.value+=d*(1+1.6*M*t.abReact*3+.12*g),u.uOrbT.value+=d*(1+.9*M+.06*g),u.uSpeed.value=j,u.uG.value=N,u.uAB.value=M,u.uBright.value=t.gain*(o.gain??1)*(1+t.gReact*g+t.abReact*M),u.uArt.value=o.artGain??(o.gain??1)*.35,o.flow?u.uFlow.value.copy(o.flow).normalize():u.uFlow.value.set(0,0,1),o.omega?u.uOmega.value.copy(o.omega):u.uOmega.value.set(0,0,0),v){const k=v.geometry.boundingSphere;k.radius=14+(j*Ce+(e.idleDrift??2.5)*3),k.center.set(a.center[0],a.center[1],a.center[2]+k.radius*.5-7)}},stats:()=>({motes:P?G:I,emblems:P?0:V,draws:(v&&(!P||G)?1:0)+(P?0:1)}),setFar(o){o!==P&&(P=o,O.visible=!o,v&&(v.geometry.instanceCount=o?G:I,v.visible=!o||G>0))},dispose(){for(const o of[v,O])o&&(o.geometry.dispose(),o.material.dispose());l.removeFromParent()}}}export{ue as A,Ue as F,h0 as a,f0 as b,d0 as c,$e as d};
