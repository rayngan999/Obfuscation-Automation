(self.AMP=self.AMP||[]).push({n:"amp-fit-text",ev:"0.1",l:true,v:"2107200040000",m:0,f:function(AMP,_){"use strict";var g="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function m(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object")})()}m(this);"function"===typeof Symbol&&Symbol("x");var n;if("function"==typeof Object.setPrototypeOf)n=Object.setPrototypeOf;else{var p;a:{var q={a:!0},r={};try{r.__proto__=q;p=r.a;break a}catch(a){}p=!1}n=p?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var t=n;function u(a){var b=parseFloat(a);return"number"===typeof b&&isFinite(b)?b:void 0}var v,w="Webkit webkit Moz moz ms O o".split(" ");function x(a,b,c){if(b.startsWith("--"))return b;v||(v=Object.create(null));var d=v[b];if(!d||c){d=b;if(void 0===a[b]){var e=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var f=0;f<w.length;f++){var h=w[f]+e;if(void 0!==a[h]){e=h;break a}}e=""}var k=e;void 0!==a[k]&&(d=k)}c||(v[b]=d)}return d}function y(a,b,c){(b=x(a.style,b,void 0))&&(b.startsWith("--")?a.style.setProperty(b,c):a.style[b]=c)}
/* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function z(a,b){var c=[];for(a=a.firstChild;a;a=a.nextSibling)b(a)&&c.push(a);return c}function A(a){return z(a,(function(b){if("string"==typeof b)var c=b;else b.nodeType===Node.ELEMENT_NODE&&(c=b.tagName);b=c&&c.toLowerCase().startsWith("i-")?!0:b.nodeType!==Node.ELEMENT_NODE?!1:b.hasAttribute("placeholder")||b.hasAttribute("fallback")||b.hasAttribute("overflow");return!b}))}function B(a,b){function c(h){f=null;e=a.setTimeout(d,100);b.apply(null,h)}function d(){e=0;f&&c(f)}var e=0,f=null;return function(h){for(var k=[],l=0;l<arguments.length;++l)k[l-0]=arguments[l];e?f=k:c(k)}}function C(a){a=AMP.BaseElement.call(this,a)||this;a.o=null;a.h=null;a.j=null;a.C=-1;a.B=-1;a.A=null;a.D="";return a}var D=AMP.BaseElement;C.prototype=g(D.prototype);C.prototype.constructor=C;if(t)t(C,D);else for(var E in D)if("prototype"!=E)if(Object.defineProperties){var F=Object.getOwnPropertyDescriptor(D,E);F&&Object.defineProperty(C,E,F)}else C[E]=D[E];C.F=D.prototype;C.prerenderAllowed=function(){return!0};C.prototype.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};C.prototype.buildCallback=function(){var a=this,b=this.element,c=G(b.ownerDocument,b),d=c.contentWrapper,e=c.measurer;this.o=c.content;this.h=d;this.j=e;this.C=u(b.getAttribute("min-font-size"))||6;this.B=u(b.getAttribute("max-font-size"))||72;Object.defineProperty(this.element,"textContent",{set:function(f){a.D=f;a.mutateElement((function(){a.h.textContent=f;H(a.h,a.j);I(a)}))},get:function(){return a.D||a.h.textContent}})};C.prototype.isRelayoutNeeded=function(){return!0};C.prototype.layoutCallback=function(){var a=this;if(this.win.ResizeObserver&&null===this.A){var b=new this.win.ResizeObserver(B(this.win,(function(){return a.mutateElement((function(){H(a.h,a.j);I(a)}))})));b.observe(this.o);b.observe(this.j);this.A=function(){b.disconnect()}}return this.mutateElement((function(){I(a);var e,c={visibility:"visible"},d=a.o.style;for(e in c)d.setProperty(x(d,e),String(c[e]),"important")}))};C.prototype.unlayoutCallback=function(){null!==this.A&&(this.A(),this.A=null)};function I(a){var b=a.o.offsetHeight,c=a.j;var d=a.o.offsetWidth;var e=a.C,f=a.B;for(f++;1<f-e;){var h=Math.floor((e+f)/2);y(c,"fontSize",h+"px");var k=c.offsetWidth;c.offsetHeight>b||k>d?f=h:e=h}d=e;y(a.h,"fontSize",d+"px");c=a.h;a=a.j;y(a,"fontSize",d+"px");a=a.offsetHeight>b;d*=1.15;e=Math.floor(b/d);c.classList.toggle("i-amphtml-fit-text-content-overflown",a);a={lineClamp:a?e:"",maxHeight:a?d*e+"px":""};for(var l in a)y(c,l,a[l])}function G(a,b){var c=a.createElement("div");c.classList.add("i-amphtml-fill-content");c.classList.add("i-amphtml-fit-text-content");var d=a.createElement("div");d.classList.add("i-amphtml-fit-text-content-wrapper");c.appendChild(d);a=a.createElement("div");a.classList.add("i-amphtml-fit-text-measurer");A(b).forEach((function(e){return d.appendChild(e)}));H(d,a);b.appendChild(c);b.appendChild(a);return{content:c,contentWrapper:d,measurer:a}}function H(a,b){for(;b.firstChild;)b.removeChild(b.firstChild);var c=b.ownerDocument.createDocumentFragment();for(a=a.firstChild;a;a=a.nextSibling)c.appendChild(a.cloneNode(!0));b.appendChild(c)}(function(a){a.registerElement("amp-fit-text",C,".i-amphtml-fit-text-content,.i-amphtml-fit-text-content.i-amphtml-fill-content{display:block;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:center;justify-content:center}.i-amphtml-fit-text-content{z-index:2!important;visibility:hidden!important}.i-amphtml-fit-text-content-wrapper{line-height:1.15em!important}.i-amphtml-fit-text-content-overflown{display:block;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}.i-amphtml-fit-text-measurer{position:absolute!important;top:0!important;left:0!important;z-index:1!important;visibility:hidden!important;line-height:1.15em!important}\n/*# sourceURL=/extensions/amp-fit-text/0.1/amp-fit-text.css*/")})(self.AMP)}});//# sourceMappingURL=amp-fit-text-0.1.js.map