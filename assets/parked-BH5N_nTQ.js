const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/exterior-DMjAlJwk.js","assets/three.module-9D8i-8qh.js","assets/BufferGeometryUtils-y2z5xeEV.js","assets/dims-CGpQssBc.js","assets/surfaces-Dnl--ya3.js","assets/hull-CDjywM8b.js","assets/loft-DpGWJz4i.js","assets/gear-DuwHblpH.js","assets/paint-BjJ-hqG3.js","assets/exterior-DlSThKkh.js","assets/canopyShape-wB2WOyPG.js","assets/skin-EJl6slvg.js","assets/materials-sG40Mvfc.js","assets/index-CpfKCY5i.js","assets/lighting-DLOaW5gk.js","assets/shared-oZu7p6SI.js","assets/env-CheJt8Fq.js"])))=>i.map(i=>d[i]);
import{L as Ne,g as za,E as ma,w as Ct,W as ct,S as et,h as Aa,N as Ra}from"./motion-usu7YCPa.js";import{W as Te,S as Zt,E as To,a as gt,b as Lt,c as Jt,N as Ea}from"./dims-CGpQssBc.js";import{L as Ue,W as Ce,S as tt,D as ka,a as bt,b as Ft,c as Ca,N as Kt}from"./skin-EJl6slvg.js";import{EYE as Mo}from"./canopyShape-wB2WOyPG.js";import{EXT as So}from"./exterior-CIROtG7B.js";import{S as at,E as zo,W as qt,w as Ao,a as La,b as Ro,N as Yt}from"./dims-D4R27mEd.js";import{LERX as yt,WING as ke,STAB as ot,EYE as Eo,wingY as st,wingTE as Dt,wingLE as Fa,NOZZLE as Xt}from"./dims-CLm24y1E.js";import{LEVCON as it,STAB as ea,EYE as ko,WING_Y as nt,wingTE as ta,wingLE as Da}from"./dims-9emkWdW5.js";import{K as Co,O as Lo,X as Fo,p as Do,_ as Po,L as _o,V as T,Z as ht,U as d,S as Ja,g as Ka,a1 as Ya,a0 as ut,$ as Ht,z as He,v as ha,s as pa,I as Bo,M as Fe,d as $e,u as Io,Q as Xa,r as va,aD as qo,ap as Uo,k as Me,R as ua,c as da,W as Tt,aE as Pa,n as Ho,j as _a,Y as aa,B as zt,ac as Vo,i as Oo,x as eo,aF as No,ah as Go,a as to}from"./three.module-9D8i-8qh.js";import{P as ao}from"./shared-oZu7p6SI.js";import{_ as oa}from"./preload-helper-BXl3LOEh.js";import{m as jo}from"./BufferGeometryUtils-y2z5xeEV.js";import{h as Wo}from"./index-BtbAcqGc.js";import{i as $o}from"./indexGeometry-CU6LZ1FI.js";const rt=ct.y,Pt=ct.lefIn,fa={id:"f16",eye:ma,mass:10800,span:9.45,wingArea:27.87,clAlpha:4.2,clMax:1.6,tip:[4.74,rt+.02,Ct(4.6)+.12],tail:[et.xTip,et.y-(et.xTip-et.xRoot)*Math.tan(et.anhedral),et.zTipTE],tailShare:.22,lex:{apex:[Ne.edge[0][1],Ne.y+.05,za(Ne.edge[0][0])],join:[Ne.edge[Ne.edge.length-1][1],Ne.y+.06,za(Ne.zJoin)],te:[1.25,rt+.5,Ct(1.25)],strength:1,burstTE:27,burstApex:46},wing:{rootLE:[Pt,rt+.06,Aa(Pt)],rootTE:[Pt,rt+.04,Ct(Pt)],tipLE:[ct.xTip,rt+.03,Aa(ct.xTip)],tipTE:[ct.xTip,rt+.02,Ct(ct.xTip)]}},Be=Te.xRoot,Qo={id:"f35c",eye:To,mass:20500,span:13.11,wingArea:62.1,clAlpha:4,clMax:1.5,tip:[Te.xTip-.02,gt(Te.xTip)+.02,Lt(Te.xTip)+.05],tail:[Zt.xTip,Zt.y,Zt.zTipTE],tailShare:.2,lex:{apex:[1.5,2.47,-5.4],join:[Be,2.36,Jt(Be)],te:[2.2,Te.yRoot+.5,Lt(2.2)],strength:.8,burstTE:26,burstApex:45},wing:{rootLE:[Be,gt(Be)+.08,Jt(Be)],rootTE:[Be,gt(Be)+.05,Lt(Be)],tipLE:[Te.xTip,gt(Te.xTip)+.03,Jt(Te.xTip)],tipTE:[Te.xTip,gt(Te.xTip)+.02,Lt(Te.xTip)]}},Ge=Ue.edge[Ue.edge.length-1][1],Ba=s=>{const e=Ue.y;for(let t=1;t<e.length;t++)if(s<=e[t][0]){const a=(s-e[t-1][0])/(e[t][0]-e[t-1][0]);return e[t-1][1]+(e[t][1]-e[t-1][1])*a}return e[e.length-1][1]},Zo={id:"fa18e",eye:Mo,mass:18600,span:ka.span,wingArea:46.45,clAlpha:4.4,clMax:1.9,tip:[ka.span/2-.05,bt(Ce.xTip)+.02,Ft(Ce.xTip)+.1],tail:[tt.xTip,tt.y+(tt.xTip-tt.xRoot)*Math.tan(tt.dihedral),tt.zTipTE],tailShare:.2,lex:{apex:[Ue.edge[1][1],Ba(Ue.edge[1][0])+.05,Ue.edge[1][0]],join:[Ge,Ba(Ue.zJoin)+.06,Ue.zJoin],te:[1.95,Ce.yRoot+.55,Ft(1.95)],strength:1.25,burstTE:25,burstApex:45},wing:{rootLE:[Ge,bt(Ge)+.08,Ca(Ge)],rootTE:[Ge,bt(Ge)+.05,Ft(Ge)],tipLE:[Ce.xTip,bt(Ce.xTip)+.03,Ca(Ce.xTip)],tipTE:[Ce.xTip,bt(Ce.xTip)+.02,Ft(Ce.xTip)]}},je=ke.xJoin,Jo={id:"mig29",eye:Eo,mass:13500,span:11.36,wingArea:38.06,clAlpha:3.9,clMax:1.56,tip:[ke.xTip-.03,st(ke.xTip)+.02,Dt(ke.xTip)+.05],tail:[ot.xTip,ot.y+(ot.xTip-ot.xRoot)*Math.tan(ot.dihedral),ot.zTipTE],tailShare:.2,lex:{apex:[yt.xApex+.05,yt.yApex+.05,yt.zApex+.3],join:[je,yt.yJoin+.06,yt.zJoin],te:[1.6,st(1.6)+.5,Dt(1.6)],strength:1.1,burstTE:26,burstApex:45},wing:{rootLE:[je,st(je)+.07,Fa(je)],rootTE:[je,st(je)+.05,Dt(je)],tipLE:[ke.xTip,st(ke.xTip)+.03,Fa(ke.xTip)],tipTE:[ke.xTip,st(ke.xTip)+.02,Dt(ke.xTip)]}},Ko={id:"su57",eye:ko,mass:24400,span:14.1,wingArea:78.8,clAlpha:4,clMax:1.7,tip:[7.02,nt+.02,3.6],tail:[ea.tip.x,ea.y,ea.tip.te],tailShare:.2,lex:{apex:[it.apex[0],it.y+.05,it.apex[1]],join:[it.tip[0],it.y+.06,it.tip[1]],te:[2.9,nt+.5,ta(2.9)],strength:1.1,burstTE:30,burstApex:55},wing:{rootLE:[3.25,nt+.08,Da(3.25)],rootTE:[3.25,nt+.04,ta(3.25)],tipLE:[7.05,nt+.03,Da(7.05)],tipTE:[7.05,nt+.02,ta(7.05)]}},sa=qt.pivot,Mt=(s,e)=>[sa.x+s,sa.y+Ao(s)+.04,sa.z+La(s)+e*(Ro(s)-La(s))],Yo={id:"f14",eye:zo,mass:24e3,span:19.54,wingArea:52.5,clAlpha:4.3,clMax:1.9,tip:Mt(qt.xTip-.02,.95),tail:[at.xTip,at.y+(at.xTip-at.xRoot)*Math.tan(at.dihedral),at.zTipTE],tailShare:.2,lex:{apex:[1.6,2.32,-5.2],join:[3.16,2.34,-1.2],te:[2.5,2.8,2],strength:.75,burstTE:24,burstApex:40},wing:{rootLE:Mt(.3,0),rootTE:Mt(.3,1),tipLE:Mt(qt.xTip,0),tipTE:Mt(qt.xTip,1)}},ii={f16:fa,f35c:Qo,fa18e:Zo,f14:Yo,mig29:Jo,su57:Ko},se=So,Ie=ma[1]+se.chine.y-.035,qe=s=>s+ma[2],lt=se.lerx[se.lerx.length-1],Ia=s=>se.wing.rootTE[1]+(se.wing.tipTE[1]-se.wing.rootTE[1])*(s-se.wing.rootTE[0])/(se.wing.tipTE[0]-se.wing.rootTE[0]),ni={...fa,tip:[se.wing.tip[0]+.02,Ie+.02,qe(se.wing.tipTE[1])-.05],lex:{...fa.lex,apex:[se.lerx[0][0],Ie+.04,qe(se.lerx[0][1])],join:[lt[0],Ie+.05,qe(lt[1])],te:[1.25,Ie+.5,qe(Ia(1.25))]},wing:{rootLE:[lt[0],Ie+.04,qe(lt[1])],rootTE:[lt[0],Ie+.03,qe(Ia(lt[0]))],tipLE:[se.wing.tip[0],Ie+.02,qe(se.wing.tip[1])],tipTE:[se.wing.tipTE[0],Ie+.02,qe(se.wing.tipTE[1])]}},Xo={pacific:{surfaceM:0,tC:19,dewC:12.5,swing:2.5,rhMax:.97,ccn:1},keywest:{surfaceM:0,tC:30,dewC:23,swing:3,rhMax:.95,ccn:1},nellis:{surfaceM:569,tC:31,dewC:1,swing:10,rhMax:.35,ccn:8},hill:{surfaceM:1459,tC:24,dewC:4,swing:9,rhMax:.45,ccn:8},fallon:{surfaceM:1197,tC:26,dewC:1,swing:11,rhMax:.38,ccn:8},miramar:{surfaceM:145,tC:23,dewC:13,swing:5,rhMax:.85,ccn:3},jber:{surfaceM:53,tC:9,dewC:-9,swing:4,rhMax:.75,ccn:3},edwards:{surfaceM:696,tC:30,dewC:-1,swing:11,rhMax:.3,ccn:8}},es={afternoon:0,golden:.3,sunset:.45,dusk:.6,night:.85,morning:.7};function ri(s,e="afternoon",t={}){const a=Xo[s]??{surfaceM:0,tC:22,dewC:12,swing:6,rhMax:.85,ccn:3},o=a.tC-a.swing*(es[e]??0);return{surfaceM:a.surfaceM,tC:o,dewC:Math.min(o,a.dewC+(t.dewOffset??0)),rhMax:a.rhMax,ccn:a.ccn}}const Ut=287.05,ts=1004.6,as=Ut/ts,At=9.80665;function We(s){const e=s-273.15;return 610.94*Math.exp(17.625*e/(e+243.04))}function os(s,e){const t=Math.min(We(s),e*.5);return .622*t/(e-t)}function qa(s){const e=Math.log(Math.max(.001,s)/610.94);return 243.04*e/(17.625-e)+273.15}function ss(s,e,t=0){const a=s.tC+273.15,o=Math.min(s.dewC,s.tC)+273.15,i=Math.max(0,e-s.surfaceM),l=125*(a-o);let r,n;if(i<=l)r=a-.0098*i,n=o-.0018*i;else{const f=a-.0098*l,_=i-l;r=f-.0065*_;const y=1-(1-(s.rhAloft??.45))*Math.min(1,_/3e3);n=qa(We(r)*y)}const u=(288.15+r)/2,c=101325*Math.exp(-At*e/(Ut*u)),m=s.rhMax??1;We(n)>m*We(r)&&(n=qa(m*We(r))),t>0&&(n=n+(r-n)*Math.min(1,t));const b=We(n),v=.622*b/(c-b),x=b/We(r);return{T:r,p:c,rho:c/(Ut*r),w:v,rh:x,dew:n,a:Math.sqrt(1.4*Ut*r)}}function dt(s,e){if(e<=0)return 0;const t=Math.max(s.p*.3,s.p-e),a=s.T*Math.pow(t/s.p,as);return Math.max(0,s.w-os(a,t))}function is(s,e,t=2e-6){return 3*s*e/(2*1e3*t)}const ns=.006;function rs(s,e,t=2e-6,a=1){if(s<=0)return 0;const o=t*Math.min(1.6,Math.max(.45,Math.cbrt(s/ns)))/Math.cbrt(Math.max(.1,a));return is(s,e,o)}function ls(s,e){const t=.5*e.air.rho*e.V*e.V;return t>1?e.nz*s.mass*At/(t*s.wingArea):0}function cs(s,e){const t=Math.min(e,s.clMax)/s.clAlpha,a=Math.max(0,e-s.clMax);return Math.min(.75,t+a*.35)}const Ua=.75,hs=.05;function us(s,e){const t=Math.PI/4*s.span,a=Math.max(0,e.nz)*s.mass*At,o=e.V>5?a/(e.air.rho*e.V*t):0;return{gamma:o,rc0:hs*s.span,sink:o/(2*Math.PI*t),nu:3e-4*o}}function Ha(s,e){return Ua+(1-Ua)*(1-Math.exp(-s/(1.5*e)))}function _t(s,e,t){const a=e/(2*Math.PI*Math.max(.02,t));return s*a*a}function ds(s,e,t){if(s<=e)return 0;const a=e/s,o=a>=.5?t*Math.sqrt(2*(1-a)):t/Math.sqrt(2*Math.max(.001,a));return Math.min(.3*t,.4*o)}function fs(s,e){const t=1/Math.sqrt(Math.max(.1,1-Math.min(.95,e)**2));return(.04+.5*Math.max(0,s))*t}function ms(s,e){const t=Math.max(0,s-.1);return 9*e*Math.sin(Math.min(t,1))**2}function Bt(s,e,t){let a=s*374761393+e*668265263+t*2147483647|0;return a=Math.imul(a^a>>>13,1274126177),((a^a>>>16)>>>0)/4294967295}function ps(s=128){const e=new Uint8Array(s*s*4),t=(i,l,r,n)=>{const u=Math.floor(i),c=Math.floor(l),m=i-u,b=l-c,v=m*m*(3-2*m),x=b*b*(3-2*b),f=V=>(V%r+r)%r,_=Bt(f(u),f(c),n),y=Bt(f(u+1),f(c),n),I=Bt(f(u),f(c+1),n),P=Bt(f(u+1),f(c+1),n);return _+(y-_)*v+(I-_)*x+(_-y-I+P)*v*x},a=new Float32Array(s*s);for(let i=0;i<4;i++){let l=1/0,r=-1/0;for(let n=0;n<s;n++)for(let u=0;u<s;u++){let c=0,m=.5,b=0;for(let v=0;v<5;v++){const x=4<<v;c+=m*t(u/s*x,n/s*x,x,i*17+v*101),b+=m,m*=.5}c/=b,a[n*s+u]=c,l=Math.min(l,c),r=Math.max(r,c)}for(let n=0;n<s*s;n++)e[n*4+i]=Math.round((a[n]-l)/(r-l)*255)}const o=new Co(e,s,s,Lo,Fo);return o.wrapS=o.wrapT=Do,o.magFilter=Po,o.minFilter=_o,o.generateMipmaps=!0,o.needsUpdate=!0,o}const oo=`
uniform vec3 uSunDir;      // toward the sun, render space
uniform vec3 uSunIrr;      // sun irradiance (scene units)
uniform vec3 uSkyIrr;      // sky irradiance on a horizontal surface
uniform float uBright;     // overall gain (the camera's exposure is the lens's)
uniform float uTime;
uniform sampler2D tNoise;
uniform sampler2D tDepth;
uniform vec3 uDepth;       // x: log2(far+1) (log depth) or -1; y near; z far; (x == 0: no soft depth)
uniform vec2 uRes;
uniform float uSoft;

float hg(float c, float g) { float g2 = g * g; return (1.0 - g2) / (12.566371 * pow(max(1e-4, 1.0 + g2 - 2.0 * g * c), 1.5)); }
/** Droplets of a few microns: a strong diffraction lobe forward, a broad body, a little back-scatter. */
float phase(float c) { return 0.45 * hg(c, 0.75) + 0.45 * hg(c, 0.25) + 0.1 * hg(c, -0.3); }

/** Light scattered toward the eye per unit optical depth (premultiplied by 1 - e^-tau in the caller). */
vec3 scatter(vec3 V, float tau) {
  float c = dot(normalize(uSunDir), -V);
  // thick vapour diffuses the light: the phase flattens toward isotropic and the albedo shows
  // (multiple scattering: a dense puff reflects like a white cloud, ~albedo / pi, from any side)
  float thick = clamp(tau / 2.5, 0.0, 1.0);
  // (even a thin trail is a few tenths deep: some light scatters twice, and micron droplets throw
  // more of it sideways than a cloud's: a floor of ~0.1 / sr keeps side-lit vapour white, as it photographs)
  float ph = mix(max(phase(c), 0.12), max(phase(c), 0.2), thick);
  // a sun below the horizon (in the earth's shadow) lights nothing
  float sunUp = smoothstep(-0.03, 0.02, uSunDir.y);
  // the sky's light from all round (the upper hemisphere's radiance ~ E/pi, the sea's a little)
  return uBright * (uSunIrr * ph * sunUp + uSkyIrr * (0.45 + 0.2 * thick));
}

float sceneViewZ(vec2 uv) {
  float d = texture(tDepth, uv).r;
  if (uDepth.x > 0.0) return exp2(d * uDepth.x) - 1.0;
  float n = uDepth.y, f = uDepth.z;
  return (n * f) / (f - d * (f - n));
}
float softDepth(float viewZ) {
  if (uDepth.x == 0.0 || d_noSoft()) return 1.0;
  float z = sceneViewZ(gl_FragCoord.xy / uRes);
  return clamp((z - viewZ) / uSoft, 0.0, 1.0);
}
`,Ot=`
#ifdef STD_DEPTH
#undef USE_LOGARITHMIC_DEPTH_BUFFER
#endif
bool d_noSoft() {
#ifdef NO_SOFT
  return true;
#else
  return false;
#endif
}
`,vs=`
${Ot}
#include <common>
#include <logdepthbuf_pars_vertex>
attribute vec3 aTangent;
attribute vec4 aA;
attribute vec4 aB;
uniform float uPixAng;     // one pixel's angle at the centre of the view, rad
varying vec3 vView;
varying float vAcross, vTau, vAlong, vAge, vTwist, vHand, vSeed, vViewZ, vEndOn;
void main() {
  vec3 c = (modelMatrix * vec4(position, 1.0)).xyz;
  vec3 V = c - cameraPosition;
  float dist = length(V);
  vec3 T = normalize(aTangent + vec3(1e-6));
  vec3 S = cross(T, V / max(dist, 1e-4));
  float sl = length(S);
  S = sl > 1e-4 ? S / sl : vec3(0.0, 1.0, 0.0);
  // looking along the trail the light crosses more of it (a tube seen end-on is denser)
  float endOn = 1.0 / max(sl, 0.3);
  float hw = aA.x;
  // never thinner than ~0.8 px: farther away the trail keeps its optical depth x width
  float minHw = 0.8 * uPixAng * dist;
  float tau = aA.y;
  if (hw < minHw) { tau *= hw / minHw; hw = minHw; }
  tau *= smoothstep(0.5, 3.0, dist);
  vec3 p = c + S * hw * aA.w;
  vView = p - cameraPosition;
  vAcross = aA.w;
  vTau = tau;
  vEndOn = endOn;
  vAlong = aA.z;
  vAge = aB.x; vTwist = aB.y; vHand = aB.z; vSeed = aB.w;
  vec4 mv = viewMatrix * vec4(p, 1.0);
  vViewZ = -mv.z;
  gl_Position = projectionMatrix * mv;
  #include <logdepthbuf_vertex>
}
`,xs=`
${Ot}
#include <common>
#include <logdepthbuf_pars_fragment>
${oo}
varying vec3 vView;
varying float vAcross, vTau, vAlong, vAge, vTwist, vHand, vSeed, vViewZ, vEndOn;
void main() {
  #include <logdepthbuf_fragment>
  // the edge is ragged: the condensation follows the turbulent core, not a clean tube
  vec2 fuv = vec2(vAlong * 0.11, vSeed * 3.0 + vAcross * 0.05);
  float fz = texture(tNoise, fuv).b - 0.5;
  // (hand 0: the bloom's sheet shed off a wing, not a vortex core: wider, softer, raggeder, streaked along the flow)
  float sheet = 1.0 - abs(vHand);
  float x = vAcross + fz * mix(0.45, 0.8, sheet);
  // a vortex core's condensation: dense in the middle, soft at the edge (a gaussian chord)
  float prof = exp(-x * x * mix(2.8, 2.2, sheet));
  // (a sheet's ribbon never shows its edge: it frays out before the quad ends)
  prof *= mix(1.0, smoothstep(1.0, 0.55, abs(vAcross) + fz * 0.3), sheet);
  // the core's spin shows as faint helical striations, twisting along the trail
  float helix = 0.5 + 0.5 * sin(6.0 * x * vHand + vAlong * 0.55 + vTwist);
  prof *= mix(1.0, 0.45 + 1.1 * helix, 0.45 * (1.0 - sheet));
  // a sheet's streaks: long along the flow, fine across it, tearing apart as it ages
  float stk = texture(tNoise, vec2(vAlong * 0.008 + vSeed, x * 0.42 + vSeed * 0.3)).g * 0.65 + texture(tNoise, vec2(vAlong * 0.021, x * 1.1 + 0.37)).r * 0.45;
  prof *= mix(1.0, smoothstep(0.25, 0.85, stk) * 1.6, sheet * (0.7 + 0.3 * smoothstep(0.1, 0.8, vAge)));
  // evaporating: the trail breaks into strands and beads as it ages (fixed in the air: no swimming)
  vec2 nuv = vec2(vAlong * 0.035, vSeed + x * 0.09);
  float n1 = texture(tNoise, nuv).r, n2 = texture(tNoise, nuv * vec2(3.1, 2.3) + 0.37).g;
  float brk = smoothstep(0.2, 1.6, vAge);
  float cloud = mix(1.0, smoothstep(0.32, 0.72, n1 * 0.7 + n2 * 0.45), brk * 0.85);
  // and never quite even: denser and thinner stretches along it
  cloud *= 0.65 + 0.7 * texture(tNoise, vec2(vAlong * 0.012, vSeed)).a;
  float tau = vTau * prof * cloud * min(vEndOn, mix(3.0, 1.25, sheet));
  float a = 1.0 - exp(-tau);
  a *= softDepth(vViewZ);
  if (a < 0.002) discard;
  vec3 L = scatter(normalize(vView), tau);
  gl_FragColor = vec4(L * a, a);
}
`,Va=`
${Ot}
#include <common>
#include <logdepthbuf_pars_vertex>
attribute vec3 iPos;
attribute vec3 iAxis;
attribute vec3 iNorm;
attribute vec4 iA;
attribute vec4 iB;
uniform float uPixAng;
varying vec2 vUv;
varying vec3 vView;
varying float vTau, vSeed, vAge, vFlow, vTurb, vViewZ, vStretch;
void main() {
  vec3 c = (modelMatrix * vec4(iPos, 1.0)).xyz;
  vec3 V = c - cameraPosition;
  float dist = max(length(V), 1e-3);
  vec3 F = V / dist;
  // screen axes: the flow direction projected across the view, and its perpendicular
  vec3 ax = iAxis - F * dot(iAxis, F);
  float al = length(ax);
  vec3 up = abs(F.y) < 0.99 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
  vec3 X = al > 1e-3 ? ax / al : normalize(cross(up, F));
  vec3 Y = normalize(cross(F, X));
  float r = iA.x;
  // stretched along the flow by how much of the flow the eye sees across
  float st = 1.0 + iA.z * clamp(al, 0.0, 1.0);
  float tau = iA.y;
  float nl = length(iNorm);
  if (nl > 0.5) {
    // a layer lying on a surface (the vapour over a wing): the quad in its plane, thin seen edge-on,
    // denser along a grazing line of sight (the path through the layer)
    vec3 N = iNorm / nl;
    X = normalize(iAxis - N * dot(iAxis, N));
    Y = cross(N, X);
    st = 1.0 + iA.z;
    float g = abs(dot(N, F));
    tau *= min(2.0, 1.0 / max(g, 0.05)) * smoothstep(0.03, 0.2, g);
  }
  float minR = 1.0 * uPixAng * dist;
  if (r < minR) { tau *= (r * r) / (minR * minR); r = minR; }
  // a puff the camera flies through fades instead of filling the frame
  tau *= smoothstep(1.2 * r, 4.0 * r + 2.0, dist);
  vec3 p = c + X * position.x * r * st + Y * position.y * r;
  vUv = position.xy;
  vView = p - cameraPosition;
  vTau = tau; vSeed = iA.w; vAge = iB.x; vFlow = iB.y; vTurb = iB.z; vStretch = st;
  vec4 mv = viewMatrix * vec4(p, 1.0);
  vViewZ = -mv.z;
  gl_Position = projectionMatrix * mv;
  #include <logdepthbuf_vertex>
}
`,Oa=`
${Ot}
#include <common>
#include <logdepthbuf_pars_fragment>
${oo}
varying vec2 vUv;
varying vec3 vView;
varying float vTau, vSeed, vAge, vFlow, vTurb, vViewZ, vStretch;
void main() {
  #include <logdepthbuf_fragment>
  float r2 = dot(vUv, vUv);
  if (r2 > 1.0) discard;
  vec2 o = vec2(vSeed * 7.13, vSeed * 3.71);
  // the texture drifts aft with the flow (x: the sprite's long axis), a fraction of the real speed
  float drift = uTime * vFlow * 0.012 / vStretch;
  // laminar vapour (a LEX vortex, the sheet over a wing): fine streaks along the flow
  vec2 qs = vec2(vUv.x * 0.22 - drift, vUv.y * 1.3) + o;
  float s1 = texture(tNoise, qs).r, s2 = texture(tNoise, qs * vec2(1.9, 2.6) + 0.41).g;
  float streak = smoothstep(0.1, 0.95, s1 * 0.6 + s2 * 0.4);
  // turbulent vapour (a burst vortex, the shed puffs): billows and curls that boil
  vec2 qt = vUv * vec2(0.45, 0.45) + o.yx + vec2(-drift, uTime * 0.07);
  float t1 = texture(tNoise, qt).b, t2 = texture(tNoise, qt * 2.7 + vec2(0.3, -uTime * 0.05)).a;
  float t3 = texture(tNoise, qt * 6.1 + 0.7).r;
  float billow = smoothstep(0.28, 0.85, t1 * 0.55 + t2 * 0.3 + t3 * 0.15);
  float n = mix(streak, billow, vTurb);
  // a soft gaussian body (sprites overlap into one volume), its edge eaten by the noise
  float body = exp(-r2 * 2.8) * (1.0 - r2) * (1.0 - r2) * smoothstep(1.0, 0.55, r2 + (n - 0.5) * 0.7) * (0.25 + 0.95 * n);
  // turbulent vapour tears into wisps: only the noise's crests stay dense
  body *= mix(1.0, 1.6 * smoothstep(0.35, 0.85, n), vTurb * 0.75);
  float tau = vTau * body;
  float a = 1.0 - exp(-tau);
  a *= softDepth(vViewZ);
  if (a < 0.002) discard;
  vec3 L = scatter(normalize(vView), tau);
  gl_FragColor = vec4(L * a, a);
}
`,ws={high:{rate:120,life:3.2,tails:!0,sheet:[7,4],lex:12,puffs:720},medium:{rate:60,life:2.4,tails:!0,sheet:[5,3],lex:8,puffs:300},low:{rate:30,life:2.2,tails:!1,sheet:[4,2],lex:5,puffs:100}},gs={qKinTip:2e-5,qKinWing:.0014,qKinLex:15e-5,rEff:2e-6,mix:1.4,bright:1,density:1,bloom:1},St={g0:4.6,g1:7.2,v0:110,v1:205,snap0:9,snap1:30,snapDecay:.3,dry:.35,rh0:.2,rh1:.75,attack:.09,release:.16,film:.42,wing:.1,sheetLife:1,sheetDecay:.28,sheetGrow:.4},bs=s=>()=>{s|=0,s=s+1831565813|0;let e=Math.imul(s^s>>>15,1|s);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296},xe=(s,e,t)=>{const a=Math.min(1,Math.max(0,(t-s)/(e-s)));return a*a*(3-2*a)};function Na(s,e){let t=0,a=s.p*.6;if(dt(s,a)<=e)return a;for(let o=0;o<26;o++){const i=(t+a)/2;dt(s,i)>e?a=i:t=i}return(t+a)/2}class ys{constructor(e,t,a,o,i){this.cap=e,this.hand=t,this.seed=a,this.roll=o,this.span=i;const l=()=>new Float64Array(e),r=()=>new Float32Array(e);this.px=l(),this.py=l(),this.pz=l(),this.t0=l(),this.sx=r(),this.sy=r(),this.sz=r(),this.sink=r(),this.lx=r(),this.ly=r(),this.lz=r(),this.gam=r(),this.rc0=r(),this.nu=r(),this.V=r(),this.T=r(),this.p=r(),this.w=r(),this.rho=r(),this.need=r(),this.s=r(),this.q=r(),this.dead=new Uint8Array(e),this.rLast=r(),this.tLast=r()}cap;hand;seed;roll;span;n=0;head=0;px;py;pz;t0;sx;sy;sz;sink;lx;ly;lz;gam;rc0;nu;V;T;p;w;rho;need;s;q;dead;rLast;tLast;lastLive=-1/0;clear(){this.n=0,this.head=0,this.lastLive=-1/0}idx(e){return(this.head-this.n+e+this.cap*2)%this.cap}push(){const e=this.head;return this.head=(this.head+1)%this.cap,this.n<this.cap&&this.n++,e}expire(e,t){for(;this.n>0&&e-this.t0[this.idx(0)]>t;)this.n--}}class Ts{constructor(e){this.maxPoints=e;const t=e*2;this.pos=new Float32Array(t*3),this.tan=new Float32Array(t*3),this.a=new Float32Array(t*4),this.b=new Float32Array(t*4),this.index=new Uint32Array(e*6);const a=(o,i)=>new He(o,i).setUsage(ha);this.geo.setAttribute("position",a(this.pos,3)),this.geo.setAttribute("aTangent",a(this.tan,3)),this.geo.setAttribute("aA",a(this.a,4)),this.geo.setAttribute("aB",a(this.b,4)),this.geo.setIndex(new He(this.index,1).setUsage(ha))}maxPoints;geo=new pa;pos;tan;a;b;index;nv=0;ni=0;begin(){this.nv=0,this.ni=0}point(e,t,a,o,i,l,r,n,u,c,m,b,v){if(this.nv+2>this.maxPoints*2)return!1;for(let x=0;x<2;x++){const f=this.nv+x,_=x===0?-1:1;this.pos[f*3]=e,this.pos[f*3+1]=t,this.pos[f*3+2]=a,this.tan[f*3]=o,this.tan[f*3+1]=i,this.tan[f*3+2]=l,this.a[f*4]=r,this.a[f*4+1]=n,this.a[f*4+2]=u,this.a[f*4+3]=_,this.b[f*4]=c,this.b[f*4+1]=m,this.b[f*4+2]=b,this.b[f*4+3]=v}return this.nv+=2,!0}join(){const e=this.nv-4;if(e<0)return;const t=this.index,a=this.ni;t[a]=e,t[a+1]=e+1,t[a+2]=e+2,t[a+3]=e+1,t[a+4]=e+3,t[a+5]=e+2,this.ni+=6}commit(){for(const t of["position","aTangent","aA","aB"]){const a=this.geo.getAttribute(t);a.clearUpdateRanges(),a.addUpdateRange(0,this.nv*a.itemSize),a.needsUpdate=!0}const e=this.geo.getIndex();e.clearUpdateRanges(),e.addUpdateRange(0,this.ni),e.needsUpdate=!0,this.geo.setDrawRange(0,this.ni)}}class Ga{constructor(e){this.max=e;const t=new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]);this.geo.setAttribute("position",new He(t,3)),this.geo.setIndex([0,1,2,0,2,3]),this.pos=new Float32Array(e*3),this.axis=new Float32Array(e*3),this.norm=new Float32Array(e*3),this.a=new Float32Array(e*4),this.b=new Float32Array(e*4);const a=(o,i)=>new Io(o,i).setUsage(ha);this.geo.setAttribute("iPos",a(this.pos,3)),this.geo.setAttribute("iAxis",a(this.axis,3)),this.geo.setAttribute("iNorm",a(this.norm,3)),this.geo.setAttribute("iA",a(this.a,4)),this.geo.setAttribute("iB",a(this.b,4)),this.geo.instanceCount=0}max;geo=new Bo;pos;axis;norm;a;b;n=0;begin(){this.n=0}add(e,t,a,o,i,l,r,n,u,c,m,b,v,x){if(this.n>=this.max||n<.004)return;const f=this.n++;this.norm[f*3]=x?x.x:0,this.norm[f*3+1]=x?x.y:0,this.norm[f*3+2]=x?x.z:0,this.pos[f*3]=e,this.pos[f*3+1]=t,this.pos[f*3+2]=a,this.axis[f*3]=o,this.axis[f*3+1]=i,this.axis[f*3+2]=l,this.a[f*4]=r,this.a[f*4+1]=n,this.a[f*4+2]=u,this.a[f*4+3]=c,this.b[f*4]=m,this.b[f*4+1]=b,this.b[f*4+2]=v,this.b[f*4+3]=0}commit(){for(const e of["iPos","iAxis","iNorm","iA","iB"]){const t=this.geo.getAttribute(e);t.clearUpdateRanges(),t.addUpdateRange(0,this.n*t.itemSize),t.needsUpdate=!0}this.geo.instanceCount=this.n}}class Ms{constructor(e){this.cap=e,this.c=new Float64Array(e*3),this.r=new Float32Array(e*3),this.d=new Float32Array(e*6),this.k=new Float32Array(e*7)}cap;n=0;next=0;c;r;d;k;clear(){this.n=0,this.next=0}spawn(e,t,a,o,i,l,r,n,u,c,m){const b=this.next;this.next=(this.next+1)%this.cap,this.n=Math.min(this.cap,this.n+1),this.c[b*3]=t.x,this.c[b*3+1]=t.y,this.c[b*3+2]=t.z,this.r[b*3]=a.x,this.r[b*3+1]=a.y,this.r[b*3+2]=a.z,this.d[b*6]=o.x,this.d[b*6+1]=o.y,this.d[b*6+2]=o.z,this.d[b*6+3]=i.x,this.d[b*6+4]=i.y,this.d[b*6+5]=i.z;const v=this.k;v[b*7]=e,v[b*7+1]=l,v[b*7+2]=r,v[b*7+3]=n,v[b*7+4]=u,v[b*7+5]=c,v[b*7+6]=m}}const ia=(s,e,t,a)=>{const o=new Ja({vertexShader:s,fragmentShader:e,uniforms:t,defines:a,transparent:!0,depthWrite:!1,depthTest:!0,side:Ka});return o.blending=Ya,o.blendSrc=ut,o.blendDst=Ht,o.blendSrcAlpha=ut,o.blendDstAlpha=Ht,o};function li(s){const e=typeof s.quality=="object"?s.quality:ws[s.quality??"high"],t={...gs,...s.tuning},a=(q,g,S)=>rs(q,g,S,Qe.climate.ccn??1),o=s.wind?.clone()??new T,i=ps(128),l={uSunDir:new d(new T(0,1,0)),uSunIrr:new d(new T(1,1,1)),uSkyIrr:new d(new T(.3,.35,.4)),uBright:new d(1),uTime:new d(0),tNoise:new d(i),tDepth:new d(null),uDepth:new d(new T(0,.1,1e3)),uRes:new d(new $e(1,1)),uSoft:new d(.35),uPixAng:new d(.001)},r={STD_DEPTH:1},n=ia(vs,xs,l,{}),u=ia(Va,Oa,l,{}),c=ia(Va,Oa,l,r),m=new ht,b=new ht;m.matrixWorldAutoUpdate=!1,b.matrixWorldAutoUpdate=!1;const v=[],x=Math.ceil(e.rate*e.life)+4,f=8,_=new Ts(f*8*(x+2)),y=2*(e.sheet[0]*(e.sheet[1]+1)+e.lex),I=new Ga(f*y+e.puffs),P=new Ga(y),V=new Ms(e.puffs),Gt=(q,g,S)=>{const U=new Fe(q,g);return U.frustumCulled=!1,U.matrixAutoUpdate=!1,U.renderOrder=S,U.updateMatrixWorld(!0),U},co=Gt(_.geo,n,0),ho=Gt(I.geo,u,1),uo=Gt(P.geo,c,0);m.add(co,ho),b.add(uo);const fe=new T,De=new T,jt=new T,Wt=new T,pt=new Xa,Se={trails:0,points:0,sprites:0,puffs:0,ms:0};let wa=!1,ga=0,ba=0;const $t=[],fo=new Float64Array((x+1)*3),mo=new Float32Array(x+1),po=new Float32Array(x+1),vo=new Float32Array(x+1),xo=new Float32Array(x+1);class wo{own=!1;visible=!0;state={V:0,nz:1,alpha:0,mach:0,cl:0,rh:0,tipCore:0,wingQ:0,lexQ:0,burst:0,bloom:0};trails=[];airframe;bloom=0;snap=0;nzLast=1;emitN=0;lod=1;prev=null;cur=null;nzF=1;lastEmit=-1/0;dist=0;rng;attached=[];burstPts=[];burstRate=0;burstQ=0;shedRate=0;spawnAcc=0;seedBase;constructor(g,S){this.airframe=g,this.own=!!S.own,this.seedBase=S.seed??v.length*13.37+1.7,this.rng=bs(Math.floor(this.seedBase*1e3)+7);const U=g,O=(J,te,N)=>this.trails.push({trail:new ys(x,J==="sheet"?0:te,this.seedBase*.37+N*.173,J==="tip"||J==="tail",U.span),local:new T,kind:J,now:{gam:0,rc0:.3,nu:0,sink:0,need:1e9}});O("tip",1,0),O("tip",-1,1),e.tails&&(O("tail",1,2),O("tail",-1,3)),O("lex",-1,4),O("lex",1,5),O("sheet",1,6),O("sheet",-1,7),this.place(U)}place(g){const S=g.wing,U=.55,O=[S.rootTE[0]+(S.tipTE[0]-S.rootTE[0])*U,S.rootTE[1]+(S.tipTE[1]-S.rootTE[1])*U+.3,S.rootTE[2]+(S.tipTE[2]-S.rootTE[2])*U+.15];let J={tip:1,tail:1,lex:1,sheet:1};for(const te of this.trails){const N=J[te.kind];J={...J,[te.kind]:-N};const K=te.kind==="tip"?g.tip:te.kind==="tail"?g.tail:te.kind==="lex"?g.lex.te:O;te.local.set(N*K[0],K[1],K[2])}}setAirframe(g){g!==this.airframe&&(this.airframe=g,this.place(g))}reset(g=!1){if(this.prev=this.cur=null,this.lastEmit=-1/0,g)for(const S of this.trails)S.trail.clear()}remove(){const g=v.indexOf(this);g>=0&&v.splice(g,1)}update(g){const S=this.airframe,U=g.quaternion.clone(),O=g.position.clone();g.origin==="eye"&&O.sub(De.fromArray(S.eye).applyQuaternion(U));const J=g.time,te=this.cur;te&&(J-te.t>.5||J<te.t||O.distanceTo(te.P)>400*Math.max(.02,J-te.t))&&this.reset();const N=this.cur;if(N&&J===N.t){N.P.copy(O),N.Q.copy(U),g.velocity&&N.v.copy(g.velocity);return}const K=N?J-N.t:0,L=g.velocity?g.velocity.clone():N&&K>0?O.clone().sub(N.P).divideScalar(K):new T(0,0,0);if(!g.velocity&&N&&!this.prev&&N.v.copy(L),this.prev=N,this.cur={t:J,P:O,Q:U,v:L},!this.prev)return;const $=jt.set(0,1,0).applyQuaternion(U);let Y;if(g.nz!==void 0)Y=g.nz;else{const R=(Wt.copy(L).sub(this.prev.v).divideScalar(Math.max(1e-4,K)).dot($)+At*$.y)/At;this.nzF+=(R-this.nzF)*(1-Math.exp(-K/.05)),Y=this.nzF}const h=L.clone().sub(o),C=h.length(),ce=g.altitude??O.y+Qe.originAlt,k=ss(Qe.climate,ce,g.inCloud??0),we=ls(S,{V:C,nz:Y,air:k});let D=g.alpha??0;if(g.alpha===void 0){const E=De.copy(h).applyQuaternion(pt.copy(U).invert()),R=Math.atan2(-E.y,-E.z);D=Math.max(R,cs(S,Math.abs(we)))}const ge=C/k.a,ie=.5*k.rho*C*C,G=this.state;G.V=C,G.nz=Y,G.alpha=D,G.mach=ge,G.cl=we,G.rh=k.rh;{const E=St,R=Math.abs(Y),w=K>0?(R-Math.abs(this.nzLast))/K:0;this.nzLast=Y;const re=xe(E.v0,E.v1,C);this.snap=Math.max(this.snap*Math.exp(-K/E.snapDecay),xe(E.snap0,E.snap1,w)*xe(3,5.5,R));const oe=E.dry+(1-E.dry)*xe(E.rh0,E.rh1,k.rh),me=Math.min(1.2,(xe(E.g0,E.g1,R)+.45*this.snap)*re)*oe*t.bloom,j=me>this.bloom?E.attack:E.release;this.bloom+=(me-this.bloom)*(K>0?1-Math.exp(-K/j):0),G.bloom=this.bloom}const H=this.bloom,he=us(S,{V:C,nz:Math.abs(Y),air:k}),z=Na(k,t.qKinTip);G.tipCore=_t(k.rho,he.gamma*Ha(0,S.span),he.rc0)/Math.max(1,z);const p=D*180/Math.PI,M=Math.min(1,Math.max(0,(S.lex.burstApex-p)/(S.lex.burstApex-S.lex.burstTE))),ae=ms(D,S.lex.strength)*ie,W=.12+.35*Math.sin(Math.min(D,1));for(const E of this.trails){const R=E.now;if(E.kind==="sheet")R.gam=0,R.rc0=.12*S.span*.5,R.nu=Math.max(0,S.tip[0]-Math.abs(E.local.x)),R.sink=he.sink,R.need=0;else if(E.kind==="lex"){const w=2*Math.PI*W*Math.sqrt(ae/k.rho)*(M>=.999?1:0);R.gam=w,R.rc0=W,R.nu=4e-4*w,R.sink=he.sink,R.need=Na(k,t.qKinLex)}else{const w=E.kind==="tip"?1:S.tailShare;R.gam=he.gamma*w,R.rc0=he.rc0*(E.kind==="tip"?1:.6),R.nu=he.nu*w,R.sink=he.sink,R.need=z}}const Q=1/e.rate,X=this.prev,ue=this.cur,ze=ue.t-X.t;let ne=Math.max(this.lastEmit+Q,X.t+1e-9);Number.isFinite(this.lastEmit)||(ne=Math.ceil(X.t/Q)*Q);const be=$.clone().multiplyScalar(Y>=0?-1:1),Ze=new T(1,0,0).applyQuaternion(U);for(;ne<=ue.t+1e-9;ne+=Q){if(this.lod>1&&this.emitN++%this.lod!==0){this.dist+=C*Q,this.lastEmit=ne;continue}const E=(ne-X.t)/ze,R=E*E,w=R*E,re=2*w-3*R+1,oe=w-2*R+E,me=-2*w+3*R,j=w-R,pe=re*X.P.x+oe*ze*X.v.x+me*ue.P.x+j*ze*ue.v.x,Z=re*X.P.y+oe*ze*X.v.y+me*ue.P.y+j*ze*ue.v.y,ye=re*X.P.z+oe*ze*X.v.z+me*ue.P.z+j*ze*ue.v.z;pt.slerpQuaternions(X.Q,ue.Q,E),this.dist+=C*Q;for(const de of this.trails){const A=de.trail,ee=de.now,F=A.push();De.copy(de.local).applyQuaternion(pt),A.px[F]=pe+De.x,A.py[F]=Z+De.y,A.pz[F]=ye+De.z,A.t0[F]=ne,A.sx[F]=be.x,A.sy[F]=be.y,A.sz[F]=be.z,A.sink[F]=ee.sink,A.lx[F]=Ze.x*A.hand,A.ly[F]=Ze.y*A.hand,A.lz[F]=Ze.z*A.hand,A.gam[F]=ee.gam,A.rc0[F]=ee.rc0,A.nu[F]=ee.nu,A.V[F]=C,A.T[F]=k.T,A.p[F]=k.p,A.w[F]=k.w,A.rho[F]=k.rho,A.need[F]=ee.need,A.s[F]=this.dist%1e4,A.q[F]=0;let Ee;de.kind==="sheet"?(A.q[F]=H,Ee=H<.02):Ee=ee.gam<=0||_t(k.rho,ee.gam,ee.rc0)<=ee.need,A.dead[F]=Ee?1:0,Ee||(A.lastLive=ne)}this.lastEmit=ne}this.attached.length=0,this.burstPts=[];const Pe=(E,R,w=3)=>w*(1-Math.exp(-R*E*t.density/w)),vt=new T(0,-Math.sin(Math.min(D,.6))*.35,1).normalize(),B=S.wing,[Rt,Ve]=e.sheet,Je=fs(Math.abs(we),ge);let ve=0;const _e=H>.02?Ve+1:Ve;for(let E=0;E<_e;E++){const R=E===Ve,w=R?.98:.04+(E+.5)/Ve*.6,re=Math.exp(-w/.32),oe=R?0:dt(k,Je*1.5*re*ie)-t.qKinWing,me=H*(R?.55:.72*xe(0,.18,w));if(!(oe<=0&&me<=.01)){oe>0&&(ve=Math.max(ve,oe));for(let j=0;j<Rt;j++){const pe=kt=>{const Sa=Math.sin((j*12.9898+E*78.233+kt*37.719)*43758.5453);return Sa-Math.floor(Sa)-.5},Z=Math.min(.97,Math.max(.03,.06+(j+.5+.6*pe(1))/Rt*.9)),ye=Math.max(.02,w+.5/Ve*pe(2)),de=.6+.4*Math.sin(Math.PI*Math.min(1,Z*1.1)),A=[B.rootLE[0]+(B.tipLE[0]-B.rootLE[0])*Z,B.rootLE[1]+(B.tipLE[1]-B.rootLE[1])*Z,B.rootLE[2]+(B.tipLE[2]-B.rootLE[2])*Z],ee=[B.rootTE[0]+(B.tipTE[0]-B.rootTE[0])*Z,B.rootTE[1]+(B.tipTE[1]-B.rootTE[1])*Z,B.rootTE[2]+(B.tipTE[2]-B.rootTE[2])*Z],F=ee[2]-A[2],Ee=(.25+.35*ye*F*(.5+Math.sin(Math.min(D,.6))))*(1+.4*H),Qt=Math.min(.9+.2*H,Math.max(.22,F*(.26+.05*H))),bo=oe>0?Pe(a(oe,k.rho,t.rEff)*Ee*de,.45,.8):0,yo=Math.max(bo,me*de*(.85+.3*pe(3)))*St.wing;for(const kt of[1,-1])this.attached.push({local:new T(kt*(A[0]+(ee[0]-A[0])*ye),A[1]+(ee[1]-A[1])*ye+Ee*.45,R?ee[2]+Qt*.8:Math.max(A[2]+F*ye,A[2]+Qt*3.2*.75)),r:Qt,tau:yo,stretch:R?3.2:2.2+H,seed:j*.131+E*.37+(kt>0?0:.5),flow:C,turb:(.15+.5*ye)*(1-.4*H)+(R?.3:0),dir:vt,flat:!R})}}}G.wingQ=ve,this.shedRate=Math.max(Math.min(1,Math.max(0,ve-.001)/.002),Math.min(1,H*1.1));const Ke=S.lex,Oe=e.lex;let Ae=0;const xt=new T(...Ke.apex),Re=new T(...Ke.join),Ye=new T(...Ke.te),Xe=xt.distanceTo(Re),Et=Re.distanceTo(Ye),wt=Xe/(Xe+Et),ya=Ye.clone().sub(Re).normalize(),go=.05+.4*Math.sin(Math.min(D,1)),Ta=dt(k,ae)-t.qKinLex;if(this.burstRate=0,this.burstQ=0,Ta>0||H>.02){for(let R=0;R<Oe;R++){const w=(R+.5)/Oe*1.35,re=w<wt?xt.clone().lerp(Re,w/wt):w<=1?Re.clone().lerp(Ye,(w-wt)/(1-wt)):Ye.clone().addScaledVector(ya,(w-1)*(Xe+Et)*.8),oe=(w<wt?Re.clone().sub(xt):ya.clone()).normalize();re.y+=go*Math.min(1,w*1.4);const me=Math.min(1,w/.3),j=dt(k,ae*me)-t.qKinLex,pe=H*St.wing*.95*xe(0,.35,w)*S.lex.strength;if(j<=0&&pe<=.01)continue;j>0&&(Ae=Math.max(Ae,j));const Z=w>M,ye=.5+.8*Math.sin(Math.min(D,1)),de=(.05+.26*Math.min(w,1.2))*ye*(Z?1.5+1.6*Math.min(1,w-M):1),A=w>1?Math.max(0,1-(w-1)/(1.35-1)):1,ee=Math.max(j>0?Pe(a(j,k.rho,t.rEff)*1.6*de,Z?.25:.6):0,pe)*A;for(const F of[1,-1]){const Ee=new T(F*re.x,re.y,re.z);this.attached.push({local:Ee,r:de,tau:ee,stretch:Z?1.4:5,seed:R*.211+(F>0?.13:.71),flow:C,turb:Z?1:.1,dir:new T(F*oe.x,oe.y,oe.z)}),Z&&w<=1.1&&this.burstPts.push({local:Ee,r:de})}}M<1&&(this.burstRate=Math.min(1,(1-M)*2.5),this.burstQ=Ta)}G.lexQ=Ae,G.burst=1-M;const Ma=(this.burstRate*640+this.shedRate*90)*(e.puffs/720);if(Ma>0&&K>0){this.spawnAcc+=Ma*K;const E=h.clone().normalize().negate(),R=be.clone().multiplyScalar(he.sink*.6);for(;this.spawnAcc>=1;){this.spawnAcc-=1;const w=this.rng,re=w();pt.slerpQuaternions(X.Q,ue.Q,re);const oe=X.P.clone().lerp(ue.P,re),me=this.burstPts.length>0&&w()<this.burstRate/(this.burstRate+this.shedRate*.4);let j,pe,Z;if(me){const A=this.burstPts[Math.floor(w()*this.burstPts.length)];j=A.local.clone().add(new T((w()-.5)*A.r,(w()-.3)*A.r,(w()-.5)*A.r*1.5)),pe=Math.max(.6,A.r*(1+.6*w())),Z=Pe(a(this.burstQ,k.rho,t.rEff)*pe*1.2,.028)}else{const A=.15+.8*w(),ee=w()<.5?1:-1;j=new T(ee*(B.rootTE[0]+(B.tipTE[0]-B.rootTE[0])*A),B.rootTE[1]+.2,B.rootTE[2]+(B.tipTE[2]-B.rootTE[2])*A+.3),pe=(.2+.2*w())*(1+.7*H),Z=Math.max(Pe(a(ve,k.rho,t.rEff)*.3,.3),H*(.16+.14*w()))*St.film}const ye=j.applyQuaternion(pt).add(oe),de=new T(w()-.5,w()-.5,w()-.5).multiplyScalar(pe*1.2);de.addScaledVector(E,-de.dot(E)),V.spawn(X.t+re*ze,ye,de,E,R,me?.25+.35*w():(.25+.35*w())*(1+1.6*H),pe,Z,(w()<.5?-1:1)*(2+4*w()),w()*10,2+2.5*w())}}}headOf(g,S){return this.cur?S.copy(g.local).applyQuaternion(this.cur.Q).add(this.cur.P):null}get pose(){return this.cur}}const Qe={world:m,own:b,uniforms:l,quality:e,tuning:t,wind:o,climate:s.climate,originAlt:s.originAlt??0,ownOrigin:null,get time(){return ga},setLighting(q,g,S){l.uSunDir.value.copy(q).normalize(),l.uSunIrr.value.copy(g),l.uSkyIrr.value.copy(S)},addJet(q,g={}){if(v.length>=f)throw new Error("vortex: too many jets");const S=new wo(q,g);return v.push(S),S},clear(){for(const q of v)q.reset(!0);V.clear()},hasContent(q){return q==="world"?_.ni>0||I.n>0:P.n>0},update({time:q,delta:g,cameraWorld:S}){ga=q,ba++;const U=typeof performance<"u"?performance.now():0;fe.copy(S),l.uTime.value=q,l.uBright.value=t.bright;const O=Math.max(0,g);_.begin(),I.begin(),P.begin();let J=0,te=0;$t.length=0;const N=e.life;for(const L of v){const $=L.pose;for(const Y of L.trails){const h=Y.trail;if(h.expire(q,N),!L.visible||h.n===0||q-h.lastLive>N)continue;const C=Y.kind==="sheet",ce=St,k=h.n,we=k+($?1:0);if(we<2)continue;const D=fo,ge=mo,ie=po,G=vo,H=xo;for(let z=0;z<k;z++){const p=h.idx(z),M=Math.max(0,q-h.t0[p]),ae=h.V[p];if(C){const Je=h.dead[p]?0:h.q[p],ve=(1-Math.exp(-M/.6))*.7*h.nu[p],_e=h.sink[p]*M;D[z*3]=h.px[p]+o.x*M+h.lx[p]*ve+h.sx[p]*_e-fe.x,D[z*3+1]=h.py[p]+o.y*M+h.ly[p]*ve+h.sy[p]*_e-fe.y,D[z*3+2]=h.pz[p]+o.z*M+h.lz[p]*ve+h.sz[p]*_e-fe.z,ge[z]=h.rc0[p]*(1-.35*Math.min(1,M/.8))+ce.sheetGrow*M,ie[z]=Je*.42*ce.film*Math.exp(-M/ce.sheetDecay)*xe(ce.sheetLife,ce.sheetLife*.5,M)*xe(0,1.5,ae*M),G[z]=h.s[p],H[z]=M;continue}let W=0,Q=0;const X=M>.25&&O>0&&(p+ba&1)===1;if(!h.dead[p]&&X)W=h.rLast[p],Q=h.tLast[p];else if(!h.dead[p]){const Je=M>.25?O*2:O,ve=h.gam[p]*(h.roll?Ha(ae*M,h.span):1),_e=Math.sqrt(h.rc0[p]*h.rc0[p]+4*h.nu[p]*M),Ke=ve>0?_t(h.rho[p],ve,_e):0,Oe=ds(Ke,h.need[p],_e),Ae=h.q[p];if(Oe>0||Ae>0){const xt={T:h.T[p],p:h.p[p],w:h.w[p],rho:h.rho[p]},Re=Math.max(0,dt(xt,Ke)-(Y.kind==="lex"?t.qKinLex:t.qKinTip)),Ye=Re>Ae?1-Math.exp(-Je/.03):1-Math.exp(-Je/.18),Xe=O>0?Ae+(Re-Ae)*Ye:Ae===0&&M<.02?Re:Ae;h.q[p]=Xe,W=Oe>0?Math.sqrt(Oe*Oe+.03*M):0;const Et=Math.exp(-M/t.mix)*xe(N,N*.6,M)*xe(0,1.2,ae*M);Q=W>0?2.5*(1-Math.exp(-(.6*a(Xe,h.rho[p],t.rEff)*1.6*W)/2.5))*Et:0}h.rLast[p]=W,h.tLast[p]=Q}const ue=h.sink[p]*M,ze=h.span*.785,ne=h.s[p],be=Math.min(1.2,.04*Math.exp(M/1.1))*Math.sin(ne/(8.6*ze)*6.2832+1.3),Ze=.012*h.span*Math.min(1,M),Pe=Ze*(Math.sin(ne*.31+h.seed*40)+.6*Math.sin(ne*.117+h.seed*9)+.35*Math.sin(ne*.73+h.seed*3)),vt=Ze*(Math.sin(ne*.23+h.seed*17)+.6*Math.sin(ne*.089+h.seed*5)+.35*Math.sin(ne*.61+h.seed*11)),B=h.lx[p]*(Pe-be)+h.sx[p]*(vt+.5*be),Rt=h.ly[p]*(Pe-be)+h.sy[p]*(vt+.5*be),Ve=h.lz[p]*(Pe-be)+h.sz[p]*(vt+.5*be);D[z*3]=h.px[p]+(o.x*M+h.sx[p]*ue+B)-fe.x,D[z*3+1]=h.py[p]+(o.y*M+h.sy[p]*ue+Rt)-fe.y,D[z*3+2]=h.pz[p]+(o.z*M+h.sz[p]*ue+Ve)-fe.z,ge[z]=Math.max(.03,W),ie[z]=Q,G[z]=h.s[p],H[z]=M}if(we>k){const z=L.headOf(Y,De),p=k,M=k-1;D[p*3]=z.x-fe.x,D[p*3+1]=z.y-fe.y,D[p*3+2]=z.z-fe.z,ge[p]=ge[M],ie[p]=0,G[p]=G[M]+.5,H[p]=0}let he=!1;for(let z=0;z<we;z++){if(!(ie[z]>1e-4||z>0&&ie[z-1]>1e-4||z<we-1&&ie[z+1]>1e-4)){he=!1;continue}const M=Math.max(0,z-1),ae=Math.min(we-1,z+1),W=D[ae*3]-D[M*3],Q=D[ae*3+1]-D[M*3+1],X=D[ae*3+2]-D[M*3+2];if(!_.point(D[z*3],D[z*3+1],D[z*3+2],W,Q,X,ge[z],ie[z]*t.density,G[z],H[z],H[z]*1.5,h.hand,h.seed))break;he&&_.join(),he=!0,J++}if(te++,wa){let z=0,p=0,M=0,ae=0;for(let Q=0;Q<k;Q++)z=Math.max(z,ie[Q]),p=Math.max(p,ge[Q]),M=Math.max(M,h.q[h.idx(Q)]);const W=h.idx(Math.max(0,k-30));ae=_t(h.rho[W],h.gam[W],h.rc0[W]),$t.push({kind:Y.kind,n:k,maxTau:+z.toFixed(3),maxHw:+p.toFixed(3),maxQ:+(M*1e3).toFixed(3),need:Math.round(h.need[W]),dp0:Math.round(ae),gam:Math.round(h.gam[W]),rc0:+h.rc0[W].toFixed(2)})}}if($&&L.visible&&q-$.t<.3){const Y=L.own?P:I,h=L.own&&Qe.ownOrigin?Qe.ownOrigin:fe;for(const C of L.attached){const ce=De.copy(C.local).applyQuaternion($.Q).add($.P).sub(h),k=jt.copy(C.dir).applyQuaternion($.Q);Y.add(ce.x,ce.y,ce.z,k.x,k.y,k.z,C.r,C.tau,C.stretch,C.seed,q,C.flow,C.turb,C.flat?Wt.set(0,1,0).applyQuaternion($.Q):void 0)}}}let K=0;for(let L=0;L<V.n;L++){const $=V.k,Y=$[L*7],h=$[L*7+1],C=q-Y;if(C<0||C>h)continue;const ce=$[L*7+2],k=$[L*7+3],we=$[L*7+4],D=$[L*7+5],ge=$[L*7+6],ie=jt.set(V.d[L*6],V.d[L*6+1],V.d[L*6+2]),G=Wt.set(V.r[L*3],V.r[L*3+1],V.r[L*3+2]),H=we*.35*(1-Math.exp(-C/.35));G.applyAxisAngle(ie,H).multiplyScalar(1+1.2*C);const he=V.c[L*3]+G.x+(o.x+V.d[L*6+3])*C-fe.x,z=V.c[L*3+1]+G.y+(o.y+V.d[L*6+4])*C-fe.y,p=V.c[L*3+2]+G.z+(o.z+V.d[L*6+5])*C-fe.z,M=ce+ge*C,ae=C/h,W=k*(ce*ce/(M*M))*1.4*(1-ae)*(1-ae)*xe(0,.06,C);I.add(he,z,p,ie.x,ie.y,ie.z,M,W,1.6,D,C,3,1),K++}_.commit(),I.commit(),P.commit(),Se.trails=te,Se.points=J,Se.sprites=I.n+P.n,Se.puffs=K,Se.ms=typeof performance<"u"?performance.now()-U:0},debug(q){return q!==void 0&&(wa=q),$t.slice()},stats(){const g=v.filter(S=>S.visible&&S.pose).sort((S,U)=>U.state.nz-S.state.nz)[0]?.state;return{vx_trails:Se.trails,vx_pts:Se.points,vx_sprites:Se.sprites,vx_puffs:Se.puffs,vx_cpu_ms:Se.ms.toFixed(2),...g?{vx_bloom:g.bloom.toFixed(2),vx_nz:g.nz.toFixed(2),vx_aoa:(g.alpha*180/Math.PI).toFixed(1),vx_rh:(g.rh*100).toFixed(0),vx_core:g.tipCore.toFixed(2),vx_V:g.V.toFixed(0),vx_wq:(g.wingQ*1e3).toFixed(2),vx_lq:(g.lexQ*1e3).toFixed(2),vx_burst:g.burst.toFixed(2)}:{}}},dispose(){_.geo.dispose(),I.geo.dispose(),P.geo.dispose(),n.dispose(),u.dispose(),c.dispose(),i.dispose()}};return Qe}class so extends ao{constructor(e,t,a,o=null){super("VortexPass"),this.system=e,this.cam=t,this.composer=a,this.own=o,this.needsSwap=!1}system;cam;composer;own;enabledDraw=!0;timer=null;logDepth=!1;static install(e,t,a,o={}){const i=e,l=new so(t,a,i,o.own??null);let r=-1;return o.own?r=i.passes.indexOf(o.own.after)+1:o.before&&(r=i.passes.indexOf(o.before)),r<=0&&(r=Math.max(1,i.passes.length-1)),e.addPass(l,r),l}set camera2(e){this.cam=e}initialize(e){this.logDepth=e.capabilities.logarithmicDepthBuffer}render(e,t){if(!t||!this.enabledDraw)return;const a=this.own?"own":"world";if(!this.system.hasContent(a))return;const o=this.system.uniforms,i=this.cam;if(i.updateMatrixWorld(),this.timer?.mark(this.own?"vortex_own":"vortex"),this.own)o.tDepth.value=this.own.depthTexture,o.uDepth.value.set(-1,i.near,i.far);else{const u=this.composer.depthRenderTarget??null;if(u){const c=e.getContext(),m=e.properties;e.setRenderTarget(u);const b=m.get(u).__webglFramebuffer;e.setRenderTarget(t);const v=m.get(t).__webglFramebuffer;c.bindFramebuffer(c.READ_FRAMEBUFFER,b),c.bindFramebuffer(c.DRAW_FRAMEBUFFER,v),c.blitFramebuffer(0,0,u.width,u.height,0,0,t.width,t.height,c.DEPTH_BUFFER_BIT,c.NEAREST),c.bindFramebuffer(c.READ_FRAMEBUFFER,null),c.bindFramebuffer(c.DRAW_FRAMEBUFFER,null),e.setRenderTarget(null),o.tDepth.value=u.depthTexture,o.uDepth.value.set(this.logDepth?Math.log2(i.far+1):-1,i.near,i.far)}else o.uDepth.value.set(0,i.near,i.far)}o.uRes.value.set(t.width,t.height),o.uPixAng.value=2*Math.tan(i.fov*Math.PI/180/2)/Math.max(1,t.height)/Math.max(.001,i.zoom);const l=e.autoClear;e.autoClear=!1;const r=this.own,n=r?.target?r.target(t):t;n!==t&&o.uRes.value.set(n.width,n.height),e.setRenderTarget(n),e.render(this.own?this.system.own:this.system.world,i),e.autoClear=l,this.timer?.mark("post")}}const mt={f135:{id:"f135",name:"F135-PW-400",exitMil:.54,exitAB:.63,depth:1.05,petals:15,flameLength:7.5,diamondSpacing:1.15,diamonds:5,diamondContrast:.5,hazeLength:34,hazeGain:1.15,flameColor:[1,.22,.035],hotColor:[1,.74,.46],coreColor:[.44,.36,1],diamondColor:[1,.78,.62]},f414:{id:"f414",name:"F414-GE-400",exitMil:.39,exitAB:.46,depth:.75,petals:12,flameLength:5.5,diamondSpacing:1.1,diamonds:5,diamondContrast:.85,hazeLength:26,hazeGain:.9,flameColor:[1,.2,.03],hotColor:[1,.76,.5],coreColor:[.42,.36,1],diamondColor:[1,.8,.66]},f110:{id:"f110",name:"F110-GE-129",exitMil:.42,exitAB:.5,depth:.95,petals:16,flameLength:6.5,diamondSpacing:1.2,diamonds:5,diamondContrast:.9,hazeLength:30,hazeGain:1,flameColor:[1,.21,.032],hotColor:[1,.76,.48],coreColor:[.43,.36,1],diamondColor:[1,.8,.64]},rd33:{id:"rd33",name:"RD-33",exitMil:.42,exitAB:.5,depth:.8,petals:16,flameLength:6,diamondSpacing:1.2,diamonds:4,diamondContrast:.7,hazeLength:28,hazeGain:1,flameColor:[1,.24,.035],hotColor:[1,.74,.44],coreColor:[.45,.36,1],diamondColor:[1,.8,.62]},al41f1:{id:"al41f1",name:"AL-41F1",exitMil:.4,exitAB:.5,depth:.9,petals:16,flameLength:7,diamondSpacing:1.2,diamonds:4,diamondContrast:.6,hazeLength:32,hazeGain:1.05,flameColor:[1,.22,.03],hotColor:[1,.74,.46],coreColor:[.44,.36,1],diamondColor:[1,.8,.64]}},Ss=`
#include <common>
#include <logdepthbuf_pars_vertex>
attribute float aT;
uniform float uRExit, uRBack, uDepth, uPart;
varying vec3 vP;
varying float vT;
void main() {
  vec3 p = position;
  if (uPart < 0.5) {
    // liner: unit ring at t (0 exit .. 1 back)
    float r = mix(uRExit, uRBack, aT);
    p = vec3(position.xy * r, -aT * uDepth);
  }
  vP = p; vT = aT;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  #include <logdepthbuf_vertex>
}
`,zs=`
#include <common>
#include <logdepthbuf_pars_fragment>
uniform float uPart, uAB, uThr, uTime, uI, uPetals, uRBack, uSeed;
uniform vec3 uTint;
varying vec3 vP;
varying float vT;
float sq(float x) { return x * x; }
float h1(float n) { return fract(sin(n) * 43758.5453); }
float vnoise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  float a = h1(dot(i, vec2(1.0, 57.0))), b = h1(dot(i + vec2(1, 0), vec2(1.0, 57.0))), c = h1(dot(i + vec2(0, 1), vec2(1.0, 57.0))), d = h1(dot(i + vec2(1, 1), vec2(1.0, 57.0)));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y); }
/** Incandescence ramp, k 0 (~900 K, dull red) .. 0.8 (deep orange) .. 1.1 (~2100 K, orange-yellow, the
 *  flameholder's rings only); linear rgb, luminance rising steeply. Kept orange: past the camera's
 *  tone curve a yellower ramp reads yellow-white (STUDY.md). */
vec3 glow(float k) {
  k = clamp(k, 0.0, 1.15);
  vec3 c = vec3(1.0,
    0.06 + 0.19 * smoothstep(0.3, 0.8, k) + 0.25 * smoothstep(0.88, 1.12, k),
    0.008 + 0.035 * smoothstep(0.5, 0.85, k) + 0.15 * smoothstep(0.92, 1.15, k));
  return c * 0.8 * pow(max(k, 1e-4), 3.2);
}
void main() {
  #include <logdepthbuf_fragment>
  float phi = atan(vP.y, vP.x);
  float flick = vnoise(vec2(uTime * 9.0 + uSeed, phi * 2.0)) * 0.5 + vnoise(vec2(uTime * 23.0, uSeed + phi)) * 0.5;
  float kMil = 0.0, kAB = 0.0;
  if (uPart < 0.5) {
    // the liner: hotter deeper in, the petal seams darker lines, a hot band where the flame meets the petals
    float seam = smoothstep(0.0, 0.18, abs(fract(phi / 6.2831853 * uPetals) - 0.5) * 2.0);
    kMil = mix(0.3, 0.56, vT);
    kAB = mix(0.6, 0.8, vT) * (0.86 + 0.14 * seam) + 0.05 * (flick - 0.5);
  } else if (uPart < 1.5) {
    // turbine face / flameholder: the V-gutter rings and radial vanes, white-hot in afterburner
    float r = length(vP.xy) / uRBack;
    float rings = max(exp(-sq((r - 0.42) / 0.05)), exp(-sq((r - 0.78) / 0.05)));
    float vanes = pow(abs(cos(phi * 6.0)), 24.0) * smoothstep(0.2, 0.35, r) * (1.0 - smoothstep(0.8, 0.95, r));
    kMil = 0.6 + 0.1 * rings + 0.05 * vanes;
    kAB = 0.78 + 0.34 * max(rings, 0.6 * vanes) - 0.06 * r + 0.05 * (flick - 0.5);
  } else {
    // centre body
    kMil = 0.5; kAB = 0.86 + 0.05 * (flick - 0.5);
  }
  float k = mix(kMil * (0.6 + 0.4 * uThr), kAB, uAB);
  gl_FragColor = vec4(glow(k) * uI * uTint, 1.0);
}
`;function As(s=48,e=6){const t=[],a=[],o=[];for(let l=0;l<=e;l++)for(let r=0;r<=s;r++){const n=r/s*Math.PI*2;t.push(Math.cos(n),Math.sin(n),0),a.push(l/e)}for(let l=0;l<e;l++)for(let r=0;r<s;r++){const n=l*(s+1)+r,u=n+s+1;o.push(n,u,n+1,n+1,u,u+1)}const i=new pa;return i.setAttribute("position",new He(new Float32Array(t),3)),i.setAttribute("aT",new He(new Float32Array(a),1)),i.setIndex(o),i}function Rs(s,e=0){const t=s.engine,a=s.depth??t.depth,o={uRExit:{value:t.exitMil-.045},uRBack:{value:t.exitMil*1.04},uDepth:{value:a},uPart:{value:0},uAB:{value:0},uThr:{value:1},uTime:{value:0},uI:{value:1},uPetals:{value:t.petals},uSeed:{value:e},uTint:{value:new T(1,1,1)}},i=x=>{const f=new Ja({vertexShader:Ss,fragmentShader:zs,uniforms:{...o,uPart:{value:x}},side:Ka,toneMapped:!1});for(const _ of Object.keys(o))_!=="uPart"&&(f.uniforms[_]=o[_]);return f},l=new va;l.name=`exhaust:glow:${t.id}`;const r=new Fe(As(),i(0)),n=new qo(1,48);n.setAttribute("aT",new He(new Float32Array(n.attributes.position.count).fill(1),1));const u=new Fe(n.scale(t.exitMil*1.04,t.exitMil*1.04,1).translate(0,0,-a+.01),i(1)),c=new Uo(t.exitMil*.4,a*.47,32,1,!0).rotateX(Math.PI/2).translate(0,0,-a+a*.235);c.setAttribute("aT",new He(new Float32Array(c.attributes.position.count).fill(1),1));const m=new Fe(c,i(2));for(const x of[r,u,m])x.castShadow=x.receiveShadow=!1,x.frustumCulled=!1,l.add(x);l.position.fromArray(s.exit);const b=new T().fromArray(s.dir).normalize();l.lookAt(l.position.clone().add(b));const v={object:l,intensity:1,set(x){x.throttle!==void 0&&(o.uThr.value=x.throttle),x.ab!==void 0&&(o.uAB.value=x.ab),x.nozzle!==void 0&&(o.uRExit.value=t.exitMil+(t.exitAB-t.exitMil)*x.nozzle-.045),x.time!==void 0&&(o.uTime.value=x.time),x.tint&&o.uTint.value.copy(x.tint),o.uI.value=v.intensity}};return v}const Nt=`
precision highp float;
precision highp sampler2D;

vec3 hash33(vec3 p) {
  p = fract(p * vec3(0.1031, 0.1030, 0.0973));
  p += dot(p, p.yxz + 33.33);
  return fract((p.xxy + p.yxx) * p.zyx) * 2.0 - 1.0;
}
/** Gradient noise, about -0.7..0.7. */
float gnoise(vec3 p) {
  vec3 i = floor(p), f = fract(p);
  vec3 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float n000 = dot(hash33(i), f);
  float n100 = dot(hash33(i + vec3(1, 0, 0)), f - vec3(1, 0, 0));
  float n010 = dot(hash33(i + vec3(0, 1, 0)), f - vec3(0, 1, 0));
  float n110 = dot(hash33(i + vec3(1, 1, 0)), f - vec3(1, 1, 0));
  float n001 = dot(hash33(i + vec3(0, 0, 1)), f - vec3(0, 0, 1));
  float n101 = dot(hash33(i + vec3(1, 0, 1)), f - vec3(1, 0, 1));
  float n011 = dot(hash33(i + vec3(0, 1, 1)), f - vec3(0, 1, 1));
  float n111 = dot(hash33(i + vec3(1, 1, 1)), f - vec3(1, 1, 1));
  return mix(mix(mix(n000, n100, u.x), mix(n010, n110, u.x), u.y), mix(mix(n001, n101, u.x), mix(n011, n111, u.x), u.y), u.z);
}
/** x², for exp(-sq(..)): pow(x, 2.0) of a negative x is NaN on strict / fast-math compilers. */
float sq(float x) { return x * x; }
/** Interleaved gradient noise (per-pixel march jitter). */
float ign(vec2 p) { return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }

uniform sampler2D tDepth;
/** x: log2(far + 1) (log depth) or -1; y: near; z: far. */
uniform vec3 uDepth;
float viewZ(vec2 uv) {
  float d = texture(tDepth, uv).r;
  if (uDepth.x > 0.0) return exp2(d * uDepth.x) - 1.0;
  float n = uDepth.y, f = uDepth.z;
  return (n * f) / (f - d * (f - n));
}
`,Es=`
in vec3 position;
uniform mat4 modelMatrix, viewMatrix, projectionMatrix;
out vec3 vWorld;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,xa=`
uniform vec3 uCam, uCamFwd;
uniform mat4 uInvModel;
uniform vec2 uRes;
uniform float uTime, uFrame;
in vec3 vWorld;
bool boxRay(out vec3 ro, out vec3 rd, out float tn, out float tf, out vec2 suv) {
  ro = uCam; rd = normalize(vWorld - uCam);
  vec3 lo = (uInvModel * vec4(ro, 1.0)).xyz, ld = (uInvModel * vec4(rd, 0.0)).xyz;
  ld = sign(ld) * max(abs(ld), vec3(1e-6));
  vec3 a = (-0.5 - lo) / ld, b = (0.5 - lo) / ld;
  vec3 mn = min(a, b), mx = max(a, b);
  tn = max(max(mn.x, mn.y), max(mn.z, 0.0));
  tf = min(min(mx.x, mx.y), mx.z);
  suv = gl_FragCoord.xy / uRes;
  float ts = viewZ(suv) / max(dot(rd, uCamFwd), 1e-3);
  tf = min(tf, ts);
  return tf > tn;
}
`,io=`
uniform vec3 uP0, uD1, uP1, uD2;
uniform float uL1, uL2, uR0, uR1, uSpread1, uSpread2;
uniform float uAB, uThr, uSeed, uFlow;
// s: distance down the path; sRaw: signed distance along the first segment (< 0 ahead of the exit);
// r: radial distance; R: the plume's radius there; D: flow direction; rel: offset from the axis
void plumeAt(vec3 p, out float s, out float sRaw, out float r, out float R, out vec3 D, out vec3 rel) {
  vec3 q = p - uP0;
  sRaw = dot(q, uD1);
  float a1 = clamp(sRaw, 0.0, uL1);
  vec3 e1 = q - uD1 * a1;
  s = a1; r = length(e1); R = uR0 + uSpread1 * a1; D = uD1; rel = e1;
  if (uL2 > 0.0) {
    vec3 q2 = p - uP1;
    float b = dot(q2, uD2);
    float a2 = clamp(b, 0.0, uL2);
    vec3 e2 = q2 - uD2 * a2;
    float r2 = length(e2);
    // past the bend the gas fans out along the deflector
    float R2 = uR1 + uSpread2 * a2;
    if (b > 0.0 && r2 / R2 < r / R) { s = uL1 + a2; r = r2; R = R2; D = uD2; rel = e2; }
  }
}
/** The ray's interval inside a finite cylinder (start a, unit axis d, length L, radius r); x > y if none. */
vec2 cylinder(vec3 ro, vec3 rd, vec3 a, vec3 d, float L, float r) {
  vec3 oc = ro - a;
  float dd = dot(rd, d), od = dot(oc, d);
  vec3 rp = rd - d * dd, op = oc - d * od;
  float A = dot(rp, rp), B = dot(rp, op), C = dot(op, op) - r * r;
  float t0 = -1e9, t1 = 1e9;
  if (A > 1e-8) { float h = B * B - A * C; if (h < 0.0) return vec2(1.0, 0.0); h = sqrt(h); t0 = (-B - h) / A; t1 = (-B + h) / A; }
  else if (C > 0.0) return vec2(1.0, 0.0);
  if (abs(dd) > 1e-6) { float s0 = -od / dd, s1 = (L - od) / dd; t0 = max(t0, min(s0, s1)); t1 = min(t1, max(s0, s1)); }
  else if (od < 0.0 || od > L) return vec2(1.0, 0.0);
  return vec2(t0, t1);
}
/** The ray's interval through the plume out to radius k R (both segments, conservative), within [tn, tf]. */
bool plumeInterval(vec3 ro, vec3 rd, float k, float maxS, inout float tn, inout float tf) {
  float L1 = min(uL1, maxS);
  vec2 a = cylinder(ro, rd, uP0 - uD1 * 0.25, uD1, L1 + 0.25, k * (uR0 + uSpread1 * L1));
  vec2 b = vec2(1.0, 0.0);
  if (uL2 > 0.0 && maxS > uL1) b = cylinder(ro, rd, uP1 - uD2 * 0.5, uD2, min(uL2, maxS - uL1) + 0.5, k * (uR1 + uSpread2 * uL2));
  vec2 u = a.x <= a.y ? (b.x <= b.y ? vec2(min(a.x, b.x), max(a.y, b.y)) : a) : b;
  if (u.x > u.y) return false;
  tn = max(tn, u.x); tf = min(tf, u.y);
  return tf > tn;
}
/** Seconds of travel from the exit to s (the flow slows downstream: u = uFlow / (1 + s / 9)). */
float travel(float s) { return (s + s * s / 18.0) / uFlow; }
/** Flow-aligned turbulence: eddies ~ a third of the local radius across, stretched along the flow,
 *  advected at the flow speed, slowly boiling. */
