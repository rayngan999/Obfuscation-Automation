<!DOCTYPE html><!--[if lt IE 7]> <html class="no-js oldie" lang="en"> <![endif]--><!--[if IE 7]> <html class="no-js ie7 oldie" lang="en"> <![endif]--><!--[if IE 8]> <html class="no-js ie8 oldie" lang="en"> <![endif]--><!--[if IE 9]> <html class="no-js ie9" lang="en"> <![endif]--><!--[if !IE]><!--><html class="no-js" lang="en"><!--<![endif]--><head><meta name="google-site-verification" content="_JOPsw_TZak4mL02wJmOyD8QIOTUJz3RuqDdaeEwDIc"/>

<meta charset="UTF-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/><script type="text/javascript">(window.NREUM||(NREUM={})).loader_config={xpid:"VgICVFJRGwEEXFJQBggA",licenseKey:"39260d23cf",applicationID:"24832197"};window.NREUM||(NREUM={}),__nr_require=function(t,e,n){function r(n){if(!e[n]){var o=e[n]={exports:{}};t[n][0].call(o.exports,function(e){var o=t[n][1][e];return r(o||e)},o,o.exports)}return e[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var o=0;o<n.length;o++)r(n[o]);return r}({1:[function(t,e,n){function r(t){try{s.console&&console.log(t)}catch(e){}}var o,i=t("ee"),a=t(29),s={};try{o=localStorage.getItem("__nr_flags").split(","),console&&"function"==typeof console.log&&(s.console=!0,o.indexOf("dev")!==-1&&(s.dev=!0),o.indexOf("nr_dev")!==-1&&(s.nrDev=!0))}catch(c){}s.nrDev&&i.on("internal-error",function(t){r(t.stack)}),s.dev&&i.on("fn-err",function(t,e,n){r(n.stack)}),s.dev&&(r("NR AGENT IN DEVELOPMENT MODE"),r("flags: "+a(s,function(t,e){return t}).join(", ")))},{}],2:[function(t,e,n){function r(t,e,n,r,s){try{l?l-=1:o(s||new UncaughtException(t,e,n),!0)}catch(f){try{i("ierr",[f,c.now(),!0])}catch(d){}}return"function"==typeof u&&u.apply(this,a(arguments))}function UncaughtException(t,e,n){this.message=t||"Uncaught error with no additional information",this.sourceURL=e,this.line=n}function o(t,e){var n=e?null:c.now();i("err",[t,n])}var i=t("handle"),a=t(30),s=t("ee"),c=t("loader"),f=t("gos"),u=window.onerror,d=!1,p="nr@seenError";if(!c.disabled){var l=0;c.features.err=!0,t(1),window.onerror=r;try{throw new Error}catch(h){"stack"in h&&(t(13),t(12),"addEventListener"in window&&t(6),c.xhrWrappable&&t(14),d=!0)}s.on("fn-start",function(t,e,n){d&&(l+=1)}),s.on("fn-err",function(t,e,n){d&&!n[p]&&(f(n,p,function(){return!0}),this.thrown=!0,o(n))}),s.on("fn-end",function(){d&&!this.thrown&&l>0&&(l-=1)}),s.on("internal-error",function(t){i("ierr",[t,c.now(),!0])})}},{}],3:[function(t,e,n){var r=t("loader");r.disabled||(r.features.ins=!0)},{}],4:[function(t,e,n){function r(){L++,C=g.hash,this[u]=y.now()}function o(){L--,g.hash!==C&&i(0,!0);var t=y.now();this[h]=~~this[h]+t-this[u],this[d]=t}function i(t,e){E.emit("newURL",[""+g,e])}function a(t,e){t.on(e,function(){this[e]=y.now()})}var s="-start",c="-end",f="-body",u="fn"+s,d="fn"+c,p="cb"+s,l="cb"+c,h="jsTime",m="fetch",v="addEventListener",w=window,g=w.location,y=t("loader");if(w[v]&&y.xhrWrappable&&!y.disabled){var x=t(10),b=t(11),E=t(8),R=t(6),O=t(13),S=t(7),N=t(14),M=t(9),P=t("ee"),T=P.get("tracer");t(16),y.features.spa=!0;var C,L=0;P.on(u,r),b.on(p,r),M.on(p,r),P.on(d,o),b.on(l,o),M.on(l,o),P.buffer([u,d,"xhr-done","xhr-resolved"]),R.buffer([u]),O.buffer(["setTimeout"+c,"clearTimeout"+s,u]),N.buffer([u,"new-xhr","send-xhr"+s]),S.buffer([m+s,m+"-done",m+f+s,m+f+c]),E.buffer(["newURL"]),x.buffer([u]),b.buffer(["propagate",p,l,"executor-err","resolve"+s]),T.buffer([u,"no-"+u]),M.buffer(["new-jsonp","cb-start","jsonp-error","jsonp-end"]),a(N,"send-xhr"+s),a(P,"xhr-resolved"),a(P,"xhr-done"),a(S,m+s),a(S,m+"-done"),a(M,"new-jsonp"),a(M,"jsonp-end"),a(M,"cb-start"),E.on("pushState-end",i),E.on("replaceState-end",i),w[v]("hashchange",i,!0),w[v]("load",i,!0),w[v]("popstate",function(){i(0,L>1)},!0)}},{}],5:[function(t,e,n){function r(t){}if(window.performance&&window.performance.timing&&window.performance.getEntriesByType){var o=t("ee"),i=t("handle"),a=t(13),s=t(12),c="learResourceTimings",f="addEventListener",u="resourcetimingbufferfull",d="bstResource",p="resource",l="-start",h="-end",m="fn"+l,v="fn"+h,w="bstTimer",g="pushState",y=t("loader");if(!y.disabled){y.features.stn=!0,t(8),"addEventListener"in window&&t(6);var x=NREUM.o.EV;o.on(m,function(t,e){var n=t[0];n instanceof x&&(this.bstStart=y.now())}),o.on(v,function(t,e){var n=t[0];n instanceof x&&i("bst",[n,e,this.bstStart,y.now()])}),a.on(m,function(t,e,n){this.bstStart=y.now(),this.bstType=n}),a.on(v,function(t,e){i(w,[e,this.bstStart,y.now(),this.bstType])}),s.on(m,function(){this.bstStart=y.now()}),s.on(v,function(t,e){i(w,[e,this.bstStart,y.now(),"requestAnimationFrame"])}),o.on(g+l,function(t){this.time=y.now(),this.startPath=location.pathname+location.hash}),o.on(g+h,function(t){i("bstHist",[location.pathname+location.hash,this.startPath,this.time])}),f in window.performance&&(window.performance["c"+c]?window.performance[f](u,function(t){i(d,[window.performance.getEntriesByType(p)]),window.performance["c"+c]()},!1):window.performance[f]("webkit"+u,function(t){i(d,[window.performance.getEntriesByType(p)]),window.performance["webkitC"+c]()},!1)),document[f]("scroll",r,{passive:!0}),document[f]("keypress",r,!1),document[f]("click",r,!1)}}},{}],6:[function(t,e,n){function r(t){for(var e=t;e&&!e.hasOwnProperty(u);)e=Object.getPrototypeOf(e);e&&o(e)}function o(t){s.inPlace(t,[u,d],"-",i)}function i(t,e){return t[1]}var a=t("ee").get("events"),s=t("wrap-function")(a,!0),c=t("gos"),f=XMLHttpRequest,u="addEventListener",d="removeEventListener";e.exports=a,"getPrototypeOf"in Object?(r(document),r(window),r(f.prototype)):f.prototype.hasOwnProperty(u)&&(o(window),o(f.prototype)),a.on(u+"-start",function(t,e){var n=t[1],r=c(n,"nr@wrapped",function(){function t(){if("function"==typeof n.handleEvent)return n.handleEvent.apply(n,arguments)}var e={object:t,"function":n}[typeof n];return e?s(e,"fn-",null,e.name||"anonymous"):n});this.wrapped=t[1]=r}),a.on(d+"-start",function(t){t[1]=this.wrapped||t[1]})},{}],7:[function(t,e,n){function r(t,e,n){var r=t[e];"function"==typeof r&&(t[e]=function(){var t=i(arguments),e={};o.emit(n+"before-start",[t],e);var a;e[m]&&e[m].dt&&(a=e[m].dt);var s=r.apply(this,t);return o.emit(n+"start",[t,a],s),s.then(function(t){return o.emit(n+"end",[null,t],s),t},function(t){throw o.emit(n+"end",[t],s),t})})}var o=t("ee").get("fetch"),i=t(30),a=t(29);e.exports=o;var s=window,c="fetch-",f=c+"body-",u=["arrayBuffer","blob","json","text","formData"],d=s.Request,p=s.Response,l=s.fetch,h="prototype",m="nr@context";d&&p&&l&&(a(u,function(t,e){r(d[h],e,f),r(p[h],e,f)}),r(s,"fetch",c),o.on(c+"end",function(t,e){var n=this;if(e){var r=e.headers.get("content-length");null!==r&&(n.rxSize=r),o.emit(c+"done",[null,e],n)}else o.emit(c+"done",[t],n)}))},{}],8:[function(t,e,n){var r=t("ee").get("history"),o=t("wrap-function")(r);e.exports=r;var i=window.history&&window.history.constructor&&window.history.constructor.prototype,a=window.history;i&&i.pushState&&i.replaceState&&(a=i),o.inPlace(a,["pushState","replaceState"],"-")},{}],9:[function(t,e,n){function r(t){function e(){c.emit("jsonp-end",[],p),t.removeEventListener("load",e,!1),t.removeEventListener("error",n,!1)}function n(){c.emit("jsonp-error",[],p),c.emit("jsonp-end",[],p),t.removeEventListener("load",e,!1),t.removeEventListener("error",n,!1)}var r=t&&"string"==typeof t.nodeName&&"script"===t.nodeName.toLowerCase();if(r){var o="function"==typeof t.addEventListener;if(o){var a=i(t.src);if(a){var u=s(a),d="function"==typeof u.parent[u.key];if(d){var p={};f.inPlace(u.parent,[u.key],"cb-",p),t.addEventListener("load",e,!1),t.addEventListener("error",n,!1),c.emit("new-jsonp",[t.src],p)}}}}}function o(){return"addEventListener"in window}function i(t){var e=t.match(u);return e?e[1]:null}function a(t,e){var n=t.match(p),r=n[1],o=n[3];return o?a(o,e[r]):e[r]}function s(t){var e=t.match(d);return e&&e.length>=3?{key:e[2],parent:a(e[1],window)}:{key:t,parent:window}}var c=t("ee").get("jsonp"),f=t("wrap-function")(c);if(e.exports=c,o()){var u=/[?&](?:callback|cb)=([^&#]+)/,d=/(.*)\.([^.]+)/,p=/^(\w+)(\.|$)(.*)$/,l=["appendChild","insertBefore","replaceChild"];Node&&Node.prototype&&Node.prototype.appendChild?f.inPlace(Node.prototype,l,"dom-"):(f.inPlace(HTMLElement.prototype,l,"dom-"),f.inPlace(HTMLHeadElement.prototype,l,"dom-"),f.inPlace(HTMLBodyElement.prototype,l,"dom-")),c.on("dom-start",function(t){r(t[0])})}},{}],10:[function(t,e,n){var r=t("ee").get("mutation"),o=t("wrap-function")(r),i=NREUM.o.MO;e.exports=r,i&&(window.MutationObserver=function(t){return this instanceof i?new i(o(t,"fn-")):i.apply(this,arguments)},MutationObserver.prototype=i.prototype)},{}],11:[function(t,e,n){function r(t){var e=i.context(),n=s(t,"executor-",e,null,!1),r=new f(n);return i.context(r).getCtx=function(){return e},r}var o=t("wrap-function"),i=t("ee").get("promise"),a=t("ee").getOrSetContext,s=o(i),c=t(29),f=NREUM.o.PR;e.exports=i,f&&(window.Promise=r,["all","race"].forEach(function(t){var e=f[t];f[t]=function(n){function r(t){return function(){i.emit("propagate",[null,!o],a,!1,!1),o=o||!t}}var o=!1;c(n,function(e,n){Promise.resolve(n).then(r("all"===t),r(!1))});var a=e.apply(f,arguments),s=f.resolve(a);return s}}),["resolve","reject"].forEach(function(t){var e=f[t];f[t]=function(t){var n=e.apply(f,arguments);return t!==n&&i.emit("propagate",[t,!0],n,!1,!1),n}}),f.prototype["catch"]=function(t){return this.then(null,t)},f.prototype=Object.create(f.prototype,{constructor:{value:r}}),c(Object.getOwnPropertyNames(f),function(t,e){try{r[e]=f[e]}catch(n){}}),o.wrapInPlace(f.prototype,"then",function(t){return function(){var e=this,n=o.argsToArray.apply(this,arguments),r=a(e);r.promise=e,n[0]=s(n[0],"cb-",r,null,!1),n[1]=s(n[1],"cb-",r,null,!1);var c=t.apply(this,n);return r.nextPromise=c,i.emit("propagate",[e,!0],c,!1,!1),c}}),i.on("executor-start",function(t){t[0]=s(t[0],"resolve-",this,null,!1),t[1]=s(t[1],"resolve-",this,null,!1)}),i.on("executor-err",function(t,e,n){t[1](n)}),i.on("cb-end",function(t,e,n){i.emit("propagate",[n,!0],this.nextPromise,!1,!1)}),i.on("propagate",function(t,e,n){this.getCtx&&!e||(this.getCtx=function(){if(t instanceof Promise)var e=i.context(t);return e&&e.getCtx?e.getCtx():this})}),r.toString=function(){return""+f})},{}],12:[function(t,e,n){var r=t("ee").get("raf"),o=t("wrap-function")(r),i="equestAnimationFrame";e.exports=r,o.inPlace(window,["r"+i,"mozR"+i,"webkitR"+i,"msR"+i],"raf-"),r.on("raf-start",function(t){t[0]=o(t[0],"fn-")})},{}],13:[function(t,e,n){function r(t,e,n){t[0]=a(t[0],"fn-",null,n)}function o(t,e,n){this.method=n,this.timerDuration=isNaN(t[1])?0:+t[1],t[0]=a(t[0],"fn-",this,n)}var i=t("ee").get("timer"),a=t("wrap-function")(i),s="setTimeout",c="setInterval",f="clearTimeout",u="-start",d="-";e.exports=i,a.inPlace(window,[s,"setImmediate"],s+d),a.inPlace(window,[c],c+d),a.inPlace(window,[f,"clearImmediate"],f+d),i.on(c+u,r),i.on(s+u,o)},{}],14:[function(t,e,n){function r(t,e){d.inPlace(e,["onreadystatechange"],"fn-",s)}function o(){var t=this,e=u.context(t);t.readyState>3&&!e.resolved&&(e.resolved=!0,u.emit("xhr-resolved",[],t)),d.inPlace(t,g,"fn-",s)}function i(t){y.push(t),h&&(b?b.then(a):v?v(a):(E=-E,R.data=E))}function a(){for(var t=0;t<y.length;t++)r([],y[t]);y.length&&(y=[])}function s(t,e){return e}function c(t,e){for(var n in t)e[n]=t[n];return e}t(6);var f=t("ee"),u=f.get("xhr"),d=t("wrap-function")(u),p=NREUM.o,l=p.XHR,h=p.MO,m=p.PR,v=p.SI,w="readystatechange",g=["onload","onerror","onabort","onloadstart","onloadend","onprogress","ontimeout"],y=[];e.exports=u;var x=window.XMLHttpRequest=function(t){var e=new l(t);try{u.emit("new-xhr",[e],e),e.addEventListener(w,o,!1)}catch(n){try{u.emit("internal-error",[n])}catch(r){}}return e};if(c(l,x),x.prototype=l.prototype,d.inPlace(x.prototype,["open","send"],"-xhr-",s),u.on("send-xhr-start",function(t,e){r(t,e),i(e)}),u.on("open-xhr-start",r),h){var b=m&&m.resolve();if(!v&&!m){var E=1,R=document.createTextNode(E);new h(a).observe(R,{characterData:!0})}}else f.on("fn-end",function(t){t[0]&&t[0].type===w||a()})},{}],15:[function(t,e,n){function r(t){if(!s(t))return null;var e=window.NREUM;if(!e.loader_config)return null;var n=(e.loader_config.accountID||"").toString()||null,r=(e.loader_config.agentID||"").toString()||null,f=(e.loader_config.trustKey||"").toString()||null;if(!n||!r)return null;var h=l.generateSpanId(),m=l.generateTraceId(),v=Date.now(),w={spanId:h,traceId:m,timestamp:v};return(t.sameOrigin||c(t)&&p())&&(w.traceContextParentHeader=o(h,m),w.traceContextStateHeader=i(h,v,n,r,f)),(t.sameOrigin&&!u()||!t.sameOrigin&&c(t)&&d())&&(w.newrelicHeader=a(h,m,v,n,r,f)),w}function o(t,e){return"00-"+e+"-"+t+"-01"}function i(t,e,n,r,o){var i=0,a="",s=1,c="",f="";return o+"@nr="+i+"-"+s+"-"+n+"-"+r+"-"+t+"-"+a+"-"+c+"-"+f+"-"+e}function a(t,e,n,r,o,i){var a="btoa"in window&&"function"==typeof window.btoa;if(!a)return null;var s={v:[0,1],d:{ty:"Browser",ac:r,ap:o,id:t,tr:e,ti:n}};return i&&r!==i&&(s.d.tk=i),btoa(JSON.stringify(s))}function s(t){return f()&&c(t)}function c(t){var e=!1,n={};if("init"in NREUM&&"distributed_tracing"in NREUM.init&&(n=NREUM.init.distributed_tracing),t.sameOrigin)e=!0;else if(n.allowed_origins instanceof Array)for(var r=0;r<n.allowed_origins.length;r++){var o=h(n.allowed_origins[r]);if(t.hostname===o.hostname&&t.protocol===o.protocol&&t.port===o.port){e=!0;break}}return e}function f(){return"init"in NREUM&&"distributed_tracing"in NREUM.init&&!!NREUM.init.distributed_tracing.enabled}function u(){return"init"in NREUM&&"distributed_tracing"in NREUM.init&&!!NREUM.init.distributed_tracing.exclude_newrelic_header}function d(){return"init"in NREUM&&"distributed_tracing"in NREUM.init&&NREUM.init.distributed_tracing.cors_use_newrelic_header!==!1}function p(){return"init"in NREUM&&"distributed_tracing"in NREUM.init&&!!NREUM.init.distributed_tracing.cors_use_tracecontext_headers}var l=t(26),h=t(17);e.exports={generateTracePayload:r,shouldGenerateTrace:s}},{}],16:[function(t,e,n){function r(t){var e=this.params,n=this.metrics;if(!this.ended){this.ended=!0;for(var r=0;r<p;r++)t.removeEventListener(d[r],this.listener,!1);e.aborted||(n.duration=a.now()-this.startTime,this.loadCaptureCalled||4!==t.readyState?null==e.status&&(e.status=0):i(this,t),n.cbTime=this.cbTime,u.emit("xhr-done",[t],t),s("xhr",[e,n,this.startTime]))}}function o(t,e){var n=c(e),r=t.params;r.host=n.hostname+":"+n.port,r.pathname=n.pathname,t.parsedOrigin=n,t.sameOrigin=n.sameOrigin}function i(t,e){t.params.status=e.status;var n=v(e,t.lastSize);if(n&&(t.metrics.rxSize=n),t.sameOrigin){var r=e.getResponseHeader("X-NewRelic-App-Data");r&&(t.params.cat=r.split(", ").pop())}t.loadCaptureCalled=!0}var a=t("loader");if(a.xhrWrappable&&!a.disabled){var s=t("handle"),c=t(17),f=t(15).generateTracePayload,u=t("ee"),d=["load","error","abort","timeout"],p=d.length,l=t("id"),h=t(22),m=t(21),v=t(18),w=NREUM.o.REQ,g=window.XMLHttpRequest;a.features.xhr=!0,t(14),t(7),u.on("new-xhr",function(t){var e=this;e.totalCbs=0,e.called=0,e.cbTime=0,e.end=r,e.ended=!1,e.xhrGuids={},e.lastSize=null,e.loadCaptureCalled=!1,e.params=this.params||{},e.metrics=this.metrics||{},t.addEventListener("load",function(n){i(e,t)},!1),h&&(h>34||h<10)||window.opera||t.addEventListener("progress",function(t){e.lastSize=t.loaded},!1)}),u.on("open-xhr-start",function(t){this.params={method:t[0]},o(this,t[1]),this.metrics={}}),u.on("open-xhr-end",function(t,e){"loader_config"in NREUM&&"xpid"in NREUM.loader_config&&this.sameOrigin&&e.setRequestHeader("X-NewRelic-ID",NREUM.loader_config.xpid);var n=f(this.parsedOrigin);if(n){var r=!1;n.newrelicHeader&&(e.setRequestHeader("newrelic",n.newrelicHeader),r=!0),n.traceContextParentHeader&&(e.setRequestHeader("traceparent",n.traceContextParentHeader),n.traceContextStateHeader&&e.setRequestHeader("tracestate",n.traceContextStateHeader),r=!0),r&&(this.dt=n)}}),u.on("send-xhr-start",function(t,e){var n=this.metrics,r=t[0],o=this;if(n&&r){var i=m(r);i&&(n.txSize=i)}this.startTime=a.now(),this.listener=function(t){try{"abort"!==t.type||o.loadCaptureCalled||(o.params.aborted=!0),("load"!==t.type||o.called===o.totalCbs&&(o.onloadCalled||"function"!=typeof e.onload))&&o.end(e)}catch(n){try{u.emit("internal-error",[n])}catch(r){}}};for(var s=0;s<p;s++)e.addEventListener(d[s],this.listener,!1)}),u.on("xhr-cb-time",function(t,e,n){this.cbTime+=t,e?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof n.onload||this.end(n)}),u.on("xhr-load-added",function(t,e){var n=""+l(t)+!!e;this.xhrGuids&&!this.xhrGuids[n]&&(this.xhrGuids[n]=!0,this.totalCbs+=1)}),u.on("xhr-load-removed",function(t,e){var n=""+l(t)+!!e;this.xhrGuids&&this.xhrGuids[n]&&(delete this.xhrGuids[n],this.totalCbs-=1)}),u.on("addEventListener-end",function(t,e){e instanceof g&&"load"===t[0]&&u.emit("xhr-load-added",[t[1],t[2]],e)}),u.on("removeEventListener-end",function(t,e){e instanceof g&&"load"===t[0]&&u.emit("xhr-load-removed",[t[1],t[2]],e)}),u.on("fn-start",function(t,e,n){e instanceof g&&("onload"===n&&(this.onload=!0),("load"===(t[0]&&t[0].type)||this.onload)&&(this.xhrCbStart=a.now()))}),u.on("fn-end",function(t,e){this.xhrCbStart&&u.emit("xhr-cb-time",[a.now()-this.xhrCbStart,this.onload,e],e)}),u.on("fetch-before-start",function(t){function e(t,e){var n=!1;return e.newrelicHeader&&(t.set("newrelic",e.newrelicHeader),n=!0),e.traceContextParentHeader&&(t.set("traceparent",e.traceContextParentHeader),e.traceContextStateHeader&&t.set("tracestate",e.traceContextStateHeader),n=!0),n}var n,r=t[1]||{};"string"==typeof t[0]?n=t[0]:t[0]&&t[0].url?n=t[0].url:window.URL&&t[0]&&t[0]instanceof URL&&(n=t[0].href),n&&(this.parsedOrigin=c(n),this.sameOrigin=this.parsedOrigin.sameOrigin);var o=f(this.parsedOrigin);if(o&&(o.newrelicHeader||o.traceContextParentHeader))if("string"==typeof t[0]||window.URL&&t[0]&&t[0]instanceof URL){var i={};for(var a in r)i[a]=r[a];i.headers=new Headers(r.headers||{}),e(i.headers,o)&&(this.dt=o),t.length>1?t[1]=i:t.push(i)}else t[0]&&t[0].headers&&e(t[0].headers,o)&&(this.dt=o)}),u.on("fetch-start",function(t,e){this.params={},this.metrics={},this.startTime=a.now(),t.length>=1&&(this.target=t[0]),t.length>=2&&(this.opts=t[1]);var n,r=this.opts||{},i=this.target;"string"==typeof i?n=i:"object"==typeof i&&i instanceof w?n=i.url:window.URL&&"object"==typeof i&&i instanceof URL&&(n=i.href),o(this,n);var s=(""+(i&&i instanceof w&&i.method||r.method||"GET")).toUpperCase();this.params.method=s,this.txSize=m(r.body)||0}),u.on("fetch-done",function(t,e){this.params||(this.params={}),this.params.status=e?e.status:0;var n;"string"==typeof this.rxSize&&this.rxSize.length>0&&(n=+this.rxSize);var r={txSize:this.txSize,rxSize:n,duration:a.now()-this.startTime};s("xhr",[this.params,r,this.startTime])})}},{}],17:[function(t,e,n){var r={};e.exports=function(t){if(t in r)return r[t];var e=document.createElement("a"),n=window.location,o={};e.href=t,o.port=e.port;var i=e.href.split("://");!o.port&&i[1]&&(o.port=i[1].split("/")[0].split("@").pop().split(":")[1]),o.port&&"0"!==o.port||(o.port="https"===i[0]?"443":"80"),o.hostname=e.hostname||n.hostname,o.pathname=e.pathname,o.protocol=i[0],"/"!==o.pathname.charAt(0)&&(o.pathname="/"+o.pathname);var a=!e.protocol||":"===e.protocol||e.protocol===n.protocol,s=e.hostname===document.domain&&e.port===n.port;return o.sameOrigin=a&&(!e.hostname||s),"/"===o.pathname&&(r[t]=o),o}},{}],18:[function(t,e,n){function r(t,e){var n=t.responseType;return"json"===n&&null!==e?e:"arraybuffer"===n||"blob"===n||"json"===n?o(t.response):"text"===n||""===n||void 0===n?o(t.responseText):void 0}var o=t(21);e.exports=r},{}],19:[function(t,e,n){function r(){}function o(t,e,n){return function(){return i(t,[f.now()].concat(s(arguments)),e?null:this,n),e?void 0:this}}var i=t("handle"),a=t(29),s=t(30),c=t("ee").get("tracer"),f=t("loader"),u=NREUM;"undefined"==typeof window.newrelic&&(newrelic=u);var d=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],p="api-",l=p+"ixn-";a(d,function(t,e){u[e]=o(p+e,!0,"api")}),u.addPageAction=o(p+"addPageAction",!0),u.setCurrentRouteName=o(p+"routeName",!0),e.exports=newrelic,u.interaction=function(){return(new r).get()};var h=r.prototype={createTracer:function(t,e){var n={},r=this,o="function"==typeof e;return i(l+"tracer",[f.now(),t,n],r),function(){if(c.emit((o?"":"no-")+"fn-start",[f.now(),r,o],n),o)try{return e.apply(this,arguments)}catch(t){throw c.emit("fn-err",[arguments,this,t],n),t}finally{c.emit("fn-end",[f.now()],n)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(t,e){h[e]=o(l+e)}),newrelic.noticeError=function(t,e){"string"==typeof t&&(t=new Error(t)),i("err",[t,f.now(),!1,e])}},{}],20:[function(t,e,n){function r(t){if(NREUM.init){for(var e=NREUM.init,n=t.split("."),r=0;r<n.length-1;r++)if(e=e[n[r]],"object"!=typeof e)return;return e=e[n[n.length-1]]}}e.exports={getConfiguration:r}},{}],21:[function(t,e,n){e.exports=function(t){if("string"==typeof t&&t.length)return t.length;if("object"==typeof t){if("undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer&&t.byteLength)return t.byteLength;if("undefined"!=typeof Blob&&t instanceof Blob&&t.size)return t.size;if(!("undefined"!=typeof FormData&&t instanceof FormData))try{return JSON.stringify(t).length}catch(e){return}}}},{}],22:[function(t,e,n){var r=0,o=navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/);o&&(r=+o[1]),e.exports=r},{}],23:[function(t,e,n){function r(){return s.exists&&performance.now?Math.round(performance.now()):(i=Math.max((new Date).getTime(),i))-a}function o(){return i}var i=(new Date).getTime(),a=i,s=t(31);e.exports=r,e.exports.offset=a,e.exports.getLastTimestamp=o},{}],24:[function(t,e,n){function r(t){return!(!t||!t.protocol||"file:"===t.protocol)}e.exports=r},{}],25:[function(t,e,n){function r(t,e){var n=t.getEntries();n.forEach(function(t){"first-paint"===t.name?d("timing",["fp",Math.floor(t.startTime)]):"first-contentful-paint"===t.name&&d("timing",["fcp",Math.floor(t.startTime)])})}function o(t,e){var n=t.getEntries();n.length>0&&d("lcp",[n[n.length-1]])}function i(t){t.getEntries().forEach(function(t){t.hadRecentInput||d("cls",[t])})}function a(t){if(t instanceof h&&!v){var e=Math.round(t.timeStamp),n={type:t.type};e<=p.now()?n.fid=p.now()-e:e>p.offset&&e<=Date.now()?(e-=p.offset,n.fid=p.now()-e):e=p.now(),v=!0,d("timing",["fi",e,n])}}function s(t){"hidden"===t&&d("pageHide",[p.now()])}if(!("init"in NREUM&&"page_view_timing"in NREUM.init&&"enabled"in NREUM.init.page_view_timing&&NREUM.init.page_view_timing.enabled===!1)){var c,f,u,d=t("handle"),p=t("loader"),l=t(28),h=NREUM.o.EV;if("PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver){c=new PerformanceObserver(r);try{c.observe({entryTypes:["paint"]})}catch(m){}f=new PerformanceObserver(o);try{f.observe({entryTypes:["largest-contentful-paint"]})}catch(m){}u=new PerformanceObserver(i);try{u.observe({type:"layout-shift",buffered:!0})}catch(m){}}if("addEventListener"in document){var v=!1,w=["click","keydown","mousedown","pointerdown","touchstart"];w.forEach(function(t){document.addEventListener(t,a,!1)})}l(s)}},{}],26:[function(t,e,n){function r(){function t(){return e?15&e[n++]:16*Math.random()|0}var e=null,n=0,r=window.crypto||window.msCrypto;r&&r.getRandomValues&&(e=r.getRandomValues(new Uint8Array(31)));for(var o,i="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",a="",s=0;s<i.length;s++)o=i[s],"x"===o?a+=t().toString(16):"y"===o?(o=3&t()|8,a+=o.toString(16)):a+=o;return a}function o(){return a(16)}function i(){return a(32)}function a(t){function e(){return n?15&n[r++]:16*Math.random()|0}var n=null,r=0,o=window.crypto||window.msCrypto;o&&o.getRandomValues&&Uint8Array&&(n=o.getRandomValues(new Uint8Array(31)));for(var i=[],a=0;a<t;a++)i.push(e().toString(16));return i.join("")}e.exports={generateUuid:r,generateSpanId:o,generateTraceId:i}},{}],27:[function(t,e,n){function r(t,e){if(!o)return!1;if(t!==o)return!1;if(!e)return!0;if(!i)return!1;for(var n=i.split("."),r=e.split("."),a=0;a<r.length;a++)if(r[a]!==n[a])return!1;return!0}var o=null,i=null,a=/Version\/(\S+)\s+Safari/;if(navigator.userAgent){var s=navigator.userAgent,c=s.match(a);c&&s.indexOf("Chrome")===-1&&s.indexOf("Chromium")===-1&&(o="Safari",i=c[1])}e.exports={agent:o,version:i,match:r}},{}],28:[function(t,e,n){function r(t){function e(){t(a&&document[a]?document[a]:document[o]?"hidden":"visible")}"addEventListener"in document&&i&&document.addEventListener(i,e,!1)}e.exports=r;var o,i,a;"undefined"!=typeof document.hidden?(o="hidden",i="visibilitychange",a="visibilityState"):"undefined"!=typeof document.msHidden?(o="msHidden",i="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(o="webkitHidden",i="webkitvisibilitychange",a="webkitVisibilityState")},{}],29:[function(t,e,n){function r(t,e){var n=[],r="",i=0;for(r in t)o.call(t,r)&&(n[i]=e(r,t[r]),i+=1);return n}var o=Object.prototype.hasOwnProperty;e.exports=r},{}],30:[function(t,e,n){function r(t,e,n){e||(e=0),"undefined"==typeof n&&(n=t?t.length:0);for(var r=-1,o=n-e||0,i=Array(o<0?0:o);++r<o;)i[r]=t[e+r];return i}e.exports=r},{}],31:[function(t,e,n){e.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(t,e,n){function r(){}function o(t){function e(t){return t&&t instanceof r?t:t?f(t,c,a):a()}function n(n,r,o,i,a){if(a!==!1&&(a=!0),!l.aborted||i){t&&a&&t(n,r,o);for(var s=e(o),c=m(n),f=c.length,u=0;u<f;u++)c[u].apply(s,r);var p=d[y[n]];return p&&p.push([x,n,r,s]),s}}function i(t,e){g[t]=m(t).concat(e)}function h(t,e){var n=g[t];if(n)for(var r=0;r<n.length;r++)n[r]===e&&n.splice(r,1)}function m(t){return g[t]||[]}function v(t){return p[t]=p[t]||o(n)}function w(t,e){l.aborted||u(t,function(t,n){e=e||"feature",y[n]=e,e in d||(d[e]=[])})}var g={},y={},x={on:i,addEventListener:i,removeEventListener:h,emit:n,get:v,listeners:m,context:e,buffer:w,abort:s,aborted:!1};return x}function i(t){return f(t,c,a)}function a(){return new r}function s(){(d.api||d.feature)&&(l.aborted=!0,d=l.backlog={})}var c="nr@context",f=t("gos"),u=t(29),d={},p={},l=e.exports=o();e.exports.getOrSetContext=i,l.backlog=d},{}],gos:[function(t,e,n){function r(t,e,n){if(o.call(t,e))return t[e];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(t,e,{value:r,writable:!0,enumerable:!1}),r}catch(i){}return t[e]=r,r}var o=Object.prototype.hasOwnProperty;e.exports=r},{}],handle:[function(t,e,n){function r(t,e,n,r){o.buffer([t],r),o.emit(t,e,n)}var o=t("ee").get("handle");e.exports=r,r.ee=o},{}],id:[function(t,e,n){function r(t){var e=typeof t;return!t||"object"!==e&&"function"!==e?-1:t===window?0:a(t,i,function(){return o++})}var o=1,i="nr@id",a=t("gos");e.exports=r},{}],loader:[function(t,e,n){function r(){if(!S++){var t=O.info=NREUM.info,e=m.getElementsByTagName("script")[0];if(setTimeout(f.abort,3e4),!(t&&t.licenseKey&&t.applicationID&&e))return f.abort();c(E,function(e,n){t[e]||(t[e]=n)});var n=a();s("mark",["onload",n+O.offset],null,"api"),s("timing",["load",n]);var r=m.createElement("script");0===t.agent.indexOf("http://")||0===t.agent.indexOf("https://")?r.src=t.agent:r.src=l+"://"+t.agent,e.parentNode.insertBefore(r,e)}}function o(){"complete"===m.readyState&&i()}function i(){s("mark",["domContent",a()+O.offset],null,"api")}var a=t(23),s=t("handle"),c=t(29),f=t("ee"),u=t(27),d=t(24),p=t(20),l=p.getConfiguration("ssl")===!1?"http":"https",h=window,m=h.document,v="addEventListener",w="attachEvent",g=h.XMLHttpRequest,y=g&&g.prototype,x=!d(h.location);NREUM.o={ST:setTimeout,SI:h.setImmediate,CT:clearTimeout,XHR:g,REQ:h.Request,EV:h.Event,PR:h.Promise,MO:h.MutationObserver};var b=""+location,E={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-spa-1210.min.js"},R=g&&y&&y[v]&&!/CriOS/.test(navigator.userAgent),O=e.exports={offset:a.getLastTimestamp(),now:a,origin:b,features:{},xhrWrappable:R,userAgent:u,disabled:x};if(!x){t(19),t(25),m[v]?(m[v]("DOMContentLoaded",i,!1),h[v]("load",r,!1)):(m[w]("onreadystatechange",o),h[w]("onload",r)),s("mark",["firstbyte",a.getLastTimestamp()],null,"api");var S=0}},{}],"wrap-function":[function(t,e,n){function r(t,e){function n(e,n,r,c,f){function nrWrapper(){var i,a,u,p;try{a=this,i=d(arguments),u="function"==typeof r?r(i,a):r||{}}catch(l){o([l,"",[i,a,c],u],t)}s(n+"start",[i,a,c],u,f);try{return p=e.apply(a,i)}catch(h){throw s(n+"err",[i,a,h],u,f),h}finally{s(n+"end",[i,a,p],u,f)}}return a(e)?e:(n||(n=""),nrWrapper[p]=e,i(e,nrWrapper,t),nrWrapper)}function r(t,e,r,o,i){r||(r="");var s,c,f,u="-"===r.charAt(0);for(f=0;f<e.length;f++)c=e[f],s=t[c],a(s)||(t[c]=n(s,u?c+r:r,o,c,i))}function s(n,r,i,a){if(!h||e){var s=h;h=!0;try{t.emit(n,r,i,e,a)}catch(c){o([c,n,r,i],t)}h=s}}return t||(t=u),n.inPlace=r,n.flag=p,n}function o(t,e){e||(e=u);try{e.emit("internal-error",t)}catch(n){}}function i(t,e,n){if(Object.defineProperty&&Object.keys)try{var r=Object.keys(t);return r.forEach(function(n){Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){return t[n]=e,e}})}),e}catch(i){o([i],n)}for(var a in t)l.call(t,a)&&(e[a]=t[a]);return e}function a(t){return!(t&&t instanceof Function&&t.apply&&!t[p])}function s(t,e){var n=e(t);return n[p]=t,i(t,n,u),n}function c(t,e,n){var r=t[e];t[e]=s(r,n)}function f(){for(var t=arguments.length,e=new Array(t),n=0;n<t;++n)e[n]=arguments[n];return e}var u=t("ee"),d=t(30),p="nr@original",l=Object.prototype.hasOwnProperty,h=!1;e.exports=r,e.exports.wrapFunction=s,e.exports.wrapInPlace=c,e.exports.argsToArray=f},{}]},{},["loader",2,16,5,3,4]);</script>
<title> Missguided: Women&#39;s Clothes | Online Fashion Shopping </title>
<meta name="description" content="Shop the latest women&#39;s clothes at Missguided and keep your style game strong with the freshest threads landing daily. Shopping is a right, not a luxury."/>            <link rel="alternate" hreflang="de-DE" href="https://www.missguided.com/de/"/>
                <link rel="alternate" hreflang="en" href="https://www.missguided.eu/"/>
                <link rel="alternate" hreflang="en-AU" href="https://www.missguidedau.com/"/>
                <link rel="alternate" hreflang="en-CA" href="https://www.missguidedus.com/"/>
                <link rel="alternate" hreflang="en-GB" href="https://www.missguided.co.uk/"/>
                <link rel="alternate" hreflang="en-IE" href="https://www.missguided.com/ie/"/>
                <link rel="alternate" hreflang="en-US" href="https://www.missguidedus.com/"/>
                <link rel="alternate" hreflang="es-ES" href="https://www.missguided.com/es/"/>
                <link rel="alternate" hreflang="fr-FR" href="https://www.missguidedfr.fr/"/>
                <link rel="alternate" hreflang="pl-PL" href="https://www.missguided.com/pl/"/>
    <meta name="robots" content="INDEX,FOLLOW"/>
<meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
<meta property="fb:app_id" content="138599932907942"/>
    <meta name="apple-itunes-app" content="app-id=842503500"/>
<meta name="skindir" content="https://static.missguided.co.uk/skin/frontend/mgresponsive/default/"/>
<meta name="svg-url" content="https://static.missguided.co.uk/skin/frontend/mgresponsive/default/images/svg/svg-defs-9e2966868b.svg"/>

<link rel="dns-prefetch preconnect" href="//static.missguided.co.uk"/>
<link rel="dns-prefetch preconnect" href="//www.ist-track.com"/>
<link rel="dns-prefetch preconnect" href="//ssl.google-analytics.com"/>
<link rel="dns-prefetch preconnect" href="//dco.quantserve.com"/>
<link rel="dns-prefetch preconnect" href="//media.missguided.co.uk"/>
<link rel="dns-prefetch preconnect" href="//media.missguided.com"/>

<link rel="dns-prefetch preconnect" href="//cdn.optimizely.com"/>
<link rel="dns-prefetch preconnect" href="//cdn3.optimizely.com"/>
<link rel="dns-prefetch preconnect" href="//tapi.optimizely.com"/>
<link rel="dns-prefetch preconnect" href="//logx.optimizely.com"/>

<link rel="preload" href="https://static.missguided.co.uk/skin/frontend/mgresponsive/default/fonts/missguided/missguided-bold.woff2" as="font" type="font/woff2" crossorigin=""/>
<link rel="preload" href="https://static.missguided.co.uk/skin/frontend/mgresponsive/default/fonts/missguided/missguided-light.woff2" as="font" type="font/woff2" crossorigin=""/>
<link rel="canonical" href="https://www.missguided.co.uk"/>

<link rel="stylesheet prefetch" href="https://static.missguided.co.uk/skin/frontend/mgresponsive/default/css/styles-308841c051.css" media="all"/>
<link rel="manifest" href="/manifest.json"/>
<link rel="stylesheet" type="text/css" href="https://static.missguided.co.uk/skin/frontend/mgresponsive/default/css/modules/modal-c1bd859feb.css" media="all"/>
<link rel="stylesheet" type="text/css" href="https://static.missguided.co.uk/skin/frontend/mgresponsive/default/css/home-dfeb8d69be.css" media="all"/>

<script data-footer-js-skip="true" src="https://static.missguided.co.uk/skin/frontend/mgresponsive/default/js/jquery/jquery.1.12.4.noconflict.min.js"></script>

    <!-- custom snippets start -->
    <script data-footer-js-skip="true" src="https://cdn.optimizely.com/public/5517080075/s/homepage_UK.js"></script>
    <!-- custom snippets end -->
<!-- MG-AFFILIATE -->

<script data-footer-js-skip="true" src="https://media.richrelevance.com/rrserver/js/1.2/p13n.js"></script>
<meta name="yandex-verification" content="8fbdd0259a113496"/></head><body class=" cms-index-index unicorn-class-delivery-enabled cms-home auth-guest mg-lang-en"><csi id="membership-csi-userdata" rel="membership.csi.userdata" class="csi" data-storage-type="session" data-csi-tag="account" data-flash="0"></csi><link rel="stylesheet" type="text/css" href="//static.missguided.co.uk/media/upload/HOMEPAGE/style-aug.css?dec"/>

    <!-- schema start -->
        <!-- schema end -->
    <!-- MG Google Tag Global Data -->
    <!-- End MG Google Tag Global Data -->
<csi id="google-tag-user-js" rel="google.tag.user.js" class="csi" data-storage-type="session" data-csi-tag="account" data-flash="0"></csi>
        <!-- GOOGLE TAG MANAGER -->
        <noscript>
            <iframe src="//www.googletagmanager.com/ns.html?id=GTM-ZCD2" height="0" width="0" style="display:none;visibility:hidden"></iframe>
        </noscript>
        <!-- END GOOGLE TAG MANAGER -->
<div id="empty-bag__tooltip-text" style="display: none;">
    <h3>your bag is empty!</h3><p>continue shopping</p></div><div id="wrapper" class="wrapper">
    <csi id="global-notices" rel="global_notices" class="csi" data-storage-type="disabled" data-csi-tag="flash-message" data-flash="1"></csi>
<div class="site-notices">
    <!--[if lte IE 9]>
    <div class="site-notice site-notice--important">
        <div class="notice__wrapper">
            Holla, <a href="http://outdatedbrowser.com/en">update your browser</a> to add your new swag to your bag in the quickest time possible and tighten up your security        </div>
    </div>
    <![endif]-->
</div>

<header id="header" class="site-header" role="banner">
    <div class="site-header__section">
        <div class="site-header__element--menu">
            <button type="button" class="primary-nav-handle  js-menu-handle" data-cy="menu-button" data-menu=".js-menu--catalog" aria-label="Open Menu" aria-controls="nav" aria-expanded="false">
                <svg class="icon icon--menu icon--menu-desktop"><use xlink:href="#icon-menu"></use></svg>
                    <svg viewBox="0 2.8 29.20 29.20" class="icon  icon--close" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0.00px" y="0.00px" width="29.20px" height="29.20px" viewBox="0 0 29.20 29.20" enable-background="new 0 0 29.20 29.20" xml:space="preserve">
        
                
                    <desc></desc>
                
        <g id="GRID"></g><g id="X"><polygon points="16,17.4 16.1,17.3 29.2,4.2 27.7,2.8 14.6,16 14.5,15.9 1.4,2.9 0,4.3 13.2,17.4 13.1,17.5 0.1,30.61.5,32 14.6,18.8 14.7,18.9 27.8,32 29.2,30.5"></polygon></g>    </svg>
            </button>
        </div>
        <div>
            <a href="https://www.missguided.co.uk/" title="Missguided" class="logo-link">
                    <svg class="site-logo" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0.00px" y="0.00px" width="80.00px" height="18.40px" viewBox="0 0 80.00 18.40" enable-background="new 0 0 80.00 18.40" xml:space="preserve">
        
                
                    <desc>Missguided</desc>
                
        <path d="M0,18.4V0h3.1l1.4,10l0.3,3.3L5.1,10L6.5,0h3.1v18.4H7.8V3.3L7.5,5.8L5.7,18.4H3.9L2.1,5.6L1.9,3.3v15.1H0z M12.4,18.4h2.1 V0h-2.1V18.4z M52,18.4h2.1V0H52V18.4z M68,10.1h1.9V8H68V2.1h3.2V0h-5.3v18.4h5.3v-2.1H68V10.1z M47.2,0v15.3c0,0.6-0.5,1-1,1 c-0.6,0-1-0.5-1-1V0H43v15.3l0,0c0,1.8,1.4,3.2,3.2,3.2s3.2-1.4,3.2-3.2V0H47.2z M61.1,15.3V3.2l0,0c0-0.6-0.5-1-1-1l0,0h-1v14.2h1 l0,0C60.6,16.3,61.1,15.8,61.1,15.3L61.1,15.3z M60,0c1.8,0,3.2,1.4,3.2,3.2v12.1c0,1.8-1.4,3.2-3.2,3.2h-3.2V0H60 M77.9,15.3V3.2 l0,0c0-0.6-0.5-1-1-1l0,0h-1v14.2h1l0,0C77.4,16.3,77.9,15.8,77.9,15.3L77.9,15.3z M76.9,0C78.6,0,80,1.4,80,3.2v12.1 c0,1.8-1.4,3.2-3.2,3.2h-3.2V0H76.9 M29.5,8.4c-1-0.9-1.8-1.7-1.8-3.2V3.2c0-0.6,0.5-1,1-1s1,0.5,1,1v2.1h2.1V3.2 c0-1.8-1.4-3.2-3.2-3.2s-3.2,1.4-3.2,3.2l0,0v2.1l0,0C25.6,7.7,27,9,28,10c1,0.9,1.8,1.7,1.8,3.2l0,0v2.1c0,0.6-0.5,1-1,1 c-0.6,0-1-0.5-1-1v-3.1h-2.1v3.1c0,1.8,1.4,3.2,3.2,3.2s3.2-1.4,3.2-3.2l0,0v-2.1C31.9,10.7,30.6,9.5,29.5,8.4 M20.8,8.4 c-1-0.9-1.8-1.7-1.8-3.2V3.2c0-0.6,0.5-1,1-1c0.6,0,1,0.5,1,1v2.1h2.1V3.2c0-1.8-1.4-3.2-3.2-3.2c-1.8,0-3.2,1.4-3.2,3.2l0,0v2.1 l0,0c0,2.4,1.4,3.7,2.4,4.7c1,0.9,1.8,1.7,1.8,3.2l0,0v2.1c0,0.6-0.5,1-1,1s-1-0.5-1-1v-3.1H17v3.1c0,1.8,1.4,3.2,3.2,3.2 c1.8,0,3.2-1.4,3.2-3.2l0,0v-2.1C23.3,10.7,21.9,9.5,20.8,8.4 M40.5,5.2V3.2c0-1.8-1.4-3.2-3.2-3.2c-1.8,0-3.2,1.4-3.2,3.2l0,0v12.1 l0,0c0,1.7,1.4,3.1,3.1,3.2l0,0c1,0,1.8-0.5,2.2-1.4l1,1.4v-8.4h-3.2v2.1h1v3.1c0,0.6-0.4,1-1,1c0,0,0,0,0,0c-0.6,0-1-0.5-1-1V3.2 c0-0.6,0.5-1,1-1s1,0.5,1,1v2.1H40.5z"></path>    </svg>
            </a>
        </div>
    </div>
    <div class="site-header__section">
        <div class="site-header__element--search">
            <div id="search-container" class="search-container search-form">
    <button class="search-form__handle js-search-handle">
            <svg role="img" aria-label="Search" class="icon icon--search" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0.00px" y="0.00px" width="121.75px" height="112.44px" viewBox="0 0 121.75 112.44" enable-background="new 0 0 121.75 112.44" xml:space="preserve">
        
                
                    <desc>Search</desc>
                
        <path d="M120.18,104.24L93.44,81a50.89,50.89,0,0,0,9.4-29.59A51.38,51.38,0,1,0,87.41,88.16L114,111.3A4.69,4.69,0,0,0,120.18,104.24ZM51.42,93.49A42.07,42.07,0,1,1,93.49,51.42,42.1,42.1,0,0,1,51.42,93.49Z"></path>    </svg>
    </button>

    <form role="search" id="search_mini_form" class="search-form__dropdown js-search-dropdown" autocomplete="off" action="https://www.missguided.co.uk/catalogsearch/result" method="get">
        <div class="search-form__dropdown-inner">
            <label for="search">Search:</label>
            <input mp_trans_searchkwd="value" id="search" type="text" name="q" value="" class="input-text search-form__text" maxlength="128" placeholder="Search"/>
            <button type="submit" title="Search" class="search-form__button"><svg class="icon icon--search"><use xlink:href="#icon-header-search"></use></svg></button>
            <button type="reset" title="Reset" class="search-form__button button--reset js-button-search-clear">    <svg class="icon icon--cross" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0.00px" y="0.00px" width="32.40px" height="32.40px" viewBox="0 0 32.40 32.40" enable-background="new 0 0 32.40 32.40" xml:space="preserve">
        
                
                    <desc></desc>
                
        <path d="M16,17.4L16.1 17.3 29.2 4.2 27.7 2.8 14.6 16 14.5 15.9 1.4 2.9 0 4.3 13.2 17.4 13.1 17.5 0.1 30.6 1.5 32 14.6 18.8 14.7 18.9 27.8 32 29.2 30.5z"></path>    </svg>
