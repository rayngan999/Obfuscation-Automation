/*! v:42139 b:default c:rum */
(window["pcodeJsonp42139wFtjRU3cLj"]=window["pcodeJsonp42139wFtjRU3cLj"]||[]).push([[60],{618:function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.__esModule=!0,t.time=function(e){if(!f.enabled)return;f._deltaMarks[e]=[F()]},t.timeEnd=function(e,t){if(!f.enabled)return;var n=f._deltaMarks[e];if(!n||0===n.length)return;n.push(F(),t),P(e)},t.send=m,t.sendTimeMark=y,t.init=function(e,t){if(!f.enabled)return;f._settings=e,f._vars=t,h=function(){var e=f._vars;return Object.keys(e).map((function(t){return t+"="+encodeURIComponent(e[t]).replace(/\*/g,"%2A")}))}(),g=h.concat(["143.2129="+s]),f.enabled&&!window.yandex_context_rum_inited&&(!function(){addEventListener("visibilitychange",(function e(){f.vsChanged=!0,removeEventListener("visibilitychange",e)})),addEventListener("scroll",(function e(t){f.isUserScroll=!0,f.firstScrollTimestamp=t.timeStamp,removeEventListener("scroll",e)}));try{new u((function(e,t){var n=e.getEntriesByType("navigation")[0];if(n){t&&t.disconnect();var r=[];Q(r,n),N(r),H("690.2096.2892",h.concat(r))}})).observe({type:"navigation",buffered:!0})}catch(e){}if(window.PerformanceLongTaskTiming){var e=function(e,t){return(e=e.concat(t)).length>300&&(e=e.slice(e.length-300)),e},t=f._tti={events:[],eventsAfterTTI:[],fired:!1,observer:new u((function(n){var r=n.getEntries();t.events=e(t.events,r),t.fired&&(t.eventsAfterTTI=e(t.eventsAfterTTI,r))}))};try{t.observer.observe({type:"longtask",buffered:!0})}catch(e){}}}(),function(e){if(!f.enabled)return;function t(){removeEventListener("DOMContentLoaded",t),removeEventListener("load",t),e()}"loading"===document.readyState?(addEventListener("DOMContentLoaded",t),addEventListener("load",t)):e()}(_),window.yandex_context_rum_inited=!0);return f},t.isRumInited=function(){return window.yandex_context_rum_inited},t.sendResTiming=C,t.sendDelta=P,t.sendAccumulatedDelta=R,t.finalizeLayoutShiftScore=I,t.finalizeLargestContentfulPaint=B,t.isValidYaBroRender=function(e){void 0===e&&(e=[$,Z,ee,te]);return e.every((function(e){return!f[e]}))},t.sendElementTiming=void 0;var a=window.performance,c=a.timing,s=c.navigationStart,u=window.PerformanceObserver,d="function"==typeof a.getEntriesByType,f={enabled:!!(u&&a&&c&&s&&a.now),vsStart:document.visibilityState,vsChanged:!1,isUserInteract:!1,isUserScroll:!1,loadEventDelayPassed:!1,get isLoadEventDelayPassed(){return function(){if(!1===f.loadEventDelayPassed){window.performance.timing.loadEventStart+3e4<Date.now()&&(f.loadEventDelayPassed=!0)}return f.loadEventDelayPassed}()},get isVisibilityChanged(){return V()},_defTimes:[],_defRes:[],_deltaMarks:{},_accumulatedDeltas:{},_settings:{},_vars:{}};var l,v=[];function m(e,t){if(f.enabled){clearTimeout(l);var n=z("slots"),r=z("experiments"),i=z("reqid"),o=["/reqid="+i,e?"/path="+e:"",n?"/slots="+n.join(";"):"",r?"/experiments="+r.join(";"):"",t?"/vars="+t:"","/*"];f._settings.isDevMode&&console.log("RUM_LOG",{reqid:i,path:e,slots:n,experiments:r,vars:t.split(",").map((function(e){return decodeURIComponent(e)}))}),v.push(o.join("")),v.length<42?l=setTimeout(p,15):p()}}function p(){var e=z("clck"),t=v.join("\r\n");if((v=[],l=null,e)&&!(navigator.sendBeacon&&navigator.sendBeacon(e,t))){var n=new XMLHttpRequest;n.open("POST",e),n.send(t)}}function y(e,t,n){if(f.enabled){void 0===t&&(t=F());var r=K(e);r.push("207="+G(t)),J(r,n)&&H(b,r)}}var h,g,b="690.2096.207",E={connectEnd:2116,connectStart:2114,decodedBodySize:2886,domComplete:2124,domContentLoadedEventEnd:2131,domContentLoadedEventStart:2123,domInteractive:2770,domLoading:2769,domainLookupEnd:2113,domainLookupStart:2112,duration:2136,encodedBodySize:2887,entryType:2888,fetchStart:2111,initiatorType:2889,loadEventEnd:2126,loadEventStart:2125,nextHopProtocol:2890,redirectCount:1385,redirectEnd:2110,redirectStart:2109,requestStart:2117,responseEnd:2120,responseStart:2119,secureConnectionStart:2115,startTime:2322,transferSize:2323,type:76,unloadEventEnd:2128,unloadEventStart:2127,workerStart:2137},S={visible:1,hidden:2,prerender:3},w={bluetooth:2064,cellular:2065,ethernet:2066,none:1229,wifi:2067,wimax:2068,other:861,unknown:836},T={"first-paint":2793,"first-contentful-paint":2794},L=Object.keys(T).length;function _(){setTimeout((function(){for(var e=f._defRes;e.length;){var t=e.shift();C(t[0],t[1])}for(var n=f._defTimes;n.length;){var r=n.shift();y(r[0],r[1],r[2])}Object.keys(f._deltaMarks).forEach((function(e){P(e)})),O(),function e(){if(!d||!z("forcePaintTimeSending")&&V())return;for(var t=a.getEntriesByType("paint"),n=0;n<t.length;n++){var r=t[n],i=T[r.name];i&&!j[r.name]&&(j[r.name]=!0,D++,y("1926."+i,r.startTime))}if(D<L)try{new u((function(t,n){e(),n&&n.disconnect()})).observe({entryTypes:["paint"]})}catch(e){}}(),function(){try{new u((function(e,t){var n=e.getEntries()[0];if(n){var r=n.processingStart-n.startTime;f.isUserInteract=!0,P("first-input",r),t.disconnect()}})).observe({type:"first-input",buffered:!0})}catch(e){}}(),z("sendAutoElementTiming")&&q(),function(e,t){if(!f._tti)return;var n=F(),r=function(e,r,i){y("2795",r,{2796.2797:Y(i,t),689.2322:G(n)}),f._tti.fired=!0};!function e(){var i,o=F(),a=f._tti.events||[],c=a.length,s=t||n;0!==c&&(i=a[c-1],s=Math.max(s,Math.floor(i.startTime+i.duration))),o-s>=3e3?r(0,s,a):o-s>=2e4?r(0,(t||n)+2e4,a):setTimeout(e,1e3)}()}(),"complete"===document.readyState?k():addEventListener("load",k),addEventListener("beforeunload",x)}),0)}function k(){z("disableOnLoadTasks")||(removeEventListener("load",k),function(){var e=new u((function(e){var t=e.getEntries();null==M&&(M=0);for(var n=0;n<t.length;n++){var r=t[n];r.hadRecentInput||(M+=r.value)}}));try{e.observe({type:"layout-shift",buffered:!0})}catch(e){}addEventListener("visibilitychange",(function t(){if("hidden"===document.visibilityState){removeEventListener("visibilitychange",t);try{"function"==typeof e.takeRecords&&e.takeRecords(),e.disconnect()}catch(e){}I()}})),addEventListener("beforeunload",I)}(),function(){if(!u||!z("forcePaintTimeSending")&&V())return;var e=new u((function(e){for(var t=e.getEntries(),n=0;n<t.length;n++){var r=t[n];U=r.renderTime||r.loadTime}A||(y("largest-contentful-paint",U),A=!0)}));try{e.observe({type:"largest-contentful-paint",buffered:!0})}catch(e){}addEventListener("visibilitychange",(function t(){if("hidden"===document.visibilityState){removeEventListener("visibilitychange",t);try{"function"==typeof e.takeRecords&&e.takeRecords(),e.disconnect()}catch(e){}B()}})),addEventListener("beforeunload",B)}(),function(){if(!z("scrollLatencyMetric"))return;if(!W(requestAnimationFrame))return;if(!W(cancelAnimationFrame))return;function e(){var e,t,n,r,i,o,a=0,c=0,s=0,u=(e=0,t=0,n=0,r=0,i=0,o=0,{update:function(a){n+=1,e+=a,t+=Math.pow(a,2),r=e/n,i=Math.max(i,a),o=t/n-Math.pow(e/n,2)},len:function(){return n},avg:function(){return r},max:function(){return i},std:function(){return Math.sqrt(o)}});f.scrollSmoothnessMeasureActive=!0;var d=requestAnimationFrame((function e(t){if(t){if(c&&s!==t){var n=t-s;n>=16&&u.update(n)}c||(c=t),s=t,a=t-c,d=requestAnimationFrame(e)}}));return function(){if(cancelAnimationFrame(d),!(a<300)){var e=[];return["avg","std","max","len"].forEach((function(t){e.push(t+"="+Math.floor(u[t]()))})),e}}}var t=0,n=null,r=function(){if(f.scrollSmoothnessMeasureActive=!1,n){var e=n();n=null,t<2||e&&(e.push("ssnt="+G(F())),H("690.2096.1402.768.2373",h.concat(e)))}};addEventListener("scroll",(function(){n||(t=0,n=e()),t+=1})),addEventListener("visibilitychange",(function e(){"hidden"===document.visibilityState&&(removeEventListener("visibilitychange",e),r())})),addEventListener("beforeunload",r)}())}function O(){var e=c.domContentLoadedEventStart,t=c.domContentLoadedEventEnd;if(0!==e||0!==t){var n=h.concat(["2129="+s,"1036="+(c.domainLookupStart-s),"1037="+(c.domainLookupEnd-c.domainLookupStart),"1038="+(c.connectEnd-c.connectStart),c.secureConnectionStart&&"1383="+(c.connectEnd-c.secureConnectionStart),"1039="+(c.responseStart-c.connectEnd),"1040="+(c.responseEnd-c.responseStart),"1040.906="+(c.responseEnd-c.domainLookupStart),"1310.2084="+(c.domLoading-c.responseStart),"1310.2085="+(c.domInteractive-c.responseStart),"1310.1309="+(t-e),"1310.1007="+(e-c.responseStart),navigator.deviceMemory&&"3140="+navigator.deviceMemory,navigator.hardwareConcurrency&&"3141="+navigator.hardwareConcurrency]);Object.keys(E).forEach((function(e){e in c&&c[e]&&n.push(E[e]+"="+G(c[e],s))})),f.vsStart?(n.push("1484="+(S[f.vsStart]||2771)),f.vsChanged&&n.push("1484.719=1")):n.push("1484="+S["visible"]);var r=a.navigation||{};r&&(r.redirectCount&&n.push("1384.1385="+r.redirectCount),1!==r.type&&2!==r.type||n.push("770.76="+r.type)),N(n),H("690.1033",n)}else setTimeout(O,50)}var M,j={},D=0;function C(e,t){!function(e,t){X.href=e;var n=X.href,r=0,i=100;setTimeout((function e(){var o=a.getEntriesByName(n);if(o.length)return t(o);r++<10?(setTimeout(e,i),i+=i):t(null)}),0)}(t,(function(n){if(n){var r=K(e);z("sendUrlInResTiming")&&r.push("13="+encodeURIComponent(t)),Q(r,n[0]),H("690.2096.2044",r)}}))}function P(e,t,n){var r,i,o=f._deltaMarks[e];if(void 0!==t?r=(i=F())-t:o&&(r=o[0],i=o[1],n=o[2]),void 0!==r&&void 0!==i){var a=K(e);a.push("207.2154="+G(r),"207.1428="+G(i),"2877="+G(i-r)),J(a,n)&&(H("690.2096.2877",a),delete f._deltaMarks[e])}}function R(e,t,n){f._accumulatedDeltas[e]||(f._accumulatedDeltas[e]={count:0,sumDelta:0,deltaVars:{}}),f._accumulatedDeltas[e].count++,f._accumulatedDeltas[e].sumDelta+=t,f._accumulatedDeltas[e].deltaVars=i({},f._accumulatedDeltas[e].deltaVars,{},n)}function x(){Object.keys(f._accumulatedDeltas).forEach((function(e){var t=f._accumulatedDeltas[e];P(e,t.sumDelta,{"-additional":encodeURIComponent(n.lv["json"].stringify(i({},t.deltaVars,{count:t.count})))})}))}function I(){if(null!=M){var e=Math.round(1e6*M)/1e6;H("690.2096.4004",h.concat("s="+e)),M=null}}f.sendAccumulatedDelta=R;var U=null,A=!1;function B(){null!=U&&(y("largest-contentful-paint",U),U=null)}var q=function(){if(z("forcePaintTimeSending")||!V()){var e=z("elementTimingEntryFilter"),t=function(t){return"function"!=typeof e||e(t)};try{var n=new u((function(e){for(var r=e.getEntries(),i=0;i<r.length;i++){var o=r[i];if(f.isUserInteract){n.disconnect();break}t(o)&&y("element-timing."+o.identifier,o.startTime)}}));n.observe({type:"element",buffered:!0,allowTGOFromShadowDOM:!0})}catch(e){}}};t.sendElementTiming=q;function F(){return a.now()}function V(){return f.vsStart&&("visible"!==f.vsStart||f.vsChanged)}function z(e){var t=f._settings[e];return null===t?null:t||""}function G(e,t){return"string"==typeof e?encodeURIComponent(e):Math.round(1e3*(e-(t||0)))/1e3}function H(e,t){m(e,t.filter(Boolean).join(","))}function J(e,t){if(t){var n=e.reduce((function(e,t,n){"string"==typeof t&&(e[t.split("=")[0]]=n);return e}),{});Object.keys(t).forEach((function(r){if("function"!=typeof t[r]){var i=n[r],o=r+"="+t[r];void 0===i?e.push(o):e[i]=o}}))}return!0}function N(e){var t=navigator.connection;t&&e.push("2437="+(w[t.type]||2771),void 0!==t.downlinkMax&&"2439="+t.downlinkMax,t.effectiveType&&"2870="+t.effectiveType,void 0!==t.rtt&&"rtt="+t.rtt,void 0!==t.downlink&&"dwl="+t.downlink)}var X=document.createElement("link");function Y(e,t){return t=t||0,(e=e||[]).filter((function(e){return e.startTime-t>=-50})).map((function(e){var t=e.name?e.name.split("-").map((function(e){return e[0]})).join(""):"u",n=Math.floor(e.startTime);return t+"-"+n+"-"+Math.floor(n+e.duration)})).join(".")}function K(e){return g.concat(["1701="+e])}function Q(e,t){Object.keys(E).forEach((function(n){if(n in t){var r=t[n];(r||0===r)&&e.push(E[n]+"="+G(r))}}))}function W(e){return"function"==typeof e&&e.toString().indexOf("[native code]")>0}var Z="isUserScroll",$="isUserInteract",ee="isVisibilityChanged",te="isLoadEventDelayPassed"}}]);