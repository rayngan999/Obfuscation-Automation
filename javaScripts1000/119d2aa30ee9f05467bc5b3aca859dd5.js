!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1305)}({1305:/*!******************************!*\
  !*** ./src/nextit-loader.js ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
function(t,e,n){function r(t,e){var n=o(t);!function(){var r=document.createElement("script");r.id="nit-bundle",r.setAttribute("type","text/javascript"),r.setAttribute("language","javascript"),r.setAttribute("async","true"),n?r.setAttribute("src",e+"/nextit-bundle.js?5.47.3"):(t=c(t),r.setAttribute("src",t.url+"alme/alme-script-manager.js?"+(new Date).getTime()));var o=document.getElementsByTagName("head")[0];o&&o.appendChild(r)}()}function o(t){var e=!0;try{if(!t.clientnames||!t.url)return e;var n=window._SFDDL.pageInfo.PNL,r=window._SFDDL.pageInfo.ClientName;(i(t.clientnames,r)||("PS"===n.toUpperCase()||"CC"===n.toUpperCase())&&i(t.clientnames,"PSCC"))&&(e=!1)}catch(t){console.log("Error in loadAlme4: ",t)}return e}function a(t,e){console.log("Looks like there was a problem retrieving the Alme 5 whitelist: "+t),e||(e=window.location.origin),r({},e)}function i(t,e){try{return void 0!=t.find(function(t){return t.toUpperCase()===e.toUpperCase()})}catch(t){console.log("Error in loadAlme4: ",t)}return!1}function c(t){return"/"!=t.url.charAt(t.length-1)&&(t.url=t.url.concat("/")),t}function l(){var t="";try{for(var e=document.getElementsByTagName("script"),n="",r=0;r<e.length;r++){var o=e[r].getAttribute("src",-1);if(o>""&&o.toLowerCase().indexOf("nextit-script-manager.js")>-1){n=o;break}}t=n.substr(0,n.toLowerCase().lastIndexOf("/"))}catch(t){console.log("Looks like there was a problem in GetBaseUrl: "+t)}return t}function s(t){try{r(window.alme5_whitelist&&window.alme5_whitelist.metadata?window.alme5_whitelist.metadata:{},t)}catch(e){a(e,t)}}!function(){var t=l();try{var e=document.createElement("script");e.src=(t.length<=1?window.location.origin:t)+"/alme/whitelist.js",e.onreadystatechange=s.bind(this,t),e.onload=s.bind(this,t),e.onerror=function(){r({},t)},document.head.appendChild(e)}catch(e){a(e,t)}}()}});