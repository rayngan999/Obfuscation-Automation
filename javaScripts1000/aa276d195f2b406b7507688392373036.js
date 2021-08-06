!function(){"use strict";const e=Date.now(),t=function(e){const t=new RegExp("[?&]"+encodeURIComponent(e)+"=([^&]*)").exec(window.location.search);return t?decodeURIComponent(t[1].replace(/\+/g," ")):""},o="true"===t("hb_test"),i="localhost"===window.location.hostname,n="true"===t("hb_debug")||o||i,s=function(t){if(!n)return;let s;s="function"==typeof t?t():"object"==typeof t?JSON.stringify(t):t;const r=`display: inline-block; color: #fff; background: ${o||i?"tomato":"blue"}; padding: 1px 4px; border-radius: 3px`;console.log("%cAD",r,s+` â² ${Date.now()-e}ms`)},r=function(e){n&&console.table(e)},d=function(e){if("complete"===document.readyState||"loaded"===document.readyState||"interactive"===document.readyState)return s(`DOM was already loaded (state: ${document.readyState})`),void e();document.addEventListener("DOMContentLoaded",()=>{s("Event DOMContentLoaded"),e()})};void 0!==window.hb_now&&s(`Time waiting for starting the library: ${e-window.hb_now}ms`);const a=function(e){document.querySelector("head").insertAdjacentHTML("beforeend","<style>"+e+"</style>")},c=function(e,t){return"string"!=typeof e||e.length<=t?e:e.substring(0,t)};const g=function(e){"singleRequest"in e||(e.singleRequest=!0),"collapseEmptyDivs"in e||(e.collapseEmptyDivs=!0);const o=Array.isArray(e.modules)?e.modules:[];let i=!1;(function(){const e=t("entorno");return["demo","demo1","demo2","demo3"].includes(e)})()&&o.push(function(){const e=function(e){e.googleObject.getTargetingKeys().includes("entorno")&&(e.googleObject.clearTargeting("entorno"),s("Environment targeting removed from the slot"))};return{name:"environment-targeting",init:function(e){},exec:function(){const e=t("entorno");googletag.pubads().setTargeting("entorno",e),s("Environment targeting set "+e)},configureOnce:function(){},configureSlot:function(t){e(t)}}}());const d=function(e,t){const o=e.slot.getSlotElementId();let i=e.slot.getResponseInformation();i=i?JSON.stringify(i).replace(/(,|:)/g,"$1 "):"â empty",s(`Event ${t} for ${o} â¡ï¸ ${i}`)},a=function(e){if(!n)return;const t=e.map(e=>{const t={_id:e.id,_code:e.code};return e.googleObject.getTargetingKeys().sort(),e.googleObject.getTargetingKeys().forEach(o=>{t[o]=e.googleObject.getTargeting(o).join()}),t});r(t)},g=function(e,t,o,i){n&&(Array.isArray(i)?i.forEach((n,r)=>{i[r]!==o[r]&&s(`Targeting ${t} (slot ${e}) cut: ${o[r]} â¡ï¸ ${i[r]}`)}):i!==o&&s(`Targeting ${t} (slot ${e}) cut: ${o} â¡ï¸ ${i}`))};return function(){const t=document.createElement("script");t.async=!0,t.src="//securepubads.g.doubleclick.net/tag/js/gpt.js";const i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(t,i),s("Google AdManager modules: "+(o.map(e=>e.name).join()||"none")),o.forEach(t=>t.init(e)),window.googletag=window.googletag||{},window.googletag.cmd=googletag.cmd||[],googletag.cmd.push(()=>{s("Google AdManager JS ready"),googletag.pubads().disableInitialLoad(),e.singleRequest&&googletag.pubads().enableSingleRequest(),e.collapseEmptyDivs&&googletag.pubads().collapseEmptyDivs(!0),n&&["slotResponseReceived","slotRenderEnded","slotOnload","impressionViewable"].forEach(e=>{googletag.pubads().addEventListener(e,(function(t){d(t,e)}))}),o.forEach(e=>e.exec()),googletag.enableServices()})}(),{configure:function(t,n){n.forEach(o=>{const i=e.slots.find(e=>e.code===o.code);o.adUnit=e.adUnitPrefix+t.googleAdUnit+o.code,o.sizes=i.sizes,o.mappings=i.mappings||void 0,o.googleObject=void 0}),googletag.cmd.push(()=>{i||(o.forEach(e=>e.configureOnce()),i=!0),n.forEach(e=>{if(e.googleObject=0===e.sizes.length?googletag.defineOutOfPageSlot(e.adUnit,e.id):googletag.defineSlot(e.adUnit,e.sizes,e.id),e.mappings){let t=googletag.sizeMapping();e.mappings.forEach(e=>t.addSize(e[0],e[1])),e.googleObject.defineSizeMapping(t.build())}e.googleObject.setTargeting("pos",e.code),t.targetings.forEach(t=>{const o=(i=t.value,n=40,Array.isArray(i)?i.map(e=>c(e,n)):c(i,n));var i,n;g(e.id,t.key,t.value,o),e.googleObject.setTargeting(t.key,o)}),o.forEach(t=>t.configureSlot(e)),e.googleObject.addService(googletag.pubads()),googletag.display(e.id)})})},fetch:function(e){googletag.cmd.push(()=>{const t=e.map(e=>e.id);s("Fetching Google Ads for "+t.join()),a(e),googletag.pubads().refresh(e.map(e=>e.googleObject))})},clear:function(e){googletag.cmd.push(()=>{s(()=>"Clearing Google Ads for "+e.map(e=>e.id).join()),googletag.pubads().clear(e.map(e=>e.googleObject))})},destroy:function(e){googletag.cmd.push(()=>{s(()=>"Destroying Google Ads for "+e.map(e=>e.id).join()),googletag.destroySlots(e.map(e=>e.googleObject))})},queue:function(e){const t=Math.random().toString(36).substring(2,7);s("Google Ads queue: adding "+t),googletag.cmd.push(()=>{s("Google Ads queue: running "+t),e()})}}},l=function(e){if(e.manager.adsSelector){const t=[...document.querySelectorAll(e.manager.adsSelector)].map(e=>e.id);return s("Slots loaded from page: "+t.join()),t}const t=e.manager.slots.map(e=>e.code);return s("Slots loaded from configuration: "+t.join()),t},u=function(){return!0===Didomi.getUserConsentStatusForVendor("google")},f=function(){return!1===Didomi.getUserConsentStatusForVendor("google")};function p(e){e||(e=window.dataLayer[0]);const t=e.layout,o=e.categoria,i=e.subcategoria,n=e.terciariacategoria,s=window.location.pathname,r=function(e){return s.match(/^\/tags/)?"tags/portada/":s.match(/^\/multimedia\/videos/)?"sinc"===e?"videos/portada/":e+"/video/":s.match(/^\/multimedia\/imagenes/)?"sinc"===e?"fotogalerias/portada/":e+"/fotogaleria/":s.match(/^\/multimedia/)?"multimedia/portada/":e+"/portada/"};return{googleAdUnit:function(){const e=function(){switch(o){case"aragon":case"huesca":case"teruel":case"zaragoza":return"local";case"cultura y ocio":case"ocio-y-cultura":return"cultura";case"branded":return"bc";default:return o}}();switch(t){case"articulo":case"articulo_especial":case"articulo_opinion":return e+"/noticia/";case"articulo_patrocinado":return"patrocinadas/noticia/";case"directo":return"directo/noticia/";case"galeria":return e+"/fotogaleria/";case"home":return"home/portada/";case"tag_subhome":return"tags/portada/";case"video":return e+"/video/";case"subhome":return r(e);case"paginas_libres":default:return"general/noticia/"}}(),targetings:function(){const s=[];if(t&&s.push({key:"ha_page",value:t}),o&&"sinc"!==o){const e=[];e.push(o),i&&"sinsc"!==i&&e.push(i),n&&"sinct"!==n&&e.push(n),s.push({key:"ha_secc",value:e})}return e.seotag&&s.push({key:"ha_tema",value:e.seotag.split(",").filter(Boolean)}),e.noticia_id&&s.push({key:"ha_id",value:e.noticia_id}),s}()}}function h(){const e=function(){return function(){try{return localStorage.setItem("adstest","adstest"),localStorage.removeItem("adstest"),!0}catch(e){return!1}}()?window.localStorage.getItem("_pr_active_segments_admngr"):""};return{name:"prometeo-segments",init:function(e){},exec:function(){},configureOnce:function(){const t=e();s("Setting Prometeo Segments targeting: "+t),googletag.pubads().setTargeting("pr_alayans_seg",t?t.split(","):[])},configureSlot:function(e){}}}function m(e=!1){e=e||{fetchMarginPercent:300,renderMarginPercent:150,mobileScaling:1};return{name:"lazy-loading",init:function(e){},exec:function(){googletag.pubads().enableLazyLoad(e)},configureOnce:function(){},configureSlot:function(e){}}}function b(){return{name:"prometeo-superuser",init:function(e){var t,o,i;window._PROMETEO_MEDIA_SU=window._PROMETEO_MEDIA_SU||(i="_SUIPROMETEO",t=document.cookie.match("(^|;)\\s*"+i+"\\s*=\\s*([^;]+)"),void(o=t?t.pop():"0"),"0"===o&&function(){var e=new XMLHttpRequest;e.open("GET","https://cmanager-prometeo.appspot.com/v1"),e.withCredentials=!0,e.onreadystatechange=function(){4==this.readyState&&200==this.status&&function(e){o=e||"0";var t=new Date;t.setTime(t.getTime()+2592e6),document.cookie=i+"="+o+"; expires="+t.toGMTString()+"; path=/"}(e.responseText)},e.send()}(),{read:function(){return o}}),s("Loading Prometeo Superuser")},exec:function(){},configureOnce:function(){const e=void 0!==window._PROMETEO_MEDIA_SU&&"function"==typeof window._PROMETEO_MEDIA_SU.read?_PROMETEO_MEDIA_SU.read():"-1";s("Setting Prometeo Superuser targeting: "+e),googletag.pubads().setTargeting("su_prometeo",e)},configureSlot:function(e){}}}function y(e,t,o){const i=function(i){if(!function(t){const o=t.getSlotElementId();return o===e||0===o.indexOf(e+"__")}(i.slot))return;const n=i.slot.getResponseInformation(),r=!!n&&(n.lineItemId||n.sourceAgnosticLineItemId);if(s(`RichAudience Skin module â¡ï¸ search: ${t} found: ${r}`),t!==r)return;const d=googletag.pubads().getSlots().filter(e=>-1!==o.indexOf(e.getSlotElementId()));d.length?(googletag.destroySlots(d),s(`RichAudience Skin module â¡ï¸ ${o.join()} slots destroyed`)):s(`âï¸ RichAudience Skin module â¡ï¸ ${o.join()} not found`)};return{name:"rich-audience-skin",init:function(e){},exec:function(){googletag.pubads().addEventListener("slotResponseReceived",i)},configureOnce:function(){},configureSlot:function(e){}}}function S(e){return e.cmpTimeout="cmpTimeout"in e?e.cmpTimeout:50,{pubID:"3661",adServer:"googletag",gdpr:{cmpTimeout:e.cmpTimeout}}}function w(e){return e.cmpTimeout="cmpTimeout"in e?e.cmpTimeout:50,{priceGranularity:"dense",enableSendAllBids:!1,consentManagement:{gdpr:{cmpApi:"iab",allowAuctionWithoutConsent:!0,defaultGdprScope:!0,timeout:e.cmpTimeout}},userSync:{filterSettings:{all:{bidders:"*",filter:"include"}}}}}var v={manager:{adsSelector:".henneoHB",timeout:3e3},amazon:{init:S({}),timeout:1300},prebid:{jsUrl:"https://hb.20m.es/prebid/4.43.0.js",init:w({}),analytics:{provider:"rubicon",options:{accountId:17212,endpoint:"https://prebid-a.rubiconproject.com/event"}},bidders:{criteo:{network:3340}},timeout:1300}};const k={OutOfPage:[],Top:[[1,1],[728,90],[950,90],[970,90],[970,250],[980,50],[980,90],[980,250],[990,90],[990,200],[990,250]],Right:[[300,250],[300,300],[300,600]],Button:[[300,250],[300,300]],Left:[[580,400],[655,400]],LeftSky:[[120,600],[160,600]],RightSky:[[120,600],[120,601],[160,600],[160,601]],Fluid:["fluid"]},z={OutOfPage:k.OutOfPage,Top:k.Top,Right:k.Right,LeftSky:[[120,600],[120,800],[160,600],[160,800]],RightSky:[[120,600],[120,601],[120,800],[120,801],[160,600],[160,601],[160,800],[160,801]],Fluid:k.Fluid},E={LeftSky:[[[1120,0],z.LeftSky],[[0,0],[]]],RightSky:[[[1120,0],z.RightSky],[[0,0],[]]]},R={FullTop:[[728,90],[970,90],[970,250]],SkinTop:[[1,1],[728,90],[970,90],[970,250]],Top:[[728,90],[970,250]],Right:[[300,250],[300,300],[300,600]],Button:[[300,250],[300,300]],Left:[[580,400],[655,400]],Sky:[[120,600],[160,600]]};var x={manager:{slots:[{code:"x01"},{code:"x31"},{code:"x41"},{code:"top"},{code:"top1"},{code:"bottom"},{code:"right1"},{code:"right2"},{code:"right3"},{code:"right4"},{code:"right5"},{code:"right6"},{code:"right7"},{code:"right8"},{code:"right9"},{code:"right10"},{code:"intext"},{code:"nativefluid"}],adsSelector:".ad-unit",getPageConfigFn:void 0,beforeLoadAdsFn:void 0,timeout:5e3},loader:{name:"didomi-paywall"},google:{adUnitPrefix:"/34616581/heraldo.es/",slots:[{code:"x01",sizes:z.OutOfPage},{code:"x31",sizes:z.LeftSky,mappings:E.LeftSky},{code:"x41",sizes:z.RightSky,mappings:E.RightSky},{code:"top",sizes:z.Top},{code:"top1",sizes:z.Top},{code:"bottom",sizes:z.Top},{code:"right1",sizes:z.Right},{code:"right2",sizes:z.Right},{code:"right3",sizes:z.Right},{code:"right4",sizes:z.Right},{code:"right5",sizes:z.Right},{code:"right6",sizes:z.Right},{code:"right7",sizes:z.Right},{code:"right8",sizes:z.Right},{code:"right9",sizes:z.Right},{code:"right10",sizes:z.Right},{code:"intext",sizes:z.OutOfPage},{code:"nativefluid",sizes:z.Fluid}],modules:[m(),b(),h(),y("top",5313320389,["x31","x41"])]},amazon:{page:"/34616581/heraldo.es_portada/",slots:[{code:"x31",sizes:R.Sky},{code:"x41",sizes:R.Sky},{code:"top",sizes:R.Top},{code:"top1",sizes:R.Top},{code:"right1",sizes:R.Right},{code:"right2",sizes:R.Right},{code:"right3",sizes:R.Right},{code:"right4",sizes:R.Right},{code:"right5",sizes:R.Right},{code:"right6",sizes:R.Right},{code:"right7",sizes:R.Right},{code:"right8",sizes:R.Right},{code:"right9",sizes:R.Right}],init:S({cmpTimeout:500}),timeout:1600},prebid:{slots:[{code:"x31",sizes:R.Sky},{code:"x41",sizes:R.Sky},{code:"top",sizes:R.SkinTop},{code:"top1",sizes:R.FullTop},{code:"right1",sizes:R.Right},{code:"right2",sizes:R.Right},{code:"right3",sizes:R.Right},{code:"right4",sizes:R.Right},{code:"right5",sizes:R.Right},{code:"right6",sizes:R.Right},{code:"right7",sizes:R.Right},{code:"right8",sizes:R.Right},{code:"right9",sizes:R.Right}],bidders:[{name:"appnexus",slots:{x31:12923176,x41:12923178,top:12923184,top1:12923185,right1:12923182,right2:12923183,right3:12923179,right4:12923180,right5:12923181,right6:15820036,right7:15820043,right8:15820133,right9:15820485}},{name:"criteo",publisherSub:"ha_heraldo_desktop",network:v.prebid.bidders.criteo.network,slots:{x31:!0,x41:!0,top:!0,top1:!0,right1:!0,right2:!0,right3:!0,right4:!0,right5:!0,right6:!0,right7:!0,right8:!0,right9:!0}},{account:17212,name:"rubicon",site:178852,slots:{x31:870126,x41:870130,top:870112,top1:870084,right1:870066,right2:870068,right3:870032,right4:870056,right5:870062,right6:273684,right7:1273694,right8:1273696,right9:1273698}},{name:"smartadserver",page:1016917,site:271677,slots:{x31:70220,x41:70220,top:70235,top1:70235,right1:70223,right2:70223,right3:70223,right4:70223,right5:70223,right6:70223,right7:70223,right8:70223,right9:70223}},{name:"richaudience",supplyType:"site",slots:{x31:"PmrbRFYXxj",x41:"1Ffdf3Agbv",top:["1axqtGuKRf","0XGpBN3wjE"],top1:"112asdRTMs",right1:"ELSRGGgo9m",right2:"09pktCEufC",right3:"IHjzoUl5KR",right4:"17PyoKpEuX",right5:"1bFAJX8gGb",right6:"1LhxH8dWcC",right7:"0Rk9kelWxc",right8:"t6Ug9c4A9q",right9:"1Jo5Yr9ZhH"}}],jsUrl:v.prebid.jsUrl,init:w({cmpTimeout:500}),analytics:v.prebid.analytics,timeout:1600}};var j={manager:{slots:[{code:"x01"},{code:"x31"},{code:"x41"},{code:"top"},{code:"top1"},{code:"bottom"},{code:"right1"},{code:"right2"},{code:"right3"},{code:"right4"},{code:"right5"},{code:"right6"},{code:"right7"},{code:"right8"},{code:"right9"},{code:"right10"},{code:"intext"},{code:"nativefluid"}],adsSelector:".ad-unit",getPageConfigFn:void 0,beforeLoadAdsFn:void 0,timeout:4e3},loader:{name:"didomi-paywall"},google:{adUnitPrefix:"/34616581/heraldo.es/",slots:[{code:"x01",sizes:z.OutOfPage},{code:"x31",sizes:z.LeftSky,mappings:E.LeftSky},{code:"x41",sizes:z.RightSky,mappings:E.RightSky},{code:"top",sizes:z.Top},{code:"top1",sizes:z.Top},{code:"bottom",sizes:z.Top},{code:"right1",sizes:z.Right},{code:"right2",sizes:z.Right},{code:"right3",sizes:z.Right},{code:"right4",sizes:z.Right},{code:"right5",sizes:z.Right},{code:"right6",sizes:z.Right},{code:"right7",sizes:z.Right},{code:"right8",sizes:z.Right},{code:"right9",sizes:z.Right},{code:"right10",sizes:z.Right},{code:"intext",sizes:z.OutOfPage},{code:"nativefluid",sizes:z.Fluid}],modules:[m(),b(),h(),y("top",5313320389,["x31","x41"])]},amazon:{page:"/34616581/heraldo.es_interior/",slots:[{code:"x31",sizes:R.Sky},{code:"x41",sizes:R.Sky},{code:"top",sizes:R.Top},{code:"right1",sizes:R.Right},{code:"right2",sizes:R.Right},{code:"right3",sizes:R.Right}],init:S({cmpTimeout:500}),timeout:1600},prebid:{slots:[{code:"x31",sizes:R.Sky},{code:"x41",sizes:R.Sky},{code:"top",sizes:R.SkinTop},{code:"right1",sizes:R.Right},{code:"right2",sizes:R.Right},{code:"right3",sizes:R.Right}],bidders:[{name:"appnexus",slots:{x31:12923176,x41:12923178,top:12923175,right1:12923172,right2:12923173,right3:12923174}},{name:"criteo",publisherSub:"ha_heraldo_desktop",network:v.prebid.bidders.criteo.network,slots:{x31:!0,x41:!0,top:!0,right1:!0,right2:!0,right3:!0}},{account:17212,name:"rubicon",site:178852,slots:{x31:870126,x41:870130,top:870124,right1:869936,right2:869960,right3:870122}},{name:"smartadserver",page:1016916,site:271677,slots:{x31:70220,x41:70220,top:70235,right1:70223,right2:70223,right3:70223}},{name:"richaudience",supplyType:"site",slots:{x31:"PmrbRFYXxj",x41:"1Ffdf3Agbv",top:["yvx6Pq2Dp2","0XGpBN3wjE"],right1:"jLV378ZYir",right2:"1JWQpqHYAM",right3:"19wIGRcbtK"}}],jsUrl:v.prebid.jsUrl,init:w({cmpTimeout:500}),analytics:v.prebid.analytics,timeout:1600}};const T="home"===window.dataLayer[0].layout,O="articulo"===window.dataLayer[0].layout||"articulo_opinion"===window.dataLayer[0].layout;window.didomiOnReady=window.didomiOnReady||[],window.didomiOnReady.push((function(e){e.shouldConsentBeCollected()&&(["notice.clickagree","notice.clickdisagree","preferences.clickagreetoall","preferences.clickdisagreetoall","preferences.clicksavechoices"].forEach(e=>{window.didomiEventListeners.push({event:e,listener:function(){!function(){s("Hide block navigation overlay");const e=document.getElementById("didomiConsentOverlay");null!==e&&(e.parentElement.removeChild(e),document.body.style.overflow="")}()}})}),s("Show block navigation overlay"),document.querySelector("body").insertAdjacentHTML("beforeend",'<div id="didomiConsentOverlay" style="top: 0; left: 0; right: 0; bottom: 0; z-index: 99999; position: fixed; background-color: rgba(0, 0, 0, 0.25)"></div>'),document.body.style.overflow="hidden")})),function(e,{offsetTop:t=0,paddingTop:o=10,closeTimeout:i=5e3}){const n=`.__hnads_sticky_top {\n      position:fixed;\n      top:${t}px;\n      left:0;\n      right:0;\n      z-index:25;\n      height:auto !important;\n      width:100% !important;\n      max-width:990px;\n      margin:0px auto;\n      padding-top:${o}px;\n      padding-bottom:10px;\n      background:#fff;\n  }`;let r,d,c,g=!1;const l=function(){u()?(a(n),f()):s("StickyTop: Behaviour is not enabled because slot is visible")},u=function(){return r.getBoundingClientRect().top<0},f=function(){d.classList.add("__hnads_sticky_top"),c=window.setTimeout(p,i),document.addEventListener("scroll",h,!0),s("StickyTop: Enabled sticky behaviour")},p=()=>{d.classList.remove("__hnads_sticky_top"),clearTimeout(c),document.removeEventListener("scroll",h,!0),s("StickyTop: Disabled sticky behaviour")},h=e=>{r.getBoundingClientRect().top>=t+o&&p()};window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[],googletag.cmd.push(()=>{googletag.pubads().addEventListener("slotOnload",t=>{g||e===t.slot.getSlotElementId()&&(t.slot.getResponseInformation()?(r=document.getElementById(e),r?(g=!0,d=r.firstElementChild,s("StickyTop: Slot detected "+e),l()):s("StickyTop: âï¸ Invalid DOM element "+e)):s("StickyTop: âï¸ Empty response "+e))})})}("top",{offsetTop:50,closeTimeout:3e3}),function(e=!1){const t=document.createElement("script");t.async=!0,t.src="https://pghub.io/js/pandg-sdk.js",t.onload=function(){window.didomiOnReady=window.didomiOnReady||[],window.didomiOnReady.push((function(t){if(!0===t.getUserConsentStatusForVendor(89)&&!0===t.getUserConsentStatusForVendor(577)){const o={gdpr:1,gdpr_consent:t.getUserStatus().consent_string,ccpa:null,bp_id:"bluemedia"},i={name:"P&G",pixelUrl:"https://pandg.tapad.com/tag"},n=Tapad.init(o,i),r={category:e||""};n.sync(r).then(console.log),s("Library P&G injected")}else s("Didomi consent rejected, Library P&G not loaded")}))};const o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(t,o)}(window.dataLayer[0].categoria);const _=T?x:j;_.manager.getPageConfigFn=p,_.manager.beforeLoadAdsFn=function(e,t){if(location.hostname.match(/admin/)){const e=document.createElement("style");return e.innerHTML="\n#x01, #x31, #x41 {display:none !important;}\n",document.querySelector("script").insertAdjacentElement("beforebegin",e),document.querySelectorAll(".ad-unit").forEach(e=>{e.innerHTML=`<span>Publicidad ${e.id||e.className}</span>`,e.classList.add("ad-admin")}),!1}return"home"===window.dataLayer[0].layout&&document.querySelectorAll(".ad-unit-dynamic-right").forEach((e,t)=>{e.id="right"+(t+1)}),!0};const A=function(e){let t=void 0,o=void 0;const i=function(){return e.enabled},n=function(){s("Paywall: Configuring listener"),document.addEventListener("blockContent",(function(e){t=!0===e.blockedContent,s('Paywall: Event "blockContent" received: '+t),o&&(s("Paywall: Running Ads callback"),o(t),o=void 0)}))};return i()&&n(),{isEnabled:i,isUnknownState:function(){return void 0===t},isUnblockedState:function(){return!1===t},isBlockedState:function(){return!0===t},setExternalCallback:function(e){o=e},getBlockedSlotsCodes:function(t){return t.filter(t=>{const o=t.replace(/__.+/,"");return e.blockedSlotsCodes.includes(o)})},getUnblockedSlotsCodes:function(t){return t.filter(t=>{const o=t.replace(/__.+/,"");return!e.blockedSlotsCodes.includes(o)})}}}({enabled:O,blockedSlotsCodes:["intext"]}),L=function(e){let t;const o=[];let i=[];return s("Loading Ads library"),t=g(e.google),e.amazon&&e.amazon.slots&&e.amazon.slots.length&&o.push(function(e){return function(e,t,o,i,n,r,d){function a(o,i){t[e]._Q.push([o,i])}t[e]||(t[e]={init:function(){a("i",arguments)},fetchBids:function(){a("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]},(r=o.createElement(i)).async=!0,r.onload=function(){s("Amazon JS loaded")},r.src="//c.amazon-adsystem.com/aax2/apstag.js",(d=o.getElementsByTagName(i)[0]).parentNode.insertBefore(r,d))}("apstag",window,document,"script"),apstag.init(e.init),{id:"amazon",configure:function(t,o){const i=e.page+(t.amazonAdUnit?t.amazonAdUnit:"");o.forEach(t=>{t.amazonObject=void 0;const o=e.slots.find(e=>e.code===t.code);o&&(t.amazonObject={slotID:t.id,slotName:i+t.code.toLowerCase(),sizes:o.sizes})})},fetch:function(t,o){const i=t.map(e=>e.id),n=t.filter(e=>e.amazonObject),d=n.map(e=>e.id);if(!n.length)return s("No Amazon configuration defined for "+i.join()),void o();s("Fetching Amazon bids for "+d.join()),apstag.fetchBids({slots:n.map(e=>e.amazonObject),timeout:e.timeout},(function(e){s("Finished Amazon bids for "+d.join()),r(e),o()}))},setTargeting:function(e){const t=e.filter(e=>e.amazonObject),o=t.map(e=>e.id);t.length&&(s("Setting Amazon targeting for "+o.join()),apstag.setDisplayBids())}}}(e.amazon)),e.prebid&&e.prebid.slots&&e.prebid.slots.length&&e.prebid.bidders&&e.prebid.bidders.length&&o.push(function(e){const t=function(e,t){const o=[];return t.forEach(t=>{if(!(e in t.slots))return;const i=t.slots[e];let n=!1;switch(t.name){case"appnexus":n={placementId:i};break;case"criteo":n=t.network?{networkId:t.network,publisherSubId:t.publisherSub+"_"+e.toLowerCase()}:{zoneId:i};break;case"rubicon":n={accountId:t.account,siteId:t.site,zoneId:i};break;case"smartadserver":n={domain:"//prg.smartadserver.com",siteId:t.site,pageId:t.page,formatId:i};break;case"richaudience":n={supplyType:"site",pid:i}}n&&o.push({bidder:t.name,params:n})}),o},o=function(e){if(!n)return;const t=[];Object.keys(e).forEach(o=>{e[o].bids.forEach(e=>{t.push({adUnit:o,bidder:e.bidder,adId:e.adId,status:e.statusMessage,cpm:e.cpm,size:e.size,time:e.timeToRespond})})}),t.length?r(t):s("Empty prebid bids responses")};return function(){const t=document.createElement("script");t.async=!0,t.src=e.jsUrl;const o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(t,o),window.pbjs=window.pbjs||{},window.pbjs.que=window.pbjs.que||[],pbjs.que.push(()=>{s("Prebid JS ready"),pbjs.setConfig(e.init),"analytics"in e&&e.analytics&&pbjs.enableAnalytics(e.analytics)})}(),{id:"prebid",configure:function(o,i){i.forEach(o=>{o.prebidObject=void 0;const i=e.slots.find(e=>e.code===o.code);i&&(o.prebidObject={code:o.code,bids:t(o.code,e.bidders),mediaTypes:{banner:{sizes:i.sizes}}})})},fetch:function(t,i){pbjs.que.push(()=>{const n=t.map(e=>e.id),r=t.filter(e=>e.prebidObject),d=r.map(e=>e.id);if(!r.length)return s("No Prebid configuration defined for "+n.join()),void i();s("Fetching Prebid bids for "+d.join()),pbjs.requestBids({adUnits:r.map(e=>e.prebidObject),bidsBackHandler:e=>{s("Finished Prebid bids for "+d.join()),o(e),i()},timeout:e.timeout})})},setTargeting:function(e){pbjs.que.push(()=>{const t=e.filter(e=>e.prebidObject),o=t.map(e=>e.code),i=t.map(e=>e.id);t.length&&(s("Setting Prebid targeting for "+i.join()),pbjs.setTargetingForGPTAsync(o,e=>function(o){return!!t.find(t=>t.id===e.getSlotElementId()&&t.code===o)}))})}}}(e.prebid)),{configure:function(n,r){let d=(r=[...new Set(r)]).map(e=>({id:e,code:e.replace(/__.+/,"")}));const a=e.manager.slots.map(e=>e.code),c=e.google.slots.map(e=>e.code);if(d=d.filter(e=>a.includes(e.code)).filter(e=>c.includes(e.code)).filter(e=>document.querySelector("#"+e.id)).filter(e=>!i.find(t=>t.id===e.id)),0===d.length)return void s("âï¸ Error configuring slots "+r.join());const g=r.filter(e=>!d.find(t=>t.id===e));r=d.map(e=>e.id),s(`Configuring slots ${r.join()} (ignoring ${g.join()||"none"})`),d.forEach(e=>i.push(e)),t.configure(n,d),o.map(e=>e.configure(n,d))},fetch:function(n=[],r={}){let d=!1,a=!1;const c=n.length?i.filter(e=>n.includes(e.id)):i;if(0===c.length)return void s("âï¸ Error fetching slots "+n.join());const g=n.filter(e=>!c.find(t=>t.id===e));n=c.map(e=>e.id),s(`Fetching slots ${n.join()} (ignoring ${g.join()||"none"})`);const l="disabled"in r?r.disabled:[];l.length&&s(`Disabled ${l.join()} for ${n.join()}`);const u=o.filter(e=>!l.includes(e.id)).map(e=>({library:e,finished:!1})),f=function(e){e.finished=!0,p()&&(s("All bidders finished for "+n.join()),a&&window.clearTimeout(a),h())},p=function(){return!u.find(e=>!1===e.finished)},h=function(){!0!==d&&(d=!0,t.queue((function(){u.filter(e=>e.finished).forEach(e=>e.library.setTargeting(c)),t.fetch(c)})))};if(0===u.length)return s("No bidders configured for "+n.join()),void h();u.forEach(e=>{e.library.fetch(c,(function(){f(e)}))}),d?s(`AdServer request already sent for ${n.join()}, check bidders configuration`):a=window.setTimeout(()=>{s("ð¢ Timeout for "+n.join()),h()},e.manager.timeout)},clear:function(e=[]){s("Clearing slots "+(e.length?e.join():"ALL"));const o=e.length?i.filter(t=>e.includes(t.id)):i;t.clear(o)},destroy:function(e=[]){s("Destroying slots "+(e.length?e.join():"ALL"));const o=e.length?i.filter(t=>e.includes(t.id)):i;t.destroy(o),i=e.length?i.filter(t=>!e.includes(t.id)):[]}}}(_);!function(e,t,o){if(s("Loader Didomi-PayWall"),"didomi-paywall"!==t.loader.name)throw new Error("Invalid loader: "+t.loader.name);const i=function(){const e=t.manager.getPageConfigFn();if(u())return s("Google consent was accepted â¡ï¸ Fetching ads"),void n(e);if(f()&&!Didomi.shouldConsentBeCollected())return void s("Google consent was collected & rejected â¡ï¸ âï¸ Ads are disabled");s("Waiting for Google consent ...");let o=!1;Didomi.on("consent.changed",(function(){f()?s("Google consent rejected â¡ï¸ âï¸ Ads are disabled"):!o&&u()&&(o=!0,s("Google consent accepted â¡ï¸ Fetching ads"),n(e))}))},n=function(i){if(!1!==function(e,t,o){return!("beforeLoadAdsFn"in e.manager)||"function"!=typeof e.manager.beforeLoadAdsFn||!1!==e.manager.beforeLoadAdsFn(e,t,o)||(s("âï¸ Ads are disabled"),!1)}(t,i,e)){if(o.isEnabled())return o.isUnblockedState()?(s("Didomi-PayWall: Paywall is unblocked â¡ï¸ Fetching all slots"),void r(i)):void a(i);r(i)}},r=function(o){const i=l(t);e.configure(o,i),e.fetch(i)},a=function(e){const o=l(t);c(e,o),g(e,o)},c=function(t,i){const n=o.getUnblockedSlotsCodes(i);n.length?(s("Didomi-PayWall: Loading unblocked slots"),e.configure(t,n),e.fetch(i)):s("Didomi-PayWall: âï¸ Empty unblocked slots")},g=function(t,i){const n=o.getBlockedSlotsCodes(i);n.length?o.isBlockedState()?s("Didomi-PayWall: âï¸ Blocking pending slots"):o.setExternalCallback((function(o){s("Didomi-PayWall: Callback invoked with state: "+o),!0!==o?(s("Didomi-PayWall: Loading blocked slots"),e.configure(t,n),e.fetch(n)):s("Didomi-PayWall: âï¸ Blocking pending slots")})):s("Didomi-PayWall: âï¸ Empty blocked slots")};window.didomiOnReady=window.didomiOnReady||[],window.didomiOnReady.push(()=>{s("Event didomiOnReady"),d(i)})}(L,_,A);const P={amazonEnabled:!0};P.getPageConfigFn=p;let I=!1;P.beforeLoadAdsFn=function(e,t){if("undefined"==typeof Didomi||!0!==Didomi.getUserConsentStatusForVendor("google"))return s("Fetch more ads on infinite scroll â¡ï¸ âï¸ Ads are disabled"),!1;if(!I){const e=["x31","x41"];L.destroy(e),I=!0;a(".article-sidebar .ad-unit {\n      height: initial;\n      float: none; }")}return!0},function(e,t,o,i=".henneoHB"){const n="amazonEnabled"in t&&!0===t.amazonEnabled,r=function(t,o){e.configure(t,o),n?e.fetch(o):e.fetch(o,{disabled:["amazon"]})},d=function(e,t){const i=o.getUnblockedSlotsCodes(t);if(!i.length)return void s("Infinite scroll: âï¸ Empty unblocked slots");const n=o.isBlockedState()?"blocked":"unknown";s(`Infinite scroll: Paywall is ${n} â¡ï¸ Fetching ONLY unblocked slots`),r(e,i)};document.addEventListener("is.append",(function(e){const n=e.detail.blockId,a=e.detail.dataLayer;s("Infinite scroll APPEND event for block "+n),s(e.detail);const c=document.querySelector("#"+n);if(!c||!a)return void s("Invalid infinite scroll APPEND event: missing data");if("beforeLoadAdsFn"in t&&"function"==typeof t.beforeLoadAdsFn&&!1===t.beforeLoadAdsFn(c,e.detail))return void s("âï¸ Ads are disabled in block "+n);const g=c.querySelectorAll(i);g.forEach(e=>e.id=e.id+"__"+n);const l=[...g].map(e=>e.id);if(0===l.length)return void s("Invalid infinite scroll APPEND event: no ads");const u=t.getPageConfigFn(a);if(o&&o.isEnabled())return o.isUnblockedState()?(s("Infinite scroll: Paywall is unblocked â¡ï¸ Fetching all slots"),void r(u,l)):void d(u,l);r(u,l)})),document.addEventListener("is.destroyBlock",(function(t){const o=t.detail.blockId;s("Infinite scroll DESTROY event for block "+o),s(t.detail);const n=document.querySelector("#"+o);if(!n)return void s("Invalid infinite scroll DESTROY event");const r=[...n.querySelectorAll(i)].map(e=>e.id);0!==r.length?e.destroy(r):s("Invalid infinite scroll DESTROY event: no ads")}))}(L,P,A,".ad-unit")}();