(window["[hash]MyOwnNameJsonpFunction"]=window["[hash]MyOwnNameJsonpFunction"]||[]).push([[2],{17:function(e,t,o){var n=o(22);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},18:function(e,t,o){var n=o(4).default,r=o(20);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?r(e):t},e.exports.default=e.exports,e.exports.__esModule=!0},19:function(e,t){function o(t){return e.exports=o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.default=e.exports,e.exports.__esModule=!0,o(t)}e.exports=o,e.exports.default=e.exports,e.exports.__esModule=!0},20:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.default=e.exports,e.exports.__esModule=!0},28:function(e,t,o){"use strict";o.r(t),o.d(t,"SLIDE_IN_CLASS",(function(){return m})),o.d(t,"DELAY_TIME",(function(){return _}));var n=o(2),r=o.n(n),a=o(3),c=o.n(a),i=o(17),s=o.n(i),u=o(18),l=o.n(u),f=o(19),p=o.n(f),d=o(0);function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=p()(e);if(t){var r=p()(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return l()(this,o)}}var m="voc-animated-modal-bottom--slide-in",_=2e3,b=function(e){s()(o,e);var t=v(o);function o(e,n){var a;r()(this,o),(a=t.call(this)).container=e,a._navbar$=document.querySelector("nav.navbar"),a._wrapper$=document.querySelectorAll(".wrapper")[0],a._isMobile=n;var c=a.container.querySelector("[data-voc-pw-close]");return c&&a._navbar$&&a._wrapper$&&c.addEventListener("click",(function(e){return a.onClose(e)})),a}return c()(o,[{key:"run",value:function(){var e=this;"cookie-enabled"===this.container.getAttribute("data-animated-modal-bottom")&&navigator.cookieEnabled&&(-1!==document.cookie.indexOf("".concat("voc_animated_bottom_modal","="))?this.container.style.cssText="none":setTimeout((function(){e._isMobile&&e.mobileSetup(),e.container.classList.add(m)}),_))}},{key:"onClose",value:function(e){if(e.preventDefault(),this.container.classList.add("voc-animated-modal-bottom--slide-out"),this._isMobile&&(this._navbar$.classList.remove("voc-navbar-offset"),this._wrapper$.classList.remove("voc-wrapper-offset")),navigator.cookieEnabled){var t=new Date;t.setTime(t.getTime()+864e5),document.cookie="".concat("voc_animated_bottom_modal","=1; expires=").concat(t,"; path=/")}}},{key:"mobileSetup",value:function(){var e=this.container.offsetHeight,t=document.createElement("style");t.innerHTML=".voc-navbar-offset {top : ".concat(e,"px;} .voc-wrapper-offset {margin-top : ").concat(e,"px;}"),document.querySelector("header").appendChild(t),this._navbar$.classList.add("voc-navbar-offset"),this._wrapper$.classList.add("voc-wrapper-offset")}}]),o}(d.Base);t.default=b}}]);