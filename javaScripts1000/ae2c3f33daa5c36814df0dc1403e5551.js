!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["polyfills/polyfills.sync.js"]=e():t["polyfills/polyfills.sync.js"]=e()}(this,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=232)}([function(t,e,r){(function(e){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,r(71))},function(t,e,r){var n=r(0),o=r(43),i=r(3),s=r(44),u=r(46),c=r(79),a=o("wks"),f=n.Symbol,h=c?f:f&&f.withoutSetter||s;t.exports=function(t){return i(a,t)&&(u||"string"==typeof a[t])||(u&&i(f,t)?a[t]=f[t]:a[t]=h("Symbol."+t)),a[t]}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},function(t,e,r){var n=r(7);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,r){var n=r(8),o=r(10),i=r(17);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e,r){var n=r(0),o=r(26).f,i=r(5),s=r(11),u=r(22),c=r(74),a=r(48);t.exports=function(t,e){var r,f,h,p,l,d=t.target,y=t.global,v=t.stat;if(r=y?n:v?n[d]||u(d,{}):(n[d]||{}).prototype)for(f in e){if(p=e[f],h=t.noTargetGet?(l=o(r,f))&&l.value:r[f],!a(y?f:d+(v?".":"#")+f,t.forced)&&void 0!==h){if(typeof p==typeof h)continue;c(p,h)}(t.sham||h&&h.sham)&&i(p,"sham",!0),s(r,f,p,t)}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,r){var n=r(2);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e,r){var n=r(38),o=r(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t])||i(o[t]):n[t]&&n[t][e]||o[t]&&o[t][e]}},function(t,e,r){var n=r(8),o=r(42),i=r(4),s=r(41),u=Object.defineProperty;e.f=n?u:function(t,e,r){if(i(t),e=s(e,!0),i(r),o)try{return u(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},function(t,e,r){var n=r(0),o=r(5),i=r(3),s=r(22),u=r(29),c=r(18),a=c.get,f=c.enforce,h=String(String).split("String");(t.exports=function(t,e,r,u){var c,a=!!u&&!!u.unsafe,p=!!u&&!!u.enumerable,l=!!u&&!!u.noTargetGet;"function"==typeof r&&("string"!=typeof e||i(r,"name")||o(r,"name",e),(c=f(r)).source||(c.source=h.join("string"==typeof e?e:""))),t!==n?(a?!l&&t[e]&&(p=!0):delete t[e],p?t[e]=r:o(t,e,r)):p?t[e]=r:s(e,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&a(this).source||u(this)}))},,function(t,e){t.exports=!1},,,function(t,e,r){var n=r(66),o=r(32);t.exports=function(t){return n(o(t))}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,r){var n,o,i,s=r(73),u=r(0),c=r(7),a=r(5),f=r(3),h=r(23),p=r(30),l=r(24),d=u.WeakMap;if(s){var y=h.state||(h.state=new d),v=y.get,b=y.has,m=y.set;n=function(t,e){return e.facade=t,m.call(y,t,e),e},o=function(t){return v.call(y,t)||{}},i=function(t){return b.call(y,t)}}else{var g=p("state");l[g]=!0,n=function(t,e){return e.facade=t,a(t,g,e),e},o=function(t){return f(t,g)?t[g]:{}},i=function(t){return f(t,g)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!c(e)||(r=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,e,r){var n=r(27),o=r(0);t.exports="process"==n(o.process)},,,function(t,e,r){var n=r(0),o=r(5);t.exports=function(t,e){try{o(n,t,e)}catch(r){n[t]=e}return e}},function(t,e,r){var n=r(0),o=r(22),i="__core-js_shared__",s=n[i]||o(i,{});t.exports=s},function(t,e){t.exports={}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,r){var n=r(8),o=r(52),i=r(17),s=r(16),u=r(41),c=r(3),a=r(42),f=Object.getOwnPropertyDescriptor;e.f=n?f:function(t,e){if(t=s(t),e=u(e,!0),a)try{return f(t,e)}catch(t){}if(c(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,e,r){var n=r(0),o=r(7),i=n.document,s=o(i)&&o(i.createElement);t.exports=function(t){return s?i.createElement(t):{}}},function(t,e,r){var n=r(23),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},function(t,e,r){var n=r(43),o=r(44),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,r){var n,o=r(4),i=r(78),s=r(25),u=r(24),c=r(49),a=r(28),f=r(30),h=f("IE_PROTO"),p=function(){},l=function(t){return"<script>"+t+"</"+"script>"},d=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;d=n?function(t){t.write(l("")),t.close();var e=t.parentWindow.Object;return t=null,e}(n):((e=a("iframe")).style.display="none",c.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(l("document.F=Object")),t.close(),t.F);for(var r=s.length;r--;)delete d.prototype[s[r]];return d()};u[h]=!0,t.exports=Object.create||function(t,e){var r;return null!==t?(p.prototype=o(t),r=new p,p.prototype=null,r[h]=t):r=d(),void 0===e?r:i(r,e)}},function(t,e,r){var n=r(9);t.exports=n("navigator","userAgent")||""},,,,function(t,e,r){var n=r(0);t.exports=n},,,function(t,e,r){var n=r(7);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,r){var n=r(8),o=r(2),i=r(28);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,r){var n=r(13),o=r(23);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.10.1",mode:n?"pure":"global",copyright:"Â© 2021 Denis Pushkarev (zloirock.ru)"})},function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+n).toString(36)}},function(t,e,r){var n=r(3),o=r(16),i=r(72).indexOf,s=r(24);t.exports=function(t,e){var r,u=o(t),c=0,a=[];for(r in u)!n(s,r)&&n(u,r)&&a.push(r);for(;e.length>c;)n(u,r=e[c++])&&(~i(a,r)||a.push(r));return a}},function(t,e,r){var n=r(19),o=r(50),i=r(2);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){return!Symbol.sham&&(n?38===o:o>37&&o<41)}))},function(t,e,r){var n=r(31),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},function(t,e,r){var n=r(2),o=/#|\.prototype\./,i=function(t,e){var r=u[s(t)];return r==a||r!=c&&("function"==typeof e?n(e):!!e)},s=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},c=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},function(t,e,r){var n=r(9);t.exports=n("document","documentElement")},function(t,e,r){var n,o,i=r(0),s=r(34),u=i.process,c=u&&u.versions,a=c&&c.v8;a?o=(n=a.split("."))[0]+n[1]:s&&(!(n=s.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=s.match(/Chrome\/(\d+)/))&&(o=n[1]),t.exports=o&&+o},,function(t,e,r){"use strict";var n={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!n.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:n},,function(t,e,r){var n=r(45),o=r(25);t.exports=Object.keys||function(t){return n(t,o)}},,,,,,,,,,,,function(t,e,r){var n=r(2),o=r(27),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e){e.f=Object.getOwnPropertySymbols},,,,function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){var n=r(16),o=r(47),i=r(77),s=function(t){return function(e,r,s){var u,c=n(e),a=o(c.length),f=i(s,a);if(t&&r!=r){for(;a>f;)if((u=c[f++])!=u)return!0}else for(;a>f;f++)if((t||f in c)&&c[f]===r)return t||f||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},function(t,e,r){var n=r(0),o=r(29),i=n.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e,r){var n=r(3),o=r(75),i=r(26),s=r(10);t.exports=function(t,e){for(var r=o(e),u=s.f,c=i.f,a=0;a<r.length;a++){var f=r[a];n(t,f)||u(t,f,c(e,f))}}},function(t,e,r){var n=r(9),o=r(76),i=r(67),s=r(4);t.exports=n("Reflect","ownKeys")||function(t){var e=o.f(s(t)),r=i.f;return r?e.concat(r(t)):e}},function(t,e,r){var n=r(45),o=r(25).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},function(t,e,r){var n=r(31),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},function(t,e,r){var n=r(8),o=r(10),i=r(4),s=r(54);t.exports=n?Object.defineProperties:function(t,e){i(t);for(var r,n=s(e),u=n.length,c=0;u>c;)o.f(t,r=n[c++],e[r]);return t}},function(t,e,r){var n=r(46);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,r){var n=r(1),o=r(33),i=r(10),s=n("unscopables"),u=Array.prototype;null==u[s]&&i.f(u,s,{configurable:!0,value:o(null)}),t.exports=function(t){u[s][t]=!0}},function(t,e){!function(t){"use strict";if(!t.fetch){var e="URLSearchParams"in t,r="Symbol"in t&&"iterator"in Symbol,n="FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),o="FormData"in t,i="ArrayBuffer"in t;if(i)var s=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],u=function(t){return t&&DataView.prototype.isPrototypeOf(t)},c=ArrayBuffer.isView||function(t){return t&&s.indexOf(Object.prototype.toString.call(t))>-1};d.prototype.append=function(t,e){t=h(t),e=p(e);var r=this.map[t];this.map[t]=r?r+","+e:e},d.prototype.delete=function(t){delete this.map[h(t)]},d.prototype.get=function(t){return t=h(t),this.has(t)?this.map[t]:null},d.prototype.has=function(t){return this.map.hasOwnProperty(h(t))},d.prototype.set=function(t,e){this.map[h(t)]=p(e)},d.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},d.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),l(t)},d.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),l(t)},d.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),l(t)},r&&(d.prototype[Symbol.iterator]=d.prototype.entries);var a=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];_.prototype.clone=function(){return new _(this,{body:this._bodyInit})},g.call(_.prototype),g.call(x.prototype),x.prototype.clone=function(){return new x(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new d(this.headers),url:this.url})},x.error=function(){var t=new x(null,{status:0,statusText:""});return t.type="error",t};var f=[301,302,303,307,308];x.redirect=function(t,e){if(-1===f.indexOf(e))throw new RangeError("Invalid status code");return new x(null,{status:e,headers:{location:t}})},t.Headers=d,t.Request=_,t.Response=x,t.fetch=function(t,e){return new Promise((function(r,o){var i=new _(t,e),s=new XMLHttpRequest;s.onload=function(){var t,e,n={status:s.status,statusText:s.statusText,headers:(t=s.getAllResponseHeaders()||"",e=new d,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}})),e)};n.url="responseURL"in s?s.responseURL:n.headers.get("X-Request-URL");var o="response"in s?s.response:s.responseText;r(new x(o,n))},s.onerror=function(){o(new TypeError("Network request failed"))},s.ontimeout=function(){o(new TypeError("Network request failed"))},s.open(i.method,i.url,!0),"include"===i.credentials?s.withCredentials=!0:"omit"===i.credentials&&(s.withCredentials=!1),"responseType"in s&&n&&(s.responseType="blob"),i.headers.forEach((function(t,e){s.setRequestHeader(e,t)})),s.send(void 0===i._bodyInit?null:i._bodyInit)}))},t.fetch.polyfill=!0}function h(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function p(t){return"string"!=typeof t&&(t=String(t)),t}function l(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return r&&(e[Symbol.iterator]=function(){return e}),e}function d(t){this.map={},t instanceof d?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function y(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function v(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function b(t){var e=new FileReader,r=v(e);return e.readAsArrayBuffer(t),r}function m(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function g(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(n&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(o&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(e&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(i&&n&&u(t))this._bodyArrayBuffer=m(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!i||!ArrayBuffer.prototype.isPrototypeOf(t)&&!c(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=m(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},n&&(this.blob=function(){var t=y(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?y(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(b)}),this.text=function(){var t,e,r,n=y(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=v(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},o&&(this.formData=function(){return this.text().then(w)}),this.json=function(){return this.text().then(JSON.parse)},this}function _(t,e){var r,n,o=(e=e||{}).body;if(t instanceof _){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new d(t.headers)),this.method=t.method,this.mode=t.mode,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new d(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),a.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function w(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}})),e}function x(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new d(e.headers),this.url=e.url||"",this._initBody(t)}}("undefined"!=typeof self?self:this)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,r){var n=r(8),o=r(54),i=r(16),s=r(52).f,u=function(t){return function(e){for(var r,u=i(e),c=o(u),a=c.length,f=0,h=[];a>f;)r=c[f++],n&&!s.call(u,r)||h.push(t?[r,u[r]]:u[r]);return h}};t.exports={entries:u(!0),values:u(!1)}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,r){t.exports=r(233)},function(t,e,r){"use strict";r.r(e);r(234),r(235),r(236),r(237),r(238),r(239)},function(t,e,r){"use strict";var n=r(6),o=r(72).includes,i=r(80);n({target:"Array",proto:!0},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},function(t,e,r){var n=r(6),o=r(174).values;n({target:"Object",stat:!0},{values:function(t){return o(t)}})},function(t,e,r){var n=r(6),o=r(174).entries;n({target:"Object",stat:!0},{entries:function(t){return o(t)}})},function(t,e,r){r(81),t.exports=self.fetch.bind(self)},function(t,e){!function(t,e){"use strict";if("IntersectionObserver"in t&&"IntersectionObserverEntry"in t&&"intersectionRatio"in t.IntersectionObserverEntry.prototype)"isIntersecting"in t.IntersectionObserverEntry.prototype||Object.defineProperty(t.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var r=[];o.prototype.THROTTLE_TIMEOUT=100,o.prototype.POLL_INTERVAL=null,o.prototype.USE_MUTATION_OBSERVER=!0,o.prototype.observe=function(t){if(!this._observationTargets.some((function(e){return e.element==t}))){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},o.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter((function(e){return e.element!=t})),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},o.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},o.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},o.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter((function(t,e,r){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==r[e-1]}))},o.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}}));return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},o.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(i(t,"resize",this._checkForIntersections,!0),i(e,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in t&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},o.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,s(t,"resize",this._checkForIntersections,!0),s(e,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},o.prototype._checkForIntersections=function(){var e=this._rootIsInDom(),r=e?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(o){var i=o.element,s=u(i),c=this._rootContainsTarget(i),a=o.entry,f=e&&c&&this._computeTargetAndRootIntersection(i,r),h=o.entry=new n({time:t.performance&&performance.now&&performance.now(),target:i,boundingClientRect:s,rootBounds:r,intersectionRect:f});a?e&&c?this._hasCrossedThreshold(a,h)&&this._queuedEntries.push(h):a&&a.isIntersecting&&this._queuedEntries.push(h):this._queuedEntries.push(h)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},o.prototype._computeTargetAndRootIntersection=function(r,n){if("none"!=t.getComputedStyle(r).display){for(var o,i,s,c,f,h,p,l,d=u(r),y=a(r),v=!1;!v;){var b=null,m=1==y.nodeType?t.getComputedStyle(y):{};if("none"==m.display)return;if(y==this.root||y==e?(v=!0,b=n):y!=e.body&&y!=e.documentElement&&"visible"!=m.overflow&&(b=u(y)),b&&(o=b,i=d,s=void 0,c=void 0,f=void 0,h=void 0,p=void 0,l=void 0,s=Math.max(o.top,i.top),c=Math.min(o.bottom,i.bottom),f=Math.max(o.left,i.left),h=Math.min(o.right,i.right),l=c-s,!(d=(p=h-f)>=0&&l>=0&&{top:s,bottom:c,left:f,right:h,width:p,height:l})))break;y=a(y)}return d}},o.prototype._getRootRect=function(){var t;if(this.root)t=u(this.root);else{var r=e.documentElement,n=e.body;t={top:0,left:0,right:r.clientWidth||n.clientWidth,width:r.clientWidth||n.clientWidth,bottom:r.clientHeight||n.clientHeight,height:r.clientHeight||n.clientHeight}}return this._expandRectByRootMargin(t)},o.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map((function(e,r){return"px"==e.unit?e.value:e.value*(r%2?t.width:t.height)/100})),r={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return r.width=r.right-r.left,r.height=r.bottom-r.top,r},o.prototype._hasCrossedThreshold=function(t,e){var r=t&&t.isIntersecting?t.intersectionRatio||0:-1,n=e.isIntersecting?e.intersectionRatio||0:-1;if(r!==n)for(var o=0;o<this.thresholds.length;o++){var i=this.thresholds[o];if(i==r||i==n||i<r!=i<n)return!0}},o.prototype._rootIsInDom=function(){return!this.root||c(e,this.root)},o.prototype._rootContainsTarget=function(t){return c(this.root||e,t)},o.prototype._registerInstance=function(){r.indexOf(this)<0&&r.push(this)},o.prototype._unregisterInstance=function(){var t=r.indexOf(this);-1!=t&&r.splice(t,1)},t.IntersectionObserver=o,t.IntersectionObserverEntry=n}function n(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,r=e.width*e.height,n=this.intersectionRect,o=n.width*n.height;this.intersectionRatio=r?Number((o/r).toFixed(4)):this.isIntersecting?1:0}function o(t,e){var r,n,o,i=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(i.root&&1!=i.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(r=this._checkForIntersections.bind(this),n=this.THROTTLE_TIMEOUT,o=null,function(){o||(o=setTimeout((function(){r(),o=null}),n))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(i.rootMargin),this.thresholds=this._initThresholds(i.threshold),this.root=i.root||null,this.rootMargin=this._rootMarginValues.map((function(t){return t.value+t.unit})).join(" ")}function i(t,e,r,n){"function"==typeof t.addEventListener?t.addEventListener(e,r,n||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,r)}function s(t,e,r,n){"function"==typeof t.removeEventListener?t.removeEventListener(e,r,n||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,r)}function u(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function c(t,e){for(var r=e;r;){if(r==t)return!0;r=a(r)}return!1}function a(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e}}(window,document)},function(t,e){window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach)}])}));