(self.webpackChunkweb_shell=self.webpackChunkweb_shell||[]).push([[447,654],{654:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var i=n(5827),r=n(4829);function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}const a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._deprecatedAPIUsage=new Set,this._analyticsV2=r.Z.getAppExperienceData("analyticsV2"),this._environment=r.Z.getEnvironment(),this._getECSPayload=null}var t,a;return t=e,(a=[{key:"_enrichPayloadAndTrack",value:async function(e,t){const i=await this._getECSPayload(e.eventData,t),r=(await Promise.resolve().then(n.bind(n,9498))).default;await r.track(i,t)}},{key:"handleAction",value:async function(e){const{payload:t,context:o}=e,{event_sender_path:a}=t.eventData;if(a&&a.length>0&&(a.forEach((e=>{if(e.name){const t=e.name.split("/")[0],{assetId:n,assetAlias:i,version:o}=r.Z.getPlugin(t);e.asset_id=n,e.asset_alias=i,e.asset_version=o}})),a&&a[0])){const e=a[0],{appExpId:n,assetId:i}=r.Z.getCompleteEventContext();t.eventData.event_sender_asset_id=e.asset_id,t.eventData.event_sender_asset_alias=e.asset_alias,t.eventData.event_sender_asset_version=e.asset_version,t.eventData.event_sender_app_alias=n,t.eventData.event_sender_app_id=i}Object.assign(o,this._analyticsV2,{environment:this._environment});try{if("track"===e.command)if(this._getECSPayload)await this._enrichPayloadAndTrack(t,o);else{const{default:e}=await n.e(378).then(n.bind(n,378));this._getECSPayload=e.getECSPayload,await this._enrichPayloadAndTrack(t,o)}else if("trackEvent"===e.command){this._logDeprecatedAPIUsage(o.pluginId,t.eventName);const e=(await Promise.resolve().then(n.bind(n,9498))).default;await e.trackEvent(t,o)}else i.Z.error("Unsupported analytics event type: ".concat(e.command))}catch(t){i.Z.error("Error dispatching tracking payload",{actionCommand:e.command},t,o.pluginId,o)}}},{key:"_logDeprecatedAPIUsage",value:function(e,t){let n="Deprecated sandbox analytics API used by plugin";const r={pluginId:e||"",eventName:t||""};if(e){if(this._deprecatedAPIUsage.has(e))return;n="".concat(n,": ").concat(e),this._deprecatedAPIUsage.add(e)}i.Z.warn(n,{usageInfo:r},{},"web-shell")}}])&&o(t.prototype,a),e}()},447:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Q});var i=n(9713),r=n(4755),o=n.n(r),a=n(4060),l=n.n(a),c=n(2623),s=n(8531),u=n(5447),f=n(8800),d=n(4829);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function v(e,t,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}(e,t);if(i){var r=Object.getOwnPropertyDescriptor(i,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}let m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(a,e);var t,n,i,r,o=(i=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(i);if(r){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(e){var t;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),d.Z.isExperimentApplicable("enable-route-path-param")){const n="",i={};i[e.extension.config.path]="index",e.extension.config.path.endsWith("/")||(i["".concat(e.extension.config.path,"/")]="index"),t=o.call(this,h(h({},e),{},{root:n,routes:i}))}else(t=o.call(this,h(h({},e),{},{root:e.extension.config.path}))).root=e.extension.config.path;return t._widgetEvents=e.widgetEvents,t._requiredScreen=e.extension.config.widget.appScreen||"shell",t._widgetInfo={pluginSandbox:t.sandbox||{},widgetClass:e.widgetClass,widgetDescriptor:e.widgetDescriptor,widgetProps:e.extension.config.widget.extendedProperties||null},d.Z.isExperimentApplicable("enable-route-path-param")||t._initRoutes(),b(t)}return t=a,(n=[{key:"_getFullPath",value:function(e){const{root:t}=this._router,{path:n}=e;return""===n?t:""===t?n:0===n.lastIndexOf("?",0)?t+n:"".concat(t,"/").concat(n)}},{key:"_getRouteInfo",value:function(e){if(!e)return null;const t=this._getFullPath(e),[n]=t.split("?");return{path:t,pathOnly:n,params:e.params||null}}},{key:"_getView",value:function(e){return this._view?this._view.updateRouteInfo(e):this._view=new f.Z({routeInfo:e,widgetInfo:this._widgetInfo,widgetEvents:this._widgetEvents}),this._view}},{key:"index",value:function(e){return{view:this._getView(this._getRouteInfo(e)),layout:this._requiredScreen}}},{key:"onBeforeStart",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return v(w(a.prototype),"onBeforeStart",this).call(this,...t).then((()=>{d.Z.isExperimentApplicable("page-load-nav-started")||u.Z.pageInitiated("PAGE_LOAD:".concat("undefined"!=typeof window&&window.location.pathname||void 0))}))}}])&&_(t.prototype,n),a}(s.Z);var A=n(6859),P=n(4321);function E(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}const I=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"handleAction",value:function(e){u.Z.handleAction(e)}}])&&E(t.prototype,n),e}();var O=n(5958);function x(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}const k=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"handleAction",value:function(e){return O.Z.handleAction(e)}}])&&x(t.prototype,n),e}();var C=n(5827);function R(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}const j=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"handleAction",value:function(e){C.Z.handleAction(e)}}])&&R(t.prototype,n),e}();var Z=n(654);function T(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}const S=function(){function e(t){let{applicationContext:{getCorePlugin:n}}=t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._getCorePlugin=n}var t,i;return t=e,(i=[{key:"handleAction",value:async function(e){if(d.Z.isExperimentApplicable("enable-sandbox-remediation-api")){C.Z.debug("RemediateActionDelegator BeginHandleAction",{action:e});try{return this._loadPromise?await this._loadPromise:this._remediateActionHandler||(this._loadPromise=this._importHandler(),await this._loadPromise),this._remediateActionHandler.handleAction(e)}catch(t){C.Z.error("RemediateActionDelegator UnexpectedFailure",{action:e},t)}}else C.Z.info("RemediateActionDelegator ExperimentDisabled",{action:e});return Promise.reject()}},{key:"_importHandler",value:async function(){const e=(await n.e(5765).then(n.bind(n,9649))).default,t=await this._getCorePlugin("widgetManager");this._remediateActionHandler=new e({widgetManager:t}),this._loadPromise=null}}])&&T(t.prototype,i),e}();function D(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function H(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(a,e);var t,n,i,r,o=(i=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=N(i);if(r){var n=N(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return H(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=o.call(this,e))._initPerformance(),t._initLogging(),t._initAnalytics(),t._initExperiment(),t._initRemediate(e),t._registerForActions(),t}return t=a,(n=[{key:"_initLogging",value:function(){const e=new j;this._intuitLogAction=e.handleAction.bind(e)}},{key:"_initPerformance",value:function(){const e=new I;this._intuitPerformanceAction=e.handleAction.bind(e)}},{key:"_initAnalytics",value:function(){const e=new Z.default;this._analyticsAction=e.handleAction.bind(e)}},{key:"_initExperiment",value:function(){const e=new k;this._experimentAction=e.handleAction.bind(e)}},{key:"_initRemediate",value:function(e){const t=new S(e);this._remediateAction=t.handleAction.bind(t)}},{key:"_defaultActionHandler",value:function(e){console.log("default delegate action handler ",e)}},{key:"_registerForActions",value:function(){this.registerActionHandler(P.default.REMEDIATE_EVENT,this._remediateAction),this.registerActionHandler(P.default.LOG_EVENT,this._intuitLogAction),this.registerActionHandler(P.default.ANALYTICS_TRACK,this._analyticsAction),this.registerActionHandler(P.default.ANALYTICS_TRACK_EVENT,this._analyticsAction),this.registerActionHandler(P.default.WEB_SHELL_EVENT,this._defaultActionHandler.bind(this)),this.registerActionHandler(P.default.PERF_EVENT,this._intuitPerformanceAction),this.registerActionHandler(P.default.EXPERIMENT_REQUEST_WITH_CONTEXT,this._experimentAction)}}])&&D(t.prototype,n),a}(A.Z);var B=n(5793),U=n(9547);const W=()=>n.e(9681).then(n.bind(n,9681)),M=()=>n.e(4077).then(n.bind(n,4077)),V=()=>n.e(5413).then(n.bind(n,5413)),q=()=>n.e(2020).then(n.bind(n,2020)),K=()=>n.e(7022).then(n.bind(n,7022)),G=()=>Promise.all([n.e(631),n.e(890)]).then(n.bind(n,890)),z=()=>Promise.all([n.e(631),n.e(7906)]).then(n.bind(n,1172)),X=()=>n.e(4632).then(n.bind(n,4632));let Y=null;const Q={get(){const e=window.__shellInternal&&window.__shellInternal.pluginsInfo||{};Y=e.plugins||{};const t=function(){var e,t,n,r,o,a,l,s,u,f,p,h,g,_,v,y;const b={navigationRoot:(null===(e=window.__shellInternal)||void 0===e?void 0:e.navigationRoot)||"",supportHashInUrl:!0,appName:(null===(t=window.__shellInternal)||void 0===t||null===(n=t.appExperience)||void 0===n?void 0:n.title)||"Intuit App",appTheme:(null===(r=window.__shellInternal)||void 0===r||null===(o=r.applicationContext)||void 0===o?void 0:o.appTheme)||"Intuit",defaultWidgetRouteController:m,appDelegates:[F],corePlugins:[{navigationManager:G},{loader:q},{appDelegateManager:V},{widgetManager:z},{idsContext:W},{idsContextTS:M},{remoteLoader:X}],sandboxFactory:i.Z,pluginsConfig:null,sandboxExperimentAssignments:null===(a=window.__shellInternal)||void 0===a||null===(l=a.applicationContext)||void 0===l?void 0:l.experimentAssignments,authorization:null===(s=window.__shellInternal)||void 0===s||null===(u=s.appExperience)||void 0===u?void 0:u.authorization,sandboxAppContext:null===(f=window.__shellInternal)||void 0===f?void 0:f.applicationContext,sandboxPlatformInfo:d.Z.getPlatformInfo(),appApiKey:null===(p=window.__shellInternal)||void 0===p||null===(h=p.appExperience)||void 0===h?void 0:h.appApiKey,iusOptions:null===(g=window.__shellInternal)||void 0===g||null===(_=g.appExperience)||void 0===_?void 0:_.iusOptions,featureFlags:null===(v=window.__shellInternal)||void 0===v?void 0:v.featureFlags,customContext:null===(y=window.__shellInternal)||void 0===y?void 0:y.customContext,pageNotFoundRoute:d.Z.getShellExperiments("disable-page-not-found-route")?"":d.Z.getAppExperienceData("pageNotFoundRoute")||"appfabric-defaults/not-found",remoteLoaderConfig:{moduleFederation:{useDefaultBridge:!0,dependencyManifest:c,shareScope:"default"}},loaderConfig:{numRetries:2,isRetryEnabled:d.Z.getShellExperiments("retry-webpack-chunks")}};return d.Z.isExperimentApplicable("enable-widget-data-fetcher")&&b.corePlugins.push({dataFetcher:K}),b}();return(0,U.RW)(Y).then((()=>{t.pluginsConfig=Object.values(Y),function(e){o().getAppBaseSourceURL=()=>e.baseSourceURL,o().findById=t=>e.pluginsConfig.filter((e=>e.id===t))[0]}(t)})).then((()=>this._getAppPlugin(t))).catch((e=>{throw C.Z.error("Shell - appConfig get() failed",{},e),e}))},_getAppPlugin:function(e){const t=__shellInternal&&__shellInternal.appExperience,n=window.require,i=t&&t.appPlugin,r=Y[i],o=B.Z.getRumReporter();if(!t||!i||!r)return e;let a="",c="";try{a=(0,U.qq)(r),c=l().determineLayerPath(r)}catch(e){return C.Z.error("Shell - error determining app plugin asset url",{},e),Promise.reject(e)}const s=r.app&&r.app.controller||"";return new Promise(((t,l)=>{const f={paths:{[r._appBuild?r._appId:i]:a}};n.config?n.config(f):n(f),n([c],(()=>{o&&o.measure("fetchStart","appPluginLoad"),u.Z.markAndMeasureFromPageTiming("APP_PLUGIN_LOAD"),n([s],(n=>{n?n.then((n=>{o&&o.measure("fetchStart","appControllerLoad"),u.Z.markAndMeasureFromPageTiming("APP_CONTROLLER_LOAD"),e.AppController=n,e.appPluginId=i,t(e)})):t(e)}),(e=>{C.Z.error("Shell - failed to fetch appPlugin's AppController",{},e),l(e)}))}),(e=>{C.Z.error("Shell - failed to fetch AppPluginBundle",{},e),l(e)}))}))}}},8800:(e,t,n)=>{"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.d(t,{Z:()=>r});let r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._widgetInfo=t.widgetInfo,this.routeInfo=t.routeInfo,this._widgetEvents=t.widgetEvents,this._renderedWidgetInstance=null,this._widgetLifecycleCallbacks=t.widgetLifecycleCallbacks}var t,n;return t=e,(n=[{key:"updateRouteInfo",value:function(e){this.routeInfo=e}},{key:"updateRenderedWidget",value:function(e){this._renderedWidgetInstance=e}},{key:"getRenderedWidget",value:function(){return this._renderedWidgetInstance}},{key:"getWidgetLifecycleCallbacks",value:function(){return this._widgetLifecycleCallbacks||null}},{key:"getWidgetRenderInfo",value:function(){return this._widgetInfo}},{key:"getRouteInfo",value:function(){return this.routeInfo}}])&&i(t.prototype,n),e}()}}]);
//# sourceMappingURL=447.js.map