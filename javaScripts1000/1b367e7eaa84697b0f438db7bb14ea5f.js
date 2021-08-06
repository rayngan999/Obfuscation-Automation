var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function s(e){try{l(n.next(e))}catch(t){i(t)}}function o(e){try{l(n["throw"](e))}catch(t){i(t)}}function l(e){e.done?r(e.value):a(e.value).then(s,o)}l((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;a=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(s[0]===6&&r.label<i[1]){r.label=i[1];i=s;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(s);break}if(i[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(o){s=[6,o];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),a=0,t=0;t<r;t++)for(var i=arguments[t],s=0,o=i.length;s<o;s++,a++)n[a]=i[s];return n};System.register([],(function(e,t){"use strict";return{execute:function(){var r=this;var n=e("N","tm-home");var a;var i;var s;var o=false;var l=false;var f=false;var $=false;var u=0;var c=false;var v=e("w",typeof window!=="undefined"?window:{});var d=e("C",v.CSS);var h=e("d",v.document||{head:{}});var p=e("p",{$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)},ce:function(e,t){return new CustomEvent(e,t)}});var m=function(){return(h.head.attachShadow+"").indexOf("[native")>-1}();var g=e("a",(function(e){return Promise.resolve(e)}));var y=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var b="{visibility:hidden}.hydrated{visibility:inherit}";var w=function(e,t){if(t===void 0){t=""}{return function(){return}}};var R=function(e,t){{return function(){return}}};var N=new WeakMap;var S=function(e,t,r){var n=Be.get(e);if(y&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}Be.set(e,n)};var _=function(e,t,r,n){var a=T(t);var i=Be.get(a);e=e.nodeType===11?e:h;if(i){if(typeof i==="string"){e=e.head||e;var s=N.get(e);var o=void 0;if(!s){N.set(e,s=new Set)}if(!s.has(a)){{if(p.$cssShim$){o=p.$cssShim$.createHostStyle(n,a,i,!!(t.$flags$&10));var l=o["s-sc"];if(l){a=l;s=null}}else{o=h.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var x=function(e){var t=e.$cmpMeta$;var r=e.$hostElement$;var n=t.$flags$;var a=w("attachStyles",t.$tagName$);var i=_(m&&r.shadowRoot?r.shadowRoot:r.getRootNode(),t,e.$modeName$,r);if(n&10){r["s-sc"]=i;r.classList.add(i+"-h")}a()};var T=function(e,t){return"sc-"+e.$tagName$};var C={};var E=function(e){return e!=null};var M=function(){};var j=function(e){e=typeof e;return e==="object"||e==="function"};var k=typeof Deno!=="undefined";var A=!k&&typeof global!=="undefined"&&typeof require==="function"&&!!global.process&&typeof __filename==="string"&&(!global.origin||typeof global.origin!=="string");var P=k&&Deno.build.os==="windows";var L=A?process.cwd:k?Deno.cwd:function(){return"/"};var B=A?process.exit:k?Deno.exit:M;var O=e("h",(function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=null;var s=false;var o=false;var l=[];var f=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(s=typeof e!=="function"&&!j(a)){a=String(a)}if(s&&o){l[l.length-1].$text$+=a}else{l.push(s?I(null,a):a)}o=s}}};f(r);if(t){if(t.name){i=t.name}{var $=t.className||t.class;if($){t.class=typeof $!=="object"?$:Object.keys($).filter((function(e){return $[e]})).join(" ")}}}var u=I(e,null);u.$attrs$=t;if(l.length>0){u.$children$=l}{u.$name$=i}return u}));var I=function(e,t){var r={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{r.$attrs$=null}{r.$name$=null}return r};var U=e("H",{});var H=function(e){return e&&e.$tag$===U};var z=function(e,t,r,n,a,i){if(r!==n){var s=ke(e,t);var o=t.toLowerCase();if(t==="class"){var l=e.classList;var f=q(r);var $=q(n);l.remove.apply(l,f.filter((function(e){return e&&!$.includes(e)})));l.add.apply(l,$.filter((function(e){return e&&!f.includes(e)})))}else if(t==="style"){{for(var u in r){if(!n||n[u]==null){if(u.includes("-")){e.style.removeProperty(u)}else{e.style[u]=""}}}}for(var u in n){if(!r||n[u]!==r[u]){if(u.includes("-")){e.style.setProperty(u,n[u])}else{e.style[u]=n[u]}}}}else if(!s&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(ke(v,o)){t=o.slice(2)}else{t=o[2]+t.slice(3)}if(r){p.rel(e,t,r,false)}if(n){p.ael(e,t,n,false)}}else{var c=j(n);if((s||c&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var d=n==null?"":n;if(t==="list"){s=false}else if(r==null||e[t]!=d){e[t]=d}}else{e[t]=n}}catch(h){}}if(n==null||n===false){if(n!==false||e.getAttribute(t)===""){{e.removeAttribute(t)}}}else if((!s||i&4||a)&&!c){n=n===true?"":n;{e.setAttribute(t,n)}}}}};var D=/\s/;var q=function(e){return!e?[]:e.split(D)};var V=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||C;var s=t.$attrs$||C;{for(n in i){if(!(n in s)){z(a,n,i[n],undefined,r,t.$flags$)}}}for(n in s){z(a,n,i[n],s[n],r,t.$flags$)}};var W=function(e,t,r,n){var l=t.$children$[r];var u=0;var c;var v;var d;if(!o){f=true;if(l.$tag$==="slot"){if(a){n.classList.add(a+"-s")}l.$flags$|=l.$children$?2:1}}if(l.$text$!==null){c=l.$elm$=h.createTextNode(l.$text$)}else if(l.$flags$&1){c=l.$elm$=h.createTextNode("")}else{c=l.$elm$=h.createElement(l.$flags$&2?"slot-fb":l.$tag$);{V(null,l,$)}if(E(a)&&c["s-si"]!==a){c.classList.add(c["s-si"]=a)}if(l.$children$){for(u=0;u<l.$children$.length;++u){v=W(e,l,u,c);if(v){c.appendChild(v)}}}}{c["s-hn"]=s;if(l.$flags$&(2|1)){c["s-sr"]=true;c["s-cr"]=i;c["s-sn"]=l.$name$||"";d=e&&e.$children$&&e.$children$[r];if(d&&d.$tag$===l.$tag$&&e.$elm$){F(e.$elm$,false)}}}return c};var F=function(e,t){p.$flags$|=1;var r=e.childNodes;for(var n=r.length-1;n>=0;n--){var a=r[n];if(a["s-hn"]!==s&&a["s-ol"]){Y(a).insertBefore(a,X(a));a["s-ol"].remove();a["s-ol"]=undefined;f=true}if(t){F(a,t)}}p.$flags$&=~1};var G=function(e,t,r,n,a,i){var o=e["s-cr"]&&e["s-cr"].parentNode||e;var l;if(o.shadowRoot&&o.tagName===s){o=o.shadowRoot}for(;a<=i;++a){if(n[a]){l=W(null,r,a,e);if(l){n[a].$elm$=l;o.insertBefore(l,X(t))}}}};var Q=function(e,t,r,n,a){for(;t<=r;++t){if(n=e[t]){a=n.$elm$;{l=true;if(a["s-ol"]){a["s-ol"].remove()}else{F(a,true)}}a.remove()}}};var J=function(e,t,r,n){var a=0;var i=0;var s=t.length-1;var o=t[0];var l=t[s];var f=n.length-1;var $=n[0];var u=n[f];var c;while(a<=s&&i<=f){if(o==null){o=t[++a]}else if(l==null){l=t[--s]}else if($==null){$=n[++i]}else if(u==null){u=n[--f]}else if(K(o,$)){Z(o,$);o=t[++a];$=n[++i]}else if(K(l,u)){Z(l,u);l=t[--s];u=n[--f]}else if(K(o,u)){if(o.$tag$==="slot"||u.$tag$==="slot"){F(o.$elm$.parentNode,false)}Z(o,u);e.insertBefore(o.$elm$,l.$elm$.nextSibling);o=t[++a];u=n[--f]}else if(K(l,$)){if(o.$tag$==="slot"||u.$tag$==="slot"){F(l.$elm$.parentNode,false)}Z(l,$);e.insertBefore(l.$elm$,o.$elm$);l=t[--s];$=n[++i]}else{{c=W(t&&t[i],r,i,e);$=n[++i]}if(c){{Y(o.$elm$).insertBefore(c,X(o.$elm$))}}}}if(a>s){G(e,n[f+1]==null?null:n[f+1].$elm$,r,n,i,f)}else if(i>f){Q(t,a,s)}};var K=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}return true}return false};var X=function(e){return e&&e["s-ol"]||e};var Y=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var Z=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;var i=t.$tag$;var s=t.$text$;var o;if(s===null){{if(i==="slot");else{V(e,t,$)}}if(n!==null&&a!==null){J(r,n,t,a)}else if(a!==null){if(e.$text$!==null){r.textContent=""}G(r,null,t,a,0,a.length-1)}else if(n!==null){Q(n,0,n.length-1)}}else if(o=r["s-cr"]){o.parentNode.textContent=s}else if(e.$text$!==s){r.data=s}};var ee=function(e){var t=e.childNodes;var r;var n;var a;var i;var s;var o;for(n=0,a=t.length;n<a;n++){r=t[n];if(r.nodeType===1){if(r["s-sr"]){s=r["s-sn"];r.hidden=false;for(i=0;i<a;i++){if(t[i]["s-hn"]!==r["s-hn"]){o=t[i].nodeType;if(s!==""){if(o===1&&s===t[i].getAttribute("slot")){r.hidden=true;break}}else{if(o===1||o===3&&t[i].textContent.trim()!==""){r.hidden=true;break}}}}}ee(r)}}};var te=[];var re=function(e){var t;var r;var n;var a;var i;var s;var o=0;var f=e.childNodes;var $=f.length;for(;o<$;o++){t=f[o];if(t["s-sr"]&&(r=t["s-cr"])){n=r.parentNode.childNodes;a=t["s-sn"];for(s=n.length-1;s>=0;s--){r=n[s];if(!r["s-cn"]&&!r["s-nr"]&&r["s-hn"]!==t["s-hn"]){if(ne(r,a)){i=te.find((function(e){return e.$nodeToRelocate$===r}));l=true;r["s-sn"]=r["s-sn"]||a;if(i){i.$slotRefNode$=t}else{te.push({$slotRefNode$:t,$nodeToRelocate$:r})}if(r["s-sr"]){te.map((function(e){if(ne(e.$nodeToRelocate$,r["s-sn"])){i=te.find((function(e){return e.$nodeToRelocate$===r}));if(i&&!e.$slotRefNode$){e.$slotRefNode$=i.$slotRefNode$}}}))}}else if(!te.some((function(e){return e.$nodeToRelocate$===r}))){te.push({$nodeToRelocate$:r})}}}}if(t.nodeType===1){re(t)}}};var ne=function(e,t){if(e.nodeType===1){if(e.getAttribute("slot")===null&&t===""){return true}if(e.getAttribute("slot")===t){return true}return false}if(e["s-sn"]===t){return true}return t===""};var ae=function(e,t){var r=e.$hostElement$;var n=e.$cmpMeta$;var $=e.$vnode$||I(null,null);var u=H(t)?t:O(null,null,t);s=r.tagName;if(n.$attrsToReflect$){u.$attrs$=u.$attrs$||{};n.$attrsToReflect$.map((function(e){var t=e[0],n=e[1];return u.$attrs$[n]=r[t]}))}u.$tag$=null;u.$flags$|=4;e.$vnode$=u;u.$elm$=$.$elm$=r.shadowRoot||r;{a=r["s-sc"]}{i=r["s-cr"];o=m&&(n.$flags$&1)!==0;l=false}Z($,u);{p.$flags$|=1;if(f){re(u.$elm$);var c=void 0;var v=void 0;var d=void 0;var g=void 0;var y=void 0;var b=void 0;var w=0;for(;w<te.length;w++){c=te[w];v=c.$nodeToRelocate$;if(!v["s-ol"]){d=h.createTextNode("");d["s-nr"]=v;v.parentNode.insertBefore(v["s-ol"]=d,v)}}for(w=0;w<te.length;w++){c=te[w];v=c.$nodeToRelocate$;if(c.$slotRefNode$){g=c.$slotRefNode$.parentNode;y=c.$slotRefNode$.nextSibling;d=v["s-ol"];while(d=d.previousSibling){b=d["s-nr"];if(b&&b["s-sn"]===v["s-sn"]&&g===b.parentNode){b=b.nextSibling;if(!b||!b["s-nr"]){y=b;break}}}if(!y&&g!==v.parentNode||v.nextSibling!==y){if(v!==y){if(!v["s-hn"]&&v["s-ol"]){v["s-hn"]=v["s-ol"].parentNode.nodeName}g.insertBefore(v,y)}}}else{if(v.nodeType===1){v.hidden=true}}}}if(l){ee(u.$elm$)}p.$flags$&=~1;te.length=0}};var ie=e("g",(function(e){return Ee(e).$hostElement$}));var se=e("c",(function(e,t,r){var n=ie(e);return{emit:function(e){return oe(n,t,{bubbles:!!(r&4),composed:!!(r&2),cancelable:!!(r&1),detail:e})}}}));var oe=function(e,t,r){var n=p.ce(t,r);e.dispatchEvent(n);return n};var le=function(e,t){if(t&&!e.$onRenderResolve$&&t["s-p"]){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))}};var fe=function(e,t){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}le(e,e.$ancestorComponent$);var r=function(){return $e(e,t)};return We(r)};var $e=function(e,t){var r=w("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$lazyInstance$;var a;if(t){{a=pe(n,"componentWillLoad")}}r();return me(a,(function(){return ue(e,n,t)}))};var ue=function(e,t,r){var n=e.$hostElement$;var a=w("update",e.$cmpMeta$.$tagName$);var i=n["s-rc"];if(r){x(e)}var s=w("render",e.$cmpMeta$.$tagName$);{{ae(e,ce(e,t))}}if(p.$cssShim$){p.$cssShim$.updateHost(n)}if(i){i.map((function(e){return e()}));n["s-rc"]=undefined}s();a();{var o=n["s-p"];var l=function(){return ve(e)};if(o.length===0){l()}else{Promise.all(o).then(l);e.$flags$|=4;o.length=0}}};var ce=function(e,t){try{t=t.render();{e.$flags$&=~16}{e.$flags$|=2}}catch(r){Ae(r)}return t};var ve=function(e){var t=e.$cmpMeta$.$tagName$;var r=e.$hostElement$;var n=w("postUpdate",t);var a=e.$lazyInstance$;var i=e.$ancestorComponent$;{pe(a,"componentDidRender")}if(!(e.$flags$&64)){e.$flags$|=64;{ge(r)}{pe(a,"componentDidLoad")}n();{e.$onReadyResolve$(r);if(!i){he()}}}else{n()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){Ve((function(){return fe(e,false)}))}e.$flags$&=~(4|512)}};var de=function(e){{var t=Ee(e);var r=t.$hostElement$.isConnected;if(r&&(t.$flags$&(2|16))===2){fe(t,false)}return r}};var he=function(e){{ge(h.documentElement)}{p.$flags$|=2}Ve((function(){return oe(v,"appload",{detail:{namespace:n}})}))};var pe=function(e,t,r){if(e&&e[t]){try{return e[t](r)}catch(n){Ae(n)}}return undefined};var me=function(e,t){return e&&e.then?e.then(t):t()};var ge=function(e){return e.classList.add("hydrated")};var ye=function(e,t){if(e!=null&&!j(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&1){return String(e)}return e}return e};var be=function(e,t){return Ee(e).$instanceValues$.get(t)};var we=function(e,t,r,n){var a=Ee(e);var i=a.$instanceValues$.get(t);var s=a.$flags$;var o=a.$lazyInstance$;r=ye(r,n.$members$[t][0]);if((!(s&8)||i===undefined)&&r!==i){a.$instanceValues$.set(t,r);if(o){if(n.$watchers$&&s&128){var l=n.$watchers$[t];if(l){l.map((function(e){try{o[e](r,i,t)}catch(n){Ae(n)}}))}}if((s&(2|16))===2){fe(a,false)}}}};var Re=function(e,t,r){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var n=Object.entries(t.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return be(this,n)},set:function(e){we(this,n,e,t)},configurable:true,enumerable:true})}}));if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=this;p.jmp((function(){var t=i.get(e);n[t]=r===null&&typeof n[t]==="boolean"?false:r}))};e.observedAttributes=n.filter((function(e){var t=e[0],r=e[1];return r[0]&15})).map((function(e){var r=e[0],n=e[1];var a=n[1]||r;i.set(a,r);if(n[0]&512){t.$attrsToReflect$.push([r,a])}return a}))}}return e};var Ne=function(e,n,a,i,s){return __awaiter(r,void 0,void 0,(function(){var e,r,i,o,l,f,$;return __generator(this,(function(u){switch(u.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;s=Le(a);if(!s.then)return[3,2];e=R();return[4,s];case 1:s=u.sent();e();u.label=2;case 2:if(!s.isProxied){{a.$watchers$=s.watchers}Re(s,a,2);s.isProxied=true}r=w("createInstance",a.$tagName$);{n.$flags$|=8}try{new s(n)}catch(c){Ae(c)}{n.$flags$&=~8}{n.$flags$|=128}r();if(!s.style)return[3,5];i=s.style;o=T(a);if(!!Be.has(o))return[3,5];l=w("registerStyles",a.$tagName$);if(!(a.$flags$&8))return[3,4];return[4,t.import("./shadow-css-5f7cadc7.system.js").then((function(e){return e.scopeCss(i,o,false)}))];case 3:i=u.sent();u.label=4;case 4:S(o,i,!!(a.$flags$&1));l();u.label=5;case 5:f=n.$ancestorComponent$;$=function(){return fe(n,true)};if(f&&f["s-rc"]){f["s-rc"].push($)}else{$()}return[2]}}))}))};var Se=function(e){if((p.$flags$&1)===0){var t=Ee(e);var r=t.$cmpMeta$;var n=w("connectedCallback",r.$tagName$);if(!(t.$flags$&1)){t.$flags$|=1;{if(r.$flags$&(4|8)){_e(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){le(t,t.$ancestorComponent$=a);break}}}if(r.$members$){Object.entries(r.$members$).map((function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}}))}{Ve((function(){return Ne(e,t,r)}))}}n()}};var _e=function(e){var t=e["s-cr"]=h.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var xe=function(e){if((p.$flags$&1)===0){var t=Ee(e);if(p.$cssShim$){p.$cssShim$.removeHost(e)}}};var Te=e("b",(function(e,t){if(t===void 0){t={}}var r=w();var n=[];var a=t.exclude||[];var i=v.customElements;var s=h.head;var o=s.querySelector("meta[charset]");var l=h.createElement("style");var f=[];var $;var u=true;Object.assign(p,t);p.$resourcesUrl$=new URL(t.resourcesUrl||"./",h.baseURI).href;{if(t.syncQueue){p.$flags$|=4}}e.map((function(e){return e[1].map((function(t){var r={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{r.$members$=t[2]}{r.$attrsToReflect$=[]}{r.$watchers$={}}if(!m&&r.$flags$&1){r.$flags$|=8}var s=r.$tagName$;var o=function(e){__extends(t,e);function t(t){var n=e.call(this,t)||this;t=n;je(t,r);if(r.$flags$&1){if(m){{t.attachShadow({mode:"open"})}}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return n}t.prototype.connectedCallback=function(){var e=this;if($){clearTimeout($);$=null}if(u){f.push(this)}else{p.jmp((function(){return Se(e)}))}};t.prototype.disconnectedCallback=function(){var e=this;p.jmp((function(){return xe(e)}))};t.prototype.forceUpdate=function(){de(this)};t.prototype.componentOnReady=function(){return Ee(this).$onReadyPromise$};return t}(HTMLElement);r.$lazyBundleId$=e[0];if(!a.includes(s)&&!i.get(s)){n.push(s);i.define(s,Re(o,r,1))}}))}));{l.innerHTML=n+b;l.setAttribute("data-styles","");s.insertBefore(l,o?o.nextSibling:s.firstChild)}u=false;if(f.length){f.map((function(e){return e.connectedCallback()}))}else{{p.jmp((function(){return $=setTimeout(he,30)}))}}r()}));var Ce=new WeakMap;var Ee=function(e){return Ce.get(e)};var Me=e("r",(function(e,t){return Ce.set(t.$lazyInstance$=e,t)}));var je=function(e,t){var r={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return Ce.set(e,r)};var ke=function(e,t){return t in e};var Ae=function(e){return console.error(e)};var Pe=new Map;var Le=function(e,r,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleId$;var s=Pe.get(i);if(s){return s[a]}return t.import("./"+i+".entry.js"+"").then((function(e){{Pe.set(i,e)}return e[a]}),Ae)};var Be=new Map;var Oe=[];var Ie=[];var Ue=[];var He=function(e,t){return function(r){e.push(r);if(!c){c=true;if(t&&p.$flags$&4){Ve(qe)}else{p.raf(qe)}}}};var ze=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(r){Ae(r)}}e.length=0};var De=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(a){Ae(a)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var qe=function(){{u++}ze(Oe);{var e=(p.$flags$&6)===2?performance.now()+14*Math.ceil(u*(1/10)):Infinity;De(Ie,e);De(Ue,e);if(Ie.length>0){Ue.push.apply(Ue,Ie);Ie.length=0}if(c=Oe.length+Ie.length+Ue.length>0){p.raf(qe)}else{u=0}}};var Ve=function(e){return g().then(e)};var We=He(Ie,true)}}}));