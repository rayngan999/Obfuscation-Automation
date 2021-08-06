var advId_c56e17f13eaa4b498ad5c5025d72189d = '';
var campId_c56e17f13eaa4b498ad5c5025d72189d = '';
var pubId_c56e17f13eaa4b498ad5c5025d72189d = '';
var chanId_c56e17f13eaa4b498ad5c5025d72189d = '3d58e13cbef3493682fe6107ac13e262';
var placementId_c56e17f13eaa4b498ad5c5025d72189d = 'c56e17f13eaa4b498ad5c5025d72189d';

var d = new Date();
d.setTime(d.getTime() + 31536000000);
var expires = 'expires='+ d.toUTCString();
document.cookie = '__yoid__=46c6de061b6867f8ec51452beaa77f4d;' + expires + ';path=/';
if (!window.localStorage.getItem('__yoid__')) {
	window.localStorage.setItem('__yoid__', '46c6de061b6867f8ec51452beaa77f4d');
}

function getTrackingYomedia(url) {
	var img = new Image();
	img.src = url;
}
var yomediajs = yomediajs || function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){const n=r(1);t.exports={postscribe(t,e,r){n(t,e,void 0!==r?{done:r,error:function(t){r()}}:{error:function(t){}})}}},function(t,e,r){

!function(e,r){t.exports=r()}(0,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}return r.m=t,r.c=e,r.p="",r(0)}([function(t,e,r){"use strict";var n=function(t){return t&&t.__esModule?t:{default:t}}(r(1));t.exports=n.default},function(t,e,r){"use strict";e.__esModule=!0;var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};e.default=p;var o=function(t){return t&&t.__esModule?t:{default:t}}(r(2)),i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(r(4));function a(){}var s={afterAsync:a,afterDequeue:a,afterStreamStart:a,afterWrite:a,autoFix:!0,beforeEnqueue:a,beforeWriteToken:function(t){return t},beforeWrite:function(t){return t},done:a,error:function(t){throw new Error(t.msg)},releaseAsync:!1},u=0,c=[],l=null;function f(){var t=c.shift();if(t){var e=i.last(t);e.afterDequeue(),t.stream=function(t,e,r){(l=new o.default(t,r)).id=u++,l.name=r.name||l.id,p.streams[l.name]=l;var i=t.ownerDocument,s={close:i.close,open:i.open,write:i.write,writeln:i.writeln};function c(t){t=r.beforeWrite(t),l.write(t),r.afterWrite(t)}n(i,{close:a,open:a,write:function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return c(e.join(""))},writeln:function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return c(e.join("")+"\n")}});var h=l.win.onerror||a;return l.win.onerror=function(t,e,n){r.error({msg:t+" - "+e+": "+n}),h.apply(l.win,[t,e,n])},l.write(e,function(){n(i,s),l.win.onerror=h,r.done(),l=null,f()}),l}.apply(void 0,t),e.afterStreamStart()}}function p(t,e,r){if(i.isFunction(r))r={done:r};else if("clear"===r)return c=[],l=null,void(u=0);r=i.defaults(r,s);var n=[t=/^#/.test(t)?window.document.getElementById(t.substr(1)):t.jquery?t[0]:t,e,r];return t.postscribe={cancel:function(){n.stream?n.stream.abort():n[1]=a}},r.beforeEnqueue(n),c.push(n),l||f(),t.postscribe}n(p,{streams:{},queue:c,WriteStream:o.default})},function(t,e,r){"use strict";e.__esModule=!0;var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o=function(t){return t&&t.__esModule?t:{default:t}}(r(3)),i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(r(4));var a="data-ps-";function s(t,e){var r=a+e,n=t.getAttribute(r);return i.existy(n)?String(n):n}function u(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=a+e;i.existy(r)&&""!==r?t.setAttribute(n,r):t.removeAttribute(n)}var c=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.root=e,this.options=r,this.doc=e.ownerDocument,this.win=this.doc.defaultView||this.doc.parentWindow,this.parser=new o.default("",{autoFix:r.autoFix}),this.actuals=[e],this.proxyHistory="",this.proxyRoot=this.doc.createElement(e.nodeName),this.scriptStack=[],this.writeQueue=[],u(this.proxyRoot,"proxyof",0)}return t.prototype.write=function(){var t;for((t=this.writeQueue).push.apply(t,arguments);!this.deferredRemote&&this.writeQueue.length;){var e=this.writeQueue.shift();i.isFunction(e)?this._callFunction(e):this._writeImpl(e)}},t.prototype._callFunction=function(t){var e={type:"function",value:t.name||t.toString()};this._onScriptStart(e),t.call(this.win,this.doc),this._onScriptDone(e)},t.prototype._writeImpl=function(t){this.parser.append(t);for(var e=void 0,r=void 0,n=void 0,o=[];(e=this.parser.readToken())&&!(r=i.isScript(e))&&!(n=i.isStyle(e));)(e=this.options.beforeWriteToken(e))&&o.push(e);o.length>0&&this._writeStaticTokens(o),r&&this._handleScriptToken(e),n&&this._handleStyleToken(e)},t.prototype._writeStaticTokens=function(t){var e=this._buildChunk(t);return e.actual?(e.html=this.proxyHistory+e.actual,this.proxyHistory+=e.proxy,this.proxyRoot.innerHTML=e.html,this._walkChunk(),e):null},t.prototype._buildChunk=function(t){for(var e=this.actuals.length,r=[],n=[],o=[],i=t.length,s=0;s<i;s++){var u=t[s],c=u.toString();if(r.push(c),u.attrs){if(!/^noscript$/i.test(u.tagName)){var l=e++;n.push(c.replace(/(\/?>)/," "+a+"id="+l+" $1")),"ps-script"!==u.attrs.id&&"ps-style"!==u.attrs.id&&o.push("atomicTag"===u.type?"":"<"+u.tagName+" "+a+"proxyof="+l+(u.unary?" />":">"))}}else n.push(c),o.push("endTag"===u.type?c:"")}return{tokens:t,raw:r.join(""),actual:n.join(""),proxy:o.join("")}},t.prototype._walkChunk=function(){for(var t=void 0,e=[this.proxyRoot];i.existy(t=e.shift());){var r=1===t.nodeType;if(!(r&&s(t,"proxyof"))){r&&(this.actuals[s(t,"id")]=t,u(t,"id"));var n=t.parentNode&&s(t.parentNode,"proxyof");n&&this.actuals[n].appendChild(t)}e.unshift.apply(e,i.toArray(t.childNodes))}},t.prototype._handleScriptToken=function(t){var e=this,r=this.parser.clear();r&&this.writeQueue.unshift(r),t.src=t.attrs.src||t.attrs.SRC,(t=this.options.beforeWriteToken(t))&&(t.src&&this.scriptStack.length?this.deferredRemote=t:this._onScriptStart(t),this._writeScriptToken(t,function(){e._onScriptDone(t)}))},t.prototype._handleStyleToken=function(t){var e=this.parser.clear();e&&this.writeQueue.unshift(e),t.type=t.attrs.type||t.attrs.TYPE||"text/css",(t=this.options.beforeWriteToken(t))&&this._writeStyleToken(t),e&&this.write()},t.prototype._writeStyleToken=function(t){var e=this._buildStyle(t);this._insertCursor(e,"ps-style"),t.content&&(e.styleSheet&&!e.sheet?e.styleSheet.cssText=t.content:e.appendChild(this.doc.createTextNode(t.content)))},t.prototype._buildStyle=function(t){var e=this.doc.createElement(t.tagName);return e.setAttribute("type",t.type),i.eachKey(t.attrs,function(t,r){e.setAttribute(t,r)}),e},t.prototype._insertCursor=function(t,e){this._writeImpl('<span id="'+e+'"/>');var r=this.doc.getElementById(e);r&&r.parentNode.replaceChild(t,r)},t.prototype._onScriptStart=function(t){t.outerWrites=this.writeQueue,this.writeQueue=[],this.scriptStack.unshift(t)},t.prototype._onScriptDone=function(t){t===this.scriptStack[0]?(this.scriptStack.shift(),this.write.apply(this,t.outerWrites),!this.scriptStack.length&&this.deferredRemote&&(this._onScriptStart(this.deferredRemote),this.deferredRemote=null)):this.options.error({msg:"Bad script nesting or script finished twice"})},t.prototype._writeScriptToken=function(t,e){var r=this._buildScript(t),n=this._shouldRelease(r),o=this.options.afterAsync;t.src&&(r.src=t.src,this._scriptLoadHandler(r,n?o:function(){e(),o()}));try{this._insertCursor(r,"ps-script"),r.src&&!n||e()}catch(t){this.options.error(t),e()}},t.prototype._buildScript=function(t){var e=this.doc.createElement(t.tagName);return i.eachKey(t.attrs,function(t,r){e.setAttribute(t,r)}),t.content&&(e.text=t.content),e},t.prototype._scriptLoadHandler=function(t,e){function r(){t=t.onload=t.onreadystatechange=t.onerror=null}var o=this.options.error;function i(){r(),null!=e&&e(),e=null}function a(t){r(),o(t),null!=e&&e(),e=null}function s(t,e){var r=t["on"+e];null!=r&&(t["_on"+e]=r)}s(t,"load"),s(t,"error"),n(t,{onload:function(){if(t._onload)try{t._onload.apply(this,Array.prototype.slice.call(arguments,0))}catch(e){a({msg:"onload handler failed "+e+" @ "+t.src})}i()},onerror:function(){if(t._onerror)try{t._onerror.apply(this,Array.prototype.slice.call(arguments,0))}catch(e){return void a({msg:"onerror handler failed "+e+" @ "+t.src})}a({msg:"remote script failed "+t.src})},onreadystatechange:function(){/^(loaded|complete)$/.test(t.readyState)&&i()}})},t.prototype._shouldRelease=function(t){return!/^script$/i.test(t.nodeName)||!!(this.options.releaseAsync&&t.src&&t.hasAttribute("async"))},t}();e.default=c},function(t,e,r){

!function(e,r){t.exports=r()}(0,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}return r.m=t,r.c=e,r.p="",r(0)}([function(t,e,r){"use strict";var n=function(t){return t&&t.__esModule?t:{default:t}}(r(1));t.exports=n.default},function(t,e,r){"use strict";e.__esModule=!0;var n=s(r(2)),o=s(r(3)),i=function(t){return t&&t.__esModule?t:{default:t}}(r(6)),a=r(5);function s(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}var u={comment:/^<!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},c=function(){function t(){var e=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.stream=r;var a=!1,s={};for(var u in n)n.hasOwnProperty(u)&&(o.autoFix&&(s[u+"Fix"]=!0),a=a||s[u+"Fix"]);a?(this._readToken=(0,i.default)(this,s,function(){return e._readTokenImpl()}),this._peekToken=(0,i.default)(this,s,function(){return e._peekTokenImpl()})):(this._readToken=this._readTokenImpl,this._peekToken=this._peekTokenImpl)}return t.prototype.append=function(t){this.stream+=t},t.prototype.prepend=function(t){this.stream=t+this.stream},t.prototype._readTokenImpl=function(){var t=this._peekTokenImpl();if(t)return this.stream=this.stream.slice(t.length),t},t.prototype._peekTokenImpl=function(){for(var t in u)if(u.hasOwnProperty(t)&&u[t].test(this.stream)){var e=o[t](this.stream);if(e)return"startTag"===e.type&&/script|style/i.test(e.tagName)?null:(e.text=this.stream.substr(0,e.length),e)}},t.prototype.peekToken=function(){return this._peekToken()},t.prototype.readToken=function(){return this._readToken()},t.prototype.readTokens=function(t){for(var e=void 0;e=this.readToken();)if(t[e.type]&&!1===t[e.type](e))return},t.prototype.clear=function(){var t=this.stream;return this.stream="",t},t.prototype.rest=function(){return this.stream},t}();for(var l in e.default=c,c.tokenToString=function(t){return t.toString()},c.escapeAttributes=function(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[r]=(0,a.escapeQuotes)(t[r],null));return e},c.supports=n,n)n.hasOwnProperty(l)&&(c.browserHasFlaw=c.browserHasFlaw||!n[l]&&l)},function(t,e){"use strict";e.__esModule=!0;var r=!1,n=!1,o=window.document.createElement("div");try{var i="<P><I></P></I>";o.innerHTML=i,e.tagSoup=r=o.innerHTML!==i}catch(t){e.tagSoup=r=!1}try{o.innerHTML="<P><i><P></P></i></P>",e.selfClose=n=2===o.childNodes.length}catch(t){e.selfClose=n=!1}o=null,e.tagSoup=r,e.selfClose=n},function(t,e,r){"use strict";e.__esModule=!0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.comment=function(t){var e=t.indexOf("--\x3e");if(e>=0)return new o.CommentToken(t.substr(4,e-1),e+3)},e.chars=function(t){var e=t.indexOf("<");return new o.CharsToken(e>=0?e:t.length)},e.startTag=a,e.atomicTag=function(t){var e=a(t);if(e){var r=t.slice(e.length);if(r.match(new RegExp("</\\s*"+e.tagName+"\\s*>","i"))){var n=r.match(new RegExp("([\\s\\S]*?)</\\s*"+e.tagName+"\\s*>","i"));if(n)return new o.AtomicTagToken(e.tagName,n[0].length+e.length,e.attrs,e.booleanAttrs,n[1])}}},e.endTag=function(t){var e=t.match(i.endTag);if(e)return new o.EndTagToken(e[1],e[0].length)};var o=r(4),i={startTag:/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,endTag:/^<\/([\-A-Za-z0-9_]+)[^>]*>/,attr:/(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,fillAttr:/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i};function a(t){if(-1!==t.indexOf(">")){var e=t.match(i.startTag);if(e){var r=function(){var t={},r={},n=e[2];return e[2].replace(i.attr,function(e,o){arguments[2]||arguments[3]||arguments[4]||arguments[5]?arguments[5]?(t[arguments[5]]="",r[arguments[5]]=!0):t[o]=arguments[2]||arguments[3]||arguments[4]||i.fillAttr.test(o)&&o||"":t[o]="",n=n.replace(e,"")}),{v:new o.StartTagToken(e[1],e[0].length,t,r,!!e[3],n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""))}}();if("object"===(void 0===r?"undefined":n(r)))return r.v}}}},function(t,e,r){"use strict";e.__esModule=!0,e.EndTagToken=e.AtomicTagToken=e.StartTagToken=e.TagToken=e.CharsToken=e.CommentToken=e.Token=void 0;var n=r(5);function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}e.Token=function t(e,r){o(this,t),this.type=e,this.length=r,this.text=""},e.CommentToken=function(){function t(e,r){o(this,t),this.type="comment",this.length=r||(e?e.length:0),this.text="",this.content=e}return t.prototype.toString=function(){return"\x3c!--"+this.content},t}(),e.CharsToken=function(){function t(e){o(this,t),this.type="chars",this.length=e,this.text=""}return t.prototype.toString=function(){return this.text},t}();var i=e.TagToken=function(){function t(e,r,n,i,a){o(this,t),this.type=e,this.length=n,this.text="",this.tagName=r,this.attrs=i,this.booleanAttrs=a,this.unary=!1,this.html5Unary=!1}return t.formatTag=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r="<"+t.tagName;for(var o in t.attrs)if(t.attrs.hasOwnProperty(o)){r+=" "+o;var i=t.attrs[o];void 0!==t.booleanAttrs&&void 0!==t.booleanAttrs[o]||(r+='="'+(0,n.escapeQuotes)(i)+'"')}return t.rest&&(r+=" "+t.rest),t.unary&&!t.html5Unary?r+="/>":r+=">",void 0!==e&&null!==e&&(r+=e+"</"+t.tagName+">"),r},t}();e.StartTagToken=function(){function t(e,r,n,i,a,s){o(this,t),this.type="startTag",this.length=r,this.text="",this.tagName=e,this.attrs=n,this.booleanAttrs=i,this.html5Unary=!1,this.unary=a,this.rest=s}return t.prototype.toString=function(){return i.formatTag(this)},t}(),e.AtomicTagToken=function(){function t(e,r,n,i,a){o(this,t),this.type="atomicTag",this.length=r,this.text="",this.tagName=e,this.attrs=n,this.booleanAttrs=i,this.unary=!1,this.html5Unary=!1,this.content=a}return t.prototype.toString=function(){return i.formatTag(this,this.content)},t}(),e.EndTagToken=function(){function t(e,r){o(this,t),this.type="endTag",this.length=r,this.text="",this.tagName=e}return t.prototype.toString=function(){return"</"+this.tagName+">"},t}()},function(t,e){"use strict";e.__esModule=!0,e.escapeQuotes=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return t?t.replace(/([^"]*)"/g,function(t,e){return/\\/.test(e)?e+'"':e+'\\"'}):e}},function(t,e){"use strict";e.__esModule=!0,e.default=function(t,e,r){var a=function(){var t=[];return t.last=function(){return this[this.length-1]},t.lastTagNameEq=function(t){var e=this.last();return e&&e.tagName&&e.tagName.toUpperCase()===t.toUpperCase()},t.containsTagName=function(t){for(var e,r=0;e=this[r];r++)if(e.tagName===t)return!0;return!1},t}(),s={startTag:function(r){var o=r.tagName;"TR"===o.toUpperCase()&&a.lastTagNameEq("TABLE")?(t.prepend("<TBODY>"),u()):e.selfCloseFix&&n.test(o)&&a.containsTagName(o)?a.lastTagNameEq(o)?i(t,a):(t.prepend("</"+r.tagName+">"),u()):r.unary||a.push(r)},endTag:function(n){var o=a.last();o?e.tagSoupFix&&!a.lastTagNameEq(n.tagName)?i(t,a):a.pop():e.tagSoupFix&&(r(),u())}};function u(){var e=function(t,e){var r=t.stream,n=o(e());return t.stream=r,n}(t,r);e&&s[e.type]&&s[e.type](e)}return function(){return u(),o(r())}};var r=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,n=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;function o(t){return t&&"startTag"===t.type&&(t.unary=r.test(t.tagName)||t.unary,t.html5Unary=!/\/>$/.test(t.text)),t}function i(t,e){var r=e.pop();t.prepend("</"+r.tagName+">")}}])})},function(t,e){"use strict";e.__esModule=!0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function n(t){return void 0!==t&&null!==t}function o(t,e,r){var n=void 0,o=t&&t.length||0;for(n=0;n<o;n++)e.call(r,t[n],n)}function i(t,e,r){for(var n in t)t.hasOwnProperty(n)&&e.call(r,n,t[n])}function a(t,e){return!(!t||"startTag"!==t.type&&"atomicTag"!==t.type||!("tagName"in t))&&!!~t.tagName.toLowerCase().indexOf(e)}e.existy=n,e.isFunction=function(t){return"function"==typeof t},e.each=o,e.eachKey=i,e.defaults=function(t,e){return t=t||{},i(e,function(e,r){n(t[e])||(t[e]=r)}),t},e.toArray=function(t){try{return Array.prototype.slice.call(t)}catch(n){var e=function(){var e=[];return o(t,function(t){e.push(t)}),{v:e}}();if("object"===(void 0===e?"undefined":r(e)))return e.v}},e.last=function(t){return t[t.length-1]},e.isTag=a,e.isScript=function(t){return a(t,"script")},e.isStyle=function(t){return a(t,"style")}}])})}]);
var fallback_c56e17f13eaa4b498ad5c5025d72189d_1627941339796 = '';
fallback_c56e17f13eaa4b498ad5c5025d72189d_1627941339796 = fallback_c56e17f13eaa4b498ad5c5025d72189d_1627941339796.replace(/\[yo_cb\]/g, Math.floor(Date.now()));
fallback_c56e17f13eaa4b498ad5c5025d72189d_1627941339796 = fallback_c56e17f13eaa4b498ad5c5025d72189d_1627941339796.replace(/\[yo_page_url\]/g, 'https://www.a3manga.com/');
var backup_c56e17f13eaa4b498ad5c5025d72189d_1627941339796  = document.createElement("div");
var endpoint = 'delivery';
backup_c56e17f13eaa4b498ad5c5025d72189d_1627941339796.setAttribute('id', 'yomedia-passback-c56e17f13eaa4b498ad5c5025d72189d' + '-' + Date.now());
var currentScript_c56e17f13eaa4b498ad5c5025d72189d_1627941339796 = document.currentScript || (function() {
	var script = null;
	Array.prototype.slice.call(document.getElementsByTagName("script")).forEach(function(a) {
		null === script && 0 <= a.src.indexOf("delivery.yomedia.vn") && 0 <= a.src.indexOf("pid=c56e17f13eaa4b498ad5c5025d72189d") && (script = a)
	});
	return script;
})();
var nextNode = currentScript_c56e17f13eaa4b498ad5c5025d72189d_1627941339796.nextSibling;
if (nextNode) {
	nextNode.parentNode.insertBefore(backup_c56e17f13eaa4b498ad5c5025d72189d_1627941339796, nextNode);
} else {
	currentScript_c56e17f13eaa4b498ad5c5025d72189d_1627941339796.parentNode.appendChild(backup_c56e17f13eaa4b498ad5c5025d72189d_1627941339796);
}
if (currentScript_c56e17f13eaa4b498ad5c5025d72189d_1627941339796.async) {
	var insert_c56e17f13eaa4b498ad5c5025d72189d_1627941339796 = false;
	window.addEventListener("load", function(event) {
		if (insert_c56e17f13eaa4b498ad5c5025d72189d_1627941339796 == false) {
			insert_c56e17f13eaa4b498ad5c5025d72189d_1627941339796 = true;
			yomediajs.postscribe(backup_c56e17f13eaa4b498ad5c5025d72189d_1627941339796, fallback_c56e17f13eaa4b498ad5c5025d72189d_1627941339796);
		}
	});
	setTimeout(function() {
		if (insert_c56e17f13eaa4b498ad5c5025d72189d_1627941339796 == false) {
			insert_c56e17f13eaa4b498ad5c5025d72189d_1627941339796 = true;
			yomediajs.postscribe(backup_c56e17f13eaa4b498ad5c5025d72189d_1627941339796, fallback_c56e17f13eaa4b498ad5c5025d72189d_1627941339796);
		}
	}, 1000);
} else {
	//window.addEventListener("DOMContentLoaded", function(event) {
		yomediajs.postscribe(backup_c56e17f13eaa4b498ad5c5025d72189d_1627941339796, fallback_c56e17f13eaa4b498ad5c5025d72189d_1627941339796);
	//});
}



