!function(a){"use strict";var b=jQuery;if("undefined"!=typeof window.vocento&&window.vocento&&"undefined"!=typeof window.vocento.vocuser&&window.vocento.vocuser&&"undefined"!=typeof window.vocento.vocuser.dependencies&&window.vocento.vocuser.dependencies&&"undefined"!=typeof window.vocento.vocuser.dependencies.jquery&&window.vocento.vocuser.dependencies.jquery&&(b=window.vocento.vocuser.dependencies.jquery),"undefined"!=typeof vocento&&vocento&&"undefined"!=typeof vocento.vocuser&&vocento.vocuser&&"undefined"!=typeof vocento.vocuser.VERSION&&"v3"!==vocento.vocuser.VERSION){var c="jquery";"function"==typeof defineFunction&&defineFunction.amd?vocUserRequirejsNamespace.define("jQueryCookie",[c],a):a("object"==typeof exports?vocUserRequirejsNamespace.require(c):b)}else a(b)}(function(a){function b(a){return i.raw?a:encodeURIComponent(a)}function c(a){return i.raw?a:decodeURIComponent(a)}function d(a){return b(i.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(h," ")),i.json?JSON.parse(a):a}catch(b){}}function f(a,b){var c=i.raw?a:e(a);return g.isFunction(b)?b(c):c}var g=a;"undefined"!=typeof window.vocento&&window.vocento&&"undefined"!=typeof window.vocento.vocuser&&window.vocento.vocuser&&"undefined"!=typeof window.vocento.vocuser.dependencies&&window.vocento.vocuser.dependencies&&"undefined"!=typeof window.vocento.vocuser.dependencies.jquery&&window.vocento.vocuser.dependencies.jquery&&(g=window.vocento.vocuser.dependencies.jquery);var h=/\+/g,i=g.cookie=function(a,e,h){if(void 0!==e&&!g.isFunction(e)){if(h=g.extend({},i.defaults,h),"number"==typeof h.expires){var j=h.expires,k=h.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(a),"=",d(e),h.expires?"; expires="+h.expires.toUTCString():"",h.path?"; path="+h.path:"",h.domain?"; domain="+h.domain:"",h.secure?"; secure":""].join("")}for(var l=a?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(a&&a===q){l=f(r,e);break}a||void 0===(r=f(r))||(l[q]=r)}return l};i.defaults={},g.removeCookie=function(a,b){return void 0===g.cookie(a)?!1:(g.cookie(a,"",g.extend({},b,{expires:-1})),!g.cookie(a))}}),function(a,b){"use strict";"undefined"!=typeof vocento&&vocento&&"undefined"!=typeof vocento.vocuser&&vocento.vocuser&&"undefined"!=typeof vocento.vocuser.VERSION&&"v3"!==vocento.vocuser.VERSION?"function"==typeof defineFunction&&defineFunction.amd?vocUserRequirejsNamespace.define("simpleStorage",b):"object"==typeof exports?module.exports=b():a.simpleStorage=b():a.simpleStorage=b()}(this,function(){"use strict";function a(){window.localStorage.setItem("__simpleStorageInitTest","tmpval"),window.localStorage.removeItem("__simpleStorageInitTest"),d(),f(),b(),"addEventListener"in window&&window.addEventListener("pageshow",function(a){a.persisted&&c()},!1),l=!0}function b(){"addEventListener"in window?window.addEventListener("storage",c,!1):document.attachEvent("onstorage",c)}function c(){try{d()}catch(a){return void(l=!1)}f()}function d(){var a=localStorage.simpleStorage;try{j=JSON.parse(a)}catch(b){j={}}k=localStorage.simpleStorage?String(localStorage.simpleStorage).length:0}function e(){try{localStorage.simpleStorage=JSON.stringify(j),k=localStorage.simpleStorage?String(localStorage.simpleStorage).length:0}catch(a){return a}return!0}function f(){var a,b,c,d,g,i=1/0,k=0;if(clearTimeout(m),j&&j.__simpleStorage_meta&&j.__simpleStorage_meta.TTL){for(a=+new Date,g=j.__simpleStorage_meta.TTL.keys||[],d=j.__simpleStorage_meta.TTL.expire||{},b=0,c=g.length;c>b;b++){if(!(d[g[b]]<=a)){d[g[b]]<i&&(i=d[g[b]]);break}k++,delete j[g[b]],delete d[g[b]]}i!=1/0&&(m=setTimeout(f,i-a)),k&&(g.splice(0,k),h(),e())}}function g(a,b){var c,d,e=+new Date,g=!1;if(b=Number(b)||0,0!==b){if(!j.hasOwnProperty(a))return!1;if(j.__simpleStorage_meta||(j.__simpleStorage_meta={}),j.__simpleStorage_meta.TTL||(j.__simpleStorage_meta.TTL={expire:{},keys:[]}),j.__simpleStorage_meta.TTL.expire[a]=e+b,j.__simpleStorage_meta.TTL.expire.hasOwnProperty(a))for(c=0,d=j.__simpleStorage_meta.TTL.keys.length;d>c;c++)j.__simpleStorage_meta.TTL.keys[c]==a&&j.__simpleStorage_meta.TTL.keys.splice(c);for(c=0,d=j.__simpleStorage_meta.TTL.keys.length;d>c;c++)j.__simpleStorage_meta.TTL.expire[j.__simpleStorage_meta.TTL.keys[c]]>e+b&&j.__simpleStorage_meta.TTL.keys.splice(c,0,a);g||j.__simpleStorage_meta.TTL.keys.push(a)}else if(j&&j.__simpleStorage_meta&&j.__simpleStorage_meta.TTL){if(j.__simpleStorage_meta.TTL.expire.hasOwnProperty(a))for(delete j.__simpleStorage_meta.TTL.expire[a],c=0,d=j.__simpleStorage_meta.TTL.keys.length;d>c;c++)if(j.__simpleStorage_meta.TTL.keys[c]==a){j.__simpleStorage_meta.TTL.keys.splice(c,1);break}h()}return clearTimeout(m),j&&j.__simpleStorage_meta&&j.__simpleStorage_meta.TTL&&j.__simpleStorage_meta.TTL.keys.length&&(m=setTimeout(f,Math.max(j.__simpleStorage_meta.TTL.expire[j.__simpleStorage_meta.TTL.keys[0]]-e,0))),!0}function h(){var a,b=!1,c=!1;if(!j||!j.__simpleStorage_meta)return b;j.__simpleStorage_meta.TTL&&!j.__simpleStorage_meta.TTL.keys.length&&(delete j.__simpleStorage_meta.TTL,b=!0);for(a in j.__simpleStorage_meta)if(j.__simpleStorage_meta.hasOwnProperty(a)){c=!0;break}return c||(delete j.__simpleStorage_meta,b=!0),b}var i="0.1.2",j=!1,k=0,l=!1,m=null;try{a()}catch(n){}return{version:i,canUse:function(){return!!l},set:function(a,b,c){if("__simpleStorage_meta"==a)return!1;if(!j)return!1;if("undefined"==typeof b)return this.deleteKey(a);c=c||{};try{b=JSON.parse(JSON.stringify(b))}catch(d){return d}return j[a]=b,g(a,c.TTL||0),e()},get:function(a){return j?j.hasOwnProperty(a)&&"__simpleStorage_meta"!=a&&this.getTTL(a)?j[a]:void 0:!1},deleteKey:function(a){return j&&a in j?(delete j[a],g(a,0),e()):!1},setTTL:function(a,b){return j?(g(a,b),e()):!1},getTTL:function(a){var b;return j&&j.hasOwnProperty(a)?j.__simpleStorage_meta&&j.__simpleStorage_meta.TTL&&j.__simpleStorage_meta.TTL.expire&&j.__simpleStorage_meta.TTL.expire.hasOwnProperty(a)?(b=Math.max(j.__simpleStorage_meta.TTL.expire[a]-+new Date||0,0),b||!1):1/0:!1},flush:function(){if(!j)return!1;j={};try{return localStorage.removeItem("simpleStorage"),!0}catch(a){return a}},index:function(){if(!j)return!1;var a,b=[];for(a in j)j.hasOwnProperty(a)&&"__simpleStorage_meta"!=a&&b.push(a);return b},storageSize:function(){return k}}}),function(a,b){"use strict";"undefined"!=typeof vocento&&vocento&&"undefined"!=typeof vocento.vocuser&&vocento.vocuser&&"undefined"!=typeof vocento.vocuser.VERSION&&"v3"!==vocento.vocuser.VERSION?"function"==typeof defineFunction&&defineFunction.amd?vocUserRequirejsNamespace.define("DOMPurify",b):"object"==typeof exports?module.exports=b():a.DOMPurify=b():a.DOMPurify=b()}(this,function(){"use strict";function a(a){return function(b){for(var c=arguments.length,d=Array(c>1?c-1:0),e=1;c>e;e++)d[e-1]=arguments[e];return o(a,b,d)}}function b(a,b){g&&g(a,null);for(var c=b.length;c--;){var d=b[c];if("string"==typeof d){var e=u(d);e!==d&&(h(b)||(b[c]=e),d=e)}a[d]=!0}return a}function c(a){var b=m(null),c=void 0;for(c in a)o(f,a,[c])&&(b[c]=a[c]);return b}function d(b,c){for(;null!==b;){var d=j(b,c);if(d){if(d.get)return a(d.get);if("function"==typeof d.value)return a(d.value)}b=i(b)}return null}function e(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}var f=Object.hasOwnProperty,g=Object.setPrototypeOf,h=Object.isFrozen,i=Object.getPrototypeOf,j=Object.getOwnPropertyDescriptor,k=Object.freeze,l=Object.seal,m=Object.create,n="undefined"!=typeof Reflect&&Reflect,o=n.apply,p=n.construct;o||(o=function(a,b,c){return a.apply(b,c)}),k||(k=function(a){return a}),l||(l=function(a){return a}),p||(p=function(a,b){return new(Function.prototype.bind.apply(a,[null].concat(function(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}(b))))});var q,r=a(Array.prototype.forEach),s=a(Array.prototype.pop),t=a(Array.prototype.push),u=a(String.prototype.toLowerCase),v=a(String.prototype.match),w=a(String.prototype.replace),x=a(String.prototype.indexOf),y=a(String.prototype.trim),z=a(RegExp.prototype.test),A=(q=TypeError,function(){for(var a=arguments.length,b=Array(a),c=0;a>c;c++)b[c]=arguments[c];return p(q,b)}),B=k(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),C=k(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),D=k(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),E=k(["animate","color-profile","cursor","discard","fedropshadow","feimage","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),F=k(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),G=k(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),H=k(["#text"]),I=k(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns"]),J=k(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),K=k(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),L=k(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),M=l(/\{\{[\s\S]*|[\s\S]*\}\}/gm),N=l(/<%[\s\S]*|[\s\S]*%>/gm),O=l(/^data-[\-\w.\u00B7-\uFFFF]/),P=l(/^aria-[\-\w]+$/),Q=l(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),R=l(/^(?:\w+script|data):/i),S=l(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},U=function(){return"undefined"==typeof window?null:window},V=function(a,b){if("object"!==(void 0===a?"undefined":T(a))||"function"!=typeof a.createPolicy)return null;var c=null,d="data-tt-policy-suffix";b.currentScript&&b.currentScript.hasAttribute(d)&&(c=b.currentScript.getAttribute(d));var e="dompurify"+(c?"#"+c:"");try{return a.createPolicy(e,{createHTML:function(a){return a}})}catch(a){return console.warn("TrustedTypes policy "+e+" could not be created."),null}};return function W(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U(),f=function(a){return W(a)};if(f.version="2.2.6",f.removed=[],!a||!a.document||9!==a.document.nodeType)return f.isSupported=!1,f;var g=a.document,h=a.document,i=a.DocumentFragment,j=a.HTMLTemplateElement,l=a.Node,m=a.Element,n=a.NodeFilter,o=a.NamedNodeMap,p=void 0===o?a.NamedNodeMap||a.MozNamedAttrMap:o,q=a.Text,X=a.Comment,Y=a.DOMParser,Z=a.trustedTypes,$=m.prototype,_=d($,"cloneNode"),aa=d($,"nextSibling"),ba=d($,"childNodes"),ca=d($,"parentNode");if("function"==typeof j){var da=h.createElement("template");da.content&&da.content.ownerDocument&&(h=da.content.ownerDocument)}var ea=V(Z,g),fa=ea&&La?ea.createHTML(""):"",ga=h,ha=ga.implementation,ia=ga.createNodeIterator,ja=ga.getElementsByTagName,ka=ga.createDocumentFragment,la=g.importNode,ma={};try{ma=c(h).documentMode?h.documentMode:{}}catch(W){}var na={};f.isSupported=ha&&void 0!==ha.createHTMLDocument&&9!==ma;var oa=M,pa=N,qa=O,ra=P,sa=R,ta=S,ua=Q,va=null,wa=b({},[].concat(e(B),e(C),e(D),e(F),e(H))),xa=null,ya=b({},[].concat(e(I),e(J),e(K),e(L))),za=null,Aa=null,Ba=!0,Ca=!0,Da=!1,Ea=!1,Fa=!1,Ga=!1,Ha=!1,Ia=!1,Ja=!1,Ka=!0,La=!1,Ma=!0,Na=!0,Oa=!1,Pa={},Qa=b({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Ra=null,Sa=b({},["audio","video","img","source","image","track"]),Ta=null,Ua=b({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),Va=null,Wa=h.createElement("form"),Xa=function(a){Va&&Va===a||(a&&"object"===(void 0===a?"undefined":T(a))||(a={}),a=c(a),va="ALLOWED_TAGS"in a?b({},a.ALLOWED_TAGS):wa,xa="ALLOWED_ATTR"in a?b({},a.ALLOWED_ATTR):ya,Ta="ADD_URI_SAFE_ATTR"in a?b(c(Ua),a.ADD_URI_SAFE_ATTR):Ua,Ra="ADD_DATA_URI_TAGS"in a?b(c(Sa),a.ADD_DATA_URI_TAGS):Sa,za="FORBID_TAGS"in a?b({},a.FORBID_TAGS):{},Aa="FORBID_ATTR"in a?b({},a.FORBID_ATTR):{},Pa="USE_PROFILES"in a&&a.USE_PROFILES,Ba=!1!==a.ALLOW_ARIA_ATTR,Ca=!1!==a.ALLOW_DATA_ATTR,Da=a.ALLOW_UNKNOWN_PROTOCOLS||!1,Ea=a.SAFE_FOR_TEMPLATES||!1,Fa=a.WHOLE_DOCUMENT||!1,Ia=a.RETURN_DOM||!1,Ja=a.RETURN_DOM_FRAGMENT||!1,Ka=!1!==a.RETURN_DOM_IMPORT,La=a.RETURN_TRUSTED_TYPE||!1,Ha=a.FORCE_BODY||!1,Ma=!1!==a.SANITIZE_DOM,Na=!1!==a.KEEP_CONTENT,Oa=a.IN_PLACE||!1,ua=a.ALLOWED_URI_REGEXP||ua,Ea&&(Ca=!1),Ja&&(Ia=!0),Pa&&(va=b({},[].concat(e(H))),xa=[],!0===Pa.html&&(b(va,B),b(xa,I)),!0===Pa.svg&&(b(va,C),b(xa,J),b(xa,L)),!0===Pa.svgFilters&&(b(va,D),b(xa,J),b(xa,L)),!0===Pa.mathMl&&(b(va,F),b(xa,K),b(xa,L))),a.ADD_TAGS&&(va===wa&&(va=c(va)),b(va,a.ADD_TAGS)),a.ADD_ATTR&&(xa===ya&&(xa=c(xa)),b(xa,a.ADD_ATTR)),a.ADD_URI_SAFE_ATTR&&b(Ta,a.ADD_URI_SAFE_ATTR),Na&&(va["#text"]=!0),Fa&&b(va,["html","head","body"]),va.table&&(b(va,["tbody"]),delete za.tbody),k&&k(a),Va=a)},Ya=b({},["mi","mo","mn","ms","mtext"]),Za=b({},["foreignobject","desc","title","annotation-xml"]),$a=b({},C);b($a,D),b($a,E);var _a=b({},F);b(_a,G);var ab="http://www.w3.org/1998/Math/MathML",bb="http://www.w3.org/2000/svg",cb="http://www.w3.org/1999/xhtml",db=function(a){var c=ca(a);c&&c.tagName||(c={namespaceURI:cb,tagName:"template"});var d=u(a.tagName),e=u(c.tagName);if(a.namespaceURI===bb)return c.namespaceURI===cb?"svg"===d:c.namespaceURI===ab?"svg"===d&&("annotation-xml"===e||Ya[e]):Boolean($a[d]);if(a.namespaceURI===ab)return c.namespaceURI===cb?"math"===d:c.namespaceURI===bb?"math"===d&&Za[e]:Boolean(_a[d]);if(a.namespaceURI===cb){if(c.namespaceURI===bb&&!Za[e])return!1;if(c.namespaceURI===ab&&!Ya[e])return!1;var f=b({},["title","style","font","a","script"]);return!_a[d]&&(f[d]||!$a[d])}return!1},eb=function(a){t(f.removed,{element:a});try{a.parentNode.removeChild(a)}catch(b){try{a.outerHTML=fa}catch(b){a.remove()}}},fb=function(a,b){try{t(f.removed,{attribute:b.getAttributeNode(a),from:b})}catch(a){t(f.removed,{attribute:null,from:b})}b.removeAttribute(a)},gb=function(a){var b=void 0,c=void 0;if(Ha)a="<remove></remove>"+a;else{var d=v(a,/^[\r\n\t ]+/);c=d&&d[0]}var e=ea?ea.createHTML(a):a;try{b=(new Y).parseFromString(e,"text/html")}catch(a){}if(!b||!b.documentElement){var f=(b=ha.createHTMLDocument("")).body;f.parentNode.removeChild(f.parentNode.firstElementChild),f.outerHTML=e}return a&&c&&b.body.insertBefore(h.createTextNode(c),b.body.childNodes[0]||null),ja.call(b,Fa?"html":"body")[0]},hb=function(a){return ia.call(a.ownerDocument||a,a,n.SHOW_ELEMENT|n.SHOW_COMMENT|n.SHOW_TEXT,function(){return n.FILTER_ACCEPT},!1)},ib=function(a){return!(a instanceof q||a instanceof X||"string"==typeof a.nodeName&&"string"==typeof a.textContent&&"function"==typeof a.removeChild&&a.attributes instanceof p&&"function"==typeof a.removeAttribute&&"function"==typeof a.setAttribute&&"string"==typeof a.namespaceURI&&"function"==typeof a.insertBefore)},jb=function(a){return"object"===(void 0===l?"undefined":T(l))?a instanceof l:a&&"object"===(void 0===a?"undefined":T(a))&&"number"==typeof a.nodeType&&"string"==typeof a.nodeName},kb=function(a,b,c){na[a]&&r(na[a],function(a){a.call(f,b,c,Va)})},lb=function(a){var b=void 0;if(kb("beforeSanitizeElements",a,null),ib(a))return eb(a),!0;if(v(a.nodeName,/[\u0080-\uFFFF]/))return eb(a),!0;var c=u(a.nodeName);if(kb("uponSanitizeElement",a,{tagName:c,allowedTags:va}),!jb(a.firstElementChild)&&(!jb(a.content)||!jb(a.content.firstElementChild))&&z(/<[/\w]/g,a.innerHTML)&&z(/<[/\w]/g,a.textContent))return eb(a),!0;if(!va[c]||za[c]){if(Na&&!Qa[c])for(var d=ca(a),e=ba(a),g=e.length-1;g>=0;--g)d.insertBefore(_(e[g],!0),aa(a));return eb(a),!0}return a instanceof m&&!db(a)?(eb(a),!0):"noscript"!==c&&"noembed"!==c||!z(/<\/no(script|embed)/i,a.innerHTML)?(Ea&&3===a.nodeType&&(b=a.textContent,b=w(b,oa," "),b=w(b,pa," "),a.textContent!==b&&(t(f.removed,{element:a.cloneNode()}),a.textContent=b)),kb("afterSanitizeElements",a,null),!1):(eb(a),!0)},mb=function(a,b,c){if(Ma&&("id"===b||"name"===b)&&(c in h||c in Wa))return!1;if(Ca&&z(qa,b));else if(Ba&&z(ra,b));else{if(!xa[b]||Aa[b])return!1;if(Ta[b]);else if(z(ua,w(c,ta,"")));else if("src"!==b&&"xlink:href"!==b&&"href"!==b||"script"===a||0!==x(c,"data:")||!Ra[a])if(Da&&!z(sa,w(c,ta,"")));else if(c)return!1}return!0},nb=function(a){var b=void 0,c=void 0,d=void 0,e=void 0;kb("beforeSanitizeAttributes",a,null);var g=a.attributes;if(g){var h={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:xa};for(e=g.length;e--;){var i=b=g[e],j=i.name,k=i.namespaceURI;if(c=y(b.value),d=u(j),h.attrName=d,h.attrValue=c,h.keepAttr=!0,h.forceKeepAttr=void 0,kb("uponSanitizeAttribute",a,h),c=h.attrValue,!h.forceKeepAttr&&(fb(j,a),h.keepAttr))if(z(/\/>/i,c))fb(j,a);else{Ea&&(c=w(c,oa," "),c=w(c,pa," "));var l=a.nodeName.toLowerCase();if(mb(l,d,c))try{k?a.setAttributeNS(k,j,c):a.setAttribute(j,c),s(f.removed)}catch(a){}}}kb("afterSanitizeAttributes",a,null)}},ob=function pb(a){var b=void 0,c=hb(a);for(kb("beforeSanitizeShadowDOM",a,null);b=c.nextNode();)kb("uponSanitizeShadowNode",b,null),lb(b)||(b.content instanceof i&&pb(b.content),nb(b));kb("afterSanitizeShadowDOM",a,null)};return f.sanitize=function(b,c){var d=void 0,e=void 0,h=void 0,j=void 0,k=void 0;if(b||(b="<!-->"),"string"!=typeof b&&!jb(b)){if("function"!=typeof b.toString)throw A("toString is not a function");if("string"!=typeof(b=b.toString()))throw A("dirty is not a string, aborting")}if(!f.isSupported){if("object"===T(a.toStaticHTML)||"function"==typeof a.toStaticHTML){if("string"==typeof b)return a.toStaticHTML(b);if(jb(b))return a.toStaticHTML(b.outerHTML)}return b}if(Ga||Xa(c),f.removed=[],"string"==typeof b&&(Oa=!1),Oa);else if(b instanceof l)1===(e=(d=gb("<!---->")).ownerDocument.importNode(b,!0)).nodeType&&"BODY"===e.nodeName||"HTML"===e.nodeName?d=e:d.appendChild(e);else{if(!Ia&&!Ea&&!Fa&&-1===b.indexOf("<"))return ea&&La?ea.createHTML(b):b;if(!(d=gb(b)))return Ia?null:fa}d&&Ha&&eb(d.firstChild);for(var m=hb(Oa?b:d);h=m.nextNode();)3===h.nodeType&&h===j||lb(h)||(h.content instanceof i&&ob(h.content),nb(h),j=h);if(j=null,Oa)return b;if(Ia){if(Ja)for(k=ka.call(d.ownerDocument);d.firstChild;)k.appendChild(d.firstChild);else k=d;return Ka&&(k=la.call(g,k,!0)),k}var n=Fa?d.outerHTML:d.innerHTML;return Ea&&(n=w(n,oa," "),n=w(n,pa," ")),ea&&La?ea.createHTML(n):n},f.setConfig=function(a){Xa(a),Ga=!0},f.clearConfig=function(){Va=null,Ga=!1},f.isValidAttribute=function(a,b,c){Va||Xa({});var d=u(a),e=u(b);return mb(d,e,c)},f.addHook=function(a,b){"function"==typeof b&&(na[a]=na[a]||[],t(na[a],b))},f.removeHook=function(a){na[a]&&s(na[a])},f.removeHooks=function(a){na[a]&&(na[a]=[])},f.removeAllHooks=function(){na={}},f}()}),vocUserRequirejsNamespace.define("vocento-vocuser-combined-dependencies",function(){});