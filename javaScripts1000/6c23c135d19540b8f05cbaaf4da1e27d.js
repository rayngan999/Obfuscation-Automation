/* Disable minification (remove `.min` from URL path) for more info */

(function(self, undefined) {function Call(t,l){var n=arguments.length>2?arguments[2]:[];if(!1===IsCallable(t))throw new TypeError(Object.prototype.toString.call(t)+"is not a function.");return t.apply(l,n)}function Get(n,t){return n[t]}function HasProperty(n,r){return r in n}function IsCallable(n){return"function"==typeof n}function SameValueNonNumber(e,n){return e===n}function ToInteger(n){var i=Number(n);return isNaN(i)?0:1/i===Infinity||1/i==-Infinity||i===Infinity||i===-Infinity?i:(i<0?-1:1)*Math.floor(Math.abs(i))}function ToLength(n){var t=ToInteger(n);return t<=0?0:Math.min(t,Math.pow(2,53)-1)}function ToObject(e){if(null===e||e===undefined)throw TypeError();return Object(e)}function GetV(t,e){return ToObject(t)[e]}function GetMethod(e,n){var r=GetV(e,n);if(null===r||r===undefined)return undefined;if(!1===IsCallable(r))throw new TypeError("Method not callable: "+n);return r}function Type(e){switch(typeof e){case"undefined":return"undefined";case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"symbol":return"symbol";default:return null===e?"null":"Symbol"in self&&(e instanceof self.Symbol||e.constructor===self.Symbol)?"symbol":"object"}}function OrdinaryToPrimitive(r,t){if("string"===t)var e=["toString","valueOf"];else e=["valueOf","toString"];for(var i=0;i<e.length;++i){var n=e[i],a=Get(r,n);if(IsCallable(a)){var o=Call(a,r);if("object"!==Type(o))return o}}throw new TypeError("Cannot convert to primitive.")}function SameValueZero(n,e){return Type(n)===Type(e)&&("number"===Type(n)?!(!isNaN(n)||!isNaN(e))||(1/n===Infinity&&1/e==-Infinity||(1/n==-Infinity&&1/e===Infinity||n===e)):SameValueNonNumber(n,e))}function ToPrimitive(e){var t=arguments.length>1?arguments[1]:undefined;if("object"===Type(e)){if(arguments.length<2)var i="default";else t===String?i="string":t===Number&&(i="number");var r="function"==typeof self.Symbol&&"symbol"==typeof self.Symbol.toPrimitive?GetMethod(e,self.Symbol.toPrimitive):undefined;if(r!==undefined){var n=Call(r,e,[i]);if("object"!==Type(n))return n;throw new TypeError("Cannot convert exotic object to primitive.")}return"default"===i&&(i="number"),OrdinaryToPrimitive(e,i)}return e}function ToString(t){switch(Type(t)){case"symbol":throw new TypeError("Cannot convert a Symbol value to a string");case"object":return ToString(ToPrimitive(t,String));default:return String(t)}}if (!("document"in self
)) {"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&(self.HTMLDocument?self.Document=self.HTMLDocument:(self.Document=self.HTMLDocument=document.constructor=new Function("return function Document() {}")(),self.Document.prototype=document));}if (!("document"in self&&"currentScript"in self.document
)) {!function(t){var r=t.getElementsByTagName("script");"currentScript"in t||Object.defineProperty(t,"currentScript",{get:function(){try{throw new Error}catch(n){var t=0,e=(/.*at [^(]*\((.*):.+:.+\)$/gi.exec(n.stack)||[!1])[1];for(t=0;t<r.length;t++)if(r[t].src==e||"interactive"==r[t].readyState)return r[t];return null}}})}(document);}if (!("Element"in self&&"HTMLElement"in self
)) {!function(){function e(){return l--||clearTimeout(t),!(!document.body||document.body.prototype||!/(complete|interactive)/.test(document.readyState))&&(m(document,!0),t&&document.body.prototype&&clearTimeout(t),!!document.body.prototype)}if(!("Element"in self&&"HTMLElement"in self)){if(window.Element&&!window.HTMLElement)return void(window.HTMLElement=window.Element);window.Element=window.HTMLElement=new Function("return function Element() {}")();var t,n=document.appendChild(document.createElement("body")),o=n.appendChild(document.createElement("iframe")),r=o.contentWindow.document,c=Element.prototype=r.appendChild(r.createElement("*")),d={},m=function(e,t){var n,o,r,c=e.childNodes||[],u=-1;if(1===e.nodeType&&e.constructor!==Element){e.constructor=Element;for(n in d)o=d[n],e[n]=o}for(;r=t&&c[++u];)m(r,t);return e},u=document.getElementsByTagName("*"),i=document.createElement,l=100;c.attachEvent("onpropertychange",function(e){for(var t,n=e.propertyName,o=!Object.prototype.hasOwnProperty.call(d,n),r=c[n],m=d[n],i=-1;t=u[++i];)1===t.nodeType&&(o||t[n]===m)&&(t[n]=r);d[n]=r}),c.constructor=Element,c.hasAttribute||(c.hasAttribute=function a(e){return null!==this.getAttribute(e)}),e()||(document.onreadystatechange=e,t=setInterval(e,25)),document.createElement=function p(e){var t=i(String(e).toLowerCase());return m(t)},document.removeChild(n)}}();}if (!("defineProperty"in Object&&function(){try{var e={}
return Object.defineProperty(e,"test",{value:42}),!0}catch(t){return!1}}()
)) {!function(e){var t=Object.prototype.hasOwnProperty.call(Object.prototype,"__defineGetter__"),r="A property cannot both have accessors and be writable or have a value";Object.defineProperty=function n(o,i,c){if(e&&(o===window||o===document||o===Element.prototype||o instanceof Element))return e(o,i,c);if(null===o||!(o instanceof Object||"object"==typeof o))throw new TypeError("Object.defineProperty called on non-object");if(!(c instanceof Object))throw new TypeError("Property description must be an object");var a=String(i),f="value"in c||"writable"in c,p="get"in c&&typeof c.get,s="set"in c&&typeof c.set;if(p){if("function"!==p)throw new TypeError("Getter must be a function");if(!t)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(f)throw new TypeError(r);Object.__defineGetter__.call(o,a,c.get)}else o[a]=c.value;if(s){if("function"!==s)throw new TypeError("Setter must be a function");if(!t)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(f)throw new TypeError(r);Object.__defineSetter__.call(o,a,c.set)}return"value"in c&&(o[a]=c.value),o}}(Object.defineProperty);}function CreateMethodProperty(e,r,t){var a={value:t,writable:!0,enumerable:!1,configurable:!0};Object.defineProperty(e,r,a)}if (!("includes"in Array.prototype
)) {CreateMethodProperty(Array.prototype,"includes",function e(r){"use strict";var t=ToObject(this),o=ToLength(Get(t,"length"));if(0===o)return!1;var n=ToInteger(arguments[1]);if(n>=0)var a=n;else(a=o+n)<0&&(a=0);for(;a<o;){var i=Get(t,ToString(a));if(SameValueZero(r,i))return!0;a+=1}return!1});}if (!("indexOf"in Array.prototype
)) {CreateMethodProperty(Array.prototype,"indexOf",function r(t){var e=ToObject(this),n=ToLength(Get(e,"length"));if(0===n)return-1;var i=ToInteger(arguments[1]);if(i>=n)return-1;if(i>=0)var o=1/i==-Infinity?0:i;else(o=n+i)<0&&(o=0);for(;o<n;){if(HasProperty(e,ToString(o))){if(t===Get(e,ToString(o)))return o}o+=1}return-1});}if (!("keys"in Object&&function(){return 2===Object.keys(arguments).length}(1,2)&&function(){try{return Object.keys(""),!0}catch(t){return!1}}()
)) {CreateMethodProperty(Object,"keys",function(){"use strict";function t(t){var e=r.call(t),n="[object Arguments]"===e;return n||(n="[object Array]"!==e&&null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Function]"===r.call(t.callee)),n}var e=Object.prototype.hasOwnProperty,r=Object.prototype.toString,n=Object.prototype.propertyIsEnumerable,o=!n.call({toString:null},"toString"),l=n.call(function(){},"prototype"),c=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],i=function(t){var e=t.constructor;return e&&e.prototype===t},u={$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},a=function(){if("undefined"==typeof window)return!1;for(var t in window)try{if(!u["$"+t]&&e.call(window,t)&&null!==window[t]&&"object"==typeof window[t])try{i(window[t])}catch(r){return!0}}catch(r){return!0}return!1}(),f=function(t){if("undefined"==typeof window||!a)return i(t);try{return i(t)}catch(e){return!1}};return function p(n){var i="[object Function]"===r.call(n),u=t(n),a="[object String]"===r.call(n),p=[];if(n===undefined||null===n)throw new TypeError("Cannot convert undefined or null to object");var s=l&&i;if(a&&n.length>0&&!e.call(n,0))for(var y=0;y<n.length;++y)p.push(String(y));if(u&&n.length>0)for(var g=0;g<n.length;++g)p.push(String(g));else for(var h in n)s&&"prototype"===h||!e.call(n,h)||p.push(String(h));if(o)for(var w=f(n),d=0;d<c.length;++d)w&&"constructor"===c[d]||!e.call(n,c[d])||p.push(c[d]);return p}}());}if (!("Window"in self
)) {"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&function(o){o.constructor?o.Window=o.constructor:(o.Window=o.constructor=new Function("return function Window() {}")()).prototype=self}(self);}if (!((function(n){if(!("Event"in n))return!1
try{return new Event("click"),!0}catch(t){return!1}})(self)
)) {!function(){function e(e,t){if(!e)throw new Error("Not enough arguments");var n;if("createEvent"in document){n=document.createEvent("Event");var o=!(!t||t.bubbles===undefined)&&t.bubbles,i=!(!t||t.cancelable===undefined)&&t.cancelable;return n.initEvent(e,o,i),n}return n=document.createEventObject(),n.type=e,n.bubbles=!(!t||t.bubbles===undefined)&&t.bubbles,n.cancelable=!(!t||t.cancelable===undefined)&&t.cancelable,n}var t={click:1,dblclick:1,keyup:1,keypress:1,keydown:1,mousedown:1,mouseup:1,mousemove:1,mouseover:1,mouseenter:1,mouseleave:1,mouseout:1,storage:1,storagecommit:1,textinput:1};if("undefined"!=typeof document&&"undefined"!=typeof window){var n=window.Event&&window.Event.prototype||null;e.NONE=0,e.CAPTURING_PHASE=1,e.AT_TARGET=2,e.BUBBLING_PHASE=3,window.Event=Window.prototype.Event=e,n&&Object.defineProperty(window.Event,"prototype",{configurable:!1,enumerable:!1,writable:!0,value:n}),"createEvent"in document||(window.addEventListener=Window.prototype.addEventListener=Document.prototype.addEventListener=Element.prototype.addEventListener=function o(){var e=this,n=arguments[0],o=arguments[1];if(e===window&&n in t)throw new Error("In IE8 the event: "+n+" is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");e._events||(e._events={}),e._events[n]||(e._events[n]=function(t){var n,o=e._events[t.type].list,i=o.slice(),r=-1,c=i.length;for(t.preventDefault=function a(){!1!==t.cancelable&&(t.returnValue=!1)},t.stopPropagation=function l(){t.cancelBubble=!0},t.stopImmediatePropagation=function s(){t.cancelBubble=!0,t.cancelImmediate=!0},t.currentTarget=e,t.relatedTarget=t.fromElement||null,t.target=t.target||t.srcElement||e,t.timeStamp=(new Date).getTime(),t.clientX&&(t.pageX=t.clientX+document.documentElement.scrollLeft,t.pageY=t.clientY+document.documentElement.scrollTop);++r<c&&!t.cancelImmediate;)r in i&&(n=i[r],o.includes(n)&&"function"==typeof n&&n.call(e,t))},e._events[n].list=[],e.attachEvent&&e.attachEvent("on"+n,e._events[n])),e._events[n].list.push(o)},window.removeEventListener=Window.prototype.removeEventListener=Document.prototype.removeEventListener=Element.prototype.removeEventListener=function i(){var e,t=this,n=arguments[0],o=arguments[1];t._events&&t._events[n]&&t._events[n].list&&-1!==(e=t._events[n].list.indexOf(o))&&(t._events[n].list.splice(e,1),t._events[n].list.length||(t.detachEvent&&t.detachEvent("on"+n,t._events[n]),delete t._events[n]))},window.dispatchEvent=Window.prototype.dispatchEvent=Document.prototype.dispatchEvent=Element.prototype.dispatchEvent=function r(e){if(!arguments.length)throw new Error("Not enough arguments");if(!e||"string"!=typeof e.type)throw new Error("DOM Events Exception 0");var t=this,n=e.type;try{if(!e.bubbles){e.cancelBubble=!0;var o=function(e){e.cancelBubble=!0,(t||window).detachEvent("on"+n,o)};this.attachEvent("on"+n,o)}this.fireEvent("on"+n,e)}catch(i){e.target=t;do{e.currentTarget=t,"_events"in t&&"function"==typeof t._events[n]&&t._events[n].call(t,e),"function"==typeof t["on"+n]&&t["on"+n].call(t,e),t=9===t.nodeType?t.parentWindow:t.parentNode}while(t&&!e.cancelBubble)}return!0},document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&document.dispatchEvent(new e("DOMContentLoaded",{bubbles:!0}))}))}}();}if (!("CustomEvent"in self&&("function"==typeof self.CustomEvent||self.CustomEvent.toString().indexOf("CustomEventConstructor")>-1)
)) {self.CustomEvent=function e(t,n){if(!t)throw Error('TypeError: Failed to construct "CustomEvent": An event name must be provided.');var l;if(n=n||{bubbles:!1,cancelable:!1,detail:null},"createEvent"in document)try{l=document.createEvent("CustomEvent"),l.initCustomEvent(t,n.bubbles,n.cancelable,n.detail)}catch(a){l=document.createEvent("Event"),l.initEvent(t,n.bubbles,n.cancelable),l.detail=n.detail}else l=new Event(t,n),l.detail=n&&n.detail||null;return l},CustomEvent.prototype=Event.prototype;}})('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});