import{b$ as n}from"./three.module-9D8i-8qh.js";function g(){return{uAO:{value:0},uDirectAO:{value:1},uGroundShade:{value:1},uHemi:{value:1},uWet:{value:0}}}function h(e){return e.userData?.look??null}const u=`
if (uWet > 0.0) {
  vec3 wetUp = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
  float wet = uWet * mix(0.35, 1.0, smoothstep(-0.2, 0.7, dot(normal, wetUp)));
  diffuseColor.rgb *= 1.0 - 0.3 * wet;
  roughnessFactor = mix(roughnessFactor, roughnessFactor * 0.45 + 0.1, wet);
}
`,d=`
{
  float ambientOcclusion = clamp(1.0 - uAO * vOcc, 0.0, 1.0);
  vec3 lookUp = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
  // (only what faces the ground: a canted fin or a chine side still sees mostly sky)
  float lookGs = mix(1.0, uGroundShade, pow(clamp(-dot(normal, lookUp), 0.0, 1.0), 1.5));
  reflectedLight.indirectDiffuse *= ambientOcclusion * lookGs;
  #if defined( USE_CLEARCOAT )
    clearcoatSpecularIndirect *= ambientOcclusion * lookGs;
  #endif
  #if defined( USE_SHEEN )
    sheenSpecularIndirect *= ambientOcclusion * lookGs;
  #endif
  #if defined( USE_ENVMAP ) && defined( STANDARD )
    float lookNV = saturate(dot(geometryNormal, geometryViewDir));
    reflectedLight.indirectSpecular *= computeSpecularOcclusion(lookNV, ambientOcclusion, material.roughness) * lookGs;
  #endif
  // a deep cavity rarely sees the sun either, where the shadow map is too coarse to say so
  float lookDirect = mix(1.0, smoothstep(0.05, 0.6, ambientOcclusion), uDirectAO * uAO);
  reflectedLight.directDiffuse *= lookDirect;
  reflectedLight.directSpecular *= lookDirect;
}`;function s(){const e=n.lights_fragment_begin.replace("irradiance += getHemisphereLightIrradiance(","irradiance += uHemi * getHemisphereLightIrradiance("),o=e.indexOf("#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )"),t=e.indexOf("RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );",o);return o<0||t<0?e:e.slice(0,t)+`directLight.color *= mix(1.0, smoothstep(0.0, 0.18, dot(geometryNormal, directLight.direction)), uAO);
		`+e.slice(t)}function f(e,o){Object.assign(e.uniforms,o),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
      attribute float aOcc; varying float vOcc;`).replace("#include <begin_vertex>",`#include <begin_vertex>
      vOcc = aOcc;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
      uniform float uAO, uDirectAO, uGroundShade, uHemi, uWet; varying float vOcc;`).replace("#include <lights_physical_fragment>",u+"#include <lights_physical_fragment>").replace("#include <lights_fragment_begin>",s()).replace("#include <aomap_fragment>",d)}function p(e,o){const i=e.onBeforeCompile,t=e.customProgramCacheKey;return e.onBeforeCompile=function(r,c){i.call(this,r,c),f(r,o)},e.customProgramCacheKey=function(){return`${t.call(this)}+look`},e.userData.look=o,e}function k(e,o={}){const i=e.onBeforeCompile,t=e.customProgramCacheKey,r=o.reflect??1,c=o.body??.3;return e.premultipliedAlpha=!0,e.depthWrite=!0,o.opacity!==void 0&&(e.opacity=o.opacity),e.onBeforeCompile=function(a,l){i.call(this,a,l),a.fragmentShader=a.fragmentShader.replace("#include <opaque_fragment>",`{
        vec3 lookSpec = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
        vec3 lookBody = max(outgoingLight - lookSpec, vec3(0.0));
        float lookA = diffuseColor.a;
        gl_FragColor = vec4(lookBody * (lookA * ${c.toFixed(3)}) + lookSpec * ${r.toFixed(3)}, lookA);
      }`).replace("#include <premultiplied_alpha_fragment>","")},e.customProgramCacheKey=function(){return`${t.call(this)}+glass`},e}export{g as c,k as g,h as l,p as w};
