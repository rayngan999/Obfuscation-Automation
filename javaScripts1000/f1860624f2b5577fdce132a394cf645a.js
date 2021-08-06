(self.mvWrapperJsonp=self.mvWrapperJsonp||[]).push([[7214],{6125:(t,e,i)=>{"use strict";var n,s,o;i.d(e,{Dn:()=>n}),function(t){t["3gpp"]="video/3gpp",t["3gpp2"]="video/3gpp2",t.flash="application/x-shockwave-flash",t.flv="video/x-flv",t.javascript="application/javascript",t.m4v="video/x-m4v",t.mp4="video/mp4",t.mpeg="video/mpeg",t.ogg="video/ogg",t.quicktime="video/quicktime",t.webm="video/webm",t.wmv="video/x-ms-wmv"}(n||(n={})),function(t){t.dash="application/dash+xml",t.hls="application/x-mpegURL"}(s||(s={})),function(t){t.h264='video/mp4;codecs="avc1"',t.h265='video/mp4;codecs="hvc1"',t.h265Mobile='video/mp4;codecs="hec1"',t.vp9='video/webm;codecs="vp9"'}(o||(o={}))},6074:(t,e,i)=>{"use strict";function n(t){const e=window.getComputedStyle(t);let i=parseFloat(e.width||"0");return"border-box"===e.boxSizing&&(i=i-parseFloat(e.paddingRight||"0")-parseFloat(e.paddingLeft||"0")-parseFloat(e.borderRightWidth||"0")-parseFloat(e.borderLeftWidth||"0")),i}i.d(e,{Z:()=>n})},61:(t,e,i)=>{"use strict";i.d(e,{O:()=>n});class n{constructor(t){this.slot=t}meetsIBVCriteria(){return this.slot.meetsOutstreamCriteria()}ibvSizes(){return this.slot.sizes}}},4845:(t,e,i)=>{"use strict";i.d(e,{b:()=>r});var n=i(5655),s=i(4266),o=function(t,e,i,n){return new(i||(i=Promise))((function(s,o){function r(t){try{a(n.next(t))}catch(t){o(t)}}function l(t){try{a(n.throw(t))}catch(t){o(t)}}function a(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,l)}a((n=n.apply(t,e||[])).next())}))};function r(t){return class extends t{validate(){return super.validate()}adunits(){const t=Object.create(null,{adunits:{get:()=>super.adunits}});var e;return o(this,void 0,void 0,(function*(){const i=[];if(null===(e=this.ibvConfig)||void 0===e?void 0:e.meetsIBVCriteria()){const t=this.getIBVAdunit();t&&i.push(t)}return i.push(...yield t.adunits.call(this)),i}))}getIBVAdunit(){var t;let e,i;s.AS.isMobileOrTablet?(e=`${this.slotName}_ibv_mobile`,i=`${this.id}_ibv_mobile`):(e=`${this.slotName}_ibv_desktop`,i=`${this.id}_ibv_desktop`);const o=this.model.bidRequests[e];if(!o)return;const r=(0,n.X)(o,"Error copying outstream bid requests");return r?(r.forEach((t=>{t.isOutstream=!0,t.outstreamAdUnitCode=i})),{code:i,bids:r,mediaTypes:{banner:{sizes:(null===(t=this.ibvConfig)||void 0===t?void 0:t.ibvSizes())||[]}}}):void 0}}}},1722:(t,e,i)=>{"use strict";i.d(e,{D:()=>r,H:()=>l});var n=i(5655),s=i(9011),o=function(t,e,i,n){return new(i||(i=Promise))((function(s,o){function r(t){try{a(n.next(t))}catch(t){o(t)}}function l(t){try{a(n.throw(t))}catch(t){o(t)}}function a(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,l)}a((n=n.apply(t,e||[])).next())}))};const r="mv-native-ad",l=t=>class extends t{constructor(t,e){super(t,e)}adunits(){const t=Object.create(null,{adunits:{get:()=>super.adunits}});return o(this,void 0,void 0,(function*(){const e=yield t.adunits.call(this);if(!this.model.mv_native_enabled&&!(0,s.DY)("test","nativeTestAd")&&!(0,s.DY)("test","nativeTestVideoAd"))return e;const[{buildRequestFromTemplate:o},{getTemplate:r}]=yield Promise.all([Promise.all([i.e(6397),i.e(7611),i.e(6458),i.e(7214),i.e(2208)]).then(i.bind(i,7984)),Promise.all([i.e(6397),i.e(7611),i.e(6458),i.e(7214),i.e(2208)]).then(i.bind(i,9606))]),l=r(this),a=(0,n.X)(this.model.bidRequests.native);a.map((t=>t.isNative=!0));const d=o(l);return[...e,{code:this.id,bids:a,mediaTypes:{native:d}}]}))}}},6411:(t,e,i)=>{"use strict";i.d(e,{q5:()=>c,f1:()=>h});var n=i(4266),s=i(290),o=i(6125),r=i(6074),l=i(9011),a=function(t,e,i,n){return new(i||(i=Promise))((function(s,o){function r(t){try{a(n.next(t))}catch(t){o(t)}}function l(t){try{a(n.throw(t))}catch(t){o(t)}}function a(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,l)}a((n=n.apply(t,e||[])).next())}))};const d="debug"===(0,l.Ph)("loglevel",window.location.search)?"https://imasdk.googleapis.com/js/sdkloader/ima3_debug.js":"https://imasdk.googleapis.com/js/sdkloader/ima3.js";function c(t){return class extends t{validate(){return super.validate()}cleanup(){var t;super.cleanup(),(null===(t=null==this?void 0:this.outstreamRenderer)||void 0===t?void 0:t.container)&&(this.outstreamRenderer.container.remove(),this.outstreamRenderer.cleanup())}adunits(){const t=Object.create(null,{adunits:{get:()=>super.adunits}});return a(this,void 0,void 0,(function*(){const e=[];if(this.meetsOutstreamCriteria()){const t=yield this.getOutstreamAdunit();t&&e.push(t)}return e.push(...yield t.adunits.call(this)),e}))}getOutstreamAdunit(){return a(this,void 0,void 0,(function*(){let t;const{default:e}=yield Promise.all([i.e(6397),i.e(7611),i.e(6458),i.e(7214),i.e(2208)]).then(i.bind(i,9987)),{OutstreamRenderer:o}=yield Promise.all([i.e(6397),i.e(7611),i.e(6458),i.e(7214),i.e(2208)]).then(i.bind(i,4867));t=n.AS.isMobileOrTablet?`${this.id}_outstream_mobile`:`${this.id}_outstream_desktop`;const r=new e(this.getVideoOptions(t),window.$mediavine.web.model,void 0,{},{}).getAdUnits(),l=s.Rw.new(this.model);return r.bids=r.bids.filter((e=>(l.bidder!==e.bidder||!l.isPrebid()||!l.isOutstream())&&(e.isOutstream=!0,e.outstreamAdUnitCode=t,!0))),r.renderer={url:d,render:(t=>a(this,void 0,void 0,(function*(){this.outstreamRenderer=this.outstreamRenderer||o.new(this),yield this.outstreamRenderer.loadAd(t)}))).bind(this)},r}))}getVideoOptions(t){var e;const[i,s]=h(this,null===(e=this.target)||void 0===e?void 0:e.parentElement);return{prebid:!0,autoplay:!0,placement:this.outstreamPlacement,mimes:[o.Dn.javascript,o.Dn.mp4],contentHeight:s,contentWidth:i,adunitId:t,mobile:n.AS.isMobileOrTablet,isOutstream:!0}}}}function h(t,e){const i=t.maxOutstreamWidth,n=Math.min(i,e&&(0,r.Z)(e)||i),s=Math.round(.5625*n);return[Math.round(n),Math.round(s)]}},5599:(t,e,i)=>{"use strict";i.d(e,{ql:()=>d});var n=i(2037),s=i(7939),o=i(4266),r=i(2057),l=i(9011),a=i(8615);const d=t=>class extends t{constructor(...t){super(...t),c(this.model)&&this.setupSlotAndModel()}sizeContainersLogic(){super.sizeContainersLogic();const{height:t,width:e}=this;c(this.model)&&(t<=1||e<=1?(this.sticky.style.width="fit-content",this.sticky.style.height="fit-content"):(this.sticky.style.width=`${e}px`,this.sticky.style.height=`${t+24}px`))}get frame(){return this._frame=this._frame||u("div",{class:"rail-frame"}),this._frame}get slide(){return this._slide=this._slide||u("div",{class:"rail-slide"}),this._slide}get sticky(){return this._sticky=this._sticky||u("div",{class:"rail-sticky"}),this._sticky}createRailFrame(){const t=this.frame,e=this.slide,i=this.sticky;return e.appendChild(i),t.appendChild(e),t}wrapElement(t){if(!t.parentElement)return;const e=this.createRailFrame();t.parentElement.insertBefore(e,t),e.firstChild&&e.firstChild.firstChild&&e.firstChild.firstChild.appendChild(t)}setupSlotAndModel(){this.onRail=!0,this.restrictRefreshSize=!1,this.adBoxConfig&&(this.adBoxConfig.heightToContain=394,this.adBoxConfig.width="100%"),s.Z.on(s.Z.events.slotWrapperRenderEnded,(t=>{t===this&&(h(function({ad_box_bg_color:t,sidebar_btf_sticky_offset:e=0}){const i=(e||0)+10;return`\n.rail-frame {\n  position:relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  height:394px;\n  margin: 0px 0px;\n  clear: both;\n  background-color: ${t};\n}\n\n.rail-slide {\n  display: flex;\n  justify-content: center;\n  width: 100%; \n  height: 100%;\n  margin-top: 10px;\n}\n\n.rail-sticky {\n  box-sizing: border-box;\n  position: -webkit-sticky;\n  position: sticky;\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  top: ${i}px;\n  width: 320px;\n  height: 384px;\n  min-height: 74px;\n}\n\n.rail-sticky:before {\n  content: "${p}";\n  position: absolute;\n  display: flex!important;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  text-align: center;\n  padding-bottom: 15px;\n  color: #C4C4C4;\n  font-size: 62px;\n  letter-spacing: 2px;\n  z-index: -1;\n  animation: fadeOut 1s linear 0s infinite;\n  animation-direction: alternate;\n}\n\n.rail-sticky>.adunitwrapper {\n  height:initial!important;\n  overflow: hidden!important;\n  margin: 0;\n}\n\n.content-container {\n  overflow-x: initial!important;\n}\n\n${function(t){return`body.grow-me-scroll-carousel-active .rail-sticky {\n    top: ${t+60}px;\n  }`}(i)}\n.mv-pre-create-target[style*=height] {\n    height: 449px !important;\n    width: 100% !important;\n  }\n`}(this.model)),this.wrapElement(this.wrapper||document.createElement("div")),(0,a.Z)(this.sticky,(0,l.DY)("test","rail")))}))}};function c(t){return!!t.mobile_inview&&(o.AS.isMobileOrTablet||n.Gj)}const h=(0,r.r)((t=>{const e=u("style");e.innerText=t,document.head.appendChild(e)}));function u(t,e){const i=document.createElement("div");i.innerHTML=`<${t}></${t}>`;const n=i.firstChild;return Object.keys(e||{}).map((t=>n.setAttribute(t,e[t]))),n}const p="\\00B7\\00B7\\00B7"},8615:(t,e,i)=>{"use strict";i.d(e,{j:()=>v,Z:()=>b});var n=i(7939),s=i(7016),o=i(6074),r=i(3427),l=i(8662),a=i(5146),d=i(7065),c=i(4262);class h{constructor(t){this.element=t,this.handlers={}}innerHeight(){return u(this.element)?this.element.innerHeight:this.element.clientHeight}innerWidth(){return u(this.element)?this.element.innerWidth:this.element.clientWidth}off(t,e){function i(t,e,i){for(let n=0,s=e.length-1;n<s;n++){const s=e[n];i&&i!==s||t.removeEventListener(s)}}const n=t.split("."),s=n[0],o=n[1],r=this.element;if(o&&this.handlers[o]&&s)i(r,this.handlers[o][s],e),this.handlers[o][s]=[];else if(s)for(const t in this.handlers)i(r,this.handlers[t][s]||[],e),this.handlers[t][s]=[];else if(o&&this.handlers[o]){for(const t in this.handlers[o])i(r,this.handlers[o][t],e);this.handlers[o]={}}}offset(){if(!this.element.ownerDocument)return null;const t=this.element.ownerDocument.documentElement,e=p(this.element.ownerDocument);let i={top:0,left:0};return this.element.getBoundingClientRect&&(i=this.element.getBoundingClientRect()),{top:i.top+e.pageYOffset-t.clientTop,left:i.left+e.pageXOffset-t.clientLeft}}on(t,e){const i=t.split("."),n=i[0],s=i[1]||"__default",o=this.handlers[s]=this.handlers[s]||{};(o[n]=o[n]||[]).push(e),this.element.addEventListener(n,e)}outerHeight(t){let e,i=this.innerHeight();return t&&!u(this.element)&&(e=window.getComputedStyle(this.element),i+=parseInt(e.marginTop,10),i+=parseInt(e.marginBottom,10)),i}outerWidth(t){let e,i=this.innerWidth();return t&&!u(this.element)&&(e=window.getComputedStyle(this.element),i+=parseInt(e.marginLeft,10),i+=parseInt(e.marginRight,10)),i}scrollLeft(){const t=p(this.element);return t?t.pageXOffset:this.element.scrollLeft}scrollTop(){const t=p(this.element);return t?t.pageYOffset:this.element.scrollTop}static extend(){const t=Array.prototype.slice.call(arguments);function e(t,e){if("object"==typeof t&&"object"==typeof e)for(const i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}for(let i=1,n=t.length;i<n;i++)e(t[0],t[i]);return t[0]}static inArray(t,e,i){return null==e?-1:e.indexOf(t,i)}static isEmptyObject(t){for(const e in t)return!1;return!0}}function u(t){return t===t.window}function p(t){return u(t)?t:t.defaultView}c.adapters.push({name:"WaypointAdapter",Adapter:h}),c.Group=a,c.Context=l,c.Adapter=h,c.Inview=d;const m=c;var f=i(7313);const g=12e4,y=new r.Yd(r.in.debug);class v{constructor(t){this.model=t,this.recalculate={},this.slotWaypoints={},this.slotStopWaypoints={},n.Z.on(n.Z.events.slotWrapperRenderEnded,(t=>{this.handleSticky(t)}))}handleSticky(t){const{stickyConfig:e}=t;return e.isSticky&&(this.wrapSticky(t),this.writePseudoStickyCss(t),n.Z.on(n.Z.events.slotRenderEnded,((e,i)=>{i===t&&this.stickySlotRenderEnded(e,i)}))),t}writePseudoStickyCss({stickyConfig:t,adUnitId:e}){const i=t.offset,n=`\n      #${e}_sticky_wrapper.stuck {\n        position : fixed;\n        top : ${i||10}px;\n      }\n    `;return(0,s.hm)(n),n}wrapSticky(t){const e=document.createElement("div");e.id=`${t.adUnitId}_placeholder`,(0,s.cn)(e,`${t.adUnitId}_placeholder`);const i=document.createElement("div");i.id=`${t.adUnitId}_sticky_wrapper`;w(t.wrapper,i),w(i,e)}computeFullOffset(t){let e=t,i=0;for(;e;)i+=e.offsetTop||0,e=e.offsetParent;return i}computeOffsetDiff(t,e){return this.computeFullOffset(e)-this.computeFullOffset(t)}getContainingElement(t,e){let i=t;for(;i.parentElement;){if(i.parentElement.querySelector(e))return i;i=i.parentElement}}computeVerticalSpaceAvailable(t,e){const i=t.getBoundingClientRect();let n=e.getBoundingClientRect().bottom-i.top,s=t;for(;s!==e&&s.parentElement;){const t=getComputedStyle(s),e=getComputedStyle(s.parentElement);n-=parseInt(t.marginTop)+parseInt(t.marginBottom)||0,n-=parseInt(e.paddingTop)+parseInt(e.paddingBottom)||0,s=s.parentElement}return n}computeScrollHeightWithStop(t,e,i){let n=0;const s=document.querySelector(t);if(s){const o=this.computeOffsetDiff(i,s);n=o;const r=this.getContainingElement(i,t),l=r&&this.computeVerticalSpaceAvailable(i,r)||0;l&&l>e.getBoundingClientRect().height&&(n=Math.min(l,o))}return n}computeScrollHeightWithLeaderboard(t){let e=0;const i=document.getElementById("leaderboard_btf_waypoint");return i&&(e=this.computeOffsetDiff(t,i)),e}computeScrollHeightWithContent(t,e){let i=0;const n=document.querySelector(t);if(n){i=n.getBoundingClientRect().bottom-e.getBoundingClientRect().top}return i}computeScrollHeight(t,e,i){let n=0;return t.stopSelector?n=this.computeScrollHeightWithStop(t.stopSelector,e,i):this.model.leaderboard_btf_selector&&(n=this.computeScrollHeightWithLeaderboard(i)),!n&&this.model.content_selector&&(n=this.computeScrollHeightWithContent(this.model.content_selector,i)),n}guardScrollHeight(t,e,i){const n=Math.max(...i.map((t=>Array.isArray(t)&&t[1]||0))),s=parseInt(getComputedStyle(e).height);return s&&t-s<=n&&(t=s),t}setupTrueStickyStyles({stickyConfig:t,sizes:e},i,n){let s=this.computeScrollHeight(t,i,n);if(!s)return;s=this.guardScrollHeight(s,n,e);const o=t.offset||10;this.setupCssStickySidebar(n,i,s,o)}getTranslateY(t){const e=getComputedStyle(t),i=(e.transform||e.webkitTransform||e.mozTransform).match(/matrix.*\((.+)\)/),n=i&&i[1]&&i[1].split(", ");return n&&n[5]&&parseInt(n[5])||0}setupCssStickySidebar(t,e,i,n){b(e,!!this.model.optimize_sticky_sidebar_cls_log),t.style.height=`${i}px`,e.style.position="sticky",e.style.top=`${n}px`;const s=t.getBoundingClientRect(),o=e.getBoundingClientRect(),r=this.getTranslateY(e);s.top===o.top-r?e.className="":e.className="stuck"}stickySlotRenderEnded(t,e){const{adUnitId:i,stickyConfig:n,selector:s,model:r}=e,l=document.getElementById(`${i}_sticky_wrapper`),a=document.getElementById(`${i}_placeholder`);if(!s||!n.isSticky)return!1;if(t.isEmpty)return!1;if(null===a)return!1;const d=a.parentNode;if(l.style.width=`${Math.max((0,o.Z)(d),300)}px`,r.optimize_sticky_sidebar_cls){this.setupTrueStickyStyles(e,l,a);const t=setInterval((()=>this.setupTrueStickyStyles(e,l,a)),1e3);setTimeout((()=>{clearInterval(t)}),g)}else this.setupWaypoints(t,e,l,a)}setupWaypoints(t,e,i,n){const{stickyConfig:s}=e;this.destroyOldWaypoints(e);let o=Number(t.size[1]);1===o&&e.highestPrebid&&(o=e.highestPrebid.height||300,(0,f.tY)(e.highestPrebid)&&(o=600)),o+=15,n.style.height=`${o}px`;let r=null;s.stopSelector?r=document.querySelector(s.stopSelector):this.model.leaderboard_btf_selector&&(r=document.getElementById("leaderboard_btf_waypoint"));const l=s.offset||10;if(this.slotWaypoints[e.adUnitId]=new m({element:n,handler(t){if("down"===t)if(null!==r){const t=r.offsetTop-n.offsetTop,e=2*n.offsetHeight+120;i.className=t>e?"stuck":""}else i.className="stuck";else i.className=""},offset:l}),null!==r){const t=5;this.slotStopWaypoints[e.adUnitId]=new m({element:r,handler(t){if("down"===t)i.className="";else{const t=this.element.offsetTop-n.offsetTop,e=2*n.offsetHeight+120;i.className=t>e?"stuck":""}},offset:o+t+l})}this.recalculate[e.id]=setInterval((()=>{m.Context.refreshAll()}),1e3),setTimeout((()=>{clearInterval(this.recalculate[e.id])}),g)}destroyOldWaypoints(t){this.slotWaypoints[t]&&this.slotWaypoints[t].destroy(),this.slotStopWaypoints[t]&&this.slotStopWaypoints[t].destroy()}}function b(t,e){let i=t,n=!1;for(;i;){const s=getComputedStyle(i).overflow;"visible"!==s&&(e&&(y.debug(`MEDIAVINE STICKY ANCESTOR REPORT:\n            \nModifying ancestor element from 'overflow: ${s}' to 'overflow: visible'\n            \nSticky Element`,t,"\nAncestor Modified: ",i),n=!0),i.style.setProperty("overflow","visible","important")),i=i.parentElement}e&&!n&&y.debug("MEDIAVINE STICKY ANCESTOR REPORT: No ancestors of sticky element")}function w(t,e){t.parentNode.insertBefore(e,t),e.appendChild(t)}}}]);
//# sourceMappingURL=efd7e9fd021027c04ff7.min.js.map