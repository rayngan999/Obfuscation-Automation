!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n,o=function(e){var t=document.cookie.match("(^|;) ?"+e+"=([^;]*)(;|$)");return t?t[2]:null},i={breakpoints:{at4units:0,at8units:640,at12units:980,at16units:1300}};function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u,s=function(e){var t=window.__ace,r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({initiator:"uac"},e);try{t("log","log",[r])}catch(e){console.error("__ace function does not exist: ".concat(e))}},d="error",l="info";function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=function(){var e={};try{u||(u=document.querySelector("#uac"));var t=u&&u.getAttribute("data-params");e=t?JSON.parse(t):{}}catch(e){s({type:d,message:e.message,stack:e.stack})}return e},v=function(){var e=function(e,t){n||(n=document.getElementsByTagName("meta"));for(var r=0;r<n.length;r++)if(n[r].getAttribute(e)===t)return n[r].content;return null}("name","uac-config"),t={};try{t=JSON.parse(decodeURIComponent(e))}catch(e){t={}}return p(p({},i),t)},w={lg:"at16units",md:"at12units",sm:"at8units",xs:"at4units"};function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var h=function(e){return"(min-width: ".concat(e.value,"px)")},O=function(e,t){return"(min-width: ".concat(e.value,"px) and (max-width: ").concat(t.value-1,"px)")},P=function(e){return"(max-width: ".concat(e.value-1,"px)")},j=function(){var e=v().breakpoints;if(e){var t=Object.keys(e).map((function(t){return{name:t,value:e[t]}})).sort((function(e,t){return t.value-e.value}));try{for(var r=y(t,1)[0],n=0;n<t.length;n++){var o=t[n],i=t[n-1],a=t[n+1],c=void 0;if(i&&a?c=O(o,i):!i&&a?c=h(o):!a&&i&&(c=P(i)),c&&window.matchMedia(c).matches){r=o;break}}return r.name}catch(e){return t[t.length-1].name}}},k=function(e){var t;e&&e.setTargeting("breakpoint",(t=o("ResponsiveConditional_initialBreakpoint"))?w[t]:j())},_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=!!t.changeCorrelator,n=t.adId,o=window,i=o.adslots,a=o.googletag,c=i[n],u=c.adAlreadyRequested;u||(c.adAlreadyRequested=!0),k(e),e&&(s({type:l,message:"requestAd: request to GoogleAdManager",data:e}),a.pubads().refresh([e],{changeCorrelator:r}))},S=function(e,t){var r=t.moatEnabled,n=window,o=n.adslots,i=n.moatReady,a=n.moatTimerId,c=n.moatQueue,u=n.moatPrebidApi,d=n.clearTimeout;r?i?(d(a),u.setMoatTargetingForSlot(o[e].slot),s({type:l,message:"".concat(e," checkMoatData: MOAT data is ready")}),_(o[e].slot,t)):c?c.push({adId:e,moatEnabled:r,requestAd:_}):_(o[e].slot,t):_(o[e].slot,t)};function I(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var A=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.requestPending=[],this.createRequest(t),this.callback=r}var t,r,n;return t=e,(r=[{key:"resolve",value:function(e,t,r){var n=this.requestPending.find((function(t){return t.id===e}));n&&(n.pending=!1),this.allRequestResolved()&&this.callback(t,r)}},{key:"execute",value:function(e,t){var r=this;this.isRequestListEmpty()?this.callback(e,t):this.requestPending.forEach((function(n){n.callback({adId:e,options:t,requestId:n.id,requestManager:r})}))}},{key:"isRequestListEmpty",value:function(){return 0===this.requestPending.length}},{key:"createRequest",value:function(e){var t=this;Object.keys(e).filter((function(t){return"function"==typeof e[t]})).forEach((function(r){t.requestPending.push({callback:e[r],id:r,pending:!0})}))}},{key:"allRequestResolved",value:function(){return this.isRequestListEmpty()||this.requestPending.every((function(e){return!e.pending}))}}])&&I(t.prototype,r),n&&I(t,n),e}(),E=!0,x=function(e){var t=e.adId,r=e.options,n=e.requestId,o=e.requestManager,i=window.adslots||{},a=r.adUnitPath,c=function(e){var t=["fluid"];return e.filter((function(e){return!(-1!==t.indexOf(e))}))}(r.adSize);if(!c.length)return o.resolve(n,t,r);var u={sizes:c,slotID:t,slotName:a},s=window,d=s.apstag,l=s.ace,f=(void 0===l?{}:l).setPerfMark;try{d.fetchBids({slots:[u]},(function(e){E&&(f("apstag-firstBid",{isNewRelicEnabled:!0}),E=!1),i[t].apstagBids=e,googletag.cmd.push((function(){d.setDisplayBids(),o.resolve(n,t,r)}))}))}catch(e){o.resolve(n,t,r)}},q=function(e){var t=e.adId,r=e.options,n=e.requestId,o=e.requestManager,i=window.pbjs||{};try{i.que.push((function(){i.loadPrebidAds([t],(function(){s({type:l,message:"".concat(t," PREBID loadPrebidAds function callback")}),o.resolve(n,t,r)}))}))}catch(e){o.resolve(n,t,r)}},M=!0;function T(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var D="APSTAG",R="PREBID",B=function(e,t){var r,n=t.triggerPrebid,o=t.triggerAdBidding,i=t.moatEnabled,a=o||n,c=new A((T(r={},R,a&&q),T(r,D,a&&x),r),S);!function(e){var t=window.ace,r=void 0===t?{}:t,n=window.adslots||{},o=window.moatPrebidApi||{},i=r.setPerfMark;!e||window.isMoatTimer||window.moatReady||(window.isMoatTimer=!0,window.moatTimerId=setTimeout((function(){i("MOAT-TIMER"),window.moatYieldReady=!1,window.moatQueue&&window.moatQueue.length&&window.moatQueue.forEach((function(e){var t=e.moatEnabled,r=e.requestAd,a=e.slot,c=o.setMoatTargetingForSlot,u=n[e.adId]&&n[e.adId].slot||a;M&&(i("moat-uac-firstAdItem",{isNewRelicEnabled:!0}),M=!1),t&&"function"==typeof c&&c(u),u&&r(u,e)})),window.moatQueue=null}),1e3))}(i),c.execute(e,t)},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=window,o=n.adslots,i=n.__uac.uacObservers,a=e[0]||!1,c=a.isIntersecting,u=r.infiniteScrollDisplayAds;if(c){if(void 0!==u&&t&&-1===u.indexOf(t))return;i[t](),o[t].isObserveAdRequested=!0,B(t,r)}},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{options:{}},r=window,n=r.__uac.uacObservers,o=t.options,i=o.rootMargin,a=void 0===i?"0px":i,c=o.threshold,u=void 0===c?0:c;try{var s=document.querySelector("#".concat(e)),d=document.querySelector("#wrapper-".concat(e)),l=d||s;if(!l)return;var f=new IntersectionObserver((function(r){return z(r,e,t.options)}),{rootMargin:a,threshold:u});f.observe(l),window.adslots[e].observed=!0,n[e]=function(){f.unobserve(l)}}catch(r){B(e,t.options)}};function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){L(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function L(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function U(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var G=function(e){var t=window,r=t.googletag,n=t.adslots,o=e.options,i=e.content,a=o.adPlacement,c=o.isObserve,u=o.adSizeMap,d=o.triggerPrebid,f=o.collapseAdBeforeFetch,p=o.observeFromUAC,g=(a&&i&&i.data&&i.data[a]?i.data[a]:null)||o,b=g.adId,w=g.adSize,y=g.adUnitPath,m=g.adActivate;if(b&&w&&m&&y){var h=function(e,t){var r=window.ace.getData,n=void 0===r?function(){return{}}:r,o=t.options,i=e.adTargeting,a=void 0===i?{}:i,c=a.metadata,u=Q({},U(a,["metadata"])),s=function(e){var t=e.adId,r=e.adLocation,n="string"==typeof r?{adlocation:r}:r,o={adlocation:t.slice(t.indexOf("AD_")+3,t.length)};return n||o}(o),d=j(),l=n("usertype","pageid","pagesection","pagesubsection","pagetype","mod","news_id","targeting_keywords","propensity","vxid","kuid","ksg","article_template","article_id","article_type","article_headline","page_access","user_exp","cxpw","cxsg","referrer","referrerPath","environment","psg"),f={pageid:l.pageid,pagesection:l.pagesection,pagesubsection:l.pagesubsection,pagetype:l.pagetype,usertype:l.usertype,keywords:l.keywords},p={articletemplate:l.article_template,articleid:l.article_id,articletype:l.article_type,articleheadline:l.article_headline,pageaccess:l.page_access},g={pbucket:l.pbucket,pscore:l.pscore},b=c||f;return u=Q(Q(Q(Q(Q(Q({},u),b),g),p),{},{mod:l.mod,vxid:l.vxid,kuid:l.kuid,ksg:l.ksg,news_id:l.news_id,cxpw:l.cxpw,cxsg:l.cxsg,userexp:l.user_exp,refsec:l.refsec,referrer:l.referrer,psg:l.psg,environment:l.environment},s),{},{breakpoint:d,adcomponent:"uac"})}(g,e);if(window.adslots[b]&&window.adslots[b].slot)B(b,e.options);else{var O=r.defineSlot(y,w,b).addService(r.pubads()).setCollapseEmptyDiv(f),P={slot:O,isObserve:c,triggerPrebid:d,options:o,adTargeting:h};if(s({type:l,message:"".concat(b,": BuildAd function: Ad slot creation")}),n[b]=n[b]?F({},n[b],P):P,Object.keys(h).forEach((function(e){h[e]&&n[b].slot.setTargeting(e,h[e])})),u&&"function"==typeof O.defineSizeMapping){var k=function(e){var t=v().breakpoints,r=window.googletag.sizeMapping();return Object.keys(e).forEach((function(n){var o=e[n];t.hasOwnProperty(n)&&r.addSize([t[n],0],o)})),r}(u);O.defineSizeMapping(k.build())}if(r.enableServices(),r.display(b),c){if(!p)return;C(b,e)}else setTimeout((function(){return B(b,e.options)}),0)}}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=window,r=t.googletag,n=t.adslots,o=e.options,i=o&&o.adId;i&&!n[i]&&(window.adslots[i]={}),r.cmd.push((function(){return G(e)}))},J=function(){var e=window,t=e.googletag,r=e.adslots;t.cmd.push((function(){t.pubads().addEventListener("slotRenderEnded",(function(e){!function(e,t){var r=e.isEmpty,n=e.slot.getSlotElementId(),o=t[n]&&t[n].options||{},i=document.querySelector("#".concat(n)),a=document.querySelector("#wrapper-".concat(n));i&&(a&&r&&(a.style.display="none"),function(e,t){var r=e.initialHeight,n=e.reserveInitialHeight,o=e.staticHeight,i=(void 0===o?{}:o).height;return!(!t||i||!r&&!n)}(o,a)&&(a.style.height="100%"))}(e,r)}))}))};var $=function(e,t){t.cmd.push((function(){if(0===t.pubads().getTargeting("permutive").length){var r=e.getData("pdfps","permutiveId"),n=r.pdfps,o=r.permutiveId;!function(e,t){try{t().setTargeting("permutive",e?JSON.parse(e):[])}catch(t){s({type:d,message:"error trying to set pdfps for permutive",stack:t.stack,data:{pdfps:e}})}}(n,t.pubads),function(e,t){if(e)try{t().setTargeting("puid",e),t().setTargeting("ptime",Date.now().toString())}catch(t){s({type:d,message:"error trying to set permutive id",stack:t.stack,data:{permutiveId:e}})}}(o,t.pubads)}}))};function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(Object(r),!0).forEach((function(t){K(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function K(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}window.googletag||(window.googletag={cmd:[]}),window.moatTimerId,window.isMoatTimer=!1,window.moatReady=!1,window.moatQueue||(window.moatQueue=[]),window.__uac||(window.__uac={}),window.__uac.uacObservers||(window.__uac.uacObservers={}),window.ace||(window.ace={}),window.ace.setPerfMark||(window.ace=Y(Y({},window.ace),{},{setPerfMark:function(){}})),window.adslots||(window.adslots={},J()),function(){if(b().enablePublisherProvidedId){var e=window.googletag,t=window.utag_data,r=(void 0===t?{}:t).user_ref||o("TR");if(r){var n=r.replace("-","");e.cmd.push((function(){e.pubads().setPublisherProvidedId(n)}))}}}(),function(){var e=window.googletag,t=Math.floor(10*Math.random()).toString();e.cmd.push((function(){e.pubads().setTargeting("nckey_userGroup",t)}))}(),function(){var e=window,t=e.__ace,r=e.ace,n=e.googletag,i=b(),a=i.enablePermutive,c=i.permutiveSourcepointId;a&&r&&t&&c&&("true"===o("gdprApplies")?t("djcmp","customVendorIsEnabled",(function(e){e&&$(r,n)}),[c]):$(r,n))}(),window.__buildAd=H,window.__uac=Y(Y({},window.__uac),{},{buildAd:H,loadAd:B,observe:C})}]);