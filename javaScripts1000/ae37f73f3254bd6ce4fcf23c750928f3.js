(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[432],{18500:function(e){"use strict";var t,n={fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"AdSlotQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[t={alias:null,args:null,concreteType:"Ads",kind:"LinkedField",name:"ads",plural:!1,selections:[{alias:null,args:null,concreteType:"TargetingArgument",kind:"LinkedField",name:"targeting",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"key",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"value",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shouldShowAds",storageKey:null}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"AdSlotQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[t,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}]},params:{cacheID:"7cc0810ee29d540fd192d0c68e5bd273",id:null,metadata:{},name:"AdSlotQuery",operationKind:"query",text:"query AdSlotQuery {\n  viewer {\n    ads {\n      targeting {\n        key\n        value\n      }\n      shouldShowAds\n    }\n    id\n  }\n}\n"},hash:"96c138d4ad6e5c8af219e35511f32124"};e.exports=n},54395:function(e,t,n){"use strict";var r=n(67294),o=n(69223),i=n(46076),l=n(98808),a=n(23463);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(l,e);var t,n,r,o,i=(r=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function l(){return c(this,l),i.apply(this,arguments)}return t=l,(n=[{key:"componentDidMount",value:function(){this.props.show()}},{key:"componentWillUnmount",value:function(){this.props.hide()}},{key:"render",value:function(){return null}}])&&s(t.prototype,n),l}(r.Component);t.Z=(0,l.Z)((0,o.$j)(void 0,{show:a.D3,hide:a.Hd}),i.EN)(m)},42975:function(e,t,n){"use strict";n.d(t,{Z:function(){return ce}});var r=n(67294),o=n(98808),i=n(46076),l=n(68563),a=n.n(l),u=(n(22578),n(52361)),c=n(32421),s=n(98645),f=n(49286),p=n(47896),d=n(177),m=n(48724),h=null,y=!0,b=function e(t,r){var o=n(5277);o("https://js-sec.indexww.com/ht/p/187954-175259075074294.js",(function(){o("https://www.googletagservices.com/tag/js/gpt.js",(function(){window.googletag?(h=window.googletag,t(h)):y?(y=!1,e(t,r)):r()}))}))};function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S=new d.Z,E=v(v(v({},S.listenable()),S.emittable()),{},{networkId:m.Z.dfp.accountId,initialised:!1,pubadsService:null,getGoogletag:function(){return new Promise((function(e,t){h?e(h):b(e,t)}))},load:function(e,t){var n=this;return p.Z.captureBreadcrumb({category:"dfp",data:{event:"tryLoadAd",slotId:e.slotId}}),e.unregister=function(){n.off("renderEnded",e.renderEnded),n.off("impressionViewable",e.impressionViewable)},this.on("renderEnded",e.renderEnded),this.on("impressionViewable",e.impressionViewable),new Promise((function(r){n.init(t).then((function(){return n.defineSlot(e)})).then((function(e){return n.displaySlot(e)})).then((function(e){r(e)})).catch((function(){p.Z.captureBreadcrumb({category:"dfp",data:{event:"failedToLoadSlot",slotId:e.slotId}})}))}))},init:function(e){var t=this;return p.Z.captureBreadcrumb({category:"dfp",level:"info",data:{event:"initServicesAndTargeting"}}),new Promise((function(n){if(!t.networkId)throw Error("Manager must be initialised with a networkId");t.getGoogletag().then((function(r){r.cmd.push((function(){t.pubadsService=r.pubads(),t.pubadsService.enableSingleRequest(),t.pubadsService.collapseEmptyDivs(),t.pubadsService.setForceSafeFrame(!0),r.enableServices(),t.pubadsService.addEventListener("slotRenderEnded",(function(e){var n=e.slot.getSlotElementId();t.emit("renderEnded",{slotId:n,event:e}),p.Z.captureBreadcrumb({category:"dfp",level:"info",data:{event:"slotRenderEnded",slotId:n}})})),t.pubadsService.addEventListener("impressionViewable",(function(e){var n=e.slot.getSlotElementId();t.emit("impressionViewable",{slotId:n,event:e}),p.Z.captureBreadcrumb({category:"dfp",level:"info",data:{event:"impressionViewable",slotId:n}})})),Object.keys(e).forEach((function(n){t.pubadsService.setTargeting(n,e[n])}))})),t.initialised=!0,n()})).catch((function(e){return p.Z.captureException(e)}))}))},defineSlot:function(e){var t=this;return p.Z.captureBreadcrumb({category:"dfp",level:"info",data:{event:"defineSlot",slotId:e.slotId}}),new Promise((function(n){t.getGoogletag().then((function(r){r.cmd.push((function(){var n="".concat(t.networkId,"/").concat(e.adUnit);e.gptSlot=r.defineSlot(n,e.sizes,e.slotId),e.gptSlot&&e.gptSlot.addService(t.pubadsService)})),n(e)})).catch((function(e){return p.Z.captureException(e)}))}))},displaySlot:function(e){var t=this;return p.Z.captureBreadcrumb({category:"dfp",level:"info",data:{event:"displaySlot",slotId:e.slotId}}),new Promise((function(n){t.getGoogletag().then((function(t){t.cmd.push((function(){t.display(e.slotId)}))})).catch((function(e){return p.Z.captureException(e)})),n(e)}))},refreshSlot:function(e){var t=this;return p.Z.captureBreadcrumb({category:"dfp",level:"info",data:{event:"refreshSlot",slotId:e.slotId}}),new Promise((function(n){t.getGoogletag().then((function(t){t.pubads().refresh([e.gptSlot])})).catch((function(e){return p.Z.captureException(e)})),n(e)}))},destroySlot:function(e){var t=this;return p.Z.captureBreadcrumb({category:"dfp",level:"info",data:{event:"destroySlot",slotId:e.slotId}}),this.off("renderEnded",e.renderEnded),this.off("impressionViewable",e.impressionViewable),new Promise((function(n,r){t.getGoogletag().then((function(t){if(t.destroySlots){if(!e.gptSlot)return r();t.destroySlots([e.gptSlot]),n()}})).catch((function(e){return p.Z.captureException(e)}))}))}});function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?k(e):t}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var B,A=0,D=function(){return"adSlot-".concat(A++)},N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(u,e);var t,n,o,i,l=(o=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(o);if(i){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function u(){var e;_(this,u);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return x(k(e=l.call.apply(l,[this].concat(n))),"state",{slotId:e.props.slotId||D(),startDate:null,hasImpressionBeenViewed:!1}),x(k(e),"slotData",null),x(k(e),"timer",null),x(k(e),"endTimer",(function(){e.timer&&clearTimeout(e.timer),e.timer=null})),x(k(e),"startTimer",(function(){e.endTimer(),e.startPolling()})),x(k(e),"startPolling",(function(){e._thottledOnInterval(),e.timer=setTimeout(e.startPolling,100)})),x(k(e),"onInterval",(function(){var t=e.state,n=t.startDate;if(t.hasImpressionBeenViewed){var r=n?n.getTime():(new Date).getTime(),o=new Date,i=o.getTime();n?(i-r)/1e3>45&&e.setState({startDate:o},(function(){e.slotData&&E.refreshSlot(e.slotData)})):e.setState({startDate:o})}})),x(k(e),"_thottledOnInterval",a()(100,(function(){e.onInterval()}))),x(k(e),"renderEnded",(function(t){var n=e.state.slotId;t.slotId===n&&e.props.renderEnded&&e.props.renderEnded(t)})),x(k(e),"impressionViewable",(function(t){var n=e.state.slotId;t.slotId===n&&e.setState({hasImpressionBeenViewed:!0})})),e}return t=u,(n=[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.targeting,r=t.adUnit,o=t.sizes,i=this.state.slotId;E.load({slotId:i,adUnit:r,sizes:o,renderEnded:this.renderEnded,impressionViewable:this.impressionViewable,gptSlot:null,unregister:function(){}},n||{}).then((function(t){e.slotData=t})).catch((function(e){return p.Z.captureException(e)}))}},{key:"componentWillUnmount",value:function(){if(this.endTimer(),!this.slotData)return null;E.destroySlot(this.slotData)}},{key:"componentDidUpdate",value:function(){this.props.isVisible?this.startTimer():this.endTimer()}},{key:"render",value:function(){return r.createElement("div",{className:"adunitContainer"},r.createElement("div",{id:this.state.slotId,className:"adBox"}))}}])&&P(t.prototype,n),u}(r.Component);function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function V(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,i=[],l=!0,a=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);l=!0);}catch(e){a=!0,o=e}finally{try{l||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){G(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function L(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function K(e,t){return(K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function H(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?z(e):t}function z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Q={height:0,width:0,isInView:!1,shouldShow:!1,hasNeverBeenSeen:!0},q=!!(0,s.Z)()&&{passive:!0},$=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}(u,e);var t,n,o,i,l=(o=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=W(o);if(i){var n=W(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return H(this,e)});function u(){var e;L(this,u);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return G(z(e=l.call.apply(l,[this].concat(n))),"ref",null),G(z(e),"state",U(U({},Q),{},{height:e.props.height||0,width:e.props.width||0})),G(z(e),"timer",null),G(z(e),"_computeSize",(function(t){var n=t.event.size;if(n){var r=V(n,2),o=r[0],i=r[1];e.setState({height:i,width:o})}})),G(z(e),"_isInView",(function(){var t=z(e).ref;if(!t||"undefined"==typeof window||"undefined"==typeof document||!document.documentElement||document.hidden)return!1;var n=document.documentElement.clientHeight,r=document.documentElement.clientWidth,o=t.getBoundingClientRect(),i=Math.max(n,window.innerHeight),l=Math.max(r,window.innerWidth),a=(o.top<0?Math.abs(o.top):0)/o.height+(o.left<0?Math.abs(o.left):0)/o.width+(o.bottom>i?o.bottom-i:0)/o.height+(o.right>l?o.right-l:0)/o.width;return!isNaN(a)&&a<.6})),G(z(e),"_setShouldShow",(function(){var t=e.state,n=t.isInView,r=t.hasNeverBeenSeen,o=e._isInView();r&&o?e.setState({shouldShow:!0,hasNeverBeenSeen:!1,isInView:o}):n!==o&&e.setState({isInView:o})})),G(z(e),"_thottledSetShouldShow",a()(100,(function(){e._setShouldShow()}))),G(z(e),"startPolling",(function(){e._thottledSetShouldShow(),e.timer=setTimeout(e.startPolling,100)})),G(z(e),"recalculateHeight",(function(){e.setState(U(U({},Q),{},{height:e.props.height||0,width:e.props.width||0}))})),G(z(e),"setRef",(function(t){e.ref=t})),e}return t=u,(n=[{key:"buildTargetingArguments",value:function(){var e,t=this.props.adContext,n=t?t.urlName:"",r=t?t.tags:"",o=this.props.viewer,i=(null==o||null===(e=o.ads)||void 0===e?void 0:e.targeting)?o.ads.targeting:[];return U(U({page_type:this.props.match?this.props.match.urlName:n,page_url:this.props.location.pathname,tags:r,narrow:(0,f.e)("undefined"!=typeof window&&window.screen.availWidth<1200)},this.props.targeting),i.reduce((function(e,t){return t?U(U({},e),{},G({},t.key,t.value)):U({},e)}),{}))}},{key:"componentDidMount",value:function(){"undefined"!=typeof window&&this.props.belowTheFold?window.addEventListener("scroll",this._thottledSetShouldShow,q):this.startPolling()}},{key:"componentWillUnmount",value:function(){this.timer&&(clearTimeout(this.timer),this.timer=null),"undefined"!=typeof window&&this.props.belowTheFold&&window.removeEventListener("scroll",this._thottledSetShouldShow,q)}},{key:"componentDidUpdate",value:function(e){(0,f.O)(e.location,this.props.location)&&this.recalculateHeight()}},{key:"render",value:function(){var e=this,t=this.props,n=t.renderEnded,o=t.viewer;if(!o)return null;if(!o.ads.shouldShowAds)return null;var i=this.state,l=i.height,a=i.width,u=i.shouldShow,c=i.isInView,s={minHeight:l,width:a},f=this.buildTargetingArguments(),p=U(U({},this.props),{},{renderEnded:function(t){e._computeSize(t),n&&n(t)},targeting:f});return r.createElement("div",{className:this.props.className||"",style:s,ref:this.setRef},u&&r.createElement(N,Z({},p,{isVisible:c})))}}])&&M(t.prototype,n),u}(r.PureComponent);G($,"defaultProps",{hide:!1});var X=(0,o.Z)((0,c.ZP)({query:(void 0!==B||(B=n(18500),B.hash&&"96c138d4ad6e5c8af219e35511f32124"!==B.hash&&console.error("The definition of 'AdSlotQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.")),B)}),i.EN,u.Wx)($);function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ee(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function te(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ne(e,t){return(ne=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function re(e,t){return!t||"object"!==J(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function oe(e){return(oe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ie,le,ae,ue=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ne(e,t)}(a,e);var t,n,o,i,l=(o=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=oe(o);if(i){var n=oe(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return re(this,e)});function a(){return ee(this,a),l.apply(this,arguments)}return t=a,(n=[{key:"render",value:function(){var e=this.props.belowTheFold,t=e?"MixcloudX_ROS_MPU_300x250_BTF":"MixcloudX_ROS_MPU_300x250";return r.createElement("div",null,r.createElement(X,Y({belowTheFold:e,className:"ad-mpu",sizes:[[300,250],[300,600]],width:300,height:250,adUnit:t},this.props)))}}])&&te(t.prototype,n),a}(r.Component);ae="MpuAdSlot",(le="displayName")in(ie=ue)?Object.defineProperty(ie,le,{value:ae,enumerable:!0,configurable:!0,writable:!0}):ie[le]=ae;var ce=ue},55354:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(67294),o=n(24910),i=n(46076),l=n(35979),a=n(76330),u=n(88887),c=o.ZP.footer.withConfig({displayName:"SideBarFooter__SideBarFooterContainer",componentId:"sc-135ukyb-0"})(["width:100%;"]),s=o.ZP.div.withConfig({displayName:"SideBarFooter__SideBarFooterContainerColumn",componentId:"sc-135ukyb-1"})(["display:flex;"]),f=o.ZP.ul.withConfig({displayName:"SideBarFooter__List",componentId:"sc-135ukyb-2"})(["display:flex;flex-direction:column;width:50%;list-style-type:none;"]),p=(0,o.ZP)(a.B4).withConfig({displayName:"SideBarFooter__TextLink",componentId:"sc-135ukyb-3"})(["",";a{color:",";text-decoration:none;&:hover{color:",";}}"],(0,u.l)("margin-bottom","m"),l.V9.lowBlue,l.p3.base70);function d(){var e=(new Date).getFullYear();return r.createElement(c,null,r.createElement(s,null,r.createElement(f,null,r.createElement("li",null,r.createElement(p,null,r.createElement(i.rU,{urlName:"about"},"About us"))),r.createElement("li",null,r.createElement(p,null,r.createElement(i.rU,{urlName:"premium"},"Plans"))),r.createElement("li",null,r.createElement(p,null,r.createElement("a",{href:"https://campus.mixcloud.com"},"Campus"))),r.createElement("li",null,r.createElement(p,null,r.createElement("a",{href:"http://support.mixcloud.com"},"Support"))),r.createElement("li",null,r.createElement(p,null,r.createElement(i.rU,{urlName:"terms"},"Terms of use"))),r.createElement("li",null,r.createElement(p,null,r.createElement(i.rU,{urlName:"privacy"},"Privacy policy")))),r.createElement(f,null,r.createElement("li",null,r.createElement(p,null,r.createElement("a",{href:"https://loud.mixcloud.com",target:"_blank"},"Brand partners"))),r.createElement("li",null,r.createElement(p,null,r.createElement(i.rU,{urlName:"promotions"},"Boosts"))),r.createElement("li",null,r.createElement(p,null,r.createElement(i.rU,{urlName:"developers"},"Developers"))),r.createElement("li",null,r.createElement(p,null,r.createElement("a",{href:"https://blog.mixcloud.com",target:"_blank"},"Blog"))),r.createElement("li",null,r.createElement(p,null,r.createElement("a",{href:"https://apply.workable.com/mixcloud-limited/",target:"_blank"},"Jobs"))))),r.createElement("p",null,"Â© Mixcloud ",e))}},23501:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(67294);function o(){return r.createElement("li",null,r.createElement("span",{className:"avatar people-to-follow-loading-avatar"}),r.createElement("span",{className:"people-to-follow-loading-username"}),r.createElement("span",{className:"people-to-follow-loading-followers"}),r.createElement("span",{className:"people-to-follow-loading-button"}))}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e){var t,n=e.count,l=e.className,a=(t=Array(n),function(e){if(Array.isArray(e))return i(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e,t){return r.createElement(o,{key:t})}));return r.createElement("ul",{className:l},a)}l.defaultProps={count:5,className:""}}}]);
//# sourceMappingURL=432.7c8309c23284ee35dd41m.js.map