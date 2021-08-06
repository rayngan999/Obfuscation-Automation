/*!
 * bv-analytics.js v3.14.0
 * Bazaarvoice Analytics Client
 * Copyright 2015 Bazaarvoice, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(2),a=r(o),i=n(6),s=n(19),c="_bvaq",u="_bva";if(i[c]=i[c]||[],!i[u]||i[u]&&s(i[u].version,"3.14.0")<0){var l=i[u],d=i.BV?i.BV.privacy:null;i[u]=new a["default"]({name:"default",privacy:d}),l&&i[u]._setStateFromTracker(l)}i[c].length>0&&i[u].push.apply(i[u],i[c]),i[c]=i[u]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(e,t,n){"object"===("undefined"==typeof t?"undefined":i(t))&&(n=t,t=n.display||""),"object"===("undefined"==typeof e?"undefined":i(e))&&(n=e,t=n.display||"",e=n.client||""),n=n||{},this.name=n.name||"","string"==typeof e&&(n.client=e),"string"==typeof t&&(n.display=t),""!==this.name&&b["default"].trackers[this.name]&&w["default"].warn("A tracker with this name already exists: "+this.name),this._settings=c.extend({},this._defaults),this.version="3.14.0",this._shared={loadId:b["default"].loadId,tz:(new Date).getTimezoneOffset(),sourceVersion:this.version,magpieJsVersion:this.version,source:n.source||null,environment:n.environment||null,client:n.client||null,dc:n.display||null,host:p["default"].host},this._batch=null,this._unloaded=!1;var r=this;f["default"].add(T,"unload",function(){r._unload()}),f["default"].add(T,"beforeunload",function(){r._unload()}),this._bvCookiesRequest=x,this._requestQueue=[],this._id=null,this._idQueue=[],b["default"].trackers[this.name]=this,this.privacy=n.privacy?n.privacy:null,this.privacy&&(this._handlePrivacyChange()(),this.privacy.on("change",this._handlePrivacyChange())),"true"===(0,C.getDoNotTrackCookie)()&&(0,C.removeFirstPartyTrackingCookies)(this.getBrandDomain())}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=n(3),c=o(s),u=n(4),l=r(u),d=n(8),f=r(d),h=n(9),p=r(h),g=n(10),m=r(g),v=n(16),y=r(v),_=n(17),b=r(_),k=n(20),S=r(k),E=n(12),w=r(E),C=n(15),T=n(6),A={enableValidation:function(e){var t=e[e.length-1];return!t||"function"==typeof t||!!b["default"].trackers[t]}},I={"public":1,"private":1,internal:1},x=0,N=1,R=2,P=a.prototype;P.create=function(e){var t=e.name,n=b["default"].trackers[t];return n?(e.source&&n.setSource(e.source),e.environment&&n.setEnvironment(e.environment),e.client&&n.setClient(e.client),e.display&&n.setDisplay(e.display),n):new a(e)},P._defaults={customTrackerHostname:null,customAnonTrackerHostname:null,anonymous:!0,eu:!1,brandDomain:null,timing:!0,staging:!1,eventFilter:null},P._set=function(e,t){this._settings[e]=t},P._get=function(e){return this._settings[e]},P._filterClass=function(e){var t=this.getEventClassFilter();return t&&!t.exec(e)},P._getProtocol=function(){return"https:"},P._setStateFromTracker=function(e){if("number"!=typeof e.length){for(var t,n=["Client","Source","Display","Staging","Audience","Anonymous","LoadId","BrandDomain","Environment","EventClassFilter","TrackerHostname","AnonTrackerHostname"],r=0;r<n.length;r++)t=n[r],this["set"+t](e["get"+t]());return this}},P._trackerUrl=function(e,t){var n=this._getProtocol()+"//"+this.getTrackerHostname()+"/"+e;return t&&(n+="?_="+c.buster()),n},P._getPixel=function(e){return new m["default"]({validating:this.isValidating(),brandDomain:this.getBrandDomain(),data:c.extend({},this._shared,e)})},P._send=function(e){e.validating||(this.getAnonymous()?this._sendRequest(e.getUrl({anonymous:!0,hostname:this.getTrackerHostname()})):this._sendTrackedRequest(e))},P._sendValidatingRequest=function(e){var t=this._get("validationCallback");l["default"].get(e.getUrl({anonymous:!1,hostname:"schema.mag.bazaarvoice.com"}),function(n){c.isFunction(t)?t(n,e.data):n.error&&w["default"].error("Invalid Magpie event: "+n)})},P._sendRequest=function(e,t){var n;n=new Image(1,1),c.isFunction(t)&&(n.onload=function(){n.onload=null,t()}),n.src=e},P._sendTrackedRequest=function(e){this._bvCookiesRequest===x&&(this.privacy&&!this.privacy.cookies.consent||this._setBVCookies()),this._bvCookiesRequest===R?this._sendRequest(e.getUrl({anonymous:this.getAnonymous(),hostname:this.getTrackerHostname()})):this._requestQueue.push(e)},P._setBVCookies=function(){var e=this,t=e._trackerUrl("sid.gif",!0);e._sendRequest(t,function(){e.getID(function(t){t.NoCookie&&((0,C.removeFirstPartyTrackingCookies)(e.getBrandDomain()),e._set("anonymous",!0)),e._bvCookiesRequest=R,e._flushRequestQueue()}),e._loadBVID()}),e._bvCookiesRequest=N},P._flushRequestQueue=function(){for(;this._requestQueue.length;)this._send(this._requestQueue.shift())},P._loadBVID=function(){var e=this,t=e._trackerUrl("id.json",!0),n=e.getTrackerHostname();l["default"].get(t,function(t){e._id=t,e._id.hostname=n,e._flushIdQueue()})},P._flushIdQueue=function(){for(var e,t=this._id,n=this._idQueue;n.length;)e=n.shift(),c.isFunction(e)&&e(t)},P._unload=function(){this._unloaded||(this.flushBatch(),this._unloaded=!0)},P._timing=function(){var e,t=T.performance||T.webkitPerformance||T.mozPerformance||T.oPerformance||T.msPerformance||!1;return t!==!1&&t.timing?(e=t.timing,{dns:e.domainLookupEnd-e.domainLookupStart,con:e.connectEnd-e.connectStart,req:e.responseStart-e.connectEnd,res:e.responseEnd-e.responseStart,load:e.loadEventStart-e.responseEnd,tot:e.loadEventEnd-e.navigationStart}):{}},P._isPII=function(e){return e&&"pii"===e.substring(0,3).toLowerCase()},P.setClient=function(e){this._shared.client=e},P.getClient=function(){return this._shared.client},P.setDisplay=function(e){this._shared.dc=e},P.getDisplay=function(){return this._shared.dc},P.setAnonymous=function(e){var t="true"===(0,C.getDoNotTrackCookie)();t?this._set("anonymous",!0):this._set("anonymous",e)},P.getAnonymous=function(){return"true"===(0,C.getDoNotTrackCookie)()||this._get("anonymous")},P.setEU=function(e){this._set("eu",e)},P.getEU=function(){return this._get("eu")},P.setTrackerHostname=function(e){this._set("customTrackerHostname",e),this._id=null,this._bvCookiesRequest=x},P.getTrackerHostname=function(){var e=this._get("customTrackerHostname");if(e)return e;if(this.isValidating())return"schema.mag.bazaarvoice.com";var t="network";return this.getEU()&&(t+="-eu"),this.getStaging()&&(t+="-stg"),this.getAnonymous()&&(t+="-a"),t+=".bazaarvoice.com"},P.setAnonTrackerHostname=function(e){return w["default"].warn('The "setAnonTrackerHostname" function will be deprecated. Please use "setTrackerHostname".'),this.setTrackerHostname(e)},P.getAnonTrackerHostname=function(){return w["default"].warn('The "getAnonTrackerHostname" function will be deprecated. Please use "getTrackerHostname".'),this.getTrackerHostname()},P.setBrandDomain=function(e){c.isString(e)&&e.length>0?(0,C.setBrandCookies)(e):e=null,this._set("brandDomain",e)},P.getBrandDomain=function(){return this._get("brandDomain")},P.enableTiming=function(){this._set("timing",!0)},P.disableTiming=function(){this._set("timing",!1)},P.setSource=function(e){this._shared.source=e},P.getSource=function(){return this._shared.source},P.setEnvironment=function(e){this._shared.environment=e},P.getEnvironment=function(){return this._shared.environment},P.setAudience=function(e){var t=this._shared;I[e]&&("public"===e?delete t.audience:t.audience=e)},P.getAudience=function(){return this._shared.audience||"public"},P.enableValidation=function(e){this._set("validate",!0),c.isFunction(e)&&this._set("validationCallback",e)},P.disableValidation=function(){this._set("validate",!1),this._set("validationCallback",null)},P.isValidating=function(){return!1},P.setStaging=function(e){this._set("staging",!!e),this._id=null,this._bvCookiesRequest=x},P.getStaging=function(){return this._get("staging")},P.getEventClassFilter=function(){return this._get("eventClassFilter")},P.setEventClassFilter=function(e){if(c.isString(e))try{e=new RegExp(e)}catch(t){w["default"].error("Invalid regex passed to event class filter.")}this._set("eventClassFilter",e)},P.getID=function(e){c.isFunction(e)&&(this._id?e(this._id):this._idQueue.push(e))},P.trackEvent=function(e,t){if(!this._filterClass(e))if(t=t||{},t.cl=e,c.transformData(t,"Brand","brand"),this._isPII(e)){var n=this.getAnonymous();this.setAnonymous(!0);var r=this._getPixel(t);this._sendRequest(r.getUrl({anonymous:!0,hostname:this.getTrackerHostname()})),this.setAnonymous(n);var o={bvProduct:t.bvProduct,cl:t.cl,detail1:t.detail1,name:t.name,productId:t.productId};b["default"].dispatcher.fireCallbacks(e,o,this.name)}else{var a=this._getPixel(t);this._send(a),b["default"].dispatcher.fireCallbacks(e,a.getEvent(),this.name)}},P.trackPageView=function(e){e=e||{},c.extend(e,p["default"]),this._get("timing")&&(e.t=this._timing()),this.trackEvent("PageView",e)},P.trackConversion=function(e){var t=y["default"].create(e);t&&(t.containsPII()&&this.trackEvent(y["default"].PII_EVENT_CLASS,t.getPIIData()),this.trackEvent(y["default"].EVENT_CLASS,t.getAnonymizedData()))},P.trackTransaction=function(e){function t(e){if(e=c.extend({},e||{}),"transaction_id"in e&&(e.orderId=e.transaction_id,delete e.transaction_id),"products"in e&&(e.items=e.products,delete e.products),c.isArray(e.items)){var t,n;for(t=0,n=e.items.length;t<n;t++)e.items[t].orderId=e.orderId,"productId"in e.items[t]&&(e.items[t].sku=e.items[t].productId)}var r={type:"Transaction",label:"TransactionThankYou",value:null};for(var o in r)"undefined"==typeof e[o]&&(e[o]=r[o]);return e}this.trackConversion(t(e))},P.addMeta=function(e,t){this._shared.meta||(this._shared.meta={}),this._shared.meta[e]=t},P.removeMeta=function(e){var t=this._shared.meta;e in t&&t.hasOwnProperty(e)&&delete t[e]},P.addBatch=function(e){this._batch&&this._batch.items.length>0&&this.flushBatch(),this._batch={data:e||{},items:[]}},P.addBatchItem=function(e,t){var n;if(!this._filterClass(e)){if(this._isPII(e))return this.trackEvent(e,t);t=t||{},t.cl=e,c.transformData(t,"Brand","brand"),b["default"].dispatcher.fireCallbacks(e,this._getPixel(t).getEvent(),this.name),this._batch||this.addBatch(),this._batch.items.push(t),n=this._getPixel(this.getBatch());var r=n.getUrl({anonymous:this.getAnonymous(),hostname:this.getTrackerHostname()});n.tooLong&&(this._batch.items.pop(),0===this._batch.items.length?this._sendRequest(r):(this.flushBatch(),this._batch.items.push(t)))}},P.flushBatch=function(){this._batch&&this._batch.items&&0!==this._batch.items.length&&(this._send(this._getPixel(this.getBatch())),this._batch.items=[])},P.getBatch=function(){return this._batch?c.extend({batch:this._batch.items},this._batch.data):""},P.push=function(){try{for(var e=0,t=arguments.length;e<t;e++){var n=arguments[e];if(c.isFunction(n))n.call(T);else if(c.isArray(n)){if(0===n.length)continue;var r=n[0];if(!c.isString(r)||"_"===r.charAt(0))continue;if(!c.isFunction(this[r]))continue;var o=n.slice(1),a=o[o.length-1],i=b["default"].trackers[a];if(!i){var s=!A[r]&&this[r].length===o.length||A[r]&&A[r](o);if(!s){w["default"].warn("No tracker was found with the name "+a);var u={name:"Implementation Error",type:"Error",source:"analyticsjs",detail1:"Named tracker was not found",detail2:a,detail3:r};this.trackEvent("Error",u);continue}i=b["default"].trackers["default"]}i[r].apply(i,o)}}}catch(l){w["default"].error(l.stack)}return 1},P.resetLoadId=function(){b["default"].loadId=c.loadId(),this._shared.loadId=b["default"].loadId},P.setLoadId=function(e){b["default"].loadId=e,this._shared.loadId=e},P.getLoadId=function(){return this._shared.loadId},P.configureSCIProvider=function(e,t){var n=S["default"].create(e,t);this.registerListener("*",n,this.name)},P.registerListener=function(e,t,n){return"function"==typeof e&&(n=t,t=e,e="*"),"function"!=typeof t?void w["default"].warn("registerListener arg callback must be a function"):"string"!=typeof n||"undefined"==typeof n?void w["default"].warn("registerListener arg name must be a string."):void b["default"].dispatcher.registerCallback(e,t,n)},P.doNotTrack=function(){var e=this.getBrandDomain();(0,C.setDoNotTrackCookie)(e),(0,C.removeFirstPartyTrackingCookies)(e),this._set("anonymous",!0)},P.startTracking=function(){var e=this.getBrandDomain();(0,C.removeDoNotTrackCookie)(e),this._set("anonymous",!1),this.setBrandDomain(e),this.flushBatch()},P._handlePrivacyChange=function(){var e=this;return function(){e.privacy.cookies.consent?e.startTracking():e.doNotTrack()}},e.exports=a},function(e,t){"use strict";function n(e){var t,n,r=[].slice.call(arguments,1);for(var o in r)if(r.hasOwnProperty(o)){t=r[o];for(n in t)t.hasOwnProperty(n)&&(e[n]=t[n])}return e}function r(){return Math.round(2147483647*Math.random()).toString(36)}function o(e){return"[object Array]"===m.call(e)}function a(e){return s(e)&&"[object Function]"===m.call(e)}function i(e){return"string"==typeof e||u(e)&&"[object String]"===m.call(e)}function s(e){var t="undefined"==typeof e?"undefined":g(e);return!!e&&("object"===t||"function"===t)}function c(e){return"number"==typeof e||u(e)&&"[object Number]"===m.call(e)}function u(e){return!!e&&"object"===("undefined"==typeof e?"undefined":g(e))}function l(){for(var e=16,t=20,n=Math.floor(Math.random()*(t-e+1)+e),r="",o=0;o++<n;)r+=(16*Math.random()|0).toString(16);return r}function d(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,n="x"===e?t:t%4+8;return n.toString(16)})}function f(e,t,n){"undefined"!=typeof e&&null!==e&&t!==n&&e.hasOwnProperty(t)&&(e[n]=e[t],delete e[t])}function h(){if(navigator.cookieEnabled)return function(){for(var e=0,t=document.domain,n=t.split("."),r="_gd"+(new Date).getTime();e<n.length-1&&document.cookie.indexOf(r+"="+r)===-1;)t=n.slice(-1-++e).join("."),document.cookie=r+"="+r+";domain="+t+";";return document.cookie=r+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain="+t+";",t}()}function p(){return"https:"===window.location.protocol}var g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m=Object.prototype.toString;e.exports={extend:n,buster:r,isArray:o,isFunction:a,isString:i,isObject:s,isNumber:c,isObjectLike:u,loadId:l,uuid:d,transformData:f,getDomainWithoutSubdomain:h,isProtocolSecure:p}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(e,t,n){var r,o=(e||"").indexOf("?")===-1?"?":"&";return s.isFunction(t)&&(r="_bvajsonp"+ ++d,f[r]=function(e){try{delete f[r]}catch(n){f[r]=null}t(e)},u["default"].loadScript(e+o+(n||"callback")+"="+r)),r}var i=n(3),s=o(i),c=n(5),u=r(c),l=n(6),d=0,f=l;e.exports={get:a}},function(e,t,n){function r(){return c.getElementsByTagName("script")[0]}function o(e){return!e||"loaded"===e||"complete"===e||"uninitialized"===e}function a(e,t,n){if(!e||"string"!=typeof e)throw new Error("`url` must be a string");if(t.namespaceName&&"string"!=typeof t.namespaceName)throw new Error("`options.namespaceName` must be a string");if(t.forceLoad&&"boolean"!=typeof t.forceLoad)throw new Error("`options.forceLoad` must be a boolean");if("number"!=typeof t.timeout)throw new Error("`options.timeout` must be a number");if(n&&"function"!=typeof n)throw new Error("`callback` must be a function")}var i=n(6),s=n(7),c=i.document,u=1e4,l={};e.exports={_clearLoadedUrls:function(e){if(e){var t=s.namespace(e);t.loadedUrls={}}else l={}},loadScript:function(e,t,n){function i(r){g=!0,clearTimeout(m),p.onload=p.onreadystatechange=p.onerror=null,p.parentNode.removeChild(p),r||(f[e]=!0,t.namespaceName?d.loadedUrls=f:l=f),"function"==typeof n&&n(r)}var d,f=l;if("function"==typeof t&&(n=t,t=null),t=t||{},t.timeout=t.timeout||u,a(e,t,n),t.namespaceName&&(d=s.namespace(t.namespaceName),f=d.loadedUrls||{}),!t.forceLoad&&f[e])return void("function"==typeof n&&n());var h,p=c.createElement("script"),g=!1;if(t.attributes)for(h in t.attributes)p.setAttribute(h,t.attributes[h]);p.onreadystatechange=p.onload=function(){!g&&o(p.readyState)&&i()},p.onerror=function(){g||i(new Error("Error: could not load "+e))};var m=setTimeout(function(){g||i(new Error("Error: script timeout "+e))},t.timeout);setTimeout(function(){p.src=e;var t=r();t.parentNode.insertBefore(p,t)},0)},loadStyleSheet:function(e,t,n){function d(r){m=!0,clearTimeout(v),g.onload=g.onreadystatechange=g.onerror=null,r||(h[e]=!0,t.namespaceName?f.loadedUrls=h:l=h),"function"==typeof n&&n(r)}var f,h=l;if("function"==typeof t&&(n=t,t=null),t=t||{},t.timeout=t.timeout||u,a(e,t,n),"injectionNode"in t&&!(t.injectionNode instanceof i.Element))throw new Error("`options.injectionNode` must be a DOM node");if(t.namespaceName&&(f=s.namespace(t.namespaceName),h=f.loadedUrls||{}),!t.forceLoad&&h[e])return void("function"==typeof n&&n());var p,g=c.createElement("link"),m=!1;if(t.attributes)for(p in t.attributes)g.setAttribute(p,t.attributes[p]);g.onreadystatechange=g.onload=function(){!m&&o(g.readyState)&&d()},g.onerror=function(){m||d(new Error("Error: could not load "+e))};var v=setTimeout(g.onerror,t.timeout);setTimeout(function(){g.media="only x",g.rel="stylesheet",g.type="text/css",g.href=e,setTimeout(function(){g.media="all"},0);var n=t.injectionNode||r().parentNode;try{n.appendChild(g)}catch(o){d(new Error("Error: could not append LINK element"))}},0)}}},function(e,t){(function(t){"use strict";var n=function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof t)return t;throw new Error("unable to locate global object")};e.exports=n()}).call(t,function(){return this}())},function(e,t,n){function r(e){this.name=e}var o=n(6);r.prototype.registerProperty=function(e,t){if(this.hasOwnProperty(e))throw new Error("Cannot register "+e+" because a property with that name already exists on window."+this.name);return this[e]=t,this},e.exports={namespace:function(e){if(void 0===o[e])Object.defineProperty(o,e,{value:new r(e)});else{if("object"!=typeof o[e])throw new Error("Namespace "+e+" cannot be created. A non-object variable is already assigned to window."+e);if(!(o[e]instanceof r)){r.call(o[e],e);for(var t in r.prototype)o[e][t]=r.prototype[t]}}return o[e]}}},function(e,t){"use strict";function n(e,t,n,r){e.addEventListener?e.addEventListener(t,n,!!r):e.attachEvent&&e.attachEvent("on"+t,n)}function r(e,t,n,r){e.removeEventListener?e.removeEventListener(t,n,!!r):e.detachEvent&&e.detachEvent("on"+t,n)}e.exports={add:n,remove:r}},function(e,t,n){"use strict";var r,o,a=n(6),i=a.navigator,s=a.screen,c=document,u=c.getElementsByTagName("link"),l=u.length;for(o=0;o<l;o++)"canonical"===u[o].getAttribute("rel")&&(r=u[o].href);e.exports={host:a.location.host,href:a.location.href,ref:c.referrer,canurl:r,res:s?s.width+"x"+s.height:"-",lang:(i&&(i.language||i.browserLanguage)||"-").toLowerCase(),charset:c.characterSet||c.charset||"-",geo:navigator.geolocation?1:0,cookies:navigator.cookieEnabled?1:0}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(e){var t=e.validating,n=e.brandDomain,r=e.data;if(!r)throw new Error("data is required for tracking url");this.brandDomain=n,this.data=this._sanitizeUrlData(r),this.tooLong=!1,this.validating=t}var i=function(){function e(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){o=!0,a=c}finally{try{!r&&s["return"]&&s["return"]()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=n(3),c=o(s),u=n(11),l=r(u),d=n(12),f=r(d),h=n(15),p=n(13),g="r_",m=2036,v=p?m:8192,y={PageView:{ref:1}},_={cl:0,loadId:1,type:2},b="https",k=/(\/|.\w*(=|%(25)*3D))([0-9A-F][0-9A-F](%(25)*2C)?)*(7573657269643d|7573657249643d|7573657249443d|5573657269643d|5573657249643d|5573657249443d|5553455249443d)([0-9A-F][0-9A-F](%(25)*2C)?)*|[&|?][\w]+=[^&?]+[@|%40][\w-.]+/gi;a.prototype.getEvent=function(){return this._buildEvent(this.data)},a.prototype.getUrl=function(e){var t=e.anonymous,n=e.hostname;if("undefined"==typeof n)throw new Error("hostname required to build pixel url.");if("undefined"==typeof t)throw new Error("anonymous required to build pixel url.");return this._buildUrl({ev:this._buildEvent(this.data),ignoreTooLong:!1,anonymous:t,hostname:n})},a.prototype._buildEvent=function(e){var t=(0,h.getBrandCookies)(this.brandDomain),n=c.extend({},t,e);return n._=c.buster(),n},a.prototype._buildUrl=function(e){var t,n,r,o=e.anonymous,a=e.hostname,i=e.ev,s=e.ignoreTooLong;if(t=this.encode(i),!t)return"";var c=(o?"a":"st")+(this.validating?".json":".gif"),u=b+"://"+a+"/"+c;n=u+"?"+t.required;var l=document.createElement("iframe");return l.src=n,n=l.src,r=v-n.length,r<0?(n=s?"":this._urlTooLong({url:n,encoded:t,anonymous:o,hostname:a}),this.tooLong=!0):t.optional.length>0&&(n+=this.addOptional(t.optional,r)),n},a.prototype._urlTooLong=function(e){var t=e.url,n=e.encoded,r=e.anonymous,o=e.hostname,a={cl:"Magpie",type:"LongUrl",length:(t||"").length,maxLength:v,targetCl:this.data.cl?this.data.cl.substr(0,200):null,longestField:n.longestField.substr(0,200)};return this._buildUrl({ev:this._buildEvent(a),ignoreTooLong:!0,anonymous:r,hostname:o})},a.prototype.addOptional=function(e,t){var n,r,o,a,i="";for(e=e||[],a=e.length,n=0;t>0&&n<a;n++)r=e[n]||"",r.length+1>t&&(r=r.substr(0,t-1),r.indexOf("=")===-1)||(o="&"+r,i+=o,t-=o.length);return i},a.prototype.quoteParam=function(e,t){var n=null;if(void 0!==e&&void 0!==t)try{(c.isArray(t)||c.isObject(t))&&(e=g+e,t=l["default"].encode(t)),n=l["default"].quote(e)+"="+l["default"].quote(""+t)}catch(r){f["default"].error(r.stack)}return n},a.prototype.encode=function(e){var t,n,r=y[e.cl]||{},o=0,a=[],i=[],s={optional:[],longestField:null};if(!c.isObject(e))return null;for(t in e)if(e.hasOwnProperty(t)&&null!==e[t]&&e[t]===e[t]&&(n=this.quoteParam(t,e[t]),null!==n))if(r&&t in r)s.optional.push(n);else{if(t in _){var u=_[t];a.length>u?a.splice(u,0,n):a.push(n)}else i.push(n);n.length>o&&(s.longestField=t,o=n.length)}return s.required=a.concat(i).join("&"),s},a.prototype._sanitizeUrlData=function(e){var t=this;if(e instanceof Object==!1)return e;var n=["ref","href","page"];return Object.keys(e).forEach(function(r){n.indexOf(r.toLowerCase())!==-1&&(e[r]=t._removeURLParameters(e[r],k)),"batch"===r&&e[r].forEach(function(e){Object.keys(e).forEach(function(r){n.indexOf(r.toLowerCase())!==-1&&(e[r]=t._removeURLParameters(e[r],k))})})}),e},a.prototype._removeURLParameters=function(e,t){if(!t)return e;var n=e.split("?"),r=i(n,2),o=r[0],a=r[1];if(!a)return e;var s=a.replace(t,"");return"&"===s.charAt(0)&&(s=s.substring(1)),s?o+"?"+s:o},e.exports=a},function(e,t){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r={};r.uri_ok={"~":!0,"!":!0,"*":!0,"(":!0,")":!0,"-":!0,_:!0,".":!0,",":!0,":":!0,"@":!0,$:!0,"'":!0,"/":!0},function(){for(var e=[],t=0;t<16;t++)for(var n=0;n<16;n++)if(t+n!==0){var o=String.fromCharCode(16*t+n);/\w|[\-_.\/~]/.test(o)||e.push("\\u00"+t.toString(16)+n.toString(16))}r.not_idchar=e.join("")}(),r.not_idchar=" \t\r\n\"<>\\[\\]{}'!=:(),*@$;&",r.not_idstart="-0123456789",function(){var e="[^"+r.not_idstart+r.not_idchar+"][^"+r.not_idchar+"]*";r.id_ok=new RegExp("^"+e+"$"),r.next_id=new RegExp(e,"g")}(),r.quote=function(e){var t=r.uri_ok;return/^[A-Za-z0-9_\-]*$/.test(e)?e:(e=e.replace(/([^A-Za-z0-9_\-])/g,function(e,n){var r=t[n];return r?n:encodeURIComponent(n)}),e.replace(/%20/g,"+"))},function(){var e={"'":!0,"!":!0},t={array:function(e){var r,o,a,i,s=["!("],c=e.length;for(a=0;a<c;a+=1)i=e[a],o=t["undefined"==typeof i?"undefined":n(i)],o&&(i=o(i),"string"==typeof i&&(r&&(s[s.length]=","),s[s.length]=i,r=!0));return s[s.length]=")",s.join("")},"boolean":function(e){return e?"!t":"!f"},"null":function(e){return"!n"},number:function(e){return isFinite(e)?String(e).replace(/\+/,""):"!n"},object:function(e){if(e){if(e instanceof Array)return t.array(e);if("object"===n(e.__prototype__)&&"undefined"!=typeof e.__prototype__.encode_rison)return e.encode_rison();var r,o,a,i,s,c=["("],u=[];for(a in e)u[u.length]=a;for(u.sort(),s=0;s<u.length;s++)a=u[s],i=e[a],o=t["undefined"==typeof i?"undefined":n(i)],o&&(i=o(i),"string"==typeof i&&(r&&(c[c.length]=","),c.push(t.string(a),":",i),r=!0));return c[c.length]=")",c.join("")}return"!n"},string:function(t){return""===t?"''":r.id_ok.test(t)?t:(t=t.replace(/(['!])/g,function(t,n){return e[n]?"!"+n:n}),"'"+t+"'")},undefined:function(e){return"!n"}};r.encode=function(e){return t["undefined"==typeof e?"undefined":n(e)](e)}}(),e.exports=r},function(e,t,n){function r(e,t){if(s!==h.OFF&&o.console){if(t=[].slice.call(t),"function"==typeof t[0]&&(t=t[0]()),a)return void o.console.log(t);try{(o.console[e]||o.console.log).apply(o.console,t)}catch(n){}}}var o=n(6),a=n(13),i=n(14),s=4,c={},u=i.read("_bvui_debug");if(u)for(var l,d=u.split(","),f=0;f<d.length;f++)l=d[f].split(":"),c[l[0]]=l[1];c.logLevel&&(s=c.logLevel);var h={DEBUG:-1,LOG:0,INFO:1,WARN:2,ERROR:3,OFF:4,getLogLevel:function(){return s},setLogLevel:function(e,t){s=!c.logLevel||t?e||h.LOG:c.logLevel,r("log",["Log level set to",s])},debug:function(){s<=h.DEBUG&&r("log",arguments)},log:function(){s<=h.LOG&&r("log",arguments)},info:function(){s<=h.INFO&&r("info",arguments)},warn:function(){s<=h.WARN&&r("warn",arguments)},error:function(){s<=h.ERROR&&r("error",arguments)},count:function(){s<h.INFO&&r("count",arguments)},time:function(){s<h.WARN&&r("time",arguments)},timeEnd:function(){s<h.WARN&&r("timeEnd",arguments)},group:function(e){var t=Array.prototype.slice.call(arguments,1);s<=e&&(r("group",t),r("time",t))},groupEnd:function(e){var t=Array.prototype.slice.call(arguments,1);s<=e&&(r("groupEnd",t),r("timeEnd",t))},assert:function(e,t){if(s!==h.OFF){if("function"==typeof e)return void h.assert.apply(null,e());if(!e)throw new Error("Assertion failed: "+t)}}};e.exports=h},function(e,t,n){var r=n(6).document;e.exports=function(){var e=function(e,t,n){for(var r=t.getElementsByTagName("i");t.innerHTML="<!--[if gt IE "+ ++e+"]><i></i><![endif]-->",r[0];);return e>4?e:n}(3,r.createElement("div"));return e}()},function(e,t,n){var r=n(6);e.exports={create:function(e,t,n,o,a){var i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3);var s=n?";expires="+i.toGMTString():"",c=encodeURIComponent(e)+"="+encodeURIComponent(t)+s+";path=/"+(o?";domain="+o:"")+(a?";secure":"");r.document.cookie=c},read:function(e){var t,n=encodeURIComponent(e)+"=",o=r.document.cookie.split(";");for(t=0;t<o.length;t++){for(var a=o[t];" "===a.charAt(0);)a=a.substring(1,a.length);if(0===a.indexOf(n))return decodeURIComponent(a.substring(n.length,a.length))}return null},remove:function(e){this.create(e,"",-1)}}},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(){var e=void 0;return g&&(e=f.read(m)),null===e||"false"===e}function a(e){var t=o()&&e&&g;return{BVBRANDID:t?f.read("BVBRANDID"):null,BVBRANDSID:t?f.read("BVBRANDSID"):null,BVCRL8ID:t?f.read("crl8.fpcuid"):null}}function i(e){if(o()&&e&&g){var t=1/48,n=365,r=a(e);r.BVBRANDID||f.create("BVBRANDID",p.uuid(),n,e,p.isProtocolSecure()),r.BVBRANDSID||f.create("BVBRANDSID",p.uuid(),t,e,p.isProtocolSecure())}}function s(){var e=void 0;return g&&(e=f.read(m)),e}function c(e){g&&(e=e||"."+p.getDomainWithoutSubdomain(),f.create(m,!0,v,e))}function u(e){g&&(e=e||"."+p.getDomainWithoutSubdomain(),f.create(m,null,-1,e))}function l(e){g&&(e=e||"."+p.getDomainWithoutSubdomain(),f.create("BVBRANDID",null,-1,e),f.create("BVBRANDSID",null,-1,e))}Object.defineProperty(t,"__esModule",{value:!0}),t.firstPartyTrackingCookiesAllowed=o,t.getBrandCookies=a,t.setBrandCookies=i,t.getDoNotTrackCookie=s,t.setDoNotTrackCookie=c,t.removeDoNotTrackCookie=u,t.removeFirstPartyTrackingCookies=l;var d=n(14),f=r(d),h=n(3),p=r(h),g=navigator.cookieEnabled,m="NoCookie",v=7300},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e,t){var n=e&&e[t];return null!==n&&void 0!==n}function a(e,t){var n=t.length;if(!c.isObject(e)&&n<0)return!1;for(;n--;)if(!o(e,t[n]))return!1;return!0}function i(e){return a(e,f)}var s=n(3),c=r(s),u="Conversion",l="PII"+u,d={orderId:1,affiliation:1,total:1,tax:1,shipping:1,city:1,state:1,country:1,currency:1,items:1,locale:1,discount:1,type:1,label:1,value:1,proxy:1,partnerSource:1,deploymentZone:1,TestCase:1,TestSession:1},f=["type"],h="public_",p=function(e){var t;this._data=e,this._anonymized={},this._hasPII=!1;for(t in e)e.hasOwnProperty(t)&&(d[t]||0===t.indexOf(h)?this._anonymized[t]=e[t]:this._hasPII=!0);this._hasPII===!0&&(this._anonymized.hadPII=!0)},g=p.prototype;g.containsPII=function(){return this._hasPII},g.getAnonymizedData=function(){return this._anonymized},g.getPIIData=function(){return this._data},e.exports={EVENT_CLASS:u,PII_EVENT_CLASS:l,create:function(e){return i(e)?new p(e):null}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(7),a=r(o),i=n(3),s=n(18),c=r(s),u=n(19),l=a["default"].namespace("BVA");try{l.registerProperty("trackers",{})}catch(d){}try{l.registerProperty("loadId",(0,i.loadId)())}catch(d){}try{l.registerProperty("dispatcher",new c["default"])}catch(d){var f=l.dispatcher.version,h=c["default"].prototype.version;1===u(h,f)&&(l.dispatcher=c["default"].copy(l.dispatcher))}e.exports=l},function(e,t,n){"use strict";function r(){this.callbacks={"default":{"*":[]}}}r.prototype.registerCallback=function(e,t,n){this.callbacks[n]=this.callbacks[n]||{"*":[]},this.callbacks[n][e]=this.callbacks[n][e]||[],this.callbacks[n][e].push(t)},r.prototype.fireCallbacks=function(e,t,n){if("undefined"!=typeof this.callbacks[n]){var r=this.callbacks[n][e];r&&r.forEach(function(e){e(t)}),"*"!==e&&this.callbacks[n]["*"].forEach(function(e){e(t)})}},r.prototype.version="3.14.0",r.copy=function(e){var t=new r;return t.callbacks=e.callbacks,t},e.exports=r},function(e,t){e.exports=function(e,t){for(var n=e.split("."),r=t.split("."),o=0;o<3;o++){var a=Number(n[o]),i=Number(r[o]);if(a>i)return 1;if(i>a)return-1;if(!isNaN(a)&&isNaN(i))return 1;if(isNaN(a)&&!isNaN(i))return-1}return 0}},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_logger=__webpack_require__(12),_logger2=_interopRequireDefault(_logger),global=__webpack_require__(6),vendorMap={ADOBE:"AdobeSiteCatalyst",IBM:"IBMDigitalAnalytics",GOOGLE:"GoogleAnalytics"},eventGroup="Bazaarvoice",delimiter=" : ",trackingMap={Ask:{label:["Button"]},Click:{label:["SecondaryContentLink","ViewProfileButton","Stars","ReadReviewsButton","SummaryStars","WriteReviewLabel","ReviewCount","SummaryQuestionStats","YesHelpfulVote","NoHelpfulVote","ReportLink","UserSubmittedMedia","YesVote","NoVote","Report","UserSubmittedPhoto","Translation"]
},Close:{label:["Submission","SecondaryContent","UserSubmittedMedia","Search","UserSubmittedPhoto"]},Filter:{label:["1Star","2Stars","3Stars","4Stars","5Stars","Clear1Star","Clear2Stars","Clear3Stars","Clear4Stars","Clear5Stars","ClearAll"]},Hover:{label:["Histogram","Profile"]},Paginate:{label:["First","Last","Next","Prev"]},Search:{label:["UserGeneratedContent","SearchBarRatingSummary","TopicsAndReviews"]},Share:{label:["Button"]},Sort:{label:["featured","mostRecent","oldest","positive","negative","mostHelpful","mostUnhelpful","relevancy","recentQuestionsFirst","recentQuestionsLast","recentAnswersFirst","recentAnswersLast","mostAnsweredQuestionsFirst","mostAnsweredQuestionsLast","featuredQuestionsFirst","helpfulnessAnswersFirst","helpfulnessAnswersLast"]},Submission:{label:["submissionFormSubmit"]},Write:{label:["Button"]}},getSiteCatalystTracker=function(e){var t=e||"s",n=global[t];return n&&"object"===("undefined"==typeof n?"undefined":_typeof(n))?n:(n=global.s_Obj,n&&"object"===("undefined"==typeof n?"undefined":_typeof(n))?n:void _logger2["default"].warn(t+" bad trackerRef"))},getGoogleAnalyticsTracker=function getGoogleAnalyticsTracker(vendorTracker,method){var trackerRef=vendorTracker,trackerMethod=method,tracker,trackerType="object";if(trackerRef){if(!method)if("pageTracker"===trackerRef)trackerMethod="SYNCHRONOUS";else if("_gaq"===trackerRef)trackerMethod="ASYNCHRONOUS";else{if("ga"!==trackerRef)return void _logger2["default"].warn("getGoogleAnalyticsTracker: could not determine trackerMethod");trackerMethod="UNIVERSAL"}}else if(trackerMethod&&"SYNCHRONOUS"!==trackerMethod||"object"!==("undefined"==typeof pageTracker?"undefined":_typeof(pageTracker)))if(trackerMethod&&"ASYNCHRONOUS"!==trackerMethod||"object"!==_typeof(global._gaq)){if(trackerMethod&&"UNIVERSAL"!==trackerMethod||"function"!=typeof global.ga)return void _logger2["default"].warn("getGoogleAnalyticsTracker: could not determine trackerRef");trackerRef="ga",trackerMethod="UNIVERSAL"}else trackerRef="_gaq",trackerMethod="ASYNCHRONOUS";else trackerRef="pageTracker",trackerMethod="SYNCHRONOUS";if("ga"!==trackerRef&&"UNIVERSAL"!==trackerMethod||(trackerType="function"),tracker=global[trackerRef],!tracker||("undefined"==typeof tracker?"undefined":_typeof(tracker))!==trackerType){try{tracker=eval(trackerRef)}catch(e){return}if(!tracker||("undefined"==typeof tracker?"undefined":_typeof(tracker))!==trackerType)return void _logger2["default"].warn(trackerRef+" bad trackerRef")}return"SYNCHRONOUS"===trackerMethod?{trackEvent:function(e,t,n,r,o){tracker._trackEvent(e,t,n,r,o)}}:"ASYNCHRONOUS"===trackerMethod?{trackEvent:function(e,t,n,r,o){tracker.push(["_trackEvent",e,t,n,r,o])}}:"UNIVERSAL"===trackerMethod?{trackEvent:function(e,t,n,r,o){tracker("send","event",e,t,n,r,{nonInteraction:o})}}:void _logger2["default"].warn("getGoogleAnalyticsTracker: trackEvent could not be defined")},callWap=function(e,t){for(var n={},r=[],o=2;o<arguments.length;o++)r.push((arguments[o]||"").toString());var a=r.join("~#~");if(!n[a]){n[a]=!0;try{t.apply(e,[].slice.call(arguments,2))}catch(i){_logger2["default"].error("Error calling WAP: "+i.stack)}}},isEventTracked=function(e,t,n){if("Feature"===e&&t in trackingMap)for(var r=0;r<trackingMap[t].label.length;r++)if(trackingMap[t].label[r]===n||"ANY"===trackingMap[t].label[r])return!0;return!1},adobeSiteCatalystCallback=function(e){var t=e||{},n=getSiteCatalystTracker(t.tracker||null);return n?function(e){if(isEventTracked(e.cl,e.name,e.detail1)){var r=global.event||global,o=t.event,a=t.evar,i=e.detail1.charAt(0).toUpperCase()+e.detail1.slice(1),s=eventGroup+delimiter+e.bvProduct+delimiter+e.name+i;n.linkTrackEvents="event"+o,n.events="event"+o,n["eVar"+a]=s,n.linkTrackVars="events,evar"+a,n.products&&(n.linkTrackVars+=",products",n.products=n.products.replace(/([^,;]*;[^,;]*);[^,]*/g,"$1")),n.linkTrackVars+=",eVar"+a,callWap(n,n.tl,r,"o",s+delimiter+e.productId)}}:function(){}},ibmDigitalAnalyticsCallback=function(e){if("object"===_typeof(global.cG7)&&isEventTracked(e.cl,e.name,e.detail1)){var t=global.cG7.cM0[global.cm_ClientID],n=eventGroup+delimiter+e.bvProduct,r=e.detail1.charAt(0).toUpperCase()+e.detail1.slice(1);callWap(global,global.cmCreateElementTag,e.name+r,n),global.cG7.cM0[global.cm_ClientID]=t}},googleAnalyticsCallback=function(e){var t=e||{},n=getGoogleAnalyticsTracker(t.tracker||null,t.method);return n?function(e){var t=eventGroup+delimiter+e.bvProduct+delimiter,r=global.location.pathname;if("PageView"===e.cl&&e.bvProduct)callWap(n,n.trackEvent,"Bazaarvoice Content Loaded",t+"Product"+e.cl,r,void 0,!0);else if(isEventTracked(e.cl,e.name,e.detail1)){var o=e.detail1.charAt(0).toUpperCase()+e.detail1.slice(1);callWap(n,n.trackEvent,eventGroup+" "+e.bvProduct,t+e.name+o,r,void 0,!1)}}:function(){}};module.exports={create:function(e,t){switch(e){case vendorMap.ADOBE:return adobeSiteCatalystCallback(t);case vendorMap.IBM:return ibmDigitalAnalyticsCallback;case vendorMap.GOOGLE:return googleAnalyticsCallback(t)}throw _logger2["default"].error("Error creating vendor callback. The named vendor integration was not found."),new Error("The named vendor integration was not found.")},_getSiteCatalystTracker:getSiteCatalystTracker,_getGoogleAnalyticsTracker:getGoogleAnalyticsTracker,_isEventTracked:isEventTracked,_callWap:callWap}}]);