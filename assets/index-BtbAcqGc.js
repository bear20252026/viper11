import{s as de,M as re,V as M,E as jt,ah as Ra,k as K,t as nt,B as ye,a5 as He,a6 as ro,J as Fe,b9 as Na,d as oe,z as j,Q as xe,o as Ea,q as Ca,p as Ft,ae as _a,L as It,a as rt,g as Rt,r as Le,C as J,n as ia,S as mo,A as Ia,y as Wa,ba as Ha,x as Oa,Z as ca,ac as Va,K as xo,O as wt,F as Wt,aE as Mt,W as lo,Y as io,_ as ua,R as $a,c as Ba,bb as fa,aF as qa,ay as Ua,az as Ga,aa as ja,I as Ya,u as Ja,w as Xa,bc as Ka,bd as Za}from"./three.module-9D8i-8qh.js";import{m as Ve}from"./BufferGeometryUtils-y2z5xeEV.js";import{s as Qa}from"./lighting-DLOaW5gk.js";import{K as en}from"./shared-oZu7p6SI.js";const tn=14e5,on=22e5,Po=e=>typeof matchMedia=="function"&&matchMedia(e).matches;function r0(e=new URLSearchParams(typeof location>"u"?"":location.search)){const t=typeof navigator>"u"?null:navigator,a=typeof devicePixelRatio=="number"?devicePixelRatio:1,n=t?.maxTouchPoints??0,r=Po("(pointer: coarse)"),s=Po("(hover: none)"),o=t?.userAgent??"",i=/Mobi|Android|iPhone|iPad|iPod|Silk|Kindle/i.test(o)||/Macintosh/.test(o)&&n>1,p=typeof screen>"u"?1920:screen.width,d=typeof screen>"u"?1080:screen.height,h=Math.min(p,d),l=h<=540,f=r&&s&&n>0,g=e.get("mobile"),y=g==="1"?!0:g==="0"?!1:f||i&&n>0,S=y&&(l||g==="1"&&h<=540),x=g==="1"||g==="0"?`?mobile=${g}`:[f&&"touch-primary",i&&"ua",l&&"small",r&&!f&&"coarse"].filter(Boolean).join("+")||"desktop",b=Math.max(1,p*d),u=y?Math.max(1,Math.min(a,2,Math.sqrt((S?tn:on)/b))):null,w=t?.deviceMemory,k=typeof w=="number"?w:null;return{mobile:y,phone:S,reason:x,dpr:a,pixelRatio:u===null?null:+u.toFixed(3),memoryGB:k}}class an extends de{constructor(t=new re,a=new M,n=new jt,r=new M(1,1,1)){super();const s=[],o=[],i=[],p=new M,d=new Ra().getNormalMatrix(t.matrixWorld),h=new K;h.makeRotationFromEuler(n),h.setPosition(a);const l=new K;l.copy(h).invert(),f(),this.setAttribute("position",new nt(s,3)),this.setAttribute("uv",new nt(i,2)),o.length>0&&this.setAttribute("normal",new nt(o,3));function f(){let x=[];const b=new M,c=new M,u=t.geometry,w=u.attributes.position,k=u.attributes.normal;if(u.index!==null){const m=u.index;for(let v=0;v<m.count;v++)b.fromBufferAttribute(w,m.getX(v)),k?(c.fromBufferAttribute(k,m.getX(v)),g(x,b,c)):g(x,b)}else{if(w===void 0)return;for(let m=0;m<w.count;m++)b.fromBufferAttribute(w,m),k?(c.fromBufferAttribute(k,m),g(x,b,c)):g(x,b)}x=y(x,p.set(1,0,0)),x=y(x,p.set(-1,0,0)),x=y(x,p.set(0,1,0)),x=y(x,p.set(0,-1,0)),x=y(x,p.set(0,0,1)),x=y(x,p.set(0,0,-1));for(let m=0;m<x.length;m++){const v=x[m];i.push(.5+v.position.x/r.x,.5+v.position.y/r.y),v.position.applyMatrix4(h),s.push(v.position.x,v.position.y,v.position.z),v.normal!==null&&o.push(v.normal.x,v.normal.y,v.normal.z)}}function g(x,b,c=null){b.applyMatrix4(t.matrixWorld),b.applyMatrix4(l),c?(c.applyNormalMatrix(d),x.push(new Xt(b.clone(),c.clone()))):x.push(new Xt(b.clone()))}function y(x,b){const c=[],u=.5*Math.abs(r.dot(b));for(let w=0;w<x.length;w+=3){let k=0,m,v,z,A;const F=x[w+0].position.dot(b)-u,N=x[w+1].position.dot(b)-u,O=x[w+2].position.dot(b)-u,B=F>0,W=N>0,X=O>0;switch(k=(B?1:0)+(W?1:0)+(X?1:0),k){case 0:{c.push(x[w]),c.push(x[w+1]),c.push(x[w+2]);break}case 1:{if(B&&(m=x[w+1],v=x[w+2],z=S(x[w],m,b,u),A=S(x[w],v,b,u)),W){m=x[w],v=x[w+2],z=S(x[w+1],m,b,u),A=S(x[w+1],v,b,u),c.push(z),c.push(v.clone()),c.push(m.clone()),c.push(v.clone()),c.push(z.clone()),c.push(A);break}X&&(m=x[w],v=x[w+1],z=S(x[w+2],m,b,u),A=S(x[w+2],v,b,u)),c.push(m.clone()),c.push(v.clone()),c.push(z),c.push(A),c.push(z.clone()),c.push(v.clone());break}case 2:{B||(m=x[w].clone(),v=S(m,x[w+1],b,u),z=S(m,x[w+2],b,u),c.push(m),c.push(v),c.push(z)),W||(m=x[w+1].clone(),v=S(m,x[w+2],b,u),z=S(m,x[w],b,u),c.push(m),c.push(v),c.push(z)),X||(m=x[w+2].clone(),v=S(m,x[w],b,u),z=S(m,x[w+1],b,u),c.push(m),c.push(v),c.push(z));break}}}return c}function S(x,b,c,u){const w=x.position.dot(c)-u,k=b.position.dot(c)-u,m=w/(w-k),v=new M(x.position.x+m*(b.position.x-x.position.x),x.position.y+m*(b.position.y-x.position.y),x.position.z+m*(b.position.z-x.position.z));let z=null;return x.normal!==null&&b.normal!==null&&(z=new M(x.normal.x+m*(b.normal.x-x.normal.x),x.normal.y+m*(b.normal.y-x.normal.y),x.normal.z+m*(b.normal.z-x.normal.z))),new Xt(v,z)}}}class Xt{constructor(t,a=null){this.position=t,this.normal=a}clone(){const t=this.position.clone(),a=this.normal!==null?this.normal.clone():null;return new this.constructor(t,a)}}const Ht=new xe,nn=new jt,Nt=new M,To=new M;function L(e,t=[0,0,0],a=1){const n=Array.isArray(e)?To.set(e[0],e[1],e[2]):To.copy(e);return Ht.setFromEuler(nn.set(t[0],t[1],t[2],"YXZ")),typeof a=="number"?Nt.set(a,a,a):Nt.set(a[0],a[1],a[2]),new K().compose(n,Ht,Nt)}function wo(e){const t=e.attributes.position,a=e.attributes.normal,n=new Float32Array(t.count*2);for(let r=0;r<t.count;r++){const s=Math.abs(a.getX(r)),o=Math.abs(a.getY(r)),i=Math.abs(a.getZ(r));o>=s&&o>=i?(n[r*2]=t.getX(r),n[r*2+1]=t.getZ(r)):s>=i?(n[r*2]=t.getZ(r),n[r*2+1]=t.getY(r)):(n[r*2]=t.getX(r),n[r*2+1]=t.getY(r))}return e.setAttribute("uv",new j(n,2)),e}function sn(e){let t=e.index?e.toNonIndexed():e;t.attributes.normal||t.computeVertexNormals();for(const a of Object.keys(t.attributes))a!=="position"&&a!=="normal"&&a!=="uv"&&t.deleteAttribute(a);return t.attributes.uv||t.setAttribute("uv",new j(new Float32Array(t.attributes.position.count*2),2)),t===e&&(t=e.clone()),t}class Et{parts=new Map;add(t,a,n,r=!0){const s=sn(a);n&&s.applyMatrix4(n),r&&wo(s);let o=this.parts.get(t);o||this.parts.set(t,o=[]),o.push(s)}box(t,a,n,r,s){this.add(t,new ye(a,n,r),s)}aabb(t,a,n,r,s,o,i,p){const d=L([(a+s)/2,(n+o)/2,(r+i)/2]);p&&d.premultiply(p),this.add(t,new ye(Math.abs(s-a),Math.abs(o-n),Math.abs(i-r)),d)}cyl(t,a,n,r,s,o=12,i=!1){this.add(t,new He(a,n,r,o,1,i),s)}sphere(t,a,n,r=12,s=!1){this.add(t,new ro(a,r,Math.max(4,r>>1),0,Math.PI*2,0,s?Math.PI/2:Math.PI),n)}build(t,a){const n=[];for(const[r,s]of this.parts){const o=t[r];if(!o)throw new Error(`carrier: no material "${r}"`);const i=Ve(s,!1);if(!i)throw new Error(`carrier: merge failed for "${r}"`);i.computeBoundingSphere();const p=new re(i,o);p.name=`${a}:${r}`,n.push(p)}return n}get empty(){return this.parts.size===0}}function Dt(e,t,a,n){const r=new Fe(e,t,a.length);return a.forEach((s,o)=>r.setMatrixAt(o,s)),r.instanceMatrix.needsUpdate=!0,r.computeBoundingSphere(),r.name=n,r}function fe(e,t,a,n={top:!0,bottom:!0}){const r=[];let s=0;for(let h=0;h<e.length;h++){const[l,f]=e[h],[g,y]=e[(h+1)%e.length];s+=l*y-g*f}const o=s>0?e:[...e].reverse();for(let h=0;h<o.length;h++){const[l,f]=o[h],[g,y]=o[(h+1)%o.length];r.push(l,t,f,l,a,f,g,a,y,l,t,f,g,a,y,g,t,y)}const i=Na.triangulateShape(o.map(([h,l])=>new oe(h,l)),[]),p=(h,l)=>{for(const f of i){const[g,y,S]=f.map(c=>o[c]),b=-((y[0]-g[0])*(S[1]-g[1])-(y[1]-g[1])*(S[0]-g[0]))>0===l?[g,y,S]:[g,S,y];for(const c of b)r.push(c[0],h,c[1])}};n.top&&p(a,!0),n.bottom&&p(t,!1);const d=new de;return d.setAttribute("position",new j(new Float32Array(r),3)),d.computeVertexNormals(),d}function ha(e,t,a,n){const r=[];let s=0;for(let d=0;d<e.length;d++){const[h,l]=e[d],[f,g]=e[(d+1)%e.length];s+=h*g-f*l}const o=s<=0,i=e.length;for(let d=0;d<i;d++){const h=o?i-1-d:d,l=o?(h-1+i)%i:(h+1)%i,f=e[h],g=e[l],y=t[h],S=t[l];r.push(f[0],a,f[1],y[0],n,y[1],S[0],n,S[1],f[0],a,f[1],S[0],n,S[1],g[0],a,g[1])}const p=new de;return p.setAttribute("position",new j(new Float32Array(r),3)),p.computeVertexNormals(),p}function vt(e){let t=0,a=0;return e.traverse(n=>{const r=n;if(!(r.isMesh||r.isPoints))return;const s=r.geometry,o=r.isPoints?0:(s.index?s.index.count:s.attributes.position.count)/3;t+=o*(r.isInstancedMesh?r.count??1:1),a+=Array.isArray(r.material)?r.material.length:1}),{tris:Math.round(t),draws:a}}const rn=new M(0,1,0),Kt=new M,Lo=new M;function da(e,t){Kt.subVectors(t,e);const a=Kt.length();return Ht.setFromUnitVectors(rn,Kt.multiplyScalar(1/Math.max(a,1e-6))),Lo.addVectors(e,t).multiplyScalar(.5),new K().compose(Lo,Ht,Nt.set(1,Math.max(a,1e-4),1))}function Qe(e,t,a,n,r,s=5){e.add(t,new He(r,r,1,s,1,!0),da(a,n))}function G(e,t,a,n,r){e.add(t,new ye(r,1,r),da(a,n))}function ut(e,t,a,n,r,s,o=!0){const i=s.clone().multiplyScalar(r/2),p=a.clone().sub(i),d=n.clone().sub(i),h=a.clone().add(i),l=n.clone().add(i);G(e,t,p,d,.07),G(e,t,h,l,.07);const f=Math.max(2,Math.round(a.distanceTo(n)/.3));for(let g=1;g<f;g++){const y=g/f;G(e,t,p.clone().lerp(d,y),h.clone().lerp(l,y),.045)}if(o)for(const[g,y]of[[p,d],[h,l]]){const S=new M(0,.9,0);G(e,t,g.clone().add(S),y.clone().add(S),.045),G(e,t,g,g.clone().add(S),.045),G(e,t,y,y.clone().add(S),.045)}}const ln={length:1092,heightAboveWaterline:62},cn=[{x:0,y:-40},{x:0,y:40},{x:330,y:100},{x:1040,y:112},{x:1092,y:95},{x:1092,y:-75},{x:1e3,y:-100},{x:760,y:-112},{x:640,y:-140},{x:330,y:-140},{x:260,y:-90}],un={angleDeg:9,ramp:{x:1085,y:12},lengthFt:700,halfWidthFt:40,glideslopeDeg:3.5,hookTouchdownFromRampFt:231},fn=[{n:1,fromRampFt:160,centre:{x:927,y:-13},a:{x:919.1,y:36.4},b:{x:934.8,y:-62.4}},{n:2,fromRampFt:200,centre:{x:887.5,y:-19.3},a:{x:879.6,y:30.1},b:{x:895.3,y:-68.7}},{n:3,fromRampFt:240,centre:{x:848,y:-25.5},a:{x:840.1,y:23.8},b:{x:855.8,y:-74.9}},{n:4,fromRampFt:280,centre:{x:808.4,y:-31.8},a:{x:800.6,y:17.6},b:{x:816.3,y:-81.2}}],hn={pos:{x:622.2,y:-134.2}},dn={pos:{x:898.4,y:-88.4}},pn=[{name:"Cat 1 (starboard bow)",start:{x:335,y:28},end:{x:25,y:28},stroke:310},{name:"Cat 2 (port bow)",start:{x:335,y:-28},end:{x:25,y:-28},stroke:310},{name:"Cat 3 (waist, inboard)",start:{x:625,y:-45},end:{x:318.8,y:-93.5},stroke:310},{name:"Cat 4 (waist, outboard)",start:{x:632,y:-89.4},end:{x:325.8,y:-137.9},stroke:310}],mn=[{cat:"Cat 1 (starboard bow)",centre:{x:385,y:28},width:40,raisedHeight:13,raisedAngleDeg:50},{cat:"Cat 2 (port bow)",centre:{x:385,y:-28},width:40,raisedHeight:13,raisedAngleDeg:50},{cat:"Cat 3 (waist, inboard)",centre:{x:674.4,y:-37.2},width:40,raisedHeight:13,raisedAngleDeg:50},{cat:"Cat 4 (waist, outboard)",centre:{x:681.4,y:-81.6},width:40,raisedHeight:13,raisedAngleDeg:50}],xn={x0:560,x1:710,y0:82,y1:112,heightAboveDeckToMastTopFt:130},wn=[{n:1,side:"starboard",x0:300,x1:370,y0:105,y1:160},{n:2,side:"starboard",x0:420,x1:490,y0:110,y1:165},{n:3,side:"starboard",x0:760,x1:830,y0:112,y1:167},{n:4,side:"port",x0:830,x1:900,y0:-108,y1:-163}],gn=[{text:"70",at:{x:90,y:0},readsFrom:"aft (upright to an approaching pilot)"},{text:"70",at:{x:1030,y:30},readsFrom:"aft"}],ie={deck:ln,outline:cn,landing:un,wires:fn,lens:hn,lsoPlatform:dn,cats:pn,jbd:mn,island:xn,elevators:wn,hullNumbers:gn},Y=.3048,te=ie,lt=ie.deck.length*Y,pa=lt/2,Ne=-pa,pe=pa,ht=ie.deck.heightAboveWaterline*Y,we=-ht,yn=37*Y,Re=we-yn,ma=134*Y,le=-11,vn=le+7.9,De=e=>({x:e.y*Y,z:(e.x-546)*Y}),co=ie.outline.map(De),go=co.slice(1,5),yo=[co[0],...co.slice(5).reverse()].sort((e,t)=>e.z-t.z),xa=(e,t)=>{if(t<=e[0].z)return e[0].x;for(let a=1;a<e.length;a++)if(t<=e[a].z){const n=e[a-1],r=e[a];return n.x+(r.x-n.x)*(t-n.z)/(r.z-n.z||1)}return e[e.length-1].x},Ee=e=>xa(go,e),Se=e=>xa(yo,e),wa=[...new Set([...go,...yo].map(e=>e.z))].sort((e,t)=>e-t),bn=go,Sn=yo,uo=10;function Je(e){const t=(e-(pe-uo))/uo;if(t<=0)return 0;const a=Math.min(1,t);return-.55*a*a}const et=ie.landing,Ot=et.angleDeg*Math.PI/180,ge=new M(-Math.sin(Ot),0,-Math.cos(Ot)),Vt=new M(-Math.cos(Ot),0,Math.sin(Ot)),he=De(et.ramp);function kn(e,t=0){return{x:he.x+ge.x*e+Vt.x*t,z:he.z+ge.z*e+Vt.z*t}}const ve={angleDeg:et.angleDeg,lengthM:et.lengthFt*Y,halfWidthM:et.halfWidthFt*Y,glideslopeDeg:et.glideslopeDeg,touchdownFromRampM:et.hookTouchdownFromRampFt*Y},dt=ie.wires.map(e=>({n:e.n,fromRampM:e.fromRampFt*Y,centre:De(e.centre),a:De(e.a),b:De(e.b)})),mt=.1,Fo=.035,Oe=ie.cats.map((e,t)=>{const a=De(e.start),n=De(e.end),r=Math.hypot(n.x-a.x,n.z-a.z);return{n:t+1,name:e.name,start:a,end:n,strokeM:e.stroke*Y,dir:new M((n.x-a.x)/r,0,(n.z-a.z)/r)}}),At=ie.jbd.map((e,t)=>({n:t+1,centre:De(e.centre),widthM:e.width*Y,heightM:e.raisedHeight*Y,raisedDeg:e.raisedAngleDeg,cat:Oe[t]})),be={z0:(ie.island.x0-546)*Y,z1:(ie.island.x1-546)*Y,x0:ie.island.y0*Y,x1:ie.island.y1*Y,mastTopH:ie.island.heightAboveDeckToMastTopFt*Y},$e=ie.elevators.map(e=>{const t=(e.x0-546)*Y,a=(e.x1-546)*Y,n=e.side==="starboard",r=(t+a)/2,s=n?Ee(r):Se(r),o=(n?Math.max(e.y0,e.y1):Math.min(e.y0,e.y1))*Y;return{n:e.n,side:e.side,z0:t,z1:a,xIn:s,xOut:o}}),Zt={pos:De(ie.lens.pos)};De(ie.lsoPlatform.pos);ie.hullNumbers.map(e=>({text:e.text,at:De(e.at)}));function Mn(e,t){return t<Ne||t>pe?!1:e>=Se(t)&&e<=Ee(t)}function Xe(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let a=t;return a=Math.imul(a^a>>>15,a|1),a^=a+Math.imul(a^a>>>7,a|61),((a^a>>>14)>>>0)/4294967296}}const Be=(e,t)=>{const a=document.createElement("canvas");return a.width=e,a.height=t,[a,a.getContext("2d")]};function qe(e,t,a,n=8){const r=new Ea(e);return t&&(r.colorSpace=Ca),r.wrapS=r.wrapT=a?Ft:_a,r.minFilter=It,r.anisotropy=n,r.generateMipmaps=!0,r}const st={W:4096,H:1280,pxPerFt:4096/1092,yMinFt:0};st.yMinFt=-341.25/2;const zn=(e,t)=>[e/1092,1-(t-st.yMinFt)/(st.H/st.pxPerFt)],$t=te.landing.angleDeg*Math.PI/180,We={x:-Math.cos($t),y:-Math.sin($t)},Ro={x:Math.sin($t),y:-Math.cos($t)},Q=(e,t=0)=>({x:te.landing.ramp.x+We.x*e+Ro.x*t,y:te.landing.ramp.y+We.y*e+Ro.y*t}),Dn="#323437",me="#e4e4df",Me="#d9b23a",An="#b33a2e";function Pn(){const{W:e,H:t,pxPerFt:a,yMinFt:n}=st,[r,s]=Be(e,t),o=Xe(70),i=c=>c.setTransform(a,0,0,a,0,-n*a);i(s),s.fillStyle=Dn,s.fillRect(0,n,1092,-2*n);for(let c=0;c<1092;c+=24+o()*16){const u=26+o()*22;for(let w=-175;w<175;w+=28+o()*20){const k=30+o()*25,m=o();s.fillStyle=m<.5?`rgba(14,14,14,${.06+o()*.14})`:`rgba(118,119,120,${.02+o()*.05})`,s.fillRect(c,w,u,k)}}for(let c=0;c<260;c++){const u=o()*1092,w=(o()-.5)*300,k=8+o()*40,m=s.createRadialGradient(u,w,0,u,w,k),v=o()<.6;m.addColorStop(0,v?`rgba(10,10,10,${.08+o()*.12})`:`rgba(128,129,130,${.03+o()*.04})`),m.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=m,s.fillRect(u-k,w-k,k*2,k*2)}for(let c=0;c<6e4;c++){const u=o()*1092,w=(o()-.5)*340,k=.3+o()*1.2;s.fillStyle=o()<.5?`rgba(8,8,8,${.1+o()*.14})`:`rgba(120,121,122,${.04+o()*.08})`,s.fillRect(u,w,k,k*(.3+o()))}{s.save();const c=Q(0);s.translate(c.x,c.y),s.rotate(Math.atan2(We.y,We.x));const u=s.createLinearGradient(60,0,520,0);u.addColorStop(0,"rgba(12,12,12,0)"),u.addColorStop(.2,"rgba(8,8,8,0.55)"),u.addColorStop(.55,"rgba(8,8,8,0.42)"),u.addColorStop(1,"rgba(12,12,12,0)"),s.fillStyle=u,s.fillRect(60,-28,460,56);for(let w=0;w<2200;w++){const k=(o()+o()+o()-1.5)*24,m=100+o()*300+(o()<.3?o()*200:0),v=15+o()*140,z=(o()-.5)*.04;s.strokeStyle=`rgba(4,4,4,${.1+o()*.3})`,s.lineWidth=.5+o()*1,s.beginPath(),s.moveTo(m,k),s.lineTo(m+v,k+v*z),s.stroke()}s.restore()}const p=(c,u,w,k,m,v,z,A=.9)=>{s.strokeStyle=`rgba(6,6,6,${z})`,s.lineWidth=A,s.beginPath(),s.moveTo(c,u),s.quadraticCurveTo(m,v,w,k),s.stroke()};for(let c=0;c<260;c++){const u=280+o()*260,w=Q(u,(o()-.5)*30),k=w.x-120-o()*200,m=20+o()*70;p(w.x,w.y,k,m,w.x-60-o()*60,w.y+(m-w.y)*(.2+o()*.4),.06+o()*.16,.5+o()*.8)}for(let c=0;c<420;c++){const u=120+o()*900,w=-80+o()*160,k=40+o()*160,m=Math.PI+(o()-.5)*.5,v=u+Math.cos(m)*k,z=w+Math.sin(m)*k,A=(u+v)/2+(o()-.5)*30,F=(w+z)/2+(o()-.5)*30,N=.04+o()*.1,O=.6+o()*.6,B=-Math.sin(m)*6.5,W=Math.cos(m)*6.5;p(u,w,v,z,A,F,N,O),p(u+B,w+W,v+B,z+W,A+B,F+W,N,O)}for(let c=0;c<320;c++){const u=300+o()*600,w=30+o()*70,k=20+o()*50,m=o()*Math.PI*2;s.strokeStyle=`rgba(4,4,4,${.06+o()*.18})`,s.lineWidth=.5+o()*.9,s.beginPath(),s.arc(u,w,k,m,m+.5+o()*1.5),s.stroke()}for(const c of te.cats)for(let u=0;u<70;u++){const w=c.start.x+40+o()*120,k=c.start.y+(o()-.5)*80;p(w,k,c.start.x,c.start.y+(o()-.5)*3,c.start.x+20,c.start.y+(o()-.5)*10,.07+o()*.15,.6+o()*.6)}const d=(c,u,w,k)=>{const m=s.createRadialGradient(c,u,0,c,u,w);m.addColorStop(0,`rgba(5,5,6,${k})`),m.addColorStop(.6,`rgba(5,5,6,${k*.5})`),m.addColorStop(1,"rgba(5,5,6,0)"),s.fillStyle=m,s.save(),s.translate(c,u),s.scale(1,.4+o()*.8),s.translate(-c,-u),s.fillRect(c-w,u-w,w*2,w*2),s.restore()};for(const c of te.cats)for(let u=0;u<60;u++)d(c.start.x-10+o()*60,c.start.y+(o()-.5)*22,1+o()*6,.2+o()*.4);for(const c of te.cats){const u=(c.end.x-c.start.x)/c.stroke,w=(c.end.y-c.start.y)/c.stroke;for(let k=0;k<80;k++){const m=Math.pow(o(),1.6)*c.stroke;d(c.start.x+u*m+(o()-.5)*6,c.start.y+w*m+(o()-.5)*6,.6+o()*3,.15+o()*.3)}}for(let c=0;c<320;c++)d(250+o()*820,40+o()*70,1+o()*5,.15+o()*.35);for(let c=0;c<60;c++)d(20+o()*260,(o()-.5)*120,1+o()*4,.12+o()*.25);for(let c=0;c<160;c++){const u=Q(100+o()*300,(o()-.5)*50);d(u.x,u.y,1+o()*5,.15+o()*.3)}for(const c of te.jbd){const u=te.cats.find(m=>m.name===c.cat),w=(u.start.x-u.end.x)/u.stroke,k=(u.start.y-u.end.y)/u.stroke;for(let m=0;m<6;m++)d(c.centre.x+w*(8+o()*14),c.centre.y+k*(8+o()*14)+(o()-.5)*18,6+o()*8,.1+o()*.12)}const[h,l]=Be(e,t);i(l),l.lineCap="butt";const f=(c,u,w,k,m)=>{l.strokeStyle=k,l.lineWidth=w,l.setLineDash(m??[]),l.beginPath(),l.moveTo(c.x,c.y),l.lineTo(u.x,u.y),l.stroke()},g=te.outline;l.setLineDash([]),l.strokeStyle=me,l.lineWidth=2.4,l.beginPath(),g.forEach((c,u)=>u?l.lineTo(c.x,c.y):l.moveTo(c.x,c.y)),l.closePath(),l.stroke(),l.save(),l.beginPath(),g.forEach((c,u)=>u?l.lineTo(c.x,c.y):l.moveTo(c.x,c.y)),l.closePath(),l.clip(),l.strokeStyle=Me,l.lineWidth=1,l.setLineDash([6,6]),l.beginPath(),g.forEach((c,u)=>u?l.lineTo(c.x,c.y):l.moveTo(c.x,c.y)),l.closePath(),l.lineWidth=14,l.globalCompositeOperation="source-over",l.restore();const y=te.landing,S=y.lengthFt,x=y.halfWidthFt;for(const c of[-1,1]){const u=c*x,w=c*(x+6);f(Q(0,u),Q(S,u),1.6,me),f(Q(0,w),Q(S,w),1,me);for(let k=20;k<S;k+=50){l.save();const m=Q(k,c*(x+3));l.translate(m.x,m.y),l.rotate(Math.atan2(We.y,We.x)),l.fillStyle=me,l.fillRect(-4,-3,8,6),l.restore()}}f(Q(0,0),Q(330,0),1.5,Me);for(let c=330;c<S;c+=30)f(Q(c,0),Q(c+15,0),1,me);for(let c=4;c<330;c+=30)f(Q(c,2.2),Q(c+12,2.2),.7,me);{l.save();const c=Q(4,0);l.translate(c.x,c.y),l.rotate(Math.atan2(We.y,We.x)),l.fillStyle=me,l.fillRect(-4,-x-6,7,2*x+12),l.restore()}for(let c=0;c<S;c+=20)f(Q(c,-58),Q(c+10,-58),1.6,An),f(Q(c+10,-58),Q(c+20,-58),1.6,me);const b=(c,u)=>{l.save(),l.translate(c.x,c.y),l.transform(0,1,1,0,0,0),l.fillStyle=me,l.font=`bold ${u}px "Arial Narrow", "Helvetica Neue", Arial, sans-serif`,l.textAlign="center",l.textBaseline="middle",l.scale(.82,1),l.fillText("70",0,0),l.restore()};for(const c of te.hullNumbers)b(c.at,46);for(const c of te.cats){const u=(c.end.x-c.start.x)/c.stroke,w=(c.end.y-c.start.y)/c.stroke,k=-w,m=u,v=(z,A=0)=>({x:c.start.x+u*z+k*A,y:c.start.y+w*z+m*A});for(const z of[-14,14])for(let A=0;A<c.stroke;A+=24)f(v(A,z),v(A+12,z),.8,me);f(v(-110),v(-2),1,Me),f(v(0,-5),v(0,5),1.5,Me),f(v(-60,-4),v(-60,4),1,Me),f(v(c.stroke-6,-6),v(c.stroke-6,6),1.2,me)}for(const c of te.jbd){const u=te.cats.find(m=>m.name===c.cat),w=(u.start.x-u.end.x)/u.stroke,k=(u.start.y-u.end.y)/u.stroke;l.save(),l.translate(c.centre.x,c.centre.y),l.rotate(Math.atan2(k,w)),l.fillStyle="rgba(30,31,33,0.9)",l.fillRect(0,-c.width/2,13,c.width),l.strokeStyle="rgba(120,122,124,0.9)",l.lineWidth=.5;for(let m=0;m<=3;m++)l.beginPath(),l.moveTo(0,-c.width/2+m*c.width/3),l.lineTo(13,-c.width/2+m*c.width/3),l.stroke();l.strokeRect(0,-c.width/2,13,c.width),l.fillStyle=Me,l.fillRect(-1.5,-c.width/2,1.2,c.width),l.restore()}for(const c of te.elevators){const u=Math.min(c.y0,c.y1),w=Math.max(c.y0,c.y1),k=c.side==="starboard",m=k?u-6:w+6,v=k?w:u;l.setLineDash([5,4]),l.strokeStyle=Me,l.lineWidth=1.2,l.strokeRect(c.x0+3,Math.min(m,v)+3,c.x1-c.x0-6,Math.abs(v-m)-6),l.setLineDash([]);for(let z=c.x0;z<c.x1;z+=4)l.fillStyle=Math.round((z-c.x0)/4)%2?"#1b1b1b":Me,l.fillRect(z,m-1,4,2)}l.setLineDash([4,3]),l.strokeStyle="#d98a2b",l.lineWidth=1,l.strokeRect(470,55,90,45),l.strokeRect(720,60,120,40),l.strokeRect(930,40,100,55),l.strokeRect(150,50,60,40),l.setLineDash([]),l.strokeStyle=Me,l.lineWidth=1,f({x:370,y:58},{x:1060,y:66},1,Me),f({x:30,y:-45},{x:250,y:-70},1,Me,[8,6]);for(let c=0;c<9;c++){const u=380+c*70,w=70+c%2*18;l.fillStyle=Me,l.fillRect(u,w,3,3)}l.setLineDash([]),l.strokeStyle=me,l.lineWidth=1.4,l.beginPath(),l.arc(560,-124,11,0,Math.PI*2),l.stroke(),l.fillStyle=me,l.fillRect(556,-128,8,8);for(const c of te.wires){f(c.a,c.b,1.2,"rgba(20,20,20,0.6)");for(const u of[c.a,c.b])l.fillStyle="rgba(200,200,190,0.9)",l.fillRect(u.x-3,u.y-3,6,6)}l.strokeStyle=me,l.lineWidth=.8,l.strokeRect(te.lsoPlatform.pos.x-10,te.lsoPlatform.pos.y-5,20,10),l.setTransform(1,0,0,1,0,0),l.globalCompositeOperation="destination-out";for(let c=0;c<16e4;c++){const u=o()*e,w=o()*t,k=.6+o()*2.2;l.fillStyle=`rgba(0,0,0,${.25+o()*.75})`,l.fillRect(u,w,k,k*(.4+o()))}i(l);for(let c=0;c<500;c++){const u=Q(80+o()*520,(o()-.5)*70);l.strokeStyle=`rgba(0,0,0,${.2+o()*.4})`,l.lineWidth=.5+o()*1.2,l.beginPath(),l.moveTo(u.x,u.y),l.lineTo(u.x+We.x*(10+o()*60),u.y+We.y*(10+o()*60)),l.stroke()}l.globalCompositeOperation="source-over";for(const c of te.cats){s.save(),s.translate(c.start.x,c.start.y),s.rotate(Math.atan2(c.end.y-c.start.y,c.end.x-c.start.x));const u=s.createLinearGradient(0,-6,0,6);u.addColorStop(0,"rgba(10,10,10,0)"),u.addColorStop(.5,"rgba(10,10,10,0.5)"),u.addColorStop(1,"rgba(10,10,10,0)"),s.fillStyle=u,s.fillRect(-8,-6,c.stroke+10,12),s.fillStyle="#26282a",s.fillRect(-4,-1.6,c.stroke+6,3.2),s.fillStyle="#5c5f61",s.fillRect(-4,-1.6,c.stroke+6,.35),s.fillRect(-4,1.25,c.stroke+6,.35),s.fillStyle="#0c0c0c",s.fillRect(-4,-.3,c.stroke+6,.6),s.fillStyle="#2a2c2e";for(let w=0;w<c.stroke;w+=8)s.fillRect(w,-1.6,.3,3.2);s.restore()}return{base:r,paint:h}}function Tn(e){const{base:t,paint:a}=Pn(),n=qe(a,!0,!1,e);return n.premultiplyAlpha=!0,{map:qe(t,!0,!1,e),paint:n}}const fo=2.4;function Ln(e){const[a,n]=Be(256,256),r=Xe(5),s=n.createImageData(256,256);for(let d=0;d<256*256;d++){const h=128+(r()-.5)*46+(r()<.04?-30:0);s.data[d*4]=s.data[d*4+1]=s.data[d*4+2]=h,s.data[d*4+3]=255}n.putImageData(s,0,0);const o=256/fo,i=256/2,p=256/2;n.fillStyle="rgb(60,60,60)",n.beginPath(),n.arc(i,p,.09*o,0,Math.PI*2),n.fill(),n.fillStyle="rgb(150,150,150)",n.beginPath(),n.arc(i,p,.065*o,0,Math.PI*2),n.fill(),n.fillStyle="rgb(35,35,35)";for(let d=0;d<4;d++)n.save(),n.translate(i,p),n.rotate(d*Math.PI/2+.4),n.fillRect(.015*o,-.012*o,.06*o,.024*o),n.restore();return qe(a,!1,!0,e)}function Fn(e,t,a){const[s,o]=Be(2048,512),i=Xe(11),p=f=>512*(1-(f-e)/(0-e)),d=p(t);o.fillStyle="#7e8183",o.fillRect(0,0,2048,512),o.fillStyle="#4a2622",o.fillRect(0,p(t-1.3),2048,512),o.fillStyle="#151618",o.fillRect(0,p(t+1.3),2048,p(t-1.3)-p(t+1.3));const h=o.createLinearGradient(0,p(t+7),0,p(t+2.3));h.addColorStop(0,"rgba(40,40,38,0)"),h.addColorStop(1,"rgba(40,40,38,0.35)"),o.fillStyle=h,o.fillRect(0,p(t+7),2048,p(t+2.3)-p(t+7)),o.strokeStyle="rgba(40,44,48,0.25)",o.lineWidth=1;for(let f=t+3;f<-1;f+=2.6)o.beginPath(),o.moveTo(0,p(f)),o.lineTo(2048,p(f)),o.stroke();for(let f=0;f<2048;f+=2048/110)o.beginPath(),o.moveTo(f+i()*3,0),o.lineTo(f+i()*3,d),o.stroke();for(let f=0;f<160;f++){const g=i()*2048,y=i()*d,S=20+i()*120,x=10+i()*60;o.fillStyle=i()<.5?`rgba(60,64,68,${.04+i()*.06})`:`rgba(180,186,190,${.03+i()*.05})`,o.fillRect(g,y,S,x)}for(let f=0;f<420;f++){const g=i()*2048,y=i()*d*.9,S=10+i()*90,x=o.createLinearGradient(0,y,0,y+S),b=i()<.55;x.addColorStop(0,b?`rgba(110,60,35,${.25+i()*.3})`:`rgba(40,40,40,${.2+i()*.25})`),x.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=x,o.fillRect(g,y,.8+i()*2.2,S)}o.fillStyle="rgba(20,20,20,0.8)";for(let f=0;f<90;f++){const g=i()*2048,y=p(t+2.5+i()*8);o.fillRect(g,y,3,2)}const l=(f,g,y,S,x)=>{const b=o.createLinearGradient(0,g,0,g+y);b.addColorStop(0,x?`rgba(95,58,36,${S})`:`rgba(32,33,33,${S})`),b.addColorStop(.35,x?`rgba(95,58,36,${S*.6})`:`rgba(32,33,33,${S*.6})`),b.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=b,o.fillRect(f,g,1+i()*2.5,y)};for(const[f,g]of[[-3.3,170],[-11.1,150],[-7.2,40]])for(let y=0;y<g;y++){const S=i()*2048,x=p(f)+i()*3,b=(1+i()*(f<-10?4:6))*(512/-e);o.fillStyle="rgba(18,18,18,0.7)",o.fillRect(S,x-1,2,2),l(S,x,b,.18+i()*.3,i()<.35),i()<.3&&l(S+2+i()*3,x,b*.6,.1+i()*.15,!1)}{const f=o.createLinearGradient(0,p(-11),0,p(-14));f.addColorStop(0,"rgba(38,38,36,0.22)"),f.addColorStop(1,"rgba(38,38,36,0)"),o.fillStyle=f,o.fillRect(0,p(-11),2048,p(-14)-p(-11))}for(const f of[.055,.075]){const g=f*2048,y=p(-7);o.fillStyle="#26282a",o.beginPath(),o.ellipse(g,y,9,6,0,0,Math.PI*2),o.fill();const S=o.createLinearGradient(0,y,0,y+70);S.addColorStop(0,"rgba(90,55,35,0.3)"),S.addColorStop(1,"rgba(90,55,35,0)"),o.fillStyle=S,o.fillRect(g-5,y,10,70)}return qe(s,!0,!1,a)}const ho=12;function Rn(e){const[a,n]=Be(512,512),r=Xe(23);n.fillStyle="rgb(236,238,240)",n.fillRect(0,0,512,512);const s=512/ho;for(let o=0;o<70;o++){const i=r()*512,p=r()*512,d=(1+r()*4)*s,h=(.6+r()*2.5)*s;n.fillStyle=r()<.5?`rgba(120,125,130,${.05+r()*.07})`:`rgba(255,255,255,${.05+r()*.08})`;for(const l of[0,-512,512])for(const f of[0,-512,512])n.fillRect(i+l,p+f,d,h)}n.strokeStyle="rgba(70,75,80,0.35)",n.lineWidth=1;for(let o=0;o<512;o+=2.4*s)n.beginPath(),n.moveTo(0,o),n.lineTo(512,o),n.stroke();for(let o=0;o<512;o+=3*s)n.beginPath(),n.moveTo(o,0),n.lineTo(o,512),n.stroke();for(let o=0;o<90;o++){const i=r()*512,p=r()*512,d=(.5+r()*3)*s,h=n.createLinearGradient(0,p,0,p+d);h.addColorStop(0,r()<.5?"rgba(115,70,45,0.35)":"rgba(50,50,50,0.25)"),h.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=h;for(const l of[0,-512])n.fillRect(i,p+l,1+r()*1.5,d)}return qe(a,!0,!0,e)}function Nn(e="70"){const[t,a]=Be(512,384);return a.font='bold 330px "Arial Narrow", "Helvetica Neue", Arial, sans-serif',a.textAlign="center",a.textBaseline="middle",a.save(),a.translate(256,196),a.scale(.78,1),a.fillStyle="#101112",a.fillText(e,14,12),a.fillStyle="#ecebe6",a.fillText(e,0,0),a.restore(),qe(t,!0,!1,4)}const En=1.5;function Cn(){const[e,t]=Be(128,64);return t.fillStyle="#d9dcdf",t.fillRect(0,2,128,5),t.fillRect(0,30,128,3),t.fillRect(0,2,6,62),qe(e,!0,!0,4)}function _n(){const[e,t]=Be(64,64),a=t.createLinearGradient(0,64,0,0);return a.addColorStop(0,"#2c2e30"),a.addColorStop(.5,"#141516"),a.addColorStop(1,"#090a0a"),t.fillStyle=a,t.fillRect(0,0,64,64),qe(e,!0,!1,1)}function No(e,t,a="#d9dcdf",n=!1){const[s,o]=Be(128,128);o.strokeStyle=a,o.lineWidth=t;const i=128/e;o.beginPath();for(let p=0;p<=e;p++)n?(o.moveTo(p*i-128,0),o.lineTo(p*i,128),o.moveTo(p*i+128,0),o.lineTo(p*i,128),o.moveTo(p*i,0),o.lineTo(p*i-128,128),o.moveTo(p*i,0),o.lineTo(p*i+128,128)):(o.moveTo(p*i,0),o.lineTo(p*i,128),o.moveTo(0,p*i),o.lineTo(128,p*i));return o.stroke(),o.lineWidth=t*2.2,o.strokeRect(0,0,128,128),qe(s,!0,!0,8)}const ga=(e,t)=>zn(t/Y+546,e/Y);function Eo(e){const t=new Set(wa.map(h=>+h.toFixed(4))),a=e?4:40;for(let h=Ne;h<pe;h+=a)t.add(+h.toFixed(4));for(let h=pe-uo;h<pe;h+=e?.8:2.5)t.add(+h.toFixed(4));t.add(pe);const n=[...t].sort((h,l)=>h-l),r=e?16:1,s=[],o=[],i=[];for(const h of n){const l=Se(h),f=Ee(h),g=Je(h);for(let y=0;y<=r;y++){const S=l+(f-l)*y/r;s.push(S,g,h),o.push(...ga(S,h))}}const p=r+1;for(let h=0;h<n.length-1;h++)for(let l=0;l<r;l++){const f=h*p+l,g=f+1,y=f+p,S=y+1;i.push(f,g,y,g,S,y)}const d=new de;if(d.setAttribute("position",new j(new Float32Array(s),3)),d.setAttribute("uv",new j(new Float32Array(o),2)),d.setIndex(i),d.computeVertexNormals(),d.attributes.normal.getY(0)<0){for(let h=0;h<i.length;h+=3)[i[h+1],i[h+2]]=[i[h+2],i[h+1]];d.setIndex(i),d.computeVertexNormals()}return d}const Co=.9;function ya(e){const t=Math.min(e.xIn,e.xOut),a=Math.max(e.xIn,e.xOut),n=new de,r=[[t,e.z0],[a,e.z0],[a,e.z1],[t,e.z1]],s=r.flatMap(([p,d])=>[p,0,d]);n.setAttribute("position",new j(new Float32Array(s),3)),n.setAttribute("uv",new j(new Float32Array(r.flatMap(([p,d])=>ga(p,d))),2)),n.setIndex([0,2,1,0,3,2]),n.computeVertexNormals();const o=wo(new ye(a-t,Co,e.z1-e.z0).translate((t+a)/2,-Co/2-.01,(e.z0+e.z1)/2).toNonIndexed());return Ve([n.toNonIndexed(),o],!0)}const _o=4;function In(e){const t=[],r=(e-.16)/3;for(let s=0;s<3;s++){const o=-e/2+r/2+s*(r+.08);t.push(new ye(r,.22,_o).translate(o,-.08,_o/2));for(let i=0;i<4;i++)t.push(new ye(r*.96,.12,.12).translate(o,-.25,.5+i*1))}return wo(Ve(t.map(s=>s.toNonIndexed()),!1))}function Wn(e){const t=new Le;t.name="carrier:deck-dynamic";const a=In(At[0].widthM),n=new Fe(a,e.jbd,At.length);n.name="carrier:jbd";const r=new He(.12,.12,1,8),s=new Fe(r,e.steel,At.length*2);s.name="carrier:jbd-struts";const o=At.map(k=>{const m=k.cat.dir.clone().negate();return{n:k.n,hinge:new M(k.centre.x,0,k.centre.z),aft:m,widthM:k.widthM,angleDeg:0,raisedDeg:k.raisedDeg}}),i=new K,p=new K,d=new xe,h=new M,l=new M,f=new M,g=new M(0,1,0),y=k=>{const m=o[k],v=Math.atan2(m.aft.x,m.aft.z),z=m.angleDeg*Math.PI/180;i.makeRotationY(v).setPosition(m.hinge.x,m.hinge.y,m.hinge.z),p.makeRotationX(-z),n.setMatrixAt(k,i.clone().multiply(p));for(const A of[0,1]){const F=(A?1:-1)*m.widthM*.3;h.set(F,-.05,3.2).applyMatrix4(i),l.set(F,-.3,1.7).applyMatrix4(p).applyMatrix4(i),f.subVectors(l,h);const N=m.angleDeg<3?1e-4:f.length();d.setFromUnitVectors(g,f.normalize()),s.setMatrixAt(k*2+A,new K().compose(h.clone().add(l).multiplyScalar(.5),d,new M(1,N,1)))}n.instanceMatrix.needsUpdate=!0,s.instanceMatrix.needsUpdate=!0};o.forEach((k,m)=>y(m)),n.computeBoundingSphere(),s.computeBoundingSphere(),n.frustumCulled=s.frustumCulled=!1;const S=Ve([new ye(.45,.14,1.5).translate(0,.05,0).toNonIndexed(),new ye(.16,.32,.5).translate(0,.2,-.3).toNonIndexed()],!1),x=new Fe(S,e.steel,Oe.length);x.name="carrier:shuttles",x.frustumCulled=!1;const b=Oe.map(()=>0),c=k=>{const m=Oe[k],v=b[k],z=m.start.x+(m.end.x-m.start.x)*v,A=m.start.z+(m.end.z-m.start.z)*v;x.setMatrixAt(k,L([z,Je(A),A],[0,Math.atan2(m.dir.x,m.dir.z)+Math.PI,0])),x.instanceMatrix.needsUpdate=!0};Oe.forEach((k,m)=>c(m)),t.add(x);const u=$e.map(k=>{const m=new re(ya(k),[e.deck,e.grey]);return m.name=`carrier:elevator-${k.n}`,m.castShadow=m.receiveShadow=!0,t.add(m),m}),w=$e.map(()=>0);return{group:t,jbds:o,shuttleT:b,elevators:u,elevatorLevel:w,setJbd(k,m){const v=k-1,z=o[v];z.angleDeg=Math.min(1,Math.max(0,m))*z.raisedDeg,y(v)},setShuttle(k,m){b[k-1]=Math.min(1,Math.max(0,m)),c(k-1)},setElevator(k,m){const v=Math.min(1,Math.max(0,m));w[k-1]=v,u[k-1].position.y=v*le}}}function Hn(e){const t=new Le;t.name="carrier:wires";const a=new Fe(new He(Fo,Fo,1,6),e.wire,dt.length),n=new Fe(new He(.45,.45,.3,14),e.steel,dt.length*2),r=new Fe(new ye(1.4,.25,1),e.greyDark,dt.length*2),s=7,o=new Fe(new ye(.9,.08,.12),e.steel,dt.length*s),i=new M(0,1,0),p=new xe;dt.forEach((d,h)=>{const l=new M(d.a.x,Je(d.a.z)+mt,d.a.z),f=new M(d.b.x,Je(d.b.z)+mt,d.b.z),g=new M().subVectors(f,l);p.setFromUnitVectors(i,g.clone().normalize()),a.setMatrixAt(h,new K().compose(l.clone().add(f).multiplyScalar(.5),p,new M(1,g.length(),1)));const y=Math.atan2(g.x,g.z);[l,f].forEach((S,x)=>{const b=g.clone().normalize().multiplyScalar(x?.9:-.9);n.setMatrixAt(h*2+x,L([S.x+b.x,.12,S.z+b.z])),r.setMatrixAt(h*2+x,L([S.x+b.x*1.6,.05,S.z+b.z*1.6],[0,y,0]))});for(let S=0;S<s;S++){const x=l.clone().lerp(f,(S+1)/(s+1));o.setMatrixAt(h*s+S,L([x.x,.035,x.z],[0,y+Math.PI/2,0]))}});for(const d of[a,n,r,o])d.instanceMatrix.needsUpdate=!0,d.computeBoundingSphere(),d.castShadow=!0,d.receiveShadow=!0,t.add(d);return a.name="carrier:pendants",n.name="carrier:sheaves",r.name="carrier:sheave-housings",o.name="carrier:wire-supports",t}function On(){const e=[];for(let t=6;t<213;t+=15.2){const a=he.x+ge.x*t,n=he.z+ge.z*t;e.push(L([a+.6,Je(n)+.012,n]))}return e}function Vn(e){const t=he.z+ge.z*61,a=Se(t);e.aabb("grey",a-3.5,-1.6,t-4,a+.2,-1.2,t+4),e.aabb("greyDark",a-3.5,-1.2,t-4,a-3.3,.6,t+4)}function $n(e){for(const t of Oe){const a=Math.atan2(t.dir.x,t.dir.z),n=t.strokeM+2.5,r=new M(t.start.x+t.dir.x*(t.strokeM/2-.5),0,t.start.z+t.dir.z*(t.strokeM/2-.5)),s=new M(t.dir.z,0,-t.dir.x);e.box("black",.075,.012,n,L([r.x,.006,r.z],[0,a,0]));for(const o of[-1,1]){const i=r.clone().addScaledVector(s,o*.13);e.box("track",.13,.01,n,L([i.x,.005,i.z],[0,a,0]))}for(let o=0;o<t.strokeM;o+=8){const i=new M(t.start.x+t.dir.x*o,0,t.start.z+t.dir.z*o);e.box("greyDark",.42,.008,.06,L([i.x,.004,i.z],[0,a,0]))}}}function Bn(){const e=[],t=[],a=[],n=(d,h,l,f,g)=>{const y=Math.max(2,Math.round(g/2)),S=e.length/3;for(let x=0;x<=y;x++){const b=x/y,c=d.clone().lerp(h,b);for(const[u,w]of[[l,0],[f,1]])e.push(c.x+u.x,c.y+u.y,c.z+u.z),t.push(b*g,w)}for(let x=0;x<y;x++){const b=S+x*2;a.push(b,b+2,b+1,b+1,b+2,b+3)}};for(const d of Oe){const h=new M(d.start.x,.01,d.start.z),l=new M(d.end.x,.01,d.end.z),f=new M(d.dir.z,0,-d.dir.x);n(h,l,new M(0,0,0),new M(0,.9,0),d.strokeM),n(h,l,f.clone().multiplyScalar(-.9).setY(.12),f.clone().multiplyScalar(.9).setY(.12),d.strokeM)}const r=new de;r.setAttribute("position",new j(new Float32Array(e),3)),r.setAttribute("uv",new j(new Float32Array(t),2)),r.setIndex(a),r.computeVertexNormals();const s=r.attributes.normal;for(let d=0;d<s.count;d++)s.setXYZ(d,0,1,0);const o=new rt({color:15921904,roughness:1,metalness:0,transparent:!0,depthWrite:!1,side:Rt,envMapIntensity:1.2});o.name="carrier:steam",o.defines={USE_UV:""};const i={value:0};o.onBeforeCompile=d=>{d.uniforms.uSteamTime=i,d.fragmentShader=d.fragmentShader.replace("#include <common>",`#include <common>
uniform float uSteamTime;
float sHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float sNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(sHash(i), sHash(i + vec2(1, 0)), f.x), mix(sHash(i + vec2(0, 1)), sHash(i + vec2(1, 1)), f.x), f.y);
}`).replace("#include <alphamap_fragment>",`#include <alphamap_fragment>
  {
    // u: metres along the track, v: 0 at the slot -> 1 at the ribbon's far edge (up, or across)
    vec2 q = vec2(vUv.x * 0.45 - uSteamTime * 0.35, vUv.y * 2.2 - uSteamTime * 0.5);
    float n = sNoise(q) * 0.55 + sNoise(q * 2.3 + 7.1) * 0.3 + sNoise(q * 5.1 - 3.7) * 0.15;
    float puffs = smoothstep(0.45, 0.9, sNoise(vec2(vUv.x * 0.08 - uSteamTime * 0.12, 3.3)));   // leaks come and go along the stroke
    float across = (1.0 - smoothstep(0.0, 1.0, vUv.y)) * smoothstep(0.0, 0.08, vUv.y + 0.02);
    float ends = smoothstep(0.0, 4.0, vUv.x) * (1.0 - smoothstep(0.0, 1.0, vUv.x / 95.0 - 0.85));
    float atSpot = 1.0 - smoothstep(2.0, 18.0, vUv.x);  // most of it boils up around the shuttle at rest
    diffuseColor.a *= clamp(smoothstep(0.35, 0.85, n) * across * ends * (0.1 + 0.28 * puffs + 0.45 * atSpot), 0.0, 1.0);
  }`)},o.customProgramCacheKey=()=>"carrier-steam";const p=new re(r,o);return p.name="carrier:steam",p.renderOrder=5,{mesh:p,setTime(d){i.value=d}}}const at=-3.2,va=7,St=lt-va,tt=pe-va,qn=23.6,Un=27.5,Gn=ma/2,Ct=12,jn=-21.2,zt=e=>Math.min(1,Math.max(0,e)),ba=e=>{const t=zt(e);return t*t*(3-2*t)};function Bt(e){return e<Ct?-1.5+(we+1.5)*Math.pow(e/Ct,1.15):e<32?we+(Re-we)*ba((e-Ct)/20):e>250?Re+(jn-Re)*Math.pow((e-250)/(lt-250),1.6):Re}const kt=[];for(let e=0;e<=32;e+=.25)kt.push([Bt(e),e]);function Yn(e){if(e>=kt[0][0])return 0;for(let t=1;t<kt.length;t++){const[a,n]=kt[t-1],[r,s]=kt[t];if(e>=r)return n+(s-n)*(e-a)/(r-a||1)}return 32}function Jn(e){const t=e-Ct;if(t<=0)return 0;let a=Gn*(1-Math.pow(1-zt(t/125),2.2));return e>290&&(a*=1-.2*Math.pow((e-290)/(lt-290),2)),a}const Xn=e=>ba((e-18)/100);function ze(e,t){const a=t>0?Ee(e):-Se(e),n=.4+1.4*Math.min(1,Math.max(0,(e-Ne-60)/40));return t>0?a-n:Math.min(a-n,Un)}function Io(e,t){return Math.min(ze(e,t),qn)}const pt=(e,t)=>Math.pow(zt((e-Yn(t))/22),.55);function Wo(e,t,a){const n=Bt(e),r=Jn(e),s=Xn(e);let o;if(r>0&&t<we){const i=zt((t-n)/(we-n)),p=1+3*s;o=r*Math.pow(1-Math.pow(1-i,p),1/p)}else{const i=Math.max(we,n),p=n>=we?0:r,d=zt((t-i)/(le-i));o=p+(a-p)*Math.pow(d,.9+.7*s)}return o*pt(e,t)}function Kn(e){const t=new Set,a=(n,r,s)=>{for(let o=n;o<r;o+=s)t.add(+o.toFixed(3))};e?(a(0,40,1.5),a(40,130,4),a(130,280,6),a(280,St,3)):(a(0,40,8),a(40,St,30)),t.add(St);for(const n of wa)t.add(+(n-Ne).toFixed(3));return[...t].filter(n=>n>=0&&n<=St).sort((n,r)=>n-r)}const Zn=[le,-12.4,-14.2,-16,-17.6,we,-19.9,-21.6,-23.6,-25.6,-27.4,-28.9,-29.8,Re],Qn=[le,-15,we,-24,Re];function Qt(e,t){const a=e.length,n=e[0].length,r=new Float32Array(a*n*3),s=new Float32Array(a*n*2);for(let h=0;h<a;h++)for(let l=0;l<n;l++){const f=e[h][l],g=h*n+l;r.set([f.x,f.y,f.z],g*3),s.set([(f.z-Ne)/lt,(f.y-Re)/-Re],g*2)}const o=[];for(let h=0;h<a-1;h++)for(let l=0;l<n-1;l++){const f=h*n+l,g=f+1,y=f+n,S=y+1;o.push(f,y,g,g,y,S)}const i=new de;i.setAttribute("position",new j(r,3)),i.setAttribute("uv",new j(s,2)),i.setIndex(o),i.computeVertexNormals();const p=i.attributes.normal;let d=0;for(let h=0;h<p.count;h++)d+=p.getX(h)*t.x+p.getY(h)*t.y+p.getZ(h)*t.z;if(d<0){for(let h=0;h<o.length;h+=3){const l=o[h+1];o[h+1]=o[h+2],o[h+2]=l}i.setIndex(o),i.computeVertexNormals()}return i.toNonIndexed()}function Ho(e=!0){const t=Kn(e),a=e?Zn:Qn,n=[];for(const s of[-1,1]){const o=[],i=[],p=[];for(const d of t){const h=Ne+d,l=Bt(d),f=ze(h,s),g=Io(h,s),y=b=>Math.max(b,l),S=y(at),x=y(le);o.push([new M(s*f*pt(d,S),S,h),new M(s*f*pt(d,(S+x)/2),(S+x)/2,h),new M(s*f*pt(d,x),x,h)]),i.push([new M(s*f*pt(d,x),x,h),new M(s*g*pt(d,x),x,h)]),p.push(a.map(b=>{const c=y(b);return new M(s*Wo(d,c,g),c,h)}))}n.push(Qt(o,new M(s,0,0)),Qt(i,new M(0,-1,0)),Qt(p,new M(s,-.3,0)))}{const s=St,o=tt,i=Bt(s),p=[];for(const g of[-1,1]){const y=ze(o,g),S=Io(o,g),x=[new M(g*y,at,o),new M(g*y,le,o),new M(g*S,le,o),...a.slice(1).map(b=>{const c=Math.max(b,i);return new M(g*Wo(s,c,S),c,o)})];p.push(...g<0?x:x.reverse())}const d=new M(0,-7,o),h=[],l=[];for(let g=0;g<p.length;g++){const y=p[g],S=p[(g+1)%p.length];for(const x of[d,y,S])h.push(x.x,x.y,x.z),l.push((x.z-Ne)/lt,(x.y-Re)/-Re)}const f=new de;if(f.setAttribute("position",new j(new Float32Array(h),3)),f.setAttribute("uv",new j(new Float32Array(l),2)),f.computeVertexNormals(),f.attributes.normal.getZ(0)<0){const g=f.attributes.position.array,y=f.attributes.uv.array;for(let S=0;S<g.length/9;S++){for(let x=0;x<3;x++){const b=g[S*9+3+x];g[S*9+3+x]=g[S*9+6+x],g[S*9+6+x]=b}for(let x=0;x<2;x++){const b=y[S*6+2+x];y[S*6+2+x]=y[S*6+4+x],y[S*6+4+x]=b}}f.computeVertexNormals()}n.push(f)}const r=Ve(n,!1);return r.computeBoundingSphere(),r}const Te=at,es=te.outline.map(e=>{const t=De(e);return[t.x,t.z]});function eo(e,t="grey"){e.add(t,fe(es,Te,-.02,{top:!1,bottom:!0}))}function vo(e,t,a,n){const s=Math.hypot(t.x-e.x,t.z-e.z)/En,o=[e.x,a,e.z,t.x,a,t.z,t.x,a+n,t.z,e.x,a,e.z,t.x,a+n,t.z,e.x,a+n,e.z],i=[0,0,s,0,s,1,0,0,s,1,0,1],p=new de;return p.setAttribute("position",new j(new Float32Array(o),3)),p.setAttribute("uv",new j(new Float32Array(i),2)),p.computeVertexNormals(),p}function ts(e){const t=$e.filter(n=>n.side===e).map(n=>[n.z0-.5,n.z1+.5]);let a=[[Ne+22,pe-6]];for(const[n,r]of t)a=a.flatMap(([s,o])=>r<=s||n>=o?[[s,o]]:[[s,n],[r,o]].filter(([i,p])=>p-i>2));return a}function Oo(e,t,a){const n=Xe(3),r=1.5,s=-1.75;for(const o of["starboard","port"]){const i=o==="starboard"?1:-1,p=o==="starboard"?bn:Sn,d=o==="starboard"?Ee:Se;for(const[h,l]of ts(o)){const f=[h,...p.map(g=>g.z).filter(g=>g>h&&g<l),l];for(let g=0;g<f.length-1;g++){const y=f[g],S=f[g+1],x=new M(d(y),0,y),b=new M(d(S),0,S),c=new M().subVectors(b,x),u=c.length();c.normalize();const w=new M(c.z,0,-c.x);w.x*i<0&&w.negate();const k=x.clone().addScaledVector(w,r),m=b.clone().addScaledVector(w,r);if(e.add("grating",fe([[x.x,x.z],[b.x,b.z],[m.x,m.z],[k.x,k.z]],s-.2,s)),a){e.add("rail",vo(k,m,s,1.05),void 0,!1);const v=k.clone().addScaledVector(w,1.4),z=m.clone().addScaledVector(w,1.4);e.add("net",os([k.x,s+.95,k.z],[m.x,s+.95,m.z],[z.x,-.35,z.z],[v.x,-.35,v.z])),G(e,"greyDark",new M(v.x,-.35,v.z),new M(z.x,-.35,z.z),.06);for(let A=0;A<=u;A+=3){const F=k.clone().addScaledVector(c,A),N=F.clone().addScaledVector(w,1.4);G(e,"greyDark",new M(F.x,s+.95,F.z),new M(N.x,-.35,N.z),.05)}}for(let v=2;v<u-2;){if(n()<.3){v+=4+n()*6;continue}const z=3+Math.floor(n()*5),A=v,F=Math.atan2(c.x,c.z);for(let N=0;N<z&&v<u-2;N++,v+=1.4){const O=x.clone().addScaledVector(c,v).addScaledVector(w,r*.55);for(const B of[0,1])t.push(L([O.x,s+.4+B*.66,O.z],[Math.PI/2,F,0]))}if(a){const N=x.clone().addScaledVector(c,A-.7).addScaledVector(w,r*.55),O=x.clone().addScaledVector(c,v-.7).addScaledVector(w,r*.55);for(const B of[s+.06,s+.72])G(e,"greyDark",new M(N.x,B,N.z),new M(O.x,B,O.z),.08)}v+=1.5+n()*3}}}}}function os(e,t,a,n){const r=new de;return r.setAttribute("position",new j(new Float32Array([...e,...t,...a,...e,...a,...n]),3)),r.computeVertexNormals(),r}function Vo(e,t,a){const n=Xe(17),r=[[-118,-108,2.2,2.6],[-104,-97,1.6,4.4],[-86,-79,2.4,3],[-52,-46,1.8,2.4],[-44.5,-39.5,2.6,5.4],[-14,-4,2,3],[-2,3.5,1.4,6],[12,22,2.8,2.6],[28,34,1.6,4.8],[40,52,2.2,3.4],[56,63,1.7,2.4],[90,100,2.4,3.2],[104,112,1.8,5],[118,126,2.4,2.8],[140,146,2,4.2],[156,160,1.6,3]];for(const[o,i,p,d]of r)$o(e,1,o,i,p,d,a,t,n);const s=[[-130,-122,1.8,2.4],[-118,-112,2.2,4.2],[158,163,1.6,2.6]];for(const[o,i,p,d]of s)$o(e,-1,o,i,p,d,a,t,n);if(a)for(const o of[-1,1])for(let i=Ne+30;i<pe-8;i+=4.5+n()*3){if($e.some(d=>i>d.z0-1&&i<d.z1+1))continue;const p=o>0?Ee(i):Se(i);e.add("glass",Ye(.7,.5),L([p+o*.03,-2.3,i],[0,o*Math.PI/2,0]),!1)}}function $o(e,t,a,n,r,s,o,i,p){const d=(a+n)/2,h=t>0?Ee(d):Se(d),l=t*ze(d,t),f=h+t*r,g=Te-s;e.aabb("grey",Math.min(l,f),g,a,Math.max(l,f),Te,n),e.aabb("greyDark",Math.min(l,f+t*.1),Te-.25,a-.1,Math.max(l,f+t*.1),Te,n+.1);for(const x of[a+.6,n-.6]){const b=new M(f-t*.3,g,x),c=new M(t*ze(x,t),g-Math.max(2,r*1.2),x);G(e,"greyDark",b,c,.35)}if(r>2&&p()<.6)for(let x=a+1;x<n-.8;x+=1.4)i.push(L([f-t*.6,Te-.6,x],[Math.PI/2,0,0]));if(!o)return;const y=t*Math.PI/2,S=Math.max(1,Math.floor((n-a)/4));for(let x=0;x<S;x++){const b=a+(x+.5)*(n-a)/S,c=p();c<.35&&s>2.6?e.add("interior",Ye(.85,1.8),L([f+t*.02,g+.95,b],[0,y,0]),!1):c<.75?e.add("glass",Ye(.6,.45),L([f+t*.02,Te-.9,b],[0,y,0]),!1):e.box("greyDark",.2,.5,1,L([f+t*.1,Te-1,b]))}}function as(e){for(const t of[-1,1]){const r=we+4.2,s=t*(Bo(r)+.4),o=t*(Bo(r)+.4);Qe(e,"steel",new M(s,r,-30),new M(o,r,-12),.13,8),e.box("greyDark",.6,.8,.8,L([s-t*.1,r,-30-.3])),Qe(e,"steel",new M(o,r,-12),new M(o-t*.3,r+6.5,-14),.025,3),e.box("rubber",.5,3.5,.05,L([o+t*.15,r-1.9,-12-.4],[0,t*Math.PI/2,0]))}}const Bo=e=>{const t=Math.min(1,Math.max(0,(e-we)/(le-we)));return 20.4+(23.6-20.4)*Math.pow(t,.9)};function qo(e){const t=Xe(9);for(let a=Ne+70;a<pe-14;a+=0){const n=9+t()*9,r=a+n/2,s=-Se(r),o=ze(r,-1);if(s-o>2.5){const p=[3.2,4.6,6.2][Math.floor(t()*3)],d=-(s-(.6+t()*1.8)),h=-o+.2;e.aabb("grey",d,Te-p,a+.4,h,Te,a+n-.4);const l=le+1,f=Te-p,g=d- -o,y=f-l,S=Math.hypot(g,y);for(const x of[a+1.2,a+n-1.2])e.box("greyDark",.5,S,.5,L([(-o+d)/2,(l+f)/2,x],[0,0,Math.atan2(-g,y)]))}a+=n}}function to(e,t,a,n,r,s){const o=s-r,i=new M(-a.z,0,a.x),p=Math.atan2(a.x,a.z),d=t.clone().addScaledVector(a,.04);e.add("interior",Ye(n,o),L([d.x,(r+s)/2,d.z],[0,p,0]),!1);const h=t.clone().addScaledVector(a,.3);e.box("grey",n+1.2,.8,.6,L([h.x,s+.4,h.z],[0,p,0]));for(const l of[-1,1]){const f=h.clone().addScaledVector(i,l*(n/2+.3));e.box("grey",.6,o,.6,L([f.x,(r+s)/2,f.z],[0,p,0]))}e.box("greyDark",n,.25,.9,L([h.x,r-.12,h.z],[0,p,0]))}function Ye(e,t){const a=new de,n=e/2,r=t/2;return a.setAttribute("position",new j(new Float32Array([-n,-r,0,n,-r,0,n,r,0,-n,-r,0,n,r,0,-n,r,0]),3)),a.setAttribute("uv",new j(new Float32Array([0,0,1,0,1,1,0,0,1,1,0,1]),2)),a.computeVertexNormals(),a}function Uo(e){const t=le+.3,a=vn-.3;$e.forEach((s,o)=>{const i=s.side==="starboard"?1:-1,p=(s.z0+s.z1)/2,d=s.z1-s.z0-3;to(e,new M(i*ze(p,i),0,p),new M(i,0,0),d,t,a);const h=i*(ze(p,i)+.18),l=d/4,f=[.1,.05,.4,.08][o]*d;for(let g=0;g<4;g++){const y=p-d/2+l/2+g*.3+(g===0?f:0);e.box("grey",.22,a-t-.2,l,L([h+i*g*.26,(t+a)/2,y]));for(let S=1;S<4;S++)e.box("greyDark",.08,.14,l*.94,L([h+i*g*.26+i*.13,t+(a-t)*S/4,y]))}e.box("greyDark",.7,.45,d+2,L([h,a-.1,p]))});for(const[s,o,i]of[[1,-11,12],[-1,128,10]])to(e,new M(s*ze(o,s),0,o),new M(s,0,0),i,t+1.5,a);to(e,new M(0,0,tt),new M(0,0,1),30,le+.4,at-.6);const n=ze(tt,1)-.3,r=-ze(tt,-1)+.3;e.aabb("greyDark",r,le-.5,tt-.2,n,le,pe-1.2);for(const s of[r+.6,-9,9,n-.6])e.box("grey",.9,at-le,.9,L([s,(at+le)/2,pe-1.8]));for(const s of[r,n])e.aabb("grey",s-.25,le,tt,s+.25,at,pe-1.2)}function ns(e,t,a,n){const r=(s,o,i,p=[0,0,0])=>new K().makeRotationY(n).multiply(L([s,o,i],p)).premultiply(new K().makeTranslation(a.x,a.y,a.z));if(t==="ciws")e.cyl("grey",.75,.85,.9,r(0,.45,0)),e.box("white",1.5,.5,1.5,r(0,1.15,0)),e.box("white",.35,1.3,1.2,r(-.75,1.95,0)),e.box("white",.35,1.3,1.2,r(.75,1.95,0)),e.cyl("white",.55,.55,1.2,r(0,1.9,.35,[Math.PI/2,0,0]),12),e.add("white",new He(.62,.72,1.2,16),r(0,3.05,-.05)),e.sphere("white",.62,r(0,3.65,-.05),16,!0),e.box("black",.5,.22,.06,r(0,2.75,-.7)),e.cyl("white",.2,.24,.9,r(0,1.95,-.9,[Math.PI/2,0,0]),10),e.cyl("black",.1,.12,1.4,r(0,1.95,-1.95,[Math.PI/2,0,0]),8);else if(t==="ram"){e.cyl("grey",.65,.85,1.1,r(0,.55,0)),e.box("white",1.9,1.6,2.5,r(0,1.95,.1,[-.15,0,0]));for(let s=0;s<3;s++)for(let o=0;o<7;o++)e.cyl("black",.1,.1,.06,r(-.72+o*.24,1.7+s*.36,-1.15-s*.055,[Math.PI/2-.15,0,0]),6);e.box("white",.5,.35,.6,r(.6,2.95,.4)),e.box("greyDark",.12,1.4,.8,r(-1.05,1.9,.3))}else{e.cyl("grey",.75,.95,1,r(0,.5,0)),e.box("grey",1.2,.8,1.2,r(0,1.3,0)),e.box("white",2.4,1.8,3.4,r(0,2.4,0,[-.3,0,0]));for(let s=0;s<2;s++)for(let o=0;o<4;o++)e.box("greyDark",.5,.75,.04,r(-.84+o*.56,2.1+s*.82,-1.68-s*.25,[-.3,0,0]));e.cyl("grey",.35,.45,1.4,r(3.2,.7,1.5)),e.box("white",.6,.7,.6,r(3.2,1.75,1.5)),e.cyl("white",.75,.75,.25,r(3.2,2.4,1.2,[Math.PI/2,0,0]),14)}}function Go(e,t){const a=[{side:1,z:-92,kind:"ciws"},{side:-1,z:-104,kind:"nssm"},{side:-1,z:-86,kind:"ram"},{side:1,z:150,kind:"nssm"},{side:-1,z:152,kind:"ciws"},{side:1,z:132,kind:"ram"}];for(const n of a){const r=n.side>0?Ee(n.z):Se(n.z),s=r-n.side*2.5,o=r+n.side*4.5,i=-5.2;e.aabb("grey",Math.min(s,o),i-.6,n.z-4.5,Math.max(s,o),i,n.z+4.5),e.aabb("greyDark",Math.min(s,o)+1,i-3.5,n.z-.3,Math.max(s,o)-1,i-.6,n.z+.3);const p=new M(r+n.side*1.6,i,n.z);if(ns(e,n.kind,p,n.side>0?-Math.PI/2:Math.PI/2),t){const d=r+n.side*4.45;e.add("rail",vo(new M(d,0,n.z-4.5),new M(d,0,n.z+4.5),i,1.05),void 0,!1)}}}function ss(e,t,a){const n=[[1,-60],[1,-40],[1,70],[1,100],[-1,-20],[-1,30],[-1,110]];for(const[r,s]of n){const o=r>0?Ee(s):Se(s);e.box("greyDark",.6,1.2,.6,L([o+r*1.6,-2.2,s])),t.push(L([o+r*(1.6+5*Math.sin(1.3)),-2+5*Math.cos(1.3),s],[0,0,-r*1.3],[1,10,1]))}for(let r=-.8;r>-3;r-=1.2)a.push(L([he.x,r,pe+.12],[Math.PI/2,0,0]));for(let r=-12;r>-17.5;r-=1.3)a.push(L([he.x,r,tt+.12],[Math.PI/2,0,0]))}const qt=new M((be.x0+be.x1)/2,0,(be.z0+be.z1)/2),E=(be.x1-be.x0)/2,U=(be.z1-be.z0)/2,Ke=21.5,ot=be.mastTopH,$=.5,Ze=(e,t,a,n)=>[[e,t],[a,t],[a,n],[e,n]],Ue=(e,t)=>{const a=e.reduce((r,s)=>r+s[0],0)/e.length,n=e.reduce((r,s)=>r+s[1],0)/e.length;return e.map(([r,s])=>[r+Math.sign(r-a)*t,s+Math.sign(s-n)*t])};function _e(e,t,a,n,r=!1){const s=r?a.length:a.length-1;for(let o=0;o<s;o++){const i=a[o],p=a[(o+1)%a.length],d=new M(i[0],0,i[1]).applyMatrix4(t),h=new M(p[0],0,p[1]).applyMatrix4(t);e.add("rail",vo(d,h,n,1.05),void 0,!1)}}function Pt(e,t,a,n,r,s,o,i){const p=Ue(a,s);if(e.add("glass",ha(a,p,n,r),t),!!i)for(let d=0;d<a.length;d++){const h=a[d],l=a[(d+1)%a.length],f=p[d],g=p[(d+1)%a.length],y=Math.hypot(l[0]-h[0],l[1]-h[1]),S=Math.max(1,Math.round(y/o));for(let x=0;x<=S;x++){const b=x/S,c=h[0]+(l[0]-h[0])*b,u=h[1]+(l[1]-h[1])*b,w=f[0]+(g[0]-f[0])*b,k=f[1]+(g[1]-f[1])*b,m=(l[1]-h[1])/y,v=-(l[0]-h[0])/y,z=a.reduce((W,X)=>W+X[0],0)/a.length,A=a.reduce((W,X)=>W+X[1],0)/a.length,N=.04*((c-z)*m+(u-A)*v>0?1:-1),O=new M(c+m*N,n,u+v*N).applyMatrix4(t),B=new M(w+m*N,r,k+v*N).applyMatrix4(t);G(e,"greyDark",O,B,.09)}}}function oo(e,t,a,n,r,s="grey"){e.add(s,fe(a,n-.18,n),t),r&&_e(e,t,a,n,!0)}const jo=(e,t,a,n)=>Array.from({length:n},(r,s)=>{const o=s/n*Math.PI*2+Math.PI/n;return[e+Math.cos(o)*a,t+Math.sin(o)*a]});function ao(e,t){const a=new K().makeTranslation(qt.x,0,qt.z),n=(u,w,k,m=[0,0,0],v=1)=>L([u,w,k],m,v).premultiply(a),r=(u,w)=>e.add(u,w,a),s=(u,w,k)=>new M(u,w,k).applyMatrix4(a),o=t===0;if(t===2){const u="farGrey";e.aabb(u,-E,-3.2,-U,E,13.1,U,a),e.aabb(u,-4.9,13.1,-U+.5,4.3,Ke,-9.5,a),e.aabb(u,-4.4,13.1,-9.5,4.2,18.2,14,a),e.aabb(u,-6.9,13.1,13.5,3.4,16.9,25.2,a),e.cyl(u,.8,2,ot-18,n(0,(ot+18)/2,$,[0,Math.PI/4,0]),4),e.box(u,12,.5,.5,n(0,30.4,$)),e.box(u,5.5,5.2,.5,n(.5,25.5,-15.5,[-.35,.4,0]));return}if(r("grey",fe([[-E,-19.5],[-E,U],[E,U],[E,-19.5]],-3.2,10.3)),r("grey",fe([[-4.2,-18],[-4.2,-21.4],[-3,-U],[3,-U],[4.2,-21.4],[4.2,-18]],-3.2,6.4)),Pt(e,a,[[-4,-18],[-4,-21.3],[-2.9,-22.6],[2.9,-22.6],[4,-21.3],[4,-18]],6.4,8.3,.3,.9,o),r("grey",fe([[-4.4,-17.5],[-4.4,-21.6],[-3.1,-23.1],[3.1,-23.1],[4.4,-21.6],[4.4,-17.5]],8.3,10.3)),e.add("glass",Ye(11,1.45),n(-E-.12,4.6,-7.6,[.17,-Math.PI/2,0]),!1),o){for(let u=-13;u<=-2.1;u+=1.1)e.box("greyDark",.12,1.5,.09,n(-E-.16,4.6,u,[0,0,.17]));e.box("grey",.5,.25,11.4,n(-E-.2,5.45,-7.6))}for(const u of[3.4,6.8])e.aabb("grey",-E-.14,u-.1,-19.5,-E,u+.12,U,a),e.aabb("grey",E,u-.1,-19.5,E+.14,u+.12,U,a);if(o){for(const u of[-1,1])for(let w=-16;w<21;w+=5.5)(u<0?w>-13&&w<16:Math.abs(w-9)<7)||(e.add("interior",Ye(.9,1.9),n(u*(E+.03),.95,w,[0,u*Math.PI/2,0]),!1),e.box("greyDark",.08,2.15,1.15,n(u*(E+.02),1,w)),e.box("greyDark",.15,.35,.9,n(u*(E+.07),2.9,w+1.8)),e.box("greyDark",.18,.3,.3,n(u*(E+.1),2.3,w-.9)));for(const u of[-1,1])for(let w=-18.5;w<U;w+=3.9)u<0&&w>-14&&w<.5||w>-2&&w<16||e.box("grey",.14,10.1,.22,n(u*(E+.07),5,w));for(let u=-17;u<21;u+=2.2)(u<2.2||u>15.6)&&e.box("glass",.06,.45,.45,n(-E-.03,8.4,u));for(const u of[-18.6,-13.2,17.5,20.5])Qe(e,"greyDark",s(-E-.18,0,u),s(-E-.18,10.3,u),.07,5);for(const u of[-3.1,2.6])Qe(e,"greyDark",s(u,0,U+.16),s(u,15,U+.16),.08,5);for(let u=-16;u<22;u+=7.5)e.box("white",.35,.3,.4,n(-E-.35,7.1,u,[.4,0,0]));ut(e,"steel",s(-1,0,U+2.6),s(-1,3.4,U+.25),.8,new M(1,0,0)),e.aabb("grating",-E,3.3,U,E,3.42,U+1.2,a),_e(e,a,[[-E,U+1.2],[E,U+1.2]],3.42),ut(e,"steel",s(2.6,3.42,U+1),s(2.6,6.8,U+.15),.7,new M(1,0,0)),e.aabb("grating",-E,6.7,U,E,6.82,U+1.2,a),_e(e,a,[[-E,U+1.2],[E,U+1.2]],6.82),ut(e,"steel",s(E+.6,6.8,6),s(E+.6,10.3,9.4),.7,new M(1,0,0)),e.aabb("grating",E,6.7,-19.5,E+1.2,6.82,U,a),_e(e,a,[[E+1.2,-19.5],[E+1.2,U]],6.82)}if(r("grey",fe(Ze(-5.1,-22,E,17.5),10.3,13.1)),o){_e(e,a,[[-5.1,-22],[-5.1,13.5]],13.1);for(let u=-20;u<17;u+=3.4)e.box("greyDark",.12,.6,.25,n(-5.15,11.8,u));for(let u=-19;u<16;u+=4.8)e.box("glass",.06,.6,1.1,n(-5.13,11.6,u+1.6));for(let u=-20;u<17;u+=4)G(e,"greyDark",s(-E,8.9,u),s(-5,10.25,u),.14)}const p=[[-4.9,-9.5],[-4.9,-20.8],[-3.6,-22.4],[3,-22.4],[4.3,-20.8],[4.3,-9.5]];for(let u=0;u<3;u++){const w=13.1+u*2.8;if(r("grey",fe(p,w,w+.75)),Pt(e,a,p,w+.75,w+2.35,.5,1.05,o),r("grey",fe(Ue(p,.6),w+2.35,w+2.8)),o&&_e(e,a,Ue(p,.6).slice(0,5),w+2.8),u<2)for(const k of[-1,1]){const m=k<0?-4.9:4.3,v=k<0?-8.6:8.2,z=-20.6,A=-15.4;e.aabb("grey",Math.min(m,v),w+.55,z,Math.max(m,v),w+.75,A,a);const F=v-k*.9,N=Ze(F-.9,z+.4,F+.9,z+2.6);Pt(e,a,N,w+.75,w+2.2,.12,.7,o),r("grey",fe(Ue(N,.2),w+2.2,w+2.45)),o&&(_e(e,a,[[m,A],[v,A],[v,z+2.6]],w+.75),G(e,"greyDark",s(m,w-1.6,(z+A)/2),s(v+k*-.4,w+.5,(z+A)/2),.16),e.cyl("greyDark",.15,.2,1.1,n(v-k*.6,w+1.3,A-.8),6))}}if(r("grey",fe(Ue(p,.6).map(([u,w])=>[u*.92,w]),Ke,Ke+.15)),r("grey",fe(Ze(-4.4,-9.5,4.2,14),13.1,18.2)),r("grey",fe(Ze(-3.8,-8.5,3.6,6),18.2,20.6)),r("grey",fe(Ze(-4,14,E,21.5),13.1,15)),o){for(let u=-8;u<13;u+=2.6)e.box("glass",.06,.7,.9,n(-4.43,15.6,u));_e(e,a,Ze(-4.4,-9.5,4.2,14),18.2,!0),_e(e,a,Ze(-3.8,-8.5,3.6,6),20.6,!0);for(let u=-8;u<6;u+=2.8)e.box("greyDark",.6,.5,1.2,n(-2.6,18.45,u));ut(e,"steel",s(3.2,18.2,9.5),s(3.2,20.6,6.3),.7,new M(1,0,0)),ut(e,"steel",s(-3,13.1,13.4),s(-3,18.2,9.8),.7,new M(1,0,0))}const d=[[-6.9,13.5],[-6.9,24.2],[-5.9,25.2],[2.4,25.2],[3.4,24.2],[3.4,13.5]];if(r("grey",fe(d,14.6,15.3)),r("greyDark",ha(Ue(d,-.4),d,13.9,14.6)),Pt(e,a,d,15.3,17.4,.75,1,o),r("grey",fe(Ue(d,.85),17.4,17.9)),e.box("grey",.5,4.5,.5,n(-5.6,12.4,22.5,[.6,0,.35])),e.box("grey",.5,4.5,.5,n(-5.6,12.4,16,[-.5,0,.35])),o){_e(e,a,Ue(d,.85),17.9,!0);for(const u of[16,19,22])e.box("white",.4,.35,.45,n(-7.5,14.4,u,[.5,0,0]))}const h=20.6,l=33.6,f=2.3,g=.85,y=(u,w,k)=>{const m=(u-h)/(l-h),v=f+(g-f)*m;return s(w*v,u,$+k*v)},S=[[-1,-1],[1,-1],[1,1],[-1,1]];for(const[u,w]of S)Qe(e,"grey",y(h,u,w),y(l,u,w),o?.17:.24,o?6:4);const x=[h,23,24.6,26.5,28.6,30.4,32.2,l];for(let u=0;u<x.length-1;u++){const w=x[u],k=x[u+1];for(let m=0;m<4;m++){const[v,z]=S[m],[A,F]=S[(m+1)%4];o?(G(e,"grey",y(w,v,z),y(k,A,F),.1),G(e,"grey",y(w,A,F),y(k,v,z),.1),G(e,"grey",y(k,v,z),y(k,A,F),.12)):u%2===0&&G(e,"grey",y(w,v,z),y(k,A,F),.18)}}const b=[[24.6,3.6],[28.6,2.9],[32.2,2.2]];for(const[u,w]of b)oo(e,a,[[-w,$-w],[w,$-w],[w,$+w],[-w,$+w]],u,o,o?"grating":"grey");e.box("grey",13,.35,.35,n(0,30.4,$)),e.box("grey",8.4,.3,.3,n(0,26.5,$-.3));for(const u of[-1,1])G(e,"grey",y(28.6,u,-1),s(u*6.2,30.4,$),.12),G(e,"grey",y(28.6,u,1),s(u*6.2,30.4,$),.12),e.box("antenna",.5,.8,.5,n(u*6.3,29.9,$)),e.box("antenna",.7,.9,.35,n(u*4,25.95,$-.3,[0,u*.5,0]));e.cyl("grey",.14,.32,ot-l,n(0,(ot+l)/2,$),8),oo(e,a,jo(0,$,1.2,8),35.4,o),e.cyl("white",.45,.45,1.1,n(0,36.7,$),12),e.sphere("white",.55,n(0,ot-.4,$),o?12:8);const c=[[2.2,25.7,-1.2,.85],[-2.3,25.7,2,.8],[1.6,29.6,1.8,.6],[-1.5,33.3,-.4,.5],[-2.6,22.9,-18.5,1.2],[2.4,22.6,-12.5,.8],[-2.8,21.6,3.5,.9],[2.6,21.6,4,.9]];for(const[u,w,k,m]of c)e.sphere("white",m,n(u,w,k,[0,0,0],[1,1.15,1]),o?16:10),e.cyl("white",m*.8,m*.9,.7,n(u,w-m*.9,k),10);e.cyl("grey",.6,.9,1.6,n(.5,Ke+.8,-15.5),10),e.box("antenna",5.5,5.2,.45,n(.5,Ke+4.1,-15.5,[-.35,.45,0]));{const u=new M(0,0,.24).applyEuler(new jt(-.35,.45,0,"YXZ"));e.add("mesh",Ye(5.3,5),n(.5+u.x,Ke+4.1+u.y,-15.5+u.z,[-.35,.45,0]))}e.box("grey",5.7,.25,.6,n(.5,Ke+1.6,-15.5,[0,.45,0]));{const u=n(0,27.6,$+1.8,[0,Math.PI,0]);e.add("mesh",no(5,3.4,1.15),u);for(const w of[-1.7,1.7])e.add("antenna",no(5.02,.12,1.15),n(0,27.6+w,$+1.8,[0,Math.PI,0]));e.box("grey",.3,1.2,.3,n(0,25.4,$+2.4)),o&&G(e,"antenna",s(0,26.3,$+2.3),s(0,27.6,$+4.6),.1)}e.cyl("grey",.22,.4,9,n(-1,17.9+4.5,11.5),6),oo(e,a,jo(-1,11.5,1.6,8),25,o),e.cyl("greyDark",.25,.3,.6,n(-1,25.3,11.5),8),e.add("mesh",no(2.4,1.1,1.3),n(-1,26.2,11,[.25,.6,0]));for(const[u,w]of[[-5.2,22.4],[1.5,23.5]])e.cyl("grey",.35,.45,1,n(u,18.4,w),8),e.sphere("white",.95,n(u,19.6,w,[0,0,0],[1,1.1,1]),o?14:10);if(o){e.box("antenna",1.6,1,.25,n(2.2,18.6,18,[0,-.6,0])),e.box("antenna",1.2,2.2,.2,n(-3.5,23.2,-11.5,[0,.3,0])),e.box("antenna",.6,.45,.4,n(-4.6,18.25,24));for(const u of[-5.6,-3.4,3.4,5.6])e.cyl("antenna",.03,.05,3.2,n(u,32.2,$),4);e.cyl("antenna",.05,.06,4,n(-2.6,23.4,-8,[0,0,.15]),4),e.cyl("antenna",.05,.06,4,n(2.8,22.8,9,[0,0,-.15]),4),e.cyl("antenna",.03,.04,3,n(0,37.9+1.5,$+.3),4),ut(e,"steel",s(-f+.1,h,$-f-.1),s(-g,l,$-g-.1),.45,new M(1,0,0),!1);for(const u of[-1,1])Qe(e,"antenna",s(u*6.2,30.3,$),s(u*3.4,18.25,$+9),.015,3);Qe(e,"antenna",s(0,35.3,$),s(-3.8,21.6,-14),.015,3)}for(const u of[-1,1])e.add("number",Ye(16.5,11.2),n(u*(E+.05),5,7,[0,u*Math.PI/2,0]),!1)}function no(e,t,a){const r=[],s=[];for(let i=0;i<10;i++){const p=-a/2+a*i/10,d=-a/2+a*(i+1)/10,h=(u,w)=>[Math.sin(u)*e,w,e-Math.cos(u)*e],l=h(p,-t/2),f=h(d,-t/2),g=h(d,t/2),y=h(p,t/2),S=p*e,x=d*e,b=0,c=t;r.push(...l,...f,...g,...l,...g,...y,...l,...g,...f,...l,...y,...g),s.push(S,b,x,b,x,c,S,b,x,c,S,c,S,b,x,c,x,b,S,b,S,c,x,c)}const o=new de;return o.setAttribute("position",new j(new Float32Array(r),3)),o.setAttribute("uv",new j(new Float32Array(s),2)),o.computeVertexNormals(),o}const Ie=12,Ce=1.75,ft=.17,bt=.62,rs=1.7,ls=rs/Ie,is=new J(1,.55,.12),Yo=new J(1,.08,.04),Jo=new J(.15,1,.25),cs=`
#include <common>
#include <logdepthbuf_pars_vertex>
attribute vec3 color;
attribute float size;
uniform float uPxPerRad;
uniform float uMinPx;
varying vec3 vColor;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  float dist = max(-mv.z, 0.01);
  float px = size / dist * uPxPerRad;
  gl_PointSize = max(px * 2.5, uMinPx);
  // dimmer when the minimum size has to inflate a light that is physically tiny
  vColor = color * min(1.0, (px * 2.5) / max(uMinPx, 1e-3) * 0.6 + 0.4);
  #include <logdepthbuf_vertex>
}`,us=`
#include <common>
#include <logdepthbuf_pars_fragment>
varying vec3 vColor;
void main() {
  #include <logdepthbuf_fragment>
  vec2 d = gl_PointCoord - 0.5;
  float r = length(d) * 2.0;
  float core = smoothstep(0.55, 0.0, r);
  float halo = exp(-r * r * 6.0) * 0.5;
  float a = core + halo;
  if (a < 0.01) discard;
  gl_FragColor = vec4(vColor * a, 1.0);
}`;function fs(e,t){const a=new Le;a.name="carrier:iflols";const n=Math.atan2(-ge.x,-ge.z),r=new xe().setFromAxisAngle(new M(0,1,0),n),s=new M(Zt.pos.x,Je(Zt.pos.z),Zt.pos.z);a.position.copy(s),a.quaternion.copy(r);const o=new Et;o.box("grey",3.2,.5,2.4,L([0,.25,-.4])),o.box("greyDark",.5,.9,.5,L([0,.95,-.4])),o.box("black",bt+.36,Ie*ft+.36,.8,L([0,Ce,-.2])),o.box("black",bt+.5,.12,1,L([0,Ce+Ie*ft/2+.24,-.1]));for(const m of[-1,1])o.box("black",4,.34,.3,L([m*2.55,Ce,-.15])),o.box("black",.3,.75,.32,L([m*(bt/2+.33),Ce-.15,0]));o.box("black",.95,.24,.3,L([0,Ce+Ie*ft/2+.5,-.05])),o.box("grey",.15,1.2,.15,L([-1.3,.9,-1.4],[.3,0,0]));for(const m of o.build(e,"iflols"))m.castShadow=!0,a.add(m);const i=[];for(let m=0;m<Ie;m++)i.push({p:new M(0,Ce+(m-(Ie-1)/2)*ft,.21),w:bt,h:ft*.86,on:m<2?Yo:is,kind:"cell",i:m});for(const m of[-1,1])for(let v=0;v<5;v++)i.push({p:new M(m*(1.15+v*.78),Ce,.02),w:.22,h:.2,on:Jo,kind:"datum",i:v});for(const m of[-1,1])for(let v=0;v<4;v++)i.push({p:new M(m*(bt/2+.33),Ce-.42+v*.18,.17),w:.2,h:.13,on:Yo,kind:"waveoff",i:v});for(let m=0;m<4;m++)i.push({p:new M(-.33+m*.22,Ce+Ie*ft/2+.5,.11),w:.16,h:.14,on:Jo,kind:"cut",i:m});const p=new ye(1,1,.02),d=new ia({color:16777215,toneMapped:!1}),h=new Fe(p,d,i.length);h.name="carrier:iflols-lights",i.forEach((m,v)=>h.setMatrixAt(v,new K().compose(m.p,new xe,new M(m.w,m.h,1)))),h.instanceMatrix.needsUpdate=!0,a.add(h);const l=new Float32Array(i.length*3),f=new Float32Array(i.length*3),g=new Float32Array(i.length);i.forEach((m,v)=>{l.set([m.p.x,m.p.y,m.p.z+.05],v*3),g[v]=Math.max(m.w,m.h)*.5});const y=new de;y.setAttribute("position",new j(l,3)),y.setAttribute("color",new j(f,3)),y.setAttribute("size",new j(g,1));const S=new mo({vertexShader:cs,fragmentShader:us,transparent:!0,depthWrite:!1,blending:Ia,uniforms:{uPxPerRad:{value:1e3},uMinPx:{value:3}}}),x=new Wa(y,S);x.name="carrier:iflols-glow",x.frustumCulled=!1,x.renderOrder=20,a.add(x);const b={ball:5,datums:!0,waveoff:!1,cut:!1},c=new J,u={group:a,originLocal:s.clone().add(new M(0,Ce,0)),approachDirLocal:new M(-ge.x,0,-ge.z).normalize().multiplyScalar(Math.cos(ve.glideslopeDeg*Math.PI/180)).setY(Math.sin(ve.glideslopeDeg*Math.PI/180)),glideslopeDeg:ve.glideslopeDeg,get ball(){return b.ball},brightness:6,minPixels:4,setBall(m){b.ball=m===null?null:Math.max(0,Math.min(Ie-1,Math.round(m))),w()},setBallFromError(m){const v=Math.floor((Ie-1)/2+.5+m/ls);b.ball=v<0||v>=Ie?null:v,w()},setDatums(m){b.datums=m,w()},setWaveOff(m){b.waveoff=m,w()},setCut(m){b.cut=m,w()},stabilise(m){a.quaternion.copy(m).invert().multiply(r)},setViewport(m,v){S.uniforms.uPxPerRad.value=m/2/Math.tan(v*Math.PI/360),S.uniforms.uMinPx.value=u.minPixels}};function w(){i.forEach((m,v)=>{let z=!1;m.kind==="cell"?z=!b.waveoff&&b.ball===m.i:m.kind==="datum"?z=!b.waveoff&&b.datums:m.kind==="waveoff"?z=b.waveoff:z=!b.waveoff&&b.cut;const A=z?u.brightness:0;c.copy(m.on).multiplyScalar(z?A:.015),h.setColorAt(v,c);const F=z?c:c.setRGB(0,0,0);f.set([F.r*.6,F.g*.6,F.b*.6],v*3)}),h.instanceColor.needsUpdate=!0,y.attributes.color.needsUpdate=!0}w();let k=u.brightness;return Object.defineProperty(u,"brightness",{get:()=>k,set:m=>{k=m,w()}}),u}function bo(e,t,a=2){const n=e-he.x,r=t-he.z,s=n*ge.x+r*ge.z,o=n*Vt.x+r*Vt.z;if(s>-20&&s<ve.lengthM+10&&o>-(ve.halfWidthM+7.5+a)&&o<ve.halfWidthM+4+a)return!1;const i=Oe[0],p=(e-i.start.x)*i.dir.x+(t-i.start.z)*i.dir.z,d=Math.abs((e-i.start.x)*i.dir.z-(t-i.start.z)*i.dir.x);return!(p>-22&&p<i.strokeM+12&&d<7+a)}function hs(e,t,a,n){const r=(s,o,i,p=[0,0,0])=>L([s,o,i],p).premultiply(new K().makeRotationY(n)).premultiply(new K().makeTranslation(t,0,a));e.box("yellow",1.7,.55,3.1,r(0,.6,0)),e.box("yellow",1.5,.35,1.3,r(0,1.05,-.75)),e.box("black",.6,.12,.55,r(0,.95,.75)),e.box("black",.6,.55,.1,r(0,1.2,1.05)),e.box("greyDark",1.75,.14,.2,r(0,.45,-1.62));for(const s of[-.78,.78])for(const o of[-1,1])e.cyl("rubber",.36,.36,.34,r(s,.36,o,[0,0,Math.PI/2]),12);G(e,"steel",new M(0,.4,-1.7).applyMatrix4(r(0,0,0)),new M(0,.25,-3.9).applyMatrix4(r(0,0,0)),.09)}function Xo(e,t,a,n){const r=(s,o,i,p=[0,0,0])=>L([s,o,i],p).premultiply(new K().makeRotationY(n)).premultiply(new K().makeTranslation(t,0,a));e.box("yellow",1.4,1,2.6,r(0,.85,0)),e.box("greyDark",1,.25,.8,r(0,1.47,-.6)),e.cyl("black",.35,.35,.25,r(0,1.47,.6),10);for(const s of[-.62,.62])for(const o of[-1,1])e.cyl("rubber",.22,.22,.2,r(s,.22,o,[0,0,Math.PI/2]),8)}function ds(e,t,a,n){const r=new K().makeRotationY(n),s=new K().makeTranslation(t,0,a),o=(h,l,f,g=[0,0,0])=>L([h,l,f],g).premultiply(r).premultiply(s),i=(h,l,f)=>new M(h,l,f).applyMatrix4(r).applyMatrix4(s);e.box("yellow",3.3,1.1,9.4,o(0,1.25,0)),e.box("yellow",3.1,1.3,2.4,o(0,2.45,3)),e.box("yellow",2,1.7,2,o(-.55,2.65,-3.2)),e.box("glass",1.9,.9,1.92,o(-.55,3,-3.25)),e.box("yellow",2.2,.6,3.2,o(.4,2.1,.6)),e.cyl("greyDark",.9,1,.5,o(.4,2.55,1.2),14);const p=i(.6,3.1,1.6),d=i(.6,3.9,-6.6);G(e,"yellow",p,d,.85),G(e,"yellow",i(.6,3.75,-4.8),i(.6,4.05,-8.2),.6),G(e,"steel",i(.6,2.6,.4),i(.6,3.5,-2),.3),e.box("black",.5,.7,.5,o(.6,3.2,-8.3)),G(e,"steel",i(.6,3.9,-8.2),i(.6,3.5,-8.3),.05),e.box("greyDark",3.5,.25,.4,o(0,.85,-4.75));for(const h of[-1.45,1.45])for(const l of[-3.4,-1.9,1.9,3.4])e.cyl("rubber",.72,.72,.55,o(h,.72,l,[0,0,Math.PI/2]),14);e.box("red",.25,.25,.25,o(-1.1,3.6,-3.1))}function ps(e){const t=[[1,-120],[1,-60],[1,-10],[1,60],[1,110],[-1,-110],[-1,-40],[-1,140]];for(const[a,n]of t){const r=a>0?Ee(n):Se(n),s=r+a*.75;e.box("grey",1.2,1.1,1.6,L([s,-1.2,n])),e.box("purple",1.22,.2,1.62,L([s,-.75,n])),e.cyl("black",.42,.42,.9,L([s,-1.1,n+1.3],[Math.PI/2,0,0]),12),e.box("purple",1.4,.012,2.2,L([r-a*.9,.006,n]))}}function ms(e,t){const a=[[22,-30],[26,-14],[21,58],[27,95],[24,112],[30,128],[22,140],[-6,-150],[-14,-140],[-20,-118],[18,-100],[26,-95]];for(const[n,r]of a){if(!bo(n,r,1))continue;const s=3+Math.floor(t()*5);for(let d=0;d<s;d++){const h=t()*Math.PI,l=1.6+t()*1.4,f=n+(t()-.5)*2.2,g=r+(t()-.5)*2.2;e.box("rubber",.07,.035,l,L([f,.02,g],[0,h,0])),e.box("steel",.18,.06,.24,L([f+Math.sin(h)*l/2,.03,g+Math.cos(h)*l/2],[0,h,0]))}const o=n+2.2,i=r+1.5,p=t()*Math.PI;for(const d of[-.25,.25])e.box("yellow",.35,.18,.28,L([o+Math.cos(p)*d,.09,i-Math.sin(p)*d],[0,p,0]))}}function xs(){const e=[];for(let t=Ne+4;t<pe-2;t+=15.2)e.push(L([Ee(t)-.35,.02,t]),L([Se(t)+.35,.02,t]));return e}function ws(e){const t=Xe(41),a=[[24,-8,.3],[20.5,-18,-.25],[27,60,1.2],[19,70,.1],[25,104,1.5],[28,122,-.3],[-18,-132,.5],[-24,-96,1.9]];for(const[n,r,s]of a)bo(n,r)&&hs(e,n,r,s);Xo(e,22,92,.2),Xo(e,-12,-112,1.2),ds(e,21.5,-.5,.05),ps(e),ms(e,t)}const Sa={yellow:new J("#d9b21c"),green:new J("#2f7a3a"),blue:new J("#2a4fa0"),red:new J("#a32a22"),purple:new J("#6a3a8c"),white:new J("#e6e6e2"),brown:new J("#6b4a2f")};function ka(e){const t=[],a=[],n=new J("#1a2233"),r=new J("#a0765a"),s=new J("#151515"),o=new J("#222222"),i=(g,y,S,x,b=[0,0,0])=>new ye(g,y,S).applyMatrix4(L(x,b)).toNonIndexed(),p=e==="kneel",d=p?.55:.92;if(p)a.push({g:i(.15,.48,.16,[-.11,.3,.16],[-1.2,0,0]),c:n}),a.push({g:i(.15,.5,.16,[-.11,.25,-.12],[0,0,0]),c:n}),a.push({g:i(.15,.48,.16,[.11,.3,.05],[.1,0,0]),c:n}),a.push({g:i(.15,.14,.45,[.11,.08,.28]),c:n}),a.push({g:i(.13,.1,.27,[-.11,.05,-.08]),c:s});else for(const g of[-1,1])a.push({g:i(.15,.86,.17,[g*.11,.47,0]),c:n}),a.push({g:i(.14,.1,.28,[g*.11,.05,-.05]),c:s});t.push(i(.42,.6,.27,[0,d+.3,0])),a.push({g:i(.18,.08,.16,[0,d+.64,0]),c:r}),a.push({g:new ro(.115,8,6).applyMatrix4(L([0,d+.78,0])).toNonIndexed(),c:r}),t.push(new ro(.13,8,5,0,Math.PI*2,0,Math.PI*.55).applyMatrix4(L([0,d+.8,0])).toNonIndexed()),a.push({g:i(.2,.05,.05,[0,d+.8,-.11]),c:o});for(const g of[-1,1])a.push({g:i(.07,.1,.06,[g*.13,d+.78,0]),c:o});const h=(g,y,S=.62)=>{const x=[g*.27,d+.55,0],b=L(x,y);t.push(new ye(.11,S,.12).translate(0,-S/2,0).applyMatrix4(b).toNonIndexed()),a.push({g:new ye(.09,.1,.1).translate(0,-S-.05,0).applyMatrix4(b).toNonIndexed(),c:r})};e==="point"?(h(-1,[0,0,-.1]),h(1,[Math.PI/2-.15,0,0])):p?(h(-1,[.5,0,.1]),h(1,[-.25,0,-.15])):(h(-1,[.05,0,.08]),h(1,[-.05,0,-.08]));const l=Ve(t.map(g=>(g.deleteAttribute("uv"),g)),!1),f=Ve(a.map(({g,c:y})=>{g.deleteAttribute("uv");const S=g.attributes.position.count,x=new Float32Array(S*3);for(let b=0;b<S;b++)x.set([y.r,y.g,y.b],b*3);return g.setAttribute("color",new j(x,3)),g}),!1);return{jersey:l,rest:f}}function gs(){const e=Oe[1];return[{x:e.start.x+9,z:e.start.z-6,yaw:Math.PI,pose:"kneel",jersey:"yellow"},{x:e.start.x-9,z:e.start.z+4,yaw:2.4,pose:"kneel",jersey:"green"},{x:e.start.x-11,z:e.start.z+6,yaw:2.6,pose:"kneel",jersey:"green"},{x:e.start.x+12,z:e.start.z+2,yaw:3.4,pose:"stand",jersey:"white"},{x:e.start.x-14,z:e.start.z-10,yaw:3,pose:"stand",jersey:"green"},{x:19,z:-6,yaw:-1.2,pose:"point",jersey:"yellow"},{x:22.5,z:8,yaw:-1.6,pose:"stand",jersey:"blue"},{x:23.5,z:9.2,yaw:-1.4,pose:"stand",jersey:"blue"},{x:17.6,z:2,yaw:2.1,pose:"stand",jersey:"red"},{x:17.8,z:3.6,yaw:1.9,pose:"stand",jersey:"red"},{x:21,z:26,yaw:-2.6,pose:"stand",jersey:"brown"},{x:20,z:31,yaw:.4,pose:"kneel",jersey:"brown"},{x:24,z:44,yaw:-.9,pose:"stand",jersey:"purple"},{x:23,z:47,yaw:-1.1,pose:"stand",jersey:"purple"},{x:18,z:52,yaw:.2,pose:"stand",jersey:"white"},{x:23,z:72,yaw:1,pose:"stand",jersey:"blue"},{x:27.5,z:84,yaw:-.4,pose:"point",jersey:"yellow"},{x:21,z:100,yaw:2.5,pose:"stand",jersey:"green"},{x:24,z:116,yaw:-2,pose:"kneel",jersey:"blue"},{x:30,z:130,yaw:1.4,pose:"stand",jersey:"brown"},{x:22,z:138,yaw:3,pose:"stand",jersey:"red"},{x:22,z:-40,yaw:.8,pose:"stand",jersey:"blue"},{x:26,z:-58,yaw:-.6,pose:"point",jersey:"yellow"},{x:28,z:-66,yaw:2.4,pose:"stand",jersey:"purple"},{x:-20,z:-126,yaw:.6,pose:"stand",jersey:"red"},{x:-15,z:-100,yaw:-2.2,pose:"stand",jersey:"blue"},{x:-28,z:105,yaw:-1.4,pose:"stand",jersey:"white"},{x:-27,z:107.5,yaw:-1.6,pose:"stand",jersey:"white"}].filter(a=>bo(a.x,a.z,0))}function l0(e,t){const a=ka(e),n=new Le,r=new re(a.jersey,new rt({color:Sa[t],roughness:.8})),s=new re(a.rest,new rt({vertexColors:!0,roughness:.85}));for(const o of[r,s])o.castShadow=o.receiveShadow=!0,n.add(o);return n.name=`carrier:crew-${t}`,n}function ys(){const e=new Le;e.name="carrier:crew";const t=new rt({color:16777215,roughness:.8}),a=new rt({vertexColors:!0,roughness:.85});t.name="carrier:crew-jersey",a.name="carrier:crew";const n=gs(),r=new xe,s=new M(1,1,1),o=new M(0,1,0);for(const i of["stand","kneel","point"]){const p=n.filter(f=>f.pose===i);if(!p.length)continue;const d=ka(i),h=new Fe(d.jersey,t,p.length),l=new Fe(d.rest,a,p.length);p.forEach((f,g)=>{const y=new K().compose(new M(f.x,0,f.z),r.setFromAxisAngle(o,f.yaw),s);h.setMatrixAt(g,y),l.setMatrixAt(g,y),h.setColorAt(g,Sa[f.jersey])});for(const f of[h,l])f.instanceMatrix.needsUpdate=!0,f.computeBoundingSphere(),f.castShadow=!0,f.receiveShadow=!0,e.add(f);h.name=`carrier:crew-${i}-jersey`,l.name=`carrier:crew-${i}`}return{group:e,count:n.length}}const vs={value:.3},bs=`
float deckH(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float deckVN(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(deckH(i), deckH(i + vec2(1.0, 0.0)), f.x), mix(deckH(i + vec2(0.0, 1.0)), deckH(i + 1.0), f.x), f.y);
}
float deckOct(vec2 m, float cell, float fwm) { return (deckVN(m / cell) - 0.5) * (1.0 - smoothstep(cell * 0.3, cell * 0.7, fwm)); }
`;function Ko(e,t,a){const n=new rt({map:e,roughness:1,metalness:0,envMapIntensity:.35}),r=[lt,st.H/st.pxPerFt*Y],s=r[0]/fo,o=r[1]/fo;return n.onBeforeCompile=i=>{i.uniforms.uDeckSpec=vs,i.uniforms.tPaint={value:a},i.uniforms.uDeckM={value:r};let p=i.fragmentShader.replace("#include <map_pars_fragment>",`#include <map_pars_fragment>
uniform float uDeckSpec;
uniform sampler2D tPaint;
uniform vec2 uDeckM;
${bs}`).replace("#include <aomap_fragment>",`reflectedLight.directSpecular *= uDeckSpec;
  reflectedLight.indirectSpecular *= uDeckSpec;
  #include <aomap_fragment>`),d=`
  float deckN = 0.0, deckFine = 0.0;`;t&&(i.uniforms.tDetail={value:t},i.uniforms.uDetailScale={value:[s,o]},p=p.replace("#include <map_pars_fragment>",`#include <map_pars_fragment>
uniform sampler2D tDetail;
uniform vec2 uDetailScale;`),d+=`
  diffuseColor.rgb *= texture2D(tDetail, vMapUv * uDetailScale).rgb * 2.0;
  {
    // grit and staining between the canvas's 8 cm texels: 6 m, 1.5 m, 40 cm, 10 cm, 3 cm
    vec2 dm = vMapUv * uDeckM;
    float fwm = length(fwidth(dm));
    deckFine = deckOct(dm + 53.0, 0.1, fwm) * 0.8 + deckOct(dm + 71.0, 0.03, fwm) * 1.0 + deckOct(dm + 89.0, 0.012, fwm) * 0.9;
    deckN = deckOct(dm, 6.0, fwm) * 0.5 + deckOct(dm + 17.0, 1.5, fwm) * 0.45 + deckOct(dm + 31.0, 0.4, fwm) * 0.45 + deckFine;
    diffuseColor.rgb *= 1.0 + deckN * 0.6;
  }`),d+=`
  {
    vec4 pp = texture2D(tPaint, vMapUv);
    float fw = fwidth(pp.a);
    // worn paint: the edge threshold wanders with the grit, so edges chip and the body is scuffed through
    float thr = 0.5 + deckN * 0.35;
    float aS = clamp((pp.a - thr) / max(fw, 1e-4) + 0.5, 0.0, 1.0);
    float a = mix(aS, pp.a, smoothstep(0.2, 0.6, fw));
    vec3 pc = pp.rgb / max(pp.a, 1e-3);
    // rubber and oil lie over the paint too: darken it as much as the non-skid under it is
    float grime = clamp(dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722)) / 0.032, 0.3, 1.15);
    diffuseColor.rgb = mix(diffuseColor.rgb, pc * grime * (1.0 + deckFine * 0.35), a * 0.9);
  }`,p=p.replace("#include <map_fragment>","#include <map_fragment>"+d),i.fragmentShader=p},n.customProgramCacheKey=()=>t?"carrier-deck-detail-3":"carrier-deck-3",n}function Ss(e,t){return e.onBeforeCompile=a=>{a.fragmentShader=a.fragmentShader.replace("#include <aomap_fragment>",`reflectedLight.directSpecular *= ${t.toFixed(3)};
  reflectedLight.indirectSpecular *= ${t.toFixed(3)};
  #include <aomap_fragment>`)},e.customProgramCacheKey=()=>`carrier-trim-${t.toFixed(3)}`,e}function ks(e=8){const t=Tn(e),a=Ln(e),n=Fn(Re,we,e),r=Rn(e);r.repeat.set(1/ho,1/ho);const s=Cn(),o=Nn(),i=_n(),p=No(8,2.2,"#c4c8cc");p.repeat.set(1/1.2,1/1.2);const d=No(5,3.2,"#3b3f42",!0);d.repeat.set(1/.8,1/.8);const h="#7a7e81",l=g=>new rt({metalness:0,roughness:.7,...g}),f={hull:l({map:n,roughness:.72}),grey:l({map:r,color:h,roughness:.68}),greyDark:l({map:r,color:"#62686d",roughness:.75}),deck:Ko(t.map,a,t.paint),deckFar:Ko(t.map,null,t.paint),interior:l({map:i,roughness:1}),glass:l({color:"#2b3a44",roughness:.12,metalness:0}),white:l({color:"#e3e4e1",roughness:.45}),black:l({color:"#141516",roughness:.6}),yellow:l({color:"#b08d2c",roughness:.7}),rail:l({map:s,color:"#c9cdd1",alphaTest:.5,side:Rt,roughness:.6}),number:l({map:o,alphaTest:.4,roughness:.6,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),jbd:l({map:r,color:"#6b6b67",roughness:.8,metalness:.1}),steel:l({color:"#5e6164",roughness:.65,metalness:.3}),wire:l({color:"#3a3b3c",roughness:.4,metalness:.8}),grating:l({color:"#4c5155",roughness:.8}),antenna:l({color:"#33373a",roughness:.6,metalness:.2}),lights:new ia({color:new J(.25,.2,.12)}),farGrey:l({color:h,roughness:.7}),mesh:l({map:p,color:"#7d8287",alphaTest:.3,side:Rt,roughness:.5,metalness:.3}),net:l({map:d,transparent:!0,depthWrite:!1,side:Rt,roughness:.9}),rubber:l({color:"#161616",roughness:.9}),purple:l({color:"#5b2f78",roughness:.7}),red:l({color:"#8f2a22",roughness:.7}),boat:l({color:"#8a9095",roughness:.6}),track:Ss(l({color:"#3b3d3f",roughness:.95,envMapIntensity:.35}),.45)};for(const[g,y]of Object.entries(f))y.name=`carrier:${g}`;return Object.assign(f,{textures:{deck:t.map,deckPaint:t.paint,detail:a,hull:n,panel:r,rail:s,number:o,interior:i,mesh:p,net:d}})}const Ms=.514444,Zo=1800,Qo=7500,zs={speedKt:25,headingDeg:0,pitchDeg:.5,pitchPeriod:8,heaveM:.5,heavePeriod:9.5,rollDeg:.3,rollPeriod:14};function Tt(e,t,a=t){const n=new Le;for(const r of e)r.castShadow=a,r.receiveShadow=t,n.add(r);return n}function i0(e={}){const t=ks(e.anisotropy??8),a=t,n=e.castShadows??!0,r=Ho(!0),s=Ho(!1),o=Eo(!0),i=new re(r,t.hull);i.name="carrier:hull";const p=[];{i.updateMatrixWorld();const D=[-1,1].map(T=>{const ue=T*ze(-136,T);return new an(i,new M(ue,-6.2,-136),new jt(0,T*Math.PI/2,0),new M(9.5,7.1,8))}),P=Ve(D,!1);for(let T=0;T<2;T++){const H=new re(P,t.number);H.name="carrier:bow-70",p.push(H)}}const d=[],h=[],l=[],f=new Le;f.name="carrier:near";const g=Bn();{const D=new Et;eo(D),Oo(D,d,!0),Vo(D,d,!0),as(D),qo(D),Uo(D),Go(D,!0),ss(D,h,l),Vn(D),ws(D),$n(D),ao(D,0);const P=new re(o,t.deck);P.name="carrier:deck",f.add(Tt([i,P,...D.build(a,"near")],n)),f.add(Tt([Dt(new He(.32,.32,1.3,10),t.white,d,"carrier:liferafts"),Dt(new He(.035,.06,1,4),t.antenna,h,"carrier:whips")],n));const T=[...l,...On(),...xs()];f.add(Dt(new He(.14,.14,.03,8),t.lights,T,"carrier:lights")),f.add(Hn(a)),f.add(ys().group),f.add(g.mesh),f.add(p[0])}const y=new Le;y.name="carrier:mid";{const D=new Et;eo(D),Oo(D,[],!1),Vo(D,[],!1),qo(D),Uo(D),Go(D,!1),ao(D,1);const P=new re(r,t.hull),T=new re(o,t.deckFar);y.add(Tt([P,T,...D.build(a,"mid"),Dt(new He(.32,.32,1.3,6),t.white,d,"carrier:liferafts-mid")],n)),y.add(p[1])}const S=new Le;S.name="carrier:far";{const D=new Et;eo(D,"farGrey"),ao(D,2);const P=Ve($e.map(ue=>Ds(ya(ue),0,2)),!1),T=Ve([Eo(!1).toNonIndexed(),P],!1),H=new re(s,t.hull),Pe=new re(T,t.deckFar);for(const ue of $e)D.aabb("farGrey",Math.min(ue.xIn,ue.xOut),-.9,ue.z0,Math.max(ue.xIn,ue.xOut),-.02,ue.z1);S.add(Tt([H,Pe,...D.build(a,"far")],!1))}const x=new Ha;x.name="carrier:lod",x.addLevel(f,0,.05),x.addLevel(y,Zo,.05),x.addLevel(S,Qo,.05);const b=Wn(a);b.group.traverse(D=>{D.castShadow=n,D.receiveShadow=n});const c=fs(a),u=new Le;u.name="carrier:ship",u.position.set(0,ht,0),u.add(x,b.group,c.group);const w=new Le;w.name="CVN-70",w.add(u);const k={near:vt(f),mid:vt(y),far:vt(S),dynamic:vt(b.group),lens:vt(c.group)},m={...zs,...e.motion},v=(e.start??new M).clone(),z=Math.PI/180,A=new xe,F=new xe,N=new xe,O=new M,B=new M(1,0,0),W=new M(0,1,0),X=new M(0,0,1),ae=()=>({pivot:new M,deckOrigin:new M,quaternion:new xe,motion:new xe,velocity:new M,angularVelocity:new M,headingDeg:0,pitchDeg:0,rollDeg:0,heaveM:0,time:0}),C=(D,P=ae())=>{const T=m,H=Fa=>2*Math.PI/Fa,Pe=T.headingDeg*z,ue=O.set(Math.sin(Pe),0,-Math.cos(Pe)),yt=T.speedKt*Ms,zo=T.heaveM*Math.sin(H(T.heavePeriod)*D+.7),Do=T.pitchDeg*z*Math.sin(H(T.pitchPeriod)*D),Ao=T.rollDeg*z*Math.sin(H(T.rollPeriod)*D+1.9);P.pivot.copy(v).addScaledVector(ue,yt*D),P.pivot.y+=zo,P.velocity.copy(ue).multiplyScalar(yt),P.velocity.y=T.heaveM*H(T.heavePeriod)*Math.cos(H(T.heavePeriod)*D+.7),A.setFromAxisAngle(W,-Pe),F.setFromAxisAngle(B,Do),N.setFromAxisAngle(X,-Ao),P.motion.copy(F).multiply(N),P.quaternion.copy(A).multiply(P.motion);const Ta=T.pitchDeg*z*H(T.pitchPeriod)*Math.cos(H(T.pitchPeriod)*D),La=T.rollDeg*z*H(T.rollPeriod)*Math.cos(H(T.rollPeriod)*D+1.9);return P.angularVelocity.set(Ta,0,-La).applyQuaternion(A),P.deckOrigin.set(0,ht,0).applyQuaternion(P.quaternion).add(P.pivot),P.headingDeg=T.headingDeg,P.pitchDeg=Do/z,P.rollDeg=Ao/z,P.heaveM=zo,P.time=D,P},I=C(0),_=(D,P=new M,T=I)=>P.copy(D).add(R.set(0,ht,0)).applyQuaternion(T.quaternion).add(T.pivot),R=new M,V=new xe,ke=(D,P=new M,T=I)=>P.copy(D).sub(T.pivot).applyQuaternion(V.copy(T.quaternion).invert()).sub(R.set(0,ht,0)),ne=(D,P=0)=>new M(D.x,Je(D.z)+P,D.z),ce=Oe.map(D=>({n:D.n,name:D.name,start:ne(D.start),end:ne(D.end),dir:D.dir.clone(),strokeM:D.strokeM,offBowDeg:Math.round(Math.atan2(-D.dir.x,-D.dir.z)*180/Math.PI*10)/10})),se=dt.map(D=>({n:D.n,a:ne(D.a,mt),b:ne(D.b,mt),centre:ne(D.centre,mt),fromRampM:D.fromRampM,heightM:mt})),Z=(D,P)=>{if(Mn(D,P))return Je(P);for(let T=0;T<$e.length;T++){const H=$e[T];if(P>=H.z0&&P<=H.z1&&D>=Math.min(H.xIn,H.xOut)&&D<=Math.max(H.xIn,H.xOut))return b.elevatorLevel[T]*-11}return null},q=new M,Ae=new M,it=(D,P)=>{const T=P??{onDeck:!1,height:0,point:new M,normal:new M,velocity:new M};ke(D,q);const H=Z(q.x,q.z);T.onDeck=H!==null;const Pe=H??0;return T.height=q.y-Pe,_(Ae.set(q.x,Pe,q.z),T.point),T.normal.set(0,1,0).applyQuaternion(I.quaternion),T.velocity.copy(I.angularVelocity).cross(Ae.copy(T.point).sub(I.pivot)).add(I.velocity),T},ct=new M,ko=new M,Mo=new xe,Yt=Object.assign(c,{world(D,P){_(c.originLocal,D),Mo.setFromAxisAngle(W,-m.headingDeg*z),P.copy(c.approachDirLocal).applyQuaternion(Mo)},errorDeg(D){Yt.world(ct,ko);const P=Ae.copy(D).sub(ct),T=Math.hypot(P.x,P.z);return Math.atan2(P.y,T)*180/Math.PI-c.glideslopeDeg},glidepathPoint(D,P=new M){Yt.world(ct,ko);const T=Ae.set(-ge.x,0,-ge.z),H=c.originLocal,Pe=(H.x-he.x)*T.x+(H.z-he.z)*T.z,ue=Math.abs((H.x-he.x)*T.z-(H.z-he.z)*T.x),yt=Pe+Math.sqrt(Math.max(0,D*D-ue*ue));return _(q.set(he.x+T.x*yt,0,he.z+T.z*yt),P),P.y=ct.y+D*Math.tan(c.glideslopeDeg*Math.PI/180),P}}),za=new Oa(new M(be.x0,-3.2,be.z0-.5),new M(be.x1,ot,be.z1+2.4)),gt=ae(),Da=new xe().setFromAxisAngle(W,Math.PI/2),Aa={id:"cvn70",name:"USS Carl Vinson (CVN-70)",kind:"carrier",landing:{length:ve.lengthM,width:ve.halfWidthM*2,angleDeg:ve.angleDeg},catapults:ce.map(D=>({id:`cat${D.n}`,at:[-D.start.z,D.start.y,D.start.x],headingDeg:D.offBowDeg})),pose(D,P){return C(D,gt),P.position.copy(gt.deckOrigin),P.quaternion.copy(gt.quaternion).multiply(Da),P.velocity.copy(gt.velocity),P.angularVelocity.copy(gt.angularVelocity),P}};let Jt="near";const Pa=new M;return{root:w,ship:u,lod:x,materials:t,motion:m,pose:I,start:v,poseAt:C,toWorld:_,toLocal:ke,deck:{heightAt:Z,contact:it,heightAboveWaterline:ht,landing:{ramp:ne(he),axisFwd:ge.clone(),halfWidthM:ve.halfWidthM,lengthM:ve.lengthM,angleDeg:ve.angleDeg,touchdown:ne(kn(ve.touchdownFromRampM))}},cats:ce,wires:se,jbds:b.jbds,lens:Yt,setJbd:b.setJbd,setShuttle:b.setShuttle,setElevator:b.setElevator,island:{object:x,boxLocal:za,mastTopLocal:new M(qt.x,ot,qt.z+.5)},deckDef:Aa,waterline:{halfLength:317/2,halfBeam:ma/2},counts:k,get level(){return Jt},update(D){C(D,I),g.setTime(D),w.quaternion.copy(I.quaternion),c.stabilise(I.motion),w.updateMatrixWorld();const P=Pa.setFromMatrixPosition(x.matrixWorld).length();Jt=P<Zo?"near":P<Qo?"mid":"far",b.group.visible=Jt!=="far",c.group.visible=P<6e3}}}function Ds(e,t,a){const n=e.clone();for(const r of Object.keys(n.attributes)){const s=n.attributes[r],o=s.itemSize;n.setAttribute(r,new s.constructor(s.array.slice(t*3*o,(t+a)*3*o),o))}return n.clearGroups(),n}function c0(e,t,a,n=.85){const r=e.toLocal(t,As),s=Math.max(Math.abs(r.x)-45,Math.abs(r.z)-175,0),o=Math.max(ea(r.y,25,150),ea(s,30,250));return Math.min(a,n+(a-n)*o)}const As=new M,ea=(e,t,a)=>{const n=Math.min(1,Math.max(0,(e-t)/(a-t)));return n*n*(3-2*n)},je=9.81,Ps={wind:8.8,windToward:135,fetch:12e4,gamma:3.3,swell:{hs:1.3,period:11.5,toward:105,spread:24},choppiness:.85};function Ts(e,t){const a=e>=3?[541,87.3,13.9]:e===2?[431,41.7]:[433],n=[];for(let r=0;r<e;r++){const s=a[r],o=r===0?0:n[r-1].kMax,i=r<e-1?2*Math.PI/a[r+1]*6:Math.PI*t/s;n.push({L:s,kMin:o,kMax:i})}return n}function so(e,t,a,n){if(e<=0)return 0;const r=e<=t?.07:.09,s=Math.exp(-((e-t)**2)/(2*r*r*t*t));return a*je*je/e**5*Math.exp(-1.25*(t/e)**4)*n**s}function Ls(e,t,a){const n=t/a;let r;n<.95?r=2.61*Math.max(n,.56)**1.3:n<1.6?r=2.28*n**-1.3:r=10**(-.4+.8393*Math.exp(-.567*Math.log(n*n)));const s=1/Math.cosh(r*e);return r/(2*Math.tanh(r*Math.PI))*s*s}const ta=new Map;function Fs(e,t){let a=ta.get(t);if(a===void 0){let n=0;const r=2048;for(let s=0;s<r;s++){const o=-Math.PI+2*Math.PI*(s+.5)/r;n+=Math.abs(Math.cos(o/2))**(2*t)}a=1/(n*(2*Math.PI/r)),ta.set(t,a)}return a*Math.abs(Math.cos(e/2))**(2*t)}function oa(e){const t=e*Math.PI/180;return Math.atan2(-Math.cos(t),Math.sin(t))}const aa=e=>Math.atan2(Math.sin(e),Math.cos(e));function Rs(e){const t=e.wind,a=22*(je*je/(t*e.fetch))**(1/3),n=.076*(t*t/(e.fetch*je))**.22,r=oa(e.windToward);let s=null;if(e.swell&&e.swell.hs>0){const o=e.swell,i=2*Math.PI/o.period,p=oa(o.toward);let d=0;for(let l=1;l<4e3;l++){const f=l*.001*6;d+=so(f,i,1,6)*.006}const h=(o.hs/4)**2/d;s=(l,f)=>so(l,i,h,6)*Fs(aa(f-p),o.spread)}return(o,i)=>{const p=Math.hypot(o,i);if(p<1e-6)return 0;const d=Math.sqrt(je*p),h=je/(2*d),l=Math.atan2(i,o);let f=so(d,a,n,e.gamma)*Ls(aa(l-r),d,a);return s&&(f+=s(d,l)),f*h/p}}const Ns=e=>.003+.00512*e;function Es(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let a=t;return a=Math.imul(a^a>>>15,a|1),a^=a+Math.imul(a^a>>>7,a|61),((a^a>>>14)>>>0)/4294967296}}const Ge=64,Ut=-3,Ma=3;function Cs(e,t,a,n=1337){const r=Ts(a,t),s=Rs(e),o=new Float32Array(t*t*a*4),i=new Float64Array(Ge*2);let p=0,d=0,h=0;const l=new Float32Array(t*t*2),f=[],g=[];for(let b=0;b<a;b++){let c=0,u=0;const{L:w,kMin:k,kMax:m}=r[b],v=2*Math.PI/w,z=Es(n+b*7919);for(let A=0;A<t;A++)for(let F=0;F<t;F++){const N=Math.max(1e-12,z()),O=z(),B=Math.sqrt(-2*Math.log(N)),W=F<t/2?F:F-t,X=A<t/2?A:A-t,ae=W*v,C=X*v,I=Math.hypot(ae,C),_=I>=k&&I<m&&I>0?s(ae,C)*v*v/2:0,R=Math.sqrt(_)/Math.SQRT2,V=(A*t+F)*2;l[V]=B*Math.cos(2*Math.PI*O)*R,l[V+1]=B*Math.sin(2*Math.PI*O)*R}for(let A=0;A<t;A++)for(let F=0;F<t;F++){const N=(A*t+F)*2,O=(t-F)%t,W=((t-A)%t*t+O)*2,X=((b*t+A)*t+F)*4;o[X]=l[N],o[X+1]=l[N+1],o[X+2]=l[W],o[X+3]=-l[W+1];const ae=l[N]**2+l[N+1]**2+l[W]**2+l[W+1]**2;p+=ae,c+=ae;const C=F<t/2?F:F-t,I=A<t/2?A:A-t,_=C*v,R=I*v,V=Math.hypot(_,R);if(V>0){d+=_*_*ae,h+=R*R*ae,u+=V*V*ae;const ke=Math.min(Ge-1,Math.max(0,Math.floor((Math.log10(V)-Ut)/(Ma-Ut)*Ge)));i[ke*2]+=_*_*ae,i[ke*2+1]+=R*R*ae}}f.push(Math.sqrt(c)),g.push(u)}const y=new Float32Array((Ge+1)*2);let S=0,x=0;for(let b=0;b<Ge;b++)y[b*2]=S,y[b*2+1]=x,S+=i[b*2],x+=i[b*2+1];return y[Ge*2]=S,y[Ge*2+1]=x,{h0:o,cumVar:y,totalVar:[d,h],hs:4*Math.sqrt(p),cascadeRms:f,cascadeSlopeVar:g,specs:r}}const _s=`
in vec3 position;
void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }`,So=`
precision highp float;
precision highp int;
precision highp sampler2D;
#define PI 3.141592653589793
vec2 cmul(vec2 a, vec2 b) { return vec2(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x); }
`,Is=So+`
uniform sampler2D tH0;
uniform int N;
uniform float uTime;
uniform float uL[4];
layout(location = 0) out vec4 o0;
layout(location = 1) out vec4 o1;
// pack two real fields' spectra A, B into one complex: IFFT(A + iB) = a + i b
vec2 pack(vec2 a, vec2 b) { return vec2(a.x - b.y, a.y + b.x); }
void main() {
  ivec2 p = ivec2(gl_FragCoord.xy);
  int c = p.y / N;
  int n = p.x, m = p.y - c * N;
  float L = uL[c];
  vec2 kv = vec2(float(n < N / 2 ? n : n - N), float(m < N / 2 ? m : m - N)) * (2.0 * PI / L);
  float k = length(kv);
  vec4 h0 = texelFetch(tH0, p, 0);
  float w = sqrt(${je.toFixed(3)} * k);
  float ph = mod(w * uTime, 2.0 * PI);
  vec2 e = vec2(cos(ph), sin(ph));
  vec2 h = cmul(h0.xy, vec2(e.x, -e.y)) + cmul(h0.zw, e);
  vec2 ih = vec2(-h.y, h.x);
  float ik = k > 0.0 ? 1.0 / k : 0.0;
  vec2 Dx = ih * kv.x * ik, Dz = ih * kv.y * ik;
  vec2 sx = ih * kv.x, sz = ih * kv.y;
  vec2 Jxx = -h * kv.x * kv.x * ik, Jzz = -h * kv.y * kv.y * ik, Jxz = -h * kv.x * kv.y * ik;
  o0 = vec4(pack(h, Dx), pack(Dz, sx));
  o1 = vec4(pack(sz, Jxx), pack(Jzz, Jxz));
}`,Ws=So+`
uniform sampler2D t0, t1;
uniform int N;
uniform int uSub;
uniform bool uHoriz;
layout(location = 0) out vec4 o0;
layout(location = 1) out vec4 o1;
void main() {
  ivec2 p = ivec2(gl_FragCoord.xy);
  int base = uHoriz ? 0 : (p.y / N) * N;
  int idx = uHoriz ? p.x : p.y - base;
  int half_ = uSub / 2;
  int ev = (idx / uSub) * half_ + (idx - (idx / half_) * half_);
  int od = ev + N / 2;
  ivec2 pe = uHoriz ? ivec2(ev, p.y) : ivec2(p.x, base + ev);
  ivec2 po = uHoriz ? ivec2(od, p.y) : ivec2(p.x, base + od);
  float a = 2.0 * PI * float(idx) / float(uSub);
  vec2 tw = vec2(cos(a), sin(a));
  vec4 e0 = texelFetch(t0, pe, 0), q0 = texelFetch(t0, po, 0);
  vec4 e1 = texelFetch(t1, pe, 0), q1 = texelFetch(t1, po, 0);
  o0 = vec4(e0.xy + cmul(tw, q0.xy), e0.zw + cmul(tw, q0.zw));
  o1 = vec4(e1.xy + cmul(tw, q1.xy), e1.zw + cmul(tw, q1.zw));
}`,Hs=So+`
uniform sampler2D t0, t1, tPrev;
uniform int N;
uniform int uCascade;
uniform float uLambda;
uniform float uDecay;     // foam kept from the previous frame (exp(-dt / tau))
uniform vec2 uFoam;       // Jacobian bias, gain
layout(location = 0) out vec4 oA;
layout(location = 1) out vec4 oB;
void main() {
  ivec2 p = ivec2(gl_FragCoord.xy);
  ivec2 q = ivec2(p.x, p.y + uCascade * N);
  vec4 f0 = texelFetch(t0, q, 0), f1 = texelFetch(t1, q, 0);
  float h = f0.x, Dx = f0.y, Dz = f0.z, sx = f0.w;
  float sz = f1.x, Jxx = f1.y, Jzz = f1.z, Jxz = f1.w;
  float J = (1.0 + uLambda * Jxx) * (1.0 + uLambda * Jzz) - uLambda * uLambda * Jxz * Jxz;
  float fresh = clamp((uFoam.x - J) * uFoam.y, 0.0, 1.0);
  float prev = texelFetch(tPrev, p, 0).w;
  float foam = max(prev * uDecay, fresh);
  oA = vec4(uLambda * Dx, h, uLambda * Dz, foam);
  oB = vec4(sx, sz, uLambda * Jxx, uLambda * Jzz);
}`;function Os(){const e=new de;return e.setAttribute("position",new nt([-1,-1,0,3,-1,0,-1,3,0],3)),e}class Vs{N;count;sea;spectrum;cascades;foam={bias:.8,gain:3,tau:2.6};time=0;h0;fft;out;flip=0;scene=new ca;cam=new Va(-1,1,1,-1,0,1);quad;evolve;pass;assemble;views;constructor(t,a){const n=this.N=a.size,r=this.count=a.cascades;this.sea=a.sea,this.spectrum=Cs(a.sea,n,r,a.seed);const i=!!t.getContext().getExtension("EXT_color_buffer_float")?Wt:io;this.h0=new xo(this.spectrum.h0,n,n*r,wt,Wt),this.h0.minFilter=this.h0.magFilter=Mt,this.h0.needsUpdate=!0;const p=()=>new lo(n,n*r,{count:2,type:i,format:wt,minFilter:Mt,magFilter:Mt,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1});this.fft=[p(),p()];const d=a.anisotropy??8,h=()=>{const g=new lo(n,n,{count:2,type:io,format:wt,minFilter:It,magFilter:ua,wrapS:Ft,wrapT:Ft,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!0,anisotropy:d});for(const y of g.textures)y.wrapS=y.wrapT=Ft,y.anisotropy=d,y.generateMipmaps=!0,y.minFilter=It;return g};this.out=Array.from({length:r},()=>[h(),h()]),this.views=this.out.map(([g])=>({displacement:g.textures[0],slopes:g.textures[1]})),this.cascades=this.spectrum.specs.map((g,y)=>{const S=this.views[y];return{L:g.L,get displacement(){return S.displacement},get slopes(){return S.slopes}}});const l=[0,0,0,0];this.spectrum.specs.forEach((g,y)=>{l[y]=g.L});const f=(g,y)=>new $a({vertexShader:_s,fragmentShader:g,uniforms:y,glslVersion:Ba,depthTest:!1,depthWrite:!1});this.evolve=f(Is,{tH0:{value:this.h0},N:{value:n},uTime:{value:0},uL:{value:l}}),this.pass=f(Ws,{t0:{value:null},t1:{value:null},N:{value:n},uSub:{value:2},uHoriz:{value:!0}}),this.assemble=f(Hs,{t0:{value:null},t1:{value:null},tPrev:{value:null},N:{value:n},uCascade:{value:0},uLambda:{value:a.sea.choppiness},uDecay:{value:1},uFoam:{value:new oe}}),this.quad=new re(Os(),this.evolve),this.quad.frustumCulled=!1,this.scene.add(this.quad)}update(t,a,n){this.time=a;const r=t.getRenderTarget(),s=t.autoClear;t.autoClear=!1;const o=(l,f)=>{this.quad.material=l,t.setRenderTarget(f),t.render(this.scene,this.cam)};this.evolve.uniforms.uTime.value=a,o(this.evolve,this.fft[0]);let i=0;const p=Math.log2(this.N);for(const l of[!0,!1])for(let f=1;f<=p;f++){const g=this.pass.uniforms;g.t0.value=this.fft[i].textures[0],g.t1.value=this.fft[i].textures[1],g.uSub.value=1<<f,g.uHoriz.value=l,o(this.pass,this.fft[1-i]),i=1-i}const d=this.assemble.uniforms;d.t0.value=this.fft[i].textures[0],d.t1.value=this.fft[i].textures[1],d.uDecay.value=n>0?Math.exp(-n/this.foam.tau):1,d.uLambda.value=this.sea.choppiness;const h=1-this.flip;for(let l=0;l<this.count;l++)d.uCascade.value=l,d.tPrev.value=this.out[l][this.flip].textures[0],d.uFoam.value.set(this.foam.bias-l*.12,this.foam.gain),o(this.assemble,this.out[l][h]),this.views[l].displacement=this.out[l][h].textures[0],this.views[l].slopes=this.out[l][h].textures[1];this.flip=h,t.autoClear=s,t.setRenderTarget(r)}warm(t,a,n=4,r=1/20){this.clearFoam(t);for(let s=a-n;s<a-1e-6;s+=r)this.update(t,s,r);this.update(t,a,r)}clearFoam(t){const a=t.getRenderTarget(),n=t.getClearColor(new J),r=t.getClearAlpha();t.setClearColor(0,0);for(const s of this.out)for(const o of s)t.setRenderTarget(o),t.clear(!0,!1,!1);t.setClearColor(n,r),t.setRenderTarget(a)}dispose(){this.h0.dispose();for(const t of this.fft)t.dispose();for(const t of this.out)for(const a of t)a.dispose();this.evolve.dispose(),this.pass.dispose(),this.assemble.dispose(),this.quad.geometry.dispose()}}const ee=32;function $s(e,t,a,n,r,s){const o=e.index.array,i=new Uint32Array(o.length*2);i.set(o,0),i.set(o,o.length),e.setIndex(new fa(i,1));const p=(t-1)*6,d=a/ee,h=[];for(let v=0;v<=12;v++)h.push(Math.min(t-1,Math.round((t-1)*(v/12)**1.6)));const l=[...new Set(h)],f=Math.PI/ee,g=1/Math.cos(f),y=l.length,S=new Float32Array(ee*y*6),x=new qa,b=new K,c=new Float32Array(ee),u=new Float32Array(ee);for(let v=0;v<ee;v++){const z=v*2*Math.PI/ee;c[v]=Math.cos(z),u[v]=Math.sin(z)}const w=new Uint8Array(ee),k=new Float32Array(y),m={enabled:a%ee===0,last:ee,apply(v,z,A){if(!m.enabled){e.setDrawRange(0,o.length),m.last=ee;return}v.updateMatrixWorld(),b.multiplyMatrices(v.projectionMatrix,v.matrixWorldInverse),x.setFromProjectionMatrix(b,v.coordinateSystem);const F=x.planes;for(let C=0;C<y;C++){const I=n[l[C]*4],_=C>0?n[l[C-1]*4]:I,R=C+1<y?n[l[C+1]*4]:I;k[C]=Math.max((I-_)*(I-_),(R-I)*(R-I))/(8*r)}for(let C=0;C<ee;C++)for(let I=0;I<y;I++){const _=n[l[I]*4]*g,R=_*c[C],V=_*u[C],ke=-z-A.x*R-A.y*V-_*_/(2*r),ne=s+k[I],ce=(C*y+I)*6;for(let se=0;se<6;se++){const Z=F[se],q=Z.normal;S[ce+se]=q.x*R+q.y*ke+q.z*V+Z.constant+Math.abs(q.y)*ne+(Math.abs(q.x)+Math.abs(q.z))*s}}let N=!1;for(let C=0;C<ee;C++){const I=C*y*6,_=(C+1)%ee*y*6;let R=!1;for(let V=0;V+1<y&&!R;V++){const ke=V*6,ne=(V+1)*6;let ce=!1;for(let se=0;se<6&&!ce;se++)ce=S[I+ke+se]<0&&S[_+ke+se]<0&&S[I+ne+se]<0&&S[_+ne+se]<0;ce||(R=!0)}w[C]=R?1:0,R&&(N=!0)}if(!N){e.setDrawRange(0,0),m.last=0;return}let O=0,B=-1,W=0;for(let C=0;C<2*ee;C++)w[C%ee]?W=0:(W++,W>O&&W<=ee&&(O=W,B=C%ee));const X=O?(B+1)%ee:0,ae=ee-O;m.last=ae,e.setDrawRange(X*d*p,ae*d*p)}};return m}const Bs=1e-4,na=2e3;function qs(e,t=128){const a=new Ua(t,{type:io,format:wt,generateMipmaps:!0,minFilter:It,magFilter:ua,depthBuffer:!1}),n=new ca,r=new en({...e.textures,sun:!1,moon:!1,ground:!0,groundAlbedo:new J(.03,.045,.06)}),s=new de;s.setAttribute("position",new nt([-1,-1,0,3,-1,0,-1,3,0],3));const o=new re(s,r);o.frustumCulled=!1,n.add(o);const i=new Ga(.1,10,a);n.add(i);const p=i.children;let d=0,h=6,l=0;const f=new M,g=new M,y=new M,S={texture:a.texture,size:t,get version(){return l},rest:!0,update(x,b,c=!1){if(i.position.set(0,-Math.max(0,b)+2,0),i.updateMatrixWorld(!0),y.copy(i.position).applyMatrix4(e.worldToECEF),(c||!S.rest||f.angleTo(e.sunECEF)>Bs||y.distanceToSquared(g)>na*na)&&((h===0||c)&&(d=0),h=6,f.copy(e.sunECEF),g.copy(y)),!h)return;r.worldToECEFMatrix.copy(e.worldToECEF),r.sunDirection.copy(e.sunECEF);const u=x.getRenderTarget(),w=c?6:1;for(let k=0;k<w;k++){const m=c?k:d;d=(d+1)%6,x.setRenderTarget(a,m),x.render(n,p[m])}x.setRenderTarget(u),h=Math.max(0,h-w),h||l++},dispose(){a.dispose(),r.dispose(),s.dispose()}};return S}const xt=63710088e-1;function Us(e,t){const a=new Float32Array(e*(t+1)*3);let n=0;for(let o=0;o<=t;o++)for(let i=0;i<e;i++)a[n++]=i,a[n++]=o,a[n++]=0;const r=new Uint32Array((e-1)*t*6);n=0;for(let o=0;o<t;o++)for(let i=0;i<e-1;i++){const p=o*e+i,d=p+1,h=p+e,l=h+1;r[n++]=p,r[n++]=h,r[n++]=d,r[n++]=d,r[n++]=h,r[n++]=l}const s=new de;return s.setAttribute("position",new nt(a,3)),s.setIndex(new fa(r,1)),s}class Gs{constructor(t){this.rings=t,this.data=new Float32Array(t*4),this.texture=new xo(this.data,t,1,wt,Wt),this.texture.minFilter=this.texture.magFilter=Mt}rings;texture;data;lastH=-1;update(t){if(t=Math.max(.5,t),Math.abs(t-this.lastH)<this.lastH*.002)return;this.lastH=t;const a=xt,n=this.rings,r=Math.sqrt(2*a*t+t*t),s=h=>Math.atan2(t+h*h/(2*a),h),o=s(r),i=[1,1.04,1.15],p=n-i.length+1,d=new Float64Array(n);for(let h=0;h<p;h++){const l=1-h/(p-1),f=o+(Math.PI/2-o)*l**1.7;if(h===0){d[h]=0;continue}if(h===p-1){d[h]=r;continue}let g=0,y=r;for(let S=0;S<48;S++){const x=(g+y)/2;s(x)>f?g=x:y=x}d[h]=(g+y)/2}for(let h=1;h<i.length;h++)d[p-1+h]=r*i[h];for(let h=0;h<n;h++){const l=h<n-1?d[h+1]-d[h]:d[h]-d[h-1];this.data[h*4]=d[h],this.data[h*4+1]=Math.max(l,h>0?d[h]-d[h-1]:l)}this.texture.needsUpdate=!0}}const Lt=(e,t)=>Array.from({length:e},(a,n)=>t(n)).join(`
`),_t=65536,sa=`
uniform vec2 uWindDir, uSeaOff;
const float SEA_P = ${_t.toFixed(1)};
float sHash(vec2 i) { return fract(sin(dot(i, vec2(127.1, 311.7))) * 43758.5453); }
// value noise with cells of size cell (m, powers of two dividing SEA_P), faded to 0.5 when unresolved
float sNoise(vec2 p, vec2 cell, float fp) {
  vec2 per = SEA_P / cell;
  vec2 x = p / cell;
  vec2 i = floor(x), fr = x - i;
  vec2 u = fr * fr * (3.0 - 2.0 * fr);
  vec2 i0 = mod(i, per), i1 = mod(i + 1.0, per);
  float n = mix(mix(sHash(i0), sHash(vec2(i1.x, i0.y)), u.x), mix(sHash(vec2(i0.x, i1.y)), sHash(i1), u.x), u.y);
  return mix(0.5, n, smoothstep(1.0, 3.0, min(cell.x, cell.y) / max(fp, 1e-3)));
}
`,po=`
uniform vec2 uShipPos, uShipDir, uShipHalf;
// x^2. Never pow(x, 2.0): GLSL leaves pow undefined for x < 0, and D3D (HLSL's exp2(y log2 x)) and
// Metal under fast math return NaN there, which blacked out the sea (see the note at the end of main()).
float sq(float x) { return x * x; }
uniform float uShipSpeed, uWake;
// The waterline's half-beam a metres forward of its centre: a fine entrance over the first ~40 %
// of the length from the stem, full amidships, easing in toward the transom (the CVN's lines,
// src/carrier/hull.ts wlHalf, scaled to the ship's waterline length and beam).
float wlHalf(float a) {
  float L = 2.0 * uShipHalf.x;
  float dw = uShipHalf.x - a;                // m aft of the stem
  if (dw <= 0.0 || dw >= L) return 0.0;
  float b = uShipHalf.y * (1.0 - pow(1.0 - clamp(dw / (0.394 * L), 0.0, 1.0), 2.2));
  float r = clamp((dw / L - 0.877) / 0.123, 0.0, 1.0);
  return b * (1.0 - 0.2 * r * r);
}
// The bow wave's height (m) at ship-relative q. The stem drives the water up into a mound just
// ahead of it; the crest peels off both sides of the bow, diverging ~23 deg from the hull and
// decaying into the Kelvin pattern within ~100 m, with a trough along the shoulder behind it.
// Height ~ U^2 / 2g scaled down for the CVN's bulb (which cancels much of it): ~1.7 m at 25 kt.
float bowWave(vec2 q) {
  float a = dot(q, uShipDir);
  float c = abs(dot(q, vec2(-uShipDir.y, uShipDir.x)));
  float bd = uShipHalf.x - a, bdp = max(bd, 0.0);
  float side = max(c - wlHalf(a), 0.0);
  float H0 = 1.7 * min(uShipSpeed * uShipSpeed / 165.0, 1.6) * uWake;
  float crest = 0.8 + 0.42 * bdp;
  float w = 2.2 + 0.1 * bdp;
  float along = exp(-bdp / 45.0) * smoothstep(-14.0, 0.0, bd);
  float g = exp(-sq((side - crest) / w));
  float tr = 0.45 * exp(-sq((bd - 60.0) / 30.0)) * exp(-side / 14.0) * step(-uShipHalf.x * 2.0, -bd);
  return H0 * (along * g - tr);
}
`;function js(e){const t=e.cascades,a={tRings:{value:null},uSegs:{value:e.segments},uH:{value:10},uTilt:{value:new oe},uInvR:{value:1/xt},uN:{value:e.size},uDispFade:{value:1},uLodBias:{value:.5},...Object.fromEntries(Array.from({length:t},(s,o)=>[[`tDisp${o}`,{value:null}],[`tSlope${o}`,{value:null}],[`uOff${o}`,{value:new oe}],[`uL${o}`,{value:1}]]).flat()),uCascadeW:{value:[1,1,1,1]},uFoamW:{value:[1,.35,0,0]},uRms:{value:[1,1,1,1]},uSunDir:{value:new M(0,1,0)},uSunE:{value:new J},uSkyE:{value:new J},tSky:{value:null},uSkyTexels:{value:128},tVar:{value:null},uVarTotal:{value:new oe},uVarResidual:{value:new oe},uAniso:{value:8},uDetailOff:{value:new oe},uDetailL:{value:2},uDetailRot:{value:new ja(1,0,0,1)},uDetailAmp:{value:0},uDetailVar:{value:0},uRrs:{value:new M(35e-5,.0019,.0068)},uSSS:{value:new M(3e-4,.0024,.0022)},uBubble:{value:new M(.006,.02,.022)},uFoamAlbedo:{value:.75},uFoamGain:{value:1},uSpecular:{value:1},uGlintMax:{value:60},uReflection:{value:1},uShipPos:{value:new oe(1e7,1e7)},uShipDir:{value:new oe(0,-1)},uShipHalf:{value:new oe(166.5,38.5)},uShipSpeed:{value:12.86},uShipDeck:{value:18.9},tShipShadow:{value:null},uShadowMatrix:{value:new K},uShadowOn:{value:0},uShadowR:{value:new oe(.001,.006)},uTravel:{value:0},uTime:{value:0},uWake:{value:1},uDebug:{value:0},uWindDir:{value:new oe(.7071,.7071)},uSeaOff:{value:new oe}},n=`
#include <common>
#include <logdepthbuf_pars_vertex>
uniform sampler2D tRings;
uniform float uSegs, uH, uInvR, uN, uDispFade, uLodBias;
uniform vec2 uTilt;
${Lt(t,s=>`uniform sampler2D tDisp${s}; uniform vec2 uOff${s}; uniform float uL${s};`)}
${po}
${sa}
varying vec3 vPos;
varying vec2 vX0;
varying vec4 vSea;     // the sea's km-scale fields: gust, tint, 1 km tap mask, slick-lane gate
varying float vLaneShift;
void main() {
  vec4 ring = texelFetch(tRings, ivec2(int(position.x + 0.5), 0), 0);
  float th = position.y * (2.0 * PI / uSegs);
  vec2 x0 = ring.x * vec2(cos(th), sin(th));
  // the km-scale fields are smooth over many pixels: per vertex, faded by the grid's cell
  {
    float cellV = max(ring.y, ring.x * 2.0 * PI / uSegs);
    vec2 wf = uSeaOff + vec2(dot(x0, uWindDir), dot(x0, vec2(-uWindDir.y, uWindDir.x)));
    float gust = 0.6 * sNoise(wf, vec2(4096.0, 2048.0), cellV) + 0.4 * sNoise(wf + 913.0, vec2(1024.0, 512.0), cellV);
    float tint = sNoise(wf + 4000.0, vec2(8192.0, 8192.0), cellV);
    float m0 = sNoise(wf + 2222.0, vec2(1024.0, 1024.0), cellV);
    float lanes = sNoise(wf + 999.0, vec2(4096.0, 2048.0), cellV);
    vSea = vec4(gust, tint, m0, lanes);
    vLaneShift = 60.0 * (sNoise(wf + 31.0, vec2(512.0, 4096.0), cellV) - 0.5);
  }
  vec3 d = vec3(0.0);
#if ${e.displacement?1:0}
  float cell = max(ring.y, ring.x * 2.0 * PI / uSegs);
  ${Lt(t,s=>`{
    float lod = log2(max(cell * uN / uL${s}, 1.0)) + uLodBias;
    float w = 1.0 - smoothstep(log2(uN) - 3.0, log2(uN) - 1.0, lod);
    if (w > 0.0) d += textureLod(tDisp${s}, (uOff${s} + x0) / uL${s}, lod).xyz * w;
  }`)}
  // the bow wave, where the grid is fine enough to carry it
  if (uWake > 0.0 && cell < 6.0) d.y += bowWave(x0 - uShipPos) * (1.0 - smoothstep(2.5, 6.0, cell));
  d *= uDispFade;
  // a non-finite displacement would drop the triangle (a hole: the black ground under the horizon)
  if (any(equal(floatBitsToUint(d) & 0x7f800000u, uvec3(0x7f800000u)))) d = vec3(0.0);
#endif
  vec3 p = vec3(x0.x + d.x, -uH - dot(uTilt, x0) - dot(x0, x0) * 0.5 * uInvR + d.y, x0.y + d.z);
  vPos = p;
  vX0 = x0;
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
  #include <logdepthbuf_vertex>
}`,r=`
#include <common>
#include <logdepthbuf_pars_fragment>
uniform float uGlintMax, uInvR, uH, uAniso, uSkyTexels, uFoamAlbedo, uFoamGain, uSpecular, uReflection;
uniform int uDebug;
uniform vec2 uTilt;
${Lt(t,s=>`uniform sampler2D tDisp${s}, tSlope${s}; uniform vec2 uOff${s}; uniform float uL${s};`)}
uniform float uCascadeW[4], uFoamW[4], uRms[4];
uniform vec3 uSunDir, uSunE, uSkyE;
uniform samplerCube tSky;
uniform sampler2D tVar;
uniform vec2 uVarTotal, uVarResidual;
uniform vec2 uDetailOff;
uniform vec4 uDetailRot;
uniform float uDetailL, uDetailAmp, uDetailVar, uN;
uniform vec3 uRrs, uSSS, uBubble;
${po}
uniform float uShipDeck, uTime, uTravel, uShadowOn;
${sa}
uniform sampler2DShadow tShipShadow;
uniform mat4 uShadowMatrix;
uniform vec2 uShadowR;
varying vec3 vPos;
varying vec2 vX0;
varying vec4 vSea;
varying float vLaneShift;

const float BINS = ${Ge.toFixed(1)};
vec2 cumVar(float k) {
  float x = clamp((log2(max(k, 1e-9)) * 0.30103 - (${Ut.toFixed(1)})) / (${(Ma-Ut).toFixed(1)}) * BINS, 0.0, BINS);
  int i = int(floor(x));
  float f = x - float(i);
  vec2 a = texelFetch(tVar, ivec2(i, 0), 0).xy;
  vec2 b = texelFetch(tVar, ivec2(min(i + 1, int(BINS)), 0), 0).xy;
  return mix(a, b, f);
}

float fresnel(float c) {
  // Schlick, water n = 1.333
  float m = clamp(1.0 - c, 0.0, 1.0);
  float m2 = m * m;
  return 0.0204 + 0.9796 * m2 * m2 * m;
}

// Smith masking for a Gaussian (Beckmann) slope distribution, rms slope s along the direction
float smithLambda(float cosT, float s) {
  float c = clamp(cosT, 1e-4, 1.0);
  float t = sqrt(1.0 - c * c) / c;
  float a = 1.0 / max(s * t, 1e-4);
  return a < 1.6 ? (1.0 - 1.259 * a + 0.396 * a * a) / (3.535 * a + 2.181 * a * a) : 0.0;
}

// ---- the ship's wake. Its foam and bubbles are drawn in the water's frame along the track
// (A = metres along the track in the water, periodic every WP m; C = metres across, signed), so
// the white water stays put on the sea while the ship steams away from it. Every noise octave is
// faded to its mean once a pixel's footprint covers its cell, and every threshold is softened by
// its own screen derivative: the foam's edges dissolve into coverage instead of aliasing into
// blocks when the wake is seen from altitude.
const float WP = 7200.0;
float wHash(vec2 i) { return fract(sin(dot(i, vec2(127.1, 311.7))) * 43758.5453); }
float wNoise(vec2 p, float per) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float i0 = mod(i.x, per), i1 = mod(i.x + 1.0, per);
  return mix(mix(wHash(vec2(i0, i.y)), wHash(vec2(i1, i.y)), u.x),
             mix(wHash(vec2(i0, i.y + 1.0)), wHash(vec2(i1, i.y + 1.0)), u.x), u.y);
}
// fBm of four octaves from cell size s (A, C metres; s.x must divide WP), each faded to 0.5 where
// the pixel footprint fp reaches its cell; drift slides octaves across the track over time
float wFbm(vec2 m, vec2 s, float fp, vec2 drift) {
  float sum = 0.0, amp = 0.5, norm = 0.0;
  for (int k = 0; k < 4; k++) {
    float keep = smoothstep(1.0, 3.0, min(s.x, s.y) / max(fp, 1e-3));
    float n = wNoise(m / s + drift * float(k + 1) + float(k) * 17.3, WP / s.x);
    sum += amp * mix(0.5, n, keep);
    norm += amp; amp *= 0.5; s *= 0.5;
  }
  return sum / norm;
}
// a threshold step softened by the screen derivative of its argument (and a floor, soft)
float aaStep(float v, float soft) {
  float w = max(fwidth(v) * 1.2, soft);
  return smoothstep(-w, w, v);
}

// the wake at sea point x (camera-relative) for a pixel footprint fp (m):
// x white water (coverage), y bubbly water, z slick
vec3 wake(vec2 x, float fp, out vec2 kslope) {
  kslope = vec2(0.0);
  vec2 q = x - uShipPos;
  vec2 perp = vec2(-uShipDir.y, uShipDir.x);
  float a = dot(q, uShipDir);
  float cs = dot(q, perp);
  float c = abs(cs);
  float hl = uShipHalf.x, hb = uShipHalf.y;
  float b = -(a + hl);                       // metres astern of the stern (negative alongside)
  float bb = max(b, 0.0);
  float A = mod(a + uTravel, WP);            // along the track, in the water
  vec2 m = vec2(A, cs);
  float t = uTime;
  float start = smoothstep(-0.25 * hl, 0.0, b);

  // the track meanders a little (the helm, the swell): a low-frequency lateral shift
  float wander = (wNoise(vec2(A / 400.0, 3.7), WP / 400.0) - 0.5) * hb * 0.5 * smoothstep(0.0, 600.0, bb);
  float cw = abs(cs - wander);

  // 2. the white trail's noise: long streaks of foam along the track (also frays the churn's edges)
  float wS = hb * (0.65 + bb / 1600.0);
  float st = wFbm(m, vec2(90.0, 7.0), fp, vec2(0.0, 0.0));
  float st2 = wFbm(m, vec2(45.0, 18.0), fp, vec2(0.0, 0.0));
  float acrossS = exp(-sq(cw / (wS * (0.7 + 0.6 * st2))));
  float thrS = 0.52 + 0.14 * smoothstep(0.0, 1800.0, bb) + (1.0 - acrossS) * 0.3;
  float streak = aaStep(st - thrS, 0.03 + 0.25 * smoothstep(2.0, 14.0, fp)) * smoothstep(0.08, 0.35, acrossS) * (1.0 - smoothstep(1500.0, 3200.0, bb)) * start;

  // 1. propwash churn: beam-wide, boiling, near-solid white right under the stern, opening into
  //    patches and holes within a few hundred metres; the share of holes grows astern and toward
  //    the edges, which fray along the track into streaks, so the churn dissolves into the sea
  float wC = hb * (0.8 + 0.55 * (1.0 - exp(-bb / 180.0)) + bb / 2500.0);
  float eC = wFbm(m, vec2(24.0, 24.0), fp, vec2(0.0, t * 0.05));
  float boil = wFbm(m, vec2(12.0, 12.0), fp, vec2(t * 0.02, t * 0.11));
  float lace = wFbm(m, vec2(4.0, 3.0), fp, vec2(t * 0.05, t * 0.2));
  float inC = 1.0 - cw / (wC * (0.75 + 0.55 * eC));
  float openC = 0.3 + 0.3 * smoothstep(0.0, 300.0, bb);
  float edgeC = clamp(inC * 2.2, 0.0, 1.0);
  float thC = openC + (1.0 - edgeC) * 0.32 - (st - 0.5) * 0.5 * (1.0 - edgeC);
  float fineAA = 0.3 * smoothstep(3.0, 24.0, fp);
  float churn = aaStep(boil - thC, 0.05 + fineAA) * aaStep(lace - 0.3 - 0.2 * (1.0 - edgeC), 0.04 + 0.3 * smoothstep(1.0, 4.0, fp));
  churn *= step(-0.25, inC) * (1.0 - smoothstep(200.0, 600.0, bb)) * start;
  churn *= mix(0.7, 1.0, boil) * mix(0.4, 1.0, edgeC);   // the outlying patches are thinner, greyer foam

  float foam = max(churn, streak * mix(0.75, 0.4, smoothstep(200.0, 1500.0, bb)));

  // 3. the pale-turquoise band beyond: bubbles under the surface, wider than the white water,
  //    with a ragged, soft edge, lasting several km
  float wB = hb * (1.15 + bb / 380.0);
  float eB = wFbm(m, vec2(160.0, 60.0), fp, vec2(0.0, 0.0));
  float bub = exp(-sq(cw / (wB * (0.75 + 0.5 * eB)))) * exp(-bb / 4500.0) * start;
  bub = max(bub, churn * 0.9);
  // 4. the slick: churned water flattens the short waves over an even wider band
  float slick = exp(-sq(cw / (wB * 1.5))) * exp(-bb / 9000.0) * start;

  float bdp = max(hl - a, 0.0);              // metres aft of the stem
  // ---- the hull meets the water (only near the hull: these noises are most of the wake's cost)
  if (abs(a) < hl + 40.0 && c < hb + 90.0) {
  float hbA = wlHalf(a);
  float side = c - hbA;                      // metres out from the waterline (negative: inside the hull)
  float along = smoothstep(-hl - 10.0, -hl + 5.0, a) * (1.0 - smoothstep(hl + 10.0, hl + 25.0, a));
  float bow = smoothstep(-hl, hl, a);
  float aft = 1.0 - bow;
  // the bow wave's crest (bowWave): the water piled against the stem breaks over the crest as it
  // peels off the flare, white and churning near the stem, thinning to broken lines aft
  float crestS = 0.8 + 0.42 * bdp, crestW = 2.2 + 0.1 * bdp;
  float onCrest = exp(-sq((max(side, 0.0) - crestS * 0.92) / (crestW * (0.75 - 0.35 * smoothstep(0.0, 60.0, bdp)))));
  float bwAlong = (0.2 + 0.8 * exp(-bdp / 22.0)) * exp(-bdp / 70.0) * smoothstep(-10.0, 0.0, hl - a);
  float bwN = wFbm(m, vec2(14.0, 2.0), fp, vec2(0.0, t * 0.15));
  float bwF = onCrest * bwAlong;
  foam = max(foam, bwF * aaStep(bwN - 0.62 + 0.55 * bwF, 0.05));
  // the mound of white water at the stem itself
  float mound = exp(-max(a - hl, 0.0) / 5.0) * exp(-max(side, 0.0) / 3.5) * smoothstep(-25.0, 0.0, a - hl) * step(hl - 25.0, a);
  float mN = wFbm(m, vec2(5.0, 5.0), fp, vec2(t * 0.1, t * 0.3));
  foam = max(foam, mound * aaStep(mN - 0.5 + 0.45 * mound, 0.05));
  // the waterline band: water dragged along the plating breaks into a ragged white strip hugging
  // both sides the whole length, streaked along the flow, widening aft as the boundary layer grows,
  // and fed into the propwash churn at the stern
  float bandW = 1.2 + 2.2 * bow * bow + 2.6 * aft;
  float sideN = wFbm(m, vec2(16.0, 2.5), fp, vec2(0.0, t * 0.1));
  float sideN2 = wFbm(m, vec2(5.0, 1.5), fp, vec2(0.0, t * 0.3));
  float sideF = exp(-max(side, 0.0) / bandW) * (0.5 + 0.45 * bow * bow) * step(-2.0, side) * along;
  foam = max(foam, sideF * aaStep(sideN * 0.7 + sideN2 * 0.3 - 0.5 + 0.4 * sideF, 0.05));
  // the turbulent band under it: entrained bubbles, wider aft, and the glassy smoothed water beside the hull
  float turb = exp(-max(side, 0.0) / (3.0 + 6.0 * bow + 10.0 * aft)) * along * step(-2.0, side);
  bub = max(bub, turb * (0.55 + 0.25 * aft) + bwF * 0.6);
  slick = max(slick, exp(-max(side, 0.0) / (6.0 + 12.0 * aft)) * along * 0.3);
  }

  // Kelvin arms (19.47 deg) off the bow: a little broken water near the ship, then a smoother line
  float bd = hl - a;
  float arm = abs(c - 0.3535 * bdp);
  float wA = 3.0 + 0.015 * bdp;
  float line = exp(-(arm * arm) / (wA * wA)) * step(0.0, bd);
  float armN = wFbm(m, vec2(15.0, 5.0), fp, vec2(0.0, 0.0));
  foam = max(foam, line * exp(-bdp / 45.0) * 0.5 * aaStep(armN - 0.55, 0.05));
  // the Kelvin pattern's waves (stationary in the ship's frame, U = ship speed):
  // divergent waves along the cusp lines (propagating 35.3 deg off the track, k = g / (U cos)^2)
  // and transverse waves inside the wedge (k0 = g / U^2)
  float k0 = 9.81 / max(uShipSpeed * uShipSpeed, 1.0);
  float kd = k0 * 1.5;
  vec2 dS = vec2(0.8165, 0.5774 * sign(cs));
  float ph = kd * (a * dS.x + c * abs(dS.y));
  float wD = 10.0 + 0.07 * bdp;
  float envD = exp(-sq((c - 0.3535 * bdp) / wD)) * smoothstep(0.0, 60.0, bd);
  float ampD = 0.9 * exp(-bdp / 2200.0) * envD;
  vec2 sD = -ampD * kd * sin(ph) * dS;
  float inWedge = (1.0 - smoothstep(0.25 * bdp, 0.38 * bdp + 1e-3, c)) * smoothstep(0.0, 200.0, bd);
  float ampT = 0.35 * exp(-bdp / 1600.0) * inWedge;
  vec2 sT = vec2(-ampT * k0 * sin(k0 * a), 0.0);
  vec2 sl = sD + sT;
  kslope = (sl.x * uShipDir + sl.y * perp * sign(cs)) * uWake;

  return clamp(vec3(foam, bub, slick), 0.0, 1.0) * uWake;
}

// ---- the ship's shadow: hardware 2x2 PCF taps on a rotated square of radius r (shadow uv).
// Outside the light's frustum (or with no light) the sea is lit.
float shipShadow(vec3 s, float r) {
  float z = s.z - 0.00025;
  float sum = texture(tShipShadow, vec3(s.xy + vec2(r, 0.38 * r), z));
  sum += texture(tShipShadow, vec3(s.xy + vec2(-0.38 * r, r), z));
  sum += texture(tShipShadow, vec3(s.xy + vec2(-r, -0.38 * r), z));
  sum += texture(tShipShadow, vec3(s.xy + vec2(0.38 * r, -r), z));
  return sum * 0.25;
}

// ---- the hull in the water's mirror: the reflected ray against the ship's side, a vertical wall
// on the waterline from the sea up to the flight deck (its flare and the overhang ignored).
// Returns the hull's radiance (rgb) and how much of the reflection it fills (a).
vec4 hullMirror(vec3 P, vec3 R, vec2 q, float seaY, float sig, vec3 L, float sunUp) {
  vec2 perp = vec2(-uShipDir.y, uShipDir.x);
  float a = dot(q, uShipDir), cs = dot(q, perp);
  float sd = cs >= 0.0 ? 1.0 : -1.0;
  float hb = wlHalf(clamp(a, -uShipHalf.x + 1.0, uShipHalf.x - 1.0));
  float rc = dot(R.xz, perp) * sd;           // across, away from the hull
  float gap = abs(cs) - hb;
  if (rc > -1e-3 || gap < -1.0) return vec4(0.0);
  float t = max(gap, 0.0) / -rc;
  float ah = a + t * dot(R.xz, uShipDir);
  float yh = P.y - seaY + t * R.y;           // height of the hit above the sea
  float blur = 1.0 + t * sig * 3.0;          // the unresolved waves blur the image with distance
  // the bow's flare carries the deck ~12 m past the waterline's stem
  float cov = (1.0 - smoothstep(uShipDeck - blur, uShipDeck + blur, yh))
            * smoothstep(-uShipHalf.x - 4.0 - blur, -uShipHalf.x + blur, ah)
            * (1.0 - smoothstep(uShipHalf.x + 8.0 * clamp(yh / 6.0, 0.0, 1.0) - blur, uShipHalf.x + 8.0 * clamp(yh / 6.0, 0.0, 1.0) + blur, ah));
  // haze grey over the black boot-topping at the waterline; the hangar wall in the deck's shade
  // The lower hull flares out (its face tilted ~25 deg down): what the water sees is its shaded
  // underside, lit mostly by the sea and the sky's horizon, so its image is a dark, cool grey.
  // (soft bands: every wave facet mirrors a different height, so hard bands turn into contour lines)
  float alb = mix(0.05, 0.1, smoothstep(0.5, 4.0, yh)) * mix(1.0, 0.6, smoothstep(7.0, 11.0, yh));
  vec3 nS = normalize(vec3(perp.x * sd, -0.45, perp.y * sd));
  vec3 E = uSunE * max(dot(nS, L), 0.0) * sunUp * (1.0 - smoothstep(7.0, 11.0, yh) * 0.85) + uSkyE * 0.35;
  // a long grazing path off the water mostly ends on the wave crests in between, not on the hull:
  // its image is the band close against the hull, broken up further out
  return vec4(alb / PI * E, cov * (1.0 - smoothstep(35.0, 140.0, t)));
}

void main() {
  #include <logdepthbuf_fragment>
  vec3 P = vPos;
  float dist = length(P);
  vec3 V = -P / dist;
  vec2 g = uTilt + vX0 * uInvR;
  vec3 up = normalize(vec3(g.x, 1.0, g.y));

  // ---- the pixel's footprint on the water
  vec3 dpx = dFdx(P), dpy = dFdy(P);
  float fx = length(dpx), fy = length(dpy);
  float f = max(min(fx, fy), max(fx, fy) / uAniso);

  // ---- the sea's variety (SEA_GLSL), in the wind's frame; the km-scale fields come from the vertices
  vec2 wf = uSeaOff + vec2(dot(vX0, uWindDir), dot(vX0, vec2(-uWindDir.y, uWindDir.x)));
  // gusts and catspaws: 3 km and 800 m patches, longer along the wind
  float gS = mix(0.5, 1.3, smoothstep(0.28, 0.72, vSea.x));
  // Langmuir slicks: windrows ~1-2 km long and a few tens of m wide, meandering, here and there
  vec2 wl = wf + vec2(300.0, 77.0 + vLaneShift);
  float lane = sNoise(wl, vec2(2048.0, 64.0), f);
#if ${e.variety>=2?1:0}
  lane = max(lane, 0.96 * sNoise(wl + vec2(1700.0, 5.0), vec2(1024.0, 32.0), f));
#endif
  float slickL = smoothstep(0.72, 0.88, lane) * smoothstep(0.42, 0.72, vSea.w);
  // the water's colour: 8 km patches
  float tint = vSea.y;
  // the second tap's mask: 1 km (and 256 m for the second cascade)
  float mix0 = smoothstep(0.32, 0.68, vSea.z);
#if ${e.variety>=2?1:0}
  float mix1 = smoothstep(0.32, 0.68, sNoise(wf + 555.0, vec2(256.0, 256.0), f));
#endif

  // ---- waves: slopes, Jacobian terms, whitecaps, heights (noise for the wake)
  vec4 sBig = vec4(0.0), sSmall = vec4(0.0);
  float foam = 0.0, crest = 0.0;
  float nz[4];
  ${Lt(t,s=>`{
    vec2 uv = (uOff${s} + vX0) / uL${s};
    vec4 a = texture(tDisp${s}, uv);
    vec4 b = texture(tSlope${s}, uv) * uCascadeW[${s}];
    ${s===0||s===1&&e.variety>=2?`{
      // the same tile at another phase, mixed in under a km mask: variance-preserving
      float wm = ${s===0?"mix0":"mix1"};
      vec2 uv2 = uv + ${s===0?"vec2(0.383, 0.719)":"vec2(0.571, 0.213)"};
      vec4 a2 = texture(tDisp${s}, uv2);
      vec4 b2 = texture(tSlope${s}, uv2) * uCascadeW[${s}];
      float kn = inversesqrt((1.0 - wm) * (1.0 - wm) + wm * wm);
      b = mix(b, b2, wm) * kn;
      a = vec4(mix(a.xyz, a2.xyz, wm) * kn, mix(a.w, a2.w, wm));
    }`:""}
    ${s===0?"sBig += b;":"sSmall += b;"}
    foam += a.w * uFoamW[${s}];
    crest += a.y;
    nz[${s}] = a.y / uRms[${s}];
  }`)}
  ${t<2?"nz[1] = nz[0];":""}
  ${t<3?"nz[2] = nz[1];":""}
  vec2 kelvin;
  vec3 wk = wake(vX0, f, kelvin);
  // the bow wave's slopes (its height is in the vertex displacement on the tiers that have one)
  vec2 qS = vX0 - uShipPos;
  float nearShip = step(dot(qS, qS), sq(uShipHalf.x + 160.0)) * step(1e-3, uWake);
  if (nearShip > 0.0) {
    float e = max(0.4, f);
    float h0 = bowWave(qS);
    kelvin += vec2(bowWave(qS + vec2(e, 0.0)) - h0, bowWave(qS + vec2(0.0, e)) - h0) / e;
  }

  // the wake's slick: the churned water flattens the short waves
  float calm = (1.0 - 0.75 * wk.z) * (1.0 - 0.45 * slickL);
  // the gusts act on the short waves; the long swell barely notices
  vec4 s = sBig * mix(1.0, gS, 0.3) * (1.0 - 0.2 * slickL) + sSmall * calm * gS;
  vec2 slope = s.xy / max(vec2(1.0) + s.zw, vec2(0.25)) + kelvin;
  // detail layer: centimetre ripples the cascades don't carry, where a pixel can see them
  mat2 rotD = mat2(uDetailRot.xy, uDetailRot.zw);
  vec2 dd = texture(tSlope${t-1}, (uDetailOff + rotD * vX0) / uDetailL).xy;
  float resolvedD = clamp(1.0 - log2(max(f * uN / uDetailL, 1.0)) / log2(uN), 0.0, 1.0);
  slope += transpose(rotD) * dd * (uDetailAmp * calm * gS);
  vec3 n = normalize(vec3(g.x - slope.x, 1.0, g.y - slope.y));

  // ---- slope variance below the pixel: the BRDF's roughness
  vec2 var = max(uVarTotal - cumVar(PI / max(f, 1e-5)), vec2(0.0)) + max(uVarResidual - uDetailVar * resolvedD, vec2(0.0));
  var *= 1.0 - 0.7 * wk.z;
  var *= gS * gS * (1.0 - 0.6 * slickL);
  var = max(var, vec2(2e-5));
  float sig = sqrt(0.5 * (var.x + var.y));

  // a resolved normal can face away from the eye at grazing (a wave's back seen over its
  // crest, filtered): bend it back to just visible, as the facets a pixel really sees are
  float NoV0 = dot(n, V);
  if (NoV0 < 0.03) n = normalize(n + V * (0.03 - NoV0));
  float NoV = max(dot(n, V), 1e-3);
  vec3 L = uSunDir;
  float sunUp = smoothstep(-0.01, 0.02, dot(up, L));

  // ---- the ship's shadow. Water takes no hard shadow like a floor: what the shadow removes is the
  // direct sun (the glint, the sun-lit share of the light coming up out of the water, the sun on
  // the foam); the reflected sky stays, so the shadow reads as a darker, bluer, glint-free patch.
  // The glint and foam take it sharp; the water body softer (light scatters metres sideways under
  // the surface before it comes back up).
  float shS = 1.0, shW = 1.0;
  if (uShadowOn > 0.5) {
    vec4 sc4 = uShadowMatrix * vec4(P, 1.0);
    vec3 sc = sc4.xyz / sc4.w;
    if (all(greaterThan(sc.xy, vec2(0.0))) && all(lessThan(sc.xy, vec2(1.0))) && sc.z < 1.0) {
      shS = shipShadow(sc, uShadowR.x);
      shW = mix(shS, shipShadow(sc, uShadowR.y), 0.65);
    }
  }
  // ---- the hull hides part of the sky from the water against it (a wall of the deck's height
  // at distance x hides 1/2 (1 - x / sqrt(x^2 + H^2)) of the cosine-weighted sky)
  float skyVis = 1.0;
  float hullSide = 1e6;
  if (nearShip > 0.0) {
    vec2 perp = vec2(-uShipDir.y, uShipDir.x);
    float aS = dot(qS, uShipDir);
    hullSide = abs(dot(qS, perp)) - wlHalf(aS);
    float alongS = smoothstep(-uShipHalf.x - 6.0, -uShipHalf.x + 6.0, aS) * (1.0 - smoothstep(uShipHalf.x - 4.0, uShipHalf.x + 10.0, aS));
    float x = max(hullSide, 0.0) + 0.6;
    skyVis = 1.0 - 0.5 * (1.0 - x / sqrt(x * x + uShipDeck * uShipDeck)) * alongS;
  }

  // ---- sun glitter: Gaussian slope distribution around the resolved normal
  // (L + V is 0 where the sun, below the horizon at dusk, is exactly behind the water seen from the eye)
  vec3 H = L + V;
  H = dot(H, H) > 1e-12 ? normalize(H) : n;
  float HoN = max(dot(H, n), 1e-3);
  vec3 T = vec3(1.0, 0.0, 0.0) - n * n.x;
  T = dot(T, T) > 1e-12 ? normalize(T) : vec3(0.0, 0.0, 1.0);
  vec3 B = cross(T, n);
  vec2 z = vec2(dot(H, T), dot(H, B)) / HoN;
  float pz = exp(-0.5 * (z.x * z.x / var.x + z.y * z.y / var.y)) / (2.0 * PI * sqrt(var.x * var.y));
  float NoL = dot(n, L);
  float G2 = 1.0 / (1.0 + smithLambda(NoV, sig) + smithLambda(max(NoL, 1e-3), sig));
  vec3 Lsun = uSunE * (fresnel(dot(V, H)) * pz * G2 / (4.0 * HoN * HoN * HoN * HoN * NoV)) * sunUp * step(0.0, NoL) * uSpecular * shS;
  // highlight compression: the glint keeps its sparkle above white, but a glitter path tens
  // of times brighter than the sky would bloom the whole frame in the lens stack
  float glintMax = uGlintMax * dot(uSkyE, vec3(0.2126, 0.7152, 0.0722)) / PI;
  float gl = dot(Lsun, vec3(0.2126, 0.7152, 0.0722));
  Lsun *= 1.0 / (1.0 + gl / max(glintMax, 1e-9));

  // ---- sky reflection, blurred by the unresolved slopes, masked toward grazing
  vec3 R = reflect(-V, n);
  float Rup = dot(R, up);
  if (Rup < 0.02) R = normalize(R + up * (0.02 - Rup));
  float lod = log2(max(sig * uSkyTexels * 0.9, 1.0));
  vec3 Lsky = textureLod(tSky, R, lod).rgb;
  float hullCov = 0.0;
  if (nearShip > 0.0 && hullSide < 120.0) {
    float seaY = -uH - dot(uTilt, vX0) - dot(vX0, vX0) * 0.5 * uInvR;
    vec4 hm = hullMirror(P, R, qS, seaY, sig, L, sunUp);
    Lsky = mix(Lsky, hm.rgb, hm.a);
    hullCov = hm.a;
    if (uDebug == 8) Lsky = mix(vec3(0.0), hm.rgb, hm.a) * 4.0;
  }
  float F = fresnel(NoV) / (1.0 + 0.5 * smithLambda(NoV, sig));

  // ---- the water body: deep-ocean remote-sensing reflectance x downwelling light
  float cosS = max(dot(up, L), 0.0);
  vec3 Ed = uSunE * cosS * sunUp * shW + uSkyE * skyVis;
  vec3 Lw = uRrs * Ed * mix(vec3(0.84, 0.86, 0.9), vec3(1.2, 1.16, 1.1), tint);
  // light through the backlit crests (thin water toward the sun)
  vec3 Lh = normalize(vec3(L.x, 0.0, L.z) + 1e-4);
  // only the tips of the tallest crests are thin enough to glow
  float back = pow(max(dot(-V, Lh) * 0.5 + 0.5, 0.0), 4.0) * smoothstep(1.0, 2.4, crest / max(uRms[0], 1e-3));
  Lw += uSSS * uSunE * cosS * sunUp * back * shW;
  // whitecaps: the Jacobian's coverage, broken up by the short waves into lacy patches
  float detail = clamp(0.5 + 0.35 * nz[2] + 0.2 * nz[1], 0.0, 1.0);
  // whitecaps grow steeply with the wind (~U^3): the gusts carry them, the slicks have none
  float cov = clamp(foam * uFoamGain * gS * gS * gS * (1.0 - slickL), 0.0, 1.0);
  // up close a whitecap is crisp white water with lacy edges, not a grey veil; far out
  // (mip-averaged) it is a coverage fraction
  // (foam is ~50x brighter than the water: a 1 % veil of it reads as a grey film, so up close
  // both whitecaps and the wake's white water are thresholded into patches)
  float nearF = 1.0 - smoothstep(0.4, 3.0, f);
  float capNear = smoothstep(0.4, 0.6, cov * (0.55 + 0.9 * detail));
  float cap = mix(cov * 0.85, capNear, nearF);
  // (the wake's white water is already a filtered coverage: see wake())
  // bubbles under the wake and around white water: pale turquoise
  Lw += uBubble * Ed * max(wk.y * 1.6, 0.2 * smoothstep(0.35, 0.7, max(cov, wk.x)));

  vec3 col = Lsky * F * uReflection + Lw * (1.0 - F) + Lsun;

  // ---- white water: whitecaps and the wake, lit as a diffuse sheet
  float white = clamp(max(cap, wk.x), 0.0, 1.0);
  vec3 Lf = uFoamAlbedo / PI * (uSunE * max(dot(n, L), 0.0) * sunUp * shS + uSkyE * skyVis);
  col = mix(col, Lf, white);
  // alpha: the share of this radiance that a cloud's shadow takes away (lit by the sun:
  // the water body, the glint, the foam); the reflected sky stays (see patchOceanShadow)
  vec3 lit = mix(Lw * (1.0 - F) + Lsun, Lf, white);
  const vec3 Y = vec3(0.2126, 0.7152, 0.0722);
  float shadowShare = clamp(dot(lit, Y) / max(dot(col, Y), 1e-9), 0.0, 1.0);

  if (uDebug == 1) col = n * 0.5 + 0.5;
  else if (uDebug == 2) col = vec3(sqrt(sig) * 2.0);
  else if (uDebug == 3) col = vec3(white);
  else if (uDebug == 4) col = wk * 0.05;
  else if (uDebug == 5) col = vec3(cap, cov, white) * 0.05;
  else if (uDebug == 6) col = vec3(shS, shW, skyVis) * 0.05;
  else if (uDebug == 7) col = vec3(hullCov, wk.x, wk.y) * 0.05;
  else if (uDebug == 8) col = Lsky;
  else if (uDebug == 9) col = vec3(gS - 0.5, slickL, mix0) * 0.05;
  // Last line of defence: a non-finite colour here goes on through the aerial perspective and the
  // lens, where it is zeroed into a black hole in the sea (and before that guard existed, bloomed into
  // a blotch). Every term above is kept finite on any GPU (no pow / smoothstep outside their domain, no
  // normalize(0)); should one still slip, the pixel gets the deep water's own colour, not black.
  if (any(equal(floatBitsToUint(vec4(col, shadowShare)) & 0x7f800000u, uvec4(0x7f800000u)))) {
    col = uRrs * (uSunE * cosS * sunUp + uSkyE) + uSkyE * 0.02 / PI;
    shadowShare = 0.0;
  }
  gl_FragColor = vec4(col, shadowShare);
}`;return new mo({uniforms:a,vertexShader:n,fragmentShader:r,depthWrite:!0,depthTest:!0})}function Ys(e){const t=e.length/2,a=new Float32Array(t*4);for(let r=0;r<t;r++)a[r*4]=e[r*2],a[r*4+1]=e[r*2+1];const n=new xo(a,t,1,wt,Wt);return n.minFilter=n.magFilter=Mt,n.needsUpdate=!0,n}function Js(e){const t=new Ya;t.setAttribute("position",new nt([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),t.setIndex([0,1,2,0,2,3]);const a=new Float32Array(e*4);let n=2654435769;const r=()=>(n^=n<<13,n^=n>>>17,n^=n<<5,(n>>>0)%1e6/1e6);for(let i=0;i<a.length;i++)a[i]=r();t.setAttribute("seed",new Ja(a,4)),t.instanceCount=e;const s=new mo({uniforms:{uShipPos:{value:new oe(1e7,1e7)},uShipDir:{value:new oe(0,-1)},uShipHalf:{value:new oe(158.5,20.4)},uShipSpeed:{value:12.86},uWake:{value:0},uSeaY:{value:0},uTime:{value:0},uSunDir:{value:new M(0,1,0)},uSunE:{value:new J},uSkyE:{value:new J}},vertexShader:`
#include <common>
#include <logdepthbuf_pars_vertex>
${po}
uniform float uSeaY, uTime;
uniform vec3 uSunDir;
attribute vec4 seed;
varying vec2 vUv;
varying float vAlpha;
varying float vPhase;
varying float vSeed;
float h1(float n) { return fract(sin(n) * 43758.5453); }
void main() {
  float U = max(uShipSpeed, 0.0);
  float s = clamp(U / 12.86, 0.0, 1.6);
  // a life of 0.8 - 2.2 s, staggered; each new life rehashes the launch
  float life = mix(0.8, 2.2, seed.x);
  float cyc = floor(uTime / life + seed.y);
  float age = (uTime / life + seed.y - cyc) * life;
  float k = cyc * 7.13 + seed.z * 91.7;
  float r1 = h1(k + 1.1), r2 = h1(k + 2.3), r3 = h1(k + 3.7), r4 = h1(k + 4.9);
  // launch: off the bow wave's crest where it breaks against the stem and the first ~20 m of flare
  float side = seed.w < 0.5 ? -1.0 : 1.0;
  float bd0 = pow(r1, 3.0) * 22.0 - 1.5;
  float a0 = uShipHalf.x - bd0;
  float c0 = side * (wlHalf(a0) + 0.5 + 0.3 * max(bd0, 0.0));
  // the sheets at the stem go highest (a few m); aft it's a low, fine fringe along the crest
  float near = exp(-max(bd0, 0.0) / 7.0);
  float vUp = (1.2 + 8.5 * r2 * r2 * near + 1.2 * r3) * s;
  float vOut = (1.0 + 3.0 * r3) * s;
  float vAft0 = -U * (0.2 + 0.3 * r4);
  float tau = mix(0.35, 1.2, r2);                 // drag time: mist slows fast
  float e = exp(-age / tau);
  float da = -U * age + (vAft0 + U) * tau * (1.0 - e);
  float dc = vOut * tau * (1.0 - e);
  float y0 = (0.4 + 1.0 * near) * s;             // the crest it leaves from stands above the sea
  float y = y0 + vUp * age - 4.9 * age * age;
  // done once it falls back into the sea
  float alive = step(0.0, y + 0.3) * step(1e-3, uWake) * step(1.0, U);
  vec2 perp = vec2(-uShipDir.y, uShipDir.x);
  vec2 xz = uShipPos + uShipDir * (a0 + da) + perp * (c0 + side * dc);
  vec3 pw = vec3(xz.x, uSeaY + max(y, -0.3) + 0.2, xz.y);
  // a clump of drops, spreading as it flies
  float size = (0.2 + (0.35 + 0.9 * near) * r3 * r3 + (0.6 + 0.9 * near) * age / life) * alive;
  vec4 mv = viewMatrix * vec4(pw, 1.0);
  mv.xy += position.xy * size;
  gl_Position = projectionMatrix * mv;
  // each sprite turned at random, so the clumps' lobes don't line up
  float rot = r4 * 6.2832;
  vUv = mat2(cos(rot), sin(rot), -sin(rot), cos(rot)) * position.xy;
  vSeed = r1 * 17.0 + r3 * 3.0;
  float fadeIn = smoothstep(0.0, 0.12, age);
  float fadeOut = 1.0 - smoothstep(0.55, 1.0, age / life);
  vAlpha = fadeIn * fadeOut * (0.35 + 0.5 * near) * uWake * min(s, 1.0);
  // forward scattering toward a sun behind the spray
  vec3 V = normalize(-mv.xyz);
  vec3 Lv = normalize((viewMatrix * vec4(uSunDir, 0.0)).xyz);
  vPhase = 0.7 + 2.5 * pow(max(dot(-V, Lv), 0.0), 6.0);
  #include <logdepthbuf_vertex>
}`,fragmentShader:`
#include <common>
#include <logdepthbuf_pars_fragment>
uniform vec3 uSunE, uSkyE, uSunDir;
varying vec2 vUv;
varying float vAlpha;
varying float vPhase;
varying float vSeed;
void main() {
  #include <logdepthbuf_fragment>
  float r2 = dot(vUv, vUv);
  if (r2 > 1.0) discard;
  // a ragged clump: three lobes of drops, not a soft disc
  float ang = atan(vUv.y, vUv.x);
  float lobes = 0.7 + 0.3 * sin(ang * 3.0 + vSeed) * sin(ang * 5.0 - vSeed * 1.7);
  float rr = sqrt(r2) / max(lobes, 0.2);
  float a = vAlpha * (1.0 - smoothstep(0.45, 1.0, rr));
  float sunUp = smoothstep(-0.01, 0.05, uSunDir.y);
  vec3 col = 0.8 / PI * (uSunE * max(uSunDir.y, 0.2) * sunUp * vPhase + uSkyE);
  gl_FragColor = vec4(col, a);
}`,transparent:!0,depthWrite:!1,depthTest:!0,blending:Xa}),o=new re(t,s);return o.name="ocean-bow-spray",o.frustumCulled=!1,o.renderOrder=11,o}const Xs=["high","medium","phone"],u0={high:{id:"high",size:256,cascades:3,displacement:!0,rings:560,segments:640,skyCube:128,anisotropy:16,simEvery:1,spray:900,variety:2},medium:{id:"medium",size:128,cascades:3,displacement:!0,rings:400,segments:480,skyCube:64,anisotropy:8,simEvery:1,spray:500,variety:2},phone:{id:"phone",size:128,cascades:2,displacement:!1,rings:160,segments:256,skyCube:32,anisotropy:4,simEvery:2,spray:300,variety:1}};function f0(e,t){return t?"phone":e==="low"?"medium":"high"}function h0(e){return e&&Xs.includes(e)?e:null}const ra="radiance *= (skyY + sunY * sunTransmittance) / max(skyY + sunY, 1e-6);",Gt="radiance *= mix(1.0, (skyY + sunY * sunTransmittance) / max(skyY + sunY, 1e-6), clamp(inputColor.a, 0.0, 1.0));",la="outputColor = vec4(radiance, inputColor.a);",Ks=`{
    uvec3 rb = floatBitsToUint(radiance);
    for (int k = 0; k < 3; k++) if ((rb[k] & 0x7f800000u) == 0x7f800000u) radiance[k] = (rb[k] & 0x807fffffu) != 0u ? 0.0 : 65504.0;
  }
  outputColor = vec4(radiance, 1.0);`;function d0(e,t){const a=e.aerial,n=a.getFragmentShader(),r=n.indexOf(Zs);if(r<0)return;const s=n.indexOf(`
`,r),o=t>0?Gt.replace("clamp(inputColor.a, 0.0, 1.0)",`max(clamp(inputColor.a, 0.0, 1.0), ${Math.min(1,t).toFixed(4)})`):Gt;a.setFragmentShader(n.slice(0,r)+o+n.slice(s<0?n.length:s))}const Zs="radiance *= mix(1.0, (skyY + sunY * sunTransmittance) / max(skyY + sunY, 1e-6),";function Qs(e){const t=e.aerial,a=t.getFragmentShader();if(!a.includes(Gt)){if(!a.includes(ra)||!a.includes(la)){console.warn("ocean: AerialPerspective forward-shadow patch not found; cloud shadows will over-darken the sea");return}t.setFragmentShader(a.replace(ra,Gt).replace(la,Ks))}}function p0(e,t,a){const n=new Ka(1,1);n.compareFunction=Za;const r=new lo(1,1,{depthBuffer:!0,depthTexture:n});e.initRenderTarget(r);const s=a.tier;Qs(t);const o={...a.sea??Ps},i=new Vs(e,{size:s.size,cascades:s.cascades,sea:o,seed:a.seed,anisotropy:Math.min(s.anisotropy,e.capabilities.getMaxAnisotropy())}),p=qs(t,s.skyCube),d=new Gs(s.rings),h=js({variety:s.variety,cascades:s.cascades,size:s.size,displacement:s.displacement,segments:s.segments});h.uniforms.tShipShadow.value=n;const l=new re(Us(s.rings,s.segments),h);l.frustumCulled=!1,l.name="ocean",l.renderOrder=10;const f=h.uniforms;f.tRings.value=d.texture,f.tSky.value=p.texture,f.uSkyTexels.value=p.size,f.tVar.value=Ys(i.spectrum.cumVar),f.uVarTotal.value=new oe(...i.spectrum.totalVar);const g=i.spectrum.totalVar[0]+i.spectrum.totalVar[1],y=Math.max(.004,Ns(o.wind)-g);f.uVarResidual.value=new oe(y*.55,y*.45);const x=i.spectrum.specs[i.count-1].L/6.7,b=37*Math.PI/180,c=Math.cos(b),u=Math.sin(b),w=.6*y;f.uDetailL.value=x,f.uDetailRot.value.set(c,u,-u,c),f.uDetailAmp.value=Math.sqrt(w/Math.max(1e-6,i.spectrum.cascadeSlopeVar[i.count-1])),f.uDetailVar.value=w/2,i.spectrum.specs.forEach((_,R)=>{f[`uL${R}`].value=_.L}),f.uRms.value=[...i.spectrum.cascadeRms,1,1,1,1].slice(0,4);const k={position:new M(0,a.seaLevel,0),forward:new oe(0,-1),half:new oe(166.5,38.5),speed:12.86,wake:0,deckHeight:18.9},m=Js(s.spray);l.add(m);const v=m.material.uniforms,z={reflection:1,specular:1,foam:1,rrs:f.uRrs.value,debug:0};let A=null;const F=new M(1e12,0,0),N=new M;let O=!0,B=0,W=0;const X=_=>_.y-a.seaLevel+(_.x*_.x+_.z*_.z)/(2*xt),ae=4*i.spectrum.cascadeRms.reduce((_,R)=>_+R,0)*(1+o.choppiness)+3,C=$s(l.geometry,s.rings,s.segments,d.texture.image.data,xt,ae),I={mesh:l,sim:i,env:p,tier:s,seaLevel:a.seaLevel,ship:k,params:z,spray:m,cull:C,shadowLight:null,heightAbove:X,update(_,R,V,ke){t.timer.mark("ocean_sim");const ne=X(R);W++,O?(i.warm(_,V),B=V):(W%s.simEvery===0||V===B)&&(i.update(_,V,Math.max(0,Math.min(.2,V-B))),B=V),p.update(_,ne,O),O=!1,d.update(ne),f.uH.value=ne,f.uTilt.value.set(R.x/xt,R.z/xt),i.cascades.forEach((Z,q)=>{f[`tDisp${q}`].value=Z.displacement,f[`tSlope${q}`].value=Z.slopes;const Ae=it=>(it%Z.L+Z.L)%Z.L;f[`uOff${q}`].value.set(Ae(R.x),Ae(R.z))});{const Z=q=>(q%x+x)%x;f.uDetailOff.value.set(Z(c*R.x-u*R.z),Z(u*R.x+c*R.z))}f.uDispFade.value=1-e0(600,1500,ne);{const Z=i.sea.windToward*Math.PI/180,q=Math.sin(Z),Ae=-Math.cos(Z);f.uWindDir.value.set(q,Ae);const it=ct=>(ct%_t+_t)%_t;f.uSeaOff.value.set(it(R.x*q+R.z*Ae),it(-R.x*Ae+R.z*q))}N.set(R.x,a.seaLevel,R.z),(!A||F.distanceToSquared(N)>500*500||ke<=0)&&(A=Qa(t,N,A??void 0),F.copy(N)),f.uSunE.value.copy(A.sun),f.uSkyE.value.copy(A.sky),f.uSunDir.value.copy(t.sunENU),f.uShipPos.value.set(k.position.x-R.x,k.position.z-R.z),f.uShipDir.value.copy(k.forward).normalize(),f.uShipHalf.value.copy(k.half),f.uWake.value=k.wake,f.uShipSpeed.value=k.speed,f.uShipDeck.value=k.deckHeight;const ce=I.shadowLight,se=ce&&ce.castShadow?ce.shadow.map?.depthTexture??null:null;if(ce&&se&&se.compareFunction!==null){f.tShipShadow.value=se,f.uShadowMatrix.value=ce.shadow.matrix,f.uShadowOn.value=1;const Z=ce.shadow.camera,q=Math.max(Z.right-Z.left,1);f.uShadowR.value.set(Math.max(.25/q,1/ce.shadow.mapSize.x),2.5/q)}else f.uShadowOn.value=0,f.tShipShadow.value=r.depthTexture;v.uShipPos.value.copy(f.uShipPos.value),v.uShipDir.value.copy(f.uShipDir.value),v.uShipHalf.value.copy(k.half),v.uShipSpeed.value=k.speed,v.uWake.value=k.wake,v.uSeaY.value=a.seaLevel-R.y,v.uTime.value=V%3600,v.uSunDir.value.copy(t.sunENU),v.uSunE.value.copy(A.sun),v.uSkyE.value.copy(A.sky),m.visible=k.wake>0&&k.speed>1,f.uTravel.value=(k.speed*V%7200+7200)%7200,f.uTime.value=V%3600,f.uReflection.value=z.reflection,f.uSpecular.value=z.specular,f.uFoamGain.value=z.foam,f.uDebug.value=z.debug},cut(){O=!0},stats(){return{ocean:`${s.id} ${s.cascades}x${s.size}² ${s.displacement?"disp":"flat"} grid ${s.rings}x${s.segments}`,sea_hs:`${i.spectrum.hs.toFixed(2)} m`}},dispose(){i.dispose(),p.dispose(),h.dispose(),l.geometry.dispose(),d.texture.dispose(),r.dispose(),m.geometry.dispose(),m.material.dispose()}};return l.onBeforeRender=(_,R,V)=>{C.apply(V,f.uH.value,f.uTilt.value),t.timer.mark("ocean_draw")},l.onAfterRender=()=>t.timer.mark("scene"),I}function e0(e,t,a){const n=Math.min(1,Math.max(0,(a-e)/(t-e)));return n*n*(3-2*n)}export{ma as B,ht as D,pa as H,Ms as K,u0 as O,p0 as a,le as b,i0 as c,c0 as d,r0 as e,h0 as f,d0 as g,l0 as h,f0 as o,Se as p,Ee as s};
