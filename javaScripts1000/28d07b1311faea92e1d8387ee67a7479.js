var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function s(e){try{f(n.next(e))}catch(t){i(t)}}function l(e){try{f(n["throw"](e))}catch(t){i(t)}}function f(e){e.done?r(e.value):a(e.value).then(s,l)}f((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function l(e){return function(t){return f([e,t])}}function f(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;a=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(s[0]===6&&r.label<i[1]){r.label=i[1];i=s;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(s);break}if(i[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(l){s=[6,l];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),a=0,t=0;t<r;t++)for(var i=arguments[t],s=0,l=i.length;s<l;s++,a++)n[a]=i[s];return n};System.register([],(function(e,t){"use strict";return{execute:function(){var r=this;var n=e("N","tm-global-elements");var a;var i;var s=false;var l=0;var f=false;var o=e("w",typeof window!=="undefined"?window:{});var u=e("C",o.CSS);var $=e("d",o.document||{head:{}});var c=e("p",{$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)},ce:function(e,t){return new CustomEvent(e,t)}});var v=function(){return($.head.attachShadow+"").indexOf("[native")>-1}();var d=e("a",(function(e){return Promise.resolve(e)}));var h=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var p=function(e,t,r,n){if(r){r.map((function(r){var n=r[0],a=r[1],i=r[2];var s=g(e,n);var l=m(t,i);var f=y(n);c.ael(s,a,l,f);(t.$rmListeners$=t.$rmListeners$||[]).push((function(){return c.rel(s,a,l,f)}))}))}};var m=function(e,t){return function(r){{if(e.$flags$&256){e.$lazyInstance$[t](r)}else{(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,r])}}}};var g=function(e,t){if(t&4)return $;return e};var y=function(e){return(e&2)!==0};var b="{visibility:hidden}.hydrated{visibility:inherit}";var w=function(e,t){if(t===void 0){t=""}{return function(){return}}};var S=function(e,t){{return function(){return}}};var _=new WeakMap;var R=function(e,t,r){var n=Me.get(e);if(h&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}Me.set(e,n)};var x=function(e,t,r,n){var a=L(t);var i=Me.get(a);e=e.nodeType===11?e:$;if(i){if(typeof i==="string"){e=e.head||e;var s=_.get(e);var l=void 0;if(!s){_.set(e,s=new Set)}if(!s.has(a)){{if(c.$cssShim$){l=c.$cssShim$.createHostStyle(n,a,i,!!(t.$flags$&10));var f=l["s-sc"];if(f){a=f;s=null}}else{l=$.createElement("style");l.innerHTML=i}e.insertBefore(l,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var N=function(e){var t=e.$cmpMeta$;var r=e.$hostElement$;var n=t.$flags$;var a=w("attachStyles",t.$tagName$);var i=x(v&&r.shadowRoot?r.shadowRoot:r.getRootNode(),t,e.$modeName$,r);if(n&10){r["s-sc"]=i;r.classList.add(i+"-h")}a()};var L=function(e,t){return"sc-"+e.$tagName$};var C={};var j="http://www.w3.org/2000/svg";var E="http://www.w3.org/1999/xhtml";var M=function(e){return e!=null};var O=function(){};var P=function(e){e=typeof e;return e==="object"||e==="function"};var k=typeof Deno!=="undefined";var A=!k&&typeof global!=="undefined"&&typeof require==="function"&&!!global.process&&typeof __filename==="string"&&(!global.origin||typeof global.origin!=="string");var T=k&&Deno.build.os==="windows";var I=A?process.cwd:k?Deno.cwd:function(){return"/"};var q=A?process.exit:k?Deno.exit:O;var B=e("h",(function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=false;var s=false;var l=[];var f=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!P(a)){a=String(a)}if(i&&s){l[l.length-1].$text$+=a}else{l.push(i?U(null,a):a)}s=i}}};f(r);if(t){{var o=t.className||t.class;if(o){t.class=typeof o!=="object"?o:Object.keys(o).filter((function(e){return o[e]})).join(" ")}}}var u=U(e,null);u.$attrs$=t;if(l.length>0){u.$children$=l}return u}));var U=function(e,t){var r={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{r.$attrs$=null}return r};var z=e("H",{});var H=function(e){return e&&e.$tag$===z};var D=function(e,t,r,n,a,i){if(r!==n){var s=Le(e,t);var l=t.toLowerCase();if(t==="class"){var f=e.classList;var u=W(r);var $=W(n);f.remove.apply(f,u.filter((function(e){return e&&!$.includes(e)})));f.add.apply(f,$.filter((function(e){return e&&!u.includes(e)})))}else if(t==="style"){{for(var v in r){if(!n||n[v]==null){if(v.includes("-")){e.style.removeProperty(v)}else{e.style[v]=""}}}}for(var v in n){if(!r||n[v]!==r[v]){if(v.includes("-")){e.style.setProperty(v,n[v])}else{e.style[v]=n[v]}}}}else if(t==="ref"){if(n){n(e)}}else if(!s&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(Le(o,l)){t=l.slice(2)}else{t=l[2]+t.slice(3)}if(r){c.rel(e,t,r,false)}if(n){c.ael(e,t,n,false)}}else{var d=P(n);if((s||d&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var h=n==null?"":n;if(t==="list"){s=false}else if(r==null||e[t]!=h){e[t]=h}}else{e[t]=n}}catch(p){}}if(n==null||n===false){if(n!==false||e.getAttribute(t)===""){{e.removeAttribute(t)}}}else if((!s||i&4||a)&&!d){n=n===true?"":n;{e.setAttribute(t,n)}}}}};var V=/\s/;var W=function(e){return!e?[]:e.split(V)};var F=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||C;var s=t.$attrs$||C;{for(n in i){if(!(n in s)){D(a,n,i[n],undefined,r,t.$flags$)}}}for(n in s){D(a,n,i[n],s[n],r,t.$flags$)}};var G=function(e,t,r,n){var i=t.$children$[r];var l=0;var f;var o;if(i.$text$!==null){f=i.$elm$=$.createTextNode(i.$text$)}else{if(!s){s=i.$tag$==="svg"}f=i.$elm$=$.createElementNS(s?j:E,i.$tag$);if(s&&i.$tag$==="foreignObject"){s=false}{F(null,i,s)}if(M(a)&&f["s-si"]!==a){f.classList.add(f["s-si"]=a)}if(i.$children$){for(l=0;l<i.$children$.length;++l){o=G(e,i,l);if(o){f.appendChild(o)}}}{if(i.$tag$==="svg"){s=false}else if(f.tagName==="foreignObject"){s=true}}}return f};var Q=function(e,t,r,n,a,s){var l=e;var f;if(l.shadowRoot&&l.tagName===i){l=l.shadowRoot}for(;a<=s;++a){if(n[a]){f=G(null,r,a);if(f){n[a].$elm$=f;l.insertBefore(f,t)}}}};var J=function(e,t,r,n,a){for(;t<=r;++t){if(n=e[t]){a=n.$elm$;Z(n);a.remove()}}};var K=function(e,t,r,n){var a=0;var i=0;var s=t.length-1;var l=t[0];var f=t[s];var o=n.length-1;var u=n[0];var $=n[o];var c;while(a<=s&&i<=o){if(l==null){l=t[++a]}else if(f==null){f=t[--s]}else if(u==null){u=n[++i]}else if($==null){$=n[--o]}else if(X(l,u)){Y(l,u);l=t[++a];u=n[++i]}else if(X(f,$)){Y(f,$);f=t[--s];$=n[--o]}else if(X(l,$)){Y(l,$);e.insertBefore(l.$elm$,f.$elm$.nextSibling);l=t[++a];$=n[--o]}else if(X(f,u)){Y(f,u);e.insertBefore(f.$elm$,l.$elm$);f=t[--s];u=n[++i]}else{{c=G(t&&t[i],r,i);u=n[++i]}if(c){{l.$elm$.parentNode.insertBefore(c,l.$elm$)}}}}if(a>s){Q(e,n[o+1]==null?null:n[o+1].$elm$,r,n,i,o)}else if(i>o){J(t,a,s)}};var X=function(e,t){if(e.$tag$===t.$tag$){return true}return false};var Y=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;var i=t.$tag$;var l=t.$text$;if(l===null){{s=i==="svg"?true:i==="foreignObject"?false:s}{{F(e,t,s)}}if(n!==null&&a!==null){K(r,n,t,a)}else if(a!==null){if(e.$text$!==null){r.textContent=""}Q(r,null,t,a,0,a.length-1)}else if(n!==null){J(n,0,n.length-1)}if(s&&i==="svg"){s=false}}else if(e.$text$!==l){r.data=l}};var Z=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(Z)}};var ee=function(e,t){var r=e.$hostElement$;var n=e.$cmpMeta$;var s=e.$vnode$||U(null,null);var l=H(t)?t:B(null,null,t);i=r.tagName;if(n.$attrsToReflect$){l.$attrs$=l.$attrs$||{};n.$attrsToReflect$.map((function(e){var t=e[0],n=e[1];return l.$attrs$[n]=r[t]}))}l.$tag$=null;l.$flags$|=4;e.$vnode$=l;l.$elm$=s.$elm$=r.shadowRoot||r;{a=r["s-sc"]}Y(s,l)};var te=e("g",(function(e){return Re(e).$hostElement$}));var re=e("c",(function(e,t,r){var n=te(e);return{emit:function(e){return ne(n,t,{bubbles:!!(r&4),composed:!!(r&2),cancelable:!!(r&1),detail:e})}}}));var ne=function(e,t,r){var n=c.ce(t,r);e.dispatchEvent(n);return n};var ae=function(e,t){if(t&&!e.$onRenderResolve$&&t["s-p"]){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))}};var ie=function(e,t){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}ae(e,e.$ancestorComponent$);var r=function(){return se(e,t)};return Ue(r)};var se=function(e,t){var r=w("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$lazyInstance$;var a;if(t){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.map((function(e){var t=e[0],r=e[1];return ce(n,t,r)}));e.$queuedListeners$=null}}{a=ce(n,"componentWillLoad")}}r();return ve(a,(function(){return le(e,n,t)}))};var le=function(e,t,r){var n=e.$hostElement$;var a=w("update",e.$cmpMeta$.$tagName$);var i=n["s-rc"];if(r){N(e)}var s=w("render",e.$cmpMeta$.$tagName$);{{ee(e,fe(e,t))}}if(c.$cssShim$){c.$cssShim$.updateHost(n)}if(i){i.map((function(e){return e()}));n["s-rc"]=undefined}s();a();{var l=n["s-p"];var f=function(){return oe(e)};if(l.length===0){f()}else{Promise.all(l).then(f);e.$flags$|=4;l.length=0}}};var fe=function(e,t){try{t=t.render();{e.$flags$&=~16}{e.$flags$|=2}}catch(r){Ce(r)}return t};var oe=function(e){var t=e.$cmpMeta$.$tagName$;var r=e.$hostElement$;var n=w("postUpdate",t);var a=e.$lazyInstance$;var i=e.$ancestorComponent$;{ce(a,"componentDidRender")}if(!(e.$flags$&64)){e.$flags$|=64;{de(r)}n();{e.$onReadyResolve$(r);if(!i){$e()}}}else{n()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){Be((function(){return ie(e,false)}))}e.$flags$&=~(4|512)}};var ue=function(e){{var t=Re(e);var r=t.$hostElement$.isConnected;if(r&&(t.$flags$&(2|16))===2){ie(t,false)}return r}};var $e=function(e){{de($.documentElement)}{c.$flags$|=2}Be((function(){return ne(o,"appload",{detail:{namespace:n}})}))};var ce=function(e,t,r){if(e&&e[t]){try{return e[t](r)}catch(n){Ce(n)}}return undefined};var ve=function(e,t){return e&&e.then?e.then(t):t()};var de=function(e){return e.classList.add("hydrated")};var he=function(e,t){if(e!=null&&!P(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&1){return String(e)}return e}return e};var pe=function(e,t){return Re(e).$instanceValues$.get(t)};var me=function(e,t,r,n){var a=Re(e);var i=a.$instanceValues$.get(t);var s=a.$flags$;var l=a.$lazyInstance$;r=he(r,n.$members$[t][0]);if((!(s&8)||i===undefined)&&r!==i){a.$instanceValues$.set(t,r);if(l){if((s&(2|16))===2){ie(a,false)}}}};var ge=function(e,t,r){if(t.$members$){var n=Object.entries(t.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return pe(this,n)},set:function(e){me(this,n,e,t)},configurable:true,enumerable:true})}}));if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=this;c.jmp((function(){var t=i.get(e);n[t]=r===null&&typeof n[t]==="boolean"?false:r}))};e.observedAttributes=n.filter((function(e){var t=e[0],r=e[1];return r[0]&15})).map((function(e){var r=e[0],n=e[1];var a=n[1]||r;i.set(a,r);if(n[0]&512){t.$attrsToReflect$.push([r,a])}return a}))}}return e};var ye=function(e,n,a,i,s){return __awaiter(r,void 0,void 0,(function(){var e,r,i,l,f,o,u;return __generator(this,(function($){switch($.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;s=Ee(a);if(!s.then)return[3,2];e=S();return[4,s];case 1:s=$.sent();e();$.label=2;case 2:if(!s.isProxied){ge(s,a,2);s.isProxied=true}r=w("createInstance",a.$tagName$);{n.$flags$|=8}try{new s(n)}catch(c){Ce(c)}{n.$flags$&=~8}r();if(!s.style)return[3,5];i=s.style;l=L(a);if(!!Me.has(l))return[3,5];f=w("registerStyles",a.$tagName$);if(!(a.$flags$&8))return[3,4];return[4,t.import("./shadow-css-5f7cadc7.system.js").then((function(e){return e.scopeCss(i,l,false)}))];case 3:i=$.sent();$.label=4;case 4:R(l,i,!!(a.$flags$&1));f();$.label=5;case 5:o=n.$ancestorComponent$;u=function(){return ie(n,true)};if(o&&o["s-rc"]){o["s-rc"].push(u)}else{u()}return[2]}}))}))};var be=function(e){if((c.$flags$&1)===0){var t=Re(e);var r=t.$cmpMeta$;var n=w("connectedCallback",r.$tagName$);if(!(t.$flags$&1)){t.$flags$|=1;{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){ae(t,t.$ancestorComponent$=a);break}}}if(r.$members$){Object.entries(r.$members$).map((function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}}))}{Be((function(){return ye(e,t,r)}))}}else{p(e,t,r.$listeners$)}n()}};var we=function(e){if((c.$flags$&1)===0){var t=Re(e);{if(t.$rmListeners$){t.$rmListeners$.map((function(e){return e()}));t.$rmListeners$=undefined}}if(c.$cssShim$){c.$cssShim$.removeHost(e)}}};var Se=e("b",(function(e,t){if(t===void 0){t={}}var r=w();var n=[];var a=t.exclude||[];var i=o.customElements;var s=$.head;var l=s.querySelector("meta[charset]");var f=$.createElement("style");var u=[];var d;var h=true;Object.assign(c,t);c.$resourcesUrl$=new URL(t.resourcesUrl||"./",$.baseURI).href;{if(t.syncQueue){c.$flags$|=4}}e.map((function(e){return e[1].map((function(t){var r={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{r.$members$=t[2]}{r.$listeners$=t[3]}{r.$attrsToReflect$=[]}if(!v&&r.$flags$&1){r.$flags$|=8}var s=r.$tagName$;var l=function(e){__extends(t,e);function t(t){var n=e.call(this,t)||this;t=n;Ne(t,r);if(r.$flags$&1){if(v){{t.attachShadow({mode:"open"})}}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return n}t.prototype.connectedCallback=function(){var e=this;if(d){clearTimeout(d);d=null}if(h){u.push(this)}else{c.jmp((function(){return be(e)}))}};t.prototype.disconnectedCallback=function(){var e=this;c.jmp((function(){return we(e)}))};t.prototype.forceUpdate=function(){ue(this)};t.prototype.componentOnReady=function(){return Re(this).$onReadyPromise$};return t}(HTMLElement);r.$lazyBundleId$=e[0];if(!a.includes(s)&&!i.get(s)){n.push(s);i.define(s,ge(l,r,1))}}))}));{f.innerHTML=n+b;f.setAttribute("data-styles","");s.insertBefore(f,l?l.nextSibling:s.firstChild)}h=false;if(u.length){u.map((function(e){return e.connectedCallback()}))}else{{c.jmp((function(){return d=setTimeout($e,30)}))}}r()}));var _e=new WeakMap;var Re=function(e){return _e.get(e)};var xe=e("r",(function(e,t){return _e.set(t.$lazyInstance$=e,t)}));var Ne=function(e,t){var r={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}p(e,r,t.$listeners$);return _e.set(e,r)};var Le=function(e,t){return t in e};var Ce=function(e){return console.error(e)};var je=new Map;var Ee=function(e,r,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleId$;var s=je.get(i);if(s){return s[a]}return t.import("./"+i+".entry.js"+"").then((function(e){{je.set(i,e)}return e[a]}),Ce)};var Me=new Map;var Oe=[];var Pe=[];var ke=[];var Ae=function(e,t){return function(r){e.push(r);if(!f){f=true;if(t&&c.$flags$&4){Be(qe)}else{c.raf(qe)}}}};var Te=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(r){Ce(r)}}e.length=0};var Ie=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(a){Ce(a)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var qe=function(){{l++}Te(Oe);{var e=(c.$flags$&6)===2?performance.now()+14*Math.ceil(l*(1/10)):Infinity;Ie(Pe,e);Ie(ke,e);if(Pe.length>0){ke.push.apply(ke,Pe);Pe.length=0}if(f=Oe.length+Pe.length+ke.length>0){c.raf(qe)}else{l=0}}};var Be=function(e){return d().then(e)};var Ue=Ae(Pe,true)}}}));