(self.webpackChunk=self.webpackChunk||[]).push([[8662],{52784:(e,t,n)=>{"use strict";var r=n(24433);e.exports={getDependencyClass:function(e){if(!e)throw new Error("dependencyName required");var t=r("dependency:"+e);return window.customElements.whenDefined(e).then((function(){return t.end(),window.customElements.get(e)}))},getFirstDependencyElement:function(e,t){if(!e)throw new Error("dependencyName required");return t||(t=document),window.customElements.whenDefined(e).then((function(){var n=t.querySelector(e);if(!n)throw new Error(e+" element cannot be found");return n}))}}},86483:e=>{"use strict";var t,n=function(){};try{t=window}catch(e){t={}}e.exports=t.performance&&t.performance.mark?t.performance:{getEntriesByName:n,mark:n,measure:n}},24433:(e,t,n)=>{"use strict";var r=n(86483),o=0;function c(){var e="phxMark:"+o++;return r.mark(e),e}e.exports=function(e){var t=c();return{end:function(){var n=c();r.measure(e,t,n);var o=r.getEntriesByName(e);if(o&&o.length)return o[o.length-1].duration}}}},61971:(e,t,n)=>{"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n,r=0;r<t.length;r++)(n=t[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var s=n(52784).getDependencyClass,a=n(24433)("webcomponents:import");s("phoenix-page").then((function(e){var t=function(t){function n(){return o(this,n),p.apply(this,arguments)}!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(n,t);var r,s,a,l,p=(a=n,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(a);if(l){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return i(this,e)});return r=n,(s=[{key:"connectedCallback",value:function(){this.observeFirstIntersection()}},{key:"onFirstIntersection",value:function(){var t=this,n=this.getAttr("src",{required:!0}),r=e.basicAuth.getRequestOptions();fetch(n,r).then((function(e){return e.json()})).then((function(e){""!==e.html&&(t.innerHTML=e.html)}))}}])&&c(r.prototype,s),n}(e.PhoenixElement);window.customElements.define("phoenix-import",t),a.end()}))}},0,[[61971,3666]]]);
//# sourceMappingURL=import.min.js.map