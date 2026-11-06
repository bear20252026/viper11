import{aA as N,g as F,C as Y,b$ as D,i as J,a as A,K as T,O as $,X as O,q as Q,L as H,p as V}from"./three.module-9D8i-8qh.js";import{p as Z,c as ee,s as I,m as q,P as o,i as te,a as oe}from"./motion-usu7YCPa.js";import{g as ae,w as re,c as se}from"./paint-BjJ-hqG3.js";import{a as ne,b as ie,d as le,f as ce,g as fe,h as ue,s as me}from"./comic-CKsmzLfz.js";import"./skin-EJl6slvg.js";function ve(n){const t=(d,g)=>`skDfgFit( ${d}, ${g} )`,x=d=>d.replace("uniform sampler2D dfgLUT;",`vec2 skDfgFit( const in float roughness, const in float dotNV ) {
  const vec4 c0 = vec4( - 1.0, - 0.0275, - 0.572, 0.022 );
  const vec4 c1 = vec4( 1.0, 0.0425, 1.04, - 0.04 );
  vec4 r = roughness * c0 + c1;
  float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
  return vec2( - 1.04, 1.04 ) * a004 + r.zw;
}`).replace(/texture2D\( dfgLUT, vec2\( ([^,]+), ([^)]+) \) \)\.rg/g,(g,a,s)=>t(a,s));n.fragmentShader=x(n.fragmentShader.replace("#include <lights_physical_pars_fragment>",D.lights_physical_pars_fragment).replace("#include <lights_fragment_begin>",D.lights_fragment_begin))}const pe=1.6,de=.45,ge=.55;let _=null;const f=()=>_??=Object.assign(new T(new Uint8Array(4),1,1,$,O),{needsUpdate:!0});function C(n){const t=new T(n.data,n.w,n.h,$,O);return t.generateMipmaps=!0,t.minFilter=H,t.wrapS=t.wrapT=V,t.anisotropy=4,t.needsUpdate=!0,t}const he=`
  roughnessFactor = mix(roughnessFactor, 0.035, skFx.a);
  {
    float fl = 4.0 * skFx.r * (1.0 - skFx.r);
    float fw = length(fwidth(SK_POS)) * 260.0;
    if (fl > 0.05) {
      vec3 q = floor(SK_POS * 260.0);
      float h = fract(sin(dot(q, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
      float sp = step(0.8, h) * fl * (1.0 - smoothstep(0.5, 1.8, fw));
      roughnessFactor = mix(roughnessFactor, 0.05, sp);
      diffuseColor.rgb *= 1.0 + sp * 0.9;
    }
  }`,xe=`
  if (skFx.b > 0.004) {
    float nv = clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0);
    float t = nv * 1.35 + dot(SK_POS, vec3(0.045, 0.03, 0.06));
    vec3 film = 0.5 + 0.5 * cos(6.28318 * (t + vec3(0.0, 0.33, 0.67)));
    float k = 0.04 + 0.3 * (1.0 - nv) * (1.0 - nv);
    diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 0.6 + film * film * k, skFx.b);
  }`,we=`
  totalEmissiveRadiance += diffuseColor.rgb * skFx.g * uFxGlow;`,k={on:{value:0},glow:{value:0},swap:{value:-1}},Se=`
  {
    float fl = 4.0 * skFx.r * (1.0 - skFx.r);
    if (fl > 0.05) {
      vec3 q = floor(SK_POS * 110.0);
      vec3 h3 = fract(sin(vec3(dot(q, vec3(12.9898, 78.233, 37.719)), dot(q, vec3(39.3468, 11.1351, 83.155)), dot(q, vec3(73.156, 52.235, 9.151)))) * 43758.5453);
      float fw = length(fwidth(SK_POS)) * 110.0;
      // (a third of the cells' flakes stand out of the coat's plane enough to catch a strip)
      normal = normalize(normal + (h3 - 0.5) * 0.42 * fl * step(0.66, h3.x * 0.5 + h3.z * 0.5) * (1.0 - smoothstep(0.35, 1.1, fw)));
    }
    if (skFx.b > 0.004) {
      float nv = clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0);
      // the film's colour in the reflection (a metal's F0), the body staying the paint's own dark: violet face-on,
      // teal, then gold toward the edges, drifting slowly along the jet
      float t = 0.62 - nv * 0.95 + dot(SK_POS, vec3(0.012, 0.008, 0.02));
      vec3 film = mix(vec3(0.5), 0.5 + 0.5 * cos(6.28318 * (t + vec3(0.0, 0.33, 0.67))), 0.7);
      // (a dark pearl is all film, an oil slick's; a coloured one keeps its colour and only shifts round it)
      float lum = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
      float fk = mix(0.62, 0.2, smoothstep(0.03, 0.25, lum));
      diffuseColor.rgb = mix(diffuseColor.rgb, mix(diffuseColor.rgb * 1.2, film * 0.55, fk), skFx.b);
      metalnessFactor = mix(metalnessFactor, 0.85, skFx.b);
    }
  }`,Fe=`
  {
    // a gloss finish (the colour maps' stored roughness low) or a polished livery: under a clear coat
    float cc = max(1.0 - smoothstep(0.12, 0.42, skinRough), skFx.a);
    if (!gl_FrontFacing) cc = 0.0;
    material.clearcoat = max(material.clearcoat, cc);
    material.clearcoatRoughness = mix(material.clearcoatRoughness, 0.0525, cc);
  }`,E=n=>.4+1.6*Math.min(1,Math.max(0,n));function P(n){const t=new T(n.data,n.w,n.h,$,O);return t.colorSpace=Q,t.generateMipmaps=!0,t.minFilter=H,t.wrapS=t.wrapT=V,t.anisotropy=8,t.needsUpdate=!0,t}function Ce(n={}){const t=(n.paint??Z)(n.resolution??1,n.seed??16),x=P(t.top),d=P(t.bottom),g=P(t.side),a={on:{value:0},top:{value:f()},bot:{value:f()},side:{value:f()},glow:{value:E(0)}},s={top:{value:f()},bot:{value:f()},side:{value:f()},fxOn:{value:0},fxTop:{value:f()},fxBot:{value:f()},fxSide:{value:f()}},z=(e,c=!1)=>{if(c){for(const i of["fxTop","fxBot","fxSide"])s[i].value!==_&&s[i].value.dispose();s.fxTop.value=a.top.value,s.fxBot.value=a.bot.value,s.fxSide.value=a.side.value,s.fxOn.value=a.on.value}else for(const i of["top","bot","side"])a[i].value!==_&&a[i].value.dispose();if(!e){a.on.value=0,a.top.value=a.bot.value=a.side.value=f();return}a.top.value=C(e.top),a.bot.value=C(e.bottom),a.side.value=C(e.side),a.on.value=1};z(t.fx);const h=ee();I(h,q(t.motion));const m=ne(1),B=e=>{if(me(m,e),!!e){if(a.on.value)throw new Error("a livery with the comic masks and special materials both");a.top.value=m.top.value,a.bot.value=m.bot.value,a.side.value=m.side.value}};B(t.comic);const u=()=>m.on.value>.5;let v=!1;const l=new N({color:16777215,roughness:1,metalness:0,specularIntensity:.7,sheen:.2,sheenRoughness:.5,sheenColor:new Y(10266290),clearcoat:.3,clearcoatRoughness:.32,side:F}),M={value:0},j=(e,c)=>{l.specularIntensity=e?.specular??.7,l.sheen=e?.sheen??.2,l.clearcoat=c?.clearcoat??(e?.02:.3),l.clearcoatRoughness=c?.roughness??.32,M.value=e?.coat?1:0};j(t.finish,t.coat);const r=e=>e.toFixed(3);l.onBeforeCompile=e=>{e.uniforms.uCoat=M,e.fragmentShader=e.fragmentShader.replace("#include <envmap_physical_pars_fragment>",D.envmap_physical_pars_fragment.replaceAll("envMapColor.rgb * envMapIntensity",`skyFill(envMapColor.rgb) * (envMapIntensity * mix(${pe.toFixed(3)}, 1.0, uShow))`).replace("#ifdef USE_ENVMAP",`uniform float uShow;
        vec3 skyFill(vec3 c) { return mix(vec3(dot(c, vec3(0.2126, 0.7152, 0.0722))), c, mix(${de.toFixed(2)}, 1.0, uShow)); }
        #ifdef USE_ENVMAP`)),e.uniforms.tTop={value:x},e.uniforms.tBot={value:d},e.uniforms.tSide={value:g},e.uniforms.uShow=k.on,e.uniforms.uShowGlow=k.glow,e.uniforms.uSwap=k.swap,e.uniforms.tPTop=s.top,e.uniforms.tPBot=s.bot,e.uniforms.tPSide=s.side,e.uniforms.uPFxOn=s.fxOn,e.uniforms.tPFxTop=s.fxTop,e.uniforms.tPFxBot=s.fxBot,e.uniforms.tPFxSide=s.fxSide,e.uniforms.uFxOn=a.on,e.uniforms.tFxTop=a.top,e.uniforms.tFxBot=a.bot,e.uniforms.tFxSide=a.side,e.uniforms.uFxGlow=a.glow,Object.assign(e.uniforms,ie(m)),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
        attribute vec3 aRest; attribute vec3 aRestN; attribute float aProj;
        varying vec3 vRest; varying vec3 vRestN; varying float vProj;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vRest = aRest; vRestN = aRestN; vProj = aProj;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
        uniform sampler2D tTop; uniform sampler2D tBot; uniform sampler2D tSide;
        varying vec3 vRest; varying vec3 vRestN; varying float vProj;
        float skinRough; uniform float uCoat;
        uniform float uFxOn; uniform sampler2D tFxTop; uniform sampler2D tFxBot; uniform sampler2D tFxSide; uniform float uFxGlow; uniform float uShowGlow; uniform float uSwap;
        ${v?"uniform sampler2D tPTop; uniform sampler2D tPBot; uniform sampler2D tPSide; uniform float uPFxOn; uniform sampler2D tPFxTop; uniform sampler2D tPFxBot; uniform sampler2D tPFxSide;":""}
        float skSwapD = 1.0, skSwapH = 0.0;
        vec4 skTex(vec3 P, vec3 rn, float proj, sampler2D T, sampler2D B, sampler2D S) {
          vec2 uvP = vec2((P.x - ${r(o.x0)}) / ${r(o.x1-o.x0)}, 1.0 - (P.z - ${r(o.z0)}) / ${r(o.z1-o.z0)});
          float yv = clamp((P.y - ${r(o.y0)}) / ${r(o.y1-o.y0)}, 0.002, 0.998);
          vec2 uvL = vec2((P.z - ${r(o.z0)}) / ${r(o.z1-o.z0)}, 0.5 + 0.5 * yv);
          vec2 uvR = vec2((${r(o.z1)} - P.z) / ${r(o.z1-o.z0)}, 0.5 * yv);
          float wT = smoothstep(0.42, 0.75, rn.y), wB = smoothstep(0.42, 0.75, -rn.y), wS = max(0.0, 1.0 - wT - wB);
          float side = rn.x >= 0.0 ? 1.0 : -1.0;
          if (proj > 0.5 && proj < 2.5) { wT = 0.0; wB = 0.0; wS = 1.0; side = proj < 1.5 ? -1.0 : 1.0; }
          vec4 cS = side < 0.0 ? texture2D(S, uvL) : texture2D(S, uvR);
          return texture2D(T, uvP) * wT + texture2D(B, uvP) * wB + cS * wS;
        }
        vec4 skFx;
        #define SK_POS vRest
        ${u()?le({top:"tFxTop",bot:"tFxBot",side:"tFxSide"}):""}`).replace("#include <map_fragment>",`
        ${u()?"float cmFw = length(fwidth(vRest)) / 0.085;":""}
        {
          vec3 rn = normalize(vRestN);
          vec2 uvP = vec2((vRest.x - ${r(o.x0)}) / ${r(o.x1-o.x0)}, 1.0 - (vRest.z - ${r(o.z0)}) / ${r(o.z1-o.z0)});
          float yv = clamp((vRest.y - ${r(o.y0)}) / ${r(o.y1-o.y0)}, 0.002, 0.998);
          vec2 uvL = vec2((vRest.z - ${r(o.z0)}) / ${r(o.z1-o.z0)}, 0.5 + 0.5 * yv);
          vec2 uvR = vec2((${r(o.z1)} - vRest.z) / ${r(o.z1-o.z0)}, 0.5 * yv);
          float wT = smoothstep(0.42, 0.75, rn.y), wB = smoothstep(0.42, 0.75, -rn.y);
          float wS = max(0.0, 1.0 - wT - wB);
          float side = rn.x >= 0.0 ? 1.0 : -1.0;
          if (vProj > 0.5 && vProj < 2.5) { wT = 0.0; wB = 0.0; wS = 1.0; side = vProj < 1.5 ? -1.0 : 1.0; }
          vec4 cS = side < 0.0 ? texture2D(tSide, uvL) : texture2D(tSide, uvR);
          vec4 c = texture2D(tTop, uvP) * wT + texture2D(tBot, uvP) * wB + cS * wS;
          if (vProj > 2.5) c = vec4(${o.plain.map(c=>c.toFixed(4)).join(", ")});
          // the showroom's re-skin: the old livery ahead of the front, the new behind, square cells round it
          ${v?"":"#if 0"}
          if (uSwap >= 0.0 && gl_FrontFacing && vProj < 2.5) {
            vec3 ci = floor(vRest / 0.16), cp = (ci + 0.5) * 0.16;
            float h = fract(sin(dot(ci, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
            skSwapH = fract(h * 17.231);
            float zf = mix(${r(o.z0)} - 1.6, ${r(o.z1)} + 1.6, uSwap);
            skSwapD = zf - (cp.z + (h - 0.5) * 1.8);
            float band = 1.0 - smoothstep(0.8, 1.3, abs(skSwapD));
            vec4 nCell = skTex(cp, rn, vProj, tTop, tBot, tSide);
            vec4 oFrag = skTex(vRest, rn, vProj, tPTop, tPBot, tPSide);
            vec4 oCell = skTex(cp, rn, vProj, tPTop, tPBot, tPSide);
            c = skSwapD > 0.0 ? mix(c, nCell, band) : mix(oFrag, oCell, band);
          }
          ${v?"":"#endif"}
          diffuseColor.rgb *= c.rgb;
          skinRough = c.a;
          if (!gl_FrontFacing) { diffuseColor.rgb = vec3(0.2); skinRough = 0.8; }
          skFx = vec4(0.0);
          if (uFxOn > 0.5 && gl_FrontFacing && vProj < 2.5) {
            vec4 fS = side < 0.0 ? texture2D(tFxSide, uvL) : texture2D(tFxSide, uvR);
            skFx = texture2D(tFxTop, uvP) * wT + texture2D(tFxBot, uvP) * wB + fS * wS;
          }
          ${v?"":"#if 0"}
          if (uSwap >= 0.0 && skSwapD <= 0.0) {
            skFx = vec4(0.0);
            if (uPFxOn > 0.5 && gl_FrontFacing && vProj < 2.5) {
              vec4 fS = side < 0.0 ? texture2D(tPFxSide, uvL) : texture2D(tPFxSide, uvR);
              skFx = texture2D(tPFxTop, uvP) * wT + texture2D(tPFxBot, uvP) * wB + fS * wS;
            }
          }
          ${v?"":"#endif"}
          ${u()?`cmSideK = vProj > 0.5 ? 1.0 : smoothstep(0.15, 0.4, abs(rn.x));
          if (uCmOn > 0.5 && gl_FrontFacing && vProj < 2.5) comicSkin(diffuseColor.rgb, vRest, wT, wB, wS, side, cmFw);`:""}
        }`).replace("#include <roughnessmap_fragment>",`float roughnessFactor = mix(0.25, 0.85, skinRough);
        if (uFxOn > 0.5) { ${he} }`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
        metalnessFactor = max(metalnessFactor, skFx.r);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        if (uFxOn > 0.5) { ${xe} }
        if (uShow > 0.5 && uFxOn > 0.5) { ${Se} }
        ${u()?ce:""}`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        if (uFxOn > 0.5) { ${we.replace("uFxGlow","max(uFxGlow, uShowGlow)")} }
        if (uSwap >= 0.0 && gl_FrontFacing) {
          float zf = mix(${r(o.z0)} - 1.6, ${r(o.z1)} + 1.6, uSwap);
          // the cells that have just flipped glow at the front, a few flash as they resolve; a thin scanline runs ahead
          float edge = step(0.0, skSwapD) * (1.0 - smoothstep(0.0, 0.24, skSwapD));
          float flash = step(0.78, skSwapH) * step(-0.2, skSwapD) * (1.0 - smoothstep(-0.2, 0.75, skSwapD));
          float scan = exp(-pow((vRest.z - zf) / 0.025, 2.0));
          totalEmissiveRadiance += vec3(0.45, 0.8, 1.0) * (edge * 1.3 + flash * 0.9 + scan * 1.6);
        }`).replace("#include <lights_physical_fragment>",`#include <lights_physical_fragment>
        if (uShow > 0.5 || uCoat > 0.5) { ${Fe} }`).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
        // (the light's colour only: the paint's own keeps its saturation, so a red livery stays red in the sun; on the
        // stock grey, a neutral albedo, this is the same as desaturating the lit colour)
        {
          vec3 skA = max(material.diffuseColor, vec3(0.02));
          vec3 skL = reflectedLight.directDiffuse / skA;
          reflectedLight.directDiffuse = mix(vec3(dot(skL, vec3(0.2126, 0.7152, 0.0722))), skL, ${ge.toFixed(2)}) * skA;
        }
        ${u()?fe:""}`).replace("#include <opaque_fragment>",`#include <opaque_fragment>
        ${u()?ue:""}`),te(e,h,{pos:"vRest",nrm:"vRestN",on:"gl_FrontFacing && vProj < 2.5"}),e.skinning&&ve(e)},l.customProgramCacheKey=()=>`f16-skin${oe(h)}${u()?"|comic":""}${v?"|reskin":""}`,l.userData.comic=m,l.shadowSide=J;const w=new A({vertexColors:!0,roughness:1,metalness:1,side:F});w.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
        attribute vec2 aRM; varying vec2 vRM;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vRM = aRM;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
        varying vec2 vRM;`).replace("#include <roughnessmap_fragment>","float roughnessFactor = min(vRM.x, 1.0);").replace("#include <metalnessmap_fragment>","float metalnessFactor = vRM.y;").replace("#include <opaque_fragment>",`if (vRM.x > 1.5) outgoingLight = diffuseColor.rgb * ((vRM.x > 2.5 ? 0.7 : 0.25) + 0.75 * reflectedLight.directDiffuse / max(vec3(1e-4), diffuseColor.rgb));
        #include <opaque_fragment>`)},w.customProgramCacheKey=()=>"f16-parts";const L=new N({color:3813922,roughness:.03,metalness:0,transparent:!0,opacity:.3,depthWrite:!1,iridescence:.3,iridescenceIOR:1.5,iridescenceThicknessRange:[300,420],envMapIntensity:1.5,side:F});let G=0;const b={value:0};Object.defineProperty(b,"value",{get:()=>G,set:e=>{G=e,a.glow.value=E(e)},enumerable:!0});const y=new A({vertexColors:!0,roughness:.22,metalness:0,side:F});y.onBeforeCompile=e=>{e.uniforms.uGlow=b,e.uniforms.uShowGlow=k.glow,e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uGlow; uniform float uShowGlow;`).replace("#include <color_fragment>",`vec3 lensC = vColor.rgb;
        diffuseColor.rgb *= mix(vec3(0.42), lensC, 0.55) * 0.9;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += lensC * max(uGlow, uShowGlow) * 6.0;`)},y.customProgramCacheKey=()=>"f16-lights",ae(L,{opacity:.62});const U=se();for(const e of[l,w])re(e,U);const K=()=>{v||(v=!0,l.defines={...l.defines,NO_COCKPIT_CULL:""},l.needsUpdate=!0)};return{skin:l,parts:w,glass:L,lights:y,lightGlow:b,maps:t,look:U,repaint:(e,c={})=>{c.keep&&K();const i=e(n.resolution??1,n.seed??16);for(const[p,X,S]of[["top",x,"top"],["bottom",d,"bot"],["side",g,"side"]]){const R=i[p];if(R.w!==t[p].w||R.h!==t[p].h)throw new Error("repaint: a different resolution");c.keep&&(s[S].value===_&&(s[S].value=P({data:new Uint8Array(t[p].data.length),w:t[p].w,h:t[p].h})),s[S].value.image.data.set(t[p].data),s[S].value.needsUpdate=!0),t[p].data.set(R.data),X.needsUpdate=!0}t.fx=i.fx,z(i.fx,!!c.keep),t.motion=i.motion,I(h,q(i.motion))&&(l.needsUpdate=!0),t.coat=i.coat,t.finish=i.finish,j(i.finish,i.coat);const W=u();t.comic=i.comic,B(i.comic),u()!==W&&(l.needsUpdate=!0)},motion:h,comic:m,showroom:K}}export{he as F,k as S,xe as a,we as b,Ce as c,E as f};
