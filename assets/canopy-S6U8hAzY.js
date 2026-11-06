import{K as S,O as C,ay as k,Y as A,S as W,C as w,V as F,w as P,g as y,M,a as R,r as B,az as D,s as x,t as g}from"./three.module-9D8i-8qh.js";const Z={panel:{width:.78,top:-.17,bottom:-.62,z:-.64,tilt:.16},glareshield:{width:.56,depth:.1,lipY:-.155,lipZ:-.585,height:.075,radius:.04},hud:{z:-.68,baseY:-.165,height:.27,width:.235,postW:.018,postD:.032,lean:.17},indexer:{x:.152,y:-.128,z:-.632,w:.026,h:.06,d:.032},ufc:{y:-.27,z:-.548,w:.1365,h:.1005,tilt:.2},mfd:{x:.19,y:-.302,z:-.636,bezel:.162,screen:.108,tilt:.16,yaw:.14},cpd:{y:-.478,z:-.545,w:.21,h:.3,sw:.152,sh:.203,sy:.022,tilt:.3},front:{misc:{p:[-.307,-.306,-.616],tilt:.16,yaw:.38},eng:{p:[.307,-.31,-.616],tilt:.16,yaw:-.38},twp:{p:[-.372,-.24,-.584],tilt:.2,yaw:.72},rwr:{p:[.372,-.24,-.584],tilt:.2,yaw:-.72},eyebrowL:{p:[-.318,-.152,-.615],tilt:.62,yaw:.45},eyebrowR:{p:[.322,-.16,-.615],tilt:.62,yaw:-.45},auxL:{p:[-.405,-.5,-.656],tilt:.75,yaw:.55},auxR:{p:[.405,-.5,-.656],tilt:.75,yaw:-.55}},console:{top:-.5,inner:.285,outer:.47,front:-.58,back:.45},sill:{y:-.315,inner:.47,outer:.6,front:-.68,back:.75,fasteners:14},rail:{r:.011,x:.462,y:-.33},seat:{pan:-.74,front:-.22,back:.22,width:.42,recline:30*Math.PI/180},eject:{y:-.66,z:-.27,w:.11,h:.05},stick:{x:.405,z:-.03,baseY:-.5},throttle:{x:-.385,z:-.14,baseY:-.5,travel:.12},legs:{hipX:.1,hip:[-.72,.06],knee:[-.45,-.47],ankle:[-.92,-.68],thighR:.085,shinR:.06},canopy:{rx:.62,ry:.55,front:-1.6,back:1.2,y:-.315}},c={zf:-1.55,zb:1.3,zTop:.12,base:Z.sill.y,topH:.72,halfW:.565,n:2.3};function N(l){const{zf:u,zb:r,zTop:s,topH:d,halfW:h}=c,t=l<s?(s-l)/(s-u):(l-s)/(r-s),e=d*Math.pow(Math.max(0,1-Math.pow(t,l<s?1.9:2.2)),.62),i=h*Math.pow(Math.max(0,1-Math.pow(Math.max(0,l<0?-l/-u:l/r),3.2)),.35);return{h:e,w:i}}function I(){const r=[],s=[],d=[],h=[];for(let e=0;e<=90;e++){const i=e/90,a=c.zf+(c.zb-c.zf)*i,{h:n,w:p}=N(a);for(let o=0;o<=48;o++){const v=-Math.PI/2+Math.PI*(o/48),f=Math.sin(v),z=Math.cos(v),T=p*Math.sign(f)*Math.pow(Math.abs(f),2/c.n),b=c.base+n*Math.pow(Math.abs(z),2/c.n);r.push(T,b,a),s.push(o/48,i),d.push(b-c.base)}}for(let e=0;e<90;e++)for(let i=0;i<48;i++){const a=e*49+i,n=a+1,p=a+48+1,o=p+1;h.push(a,p,n,n,p,o)}const t=new x;return t.setAttribute("position",new g(r,3)),t.setAttribute("uv",new g(s,2)),t.setAttribute("edge",new g(d,1)),t.setIndex(h),t.computeVertexNormals(),t}function V(){const u=[],r=[];let h=0;for(const e of[-1,1]){const i=h;for(let a=0;a<=70;a++){const n=-.72+1.45*(a/70),{w:p}=N(n),o=e*p;u.push(o,c.base-.004,n,o,c.base+.035,n,o-e*.012,c.base+.035*.9,n,o-e*.012,c.base-.004,n),h+=4}for(let a=0;a<70;a++)for(let n=0;n<4;n++){const p=i+a*4+n,o=i+a*4+(n+1)%4,v=p+4,f=o+4;e>0?r.push(p,v,o,o,v,f):r.push(p,o,v,o,f,v)}}const t=new x;return t.setAttribute("position",new g(u,3)),t.setIndex(r),t.computeVertexNormals(),t}const m=new S(new Uint8Array([0,0,0,255]),1,1,C);m.needsUpdate=!0;function H(){const l=new k(64,{type:A,generateMipmaps:!0}),u=new W({name:"canopy-glass",transparent:!0,depthWrite:!1,side:y,blending:P,premultipliedAlpha:!0,uniforms:{envMap:{value:l.texture},envIntensity:{value:1},tint:{value:new w(.95,.78,.38)},absorb:{value:.03},edgeBand:{value:.045},edgeAbsorb:{value:.32},scratchMap:{value:m},scratchStrength:{value:0},sunDir:{value:new F(0,1,0)},sunColor:{value:new w(0,0,0)}},vertexShader:`
      attribute float edge;
      varying vec3 vPosW; varying vec3 vNrmW; varying vec2 vUv; varying float vEdge;
      #include <common>
      #include <logdepthbuf_pars_vertex>
      void main() {
        vec4 w = modelMatrix * vec4(position, 1.0);
        vPosW = w.xyz; vNrmW = normalize(mat3(modelMatrix) * normal); vUv = uv; vEdge = edge;
        gl_Position = projectionMatrix * viewMatrix * w;
        #include <logdepthbuf_vertex>
      }`,fragmentShader:`
      uniform samplerCube envMap; uniform float envIntensity;
      uniform vec3 tint; uniform float absorb, edgeBand, edgeAbsorb;
      uniform sampler2D scratchMap; uniform float scratchStrength;
      uniform vec3 sunDir, sunColor;
      varying vec3 vPosW; varying vec3 vNrmW; varying vec2 vUv; varying float vEdge;
      #include <common>
      #include <logdepthbuf_pars_fragment>
      void main() {
        #include <logdepthbuf_fragment>
        vec3 V = normalize(cameraPosition - vPosW);
        vec3 N = normalize(vNrmW);
        if (dot(N, V) < 0.0) N = -N;
        float cosT = clamp(dot(N, V), 0.0, 1.0);
        // thin glass: two interfaces' worth of Fresnel (Schlick, n = 1.585 polycarbonate)
        float F = 0.051 + 0.949 * pow(1.0 - cosT, 5.0);
        F = min(1.0, F * 1.6);
        vec3 R = reflect(-V, N);
        vec3 env = textureCube(envMap, vec3(-R.x, R.yz), 2.5).rgb * envIntensity; // blurred: the thin bubble is slightly wavy
        // sun glint (sharp) - the lens step adds the scratch streaks around it
        float glint = pow(max(dot(R, sunDir), 0.0), 900.0) * 40.0;
        // optical path through the sheet grows at grazing angles and in the bonded edge band
        float edgeT = 1.0 - smoothstep(0.0, edgeBand, vEdge);
        float a = absorb * (1.0 + 1.5 * (1.0 - cosT)) + edgeAbsorb * edgeT;
        vec4 sm = texture2D(scratchMap, vUv) * scratchStrength;
        vec3 col = env * F + sunColor * glint * F + tint * a * 0.18 + vec3(sm.r + sm.g * 0.5) * 0.08;
        float alpha = clamp(F * 0.85 + a + sm.g * 0.15, 0.0, 1.0);
        gl_FragColor = vec4(col, alpha);
      }`}),r=new M(I(),u);r.name="cockpit:canopy",r.renderOrder=20,r.frustumCulled=!1;const s=new M(V(),new R({color:1974306,roughness:.55,side:y}));s.name="canopy-frame",s.castShadow=s.receiveShadow=!0;const d=new B;d.name="canopy",d.add(r,s);const h=new D(.03,5e3,l);return{group:d,material:u,setScratchMap(t,e=1){u.uniforms.scratchMap.value=t??m,u.uniforms.scratchStrength.value=t?e:0},capture(t,e,i,a){const n=e.background;a&&(e.background=a),r.visible=!1,h.position.copy(i),h.update(t,e),r.visible=!0,e.background=n},update(){}}}export{Z as D,c as S,H as c,N as p};
