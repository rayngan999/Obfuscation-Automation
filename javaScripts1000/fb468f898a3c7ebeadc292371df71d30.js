(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([["commons~bookmate~errors~cfbf0a2e"],{GBY4:function(t,e,r){"use strict";(function(e){var o=r("RA0T"),n=r("nFlj"),s=/^[A-Za-z][A-Za-z0-9+-.]*:[\\/]+/,i=/^([a-z][a-z0-9.+-]*:)?([\\/]{1,})?([\S\s]*)/i,a=new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+");function u(t){return(t||"").toString().replace(a,"")}var h=[["#","hash"],["?","query"],function(t){return t.replace("\\","/")},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],c={hash:1,query:1};function f(t){var r,o=("undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{}).location||{},n={},i=typeof(t=t||o);if("blob:"===t.protocol)n=new p(unescape(t.pathname),{});else if("string"===i)for(r in n=new p(t,{}),c)delete n[r];else if("object"===i){for(r in t)r in c||(n[r]=t[r]);void 0===n.slashes&&(n.slashes=s.test(t.href))}return n}function l(t){t=u(t);var e=i.exec(t);return{protocol:e[1]?e[1].toLowerCase():"",slashes:!!(e[2]&&e[2].length>=2),rest:e[2]&&1===e[2].length?"/"+e[3]:e[3]}}function p(t,e,r){if(t=u(t),!(this instanceof p))return new p(t,e,r);var s,i,a,c,d,y,b=h.slice(),m=typeof e,w=this,v=0;for("object"!==m&&"string"!==m&&(r=e,e=null),r&&"function"!=typeof r&&(r=n.parse),e=f(e),s=!(i=l(t||"")).protocol&&!i.slashes,w.slashes=i.slashes||s&&e.slashes,w.protocol=i.protocol||e.protocol||"",t=i.rest,i.slashes||(b[3]=[/(.*)/,"pathname"]);v<b.length;v++)"function"!=typeof(c=b[v])?(a=c[0],y=c[1],a!=a?w[y]=t:"string"==typeof a?~(d=t.indexOf(a))&&("number"==typeof c[2]?(w[y]=t.slice(0,d),t=t.slice(d+c[2])):(w[y]=t.slice(d),t=t.slice(0,d))):(d=a.exec(t))&&(w[y]=d[1],t=t.slice(0,d.index)),w[y]=w[y]||s&&c[3]&&e[y]||"",c[4]&&(w[y]=w[y].toLowerCase())):t=c(t);r&&(w.query=r(w.query)),s&&e.slashes&&"/"!==w.pathname.charAt(0)&&(""!==w.pathname||""!==e.pathname)&&(w.pathname=function(t,e){if(""===t)return e;for(var r=(e||"/").split("/").slice(0,-1).concat(t.split("/")),o=r.length,n=r[o-1],s=false,i=0;o--;)"."===r[o]?r.splice(o,1):".."===r[o]?(r.splice(o,1),i++):i&&(0===o&&(s=true),r.splice(o,1),i--);return s&&r.unshift(""),"."!==n&&".."!==n||r.push(""),r.join("/")}(w.pathname,e.pathname)),"/"!==w.pathname.charAt(0)&&w.hostname&&(w.pathname="/"+w.pathname),o(w.port,w.protocol)||(w.host=w.hostname,w.port=""),w.username=w.password="",w.auth&&(c=w.auth.split(":"),w.username=c[0]||"",w.password=c[1]||""),w.origin=w.protocol&&w.host&&"file:"!==w.protocol?w.protocol+"//"+w.host:"null",w.href=w.toString()}p.prototype={set:function(t,e,r){var s=this;switch(t){case"query":"string"==typeof e&&e.length&&(e=(r||n.parse)(e)),s[t]=e;break;case"port":s[t]=e,o(e,s.protocol)?e&&(s.host=s.hostname+":"+e):(s.host=s.hostname,s[t]="");break;case"hostname":s[t]=e,s.port&&(e+=":"+s.port),s.host=e;break;case"host":s[t]=e,/:\d+$/.test(e)?(e=e.split(":"),s.port=e.pop(),s.hostname=e.join(":")):(s.hostname=e,s.port="");break;case"protocol":s.protocol=e.toLowerCase(),s.slashes=!r;break;case"pathname":case"hash":if(e){var i="pathname"===t?"/":"#";s[t]=e.charAt(0)!==i?i+e:e}else s[t]=e;break;default:s[t]=e}for(var a=0;a<h.length;a++){var u=h[a];u[4]&&(s[u[1]]=s[u[1]].toLowerCase())}return s.origin=s.protocol&&s.host&&"file:"!==s.protocol?s.protocol+"//"+s.host:"null",s.href=s.toString(),s},toString:function(t){t&&"function"==typeof t||(t=n.stringify);var e,r=this,o=r.protocol;o&&":"!==o.charAt(o.length-1)&&(o+=":");var s=o+(r.slashes?"//":"");return r.username&&(s+=r.username,r.password&&(s+=":"+r.password),s+="@"),s+=r.host+r.pathname,(e="object"==typeof r.query?t(r.query):r.query)&&(s+="?"!==e.charAt(0)?"?"+e:e),r.hash&&(s+=r.hash),s}},p.extractProtocol=l,p.location=f,p.trimLeft=u,p.qs=n,t.exports=p}).call(this,r("yLpj"))},PDX0:function(t,e){(function(e){t.exports=e}).call(this,{})},YuTi:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:true,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:true,get:function(){return t.i}}),t.webpackPolyfill=1),t}},bZMm:function(t,e,r){"use strict";r.r(e),r.d(e,"Headers",(function(){return d})),r.d(e,"Request",(function(){return A})),r.d(e,"Response",(function(){return E})),r.d(e,"DOMException",(function(){return x})),r.d(e,"fetch",(function(){return B}));var o="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==o&&o,n="URLSearchParams"in o,s="Symbol"in o&&"iterator"in Symbol,i="FileReader"in o&&"Blob"in o&&function(){try{return new Blob,true}catch(t){return false}}(),a="FormData"in o,u="ArrayBuffer"in o;if(u)var h=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],c=ArrayBuffer.isView||function(t){return t&&h.indexOf(Object.prototype.toString.call(t))>-1};function f(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t)||""===t)throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function l(t){return"string"!=typeof t&&(t=String(t)),t}function p(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return s&&(e[Symbol.iterator]=function(){return e}),e}function d(t){this.map={},t instanceof d?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function y(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=true}function b(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function m(t){var e=new FileReader,r=b(e);return e.readAsArrayBuffer(t),r}function w(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function v(){return this.bodyUsed=false,this._initBody=function(t){var e;this.bodyUsed=this.bodyUsed,this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:i&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:a&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():u&&i&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=w(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):u&&(ArrayBuffer.prototype.isPrototypeOf(t)||c(t))?this._bodyArrayBuffer=w(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},i&&(this.blob=function(){var t=y(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var t=y(this);return t||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}return this.blob().then(m)}),this.text=function(){var t,e,r,o=y(this);if(o)return o;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=b(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),o=0;o<e.length;o++)r[o]=String.fromCharCode(e[o]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},a&&(this.formData=function(){return this.text().then(_)}),this.json=function(){return this.text().then(JSON.parse)},this}d.prototype.append=function(t,e){t=f(t),e=l(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},d.prototype.delete=function(t){delete this.map[f(t)]},d.prototype.get=function(t){return t=f(t),this.has(t)?this.map[t]:null},d.prototype.has=function(t){return this.map.hasOwnProperty(f(t))},d.prototype.set=function(t,e){this.map[f(t)]=l(e)},d.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},d.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),p(t)},d.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),p(t)},d.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),p(t)},s&&(d.prototype[Symbol.iterator]=d.prototype.entries);var g=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function A(t,e){if(!(this instanceof A))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var r,o,n=(e=e||{}).body;if(t instanceof A){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new d(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=true)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new d(e.headers)),this.method=(r=e.method||this.method||"GET",o=r.toUpperCase(),g.indexOf(o)>-1?o:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(n),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==e.cache&&"no-cache"!==e.cache)){var s=/([?&])_=[^&]*/;if(s.test(this.url))this.url=this.url.replace(s,"$1_="+(new Date).getTime());else{this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}function _(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(n))}})),e}function E(t,e){if(!(this instanceof E))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"",this.headers=new d(e.headers),this.url=e.url||"",this._initBody(t)}A.prototype.clone=function(){return new A(this,{body:this._bodyInit})},v.call(A.prototype),v.call(E.prototype),E.prototype.clone=function(){return new E(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new d(this.headers),url:this.url})},E.error=function(){var t=new E(null,{status:0,statusText:""});return t.type="error",t};var T=[301,302,303,307,308];E.redirect=function(t,e){if(-1===T.indexOf(e))throw new RangeError("Invalid status code");return new E(null,{status:e,headers:{location:t}})};var x=o.DOMException;try{new x}catch(t){(x=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),x.prototype.constructor=x}function B(t,e){return new Promise((function(r,n){var s=new A(t,e);if(s.signal&&s.signal.aborted)return n(new x("Aborted","AbortError"));var a=new XMLHttpRequest;function h(){a.abort()}a.onload=function(){var t,e,o={status:a.status,statusText:a.statusText,headers:(t=a.getAllResponseHeaders()||"",e=new d,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var r=t.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();e.append(o,n)}})),e)};o.url="responseURL"in a?a.responseURL:o.headers.get("X-Request-URL");var n="response"in a?a.response:a.responseText;setTimeout((function(){r(new E(n,o))}),0)},a.onerror=function(){setTimeout((function(){n(new TypeError("Network request failed"))}),0)},a.ontimeout=function(){setTimeout((function(){n(new TypeError("Network request failed"))}),0)},a.onabort=function(){setTimeout((function(){n(new x("Aborted","AbortError"))}),0)},a.open(s.method,function(t){try{return""===t&&o.location.href?o.location.href:t}catch(e){return t}}(s.url),true),"include"===s.credentials?a.withCredentials=true:"omit"===s.credentials&&(a.withCredentials=false),"responseType"in a&&(i?a.responseType="blob":u&&s.headers.get("Content-Type")&&-1!==s.headers.get("Content-Type").indexOf("application/octet-stream")&&(a.responseType="arraybuffer")),!e||"object"!=typeof e.headers||e.headers instanceof d?s.headers.forEach((function(t,e){a.setRequestHeader(e,t)})):Object.getOwnPropertyNames(e.headers).forEach((function(t){a.setRequestHeader(t,l(e.headers[t]))})),s.signal&&(s.signal.addEventListener("abort",h),a.onreadystatechange=function(){4===a.readyState&&s.signal.removeEventListener("abort",h)}),a.send(void 0===s._bodyInit?null:s._bodyInit)}))}B.polyfill=true,o.fetch||(o.fetch=B,o.Headers=d,o.Request=A,o.Response=E)},xQqG:function(t,e,r){"use strict";var o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),n=new Uint8Array(16);function s(){if(!o)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(n)}var i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var a=function(t){return"string"==typeof t&&i.test(t)},u=[],h=0;h<256;++h)u.push((h+256).toString(16).substr(1));var c,f,l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(u[t[e+0]]+u[t[e+1]]+u[t[e+2]]+u[t[e+3]]+"-"+u[t[e+4]]+u[t[e+5]]+"-"+u[t[e+6]]+u[t[e+7]]+"-"+u[t[e+8]]+u[t[e+9]]+"-"+u[t[e+10]]+u[t[e+11]]+u[t[e+12]]+u[t[e+13]]+u[t[e+14]]+u[t[e+15]]).toLowerCase();if(!a(r))throw TypeError("Stringified UUID is invalid");return r},p=0,d=0;e.a=function(t,e,r){var o=e&&r||0,n=e||new Array(16),i=(t=t||{}).node||c,a=void 0!==t.clockseq?t.clockseq:f;if(null==i||null==a){var u=t.random||(t.rng||s)();null==i&&(i=c=[1|u[0],u[1],u[2],u[3],u[4],u[5]]),null==a&&(a=f=16383&(u[6]<<8|u[7]))}var h=void 0!==t.msecs?t.msecs:Date.now(),y=void 0!==t.nsecs?t.nsecs:d+1,b=h-p+(y-d)/1e4;if(b<0&&void 0===t.clockseq&&(a=a+1&16383),(b<0||h>p)&&void 0===t.nsecs&&(y=0),y>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");p=h,d=y,f=a;var m=(1e4*(268435455&(h+=122192928e5))+y)%4294967296;n[o++]=m>>>24&255,n[o++]=m>>>16&255,n[o++]=m>>>8&255,n[o++]=255&m;var w=h/4294967296*1e4&268435455;n[o++]=w>>>8&255,n[o++]=255&w,n[o++]=w>>>24&15|16,n[o++]=w>>>16&255,n[o++]=a>>>8|128,n[o++]=255&a;for(var v=0;v<6;++v)n[o+v]=i[v];return e||l(n)}}}]);
//# sourceMappingURL=commons~bookmate~errors~cfbf0a2e.build.2e1737d7ffc36303b01b.min.js.map