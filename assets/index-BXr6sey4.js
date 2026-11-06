import{c0 as Je,bH as Ya,O as jt,Y as et,_ as Re,ad as uo,bi as ho,L as fa,ac as Kt,Z as Ie,R as mt,bR as fo,U as c,c as vt,s as Ut,t as Yt,M as tt,W as rt,bC as Ot,I as po,u as Ra,v as Fa,a0 as za,c1 as mo,a1 as vo,bc as Da,F as Vt,z as Xa,ah as ua,V as q,d as me,aa as fe,k as Oe,e as go,aE as qt,r as wo,az as Aa,C as ha,a as yo,g as xo,ay as bo,Q as Fe,n as ko,j as Qa,S as Pa,P as So,K as Mo,X as Za,b$ as Ea}from"./three.module-9D8i-8qh.js";import{l as Co}from"./takramClouds-Cui9DI1f.js";import{s as To}from"./lighting-DLOaW5gk.js";import{t as Ro}from"./earlyFetch-CkKlHYEY.js";import{P as pa,K as Fo}from"./shared-oZu7p6SI.js";import{A as zo}from"./sky-O2bTkI6r.js";import{S as st}from"./canopy-S6U8hAzY.js";import{f as Xt,a as Ja,k as Do}from"./profile-Dknl-rK0.js";async function Ao(o="/lens"){const t=new uo,a=async(r,i)=>{const u=await t.loadAsync(`${o}/${r}`);return u.colorSpace=ho,u.minFilter=fa,u.magFilter=Re,u.anisotropy=8,u.generateMipmaps=!0,u.needsUpdate=!0,u},[n,e]=await Promise.all([a("canopy-scratch.png"),a("canopy-dust.png")]);return{scratch:n,dust:e}}function eo(o){let t=0;const a=[];let n=[0,0,0],e=[1,1,1];for(const u of o.split(`
`)){const w=u.trim();if(!w||w.startsWith("#")||w.startsWith("TITLE"))continue;if(w.startsWith("LUT_3D_SIZE")){t=Number(w.split(/\s+/)[1]);continue}if(w.startsWith("DOMAIN_MIN")){n=w.split(/\s+/).slice(1).map(Number);continue}if(w.startsWith("DOMAIN_MAX")){e=w.split(/\s+/).slice(1).map(Number);continue}if(/^[A-Z_]/.test(w))continue;const h=w.split(/\s+/).map(Number);h.length>=3&&a.push(h[0],h[1],h[2])}if(!t||a.length!==t**3*3)throw new Error(`bad .cube: size ${t}, ${a.length/3} entries`);if(n.some(u=>u!==0)||e.some(u=>u!==1))throw new Error(".cube DOMAIN other than 0..1 is not supported");const r=new Uint16Array(t**3*4);for(let u=0;u<t**3;u++)r[u*4]=Je.toHalfFloat(a[u*3]),r[u*4+1]=Je.toHalfFloat(a[u*3+1]),r[u*4+2]=Je.toHalfFloat(a[u*3+2]),r[u*4+3]=Je.toHalfFloat(1);const i=new Ya(r,t,t,t);return i.format=jt,i.type=et,i.minFilter=i.magFilter=Re,i.unpackAlignment=1,i.needsUpdate=!0,i}function Po(o=2){const t=[`LUT_3D_SIZE ${o}`];for(let a=0;a<o;a++)for(let n=0;n<o;n++)for(let e=0;e<o;e++)t.push(`${e/(o-1)} ${n/(o-1)} ${a/(o-1)}`);return eo(t.join(`
`))}async function Eo(o){if(!o.endsWith(".bin")){const i=await fetch(o);if(!i.ok)throw new Error(`${o}: ${i.status}`);return eo(await i.text())}const t=await Ro(o);if(!t)throw new Error(`${o}: not loaded`);const a=new Uint16Array(t),n=Math.round(Math.cbrt(a.length/3));if(n**3*3!==a.length)throw new Error(`${o}: not a cubic LUT`);const e=new Uint16Array(n**3*4);for(let i=0;i<n**3;i++)e[i*4]=Je.toHalfFloat(a[i*3]/65535),e[i*4+1]=Je.toHalfFloat(a[i*3+1]/65535),e[i*4+2]=Je.toHalfFloat(a[i*3+2]/65535),e[i*4+3]=Je.toHalfFloat(1);const r=new Ya(e,n,n,n);return r.format=jt,r.type=et,r.minFilter=r.magFilter=Re,r.unpackAlignment=1,r.needsUpdate=!0,r}const to={rhoAir:1.2,rhoW:1e3,gamma:.072,mu:.001,theta:78*Math.PI/180,thetaA:90*Math.PI/180,thetaR:58*Math.PI/180,kRet:48/Math.PI**3,cd:1,retain:3,speedup:1.3,zeta:50,nose:4,depEvery:3,depFrac:.02,depMin:4e-4,affinity:.75,wetRelief:.35,latAmp:.5,latFine:3,latCap:.5,latEase:.008,mergeEase:6,subLen:.004,subMax:3,rainMmh:2.5,rainD:.0014,vTerm:5,cover:.5,rMean:.0022,streamWidth:.15,streamLife:.3},ae=to,Et=ae.theta,ao=(2-3*Math.cos(Et)+Math.cos(Et)**3)/(3*Math.sin(Et)**3),oo=(1-Math.cos(Et))/Math.sin(Et),La=Math.cos(ae.thetaR)-Math.cos(ae.thetaA),Ua=o=>Math.PI*o*o*o*ao,It=o=>Math.cbrt(o/(Math.PI*ao)),Lo=32e-5;function ca(o){let t=o>>>0;return()=>{t=t+1831565813>>>0;let a=Math.imul(t^t>>>15,1|t);return a=a+Math.imul(a^a>>>7,61|a)^a,((a^a>>>14)>>>0)/4294967296}}function Uo(o={}){const t=o.region??.8,a=4e4;let n=Math.min(a,o.maxDrops??24e3);const e=new Float32Array(a),r=new Float32Array(a),i=new Float32Array(a),u=new Float32Array(a),w=new Float32Array(a),h=new Float32Array(a),Z=new Float32Array(a),W=new Float32Array(a),j=new Float32Array(a),T=new Float32Array(a),Q=new Uint8Array(a),y=new Int32Array(a),R=new Float32Array(a),J=new Float32Array(a),B=new Float32Array(a),H=new Float32Array(a),M=new Float32Array(a),F=new Float32Array(a);let ce=1,d=0,le=0,re=0,ne=0,k=!0,x=ca(o.seed??1);const K=[];let te=0;const ue=96,E=96,Y=new Float32Array((ue+1)*(E+1)*12);let oe={zf:-1.55,zb:1.3,zTop:.12,base:-.315,topH:.72,halfW:.565,n:2.3};const z=(l,p,S)=>{const{zf:L,zb:$,zTop:A,topH:O,halfW:s,base:b,n:V}=oe,N=L+($-L)*p,G=N<A?(A-N)/(A-L):(N-A)/($-A),se=oe.flat??0,P=se>0?N<A?O*(1-Math.pow(1-Math.min(1,Math.max(0,(N-L)/(A-L-se))),1.3)):O*Math.pow(Math.max(0,1-Math.pow(Math.min(1,Math.max(0,(N-A-se)/($-A-se))),2.2)),.62):O*Math.pow(Math.max(0,1-Math.pow(Math.max(0,G),N<A?1.9:2.2)),.62),X=N<0?-N/-L:N/$,de=s*Math.pow(Math.max(0,1-Math.pow(Math.max(0,X),3.2)),.35),pe=-Math.PI/2+Math.PI*l,Te=Math.sin(pe),De=Math.cos(pe);S[0]=de*Math.sign(Te)*Math.pow(Math.abs(Te),2/V),S[1]=b+P*Math.pow(Math.abs(De),2/V),S[2]=N},he=()=>{const l=[0,0,0],p=[0,0,0],S=.001;for(let L=0;L<=E;L++)for(let $=0;$<=ue;$++){const A=$/ue,O=L/E*t,s=(L*(ue+1)+$)*12;z(A,O,l),Y[s]=l[0],Y[s+1]=l[1],Y[s+2]=l[2];const b=Math.min(1-S,Math.max(S,A)),V=Math.min(1-S,Math.max(S,O));z(b+S,O,p),z(b-S,O,l);for(let Se=0;Se<3;Se++)Y[s+3+Se]=(p[Se]-l[Se])/(2*S);z(A,V+S,p),z(A,V-S,l);for(let Se=0;Se<3;Se++)Y[s+6+Se]=(p[Se]-l[Se])/(2*S);const N=Y[s+3],G=Y[s+4],se=Y[s+5],P=Y[s+6],X=Y[s+7],de=Y[s+8];let pe=X*se-de*G,Te=de*N-P*se,De=P*G-X*N;const ot=Math.hypot(pe,Te,De)||1;pe/=ot,Te/=ot,De/=ot,Y[s+9]=pe,Y[s+10]=Te,Y[s+11]=De}};he();const I=new Float32Array(12),ve=(l,p)=>{const S=Math.min(ue-1e-4,Math.max(0,l*ue)),L=Math.min(E-1e-4,Math.max(0,p/t*E)),$=S|0,A=L|0,O=S-$,s=L-A,b=(A*(ue+1)+$)*12,V=b+12,N=b+(ue+1)*12,G=N+12;for(let se=0;se<12;se++)I[se]=(Y[b+se]*(1-O)+Y[V+se]*O)*(1-s)+(Y[N+se]*(1-O)+Y[G+se]*O)*s},ie=512,ee=512,ke=new Float32Array(ie*ee),Me=new Float32Array(ie*ee),xe=new Uint8Array(ie*ee);{const l=ca(7),p=(L,$,A)=>{const O=new Float32Array(($+1)*($+1));for(let s=0;s<O.length;s++)O[s]=l();for(let s=0;s<ee;s++)for(let b=0;b<ie;b++){const V=b/ie*$,N=s/ee*$,G=V|0,se=N|0;let P=V-G,X=N-se;P=P*P*(3-2*P),X=X*X*(3-2*X);const de=se*($+1)+G;L[s*ie+b]+=A*((O[de]*(1-P)+O[de+1]*P)*(1-X)+(O[de+$+1]*(1-P)+O[de+$+2]*P)*X)}},S=(L,$)=>{let A=0,O=0;for(const b of L)A+=b,O+=b*b;A/=L.length;const s=Math.sqrt(O/L.length-A*A);for(let b=0;b<L.length;b++)L[b]=Math.min(1.9,Math.max(.35,1+$*(L[b]-A)/(2*s)))};p(ke,96,.5),p(ke,200,.3),p(ke,400,.2),S(ke,ae.affinity),p(Me,16,.6),p(Me,32,.4),S(Me,ae.latAmp)}const we=(l,p)=>Math.min(ee-1,Math.max(0,p/t*ee|0))*ie+Math.min(ie-1,Math.max(0,l*ie|0)),ge=(l,p,S)=>{const L=Math.min(ie-1.001,Math.max(0,p*ie-.5)),$=Math.min(ee-1.001,Math.max(0,S/t*ee-.5)),A=L|0,O=$|0,s=L-A,b=$-O,V=O*ie+A;return(l[V]*(1-s)+l[V+1]*s)*(1-b)+(l[V+ie]*(1-s)+l[V+ie+1]*s)*b},Bt=(l,p)=>ae.retain*La*ge(ke,l,p)*(1-ae.wetRelief*(ge(xe,l,p)/255)),wt=(l,p)=>ge(Me,l,p)+ae.latFine*ge(ke,l,p),it=(l,p,S)=>d>=n?-1:(e[d]=l,r[d]=p,i[d]=S,u[d]=It(S),w[d]=0,h[d]=1,Z[d]=l,W[d]=p,j[d]=0,T[d]=0,Q[d]=0,y[d]=ce++,R[d]=J[d]=B[d]=0,H[d]=M[d]=0,F[d]=0,d++),Ve=l=>{d--,l!==d&&(e[l]=e[d],r[l]=r[d],i[l]=i[d],u[l]=u[d],w[l]=w[d],h[l]=h[d],Z[l]=Z[d],W[l]=W[d],j[l]=j[d],T[l]=T[d],Q[l]=Q[d],y[l]=y[d],R[l]=R[d],J[l]=J[d],B[l]=B[d],H[l]=H[d],M[l]=M[d],F[l]=F[d])},_e=.012,$e=Math.ceil(2.4/_e),at=Math.ceil(3*t/_e),qe=new Int32Array($e*at),yt=new Int32Array(a),lt=2,ct=2.85,je=l=>Math.min(at-1,Math.max(0,r[l]*ct/_e|0))*$e+Math.min($e-1,Math.max(0,e[l]*lt/_e|0)),xt=new Float32Array(a),bt=new Float32Array(a),C=new Float32Array(a),ga=()=>{qe.fill(-1);for(let l=0;l<d;l++){const p=je(l);yt[l]=qe[p],qe[p]=l,ve(e[l],r[l]),xt[l]=I[0],bt[l]=I[1],C[l]=I[2]}},f=new Uint8Array(a),g=l=>{if(l.length){ga(),f.fill(0,0,d);for(const p of l){if(p>=d||f[p])continue;const S=xt[p],L=bt[p],$=C[p],A=e[p]*lt/_e|0,O=r[p]*ct/_e|0;for(let s=-1;s<=1;s++)for(let b=-1;b<=1;b++){const V=A+b,N=O+s;if(!(V<0||N<0||V>=$e||N>=at))for(let G=qe[N*$e+V];G>=0;G=yt[G]){if(G===p||f[G]||f[p])continue;if(Math.hypot(xt[G]-S,bt[G]-L,C[G]-$)<.95*(u[p]+u[G])){const P=i[p]>=i[G]?p:G,X=P===p?G:p,de=i[X]/(i[P]+i[X]),pe=(e[X]+H[X]-e[P])*de,Te=(r[X]+M[X]-r[P])*de,De=R[p]!==0||J[p]!==0||B[p]!==0||R[G]!==0||J[G]!==0||B[G]!==0;H[P]=H[P]*(1-de),M[P]=M[P]*(1-de),De?(H[P]+=pe,M[P]+=Te):(e[P]+=pe+H[P],r[P]+=Te+M[P],H[P]=M[P]=0),R[P]=R[P]*(1-de)+R[X]*de,J[P]=J[P]*(1-de)+J[X]*de,B[P]=B[P]*(1-de)+B[X]*de,i[P]+=i[X],u[P]=It(i[P]),h[P]=1,Q[P]=Q[P]|Q[X],f[X]=1}}}}for(let p=d-1;p>=0;p--)f[p]&&Ve(p)}},m=32,v=32,D=new Float32Array(m*v),U=new Float32Array(m*v*3),_=()=>{for(let l=0;l<v;l++)for(let p=0;p<m;p++){ve((p+.5)/m,(l+.5)/v*t);const S=I[3],L=I[4],$=I[5],A=I[6],O=I[7],s=I[8],b=Math.hypot(L*s-$*O,$*A-S*s,S*O-L*A);D[l*m+p]=b*t/(m*v),U[(l*m+p)*3]=I[9],U[(l*m+p)*3+1]=I[10],U[(l*m+p)*3+2]=I[11]}};_();const be=l=>{if(l<30){let p=0,S=Math.exp(-l),L=S;const $=x();for(;$>L&&p<200;)p++,S*=l/p,L+=S;return p}return Math.max(0,Math.round(l+Math.sqrt(l)*(x()+x()+x()-1.5)*2))},Pe=(l,p,S,L)=>{const $=Math.PI/6*ae.rainD**3,A=ae.rainMmh*S+1.5*L*Math.min(1,p/60);if(A<=0)return;const O=A/36e5/($*ae.vTerm);for(let s=0;s<m*v;s++){const b=-(U[s*3+1]*-5+U[s*3+2]*p);if(b<=0)continue;const V=be(b*O*D[s]*l);for(let N=0;N<V;N++){const G=(s%m+x())/m,se=((s/m|0)+x())/v*t,P=$*Math.exp((x()+x()+x()-1.5)*.6);if(b>4){const X=1+(x()*2|0);for(let de=0;de<X;de++){const pe=it(Math.min(.99,Math.max(.01,G+(x()-.5)*.004)),se+x()*.004,P*.4/X);pe>=0&&(h[pe]=1)}}else it(G,se,P)}}},Ce=[],ze=new Float32Array(E+1),Ee=(l,p,S)=>{const L=Math.max(0,p.airspeed),[$,A,O]=p.force;re=0,Ce.length=0;for(let s=0;s<=E;s++){const b=s*(ue+1)*12+(ue>>1)*12,V=ae.nose+(Y[b+2]-oe.zf),N=Math.max(1,L*V/15e-6),G=Math.max(1e-4,.37*V*Math.pow(N,-.2));ze[s]=Math.pow(G,-1/7)}for(let s=0;s<d;s++){if(((s^te)&1)!==0||(Q[s]=0,!S&&h[s]<.6&&R[s]===0&&J[s]===0&&B[s]===0&&((s>>1)+(te>>1)&7)!==0))continue;let b=1,V=0,N=!1;for(;V<b;){ve(e[s],r[s]);const G=I[9],se=I[10],P=I[11],X=u[s],de=X*oo,pe=i[s]*ae.rhoW,Te=P*L;let De=-G*Te,ot=-se*Te,Se=L-P*Te;const St=Math.hypot(De,ot,Se);let Mt=0,Ct=0,Tt=0;if(St>1e-6){const ye=Math.min(E,Math.max(0,Math.round(r[s]/t*E))),Ue=ae.speedup*Math.min(1,Math.pow(de,1/7)*ze[ye]),Ze=St*Ue,la=.5*ae.rhoAir*ae.cd*(.5*Math.PI*X*de)*Ze*Ze;De/=St,ot/=St,Se/=St,Mt=la*De,Ct=la*ot,Tt=la*Se}const Qt=$*G+A*se+O*P;Mt+=pe*($-Qt*G),Ct+=pe*(A-Qt*se),Tt+=pe*(O-Qt*P);const Ke=Math.hypot(Mt,Ct,Tt),ut=ae.kRet*ae.gamma*2*X*Bt(e[s],r[s]);h[s]=Ke/Math.max(ut,1e-15);let Zt=R[s],Jt=J[s],ea=B[s];const Le=Math.hypot(Zt,Jt,ea);if(Le<1e-5&&Ke<=ut){R[s]=J[s]=B[s]=0,j[s]=0,T[s]=0;break}const $t=Le>=1e-5?Zt/Le:Mt/Ke,Ht=Le>=1e-5?Jt/Le:Ct/Ke,Wt=Le>=1e-5?ea/Le:Tt/Ke,ta=se*Wt-P*Ht,aa=P*$t-G*Wt,oa=G*Ht-se*$t,Rt=I[3],Ft=I[4],zt=I[5],Dt=I[6],At=I[7],Pt=I[8],ya=Rt*Rt+Ft*Ft+zt*zt,Gt=Rt*Dt+Ft*At+zt*Pt,xa=Dt*Dt+At*At+Pt*Pt,ba=Math.max(ya*xa-Gt*Gt,1e-18),ka=(ye,Ue,Ze)=>(xa*(Rt*ye+Ft*Ue+zt*Ze)-Gt*(Dt*ye+At*Ue+Pt*Ze))/ba,Sa=(ye,Ue,Ze)=>(ya*(Dt*ye+At*Ue+Pt*Ze)-Gt*(Rt*ye+Ft*Ue+zt*Ze))/ba,Ma=ka(ta,aa,oa)*X,Ca=Sa(ta,aa,oa)*X;let nt=(wt(e[s]-Ma,r[s]-Ca)-wt(e[s]+Ma,r[s]+Ca))*.5*ae.kRet*ae.gamma*2*X*ae.retain*La;const Ta=ae.latCap*Math.max(0,Ke-ut);if(nt=Math.max(-Ta,Math.min(Ta,nt)),V===0){const ye=Math.max(Le,Math.max(0,Ke-ut)/(ae.zeta*ae.mu*X));b=Math.min(ae.subMax,Math.max(1,Math.ceil(ye*l/ae.subLen)))}const Ae=l/b;Le<1e-5&&(F[s]=0),F[s]+=(nt-F[s])*Math.min(1,Math.max(Le,1e-4)*Ae/ae.latEase),nt=F[s];const ro=ae.zeta*ae.mu*X;let Ye=Zt+Ae*(Mt+ta*nt)/pe,Xe=Jt+Ae*(Ct+aa*nt)/pe,Qe=ea+Ae*(Tt+oa*nt)/pe;const io=Ye*$t+Xe*Ht+Qe*Wt,Nt=Ae*ut/pe;if(io<=Nt&&Ke<=ut){R[s]=J[s]=B[s]=0,j[s]=0,T[s]=0;break}Ye-=Nt*$t,Xe-=Nt*Ht,Qe-=Nt*Wt;const na=1/(1+Ae*ro/pe);Ye*=na,Xe*=na,Qe*=na;const ht=Math.hypot(Ye,Xe,Qe),sa=ka(Ye,Xe,Qe),ra=Sa(Ye,Xe,Qe),lo=e[s],co=r[s];if(e[s]+=sa*Ae,r[s]+=ra*Ae,H[s]!==0||M[s]!==0){const ye=Math.min(1,ht*Ae/(ae.mergeEase*X));e[s]+=H[s]*ye,r[s]+=M[s]*ye,H[s]*=1-ye,M[s]*=1-ye}ve(e[s],r[s]);const ia=Ye*I[9]+Xe*I[10]+Qe*I[11];if(R[s]=Ye-ia*I[9],J[s]=Xe-ia*I[10],B[s]=Qe-ia*I[11],j[s]=sa*lt,T[s]=ra*ct,w[s]+=ht*Ae,xe[we(e[s],r[s])]=255,N=!0,X>35e-5&&ht*Ae>2e-4&&K.push(lo,co,e[s],r[s],ae.streamWidth*X),w[s]>ae.depEvery*X&&ht>1e-5){w[s]=0;const ye=i[s]*ae.depFrac;if(i[s]-=ye,u[s]=It(i[s]),ye>Ua(ae.depMin)){const Ue=it(e[s]-sa/ht*1.3*X,r[s]-ra/ht*1.3*X,ye);Ue>=0&&(h[Ue]=0)}}if(V++,e[s]<.015||e[s]>.985||r[s]<0||r[s]>t)break}N&&(Q[s]=1,re++,Ce.push(s))}},kt=()=>{for(let l=d-1;l>=0;l--)(e[l]<.015||e[l]>.985||r[l]<0||r[l]>t||u[l]<Lo)&&Ve(l)},He=()=>{for(let l=0;l<d;l++)Z[l]=e[l],W[l]=r[l];K.length>5*6e4&&K.splice(0,K.length-5*6e4)},_t=()=>{let l=0;for(let p=0;p<d;p++)l+=u[p]*u[p];le=Math.min(1,Math.PI*l/1.2/.5)};return{get count(){return d},a:e,b:r,r:u,va:j,vb:T,id:y,where(l,p,S){ve(l,p),S[0]=I[0],S[1]=I[1],S[2]=I[2]},takeSegments(){const l=new Float32Array(K);return K.length=0,l},get resetFilm(){return k},clearResetFilm(){k=!1},region:t,get wetness(){return le},get moving(){return re},get ms(){return ne},get maxDrops(){return n},set maxDrops(l){for(n=Math.min(a,Math.max(500,l|0));d>n;)Ve(d-1)},setSurface(l){l.zf===oe.zf&&l.zb===oe.zb&&l.zTop===oe.zTop&&l.base===oe.base&&l.topH===oe.topH&&l.halfW===oe.halfW&&l.n===oe.n&&(l.flat??0)===(oe.flat??0)||(oe={...l},he(),_())},update(l){const p=performance.now(),S=Math.min(.05,Math.max(0,l.dt));if(S<=0)return;if(l.rain<=0&&l.cloud<=0){const $=Math.exp(-S/Math.max(1,l.evaporate));for(let A=0;A<d;A++)i[A]*=$,u[A]=It(i[A])}const L=1;for(let $=0;$<L;$++){const A=d;Ee(2*S/L,l,!1),te++,Pe(S/L,Math.max(0,l.airspeed),l.rain,l.cloud);const O=Ce.slice();for(let s=A;s<d;s++)O.push(s);g(O),kt()}He(),_t(),ne=performance.now()-p},settle(l){d=0,K.length=0,xe.fill(0),x=ca(o.seed??1),k=!0,te=0;const p=Math.min(1,l.rain+.8*l.cloud);if(p<=0){le=0;return}if(l.airspeed<30){let S=0;for(let s=0;s<m*v;s++)S+=D[s];const L=ae.cover*Math.min(1,.4+.6*p)*S;let $=0,A=0;for(;$<L&&d<n&&A++<2e5;){const s=x()*m*v|0;if(x()>D[s]/(S/(m*v))*.7)continue;const b=Math.min(.006,Math.max(4e-4,ae.rMean*Math.exp((x()+x()+x()-1.5)*.9)));it((s%m+x())/m,((s/m|0)+x())/v*t,Ua(b)),$+=Math.PI*b*b}g(Array.from({length:d},(s,b)=>b));const O={...l,airspeed:0};for(let s=0;s<80;s++)Ee(.1,O,!0),te++,g(Ce.slice()),kt()}for(let S=0;S<d;S++)Z[S]=e[S],W[S]=r[S],Q[S]=0;K.length=0,_t()}}}const Bo=`
precision highp float;
in vec3 position;
in vec4 iA;   // centre (uv), axis 1 (uv)
in vec4 iB;   // axis 2 (uv), height mm, seed
out vec2 vL;
out float vH;
out float vSeed;
void main() {
  vL = position.xy;
  vH = iB.z; vSeed = iB.w;
  vec2 p = iA.xy + iA.zw * position.x + iB.xy * position.y;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,_o=`
