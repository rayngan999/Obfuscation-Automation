!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["custom-elements-es5-adapter"]=t():e["custom-elements-es5-adapter"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/templates/main/en-US/__build/",n(n.s="D0GK")}({D0GK:function(e,t){!function(){"use strict";(()=>{if(!window.customElements)return;const e=window.HTMLElement,t=window.customElements.define,n=window.customElements.get,o=new Map,r=new Map;let c=!1,l=!1;window.HTMLElement=function(){if(!c){const e=o.get(this.constructor),t=n.call(window.customElements,e);return l=!0,new t}c=!1},window.HTMLElement.prototype=e.prototype,Object.defineProperty(window,"customElements",{value:window.customElements,configurable:!0,writable:!0}),Object.defineProperty(window.customElements,"define",{value:(n,s)=>{const i=s.prototype,u=class extends e{constructor(){super(),Object.setPrototypeOf(this,i),l||(c=!0,s.call(this)),l=!1}},a=u.prototype;u.observedAttributes=s.observedAttributes,a.connectedCallback=i.connectedCallback,a.disconnectedCallback=i.disconnectedCallback,a.attributeChangedCallback=i.attributeChangedCallback,a.adoptedCallback=i.adoptedCallback,o.set(s,n),r.set(n,s),t.call(window.customElements,n,u)},configurable:!0,writable:!0}),Object.defineProperty(window.customElements,"get",{value:e=>r.get(e),configurable:!0,writable:!0})})()}()}})});
//# sourceMappingURL=custom-elements-es5-adapter-628230679251d691bcb5.min.js.map