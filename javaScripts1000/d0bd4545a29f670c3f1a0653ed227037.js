(self.webpackChunk=self.webpackChunk||[]).push([[468],{52784:(t,e,n)=>{"use strict";var r=n(24433);t.exports={getDependencyClass:function(t){if(!t)throw new Error("dependencyName required");var e=r("dependency:"+t);return window.customElements.whenDefined(t).then((function(){return e.end(),window.customElements.get(t)}))},getFirstDependencyElement:function(t,e){if(!t)throw new Error("dependencyName required");return e||(e=document),window.customElements.whenDefined(t).then((function(){var n=e.querySelector(t);if(!n)throw new Error(t+" element cannot be found");return n}))}}},86483:t=>{"use strict";var e,n=function(){};try{e=window}catch(t){e={}}t.exports=e.performance&&e.performance.mark?e.performance:{getEntriesByName:n,mark:n,measure:n}},24433:(t,e,n)=>{"use strict";var r=n(86483),o=0;function i(){var t="phxMark:"+o++;return r.mark(t),t}t.exports=function(t){var e=i();return{end:function(){var n=i();r.measure(t,e,n);var o=r.getEntriesByName(t);if(o&&o.length)return o[o.length-1].duration}}}},17701:(t,e,n)=>{"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n,r=0;r<e.length;r++)(n=e[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function s(t,e,n){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=f(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n(49594),n(93419),n(41647);var h=n(52784).getDependencyClass,p=n(24433)("webcomponents:carousel");h("phoenix-page").then((function(t){var e=function(t){function e(){return c(this,e),p.apply(this,arguments)}!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(e,t);var n,r,i,h,p=(i=e,h=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=f(i);if(h){var n=f(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return a(this,t)});return n=e,(r=[{key:"observedEmittedEvents",get:function(){return["phoenix:carousel:previous","phoenix:carousel:next"]}},{key:"slides",get:function(){return this._slides||(this._slides=this.querySelectorAll("phoenix-carousel-slide")),this._slides}},{key:"slideIds",get:function(){if(void 0===this._slideIds){var t=o(this.slides).map((function(t){return t.getAttr("slide-id")}));this._slideIds=o(new Set(t))}return this._slideIds}},{key:"connectedCallback",value:function(){s(f(e.prototype),"connectedCallback",this).call(this),this._currentSlideIndex=0}},{key:"emittedEventCallback",value:function(t){var e=this._currentSlideIndex;"phoenix:carousel:previous"===t?this._currentSlideIndex=0===e?this.slideIds.length-1:e-1:"phoenix:carousel:next"===t&&(this._currentSlideIndex=e===this.slideIds.length-1?0:e+1),this.notify()}},{key:"notify",value:function(){var t="phoenix:carousel:activeSlide";this.emitEvent(t,{bubbles:!0,detail:{key:t,value:this._currentSlideIndex,slide:this.slideIds[this._currentSlideIndex]}})}}])&&u(n.prototype,r),e}(t.PhoenixElement);window.customElements.define("phoenix-carousel",e),p.end()}))},41647:(t,e,n)=>{"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n,r=0;r<e.length;r++)(n=e[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function c(t,e,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=l(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(0,n(52784).getDependencyClass)("phoenix-page").then((function(t){var e=function(t){function e(){return o(this,e),h.apply(this,arguments)}!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(e,t);var n,r,a,f,h=(a=e,f=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=l(a);if(f){var n=l(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return s(this,t)});return n=e,(r=[{key:"observedBroadcastedEvents",get:function(){return["phoenix:carousel:activeSlide"]}},{key:"carousel",get:function(){return this._carousel||(this._carousel=this.closest("phoenix-carousel"))}},{key:"connectedCallback",value:function(){c(l(e.prototype),"connectedCallback",this).call(this),this.separator=this.getAttr("separator")||"/"}},{key:"render",value:function(t){this.innerHTML="".concat(t+1," ").concat(this.separator," ").concat(this.carousel.slideIds.length)}},{key:"broadcastedEventCallback",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=e.detail&&e.detail.value;"phoenix:carousel:activeSlide"===t&&e.target===this.carousel&&this.render(n)}}])&&i(n.prototype,r),e}(t.PhoenixElement);window.customElements.define("phoenix-carousel-counter",e)}))},93419:(t,e,n)=>{"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n,r=0;r<e.length;r++)(n=e[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function c(t,e,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=l(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(0,n(52784).getDependencyClass)("phoenix-page").then((function(t){var e=function(t){function e(){return o(this,e),h.apply(this,arguments)}!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(e,t);var n,r,a,f,h=(a=e,f=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=l(a);if(f){var n=l(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return s(this,t)});return n=e,(r=[{key:"observedBroadcastedEvents",get:function(){return["phoenix:carousel:activeSlide"]}},{key:"carousel",get:function(){return this._carousel||(this._carousel=this.closest("phoenix-carousel"))}},{key:"carouselStrip",get:function(){return this._carouselStrip||(this._carouselStrip=this.closest("phoenix-carousel-strip"))}},{key:"connectedCallback",value:function(){c(l(e.prototype),"connectedCallback",this).call(this),this.slideId=this.getAttr("slide-id",{required:!0})}},{key:"broadcastedEventCallback",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=e.detail&&e.detail.slide;if("phoenix:carousel:activeSlide"===t&&e.target===this.carousel){var r=this.slideId===n;this.carouselStrip?this.classList.toggle("is-active",r):(this.setAttribute("aria-hidden",!r),this.hidden=!r)}}}])&&i(n.prototype,r),e}(t.PhoenixElement);window.customElements.define("phoenix-carousel-slide",e)}))},49594:(t,e,n)=>{"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n,r=0;r<e.length;r++)(n=e[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function c(t,e,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=l(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(0,n(52784).getDependencyClass)("phoenix-page").then((function(t){var e=function(t){function e(){return o(this,e),h.apply(this,arguments)}!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(e,t);var n,r,a,f,h=(a=e,f=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=l(a);if(f){var n=l(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return s(this,t)});return n=e,(r=[{key:"observedBroadcastedEvents",get:function(){return["phoenix:carousel:activeSlide","phoenix:breakpoint:changed"]}},{key:"carousel",get:function(){return this._carousel||(this._carousel=this.closest("phoenix-carousel"))}},{key:"contentWidth",get:function(){if(!this._contentWidth){this._contentWidth=this.carouselContent.scrollWidth;var t=window.getComputedStyle(this.carouselContent),e=t.marginLeft,n=t.marginRight;this._contentWidth+=isNaN(parseInt(e))?0:parseInt(e),this._contentWidth+=isNaN(parseInt(n))?0:parseInt(n)}return this._contentWidth}},{key:"hidePreviousButton",set:function(t){this.previousButton&&(this.previousButton.setAttribute("aria-hidden",t),this.previousButton.hidden=t,this.previousButton.classList.toggle("is-visible",t))}},{key:"hideNextButton",set:function(t){this.nextButton&&(this.nextButton.setAttribute("aria-hidden",t),this.nextButton.hidden=t,this.nextButton.classList.toggle("is-visible",t))}},{key:"connectedCallback",value:function(){var t=this;c(l(e.prototype),"connectedCallback",this).call(this),this.waitForElement("phoenix-carousel-slide",{untilDomReady:!0}).then((function(){t.container=t.querySelector(".m-collection-strip--carousel-container"),t.carouselContent=t.querySelector(".m-collection-strip--carousel-content"),t.nextButton=t.querySelector('[event-name="phoenix:carousel:next"]'),t.previousButton=t.querySelector('[event-name="phoenix:carousel:previous"]'),t._checkIfScrollable()}))}},{key:"assignSlidePositions",value:function(){var t=0;this.carousel.slides.forEach((function(e){e.setAttribute("data-pos",t),t+=e.offsetWidth}))}},{key:"broadcastedEventCallback",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=e.detail&&e.detail.value;switch(t){case"phoenix:breakpoint:changed":this._contentWidth=!1,this._checkIfScrollable();break;case"phoenix:carousel:activeSlide":if(e.target===this.carousel){var r=this.carousel.slides[n];this.carouselContent.scrollLeft=r.getAttribute("data-pos")}}}},{key:"_checkIfScrollable",value:function(){this.containerWidth=this.container.clientWidth,this.contentOverflow=this.contentWidth-this.containerWidth,this.isScrollable=this.containerWidth<this.contentWidth,this.isScrollable?(this._addListener(),this.assignSlidePositions(),this._checkNavButtonStatus()):(this._removeListener(),this.hidePreviousButton=!0,this.hideNextButton=!0)}},{key:"_checkNavButtonStatus",value:function(){var t=this.carouselContent.scrollLeft;this.hidePreviousButton=0===t,this.hideNextButton=t===this.contentOverflow}},{key:"_addListener",value:function(){this.carouselContent.addEventListener("scroll",this._checkNavButtonStatus.bind(this))}},{key:"_removeListener",value:function(){this.carouselContent.removeEventListener("scroll",this._checkNavButtonStatus.bind(this))}},{key:"disconnectedCallback",value:function(){c(l(e.prototype),"disconnectedCallback",this).call(this),this._removeListener()}}])&&i(n.prototype,r),e}(t.PhoenixElement);window.customElements.define("phoenix-carousel-strip",e)}))}},0,[[17701,3666]]]);
//# sourceMappingURL=carousel.min.js.map