</button>
        </div>
        <div id="search_autocomplete" class="search-autocomplete"></div>
    </form>
</div>
        </div>

    </div>
    <div class="site-header__section">
        <div class="add-mennace">
                            <a href="https://www.mennace.com/uk/?utm_source=missguided.co.uk&amp;utm_medium=referral&amp;utm_campaign=header" rel="nofollow" target="_blank">
                    <svg class="site-logo">
                        <use xlink:href="#icon-mennace-logo"></use>
                    </svg>
                </a>
                    </div>
        <div class="site-header__icon">
            <csi id="header-wishlist" rel="header.wishlist" class="csi" data-storage-type="session" data-csi-tag="headerwishlist" data-flash="0"></csi>        </div>
        <div class="site-header__icon">
            <csi id="cart-sidebar" rel="cart_sidebar" class="csi" data-storage-type="session" data-csi-tag="topcart" data-flash="0"></csi>        </div>
        <div class="site-header__icon">
<div class="store-currency-switcher">
    <button class="button--nostyle  store-currency-switcher__handle  js-store-currency-selected" aria-controls="store-currency-menu">
        gb    </button>

    <div id="store-currency-menu" class="store-currency-switcher__modal  js-store-currency-menu" role="dialog" aria-hidden="true">
                    <dl class="language-switcher">
                <dt class="store-currency-switcher__title">Change currency:</dt>
                <dd class="store-currency-switcher__item">
                    <select class="currency-switcher-input  js-store-currency-selector" onchange="changeCurrency(this.value);">
                                                                                                        <option data-currency-symbol="AU$" data-currency-code="AUD" value="AUD">
                                AU$                                Â Â 
                                AUD                            </option>
                                                                                <option data-currency-symbol="Â£" data-currency-code="GBP" value="GBP" selected="">
                                Â£                                Â Â 
                                GBP                            </option>
                                                                                <option data-currency-symbol="CA$" data-currency-code="CAD" value="CAD">
                                CA$                                Â Â 
                                CAD                            </option>
                                                                                <option data-currency-symbol="Dkr" data-currency-code="DKK" value="DKK">
                                Dkr                                Â Â 
                                DKK                            </option>
                                                                                <option data-currency-symbol="â¬" data-currency-code="EUR" value="EUR">
                                â¬                                Â Â 
                                EUR                            </option>
                                                                                <option data-currency-symbol="HK$" data-currency-code="HKD" value="HKD">
                                HK$                                Â Â 
                                HKD                            </option>
                                                                                <option data-currency-symbol="âª" data-currency-code="ILS" value="ILS">
                                âª                                Â Â 
                                ILS                            </option>
                                                                                <option data-currency-symbol="NZ$" data-currency-code="NZD" value="NZD">
                                NZ$                                Â Â 
                                NZD                            </option>
                                                                                <option data-currency-symbol="Nkr" data-currency-code="NOK" value="NOK">
                                Nkr                                Â Â 
                                NOK                            </option>
                                                                                <option data-currency-symbol="S$" data-currency-code="SGD" value="SGD">
                                S$                                Â Â 
                                SGD                            </option>
                                                                                <option data-currency-symbol="Skr" data-currency-code="SEK" value="SEK">
                                Skr                                Â Â 
                                SEK                            </option>
                                                                                <option data-currency-symbol="Fr." data-currency-code="CHF" value="CHF">
                                Fr.                                Â Â 
                                CHF                            </option>
                                                                                <option data-currency-symbol="$" data-currency-code="USD" value="USD">
                                $                                Â Â 
                                USD                            </option>
                                                                                <option data-currency-symbol="AEDÂ " data-currency-code="AED" value="AED">
                                AEDÂ                                 Â Â 
                                AED                            </option>
                                            </select>

                    <div class="currency-switcher  currency-switcher--mobile">
                        <p class="label">
                            <span class="currency-switcher__symbol">Â£</span>
                            <span class="currency-switcher__code">GBP</span>
                        </p>
                        <div class="currency-switcher__arrow">
                            <svg class="icon">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow-down"></use>
                            </svg>
                        </div>
                    </div>
                </dd>
            </dl>

                            <hr class="store-currency-switcher__divider"/>
                    
            <div class="form-language">
        <dl class="store-switcher">
            <dt class="store-currency-switcher__title">Other country sites:</dt>
            <dd class="store-currency-switcher__item  store-switcher__item">
                                                            
                        <a href="/varnish/storeswitcher?u=https%3A%2F%2Fwww.missguidedau.com%2F%3F___store%3Dau_en%26___from_store%3Ddefault" class="store-switcher__store" rel="nofollow">
                                                       <span class="store-switcher__store-inner">
                                <span class="store-switcher__store-code">au</span>
                                <span class="store-switcher__store-flag">
                                    <svg class="icon">
                                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-flag-au"></use>
                                    </svg>
                                </span>
                                <span class="store-switcher__store-name">Australia &amp; New Zealand</span>
                            </span>
                        </a>
                                                                                
                        <a href="/varnish/storeswitcher?u=https%3A%2F%2Fwww.missguided.com%2Fde%2F%3F___store%3Dde_de%26___from_store%3Ddefault" class="store-switcher__store" rel="nofollow">
                                                       <span class="store-switcher__store-inner">
                                <span class="store-switcher__store-code">de</span>
                                <span class="store-switcher__store-flag">
                                    <svg class="icon">
                                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-flag-de"></use>
                                    </svg>
                                </span>
                                <span class="store-switcher__store-name">Germany</span>
                            </span>
                        </a>
                                                                                
                        <a href="/varnish/storeswitcher?u=https%3A%2F%2Fwww.missguided.eu%2F%3F___store%3Deu_en%26___from_store%3Ddefault" class="store-switcher__store" rel="nofollow">
                                                       <span class="store-switcher__store-inner">
                                <span class="store-switcher__store-code">eu</span>
                                <span class="store-switcher__store-flag">
                                    <svg class="icon">
                                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-flag-eu"></use>
                                    </svg>
                                </span>
                                <span class="store-switcher__store-name">Europe</span>
                            </span>
                        </a>
                                                                                
                        <a href="/varnish/storeswitcher?u=https%3A%2F%2Fwww.missguidedfr.fr%2F%3F___store%3Dfr_fr%26___from_store%3Ddefault" class="store-switcher__store" rel="nofollow">
                                                       <span class="store-switcher__store-inner">
                                <span class="store-switcher__store-code">fr</span>
                                <span class="store-switcher__store-flag">
                                    <svg class="icon">
                                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-flag-fr"></use>
                                    </svg>
                                </span>
                                <span class="store-switcher__store-name">France</span>
                            </span>
                        </a>
                                                                                
                        <a href="/varnish/storeswitcher?u=https%3A%2F%2Fwww.missguided.com%2Fie%2F%3F___store%3Die_en%26___from_store%3Ddefault" class="store-switcher__store" rel="nofollow">
                                                       <span class="store-switcher__store-inner">
                                <span class="store-switcher__store-code">ie</span>
                                <span class="store-switcher__store-flag">
                                    <svg class="icon">
                                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-flag-ie"></use>
                                    </svg>
                                </span>
                                <span class="store-switcher__store-name">Ireland</span>
                            </span>
                        </a>
                                                                                
                        <a href="/varnish/storeswitcher?u=https%3A%2F%2Fwww.missguided.com%2Fpl%2F%3F___store%3Dpl_pl%26___from_store%3Ddefault" class="store-switcher__store" rel="nofollow">
                                                       <span class="store-switcher__store-inner">
                                <span class="store-switcher__store-code">pl</span>
                                <span class="store-switcher__store-flag">
                                    <svg class="icon">
                                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-flag-pl"></use>
                                    </svg>
                                </span>
                                <span class="store-switcher__store-name">Poland</span>
                            </span>
                        </a>
                                                                                                                    
                        <a href="/varnish/storeswitcher?u=https%3A%2F%2Fwww.missguidedus.com%2F%3F___store%3Dus_en%26___from_store%3Ddefault" class="store-switcher__store" rel="nofollow">
                                                       <span class="store-switcher__store-inner">
                                <span class="store-switcher__store-code">us</span>
                                <span class="store-switcher__store-flag">
                                    <svg class="icon">
                                                                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-flag-us"></use>
                                    </svg>
                                </span>
                                <span class="store-switcher__store-name">USA &amp; Canada</span>
                            </span>
                        </a>
                                                </dd>
        </dl>
    </div>    </div>
</div>
        </div>
    </div>
    </header>

<div class="exposed-search__slot">
</div>

    <style>
.primary-nav__menu .burger-nav__promo{height:auto;margin:8px 0;padding:0 16px}.primary-nav__menu .burger-nav__promo a.promo-link{padding:0;height:auto}.primary-nav__menu .burger-nav__promo img{max-height:112px;width:100%;object-fit:contain}@media (min-width: 768px){.primary-nav__menu .burger-nav__promo img{display:block}}@media (max-width: 1024px){.primary-nav__menu .burger-nav__promo img{display:none}}@media (max-width: 767px){.primary-nav__menu .burger-nav__promo img{display:block}}.primary-nav__menu .burger-nav__promo .promo-text{height:112px;display:flex;flex-direction:column;align-items:center;justify-content:center}.primary-nav__menu .burger-nav__promo .promo-text p{margin:0}.primary-nav__menu .burger-nav__promo .promo-text .promo-header{font-size:16px;line-height:30px;letter-spacing:0.48px;font-weight:bold}.primary-nav__menu .burger-nav__promo .promo-text .promo-subheader{font-size:14px;font-weight:300;line-height:30px;letter-spacing:0.42px}.primary-nav__menu .burger-nav__promo.large img{max-height:160px}.primary-nav__menu .burger-nav__promo.large .promo-text{height:160px}