float turbulence(float s, vec3 rel, vec3 D, float R, float octaves) {
  float tau = travel(s) - uTime;
  // the across-flow part in a frame that doesn't depend on the path's direction
  vec3 side = rel / max(0.3 * R, 0.05);
  vec3 q = side + D * (tau * uFlow / 1.6) + vec3(0.0, 0.0, uSeed);
  q += vec3(0.0, uTime * 0.6, uTime * 0.45);
  float n = gnoise(q) * 0.62;
  n += gnoise(q * vec3(2.03) + vec3(17.1, 5.3, uTime * 0.9)) * 0.3;
  if (octaves > 2.5) n += gnoise(q * vec3(4.1) + vec3(31.7, 11.9, uTime * 1.7)) * 0.16;
  return n;
}
`,ks=`${Nt}${xa}${io}
uniform float uHazeLen, uPixAng, uSteps;
uniform float uCamKeep;   // 0..1: the haze kept with the camera near the axis downstream (a chase camera); 0 lab 19's
uniform mat4 uViewProj;
layout(location = 0) out vec4 oHaze;
layout(location = 1) out vec4 oFlow;
const float KG = 1.6;
vec2 screenDir(vec3 a, vec3 D) {
  vec4 c0 = uViewProj * vec4(a, 1.0), c1 = uViewProj * vec4(a + D, 1.0);
  vec2 f = c1.xy / c1.w - c0.xy / c0.w;
  return dot(f, f) > 1e-12 ? normalize(f) : vec2(0.0);
}
void main() {
  vec3 ro, rd; float tn, tf; vec2 suv;
  if (!boxRay(ro, rd, tn, tf, suv)) discard;
  float maxS = uL1 + uL2;
  if (!plumeInterval(ro, rd, 2.1, maxS, tn, tf)) discard;
  // amplitude per plume rides on uThr (throttle x the engine's haze gain x the shot's)
  float amp = uThr * (0.32 + 0.68 * uAB);
  float decay = uHazeLen * (0.5 + 0.5 * uAB) * 0.3;
  float Lend = uL2 > 0.0 ? maxS : uL1;
  // a camera inside the gas (in the jet blast) sees no structure it could resolve
  float sC, sRawC, rC, RC; vec3 DC, relC;
  plumeAt(ro, sC, sRawC, rC, RC, DC, relC);
  float camIn = smoothstep(1.4, 2.4, rC / RC) + (1.0 - step(-1.0, sRawC));
  camIn = max(clamp(camIn, 0.0, 1.0), uCamKeep);   // (the gas within a few metres of the eye still fades below)
  vec2 f1 = screenDir(uP0, uD1), f2 = uL2 > 0.0 ? screenDir(uP1, uD2) : f1;
  // a fixed count: one that changed with the chord's length would step the field (lines along the axis)
  float n = uSteps, dt = (tf - tn) / n;
  float t = tn + 0.5 * dt;
  float Ra = 0.0, G = 0.0, B = 0.0; vec2 flow = vec2(0.0);
  float boil = mod(uTime, 300.0);
  for (float i = 0.0; i < 24.0; i++) {
    if (i >= n) break;
    vec3 p = ro + rd * t;
    float s, sRaw, r, R; vec3 D, rel;
    plumeAt(p, s, sRaw, r, R, D, rel);
    float x = r / R;
    if (x < 2.0 && sRaw > -0.1) {
      float defl = s > uL1 ? 0.22 : 1.0;
      float rho = exp(-KG * x * x) * (uR0 / R) * exp(-s / (decay * (s > uL1 ? 0.5 : 1.0))) * defl
                * smoothstep(-0.1, 0.35, sRaw) * (1.0 - smoothstep(0.5 * Lend, Lend, s))
                * smoothstep(2.0, 9.0, t);
      // the shear layer boils hardest, the core is smoother
      rho *= 0.5 + 0.5 * smoothstep(0.1, 0.8, x);
      if (rho > 1e-5) {
        float lr = 0.5 * R, la = 5.0 * uR0;
        // the pixel's footprint in eddy sizes
        float foot = t * uPixAng / lr;
        float tau = travel(s) - boil;
        vec3 q = rel / lr + D * (tau * uFlow / la) + vec3(uSeed, 0.0, 0.0);
        // two octaves, falling faster than 1/f: the deflection is the field's gradient, which lifts the
        // fine one; more of them reads as frosted glass instead of wavy shimmer
        float e = gnoise(q + vec3(0.0, boil * 0.35, 0.0)) * 0.72 * (1.0 - smoothstep(0.2, 0.5, foot));
        e += gnoise(q * 2.2 + vec3(17.1, 5.3 - boil * 0.6, boil * 0.5)) * 0.24 * (1.0 - smoothstep(0.2, 0.5, foot * 2.2));
        float w = rho * dt;
        // the march undersamples a long chord: N samples dt apart are independent where real eddies
        // are lr long, so the sum's spread would grow as sqrt(L dt) instead of sqrt(L lr)
        // looking down the axis the eddies stack into one boiling blur rather than adding up: soften
        float axial = 1.0 - 0.45 * smoothstep(0.85, 0.99, abs(dot(rd, D)));
        Ra += w * e * sqrt(min(1.0, lr / dt)) * axial; G += w; B += w * t;
        flow += (s > uL1 ? f2 : f1) * w;
      }
    }
    t += dt;
  }
  float k = amp * camIn;
  G *= k; Ra *= k; B *= k;
  if (G < 1e-6) discard;
  oHaze = vec4(Ra, G, B, 0.0);
  oFlow = vec4(flow * k, 0.0, 0.0);
}
`,Cs=`${Nt}${xa}${io}
uniform float uSteps, uFlameLen, uSpacing, uDiamonds, uContrast, uIntensity, uDiaBoost, uCoreHeat;
uniform vec3 uFlameColor, uHotColor, uCoreColor, uDiamondColor;
out vec4 oColor;
void main() {
  vec3 ro, rd; float tn, tf; vec2 suv;
  if (!boxRay(ro, rd, tn, tf, suv)) discard;
  float ab = min(uAB, 1.3);
  float Lf = max(0.05, uFlameLen * (0.3 + 0.7 * min(ab, 1.0)));
  if (!plumeInterval(ro, rd, 1.5 * uR0 / (uR0 + uSpread1 * Lf), Lf, tn, tf)) discard;
  float n = uSteps, dt = (tf - tn) / n;
  // per-pixel jitter: a common offset would slice the cone into bands seen side-on
  float t = tn + dt * fract(ign(gl_FragCoord.xy) + uFrame * 0.618034);
  vec3 L = vec3(0.0);
  float T = 1.0, tauBg = 0.0;
  float Dm = 2.0 * uR0;
  // the diamonds' edge: the F110's crisp, the F135's softer
  float soft = mix(0.95, 0.4, clamp(uContrast, 0.0, 1.0));
  for (float i = 0.0; i < 48.0; i++) {
    if (i >= n) break;
    vec3 p = ro + rd * t;
    float s, sRaw, r, R; vec3 D, rel;
    plumeAt(p, s, sRaw, r, R, D, rel);
    if (sRaw > -0.02 && s < Lf) {
      // flicker: the flame's surface wrinkles and its tip pumps
      float tb = turbulence(s, rel, D, R, 2.0);
      float flick = gnoise(vec3(travel(s) * uFlow * 0.25 - uTime * 6.0, uSeed, uTime * 3.1));
      float sn = clamp(s / (Lf * (1.0 + 0.1 * flick)), 0.0, 1.0);
      float rr = r * (1.0 + 0.3 * tb * smoothstep(0.0, 0.4, sn));
      float into = smoothstep(-0.02, 0.1, sRaw);
      // the plume's emission envelope down its length (the tip fades out)
      float env = exp(-1.6 * sn) * (1.0 - smoothstep(0.55, 1.0, sn)) * into;
      // the lip: the gas leaving the petals, hottest in a ring just inside it (NASA's F404 survey), deep orange
      float lip = 0.7 * exp(-sq((rr - 0.78 * uR0) / (0.3 * uR0))) * exp(-s / (0.8 * uR0)) * into;
      // the soot shell along the outer edge, the plume widening a little downstream, carrying on orange into the
      // tail; a broad radial peak (a thin shell would limb-brighten into lines side-on) over a dim filled body
      float Ro = uR0 * (0.86 + 0.2 * sn);
      float x = rr / Ro;
      float envS = exp(-0.9 * sn) * (1.0 - smoothstep(0.6, 1.0, sn)) * into;
      float shell = (exp(-sq((x - 0.72) / 0.22)) + 0.1 * exp(-1.6 * x * x)) * envS * smoothstep(0.1 * Dm, 0.9 * Dm, s);
      // the throat: yellow-white just behind the exit, gone by about a diameter
      float throat = exp(-sq(rr / (0.52 * uR0))) * exp(-s / (0.6 * Dm)) * into;
      // the lean core: blue-violet, from about half a diameter out, tapering down the plume
      float Rc = uR0 * mix(0.66, 0.24, sn);
      float core = exp(-sq(rr / Rc)) * env * smoothstep(0.25 * Dm, 1.1 * Dm, s) * (1.0 - smoothstep(0.45, 0.9, sn));
      // shock diamonds: rhombic cells on the axis (a double cone each, seen side-on a diamond), the first
      // centred about one diameter out, each smaller and dimmer than the last
      float cell = s / (uSpacing * Dm) + 0.6;
      float k = floor(cell), f = fract(cell);
      float w = 1.0 - abs(2.0 * f - 1.0);
      float Rd = 0.4 * uR0 * (1.0 - 0.07 * max(k - 1.0, 0.0)) * w + 1e-3;
      float q = rr / Rd;
      float dia = (1.0 - smoothstep(1.0 - soft, 1.0, q)) * (1.0 - 0.6 * min(q * q, 1.0)) * sqrt(w)
                * step(1.0, k) * (1.0 - step(uDiamonds + 1.0, k)) * exp(-(k - 1.0) * 0.3) * (1.0 - smoothstep(0.6, 1.0, sn)) * into;
      // looking down the axis the throat, the core and the diamonds stack into one white disc over the nozzle
      // (its glowing interior and flameholder are what a rear view shows): they give way to it
      float axial = 1.0 - 0.6 * smoothstep(0.7, 0.97, abs(dot(rd, D)));
      vec3 e = uFlameColor * (1.6 * lip + 1.7 * shell)
             + (uHotColor * throat * (4.0 + 3.0 * uCoreHeat)
             + uCoreColor * core * 3.0
             + uDiamondColor * dia * 7.5 * mix(0.6, 1.0, uContrast) * uDiaBoost) * axial;
      // (the march's cylinder ends at 1.5 R0: the wrinkled edge fades out before it, never cut by it)
      float edge = 1.0 - smoothstep(1.05 * uR0, 1.42 * uR0, r);
      e *= edge;
      L += T * e * (0.85 + 0.3 * flick) * dt;
      // the soot that glows also absorbs: looking down the axis the flame doesn't pile up to white; and it
      // dims what is behind it a little (alpha: optical depth, additive), so by day the orange reads against
      // a bright sky instead of washing out to pink
      float od = (lip + shell) * edge * dt / uR0;
      T *= exp(-0.9 * od);
      tauBg += od;
    }
    t += dt;
  }
  // (absolute: about a quarter of WHITE per exit radius of path through the soot by day; STUDY.md)
  L *= 0.25 * uIntensity * ab / uR0;
  oColor = vec4(L, 1.6 * tauBg * min(ab, 1.0));
}
`,Ls=`${Nt}${xa}
uniform vec3 uO, uF, uV, uU;
uniform float uSteps, uAmount, uWind, uShuttle, uLaunchT, uAccel, uBlast, uNozzleU, uJbdU, uJbdUp, uLength;
uniform vec3 uSunDir, uSunIrr, uSkyIrr;
uniform float uBright;
out vec4 oColor;
float fbm(vec3 q) { return gnoise(q) * 0.6 + gnoise(q * 2.07 + 13.1) * 0.3 + gnoise(q * 4.13 + 29.7) * 0.15; }
float density(vec3 p) {
  vec3 d = p - uO;
  float u = dot(d, uF), v = dot(d, uV), h = dot(d, uU);
  if (h < -0.05) return 0.0;
  float rho = 0.0;
  // ---- standing leak: the slot vents in puffs along its length; thin wisps hug the deck and drift
  // aft on the wind over the deck, thickening round the jet's gear; in the blast behind the nozzles
  // they are torn into streaks, thrown aft and up the face of the deflector
  {
    float aft = max(0.0, -u);
    float blast = uBlast * (1.0 - smoothstep(uNozzleU - 1.5, uNozzleU + 1.5, u));
    float toJbd = clamp((uNozzleU - u) / max(uNozzleU - uJbdU, 0.5), 0.0, 1.0);
    // a raised deflector throws it up its face; lowered, it streams back along the deck past where it would stand
    float lift = blast * toJbd * toJbd * 2.4 * uJbdUp;
    float H = 0.45 + 0.06 * aft + 0.5 * blast;
    float W = 0.55 + 0.06 * aft + 1.4 * blast;
    float jEnd = uJbdU - (1.0 - uJbdUp) * 7.0;
    float along = (1.0 - smoothstep(uLength - 10.0, uLength, u)) * smoothstep(jEnd - 0.5, jEnd + 1.5 + (1.0 - uJbdUp) * 6.0, u);
    float hh = max(h - lift, 0.0);
    // with the deflector down the blast carries the wisps off aft along the deck, thinning as they mix
    float thin = mix(exp(-max(uNozzleU - u, 0.0) / 6.0), 1.0, uJbdUp);
    // the envelope: all but the noise (wisp and leak are <= 1). Where it can't reach 1e-4 the noise isn't
    // worth its seven lookups (the march skips densities under 0.002; the light sample moves < 0.02 %)
    float env = 1.8 * exp(-sq(v / W)) * exp(-hh / H) * along * (1.0 - 0.5 * blast) * thin;
    if (env * uAmount > 1e-4) {
      float wind = uWind * (1.0 + 5.0 * blast);
      vec3 q = vec3((u + uTime * wind) * mix(0.7, 0.16, blast), v * mix(1.6, 0.8, blast), (h - lift) * 1.5 - uTime * 0.45);
      // a little domain warp: curling wisps instead of blobs
      q += 0.6 * vec3(gnoise(q * 0.7 + 3.1), gnoise(q * 0.7 + 7.7), gnoise(q * 0.7 + 1.3));
      float n = fbm(q);
      // the slot leaks in places, and the places drift
      float leak = 0.35 + 0.65 * smoothstep(-0.15, 0.3, gnoise(vec3(u * 0.22 + uTime * wind * 0.05, 3.3, uTime * 0.08)));
      leak = max(leak, blast * 0.8);
      float wisp = smoothstep(-0.08, 0.3, n + 0.12 - hh / (H * 3.0));
      rho += wisp * leak * env;
    }
  }
  // ---- the launch: the slot vents behind the shuttle as it runs; the puffs grow, rise and drift aft
  if (uLaunchT > 0.0) {
    float tp = sqrt(max(u, 0.0) * 2.0 / uAccel);           // when the shuttle passed u
    float age = uLaunchT - tp;
    if (u >= -2.0 && u <= uShuttle + 1.0 && age > -0.05) {
      age = max(age, 0.0);
      float H = 0.25 + 0.8 * age, W = 0.3 + 0.7 * age;
      // (the envelope first, as above: puff <= 1)
      float env = exp(-sq(v / W)) * exp(-h / H) * exp(-age / 2.4) * smoothstep(0.0, 0.1, age + 0.05) * 1.4;
      if (env * uAmount > 1e-4) {
        vec3 q = vec3((u + uTime * uWind) * 0.5, v * 1.4 / (1.0 + age * 0.6), h * 1.3 / (1.0 + age * 0.5) - uTime * 0.4);
        q += 0.6 * vec3(gnoise(q * 0.7 + 3.1), gnoise(q * 0.7 + 7.7), gnoise(q * 0.7 + 1.3));
        float n = fbm(q);
        float puff = smoothstep(-0.05, 0.3, n + 0.18 - h / (H * 2.4));
        rho += puff * env;
      }
    }
  }
  return rho * uAmount;
}
uniform sampler2D tOccluder;   // 1 where an opaque occluder drawn later (the cockpit) covers this texel's whole block
uniform float uHasOccluder;
/** Hidden: this texel and every texel the composite's tent can reach from a visible pixel (±2) are under the occluder. */
bool occluded() {
  if (uHasOccluder < 0.5) return false;
  ivec2 p = ivec2(gl_FragCoord.xy), hi = textureSize(tOccluder, 0) - 1;
  if (texelFetch(tOccluder, p, 0).r < 0.5) return false;
  for (int y = -2; y <= 2; y++) for (int x = -2; x <= 2; x++) if (texelFetch(tOccluder, clamp(p + ivec2(x, y), ivec2(0), hi), 0).r < 0.5) return false;
  return true;
}
void main() {
  vec3 ro, rd; float tn, tf; vec2 suv;
  if (!boxRay(ro, rd, tn, tf, suv)) discard;
  // perf: behind the cockpit the wisps are never seen (it is drawn over them, opaque); the march skipped
  if (occluded()) { oColor = vec4(0.0); return; }
  float n = uSteps, dt = (tf - tn) / n;
  float t = tn + dt * ign(gl_FragCoord.xy + uFrame * 5.588238);
  float T = 1.0;
  vec3 L = vec3(0.0);
  float mu = dot(rd, uSunDir), g = 0.55;
  float hg = (1.0 - g * g) / (4.0 * 3.14159 * pow(1.0 + g * g - 2.0 * g * mu, 1.5));
  float phase = mix(1.0 / (4.0 * 3.14159), hg, 0.6);
  const float SIGMA = 2.2;
  for (float i = 0.0; i < 40.0; i++) {
    if (i >= n || T < 0.02) break;
    vec3 p = ro + rd * t;
    float rho = density(p);
    if (rho > 0.002) {
      float ts = exp(-SIGMA * density(p + uSunDir * 0.6) * 0.9);
      vec3 S = (uSunIrr * phase * ts + uSkyIrr * 0.09) * uBright;
      float a = 1.0 - exp(-SIGMA * rho * dt);
      L += T * a * S;
      T *= 1.0 - a;
    }
    t += dt;
  }
  oColor = vec4(L, 1.0 - T);
}
`,Fs=`${Nt}
in vec2 vUv;
uniform sampler2D tSrc, tHaze, tFlow, tSteam, tFlame;
uniform vec2 uHazeTexel;
/** tan of the half fields (x: horizontal, y: vertical). */
uniform vec2 uTan;
uniform float uGain, uMaxOffset, uDarken, uShadow, uSmear;
uniform float uHasSteam, uHasFlame, uHasHaze, uDebug;
uniform vec3 uEmissionTint;
out vec4 oColor;
uniform vec2 uSteamTexel;
vec4 steamAt(vec2 uv) {
  // the steam is marched with per-pixel jitter at a reduced size: a small tent filter hides the grain
  vec2 e = uSteamTexel * 0.75;
  return 0.25 * texture(tSteam, uv) + 0.1875 * (texture(tSteam, uv + vec2(e.x, e.y)) + texture(tSteam, uv + vec2(-e.x, e.y)) + texture(tSteam, uv + vec2(e.x, -e.y)) + texture(tSteam, uv - e));
}
vec4 sceneAt(vec2 uv) {
  vec4 c = texture(tSrc, uv);
  if (uHasSteam > 0.5) { vec4 s = steamAt(uv); c.rgb = c.rgb * (1.0 - s.a) + s.rgb; }
  return c;
}
float rayT(vec2 uv) {
  vec3 r = vec3((uv * 2.0 - 1.0) * uTan, -1.0);
  return viewZ(uv) * length(r);
}
void main() {
  vec2 uv = vUv;
  vec4 base = sceneAt(uv);
  vec3 col = base.rgb;
  if (uHasHaze > 0.5) {
    vec4 h = texture(tHaze, uv);
    if (h.g > 1e-5) {
      float dbar = h.b / h.g;
      float tS = rayT(uv);
      // depth guard: only gas in front of this pixel's surface bends it (half-res fringes at silhouettes)
      float w = smoothstep(0.8, 0.97, tS / max(dbar, 1e-3));
      vec2 dx = vec2(uHazeTexel.x, 0.0), dy = vec2(0.0, uHazeTexel.y);
      float rx1 = texture(tHaze, uv + dx).r, rx0 = texture(tHaze, uv - dx).r;
      float ry1 = texture(tHaze, uv + dy).r, ry0 = texture(tHaze, uv - dy).r;
      // dR/duv -> transverse gradient in the world at the gas (1 uv = 2 tan d metres) -> deflection angle -> uv
      vec2 grad = vec2(rx1 - rx0, ry1 - ry0) / (2.0 * uHazeTexel);
      vec2 world = 2.0 * uTan * dbar;
      // the lever arm: the deflection moves the background by angle x its distance behind the gas, which
      // for a far background is the angle itself; a surface just behind the gas (the jet) hardly moves
      float lever = clamp((tS - dbar) / max(tS, 1e-3) * 1.6, 0.0, 1.0);
      vec2 off = uGain * grad / world / (2.0 * uTan) * w * lever;
      float m = length(off);
      if (m > uMaxOffset) off *= uMaxOffset / m;
      // flow direction on screen: the shimmer smears what is behind it along the flow
      vec2 fl = texture(tFlow, uv).xy;
      fl = length(fl) > 1e-6 ? normalize(fl) : vec2(0.0);
      float dens = 1.0 - exp(-h.g * 1.2);
      // shadowgraph: the index field's curvature focuses and spreads the light into bright and dark
      // streaks. Across the flow only, and averaged a little along it, so they stream back from the
      // nozzle the way they photograph (an isotropic Laplacian speckles into dashes)
      vec2 pr = vec2(-fl.y, fl.x) * uHazeTexel * 2.5, al = fl * uHazeTexel * 3.0;
      if (dot(fl, fl) < 0.5) { pr = dx * 2.5; al = vec2(0.0); }
      float lap = 0.0;
      for (int k = -1; k <= 1; k++) {
        vec2 c = uv + al * float(k);
        lap += texture(tHaze, c + pr).r + texture(tHaze, c - pr).r - 2.0 * texture(tHaze, c).r;
      }
      lap /= 3.0 * dot(pr, pr);
      // (its contrast grows with the distance from the gas to what it lights, like the displacement)
      float sg = -uShadow * lap / (world.y * world.y) * w * lever;
      sg = sg < 0.0 ? max(sg * 1.4, -0.5) : min(sg * 0.35, 0.15);
      vec2 sm = fl * uSmear * dens * w * lever;
      vec3 acc = vec3(0.0);
      for (int k = 0; k < 5; k++) {
        float fk = float(k) * 0.5 - 1.0;
        vec2 o = off * (1.0 - 0.15 * abs(fk)) + sm * fk;
        vec2 u2 = clamp(uv + o, vec2(0.0005), vec2(0.9995));
        // never pull a nearer surface (the jet itself) into the haze, nor the far sky onto a near surface
        // (the glowing nozzle stays one coherent, wobbling glow instead of a wash of sky)
        float t2 = rayT(u2);
        float ok = smoothstep(0.7 * dbar, 0.9 * dbar, t2) * (tS > 3000.0 ? 1.0 : (1.0 - smoothstep(1.25, 1.8, t2 / tS)));
        acc += mix(base.rgb, sceneAt(u2).rgb, ok);
      }
      col = acc / 5.0;
      // the dark phase of the shadowgraph reads stronger than the bright (the streaks behind a burner are dark)
      col *= max(0.0, 1.0 + sg) * (1.0 - uDarken * dens * w);
      if (uDebug > 0.5) col = vec3(max(off.x, 0.0), max(off.y, 0.0), max(-off.x, 0.0)) * 50.0 + vec3(dens * 0.2);
    }
  }
  if (uHasFlame > 0.5) { vec4 f = texture(tFlame, uv); col = col * exp(-min(f.a, 2.0)) + f.rgb * uEmissionTint; }
  oColor = vec4(col, base.a);
}
`,ja=`
in vec3 position;
out vec2 vUv;
void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,Ds=`
precision highp float;
uniform sampler2D tSrc;
uniform vec2 uScale;   // full-size px per steam texel
out vec4 oColor;
void main() {
  ivec2 hi = textureSize(tSrc, 0) - 1;
  vec2 c = gl_FragCoord.xy * uScale;
  ivec2 a = ivec2(floor(c - uScale * 0.5)) - 1, b = ivec2(ceil(c + uScale * 0.5)) + 1;
  float m = 1.0;
  for (int y = a.y; y <= b.y; y++) for (int x = a.x; x <= b.x; x++) m = min(m, texelFetch(tSrc, clamp(ivec2(x, y), ivec2(0), hi), 0).r);
  oColor = vec4(m);
}
`;class Ps{constructor(e,t=0){this.engine=e,this.seed=t}engine;exit=new T;dir=new T(0,0,1);throttle=1;ab=0;nozzle=0;deflector=null;haze=1;hazeAmp=1;hazeIdle=0;hazeCamKeep=0;visible=!0;seed;get radius(){return this.engine.exitMil+(this.engine.exitAB-this.engine.exitMil)*this.nozzle}}class ci{origin=new T;forward=new T(0,0,-1);up=new T(0,1,0);amount=1;wind=9;blast=0;nozzleU=-11;jbdU=-15;deflector=1;length=30;launchT=-1;accel=30;shuttleU=0;width=6;height=4.5;stroke=94;visible=!0}const _s={hazeGain:.016,maxOffset:.012,shadow:.08,darken:.06,smear:.007,flow:34,flameIntensity:1,flameBoost:1,diamondBoost:1,coreHeat:0,hazeSteps:12,flameSteps:20,steamSteps:32,hazeScale:.5,flameScale:1,steamScale:.5,steamBright:3.2,haze:!0,flame:!0,steam:!0,debug:!1},le=()=>new d(new T),na=(s,e,t,a=Oo)=>{const o=new ua({glslVersion:da,vertexShader:Es,fragmentShader:s,uniforms:e,depthTest:!1,depthWrite:!1,side:a,transparent:t!=="none"});return t!=="none"&&(o.blending=Ya,o.blendSrc=ut,o.blendDst=t==="add"?ut:Ht,o.blendSrcAlpha=ut,o.blendDstAlpha=t==="add"?ut:Ht),o},ra=()=>({tDepth:new d(null),uDepth:le(),uCam:le(),uCamFwd:le(),uInvModel:new d(new Me),uRes:new d(new $e(1,1)),uTime:new d(0),uFrame:new d(0),uSteps:new d(16)}),Wa=()=>({uP0:le(),uD1:le(),uP1:le(),uD2:le(),uL1:new d(1),uL2:new d(0),uR0:new d(.5),uR1:new d(.5),uSpread1:new d(.085),uSpread2:new d(.22),uAB:new d(0),uThr:new d(1),uSeed:new d(0),uFlow:new d(34)}),la=.085,$a=.18,no=new T,Bs=new T,Le=new T,ca=new T,ft=new Me,Vt=new Me,Is=new No,Qa=new Me,It=new eo;function qs(s,e){return It.min.set(-.5,-.5,-.5),It.max.set(.5,.5,.5),It.applyMatrix4(s),Qa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),Is.setFromProjectionMatrix(Qa,e.coordinateSystem).intersectsBox(It)}function Za(s,e,t,a){Le.copy(t).addScaledVector(e,-t.dot(e)),Le.lengthSq()<1e-6&&(Le.set(0,1,0).addScaledVector(e,-e.y),Le.lengthSq()<1e-6&&Le.set(1,0,0)),Le.normalize(),ca.crossVectors(e,Le);const o=[1/0,1/0,1/0],i=[-1/0,-1/0,-1/0];for(const[r,n]of a){const u=[r.dot(e),r.dot(Le),r.dot(ca)];for(let c=0;c<3;c++)o[c]=Math.min(o[c],u[c]-n),i[c]=Math.max(i[c],u[c]+n)}ft.makeBasis(e,Le,ca);const l=no.set((o[0]+i[0])/2,(o[1]+i[1])/2,(o[2]+i[2])/2).applyMatrix4(ft);Vt.makeScale(i[0]-o[0],i[1]-o[1],i[2]-o[2]),s.matrix.copy(ft).multiply(Vt).setPosition(l),s.matrixWorld.copy(s.matrix),s.material.uniforms.uInvModel.value.copy(s.matrix).invert()}class Us extends ao{constructor(e,t={}){super("ExhaustPass"),this.sceneCamera=e,this.params={..._s,...t},this.needsDepthTexture=!0,this.needsSwap=!0,this.composite=new ua({glslVersion:da,vertexShader:ja,fragmentShader:Fs,depthTest:!1,depthWrite:!1,uniforms:{tSrc:new d(null),tHaze:new d(null),tFlow:new d(null),tSteam:new d(null),tFlame:new d(null),tDepth:new d(null),uDepth:le(),uHazeTexel:new d(new $e),uTan:new d(new $e(1,1)),uGain:new d(1),uMaxOffset:new d(.03),uDarken:new d(.1),uShadow:new d(.004),uSmear:new d(.004),uHasSteam:new d(0),uSteamTexel:new d(new $e),uHasFlame:new d(0),uEmissionTint:new d(new T(1,1,1)),uHasHaze:new d(0),uDebug:new d(0)}});const a=new pa;a.setAttribute("position",new He(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3));const o=new Fe(a,this.composite);o.frustumCulled=!1,this.quadScene.add(o)}sceneCamera;params;plumes=[];steams=[];timer=null;always=!1;cullSteam=!0;occluder=null;occRT=new Tt(1,1,{depthBuffer:!1});occHalf=new Tt(1,1,{depthBuffer:!1,minFilter:Pa,magFilter:Pa});occMat=new Ho({color:16777215,side:_a,depthTest:!1,depthWrite:!1});occMin=new ua({glslVersion:da,vertexShader:ja,fragmentShader:Ds,depthTest:!1,depthWrite:!1,uniforms:{tSrc:new d(null),uScale:new d(new $e(2,2))}});time=0;frameNo=0;depthTexture=null;logDepth=!1;hazeRT=new Tt(1,1,{count:2,type:aa,depthBuffer:!1});steamRT=new Tt(1,1,{type:aa,depthBuffer:!1});flameRT=new Tt(1,1,{type:aa,depthBuffer:!1});hazeScene=new ht;flameScene=new ht;steamScene=new ht;draws=[];steamDraws=[];box=new zt(1,1,1);hazeBase=na(ks,{...ra(),...Wa(),uHazeLen:new d(30),uPixAng:new d(.001),uCamKeep:new d(0),uViewProj:new d(new Me)},"add");flameBase=na(Cs,{...ra(),...Wa(),uFlameLen:new d(5),uSpacing:new d(1),uDiamonds:new d(5),uContrast:new d(.8),uIntensity:new d(1),uDiaBoost:new d(1),uCoreHeat:new d(0),uFlameColor:le(),uHotColor:le(),uCoreColor:le(),uDiamondColor:le()},"add");steamBase=na(Ls,{...ra(),tOccluder:new d(null),uHasOccluder:new d(0),uO:le(),uF:le(),uV:le(),uU:le(),uAmount:new d(1),uWind:new d(9),uShuttle:new d(0),uLaunchT:new d(-1),uAccel:new d(30),uBlast:new d(0),uNozzleU:new d(-11),uJbdU:new d(-15),uJbdUp:new d(1),uLength:new d(30),uSunDir:new d(new T(0,1,0)),uSunIrr:new d(new T(1,1,1)),uSkyIrr:new d(new T(.3,.35,.4)),uBright:new d(3)},"over");composite;quadScene=new ht;quadCam=new Vo(-1,1,1,-1,0,1);sunDir=new T(0,1,0);sunIrr=new T(1,1,1);skyIrr=new T(.3,.35,.4);emissionTint=new T(1,1,1);set mainCamera(e){this.sceneCamera=e}addPlume(e){this.plumes.push(e);const t=new Fe(this.box,this.hazeBase.clone()),a=new Fe(this.box,this.flameBase.clone());for(const o of[t,a])o.matrixAutoUpdate=!1,o.frustumCulled=!1;return this.hazeScene.add(t),this.flameScene.add(a),this.draws.push({plume:e,haze:t,flame:a}),e}removePlume(e){const t=this.draws.findIndex(o=>o.plume===e);if(t<0)return;const a=this.draws[t];this.hazeScene.remove(a.haze),this.flameScene.remove(a.flame),a.haze.material.dispose(),a.flame.material.dispose(),this.draws.splice(t,1),this.plumes.splice(this.plumes.indexOf(e),1)}addSteam(e){this.steams.push(e);const t=new Fe(this.box,this.steamBase.clone());return t.matrixAutoUpdate=!1,t.frustumCulled=!1,this.steamScene.add(t),this.steamDraws.push({steam:e,mesh:t}),e}setDepthTexture(e){this.depthTexture=e}initialize(e){this.logDepth=e.capabilities.logarithmicDepthBuffer}setSize(e,t){const a=this.params;this.hazeRT.setSize(Math.max(1,Math.round(e*a.hazeScale)),Math.max(1,Math.round(t*a.hazeScale))),this.steamRT.setSize(Math.max(1,Math.round(e*a.steamScale)),Math.max(1,Math.round(t*a.steamScale))),this.flameRT.setSize(Math.max(1,Math.round(e*a.flameScale)),Math.max(1,Math.round(t*a.flameScale))),this.occRT.setSize(e,t),this.occHalf.setSize(this.steamRT.width,this.steamRT.height),this.size.set(e,t)}size=new $e(1,1);common(e,t,a,o){e.tDepth.value=this.depthTexture;const i=this.sceneCamera;e.uDepth.value.set(this.logDepth?Math.log2(i.far+1):-1,i.near,i.far),e.uCam.value.setFromMatrixPosition(t.matrixWorld),e.uCamFwd.value.set(0,0,-1).transformDirection(t.matrixWorld),e.uRes.value.set(a.width,a.height),e.uTime.value=this.time,e.uFrame.value=this.frameNo%64,e.uSteps.value=o}layout(e){const t=e.plume,a=t.engine,o=t.radius,i=a.hazeLength*(.55+.45*t.ab);let l=i,r=0;const n=t.dir.clone().normalize(),u=n.clone(),c=t.exit.clone();if(t.deflector){const I=t.deflector.normal,P=n.dot(I);if(P<-.05){const V=Bs.copy(t.deflector.point).sub(c).dot(I)/P;V>.3&&V<i&&(l=V,u.copy(n).addScaledVector(I,-P).normalize().addScaledVector(I,.3).normalize(),r=Math.min(3,Math.max(2,(i-l)*.3)))}}const m=c.clone().addScaledVector(n,l),b=m.clone().addScaledVector(u,r),v=o+la*l,x=v+$a*r;for(const I of[e.haze,e.flame]){const P=I.material.uniforms;P.uP0.value.copy(c),P.uD1.value.copy(n),P.uP1.value.copy(m),P.uD2.value.copy(u),P.uL1.value=l,P.uL2.value=r,P.uR0.value=o,P.uR1.value=v,P.uSpread1.value=la,P.uSpread2.value=$a,P.uAB.value=t.ab,P.uThr.value=t.throttle,P.uSeed.value=t.seed,P.uFlow.value=this.params.flow}const f=2.3;Za(e.haze,n,r>0?u:new T(0,1,0),[[c.clone().addScaledVector(n,-.1),o*f],[m,v*f],[b,x*f]]),e.haze.material.uniforms.uHazeLen.value=a.hazeLength*t.haze;const _=Math.min(l,a.flameLength*(.3+.7*Math.min(1,t.ab)));Za(e.flame,n,new T(0,1,0),[[c.clone().addScaledVector(n,-.05),o*1.6],[c.clone().addScaledVector(n,_),(o+la*_)*1.6]]);const y=e.flame.material.uniforms;y.uFlameLen.value=a.flameLength,y.uSpacing.value=a.diamondSpacing,y.uDiamonds.value=a.diamonds,y.uContrast.value=a.diamondContrast,y.uIntensity.value=this.params.flameIntensity*this.params.flameBoost,y.uDiaBoost.value=this.params.diamondBoost,y.uCoreHeat.value=this.params.coreHeat,y.uFlameColor.value.fromArray(a.flameColor),y.uHotColor.value.fromArray(a.hotColor),y.uCoreColor.value.fromArray(a.coreColor),y.uDiamondColor.value.fromArray(a.diamondColor),e.haze.material.uniforms.uThr.value=Math.max(t.throttle,t.hazeIdle)*a.hazeGain*t.haze*t.hazeAmp,e.haze.material.uniforms.uCamKeep.value=t.hazeCamKeep}layoutSteam(e){const t=e.steam,a=e.mesh.material.uniforms,o=t.forward.clone().normalize(),i=t.up.clone().normalize(),l=new T().crossVectors(o,i).normalize();a.uO.value.copy(t.origin),a.uF.value.copy(o),a.uV.value.copy(l),a.uU.value.copy(i),a.uAmount.value=t.amount,a.uWind.value=t.wind,a.uShuttle.value=t.shuttleU,a.uLaunchT.value=t.launchT,a.uAccel.value=t.accel,a.uBlast.value=t.blast,a.uNozzleU.value=t.nozzleU,a.uJbdU.value=t.jbdU,a.uJbdUp.value=t.deflector,a.uLength.value=t.length,a.uSunDir.value.copy(this.sunDir),a.uSunIrr.value.copy(this.sunIrr),a.uSkyIrr.value.copy(this.skyIrr),a.uBright.value=this.params.steamBright;const r=t.jbdU-1-(1-t.deflector)*8,n=Math.max(t.length,t.launchT>0?Math.min(t.stroke,t.shuttleU)+2:0),u=t.height+(t.launchT>0?2:0),c=[r,-t.width,-.3],m=[n,t.width,u];ft.makeBasis(o,i,l);const b=no.set((c[0]+m[0])/2,(c[2]+m[2])/2,(c[1]+m[1])/2).applyMatrix4(ft).add(t.origin);Vt.makeScale(m[0]-c[0],m[2]-c[2],m[1]-c[1]),e.mesh.matrix.copy(ft).multiply(Vt).setPosition(b),e.mesh.matrixWorld.copy(e.mesh.matrix),a.uInvModel.value.copy(e.mesh.matrix).invert()}render(e,t,a){const o=this.params,i=this.draws.filter(y=>y.plume.visible&&y.plume.throttle>.001);this.sceneCamera.updateMatrixWorld();const l=this.steamDraws.filter(y=>y.steam.visible&&y.steam.amount>.001),r=this.cullSteam?l.filter(y=>(this.layoutSteam(y),qs(y.mesh.matrix,this.sceneCamera))):l,n=o.haze&&i.length>0,u=o.flame&&i.some(y=>y.plume.ab>.001),c=o.steam&&r.length>0;if(!n&&!u&&!c&&!this.always){this.needsSwap=!1,o.steam&&l.length&&this.frameNo++;return}this.needsSwap=!0,this.frameNo++;const m=this.sceneCamera;m.updateMatrixWorld();const b=e.autoClear;e.autoClear=!1,e.setClearColor(0,0);const v=new Me().multiplyMatrices(m.projectionMatrix,m.matrixWorldInverse);for(const y of this.draws)y.haze.visible=y.flame.visible=i.includes(y),y.haze.visible&&this.layout(y);for(const y of this.draws)y.flame.visible=y.flame.visible&&y.plume.ab>.001;if(n){this.timer?.mark("exhaust_haze");for(const y of i){const I=y.haze.material.uniforms;this.common(I,m,this.hazeRT,o.hazeSteps),I.uViewProj.value.copy(v),I.uPixAng.value=2/m.projectionMatrix.elements[5]/this.hazeRT.height}e.setRenderTarget(this.hazeRT),e.clear(!0,!1,!1),e.render(this.hazeScene,m)}const x=c&&this.occluder?this.renderOccluder(e):null;if(c){this.timer?.mark("exhaust_steam");for(const y of this.steamDraws){const I=y.mesh.material.uniforms;I.tOccluder.value=x,I.uHasOccluder.value=x?1:0}for(const y of this.steamDraws)y.mesh.visible=r.includes(y),y.mesh.visible&&(this.layoutSteam(y),this.common(y.mesh.material.uniforms,m,this.steamRT,o.steamSteps));e.setRenderTarget(this.steamRT),e.clear(!0,!1,!1),e.render(this.steamScene,m)}if(u){this.timer?.mark("exhaust_flame");for(const y of i)this.common(y.flame.material.uniforms,m,this.flameRT,o.flameSteps);e.setRenderTarget(this.flameRT),e.clear(!0,!1,!1),e.render(this.flameScene,m)}this.timer?.mark("exhaust_composite");const f=this.composite.uniforms;f.tSrc.value=t.texture,f.tHaze.value=this.hazeRT.textures[0],f.tFlow.value=this.hazeRT.textures[1],f.tSteam.value=this.steamRT.texture,f.tFlame.value=this.flameRT.texture,f.tDepth.value=this.depthTexture,f.uDepth.value.set(this.logDepth?Math.log2(m.far+1):-1,m.near,m.far),f.uHazeTexel.value.set(1/this.hazeRT.width,1/this.hazeRT.height),f.uSteamTexel.value.set(1/this.steamRT.width,1/this.steamRT.height);const _=m.projectionMatrix.elements;f.uTan.value.set(1/_[0],1/_[5]),f.uGain.value=o.hazeGain,f.uMaxOffset.value=o.maxOffset,f.uDarken.value=o.darken,f.uShadow.value=o.shadow,f.uSmear.value=o.smear,f.uEmissionTint.value.copy(this.emissionTint),f.uHasSteam.value=c?1:0,f.uHasFlame.value=u?1:0,f.uHasHaze.value=n?1:0,f.uDebug.value=o.debug?1:0,e.setRenderTarget(this.renderToScreen?null:a),e.render(this.quadScene,this.quadCam),e.autoClear=b}renderOccluder(e){const t=this.occluder,a=[],o=v=>!v.transparent&&v.opacity>=1&&!(v.alphaTest>0)&&v.colorWrite&&v.side===_a&&!v.alphaHash;t.scene.traverseVisible(v=>{const x=v.material;x&&(Array.isArray(x)?!x.every(o):!o(x))&&(v.visible=!1,a.push(v))});const i=t.scene,l=i.overrideMaterial,r=i.background,n=e.getRenderTarget(),u=e.autoClear;try{i.overrideMaterial=this.occMat,i.background=null,e.setRenderTarget(this.occRT),e.setClearColor(0,0),e.clear(!0,!1,!1),e.autoClear=!1,e.render(i,t.camera)}finally{i.overrideMaterial=l,i.background=r,e.autoClear=u;for(const v of a)v.visible=!0}const c=this.occMin.uniforms;c.tSrc.value=this.occRT.texture,c.uScale.value.set(this.occRT.width/this.occHalf.width,this.occRT.height/this.occHalf.height);const m=this.quadScene.children[0],b=m.material;return m.material=this.occMin,e.setRenderTarget(this.occHalf),e.render(this.quadScene,this.quadCam),m.material=b,e.setRenderTarget(n),this.occHalf.texture}stats(){return{plumes:this.draws.filter(e=>e.plume.visible).length,steam:this.steamDraws.filter(e=>e.steam.visible).length,haze:`${this.hazeRT.width}x${this.hazeRT.height}`}}dispose(){this.hazeRT.dispose(),this.steamRT.dispose(),this.flameRT.dispose(),this.box.dispose(),this.occRT.dispose(),this.occHalf.dispose(),this.occMat.dispose(),this.occMin.dispose();for(const e of this.draws)e.haze.material.dispose(),e.flame.material.dispose();for(const e of this.steamDraws)e.mesh.material.dispose();this.composite.dispose(),super.dispose()}}const hi=[{engine:mt.f135,exit:[0,Ea.y,Ea.zExit-.06],dir:[0,0,1],depth:.62}],ui=[-1,1].map(s=>({engine:mt.f414,exit:[s*Kt.x,Kt.y,Kt.zExit-.04],dir:[0,0,1],depth:.55})),di=[-1,1].map(s=>({engine:mt.f110,exit:[s*Yt.x,Yt.y,Yt.zExit-.05],dir:[0,0,1],depth:.85})),fi=[{engine:mt.f110,exit:[0,Ra.y,Ra.zExit-.05],dir:[0,0,1],depth:.85}],mi=[-1,1].map(s=>({engine:mt.rd33,exit:[s*Xt.x,Xt.y,Xt.zExit-.05],dir:[0,0,1],depth:.6})),pi={engine:mt.al41f1,exit:[0,0,.96],dir:[0,0,1],depth:.6};function vi(s,e,t={},a){const o=new Us(e,t),i=s.atmosphere.composer,l=a?i.passes.indexOf(a):-1;return l>=0?i.addPass(o,l):s.atmosphere.insertBeforeOutput(o),o.timer=s.atmosphere.timer,{pass:o,params:o.params,setLighting(r,n,u){o.sunDir.copy(r).normalize(),o.sunIrr.copy(n),o.skyIrr.copy(u)}}}let Hs=0;function xi(s,e,t,a=1){const o=37.1*Hs++,i=t.map((n,u)=>s.pass.addPlume(new Ps(n.engine,o+13.7*u))),l=t.map((n,u)=>{const c=Rs(n,o+u*7.3);return c.intensity=a,e.add(c.object),c}),r=new Go;return{plumes:i,glows:l,update(n){e.updateMatrixWorld(!0),r.setFromMatrix4(e.matrixWorld),t.forEach((u,c)=>{const m=i[c];m.exit.fromArray(u.exit).applyMatrix4(e.matrixWorld),m.dir.fromArray(u.dir).applyMatrix3(r).normalize(),m.throttle=n.throttle,m.ab=n.ab,m.nozzle=n.nozzle??n.ab,m.deflector=n.deflector??null,n.haze!==void 0&&(m.haze=n.haze),n.hazeAmp!==void 0&&(m.hazeAmp=n.hazeAmp),n.hazeIdle!==void 0&&(m.hazeIdle=n.hazeIdle),n.hazeCamKeep!==void 0&&(m.hazeCamKeep=n.hazeCamKeep),l[c].intensity=n.glow??a,l[c].set({throttle:n.throttle,ab:n.ab,nozzle:n.nozzle??n.ab,time:n.time,tint:n.tint})})},setVisible(n){for(const u of i)u.visible=n;for(const u of l)u.object.visible=n}}}const Vs={x:21.6,z:-98,nose:new T(-.55,0,.835).normalize()},Os=s=>Math.atan2(-s.x,-s.z);function Ns(s){s.root.updateMatrixWorld(!0);const e=new Me().copy(s.root.matrixWorld).invert(),t=[];for(const a of["noseGear","mainGear_L","mainGear_R"]){const o=s.nodes(a)[0];if(!o)continue;const l=new eo().setFromObject(o).applyMatrix4(e).getCenter(new T);t.push(new T(l.x,0,l.z))}return t}const ro=new to({color:"#d9b21c",roughness:.7}),lo=new to({color:"#2b2b2a",roughness:.6,metalness:.5});ro.name="carrier:chock";lo.name="carrier:chain";function Gs(s){const e=[],t=[],a=(i,l,r)=>r.push(i.applyMatrix4(l));for(const i of s){for(const l of[-1,1])a(new zt(.42,.2,.26),new Me().makeTranslation(i.x,.1,i.z+l*.48),e);a(new zt(.06,.06,.96),new Me().makeTranslation(i.x+.24,.12,i.z),e);for(const l of[-1,1]){const r=new T(i.x,.6,i.z),n=new T(i.x+l*1.1,.01,i.z+.9*l*(i.z<-2?-1:1)),u=n.clone().sub(r),c=u.length(),m=new Xa().setFromUnitVectors(new T(0,0,1),u.normalize());a(new zt(.045,.045,c),new Me().compose(r.clone().add(n).multiplyScalar(.5),m,new T(1,1,1)),t),a(new zt(.16,.05,.2),new Me().makeTranslation(n.x,.025,n.z),t)}}const o=new va;o.name="carrier:parking-gear";for(const[i,l]of[[e,ro],[t,lo]]){const r=new Fe(jo(i.map(n=>n.toNonIndexed()),!1),l);r.castShadow=r.receiveShadow=!0,o.add(r)}return o}async function wi(s,e=Vs){const t=s==="f35c"?(await oa(async()=>{const{createF35C:u}=await import("./exterior-DMjAlJwk.js");return{createF35C:u}},__vite__mapDeps([0,1,2,3,4,5,6,7,8]))).createF35C():(await oa(async()=>{const{createFA18E:u}=await import("./exterior-DlSThKkh.js");return{createFA18E:u}},__vite__mapDeps([9,1,2,10,11,6,4,3,5,12,8,7]))).createFA18E();t.set({gear:1,fold:1,canopy:0,launchBar:0,hook:0,nozzle:0,pilot:!1}),$o(t.root),t.root.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0)});const a=new va;a.name=`carrier:parked-${s}`,a.position.set(e.x,0,e.z),a.rotation.y=Os(e.nose),a.add(t.root),a.add(Gs(Ns(t)));const o=Wo("stand","brown");o.position.set(-2.6,0,-5.2),o.rotation.y=-2.2,a.add(o);let i=null,l=null,r=null,n=0;return{group:a,kind:s,jet:t.root,async attachLook(u,c,m={}){if(i)return;const{createJetLook:b}=await oa(async()=>{const{createJetLook:v}=await import("./index-CpfKCY5i.js");return{createJetLook:v}},__vite__mapDeps([13,1,14,15,16,8]));r=c,i=b(u,c,{ground:"deck",phone:m.phone}),l=i.add(t),n=0},updateLook(u,c){!i||!l||!r||n++%15!==0||(l.update({onGround:!0}),i.update({sunDir:r.sunENU,sun:c,focus:t.root,cameraWorld:u,fitShadow:!1}))},dispose(){i?.dispose(),a.removeFromParent(),a.traverse(u=>{const c=u;c.isMesh&&c.geometry.dispose()})}}}export{ci as C,ni as F,mi as M,Vs as P,pi as S,ii as V,ri as a,so as b,li as c,vi as d,hi as e,ui as f,di as g,fi as h,xi as i,wi as j,Gs as p,Ns as w,Os as y};