precision highp float;
in vec2 vL; in float vH; in float vSeed;
out vec4 outColor;
void main() {
  // a few lobes on the outline (the contact line pinned unevenly), per drop
  float th = atan(vL.y, vL.x);
  float lobe = 1.0 + 0.1 * sin(3.0 * th + vSeed * 6.2832) + 0.06 * sin(5.0 * th + vSeed * 17.0);
  float rho2 = dot(vL, vL) / (lobe * lobe);
  if (rho2 >= 1.0) discard;
  outColor = vec4(vH * (1.0 - rho2), 0.0, 0.0, 1.0);
}`,$o=`
precision highp float;
in vec2 vL; in float vH; in float vSeed;
out vec4 outColor;
void main() {
  // a low rounded ridge across the stream (vL.y), its ends rounded off into the next segment
  float q = vL.y, e = max(abs(vL.x) - 0.8, 0.0) / 0.2;
  float k = q * q + e * e;
  if (k >= 1.0) discard;
  outColor = vec4(vH * (1.0 - k), 0.0, 0.0, 1.0);
}`,Ho=`
precision highp float;
uniform sampler2D tPrev;
uniform float uKeep;
in vec2 vUv;
out vec4 outColor;
void main() { float h = texture(tPrev, vUv).r * uKeep; outColor = vec4(h > 0.004 ? h : 0.0, 0.0, 0.0, 1.0); }`,Wo=`
precision highp float;
in vec3 position;
out vec2 vUv;
void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }`;function dt(o){return new rt(o,o,{type:et,format:Ot,depthBuffer:!1,minFilter:Re,magFilter:Re})}function Ba(o,t){const a=new po;a.setAttribute("position",new Yt([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),a.setIndex([0,1,2,0,2,3]);const n=new Ra(new Float32Array(o*4),4);n.setUsage(Fa);const e=new Ra(new Float32Array(o*4),4);e.setUsage(Fa),a.setAttribute("iA",n),a.setAttribute("iB",e);const r=new mt({glslVersion:vt,vertexShader:Bo,fragmentShader:t,depthTest:!1,depthWrite:!1,blending:vo,blendEquation:mo,blendSrc:za,blendDst:za}),i=new tt(a,r);return i.frustumCulled=!1,{g:a,iA:n,iB:e,mesh:i,cap:o}}function Go(o=2048){let t=o,a=dt(t),n=dt(t),e=dt(t);const r=new Kt(-1,1,1,-1,0,1),i=Ba(4e4,_o),u=Ba(6e4,$o),w=new Ie;w.add(i.mesh);const h=new Ie;h.add(u.mesh);const Z=new mt({glslVersion:vt,vertexShader:Wo,fragmentShader:Ho,uniforms:{tPrev:new c(null),uKeep:new c(1)},blending:fo,depthTest:!1,depthWrite:!1}),W=new Ut;W.setAttribute("position",new Yt([-1,-1,0,3,-1,0,-1,3,0],3));const j=new tt(W,Z);j.frustumCulled=!1;const T=new Ie;T.add(j);let Q=!0;return{get drops(){return a.texture},get film(){return n.texture},get size(){return t},setSize(y){y!==t&&(t=y,a.dispose(),n.dispose(),e.dispose(),a=dt(t),n=dt(t),e=dt(t),Q=!0)},render(y,R,J,B){const H=y.getRenderTarget(),M=y.autoClear;y.autoClear=!1,y.setClearColor(0,0);const F=1/B[0],ce=1/(B[1]*R.region),d=Math.min(R.count,i.cap),le=i.iA.array,re=i.iB.array,ne=1/40;for(let E=0;E<d;E++){const Y=R.r[E],oe=R.va[E],z=R.vb[E],he=Math.hypot(oe,z),I=Math.min(3*Y,Y+.5*he*ne);let ve=1,ie=0;he>1e-4&&(ve=oe/he,ie=z/he);const ee=E*4;le[ee]=R.a[E],le[ee+1]=R.b[E]/R.region,le[ee+2]=ve*I*F,le[ee+3]=ie*I*ce,re[ee]=-ie*Y*F,re[ee+1]=ve*Y*ce,re[ee+2]=Y*oo*(Y/I)*1e3,re[ee+3]=(Math.imul(R.r[E]*1e7|0,2654435761)>>>0)/4294967296}for(const E of[i.iA,i.iB])E.clearUpdateRanges(),E.addUpdateRange(0,Math.max(4,d*4)),E.needsUpdate=!0;if(i.g.instanceCount=d,y.setRenderTarget(a),y.clear(!0,!1,!1),d&&y.render(w,r),R.resetFilm||Q){for(const E of[n,e])y.setRenderTarget(E),y.clear(!0,!1,!1);R.clearResetFilm(),Q=!1}Z.uniforms.tPrev.value=n.texture,Z.uniforms.uKeep.value=Math.exp(-Math.max(0,J)/to.streamLife),y.setRenderTarget(e),y.render(T,r);const k=R.takeSegments(),x=Math.min(k.length/5,u.cap),K=u.iA.array,te=u.iB.array;for(let E=0;E<x;E++){const Y=(k.length/5-x+E)*5,oe=E*4,z=k[Y],he=k[Y+1],I=k[Y+2],ve=k[Y+3],ie=k[Y+4],ee=(I-z)*B[0],ke=(ve-he)*B[1],Me=Math.hypot(ee,ke)||1e-6,xe=ee/Me,we=ke/Me,ge=.5*Me+ie;K[oe]=.5*(z+I),K[oe+1]=.5*(he+ve)/R.region,K[oe+2]=xe*ge/.8*F,K[oe+3]=we*ge/.8*ce,te[oe]=-we*ie*F,te[oe+1]=xe*ie*ce,te[oe+2]=.8*ie*1e3,te[oe+3]=0}for(const E of[u.iA,u.iB])E.clearUpdateRanges(),E.addUpdateRange(0,Math.max(4,x*4)),E.needsUpdate=!0;u.g.instanceCount=x,x&&y.render(h,r);const ue=n;n=e,e=ue,y.setRenderTarget(H),y.autoClear=M},dispose(){a.dispose(),n.dispose(),e.dispose(),i.g.dispose(),u.g.dispose()}}}const no=`
in vec3 position;
out vec2 vUv;
void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }`,No=`
precision highp float;
uniform sampler2D tSrc;
in vec2 vUv;
out vec4 oColor;
void main() {
  vec2 size = vec2(textureSize(tSrc, 0));
  vec2 p = vUv * size, t1 = floor(p - 0.5) + 0.5, f = p - t1;
  vec2 w0 = f * (-0.5 + f * (1.0 - 0.5 * f)), w1 = 1.0 + f * f * (-2.5 + 1.5 * f);
  vec2 w2 = f * (0.5 + f * (2.0 - 1.5 * f)), w3 = f * f * (-0.5 + 0.5 * f);
  vec2 w12 = w1 + w2, t12 = (t1 + w2 / w12) / size, t0 = (t1 - 1.0) / size, t3 = (t1 + 2.0) / size;
  vec4 c = texture(tSrc, vec2(t12.x, t0.y)) * (w12.x * w0.y) + texture(tSrc, vec2(t0.x, t12.y)) * (w0.x * w12.y)
    + texture(tSrc, t12) * (w12.x * w12.y) + texture(tSrc, vec2(t3.x, t12.y)) * (w3.x * w12.y) + texture(tSrc, vec2(t12.x, t3.y)) * (w12.x * w3.y);
  c /= w12.x * w0.y + w0.x * w12.y + w12.x * w12.y + w3.x * w12.y + w12.x * w3.y;
  ivec2 i = clamp(ivec2(t1 - 0.5), ivec2(0), ivec2(size) - 2);
  vec4 a = texelFetch(tSrc, i, 0), b = texelFetch(tSrc, i + ivec2(1, 0), 0), d = texelFetch(tSrc, i + ivec2(0, 1), 0), e = texelFetch(tSrc, i + ivec2(1, 1), 0);
  oColor = clamp(c, min(min(a, b), min(d, e)), max(max(a, b), max(d, e)));
}`,_a=`#undef USE_LOGARITHMIC_DEPTH_BUFFER
`,$a=new WeakSet;function En(o){o.traverse(t=>{const a=t.material;for(const n of Array.isArray(a)?a:a?[a]:[]){if($a.has(n))continue;$a.add(n);const e=n.onBeforeCompile.bind(n),r=n.customProgramCacheKey.bind(n);n.onBeforeCompile=(i,u)=>{e(i,u),i.vertexShader=_a+i.vertexShader,i.fragmentShader=_a+i.fragmentShader},n.customProgramCacheKey=()=>`${r()}|stddepth`,n.needsUpdate=!0}})}const Io=`
precision highp float;
uniform sampler2D tSrc;
uniform float uMix;
in vec2 vUv;
out vec4 oColor;
void main() { oColor = vec4(texture(tSrc, vUv).rgb, uMix); }`;function Ha(){const o=new Ut;o.setAttribute("position",new Xa(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3));const t=new mt({glslVersion:vt,vertexShader:no,fragmentShader:Io,uniforms:{tSrc:{value:null},uMix:{value:0}},depthTest:!1,depthWrite:!1,transparent:!0}),a=new tt(o,t);return a.frustumCulled=!1,{scene:new Ie().add(a),camera:new Kt,mat:t}}class Oo extends pa{constructor(t,a){super("CockpitLayerPass",t,a),this.cockpitScene=t,this.cockpitCamera=a,this.needsSwap=!1;const n=new Da(1,1);n.type=Vt,this.depthTarget=new rt(1,1,{depthBuffer:!0,depthTexture:n})}cockpitScene;cockpitCamera;opacity=1;link=null;get fading(){return(this.link??this).opacity<.999}under=null;blend=null;depthTarget;standardDepth=!1;fullSize=null;full=null;upsample=null;fullActive=!1;get depthTexture(){return this.depthTarget.depthTexture}get output(){return this.fullActive?this.full.texture:null}target(t){return this.fullActive?this.full:t}setSize(t,a){this.fullSize||this.depthTarget.setSize(t,a)}render(t,a){if(!a)return;const n=this.fullSize;this.fullActive=!!n&&(n.width!==a.width||n.height!==a.height);let e=a;if(this.fullActive){if(!this.full){const Q=new Da(n.width,n.height);Q.type=Vt,this.full=new rt(n.width,n.height,{type:et,minFilter:Re,magFilter:Re,depthBuffer:!0,depthTexture:Q,generateMipmaps:!1})}(this.full.width!==n.width||this.full.height!==n.height)&&this.full.setSize(n.width,n.height),(this.depthTarget.width!==n.width||this.depthTarget.height!==n.height)&&this.depthTarget.setSize(n.width,n.height),this.upsample??=(()=>{const Q=new Ut;Q.setAttribute("position",new Xa(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3));const y=new mt({glslVersion:vt,vertexShader:no,fragmentShader:No,uniforms:{tSrc:{value:null}},depthTest:!1,depthWrite:!1}),R=new tt(Q,y);return R.frustumCulled=!1,{scene:new Ie().add(R),camera:new Kt,mat:y}})(),this.upsample.mat.uniforms.tSrc.value=a.texture,t.setRenderTarget(this.full);const T=t.shadowMap.enabled;t.shadowMap.enabled=!1;try{t.render(this.upsample.scene,this.upsample.camera)}finally{t.shadowMap.enabled=T}e=this.full}else(this.depthTarget.width!==a.width||this.depthTarget.height!==a.height)&&this.depthTarget.setSize(a.width,a.height);const r=t.autoClear;t.autoClear=!1;const i=(this.link??this).opacity,u=i<.999&&i>.001,w=t.getContext();if(u){this.under||(this.under=new rt(e.width,e.height,{type:et,minFilter:Re,magFilter:Re,depthBuffer:!1,generateMipmaps:!1})),(this.under.width!==e.width||this.under.height!==e.height)&&this.under.setSize(e.width,e.height),t.setRenderTarget(this.under);const T=t.properties;w.bindFramebuffer(w.READ_FRAMEBUFFER,T.get(e).__webglFramebuffer),w.bindFramebuffer(w.DRAW_FRAMEBUFFER,T.get(this.under).__webglFramebuffer),w.blitFramebuffer(0,0,e.width,e.height,0,0,e.width,e.height,w.COLOR_BUFFER_BIT,w.NEAREST),w.bindFramebuffer(w.READ_FRAMEBUFFER,null),w.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}if(t.setRenderTarget(e),t.clearDepth(),t.render(this.scene,this.camera),u){this.blend??=Ha(),this.blend.mat.uniforms.tSrc.value=this.under.texture,this.blend.mat.uniforms.uMix.value=1-i;const T=t.shadowMap.enabled;t.shadowMap.enabled=!1;try{t.render(this.blend.scene,this.blend.camera)}finally{t.shadowMap.enabled=T}}t.autoClear=r;const h=t.getContext();t.setRenderTarget(this.depthTarget);const Z=t.properties,W=Z.get(e).__webglFramebuffer,j=Z.get(this.depthTarget).__webglFramebuffer;h.bindFramebuffer(h.READ_FRAMEBUFFER,W),h.bindFramebuffer(h.DRAW_FRAMEBUFFER,j),h.blitFramebuffer(0,0,e.width,e.height,0,0,this.depthTarget.width,this.depthTarget.height,h.DEPTH_BUFFER_BIT,h.NEAREST),h.bindFramebuffer(h.READ_FRAMEBUFFER,null),h.bindFramebuffer(h.DRAW_FRAMEBUFFER,null),i<.5&&(t.setRenderTarget(this.depthTarget),t.clearDepth()),t.setRenderTarget(null)}warm(t){this.blend??=Ha(),t.compile(this.blend.scene,this.blend.camera);const a=this.fullSize?.width??this.depthTarget.width,n=this.fullSize?.height??this.depthTarget.height;!this.under&&a>1&&(this.under=new rt(a,n,{type:et,minFilter:Re,magFilter:Re,depthBuffer:!1,generateMipmaps:!1})),this.under&&t.initRenderTarget(this.under)}dispose(){this.depthTarget.dispose(),this.full?.dispose(),this.upsample?.mat.dispose(),this.under?.dispose(),this.blend?.mat.dispose()}}const Wa=new WeakSet;function Ln(o,t=1){o.traverse(a=>{const n=a.material;for(const e of Array.isArray(n)?n:n?[n]:[]){if(Wa.has(e)||!("roughness"in e))continue;Wa.add(e);const r=e.onBeforeCompile.bind(e),i=e.customProgramCacheKey.bind(e);e.onBeforeCompile=(u,w)=>{r(u,w),u.fragmentShader.includes("#include <lights_physical_fragment>")&&(u.fragmentShader=u.fragmentShader.replace("#include <lights_physical_fragment>",`
          {
            vec3 dndu = dFdx( normal ), dndv = dFdy( normal );
            float variance = ${(.25*t).toFixed(3)} * ( dot( dndu, dndu ) + dot( dndv, dndv ) );
            float kernel = min( 2.0 * variance, 0.18 );
            roughnessFactor = sqrt( clamp( roughnessFactor * roughnessFactor + kernel, 0.0, 1.0 ) );
          }
          #include <lights_physical_fragment>`))},e.customProgramCacheKey=()=>`${i()}|specaa${t}`,e.needsUpdate=!0}})}const Vo=.1297,qo=-.0019,Ga={k1:Vo,k2:qo},jo=`