.primary-nav .primary-nav__menu li.burger-nav__item{letter-spacing:.5px;text-transform:lowercase}@media (min-width: 1025px){.primary-nav .primary-nav__menu li.burger-nav__item{font-size:14px;line-height:3.21429}}.primary-nav .primary-nav__menu li.burger-nav__item a{text-decoration:none}.primary-nav .primary-nav__menu li.burger-nav__item a.link{font-weight:700;padding-left:1.875rem}.primary-nav .primary-nav__menu li.burger-nav__item a.special{color:#FF5F89}.primary-nav .primary-nav__menu li.burger-nav__item a.special:hover{color:#FF5F89}@media (min-width: 1025px){.primary-nav .primary-nav__menu li.burger-nav__item a.mobile-only{display:none}}@media (max-width: 1024px){.primary-nav .primary-nav__menu li.burger-nav__item a.desktop-only{display:none}.primary-nav .primary-nav__menu li.burger-nav__item a:hover,.primary-nav .primary-nav__menu li.burger-nav__item a.accordion-active{color:#000;background:#fff}}.primary-nav .primary-nav__menu li.burger-nav__item.account{border-bottom:1px solid #fff}@media (min-width: 1025px){.primary-nav .primary-nav__menu li.burger-nav__item.active a{color:#000;background:#fff}.primary-nav .primary-nav__menu li.burger-nav__item.active a.special{color:#FF5F89}.primary-nav .primary-nav__menu li.burger-nav__item.active ul.sub-menu{-webkit-transform:translateX(100%);transform:translateX(100%)}}.primary-nav .primary-nav__menu li.burger-nav__item ul.sub-menu{background:#fff}.primary-nav .primary-nav__menu li.burger-nav__item ul.sub-menu a:hover{color:#000;background:#F3F3F3}@media (max-width: 1024px){.primary-nav .primary-nav__menu li.burger-nav__item ul.sub-menu{max-height:0;overflow:hidden;transition:max-height 0.4s ease-in-out}.primary-nav .primary-nav__menu li.burger-nav__item ul.sub-menu.menu-active{margin-bottom:0.5rem}}@media (min-width: 1025px){.primary-nav .primary-nav__menu li.burger-nav__item ul.sub-menu{transform:translateX(-100%);transition:transform 0.8s cubic-bezier(0.7, 0, 0.3, 1);display:block;position:fixed;top:0;left:0;z-index:-1;height:100%}}

.primary-nav{-webkit-overflow-scrolling:touch;-webkit-transform:translateX(-100%);-webkit-transition:-webkit-transform 0.4s cubic-bezier(0.7, 0, 0.3, 1);height:100vh;left:0;overflow-y:auto;position:fixed;top:0;transform:translateX(-100%);transition:-webkit-transform 0.4s cubic-bezier(0.7, 0, 0.3, 1);transition:transform 0.4s cubic-bezier(0.7, 0, 0.3, 1);transition:transform 0.4s cubic-bezier(0.7, 0, 0.3, 1),-webkit-transform 0.4s cubic-bezier(0.7, 0, 0.3, 1);width:100%;z-index:170;will-change:transform}@media (min-width: 1025px){.primary-nav{z-index:120;width:616px;max-width:100%;overflow-y:hidden}}.primary-nav.menu-active{-webkit-transform:translateX(0);transform:translateX(0)}.primary-nav button{cursor:pointer}.primary-nav .primary-nav__menu{position:relative;height:100%;min-height:100vh;padding-bottom:100px;padding-left:0;padding-right:0;background:#FFF3F1}@media (min-width: 1025px){.primary-nav .primary-nav__menu{min-height:0;padding-bottom:0}}.primary-nav .primary-nav__menu a{padding:0rem .9375rem 0rem 3.75rem;position:relative;display:block;color:#474747;text-decoration:none;font-weight:300;letter-spacing:.5px;text-transform:lowercase;line-height:2.94118;font-size:17px;cursor:pointer}@media (min-width: 1025px){.primary-nav .primary-nav__menu a{padding:0rem 1.5rem 0rem 1.875rem;line-height:3.21429;font-size:14px}}.primary-nav .primary-nav__menu a .icon{height:22px;width:22px;position:relative;top:22px;margin-top:-11px;float:right;fill:#474747}.primary-nav .primary-nav__menu .account-link.auth-logged-in{display:none}body.auth-logged-in .primary-nav .primary-nav__menu .account-link.auth-logged-in{display:block}.primary-nav .primary-nav__menu .account-link.auth-guest{display:none}body.auth-guest .primary-nav .primary-nav__menu .account-link.auth-guest{display:block}.primary-nav .primary-nav__menu,.primary-nav .primary-nav__menu ul{margin:0;padding-left:0;list-style:none;overflow-y:auto;-webkit-overflow-scrolling:touch;display:block}@media (min-width: 1025px){.primary-nav .primary-nav__menu,.primary-nav .primary-nav__menu ul{width:308px;overflow-y:auto}}.primary-nav .primary-nav-handle{height:100%;width:55px;display:block;padding:0;text-align:left;background:transparent;border:0;outline:none}@media (min-width: 1025px){.primary-nav .primary-nav-handle{height:100%;width:38px;margin-left:0;text-align:center}}.primary-nav .primary-nav__handle{height:50px;width:100%;position:absolute;top:0;right:0;z-index:1;text-align:right;background:#FFF3F1}@media (min-width: 1025px){.primary-nav .primary-nav__handle{height:38px;width:38px}}.primary-nav .primary-nav__handle .icon{height:20px;width:20px;position:relative;right:15px;float:right;fill:#474747}@media (min-width: 1025px){.primary-nav .primary-nav-handle--close{display:none}}.primary-nav .primary-nav-handle--close .icon--close{display:block}
</style><script>document.addEventListener("DOMContentLoaded",function(){!function(){var e=document.querySelectorAll(".burger-nav__item");e.forEach(function(t){t.getElementsByClassName("link desktop-only")[0].addEventListener("mouseover",function(){e.forEach(function(e){e.classList.contains("active")&&e.classList.remove("active")}),t.classList.add("active")})})}(),function(){var e=document.querySelectorAll(".burger-nav__item");e.forEach(function(t,r){t.getElementsByClassName("link mobile-only")[0].addEventListener("click",function(){e.forEach(function(e,t){var n=e.getElementsByClassName("link mobile-only")[0],a=e.getElementsByClassName("sub-menu")[0];t!==r&&n.classList.contains("accordion-active")&&(n.classList.remove("accordion-active"),a.style.maxHeight=null)}),this.classList.toggle("accordion-active");var t=this.nextElementSibling;this.classList.contains("accordion-active")?t.style.maxHeight=t.scrollHeight+"px":t.style.maxHeight=null})})}(),document.getElementById("burgerNavClose").addEventListener("click",function(){setTimeout(function(){var e=document.getElementById("nav");e.classList.contains("menu-active")&&e.classList.remove("menu-active")},0)}),function(){var e=window;if(e.hasOwnProperty("MgResponsiveConfig")&&e.MgResponsiveConfig.hasOwnProperty("storeBaseUrl")){var t=document.querySelectorAll(".account-link a");Array.prototype.forEach.call(t,function(t){t.setAttribute("href","".concat(e.MgResponsiveConfig.storeBaseUrl,"/").concat(t.dataset.href))})}}()})</script><div class="cms"><nav id="nav" role="navigation" class="js-menu--catalog primary-nav">
  <button type="button" id="burgerNavClose" data-cy="menu-button-mobile" class="primary-nav__handle primary-nav-handle primary-nav-handle--close js-menu-handle-close" aria-label="Close Menu" aria-controls="nav" aria-expanded="true">
    <svg class="icon  icon--close" data-cy="menu-close">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-cross-slim">
        <svg id="icon-cross-slim" viewBox="0 2.8 29.2 29.2">
          <path d="M16 17.4l.1-.1L29.2 4.2l-1.5-1.4L14.6 16l-.1-.1-13.1-13L0 4.3l13.2 13.1-.1.1-13 13.1L1.5 32l13.1-13.2.1.1L27.8 32l1.4-1.5z"></path>
        </svg>
      </use>
    </svg>
  </button>

  <ul class="primary-nav__menu">
    <li class="burger-nav__promo default">
  <a class="promo-link" href="https://www.missguided.co.uk/vip-pass-1-year-unlimited-uk-next-day-delivery">
    <div class="promo-text" style="background-color:rgb(1, 1, 1)">
  <p class="promo-header" style="color:rgb(255, 255, 255)"> 
    VIP Unlimited NDD Â£7.99 
  </p>
  <p class="promo-subheader" style="color:rgb(255, 255, 255)"> 
    Shop for a year *t&amp;c&#39;s 
  </p>
</div>

  </a>
</li>


    <li class="burger-nav__item account">
      <a href="#" class="link desktop-only">
        <span> account </span>

        <svg class="icon icon--account" viewBox="0 0 28.5 29.4">
          <path d="M26.1 20.6c-1.5-2.4-3.6-4.2-6.1-5.3h-.1l.1-.1c1.8-1.7 2.8-4 2.8-6.4C22.8 4 18.9 0 14 0 9.2 0 5.3 3.9 5.3 8.8c0 2.4 1 4.8 2.8 6.4l.1.1h-.1c-2.4 1.1-4.5 2.9-5.9 5.2C.8 22.9 0 25.6 0 28.4c0 .5.4.9.9.9s.9-.4.9-.9c0-5.5 3.3-10.2 8.1-11.8 2.5 1.3 5.6 1.3 8 0 5 1.6 8.4 6.5 8.4 11.8 0 .5.4.9.9.9s.9-.4.9-.9c.4-2.7-.4-5.4-2-7.8zm-12-4.9c-3.8 0-6.9-3.1-6.9-6.9s3.1-6.9 6.9-6.9C17.9 1.9 21 5 21 8.8s-3.1 6.9-6.9 6.9z"></path>
        </svg>
      </a>

      <a href="#" class="link mobile-only">
        account

        <svg class="icon icon--account" viewBox="0 0 28.5 29.4">
          <path d="M26.1 20.6c-1.5-2.4-3.6-4.2-6.1-5.3h-.1l.1-.1c1.8-1.7 2.8-4 2.8-6.4C22.8 4 18.9 0 14 0 9.2 0 5.3 3.9 5.3 8.8c0 2.4 1 4.8 2.8 6.4l.1.1h-.1c-2.4 1.1-4.5 2.9-5.9 5.2C.8 22.9 0 25.6 0 28.4c0 .5.4.9.9.9s.9-.4.9-.9c0-5.5 3.3-10.2 8.1-11.8 2.5 1.3 5.6 1.3 8 0 5 1.6 8.4 6.5 8.4 11.8 0 .5.4.9.9.9s.9-.4.9-.9c.4-2.7-.4-5.4-2-7.8zm-12-4.9c-3.8 0-6.9-3.1-6.9-6.9s3.1-6.9 6.9-6.9C17.9 1.9 21 5 21 8.8s-3.1 6.9-6.9 6.9z"></path>
        </svg>
      </a>

      <ul class="sub-menu">
          <li class="sub-item account-link auth-logged-in">
            <a href="#" data-href="customer/account">
              <span> my account </span>
            </a>
          </li>
          <li class="sub-item account-link auth-logged-in">
            <a href="#" data-href="customer/account/logout">
              <span> logout </span>
            </a>
          </li>
          <li class="sub-item account-link auth-guest">
            <a href="#" data-href="customer/account/login">
              <span> login / register </span>
            </a>
          </li>
          <li class="sub-item account-link">
            <a href="#" data-href="help">
              <span> help &amp; returns </span>
            </a>
          </li>
          <li class="sub-item account-link js-new-signup-link">
            <a href="#" data-href="#">
              <span> newsletter signup </span>
            </a>
          </li>
      </ul>
    </li>


      <li class="burger-nav__item">
  <a href="https://www.missguided.co.uk/vip-pass-1-year-unlimited-uk-next-day-delivery" class="link desktop-only special"> 
    <span> VIP unlimited NDD Â£7.99 </span>
  </a>

  <a href="https://www.missguided.co.uk/vip-pass-1-year-unlimited-uk-next-day-delivery" class="link mobile-only special"> VIP unlimited NDD Â£7.99 </a>

</li>

      <li class="burger-nav__item">
  <a href="https://www.missguided.co.uk/sale" class="link desktop-only special"> 
    <span> sale </span>
  </a>

  <a href="javascript:void(0)" class="link mobile-only special"> sale </a>

    <ul class="sub-menu">
        <li class="sub-item">
  <a href="https://www.missguided.co.uk/sale"> 
    <span> 
      view all sale
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/sale/sale-top-picks"> 
    <span> 
      sale top picks
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/sale/sale-5-and-under"> 
    <span> 
      Â£5 and under
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/sale/sale-10-and-under"> 
    <span> 
      Â£10 and under
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/sale/sale-15-and-under"> 
    <span> 
      Â£15 and under
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/sale/sale-20-and-under"> 
    <span> 
      Â£20 and under
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/outlet"> 
    <span> 
      clearance
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/sale/sale-dresses"> 
    <span> 
      sale dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/sale/sale-tops"> 
    <span> 
      sale tops
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/sale/sale-shorts"> 
    <span> 
      sale shorts
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/sale/sale-trousers"> 
    <span> 
      sale trousers
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/sale/sale-accessories"> 
    <span> 
      sale accessories
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/sale/sale-beauty"> 
    <span> 
      sale beauty
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/sale/sale-brands"> 
    <span> 
      sale brands
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/sale/sale-coats"> 
    <span> 
      sale coats
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/sale/sale-denim"> 
    <span> 
      sale denim
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/sale/sale-footwear"> 
    <span> 
      sale footwear
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/sale/sale-homeware"> 
    <span> 
      sale homeware
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/sale/jewellery"> 
    <span> 
      sale Jewellery
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/sale/sale-jeans"> 
    <span> 
      sale jeans
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/sale/sale-knitwear"> 
    <span> 
      sale knitwear
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/sale/sale-nightwear-lingerie"> 
    <span> 
      sale nightwear &amp; lingerie
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/sale/sale-tall"> 
    <span> 
      sale peace + love
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/sale/sale-re-styld"> 
    <span> 
      sale re_styld
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/sale/sale-swimwear"> 
    <span> 
      sale swimwear
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/sale/sale-skirts"> 
    <span> 
      sale skirts
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/sale/sale-maternity"> 
    <span> 
      sale maternity
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/sale/sale-petite"> 
    <span> 
      sale petite
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/sale/sale-plus-size"> 
    <span> 
      sale plus size &amp; curve
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/sale/sale-tall"> 
    <span> 
      sale tall
    </span>
  </a>
</li>

    </ul>
</li>

      <li class="burger-nav__item">
  <a href="https://www.missguided.co.uk/new-in" class="link desktop-only "> 
    <span> new in </span>
  </a>

  <a href="javascript:void(0)" class="link mobile-only "> new in </a>

    <ul class="sub-menu">
        <li class="sub-item">
  <a href="https://www.missguided.co.uk/new-in"> 
    <span> 
      view all new in
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/new-in/new-in-this-week"> 
    <span> 
      new in this week
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/new-in/clothing"> 
    <span> 
      new in clothing
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/new-in/dresses"> 
    <span> 
      new in dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/new-in/shoes"> 
    <span> 
      new in shoes
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/new-in/accessories"> 
    <span> 
      new in accessories
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/new-in/beauty"> 
    <span> 
      new in beauty
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/new-in/homeware"> 
    <span> 
      new in homeware
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/new-in/back-in-stock"> 
    <span> 
      back in stock
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/new-in/new-season"> 
    <span> 
      new season
    </span>
  </a>
</li>

    </ul>
</li>

      <li class="burger-nav__item">
  <a href="https://www.missguided.co.uk/occasion/lockdown-exit-outfits" class="link desktop-only "> 
    <span> Going Out </span>
  </a>

  <a href="javascript:void(0)" class="link mobile-only "> Going Out </a>

    <ul class="sub-menu">
        <li class="sub-item">
  <a href="https://www.missguided.co.uk/occasion/lockdown-exit-outfits"> 
    <span> 
      Going Out outfits
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/occasion/party-shop"> 
    <span> 
      girls night out
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/occasion/brunch-outfits"> 
    <span> 
      brunch outfits
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/occasion/summer-outfits"> 
    <span> 
      summer outfits
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/going-out-tops-to-wear-with-jeans"> 
    <span> 
      jeans &amp; a nice top
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/occasion/holiday-shop"> 
    <span> 
      holiday shop
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/occasion/festival-shop"> 
    <span> 
      festival
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/occasion/wedding"> 
    <span> 
      wedding outfits
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/accessories"> 
    <span> 
      accessories
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/beauty"> 
    <span> 
      beauty
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/blazers"> 
    <span> 
      Blazers
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/dresses/bodycon-dresses"> 
    <span> 
      bodycon dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/co-ordinates"> 
    <span> 
      Co ords
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/tops/going-out-tops"> 
    <span> 
      going out tops
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/denim/jeans"> 
    <span> 
      jeans
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/skirts"> 
    <span> 
      skirts
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/shoes/heels"> 
    <span> 
      heels
    </span>
  </a>
</li>

    </ul>
</li>

      <li class="burger-nav__item">
  <a href="https://www.missguided.co.uk/occasion/summer-outfits" class="link desktop-only "> 
    <span> Summer Shop </span>
  </a>

  <a href="javascript:void(0)" class="link mobile-only "> Summer Shop </a>

    <ul class="sub-menu">
        <li class="sub-item">
  <a href="https://www.missguided.co.uk/occasion/summer-outfits"> 
    <span> 
      view all
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/dresses/summer-dresses"> 
    <span> 
      Summer Dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/tops/summer-tops"> 
    <span> 
      Summer Tops
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/shorts"> 
    <span> 
      Shorts
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/swimwear"> 
    <span> 
      Swimwear
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/swimwear/bikinis"> 
    <span> 
      Bikinis
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/swimwear/cover-ups"> 
    <span> 
      Beachwear &amp; Cover-ups
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/co-ordinates"> 
    <span> 
      Co-ords
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/playsuits"> 
    <span> 
      Playsuits
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/jumpsuits"> 
    <span> 
      Jumpsuits
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/shoes"> 
    <span> 
      Shoes
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/shoes/sandals"> 
    <span> 
      Sandals
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/occasion/holiday-shop"> 
    <span> 
      Holiday Shop
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/occasion/staycation"> 
    <span> 
      Staycation
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/occasion/garden-party-outfits"> 
    <span> 
      Garden Party
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/occasion/day-drink-outfits"> 
    <span> 
      Day Drink Outfits
    </span>
  </a>
</li>

    </ul>
</li>

      <li class="burger-nav__item">
  <a href="https://www.missguided.co.uk/dresses" class="link desktop-only "> 
    <span> dresses </span>
  </a>

  <a href="javascript:void(0)" class="link mobile-only "> dresses </a>

    <ul class="sub-menu">
        <li class="sub-item">
  <a href="https://www.missguided.co.uk/dresses"> 
    <span> 
      view all dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/dresses/bodycon-dresses"> 
    <span> 
      bodycon dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/dresses/bandage-dresses"> 
    <span> 
      bandage dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/dresses/blazer-dresses"> 
    <span> 
      blazer dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/occasion/wedding/bridesmaid-dresses"> 
    <span> 
      bridesmaid dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/dresses/cami-dresses"> 
    <span> 
      cami dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/dresses/day-dresses"> 
    <span> 
      day dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/dresses/evening-dresses"> 
    <span> 
      evening dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/dresses/fit-flare-dresses"> 
    <span> 
      fit &amp; flare dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/dresses/floral-dresses"> 
    <span> 
      floral dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/dresses/gowns"> 
    <span> 
      gowns
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/dresses/little-black-dresses"> 
    <span> 
      little black dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/dresses/long-sleeved-dresses"> 
    <span> 
      long sleeved dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/maternity/maternity-dresses"> 
    <span> 
      maternity dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/dresses/maxi-dresses"> 
    <span> 
      maxi dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/dresses/mesh-dresses"> 
    <span> 
      mesh dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/dresses/midaxi"> 
    <span> 
      midaxi dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/dresses/midi-dresses"> 
    <span> 
      midi dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/dresses/mini-dresses"> 
    <span> 
      mini dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/dresses/party-dresses"> 
    <span> 
      party dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/petite/petite-dresses"> 
    <span> 
      petite dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/plus-size/plus-size-dresses"> 
    <span> 
      plus size dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/dresses/prom-dresses"> 
    <span> 
      prom dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/dresses/ribbed-dresses"> 
    <span> 
      ribbed dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/dresses/satin-dresses"> 
    <span> 
      satin dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/dresses/shirt-dresses"> 
    <span> 
      shirt dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/dresses/skater-dresses"> 
    <span> 
      skater dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/dresses/slinky-dresses"> 
    <span> 
      slinky dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/dresses/sweater-dresses"> 
    <span> 
      sweater dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/dresses/smock-dresses"> 
    <span> 
      smock dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/dresses/summer-dresses"> 
    <span> 
      summer dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/tall/tall-dresses"> 
    <span> 
      tall dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/dresses/tea-dresses"> 
    <span> 
      tea dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/dresses/t-shirt-dresses"> 
    <span> 
      t-shirt dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/occasion/wedding/wedding-guest-dresses"> 
    <span> 
      wedding guest dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/dresses/wrap-dresses"> 
    <span> 
      wrap dresses
    </span>
  </a>
</li>

    </ul>
</li>

      <li class="burger-nav__item">
  <a href="https://www.missguided.co.uk/clothing/tops" class="link desktop-only "> 
    <span> tops </span>
  </a>

  <a href="javascript:void(0)" class="link mobile-only "> tops </a>

    <ul class="sub-menu">
        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/tops"> 
    <span> 
      view all tops
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/tops/bandeau-tops"> 
    <span> 
      bandeau tops
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/tops/basics"> 
    <span> 
      basic tops
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/tops/blouses"> 
    <span> 
      blouses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/tops/bodysuits"> 
    <span> 
      bodysuits
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/tops/bralets"> 
    <span> 
      bralets
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/tops/cami-tops"> 
    <span> 
      cami tops
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/tops/crop-tops"> 
    <span> 
      crop tops
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/tops/corset-tops"> 
    <span> 
      corset tops
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/tops/floral-tops"> 
    <span> 
      floral tops
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/tops/going-out-tops"> 
    <span> 
      going out tops
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/tops/graphic-tees"> 
    <span> 
      graphic tops
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/tops/hoodies"> 
    <span> 
      hoodies
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/knitwear/jumpers"> 
    <span> 
      jumpers
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/tops/long-sleeve-tops"> 
    <span> 
      long sleeve tops
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/tops/mesh-tops"> 
    <span> 
      mesh tops
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/tops/plunge-tops"> 
    <span> 
      plunge tops
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/tops/roll-neck-tops"> 
    <span> 
      roll neck tops
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/tops/ruched-tops"> 
    <span> 
      ruched tops
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/tops/satin-tops"> 
    <span> 
      satin tops
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/tops/sweatshirts"> 
    <span> 
      sweatshirts
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/tops/shirts"> 
    <span> 
      shirts
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/tops/t-shirts"> 
    <span> 
      t-shirts
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/tops/vests"> 
    <span> 
      vests
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/tops/wrap-tops"> 
    <span> 
      wrap tops
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/tall/tall-tops"> 
    <span> 
      tall tops
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/petite/petite-tops"> 
    <span> 
      petite tops
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/plus-size/plus-size-tops"> 
    <span> 
      plus size tops
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/maternity/maternity-tops"> 
    <span> 
      maternity tops
    </span>
  </a>
</li>

    </ul>
</li>

      <li class="burger-nav__item">
  <a href="https://www.missguided.co.uk/clothing" class="link desktop-only "> 
    <span> clothing </span>
  </a>

  <a href="javascript:void(0)" class="link mobile-only "> clothing </a>

    <ul class="sub-menu">
        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing"> 
    <span> 
      view all clothing
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/last-chance-to-buy"> 
    <span> 
      last chance to buy
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/most-wanted"> 
    <span> 
      most wanted
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/dresses"> 
    <span> 
      dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/tops"> 
    <span> 
      tops
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/basics-shop"> 
    <span> 
      basics shop
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/accessories/face-coverings"> 
    <span> 
      face coverings
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/casual-wear"> 
    <span> 
      casual wear
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/blazers"> 
    <span> 
      blazers
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/coats-jackets"> 
    <span> 
      coats &amp; jackets
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/co-ordinates"> 
    <span> 
      co-ords
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/denim"> 
    <span> 
      denim
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/denim/jeans"> 
    <span> 
      jeans
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/going-out-tops-to-wear-with-jeans"> 
    <span> 
      jeans &amp; a nice top
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/trousers/joggers"> 
    <span> 
      joggers
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/jumpsuits"> 
    <span> 
      jumpsuits
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/knitwear/jumpers"> 
    <span> 
      jumpers
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/knitwear/cardigans"> 
    <span> 
      cardigans
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/knitwear"> 
    <span> 
      knitwear
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/leggings-and-hosiery"> 
    <span> 
      leggings
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/lingerie"> 
    <span> 
      lingerie
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/loungewear"> 
    <span> 
      loungewear
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/nightwear"> 
    <span> 
      nightwear
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/playsuits"> 
    <span> 
      playsuits
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/sportswear/skiwear"> 
    <span> 
      skiwear
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/swimwear"> 
    <span> 
      swimwear
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/swimwear/bikinis"> 
    <span> 
      bikinis
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/swimwear/swimsuits"> 
    <span> 
      swimsuits
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/shorts"> 
    <span> 
      shorts
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/skirts"> 
    <span> 
      skirts
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/sportswear"> 
    <span> 
      sportswear
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/tailoring"> 
    <span> 
      tailoring
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/trousers"> 
    <span> 
      trousers
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/mg-collection"> 
    <span> 
      mg collection
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/tracksuits"> 
    <span> 
      tracksuits
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/skin-tones"> 
    <span> 
      Skin Tones
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/peace-love"> 
    <span> 
      Peace + Love
    </span>
  </a>
</li>

    </ul>
</li>

      <li class="burger-nav__item">
  <a href="https://www.missguided.co.uk/shop-by-fit" class="link desktop-only "> 
    <span> shop by fit </span>
  </a>

  <a href="javascript:void(0)" class="link mobile-only "> shop by fit </a>

    <ul class="sub-menu">
        <li class="sub-item">
  <a href="https://www.missguided.co.uk/shop-by-fit"> 
    <span> 
      view all
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/petite"> 
    <span> 
      petite
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/plus-size"> 
    <span> 
      plus size clothing
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/tall"> 
    <span> 
      tall
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/maternity"> 
    <span> 
      maternity
    </span>
  </a>
</li>

    </ul>
</li>

      <li class="burger-nav__item">
  <a href="https://www.missguided.co.uk/shoes" class="link desktop-only "> 
    <span> shoes </span>
  </a>

  <a href="javascript:void(0)" class="link mobile-only "> shoes </a>

    <ul class="sub-menu">
        <li class="sub-item">
  <a href="https://www.missguided.co.uk/shoes"> 
    <span> 
      view all shoes
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/shoes/boots/ankle-boots"> 
    <span> 
      ankle boots
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/shoes/boots"> 
    <span> 
      boots
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/shoes/sandals/flat-sandals"> 
    <span> 
      flat Sandals
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/shoes/flats"> 
    <span> 
      flat shoes
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/shoes/heels/heeled-sandals"> 
    <span> 
      heeled Sandals
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/shoes/heels"> 
    <span> 
      high heels
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/shoes/boots/knee-high-boots"> 
    <span> 
      knee high boots
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/shoes/mules"> 
    <span> 
      mules
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/nightwear/slippers"> 
    <span> 
      slippers
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/shoes/trainers"> 
    <span> 
      trainers
    </span>
  </a>
</li>

    </ul>
</li>

      <li class="burger-nav__item">
  <a href="https://www.missguided.co.uk/accessories" class="link desktop-only "> 
    <span> accessories </span>
  </a>

  <a href="javascript:void(0)" class="link mobile-only "> accessories </a>

    <ul class="sub-menu">
        <li class="sub-item">
  <a href="https://www.missguided.co.uk/accessories"> 
    <span> 
      view all accessories
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/accessories/handbags"> 
    <span> 
      bags
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/accessories/belts"> 
    <span> 
      belts
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/accessories/face-coverings"> 
    <span> 
      face coverings
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/accessories/gifts"> 
    <span> 
      gifts
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/accessories/hair-accessories"> 
    <span> 
      hair accessories
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/accessories/hats"> 
    <span> 
      hats
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/accessories/hen-party-accessories"> 
    <span> 
      hen party accessories
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/accessories/jewellery"> 
    <span> 
      jewellery
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/accessories/phone-accessories"> 
    <span> 
      phone accessories
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/accessories/sunglasses"> 
    <span> 
      sunglasses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/accessories/tights-hosiery"> 
    <span> 
      tights &amp; socks
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/accessories/party-accessories"> 
    <span> 
      party accessories
    </span>
  </a>
</li>

    </ul>
</li>

      <li class="burger-nav__item">
  <a href="https://www.missguided.co.uk/campaign/beauty" class="link desktop-only "> 
    <span> beauty </span>
  </a>

  <a href="javascript:void(0)" class="link mobile-only "> beauty </a>

    <ul class="sub-menu">
        <li class="sub-item">
  <a href="https://www.missguided.co.uk/beauty"> 
    <span> 
      view all beauty
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/new-in/beauty"> 
    <span> 
      new in beauty
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/beauty/make-up"> 
    <span> 
      sale beauty
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/beauty/make-up"> 
    <span> 
      make-up
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/beauty/make-up/false-lashes"> 
    <span> 
      eyelashes
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/beauty/nail-polish"> 
    <span> 
      nail polish
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/beauty/skincare"> 
    <span> 
      skincare
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/beauty/bath-and-body"> 
    <span> 
      bath &amp; body
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/beauty/wellness"> 
    <span> 
      wellness
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/beauty/haircare"> 
    <span> 
      haircare
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/beauty/perfume"> 
    <span> 
      fragrance
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/beauty/sun-and-tan"> 
    <span> 
      sun &amp; tan
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/beauty/tools-and-accessories"> 
    <span> 
      tools &amp; accessories
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/beauty/electricals"> 
    <span> 
      electricals
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/beauty/beauty-gifts"> 
    <span> 
      beauty gifts
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/beauty/self-care"> 
    <span> 
      self care
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/beauty/vegan"> 
    <span> 
      vegan
    </span>
  </a>
</li>

    </ul>
</li>

      <li class="burger-nav__item">
  <a href="https://www.missguided.co.uk/homeware" class="link desktop-only "> 
    <span> Homeware </span>
  </a>

  <a href="javascript:void(0)" class="link mobile-only "> Homeware </a>

    <ul class="sub-menu">
        <li class="sub-item">
  <a href="https://www.missguided.co.uk/homeware"> 
    <span> 
      view all homeware
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/homeware/art-frames"> 
    <span> 
      art, frames &amp; posters
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/homeware/bathroom"> 
    <span> 
      bathroom
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/homeware/bedding"> 
    <span> 
      bedding
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/homeware/candles"> 
    <span> 
      candles
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/homeware/decorative-accessories"> 
    <span> 
      Decorative Accessories
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/homeware/kitchen-dining"> 
    <span> 
      kitchen
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/homeware/plants-planters"> 
    <span> 
      plants &amp; planters
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/homeware/soft-furnishings"> 
    <span> 
      soft furnishings
    </span>
  </a>
</li>

    </ul>
</li>

      <li class="burger-nav__item">
  <a href="https://www.missguided.co.uk/collaborations/playboy" class="link desktop-only "> 
    <span> playboy x missguided </span>
  </a>

  <a href="javascript:void(0)" class="link mobile-only "> playboy x missguided </a>

    <ul class="sub-menu">
        <li class="sub-item">
  <a href="https://www.missguided.co.uk/collaborations/playboy"> 
    <span> 
      view all
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/collaborations/playboy/accessories"> 
    <span> 
      accessories
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/collaborations/playboy/coords"> 
    <span> 
      co-ords
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/collaborations/playboy/dresses"> 
    <span> 
      dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/collaborations/playboy/hoodies"> 
    <span> 
      hoodies
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/collaborations/playboy/joggers"> 
    <span> 
      joggers
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/collaborations/playboy/tops"> 
    <span> 
      tops
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/collaborations/playboy/shorts"> 
    <span> 
      shorts
    </span>
  </a>
</li>

    </ul>
</li>

      <li class="burger-nav__item">
  <a href="https://www.missguided.co.uk/collaborations" class="link desktop-only "> 
    <span> Collaborations </span>
  </a>

  <a href="javascript:void(0)" class="link mobile-only "> Collaborations </a>

    <ul class="sub-menu">
        <li class="sub-item">
  <a href="https://www.missguided.co.uk/collaborations/sarah-ashcroft"> 
    <span> 
      Sarah Ashcroft Edit
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/collaborations/sean-john-x-missguided"> 
    <span> 
      Sean John x Missguided
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/collaborations/jordan-lipscombe-x-missguided"> 
    <span> 
      Jordan Lipscombe x Missguided
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/collaborations/zara-mcdermott-x-missguided"> 
    <span> 
      Zara Mcdermott x Missguided
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/collaborations/karla-jara-edit"> 
    <span> 
      Karla Jara Edit
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/collaborations/aazhia-edit"> 
    <span> 
      Aazhia Edit
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/collaborations/helena-critchley-x-missguided"> 
    <span> 
      Helena Critchley Edit
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/collaborations/hannah-renee-edit"> 
    <span> 
      Hannah Renee Edit
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/collaborations/delaney-childs-edit"> 
    <span> 
      Delaney Childs Edit
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/collaborations/demi-jones-edit"> 
    <span> 
      Demi Jones Edit
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/collaborations/alissa-janay-edit"> 
    <span> 
      Alissa Janay Edit
    </span>
  </a>
</li>

    </ul>
</li>

      <li class="burger-nav__item">
  <a href="https://www.missguided.co.uk/occasion" class="link desktop-only "> 
    <span> shop by occasion </span>
  </a>

  <a href="javascript:void(0)" class="link mobile-only "> shop by occasion </a>

    <ul class="sub-menu">
        <li class="sub-item">
  <a href="https://www.missguided.co.uk/occasion/day-drink-outfits"> 
    <span> 
      Day Drink Outfits
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/occasion/festival-shop"> 
    <span> 
      Festival Shop
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/occasion/occasion-dresses"> 
    <span> 
      Occasion Dresses
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/occasion/summer-outfits"> 
    <span> 
      summer outfits
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/occasion/wedding"> 
    <span> 
      wedding
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/occasion/date-night-outfits"> 
    <span> 
      Date Night Outfits
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/occasion/graduation-shop"> 
    <span> 
      Graduation
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/occasion/holiday-shop"> 
    <span> 
      Holiday Shop
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/occasion/party-shop"> 
    <span> 
      Party Shop
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/occasion/prom"> 
    <span> 
      Prom
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/occasion/study-in-style"> 
    <span> 
      Study In Style
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/occasion/staycation"> 
    <span> 
      Staycation
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/occasion/work-clothes"> 
    <span> 
      work clothes
    </span>
  </a>
</li>

    </ul>
</li>

      <li class="burger-nav__item">
  <a href="https://www.missguided.co.uk/shop-by-trend" class="link desktop-only "> 
    <span> Inspire Me </span>
  </a>

  <a href="javascript:void(0)" class="link mobile-only "> Inspire Me </a>

    <ul class="sub-menu">
        <li class="sub-item">
  <a href="https://www.missguided.co.uk/shop-by-trend/corset"> 
    <span> 
      Corset
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/shop-by-trend/dalmatian-print"> 
    <span> 
      Dalmatian print
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/denim"> 
    <span> 
      denim
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/shop-by-trend/florals"> 
    <span> 
      Florals
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/shop-by-trend/graphics"> 
    <span> 
      Graphics Shop
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/shop-by-trend/linen"> 
    <span> 
      Linen
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/shop-by-trend/milkmaid"> 
    <span> 
      Milkmaid
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/clothing/tops/oversized-tops"> 
    <span> 
      oversized
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/shop-by-trend/puff-sleeve"> 
    <span> 
      Puff Sleeve
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/shop-by-trend/sleeker-than-you"> 
    <span> 
      satin
    </span>
  </a>
</li>

    </ul>
</li>

      <li class="burger-nav__item">
  <a href="https://www.missguided.co.uk/collaborations/restyld" class="link desktop-only "> 
    <span> RE_STYLD </span>
  </a>

  <a href="javascript:void(0)" class="link mobile-only "> RE_STYLD </a>

    <ul class="sub-menu">
        <li class="sub-item">
  <a href="https://www.missguided.co.uk/collaborations/restyld"> 
    <span> 
      view all
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/collaborations/restyld/restyld-hoodies-sweats"> 
    <span> 
      re_styld hoodies and sweats
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/collaborations/restyld/restyld-trousers"> 
    <span> 
      re_styld trousers
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/collaborations/restyld/restyld-tops"> 
    <span> 
      re_styld tops
    </span>
  </a>
</li>

        <li class="sub-item">
  <a href="https://www.missguided.co.uk/collaborations/restyld/restyld-shorts"> 
    <span> 
      re_styld shorts
    </span>
  </a>
</li>

    </ul>
</li>

      <li class="burger-nav__item">
  <a href="https://www.missguided.co.uk/babezine" class="link desktop-only "> 
    <span> Babezine </span>
  </a>

  <a href="https://www.missguided.co.uk/babezine" class="link mobile-only "> Babezine </a>

</li>

  </ul>
</nav>
</div>

    <div class="mega-nav__slot">
        <style>
.megaNav{position:relative;background:#f5f5f5;font-family:Missguided, Arial, sans-serif;font-size:.75rem;color:#323232;z-index:101}.megaNav .cont{width:auto;max-width:1100px;margin:0 auto;overflow:hidden}.megaNav .flex{width:100%;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;overflow:hidden}.megaNav .catz{position:relative;padding:1.5em 1em;z-index:10;transition:border-bottom 100ms ease}.megaNav .catz a{width:100%;height:100%;text-decoration:none;position:relative;cursor:pointer;color:inherit}.megaNav .catz h5{text-transform:lowercase;margin:0;font-size:12px;text-align:center}.megaNav .dropdown-container{display:none;position:absolute;left:0;width:100%;background:#fff;z-index:100;overflow:hidden}.megaNav .drop{position:absolute;top:110%;opacity:0;display:flex;justify-content:space-between;align-items:flex-start;width:100%;height:auto;max-width:850px;left:50%;transform:translateX(-50%);padding:2.5em 0;transition:opacity ease 300ms}.megaNav .drop.empty{padding:0}.megaNav .drop .list{display:flex;flex:50% 1 0;margin:0 0 1em}.megaNav .drop .list ul{color:#323232}.megaNav .drop .list--parent-color ul{color:inherit}.megaNav .drop .image{display:none;flex:200px 1 0}.megaNav .drop h5{font-weight:700;letter-spacing:.5px;text-transform:lowercase;line-height:1.2;margin:0 0 1rem 0;padding-top:0.2em}.megaNav .drop ul{position:relative;list-style:none;margin:0 3em 0 0}.megaNav .drop ul:not(:first-of-type){border-left:1px solid #e1e1e1}.megaNav .drop ul li{margin-bottom:1em;text-transform:lowercase}.megaNav .drop ul li:hover{text-decoration:underline}.megaNav .drop ul li a{color:#474747;text-decoration:none}@media (min-width: 768px){.megaNav .catz.catz-visibility-mobile-only{display:none}.megaNav .drop.active{position:relative;opacity:1;z-index:99}}@media (max-width: 767px){.megaNav .catz.catz-visibility-desktop-only{display:none}}.flexx{display:flex;flex-direction:column}.flexx.across{flex-direction:row}.flexx h5{padding-left:1.5rem}.border{border-left:1px solid #e1e1e1}@media (max-width: 767px){.megaNav .flex{display:block;width:auto;overflow:scroll;white-space:nowrap;cursor:pointer;max-width:100%;-webkit-overflow-scrolling:touch}.megaNav .flex::-webkit-scrollbar-track{background-color:white;width:100%}.megaNav .flex::-webkit-scrollbar{width:0;height:3px}.megaNav .flex::-webkit-scrollbar-thumb{border-radius:2px;background-color:#d3d3d3;width:10px}.megaNav .catz{display:inline-block;margin:0 1vw}.megaNav .dropdown-container{display:none}}:root{--left-position: 50%;--line-width: 70px;--opacity: 0}.underline{opacity:var(--opacity);position:absolute;left:var(--left-position);bottom:0;height:2px;width:var(--line-width);background:black;transition:left ease 100ms, width ease-in-out 100ms, opacity ease-in-out 90ms 25ms}
</style><script>document.addEventListener("DOMContentLoaded",function(){if(!(window.innerWidth<768)){var e=document.querySelector(".dropdown-container"),t=document.querySelectorAll(".catz"),r=document.querySelectorAll(".drop"),n=document.querySelector(".underline"),a=function(){r.forEach(function(e){e.classList.remove("active")})},i=function(t){var r=t.target,i=r.getBoundingClientRect().left,o=r.offsetWidth;if(n.style.setProperty("--underline-opacity","1"),n.style.setProperty("--underline-left-position","".concat(i,"px")),n.style.setProperty("--underline-line-width","".concat(o,"px")),a(),r.dataset.id){var s=document.querySelector("."+r.dataset.id);s&&(s.classList.add("active"),e.style.display="block")}};t.forEach(function(e){return e.addEventListener("mouseenter",i)}),document.querySelector(".cont").addEventListener("mouseleave",function(){a(),n.style.setProperty("--underline-opacity","0")})}})</script><div class="cms"><div class="megaNav" style="">
  <div class="cont">
    <div class="underline"></div>

    <div class="flex">
        <div class="catz catz-visibility-all" data-id="category-0" style="color: #FF5F89;">
            <a href="https://www.missguided.co.uk/sale">
              <h5>sale</h5>
            </a>
        </div>
        <div class="catz catz-visibility-all" data-id="category-1" style="">
            <a href="https://www.missguided.co.uk/new-in">
              <h5>New in</h5>
            </a>
        </div>
        <div class="catz catz-visibility-" data-id="category-2" style="color: #FF5F89;">
            <a href="https://www.missguided.co.uk/occasion/lockdown-exit-outfits">
              <h5>Going Out</h5>
            </a>
        </div>
        <div class="catz catz-visibility-all" data-id="category-3" style="">
            <a href="https://www.missguided.co.uk/occasion/summer-outfits">
              <h5>Summer Shop</h5>
            </a>
        </div>
        <div class="catz catz-visibility-all" data-id="category-4" style="">
            <a href="https://www.missguided.co.uk/dresses">
              <h5>dresses</h5>
            </a>
        </div>
        <div class="catz catz-visibility-all" data-id="category-5" style="">
            <a href="https://www.missguided.co.uk/clothing/tops">
              <h5>tops</h5>
            </a>
        </div>
        <div class="catz catz-visibility-all" data-id="category-6" style="">
            <a href="https://www.missguided.co.uk/clothing">
              <h5>clothing</h5>
            </a>
        </div>
        <div class="catz catz-visibility-all" data-id="category-7" style="">
            <a href="https://www.missguided.co.uk/shop-by-fit">
              <h5>Shop By Fit</h5>
            </a>
        </div>
        <div class="catz catz-visibility-all" data-id="category-8" style="">
            <a href="https://www.missguided.co.uk/shoes">
              <h5>shoes</h5>
            </a>
        </div>
        <div class="catz catz-visibility-mobile-only" data-id="category-9" style="">
            <a href="https://www.missguided.co.uk/accessories">
              <h5>accessories</h5>
            </a>
        </div>
        <div class="catz catz-visibility-all" data-id="category-10" style="">
            <a href="https://www.missguided.co.uk/campaign/beauty">
              <h5>beauty</h5>
            </a>
        </div>
        <div class="catz catz-visibility-mobile-only" data-id="category-11" style="">
            <a href="https://www.missguided.co.uk/homeware">
              <h5>Homeware</h5>
            </a>
        </div>
        <div class="catz catz-visibility-all" data-id="category-12" style="">
            <a href="https://www.missguided.co.uk/collaborations/playboy">
              <h5>Playboy x Missguided</h5>
            </a>
        </div>
    </div>

    <div class="dropdown-container">
            <div class="drop category-0">
    <div class="list " style="color: #FF5F89;">
        <ul>
    <h5 style="">Shop by Category</h5>
    <li style="">
    <a href="https://www.missguided.co.uk/sale">view all</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/sale/sale-top-picks">sale top picks</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/outlet">clearance</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/sale/sale-dresses">sale dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/sale/sale-tops">sale tops</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/sale/sale-shorts">sale shorts</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/sale/sale-trousers">sale trousers</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/sale/sale-accessories">sale accessories</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/sale/sale-beauty">sale beauty</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/sale/sale-brands">sale brands</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/sale/sale-coats">sale coats &amp; jackets</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/sale/sale-denim">sale denim</a>
</li>

</ul>

        <ul>
    <li style="">
    <a href="https://www.missguided.co.uk/sale/sale-footwear">sale footwear</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/sale/sale-homeware">sale homeware</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/sale/sale-jeans">sale jeans</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/sale/jewellery">sale jewellery</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/sale/sale-knitwear">sale knitwear</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/sale/sale-nightwear-lingerie">sale nightwear &amp; lingerie</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/sale/sale-swimwear">sale swimwear</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/sale/sale-peace-love">sale peace + love</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/sale/sale-skirts">sale skirts</a>
</li>

</ul>

        <ul>
    <h5 style="">Shop by Price</h5>
    <li style="">
    <a href="https://www.missguided.co.uk/sale/sale-5-and-under">Â£5 &amp; under</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/sale?p_high=108&amp;p_low=1&amp;price_gbp=1%3C10">Â£10 &amp; under</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/sale/sale-15-and-under">Â£15 &amp; under</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/sale/sale-20-and-under">Â£20 &amp; under</a>
</li>

</ul>

        <ul>
    <h5 style="">Shop by fit</h5>
    <li style="">
    <a href="https://www.missguided.co.uk/sale/sale-petite">petite</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/sale/sale-tall">tall</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/sale/sale-plus-size">plus size &amp; curve</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/sale/sale-maternity">maternity</a>
</li>

</ul>

    </div>
  </div>

            <div class="drop category-1">
    <div class="list " style="">
        <ul>
    <li style="">
    <a href="https://www.missguided.co.uk/new-in">View all new in</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/new-in/new-in-this-week">New in this week</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/new-in/clothing">New in clothing</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/new-in/dresses">New in dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/new-in/shoes">New in shoes</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/new-in/accessories">New in accessories</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/new-in/beauty">new in beauty</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/new-in/homeware">new in homeware</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/new-in/back-in-stock">Back in stock</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/new-in/new-season">New season</a>
</li>

</ul>

    </div>
  </div>

            <div class="drop category-2">
    <div class="list " style="color: #FF5F89;">
        <ul>
    <h5 style="">Shop by occasion</h5>
    <li style="">
    <a href="https://www.missguided.co.uk/occasion/lockdown-exit-outfits">Going out outfits</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/occasion/party-shop">girls night out</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/occasion/brunch-outfits">brunch outfits</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/occasion/summer-outfits">summer outfits</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/going-out-tops-to-wear-with-jeans">jeans &amp; a nice top</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/occasion/holiday-shop">holiday shop</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/occasion/festival-shop">festival</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/occasion/wedding">wedding outfits</a>
</li>

</ul>

        <ul>
    <li style="">
    <a href="https://www.missguided.co.uk/accessories">accessories</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/campaign/beauty">beauty</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/blazers">blazers</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/dresses/bodycon-dresses">bodycon dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/co-ordinates">co ords</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tops/going-out-tops">going out tops</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/denim/jeans">jeans</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/skirts">skirts</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/shoes/heels">heels</a>
</li>

</ul>

    </div>
  </div>

            <div class="drop category-3">
    <div class="list " style="">
        <ul>
    <li style="">
    <a href="https://www.missguided.co.uk/occasion/summer-outfits">view all</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/dresses/summer-dresses">Summer Dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tops/summer-tops">Summer Tops</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/shorts">Shorts</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/swimwear">Swimwear</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/swimwear/bikinis">Bikinis</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/swimwear/cover-ups">Beachwear &amp; Cover-ups</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/accessories">Accessories</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/co-ordinates">Co-ords</a>
</li>

</ul>

        <ul>
    <li style="">
    <a href="https://www.missguided.co.uk/clothing/playsuits">Playsuits</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/jumpsuits">Jumpsuits</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/shoes">Shoes</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/shoes/sandals">Sandals</a>
</li>

</ul>

        <ul>
    <h5 style="">Shop by Occassion</h5>
    <li style="">
    <a href="https://www.missguided.co.uk/occasion/holiday-shop">Holiday shop</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/occasion/staycation">Staycation</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/occasion/garden-party-outfits">Garden Party</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/occasion/day-drink-outfits">Day Drink Outfits</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/occasion/festival-shop">Festival</a>
</li>

</ul>

        <ul>
    <h5 style="">Shop by Trend</h5>
    <li style="">
    <a href="https://www.missguided.co.uk/shop-by-trend/florals">Florals</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/shop-by-trend/dalmatian-print">Dalmation</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/shop-by-trend/corset">Corset</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/shop-by-trend/puff-sleeve">Puff Sleeve</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/shop-by-trend/mesh">Mesh</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/shop-by-trend/ruched">Ruched</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/shop-by-trend/polka-dots">Polka Dots</a>
</li>

</ul>

    </div>
  </div>

            <div class="drop category-4">
    <div class="list " style="">
        <ul>
    <li style="">
    <a href="https://www.missguided.co.uk/dresses">view all</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/dresses/bodycon-dresses">bodycon dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/basics-shop/basic-dresses">basic dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/dresses/bandage-dresses">bandage dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/dresses/blazer-dresses">blazer dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/occasion/wedding/bridesmaid-dresses">bridesmaid Dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/dresses/cami-dresses">cami dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/dresses/day-dresses">day dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/denim/denim-dresses">denim dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/dresses/evening-dresses">evening dresses</a>
</li>

</ul>

        <ul>
    <li style="">
    <a href="https://www.missguided.co.uk/dresses/fit-flare-dresses">Fit &amp; Flare Dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/dresses/floral-dresses">Floral Dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/dresses/gowns">gowns</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/knitwear/jumper-dresses">jumper dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/dresses/little-black-dresses">little black dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/dresses/long-sleeved-dresses">long sleeve dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/maternity/maternity-dresses">maternity dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/dresses/maxi-dresses">maxi dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/dresses/midaxi">midaxi dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/dresses/midi-dresses">midi dresses</a>
</li>

</ul>

        <ul>
    <li style="">
    <a href="https://www.missguided.co.uk/dresses/mini-dresses">mini dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/dresses/mesh-dresses">mesh dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/dresses/party-dresses">party dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/petite/petite-dresses">petite dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/dresses/ribbed-dresses">ribbed dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/plus-size/plus-size-dresses">plus size dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/dresses/prom-dresses">prom dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/dresses/satin-dresses">Satin dress</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/dresses/shirt-dresses">shirt dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/dresses/skater-dresses">skater dresses</a>
</li>

</ul>

        <ul>
    <li style="">
    <a href="https://www.missguided.co.uk/dresses/slinky-dresses">Slinky dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/dresses/smock-dresses">smock dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/dresses/summer-dresses">summer dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/dresses/sweater-dresses">sweater dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tall/tall-dresses">tall dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/dresses/tea-dresses">tea dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/dresses/t-shirt-dresses">t-shirt dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/occasion/wedding/wedding-guest-dresses">wedding guest dresses</a>
</li>

</ul>

    </div>
  </div>

            <div class="drop category-5">
    <div class="list " style="">
        <ul>
    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tops">view all</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tops/bandeau-tops">bandeau tops</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tops/basic-tops">basic tops</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tops/blouses">blouses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tops/bodysuits">bodysuits</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tops/bralets">bralets</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tops/cami-tops">cami tops</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tops/crop-tops">crop tops</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tops/corset-tops">corset tops</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tops/floral-tops">Floral Tops</a>
</li>

</ul>

        <ul>
    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tops/going-out-tops">going out tops</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tops/graphic-tees">graphic tops</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tops/hoodies">hoodies</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/knitwear/jumpers">jumpers</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tops/long-sleeve-tops">long sleeve tops</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/maternity/maternity-tops">maternity tops</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tops/mesh-tops">mesh tops</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/petite/petite-tops">petite tops</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tops/plunge-tops">plunge tops</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/plus-size/plus-size-tops">plus size tops</a>
</li>

</ul>

        <ul>
    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tops/roll-neck-tops">Roll neck tops</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tops/ruched-tops">ruched tops</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tops/satin-tops">Satin tops</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tops/sweatshirts">sweatshirts</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tops/shirts">Shirts</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tall/tall-tops">tall tops</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tops/t-shirts">t-shirts</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tops/vests">Vest tops</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tops/wrap-tops">wrap tops</a>
</li>

</ul>

    </div>
  </div>

            <div class="drop category-6">
    <div class="list " style="">
        <ul>
    <li style="">
    <a href="https://www.missguided.co.uk/clothing">view all</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/last-chance-to-buy">last chance to buy</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/most-wanted">most wanted</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/dresses">dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tops">tops</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/basics-shop">basics shop</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/blazers">blazers</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/casual-wear">casual wear</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/coats-jackets">coats &amp; jackets</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/co-ordinates">co-ords</a>
</li>

</ul>

        <ul>
    <li style="">
    <a href="https://www.missguided.co.uk/clothing/denim">denim</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/accessories/face-coverings">Face coverings</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tops/hoodies">hoodies</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/denim/jeans">jeans</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/going-out-tops-to-wear-with-jeans">jeans &amp; a nice top</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/trousers/joggers">joggers</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/jumpsuits">jumpsuits</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/knitwear">knitwear</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/leggings-and-hosiery">leggings</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/lingerie">lingerie</a>
</li>

</ul>

        <ul>
    <li style="">
    <a href="https://www.missguided.co.uk/clothing/loungewear">loungewear</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/nightwear">nightwear</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/playsuits">playsuits</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/collaborations/restyld">Re_styld</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/shorts">Shorts</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/skirts">Skirts</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/sportswear/skiwear">Skiwear</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/sportswear">Sportswear</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tops/sweatshirts">sweatshirts</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/swimwear">swimwear</a>
</li>

</ul>

        <ul>
    <li style="">
    <a href="https://www.missguided.co.uk/clothing/swimwear/bikinis">bikinis</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/swimwear/swimsuits">swimsuits</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tailoring">tailoring</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tracksuits">tracksuits</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/trousers">trousers</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/peace-love">peace + love</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/mg-collection">mg collection</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/modest">modest</a>
</li>

</ul>

        <ul>
    <h5 style="">shop by fit</h5>
    <li style="">
    <a href="https://www.missguided.co.uk/clothing/maternity">maternity</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/petite">petite</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/plus-size">plus size &amp; curve</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tall">tall</a>
</li>

</ul>

    </div>
  </div>

            <div class="drop category-7">
    <div class="list " style="">
        <ul>
    <h5 style="">Plus Size</h5>
    <li style="">
    <a href="https://www.missguided.co.uk/clothing/plus-size">view all</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/plus-size/plus-size-dresses">plus size dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/plus-size/plus-size-co-ordinates">plus size co-ords</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/plus-size/plus-size-tops">plus size tops</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/plus-size/plus-size-coats-and-jackets">plus size coats &amp; jackets</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/plus-size/denim">plus size denim</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/plus-size/plus-size-gym-wear">plus size gym wear</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/plus-size/plus-size-jeans">plus size jeans</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/plus-size/plus-size-leggings">plus size leggings</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/plus-size/plus-size-lingerie">plus size lingerie</a>
</li>

</ul>

        <ul>
    <li style="">
    <a href="https://www.missguided.co.uk/clothing/plus-size/plus-size-loungewear">plus size loungewear</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/plus-size/plus-size-skirts">plus size skirts</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/plus-size/plus-size-swimwear">plus size swimwear</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/plus-size/plus-size-trousers">plus size trousers</a>
</li>

</ul>

        <ul>
    <h5 style="">Tall</h5>
    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tall">view all</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tall/tall-dresses">tall dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tall/tall-tops">tall tops</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tall/tall-coats-jackets">tall coats &amp; jackets</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tall/tall-denim">tall denim</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tall/tall-jeans">tall jeans</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tall/tall-jumpsuits">tall jumpsuits</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tall/tall-shorts">tall shorts</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tall/tall-skirts">tall skirts</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/tall/tall-trousers">tall trousers</a>
</li>

</ul>

        <ul>
    <h5 style="">Petite</h5>
    <li style="">
    <a href="https://www.missguided.co.uk/clothing/petite">view all</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/petite/petite-dresses">petite dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/petite/petite-tops">petite tops</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/petite/petite-coats-jackets">petite coats &amp; jackets</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/petite/petite-denim">petite denim</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/petite/petite-jeans">petite jeans</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/petite/petite-jumpsuits">petite jumpsuits</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/petite/petite-shorts">Petite Shorts</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/petite/petite-skirts">petite skirts</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/petite/petite-trousers">petite trousers</a>
</li>

</ul>

        <ul>
    <h5 style="">Maternity</h5>
    <li style="">
    <a href="https://www.missguided.co.uk/clothing/maternity">view all</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/maternity/maternity-dresses">Maternity dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/maternity/maternity-tops">Maternity Tops</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/maternity/maternity-jeans">Maternity Jeans</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/maternity/maternity-loungewear">Maternity Loungewear</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/maternity/maternity-shorts">Maternity Shorts</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/maternity/maternity-trousers">Maternity Trousers</a>
</li>

</ul>

    </div>
  </div>

            <div class="drop category-8">
    <div class="list " style="">
        <ul>
    <li style="">
    <a href="https://www.missguided.co.uk/shoes">view all</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/shoes/boots/ankle-boots">Ankle boots</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/shoes/boots">boots</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/shoes/sandals/flat-sandals">flat Sandals</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/shoes/flats">flat shoes</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/shoes/heels/heeled-sandals">heeled Sandals</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/shoes/heels">high heels</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/shoes/boots/knee-high-boots">Knee high boots</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/shoes/mules">mules</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/shoes/sandals">sandals</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/clothing/nightwear/slippers">slippers</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/shoes/trainers">trainers</a>
</li>

</ul>

    </div>
  </div>

            <div class="drop category-9">
    <div class="list " style="">
        <ul>
    <h5 style="">Accessories</h5>
    <li style="">
    <a href="https://www.missguided.co.uk/accessories">view all</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/accessories/handbags">bags</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/accessories/belts">belts</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/accessories/dog-jumpers">dog jumpers</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/accessories/face-coverings">face coverings</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/accessories/gloves">Gloves</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/accessories/hats">hats</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/accessories/gifts">gifts</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/accessories/hair-accessories">hair accessories</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/accessories/hen-party-accessories">hen party accessories</a>
</li>

</ul>

        <ul>
    <li style="">
    <a href="https://www.missguided.co.uk/accessories/jewellery">jewellery</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/accessories/party-accessories">party accessories</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/accessories/phone-accessories">phone accessories</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/accessories/sports-nutrition">sports nutrition</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/accessories/scarves">Scarves</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/accessories/sunglasses">sunglasses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/accessories/tights-hosiery">tights &amp; socks</a>
</li>

</ul>

    </div>
  </div>

            <div class="drop category-10">
    <div class="list " style="">
        <ul>
    <li style="">
    <a href="https://www.missguided.co.uk/beauty">view all</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/new-in/beauty">new in beauty</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/make-up">Sale Beauty</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/make-up">make up</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/make-up/false-lashes">eyelashes</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/nail-polish">Nail polish</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/skincare">Skincare</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/bath-and-body">Bath &amp; Body</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/wellness">wellness</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/haircare">haircare</a>
</li>

</ul>

        <ul>
    <li style="">
    <a href="https://www.missguided.co.uk/beauty/perfume">fragrance</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/sun-and-tan">Sun &amp; Tan</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/tools-and-accessories">tools and accessories</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/electricals">electricals</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/beauty-gifts">beauty gifts</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/self-care">self care</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/vegan">vegan</a>
</li>

</ul>

        <ul>
    <h5 style="">beauty brands</h5>
    <li style="">
    <a href="https://www.missguided.co.uk/beauty/beauty-brands">view all</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/beauty-brands/missguided-beauty">missguided beauty</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/beauty-brands/babyliss">babyliss</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/beauty-brands/barry-m">Barry M</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/beauty-brands/bondi-sands">Bondi Sands</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/beauty-brands/brushworks">brushworks</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/beauty-brands/cloud-nine">Cloud Nine</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/beauty-brands/eyeko">Eyeko</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/beauty-brands/foreo">foreo</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/beauty-brands/garnier">garnier</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/beauty-brands/hawaiian-tropic">hawaiian tropic</a>
</li>

</ul>

        <ul>
    <li style="">
    <a href="https://www.missguided.co.uk/beauty/beauty-brands/iconic">Iconic London</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/beauty-brands/illamasqua">Illamasqua</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/beauty-brands/inglot">Inglot</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/beauty-brands/l-oreal">Loreal</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/beauty-brands/lottie-london">Lottie London</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/beauty-brands/lullabellz">Lullabellz</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/beauty-brands/made-by-sunday">Made By Sunday</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/beauty-brands/miss-patisserie">Miss Patisserie</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/beauty-brands/nails-inc">Nails Inc</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/beauty-brands/oh-my-lash">oh my lash</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/beauty-brands/nip-and-fab">nip + fab</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/beauty-brands/rimmel">rimmel</a>
</li>

</ul>

        <ul>
    <li style="">
    <a href="https://www.missguided.co.uk/beauty/beauty-brands/seoulista-beauty">Seoulista</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/beauty-brands/sigma">Sigma</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/beauty-brands/shea-moisture">shea moisture</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/beauty-brands/skinny-tan">skinny tan</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/beauty-brands/starskin">Starskin</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/beauty-brands/st-tropez">st tropez</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/beauty-brands/protein-world">Protein World</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/beauty-brands/st-moriz">St Moriz</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/beauty-brands/sunday-rain">Sunday Rain</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/beauty-brands/flat-lay-co">the flat lay co.</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/beauty-brands/wet-n-wild">Wet n Wild</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/beauty/beauty-brands/sisters">&amp;Sisters</a>
</li>

</ul>

    </div>
  </div>

            <div class="drop category-11">
    <div class="list " style="">
        <ul>
    <li style="">
    <a href="https://www.missguided.co.uk/homeware">view all homeware</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/homeware/art-frames">art, frames &amp; posters</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/homeware/bathroom">bathroom</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/homeware/bedding">bedding</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/homeware/candles">candles</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/homeware/decorative-accessories">Decorative Accessories</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/homeware/kitchen-dining">kitchen</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/homeware/plants-planters">plants &amp; planters</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/homeware/soft-furnishings">soft furnishings</a>
</li>

</ul>

    </div>
  </div>

            <div class="drop category-12">
    <div class="list " style="">
        <ul>
    <li style="">
    <a href="https://www.missguided.co.uk/collaborations/playboy">view all</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/collaborations/playboy/accessories">Accessories</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/collaborations/playboy/coords">co-ords</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/collaborations/playboy/dresses">dresses</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/collaborations/playboy/hoodies">hoodies</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/collaborations/playboy/joggers">joggers</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/collaborations/playboy/tops">tops</a>
</li>

    <li style="">
    <a href="https://www.missguided.co.uk/collaborations/playboy/shorts">shorts</a>
</li>

</ul>

    </div>
  </div>

    </div>
  </div>
</div>
</div>
    </div>

<div class="no-display js-menu-account-links">
    <csi id="account-links" rel="account.links" class="csi" data-storage-type="session" data-csi-tag="account" data-flash="0"></csi></div>

    <style>
.cms-promostrip-item{text-align:center;color:#000;background-color:#FFDED9;font-family:Missguided,Arial,sans-serif;letter-spacing:0.5px;line-height:1.35}.cms-promostrip-item--has-link:hover{color:#474747}@media screen and (min-width: 0px){.cms-promostrip-item{flex:1 1 100%;padding:calc(0.5rem + 4px);position:relative}.cms-promostrip-item__title{font-size:0.9375rem;font-weight:700}.cms-promostrip-item__subtitle{font-size:0.75rem;font-weight:400;text-transform:lowercase}}@media (min-width: 768px){.cms-promostrip-item{flex:1 1 0;padding:calc(0.4375rem + 4px);max-width:33.333333%}.cms-promostrip-item__title{font-size:1.125rem}.cms-promostrip-item__subtitle{font-size:.75rem}}.cms-promostrip-item__link{position:absolute;top:0px;bottom:0px;left:0px;right:0px}

@keyframes cms-promostrip-item-fade{0%{opacity:0;z-index:0}4%{opacity:1;z-index:1}29%{opacity:1;z-index:1}33%,100%{opacity:0;z-index:0}}.cms-promo-strip{display:flex;width:100%;overflow:hidden;position:relative}@media (max-width: 767px){.cms-promostrip-item{opacity:0;margin-left:-100%}.cms-promostrip-item:nth-child(1){margin-left:0px;animation:cms-promostrip-item-fade 12s linear infinite -4s}.cms-promostrip-item:nth-child(2){animation:cms-promostrip-item-fade 12s linear infinite -0s}.cms-promostrip-item:nth-child(3){animation:cms-promostrip-item-fade 12s linear infinite -8s}}
</style><div class="cms"><div class="cms-promo-strip">
  <div class="cms-promostrip-item cms-promostrip-item--has-link" style="">
    <a href="https://www.missguided.co.uk/vip-pass-1-year-unlimited-uk-next-day-delivery" class="cms-promostrip-item__link"></a>
  <div class="cms-promostrip-item__title">
    VIP Unlimited NDD Â£7.99
  </div>
    <div class="cms-promostrip-item__subtitle">
      Shop for a year *t&amp;c&#39;s
    </div>
</div>
  <div class="cms-promostrip-item cms-promostrip-item--has-link" style="">
    <a href="https://www.missguided.co.uk/sale" class="cms-promostrip-item__link"></a>
  <div class="cms-promostrip-item__title">
    AT LEAST 50% off EVERYTHING
  </div>
    <div class="cms-promostrip-item__subtitle">
      shop the big summer sale now *t&amp;cs apply
    </div>
</div>
  <div class="cms-promostrip-item cms-promostrip-item--has-link" style="">
    <a href="https://www.missguided.co.uk/student-discount" class="cms-promostrip-item__link"></a>
  <div class="cms-promostrip-item__title">
    25% off Student Discount
  </div>
    <div class="cms-promostrip-item__subtitle">
      *on full price items only shop now
    </div>
</div>
</div></div>

<div class="search-results-header-wrapper">
    </div>

<div id="js-newsletter-lightbox" class="newsletter-lightbox-content">
    <span class="newsletter-lightbox__title as-heading h1">treat your inbox</span>
    <p class="newsletter-overlay-content__strapline">
        Receive our newsletter on the latest deals and happenings. You can unsubscribe any time you want.        <span><a href="https://www.missguided.co.uk/privacy-notices" target="_blank" rel="nofollow noreferrer">Read more here</a> about how and why we ask for this data.</span>
    </p>
    <div class="form__newsletter form-subscribe">
    <form action="https://www.missguided.co.uk/newsletter/subscriber/new" method="post" class="form js-newsletter-validate" id="newsletter-validate-detail" novalidate="">
        <fieldset>
            <ul class="form__list form__inline">
                <li class="form__field">
                    <div class="form__input">
                        <button title="Go" class="newsletter-button button--nostyle right button--newsletter-lightbox-content js-newsletter-button"><svg class="icon icon--arrow-right"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow-right"></use></svg></button>
                        <div class="left">
                                                        <input type="hidden" name="area_of_site" id="area_of_site_header" value="NAVIGATION"/>
                                                        <input type="hidden" name="territory" id="territory" value="UK"/>
                            <input type="email" name="newsletter" placeholder="Your email address" value="" title="Your email address" class="newsletter-input input-text required-entry validate-email js-newsletter-input"/>
                        </div>
                    </div>
                </li>
            </ul>
        </fieldset>
    </form>
    <div class="js-newsletter-result validation-advice" id="newsletter-signup-result"></div>
</div>
    <div class="newsletter-overlay-content__close">
        <a href="#" class="js-newsletter-overlay-close newsletter-lightbox-content--close" title="Close">
           Close        </a>
    </div>
    </div>
        <div class="main-container-wrapper">
        
        <div class="main-container col1-layout">
            <div class="main">
                                <main role="main" class="col-main">
                    <csi id="global-messages" rel="global_messages" class="csi" data-storage-type="disabled" data-csi-tag="flash-message" data-flash="1"></csi>                    <div class="std"><csi id="messages" rel="messages" class="csi" data-storage-type="disabled" data-csi-tag="flash-message" data-flash="1"></csi><style>
  .hero-terms {
    position: absolute;
    bottom: 4.5%;
    right: 2%;
    font-size: 0.75rem;
    font-weight: bold;
    color: #fff;
    margin: 0;
  }

  .img-placeholder {
    position: relative;
    overflow: hidden;
    height: 0;
    width: 100%;
    background-color: #ececf2;
  }

  .hero-banner .img-placeholder {
    padding-top: 44.79%;
  }

  .lower-slot .img-placeholder {
    padding-top: 100%;
    margin-bottom: 1rem;
  }

  .categories-container .img-placeholder {
    padding-top: 145%;
  }

  .img-placeholder img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-width: none;
    transform: translateZ(0);
    transition: opacity 0.5s linear;
    will-change: opacity;
  }

  .title1,
  .title3,
  .subtitle1,
  .subtitle3,
  .container .button {
    text-transform: none;
  }

  .row button.button {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  @media (min-width: 768px) {
    .row button.button {
      background: rgb(255, 255, 255);
      color: rgb(50, 50, 50);
      border-color: rgb(255, 255, 255);
    }

    .row svg {
      margin-bottom: 40px;
      filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.3));
    }

    .row .subtitle1 {
      margin-bottom: 20px;
      text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }

    .row .banner_content {
      width: 100%;
    }

    .row1 .title1,
    .row2 .title1,
    .row3 .title1 {
      display: none;
    }

    .row .subtitle1 {
      margin-top: 20px;
    }
  }
  @media (max-width: 767px) {
    .hero-banner .img-placeholder {
      padding-top: 100%;
    }

    .row svg {
      display: none;
    }

    .row .banner_content {
      top: auto;
    }

    .lower-slot {
      padding: 0 12.5vw;
    }

    .hero-terms {
      right: 4%;
      left: 4%;
      bottom: auto;
      top: calc(100vw - 33px);
    }
  }
</style>

<style>
  .promo-ticker,
  .row1 button,
  .categories-sale__ctas button.button {
    background: #fa7fb3 !important;
    border: #fa7fb3 !important;
    color: #fbf312 !important;
  }

  .row1 button {
    margin: 300px auto 0 auto !important;
  }

  .categories-sale__container,
  #homeSlider,
  .categories-sale__by-category {
    background: #fbcacd !important;
  }

  .categories-sale__ctas button.button {
    font-family: "titling-gothic-fb-wide", missguided, arial, sans-serif;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    text-: uppercase;
  }

  .categories-sale__by-category {
    padding-top: 0rem !important;
  }

  .categories-sale__title {
    text-transform: uppercase !important;
  }

  /* ADDITIONAL STYLES FROM LAST SALE TO FORMAT GIF*/
  @media (min-width: 1400px) {
    .row .banner_content {
      margin-top: 120px;
      width: 35%;
    }
    .row1 .banner_content img:last-of-type {
      display: none;
    }
  }

  @media (min-width: 768px) and (max-width: 1399px) {
    .row .banner_content {
      margin-top: 70px;
      width: 30%;
    }

    .row1 .banner_content img:last-of-type {
      display: none;
    }
  }
  @media (max-width: 767px) {
    .hero-banner .img-placeholder {
      padding-top: 100%;
    }
    .row {
      margin-bottom: 0;
    }
    .row svg {
      display: none;
    }
    .row .banner_content {
      top: auto;
    }
    .lower-slot {
      padding: 0 12.5vw;
    }
    .row1 .banner_content img:first-of-type {
      display: none;
    }
    .row-1 .banner_content {
      top: auto;
    }

    .row button.button {
      background: #fff;
      border-color: #fff;
    }
    .row1 .banner_content img {
      position: absolute;
      top: -105vw;
      transform: translateY(55%);
      left: 0px;
      min-height: 0px;
      margin: 0;
    }
  }
</style>

<div class="container">
  <div class="cms"></div>

  <style>
    @keyframes marquee {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(-100%, 0);
      }
    }
    .promo-ticker {
      background: #101111;
      position: relative;
      height: 56px;
      color: #ffd4ca;
      font-family: titling-gothic-fb-wide, missguided, sans-serif;
      font-weight: 600;
      text-transform: uppercase;
      font-size: 1.25rem;
      padding: 0.5rem 0;
      overflow: hidden;
    }
    .promo-ticker > div {
      margin: 0 auto;
      white-space: nowrap;
      overflow: hidden;
      position: absolute;
      top: 50%;
      transform: translatey(-50%);
      display: flex;
    }
    .promo-ticker > div > span {
      margin-bottom: 0;
      animation: marquee 25s linear infinite;
      will-change: transform;
      display: inline-block;
    }
    .promo-ticker svg {
      height: 38px;
      padding: 0 4rem;
    }

    .promo-ticker > span > span {
      font-weight: 400;
    }
  </style>
  <a href="/sale">
    <div class="promo-ticker">
      <div>
        <span>
          SUMMER SALE NOW ON Â Â Â·Â Â  AT LEAST 50% OFF
          EVERYTHING Â Â Â·Â Â  YOU + SHOPPING THIS SALE = A
          VIBE Â Â Â·Â Â  SUMMER SALE NOW ON
          Â Â Â·Â Â  AT LEAST 50% OFF EVERYTHING
          Â Â Â·Â Â  YOU + SHOPPING THIS SALE = A VIBE
          Â Â Â·Â Â  SUMMER SALE NOW ON
          Â Â Â·Â Â  AT LEAST 50% OFF EVERYTHING
          Â Â Â·Â Â  YOU + SHOPPING THIS SALE = A VIBE
          Â Â Â·Â Â 
        </span>
        <span>
          SUMMER SALE NOW ON Â Â Â·Â Â  AT LEAST 50% OFF
          EVERYTHING Â Â Â·Â Â  YOU + SHOPPING THIS SALE = A
          VIBE Â Â Â·Â Â  SUMMER SALE NOW ON
          Â Â Â·Â Â  AT LEAST 50% OFF EVERYTHING
          Â Â Â·Â Â  YOU + SHOPPING THIS SALE = A VIBE
          Â Â Â·Â Â  SUMMER SALE NOW ON
          Â Â Â·Â Â  AT LEAST 50% OFF EVERYTHING
          Â Â Â·Â Â  YOU + SHOPPING THIS SALE = A VIBE
          Â Â Â·Â Â 
        </span>
        <span>
          SUMMER SALE NOW ON Â Â Â·Â Â  AT LEAST 50% OFF
          EVERYTHING Â Â Â·Â Â  YOU + SHOPPING THIS SALE = A
          VIBE Â Â Â·Â Â  SUMMER SALE NOW ON
          Â Â Â·Â Â  AT LEAST 50% OFF EVERYTHING
          Â Â Â·Â Â  YOU + SHOPPING THIS SALE = A VIBE
          Â Â Â·Â Â  SUMMER SALE NOW ON
          Â Â Â·Â Â  AT LEAST 50% OFF EVERYTHING
          Â Â Â·Â Â  YOU + SHOPPING THIS SALE = A VIBE
          Â Â Â·Â Â 
        </span>
      </div>
    </div>
  </a>

  <div id="homeSlider">
    <div class="hero-banner row fullwidth row1">
      <a href="/sale">
        <div class="img-placeholder">
          <picture>
            <source type="image/webp" data-srcset="https://media.missguided.com/i/missguided/UK_50_SALE_02_08_mobile_1.webp?w=300&amp;qlt=70 300w,https://media.missguided.com/i/missguided/UK_50_SALE_02_08_mobile_1.webp?w=402&amp;qlt=70 402w,https://media.missguided.com/i/missguided/UK_50_SALE_02_08_mobile_1.webp?w=491&amp;qlt=70 491w,https://media.missguided.com/i/missguided/UK_50_SALE_02_08_mobile_1.webp?w=569&amp;qlt=70 569w,https://media.missguided.com/i/missguided/UK_50_SALE_02_08_mobile_1.webp?w=639&amp;qlt=70 639w,https://media.missguided.com/i/missguided/UK_50_SALE_02_08_mobile_1.webp?w=711&amp;qlt=70 711w,https://media.missguided.com/i/missguided/UK_50_SALE_02_08_mobile_1.webp?w=756&amp;qlt=70 756w,https://media.missguided.com/i/missguided/UK_50_SALE_02_08_mobile_1.webp?w=767&amp;qlt=70 767w" sizes="100vw" media="(max-width: 767px)"/>

            <source type="image/jpeg" data-srcset="https://media.missguided.com/i/missguided/UK_50_SALE_02_08_mobile_1.jpeg?w=300&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 300w,https://media.missguided.com/i/missguided/UK_50_SALE_02_08_mobile_1.jpeg?w=402&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 402w,https://media.missguided.com/i/missguided/UK_50_SALE_02_08_mobile_1.jpeg?w=491&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 491w,https://media.missguided.com/i/missguided/UK_50_SALE_02_08_mobile_1.jpeg?w=569&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 569w,https://media.missguided.com/i/missguided/UK_50_SALE_02_08_mobile_1.jpeg?w=639&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 639w,https://media.missguided.com/i/missguided/UK_50_SALE_02_08_mobile_1.jpeg?w=711&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 711w,https://media.missguided.com/i/missguided/UK_50_SALE_02_08_mobile_1.jpeg?w=756&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 756w,https://media.missguided.com/i/missguided/UK_50_SALE_02_08_mobile_1.jpeg?w=767&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 767w" sizes="100vw" media="(max-width: 767px)"/>

            <source type="image/webp" data-srcset="https://media.missguided.com/i/missguided/UK_50_SALE_02_08_desktop.webp?w=768&amp;qlt=70 768w,https://media.missguided.com/i/missguided/UK_50_SALE_02_08_desktop.webp?w=937&amp;qlt=70 937w,https://media.missguided.com/i/missguided/UK_50_SALE_02_08_desktop.webp?w=1086&amp;qlt=70 1086w,https://media.missguided.com/i/missguided/UK_50_SALE_02_08_desktop.webp?w=1226&amp;qlt=70 1226w,https://media.missguided.com/i/missguided/UK_50_SALE_02_08_desktop.webp?w=1353&amp;qlt=70 1353w,https://media.missguided.com/i/missguided/UK_50_SALE_02_08_desktop.webp?w=1474&amp;qlt=70 1474w,https://media.missguided.com/i/missguided/UK_50_SALE_02_08_desktop.webp?w=1582&amp;qlt=70 1582w,https://media.missguided.com/i/missguided/UK_50_SALE_02_08_desktop.webp?w=1686&amp;qlt=70 1686w,https://media.missguided.com/i/missguided/UK_50_SALE_02_08_desktop.webp?w=1792&amp;qlt=70 1792w,https://media.missguided.com/i/missguided/UK_50_SALE_02_08_desktop.webp?w=1905&amp;qlt=70 1905w" sizes="100vw"/>

            <source type="image/jpeg" data-srcset="https://media.missguided.com/i/missguided/UK_50_SALE_02_08_desktop.jpeg?w=768&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 768w,https://media.missguided.com/i/missguided/UK_50_SALE_02_08_desktop.jpeg?w=937&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 937w,https://media.missguided.com/i/missguided/UK_50_SALE_02_08_desktop.jpeg?w=1086&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 1086w,https://media.missguided.com/i/missguided/UK_50_SALE_02_08_desktop.jpeg?w=1226&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 1226w,https://media.missguided.com/i/missguided/UK_50_SALE_02_08_desktop.jpeg?w=1353&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 1353w,https://media.missguided.com/i/missguided/UK_50_SALE_02_08_desktop.jpeg?w=1474&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 1474w,https://media.missguided.com/i/missguided/UK_50_SALE_02_08_desktop.jpeg?w=1582&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 1582w,https://media.missguided.com/i/missguided/UK_50_SALE_02_08_desktop.jpeg?w=1686&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 1686w,https://media.missguided.com/i/missguided/UK_50_SALE_02_08_desktop.jpeg?w=1792&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 1792w,https://media.missguided.com/i/missguided/UK_50_SALE_02_08_desktop.jpeg?w=1905&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 1905w" sizes="100vw"/>

            <img class="lazyload" data-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" alt="backup"/>
          </picture>
        </div>

        <div class="banner_content center">
          <img src="https://missguided.a.bigcontent.io/v1/static/everythingtext"/><img src="https://missguided.a.bigcontent.io/v1/static/UK_50_SALE_GIF_mobile"/>
        </div>
        <p class="hero-terms">*Applies to sale lines only</p>
      </a>
    </div>
  </div>

  <style>
    .categories-sale__container,
    #homeSlider {
      background: #f6dbde;
    }

    .categories-sale__container__last {
      padding-bottom: 3rem;
    }

    .categories-sale__container:last-of-type {
      margin-bottom: 5rem;
    }

    .categories-sale__heading {
      padding-top: 3rem;
      padding-bottom: 0.75rem;
    }

    .categories-sale__title {
      font-family: "titling-gothic-fb-wide", missguided, arial, sans-serif;
      font-weight: 700;
      text-transform: none;
      margin-bottom: 0;
    }

    .categories-sale__ctas {
      display: flex;
      flex-wrap: wrap;
      width: calc(100% - 2rem);
      max-width: 1100px;
      margin: 0 auto;
      align-items: flex-start;
      justify-content: center;
    }

    .categories-sale__ctas button.button {
      font-family: "titling-gothic-fb-wide", missguided, arial, sans-serif;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      background: #d53a40;
      border-color: #d53a40;
    }

    @media (min-width: 768px) {
      .categories-sale__title {
        font-size: 1.75rem;
      }
    }
  </style>
  <div class="categories-sale__container">
    <h2 class="categories-sale__heading categories-sale__title">
      SHOP BY SALE DISCOUNT
    </h2>
    <div class="categories-sale__ctas">
      <a href="/sale/sale-5-and-under">
        <button class="button">Â£5 &amp; UNDER</button>
      </a>

      <a href="/sale/sale-10-and-under">
        <button class="button">Â£10 &amp; UNDER</button>
      </a>

      <a href="/sale/sale-15-and-under">
        <button class="button">Â£15 &amp; UNDER</button>
      </a>

      <a href="/sale/sale-20-and-under">
        <button class="button">Â£20 &amp; UNDER</button>
      </a>
    </div>
  </div>

  <style>
    .categories-sale__container,
    #homeSlider {
      background: #f6dbde;
    }

    .categories-sale__container__last {
      padding-bottom: 3rem;
    }

    .categories-sale__container:last-of-type {
      margin-bottom: 5rem;
    }

    .categories-sale__heading {
      padding-top: 3rem;
      padding-bottom: 0.75rem;
    }

    .categories-sale__title {
      font-family: "titling-gothic-fb-wide", missguided, arial, sans-serif;
      font-weight: 700;
      text-transform: none;
      margin-bottom: 0;
    }

    .categories-sale__ctas {
      display: flex;
      flex-wrap: wrap;
      width: calc(100% - 2rem);
      max-width: 1100px;
      margin: 0 auto;
      align-items: flex-start;
      justify-content: center;
    }

    .categories-sale__ctas button.button {
      font-family: "titling-gothic-fb-wide", missguided, arial, sans-serif;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      background: #d53a40;
      border-color: #d53a40;
    }

    @media (min-width: 768px) {
      .categories-sale__title {
        font-size: 1.75rem;
      }
    }
  </style>
  <div class="categories-sale__container categories-sale__container__last">
    <h2 class="categories-sale__heading categories-sale__title">
      SHOP SALE BY SIZE
    </h2>
    <div class="categories-sale__ctas">
      <a href="/sale?clothing_size=7399-7357">
        <button class="button">4-6</button>
      </a>

      <a href="/sale?clothing_size=7358-7359">
        <button class="button">8-10</button>
      </a>

      <a href="/sale?clothing_size=7360-7361">
        <button class="button">12-14</button>
      </a>

      <a href="/sale?clothing_size=7362-7750">
        <button class="button">16-18</button>
      </a>

      <a href="/sale?clothing_size=7750-7900-7902-7901-8264-9169-9178-8510">
        <button class="button">18+</button>
      </a>
    </div>
  </div>

  <style>
    .categories-sale__by-category {
      padding-bottom: 3rem;
    }
    .categories-sale__grid {
      max-width: 1060px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 1rem;
      padding: 2rem 1rem 0rem;
      justify-content: center;
    }
    .categories-sale__grid img {
      width: 100%;
    }
    @media (max-width: 767px) {
      .categories-sale__grid {
        grid-template-columns: 1fr 1fr;
      }
      .categories-sale__by-category {
        padding-bottom: 3rem;
      }
    }
  </style>

  <div class="categories-sale__by-category">
    <h2 class="categories-sale__title">Shop by Sale Category</h2>
    <div class="categories-sale__grid">
      <a href="/sale/sale-dresses">
        <picture>
          <source type="image/webp" data-srcset="https://media.missguided.com/i/missguided/dresses_1.webp?w=200&amp;fmt.jpeg.interlaced=true"/>
          <source data-srcset="https://media.missguided.com/i/missguided/dresses_1?w=200&amp;fmt.jpeg.interlaced=true"/>
          <img class="category-tile__image lazyload" data-src="https://media.missguided.com/i/missguided/dresses_1?w=100&amp;fmt.jpeg.interlaced=true"/>
        </picture>
      </a>

      <a href="/sale/sale-tops">
        <picture>
          <source type="image/webp" data-srcset="https://media.missguided.com/i/missguided/tops.webp?w=200&amp;fmt.jpeg.interlaced=true"/>
          <source data-srcset="https://media.missguided.com/i/missguided/tops?w=200&amp;fmt.jpeg.interlaced=true"/>
          <img class="category-tile__image lazyload" data-src="https://media.missguided.com/i/missguided/tops?w=100&amp;fmt.jpeg.interlaced=true"/>
        </picture>
      </a>

      <a href="/sale/sale-swimwear">
        <picture>
          <source type="image/webp" data-srcset="https://media.missguided.com/i/missguided/UK_Swim_SALE_categories.webp?w=200&amp;fmt.jpeg.interlaced=true"/>
          <source data-srcset="https://media.missguided.com/i/missguided/UK_Swim_SALE_categories?w=200&amp;fmt.jpeg.interlaced=true"/>
          <img class="category-tile__image lazyload" data-src="https://media.missguided.com/i/missguided/UK_Swim_SALE_categories?w=100&amp;fmt.jpeg.interlaced=true"/>
        </picture>
      </a>

      <a href="/sale/sale-trousers">
        <picture>
          <source type="image/webp" data-srcset="https://media.missguided.com/i/missguided/trousers.webp?w=200&amp;fmt.jpeg.interlaced=true"/>
          <source data-srcset="https://media.missguided.com/i/missguided/trousers?w=200&amp;fmt.jpeg.interlaced=true"/>
          <img class="category-tile__image lazyload" data-src="https://media.missguided.com/i/missguided/trousers?w=100&amp;fmt.jpeg.interlaced=true"/>
        </picture>
      </a>
    </div>
  </div>

  <style>
    .info-strip {
      height: 48px;
      margin-bottom: 2em;
    }

    .info-strip .info {
      margin: 0;
      padding: 0.5em;
      background: #fee0e2;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .info-strip .info a {
      display: block;
      width: 100%;
      height: 100%;
    }

    .info-strip .info h3 {
      margin: 0.25em;
      padding: 0;
      font-size: 16px;
      line-height: 28px;
    }

    @media (max-width: 767px) {
      .info-strip {
        margin-bottom: 60px;
      }

      .info-strip .info h3 {
        text-transform: lowercase;
        font-size: 15px;
        font-size: 0.9375rem;
      }
    }

    @media (max-width: 320px) {
      .info-strip .info h3 {
        font-size: 10px;
      }
    }

    @media (min-width: 1600px) {
      .info-strip .info h3 {
        font-size: 20px;
      }
    }
  </style>
  <div class="info-strip">
    <div class="info">
      <a href="/vip-pass-1-year-unlimited-uk-next-day-delivery">
        <h3 id="delivery-message">
          Get a year of Unlimited UK Next Day Delivery for just Â£7.99
        </h3>
      </a>
    </div>
    <div class="info">
      <a href="/klarna">
        <h3 id="delivery-message">
          Pay in 3 on orders of Â£25 or more with Klarna. 18+ T&amp;Câs apply
        </h3>
      </a>
    </div>
    <div class="info">
      <a href="https://www.clearpay.co.uk/en-GB/terms-of-service">
        <h3 id="delivery-message">
          Clearpay. Shop now. Pay Later. Always Interest free *No fees when you
          pay on time. T&amp;Cs Apply.
        </h3>
      </a>
    </div>
  </div>

  <div class="slick-three">
    <div class="blocker"></div>
    <div class="lower-slot">
      <a href="/beauty/beauty-brands/babyliss" class="tracking">
        <div class="img-placeholder">
          <picture>
            <source type="image/webp" data-srcset="https://media.missguided.com/i/missguided/Babyliss_30_11_lower.webp?w=224&amp;qlt=70 224w,https://media.missguided.com/i/missguided/Babyliss_30_11_lower.webp?w=281&amp;qlt=70 281w,https://media.missguided.com/i/missguided/Babyliss_30_11_lower.webp?w=294&amp;qlt=70 294w,https://media.missguided.com/i/missguided/Babyliss_30_11_lower.webp?w=310&amp;qlt=70 310w,https://media.missguided.com/i/missguided/Babyliss_30_11_lower.webp?w=350&amp;qlt=70 350w,https://media.missguided.com/i/missguided/Babyliss_30_11_lower.webp?w=441&amp;qlt=70 441w,https://media.missguided.com/i/missguided/Babyliss_30_11_lower.webp?w=588&amp;qlt=70 588w" sizes="(max-width: 767px) 75vw, 294px"/>

            <source type="image/jpeg" data-srcset="https://media.missguided.com/i/missguided/Babyliss_30_11_lower.jpeg?w=224&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 224w,https://media.missguided.com/i/missguided/Babyliss_30_11_lower.jpeg?w=281&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 281w,https://media.missguided.com/i/missguided/Babyliss_30_11_lower.jpeg?w=294&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 294w,https://media.missguided.com/i/missguided/Babyliss_30_11_lower.jpeg?w=310&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 310w,https://media.missguided.com/i/missguided/Babyliss_30_11_lower.jpeg?w=350&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 350w,https://media.missguided.com/i/missguided/Babyliss_30_11_lower.jpeg?w=441&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 441w,https://media.missguided.com/i/missguided/Babyliss_30_11_lower.jpeg?w=588&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 588w" sizes="(max-width: 767px) 75vw, 294px"/>

            <img class="lazyload" data-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" alt="backup"/>
          </picture>
        </div>

        <div class="title-below">
          <h2 class="title3">Messy buns are cancelled</h2>
          <h4 class="subtitle3">Discover new styling tools from Babyliss</h4>
          <button class="button">shop now</button>
        </div>
      </a>
    </div>
    <div class="lower-slot">
      <a href="/occasion/summer-outfits" class="tracking">
        <div class="img-placeholder">
          <picture>
            <source type="image/webp" data-srcset="https://media.missguided.com/i/missguided/Summer_27_07_lower.webp?w=224&amp;qlt=70 224w,https://media.missguided.com/i/missguided/Summer_27_07_lower.webp?w=281&amp;qlt=70 281w,https://media.missguided.com/i/missguided/Summer_27_07_lower.webp?w=294&amp;qlt=70 294w,https://media.missguided.com/i/missguided/Summer_27_07_lower.webp?w=310&amp;qlt=70 310w,https://media.missguided.com/i/missguided/Summer_27_07_lower.webp?w=350&amp;qlt=70 350w,https://media.missguided.com/i/missguided/Summer_27_07_lower.webp?w=441&amp;qlt=70 441w,https://media.missguided.com/i/missguided/Summer_27_07_lower.webp?w=588&amp;qlt=70 588w" sizes="(max-width: 767px) 75vw, 294px"/>

            <source type="image/jpeg" data-srcset="https://media.missguided.com/i/missguided/Summer_27_07_lower.jpeg?w=224&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 224w,https://media.missguided.com/i/missguided/Summer_27_07_lower.jpeg?w=281&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 281w,https://media.missguided.com/i/missguided/Summer_27_07_lower.jpeg?w=294&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 294w,https://media.missguided.com/i/missguided/Summer_27_07_lower.jpeg?w=310&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 310w,https://media.missguided.com/i/missguided/Summer_27_07_lower.jpeg?w=350&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 350w,https://media.missguided.com/i/missguided/Summer_27_07_lower.jpeg?w=441&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 441w,https://media.missguided.com/i/missguided/Summer_27_07_lower.jpeg?w=588&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 588w" sizes="(max-width: 767px) 75vw, 294px"/>

            <img class="lazyload" data-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" alt="backup"/>
          </picture>
        </div>

        <div class="title-below">
          <h2 class="title3">Rays for days</h2>
          <h4 class="subtitle3">Dress for the weather you want, always.</h4>
          <button class="button">the summer shop</button>
        </div>
      </a>
    </div>
    <div class="lower-slot">
      <a href="/clothing/swimwear" class="tracking">
        <div class="img-placeholder">
          <picture>
            <source type="image/webp" data-srcset="https://media.missguided.com/i/missguided/Swim_27_07_lower.webp?w=224&amp;qlt=70 224w,https://media.missguided.com/i/missguided/Swim_27_07_lower.webp?w=281&amp;qlt=70 281w,https://media.missguided.com/i/missguided/Swim_27_07_lower.webp?w=294&amp;qlt=70 294w,https://media.missguided.com/i/missguided/Swim_27_07_lower.webp?w=310&amp;qlt=70 310w,https://media.missguided.com/i/missguided/Swim_27_07_lower.webp?w=350&amp;qlt=70 350w,https://media.missguided.com/i/missguided/Swim_27_07_lower.webp?w=441&amp;qlt=70 441w,https://media.missguided.com/i/missguided/Swim_27_07_lower.webp?w=588&amp;qlt=70 588w" sizes="(max-width: 767px) 75vw, 294px"/>

            <source type="image/jpeg" data-srcset="https://media.missguided.com/i/missguided/Swim_27_07_lower.jpeg?w=224&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 224w,https://media.missguided.com/i/missguided/Swim_27_07_lower.jpeg?w=281&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 281w,https://media.missguided.com/i/missguided/Swim_27_07_lower.jpeg?w=294&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 294w,https://media.missguided.com/i/missguided/Swim_27_07_lower.jpeg?w=310&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 310w,https://media.missguided.com/i/missguided/Swim_27_07_lower.jpeg?w=350&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 350w,https://media.missguided.com/i/missguided/Swim_27_07_lower.jpeg?w=441&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 441w,https://media.missguided.com/i/missguided/Swim_27_07_lower.jpeg?w=588&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 588w" sizes="(max-width: 767px) 75vw, 294px"/>

            <img class="lazyload" data-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" alt="backup"/>
          </picture>
        </div>

        <div class="title-below">
          <h2 class="title3">Wear less season</h2>
          <h4 class="subtitle3">
            Holidays are a thing again, you need new swim
          </h4>
          <button class="button">shop swimwear</button>
        </div>
      </a>
    </div>
    <div class="lower-slot">
      <a href="/clothing/promo-12" class="tracking">
        <div class="img-placeholder">
          <picture>
            <source type="image/webp" data-srcset="https://media.missguided.com/i/missguided/Princes_Trust_UK_23_07_lower_1.webp?w=224&amp;qlt=70 224w,https://media.missguided.com/i/missguided/Princes_Trust_UK_23_07_lower_1.webp?w=281&amp;qlt=70 281w,https://media.missguided.com/i/missguided/Princes_Trust_UK_23_07_lower_1.webp?w=294&amp;qlt=70 294w,https://media.missguided.com/i/missguided/Princes_Trust_UK_23_07_lower_1.webp?w=310&amp;qlt=70 310w,https://media.missguided.com/i/missguided/Princes_Trust_UK_23_07_lower_1.webp?w=350&amp;qlt=70 350w,https://media.missguided.com/i/missguided/Princes_Trust_UK_23_07_lower_1.webp?w=441&amp;qlt=70 441w,https://media.missguided.com/i/missguided/Princes_Trust_UK_23_07_lower_1.webp?w=588&amp;qlt=70 588w" sizes="(max-width: 767px) 75vw, 294px"/>

            <source type="image/jpeg" data-srcset="https://media.missguided.com/i/missguided/Princes_Trust_UK_23_07_lower_1.jpeg?w=224&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 224w,https://media.missguided.com/i/missguided/Princes_Trust_UK_23_07_lower_1.jpeg?w=281&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 281w,https://media.missguided.com/i/missguided/Princes_Trust_UK_23_07_lower_1.jpeg?w=294&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 294w,https://media.missguided.com/i/missguided/Princes_Trust_UK_23_07_lower_1.jpeg?w=310&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 310w,https://media.missguided.com/i/missguided/Princes_Trust_UK_23_07_lower_1.jpeg?w=350&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 350w,https://media.missguided.com/i/missguided/Princes_Trust_UK_23_07_lower_1.jpeg?w=441&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 441w,https://media.missguided.com/i/missguided/Princes_Trust_UK_23_07_lower_1.jpeg?w=588&amp;qlt=70&amp;fmt.jpeg.interlaced=true&amp;upscale=false 588w" sizes="(max-width: 767px) 75vw, 294px"/>

            <img class="lazyload" data-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" alt="backup"/>
          </picture>
        </div>

        <div class="title-below">
          <h2 class="title3">Join the Self Care Club</h2>
          <h4 class="subtitle3">
            Prioritise yourself, whilst helping others. 50% of all profits from
            this collection will go towards supporting women through The
            Princeâs Trust.
          </h4>
          <button class="button">shop now</button>
        </div>
      </a>
    </div>
  </div>

  <div class="app-download-strip">
    <style>
      .app-download-strip {
        background: #141414;
        margin-bottom: 3rem;
      }

      .app-download-strip a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1.5rem 0.5rem;
      }

      .app-download-strip h3,
      .app-download-strip p {
        color: #ffffff;
        font-family: "titling-gothic-fb-wide", missguided, arial, sans-serif;
        font-weight: 700;
        text-transform: none;
        margin: 0;
        text-align: center;
      }

      .app-download-strip h3 {
        display: flex;
        margin-bottom: 0.75rem;
      }
    </style>
    <a href="https://tosto.re/missguided">
      <h3>Download our app for exclusive discounts</h3>
      <p></p>
    </a>
  </div>
