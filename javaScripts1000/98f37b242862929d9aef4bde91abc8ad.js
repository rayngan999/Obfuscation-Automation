!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=20)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.attachToDocument=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.document,r=arguments[2],n=arguments[3];if(t){var o=void 0;r&&(o=t.getElementsByTagName(r)[0]),o||(o=t.body||t.head);try{var i=n?null:o.firstChild;return o.insertBefore(e,i)}catch(e){}}};t.attachIframeToDocument=function(e){return n(e,window.document,"html",!0)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mostAccessibleWindow=void 0;var n,o=r(2),i=(n=o)&&n.__esModule?n:{default:n};t.mostAccessibleWindow=new i.default(function(){var e=window;try{for(;!e.stroeerCore&&window.top!==e&&e.parent.location.href.length;)e=e.parent}catch(e){}return e}).get()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.supplier=t}return n(e,[{key:"get",value:function(){return this.cache?this.cache:(this.cache=this.supplier(),this.cache)}}]),e}();t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pipe=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return n.compose.apply(void 0,function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(t.reverse()))};var n=r(7)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.stroeerCoreOnMostAccessibleWindow=void 0;var n,o=r(1),i=r(2),c=(n=i)&&n.__esModule?n:{default:n};t.stroeerCoreOnMostAccessibleWindow=new c.default(function(){return o.mostAccessibleWindow.stroeerCore=o.mostAccessibleWindow.stroeerCore||{},o.mostAccessibleWindow.stroeerCore}).get()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.STROEER_SSP_CONSENT_URL="ih.adscale.de/consent",t.ADSCALE_MAP_URL="ih.adscale.de/map",t.GDPR_CONSENT_MAX_WAIT="2000"},function(e,t,r){"use strict";String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e,t){return this.substring(!t||t<0?0:+t,e.length)===e}})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.compose=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(){var e=t.slice();if(e.length>0){for(var r=e.pop(),n=r.apply(void 0,arguments);e.length>0;)n=e.pop()(n);return n}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.appendElementsToIframe=t.createHiddenIframe=void 0;var n=r(0);t.createHiddenIframe=function(e){var t=document.createElement("iframe");return t.src=e,t.width=0,t.height=0,t.style.display="none",t.style.border="thin none",t.hspace="0",t.vspace="0",t.marginwidth="0",t.marginheight="0",t.frameborder="0",t.style.border="0",t},t.appendElementsToIframe=function(e,t){var r=e.contentWindow.document;t.forEach(function(e){return(0,n.attachToDocument)(e,r)})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(10);t.default=function(e){var t=e.protocol,r=e.host,o=void 0===r?"localhost":r,i=e.port,c=e.path,u=e.queryObject,a=t?t+":":"https:",s=i?":"+i:"",f=n.encode(u),l=f?"?"+f:"";return a+"//"+o+s+(c&&c.length>0?"/"+c.map(function(e){return encodeURIComponent(e)}).join("/"):"")+l}},function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var o=/&amp;|&|;/gim;e.exports={encode:function(e,t){var r,o=[];for(r in e)null!=e[r]&&"object"!=n(e[r])&&"function"!=typeof e[r]&&o.push(encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return o.join(t||"&")},decode:function(e,t){t=t||o;for(var r,n,i,c={},u=e.split(t),a=0,s=u.length;a<s;a++)i=u[a].indexOf("="),r=u[a].substring(0,i),(n=u[a].substring(i+1))&&(c[decodeURIComponent(r)]=decodeURIComponent(n));return c}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(12),i=(n=o)&&n.__esModule?n:{default:n};t.default=function(e,t){var r=function(t,r){"function"==typeof e&&e(t,r)},n=!1,o=setTimeout(function(){n=!0,r("CMP_TIME_OUT")},t||10),c=function(e,t){n||(clearTimeout(o),t?(!0===e.gdprApplies?e.gdprApplies="1":e.gdprApplies="0",r(void 0,e)):r("CMP_CALL_FAILED"))};function u(){for(var e=window,t=void 0;e;){try{if("function"==typeof e.__tcfapi||e.frames.__tcfapiLocator){t=e;break}}catch(e){}if(e===window.top)break;e=e.parent}return t}var a=function(e){n||(clearTimeout(o),r(e))};window.retryHandle=function e(){if(window.retryHandle&&clearTimeout(window.retryHandle),!n){if(!u())return setTimeout(e,2);!function(){var e,t,r=(0,i.default)();"function"!=typeof r.__tcfapi?"function"==typeof window.addEventListener?(e=u(),t={},window.__stroeerTcfApi=function(r,n,o,i){if(e){var c=""+Math.random(),u={__tcfapiCall:{command:r,parameter:i,version:n,callId:c}};t[c]=o,e.postMessage(u,"*")}},window.addEventListener("message",function(e){var r={};try{r="string"==typeof e.data?JSON.parse(e.data):e.data}catch(e){}var n=r.__tcfapiReturn;n&&"function"==typeof t[n.callId]&&(t[n.callId](n.returnValue,n.success),t[n.callId]=null)},!1),window.__stroeerTcfApi("getTCData",2,c)):a("NO_CMP_FOUND"):r.__tcfapi("getTCData",2,c)}()}}()}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){var e=[];e.push(window);for(var t=window,r=0;t!==window.top&&r++<100;)try{void 0!==(t=t.parent).location.href&&e.push(t)}catch(e){}return e[e.length-1]}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.prepareTimeout=void 0;var n=r(5);t.prepareTimeout=function(){try{return parseInt(n.GDPR_CONSENT_MAX_WAIT,10)}catch(e){return}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.isSecure="https:"===window.location.protocol;t.secureValueForUrl="1",t.isUrlCompatibleWithCurrentContext=function(e){return!n||n&&0===e.toLowerCase().indexOf("https:")}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.createAsyncScriptTag=function(e){var t=document.createElement("script");return t.type="text/javascript",t.src=e,t.async=!0,t}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=window.location.search.indexOf("stroeer_log")>-1,o=function(){};t.createErrorLogger=function(e){return function(e){return e||n}(e)?function(){for(var e,t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];(e=console).error.apply(e,["ERROR:"].concat(r))}:o}},,,,function(e,t,r){"use strict";r(6);var n=r(21),o=r(26);(0,o.collectSlotConfigs)();window.stroeerCoreConnect=function(e){var t=(0,n.normalizeUrlConfigs)(e);(0,n.handleUnsupportedUrlTypes)(t),(0,n.handleImageTypes)(t),(0,n.handleIframeTypes)(t),(0,n.handleScriptTypes)(t)},(0,o.performUserConnect)()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handleScriptTypes=t.handleIframeTypes=t.handleImageTypes=t.handleUnsupportedUrlTypes=t.normalizeUrlConfigs=void 0;var n=r(22),o=r(23),i=r(24),c=r(3),u=r(14),a=r(15),s=r(8),f=r(25),l=r(16),d=r(4),p=r(0),v=d.stroeerCoreOnMostAccessibleWindow,y=(0,l.createErrorLogger)(v.log),_=(0,o.startsWith)("//"),m=function(e){return _(e)?"https:"+e:e},h=function(e,t,r){return e.filter((n=t,function(e){return e.type===n})).map((0,i.prop)("url")).map(m).filter(u.isUrlCompatibleWithCurrentContext).map(r);var n},g=(0,c.pipe)(s.createHiddenIframe,p.attachIframeToDocument);t.normalizeUrlConfigs=(0,n.map)(function(e){return{type:e.type.toLowerCase().trim(),url:e.url.trim()}}),t.handleUnsupportedUrlTypes=function(e){var t=["image","iframe","script"],r=e.filter(function(e){return-1===t.indexOf(e.type)});r.length>0&&r.forEach(function(e){return y("Unrecognizable type",e.type,"for url",e.url)})},t.handleImageTypes=function(e){var t=h(e,"image",f.createPixelImage);if(0!==t.length){var r=g("javascript:false");(0,s.appendElementsToIframe)(r,t)}},t.handleIframeTypes=function(e){h(e,"iframe",s.createHiddenIframe).forEach(function(e){return(0,p.attachIframeToDocument)(e)})},t.handleScriptTypes=function(e){h(e,"script",a.createAsyncScriptTag).forEach(function(e){return(0,p.attachToDocument)(e)})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.map=function e(t,r){if(1===arguments.length)return function(r){return e(t,r)};if(void 0===r)return[];if(!Array.isArray(r))return function(e,t){var r={};for(var n in t)r[n]=e(t[n],n);return r}(t,r);var n=-1;var o=r.length;var i=Array(o);for(;++n<o;)i[n]=t(r[n]);return i}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.startsWith=function e(t,r){if(1===arguments.length)return function(r){return e(t,r)};return r.startsWith(t)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.prop=function e(t,r){if(1===arguments.length)return function(r){return e(t,r)};return r[t]}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.createPixelImage=function(e){var t=document.createElement("img");return t.style.display="none",t.width=1,t.height=1,t.src=e,t}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.performUserConnect=t.collectSlotConfigs=void 0;var n=r(3),o=r(27),i=r(0),c=r(4),u=r(15),a=r(14),s=r(28),f=r(16),l=r(29),d=y(r(9)),p=y(r(11)),v=r(13);function y(e){return e&&e.__esModule?e:{default:e}}var _=c.stroeerCoreOnMostAccessibleWindow,m=(0,f.createErrorLogger)(_.log);_.configs=_.configs||[],_.userConnectUrl=_.userConnectUrl||"ih.adscale.de/userconnect";var h=_.configs,g=function(e){return 0===h.filter(function(t){return t.slotId===e.slotId}).length},b=function(e){var t=e.getAttribute("data-container-config");if(t)return function(e){try{return JSON.parse(e)}catch(t){return void m("unable to parse config",e)}}(t)},w=(0,n.pipe)(u.createAsyncScriptTag,i.attachToDocument),O=(t.collectSlotConfigs=function(){[].slice.call(window.document.getElementsByTagName("script")).map(b).filter(function(e){return e&&e.slotId}).filter(g).forEach(function(e){h.push(e)})},function(e,t){var r=(0,o.head)(h);if(r&&!_.done){var n=(0,d.default)({host:_.userConnectUrl,queryObject:function(){var n={ssl:a.secureValueForUrl,sid:r.slotId,cbfn:"stroeerCoreConnect",ts:(new Date).getTime(),umd:_.userMatchDone?"true":"false",gdpr_err:e,gdpr:void 0,gdpr_consent:void 0,gdpr_version:void 0};t&&(n.gdpr=t.gdprApplies,n.gdpr_consent=t.tcString,n.gdpr_version=t.tcfPolicyVersion);var o=(0,s.getPageReferrer)();o&&(n.ref=o);var i=(0,l.selectThirdPartyCookies)();return i.length>0&&(n.tp=btoa(JSON.stringify({ids:i}))),n}()});w(n),_.done=!0,_.userMatchDone=!0}});t.performUserConnect=function(){if("undefined"!=typeof adscale_pup&&adscale_pup){var e="string"==typeof adscale_consent?adscale_consent:void 0,t="string"==typeof adscale_consent_applies?adscale_consent_applies:void 0;O(void 0,{gdprApplies:t,tcString:e,tcfPolicyVersion:void 0})}else(0,p.default)(function(e,t){O(e,t)},(0,v.prepareTimeout)())}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.head=function(e){if("string"==typeof e)return e[0]||"";return e[0]}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getPageReferrer=void 0;var n=r(1);t.getPageReferrer=function(){var e,t,r=n.mostAccessibleWindow.document.referrer;if(r){var o=(e=r,(t=document.createElement("a")).href=e,t),i=""+(o.host||o.hostname+(o.port?":"+o.port:""));r=o.protocol+"//"+i+o.pathname}return r}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.selectThirdPartyCookies=void 0;var n=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var c,u=e[Symbol.iterator]();!(n=(c=u.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=r(1),i=["tdid","digitrust.v1.identity","id5","3pi","_pubcommonid"];t.selectThirdPartyCookies=function(){var e=function(){var e=[],t=null;try{t=o.mostAccessibleWindow.document.cookie}catch(e){}t&&t.split(";").forEach(function(t){var r={},o=t.split("="),i=n(o,2),c=i[0],u=i[1];c&&u&&(r[c.trim()]=u.trim(),e.push(r))});return e}().filter(function(e){return i.indexOf(Object.keys(e)[0].toLowerCase())>-1}),t=[];return e.forEach(function(e){var r=Object.keys(e)[0].toLowerCase();t.push({src:r,id:""})}),t}}]);