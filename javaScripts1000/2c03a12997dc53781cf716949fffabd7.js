/* Acknowledgements: https://logrocket.com/open-source/ */
this.LogRocket=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=16)}([function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=n=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(null==e)return{};var n={};return Object.keys(e).forEach((function(r){n[r]=t(e[r])})),n},e.exports=t.default},function(e,t,n){var r=n(19);e.exports=function(e,t){if(null==e)return{};var n,o,i=r(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.setActive=function(e){c=e},t.default=function(e){var t=e.addRequest,n=e.addResponse,r=e.isIgnored,l=e.logger,f=e.shouldAugmentNPS,d=void 0===f||f,p=e.shouldParseXHRBlob,v=void 0!==p&&p,h=XMLHttpRequest,g=new WeakMap,y=!1,_="xhr-";return window._lrXMLHttpRequest=XMLHttpRequest,XMLHttpRequest=function(e,f){var p=new h(e,f);if(!c)return p;g.set(p,{xhrId:++s,headers:{}});var b=p.open;var w=p.send;d&&(p.open=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];try{var r=t[1];if(window.URL&&"function"==typeof window.URL&&0===r.search(a.WOOTRIC_RESPONSES_REGEX)){var o=new window.URL(l.recordingURL);o.searchParams.set("nps","wootric");var i=new window.URL(r),u=i.searchParams.get("response[text]"),c=u?"".concat(u,"\n\n"):"";i.searchParams.set("response[text]","".concat(c,"<").concat(o.href,"|View LogRocket session>")),t[1]=i.href}}catch(e){}return b.apply(this,t)},p.send=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];try{var r=g.get(p);if(window.URL&&"function"==typeof window.URL&&r&&r.url&&0===r.url.search(a.DELIGHTED_RESPONSES_REGEX)&&t.length&&-1!==t[0].indexOf(a.DELIGHTED_FEEDBACK_PREFIX)){var o=new window.URL(l.recordingURL);o.searchParams.set("nps","delighted");var i=encodeURIComponent(o.href),c=t[0].split("&").map((function(e){if((0,u.default)(e,a.DELIGHTED_FEEDBACK_PREFIX)){var t=e===a.DELIGHTED_FEEDBACK_PREFIX;return"".concat(e).concat(t?"":"\n\n","<").concat(i,"|View LogRocket session>")}return e})).join("&");t[0]=c}}catch(e){}return w.apply(this,t)}),(0,i.default)(p,"open",(function(e,t){if(!y){var n=g.get(p);n.method=e,n.url=t}})),(0,i.default)(p,"send",(function(e){if(!y){var n=g.get(p);if(n){var r={url:n.url,method:n.method&&n.method.toUpperCase(),headers:(0,o.default)(n.headers||{},(function(e){return e.join(", ")})),body:e};t("".concat(_).concat(n.xhrId),r)}}})),(0,i.default)(p,"setRequestHeader",(function(e,t){if(!y){var n=g.get(p);n&&(n.headers=n.headers||{},n.headers[e]=n.headers[e]||[],n.headers[e].push(t))}}));var m={readystatechange:function(){if(!y&&4===p.readyState){var e=g.get(p);if(!e)return;if(r("".concat(_).concat(e.xhrId)))return;var t,o=p.getAllResponseHeaders().split(/[\r\n]+/).reduce((function(e,t){var n=e,r=t.split(": ");if(r.length>0){var o=r.shift(),i=r.join(": ");e[o]?n[o]+=", ".concat(i):n[o]=i}return n}),{});try{switch(p.responseType){case"json":t=l._shouldCloneResponse?JSON.parse(JSON.stringify(p.response)):p.response;break;case"arraybuffer":case"blob":t=p.response;break;case"document":t=p.responseXML;break;case"text":case"":t=p.responseText;break;default:t=""}}catch(e){t="LogRocket: Error accessing response."}var i={url:e.url,status:p.status,headers:o,body:t,method:(e.method||"").toUpperCase()};if(v&&i.body instanceof Blob){var u=new FileReader;u.readAsText(i.body),u.onload=function(){try{i.body=JSON.parse(u.result)}catch(e){}n("".concat(_).concat(e.xhrId),i)}}else n("".concat(_).concat(e.xhrId),i)}}};return Object.keys(m).forEach((function(e){p.addEventListener(e,m[e])})),p},XMLHttpRequest.prototype=h.prototype,["UNSENT","OPENED","HEADERS_RECEIVED","LOADING","DONE"].forEach((function(e){XMLHttpRequest[e]=h[e]})),function(){y=!0,XMLHttpRequest=h}};var o=r(n(3)),i=r(n(9)),u=r(n(30)),a=n(31),c=!0;var s=0},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var r=e[t];return e[t]=function(){for(var e,t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];r&&(e=r.apply(this,o));return n.apply(this,o),e},function(){e[t]=r}},e.exports=t.default},function(e,t,n){"use strict";var r=n(11),o=n(0);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"registerExceptions",{enumerable:!0,get:function(){return i.default}}),t.Capture=void 0;var i=o(n(33)),u=r(n(14));t.Capture=u},function(e,t,n){var r=n(2).default;function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=o(t);if(n&&n.has(e))return n.get(e);var i={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var c=u?Object.getOwnPropertyDescriptor(e,a):null;c&&(c.get||c.set)?Object.defineProperty(i,a,c):i[a]=e[a]}return i.default=e,n&&n.set(e,i),i},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={collectWindowErrors:!0,debug:!1},o="undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:{},i=[].slice,u="?",a=/^(?:Uncaught (?:exception: )?)?((?:Eval|Internal|Range|Reference|Syntax|Type|URI)Error): ?(.*)$/;function c(){return"undefined"==typeof document||void 0===document.location?"":document.location.href}r.report=function(){var e,t,n=[],s=null,l=null,f=null;function d(e,t){var o=null;if(!t||r.collectWindowErrors){for(var u in n)if(n.hasOwnProperty(u))try{n[u].apply(null,[e].concat(i.call(arguments,2)))}catch(e){o=e}if(o)throw o}}function p(t,n,o,i,s){if(f)r.computeStackTrace.augmentStackTraceWithInitialElement(f,n,o,t),v();else if(s)d(r.computeStackTrace(s),!0);else{var l,p={url:n,line:o,column:i},h=void 0,g=t;if("[object String]"==={}.toString.call(t))(l=t.match(a))&&(h=l[1],g=l[2]);p.func=u,d({name:h,message:g,url:c(),stack:[p]},!0)}return!!e&&e.apply(this,arguments)}function v(){var e=f,t=s;s=null,f=null,l=null,d.apply(null,[e,!1].concat(t))}function h(e,t){var n=i.call(arguments,1);if(f){if(l===e)return;v()}var o=r.computeStackTrace(e);if(f=o,l=e,s=n,setTimeout((function(){l===e&&v()}),o.incomplete?2e3:0),!1!==t)throw e}return h.subscribe=function(r){!function(){if(t)return;e=o.onerror,o.onerror=p,t=!0}(),n.push(r)},h.unsubscribe=function(e){for(var t=n.length-1;t>=0;--t)n[t]===e&&n.splice(t,1)},h.uninstall=function(){!function(){if(!t)return;o.onerror=e,t=!1,e=void 0}(),n=[]},h}(),r.computeStackTrace=function(){function e(e){if(void 0!==e.stack&&e.stack){for(var t,n,r=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|<anonymous>).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,o=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|resource|\[native).*?)(?::(\d+))?(?::(\d+))?\s*$/i,i=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,a=e.stack.split("\n"),s=[],l=(/^(.*) is undefined$/.exec(e.message),0),f=a.length;l<f;++l){if(t=r.exec(a[l])){var d=t[2]&&-1!==t[2].indexOf("native");n={url:d?null:t[2],func:t[1]||u,args:d?[t[2]]:[],line:t[3]?+t[3]:null,column:t[4]?+t[4]:null}}else if(t=i.exec(a[l]))n={url:t[2],func:t[1]||u,args:[],line:+t[3],column:t[4]?+t[4]:null};else{if(!(t=o.exec(a[l])))continue;n={url:t[3],func:t[1]||u,args:t[2]?t[2].split(","):[],line:t[4]?+t[4]:null,column:t[5]?+t[5]:null}}!n.func&&n.line&&(n.func=u),s.push(n)}return s.length?(s[0].column||void 0===e.columnNumber||(s[0].column=e.columnNumber+1),{name:e.name,message:e.message,url:c(),stack:s}):null}}function t(e,t,n,r){var o={url:t,line:n};if(o.url&&o.line){if(e.incomplete=!1,o.func||(o.func=u),e.stack.length>0&&e.stack[0].url===o.url){if(e.stack[0].line===o.line)return!1;if(!e.stack[0].line&&e.stack[0].func===o.func)return e.stack[0].line=o.line,!1}return e.stack.unshift(o),e.partial=!0,!0}return e.incomplete=!0,!1}function n(e,i){for(var a,s,l=/function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,f=[],d={},p=!1,v=n.caller;v&&!p;v=v.caller)if(v!==o&&v!==r.report){if(s={url:null,func:u,line:null,column:null},v.name?s.func=v.name:(a=l.exec(v.toString()))&&(s.func=a[1]),void 0===s.func)try{s.func=a.input.substring(0,a.input.indexOf("{"))}catch(e){}d[""+v]?p=!0:d[""+v]=!0,f.push(s)}i&&f.splice(0,i);var h={name:e.name,message:e.message,url:c(),stack:f};return t(h,e.sourceURL||e.fileName,e.line||e.lineNumber,e.message||e.description),h}function o(t,o){var i=null;o=null==o?0:+o;try{if(i=e(t))return i}catch(e){if(r.debug)throw e}try{if(i=n(t,o+1))return i}catch(e){if(r.debug)throw e}return{name:t.name,message:t.message,url:c()}}return o.augmentStackTraceWithInitialElement=t,o.computeStackTraceFromStackProp=e,o}();var s=r;t.default=s,e.exports=t.default}).call(this,n(12))},function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.captureMessage=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o={exceptionType:r?"CONSOLE":"MESSAGE",message:t,browserHref:window.location?window.location.href:""};c(o,n),e.addEvent("lr.core.Exception",(function(){return o}))},t.captureException=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=r||i.default.computeStackTrace(t),a={exceptionType:"WINDOW",errorType:o.name,message:o.message,browserHref:window.location?window.location.href:""};c(a,n);var s={_stackTrace:(0,u.default)(o)};e.addEvent("lr.core.Exception",(function(){return a}),s)};var o=r(n(2)),i=r(n(13)),u=r(n(35));function a(e){return/boolean|number|string/.test((0,o.default)(e))}function c(e,t){if(t){for(var n=0,r=["level","logger"];n<r.length;n++){var o=r[n],i=t[o];a(i)&&(e[o]=i.toString())}for(var u=0,c=["tags","extra"];u<c.length;u++){for(var s=c[u],l=t[s]||{},f={},d=0,p=Object.keys(l);d<p.length;d++){var v=p[d],h=l[v];a(h)&&(f[v.toString()]=h.toString())}e[s]=f}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=Date.now.bind(Date),o=r(),i="undefined"!=typeof performance&&performance.now?performance.now.bind(performance):function(){return r()-o};t.default=i,e.exports=t.default},function(e,t,n){e.exports=n(17)},function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(0,r(n(18)).default)({sdkVersion:"script"});t.default=o,e.exports=t.default},function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.enterpriseServer,r=t.sdkVersion,a=void 0===r?"2.0.0":r,c=(0,o.default)(t,["enterpriseServer","sdkVersion"]),s="https://cdn.logrocket.io";if("script"===a)try{var l=document.currentScript,f=l.src.match(/^(https?:\/\/([^\\]+))\/.+$/),d=f&&f[2];d&&u[d]&&(s=f&&f[1],e=u[d])}catch(e){}else s="https://cdn.lr-in.com",e="https://r.lr-in.com";var p=c.sdkServer||n,v=c.ingestServer||n||e,h=(0,i.default)((function(){var e=document.createElement("script");v&&(void 0===window.__SDKCONFIG__&&(window.__SDKCONFIG__={}),window.__SDKCONFIG__.serverURL="".concat(v,"/i"),window.__SDKCONFIG__.statsURL="".concat(v,"/s")),p?e.src="".concat(p,"/logger.min.js"):window.__SDKCONFIG__&&window.__SDKCONFIG__.loggerURL?e.src=window.__SDKCONFIG__.loggerURL:window._lrAsyncScript?e.src=window._lrAsyncScript:e.src="".concat(s,"/logger-1.min.js"),e.async=!0,document.head.appendChild(e),e.onload=function(){"function"==typeof window._LRLogger?h.onLogger(new window._LRLogger({sdkVersion:a})):(console.warn("LogRocket: script execution has been blocked by a product or service."),h.uninstall())},e.onerror=function(){console.warn("LogRocket: script could not load. Check that you have a valid network connection."),h.uninstall()}}));return h};var o=r(n(4)),i=r(n(20)),u={"cdn.logrocket.io":"https://r.logrocket.io","cdn.lr-ingest.io":"https://r.lr-ingest.io","cdn.lr-in.com":"https://r.lr-in.com","cdn-staging.logrocket.io":"https://staging-i.logrocket.io","cdn-staging.lr-ingest.io":"https://staging-i.lr-ingest.io","cdn-staging.lr-in.com":"https://staging-i.lr-in.com"};e.exports=t.default},function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};if("undefined"!=typeof navigator&&"ReactNative"===navigator.product)throw new Error(i);if("undefined"!=typeof window){if(window._disableLogRocket)return u();if(window.MutationObserver&&window.WeakMap){window._lrMutationObserver=window.MutationObserver;var t=new o.default;return e(t),t}}return u()};var o=r(n(21)),i="LogRocket does not yet support React Native.",u=function(){return{init:function(){},uninstall:function(){},log:function(){},info:function(){},warn:function(){},error:function(){},debug:function(){},addEvent:function(){},identify:function(){},start:function(){},get threadID(){return null},get recordingID(){return null},get recordingURL(){return null},reduxEnhancer:function(){return function(e){return function(){return e.apply(void 0,arguments)}}},reduxMiddleware:function(){return function(){return function(e){return function(t){return e(t)}}}},track:function(){},getSessionURL:function(){},getVersion:function(){},startNewSession:function(){},onLogger:function(){},setClock:function(){},captureMessage:function(){},captureException:function(){}}};e.exports=t.default},function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.MAX_QUEUE_SIZE=void 0;var o=r(n(5)),i=r(n(6)),u=r(n(1)),a=r(n(4)),c=r(n(22)),s=n(10),l=r(n(36)),f=n(38);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,u.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.MAX_QUEUE_SIZE=1e3;var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ingestServer,n=(0,a.default)(e,["ingestServer"]);return t?p({serverURL:"".concat(t,"/i"),statsURL:"".concat(t,"/s")},n):n},h=function(){function e(){var t=this;(0,o.default)(this,e),this._buffer=[],["log","info","warn","error","debug"].forEach((function(e){t[e]=function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];t.addEvent("lr.core.LogEvent",(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return"error"===e&&n.shouldAggregateConsoleErrors&&s.Capture.captureMessage(t,r[0],{},!0),{logLevel:e.toUpperCase(),args:r}}),{shouldCaptureStackTrace:!0})}})),this._isInitialized=!1,this._installed=[]}return(0,i.default)(e,[{key:"addEvent",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=Date.now();this._run((function(o){o.addEvent(e,t,p(p({},n),{},{timeOverride:r}))}))}},{key:"onLogger",value:function(e){for(this._logger=e;this._buffer.length>0;){this._buffer.shift()(this._logger)}}},{key:"_run",value:function(e){if(!this._isDisabled)if(this._logger)e(this._logger);else{if(this._buffer.length>=1e3)return this._isDisabled=!0,console.warn("LogRocket: script did not load. Check that you have a valid network connection."),void this.uninstall();this._buffer.push(e.bind(this))}}},{key:"init",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this._isInitialized){var n=t.shouldAugmentNPS,r=void 0===n||n,o=t.shouldParseXHRBlob,i=void 0!==o&&o;this._installed.push((0,s.registerExceptions)(this)),this._installed.push((0,c.default)(this,{shouldAugmentNPS:!!r,shouldParseXHRBlob:!!i})),this._installed.push((0,l.default)(this)),this._isInitialized=!0,this._run((function(n){n.init(e,v(t))}))}}},{key:"start",value:function(){this._run((function(e){e.start()}))}},{key:"uninstall",value:function(){this._installed.forEach((function(e){return e()})),this._buffer=[],this._run((function(e){e.uninstall()}))}},{key:"identify",value:function(e,t){this._run((function(n){n.identify(e,t)}))}},{key:"startNewSession",value:function(){this._run((function(e){e.startNewSession()}))}},{key:"track",value:function(e,t){this._run((function(n){n.track(e,t)}))}},{key:"getSessionURL",value:function(e){if("function"!=typeof e)throw new Error("LogRocket: must pass callback to getSessionURL()");this._run((function(t){t.getSessionURL?t.getSessionURL(e):e(t.recordingURL)}))}},{key:"getVersion",value:function(e){this._run((function(t){e(t.version)}))}},{key:"captureMessage",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};s.Capture.captureMessage(this,e,t)}},{key:"captureException",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};s.Capture.captureException(this,e,t)}},{key:"version",get:function(){return this._logger&&this._logger.version}},{key:"sessionURL",get:function(){return this._logger&&this._logger.recordingURL}},{key:"recordingURL",get:function(){return this._logger&&this._logger.recordingURL}},{key:"recordingID",get:function(){return this._logger&&this._logger.recordingID}},{key:"threadID",get:function(){return this._logger&&this._logger.threadID}},{key:"tabID",get:function(){return this._logger&&this._logger.tabID}},{key:"reduxEnhancer",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,f.createEnhancer)(this,e)}},{key:"reduxMiddleware",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,f.createMiddleware)(this,e)}},{key:"isDisabled",get:function(){return!!(this._isDisabled||this._logger&&this._logger._isDisabled)}}]),e}();t.default=h},function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{isReactNative:!1},n=t.isReactNative,r=t.shouldAugmentNPS,o=t.shouldParseXHRBlob,l={},d=function(e){var t=e;if("object"===(0,i.default)(e)&&null!=e){var n=Object.getPrototypeOf(e);n!==Object.prototype&&null!==n||(t=JSON.stringify(e))}if(t&&t.length&&t.length>4096e3&&"string"==typeof t){var r=t.substring(0,1e3);return"".concat(r," ... LogRocket truncating to first 1000 characters.\n      Keep data under 4MB to prevent truncation. https://docs.logrocket.com/reference#network")}return e},p=function(t,n){var r=n.method;e.addEvent("lr.network.RequestEvent",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.isEnabled,i=void 0===o||o,u=e.requestSanitizer,a=void 0===u?function(e){return e}:u;if(!i)return null;var c=null;try{c=a(f(f({},n),{},{reqId:t}))}catch(e){console.error(e)}if(c){var p=c.url;if("undefined"!=typeof document&&"function"==typeof document.createElement){var v=document.createElement("a");v.href=c.url,p=v.href}return{reqId:t,url:p,headers:(0,s.default)(c.headers,(function(e){return"".concat(e)})),body:d(c.body),method:r,referrer:c.referrer||void 0,mode:c.mode||void 0,credentials:c.credentials||void 0}}return l[t]=!0,null}))},v=function(t,n){var r=n.method,o=n.status;e.addEvent("lr.network.ResponseEvent",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.isEnabled,u=void 0===i||i,a=e.responseSanitizer,c=void 0===a?function(e){return e}:a;if(!u)return null;if(l[t])return delete l[t],null;var p=null;try{p=c(f(f({},n),{},{reqId:t}))}catch(e){console.error(e)}return p?{reqId:t,status:p.status,headers:(0,s.default)(p.headers,(function(e){return"".concat(e)})),body:d(p.body),method:r}:{reqId:t,status:o,headers:{},body:null,method:r}}))},h=function(t){return e.isDisabled||!0===l[t]},g=(0,u.default)({addRequest:p,addResponse:v,isIgnored:h}),y=(0,c.default)({addRequest:p,addResponse:v,isIgnored:h,logger:e,shouldAugmentNPS:r,shouldParseXHRBlob:o}),_=n?function(){}:(0,a.default)(e);return function(){_(),g(),y()}};var o=r(n(1)),i=r(n(2)),u=r(n(23)),a=r(n(32)),c=r(n(8)),s=r(n(3));function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,o.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}e.exports=t.default},function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.addRequest,n=e.addResponse,r=e.isIgnored,o="fetch-",i={};return u.default.register({request:function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),u=1;u<n;u++)r[u-1]=arguments[u];var a;if("undefined"!=typeof Request&&r[0]instanceof Request){var s;try{s=r[0].clone().text()}catch(e){s=Promise.resolve("LogRocket fetch error: ".concat(e.message))}a=s.then((function(e){return c(c({},l(r[0])),{},{body:e})}),(function(e){return c(c({},l(r[0])),{},{body:"LogRocket fetch error: ".concat(e.message)})}))}else a=Promise.resolve(c(c({},l(r[1])),{},{url:"".concat(r[0]),body:(r[1]||{}).body}));return a.then((function(n){return i[e]=n.method,t("".concat(o).concat(e),n),r}))},requestError:function(e,t){return Promise.reject(t)},response:function(e,t){var u;if(r("".concat(o).concat(e)))return t;try{u=t.clone().text()}catch(e){u=Promise.resolve("LogRocket fetch error: ".concat(e.message))}return u.then((function(r){var u={url:t.url,status:t.status,headers:s(t.headers),body:r,method:i[e]};return delete i[e],n("".concat(o).concat(e),u),t}))},responseError:function(e,t){var r={url:void 0,status:0,headers:{},body:"".concat(t)};return n("".concat(o).concat(e),r),Promise.reject(t)}})};var o=r(n(1)),i=r(n(3)),u=r(n(24));function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,o.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=function(e){return(0,i.default)(function(e){if(null==e||"function"!=typeof e.forEach)return e;var t={};return e.forEach((function(e,n){t[n]?t[n]="".concat(t[n],",").concat(e):t[n]="".concat(e)})),t}(e),(function(e){return"".concat(e)}))};function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{url:e.url,headers:s(e.headers),method:e.method&&e.method.toUpperCase(),referrer:e.referrer||void 0,mode:e.mode||void 0,credentials:e.credentials||void 0}}e.exports=t.default},function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(25)),i=n(8),u=[];function a(e,t){for(var n=u.reduce((function(e,t){return[t].concat(e)}),[]),r=arguments.length,a=new Array(r>2?r-2:0),c=2;c<r;c++)a[c-2]=arguments[c];var s=Promise.resolve(a);return n.forEach((function(e){var n=e.request,r=e.requestError;(n||r)&&(s=s.then((function(e){return n.apply(void 0,[t].concat((0,o.default)(e)))}),(function(e){return r.apply(void 0,[t].concat((0,o.default)(e)))})))})),s=s.then((function(t){var n,r;(0,i.setActive)(!1);try{n=e.apply(void 0,(0,o.default)(t))}catch(e){r=e}if((0,i.setActive)(!0),r)throw r;return n})),n.forEach((function(e){var n=e.response,r=e.responseError;(n||r)&&(s=s.then((function(e){return n(t,e)}),(function(e){return r&&r(t,e)})))})),s}var c=!1,s={register:function(e){return c||(c=!0,function(e){if(e.fetch&&e.Promise){var t,n,r=e.fetch.polyfill;e.fetch=(t=e.fetch,n=0,function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return a.apply(void 0,[t,n++].concat(r))}),r&&(e.fetch.polyfill=r)}}(window)),u.push(e),function(){var t=u.indexOf(e);t>=0&&u.splice(t,1)}},clear:function(){u=[]}};t.default=s,e.exports=t.default},function(e,t,n){var r=n(26),o=n(27),i=n(28),u=n(29);e.exports=function(e){return r(e)||o(e)||i(e)||u()},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){var r=n(7);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){var r=n(7);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return e&&t&&e.substring(n,n+t.length)===t},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DELIGHTED_FEEDBACK_PREFIX=t.DELIGHTED_RESPONSES_REGEX=t.WOOTRIC_RESPONSES_REGEX=void 0;t.WOOTRIC_RESPONSES_REGEX=/^https:\/\/production.wootric.com\/responses/;t.DELIGHTED_RESPONSES_REGEX=/^https:\/\/web.delighted.com\/e\/[a-zA-Z-]*\/c/;t.DELIGHTED_FEEDBACK_PREFIX="comment="},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=void 0;function n(){var n={online:window.navigator.onLine,effectiveType:"UNKOWN"};window.navigator.onLine?window.navigator.connection&&window.navigator.connection.effectiveType&&(n.effectiveType=r[window.navigator.connection.effectiveType]||"UNKNOWN"):n.effectiveType="NONE",t&&n.online===t.online&&n.effectiveType===t.effectiveType||(t=n,e.addEvent("lr.network.NetworkStatusEvent",(function(){return n})))}setTimeout(n),window.navigator.connection&&"function"==typeof window.navigator.connection.addEventListener&&window.navigator.connection.addEventListener("change",n);return window.addEventListener("online",n),window.addEventListener("offline",n),function(){window.removeEventListener("offline",n),window.removeEventListener("online",n),window.navigator.connection&&"function"==typeof window.navigator.connection.removeEventListener&&window.navigator.connection.removeEventListener("change",n)}};var r={"slow-2g":"SLOW2G","2g":"TWOG","3g":"THREEG","4g":"FOURG"};e.exports=t.default},function(e,t,n){"use strict";var r=n(11),o=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=new i.default({captureException:function(t){u.captureException(e,null,null,t)}}),n=function(t){e.addEvent("lr.core.Exception",(function(){return{exceptionType:"UNHANDLED_REJECTION",message:t.reason||"Unhandled Promise rejection"}}))};return window.addEventListener("unhandledrejection",n),function(){window.removeEventListener("unhandledrejection",n),t.uninstall()}};var i=o(n(34)),u=r(n(14));e.exports=t.default},function(e,t,n){"use strict";(function(r){var o=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(5)),u=o(n(6)),a=o(n(13)),c=Object.prototype;function s(e){return void 0===e}function l(e){return"function"==typeof e}function f(e,t){return c.hasOwnProperty.call(e,t)}function d(e,t,n,r){var o=e[t];e[t]=n(o),r&&r.push([e,t,o])}var p="undefined"!=typeof window?window:void 0!==r?r:"undefined"!=typeof self?self:{},v=(p.document,function(){function e(t){var n=t.captureException;(0,i.default)(this,e),this._errorHandler=this._errorHandler.bind(this),this._ignoreOnError=0,this._wrappedBuiltIns=[],this.captureException=n,a.default.report.subscribe(this._errorHandler),this._instrumentTryCatch()}return(0,u.default)(e,[{key:"uninstall",value:function(){var e;for(a.default.report.unsubscribe(this._errorHandler);this._wrappedBuiltIns.length;){var t=(e=this._wrappedBuiltIns.shift())[0],n=e[1],r=e[2];t[n]=r}}},{key:"_errorHandler",value:function(e){this._ignoreOnError||this.captureException(e)}},{key:"_ignoreNextOnError",value:function(){var e=this;this._ignoreOnError+=1,setTimeout((function(){e._ignoreOnError-=1}))}},{key:"context",value:function(e,t,n){return l(e)&&(n=t||[],t=e,e=void 0),this.wrap(e,t).apply(this,n)}},{key:"wrap",value:function(e,t,n){var r=this;if(s(t)&&!l(e))return e;if(l(e)&&(t=e,e=void 0),!l(t))return t;try{if(t.__lr__)return t;if(t.__lr_wrapper__)return t.__lr_wrapper__;if(!Object.isExtensible(t))return t}catch(e){return t}function o(){var o=[],i=arguments.length,u=!e||e&&!1!==e.deep;for(n&&l(n)&&n.apply(this,arguments);i--;)o[i]=u?r.wrap(e,arguments[i]):arguments[i];try{return t.apply(this,o)}catch(t){throw r._ignoreNextOnError(),r.captureException(a.default.computeStackTrace(t),e),t}}for(var i in t)f(t,i)&&(o[i]=t[i]);return o.prototype=t.prototype,t.__lr_wrapper__=o,o.__lr__=!0,o.__inner__=t,o}},{key:"_instrumentTryCatch",value:function(){var e=this,t=e._wrappedBuiltIns;function n(t){return function(n,r){for(var o=new Array(arguments.length),i=0;i<o.length;++i)o[i]=arguments[i];var u=o[0];return l(u)&&(o[0]=e.wrap(u)),t.apply?t.apply(this,o):t(o[0],o[1])}}function r(n){var r=p[n]&&p[n].prototype;r&&r.hasOwnProperty&&r.hasOwnProperty("addEventListener")&&(d(r,"addEventListener",(function(t){return function(n,r,o,i){try{r&&r.handleEvent&&(r.handleEvent=e.wrap(r.handleEvent))}catch(e){}return t.call(this,n,e.wrap(r,void 0,undefined),o,i)}}),t),d(r,"removeEventListener",(function(e){return function(t,n,r,o){try{n=n&&(n.__lr_wrapper__?n.__lr_wrapper__:n)}catch(e){}return e.call(this,t,n,r,o)}}),t))}d(p,"setTimeout",n,t),d(p,"setInterval",n,t),p.requestAnimationFrame&&d(p,"requestAnimationFrame",(function(t){return function(n){return t(e.wrap(n))}}),t);for(var o=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],i=0;i<o.length;i++)r(o[i]);var u=p.jQuery||p.$;u&&u.fn&&u.fn.ready&&d(u.fn,"ready",(function(t){return function(n){return t.call(this,e.wrap(n))}}),t)}}]),e}());t.default=v,e.exports=t.default}).call(this,n(12))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(e){return null===e?void 0:e}return e.stack?e.stack.map((function(e){return{lineNumber:t(e.line),columnNumber:t(e.column),fileName:t(e.url),functionName:t(e.func)}})):void 0},e.exports=t.default},function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(37)).default;t.default=o,e.exports=t.default},function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=[];return["log","warn","info","error","debug"].forEach((function(n){t.push((0,i.default)(console,n,(function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];e.addEvent("lr.core.LogEvent",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.isEnabled;return"object"===(0,o.default)(i)&&!1===i[n]||!1===i?null:("error"===n&&t.shouldAggregateConsoleErrors&&u.Capture.captureMessage(e,r[0],{},!0),{logLevel:n.toUpperCase(),args:r})}))})))})),function(){t.forEach((function(e){return e()}))}};var o=r(n(2)),i=r(n(9)),u=n(10);e.exports=t.default},function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createEnhancer",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"createMiddleware",{enumerable:!0,get:function(){return i.default}});var o=r(n(39)),i=r(n(40))},function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.stateSanitizer,r=void 0===n?function(e){return e}:n,o=t.actionSanitizer,u=void 0===o?function(e){return e}:o;return function(t){return function(n,o,s){var l=t(n,o,s),f=l.dispatch,d=c++;e.addEvent("lr.redux.InitialState",(function(){var e;try{e=r(l.getState())}catch(e){console.error(e.toString())}return{state:e,storeId:d}}));return a(a({},l),{},{dispatch:function(t){var n,o,a=(0,i.default)();try{o=f(t)}catch(e){n=e}finally{var c=(0,i.default)()-a;e.addEvent("lr.redux.ReduxAction",(function(){var e=null,n=null;try{e=r(l.getState()),n=u(t)}catch(e){console.error(e.toString())}return e&&n?{storeId:d,action:n,duration:c,stateDelta:e}:null}))}if(n)throw n;return o}})}}};var o=r(n(1)),i=r(n(15));function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,o.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=0;e.exports=t.default},function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.stateSanitizer,r=void 0===n?function(e){return e}:n,u=t.actionSanitizer,a=void 0===u?function(e){return e}:u;return function(t){var n=i++;return e.addEvent("lr.redux.InitialState",(function(){var e;try{e=r(t.getState())}catch(e){console.error(e.toString())}return{state:e,storeId:n}})),function(i){return function(u){var c,s,l=(0,o.default)();try{s=i(u)}catch(e){c=e}finally{var f=(0,o.default)()-l;e.addEvent("lr.redux.ReduxAction",(function(){var e=null,o=null;try{e=r(t.getState()),o=a(u)}catch(e){console.error(e.toString())}return e&&o?{storeId:n,action:o,duration:f,stateDelta:e}:null}))}if(c)throw c;return s}}}};var o=r(n(15)),i=0;e.exports=t.default}]);