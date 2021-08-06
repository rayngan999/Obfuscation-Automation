(self.webpackChunk=self.webpackChunk||[]).push([[1466],{52784:(e,t,n)=>{"use strict";var r=n(24433);e.exports={getDependencyClass:function(e){if(!e)throw new Error("dependencyName required");var t=r("dependency:"+e);return window.customElements.whenDefined(e).then((function(){return t.end(),window.customElements.get(e)}))},getFirstDependencyElement:function(e,t){if(!e)throw new Error("dependencyName required");return t||(t=document),window.customElements.whenDefined(e).then((function(){var n=t.querySelector(e);if(!n)throw new Error(e+" element cannot be found");return n}))}}},86483:e=>{"use strict";var t,n=function(){};try{t=window}catch(e){t={}}e.exports=t.performance&&t.performance.mark?t.performance:{getEntriesByName:n,mark:n,measure:n}},24433:(e,t,n)=>{"use strict";var r=n(86483),o=0;function i(){var e="phxMark:"+o++;return r.mark(e),e}e.exports=function(e){var t=i();return{end:function(){var n=i();r.measure(e,t,n);var o=r.getEntriesByName(e);if(o&&o.length)return o[o.length-1].duration}}}},20677:(e,t,n)=>{"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n,r=0;r<t.length;r++)(n=t[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function a(e,t,n){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=n(52784).getDependencyClass,l=n(24433)("webcomponents:card"),f="phoenix:recommendations:ready",m="phoenix:recommendations:use_base",h="mm-card--text-only";d("phoenix-page").then((function(e){var t=function(e){function t(){return o(this,t),p.apply(this,arguments)}!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,e);var n,r,d,l,p=(d=t,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=u(d);if(l){var n=u(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});return n=t,(r=[{key:"observedBroadcastedEvents",get:function(){return[f,m]}},{key:"item",get:function(){if(!this._item){var e=this._parent&&this._parent.data;e&&e.length&&this.index<=e.length&&(this._item=e[this.index])}return this._item}},{key:"loaded",get:function(){return this._isLoaded},set:function(e){e&&(this._isLoaded=e,this._unmask())}},{key:"loading",get:function(){return this._isLoading},set:function(e){e&&(this._isLoading=e)}},{key:"connectedCallback",value:function(){a(u(t.prototype),"connectedCallback",this).call(this),this._parent=this.closest("phoenix-recommendations"),this._parent?this._parent.useBaseCardOnConnected?!this._parent.isInContentRecommendation&&this._unmask():(this.index=parseInt(this.getAttr("index",{required:!0})),this.configToken=this.getAttr("config-token",{required:!0}),this.isImageHeroHub=this.getAttr("image-hero-hub",{required:!1})):this.addNonPersonalizedItems()}},{key:"broadcastedEventCallback",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.detail&&t.detail.value||[];this._parent&&this._parent.widgetName===n&&(e===m?(this._unmask(),this.addNonPersonalizedItems()):e===f&&n&&!this.loading&&!this.loaded&&this._render())}},{key:"addNonPersonalizedItems",value:function(){window.nonPersonalizedItems=window.nonPersonalizedItems||[];var e=this.closest("phoenix-super-link");e&&e.href&&window.nonPersonalizedItems.push(e.href)}},{key:"_render",value:function(){var e=this;if(this.item&&!this.loaded)try{this.loading=!0,this._parent.cardRenderedPromises=new Promise((function(t){var n=new Promise((function(e,t){setTimeout((function(){t("card failed to load in 7 seconds.")}),7e3)})),r=e.isImageHeroHub?"/.api/image-hero-hub-html/":"/.api/item-card-html/",o=fetch("".concat(r).concat(e.item.channelKey,"/").concat(e.item.tempestId)+"?configToken=".concat(e.configToken),{});Promise.race([o,n]).then((function(t){return e._parent.recordedTimes||(e._parent.recordedTimes={cardRenderTimes:{}}),e._parent.recordedTimes.cardRenderTimes[e.index]=Math.trunc(performance.now()-e._parent.recordedTimesForFetching.liModelFetchEndTime).toString(),t.json()})).then((function(n){if("string"!=typeof n.html||""===n.html)return e._unmask(),t(!1);e.innerHTML=n.html;var r=n.mainLink||{};if(r.href){var o=e.closest("phoenix-super-link");o&&(o.setAttribute("href",r.href),o.setAttribute("target",r.target||"_self"),o.setAttribute("onclick","return window.phoenixTrackRecommendationClickEvent && phoenixTrackRecommendationClickEvent('cardclick','"+r.href+"','"+e._parent.widgetName+"',true, 'Image')"))}n.hasImage?(e.classList.remove(h),n.componentImageStyle&&("landscape"===n.componentImageStyle?e.classList.add("mm-card--landscape-image"):"portrait"===n.componentImageStyle?e.classList.add("mm-card--portrait-image"):"round"===n.componentImageStyle?e.classList.add("mm-card--round-image"):"square"===n.componentImageStyle&&e.classList.add("mm-card--square-image"))):e.classList.add(h),e._unmask(),e.loaded=!0,t(!0)})).catch((function(n){console.error(n),e.loaded=!0,t(!1)}))}))}catch(e){this._unmask(),console.error(e)}}},{key:"_unmask",value:function(){var e=this.closest("phoenix-super-link");e&&e.classList.remove("is-client-side-rendered")}}])&&i(n.prototype,r),t}(e.PhoenixElement);window.customElements.define("phoenix-card",t),l.end()}))}},0,[[20677,3666]]]);
//# sourceMappingURL=card.min.js.map