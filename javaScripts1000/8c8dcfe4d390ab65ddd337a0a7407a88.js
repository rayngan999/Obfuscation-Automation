parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"MCp7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Headers=a,exports.Request=m,exports.Response=A,exports.fetch=x,exports.DOMException=void 0;var t={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};function e(t){return t&&DataView.prototype.isPrototypeOf(t)}if(t.arrayBuffer)var r=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],o=ArrayBuffer.isView||function(t){return t&&r.indexOf(Object.prototype.toString.call(t))>-1};function n(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function s(t){return"string"!=typeof t&&(t=String(t)),t}function i(e){var r={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return t.iterable&&(r[Symbol.iterator]=function(){return r}),r}function a(t){this.map={},t instanceof a?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function h(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function u(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function f(t){var e=new FileReader,r=u(e);return e.readAsArrayBuffer(t),r}function d(t){var e=new FileReader,r=u(e);return e.readAsText(t),r}function l(t){for(var e=new Uint8Array(t),r=new Array(e.length),o=0;o<e.length;o++)r[o]=String.fromCharCode(e[o]);return r.join("")}function c(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function y(){return this.bodyUsed=!1,this._initBody=function(r){this._bodyInit=r,r?"string"==typeof r?this._bodyText=r:t.blob&&Blob.prototype.isPrototypeOf(r)?this._bodyBlob=r:t.formData&&FormData.prototype.isPrototypeOf(r)?this._bodyFormData=r:t.searchParams&&URLSearchParams.prototype.isPrototypeOf(r)?this._bodyText=r.toString():t.arrayBuffer&&t.blob&&e(r)?(this._bodyArrayBuffer=c(r.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):t.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(r)||o(r))?this._bodyArrayBuffer=c(r):this._bodyText=r=Object.prototype.toString.call(r):this._bodyText="",this.headers.get("content-type")||("string"==typeof r?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):t.searchParams&&URLSearchParams.prototype.isPrototypeOf(r)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},t.blob&&(this.blob=function(){var t=h(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?h(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(f)}),this.text=function(){var t=h(this);if(t)return t;if(this._bodyBlob)return d(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(l(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},t.formData&&(this.formData=function(){return this.text().then(w)}),this.json=function(){return this.text().then(JSON.parse)},this}a.prototype.append=function(t,e){t=n(t),e=s(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},a.prototype.delete=function(t){delete this.map[n(t)]},a.prototype.get=function(t){return t=n(t),this.has(t)?this.map[t]:null},a.prototype.has=function(t){return this.map.hasOwnProperty(n(t))},a.prototype.set=function(t,e){this.map[n(t)]=s(e)},a.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},a.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),i(t)},a.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),i(t)},a.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),i(t)},t.iterable&&(a.prototype[Symbol.iterator]=a.prototype.entries);var p=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function b(t){var e=t.toUpperCase();return p.indexOf(e)>-1?e:t}function m(t,e){var r=(e=e||{}).body;if(t instanceof m){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new a(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new a(e.headers)),this.method=b(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function w(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(n))}}),e}function v(t){var e=new a;return t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var r=t.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();e.append(o,n)}}),e}function A(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new a(e.headers),this.url=e.url||"",this._initBody(t)}m.prototype.clone=function(){return new m(this,{body:this._bodyInit})},y.call(m.prototype),y.call(A.prototype),A.prototype.clone=function(){return new A(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new a(this.headers),url:this.url})},A.error=function(){var t=new A(null,{status:0,statusText:""});return t.type="error",t};var _=[301,302,303,307,308];A.redirect=function(t,e){if(-1===_.indexOf(e))throw new RangeError("Invalid status code");return new A(null,{status:e,headers:{location:t}})};var E=self.DOMException;exports.DOMException=E;try{new E}catch(g){exports.DOMException=E=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack},E.prototype=Object.create(Error.prototype),E.prototype.constructor=E}function x(e,r){return new Promise(function(o,n){var s=new m(e,r);if(s.signal&&s.signal.aborted)return n(new E("Aborted","AbortError"));var i=new XMLHttpRequest;function a(){i.abort()}i.onload=function(){var t={status:i.status,statusText:i.statusText,headers:v(i.getAllResponseHeaders()||"")};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var e="response"in i?i.response:i.responseText;o(new A(e,t))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.onabort=function(){n(new E("Aborted","AbortError"))},i.open(s.method,s.url,!0),"include"===s.credentials?i.withCredentials=!0:"omit"===s.credentials&&(i.withCredentials=!1),"responseType"in i&&t.blob&&(i.responseType="blob"),s.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),s.signal&&(s.signal.addEventListener("abort",a),i.onreadystatechange=function(){4===i.readyState&&s.signal.removeEventListener("abort",a)}),i.send(void 0===s._bodyInit?null:s._bodyInit)})}x.polyfill=!0,self.fetch||(self.fetch=x,self.Headers=a,self.Request=m,self.Response=A);
},{}],"kQO1":[function(require,module,exports) {
require("whatwg-fetch"),module.exports=self.fetch.bind(self);
},{"whatwg-fetch":"MCp7"}],"bU4O":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("isomorphic-fetch"));function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}var i=["get","post","put","delete"],s=function(){function t(){var e=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(n(this,t),this.options=r,!r.restURL)throw new Error("restURL option is required");if(!r.restNonce)throw new Error("restNonce option is required");i.forEach(function(t){e[t]=e._setup(t)})}return o(t,[{key:"_setup",value:function(t){var n=this;return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i={credentials:"same-origin",method:t,headers:{Accept:"application/json","Content-Type":"application/json","X-WP-Nonce":n.options.restNonce}};return o&&(i.body=JSON.stringify(o)),(0,e.default)(n.options.restURL+r,i).then(function(e){return e.json().then(function(t){return e.ok?t:Promise.reject(t)})})}}}]),t}();exports.default=s;
},{"isomorphic-fetch":"kQO1"}],"ZVsn":[function(require,module,exports) {
"use strict";var i=e(require("./utils/fetchWP"));function e(i){return i&&i.__esModule?i:{default:i}}jQuery(function(e){var o=function(){e(document.body).on("click",".wishlist-container.off",this.addProduct),e(document.body).on("click",".wishlist-container.on",this.removeProduct)};function t(i){i.parents(".wishlist-shortcode").length>0&&i.parents(".edd_download").fadeOut("fast",function(){e(this).remove()}),1===e(".wishlist-shortcode .edd_download").length&&e(".empty-wishlist").fadeIn("normal")}o.prototype.addProduct=function(t){if(o.ajaxFiring)return!1;o.ajaxFiring=!0;var n=new i.default({restURL:wishlist_object.api_url,restNonce:wishlist_object.api_nonce}),s=e(this),a=s.data("id");s.removeClass("off").addClass("on icon-scale"),n.post("wishlist",{product_id:a}).then(function(i){s.removeClass("icon-scale"),o.ajaxFiring=!1},function(i){o.ajaxFiring=!1,s.removeClass("icon-scale on").addClass("off")})},o.prototype.removeProduct=function(n){if(o.ajaxFiring)return!1;o.ajaxFiring=!0;var s=new i.default({restURL:wishlist_object.api_url,restNonce:wishlist_object.api_nonce}),a=e(this),r=a.data("id");a.addClass("icon-scale off").removeClass("on"),s.delete("wishlist",{product_id:r}).then(function(i){a.removeClass("icon-scale"),o.ajaxFiring=!1,t(a)},function(i){o.ajaxFiring=!1,a.removeClass("icon-scale off").addClass("on")})},o.prototype.removeProduct=function(n){if(o.ajaxFiring)return!1;o.ajaxFiring=!0;var s=new i.default({restURL:wishlist_object.api_url,restNonce:wishlist_object.api_nonce}),a=e(this),r=a.data("id");a.addClass("icon-scale off").removeClass("on"),s.delete("wishlist",{product_id:r}).then(function(i){a.removeClass("icon-scale"),o.ajaxFiring=!1,t(a)},function(i){o.ajaxFiring=!1,a.removeClass("icon-scale off").addClass("on")})},new o});
},{"./utils/fetchWP":"bU4O"}]},{},["ZVsn"], null)