</div>
<!-- This markup is required for the RichRelevance integration-->
<div id="rr-bottom"></div></div>                </main>
            </div>
        </div>
    </div>
    <div class="background-overlay js-background-overlay"></div>
<a id="sign-up-newsletter" name="sign-up-newsletter">Â </a>
<div class="background-overlay background-overlay--menu js-background-overlay-menu"></div>

<footer class="footer-container" role="contentinfo">
    <div class="footer-wrapper">
        <div class="footer">
            <div class="col1-set footer__newsletter">
        <div class="col1 footer__col">
            <div class="col1 footer__heading">
                <h2>treat your inbox</h2>
                <p>Receive our newsletter on the latest deals and happenings. You can unsubscribe any time you want. <a href="https://www.missguided.co.uk/privacy-notices" target="_blank" rel="nofollow noreferrer">Read more here</a> about how and why we ask for this data.</p>
            </div>
            <div>
                <div class="form__newsletter form-subscribe">
    <form action="https://www.missguided.co.uk/newsletter/subscriber/new" method="post" class="form js-newsletter-validate" id="newsletter-validate-detail" novalidate="">
        <fieldset>
            <ul class="form__list form__inline">
                <li class="form__field">
                    <div class="form__input">
                        <button title="Go" class="newsletter-button button--nostyle right button--newsletter-lightbox-content js-newsletter-button"><svg class="icon icon--arrow-right"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow-right"></use></svg></button>
                        <div class="left">
                                                        <input type="hidden" name="area_of_site" id="area_of_site_footer" value="FOOTER"/>
                                                        <input type="hidden" name="territory" id="territory" value="UK"/>
                            <input type="email" name="newsletter" placeholder="Your email address" value="" title="Your email address" class="newsletter-input input-text required-entry validate-email js-newsletter-input"/>
                        </div>
                    </div>
                </li>
            </ul>
        </fieldset>
    </form>
    <div class="js-newsletter-result validation-advice" id="newsletter-signup-result"></div>
