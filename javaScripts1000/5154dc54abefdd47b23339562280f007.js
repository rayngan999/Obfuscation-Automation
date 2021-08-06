/*
 JavaScript Cookie v2.1.4
 https://github.com/js-cookie/js-cookie

 Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 Released under the MIT license
 http://mths.be/base64 v0.1.0 by @mathias | MIT license */
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,b){a!=Array.prototype&&a!=Object.prototype&&(a[c]=b.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.Symbol=function(){var a=0;return function(c){return $jscomp.SYMBOL_PREFIX+(c||"")+a++}}();
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(a){var c=0;return $jscomp.iteratorPrototype(function(){return c<a.length?{done:!1,value:a[c++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(a){$jscomp.initSymbolIterator();a={next:a};a[$jscomp.global.Symbol.iterator]=function(){return this};return a};$jscomp.makeIterator=function(a){$jscomp.initSymbolIterator();var c=a[Symbol.iterator];return c?c.call(a):$jscomp.arrayIterator(a)};$jscomp.owns=function(a,c){return Object.prototype.hasOwnProperty.call(a,c)};
$jscomp.polyfill=function(a,c,b,d){if(c){b=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var m=a[d];m in b||(b[m]={});b=b[m]}a=a[a.length-1];d=b[a];c=c(d);c!=d&&null!=c&&$jscomp.defineProperty(b,a,{configurable:!0,writable:!0,value:c})}};
$jscomp.polyfill("WeakMap",function(a){function c(a){$jscomp.owns(a,d)||$jscomp.defineProperty(a,d,{value:{}})}function b(a){var f=Object[a];f&&(Object[a]=function(a){c(a);return f(a)})}if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),f=Object.seal({}),c=new a([[b,2],[f,3]]);if(2!=c.get(b)||3!=c.get(f))return!1;c.delete(b);c.set(f,4);return!c.has(b)&&4==c.get(f)}catch(B){return!1}}())return a;var d="$jscomp_hidden_"+Math.random().toString().substring(2);b("freeze");b("preventExtensions");
b("seal");var m=0,g=function(a){this.id_=(m+=Math.random()+1).toString();if(a){$jscomp.initSymbol();$jscomp.initSymbolIterator();a=$jscomp.makeIterator(a);for(var f;!(f=a.next()).done;)f=f.value,this.set(f[0],f[1])}};g.prototype.set=function(a,f){c(a);if(!$jscomp.owns(a,d))throw Error("WeakMap key fail: "+a);a[d][this.id_]=f;return this};g.prototype.get=function(a){return $jscomp.owns(a,d)?a[d][this.id_]:void 0};g.prototype.has=function(a){return $jscomp.owns(a,d)&&$jscomp.owns(a[d],this.id_)};g.prototype.delete=
function(a){return $jscomp.owns(a,d)&&$jscomp.owns(a[d],this.id_)?delete a[d][this.id_]:!1};return g},"es6","es3");$jscomp.MapEntry=function(){};
$jscomp.polyfill("Map",function(a){if(!$jscomp.ASSUME_NO_NATIVE_MAP&&function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var f=Object.seal({x:4}),b=new a($jscomp.makeIterator([[f,"s"]]));if("s"!=b.get(f)||1!=b.size||b.get({x:4})||b.set({x:4},"t")!=b||2!=b.size)return!1;var c=b.entries(),d=c.next();if(d.done||d.value[0]!=f||"s"!=d.value[1])return!1;d=c.next();return d.done||4!=d.value[0].x||"t"!=d.value[1]||!c.next().done?!1:!0}catch(D){return!1}}())return a;$jscomp.initSymbol();
$jscomp.initSymbolIterator();var c=new WeakMap,b=function(a){this.data_={};this.head_=g();this.size=0;if(a){a=$jscomp.makeIterator(a);for(var f;!(f=a.next()).done;)f=f.value,this.set(f[0],f[1])}};b.prototype.set=function(a,b){var f=d(this,a);f.list||(f.list=this.data_[f.id]=[]);f.entry?f.entry.value=b:(f.entry={next:this.head_,previous:this.head_.previous,head:this.head_,key:a,value:b},f.list.push(f.entry),this.head_.previous.next=f.entry,this.head_.previous=f.entry,this.size++);return this};b.prototype.delete=
function(a){a=d(this,a);return a.entry&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.data_[a.id],a.entry.previous.next=a.entry.next,a.entry.next.previous=a.entry.previous,a.entry.head=null,this.size--,!0):!1};b.prototype.clear=function(){this.data_={};this.head_=this.head_.previous=g();this.size=0};b.prototype.has=function(a){return!!d(this,a).entry};b.prototype.get=function(a){return(a=d(this,a).entry)&&a.value};b.prototype.entries=function(){return m(this,function(a){return[a.key,
a.value]})};b.prototype.keys=function(){return m(this,function(a){return a.key})};b.prototype.values=function(){return m(this,function(a){return a.value})};b.prototype.forEach=function(a,b){for(var f=this.entries(),c;!(c=f.next()).done;)c=c.value,a.call(b,c[1],c[0],this)};b.prototype[Symbol.iterator]=b.prototype.entries;var d=function(a,b){var d=b&&typeof b;"object"==d||"function"==d?c.has(b)?d=c.get(b):(d=""+ ++y,c.set(b,d)):d="p_"+b;var f=a.data_[d];if(f&&$jscomp.owns(a.data_,d))for(a=0;a<f.length;a++){var g=
f[a];if(b!==b&&g.key!==g.key||b===g.key)return{id:d,list:f,index:a,entry:g}}return{id:d,list:f,index:-1,entry:void 0}},m=function(a,b){var d=a.head_;return $jscomp.iteratorPrototype(function(){if(d){for(;d.head!=a.head_;)d=d.previous;for(;d.next!=d.head;)return d=d.next,{done:!1,value:b(d)};d=null}return{done:!0,value:void 0}})},g=function(){var a={};return a.previous=a.next=a.head=a},y=0;return b},"es6","es3");
$jscomp.polyfill("Set",function(a){if(!$jscomp.ASSUME_NO_NATIVE_SET&&function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a($jscomp.makeIterator([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var c=d.entries(),g=c.next();if(g.done||g.value[0]!=b||g.value[1]!=b)return!1;g=c.next();return g.done||g.value[0]==b||4!=g.value[0].x||g.value[1]!=g.value[0]?!1:c.next().done}catch(y){return!1}}())return a;
$jscomp.initSymbol();$jscomp.initSymbolIterator();var c=function(a){this.map_=new Map;if(a){a=$jscomp.makeIterator(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.map_.size};c.prototype.add=function(a){this.map_.set(a,a);this.size=this.map_.size;return this};c.prototype.delete=function(a){a=this.map_.delete(a);this.size=this.map_.size;return a};c.prototype.clear=function(){this.map_.clear();this.size=0};c.prototype.has=function(a){return this.map_.has(a)};c.prototype.entries=function(){return this.map_.entries()};
c.prototype.values=function(){return this.map_.values()};c.prototype.keys=c.prototype.values;c.prototype[Symbol.iterator]=c.prototype.values;c.prototype.forEach=function(a,d){var b=this;this.map_.forEach(function(c){return a.call(d,c,c,b)})};return c},"es6","es3");
(function(){var a,c;function b(a,e){return e={exports:{}},a(e,e.exports),e.exports}function d(a){var e=a.condition,h=a.success,b=a.finish,c=a.fail,f=a.wait,u=a.tries;e()?(h(),b&&b()):0<u?setTimeout(function(){d({condition:e,success:h,fail:c,finish:b,wait:f,tries:u-1})},f):(c&&c(),b&&b())}function m(a){return a.filter(function(a){return L.some(function(e){return!!a.match(e)})}).map(function(a){a=a.split("key\x3d")[1];return M(decodeURIComponent(a)).split("\x26").filter(function(a){return!!a.match("article\x3d")}).map(function(a){return a.replace("article\x3d",
"")})[0]})}function g(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var e=16*Math.random()|0;return("x"===a?e:e&3|8).toString(16)})}function y(){return window.location.pathname+window.location.search}function f(){return window[window.GoogleAnalyticsObject]}function K(a){return function(e){"trackEloquaEmail"===e&&d({condition:function(){return!!C()},success:B(a),tries:10,wait:500})}}function B(a){return function(){var e=new Image(1,1),h=C();h={event:"lead",event_id:g(),
nc_analytics_id:a.ncAnalyticsId,se_action:"identified",se_category:"eloqua",se_label:h,user_id:a.userId};var b=[];for(c in h)h.hasOwnProperty(c)&&b.push(encodeURIComponent(c)+"\x3d"+encodeURIComponent(h[c].toString()));var c=b.join("\x26");c=N(c);e.src="https://t.newscred.com/i?v0\x3d"+c}}function C(){return window.GetElqContentPersonalizationValue&&window.GetElqContentPersonalizationValue("V_ElqEmailAddress")}function D(){f()||function(a,e,b,c,d,f,u){a.GoogleAnalyticsObject=d;a[d]=a[d]||function(){(a[d].q=
a[d].q||[]).push(arguments)};a[d].l=1*(new Date).getTime();f=e.createElement(b);u=e.getElementsByTagName(b)[0];f.async=1;f.src=c;u.parentNode.insertBefore(f,u)}(window,document,"script","//www.google-analytics.com/analytics.js","ga")}function O(a){var e=window;e.dataLayer=e.dataLayer||[];e.dataLayer.push({"gtm.start":(new Date).getTime(),event:"gtm.js"});e=document.getElementsByTagName("script")[0];var h=document.createElement("script");h.async=!0;h.src="https://www.googletagmanager.com/gtm.js?id\x3d"+
a+"";e.parentNode.insertBefore(h,e)}function v(a){var e=typeof a;return!!a&&("object"==e||"function"==e)}function E(a){if("number"==typeof a)return a;var e=a;if("symbol"==typeof e||e&&"object"==typeof e&&"[object Symbol]"==P.call(e))return F;v(a)&&(e=a.valueOf,e=v(e)?Q.call(e):"",a="[object Function]"==e||"[object GeneratorFunction]"==e?a.valueOf():a,a=v(a)?a+"":a);if("string"!=typeof a)return 0===a?a:+a;a=a.replace(R,"");return(e=S.test(a))||T.test(a)?U(a.slice(2),e?2:8):V.test(a)?F:+a}function W(a,
e,b){function c(e){var b=r,c=g;r=g=void 0;w=e;return x=a.apply(c,b)}function d(a){var b=a-t;a-=w;return void 0===t||b>=e||0>b||l&&a>=q}function h(){var a=Date.now();if(d(a))return f(a);var b=setTimeout;var c=a-w;a=e-(a-t);c=l?X(a,q-c):a;k=b(h,c)}function f(a){k=void 0;if(m&&r)return c(a);r=g=void 0;return x}function p(){var a=Date.now(),b=d(a);r=arguments;g=this;t=a;if(b){if(void 0===k)return w=a=t,k=setTimeout(h,e),n?c(a):x;if(l)return k=setTimeout(h,e),c(t)}void 0===k&&(k=setTimeout(h,e));return x}
var r,g,x,k,t,w=0,n=!1,l=!1,m=!0;if("function"!=typeof a)throw new TypeError("Expected a function");e=E(e)||0;if(v(b)){n=!!b.leading;var q=(l="maxWait"in b)?Y(E(b.maxWait)||0,e):q;m="trailing"in b?!!b.trailing:m}p.cancel=function(){void 0!==k&&clearTimeout(k);w=0;r=t=g=k=void 0};p.flush=function(){return void 0===k?x:f(Date.now())};return p}function H(a,e,b){var c=!0,d=!0;if("function"!=typeof a)throw new TypeError("Expected a function");v(b)&&(c="leading"in b?!!b.leading:c,d="trailing"in b?!!b.trailing:
d);return W(a,e,{leading:c,maxWait:e,trailing:d})}function z(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function Z(b){a=document.getElementsByClassName("nc_pixel")[0];c=aa;var e=H(function(){if(a&&c.length&&z()+a.getBoundingClientRect().top)for(var e=(z()+(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0)||1)/(z()+a.getBoundingClientRect().top)*100;e>=c[0];)b(c.shift())},250);e();return e}function ba(a){return function(e){return a.sendEvent({eventCategory:e.category,
eventAction:e.action,eventLabel:e.label,eventValue:e.value,hitType:"event",nonInteraction:!1})}}function I(){n.setUserId(q.getUserId());n.setMarketoToken(q.getMarketoToken());n.setPardotVisitorId(q.getPardotVisitorId());d({condition:function(){return!!J()},fail:function(){n.setArticleGuid("(not set)");n.setPreviousArticleGuid(q.getPreviousGuid());n.trackPageview()},success:function(){var a=J();q.setPreviousGuid(a);n.setArticleGuid(a);n.setPreviousArticleGuid(a);n.trackPageview();(new ca(n)).run()},
tries:da,wait:150})}function J(){var a=[].slice.call(document.getElementsByTagName("img")).map(function(a){return a.src});a=m(a);if(0===a.length)return null;a.slice();return a[0]||null}function ea(){"loading"!==document.readyState?I():document.addEventListener("readystatechange",function(){"interactive"===document.readyState&&I()})}var da=Math.floor(20),L=["pixel.newscred.com/px.gif","pixel.welcomesoftware.com/px.gif"],aa=[0,10,20,30,40,50,60,70,80,90,100],fa=new Set(["bd7620b5e4b14c2b85a93dcedb45a668",
"c1ed4ee25a5d46609efa303313f1de40","5c7821bb46bb4eccb0b9accf31f2e9fd","ef481a0752cf45069b43d22bd0298549","f423eedeef384d16aff9dcb5dc6916f0"]),A="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},ha=b(function(a,e){a.exports=function(){function a(){for(var a=0,e={};a<arguments.length;a++){var b=arguments[a],c;for(c in b)e[c]=b[c]}return e}function e(b){function c(e,d,h){if("undefined"!==typeof document){if(1<arguments.length){h=a({path:"/"},c.defaults,
h);if("number"===typeof h.expires){var f=new Date;f.setMilliseconds(f.getMilliseconds()+864E5*h.expires);h.expires=f}h.expires=h.expires?h.expires.toUTCString():"";try{var g=JSON.stringify(d);/^[\{\[]/.test(g)&&(d=g)}catch(G){}d=b.write?b.write(d,e):encodeURIComponent(String(d)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent);e=encodeURIComponent(String(e));e=e.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent);e=e.replace(/[\(\)]/g,escape);g="";for(var k in h)h[k]&&
(g+="; "+k,!0!==h[k]&&(g+="\x3d"+h[k]));return document.cookie=e+"\x3d"+d+g}e||(g={});k=document.cookie?document.cookie.split("; "):[];for(var t=/(%[0-9A-Z]{2})+/g,r=0;r<k.length;r++){var p=k[r].split("\x3d"),l=p.slice(1).join("\x3d");'"'===l.charAt(0)&&(l=l.slice(1,-1));try{f=p[0].replace(t,decodeURIComponent);l=b.read?b.read(l,f):b(l,f)||l.replace(t,decodeURIComponent);if(this.json)try{l=JSON.parse(l)}catch(G){}if(e===f){g=l;break}e||(g[f]=l)}catch(G){}}return g}}c.set=c;c.get=function(a){return c.call(c,
a)};c.getJSON=function(){return c.apply({json:!0},[].slice.call(arguments))};c.defaults={};c.remove=function(e,b){c(e,"",a(b,{expires:-1}))};c.withConverter=e;return c}return e(function(){})}()});b(function(a,e){(function(b){var c=a&&a.exports==e&&a,d="object"==typeof A&&A;if(d.global===d||d.window===d)b=d;var h=function(a){this.message=a};h.prototype=Error();h.prototype.name="InvalidCharacterError";var f=/[\t\n\f\r ]/g;d={encode:function(a){a=String(a);if(/[^\0-\xFF]/.test(a))throw new h("The string to be encoded contains characters outside of the Latin1 range.");
for(var e=a.length%3,b="",c=-1,d,f,g,p=a.length-e;++c<p;)d=a.charCodeAt(c)<<16,f=a.charCodeAt(++c)<<8,g=a.charCodeAt(++c),d=d+f+g,b+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(d>>18&63)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(d>>12&63)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(d>>6&63)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(d&63);2==e?(d=a.charCodeAt(c)<<8,f=a.charCodeAt(++c),
d+=f,b+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(d>>10)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(d>>4&63)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(d<<2&63)+"\x3d"):1==e&&(d=a.charCodeAt(c),b+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(d>>2)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(d<<4&63)+"\x3d\x3d");return b},decode:function(a){a=String(a).replace(f,
"");var e=a.length;0==e%4&&(a=a.replace(/==?$/,""),e=a.length);if(1==e%4||/[^+a-zA-Z0-9/]/.test(a))throw new h("Invalid character: the string to be decoded is not correctly encoded.");for(var b=0,c,d,g="",p=-1;++p<e;)d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(a.charAt(p)),c=b%4?64*c+d:d,b++%4&&(g+=String.fromCharCode(255&c>>(-2*b&6)));return g},version:"0.1.0"};if(e&&!e.nodeType)if(c)c.exports=d;else for(var g in d)d.hasOwnProperty(g)&&(e[g]=d[g]);else b.base64=d})(A)});
var M=window.atob||void 0,ia=function(){for(var a=0,e=document.domain||"",b=e.split("."),c="_gd"+(new Date).getTime();a<b.length-1&&-1===document.cookie.indexOf(c+"\x3d"+c);)e=b.slice(-1-++a).join("."),document.cookie=c+"\x3d"+c+";domain\x3d"+e+";";document.cookie=c+"\x3d;expires\x3dThu, 01 Jan 1970 00:00:01 GMT;domain\x3d"+e+";";return e}(),ja=function(){function a(){this.lib=ha;this.root=ia;this.generateId=g}a.prototype.getPreviousGuid=function(){return this.lib.get("nc-previous-guid")||"(not set)"};
a.prototype.setPreviousGuid=function(a){this.lib.set("nc-previous-guid",a,{expires:1,domain:this.root})};a.prototype.getUserId=function(){var a=this.lib.get("__ncuid");a||(a=this.generateId(),this.lib.set("__ncuid",a,{expires:365,domain:this.root}));return a};a.prototype.getMarketoToken=function(){return this.lib.get("_mkto_trk")||"(not set)"};a.prototype.getPardotVisitorId=function(){return this.lib.get("visitor_id")||"(not set)"};a.prototype._unsafeDependencyOverride=function(a,
c,b){this.lib=a;this.root=c;this.generateId=function(){return b}};return a}(),N=window.btoa||void 0,ka=function(){function a(a,c,b,d,h){void 0===b&&(b=!1);void 0===d&&(d=f);void 0===h&&(h=y);this.getGa=d;this.getUrl=h;this.getGa()("create",{cookieDomain:"auto",cookieExpires:31536E3,name:"ncAudienceInsightsGa",trackingId:c});this.getGa()("ncAudienceInsightsGa.set","dimension12",a);this.getGa()("ncAudienceInsightsGa.set","anonymizeIp",b);this.setUrl();this.pageviewTracked=!1}a.prototype.trackPageview=
function(){this.pageviewTracked||(this.pageviewTracked=!0,this.setUrl(),this.getGa()("ncAudienceInsightsGa.send","pageview"))};a.prototype.sendEvent=function(a){this.getGa()("ncAudienceInsightsGa.send",a)};a.prototype.setUserId=function(a){this.getGa()("ncAudienceInsightsGa.set","dimension15",a)};a.prototype.setMarketoToken=function(a){this.getGa()("ncAudienceInsightsGa.set","dimension13",a)};a.prototype.setPardotVisitorId=function(a){this.getGa()("ncAudienceInsightsGa.set","dimension16",a)};a.prototype.setArticleGuid=
function(a){this.getGa()("ncAudienceInsightsGa.set","dimension1",a)};a.prototype.setPreviousArticleGuid=function(a){this.getGa()("ncAudienceInsightsGa.set","dimension14",a)};a.prototype.setUrl=function(){this.getGa()("ncAudienceInsightsGa.set","page",this.getUrl())};return a}(),Q=Object.prototype.toString,P=Object.prototype.toString,F=0/0,R=/^\s+|\s+$/g,V=/^[-+]0x[0-9a-f]+$/i,S=/^0b[01]+$/i,T=/^0o[0-7]+$/i,U=parseInt,Y=Math.max,X=Math.min,la=function(){function a(){this.clear()}a.prototype.start=
function(){this.running||(this.running=!0,this.lastStartTime=(new Date).getTime())};a.prototype.stop=function(){this.running&&(this.running=!1,this.totalElapsedTime+=(new Date).getTime()-this.lastStartTime);return this.totalElapsedTime};a.prototype.clear=function(){this.running=!1;this.totalElapsedTime=0};a.prototype.getElapsedTime=function(){var a=this.stop();this.start();return a};return a}(),ca=function(){function a(a){this.ncGaTracker=a;this.stopwatch=new la;this.lastEngagedTimeSent=0;this.specialEngagedEventSent=
!1;this.activityInterval=null}a.prototype.run=function(){var a=this,b=H(function(){return a.onActive()},750);window.addEventListener("scroll",b);window.addEventListener("mousemove",b);document.addEventListener("click",b);document.addEventListener("keydown",b);window.addEventListener("beforeunload",function(){return a.onBeforeUnload()});b=Z(function(b){return a.sendScrollEvent(b)});window.addEventListener("scroll",b)};a.prototype.documentIsActive=function(){return!document.hidden&&document.hasFocus()};
a.prototype.onActive=function(){var a=this;this.documentIsActive()&&(this.stopwatch.start(),clearInterval(this.activityInterval),this.activityInterval=window.setTimeout(function(){return a.onInactive()},5E3))};a.prototype.onInactive=function(){var a=this.stopwatch.stop();!this.specialEngagedEventSent&&3E4<a&&(this.sendEngagementEvent(3E4),this.specialEngagedEventSent=!0);1E4<=a-this.lastEngagedTimeSent&&this.sendEngagementEvent(a)};a.prototype.onBeforeUnload=function(){var a=this.stopwatch.stop();
this.sendEngagementEvent(a)};a.prototype.sendEngagementEvent=function(a){this.lastEngagedTimeSent=a;this.ncGaTracker.sendEvent({eventAction:"engaged",eventCategory:"page",eventLabel:a.toString(),hitType:"event",nonInteraction:!0})};a.prototype.sendScrollEvent=function(a){this.ncGaTracker.sendEvent({eventAction:a,eventCategory:"scroll-depth",hitType:"event",nonInteraction:!0})};return a}(),q=new ja;window.__ncconfig="";var n;window.ncAudienceInsights=window.ncAudienceInsights||
function(){if(!window.__nctesting){D();var a=fa.has("bedc07d840c44bff9f05386c5d933010");n=new ka("bedc07d840c44bff9f05386c5d933010","UA-150713566-22",a);a=K({ncAnalyticsId:"bedc07d840c44bff9f05386c5d933010",userId:q.getUserId()});ea();window.__ncconfig&&O(window.__ncconfig);return{tracker:a,trackEvent:ba(n),getUserId:function(){return q.getUserId()}}}}()})();