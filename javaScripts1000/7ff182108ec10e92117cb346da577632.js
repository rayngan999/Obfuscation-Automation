!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="https://exchange.mediavine.com/",t(t.s=1)}([function(e,n,t){var r,i;
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */!function(o){if(void 0===(i="function"==typeof(r=o)?r.call(n,t,n,e):r)||(e.exports=i),!0,e.exports=o(),!!0){var u=window.Cookies,c=window.Cookies=o();c.noConflict=function(){return window.Cookies=u,c}}}((function(){function e(){for(var e=0,n={};e<arguments.length;e++){var t=arguments[e];for(var r in t)n[r]=t[r]}return n}function n(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function t(r){function i(){}function o(n,t,o){if("undefined"!=typeof document){"number"==typeof(o=e({path:"/"},i.defaults,o)).expires&&(o.expires=new Date(1*new Date+864e5*o.expires)),o.expires=o.expires?o.expires.toUTCString():"";try{var u=JSON.stringify(t);/^[\{\[]/.test(u)&&(t=u)}catch(e){}t=r.write?r.write(t,n):encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var c="";for(var a in o)o[a]&&(c+="; "+a,!0!==o[a]&&(c+="="+o[a].split(";")[0]));return document.cookie=n+"="+t+c}}function u(e,t){if("undefined"!=typeof document){for(var i={},o=document.cookie?document.cookie.split("; "):[],u=0;u<o.length;u++){var c=o[u].split("="),a=c.slice(1).join("=");t||'"'!==a.charAt(0)||(a=a.slice(1,-1));try{var s=n(c[0]);if(a=(r.read||r)(a,s)||n(a),t)try{a=JSON.parse(a)}catch(e){}if(i[s]=a,e===s)break}catch(e){}}return e?i[e]:i}}return i.set=o,i.get=function(e){return u(e,!1)},i.getJSON=function(e){return u(e,!0)},i.remove=function(n,t){o(n,"",e(t,{expires:-1}))},i.defaults={},i.withConverter=t,i}((function(){}))}))},function(e,n,t){e.exports=t(2)},function(e,n,t){"use strict";t.r(n);var r=t(0),i=function(e,n,t,r){return new(t||(t=Promise))((function(i,o){function u(e){try{a(r.next(e))}catch(e){o(e)}}function c(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(u,c)}a((r=r.apply(e,n||[])).next())}))},o=function(e,n){var t,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=n.call(e,u)}catch(e){o=[6,e],r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},u=function(e,n){return i(void 0,void 0,void 0,(function(){var t,r;return o(this,(function(i){switch(i.label){case 0:return window.caches?[4,caches.open("mv")]:[2];case 1:return t=i.sent(),(r=new Headers).append("Content-Type","application/json"),r.append("Accept","application/json"),r.append("Cache-Control","max-age=31557600"),t.put(e,new Response(JSON.stringify(n),{headers:r})),[2]}}))}))},c=function(e){return i(void 0,void 0,void 0,(function(){var n,t,r;return o(this,(function(i){switch(i.label){case 0:return window.caches?[4,window.caches.open("mv")]:[2,null];case 1:return(n=i.sent())?[4,n.match(e)]:[2,null];case 2:if(!(t=i.sent()))return[2,null];if(!t.ok)return[2,null];i.label=3;case 3:return i.trys.push([3,5,,6]),[4,t.json()];case 4:return[2,i.sent()];case 5:return r=i.sent(),console.warn(r),[3,6];case 6:return[2]}}))}))},a=function(e,n){return i(void 0,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,u(e,n)];case 1:return t.sent(),[3,3];case 2:return t.sent(),[3,3];case 3:return r.set(e,n,{path:"/",expires:365,secure:!0,sameSite:"None"}),[2,!0]}}))}))},s=function(e){return i(void 0,void 0,void 0,(function(){var n,t;return o(this,(function(i){switch(i.label){case 0:n={},i.label=1;case 1:return i.trys.push([1,3,,4]),t=n,[4,c(e)];case 2:return t.cache=i.sent(),[3,4];case 3:return i.sent(),[3,4];case 4:return n.cookie=r.getJSON(e),[2,n]}}))}))},l=function(e){return i(void 0,void 0,void 0,(function(){var n;return o(this,(function(t){switch(t.label){case 0:n={},t.label=1;case 1:return t.trys.push([1,3,,4]),[4,s(e)];case 2:return n=t.sent(),[3,4];case 3:return t.sent(),[3,4];case 4:if(n.cookie&&!n.cache){try{u("/mv_tokens",n.cookie)}catch(e){}return[2,n.cookie]}return n.cache&&!n.cookie?(r.set("mv_tokens",n.cache),[2,n.cache]):n.cache&&n.cookie?[2,n.cookie]:[2,null]}}))}))},f=function(e,n,t,r){return new(t||(t=Promise))((function(i,o){function u(e){try{a(r.next(e))}catch(e){o(e)}}function c(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(u,c)}a((r=r.apply(e,n||[])).next())}))},d=function(e,n){var t,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=n.call(e,u)}catch(e){o=[6,e],r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}};function p(e){return f(this,void 0,void 0,(function(){return d(this,(function(n){return[2,new Promise((function(n,t){e("getTCData",2,(function(e){e.gdprApplies?n(e.tcString):n("")}))}))]}))}))}function v(e){return f(this,void 0,void 0,(function(){return d(this,(function(n){return[2,new Promise((function(n){e("getUSPData",1,(function(e){var t;(null===(t=e)||void 0===t?void 0:t.uspString)?n(e.uspString):n("")}))}))]}))}))}var h={us:"invalidate-verizon-pushes",eu:"eu-v1"};!function(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var r=Array(e),i=0;for(n=0;n<t;n++)for(var o=arguments[n],u=0,c=o.length;u<c;u++,i++)r[i]=o[u]}(["adhesion_mobile","adhesion_tablet","adhesion_desktop","sidebar_atf","leaderboard_atf"],["sidebar_btf","recipe_mobile","recipe_btf"]);function m(e,n){var t,r;return!(null===(t=e)||void 0===t||!t.mv_uuid||(null===(r=e)||void 0===r?void 0:r.version)!==n)}t.d(n,"Usersync",(function(){return w})),t.d(n,"createUsersyncElement",(function(){return k})),t.d(n,"getAndEncodePartners",(function(){return S})),t.d(n,"getUsersyncUrl",(function(){return E})),t.d(n,"insertElement",(function(){return C})),t.d(n,"insertUserSyncIframe",(function(){return U})),t.d(n,"insertUserSyncPixel",(function(){return P})),t.d(n,"insertScript",(function(){return T})),t.d(n,"createTrackPixelIframeHtml",(function(){return O})),t.d(n,"createTrackPixelHtml",(function(){return I})),t.d(n,"triggerPixel",(function(){return j}));var w,y=function(e,n,t,r){return new(t||(t=Promise))((function(i,o){function u(e){try{a(r.next(e))}catch(e){o(e)}}function c(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(u,c)}a((r=r.apply(e,n||[])).next())}))},b=function(e,n){var t,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=n.call(e,u)}catch(e){o=[6,e],r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},g="//exchange.mediavine.com";!function(e){var n,t=this;e.init=function(e){e.slug;var n=e.gdpr,r=e.gdpr_compliance,i=e.alternateMvUuids,o=void 0===i?[]:i,u=e.s2sBidders;return y(t,void 0,void 0,(function(){return b(this,(function(e){switch(e.label){case 0:return function(e,n){return"1"===e&&!n}(n,r)||!function(e){return"0"===e||"1"===e&&(window.__cmp||window.__tcfapi)}(n)?[2]:(window.addEventListener("message",_,!1),[4,E(u,o)]);case 1:return U(e.sent()),[2]}}))}))},e.uuidVersion=(n="us-west-2".split("-")[0],h[n]||h.us)}(w||(w={}));var x,_=function(e){var n=[];e.data&&"syncUrls"===e.data.message&&(a("mv_tokens",e.data.tokens),a("mv_tokens_"+w.uuidVersion,e.data.tokens),(e.data.syncUrls||[]).forEach((function(e){return n.push(k(e))})))};function k(e){var n=e.type,t=e.url;return y(this,void 0,void 0,(function(){return b(this,(function(e){return[2,new Promise((function(e){switch(n){case x.iframe:U(t,e);break;case x.pixel:P(t,e);break;case x.script:T(t,e)}}))]}))}))}function S(e){var n={};return e.forEach((function(e){var t,r,i;(null===(i=null===(r=null===(t=window.$mediavine)||void 0===t?void 0:t.web)||void 0===r?void 0:r.model)||void 0===i?void 0:i[e])&&(n[e]=window.$mediavine.web.model[e])})),encodeURIComponent(JSON.stringify(n))}function E(e,n){var t;return y(this,void 0,void 0,(function(){var r,i,o,u,c,s,f,d,h;return b(this,(function(y){switch(y.label){case 0:return r=g+"/usersync/sync?origin="+document.location.origin+"&src="+g+"&s2sVersion=multi-bidrequests-c",[4,l("mv_tokens_"+w.uuidVersion)];case 1:return i=y.sent(),[4,a("mv_tokens",i)];case 2:if(y.sent(),m(i,w.uuidVersion))o=null===(t=i)||void 0===t?void 0:t.mv_uuid;else for(u=0,c=n;u<c.length;u++)s=c[u],f=s.get(),!o&&m(f,w.uuidVersion)&&(o=f.mv_uuid);return o&&(r=r+"&mv_uuid="+o+"&version="+w.uuidVersion,n.forEach((function(e){return e.set({mv_uuid:o,version:w.uuidVersion})}))),window.__tcfapi?[4,p(window.__tcfapi)]:[3,4];case 3:return d=y.sent(),r+="&gdpr="+(d?"1":"0")+"&gdpr_consent="+d,[3,5];case 4:r+="&gdpr=0",y.label=5;case 5:return window.__uspapi?[4,v(window.__uspapi)]:[3,7];case 6:h=y.sent(),r+="&us_privacy="+h,y.label=7;case 7:return[2,r+="&p="+S(e)]}}))}))}function C(e,n,t,r){var i;n=n||document,i=t?n.getElementsByTagName(t):n.getElementsByTagName("head");try{if((i=i.length?i:n.getElementsByTagName("body")).length){i=i[0];var o=r?null:i.firstChild;return i.insertBefore(e,o)}}catch(e){}}function U(e,n){var t=O(e,!1,"allow-scripts allow-same-origin"),r=document.createElement("div");r.innerHTML=t;var i=r.firstChild;n&&(i.addEventListener("load",n),i.addEventListener("error",n)),C(i,document,"html",!0)}function P(e,n){var t=I(e,!1),r=document.createElement("div");r.innerHTML=t;var i=r.firstChild;n&&(i.addEventListener("load",n),i.addEventListener("error",n)),C(i,document,"html",!0)}function T(e,n){var t=document.createElement("script");t.setAttribute("src",e),n&&(t.addEventListener("load",n),t.addEventListener("error",n)),C(t,document,"html",!0)}function O(e,n,t){return void 0===n&&(n=!0),void 0===t&&(t=""),e?(n&&(e=encodeURI(e)),t&&(t='sandbox="'+t+'"'),"<iframe "+t+'\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="'+e+'">\n    </iframe>'):""}function I(e,n){if(void 0===n&&(n=!0),!e)return"";var t='<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';return t+='<img src="'+(n?encodeURI(e):e)+'"></div>'}function j(e){(new Image).src=e+"&type=pixel"}!function(e){e.pixel="pixel",e.iframe="iframe",e.script="script"}(x||(x={})),window.$mediavine=window.$mediavine||{},window.$mediavine.web=window.$mediavine.web||{},window.$mediavine.web.usersyncInit=w.init}]);
//# sourceMappingURL=usersync.min.js.map