precision highp float;
in vec3 position;
out vec2 vUv;
void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }`,Be=`
precision highp float;
precision highp int;
precision highp sampler2D;
`,ma=`
uniform sampler2D tDepth;
uniform vec3 uDepth; // (log2(far + 1), near, far)
float depthToW(float d) {
#ifdef LOG_DEPTH
  return exp2(d * uDepth.x) - 1.0;
#else
  float n = uDepth.y, f = uDepth.z;
  return (n * f) / (f - d * (f - n));
#endif
}
bool isSky(float d) { return d >= 0.999999; }
// The cockpit: either its own depth (drawn in a separate pass, e.g. labs/10-game:
// COCKPIT_DEPTH) or anything in the scene depth closer than uCockpitDist.
uniform float uCockpitDist;
#ifdef COCKPIT_DEPTH
uniform sampler2D tCockpit;
uniform vec3 uCockpitDepth; // (log2(far + 1), near, far) of the cockpit camera; x < 0: standard depth
float cockpitDepthW(float d) {
  if (uCockpitDepth.x > 0.0) return exp2(d * uCockpitDepth.x) - 1.0;
  return (uCockpitDepth.y * uCockpitDepth.z) / (uCockpitDepth.z - d * (uCockpitDepth.z - uCockpitDepth.y));
}
bool cockpitPix(vec2 uv, float d) { return texture(tCockpit, uv).r < 0.999999; }
#else
bool cockpitPix(vec2 uv, float d) { return !isSky(d) && depthToW(d) < uCockpitDist; }
#endif
`,gt="float luma(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }",Ko=`
precision highp float;
in vec3 position; in vec3 normal; in vec2 uv; in float edge;
uniform mat4 modelMatrix, viewMatrix, projectionMatrix;
out vec3 vPos; out vec3 vNrm; out vec2 vUv; out float vEdge; out float vViewW;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vPos = w.xyz; vNrm = normalize(mat3(modelMatrix) * normal); vUv = uv; vEdge = edge;
  vec4 v = viewMatrix * w;
  vViewW = -v.z;
  gl_Position = projectionMatrix * v;
}`,Yo=`
${Be}
${ma}
${gt}
in vec3 vPos; in vec3 vNrm; in vec2 vUv; in float vEdge; in float vViewW;
out vec4 outColor;
uniform sampler2D tScratch, tDust;
uniform samplerCube tRefl, tSky; // the lit cockpit (alpha: coverage), the sky (reflection.ts)
uniform mat4 uToLocal;       // render space -> cockpit local (the interior cubes' axes)
uniform vec3 uEye;           // the interior cubes' capture point, cockpit local
uniform vec4 uRefl;          // interior gain, sky gain, Fresnel share gain, blur (mip)
uniform vec4 uRefl2;         // sun glint gain, glint width (rad), grazing darkening, cloud (0..1)
uniform vec4 uHelmet;        // helmet semi-axes (m, cockpit local), on (0/1)
uniform vec3 uHelmetC;       // helmet centre, cockpit local
uniform sampler2D tHead, tHeadN; // the pilot's baked head (src/cockpit/head.ts): octahedral maps about its centre:
                             // albedo (sRGB) + radius / R; outward normal + gloss
uniform mat4 uHeadM;         // cockpit local -> the head bake's frame (origin its centre, turned with the head)
uniform vec2 uHeadR;         // the bake's radius R (m), on (1: the baked head, 0: the analytic helmet)
uniform vec2 uReflP;         // parallax sphere radius around the GoPro (m), -
uniform vec3 uEnvExp;        // exposure x white balance: the cubes hold pre-exposure radiance
uniform float uReflDbg;      // debug: 1 = the reflection (un-shared), 2 = hit mask, 3 = the reflection alone
uniform vec2 uSize;          // canopy target size, px
uniform vec3 uCamPos;        // render-space camera position (0 with the floating origin)
uniform vec3 uSunDir;        // toward the sun, render space
uniform vec3 uSunE, uSkyE;   // sun / sky irradiance (atmosphere units, pre-exposure)
uniform vec4 uGain;          // scratch, smudge, dust, env reflection
uniform float uLobe;         // scratch scattering lobe width (|T·h| units)
uniform float uReach;        // how far from the sun scratches still light up (rad, ~40°)
uniform vec4 uDrops;         // on (> 0), detail, droplet gain, -
uniform sampler2D tDropH;    // the drops' heights, mm (./dropTex.ts), over the sheet's u and v / uDropRegion.x
uniform sampler2D tDropFilm; // the streams' heights, mm
uniform vec3 uDropRegion;    // the share of the sheet (v) the water covers, texel size (u, v)
uniform vec2 uPhys;          // canopy sheet size, metres (u around, v along)

// The bubble's analytic surface (src/cockpit/canopy.ts SHAPE / profile / canopyGeometry):
// a mirror shows every kink of interpolated vertex normals as bands, so the reflection takes
// its normal from the shape itself. uShape = (zf, zb, zTop, base), uShape2 = (topH, halfW, n, flat).
uniform vec4 uShape, uShape2;
uniform mat4 modelMatrix;
// the cube captures are half float: a sun glint on cockpit metal can overflow to +Inf (and
// a mip of it to NaN), which would bloom over the frame
vec3 finite(vec3 v, float hi) {
  for (int k = 0; k < 3; k++) v[k] = (v[k] < hi) ? max(v[k], 0.0) : (v[k] >= hi ? hi : 0.0);
  return v;
}
vec3 canopyP(vec2 uv) {
  float zf = uShape.x, zb = uShape.y, zTop = uShape.z;
  float z = zf + (zb - zf) * uv.y;
  float u = clamp(z < zTop ? (zTop - z) / (zTop - zf) : (z - zTop) / (zb - zTop), 0.0, 1.0);
  float h = uShape2.x * pow(max(0.0, 1.0 - pow(u, z < zTop ? 1.9 : 2.2)), 0.62);
  // uShape2.w > 0: a flat crown that many metres either side of zTop, a straight raked windscreen ahead of it (the F-14's)
  float fl = uShape2.w;
  if (fl > 0.0) {
    if (z < zTop) { float L = clamp((z - zf) / (zTop - zf - fl), 0.0, 1.0); h = uShape2.x * (1.0 - pow(1.0 - L, 1.3)); }
    else { float v = clamp((z - zTop - fl) / (zb - zTop - fl), 0.0, 1.0); h = uShape2.x * pow(max(0.0, 1.0 - pow(v, 2.2)), 0.62); }
  }
  float w = uShape2.y * pow(max(0.0, 1.0 - pow(clamp(z < 0.0 ? z / zf : z / zb, 0.0, 1.0), 3.2)), 0.35);
  float t = 3.14159265 * (uv.x - 0.5);
  float sn = sin(t), cs = cos(t), e = 2.0 / uShape2.z;
  return vec3(w * sign(sn) * pow(abs(sn), e), uShape.w + h * pow(abs(cs), e), z);
}
vec3 canopyNormal(vec2 uv) {
  const float E = 0.002;
  vec2 a = clamp(uv, vec2(E), vec2(1.0 - E));
  vec3 du = canopyP(a + vec2(E, 0.0)) - canopyP(a - vec2(E, 0.0));
  vec3 dv = canopyP(a + vec2(0.0, E)) - canopyP(a - vec2(0.0, E));
  return normalize(mat3(modelMatrix) * cross(du, dv));
}

// the head bake's octahedral map (+y its pole, the fold under the chin): direction -> uv (tools/pilot-head-bake.mjs octDir)
vec2 octUv(vec3 d) {
  d /= abs(d.x) + abs(d.y) + abs(d.z);
  vec2 e = d.xz;
  if (d.y < 0.0) e = (1.0 - abs(e.yx)) * vec2(e.x >= 0.0 ? 1.0 : -1.0, e.y >= 0.0 ? 1.0 : -1.0);
  return e * 0.5 + 0.5;
}
// inside the head at q (bake frame): |q| under the baked radius along its direction
float headIn(vec3 q) { return length(q) - textureLod(tHead, octUv(q), 0.0).a * uHeadR.x; }

float hg(float c, float g) { float g2 = g * g; return (1.0 - g2) / (4.0 * 3.14159265 * pow(1.0 + g2 - 2.0 * g * c, 1.5)); }

