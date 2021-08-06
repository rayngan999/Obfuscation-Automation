window.demandSupplySc='HK';window.demandSupplyCr='HCW';window.demandSupplySr=51;window.houseAdCampaigns=["relabe"];window.demandSupplyTi='efab2adc-3341-4521-bbfa-bb5f459a5c76';window.demandSupplyTc=null;(function(){function v(b,a,e){if(null==b)throw new TypeError("The 'this' value for String.prototype."+e+" must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype."+e+" must not be a regular expression");return b+""}var x="function"==typeof Object.defineProperties?Object.defineProperty:function(b,a,e){if(b==Array.prototype||b==Object.prototype)return b;b[a]=e.value;return b};function y(b){b=["object"==typeof globalThis&&globalThis,b,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var a=0;a<b.length;++a){var e=b[a];if(e&&e.Math==Math)return e}throw Error("Cannot find global object");}var A=y(this);function B(b,a){if(a){var e=A;b=b.split(".");for(var h=0;h<b.length-1;h++){var l=b[h];l in e||(e[l]={});e=e[l]}b=b[b.length-1];h=e[b];a=a(h);a!=h&&null!=a&&x(e,b,{configurable:!0,writable:!0,value:a})}}
B("String.prototype.startsWith",function(b){return b?b:function(a,e){var h=v(this,a,"startsWith");a+="";var l=h.length,p=a.length;e=Math.max(0,Math.min(e|0,h.length));for(var c=0;c<p&&e<l;)if(h[e++]!=a[c++])return!1;return c>=p}});B("Array.prototype.find",function(b){return b?b:function(a,e){a:{var h=this;h instanceof String&&(h=String(h));for(var l=h.length,p=0;p<l;p++){var c=h[p];if(a.call(e,c,p,h)){a=c;break a}}a=void 0}return a}});B("Object.is",function(b){return b?b:function(a,e){return a===e?0!==a||1/a===1/e:a!==a&&e!==e}});B("Array.prototype.includes",function(b){return b?b:function(a,e){var h=this;h instanceof String&&(h=String(h));var l=h.length;e=e||0;for(0>e&&(e=Math.max(e+l,0));e<l;e++){var p=h[e];if(p===a||Object.is(p,a))return!0}return!1}});B("String.prototype.includes",function(b){return b?b:function(a,e){return-1!==v(this,a,"includes").indexOf(a,e||0)}});function C(b){var a=0;return function(){return a<b.length?{done:!1,value:b[a++]}:{done:!0}}}function D(b){var a="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];return a?a.call(b):{next:C(b)}}
B("Promise",function(b){function a(c){this.f=0;this.l=void 0;this.b=[];var g=this.i();try{c(g.resolve,g.reject)}catch(k){g.reject(k)}}function e(){this.a=null}function h(c){return c instanceof a?c:new a(function(g){g(c)})}if(b)return b;e.prototype.o=function(c){if(null==this.a){this.a=[];var g=this;this.s(function(){g.H()})}this.a.push(c)};var l=A.setTimeout;e.prototype.s=function(c){l(c,0)};e.prototype.H=function(){for(;this.a&&this.a.length;){var c=this.a;this.a=[];for(var g=0;g<c.length;++g){var k=c[g];c[g]=null;try{k()}catch(m){this.C(m)}}}this.a=null};e.prototype.C=function(c){this.s(function(){throw c;})};a.prototype.i=function(){function c(m){return function(r){k||(k=!0,m.call(g,r))}}var g=this,k=!1;return{resolve:c(this.O),reject:c(this.j)}};a.prototype.O=function(c){if(c===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(c instanceof a)this.P(c);else{a:switch(typeof c){case "object":var g=null!=c;break a;case "function":g=!0;break a;default:g=!1}g?this.N(c):this.v(c)}};a.prototype.N=function(c){var g=void 0;try{g=c.then}catch(k){this.j(k);return}"function"==typeof g?this.R(g,c):this.v(c)};a.prototype.j=function(c){this.w(2,c)};a.prototype.v=function(c){this.w(1,c)};a.prototype.w=function(c,g){if(0!=this.f)throw Error("Cannot settle("+c+", "+g+"): Promise already settled in state"+this.f);this.f=c;this.l=g;this.I()};a.prototype.I=function(){if(null!=this.b){for(var c=0;c<this.b.length;++c)p.o(this.b[c]);this.b=null}};var p=new e;a.prototype.P=function(c){var g=this.i();c.g(g.resolve,g.reject)};a.prototype.R=function(c,g){var k=this.i();try{c.call(g,k.resolve,k.reject)}catch(m){k.reject(m)}};a.prototype.then=function(c,g){function k(d,f){return"function"==typeof d?function(n){try{m(d(n))}catch(q){r(q)}}:f}var m,r,w=new a(function(d,f){m=d;r=f});this.g(k(c,m),k(g,r));return w};a.prototype.catch=function(c){return this.then(void 0,c)};a.prototype.g=function(c,g){function k(){switch(m.f){case 1:c(m.l);break;case 2:g(m.l);break;default:throw Error("Unexpected state: "+
m.f);}}var m=this;null==this.b?p.o(k):this.b.push(k)};a.resolve=h;a.reject=function(c){return new a(function(g,k){k(c)})};a.race=function(c){return new a(function(g,k){for(var m=D(c),r=m.next();!r.done;r=m.next())h(r.value).g(g,k)})};a.all=function(c){var g=D(c),k=g.next();return k.done?h([]):new a(function(m,r){function w(n){return function(q){d[n]=q;f--;0==f&&m(d)}}var d=[],f=0;do d.push(void 0),f++,h(k.value).g(w(d.length-1),r),k=g.next();while(!k.done)})};return a});B("Symbol",function(b){function a(l){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new e("jscomp_symbol_"+(l||"")+"_"+h++,l)}function e(l,p){this.A=l;x(this,"description",{configurable:!0,writable:!0,value:p})}if(b)return b;e.prototype.toString=function(){return this.A};var h=0;return a});B("Symbol.iterator",function(b){if(b)return b;b=Symbol("Symbol.iterator");for(var a="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),e=0;e<a.length;e++){var h=A[a[e]];"function"===typeof h&&"function"!=typeof h.prototype[b]&&x(h.prototype,b,{configurable:!0,writable:!0,value:function(){return E(C(this))}})}return b});function E(b){b={next:b};b[Symbol.iterator]=function(){return this};return b}
function F(b,a){b instanceof String&&(b+="");var e=0,h={next:function(){if(e<b.length){var l=e++;return{value:a(l,b[l]),done:!1}}h.next=function(){return{done:!0,value:void 0}};return h.next()}};h[Symbol.iterator]=function(){return h};return h}B("Array.prototype.keys",function(b){return b?b:function(){return F(this,function(a){return a})}});(function(){function b(d,f){f=void 0===f?{}:f;var n=p(d.data,d);n=d.url+(n?"?"+n:"");var q=new window.XMLHttpRequest;q.open(d.method||"GET",n,!0);d=new Promise(function(t,u){q.onreadystatechange=function(){if(4===q.readyState)return 300>q.status?t(this.responseText):f.X?t():u(Error(this.responseText))}});q.send();return d}function a(d){var f=document.createElement("script");f.type="text/javascript";f.src=d;return f}function e(){try{return new Function("(a = 0) => a"),new Function("class A {}"),new Function("for (const a of [1]) {}"),!0}catch(d){return!1}}function h(d,f){f=void 0===f?{}:f;var n=void 0===f.host?c.c:f.host;f=void 0===f.D?window:f.D;try{var q=f.performance.getEntries().filter(function(u){return u.name.startsWith(n+d)}),t=q.find(function(u){return m.includes(u.initiatorType)});return t?{duration:Math.round(t.duration),G:l(t,q),responseEnd:Math.round(t.responseEnd)}:null}catch(u){return null}}function l(d,f){return function(){return f.some(function(n){return!m.includes(n.initiatorType)})}()?"s":void 0===d.transferSize?"n":0===d.transferSize?"a":d.transferSize<d.encodedBodySize||0===d.encodedBodySize?"b":"c"}function p(d,f){d=void 0===d?{}:d;return(Object.keys(d).map(function(n){return encodeURIComponent(n)+"="+encodeURIComponent(f.data[n])}).join("&")+("&dsReferer="+btoa(location.href))).substring(0,1E3)}var c={},g={bv:"13.4.1",bfu:"https://live.demand.supply"},k=g.bv;c.c=g.bfu;c.F=k;var m=["script","link","iframe"],r={h:function(d){this.m(d,{path:"x",u:"ce"})},m:function(d,f){var n=f.path,q=f.u;f=f.J;var t=new window.XMLHttpRequest;t.open("HEAD",c.c+("/"+n+"/e.js?"+q+"="+d)+((f?"&"+f:"")+("&dsReferer="+btoa(location.href))).substring(0,1E3),!0);t.send()}},w={T:function(){var d=h("/up.js");this.B("ll",d?"d="+d.duration+"&cs="+d.G:"nd=1")},W:function(){r.h("rl")},U:function(){r.h("mle")},V:function(){r.h("bnl")},B:function(d,f){r.m(d,{path:"e",u:"e",J:void 0===f?"":f})}};g={K:function(){[c.c+"/"+((e()?"impl":"impl-legacy")+".v"+c.F)+".js"].concat(["https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js","https://securepubads.g.doubleclick.net/tag/js/gpt.js"]).forEach(function(d){document.getElementsByTagName("head")[0].appendChild(a(d))});setTimeout(function(){demandSupply.surge&&demandSupply.surge.mainLoaded||w.V()},1E4)}};k={L:function(){var d=window.location.href.replace(window.location.protocol+"//","");document.getElementsByTagName("head")[0].appendChild(a(c.c+"/p4/v12-6-0/"+btoa(d)))},M:function(){var d=new XMLHttpRequest;d.open("GET",c.c+"/ds.2.html");d.send()}};try{window.demandSupply?w.W():(window.demandSupply={},w.T(),g.K(),k.L(),k.M())}catch(d){w.U()}g=function(){return{load:function(){return!function(d,f,n,q,t,u,z){f[d]||(f[d]={},f[d].init=function(){f[d]._Q.push(["i",arguments])},f[d].fetchBids=function(){f[d]._Q.push(["f",arguments])},f[d].setDisplayBids=function(){},f[d].targetingKeys=function(){return[]},f[d]._Q=[],u=n.createElement(q),u.async=!0,u.src=t,z=n.getElementsByTagName(q)[0],z.parentNode.insertBefore(u,z))}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js")},S:function(){window.apstag.init({pubID:"66ef05f7-ad53-48f6-873a-ac7543370392",adServer:"googletag",bidTimeout:2E3})}}}();g.load();g.S();demandSupply.upmp=function(){return b({url:"https://live.demand.supply/uamp.1.json"}).then(function(d){return JSON.parse(d)}).catch(function(d){console.log("err",d);return{}})}()})();}).call(window)