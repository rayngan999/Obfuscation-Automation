!function(e,t){if("object"===typeof exports&&"object"===typeof module)module.exports=t(require("react"));else if("function"===typeof define&&define.amd)define(["react"],t);else{var n="object"===typeof exports?t(require("react")):t(e.react);for(var r in n)("object"===typeof exports?exports:e)[r]=n[r]}}(this,(function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(t,n){t.exports=e},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";n.r(t);var r=n(0),o={baseZIndex:0,setBaseZIndex:function(e){o.baseZIndex=e},getCurrentBaseZIndex:function(){return o.baseZIndex},incrementBaseZIndex:function(){return++o.baseZIndex},decrementBaseZIndex:function(){return--o.baseZIndex}},u=Object(r.createContext)(o),f=function(e){o.setBaseZIndex(e)},i=u;n.d(t,"zIndexManager",(function(){return o})),n.d(t,"setBaseZIndex",(function(){return f}));t.default=i}])}));