void main() {
  // the cockpit (canopy bow, HUD, panel) is in front of the glass: skip it
#ifdef COCKPIT_DEPTH
  float dc = texture(tCockpit, gl_FragCoord.xy / uSize).r;
  if (dc < 0.999999 && cockpitDepthW(dc) < vViewW - 0.03) discard;
#else
  float d = texture(tDepth, gl_FragCoord.xy / uSize).r;
  if (!isSky(d) && depthToW(d) < vViewW - 0.03) discard;
#endif

  vec3 r = normalize(vPos - uCamPos);
  vec3 N = normalize(vNrm);
  if (dot(N, r) > 0.0) N = -N; // facing the camera (inner surface)
  float cosT = clamp(-dot(N, r), 0.0, 1.0);
  float cosS = dot(r, uSunDir);
  float ang = acos(clamp(cosS, -1.0, 1.0));
  // sun on the outside of the glass at this point
  float sunLit = smoothstep(-0.05, 0.2, -dot(N, uSunDir));

  // ---- scratches: anisotropic grooves; a groove with tangent T scatters the
  // sun's light only into the cone that keeps the component along T, i.e. it
  // shows when (r - s) ⟂ T. Around the sun that lights up arcs tangential to it.
  vec4 sc = texture(tScratch, vUv);
  vec3 ex = dFdx(vPos), ey = dFdy(vPos);
  vec2 tx = dFdx(vUv), ty = dFdy(vUv);
  vec3 c1 = cross(ey, N), c2 = cross(N, ex);
  vec3 Gu = c1 * tx.x + c2 * ty.x, Gv = c1 * tx.y + c2 * ty.y; // ∇u, ∇v on the surface (common scale)
  vec3 Pu = Gu / max(dot(Gu, Gu), 1e-20), Pv = Gv / max(dot(Gv, Gv), 1e-20);   // ∂P/∂u, ∂P/∂v (same scale)
  vec2 t2 = sc.gb * 2.0 - 1.0;
  vec3 T = Pu * t2.x + Pv * t2.y;
  T = normalize(T + 1e-12);
  vec3 h = r - uSunDir;
  float hl = length(h);
  float g = hl > 1e-4 ? dot(h / hl, T) : 0.0;
  float w = uLobe * (0.6 + 0.8 * sc.a);
  float lobe = exp(-g * g / (w * w));
  // falloff with angle from the sun: strong inside ~10°, a tail out to uReach
  float reach = (exp(-ang / 0.12) + 0.25 * exp(-ang / 0.3)) * (1.0 - smoothstep(uReach * 0.6, uReach, ang)); // only around the sun (ref 04)
  vec3 scratch = uSunE * sc.r * lobe * reach * sunLit * uGain.x;

  // ---- smudges, dust, haze film: forward scattering of the sun, a little sky
  vec4 du = texture(tDust, vUv);
  float phase = hg(cosS, 0.82) * 0.85 + hg(cosS, 0.3) * 0.15;
  vec3 smudge = (uSunE * phase * sunLit + uSkyE * 0.02) * (du.g * uGain.y + du.b * uGain.y * 0.25);
  vec3 dust = (uSunE * hg(cosS, 0.6) * sunLit + uSkyE * 0.03) * du.r * uGain.z;

  // ---- reflection (Fresnel, polycarbonate n = 1.585, two surfaces). The glass shows a
  // Fresnel share of what the reflected ray meets: the cockpit (ray-marched against the
  // interior cube's distances from the glass, so the ghosts sit where the real panel,
  // helmet and arms would reflect), else the sky and ground back out through the canopy,
  // with the sun's glint. It transmits the rest (negative alpha: the composite blends).
  vec3 Na = canopyNormal(vUv);
  if (dot(Na, r) > 0.0) Na = -Na;
  float cosA = clamp(-dot(Na, r), 0.0, 1.0);
  float F = 0.051 + 0.949 * pow(1.0 - cosA, 5.0);
  vec3 Rw = reflect(r, Na);
  float reflShare = clamp(F * 1.6 * uRefl.z, 0.0, 0.85);
  vec3 env = vec3(0.0), glint = vec3(0.0);
  if (reflShare > 0.0005) {
    vec3 P = (uToLocal * vec4(vPos, 1.0)).xyz;
    vec3 Rl = normalize(mat3(uToLocal) * Rw);
    // Parallax against a sphere proxy around the GoPro (the cube's centre, cockpit local): where
    // the reflected ray leaves a sphere of radius uReflP.x, seen from the GoPro. A small radius
    // keeps the ghosts near the glass that shows them; a large one is the plain lookup (the
    // cockpit as if far away). Smooth everywhere: a ray march against the cube's depth lands
    // mostly on surfaces the GoPro can't see (the deck under the windscreen, the floor behind
    // the seat) and breaks into silhouettes; the proxy reads as the ghost a viewer expects.
    vec3 o = P - uEye;
    float bq = dot(o, Rl), cq = dot(o, o) - uReflP.x * uReflP.x;
    float tq = -bq + sqrt(max(bq * bq - cq, 0.0));
    vec3 hitDir = o + Rl * max(tq, 0.0);
    vec4 ref = textureLod(tRefl, hitDir, uRefl.w);
    // coverage (0 where the capture saw out through the glass), from a softer mip: the edge
    // between cockpit and sky in the glass is a soft one (the bubble isn't optically flat)
    vec4 refSoft = textureLod(tRefl, hitDir, uRefl.w + 1.5);
    float hit = clamp(refSoft.a, 0.0, 1.0);
    // colour: un-premultiplied from the sharp level where it has real coverage, else from the
    // soft level. Dividing a sharp texel's colour by its near-zero edge coverage blew the
    // capture's texels up into stair steps along the edge of the cockpit in the glass.
    vec3 refCol = mix(refSoft.rgb / max(refSoft.a, 1e-3), ref.rgb / max(ref.a, 1e-3), smoothstep(0.15, 0.6, ref.a));
    ref.rgb = refCol * hit;
    // below the GoPro the tub is solid (the capture's near plane only leaves out the collar and
    // the seat's head box right at it): fill those holes with the cockpit's blurred average
    float down = smoothstep(-0.05, -0.35, normalize(hitDir).y) * (1.0 - hit);
    if (down > 0.0) {
      vec4 amb = textureLod(tRefl, hitDir, uRefl.w + 4.5);
      ref.rgb += amb.rgb / max(amb.a, 1e-3) * down;
      hit += down;
    }
    // the pilot's helmet, with exact parallax, so it shows on the glass beside and above the GoPro where it
    // really would (the cube can't: it sits centimetres in front of the capture point). The baked head
    // (src/cockpit/head.ts): the reflected ray marched through its radial height field (the outermost surface's
    // distance from the helmet's centre, per direction), turned with the head; lit by the sun and sky, the visor
    // and the lacquered shell glossy. Without it, an ellipsoid: grey shell, dark visor cover.
    vec3 helm = vec3(0.0);
    float helmHit = 0.0;
    vec3 sunL = normalize(mat3(uToLocal) * uSunDir);
    if (uHelmet.w > 0.0 && uHeadR.y > 0.5) {
      vec3 ho = (uHeadM * vec4(P, 1.0)).xyz, hd = normalize(mat3(uHeadM) * Rl);
      float R = uHeadR.x, b2 = dot(ho, hd), h2 = b2 * b2 - (dot(ho, ho) - R * R);
      if (h2 > 0.0) {
        float t0 = max(-b2 - sqrt(h2), 0.0), t1 = -b2 + sqrt(h2);
        // Relaxed steps through the bounding sphere: 0.8 of the radial gap (the field is smooth, so the surface is
        // no nearer along the ray than about that), 3 mm .. R / 7; most rays that enter the sphere pass the head
        // in a handful. Then the last step halved 5 times (~0.1 mm). A miss keeps its closest pass: the silhouette
        // fades over ~4 mm of it (a hard edge stair-stepped in the glass).
        float t = t0, ta = t0, tb = -1.0, fMin = 1.0, tMin = t0;
        for (int i = 0; i < 24; i++) {
          float f = headIn(ho + hd * t);
          if (f < 0.0) { tb = t; break; }
          if (f < fMin) { fMin = f; tMin = t; }
          ta = t;
          t += clamp(f * 0.8, 0.003, R * 0.15);
          if (t > t1) break;
        }
        float cover = 1.0;
        if (tb < 0.0 && fMin < 0.004) { tb = tMin; cover = 1.0 - fMin / 0.004; }
        if (tb > 0.0) {
          if (cover >= 1.0) for (int i = 0; i < 5; i++) { float tm = 0.5 * (ta + tb); if (headIn(ho + hd * tm) < 0.0) tb = tm; else ta = tm; }
          vec2 ou = octUv(ho + hd * tb);
          vec3 alb = textureLod(tHead, ou, 0.0).rgb;
          vec4 nm = textureLod(tHeadN, ou, 0.0);
          // (the bake frame's axes are the head's: back to cockpit local by the transpose of its turn)
          vec3 n = normalize(transpose(mat3(uHeadM)) * (nm.xyz * 2.0 - 1.0));
          vec3 lit = uSunE * max(dot(n, sunL), 0.0) * (1.0 - uRefl2.w) + uSkyE * (0.55 + 0.45 * n.y);
          helm = alb / 3.14159 * lit;   // already exposed (uSunE, uSkyE)
          // gloss: the visor a smoked mirror, the shell lacquer: the sky (and the sun's glint) in them
          float gl = nm.a, cv = clamp(-dot(Rl, n), 0.0, 1.0);
          float f0 = mix(0.04, 0.1, gl * gl), fr = gl * (f0 + (1.0 - f0) * pow(1.0 - cv, 5.0));
          vec3 rv = reflect(Rl, n);
          vec3 skyR = finite(textureLod(tSky, transpose(mat3(uToLocal)) * rv, 1.0).rgb, 2000.0) * uEnvExp;
          float sp = pow(max(dot(rv, sunL), 0.0), mix(24.0, 400.0, gl));
          helm = helm * (1.0 - fr) + (skyR + uSunE * sp * mix(1.0, 40.0, gl) * (1.0 - uRefl2.w)) * fr;
          helmHit = uHelmet.w * cover;
        }
      }
    } else if (uHelmet.w > 0.0) {
      vec3 hr = uHelmet.xyz;   // semi-axes
      vec3 ho = (P - uHelmetC) / hr, hd = Rl / hr;
      float a2 = dot(hd, hd), b2 = dot(ho, hd), c2 = dot(ho, ho) - 1.0, h2 = b2 * b2 - a2 * c2;
      if (h2 > 0.0) {
        float th = (-b2 - sqrt(h2)) / a2;
        if (th > 0.0) {
          vec3 X = ho + hd * th;   // on the unit sphere
          vec3 n = normalize(X / hr);
          float below = smoothstep(-0.25, -0.45, X.y);   // the shell stops above the neck
          float visor = smoothstep(-0.55, -0.75, X.z) * smoothstep(-0.2, 0.05, X.y) * (1.0 - smoothstep(0.45, 0.6, X.y));
          vec3 alb = mix(vec3(0.6, 0.61, 0.6), vec3(0.04), visor);
          vec3 lit = uSunE * max(dot(n, sunL), 0.0) * (1.0 - uRefl2.w) + uSkyE * (0.55 + 0.45 * n.y);
          helm = alb / 3.14159 * lit * (1.0 - below);   // already exposed (uSunE, uSkyE)
          helmHit = (1.0 - below) * uHelmet.w;
        }
      }
    }
    // the sky / ground back out through the glass (in cloud: the flat white of the cloud)
    vec3 sky = finite(textureLod(tSky, Rw, uRefl.w + 0.5).rgb, 2000.0);
    sky = mix(sky, vec3(luma(uSkyE)) * 0.0796, uRefl2.w);   // 1 / (4 pi): sky irradiance as an even radiance, the cloud's grey
    env = finite(ref.rgb, 2000.0) * uRefl.x + sky * uRefl.y * (1.0 - hit);   // premultiplied by coverage
    {
      // the sun's glint off the inner surface (sun light from behind, out through the
      // bubble): a disk spread by the sheet's waviness into a streak along the curve
      float ca = dot(Rw, uSunDir);
      float w = uRefl2.y;
      glint = uSunE * exp(-(2.0 - 2.0 * ca) / (w * w)) / (3.14159 * w * w) * uRefl2.x * (1.0 - uRefl2.w) * (1.0 - hit);
    }
    env = env * uEnvExp;
    env = mix(env, helm * uRefl.x, helmHit);
    env = env * reflShare + glint * reflShare * (1.0 - helmHit);   // uSunE is already exposed
    if (uReflDbg > 0.5) {   // debug views (labs/10-game ?refldbg=): 1 reflection (un-shared), 2 hit mask, 3 reflection alone
      int m = int(uReflDbg + 0.5);
      outColor = m == 1 ? vec4(env / reflShare, -1.0) : m == 2 ? vec4(hit, reflShare * 10.0, 0.0, -1.0) : vec4(env, -1.0);
      return;
    }
  }
  // polycarbonate + gold ITO: the transmitted view darkens a little more toward grazing
  float absorb = uRefl2.z * (0.25 + 0.75 * pow(1.0 - cosA, 2.0));

  // ---- the water (./dropSim.ts, ./dropTex.ts): a height field on the outside of the glass, in mm, from the
  // droplet simulation: its beads (spherical caps, contact angle ~78°) and the thin streams running drops leave
  // behind. The alpha carries the height in canopy-target pixels, and the composite refracts the world through
  // its slope (Snell, water 1.333: a small flipped view of the world in each bead, and a dark rim and crescent
  // where the slope turns the ray back, total internal reflection).
  float height = 0.0;
  vec3 dropLight = vec3(0.0);
  if (uDrops.x > 0.0) {
    // metres per canopy pixel here, along the screen axis that shows the glass face-on: on the raked windscreen the
    // other axis is foreshortened, so the bead's slope across it comes out steeper, as seeing it obliquely makes it
    float mpp = max(min(length(dFdx(vPos)), length(dFdy(vPos))), 1e-5);
    float best = 0.0; vec2 slope = vec2(0.0);
    vec2 tuv = vec2(vUv.x, vUv.y / uDropRegion.x);
    if (tuv.y < 1.0) {
      vec2 tx = uDropRegion.yz;
      #define WH(o) max(texture(tDropH, tuv + (o)).r, texture(tDropFilm, tuv + (o)).r)
      best = WH(vec2(0.0)) * 1e-3;
      if (best > 0.0) {
        // its slope on the sheet (m/m): the texture's difference over a texel, a texel being uPhys / size metres
        float hx = (WH(vec2(tx.x, 0.0)) - WH(vec2(-tx.x, 0.0))) * 1e-3 / (2.0 * tx.x * uPhys.x);
        float hy = (WH(vec2(0.0, tx.y)) - WH(vec2(0.0, -tx.y))) * 1e-3 / (2.0 * tx.y * uPhys.y * uDropRegion.x);
        slope = vec2(hx, hy);
      }
      #undef WH
    }

    if (best > 0.0) {
      height = best / mpp;
      // a soft highlight where the bead's outer surface faces the sky, and the sun's glint on it
      vec3 Tu = normalize(Pu + 1e-12), Tv = normalize(Pv + 1e-12);
      vec3 No = -N;   // outward
      vec3 nd = normalize(No - (slope.x * Tu + slope.y * Tv));
      float up = max(dot(nd, vec3(0.0, 1.0, 0.0)), 0.0);
      float edge = smoothstep(0.35, 0.95, length(slope));
      vec3 rv = reflect(r, nd);
      dropLight = (uSkyE * 0.02 * pow(up, 6.0) * (1.0 - edge) + uSunE * pow(max(dot(rv, uSunDir), 0.0), 200.0) * 0.4 * sunLit) * uDrops.z;
    }
  }

  // alpha: droplet height where there are droplets (> 0, refraction), else minus the share
  // of the view behind that the glass doesn't pass (its reflection share + absorption)
  outColor = vec4(scratch + smudge + dust + env + dropLight, height > 0.0 ? height : -min(reflShare + absorb, 0.9));
}`,va=`
vec3 finiteHdr(vec3 c) {
  uvec3 bits = floatBitsToUint(c);
  for (int k = 0; k < 3; k++) {
    if ((bits[k] & 0x7f800000u) == 0x7f800000u) c[k] = (bits[k] & 0x807fffffu) != 0u ? 0.0 : 65504.0;
  }
  return c;
}`,so=`
uniform vec4 uLens;        // brown: (k1, k2, s, aspect)   fisheye: (θ₁ rad per half-height, f, r₀, aspect)
uniform vec4 uLensB;       // fisheye profile: (c, n, β, -); w: the FOV kick (both projections, ./profile.ts kickScale)
uniform int uProjection;   // 0 brown, 1 fisheye
// Fisheye radial profile, r in output half-heights → angle off axis:
//   θ(r) = (1 - β) r θ₁ + β (atan(r / f) + c max(r - r₀, 0)ⁿ)
// β = 0 is the plain equidistant lens; β = 1 is rectilinear out to r₀ (straight
// lines, natural proportions over the HUD, panel and runway ahead), then a
// compression that grows toward the edges, so the horizon bows harder and harder.
float fisheyeTheta(float r) {
  float prof = atan(r / uLens.y) + uLensB.x * pow(max(r - uLens.z, 0.0), uLensB.y);
  return mix(r * uLens.x, prof, uLensB.z);
}
vec3 lensDir(vec2 uv) {
  vec2 pd = (uv * 2.0 - 1.0) * vec2(uLens.w, 1.0);
  float r2 = dot(pd, pd);
  // the FOV kick: r -> r (1 + a (1 - r²/L²)²) inside the long half-side L (./profile.ts kickScale)
  if (uLensB.w != 0.0) {
    float L = max(uLens.w, 1.0);
    float u = max(1.0 - r2 / (L * L), 0.0);
    pd *= 1.0 + uLensB.w * u * u;
    r2 = dot(pd, pd);
  }
  if (uProjection == 1) {
    float r = sqrt(r2);
    float th = fisheyeTheta(r);
    return r > 1e-6 ? vec3(pd / r * sin(th), -cos(th)) : vec3(0.0, 0.0, -1.0);
  }
  vec2 pu = pd * (1.0 + uLens.x * r2 + uLens.y * r2 * r2);
  return normalize(vec3(pu * uLens.z, -1.0));
}`,Xo=`
${Be}
${gt}
in vec2 vUv; out vec4 outColor;
uniform sampler2D tSrc, tMeter;
uniform vec2 uTexel;
uniform vec4 uPrefilter; // (enabled, threshold, knee, clamp)
uniform float uExposure;
uniform float uCockpitBloom; // prefilter: cockpit pixels' share (sun glints on rails, rivets and the watch stay small)
${va}
vec3 fetch(vec2 uv) {
  vec4 s = texture(tSrc, uv);
  if (uPrefilter.x < 0.5) return s.rgb;
  // the chain's entry: finite (the composite is, but its canopy layer is added after its guard)
  s.rgb = finiteHdr(s.rgb);
  return s.a > 0.75 ? s.rgb * uCockpitBloom : s.rgb;
}
vec3 thresh(vec3 c) {
  float l = luma(c);
  float soft = clamp(l - uPrefilter.y + uPrefilter.z, 0.0, 2.0 * uPrefilter.z);
  soft = soft * soft / (4.0 * uPrefilter.z + 1e-5);
  float k = max(soft, l - uPrefilter.y) / max(l, 1e-5);
  return min(c * k, vec3(uPrefilter.w));
}
void main() {
  vec2 t = uTexel;
  vec3 a = fetch(vUv + t * vec2(-2, 2)), b = fetch(vUv + t * vec2(0, 2)), c = fetch(vUv + t * vec2(2, 2));
  vec3 d = fetch(vUv + t * vec2(-2, 0)), e = fetch(vUv), f = fetch(vUv + t * vec2(2, 0));
  vec3 g = fetch(vUv + t * vec2(-2, -2)), h = fetch(vUv + t * vec2(0, -2)), i = fetch(vUv + t * vec2(2, -2));
  vec3 j = fetch(vUv + t * vec2(-1, 1)), k = fetch(vUv + t * vec2(1, 1)), l = fetch(vUv + t * vec2(-1, -1)), m = fetch(vUv + t * vec2(1, -1));
  vec3 o;
  if (uPrefilter.x > 0.5) {
    float ex = uExposure * texture(tMeter, vec2(0.5)).b;
    // Karis average per box keeps the sun from sparkling
    vec3 b0 = (j + k + l + m) * 0.25, b1 = (a + b + d + e) * 0.25, b2 = (b + c + e + f) * 0.25, b3 = (d + e + g + h) * 0.25, b4 = (e + f + h + i) * 0.25;
    b0 = thresh(b0 * ex); b1 = thresh(b1 * ex); b2 = thresh(b2 * ex); b3 = thresh(b3 * ex); b4 = thresh(b4 * ex);
    float w0 = 1.0 / (1.0 + luma(b0)), w1 = 1.0 / (1.0 + luma(b1)), w2 = 1.0 / (1.0 + luma(b2)), w3 = 1.0 / (1.0 + luma(b3)), w4 = 1.0 / (1.0 + luma(b4));
    o = (b0 * w0 * 0.5 + (b1 * w1 + b2 * w2 + b3 * w3 + b4 * w4) * 0.125) / (w0 * 0.5 + (w1 + w2 + w3 + w4) * 0.125);
  } else {
    o = e * 0.125 + (a + c + g + i) * 0.03125 + (b + d + f + h) * 0.0625 + (j + k + l + m) * 0.125;
  }
  outColor = vec4(o, 1.0);
}`,Qo=`
${Be}
in vec2 vUv; out vec4 outColor;
uniform sampler2D tCoarse, tFine;
uniform vec2 uTexel;
uniform float uRadius, uFineWeight;
void main() {
  vec2 t = uTexel * uRadius;
  vec3 s = texture(tCoarse, vUv).rgb * 4.0;
  s += (texture(tCoarse, vUv + vec2(-t.x, 0)).rgb + texture(tCoarse, vUv + vec2(t.x, 0)).rgb + texture(tCoarse, vUv + vec2(0, -t.y)).rgb + texture(tCoarse, vUv + vec2(0, t.y)).rgb) * 2.0;
  s += texture(tCoarse, vUv + vec2(-t.x, -t.y)).rgb + texture(tCoarse, vUv + vec2(t.x, -t.y)).rgb + texture(tCoarse, vUv + vec2(-t.x, t.y)).rgb + texture(tCoarse, vUv + vec2(t.x, t.y)).rgb;
  outColor = vec4(s / 16.0 + texture(tFine, vUv).rgb * uFineWeight, 1.0);
}`;function Zo(o){return`
uniform sampler2D tSrc${o}, tDepth${o}, tCanopy${o};
uniform sampler2D tDropSrc${o};  // the world at 1/8 (premultiplied by its share of world, cockpit left out), mipmapped: what a drop sees
#ifdef COCKPIT_DEPTH
uniform sampler2D tCockpit${o};
#endif
uniform mat3 uRot${o};          // main view space → this view's space
uniform vec2 uTan${o};          // this view's tan half-angles
uniform mat4 uPrev${o};         // this view's space now → clip of the previous exposure
uniform vec2 uSize${o};         // source px
uniform vec2 uCanTexel${o};
bool cockpit${o}(vec2 uv, float d) {
#ifdef COCKPIT_DEPTH
  return texture(tCockpit${o}, uv).r < 0.999999;
#else
  return !isSky(d) && depthToW(d) < uCockpitDist;
#endif
}
vec2 project${o}(vec3 dir, out float inside) {
  vec3 v = uRot${o} * dir;
  if (v.z > -1e-4) { inside = -1.0; return vec2(0.0); }
  vec2 q = v.xy / -v.z / uTan${o};
  inside = 1.0 - max(abs(q.x), abs(q.y)); // > 0 inside the frustum
  return q * 0.5 + 0.5;
}
vec4 shade${o}(vec2 suv) {
  vec4 can = vec4(0.0);
  vec2 duv = vec2(0.0);
  float tir = 0.0, inDrop = 0.0, rim = 0.0;
  if (uToggles.x > 0.5) {
    can = texture(tCanopy${o}, suv);
    if (can.a > 0.0) {
      // a drop on the glass (shaders.ts): alpha is its height in canopy pixels, so the difference across one
      // canopy texel is its slope. The ray from the lens leaves the water bent away from the surface's normal
      // (Snell, 1.333): toward the uphill side, so the drop shows a small upside-down view of the world past
      // it; past ~49° of slope the ray can't leave (total internal reflection) and the rim goes dark.
      vec2 t = uCanTexel${o};
      vec2 g = vec2(max(texture(tCanopy${o}, suv + vec2(t.x, 0.0)).a, 0.0) - max(texture(tCanopy${o}, suv - vec2(t.x, 0.0)).a, 0.0),
                    max(texture(tCanopy${o}, suv + vec2(0.0, t.y)).a, 0.0) - max(texture(tCanopy${o}, suv - vec2(0.0, t.y)).a, 0.0)) * 0.5;
      float s = length(g);
      inDrop = smoothstep(0.0, 0.12, can.a);
      float sa = s / sqrt(1.0 + s * s);          // sin of the slope
      float sn = 1.333 * sa;
      tir = smoothstep(0.96, 1.1, sn) * inDrop;
      rim = smoothstep(0.25, 0.75, sa) * inDrop;
      if (s > 1e-4 && uDropRefract > 0.0) {
        // past the critical angle the light that gets out has bounced inside the drop: it comes from still
        // further round (the top rim of a bead sees the dark ground, the bottom rim the bright sky)
        float dev = asin(min(sn, 1.0)) - asin(sa) + 0.35 * max(sn - 1.0, 0.0);
        duv = (g / s) * (tan(dev) / (2.0 * uTan${o})) * uDropRefract * inDrop;
      }
    }
  }
  vec2 uv0 = clamp(suv + duv, vec2(0.0), vec2(1.0));
  float d0 = texture(tDepth${o}, uv0).r;
  bool cp = cockpit${o}(uv0, d0);
  // a bead over open sky / world refracts the world beyond the glass, never the cockpit inside it: the
  // render has the cockpit drawn over that part of the world, so shorten the bend until it clears
  if (cp && duv != vec2(0.0)) {
    float ds = texture(tDepth${o}, suv).r;
    if (!cockpit${o}(suv, ds)) {
      for (int k = 0; k < 3; k++) {
        duv *= 0.5; uv0 = suv + duv; d0 = texture(tDepth${o}, uv0).r; cp = cockpit${o}(uv0, d0);
        if (!cp) break;
      }
      if (cp) { uv0 = suv; d0 = ds; cp = false; }
    }
  }
  vec3 c0 = texture(tSrc${o}, uv0).rgb;
  // the view through a drop: a small, wide, upside-down picture of the world, so heavily minified: from the
  // world at 1/8 and its mips (sampling the full picture there would sparkle), soft as the drop is out of focus
  if (duv != vec2(0.0)) {
    float lod = 0.5 + 2.5 * smoothstep(0.02, 0.25, length(duv));
    vec4 lo = textureLod(tDropSrc${o}, uv0, lod);
    c0 = mix(c0, lo.rgb / max(lo.a, 1e-3), smoothstep(0.003, 0.02, length(duv)) * smoothstep(0.05, 0.3, lo.a));
  }
  vec3 col = c0;
  // (not through a drop: it rides on the glass with the camera, and the world it shows is tiny)
  if (uToggles.y > 0.5 && !cp && inDrop < 0.5) {
    // camera motion blur, world only
    vec3 dir = vec3((uv0 * 2.0 - 1.0) * uTan${o}, -1.0);
    vec4 P = isSky(d0) ? vec4(dir, 0.0) : vec4(dir * depthToW(d0), 1.0);
    vec4 c = uPrev${o} * P;
    vec2 v = c.w > 1e-4 ? uv0 - (c.xy / c.w * 0.5 + 0.5) : vec2(0.0);
    float L = length(v);
    if (L > uMaxBlur) v *= uMaxBlur / L;
    float px = length(v * uSize${o});
    if (px > 1.5) {
      int n = int(clamp(px / 3.0, 4.0, 20.0));
      float j = ign(gl_FragCoord.xy);
      vec3 acc = c0; float wsum = 1.0;
      for (int k = 0; k < 20; k++) {
        if (k >= n) break;
        vec2 uv = clamp(uv0 + v * ((float(k) + j) / float(n) - 0.5), vec2(0.0), vec2(1.0));
        if (cockpit${o}(uv, texture(tDepth${o}, uv).r)) continue;
        acc += texture(tSrc${o}, uv).rgb; wsum += 1.0;
      }
      col = acc / wsum;
    }
  }
  col *= uViewExp; // exposure x white balance, when the sky composers leave it to the lens
  if (!cp) col *= uIto;
  // NaN / Inf guard: one bad sample (takram's near-field inscatter can return
  // NaN) would otherwise bloom into a blob over half the frame. NaN goes to black, but
  // +Inf is the sun's core overflowing the half-float sky buffer (iPhone GPUs reach it at
  // the disk's centre): that is the brightest thing in the frame, not a hole, so it goes to
  // the half-float max. (Exponent bits: isnan / isinf can be optimised away on mobile.)
  col = max(finiteHdr(col), vec3(0.0));
  // the canopy: transmit (1 - reflection share), add its reflection and marks (shaders.ts)
  // a drop: a little less light through the water, much less where the rim turns the ray back (it shows
  // the dark cockpit inside, reflected), and no glass reflection under it (its alpha is its height)
  // (without the refraction, the low tiers: a darker bead and rim stand in for the flipped picture)
  bool bend = uDropRefract > 0.0;
  // the picture through a drop is soft and greyed (the reference's beads read grey, not as blue bubbles)
  col = mix(col, vec3(dot(col, vec3(0.2126, 0.7152, 0.0722))), 0.55 * inDrop);
  // the meniscus: toward a drop's edge the water's surface tilts until it mirrors the dark cockpit and ground
  // more than it passes the sky, so even over flat cloud each bead and hairline has its dark outline
  col *= mix(1.0, bend ? 0.88 : 0.72, inDrop) * mix(1.0, bend ? 0.5 : 0.3, tir) * (1.0 - 0.62 * rim) * (1.0 - 0.65 * inDrop * (1.0 - smoothstep(0.6, 3.0, can.a)));
  col = col * (1.0 - max(-can.a, 0.0)) + can.rgb;
  col = finiteHdr(col);
  return vec4(col, cp ? 1.0 : isSky(d0) ? 0.0 : 0.5);
}`}function Jo(o){const t=Array.from({length:o},(n,e)=>Zo(e)).join(`
`);return`
${Be}
${ma}
${gt}
${so}
${va}
in vec2 vUv; out vec4 outColor;
uniform vec4 uToggles;     // (canopy, motion blur, -, -)
uniform float uMaxBlur, uDropRefract, uBlend;
uniform vec3 uIto;
uniform vec3 uViewExp;
float ign(vec2 p) { return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }
${t}
void main() {
  vec3 dir = lensDir(vUv);
${o===1?`  float in0; vec2 uv0 = project0(dir, in0);
  outColor = in0 >= 0.0 ? shade0(uv0) : vec4(0.0, 0.0, 0.0, 0.5);`:`
  float in0, in1, in2;
  vec2 uv0 = project0(dir, in0), uv1 = project1(dir, in1), uv2 = project2(dir, in2);
  float w0 = smoothstep(0.0, uBlend, in0);
  vec4 c = vec4(0.0);
  float wsum = 0.0;
  if (w0 > 0.0) { c += shade0(uv0) * w0; wsum += w0; }
  if (w0 < 1.0) {
    if (in1 >= 0.0 && in1 >= in2) { c += shade1(uv1) * (1.0 - w0); wsum += 1.0 - w0; }
    else if (in2 >= 0.0) { c += shade2(uv2) * (1.0 - w0); wsum += 1.0 - w0; }
  }
  outColor = wsum > 0.0 ? c / wsum : vec4(0.0, 0.0, 0.0, 0.5);`}
}`}const en=`
${Be}
in vec2 vUv; out vec4 outColor;
uniform sampler2D tSrc, tMeter;
uniform vec2 uSunUv;       // sun in output uv (may be off-frame)
uniform float uExposure, uThreshold, uDecay;
float ign(vec2 p) { return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }
void main() {
  const int N = 28;
  float ex = uExposure * texture(tMeter, vec2(0.5)).b;
  vec2 delta = (uSunUv - vUv) / float(N) * 0.9;
  vec2 uv = vUv + delta * ign(gl_FragCoord.xy);
  vec3 acc = vec3(0.0);
  float w = 1.0;
  for (int i = 0; i < N; i++) {
    if (uv.x >= 0.0 && uv.y >= 0.0 && uv.x <= 1.0 && uv.y <= 1.0) {
      vec4 s = texture(tSrc, uv);
      // bright open sky only: clouds, ground and the cockpit frame occlude
      float open = 1.0 - smoothstep(0.1, 0.4, s.a);
      acc += min(max(s.rgb * ex - uThreshold, 0.0), vec3(30.0)) * open * w;
    }
    w *= uDecay;
    uv += delta;
  }
  outColor = vec4(acc / float(N), 1.0);
}`,tn=`
${Be}
${gt}
in vec2 vUv; out vec4 outColor;
uniform sampler2D tSoft;            // bright pass at 1/16 res (soft discs)
uniform sampler2D tSoft2;           // 1/32
uniform sampler2D tSoft3;           // 1/64
uniform float uThreshold;
uniform vec4 uGain;                 // (ghosts, -, -, -)
// Cubic B-spline reconstruction from four bilinear taps: magnified, a bilinear lookup
// shows the texel grid as stair steps and diamond-shaped blobs; the B-spline is smooth.
vec3 bspline(sampler2D t, vec2 uv) {
  vec2 ts = vec2(textureSize(t, 0));
  vec2 p = uv * ts - 0.5, f = fract(p); p -= f;
  vec2 f2 = f * f, f3 = f2 * f;
  vec2 w0 = (1.0 - 3.0 * f + 3.0 * f2 - f3) / 6.0, w1 = (4.0 - 6.0 * f2 + 3.0 * f3) / 6.0;
  vec2 w2 = (1.0 + 3.0 * f + 3.0 * f2 - 3.0 * f3) / 6.0, w3 = f3 / 6.0;
  vec2 g0 = w0 + w1, g1 = w2 + w3;
  vec2 h0 = (w1 / g0 - 1.0 + p + 0.5) / ts, h1 = (w3 / g1 + 1.0 + p + 0.5) / ts;
  return (texture(t, vec2(h0.x, h0.y)).rgb * g0.x + texture(t, vec2(h1.x, h0.y)).rgb * g1.x) * g0.y
       + (texture(t, vec2(h0.x, h1.y)).rgb * g0.x + texture(t, vec2(h1.x, h1.y)).rgb * g1.x) * g1.y;
}
vec3 hotOf(vec3 c, float thr) { float l = luma(c); return c * max(l - thr, 0.0) / max(l, 1e-4); }
// A ghost is a defocused image of the source through the lens: the bigger it is (|k|), the
// more out of focus, so it reads from a blurrier level of the bright pass. Blurring lowers
// the peaks, so the threshold comes down with the level to keep the same sources lit.
vec3 hot(float level, vec2 uv) {
  if (level < 0.5) return hotOf(bspline(tSoft, uv), uThreshold);
  if (level < 1.5) return hotOf(bspline(tSoft2, uv), uThreshold * 0.55);
  return hotOf(bspline(tSoft3, uv), uThreshold * 0.3);
}
float window(vec2 uv) { vec2 e = smoothstep(0.0, 0.12, uv) * smoothstep(0.0, 0.12, 1.0 - uv); return e.x * e.y; }
void main() {
  vec3 acc = vec3(0.0);
  // ghost i shows a source at s where uv = 0.5 + (s - 0.5) k: sample s = 0.5 + (uv - 0.5) / k
  const int G = 6;
  float ks[6] = float[6](-0.42, -0.78, -1.35, 0.52, -2.3, 0.28);
  vec3 tint[6] = vec3[6](vec3(0.5, 0.9, 0.8), vec3(1.0, 0.75, 0.45), vec3(0.5, 0.7, 1.0), vec3(1.0, 0.9, 0.7), vec3(0.6, 0.55, 1.0), vec3(0.75, 1.0, 0.7));
  float amp[6] = float[6](0.9, 0.55, 0.35, 0.7, 0.18, 1.0);
  vec2 c = vUv - 0.5;
  for (int i = 0; i < G; i++) {
    float k = ks[i], ak = abs(k);
    float level = ak < 0.6 ? 0.0 : ak < 1.6 ? 1.0 : 2.0;
    // dispersion: red and blue images at slightly different scales
    vec2 sr = 0.5 + c / (k * 1.012), sg = 0.5 + c / k, sb = 0.5 + c / (k * 0.988);
    vec3 g = vec3(hot(level, sr).r * window(sr), hot(level, sg).g * window(sg), hot(level, sb).b * window(sb));
    // a bigger ghost (|k| > 1) spreads the same light over more area
    acc += g * tint[i] * amp[i] / max(k * k, 0.25);
  }
  acc *= uGain.x;
  outColor = vec4(acc, 1.0);
}`,an=`
${Be}
${gt}
${va}
in vec2 vUv; out vec4 outColor;
uniform sampler2D tSrc, tPrev;
uniform vec2 uSunUv;
uniform float uSunR, uAspect, uExposure;
uniform vec4 uAdapt;         // (rate, key, min, max)
uniform float uVisRate, uFallbackVis, uSunThreshold, uClear;
uniform vec4 uMeterW;        // (open sky weight, lower-frame bias, sample clamp, sample clamp with the sun on frame)
uniform float uSunFront;
void main() {
  // Log-average luminance of the WORLD the eye is looking at: the cockpit is
  // excluded (it has its own gain), open sky counts for less, and the lower /
  // centre of the frame (runway, ground, cloud deck ahead) for more, so a bright
  // sparse-cloud sky doesn't pull the takeoff roll down to murk. Samples are
  // clamped (lower still with the sun on frame) so the sun doesn't crush the exposure.
  float hi = mix(uMeterW.z, uMeterW.w, uSunFront);
  float acc = 0.0, wsum = 0.0;
  for (int j = 0; j < 9; j++) for (int i = 0; i < 16; i++) {
    vec2 uv = (vec2(float(i), float(j)) + 0.5) / vec2(16.0, 9.0);
    vec4 s = texture(tSrc, uv);
    s.rgb = finiteHdr(s.rgb);
    float cls = s.a > 0.75 ? 0.0 : s.a > 0.25 ? 1.0 : uMeterW.x;
    float w = (1.0 - 0.55 * length((uv - 0.5) * vec2(1.0, 1.3))) * (1.0 + uMeterW.y * (0.5 - uv.y)) * cls;
    acc += log(clamp(luma(s.rgb) * uExposure, 1e-3, hi)) * w; wsum += w;
  }
  vec4 prev = texture(tPrev, vec2(0.5));
  // all cockpit (head look into the tub): hold
  float L = wsum > 0.5 ? acc / wsum : prev.r;
  float vis = uFallbackVis;
  if (uSunUv.x > 0.005 && uSunUv.y > 0.005 && uSunUv.x < 0.995 && uSunUv.y < 0.995) {
    float s = 0.0;
    for (int k = 0; k < 24; k++) {
      float a = float(k) * 2.39996, rr = sqrt((float(k) + 0.5) / 24.0);
      vec4 t = texture(tSrc, uSunUv + vec2(cos(a) / uAspect, sin(a)) * rr * uSunR);
      s += (1.0 - smoothstep(0.1, 0.4, t.a)) * smoothstep(uSunThreshold * 0.5, uSunThreshold, luma(finiteHdr(t.rgb)) * uExposure);
    }
    vis = s / 24.0;
  }
  vis *= uClear; // inside cloud the disk is gone even where the fog reads bright
  float Lm = mix(prev.r, L, uAdapt.x);
  float v = mix(prev.g, vis, uVisRate);
  outColor = vec4(Lm, v, clamp(uAdapt.y / exp(Lm), uAdapt.z, uAdapt.w), 1.0);
}`,on=`
${Be}
precision highp sampler3D;
${gt}
${so}
in vec2 vUv; out vec4 outColor;
uniform sampler2D tSrc, tBloom, tRays, tMeter, tFlare;
uniform sampler3D tLut;
uniform vec4 uFlare;       // sun flare: (screen-space flare gain, starburst, halo, bloom boost with the sun in view)
uniform float uStreak;     // faint horizontal (anamorphic-style) streak through the sun
uniform vec2 uOutSize;
uniform vec2 uCA;          // (lateral CA at the corner, edge softness px at the corner)
uniform vec3 uSunView;     // toward the sun, view space
uniform vec3 uSunE;        // sun irradiance (pre-exposure) for the veil
uniform vec4 uGlare;       // bloom, rays, veil, ghosts
uniform vec2 uSunPd;       // sun in output p_d
uniform float uPdUnit;     // flare element sizes are in short half-sides: p_d units x this (1 landscape, aspect portrait)
uniform float uSunFront;
uniform float uExposure;
uniform vec4 uSplit;
uniform vec3 uShadowTint, uHighTint;
uniform vec4 uFinish;      // (LUT mix, vignette, grain, time)
uniform float uLutSize, uLift;
uniform vec4 uCockpit;     // cockpit pixels: (exposure gain, neutralise darks, veil kept, rays kept)
uniform vec4 uToggles;     // (-, -, CA + softness, grade)
uniform vec4 uGLoad;       // the pilot's eyes under G (src/flight/gload.ts): (grey, tunnel, red, the crash's drain)

