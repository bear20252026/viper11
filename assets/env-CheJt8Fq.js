import{Z as ee,x as ye,V as O,W as re,aE as Q,O as I,X as K,S as te,g as le,ac as ce,C as D,aa as me,k as ve,M as j,P as Z,ah as Me,K as ae,F as he,z as be,r as Ce,_ as oe,n as we,ax as Se,ay as ze,Y as Fe,s as Ae,t as ke,i as Te,a6 as Oe,az as Pe,al as De}from"./three.module-9D8i-8qh.js";import{l as Ue}from"./paint-BjJ-hqG3.js";import{K as _e}from"./shared-oZu7p6SI.js";const Ee=`
#include <common>
#include <skinning_pars_vertex>
void main() {
  #include <skinbase_vertex>
  #include <begin_vertex>
  #include <skinning_vertex>
  gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
}`,Be=`
#include <packing>
void main() { gl_FragColor = packDepthToRGBA(gl_FragCoord.z); }`,Ge=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,Re=(e,o,v)=>`
#include <packing>
uniform sampler2D tPos, tNrm, tAtlas;
uniform mat4 uM[${e}];
uniform float uOffset, uBias;
varying vec2 vUv;
void main() {
  vec4 P = texture2D(tPos, vUv);
  if (P.w < 0.5) { gl_FragColor = vec4(0.0); return; }
  vec3 n = normalize(texture2D(tNrm, vUv).xyz);
  // both sides: a surface whose normal was built inward (a tube, a lathe) is judged by its open side
  // (a real cavity is closed on both: the well wall's back is the airframe's inside)
  vec3 pa = P.xyz + n * uOffset, pb = P.xyz - n * uOffset;
  float sa = 0.0, sb = 0.0, total = 0.0;
  for (int k = 0; k < ${e}; k++) {
    mat4 M = uM[k];
    // the direction toward the depth camera: its view z axis, from the clip z row of an orthographic P·V
    vec3 d = -normalize(vec3(M[0][2], M[1][2], M[2][2]));
    float w = dot(n, d);
    vec3 p = w > 0.0 ? pa : pb;
    w = abs(w);
    vec4 c = M * vec4(p, 1.0);
    vec2 uv = c.xy * 0.5 + 0.5;
    float z = c.z * 0.5 + 0.5;
    float col = mod(float(k), ${o.toFixed(1)}), row = floor(float(k) / ${o.toFixed(1)});
    vec2 a = (vec2(col, row) + clamp(uv, 0.001, 0.999)) / vec2(${o.toFixed(1)}, ${v.toFixed(1)});
    float stored = unpackRGBAToDepth(texture2D(tAtlas, a));
    float s = w * step(z - uBias, stored);
    if (dot(n, d) > 0.0) sa += s; else sb += s;
    total += w;
  }
  // each side's hemisphere carries ~half the weight
  float vis = total > 0.0 ? clamp(2.0 * max(sa, sb) / total, 0.0, 1.0) : 1.0;
  gl_FragColor = vec4(1.0 - vis, 0.0, 0.0, 1.0);
}`;function We(e){const o=[],v=Math.PI*(3-Math.sqrt(5));for(let r=0;r<e;r++){const n=1-2*(r+.5)/e,c=Math.sqrt(1-n*n),p=r*v;o.push(new O(Math.cos(p)*c,n,Math.sin(p)*c))}return o}const ge=e=>/:glass$|:lights$/.test(e.name)||e.material.transparent;function Xe(e,o,v={}){const r=performance.now(),n=v.dirs??40,c=v.res??320,p=8,g=Math.ceil(n/p),h=o,u=h.isLOD?h.levels.map(a=>a.object):[o],M=u[0],s={parent:o.parent,pos:o.position.clone(),quat:o.quaternion.clone(),scale:o.scale.clone(),auto:h.isLOD?h.autoUpdate:!1,vis:u.map(a=>a.visible),rootVis:o.visible},m=new ee;m.add(o),o.position.set(0,0,0),o.quaternion.identity(),o.scale.set(1,1,1),o.visible=!0,h.isLOD&&(h.autoUpdate=!1),u.forEach((a,i)=>{a.visible=i===0});const C=[];M.traverse(a=>{const i=a;i.isMesh&&i.visible&&ge(i)&&(i.visible=!1,C.push(i))}),o.updateMatrixWorld(!0);const S=new ye().setFromObject(M,!1),U=S.getCenter(new O),f=S.getSize(new O).length()/2+.2,_=new re(p*c,g*c,{type:K,format:I,depthBuffer:!0,minFilter:Q,magFilter:Q,generateMipmaps:!1}),W=new te({vertexShader:Ee,fragmentShader:Be,side:le});m.overrideMaterial=W;const z=new ce(-f,f,f,-f,.05,2*f+.1),q=[],A={rt:e.getRenderTarget(),auto:e.autoClear,sc:e.getScissorTest(),clr:e.getClearColor(new D),alpha:e.getClearAlpha(),xr:e.xr.enabled,shadow:e.shadowMap.autoUpdate,tm:e.toneMapping},V=new me,Y=new me;e.getViewport(V),e.getScissor(Y),e.shadowMap.autoUpdate=!1,e.setRenderTarget(_),e.setClearColor(16777215,1),e.autoClear=!1,e.setScissorTest(!1),e.clear(!0,!0,!1),e.setScissorTest(!0);const X=We(n),P=new O;X.forEach((a,i)=>{z.position.copy(U).addScaledVector(a,f+.05),P.set(0,1,0),Math.abs(a.y)>.95&&P.set(0,0,1),z.up.copy(P),z.lookAt(U),z.updateMatrixWorld(!0),q.push(new ve().multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse));const l=i%p*c,d=Math.floor(i/p)*c;e.setViewport(l,d,c,c),e.setScissor(l,d,c,c),e.render(m,z)}),e.setScissorTest(!1),m.overrideMaterial=null;for(const a of C)a.visible=!0;const b=512,E=new te({vertexShader:Ge,fragmentShader:Re(n,p,g),depthTest:!1,depthWrite:!1,uniforms:{tPos:{value:null},tNrm:{value:null},tAtlas:{value:_.texture},uM:{value:q},uOffset:{value:.045},uBias:{value:.035/(2*f)}}}),B=new j(new Z(2,2),E);B.frustumCulled=!1;const H=new ee;H.add(B);const J=new ce(-1,1,1,-1,0,1),G=[];for(const a of u)a.traverse(i=>{const l=i;l.isMesh&&!ge(l)&&G.push(l)});let L=0;const N=new Me,$=new O,R=new O,w=new Set,t=new Set;for(const a of G){const i=a.geometry;if(t.has(i))continue;t.add(i);const l=i.getAttribute("position"),d=i.getAttribute("normal");if(!l||!d)continue;const F=l.count,y=Math.ceil(F/b),k=new Float32Array(b*y*4),T=new Float32Array(b*y*4);a.updateMatrixWorld(!0);const ue=a.isSkinnedMesh?new ve:a.matrixWorld;N.getNormalMatrix(ue);for(let x=0;x<F;x++)$.fromBufferAttribute(l,x).applyMatrix4(ue),R.fromBufferAttribute(d,x).applyMatrix3(N).normalize(),k.set([$.x,$.y,$.z,1],x*4),T.set([R.x,R.y,R.z,0],x*4);const se=new ae(k,b,y,I,he),ie=new ae(T,b,y,I,he);se.needsUpdate=ie.needsUpdate=!0;const ne=new re(b,y,{type:K,format:I,depthBuffer:!1,minFilter:Q,magFilter:Q,generateMipmaps:!1});E.uniforms.tPos.value=se,E.uniforms.tNrm.value=ie,e.setRenderTarget(ne),e.setViewport(0,0,b,y),e.render(H,J);const pe=new Uint8Array(b*y*4);e.readRenderTargetPixels(ne,0,0,b,y,pe);const de=new Uint8Array(F);for(let x=0;x<F;x++)de[x]=pe[x*4];i.setAttribute("aOcc",new be(de,1,!0)),ne.dispose(),se.dispose(),ie.dispose(),L+=F;for(const x of Array.isArray(a.material)?a.material:[a.material]){const fe=Ue(x);fe&&w.add(fe)}}for(const a of w)a.uAO.value=1;return e.setRenderTarget(A.rt),e.setViewport(V),e.setScissor(Y),e.setScissorTest(A.sc),e.autoClear=A.auto,e.setClearColor(A.clr,A.alpha),e.shadowMap.autoUpdate=A.shadow,_.dispose(),W.dispose(),E.dispose(),B.geometry.dispose(),m.remove(o),o.position.copy(s.pos),o.quaternion.copy(s.quat),o.scale.copy(s.scale),o.visible=s.rootVis,h.isLOD&&(h.autoUpdate=s.auto),u.forEach((a,i)=>{a.visible=s.vis[i]}),s.parent?.add(o),o.updateMatrixWorld(!0),{ms:performance.now()-r,verts:L}}const qe=`
varying float vY;
void main() { vec4 w = modelMatrix * vec4(position, 1.0); vY = w.y; gl_Position = projectionMatrix * viewMatrix * w; }`,Ve=`
varying float vY;
void main() { float o = exp(-max(vY, 0.0) / 1.6); gl_FragColor = vec4(o, o, o, 1.0); }`;function He(e=64){const o=new Uint8Array(e*e*4);for(let r=0;r<e;r++)for(let n=0;n<e;n++){const c=(n+.5)/e*2-1,p=(r+.5)/e*2-1,g=Math.sqrt(c*c+p*p),h=Math.max(0,1-g)**1.6,u=Math.round(h*255);o.set([u,u,u,255],(r*e+n)*4)}const v=new ae(o,e,e,I,K);return v.minFilter=v.magFilter=oe,v.needsUpdate=!0,v}function Ke(e,o,v={}){const r=new Ce;r.name="look:contact";const n=o,c=n.isLOD?n.levels[0].object:o,p={parent:o.parent,pos:o.position.clone(),quat:o.quaternion.clone(),auto:n.isLOD?n.autoUpdate:!1,vis:n.isLOD?n.levels.map(t=>t.object.visible):[]},g=new ee;g.add(o),o.position.set(0,0,0),o.quaternion.identity(),n.isLOD&&(n.autoUpdate=!1,n.levels.forEach((t,a)=>{t.object.visible=a===0})),o.updateMatrixWorld(!0);const h=new ye().setFromObject(c,!1),u=h.getCenter(new O),M=h.getSize(new O),s=v.phone?96:160,m=Math.max(M.x,M.z)/2*1.25,C=new ce(-m,m,m,-m,.01,40);C.position.set(u.x,-1,u.z),C.up.set(0,0,-1),C.lookAt(u.x,10,u.z),C.updateMatrixWorld(!0);const S=new re(s,s,{type:K,depthBuffer:!0}),U=new te({vertexShader:qe,fragmentShader:Ve,side:le});g.overrideMaterial=U;const f=[];c.traverse(t=>{const a=t;a.isMesh&&a.visible&&/:glass$|:lights$/.test(a.name)&&(a.visible=!1,f.push(a))});const _=e.getRenderTarget(),W=e.getClearColor(new D),z=e.getClearAlpha(),q=e.autoClear,A=e.shadowMap.autoUpdate;e.shadowMap.autoUpdate=!1,e.setRenderTarget(S),e.setClearColor(0,1),e.autoClear=!0,e.render(g,C);const V=new Uint8Array(s*s*4);e.readRenderTargetPixels(S,0,0,s,s,V),e.setRenderTarget(_),e.setClearColor(W,z),e.autoClear=q,e.shadowMap.autoUpdate=A,S.dispose(),U.dispose();for(const t of f)t.visible=!0;const Y=[];let X=1/0;const P=new O,b=[];c.traverse(t=>{const a=t;if(!a.isMesh||!a.visible)return;const i=a.geometry.getAttribute("position");if(i)for(let l=0;l<i.count;l++)P.fromBufferAttribute(i,l).applyMatrix4(a.matrixWorld),P.y<.25&&b.push(P.clone()),P.y<X&&(X=P.y)});for(const t of b)t.y<X+.035&&Y.push(t);const E=[];for(const t of Y){const a=E.find(i=>Math.hypot(i.c.x/i.n-t.x,i.c.z/i.n-t.z)<.45);a?(a.c.add(t),a.n++,a.min.min(t),a.max.max(t)):E.push({c:t.clone(),n:1,min:t.clone(),max:t.clone()})}g.remove(o),o.position.copy(p.pos),o.quaternion.copy(p.quat),n.isLOD&&(n.autoUpdate=p.auto,n.levels.forEach((t,a)=>{t.object.visible=p.vis[a]})),p.parent?.add(o),o.updateMatrixWorld(!0);let B=new Float32Array(s*s);for(let t=0;t<s*s;t++)B[t]=V[t*4]/255;const H=Math.max(2,Math.round(.45/(2*m)*s));for(let t=0;t<3;t++){const a=new Float32Array(s*s),i=new Float32Array(s*s);for(let l=0;l<s;l++)for(let d=0;d<s;d++){let F=0,y=0;for(let k=-H;k<=H;k++){const T=d+k;T>=0&&T<s&&(F+=B[l*s+T],y++)}a[l*s+d]=F/y}for(let l=0;l<s;l++)for(let d=0;d<s;d++){let F=0,y=0;for(let k=-H;k<=H;k++){const T=l+k;T>=0&&T<s&&(F+=a[T*s+d],y++)}i[l*s+d]=F/y}B=i}const J=new Uint8Array(s*s*4);for(let t=0;t<s*s;t++){const a=Math.min(255,Math.round(B[t]*255));J.set([a,a,a,255],t*4)}const G=new ae(J,s,s,I,K);G.minFilter=G.magFilter=oe,G.needsUpdate=!0;const L=new we({color:0,alphaMap:G,transparent:!0,depthWrite:!1,opacity:.6,side:le});L.forceSinglePass=!0;const N=new j(new Z(2*m,2*m).rotateX(-Math.PI/2).scale(-1,1,1),L);N.position.set(u.x,.034,u.z),N.renderOrder=11,N.name="look:pool",r.add(N);const $=He(),R=new we({color:0,alphaMap:$,transparent:!0,depthWrite:!1,opacity:.75});for(const t of E){const a=t.c.clone().divideScalar(t.n),i=Math.max(.18,t.max.x-t.min.x)+.3,l=Math.max(.2,t.max.z-t.min.z)+.45,d=new j(new Z(i,l).rotateX(-Math.PI/2),R);d.position.set(a.x,.038,a.z),d.renderOrder=12,d.name="look:tyre",r.add(d)}let w=null;v.catcher&&(w=new j(new Z(1,1).rotateX(-Math.PI/2),new Se({color:0,opacity:.7,transparent:!0,depthWrite:!1})),w.receiveShadow=!0,w.position.set(u.x,.03,u.z),w.scale.setScalar(60),w.renderOrder=10,w.name="look:catcher",r.add(w));for(const t of r.children)t.castShadow=!1,t.frustumCulled=!1;return{group:r,hasCatcher:!!w,set(t){t.pool!==void 0&&(L.opacity=t.pool),t.tyres!==void 0&&(R.opacity=t.tyres),w&&t.shadow!==void 0&&(w.material.opacity=t.shadow),w&&t.catcherSize!==void 0&&w.scale.setScalar(t.catcherSize)},follow(t,a){if(r.visible=a&&t.visible,!r.visible)return;r.parent!==t.parent&&t.parent?.add(r),r.position.copy(t.position);const i=Math.atan2(2*(t.quaternion.w*t.quaternion.y+t.quaternion.x*t.quaternion.z),1-2*(t.quaternion.y**2+t.quaternion.x**2));r.rotation.set(0,i,0)},dispose(){r.removeFromParent(),G.dispose(),L.dispose(),$.dispose(),R.dispose(),r.traverse(t=>{const a=t;a.isMesh&&a.geometry.dispose()}),w&&w.material.dispose()}}}const xe={desert:new D(.27,.23,.18),deck:new D(.055,.058,.064),sea:new D(.03,.045,.06),grey:new D(.18,.18,.18)},Le=`
varying vec3 vDir;
void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,Ne=`
uniform vec3 uColor, uGround; uniform float uCover, uHeavy;
varying vec3 vDir;
void main() {
  // the deck covers the sky down to a few degrees above the horizon; its underside a little brighter overhead
  float up = vDir.y;
  float a = uCover * smoothstep(-0.02, 0.18, up);
  vec3 sky = uColor * (0.8 + 0.3 * max(up, 0.0));
  // a heavy overcast (rain): the deck closes to the horizon, its radiance the CIE overcast sky's (the zenith three
  // times the horizon: the light from above, the form of a jet under it), and the ground below lit only by it (the
  // sunlit desert of the clear sky gone: its warm bounce lit the jet's underside as brightly as its top)
  float u = max(up, 0.0);
  vec3 cie = uColor * (1.0 + 2.0 * u) / 3.0 * 1.45;
  vec3 c = mix(sky, cie, uHeavy);
  a = mix(a, uCover, uHeavy * smoothstep(-0.06, 0.0, up));
  // below the horizon: the ground under the deck (a thin band of the horizon's haze grey into it)
  float g = uHeavy * uCover * (1.0 - smoothstep(-0.06, 0.0, up));
  c = mix(c, mix(uGround, uColor * 0.33 * 1.45, smoothstep(-0.25, 0.0, up) * 0.6), g);
  a = max(a, g);
  gl_FragColor = vec4(c, a);
}`;function $e(e,o,v={}){const r=v.size??64,n=new ze(r,{type:Fe,format:I,generateMipmaps:!1,minFilter:oe,magFilter:oe,depthBuffer:!1}),c=new ee,p=f=>f instanceof D?f.clone():xe[f].clone(),g=new _e({...o.textures,sun:!1,moon:!1,ground:!0,groundAlbedo:p(v.ground??"desert")}),h=new Ae;h.setAttribute("position",new ke([-1,-1,0,3,-1,0,-1,3,0],3));const u=new j(h,g);u.frustumCulled=!1,c.add(u);const M=new te({vertexShader:Le,fragmentShader:Ne,side:Te,transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uColor:{value:new D},uGround:{value:new D},uCover:{value:0},uHeavy:{value:0}}}),s=new j(new Oe(5,24,12),M);s.frustumCulled=!1,s.renderOrder=1,c.add(s);const m=new Pe(.1,10,n);c.add(m);const C=new De(e);let S=null;const U={get texture(){return S.texture},update({at:f,overcast:_=0,cloud:W,heavy:z=0,ground:q}){m.position.copy(f),s.position.copy(f),m.updateMatrixWorld(!0),s.updateMatrixWorld(!0),g.worldToECEFMatrix.copy(o.enuToEcef),g.sunDirection.copy(o.sunECEF),M.uniforms.uCover.value=_,W&&M.uniforms.uColor.value.copy(W),M.uniforms.uHeavy.value=z,q&&M.uniforms.uGround.value.copy(q),s.visible=_>0;const A=e.toneMapping,V=e.getRenderTarget();e.toneMapping=0,m.update(e,c),e.toneMapping=A,e.setRenderTarget(V),S=C.fromCubemap(n.texture,S)},setGround(f){g.groundAlbedo.copy(p(f))},dispose(){n.dispose(),S?.dispose(),C.dispose(),g.dispose(),h.dispose(),M.dispose(),s.geometry.dispose()}};return U.update({at:new O}),U}const Je=Object.freeze(Object.defineProperty({__proto__:null,GROUND_ALBEDO:xe,createJetEnv:$e},Symbol.toStringTag,{value:"Module"}));export{xe as G,Ke as a,Xe as b,$e as c,Je as e};