function isHTML_c56e17f13eaa4b498ad5c5025d72189d_1627941339796(str) {
	var a = document.createElement('div');
	a.innerHTML = str;

	for (var c = a.childNodes, i = c.length; i--; ) {
		if (c[i].nodeType == 1) return true; 
	}
	return false;
}

// http
var __yoComScore = __yoComScore || [];
    if (__yoComScore.indexOf("2016070110000000006") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000006" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000006");
}
    if (__yoComScore.indexOf("2016070110000000001") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000001" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000001");
}
    if (__yoComScore.indexOf("2016070110000000022") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000022" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000022");
}
    if (__yoComScore.indexOf("2016070110000000008") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000008" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000008");
}
    if (__yoComScore.indexOf("2016070110000000002") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000002" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000002");
}
    if (__yoComScore.indexOf("2016070110000000022") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000022" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000022");
}
    if (__yoComScore.indexOf("2016070110000000037") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000037" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000037");
}
    if (__yoComScore.indexOf("2016070110000000006") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000006" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000006");
}
    if (__yoComScore.indexOf("2016070110000000002") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000002" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000002");
}
    if (__yoComScore.indexOf("2016070110000000009") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000009" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000009");
}
    if (__yoComScore.indexOf("2016070110000000009") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000009" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000009");
}
    if (__yoComScore.indexOf("2016070110000000007") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000007" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000007");
}
    if (__yoComScore.indexOf("2016070110000000020") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000020" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000020");
}
    if (__yoComScore.indexOf("2016070110000000022") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000022" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000022");
}
    if (__yoComScore.indexOf("2016070110000000007") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000007" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000007");
}
    if (__yoComScore.indexOf("2016070110000000020") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000020" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000020");
}
    if (__yoComScore.indexOf("2016070110000000002") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000002" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000002");
}
    if (__yoComScore.indexOf("2016070110000000033") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000033" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000033");
}
    if (__yoComScore.indexOf("2016070110000000001") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000001" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000001");
}
    if (__yoComScore.indexOf("2016070110000000022") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000022" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000022");
}
    if (__yoComScore.indexOf("2016070110000000006") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000006" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000006");
}
    if (__yoComScore.indexOf("2016070110000000021") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000021" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000021");
}
    if (__yoComScore.indexOf("2016070110000000006") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000006" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000006");
}
    if (__yoComScore.indexOf("2016070110000000022") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000022" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000022");
}
    if (__yoComScore.indexOf("2016070110000000009") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000009" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000009");
}
    if (__yoComScore.indexOf("2016070110000000006") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000006" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000006");
}
    if (__yoComScore.indexOf("2016070110000000020") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000020" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000020");
}
    if (__yoComScore.indexOf("2016070110000000008") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000008" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000008");
}
    if (__yoComScore.indexOf("2016070110000000021") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000021" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000021");
}
    if (__yoComScore.indexOf("2016070110000000036") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000036" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000036");
}
    if (__yoComScore.indexOf("2016070110000000022") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000022" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000022");
}
    if (__yoComScore.indexOf("2016070110000000022") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000022" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000022");
}
    if (__yoComScore.indexOf("2016070110000000036") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000036" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000036");
}
    if (__yoComScore.indexOf("2016070110000000002") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000002" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000002");
}
    if (__yoComScore.indexOf("2016070110000000007") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000007" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000007");
}
    if (__yoComScore.indexOf("2016090700000000015") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016090700000000015" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016090700000000015");
}
    if (__yoComScore.indexOf("2016070110000000002") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000002" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000002");
}
    if (__yoComScore.indexOf("2016070110000000001") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000001" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000001");
}
    if (__yoComScore.indexOf("2016070110000000021") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000021" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000021");
}
    if (__yoComScore.indexOf("2016070110000000020") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000020" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000020");
}
    if (__yoComScore.indexOf("2016070110000000001") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000001" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000001");
}
    if (__yoComScore.indexOf("2016070110000000022") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000022" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000022");
}
    if (__yoComScore.indexOf("2016070110000000031") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000031" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000031");
}
    if (__yoComScore.indexOf("2016070110000000008") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000008" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000008");
}
    if (__yoComScore.indexOf("2016070110000000030") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000030" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000030");
}
    if (__yoComScore.indexOf("2016070110000000001") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000001" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000001");
}
    if (__yoComScore.indexOf("2016070110000000008") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000008" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000008");
}
    if (__yoComScore.indexOf("2016070110000000021") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000021" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000021");
}
    if (__yoComScore.indexOf("2016070110000000008") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000008" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000008");
}
    if (__yoComScore.indexOf("2016070110000000002") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000002" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000002");
}
    if (__yoComScore.indexOf("2016070110000000022") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000022" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000022");
}
    if (__yoComScore.indexOf("2016070110000000022") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000022" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000022");
}
    if (__yoComScore.indexOf("2016070110000000022") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000022" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000022");
}
    if (__yoComScore.indexOf("2016070110000000002") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000002" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000002");
}
    if (__yoComScore.indexOf("2016070110000000008") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000008" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000008");
}
    if (__yoComScore.indexOf("2016070110000000003") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000003" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000003");
}
    if (__yoComScore.indexOf("2016070110000000022") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000022" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000022");
}
    if (__yoComScore.indexOf("2016070110000000021") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000021" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000021");
}
    if (__yoComScore.indexOf("2016070110000000022") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000022" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000022");
}
    if (__yoComScore.indexOf("2016070110000000007") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000007" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000007");
}
    if (__yoComScore.indexOf("2016070110000000009") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000009" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000009");
}
    if (__yoComScore.indexOf("2016070110000000006") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000006" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000006");
}
    if (__yoComScore.indexOf("2016070110000000030") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000030" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000030");
}
    if (__yoComScore.indexOf("2016070110000000020") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000020" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000020");
}
    if (__yoComScore.indexOf("2016070110000000030") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000030" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000030");
}
    if (__yoComScore.indexOf("2016070110000000022") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000022" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000022");
}
    if (__yoComScore.indexOf("2016070110000000008") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000008" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000008");
}
    if (__yoComScore.indexOf("2016070110000000007") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000007" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000007");
}
    if (__yoComScore.indexOf("2016070110000000007") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000007" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000007");
}
    if (__yoComScore.indexOf("2016070110000000022") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000022" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000022");
}
    if (__yoComScore.indexOf("2016070110000000008") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000008" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000008");
}
    if (__yoComScore.indexOf("2016090700000000015") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016090700000000015" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016090700000000015");
}
    if (__yoComScore.indexOf("2016070110000000020") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000020" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000020");
}
    if (__yoComScore.indexOf("2016070110000000020") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000020" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000020");
}
    if (__yoComScore.indexOf("2016070110000000006") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000006" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000006");
}
    if (__yoComScore.indexOf("2016070110000000009") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000009" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000009");
}
    if (__yoComScore.indexOf("2016090700000000015") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016090700000000015" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016090700000000015");
}
    if (__yoComScore.indexOf("2016070110000000001") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000001" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000001");
}
    if (__yoComScore.indexOf("2016070110000000001") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000001" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000001");
}
    if (__yoComScore.indexOf("2016070110000000022") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000022" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000022");
}
    if (__yoComScore.indexOf("2016070110000000002") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000002" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000002");
}
    if (__yoComScore.indexOf("2016070110000000008") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000008" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000008");
}
    if (__yoComScore.indexOf("2016070110000000002") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000002" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000002");
}
    if (__yoComScore.indexOf("2016070110000000036") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000036" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000036");
}
    if (__yoComScore.indexOf("2016070110000000036") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000036" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000036");
}
    if (__yoComScore.indexOf("2016070110000000020") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000020" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000020");
}
    if (__yoComScore.indexOf("2016070110000000006") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000006" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000006");
}
    if (__yoComScore.indexOf("2016070110000000020") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000020" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000020");
}
    if (__yoComScore.indexOf("2016070110000000036") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000036" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000036");
}
    if (__yoComScore.indexOf("2016070110000000009") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000009" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000009");
}
    if (__yoComScore.indexOf("2016070110000000006") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000006" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000006");
}
    if (__yoComScore.indexOf("2016070110000000002") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000002" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000002");
}
    if (__yoComScore.indexOf("2016070110000000008") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000008" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000008");
}
    if (__yoComScore.indexOf("2016070110000000008") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000008" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000008");
}
    if (__yoComScore.indexOf("2016070110000000008") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000008" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000008");
}
    if (__yoComScore.indexOf("2016070110000000020") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000020" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000020");
}
    if (__yoComScore.indexOf("2016070110000000002") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000002" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000002");
}
    if (__yoComScore.indexOf("2016070110000000008") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000008" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000008");
}
    if (__yoComScore.indexOf("2016070110000000009") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000009" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000009");
}
    if (__yoComScore.indexOf("2016070110000000009") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000009" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000009");
}
    if (__yoComScore.indexOf("2016070110000000008") === -1) {
    var _comscore = _comscore || [];
    _comscore.push({ c1: "8", c2: "18889311" ,c3: "2016070110000000008" });
    (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
    })();
    __yoComScore.push("2016070110000000008");
}


//flight: 