</div>

            </div>
        </div>
    </div>    <style>
.footer-links-link{display:flex;padding-bottom:2px;letter-spacing:0;justify-content:space-between}.footer-links-link .link{display:inline;color:#000;font-weight:300;font-size:0.84375rem;line-height:2;text-transform:capitalize;align-items:center;justify-content:center;text-decoration:none;cursor:pointer;letter-spacing:0}.footer-links-link .link-info{flex:0 1 65px;padding-left:0.75rem;color:#474747;font-size:0.6875rem;line-height:2.5;white-space:nowrap;text-align:right}.footer-links-link .link-span:hover.special{color:#474747}@media (min-width: 800px){.footer-links-link .link-span.has-info{flex:0 1 205px;padding-right:0.75rem}}

@media (min-width: 768px){.footer-links-section__container{padding:0 0 0 1.5rem}.footer-links-section__container:nth-child(1){padding-left:3rem}.footer-links-section__container:nth-child(3){padding-right:3rem}}.footer-links-section{list-style:none;box-sizing:border-box;padding:0}@media (max-width: 767px){.footer-links-section{display:none}}.footer-links-section h4{margin:0.875rem 0;color:#000;font-size:1.125rem;line-height:1}.accord-section{display:none}@media (max-width: 767px){.accord-section{display:block}}.accord-section .accord-header{cursor:pointer}.accord-section .accord-header .heading{display:flex;align-items:center;justify-content:space-between;padding:0.875rem 0;font-weight:700;font-size:1.5em;line-height:1.2;letter-spacing:0.5px;text-align:left;text-transform:lowercase}.accord-section .accord-header .heading.position-icon-left{flex-flow:row-reverse;justify-content:flex-end}.accord-section .accord-header .heading.position-icon-left .heading-text{padding-left:0.5rem}.accord-section .accord-header .heading .heading-text{display:flex;flex:1 1 auto;align-items:baseline;justify-content:space-between}.accord-section .accord-header .heading .icon{width:18px;height:18px}.accord-section .accord-header.active .icon .plus{display:none}.accord-section .accord-content{max-height:0;overflow:hidden;transition:max-height 0.4s ease-in-out;margin-bottom:0.5rem}.accord-section .accord-content ul{margin:0;padding:0;list-style:none}

@media (min-width: 768px){.footer-links{display:flex;justify-content:space-between;width:100%;max-width:1172px;margin-bottom:2.7rem}}
</style><script>document.addEventListener("DOMContentLoaded",function(){var e=document.getElementsByClassName("accord-header");Array.prototype.forEach.call(e,function(e){e.addEventListener("click",function(){this.classList.toggle("active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"})})})</script><div class="cms"><div class="footer-links">
    <div class="footer-links-section__container">
  <!-- Desktop -->
  <ul class="footer-links-section "> 
    <li>
      <h4 class="footer-links-heading"> Help </h4>
    </li>

      <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/help" rel="nofollow">
      Help
    </a>
  </span>

</li>

      <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/track-my-order" rel="nofollow">
      Where&#39;s My Order?
    </a>
  </span>

</li>

      <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/customer/account/login" rel="nofollow">
      My Orders
    </a>
  </span>

</li>

      <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/delivery_explained" rel="nofollow">
      Delivery Information
    </a>
  </span>

</li>

      <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/help#help-returns-container" rel="dofollow">
      How To Return
    </a>
  </span>

</li>

      <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/size_guide" rel="nofollow">
      Size Guide
    </a>
  </span>

</li>

      <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/help#tab6" rel="nofollow">
      Contact Us
    </a>
  </span>

</li>

      <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/discount-code" rel="nofollow">
      Offers &amp; Promotions
    </a>
  </span>

</li>

  </ul>

  <!-- Mobile -->
  <div class="accord-section">
    <div role="button" class="accord-header">
      <div class="heading">
        <span class="heading-text">
          Help

          <svg viewBox="0 0 11.6 12.1" class="icon">
            <path d="M11.105 6.414H.605v-.5h10.5z" class="minus"></path>
            <path d="M6.1.9v10.5h-.6V.9h.6zM.5 6.4H11v-.5H.5v.5zm5.6-.5h-.6v.5H6v-.5z" class="plus"></path>
          </svg>
        </span>
      </div>
    </div>

    <div class="accord-content">
      <ul>
          <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/help" rel="nofollow">
      Help
    </a>
  </span>

</li>

          <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/track-my-order" rel="nofollow">
      Where&#39;s My Order?
    </a>
  </span>

</li>

          <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/customer/account/login" rel="nofollow">
      My Orders
    </a>
  </span>

</li>

          <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/delivery_explained" rel="nofollow">
      Delivery Information
    </a>
  </span>

</li>

          <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/help#help-returns-container" rel="dofollow">
      How To Return
    </a>
  </span>

</li>

          <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/size_guide" rel="nofollow">
      Size Guide
    </a>
  </span>

</li>

          <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/help#tab6" rel="nofollow">
      Contact Us
    </a>
  </span>

</li>

          <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/discount-code" rel="nofollow">
      Offers &amp; Promotions
    </a>
  </span>

</li>

      </ul>
    </div>
  </div>
</div>

    <div class="footer-links-section__container">
  <!-- Desktop -->
  <ul class="footer-links-section "> 
    <li>
      <h4 class="footer-links-heading"> delivery options </h4>
    </li>

      <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/vip-pass-1-year-unlimited-uk-next-day-delivery" rel="dofollow">
      Unlimited UK Next Day Delivery
    </a>
  </span>

    <span class="link-info">Â£7.99 (was Â£9.99) / year delivery</span>
</li>

      <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/delivery_explained" rel="nofollow">
      UK Next Day
    </a>
  </span>

    <span class="link-info">Â£5.99</span>
</li>

      <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/delivery_explained" rel="nofollow">
      UK Standard
    </a>
  </span>

    <span class="link-info">Â£3.99</span>
</li>

      <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/delivery_explained" rel="nofollow">
      UK Click &amp; Collect
    </a>
  </span>

    <span class="link-info">Â£3.99</span>
</li>

      <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/delivery_explained" rel="dofollow">
      Saturday Morning delivery
    </a>
  </span>

    <span class="link-info">Â£6.99</span>
</li>

      <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/delivery_explained" rel="nofollow">
      UK Sunday
    </a>
  </span>

    <span class="link-info">Â£6.99</span>
</li>

  </ul>

  <!-- Mobile -->
  <div class="accord-section">
    <div role="button" class="accord-header">
      <div class="heading">
        <span class="heading-text">
          delivery options

          <svg viewBox="0 0 11.6 12.1" class="icon">
            <path d="M11.105 6.414H.605v-.5h10.5z" class="minus"></path>
            <path d="M6.1.9v10.5h-.6V.9h.6zM.5 6.4H11v-.5H.5v.5zm5.6-.5h-.6v.5H6v-.5z" class="plus"></path>
          </svg>
        </span>
      </div>
    </div>

    <div class="accord-content">
      <ul>
          <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/vip-pass-1-year-unlimited-uk-next-day-delivery" rel="dofollow">
      Unlimited UK Next Day Delivery
    </a>
  </span>

    <span class="link-info">Â£7.99 (was Â£9.99) / year delivery</span>
</li>

          <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/delivery_explained" rel="nofollow">
      UK Next Day
    </a>
  </span>

    <span class="link-info">Â£5.99</span>
</li>

          <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/delivery_explained" rel="nofollow">
      UK Standard
    </a>
  </span>

    <span class="link-info">Â£3.99</span>
</li>

          <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/delivery_explained" rel="nofollow">
      UK Click &amp; Collect
    </a>
  </span>

    <span class="link-info">Â£3.99</span>
</li>

          <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/delivery_explained" rel="dofollow">
      Saturday Morning delivery
    </a>
  </span>

    <span class="link-info">Â£6.99</span>
</li>

          <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/delivery_explained" rel="nofollow">
      UK Sunday
    </a>
  </span>

    <span class="link-info">Â£6.99</span>
</li>

      </ul>
    </div>
  </div>
</div>

    <div class="footer-links-section__container">
  <!-- Desktop -->
  <ul class="footer-links-section "> 
    <li>
      <h4 class="footer-links-heading"> about us </h4>
    </li>

      <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/about" rel="dofollow">
      About Us
    </a>
  </span>

</li>

      <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/affiliates" rel="dofollow">
      Affiliates
    </a>
  </span>

</li>

      <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/csr" rel="dofollow">
      Corporate Social
    </a>
  </span>

</li>

      <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/terms-of-sale" rel="nofollow">
      Terms Of Sale
    </a>
  </span>

</li>

      <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/catalog/seo_sitemap/category" rel="dofollow">
      Sitemap
    </a>
  </span>

</li>

      <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/promotions-terms" rel="nofollow">
      Promotions Terms
    </a>
  </span>

</li>

      <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/student-discount" rel="dofollow">
      Student Discount
    </a>
  </span>

</li>

      <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/refer-a-friend" rel="dofollow">
      Refer a Friend
    </a>
  </span>

</li>

      <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/babezine" rel="dofollow">
      Babezine
    </a>
  </span>

</li>

      <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided-careers.com" rel="dofollow">
      Careers
    </a>
  </span>

</li>

      <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/media-statement" rel="dofollow">
      Media Statement
    </a>
  </span>

</li>

      <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.mennace.com/uk" rel="nofollow">
      Mennace - Menswear
    </a>
  </span>

</li>

  </ul>

  <!-- Mobile -->
  <div class="accord-section">
    <div role="button" class="accord-header">
      <div class="heading">
        <span class="heading-text">
          about us

          <svg viewBox="0 0 11.6 12.1" class="icon">
            <path d="M11.105 6.414H.605v-.5h10.5z" class="minus"></path>
            <path d="M6.1.9v10.5h-.6V.9h.6zM.5 6.4H11v-.5H.5v.5zm5.6-.5h-.6v.5H6v-.5z" class="plus"></path>
          </svg>
        </span>
      </div>
    </div>

    <div class="accord-content">
      <ul>
          <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/about" rel="dofollow">
      About Us
    </a>
  </span>

</li>

          <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/affiliates" rel="dofollow">
      Affiliates
    </a>
  </span>

</li>

          <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/csr" rel="dofollow">
      Corporate Social
    </a>
  </span>

</li>

          <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/terms-of-sale" rel="nofollow">
      Terms Of Sale
    </a>
  </span>

</li>

          <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/catalog/seo_sitemap/category" rel="dofollow">
      Sitemap
    </a>
  </span>

</li>

          <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/promotions-terms" rel="nofollow">
      Promotions Terms
    </a>
  </span>

</li>

          <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/student-discount" rel="dofollow">
      Student Discount
    </a>
  </span>

</li>

          <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/refer-a-friend" rel="dofollow">
      Refer a Friend
    </a>
  </span>

</li>

          <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/babezine" rel="dofollow">
      Babezine
    </a>
  </span>

</li>

          <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided-careers.com" rel="dofollow">
      Careers
    </a>
  </span>

</li>

          <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.missguided.co.uk/media-statement" rel="dofollow">
      Media Statement
    </a>
  </span>

</li>

          <li class="footer-links-link">
  <span class="link-span">
    <a class="link" href="https://www.mennace.com/uk" rel="nofollow">
      Mennace - Menswear
    </a>
  </span>

</li>

      </ul>
    </div>
  </div>
</div>

</div>
</div>
<div class="footer__links-legal">
  <a href="https://www.missguided.co.uk/privacy-notices">Privacy Notice</a>
  <span class="legal__links-separator">::</span>
  <a href="https://www.missguided.co.uk/terms-of-use">Terms of Use</a>
  <span class="legal__links-separator">::</span>
  <a href="https://www.missguided.co.uk/cookies-policy">Cookies Policy</a>
</div>
<ul class="follow-us__list">
    <li class="follow-us__item">
        <a class="follow-us__link follow-us__link--facebook event__link-social-media" data-link-social-media="Facebook" href="https://www.facebook.com/missguidedcouk" target="_blank">
            <svg class="icon icon--facebook">
                <use xlink:href="#icon-facebook"></use>
            </svg>
        </a>
    </li>
    <li class="follow-us__item">
        <a class="follow-us__link follow-us__link--twitter event__link-social-media" data-link-social-media="Twitter" href="https://twitter.com/missguided" target="_blank">
            <svg class="icon icon--twitter">
                <use xlink:href="#icon-twitter"></use>
            </svg>
        </a>
    </li>
    <li class="follow-us__item">
        <a class="follow-us__link follow-us__instagram event__link-social-media" data-link-social-media="Instagram" href="https://instagram.com/missguided" target="_blank">
            <svg class="icon icon--instagram">
                <use xlink:href="#icon-instagram"></use>
            </svg>
        </a>
    </li>
    <li class="follow-us__item">
        <a class="follow-us__link follow-us__link--snapchat event__link-social-media" data-link-social-media="Snapchat" href="https://www.snapchat.com/add/missguidedsnaps" target="_blank">
            <svg class="icon icon--snapchat">
                <use xlink:href="#icon-snapchat"></use>
            </svg>
        </a>
    </li>
    <li class="follow-us__item">
        <a class="follow-us__link follow-us__link--spotify event__link-social-media" data-link-social-media="Spotify" href="https://open.spotify.com/user/missguidedmusic" target="_blank">
            <svg class="icon icon--spotify">
                <use xlink:href="#icon-spotify"></use>
            </svg>
        </a>
    </li>
</ul>
<!--ends follow-us__list-->                        <link rel="stylesheet" href="https://use.typekit.net/auk4ild.css"/>
            <address class="copyright">
                Â©  Missguided ltd // Official Babe Uniform            </address>
        </div>
    </div>
</footer>
</div>


<div class="modal-overlay js-modal-overlay"></div>
<div class="modal-wrap js-modal-wrap">
    <div class="modal-wrap__inner js-modal-wrap__inner">
        <div class="modal">
            <!-- Modal content is injected here -->
        </div>
    </div>
</div>
<!-- webpack files injected here -->

<!-- include styles for modules etc before JS -->
<link media="all" rel="stylesheet" href="https://static.missguided.co.uk/js/mgresponsive/webpack/dist/modules.d61764b5efe3e0519f06.css"/>
  <csi id="struck-pixel-user-js" rel="struck.pixel.user.js" class="csi" data-storage-type="session" data-csi-tag="account" data-flash="0"></csi>

<script type="text/javascript" src="https://static.missguided.co.uk/js/mgresponsive/core-c56769e7a9.min.js"></script>
<script type="text/javascript" src="https://static.missguided.co.uk/skin/frontend/mgresponsive/default/js/slick-theme.min.js"></script>


<script type="text/javascript">
//<![CDATA[
Mage.Cookies.path     = '/';
Mage.Cookies.domain   = '.www.missguided.co.uk';
//]]>
</script>
<script>
    var mgAft = ["utm_source","utm_medium"];
    var mgPre = 'mga_';
</script>
<script type="text/javascript">
//<![CDATA[
    if (typeof MX_V == 'undefined') {
        MX_V = {}
    }
    MX_V.enabled = 1;
    MX_V.action_name = 'cms_index_index';
    MX_V.url = 'https://www.missguided.co.uk/varnish/csi/index';
    MX_V.id = undefined;
    MX_V.category = undefined;
//]]>
</script>
            <script type="text/javascript">//<![CDATA[
        var Translator = new Translate({"Please enter a valid phone number. For example (123) 456-7890 or 123-456-7890.":"Please enter a valid phone number. For example 01234 567890,  (123) 456-7890 or 123-456-7890.","Please enter a valid email address. For example johndoe@domain.com.":"Enter a valid email address","Please make sure your passwords match.":"Passwords must match","Please enter a valid zip code. For example 90602 or 90602-1234.":"Please enter a valid postcode or zip. For example AB1 1AB, 90602 or 90602-1234.","Please enter a valid zip code.":"Please enter a valid postcode or zip.","Please enter a valid $ amount. For example $100.00.":"Please enter a valid \u00a3 amount. For example \u00a3100.00.","Please select State\/Province.":"Please select County\/State.","percentage_off_text":"%s&#37; off","Insufficient Information":"Invalid Postcode","error_ajax-cc":"There has been an error completing your request, please try again.","error_p24_init":"An error occured. Please try again later. If the problem persists, choose another payment method"});
        //]]></script>
<script type="text/javascript">
    //<![CDATA[
    var MAGE_STORE_CODE = 'default';
    //]]>
</script>

<script src="https://js.afterpay.com/afterpay-1.x.js" async=""></script>
<script type="text/javascript">
                            LocalStorage.init('_browser_storage_product_viewed', 1, 10);
            </script>
<script type="text/javascript">
    var locale = 'en_GB';
</script>
                <script type="application/ld+json">
            {
    "name": "Missguided",
    "url": "https:\/\/www.missguided.co.uk\/",
    "sameAs": [
        "https:\/\/www.facebook.com\/Missguidedcouk",
        "https:\/\/twitter.com\/missguided",
        "https:\/\/instagram.com\/missguided",
        "https:\/\/www.youtube.com\/user\/MISSGUIDEDTV",
        "https:\/\/www.pinterest.com\/missguidedcouk",
        "http:\/\/missguidedpics.tumblr.com",
        "https:\/\/plus.google.com\/+missguided\/posts"
    ],
    "@context": "http:\/\/schema.org",
    "@type": "Organization"
}        </script>
    <script type="text/javascript">
        window.dataLayer = window.dataLayer || [];
        dataLayerBase = [{
            'missguided_currency': 'GBP',
            'missguided_theme': 'd',
            'missguided_page_type': 'main'
        }];

        function mergeLayers(newLayer, overwrite) {
            if (window.dataLayer.length == 0) {
                window.dataLayer = newLayer;
            } else {
                // If we already have a dataLayer in place, merge the two dataLayer property sets together
                for (var dataLayerProperty in newLayer[0]) {

                    if (overwrite === false) {
                        // The merge preserves the original data, instead of overriding with the defaults
                        if (newLayer[0].hasOwnProperty(dataLayerProperty) && !window.dataLayer.hasOwnProperty(dataLayerProperty)) {
                            window.dataLayer[0][dataLayerProperty] = newLayer[0][dataLayerProperty];
                        }
                    } else {
                        // The overwrite overrides the original data instead of merging
                        if (newLayer[0].hasOwnProperty(dataLayerProperty)) {
                            window.dataLayer[0][dataLayerProperty] = newLayer[0][dataLayerProperty];
                        }
                    }
                }
            }
        }

        mergeLayers(dataLayerBase, false);
    </script>                <script type="text/javascript">
                    </script>
        <script type="text/javascript">
            //<![CDATA[
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
                j.src= '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-ZCD2');

            var dlCurrencyCode = 'GBP';
            //]]>
        </script>
        
<script type="text/template" id="js-cookie-banner">
    <div class="site-notice  cookie-banner">
        <div class="cookie-banner__wrapper">
            <div class="cookie-banner__text">
                <p>We use cookies to provide the best possible user experience and also to ensure the relevance of Missguided ads you see on other sites. By continuing, you agree to the use of cookies in this way. For more info, click <a href="https://www.missguided.co.uk/cookies-policy">here</a>.</p>            </div>
            <a class="js-cookie-agree cookie-banner__confirm" href="#">
                Accept            </a>
        </div>
    </div>
</script>
    <script type="application/ld+json">
      {
      "@context": "http://schema.org",
      "@type": "WebSite",
      "url": "https://www.missguided.co.uk/",
      "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.missguided.co.uk/catalogsearch/result/?q={search_term_string}",
      "query-input": "required name=search_term_string"
      }
      }
      </script><script type="âapplication/ld+jsonâ">
{ â@contextâ: âhttp://schema.orgâ,
â@typeâ: âOrganizationâ,
ânameâ: âMissguidedâ,
âlegalNameâ : âMissguidedâ,
âurlâ: âhttps://www.missguided.co.ukâ,
âlogoâ: âhttps://www.missguided.co.uk/style-guide/missguided/images/apple-touch-icon.pngâ,
âfoundingDateâ: â2008",
âfoundersâ: [
{
â@typeâ: âPersonâ,
ânameâ: âNitin Passiâ
}],
âaddressâ: {
â@typeâ: âPostalAddressâ,
âstreetAddressâ: â75 Trafford Wharf Roadâ,
âaddressLocalityâ: âTrafford Parkâ,
âaddressRegionâ: âGB-MANâ,
âpostalCodeâ: âM17 1ESâ,
âaddressCountryâ: âGBRâ
},
âcontactPointâ: {
â@typeâ: âContactPointâ,
âcontactTypeâ: âcustomer serviceâ,
âemailâ: âcustomercare@missguided.comâ,
âURLâ: âhttps://www.missguided.co.ukâ
},
âsameAsâ: [
âhttps://www.facebook.com/Missguidedcouk/â,
âhttps://twitter.com/missguided/â,
âhttps://www.instagram.com/missguided/â,
âhttps://www.snapchat.com/add/missguidedsnapsâ,
âhttp://missguidedpics.tumblr.com/â
]}
</script>
  <script type="text/javascript">
    window.MgResponsiveConfig = window.MgResponsiveConfig || {};
    window.MgResponsiveConfig.richRelevance = window.MgResponsiveConfig.richRelevance || {};
    window.MgResponsiveConfig.richRelevance.pageConfig = {
    	regionId: 'united_kingdom',
        pageType: 'homePage',
        apiKey: '7b992d022763be60',
        environmentUrl: 'https://recs.richrelevance.com/rrserver/',
        placements: ['home_page.bottom']
    };
</script>    <script type="text/javascript">
    var MgResponsiveConfig = MgResponsiveConfig || {};
    MgResponsiveConfig.storeBaseUrl = "https:\/\/www.missguided.co.uk\/";
    MgResponsiveConfig.mageStoreCode = 'default';
    MgResponsiveConfig.currencyFormat = {"pattern":"\u00a3%s","precision":2,"requiredPrecision":2,"decimalSymbol":".","groupSymbol":",","groupLength":3,"integerRequired":1};
    MgResponsiveConfig.brand = "missguided";
    MgResponsiveConfig.googleMapApiKey = 'AIzaSyCyFmMkbQW1YXsa7FlY7i6H6GROfqU0JFA';
</script>
        <script>
            //<![CDATA[
            // Set global flag to indicate that FH experimental suggestions are enabled.
            window.isFHSuggestEnabled = true;
                            // Initialize FH search suggestions here.
                initFHAutocomplete('https://query.published.live1.suggest.eu1.fredhopperservices.com/missguided/jscript?scope=%2F%2Fmissguideduk%2Fen_GB');
                        Event.stopObserving('search', 'blur');
            //]]>
        </script>
            <script>
    var MgResponsiveConfig = MgResponsiveConfig || {};
    MgResponsiveConfig.currencyDescription = 'Â£ GBP';
    MgResponsiveConfig.storeRegion = 'United Kingdom';
</script>

            <script>
                //<![CDATA[
                window.switchCurrencyUrl = 'https://www.missguided.co.uk/directory/currency/switch/uenc/aHR0cHM6Ly93d3cubWlzc2d1aWRlZC5jby51ay8,/currency/';
                function changeCurrency(value){
                    if(value){
                        setLocation('https://www.missguided.co.uk/directory/currency/switch/uenc/aHR0cHM6Ly93d3cubWlzc2d1aWRlZC5jby51ay8,/currency/'+value);
                    }
                }
                //]]>
            </script>
<script>
    window.MgResponsiveConfig = window.MgResponsiveConfig || {};
    window.MgResponsiveConfig.storeSwitcherUrls = {"au":"\/varnish\/storeswitcher?u=https%3A%2F%2Fwww.missguidedau.com%2F%3F___store%3Dau_en%26___from_store%3Ddefault","de":"\/varnish\/storeswitcher?u=https%3A%2F%2Fwww.missguided.com%2Fde%2F%3F___store%3Dde_de%26___from_store%3Ddefault","eu":"\/varnish\/storeswitcher?u=https%3A%2F%2Fwww.missguided.eu%2F%3F___store%3Deu_en%26___from_store%3Ddefault","fr":"\/varnish\/storeswitcher?u=https%3A%2F%2Fwww.missguidedfr.fr%2F%3F___store%3Dfr_fr%26___from_store%3Ddefault","ie":"\/varnish\/storeswitcher?u=https%3A%2F%2Fwww.missguided.com%2Fie%2F%3F___store%3Die_en%26___from_store%3Ddefault","pl":"\/varnish\/storeswitcher?u=https%3A%2F%2Fwww.missguided.com%2Fpl%2F%3F___store%3Dpl_pl%26___from_store%3Ddefault","us":"\/varnish\/storeswitcher?u=https%3A%2F%2Fwww.missguidedus.com%2F%3F___store%3Dus_en%26___from_store%3Ddefault"}</script>

<script>
    //Set LocalStorage for the type of page.
    localStorage.setItem('prevPageType', localStorage.getItem('pageType'));
    localStorage.setItem('pageType', 'cms_index_index');
</script>
<script>
$j(function(){
    MgResponsive.Header.init();
});
</script>
  <script>
    (function ($) {
      jQuery(document).ready(function () {
        jQuery(".info-strip").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: false,
          adaptiveHeight: true,
          fade: true,
          cssEase: "linear"
        });
      });
    })(jQuery);
  </script><script>
    window.canUseSecondaryCookie = "";
