(self.webpackChunkweb_shell=self.webpackChunkweb_shell||[]).push([[7906,7494],{1172:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>K});var r=n(2196),i=n.n(r),o=n(9297),c=n.n(o),a=n(4229),s=n.n(a);function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){return e&&e.sandbox&&e.sandbox.logger||null}const p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(a,e);var t,n,r,i,o,c=(i=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(i);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return l(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=c.call(this,e))._loggedErrors=new Set,t}return t=a,r=[{key:"initialize",value:function(e){}},{key:"uninitialize",value:function(){}}],(n=[{key:"componentDidCatch",value:function(e,t){if(!this._loggedErrors.has[String(e)]){this._loggedErrors.add(String(e));const n=f(this.props),r="Fatal widget rendering error: ".concat(e,". Consider creating a fallback UI using an error boundary. To learn more, see https://reactjs.org/docs/error-boundaries.html"),i=t&&t.componentStack;n&&"function"==typeof n.logException?n.logException(r,e,{component_stack:i}):console.error(r,{error:e,componentStack:i}),this.err(e)}}},{key:"err",value:function(e){var t;e instanceof Error||(t=(t=e)||"An unknown error occurred",e=new Error(t)),this.invokePropsCallback("onError",e)}},{key:"ready",value:function(e){this.invokePropsCallback("onReady",e)}},{key:"waitStart",value:function(e){this.invokePropsCallback("onWaitStart",e)}},{key:"waitFinish",value:function(e){this.invokePropsCallback("onWaitFinish",e)}},{key:"done",value:function(e){this.invokePropsCallback("onDone",e)}},{key:"cancel",value:function(e){this.invokePropsCallback("onCancel",e)}},{key:"invokePropsCallback",value:function(e,t){const n=this.props[e];let r;if(!n||"function"!=typeof n)return r;try{r=n(t)}catch(t){const n=f(this.props),r="An error occurred invoking consumer callback: ".concat(e,". Error: ").concat(t.message);n&&"function"==typeof n.error?n.error(r):console.error(r)}return r}},{key:"getTrackingContext",value:function(){return{}}}])&&d(t.prototype,n),r&&d(t,r),a}(c().Component);p.isImplementedBy=e=>{const t=Object.getPrototypeOf(e);return!!(t.err&&t.ready&&t.waitStart&&t.waitFinish&&t.done&&t.cancel&&t.invokePropsCallback)},p.propTypes={consumerId:s().string,onError:s().func,onReady:s().func,onWaitStart:s().func,onWaitFinish:s().func,onDone:s().func,onCancel:s().func};const h=p;var y=n(3003),w=n(8912),b=n(2768),v=n(2268),_=n.n(v),m=n(3812),E=n(7494);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){P(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?M(e):t}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const R=w.Z.getLogger();function D(e){const{Widget:t,sandbox:n,descriptor:r,pluginId:i,lifecycleData:o,widgetInstanceId:a,consumingWidgetInstanceId:d}=e;let u=null;r.interface&&(u=e.descriptor.interface.methods);let l=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(h,e);var s,u,l,g,f,p=(g=h,f=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(g);if(f){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function h(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h),e=p.call(this),m.Z.add(a,{instanceId:a,name:r.id,version:r.version,widget:M(e),consumingWidgetInstanceId:d}),e}return s=h,l=[{key:"serializeWidgetLifecycleParams",value:function(){const e=W({},o);try{let t;const n=arguments.length<=0?void 0:arguments[0];t="string"==typeof n?n:n instanceof Error?n.message:JSON.stringify(n),e.params=t}catch(e){}return e}}],(u=[{key:"getChildContext",value:function(){return{sandbox:n}}},{key:"componentDidMount",value:function(){E.default.publish(E.default.widgetTopics.WIDGET_MOUNT,o);const e=_().findDOMNode(this);e&&(e.setAttribute("data-morpheus-widget","".concat(r.id,"@").concat(r.version)),e.setAttribute("data-morpheus-pluginid",i))}},{key:"componentWillUnmount",value:function(){m.Z.remove(a)}},{key:"render",value:function(){const e=W(W({},this.props),{},{sandbox:n,ref:"_wrappedWidget",onReady:function(){const e=h.serializeWidgetLifecycleParams(...arguments);if(E.default.publish(E.default.widgetTopics.WIDGET_READY,e),"function"==typeof this.props.onReady)return this.props.onReady(...arguments)}.bind(this),onError:function(){const e=h.serializeWidgetLifecycleParams(...arguments);if(E.default.publish(E.default.widgetTopics.WIDGET_ERROR,e),"function"==typeof this.props.onError)return this.props.onError(...arguments)}.bind(this)});return c().createElement(t,e)}},{key:"handleWidgetUIElementAction",value:function(e){if(!e||!e.elementId)throw new Error("ContainerWidget.handleWidgetUIElementAction: Invalid action for ui element. Widget: ".concat(a));const t=m.Z.get(a),{elementId:n}=e;if(!t)throw new Error("ContainerWidget.handleWidgetUIElementAction: Invalid state: No entry found for widget in widgetRuntimeInfoMap. This method should not be invoked on an unmounted Component. Widget: ".concat(a));const r=t.uiState,i=r&&r.elementsMap&&r.elementsMap[n];if(!i)throw new Error("ContainerWidget.handleWidgetUIElementAction: Invalid state: No entry found for UI element with id: ".concat(n,". Widget: ").concat(a));if(i.handler)try{return i.handler()}catch(e){const t="ContainerWidget.handleWidgetUIElementAction: Error invoking element handler for widget: ".concat(a);throw R.logException(t,e),new Error(e)}}}])&&I(s.prototype,u),l&&I(s,l),h}(c().Component);return l.getVersionInfo=()=>({pluginId:i,pluginVersion:n.pluginConfig&&n.pluginConfig.version,widgetId:r.id,widgetVersion:r.version}),u&&Object.keys(r.interface.methods).forEach((function(e){l.prototype[e]=function(){const t=this.refs._wrappedWidget;return t[e].apply(t,arguments)}})),l.prototype.getTrackingContext=function(){return this.refs._wrappedWidget.getTrackingContext()},l.childContextTypes={sandbox:s().object},l}const C=e=>D(e);var x=n(631);function S(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function G(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function q(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const V="widget",U="widget descriptor",Z="widget contributor";function B(e,t){const n=[];let r,i,o;for(o=0;o<t.length;o++)r=t[o],i=r.split("@"),i[0]===e&&n.push(i[1]);return n}const K=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(a,e);var t,n,r,o,c=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=F(r);if(o){var n=F(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function a(){var e;G(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=c.call(this,...n))._logger=w.Z.getLogger(),e._widgetsMap={},e._widgetsMetaMap={},e._pluginManager=e._applicationCtx.getPluginManager(),e}return t=a,(n=[{key:"onBeforeStart",value:function(){const e=this._applicationCtx.channel;e.get("extension-registered").subscribe(this._onExtensionRegistered.bind(this)),e.get("extension-unregistered").subscribe(this._onExtensionUnregistered.bind(this))}},{key:"onBeforeStop",value:function(){this._widgetsMap={},this._widgetsMetaMap={}}},{key:"getWidgetContributor",value:function(e,t){this._validateEntityRequest(e,t,Z);const n=this._getSuitableVersion(e,t.version);return n?n.contributorId:null}},{key:"getWidget",value:function(e,t){return this._getWidgetEntity(e,t,V)}},{key:"getWidgetForConsumer",value:function(e,t){return this._getWidgetEntityForConsumer(e,t,V)}},{key:"getWidgetDescriptor",value:function(e,t){return this._getWidgetEntity(e,t,U)}},{key:"getWidgetDescriptorForConsumer",value:function(e,t){return this._getWidgetEntityForConsumer(e,t,U)}},{key:"getSandbox",value:function(e,t,n){return this._getWidgetSandbox(e,t,n)}},{key:"isWidgetExtension",value:function(e){return 0===e.extensionPointId.indexOf("widgets:")}},{key:"_validateEntityRequest",value:function(e,t,n,r){let i;const{version:o}=t||{};if(e?o?x.Z.isValid(o)||(i="WidgetManager: Invalid semver string provided for the version parameter: ".concat(o)):i="WidgetManager: Version is required in the options to fetch the ".concat(n):i="WidgetManager: widget ID is required for fetching entity ".concat(n," and cannot be loaded without an ID."),i){const t=new Error(i);throw this._handleError(t,e,{lifecycleData:r}),t}}},{key:"_publishWidgetLifecycleEvent",value:function(e,t,n){n!==U&&n!==Z&&E.default.publish(e,t)}},{key:"_getWidgetEntity",value:function(e,t,n){var r,i;const{consumer:o}=t||{};let c,a;try{c=this._getSuitableVersion(e,t.version),a=b.Z.uniqueId("".concat(this._getWidgetMetaKey(c.contributorId,e,t.version),":"))}catch(e){a=void 0}const s=o?{consumingWidgetId:o&&o.widgetId,consumingPluginId:o&&o.pluginId,consumingWidgetInstanceId:o&&o.widgetInstanceId}:{},d=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({startTime:new Date,widgetId:e,widgetInstanceId:a,widgetVersion:t.version,pluginConfig:this._widgetsMap[e]&&this._widgetsMap[e].pluginConfig},s),u=parseInt(null===(r=this._widgetsMap[e])||void 0===r||null===(i=r.pluginConfig)||void 0===i?void 0:i.manifestVersion,10)>=5;this._publishWidgetLifecycleEvent(E.default.widgetTopics.WIDGET_REQUEST_START,d,n);const l=this;return Promise.resolve().then((function(){let r,i;if(l._validateEntityRequest(e,t,n,d),!c)return null;let{descriptor:o}=c.config;if(l._publishWidgetLifecycleEvent(E.default.widgetTopics.WIDGET_LOAD_START,d,n),u){const{id:e,version:t}=c.widgetProps;if(o={id:e,version:t},n===U)return o;const r="".concat(e,"@").concat(t);i=c.getExecutable(r)}else if("object"==typeof o)i=c.getExecutable(o.descriptorModulePath);else{if("string"!=typeof o){const t=new Error("WidgetManager: Unsupported descriptor type for ".concat(e,". Found ").concat(typeof o,", expected Object (for inline descriptors) or String (for a file path to descriptor)."));throw l._handleError(t,e,{lifecycleData:d}),t}i=c.getExecutable(o)}return i.then((function(e){l._publishWidgetLifecycleEvent(E.default.widgetTopics.WIDGET_LOAD_END,d,n);const i=l._getWidgetClass(e);if(!(u||l._validateDescriptorForExtension(e,c)&&l._validateWidgetClass(i,c)))return null;if(n===U)return e;r=l._getWidgetMetaKey(c.contributorId,e.id||o.id,e.version||o.version);const a=b.Z.uniqueId("".concat(r,":"));l._setWidgetMeta(r,"descriptor",e);const s=l._getWidgetSandbox(c,e,a);return l._initializeWidgetClass(e,s),C({Widget:i,widgetInstanceId:a,descriptor:u?o:e,sandbox:s,pluginId:c.contributorId,lifecycleData:d,consumingWidgetInstanceId:t.consumer&&t.consumer.widgetInstanceId})})).catch((t=>{throw function(e,t){const n=Object.getOwnPropertyDescriptor(e,t)||Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e),t)||{};return Boolean(n.writable)}(t,"message")&&(t.message="WidgetManager: Error occurred trying to fetch ".concat(n,": ").concat(e,". ").concat(t.message)),l._handleError(t,e,{lifecycleData:d}),t}))}))}},{key:"_getWidgetEntityForConsumer",value:function(e,t,n){const r=this;return Promise.resolve().then((()=>{t=t||{};const{consumer:i}=t,o=i&&i.pluginId,c=i&&i.widgetId,a=i&&i.widgetVersion,s=e;let d,u,l;if(!i){const t=new Error("WidgetManager: consumer info is required for fetching a ".concat(n));throw r._handleError(t,e),t}if(!o){const t=new Error("WidgetManager: consumer.pluginId is required for fetching a ".concat(n));throw r._handleError(t,e),t}const g=this._pluginManager.getPlugin(o);if(!g){const t=new Error("WidgetManager: No plugin registered with the ID given in consumer.pluginId: ".concat(o));throw r._handleError(t,e),t}if(u=B(e,g.config.dependencies.widgets),c&&a){if(d=this._getWidgetMetaKey(o,c,a),l=this._getWidgetMeta(d,"descriptor"),!l){const t=new Error("WidgetManager: Consuming widget has not been loaded: ".concat(c,"@").concat(a,". Unable to find descriptor in list of loaded widgets."));throw r._handleError(t,e),t}const t=B(e,l.dependencies&&l.dependencies.widgets||[]);u=t.length?t:u}if(0===u.length||t.version&&-1===u.indexOf(t.version)){const t=new Error("WidgetManager: The plugin did not provide a version for the required consumed widget: ".concat(s,", so WidgetManager cannot get it from declared dependencies."));throw r._handleError(t,e),t}if(u.length>1&&!t.version){const t=new Error("WidgetManager: The plugin provided an ambiguous version for a consumed widget. Multiple versions declared for required widget in consumer dependencies: ".concat(s,"."));throw r._handleError(t,e),t}return t.version||(t.version=u[0]),n===U?this.getWidgetDescriptor(e,t):this.getWidget(e,t)}))}},{key:"_getWidgetMetaKey",value:function(e,t,n){return"".concat(e,":").concat(t,"@").concat(n)}},{key:"_getWidgetMeta",value:function(e,t){const n=this._widgetsMetaMap[e];return n&&n[t]}},{key:"_setWidgetMeta",value:function(e,t,n){let r=this._widgetsMetaMap[e];r||(r={},this._widgetsMetaMap[e]=r),r[t]=n}},{key:"_clearWidgetMeta",value:function(e){const t=this._widgetsMetaMap;t[e]&&(t[e].descriptor&&this._uninitializeWidgetClass(t[e].descriptor),delete t[e])}},{key:"_getWidgetSandbox",value:function(e,t,n){const r=e.contributorId;let i;const o={config:e.config,descriptor:t,instanceInfo:{id:n}},c=this._pluginManager.getPlugin(r),a=this._applicationCtx.getSandboxFactory()||null;return i=a&&"function"==typeof a.createWidgetSandbox?a.createWidgetSandbox(c,o):Object.create(a),i}},{key:"_validateWidgetClass",value:function(e,t){let n=!0;const r="".concat(t.widgetProps.id,"@").concat(t.widgetProps.version);"function"!=typeof e&&(n=!1);const{prototype:i}=e;if(h.isImplementedBy(i)||(n=!1),!n){const e=new Error("WidgetManager: Invalid widget implementation for ".concat(r,". Ensure the widget is of function type and extends BaseWidget."));throw this._handleError(e,t.widgetProps.id),e}return n}},{key:"_getWidgetClass",value:function(e){return e?e.main?e.main.default||e.main:e.default:null}},{key:"_initializeWidgetClass",value:function(e,t){if(!e._initialized)try{const n=this._getWidgetClass(e);n&&n.initialize&&n.initialize(t),e._initialized=!0}catch(e){throw e&&e.message&&(e.message="Error calling initialize from the widget descriptor: ".concat(e.message)),e}}},{key:"_uninitializeWidgetClass",value:function(e){if(e&&e._initialized)try{const t=this._getWidgetClass(e);t.uninitialize&&t.uninitialize(),e._initialized=!1}catch(t){this._handleError(new Error("Error calling uninitialize: ".concat(t)),e.id)}}},{key:"_validateDescriptorForExtension",value:function(e,t){const n=t.widgetProps.id,r=t.widgetProps.version,i="".concat(n,"@").concat(r),o="Invalid Widget Descriptor: ".concat(i,". {{errorMessage}}");let c;return e.id!==n&&(c="Id in the config (".concat(n,") does not match id in the descriptor (").concat(e.id,").")),e.version!==r&&(c="Version in the config (".concat(r,") does not match version in the descriptor (").concat(e.version,") for widget ").concat(e.id,".")),!c||(c=o.replace("{{errorMessage}}",c),this._handleError(new Error(c),n),!1)}},{key:"_onExtensionUnregistered",value:function(e){const{extension:t}=e;this.isWidgetExtension(t)&&this._removeWidgetEntry(t)}},{key:"_onExtensionRegistered",value:function(e){const{extension:t}=e;this.isWidgetExtension(t)&&this._addWidgetEntry(t)}},{key:"_removeWidgetEntry",value:function(e){const t=e.widgetProps.id,n=e.widgetProps.version,r=this._widgetsMap[t];let i;r&&r[n]===e&&(delete r[n],i=this._getWidgetMetaKey(e.contributorId,t,n),this._clearWidgetMeta(i))}},{key:"_addWidgetEntry",value:function(e){const t=e.widgetProps.id,{version:n}=e.widgetProps;let r=this._widgetsMap[t];r?this._warnIfExtensionOverridesOrOverridden(e):(r={},this._widgetsMap[t]=r),this._widgetsMap[t].pluginConfig=e.pluginConfig,r[n]=e}},{key:"_warnIfExtensionOverridesOrOverridden",value:function(e){const t=e.widgetProps.id,n=e.widgetProps.version;let r;const o=this._getSuitableVersion(t,"".concat(i()(n),".0.0"));if(!o)return;const c=o.widgetProps.version;x.Z.isGreaterThanOrEqualTo(n,c)?(r="The given version ".concat(n," of the widget ").concat(t," provided by ").concat(e.contributorId," will override existing version ").concat(c," provided by ").concat(o.contributorId),this._logWarn(r,t)):(r="The given version ".concat(n," of the widget ").concat(t," provided by ").concat(e.contributorId," will be shadowed by greater version ").concat(c," provided by ").concat(o.contributorId),this._logWarn(r,t))}},{key:"_warnForExistingVersions",value:function(e,t){const n=this._getSuitableVersion(e,t);if(null===n)return;const r=n.widgetProps.version;x.Z.isGreaterThanOrEqualTo(t,r)?this._logWarn("Overriding widget already registered: ".concat(e,"@").concat(r," provided by contributor: ").concat(n.contributorId),e):this._logWarn("A greater satisfying version already available for the given major version: ".concat(e,"@").concat(r," provided by contributor: ").concat(n.contributorId),e)}},{key:"_getAvailableVersions",value:function(e){const t=this._widgetsMap[e];return t?Object.keys(t):null}},{key:"_getSuitableVersion",value:function(e,t){const n=this._getAvailableVersions(e);if(!n)return null;const r=x.Z.getSuitableVersion(n,t);return this._widgetsMap[e][r]||null}},{key:"_handleError",value:function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=e instanceof Error?e.message:e;r=r.replace("WidgetManager: ","");const i=n.lifecycleData||{};t&&(i.widgetId=t),this._publishWidgetLifecycleEvent(E.default.widgetTopics.WIDGET_MANAGER_ERROR,i);const{pluginConfig:o}=i,c=S(i,["pluginConfig"]);e instanceof Error?this._logger.logException("WidgetManager: ".concat(r),e,c):this._logger.error("WidgetManager: ".concat(r),c)}},{key:"_logWarn",value:function(e,t,n){if(t){const e=n||{widgetId:t};this._publishWidgetLifecycleEvent(E.default.widgetTopics.WIDGET_MANAGER_WARN,e)}this._logger.warn("WidgetManager: ".concat(e))}}])&&N(t.prototype,n),a}(y.Z)},7494:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p});var r=n(9724),i=n.n(r),o=n(9262),c=n(8912);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const l=Object.freeze({WIDGET_REQUEST_START:"widget-request-start",WIDGET_LOAD_START:"widget-load-start",WIDGET_LOAD_END:"widget-load-end",WIDGET_READY:"widget-ready",WIDGET_MOUNT:"widget-mount",WIDGET_MANAGER_WARN:"widget-manager-warn",WIDGET_MANAGER_ERROR:"widget-manager-error",WIDGET_ERROR:"widget-error"}),g="widget-lifecycle-topic",f=Object.values(l),p=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._firstPageLoadCompleted=!1,this.widgetTopics=l,this.widgetLifecycleTopicName=g,this._widgetLifecycleTopic=o.default.get(g),this._widgetPerformanceTopic=o.default.get("widget-performance-topic"),this._doWidgetProfiling=!1,this._widgetPerformanceLoadMap={},this._widgetPerformanceRenderMap={},this._widgetIdsLoaded=new Set}var t,n;return t=e,(n=[{key:"setFirstPageLoadCompleted",value:function(){this._firstPageLoadCompleted=!0}},{key:"getWidgetLifecycleTopic",value:function(){return this._widgetLifecycleTopic}},{key:"getWidgetPerformanceTopic",value:function(){return this._widgetPerformanceTopic}},{key:"setDoWidgetProfiling",value:function(e){this._doWidgetProfiling=e}},{key:"setWidgetLifecycleTopicHub",value:function(e){this._widgetLifecycleTopic=e||this._widgetLifecycleTopic}},{key:"setWidgetPerformanceTopicHub",value:function(e){this._widgetPerformanceTopic=e||this._widgetPerformanceTopic}},{key:"publish",value:function(e,t){try{if(!f.includes(e))throw new Error("Invalid widget topic: ".concat(e));const{timestamp:n}=t,r=JSON.parse(JSON.stringify(s({eventName:e},t)));r.timestamp=n||new Date,this._widgetLifecycleTopic.publish(r),this._doWidgetProfiling&&this._handleWidgetPerformanceEvent(r)}catch(e){c.Z.getLogger().logException(e.message,e)}}},{key:"_handleWidgetPerformanceEvent",value:function(e){const{WIDGET_LOAD_END:t,WIDGET_LOAD_START:n,WIDGET_READY:r,WIDGET_REQUEST_START:o,WIDGET_MANAGER_ERROR:c,WIDGET_ERROR:a}=this.widgetTopics,{eventName:d,widgetInstanceId:u,timestamp:l,pluginConfig:g,widgetId:f,startTime:p}=e,h=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["eventName","widgetInstanceId","timestamp","pluginConfig","widgetId","startTime"]);if(this._widgetPerformanceLoadMap[u]||this._widgetPerformanceRenderMap[u]||d!==o){const e=this._widgetPerformanceLoadMap[u],i=this._widgetPerformanceRenderMap[u];switch(e&&e.mark(d,l),i&&i.mark(d,l),d){case n:e.measure(o,"request-start-to-".concat(d),l);break;case t:this._widgetIdsLoaded.add(f),e.measure(o,"request-start-to-".concat(d),l),e.measure(n,"widget-load-time",l),e.end(),this._widgetPerformanceTopic.publish(e),delete this._widgetPerformanceLoadMap[u];break;case r:this.setFirstPageLoadCompleted(),i&&(i.measure(o,"request-start-to-".concat(d),l),i.end(),this._widgetPerformanceTopic.publish(i),delete this._widgetPerformanceRenderMap[u]);break;case c:e&&(e.end(),this._widgetPerformanceTopic.publish(e),delete this._widgetPerformanceLoadMap[u]),i&&(i.end(),this._widgetPerformanceTopic.publish(i),delete this._widgetPerformanceRenderMap[u]);break;case a:i&&(i.end(),this._widgetPerformanceTopic.publish(i),delete this._widgetPerformanceRenderMap[u]);break;default:e&&e.measure("start","request-start-to-".concat(d),l),i&&i.measure("start","request-start-to-".concat(d),l)}}else{const e=new(i().TraceProfiler)("widget-load::".concat(f)),t=new(i().TraceProfiler)("widget-render::".concat(f)),n=s(s({},h),{},{widgetId:f,pluginId:g&&g.id?g.id:"",pluginVersion:g&&g.version?g.version:"",isFirstLoad:!this._widgetIdsLoaded.has(f),isFirstPageLoad:!this._firstPageLoadCompleted}),r=Object.keys(n).filter((e=>void 0!==n[e]&&null!==n[e]&&""!==n[e])).reduce(((e,t)=>s(s({},e),{},{[t]:n[t]})),{});e.addMetadata(r),t.addMetadata(r),e.start(),t.start(),e.mark(o,l),t.mark(o,l),this._widgetPerformanceLoadMap[u]=e,this._widgetPerformanceRenderMap[u]=t}}}])&&u(t.prototype,n),e}())}}]);
//# sourceMappingURL=7906.js.map