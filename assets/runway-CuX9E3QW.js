import{K as Z,O as z,X as tt,p as et,L as G,o as X,V as S,S as q,C as k,d as at,M as N,s as ot,t as P,aa as H,r as nt,Q as W,k as E,B as j,a as U,j as rt,P as st}from"./three.module-9D8i-8qh.js";import{m as V}from"./BufferGeometryUtils-y2z5xeEV.js";import{a as $,e as it}from"./geodesy-DdRllvBP.js";import{H as Q,h as O}from"./haze-BC0aAVvL.js";function _(t){return()=>{t|=0,t=t+1831565813|0;let o=Math.imul(t^t>>>15,1|t);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296}}function lt(t,o){const n=_(o),a=new Float32Array(t*t);for(let e=0;e<a.length;e++)a[e]=n();return(e,r)=>{const i=e*t,d=r*t,p=Math.floor(i),h=Math.floor(d);let s=i-p,g=d-h;s=s*s*(3-2*s),g=g*g*(3-2*g);const m=(p%t+t)%t,f=(h%t+t)%t,c=(m+1)%t,u=(f+1)%t,l=a[f*t+m],w=a[f*t+c],v=a[u*t+m],D=a[u*t+c];return l+(w-l)*s+(v-l)*g+(l-w-v+D)*s*g}}function F(t,o){const n=t.map(([e],r)=>lt(e,o+r*101)),a=t.reduce((e,[,r])=>e+r,0);return(e,r)=>{let i=0;for(let d=0;d<n.length;d++)i+=n[d](e,r)*t[d][1];return i/a}}let C=null;function ct(t=1024){if(C)return C;const o=new Uint8Array(t*t*4),n=F([[128,.5],[64,.35],[32,.2]],11),a=_(5),e=F([[4,1],[8,.6],[16,.35],[32,.2]],23),r=F([[16,1],[32,.7],[64,.45],[128,.3]],37),i=F([[24,1],[48,.5]],51),d=_(77),p=new Float32Array(t*t);for(let s=0;s<9e3;s++){const g=d()*t,m=d()*t,f=.8+d()*2.6,c=(d()-.35)*.9;for(let u=-3;u<=3;u++)for(let l=-3;l<=3;l++){const w=Math.hypot(l,u)/f;if(w>=1)continue;const v=(Math.floor(g)+l+t)%t,D=(Math.floor(m)+u+t)%t;p[D*t+v]+=c*(1-w*w)}}for(let s=0;s<t;s++)for(let g=0;g<t;g++){const m=g/t,f=s/t,c=(s*t+g)*4,u=n(m,f)*.45+(a()-.5)*.35+.5*p[s*t+g]*.5+.28,l=i(m,f);o[c]=Math.max(0,Math.min(255,u*255)),o[c+1]=e(m,f)*255,o[c+2]=r(m,f)*255,o[c+3]=Math.max(0,1-Math.abs(l-.5)*40)*255}const h=new Z(o,t,t,z,tt);return h.wrapS=h.wrapT=et,h.minFilter=G,h.generateMipmaps=!0,h.anisotropy=16,h.needsUpdate=!0,C=h,h}function ut(t=["2","1","L","0","3","R"]){const a=document.createElement("canvas");a.width=256*6,a.height=768;const e=a.getContext("2d");e.fillStyle="#000",e.fillRect(0,0,a.width,a.height),e.fillStyle="#fff",e.textAlign="center",e.textBaseline="alphabetic",t.forEach((i,d)=>{if(!i)return;e.save(),e.translate(d*256+256/2,748),e.font='700 300px "Helvetica Neue", Helvetica, Arial, sans-serif';const p=e.measureText(i),h=p.actualBoundingBoxAscent,s=p.actualBoundingBoxRight+p.actualBoundingBoxLeft;e.scale(Math.min(256*.8/s,1.6),728/h),e.fillText(i,(p.actualBoundingBoxLeft-p.actualBoundingBoxRight)/2,0),e.restore()});const r=new X(a);return r.minFilter=G,r.anisotropy=16,r}function dt(){const n=document.createElement("canvas");n.width=1152,n.height=128;const a=n.getContext("2d");for(let r=1;r<=9;r++){const i=(r-1)*128;a.fillStyle="#f2f0ea",a.fillRect(i,0,128,128),a.fillStyle="#111",a.textAlign="center",a.textBaseline="middle",a.font='700 104px "Helvetica Neue", Arial, sans-serif',a.fillText(String(r),i+128/2,128/2+6),a.strokeStyle="#999",a.lineWidth=4,a.strokeRect(i+2,2,124,124)}const e=new X(n);return e.minFilter=G,e.anisotropy=8,e}const T=.3048;class kt{constructor(o,n,a){this.plane=n,this.frame=a,this.id=o.id,this.recip=o.recip;const e={lat:n.lat0,lon:n.lon0},[r,i]=$(o.start.lat,o.start.lon,e.lat,e.lon),[d,p]=$(o.end.lat,o.end.lon,e.lat,e.lon),h=d-r,s=p-i;this.length=Math.hypot(h,s),this.dirEN=[h/this.length,s/this.length],this.rightEN=[this.dirEN[1],-this.dirEN[0]],this.heading=(Math.atan2(h,s)*180/Math.PI+360)%360,this.width=o.widthFt*T,this.originEN=[r,i]}plane;frame;id;recip;length;width;heading;dirEN;rightEN;originEN;planeHeight(o,n){const a=this.plane;return a.coef[0]+a.coef[1]*(o-a.lat0)+a.coef[2]*(n-a.lon0)}geo(o,n){const a=this.originEN[0]+o*this.dirEN[0]+n*this.rightEN[0],e=this.originEN[1]+o*this.dirEN[1]+n*this.rightEN[1];return it(a,e,this.plane.lat0,this.plane.lon0)}toScene(o,n,a=0,e=new S){const[r,i]=this.geo(o,n);return this.frame.fromGeoVec(r,i,this.planeHeight(r,i)+a,e)}get forward(){return new S(this.dirEN[0],0,-this.dirEN[1])}get right(){return new S(this.rightEN[0],0,-this.rightEN[1])}}const ht=15;function ft(t,o=ht){const n=Math.floor(t/o)+1,a=new Float32Array(n);for(let e=0;e<n;e++)a[e]=e*o;return a}const Y=25*T,I=95,pt=[[-5,-31,-229,24,!0],[1905,-31,-385,23],[3022,-31,-228,23],[9,31,274,23],[1905,31,274,23],[3022,31,274,23]],J=`
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float h11(float n) { return fract(sin(n * 91.3458) * 47453.5453); }
float vnoise1(float x) { float i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f); return mix(h11(i), h11(i + 1.0), f); }
// box-filtered coverage of x in [a, b] (analytic AA: no shimmer at grazing angles)
float band(float x, float a, float b, float w) { return clamp((min(x + 0.5 * w, b) - max(x - 0.5 * w, a)) / w, 0.0, 1.0); }
`,mt=`
// One layer of tyre streaks. Lanes of width 'lane' across the runway each carry
// one streak (random offset and width) broken into segments along s: a segment
// starts abruptly (touchdown) and fades out over its length. 'dens' is the
// local probability a segment is laid. Returns coverage 0..1.
float streaks(float s, float t, float ws, float wt, float lane, float len, float seed, float dir, float dens, float soft) {
  float acc = 0.0;
  float i0 = floor(t / lane);
  for (int k = -1; k <= 1; k++) {
    float i = i0 + float(k);
    float a = h11(i * 1.731 + seed), b = h11(i * 2.917 + seed * 1.3), c = h11(i * 0.613 + seed * 2.1);
    float cx = (i + 0.15 + 0.7 * a) * lane;
    float hw = lane * (0.1 + 0.32 * b * b);
    float L = len * (0.35 + 1.3 * c);
    float ss = dir * s + a * 977.0;
    float seg = floor(ss / L), u = fract(ss / L);
    float hs = h11(seg * 3.17 + i * 0.37 + seed * 5.0);
    float life = 0.45 + 0.55 * h11(seg * 1.91 + i + seed);
    float on = step(hs, dens);
    float fade = u < life ? pow(1.0 - u / life, 0.7) * smoothstep(0.0, ws * 1.5 / L + 0.002, u) : 0.0;
    float cov = band(t, cx - hw, cx + hw, max(wt, soft * hw));
    // tread texture / patchy transfer along the streak
    float tex = 0.55 + 0.45 * vnoise1(ss * 0.9 + i * 13.7);
    acc = max(acc, cov * fade * on * (0.55 + 0.45 * b) * tex);
  }
  // lanes thinner than a pixel: fade to the layer's mean so distance stays stable
  float mean = dens * 0.24;
  return mix(acc, mean, smoothstep(0.35 * lane, 1.5 * lane, wt));
}
`,R=t=>{const o=/^(\d{1,2})([LRC]?)$/.exec(t.toUpperCase()),n=(o?.[1]??"00").padStart(2,"0");return[n[0],n[1],o?.[2]??""]};function St(t,o,n={}){const a=t.length,e=t.width/2,r=-60,i=a+60,d=5,p=e+Y,h=[-p,-e,-15,-7.62,0,7.62,15,e,p],s=t.toScene(a/2,0),g=K(t,s,r,i,d,h,.02),m=ct(),f=t.forward,c=t.right,u=new q({uniforms:{...o,uLen:{value:a},uHalf:{value:e},uGlyphs:{value:ut([...R(t.id),...R(t.recip)])},uLetter:{value:new at(R(t.id)[2]?1:0,R(t.recip)[2]?1:0)},uBars:{value:Math.floor((e-2.3)/5.1)},uDetail:{value:m},uFwd:{value:f},uRight:{value:c},uConcrete:{value:n.concrete?new k(...n.concrete):new k(.44,.255,.14).multiplyScalar(.5)},uShoulder:{value:n.shoulder?new k(...n.shoulder):new k(.36,.25,.15).multiplyScalar(.5)},uPaint:{value:new k(.6,.57,.51)},uRubber:{value:1}},vertexShader:`
      #include <common>
      #include <logdepthbuf_pars_vertex>
      attribute vec2 st;
      varying vec2 vST;
      varying vec3 vPos;
      void main() {
        vST = st;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vPos = wp.xyz - cameraPosition;
        vec4 mv = viewMatrix * wp;
        mv.xyz *= 0.9999; // relative depth bias: always wins over the flush terrain under it
        gl_Position = projectionMatrix * mv;
        #include <logdepthbuf_vertex>
      }`,fragmentShader:`
      #include <common>
      #include <logdepthbuf_pars_fragment>
      ${Q}
      ${J}
      ${mt}
      uniform float uLen, uHalf, uRubber, uBars;
      uniform vec2 uLetter;
      uniform sampler2D uGlyphs, uDetail;
      uniform vec3 uFwd, uRight;
      uniform vec3 uConcrete, uShoulder, uPaint;
      uniform vec3 uSunColor, uSkyColor, uGroundColor;
      uniform float uWet;
      varying vec2 vST;
      varying vec3 vPos;

      // markings for one end, in that end's (s, t): s from its threshold, t to the right of its approach.
      // x: paint coverage, y: black contrast border (threshold bars)
      vec2 endMarks(vec2 p, vec2 w, int which) {
        float m = 0.0, o = 0.0;
        float at = abs(p.y);
        // threshold bars as in the clip (refs 11/12), not the FAA 12-bar count: 4 wide bars
        // per side (3.5 m, 1.6 m apart) either side of a 6 m centre gap, 150 ft long, from 20 ft
        if (p.x > 5.5 && p.x < 52.5) {
          float k = floor((at - 3.0) / 5.1);
          if (k >= 0.0 && k < uBars) {
            float lo = 3.0 + k * 5.1, hi = lo + 3.5;
            m = band(p.x, 6.1, 51.8, w.x) * band(at, lo, hi, w.y);
            o = band(p.x, 5.8, 52.1, w.x) * band(at, lo - 0.3, hi + 0.3, w.y) - m;
          }
        }
        // designation: '21' (far) over 'L' (near), 60 ft tall, read from the approach;
        // without a letter the number sits in the letter's place (FAA: 20 ft past the bars)
        float letter = which == 0 ? uLetter.x : uLetter.y;
        float d0 = letter > 0.5 ? 81.4 : 57.0;
        if (p.x > 57.0 && p.x < 104.0) {
          float cell = -1.0; vec2 g = vec2(0.0);
          if (letter > 0.5 && p.x < 77.5) { if (at < 3.8) { cell = 2.0; g = vec2((p.y + 3.8) / 7.6, (p.x - 57.0) / 19.5); } }
          else if (p.x > d0 && p.x < d0 + 19.5) {
            if (p.y > -8.9 && p.y < -1.3) { cell = 0.0; g = vec2((p.y + 8.9) / 7.6, (p.x - d0) / 19.5); }
            if (p.y > 1.3 && p.y < 8.9) { cell = 1.0; g = vec2((p.y - 1.3) / 7.6, (p.x - d0) / 19.5); }
          }
          if (cell >= 0.0 && g.y >= 0.0 && g.y <= 1.0) {
            float col = cell + (which == 0 ? 0.0 : 3.0);
            m = max(m, texture2D(uGlyphs, vec2((col + g.x) / 6.0, g.y)).r);
          }
        }
        // touchdown zone bars at 500, 1500, 2000, 2500, 3000 ft: 3,2,2,1,1 per side, 75 ft x 6 ft, 5 ft apart
        for (int i = 0; i < 5; i++) {
          float sb = i == 0 ? 152.4 : 152.4 * float(2 * i + 1);
          float n = i == 0 ? 3.0 : (i < 3 ? 2.0 : 1.0);
          float lane = floor((at - 9.1) / 3.35);
          if (lane >= 0.0 && lane < n) m = max(m, band(p.x, sb, sb + 22.9, w.x) * band(at, 9.1 + lane * 3.35, 10.93 + lane * 3.35, w.y));
        }
        // aiming point: 1020 ft, 150 ft long, 30 ft wide
        m = max(m, band(p.x, 310.9, 356.6, w.x) * band(at, 9.1, 18.24, w.y));
        return vec2(m, max(o, 0.0));
      }

      void main() {
        #include <logdepthbuf_fragment>
        float s = vST.x, t = vST.y, at = abs(t);
        vec2 w = max(fwidth(vST), vec2(1e-4));
        bool onRunway = s > 0.0 && s < uLen;

        // --- detail: 6 m tile (~6 mm/texel) + a stretched macro sample for large-scale variation
        vec2 duv = vec2(t, s) * (1.0 / 6.0);
        vec4 D = texture2D(uDetail, duv);
        vec4 M = texture2D(uDetail, vec2(t * 0.019 + 0.31, s * 0.0043 + 0.17));
        float slabS = floor(s / 15.0), slabT = floor(t / 7.62);
        float hs = h21(vec2(slabS, slabT) + 3.1);
        float paved = 1.0 - band(at, uHalf, 1e3, w.y);
        vec3 base = mix(uShoulder, uConcrete, paved);
        base *= (0.95 + 0.1 * hs) * (0.78 + 0.44 * D.r) * (0.86 + 0.28 * M.g);
        // replaced slabs (fresher, lighter) and stains / oil drips
        base = mix(base, base * vec3(1.08, 1.07, 1.05), step(0.96, hs) * paved);
        float oil = smoothstep(0.74, 0.9, D.g) * smoothstep(0.55, 0.75, M.r) * exp(-t * t / 20.0);
        base *= 1.0 - 0.32 * smoothstep(0.66, 0.84, M.g) - 0.55 * oil;
        // joints: dark sealed lines, a little wider at the transverse ones, faded by pixel coverage
        float js = abs(fract(s / 15.0 + 0.5) - 0.5) * 15.0;
        float jt = abs(fract(t / 7.62 + 0.5) - 0.5) * 7.62;
        float joint = max(band(js, -0.022, 0.022, w.x), band(jt, -0.016, 0.016, w.y)) * paved;
        base *= 1.0 - 0.62 * joint;
        // hairline cracks and transverse saw-cut grooving (sub-pixel -> fades out)
        base *= 1.0 - 0.25 * D.a * (1.0 - smoothstep(0.004, 0.02, w.y));
        float groove = band(fract(s / 0.038) * 0.038, 0.0, 0.006, w.x) * (1.0 - smoothstep(0.002, 0.006, w.x));
        base *= 1.0 - 0.05 * groove * paved;

        // --- paint (worn), with the dark contrast border round the threshold bars
        vec2 mk = vec2(0.0);
        if (onRunway) {
          mk = max(endMarks(vec2(s, t), w, 0), endMarks(vec2(uLen - s, -t), w, 1));
          if (s > 110.0 && s < uLen - 110.0) {   // centreline: 120 ft stripes, 80 ft gaps, 36 in wide
            float ph = mod(s - 110.0, 60.96);
            mk.x = max(mk.x, band(ph, 0.0, 36.58, w.x) * band(t, -0.457, 0.457, w.y));
          }
          mk.x = max(mk.x, band(at, uHalf - 0.91, uHalf, w.y));  // edge stripes
        }
        float wear = smoothstep(0.22, 0.6, D.b * 0.75 + M.b * 0.45 - 0.05 + 0.15 * D.r);
        float paint = mk.x * mix(0.35, 1.0, wear);
        vec3 col = mix(base, base * 0.25, mk.y * 0.85);
        col = mix(col, uPaint * (0.9 + 0.12 * D.r), paint);

        // --- rubber: a layer over concrete AND paint
        float dir = s < uLen * 0.5 ? 1.0 : -1.0;
        float sl = s < uLen * 0.5 ? s : uLen - s;                     // from the landing threshold
        float tdz = 0.7 + 0.3 * smoothstep(60.0, 220.0, sl) - 0.15 * smoothstep(800.0, 1400.0, sl);
        // user feedback 2026-10-18: a lot more black tyre marks toward the centre
        float centre = exp(-pow(t / 11.0, 2.0));
        float across = 0.25 + 0.95 * exp(-pow(t / 13.0, 2.0)) + 0.3 * exp(-pow((at - 3.4) / 2.0, 2.0));
        across *= 1.0 - smoothstep(uHalf - 6.0, uHalf, at);
        // gentle wander: lanes bend together locally, differently across the width
        float tw = t + 0.55 * sin(s * 0.011 + 1.7 * sin(t * 0.23)) + 0.15 * sin(s * 0.047 + t * 0.9);
        float tw2 = t + 0.8 * sin(s * 0.007 + 2.3 + 1.1 * sin(t * 0.17)) + 0.2 * sin(s * 0.033 - t * 0.6);
        float d0 = clamp(tdz * across, 0.0, 1.0);
        float fresh = streaks(s, tw, w.x, w.y, 0.07, 38.0, 1.0, dir, d0, 0.0)
                    + streaks(s, tw + 0.04, w.x, w.y, 0.11, 70.0, 7.0, dir, d0 * 0.9, 0.0)
                    + 0.8 * streaks(s, tw2, w.x, w.y, 0.19, 55.0, 3.0, dir, d0 * 0.8, 0.3)
                    + streaks(s, tw * 1.01 + 0.02, w.x, w.y, 0.05, 48.0, 29.0, dir, clamp(0.55 * centre * tdz, 0.0, 1.0), 0.0)
                    + 0.6 * streaks(s, tw2 + 0.03, w.x, w.y, 0.09, 90.0, 37.0, dir, clamp(0.5 * centre * tdz, 0.0, 1.0), 0.1);
        float faded = streaks(s, tw2, w.x, w.y, 0.3, 140.0, 13.0, dir, d0 * 0.8, 1.2)
                    + 0.5 * streaks(s, tw * 0.97, w.x, w.y, 0.8, 260.0, 21.0, dir, d0 * 0.6, 2.0);
        fresh = clamp(fresh * uRubber, 0.0, 0.95) * (onRunway ? 1.0 : 0.25);
        faded = clamp(faded * uRubber, 0.0, 0.8) * (onRunway ? 1.0 : 0.25);
        col = mix(col, col * vec3(0.42, 0.38, 0.35), faded * 0.75);
        col = mix(col, vec3(0.018, 0.016, 0.015), fresh);

        // --- surface response: bump from the aggregate, rubber fills it in and is glossier
        float fade = 1.0 - smoothstep(0.004, 0.03, max(w.x, w.y));
        float e = 1.0 / 1024.0;
        float hx = texture2D(uDetail, duv + vec2(e, 0.0)).r - D.r;
        float hy = texture2D(uDetail, duv + vec2(0.0, e)).r - D.r;
        // --- wet (rain, src/weather): the water darkens the concrete and fills its texture, standing thicker in
        // the low spots and the rubber; the surface turns glossy and takes the sky's sheen (below)
        float puddle = smoothstep(0.5, 0.78, M.r * 0.55 + D.g * 0.3 + fresh * 0.25) * uWet;
        col *= mix(1.0, 0.8, uWet) * mix(1.0, 0.85, puddle);
        float bump = 0.9 * fade * (1.0 - 0.75 * fresh) * (1.0 - 0.6 * paint) * (1.0 - 0.6 * uWet - 0.35 * puddle);
        vec3 n = normalize(vec3(0.0, 1.0, 0.0) - (uRight * hx + uFwd * hy) * bump);
        float rough = mix(0.88, 0.62, paint);
        rough = mix(rough, 0.48, fresh);
        // far away the micro-roughness of thousands of streaks reads matte: no sun sheen at grazing
        rough = mix(rough, 0.97, smoothstep(0.01, 0.12, max(w.x, w.y)));
        rough = mix(rough, mix(0.32, 0.12, puddle), uWet);
        vec3 v = normalize(-vPos);
        float ndl = max(dot(n, uSunDir), 0.0), ndv = max(dot(n, v), 0.03);
        vec3 h = normalize(uSunDir + v);
        float a2 = pow(rough, 4.0);
        float dg = a2 / (3.14159 * pow(max(dot(n, h), 0.0) * max(dot(n, h), 0.0) * (a2 - 1.0) + 1.0, 2.0));
        float F = 0.04 + 0.96 * pow(1.0 - max(dot(h, v), 0.0), 5.0);
        float spec = min(dg * F * 0.25 / ndv * 3.14159 * ndl, 2.0) * 0.35;
        float Fv = 0.04 + 0.96 * pow(1.0 - ndv, 5.0);
        vec3 lit = col * (uSunColor * ndl + mix(uGroundColor, uSkyColor, 0.5 + 0.5 * n.y))
                 + uSunColor * spec + uSkyColor * Fv * (1.0 - rough) * 0.25;
        // the wet sheen: the (overcast) sky mirrored (uSkyColor: the sky's irradiance / pi, its mean radiance) at a glancing angle, broken up by the texture and stronger on
        // the standing water; the far runway goes pale with it, as it does in rain
        float Fw = 0.02 + 0.98 * pow(1.0 - max(dot(vec3(0.0, 1.0, 0.0), v), 0.0), 5.0);
        lit += uSkyColor * 1.3 * Fw * uWet * (0.55 + 0.45 * puddle) * (0.8 + 0.4 * D.r);
        lit = applyHaze(lit, vPos);
        gl_FragColor = vec4(lit, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),l=new N(g,u);return l.name=`runway ${t.id}`,l.renderOrder=1,l.add(gt(t,s,o,m,n.stubs??pt,n.verge)),l.add(wt(t,s,o)),{mesh:l,anchor:s,frame:t,joints:ft(a),detail:m}}function K(t,o,n,a,e,r,i){const d=Math.ceil((a-n)/e)+1,p=new Float32Array(d*r.length*3),h=new Float32Array(d*r.length*2),s=new S;for(let f=0;f<d;f++){const c=Math.min(n+f*e,a);for(let u=0;u<r.length;u++){t.toScene(c,r[u],i,s).sub(o);const l=f*r.length+u;p.set([s.x,s.y,s.z],l*3),h.set([c,r[u]],l*2)}}const g=[];for(let f=0;f<d-1;f++)for(let c=0;c<r.length-1;c++){const u=f*r.length+c,l=u+1,w=u+r.length,v=w+1;g.push(u,l,v,u,v,w)}const m=new ot;return m.setAttribute("position",new P(p,3)),m.setAttribute("st",new P(h,2)),m.setIndex(g),m.computeBoundingSphere(),m}function gt(t,o,n,a,e,r){const i=t.width/2+Y,d=[-I,-70,-50,-i,i,50,70,I],p=K(t,o,-250,t.length+250,10,d,.01),h=p.getIndex().array,s=[];for(let c=0;c<h.length;c+=6)c/6%(d.length-1)!==3&&s.push(...Array.from(h.slice(c,c+6)));p.setIndex(s);const g=Array.from({length:6},(c,u)=>{const l=e[u];return l?new H(l[0],Math.min(l[1],l[2]),Math.max(l[1],l[2]),l[3]/2+4):new H(-1e6,0,0,0)}),m=new q({uniforms:{...n,uDetail:{value:a},uLen:{value:t.length},uEdge:{value:i},uStubs:{value:g},uDry:{value:new k(...r?.dry??[.3,.22,.09])},uGreen:{value:new k(...r?.green??[.17,.17,.065])},uAlpha:{value:r?.alpha??1}},transparent:!0,depthWrite:!1,vertexShader:`
      #include <common>
      #include <logdepthbuf_pars_vertex>
      attribute vec2 st;
      varying vec2 vST;
      varying vec3 vPos;
      void main() {
        vST = st;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vPos = wp.xyz - cameraPosition;
        vec4 mv = viewMatrix * wp;
        mv.xyz *= 0.99993;
        gl_Position = projectionMatrix * mv;
        #include <logdepthbuf_vertex>
      }`,fragmentShader:`
      #include <common>
      #include <logdepthbuf_pars_fragment>
      ${Q}
      ${J}
      uniform sampler2D uDetail;
      uniform float uLen, uEdge, uAlpha;
      uniform vec3 uDry, uGreen;
      uniform vec4 uStubs[6];
      uniform vec3 uSunColor, uSkyColor;
      varying vec2 vST;
      varying vec3 vPos;
      void main() {
        #include <logdepthbuf_fragment>
        float s = vST.x, t = vST.y, at = abs(t);
        vec4 D = texture2D(uDetail, vec2(t, s) * 0.21);
        vec4 M = texture2D(uDetail, vec2(t * 0.013 + 0.5, s * 0.004));
        vec4 N = texture2D(uDetail, vec2(t * 0.06, s * 0.011) + 0.37);
        // dry straw to patchy green, mowing stripes along s, blades from the grit channel
        vec3 dry = uDry, green = uGreen, soil = vec3(0.26, 0.17, 0.10);
        vec3 col = mix(dry, green, 0.7 * smoothstep(0.5, 0.8, M.g * 0.7 + N.b * 0.5));
        col = mix(col, soil, smoothstep(0.62, 0.8, N.g) * 0.6);
        col *= 0.75 + 0.5 * D.r;
        col *= 0.93 + 0.07 * sin(t * 0.9 + 2.0 * N.r);
        // fade out into the imagery: ragged outer edge, and at the runway ends
        float edgeN = (M.b - 0.5) * 22.0 + (D.b - 0.5) * 4.0;
        float a = 1.0 - smoothstep(48.0, 88.0, at + edgeN);
        a *= smoothstep(-240.0, -120.0, s) * smoothstep(-240.0, -120.0, uLen - s);
        // keep the taxiway stubs clear
        for (int i = 0; i < 6; i++) {
          vec4 k = uStubs[i];
          a *= 1.0 - (1.0 - smoothstep(k.w - 4.0, k.w, abs(s - k.x))) * step(k.y - 2.0, t) * step(t, k.z + 2.0);
        }
        a *= smoothstep(uEdge - 0.2, uEdge + 0.6, at) * uAlpha;
        vec3 lit = col * (uSunColor * max(uSunDir.y, 0.0) + uSkyColor);
        gl_FragColor = vec4(applyHaze(lit, vPos), a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),f=new N(p,m);return f.name="runway verges",f.renderOrder=2,f}function wt(t,o,n){const a=new nt;a.name="distance-remaining signs";const e=[],r=[],i=t.forward,d=t.right,p=new S(0,1,0),h=new W().setFromRotationMatrix(new E().makeBasis(d,p,i.clone().negate())),s=new W().setFromRotationMatrix(new E().makeBasis(d.clone().negate(),p,i)),g=new S(1,1,1),m=t.length/T,f=t.width/2+16,c=3.6,u=1.8,l=.8,w=(x,L,A)=>{const y=new st(c,u),b=y.getAttribute("uv");for(let M=0;M<b.count;M++)b.setX(M,(x-1+b.getX(M))/9);y.applyMatrix4(new E().compose(A,L,g)),e.push(y)};for(let x=1;x<=9;x++){const L=t.length-x*1e3*T;if(!(L<30))for(const A of[-1,1]){const y=t.toScene(L,A*f,l+u/2).sub(o),b=Math.round(m/1e3-x);w(x,h,y.clone().addScaledVector(i,-.06)),b>=1&&b<=9&&w(b,s,y.clone().addScaledVector(i,.06));for(const M of[-c*.38,c*.38]){const B=t.toScene(L,A*f+M,(l+u)/2).sub(o);r.push(new j(.1,l+u,.1).translate(B.x,B.y,B.z))}r.push(new j(.1,.1,.1).applyMatrix4(new E().compose(y,h,new S(c*10.2,u*10.4,.8))))}}const v=O(new U({map:dt(),roughness:.7,side:rt}),n),D=O(new U({color:"#8a8780",roughness:.8}),n);return a.add(new N(V(e),v),new N(V(r),D)),a}export{kt as R,Y as S,pt as T,St as c};