</script><script>
    var hashExclamationFind = window.location.href.includes("#!") || window.location.href.includes("#%21");
    if (hashExclamationFind) {
        document.querySelector("meta[name='robots']").setAttribute('content', 'NOINDEX,NOFOLLOW');
    }
</script><script type="text/javascript" async="">
    //<![CDATA[
    (function(document, window, undefined) {
        var queryParams = window.location.search.toQueryParams();
        if (queryParams !== undefined && queryParams.aff_sub !== undefined) {
            document.cookie = 'mg_studentbeans_tracking_id=' + queryParams.aff_sub
                    + '; path=/';
        }
    })(document, window);
    //]]>
</script>

<script>
    //this is accessed via the webpack build in order to dynamically set the public path to include the Magento BaseUrl
    window.webpackPublicPath = "https://static.missguided.co.uk/js/mgresponsive/webpack/dist/";
</script>

<script type="text/javascript" src="https://static.missguided.co.uk/js/mgresponsive/webpack/dist/polyfill.bundle.29b2072644ffbb66e608.js" defer=""></script>
<script type="text/javascript" src="https://static.missguided.co.uk/js/mgresponsive/webpack/dist/main.bundle.0714542b25a1af45996f.js" defer=""></script>
<script type="text/javascript" src="https://static.missguided.co.uk/js/mgresponsive/webpack/dist/modules.bundle.0491de7543df925273eb.js" defer=""></script>
<script type="text/javascript" src="https://static.missguided.co.uk/js/mgresponsive/webpack/dist/richRelevance.bundle.f6a502b0520532338f2a.js" defer=""></script>
<script type="text/javascript" src="https://static.missguided.co.uk/skin/frontend/mgresponsive/default/js/scripts-cd5ed83546.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.0.1/lazysizes.min.js" async=""></script><script src="https://static.missguided.co.uk/media/upload/js/amp-cms-sdk.js" type="text/javascript"></script>
<script>
  (function($) {
    async function handleErrors(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return await response.json();
    }

    $(window).load(async function() {
      try {
        var response = await fetch(
          'https://c1.adis.ws/cms/content/query?query=%7B%22sys.iri%22%3A%22http%3A%2F%2Fcontent.cms.amplience.com%2Fa0141412-787d-485f-8830-c3f6257a5f98%22%7D&scope=tree&store=missguided'
        );
        var data = await handleErrors(response);
        var inlineResult = amp.inlineContent(data);

        if (inlineResult[0] && inlineResult[0].homepageHero) {
          $('#homeSlider').slick(
            'slickAdd',
            inlineResult[0].homepageHero[0].richText,
            0,
            true
          );
        }
      } catch (err) {
        console.log(err);
      }
    });
  })(jQuery);
