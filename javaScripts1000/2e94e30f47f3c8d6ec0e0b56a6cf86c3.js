/*! For license information please see defaultVendors-node_modules_firebase_analytics_dist_index_esm_js.c8ab12fea804a9b82bb2.js.LICENSE.txt */
(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([["defaultVendors-node_modules_firebase_analytics_dist_index_esm_js"],{"./node_modules/firebase/analytics/dist/index.esm.js":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/@firebase/app/dist/index.cjs.js"),i=n("./node_modules/@firebase/component/dist/index.cjs.js"),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function a(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{u(r.next(e))}catch(e){o(e)}}function s(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))}function s(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function u(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function c(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}var l,f=n("./node_modules/@firebase/util/dist/index.cjs.js"),d=n("./node_modules/idb/build/idb.js"),p="w:0.4.7",h=((l={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',l["not-registered"]="Firebase Installation is not registered.",l["installation-not-found"]="Firebase Installation not found.",l["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',l["app-offline"]="Could not process request. Application offline.",l["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",l),v=new f.ErrorFactory("installations","Installations",h);function g(e){return e instanceof f.FirebaseError&&e.code.includes("request-failed")}function y(e){return"https://firebaseinstallations.googleapis.com/v1/projects/"+e.projectId+"/installations"}function b(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function m(e,t){return a(this,void 0,void 0,(function(){var n,r;return s(this,(function(i){switch(i.label){case 0:return[4,t.json()];case 1:return n=i.sent(),r=n.error,[2,v.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})]}}))}))}function w(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function _(e,t){var n=t.refreshToken,r=w(e);return r.append("Authorization",function(e){return"FIS_v2 "+e}(n)),r}function E(e){return a(this,void 0,void 0,(function(){var t;return s(this,(function(n){switch(n.label){case 0:return[4,e()];case 1:return(t=n.sent()).status>=500&&t.status<600?[2,e()]:[2,t]}}))}))}function I(e,t){var n=t.fid;return a(this,void 0,void 0,(function(){var t,r,i,o,a,u;return s(this,(function(s){switch(s.label){case 0:return t=y(e),r=w(e),i={fid:n,authVersion:"FIS_v2",appId:e.appId,sdkVersion:p},o={method:"POST",headers:r,body:JSON.stringify(i)},[4,E((function(){return fetch(t,o)}))];case 1:return(a=s.sent()).ok?[4,a.json()]:[3,3];case 2:return[2,{fid:(u=s.sent()).fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:b(u.authToken)}];case 3:return[4,m("Create Installation",a)];case 4:throw s.sent()}}))}))}function S(e){return new Promise((function(t){setTimeout(t,e)}))}var C=/^[cdef][\w-]{21}$/;function T(){try{var e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;var t=function(e){return(t=e,btoa(String.fromCharCode.apply(String,function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(c(arguments[t]));return e}(t))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}(e);return C.test(t)?t:""}catch(e){return""}}function O(e){return e.appName+"!"+e.appId}var N=new Map;function A(e,t){var n=O(e);P(n,t),function(e,t){var n=j();n&&n.postMessage({key:e,fid:t}),D()}(n,t)}function P(e,t){var n,r,i=N.get(e);if(i)try{for(var o=u(i),a=o.next();!a.done;a=o.next())(0,a.value)(t)}catch(e){n={error:e}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}var x=null;function j(){return!x&&"BroadcastChannel"in self&&((x=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){P(e.data.key,e.data.fid)}),x}function D(){0===N.size&&x&&(x.close(),x=null)}var k,L="firebase-installations-store",q=null;function F(){return q||(q=(0,d.openDb)("firebase-installations-database",1,(function(e){switch(e.oldVersion){case 0:e.createObjectStore(L)}}))),q}function V(e,t){return a(this,void 0,void 0,(function(){var n,r,i,o,a;return s(this,(function(s){switch(s.label){case 0:return n=O(e),[4,F()];case 1:return r=s.sent(),i=r.transaction(L,"readwrite"),[4,(o=i.objectStore(L)).get(n)];case 2:return a=s.sent(),[4,o.put(t,n)];case 3:return s.sent(),[4,i.complete];case 4:return s.sent(),a&&a.fid===t.fid||A(e,t.fid),[2,t]}}))}))}function R(e){return a(this,void 0,void 0,(function(){var t,n,r;return s(this,(function(i){switch(i.label){case 0:return t=O(e),[4,F()];case 1:return n=i.sent(),[4,(r=n.transaction(L,"readwrite")).objectStore(L).delete(t)];case 2:return i.sent(),[4,r.complete];case 3:return i.sent(),[2]}}))}))}function B(e,t){return a(this,void 0,void 0,(function(){var n,r,i,o,a,u;return s(this,(function(s){switch(s.label){case 0:return n=O(e),[4,F()];case 1:return r=s.sent(),i=r.transaction(L,"readwrite"),[4,(o=i.objectStore(L)).get(n)];case 2:return a=s.sent(),void 0!==(u=t(a))?[3,4]:[4,o.delete(n)];case 3:return s.sent(),[3,6];case 4:return[4,o.put(u,n)];case 5:s.sent(),s.label=6;case 6:return[4,i.complete];case 7:return s.sent(),!u||a&&a.fid===u.fid||A(e,u.fid),[2,u]}}))}))}function G(e){return a(this,void 0,void 0,(function(){var t,n,r;return s(this,(function(i){switch(i.label){case 0:return[4,B(e,(function(n){var r=function(e){return U(e||{fid:T(),registrationStatus:0})}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(v.create("app-offline"))};var n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()};return{installationEntry:n,registrationPromise:function(e,t){return a(this,void 0,void 0,(function(){var n,r;return s(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,7]),[4,I(e,t)];case 1:return n=i.sent(),[2,V(e,n)];case 2:return g(r=i.sent())&&409===r.serverCode?[4,R(e)]:[3,4];case 3:return i.sent(),[3,6];case 4:return[4,V(e,{fid:t.fid,registrationStatus:0})];case 5:i.sent(),i.label=6;case 6:throw r;case 7:return[2]}}))}))}(e,n)}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:K(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry}))];case 1:return""!==(n=i.sent()).fid?[3,3]:(r={},[4,t]);case 2:return[2,(r.installationEntry=i.sent(),r)];case 3:return[2,{installationEntry:n,registrationPromise:t}]}}))}))}function K(e){return a(this,void 0,void 0,(function(){var t,n,r,i;return s(this,(function(o){switch(o.label){case 0:return[4,M(e)];case 1:t=o.sent(),o.label=2;case 2:return 1!==t.registrationStatus?[3,5]:[4,S(100)];case 3:return o.sent(),[4,M(e)];case 4:return t=o.sent(),[3,2];case 5:return 0!==t.registrationStatus?[3,7]:[4,G(e)];case 6:return n=o.sent(),r=n.installationEntry,(i=n.registrationPromise)?[2,i]:[2,r];case 7:return[2,t]}}))}))}function M(e){return B(e,(function(e){if(!e)throw v.create("installation-not-found");return U(e)}))}function U(e){return 1===(t=e).registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}function H(e,t){var n=e.appConfig,r=e.platformLoggerProvider;return a(this,void 0,void 0,(function(){var e,i,o,a,u,c;return s(this,(function(s){switch(s.label){case 0:return e=function(e,t){var n=t.fid;return y(e)+"/"+n+"/authTokens:generate"}(n,t),i=_(n,t),(o=r.getImmediate({optional:!0}))&&i.append("x-firebase-client",o.getPlatformInfoString()),a={installation:{sdkVersion:p}},u={method:"POST",headers:i,body:JSON.stringify(a)},[4,E((function(){return fetch(e,u)}))];case 1:return(c=s.sent()).ok?[4,c.json()]:[3,3];case 2:return[2,b(s.sent())];case 3:return[4,m("Generate Auth Token",c)];case 4:throw s.sent()}}))}))}function W(e,t){return void 0===t&&(t=!1),a(this,void 0,void 0,(function(){var n,r,i;return s(this,(function(u){switch(u.label){case 0:return[4,B(e.appConfig,(function(r){if(!$(r))throw v.create("not-registered");var i,u=r.authToken;if(!t&&(2===(i=u).requestStatus&&!function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(i)))return r;if(1===u.requestStatus)return n=function(e,t){return a(this,void 0,void 0,(function(){var n,r;return s(this,(function(i){switch(i.label){case 0:return[4,z(e.appConfig)];case 1:n=i.sent(),i.label=2;case 2:return 1!==n.authToken.requestStatus?[3,5]:[4,S(100)];case 3:return i.sent(),[4,z(e.appConfig)];case 4:return n=i.sent(),[3,2];case 5:return 0===(r=n.authToken).requestStatus?[2,W(e,t)]:[2,r]}}))}))}(e,t),r;if(!navigator.onLine)throw v.create("app-offline");var c=function(e){var t={requestStatus:1,requestTime:Date.now()};return o(o({},e),{authToken:t})}(r);return n=function(e,t){return a(this,void 0,void 0,(function(){var n,r,i;return s(this,(function(a){switch(a.label){case 0:return a.trys.push([0,3,,8]),[4,H(e,t)];case 1:return n=a.sent(),i=o(o({},t),{authToken:n}),[4,V(e.appConfig,i)];case 2:return a.sent(),[2,n];case 3:return!g(r=a.sent())||401!==r.serverCode&&404!==r.serverCode?[3,5]:[4,R(e.appConfig)];case 4:return a.sent(),[3,7];case 5:return i=o(o({},t),{authToken:{requestStatus:0}}),[4,V(e.appConfig,i)];case 6:a.sent(),a.label=7;case 7:throw r;case 8:return[2]}}))}))}(e,c),c}))];case 1:return r=u.sent(),n?[4,n]:[3,3];case 2:return i=u.sent(),[3,4];case 3:i=r.authToken,u.label=4;case 4:return[2,i]}}))}))}function z(e){return B(e,(function(e){if(!$(e))throw v.create("not-registered");var t;return 1===(t=e.authToken).requestStatus&&t.requestTime+1e4<Date.now()?o(o({},e),{authToken:{requestStatus:0}}):e}))}function $(e){return void 0!==e&&2===e.registrationStatus}function J(e){return a(this,void 0,void 0,(function(){var t;return s(this,(function(n){switch(n.label){case 0:return[4,G(e)];case 1:return(t=n.sent().registrationPromise)?[4,t]:[3,3];case 2:n.sent(),n.label=3;case 3:return[2]}}))}))}function X(e,t){return a(this,void 0,void 0,(function(){var n,r,i,o;return s(this,(function(a){switch(a.label){case 0:return n=function(e,t){var n=t.fid;return y(e)+"/"+n}(e,t),r=_(e,t),i={method:"DELETE",headers:r},[4,E((function(){return fetch(n,i)}))];case 1:return(o=a.sent()).ok?[3,3]:[4,m("Delete Installation",o)];case 2:throw a.sent();case 3:return[2]}}))}))}function Y(e){return v.create("missing-app-config-values",{valueName:e})}(k=r.default).INTERNAL.registerComponent(new i.Component("installations",(function(e){var t=e.getProvider("app").getImmediate(),n={appConfig:function(e){var t,n;if(!e||!e.options)throw Y("App Configuration");if(!e.name)throw Y("App Name");try{for(var r=u(["projectId","apiKey","appId"]),i=r.next();!i.done;i=r.next()){var o=i.value;if(!e.options[o])throw Y(o)}}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),platformLoggerProvider:e.getProvider("platform-logger")};return{app:t,getId:function(){return function(e){return a(this,void 0,void 0,(function(){var t,n,r;return s(this,(function(i){switch(i.label){case 0:return[4,G(e.appConfig)];case 1:return t=i.sent(),n=t.installationEntry,(r=t.registrationPromise)?r.catch(console.error):W(e).catch(console.error),[2,n.fid]}}))}))}(n)},getToken:function(e){return function(e,t){return void 0===t&&(t=!1),a(this,void 0,void 0,(function(){return s(this,(function(n){switch(n.label){case 0:return[4,J(e.appConfig)];case 1:return n.sent(),[4,W(e,t)];case 2:return[2,n.sent().token]}}))}))}(n,e)},delete:function(){return function(e){return a(this,void 0,void 0,(function(){var t,n;return s(this,(function(r){switch(r.label){case 0:return[4,B(t=e.appConfig,(function(e){if(!e||0!==e.registrationStatus)return e}))];case 1:if(!(n=r.sent()))return[3,6];if(1!==n.registrationStatus)return[3,2];throw v.create("delete-pending-registration");case 2:if(2!==n.registrationStatus)return[3,6];if(navigator.onLine)return[3,3];throw v.create("app-offline");case 3:return[4,X(t,n)];case 4:return r.sent(),[4,R(t)];case 5:r.sent(),r.label=6;case 6:return[2]}}))}))}(n)},onIdChange:function(e){return function(e,t){var n=e.appConfig;return function(e,t){j();var n=O(e),r=N.get(n);r||(r=new Set,N.set(n,r)),r.add(t)}(n,t),function(){!function(e,t){var n=O(e),r=N.get(n);r&&(r.delete(t),0===r.size&&N.delete(n),D())}(n,t)}}(n,e)}}}),"PUBLIC")),k.registerVersion("@firebase/installations","0.4.7");var Q=function(){return(Q=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};var Z,ee,te=n("./node_modules/@firebase/logger/dist/index.esm.js"),ne="https://www.googletagmanager.com/gtag/js";!function(e){e.EVENT="event",e.SET="set",e.CONFIG="config"}(Z||(Z={})),function(e){e.ADD_SHIPPING_INFO="add_shipping_info",e.ADD_PAYMENT_INFO="add_payment_info",e.ADD_TO_CART="add_to_cart",e.ADD_TO_WISHLIST="add_to_wishlist",e.BEGIN_CHECKOUT="begin_checkout",e.CHECKOUT_PROGRESS="checkout_progress",e.EXCEPTION="exception",e.GENERATE_LEAD="generate_lead",e.LOGIN="login",e.PAGE_VIEW="page_view",e.PURCHASE="purchase",e.REFUND="refund",e.REMOVE_FROM_CART="remove_from_cart",e.SCREEN_VIEW="screen_view",e.SEARCH="search",e.SELECT_CONTENT="select_content",e.SELECT_ITEM="select_item",e.SELECT_PROMOTION="select_promotion",e.SET_CHECKOUT_OPTION="set_checkout_option",e.SHARE="share",e.SIGN_UP="sign_up",e.TIMING_COMPLETE="timing_complete",e.VIEW_CART="view_cart",e.VIEW_ITEM="view_item",e.VIEW_ITEM_LIST="view_item_list",e.VIEW_PROMOTION="view_promotion",e.VIEW_SEARCH_RESULTS="view_search_results"}(ee||(ee={}));var re,ie=new te.Logger("@firebase/analytics");var oe,ae,se=((re={})["no-ga-id"]='"measurementId" field is empty in Firebase config. Firebase Analytics requires this field to contain a valid measurement ID.',re["already-exists"]="A Firebase Analytics instance with the measurement ID ${id}  already exists. Only one Firebase Analytics instance can be created for each measurement ID.",re["already-initialized"]="Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",re["interop-component-reg-failed"]="Firebase Analytics Interop Component failed to instantiate",re),ue=new f.ErrorFactory("analytics","Analytics",se),ce={},le="dataLayer",fe="gtag",de=!1;function pe(e){if(de)throw ue.create("already-initialized");e.dataLayerName&&(le=e.dataLayerName),e.gtagName&&(fe=e.gtagName)}function he(e,t){var n=e.options.measurementId;if(!n)throw ue.create("no-ga-id");if(null!=ce[n])throw ue.create("already-exists",{id:n});if(!de){(function(){for(var e=window.document.getElementsByTagName("script"),t=0,n=Object.values(e);t<n.length;t++){var r=n[t];if(r.src&&r.src.includes(ne))return r}return null})()||function(e){var t=document.createElement("script");t.src=ne+"?l="+e,t.async=!0,document.head.appendChild(t)}(le),function(e){var t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(le);var r=function(e,t,n){var r=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];window[t].push(arguments)};return window[n]&&"function"==typeof window[n]&&(r=window[n]),window[n]=function(e,t){return function(n,r,i){if(n===Z.EVENT){var o=[];if(i&&i.send_to){var a=i.send_to;Array.isArray(a)||(a=[a]);for(var s=0,u=a;s<u.length;s++){var c=u[s],l=t[c];if(!l){o=[];break}o.push(l)}}if(0===o.length)for(var f=0,d=Object.values(t);f<d.length;f++){var p=d[f];o.push(p)}Promise.all(o).then((function(){return e(Z.EVENT,r,i||{})})).catch((function(e){return ie.error(e)}))}else n===Z.CONFIG?(t[r]||Promise.resolve()).then((function(){e(Z.CONFIG,r,i)})).catch((function(e){return ie.error(e)})):e(Z.SET,r)}}(r,e),{gtagCore:r,wrappedGtag:window[n]}}(ce,le,fe),i=r.wrappedGtag,o=r.gtagCore;ae=i,oe=o,de=!0}return ce[n]=function(e,t,n){return r=this,i=void 0,a=function(){var r,i;return function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}(this,(function(o){switch(o.label){case 0:return[4,t.getId()];case 1:return r=o.sent(),n("js",new Date),n(Z.CONFIG,e.options.measurementId,((i={}).firebase_id=r,i.origin="firebase",i.update=!0,i)),[2]}}))},new((o=void 0)||(o=Promise))((function(e,t){function n(e){try{u(a.next(e))}catch(e){t(e)}}function s(e){try{u(a.throw(e))}catch(e){t(e)}}function u(t){var r;t.done?e(t.value):(r=t.value,r instanceof o?r:new o((function(e){e(r)}))).then(n,s)}u((a=a.apply(r,i||[])).next())}));var r,i,o,a}(e,t,oe),{app:e,logEvent:function(e,t,r){return function(e,t,n,r,i){var o=r||{};i&&i.global||(o=Q(Q({},r),{send_to:t})),e(Z.EVENT,n,o||{})}(ae,n,e,t,r)},setCurrentScreen:function(e,t){return function(e,t,n,r){r&&r.global?e(Z.SET,{screen_name:n}):e(Z.CONFIG,t,{update:!0,screen_name:n})}(ae,n,e,t)},setUserId:function(e,t){return function(e,t,n,r){r&&r.global?e(Z.SET,{user_id:n}):e(Z.CONFIG,t,{update:!0,user_id:n})}(ae,n,e,t)},setUserProperties:function(e,t){return function(e,t,n,r){if(r&&r.global){for(var i={},o=0,a=Object.keys(n);o<a.length;o++){var s=a[o];i["user_properties."+s]=n[s]}e(Z.SET,i)}else e(Z.CONFIG,t,{update:!0,user_properties:n})}(ae,n,e,t)},setAnalyticsCollectionEnabled:function(e){return function(e,t){window["ga-disable-"+e]=!t}(n,e)}}}var ve="analytics";!function(e){e.INTERNAL.registerComponent(new i.Component(ve,(function(e){return he(e.getProvider("app").getImmediate(),e.getProvider("installations").getImmediate())}),"PUBLIC").setServiceProps({settings:pe,EventName:ee})),e.INTERNAL.registerComponent(new i.Component("analytics-internal",(function(e){try{return{logEvent:e.getProvider(ve).getImmediate().logEvent}}catch(e){throw ue.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),e.registerVersion("@firebase/analytics","0.3.1")}(r.default)},"./node_modules/idb/build/idb.js":function(e,t){!function(e){"use strict";function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function r(e,t,r){var i,o=new Promise((function(o,a){n(i=e[t].apply(e,r)).then(o,a)}));return o.request=i,o}function i(e,t,n){var i=r(e,t,n);return i.then((function(e){if(e)return new l(e,i.request)}))}function o(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function a(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return r(this[t],i,arguments)})}))}function s(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return this[t][r].apply(this[t],arguments)})}))}function u(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return i(this[t],r,arguments)})}))}function c(e){this._index=e}function l(e,t){this._cursor=e,this._request=t}function f(e){this._store=e}function d(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function p(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new d(n)}function h(e){this._db=e}o(c,"_index",["name","keyPath","multiEntry","unique"]),a(c,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),u(c,"_index",IDBIndex,["openCursor","openKeyCursor"]),o(l,"_cursor",["direction","key","primaryKey","value"]),a(l,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(l.prototype[e]=function(){var t=this,r=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,r),n(t._request).then((function(e){if(e)return new l(e,t._request)}))}))})})),f.prototype.createIndex=function(){return new c(this._store.createIndex.apply(this._store,arguments))},f.prototype.index=function(){return new c(this._store.index.apply(this._store,arguments))},o(f,"_store",["name","keyPath","indexNames","autoIncrement"]),a(f,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),u(f,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),s(f,"_store",IDBObjectStore,["deleteIndex"]),d.prototype.objectStore=function(){return new f(this._tx.objectStore.apply(this._tx,arguments))},o(d,"_tx",["objectStoreNames","mode"]),s(d,"_tx",IDBTransaction,["abort"]),p.prototype.createObjectStore=function(){return new f(this._db.createObjectStore.apply(this._db,arguments))},o(p,"_db",["name","version","objectStoreNames"]),s(p,"_db",IDBDatabase,["deleteObjectStore","close"]),h.prototype.transaction=function(){return new d(this._db.transaction.apply(this._db,arguments))},o(h,"_db",["name","version","objectStoreNames"]),s(h,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[f,c].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),r=n[n.length-1],i=this._store||this._index,o=i[e].apply(i,n.slice(0,-1));o.onsuccess=function(){r(o.result)}})}))})),[c,f].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,r=[];return new Promise((function(i){n.iterateCursor(e,(function(e){e?(r.push(e.value),void 0===t||r.length!=t?e.continue():i(r)):i(r)}))}))})})),e.openDb=function(e,t,n){var i=r(indexedDB,"open",[e,t]),o=i.request;return o&&(o.onupgradeneeded=function(e){n&&n(new p(o.result,e.oldVersion,o.transaction))}),i.then((function(e){return new h(e)}))},e.deleteDb=function(e){return r(indexedDB,"deleteDatabase",[e])},Object.defineProperty(e,"__esModule",{value:!0})}(t)}}]);
//# sourceMappingURL=defaultVendors-node_modules_firebase_analytics_dist_index_esm_js.c8ab12fea804a9b82bb2.js.map