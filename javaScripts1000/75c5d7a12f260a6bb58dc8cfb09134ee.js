!function(e){function t(t){for(var r,a,s=t[0],u=t[1],c=t[2],f=0,d=[];f<s.length;f++)a=s[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(l&&l(t);d.length;)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={19:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="https://static.klaviyo.com/onsite/js/";var s=window.klaviyoOnsiteJSONP=window.klaviyoOnsiteJSONP||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=u;i.push([0,0]),n()}({"../../node_modules/@sentry/webpack-plugin/src/sentry-webpack.module.js":function(e,t,n){(function(e){("undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{}).SENTRY_RELEASE={id:"648d53afbad5c3b49b5bd45f5e0ceaee2699cda6"}}).call(this,n("../../node_modules/webpack/buildin/global.js"))},"../../node_modules/unfetch/dist/unfetch.mjs":function(e,t,n){"use strict";t.a=function(e,t){return t=t||{},new Promise((function(n,r){var o=new XMLHttpRequest,i=[],a=[],s={},u=function(){return{ok:2==(o.status/100|0),statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(JSON.parse(o.responseText))},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:u,headers:{keys:function(){return i},entries:function(){return a},get:function(e){return s[e.toLowerCase()]},has:function(e){return e.toLowerCase()in s}}}};for(var c in o.open(t.method||"get",e,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(function(e,t,n){i.push(t=t.toLowerCase()),a.push([t,n]),s[t]=s[t]?s[t]+","+n:n})),n(u())},o.onerror=r,o.withCredentials="include"==t.credentials,t.headers)o.setRequestHeader(c,t.headers[c]);o.send(t.body||null)}))}},"../../node_modules/webpack/buildin/global.js":function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},"./src/newModuleLoaders/static.ts":function(e,t,n){"use strict";n.r(t);n("../../node_modules/core-js/modules/es6.regexp.replace.js"),n("../../node_modules/core-js/modules/es6.regexp.match.js"),n("../../node_modules/core-js/modules/es6.function.name.js"),n("../../node_modules/core-js/modules/es6.string.starts-with.js");var r,o={t:!1,i:!1,o:15e3},i=window,a=i.console,s=document,u=i.navigator,c=i.performance,l=function(){return u.deviceMemory},f=function(){return u.hardwareConcurrency},d=function(){return c&&!!c.getEntriesByType&&!!c.now&&!!c.mark},m="4g",p=!1,v=function(){return!!(f()&&f()<=4)||!!(l()&&l()<=4)},y=function(e,t){return!!v()||!!["slow-2g","2g","3g"].includes(e)||!!t},g={u:!1},h=function(e){s.hidden&&(e(),g.u=s.hidden)},b=function(e){return parseFloat(e.toFixed(2))},w=function(e){return"number"!=typeof e?null:b(e/Math.pow(1024,2))},k=[1e3,2500],T=[2500,4e3],S=[100,300],j=[.1,.25],_=[300,600],O={fp:k,fcp:k,lcp:T,lcpFinal:T,fid:S,fidVitals:S,cls:j,clsFinal:j,tbt:_,tbt5S:_,tbt10S:_,tbtFinal:_},P=function(e,t){return O[e]?t<=O[e][0]?"good":t<=O[e][1]?"needsImprovement":"poor":null},E=function(e,t,n){var r;r=function(){g.u&&e.indexOf("Final")<0||!o.analyticsTracker||o.analyticsTracker({metricName:e,data:t,eventProperties:n||{},navigatorInformation:u?{deviceMemory:l()||0,hardwareConcurrency:f()||0,serviceWorkerStatus:"serviceWorker"in u?u.serviceWorker.controller?"controlled":"supported":"unsupported",isLowEndDevice:v(),isLowEndExperience:y(m,p)}:{},vitalsScore:P(e,t)})},"requestIdleCallback"in i?i.requestIdleCallback(r,{timeout:3e3}):r()},x=function(e,t,n){Object.keys(t).forEach((function(e){"number"==typeof t[e]&&(t[e]=b(t[e]))})),E(e,t,n)},L=function(e,t,n){var r=b(e);r<=o.o&&r>=0&&E(t,r,n)},M={},B={value:0},I={value:0},C={value:0},F={value:{beacon:0,css:0,fetch:0,img:0,other:0,script:0,total:0,xmlhttprequest:0}},R={value:0},q=function(e){var t=e.pop();t&&!t.s&&t.value&&(B.value+=t.value)},N={},D=function(e,t){try{var n=new PerformanceObserver((function(e){t(e.getEntries())}));return n.observe({type:e,buffered:!0}),n}catch(e){a.warn("Perfume.js:",e)}return null},G=function(e){N[e]&&N[e].disconnect(),delete N[e]},z=function(e){var t=e.pop();t&&(L(t.processingStart-t.startTime,"fidVitals",{performanceEntry:t}),L(t.duration,"fid",{performanceEntry:t})),G(1),L(C.value,"lcp"),N[3]&&"function"==typeof N[3].takeRecords&&N[3].takeRecords(),L(B.value,"cls"),L(R.value,"tbt"),setTimeout((function(){L(R.value,"tbt5S")}),5e3),setTimeout((function(){L(R.value,"tbt10S"),x("dataConsumption",F.value)}),1e4)},A=function(e){e.forEach((function(e){if(!("self"!==e.name||e.startTime<I.value)){var t=e.duration-50;t>0&&(R.value+=t)}}))},W=function(e){e.forEach((function(e){"first-paint"===e.name?L(e.startTime,"fp"):"first-contentful-paint"===e.name&&(I.value=e.startTime,L(I.value,"fcp"),N[4]=D("longtask",A),G(0))}))},J=function(e){var t=e.pop();t&&(C.value=t.renderTime||t.loadTime)},H=function(e){e.forEach((function(e){e.identifier&&L(e.startTime,e.identifier)}))},U=function(e){e.forEach((function(e){if(o.t&&x("resourceTiming",e),e.decodedBodySize&&e.initiatorType){var t=e.decodedBodySize/1e3;F.value[e.initiatorType]+=t,F.value.total+=t}}))},X=function(){N[2]&&(L(C.value,"lcpFinal"),G(2)),N[3]&&("function"==typeof N[3].takeRecords&&N[3].takeRecords(),L(B.value,"clsFinal"),G(3)),N[4]&&(L(R.value,"tbtFinal"),G(4))},$=function(e){var t="usageDetails"in e?e.usageDetails:{};x("storageEstimate",{quota:w(e.quota),usage:w(e.usage),caches:w(t.caches),indexedDB:w(t.indexedDB),serviceWorker:w(t.serviceWorkerRegistrations)})},K=function(){function e(e){void 0===e&&(e={}),this.l="5.3.0",o.analyticsTracker=e.analyticsTracker,o.t=!!e.resourceTiming,o.i=!!e.elementTiming,o.o=e.maxMeasureTime||o.o,d()&&("PerformanceObserver"in i&&(N[0]=D("paint",W),N[1]=D("first-input",z),N[2]=D("largest-contentful-paint",J),o.t&&D("resource",U),N[3]=D("layout-shift",q),o.i&&D("element",H)),void 0!==s.hidden&&s.addEventListener("visibilitychange",h.bind(this,X)),x("navigationTiming",function(){if(!d())return{};var e=c.getEntriesByType("navigation")[0];if(!e)return{};var t=e.responseStart,n=e.responseEnd;return{fetchTime:n-e.fetchStart,workerTime:e.workerStart>0?n-e.workerStart:0,totalTime:n-e.requestStart,downloadTime:n-t,timeToFirstByte:t-e.requestStart,headerSize:e.transferSize-e.encodedBodySize||0,dnsLookupTime:e.domainLookupEnd-e.domainLookupStart}}()),x("networkInformation",function(){if("connection"in u){var e=u.connection;return"object"!=typeof e?{}:(m=e.effectiveType,p=!!e.saveData,{downlink:e.downlink,effectiveType:e.effectiveType,rtt:e.rtt,saveData:!!e.saveData})}return{}}()),u&&u.storage&&"function"==typeof u.storage.estimate&&u.storage.estimate().then($))}return e.prototype.start=function(e){d()&&!M[e]&&(M[e]=!0,c.mark("mark_"+e+"_start"),g.u=!1)},e.prototype.end=function(e,t){void 0===t&&(t={}),d()&&M[e]&&(c.mark("mark_"+e+"_end"),delete M[e],x(e,b(function(e){c.measure(e,"mark_"+e+"_start","mark_"+e+"_end");var t=c.getEntriesByName(e).pop();return t&&"measure"===t.entryType?t.duration:-1}(e)),t))},e.prototype.endPaint=function(e,t){var n=this;setTimeout((function(){n.end(e,t)}))},e.prototype.clear=function(e){delete M[e],c.clearMarks&&(c.clearMarks("mark_"+e+"_start"),c.clearMarks("mark_"+e+"_end"))},e}(),V=n("../config/lib/client.json"),Z=(n("../../node_modules/core-js/modules/es6.promise.js"),n("../../node_modules/core-js/modules/es6.object.to-string.js"),n("../../node_modules/unfetch/dist/unfetch.mjs")),Y=function(e){var t=e.sample,n=void 0===t?1:t,r=e.metricGroup,o=e.events;return Math.random()<=n?Object(Z.a)("".concat(V.API.telemetricsUrl,"/v1/metric"),{method:"POST",body:JSON.stringify({metricGroup:r,events:o})}):Promise.resolve()};function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ee=(Q(r={},"app",1),Q(r,"onsite",.01),r),te=["main.js","klaviyo.js"],ne=["cls","fid","fcp","fp","lcp","resourceTiming","tbt"],re=["resourceTiming"],oe={cls:"cumulativeLayoutShift",fid:"firstInputDelay",fcp:"firstContentfulPaint",fp:"firstPaint",lcp:"largestContentfulPaint",resourceTiming:"resourceTiming",tbt:"totalBlockingTime"},ie=function(e,t,n){if("app"===e){var r=function(e){return-1!==ne.indexOf(e)}(t),o="resourceTiming"!==t||n.name.startsWith(V.fender.publicPath);return r&&o}var i=function(e){return-1!==re.indexOf(e)}(t),a="resourceTiming"!==t||n.name.startsWith(V.onsiteModules.publicPath);return i&&a},ae=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())};(function(e){if(!V.onsiteModules.profilingEnabled)return null;var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.batchInterval,n=void 0===t?2e3:t,r={},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.beacon,n=void 0!==t&&t;for(var o in r)if(r.hasOwnProperty(o)){var i={metricGroup:o,events:r[o]};n?window.navigator.sendBeacon("".concat(V.API.telemetricsUrl,"/v1/metric"),JSON.stringify(i)):Y(i)}r={}},i=function(e){var t=e.metricGroup,n=e.events,o=e.sample,i=void 0===o?1:o;if(Math.random()>i)return r;var a={};for(var s in r)r.hasOwnProperty(s)&&(a[s]=r[s]);return a[t]=a[t]?a[t].concat(n):n,a},a=setInterval(o,n);return document.addEventListener("visibilitychange",(function(){"visibilityState"in document&&"hidden"===document.visibilityState&&"navigator"in window&&"sendBeacon"in window.navigator?(o({beacon:!0}),clearInterval(a)):"visible"===document.visibilityState&&(a=setInterval(o,n))})),function(e){var t=e.batch,n=void 0===t||t,o=e.sample,a=void 0===o?1:o,s=e.metricGroup,u=e.events;n?r=i({sample:a,metricGroup:s,events:u}):Y({sample:a,metricGroup:s,events:u})}}(),n="",r=ee[e];new K({resourceTiming:!0,analyticsTracker:function(o){var i=o.data,a=o.metricName;if(ie(e,a,i)){var s="rum-metrics-".concat(e),u=oe[a],c=function(e,t){for(var n=[],r=0;r<e.length;r+=1){var o=e[r],i={metric:t?"".concat(o.metric,".").concat(t):o.metric,statsd:o.statsd,sample:o.sample};n.push(i)}return n}(function(e,t,n){return"resourceTiming"===e?[{metric:e,statsd:{type:"timing",value:t.duration},sample:n}]:[{metric:e,statsd:{type:"timing",value:t},sample:n}]}(u,i,r),n);if("resourceTiming"===u){var l=function(e,t,n){for(var r=t,o=function(e){var t=e.name.match(/.*\/([^?]+)(\?)?/);return t?t[1]:e.name}(r),i=0;i<te.length;i+=1){var a=te[i];if(-1!==o.indexOf(a))return{metric:"".concat(e,"ByFile.").concat(o.replace(".","-")),statsd:{type:"timing",value:r.duration},sample:n}}return null}(u,i,r);l&&c.push(l)}t({metricGroup:s,events:c,sample:r})}}})})("onsite");if("9BX3wh"===window.__klKey&&-1===["localhost","www.local-klaviyo.com","www.klaviyo.com","manage.kmail-lists.com","a.klaviyo.com"].indexOf(window.location.hostname)){var se=document.querySelector('div.form-container form input[type="email"]');se&&se.addEventListener("blur",(function(e){if(e.target){var t=e.target.value;if(ae(t)){var n=window.btoa(JSON.stringify({event:"Klaviyo Email Tracking",token:"9BX3wh",properties:{email:t,url:window.location.href},customer_properties:{$email:"PhrankiePhish@gmail.com"}}));Object(Z.a)("".concat(V.API.url,"/api/track?i=1&data=").concat(n))}}}))}},0:function(e,t,n){n("../../node_modules/@sentry/webpack-plugin/src/sentry-webpack.module.js"),e.exports=n("./src/newModuleLoaders/static.ts")}});
