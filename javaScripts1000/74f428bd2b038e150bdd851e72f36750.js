(self.webpackChunkweb_shell=self.webpackChunkweb_shell||[]).push([[7494],{7494:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>p});var r=i(9724),a=i.n(r),n=i(9262),o=i(8912);function c(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function d(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?c(Object(i),!0).forEach((function(t){s(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function g(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const l=Object.freeze({WIDGET_REQUEST_START:"widget-request-start",WIDGET_LOAD_START:"widget-load-start",WIDGET_LOAD_END:"widget-load-end",WIDGET_READY:"widget-ready",WIDGET_MOUNT:"widget-mount",WIDGET_MANAGER_WARN:"widget-manager-warn",WIDGET_MANAGER_ERROR:"widget-manager-error",WIDGET_ERROR:"widget-error"}),f="widget-lifecycle-topic",u=Object.values(l),p=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._firstPageLoadCompleted=!1,this.widgetTopics=l,this.widgetLifecycleTopicName=f,this._widgetLifecycleTopic=n.default.get(f),this._widgetPerformanceTopic=n.default.get("widget-performance-topic"),this._doWidgetProfiling=!1,this._widgetPerformanceLoadMap={},this._widgetPerformanceRenderMap={},this._widgetIdsLoaded=new Set}var t,i;return t=e,(i=[{key:"setFirstPageLoadCompleted",value:function(){this._firstPageLoadCompleted=!0}},{key:"getWidgetLifecycleTopic",value:function(){return this._widgetLifecycleTopic}},{key:"getWidgetPerformanceTopic",value:function(){return this._widgetPerformanceTopic}},{key:"setDoWidgetProfiling",value:function(e){this._doWidgetProfiling=e}},{key:"setWidgetLifecycleTopicHub",value:function(e){this._widgetLifecycleTopic=e||this._widgetLifecycleTopic}},{key:"setWidgetPerformanceTopicHub",value:function(e){this._widgetPerformanceTopic=e||this._widgetPerformanceTopic}},{key:"publish",value:function(e,t){try{if(!u.includes(e))throw new Error("Invalid widget topic: ".concat(e));const{timestamp:i}=t,r=JSON.parse(JSON.stringify(d({eventName:e},t)));r.timestamp=i||new Date,this._widgetLifecycleTopic.publish(r),this._doWidgetProfiling&&this._handleWidgetPerformanceEvent(r)}catch(e){o.Z.getLogger().logException(e.message,e)}}},{key:"_handleWidgetPerformanceEvent",value:function(e){const{WIDGET_LOAD_END:t,WIDGET_LOAD_START:i,WIDGET_READY:r,WIDGET_REQUEST_START:n,WIDGET_MANAGER_ERROR:o,WIDGET_ERROR:c}=this.widgetTopics,{eventName:s,widgetInstanceId:g,timestamp:l,pluginConfig:f,widgetId:u,startTime:p}=e,w=function(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}(e,["eventName","widgetInstanceId","timestamp","pluginConfig","widgetId","startTime"]);if(this._widgetPerformanceLoadMap[g]||this._widgetPerformanceRenderMap[g]||s!==n){const e=this._widgetPerformanceLoadMap[g],a=this._widgetPerformanceRenderMap[g];switch(e&&e.mark(s,l),a&&a.mark(s,l),s){case i:e.measure(n,"request-start-to-".concat(s),l);break;case t:this._widgetIdsLoaded.add(u),e.measure(n,"request-start-to-".concat(s),l),e.measure(i,"widget-load-time",l),e.end(),this._widgetPerformanceTopic.publish(e),delete this._widgetPerformanceLoadMap[g];break;case r:this.setFirstPageLoadCompleted(),a&&(a.measure(n,"request-start-to-".concat(s),l),a.end(),this._widgetPerformanceTopic.publish(a),delete this._widgetPerformanceRenderMap[g]);break;case o:e&&(e.end(),this._widgetPerformanceTopic.publish(e),delete this._widgetPerformanceLoadMap[g]),a&&(a.end(),this._widgetPerformanceTopic.publish(a),delete this._widgetPerformanceRenderMap[g]);break;case c:a&&(a.end(),this._widgetPerformanceTopic.publish(a),delete this._widgetPerformanceRenderMap[g]);break;default:e&&e.measure("start","request-start-to-".concat(s),l),a&&a.measure("start","request-start-to-".concat(s),l)}}else{const e=new(a().TraceProfiler)("widget-load::".concat(u)),t=new(a().TraceProfiler)("widget-render::".concat(u)),i=d(d({},w),{},{widgetId:u,pluginId:f&&f.id?f.id:"",pluginVersion:f&&f.version?f.version:"",isFirstLoad:!this._widgetIdsLoaded.has(u),isFirstPageLoad:!this._firstPageLoadCompleted}),r=Object.keys(i).filter((e=>void 0!==i[e]&&null!==i[e]&&""!==i[e])).reduce(((e,t)=>d(d({},e),{},{[t]:i[t]})),{});e.addMetadata(r),t.addMetadata(r),e.start(),t.start(),e.mark(n,l),t.mark(n,l),this._widgetPerformanceLoadMap[g]=e,this._widgetPerformanceRenderMap[g]=t}}}])&&g(t.prototype,i),e}())}}]);
//# sourceMappingURL=7494.js.map