float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
const mat3 ACES_IN = mat3(0.59719, 0.07600, 0.02840, 0.35458, 0.90834, 0.13383, 0.04823, 0.01566, 0.83777);
const mat3 ACES_OUT = mat3(1.60475, -0.10208, -0.00327, -0.53108, 1.10813, -0.07276, -0.07367, -0.00605, 1.07602);
vec3 aces(vec3 c) {
  c = ACES_IN * c;
  vec3 a = c * (c + 0.0245786) - 0.000090537, b = c * (0.983729 * c + 0.4329510) + 0.238081;
  return clamp(ACES_OUT * (a / b), 0.0, 1.0);
}
vec3 srgb(vec3 c) { return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c)); }
float hexagon(vec2 p, float r) { p = abs(p); float d = max(dot(p, vec2(0.8660254, 0.5)), p.y); return 1.0 - smoothstep(r * 0.82, r, d); }

void main() {
  float aspect = uLens.w;
  vec2 pd = (vUv * 2.0 - 1.0) * vec2(aspect, 1.0);
  float r2n = dot(pd, pd) / (aspect * aspect + 1.0); // 0 centre .. 1 corner
  vec4 s0 = texture(tSrc, vUv);
  vec3 col = s0.rgb;
  bool cockpit = s0.a > 0.75;
  float ck = cockpit ? 1.0 : 0.0;
  if (uToggles.z > 0.5) {
    // lateral chromatic aberration (radial) and edge softness, both growing with r²
    vec2 c = vUv - 0.5;
    float ca = uCA.x * r2n;
    col.r = texture(tSrc, 0.5 + c * (1.0 + ca)).r;
    col.b = texture(tSrc, 0.5 + c * (1.0 - ca)).b;
    float soft = uCA.y * smoothstep(0.35, 1.0, r2n);
    if (soft > 0.05) {
      vec2 o = soft / uOutSize;
      vec3 b = texture(tSrc, vUv + vec2(o.x, o.y)).rgb + texture(tSrc, vUv + vec2(-o.x, o.y)).rgb + texture(tSrc, vUv + vec2(o.x, -o.y)).rgb + texture(tSrc, vUv + vec2(-o.x, -o.y)).rgb;
      col = mix(col, b * 0.25, clamp(soft / 3.0, 0.0, 0.6));
    }
  }
  vec4 meter = texture(tMeter, vec2(0.5));
  float ex = uExposure * meter.b;
  // the cockpit sits in the canopy's shade: open it up so the panel, consoles and hands read
  col *= ex * mix(1.0, uCockpit.x, ck);
  float sunVis = meter.g;
  float sunIn = sunVis * uSunFront; // the sun's disk reaching the lens (clouds, canopy frame occlude)
  // more veiling bloom with the sun in view: the frame glows toward it
  col += texture(tBloom, vUv).rgb * uGlare.x * (1.0 + uFlare.w * sunIn * mix(1.0, 0.3, ck));
  col += texture(tRays, vUv).rgb * uGlare.y * (0.35 + 2.6 * sunVis * (1.0 - sunVis)) * uSunFront * mix(1.0, uCockpit.w, ck);
  // veiling glare: a wide PSF around the sun; the cockpit sits inside the canopy,
  // out of most of the glass glare, so it stays dark
  vec3 ld = lensDir(vUv);
  float th = acos(clamp(dot(ld, uSunView), -1.0, 1.0));
  float psf = 0.003 / (th * th + 0.004) + 0.0004 / (th * th + 0.0002) + 0.012 * exp(-th / 0.5);
  vec3 sunE = uSunE * ex * sunVis;
  col += sunE * psf * uGlare.z * uSunFront * mix(1.0, uCockpit.z, ck);
  if (uSunFront > 0.0 && sunVis > 0.001) {
    float sl = luma(sunE) * uSunFront;
    vec3 sunTint = sunE / max(luma(sunE), 1e-4);
    // ghosts: reflections between lens elements, mirrored through the centre (hexagonal aperture)
    if (uGlare.w > 0.0) {
      vec3 gh = vec3(0.0);
      float ks[6] = float[6](-0.35, -0.7, -1.05, 0.45, -1.6, 0.18);
      float sz[6] = float[6](0.09, 0.05, 0.16, 0.035, 0.28, 0.06);
      vec3 tint[6] = vec3[6](vec3(0.4, 0.9, 0.7), vec3(0.9, 0.6, 0.3), vec3(0.3, 0.6, 1.0), vec3(1.0, 0.8, 0.5), vec3(0.35, 0.55, 1.0), vec3(0.7, 1.0, 0.6));
      for (int i = 0; i < 6; i++) {
        vec2 c = uSunPd * ks[i];
        float zi = sz[i] * uPdUnit;
        gh += tint[i] * hexagon(pd - c, zi) * (0.6 + 0.4 * smoothstep(0.0, zi, length(pd - c)));
      }
      col += gh * sl * 0.0025 * uGlare.w;
    }
    // aperture starburst: six thin spikes (plus a fainter, rotated six) off the disk
    vec2 dp = (pd - uSunPd) / uPdUnit;
    float d = length(dp);
    float phi = atan(dp.y, dp.x) + 0.21;
    float spikes = pow(abs(cos(3.0 * phi)), 64.0) + 0.35 * pow(abs(cos(3.0 * phi + 1.5708)), 120.0);
    float reach = 1.0 / (1.0 + pow(d / 0.05, 1.5));
    col += sunTint * sl * spikes * reach * smoothstep(0.004, 0.02, d) * 0.5 * uFlare.y * mix(1.0, 0.25, ck);
    // horizontal streak: thin, long, cool
    float sx = abs(dp.x), sy = abs(dp.y);
    col += vec3(0.6, 0.8, 1.0) * sl * exp(-sy / 0.005) / (1.0 + sx / 0.15) * 0.12 * uStreak * mix(1.0, 0.25, ck);
    // halo: a soft chromatic ring around the sun (~15° out)
    vec3 ring = vec3(exp(-pow((th - 0.27) / 0.035, 2.0)), exp(-pow((th - 0.26) / 0.035, 2.0)), exp(-pow((th - 0.25) / 0.035, 2.0)));
    col += ring * sl * 0.008 * uFlare.z * mix(1.0, 0.3, ck);
  }
  // screen-space flare (ghosts + horizontal streak from the bright pass)
  col += texture(tFlare, vUv).rgb * uFlare.x * mix(1.0, 0.5, ck);
  // ACES once, then display-referred grading
  vec3 c = srgb(aces(col / 0.6));
  if (uToggles.w > 0.5) {
    float l = luma(c);
    float hi = smoothstep(0.25 + uSplit.y * 0.2, 0.95, l), sh = 1.0 - smoothstep(0.0, 0.5 + uSplit.y * 0.2, l);
    c += (uShadowTint * sh * (1.0 - uCockpit.y * ck) + uHighTint * hi) * uSplit.x;
    c = clamp(c, 0.0, 1.0);
    if (uFinish.x > 0.0) {
      vec3 lc = c * ((uLutSize - 1.0) / uLutSize) + 0.5 / uLutSize;
      c = mix(c, texture(tLut, lc).rgb, uFinish.x);
    }
    // shadow lift: a toe that opens up the darks without greying black
    // cockpit: back toward neutral (the grade's teal turns the darks navy and white paper cyan)
    float lc = luma(c);
    c = mix(c, vec3(lc), uCockpit.y * ck * (1.0 - 0.6 * smoothstep(0.15, 0.5, lc)));
    float ll = luma(c);
    c *= 1.0 + uLift * exp(-ll / 0.09) * smoothstep(0.0, 0.02, ll);
  }
  // G: what the pilot's eyes do (src/flight/gload.ts), for the world and the cockpit alike.
  // Radial from the lens axis in degrees off it, so the landscape and portrait frames close
  // in the same way. Grey-out: the periphery loses colour, then light, creeping inward with
  // the load. The tunnel: the walls close toward a clear centre (~11 deg at the extreme) and
  // the whole view flattens. Negative g: a red tint, stronger toward the edges.
  if (uGLoad.x + uGLoad.y + uGLoad.z > 0.002) {
    float ang = degrees(acos(clamp(-ld.z, -1.0, 1.0)));
    float gy = uGLoad.x, tn = uGLoad.y;
    float g0 = mix(66.0, 30.0, gy);
    float wg = smoothstep(g0, g0 + 34.0, ang) * gy;
    // the tunnel: one long radial ramp, clear in the middle and darkening steadily outward to
    // pure black only at the rim (left / right edges ~80 deg off the axis). As it closes, the
    // clear centre shrinks (60 -> 14 deg) and the black reaches further in (105 -> 72 deg),
    // but it's always a soft gradient, never a black field with a hole in it.
    float t0 = mix(60.0, 14.0, tn), t1 = mix(105.0, 72.0, tn);
    float wt = smoothstep(t0, t1, ang);
    float dark = pow(wt, 1.25) * smoothstep(0.0, 0.3, tn);
    float l = luma(c);
    c = mix(c, vec3(l), clamp(wg * 0.9 + wt * tn, 0.0, 1.0));
    c *= 1.0 - 0.42 * wg * (1.0 - tn);
    c *= 1.0 - dark;
    float lg = luma(c);
    c = mix(c, vec3(lg), 0.12 * tn);
    float wr = uGLoad.z * (0.12 + 0.38 * smoothstep(20.0, 75.0, ang));
    c = mix(c, vec3(lg * 1.10 + 0.015, lg * 0.65, lg * 0.60), wr);
  }
  // the crash (src/ui/wasted.ts): the colour drains out of the whole frame toward a cool grey,
  // the contrast softening and the light going down a little, before the fade to black
  if (uGLoad.w > 0.001) {
    float dr = uGLoad.w, l = luma(c);
    c = mix(c, vec3(l) * vec3(0.96, 0.99, 1.04), dr * 0.9);
    c = mix(c, vec3(0.18), 0.12 * dr);
    c *= 1.0 - 0.16 * dr;
  }
  if (uToggles.w > 0.5) {
    c *= 1.0 - uFinish.y * r2n * r2n * 1.4 - uFinish.y * 0.15 * r2n;
    float n = hash12(gl_FragCoord.xy + fract(uFinish.w * 7.31) * 911.0) + hash12(gl_FragCoord.xy * 1.37 + fract(uFinish.w * 3.17) * 577.0) - 1.0;
    c += n * uFinish.z * (0.35 + 0.65 * (1.0 - abs(luma(c) * 2.0 - 1.0)));
  }
  outColor = vec4(clamp(c, 0.0, 1.0), 1.0);
}`,nn=`
${Be}
in vec2 vUv; out vec4 outColor;
uniform sampler2D tSrc; uniform int uMode;
void main() {
  vec4 s = texture(tSrc, vUv);
  outColor = uMode == 1 ? vec4(s.a > 0.75 ? 1.0 : 0.0, s.a > 0.25 && s.a < 0.75 ? 0.6 : 0.0, s.a < 0.25 ? 1.0 : 0.0, 1.0) : vec4(s.rgb / (1.0 + s.rgb), 1.0);
}`,sn=`
${Be}
${ma}
in vec2 vUv; out vec4 outColor;
uniform sampler2D tSrc;
uniform vec2 uTexel;   // the source's texel
void main() {
  vec3 acc = vec3(0.0); float w = 0.0;
  for (int j = 0; j < 4; j++) for (int i = 0; i < 4; i++) {
    vec2 uv = vUv + (vec2(float(i), float(j)) - 1.5) * 2.0 * uTexel;
    if (cockpitPix(uv, texture(tDepth, uv).r)) continue;
    acc += clamp(texture(tSrc, uv).rgb, vec3(0.0), vec3(6.0e4)); w += 1.0;
  }
  outColor = vec4(acc / 16.0, w / 16.0);
}`,ft=6;function rn(){const o=new Ut;return o.setAttribute("position",new Yt([-1,-1,0,3,-1,0,-1,3,0],3)),o}function Ge(o,t,a=et,n=Re){const e=new rt(Math.max(1,o),Math.max(1,t),{type:a,depthBuffer:!1,minFilter:n,magFilter:n});return e.texture.generateMipmaps=!1,e}const We=(o,t)=>new mt({glslVersion:vt,vertexShader:jo,fragmentShader:o,uniforms:t,depthTest:!1,depthWrite:!1});class Na{constructor(t,a){this.camera=t,this.canopyCamera=a}camera;canopyCamera;rot=new ua;tan=new me(1,1);prev=new Oe;src=null;depth=null;cockpitDepth=null;size=new me(1,1);canopyRT=Ge(1,1);dropRT=(()=>{const t=Ge(1,1);return t.texture.minFilter=fa,t.texture.generateMipmaps=!0,t})();canopyCleared=!1}class ln extends pa{constructor(t,a,n,e=()=>null){super("ViewTapPass"),this.lens=t,this.view=a,this.cockpitDepth=n,this.source=e,this.needsSwap=!1,this.needsDepthTexture=!0}lens;view;cockpitDepth;source;depthTexture=null;setDepthTexture(t){this.depthTexture=t}setSize(t,a){this.view.size.set(t,a),this.lens.sizeCanopy(this.view)}render(t,a){this.view.src=this.source()??a.texture,this.view.depth=this.depthTexture,this.view.cockpitDepth=this.cockpitDepth(),this.lens.renderCanopy(t,this.view)}}class cn extends pa{frame={lens:new fe(.13,-.002,.6,16/9),lensB:new fe(0,2,0,0),projection:0,sunView:new q(0,0,-1),sunUv:new me(-1,-1),sunPd:new me,sunFront:0,sunRadiusUv:.01,sunE:new q,skyE:new q,sunDirWorld:new q(0,1,0),water:{on:!1,detail:1,gain:1},adaptRate:1,visRate:1,fallbackVis:1,envRot:new ua,time:0};cockpitU={uCockpitDist:new c(2.6),tCockpit:new c(null),uCockpitDepth:new c(new q(Math.log2(41),.01,40))};views;u={canopy:{tScratch:new c(null),tDust:new c(null),tRefl:new c(null),tSky:new c(null),uToLocal:new c(new Oe),uEye:new c(new q),uRefl:new c(new fe(1,1,1,.5)),uRefl2:new c(new fe(0,.05,0,0)),uEnvExp:new c(new q(1,1,1)),uReflDbg:new c(0),uReflP:new c(new me(1.2,0)),uHelmet:new c(new fe(.125,.135,.15,1)),uHelmetC:new c(new q(0,.03,.1)),tHead:new c(null),tHeadN:new c(null),uHeadM:new c(new Oe),uHeadR:new c(new me(.27,0)),uShape:new c(new fe(st.zf,st.zb,st.zTop,st.base)),uShape2:new c(new fe(st.topH,st.halfW,st.n,0)),tDepth:new c(null),uDepth:new c(new q),uSize:new c(new me),uCamPos:new c(new q),uSunDir:new c(new q),uSunE:new c(new q),uSkyE:new c(new q),uGain:new c(new fe(1,1,1,1)),uLobe:new c(.1),uReach:new c(.7),uDrops:new c(new fe(0,1,1,0)),tDropH:new c(null),tDropFilm:new c(null),uDropRegion:new c(new q(.8,1/2048,1/2048)),uPhys:new c(new me(2,2.85))},composite:{uDepth:new c(new q),uLens:new c(new fe),uLensB:new c(new fe),uProjection:new c(0),uToggles:new c(new fe(1,1,0,0)),uMaxBlur:new c(.18),uDropRefract:new c(.006),uBlend:new c(.08),uIto:new c(new q(.97,.95,.88)),uViewExp:new c(new q(1,1,1))},down:{tSrc:new c(null),tMeter:new c(null),uTexel:new c(new me),uPrefilter:new c(new fe(0,1.2,.6,40)),uExposure:new c(1),uCockpitBloom:new c(1)},up:{tCoarse:new c(null),tFine:new c(null),uTexel:new c(new me),uRadius:new c(1),uFineWeight:new c(1)},flare:{tSoft:new c(null),tSoft2:new c(null),tSoft3:new c(null),uThreshold:new c(12),uGain:new c(new fe(1,1,0,0))},rays:{tSrc:new c(null),tMeter:new c(null),uSunUv:new c(new me),uExposure:new c(1),uThreshold:new c(1.5),uDecay:new c(.965)},meter:{tSrc:new c(null),tPrev:new c(null),uSunUv:new c(new me),uSunR:new c(.01),uAspect:new c(16/9),uExposure:new c(1),uAdapt:new c(new fe(1,.075,.6,1.25)),uVisRate:new c(1),uFallbackVis:new c(1),uSunThreshold:new c(40),uClear:new c(1),uMeterW:new c(new fe(.3,1.2,12,3)),uSunFront:new c(0)},final:{tSrc:new c(null),tBloom:new c(null),tRays:new c(null),tMeter:new c(null),tFlare:new c(null),uFlare:new c(new fe(1,1,1,0)),uStreak:new c(1),tLut:new c(Po()),uOutSize:new c(new me),uLens:new c(new fe),uLensB:new c(new fe),uProjection:new c(0),uCA:new c(new me(.012,2)),uSunView:new c(new q),uSunE:new c(new q),uGlare:new c(new fe(1,1,1,1)),uSunPd:new c(new me),uPdUnit:new c(1),uSunFront:new c(0),uExposure:new c(1),uSplit:new c(new fe(1,0,0,0)),uShadowTint:new c(new q(-.02,.005,.03)),uHighTint:new c(new q(.035,.012,-.03)),uFinish:new c(new fe(1,.35,.02,0)),uLutSize:new c(2),uLift:new c(0),uCockpit:new c(new fe(1,0,.2,1)),uToggles:new c(new fe(1,1,1,1)),uGLoad:new c(new fe(0,0,0,0))},debug:{tSrc:new c(null),uMode:new c(0)},dropSrc:{tSrc:new c(null),tDepth:new c(null),uDepth:new c(new q),uTexel:new c(new me)}};on={canopy:!0,bloom:!0,flare:!0,rays:!0,motionBlur:!0,distortion:!0,grade:!0,adapt:!0};debugMode=0;timer=null;outputTarget=null;outputSize=new me(1,1);canopyScale=.75;compositeScale=1;sideCanopy=!0;dropSim=null;dropTex=null;reflection=null;renderSides=null;quad;quadScene=new Ie;quadCam=new go;mats;canopyMat;canopyScene=new Ie;canopyProxy=null;canopySource=null;compositeRT=Ge(1,1);down=[];up=[];raysRT=Ge(1,1);flareRT=Ge(1,1);meterRT=[Ge(1,1,Vt,qt),Ge(1,1,Vt,qt)];meterIdx=0;depthTexture=null;logDepth=!1;cockpitDepthMode=!1;centreCockpitDepth=()=>null;centreSource=()=>null;constructor(t,a=0){super("LensPass"),this.needsSwap=!1,this.needsDepthTexture=!0,this.views=[new Na(t,t)];for(let e=0;e<a;e++){const r=t.clone();this.views.push(new Na(r,r))}const n=this.u;for(const e of[n.canopy,n.composite,n.dropSrc])Object.assign(e,this.cockpitU);for(let e=0;e<this.views.length;e++)Object.assign(n.composite,{[`tSrc${e}`]:new c(null),[`tDepth${e}`]:new c(null),[`tCanopy${e}`]:new c(null),[`tCockpit${e}`]:new c(null),[`tDropSrc${e}`]:new c(null),[`uRot${e}`]:new c(new ua),[`uTan${e}`]:new c(new me),[`uPrev${e}`]:new c(new Oe),[`uSize${e}`]:new c(new me),[`uCanTexel${e}`]:new c(new me)});this.mats={composite:We(Jo(this.views.length),n.composite),down:We(Xo,n.down),up:We(Qo,n.up),rays:We(en,n.rays),flare:We(tn,n.flare),meter:We(an,n.meter),final:We(on,n.final),debug:We(nn,n.debug),dropSrc:We(sn,n.dropSrc)},this.quad=new tt(rn(),this.mats.final),this.quad.frustumCulled=!1,this.quadScene.add(this.quad),this.canopyMat=new mt({glslVersion:vt,vertexShader:Ko,fragmentShader:Yo,uniforms:n.canopy,depthTest:!1,depthWrite:!1,side:2})}setCanopyMesh(t){if(this.canopyProxy&&this.canopyScene.remove(this.canopyProxy),this.canopySource=t,this.canopyProxy=null,!t)return;const a=new tt(t.geometry,this.canopyMat);a.matrixAutoUpdate=!1,a.matrixWorldAutoUpdate=!1,a.frustumCulled=!1,this.canopyProxy=a,this.canopyScene.add(a)}useCockpitDepth(t,a=!0){this.cockpitDepthMode=!0,this.cockpitU.uCockpitDepth.value.set(a?Math.log2(t.far+1):-1,t.near,t.far),this.refreshDefines()}setLut(t){this.u.final.tLut.value=t,this.u.final.uLutSize.value=t.image.width}refreshDefines(){for(const t of[this.canopyMat,...Object.values(this.mats)])this.logDepth?t.defines.LOG_DEPTH="":delete t.defines.LOG_DEPTH,this.cockpitDepthMode?t.defines.COCKPIT_DEPTH="":delete t.defines.COCKPIT_DEPTH,t.needsUpdate=!0}setDepthTexture(t){this.depthTexture=t}initialize(t){this.logDepth=t.capabilities.logarithmicDepthBuffer,this.refreshDefines()}setSize(t,a){this.views[0].size.set(t,a),this.sizeCanopy(this.views[0])}sizeCanopy(t){t.canopyCleared=!1,t.canopyRT.setSize(Math.max(1,Math.round(t.size.x*this.canopyScale)),Math.max(1,Math.round(t.size.y*this.canopyScale)))}setOutputSize(t,a){this.outputSize.set(t,a);const n=Math.max(1,Math.round(t*this.compositeScale)),e=Math.max(1,Math.round(a*this.compositeScale));this.compositeRT.setSize(n,e);for(const u of[...this.down,...this.up])u.dispose();this.down=[],this.up=[];let r=n,i=e;for(let u=0;u<ft;u++)r=Math.max(1,Math.round(r/2)),i=Math.max(1,Math.round(i/2)),this.down.push(Ge(r,i)),u<ft-1&&this.up.push(Ge(r,i));this.raysRT.setSize(Math.round(n/4),Math.round(e/4)),this.flareRT.setSize(Math.round(n/4),Math.round(e/4))}depthK(t){return new q(Math.log2(t.far+1),t.near,t.far)}renderCanopy(t,a){const n=this.frame,e=this.u.canopy;if(!this.sideCanopy&&a!==this.views[0]){if(a.canopyCleared)return;a.canopyCleared=!0,t.setRenderTarget(a.canopyRT),t.setClearColor(0,0),t.clear(!0,!1,!1);return}if(a.canopyCleared=!1,t.setRenderTarget(a.canopyRT),t.setClearColor(0,0),t.clear(!0,!1,!1),!this.on.canopy||!this.canopyProxy||!this.canopySource)return;this.canopySource.updateWorldMatrix(!0,!1),this.canopyProxy.matrixWorld.copy(this.canopySource.matrixWorld),e.tDepth.value=a.depth,e.uDepth.value.copy(this.depthK(a.camera)),this.cockpitU.tCockpit.value=a.cockpitDepth,e.uSize.value.set(a.canopyRT.width,a.canopyRT.height),e.uCamPos.value.setFromMatrixPosition(a.canopyCamera.matrixWorld),e.uSunDir.value.copy(n.sunDirWorld),e.uSunE.value.copy(n.sunE),e.uSkyE.value.copy(n.skyE);const r=n.water;e.uDrops.value.set(r.on?1:0,r.detail,r.gain,0),r.on&&this.dropTex&&this.dropSim&&(e.tDropH.value=this.dropTex.drops,e.tDropFilm.value=this.dropTex.film,e.uDropRegion.value.set(this.dropSim.region,1/this.dropTex.size,1/this.dropTex.size));const i=t.autoClear;t.autoClear=!1,t.render(this.canopyScene,a.canopyCamera),t.autoClear=i}draw(t,a,n){this.quad.material=a,t.setRenderTarget(n),t.render(this.quadScene,this.quadCam)}render(t,a,n,e=1/60){if(!a)return;const r=this.frame,i=this.u,u=this.on,w=t.autoClear,h=t.getRenderTarget(),Z=i.final.uExposure.value,W=this.reflection;if(W&&u.canopy){this.timer?.mark("lens_refl"),W.render(t);const k=i.canopy;k.tRefl.value=W.interior,k.tSky.value=W.sky,k.uToLocal.value.copy(W.toLocal),k.uEye.value.copy(W.eyeLocal);const x=W.head;k.uHeadR.value.set(x?x.radial.radius:0,x?1:0),x&&(k.tHead.value=x.radial.albedo,k.tHeadN.value=x.radial.normal,k.uHeadM.value.copy(x.toHead))}if(this.timer?.mark("lens_views"),this.renderSides&&this.renderSides(e),t.autoClear=!1,u.canopy&&r.water.on&&this.dropTex&&this.dropSim){this.timer?.mark("lens_water");const k=i.canopy.uPhys.value;this.dropTex.render(t,this.dropSim,e,[k.x,k.y]),t.autoClear=!1}this.timer?.mark("lens_canopy");const j=this.views[0];j.src=this.centreSource()??a.texture,j.depth=this.depthTexture,j.cockpitDepth=this.centreCockpitDepth(),this.renderCanopy(t,j),this.timer?.mark("lens_composite");const T=i.composite;if(T.uDepth.value.copy(this.depthK(j.camera)),T.uLens.value.copy(r.lens),T.uLensB.value.copy(r.lensB),T.uProjection.value=r.projection,T.uToggles.value.set(u.canopy?1:0,u.motionBlur?1:0,0,0),u.canopy&&r.water.on&&T.uDropRefract.value>0){const k=i.dropSrc;this.views.forEach((x,K)=>{if(K>0&&!this.sideCanopy)return;const te=Math.max(1,Math.ceil(x.size.x/8)),ue=Math.max(1,Math.ceil(x.size.y/8));(x.dropRT.width!==te||x.dropRT.height!==ue)&&x.dropRT.setSize(te,ue),k.tSrc.value=x.src,k.tDepth.value=x.depth,k.uDepth.value.copy(this.depthK(x.camera)),this.cockpitU.tCockpit.value=x.cockpitDepth,k.uTexel.value.set(1/x.size.x,1/x.size.y),this.draw(t,this.mats.dropSrc,x.dropRT)})}this.views.forEach((k,x)=>{T[`tDropSrc${x}`].value=k.dropRT.texture,T[`tSrc${x}`].value=k.src,T[`tDepth${x}`].value=k.depth,T[`tCanopy${x}`].value=k.canopyRT.texture,T[`tCockpit${x}`].value=k.cockpitDepth,T[`uRot${x}`].value.copy(k.rot),T[`uTan${x}`].value.copy(k.tan),T[`uPrev${x}`].value.copy(k.prev),T[`uSize${x}`].value.copy(k.size),T[`uCanTexel${x}`].value.set(1/k.canopyRT.width,1/k.canopyRT.height)}),this.draw(t,this.mats.composite,this.compositeRT);const y=this.compositeRT.texture;this.timer?.mark("lens_bloom");const R=this.meterRT[this.meterIdx],J=this.meterRT[1-this.meterIdx],B=i.meter;B.tSrc.value=y,B.tPrev.value=R.texture,B.uSunUv.value.copy(r.sunUv),B.uSunR.value=r.sunRadiusUv,B.uAspect.value=this.outputSize.x/this.outputSize.y,B.uExposure.value=Z,B.uAdapt.value.x=r.adaptRate,B.uVisRate.value=r.visRate,B.uFallbackVis.value=r.fallbackVis,B.uClear.value=r.fallbackVis,B.uSunFront.value=r.sunFront,this.draw(t,this.mats.meter,J),this.meterIdx=1-this.meterIdx;const H=J.texture;if(u.bloom){const k=i.down;k.tMeter.value=H,k.uExposure.value=Z;for(let K=0;K<ft;K++){const te=K===0?this.compositeRT:this.down[K-1];k.tSrc.value=te.texture,k.uTexel.value.set(1/te.width,1/te.height),k.uPrefilter.value.x=K===0?1:0,this.draw(t,this.mats.down,this.down[K])}const x=i.up;for(let K=ft-2;K>=0;K--){const te=K===ft-2?this.down[ft-1]:this.up[K+1];x.tCoarse.value=te.texture,x.tFine.value=this.down[K].texture,x.uTexel.value.set(1/te.width,1/te.height),this.draw(t,this.mats.up,this.up[K])}}if(this.timer?.mark("lens_rays"),u.rays&&r.sunFront>0){const k=i.rays;k.tSrc.value=y,k.tMeter.value=H,k.uSunUv.value.copy(r.sunUv),k.uExposure.value=Z,this.draw(t,this.mats.rays,this.raysRT)}else t.setRenderTarget(this.raysRT),t.setClearColor(0,1),t.clear(!0,!1,!1);const M=u.flare&&u.bloom&&r.sunFront>0;if(M){const k=i.flare;k.tSoft.value=this.down[3].texture,k.tSoft2.value=this.down[Math.min(4,this.down.length-1)].texture,k.tSoft3.value=this.down[Math.min(5,this.down.length-1)].texture,this.draw(t,this.mats.flare,this.flareRT)}this.timer?.mark("lens_final");const F=i.final;F.tSrc.value=y,F.tBloom.value=u.bloom?this.up[0].texture:this.raysRT.texture,F.tRays.value=this.raysRT.texture,F.tMeter.value=H,F.tFlare.value=this.flareRT.texture;const ce=F.uFlare.value,d=ce.x;M||(ce.x=0),F.uOutSize.value.copy(this.outputSize),F.uLens.value.copy(r.lens),F.uLensB.value.copy(r.lensB),F.uProjection.value=r.projection,F.uPdUnit.value=Math.min(1,this.outputSize.x/this.outputSize.y),F.uSunView.value.copy(r.sunView),F.uSunE.value.copy(r.sunE),F.uSunPd.value.copy(r.sunPd),F.uSunFront.value=r.sunFront,F.uToggles.value.set(0,0,u.distortion?1:0,u.grade?1:0),F.uFinish.value.w=r.time;const le=F.uGlare.value,re=le.clone();u.bloom||(le.x=0),u.rays||(le.y=0);let ne=this.mats.final;this.debugMode&&(i.debug.tSrc.value=y,i.debug.uMode.value=this.debugMode,ne=this.mats.debug),t.setRenderTarget(this.outputTarget),this.quad.material=ne,t.render(this.quadScene,this.quadCam),le.copy(re),ce.x=d,t.setRenderTarget(h),t.autoClear=w}meterPx=new Float32Array(4);meterReader=null;readMeter(t){this.meterReader??=new zo(t,this.meterPx),this.meterReader.read(this.meterRT[this.meterIdx],0,0,1,1);const a=this.meterPx;return[a[0],a[1],a[2]]}dispose(){for(const t of[this.compositeRT,...this.down,...this.up,this.raysRT,this.flareRT,...this.meterRT,...this.views.map(a=>a.canopyRT),...this.views.map(a=>a.dropRT)])t.dispose();for(const t of[this.canopyMat,...Object.values(this.mats)])t.dispose();this.quad.geometry.dispose()}}const un=5,hn=.3;function dn(){const o=new Ut;return o.setAttribute("position",new Yt([-1,-1,0,3,-1,0,-1,3,0],3)),o}function fn(o){const{atmo:t,cockpitScene:a,cockpitRoot:n,eye:e}=o,r=z=>new bo(z,{type:et,format:jt,generateMipmaps:!0,minFilter:fa,magFilter:Re,depthBuffer:!0});let i=192,u=r(i);const w=r(48),h=new wo,Z=new Aa(hn,30,u);h.add(Z);const W=Z.children;for(const z of W)z.layers.enable(0),z.layers.enable(un);const j=new Ie,T=new Fo({...t.textures,sun:!1,moon:!1,ground:!0,groundAlbedo:new ha(.32,.24,.16)}),Q=new tt(dn(),T);Q.frustumCulled=!1,j.add(Q);const y=new Aa(.1,10,w);j.add(y);const R=new Oe,J=new q,B=new q,H=new Fe;let M=0,F=0,ce=0,d=!0;const le=n.getObjectByName("pilot-head"),re={toHead:new Oe,radial:null};let ne=null;function k(z){if(n.updateWorldMatrix(!0,!1),R.copy(n.matrixWorld).invert(),e.getWorldPosition(B),J.copy(B).applyMatrix4(R),h.position.copy(B),h.quaternion.copy(n.getWorldQuaternion(H)),h.updateMatrixWorld(!0),re.radial=le?.userData.radial??null,le&&re.radial){le.updateWorldMatrix(!0,!1),re.toHead.multiplyMatrices(R,le.matrixWorld).invert();const he=re.radial.centre;re.toHead.premultiply(x.makeTranslation(-he.x,-he.y,-he.z)),ne!==re.radial&&(ne=re.radial,z.initTexture(re.radial.albedo),z.initTexture(re.radial.normal))}}const x=new Oe,K=n.getObjectByName("cockpit:canopy"),te=n.getObjectByName("cockpit:exterior"),ue=new yo({color:723981,roughness:.9,side:xo});function E(z,he){const I=W[he];K&&(K.visible=!1);const ve=te?.material;te&&(te.material=ue);const ie=a.background;a.background=null,z.setRenderTarget(u,he),z.clear(!0,!0,!1),z.render(a,I),a.background=ie,te&&ve&&(te.material=ve)}function Y(z,he){T.worldToECEFMatrix.copy(t.worldToECEF),T.sunDirection.copy(t.sunECEF),z.setRenderTarget(w,he),z.render(j,y.children[he])}const oe={get interior(){return u.texture},sky:w.texture,toLocal:R,eyeLocal:J,get head(){return re.radial?re:null},get size(){return i},set size(z){z=Math.max(16,Math.round(z)),z!==i&&(i=z,u.dispose(),u=r(i),Z.renderTarget=u,d=!0)},every:1,enabled:!0,invalidate(){d=!0},render(z){for(const ge of[Z,y])ge.coordinateSystem!==z.coordinateSystem&&(ge.coordinateSystem=z.coordinateSystem,ge.updateCoordinateSystem());if(k(z),!oe.enabled)return;const he=z.getRenderTarget(),I=z.autoClear,ve=z.getActiveCubeFace(),ie=z.getActiveMipmapLevel(),ee=z.shadowMap,ke=ee.autoUpdate,Me=ee.needsUpdate;ee.autoUpdate=!1,ee.needsUpdate=!1;const xe=new ha,we=z.getClearAlpha();if(z.getClearColor(xe),z.setClearColor(0,0),z.autoClear=!1,d){for(let ge=0;ge<6;ge++)E(z,ge),Y(z,ge);d=!1,ce=0}else ce++%Math.max(1,oe.every)===0&&(E(z,M),M=(M+1)%6),Y(z,F),F=(F+1)%6;ee.autoUpdate=ke,ee.needsUpdate=Me,z.setClearColor(xe,we),z.autoClear=I,z.setRenderTarget(he,ve,ie)},dispose(){u.dispose(),w.dispose(),T.dispose(),ue.dispose()}};return oe}const Ne=4;let Ia=!1;function pn(){Ia||(Ia=!0,Ea.logdepthbuf_pars_fragment+=`
#if defined( USE_LOGARITHMIC_DEPTH_BUFFER ) && !defined( NO_COCKPIT_CULL )
	uniform highp sampler2D tCockpitCull;
