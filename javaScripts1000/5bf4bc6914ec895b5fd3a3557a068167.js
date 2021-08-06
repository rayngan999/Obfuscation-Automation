(self.AMP=self.AMP||[]).push({n:"amp-intersection-observer-polyfill",ev:"0.1",l:true,v:"2107200040000",m:0,f:function(AMP,_){"use strict";function B(c){for(var f=["object"==typeof globalThis&&globalThis,c,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],e=0;e<f.length;++e){var k=f[e];if(k&&k.Math==Math)return}(function(){throw Error("Cannot find global object")})()}B(this);function F(){(function(){function c(a){try{return a.defaultView&&a.defaultView.frameElement||null}catch(b){return null}}function f(a){this.time=a.time;this.target=a.target;this.rootBounds=E(a.rootBounds);this.boundingClientRect=E(a.boundingClientRect);this.intersectionRect=E(a.intersectionRect||z());this.isIntersecting=!!a.intersectionRect;var b=this.boundingClientRect,d=b.width*b.height,g=this.intersectionRect,h=g.width*g.height;this.intersectionRatio=d?Number((h/d).toFixed(4)):this.isIntersecting?1:0}function e(a,b){b=b||{};if("function"!=typeof a)throw Error("callback must be a function");if(b.root&&1!=b.root.nodeType&&9!=b.root.nodeType)throw Error("root must be a Document or Element");this._checkForIntersections=l(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT);this._callback=a;this._observationTargets=[];this._queuedEntries=[];this._rootMarginValues=this._parseRootMargin(b.rootMargin);this.thresholds=this._initThresholds(b.threshold);this.root=b.root||null;this.rootMargin=this._rootMarginValues.map((function(d){return d.value+d.unit})).join(" ");this._monitoringDocuments=[];this._monitoringUnsubscribes=[]}function k(){return window.performance&&performance.now&&performance.now()}function l(a,b){var d=null;return function(){d||(d=setTimeout((function(){a();d=null}),b))}}function p(a,b,d,g){"function"==typeof a.addEventListener?a.addEventListener(b,d,g||!1):"function"==typeof a.attachEvent&&a.attachEvent("on"+b,d)}function q(a,b,d,g){"function"==typeof a.removeEventListener?a.removeEventListener(b,d,g||!1):"function"==typeof a.detatchEvent&&a.detatchEvent("on"+b,d)}function t(a,b){var d=Math.max(a.top,b.top),g=Math.min(a.bottom,b.bottom),h=Math.max(a.left,b.left),m=Math.min(a.right,b.right),n=m-h,u=g-d;return 0<=n&&0<=u&&{top:d,bottom:g,left:h,right:m,width:n,height:u}||null}function r(a){try{var b=a.getBoundingClientRect()}catch(d){}if(!b)return z();b.width&&b.height||(b={top:b.top,right:b.right,bottom:b.bottom,left:b.left,width:b.right-b.left,height:b.bottom-b.top});return b}function z(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}function E(a){return!a||"x"in a?a:{top:a.top,y:a.top,bottom:a.bottom,left:a.left,x:a.left,right:a.right,width:a.width,height:a.height}}function I(a,b){var d=b.top-a.top,g=b.left-a.left;return{top:d,left:g,height:b.height,width:b.width,bottom:d+b.height,right:g+b.width}}function J(a,b){for(var d=b;d;){if(d==a)return!0;d=C(d)}return!1}function C(a){var b=a.parentNode;if(9==a.nodeType&&a!=v)return c(a);b&&b.assignedSlot&&(b=b.assignedSlot.parentNode);return b&&11==b.nodeType&&b.host?b.host:b}function K(a){return a&&9===a.nodeType}if("object"===typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return 0<this.intersectionRatio}});else{var v=function(a){for(var b=a,d=c(b);d;)b=d.ownerDocument,d=c(b);return b}(window.document),A=[],w=null,x=null;e.prototype.THROTTLE_TIMEOUT=100;e.prototype.POLL_INTERVAL=null;e.prototype.USE_MUTATION_OBSERVER=!0;e._setupCrossOriginUpdater=function(){w||(w=function(a,b){x=a&&b?I(a,b):z();A.forEach((function(d){d._checkForIntersections()}))});return w};e._resetCrossOriginUpdater=function(){x=w=null};e.prototype.observe=function(a){if(!this._observationTargets.some((function(b){return b.element==a}))){if(!a||1!=a.nodeType)throw Error("target must be an Element");this._registerInstance();this._observationTargets.push({element:a,entry:null});this._monitorIntersections(a.ownerDocument);this._checkForIntersections()}};e.prototype.unobserve=function(a){this._observationTargets=this._observationTargets.filter((function(b){return b.element!=a}));this._unmonitorIntersections(a.ownerDocument);0==this._observationTargets.length&&this._unregisterInstance()};e.prototype.disconnect=function(){this._observationTargets=[];this._unmonitorAllIntersections();this._unregisterInstance()};e.prototype.takeRecords=function(){var a=this._queuedEntries.slice();this._queuedEntries=[];return a};e.prototype._initThresholds=function(a){var b=a||[0];Array.isArray(b)||(b=[b]);return b.sort().filter((function(d,g,h){if("number"!=typeof d||isNaN(d)||0>d||1<d)throw Error("threshold must be a number between 0 and 1 inclusively");return d!==h[g-1]}))};e.prototype._parseRootMargin=function(a){var b=(a||"0px").split(/\s+/).map((function(d){var g=/^(-?\d*\.?\d+)(px|%)$/.exec(d);if(!g)throw Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(g[1]),unit:g[2]}}));b[1]=b[1]||b[0];b[2]=b[2]||b[0];b[3]=b[3]||b[1];return b};e.prototype._monitorIntersections=function(a){var b=a.defaultView;if(b&&-1==this._monitoringDocuments.indexOf(a)){var d=this._checkForIntersections,g=null,h=null;this.POLL_INTERVAL?g=b.setInterval(d,this.POLL_INTERVAL):(p(b,"resize",d,!0),p(a,"scroll",d,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in b&&(h=new b.MutationObserver(d),h.observe(a,{attributes:!0,childList:!0,characterData:!0,subtree:!0})));this._monitoringDocuments.push(a);this._monitoringUnsubscribes.push((function(){var n=a.defaultView;n&&(g&&n.clearInterval(g),q(n,"resize",d,!0));q(a,"scroll",d,!0);h&&h.disconnect()}));if(a!=(this.root&&(this.root.ownerDocument||this.root)||v)){var m=c(a);m&&this._monitorIntersections(m.ownerDocument)}}};e.prototype._unmonitorIntersections=function(a){var b=this._monitoringDocuments.indexOf(a);if(-1!=b){var d=this.root&&(this.root.ownerDocument||this.root)||v;if(!this._observationTargets.some((function(h){var m=h.element.ownerDocument;if(m==a)return!0;for(;m&&m!=d;)if(m=(h=c(m))&&h.ownerDocument,m==a)return!0;return!1}))){var g=this._monitoringUnsubscribes[b];this._monitoringDocuments.splice(b,1);this._monitoringUnsubscribes.splice(b,1);g();a!=d&&(b=c(a))&&this._unmonitorIntersections(b.ownerDocument)}}};e.prototype._unmonitorAllIntersections=function(){var a=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0;for(var b=this._monitoringUnsubscribes.length=0;b<a.length;b++)a[b]()};e.prototype._checkForIntersections=function(){if(this.root||!w||x){var a=this._rootIsInDom(),b=a?this._getRootRect():z();this._observationTargets.forEach((function(d){var g=d.element,h=r(g),m=this._rootContainsTarget(g),n=d.entry,u=a&&m&&this._computeTargetAndRootIntersection(g,h,b),y=null;if(!this._rootContainsTarget(g))y=z();else if(!w||this.root)y=b;var D=d.entry=new f({time:k(),target:g,boundingClientRect:h,rootBounds:y,intersectionRect:u});n?a&&m?this._hasCrossedThreshold(n,D)&&this._queuedEntries.push(D):n&&n.isIntersecting&&this._queuedEntries.push(D):this._queuedEntries.push(D)}),this);this._queuedEntries.length&&this._callback(this.takeRecords(),this)}};e.prototype._computeTargetAndRootIntersection=function(a,b,d){if("none"!=window.getComputedStyle(a).display){a=C(a);for(var g=!1;!g&&a;){var h=null,m=1==a.nodeType?window.getComputedStyle(a):{};if("none"==m.display)return null;if(a==this.root||9==a.nodeType)if(g=!0,a==this.root||a==v)w&&!this.root?!x||0==x.width&&0==x.height?b=h=a=null:h=x:h=d;else{var n=(a=C(a))&&r(a),u=a&&this._computeTargetAndRootIntersection(a,n,d);n&&u?h=I(n,u):b=a=null}else{var y=a.ownerDocument;a!=y.body&&a!=y.documentElement&&"visible"!=m.overflow&&(h=r(a))}h&&(b=t(h,b));if(!b)break;a=a&&C(a)}return b}};e.prototype._getRootRect=function(){if(this.root&&!K(this.root))var a=r(this.root);else{a=K(this.root)?this.root:v;var b=a.documentElement;a=a.body;a={top:0,left:0,right:b.clientWidth||a.clientWidth,width:b.clientWidth||a.clientWidth,bottom:b.clientHeight||a.clientHeight,height:b.clientHeight||a.clientHeight}}return this._expandRectByRootMargin(a)};e.prototype._expandRectByRootMargin=function(a){var b=this._rootMarginValues.map((function(g,h){return"px"==g.unit?g.value:g.value*(h%2?a.width:a.height)/100})),d={top:a.top-b[0],right:a.right+b[1],bottom:a.bottom+b[2],left:a.left-b[3]};d.width=d.right-d.left;d.height=d.bottom-d.top;return d};e.prototype._hasCrossedThreshold=function(a,b){var d=a&&a.isIntersecting?a.intersectionRatio||0:-1,g=b.isIntersecting?b.intersectionRatio||0:-1;if(d!==g)for(a=0;a<this.thresholds.length;a++)if(b=this.thresholds[a],b==d||b==g||b<d!==b<g)return!0};e.prototype._rootIsInDom=function(){return!this.root||J(v,this.root)};e.prototype._rootContainsTarget=function(a){var b=this.root&&(this.root.ownerDocument||this.root)||v;return J(b,a)&&(!this.root||b==a.ownerDocument)};e.prototype._registerInstance=function(){0>A.indexOf(this)&&A.push(this)};e.prototype._unregisterInstance=function(){var a=A.indexOf(this);-1!=a&&A.splice(a,1)};window.IntersectionObserver=e;window.IntersectionObserverEntry=f}})()}var G=self.AMP_CONFIG||{},H=("string"==typeof G.cdnProxyRegex?new RegExp(G.cdnProxyRegex):G.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function L(c){if(self.document&&self.document.head&&(!self.location||!H.test(self.location.origin))){var f=self.document.head.querySelector('meta[name="'+c+'"]');f&&f.getAttribute("content")}}G.cdnUrl||L("runtime-host");G.geoApiUrl||L("amp-geo-api");var M=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function N(c,f){var e=f=void 0===f?"":f;try{return decodeURIComponent(c)}catch(k){return e}}function O(c){var f=Object.create(null);if(!c)return f;for(var e;e=M.exec(c);){var k=N(e[1],e[1]);e=e[2]?N(e[2].replace(/\+/g," "),e[2]):"";f[k]=e}return f}var P="";function Q(c){c=c||self;if(c.__AMP_MODE)var f=c.__AMP_MODE;else{var e=O(c.location.originalHash||c.location.hash);var k=O(c.location.originalHash||c.location.hash);k=!(!["1","actions","amp","amp4ads","amp4email"].includes(k.development)&&!c.AMP_DEV_MODE);var l=e["amp-geo"];e=e.log;P||(P=(null==(f=c.AMP_CONFIG)?void 0:f.v)||"012107200040000");f=c.__AMP_MODE={localDev:!1,development:k,esm:!1,geoOverride:l,minified:!0,test:!1,log:e,version:"2107200040000",rtvVersion:P}}return f}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};
/* https://mths.be/cssescape v1.5.1 by @mathias | MIT license */new Set(["c","v","a","ad"]);var R;function S(c){c=c.__AMP_TOP||(c.__AMP_TOP=c);return T(c,"iframeMessagingClient")?U(c,"iframeMessagingClient"):null}function U(c,f){T(c,f);c=V(c)[f];c.obj||(c.obj=new c.ctor(c.context),c.context=null,c.resolve&&c.resolve(c.obj));return c.obj}function V(c){var f=c.__AMP_SERVICES;f||(f=c.__AMP_SERVICES={});return f}function T(c,f){c=c.__AMP_SERVICES&&c.__AMP_SERVICES[f];return!(!c||!c.ctor)}function W(c,f,e,k){return{left:c,top:f,width:e,height:k,bottom:f+k,right:c+e,x:c,y:f}}function X(c){if(c!=c.top&&"inabox"==Q(c).runtime){var f=S(c),e=c.IntersectionObserver._setupCrossOriginUpdater;if(f&&e){var k=e();f.makeRequest("send-positions","position",(function(l){var p=l.targetRect,q=l.viewportRect;l=Math.max(p.top,0);var t=Math.max(p.left,0),r=Math.min(p.bottom,q.height);q=Math.min(p.right,q.width);l=l>r||t>q?W(0,0,0,0):W(t,l,q-t,r-l);k(p,l)}))}}}function Y(c,f){return function(e,k){var l;return 9===(null==k?void 0:null==(l=k.root)?void 0:l.nodeType)?new f(e,k):new c(e,k)}}function Z(c,f){var e=c.IntersectionObserver._stub;if(e){var k=c.IntersectionObserver._native;delete c.IntersectionObserver;delete c.IntersectionObserverEntry;f();var l=c.IntersectionObserver;k&&(c.IntersectionObserver=Y(k,l));var p=e._upgraders.slice(0);R||(R=Promise.resolve(void 0));var q=R;var t=function(r){q.then((function(){return r(l)}))};p.forEach(t);e._upgraders={push:t}}else f()}function aa(c){Z(c,(function(){F();X(c)}));return{}}(function(){var c=window,f=c=c.__AMP_TOP||(c.__AMP_TOP=c),e=c,k=V(f),l=k["amp-intersection-observer-polyfill"];l||(l=k["amp-intersection-observer-polyfill"]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1});l.ctor||(l.ctor=aa,l.context=e,l.sharedInstance=!1,l.resolve&&U(f,"amp-intersection-observer-polyfill"));U(c,"amp-intersection-observer-polyfill")})(self.AMP)}});//# sourceMappingURL=amp-intersection-observer-polyfill-0.1.js.map