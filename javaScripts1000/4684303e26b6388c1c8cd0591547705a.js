/*! License information is available at https://static.cdn.printful.com/dist-pf/the-skip-to-main-content-vue.licenses.txt for vue-scrollto, vue-loader */(window.webpackJsonp=window.webpackJsonp||[]).push([[373,163],{"8Tyq":function(n,e,t){
/*!
  * vue-scrollto v2.20.0
  * (c) 2019 Randjelovic Igor
  * @license MIT
  */
n.exports=function(){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(e)}function e(){return(e=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}var t="function"==typeof Float32Array;function o(n,e){return 1-3*e+3*n}function r(n,e){return 3*e-6*n}function i(n){return 3*n}function a(n,e,t){return((o(e,t)*n+r(e,t))*n+i(e))*n}function u(n,e,t){return 3*o(e,t)*n*n+2*r(e,t)*n+i(e)}function c(n){return n}var s=function(n,e,o,r){if(!(0<=n&&n<=1&&0<=o&&o<=1))throw new Error("bezier x values must be in [0, 1] range");if(n===e&&o===r)return c;for(var i=t?new Float32Array(11):new Array(11),s=0;s<11;++s)i[s]=a(.1*s,n,o);function l(e){for(var t=0,r=1;10!==r&&i[r]<=e;++r)t+=.1;--r;var c=t+(e-i[r])/(i[r+1]-i[r])*.1,s=u(c,n,o);return s>=.001?function(n,e,t,o){for(var r=0;r<4;++r){var i=u(e,t,o);if(0===i)return e;e-=(a(e,t,o)-n)/i}return e}(e,c,n,o):0===s?c:function(n,e,t,o,r){var i,u,c=0;do{(i=a(u=e+(t-e)/2,o,r)-n)>0?t=u:e=u}while(Math.abs(i)>1e-7&&++c<10);return u}(e,t,t+.1,n,o)}return function(n){return 0===n?0:1===n?1:a(l(n),e,r)}},l={ease:[.25,.1,.25,1],linear:[0,0,1,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]},f=!1;try{var d=Object.defineProperty({},"passive",{get:function(){f=!0}});window.addEventListener("test",null,d)}catch(n){}var p=function(n){return"string"!=typeof n?n:document.querySelector(n)},v=function(n,e,t){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!1};e instanceof Array||(e=[e]);for(var r=0;r<e.length;r++)n.addEventListener(e[r],t,!!f&&o)},h=function(n,e,t){e instanceof Array||(e=[e]);for(var o=0;o<e.length;o++)n.removeEventListener(e[o],t)},m=function(n){var e=0,t=0;do{e+=n.offsetTop||0,t+=n.offsetLeft||0,n=n.offsetParent}while(n);return{top:e,left:t}},y=["mousedown","wheel","DOMMouseScroll","mousewheel","keyup","touchmove"],w={container:"body",duration:500,lazy:!0,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0};function b(n){w=e({},w,n)}var g=function(){var e,t,o,r,i,a,u,c,f,d,b,g,T,_,S,C,k,E,L,O,x,M,P,I,V,$,A,D=function(n){c&&(P=n,O=!0)};function N(n){var e=n.scrollTop;return"body"===n.tagName.toLowerCase()&&(e=e||document.documentElement.scrollTop),e}function j(n){var e=n.scrollLeft;return"body"===n.tagName.toLowerCase()&&(e=e||document.documentElement.scrollLeft),e}function H(){x=m(t),M=m(e),g&&(S=M.left-x.left+a,E=S-_),T&&(k=M.top-x.top+a,L=k-C)}function q(n){if(O)return z();V||(V=n),i||H(),$=n-V,A=Math.min($/o,1),A=I(A),F(t,C+L*A,_+E*A),$<o?window.requestAnimationFrame(q):z()}function z(){O||F(t,k,S),V=!1,h(t,y,D),O&&b&&b(P,e),!O&&d&&d(e)}function F(n,e,t){T&&(n.scrollTop=e),g&&(n.scrollLeft=t),"body"===n.tagName.toLowerCase()&&(T&&(document.documentElement.scrollTop=e),g&&(document.documentElement.scrollLeft=t))}return function(h,m){var S=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("object"===n(m)?S=m:"number"==typeof m&&(S.duration=m),!(e=p(h)))return console.warn("[vue-scrollto warn]: Trying to scroll to an element that is not on the page: "+h);if(t=p(S.container||w.container),o=S.hasOwnProperty("duration")?S.duration:w.duration,i=S.hasOwnProperty("lazy")?S.lazy:w.lazy,r=S.easing||w.easing,a=S.hasOwnProperty("offset")?S.offset:w.offset,u=S.hasOwnProperty("force")?!1!==S.force:w.force,c=S.hasOwnProperty("cancelable")?!1!==S.cancelable:w.cancelable,f=S.onStart||w.onStart,d=S.onDone||w.onDone,b=S.onCancel||w.onCancel,g=void 0===S.x?w.x:S.x,T=void 0===S.y?w.y:S.y,"function"==typeof a&&(a=a(e,t)),_=j(t),C=N(t),H(),O=!1,!u){var x="body"===t.tagName.toLowerCase()?document.documentElement.clientHeight||window.innerHeight:t.offsetHeight,M=C,V=M+x,$=k-a,A=$+e.offsetHeight;if($>=M&&A<=V)return void(d&&d(e))}if(f&&f(e),L||E)return"string"==typeof r&&(r=l[r]||l.ease),I=s.apply(s,r),v(t,y,D,{passive:!0}),window.requestAnimationFrame(q),function(){P=null,O=!0};d&&d(e)}},T=g(),_=[];function S(n){var e=function(n){for(var e=0;e<_.length;++e)if(_[e].el===n)return _[e]}(n);return e||(_.push(e={el:n,binding:{}}),e)}function C(n){var e=S(this).binding;if(e.value){if(n.preventDefault(),"string"==typeof e.value)return T(e.value);T(e.value.el||e.value.element,e.value)}}var k={bind:function(n,e){S(n).binding=e,v(n,"click",C)},unbind:function(n){!function(n){for(var e=0;e<_.length;++e)if(_[e].el===n)return _.splice(e,1),!0}(n),h(n,"click",C)},update:function(n,e){S(n).binding=e}},E={bind:k.bind,unbind:k.unbind,update:k.update,beforeMount:k.bind,unmounted:k.unbind,updated:k.update,scrollTo:T,bindings:_},L=function(n,e){e&&b(e),n.directive("scroll-to",E),(n.config.globalProperties||n.prototype).$scrollTo=E.scrollTo};return"undefined"!=typeof window&&window.Vue&&(window.VueScrollTo=E,window.VueScrollTo.setDefaults=b,window.VueScrollTo.scroller=g,window.Vue.use&&window.Vue.use(L)),E.install=L,E}()},"KHd+":function(n,e,t){"use strict";function o(n,e,t,o,r,i,a,u){var c,s="function"==typeof n?n.options:n;if(e&&(s.render=e,s.staticRenderFns=t,s._compiled=!0),o&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),a?(c=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),r&&r.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(a)},s._ssrRegister=c):r&&(c=u?function(){r.call(this,(s.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(s.functional){s._injectStyles=c;var l=s.render;s.render=function(n,e){return c.call(e),l(n,e)}}else{var f=s.beforeCreate;s.beforeCreate=f?[].concat(f,c):[c]}return{exports:n,options:s}}t.d(e,"a",(function(){return o}))},wNc5:function(n,e,t){"use strict";t.r(e);var o=function(){var n=this.$createElement;return(this._self._c||n)("a",{staticClass:"skip-to-main-content-link sr-only",attrs:{href:"#"+this.anchorId},on:{click:this.onLinkClick}},[this._v("\n    "+this._s(this.dlang("site","Skip to main content"))+"\n")])};o._withStripped=!0;var r=t("8Tyq"),i=t.n(r),a=["dashboard-content","content"],u={name:"TheSkipToMainContentLink",data:function(){return{anchorId:""}},mounted:function(){var n;this.anchorId=(n="",a.some((function(e){if(document.getElementById(e))return n=e,!0})),n)},methods:{onLinkClick:function(n){"smooth"!==getComputedStyle(document.documentElement).scrollBehavior&&(n.preventDefault(),this.scrollToMainContent())},scrollToMainContent:function(){var n=this;i.a.scrollTo("#".concat(this.anchorId),500,{easing:"ease-in",cancelable:!1,onStart:function(){return document.getElementById(n.anchorId).focus()}})}}},c=t("KHd+"),s=Object(c.a)(u,o,[],!1,null,null,null);s.options.__file="resources/src/printful/common/ui/components/TheSkipToMainContentLink.vue";e.default=s.exports}}]);