#endif`,Ea.logdepthbuf_fragment+=`
#if defined( USE_LOGARITHMIC_DEPTH_BUFFER ) && !defined( NO_COCKPIT_CULL )
	{
		ivec2 cullBlock = ivec2( gl_FragCoord.xy ) / ${Ne};
		ivec2 cullSize = textureSize( tCockpitCull, 0 );
		if ( cullBlock.x < cullSize.x && cullBlock.y < cullSize.y && texelFetch( tCockpitCull, cullBlock, 0 ).r > 0.5 ) {
			#ifdef gl_FragColor
			gl_FragColor = vec4( 0.0 );
			#endif
			return;
		}
	}
#endif`)}const mn=`
	{
		ivec2 cullBlock = ivec2( gl_FragCoord.xy ) / ${Ne};
		ivec2 cullSize = textureSize( tCockpitCull, 0 );
		if ( cullBlock.x < cullSize.x && cullBlock.y < cullSize.y && texelFetch( tCockpitCull, cullBlock, 0 ).r > 0.5 ) {
			gl_FragColor = vec4( 0.0 );
			return;
		}
	}`;function vn(o){const t=o.fullscreenMaterial,a=t.onBeforeCompile.bind(t),n=t.customProgramCacheKey.bind(t);t.onBeforeCompile=(e,r)=>{a(e,r),!e.fragmentShader.includes("tCockpitCull")&&(e.fragmentShader=e.fragmentShader.replace("void main(){",`uniform highp sampler2D tCockpitCull;
