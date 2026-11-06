import{t as E}from"./analytics-CihWztUc.js";import{o as P,P as A,b as L}from"./sponsors-Iy2Ht5Zr.js";import{s as C,d as T,e as _}from"./impressions-DYySqvKX.js";const M="/sponsor/",D=!1,q=28,O=1.5,j=["Your brand here","yourbrand.com","Your logo here","hello@yourbrand.com","Your ad here","Your tagline here"],N=j.map((s,t)=>({id:`open-${t+1}`,name:s,href:M,open:!0}));function I(){const s=[];for(let t=0;t<A.ticker;t++){const a=L("ticker",t);if(!a||a.house){s.push({...N[t%N.length]});continue}const r=a.logo??(a.art.kind==="image"?a.art.url:void 0);s.push({id:a.id,name:a.ticker??a.sponsor,logo:r||void 0,href:a.link??M})}return s}const d=s=>s.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function G(s,t="under"){const a=!s;let r=s??I();if(!r.length)return null;R(),C(E);const i=document.createElement("div");i.className=t==="board"?"vp-spons board":"vp-spons";const l=e=>[...e.toUpperCase()].map(o=>`<b>${o===" "?"&nbsp;":d(o)}</b>`).join(""),p=(e,o)=>{const n=!!e.open;return`<a class="sp${n?" open":""}" href="${d(e.href)}" target="_blank" rel="${n?"noopener":"noopener sponsored"}" data-id="${d(e.id)}" data-pos="${o}" data-open="${n?1:0}" title="${d(e.name)}">${e.logo?`<img src="${d(e.logo)}" alt="${d(e.name)}" loading="lazy" decoding="async" /><span class="nm">${d(e.name)}</span>`:`${n?F(o):""}<span class="nm">${t==="board"?l(e.name):d(e.name)}</span>`}</a>`},y=()=>{const e=r.map((o,n)=>p(o,n)).join("");return`${e}${e.replace(/<a /g,'<a aria-hidden="true" tabindex="-1" ')}`};i.innerHTML=`${t==="board"?'<div class="gate">SPONSORS</div>':""}<div class="rail"><div class="run">${y()}</div></div>`,i.addEventListener("pointerdown",e=>e.stopPropagation());const h=i.querySelector(".run"),z=i.querySelector(".rail"),S=matchMedia("(prefers-reduced-motion: reduce)").matches;let v=0,f=0,u=!1,m=0,b=!1;i.addEventListener("pointerenter",()=>{u=!0}),i.addEventListener("pointerleave",()=>{u=!1}),new ResizeObserver(([e])=>{m=e.target.scrollWidth/2,b=m>0,b&&(v%=m)}).observe(h);const $=e=>{requestAnimationFrame($);const o=f?Math.min(.1,(e-f)/1e3):0;f=e,!(S||!b||!i.isConnected)&&(u||(v=(v+o*q)%m),h.style.transform=`translate3d(${-v.toFixed(1)}px,0,0)`)};S||requestAnimationFrame($);const x=new Set,c=new Map,w=typeof IntersectionObserver>"u"?null:new IntersectionObserver(e=>{for(const o of e){const n=o.target,g=n.dataset.id??"";o.isIntersecting&&!x.has(g)&&!c.has(n)?c.set(n,setTimeout(()=>{c.delete(n),!(x.has(g)||!n.isConnected||!i.isConnected)&&(x.add(g),T("sponsor_view",{slot:g,placement:"ticker",pos:Number(n.dataset.pos),open:n.dataset.open==="1",secs:O}))},O*1e3)):o.isIntersecting||(clearTimeout(c.get(n)),c.delete(n))}},{root:z,threshold:.6}),k=()=>{if(w){w.disconnect();for(const e of c.values())clearTimeout(e);c.clear();for(const e of h.querySelectorAll("a.sp"))w.observe(e)}};return k(),i.setItems=e=>{JSON.stringify(e)!==JSON.stringify(r)&&(r=e,h.innerHTML=y(),k())},a&&P(()=>i.setItems(I())),i.addEventListener("click",e=>{e.stopPropagation();const o=e.target.closest("a.sp");if(!o)return;const n=o.dataset.id??"";_()&&E("sponsor_click",{id:n,slot:n,placement:"ticker",pos:Number(o.dataset.pos),open:o.dataset.open==="1"},{beacon:!0})}),i}function F(s){let t=(s+1)*2654435761>>>0;const a=()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296),r=["#f4c98a","#f6f2ea","#e9b26a","#d9cbb4"][s%4];let i="";for(let l=0;l<5;l++)for(let p=0;p<3;p++)(a()<.55||p===2&&l===2)&&(i+=`<rect x="${p}" y="${l}" width="1" height="1"/>`,p<2&&(i+=`<rect x="${4-p}" y="${l}" width="1" height="1"/>`));return`<svg class="px" viewBox="0 0 5 5" shape-rendering="crispEdges" fill="${r}" aria-hidden="true">${i}</svg>`}function R(){if(document.getElementById("vp-spons-style"))return;const s=document.createElement("style");s.id="vp-spons-style",s.textContent=`
/* (above the title: it sits up in the h1's box, which would take its clicks) */
.vp-spons{position:relative;z-index:2;margin:-8.8vh 0 6.4vh;width:min(48vw,82vh);pointer-events:auto;color:#f6f2ea}
.vp-spons .rail{position:relative;overflow:hidden;height:5.4vh;border-top:1px solid rgba(233,178,106,.28);border-bottom:1px solid rgba(233,178,106,.28);
  -webkit-mask-image:linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent);mask-image:linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent)}
.vp-spons .run{position:absolute;top:0;left:0;display:flex;align-items:center;height:100%;white-space:nowrap;will-change:transform}
.vp-spons .sp{display:inline-flex;align-items:center;gap:.7em;padding:0 2.4em;height:100%;color:inherit;text-decoration:none;opacity:.62;transition:opacity .2s}
.vp-spons .sp:hover,.vp-spons .sp:focus-visible{opacity:1;outline:none}
.vp-spons .sp img{height:3vh;width:auto;max-width:14vh;object-fit:contain}
.vp-spons .px{height:2.9vh;width:2.9vh;display:block}
.vp-spons .sp.open{opacity:.78}
.vp-spons .box{display:inline-flex;align-items:center;justify-content:center;height:3vh;min-width:6vh;padding:0 .6em;border:1px dashed rgba(246,242,234,.55);border-radius:2px;
  font-size:1.35vh;letter-spacing:.24em;text-transform:uppercase;font-style:normal}
.vp-spons .nm{font-size:1.9vh;letter-spacing:.14em;font-style:italic}
.vp-spons .sp:not(.open) .nm{font-style:normal;letter-spacing:.08em}
/* the departures board: a band across the top, mono caps on split-flap tiles */
.vp-pause:not([data-page="main"]) .vp-spons.board{display:none}
.vp-spons.board{position:absolute;left:0;right:0;top:0;width:auto;margin:0;display:flex;align-items:stretch;height:4.4vh;background:linear-gradient(#0c0c0c,#060606);border-bottom:1px solid rgba(233,178,106,.22);z-index:3}
.vp-spons.board .gate{display:flex;align-items:center;padding:0 1.6vh 0 12vw;font:600 1.35vh/1 'SF Mono',ui-monospace,Menlo,Consolas,monospace;letter-spacing:.32em;color:#0a0a0a;background:#f4c98a}
.vp-spons.board .rail{flex:1;height:100%;border:0}
.vp-spons.board .sp{opacity:.95;padding:0 2.2em}
.vp-spons.board .px{height:2.2vh;width:2.2vh}
.vp-spons.board .nm{display:inline-flex;gap:.18vh;font:500 1.75vh/1 'SF Mono',ui-monospace,Menlo,Consolas,monospace;letter-spacing:0;font-style:normal}
.vp-spons.board .nm b{display:inline-block;width:1.55vh;padding:.42vh 0;text-align:center;font-weight:500;color:#f4dcb0;border-radius:2px;
  background:linear-gradient(#1d1d1d 0 49%,#050505 49% 51%,#161616 51%);box-shadow:inset 0 0 0 1px rgba(255,255,255,.04)}
.vp-spons.board .open .nm b{color:#f4c98a}
@media (max-aspect-ratio:1/1){
  .vp-spons.board{height:3.8vh}
  .vp-spons.board .gate{padding:0 1.2vh 0 8vw;font-size:min(1.2vh,2.4vw)}
  .vp-spons.board .nm{font-size:min(1.5vh,3vw)}
  .vp-spons.board .nm b{width:min(1.32vh,2.7vw)}
}
@media (prefers-reduced-motion:reduce){.vp-spons .run{position:static;justify-content:center}.vp-spons .run a[aria-hidden]{display:none}}
@media (max-aspect-ratio:1/1){
  .vp-spons{width:84vw;margin:-6vh 0 4vh}
  .vp-spons .rail{height:4.6vh}
  .vp-spons .sp{padding:0 1.6em}
  .vp-spons .sp img,.vp-spons .box{height:2.5vh}
  .vp-spons .px{height:2.4vh;width:2.4vh}
  .vp-spons .nm{font-size:min(1.7vh,3.4vw)}
  .vp-spons .box{font-size:min(1.2vh,2.4vw)}
}`,document.head.append(s)}export{D as B,N as S,G as c};
