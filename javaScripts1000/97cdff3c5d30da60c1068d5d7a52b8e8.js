(window.webpackJsonp1627920242903=window.webpackJsonp1627920242903||[]).push([[2,14],{102:function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return u}));e(0),e(4),e(12),e(2),e(8),e(66);var r=e(163);var i={calculateOffset:function(n){return r.calculateOffset(n)},calculateSize:function(n){return r.calculateSize(n)}};function u(n){var t;try{t=r.calculateOffset(n)}catch(n){t={top:0,left:0}}var e=r.calculateSize(n);return{width:0|e.x,height:0|e.y,offsetTop:0|t.top,offsetLeft:0|t.left}}},118:function(n,t,e){"use strict";e.d(t,"a",(function(){return s})),e.d(t,"c",(function(){return g})),e.d(t,"b",(function(){return h})),e.d(t,"d",(function(){return p}));var r=e(0),i=e(49),u=e(15),o=e(7),a=e(4),c=e(33),d=e(32),f=e(75),l=e(40);function v(n){var t=n.publisher.baseSrcEvaluable;if(void 0===t)return r.a(c.b,void 0);var e=t.expression;return r.b(d.a.IO_fm.let_,r.b(c.d,(function(n){return f.d(void 0,void 0,void 0,e,n)}),f.a.$$default),(function(n){if("number"==typeof n)return r.a(c.b,void 0);if(1!==n.TAG)return r.a(c.b,void 0);var t=n._0;return 0===t.TAG?r.a(c.b,u.g(t._0)):r.a(c.b,void 0)}))}var s=i.b.getSrc;function m(n,t){var e=s(t);return void 0!==e?r.a(c.b,e):v(n)}function g(n){return r.b(d.a.IO_fm.let_,l.config,(function(n){return r.b(d.a.IO_m.let_,r.b(d.a.IO_m.let_,c.c,(function(n){return o.d(n.location.href.split("#"),0)})),(function(t){var e=a.e(n.urlContext,(function(n){return n.canonicalUrl})),r=void 0!==e?e:a.m(a.m(a.m(t,(function(n){return n.split("?")[0]})),(function(n){return n.replace(/^https?:\/\//,"")})),(function(n){return n.replace(/^[^.]*\.(?=\w+\.\w+)/,"")}));return{url:t,canonicalUrl:r,canonicalDomain:a.m(r,(function(n){var t=n.lastIndexOf("/");return n.substr(0,t)}))}}))}))}function b(n){return r.b(d.a.IO_fm.let_,l.config,(function(t){return r.b(d.a.IO_fm.let_,m(t,n),(function(e){return r.b(d.a.IO_m.let_,function(n,t){return r.b(c.O,m(n,t),(function(n){return a.m(n,(function(n){return n.replace(/^https?:\/\/.*?\//,"/")}))}))}(t,n),(function(n){return{src:e,canonicalSrc:n}}))}))}))}function h(n){return r.b(d.a.IO_fm.let_,g(),(function(t){return r.b(d.a.IO_m.let_,b(n),(function(n){return{url:t,image:n}}))}))}var p=r.b(d.a.IO_fm.let_,l.config,(function(n){return r.b(c.Y,r.b(c.Q,v(n),void 0),(function(n){return r.a(c.A,void 0)}))}))},130:function(n,t,e){"use strict";function r(n,t,e){var r=void 0!==t?t:0,i=Math.pow(10,r);return Math.trunc(n*i)/i}function i(n,t,e,r){return void 0!==t?void 0!==e?Math.max(t,Math.min(e,n)):Math.max(t,n):void 0!==e?Math.min(e,n):n}e.d(t,"b",(function(){return r})),e.d(t,"a",(function(){return i}))},131:function(n,t,e){"use strict";e.d(t,"b",(function(){return d})),e.d(t,"a",(function(){return f})),e.d(t,"c",(function(){return l})),e.d(t,"d",(function(){return v}));var r=e(0),i=e(7),u=e(4),o=e(33),a=e(32);function c(n,t){var e=void 0!==n?n:2,i=[];return r.b(a.a.IO_fm.let_,t,(function(n){return function(n){i.push(n),i.length>e&&i.shift()}(n),r.a(o.b,i)}))}function d(n){return r.b(a.a.IO_m.let_,c(2,n),(function(n){return u.j(i.d(n,1),0)-u.j(i.d(n,0),0)}))}function f(n,t){var e=void 0!==n?n:2;return r.b(a.a.IO_m.let_,c(e,r.b(o.O,d(t),(function(n){return Math.abs(n)}))),(function(n){return i.j(n,0,(function(n,t){return n+t}))/e}))}function l(n){var t=n.defaultView;return r.b(o.Y,r.b(a.a.IO_m.let_,r.a(o.v,(function(t,e){var i=function(n){return r.a(e.emit,void 0)};r.a(e.emit,void 0),n.addEventListener("scroll",i);var u=setInterval(i,200);return function(t){n.removeEventListener("scroll",i),clearInterval(u)}})),(function(n){return function(n){return n.scrollY/n.innerHeight}(t)})),(function(n){return r.a(o.A,void 0)}))}var v=r.b(a.a.IO_fm.let_,o.a,l)},163:function(n,t,e){"use strict";function r(n,t){return e=n.getPropertyValue(t),r=parseFloat(e.split("px")[0]),isNaN(r)?0:r;var e,r}Object.defineProperty(t,"__esModule",{value:!0}),t.capitalize=t.calculateSize=t.calculateOffset=void 0,t.calculateOffset=function(n){var t=n.offsetParent,e=t.getBoundingClientRect();if(!t)return{top:0,left:0};var i=function(n){var t;if("none"!=window.getComputedStyle(n).transform)return n.getBoundingClientRect();var e=null===(t=n.offsetParent)||void 0===t?void 0:t.getBoundingClientRect();return{top:n.offsetTop+((null==e?void 0:e.top)||0),left:n.offsetLeft+((null==e?void 0:e.left)||0)}}(n),u=n.ownerDocument.defaultView.getComputedStyle(n),o=t.ownerDocument.defaultView.getComputedStyle(t);if(!u)throw new Error("cannot calculate element dimensions:\n      "+(n?n.tagName:"no element")+" parent: "+n.parentElement);var a=function(n){var t=r(u,"padding-"+n),a="top"===n&&"border-box"===u.boxSizing&&u.paddingTop===u.height?0:t;return i[n]-e[n]+a-r(o,"border-"+n+"-width")+r(u,"border-"+n+"-width")};return{top:a("top"),left:a("left")}},t.calculateSize=function(n){var t=n.ownerDocument.defaultView.getComputedStyle(n),e={x:r(t,"width")-r(t,"border-left-width")-r(t,"border-right-width"),y:r(t,"height")-r(t,"border-top-width")-r(t,"border-bottom-width")};return"content-box"!==t.boxSizing&&(e.x-=r(t,"padding-right"),e.x-=r(t,"padding-left"),e.y-=r(t,"padding-bottom"),e.y-=r(t,"padding-top")),0===e.y&&(e.y=r(t,"padding-top"),e.y+=r(t,"padding-bottom")),e},t.capitalize=function(n){return n&&n.length?""+n.charAt(0).toUpperCase()+n.substring(1,n.length).toLocaleLowerCase():""}},36:function(n,t,e){"use strict";e.d(t,"d",(function(){return w})),e.d(t,"m",(function(){return O})),e.d(t,"x",(function(){return A})),e.d(t,"j",(function(){return I})),e.d(t,"p",(function(){return S})),e.d(t,"f",(function(){return G})),e.d(t,"e",(function(){return C})),e.d(t,"w",(function(){return x})),e.d(t,"o",(function(){return j})),e.d(t,"r",(function(){return L})),e.d(t,"n",(function(){return F})),e.d(t,"l",(function(){return D})),e.d(t,"s",(function(){return W})),e.d(t,"v",(function(){return R})),e.d(t,"t",(function(){return z})),e.d(t,"u",(function(){return P})),e.d(t,"c",(function(){return V})),e.d(t,"i",(function(){return k})),e.d(t,"a",(function(){return E})),e.d(t,"k",(function(){return M})),e.d(t,"q",(function(){return N})),e.d(t,"g",(function(){return q})),e.d(t,"b",(function(){return $})),e.d(t,"h",(function(){return B}));var r=e(0),i=e(37),u=e(15),o=e(130),a=e(18),c=e(7),d=e(4),f=e(42),l=e(2),v=(e(8),e(33)),s=e(38),m=e(131),g=e(118),b=e(32),h=e(75),p=e(40),_=e(54),T=e(117),y=e(102);function w(n){if(0!==n.TAG)return n.config;var t=n.name;return{id:t,name:t,type:_.a.toString(n.type_),gallery:void 0,deferred:void 0,refreshTime:void 0,evaluable:{expression:"return true"},additionalRenderingData:void 0,adserverId:1234,products:[],adSpaces:[]}}function O(n){return 0===n.TAG?n.name:n.config.name}function A(n,t){if(0===n.TAG)return{TAG:0,type_:n.type_,tagged:n.tagged,slot:n.slot,deferred:n.deferred,name:t,adsCount:n.adsCount};var e=n.config;return{TAG:1,foundPosition:n.foundPosition,tagged:n.tagged,slot:n.slot,config:{id:e.id,name:t,type:e.type,gallery:e.gallery,deferred:e.deferred,refreshTime:e.refreshTime,evaluable:e.evaluable,additionalRenderingData:e.additionalRenderingData,adserverId:e.adserverId,products:e.products,adSpaces:e.adSpaces},infiniteScroll:n.infiniteScroll,adsCount:n.adsCount}}function I(n){if(0===n.TAG)return n.deferred;var t=n.config.deferred;return!(void 0===t||!t)}function S(n){return 0===n.TAG?12744009:n.config.adserverId}function G(n){return n.tagged}function C(n){return n.slot}function x(n,t){n.slot=l.c(t)}function j(n){return g.a(G(n))}function L(n){return 0===n.TAG?n.type_:d.o(n.config.type,0,(function(n){return f.h(_.a.decoder(i.n(n)),0)}))}function H(n){return n.adsCount}function D(n){return Math.max(0,H(n)-1|0)}function W(n){n.adsCount=n.adsCount+1|0}function R(n){n.adsCount=0}function z(n){return new RegExp("^aggressive").test(O(n))}function P(n){return r.b(v.h,v.c,(function(t){return s.d.atf(t,G(n))}))}function V(n){try{var t=G(n),e=t.ownerDocument.defaultView;if(1===L(n))return{width:e.innerWidth,height:e.innerHeight,offsetTop:0,offsetLeft:0};var r,i=y.b(t);try{r=function(n){var t,e={expression:"return 0"},r={addToHeight:e,addToLeft:e,addToTop:e,addToWidth:e},i=function(n){var t=h.e(n.expression);if("number"==typeof t)return 0;if(1!==t.TAG)return 0;var e=t._0;return 0===e.TAG?0|d.j(u.e(e._0),0):0};return{addToHeight:i((t=0===n.TAG?r:d.j(n.config.additionalRenderingData,r)).addToHeight),addToLeft:i(t.addToLeft),addToTop:i(t.addToTop),addToWidth:i(t.addToWidth)}}(n)}catch(n){r={addToHeight:0,addToLeft:0,addToTop:0,addToWidth:0}}return{width:i.width+r.addToWidth|0,height:i.height+r.addToHeight|0,offsetTop:i.offsetTop+r.addToTop|0,offsetLeft:i.offsetLeft+r.addToLeft|0}}catch(n){return{width:400,height:300,offsetTop:0,offsetLeft:0}}}function k(n,t){var e=void 0!==n?n:200,i=d.e(C(t),(function(n){return l.b(n.querySelector("iframe"))}));return void 0!==i?r.a(v.b,l.d(i)):r.b(b.a.IO_fm.let_,r.a(v.ib,e),(function(n){return k(e,t)}))}function E(n,t,e,i,u){var o=void 0!==n?l.d(n):void 0,a=r.b(v.g,T.a(d.j(o,G(u)),i,e,void 0),(function(n){return r.a(v.b,n[0])}));if(void 0===t)return a;var c=m.b(m.d);return r.b(v.C,r.b(v.V,a,c),(function(n){return Math.abs(n[1])>t?void 0:n[0]}))}function M(n){return 0!==n.TAG&&n.infiniteScroll}function N(n){return r.b(b.a.IO_fm.let_,p.config,(function(t){var e=G(n),i=t.urlContext;return void 0!==i?r.b(b.a.IO_m.let_,g.b(e),(function(n){return d.m(c.e(d.j(i.images,[]),(function(t){return a.a(t.canonicalSrc,n.image.canonicalSrc)})),(function(n){return n.taggingConfiguration.campaigns}))})):r.a(v.b,void 0)}))}function q(n){return r.b(b.a.IO_m.let_,v.c,(function(t){var e=t.innerHeight,r=n.getBoundingClientRect();return(r.top+r.height/2-e/2)/e}))}function $(n){return 0===n.TAG?void 0:n.foundPosition}function B(n){var t=function(n){return o.b(n,2,void 0)};return r.b(b.a.IO_fm.let_,r.b(v.O,r.b(v.gb,T.a(n,3,void 0,void 0),1),(function(n){return o.b(n[1],2,void 0)})),(function(e){return r.b(b.a.IO_fm.let_,r.b(v.O,q(n),t),(function(i){return r.b(b.a.IO_fm.let_,r.b(v.O,function(n){return r.b(b.a.IO_m.let_,v.c,(function(t){var e=n.getBoundingClientRect(),r=t.innerHeight-(0|e.height)|0;return.5+(e.top-r/2)/r}))}(n),t),(function(n){return r.a(v.b,[e,i,n])}))}))}))}var F=H},54:function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var r=e(37),i=e(42);function u(n){switch(n){case 0:return"inImage";case 1:return"inScreen";case 2:return"inImageRestricted";case 3:return"inPlayer";case 4:return"inVideo";case 5:return"inGallery";case 6:return"oldGallery";case 7:return"inArticle"}}function o(n){switch(n){case"inArticle":return 7;case"inGallery":return 5;case"inImage":return 0;case"inImageRestricted":return 2;case"inPlayer":return 3;case"inScreen":return 1;case"inVideo":return 4;case"oldGallery":return 6;default:return}}function a(n){return i.e(r.m(n),(function(t){var e=o(t);return void 0!==e?{TAG:0,_0:e}:r.e(void 0,"productType decode error",n)}))}var c={toString:u,fromString:o,encoder:function(n){return r.n(u(n))},decoder:a,t_encode:function(n){return r.n(u(n))},t_decode:a}},69:function(n,t,e){"use strict";e.r(t),e.d(t,"start",(function(){return v})),e.d(t,"templateSelected",(function(){return s}));var r=e(0),i=e(4),u=e(33),o=e(81),a=e(32),c=e(75),d=e(40),f=e(58),l=r.b(o.a,"template",void 0),v=r.b(a.a.IO_fm.let_,o.d(l,void 0),(function(n){return r.b(a.a.IO_fm.let_,c.a.$$default,(function(n){return r.b(a.a.IO_fm.let_,d.config,(function(t){var e=t.publisher.templates.sort((function(n,t){return i.j(t.priority,0)-i.j(n.priority,0)|0}));return r.b(a.a.IO_fm.let_,r.a(u.F,r.b(a.a.IO_fm.let_,r.a(u.ib,5e3),(function(n){return r.b(a.a.IO_fm.let_,o.b(l),(function(n){return void 0!==n?r.a(u.b,void 0):r.b(u.f,f.f,{LAZY_DONE:!1,VAL:function(){return r.a(u.b,void 0)}})}))}))),(function(t){return r.b(a.a.IO_fm.let_,r.b(u.gb,r.b(a.a.IO_fm.let_,r.a(u.N,100),(function(t){return r.b(a.a.IO_fm.let_,r.a(u.G,e),(function(t){var e=t.condition.expression;return r.b(a.a.IO_fm.let_,r.b(u.i,c.d(void 0,void 0,void 0,e,n),c.b.isConsideredTruthy),(function(n){return r.a(u.b,t)}))}))})),1),(function(n){return r.b(a.a.IO_fm.let_,o.d(l,n),(function(t){return r.b(a.a.IO_fm.let_,r.a(f.g,n),(function(t){return r.a(u.b,n)}))}))}))}))}))}))})),s=r.b(u.gb,r.b(u.g,o.c(l),a.a.$$Option.lift),1)},75:function(n,t,e){"use strict";e.d(t,"c",(function(){return w})),e.d(t,"a",(function(){return O})),e.d(t,"b",(function(){return S})),e.d(t,"d",(function(){return x})),e.d(t,"e",(function(){return j}));var r=e(0),i=e(14),u=e(15);var o=e(7),a=e(4),c=e(2),d=(e(8),e(33)),f=e(38),l=e(9),v=e(98),s=e(32),m=e(37),g=e(49),b=e(19),h=e(122);function p(n){var t=u.a(n);if("number"==typeof t)return m.e(void 0,"Not an object",n);if(2!==t.TAG)return m.e(void 0,"Not an object",n);var e=t._0,r=m.k(m.h,a.j(i.d(e,"minWidth"),null));if(0===r.TAG){var o=m.k(m.h,a.j(i.d(e,"minHeight"),null));if(0===o.TAG){var c=m.k(m.h,a.j(i.d(e,"minContent"),null));if(0===c.TAG){var d=m.k(m.m,a.j(i.d(e,"debug"),null));if(0===d.TAG)return{TAG:0,_0:{minWidth:r._0,minHeight:o._0,minContent:c._0,debug:d._0}};var f=d._0;return{TAG:1,_0:{path:".debug"+f.path,message:f.message,value:f.value}}}var l=c._0;return{TAG:1,_0:{path:".minContent"+l.path,message:l.message,value:l.value}}}var v=o._0;return{TAG:1,_0:{path:".minHeight"+v.path,message:v.message,value:v.value}}}var s=r._0;return{TAG:1,_0:{path:".minWidth"+s.path,message:s.message,value:s.value}}}function _(n,t,e,r){var i=void 0!==n?n:200,u=void 0!==t?t:75,o=void 0!==e?e:200,c=p(r);if(0!==c.TAG)return{minWidth:i,minHeight:u,minContent:o,debug:void 0};var d=c._0;return{minWidth:a.j(d.minWidth,i),minHeight:a.j(d.minHeight,u),minContent:a.j(d.minContent,o),debug:d.debug}}var T=e(57);function y(n,t,e,i,u){var d=i?"handheld":"desktop",l=function(n){return!(!T.hasProperSize(n,u,i)||r.a(t,n))&&T.hasValidSrc(void 0)(n)},v=function(t){var r=void 0!==n?c.d(n).querySelectorAll(t):e.querySelectorAll(t);return o.g(f.d.slice(r),l)};return{select:v,adunits:v,getDevice:function(n){return d},query:function(n){return e.querySelectorAll(n)},gallery:function(n,t,e){return function(n,t,e){var r=void 0!==n?n:0,i=void 0!==t?t:0;return e.reduce((function(n,t,e){var u=n[0];if(e<r)return[u,e];var o=n[1];return e===r||(1+(o+i|0)|0)===e?[u.concat([t]),e]:[u,o]}),[[],0])[0]}(t,e,v(n))},article:function(n,t){return a.j(a.m(c.b(e.querySelector(n)),(function(n){return function(n,t){var e=_(void 0,void 0,void 0,a.j(t,null)),r=a.e(h.a(n.ownerDocument),(function(n){return c.b(n.defaultView)})),i=void 0!==r?f.d.viewport(c.d(r)).height:0,u=Array.prototype.slice.call(n.querySelectorAll("P")),d=function(n){return a.j(a.m(n,(function(n){return"p"===n.nodeName.toLowerCase()})),!1)},l=function(n,t){var r=n.getBoundingClientRect(),u=r.width,o=r.top,a=r.height,f=(0|u)>=e.minWidth&&(0|a)>=e.minHeight&&(0|o)>i&&n.textContent.length>=e.minContent&&d(c.c(n));return t&&console.log(["SmartPlacement : "+(f?"OK":"KO"),n,b.i((0|u)>=e.minWidth)+" : width >= "+String(e.minWidth),b.i((0|a)>=e.minHeight)+" : height >= "+String(e.minHeight),b.i((0|o)>i)+" : BTF",b.i(n.textContent.length>=e.minContent)+" : textLength > "+String(e.minContent),b.i(d(c.c(n)))+" : is textNode"]),f};return o.d(u.filter((function(n){var t,r=e.debug;if(void 0!==r){var i=document.querySelector(r);t=null!=i&&n===i}else t=!1;return!!l(n,t)&&a.j(a.m(g.b.nextElementSibling(n),(function(n){return l(n,t)})),!1)})),0)}(n,t)})),void 0)}}}var w={make:y},O={$$default:r.b(d.h,d.kb,(function(n){return{href:n,version:2}}))};function A(n){return f.d.isDomElement(n)?{TAG:1,_0:n}:{TAG:0,_0:n}}function I(n){try{return null==n?0:Array.isArray(n)||f.d.isDomNodeList(n)?{TAG:2,_0:Array.from(n).map(A)}:{TAG:1,_0:A(n)}}catch(n){return{TAG:0,_0:l.b(n)}}}var S={asJsOrDom:A,asExpressionResult:I,isConsideredTruthy:function(n){if("number"==typeof n)return!1;switch(0|n.TAG){case 0:return!1;case 1:var t=n._0;if(0!==t.TAG)return!0;var e=t._0,r=u.c(e),i=u.g(e);return!(void 0!==r&&!r)&&""!==i;case 2:return 0!==n._0.length}},isCollection:function(n){return"number"!=typeof n&&2===n.TAG}},G={};function C(n,t,e,r,u,o,a,d,f){var v=void 0!==n?c.d(n):void 0,s=void 0!==t?t:function(n){return!1},m=void 0!==d?c.d(d):T.defaultSizeLimits;try{var g,b=i.d(G,e);if(void 0!==b)g=c.d(b);else{var h=new window.Function("environment","lib","greg","window","document",e);G[e]=h,g=h}var p=y(v,s,o,a,m);return I(g(r,p,p,u,o,e))}catch(n){return{TAG:0,_0:l.b(n)}}}function x(n,t,e,i,u){var o=void 0!==n?c.d(n):void 0,a=void 0!==t?t:function(n){return!1},l=void 0!==e?c.d(e):T.defaultSizeLimits;return f.h(r.b(s.a.IO_fm.let_,d.c,(function(n){return r.b(s.a.IO_fm.let_,d.a,(function(t){return r.b(s.a.IO_m.let_,d.w,(function(e){return C(c.c(o),a,i,u,n,t,e[0],c.c(l))}))}))})))}function j(n){return C(void 0,void 0,n,{href:window.location.href,version:2},window,document,v.f(void 0)?1:0,void 0)}}}]);