void main(){${mn}
`))},t.customProgramCacheKey=()=>`${n()}|cockpitcull`,t.needsUpdate=!0}const gn=`
precision highp float;
uniform sampler2D tSrc;
out vec4 oColor;
void main() {
  ivec2 hi = textureSize(tSrc, 0) - 1, o = ivec2(gl_FragCoord.xy) * ${Ne};
  float m = 1.0;
  for (int y = 0; y < ${Ne}; y++) for (int x = 0; x < ${Ne}; x++) m = min(m, texelFetch(tSrc, min(o + ivec2(x, y), hi), 0).r);
  oColor = vec4(m);
}`,wn=`
precision highp float;
uniform sampler2D tSrc;
out vec4 oColor;
void main() {
  ivec2 hi = textureSize(tSrc, 0) - 1, c = ivec2(gl_FragCoord.xy);
  float m = 1.0;
  for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) m = min(m, texelFetch(tSrc, clamp(c + ivec2(x, y), ivec2(0), hi), 0).r);
  oColor = vec4(m > 0.5 ? 1.0 : 0.0);
}`,Oa="void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }",yn=new Set(["if ( diffuseColor.a == 0.0 ) discard;","if ( clipped ) discard;","if ( diffuseColor.a < alphaTest ) discard;","if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;"]);function Va(o,t,a){if(!t.visible||t.transparent||t.opacity<1||t.alphaTest>0||!t.colorWrite||t.side!==Qa||t.blending!==1||t.alphaHash||t.alphaToCoverage||(t.clippingPlanes?.length??0)>0)return!1;const n=o.properties.get(t).currentProgram;if(!n)return!1;let e=a.get(n);if(e===void 0){const r=o.getContext(),i=r.getAttachedShaders(n.program)?.find(w=>r.getShaderParameter(w,r.SHADER_TYPE)===r.FRAGMENT_SHADER),u=i?r.getShaderSource(i)??"":"";e=!!u&&!u.split(`
`).some(w=>/\bdiscard\b/.test(w.replace(/\/\/.*$/,""))&&!yn.has(w.trim())),a.set(n,e)}return e}const qa=new WeakMap;function xn(o){let t=qa.get(o);if(t)return t;pn();const a=o.getContext(),n=o.capabilities.maxTextures-2,e=new WeakSet,r=new WeakSet,i=y=>{if(e.has(y))return;e.add(y);const R=a.getUniformLocation(y.program,"tCockpitCull");if(!R)return;r.add(y);const J=a.getParameter(a.CURRENT_PROGRAM);a.useProgram(y.program),a.uniform1i(R,n),a.useProgram(J)},u=y=>{const R=y.getUniforms.bind(y);y.getUniforms=()=>{const J=R();return i(y),r.has(y)&&t&&t.bind(t.bound),J}},w=o.info.programs;if(w){for(const R of w)u(R);const y=w.push.bind(w);w.push=(...R)=>{for(const J of R)u(J);return y(...R)}}const h=new Mo(new Uint8Array(4),1,1,jt,Za);h.needsUpdate=!0;const Z=y=>o.properties.get(y).__webglTexture??null,W=y=>{Z(y)||o.initTexture(y),o.state.bindTexture(a.TEXTURE_2D,Z(y),a.TEXTURE0+n),o.state.activeTexture(a.TEXTURE0)};t={empty:h,bound:h,bind:W},qa.set(o,t);const j=t,T=o.shadowMap,Q=T.render.bind(T);return T.render=(...y)=>{if(j.bound===h)return Q(...y);const R=j.bound;W(h);try{return Q(...y)}finally{W(R)}},W(h),t}function bn(o,t){const a=xn(o),{empty:n}=a,e=new WeakMap,r=H=>{a.bound=H,a.bind(H)},i=H=>new rt(1,1,{format:H,type:Za,minFilter:qt,magFilter:qt,depthBuffer:!1,generateMipmaps:!1}),u=Array.from({length:t},()=>({cover:i(Ot),block:i(Ot),mask:i(Ot)}));let w=0;const h=new ko({color:16777215,side:Qa});h.defines={NO_COCKPIT_CULL:""};const Z=new Pa({glslVersion:"300 es",vertexShader:Oa,fragmentShader:gn,uniforms:{tSrc:{value:null}},depthTest:!1,depthWrite:!1}),W=new Pa({glslVersion:"300 es",vertexShader:Oa,fragmentShader:wn,uniforms:{tSrc:{value:null}},depthTest:!1,depthWrite:!1}),j=new tt(new So(2,2),Z);j.frustumCulled=!1;const T=new Ie().add(j),Q=new Kt,y=[],R=new ha;let J=1;const B={enabled:!0,debug:!1,get masks(){return u.map(H=>H.mask)},begin(H,M,F,ce){if(w=Math.min(ce,t-1),!B.enabled||!H||M<Ne||F<Ne){r(n);return}const d=u[w],le=Math.ceil(M/Ne),re=Math.ceil(F/Ne);(d.cover.width!==M||d.cover.height!==F)&&d.cover.setSize(M,F),(d.block.width!==le||d.block.height!==re)&&(d.block.setSize(le,re),d.mask.setSize(le,re));const ne=H.scene;y.length=0;let k=!1;ne.traverseVisible(E=>{const Y=E.material;if(Y){if(Array.isArray(Y)?Y.every(oe=>Va(o,oe,e)):Va(o,Y,e)){E.isMesh&&(k=!0);return}E.visible=!1,y.push(E)}});const x=o.getRenderTarget(),K=o.autoClear,te=ne.overrideMaterial,ue=ne.background;try{if(!k){r(n);return}r(n),o.getClearColor(R),J=o.getClearAlpha(),ne.overrideMaterial=h,ne.background=null,o.setRenderTarget(d.cover),o.setClearColor(0,0),o.clear(!0,!1,!1),o.autoClear=!1;const E=o.shadowMap.enabled;o.shadowMap.enabled=!1;try{o.render(ne,H.camera)}finally{o.shadowMap.enabled=E}o.setClearColor(R,J)}finally{ne.overrideMaterial=te,ne.background=ue,o.autoClear=K;for(const E of y)E.visible=!0}j.material=Z,Z.uniforms.tSrc.value=d.cover.texture,o.setRenderTarget(d.block),o.render(T,Q),j.material=W,W.uniforms.tSrc.value=d.block.texture,o.setRenderTarget(d.mask),o.render(T,Q),o.setRenderTarget(x),r(d.mask.texture)},end(){r(n)},dispose(){for(const H of u)H.cover.dispose(),H.block.dispose(),H.mask.dispose();h.dispose(),Z.dispose(),W.dispose(),j.geometry.dispose()}};return r(n),B}const pt=Math.PI/180,ja=(o,t,a)=>{const n=Math.min(1,Math.max(0,(a-o)/(t-o)));return n*n*(3-2*n)},kn={projection:"brown",k1:Ga.k1,k2:Ga.k2,halfV:34.5,halfH:82.5,profile:1,rectZone:28,edgePower:2,centreScale:.95,centreHalf:50,resolution:.85,sideResolution:.9,worldScale:1,seamBlend:.15,ca:.012,edgeSoft:2,distortion:!0,fovKickMax:.1,canopy:!0,scratches:1.5,smudge:1.5,dust:.6,reflection:1,reflInterior:1,reflSky:1,reflGlint:.2,reflGlintWidth:.05,reflBlur:.8,reflTint:.02,reflRadius:1.2,reflHelmet:1,scratchLobe:.12,scratchReach:32,ito:[.975,.955,.9],droplets:1,dropRefraction:2,evaporate:90,wetness:-1,rain:0,dropDetail:1,overcast:0,bloom:!0,bloomStrength:.25,bloomThreshold:2.5,rays:!0,rayStrength:.8,veil:.45,ghosts:.5,flare:!0,flareGhosts:1,flareStreak:.6,flareThreshold:1.2,starburst:1,halo:1,sunBloom:.6,motionBlur:!0,shutter:180,fps:30,blurScale:1,groundBlur:1.6,maxBlur:.18,cockpitDistance:2.6,grade:!0,exposure:1,adapt:!0,adaptKey:.21,adaptMin:.6,adaptMax:1.6,adaptTime:1.2,meterSky:.3,meterLow:1.2,meterClamp:12,meterClampSun:3,splitTone:1,shadowTint:[-.025,.008,.035],highlightTint:[.035,.012,-.03],lut:1,cockpitExposure:1.7,cockpitNeutral:.75,cockpitGlare:.06,cockpitBloom:.15,shadowLift:.8,vignette:.35,grain:.018},Un={subtle:{reflection:1,reflInterior:2,reflSky:1,reflGlint:.15,reflGlintWidth:.05,reflBlur:1.2,reflTint:.015},medium:{reflection:1.4,reflInterior:3,reflSky:1,reflGlint:.3,reflGlintWidth:.05,reflBlur:.8,reflTint:.03},strong:{reflection:2.2,reflInterior:4.5,reflSky:1,reflGlint:.5,reflGlintWidth:.05,reflBlur:.5,reflTint:.05}};function Lt(o,t){const a=Math.tan(o.halfV*pt)/(1+o.k1+o.k2),n=t*t+1,e=1+o.k1*n+o.k2*n*n,r=1+o.ca+.01;return{s:a,ext:{x:t*e*r,y:e*r}}}function da(o,t,a,n){if(o.projection==="fisheye"){const u=Math.hypot(t[0],t[1]);if(u<1e-9)return n.set(0,0,-1);const w=Xt(o,a).theta(u);return n.set(t[0]/u*Math.sin(w),t[1]/u*Math.sin(w),-Math.cos(w))}const{s:e}=Lt(o,a),r=t[0]**2+t[1]**2,i=1+o.k1*r+o.k2*r*r;return n.set(t[0]*i*e,t[1]*i*e,-1).normalize()}function Sn(o,t,a,n=0){const e=Mn(o,t,a);if(!e||n===0)return e;const r=Math.hypot(e[0],e[1]);if(r<1e-9)return e;const i=Do(r,n,Math.max(a,1))/r;return[e[0]*i,e[1]*i]}function Mn(o,t,a){if(o.projection==="fisheye"){const u=Math.acos(Math.max(-1,Math.min(1,-t.z))),w=Math.hypot(t.x,t.y);if(w<1e-9)return[0,0];const h=Xt(o,a).radius(u);return[t.x/w*h,t.y/w*h]}if(t.z>-.02)return null;const{s:n}=Lt(o,a),e=[t.x/-t.z/n,t.y/-t.z/n],r=Math.hypot(...e);if(r<1e-9)return[0,0];let i=r;for(let u=0;u<20;u++){const w=i*(1+o.k1*i*i+o.k2*i**4)-r,h=1+3*o.k1*i*i+5*o.k2*i**4;i=Math.max(0,i-w/h)}return[e[0]*i/r,e[1]*i/r]}function Ka(o,t,a){const n=t/a,e=new q;if(o.projection==="brown"){const M=Lt(o,n),F=1+Math.max(0,o.fovKickMax),ce=Math.round(a*M.ext.y*F*o.resolution);return[{yaw:0,pitch:!1,tanX:M.ext.x*F*M.s,tanY:M.ext.y*F*M.s,width:Math.round(ce*M.ext.x/M.ext.y),height:ce}]}const r=n<1,i=a/2/Xt(o,n).density(0),u=Math.tan(o.centreHalf*pt),w=Math.atan(u*(1-o.seamBlend-.02));let h=1e-4,Z=0,W=.1;const j=[],T=96,Q=48;for(let M=0;M<=Q;M++)for(let F=0;F<=T;F++){const ce=[(F/T*2-1)*n,M/Q*2-1],d=Ja(Math.hypot(ce[0],ce[1]),Math.max(0,o.fovKickMax),Math.max(n,1));ce[0]*=d,ce[1]*=d,da(o,ce,n,e),r&&e.set(e.y,e.x,e.z),e.z<-.001&&Math.abs(e.x/-e.z)<=u&&(h=Math.max(h,Math.abs(e.y/-e.z)));const le=Math.atan2(Math.abs(e.x),-e.z);le>=w&&(j.push(e.clone().setX(Math.abs(e.x))),Z=Math.max(Z,le))}const y=[{yaw:0,pitch:r,tanX:u,tanY:h*1.02,width:0,height:0}],R=(w+Z)/2;let J=j.length?Math.tan((Z-w)/2)*1.04:.01;new Fe().setFromAxisAngle(new q(0,1,0),R).invert();for(const M of j){const F=M.clone().applyQuaternion(new Fe().setFromAxisAngle(new q(0,1,0),R));F.z<0&&(J=Math.max(J,Math.abs(F.x/-F.z)*1.02),W=Math.max(W,Math.abs(F.y/-F.z)*1.02))}y[0].width=Math.round(2*y[0].tanX*i*o.resolution),y[0].height=Math.round(2*y[0].tanY*i*o.resolution);const B=Math.round(2*J*i*o.resolution*o.sideResolution),H=Math.round(2*W*i*o.resolution*o.sideResolution);if(y.push({yaw:R,pitch:r,tanX:J,tanY:W,width:B,height:H},{yaw:-R,pitch:r,tanX:J,tanY:W,width:B,height:H}),r)for(const M of y)[M.tanX,M.tanY,M.width,M.height]=[M.tanY,M.tanX,M.height,M.width];return y}function Bn(o,t,a,n){const e={...kn,...n.wide?{projection:"fisheye"}:{},...n.params},r=n.sky,i=r.atmosphere,u=n.assets??"/lens",w=!!n.wide,h=new cn(a,w?2:0);h.timer=i.timer,i.composer.addPass(h);const Z=[n.cockpitLayer??null];n.cockpitLayer&&(h.useCockpitDepth(n.cockpitLayer.cockpitCamera,!n.cockpitLayer.standardDepth),h.views[0].canopyCamera=n.cockpitLayer.cockpitCamera,h.centreCockpitDepth=()=>n.cockpitLayer.depthTexture,h.centreSource=()=>n.cockpitLayer.output);const W=[];if(n.wide){for(let f=1;f<h.views.length;f++){const g=h.views[f],m=n.wide.makeSky(g.camera);m.atmosphere.timer.enabled=!1,W.push(m),Co(m.clouds,r.clouds);{const D=m.clouds.effect,U=r.clouds.effect;if("shapeTexture"in U)for(const _ of["localWeatherTexture","shapeTexture","shapeDetailTexture","turbulenceTexture"]){const be=D[_];D[_]=U[_],be&&be!==U[_]&&be.dispose?.()}}{const D=m.clouds.effect,U=r.clouds.effect,_=D.update.bind(D);D.update=(be,Pe,Ce)=>{_(be,Pe,Ce);const ze=m.atmosphere.aerial;ze.shadow&&U.atmosphereShadow&&(ze.shadow=U.atmosphereShadow)}}let v=null;if(n.cockpitLayer){const D=n.cockpitLayer.cockpitCamera.clone();v=new Oo(n.cockpitLayer.cockpitScene,D),v.link=n.cockpitLayer,m.atmosphere.insertBeforeOutput(v),g.canopyCamera=D}Z.push(v),m.atmosphere.composer.addPass(new ln(h,g,()=>v?.depthTexture??null,()=>v?.output??null))}h.renderSides=f=>{for(const g of W)g.render(f)}}let j=null;n.cockpitLayer&&n.cockpitCull!==!1&&(j=bn(o,Z.length),[i,...W.map(f=>f.atmosphere)].forEach((f,g)=>{const m=Z[g],v=f.composer.passes[0],D=f.composer.passes.find(_=>_.name==="EffectPass");if(!m||!v)return;const U=v.render.bind(v);if(v.render=(_,be,Pe,Ce,ze)=>{j.begin(m.enabled&&!m.fading||j.debug?{scene:m.cockpitScene,camera:m.cockpitCamera}:null,be?.width??0,be?.height??0,g);try{U(_,be,Pe,Ce,ze)}finally{D?.enabled||j.end()}},D){vn(D);const _=D.render.bind(D);D.render=(be,Pe,Ce,ze,Ee)=>{try{_(be,Pe,Ce,ze,Ee)}finally{j.end()}}}}));const T=n.cockpit?.canopy.group.getObjectByName("cockpit:canopy");T&&(h.setCanopyMesh(T),T.visible=!1);let Q=null;if(n.cockpit){let f=n.cockpit.root;for(;f.parent;)f=f.parent;const g=n.cockpitLayer?.cockpitScene??f;Q=fn({atmo:i,cockpitScene:g,cockpitRoot:n.cockpit.root,eye:n.cockpitLayer?.cockpitCamera??a}),h.reflection=Q}let y=null;const R=()=>y??=Ao(u).then(f=>{h.u.canopy.tScratch.value=f.scratch,h.u.canopy.tDust.value=f.dust}).catch(f=>console.warn("lens: canopy textures",f)),J=(async()=>{const[f]=await Promise.all([n.lut===null?Promise.resolve(null):Eo(`${u}/${n.lut??"viper.lut.bin"}`).catch(g=>(console.warn("lens: no LUT",g),null)),n.deferCanopy?null:R(),...W.map(g=>g.ready)]);f&&h.setLut(f)})();let B=1,H=1,M=Ka(e,16/9*900,900),F="",ce="";const d=()=>{const f=`${B}x${H}:${JSON.stringify(e)}`;f!==ce&&(ce=f,M=Ka(e,B,H));const g=`${B}x${H}:`+M.map(U=>`${U.width}x${U.height}:${U.tanX.toFixed(4)},${U.tanY.toFixed(4)}`).join(",")+e.projection+`:${e.worldScale}`;if(g===F)return;F=g;const m=o.getPixelRatio(),v=Math.min(1,Math.max(.25,e.worldScale)),D=U=>[Math.max(1,Math.round(U.width*v)),Math.max(1,Math.round(U.height*v))];r.setSize(...D(M[0])),W.forEach((U,_)=>U.setSize(...D(M[_+1]))),Z.forEach((U,_)=>{U&&(U.fullSize=v<1?{width:M[_].width,height:M[_].height}:null)}),v<1&&h.views.forEach((U,_)=>{U.size.set(M[_].width,M[_].height),h.sizeCanopy(U)}),o.setSize(B/m,H/m,!1),h.setOutputSize(B,H)};let le=0;const re=()=>Math.min(Math.max(le,-.3),Math.max(0,e.fovKickMax)),ne=[];let k=0;const x=new q,K=new Fe,te=new q,ue=new Fe,E=new Oe,Y=new Oe,oe=new q,z=new Fe,he=new Fe,I=new q(0,1,0),ve=new q(1,0,0),ie=new q(1,1,1);let ee=null,ke=null,Me=1e9,xe=!0;const we=Uo(),ge=Go(2048);h.dropSim=we,h.dropTex=ge;let Bt=!0,wt=-1;const it=new q,Ve=new q,_e=new q,$e=new q,at=new Fe;let qe=!1;const yt=new Fe,lt=new Fe;let ct=!1;const je=new q;function xt(f){const g=k-f;let m=ne[0];for(let v=ne.length-1;v>=0;v--)if(ne[v].t<=g){m=ne[v];const D=ne[v+1];if(D){const U=(g-m.t)/Math.max(1e-6,D.t-m.t);te.lerpVectors(m.pos,D.pos,U).sub(x),ue.slerpQuaternions(m.q,D.q,U);return}break}if(!m){te.set(0,0,0),ue.copy(K);return}te.copy(m.pos).sub(x),ue.copy(m.q)}function bt(f){const g=h.frame,m=f.delta,v=B/H;g.time=f.time??g.time+m;const D=f.vision;h.u.final.uGLoad.value.set(D?.grey??0,D?.tunnel??0,D?.red??0,D?.drain??0),g.projection=e.projection==="fisheye"?1:0;const U=Xt(e,v);e.projection==="fisheye"?(g.lens.set(U.th1,U.f,U.r0,v),g.lensB.set(U.c,U.n,U.beta,0)):g.lens.set(e.k1,e.k2,Lt(e,v).s,v);const _=re();g.lensB.w=_;const be=M[0],Pe=2*Math.atan(be.tanY)/pt,Ce=be.tanX/be.tanY;for((Math.abs(a.fov-Pe)>1e-6||Math.abs(a.aspect-Ce)>1e-6)&&(a.fov=Pe,a.aspect=Ce,a.updateProjectionMatrix()),a.updateMatrixWorld(),a.getWorldQuaternion(K),x.copy(f.cameraWorld),h.views.forEach((s,b)=>{const V=M[b]??M[0];if(s.tan.set(V.tanX,V.tanY),V.pitch?he.setFromAxisAngle(ve,V.yaw):he.setFromAxisAngle(I,-V.yaw),s.rot.setFromMatrix4(E.makeRotationFromQuaternion(z.copy(he).invert())),b>0){const N=s.camera;N.near=a.near,N.far=a.far,N.fov=2*Math.atan(V.tanY)/pt,N.aspect=V.tanX/V.tanY,N.updateProjectionMatrix(),N.position.set(0,0,0),N.quaternion.copy(K).multiply(he),N.updateMatrixWorld();const G=s.canopyCamera;if(G!==N){const se=Z[0]?.cockpitCamera??a;G.near=se.near,G.far=se.far,G.fov=N.fov,G.aspect=N.aspect,G.updateProjectionMatrix(),G.position.set(0,0,0),G.quaternion.copy(N.quaternion),G.updateMatrixWorld()}}}),xe&&(ne.length=0),(m>0||ne.length===0)&&(k+=m,ne.push({t:k,pos:x.clone(),q:K.clone()}));ne.length>2&&ne[1].t<k-.4;)ne.shift();const ze=1+(e.groundBlur-1)*(1-ja(5,30,f.cameraWorld.y)),Ee=e.shutter/360/e.fps*e.blurScale*ze;if(f.motion){te.copy(f.motion.velocity).multiplyScalar(-Ee);const s=f.motion.angularVelocity.length();ue.copy(K),s>1e-9&&ue.premultiply(z.setFromAxisAngle(oe.copy(f.motion.angularVelocity).divideScalar(s),-s*Ee)),je.copy(f.motion.velocity)}else xt(Ee),Ee>0&&je.copy(te).divideScalar(-Ee);n.flight&&je.copy(n.flight.aircraft.state.vel),h.views.forEach(s=>{s.camera.updateMatrixWorld();const b=z.copy(K).invert().multiply(s.camera.getWorldQuaternion(new Fe));E.compose(te,new Fe().copy(ue).multiply(b),ie),s.prev.copy(s.camera.projectionMatrix).multiply(Y.copy(E).invert()).multiply(s.camera.matrixWorld)}),g.sunDirWorld.copy(i.sunENU);const kt=g.sunView.copy(i.sunENU).transformDirection(a.matrixWorldInverse),He=Sn(e,kt,v,_);if(He&&kt.z<.2){g.sunPd.set(He[0],He[1]),g.sunUv.set(He[0]/v*.5+.5,He[1]*.5+.5);const s=Math.max(Math.abs(He[0])-v,Math.abs(He[1])-1,0);g.sunFront=1-ja(0,.45,s)}else g.sunUv.set(-10,-10),g.sunFront=0;const _t=(e.projection==="fisheye"?U.density(Math.hypot(g.sunPd.x,g.sunPd.y)):Math.atan(Lt(e,v).s))*Ja(Math.hypot(g.sunPd.x,g.sunPd.y),_,Math.max(v,1));if(g.sunRadiusUv=.0065/_t*.5,Me+=m,(!ke||ke.distanceToSquared(f.cameraWorld)>4e4||Me>.5||m<=0)&&(ee=To(i,f.cameraWorld,ee??void 0),ke=(ke??new q).copy(f.cameraWorld),Me=0),h.u.canopy.uEnvExp.value.copy(i.params.whiteBalance).multiplyScalar(i.params.exposure),h.u.canopy.uRefl2.value.w=Math.max(r.inCloud,e.overcast),ee){const s=i.params.exposure,b=i.params.whiteBalance;g.sunE.set(ee.sun.r*b.x,ee.sun.g*b.y,ee.sun.b*b.z).multiplyScalar(s*(1-.97*e.overcast)),g.skyE.set(ee.sky.r*b.x,ee.sky.g*b.y,ee.sky.b*b.z).multiplyScalar(s)}T?.visible&&(T.visible=!1);const wa=f.airspeed??je.length();m>0&&qe&&$e.lerp(oe.copy(je).sub(_e).divideScalar(m),1-Math.exp(-m/.25)),(xe||!qe)&&$e.set(0,0,0),_e.copy(je),qe=!0,at.copy(f.body??K).invert();const l=oe.copy($e).applyQuaternion(at);Ve.copy(it.set(0,-9.81,0)).applyQuaternion(at).sub(l),e.dropDetail!==wt&&(wt=e.dropDetail,we.maxDrops=e.dropDetail>.5?24e3:9e3,ge.setSize(e.dropDetail>.5?2048:1024));const p=h.u.canopy.uShape.value,S=h.u.canopy.uShape2.value;we.setSurface({zf:p.x,zb:p.y,zTop:p.z,base:p.w,topH:S.x,halfW:S.y,n:S.z,flat:S.w});const L={airspeed:wa,force:[Ve.x,Ve.y,Ve.z],rain:(e.wetness>=0?e.wetness:e.rain)*e.droplets,cloud:r.inCloud*e.droplets,evaporate:e.evaporate},$=L.rain<=0&&L.cloud<=.02;xe||Bt&&!$?we.settle(L):m>0&&we.update({...L,dt:m}),Bt=$;const A=g.water;A.on=e.droplets>0&&we.count>0,A.detail=e.dropDetail,A.gain=1,n.cockpit&&ct&&(n.cockpit.root.getWorldQuaternion(lt),g.envRot.setFromMatrix4(E.makeRotationFromQuaternion(z.copy(yt).multiply(lt.invert()))));for(const s of W){const b=s.atmosphere.params,V=i.params;b.day=V.day,b.hour=V.hour,b.exposure=V.exposure,b.toneMap=V.toneMap,b.whiteBalance.copy(V.whiteBalance)}h.views.forEach((s,b)=>{b>0&&W[b-1].update(f.cameraWorld,s.camera,m)});const O=xe||m<=0;if(g.adaptRate=O?1:1-Math.exp(-m/e.adaptTime),g.visRate=O?1:1-Math.exp(-m/.15),g.fallbackVis=1-r.inCloud,xe)for(const s of W)s.cut();xe=!1,C()}function C(){const f=h.u,g=h.on;g.canopy=e.canopy&&!!T,g.bloom=e.bloom,g.flare=e.flare,g.rays=e.rays,g.motionBlur=e.motionBlur,g.distortion=e.distortion,g.grade=e.grade,g.adapt=e.adapt,f.canopy.uGain.value.set(e.scratches,e.smudge*.02,e.dust*.05,e.reflection),f.canopy.uRefl.value.set(e.reflInterior,e.reflSky,e.reflection,e.reflBlur),f.canopy.uRefl2.value.set(e.reflGlint,e.reflGlintWidth,e.reflTint,Math.max(r.inCloud,e.overcast)),f.canopy.uReflP.value.set(e.reflRadius,0),f.canopy.uHelmet.value.w=e.reflHelmet,Q&&(Q.enabled=e.reflection>0),f.canopy.uLobe.value=e.scratchLobe,f.canopy.uReach.value=e.scratchReach*pt,f.canopy.uDrops.value.w=1,f.down.uPrefilter.value.set(1,e.bloomThreshold,e.bloomThreshold*.5,60);const m=f.composite;m.uMaxBlur.value=e.maxBlur,m.uDropRefract.value=e.dropDetail>.5?e.dropRefraction:0,m.uBlend.value=e.seamBlend,m.uIto.value.set(...e.ito),i.deferredExposure?m.uViewExp.value.copy(i.params.whiteBalance).multiplyScalar(i.params.exposure):m.uViewExp.value.set(1,1,1),h.cockpitU.uCockpitDist.value=e.cockpitDistance;const v=f.final;v.uCA.value.set(e.ca,e.edgeSoft),v.uGlare.value.set(e.bloomStrength,e.rayStrength,e.veil,e.ghosts),v.uExposure.value=e.exposure,v.uFlare.value.set(1,e.starburst,e.halo,e.sunBloom),f.flare.uThreshold.value=e.flareThreshold,f.flare.uGain.value.set(e.flareGhosts,0,0,0),v.uStreak.value=e.flareStreak,v.uSplit.value.set(e.splitTone,0,0,0),v.uShadowTint.value.set(...e.shadowTint),v.uHighTint.value.set(...e.highlightTint),v.uFinish.value.set(e.lut,e.vignette,e.grain,h.frame.time),v.uLift.value=e.shadowLift,v.uCockpit.value.set(e.cockpitExposure,e.cockpitNeutral,e.cockpitGlare,e.cockpitGlare*2),f.down.uCockpitBloom.value=e.cockpitBloom,f.meter.uAdapt.value.set(f.meter.uAdapt.value.x,e.adaptKey,e.adapt?e.adaptMin:1,e.adapt?e.adaptMax:1),f.rays.uThreshold.value=e.bloomThreshold*1.2,f.meter.uMeterW.value.set(e.meterSky,e.meterLow,e.meterClamp,e.meterClampSun)}return C(),{params:e,pass:h,ready:J,sideSkies:W,cull:j,loadCanopy:R,water:we,get fovKick(){return re()},set fovKick(f){le=Number.isFinite(f)?f:0},setSize(f,g){B=Math.max(1,Math.round(f)),H=Math.max(1,Math.round(g)),F="",d()},refresh(){F="",d(),C()},update(f){d(),bt(f)},cut(){xe=!0,Q?.invalidate()},reflection:Q,captureReflection(f,g,m){n.cockpit&&(n.cockpit.canopy.capture(o,f,a.getWorldPosition(new q),m),T&&(T.visible=!1),n.cockpit.root.getWorldQuaternion(yt),ct=!0,Q?.invalidate())},setOutputTarget(f){h.outputTarget=f},gui(f){const g=()=>{F="",d(),C()},m=f.addFolder("lens");m.add(e,"distortion").name("CA + softness"),m.add(e,"k1",0,.4,.001).onChange(g),m.add(e,"k2",-.05,.05,5e-4).onChange(g),m.add(e,"halfV",25,50,.1).name("brown half vfov").onChange(g),w&&(m.add(e,"halfH",60,90,.5).name("fisheye half hfov").onChange(g),m.add(e,"centreHalf",35,65,.5).onChange(g),m.add(e,"profile",0,1,.01).name("profile (0 equidistant)").onChange(g),m.add(e,"rectZone",5,45,.5).onChange(g),m.add(e,"edgePower",1.2,4,.05).onChange(g),m.add(e,"centreScale",.7,1.2,.01).onChange(g),m.add(e,"sideResolution",.25,1,.05).onChange(g),m.add(e,"seamBlend",0,.3,.01).onChange(C)),m.add(e,"resolution",.4,1.5,.05).onChange(g),m.add(e,"ca",0,.04,.001).onChange(C),m.add(e,"edgeSoft",0,6,.1).onChange(C);const v=f.addFolder("canopy");v.add(e,"canopy").onChange(C),v.add(e,"scratches",0,5,.01).onChange(C),v.add(e,"scratchLobe",.01,.4,.005).onChange(C),v.add(e,"scratchReach",5,90,1).onChange(C),v.add(e,"smudge",0,5,.01).onChange(C),v.add(e,"dust",0,3,.01).onChange(C),v.add(e,"reflection",0,4,.01).onChange(C),v.add(e,"reflInterior",0,8,.01).onChange(C),v.add(e,"reflSky",0,4,.01).onChange(C),v.add(e,"reflGlint",0,3,.01).onChange(C),v.add(e,"reflGlintWidth",.005,.2,.001).onChange(C),v.add(e,"reflBlur",0,4,.05).onChange(C),v.add(e,"reflTint",0,.2,.002).onChange(C),v.add(e,"reflRadius",.3,20,.05).onChange(C),v.add(e,"droplets",0,1,.01),v.add(e,"wetness",-1,1,.01).name("wetness (-1 auto)"),v.add(e,"rain",0,1,.01),v.add(e,"dropDetail",0,1,1).onChange(C),v.add(e,"dropRefraction",0,3,.01).onChange(C);const D=f.addFolder("glare");D.add(e,"bloom").onChange(C),D.add(e,"bloomStrength",0,1,.005).onChange(C),D.add(e,"bloomThreshold",.2,6,.05).onChange(C),D.add(e,"rays").onChange(C),D.add(e,"rayStrength",0,4,.01).onChange(C),D.add(e,"veil",0,3,.01).onChange(C),D.add(e,"ghosts",0,3,.01).onChange(C),D.add(e,"flare").onChange(C),D.add(e,"flareGhosts",0,3,.01).onChange(C),D.add(e,"flareStreak",0,3,.01).onChange(C),D.add(e,"flareThreshold",1,60,.5).onChange(C),D.add(e,"starburst",0,4,.01).onChange(C),D.add(e,"halo",0,4,.01).onChange(C),D.add(e,"sunBloom",0,4,.01).onChange(C);const U=f.addFolder("motion blur");U.add(e,"motionBlur").onChange(C),U.add(e,"shutter",0,360,1),U.add(e,"blurScale",0,6,.05),U.add(e,"groundBlur",1,4,.05),U.add(e,"maxBlur",0,.4,.005).onChange(C),U.add(e,"cockpitDistance",.5,6,.05).onChange(C);const _=f.addFolder("grade");_.add(e,"grade").onChange(C),_.add(e,"exposure",.2,4,.01).onChange(C),_.add(e,"adapt").onChange(C),_.add(e,"adaptKey",.01,1.5,.005).onChange(C),_.add(e,"adaptMin",.2,2,.01).onChange(C),_.add(e,"adaptMax",.5,4,.01).onChange(C),_.add(e,"meterSky",0,1,.01).onChange(C),_.add(e,"meterLow",0,2,.01).onChange(C),_.add(e,"meterClampSun",.5,12,.1).onChange(C),_.add(e,"splitTone",0,3,.01).onChange(C),_.add(e,"lut",0,1,.01).onChange(C),_.add(e,"cockpitExposure",.5,4,.01).onChange(C),_.add(e,"cockpitNeutral",0,1,.01).onChange(C),_.add(e,"cockpitGlare",0,1,.01).onChange(C),_.add(e,"cockpitBloom",0,1,.01).onChange(C),_.add(e,"shadowLift",0,4,.01).onChange(C),_.add(e,"vignette",0,1.5,.01).onChange(C),_.add(e,"grain",0,.08,.001).onChange(C),f.add(h,"debugMode",{final:0,"sky / world / cockpit":1,composite:2}).name("debug view")},stats(){const[f,g,m]=h.readMeter(o),v=h.frame,D=B/H,U=e.projection==="fisheye"?2*e.halfH:2*Math.atan(da(e,[D,0],D,new q).x/-da(e,[D,0],D,new q).z)/pt;return{lens:`${e.projection} ${U.toFixed(0)}° across; views ${M.map(_=>`${_.width}x${_.height}`).join(" + ")}`,meter:`L ${Math.exp(f).toFixed(3)} adapt x${m.toFixed(2)} sun vis ${g.toFixed(2)}`,wet:`${we.wetness.toFixed(2)} (${we.count} drops, ${we.moving} running, ${we.ms.toFixed(2)} ms)`,sun_pd:v.sunFront>0?`${v.sunPd.x.toFixed(2)},${v.sunPd.y.toFixed(2)}`:"off"}},dispose(){i.composer.removePass(h),h.dispose(),Q?.dispose(),T&&(T.visible=!0)}}}export{Oo as C,En as a,Ln as b,Bn as c,Un as d,xn as i,Lt as l};
