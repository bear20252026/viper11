import{U as l,W as _e,L as Ta,X as Ce,d as Y,q as pe,bc as Ar,bN as va,bO as Sa,F as vn,_ as Ie,bP as nr,bQ as ui,aK as Sn,bi as ar,aE as Li,Z as Fr,ac as Ea,M as En,C as sr,i as Ot,g as Lt,S as xt,j as Ra,bR as At,bS as di,f as xa,aR as st,a3 as Rn,bT as Aa,s as xn,z as Pi,V as f,k as H,aC as Ia,aW as or,ai as Ui,aj as Ir,b5 as Na,ah as qe,P as ya,e as An,Y as me,R as In,c as li,a1 as ba,bU as Gi,a0 as Pt,O as Nn,ae as vt,bV as wa,bW as Ca,D as Da}from"./three.module-9D8i-8qh.js";var Ma=(()=>{const t=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),r=new xn;return r.setAttribute("position",new Pi(t,3)),r.setAttribute("uv",new Pi(e,2)),r})(),ie=class Br{static get fullscreenGeometry(){return Ma}constructor(e="Pass",r=new Fr,i=new Ea){this.name=e,this.renderer=null,this.scene=r,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const r=this.fullscreenMaterial;r!==null&&(r.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let r=this.screen;r!==null?r.material=e:(r=new En(Br.fullscreenGeometry,e),r.frustumCulled=!1,this.scene===null&&(this.scene=new Fr),this.scene.add(r),this.screen=r)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,r=nr){}render(e,r,i,n,a){throw new Error("Render method not implemented!")}setSize(e,r){}initialize(e,r,i){}dispose(){for(const e of Object.keys(this)){const r=this[e];(r instanceof _e||r instanceof st||r instanceof Rn||r instanceof Br)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},Oa=class extends ie{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(t,e,r,i,n){const a=t.state.buffers.stencil;a.setLocked(!1),a.setTest(!1)}},La=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,mi="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",Pa=class extends xt{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new l(null),depthBuffer:new l(null),channelWeights:new l(null),opacity:new l(1)},blending:At,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:La,vertexShader:mi}),this.depthFunc=Aa}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(t){const e=t!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=t}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(t){const e=t!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=t}set depthPacking(t){this.defines.DEPTH_PACKING=t.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(t){this.colorSpaceConversion!==t&&(t?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(t){t!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=t):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(t){this.uniforms.inputBuffer.value=t}getOpacity(t){return this.uniforms.opacity.value}setOpacity(t){this.uniforms.opacity.value=t}},yn=class extends ie{constructor(t,e=!0){super("CopyPass"),this.fullscreenMaterial=new Pa,this.needsSwap=!1,this.renderTarget=t,t===void 0&&(this.renderTarget=new _e(1,1,{minFilter:Ie,magFilter:Ie,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(t){this.autoResize=t}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(t){this.autoResize=t}render(t,e,r,i,n){this.fullscreenMaterial.inputBuffer=e.texture,t.setRenderTarget(this.renderToScreen?null:this.renderTarget),t.render(this.scene,this.camera)}setSize(t,e){this.autoResize&&this.renderTarget.setSize(t,e)}initialize(t,e,r){r!==void 0&&(this.renderTarget.texture.type=r,r!==Ce?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":t!==null&&t.outputColorSpace===pe&&(this.renderTarget.texture.colorSpace=pe))}},Hi=new sr,bn=class extends ie{constructor(t=!0,e=!0,r=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=t,this.depth=e,this.stencil=r,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(t,e,r){this.color=t,this.depth=e,this.stencil=r}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(t){this.overrideClearColor=t}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(t){this.overrideClearAlpha=t}render(t,e,r,i,n){const a=this.overrideClearColor,s=this.overrideClearAlpha,o=t.getClearAlpha(),c=a!==null,u=s>=0;c?(t.getClearColor(Hi),t.setClearColor(a,u?s:o)):u&&t.setClearAlpha(s),t.setRenderTarget(this.renderToScreen?null:e),t.clear(this.color,this.depth,this.stencil),c?t.setClearColor(Hi,o):u&&t.setClearAlpha(o)}},Ua=class extends ie{constructor(t,e){super("MaskPass",t,e),this.needsSwap=!1,this.clearPass=new bn(!1,!1,!0),this.inverse=!1}set mainScene(t){this.scene=t}set mainCamera(t){this.camera=t}get inverted(){return this.inverse}set inverted(t){this.inverse=t}get clear(){return this.clearPass.enabled}set clear(t){this.clearPass.enabled=t}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(t){this.inverted=t}render(t,e,r,i,n){const a=t.getContext(),s=t.state.buffers,o=this.scene,c=this.camera,u=this.clearPass,d=this.inverted?0:1,h=1-d;s.color.setMask(!1),s.depth.setMask(!1),s.color.setLocked(!0),s.depth.setLocked(!0),s.stencil.setTest(!0),s.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),s.stencil.setFunc(a.ALWAYS,d,4294967295),s.stencil.setClear(h),s.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?u.render(t,null):(u.render(t,e),u.render(t,r))),this.renderToScreen?(t.setRenderTarget(null),t.render(o,c)):(t.setRenderTarget(e),t.render(o,c),t.setRenderTarget(r),t.render(o,c)),s.color.setLocked(!1),s.depth.setLocked(!1),s.stencil.setLocked(!1),s.stencil.setFunc(a.EQUAL,1,4294967295),s.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),s.stencil.setLocked(!0)}};function Ga(t,e){const r=t.getContext();if(e<=0||typeof r.renderbufferStorageMultisample!="function")return 0;const i=r.getParameter(r.MAX_SAMPLES),n=Math.min(e,i);if(n<=0)return 0;const a=r.getParameter(r.RENDERBUFFER_BINDING),s=r.createRenderbuffer();try{return r.bindRenderbuffer(r.RENDERBUFFER,s),r.renderbufferStorageMultisample(r.RENDERBUFFER,n,r.RGBA8,1,1),n}catch{return 0}finally{r.bindRenderbuffer(r.RENDERBUFFER,a),r.deleteRenderbuffer(s)}}var Nr=1/1e3,Ha=1e3,Fa=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(t){typeof document<"u"&&document.hidden!==void 0&&(t?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=t)}get delta(){return this._delta*Nr}get fixedDelta(){return this._fixedDelta*Nr}set fixedDelta(t){this._fixedDelta=t*Ha}get elapsed(){return this._elapsed*Nr}update(t){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(t!==void 0?t:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(t){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},Vu=class{constructor(t=null,{depthBuffer:e=!0,stencilBuffer:r=!1,multisampling:i=0,frameBufferType:n=Ce}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,r,n,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new yn,this.depthRenderTarget=null,this.passes=[],this.timer=new Fa,this.autoRenderToScreen=!0,this.setRenderer(t)}get stableDepthTexture(){return this.depthRenderTarget===null?null:this.depthRenderTarget.depthTexture}get multisampling(){return this.inputBuffer.samples}set multisampling(t){const e=this.renderer===null?t:Ga(this.renderer,t);this.multisampling!==e&&(this.inputBuffer.samples=e,this.outputBuffer.samples=e,this.inputBuffer.dispose(),this.outputBuffer.dispose())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(t){if(this.renderer=t,t!==null){const e=t.getSize(new Y),r=t.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===Ce&&t.outputColorSpace===pe&&(this.inputBuffer.texture.colorSpace=pe,this.outputBuffer.texture.colorSpace=pe,this.inputBuffer.dispose(),this.outputBuffer.dispose());const n=this.multisampling;this.multisampling=n,t.autoClear=!1,this.setSize(e.width,e.height);for(const a of this.passes)a.initialize(t,r,i)}}replaceRenderer(t,e=!0){const r=this.renderer,i=r.domElement.parentNode;return this.setRenderer(t),e&&i!==null&&(i.removeChild(r.domElement),i.appendChild(t.domElement)),r}createDepthTexture(){const t=new Ar;t.name="EffectComposer.InputDepth",this.inputBuffer.stencilBuffer?(t.format=va,t.type=Sa):t.type=vn;const e=new Ar;e.format=t.format,e.type=t.type,e.name="EffectComposer.OutputDepth";const r=new Ar;r.format=t.format,r.type=t.type,r.name="EffectComposer.StableDepth",this.inputBuffer.depthTexture=t,this.outputBuffer.depthTexture=e,this.inputBuffer.dispose(),this.outputBuffer.dispose();const{width:i,height:n}=this.inputBuffer;this.depthRenderTarget=new _e(i,n,{depthBuffer:!0,stencilBuffer:this.inputBuffer.stencilBuffer,depthTexture:r})}blitDepthBuffer(t){const e=this.renderer,r=this.depthRenderTarget,i=e.properties,n=e.getContext();e.setRenderTarget(r);const a=i.get(t).__webglFramebuffer,s=i.get(r).__webglFramebuffer,o=t.stencilBuffer?n.DEPTH_BUFFER_BIT|n.STENCIL_BUFFER_BIT:n.DEPTH_BUFFER_BIT;n.bindFramebuffer(n.READ_FRAMEBUFFER,a),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,s),n.blitFramebuffer(0,0,t.width,t.height,0,0,r.width,r.height,o,n.NEAREST),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),e.setRenderTarget(null)}deleteDepthTexture(){const t=this.stableDepthTexture;for(const e of this.passes)e.getDepthTexture()===t&&e.setDepthTexture(null);this.depthRenderTarget!==null&&(this.depthRenderTarget.dispose(),this.depthRenderTarget=null),this.inputBuffer.depthTexture!==null&&(this.inputBuffer.depthTexture.dispose(),this.inputBuffer.depthTexture=null),this.outputBuffer.depthTexture!==null&&(this.outputBuffer.depthTexture.dispose(),this.outputBuffer.depthTexture=null)}createBuffer(t,e,r,i){const n=this.renderer,a=n===null?new Y:n.getDrawingBufferSize(new Y),s=new _e(a.width,a.height,{minFilter:Ie,magFilter:Ie,samples:i,stencilBuffer:e,depthBuffer:t,type:r});return r===Ce&&n!==null&&n.outputColorSpace===pe&&(s.texture.colorSpace=pe),s.texture.name="EffectComposer.Buffer",s.texture.generateMipmaps=!1,s}setMainScene(t){for(const e of this.passes)e.mainScene=t}setMainCamera(t){for(const e of this.passes)e.mainCamera=t}addPass(t,e){const r=this.passes,i=this.renderer,n=i.getDrawingBufferSize(new Y),a=i.getContext().getContextAttributes().alpha,s=this.inputBuffer.texture.type;if(t.renderer=i,t.setSize(n.width,n.height),t.initialize(i,a,s),this.autoRenderToScreen&&(r.length>0&&(r[r.length-1].renderToScreen=!1),t.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?r.splice(e,0,t):r.push(t),this.autoRenderToScreen&&(r[r.length-1].renderToScreen=!0),t.needsDepthTexture||this.depthRenderTarget!==null)if(this.depthRenderTarget===null){this.createDepthTexture();for(const o of r)o.setDepthTexture(this.stableDepthTexture)}else t.setDepthTexture(this.stableDepthTexture)}removePass(t){const e=this.passes,r=e.indexOf(t);if(r!==-1&&e.splice(r,1).length>0){const a=this.stableDepthTexture;if(a!==null){const s=(c,u)=>c||u.needsDepthTexture;e.reduce(s,!1)||(t.getDepthTexture()===a&&t.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&r===e.length&&(t.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const t=this.passes;this.deleteDepthTexture(),t.length>0&&(this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!1),this.passes=[])}render(t){const e=this.renderer,r=this.copyPass;let i=this.inputBuffer,n=this.outputBuffer,a,s=!1;t===void 0&&(this.timer.update(),t=this.timer.getDelta());for(const o of this.passes)if(o.enabled){if(o.render(e,i,n,t,s),o.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(i),o.needsSwap){if(s){r.renderToScreen=o.renderToScreen;const c=e.getContext(),u=e.state.buffers.stencil;u.setFunc(c.NOTEQUAL,1,4294967295),r.render(e,i,n,t,s),u.setFunc(c.EQUAL,1,4294967295)}a=i,i=n,n=a}o instanceof Ua?s=!0:o instanceof Oa&&(s=!1)}}setSize(t,e,r){const i=this.renderer,n=i.getSize(new Y);(t===void 0||e===void 0)&&(t=n.width,e=n.height),(n.width!==t||n.height!==e)&&i.setSize(t,e,r);const a=i.getDrawingBufferSize(new Y);this.inputBuffer.setSize(a.width,a.height),this.outputBuffer.setSize(a.width,a.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(a.width,a.height);for(const s of this.passes)s.setSize(a.width,a.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const t of this.passes)t.dispose();this.deleteDepthTexture(),this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.copyPass.dispose(),this.timer.dispose(),this.passes=[],ie.fullscreenGeometry.dispose()}},xe={NONE:0,DEPTH:1,CONVOLUTION:2},A={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},Ba=class{constructor(){this.shaderParts=new Map([[A.FRAGMENT_HEAD,null],[A.FRAGMENT_MAIN_UV,null],[A.FRAGMENT_MAIN_IMAGE,null],[A.VERTEX_HEAD,null],[A.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=xe.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Sn}},yr=!1,Fi=class{constructor(t=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(t),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let r;if(e.material.flatShading)switch(e.material.side){case Lt:r=this.materialsFlatShadedDoubleSide;break;case Ot:r=this.materialsFlatShadedBackSide;break;default:r=this.materialsFlatShaded;break}else switch(e.material.side){case Lt:r=this.materialsDoubleSide;break;case Ot:r=this.materialsBackSide;break;default:r=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=r[2]:e.isInstancedMesh?e.material=r[1]:e.material=r[0],++this.meshCount}}}cloneMaterial(t){if(!(t instanceof xt))return t.clone();const e=t.uniforms,r=new Map;for(const n in e){const a=e[n].value;a.isRenderTargetTexture&&(e[n].value=null,r.set(n,a))}const i=t.clone();for(const n of r)e[n[0]].value=n[1],i.uniforms[n[0]].value=n[1];return i}setMaterial(t){if(this.disposeMaterials(),this.material=t,t!==null){const e=this.materials=[this.cloneMaterial(t),this.cloneMaterial(t),this.cloneMaterial(t)];for(const r of e)r.uniforms=Object.assign({},t.uniforms),r.side=Ra;e[2].skinning=!0,this.materialsBackSide=e.map(r=>{const i=this.cloneMaterial(r);return i.uniforms=Object.assign({},t.uniforms),i.side=Ot,i}),this.materialsDoubleSide=e.map(r=>{const i=this.cloneMaterial(r);return i.uniforms=Object.assign({},t.uniforms),i.side=Lt,i}),this.materialsFlatShaded=e.map(r=>{const i=this.cloneMaterial(r);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(r=>{const i=this.cloneMaterial(r);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i.side=Ot,i}),this.materialsFlatShadedDoubleSide=e.map(r=>{const i=this.cloneMaterial(r);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i.side=Lt,i})}}render(t,e,r){const i=t.shadowMap.enabled;if(t.shadowMap.enabled=!1,yr){const n=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),t.render(e,r);for(const a of n)a[0].material=a[1];this.meshCount!==n.size&&n.clear()}else{const n=e.overrideMaterial;e.overrideMaterial=this.material,t.render(e,r),e.overrideMaterial=n}t.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){const t=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of t)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return yr}static set workaroundEnabled(t){yr=t}},Ee=-1,br=class extends ui{constructor(t=null,e=Ee,r=Ee,i=1){super(),t!==null&&this.addEventListener("change",()=>t.setSize(this.baseSize.width,this.baseSize.height)),this.baseSize=new Y(1,1),this.preferredSize=new Y(e,r),this.target=this.preferredSize,this.s=i,this.effectiveSize=new Y,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const t=this.baseSize,e=this.preferredSize,r=this.effectiveSize,i=this.scale;e.width!==Ee?r.width=e.width:e.height!==Ee?r.width=Math.round(e.height*(t.width/Math.max(t.height,1))):r.width=Math.round(t.width*i),e.height!==Ee?r.height=e.height:e.width!==Ee?r.height=Math.round(e.width/Math.max(t.width/Math.max(t.height,1),1)):r.height=Math.round(t.height*i)}get width(){return this.effectiveSize.width}set width(t){this.preferredWidth=t}get height(){return this.effectiveSize.height}set height(t){this.preferredHeight=t}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(t){this.s!==t&&(this.s=t,this.preferredSize.setScalar(Ee),this.dispatchEvent({type:"change"}))}getScale(){return this.scale}setScale(t){this.scale=t}get baseWidth(){return this.baseSize.width}set baseWidth(t){this.baseSize.width!==t&&(this.baseSize.width=t,this.dispatchEvent({type:"change"}))}getBaseWidth(){return this.baseWidth}setBaseWidth(t){this.baseWidth=t}get baseHeight(){return this.baseSize.height}set baseHeight(t){this.baseSize.height!==t&&(this.baseSize.height=t,this.dispatchEvent({type:"change"}))}getBaseHeight(){return this.baseHeight}setBaseHeight(t){this.baseHeight=t}setBaseSize(t,e){(this.baseSize.width!==t||this.baseSize.height!==e)&&(this.baseSize.set(t,e),this.dispatchEvent({type:"change"}))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(t){this.preferredSize.width!==t&&(this.preferredSize.width=t,this.dispatchEvent({type:"change"}))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(t){this.preferredWidth=t}get preferredHeight(){return this.preferredSize.height}set preferredHeight(t){this.preferredSize.height!==t&&(this.preferredSize.height=t,this.dispatchEvent({type:"change"}))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(t){this.preferredHeight=t}setPreferredSize(t,e){(this.preferredSize.width!==t||this.preferredSize.height!==e)&&(this.preferredSize.set(t,e),this.dispatchEvent({type:"change"}))}copy(t){this.s=t.scale,this.baseSize.set(t.baseWidth,t.baseHeight),this.preferredSize.set(t.preferredWidth,t.preferredHeight),this.dispatchEvent({type:"change"})}static get AUTO_SIZE(){return Ee}},S={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},za="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ka="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",Wa="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Va="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Xa="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ya="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$a="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ja="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",qa="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ka="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Za="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Qa="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ja="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",es="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ts="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",rs="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",is="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ns="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",as="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ss="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",os="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",cs="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",us="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",ds="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ls="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ms="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",hs="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",fs="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ps="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",gs="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",_s="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ts="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",vs=new Map([[S.ADD,za],[S.ALPHA,ka],[S.AVERAGE,Wa],[S.COLOR,Va],[S.COLOR_BURN,Xa],[S.COLOR_DODGE,Ya],[S.DARKEN,$a],[S.DIFFERENCE,ja],[S.DIVIDE,qa],[S.DST,null],[S.EXCLUSION,Ka],[S.HARD_LIGHT,Za],[S.HARD_MIX,Qa],[S.HUE,Ja],[S.INVERT,es],[S.INVERT_RGB,ts],[S.LIGHTEN,rs],[S.LINEAR_BURN,is],[S.LINEAR_DODGE,ns],[S.LINEAR_LIGHT,as],[S.LUMINOSITY,ss],[S.MULTIPLY,os],[S.NEGATION,cs],[S.NORMAL,us],[S.OVERLAY,ds],[S.PIN_LIGHT,ls],[S.REFLECT,ms],[S.SATURATION,hs],[S.SCREEN,fs],[S.SOFT_LIGHT,ps],[S.SRC,gs],[S.SUBTRACT,_s],[S.VIVID_LIGHT,Ts]]),Ss=class extends ui{constructor(t,e=1){super(),this._blendFunction=t,this.opacity=new l(e)}getOpacity(){return this.opacity.value}setOpacity(t){this.opacity.value=t}get blendFunction(){return this._blendFunction}set blendFunction(t){this._blendFunction=t,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(t){this.blendFunction=t}getShaderCode(){return vs.get(this.blendFunction)}},wn=class extends ui{constructor(t,e,{attributes:r=xe.NONE,blendFunction:i=S.NORMAL,defines:n=new Map,uniforms:a=new Map,extensions:s=null,vertexShader:o=null}={}){super(),this.name=t,this.renderer=null,this.attributes=r,this.fragmentShader=e,this.vertexShader=o,this.defines=n,this.uniforms=a,this.extensions=s,this.blendMode=new Ss(i),this.blendMode.addEventListener("change",c=>this.setChanged()),this._inputColorSpace=Sn,this._outputColorSpace=ar}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(t){this._inputColorSpace=t,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t,this.setChanged()}set mainScene(t){}set mainCamera(t){}getName(){return this.name}setRenderer(t){this.renderer=t}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(t){this.attributes=t,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(t){this.fragmentShader=t,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(t){this.vertexShader=t,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(t,e=nr){}update(t,e,r){}setSize(t,e){}initialize(t,e,r){}dispose(){for(const t of Object.keys(this)){const e=this[t];(e instanceof _e||e instanceof st||e instanceof Rn||e instanceof ie)&&this[t].dispose()}}},Es=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`,Rs=class extends xt{constructor(t=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:di.replace(/\D+/g,"")},uniforms:{inputBuffer:new l(null),threshold:new l(0),smoothing:new l(1),range:new l(null)},blending:At,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Es,vertexShader:mi}),this.colorOutput=t,this.luminanceRange=e}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.uniforms.inputBuffer.value=t}get threshold(){return this.uniforms.threshold.value}set threshold(t){this.smoothing>0||t>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=t}getThreshold(){return this.threshold}setThreshold(t){this.threshold=t}get smoothing(){return this.uniforms.smoothing.value}set smoothing(t){this.threshold>0||t>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=t}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(t){this.smoothing=t}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(t){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(t){t?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(t){return this.colorOutput}setColorOutputEnabled(t){this.colorOutput=t}get useRange(){return this.luminanceRange!==null}set useRange(t){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(t){t!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=t,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(t){this.luminanceRange=t}},xs=class extends ie{constructor({renderTarget:t,luminanceRange:e,colorOutput:r,resolutionScale:i=1,width:n=br.AUTO_SIZE,height:a=br.AUTO_SIZE,resolutionX:s=n,resolutionY:o=a}={}){super("LuminancePass"),this.fullscreenMaterial=new Rs(r,e),this.needsSwap=!1,this.renderTarget=t,this.renderTarget===void 0&&(this.renderTarget=new _e(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const c=this.resolution=new br(this,s,o,i);c.addEventListener("change",u=>this.setSize(c.baseWidth,c.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(t,e,r,i,n){const a=this.fullscreenMaterial;a.inputBuffer=e.texture,t.setRenderTarget(this.renderToScreen?null:this.renderTarget),t.render(this.scene,this.camera)}setSize(t,e){const r=this.resolution;r.setBaseSize(t,e),this.renderTarget.setSize(r.width,r.height)}initialize(t,e,r){r!==void 0&&r!==Ce&&(this.renderTarget.texture.type=r,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},Xu=class extends ie{constructor(t,e="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=t,this.input=e}setInput(t){this.input=t}render(t,e,r,i,n){const a=this.fullscreenMaterial.uniforms;e!==null&&a!==void 0&&a[this.input]!==void 0&&(a[this.input].value=e.texture),t.setRenderTarget(this.renderToScreen?null:r),t.render(this.scene,this.camera)}initialize(t,e,r){r!==void 0&&r!==Ce&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},Yu=class extends ie{constructor(t,e,r=null){super("RenderPass",t,e),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new bn,this.overrideMaterialManager=r===null?null:new Fi(r),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(t){this.scene=t}set mainCamera(t){this.camera=t}get renderToScreen(){return super.renderToScreen}set renderToScreen(t){super.renderToScreen=t,this.clearPass.renderToScreen=t}get overrideMaterial(){const t=this.overrideMaterialManager;return t!==null?t.material:null}set overrideMaterial(t){const e=this.overrideMaterialManager;t!==null?e!==null?e.setMaterial(t):this.overrideMaterialManager=new Fi(t):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(t){this.overrideMaterial=t}get clear(){return this.clearPass.enabled}set clear(t){this.clearPass.enabled=t}getSelection(){return this.selection}setSelection(t){this.selection=t}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(t){this.ignoreBackground=t}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(t){this.skipShadowMapUpdate=t}getClearPass(){return this.clearPass}render(t,e,r,i,n){const a=this.scene,s=this.camera,o=this.selection,c=s.layers.mask,u=a.background,d=t.shadowMap.autoUpdate,h=this.renderToScreen?null:e;o!==null&&s.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(t.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(a.background=null),this.clearPass.enabled&&this.clearPass.render(t,e),t.setRenderTarget(h),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(t,a,s):t.render(a,s),s.layers.mask=c,a.background=u,t.shadowMap.autoUpdate=d}},Q={LINEAR:0,REINHARD:1,REINHARD2:2,REINHARD2_ADAPTIVE:3,OPTIMIZED_CINEON:5,CINEON:5,ACES_FILMIC:6,AGX:7,NEUTRAL:8},As=`#include <packing>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
uniform lowp sampler2D luminanceBuffer0;uniform lowp sampler2D luminanceBuffer1;uniform float minLuminance;uniform float deltaTime;uniform float tau;varying vec2 vUv;void main(){float l0=unpackRGBAToFloat(texture2D(luminanceBuffer0,vUv));
#if __VERSION__ < 300
float l1=texture2DLodEXT(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#else
float l1=textureLod(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#endif
l0=max(minLuminance,l0);l1=max(minLuminance,l1);float adaptedLum=l0+(l1-l0)*(1.0-exp(-deltaTime*tau));gl_FragColor=(adaptedLum==1.0)?vec4(1.0):packFloatToRGBA(adaptedLum);}`,Is=class extends xt{constructor(){super({name:"AdaptiveLuminanceMaterial",defines:{MIP_LEVEL_1X1:"0.0"},uniforms:{luminanceBuffer0:new l(null),luminanceBuffer1:new l(null),minLuminance:new l(.01),deltaTime:new l(0),tau:new l(1)},extensions:{shaderTextureLOD:!0},blending:At,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:As,vertexShader:mi})}set luminanceBuffer0(t){this.uniforms.luminanceBuffer0.value=t}setLuminanceBuffer0(t){this.uniforms.luminanceBuffer0.value=t}set luminanceBuffer1(t){this.uniforms.luminanceBuffer1.value=t}setLuminanceBuffer1(t){this.uniforms.luminanceBuffer1.value=t}set mipLevel1x1(t){this.defines.MIP_LEVEL_1X1=t.toFixed(1),this.needsUpdate=!0}setMipLevel1x1(t){this.mipLevel1x1=t}set deltaTime(t){this.uniforms.deltaTime.value=t}setDeltaTime(t){this.uniforms.deltaTime.value=t}get minLuminance(){return this.uniforms.minLuminance.value}set minLuminance(t){this.uniforms.minLuminance.value=t}getMinLuminance(){return this.uniforms.minLuminance.value}setMinLuminance(t){this.uniforms.minLuminance.value=t}get adaptationRate(){return this.uniforms.tau.value}set adaptationRate(t){this.uniforms.tau.value=t}getAdaptationRate(){return this.uniforms.tau.value}setAdaptationRate(t){this.uniforms.tau.value=t}},Ns=class extends ie{constructor(t,{minLuminance:e=.01,adaptationRate:r=1}={}){super("AdaptiveLuminancePass"),this.fullscreenMaterial=new Is,this.needsSwap=!1,this.renderTargetPrevious=new _e(1,1,{minFilter:Li,magFilter:Li,depthBuffer:!1}),this.renderTargetPrevious.texture.name="Luminance.Previous";const i=this.fullscreenMaterial;i.luminanceBuffer0=this.renderTargetPrevious.texture,i.luminanceBuffer1=t,i.minLuminance=e,i.adaptationRate=r,this.renderTargetAdapted=this.renderTargetPrevious.clone(),this.renderTargetAdapted.texture.name="Luminance.Adapted",this.copyPass=new yn(this.renderTargetPrevious,!1)}get texture(){return this.renderTargetAdapted.texture}getTexture(){return this.renderTargetAdapted.texture}set mipLevel1x1(t){this.fullscreenMaterial.mipLevel1x1=t}get adaptationRate(){return this.fullscreenMaterial.adaptationRate}set adaptationRate(t){this.fullscreenMaterial.adaptationRate=t}render(t,e,r,i,n){this.fullscreenMaterial.deltaTime=i,t.setRenderTarget(this.renderToScreen?null:this.renderTargetAdapted),t.render(this.scene,this.camera),this.copyPass.render(t,this.renderTargetAdapted)}},ys=`#include <tonemapping_pars_fragment>
uniform float whitePoint;
#if TONE_MAPPING_MODE == 2 || TONE_MAPPING_MODE == 3
uniform float middleGrey;
#if TONE_MAPPING_MODE == 3
uniform lowp sampler2D luminanceBuffer;
#else
uniform float averageLuminance;
#endif
vec3 Reinhard2ToneMapping(vec3 color){color*=toneMappingExposure;float l=luminance(color);
#if TONE_MAPPING_MODE == 3
float lumAvg=unpackRGBAToFloat(texture2D(luminanceBuffer,vec2(0.5)));
#else
float lumAvg=averageLuminance;
#endif
float lumScaled=(l*middleGrey)/max(lumAvg,1e-6);float lumCompressed=lumScaled*(1.0+lumScaled/(whitePoint*whitePoint));lumCompressed/=(1.0+lumScaled);return clamp(lumCompressed*color,0.0,1.0);}
#elif TONE_MAPPING_MODE == 4
#define A 0.15
#define B 0.50
#define C 0.10
#define D 0.20
#define E 0.02
#define F 0.30
vec3 Uncharted2Helper(const in vec3 x){return((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;}vec3 Uncharted2ToneMapping(vec3 color){color*=toneMappingExposure;return clamp(Uncharted2Helper(color)/Uncharted2Helper(vec3(whitePoint)),0.0,1.0);}
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){
#if TONE_MAPPING_MODE == 2 || TONE_MAPPING_MODE == 3
outputColor=vec4(Reinhard2ToneMapping(inputColor.rgb),inputColor.a);
#elif TONE_MAPPING_MODE == 4
outputColor=vec4(Uncharted2ToneMapping(inputColor.rgb),inputColor.a);
#else
outputColor=vec4(toneMapping(inputColor.rgb),inputColor.a);
#endif
}`,$u=class extends wn{constructor({blendFunction:t=S.SRC,adaptive:e=!1,mode:r=e?Q.REINHARD2_ADAPTIVE:Q.AGX,resolution:i=256,maxLuminance:n=4,whitePoint:a=n,middleGrey:s=.6,minLuminance:o=.01,averageLuminance:c=1,adaptationRate:u=1}={}){super("ToneMappingEffect",ys,{blendFunction:t,uniforms:new Map([["luminanceBuffer",new l(null)],["maxLuminance",new l(n)],["whitePoint",new l(a)],["middleGrey",new l(s)],["averageLuminance",new l(c)]])}),this.renderTargetLuminance=new _e(1,1,{minFilter:Ta,depthBuffer:!1}),this.renderTargetLuminance.texture.generateMipmaps=!0,this.renderTargetLuminance.texture.name="Luminance",this.luminancePass=new xs({renderTarget:this.renderTargetLuminance}),this.adaptiveLuminancePass=new Ns(this.luminancePass.texture,{minLuminance:o,adaptationRate:u}),this.uniforms.get("luminanceBuffer").value=this.adaptiveLuminancePass.texture,this.resolution=i,this.mode=r}get mode(){return Number(this.defines.get("TONE_MAPPING_MODE"))}set mode(t){if(this.mode===t)return;const r=di.replace(/\D+/g,"")>=168?"CineonToneMapping(texel)":"OptimizedCineonToneMapping(texel)";switch(this.defines.clear(),this.defines.set("TONE_MAPPING_MODE",t.toFixed(0)),t){case Q.LINEAR:this.defines.set("toneMapping(texel)","LinearToneMapping(texel)");break;case Q.REINHARD:this.defines.set("toneMapping(texel)","ReinhardToneMapping(texel)");break;case Q.CINEON:case Q.OPTIMIZED_CINEON:this.defines.set("toneMapping(texel)",r);break;case Q.ACES_FILMIC:this.defines.set("toneMapping(texel)","ACESFilmicToneMapping(texel)");break;case Q.AGX:this.defines.set("toneMapping(texel)","AgXToneMapping(texel)");break;case Q.NEUTRAL:this.defines.set("toneMapping(texel)","NeutralToneMapping(texel)");break;default:this.defines.set("toneMapping(texel)","texel");break}this.adaptiveLuminancePass.enabled=t===Q.REINHARD2_ADAPTIVE,this.setChanged()}getMode(){return this.mode}setMode(t){this.mode=t}get whitePoint(){return this.uniforms.get("whitePoint").value}set whitePoint(t){this.uniforms.get("whitePoint").value=t}get middleGrey(){return this.uniforms.get("middleGrey").value}set middleGrey(t){this.uniforms.get("middleGrey").value=t}get averageLuminance(){return this.uniforms.get("averageLuminance").value}set averageLuminance(t){this.uniforms.get("averageLuminance").value=t}get adaptiveLuminanceMaterial(){return this.adaptiveLuminancePass.fullscreenMaterial}getAdaptiveLuminanceMaterial(){return this.adaptiveLuminanceMaterial}get resolution(){return this.luminancePass.resolution.width}set resolution(t){const e=Math.max(0,Math.ceil(Math.log2(t))),r=Math.pow(2,e);this.luminancePass.resolution.setPreferredSize(r,r),this.adaptiveLuminanceMaterial.mipLevel1x1=e}getResolution(){return this.resolution}setResolution(t){this.resolution=t}get adaptive(){return this.mode===Q.REINHARD2_ADAPTIVE}set adaptive(t){this.mode=t?Q.REINHARD2_ADAPTIVE:Q.REINHARD2}get adaptationRate(){return this.adaptiveLuminanceMaterial.adaptationRate}set adaptationRate(t){this.adaptiveLuminanceMaterial.adaptationRate=t}get distinction(){return console.warn(this.name,"distinction was removed."),1}set distinction(t){console.warn(this.name,"distinction was removed.")}update(t,e,r){this.adaptiveLuminancePass.enabled&&(this.luminancePass.render(t,e),this.adaptiveLuminancePass.render(t,null,null,r))}initialize(t,e,r){this.adaptiveLuminancePass.initialize(t,e,r)}},bs=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,ws="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",Cs=class extends xt{constructor(t,e,r,i,n=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:di.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new l(null),depthBuffer:new l(null),resolution:new l(new Y),texelSize:new l(new Y),cameraNear:new l(.3),cameraFar:new l(1e3),aspect:new l(1),time:new l(0)},blending:At,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:n}),t&&this.setShaderParts(t),e&&this.setDefines(e),r&&this.setUniforms(r),this.copyCameraSettings(i)}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.uniforms.inputBuffer.value=t}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(t){this.uniforms.depthBuffer.value=t}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(t){this.defines.DEPTH_PACKING=t.toFixed(0),this.needsUpdate=!0}setDepthBuffer(t,e=nr){this.depthBuffer=t,this.depthPacking=e}setShaderData(t){this.setShaderParts(t.shaderParts),this.setDefines(t.defines),this.setUniforms(t.uniforms),this.setExtensions(t.extensions)}setShaderParts(t){return this.fragmentShader=bs.replace(A.FRAGMENT_HEAD,t.get(A.FRAGMENT_HEAD)||"").replace(A.FRAGMENT_MAIN_UV,t.get(A.FRAGMENT_MAIN_UV)||"").replace(A.FRAGMENT_MAIN_IMAGE,t.get(A.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=ws.replace(A.VERTEX_HEAD,t.get(A.VERTEX_HEAD)||"").replace(A.VERTEX_MAIN_SUPPORT,t.get(A.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(t){for(const e of t.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(t){for(const e of t.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(t){this.extensions={};for(const e of t)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(t){this.encodeOutput!==t&&(t?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(t){return this.encodeOutput}setOutputEncodingEnabled(t){this.encodeOutput=t}get time(){return this.uniforms.time.value}set time(t){this.uniforms.time.value=t}setDeltaTime(t){this.uniforms.time.value+=t}adoptCameraSettings(t){this.copyCameraSettings(t)}copyCameraSettings(t){t&&(this.uniforms.cameraNear.value=t.near,this.uniforms.cameraFar.value=t.far,t instanceof xa?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(t,e){const r=this.uniforms;r.resolution.value.set(t,e),r.texelSize.value.set(1/t,1/e),r.aspect.value=t/e}static get Section(){return A}};function Bi(t,e,r){for(const i of e){const n="$1"+t+i.charAt(0).toUpperCase()+i.slice(1),a=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(const s of r.entries())s[1]!==null&&r.set(s[0],s[1].replace(a,n))}}function Ds(t,e,r){let i=e.getFragmentShader(),n=e.getVertexShader();const a=i!==void 0&&/mainImage/.test(i),s=i!==void 0&&/mainUv/.test(i);if(r.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(s&&(r.attributes&xe.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!a&&!s)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,c=r.shaderParts;let u=c.get(A.FRAGMENT_HEAD)||"",d=c.get(A.FRAGMENT_MAIN_UV)||"",h=c.get(A.FRAGMENT_MAIN_IMAGE)||"",p=c.get(A.VERTEX_HEAD)||"",T=c.get(A.VERTEX_MAIN_SUPPORT)||"";const g=new Set,_=new Set;if(s&&(d+=`	${t}MainUv(UV);
`,r.uvTransformation=!0),n!==null&&/mainSupport/.test(n)){const R=/mainSupport *\([\w\s]*?uv\s*?\)/.test(n);T+=`	${t}MainSupport(`,T+=R?`vUv);
`:`);
`;for(const E of n.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const L of E[1].split(/\s*,\s*/))r.varyings.add(L),g.add(L),_.add(L);for(const E of n.matchAll(o))_.add(E[1])}for(const R of i.matchAll(o))_.add(R[1]);for(const R of e.defines.keys())_.add(R.replace(/\([\w\s,]*\)/g,""));for(const R of e.uniforms.keys())_.add(R);_.delete("while"),_.delete("for"),_.delete("if"),e.uniforms.forEach((R,E)=>r.uniforms.set(t+E.charAt(0).toUpperCase()+E.slice(1),R)),e.defines.forEach((R,E)=>r.defines.set(t+E.charAt(0).toUpperCase()+E.slice(1),R));const w=new Map([["fragment",i],["vertex",n]]);Bi(t,_,r.defines),Bi(t,_,w),i=w.get("fragment"),n=w.get("vertex");const C=e.blendMode;if(r.blendModes.set(C.blendFunction,C),a){e.inputColorSpace!==null&&e.inputColorSpace!==r.colorSpace&&(h+=e.inputColorSpace===pe?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==ar?r.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(r.colorSpace=e.inputColorSpace);const R=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;h+=`${t}MainImage(color0, UV, `,(r.attributes&xe.DEPTH)!==0&&R.test(i)&&(h+="depth, ",r.readDepth=!0),h+=`color1);
	`;const E=t+"BlendOpacity";r.uniforms.set(E,C.opacity),h+=`color0 = blend${C.blendFunction}(color0, color1, ${E});

	`,u+=`uniform float ${E};

`}if(u+=i+`
`,n!==null&&(p+=n+`
`),c.set(A.FRAGMENT_HEAD,u),c.set(A.FRAGMENT_MAIN_UV,d),c.set(A.FRAGMENT_MAIN_IMAGE,h),c.set(A.VERTEX_HEAD,p),c.set(A.VERTEX_MAIN_SUPPORT,T),e.extensions!==null)for(const R of e.extensions)r.extensions.add(R)}}var ju=class extends ie{constructor(t,...e){super("EffectPass"),this.fullscreenMaterial=new Cs(null,null,null,t),this.listener=r=>this.handleEvent(r),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(t){for(const e of this.effects)e.mainScene=t}set mainCamera(t){this.fullscreenMaterial.copyCameraSettings(t);for(const e of this.effects)e.mainCamera=t}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(t){this.fullscreenMaterial.encodeOutput=t}get dithering(){return this.fullscreenMaterial.dithering}set dithering(t){const e=this.fullscreenMaterial;e.dithering=t,e.needsUpdate=!0}setEffects(t){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=t.sort((e,r)=>r.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const t=new Ba;let e=0;for(const s of this.effects)if(s.blendMode.blendFunction===S.DST)t.attributes|=s.getAttributes()&xe.DEPTH;else{if((t.attributes&s.getAttributes()&xe.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${s.name})`);Ds("e"+e++,s,t)}let r=t.shaderParts.get(A.FRAGMENT_HEAD),i=t.shaderParts.get(A.FRAGMENT_MAIN_IMAGE),n=t.shaderParts.get(A.FRAGMENT_MAIN_UV);const a=/\bblend\b/g;for(const s of t.blendModes.values())r+=s.getShaderCode().replace(a,`blend${s.blendFunction}`)+`
`;(t.attributes&xe.DEPTH)!==0?(t.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,t.colorSpace===pe&&(i+=`color0 = sRGBToLinear(color0);
	`),t.uvTransformation?(n=`vec2 transformedUv = vUv;
`+n,t.defines.set("UV","transformedUv")):t.defines.set("UV","vUv"),t.shaderParts.set(A.FRAGMENT_HEAD,r),t.shaderParts.set(A.FRAGMENT_MAIN_IMAGE,i),t.shaderParts.set(A.FRAGMENT_MAIN_UV,n);for(const[s,o]of t.shaderParts)o!==null&&t.shaderParts.set(s,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(t)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(t,e=nr){this.fullscreenMaterial.depthBuffer=t,this.fullscreenMaterial.depthPacking=e;for(const r of this.effects)r.setDepthTexture(t,e)}render(t,e,r,i,n){for(const a of this.effects)a.update(t,e,i);if(!this.skipRendering||this.renderToScreen){const a=this.fullscreenMaterial;a.inputBuffer=e.texture,a.time+=i*this.timeScale,t.setRenderTarget(this.renderToScreen?null:r),t.render(this.scene,this.camera)}}setSize(t,e){this.fullscreenMaterial.setSize(t,e);for(const r of this.effects)r.setSize(t,e)}initialize(t,e,r){this.renderer=t;for(const i of this.effects)i.initialize(t,e,r);this.updateMaterial(),r!==void 0&&r!==Ce&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const t of this.effects)t.removeEventListener("change",this.listener),t.dispose()}handleEvent(t){t.type==="change"&&this.recompile()}},Ms="Invariant failed";function zi(t,e){if(!t)throw new Error(Ms)}const Os=new f;function Cn(t,e,r=new f,i){const{x:n,y:a,z:s}=t,o=e.x,c=e.y,u=e.z,d=n*n*o,h=a*a*c,p=s*s*u,T=d+h+p,g=Math.sqrt(1/T);if(!Number.isFinite(g))return;const _=Os.copy(t).multiplyScalar(g);if(T<(i?.centerTolerance??.1))return r.copy(_);const w=_.multiply(e).multiplyScalar(2);let C=(1-g)*t.length()/(w.length()/2),R=0,E,L,V,K;do{C-=R,E=1/(1+C*o),L=1/(1+C*c),V=1/(1+C*u);const Z=E*E,Ne=L*L,ve=V*V,Ge=Z*E,He=Ne*L,ye=ve*V;K=d*Z+h*Ne+p*ve-1,R=K/((d*Ge*o+h*He*c+p*ye*u)*-2)}while(Math.abs(K)>1e-12);return r.set(n*E,a*L,s*V)}const Be=new f,wr=new f,Cr=new f,zr=class{constructor(e,r,i){this.radii=new f(e,r,i)}get minimumRadius(){return Math.min(this.radii.x,this.radii.y,this.radii.z)}get maximumRadius(){return Math.max(this.radii.x,this.radii.y,this.radii.z)}get flattening(){return 1-this.minimumRadius/this.maximumRadius}get eccentricity(){return Math.sqrt(this.eccentricitySquared)}get eccentricitySquared(){const e=this.maximumRadius**2,r=this.minimumRadius**2;return(e-r)/e}reciprocalRadii(e=new f){const{x:r,y:i,z:n}=this.radii;return e.set(1/r,1/i,1/n)}reciprocalRadiiSquared(e=new f){const{x:r,y:i,z:n}=this.radii;return e.set(1/r**2,1/i**2,1/n**2)}projectOnSurface(e,r=new f,i){return Cn(e,this.reciprocalRadiiSquared(),r,i)}getSurfaceNormal(e,r=new f){return r.multiplyVectors(this.reciprocalRadiiSquared(Be),e).normalize()}getEastNorthUpVectors(e,r=new f,i=new f,n=new f){this.getSurfaceNormal(e,n),r.set(-e.y,e.x,0).normalize(),i.crossVectors(n,r).normalize()}getEastNorthUpFrame(e,r=new H){const i=Be,n=wr,a=Cr;return this.getEastNorthUpVectors(e,i,n,a),r.makeBasis(i,n,a).setPosition(e)}getNorthUpEastFrame(e,r=new H){const i=Be,n=wr,a=Cr;return this.getEastNorthUpVectors(e,i,n,a),r.makeBasis(n,a,i).setPosition(e)}getIntersection(e,r=new f){const i=this.reciprocalRadii(Be),n=wr.copy(i).multiply(e.origin),a=Cr.copy(i).multiply(e.direction),s=n.lengthSq(),o=a.lengthSq(),c=n.dot(a),u=c**2-o*(s-1);if(s===1)return r.copy(e.origin);if(s>1){if(c>=0||u<0)return;const d=Math.sqrt(u),h=(-c-d)/o,p=(-c+d)/o;return e.at(Math.min(h,p),r)}if(s<1){const d=c**2-o*(s-1),h=Math.sqrt(d),p=(-c+h)/o;return e.at(p,r)}if(c<0)return e.at(-c/o,r)}getOsculatingSphereCenter(e,r,i=new f){zi(this.radii.x===this.radii.y);const n=this.radii.x**2,a=this.radii.z**2,s=Be.set(e.x/n,e.y/n,e.z/a).normalize();return i.copy(s.multiplyScalar(-r).add(e))}getNormalAtHorizon(e,r,i=new f){zi(this.radii.x===this.radii.y);const n=this.radii.x**2,a=this.radii.z**2,s=e,o=r;let c=(s.x*o.x+s.y*o.y)/n+s.z*o.z/a;c/=(s.x**2+s.y**2)/n+s.z**2/a;const u=Be.copy(o).multiplyScalar(-c).add(e);return i.set(u.x/n,u.y/n,u.z/a).normalize()}};zr.WGS84=new zr(6378137,6378137,6356752314245179e-9);let De=zr;const Ut=new f,ki=new f,gt=class kr{constructor(e=0,r=0,i=0){this.longitude=e,this.latitude=r,this.height=i}set(e,r,i){return this.longitude=e,this.latitude=r,i!=null&&(this.height=i),this}clone(){return new kr(this.longitude,this.latitude,this.height)}copy(e){return this.longitude=e.longitude,this.latitude=e.latitude,this.height=e.height,this}equals(e){return e.longitude===this.longitude&&e.latitude===this.latitude&&e.height===this.height}setLongitude(e){return this.longitude=e,this}setLatitude(e){return this.latitude=e,this}setHeight(e){return this.height=e,this}normalize(){return this.longitude<kr.MIN_LONGITUDE&&(this.longitude+=Math.PI*2),this}setFromECEF(e,r){const i=(r?.ellipsoid??De.WGS84).reciprocalRadiiSquared(Ut),n=Cn(e,i,ki,r);if(n==null)throw new Error(`Could not project position to ellipsoid surface: ${e.toArray()}`);const a=Ut.multiplyVectors(n,i).normalize();this.longitude=Math.atan2(a.y,a.x),this.latitude=Math.asin(a.z);const s=Ut.subVectors(e,n);return this.height=Math.sign(s.dot(e))*s.length(),this}toECEF(e=new f,r){const i=r?.ellipsoid??De.WGS84,n=Ut.multiplyVectors(i.radii,i.radii),a=Math.cos(this.latitude),s=ki.set(a*Math.cos(this.longitude),a*Math.sin(this.longitude),Math.sin(this.latitude)).normalize();return e.multiplyVectors(n,s),e.divideScalar(Math.sqrt(s.dot(e))).add(s.multiplyScalar(this.height))}fromArray(e,r=0){return this.longitude=e[r],this.latitude=e[r+1],this.height=e[r+2],this}toArray(e=[],r=0){return e[r]=this.longitude,e[r+1]=this.latitude,e[r+2]=this.height,e}*[Symbol.iterator](){yield this.longitude,yield this.latitude,yield this.height}};gt.MIN_LONGITUDE=-Math.PI,gt.MAX_LONGITUDE=Math.PI,gt.MIN_LATITUDE=-Math.PI/2,gt.MAX_LATITUDE=Math.PI/2;let Ls=gt;function Ps(t){return t instanceof Ia?t.getContext().getExtension("OES_texture_float_linear")!=null:t.backend.hasFeature?.("float32-filterable")??!1}const Us="This is not an object",Gs="This is not a Float16Array object",Wi="This constructor is not a subclass of Float16Array",Dn="The constructor property value is not an object",Hs="Species constructor didn't return TypedArray object",Fs="Derived constructor created TypedArray object which was too small length",St="Attempting to access detached ArrayBuffer",Wr="Cannot convert undefined or null to object",Vr="Cannot mix BigInt and other types, use explicit conversions",Vi="@@iterator property is not callable",Xi="Reduce of empty array with no initial value",Bs="The comparison function must be either a function or undefined",Dr="Offset is out of bounds";function M(t){return(e,...r)=>q(t,e,r)}function ot(t,e){return M(tt(t,e).get)}const{apply:q,construct:_t,defineProperty:zs,get:Mr,getOwnPropertyDescriptor:tt,getPrototypeOf:It,has:Xr,ownKeys:Mn,set:Yi,setPrototypeOf:On}=Reflect,ks=Proxy,{EPSILON:Ws,MAX_SAFE_INTEGER:$i,isFinite:Ln,isNaN:rt}=Number,{iterator:oe,species:Vs,toStringTag:hi,for:Xs}=Symbol,it=Object,{create:cr,defineProperty:Nt,freeze:Ys,is:ji}=it,Yr=it.prototype,$s=Yr.__lookupGetter__?M(Yr.__lookupGetter__):(t,e)=>{if(t==null)throw O(Wr);let r=it(t);do{const i=tt(r,e);if(i!==void 0)return ge(i,"get")?i.get:void 0}while((r=It(r))!==null)},ge=it.hasOwn||M(Yr.hasOwnProperty),Pn=Array,Un=Pn.isArray,ur=Pn.prototype,js=M(ur.join),qs=M(ur.push),Ks=M(ur.toLocaleString),fi=ur[oe],Zs=M(fi),{abs:Qs,trunc:Gn}=Math,dr=ArrayBuffer,Js=dr.isView,Hn=dr.prototype,eo=M(Hn.slice),to=ot(Hn,"byteLength"),$r=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:null,ro=$r&&ot($r.prototype,"byteLength"),pi=It(Uint8Array),io=pi.from,k=pi.prototype,no=k[oe],ao=M(k.keys),so=M(k.values),oo=M(k.entries),co=M(k.set),qi=M(k.reverse),uo=M(k.fill),lo=M(k.copyWithin),Ki=M(k.sort),ft=M(k.slice),mo=M(k.subarray),B=ot(k,"buffer"),be=ot(k,"byteOffset"),N=ot(k,"length"),Fn=ot(k,hi),ho=Uint8Array,J=Uint16Array,Zi=(...t)=>q(io,J,t),gi=Uint32Array,fo=Float32Array,Me=It([][oe]()),lr=M(Me.next),po=M((function*(){})().next),go=It(Me),O=TypeError,Or=RangeError,Bn=WeakSet,zn=Bn.prototype,_o=M(zn.add),To=M(zn.has),mr=WeakMap,_i=mr.prototype,jt=M(_i.get),vo=M(_i.has),Ti=M(_i.set),kn=new mr,So=cr(null,{next:{value:function(){const t=jt(kn,this);return lr(t)}},[oe]:{value:function(){return this}}});function Gt(t){if(t[oe]===fi&&Me.next===lr)return t;const e=cr(So);return Ti(kn,e,Zs(t)),e}const Wn=new mr,Vn=cr(go,{next:{value:function(){const t=jt(Wn,this);return po(t)},writable:!0,configurable:!0}});for(const t of Mn(Me))t!=="next"&&Nt(Vn,t,tt(Me,t));function Qi(t){const e=cr(Vn);return Ti(Wn,e,t),e}function qt(t){return t!==null&&typeof t=="object"||typeof t=="function"}function Ji(t){return t!==null&&typeof t=="object"}function Kt(t){return Fn(t)!==void 0}function jr(t){const e=Fn(t);return e==="BigInt64Array"||e==="BigUint64Array"}function Eo(t){try{return Un(t)?!1:(to(t),!0)}catch{return!1}}function Xn(t){if($r===null)return!1;try{return ro(t),!0}catch{return!1}}function Ro(t){return Eo(t)||Xn(t)}function en(t){return Un(t)?t[oe]===fi&&Me.next===lr:!1}function xo(t){return Kt(t)?t[oe]===no&&Me.next===lr:!1}function Ht(t){if(typeof t!="string")return!1;const e=+t;return t!==e+""||!Ln(e)?!1:e===Gn(e)}const Zt=Xs("__Float16Array__");function Ao(t){if(!Ji(t))return!1;const e=It(t);if(!Ji(e))return!1;const r=e.constructor;if(r===void 0)return!1;if(!qt(r))throw O(Dn);return Xr(r,Zt)}const qr=1/Ws;function Io(t){return t+qr-qr}const Yn=6103515625e-14,No=65504,$n=.0009765625,tn=$n*Yn,yo=$n*qr;function bo(t){const e=+t;if(!Ln(e)||e===0)return e;const r=e>0?1:-1,i=Qs(e);if(i<Yn)return r*Io(i/tn)*tn;const n=(1+yo)*i,a=n-(n-i);return a>No||rt(a)?r*(1/0):r*a}const jn=new dr(4),qn=new fo(jn),Kn=new gi(jn),ee=new J(512),te=new ho(512);for(let t=0;t<256;++t){const e=t-127;e<-24?(ee[t]=0,ee[t|256]=32768,te[t]=24,te[t|256]=24):e<-14?(ee[t]=1024>>-e-14,ee[t|256]=1024>>-e-14|32768,te[t]=-e-1,te[t|256]=-e-1):e<=15?(ee[t]=e+15<<10,ee[t|256]=e+15<<10|32768,te[t]=13,te[t|256]=13):e<128?(ee[t]=31744,ee[t|256]=64512,te[t]=24,te[t|256]=24):(ee[t]=31744,ee[t|256]=64512,te[t]=13,te[t|256]=13)}function ae(t){qn[0]=bo(t);const e=Kn[0],r=e>>23&511;return ee[r]+((e&8388607)>>te[r])}const vi=new gi(2048);for(let t=1;t<1024;++t){let e=t<<13,r=0;for(;(e&8388608)===0;)e<<=1,r-=8388608;e&=-8388609,r+=947912704,vi[t]=e|r}for(let t=1024;t<2048;++t)vi[t]=939524096+(t-1024<<13);const ct=new gi(64);for(let t=1;t<31;++t)ct[t]=t<<23;ct[31]=1199570944;ct[32]=2147483648;for(let t=33;t<63;++t)ct[t]=2147483648+(t-32<<23);ct[63]=3347054592;const Zn=new J(64);for(let t=1;t<64;++t)t!==32&&(Zn[t]=1024);function y(t){const e=t>>10;return Kn[0]=vi[Zn[e]+(t&1023)]+ct[e],qn[0]}function ue(t){const e=+t;return rt(e)||e===0?0:Gn(e)}function Lr(t){const e=ue(t);return e<0?0:e<$i?e:$i}function Ft(t,e){if(!qt(t))throw O(Us);const r=t.constructor;if(r===void 0)return e;if(!qt(r))throw O(Dn);return r[Vs]??e}function Et(t){if(Xn(t))return!1;try{return eo(t,0,0),!1}catch{}return!0}function rn(t,e){const r=rt(t),i=rt(e);if(r&&i)return 0;if(r)return 1;if(i||t<e)return-1;if(t>e)return 1;if(t===0&&e===0){const n=ji(t,0),a=ji(e,0);if(!n&&a)return-1;if(n&&!a)return 1}return 0}const Si=2,Qt=new mr;function Xe(t){return vo(Qt,t)||!Js(t)&&Ao(t)}function I(t){if(!Xe(t))throw O(Gs)}function Bt(t,e){const r=Xe(t),i=Kt(t);if(!r&&!i)throw O(Hs);if(typeof e=="number"){let n;if(r){const a=v(t);n=N(a)}else n=N(t);if(n<e)throw O(Fs)}if(jr(t))throw O(Vr)}function v(t){const e=jt(Qt,t);if(e!==void 0){const n=B(e);if(Et(n))throw O(St);return e}const r=t.buffer;if(Et(r))throw O(St);const i=_t(Pe,[r,t.byteOffset,t.length],t.constructor);return jt(Qt,i)}function nn(t){const e=N(t),r=[];for(let i=0;i<e;++i)r[i]=y(t[i]);return r}const Qn=new Bn;for(const t of Mn(k)){if(t===hi)continue;const e=tt(k,t);ge(e,"get")&&typeof e.get=="function"&&_o(Qn,e.get)}const wo=Ys({get(t,e,r){return Ht(e)&&ge(t,e)?y(Mr(t,e)):To(Qn,$s(t,e))?Mr(t,e):Mr(t,e,r)},set(t,e,r,i){return Ht(e)&&ge(t,e)?Yi(t,e,ae(r)):Yi(t,e,r,i)},getOwnPropertyDescriptor(t,e){if(Ht(e)&&ge(t,e)){const r=tt(t,e);return r.value=y(r.value),r}return tt(t,e)},defineProperty(t,e,r){return Ht(e)&&ge(t,e)&&ge(r,"value")&&(r.value=ae(r.value)),zs(t,e,r)}});let Pe=class z{constructor(e,r,i){let n;if(Xe(e))n=_t(J,[v(e)],new.target);else if(qt(e)&&!Ro(e)){let s,o;if(Kt(e)){s=e,o=N(e);const c=B(e);if(Et(c))throw O(St);if(jr(e))throw O(Vr);const u=new dr(o*Si);n=_t(J,[u],new.target)}else{const c=e[oe];if(c!=null&&typeof c!="function")throw O(Vi);c!=null?en(e)?(s=e,o=e.length):(s=[...e],o=s.length):(s=e,o=Lr(s.length)),n=_t(J,[o],new.target)}for(let c=0;c<o;++c)n[c]=ae(s[c])}else n=_t(J,arguments,new.target);const a=new ks(n,wo);return Ti(Qt,a,n),a}static from(e,...r){const i=this;if(!Xr(i,Zt))throw O(Wi);if(i===z){if(Xe(e)&&r.length===0){const d=v(e),h=new J(B(d),be(d),N(d));return new z(B(ft(h)))}if(r.length===0)return new z(B(Zi(e,ae)));const c=r[0],u=r[1];return new z(B(Zi(e,function(d,...h){return ae(q(c,this,[d,...Gt(h)]))},u)))}let n,a;const s=e[oe];if(s!=null&&typeof s!="function")throw O(Vi);if(s!=null)en(e)?(n=e,a=e.length):xo(e)?(n=e,a=N(e)):(n=[...e],a=n.length);else{if(e==null)throw O(Wr);n=it(e),a=Lr(n.length)}const o=new i(a);if(r.length===0)for(let c=0;c<a;++c)o[c]=n[c];else{const c=r[0],u=r[1];for(let d=0;d<a;++d)o[d]=q(c,u,[n[d],d])}return o}static of(...e){const r=this;if(!Xr(r,Zt))throw O(Wi);const i=e.length;if(r===z){const a=new z(i),s=v(a);for(let o=0;o<i;++o)s[o]=ae(e[o]);return a}const n=new r(i);for(let a=0;a<i;++a)n[a]=e[a];return n}keys(){I(this);const e=v(this);return ao(e)}values(){I(this);const e=v(this);return Qi((function*(){for(const r of so(e))yield y(r)})())}entries(){I(this);const e=v(this);return Qi((function*(){for(const[r,i]of oo(e))yield[r,y(i)]})())}at(e){I(this);const r=v(this),i=N(r),n=ue(e),a=n>=0?n:i+n;if(!(a<0||a>=i))return y(r[a])}with(e,r){I(this);const i=v(this),n=N(i),a=ue(e),s=a>=0?a:n+a,o=+r;if(s<0||s>=n)throw Or(Dr);const c=new J(B(i),be(i),N(i)),u=new z(B(ft(c))),d=v(u);return d[s]=ae(o),u}map(e,...r){I(this);const i=v(this),n=N(i),a=r[0],s=Ft(i,z);if(s===z){const c=new z(n),u=v(c);for(let d=0;d<n;++d){const h=y(i[d]);u[d]=ae(q(e,a,[h,d,this]))}return c}const o=new s(n);Bt(o,n);for(let c=0;c<n;++c){const u=y(i[c]);o[c]=q(e,a,[u,c,this])}return o}filter(e,...r){I(this);const i=v(this),n=N(i),a=r[0],s=[];for(let u=0;u<n;++u){const d=y(i[u]);q(e,a,[d,u,this])&&qs(s,d)}const o=Ft(i,z),c=new o(s);return Bt(c),c}reduce(e,...r){I(this);const i=v(this),n=N(i);if(n===0&&r.length===0)throw O(Xi);let a,s;r.length===0?(a=y(i[0]),s=1):(a=r[0],s=0);for(let o=s;o<n;++o)a=e(a,y(i[o]),o,this);return a}reduceRight(e,...r){I(this);const i=v(this),n=N(i);if(n===0&&r.length===0)throw O(Xi);let a,s;r.length===0?(a=y(i[n-1]),s=n-2):(a=r[0],s=n-1);for(let o=s;o>=0;--o)a=e(a,y(i[o]),o,this);return a}forEach(e,...r){I(this);const i=v(this),n=N(i),a=r[0];for(let s=0;s<n;++s)q(e,a,[y(i[s]),s,this])}find(e,...r){I(this);const i=v(this),n=N(i),a=r[0];for(let s=0;s<n;++s){const o=y(i[s]);if(q(e,a,[o,s,this]))return o}}findIndex(e,...r){I(this);const i=v(this),n=N(i),a=r[0];for(let s=0;s<n;++s){const o=y(i[s]);if(q(e,a,[o,s,this]))return s}return-1}findLast(e,...r){I(this);const i=v(this),n=N(i),a=r[0];for(let s=n-1;s>=0;--s){const o=y(i[s]);if(q(e,a,[o,s,this]))return o}}findLastIndex(e,...r){I(this);const i=v(this),n=N(i),a=r[0];for(let s=n-1;s>=0;--s){const o=y(i[s]);if(q(e,a,[o,s,this]))return s}return-1}every(e,...r){I(this);const i=v(this),n=N(i),a=r[0];for(let s=0;s<n;++s)if(!q(e,a,[y(i[s]),s,this]))return!1;return!0}some(e,...r){I(this);const i=v(this),n=N(i),a=r[0];for(let s=0;s<n;++s)if(q(e,a,[y(i[s]),s,this]))return!0;return!1}set(e,...r){I(this);const i=v(this),n=ue(r[0]);if(n<0)throw Or(Dr);if(e==null)throw O(Wr);if(jr(e))throw O(Vr);if(Xe(e))return co(v(this),v(e),n);if(Kt(e)){const c=B(e);if(Et(c))throw O(St)}const a=N(i),s=it(e),o=Lr(s.length);if(n===1/0||o+n>a)throw Or(Dr);for(let c=0;c<o;++c)i[c+n]=ae(s[c])}reverse(){I(this);const e=v(this);return qi(e),this}toReversed(){I(this);const e=v(this),r=new J(B(e),be(e),N(e)),i=new z(B(ft(r))),n=v(i);return qi(n),i}fill(e,...r){I(this);const i=v(this);return uo(i,ae(e),...Gt(r)),this}copyWithin(e,r,...i){I(this);const n=v(this);return lo(n,e,r,...Gt(i)),this}sort(e){I(this);const r=v(this),i=e!==void 0?e:rn;return Ki(r,(n,a)=>i(y(n),y(a))),this}toSorted(e){I(this);const r=v(this);if(e!==void 0&&typeof e!="function")throw new O(Bs);const i=e!==void 0?e:rn,n=new J(B(r),be(r),N(r)),a=new z(B(ft(n))),s=v(a);return Ki(s,(o,c)=>i(y(o),y(c))),a}slice(e,r){I(this);const i=v(this),n=Ft(i,z);if(n===z){const g=new J(B(i),be(i),N(i));return new z(B(ft(g,e,r)))}const a=N(i),s=ue(e),o=r===void 0?a:ue(r);let c;s===-1/0?c=0:s<0?c=a+s>0?a+s:0:c=a<s?a:s;let u;o===-1/0?u=0:o<0?u=a+o>0?a+o:0:u=a<o?a:o;const d=u-c>0?u-c:0,h=new n(d);if(Bt(h,d),d===0)return h;const p=B(i);if(Et(p))throw O(St);let T=0;for(;c<u;)h[T]=y(i[c]),++c,++T;return h}subarray(e,r){I(this);const i=v(this),n=Ft(i,z),a=new J(B(i),be(i),N(i)),s=mo(a,e,r),o=new n(B(s),be(s),N(s));return Bt(o),o}indexOf(e,...r){I(this);const i=v(this),n=N(i);let a=ue(r[0]);if(a===1/0)return-1;a<0&&(a+=n,a<0&&(a=0));for(let s=a;s<n;++s)if(ge(i,s)&&y(i[s])===e)return s;return-1}lastIndexOf(e,...r){I(this);const i=v(this),n=N(i);let a=r.length>=1?ue(r[0]):n-1;if(a===-1/0)return-1;a>=0?a=a<n-1?a:n-1:a+=n;for(let s=a;s>=0;--s)if(ge(i,s)&&y(i[s])===e)return s;return-1}includes(e,...r){I(this);const i=v(this),n=N(i);let a=ue(r[0]);if(a===1/0)return!1;a<0&&(a+=n,a<0&&(a=0));const s=rt(e);for(let o=a;o<n;++o){const c=y(i[o]);if(s&&rt(c)||c===e)return!0}return!1}join(e){I(this);const r=v(this),i=nn(r);return js(i,e)}toLocaleString(...e){I(this);const r=v(this),i=nn(r);return Ks(i,...Gt(e))}get[hi](){if(Xe(this))return"Float16Array"}};Nt(Pe,"BYTES_PER_ELEMENT",{value:Si});Nt(Pe,Zt,{});On(Pe,pi);const Jt=Pe.prototype;Nt(Jt,"BYTES_PER_ELEMENT",{value:Si});Nt(Jt,oe,{value:Jt.values,writable:!0,configurable:!0});On(Jt,k);function an(t){return t instanceof Int8Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Pe||t instanceof Float32Array||t instanceof Float64Array}const nt=or.clamp,Ku=or.lerp,Co=or.degToRad;function Do(t,e,r,i=0,n=1){return or.mapLinear(t,e,r,i,n)}function Mo(t){return Math.min(Math.max(t,0),1)}function G(t){return(e,r)=>{e instanceof st?Object.defineProperty(e,r,{enumerable:!0,get(){return this.defines?.[t]!=null},set(i){i!==this[r]&&(i?(this.defines??={},this.defines[t]="1"):delete this.defines?.[t],this.needsUpdate=!0)}}):Object.defineProperty(e,r,{enumerable:!0,get(){return this.defines.has(t)},set(i){i!==this[r]&&(i?this.defines.set(t,"1"):this.defines.delete(t),this.setChanged())}})}}function sn(t){return typeof t=="number"?Math.floor(t):typeof t=="string"?parseInt(t,10):typeof t=="boolean"?+t:0}function Oo(t,{min:e=Number.MIN_SAFE_INTEGER,max:r=Number.MAX_SAFE_INTEGER}={}){return(i,n)=>{i instanceof st?Object.defineProperty(i,n,{enumerable:!0,get(){const a=this.defines?.[t];return a!=null?sn(a):0},set(a){const s=this[n];a!==s&&(this.defines??={},this.defines[t]=nt(a,e,r).toFixed(0),this.needsUpdate=!0)}}):Object.defineProperty(i,n,{enumerable:!0,get(){const a=this.defines.get(t);return a!=null?sn(a):0},set(a){const s=this[n];a!==s&&(this.defines.set(t,nt(a,e,r).toFixed(0)),this.setChanged())}})}}function on(t){return typeof t=="number"?t:typeof t=="string"?parseFloat(t):typeof t=="boolean"?+t:0}function Zu(t,{min:e=-1/0,max:r=1/0,precision:i=7}={}){return(n,a)=>{n instanceof st?Object.defineProperty(n,a,{enumerable:!0,get(){const s=this.defines?.[t];return s!=null?on(s):0},set(s){const o=this[a];s!==o&&(this.defines??={},this.defines[t]=nt(s,e,r).toFixed(i),this.needsUpdate=!0)}}):Object.defineProperty(n,a,{enumerable:!0,get(){const s=this.defines.get(t);return s!=null?on(s):0},set(s){const o=this[a];s!==o&&(this.defines.set(t,nt(s,e,r).toFixed(i)),this.setChanged())}})}}function Qu(t,{validate:e}={}){return(r,i)=>{r instanceof st?Object.defineProperty(r,i,{enumerable:!0,get(){return this.defines?.[t]},set(n){if(n!==this[i]){if(e?.(n)===!1){console.error(`Expression validation failed: ${n}`);return}this.defines??={},this.defines[t]=n,this.needsUpdate=!0}}}):Object.defineProperty(r,i,{enumerable:!0,get(){return this.defines.get(t)},set(n){if(n!==this[i]){if(e?.(n)===!1){console.error(`Expression validation failed: ${n}`);return}this.defines.set(t,n),this.setChanged()}}})}}function Ju(t,...e){const r={};for(let i=0;i<e.length;i+=2){const n=e[i],a=e[i+1];for(const s of a)r[s]={enumerable:!0,get:()=>n[s],set:o=>{n[s]=o}}}return Object.defineProperties(t,r),t}function ed(t,e,r){const i={};for(const n of r)i[n]={enumerable:!0,get:()=>e.uniforms[n].value,set:a=>{e.uniforms[n].value=a}};return Object.defineProperties(t,i),t}const Lo=/^[ \t]*#include +"([\w\d./]+)"/gm;function se(t,e){return t.replace(Lo,(r,i)=>{const n=i.split("/").reduce((a,s)=>typeof a!="string"&&a!=null?a[s]:void 0,e);if(typeof n!="string")throw new Error(`Could not find include for ${i}.`);return se(n,e)})}const Po=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*(?:i\s*\+\+|\+\+\s*i)\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uo(t,e,r,i){let n="";for(let a=parseInt(e,10);a<parseInt(r,10);++a)n+=i.replace(/\[\s*i\s*\]/g,`[${a}]`).replace(/UNROLLED_LOOP_INDEX/g,`${a}`);return n}function Go(t){return t.replace(Po,Uo)}const Ho=`// Reference: https://github.com/mrdoob/three.js/blob/r171/examples/jsm/csm/CSMShader.js

#ifndef SHADOW_CASCADE_COUNT
#error "SHADOW_CASCADE_COUNT macro must be defined."
#endif // SHADOW_CASCADE_COUNT

int getCascadeIndex(
  const mat4 viewMatrix,
  const vec3 worldPosition,
  const vec2 intervals[SHADOW_CASCADE_COUNT],
  const float near,
  const float far
) {
  vec4 viewPosition = viewMatrix * vec4(worldPosition, 1.0);
  float depth = viewZToOrthographicDepth(viewPosition.z, near, far);
  vec2 interval;
  #pragma unroll_loop_start
  for (int i = 0; i < 4; ++i) {
    #if UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
    interval = intervals[i];
    if (depth >= interval.x && depth < interval.y) {
      return UNROLLED_LOOP_INDEX;
    }
    #endif // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
  }
  #pragma unroll_loop_end
  return SHADOW_CASCADE_COUNT - 1;
}

int getFadedCascadeIndex(
  const mat4 viewMatrix,
  const vec3 worldPosition,
  const vec2 intervals[SHADOW_CASCADE_COUNT],
  const float near,
  const float far,
  const float jitter
) {
  vec4 viewPosition = viewMatrix * vec4(worldPosition, 1.0);
  float depth = viewZToOrthographicDepth(viewPosition.z, near, far);

  vec2 interval;
  float intervalCenter;
  float closestEdge;
  float margin;
  int nextIndex = -1;
  int prevIndex = -1;
  float alpha;

  #pragma unroll_loop_start
  for (int i = 0; i < 4; ++i) {
    #if UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
    interval = intervals[i];
    intervalCenter = (interval.x + interval.y) * 0.5;
    closestEdge = depth < intervalCenter ? interval.x : interval.y;
    margin = closestEdge * closestEdge * 0.5;
    interval += margin * vec2(-0.5, 0.5);

    #if UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT - 1
    if (depth >= interval.x && depth < interval.y) {
      prevIndex = nextIndex;
      nextIndex = UNROLLED_LOOP_INDEX;
      alpha = saturate(min(depth - interval.x, interval.y - depth) / margin);
    }
    #else // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT - 1
    // Don't fade out the last cascade.
    if (depth >= interval.x) {
      prevIndex = nextIndex;
      nextIndex = UNROLLED_LOOP_INDEX;
      alpha = saturate((depth - interval.x) / margin);
    }
    #endif // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT - 1
    #endif // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
  }
  #pragma unroll_loop_end

  return jitter <= alpha
    ? nextIndex
    : prevIndex;
}
`,Fo=`// cSpell:words logdepthbuf

#ifdef DEPTH_PACKING
float readDepthValue(const sampler2D depthBuffer, const vec2 uv) {
  #if DEPTH_PACKING == 3201
  return unpackRGBAToDepth(texture(depthBuffer, uv));
  #else // DEPTH_PACKING == 3201
  return texture(depthBuffer, uv).r;
  #endif // DEPTH_PACKING == 3201
}
#endif // DEPTH_PACKING

float reverseLogDepth(const float depth, const float near, const float far) {
  #if defined(USE_LOGDEPTHBUF) || defined(USE_LOGARITHMIC_DEPTH_BUFFER)
  float d = pow(2.0, depth * log2(far + 1.0)) - 1.0;
  float a = far / (far - near);
  float b = far * near / (near - far);
  return a + b / d;
  #else // defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(USE_LOGARITHMIC_DEPTH_BUFFER)
  return depth;
  #endif // defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(USE_LOGARITHMIC_DEPTH_BUFFER)
}

float linearizeDepth(const float depth, const float near, const float far) {
  float ndc = depth * 2.0 - 1.0;
  return 2.0 * near * far / (far + near - ndc * (far - near));
}
`,Bo=`float checker(const vec2 uv, const vec2 repeats) {
  vec2 c = floor(repeats * uv);
  float result = mod(c.x + c.y, 2.0);
  return sign(result);
}

float checker(const vec2 uv, const float repeats) {
  return checker(uv, vec2(repeats));
}
`,zo=`// Reference: https://advances.realtimerendering.com/s2014/index.html#_NEXT_GENERATION_POST

float interleavedGradientNoise(const vec2 coord) {
  const vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
  return fract(magic.z * fract(dot(coord, magic.xy)));
}
`,ko=`#if !defined(saturate)
#define saturate(a) clamp(a, 0.0, 1.0)
#endif // !defined(saturate)

float remap(const float x, const float min1, const float max1, const float min2, const float max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

vec2 remap(const vec2 x, const vec2 min1, const vec2 max1, const vec2 min2, const vec2 max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

vec3 remap(const vec3 x, const vec3 min1, const vec3 max1, const vec3 min2, const vec3 max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

vec4 remap(const vec4 x, const vec4 min1, const vec4 max1, const vec4 min2, const vec4 max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

float remapClamped(
  const float x,
  const float min1,
  const float max1,
  const float min2,
  const float max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

vec2 remapClamped(
  const vec2 x,
  const vec2 min1,
  const vec2 max1,
  const vec2 min2,
  const vec2 max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

vec3 remapClamped(
  const vec3 x,
  const vec3 min1,
  const vec3 max1,
  const vec3 min2,
  const vec3 max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

vec4 remapClamped(
  const vec4 x,
  const vec4 min1,
  const vec4 max1,
  const vec4 min2,
  const vec4 max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

// Implicitly remap to 0 and 1
float remap(const float x, const float min1, const float max1) {
  return (x - min1) / (max1 - min1);
}

vec2 remap(const vec2 x, const vec2 min1, const vec2 max1) {
  return (x - min1) / (max1 - min1);
}

vec3 remap(const vec3 x, const vec3 min1, const vec3 max1) {
  return (x - min1) / (max1 - min1);
}

vec4 remap(const vec4 x, const vec4 min1, const vec4 max1) {
  return (x - min1) / (max1 - min1);
}

float remapClamped(const float x, const float min1, const float max1) {
  return saturate((x - min1) / (max1 - min1));
}

vec2 remapClamped(const vec2 x, const vec2 min1, const vec2 max1) {
  return saturate((x - min1) / (max1 - min1));
}

vec3 remapClamped(const vec3 x, const vec3 min1, const vec3 max1) {
  return saturate((x - min1) / (max1 - min1));
}

vec4 remapClamped(const vec4 x, const vec4 min1, const vec4 max1) {
  return saturate((x - min1) / (max1 - min1));
}
`,Wo=`// Reference: https://jcgt.org/published/0003/02/01/paper.pdf

vec2 signNotZero(vec2 v) {
  return vec2(v.x >= 0.0 ? 1.0 : -1.0, v.y >= 0.0 ? 1.0 : -1.0);
}

vec2 packNormalToVec2(vec3 v) {
  vec2 p = v.xy * (1.0 / (abs(v.x) + abs(v.y) + abs(v.z)));
  return v.z <= 0.0
    ? (1.0 - abs(p.yx)) * signNotZero(p)
    : p;
}

vec3 unpackVec2ToNormal(vec2 e) {
  vec3 v = vec3(e.xy, 1.0 - abs(e.x) - abs(e.y));
  if (v.z < 0.0) {
    v.xy = (1.0 - abs(v.yx)) * signNotZero(v.xy);
  }
  return normalize(v);
}
`,Vo=`float raySphereFirstIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const float radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  float c = dot(a, a) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  return discriminant < 0.0
    ? -1.0
    : (-b - sqrt(discriminant)) * 0.5;
}

float raySphereFirstIntersection(const vec3 origin, const vec3 direction, const float radius) {
  return raySphereFirstIntersection(origin, direction, vec3(0.0), radius);
}

vec4 raySphereFirstIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const vec4 radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  vec4 c = dot(a, a) - radius * radius;
  vec4 discriminant = b * b - 4.0 * c;
  vec4 mask = step(discriminant, vec4(0.0));
  return mix((-b - sqrt(max(vec4(0.0), discriminant))) * 0.5, vec4(-1.0), mask);
}

vec4 raySphereFirstIntersection(const vec3 origin, const vec3 direction, const vec4 radius) {
  return raySphereFirstIntersection(origin, direction, vec3(0.0), radius);
}

float raySphereSecondIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const float radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  float c = dot(a, a) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  return discriminant < 0.0
    ? -1.0
    : (-b + sqrt(discriminant)) * 0.5;
}

float raySphereSecondIntersection(const vec3 origin, const vec3 direction, const float radius) {
  return raySphereSecondIntersection(origin, direction, vec3(0.0), radius);
}

vec4 raySphereSecondIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const vec4 radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  vec4 c = dot(a, a) - radius * radius;
  vec4 discriminant = b * b - 4.0 * c;
  vec4 mask = step(discriminant, vec4(0.0));
  return mix((-b + sqrt(max(vec4(0.0), discriminant))) * 0.5, vec4(-1.0), mask);
}

vec4 raySphereSecondIntersection(const vec3 origin, const vec3 direction, const vec4 radius) {
  return raySphereSecondIntersection(origin, direction, vec3(0.0), radius);
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const float radius,
  out float intersection1,
  out float intersection2
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  float c = dot(a, a) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  if (discriminant < 0.0) {
    intersection1 = -1.0;
    intersection2 = -1.0;
    return;
  } else {
    float Q = sqrt(discriminant);
    intersection1 = (-b - Q) * 0.5;
    intersection2 = (-b + Q) * 0.5;
  }
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const float radius,
  out float intersection1,
  out float intersection2
) {
  raySphereIntersections(origin, direction, vec3(0.0), radius, intersection1, intersection2);
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const vec4 radius,
  out vec4 intersection1,
  out vec4 intersection2
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  vec4 c = dot(a, a) - radius * radius;
  vec4 discriminant = b * b - 4.0 * c;
  vec4 mask = step(discriminant, vec4(0.0));
  vec4 Q = sqrt(max(vec4(0.0), discriminant));
  intersection1 = mix((-b - Q) * 0.5, vec4(-1.0), mask);
  intersection2 = mix((-b + Q) * 0.5, vec4(-1.0), mask);
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const vec4 radius,
  out vec4 intersection1,
  out vec4 intersection2
) {
  raySphereIntersections(origin, direction, vec3(0.0), radius, intersection1, intersection2);
}
`,Xo=`vec3 screenToView(
  const vec2 uv,
  const float depth,
  const float viewZ,
  const mat4 projectionMatrix,
  const mat4 inverseProjectionMatrix
) {
  vec4 clip = vec4(vec3(uv, depth) * 2.0 - 1.0, 1.0);
  float clipW = projectionMatrix[2][3] * viewZ + projectionMatrix[3][3];
  clip *= clipW;
  return (inverseProjectionMatrix * clip).xyz;
}
`,Yo=`// A fifth-order polynomial approximation of Turbo color map.
// See: https://observablehq.com/@mbostock/turbo
// prettier-ignore
vec3 turbo(const float x) {
  float r = 0.1357 + x * (4.5974 - x * (42.3277 - x * (130.5887 - x * (150.5666 - x * 58.1375))));
  float g = 0.0914 + x * (2.1856 + x * (4.8052 - x * (14.0195 - x * (4.2109 + x * 2.7747))));
  float b = 0.1067 + x * (12.5925 - x * (60.1097 - x * (109.0745 - x * (88.5066 - x * 26.8183))));
  return vec3(r, g, b);
}
`,$o=`// Reference: https://www.gamedev.net/tutorials/programming/graphics/contact-hardening-soft-shadows-made-fast-r4906/

vec2 vogelDisk(const int index, const int sampleCount, const float phi) {
  const float goldenAngle = 2.39996322972865332;
  float r = sqrt(float(index) + 0.5) / sqrt(float(sampleCount));
  float theta = float(index) * goldenAngle + phi;
  return r * vec2(cos(theta), sin(theta));
}
`,jo=Ho,qo=Fo,td=Bo,Ko=zo,Zo=ko,Qo=Wo,Jn=Vo,Jo=Xo,rd=Yo,ec=$o,ut=64,dt=16,hr=32,fr=128,pr=32,gr=8,Ke=gr*pr,Ze=fr,Qe=hr,lt=256,mt=64,er=1/1e3,tc=new f;function Ei(t,e,r,i){const n=r.projectOnSurface(t,tc);return n!=null?r.getOsculatingSphereCenter(n,e,i).negate():i.setScalar(0)}var rc="Invariant failed";function ic(t,e){if(!t)throw new Error(rc)}const cn=typeof window<"u"&&window.requestIdleCallback!=null?window.requestIdleCallback:function(t,e={}){const r=e.timeout??1,i=performance.now();return setTimeout(()=>{t({get didTimeout(){return e.timeout!=null?!1:performance.now()-i-1>r},timeRemaining(){return Math.max(0,1+(performance.now()-i))}})},1)},he=`// Based on: https://github.com/ebruneton/precomputed_atmospheric_scattering/blob/master/atmosphere/functions.glsl

/**
 * Copyright (c) 2017 Eric Bruneton
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Precomputed Atmospheric Scattering
 * Copyright (c) 2008 INRIA
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */

Number ClampCosine(const Number mu) {
  return clamp(mu, Number(-1.0), Number(1.0));
}

Length ClampDistance(const Length d) {
  return max(d, 0.0 * m);
}

Length ClampRadius(const AtmosphereParameters atmosphere, const Length r) {
  return clamp(r, atmosphere.bottom_radius, atmosphere.top_radius);
}

Length SafeSqrt(const Area a) {
  return sqrt(max(a, 0.0 * m2));
}

Length DistanceToTopAtmosphereBoundary(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  Area discriminant = r * r * (mu * mu - 1.0) +
      atmosphere.top_radius * atmosphere.top_radius;
  return ClampDistance(-r * mu + SafeSqrt(discriminant));
}

Length DistanceToBottomAtmosphereBoundary(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  Area discriminant = r * r * (mu * mu - 1.0) +
      atmosphere.bottom_radius * atmosphere.bottom_radius;
  return ClampDistance(-r * mu - SafeSqrt(discriminant));
}

bool RayIntersectsGround(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  return mu < 0.0 && r * r * (mu * mu - 1.0) +
      atmosphere.bottom_radius * atmosphere.bottom_radius >= 0.0 * m2;
}

Number GetTextureCoordFromUnitRange(const Number x, const int texture_size) {
  return 0.5 / Number(texture_size) + x * (1.0 - 1.0 / Number(texture_size));
}

vec2 GetTransmittanceTextureUvFromRMu(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  // Distance to top atmosphere boundary for a horizontal ray at ground level.
  Length H = sqrt(atmosphere.top_radius * atmosphere.top_radius -
      atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the horizon.
  Length rho =
      SafeSqrt(r * r - atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the top atmosphere boundary for the ray (r,mu), and its minimum
  // and maximum values over all mu - obtained for (r,1) and (r,mu_horizon).
  Length d = DistanceToTopAtmosphereBoundary(atmosphere, r, mu);
  Length d_min = atmosphere.top_radius - r;
  Length d_max = rho + H;
  Number x_mu = (d - d_min) / (d_max - d_min);
  Number x_r = rho / H;
  return vec2(GetTextureCoordFromUnitRange(x_mu, TRANSMITTANCE_TEXTURE_WIDTH),
              GetTextureCoordFromUnitRange(x_r, TRANSMITTANCE_TEXTURE_HEIGHT));
}

DimensionlessSpectrum GetTransmittanceToTopAtmosphereBoundary(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  vec2 uv = GetTransmittanceTextureUvFromRMu(atmosphere, r, mu);
  // @shotamatsuda: Added for the precomputation stage in half-float precision.
  #ifdef TRANSMITTANCE_PRECISION_LOG
  // Manually interpolate the transmittance instead of the optical depth.
  const vec2 size = vec2(TRANSMITTANCE_TEXTURE_WIDTH, TRANSMITTANCE_TEXTURE_HEIGHT);
  const vec3 texel_size = vec3(1.0 / size, 0.0);
  vec2 coord = (uv * size) - 0.5;
  vec2 i = (floor(coord) + 0.5) * texel_size.xy;
  vec2 f = fract(coord);
  vec4 t1 = exp(-texture(transmittance_texture, i));
  vec4 t2 = exp(-texture(transmittance_texture, i + texel_size.xz));
  vec4 t3 = exp(-texture(transmittance_texture, i + texel_size.zy));
  vec4 t4 = exp(-texture(transmittance_texture, i + texel_size.xy));
  return DimensionlessSpectrum(mix(mix(t1, t2, f.x), mix(t3, t4, f.x), f.y));
  #else // TRANSMITTANCE_PRECISION_LOG
  return DimensionlessSpectrum(texture(transmittance_texture, uv));
  #endif // TRANSMITTANCE_PRECISION_LOG
}

DimensionlessSpectrum GetTransmittance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu, const Length d,
    const bool ray_r_mu_intersects_ground) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  assert(d >= 0.0 * m);

  Length r_d = ClampRadius(atmosphere, sqrt(d * d + 2.0 * r * mu * d + r * r));
  Number mu_d = ClampCosine((r * mu + d) / r_d);

  if (ray_r_mu_intersects_ground) {
    return min(
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r_d, -mu_d) /
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r, -mu),
        DimensionlessSpectrum(1.0));
  } else {
    return min(
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r, mu) /
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r_d, mu_d),
        DimensionlessSpectrum(1.0));
  }
}

DimensionlessSpectrum GetTransmittanceToSun(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu_s) {
  Number sin_theta_h = atmosphere.bottom_radius / r;
  Number cos_theta_h = -sqrt(max(1.0 - sin_theta_h * sin_theta_h, 0.0));
  return GetTransmittanceToTopAtmosphereBoundary(
          atmosphere, transmittance_texture, r, mu_s) *
      smoothstep(-sin_theta_h * atmosphere.sun_angular_radius / rad,
                 sin_theta_h * atmosphere.sun_angular_radius / rad,
                 mu_s - cos_theta_h);
}

InverseSolidAngle RayleighPhaseFunction(const Number nu) {
  InverseSolidAngle k = 3.0 / (16.0 * PI * sr);
  return k * (1.0 + nu * nu);
}

InverseSolidAngle MiePhaseFunction(const Number g, const Number nu) {
  InverseSolidAngle k = 3.0 / (8.0 * PI * sr) * (1.0 - g * g) / (2.0 + g * g);
  return k * (1.0 + nu * nu) / pow(1.0 + g * g - 2.0 * g * nu, 1.5);
}

vec4 GetScatteringTextureUvwzFromRMuMuSNu(const AtmosphereParameters atmosphere,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  assert(mu_s >= -1.0 && mu_s <= 1.0);
  assert(nu >= -1.0 && nu <= 1.0);

  // Distance to top atmosphere boundary for a horizontal ray at ground level.
  Length H = sqrt(atmosphere.top_radius * atmosphere.top_radius -
      atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the horizon.
  Length rho =
      SafeSqrt(r * r - atmosphere.bottom_radius * atmosphere.bottom_radius);
  Number u_r = GetTextureCoordFromUnitRange(rho / H, SCATTERING_TEXTURE_R_SIZE);

  // Discriminant of the quadratic equation for the intersections of the ray
  // (r,mu) with the ground (see RayIntersectsGround).
  Length r_mu = r * mu;
  Area discriminant =
      r_mu * r_mu - r * r + atmosphere.bottom_radius * atmosphere.bottom_radius;
  Number u_mu;
  if (ray_r_mu_intersects_ground) {
    // Distance to the ground for the ray (r,mu), and its minimum and maximum
    // values over all mu - obtained for (r,-1) and (r,mu_horizon).
    Length d = -r_mu - SafeSqrt(discriminant);
    Length d_min = r - atmosphere.bottom_radius;
    Length d_max = rho;
    u_mu = 0.5 - 0.5 * GetTextureCoordFromUnitRange(d_max == d_min ? 0.0 :
        (d - d_min) / (d_max - d_min), SCATTERING_TEXTURE_MU_SIZE / 2);
  } else {
    // Distance to the top atmosphere boundary for the ray (r,mu), and its
    // minimum and maximum values over all mu - obtained for (r,1) and
    // (r,mu_horizon).
    Length d = -r_mu + SafeSqrt(discriminant + H * H);
    Length d_min = atmosphere.top_radius - r;
    Length d_max = rho + H;
    u_mu = 0.5 + 0.5 * GetTextureCoordFromUnitRange(
        (d - d_min) / (d_max - d_min), SCATTERING_TEXTURE_MU_SIZE / 2);
  }

  Length d = DistanceToTopAtmosphereBoundary(
      atmosphere, atmosphere.bottom_radius, mu_s);
  Length d_min = atmosphere.top_radius - atmosphere.bottom_radius;
  Length d_max = H;
  Number a = (d - d_min) / (d_max - d_min);
  Length D = DistanceToTopAtmosphereBoundary(
      atmosphere, atmosphere.bottom_radius, atmosphere.mu_s_min);
  Number A = (D - d_min) / (d_max - d_min);
  // An ad-hoc function equal to 0 for mu_s = mu_s_min (because then d = D and
  // thus a = A), equal to 1 for mu_s = 1 (because then d = d_min and thus
  // a = 0), and with a large slope around mu_s = 0, to get more texture
  // samples near the horizon.
  Number u_mu_s = GetTextureCoordFromUnitRange(
      max(1.0 - a / A, 0.0) / (1.0 + a), SCATTERING_TEXTURE_MU_S_SIZE);

  Number u_nu = (nu + 1.0) / 2.0;
  return vec4(u_nu, u_mu_s, u_mu, u_r);
}

vec2 GetIrradianceTextureUvFromRMuS(const AtmosphereParameters atmosphere,
    const Length r, const Number mu_s) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu_s >= -1.0 && mu_s <= 1.0);
  Number x_r = (r - atmosphere.bottom_radius) /
      (atmosphere.top_radius - atmosphere.bottom_radius);
  Number x_mu_s = mu_s * 0.5 + 0.5;
  return vec2(GetTextureCoordFromUnitRange(x_mu_s, IRRADIANCE_TEXTURE_WIDTH),
              GetTextureCoordFromUnitRange(x_r, IRRADIANCE_TEXTURE_HEIGHT));
}

IrradianceSpectrum GetIrradiance(
    const AtmosphereParameters atmosphere,
    const IrradianceTexture irradiance_texture,
    const Length r, const Number mu_s) {
  vec2 uv = GetIrradianceTextureUvFromRMuS(atmosphere, r, mu_s);
  return IrradianceSpectrum(texture(irradiance_texture, uv));
}
`,fe=`// Based on: https://github.com/ebruneton/precomputed_atmospheric_scattering/blob/master/atmosphere/definitions.glsl

/**
 * Copyright (c) 2017 Eric Bruneton
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */

#define assert(x)

#define Length float
#define Wavelength float
#define Angle float
#define SolidAngle float
#define Power float
#define LuminousPower float

#define Number float
#define InverseLength float
#define Area float
#define Volume float
#define NumberDensity float
#define Irradiance float
#define Radiance float
#define SpectralPower float
#define SpectralIrradiance float
#define SpectralRadiance float
#define SpectralRadianceDensity float
#define ScatteringCoefficient float
#define InverseSolidAngle float
#define LuminousIntensity float
#define Luminance float
#define Illuminance float

// A generic function from Wavelength to some other type.
#define AbstractSpectrum vec3
// A function from Wavelength to Number.
#define DimensionlessSpectrum vec3
// A function from Wavelength to SpectralPower.
#define PowerSpectrum vec3
// A function from Wavelength to SpectralIrradiance.
#define IrradianceSpectrum vec3
// A function from Wavelength to SpectralRadiance.
#define RadianceSpectrum vec3
// A function from Wavelength to SpectralRadianceDensity.
#define RadianceDensitySpectrum vec3
// A function from Wavelength to ScatteringCoefficient.
#define ScatteringSpectrum vec3

// A position in 3D (3 length values).
#define Position vec3
// A unit direction vector in 3D (3 unit-less values).
#define Direction vec3
// A vector of 3 luminance values.
#define Luminance3 vec3
// A vector of 3 illuminance values.
#define Illuminance3 vec3

#define TransmittanceTexture sampler2D
#define AbstractScatteringTexture sampler3D
#define ReducedScatteringTexture sampler3D
#define ScatteringTexture sampler3D
#define ScatteringDensityTexture sampler3D
#define IrradianceTexture sampler2D

const Length m = 1.0;
const Wavelength nm = 1.0;
const Angle rad = 1.0;
const SolidAngle sr = 1.0;
const Power watt = 1.0;
const LuminousPower lm = 1.0;

#if !defined(PI)
const float PI = 3.14159265358979323846;
#endif // !defined(PI)

const Length km = 1000.0 * m;
const Area m2 = m * m;
const Volume m3 = m * m * m;
const Angle pi = PI * rad;
const Angle deg = pi / 180.0;
const Irradiance watt_per_square_meter = watt / m2;
const Radiance watt_per_square_meter_per_sr = watt / (m2 * sr);
const SpectralIrradiance watt_per_square_meter_per_nm = watt / (m2 * nm);
const SpectralRadiance watt_per_square_meter_per_sr_per_nm = watt / (m2 * sr * nm);
const SpectralRadianceDensity watt_per_cubic_meter_per_sr_per_nm = watt / (m3 * sr * nm);
const LuminousIntensity cd = lm / sr;
const LuminousIntensity kcd = 1000.0 * cd;
const Luminance cd_per_square_meter = cd / m2;
const Luminance kcd_per_square_meter = kcd / m2;

struct DensityProfileLayer {
  Length width;
  Number exp_term;
  InverseLength exp_scale;
  InverseLength linear_term;
  Number constant_term;
};

struct DensityProfile {
  DensityProfileLayer layers[2];
};

// See AtmosphereParameter.ts for further details.
struct AtmosphereParameters {
  IrradianceSpectrum solar_irradiance;
  Angle sun_angular_radius;
  Length bottom_radius;
  Length top_radius;
  DensityProfile rayleigh_density;
  ScatteringSpectrum rayleigh_scattering;
  DensityProfile mie_density;
  ScatteringSpectrum mie_scattering;
  ScatteringSpectrum mie_extinction;
  Number mie_phase_function_g;
  DensityProfile absorption_density;
  ScatteringSpectrum absorption_extinction;
  DimensionlessSpectrum ground_albedo;
  Number mu_s_min;
};
`,Ri=`// Based on: https://github.com/ebruneton/precomputed_atmospheric_scattering/blob/master/atmosphere/functions.glsl

/**
 * Copyright (c) 2017 Eric Bruneton
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Precomputed Atmospheric Scattering
 * Copyright (c) 2008 INRIA
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifdef COMBINED_SCATTERING_TEXTURES
vec3 GetExtrapolatedSingleMieScattering(
    const AtmosphereParameters atmosphere, const vec4 scattering) {
  // Algebraically this can never be negative, but rounding errors can produce
  // that effect for sufficiently short view rays.
  // @shotamatsuda: Avoid division by infinitesimal values.
  // See https://github.com/takram-design-engineering/three-geospatial/issues/47
  if (scattering.r < 1e-5) {
    return vec3(0.0);
  }
  return scattering.rgb * scattering.a / scattering.r *
	    (atmosphere.rayleigh_scattering.r / atmosphere.mie_scattering.r) *
	    (atmosphere.mie_scattering / atmosphere.rayleigh_scattering);
}
#endif // COMBINED_SCATTERING_TEXTURES

IrradianceSpectrum GetCombinedScattering(
    const AtmosphereParameters atmosphere,
    const ReducedScatteringTexture scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground,
    out IrradianceSpectrum single_mie_scattering) {
  vec4 uvwz = GetScatteringTextureUvwzFromRMuMuSNu(
      atmosphere, r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  Number tex_coord_x = uvwz.x * Number(SCATTERING_TEXTURE_NU_SIZE - 1);
  Number tex_x = floor(tex_coord_x);
  Number lerp = tex_coord_x - tex_x;
  vec3 uvw0 = vec3((tex_x + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
  vec3 uvw1 = vec3((tex_x + 1.0 + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
#ifdef COMBINED_SCATTERING_TEXTURES
  vec4 combined_scattering =
      texture(scattering_texture, uvw0) * (1.0 - lerp) +
      texture(scattering_texture, uvw1) * lerp;
  IrradianceSpectrum scattering = IrradianceSpectrum(combined_scattering);
  single_mie_scattering =
      GetExtrapolatedSingleMieScattering(atmosphere, combined_scattering);
#else // COMBINED_SCATTERING_TEXTURES
  IrradianceSpectrum scattering = IrradianceSpectrum(
      texture(scattering_texture, uvw0) * (1.0 - lerp) +
      texture(scattering_texture, uvw1) * lerp);
  single_mie_scattering = IrradianceSpectrum(
      texture(single_mie_scattering_texture, uvw0) * (1.0 - lerp) +
      texture(single_mie_scattering_texture, uvw1) * lerp);
#endif // COMBINED_SCATTERING_TEXTURES
  return scattering;
}

// @shotamatsuda: Added for reading higher-order scattering texture.
#ifdef HAS_HIGHER_ORDER_SCATTERING_TEXTURE
IrradianceSpectrum GetScattering(
    const AtmosphereParameters atmosphere,
    const ReducedScatteringTexture scattering_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground) {
  vec4 uvwz = GetScatteringTextureUvwzFromRMuMuSNu(
      atmosphere, r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  Number tex_coord_x = uvwz.x * Number(SCATTERING_TEXTURE_NU_SIZE - 1);
  Number tex_x = floor(tex_coord_x);
  Number lerp = tex_coord_x - tex_x;
  vec3 uvw0 = vec3((tex_x + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
  vec3 uvw1 = vec3((tex_x + 1.0 + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
  IrradianceSpectrum scattering = IrradianceSpectrum(
      texture(scattering_texture, uvw0) * (1.0 - lerp) +
      texture(scattering_texture, uvw1) * lerp);
  return scattering;
}
#endif // HAS_HIGHER_ORDER_SCATTERING_TEXTURE

RadianceSpectrum GetSkyRadiance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const ReducedScatteringTexture scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    Position camera, const Direction view_ray, const Length shadow_length,
    const Direction sun_direction,
    out DimensionlessSpectrum transmittance) {
  // Compute the distance to the top atmosphere boundary along the view ray,
  // assuming the viewer is in space (or NaN if the view ray does not intersect
  // the atmosphere).
  Length r = length(camera);
  Length rmu = dot(camera, view_ray);
  // @shotamatsuda: Use SafeSqrt instead.
  // See: https://github.com/takram-design-engineering/three-geospatial/pull/26
  Length distance_to_top_atmosphere_boundary = -rmu -
      SafeSqrt(rmu * rmu - r * r +
          atmosphere.top_radius * atmosphere.top_radius);
  // If the viewer is in space and the view ray intersects the atmosphere, move
  // the viewer to the top atmosphere boundary (along the view ray):
  if (distance_to_top_atmosphere_boundary > 0.0 * m) {
    camera = camera + view_ray * distance_to_top_atmosphere_boundary;
    r = atmosphere.top_radius;
    rmu += distance_to_top_atmosphere_boundary;
  } else if (r > atmosphere.top_radius) {
    // If the view ray does not intersect the atmosphere, simply return 0.
    transmittance = DimensionlessSpectrum(1.0);
    return RadianceSpectrum(0.0 * watt_per_square_meter_per_sr_per_nm);
  }
  // Compute the r, mu, mu_s and nu parameters needed for the texture lookups.
  Number mu = rmu / r;
  Number mu_s = dot(camera, sun_direction) / r;
  Number nu = dot(view_ray, sun_direction);

  // @shotamatsuda: For rendering points below the bottom atmosphere.
  #ifdef GROUND
  bool ray_r_mu_intersects_ground = RayIntersectsGround(atmosphere, r, mu);
  #else // GROUND
  bool ray_r_mu_intersects_ground = false;
  #endif // GROUND

  transmittance = ray_r_mu_intersects_ground ? DimensionlessSpectrum(0.0) :
      GetTransmittanceToTopAtmosphereBoundary(
          atmosphere, transmittance_texture, r, mu);
  IrradianceSpectrum single_mie_scattering;
  IrradianceSpectrum scattering;
  if (shadow_length == 0.0 * m) {
    scattering = GetCombinedScattering(
        atmosphere, scattering_texture, single_mie_scattering_texture,
        r, mu, mu_s, nu, ray_r_mu_intersects_ground,
        single_mie_scattering);
  } else {
    // Case of light shafts (shadow_length is the total length noted l in our
    // paper): we omit the scattering between the camera and the point at
    // distance l, by implementing Eq. (18) of the paper (shadow_transmittance
    // is the T(x,x_s) term, scattering is the S|x_s=x+lv term).
    Length d = shadow_length;
    Length r_p =
        ClampRadius(atmosphere, sqrt(d * d + 2.0 * r * mu * d + r * r));
    Number mu_p = (r * mu + d) / r_p;
    Number mu_s_p = (r * mu_s + d * nu) / r_p;

    scattering = GetCombinedScattering(
        atmosphere, scattering_texture, single_mie_scattering_texture,
        r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground,
        single_mie_scattering);
    DimensionlessSpectrum shadow_transmittance =
        GetTransmittance(atmosphere, transmittance_texture,
            r, mu, shadow_length, ray_r_mu_intersects_ground);
    // @shotamatsuda: Occlude only single Rayleigh scattering by the shadow.
#ifdef HAS_HIGHER_ORDER_SCATTERING_TEXTURE
    IrradianceSpectrum higher_order_scattering = GetScattering(
        atmosphere, higher_order_scattering_texture,
        r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground);
    IrradianceSpectrum single_scattering = scattering - higher_order_scattering;
    scattering = single_scattering * shadow_transmittance + higher_order_scattering;
#else // HAS_HIGHER_ORDER_SCATTERING_TEXTURE
    scattering = scattering * shadow_transmittance;
#endif // HAS_HIGHER_ORDER_SCATTERING_TEXTURE
    single_mie_scattering = single_mie_scattering * shadow_transmittance;
  }
  return scattering * RayleighPhaseFunction(nu) + single_mie_scattering *
      MiePhaseFunction(atmosphere.mie_phase_function_g, nu);
}

// @shotamatsuda: Returns the point on the ray closest to the origin.
vec3 ClosestPointOnRay(const Position camera, const Position point) {
  Position ray = point - camera;
  Number t = clamp(-dot(camera, ray) / dot(ray, ray), 0.0, 1.0);
  return camera + t * ray;
}

vec2 RaySphereIntersections(
    const Position camera, const Direction direction, const Length radius) {
  float b = 2.0 * dot(direction, camera);
  float c = dot(camera, camera) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  float Q = sqrt(discriminant);
  return vec2(-b - Q, -b + Q) * 0.5;
}

// @shotamatsuda: Clip the view ray at the bottom atmosphere boundary.
bool ClipAtBottomAtmosphere(
    const AtmosphereParameters atmosphere,
    const Direction view_ray, inout Position camera, inout Position point) {
  const Length eps = 0.0;
  Length bottom_radius = atmosphere.bottom_radius + eps;
  Length r_camera = length(camera);
  Length r_point = length(point);
  bool camera_below = r_camera < bottom_radius;
  bool point_below = r_point < bottom_radius;

  vec2 t = RaySphereIntersections(camera, view_ray, bottom_radius);
  Position intersection = camera + view_ray * (camera_below ? t.y : t.x);
  camera = camera_below ? intersection : camera;
  point = point_below ? intersection : point;

  return camera_below && point_below;
}

RadianceSpectrum GetSkyRadianceToPoint(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const ReducedScatteringTexture scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    Position camera, Position point, const Length shadow_length,
    const Direction sun_direction, out DimensionlessSpectrum transmittance) {
  // @shotamatsuda: Avoid artifacts when the ray does not intersect the top
  // atmosphere boundary.
  if (length(ClosestPointOnRay(camera, point)) > atmosphere.top_radius) {
    transmittance = vec3(1.0);
    return vec3(0.0);
  }

  Direction view_ray = normalize(point - camera);
  if (ClipAtBottomAtmosphere(atmosphere, view_ray, camera, point)) {
    transmittance = vec3(1.0);
    return vec3(0.0);
  }

  // Compute the distance to the top atmosphere boundary along the view ray,
  // assuming the viewer is in space (or NaN if the view ray does not intersect
  // the atmosphere).
  Length r = length(camera);
  Length rmu = dot(camera, view_ray);
  // @shotamatsuda: Use SafeSqrt instead.
  // See: https://github.com/takram-design-engineering/three-geospatial/pull/26
  Length distance_to_top_atmosphere_boundary = -rmu -
      SafeSqrt(rmu * rmu - r * r +
          atmosphere.top_radius * atmosphere.top_radius);
  // If the viewer is in space and the view ray intersects the atmosphere, move
  // the viewer to the top atmosphere boundary (along the view ray):
  if (distance_to_top_atmosphere_boundary > 0.0 * m) {
    camera = camera + view_ray * distance_to_top_atmosphere_boundary;
    r = atmosphere.top_radius;
    rmu += distance_to_top_atmosphere_boundary;
  }

  // Compute the r, mu, mu_s and nu parameters for the first texture lookup.
  Number mu = rmu / r;
  Number mu_s = dot(camera, sun_direction) / r;
  Number nu = dot(view_ray, sun_direction);
  Length d = length(point - camera);
  bool ray_r_mu_intersects_ground = RayIntersectsGround(atmosphere, r, mu);

  // @shotamatsuda: Hack to avoid rendering artifacts near the horizon, due to
  // finite atmosphere texture resolution and finite floating point precision.
  // See: https://github.com/ebruneton/precomputed_atmospheric_scattering/pull/32
  if (!ray_r_mu_intersects_ground) {
    Number mu_horizon = -SafeSqrt(1.0 -
        (atmosphere.bottom_radius * atmosphere.bottom_radius) / (r * r));
    const Number eps = 0.004;
    mu = max(mu, mu_horizon + eps);
  }

  transmittance = GetTransmittance(atmosphere, transmittance_texture,
      r, mu, d, ray_r_mu_intersects_ground);

  IrradianceSpectrum single_mie_scattering;
  IrradianceSpectrum scattering = GetCombinedScattering(
      atmosphere, scattering_texture, single_mie_scattering_texture,
      r, mu, mu_s, nu, ray_r_mu_intersects_ground,
      single_mie_scattering);

  // Compute the r, mu, mu_s and nu parameters for the second texture lookup.
  // If shadow_length is not 0 (case of light shafts), we want to ignore the
  // scattering along the last shadow_length meters of the view ray, which we
  // do by subtracting shadow_length from d (this way scattering_p is equal to
  // the S|x_s=x_0-lv term in Eq. (17) of our paper).
  d = max(d - shadow_length, 0.0 * m);
  Length r_p = ClampRadius(atmosphere, sqrt(d * d + 2.0 * r * mu * d + r * r));
  Number mu_p = (r * mu + d) / r_p;
  Number mu_s_p = (r * mu_s + d * nu) / r_p;

  IrradianceSpectrum single_mie_scattering_p;
  IrradianceSpectrum scattering_p = GetCombinedScattering(
      atmosphere, scattering_texture, single_mie_scattering_texture,
      r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground,
      single_mie_scattering_p);

  // Combine the lookup results to get the scattering between camera and point.
  DimensionlessSpectrum shadow_transmittance = transmittance;
  if (shadow_length > 0.0 * m) {
    // This is the T(x,x_s) term in Eq. (17) of our paper, for light shafts.
    shadow_transmittance = GetTransmittance(atmosphere, transmittance_texture,
        r, mu, d, ray_r_mu_intersects_ground);
  }
  // @shotamatsuda: Occlude only single Rayleigh scattering by the shadow.
#ifdef HAS_HIGHER_ORDER_SCATTERING_TEXTURE
  IrradianceSpectrum higher_order_scattering = GetScattering(
      atmosphere, higher_order_scattering_texture,
      r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  IrradianceSpectrum single_scattering = scattering - higher_order_scattering;
  IrradianceSpectrum higher_order_scattering_p = GetScattering(
      atmosphere, higher_order_scattering_texture,
      r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground);
  IrradianceSpectrum single_scattering_p =
      scattering_p - higher_order_scattering_p;
  scattering =
      single_scattering - shadow_transmittance * single_scattering_p +
      higher_order_scattering - transmittance * higher_order_scattering_p;
#else // HAS_HIGHER_ORDER_SCATTERING_TEXTURE
  scattering = scattering - shadow_transmittance * scattering_p;
#endif // HAS_HIGHER_ORDER_SCATTERING_TEXTURE

  single_mie_scattering =
      single_mie_scattering - shadow_transmittance * single_mie_scattering_p;
#ifdef COMBINED_SCATTERING_TEXTURES
  single_mie_scattering = GetExtrapolatedSingleMieScattering(
      atmosphere, vec4(scattering, single_mie_scattering.r));
#endif // COMBINED_SCATTERING_TEXTURES

  // Hack to avoid rendering artifacts when the sun is below the horizon.
  single_mie_scattering = single_mie_scattering *
      smoothstep(Number(0.0), Number(0.01), mu_s);

  return scattering * RayleighPhaseFunction(nu) + single_mie_scattering *
      MiePhaseFunction(atmosphere.mie_phase_function_g, nu);
}

IrradianceSpectrum GetSunAndSkyIrradiance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const IrradianceTexture irradiance_texture,
    const Position point, const Direction normal, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  Length r = length(point);
  Number mu_s = dot(point, sun_direction) / r;

  // Indirect irradiance (approximated if the surface is not horizontal).
  sky_irradiance = GetIrradiance(atmosphere, irradiance_texture, r, mu_s) *
      (1.0 + dot(normal, point) / r) * 0.5;

  // Direct irradiance.
  return atmosphere.solar_irradiance *
      GetTransmittanceToSun(
          atmosphere, transmittance_texture, r, mu_s) *
      max(dot(normal, sun_direction), 0.0);
}

// @shotamatsuda: Added for the clouds.
IrradianceSpectrum GetSunAndSkyScalarIrradiance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const IrradianceTexture irradiance_texture,
    const Position point, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  Length r = length(point);
  Number mu_s = dot(point, sun_direction) / r;

  // Indirect irradiance. Integral over sphere yields 2π.
  sky_irradiance = GetIrradiance(atmosphere, irradiance_texture, r, mu_s) *
      2.0 * PI;

  // Direct irradiance. Omit the cosine term.
  return atmosphere.solar_irradiance *
      GetTransmittanceToSun(atmosphere, transmittance_texture, r, mu_s);
}

Luminance3 GetSolarLuminance() {
  return ATMOSPHERE.solar_irradiance /
      (PI * ATMOSPHERE.sun_angular_radius * ATMOSPHERE.sun_angular_radius) *
      SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

Luminance3 GetSkyLuminance(
    const Position camera, Direction view_ray, const Length shadow_length,
    const Direction sun_direction, out DimensionlessSpectrum transmittance) {
  return GetSkyRadiance(ATMOSPHERE, transmittance_texture,
      scattering_texture, single_mie_scattering_texture,
      camera, view_ray, shadow_length, sun_direction,
      transmittance) * SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

Luminance3 GetSkyLuminanceToPoint(
    const Position camera, const Position point, const Length shadow_length,
    const Direction sun_direction, out DimensionlessSpectrum transmittance) {
  return GetSkyRadianceToPoint(ATMOSPHERE, transmittance_texture,
      scattering_texture, single_mie_scattering_texture,
      camera, point, shadow_length, sun_direction, transmittance) *
      SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

Illuminance3 GetSunAndSkyIlluminance(
    const Position p, const Direction normal, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  IrradianceSpectrum sun_irradiance = GetSunAndSkyIrradiance(
      ATMOSPHERE, transmittance_texture, irradiance_texture, p, normal,
      sun_direction, sky_irradiance);
  sky_irradiance *= SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
  return sun_irradiance * SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

// @shotamatsuda: Added for the clouds.
Illuminance3 GetSunAndSkyScalarIlluminance(
    const Position p, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  IrradianceSpectrum sun_irradiance = GetSunAndSkyScalarIrradiance(
      ATMOSPHERE, transmittance_texture, irradiance_texture, p,
      sun_direction, sky_irradiance);
  sky_irradiance *= SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
  return sun_irradiance * SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

#define GetSolarRadiance GetSolarLuminance
#define GetSkyRadiance GetSkyLuminance
#define GetSkyRadianceToPoint GetSkyLuminanceToPoint
#define GetSunAndSkyIrradiance GetSunAndSkyIlluminance
#define GetSunAndSkyScalarIrradiance GetSunAndSkyScalarIlluminance
`,ze=`// Based on: https://github.com/ebruneton/precomputed_atmospheric_scattering/blob/master/atmosphere/functions.glsl

/**
 * Copyright (c) 2017 Eric Bruneton
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Precomputed Atmospheric Scattering
 * Copyright (c) 2008 INRIA
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */

Number GetLayerDensity(const DensityProfileLayer layer, const Length altitude) {
  Number density = layer.exp_term * exp(layer.exp_scale * altitude) +
      layer.linear_term * altitude + layer.constant_term;
  return clamp(density, Number(0.0), Number(1.0));
}

Number GetProfileDensity(const DensityProfile profile, const Length altitude) {
  DensityProfileLayer layers[2] = profile.layers;
  return altitude < layers[0].width
    ? GetLayerDensity(layers[0], altitude)
    : GetLayerDensity(layers[1], altitude);
}

Length ComputeOpticalLengthToTopAtmosphereBoundary(
    const AtmosphereParameters atmosphere, const DensityProfile profile,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  // Number of intervals for the numerical integration.
  const int SAMPLE_COUNT = 500;
  // The integration step, i.e. the length of each integration interval.
  Length dx =
      DistanceToTopAtmosphereBoundary(atmosphere, r, mu) / Number(SAMPLE_COUNT);
  // Integration loop.
  Length result = 0.0 * m;
  for (int i = 0; i <= SAMPLE_COUNT; ++i) {
    Length d_i = Number(i) * dx;
    // Distance between the current sample point and the planet center.
    Length r_i = sqrt(d_i * d_i + 2.0 * r * mu * d_i + r * r);
    // Number density at the current sample point (divided by the number density
    // at the bottom of the atmosphere, yielding a dimensionless number).
    Number y_i = GetProfileDensity(profile, r_i - atmosphere.bottom_radius);
    // Sample weight (from the trapezoidal rule).
    Number weight_i = i == 0 || i == SAMPLE_COUNT ? 0.5 : 1.0;
    result += y_i * weight_i * dx;
  }
  return result;
}

DimensionlessSpectrum ComputeTransmittanceToTopAtmosphereBoundary(
    const AtmosphereParameters atmosphere, const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  vec3 optical_depth = (
      atmosphere.rayleigh_scattering *
          ComputeOpticalLengthToTopAtmosphereBoundary(
              atmosphere, atmosphere.rayleigh_density, r, mu) +
      atmosphere.mie_extinction *
          ComputeOpticalLengthToTopAtmosphereBoundary(
              atmosphere, atmosphere.mie_density, r, mu) +
      atmosphere.absorption_extinction *
          ComputeOpticalLengthToTopAtmosphereBoundary(
              atmosphere, atmosphere.absorption_density, r, mu));
  // @shotamatsuda: Added for the precomputation stage in half-float precision.
  #ifdef TRANSMITTANCE_PRECISION_LOG
  return optical_depth;
  #else // TRANSMITTANCE_PRECISION_LOG
  return exp(-optical_depth);
  #endif // TRANSMITTANCE_PRECISION_LOG
}

Number GetUnitRangeFromTextureCoord(const Number u, const int texture_size) {
  return (u - 0.5 / Number(texture_size)) / (1.0 - 1.0 / Number(texture_size));
}

void GetRMuFromTransmittanceTextureUv(const AtmosphereParameters atmosphere,
    const vec2 uv, out Length r, out Number mu) {
  assert(uv.x >= 0.0 && uv.x <= 1.0);
  assert(uv.y >= 0.0 && uv.y <= 1.0);
  Number x_mu = GetUnitRangeFromTextureCoord(uv.x, TRANSMITTANCE_TEXTURE_WIDTH);
  Number x_r = GetUnitRangeFromTextureCoord(uv.y, TRANSMITTANCE_TEXTURE_HEIGHT);
  // Distance to top atmosphere boundary for a horizontal ray at ground level.
  Length H = sqrt(atmosphere.top_radius * atmosphere.top_radius -
      atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the horizon, from which we can compute r:
  Length rho = H * x_r;
  r = sqrt(rho * rho + atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the top atmosphere boundary for the ray (r,mu), and its minimum
  // and maximum values over all mu - obtained for (r,1) and (r,mu_horizon) -
  // from which we can recover mu:
  Length d_min = atmosphere.top_radius - r;
  Length d_max = rho + H;
  Length d = d_min + x_mu * (d_max - d_min);
  mu = d == 0.0 * m ? Number(1.0) : (H * H - rho * rho - d * d) / (2.0 * r * d);
  mu = ClampCosine(mu);
}

DimensionlessSpectrum ComputeTransmittanceToTopAtmosphereBoundaryTexture(
    const AtmosphereParameters atmosphere, const vec2 frag_coord) {
  const vec2 TRANSMITTANCE_TEXTURE_SIZE =
      vec2(TRANSMITTANCE_TEXTURE_WIDTH, TRANSMITTANCE_TEXTURE_HEIGHT);
  Length r;
  Number mu;
  GetRMuFromTransmittanceTextureUv(
      atmosphere, frag_coord / TRANSMITTANCE_TEXTURE_SIZE, r, mu);
  return ComputeTransmittanceToTopAtmosphereBoundary(atmosphere, r, mu);
}

void ComputeSingleScatteringIntegrand(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const Length d, const bool ray_r_mu_intersects_ground,
    out DimensionlessSpectrum rayleigh, out DimensionlessSpectrum mie) {
  Length r_d = ClampRadius(atmosphere, sqrt(d * d + 2.0 * r * mu * d + r * r));
  Number mu_s_d = ClampCosine((r * mu_s + d * nu) / r_d);
  DimensionlessSpectrum transmittance =
      GetTransmittance(
          atmosphere, transmittance_texture, r, mu, d,
          ray_r_mu_intersects_ground) *
      GetTransmittanceToSun(
          atmosphere, transmittance_texture, r_d, mu_s_d);
  rayleigh = transmittance * GetProfileDensity(
      atmosphere.rayleigh_density, r_d - atmosphere.bottom_radius);
  mie = transmittance * GetProfileDensity(
      atmosphere.mie_density, r_d - atmosphere.bottom_radius);
}

Length DistanceToNearestAtmosphereBoundary(const AtmosphereParameters atmosphere,
    Length r, Number mu, bool ray_r_mu_intersects_ground) {
  if (ray_r_mu_intersects_ground) {
    return DistanceToBottomAtmosphereBoundary(atmosphere, r, mu);
  } else {
    return DistanceToTopAtmosphereBoundary(atmosphere, r, mu);
  }
}

void ComputeSingleScattering(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground,
    out IrradianceSpectrum rayleigh, out IrradianceSpectrum mie) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  assert(mu_s >= -1.0 && mu_s <= 1.0);
  assert(nu >= -1.0 && nu <= 1.0);

  // Number of intervals for the numerical integration.
  const int SAMPLE_COUNT = 50;
  // The integration step, i.e. the length of each integration interval.
  Length dx =
      DistanceToNearestAtmosphereBoundary(atmosphere, r, mu,
          ray_r_mu_intersects_ground) / Number(SAMPLE_COUNT);
  // Integration loop.
  DimensionlessSpectrum rayleigh_sum = DimensionlessSpectrum(0.0);
  DimensionlessSpectrum mie_sum = DimensionlessSpectrum(0.0);
  for (int i = 0; i <= SAMPLE_COUNT; ++i) {
    Length d_i = Number(i) * dx;
    // The Rayleigh and Mie single scattering at the current sample point.
    DimensionlessSpectrum rayleigh_i;
    DimensionlessSpectrum mie_i;
    ComputeSingleScatteringIntegrand(atmosphere, transmittance_texture,
        r, mu, mu_s, nu, d_i, ray_r_mu_intersects_ground, rayleigh_i, mie_i);
    // Sample weight (from the trapezoidal rule).
    Number weight_i = (i == 0 || i == SAMPLE_COUNT) ? 0.5 : 1.0;
    rayleigh_sum += rayleigh_i * weight_i;
    mie_sum += mie_i * weight_i;
  }
  rayleigh = rayleigh_sum * dx * atmosphere.solar_irradiance *
      atmosphere.rayleigh_scattering;
  mie = mie_sum * dx * atmosphere.solar_irradiance * atmosphere.mie_scattering;
}

void GetRMuMuSNuFromScatteringTextureUvwz(const AtmosphereParameters atmosphere,
    const vec4 uvwz, out Length r, out Number mu, out Number mu_s,
    out Number nu, out bool ray_r_mu_intersects_ground) {
  assert(uvwz.x >= 0.0 && uvwz.x <= 1.0);
  assert(uvwz.y >= 0.0 && uvwz.y <= 1.0);
  assert(uvwz.z >= 0.0 && uvwz.z <= 1.0);
  assert(uvwz.w >= 0.0 && uvwz.w <= 1.0);

  // Distance to top atmosphere boundary for a horizontal ray at ground level.
  Length H = sqrt(atmosphere.top_radius * atmosphere.top_radius -
      atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the horizon.
  Length rho =
      H * GetUnitRangeFromTextureCoord(uvwz.w, SCATTERING_TEXTURE_R_SIZE);
  r = sqrt(rho * rho + atmosphere.bottom_radius * atmosphere.bottom_radius);

  if (uvwz.z < 0.5) {
    // Distance to the ground for the ray (r,mu), and its minimum and maximum
    // values over all mu - obtained for (r,-1) and (r,mu_horizon) - from which
    // we can recover mu:
    Length d_min = r - atmosphere.bottom_radius;
    Length d_max = rho;
    Length d = d_min + (d_max - d_min) * GetUnitRangeFromTextureCoord(
        1.0 - 2.0 * uvwz.z, SCATTERING_TEXTURE_MU_SIZE / 2);
    mu = d == 0.0 * m ? Number(-1.0) :
        ClampCosine(-(rho * rho + d * d) / (2.0 * r * d));
    ray_r_mu_intersects_ground = true;
  } else {
    // Distance to the top atmosphere boundary for the ray (r,mu), and its
    // minimum and maximum values over all mu - obtained for (r,1) and
    // (r,mu_horizon) - from which we can recover mu:
    Length d_min = atmosphere.top_radius - r;
    Length d_max = rho + H;
    Length d = d_min + (d_max - d_min) * GetUnitRangeFromTextureCoord(
        2.0 * uvwz.z - 1.0, SCATTERING_TEXTURE_MU_SIZE / 2);
    mu = d == 0.0 * m ? Number(1.0) :
        ClampCosine((H * H - rho * rho - d * d) / (2.0 * r * d));
    ray_r_mu_intersects_ground = false;
  }

  Number x_mu_s =
      GetUnitRangeFromTextureCoord(uvwz.y, SCATTERING_TEXTURE_MU_S_SIZE);
  Length d_min = atmosphere.top_radius - atmosphere.bottom_radius;
  Length d_max = H;
  Length D = DistanceToTopAtmosphereBoundary(
      atmosphere, atmosphere.bottom_radius, atmosphere.mu_s_min);
  Number A = (D - d_min) / (d_max - d_min);
  Number a = (A - x_mu_s * A) / (1.0 + x_mu_s * A);
  Length d = d_min + min(a, A) * (d_max - d_min);
  mu_s = d == 0.0 * m ? Number(1.0) :
     ClampCosine((H * H - d * d) / (2.0 * atmosphere.bottom_radius * d));

  nu = ClampCosine(uvwz.x * 2.0 - 1.0);
}

void GetRMuMuSNuFromScatteringTextureFragCoord(
    const AtmosphereParameters atmosphere, const vec3 frag_coord,
    out Length r, out Number mu, out Number mu_s, out Number nu,
    out bool ray_r_mu_intersects_ground) {
  const vec4 SCATTERING_TEXTURE_SIZE = vec4(
      SCATTERING_TEXTURE_NU_SIZE - 1,
      SCATTERING_TEXTURE_MU_S_SIZE,
      SCATTERING_TEXTURE_MU_SIZE,
      SCATTERING_TEXTURE_R_SIZE);
  Number frag_coord_nu =
      floor(frag_coord.x / Number(SCATTERING_TEXTURE_MU_S_SIZE));
  Number frag_coord_mu_s =
      mod(frag_coord.x, Number(SCATTERING_TEXTURE_MU_S_SIZE));
  vec4 uvwz =
      vec4(frag_coord_nu, frag_coord_mu_s, frag_coord.y, frag_coord.z) /
          SCATTERING_TEXTURE_SIZE;
  GetRMuMuSNuFromScatteringTextureUvwz(
      atmosphere, uvwz, r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  // Clamp nu to its valid range of values, given mu and mu_s.
  nu = clamp(nu, mu * mu_s - sqrt((1.0 - mu * mu) * (1.0 - mu_s * mu_s)),
      mu * mu_s + sqrt((1.0 - mu * mu) * (1.0 - mu_s * mu_s)));
}

void ComputeSingleScatteringTexture(const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture, const vec3 frag_coord,
    out IrradianceSpectrum rayleigh, out IrradianceSpectrum mie) {
  Length r;
  Number mu;
  Number mu_s;
  Number nu;
  bool ray_r_mu_intersects_ground;
  GetRMuMuSNuFromScatteringTextureFragCoord(atmosphere, frag_coord,
      r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  ComputeSingleScattering(atmosphere, transmittance_texture,
      r, mu, mu_s, nu, ray_r_mu_intersects_ground, rayleigh, mie);
}

AbstractSpectrum GetScattering(
    const AtmosphereParameters atmosphere,
    const AbstractScatteringTexture scattering_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground) {
  vec4 uvwz = GetScatteringTextureUvwzFromRMuMuSNu(
      atmosphere, r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  Number tex_coord_x = uvwz.x * Number(SCATTERING_TEXTURE_NU_SIZE - 1);
  Number tex_x = floor(tex_coord_x);
  Number lerp = tex_coord_x - tex_x;
  vec3 uvw0 = vec3((tex_x + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
  vec3 uvw1 = vec3((tex_x + 1.0 + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
  return AbstractSpectrum(texture(scattering_texture, uvw0) * (1.0 - lerp) +
      texture(scattering_texture, uvw1) * lerp);
}

RadianceSpectrum GetScattering(
    const AtmosphereParameters atmosphere,
    const ReducedScatteringTexture single_rayleigh_scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    const ScatteringTexture multiple_scattering_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground,
    const int scattering_order) {
  if (scattering_order == 1) {
    IrradianceSpectrum rayleigh = GetScattering(
        atmosphere, single_rayleigh_scattering_texture, r, mu, mu_s, nu,
        ray_r_mu_intersects_ground);
    IrradianceSpectrum mie = GetScattering(
        atmosphere, single_mie_scattering_texture, r, mu, mu_s, nu,
        ray_r_mu_intersects_ground);
    return rayleigh * RayleighPhaseFunction(nu) +
        mie * MiePhaseFunction(atmosphere.mie_phase_function_g, nu);
  } else {
    return GetScattering(
        atmosphere, multiple_scattering_texture, r, mu, mu_s, nu,
        ray_r_mu_intersects_ground);
  }
}

IrradianceSpectrum GetIrradiance(
    const AtmosphereParameters atmosphere,
    const IrradianceTexture irradiance_texture,
    const Length r, const Number mu_s);

RadianceDensitySpectrum ComputeScatteringDensity(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const ReducedScatteringTexture single_rayleigh_scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    const ScatteringTexture multiple_scattering_texture,
    const IrradianceTexture irradiance_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const int scattering_order) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  assert(mu_s >= -1.0 && mu_s <= 1.0);
  assert(nu >= -1.0 && nu <= 1.0);
  assert(scattering_order >= 2);

  // Compute unit direction vectors for the zenith, the view direction omega and
  // and the sun direction omega_s, such that the cosine of the view-zenith
  // angle is mu, the cosine of the sun-zenith angle is mu_s, and the cosine of
  // the view-sun angle is nu. The goal is to simplify computations below.
  vec3 zenith_direction = vec3(0.0, 0.0, 1.0);
  vec3 omega = vec3(sqrt(1.0 - mu * mu), 0.0, mu);
  Number sun_dir_x = omega.x == 0.0 ? 0.0 : (nu - mu * mu_s) / omega.x;
  Number sun_dir_y = sqrt(max(1.0 - sun_dir_x * sun_dir_x - mu_s * mu_s, 0.0));
  vec3 omega_s = vec3(sun_dir_x, sun_dir_y, mu_s);

  const int SAMPLE_COUNT = 16;
  const Angle dphi = pi / Number(SAMPLE_COUNT);
  const Angle dtheta = pi / Number(SAMPLE_COUNT);
  RadianceDensitySpectrum rayleigh_mie =
      RadianceDensitySpectrum(0.0 * watt_per_cubic_meter_per_sr_per_nm);

  // Nested loops for the integral over all the incident directions omega_i.
  for (int l = 0; l < SAMPLE_COUNT; ++l) {
    Angle theta = (Number(l) + 0.5) * dtheta;
    Number cos_theta = cos(theta);
    Number sin_theta = sin(theta);
    bool ray_r_theta_intersects_ground =
        RayIntersectsGround(atmosphere, r, cos_theta);

    // The distance and transmittance to the ground only depend on theta, so we
    // can compute them in the outer loop for efficiency.
    Length distance_to_ground = 0.0 * m;
    DimensionlessSpectrum transmittance_to_ground = DimensionlessSpectrum(0.0);
    DimensionlessSpectrum ground_albedo = DimensionlessSpectrum(0.0);
    if (ray_r_theta_intersects_ground) {
      distance_to_ground =
          DistanceToBottomAtmosphereBoundary(atmosphere, r, cos_theta);
      transmittance_to_ground =
          GetTransmittance(atmosphere, transmittance_texture, r, cos_theta,
              distance_to_ground, true /* ray_intersects_ground */);
      ground_albedo = atmosphere.ground_albedo;
    }

    for (int m = 0; m < 2 * SAMPLE_COUNT; ++m) {
      Angle phi = (Number(m) + 0.5) * dphi;
      vec3 omega_i =
          vec3(cos(phi) * sin_theta, sin(phi) * sin_theta, cos_theta);
      SolidAngle domega_i = (dtheta / rad) * (dphi / rad) * sin(theta) * sr;

      // The radiance L_i arriving from direction omega_i after n-1 bounces is
      // the sum of a term given by the precomputed scattering texture for the
      // (n-1)-th order:
      Number nu1 = dot(omega_s, omega_i);
      RadianceSpectrum incident_radiance = GetScattering(atmosphere,
          single_rayleigh_scattering_texture, single_mie_scattering_texture,
          multiple_scattering_texture, r, omega_i.z, mu_s, nu1,
          ray_r_theta_intersects_ground, scattering_order - 1);

      // and of the contribution from the light paths with n-1 bounces and whose
      // last bounce is on the ground. This contribution is the product of the
      // transmittance to the ground, the ground albedo, the ground BRDF, and
      // the irradiance received on the ground after n-2 bounces.
      vec3 ground_normal =
          normalize(zenith_direction * r + omega_i * distance_to_ground);
      IrradianceSpectrum ground_irradiance = GetIrradiance(
          atmosphere, irradiance_texture, atmosphere.bottom_radius,
          dot(ground_normal, omega_s));
      incident_radiance += transmittance_to_ground *
          ground_albedo * (1.0 / (PI * sr)) * ground_irradiance;

      // The radiance finally scattered from direction omega_i towards direction
      // -omega is the product of the incident radiance, the scattering
      // coefficient, and the phase function for directions omega and omega_i
      // (all this summed over all particle types, i.e. Rayleigh and Mie).
      Number nu2 = dot(omega, omega_i);
      Number rayleigh_density = GetProfileDensity(
          atmosphere.rayleigh_density, r - atmosphere.bottom_radius);
      Number mie_density = GetProfileDensity(
          atmosphere.mie_density, r - atmosphere.bottom_radius);
      rayleigh_mie += incident_radiance * (
          atmosphere.rayleigh_scattering * rayleigh_density *
              RayleighPhaseFunction(nu2) +
          atmosphere.mie_scattering * mie_density *
              MiePhaseFunction(atmosphere.mie_phase_function_g, nu2)) *
          domega_i;
    }
  }
  return rayleigh_mie;
}

RadianceSpectrum ComputeMultipleScattering(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const ScatteringDensityTexture scattering_density_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  assert(mu_s >= -1.0 && mu_s <= 1.0);
  assert(nu >= -1.0 && nu <= 1.0);

  // Number of intervals for the numerical integration.
  const int SAMPLE_COUNT = 50;
  // The integration step, i.e. the length of each integration interval.
  Length dx =
      DistanceToNearestAtmosphereBoundary(
          atmosphere, r, mu, ray_r_mu_intersects_ground) /
              Number(SAMPLE_COUNT);
  // Integration loop.
  RadianceSpectrum rayleigh_mie_sum =
      RadianceSpectrum(0.0 * watt_per_square_meter_per_sr_per_nm);
  for (int i = 0; i <= SAMPLE_COUNT; ++i) {
    Length d_i = Number(i) * dx;

    // The r, mu and mu_s parameters at the current integration point (see the
    // single scattering section for a detailed explanation).
    Length r_i =
        ClampRadius(atmosphere, sqrt(d_i * d_i + 2.0 * r * mu * d_i + r * r));
    Number mu_i = ClampCosine((r * mu + d_i) / r_i);
    Number mu_s_i = ClampCosine((r * mu_s + d_i * nu) / r_i);

    // The Rayleigh and Mie multiple scattering at the current sample point.
    RadianceSpectrum rayleigh_mie_i =
        GetScattering(
            atmosphere, scattering_density_texture, r_i, mu_i, mu_s_i, nu,
            ray_r_mu_intersects_ground) *
        GetTransmittance(
            atmosphere, transmittance_texture, r, mu, d_i,
            ray_r_mu_intersects_ground) *
        dx;
    // Sample weight (from the trapezoidal rule).
    Number weight_i = (i == 0 || i == SAMPLE_COUNT) ? 0.5 : 1.0;
    rayleigh_mie_sum += rayleigh_mie_i * weight_i;
  }
  return rayleigh_mie_sum;
}

RadianceDensitySpectrum ComputeScatteringDensityTexture(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const ReducedScatteringTexture single_rayleigh_scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    const ScatteringTexture multiple_scattering_texture,
    const IrradianceTexture irradiance_texture,
    const vec3 frag_coord, const int scattering_order) {
  Length r;
  Number mu;
  Number mu_s;
  Number nu;
  bool ray_r_mu_intersects_ground;
  GetRMuMuSNuFromScatteringTextureFragCoord(atmosphere, frag_coord,
      r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  return ComputeScatteringDensity(atmosphere, transmittance_texture,
      single_rayleigh_scattering_texture, single_mie_scattering_texture,
      multiple_scattering_texture, irradiance_texture, r, mu, mu_s, nu,
      scattering_order);
}

RadianceSpectrum ComputeMultipleScatteringTexture(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const ScatteringDensityTexture scattering_density_texture,
    const vec3 frag_coord, out Number nu) {
  Length r;
  Number mu;
  Number mu_s;
  bool ray_r_mu_intersects_ground;
  GetRMuMuSNuFromScatteringTextureFragCoord(atmosphere, frag_coord,
      r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  return ComputeMultipleScattering(atmosphere, transmittance_texture,
      scattering_density_texture, r, mu, mu_s, nu,
      ray_r_mu_intersects_ground);
}

IrradianceSpectrum ComputeDirectIrradiance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu_s) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu_s >= -1.0 && mu_s <= 1.0);

  Number alpha_s = atmosphere.sun_angular_radius / rad;
  // Approximate average of the cosine factor mu_s over the visible fraction of
  // the Sun disc.
  Number average_cosine_factor =
    mu_s < -alpha_s ? 0.0 : (mu_s > alpha_s ? mu_s :
        (mu_s + alpha_s) * (mu_s + alpha_s) / (4.0 * alpha_s));

  return atmosphere.solar_irradiance *
      GetTransmittanceToTopAtmosphereBoundary(
          atmosphere, transmittance_texture, r, mu_s) * average_cosine_factor;

}

IrradianceSpectrum ComputeIndirectIrradiance(
    const AtmosphereParameters atmosphere,
    const ReducedScatteringTexture single_rayleigh_scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    const ScatteringTexture multiple_scattering_texture,
    const Length r, const Number mu_s, const int scattering_order) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu_s >= -1.0 && mu_s <= 1.0);
  assert(scattering_order >= 1);

  const int SAMPLE_COUNT = 32;
  const Angle dphi = pi / Number(SAMPLE_COUNT);
  const Angle dtheta = pi / Number(SAMPLE_COUNT);

  IrradianceSpectrum result =
      IrradianceSpectrum(0.0 * watt_per_square_meter_per_nm);
  vec3 omega_s = vec3(sqrt(1.0 - mu_s * mu_s), 0.0, mu_s);
  for (int j = 0; j < SAMPLE_COUNT / 2; ++j) {
    Angle theta = (Number(j) + 0.5) * dtheta;
    for (int i = 0; i < 2 * SAMPLE_COUNT; ++i) {
      Angle phi = (Number(i) + 0.5) * dphi;
      vec3 omega =
          vec3(cos(phi) * sin(theta), sin(phi) * sin(theta), cos(theta));
      SolidAngle domega = (dtheta / rad) * (dphi / rad) * sin(theta) * sr;

      Number nu = dot(omega, omega_s);
      result += GetScattering(atmosphere, single_rayleigh_scattering_texture,
          single_mie_scattering_texture, multiple_scattering_texture,
          r, omega.z, mu_s, nu, false /* ray_r_theta_intersects_ground */,
          scattering_order) *
              omega.z * domega;
    }
  }
  return result;
}

void GetRMuSFromIrradianceTextureUv(const AtmosphereParameters atmosphere,
    const vec2 uv, out Length r, out Number mu_s) {
  assert(uv.x >= 0.0 && uv.x <= 1.0);
  assert(uv.y >= 0.0 && uv.y <= 1.0);
  Number x_mu_s = GetUnitRangeFromTextureCoord(uv.x, IRRADIANCE_TEXTURE_WIDTH);
  Number x_r = GetUnitRangeFromTextureCoord(uv.y, IRRADIANCE_TEXTURE_HEIGHT);
  r = atmosphere.bottom_radius +
      x_r * (atmosphere.top_radius - atmosphere.bottom_radius);
  mu_s = ClampCosine(2.0 * x_mu_s - 1.0);
}

const vec2 IRRADIANCE_TEXTURE_SIZE =
    vec2(IRRADIANCE_TEXTURE_WIDTH, IRRADIANCE_TEXTURE_HEIGHT);

IrradianceSpectrum ComputeDirectIrradianceTexture(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const vec2 frag_coord) {
  Length r;
  Number mu_s;
  GetRMuSFromIrradianceTextureUv(
      atmosphere, frag_coord / IRRADIANCE_TEXTURE_SIZE, r, mu_s);
  return ComputeDirectIrradiance(atmosphere, transmittance_texture, r, mu_s);
}

IrradianceSpectrum ComputeIndirectIrradianceTexture(
    const AtmosphereParameters atmosphere,
    const ReducedScatteringTexture single_rayleigh_scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    const ScatteringTexture multiple_scattering_texture,
    const vec2 frag_coord, const int scattering_order) {
  Length r;
  Number mu_s;
  GetRMuSFromIrradianceTextureUv(
      atmosphere, frag_coord / IRRADIANCE_TEXTURE_SIZE, r, mu_s);
  return ComputeIndirectIrradiance(atmosphere,
      single_rayleigh_scattering_texture, single_mie_scattering_texture,
      multiple_scattering_texture, r, mu_s, scattering_order);
}
`,nc=new f(.2126,.7152,.0722),ac=["solarIrradiance","sunAngularRadius","bottomRadius","topRadius","rayleighDensity","rayleighScattering","mieDensity","mieScattering","mieExtinction","miePhaseFunctionG","absorptionDensity","absorptionExtinction","groundAlbedo","muSMin","skyRadianceToLuminance","sunRadianceToLuminance"];function sc(t,e){if(e!=null)for(const r of ac){const i=e[r];i!=null&&(t[r]instanceof f?t[r].copy(i):t[r]=i)}}class ke{constructor(e,r,i,n,a){this.width=e,this.expTerm=r,this.expScale=i,this.linearTerm=n,this.constantTerm=a}toUniform(){return new l({width:this.width,exp_term:this.expTerm,exp_scale:this.expScale,linear_term:this.linearTerm,constant_term:this.constantTerm})}}const Kr=class{constructor(e){this.solarIrradiance=new f(1.474,1.8504,1.91198),this.sunAngularRadius=.004675,this.bottomRadius=636e4,this.topRadius=642e4,this.rayleighDensity=[new ke(0,0,0,0,0),new ke(0,1,-.125,0,0)],this.rayleighScattering=new f(.005802,.013558,.0331),this.mieDensity=[new ke(0,0,0,0,0),new ke(0,1,-.833333,0,0)],this.mieScattering=new f(.003996,.003996,.003996),this.mieExtinction=new f(.00444,.00444,.00444),this.miePhaseFunctionG=.8,this.absorptionDensity=[new ke(25,0,0,1/15,-2/3),new ke(0,0,0,-1/15,8/3)],this.absorptionExtinction=new f(65e-5,.001881,85e-6),this.groundAlbedo=new sr().setScalar(.1),this.muSMin=Math.cos(Co(120)),this.sunRadianceToLuminance=new f(98242.786222,69954.398112,66475.012354),this.skyRadianceToLuminance=new f(114974.916437,71305.954816,65310.548555),this.sunRadianceToRelativeLuminance=new f,this.skyRadianceToRelativeLuminance=new f,sc(this,e);const r=nc.dot(this.sunRadianceToLuminance);this.sunRadianceToRelativeLuminance.copy(this.sunRadianceToLuminance).divideScalar(r),this.skyRadianceToRelativeLuminance.copy(this.skyRadianceToLuminance).divideScalar(r)}toUniform(){return new l({solar_irradiance:this.solarIrradiance,sun_angular_radius:this.sunAngularRadius,bottom_radius:this.bottomRadius*er,top_radius:this.topRadius*er,rayleigh_density:{layers:this.rayleighDensity.map(e=>e.toUniform().value)},rayleigh_scattering:this.rayleighScattering,mie_density:{layers:this.mieDensity.map(e=>e.toUniform().value)},mie_scattering:this.mieScattering,mie_extinction:this.mieExtinction,mie_phase_function_g:this.miePhaseFunctionG,absorption_density:{layers:this.absorptionDensity.map(e=>e.toUniform().value)},absorption_extinction:this.absorptionExtinction,ground_albedo:this.groundAlbedo,mu_s_min:this.muSMin})}};Kr.DEFAULT=new Kr;let ht=Kr;const oc=`precision highp sampler2DArray;

#include "core/depth"
#include "core/math"
#include "core/packing"
#include "core/transform"
#ifdef HAS_SHADOW
#include "core/raySphereIntersection"
#include "core/cascadedShadowMaps"
#include "core/interleavedGradientNoise"
#include "core/vogelDisk"
#endif // HAS_SHADOW

#include "bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "bruneton/common"
#include "bruneton/runtime"

uniform sampler2D normalBuffer;

uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 inverseProjectionMatrix;
uniform mat4 inverseViewMatrix;
uniform float bottomRadius;
uniform mat4 worldToECEFMatrix;
uniform float geometricErrorCorrectionAmount;
uniform vec3 sunDirection;
uniform float cosSunAngularRadius;
uniform vec3 moonDirection;
uniform float moonAngularRadius;
uniform float lunarRadianceScale;
uniform float albedoScale;

#include "sky"

#ifdef HAS_LIGHTING_MASK
uniform sampler2D lightingMaskBuffer;
#endif // HAS_LIGHTING_MASK

// prettier-ignore
#define LIGHTING_MASK_CHANNEL_ LIGHTING_MASK_CHANNEL

#ifdef HAS_OVERLAY
uniform sampler2D overlayBuffer;
#endif // HAS_OVERLAY

#ifdef HAS_SHADOW
uniform sampler2DArray shadowBuffer;
uniform vec2 shadowIntervals[SHADOW_CASCADE_COUNT];
uniform mat4 shadowMatrices[SHADOW_CASCADE_COUNT];
uniform mat4 inverseShadowMatrices[SHADOW_CASCADE_COUNT];
uniform float shadowFar;
uniform float shadowTopHeight;
uniform float shadowRadius;
uniform sampler3D stbnTexture;
uniform int frame;
#endif // HAS_SHADOW

#ifdef HAS_SHADOW_LENGTH
uniform sampler2D shadowLengthBuffer;
#endif // HAS_SHADOW_LENGTH

varying vec3 vCameraPosition;
varying vec3 vRayDirection;
varying vec3 vGeometryAltitudeCorrection;
varying vec3 vEllipsoidRadiiSquared;

vec3 readNormal(const vec2 uv, out bool degenerate) {
  vec3 normal = texture(normalBuffer, uv).xyz;
  degenerate = normal == vec3(0.0);
  #ifdef OCT_ENCODED_NORMAL
  return unpackVec2ToNormal(normal.xy);
  #else // OCT_ENCODED_NORMAL
  return 2.0 * normal - 1.0;
  #endif // OCT_ENCODED_NORMAL
}

void correctGeometricError(inout vec3 positionECEF, inout vec3 normalECEF) {
  // TODO: The error is pronounced at the edge of the ellipsoid due to the
  // large difference between the sphere position and the unprojected position
  // at the current fragment. Calculating the sphere position from the fragment
  // UV may resolve this.

  // Correct way is slerp, but this will be small-angle interpolation anyways.
  vec3 sphereNormal = normalize(positionECEF / vEllipsoidRadiiSquared);
  vec3 spherePosition = ATMOSPHERE.bottom_radius * sphereNormal;
  normalECEF = mix(normalECEF, sphereNormal, geometricErrorCorrectionAmount);
  positionECEF = mix(positionECEF, spherePosition, geometricErrorCorrectionAmount);
}

#if defined(SUN_LIGHT) || defined(SKY_LIGHT)

vec3 getSunSkyIrradiance(
  const vec3 positionECEF,
  const vec3 normal,
  const vec3 inputColor,
  const float sunTransmittance
) {
  // Assume lambertian BRDF. If both SUN_LIGHT and SKY_LIGHT are not defined,
  // regard the inputColor as radiance at the texel.
  vec3 diffuse = inputColor * albedoScale * RECIPROCAL_PI;
  vec3 skyIrradiance;
  vec3 sunIrradiance = GetSunAndSkyIrradiance(positionECEF, normal, sunDirection, skyIrradiance);

  #ifdef HAS_SHADOW
  sunIrradiance *= sunTransmittance;
  #endif // HAS_SHADOW

  #if defined(SUN_LIGHT) && defined(SKY_LIGHT)
  return diffuse * (sunIrradiance + skyIrradiance);
  #elif defined(SUN_LIGHT)
  return diffuse * sunIrradiance;
  #elif defined(SKY_LIGHT)
  return diffuse * skyIrradiance;
  #endif // defined(SUN_LIGHT) && defined(SKY_LIGHT)
}

#endif // defined(SUN_LIGHT) || defined(SKY_LIGHT)

#if defined(TRANSMITTANCE) || defined(INSCATTER)

void applyTransmittanceInscatter(const vec3 positionECEF, float shadowLength, inout vec3 radiance) {
  vec3 transmittance;
  vec3 inscatter = GetSkyRadianceToPoint(
    vCameraPosition,
    positionECEF,
    shadowLength,
    sunDirection,
    transmittance
  );
  #ifdef TRANSMITTANCE
  radiance = radiance * transmittance;
  #endif // TRANSMITTANCE
  #ifdef INSCATTER
  radiance = radiance + inscatter;
  #endif // INSCATTER
}

#endif // defined(TRANSMITTANCE) || defined(INSCATTER)

#ifdef HAS_SHADOW

float getSTBN() {
  ivec3 size = textureSize(stbnTexture, 0);
  vec3 scale = 1.0 / vec3(size);
  return texture(stbnTexture, vec3(gl_FragCoord.xy, float(frame % size.z)) * scale).r;
}

vec2 getShadowUv(const vec3 worldPosition, const int cascadeIndex) {
  vec4 clip = shadowMatrices[cascadeIndex] * vec4(worldPosition, 1.0);
  clip /= clip.w;
  return clip.xy * 0.5 + 0.5;
}

float getDistanceToShadowTop(const vec3 positionECEF) {
  // Distance to the top of the shadows along the sun direction, which matches
  // the ray origin of BSM.
  return raySphereSecondIntersection(
    positionECEF / METER_TO_LENGTH_UNIT, // TODO: Make units consistent
    sunDirection,
    vec3(0.0),
    bottomRadius + shadowTopHeight
  );
}

float readShadowOpticalDepth(const vec2 uv, const float distanceToTop, const int cascadeIndex) {
  // r: frontDepth, g: meanExtinction, b: maxOpticalDepth, a: maxOpticalDepthTail
  vec4 shadow = texture(shadowBuffer, vec3(uv, float(cascadeIndex)));
  // Omit adding maxOpticalDepthTail to avoid pronounced aliasing. Ground
  // shadow will be attenuated by inscatter anyways.
  return min(shadow.b, shadow.g * max(0.0, distanceToTop - shadow.r));
}

float sampleShadowOpticalDepthPCF(
  const vec3 worldPosition,
  const float distanceToTop,
  const float radius,
  const int cascadeIndex
) {
  vec2 uv = getShadowUv(worldPosition, cascadeIndex);
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
    return 0.0;
  }

  vec2 texelSize = vec2(1.0) / vec2(textureSize(shadowBuffer, 0).xy);
  float sum = 0.0;
  vec2 offset;
  #pragma unroll_loop_start
  for (int i = 0; i < 16; ++i) {
    #if UNROLLED_LOOP_INDEX < SHADOW_SAMPLE_COUNT
    offset = vogelDisk(
      UNROLLED_LOOP_INDEX,
      SHADOW_SAMPLE_COUNT,
      interleavedGradientNoise(gl_FragCoord.xy) * PI2
    );
    sum += readShadowOpticalDepth(uv + offset * radius * texelSize, distanceToTop, cascadeIndex);
    #endif // UNROLLED_LOOP_INDEX < SHADOW_SAMPLE_COUNT
  }
  #pragma unroll_loop_end
  return sum / float(SHADOW_SAMPLE_COUNT);
}

float sampleShadowOpticalDepth(
  const vec3 worldPosition,
  const vec3 positionECEF,
  const float radius,
  const float jitter
) {
  float distanceToTop = getDistanceToShadowTop(positionECEF);
  if (distanceToTop <= 0.0) {
    return 0.0;
  }
  int cascadeIndex = getFadedCascadeIndex(
    viewMatrix,
    worldPosition,
    shadowIntervals,
    cameraNear,
    shadowFar,
    jitter
  );
  return cascadeIndex >= 0
    ? sampleShadowOpticalDepthPCF(worldPosition, distanceToTop, radius, cascadeIndex)
    : 0.0;
}

float getShadowRadius(const vec3 worldPosition) {
  vec4 clip = shadowMatrices[0] * vec4(worldPosition, 1.0);
  clip /= clip.w;

  // Offset by 1px in each direction in shadow's clip coordinates.
  vec2 shadowSize = vec2(textureSize(shadowBuffer, 0));
  vec3 offset = vec3(2.0 / shadowSize, 0.0);
  vec4 clipX = clip + offset.xzzz;
  vec4 clipY = clip + offset.zyzz;

  // Convert back to world space.
  vec4 worldX = inverseShadowMatrices[0] * clipX;
  vec4 worldY = inverseShadowMatrices[0] * clipY;

  // Project into the main camera's clip space.
  mat4 viewProjectionMatrix = projectionMatrix * viewMatrix;
  vec4 projected = viewProjectionMatrix * vec4(worldPosition, 1.0);
  vec4 projectedX = viewProjectionMatrix * worldX;
  vec4 projectedY = viewProjectionMatrix * worldY;
  projected /= projected.w;
  projectedX /= projectedX.w;
  projectedY /= projectedY.w;

  // Take the mean of pixel sizes.
  vec2 center = (projected.xy * 0.5 + 0.5) * resolution;
  vec2 offsetX = (projectedX.xy * 0.5 + 0.5) * resolution;
  vec2 offsetY = (projectedY.xy * 0.5 + 0.5) * resolution;
  float size = max(length(offsetX - center), length(offsetY - center));

  return remapClamped(size, 10.0, 50.0, 0.0, shadowRadius);
}

#endif // HAS_SHADOW

void mainImage(const vec4 inputColor, const vec2 uv, out vec4 outputColor) {
  #if defined(HAS_LIGHTING_MASK) && defined(DEBUG_SHOW_LIGHTING_MASK)
  outputColor.rgb = vec3(texture(lightingMaskBuffer, uv).LIGHTING_MASK_CHANNEL_);
  outputColor.a = 1.0;
  return;
  #endif // defined(HAS_LIGHTING_MASK) && defined(DEBUG_SHOW_LIGHTING_MASK)

  float shadowLength = 0.0;
  #ifdef HAS_SHADOW_LENGTH
  shadowLength = texture(shadowLengthBuffer, uv).r;
  #endif // HAS_SHADOW_LENGTH

  #ifdef HAS_OVERLAY
  vec4 overlay = texture(overlayBuffer, uv);
  if (overlay.a == 1.0) {
    outputColor = overlay;
    return;
  }
  #endif // HAS_OVERLAY

  vec3 rayDirection = normalize(vRayDirection);
  vec3 dRDdx = dFdx(rayDirection);
  vec3 dRDdy = dFdy(rayDirection);
  float fragmentAngle = length(dRDdx + dRDdy) / length(rayDirection);

  float depth = readDepthValue(depthBuffer, uv);
  if (depth >= 1.0 - 1e-8) {
    #ifdef SKY
    outputColor.rgb = getSkyRadiance(
      vCameraPosition,
      rayDirection,
      shadowLength,
      sunDirection,
      moonDirection,
      moonAngularRadius,
      lunarRadianceScale,
      fragmentAngle
    );
    outputColor.a = 1.0;
    #else // SKY
    outputColor = inputColor;
    #endif // SKY

    #ifdef HAS_OVERLAY
    outputColor.rgb = outputColor.rgb * (1.0 - overlay.a) + overlay.rgb;
    #endif // HAS_OVERLAY
    return;
  }
  depth = reverseLogDepth(depth, cameraNear, cameraFar);

  // Reconstruct position and normal in world space.
  vec3 viewPosition = screenToView(
    uv,
    depth,
    getViewZ(depth),
    projectionMatrix,
    inverseProjectionMatrix
  );
  vec3 worldPosition = (inverseViewMatrix * vec4(viewPosition, 1.0)).xyz;
  vec3 positionECEF = (worldToECEFMatrix * vec4(worldPosition, 1.0)).xyz;
  positionECEF = positionECEF * METER_TO_LENGTH_UNIT + vGeometryAltitudeCorrection;

  vec3 viewNormal;
  bool degenerateNormal = false;
  #ifdef RECONSTRUCT_NORMAL
  vec3 dVPdx = dFdx(viewPosition);
  vec3 dVPdy = dFdy(viewPosition);
  viewNormal = normalize(cross(dVPdx, dVPdy));
  #elif defined(HAS_NORMALS)
  viewNormal = readNormal(uv, degenerateNormal);
  #endif // defined(HAS_NORMALS)

  #if defined(RECONSTRUCT_NORMAL) || defined(HAS_NORMALS)
  vec3 worldNormal = (inverseViewMatrix * vec4(viewNormal, 0.0)).xyz;
  vec3 normalECEF = (worldToECEFMatrix * vec4(worldNormal, 0.0)).xyz;
  #else // defined(RECONSTRUCT_NORMAL) || defined(HAS_NORMALS)
  vec3 normalECEF = normalize(positionECEF);
  #endif // defined(RECONSTRUCT_NORMAL) || defined(HAS_NORMALS)

  #ifdef CORRECT_GEOMETRIC_ERROR
  correctGeometricError(positionECEF, normalECEF);
  #endif // CORRECT_GEOMETRIC_ERROR

  #ifdef HAS_SHADOW
  float stbn = getSTBN();
  float radius = getShadowRadius(worldPosition);
  float opticalDepth = sampleShadowOpticalDepth(worldPosition, positionECEF, radius, stbn);
  float sunTransmittance = exp(-opticalDepth);
  #else // HAS_SHADOW
  float sunTransmittance = 1.0;
  #endif // HAS_SHADOW

  vec3 radiance;
  #if defined(SUN_LIGHT) || defined(SKY_LIGHT)
  // WORKAROUND: When both post-process lighting and sky options are enabled,
  // stars have degenerate normals. We use this to disable irradiance, which is
  // irrelevant for them.
  if (!degenerateNormal) {
    radiance = getSunSkyIrradiance(positionECEF, normalECEF, inputColor.rgb, sunTransmittance);
  } else {
    radiance = inputColor.rgb;
  }
  #ifdef HAS_LIGHTING_MASK
  float lightingMask = texture(lightingMaskBuffer, uv).LIGHTING_MASK_CHANNEL_;
  radiance = mix(inputColor.rgb, radiance, lightingMask);
  #endif // HAS_LIGHTING_MASK
  #else // defined(SUN_LIGHT) || defined(SKY_LIGHT)
  radiance = inputColor.rgb;
  #endif // defined(SUN_LIGHT) || defined(SKY_LIGHT)

  #if defined(TRANSMITTANCE) || defined(INSCATTER)
  applyTransmittanceInscatter(positionECEF, shadowLength, radiance);
  #endif // defined(TRANSMITTANCE) || defined(INSCATTER)

  outputColor = vec4(radiance, inputColor.a);

  #ifdef HAS_OVERLAY
  outputColor.rgb = outputColor.rgb * (1.0 - overlay.a) + overlay.rgb;
  #endif // HAS_OVERLAY
}
`,cc=`uniform mat4 inverseViewMatrix;
uniform mat4 inverseProjectionMatrix;
uniform vec3 cameraPosition;
uniform mat4 worldToECEFMatrix;
uniform vec3 altitudeCorrection;
uniform float geometricErrorCorrectionAmount;
uniform vec3 ellipsoidRadii;

varying vec3 vCameraPosition;
varying vec3 vRayDirection;
varying vec3 vGeometryAltitudeCorrection;
varying vec3 vEllipsoidRadiiSquared;

void getCameraRay(out vec3 origin, out vec3 direction) {
  bool isPerspective = inverseProjectionMatrix[2][3] != 0.0; // 4th entry in the 3rd column

  if (isPerspective) {
    // Calculate the camera ray for a perspective camera.
    vec4 viewPosition = inverseProjectionMatrix * vec4(position, 1.0);
    vec4 worldDirection = inverseViewMatrix * vec4(viewPosition.xyz, 0.0);
    origin = cameraPosition;
    direction = worldDirection.xyz;
  } else {
    // Unprojected points to calculate direction.
    vec4 nearPoint = inverseProjectionMatrix * vec4(position.xy, -1.0, 1.0);
    vec4 farPoint = inverseProjectionMatrix * vec4(position.xy, -0.9, 1.0);
    nearPoint /= nearPoint.w;
    farPoint /= farPoint.w;

    // Calculate world values.
    vec4 worldDirection = inverseViewMatrix * vec4(farPoint.xyz - nearPoint.xyz, 0.0);
    vec4 worldOrigin = inverseViewMatrix * nearPoint;

    // Outputs
    direction = worldDirection.xyz;
    origin = worldOrigin.xyz;
  }
}

void mainSupport() {
  vec3 direction, origin;
  getCameraRay(origin, direction);

  vec3 cameraPositionECEF = (worldToECEFMatrix * vec4(origin, 1.0)).xyz;
  vCameraPosition = (cameraPositionECEF + altitudeCorrection) * METER_TO_LENGTH_UNIT;
  vRayDirection = (worldToECEFMatrix * vec4(direction, 0.0)).xyz;

  vGeometryAltitudeCorrection = altitudeCorrection * METER_TO_LENGTH_UNIT;
  // Gradually turn off the altitude correction on geometries as the geometric
  // error correction takes effect, because that on the ideal sphere will be
  // over corrected.
  // See: https://github.com/takram-design-engineering/three-geospatial/pull/23#issuecomment-2542914656
  #ifdef CORRECT_GEOMETRIC_ERROR
  vGeometryAltitudeCorrection *= 1.0 - geometricErrorCorrectionAmount;
  #endif // CORRECT_GEOMETRIC_ERROR

  vec3 radii = ellipsoidRadii * METER_TO_LENGTH_UNIT;
  vEllipsoidRadiiSquared = radii * radii;
}
`,ea=`vec3 getLunarRadiance(const float moonAngularRadius) {
  // Not a physical number but the order of 10^-6 relative to the sun may fit.
  vec3 radiance =
    ATMOSPHERE.solar_irradiance *
    0.000002 /
    (PI * moonAngularRadius * moonAngularRadius) *
    SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
  return radiance;
}

float intersectSphere(const vec3 ray, const vec3 point, const float radius) {
  vec3 P = -point;
  float PoR = dot(P, ray);
  float D = dot(P, P) - radius * radius;
  return -PoR - sqrt(PoR * PoR - D);
}

float orenNayarDiffuse(const vec3 L, const vec3 V, const vec3 N) {
  float NoL = dot(N, L);
  float NoV = dot(N, V);
  float s = dot(L, V) - NoL * NoV;
  float t = mix(1.0, max(NoL, NoV), step(0.0, s));
  return max(0.0, NoL) * (0.62406015 + 0.41284404 * s / t);
}

vec3 getSkyRadiance(
  const vec3 cameraPosition,
  const vec3 rayDirection,
  const float shadowLength,
  const vec3 sunDirection,
  const vec3 moonDirection,
  const float moonAngularRadius,
  const float lunarRadianceScale,
  const float fragmentAngle
) {
  vec3 transmittance;
  vec3 radiance = GetSkyRadiance(
    cameraPosition,
    rayDirection,
    shadowLength,
    sunDirection,
    transmittance
  );

  // Rendering celestial objects without perspective doesn't make sense.
  #ifdef PERSPECTIVE_CAMERA

  #ifdef SUN
  float viewDotSun = dot(rayDirection, sunDirection);
  if (viewDotSun > cosSunAngularRadius) {
    float angle = acos(clamp(viewDotSun, -1.0, 1.0));
    float antialias = smoothstep(
      ATMOSPHERE.sun_angular_radius,
      ATMOSPHERE.sun_angular_radius - fragmentAngle,
      angle
    );
    radiance += transmittance * GetSolarRadiance() * antialias;
  }
  #endif // SUN

  #ifdef MOON
  float intersection = intersectSphere(rayDirection, moonDirection, moonAngularRadius);
  if (intersection > 0.0) {
    vec3 normal = normalize(moonDirection - rayDirection * intersection);
    float diffuse = orenNayarDiffuse(-sunDirection, rayDirection, normal);
    float viewDotMoon = dot(rayDirection, moonDirection);
    float angle = acos(clamp(viewDotMoon, -1.0, 1.0));
    float antialias = smoothstep(moonAngularRadius, moonAngularRadius - fragmentAngle, angle);
    radiance +=
      transmittance *
      getLunarRadiance(moonAngularRadius) *
      lunarRadianceScale *
      diffuse *
      antialias;
  }
  #endif // MOON

  #endif // PERSPECTIVE_CAMERA

  return radiance;
}
`;var uc=Object.defineProperty,$=(t,e,r,i)=>{for(var n=void 0,a=t.length-1,s;a>=0;a--)(s=t[a])&&(n=s(e,r,n)||n);return n&&uc(e,r,n),n};const dc=new f,lc=new f,mc=new Ls,hc={blendFunction:S.NORMAL,octEncodedNormal:!1,reconstructNormal:!1,ellipsoid:De.WGS84,correctAltitude:!0,correctGeometricError:!0,sunLight:!1,skyLight:!1,transmittance:!0,inscatter:!0,albedoScale:1,sky:!1,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1,ground:!0};class j extends wn{constructor(e=new An,r,i=ht.DEFAULT){const{blendFunction:n,normalBuffer:a=null,octEncodedNormal:s,reconstructNormal:o,irradianceTexture:c=null,scatteringTexture:u=null,transmittanceTexture:d=null,singleMieScatteringTexture:h=null,higherOrderScatteringTexture:p=null,ellipsoid:T,correctAltitude:g,correctGeometricError:_,sunDirection:w,sunLight:C,skyLight:R,transmittance:E,inscatter:L,albedoScale:V,sky:K,sun:Z,moon:Ne,moonDirection:ve,moonAngularRadius:Ge,lunarRadianceScale:He,ground:ye}={...hc,...r};super("AerialPerspectiveEffect",Go(se(oc,{core:{depth:qo,packing:Qo,math:Zo,transform:Jo,raySphereIntersection:Jn,cascadedShadowMaps:jo,interleavedGradientNoise:Ko,vogelDisk:ec},bruneton:{common:he,definitions:fe,runtime:Ri},sky:ea})),{blendFunction:n,vertexShader:cc,attributes:xe.DEPTH,uniforms:new Map(Object.entries({normalBuffer:new l(a),projectionMatrix:new l(new H),viewMatrix:new l(new H),inverseProjectionMatrix:new l(new H),inverseViewMatrix:new l(new H),cameraPosition:new l(new f),bottomRadius:new l(i.bottomRadius),ellipsoidRadii:new l(new f),worldToECEFMatrix:new l(new H),altitudeCorrection:new l(new f),geometricErrorCorrectionAmount:new l(0),sunDirection:new l(w?.clone()??new f),cosSunAngularRadius:new l(i.sunAngularRadius),albedoScale:new l(V),moonDirection:new l(ve?.clone()??new f),moonAngularRadius:new l(Ge),lunarRadianceScale:new l(He),overlayBuffer:new l(null),shadowBuffer:new l(null),shadowMapSize:new l(new Y),shadowIntervals:new l([]),shadowMatrices:new l([]),inverseShadowMatrices:new l([]),shadowFar:new l(0),shadowTopHeight:new l(0),shadowRadius:new l(3),stbnTexture:new l(null),frame:new l(0),shadowLengthBuffer:new l(null),lightingMaskBuffer:new l(null),ATMOSPHERE:i.toUniform(),SUN_SPECTRAL_RADIANCE_TO_LUMINANCE:new l(i.sunRadianceToRelativeLuminance),SKY_SPECTRAL_RADIANCE_TO_LUMINANCE:new l(i.skyRadianceToRelativeLuminance),irradiance_texture:new l(c),scattering_texture:new l(u),transmittance_texture:new l(d),single_mie_scattering_texture:new l(null),higher_order_scattering_texture:new l(null)})),defines:new Map([["TRANSMITTANCE_TEXTURE_WIDTH",lt.toFixed(0)],["TRANSMITTANCE_TEXTURE_HEIGHT",mt.toFixed(0)],["SCATTERING_TEXTURE_R_SIZE",hr.toFixed(0)],["SCATTERING_TEXTURE_MU_SIZE",fr.toFixed(0)],["SCATTERING_TEXTURE_MU_S_SIZE",pr.toFixed(0)],["SCATTERING_TEXTURE_NU_SIZE",gr.toFixed(0)],["IRRADIANCE_TEXTURE_WIDTH",ut.toFixed(0)],["IRRADIANCE_TEXTURE_HEIGHT",dt.toFixed(0)],["METER_TO_LENGTH_UNIT",er.toFixed(7)]])}),this.camera=e,this.atmosphere=i,this.overlay=null,this.shadow=null,this.shadowLength=null,this.lightingMask=null,this.hasNormals=!1,this.combinedScatteringTextures=!1,this.hasHigherOrderScatteringTexture=!1,this.shadowSampleCount=8,this.octEncodedNormal=s,this.reconstructNormal=o,this.singleMieScatteringTexture=h,this.higherOrderScatteringTexture=p,this.ellipsoid=T,this.correctAltitude=g,this.correctGeometricError=_,this.sunLight=C,this.skyLight=R,this.transmittance=E,this.inscatter=L,this.sky=K,this.sun=Z,this.moon=Ne,this.ground=ye}get mainCamera(){return this.camera}set mainCamera(e){this.camera=e}copyCameraSettings(e){const{projectionMatrix:r,matrixWorldInverse:i,projectionMatrixInverse:n,matrixWorld:a}=e,s=this.uniforms;s.get("projectionMatrix").value.copy(r),s.get("viewMatrix").value.copy(i),s.get("inverseProjectionMatrix").value.copy(n),s.get("inverseViewMatrix").value.copy(a);const o=e.getWorldPosition(s.get("cameraPosition").value),c=s.get("worldToECEFMatrix").value,u=dc.copy(o).applyMatrix4(c);try{const h=mc.setFromECEF(u).height,p=lc.set(0,this.ellipsoid.maximumRadius,-Math.max(0,h)).applyMatrix4(r);s.get("geometricErrorCorrectionAmount").value=Mo(Do(p.y,41.5,13.8,0,1))}catch{return}const d=s.get("altitudeCorrection");this.correctAltitude?Ei(u,this.atmosphere.bottomRadius,this.ellipsoid,d.value):d.value.setScalar(0)}updateOverlay(){let e=!1;const{uniforms:r,defines:i,overlay:n}=this,a=i.has("HAS_OVERLAY"),s=n!=null;return s!==a&&(s?i.set("HAS_OVERLAY","1"):(i.delete("HAS_OVERLAY"),r.get("overlayBuffer").value=null),e=!0),s&&(r.get("overlayBuffer").value=n.map),e}updateShadow(){let e=!1;const{uniforms:r,defines:i,shadow:n}=this,a=i.has("HAS_SHADOW"),s=n!=null;if(s!==a&&(s?i.set("HAS_SHADOW","1"):(i.delete("HAS_SHADOW"),r.get("shadowBuffer").value=null),e=!0),s){const o=i.get("SHADOW_CASCADE_COUNT"),c=`${n.cascadeCount}`;o!==c&&(i.set("SHADOW_CASCADE_COUNT",n.cascadeCount.toFixed(0)),e=!0),r.get("shadowBuffer").value=n.map,r.get("shadowMapSize").value=n.mapSize,r.get("shadowIntervals").value=n.intervals,r.get("shadowMatrices").value=n.matrices,r.get("inverseShadowMatrices").value=n.inverseMatrices,r.get("shadowFar").value=n.far,r.get("shadowTopHeight").value=n.topHeight}return e}updateShadowLength(){let e=!1;const{uniforms:r,defines:i,shadowLength:n}=this,a=i.has("HAS_SHADOW_LENGTH"),s=n!=null;return s!==a&&(s?i.set("HAS_SHADOW_LENGTH","1"):(i.delete("HAS_SHADOW_LENGTH"),r.get("shadowLengthBuffer").value=null),e=!0),s&&(r.get("shadowLengthBuffer").value=n.map),e}updateLightingMask(){let e=!1;const{uniforms:r,defines:i,lightingMask:n}=this,a=i.has("HAS_LIGHTING_MASK"),s=n!=null;if(s!==a&&(s?i.set("HAS_LIGHTING_MASK","1"):(i.delete("HAS_LIGHTING_MASK"),r.get("lightingMaskBuffer").value=null),e=!0),s){r.get("lightingMaskBuffer").value=n.map;const o=i.get("LIGHTING_MASK_CHANNEL"),c=n.channel;c!==o&&(/^[rgba]$/.test(c)?(i.set("LIGHTING_MASK_CHANNEL",c),e=!0):console.error(`Expression validation failed: ${c}`))}return e}update(e,r,i){this.copyCameraSettings(this.camera);let n=!1;n||=this.updateOverlay(),n||=this.updateShadow(),n||=this.updateShadowLength(),n||=this.updateLightingMask(),n&&this.setChanged(),++this.uniforms.get("frame").value}get normalBuffer(){return this.uniforms.get("normalBuffer").value}set normalBuffer(e){this.uniforms.get("normalBuffer").value=e,this.hasNormals=e!=null}get irradianceTexture(){return this.uniforms.get("irradiance_texture").value}set irradianceTexture(e){this.uniforms.get("irradiance_texture").value=e}get scatteringTexture(){return this.uniforms.get("scattering_texture").value}set scatteringTexture(e){this.uniforms.get("scattering_texture").value=e}get transmittanceTexture(){return this.uniforms.get("transmittance_texture").value}set transmittanceTexture(e){this.uniforms.get("transmittance_texture").value=e}get singleMieScatteringTexture(){return this.uniforms.get("single_mie_scattering_texture").value}set singleMieScatteringTexture(e){this.uniforms.get("single_mie_scattering_texture").value=e,this.combinedScatteringTextures=e==null}get higherOrderScatteringTexture(){return this.uniforms.get("higher_order_scattering_texture").value}set higherOrderScatteringTexture(e){this.uniforms.get("higher_order_scattering_texture").value=e,this.hasHigherOrderScatteringTexture=e!=null}get ellipsoid(){return this._ellipsoid}set ellipsoid(e){this._ellipsoid=e,this.uniforms.get("ellipsoidRadii").value.copy(e.radii)}get worldToECEFMatrix(){return this.uniforms.get("worldToECEFMatrix").value}get sunDirection(){return this.uniforms.get("sunDirection").value}get sunAngularRadius(){return this.uniforms.get("ATMOSPHERE").value.sun_angular_radius}set sunAngularRadius(e){this.uniforms.get("ATMOSPHERE").value.sun_angular_radius=e,this.uniforms.get("cosSunAngularRadius").value=Math.cos(e)}get albedoScale(){return this.uniforms.get("albedoScale").value}set albedoScale(e){this.uniforms.get("albedoScale").value=e}get moonDirection(){return this.uniforms.get("moonDirection").value}get moonAngularRadius(){return this.uniforms.get("moonAngularRadius").value}set moonAngularRadius(e){this.uniforms.get("moonAngularRadius").value=e}get lunarRadianceScale(){return this.uniforms.get("lunarRadianceScale").value}set lunarRadianceScale(e){this.uniforms.get("lunarRadianceScale").value=e}get stbnTexture(){return this.uniforms.get("stbnTexture").value}set stbnTexture(e){this.uniforms.get("stbnTexture").value=e}get shadowRadius(){return this.uniforms.get("shadowRadius").value}set shadowRadius(e){this.uniforms.get("shadowRadius").value=e}}$([G("OCT_ENCODED_NORMAL")],j.prototype,"octEncodedNormal");$([G("RECONSTRUCT_NORMAL")],j.prototype,"reconstructNormal");$([G("HAS_NORMALS")],j.prototype,"hasNormals");$([G("COMBINED_SCATTERING_TEXTURES")],j.prototype,"combinedScatteringTextures");$([G("HAS_HIGHER_ORDER_SCATTERING_TEXTURE")],j.prototype,"hasHigherOrderScatteringTexture");$([G("CORRECT_GEOMETRIC_ERROR")],j.prototype,"correctGeometricError");$([G("SUN_LIGHT")],j.prototype,"sunLight");$([G("SKY_LIGHT")],j.prototype,"skyLight");$([G("TRANSMITTANCE")],j.prototype,"transmittance");$([G("INSCATTER")],j.prototype,"inscatter");$([G("SKY")],j.prototype,"sky");$([G("SUN")],j.prototype,"sun");$([G("MOON")],j.prototype,"moon");$([G("GROUND")],j.prototype,"ground");$([Oo("SHADOW_SAMPLE_COUNT",{min:1,max:16})],j.prototype,"shadowSampleCount");var fc=Object.defineProperty,ta=(t,e,r,i)=>{for(var n=void 0,a=t.length-1,s;a>=0;a--)(s=t[a])&&(n=s(e,r,n)||n);return n&&fc(e,r,n),n};const pc=new f;function gc(t,e){let r="",i="";for(let n=1;n<e;++n)r+=`layout(location = ${n}) out float renderTarget${n};
`,i+=`renderTarget${n} = 0.0;
`;return t.replace("#include <mrt_layout>",r).replace("#include <mrt_output>",i)}const xi={ellipsoid:De.WGS84,correctAltitude:!0,renderTargetCount:1};class _r extends In{constructor(e,r=ht.DEFAULT){const{irradianceTexture:i=null,scatteringTexture:n=null,transmittanceTexture:a=null,singleMieScatteringTexture:s=null,higherOrderScatteringTexture:o=null,ellipsoid:c,correctAltitude:u,sunDirection:d,sunAngularRadius:h,renderTargetCount:p,...T}={...xi,...e};super({toneMapped:!1,depthWrite:!1,depthTest:!1,...T,uniforms:{cameraPosition:new l(new f),worldToECEFMatrix:new l(new H),altitudeCorrection:new l(new f),sunDirection:new l(d?.clone()??new f),cosSunAngularRadius:new l(r.sunAngularRadius),ATMOSPHERE:r.toUniform(),SUN_SPECTRAL_RADIANCE_TO_LUMINANCE:new l(r.sunRadianceToRelativeLuminance),SKY_SPECTRAL_RADIANCE_TO_LUMINANCE:new l(r.skyRadianceToRelativeLuminance),irradiance_texture:new l(i),scattering_texture:new l(n),transmittance_texture:new l(a),single_mie_scattering_texture:new l(null),higher_order_scattering_texture:new l(null),...T.uniforms},defines:{PI:`${Math.PI}`,TRANSMITTANCE_TEXTURE_WIDTH:lt.toFixed(0),TRANSMITTANCE_TEXTURE_HEIGHT:mt.toFixed(0),SCATTERING_TEXTURE_R_SIZE:hr.toFixed(0),SCATTERING_TEXTURE_MU_SIZE:fr.toFixed(0),SCATTERING_TEXTURE_MU_S_SIZE:pr.toFixed(0),SCATTERING_TEXTURE_NU_SIZE:gr.toFixed(0),IRRADIANCE_TEXTURE_WIDTH:ut.toFixed(0),IRRADIANCE_TEXTURE_HEIGHT:dt.toFixed(0),METER_TO_LENGTH_UNIT:er.toFixed(7),...T.defines}}),this.atmosphere=r,this.combinedScatteringTextures=!1,this.hasHigherOrderScatteringTexture=!1,this.singleMieScatteringTexture=s,this.higherOrderScatteringTexture=o,this.ellipsoid=c,this.correctAltitude=u,h!=null&&(this.sunAngularRadius=h),this.renderTargetCount=p}copyCameraSettings(e){const r=this.uniforms,i=e.getWorldPosition(r.cameraPosition.value),n=pc.copy(i).applyMatrix4(r.worldToECEFMatrix.value),a=r.altitudeCorrection.value;this.correctAltitude?Ei(n,this.atmosphere.bottomRadius,this.ellipsoid,a):a.setScalar(0)}onBeforeCompile(e,r){e.fragmentShader=gc(e.fragmentShader,this.renderTargetCount)}onBeforeRender(e,r,i,n,a,s){this.copyCameraSettings(i)}get irradianceTexture(){return this.uniforms.irradiance_texture.value}set irradianceTexture(e){this.uniforms.irradiance_texture.value=e}get scatteringTexture(){return this.uniforms.scattering_texture.value}set scatteringTexture(e){this.uniforms.scattering_texture.value=e}get transmittanceTexture(){return this.uniforms.transmittance_texture.value}set transmittanceTexture(e){this.uniforms.transmittance_texture.value=e}get singleMieScatteringTexture(){return this.uniforms.single_mie_scattering_texture.value}set singleMieScatteringTexture(e){this.uniforms.single_mie_scattering_texture.value=e,this.combinedScatteringTextures=e==null}get higherOrderScatteringTexture(){return this.uniforms.higher_order_scattering_texture.value}set higherOrderScatteringTexture(e){this.uniforms.higher_order_scattering_texture.value=e,this.hasHigherOrderScatteringTexture=e!=null}get worldToECEFMatrix(){return this.uniforms.worldToECEFMatrix.value}get sunDirection(){return this.uniforms.sunDirection.value}get sunAngularRadius(){return this.uniforms.ATMOSPHERE.value.sun_angular_radius}set sunAngularRadius(e){this.uniforms.ATMOSPHERE.value.sun_angular_radius=e,this.uniforms.cosSunAngularRadius.value=Math.cos(e)}get renderTargetCount(){return this._renderTargetCount}set renderTargetCount(e){e!==this.renderTargetCount&&(this._renderTargetCount=e,this.needsUpdate=!0)}}ta([G("COMBINED_SCATTERING_TEXTURES")],_r.prototype,"combinedScatteringTextures");ta([G("HAS_HIGHER_ORDER_SCATTERING_TEXTURE")],_r.prototype,"hasHigherOrderScatteringTexture");const _c=173.1446326846693,ra=14959787069098932e-8,Oe=.017453292519943295,Tc=365.24217,un=new Date("2000-01-01T12:00:00Z"),de=2*Math.PI,Re=3600*(180/Math.PI),Ye=484813681109536e-20,vc=10800*60,Sc=2*vc,Ec=6378.1366,Rc=Ec/ra,xc=81.30056,Ai=.0002959122082855911,Zr=2825345909524226e-22,Qr=8459715185680659e-23,Jr=1292024916781969e-23,ei=1524358900784276e-23;function Yt(t){if(!Number.isFinite(t))throw console.trace(),`Value is not a finite number: ${t}`;return t}function We(t){return t-Math.floor(t)}var b;(function(t){t.Sun="Sun",t.Moon="Moon",t.Mercury="Mercury",t.Venus="Venus",t.Earth="Earth",t.Mars="Mars",t.Jupiter="Jupiter",t.Saturn="Saturn",t.Uranus="Uranus",t.Neptune="Neptune",t.Pluto="Pluto",t.SSB="SSB",t.EMB="EMB",t.Star1="Star1",t.Star2="Star2",t.Star3="Star3",t.Star4="Star4",t.Star5="Star5",t.Star6="Star6",t.Star7="Star7",t.Star8="Star8"})(b||(b={}));const Ac=[b.Star1,b.Star2,b.Star3,b.Star4,b.Star5,b.Star6,b.Star7,b.Star8],Ic=[{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0}];function Nc(t){const e=Ac.indexOf(t);return e>=0?Ic[e]:null}function ia(t){const e=Nc(t);return e&&e.dist>0?e:null}var Te;(function(t){t[t.From2000=0]="From2000",t[t.Into2000=1]="Into2000"})(Te||(Te={}));const $e={Mercury:[[[[4.40250710144,0,0],[.40989414977,1.48302034195,26087.9031415742],[.050462942,4.47785489551,52175.8062831484],[.00855346844,1.16520322459,78263.70942472259],[.00165590362,4.11969163423,104351.61256629678],[.00034561897,.77930768443,130439.51570787099],[7583476e-11,3.71348404924,156527.41884944518]],[[26087.90313685529,0,0],[.01131199811,6.21874197797,26087.9031415742],[.00292242298,3.04449355541,52175.8062831484],[.00075775081,6.08568821653,78263.70942472259],[.00019676525,2.80965111777,104351.61256629678]]],[[[.11737528961,1.98357498767,26087.9031415742],[.02388076996,5.03738959686,52175.8062831484],[.01222839532,3.14159265359,0],[.0054325181,1.79644363964,78263.70942472259],[.0012977877,4.83232503958,104351.61256629678],[.00031866927,1.58088495658,130439.51570787099],[7963301e-11,4.60972126127,156527.41884944518]],[[.00274646065,3.95008450011,26087.9031415742],[.00099737713,3.14159265359,0]]],[[[.39528271651,0,0],[.07834131818,6.19233722598,26087.9031415742],[.00795525558,2.95989690104,52175.8062831484],[.00121281764,6.01064153797,78263.70942472259],[.00021921969,2.77820093972,104351.61256629678],[4354065e-11,5.82894543774,130439.51570787099]],[[.0021734774,4.65617158665,26087.9031415742],[.00044141826,1.42385544001,52175.8062831484]]]],Venus:[[[[3.17614666774,0,0],[.01353968419,5.59313319619,10213.285546211],[.00089891645,5.30650047764,20426.571092422],[5477194e-11,4.41630661466,7860.4193924392],[3455741e-11,2.6996444782,11790.6290886588],[2372061e-11,2.99377542079,3930.2096962196],[1317168e-11,5.18668228402,26.2983197998],[1664146e-11,4.25018630147,1577.3435424478],[1438387e-11,4.15745084182,9683.5945811164],[1200521e-11,6.15357116043,30639.856638633]],[[10213.28554621638,0,0],[.00095617813,2.4640651111,10213.285546211],[7787201e-11,.6247848222,20426.571092422]]],[[[.05923638472,.26702775812,10213.285546211],[.00040107978,1.14737178112,20426.571092422],[.00032814918,3.14159265359,0]],[[.00287821243,1.88964962838,10213.285546211]]],[[[.72334820891,0,0],[.00489824182,4.02151831717,10213.285546211],[1658058e-11,4.90206728031,20426.571092422],[1378043e-11,1.12846591367,11790.6290886588],[1632096e-11,2.84548795207,7860.4193924392],[498395e-11,2.58682193892,9683.5945811164],[221985e-11,2.01346696541,19367.1891622328],[237454e-11,2.55136053886,15720.8387848784]],[[.00034551041,.89198706276,10213.285546211]]]],Earth:[[[[1.75347045673,0,0],[.03341656453,4.66925680415,6283.0758499914],[.00034894275,4.62610242189,12566.1516999828],[3417572e-11,2.82886579754,3.523118349],[3497056e-11,2.74411783405,5753.3848848968],[3135899e-11,3.62767041756,77713.7714681205],[2676218e-11,4.41808345438,7860.4193924392],[2342691e-11,6.13516214446,3930.2096962196],[1273165e-11,2.03709657878,529.6909650946],[1324294e-11,.74246341673,11506.7697697936],[901854e-11,2.04505446477,26.2983197998],[1199167e-11,1.10962946234,1577.3435424478],[857223e-11,3.50849152283,398.1490034082],[779786e-11,1.17882681962,5223.6939198022],[99025e-10,5.23268072088,5884.9268465832],[753141e-11,2.53339052847,5507.5532386674],[505267e-11,4.58292599973,18849.2275499742],[492392e-11,4.20505711826,775.522611324],[356672e-11,2.91954114478,.0673103028],[284125e-11,1.89869240932,796.2980068164],[242879e-11,.34481445893,5486.777843175],[317087e-11,5.84901948512,11790.6290886588],[271112e-11,.31486255375,10977.078804699],[206217e-11,4.80646631478,2544.3144198834],[205478e-11,1.86953770281,5573.1428014331],[202318e-11,2.45767790232,6069.7767545534],[126225e-11,1.08295459501,20.7753954924],[155516e-11,.83306084617,213.299095438]],[[6283.0758499914,0,0],[.00206058863,2.67823455808,6283.0758499914],[4303419e-11,2.63512233481,12566.1516999828]],[[8721859e-11,1.07253635559,6283.0758499914]]],[[],[[.00227777722,3.4137662053,6283.0758499914],[3805678e-11,3.37063423795,12566.1516999828]]],[[[1.00013988784,0,0],[.01670699632,3.09846350258,6283.0758499914],[.00013956024,3.05524609456,12566.1516999828],[308372e-10,5.19846674381,77713.7714681205],[1628463e-11,1.17387558054,5753.3848848968],[1575572e-11,2.84685214877,7860.4193924392],[924799e-11,5.45292236722,11506.7697697936],[542439e-11,4.56409151453,3930.2096962196],[47211e-10,3.66100022149,5884.9268465832],[85831e-11,1.27079125277,161000.6857376741],[57056e-11,2.01374292245,83996.84731811189],[55736e-11,5.2415979917,71430.69561812909],[174844e-11,3.01193636733,18849.2275499742],[243181e-11,4.2734953079,11790.6290886588]],[[.00103018607,1.10748968172,6283.0758499914],[1721238e-11,1.06442300386,12566.1516999828]],[[4359385e-11,5.78455133808,6283.0758499914]]]],Mars:[[[[6.20347711581,0,0],[.18656368093,5.0503710027,3340.6124266998],[.01108216816,5.40099836344,6681.2248533996],[.00091798406,5.75478744667,10021.8372800994],[.00027744987,5.97049513147,3.523118349],[.00010610235,2.93958560338,2281.2304965106],[.00012315897,.84956094002,2810.9214616052],[8926784e-11,4.15697846427,.0172536522],[8715691e-11,6.11005153139,13362.4497067992],[6797556e-11,.36462229657,398.1490034082],[7774872e-11,3.33968761376,5621.8429232104],[3575078e-11,1.6618650571,2544.3144198834],[4161108e-11,.22814971327,2942.4634232916],[3075252e-11,.85696614132,191.4482661116],[2628117e-11,.64806124465,3337.0893083508],[2937546e-11,6.07893711402,.0673103028],[2389414e-11,5.03896442664,796.2980068164],[2579844e-11,.02996736156,3344.1355450488],[1528141e-11,1.14979301996,6151.533888305],[1798806e-11,.65634057445,529.6909650946],[1264357e-11,3.62275122593,5092.1519581158],[1286228e-11,3.06796065034,2146.1654164752],[1546404e-11,2.91579701718,1751.539531416],[1024902e-11,3.69334099279,8962.4553499102],[891566e-11,.18293837498,16703.062133499],[858759e-11,2.4009381194,2914.0142358238],[832715e-11,2.46418619474,3340.5951730476],[83272e-10,4.49495782139,3340.629680352],[712902e-11,3.66335473479,1059.3819301892],[748723e-11,3.82248614017,155.4203994342],[723861e-11,.67497311481,3738.761430108],[635548e-11,2.92182225127,8432.7643848156],[655162e-11,.48864064125,3127.3133312618],[550474e-11,3.81001042328,.9803210682],[55275e-10,4.47479317037,1748.016413067],[425966e-11,.55364317304,6283.0758499914],[415131e-11,.49662285038,213.299095438],[472167e-11,3.62547124025,1194.4470102246],[306551e-11,.38052848348,6684.7479717486],[312141e-11,.99853944405,6677.7017350506],[293198e-11,4.22131299634,20.7753954924],[302375e-11,4.48618007156,3532.0606928114],[274027e-11,.54222167059,3340.545116397],[281079e-11,5.88163521788,1349.8674096588],[231183e-11,1.28242156993,3870.3033917944],[283602e-11,5.7688543494,3149.1641605882],[236117e-11,5.75503217933,3333.498879699],[274033e-11,.13372524985,3340.6797370026],[299395e-11,2.78323740866,6254.6266625236]],[[3340.61242700512,0,0],[.01457554523,3.60433733236,3340.6124266998],[.00168414711,3.92318567804,6681.2248533996],[.00020622975,4.26108844583,10021.8372800994],[3452392e-11,4.7321039319,3.523118349],[2586332e-11,4.60670058555,13362.4497067992],[841535e-11,4.45864030426,2281.2304965106]],[[.00058152577,2.04961712429,3340.6124266998],[.00013459579,2.45738706163,6681.2248533996]]],[[[.03197134986,3.76832042431,3340.6124266998],[.00298033234,4.10616996305,6681.2248533996],[.00289104742,0,0],[.00031365539,4.4465105309,10021.8372800994],[34841e-9,4.7881254926,13362.4497067992]],[[.00217310991,6.04472194776,3340.6124266998],[.00020976948,3.14159265359,0],[.00012834709,1.60810667915,6681.2248533996]]],[[[1.53033488271,0,0],[.1418495316,3.47971283528,3340.6124266998],[.00660776362,3.81783443019,6681.2248533996],[.00046179117,4.15595316782,10021.8372800994],[8109733e-11,5.55958416318,2810.9214616052],[7485318e-11,1.77239078402,5621.8429232104],[5523191e-11,1.3643630377,2281.2304965106],[382516e-10,4.49407183687,13362.4497067992],[2306537e-11,.09081579001,2544.3144198834],[1999396e-11,5.36059617709,3337.0893083508],[2484394e-11,4.9254563992,2942.4634232916],[1960195e-11,4.74249437639,3344.1355450488],[1167119e-11,2.11260868341,5092.1519581158],[1102816e-11,5.00908403998,398.1490034082],[899066e-11,4.40791133207,529.6909650946],[992252e-11,5.83861961952,6151.533888305],[807354e-11,2.10217065501,1059.3819301892],[797915e-11,3.44839203899,796.2980068164],[740975e-11,1.49906336885,2146.1654164752]],[[.01107433345,2.03250524857,3340.6124266998],[.00103175887,2.37071847807,6681.2248533996],[128772e-9,0,0],[.0001081588,2.70888095665,10021.8372800994]],[[.00044242249,.47930604954,3340.6124266998],[8138042e-11,.86998389204,6681.2248533996]]]],Jupiter:[[[[.59954691494,0,0],[.09695898719,5.06191793158,529.6909650946],[.00573610142,1.44406205629,7.1135470008],[.00306389205,5.41734730184,1059.3819301892],[.00097178296,4.14264726552,632.7837393132],[.00072903078,3.64042916389,522.5774180938],[.00064263975,3.41145165351,103.0927742186],[.00039806064,2.29376740788,419.4846438752],[.00038857767,1.27231755835,316.3918696566],[.00027964629,1.7845459182,536.8045120954],[.0001358973,5.7748104079,1589.0728952838],[8246349e-11,3.5822792584,206.1855484372],[8768704e-11,3.63000308199,949.1756089698],[7368042e-11,5.0810119427,735.8765135318],[626315e-10,.02497628807,213.299095438],[6114062e-11,4.51319998626,1162.4747044078],[4905396e-11,1.32084470588,110.2063212194],[5305285e-11,1.30671216791,14.2270940016],[5305441e-11,4.18625634012,1052.2683831884],[4647248e-11,4.69958103684,3.9321532631],[3045023e-11,4.31676431084,426.598190876],[2609999e-11,1.56667394063,846.0828347512],[2028191e-11,1.06376530715,3.1813937377],[1764763e-11,2.14148655117,1066.49547719],[1722972e-11,3.88036268267,1265.5674786264],[1920945e-11,.97168196472,639.897286314],[1633223e-11,3.58201833555,515.463871093],[1431999e-11,4.29685556046,625.6701923124],[973272e-11,4.09764549134,95.9792272178]],[[529.69096508814,0,0],[.00489503243,4.2208293947,529.6909650946],[.00228917222,6.02646855621,7.1135470008],[.00030099479,4.54540782858,1059.3819301892],[.0002072092,5.45943156902,522.5774180938],[.00012103653,.16994816098,536.8045120954],[6067987e-11,4.42422292017,103.0927742186],[5433968e-11,3.98480737746,419.4846438752],[4237744e-11,5.89008707199,14.2270940016]],[[.00047233601,4.32148536482,7.1135470008],[.00030649436,2.929777887,529.6909650946],[.00014837605,3.14159265359,0]]],[[[.02268615702,3.55852606721,529.6909650946],[.00109971634,3.90809347197,1059.3819301892],[.00110090358,0,0],[8101428e-11,3.60509572885,522.5774180938],[6043996e-11,4.25883108339,1589.0728952838],[6437782e-11,.30627119215,536.8045120954]],[[.00078203446,1.52377859742,529.6909650946]]],[[[5.20887429326,0,0],[.25209327119,3.49108639871,529.6909650946],[.00610599976,3.84115365948,1059.3819301892],[.00282029458,2.57419881293,632.7837393132],[.00187647346,2.07590383214,522.5774180938],[.00086792905,.71001145545,419.4846438752],[.00072062974,.21465724607,536.8045120954],[.00065517248,5.9799588479,316.3918696566],[.00029134542,1.67759379655,103.0927742186],[.00030135335,2.16132003734,949.1756089698],[.00023453271,3.54023522184,735.8765135318],[.00022283743,4.19362594399,1589.0728952838],[.00023947298,.2745803748,7.1135470008],[.00013032614,2.96042965363,1162.4747044078],[970336e-10,1.90669633585,206.1855484372],[.00012749023,2.71550286592,1052.2683831884],[7057931e-11,2.18184839926,1265.5674786264],[6137703e-11,6.26418240033,846.0828347512],[2616976e-11,2.00994012876,1581.959348283]],[[.0127180152,2.64937512894,529.6909650946],[.00061661816,3.00076460387,1059.3819301892],[.00053443713,3.89717383175,522.5774180938],[.00031185171,4.88276958012,536.8045120954],[.00041390269,0,0]]]],Saturn:[[[[.87401354025,0,0],[.11107659762,3.96205090159,213.299095438],[.01414150957,4.58581516874,7.1135470008],[.00398379389,.52112032699,206.1855484372],[.00350769243,3.30329907896,426.598190876],[.00206816305,.24658372002,103.0927742186],[792713e-9,3.84007056878,220.4126424388],[.00023990355,4.66976924553,110.2063212194],[.00016573588,.43719228296,419.4846438752],[.00014906995,5.76903183869,316.3918696566],[.0001582029,.93809155235,632.7837393132],[.00014609559,1.56518472,3.9321532631],[.00013160301,4.44891291899,14.2270940016],[.00015053543,2.71669915667,639.897286314],[.00013005299,5.98119023644,11.0457002639],[.00010725067,3.12939523827,202.2533951741],[5863206e-11,.23656938524,529.6909650946],[5227757e-11,4.20783365759,3.1813937377],[6126317e-11,1.76328667907,277.0349937414],[5019687e-11,3.17787728405,433.7117378768],[459255e-10,.61977744975,199.0720014364],[4005867e-11,2.24479718502,63.7358983034],[2953796e-11,.98280366998,95.9792272178],[387367e-10,3.22283226966,138.5174968707],[2461186e-11,2.03163875071,735.8765135318],[3269484e-11,.77492638211,949.1756089698],[1758145e-11,3.2658010994,522.5774180938],[1640172e-11,5.5050445305,846.0828347512],[1391327e-11,4.02333150505,323.5054166574],[1580648e-11,4.37265307169,309.2783226558],[1123498e-11,2.83726798446,415.5524906121],[1017275e-11,3.71700135395,227.5261894396],[848642e-11,3.1915017083,209.3669421749]],[[213.2990952169,0,0],[.01297370862,1.82834923978,213.299095438],[.00564345393,2.88499717272,7.1135470008],[.00093734369,1.06311793502,426.598190876],[.00107674962,2.27769131009,206.1855484372],[.00040244455,2.04108104671,220.4126424388],[.00019941774,1.2795439047,103.0927742186],[.00010511678,2.7488034213,14.2270940016],[6416106e-11,.38238295041,639.897286314],[4848994e-11,2.43037610229,419.4846438752],[4056892e-11,2.92133209468,110.2063212194],[3768635e-11,3.6496533078,3.9321532631]],[[.0011644133,1.17988132879,7.1135470008],[.00091841837,.0732519584,213.299095438],[.00036661728,0,0],[.00015274496,4.06493179167,206.1855484372]]],[[[.04330678039,3.60284428399,213.299095438],[.00240348302,2.85238489373,426.598190876],[.00084745939,0,0],[.00030863357,3.48441504555,220.4126424388],[.00034116062,.57297307557,206.1855484372],[.0001473407,2.11846596715,639.897286314],[9916667e-11,5.79003188904,419.4846438752],[6993564e-11,4.7360468972,7.1135470008],[4807588e-11,5.43305312061,316.3918696566]],[[.00198927992,4.93901017903,213.299095438],[.00036947916,3.14159265359,0],[.00017966989,.5197943111,426.598190876]]],[[[9.55758135486,0,0],[.52921382865,2.39226219573,213.299095438],[.01873679867,5.2354960466,206.1855484372],[.01464663929,1.64763042902,426.598190876],[.00821891141,5.93520042303,316.3918696566],[.00547506923,5.0153261898,103.0927742186],[.0037168465,2.27114821115,220.4126424388],[.00361778765,3.13904301847,7.1135470008],[.00140617506,5.70406606781,632.7837393132],[.00108974848,3.29313390175,110.2063212194],[.00069006962,5.94099540992,419.4846438752],[.00061053367,.94037691801,639.897286314],[.00048913294,1.55733638681,202.2533951741],[.00034143772,.19519102597,277.0349937414],[.00032401773,5.47084567016,949.1756089698],[.00020936596,.46349251129,735.8765135318],[9796004e-11,5.20477537945,1265.5674786264],[.00011993338,5.98050967385,846.0828347512],[208393e-9,1.52102476129,433.7117378768],[.00015298404,3.0594381494,529.6909650946],[6465823e-11,.17732249942,1052.2683831884],[.00011380257,1.7310542704,522.5774180938],[3419618e-11,4.94550542171,1581.959348283]],[[.0618298134,.2584351148,213.299095438],[.00506577242,.71114625261,206.1855484372],[.00341394029,5.79635741658,426.598190876],[.00188491195,.47215589652,220.4126424388],[.00186261486,3.14159265359,0],[.00143891146,1.40744822888,7.1135470008]],[[.00436902572,4.78671677509,213.299095438]]]],Uranus:[[[[5.48129294297,0,0],[.09260408234,.89106421507,74.7815985673],[.01504247898,3.6271926092,1.4844727083],[.00365981674,1.89962179044,73.297125859],[.00272328168,3.35823706307,149.5631971346],[.00070328461,5.39254450063,63.7358983034],[.00068892678,6.09292483287,76.2660712756],[.00061998615,2.26952066061,2.9689454166],[.00061950719,2.85098872691,11.0457002639],[.0002646877,3.14152083966,71.8126531507],[.00025710476,6.11379840493,454.9093665273],[.0002107885,4.36059339067,148.0787244263],[.00017818647,1.74436930289,36.6485629295],[.00014613507,4.73732166022,3.9321532631],[.00011162509,5.8268179635,224.3447957019],[.0001099791,.48865004018,138.5174968707],[9527478e-11,2.95516862826,35.1640902212],[7545601e-11,5.236265824,109.9456887885],[4220241e-11,3.23328220918,70.8494453042],[40519e-9,2.277550173,151.0476698429],[3354596e-11,1.0654900738,4.4534181249],[2926718e-11,4.62903718891,9.5612275556],[349034e-10,5.48306144511,146.594251718],[3144069e-11,4.75199570434,77.7505439839],[2922333e-11,5.35235361027,85.8272988312],[2272788e-11,4.36600400036,70.3281804424],[2051219e-11,1.51773566586,.1118745846],[2148602e-11,.60745949945,38.1330356378],[1991643e-11,4.92437588682,277.0349937414],[1376226e-11,2.04283539351,65.2203710117],[1666902e-11,3.62744066769,380.12776796],[1284107e-11,3.11347961505,202.2533951741],[1150429e-11,.93343589092,3.1813937377],[1533221e-11,2.58594681212,52.6901980395],[1281604e-11,.54271272721,222.8603229936],[1372139e-11,4.19641530878,111.4301614968],[1221029e-11,.1990065003,108.4612160802],[946181e-11,1.19253165736,127.4717966068],[1150989e-11,4.17898916639,33.6796175129]],[[74.7815986091,0,0],[.00154332863,5.24158770553,74.7815985673],[.00024456474,1.71260334156,1.4844727083],[9258442e-11,.4282973235,11.0457002639],[8265977e-11,1.50218091379,63.7358983034],[915016e-10,1.41213765216,149.5631971346]]],[[[.01346277648,2.61877810547,74.7815985673],[623414e-9,5.08111189648,149.5631971346],[.00061601196,3.14159265359,0],[9963722e-11,1.61603805646,76.2660712756],[992616e-10,.57630380333,73.297125859]],[[.00034101978,.01321929936,74.7815985673]]],[[[19.21264847206,0,0],[.88784984413,5.60377527014,74.7815985673],[.03440836062,.32836099706,73.297125859],[.0205565386,1.7829515933,149.5631971346],[.0064932241,4.52247285911,76.2660712756],[.00602247865,3.86003823674,63.7358983034],[.00496404167,1.40139935333,454.9093665273],[.00338525369,1.58002770318,138.5174968707],[.00243509114,1.57086606044,71.8126531507],[.00190522303,1.99809394714,1.4844727083],[.00161858838,2.79137786799,148.0787244263],[.00143706183,1.38368544947,11.0457002639],[.00093192405,.17437220467,36.6485629295],[.00071424548,4.24509236074,224.3447957019],[.00089806014,3.66105364565,109.9456887885],[.00039009723,1.66971401684,70.8494453042],[.00046677296,1.39976401694,35.1640902212],[.00039025624,3.36234773834,277.0349937414],[.00036755274,3.88649278513,146.594251718],[.00030348723,.70100838798,151.0476698429],[.00029156413,3.180563367,77.7505439839],[.00022637073,.72518687029,529.6909650946],[.00011959076,1.7504339214,984.6003316219],[.00025620756,5.25656086672,380.12776796]],[[.01479896629,3.67205697578,74.7815985673]]]],Neptune:[[[[5.31188633046,0,0],[.0179847553,2.9010127389,38.1330356378],[.01019727652,.48580922867,1.4844727083],[.00124531845,4.83008090676,36.6485629295],[.00042064466,5.41054993053,2.9689454166],[.00037714584,6.09221808686,35.1640902212],[.00033784738,1.24488874087,76.2660712756],[.00016482741,7727998e-11,491.5579294568],[9198584e-11,4.93747051954,39.6175083461],[899425e-10,.27462171806,175.1660598002]],[[38.13303563957,0,0],[.00016604172,4.86323329249,1.4844727083],[.00015744045,2.27887427527,38.1330356378]]],[[[.03088622933,1.44104372644,38.1330356378],[.00027780087,5.91271884599,76.2660712756],[.00027623609,0,0],[.00015355489,2.52123799551,36.6485629295],[.00015448133,3.50877079215,39.6175083461]]],[[[30.07013205828,0,0],[.27062259632,1.32999459377,38.1330356378],[.01691764014,3.25186135653,36.6485629295],[.00807830553,5.18592878704,1.4844727083],[.0053776051,4.52113935896,35.1640902212],[.00495725141,1.5710564165,491.5579294568],[.00274571975,1.84552258866,175.1660598002],[.0001201232,1.92059384991,1021.2488945514],[.00121801746,5.79754470298,76.2660712756],[.00100896068,.3770272493,73.297125859],[.00135134092,3.37220609835,39.6175083461],[7571796e-11,1.07149207335,388.4651552382]]]]};function yc(t){var e,r,i,n,a,s,o;const c=2e3+(t-14)/Tc;return c<-500?(e=(c-1820)/100,-20+32*e*e):c<500?(e=c/100,r=e*e,i=e*r,n=r*r,a=r*i,s=i*i,10583.6-1014.41*e+33.78311*r-5.952053*i-.1798452*n+.022174192*a+.0090316521*s):c<1600?(e=(c-1e3)/100,r=e*e,i=e*r,n=r*r,a=r*i,s=i*i,1574.2-556.01*e+71.23472*r+.319781*i-.8503463*n-.005050998*a+.0083572073*s):c<1700?(e=c-1600,r=e*e,i=e*r,120-.9808*e-.01532*r+i/7129):c<1800?(e=c-1700,r=e*e,i=e*r,n=r*r,8.83+.1603*e-.0059285*r+13336e-8*i-n/1174e3):c<1860?(e=c-1800,r=e*e,i=e*r,n=r*r,a=r*i,s=i*i,o=i*n,13.72-.332447*e+.0068612*r+.0041116*i-37436e-8*n+121272e-10*a-1699e-10*s+875e-12*o):c<1900?(e=c-1860,r=e*e,i=e*r,n=r*r,a=r*i,7.62+.5737*e-.251754*r+.01680668*i-.0004473624*n+a/233174):c<1920?(e=c-1900,r=e*e,i=e*r,n=r*r,-2.79+1.494119*e-.0598939*r+.0061966*i-197e-6*n):c<1941?(e=c-1920,r=e*e,i=e*r,21.2+.84493*e-.0761*r+.0020936*i):c<1961?(e=c-1950,r=e*e,i=e*r,29.07+.407*e-r/233+i/2547):c<1986?(e=c-1975,r=e*e,i=e*r,45.45+1.067*e-r/260-i/718):c<2005?(e=c-2e3,r=e*e,i=e*r,n=r*r,a=r*i,63.86+.3345*e-.060374*r+.0017275*i+651814e-9*n+2373599e-11*a):c<2050?(e=c-2e3,62.92+.32217*e+.005589*e*e):c<2150?(e=(c-1820)/100,-20+32*e*e-.5628*(2150-c)):(e=(c-1820)/100,-20+32*e*e)}let bc=yc;function dn(t){return t+bc(t)/86400}class Ae{constructor(e){if(e instanceof Ae){this.date=e.date,this.ut=e.ut,this.tt=e.tt;return}const r=1e3*3600*24;if(e instanceof Date&&Number.isFinite(e.getTime())){this.date=e,this.ut=(e.getTime()-un.getTime())/r,this.tt=dn(this.ut);return}if(Number.isFinite(e)){this.date=new Date(un.getTime()+e*r),this.ut=e,this.tt=dn(this.ut);return}throw"Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date."}static FromTerrestrialTime(e){let r=new Ae(e);for(;;){const i=e-r.tt;if(Math.abs(i)<1e-12)return r;r=r.AddDays(i)}}toString(){return this.date.toISOString()}AddDays(e){return new Ae(this.ut+e)}}function Ue(t){return t instanceof Ae?t:new Ae(t)}function wc(t){function e(p){return p%Sc*Ye}const r=t.tt/36525,i=e(128710479305e-5+r*1295965810481e-4),n=e(335779.526232+r*17395272628478e-4),a=e(107226070369e-5+r*1602961601209e-3),s=e(450160.398036-r*69628905431e-4);let o=Math.sin(s),c=Math.cos(s),u=(-172064161-174666*r)*o+33386*c,d=(92052331+9086*r)*c+15377*o,h=2*(n-a+s);return o=Math.sin(h),c=Math.cos(h),u+=(-13170906-1675*r)*o-13696*c,d+=(5730336-3015*r)*c-4587*o,h=2*(n+s),o=Math.sin(h),c=Math.cos(h),u+=(-2276413-234*r)*o+2796*c,d+=(978459-485*r)*c+1374*o,h=2*s,o=Math.sin(h),c=Math.cos(h),u+=(2074554+207*r)*o-698*c,d+=(-897492+470*r)*c-291*o,o=Math.sin(i),c=Math.cos(i),u+=(1475877-3633*r)*o+11817*c,d+=(73871-184*r)*c-1924*o,{dpsi:-135e-6+u*1e-7,deps:388e-6+d*1e-7}}function na(t){var e=t.tt/36525,r=((((-434e-10*e-576e-9)*e+.0020034)*e-1831e-7)*e-46.836769)*e+84381.406;return r/3600}var zt;function aa(t){if(!zt||Math.abs(zt.tt-t.tt)>1e-6){const e=wc(t),r=na(t),i=r+e.deps/3600;zt={tt:t.tt,dpsi:e.dpsi,deps:e.deps,ee:e.dpsi*Math.cos(r*Oe)/15,mobl:r,tobl:i}}return zt}function Cc(t,e){const r=t*Oe,i=Math.cos(r),n=Math.sin(r);return[e[0],e[1]*i-e[2]*n,e[1]*n+e[2]*i]}function Dc(t,e){return Cc(na(t),e)}function Mc(t){const e=t.tt/36525;function r(x,D){const U=[];let F;for(F=0;F<=D-x;++F)U.push(0);return{min:x,array:U}}function i(x,D,U,F){const W=[];for(let Se=0;Se<=D-x;++Se)W.push(r(U,F));return{min:x,array:W}}function n(x,D,U){const F=x.array[D-x.min];return F.array[U-F.min]}function a(x,D,U,F){const W=x.array[D-x.min];W.array[U-W.min]=F}let s,o,c,u,d,h,p,T,g,_,w,C,R,E,L,V,K,Z,Ne,ve,Ge,He,ye,Ci=i(-6,6,1,4),Di=i(-6,6,1,4);function yt(x,D){return n(Ci,x,D)}function bt(x,D){return n(Di,x,D)}function wt(x,D,U){return a(Ci,x,D,U)}function Ct(x,D,U){return a(Di,x,D,U)}function Mi(x,D,U,F,W){W(x*U-D*F,D*U+x*F)}function P(x){return Math.sin(de*x)}p=e*e,g=0,ye=0,w=0,C=3422.7;var Dt=P(.19833+.05611*e),vr=P(.27869+.04508*e),Sr=P(.16827-.36903*e),Er=P(.34734-5.37261*e),Rr=P(.10498-5.37899*e),Mt=P(.42681-.41855*e),ga=P(.14943-5.37511*e);for(Z=.84*Dt+.31*vr+14.27*Sr+7.26*Er+.28*Rr+.24*Mt,Ne=2.94*Dt+.31*vr+14.27*Sr+9.34*Er+1.12*Rr+.83*Mt,ve=-6.4*Dt-1.89*Mt,Ge=.21*Dt+.31*vr+14.27*Sr-88.7*Er-15.3*Rr+.24*Mt-1.86*ga,He=Z-ve,T=-3332e-9*P(.59734-5.37261*e)-539e-9*P(.35498-5.37899*e)-64e-9*P(.39943-5.37511*e),R=de*We(.60643382+1336.85522467*e-313e-8*p)+Z/Re,E=de*We(.37489701+1325.55240982*e+2565e-8*p)+Ne/Re,L=de*We(.99312619+99.99735956*e-44e-8*p)+ve/Re,V=de*We(.25909118+1342.2278298*e-892e-8*p)+Ge/Re,K=de*We(.82736186+1236.85308708*e-397e-8*p)+He/Re,d=1;d<=4;++d){switch(d){case 1:c=E,o=4,u=1.000002208;break;case 2:c=L,o=3,u=.997504612-.002495388*e;break;case 3:c=V,o=4,u=1.000002708+139.978*T;break;case 4:c=K,o=6,u=1;break;default:throw`Internal error: I = ${d}`}for(wt(0,d,1),wt(1,d,Math.cos(c)*u),Ct(0,d,0),Ct(1,d,Math.sin(c)*u),h=2;h<=o;++h)Mi(yt(h-1,d),bt(h-1,d),yt(1,d),bt(1,d),(x,D)=>(wt(h,d,x),Ct(h,d,D)));for(h=1;h<=o;++h)wt(-h,d,yt(h,d)),Ct(-h,d,-bt(h,d))}function Oi(x,D,U,F){for(var W={x:1,y:0},Se=[0,x,D,U,F],ce=1;ce<=4;++ce)Se[ce]!==0&&Mi(W.x,W.y,yt(Se[ce],ce),bt(Se[ce],ce),(xr,Fe)=>(W.x=xr,W.y=Fe));return W}function m(x,D,U,F,W,Se,ce,xr){var Fe=Oi(W,Se,ce,xr);g+=x*Fe.y,ye+=D*Fe.y,w+=U*Fe.x,C+=F*Fe.x}m(13.902,14.06,-.001,.2607,0,0,0,4),m(.403,-4.01,.394,.0023,0,0,0,3),m(2369.912,2373.36,.601,28.2333,0,0,0,2),m(-125.154,-112.79,-.725,-.9781,0,0,0,1),m(1.979,6.98,-.445,.0433,1,0,0,4),m(191.953,192.72,.029,3.0861,1,0,0,2),m(-8.466,-13.51,.455,-.1093,1,0,0,1),m(22639.5,22609.07,.079,186.5398,1,0,0,0),m(18.609,3.59,-.094,.0118,1,0,0,-1),m(-4586.465,-4578.13,-.077,34.3117,1,0,0,-2),m(3.215,5.44,.192,-.0386,1,0,0,-3),m(-38.428,-38.64,.001,.6008,1,0,0,-4),m(-.393,-1.43,-.092,.0086,1,0,0,-6),m(-.289,-1.59,.123,-.0053,0,1,0,4),m(-24.42,-25.1,.04,-.3,0,1,0,2),m(18.023,17.93,.007,.1494,0,1,0,1),m(-668.146,-126.98,-1.302,-.3997,0,1,0,0),m(.56,.32,-.001,-.0037,0,1,0,-1),m(-165.145,-165.06,.054,1.9178,0,1,0,-2),m(-1.877,-6.46,-.416,.0339,0,1,0,-4),m(.213,1.02,-.074,.0054,2,0,0,4),m(14.387,14.78,-.017,.2833,2,0,0,2),m(-.586,-1.2,.054,-.01,2,0,0,1),m(769.016,767.96,.107,10.1657,2,0,0,0),m(1.75,2.01,-.018,.0155,2,0,0,-1),m(-211.656,-152.53,5.679,-.3039,2,0,0,-2),m(1.225,.91,-.03,-.0088,2,0,0,-3),m(-30.773,-34.07,-.308,.3722,2,0,0,-4),m(-.57,-1.4,-.074,.0109,2,0,0,-6),m(-2.921,-11.75,.787,-.0484,1,1,0,2),m(1.267,1.52,-.022,.0164,1,1,0,1),m(-109.673,-115.18,.461,-.949,1,1,0,0),m(-205.962,-182.36,2.056,1.4437,1,1,0,-2),m(.233,.36,.012,-.0025,1,1,0,-3),m(-4.391,-9.66,-.471,.0673,1,1,0,-4),m(.283,1.53,-.111,.006,1,-1,0,4),m(14.577,31.7,-1.54,.2302,1,-1,0,2),m(147.687,138.76,.679,1.1528,1,-1,0,0),m(-1.089,.55,.021,0,1,-1,0,-1),m(28.475,23.59,-.443,-.2257,1,-1,0,-2),m(-.276,-.38,-.006,-.0036,1,-1,0,-3),m(.636,2.27,.146,-.0102,1,-1,0,-4),m(-.189,-1.68,.131,-.0028,0,2,0,2),m(-7.486,-.66,-.037,-.0086,0,2,0,0),m(-8.096,-16.35,-.74,.0918,0,2,0,-2),m(-5.741,-.04,0,-9e-4,0,0,2,2),m(.255,0,0,0,0,0,2,1),m(-411.608,-.2,0,-.0124,0,0,2,0),m(.584,.84,0,.0071,0,0,2,-1),m(-55.173,-52.14,0,-.1052,0,0,2,-2),m(.254,.25,0,-.0017,0,0,2,-3),m(.025,-1.67,0,.0031,0,0,2,-4),m(1.06,2.96,-.166,.0243,3,0,0,2),m(36.124,50.64,-1.3,.6215,3,0,0,0),m(-13.193,-16.4,.258,-.1187,3,0,0,-2),m(-1.187,-.74,.042,.0074,3,0,0,-4),m(-.293,-.31,-.002,.0046,3,0,0,-6),m(-.29,-1.45,.116,-.0051,2,1,0,2),m(-7.649,-10.56,.259,-.1038,2,1,0,0),m(-8.627,-7.59,.078,-.0192,2,1,0,-2),m(-2.74,-2.54,.022,.0324,2,1,0,-4),m(1.181,3.32,-.212,.0213,2,-1,0,2),m(9.703,11.67,-.151,.1268,2,-1,0,0),m(-.352,-.37,.001,-.0028,2,-1,0,-1),m(-2.494,-1.17,-.003,-.0017,2,-1,0,-2),m(.36,.2,-.012,-.0043,2,-1,0,-4),m(-1.167,-1.25,.008,-.0106,1,2,0,0),m(-7.412,-6.12,.117,.0484,1,2,0,-2),m(-.311,-.65,-.032,.0044,1,2,0,-4),m(.757,1.82,-.105,.0112,1,-2,0,2),m(2.58,2.32,.027,.0196,1,-2,0,0),m(2.533,2.4,-.014,-.0212,1,-2,0,-2),m(-.344,-.57,-.025,.0036,0,3,0,-2),m(-.992,-.02,0,0,1,0,2,2),m(-45.099,-.02,0,-.001,1,0,2,0),m(-.179,-9.52,0,-.0833,1,0,2,-2),m(-.301,-.33,0,.0014,1,0,2,-4),m(-6.382,-3.37,0,-.0481,1,0,-2,2),m(39.528,85.13,0,-.7136,1,0,-2,0),m(9.366,.71,0,-.0112,1,0,-2,-2),m(.202,.02,0,0,1,0,-2,-4),m(.415,.1,0,.0013,0,1,2,0),m(-2.152,-2.26,0,-.0066,0,1,2,-2),m(-1.44,-1.3,0,.0014,0,1,-2,2),m(.384,-.04,0,0,0,1,-2,-2),m(1.938,3.6,-.145,.0401,4,0,0,0),m(-.952,-1.58,.052,-.013,4,0,0,-2),m(-.551,-.94,.032,-.0097,3,1,0,0),m(-.482,-.57,.005,-.0045,3,1,0,-2),m(.681,.96,-.026,.0115,3,-1,0,0),m(-.297,-.27,.002,-9e-4,2,2,0,-2),m(.254,.21,-.003,0,2,-2,0,-2),m(-.25,-.22,.004,.0014,1,3,0,-2),m(-3.996,0,0,4e-4,2,0,2,0),m(.557,-.75,0,-.009,2,0,2,-2),m(-.459,-.38,0,-.0053,2,0,-2,2),m(-1.298,.74,0,4e-4,2,0,-2,0),m(.538,1.14,0,-.0141,2,0,-2,-2),m(.263,.02,0,0,1,1,2,0),m(.426,.07,0,-6e-4,1,1,-2,-2),m(-.304,.03,0,3e-4,1,-1,2,0),m(-.372,-.19,0,-.0027,1,-1,-2,2),m(.418,0,0,0,0,0,4,0),m(-.33,-.04,0,0,3,0,2,0);function ne(x,D,U,F,W){return x*Oi(D,U,F,W).y}_=0,_+=ne(-526.069,0,0,1,-2),_+=ne(-3.352,0,0,1,-4),_+=ne(44.297,1,0,1,-2),_+=ne(-6,1,0,1,-4),_+=ne(20.599,-1,0,1,0),_+=ne(-30.598,-1,0,1,-2),_+=ne(-24.649,-2,0,1,0),_+=ne(-2,-2,0,1,-2),_+=ne(-22.571,0,1,1,-2),_+=ne(10.985,0,-1,1,-2),g+=.82*P(.7736-62.5512*e)+.31*P(.0466-125.1025*e)+.35*P(.5785-25.1042*e)+.66*P(.4591+1335.8075*e)+.64*P(.313-91.568*e)+1.14*P(.148+1331.2898*e)+.21*P(.5918+1056.5859*e)+.44*P(.5784+1322.8595*e)+.24*P(.2275-5.7374*e)+.28*P(.2965+2.6929*e)+.33*P(.3132+6.3368*e),s=V+ye/Re;let _a=(1.000002708+139.978*T)*(18518.511+1.189+w)*Math.sin(s)-6.24*Math.sin(3*s)+_;return{geo_eclip_lon:de*We((R+g/Re)/de),geo_eclip_lat:Math.PI/(180*3600)*_a,distance_au:Re*Rc/(.999953253*C)}}function Oc(t,e){return[t.rot[0][0]*e[0]+t.rot[1][0]*e[1]+t.rot[2][0]*e[2],t.rot[0][1]*e[0]+t.rot[1][1]*e[1]+t.rot[2][1]*e[2],t.rot[0][2]*e[0]+t.rot[1][2]*e[1]+t.rot[2][2]*e[2]]}function Lc(t,e,r){const i=sa(e,r);return Oc(i,t)}function sa(t,e){const r=t.tt/36525;let i=84381.406,n=((((-951e-10*r+132851e-9)*r-.00114045)*r-1.0790069)*r+5038.481507)*r,a=((((3337e-10*r-467e-9)*r-.00772503)*r+.0512623)*r-.025754)*r+i,s=((((-56e-9*r+170663e-9)*r-.00121197)*r-2.3814292)*r+10.556403)*r;i*=Ye,n*=Ye,a*=Ye,s*=Ye;const o=Math.sin(i),c=Math.cos(i),u=Math.sin(-n),d=Math.cos(-n),h=Math.sin(-a),p=Math.cos(-a),T=Math.sin(s),g=Math.cos(s),_=g*d-u*T*p,w=g*u*c+T*p*d*c-o*T*h,C=g*u*o+T*p*d*o+c*T*h,R=-T*d-u*g*p,E=-T*u*c+g*p*d*c-o*g*h,L=-T*u*o+g*p*d*o+c*g*h,V=u*h,K=-h*d*c-o*p,Z=-h*d*o+p*c;if(e===Te.Into2000)return new at([[_,w,C],[R,E,L],[V,K,Z]]);if(e===Te.From2000)return new at([[_,R,V],[w,E,K],[C,L,Z]]);throw"Invalid precess direction"}function Pc(t){const e=.779057273264+.00273781191135448*t.ut,r=t.ut%1;let i=360*((e+r)%1);return i<0&&(i+=360),i}let kt;function Uc(t){if(!kt||kt.tt!==t.tt){const e=t.tt/36525;let r=15*aa(t).ee;const i=Pc(t);let n=((r+.014506+((((-368e-10*e-29956e-9)*e-44e-8)*e+1.3915817)*e+4612.156534)*e)/3600+i)%360/15;n<0&&(n+=24),kt={tt:t.tt,st:n}}return kt.st}function Gc(t){const e=Ue(t);return Uc(e)}function Hc(t,e){const r=aa(t),i=r.mobl*Oe,n=r.tobl*Oe,a=r.dpsi*Ye,s=Math.cos(i),o=Math.sin(i),c=Math.cos(n),u=Math.sin(n),d=Math.cos(a),h=Math.sin(a),p=d,T=-h*s,g=-h*o,_=h*c,w=d*s*c+o*u,C=d*o*c-s*u,R=h*u,E=d*s*u-o*c,L=d*o*u+s*c;if(e===Te.From2000)return new at([[p,_,R],[T,w,E],[g,C,L]]);if(e===Te.Into2000)return new at([[p,T,g],[_,w,C],[R,E,L]]);throw"Invalid precess direction"}class re{constructor(e,r,i,n){this.x=e,this.y=r,this.z=i,this.t=n}Length(){return Math.hypot(this.x,this.y,this.z)}}class Fc{constructor(e,r,i,n,a,s,o){this.x=e,this.y=r,this.z=i,this.vx=n,this.vy=a,this.vz=s,this.t=o}}class Bc{constructor(e,r,i){this.lat=Yt(e),this.lon=Yt(r),this.dist=Yt(i)}}class at{constructor(e){this.rot=e}}function ti(t){const e=Ue(t),r=Mc(e),i=r.distance_au*Math.cos(r.geo_eclip_lat),n=[i*Math.cos(r.geo_eclip_lon),i*Math.sin(r.geo_eclip_lon),r.distance_au*Math.sin(r.geo_eclip_lat)],a=Dc(e,n),s=Lc(a,e,Te.Into2000);return new re(s[0],s[1],s[2],e)}function Je(t,e,r){let i=1,n=0;for(let a of t){let s=0;for(let[c,u,d]of a)s+=c*Math.cos(u+e*d);let o=i*s;r&&(o%=de),n+=o,i*=e}return n}function Pr(t,e){let r=1,i=0,n=0,a=0;for(let s of t){let o=0,c=0;for(let[u,d,h]of s){let p=d+e*h;o+=u*h*Math.sin(p),a>0&&(c+=u*Math.cos(p))}n+=a*i*c-r*o,i=r,r*=e,++a}return n}const Tt=365250,ri=0,ii=1,ni=2;function ai(t){return new X(t[0]+44036e-11*t[1]-190919e-12*t[2],-479966e-12*t[0]+.917482137087*t[1]-.397776982902*t[2],.397776982902*t[1]+.917482137087*t[2])}function oa(t,e,r){const i=r*Math.cos(e),n=Math.cos(t),a=Math.sin(t);return[i*n,i*a,r*Math.sin(e)]}function $t(t,e){const r=e.tt/Tt,i=Je(t[ri],r,!0),n=Je(t[ii],r,!1),a=Je(t[ni],r,!1),s=oa(i,n,a);return ai(s).ToAstroVector(e)}function zc(t,e){const r=e/Tt,i=Je(t[ri],r,!0),n=Je(t[ii],r,!1),a=Je(t[ni],r,!1),s=Pr(t[ri],r),o=Pr(t[ii],r),c=Pr(t[ni],r),u=Math.cos(i),d=Math.sin(i),h=Math.cos(n),p=Math.sin(n),T=+(c*h*u)-a*p*u*o-a*h*d*s,g=+(c*h*d)-a*p*d*o+a*h*u*s,_=+(c*p)+a*h*o,w=oa(i,n,a),C=[T/Tt,g/Tt,_/Tt],R=ai(w),E=ai(C);return new Le(e,R,E)}function Wt(t,e,r,i){const n=i/(i+Ai),a=$t($e[r],e);t.x+=n*a.x,t.y+=n*a.y,t.z+=n*a.z}function kc(t){const e=new re(0,0,0,t);return Wt(e,t,b.Jupiter,Zr),Wt(e,t,b.Saturn,Qr),Wt(e,t,b.Uranus,Jr),Wt(e,t,b.Neptune,ei),e}const si=51,Wc=29200,je=146,le=201,we=[[-73e4,[-26.118207232108,-14.376168177825,3.384402515299],[.0016339372163656,-.0027861699588508,-.0013585880229445]],[-700800,[41.974905202127,-.448502952929,-12.770351505989],[.00073458569351457,.0022785014891658,.00048619778602049]],[-671600,[14.706930780744,44.269110540027,9.353698474772],[-.00210001479998,.00022295915939915,.00070143443551414]],[-642400,[-29.441003929957,-6.43016153057,6.858481011305],[.00084495803960544,-.0030783914758711,-.0012106305981192]],[-613200,[39.444396946234,-6.557989760571,-13.913760296463],[.0011480029005873,.0022400006880665,.00035168075922288]],[-584e3,[20.2303809507,43.266966657189,7.382966091923],[-.0019754081700585,.00053457141292226,.00075929169129793]],[-554800,[-30.65832536462,2.093818874552,9.880531138071],[61010603013347e-18,-.0031326500935382,-.00099346125151067]],[-525600,[35.737703251673,-12.587706024764,-14.677847247563],[.0015802939375649,.0021347678412429,.00019074436384343]],[-496400,[25.466295188546,41.367478338417,5.216476873382],[-.0018054401046468,.0008328308359951,.00080260156912107]],[-467200,[-29.847174904071,10.636426313081,12.297904180106],[-.00063257063052907,-.0029969577578221,-.00074476074151596]],[-438e3,[30.774692107687,-18.236637015304,-14.945535879896],[.0020113162005465,.0019353827024189,-20937793168297e-19]],[-408800,[30.243153324028,38.656267888503,2.938501750218],[-.0016052508674468,.0011183495337525,.00083333973416824]],[-379600,[-27.288984772533,18.643162147874,14.023633623329],[-.0011856388898191,-.0027170609282181,-.00049015526126399]],[-350400,[24.519605196774,-23.245756064727,-14.626862367368],[.0024322321483154,.0016062008146048,-.00023369181613312]],[-321200,[34.505274805875,35.125338586954,.557361475637],[-.0013824391637782,.0013833397561817,.00084823598806262]],[-292e3,[-23.275363915119,25.818514298769,15.055381588598],[-.0016062295460975,-.0023395961498533,-.00024377362639479]],[-262800,[17.050384798092,-27.180376290126,-13.608963321694],[.0028175521080578,.0011358749093955,-.00049548725258825]],[-233600,[38.093671910285,30.880588383337,-1.843688067413],[-.0011317697153459,.0016128814698472,.00084177586176055]],[-204400,[-18.197852930878,31.932869934309,15.438294826279],[-.0019117272501813,-.0019146495909842,-19657304369835e-18]],[-175200,[8.528924039997,-29.618422200048,-11.805400994258],[.0031034370787005,.0005139363329243,-.00077293066202546]],[-146e3,[40.94685725864,25.904973592021,-4.256336240499],[-.00083652705194051,.0018129497136404,.0008156422827306]],[-116800,[-12.326958895325,36.881883446292,15.217158258711],[-.0021166103705038,-.001481442003599,.00017401209844705]],[-87600,[-.633258375909,-30.018759794709,-9.17193287495],[.0032016994581737,-.00025279858672148,-.0010411088271861]],[-58400,[42.936048423883,20.344685584452,-6.588027007912],[-.00050525450073192,.0019910074335507,.00077440196540269]],[-29200,[-5.975910552974,40.61180995846,14.470131723673],[-.0022184202156107,-.0010562361130164,.00033652250216211]],[0,[-9.875369580774,-27.978926224737,-5.753711824704],[.0030287533248818,-.0011276087003636,-.0012651326732361]],[29200,[43.958831986165,14.214147973292,-8.808306227163],[-.00014717608981871,.0021404187242141,.00071486567806614]],[58400,[.67813676352,43.094461639362,13.243238780721],[-.0022358226110718,-.00063233636090933,.00047664798895648]],[87600,[-18.282602096834,-23.30503958666,-1.766620508028],[.0025567245263557,-.0019902940754171,-.0013943491701082]],[116800,[43.873338744526,7.700705617215,-10.814273666425],[.00023174803055677,.0022402163127924,.00062988756452032]],[146e3,[7.392949027906,44.382678951534,11.629500214854],[-.002193281545383,-.00021751799585364,.00059556516201114]],[175200,[-24.981690229261,-16.204012851426,2.466457544298],[.001819398914958,-.0026765419531201,-.0013848283502247]],[204400,[42.530187039511,.845935508021,-12.554907527683],[.00065059779150669,.0022725657282262,.00051133743202822]],[233600,[13.999526486822,44.462363044894,9.669418486465],[-.0021079296569252,.00017533423831993,.00069128485798076]],[262800,[-29.184024803031,-7.371243995762,6.493275957928],[.00093581363109681,-.0030610357109184,-.0012364201089345]],[292e3,[39.831980671753,-6.078405766765,-13.909815358656],[.0011117769689167,.0022362097830152,.00036230548231153]],[321200,[20.294955108476,43.417190420251,7.450091985932],[-.0019742157451535,.00053102050468554,.00075938408813008]],[350400,[-30.66999230216,2.318743558955,9.973480913858],[45605107450676e-18,-.0031308219926928,-.00099066533301924]],[379600,[35.626122155983,-12.897647509224,-14.777586508444],[.0016015684949743,.0021171931182284,.00018002516202204]],[408800,[26.133186148561,41.232139187599,5.00640132622],[-.0017857704419579,.00086046232702817,.00080614690298954]],[438e3,[-29.57674022923,11.863535943587,12.631323039872],[-.00072292830060955,-.0029587820140709,-.000708242964503]],[467200,[29.910805787391,-19.159019294,-15.013363865194],[.0020871080437997,.0018848372554514,-38528655083926e-18]],[496400,[31.375957451819,38.050372720763,2.433138343754],[-.0015546055556611,.0011699815465629,.00083565439266001]],[525600,[-26.360071336928,20.662505904952,14.414696258958],[-.0013142373118349,-.0026236647854842,-.00042542017598193]],[554800,[22.599441488648,-24.508879898306,-14.484045731468],[.0025454108304806,.0014917058755191,-.00030243665086079]],[584e3,[35.877864013014,33.894226366071,-.224524636277],[-.0012941245730845,.0014560427668319,.00084762160640137]],[613200,[-21.538149762417,28.204068269761,15.321973799534],[-.001731211740901,-.0021939631314577,-.0001631691327518]],[642400,[13.971521374415,-28.339941764789,-13.083792871886],[.0029334630526035,.00091860931752944,-.00059939422488627]],[671600,[39.526942044143,28.93989736011,-2.872799527539],[-.0010068481658095,.001702113288809,.00083578230511981]],[700800,[-15.576200701394,34.399412961275,15.466033737854],[-.0020098814612884,-.0017191109825989,70414782780416e-18]],[73e4,[4.24325283709,-30.118201690825,-10.707441231349],[.0031725847067411,.0001609846120227,-.00090672150593868]]];class X{constructor(e,r,i){this.x=e,this.y=r,this.z=i}clone(){return new X(this.x,this.y,this.z)}ToAstroVector(e){return new re(this.x,this.y,this.z,e)}static zero(){return new X(0,0,0)}quadrature(){return this.x*this.x+this.y*this.y+this.z*this.z}add(e){return new X(this.x+e.x,this.y+e.y,this.z+e.z)}sub(e){return new X(this.x-e.x,this.y-e.y,this.z-e.z)}incr(e){this.x+=e.x,this.y+=e.y,this.z+=e.z}decr(e){this.x-=e.x,this.y-=e.y,this.z-=e.z}mul(e){return new X(e*this.x,e*this.y,e*this.z)}div(e){return new X(this.x/e,this.y/e,this.z/e)}mean(e){return new X((this.x+e.x)/2,(this.y+e.y)/2,(this.z+e.z)/2)}neg(){return new X(-this.x,-this.y,-this.z)}}class Le{constructor(e,r,i){this.tt=e,this.r=r,this.v=i}clone(){return new Le(this.tt,this.r,this.v)}sub(e){return new Le(this.tt,this.r.sub(e.r),this.v.sub(e.v))}}function Vc(t){let[e,[r,i,n],[a,s,o]]=t;return new Le(e,new X(r,i,n),new X(a,s,o))}function Vt(t,e,r,i){const n=i/(i+Ai),a=zc($e[r],e);return t.r.incr(a.r.mul(n)),t.v.incr(a.v.mul(n)),a}function pt(t,e,r){const i=r.sub(t),n=i.quadrature();return i.mul(e/(n*Math.sqrt(n)))}class Ii{constructor(e){let r=new Le(e,new X(0,0,0),new X(0,0,0));this.Jupiter=Vt(r,e,b.Jupiter,Zr),this.Saturn=Vt(r,e,b.Saturn,Qr),this.Uranus=Vt(r,e,b.Uranus,Jr),this.Neptune=Vt(r,e,b.Neptune,ei),this.Jupiter.r.decr(r.r),this.Jupiter.v.decr(r.v),this.Saturn.r.decr(r.r),this.Saturn.v.decr(r.v),this.Uranus.r.decr(r.r),this.Uranus.v.decr(r.v),this.Neptune.r.decr(r.r),this.Neptune.v.decr(r.v),this.Sun=new Le(e,r.r.mul(-1),r.v.mul(-1))}Acceleration(e){let r=pt(e,Ai,this.Sun.r);return r.incr(pt(e,Zr,this.Jupiter.r)),r.incr(pt(e,Qr,this.Saturn.r)),r.incr(pt(e,Jr,this.Uranus.r)),r.incr(pt(e,ei,this.Neptune.r)),r}}class Tr{constructor(e,r,i,n){this.tt=e,this.r=r,this.v=i,this.a=n}clone(){return new Tr(this.tt,this.r.clone(),this.v.clone(),this.a.clone())}}class ca{constructor(e,r){this.bary=e,this.grav=r}}function tr(t,e,r,i){return new X(e.x+t*(r.x+t*i.x/2),e.y+t*(r.y+t*i.y/2),e.z+t*(r.z+t*i.z/2))}function ln(t,e,r){return new X(e.x+t*r.x,e.y+t*r.y,e.z+t*r.z)}function oi(t,e){const r=t-e.tt,i=new Ii(t),n=tr(r,e.r,e.v,e.a),a=i.Acceleration(n).mean(e.a),s=tr(r,e.r,e.v,a),o=e.v.add(a.mul(r)),c=i.Acceleration(s),u=new Tr(t,s,o,c);return new ca(i,u)}const Xc=[];function ua(t,e){const r=Math.floor(t);return r<0?0:r>=e?e-1:r}function ci(t){const e=Vc(t),r=new Ii(e.tt),i=e.r.add(r.Sun.r),n=e.v.add(r.Sun.v),a=r.Acceleration(i),s=new Tr(e.tt,i,n,a);return new ca(r,s)}function Yc(t,e){const r=we[0][0];if(e<r||e>we[si-1][0])return null;const i=ua((e-r)/Wc,si-1);if(!t[i]){const a=t[i]=[];a[0]=ci(we[i]).grav,a[le-1]=ci(we[i+1]).grav;let s,o=a[0].tt;for(s=1;s<le-1;++s)a[s]=oi(o+=je,a[s-1]).grav;o=a[le-1].tt;var n=[];for(n[le-1]=a[le-1],s=le-2;s>0;--s)n[s]=oi(o-=je,n[s+1]).grav;for(s=le-2;s>0;--s){const c=s/(le-1);a[s].r=a[s].r.mul(1-c).add(n[s].r.mul(c)),a[s].v=a[s].v.mul(1-c).add(n[s].v.mul(c)),a[s].a=a[s].a.mul(1-c).add(n[s].a.mul(c))}}return t[i]}function mn(t,e,r){let i=ci(t);const n=Math.ceil((e-i.grav.tt)/r);for(let a=0;a<n;++a)i=oi(a+1===n?e:i.grav.tt+r,i.grav);return i}function $c(t,e){let r,i,n;const a=Yc(Xc,t.tt);if(a){const s=ua((t.tt-a[0].tt)/je,le-1),o=a[s],c=a[s+1],u=o.a.mean(c.a),d=tr(t.tt-o.tt,o.r,o.v,u),h=ln(t.tt-o.tt,o.v,u),p=tr(t.tt-c.tt,c.r,c.v,u),T=ln(t.tt-c.tt,c.v,u),g=(t.tt-o.tt)/je;r=d.mul(1-g).add(p.mul(g)),i=h.mul(1-g).add(T.mul(g))}else{let s;t.tt<we[0][0]?s=mn(we[0],t.tt,-je):s=mn(we[si-1],t.tt,+je),r=s.grav.r,i=s.grav.v,n=s.bary}return n||(n=new Ii(t.tt)),r=r.sub(n.Sun.r),i=i.sub(n.Sun.v),new Fc(r.x,r.y,r.z,i.x,i.y,i.z,t)}function Rt(t,e){var r=Ue(e);if(t in $e)return $t($e[t],r);if(t===b.Pluto){const s=$c(r);return new re(s.x,s.y,s.z,r)}if(t===b.Sun)return new re(0,0,0,r);if(t===b.Moon){var i=$t($e.Earth,r),n=ti(r);return new re(i.x+n.x,i.y+n.y,i.z+n.z,r)}if(t===b.EMB){const s=$t($e.Earth,r),o=ti(r),c=1+xc;return new re(s.x+o.x/c,s.y+o.y/c,s.z+o.z/c,r)}if(t===b.SSB)return kc(r);const a=ia(t);if(a){const s=new Bc(a.dec,15*a.ra,a.dist);return eu(s,r)}throw`HelioVector: Unknown body "${t}"`}function jc(t,e){let r=e,i=0;for(let n=0;n<10;++n){const a=t(r),s=a.Length()/_c;if(s>1)throw"Object is too distant for light-travel solver.";const o=e.AddDays(-s);if(i=Math.abs(o.tt-r.tt),i<1e-9)return a;r=o}throw`Light-travel time solver did not converge: dt = ${i}`}class qc{constructor(e,r,i,n){this.observerBody=e,this.targetBody=r,this.aberration=i,this.observerPos=n}Position(e){this.aberration&&(this.observerPos=Rt(this.observerBody,e));const r=Rt(this.targetBody,e);return new re(r.x-this.observerPos.x,r.y-this.observerPos.y,r.z-this.observerPos.z,e)}}function Kc(t,e,r,i){const n=Ue(t);if(ia(r)){const o=Rt(r,n),c=Rt(e,n);return new re(o.x-c.x,o.y-c.y,o.z-c.z,n)}let a;a=Rt(e,n);const s=new qc(e,r,i,a);return jc(o=>s.Position(o),n)}function Zc(t,e,r){const i=Ue(e);switch(t){case b.Earth:return new re(0,0,0,i);case b.Moon:return ti(i);default:const n=Kc(i,b.Earth,t,r);return n.t=i,n}}var hn;(function(t){t[t.Pericenter=0]="Pericenter",t[t.Apocenter=1]="Apocenter"})(hn||(hn={}));function Qc(t,e){return new at([[e.rot[0][0]*t.rot[0][0]+e.rot[1][0]*t.rot[0][1]+e.rot[2][0]*t.rot[0][2],e.rot[0][1]*t.rot[0][0]+e.rot[1][1]*t.rot[0][1]+e.rot[2][1]*t.rot[0][2],e.rot[0][2]*t.rot[0][0]+e.rot[1][2]*t.rot[0][1]+e.rot[2][2]*t.rot[0][2]],[e.rot[0][0]*t.rot[1][0]+e.rot[1][0]*t.rot[1][1]+e.rot[2][0]*t.rot[1][2],e.rot[0][1]*t.rot[1][0]+e.rot[1][1]*t.rot[1][1]+e.rot[2][1]*t.rot[1][2],e.rot[0][2]*t.rot[1][0]+e.rot[1][2]*t.rot[1][1]+e.rot[2][2]*t.rot[1][2]],[e.rot[0][0]*t.rot[2][0]+e.rot[1][0]*t.rot[2][1]+e.rot[2][0]*t.rot[2][2],e.rot[0][1]*t.rot[2][0]+e.rot[1][1]*t.rot[2][1]+e.rot[2][1]*t.rot[2][2],e.rot[0][2]*t.rot[2][0]+e.rot[1][2]*t.rot[2][1]+e.rot[2][2]*t.rot[2][2]]])}function Jc(t,e,r){const i=Yt(r)*Oe,n=Math.cos(i),a=Math.sin(i),s=(e+1)%3,o=(e+2)%3,c=e;let u=[[0,0,0],[0,0,0],[0,0,0]];return u[s][s]=n*t.rot[s][s]-a*t.rot[s][o],u[s][o]=a*t.rot[s][s]+n*t.rot[s][o],u[s][c]=t.rot[s][c],u[o][s]=n*t.rot[o][s]-a*t.rot[o][o],u[o][o]=a*t.rot[o][s]+n*t.rot[o][o],u[o][c]=t.rot[o][c],u[c][s]=n*t.rot[c][s]-a*t.rot[c][o],u[c][o]=a*t.rot[c][s]+n*t.rot[c][o],u[c][c]=t.rot[c][c],new at(u)}function eu(t,e){e=Ue(e);const r=t.lat*Oe,i=t.lon*Oe,n=t.dist*Math.cos(r);return new re(n*Math.cos(i),n*Math.sin(i),t.dist*Math.sin(r),e)}function tu(t){t=Ue(t);const e=sa(t,Te.From2000),r=Hc(t,Te.From2000);return Qc(e,r)}var fn;(function(t){t.Penumbral="penumbral",t.Partial="partial",t.Annular="annular",t.Total="total"})(fn||(fn={}));var pn;(function(t){t[t.Invalid=0]="Invalid",t[t.Ascending=1]="Ascending",t[t.Descending=-1]="Descending"})(pn||(pn={}));const ru=.001/ra,iu=new f,da=new H,nu=new H;function Ni(t){return t instanceof Ae?t:new Ae(t instanceof Date?t:new Date(t))}function au(t,e=new f){const{x:r,y:i,z:n}=t;return e.set(r,i,n)}function su(t,e=new H){const[r,i,n]=t.rot;return e.set(r[0],i[0],n[0],0,r[1],i[1],n[1],0,r[2],i[2],n[2],0,0,0,0,1)}function yi(t,e=new H){const r=Ni(t),i=Jc(tu(r),2,-15*Gc(r));return su(i,e)}function la(t,e,r,i,n){const a=Zc(t,e,!1);if(au(a,r),i!=null){const s=yi(e,nu).transpose();r.sub(iu.copy(i).applyMatrix4(s).multiplyScalar(ru))}return r.normalize()}function nd(t,e=new f,r){const i=Ni(t);return la(b.Sun,i,e,r).applyMatrix4(yi(i,da))}function ad(t,e=new f,r){const i=Ni(t);return la(b.Moon,i,e,r).applyMatrix4(yi(i,da))}function ma(t){return Math.sqrt(Math.max(t,0))}function ou(t){return Math.max(t,0)}function cu(t,e,r){const{bottomRadius:i}=t;return r<0&&e**2*(r**2-1)+i**2>=0}function uu(t,e,r){const{topRadius:i}=t,n=e**2*(r**2-1)+i**2;return ou(-e*r+ma(n))}function rr(t,e){return .5/e+t*(1-1/e)}const du=new f,gn=new f,lu=new f,_n=new WeakMap;function mu(t){t.image;let e=an(t.image.data)?t.image.data:an(t.userData.imageData)?t.userData.imageData:void 0;if(t.type===me&&e instanceof Uint16Array){const r=_n.get(e.buffer);r==null?(e=new Pe(e.buffer),_n.set(e.buffer,e)):e=r}return e}function Xt(t,e,r){const i=e*4;return r.set(t[i],t[i+1],t[i+2])}function ha(t,e,r){const i=mu(t);if(i==null)return r.setScalar(0);t.image;const{width:n,height:a}=t.image,s=nt(e.x,0,1)*(n-1),o=nt(e.y,0,1)*(a-1),c=Math.floor(s),u=Math.floor(o),d=s-c,h=o-u,p=d,T=h,g=c%n,_=(g+1)%n,w=u%a,C=(w+1)%a,R=Xt(i,w*n+g,du),E=Xt(i,w*n+_,gn),L=R.lerp(E,p),V=Xt(i,C*n+g,gn),K=Xt(i,C*n+_,lu),Z=V.lerp(K,p);return r.copy(L.lerp(Z,T))}function hu(t,e,r,i){const{topRadius:n,bottomRadius:a}=t,s=Math.sqrt(n**2-a**2),o=ma(e**2-a**2),c=uu(t,e,r),u=n-e,d=o+s,h=(c-u)/(d-u),p=o/s;return i.set(rr(h,lt),rr(p,mt))}const fu=new f,Ur=new f,pu=new Y;function gu(t,e,r,i=new sr,{ellipsoid:n=De.WGS84,correctAltitude:a=!0}={},s=ht.DEFAULT){const o=fu.copy(e);if(a){const g=n.projectOnSurface(e,Ur);g!=null&&o.sub(n.getOsculatingSphereCenter(g,s.bottomRadius,Ur))}const c=Ur;let u=o.length(),d=o.dot(r);const{topRadius:h}=s,p=-d-Math.sqrt(d**2-u**2+h**2);if(p>0&&(u=h,d+=p),u>h)c.set(1,1,1);else{const g=d/u;if(cu(s,u,g))c.setScalar(0);else{const _=hu(s,u,g,pu);ha(t,_,c)}}const T=c.multiply(s.solarIrradiance).multiply(s.sunRadianceToRelativeLuminance);return i.setFromVector3(T)}const _u=`precision highp float;
precision highp sampler3D;

#include "bruneton/definitions"
#include "bruneton/common"
#include "bruneton/precompute"

uniform AtmosphereParameters ATMOSPHERE;

uniform sampler2D transmittanceTexture;

layout(location = 0) out vec4 outputColor;

void main() {
  vec3 deltaIrradiance;
  vec3 irradiance;
  deltaIrradiance = ComputeDirectIrradianceTexture(
    ATMOSPHERE,
    transmittanceTexture,
    gl_FragCoord.xy
  );
  irradiance = vec3(0.0);
  outputColor = vec4(OUTPUT, 1.0);
}
`,Tu=`precision highp float;
precision highp sampler3D;

#include "bruneton/definitions"
#include "bruneton/common"
#include "bruneton/precompute"

uniform AtmosphereParameters ATMOSPHERE;

uniform mat3 luminanceFromRadiance;
uniform sampler3D singleRayleighScatteringTexture;
uniform sampler3D singleMieScatteringTexture;
uniform sampler3D multipleScatteringTexture;
uniform int scatteringOrder;

layout(location = 0) out vec4 outputColor;

void main() {
  vec3 deltaIrradiance;
  vec3 irradiance;
  deltaIrradiance = ComputeIndirectIrradianceTexture(
    ATMOSPHERE,
    singleRayleighScatteringTexture,
    singleMieScatteringTexture,
    multipleScatteringTexture,
    gl_FragCoord.xy,
    scatteringOrder
  );
  irradiance = luminanceFromRadiance * deltaIrradiance;
  outputColor = vec4(OUTPUT, 1.0);
}
`,vu=`precision highp float;
precision highp sampler3D;

#include "bruneton/definitions"
#include "bruneton/common"
#include "bruneton/precompute"

uniform AtmosphereParameters ATMOSPHERE;

uniform mat3 luminanceFromRadiance;
uniform sampler2D transmittanceTexture;
uniform sampler3D scatteringDensityTexture;
uniform int layer;

layout(location = 0) out vec4 outputColor;

void main() {
  vec4 deltaMultipleScattering;
  vec4 scattering;
  float nu;
  deltaMultipleScattering.rgb = ComputeMultipleScatteringTexture(
    ATMOSPHERE,
    transmittanceTexture,
    scatteringDensityTexture,
    vec3(gl_FragCoord.xy, float(layer) + 0.5),
    nu
  );
  deltaMultipleScattering.a = 1.0;
  scattering = vec4(
    luminanceFromRadiance * deltaMultipleScattering.rgb / RayleighPhaseFunction(nu),
    0.0
  );
  outputColor = OUTPUT;
}
`,Su=`precision highp float;
precision highp sampler3D;

#include "bruneton/definitions"
#include "bruneton/common"
#include "bruneton/precompute"

uniform AtmosphereParameters ATMOSPHERE;

uniform sampler2D transmittanceTexture;
uniform sampler3D singleRayleighScatteringTexture;
uniform sampler3D singleMieScatteringTexture;
uniform sampler3D multipleScatteringTexture;
uniform sampler2D irradianceTexture;
uniform int scatteringOrder;
uniform int layer;

layout(location = 0) out vec4 scatteringDensity;

void main() {
  scatteringDensity.rgb = ComputeScatteringDensityTexture(
    ATMOSPHERE,
    transmittanceTexture,
    singleRayleighScatteringTexture,
    singleMieScatteringTexture,
    multipleScatteringTexture,
    irradianceTexture,
    vec3(gl_FragCoord.xy, float(layer) + 0.5),
    scatteringOrder
  );
  scatteringDensity.a = 1.0;
}
`,Eu=`precision highp float;
precision highp sampler3D;

#include "bruneton/definitions"
#include "bruneton/common"
#include "bruneton/precompute"

uniform AtmosphereParameters ATMOSPHERE;

uniform mat3 luminanceFromRadiance;
uniform sampler2D transmittanceTexture;
uniform int layer;

layout(location = 0) out vec4 outputColor;

void main() {
  vec4 deltaRayleigh;
  vec4 deltaMie;
  vec4 scattering;
  vec4 singleMieScattering;
  ComputeSingleScatteringTexture(
    ATMOSPHERE,
    transmittanceTexture,
    vec3(gl_FragCoord.xy, float(layer) + 0.5),
    deltaRayleigh.rgb,
    deltaMie.rgb
  );
  deltaRayleigh.a = 1.0;
  deltaMie.a = 1.0;
  scattering = vec4(
    luminanceFromRadiance * deltaRayleigh.rgb,
    (luminanceFromRadiance * deltaMie.rgb).r
  );
  singleMieScattering.rgb = luminanceFromRadiance * deltaMie.rgb;
  singleMieScattering.a = 1.0;
  outputColor = OUTPUT;
}
`,Ru=`precision highp float;
precision highp sampler3D;

#include "bruneton/definitions"
#include "bruneton/common"
#include "bruneton/precompute"

uniform AtmosphereParameters ATMOSPHERE;

layout(location = 0) out vec4 transmittance;

void main() {
  transmittance.rgb = ComputeTransmittanceToTopAtmosphereBoundaryTexture(
    ATMOSPHERE,
    gl_FragCoord.xy
  );
  transmittance.a = 1.0;
}
`,xu=`
  precision highp float;
  in vec2 position;
  void main() {
    gl_Position = vec4(position, 1.0, 1.0);
  }
`;function ir(t,e,r){const i=new _e(e,r,{depthBuffer:!1,type:t,format:Nn}),n=i.texture;return n.minFilter=Ie,n.magFilter=Ie,n.wrapS=vt,n.wrapT=vt,n.colorSpace=ar,i}function et(t,e,r,i){const n=new wa(e,r,i,{depthBuffer:!1,type:t,format:Nn}),a=n.texture;return a.minFilter=Ie,a.magFilter=Ie,a.wrapS=vt,a.wrapT=vt,a.wrapR=vt,a.colorSpace=ar,n}function Au(t){const e=t[Symbol.iterator]();return new Promise((r,i)=>{const n=()=>{try{const{value:a,done:s}=e.next();s===!0?r(a):cn(n)}catch(a){i(a instanceof Error?a:new Error)}};cn(n)})}async function Tn(t,e,r){const{width:i,height:n}=e,a=r.type===me?new Uint16Array(i*n*4):new Float32Array(i*n*4);await t.readRenderTargetPixelsAsync(e,0,0,e.width,e.height,a),r.userData.imageData=a}class Iu{constructor(e){this.lambdas=new f,this.luminanceFromRadiance=new qe,e===me&&(this.opticalDepth=ir(e,lt,mt)),this.deltaIrradiance=ir(e,ut,dt),this.deltaRayleighScattering=et(e,Ke,Ze,Qe),this.deltaMieScattering=et(e,Ke,Ze,Qe),this.deltaScatteringDensity=et(e,Ke,Ze,Qe),this.deltaMultipleScattering=this.deltaRayleighScattering}dispose(){this.opticalDepth?.dispose(),this.deltaIrradiance.dispose(),this.deltaRayleighScattering.dispose(),this.deltaMieScattering.dispose(),this.deltaScatteringDensity.dispose()}}class Ve extends In{constructor(e){super({glslVersion:li,vertexShader:xu,...e,defines:{TRANSMITTANCE_TEXTURE_WIDTH:lt.toFixed(0),TRANSMITTANCE_TEXTURE_HEIGHT:mt.toFixed(0),SCATTERING_TEXTURE_R_SIZE:hr.toFixed(0),SCATTERING_TEXTURE_MU_SIZE:fr.toFixed(0),SCATTERING_TEXTURE_MU_S_SIZE:pr.toFixed(0),SCATTERING_TEXTURE_NU_SIZE:gr.toFixed(0),IRRADIANCE_TEXTURE_WIDTH:ut.toFixed(0),IRRADIANCE_TEXTURE_HEIGHT:dt.toFixed(0),...e.defines}})}set additive(e){this.transparent=e,this.blending=e?ba:At,this.blendEquation=Gi,this.blendEquationAlpha=Gi,this.blendSrc=Pt,this.blendDst=Pt,this.blendSrcAlpha=Pt,this.blendDstAlpha=Pt}setUniforms(e){const r=this.uniforms;r.luminanceFromRadiance!=null&&r.luminanceFromRadiance.value.copy(e.luminanceFromRadiance),r.singleRayleighScatteringTexture!=null&&(r.singleRayleighScatteringTexture.value=e.deltaRayleighScattering.texture),r.singleMieScatteringTexture!=null&&(r.singleMieScatteringTexture.value=e.deltaMieScattering.texture),r.multipleScatteringTexture!=null&&(r.multipleScatteringTexture.value=e.deltaMultipleScattering.texture),r.scatteringDensityTexture!=null&&(r.scatteringDensityTexture.value=e.deltaScatteringDensity.texture),r.irradianceTexture!=null&&(r.irradianceTexture.value=e.deltaIrradiance.texture)}}class sd{constructor(e,{type:r=Ps(e)?vn:me,combinedScattering:i=!0,higherOrderScattering:n=!0}={}){this.transmittanceMaterial=new Ve({fragmentShader:se(Ru,{bruneton:{common:he,definitions:fe,precompute:ze}})}),this.directIrradianceMaterial=new Ve({fragmentShader:se(_u,{bruneton:{common:he,definitions:fe,precompute:ze}}),uniforms:{transmittanceTexture:new l(null)}}),this.singleScatteringMaterial=new Ve({fragmentShader:se(Eu,{bruneton:{common:he,definitions:fe,precompute:ze}}),uniforms:{luminanceFromRadiance:new l(new qe),transmittanceTexture:new l(null),layer:new l(0)}}),this.scatteringDensityMaterial=new Ve({fragmentShader:se(Su,{bruneton:{common:he,definitions:fe,precompute:ze}}),uniforms:{transmittanceTexture:new l(null),singleRayleighScatteringTexture:new l(null),singleMieScatteringTexture:new l(null),multipleScatteringTexture:new l(null),irradianceTexture:new l(null),scatteringOrder:new l(0),layer:new l(0)}}),this.indirectIrradianceMaterial=new Ve({fragmentShader:se(Tu,{bruneton:{common:he,definitions:fe,precompute:ze}}),uniforms:{luminanceFromRadiance:new l(new qe),singleRayleighScatteringTexture:new l(null),singleMieScatteringTexture:new l(null),multipleScatteringTexture:new l(null),scatteringOrder:new l(0)}}),this.multipleScatteringMaterial=new Ve({fragmentShader:se(vu,{bruneton:{common:he,definitions:fe,precompute:ze}}),uniforms:{luminanceFromRadiance:new l(new qe),transmittanceTexture:new l(null),scatteringDensityTexture:new l(null),layer:new l(0)}}),this.mesh=new En(new ya(2,2)),this.scene=new Fr().add(this.mesh),this.camera=new An,this.updating=!1,this.renderer=e,this.type=r,this.transmittanceRenderTarget=ir(r,lt,mt),this.scatteringRenderTarget=et(r,Ke,Ze,Qe),this.irradianceRenderTarget=ir(r,ut,dt),i||(this.singleMieScatteringRenderTarget=et(r,Ke,Ze,Qe)),n&&(this.higherOrderScatteringRenderTarget=et(r,Ke,Ze,Qe)),this.textures={transmittanceTexture:this.transmittanceRenderTarget.texture,scatteringTexture:this.scatteringRenderTarget.texture,irradianceTexture:this.irradianceRenderTarget.texture,singleMieScatteringTexture:this.singleMieScatteringRenderTarget?.texture,higherOrderScatteringTexture:this.higherOrderScatteringRenderTarget?.texture}}render3DRenderTarget(e,r){for(let i=0;i<e.depth;++i)r.uniforms.layer.value=i,this.renderer.setRenderTarget(e,i),this.renderer.render(this.scene,this.camera)}computeTransmittance(e){const r=this.transmittanceMaterial;delete r.defines.TRANSMITTANCE_PRECISION_LOG,r.needsUpdate=!0,this.mesh.material=r,this.renderer.setRenderTarget(e.renderTarget),this.renderer.render(this.scene,this.camera)}computeOpticalDepth(e){const r=this.transmittanceMaterial;r.defines.TRANSMITTANCE_PRECISION_LOG="1",r.needsUpdate=!0,this.mesh.material=r,this.renderer.setRenderTarget(e.renderTarget),this.renderer.render(this.scene,this.camera)}computeDirectIrradiance(e){const r=this.directIrradianceMaterial;r.defines.OUTPUT=e.output,r.additive=e.additive,this.type===me?r.defines.TRANSMITTANCE_PRECISION_LOG="1":delete r.defines.TRANSMITTANCE_PRECISION_LOG,r.needsUpdate=!0;const i=r.uniforms;i.transmittanceTexture.value=e.context.opticalDepth?.texture??this.transmittanceRenderTarget.texture,this.mesh.material=r,this.renderer.setRenderTarget(e.renderTarget),this.renderer.render(this.scene,this.camera)}computeSingleScattering(e){const r=this.singleScatteringMaterial;r.defines.OUTPUT=e.output,r.additive=e.additive,this.type===me?r.defines.TRANSMITTANCE_PRECISION_LOG="1":delete r.defines.TRANSMITTANCE_PRECISION_LOG,r.needsUpdate=!0;const i=r.uniforms;i.transmittanceTexture.value=e.context.opticalDepth?.texture??this.transmittanceRenderTarget.texture,r.setUniforms(e.context),this.mesh.material=r,this.render3DRenderTarget(e.renderTarget,r)}computeScatteringDensity(e){const r=this.scatteringDensityMaterial;this.type===me?r.defines.TRANSMITTANCE_PRECISION_LOG="1":delete r.defines.TRANSMITTANCE_PRECISION_LOG,r.needsUpdate=!0;const i=r.uniforms;i.transmittanceTexture.value=e.context.opticalDepth?.texture??this.transmittanceRenderTarget.texture,i.scatteringOrder.value=e.scatteringOrder,r.setUniforms(e.context),this.mesh.material=r,this.render3DRenderTarget(e.renderTarget,r)}computeIndirectIrradiance(e){const r=this.indirectIrradianceMaterial;r.defines.OUTPUT=e.output,r.additive=e.additive,r.needsUpdate=!0;const i=r.uniforms;i.scatteringOrder.value=e.scatteringOrder-1,r.setUniforms(e.context),this.mesh.material=r,this.renderer.setRenderTarget(e.renderTarget),this.renderer.render(this.scene,this.camera)}computeMultipleScattering(e){const r=this.multipleScatteringMaterial;r.defines.OUTPUT=e.output,r.additive=e.additive,this.type===me?r.defines.TRANSMITTANCE_PRECISION_LOG="1":delete r.defines.TRANSMITTANCE_PRECISION_LOG,r.needsUpdate=!0;const i=r.uniforms;i.transmittanceTexture.value=e.context.opticalDepth?.texture??this.transmittanceRenderTarget.texture,r.setUniforms(e.context),this.mesh.material=r,this.render3DRenderTarget(e.renderTarget,r)}*precompute(e,r){this.computeTransmittance({renderTarget:this.transmittanceRenderTarget}),this.type===me&&(ic(e.opticalDepth!=null),this.computeOpticalDepth({renderTarget:e.opticalDepth})),this.computeDirectIrradiance({renderTarget:e.deltaIrradiance,context:e,output:"deltaIrradiance",additive:!1}),this.computeDirectIrradiance({renderTarget:this.irradianceRenderTarget,context:e,output:"irradiance",additive:r}),this.renderer.setRenderTarget(null),yield,this.computeSingleScattering({renderTarget:e.deltaRayleighScattering,context:e,output:"deltaRayleigh",additive:!1}),this.computeSingleScattering({renderTarget:e.deltaMieScattering,context:e,output:"deltaMie",additive:!1}),this.computeSingleScattering({renderTarget:this.scatteringRenderTarget,context:e,output:"scattering",additive:r}),this.singleMieScatteringRenderTarget!=null&&this.computeSingleScattering({renderTarget:this.singleMieScatteringRenderTarget,context:e,output:"singleMieScattering",additive:r}),this.renderer.setRenderTarget(null),yield;for(let i=2;i<=4;++i)this.computeScatteringDensity({renderTarget:e.deltaScatteringDensity,context:e,scatteringOrder:i}),this.computeIndirectIrradiance({renderTarget:e.deltaIrradiance,context:e,scatteringOrder:i,output:"deltaIrradiance",additive:!1}),this.computeIndirectIrradiance({renderTarget:this.irradianceRenderTarget,context:e,scatteringOrder:i,output:"irradiance",additive:!0}),this.computeMultipleScattering({renderTarget:e.deltaMultipleScattering,context:e,output:"deltaMultipleScattering",additive:!1}),this.computeMultipleScattering({renderTarget:this.scatteringRenderTarget,context:e,output:"scattering",additive:!0}),this.higherOrderScatteringRenderTarget!=null&&this.computeMultipleScattering({renderTarget:this.higherOrderScatteringRenderTarget,context:e,output:"scattering",additive:!0}),this.renderer.setRenderTarget(null),yield}async update(e=ht.DEFAULT){this.updating=!0;const r=e.toUniform();this.transmittanceMaterial.uniforms.ATMOSPHERE=r,this.directIrradianceMaterial.uniforms.ATMOSPHERE=r,this.singleScatteringMaterial.uniforms.ATMOSPHERE=r,this.scatteringDensityMaterial.uniforms.ATMOSPHERE=r,this.indirectIrradianceMaterial.uniforms.ATMOSPHERE=r,this.multipleScatteringMaterial.uniforms.ATMOSPHERE=r;const i=this.renderer,n=new Iu(this.type);n.lambdas.set(680,550,440),n.luminanceFromRadiance.identity();const a=i.autoClear;return i.autoClear=!1,await Au(this.precompute(n,!1)),i.autoClear=a,n.dispose(),await Tn(this.renderer,this.transmittanceRenderTarget,this.transmittanceRenderTarget.texture),await Tn(this.renderer,this.irradianceRenderTarget,this.irradianceRenderTarget.texture),this.updating=!1,this.disposeQueue?.(),this.textures}dispose(e={}){if(this.updating){this.disposeQueue=()=>{this.dispose(e),this.disposeQueue=void 0};return}const{textures:r=!0}=e;r||(this.transmittanceRenderTarget.textures.splice(0,1),this.scatteringRenderTarget.textures.splice(0,1),this.irradianceRenderTarget.textures.splice(0,1),this.singleMieScatteringRenderTarget?.textures.splice(0,1),this.higherOrderScatteringRenderTarget?.textures.splice(0,1)),this.transmittanceRenderTarget.dispose(),this.scatteringRenderTarget.dispose(),this.irradianceRenderTarget.dispose(),this.singleMieScatteringRenderTarget?.dispose(),this.higherOrderScatteringRenderTarget?.dispose(),this.transmittanceMaterial.dispose(),this.directIrradianceMaterial.dispose(),this.singleScatteringMaterial.dispose(),this.scatteringDensityMaterial.dispose(),this.indirectIrradianceMaterial.dispose(),this.multipleScatteringMaterial.dispose(),this.mesh.geometry.dispose()}}function Nu({topRadius:t,bottomRadius:e},r,i,n){const a=(r-e)/(t-e),s=i*.5+.5;return n.set(rr(s,ut),rr(a,dt))}const yu=1/Math.sqrt(Math.PI),Gr=Math.sqrt(3)/(2*Math.sqrt(Math.PI)),bu=new f,Hr=new f,wu=new Y,Cu=new qe,Du={ellipsoid:De.WGS84,correctAltitude:!0};class od extends Ca{constructor(e,r=ht.DEFAULT){super(),this.atmosphere=r,this.worldToECEFMatrix=new H;const{irradianceTexture:i=null,ellipsoid:n,correctAltitude:a,sunDirection:s}={...Du,...e};this.irradianceTexture=i,this.ellipsoid=n,this.correctAltitude=a,this.sunDirection=s?.clone()??new f}update(){if(this.irradianceTexture==null)return;const e=this.worldToECEFMatrix,r=Cu.setFromMatrix4(e).transpose(),i=this.getWorldPosition(bu).applyMatrix4(e);if(this.correctAltitude){const d=this.ellipsoid.projectOnSurface(i,Hr);d!=null&&i.add(Ei(d,this.atmosphere.bottomRadius,this.ellipsoid,Hr))}const n=i.length(),a=i.dot(this.sunDirection)/n,s=Nu(this.atmosphere,n,a,wu),o=ha(this.irradianceTexture,s,Hr);o.multiply(this.atmosphere.skyRadianceToRelativeLuminance);const c=this.ellipsoid.getSurfaceNormal(i).applyMatrix3(r),u=this.sh.coefficients;u[0].copy(o).multiplyScalar(yu),u[1].copy(o).multiplyScalar(Gr*c.y),u[2].copy(o).multiplyScalar(Gr*c.z),u[3].copy(o).multiplyScalar(Gr*c.x)}}const Mu=`precision highp float;
precision highp sampler3D;

#define RECIPROCAL_PI 0.3183098861837907

#include "core/raySphereIntersection"

#include "bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "bruneton/common"
#include "bruneton/runtime"

uniform vec3 sunDirection;
uniform float cosSunAngularRadius;
uniform vec3 moonDirection;
uniform float moonAngularRadius;
uniform float lunarRadianceScale;
uniform vec3 groundAlbedo;

#include "sky"

#ifdef HAS_SHADOW_LENGTH
uniform sampler2D shadowLengthBuffer;
#endif // HAS_SHADOW_LENGTH

in vec2 vUv;
in vec3 vCameraPosition;
in vec3 vRayDirection;

layout(location = 0) out vec4 outputColor;

#include <mrt_layout>

void main() {
  float shadowLength = 0.0;
  #ifdef HAS_SHADOW_LENGTH
  shadowLength = texture(shadowLengthBuffer, vUv).r;
  #endif // HAS_SHADOW_LENGTH

  vec3 cameraPosition = vCameraPosition;
  vec3 rayDirection = normalize(vRayDirection);
  vec3 dRDdx = dFdx(rayDirection);
  vec3 dRDdy = dFdy(rayDirection);
  float fragmentAngle = length(dRDdx + dRDdy) / length(rayDirection);

  #ifdef GROUND_ALBEDO

  float r = length(cameraPosition);
  float mu = dot(cameraPosition, rayDirection) / r;
  bool intersectsGround = RayIntersectsGround(ATMOSPHERE, r, mu);
  if (intersectsGround) {
    float distanceToGround = raySphereFirstIntersection(
      cameraPosition,
      rayDirection,
      ATMOSPHERE.bottom_radius
    );
    vec3 groundPosition = rayDirection * distanceToGround + cameraPosition;
    vec3 surfaceNormal = normalize(groundPosition);
    vec3 skyIrradiance;
    vec3 sunIrradiance = GetSunAndSkyIrradiance(
      cameraPosition,
      surfaceNormal,
      sunDirection,
      skyIrradiance
    );
    vec3 transmittance;
    vec3 inscatter = GetSkyRadianceToPoint(
      cameraPosition,
      ATMOSPHERE.bottom_radius * surfaceNormal,
      shadowLength,
      sunDirection,
      transmittance
    );
    vec3 radiance = groundAlbedo * RECIPROCAL_PI * (sunIrradiance + skyIrradiance);
    outputColor.rgb = radiance * transmittance + inscatter;
  } else {
    outputColor.rgb = getSkyRadiance(
      cameraPosition,
      rayDirection,
      shadowLength,
      sunDirection,
      moonDirection,
      moonAngularRadius,
      lunarRadianceScale,
      fragmentAngle
    );
  }

  #else // GROUND_ALBEDO

  outputColor.rgb = getSkyRadiance(
    cameraPosition,
    rayDirection,
    shadowLength,
    sunDirection,
    moonDirection,
    moonAngularRadius,
    lunarRadianceScale,
    fragmentAngle
  );

  #endif // GROUND_ALBEDO

  outputColor.a = 1.0;

  #include <mrt_output>
}
`,Ou=`precision highp float;
precision highp sampler3D;

uniform mat4 inverseProjectionMatrix;
uniform mat4 inverseViewMatrix;
uniform vec3 cameraPosition;
uniform mat4 worldToECEFMatrix;
uniform vec3 altitudeCorrection;

layout(location = 0) in vec3 position;

out vec2 vUv;
out vec3 vCameraPosition;
out vec3 vRayDirection;

void getCameraRay(out vec3 origin, out vec3 direction) {
  bool isPerspective = inverseProjectionMatrix[2][3] != 0.0; // 4th entry in the 3rd column

  if (isPerspective) {
    // Calculate the camera ray for a perspective camera.
    vec4 viewPosition = inverseProjectionMatrix * vec4(position, 1.0);
    vec4 worldDirection = inverseViewMatrix * vec4(viewPosition.xyz, 0.0);
    origin = cameraPosition;
    direction = worldDirection.xyz;
  } else {
    // Unprojected points to calculate direction.
    vec4 nearPoint = inverseProjectionMatrix * vec4(position.xy, -1.0, 1.0);
    vec4 farPoint = inverseProjectionMatrix * vec4(position.xy, -0.9, 1.0);
    nearPoint /= nearPoint.w;
    farPoint /= farPoint.w;

    // Calculate world values
    vec4 worldDirection = inverseViewMatrix * vec4(farPoint.xyz - nearPoint.xyz, 0.0);
    vec4 worldOrigin = inverseViewMatrix * nearPoint;

    // Outputs
    direction = worldDirection.xyz;
    origin = worldOrigin.xyz;
  }
}

void main() {
  vUv = position.xy * 0.5 + 0.5;

  vec3 direction, origin;
  getCameraRay(origin, direction);

  vec3 cameraPositionECEF = (worldToECEFMatrix * vec4(origin, 1.0)).xyz;
  vCameraPosition = (cameraPositionECEF + altitudeCorrection) * METER_TO_LENGTH_UNIT;
  vRayDirection = (worldToECEFMatrix * vec4(direction, 0.0)).xyz;

  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`;var Lu=Object.defineProperty,bi=(t,e,r,i)=>{for(var n=void 0,a=t.length-1,s;a>=0;a--)(s=t[a])&&(n=s(e,r,n)||n);return n&&Lu(e,r,n),n};const Pu={...xi,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1,ground:!0,groundAlbedo:new sr(0)};class wi extends _r{constructor(e){const{sun:r,moon:i,moonDirection:n,moonAngularRadius:a,lunarRadianceScale:s,ground:o,groundAlbedo:c,...u}={...Pu,...e};super({name:"SkyMaterial",glslVersion:li,vertexShader:Ou,fragmentShader:se(Mu,{core:{raySphereIntersection:Jn},bruneton:{common:he,definitions:fe,runtime:Ri},sky:ea}),...u,uniforms:{inverseProjectionMatrix:new l(new H),inverseViewMatrix:new l(new H),moonDirection:new l(n?.clone()??new f),moonAngularRadius:new l(a),lunarRadianceScale:new l(s),groundAlbedo:new l(c.clone()),shadowLengthBuffer:new l(null),...u.uniforms},defines:{PERSPECTIVE_CAMERA:"1"},depthWrite:!1,depthTest:!0}),this.shadowLength=null,this.sun=r,this.moon=i,this.ground=o}onBeforeRender(e,r,i,n,a,s){super.onBeforeRender(e,r,i,n,a,s);const{uniforms:o,defines:c}=this;o.inverseProjectionMatrix.value.copy(i.projectionMatrixInverse),o.inverseViewMatrix.value.copy(i.matrixWorld);const u=c.PERSPECTIVE_CAMERA!=null,d=i.isPerspectiveCamera===!0;d!==u&&(d?c.PERSPECTIVE_CAMERA="1":delete c.PERSPECTIVE_CAMERA,this.needsUpdate=!0);const h=this.groundAlbedo,p=c.GROUND_ALBEDO!=null,T=h.r!==0||h.g!==0||h.b!==0;T!==p&&(T?this.defines.GROUND_ALBEDO="1":delete this.defines.GROUND_ALBEDO,this.needsUpdate=!0);const g=this.shadowLength,_=c.HAS_SHADOW_LENGTH!=null,w=g!=null;w!==_&&(w?c.HAS_SHADOW_LENGTH="1":(delete c.HAS_SHADOW_LENGTH,o.shadowLengthBuffer.value=null),this.needsUpdate=!0),w&&(o.shadowLengthBuffer.value=g.map)}get moonDirection(){return this.uniforms.moonDirection.value}get moonAngularRadius(){return this.uniforms.moonAngularRadius.value}set moonAngularRadius(e){this.uniforms.moonAngularRadius.value=e}get lunarRadianceScale(){return this.uniforms.lunarRadianceScale.value}set lunarRadianceScale(e){this.uniforms.lunarRadianceScale.value=e}get groundAlbedo(){return this.uniforms.groundAlbedo.value}}bi([G("SUN")],wi.prototype,"sun");bi([G("MOON")],wi.prototype,"moon");bi([G("GROUND")],wi.prototype,"ground");class cd extends xn{constructor(e){super();const r=new Int16Array(e),i=new Uint8Array(e),n=new Ui(r,5),a=new Ui(i,10);this.setAttribute("position",new Ir(n,3,0,!0)),this.setAttribute("magnitude",new Ir(a,1,6,!0)),this.setAttribute("color",new Ir(a,3,7,!0)),this.boundingSphere=new Na(new f,1)}}const Uu=`precision highp float;
precision highp sampler3D;

#include "bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "bruneton/common"
#include "bruneton/runtime"

uniform vec3 sunDirection;

in vec3 vCameraPosition;
in vec3 vRayDirection;

layout(location = 0) out vec4 outputColor;

#include <mrt_layout>

in vec3 vColor;

void main() {
  #if !defined(PERSPECTIVE_CAMERA)
  outputColor = vec4(0.0);
  discard; // Rendering celestial objects without perspective doesn't make sense.
  #endif // !defined(PERSPECTIVE_CAMERA)

  #ifdef BACKGROUND
  vec3 rayDirection = normalize(vRayDirection);
  float r = length(vCameraPosition);
  float mu = dot(vCameraPosition, rayDirection) / r;

  if (RayIntersectsGround(ATMOSPHERE, r, mu)) {
    discard;
  }

  vec3 transmittance;
  vec3 radiance = GetSkyRadiance(
    vCameraPosition,
    normalize(vRayDirection),
    0.0, // Shadow length
    sunDirection,
    transmittance
  );
  radiance += transmittance * vColor;
  outputColor = vec4(radiance, 1.0);
  #else // BACKGROUND
  outputColor = vec4(vColor, 1.0);
  #endif // BACKGROUND

  #include <mrt_output>
}
`,Gu=`precision highp float;
precision highp sampler3D;

#define saturate(x) clamp(x, 0.0, 1.0)

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 viewMatrix;
uniform mat4 matrixWorld;
uniform vec3 cameraPosition;
uniform float cameraFar;
uniform mat4 worldToECEFMatrix;
uniform vec3 altitudeCorrection;
uniform float pointSize;
uniform vec2 magnitudeRange;
uniform float intensity;

layout(location = 0) in vec3 position;
layout(location = 1) in float magnitude;
layout(location = 2) in vec3 color;

out vec3 vCameraPosition;
out vec3 vRayDirection;
out vec3 vEllipsoidCenter;
out vec3 vColor;

void main() {
  // Magnitude is stored between 0 to 1 within the given range.
  float m = mix(magnitudeRange.x, magnitudeRange.y, magnitude);
  vec3 v = pow(vec3(10.0), -vec3(magnitudeRange, m) / 2.5);
  vColor = vec3(intensity * color);
  vColor *= saturate((v.z - v.y) / (v.x - v.y));

  #ifdef BACKGROUND
  vec3 worldDirection = normalize(matrixWorld * vec4(position, 1.0)).xyz;
  vec3 cameraPositionECEF = (worldToECEFMatrix * vec4(cameraPosition, 1.0)).xyz;
  vCameraPosition = (cameraPositionECEF + altitudeCorrection) * METER_TO_LENGTH_UNIT;
  vRayDirection = (worldToECEFMatrix * vec4(worldDirection, 0.0)).xyz;
  gl_Position =
    projectionMatrix * viewMatrix * vec4(cameraPosition + worldDirection * cameraFar, 1.0);
  #else // BACKGROUND
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  #endif // BACKGROUND

  gl_PointSize = pointSize;
}
`;var Hu=Object.defineProperty,fa=(t,e,r,i)=>{for(var n=void 0,a=t.length-1,s;a>=0;a--)(s=t[a])&&(n=s(e,r,n)||n);return n&&Hu(e,r,n),n};const Fu={...xi,pointSize:1,intensity:1,background:!0,ground:!0};class pa extends _r{constructor(e){const{pointSize:r,intensity:i,background:n,ground:a,...s}={...Fu,...e};super({name:"StarsMaterial",glslVersion:li,vertexShader:Gu,fragmentShader:se(Uu,{bruneton:{common:he,definitions:fe,runtime:Ri}}),...s,uniforms:{projectionMatrix:new l(new H),modelViewMatrix:new l(new H),viewMatrix:new l(new H),matrixWorld:new l(new H),cameraFar:new l(0),pointSize:new l(0),magnitudeRange:new l(new Y(-2,8)),intensity:new l(i),...s.uniforms},defines:{PERSPECTIVE_CAMERA:"1"},depthWrite:!0,depthTest:!0}),this.pointSize=r,this.background=n,this.ground=a}onBeforeRender(e,r,i,n,a,s){super.onBeforeRender(e,r,i,n,a,s);const o=this.uniforms;o.projectionMatrix.value.copy(i.projectionMatrix),o.modelViewMatrix.value.copy(i.modelViewMatrix),o.viewMatrix.value.copy(i.matrixWorldInverse),o.matrixWorld.value.copy(a.matrixWorld),o.cameraFar.value=i.far,o.pointSize.value=this.pointSize*e.getPixelRatio();const c=i.isPerspectiveCamera===!0;this.defines.PERSPECTIVE_CAMERA!=null!==c&&(c?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}get magnitudeRange(){return this.uniforms.magnitudeRange.value}get intensity(){return this.uniforms.intensity.value}set intensity(e){this.uniforms.intensity.value=e}}fa([G("BACKGROUND")],pa.prototype,"background");fa([G("GROUND")],pa.prototype,"ground");const Bu=new f,zu=new qe,ku={ellipsoid:De.WGS84,correctAltitude:!0,distance:1};class ud extends Da{constructor(e,r=ht.DEFAULT){super(),this.atmosphere=r,this.worldToECEFMatrix=new H;const{irradianceTexture:i=null,ellipsoid:n,correctAltitude:a,sunDirection:s,distance:o}={...ku,...e};this.transmittanceTexture=i,this.ellipsoid=n,this.correctAltitude=a,this.sunDirection=s?.clone()??new f,this.distance=o}update(){const e=this.worldToECEFMatrix,r=zu.setFromMatrix4(e).transpose();if(this.position.copy(this.sunDirection).applyMatrix3(r).normalize().multiplyScalar(this.distance).add(this.target.position),this.transmittanceTexture==null)return;const i=this.target.getWorldPosition(Bu).applyMatrix4(e);gu(this.transmittanceTexture,i,this.sunDirection,this.color,{ellipsoid:this.ellipsoid,correctAltitude:this.correctAltitude},this.atmosphere)}}export{Qu as A,S as B,Ls as C,Zu as D,Vu as E,nd as F,Ju as G,j as H,G as I,gu as J,wi as K,De as N,ie as P,Yu as R,Xu as S,$u as T,sd as V,od as W,ud as X,Ku as _,yi as a,Q as b,ju as c,wn as d,xe as e,se as f,Ei as g,Ri as h,he as i,cd as j,Oo as k,ed as l,br as m,ht as n,Go as o,ec as p,Ko as q,jo as r,_r as s,fe as t,Jn as u,td as v,rd as w,Zo as x,qo as y,ad as z};
