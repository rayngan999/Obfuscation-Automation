/**
 * [WARNING]
 *   !!! è¯·å¿å°æ¬æä»¶ä¿å­å°æ¨çæå¡å¨ä¸èªè¡æç®¡
 *   !!! å¦åå°é ææ¨çç«ç¹ç»è®¡æ°æ®ä¸åç¡®
 *   !!! DO NOT host this file on your own server
 *   !!! Please follow instructions by 
 *       https://fenxi.360.cn/setting/gencode
 */
window._qha_data=window._qha_data||{domain:187854,host:'s.union.360.cn',gu:'2513897.3395910934332299776.1627948165001.9219',hu: '11%2BYaxBhTW5DPPdfIC7Nqa3EwnpyGx89a2pL9e0i0qn%2FM%3D',e360:'2911509127',pageClk:null,urlClk:0,isExp:0,__FX__EVENT__CONVERSION__:{},mvid:'424352'};
!function(t){var e={}.constructor;e.create=e.create||function(t){function e(){}return e.prototype=t,new e};var n={}.toString;function r(t){return n.call(t)}function o(t){return"[object String]"===r(t)}function i(t){return"[object Array]"===r(t)}function a(t){return"[object Object]"===r(t)}function u(t){return"[object Function]"===r(t)}function c(t,e,n){for(var r in t)t.hasOwnProperty(r)&&(n=e(n,t[r],r,t));return n}function s(t,e){return c(t,(function(n,r,o){return n.push(e(r,o,t)),n}),[])}function f(t,e,n){for(var r=0;r<t.length;r++)n=e(n,t[r],r,t);return n}function l(t,e){f(t,(function(n,r,o){return e(r,o,t)}))}function d(t,e){return f(t,(function(n,r,o){return n.push(e(r,o,t)),n}),[])}var p="constructor",h=function(){},v=function(t){return t},m=""[p],g=h[p],y=/s/[p],_=[].slice,w=u([].indexOf)?function(t,e){return t.indexOf(e)}:function(t,e){if(e!=e)return-1;for(var n=0;n<t.length;n++)if(t[n]===e)return n;return-1};var x=t.document,b=t.location,k=t.navigator,E=t.screen,C=t.history,O=t.Math,j=t.parseInt,q="https:"===b.protocol?"https:":"http:",I=/^(?:mouse|pointer|contextmenu|drag|drop)|click/;function N(e,n,r,o){void 0===o&&(o=!1);var i=function(e){e=function(e){if(e||(e=t.event),!e)throw new Error("`event` is not an object");e.target||(e.target=e.srcElement||x),3===e.target.nodeType&&(e.target=e.target.parentNode);var n=e.button,r=e.type;return I.test(r)&&!e.which&&n&&(e.which=1&n?1:2&n?3:4&n?2:0),e}(e),r.call(this,e)};e.addEventListener?e.addEventListener(n,i,o):e.attachEvent?e.attachEvent("on"+n,i):e["on"+n]=i,r.__dlg=i}function S(t,e,n,r){var o=[],i=function(t){var e=this;(void 0===r||u(r)&&r(t))&&l(o,(function(n){return n.call(e,t)}))},a=!1,c=new Error("Pool has been destoryed.");return N(t,e,i,n),{append:function(t){if(a)throw c;u(t)&&o.push(t)},remove:function(t){if(a)throw c;var e=w(o,t);e>-1&&o.splice(e,1)},destroy:function(){if(a)throw c;!function(t,e,n,r){var o=n.__dlg;t.removeEventListener?t.removeEventListener(e,o,r):t.attachEvent?t.detachEvent("on"+e,o):t["on"+e]=null,o=null,n.__dlg=null,n=null,t=null}(t,e,i,n),o=null,t=null,i=null,a=!0}}}function T(t,e){return/^https?:\/\/[^/?]+$/.test(t)&&(t+="/"),t===e||t.indexOf("*")>-1&&(n=t,new y((r=n,r.replace(/([.*+?^=!:$}{()|[\]/\\])/g,"\\$&")).replace("\\*",".*"))).test(e);var n,r}var A="CSS1Compat"===x.compatMode;function R(){var t=-1,e=x.body,n=x.createElement("div");return n.innderHTML="&nbsp;",n.className="adsbox adwords",e&&(e.appendChild(n),t=0===n.offsetWidth?1:0,e.removeChild(n)),t}function F(e){var n="";try{n=e||t.top.document.referrer}catch(t){}if(""===n)return n;var r=/^https?:\/\/e\.so\.com\/search\/(eclk|mclick)\?/.exec(n);if(r){var o=function(t){var e=t.indexOf("?");if(e<0)return{base:t,param:{}};var n={};return f(t.slice(e+1).split("&"),(function(t,e){var r=e.indexOf("=");if(r>-1){var o=e.slice(0,r),i=e.slice(r+1);n[o]=i}else n[e]="";return t}),n),{base:t.slice(0,e),param:n}}(n),i=o.base,a=o.param,u="mclick"===r[1]?"asin":"p";n=i+"?"+u+"="+(a[u]||"")}else n=n.slice(0,1e3);return n}var U="";if(void 0===x.hidden)for(var P=["webkit","moz","ms","o"],V=0;V<P.length;V++){if(void 0!==x[P[V]+"Hidden"]){U=P[V];break}}var L=""===U?"visibilityState":U+"VisibilityState",D=S(x,U+"visibilitychange",!0);function M(){return void 0===x[L]?"":x[L]}function $(){return"preview"===k.loadPurpose}function B(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];if(!1===a(t))throw new Error(t+" is not an object");return l(e,(function(e){e&&a(e)&&J(e,t)})),t}function J(t,e){var n,r;r=function(t,n){e[n]=t},c(n=t,(function(t,e,o){return r(e,o,n)}))}var X={},z=function(t,e){a(t)?B(X,t):o(t)&&(X[t]=e)};function H(t){void 0===t&&(t={});var e=t.callback,n=t.timeout,r=!1,o=null,i=function(){r||(r=!0,clearTimeout(o),u(e)&&e())};return o=setTimeout(i,+n||1e3),i}function Y(t){if(void 0===t&&(t=null),"object"==typeof JSON&&JSON&&JSON.stringify)return JSON.stringify(t);if(null==t)return"null";if("boolean"==typeof t)return m(t);if("string"==typeof t)return'"'+t+'"';if("number"==typeof t)return isFinite(t)?m(t):"null";if("object"==typeof t){if(i(t)){for(var e=[],n=0;n<t.length;n++)e.push(Y(t[n]));return"["+e.join(",")+"]"}var r=[];for(var o in t)if(t.hasOwnProperty(o)){var a=t[o];void 0!==a&&"function"!=typeof a&&r.push('"'+o+'":'+Y(a))}return"{"+r.join(",")+"}"}return""}var W=/chrome/i.test(k.userAgent),Q=function(t,e){return t+(t.length>0?"&":"")+"_mtd="+e},G=[function(t,e,n){if(u(k.sendBeacon)&&k.sendBeacon(t,e&&Q(e,"bc")))return n&&n(),!0;return!1},function(e,n,r){var o=t.XMLHttpRequest;if(!o)return!1;var i=new o;if("withCredentials"in i==!1)return function(e,n,r){var o=t.XDomainRequest;if(!o)return!1;try{var i=new o,a=Q(n,"xdr");return i.open("POST",e),setTimeout((function(){return i.send(a)})),i.onload=i.onerror=function(){r&&r()},!0}catch(t){return!1}}(e,n,r);try{var a=Q(n,"xhr");return i.open("POST",e,!0),i.withCredentials=!0,i.setRequestHeader("Content-Type","text/plain"),i.onreadystatechange=function(){i.readyState>=2&&r&&r()},i.onerror=function(){r&&r()},i.send(a),!0}catch(t){return!1}},tt],K={image:[2,0,1],xhr:[1,0,2],beacon:[0,2,1]};function Z(t,e,n,r){void 0===n&&(n="image");var o=function(t){if(!1===a(t))throw new Error("target is not plain object");return s(t,(function(t,e){return"object"==typeof t&&(t=Y(t)),t=null==t?"":t,encodeURIComponent(e)+"="+encodeURIComponent(t)})).join("&")}(e);if(o.length<=2048&&"beacon"!==n)return tt(t,o,r);f(n in K?K[n]:[0,1,2],(function(e,n){return e||G[n](t,o,r)}),!1)}function tt(e,n,r){var o="qha_log_"+O.floor(2147483648*O.random()).toString(36),i=new t.Image;t[o]=i,i.onload=i.onerror=i.onabort=function(){i.onload=i.onerror=i.onabort=null,i=t[o]=null,r&&r()},n=W&&n.length>8153?n.slice(8153):n;var a=Q(n,"im");return i.src=function(t,e){var n=t.indexOf("?")>-1?"&":"?";return t+n+e}(e,a),!0}var et={version:"3.2.0",currentPV:null},nt=t._qha_data,rt=B(et,nt,{domainId:nt.domain,pingURL:q+"//"+nt.host+"/s.gif?lts=1"});function ot(){return rt}function it(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];var n=t[0],r=o(t[1])?t[1]:X.transport,i=null;a(t[1])?i=H(t[1]):a(t[2])&&(i=H(t[2]));var c=X.guard,s=ot(),f=[s.pingURL,n,r,i];u(c)&&!0!==c.apply(null,f)||Z.apply(null,f)}var at=function(){return+new Date},ut=function(){return+new Date/1e3|0},ct={get:function(t){t=encodeURIComponent(t);var e=y("(^| )"+t+"=([^;]*)(;|$)").exec(x.cookie);return decodeURIComponent(e?e[2]:"")},set:function(t,e,n){void 0===n&&(n={});var r,o=encodeURIComponent(t)+"="+encodeURIComponent(e),i=n.path,a=n.domain,u=n.expires;o+=u?";expires="+(r=u,new Date(at()+864e5*r)).toUTCString():"",o+=i?";path="+i:"",o+=a?";domain="+a:"";try{x.cookie=o}catch(t){}},del:function(t,e){this.set(t,"",B({expires:-1},e))}};function st(){for(var t=[k.appName,k.version,k.language||k.browserLanguage,k.platform,k.userAgent,E.width,"x",E.height,E.colorDepth,x.referrer].join(""),e=t.length,n=C.length;n;)t+=n--^e++;return(2147483647*(O.round(2147483647*O.random())^function(t){var e=0,n=0,r=t.length-1;for(;r>=0;r--){var o=j(t.charCodeAt(r),10);0!=(n=4261412864&(e=(e<<6&4294967295)+o+(o<<14)))&&(e^=n>>21)}return e}(t))).toString()}var ft=/(msie|trident)/i.test(k.userAgent),lt=x.createElement("a");function dt(t){ft&&(lt.setAttribute("href",t),t=lt.href),lt.setAttribute("href",t);var e=lt.href,n=lt.protocol,r=lt.host,o=lt.search,i=lt.hash,a=lt.hostname,u=lt.port,c=lt.pathname;return{href:e,protocol:n?n.replace(/:$/,""):"",host:r,search:o?o.replace(/^\?/,""):"",hash:i?i.replace(/^#/,""):"",hostname:a,port:u,pathname:"/"===c.charAt(0)?c:"/"+c}}var pt=0,ht=function(t){var e=t.conf,n=t.url,r=t.referrer,o=t.domainId,i=t.ckDomain,a=t.init;void 0===a&&(a=h),this.index=pt++,this.conf=e,this.url=n,this.domainId=o,this.start=ut(),this.referrer=r,this.session=new gt({key:"qs_lvt_"+o,ident:ut(),domain:i,referrer:r}),this.page=new mt({key:"qs_pv_"+o,ident:st(),domain:i,referrer:r}),a.call(this)};ht.prototype.getBaseInfo=function(){var t=function(t){return t.slice(-2).reverse()},e=this.url,n=this.start,r=this.referrer,o=this.domainId,i=this.page,a=this.session,u=this.conf,c=u.gu,s=u.version,f=u.hu,l=t(i.list),d=l[0],p=l[1],h=t(a.list),v=h[0],m=h[1],g={url:e,si:o,su:r,flt:n,lt:v,pt:d,guid:c,huid:f,v:s};return m&&(g.lt2=m),p&&(g.pt2=p),g};var vt=function(t){var e=t.key,n=t.ident,r=t.domain,o=t.referrer,i=t.expires;void 0===i&&(i=365);var a={path:"/",domain:"."+r};this.ckOption=B({expires:i},a);var u=this.migrate(e,a);this.ident=""+n,this.key=u.key,this.list=u.list,this.domain=r,this.referrer=o};vt.prototype.migrate=function(t,e){var n=ct.get(t),r=t.replace(/^[a-z]/,(function(t){return t.toUpperCase()}));""!==n&&""===ct.get(r)&&ct.set(r,n,this.ckOption),ct.del(t,e);var o=ct.get(r);return{key:r,list:""===o?[]:o.split(",")}},vt.prototype.init=function(){var t=this.list,e=this.key,n=this.ident,r=this.ckOption;this.list=t.slice(-4).concat(n),ct.set(e,this.list.join(","),r)};var mt=function(t){function n(e){t.call(this,e),this.init()}return t&&(n.__proto__=t),n.prototype=e.create(t&&t.prototype),n.prototype.constructor=n,n}(vt),gt=function(t){function n(e){t.call(this,e);!function(t,e,n,r){if(!t||!t.length)return!1;var o=j(t[t.length-1],10);if(O.abs(e-o)>28800)return!1;if(function(t,e){var n=dt(t).hostname,r=n.indexOf(e);if(r>=0&&n.slice(r)===e)return!1;return!0}(r,n))return!1;return!0}(this.list,this.ident,this.domain,this.referrer)?(this.isNew=!0,this.init()):this.isNew=!1}return t&&(n.__proto__=t),n.prototype=e.create(t&&t.prototype),n.prototype.constructor=n,n}(vt);for(var yt=(x.domain||location.hostname).split("."),_t="."+yt.pop();yt.length;)if(_t="."+yt.pop()+_t,ct.set("__qhart","1",{domain:_t}),"1"===ct.get("__qhart")){ct.del("__qhart",{domain:_t});break}var wt=_t.slice(1),xt={};function bt(t,e){var n=xt[t]=xt[t]||[];u(e)&&n.push(e)}function kt(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];var r=xt[t];r&&r.length&&l(r,(function(t){return t.apply(void 0,e)}))}xt[1]=[],xt[-1]=[];var Et=function(t){var e=ot(),n=null==e.currentPV;!1===n&&kt(-1,e),e.currentPV=new ht({conf:e,domainId:e.domainId,ckDomain:X.ckDomain||wt,url:t?dt(t).href:b.href,referrer:n?F():e.currentPV.url}),kt(1,e)},Ct={set:z,intlz:z,send:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];"pageview"===t[0]?Et(X.page):it.apply(void 0,t)}},Ot=t._qha_ldt_=(t._qha_ldt_||0)+1;var jt=S(x,"mousedown",!0),qt=null;function It(t){return x.getElementsByTagName(t)}function Nt(t){var e=!1;return function(){if(!e)return e=!0,t.apply(this,arguments)}}function St(e){var n,r,o,i,a,u,c=e.currentPV,s=c.index,f=c.session.isNew,l=e.e360,d=l&&0===s&&f,p=B({et:0,ck:0|!f},(n=E.pixelDepth,r=E.colorDepth,o=E.width,i=E.height,a=k.language,u=k.browserLanguage,{adb:R(),cl:n||r||0,ds:o+"x"+i,ln:a||u||"unknown"})),v=Nt((function(){return t._qha("send",p)}));d?(!function(t,e,n){void 0===e&&(e=h),void 0===n&&(n=h);var r=x.createElement("script");r.type="text/javascript",r.defer=!0,r.async=!0,r.src=t,r.onerror=n,r.onload=e,r.onreadystatechange=function(t){var n=r.readyState;"loaded"!==n&&"complete"!==n||e(t)};var o=It("script")[0];o?o.parentNode.insertBefore(r,o):It("head")[0].appendChild(r)}(q+"//e.so.com/search/c.js?u="+l+"&_="+ +new Date,v,v),setTimeout((function(){v()}),500)):v()}var Tt=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))},At=e.freeze({__proto__:null,default:Tt,__moduleExports:Tt}),Rt=e.getOwnPropertySymbols,Ft=e.prototype.hasOwnProperty,Ut=e.prototype.propertyIsEnumerable;function Pt(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return e(t)}var Vt=function(){try{if(!e.assign)return!1;var t=new String("abc");if(t[5]="de","5"===e.getOwnPropertyNames(t)[0])return!1;for(var n={},r=0;r<10;r++)n["_"+String.fromCharCode(r)]=r;if("0123456789"!==e.getOwnPropertyNames(n).map((function(t){return n[t]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(t){o[t]=t})),"abcdefghijklmnopqrst"===e.keys(e.assign({},o)).join("")}catch(t){return!1}}()?e.assign:function(t,n){for(var r,o,i=arguments,a=Pt(t),u=1;u<arguments.length;u++){for(var c in r=e(i[u]))Ft.call(r,c)&&(a[c]=r[c]);if(Rt){o=Rt(r);for(var s=0;s<o.length;s++)Ut.call(r,o[s])&&(a[o[s]]=r[o[s]])}}return a},Lt=e.freeze({__proto__:null,default:Vt,__moduleExports:Vt}),Dt=new RegExp("%[a-f0-9]{2}","gi"),Mt=new RegExp("(%[a-f0-9]{2})+","gi");function $t(t,e){try{return decodeURIComponent(t.join(""))}catch(t){}if(1===t.length)return t;e=e||1;var n=t.slice(0,e),r=t.slice(e);return Array.prototype.concat.call([],$t(n),$t(r))}function Bt(t){try{return decodeURIComponent(t)}catch(r){for(var e=t.match(Dt),n=1;n<e.length;n++)e=(t=$t(e,n).join("")).match(Dt);return t}}var Jt=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(n){return function(t){for(var n={"%FE%FF":"ï¿½ï¿½","%FF%FE":"ï¿½ï¿½"},r=Mt.exec(t);r;){try{n[r[0]]=decodeURIComponent(r[0])}catch(t){var o=Bt(r[0]);o!==r[0]&&(n[r[0]]=o)}r=Mt.exec(t)}n["%C2"]="ï¿½";for(var i=e.keys(n),a=0;a<i.length;a++){var u=i[a];t=t.replace(new RegExp(u,"g"),n[u])}return t}(t)}},Xt=e.freeze({__proto__:null,default:Jt,__moduleExports:Jt}),zt=At&&Tt||At,Ht=Lt&&Vt||Lt,Yt=Xt&&Jt||Xt;function Wt(t,e){return e.encode?e.strict?zt(t):encodeURIComponent(t):t}function Qt(t){var e=t.indexOf("?");return-1===e?"":t.slice(e+1)}function Gt(t,n){var r=function(t){var e;switch(t.arrayFormat){case"index":return function(t,n,r){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===r[t]&&(r[t]={}),r[t][e[1]]=n):r[t]=n};case"bracket":return function(t,n,r){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==r[t]?r[t]=[].concat(r[t],n):r[t]=[n]:r[t]=n};default:return function(t,e,n){void 0!==n[t]?n[t]=[].concat(n[t],e):n[t]=e}}}(n=Ht({arrayFormat:"none"},n)),o=e.create(null);return"string"!=typeof t?o:(t=t.trim().replace(/^[?#&]/,""))?(t.split("&").forEach((function(t){var e=t.replace(/\+/g," ").split("="),n=e.shift(),i=e.length>0?e.join("="):void 0;i=void 0===i?null:Yt(i),r(Yt(n),i,o)})),e.keys(o).sort().reduce((function(t,n){var r=o[n];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?t[n]=function t(n){return Array.isArray(n)?n.sort():"object"==typeof n?t(e.keys(n)).sort((function(t,e){return Number(t)-Number(e)})).map((function(t){return n[t]})):n}(r):t[n]=r,t}),e.create(null))):o}var Kt={extract:Qt,parse:Gt,stringify:function(t,n){!1===(n=Ht({encode:!0,strict:!0,arrayFormat:"none"},n)).sort&&(n.sort=function(){});var r=function(t){switch(t.arrayFormat){case"index":return function(e,n,r){return null===n?[Wt(e,t),"[",r,"]"].join(""):[Wt(e,t),"[",Wt(r,t),"]=",Wt(n,t)].join("")};case"bracket":return function(e,n){return null===n?Wt(e,t):[Wt(e,t),"[]=",Wt(n,t)].join("")};default:return function(e,n){return null===n?Wt(e,t):[Wt(e,t),"=",Wt(n,t)].join("")}}}(n);return t?e.keys(t).sort(n.sort).map((function(e){var o=t[e];if(void 0===o)return"";if(null===o)return Wt(e,n);if(Array.isArray(o)){var i=[];return o.slice().forEach((function(t){void 0!==t&&i.push(r(e,t,i.length))})),i.join("&")}return Wt(e,n)+"="+Wt(o,n)})).filter((function(t){return t.length>0})).join("&"):""},parseUrl:function(t,e){return{url:t.split("?")[0]||"",query:Gt(Qt(t),e)}}};function Zt(){var t=location.href.substr(location.href.lastIndexOf("?"));return Kt.parse(t).mvosr||""}function te(){var e=document.referrer;if(!e)try{t.opener&&(e=t.opener.location.href)}catch(t){}return e}var ee="".trim,ne=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,re=u(ee)?function(t){return ee.call(t)}:function(t){return t.replace(ne,"")};function oe(t){return!1==(null!=t)?"":re(""+t)}var ie=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;function ae(t){var e,n=oe(""+t);if("object"==typeof JSON&&JSON&&JSON.parse)return JSON.parse(n);var r=null,o=n.replace(ie,(function(t,n,o,i){return e&&n&&(r=0),0===r?t:(e=o||n,r+=!i-!o,"")}));if(n&&!oe(o))return new g("return "+n)();throw new Error("Invalid JSON: "+t)}var ue=/micromessenger/.test(k.userAgent.toLowerCase()),ce=q+"//s.union.360.cn",se=/chrome\/[8|9]\d/i.test(k.userAgent),fe=/QIHU|360SE|360EE/i.test(k.userAgent),le=se&&!fe?"https://360fenxi.mediav.com":q+"//360fenxi.mediav.com",de=!1;function pe(e){var n=e.domain,r=e.currentPV,o=e.mvid;if(o&&!(r.index>0)){if(ue)return he("wx");if(143225!=+n){1===R()&&he("adb");var i=function(t,e){var n=null;try{n=x.createElement('<iframe name="'+e+'"></iframe>')}catch(t){(n=x.createElement("iframe")).name=e}return n.height=0,n.width=0,n.border=0,n.style.display="none",n.src=t,n.onload=null,n},a=ot().isExp,u=a?function(e,n){var r=null;try{r=x.createElement('<iframe name="'+n+'"></iframe>')}catch(t){(r=x.createElement("iframe")).name=n}r.height=0,r.width=0,r.border=0,r.style.display="none",r.src=e;var o=(new Date).getTime();return r.onload=function(){var n=(new Date).getTime()-o;t._qha("send",{et:41,_duration:n,_src:e})},r}(le+"/mediav1130.html",o):i(le+"/mediav1130.html",o),c=i(ce+"/proxy.html",o);if(function(t){var e=t.split(",");me((function(t){return t.indexOf(le)>-1||t.indexOf("https://static-ssl.mediav.com")>-1}),(function(t){return t&&w(e,t)>-1}))}(o),me((function(t){return t.indexOf(ce)>-1}),(function(t){return t&&"mid"===t})),x.body?(x.body.appendChild(u),x.body.appendChild(c)):N(t,"load",(function(){x.body.appendChild(u),x.body.appendChild(c)})),a){var s=Nt((function(){return ve("",",,","",1,0,0)}));setTimeout((function(){de||s()}),500)}}}}var he=function(e){t._qha("send",{et:21,msg:e})},ve=function(e,n,r,o,i,a){de=!0;var u=n.split(","),c=u[0];void 0===c&&(c="");var s=u[1];void 0===s&&(s="");var f=u[2];void 0===f&&(f="");var l=Zt();t._qha("send",{et:40,mvosr:l,eid:e,ep:c,vid:s,ctn:f,vvid:r,_mvnf:o,_mvctn:a,_mvck:i,_refnf:""===te()?1:0})},me=function(e,n){var r=function(r){var o=r.origin,i=r.data;try{var a=ae(i),u=a.vvid;void 0===u&&(u="");var c=a.ctnNotFound;void 0===c&&(c=0);var s=a.isFromCookieMapping;void 0===s&&(s=0);var f=a.ctnExist;void 0===f&&(f=0);var l=a.sendET20;void 0===l&&(l=1);var d=a.sendET40;void 0===d&&(d=0);var p=(""+a.msg).split("|"),h=p[0],v=p[1],m=(""+a.msg2).split("|"),g=m[0],y=m[1],_=ot().isExp;e(o)&&(n(h)||""!==y)&&(_&&d&&!de&&ve(g,y,u,c,s,f),l&&function(e,n,r,o,i,a){if("mid"===e)return t._qha("send",{et:6,mid:n});var u=n.split(","),c=u[0];void 0===c&&(c="");var s=u[1];void 0===s&&(s="");var f=u[2];void 0===f&&(f="");var l=Zt(),d={eid:e,ep:c,vid:s,ctn:f,vvid:r,_mvnf:o,_mvctn:a,_mvck:i,_refnf:""===te()?1:0};ct.set("mediav",Y(d)),t._qha("send",B({et:20,mvosr:l},d))}(h,v,u,c,s,f))}catch(r){}};"postMessage"in t?N(t,"message",r):k._qha_message=function(t){return r({origin:le,data:t})}};function ge(e){var n=e.currentPV.start,r={et:3,ep:ut()-n};t._qha("send",r,"beacon")}function ye(e,n,r){if("send"===e){if(!r||0!==r.index)return;var o=n[0],i=o?o.et:-1;0!==i&&3!==i||B(o,function(){var e={};t._e360_uid&&B(e,{e_uid:t._e360_uid||"",e_cid:t._e360_campaignid||"",e_gid:t._e360_groupid||"",e_yid:t._e360_creativeid||"",e_kid:t._e360_keywordid||"",e_clkid:t._e360_clickid||"",e_type:t._e360_type||"",e_query:t._e360_query||"",e_mtype:t._e360_matchtype||"",e_smtype:t._e360_submatchtype||"",e_requery:t._e360_requery||""});t._e360_commerce&&(e.e_com=t._e360_commerce);t._e360_sip&&(e.e_sip=t._e360_sip);return e}())}}function _e(t,e){if("send"===t){var n=(i=location.href.substr(location.href.lastIndexOf("?")),Kt.parse(i).qhclickid||""),r=e[0],o=r?r.et:-1;(0===o||11===o||o>=30&&40!==o)&&B(r,{qhclickid:n})}var i}var we=[];function xe(e,n,r){!function(t,e,n){if("send"===t){var r=e[0];n&&n.getBaseInfo&&a(r)&&B(r,n.getBaseInfo(),{t:at()})}}(e,n,r),function(t,e){if("send"===t){var n=Zt(),r=e[0],o=r?r.et:-1;40!==o&&(o>=30||11===o)&&B(r,{mvosr:n})}}(e,n),_e(e,n),function(t,e,n){if("send"===t){if(!n||0!==n.index)return;var r=e[0],o=r?r.et:-1;if(o>=30&&40!==o){var i=null;try{i=ae(ct.get("mediav"))}catch(t){}B(r,i)}if(11===o){var a=null;try{(a=ae(ct.get("mediav"))).epso=a.ep,delete a.ep}catch(t){}B(r,a)}}}(e,n,r),ye(e,n,r),function(e,n){if(t.postMessage&&t.top!==t){var r=Y({type:e,args:n});t.top.postMessage(r,"*")}}(e,n),l(we,(function(t){t(e,n,r)}))}var be=function(t){this.cf=t};be.prototype.update=function(t){throw new Error("`update()` method not implemented")},be.prototype.listener=function(t){throw new Error("`listener()` method not implemented")},be.prototype.send=function(e,n){t._qha("send",e,n)};var ke=function(t){function n(e){var n=this;t.call(this,e);var r=e.__FX__EVENT__CONVERSION__||[];this.urlMap=f(r,(function(t,e){var n=e.url,r=e.eid,o=e.etype,i=e.other,a=e.fxext;return t[n]=t[n]||[],t[n].push({eid:r,etype:o,other:i,fxext:a}),t}),{}),this.matchedList=[],this.listener=function(t){n.elementTrack(n.matchedList,t)}}return t&&(n.__proto__=t),n.prototype=e.create(t&&t.prototype),n.prototype.constructor=n,n.prototype.elementTrack=function(t,e){var n=this,r=function(t){for(;t&&!t.id;)t=t.parentNode;return t}(e.target),o=r&&r.id;l(t,(function(t){var e=t.eid,r=t.fxext;o===e&&n.sendToMediaV(e,r)}))},n.prototype.durationTrack=function(t){var e=this;l(t,(function(t){var n=t.other,r=t.fxext,o=n.etime;setTimeout((function(){e.sendToMediaV("",r)}),1e3*o)}))},n.prototype.sendToMediaV=function(t,e){void 0===t&&(t="");var n=Zt(),r=null;try{(r=ae(ct.get("mediav"))).epso=r.ep,delete r.ep}catch(t){}var o=B({et:11,ep:t},r,{mvosr:n});this.send(o)},n.prototype.update=function(){var t=this.urlMap,e=this.cf.currentPV.url;for(var n in t)if(T(n,e)){this.matchedList=t[n].filter((function(t){return 200!=+t.etype}))||[];var r=t[n].filter((function(t){return 200==+t.etype}))||[];return void this.durationTrack(r)}},n}(be),Ee=function(t){function n(e){var n=this;t.call(this,e),e.idClk?(this.map=e.idClk,this.matches=[],this.listener=function(t){var e=function(t){var e=t.id;for(;!e&&(t=t.parentNode);)e=t.id;return t}(t.target),r=e&&e.id;if(r&&w(n.matches,r)>-1){var o=Zt(),i=null;try{(i=ae(ct.get("mediav"))).epso=i.ep,delete i.ep}catch(t){}var a=B({et:11,ep:r},i,{mvosr:o});n.send(a)}}):this.listener=h}return t&&(n.__proto__=t),n.prototype=e.create(t&&t.prototype),n.prototype.constructor=n,n.prototype.update=function(){this.matches=function(t,e){if(!t)return[];var n=c(t,(function(t,n,r){return T(r,e)&&t.push(n),t}),[]).join(",").split(",");return r=n,f(r,(function(t,e){return w(t,e)<0&&t.push(e),t}),[]);var r}(this.map,this.cf.currentPV.url)},n}(be);var Ce=function(n){function r(t){var e=this;n.call(this,t),this.list=t.pageClk,this.trk=!1,this.listener=function(t){e.trk&&e.clk(t)}}return n&&(r.__proto__=n),r.prototype=e.create(n&&n.prototype),r.prototype.constructor=r,r.prototype.update=function(){this.trk=function(t,e){if(!t||0===t.length)return!1;for(var n=0;n<t.length;n++)if(T(t[n],e))return!0;return!1}(this.list,this.cf.currentPV.url)},r.prototype.clk=function(e){var n,r,o=e.clientX,i=e.clientY,a=(n=void 0!==t.pageXOffset,r=A?x.documentElement:x.body,{scrollX:n?t.pageXOffset:r.scrollLeft,scrollY:n?t.pageYOffset:r.scrollTop}),u=a.scrollX,c=a.scrollY,s=function(){var t=A?x.documentElement:x.body;return{width:O.max(t.scrollWidth,t.clientWidth),height:O.max(t.scrollHeight,t.clientHeight)}}(),f=s.width,l=s.height;this.send({et:10,x:o+u,y:i+c,w:f,h:l})},r}(be);var Oe=function(t){function n(e){var n=this;t.call(this,e),this.clk=1==+e.urlClk,this.listener=function(t){return n.clk&&n.resp(t)},this.update=h}return t&&(n.__proto__=t),n.prototype=e.create(t&&t.prototype),n.prototype.constructor=n,n.prototype.resp=function(t){var e=function(t){var e=t.target,n={t:e.nodeName},r=0;for(;r<3&&e&&"A"!==e.nodeName;)r++,e=e.parentNode;return n.u=e&&"A"===e.nodeName?e.href:"",n}(t),n=e.u;n&&!/^\s*javascript:/.test(n)&&this.send({et:2,ep:qe(e,je(t))},"beacon")},n}(be);function je(t){var e=t.pageX;void 0===e&&(e=0);var n=t.pageY;return void 0===n&&(n=0),{x:e,y:n}}function qe(t,e){var n=s(t,(function(t,e){return e+":"+encodeURIComponent(t)})),r=s(e,(function(t,e){return e+":"+encodeURIComponent(t)}));return n.concat(r).join(",")}var Ie=ot(),Ne=function(t){var e,n=i(e=t)?e:e.length&&e.item?d(e,v):_.call(e),r=n[0],o=n.slice(1),a=Ct[r];xe(r,o,Ie.currentPV),u(a)&&a.apply(null,o)},Se=function(){var e;bt(1,pe),bt(1,St),bt(1,(function(){qt&&l(qt,(function(t){return t.update()}))})),bt(-1,ge),N(t,"unload",(function(){kt(-1,Ie)})),e=Ie,qt=d([ke,Oe,Ee,Ce],(function(t){var n=new t(e);return jt.append(n.listener),n}))};(function(){var e=ot(),n=e.domainId,r=e.version,i=function(t){return!(!t||!o(t))&&t.indexOf("//"+e.host+"/"+n+".js")>-1},a=!1,c=0;if(x.currentScript){a=i(x.currentScript.src)}else{for(var s=x.getElementsByTagName("script"),f=0;f<s.length;f++){i(s[f].src)&&(c+=1)}a=Ot<=c}if(a){it({et:100,si:n,ldt:Ot,vis:M(),prv:+$(),guid:e.gu,huid:e.hu,t:at(),v:r},"image")}else{var l=t.console;l&&u(l.warn)&&l.warn("è¯·ä¸è¦èªè¡æç®¡ 360 åæç»è®¡èæ¬ï¼ï¼ï¼")}return a})()&&!$()&&function(t){var e=function(){return"prerender"===M()};if(e()){D.append((function(){!1===e()&&(t(),D.destroy())}))}else t()}((function(){if(!t._qha||1!==t._qha.__){var e=function(){if(!1===u(t._qha)){var e=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return e.c.push(t)};e.c=[],t._qha=e}return t._qha}();if(Se(),e("init",Ie.domainId),t._qha=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return Ne(t)},t._qha.__=1,i(e.c)&&e.c.length){e.s||e.c.unshift(["send","pageview"]);var n=[],r=[];l(e.c,(function(t){"intlz"===t[0]?r.push(t):n.push(t)})),l(r,Ne),l(n,Ne)}}}))}(this);



