(self.webpackChunk=self.webpackChunk||[]).push([[2739],{52784:(e,t,n)=>{"use strict";var i=n(24433);e.exports={getDependencyClass:function(e){if(!e)throw new Error("dependencyName required");var t=i("dependency:"+e);return window.customElements.whenDefined(e).then((function(){return t.end(),window.customElements.get(e)}))},getFirstDependencyElement:function(e,t){if(!e)throw new Error("dependencyName required");return t||(t=document),window.customElements.whenDefined(e).then((function(){var n=t.querySelector(e);if(!n)throw new Error(e+" element cannot be found");return n}))}}},86483:e=>{"use strict";var t,n=function(){};try{t=window}catch(e){t={}}e.exports=t.performance&&t.performance.mark?t.performance:{getEntriesByName:n,mark:n,measure:n}},24433:(e,t,n)=>{"use strict";var i=n(86483),r=0;function o(){var e="phxMark:"+r++;return i.mark(e),e}e.exports=function(e){var t=o();return{end:function(){var n=o();i.measure(e,t,n);var r=i.getEntriesByName(e);if(r&&r.length)return r[r.length-1].duration}}}},72590:(e,t,n)=>{"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n,i=0;i<t.length;i++)(n=t[i]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function a(e,t,n){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}(e,t);if(i){var r=Object.getOwnPropertyDescriptor(i,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=n(52784).getDependencyClass,l=n(24433)("webcomponents:balloonHeaderx"),d="is-active",p="is-balloon-header-active";h("phoenix-page").then((function(e){var t=function(t){function n(){return r(this,n),v.apply(this,arguments)}!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(n,t);var i,h,l,f,v=(l=n,f=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=u(l);if(f){var n=u(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return c(this,e)});return i=n,(h=[{key:"observedBroadcastedEvents",get:function(){return["phoenix:breakpoint:changed"]}},{key:"connectedCallback",value:function(){var t=this;a(u(n.prototype),"connectedCallback",this).call(this),this.active=!1,this.hover=!1,this.docBody=document.querySelector("body"),this.pageWrapper=document.querySelector(".m-page-wrapper"),this.adContainer=this.firstElementChild,this.isHeaderAdBelowNav=!!this.querySelector(".is-below-header-ad"),this.isHeaderAdBelowNav&&(this.fillerContainer=this.nextElementSibling),this.popTime=isNaN(parseFloat(this.getAttribute("pop-time")))?3500:1e3*parseFloat(this.getAttribute("pop-time")),this.hasLegacyNav=!!this.querySelector(".has-legacy-nav"),this.pageWrapper&&this.adContainer&&(this.adContainer.classList.contains("not-size-".concat(e.util.getCurrentBreakpoint().toLowerCase()))||this.canRender().then((function(e){e?t.init():(t.classList.remove(d),t.docBody.classList.remove(p))})))}},{key:"init",value:function(){this.activate();var e=this;(window.phxAdvertisingQueue||[]).push((function(){var t=e.querySelector('.m-header-ad [id^="ad-"]');if(t){var n=t.id;this.getSlotResult(n).then((function(t){t.filled?(e.listen(),e._updateHeight()):e.deactivate()}))}}))}},{key:"disconnectedCallback",value:function(){a(u(n.prototype),"disconnectedCallback",this).call(this),this.deactivate()}},{key:"broadcastedEventCallback",value:function(e){"phoenix:breakpoint:changed"===e&&this.active&&this.deactivate()}},{key:"activate",value:function(){this.active||(this.active=!0,this._updateHeight(),this.classList.add(d),this.docBody.classList.add(p),this.emitEvent("phoenix:balloonHeader:activated",{bubbles:!0,detail:{}}))}},{key:"listen",value:function(){var e=this,t=this._updateHeight.bind(this);this.heightObserver=new MutationObserver(t),this.heightObserver.observe(this.adContainer,{attributes:!0,childList:!0,subtree:!0}),this.addEventListener("mouseover",this._mouseover,!1),this.addEventListener("mouseout",this._mouseout,!1);var n=function(){e.hover?window.setTimeout(n,e.popTime):e.deactivate()};window.setTimeout(n,this.popTime)}},{key:"deactivate",value:function(){this.active&&(this.active=!1,this.heightObserver&&this.heightObserver.disconnect(),this.fillerContainer&&this.fillerContainer.classList.add("is-popped"),this.classList.remove(d),this.docBody.classList.remove(p),!this.isHeaderAdBelowNav&&(this.pageWrapper.style.marginTop="0"),this._updateHeight(),this.removeEventListener("mouseover",this._mouseover),this.removeEventListener("mouseout",this._mouseout),this.emitEvent("phoenix:balloonHeader:popped",{bubbles:!0,detail:{}}))}},{key:"_mouseover",value:function(){this.hover=!0}},{key:"_mouseout",value:function(){this.hover=!1}},{key:"_updateHeight",value:function(){var e=this.adContainer.getBoundingClientRect().height;this.height=e,this.isHeaderAdBelowNav?e>this.fillerContainer.clientHeight&&(this.fillerContainer.style.height=e+"px"):!this.hasLegacyNav&&(this.pageWrapper.style.marginTop="".concat(this.active?this.height:0,"px")),this._updateBalloonHeaderVar()}},{key:"_updateBalloonHeaderVar",value:function(){this.adContainer.classList.contains("is-empty")&&(this.height=0),document.querySelector("html").style.setProperty("--balloon-header-height","".concat(this.height||0,"px")),this.emitEvent("phoenix:balloonHeader:heightChanged",{bubbles:!0})}}])&&o(i.prototype,h),n}(e.PhoenixElement);window.customElements.define("phoenix-balloon-header",t),l.end()}))}},0,[[72590,3666]]]);
//# sourceMappingURL=balloonHeader.min.js.map