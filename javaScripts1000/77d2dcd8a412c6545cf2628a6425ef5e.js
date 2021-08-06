ï»¿/*! Copyright Â© 2015, 2020, Oracle and/or its affiliates. All rights reserved. */
/*! mmapi v1.17 */
/*v1.17.0.1*/
/*Please do not modify this file except configuration section at the bottom.*/
(function(e,E){function r(a,b){return typeof a===b}function M(a){return r(a,"function")}function v(a){return r(a,"undefined")}function N(a){return!v(a)&&null!==a}function y(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function H(a,b){return y(a,b)&&r(a[b],"string")}function O(a,b,c){try{M(a)&&a.apply(b,c)}catch(F){W&&W.log(F)}}function f(a,b){for(var c in a)y(a,c)&&b(a[c],c)}function P(a){var b=!1;f(a,function(){b=!0});return!b}function I(a){var b=new Date;b.setTime(b.getTime()+864E5*a);
return b}function da(a,b,c){c=c||0;for(var e=a.length;c<e;c++)if(a[c]===b||M(b)&&b(a[c]))return c;return-1}function J(a){a=JSON.parse('{"v":'+a+"}");return"v"in a?a.v:a}function aa(a){function b(){for(var a=document.cookie.split(/;\s+/g),c={},b=0;b<a.length;b++){var d=a[b].split(/;|=/);1<d.length&&(c[d[0]]=d[1])}return c}var c=this,e=a.domain,p=a.secure,d=encodeURIComponent,g=decodeURIComponent;c.set=function(a,b,g,m){m||(b=d(b));a=d(a)+"="+b+";domain="+e+";path=/"+(g?";expires="+I(g).toGMTString():
"")+(p?";secure;sameSite=none":"");document.cookie=a;return c};c.remove=function(a){c.set(a,"",-1);return c};c.removeAll=function(a){if(a){var d=b();f(d,function(b,d){(new RegExp("^"+a)).test(d)&&c.remove(g(d))})}};c.get=function(a,c){a=new RegExp("(?:^|; )"+d(a).replace(/([.$?*|{}()\[\]\\\/+^])/g,"\\$1")+"=([^;]+)");a=document.cookie.match(a);if(!a)return E;a=a[1];return c?a:g(a)};c.getAll=function(a,c){if(a){var d=b(),e={};f(d,function(b,d){(new RegExp("^"+a)).test(d)&&(e[g(d)]=c?b:g(b))});return e}}}
function G(a,b,c){c=R[c]||c||"def";var e=b+"."+c+".",p=e.replace(/\./g,"\\.");this.get=function(c){if(!c){c=a.getAll(p);var b=e.length,d={};f(c,function(a,c){d[c.substring(b)]=J(a)});return d}return(c=a.get(e+c))?J(c):c};this.set=function(c,b,f){null===b||v(b)?a.remove(e+c):(b=JSON.stringify({v:b}),b=b.substring(5,b.length-1),a.set(e+c,b,v(f)?0:f));return this};this.removeAll=function(){a.removeAll(p);return this}}function K(a,b,c){function e(a,c){var b={};f(a,function(a,c){b[c]=a});f(c,function(a,
c){b[c]=a});return b}function p(c){for(var b={},d="",e=0,w;w=a.get(c+e++,!0);)d+=w;d=decodeURIComponent(d);try{b=JSON.parse(d)}catch(k){}return b}function d(){t=p(S);x=p(T);Q();t[c]=t[c]||{};x[c]=x[c]||{}}function g(c,b,d){b=JSON.stringify(b);var e="{}"===b,w=0;for(b=encodeURIComponent(b);a.get(c+w,!0);)a.remove(c+w++);if(!e)for(w=0;e=b.substr(3E3*w,3E3);)a.set(c+w++,e,v(d)?365:d,!0)}function q(){g(S,t);g(T,x,0)}function ea(a){var c={};f(a,function(a,b){c[b]=m(a).v});return c}function Q(){var a=(new Date).getTime(),
b=t[c];f(b,function(c,d){m(c).e<=a&&delete b[d]});q()}function m(a){var c=a.indexOf("|");return{v:JSON.parse(a.substring(c+1,a.length)),e:a.substring(0,c)}}var t,x;b+=".";var S=b+"store.p.",T=b+"store.s.";c=fa[c]||c||"def";this.get=function(a){d();var b=e(t[c],x[c]);return a?b[a]?m(b[a]).v:b[a]:ea(b)};this.set=function(a,b,e){d();var g=t[c],f=x[c];delete g[a];delete f[a];null===b||v(b)||(e?(b=I(e).getTime()+"|"+JSON.stringify(b),g[a]=b):f[a]="0|"+JSON.stringify(b));q();return this};this.removeAll=
function(){d();t[c]={};x[c]={};q();return this};this.exportData=function(){d();var a={};f(t,function(c,b){a[b]=c});f(x,function(c,b){a[b]=e(a[b],c)});f(a,function(b,c){f(b,function(b,d){a[c][d]=m(b)})});return a};d()}function L(a,b){function c(a){f([g,q],function(b){for(var c=0;c<b.length;c++){var d=b.key(c);0===d.indexOf(p)&&a(b,d)}})}function e(a,b){var c=(new Date).getTime();if((b=JSON.parse(b))&&b.e&&b.e<c)localStorage.removeItem(a);else return b&&b.v}b=R[b]||b||"def";var p=a+"."+b+".",d=this,
g=sessionStorage,q=localStorage;d.get=function(a){if(!a){var b={},d=p.length;c(function(a,c){b[c.substring(d)]=e(c,a.getItem(c))});return b}a=p+a;var f=g.getItem(a)||q.getItem(a);return e(a,f)};d.set=function(a,b,c){a=p+a;if(N(b)){var e=c?q:g;b=JSON.stringify({v:b,e:c?I(c).getTime():E});e.setItem(a,b)}else g.removeItem(a),q.removeItem(a);return d};d.removeAll=function(){c(function(a,b){a.removeItem(b)});return d}}function ga(a){var b=this,c=arguments;b.get=function(a){if(!a){for(var b=c[0].get(),
d=1;d<c.length;d++)f(c[d].get(),function(a,c){b[c]=v(b[c])?a:b[c]});return b}for(d=0;d<c.length;d++){var e=c[d].get(a);if(N(e))return e}};b.set=function(a,e,d){f(c,function(b){b.set(a,e,d)});return b};b.removeAll=function(){f(c,function(a){a.removeAll()});return b}}function ha(a){function b(){var a=function(a){var b=new q(m,g,a);y&&(b=new ga(b,new L(g,a)));return b};a.isSecure=r;a.testStorage=c;return a}function c(){var a=(""+Math.random()).substring(0,5);m.set(g+".tst",a,10);a=m.get(g+".tst",!0)===
a?1:0;m.remove(g+".tst");return a}function v(a){var b=(new K(m,g,E)).exportData(),c=!1;f(b,function(b,d){var e=a(d);f(b,function(a,b){c=!0;var d=a.e;d=(d=parseInt(d))?(d-(new Date).getTime())/864E5:d;e.set(b,a.v,d)})});return function(){c&&(m.removeAll(g+"\\.store\\.p\\."),m.removeAll(g+"\\.store\\.s\\."))}}function p(a){var b=m.getAll(g+"\\.",!0),c={};f(b,function(b,d){var e=d.split(/\./);if(2<e.length&&"store"!==e[1]){b=c[e[1]];b||(b=new G(m,g,e[1]),c[e[1]]=b);var f=a(e[1]);d=d.substring((e[0]+
"."+e[1]+".").length);b=b.get(d);f.set(d,b,30)}});return function(){f(c,function(a){a.removeAll()})}}var d=a.storageType,g=a.cprefix;if(0>da("cookie cookie-secure cookie-key-value cookie-key-value-secure cookie-key-value-with-fallback cookie-key-value-secure-with-fallback".split(" "),d))throw"Invalid storage type: "+d;var q=0===d.indexOf("cookie-key-value")?G:K,r=0<d.indexOf("-secure"),y=0<d.indexOf("-with-fallback");a=a.cookie_domain||e.location.hostname.replace(/^www\./i,"");var m=new aa({domain:a,
secure:r});(function(){var a=g+".|storage";q===G?P(m.getAll(g+"\\.store\\.",!0))?y&&localStorage.getItem(a)!==d&&(p(function(a){return new L(g,a)}),localStorage.setItem(a,d)):v(b())():q!==K||P(m.getAll(g+"\\.",!0))||p(b())()})();this.createBuilder=b}if(!e.mmsystem){var W=e.console||{log:function(){},error:function(){}},R={"mmparams.p":"p","mmparams.d":"d",mmengine:"e"},fa={p:"mmparams.p",d:"mmparams.d",e:"mmengine"},ia=new function(a){function b(a,b){if(A[a])for(var c=A[a].length-1;0<=c;c--)A[a][c].call({},
b)}function c(a){C=r(a,"boolean")?a:!1}function F(a,b,c){c=c||{};c.type="text/javascript";c.id=a;c.src=b;if(C){a=document.getElementsByTagName("head")[0];var h=document.createElement("script");f(c,function(a,b){h.setAttribute(b,a)});a.insertBefore(h,a.lastChild)}else{var l="";f(c,function(a,b){l+=" "+b+'="'+a+'"'});document.write("<script"+l+">\x3c/script>")}}function p(a){if(!r(a,"object"))return a;if(a.constructor===Array)return a.join(";");var b=[];f(a,function(a,c){a.constructor===Array?f(a,function(a){b.push(c+
"="+a)}):b.push(c+"="+encodeURIComponent(a))});return b.join(";")}function d(a){a=a?x(a):{};var b={};r(a["mm-dlp-api"],"string")&&(b.fv={ref:a["original-ref"].substring(0,256),url:a["original-url"].substring(0,1024)},b.origin=/http(s)?:\/\/.*?([^/]|$)+/.exec(b.fv.url)[0]);f(a,function(a,c){"mmcore."===c.substring(0,7)&&(b[c.substring(7)]=a)});return b}function g(){var b="mmRequestCallbacks["+D+"]",c={},d=e.screen;c.fv={dmn:a.domain,ref:document.referrer.substring(0,256),url:location.href.substring(0,
1024),scrw:d.width,scrh:d.height,clrd:d.colorDepth,cok:k.baseStorage.testStorage()};c.lver="1.17";c.jsncl=b;c.ri=D;c.lto=-(new Date).getTimezoneOffset();c.jrt="inline"===a.executionMode?"f":"s";return c}function q(b,c){var h=b&&b.Packages||[],d=h.length;if(0<d){e.mmInitCallback=function(a){a(k,b,{skipResponseProcessing:!0,skipPersistentData:!0,useLoaderStorage:!0,debug:R});0===--d&&(c(),e.mmInitCallback=E)};for(var l=0;l<h.length;l++)F("mmpack."+l,0===h[l].indexOf("//")?h[l]:a.baseContentUrl+h[l])}else c()}
function I(a){(a=document.getElementById(a))&&a.parentNode?a.parentNode.removeChild(a):a&&a.removeAttribute("src")}function Q(a,c,d){a=(J[a-1]=c)&&c.PersistData||[];var h=c&&c.SystemData&&c.SystemData[0]&&c.SystemData[0].ResponseId||0;if(h>=L){for(var l=a.length;l--;)k.setParam(a[l].Name,a[l].Value,n.persistent,a[l].Expiration);L=h}if(H(c,"mmcoreResponse")&&y(e,"mmcore"))try{Function(c.mmcoreResponse).call(e)}catch(ba){W.log(ba)}b("response",c);d(!!c);b("responseExecuted",c);C=!0}function m(a,b){var c=
"mmrequest."+D;(function(a,b){e.mmRequestCallbacks[a]=function(h){I(c);var l=!1,B=function(){l=!0;1===a?q(h,function(){Q(a,h,b);var c=d(document.location.search).origin;c&&e.parent&&e.parent.postMessage&&e.parent.postMessage(JSON.stringify({hash:"unhide",command:"unhide",data:{}}),c)}):Q(a,h,b)};if(0!==U.length){for(var X=0;X<U.length;X++)U[X](h,B);l||(C=!0)}else B();delete e.mmRequestCallbacks[a]}})(D,b);F(c,a,{onerror:"window['mmRequestCallbacks']["+D+"](false);"});D++}function t(){var a={};return{get:function(b){return b?
a[b]:a},set:function(b,c,h){0>parseInt(h)?delete a[b]:a[b]=c},removeAll:function(){a={}}}}function x(a){a=a.split(/\?|&/);for(var b={},c,d,h=0;h<a.length;h++)if(a[h]){c=a[h].split("=");try{d=decodeURIComponent(c[1]||"")}catch(ba){d=c[1]||""}b[c[0]]=d}return b}function S(a){function b(a,b,h){var e;if(e=d[a]){c[a]=b;e=e.split(/;/);for(var l=0;l<e.length;l++){var B=e[l].split("=");(a=B[0].replace(/^\s+|\s+$/gm,""))&&h(b,a,B[1]||"")}}}var c={},d=x(a);V||(c.pageid=d.pageid);c.jsver=d.jsver;b("uv",{},function(a,
b,c){y(a,b)||(a[b]=[]);a[b].push(c)});b("uat",{},function(a,b,c){a[b]=decodeURIComponent(c)});b("ids",{},function(a,b,c){c&&(a[b]=decodeURIComponent(c))});b("rul",[],function(a,b,c){a.push(b)});return c}function T(){if(y(e,"mmcore")){var b=e.mmcore;b.server=a.srv;k.CGRequestInternal=k.CGRequest;k.CGRequest=function(a,c){V=!0;Y=a;Z=c;b.CGRequest()};var c=b._Tag;b._Tag=function(d){if(-1===d.indexOf(a.srv))c.apply(b,arguments);else{b._Clear.call(b);var h=k.mergeParams(Z,S(d));ca=C;V||(C=b._async);k.CGRequestInternal(Y,
h);C=ca;Z=Y=E;V=!1}};var d=b.SetCookie;b.SetCookie=function(a){/^(mmid|pd|srv)$/.test(a)||d.apply(b,arguments)}}}function w(a,b,c){var d="";0<b.length&&"."!==b.substring(b.length-1)&&(d=".");b=b+d+c;d=a.get(b);r(d,"string")&&d&&(k.setParam(c,d,n.persistent,365),a.remove(b))}function G(a){var b=y(e,"mmcore")&&e.mmcore.cookie_domain?e.mmcore.cookie_domain:H(a,"mmcoreCookieDomain")?a.mmcoreCookieDomain:a.cookie_domain;a=y(e,"mmcore")&&e.mmcore.cprefix?e.mmcore.cprefix:H(a,"mmcoreCprefix")?a.mmcoreCprefix:
a.cprefix+".";b=new aa({domain:b||e.location.hostname.replace(/^www\./i,"")});w(b,a,"pd");w(b,a,"srv");w(b,"","mmid")}function K(a,b){var d=k.getParam,e=function(a,b,c,d){k.setParam(a,b,v(c)?1:c,d)};O(a.beforeInit,{},[d,e,{getParam:d,setParam:e,validateResponses:k.validateResponses,disable:function(){c(!0);z[n.page].set("disabled",1)},enable:function(){1===z[n.page].get("disabled")&&(z[n.page].set("disabled",0),b())},setAsync:c}]);k.on("request",function(){O(a.beforeRequest,{},[d,e])});k.on("response",
function(b){O(a.afterResponse,{},[d,e,b])});k.on("responseExecuted",function(b){O(a.afterResponseExecution,{},[d,e,b])})}function N(a){e.mmcoreInitCallback=function(b){G(a);T();k.CGRequest(function(){M(b)&&b.apply(e.mmcore,arguments)},{});delete e.mmcoreInitCallback};"local"!==a.mmcoreUrl&&F("mmcoreIntegration",a.mmcoreUrl)}function P(a,b){H(b,"un")&&(a=0===a.indexOf("http:")?a.substring(5):a,a=0===a.indexOf("//")?"https:"+a:a);return a}this.version="1.17";var k=this,J=[],D=1,C=!1,A={},R={},u=[],
z=[],n={persistent:0,deferredRequest:1,request:2,page:3},U=[],L=0,Y,Z,ca,V=!1;this.baseStorage=(new ha(a)).createBuilder();this.baseStorage.storeStrategy=n;this.mergeParams=function(a,b){a=v(a)?{}:a;b=v(b)?{}:b;if(!r(b,"object"))return b;var c={};r(a,"object")&&f(a,function(a,b){c[b]=a});f(b,function(a,d){c[d]=c[d]?c[d].constructor===Array&&b[d].constructor===Array?c[d].concat(a):k.mergeParams(c[d],a):a});return c};this.CGRequest=function(c,l){c=c||function(){};l=l||{};e.mmRequestCallbacks=e.mmRequestCallbacks||
{};b("request");var h=k.mergeParams(g(),k.mergeParams(k.mergeParams(u[n.persistent].get(),k.mergeParams(u[n.deferredRequest].get(),k.mergeParams(u[n.page].get(),u[n.request].get()))),d(location.search))),B=[];l=k.mergeParams(h,l);f(l,function(a,b){B.push(encodeURIComponent(b)+"="+encodeURIComponent(p(a)))});u[n.deferredRequest].removeAll();u[n.request].removeAll();l=P(a.srv,l);m(l+B.join("&"),c);return this};this.getResponses=function(){return J};this.setParam=function(a,b,c,d){u[c].set(a,b,v(d)?
365:d);return this};this.getParam=function(a,b){return u[b].get(a)};this.removeParam=function(a,b){u[b].set(a,"",-1);return this};this.on=function(a,b){A[a]&&A[a].push(b);return k};this.disable=function(){z[n.persistent].set("disabled",1,0);return this};this.enable=function(){z[n.persistent].set("disabled",null,-1);return this};this.validateResponses=function(a){M(a)&&U.push(a)};(function(a){function b(){if(1!==z[n.persistent].get("disabled")&&1!==z[n.page].get("disabled")||1<D)H(a,"mmcoreUrl")&&
a.mmcoreUrl?N(a):(G(a),k.CGRequest(E,{}))}function g(){K(a,b);b()}f(a,function(a,b){k[b]=a});var h=d(document.location.search);if("1"!==h.disabled){k.calcCookieDomain=k.cookie_domain||e.location.hostname.replace(/^www\./i,"");c(a.async);z[n.persistent]=k.baseStorage("ls");z[n.page]=t();u[n.persistent]=k.baseStorage("p");u[n.deferredRequest]=k.baseStorage("d");u[n.request]=t();u[n.page]=t();A.request=[];A.response=[];A.responseExecuted=[];var m=d(document.referrer).pruh,h=h.pruh,p=e.mmpruh,q=k.getParam("pruh",
0),r=(m?m+",":"")+(h?h+",":"")+(p?p+",":"")+(q?q:"");r?(e.mmInitCallback=function(a){a(k,r,g)},F("MM.PRUH",a.baseContentUrl+"utils/pruh.js")):g()}})(a);return this}({
 storageType:'cookie-key-value',
 cprefix:'mmapi',
 domain:'britishairways.com',
 baseContentUrl:'//service.maxymiser.net/platform/eu/api/',
 cookie_domain:location.hostname.match(/^[\d.]+$|/)[0]||('.'+(location.hostname.match(/[^.]+\.(\w{2,3}\.\w{2}|\w{2,})$/)||[location.hostname])[0]),
 srv:'//service.maxymiser.net/cg/v5/?',
 async:false,
 mmcoreUrl:'',
 mmcoreCookieDomain:'',
 mmcoreCprefix:'',
 beforeInit: function( getParam, setParam ) {
  /* Cross-domain data restore from window.name */
   function restoreVisitorIdFromWindow() {
     var key, crossDomainData;

     if (window.JSON && window.JSON.stringify && window.JSON.parse) {
       window.name = window.name.replace(/\|\*mm(.*)mm\*\|/, function(matchedString, capturedData) {
         crossDomainData = JSON.parse(capturedData);
         for (key in crossDomainData) {
           if (crossDomainData.hasOwnProperty(key)) {
             setParam(key, crossDomainData[key], 0);
           }
         }
         return '';
       });
     }
   }

   restoreVisitorIdFromWindow();
},
 beforeRequest:function( getParam, setParam ){   },
 afterResponse: function( getParam, setParam, genInfo ) {
   /* Cross-domain data capture to window.name */
   function captureVisitorIdToWindow(crossDomainParams) {
     var i, cgParamName, cgParamValue,
       crossDomainData = {},
       hasCrossDomainParams = false;

       if (window.JSON && window.JSON.stringify && window.JSON.parse) {
       for (i = crossDomainParams.length; i--;) {
         cgParamName = crossDomainParams[i];
         cgParamValue = getParam(cgParamName, 0);

         if (typeof cgParamValue === 'undefined' || cgParamValue === 'undefined') {
           // nothing to save
         } else {
           hasCrossDomainParams = true;
           crossDomainData[cgParamName] = cgParamValue;
         }
       }

       if (hasCrossDomainParams) {
         window.name = window.name.replace(/\|\*mm(.*)mm\*\|/, '') + ('|*mm' + JSON.stringify(crossDomainData) + 'mm*|');
       }
     }
   }

   captureVisitorIdToWindow(['pd', 'mmid', 'srv']);
},
 afterResponseExecution:function( getParam, setParam, genInfo ){   }
}
);e.mmsystem=new function(a){this.enableUtility=function(b){var c=
a.getParam("un",a.baseStorage.storeStrategy.persistent)||"";(new RegExp("(^|,)"+b+"($|,)")).test(c)||(c=c.split(","),c.push(b),a.setParam("un",c.join(",").replace(/(^,)|(,$)/g,""),a.baseStorage.storeStrategy.persistent));return this};this.disableUtility=function(b){var c=a.getParam("un",a.baseStorage.storeStrategy.persistent)||"";(new RegExp("(^|,)"+b+"($|,)")).test(c)&&(c=c.replace(new RegExp("(^|,)"+b+"($|,)","gi"),",").replace(/(^,)|(,$)/g,""),a.setParam("un",c,a.baseStorage.storeStrategy.persistent));
return this};this.enable=function(){a.enable();return this};this.disable=function(){a.disable();return this};this.getConfig=function(){return{storageType:a.storageType,cprefix:a.cprefix,domain:a.domain,baseContentUrl:a.baseContentUrl,cookie_domain:a.cookie_domain,srv:a.srv,async:a.async,beforeInit:a.beforeInit,beforeRequest:a.beforeRequest,afterResponse:a.afterResponse,afterResponseExecution:a.afterResponseExecution}}}(ia)}})(window);
