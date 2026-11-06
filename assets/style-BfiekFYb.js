const y=(t,e)=>`
.vp-pause[data-page="plane"] .vp-aside { display:none; }
.vp-pause[data-page="plane"] > .vp-menu { left:8vw; top:24vh; transform:none; width:38vw; }
.vp-pause[data-page="plane"] .vp-menu h1 { margin-bottom:3vh; }
.vp-pause[data-page="plane"] .vp-menu li { flex-wrap:wrap; column-gap:1.2vh; row-gap:0; font-size:3vh; margin-bottom:1.2vh; }
.vp-pause[data-page="plane"] .vp-menu li .note { display:block; margin:.2vh 0 .6vh; white-space:normal; font-size:1.65vh; line-height:1.4; }
.vp-pause[data-page="plane"] .vp-menu li .note::before { display:none; }
.vp-pause[data-page="plane"] > .vp-stage { left:50vw !important; width:46vw !important; top:10vh !important; height:43vh !important; }
.vp-pause[data-page="plane"] > .vp-hint { left:8vw; bottom:5vh; }
.vp-start.on > .vp-plane-ratings { animation:none; }
.vp-plane-ratings { position:absolute; left:54vw; top:55vh; width:38vw; color:#f6f2ea; font:clamp(14px,1.85vh,28px)/1.4 ${t}; }
.vp-rating-head { display:flex; align-items:baseline; justify-content:space-between; gap:12px; margin-bottom:1.6vh; padding-bottom:1.2vh; border-bottom:1px solid rgba(246,242,234,.16); }
.vp-rating-head > span { letter-spacing:.13em; font-size:.8em; }
.vp-rating-head em { opacity:.6; font-size:.85em; }
.vp-rating { display:grid; grid-template-columns:6em minmax(0,1fr); gap:1.2em; align-items:center; margin:1.25vh 0; }
.vp-rating-track { display:block; height:clamp(8px,.75vh,12px); background:rgba(246,242,234,.16); overflow:hidden; }
.vp-rating-track i { display:block; height:100%; background:#dcd4b9; }
.vp-rating-note { font-size:.72em; opacity:.6; margin:1.6vh 0 .6vh; }
.vp-rating-details { color:#f6f2ea; font:inherit; background:none; border:0; border-bottom:1px solid #756f5f; padding:8px 0; cursor:pointer; }
.vp-rating-details span { margin-left:16px; }
.vp-pause[data-page="compare"] .vp-menu { left:7vw; top:6vh; transform:none; width:86vw; max-height:87vh; overflow:auto; padding-bottom:3vh; }
.vp-pause[data-page="compare"] .vp-menu h1 { font-size:clamp(22px,3.3vh,38px); letter-spacing:.22em; margin-bottom:2vh; }
.vp-pause[data-page="compare"] .vp-aside { display:none; }
.vp-pause[data-page="compare"] > .vp-hint { bottom:2vh; left:7vw; }
.vp-comparison { font:clamp(13px,1.65vh,24px)/1.45 ${t}; }
.vp-comparison-intro { display:flex; justify-content:space-between; align-items:baseline; margin:0 0 2vh; }
.vp-comparison-intro > span { font-size:.7em; letter-spacing:.2em; opacity:.45; }
.vp-comparison-intro p { margin:0; font-style:italic; opacity:.65; }
.vp-performance-cards { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:2vw; }
.vp-performance-card { padding:2.5vh 2vw; background:linear-gradient(145deg,#171817,#090a0a); border-top:1px solid #49483f; }
.vp-performance-card.current { border-top-color:#dcd4b9; }
.vp-card-index { font-size:.65em; letter-spacing:.17em; color:#bdb49c; }
.vp-performance-card h2 { font:400 clamp(30px,4.5vh,52px)/1.1 ${e}; margin:1vh 0 .5vh; }
.vp-performance-card header p { font-style:italic; opacity:.6; margin:0 0 2.5vh; }
.vp-detail-metric { margin:1.5vh 0; }
.vp-detail-metric > div { display:flex; justify-content:space-between; align-items:baseline; gap:8px; margin-bottom:.6vh; }
.vp-detail-metric strong { font-weight:400; font-variant-numeric:tabular-nums; font-size:1.3em; }
.vp-detail-metric small { font-size:.55em; opacity:.65; }
.vp-detail-metric p { margin:.4vh 0 0; font-size:.65em; opacity:.45; }
.vp-card-feel { font-size:.8em; line-height:1.6; opacity:.7; min-height:4.8em; margin:2vh 0; }
.vp-performance-card footer { border-top:1px solid #30312d; padding-top:1.3vh; display:flex; justify-content:space-between; font-size:.75em; opacity:.7; }
.vp-performance-card footer strong { font-weight:400; }
.vp-comparison .method { font-size:.7em; opacity:.45; max-width:900px; line-height:1.6; margin:2vh 0; }
@media(max-aspect-ratio:1/1) {
  .vp-pause[data-page="plane"] { overflow-y:auto; }
  .vp-pause[data-page="plane"] > .vp-menu { position:relative; left:8vw; top:auto; transform:none; width:84vw; max-height:none; overflow:visible; padding-top:5vh; }
  .vp-pause[data-page="plane"] > .vp-menu h1 { margin-bottom:2vh; }
  .vp-pause[data-page="plane"] > .vp-stage { position:relative !important; left:4vw !important; width:92vw !important; top:auto !important; height:26vh !important; }
  .vp-plane-ratings { position:relative; left:8vw; top:auto; width:84vw; margin:0 0 6vh; }
  .vp-rating { margin:12px 0; }
  .vp-pause[data-page="plane"] .vp-hint { position:relative; left:auto; bottom:auto; margin-top:2vh; }
  .vp-performance-cards { grid-template-columns:1fr; gap:20px; }
  .vp-performance-card { padding:24px; }
  .vp-comparison-intro { display:block; }
  .vp-comparison-intro p { margin-top:8px; }
  .vp-card-feel { min-height:0; }
}
`,x="https://fonts.googleapis.com/css2?family=Anton&family=Cinzel:wght@600;700;800&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Lora:wght@400;500&display=block",C="'Cinzel', 'Cormorant Garamond', Georgia, serif";let c=!1;const m="'Lora', 'Iowan Old Style', Georgia, serif",u="'Cormorant Garamond', 'Cormorant', Garamond, 'Iowan Old Style', Georgia, serif",f="'Anton', 'Impact', 'Haettenschweiler', 'Arial Narrow Bold', sans-serif",o=`var(--vp-serif, ${m})`,a=`var(--vp-display, ${u})`,H=`var(--vp-heavy, ${f})`,g="system-ui, 'Helvetica Neue', Arial, sans-serif",s={serif:null,b612:{family:"B612",files:[["b612-400-normal",400],["b612-700-normal",700]],adjust:.46},barlow:{family:"Barlow",files:[["barlow-400-normal",400],["barlow-500-normal",500],["barlow-600-normal",600]],adjust:.46},barlowc:{family:"Barlow Condensed",files:[["barlow-condensed-400-normal",400],["barlow-condensed-500-normal",500],["barlow-condensed-600-normal",600]],adjust:.47},rajdhani:{family:"Rajdhani",adjust:.5,files:[["rajdhani-500-normal",300],["rajdhani-500-normal",400],["rajdhani-600-normal",500],["rajdhani-700-normal",600],["rajdhani-700-normal",700]],css:`
:root .vp-menu li, :root .vp-menu li .lbl, :root .vp-sc-rows span, :root .vp-landed-nums small, :root .vp-cue-k, :root .vp-ka button .l, :root .vp-cs-btns button, :root .vp-sc-btns button, :root .vp-bo button, :root .vp-lo button, :root .vp-bo .h, :root .vp-lo .h, :root .vp-bounty, :root .vp-bctl, :root .vp-keyhints span, :root .vp-taxihint span, :root .vp-tut-step, :root .vp-tut-text, :root .vp-ro small, :root .vp-sub-who, :root .vp-label, :root .vp-event { font-weight: 500; }
:root .vp-menu li .note, :root .vp-menu li .val { font-weight: 400; }
:root .vp-menu li .note, :root .vp-hint, :root .vp-crumb, :root .vp-bctl, :root .vp-sc-kicker, :root .vp-cs-kick, :root .vp-ka .eye { font-size-adjust: calc(var(--vp-ui-adjust) + 0.04); }
:root .vp-menu h1, :root .vp-title b, :root .vp-titlecard, :root .vp-loading span, :root .vp-landed-word, :root .vp-landed-grade, :root .vp-cue[data-kind="big"] .vp-cue-t, :root .vp-ka h2, :root .vp-cs h2, :root .vp-sc-big b, :root .vp-brief .t, :root .vp-wasted-menu span, :root .vp-wasted-word b, :root .vp-eject-word, :root .vp-splash .w, :root .vp-splash .score b, :root .vp-frame kbd, :root .vp-keyhints kbd, :root .vp-taxihint kbd, :root .vp-thint kbd, :root .vp-ka kbd, :root .vp-bctl kbd, :root .vp-lo button kbd { font-weight: 600; }`},oswald:{family:"Oswald",files:[["oswald-300-normal",300],["oswald-400-normal",400],["oswald-500-normal",500]],adjust:.5}},k="serif",b=t=>{try{return new URLSearchParams(location.search).get(t)}catch{return null}};function w(){const t=b("uifont")?.toLowerCase().replace(/[^a-z0-9]/g,""),n=t&&({barlowcondensed:"barlowc",condensed:"barlowc",cormorant:"serif",lora:"serif"}[t]??t);return n&&n in s?n:k}const z=()=>{const t=b("uiback");return t!==null&&t!=="0"&&t!=="false"};function A(t){const e=s[w()];return e?`'${e.family}', ${g}`:t==="serif"?m:t==="display"?u:f}function j(t){const e=s[t];if(!e)return"";const n="/fonts/",i=e.files.map(([l,r])=>`@font-face { font-family: '${e.family}'; font-style: normal; font-weight: ${r}; font-display: block; src: url('${n}${l}.woff2') format('woff2'); }`).join(`
`),p=`'${e.family}', ${g}`;return`${i}
:root { --vp-serif: ${p}; --vp-display: ${p}; --vp-heavy: ${p}; --vp-mono: ${p}; --vp-ui-adjust: ${e.adjust}; }
:root body { font-size-adjust: var(--vp-ui-adjust); font-synthesis: none; }
/* a phone held upright: the columns are narrow and the front page full, so the face sits a touch smaller */
@media (max-aspect-ratio: 1/1) { :root { --vp-ui-adjust: ${(e.adjust-.03).toFixed(2)}; } }
${"css"in e?e.css:""}`}function E(){const t=w();if(!c&&typeof document<"u"){c=!0;const i=Object.assign(document.createElement("link"),{rel:"preconnect",href:"https://fonts.googleapis.com"}),p=Object.assign(document.createElement("link"),{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),l=Object.assign(document.createElement("link"),{rel:"stylesheet",href:x}),r=document.createElement("style"),h=z();r.textContent=S+j(t)+(h?$:""),document.documentElement.dataset.uifont=t,document.documentElement.classList.toggle("vp-uiback",h),document.head.append(i,p,l,r)}if(typeof document>"u"||!document.fonts)return Promise.resolve();const e=s[t],n=["400 40px Lora","500 20px Lora",'300 40px "Cormorant Garamond"','italic 400 20px "Cormorant Garamond"','400 20px "Cormorant Garamond"',"400 40px Anton",...e?e.files.map(([,i])=>`${i} 20px "${e.family}"`):[]];return Promise.race([Promise.all(n.map(i=>document.fonts.load(i))).then(()=>{}),new Promise(i=>setTimeout(i,4e3))])}function D(t=document.body){const e=document.createElement("div");return e.className="vp-ui",t.append(e),e}const v=`background: var(--vp-frost); -webkit-backdrop-filter: var(--vp-blur); backdrop-filter: var(--vp-blur);
  box-shadow: 0 0 0 1px rgba(246,242,234,0.06) inset, 0 0.6vh 3.2vh rgba(0,0,0,0.28);`,d=`background: radial-gradient(closest-side, var(--vp-halo), rgba(5,8,12,0.38) 58%, rgba(5,8,12,0) 100%);
  -webkit-backdrop-filter: var(--vp-blur); backdrop-filter: var(--vp-blur);
  -webkit-mask-image: radial-gradient(closest-side, #000 50%, transparent 100%); mask-image: radial-gradient(closest-side, #000 50%, transparent 100%);`,$=`
/* the pause over the flight: the frost's blur, its tint deepest behind the list on the left, a shadow under every line */
html.vp-uiback .vp-pause:not(.vp-start) { text-shadow: var(--vp-shade); background: linear-gradient(90deg, rgba(4,7,11,0.72) 0%, rgba(4,7,11,0.66) 38%, rgba(4,7,11,0.6) 68%, rgba(4,7,11,0.46) 100%);
  -webkit-backdrop-filter: var(--vp-blur); backdrop-filter: var(--vp-blur); }
html.vp-uiback.vp-lofi .vp-pause:not(.vp-start) { background: linear-gradient(90deg, rgba(4,7,11,0.8) 0%, rgba(4,7,11,0.74) 50%, rgba(4,7,11,0.62) 100%); }
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
  html.vp-uiback .vp-pause:not(.vp-start) { background: linear-gradient(90deg, rgba(4,7,11,0.8) 0%, rgba(4,7,11,0.74) 50%, rgba(4,7,11,0.62) 100%); } }
@media (max-aspect-ratio: 1/1) { html.vp-uiback .vp-pause:not(.vp-start) { background: rgba(4,7,11,0.68); } html.vp-uiback.vp-lofi .vp-pause:not(.vp-start) { background: rgba(4,7,11,0.78); } }
html.vp-uiback .vp-menu li:not(.sel):not(.dim) { opacity: 0.66; }
html.vp-uiback .vp-menu li.dim:not(.sel) { opacity: 0.36; }
html.vp-uiback .vp-menu li.dim.sel { opacity: 0.6; }
html.vp-uiback .vp-menu li .note { opacity: 0.82; }
html.vp-uiback .vp-hint, html.vp-uiback .vp-crumb { opacity: 0.66; }
html.vp-uiback .vp-aside { opacity: 0.8; }
/* the cards: a frosted panel, or the soft ellipse behind a big word */
html.vp-uiback :is(.vp-tut, .vp-atis, .vp-rs-confirm) { ${v} border: 0; }
html.vp-uiback .vp-landed-score { ${v} border: 0; border-radius: calc(0.6 * var(--u)); }
html.vp-uiback .vp-landed::before, html.vp-uiback .vp-cue[data-kind="big"]::before { ${d} }
html.vp-uiback .vp-brief { isolation: isolate; }
html.vp-uiback .vp-brief::before { content: ''; position: absolute; left: 50%; top: 50%; width: min(92cqw, calc(120 * var(--u))); height: 170%; transform: translate(-50%, -50%); z-index: -1;
  pointer-events: none; ${d} }
html.vp-uiback .vp-cat { padding: 12px 14px !important; border-radius: 6px; ${v} }
html.vp-uiback :is(.vp-cs, .vp-share) { -webkit-backdrop-filter: var(--vp-blur); backdrop-filter: var(--vp-blur); }
html.vp-uiback .vp-ka { background: rgba(4,7,11,0.68); -webkit-backdrop-filter: var(--vp-blur); backdrop-filter: var(--vp-blur); text-shadow: var(--vp-shade); }
html.vp-uiback.vp-lofi .vp-ka { background: rgba(4,7,11,0.8); }
html.vp-uiback .vp-ka button { background: rgba(4,8,12,0.42); border-radius: 0.8vh; }
html.vp-uiback .vp-ka button:not(.sel) { opacity: 0.74; }
html.vp-uiback .vp-ka .hint { opacity: 0.72; }
/* the lines straight over the world: a shadow, the key caps filled dark */
html.vp-uiback :is(.vp-keyhints, .vp-taxihint, .vp-np) { filter: none; text-shadow: var(--vp-shade); }
html.vp-uiback .vp-keyhints.on { opacity: 0.92; }
html.vp-uiback .vp-tod { text-shadow: var(--vp-shade); }
html.vp-uiback .vp-prompt { text-shadow: 0 0 1.2vh rgba(0,0,0,0.55), var(--vp-shade); }
html.vp-uiback :is(.vp-frame kbd, .vp-keyhints kbd, .vp-taxihint kbd, .vp-thint kbd) { background: rgba(6,9,13,0.45); text-shadow: none; }
`,S=`
/* the backing's tokens (FROST; BACKING_CSS): the tint under a frosted panel, its blur, the solid tint without one */
:root { --vp-frost: rgba(9,12,17,0.5); --vp-blur: blur(14px) saturate(1.2); --vp-solid: rgba(9,12,17,0.78); --vp-halo: rgba(5,8,12,0.64);
  --vp-shade: 0 0 0.55em rgba(0,0,0,0.55), 0 0.04em 0.16em rgba(0,0,0,0.75); }
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) { :root { --vp-frost: var(--vp-solid); --vp-blur: none; } }
html.vp-lofi { --vp-frost: var(--vp-solid); --vp-blur: none; --vp-halo: rgba(5,8,12,0.74); }
.vp-ui { position: fixed; inset: 0; pointer-events: none; z-index: 20; color: #f6f2ea; font-family: ${o}; -webkit-font-smoothing: antialiased;
  --vp-stack-w: min(72%, 110vh); }
/* the overlay stack (./overlayStack.ts): the bottom's lines come and go stacked, each within --vp-stack-w; a hint
   steps out (fades) while a subtitle or a cue has the place */
.vp-yield, .vp-give { opacity: 0 !important; transition: opacity 0.2s ease !important; }
/* the ejection handle held (src/ui/ejectHold.ts): its ring has the middle of the frame, the stack's lines step out under it */
.vp-ui:has(.vp-eject.on) :is(.vp-sub, .vp-prompt, .vp-mouse-hint, .vp-cue, .vp-np, .vp-rs-offer, .vp-assist.vp-stacked, .vp-tod) { opacity: 0 !important; transition: opacity 0.12s ease !important; }
/* paused (the menus over the flight) and WASTED: the flight's overlays step out, back on resume (labs/10-game/main.ts) */
html.vp-hush :is(.vp-sub, .vp-prompt, .vp-mouse-hint, .vp-mstick, .vp-cap, .vp-cue, .vp-np, .vp-atis, .vp-keyhints, .vp-taxihint, .vp-tut, .vp-keys,
  .vp-assist, .vp-brief, .vp-turn, .vp-rs-offer, .vp-tod, .vp-cat) { visibility: hidden !important; }
.vp-ui * { box-sizing: border-box; }

/* --- captions: big number over a small label, centred above the HUD glass */
.vp-cap { position: absolute; left: 0; right: 0; top: 0; bottom: 0; }
.vp-num { position: absolute; left: 50%; top: 25%; transform: translate(-50%, -50%); font-size: 6.8vh; line-height: 1; font-weight: 400;
  letter-spacing: 0.01em; white-space: nowrap; font-variant-numeric: lining-nums; text-shadow: 0 0 1.4vh rgba(0,0,0,0.18), 0 0.1vh 0.3vh rgba(0,0,0,0.25); }
.vp-label { position: absolute; left: 50%; top: 30.8%; transform: translate(-50%, -50%); font-size: 2.85vh; line-height: 1; font-weight: 400;
  letter-spacing: 0.02em; white-space: nowrap; text-shadow: 0 0 1vh rgba(0,0,0,0.2), 0 0.1vh 0.25vh rgba(0,0,0,0.25); }
.vp-event { position: absolute; left: calc(50% - 51.6vh); top: 47%; transform: translate(-50%, -50%) rotate(-90deg); font-size: 2.5vh; letter-spacing: 0.42em;
  white-space: nowrap; font-weight: 400; text-shadow: 0 0 1vh rgba(0,0,0,0.25), 0 0.1vh 0.25vh rgba(0,0,0,0.3); }
.vp-iff { position: absolute; left: 50%; top: 57%; transform: translate(-50%, -50%); font-size: 3.5vh; letter-spacing: 0.01em; white-space: nowrap;
  text-shadow: 0 0 1vh rgba(0,0,0,0.25), 0 0.1vh 0.25vh rgba(0,0,0,0.3); }
.vp-titlecard { position: absolute; left: 50%; top: 23.5%; transform: translate(-50%, -50%); font-size: 14.5vh; line-height: 1; font-weight: 400;
  letter-spacing: 0.2em; white-space: nowrap; text-shadow: 0 0 1.6vh rgba(0,0,0,0.2), 0 0.15vh 0.4vh rgba(0,0,0,0.25); }
.vp-cap .vp-titlecard span { padding-left: 0.2em; }   /* balance the trailing letter-space */
.vp-cap span { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); will-change: opacity, filter; }

/* --- the one faint contextual prompt (in the overlay stack, over the subtitles; wraps within its width) */
.vp-prompt { position: absolute; left: 50%; bottom: 9%; transform: translateX(-50%); font-family: ${a}; font-style: italic; font-size: 3.1vh;
  letter-spacing: 0.04em; width: max-content; max-width: var(--vp-stack-w); text-align: center; text-wrap: balance; line-height: 1.3; opacity: 0;
  text-shadow: 0 0 1.2vh rgba(0,0,0,0.5); }

/* --- radio subtitles: speaker in small caps over the line, low in the frame */
.vp-sub { position: absolute; left: 50%; bottom: 3.2%; transform: translateX(-50%); width: var(--vp-stack-w); text-align: center;
  opacity: 0; pointer-events: none; text-shadow: 0 0 1vh rgba(0,0,0,0.75), 0 0 0.3vh rgba(0,0,0,0.9); }
.vp-sub-who { font-family: ${o}; font-size: 1.6vh; letter-spacing: 0.32em; opacity: 0.72; margin-bottom: 0.45vh; }
.vp-sub-text { font-family: ${a}; font-style: italic; font-size: 2.8vh; line-height: 1.25; text-wrap: balance; overflow-wrap: break-word; }
/* Cadet: what the call means (src/ui/radioExplain.ts), small and warm under it */
.vp-sub-why { font-family: ${a}; font-style: italic; font-size: 2.25vh; line-height: 1.3; color: #f4c98a; margin: 0.8vh auto 0; max-width: min(100%, 92vh); text-wrap: balance; }

/* --- the Viper loader (src/ui/loader.ts): the boot, a session waiting on the world, an airport or plane change */
.vp-loading { position: absolute; inset: 0; background: #000; display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 2vh; transition: opacity 1s ease; z-index: 5; }
.vp-loading svg { height: 26vh; overflow: visible; margin-bottom: 1vh; }
.vp-loading .vp-ld-outline { fill: none; stroke: #f6f2ea; stroke-opacity: 0.35; stroke-width: 0.45; stroke-linejoin: round; }
.vp-loading .vp-ld-fill { fill: #f6f2ea; fill-opacity: 0.9; }
.vp-loading .vp-ld-spine { stroke: #000; stroke-opacity: 0.35; stroke-width: 0.5; }
.vp-loading small b { font-weight: 400; font-style: normal; margin-left: 0.4em; opacity: 0.8; }
.vp-loading span { font-family: ${a}; font-weight: 300; font-size: 4vh; letter-spacing: 0.6em; padding-left: 0.6em; color: #f6f2ea; }
.vp-loading small { font-family: ${a}; font-style: italic; font-size: 1.9vh; color: #f6f2ea; opacity: 0.55; animation: vp-pulse 2.4s ease-in-out infinite; }
.vp-loading.done { opacity: 0; pointer-events: none; }
/* a loader made in game (src/ui/loader.ts) eases in; over the menus and a reload's veil it sits on top */
.vp-loading:not(#vp-boot) { transition: opacity 0.45s ease; }
.vp-loading.vp-ld-in { opacity: 0; }
.vp-loading.vp-ld-top { position: fixed; z-index: 60; pointer-events: auto; }
@keyframes vp-pulse { 50% { opacity: 0.2; } }

/* --- pause */
.vp-pause { position: absolute; inset: 0; pointer-events: auto; display: none; background: rgba(4,8,12,0.42); backdrop-filter: blur(12px) saturate(0.85);
  -webkit-backdrop-filter: blur(12px) saturate(0.85); font-family: ${a}; }
.vp-pause.on { display: block; }
.vp-menu { position: absolute; left: 12vw; top: 50%; transform: translateY(-50%); }
.vp-pause .vp-glyph { display: inline-block; }   /* the title's letters, the aside's and hint's words: each under the menu lens (./menuLens.ts) */
.vp-menu h1 { font-weight: 300; font-size: 5.2vh; letter-spacing: 0.5em; margin: 0 0 4vh; opacity: 0.9; }
.vp-menu ul { list-style: none; margin: 0; padding: 0; }
.vp-menu li { font-size: 3.4vh; line-height: 1.55; opacity: 0.5; cursor: pointer; transition: opacity 0.15s; display: flex; gap: 2.4vh; align-items: baseline; }
.vp-menu li.sel { opacity: 1; }
.vp-menu li .val { font-size: 2.4vh; font-style: italic; opacity: 0.85; min-width: 10vh; }
.vp-menu li .bar { display: inline-block; width: 16vh; height: 1px; background: rgba(246,242,234,0.35); position: relative; top: -0.6vh; }
.vp-menu li .bar i { position: absolute; left: 0; top: -1px; height: 3px; background: #f6f2ea; }
/* a bar you can press or drag (Sound, Mixer): a taller invisible grip around the thin line */
.vp-menu li .bar.grip { cursor: ew-resize; touch-action: none; }
.vp-menu li .bar.grip::before { content: ''; position: absolute; left: -1.2vh; right: -1.2vh; top: -1.8vh; bottom: -1.8vh; }
.vp-hint { position: absolute; left: 12vw; bottom: 7vh; font-size: 2vh; font-style: italic; opacity: 0.45; letter-spacing: 0.04em; }
.vp-diagram { position: absolute; right: 9vw; top: 50%; transform: translateY(-50%); width: 46vw; max-width: 760px; }
.vp-diagram svg { width: 100%; height: auto; overflow: visible; }
.vp-diagram text { font-family: ${a}; fill: #f6f2ea; }

/* the menus cover the whole window, bars included (a narrow window has room there) */
.vp-pause { position: fixed; }
.vp-menu li .lbl { white-space: nowrap; }
.vp-menu li .note { font-size: 1.9vh; font-style: italic; letter-spacing: 0.06em; opacity: 0.75; margin-left: 1.6vh; white-space: nowrap; }
.vp-menu li .note::before { content: ''; display: inline-block; width: 2.6vh; height: 1px; background: currentColor; opacity: 0.6; vertical-align: middle; margin-right: 1.1vh; }
${y(o,a)}
.vp-aside { white-space: pre-line; position: absolute; left: 52vw; top: 50%; transform: translateY(-50%); width: min(30vw, 54vh); font-size: 2.7vh; line-height: 1.45;
  font-style: italic; opacity: 0.62; }
/* Spotify's transport row (src/ui/pause.ts spotifyRow): ⏮ ⏯ ⏭, then the song, its artist as the note, the status */
.vp-menu li .vp-tp { display: inline-flex; gap: 0.5em; align-self: center; flex: none; }
.vp-menu li .vp-tp b { display: inline-grid; place-items: center; width: 1.25em; height: 1.25em; margin: -0.12em; border-radius: 50%; opacity: 0.7; transition: opacity 0.15s, background-color 0.15s; }
.vp-menu li .vp-tp b:hover { opacity: 1; background: rgba(246,242,234,0.12); }
.vp-menu li .vp-tp svg { width: 0.62em; height: 0.62em; fill: currentColor; }
.vp-menu li.vp-tp-row .lbl { max-width: 54vh; overflow: hidden; text-overflow: ellipsis; }
/* in flight on a wide screen the pause's Spotify row leaves the list for the top right, level with the title, right-aligned
   (its place in the list, and so the arrows' order, is unchanged) */
@media (min-aspect-ratio: 1/1) {
  .vp-pause:not(.vp-start)[data-page="main"] .vp-menu ul { position: relative; }
  .vp-pause:not(.vp-start)[data-page="main"] .vp-menu li.vp-tp-row { position: absolute; left: 76vw; top: -8.6vh; transform: translateX(-100%); width: max-content; white-space: nowrap; }
  .vp-pause:not(.vp-start)[data-page="main"] .vp-menu li.vp-tp-row .lbl { max-width: 34vw; }
}
.vp-menu li.vp-tp-row.sel { outline: 1px solid #e5d9b5; outline-offset: 10px; background: #ffffff0c; }
.vp-pause[data-page="music"] .vp-menu .lbl, .vp-pause[data-page="sound"] .vp-menu .lbl { max-width: 30vw; overflow: hidden; text-overflow: ellipsis; }
/* a page with the Ranked panel beside its list (src/rank/ui.ts, right: 6vw, min(40vw, 66vh) wide): the rows stop short of
   it, a long note ("the shared sky · Miramar · your bounties are rated, on pilots and AI jets") wraps under itself
   instead of running under the panel's rank; the panel's call to action wraps balanced, never past its box */
@media not all and (max-aspect-ratio: 1/1) {
  .vp-pause:has(.vp-rk-panel) .vp-menu li { max-width: calc(79vw - min(40vw, 66vh)); }
  .vp-pause:has(.vp-rk-panel) .vp-menu li .lbl { display: inline-flex; align-items: baseline; min-width: 0; }
  .vp-pause:has(.vp-rk-panel) .vp-menu li .note { white-space: normal; min-width: 0; line-height: 1.35; text-wrap: balance; }
}
.vp-rk-panel .cta { text-wrap: balance; overflow-wrap: anywhere; }
/* the pause's main page carries every setting (the airport too): a little tighter, so it clears the hint line */
.vp-pause:not(.vp-start)[data-page="main"] .vp-menu li { font-size: 3.1vh; line-height: 1.36; }
.vp-pause:not(.vp-start)[data-page="main"] .vp-menu h1 { margin-bottom: 2.6vh; }

/* lining figures everywhere: Cormorant's old-style 1s read as small-caps I's ("VIPER 11" → "II") */
[class^="vp-"], [class*=" vp-"] { font-variant-numeric: lining-nums; }

/* --- start menu: black, a big spaced VIPER 11 over the list */
/* the veil is plain black: the world isn't drawn behind the start menu at all (labs/10-game/main.ts render()),
   only the front page's jet on its turntable (./turntable.ts), which draws onto the black canvas under it */
.vp-start { background: none; backdrop-filter: none; -webkit-backdrop-filter: none; z-index: 6; }
.vp-start::before { content: ''; position: absolute; inset: 0; pointer-events: none; background: #000; }
.vp-start[data-page="main"]::before { background: transparent; }
.vp-start.on::before, .vp-start.on > * { animation: vp-start-in 0.9s ease both; }
@keyframes vp-start-in { from { opacity: 0; } }
/* the front page on a landscape screen: the list on the left, the jet on the right half, its line under it */
@media not all and (max-aspect-ratio: 1/1) {
  .vp-start[data-page="main"] .vp-menu { top: 0; bottom: 0; transform: none; display: flex; flex-direction: column; justify-content: center; }
  .vp-start[data-page="main"] .vp-stage { position: absolute; left: 22vw; width: 60vw; top: 9vh; height: 82vh; } /* inside .vp-menu (12vw in): 34–94vw on screen; big, behind the title */
  /* the hover label clears the note under the jet (bottom: the note's lines): it rides above the jet instead */
  .vp-start[data-page="main"] .vp-stage .vp-stage-lbl { bottom: auto; top: 16%; }
  .vp-start[data-page="main"] .vp-aside { left: 36vw; width: 30vw; top: auto; bottom: 6.4vh; transform: none; text-align: left; font-size: 2vh; }
}
.vp-start .vp-menu h1 { font-size: 5.2vh; }
.vp-start[data-page="main"] .vp-menu h1 { font-size: 11vh; letter-spacing: 0.55em; margin: 0 0 6vh; opacity: 0.95; }
.vp-start[data-page="main"] .vp-menu li { font-size: 3.9vh; line-height: 1.6; }
/* the flying-now line: in the menu's flow, just above the VIPER 11 title (desktop and phones alike) */
.vp-live { font-size: 2vh; font-style: italic; letter-spacing: 0.06em; opacity: 0; transition: opacity 0.6s; display: flex; align-items: center; gap: 1.1vh; margin: 0 0 1.2vh 0.15em; }
.vp-start[data-page="main"] .vp-live:not([hidden]) { opacity: 0.7; }
.vp-live[hidden] { display: none; }
.vp-live-news { font-weight: 400; color: #c9f0cf; animation: vp-pulse 2.4s ease-in-out 2; }
.vp-notes { position: absolute; left: 12vw; top: 11.6vh; font-size: 1.9vh; font-style: italic; letter-spacing: 0.06em; color: #f6f2ea; opacity: 0.6; text-decoration: none; border-bottom: 1px solid rgba(233,178,106,0.6); padding-bottom: 0.3vh; display: none; transition: opacity 0.2s; }
.vp-notes:hover, .vp-notes:focus-visible { opacity: 1; outline: none; }
.vp-start[data-page="main"] .vp-notes { display: block; }
/* the menus' tree: a breadcrumb over each sub-page's title, a quiet › on rows that open one, the list sliding in from where you came */
.vp-crumb { font-size: 1.9vh; font-style: italic; letter-spacing: 0.08em; opacity: 0.5; margin: 0 0 1.4vh; white-space: nowrap; }
.vp-crumb i { font-style: normal; margin: 0 0.9vh; opacity: 0.7; }
.vp-menu li .sub { font-size: 2.6vh; opacity: 0; margin-left: -1vh; transition: opacity 0.15s, transform 0.2s; transform: translateX(-0.6vh); }
.vp-menu li.sel .sub { opacity: 0.7; transform: none; }
.vp-menu ul.vp-slide-in { animation: vp-slide-in 0.32s cubic-bezier(0.22, 0.61, 0.36, 1) both; }
.vp-menu ul.vp-slide-back { animation: vp-slide-back 0.32s cubic-bezier(0.22, 0.61, 0.36, 1) both; }
@keyframes vp-slide-in { from { opacity: 0; transform: translateX(2.4vh); } to { opacity: 1; transform: none; } }
@keyframes vp-slide-back { from { opacity: 0; transform: translateX(-2.4vh); } to { opacity: 1; transform: none; } }
@media (prefers-reduced-motion: reduce) { .vp-menu ul.vp-slide-in, .vp-menu ul.vp-slide-back { animation: none; } }
/* Watch the demo: a quiet link bottom-right of the start menu's front page, as How it's made is top-right */
.vp-demo { position: absolute; right: 12vw; bottom: 7vh; font-size: 2vh; font-style: italic; letter-spacing: 0.06em; color: #f6f2ea; opacity: 0.5; text-decoration: none; border-bottom: 1px solid rgba(233,178,106,0.5); padding-bottom: 0.3vh; display: none; transition: opacity 0.2s; }
.vp-demo:hover, .vp-demo:focus-visible { opacity: 1; outline: none; }
.vp-start[data-page="main"] .vp-demo { display: block; }
/* the front page's rows are as wide as their words, above the big turntable stage (which takes clicks beside them) */
.vp-start[data-page="main"] .vp-menu ul { position: relative; z-index: 2; }
.vp-start[data-page="main"] .vp-menu li { width: fit-content; }
/* the corner links stay above the front page's (big) turntable stage */
.vp-start .vp-notes, .vp-start .vp-demo, .vp-start .vp-by, .vp-start .vp-who { z-index: 4; }
/* who's signed in: under How it's made, top right */
.vp-who { position: absolute; right: 12vw; top: 11.6vh; font-size: 1.9vh; letter-spacing: 0.04em; color: #f6f2ea; opacity: 0.5; text-decoration: none; display: none; transition: opacity 0.2s; }
.vp-who i { opacity: 0.75; margin-right: 0.3em; }
.vp-signin { pointer-events: auto; align-self: flex-end; font-style: italic; color: #f4c98a; text-decoration: none; border-bottom: 1px solid rgba(244,201,138,0.45); padding-bottom: 0.15em; opacity: 0.9; transition: opacity 0.15s; }
.vp-signin:hover { opacity: 1; border-bottom-color: #f4c98a; }
.vp-lvl.left .vp-signin { align-self: flex-start; }
.vp-who:hover, .vp-who:focus-visible { opacity: 1; outline: none; }
.vp-start[data-page="main"] .vp-who:not([hidden]) { display: none; }
/* the maker's handle: top left, mirroring "How it's made" top right */
.vp-by { position: absolute; left: 12vw; top: 7vh; font-size: 2.2vh; font-style: italic; letter-spacing: 0.06em; color: #f6f2ea; opacity: 0.6; text-decoration: none; border-bottom: 1px solid rgba(233,178,106,0.6); padding-bottom: 0.3vh; display: none; transition: opacity 0.2s; }
.vp-by b { font-weight: 400; font-style: normal; letter-spacing: 0.04em; }
.vp-by span { font-style: normal; opacity: 0.7; margin-left: 0.15em; }
.vp-by em, .vp-by i { font-style: italic; }
.vp-by:hover, .vp-by:focus-visible { opacity: 1; outline: none; }
.vp-start[data-page="main"] .vp-by { display: block; }
.vp-live i { width: 0.9vh; height: 0.9vh; border-radius: 50%; background: #9fe0a6; box-shadow: 0 0 1.2vh #9fe0a6; animation: vp-live-pulse 2.4s ease-in-out infinite; }
@keyframes vp-live-pulse { 50% { opacity: 0.35; } }
/* ---- the front page (./pause.ts createStartMenu): four big rows on one type scale, the corners around them */
/* the top-left cluster: the maker, then How it's made · N online now: laid out in flow, so they never overlap */
.vp-tl { position: absolute; left: 12vw; top: 7vh; display: none; flex-direction: column; align-items: flex-start; gap: 1.4vh; z-index: 4; max-width: 40vw; }
.vp-start[data-page="main"] .vp-tl { display: flex; }
.vp-start .vp-tl .vp-by, .vp-start .vp-tl .vp-notes { position: static; display: block; }
.vp-tl2 { display: flex; align-items: center; column-gap: 2.6vh; row-gap: 0.8vh; flex-wrap: wrap; }
.vp-tl2 .vp-live { margin: 0; font-size: 1.9vh; }
/* the four rows: the label big, its note in small italics under it (never out to the side, under the jet) */
.vp-start[data-page="main"] .vp-menu li:not(.vp-corner) { font-size: 4.1vh; line-height: 1.1; margin: 0 0 2.3vh; max-width: 21vw; align-items: baseline; }
/* (five rows: the title a little closer to them, clear of the top-left cluster) */
@media not all and (max-aspect-ratio: 1/1) { .vp-start[data-page="main"] .vp-menu h1 { margin-bottom: 4.5vh; } }
.vp-start[data-page="main"] .vp-menu li:not(.vp-corner) .lbl { display: flex; flex-direction: column; white-space: nowrap; }
.vp-start[data-page="main"] .vp-menu li:not(.vp-corner) .note { margin: 0.7vh 0 0; font-size: 1.85vh; line-height: 1.3; white-space: normal; text-wrap: balance; }
.vp-start[data-page="main"] .vp-menu li:not(.vp-corner) .note::before { display: none; }
/* Ranked: the same scale and face as the others (its mini badge before it, its rank words in gold) */
.vp-start[data-page="main"] .vp-menu li.vp-front-rk { align-items: center; }
.vp-start[data-page="main"] .vp-menu li.vp-front-rk .lbl { font-family: inherit; font-weight: inherit; text-transform: none; letter-spacing: inherit; }
.vp-start[data-page="main"] .vp-menu li.vp-front-rk .note { font-size: 1.5vh; letter-spacing: 0.16em; }
.vp-start[data-page="main"] .vp-menu li.vp-front-rk .vp-rk-rowbd { margin-right: 0; }
/* the corners are rows of the same list (the arrows, the pad and a tap reach them), each drawn where it sits; the list
   doesn't slide in on this page (a moving list would carry them along) */
.vp-start[data-page="main"] .vp-menu ul.vp-slide-in, .vp-start[data-page="main"] .vp-menu ul.vp-slide-back { animation: none; }
.vp-start[data-page="main"] .vp-menu ul.vp-slide-back > li:not(.vp-corner) { animation: vp-slide-back 0.32s cubic-bezier(0.22, 0.61, 0.36, 1) both; }
.vp-menu li.vp-corner { display: none; }
.vp-start[data-page="main"] .vp-menu li.vp-corner { display: flex; position: fixed; margin: 0; width: auto; }
/* Profile: the chip top right is its face (lit while this row is selected); the row itself is out of sight */
.vp-start[data-page="main"] .vp-menu li.vp-prof { left: 0; top: 0; width: 1px; height: 1px; overflow: hidden; opacity: 0; pointer-events: none; }
.vp-start > .vp-lvl { pointer-events: auto; cursor: pointer; padding: 1.1vh 1.5vh; margin: -1.1vh -1.5vh; border-radius: 0.6vh; transition: background-color 0.15s, opacity 0.15s, box-shadow 0.15s; }
.vp-start > .vp-lvl:hover, .vp-start.vp-prof-sel > .vp-lvl { opacity: 1; background: rgba(246,242,234,0.05); box-shadow: inset 0 0 0 1px rgba(244,201,138,0.45); }
.vp-chip-cr { font-style: italic; color: #f4c98a; }
.vp-chip-cr[hidden] { display: none; }
/* Music and Settings: two small icons bottom left (their word shows above them when selected or pointed at) */
.vp-start[data-page="main"] .vp-menu li.vp-ico { bottom: 6.4vh; font-size: 1.8vh; line-height: 1; align-items: center; }
.vp-start[data-page="main"] .vp-menu li.vp-ico[data-id="settings"] { left: 12vw; }
.vp-start[data-page="main"] .vp-menu li.vp-ico[data-id="music"] { left: calc(12vw + 6.2vh); }
.vp-menu li.vp-ico .lbl { position: relative; display: block; }
.vp-menu li.vp-ico .ic svg { width: 3.4vh; height: 3.4vh; display: block; }
.vp-menu li.vp-ico .tx { position: absolute; left: 50%; bottom: calc(100% + 1vh); transform: translateX(-50%); font-style: italic; letter-spacing: 0.06em; opacity: 0; transition: opacity 0.15s; pointer-events: none; }
.vp-menu li.vp-ico.sel .tx, .vp-menu li.vp-ico:hover .tx { opacity: 0.9; }
.vp-menu li.vp-ico .note, .vp-menu li.vp-ico .sub { display: none; }
.vp-start[data-page="main"] .vp-hint { left: calc(12vw + 14vh); }
/* the featured card: bottom right, one slide at a time (a sponsor, a shop drop, the season or an event) */
.vp-start[data-page="main"] .vp-menu li.vp-feat { right: 6vw; bottom: 6vh; width: min(25vw, 46vh); opacity: 0.8; padding: 1.4vh 1.6vh; border-radius: 0.7vh;
  background: rgba(10,12,16,0.62); box-shadow: inset 0 0 0 1px rgba(246,242,234,0.16); -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); font-size: 1.8vh; line-height: 1.25; }
.vp-start[data-page="main"] .vp-menu li.vp-feat.sel, .vp-start[data-page="main"] .vp-menu li.vp-feat:hover { opacity: 1; box-shadow: inset 0 0 0 1px rgba(244,201,138,0.7); }
.vp-menu li.vp-feat .lbl { display: flex; align-items: center; gap: 1.6vh; white-space: normal; width: 100%; }
.vp-menu li.vp-feat .fi { flex: none; width: 11vh; height: 7vh; border-radius: 0.4vh; overflow: hidden; background: #0b0d10; }
.vp-menu li.vp-feat .fi img { width: 100%; height: 100%; object-fit: cover; display: block; }
.vp-menu li.vp-feat-sponsor .fi img, .vp-menu li.vp-feat-season .fi img { object-fit: contain; padding: 0.6vh; }
.vp-menu li.vp-feat .ft { display: flex; flex-direction: column; gap: 0.35vh; min-width: 0; }
.vp-menu li.vp-feat .fk { font-family: ${o}; font-style: normal; text-transform: uppercase; letter-spacing: 0.26em; font-size: 1.2vh; color: #f4c98a; }
.vp-menu li.vp-feat .fn { font-size: 2.6vh; line-height: 1.1; }
.vp-menu li.vp-feat .fl { font-style: italic; font-size: 1.7vh; opacity: 0.75; }
.vp-menu li.vp-feat .fd { display: flex; gap: 0.7vh; margin-top: 0.5vh; }
.vp-menu li.vp-feat .fd i { width: 0.7vh; height: 0.7vh; border-radius: 50%; background: rgba(246,242,234,0.3); }
.vp-menu li.vp-feat .fd i.on { background: #f6f2ea; }
/* the front page upright (a phone held up, a narrow window): the cluster in two short lines, the title under it, a
   smaller jet, the four rows one under another, the two icons above the featured card across the bottom */
@media (max-aspect-ratio: 1/1) {
  .vp-tl { left: 8vw; top: calc(4vh + env(safe-area-inset-top, 0px)); max-width: 48vw; gap: 0.9vh; }
  .vp-start .vp-tl .vp-by { font-size: min(1.8vh, 3.3vw); line-height: 1.35; white-space: normal; }
  .vp-tl2 .vp-notes, .vp-tl2 .vp-live { font-size: min(1.7vh, 3.1vw); }
  .vp-start[data-page="main"] .vp-menu, .vp-portrait .vp-start[data-page="main"] .vp-menu { top: calc(15vh + env(safe-area-inset-top, 0px)); bottom: auto; }
  .vp-start[data-page="main"] .vp-menu h1, .vp-portrait .vp-start[data-page="main"] .vp-menu h1 { margin-bottom: 1vh; }
  .vp-start[data-page="main"] .vp-menu > .vp-stage { height: 15vh; margin: -1vh 0 1.2vh; }
  .vp-start[data-page="main"] .vp-menu li:not(.vp-corner) { font-size: min(3.7vh, 7.2vw); max-width: 84vw; margin-bottom: 1.7vh; line-height: 1.1; }
  .vp-start[data-page="main"] .vp-menu li:not(.vp-corner) .note { font-size: min(1.7vh, 3.3vw); margin-top: 0.4vh; }
  .vp-start[data-page="main"] .vp-menu li.vp-front-rk .note { font-size: min(1.4vh, 2.8vw); }
  .vp-start[data-page="main"] .vp-menu .vp-aside, .vp-start[data-page="main"] .vp-menu .vp-hint,
  .vp-start[data-page="main"] > .vp-aside, .vp-start[data-page="main"] > .vp-hint { display: none; }
  .vp-start[data-page="main"] .vp-menu li.vp-ico { bottom: calc(env(safe-area-inset-bottom, 0px) + 14.5vh); }
  /* (on the right, above the card: the rows' notes are on the left) */
  .vp-start[data-page="main"] .vp-menu li.vp-ico[data-id="settings"] { left: auto; right: calc(8vw + 6.6vh); }
  .vp-start[data-page="main"] .vp-menu li.vp-ico[data-id="music"] { left: auto; right: 8vw; }
  .vp-start[data-page="main"] .vp-menu li.vp-feat { left: 8vw; right: 8vw; width: auto; bottom: calc(env(safe-area-inset-bottom, 0px) + 3vh); padding: 1.2vh 1.4vh; }
  .vp-menu li.vp-feat .fi { width: 9vh; height: 6vh; }
  .vp-menu li.vp-feat .fn { font-size: min(2.4vh, 4.6vw); }
  .vp-menu li.vp-ico .tx { display: none; }
}
/* a short phone held up (an iPhone SE): a smaller jet, so the four rows clear the card */
@media (max-aspect-ratio: 1/1) and (max-height: 720px) {
  .vp-start[data-page="main"] .vp-menu > .vp-stage { height: 9vh; }
  .vp-start[data-page="main"] .vp-menu li:not(.vp-corner) { margin-bottom: 1.1vh; font-size: min(3.4vh, 7vw); }
}
/* the Shop's own page: your jet in the hangar beside its list (the turntable's stage, quiet: as on Shop › Plane) */
.vp-pause[data-page="garage"] > .vp-stage { position: absolute; left: 44vw; width: 50vw; top: 10vh; height: 60vh; }
.vp-start[data-page="garage"]::before { background: transparent; }
.vp-pause[data-page="garage"] .vp-aside { left: 50vw; width: 38vw; top: auto; bottom: 12vh; transform: none; text-align: center; font-size: 2.2vh; }
@media (max-aspect-ratio: 1/1) {
  /* (upright: the jet under the list; the list's words say enough, no line under it) */
  .vp-pause[data-page="garage"] > .vp-stage { left: 4vw; width: 92vw; top: 58vh; height: 30vh; }
  .vp-pause[data-page="garage"] .vp-aside { display: none; }
}

@media (max-aspect-ratio: 1/1) {
  .vp-menu { left: 8vw; right: 8vw; top: 12vh; transform: none; }
  .vp-menu h1 { font-size: min(5.2vh, 9vw); }
  .vp-start[data-page="main"] .vp-menu h1 { font-size: min(11vh, 15vw); }
  .vp-menu li, .vp-start[data-page="main"] .vp-menu li { font-size: min(3.6vh, 6.4vw); }
  .vp-menu li .val { min-width: 0; font-size: min(2.4vh, 4.6vw); }
  .vp-menu li .bar { width: min(16vh, 18vw); }
  .vp-menu li .note { font-size: min(1.9vh, 3.6vw); white-space: normal; line-height: 1.3; }
  .vp-menu li .lbl { white-space: normal; }
  /* upright: ⏮ ⏯ ⏭ and the status on one line, the song and its artist under them (one line, cut short) */
  .vp-menu li.vp-tp-row { flex-wrap: wrap; column-gap: 2.4vh; row-gap: 0; align-items: center; }
  .vp-menu li.vp-tp-row .val { order: 1; }
  .vp-menu li.vp-tp-row .lbl { order: 2; flex: 0 0 100%; max-width: 100%; white-space: nowrap; line-height: 1.35; }
  .vp-menu li.vp-tp-row .note { white-space: nowrap; }
  .vp-menu li .vp-tp { gap: 0.7em; }
  .vp-menu li .vp-tp b { width: 1.6em; height: 1.6em; margin: -0.3em; }
  .vp-aside { left: 8vw; top: auto; bottom: 15vh; transform: none; width: 84vw; font-size: min(2.6vh, 4.6vw); }
  /* the front page's jet: between the title and the list, smaller */
  .vp-start[data-page="main"] .vp-stage { position: relative; width: 84vw; height: 26vh; margin: -4vh 0 1vh; }
  .vp-hint { left: 8vw; bottom: 6vh; font-size: min(2vh, 3.6vw); }
  .vp-notes { font-size: min(1.7vh, 3.2vw); }
  .vp-demo { right: 8vw; bottom: 6vh; font-size: min(2vh, 3.6vw); }
  /* the front page's note flows under its list here, where this corner link would sit: Fly › Watch the demo has it */
  .vp-start[data-page="main"] .vp-demo { display: none; }
  .vp-who { right: 8vw; top: calc(9vh + env(safe-area-inset-top)); font-size: min(1.9vh, 3.4vw); }
  .vp-crumb { font-size: min(1.9vh, 3.4vw); }
  .vp-by { font-size: min(2.2vh, 4vw); line-height: 1.45; border-bottom: 0; }
  .vp-by em { display: block; }
  .vp-by i { display: none; }
  .vp-live { font-size: min(2vh, 3.6vw); }
  .vp-diagram { left: 8vw; right: 8vw; width: auto; top: auto; bottom: 12vh; transform: none; }
}

/* --- the letterboxed frame's own layer: container units follow the frame, not the window */
.vp-frame { position: absolute; inset: 0; container-type: size; pointer-events: none; }
.vp-frame kbd { display: inline-block; min-width: 1.55em; padding: 0 0.32em; margin: 0 0.06em; border: 1px solid rgba(246,242,234,0.62); border-radius: 0.28em;
  font-family: ${o}; font-style: normal; font-size: 0.74em; line-height: 1.42; text-align: center; vertical-align: 0.12em; background: rgba(246,242,234,0.06); }
.vp-frame kbd.pad { border-radius: 0.8em; padding: 0 0.55em; font-size: 0.66em; letter-spacing: 0.06em; }

/* --- 2D flight HUD: the lower corners */
.vp-hud { --u: 1cqh; position: absolute; inset: 0; font-family: ${o};
  text-shadow: 0 0 calc(1.1 * var(--u)) rgba(0,0,0,0.6), 0 0 calc(0.3 * var(--u)) rgba(0,0,0,0.75); }
/* on / off: each readout fades (not the whole block): the speed brake's tag shows while it's open, HUD or not */
.vp-hud-col > * { transition: opacity 0.6s ease; }
.vp-hud:not(.on) > .vp-hud-col > :not(.vp-sbk) { opacity: 0; }
.vp-hud-col { position: absolute; bottom: calc(8 * var(--u)); display: flex; flex-direction: column; gap: calc(2.4 * var(--u)); }
.vp-hud-l { left: 4.5cqw; align-items: flex-start; }
.vp-hud-r { right: 4.5cqw; align-items: flex-end; text-align: right; }
.vp-ro b { display: block; font-weight: 400; font-size: calc(5 * var(--u)); line-height: 1; font-variant-numeric: lining-nums tabular-nums; letter-spacing: 0.01em; }
.vp-ro b.m { font-size: calc(3.4 * var(--u)); }
.vp-ro small { display: block; font-family: ${a}; font-size: calc(1.75 * var(--u)); letter-spacing: 0.28em; opacity: 0.78; margin-top: calc(0.7 * var(--u)); white-space: nowrap; }
.vp-ro small em { font-family: ${o}; font-style: normal; letter-spacing: 0.02em; font-variant-numeric: lining-nums tabular-nums; margin-left: 0.4em; opacity: 1; }
/* the load factor's unit sits on its number ("1.1 g", the aviation lowercase g): never a lone capital G that reads as the key */
.vp-ro b i.u { font-style: italic; font-size: 0.62em; margin-left: 0.14em; opacity: 0.8; letter-spacing: 0; }
/* the gear: its own line, with a light (green down and locked, amber moving, dim up) */
.vp-ro small.vp-ro-gear { display: flex; align-items: center; gap: 0.55em; margin-top: calc(1.3 * var(--u)); }
.vp-ro-gear s { display: inline-block; width: 0.62em; height: 0.62em; border-radius: 50%; border: 1px solid rgba(246,242,234,0.55); flex: none; }
.vp-ro-gear[data-state="down"] s { background: #9fe0a6; border-color: #9fe0a6; box-shadow: 0 0 calc(0.6 * var(--u)) rgba(159,224,166,0.7); }
.vp-ro-gear[data-state="moving"] s { background: #f4c98a; border-color: #f4c98a; }
/* the speed brake: an annunciator under the airspeed. Open: lit amber, boxed, "SPD BRK OPEN"; closed: dim with
   the HUD on, gone with it off; a flash on each press; the first open of a session says how to close it */
.vp-sbk { position: relative; display: flex; flex-direction: column; align-items: flex-start; gap: calc(0.7 * var(--u)); opacity: 0;
  font-family: ${a}; font-size: calc(1.75 * var(--u)); letter-spacing: 0.28em; white-space: nowrap; transition: opacity 0.2s ease; }
.vp-hud.on .vp-sbk[data-state="closed"] { opacity: 0.42; }
.vp-sbk[data-state="open"] { opacity: 1; }
.vp-sbk-tag { display: inline-flex; align-items: center; gap: 0.55em; padding: calc(0.5 * var(--u)) calc(0.9 * var(--u)) calc(0.5 * var(--u)) calc(0.8 * var(--u));
  border: 1px solid transparent; border-radius: calc(0.4 * var(--u)); margin-left: calc(-0.8 * var(--u));
  transition: color 0.25s, border-color 0.25s, background-color 0.25s, box-shadow 0.25s; }
.vp-sbk-tag em { font-family: ${o}; font-style: normal; letter-spacing: 0.12em; }
.vp-sbk-tag s { display: inline-block; width: 0.62em; height: 0.62em; border-radius: 50%; border: 1px solid rgba(246,242,234,0.55); flex: none; }
.vp-sbk[data-state="open"] .vp-sbk-tag { color: #f4c98a; border-color: rgba(244,201,138,0.75); background: rgba(40,26,8,0.38);
  box-shadow: 0 0 calc(1.2 * var(--u)) rgba(244,201,138,0.28), inset 0 0 calc(0.8 * var(--u)) rgba(244,201,138,0.12); }
.vp-sbk[data-state="open"] .vp-sbk-tag em { font-weight: 600; }
.vp-sbk[data-state="open"] .vp-sbk-tag s { background: #f4c98a; border-color: #f4c98a; box-shadow: 0 0 calc(0.6 * var(--u)) rgba(244,201,138,0.8); }
/* the press: a bright pulse that settles into the state (amber open, white closed) */
.vp-hud .vp-sbk.flash[data-state] { opacity: 1; transition: none; }
.vp-sbk.flash .vp-sbk-tag { animation: vp-sbk-flash 0.7s ease-out; }
.vp-sbk.flash[data-state="closed"] .vp-sbk-tag { animation-name: vp-sbk-flash-off; }
@keyframes vp-sbk-flash { 0% { background: rgba(244,201,138,0.85); color: #1a1006; text-shadow: none; box-shadow: 0 0 calc(3 * var(--u)) rgba(244,201,138,0.9); } 100% { } }
@keyframes vp-sbk-flash-off { 0% { background: rgba(246,242,234,0.5); color: #0b0d12; text-shadow: none; border-color: #f6f2ea; } 100% { } }
.vp-sbk-teach { display: none; font-family: ${a}; font-style: italic; letter-spacing: 0.04em; font-size: calc(2.1 * var(--u)); color: #f6f2ea; opacity: 0.9; }
.vp-sbk.teach .vp-sbk-teach { display: block; }
/* the flaps' tag under it (flightHud.ts): AUTO dim with the HUD on (a jet with a flap switch), HALF / FULL lit amber, over
   the flap limit a pulsing warning; a press on a jet whose computer sets them: white for a moment, with the note */
.vp-flp:not(.show) { opacity: 0 !important; }
.vp-flp.show[data-state="auto"], .vp-flp.show[data-state="warn"] { opacity: 1; }
.vp-flp[data-state="auto"] .vp-sbk-tag { border-color: rgba(246,242,234,0.6); background: rgba(10,12,18,0.3); }
.vp-flp[data-state="warn"] .vp-sbk-tag, .vp-flp[data-state="open"] .vp-sbk-tag { color: #f4c98a; border-color: rgba(244,201,138,0.75); background: rgba(40,26,8,0.38); }
.vp-flp[data-state="warn"] .vp-sbk-tag em, .vp-flp[data-state="open"] .vp-sbk-tag em { font-weight: 600; }
.vp-flp[data-state="warn"] .vp-sbk-tag s, .vp-flp[data-state="open"] .vp-sbk-tag s { background: #f4c98a; border-color: #f4c98a; }
.vp-flp[data-state="warn"] .vp-sbk-tag { animation: vp-flp-warn 0.9s ease-in-out infinite alternate; }
.vp-flp[data-state="warn"] .vp-sbk-teach { color: #f4c98a; }
@keyframes vp-flp-warn { from { background: rgba(40,26,8,0.38); } to { background: rgba(244,201,138,0.55); color: #1a1006; } }
.vp-thr { position: relative; width: calc(15 * var(--u)); height: 3px; background: rgba(246,242,234,0.35); margin-top: calc(0.8 * var(--u)); box-shadow: 0 0 calc(0.6 * var(--u)) rgba(0,0,0,0.5); }
.vp-thr i { position: absolute; left: 0; top: -2px; height: 7px; background: #f6f2ea; }
.vp-thr u { position: absolute; top: calc(-0.8 * var(--u) - 2px); width: 1px; height: calc(1.6 * var(--u) + 7px); background: rgba(246,242,234,0.75); }
/* the throttle's keys after its number: small, dim, up above down (negative margins keep the label's line height) */
.vp-thr-k { display: inline-flex; flex-direction: column; align-items: center; gap: 0.18em; margin: -0.75em 0 -0.75em 0.7em; vertical-align: middle; opacity: 0.85; letter-spacing: 0; line-height: 1; }
.vp-thr-k:empty { display: none; }
.vp-thr-k kbd { font-size: 0.9em; line-height: 1.15; margin: 0; min-width: 1.2em; text-align: center; }
.vp-thr-k .vp-pg { font-size: 0.9em; line-height: 1.15; margin: 0; }
.vp-hud.ab .vp-thr i { background: #f4c98a; }
.vp-hud.ab [data-k="thrLabel"] { color: #f4c98a; opacity: 1; }
.vp-hud.eng [data-k="thrLabel"] { color: #ff8a6a; opacity: 1; }
.vp-ro-att svg { width: calc(9.5 * var(--u)); height: calc(9.5 * var(--u)); overflow: visible; filter: drop-shadow(0 0 calc(0.6 * var(--u)) rgba(0,0,0,0.55)); }
.vp-ro-att .gnd { fill: rgba(246,242,234,0.16); }
.vp-ro-att .hor { stroke: #f6f2ea; stroke-width: 1.6; }
.vp-ro-att .lad { stroke: rgba(246,242,234,0.55); stroke-width: 1; }
.vp-ro-att .rim { fill: rgba(4,6,10,0.18); stroke: rgba(246,242,234,0.6); stroke-width: 1; }
.vp-ro-att .wings { fill: none; stroke: #f4c98a; stroke-width: 2.4; stroke-linejoin: round; stroke-linecap: round; }
.vp-ro-att .dot { fill: #f4c98a; }

/* --- tutorial card (top left) and the learned keys (top right) */
.vp-tut { --u: 1cqh; position: absolute; left: 4.5cqw; top: calc(6.5 * var(--u)); width: min(33cqw, calc(70 * var(--u)));
  padding: calc(2.3 * var(--u)) calc(2.8 * var(--u)) calc(2 * var(--u)); background: rgba(5,7,11,0.52); border: 1px solid rgba(246,242,234,0.1);
  border-radius: calc(0.5 * var(--u)); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); opacity: 0; transition: opacity 0.5s ease;
  font-family: ${a}; text-shadow: 0 0 calc(0.8 * var(--u)) rgba(0,0,0,0.5); }
.vp-tut.on { opacity: 1; }
.vp-tut-prog { display: flex; gap: calc(0.6 * var(--u)); margin-bottom: calc(1.6 * var(--u)); }
.vp-tut-prog i { flex: 1; height: 2px; background: rgba(246,242,234,0.16); transition: background 0.4s; }
.vp-tut-prog i.cur { background: rgba(246,242,234,0.55); }
.vp-tut-prog i.r-player { background: #f6f2ea; }
.vp-tut-prog i.r-auto, .vp-tut-prog i.r-skip { background: rgba(246,242,234,0.42); }
.vp-tut-step { font-family: ${o}; font-size: calc(1.9 * var(--u)); letter-spacing: 0.28em; opacity: 0.7; margin-bottom: calc(1.1 * var(--u)); }
.vp-tut-step .ok { color: #f4c98a; letter-spacing: 0; margin-left: 0.5em; font-size: 1.3em; opacity: 1; }
.vp-tut-text { font-size: calc(4.1 * var(--u)); line-height: 1.22; font-weight: 500; }
.vp-tut-live { font-family: ${o}; font-size: calc(2.3 * var(--u)); opacity: 0.72; margin-top: calc(0.9 * var(--u)); font-variant-numeric: lining-nums tabular-nums; min-height: 1.2em; }
.vp-tut-live:empty { display: none; }
.vp-tut-live i.pw, .vp-tut-live i.pr { font-style: normal; letter-spacing: 0.12em; }
.vp-tut-live i.pw { color: #fbf6ec; text-shadow: 0 0 calc(0.6 * var(--u)) rgba(255,248,230,0.7); }
.vp-tut-live i.pr { color: #ff5c47; text-shadow: 0 0 calc(0.6 * var(--u)) rgba(255,70,40,0.6); }
.vp-tut-live i.ck { font-style: normal; color: #f4c98a; }
.vp-tut-live i.ck.no { color: #ff7a5c; }
.vp-tut.waiting .vp-tut-live { font-family: ${a}; font-style: italic; font-size: calc(2.5 * var(--u)); }
.vp-tut-why { font-style: italic; font-size: calc(2.65 * var(--u)); line-height: 1.38; opacity: 0.75; margin-top: calc(1.1 * var(--u)); }
.vp-tut-hint { font-style: italic; font-size: calc(2.6 * var(--u)); line-height: 1.38; color: #f4c98a; max-height: 0; overflow: hidden; opacity: 0;
  transition: opacity 0.8s ease, max-height 0.8s ease, margin 0.8s ease; }
.vp-tut.hinting .vp-tut-hint { opacity: 0.95; max-height: 12em; margin-top: calc(1.2 * var(--u)); }
.vp-tut-foot { font-style: italic; font-size: calc(2.2 * var(--u)); opacity: 0.5; margin-top: calc(1.5 * var(--u)); }
.vp-tut-foot:empty { display: none; }
.vp-tut.is-done .vp-tut-text, .vp-tut.is-done .vp-tut-why { opacity: 0.45; transition: opacity 0.6s; }
/* tight (src/ui/tutorial.ts fit): the card would reach the HUD's left column under it, so the explanation folds away (the
   step, its live line and any hint stay) */
.vp-tut.tight .vp-tut-why { max-height: 0; margin-top: 0; overflow: hidden; opacity: 0; }
.vp-keys { --u: 1cqh; position: absolute; right: 4.5cqw; top: calc(6.5 * var(--u)); text-align: right; font-family: ${a}; font-style: italic;
  font-size: calc(2.15 * var(--u)); line-height: 2.05; opacity: 0; transition: opacity 0.6s; text-shadow: 0 0 calc(0.9 * var(--u)) rgba(0,0,0,0.7); }
.vp-keys.on { opacity: 0.6; }
.vp-keys kbd { margin-right: 0.3em; }

/* --- narrow windows: the instruments and the card move into the black bars */
.vp-narrow .vp-hud { --u: min(0.95vh, 1.9vw); inset: auto; left: 0; right: 0; top: 100%; display: flex; flex-wrap: wrap; justify-content: center;
  align-items: flex-end; gap: calc(2 * var(--u)) calc(4.5 * var(--u)); padding-top: calc(3 * var(--u)); }
.vp-narrow .vp-hud-col { display: contents; }
.vp-narrow .vp-ro-kt { order: 1; } .vp-narrow .vp-ro-alt { order: 2; } .vp-narrow .vp-ro-hdg { order: 3; }
.vp-narrow .vp-ro-att { order: 4; } .vp-narrow .vp-ro-thr { order: 5; } .vp-narrow .vp-ro-g { order: 6; }
.vp-narrow .vp-ro { text-align: center; }
.vp-narrow .vp-ro-att svg { width: calc(7 * var(--u)); height: calc(7 * var(--u)); }
.vp-narrow .vp-tut { --u: min(1vh, 2vw); top: auto; bottom: 100%; left: 5vw; right: 5vw; width: auto; margin-bottom: 2.4vh; }
.vp-narrow .vp-keys { display: none; }

/* --- title */
.vp-title { position: absolute; inset: 0; background: #000; display: flex; align-items: center; justify-content: center; pointer-events: auto; }
.vp-title b { font-family: ${a}; font-weight: 300; font-size: 10vh; letter-spacing: 0.62em; margin-right: -0.62em; color: #efe9de; }

/* --- the time-of-day dial (src/ui/todDial.ts): bottom left of the frame, a few seconds per flip */
.vp-tod { position: absolute; left: 4%; bottom: 9%; display: grid; grid-template-columns: auto; justify-items: center; gap: 0.2em; color: #f6f2ea;
  opacity: 0; transform: translateY(6px); transition: opacity 0.5s ease, transform 0.5s ease; pointer-events: none; filter: drop-shadow(0 0 6px rgba(0,0,0,0.55)); }
.vp-tod.on { opacity: 0.88; transform: none; }
.vp-tod svg { overflow: visible; }
.vp-tod .arc { fill: none; stroke: rgba(246,242,234,0.45); stroke-width: 1; stroke-dasharray: 2 3; }
.vp-tod .hz { stroke: rgba(246,242,234,0.7); stroke-width: 1; }
.vp-tod .sun { fill: #ffd9a0; filter: drop-shadow(0 0 5px #ffb060); transition: fill 0.4s; }
.vp-tod .sun.set { fill: rgba(255,170,150,0.55); }
.vp-tod b { font-weight: 400; letter-spacing: 0.32em; font-size: 16px; padding-left: 0.32em; }
.vp-tod small { font-size: 14px; font-style: italic; opacity: 0.75; letter-spacing: 0.08em; }
@media (orientation: portrait) { .vp-tod { left: 6%; bottom: auto; top: calc(env(safe-area-inset-top, 0px) + 14%); } }
/* a phone held sideways: in the overlay stack between the thumbs (the throttle has the bottom left) */
html.vp-touchfly .vp-ui:not(.vp-portrait) .vp-tod { left: 0; right: 0; margin: 0 auto; width: max-content; }
/* in-flight key hints (src/ui/keyHints.ts) and the taxi's "skip the taxi" (src/ui/taxiHint.ts): top right (clear of the
   compass tape across the top centre, the flight HUD and the captions), the key in its box then what it does */
.vp-keyhints, .vp-taxihint { position: absolute; right: 4%; top: 6%; display: grid; gap: 0.45em; justify-items: end; color: #f6f2ea; font-size: 17px;
  opacity: 0; transform: translateY(4px); transition: opacity 1.2s ease, transform 1.2s ease; pointer-events: none; filter: drop-shadow(0 0 6px rgba(0,0,0,0.6)); }
.vp-keyhints.on { opacity: 0.78; transform: none; }
/* the takeoff / launch card (catSignals.ts) has the corner: the hints fade out under it and come back after */
html.vp-catcard .vp-keyhints.on { opacity: 0; transition: opacity 0.25s ease, transform 0.25s ease; }
.vp-keyhints p { margin: 0; display: flex; align-items: baseline; gap: 0.6em; transition: opacity 0.8s ease; }
.vp-keyhints p.used { opacity: 0.35; }
.vp-keyhints kbd, .vp-taxihint kbd { font: inherit; font-size: 14.5px; letter-spacing: 0.08em; min-width: 1.6em; text-align: center; padding: 0.05em 0.45em; border: 1px solid rgba(246,242,234,0.55); border-radius: 3px; }
.vp-keyhints span, .vp-taxihint span { font-style: italic; letter-spacing: 0.04em; }
.vp-keyhints i { font-size: 14px; opacity: 0.6; }
.vp-taxihint { display: flex; align-items: baseline; gap: 0.6em; transform: none; transition: none; white-space: nowrap; }
@media (orientation: portrait) { .vp-keyhints, .vp-taxihint { right: 6%; bottom: auto; top: calc(env(safe-area-inset-top, 0px) + 22%); font-size: 15.5px; } }
/* a phone held sideways: below the pause and sun buttons in the top-right corner */
html.vp-touchfly .vp-ui:not(.vp-portrait) .vp-keyhints, html.vp-touchfly .vp-ui:not(.vp-portrait) .vp-taxihint { top: calc(env(safe-area-inset-top, 0px) + 62px); }
/* now playing (src/ui/nowPlaying.ts): bottom right of the frame, above the HUD's right column (the overlay stack: ./overlayStack.ts) */
.vp-np { position: absolute; right: 4%; bottom: 9%; text-align: right; color: #f6f2ea; opacity: 0; transform: translateY(6px);
  transition: opacity 0.6s ease, transform 0.6s ease; pointer-events: none; filter: drop-shadow(0 0 6px rgba(0,0,0,0.55)); display: grid; gap: 0.15em; }
.vp-np.on { opacity: 0.9; transform: none; }
.vp-np small { font-size: 11px; letter-spacing: 0.32em; opacity: 0.6; }
.vp-np b { font-weight: 400; font-size: 18px; letter-spacing: 0.08em; }
.vp-np i { font-size: 13px; opacity: 0.7; }
.vp-np { max-width: min(34cqw, 62vh); }
.vp-np b, .vp-np i { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
/* a phone, or a window taller than wide: in the overlay stack, centred over the subtitles */
.vp-portrait .vp-np, html.vp-touchfly .vp-np { left: 0; right: 0; margin: 0 auto; width: max-content; max-width: var(--vp-stack-w); text-align: center; top: auto; }
/* the flash a time-of-day flip lands under (warm, a touch of bloom) */
.vp-tod-flash { position: absolute; inset: 0; pointer-events: none; opacity: 0; background: radial-gradient(ellipse at 50% 40%, #fff6e8 0%, #ffe2bd 55%, #f2c79a 100%); mix-blend-mode: screen; }
/* the sun button (touch): left of the pause button */
.vp-touch-tod { position: absolute; top: calc(env(safe-area-inset-top, 0px) + 10px); right: calc(env(safe-area-inset-right, 0px) + 58px); width: 44px; height: 44px;
  border: 0; padding: 0; background: none; opacity: 0; pointer-events: none; transition: opacity 0.4s ease; -webkit-tap-highlight-color: transparent; filter: drop-shadow(0 0 4px rgba(0,0,0,0.6)); }
.vp-touch-tod.on { opacity: 0.62; pointer-events: auto; }
.vp-touch-tod svg { width: 22px; height: 22px; stroke: #f6f2ea; fill: none; stroke-width: 1.4; }

/* --- touch: the pause button (Esc's stand-in), top right inside the safe area */
.vp-touch-pause { position: absolute; top: calc(env(safe-area-inset-top, 0px) + 10px); right: calc(env(safe-area-inset-right, 0px) + 10px); width: 44px; height: 44px;
  border: 0; padding: 0; background: none; display: flex; align-items: center; justify-content: center; gap: 6px; opacity: 0; pointer-events: none;
  transition: opacity 0.4s ease; -webkit-tap-highlight-color: transparent; filter: drop-shadow(0 0 4px rgba(0,0,0,0.6)); }
.vp-touch-pause.on { opacity: 0.62; pointer-events: auto; }
.vp-touch-pause i { display: block; width: 3px; height: 16px; border-radius: 1px; background: #f6f2ea; }
.vp-menu li.dim { opacity: 0.26; }
.vp-menu li.dim.sel { opacity: 0.5; }

/* --- portrait (a phone held upright): the frame is the whole screen, the overlays are
   sized on its width and kept inside the safe area (notch, home bar). The canvas fills
   the screen top to bottom (labs/10-game/frame.ts). */
html.vp-portrait, html.vp-portrait body { overscroll-behavior: none; touch-action: none; -webkit-user-select: none; user-select: none; -webkit-touch-callout: none; }
.vp-portrait .vp-num { top: 21%; font-size: 12.5vw; }
.vp-portrait .vp-label { top: 26.4%; font-size: 5.2vw; }
.vp-portrait .vp-event { left: calc(env(safe-area-inset-left, 0px) + 7vw); top: 50%; font-size: 3.6vw; }
.vp-portrait .vp-iff { top: 33%; font-size: 5.6vw; }
.vp-portrait .vp-titlecard { top: 22%; font-size: 8.6vw; letter-spacing: 0.14em; }
.vp-portrait .vp-prompt { font-size: 5.4vw; }
/* radio subtitles: TikTok-style, in the lower third above the home bar (the overlay stack's lowest place there: ./overlayStack.ts) */
.vp-ui.vp-portrait { --vp-stack-w: 84%; }
.vp-portrait .vp-sub-who { font-size: 3.1vw; margin-bottom: 1vw; }
.vp-portrait .vp-sub-text { font-size: 5.8vw; line-height: 1.28; text-wrap: balance; }
.vp-portrait .vp-sub-why { font-size: 4.5vw; margin-top: 1.4vw; }
.vp-portrait .vp-title b { font-size: 9vw; letter-spacing: 0.5em; margin-right: -0.5em; }
/* the flight HUD: one compact block at the bottom, above the home bar */
.vp-portrait .vp-hud { --u: 1.6vw; inset: auto; left: 0; right: 0; bottom: calc(env(safe-area-inset-bottom, 0px) + 2.2vh); display: flex; flex-wrap: wrap;
  justify-content: space-around; align-items: center; row-gap: calc(2.6 * var(--u)); padding: 0 3vw; }
.vp-portrait .vp-ro { flex: 0 0 31%; display: flex; flex-direction: column; align-items: center; }
.vp-portrait .vp-thr { width: calc(13 * var(--u)); }
.vp-portrait .vp-hud-col { display: contents; }
.vp-portrait .vp-ro-kt { order: 1; } .vp-portrait .vp-ro-alt { order: 2; } .vp-portrait .vp-ro-hdg { order: 3; }
.vp-portrait .vp-ro-att { order: 4; } .vp-portrait .vp-ro-thr { order: 5; } .vp-portrait .vp-ro-g { order: 6; }
.vp-portrait .vp-ro-att svg { width: calc(7 * var(--u)); height: calc(7 * var(--u)); }
/* the tutorial card: across the top, under the notch */
.vp-portrait .vp-tut { --u: 1.2vw; left: calc(env(safe-area-inset-left, 0px) + 4vw); right: calc(env(safe-area-inset-right, 0px) + 4vw); width: auto;
  top: calc(env(safe-area-inset-top, 0px) + 1.6vh); }
.vp-portrait .vp-keys { display: none; }
/* menus: inside the safe area */
.vp-portrait .vp-menu { top: calc(env(safe-area-inset-top, 0px) + 14vh); left: calc(env(safe-area-inset-left, 0px) + 8vw); }
.vp-portrait .vp-start[data-page="main"] .vp-menu h1 { font-size: 10.5vw; letter-spacing: 0.42em; margin-bottom: 7vh; }
.vp-portrait .vp-menu h1 { letter-spacing: 0.36em; }
.vp-portrait .vp-menu li { line-height: 1.9; }
.vp-portrait .vp-hint { bottom: calc(env(safe-area-inset-bottom, 0px) + 4vh); }
.vp-portrait .vp-demo { bottom: calc(env(safe-area-inset-bottom, 0px) + 4vh); right: calc(env(safe-area-inset-right, 0px) + 8vw); }
.vp-portrait .vp-aside { bottom: calc(env(safe-area-inset-bottom, 0px) + 13vh); }
.vp-portrait .vp-loading span { font-size: min(4vh, 7vw); }

/* --- touch flight controls (src/ui/touchControls.ts): thin lines, serif labels, inside the safe area.
   Landscape: compact in the bottom corners; portrait: the lower ~30% of the screen. */
.vp-tc { --sl: env(safe-area-inset-left, 0px); --sr: env(safe-area-inset-right, 0px); --sb: env(safe-area-inset-bottom, 0px);
  position: fixed; inset: 0; z-index: 19; pointer-events: none; opacity: 0; visibility: hidden; color: #f6f2ea; font-family: ${a};
  transition: opacity 0.35s ease, visibility 0s linear 0.35s; touch-action: none; -webkit-user-select: none; user-select: none;
  -webkit-touch-callout: none; -webkit-tap-highlight-color: transparent; }
.vp-tc.on { opacity: 0.92; visibility: visible; transition: opacity 0.1s ease; }
.vp-tc.on.idle { opacity: 0.3; transition: opacity 1.4s ease; }
.vp-tc * { box-sizing: border-box; touch-action: none; -webkit-tap-highlight-color: transparent; }
.vp-tc.on .vp-tc-stickzone, .vp-tc.on .vp-tc-thr, .vp-tc.on .vp-tc-btn, .vp-tc.on .vp-tc-pad { pointer-events: auto; }
.vp-tc button { font: inherit; color: inherit; margin: 0; -webkit-appearance: none; appearance: none; cursor: pointer; }
/* the stick: a ring that rests faintly in the zone and jumps to the thumb */
.vp-tc-stickzone { position: absolute; right: 0; bottom: 0; width: 46%; height: 78%; --rest-x: 0.64; --rest-y: 0.66; }
.vp-tc-stick { position: absolute; left: 0; top: 0; width: 0; height: 0; transition: transform 0.28s cubic-bezier(.2,.7,.3,1); }
.vp-tc-stick.on { transition: none; }
.vp-tc-ring { position: absolute; left: -54px; top: -54px; width: 108px; height: 108px; border-radius: 50%; border: 1px solid rgba(246,242,234,0.42);
  box-shadow: 0 0 12px rgba(0,0,0,0.22), inset 0 0 12px rgba(0,0,0,0.12); transition: border-color 0.2s; }
.vp-tc-stick.on .vp-tc-ring { border-color: rgba(246,242,234,0.75); }
.vp-tc-tick { position: absolute; background: rgba(246,242,234,0.55); }
.vp-tc-tick.n, .vp-tc-tick.s { left: -0.5px; width: 1px; height: 7px; }
.vp-tc-tick.n { top: -53px; } .vp-tc-tick.s { top: 46px; }
.vp-tc-tick.e, .vp-tc-tick.w { top: -0.5px; height: 1px; width: 7px; }
.vp-tc-tick.w { left: -53px; } .vp-tc-tick.e { left: 46px; }
.vp-tc-knob { position: absolute; left: -21px; top: -21px; width: 42px; height: 42px; margin: 0; border-radius: 50%; border: 1px solid rgba(246,242,234,0.9);
  background: rgba(246,242,234,0.07); box-shadow: 0 0 10px rgba(0,0,0,0.3); }
.vp-tc-stick:not(.on) .vp-tc-knob { transition: transform 0.28s cubic-bezier(.2,.7,.3,1); }
.vp-tc-knob::after { content: ''; position: absolute; left: 50%; top: 50%; width: 5px; height: 5px; margin: -2.5px 0 0 -2.5px; border-radius: 50%; background: #f6f2ea; }
.vp-tc-stick.on .vp-tc-knob { background: rgba(246,242,234,0.2); }
/* the throttle: a hairline track with the detents, a grip that stays where it's left */
.vp-tc-thr { position: absolute; left: calc(var(--sl) + 8px); bottom: calc(var(--sb) + 14px); width: 100px; height: min(56%, 210px); }
.vp-tc-track { position: absolute; left: 34px; top: 14px; bottom: 14px; width: 1px; background: rgba(246,242,234,0.36); box-shadow: 0 0 6px rgba(0,0,0,0.5); }
.vp-tc-fill { position: absolute; left: -1px; bottom: 0; width: 3px; background: #f6f2ea; }
.vp-tc-thr.ab .vp-tc-fill { background: linear-gradient(to top, #f6f2ea 0, #f6f2ea 70%, #f4c98a 74%); }
.vp-tc-track u.d { position: absolute; left: -8px; width: 17px; height: 1px; margin-bottom: -0.5px; background: rgba(246,242,234,0.7); }
.vp-tc-track u.d span { position: absolute; left: 33px; top: -7px; font-size: 12px; line-height: 14px; letter-spacing: 0.26em; opacity: 0.62; white-space: nowrap;
  text-shadow: 0 0 6px rgba(0,0,0,0.7); transition: opacity 0.2s, color 0.2s; }
.vp-tc-track u.ab span { font-style: italic; letter-spacing: 0.2em; }
.vp-tc-thr[data-at="idle"] u.idle span, .vp-tc-thr[data-at="mil"] u.mil span { opacity: 1; }
.vp-tc-thr.ab u.ab span { opacity: 1; color: #f4c98a; }
.vp-tc-grip { position: absolute; left: -19px; width: 39px; height: 12px; margin-bottom: -6px; border: 1px solid #f6f2ea; border-radius: 6px;
  background: rgba(8,10,14,0.35); box-shadow: 0 0 8px rgba(0,0,0,0.35); }
.vp-tc-grip::after { content: ''; position: absolute; left: 6px; right: 6px; top: 50%; height: 1px; background: rgba(246,242,234,0.6); }
.vp-tc-thr.on .vp-tc-grip { background: rgba(246,242,234,0.24); }
.vp-tc-thr.ab .vp-tc-grip { border-color: #f4c98a; }
/* GEAR / IDENT and the rudder pads, beside the throttle */
.vp-tc-btns { position: absolute; left: calc(var(--sl) + 116px); bottom: calc(var(--sb) + 22px); width: 92px; display: flex; flex-direction: column; gap: 10px; }
.vp-tc-btn { height: 44px; padding: 0 0 0 0.3em; border: 1px solid rgba(246,242,234,0.42); border-radius: 22px; background: rgba(8,10,14,0.16);
  font-size: 12px; line-height: 1; letter-spacing: 0.3em; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px;
  text-shadow: 0 0 6px rgba(0,0,0,0.6); box-shadow: 0 0 10px rgba(0,0,0,0.18); transition: background 0.12s, border-color 0.12s; }
.vp-tc-btn em { font-size: 11px; letter-spacing: 0.06em; opacity: 0.6; }
.vp-tc-btn.on { background: rgba(246,242,234,0.24); border-color: #f6f2ea; transition: none; }
.vp-tc-btn.vp-tc-sb { height: 36px; font-size: 11px; letter-spacing: 0.22em; }
/* SPD BRK says its own state: lit amber while open (the switch is in), an outline closed */
.vp-tc-btn.open { border-color: #f4c98a; background: rgba(244,201,138,0.26); color: #ffe6bf; box-shadow: 0 0 14px rgba(244,201,138,0.4), inset 0 0 10px rgba(244,201,138,0.18); }
.vp-tc-btn.open em { color: #f4c98a; opacity: 1; font-style: normal; font-weight: 600; letter-spacing: 0.16em; }
.vp-tc-btn.open.on { background: rgba(244,201,138,0.42); }
.vp-tc-btn[hidden] { display: none; }
.vp-tc-rud { position: relative; display: flex; justify-content: space-between; height: 44px; }
.vp-tc-rud small { position: absolute; left: 0; right: 0; top: 100%; margin-top: -3px; text-align: center; font-size: 8px; line-height: 1; letter-spacing: 0.26em;
  padding-left: 0.26em; opacity: 0.45; pointer-events: none; }
.vp-tc-pad { width: 44px; height: 44px; padding: 0; border: 0; background: none; position: relative; }
.vp-tc-pad i { position: absolute; left: 50%; top: 50%; width: 10px; height: 10px; border: solid rgba(246,242,234,0.75); border-width: 0 0 1px 1px;
  filter: drop-shadow(0 0 3px rgba(0,0,0,0.6)); }
.vp-tc-pad[data-r="-1"] i { transform: translate(-25%, -50%) rotate(45deg); }
.vp-tc-pad[data-r="1"] i { transform: translate(-75%, -50%) rotate(-135deg); }
.vp-tc-pad.on i { border-color: #f6f2ea; border-width: 0 0 2px 2px; }
.vp-tc-pad::before { content: ''; position: absolute; inset: 9px; border-radius: 50%; border: 1px solid rgba(246,242,234,0.2); transition: background 0.12s; }
.vp-tc-pad.on::before { background: rgba(246,242,234,0.2); border-color: rgba(246,242,234,0.6); }
/* portrait: one band across the bottom ~30%; the stick takes the right half */
.vp-portrait .vp-tc-stickzone { width: 54%; height: calc(var(--sb) + 33%); --rest-x: 0.6; --rest-y: 0.5; }
.vp-portrait .vp-tc-thr { left: calc(var(--sl) + 6px); bottom: calc(var(--sb) + 2.2%); height: min(25%, 220px); }
.vp-portrait .vp-tc-btns { left: calc(var(--sl) + 112px); bottom: calc(var(--sb) + 2.2% + 8px); }
html.vp-touchfly, html.vp-touchfly body { overscroll-behavior: none; touch-action: none; -webkit-user-select: none; user-select: none; -webkit-touch-callout: none; }

/* everything else steps out of the controls' way while they're up */
html.vp-touchfly .vp-keys { display: none; }
html.vp-touchfly .vp-ro-thr { display: none; }   /* the slider shows the throttle */
/* the card under the pause and sun buttons (top right), the width of the screen */
html.vp-touchfly .vp-portrait .vp-tut { top: calc(env(safe-area-inset-top, 0px) + 62px); }
/* the readouts in one row over the button column (RTB … the rudder: 2.2% + 8 px up, ~306 px tall: src/ui/touchControls.ts)
   and the stick; the taxi gauge, when the HUD has it, a row of its own over them */
html.vp-touchfly .vp-portrait .vp-hud { bottom: calc(env(safe-area-inset-bottom, 0px) + max(32%, 2.2% + 324px)); --u: 1.2vw; flex-wrap: nowrap;
  justify-content: space-evenly; column-gap: 3vw; padding: 0 3vw; }
html.vp-touchfly .vp-portrait .vp-hud.vp-hud-taxi { flex-wrap: wrap; row-gap: calc(1.6 * var(--u)); }
/* a fight: the weapons' buttons sit over the stick (src/combat/touchWeapons.ts: 330 px up, ~98 px tall), the row and the
   speed brake's tag under it step up over them */
html.vp-touchfly.vp-portrait:has(.vp-tw.on) .vp-ui .vp-hud { bottom: calc(env(safe-area-inset-bottom, 0px) + 462px); }
/* the compass under the top corners' buttons (the pause and the sun), as the card is */
html.vp-touchfly .vp-portrait .vp-compass { top: calc(env(safe-area-inset-top, 0px) + 60px); }
html.vp-touchfly .vp-portrait .vp-ro { flex: 0 1 auto; }
/* landscape: the HUD becomes one row low in the middle, between the thumbs; subtitles above it */
html.vp-touchfly .vp-ui:not(.vp-portrait) .vp-hud { --u: min(1.05vh, 1.9vw); inset: auto; left: 27%; right: 27%; bottom: 3%; display: flex; flex-wrap: nowrap;
  justify-content: space-between; align-items: flex-end; }
html.vp-touchfly .vp-ui:not(.vp-portrait) .vp-hud-col { display: contents; }
html.vp-touchfly .vp-ui:not(.vp-portrait) .vp-ro { text-align: center; display: flex; flex-direction: column; align-items: center; }
html.vp-touchfly .vp-ui:not(.vp-portrait) .vp-ro-kt { order: 1; } html.vp-touchfly .vp-ui:not(.vp-portrait) .vp-ro-alt { order: 2; }
html.vp-touchfly .vp-ui:not(.vp-portrait) .vp-ro-att { order: 3; } html.vp-touchfly .vp-ui:not(.vp-portrait) .vp-ro-hdg { order: 4; }
html.vp-touchfly .vp-ui:not(.vp-portrait) .vp-ro-g { order: 5; }
html.vp-touchfly .vp-ui:not(.vp-portrait) .vp-ro-att svg { width: calc(6 * var(--u)); height: calc(6 * var(--u)); }
/* the overlay stack between the thumbs, over the HUD row (./overlayStack.ts) */
html.vp-touchfly .vp-ui:not(.vp-portrait) { --vp-stack-w: 44%; }
/* the tutorial card: tap it to skip a step on touch */
html.vp-touchfly .vp-tut.on { pointer-events: auto; }
/* a phone held sideways: the card clears the throttle's button column on the left (its rows end ~210 px in),
   and the compass steps aside under it as in portrait */
html.vp-touchfly .vp-ui:not(.vp-portrait) .vp-tut { left: calc(env(safe-area-inset-left, 0px) + 224px); width: min(40cqw, calc(80 * var(--u))); }
html.vp-touchfly .vp-ui:not(.vp-portrait) .vp-frame:has(.vp-tut.on) .vp-compass { opacity: 0; }
/* the GEAR button says the gear's state on touch: the HUD row keeps to the load factor */
html.vp-touchfly .vp-ro-gear { display: none; }

/* the speed brake's tag in the compact layouts (a narrow window's bar, a phone): centred just above the readouts,
   out of their row so it never moves them */
.vp-narrow .vp-sbk, .vp-portrait .vp-sbk, html.vp-touchfly .vp-sbk { position: absolute; left: 50%; bottom: 100%; transform: translateX(-50%);
  align-items: center; margin-bottom: calc(1.4 * var(--u)); }
.vp-narrow .vp-sbk-tag, .vp-portrait .vp-sbk-tag, html.vp-touchfly .vp-sbk-tag { margin-left: 0; }
.vp-portrait .vp-sbk { font-size: calc(2.1 * var(--u)); }
/* a phone held upright with the touch controls: under the readouts on the right, clear of the subtitles above and the
   button column on the left, over where the stick rests */
html.vp-touchfly .vp-portrait .vp-sbk { font-size: calc(2.6 * var(--u)); top: 100%; bottom: auto; left: auto; right: calc(env(safe-area-inset-right, 0px) + 4vw);
  transform: none; align-items: flex-end; margin: calc(1.6 * var(--u)) 0 0; }
/* the flaps' tag in those layouts: one tag's height further out than the speed brake's, so the two never overlap */
.vp-narrow .vp-flp, .vp-portrait .vp-flp, html.vp-touchfly .vp-flp { margin-bottom: calc(5.6 * var(--u)); }
html.vp-touchfly .vp-portrait .vp-flp { margin: calc(6.4 * var(--u)) 0 0; }


/* --- the on-screen aids hidden (the gamepad's right stick pressed: labs/10-game/main.ts setScreenAids): the flight HUD,
   the compass, the steerpoint, the landing cues, the key hints and prompts, the taxi gauge and turn cues. The radio's
   subtitles, the tutorial's card, the captions and the moment cards stay. */
html.vp-clean .vp-hud, html.vp-clean .vp-compass, html.vp-clean .vp-steer, html.vp-clean .vp-ahud, html.vp-clean .vp-keyhints, html.vp-clean .vp-taxihint,
html.vp-clean .vp-prompt, html.vp-clean .vp-tg, html.vp-clean .vp-turn, html.vp-clean .vp-keys { visibility: hidden !important; }

/* Settings › Controls › Controls map: the list (Device, Back) up top, the diagram and its legend across the window under it,
   down to the hint line (./controlsDiagram.ts places itself between the two); no aside here */
.vp-pause[data-page="controlsmap"] .vp-menu { top: calc(env(safe-area-inset-top, 0px) + 6vh); transform: none; }
.vp-pause[data-page="controlsmap"] .vp-menu h1 { margin-bottom: 2.4vh; }
.vp-pause[data-page="controlsmap"] .vp-aside { display: none; }
/* the selected row's picture or loop (pause.ts showMedia), over its line: Fly, Missions, Training, Hangar in the start menu */
.vp-media { position: absolute; left: 52vw; top: 15vh; width: min(36vw, 64vh); aspect-ratio: 16 / 9; background: #07090b; overflow: hidden; pointer-events: none;
  opacity: 0; transition: opacity 0.45s ease; box-shadow: 0 0 0 1px rgba(246,242,234,0.08); }
.vp-media.on { opacity: 1; }
.vp-media img, .vp-media video { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
/* (pause.ts alignMedia sets both tops: the picture level with the menu's first line, the line under the picture) */
@media not all and (max-aspect-ratio: 1/1) { .vp-pause.vp-has-media .vp-aside { top: calc(15vh + min(36vw, 64vh) * 0.5625 + 3.5vh); transform: none; width: min(36vw, 64vh); font-size: 2.3vh; } }
@media (max-aspect-ratio: 1/1) { .vp-media { display: none; } }

/* a window taller than wide: the menu's note flows under its list (src/ui/pause.ts moves it into .vp-menu) */
.vp-menu > .vp-aside { white-space: pre-line; position: relative; left: auto; right: auto; top: auto; bottom: auto; transform: none; width: auto; max-width: 84vw; margin-top: 3vh; text-align: left; }
.vp-menu > .vp-hint { position: relative; left: auto; right: auto; bottom: auto; margin-top: 2.6vh; }
.vp-portrait .vp-menu li { line-height: 1.6; }
/* Missions: the campaign's twelve, the fights, the challenge, its board and Training: a long list, set closer (clear of the hint) */
.vp-pause[data-page="missions"] .vp-menu li { font-size: 2.45vh; line-height: 1.34; }
.vp-portrait .vp-pause[data-page="missions"] .vp-menu li { font-size: min(2.45vh, 4.6vw); line-height: 1.3; }
/* (a phone held upright: the selected mission's note in three lines under the list, no keys hint, so the page ends on screen) */
@media (max-aspect-ratio: 1/1) {
  .vp-pause[data-page="missions"] .vp-menu > .vp-aside { font-size: min(2.1vh, 3.9vw); line-height: 1.35; margin-top: 1vh; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
  .vp-pause[data-page="missions"] .vp-menu > .vp-hint { display: none; }
}

/* --- lab debug overlay (backquote) */
.vp-debug { position: absolute; right: 12px; bottom: 12px; font: 11px/1.45 ui-monospace, Menlo, monospace; color: #cfe; background: rgba(0,0,0,0.55);
  padding: 8px 10px; border-radius: 6px; white-space: pre; display: none; pointer-events: none; }
.vp-debug.on { display: block; }
`;export{a as D,v as F,H,C as R,o as S,A as a,D as c,E as e};
