(self.AMP=self.AMP||[]).push({n:"amp-resize-observer-polyfill",ev:"0.1",l:true,v:"2107200040000",m:0,f:function(AMP,_){"use strict";function t(f){var g=0;return function(){return g<f.length?{done:!1,value:f[g++]}:{done:!0}}}function B(f){var g="undefined"!=typeof Symbol&&Symbol.iterator&&f[Symbol.iterator];return g?g.call(f):{next:t(f)}}function J(f){(function(g,l){g.ResizeObserver=l()})(f,(function(){function g(b){return b&&b.ownerDocument&&b.ownerDocument.defaultView||u}function l(b,a){for(var c=0,d=Object.keys(a);c<d.length;c++){var e=d[c];Object.defineProperty(b,e,{value:a[e],enumerable:!1,writable:!1,configurable:!0})}return b}function n(b){return parseFloat(b)||0}function k(b){for(var a=[],c=1;c<arguments.length;c++)a[c-1]=arguments[c];return a.reduce((function(d,e){return d+n(b["border-"+e+"-width"])}),0)}function x(b){for(var a={},c=0,d=["top","right","bottom","left"];c<d.length;c++){var e=d[c];a[e]=n(b["padding-"+e])}return a}function v(b){var a=b.getBBox();return w(0,0,a.width,a.height)}function r(b){var a=b.clientWidth,c=b.clientHeight;if(!a&&!c)return C;var d=g(b).getComputedStyle(b),e=x(d),h=e.left+e.right,m=e.top+e.bottom,p=n(d.width),q=n(d.height);"border-box"===d.boxSizing&&(Math.round(p+h)!==a&&(p-=k(d,"left","right")+h),Math.round(q+m)!==c&&(q-=k(d,"top","bottom")+m));if(!y(b)){var D=Math.round(p+h)-a,E=Math.round(q+m)-c;1!==Math.abs(D)&&(p-=D);1!==Math.abs(E)&&(q-=E)}return w(e.left,e.top,p,q)}function y(b){return b===g(b).document.documentElement}function P(b){return z?Q(b)?v(b):r(b):C}function R(b){var a=b.x,c=b.y,d=b.width;b=b.height;var e=Object.create(("undefined"!==typeof DOMRectReadOnly?DOMRectReadOnly:Object).prototype);l(e,{x:a,y:c,width:d,height:b,top:c,right:a+d,bottom:b+c,left:a});return e}function w(b,a,c,d){return{x:b,y:a,width:c,height:d}}function S(b){if("function"===typeof b.getRootNode)return b.getRootNode();for(;b.parentNode;b=b.parentNode);return b}function F(b,a){b=S(b);return 9===b.nodeType||11===b.nodeType?b:a}function T(b,a){function c(){h&&(h=!1,b());m&&e()}function d(){U(c)}function e(){var q=Date.now();if(h){if(2>q-p)return;m=!0}else h=!0,m=!1,setTimeout(d,a);p=q}var h=!1,m=!1,p=0;return e}var A=function(){function b(a,c){var d=-1;a.some((function(e,h){return e[0]===c?(d=h,!0):!1}));return d}return"undefined"!==typeof Map?Map:function(){function a(){this.__entries__=[]}Object.defineProperty(a.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0});a.prototype.get=function(c){c=b(this.__entries__,c);return(c=this.__entries__[c])&&c[1]};a.prototype.set=function(c,d){var e=b(this.__entries__,c);~e?this.__entries__[e][1]=d:this.__entries__.push([c,d])};a.prototype.delete=function(c){var d=this.__entries__;c=b(d,c);~c&&d.splice(c,1)};a.prototype.has=function(c){return!!~b(this.__entries__,c)};a.prototype.clear=function(){this.__entries__.splice(0)};a.prototype.forEach=function(c,d){void 0===d&&(d=null);for(var e=0,h=this.__entries__;e<h.length;e++){var m=h[e];c.call(d,m[1],m[0])}};return a}()}(),u=function(){return"undefined"!==typeof f&&f.Math===Math?f:"undefined"!==typeof self&&self.Math===Math?self:"undefined"!==typeof window&&Math===Math?window:Function("return this")()}(),z="undefined"!==typeof window&&"undefined"!==typeof document&&window.document===document,C=w(0,0,0,0),Q=function(){return"undefined"!==typeof SVGGraphicsElement?function(b){return b instanceof g(b).SVGGraphicsElement}:function(b){return b instanceof g(b).SVGElement&&"function"===typeof b.getBBox}}(),V=function(){function b(a,c){this.broadcastHeight=this.broadcastWidth=0;this.M=w(0,0,0,0);this.target=a;this.rootNode=c}b.prototype.isActive=function(){var a=P(this.target);this.M=a;return a.width!==this.broadcastWidth||a.height!==this.broadcastHeight};b.prototype.broadcastRect=function(){var a=this.M;this.broadcastWidth=a.width;this.broadcastHeight=a.height;return a};return b}(),W=function(){return function(b,a){var c=R(a);l(this,{target:b,contentRect:c})}}(),X="undefined"!==typeof IntersectionObserver,G=function(){function b(a,c,d){var e=this;this.D=[];this.C=new A;this.A=new A;this.h=null;if("function"!==typeof a)throw new TypeError("The callback provided as parameter 1 is not a function.");this.P=a;this.F=c;this.O=d;X&&(this.h=new IntersectionObserver((function(){return e.L()})))}b.prototype.observe=function(a){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(a instanceof g(a).Element))throw new TypeError('parameter 1 is not of type "Element".');var c=this.C;if(!c.has(a)){var d=F(a,a.ownerDocument);c.set(a,new V(a,d));var e=this.A.get(d);e||(e=[],this.A.set(d,e),this.F.addObserver(d,this));e.push(a);this.h&&this.h.observe(a);this.F.refresh(d)}}};b.prototype.unobserve=function(a){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(a instanceof g(a).Element))throw new TypeError('parameter 1 is not of type "Element".');var c=this.C,d=c.get(a);if(d){c.delete(a);this.h&&this.h.unobserve(a);c=d.rootNode;var e=this.A.get(c);if(e){var h=e.indexOf(a);~h&&e.splice(h,1);0===e.length&&(this.A.delete(c),this.F.removeObserver(c,this))}}}};b.prototype.disconnect=function(){var a=this;this.clearActive();this.C.clear();this.A.forEach((function(c,d){a.F.removeObserver(d,a)}));this.A.clear();this.h&&(this.h.disconnect(),this.h=null)};b.prototype.gatherActive=function(){var a=this;this.L();this.clearActive();this.C.forEach((function(c){c.isActive()&&a.D.push(c)}))};b.prototype.broadcastActive=function(){if(this.hasActive()){var a=this.O,c=this.D.map((function(d){return new W(d.target,d.broadcastRect())}));this.P.call(a,c,a);this.clearActive()}};b.prototype.clearActive=function(){this.D.splice(0)};b.prototype.hasActive=function(){return 0<this.D.length};b.prototype.L=function(){var a=this,c=null;this.C.forEach((function(d){var e=d.target,h=d.rootNode;F(e,h)!==h&&(c||(c=[]),c.push(e))}));c&&c.forEach((function(d){a.unobserve(d);a.observe(d)}))};return b}(),U=function(){return"function"===typeof requestAnimationFrame?requestAnimationFrame.bind(u):function(b){return setTimeout((function(){return b(Date.now())}),1e3/60)}}(),Y="top right bottom left width height size weight".split(" "),Z="undefined"!==typeof MutationObserver,aa=function(){function b(a,c){this.K=this.j=!1;this.B=this.o=null;this.G=[];this.N=a;this.T=c;this.H=this.H.bind(this);this.refresh=T(this.refresh.bind(this),20)}b.prototype.addObserver=function(a){~this.G.indexOf(a)||this.G.push(a);this.j||this.R()};b.prototype.removeObserver=function(a){var c=this.G;a=c.indexOf(a);~a&&c.splice(a,1);!c.length&&this.j&&this.S()};b.prototype.refresh=function(){this.U()&&this.refresh()};b.prototype.U=function(){var a=this.G.filter((function(c){return c.gatherActive(),c.hasActive()}));a.forEach((function(c){return c.broadcastActive()}));return 0<a.length};b.prototype.R=function(){if(z&&!this.j){var a=this.N,c=(a.ownerDocument||a).defaultView;a.addEventListener("transitionend",this.H,!0);c&&c.addEventListener("resize",this.refresh,!0);if(Z){this.o=new MutationObserver(this.refresh);try{this.o.observe(a,{attributes:!0,childList:!0,characterData:!0,subtree:!0})}catch(d){}a.host&&this.o.observe(a.host,{attributes:!0,childList:!0,characterData:!0,subtree:!0})}else a.addEventListener("DOMSubtreeModified",this.refresh,!0),this.K=!0;a.host&&(this.B=new G(this.refresh,this.T,this),this.B.observe(a.host));this.j=!0}};b.prototype.S=function(){if(z&&this.j){var a=this.N,c=(a.ownerDocument||a).defaultView;a.removeEventListener("transitionend",this.H,!0);c&&c.removeEventListener("resize",this.refresh,!0);this.o&&this.o.disconnect();this.K&&a.removeEventListener("DOMSubtreeModified",this.refresh,!0);this.B&&this.B.disconnect();this.o=this.B=null;this.j=this.K=!1}};b.prototype.H=function(a){var c=a.propertyName,d=void 0===c?"":c;Y.some((function(e){return!!~d.indexOf(e)}))&&this.refresh()};return b}(),ba=function(){function b(){this.I="undefined"!==typeof WeakMap?new WeakMap:new Map}b.prototype.addObserver=function(a,c){var d=this.I.get(a);d||(d=new aa(a,this),this.I.set(a,d));d.addObserver(c)};b.prototype.removeObserver=function(a,c){(a=this.I.get(a))&&a.removeObserver(c)};b.prototype.refresh=function(a){(a=this.I.get(a))&&a.refresh()};b.getInstance=function(){this.J||(this.J=new b);return this.J};b.J=null;return b}(),H="undefined"!==typeof WeakMap?new WeakMap:new A,I=function(){function b(a){if(!(this instanceof b))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var c=ba.getInstance();c=new G(a,c,this);H.set(this,c)}return b}();["observe","unobserve","disconnect"].forEach((function(b){I.prototype[b]=function(){var a;return(a=H.get(this))[b].apply(a,arguments)}}));return function(){return"undefined"!==typeof u.ResizeObserver?u.ResizeObserver:I}()}))}var K;var L=self.AMP_CONFIG||{},ca=("string"==typeof L.cdnProxyRegex?new RegExp(L.cdnProxyRegex):L.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function M(f){if(self.document&&self.document.head&&(!self.location||!ca.test(self.location.origin))){var g=self.document.head.querySelector('meta[name="'+f+'"]');g&&g.getAttribute("content")}}L.cdnUrl||M("runtime-host");L.geoApiUrl||M("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};function N(f){f=O(f)["amp-resize-observer-polyfill"];f.obj||(f.obj=new f.ctor(f.context),f.context=null,f.resolve&&f.resolve(f.obj))}function O(f){var g=f.__AMP_SERVICES;g||(g=f.__AMP_SERVICES={});return g}function da(f,g){var l=f.ResizeObserver._stub;if(l){delete f.ResizeObserver;delete f.ResizeObserverEntry;g();var n=f.ResizeObserver,k=l._upgraders.slice(0);K||(K=Promise.resolve(void 0));var x=K;var v=function(y){x.then((function(){return y(n)}))};f=B(k);for(var r=f.next();!r.done;r=f.next())v(r.value);l._upgraders={push:v}}else g()}function ea(f){da(f,(function(){J(f)}));return{}}(function(){var f=window,g=f=f.__AMP_TOP||(f.__AMP_TOP=f),l=f,n=O(g),k=n["amp-resize-observer-polyfill"];k||(k=n["amp-resize-observer-polyfill"]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1});k.ctor||(k.ctor=ea,k.context=l,k.sharedInstance=!1,k.resolve&&N(g));N(f)})(self.AMP)}});//# sourceMappingURL=amp-resize-observer-polyfill-0.1.js.map