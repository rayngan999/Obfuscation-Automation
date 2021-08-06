!function(){"use strict";if("object"==typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return 0<this.intersectionRatio}});else{var w=function(){for(var t=window.document,e=h(t);e;)e=h(t=e.ownerDocument);return t}(),n=[],y=null,I=null;t.prototype.THROTTLE_TIMEOUT=100,t.prototype.POLL_INTERVAL=null,t.prototype.USE_MUTATION_OBSERVER=!0,t._setupCrossOriginUpdater=function(){return y=y||function(t,e){I=t&&e?T(t,e):l(),n.forEach(function(t){t._checkForIntersections()})}},t._resetCrossOriginUpdater=function(){I=y=null},t.prototype.observe=function(e){if(!this._observationTargets.some(function(t){return t.element==e})){if(!e||1!=e.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:e,entry:null}),this._monitorIntersections(e.ownerDocument),this._checkForIntersections()}},t.prototype.unobserve=function(e){this._observationTargets=this._observationTargets.filter(function(t){return t.element!=e}),this._unmonitorIntersections(e.ownerDocument),0==this._observationTargets.length&&this._unregisterInstance()},t.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},t.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},t.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||1<t)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]})},t.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map(function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}});return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},t.prototype._monitorIntersections=function(e){var t=e.defaultView;if(t&&-1==this._monitoringDocuments.indexOf(e)){var n=this._checkForIntersections,o=null,i=null;this.POLL_INTERVAL?o=t.setInterval(n,this.POLL_INTERVAL):(c(t,"resize",n,!0),c(e,"scroll",n,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in t&&(i=new t.MutationObserver(n)).observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this._monitoringDocuments.push(e),this._monitoringUnsubscribes.push(function(){var t=e.defaultView;t&&(o&&t.clearInterval(o),u(t,"resize",n,!0)),u(e,"scroll",n,!0),i&&i.disconnect()});var r=this.root&&(this.root.ownerDocument||this.root)||w;if(e!=r){var s=h(e);s&&this._monitorIntersections(s.ownerDocument)}}},t.prototype._unmonitorIntersections=function(o){var t=this._monitoringDocuments.indexOf(o);if(-1!=t){var i=this.root&&(this.root.ownerDocument||this.root)||w;if(!this._observationTargets.some(function(t){var e=t.element.ownerDocument;if(e==o)return!0;for(;e&&e!=i;){var n=h(e);if((e=n&&n.ownerDocument)==o)return!0}return!1})){var e=this._monitoringUnsubscribes[t];if(this._monitoringDocuments.splice(t,1),this._monitoringUnsubscribes.splice(t,1),e(),o!=i){var n=h(o);n&&this._unmonitorIntersections(n.ownerDocument)}}}},t.prototype._unmonitorAllIntersections=function(){var t=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0;for(var e=this._monitoringUnsubscribes.length=0;e<t.length;e++)t[e]()},t.prototype._checkForIntersections=function(){if(this.root||!y||I){var c=this._rootIsInDom(),u=c?this._getRootRect():l();this._observationTargets.forEach(function(t){var e=t.element,n=E(e),o=this._rootContainsTarget(e),i=t.entry,r=c&&o&&this._computeTargetAndRootIntersection(e,n,u),s=null;this._rootContainsTarget(e)?y&&!this.root||(s=u):s=l();var h=t.entry=new a({time:window.performance&&performance.now&&performance.now(),target:e,boundingClientRect:n,rootBounds:s,intersectionRect:r});i?c&&o?this._hasCrossedThreshold(i,h)&&this._queuedEntries.push(h):i&&i.isIntersecting&&this._queuedEntries.push(h):this._queuedEntries.push(h)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)}},t.prototype._computeTargetAndRootIntersection=function(t,e,n){if("none"!=window.getComputedStyle(t).display){for(var o,i,r,s,h,c,u,a,l=e,f=R(t),p=!1;!p&&f;){var d=null,g=1==f.nodeType?window.getComputedStyle(f):{};if("none"==g.display)return null;if(f==this.root||9==f.nodeType)if(p=!0,f==this.root||f==w)y&&!this.root?!I||0==I.width&&0==I.height?l=d=f=null:d=I:d=n;else{var m=R(f),_=m&&E(m),v=m&&this._computeTargetAndRootIntersection(m,_,n);_&&v?(f=m,d=T(_,v)):l=f=null}else{var b=f.ownerDocument;f!=b.body&&f!=b.documentElement&&"visible"!=g.overflow&&(d=E(f))}if(d&&(o=d,i=l,0,r=Math.max(o.top,i.top),s=Math.min(o.bottom,i.bottom),h=Math.max(o.left,i.left),c=Math.min(o.right,i.right),a=s-r,l=0<=(u=c-h)&&0<=a?{top:r,bottom:s,left:h,right:c,width:u,height:a}:null),!l)break;f=f&&R(f)}return l}},t.prototype._getRootRect=function(){var t;if(this.root&&!i(this.root))t=E(this.root);else{var e=i(this.root)?this.root:w,n=e.documentElement,o=e.body;t={top:0,left:0,right:n.clientWidth||o.clientWidth,width:n.clientWidth||o.clientWidth,bottom:n.clientHeight||o.clientHeight,height:n.clientHeight||o.clientHeight}}return this._expandRectByRootMargin(t)},t.prototype._expandRectByRootMargin=function(n){var t=this._rootMarginValues.map(function(t,e){return"px"==t.unit?t.value:t.value*(e%2?n.width:n.height)/100}),e={top:n.top-t[0],right:n.right+t[1],bottom:n.bottom+t[2],left:n.left-t[3]};return e.width=e.right-e.left,e.height=e.bottom-e.top,e},t.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==o)for(var i=0;i<this.thresholds.length;i++){var r=this.thresholds[i];if(r==n||r==o||r<n!=r<o)return!0}},t.prototype._rootIsInDom=function(){return!this.root||o(w,this.root)},t.prototype._rootContainsTarget=function(t){var e=this.root&&(this.root.ownerDocument||this.root)||w;return o(e,t)&&(!this.root||e==t.ownerDocument)},t.prototype._registerInstance=function(){n.indexOf(this)<0&&n.push(this)},t.prototype._unregisterInstance=function(){var t=n.indexOf(this);-1!=t&&n.splice(t,1)},window.IntersectionObserver=t,window.IntersectionObserverEntry=a}function h(t){try{return t.defaultView&&t.defaultView.frameElement||null}catch(t){return null}}function a(t){this.time=t.time,this.target=t.target,this.rootBounds=r(t.rootBounds),this.boundingClientRect=r(t.boundingClientRect),this.intersectionRect=r(t.intersectionRect||l()),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,o=this.intersectionRect,i=o.width*o.height;this.intersectionRatio=n?Number((i/n).toFixed(4)):this.isIntersecting?1:0}function t(t,e){var n,o,i,r=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(r.root&&1!=r.root.nodeType&&9!=r.root.nodeType)throw new Error("root must be a Document or Element");this._checkForIntersections=(n=this._checkForIntersections.bind(this),o=this.THROTTLE_TIMEOUT,i=null,function(){i=i||setTimeout(function(){n(),i=null},o)}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(r.rootMargin),this.thresholds=this._initThresholds(r.threshold),this.root=r.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}function c(t,e,n,o){"function"==typeof t.addEventListener?t.addEventListener(e,n,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function u(t,e,n,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function E(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):l()}function l(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}function r(t){return!t||"x"in t?t:{top:t.top,y:t.top,bottom:t.bottom,left:t.left,x:t.left,right:t.right,width:t.width,height:t.height}}function T(t,e){var n=e.top-t.top,o=e.left-t.left;return{top:n,left:o,height:e.height,width:e.width,bottom:n+e.height,right:o+e.width}}function o(t,e){for(var n=e;n;){if(n==t)return!0;n=R(n)}return!1}function R(t){var e=t.parentNode;return 9==t.nodeType&&t!=w?h(t):(e&&e.assignedSlot&&(e=e.assignedSlot.parentNode),e&&11==e.nodeType&&e.host?e.host:e)}function i(t){return t&&9===t.nodeType}}();