</script>


<script type="text/javascript">
  ! function (e) {
      e(document).ready(function () {
          e("#homeSlider").slick({
              infinite: !0,
              adaptiveHeight: !1,
              autoplay: true,
              autoplaySpeed: 5e3,
              pauseOnHover: !1,
              dots: !0,
              slide: ".fullwidth",
              slidesToShow: 1,
              slidesToScroll: 1,
              responsive: [{
                  breakpoint: 1e3,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                  }
              }, {
                  breakpoint: 768,
                  settings: "unslick"
              }]
          }), e(".slick-three").slick({
              infinite: !0,
              adaptiveHeight: !1,
              slide: ":not(.blocker)",
              dots: !1,
              slidesToShow: 3,
              slidesToScroll: 1,
              arrows: !0,
              centerPadding: "0",
              responsive: [{
                  breakpoint: 768,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                  },
                  centerPadding: "50",
                  variableWidth: !0
              }]
          })
      }), e(window).on("resize orientationchange", function () {
          e("#homeSlider").slick("resize"), e(".slick-three").slick("resize")
      }), e(window).scroll(_.debounce(function () {
          if (e(window).width() < 767) {
              var i = e(this).scrollTop();
              console.log(i), i > e(".slick-three").offset().top - 400 && (e(
                  ".slick-three .slick-slide").css("animation",
                  "swipe 1200ms ease-in-out forwards"), setTimeout(function () {
                  e(".blocker").css("display", "none")
              }, 1600))
          }
      }, 100))
  }(jQuery);
</script><script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam-cell.nr-data.net","licenseKey":"39260d23cf","applicationID":"24832197","transactionName":"ZFNRMkYHDRVUBxULV10ZcgVADwwIGgcMERdaWFcDTEkKCFEBGQ==","queueTime":0,"applicationTime":533,"atts":"SBRSRA4dHhs=","errorBeacon":"bam-cell.nr-data.net","agent":""}</script>
</body></html>