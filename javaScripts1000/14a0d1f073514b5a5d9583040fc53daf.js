ï»¿/*! Copyright Â© 2015, 2020, Oracle and/or its affiliates. All rights reserved. */
/*! mmapi v1.18 */
/*v1.18.0.1*/
/*Please do not modify this file except configuration section at the bottom.*/
(function(d){function q(a,b){return typeof a===b}function M(a){return q(a,"function")}function x(a){return q(a,"undefined")}function Y(a){return x(a)||null==a}function N(a){return!x(a)&&null!==a}function B(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function H(a,b){return B(a,b)&&q(a[b],"string")}function O(a,b,c){try{M(a)&&a.apply(b,c)}catch(u){V&&V.log(u)}}function h(a,b){for(var c in a)B(a,c)&&b(a[c],c)}function P(a){var b=!1;h(a,function(){b=!0});return!b}function I(a){var b=new Date;
b.setTime(b.getTime()+864E5*a);return b}function ca(a,b,c){c=c||0;for(var u=a.length;c<u;c++)if(a[c]===b||M(b)&&b(a[c]))return c;return-1}function Q(a,b){var c={};h(a,function(a,b){c[b]=a});h(b,function(a,b){c[b]=a});return c}function J(a){a=JSON.parse('{"v":'+a+"}");return"v"in a?a.v:a}function Z(a){function b(){for(var a=document.cookie.split(/;\s+/g),c={},b=0;b<a.length;b++){var f=a[b].split(/[;=]/);1<f.length&&(c[f[0]]=f[1])}return c}var c=this,u=a.domain,d=a.secure,e=encodeURIComponent,g=decodeURIComponent;
c.set=function(a,b,g,f){f||(b=e(b));document.cookie=e(a)+"="+b+";domain="+u+";path=/"+(g?";expires="+I(g).toGMTString():"")+(d?";secure;sameSite=none":"");return c};c.remove=function(a){c.set(a,"",-1);return c};c.removeAll=function(a){if(a){var e=b();h(e,function(b,f){(new RegExp("^"+a)).test(f)&&c.remove(g(f))})}};c.get=function(a,c){a=new RegExp("(?:^|; )"+e(a).replace(/([.$?*|{}()[\]\\/+^])/g,"\\$1")+"=([^;]+)");a=document.cookie.match(a);if(a){var b=a[1];b=c?b:g(b)}return b};c.getAll=function(a,
c){if(a){var e=b();var f={};h(e,function(b,e){(new RegExp("^"+a)).test(e)&&(f[g(e)]=c?b:g(b))})}return f}}function C(a,b,c){c=R[c]||c||"def";var d=b+"."+c+".",n=d.replace(/\./g,"\\.");this.get=function(c){if(!c){c=a.getAll(n);var b=d.length,e={};h(c,function(a,c){e[c.substring(b)]=J(a)});return e}return(c=a.get(d+c))?J(c):c};this.set=function(c,b,h){null===b||x(b)?a.remove(d+c):(b=JSON.stringify({v:b}),b=b.substring(5,b.length-1),a.set(d+c,b,x(h)?0:h));return this};this.removeAll=function(){a.removeAll(n);
return this}}function F(a,b,c){function d(c){for(var b={},f="",y=0,d=a.get(c+y,!0);d;)f+=d,y++,d=a.get(c+y,!0);f=decodeURIComponent(f);try{b=JSON.parse(f)}catch(ia){}return b}function n(){f=d(K);v=d(S);da();f[c]=f[c]||{};v[c]=v[c]||{}}function e(c,b,f){b=JSON.stringify(b);var d="{}"===b,y=0,e=0;for(b=encodeURIComponent(b);a.get(c+y,!0);)a.remove(c+y),y++;if(!d)for(d=b.substr(3E3*e,3E3);d;)a.set(c+e,d,x(f)?365:f,!0),e++,d=b.substr(3E3*e,3E3)}function g(){e(K,f);e(S,v,0)}function r(a){var c={};h(a,
function(a,b){c[b]=w(a).v});return c}function da(){var a=(new Date).getTime(),b=f[c];h(b,function(c,f){w(c).e<=a&&delete b[f]});g()}function w(a){var c=a.indexOf("|");return{v:JSON.parse(a.substring(c+1,a.length)),e:a.substring(0,c)}}var f,v;b+=".";var K=b+"store.p.",S=b+"store.s.";c=ea[c]||c||"def";this.get=function(a){n();var b=Q(f[c],v[c]);return a?b[a]?w(b[a]).v:b[a]:r(b)};this.set=function(a,b,d){n();var e=f[c],h=v[c];delete e[a];delete h[a];null===b||x(b)||(d?(b=I(d).getTime()+"|"+JSON.stringify(b),
e[a]=b):h[a]="0|"+JSON.stringify(b));g();return this};this.removeAll=function(){n();f[c]={};v[c]={};g();return this};this.exportData=function(){n();var a={};h(f,function(b,c){a[c]=b});h(v,function(b,c){a[c]=Q(a[c],b)});h(a,function(b,c){h(b,function(b,f){a[c][f]=w(b)})});return a};n()}function L(a,b){function c(a){h([g,r],function(b){for(var c=0;c<b.length;c++){var d=b.key(c);0===d.indexOf(n)&&a(b,d)}})}function d(a,b){var c=(new Date).getTime();b=JSON.parse(b);var d;b&&b.e&&b.e<c?localStorage.removeItem(a):
d=b&&b.v;return d}b=R[b]||b||"def";var n=a+"."+b+".",e=this,g=sessionStorage,r=localStorage;e.get=function(a){if(a){a=n+a;var b=g.getItem(a)||r.getItem(a);a=d(a,b)}else{var f={},e=n.length;c(function(a,b){f[b.substring(e)]=d(b,a.getItem(b))});a=f}return a};e.set=function(a,b,c){a=n+a;if(N(b)){var d=c?r:g;b=JSON.stringify({v:b,e:c?I(c).getTime():void 0});d.setItem(a,b)}else g.removeItem(a),r.removeItem(a);return e};e.removeAll=function(){c(function(a,b){a.removeItem(b)});return e}}function fa(){var a=
this,b=arguments;a.get=function(a){var c;if(a)for(var d=0;d<b.length;d++){var e=b[d].get(a);N(e)&&(c=e)}else{var g=b[0].get();for(a=1;a<b.length;a++)h(b[a].get(),function(a,b){g[b]=x(g[b])?a:g[b]});c=g}return c};a.set=function(c,d,n){h(b,function(a){a.set(c,d,n)});return a};a.removeAll=function(){h(b,function(a){a.removeAll()});return a}}function ga(a){function b(){var a=function(a){var b=new r(f,g,a);w&&(b=new fa(b,new L(g,a)));return b};a.isSecure=q;a.testStorage=c;return a}function c(){var a=(""+
Math.random()).substring(0,5);f.set(g+".tst",a,10);a=f.get(g+".tst",!0)===a?1:0;f.remove(g+".tst");return a}function u(a){var b=(new F(f,g,void 0)).exportData(),c=!1;h(b,function(b,d){var f=a(d);h(b,function(a,b){c=!0;var d=a.e;d=(d=parseInt(d))?(d-(new Date).getTime())/864E5:d;f.set(b,a.v,d)})});return function(){c&&(f.removeAll(g+"\\.store\\.p\\."),f.removeAll(g+"\\.store\\.s\\."))}}function n(a){var b=f.getAll(g+"\\.",!0),c={};h(b,function(b,d){var e=d.split(/\./);if(2<e.length&&"store"!==e[1]){b=
c[e[1]];b||(b=new C(f,g,e[1]),c[e[1]]=b);var h=a(e[1]);d=d.substring((e[0]+"."+e[1]+".").length);b=b.get(d);h.set(d,b,30)}});return function(){h(c,function(a){a.removeAll()})}}var e=a.storageType,g=a.cprefix;if(0>ca("cookie cookie-secure cookie-key-value cookie-key-value-secure cookie-key-value-with-fallback cookie-key-value-secure-with-fallback".split(" "),e))throw"Invalid storage type: "+e;var r=0===e.indexOf("cookie-key-value")?C:F,q=-1!==e.indexOf("-secure"),w=-1!==e.indexOf("-with-fallback");
a=a.cookie_domain||d.location.hostname.replace(/^www\./i,"");var f=new Z({domain:a,secure:q});(function(){var a=g+".|storage";r===C?P(f.getAll(g+"\\.store\\.",!0))?w&&localStorage.getItem(a)!==e&&(n(function(a){return new L(g,a)}),localStorage.setItem(a,e)):u(b())():r!==F||P(f.getAll(g+"\\.",!0))||n(b())()})();this.createBuilder=b}if(!d.mmsystem){var V=d.console||{log:function(){},error:function(){}},R={"mmparams.p":"p","mmparams.d":"d",mmengine:"e"},ea={p:"mmparams.p",d:"mmparams.d",e:"mmengine"},
ha=new function(a){function b(a,b){if(A[a])for(var c=A[a].length-1;0<=c;c--)A[a][c].call({},b)}function c(a){D=q(a,"boolean")?a:!1}function u(a,b,c){c=c||{};c.type="text/javascript";c.id=a;c.src=b;if(D){a=document.getElementsByTagName("head")[0];var k=document.createElement("script");h(c,function(a,b){k.setAttribute(b,a)});a.insertBefore(k,a.lastChild)}else{var m="";h(c,function(a,b){m+=" "+b+'="'+a+'"'});document.write("<script"+m+">\x3c/script>")}}function n(a){if(!q(a,"object"))return a;if(a.constructor===
Array)return a.join(";");var b=[];h(a,function(a,c){a.constructor===Array?h(a,function(a){b.push(c+"="+a)}):b.push(c+"="+encodeURIComponent(a))});return b.join(";")}function e(a){a=a?K(a):{};var b={};q(a["mm-dlp-api"],"string")&&(b.fv={ref:a["original-ref"].substring(0,256),url:a["original-url"].substring(0,1024)},b.origin=/http(s)?:\/\/.*?([^/]|$)+/.exec(b.fv.url)[0]);h(a,function(a,c){"mmcore."===c.substring(0,7)&&(b[c.substring(7)]=a)});return b}function g(){var b="mmRequestCallbacks["+E+"]",c=
{},e=d.screen;c.fv={dmn:a.domain,ref:document.referrer.substring(0,256),url:location.href.substring(0,1024),scrw:e.width,scrh:e.height,clrd:e.colorDepth,cok:l.baseStorage.testStorage()};c.lver="1.18";c.jsncl=b;c.ri=E;c.lto=-(new Date).getTimezoneOffset();c.jrt="inline"===a.executionMode?"f":"s";return c}function r(b,c){var k=b&&b.Packages||[],m=k.length;if(0<m){d.mmInitCallback=function(a){a(l,b,{skipResponseProcessing:!0,skipPersistentData:!0,useLoaderStorage:!0,debug:R});m--;0===m&&(c(),delete d.mmInitCallback)};
for(var e=0;e<k.length;e++)u("mmpack."+e,0===k[e].indexOf("//")?k[e]:a.baseContentUrl+k[e])}else c()}function I(a){(a=document.getElementById(a))&&a.parentNode?a.parentNode.removeChild(a):a&&a.removeAttribute("src")}function w(a,c,e){a=(J[a-1]=c)&&c.PersistData||[];var k=c&&c.SystemData&&c.SystemData[0]&&c.SystemData[0].ResponseId||0;if(k>=L){for(var m=a.length-1;0<=m;m--)l.setParam(a[m].Name,a[m].Value,p.persistent,a[m].Expiration);L=k}if(H(c,"mmcoreResponse")&&B(d,"mmcore"))try{Function(c.mmcoreResponse).call(d)}catch(aa){V.log(aa)}b("response",
c);e(!!c);b("responseExecuted",c);D=!0}function f(a,b){var c="mmrequest."+E;(function(a,b){d.mmRequestCallbacks[a]=function(k){I(c);var m=!1,f=function(){m=!0;1===a?r(k,function(){w(a,k,b);var c=e(document.location.search).origin,m=d.parent;c&&m&&m.postMessage&&m.postMessage(JSON.stringify({hash:"unhide",command:"unhide",data:{}}),c)}):w(a,k,b)};if(0!==T.length){for(var G=0;G<T.length;G++)T[G](k,f);m||(D=!0)}else f();delete d.mmRequestCallbacks[a]}})(E,b);u(c,a,{onerror:"window['mmRequestCallbacks']["+
E+"](false);"});E++}function v(){var a={};return{get:function(b){return b?a[b]:a},set:function(b,c,k){0>parseInt(k)?delete a[b]:a[b]=c},removeAll:function(){a={}}}}function K(a){a=a.split(/[?&]/);for(var b={},c,k,d=0;d<a.length;d++)if(a[d]){c=a[d].split("=");try{k=decodeURIComponent(c[1]||"")}catch(aa){k=c[1]||""}b[c[0]]=k}return b}function S(a){function b(a,b,d){var e;if(e=k[a]){c[a]=b;e=e.split(/;/);for(var m=0;m<e.length;m++){var f=e[m].split("=");(a=f[0].replace(/^\s+|\s+$/gm,""))&&d(b,a,f[1]||
"")}}}var c={},k=K(a);U||(c.pageid=k.pageid);c.jsver=k.jsver;b("uv",{},function(a,b,c){B(a,b)||(a[b]=[]);a[b].push(c)});b("uat",{},function(a,b,c){a[b]=decodeURIComponent(c)});b("ids",{},function(a,b,c){c&&(a[b]=decodeURIComponent(c))});b("rul",[],function(a,b){a.push(b)});return c}function y(){if(B(d,"mmcore")){var b=d.mmcore;b.server=a.srv;l.CGRequestInternal=l.CGRequest;l.CGRequest=function(a,c){U=!0;W=a;X=c;b.CGRequest()};var c=b._Tag;b._Tag=function(d){if(-1===d.indexOf(a.srv))c.apply(b,arguments);
else{b._Clear.call(b);var k=l.mergeParams(X,S(d));ba=D;U||(D=b._async);l.CGRequestInternal(W,k);D=ba;X=W=null;U=!1}};var e=b.SetCookie;b.SetCookie=function(a){/^(mmid|pd|srv)$/.test(a)||e.apply(b,arguments)}}}function C(a,b,c){var d="";0<b.length&&"."!==b.substring(b.length-1)&&(d=".");b=b+d+c;d=a.get(b);q(d,"string")&&d&&(l.setParam(c,d,p.persistent,365),a.remove(b))}function F(a){var b=B(d,"mmcore")&&d.mmcore.cookie_domain?d.mmcore.cookie_domain:H(a,"mmcoreCookieDomain")?a.mmcoreCookieDomain:a.cookie_domain;
a=B(d,"mmcore")&&d.mmcore.cprefix?d.mmcore.cprefix:H(a,"mmcoreCprefix")?a.mmcoreCprefix:a.cprefix+".";b=new Z({domain:b||d.location.hostname.replace(/^www\./i,"")});C(b,a,"pd");C(b,a,"srv");C(b,"","mmid")}function N(a,b){var d=l.getParam,e=function(a,b,c,d){l.setParam(a,b,x(c)?1:c,d)};O(a.beforeInit,{},[d,e,{getParam:d,setParam:e,validateResponses:l.validateResponses,disable:function(){c(!0);z[p.page].set("disabled",1)},enable:function(){1===z[p.page].get("disabled")&&(z[p.page].set("disabled",0),
b())},setAsync:c}]);l.on("request",function(){O(a.beforeRequest,{},[d,e])});l.on("response",function(b){O(a.afterResponse,{},[d,e,b])});l.on("responseExecuted",function(b){O(a.afterResponseExecution,{},[d,e,b])})}function P(a){d.mmcoreInitCallback=function(b){F(a);y();l.CGRequest(function(){M(b)&&b.apply(d.mmcore,arguments)},{});delete d.mmcoreInitCallback};"local"!==a.mmcoreUrl&&u("mmcoreIntegration",a.mmcoreUrl)}function Q(a,b){H(b,"un")&&(a=0===a.indexOf("http:")?a.substring(5):a,a=0===a.indexOf("//")?
"https:"+a:a);return a}this.version="1.18";var l=this,J=[],E=1,D=!1,A={},R={},t=[],z=[],p={persistent:0,deferredRequest:1,request:2,page:3},T=[],L=0,W,X,ba,U=!1;this.baseStorage=(new ga(a)).createBuilder();this.baseStorage.storeStrategy=p;this.mergeParams=function(a,b){a=Y(a)?{}:a;b=Y(b)?{}:b;if(!q(b,"object"))return b;var c={};q(a,"object")&&h(a,function(a,b){c[b]=a});h(b,function(a,d){c[d]=c[d]?c[d].constructor===Array&&b[d].constructor===Array?c[d].concat(a):l.mergeParams(c[d],a):a});return c};
this.CGRequest=function(c,m){c=c||function(){};m=m||{};d.mmRequestCallbacks=d.mmRequestCallbacks||{};b("request");var k=l.mergeParams(g(),l.mergeParams(l.mergeParams(t[p.persistent].get(),l.mergeParams(t[p.deferredRequest].get(),l.mergeParams(t[p.page].get(),t[p.request].get()))),e(location.search))),G=[];m=l.mergeParams(k,m);h(m,function(a,b){G.push(encodeURIComponent(b)+"="+encodeURIComponent(n(a)))});t[p.deferredRequest].removeAll();t[p.request].removeAll();m=Q(a.srv,m);f(m+G.join("&"),c);return this};
this.getResponses=function(){return J};this.setParam=function(a,b,c,d){t[c].set(a,b,x(d)?365:d);return this};this.getParam=function(a,b){return t[b].get(a)};this.removeParam=function(a,b){t[b].set(a,"",-1);return this};this.on=function(a,b){A[a]&&A[a].push(b);return l};this.disable=function(){z[p.persistent].set("disabled",1,0);return this};this.enable=function(){z[p.persistent].set("disabled",null,-1);return this};this.validateResponses=function(a){M(a)&&T.push(a)};(function(a){function b(){if(1!==
z[p.persistent].get("disabled")&&1!==z[p.page].get("disabled")||1<E)H(a,"mmcoreUrl")&&a.mmcoreUrl?P(a):(F(a),l.CGRequest(void 0,{}))}function f(){N(a,b);b()}h(a,function(a,b){l[b]=a});var g=e(document.location.search);if("1"!==g.disabled){l.calcCookieDomain=l.cookie_domain||d.location.hostname.replace(/^www\./i,"");c(a.async);z[p.persistent]=l.baseStorage("ls");z[p.page]=v();t[p.persistent]=l.baseStorage("p");t[p.deferredRequest]=l.baseStorage("d");t[p.request]=v();t[p.page]=v();A.request=[];A.response=
[];A.responseExecuted=[];var k=e(document.referrer).pruh,g=g.pruh,n=d.mmpruh,q=l.getParam("pruh",0),r=(k?k+",":"")+(g?g+",":"")+(n?n+",":"")+(q?q:"");r?(d.mmInitCallback=function(a){a(l,r,f)},u("MM.PRUH",a.baseContentUrl+"utils/pruh.js")):f()}})(a);return this}({
 storageType:'cookie-key-value-secure',
 cprefix:'mmapi',
 domain:'swiss.com',
 baseContentUrl:'//service.maxymiser.net/platform/eu/api/',
 cookie_domain:location.hostname.match(/^[\d.]+$|/)[0]||('.'+(location.hostname.match(/[^.]+\.((eu|us|uk|cn)\.com|\w{2,3}\.\w{2}|\w{2,})$/)||[location.hostname])[0]),
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
});d.mmsystem=new function(a){this.enableUtility=function(b){var c=a.getParam("un",a.baseStorage.storeStrategy.persistent)||"";(new RegExp("(^|,)"+b+"($|,)")).test(c)||(c=c.split(","),c.push(b),a.setParam("un",c.join(",").replace(/(^,)|(,$)/g,""),a.baseStorage.storeStrategy.persistent));return this};this.disableUtility=function(b){var c=a.getParam("un",a.baseStorage.storeStrategy.persistent)||"";(new RegExp("(^|,)"+b+"($|,)")).test(c)&&(c=c.replace(new RegExp("(^|,)"+b+"($|,)","gi"),",").replace(/(^,)|(,$)/g,
""),a.setParam("un",c,a.baseStorage.storeStrategy.persistent));return this};this.enable=function(){a.enable();return this};this.disable=function(){a.disable();return this};this.getConfig=function(){return{storageType:a.storageType,cprefix:a.cprefix,domain:a.domain,baseContentUrl:a.baseContentUrl,cookie_domain:a.cookie_domain,srv:a.srv,async:a.async,beforeInit:a.beforeInit,beforeRequest:a.beforeRequest,afterResponse:a.afterResponse,afterResponseExecution:a.afterResponseExecution}}}(ha)}})(window);
