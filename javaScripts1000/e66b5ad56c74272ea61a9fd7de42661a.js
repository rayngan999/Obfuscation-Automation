/*! Sklik-Advertproxy-Static version 0.19.2 */!function(){var t={6163:function(t){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},6288:function(t,n,e){var r=e(3649),o=e(3590),i=e(4615),c=r("unscopables"),u=Array.prototype;null==u[c]&&i.f(u,c,{configurable:!0,value:o(null)}),t.exports=function(t){u[c][t]=!0}},2569:function(t,n,e){var r=e(794);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},5766:function(t,n,e){var r=e(2977),o=e(97),i=e(6782),c=function(t){return function(n,e,c){var u,a=r(n),f=o(a.length),s=i(c,f);if(t&&e!=e){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},4805:function(t,n,e){var r=e(2938),o=e(5044),i=e(1324),c=e(97),u=e(4822),a=[].push,f=function(t){var n=1==t,e=2==t,f=3==t,s=4==t,l=6==t,d=7==t,p=5==t||l;return function(g,v,y,m){for(var b,h,w=i(g),O=o(w),S=r(v,y,3),x=c(O.length),j=0,I=m||u,C=n?I(g,x):e||d?I(g,0):void 0;x>j;j++)if((p||j in O)&&(h=S(b=O[j],j,w),t))if(n)C[j]=h;else if(h)switch(t){case 3:return!0;case 5:return b;case 6:return j;case 2:a.call(C,b)}else switch(t){case 4:return!1;case 7:a.call(C,b)}return l?-1:f||s?s:C}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterOut:f(7)}},9269:function(t,n,e){var r=e(6544),o=e(3649),i=e(4061),c=o("species");t.exports=function(t){return i>=51||!r((function(){var n=[];return(n.constructor={})[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},9295:function(t,n,e){var r=e(8494),o=e(6544),i=e(4402),c=Object.defineProperty,u={},a=function(t){throw t};t.exports=function(t,n){if(i(u,t))return u[t];n||(n={});var e=[][t],f=!!i(n,"ACCESSORS")&&n.ACCESSORS,s=i(n,0)?n[0]:a,l=i(n,1)?n[1]:void 0;return u[t]=!!e&&!o((function(){if(f&&!r)return!0;var t={length:-1};f?c(t,1,{enumerable:!0,get:a}):t[1]=1,e.call(t,s,l)}))}},4822:function(t,n,e){var r=e(794),o=e(4521),i=e(3649)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},9624:function(t){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},3478:function(t,n,e){var r=e(4402),o=e(929),i=e(6683),c=e(4615);t.exports=function(t,n){for(var e=o(n),u=c.f,a=i.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||u(t,s,a(n,s))}}},3989:function(t,n,e){var r=e(3649)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r]=!1,"/./"[t](n)}catch(t){}}return!1}},57:function(t,n,e){var r=e(8494),o=e(4615),i=e(4677);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},4677:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},8494:function(t,n,e){var r=e(6544);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},6668:function(t,n,e){var r=e(7583),o=e(794),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},6918:function(t,n,e){var r=e(5897);t.exports=r("navigator","userAgent")||""},4061:function(t,n,e){var r,o,i=e(7583),c=e(6918),u=i.process,a=u&&u.versions,f=a&&a.v8;f?o=(r=f.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},5690:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},7263:function(t,n,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=e(7583),i=e(6683).f,c=e(57),u=e(1270),a=e(460),f=e(3478),s=e(4451);t.exports=function(t,n){var e,l,d,p,g,v=t.target,y=t.global,m=t.stat;if(e=y?o:m?o[v]||a(v,{}):(o[v]||{}).prototype)for(l in n){if(p=n[l],d=t.noTargetGet?(g=i(e,l))&&g.value:e[l],!s(y?l:v+(m?".":"#")+l,t.forced)&&void 0!==d){if(r(p)===r(d))continue;f(p,d)}(t.sham||d&&d.sham)&&c(p,"sham",!0),u(e,l,p,t)}}},6544:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},2938:function(t,n,e){var r=e(6163);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},5897:function(t,n,e){var r=e(1287),o=e(7583),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},7583:function(t,n,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=function(t){return t&&t.Math==Math&&t};t.exports=o("object"==("undefined"==typeof globalThis?"undefined":r(globalThis))&&globalThis)||o("object"==("undefined"==typeof window?"undefined":r(window))&&window)||o("object"==("undefined"==typeof self?"undefined":r(self))&&self)||o("object"==(void 0===e.g?"undefined":r(e.g))&&e.g)||function(){return this}()||Function("return this")()},4402:function(t){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},4639:function(t){t.exports={}},482:function(t,n,e){var r=e(5897);t.exports=r("document","documentElement")},275:function(t,n,e){var r=e(8494),o=e(6544),i=e(6668);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},5044:function(t,n,e){var r=e(6544),o=e(9624),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},9734:function(t,n,e){var r=e(1314),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},2743:function(t,n,e){var r,o,i,c=e(9491),u=e(7583),a=e(794),f=e(57),s=e(4402),l=e(1314),d=e(9137),p=e(4639),g=u.WeakMap;if(c){var v=l.state||(l.state=new g),y=v.get,m=v.has,b=v.set;r=function(t,n){return n.facade=t,b.call(v,t,n),n},o=function(t){return y.call(v,t)||{}},i=function(t){return m.call(v,t)}}else{var h=d("state");p[h]=!0,r=function(t,n){return n.facade=t,f(t,h,n),n},o=function(t){return s(t,h)?t[h]:{}},i=function(t){return s(t,h)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},4521:function(t,n,e){var r=e(9624);t.exports=Array.isArray||function(t){return"Array"==r(t)}},4451:function(t,n,e){var r=e(6544),o=/#|\.prototype\./,i=function(t,n){var e=u[c(t)];return e==f||e!=a&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},794:function(t){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports=function(t){return"object"===n(t)?null!==t:"function"==typeof t}},6268:function(t){t.exports=!1},7574:function(t,n,e){var r=e(794),o=e(9624),i=e(3649)("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},8640:function(t,n,e){var r=e(6544);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},9491:function(t,n,e){var r=e(7583),o=e(9734),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},9041:function(t,n,e){var r=e(7574);t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},9304:function(t,n,e){"use strict";var r=e(8494),o=e(6544),i=e(5432),c=e(4012),u=e(112),a=e(1324),f=e(5044),s=Object.assign,l=Object.defineProperty;t.exports=!s||o((function(){if(r&&1!==s({b:1},s(l({},"a",{enumerable:!0,get:function(){l(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},n={},e=Symbol(),o="abcdefghijklmnopqrst";return t[e]=7,o.split("").forEach((function(t){n[t]=t})),7!=s({},t)[e]||i(s({},n)).join("")!=o}))?function(t,n){for(var e=a(t),o=arguments.length,s=1,l=c.f,d=u.f;o>s;)for(var p,g=f(arguments[s++]),v=l?i(g).concat(l(g)):i(g),y=v.length,m=0;y>m;)p=v[m++],r&&!d.call(g,p)||(e[p]=g[p]);return e}:s},3590:function(t,n,e){var r,o=e(2569),i=e(8728),c=e(5690),u=e(4639),a=e(482),f=e(6668),s=e(9137),l=s("IE_PROTO"),d=function(){},p=function(t){return"<script>"+t+"</"+"script>"},g=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;g=r?function(t){t.write(p("")),t.close();var n=t.parentWindow.Object;return t=null,n}(r):((n=f("iframe")).style.display="none",a.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(p("document.F=Object")),t.close(),t.F);for(var e=c.length;e--;)delete g.prototype[c[e]];return g()};u[l]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(d.prototype=o(t),e=new d,d.prototype=null,e[l]=t):e=g(),void 0===n?e:i(e,n)}},8728:function(t,n,e){var r=e(8494),o=e(4615),i=e(2569),c=e(5432);t.exports=r?Object.defineProperties:function(t,n){i(t);for(var e,r=c(n),u=r.length,a=0;u>a;)o.f(t,e=r[a++],n[e]);return t}},4615:function(t,n,e){var r=e(8494),o=e(275),i=e(2569),c=e(2670),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},6683:function(t,n,e){var r=e(8494),o=e(112),i=e(4677),c=e(2977),u=e(2670),a=e(4402),f=e(275),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=c(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},9275:function(t,n,e){var r=e(8356),o=e(5690).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},4012:function(t,n){n.f=Object.getOwnPropertySymbols},8356:function(t,n,e){var r=e(4402),o=e(2977),i=e(5766).indexOf,c=e(4639);t.exports=function(t,n){var e,u=o(t),a=0,f=[];for(e in u)!r(c,e)&&r(u,e)&&f.push(e);for(;n.length>a;)r(u,e=n[a++])&&(~i(f,e)||f.push(e));return f}},5432:function(t,n,e){var r=e(8356),o=e(5690);t.exports=Object.keys||function(t){return r(t,o)}},112:function(t,n){"use strict";var e={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!e.call({1:2},1);n.f=o?function(t){var n=r(this,t);return!!n&&n.enumerable}:e},929:function(t,n,e){var r=e(5897),o=e(9275),i=e(4012),c=e(2569);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},1287:function(t,n,e){var r=e(7583);t.exports=r},1270:function(t,n,e){var r=e(7583),o=e(57),i=e(4402),c=e(460),u=e(9734),a=e(2743),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,n,e,u){var a,f=!!u&&!!u.unsafe,d=!!u&&!!u.enumerable,p=!!u&&!!u.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),(a=s(e)).source||(a.source=l.join("string"==typeof n?n:""))),t!==r?(f?!p&&t[n]&&(d=!0):delete t[n],d?t[n]=e:o(t,n,e)):d?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},3955:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},460:function(t,n,e){var r=e(7583),o=e(57);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},9137:function(t,n,e){var r=e(7836),o=e(8284),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},1314:function(t,n,e){var r=e(7583),o=e(460),i="__core-js_shared__",c=r[i]||o(i,{});t.exports=c},7836:function(t,n,e){var r=e(6268),o=e(1314);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.8.2",mode:r?"pure":"global",copyright:"Â© 2021 Denis Pushkarev (zloirock.ru)"})},8040:function(t,n,e){var r=e(6918);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)},578:function(t,n,e){var r=e(97),o=e(3812),i=e(3955),c=Math.ceil,u=function(t){return function(n,e,u){var a,f,s=String(i(n)),l=s.length,d=void 0===u?" ":String(u),p=r(e);return p<=l||""==d?s:(a=p-l,(f=o.call(d,c(a/d.length))).length>a&&(f=f.slice(0,a)),t?s+f:f+s)}};t.exports={start:u(!1),end:u(!0)}},3812:function(t,n,e){"use strict";var r=e(5089),o=e(3955);t.exports="".repeat||function(t){var n=String(o(this)),e="",i=r(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(n+=n))1&i&&(e+=n);return e}},6782:function(t,n,e){var r=e(5089),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},2977:function(t,n,e){var r=e(5044),o=e(3955);t.exports=function(t){return r(o(t))}},5089:function(t){var n=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:n)(t)}},97:function(t,n,e){var r=e(5089),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},1324:function(t,n,e){var r=e(3955);t.exports=function(t){return Object(r(t))}},2670:function(t,n,e){var r=e(794);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},8284:function(t){var n=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+e).toString(36)}},7786:function(t,n,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=e(8640);t.exports=o&&!Symbol.sham&&"symbol"==r(Symbol.iterator)},3649:function(t,n,e){var r=e(7583),o=e(7836),i=e(4402),c=e(8284),u=e(8640),a=e(7786),f=o("wks"),s=r.Symbol,l=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)||(u&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},8833:function(t,n,e){"use strict";var r=e(7263),o=e(4805).filter,i=e(9269),c=e(9295),u=i("filter"),a=c("filter");r({target:"Array",proto:!0,forced:!u||!a},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},7715:function(t,n,e){"use strict";var r=e(7263),o=e(4805).find,i=e(6288),c=e(9295),u="find",a=!0,f=c(u);u in[]&&Array(1).find((function(){a=!1})),r({target:"Array",proto:!0,forced:a||!f},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i(u)},4517:function(t,n,e){var r=e(7263),o=e(9304);r({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},7723:function(t,n,e){"use strict";var r=e(7263),o=e(9041),i=e(3955);r({target:"String",proto:!0,forced:!e(3989)("includes")},{includes:function(t){return!!~String(i(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},3710:function(t,n,e){"use strict";var r=e(7263),o=e(578).end;r({target:"String",proto:!0,forced:e(8040)},{padEnd:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},7754:function(t,n,e){"use strict";var r,o=e(7263),i=e(6683).f,c=e(97),u=e(9041),a=e(3955),f=e(3989),s=e(6268),l="".startsWith,d=Math.min,p=f("startsWith");o({target:"String",proto:!0,forced:!!(s||p||(r=i(String.prototype,"startsWith"),!r||r.writable))&&!p},{startsWith:function(t){var n=String(a(this));u(t);var e=c(d(arguments.length>1?arguments[1]:void 0,n.length)),r=String(t);return l?l.call(n,r,e):n.slice(e,e+r.length)===r}})},7464:function(){!function(){if("undefined"!=typeof window)try{var t=new window.CustomEvent("test",{cancelable:!0});if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default")}catch(t){var n=function(t,n){var e,r;return(n=n||{}).bubbles=!!n.bubbles,n.cancelable=!!n.cancelable,(e=document.createEvent("CustomEvent")).initCustomEvent(t,n.bubbles,n.cancelable,n.detail),r=e.preventDefault,e.preventDefault=function(){r.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},e};n.prototype=window.Event.prototype,window.CustomEvent=n}}()}},n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{}};return t[r](o,o.exports,e),o.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){"use strict";e(8833),e(7715),e(7723),e(3710),e(7754);var t=function(t){var n=decodeURIComponent(document.cookie).split(";").find((function(n){return n.trim().startsWith(t)}));return n?n.trim().replace("".concat(t,"="),""):""},n="sznclid",r="notstored",o="same",i="different",c="nosid",u=function(t){var n=new Date;n.setTime(n.getTime()+2592e6);var e="."+location.hostname.split(".").slice(-2).join("."),r="https:"===location.protocol?"; secure":"",o="sid=".concat(t,"; domain=").concat(e,"; path=/; expires=").concat(n.toUTCString()).concat(r);document.cookie=o},a=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"log",r=arguments.length>3?arguments[3]:void 0,o=t.name,i=t.fColor,c=t.bColor,u="display: inline-block; color: ".concat(i,"; background: ").concat(c,"; padding: 1px 4px; border-radius: 3px;"),a="%c".concat(o);console[e](a,u,n),r&&Object.keys(r).length>0&&console[e](a,u,r)},f="white",s="black";function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function d(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var p=function(t,n,e){var r=t.name,o="".concat("iva_dbg_event_").concat(r),i=function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){d(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({state:n},e);window.sznIVA=window.sznIVA||{},window.sznIVA[r]=window.sznIVA[r]||{},Object.assign(window.sznIVA[r],i);var c=new CustomEvent(o,{detail:i});window.dispatchEvent(c)};function g(t,n){if(null==t)return{};var e,r,o=function(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}function v(t){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var y=function(t){if(!(t&&t.name&&t.fColor&&t.bColor))return console.error("@iva/debugger: incorrect config"),function(){};var n=function(t){t&&t.name||console.error("@iva/debugger: invalid config provided"),window&&window.location||console.error("@iva/debugger: could not access window.location");var n=t.name,e=t.fColor||f,r=t.bColor||s,o=window.location.search,i=new RegExp("".concat("sznivadbg","=([^&]*)")),c=o.match(i)||[];return{name:n,fColor:e,bColor:r,shouldLog:function(t,n){return!(!t||"1"!==t&&(~t.indexOf("!")?~t.indexOf("!".concat(n)):!~t.indexOf(n)))}(c.length>1?c[1]:"",n)}}(t);return function(){var t=["log","warn","error"],e=arguments.length;if(0!==e&&(n.shouldLog&&1===e&&"string"==typeof(arguments.length<=0?void 0:arguments[0])&&a(n,arguments.length<=0?void 0:arguments[0]),n.shouldLog&&2===e&&-1!==t.indexOf(arguments.length<=0?void 0:arguments[0])&&"string"==typeof(arguments.length<=1?void 0:arguments[1])&&a(n,arguments.length<=1?void 0:arguments[1],arguments.length<=0?void 0:arguments[0]),1===e&&"object"===v(arguments.length<=0?void 0:arguments[0]))){var r=arguments.length<=0?void 0:arguments[0],o=r.message,i=r.state,c=r.type,u=g(r,["message","state","type"]);n.shouldLog&&o&&a(n,o,c,u),i&&p(n,i,u)}}},m=y({bColor:"#4b0082",fColor:"#fff",name:"linkdec"}),b=function(t){var n,e,r=4*Math.ceil(t.length/4),o=t.padEnd(r,"=");try{var i=atob(o.replace(/_/g,"/").replace(/-/g,"+")),c=(n=i.substr(1),e=i.charCodeAt(0),n.split("").map((function(t){return String.fromCharCode(e^t.charCodeAt())})).join(""));return function(t){return/^id=[0-9]+\|t=[0-9]+.[0-9]+\|te=[0-9]+.[0-9]+(\|opt-out=True)?\|c=[0-9A-Z]+$/.test(t)}(c)?c:(m("warn",'"decodeClid" - SID '.concat(t," did not pass validation, returning null")),null)}catch(n){return m("error",'"decodeClid" - SID '.concat(t," threw error during validation. ").concat(n)),null}},h=function(t){var e=new RegExp("[?#&](".concat(n,"=[^&#]+&?)")).exec(t);if(e.length<2)return t;var r=e[1];return t.replace(r,"").replace(/&$/,"").replace(/\?#/,"#").replace(/[?#]$/,"")},w=function(t,n){var e=new Image(1,1),r=n?"&dsid="+n:"",o="https://h.seznam.cz/hit/?d="+encodeURIComponent('{"action":'+t+"}")+"&a=event&s=idt&ptitle="+encodeURIComponent(document.title)+"&u="+encodeURIComponent(document.location.href)+r;e.src=o},O=function(){m({message:"getting SID",state:"start"});var t=function(t){var e=t.includes("?")?t.split("?")[1]:"",r=!e&&t.includes("#")?t.split("#")[1]:"",o=e||r;if(!o.includes(n))return null;var i=new RegExp("(?:^|[&#])".concat(n,"=([^&]+)")).exec(o);return i&&i.length>0?i[1]:null}(window.location.href);if(!t)return m({state:"done",message:'"getSid" found parameter "'.concat(n,"\", it's value is a falsey, returning null"),sznclid:t,type:"warn",error:'data from URL is not valid: "'.concat(t,'"')}),null;m('found parameter "'.concat(n,'", decoding...'));var e=b(t);return e?(m({state:"done",message:'successfully retrieved "sid"',sid:e}),e):(m({state:"error",sid:e,sznclid:t,error:"failed to decode sznclid"}),null)},S=(e(4517),e(7464),y({name:"rc",bColor:"gold",fColor:"black"}),y({name:"retargeting",bColor:"yellow",fColor:"grey"})),x="start",j="done",I="sid",C="euconsent-v2",P="//c.seznam.cz/retargeting",E=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},e=new Image;e.onerror=function(e){n({message:"sendHit failed",url:t,error:e})},e.onabort=function(){n({message:"sendHit was aborted",url:t})},e.onload=function(){n({message:"sendHit was successfull",url:t})},e.src=t},k=function(t){var n=("; "+document.cookie).split("; "+t+"=",2);return 2===n.length?n.pop().split(";").shift():""},z=function(t){return t.reduce((function t(n,e){var r=~n.indexOf("?")?"&":"?";return e.key&&e.value?Array.isArray(e.value)?e.value.reduce(t,n):"".concat(n).concat(r).concat(e.key,"=").concat(e.value):n}),"")},_=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},e=window.location.href;if(n({message:"retargeting url comparing these urls:",rtgUrl:t,locUrl:e}),!t)return e;var r=~e.indexOf("?")?"?":"#",o=~t.indexOf("?")?"?":"#",i=e.split(r)[0],c=t.split(o)[0];return n({message:"base urls:",baseRtg:c,baseLoc:i}),i===c?t:e},R=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(t&&t.rtgId){var e=t.rtgId,r=t.category,o=t.itemId,i=t.pageType,c=t.rtgUrl,u=t.productIds,a=window.rc&&window.rc.internal&&k(C),f=k(I);n({message:"got following retargeting data:",rtgId:e,category:r,itemId:o,pageType:i,rtgUrl:c,productIds:u,euconsentV2:a,sid:f});var s=function(t,n){return Array.isArray(n)&&n.length?n.map((function(n){return{key:t,value:n?encodeURIComponent(n):null}})):null},l=[{key:"id",value:e},{key:"category",value:r?encodeURIComponent(r):null},{key:"itemId",value:o?encodeURIComponent(o):null},{key:"url",value:encodeURIComponent(_(c,n))},{key:"pageType",value:i?encodeURIComponent(i):null},{key:"consent",value:a?encodeURIComponent(a):null},{key:"dsid",value:f?encodeURIComponent(f):null},{key:"productIds",value:s("productIds",u)}],d=P+z(l);n({message:"hitting retargeting url:",url:d}),E(d,n),window.seznam_dispatchedRetargetingIds=window.seznam_dispatchedRetargetingIds||[],window.seznam_dispatchedRetargetingIds.push(e)}};function A(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function T(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}!function(){window._1gif&&(new Image(1,1).src=window._1gif);delete window._1gif}(),S({message:"starting",state:x}),window.rc=window.rc||{},window.rc.retargetingHit=R;var D,U=!(D=window.seznam_retargetingId||window.seznam_retargeting_id||null)||window.seznam_dispatchedRetargetingIds&&~window.seznam_dispatchedRetargetingIds.indexOf(D)?null:{rtgId:D,category:window.seznam_category,itemId:window.seznam_itemId,pageType:window.seznam_pagetype,rtgUrl:window.seznam_rtgUrl,productIds:window.seznam_productIds};S(function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?A(Object(e),!0).forEach((function(n){T(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):A(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({message:"retargeting got this data:"},U)),R(U,S),S({message:"finished",state:j}),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cleanUrl:!0},a=O();if(!a)return m("warn",'"handleSid" got SID with a falsey value, returning "'.concat(c,'"')),c;if(e&&e.cleanUrl){m('"handleSid" removing "'.concat(n,'=[encoded_sid_value]" from the URL'));var f=h(window.location.href);history.replaceState(null,document.title,f)}var s=t("sid");""===s?(m('"handleSid" did not find SID cookie, creating new'),w(r,s),u(a)):s===a?(m('"handleSid" found SID cookie with the same SID value'),w(o)):(m("warn",'"handleSid" found SID cookie with different value from linkdec SID'),w(i,s))}()}()}();
//# sourceMappingURL=retargeting.js.map