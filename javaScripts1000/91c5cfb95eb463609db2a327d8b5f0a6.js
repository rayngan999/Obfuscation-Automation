!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["preact/preact.sync.js"]=n():e["preact/preact.sync.js"]=n()}(this,(function(){return function(e){var n={};function t(_){if(n[_])return n[_].exports;var r=n[_]={i:_,l:!1,exports:{}};return e[_].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,_){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:_})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var _=Object.create(null);if(t.r(_),Object.defineProperty(_,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(_,r,function(n){return e[n]}.bind(null,r));return _},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=240)}({240:function(e,n,t){e.exports=t(300)},300:function(e,n,t){"use strict";t.r(n);var _,r,o,u,l,i={},c=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a(e,n){for(var t in n)e[t]=n[t];return e}function s(e){var n=e.parentNode;n&&n.removeChild(e)}function p(e,n,t){var _,r,o,u=arguments,l={};for(o in n)"key"==o?_=n[o]:"ref"==o?r=n[o]:l[o]=n[o];if(arguments.length>3)for(t=[t],o=3;o<arguments.length;o++)t.push(u[o]);if(null!=t&&(l.children=t),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===l[o]&&(l[o]=e.defaultProps[o]);return d(e,l,_,r,null)}function d(e,n,t,r,o){var u={type:e,props:n,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++_.__v:o};return null!=_.vnode&&_.vnode(u),u}function h(e){return e.children}function v(e,n){this.props=e,this.context=n}function y(e,n){if(null==n)return e.__?y(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?y(e):null}function m(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return m(e)}}function b(e){(!e.__d&&(e.__d=!0)&&r.push(e)&&!g.__r++||u!==_.debounceRendering)&&((u=_.debounceRendering)||o)(g)}function g(){for(var e;g.__r=r.length;)e=r.sort((function(e,n){return e.__v.__b-n.__v.__b})),r=[],e.some((function(e){var n,t,_,r,o,u;e.__d&&(o=(r=(n=e).__v).__e,(u=n.__P)&&(t=[],(_=a({},r)).__v=r.__v+1,H(u,r,_,n.__n,void 0!==u.ownerSVGElement,null!=r.__h?[o]:null,t,null==o?y(r):o,r.__h),O(t,r),r.__e!=o&&m(r)))}))}function k(e,n,t,_,r,o,u,l,f,a){var s,p,v,m,b,g,k,x=_&&_.__k||c,P=x.length;for(t.__k=[],s=0;s<n.length;s++)if(null!=(m=t.__k[s]=null==(m=n[s])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?d(null,m,null,null,m):Array.isArray(m)?d(h,{children:m},null,null,null):m.__b>0?d(m.type,m.props,m.key,null,m.__v):m)){if(m.__=t,m.__b=t.__b+1,null===(v=x[s])||v&&m.key==v.key&&m.type===v.type)x[s]=void 0;else for(p=0;p<P;p++){if((v=x[p])&&m.key==v.key&&m.type===v.type){x[p]=void 0;break}v=null}H(e,m,v=v||i,r,o,u,l,f,a),b=m.__e,(p=m.ref)&&v.ref!=p&&(k||(k=[]),v.ref&&k.push(v.ref,null,m),k.push(p,m.__c||b,m)),null!=b?(null==g&&(g=b),"function"==typeof m.type&&null!=m.__k&&m.__k===v.__k?m.__d=f=C(m,f,e):f=S(e,m,v,x,b,f),a||"option"!==t.type?"function"==typeof t.type&&(t.__d=f):e.value=""):f&&v.__e==f&&f.parentNode!=e&&(f=y(v))}for(t.__e=g,s=P;s--;)null!=x[s]&&("function"==typeof t.type&&null!=x[s].__e&&x[s].__e==t.__d&&(t.__d=y(_,s+1)),R(x[s],x[s]));if(k)for(s=0;s<k.length;s++)A(k[s],k[++s],k[++s])}function C(e,n,t){var _,r;for(_=0;_<e.__k.length;_++)(r=e.__k[_])&&(r.__=e,n="function"==typeof r.type?C(r,n,t):S(t,r,r,e.__k,r.__e,n));return n}function x(e,n){return n=n||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){x(e,n)})):n.push(e)),n}function S(e,n,t,_,r,o){var u,l,i;if(void 0!==n.__d)u=n.__d,n.__d=void 0;else if(null==t||r!=o||null==r.parentNode)e:if(null==o||o.parentNode!==e)e.appendChild(r),u=null;else{for(l=o,i=0;(l=l.nextSibling)&&i<_.length;i+=2)if(l==r)break e;e.insertBefore(r,o),u=o}return void 0!==u?u:r.nextSibling}function P(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]=null==t?"":"number"!=typeof t||f.test(n)?t:t+"px"}function E(e,n,t,_,r){var o;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(n in _)t&&n in t||P(e.style,n,"");if(t)for(n in t)_&&t[n]===_[n]||P(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])o=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+o]=t,t?_||e.addEventListener(n,o?N:w,o):e.removeEventListener(n,o?N:w,o);else if("dangerouslySetInnerHTML"!==n){if(r)n=n.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null!=t&&(!1!==t||"a"===n[0]&&"r"===n[1])?e.setAttribute(n,t):e.removeAttribute(n))}}function w(e){this.l[e.type+!1](_.event?_.event(e):e)}function N(e){this.l[e.type+!0](_.event?_.event(e):e)}function H(e,n,t,r,o,u,l,i,c){var f,s,p,d,y,m,b,g,C,x,S,P=n.type;if(void 0!==n.constructor)return null;null!=t.__h&&(c=t.__h,i=n.__e=t.__e,n.__h=null,u=[i]),(f=_.__b)&&f(n);try{e:if("function"==typeof P){if(g=n.props,C=(f=P.contextType)&&r[f.__c],x=f?C?C.props.value:f.__:r,t.__c?b=(s=n.__c=t.__c).__=s.__E:("prototype"in P&&P.prototype.render?n.__c=s=new P(g,x):(n.__c=s=new v(g,x),s.constructor=P,s.render=T),C&&C.sub(s),s.props=g,s.state||(s.state={}),s.context=x,s.__n=r,p=s.__d=!0,s.__h=[]),null==s.__s&&(s.__s=s.state),null!=P.getDerivedStateFromProps&&(s.__s==s.state&&(s.__s=a({},s.__s)),a(s.__s,P.getDerivedStateFromProps(g,s.__s))),d=s.props,y=s.state,p)null==P.getDerivedStateFromProps&&null!=s.componentWillMount&&s.componentWillMount(),null!=s.componentDidMount&&s.__h.push(s.componentDidMount);else{if(null==P.getDerivedStateFromProps&&g!==d&&null!=s.componentWillReceiveProps&&s.componentWillReceiveProps(g,x),!s.__e&&null!=s.shouldComponentUpdate&&!1===s.shouldComponentUpdate(g,s.__s,x)||n.__v===t.__v){s.props=g,s.state=s.__s,n.__v!==t.__v&&(s.__d=!1),s.__v=n,n.__e=t.__e,n.__k=t.__k,n.__k.forEach((function(e){e&&(e.__=n)})),s.__h.length&&l.push(s);break e}null!=s.componentWillUpdate&&s.componentWillUpdate(g,s.__s,x),null!=s.componentDidUpdate&&s.__h.push((function(){s.componentDidUpdate(d,y,m)}))}s.context=x,s.props=g,s.state=s.__s,(f=_.__r)&&f(n),s.__d=!1,s.__v=n,s.__P=e,f=s.render(s.props,s.state,s.context),s.state=s.__s,null!=s.getChildContext&&(r=a(a({},r),s.getChildContext())),p||null==s.getSnapshotBeforeUpdate||(m=s.getSnapshotBeforeUpdate(d,y)),S=null!=f&&f.type===h&&null==f.key?f.props.children:f,k(e,Array.isArray(S)?S:[S],n,t,r,o,u,l,i,c),s.base=n.__e,n.__h=null,s.__h.length&&l.push(s),b&&(s.__E=s.__=null),s.__e=!1}else null==u&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=U(t.__e,n,t,r,o,u,l,c);(f=_.diffed)&&f(n)}catch(e){n.__v=null,(c||null!=u)&&(n.__e=i,n.__h=!!c,u[u.indexOf(i)]=null),_.__e(e,n,t)}}function O(e,n){_.__c&&_.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){_.__e(e,n.__v)}}))}function U(e,n,t,_,r,o,u,l){var f,a,p,d,h=t.props,v=n.props,y=n.type,m=0;if("svg"===y&&(r=!0),null!=o)for(;m<o.length;m++)if((f=o[m])&&(f===e||(y?f.localName==y:3==f.nodeType))){e=f,o[m]=null;break}if(null==e){if(null===y)return document.createTextNode(v);e=r?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,v.is&&v),o=null,l=!1}if(null===y)h===v||l&&e.data===v||(e.data=v);else{if(o=o&&c.slice.call(e.childNodes),a=(h=t.props||i).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!l){if(null!=o)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(p||a)&&(p&&(a&&p.__html==a.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}if(function(e,n,t,_,r){var o;for(o in t)"children"===o||"key"===o||o in n||E(e,o,null,t[o],_);for(o in n)r&&"function"!=typeof n[o]||"children"===o||"key"===o||"value"===o||"checked"===o||t[o]===n[o]||E(e,o,n[o],t[o],_)}(e,v,h,r,l),p)n.__k=[];else if(m=n.props.children,k(e,Array.isArray(m)?m:[m],n,t,_,r&&"foreignObject"!==y,o,u,e.firstChild,l),null!=o)for(m=o.length;m--;)null!=o[m]&&s(o[m]);l||("value"in v&&void 0!==(m=v.value)&&(m!==e.value||"progress"===y&&!m)&&E(e,"value",m,h.value,!1),"checked"in v&&void 0!==(m=v.checked)&&m!==e.checked&&E(e,"checked",m,h.checked,!1))}return e}function A(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){_.__e(e,t)}}function R(e,n,t){var r,o,u;if(_.unmount&&_.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||A(r,null,n)),t||"function"==typeof e.type||(t=null!=(o=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){_.__e(e,n)}r.base=r.__P=null}if(r=e.__k)for(u=0;u<r.length;u++)r[u]&&R(r[u],n,t);null!=o&&s(o)}function T(e,n,t){return this.constructor(e,t)}function D(e,n,t){var r,o,u;_.__&&_.__(e,n),o=(r="function"==typeof t)?null:t&&t.__k||n.__k,u=[],H(n,e=(!r&&t||n).__k=p(h,null,[e]),o||i,i,void 0!==n.ownerSVGElement,!r&&t?[t]:o?null:n.firstChild?c.slice.call(n.childNodes):null,u,!r&&t?t:o?o.__e:n.firstChild,r),O(u,e)}function M(e,n){D(e,n,M)}function W(e,n,t){var _,r,o,u=arguments,l=a({},e.props);for(o in n)"key"==o?_=n[o]:"ref"==o?r=n[o]:l[o]=n[o];if(arguments.length>3)for(t=[t],o=3;o<arguments.length;o++)t.push(u[o]);return null!=t&&(l.children=t),d(e.type,l,_||e.key,r||e.ref,null)}_={__e:function(e,n){for(var t,_,r;n=n.__;)if((t=n.__c)&&!t.__)try{if((_=t.constructor)&&null!=_.getDerivedStateFromError&&(t.setState(_.getDerivedStateFromError(e)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(e),r=t.__d),r)return t.__E=t}catch(n){e=n}throw e},__v:0},v.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof e&&(e=e(a({},t),this.props)),e&&a(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),b(this))},v.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),b(this))},v.prototype.render=h,r=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0,l=0;var j,L,F,V=0,$=[],I=_.__b,B=_.__r,z=_.diffed,q=_.__c,G=_.unmount;function Z(e,n){_.__h&&_.__h(L,e,V||n),V=0;var t=L.__H||(L.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function Y(e){return V=1,J(re,e)}function J(e,n,t){var _=Z(j++,2);return _.t=e,_.__c||(_.__=[t?t(n):re(void 0,n),function(e){var n=_.t(_.__[0],e);_.__[0]!==n&&(_.__=[n,_.__[1]],_.__c.setState({}))}],_.__c=L),_.__}function K(e,n){var t=Z(j++,4);!_.__s&&_e(t.__H,n)&&(t.__=e,t.__H=n,L.__h.push(t))}function Q(e,n){var t=Z(j++,7);return _e(t.__H,n)&&(t.__=e(),t.__H=n,t.__h=e),t.__}function X(){$.forEach((function(e){if(e.__P)try{e.__H.__h.forEach(ne),e.__H.__h.forEach(te),e.__H.__h=[]}catch(n){e.__H.__h=[],_.__e(n,e.__v)}})),$=[]}_.__b=function(e){L=null,I&&I(e)},_.__r=function(e){B&&B(e),j=0;var n=(L=e.__c).__H;n&&(n.__h.forEach(ne),n.__h.forEach(te),n.__h=[])},_.diffed=function(e){z&&z(e);var n=e.__c;n&&n.__H&&n.__H.__h.length&&(1!==$.push(n)&&F===_.requestAnimationFrame||((F=_.requestAnimationFrame)||function(e){var n,t=function(){clearTimeout(_),ee&&cancelAnimationFrame(n),setTimeout(e)},_=setTimeout(t,100);ee&&(n=requestAnimationFrame(t))})(X)),L=void 0},_.__c=function(e,n){n.some((function(e){try{e.__h.forEach(ne),e.__h=e.__h.filter((function(e){return!e.__||te(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],_.__e(t,e.__v)}})),q&&q(e,n)},_.unmount=function(e){G&&G(e);var n=e.__c;if(n&&n.__H)try{n.__H.__.forEach(ne)}catch(e){_.__e(e,n.__v)}};var ee="function"==typeof requestAnimationFrame;function ne(e){var n=L;"function"==typeof e.__c&&e.__c(),L=n}function te(e){var n=L;e.__c=e.__(),L=n}function _e(e,n){return!e||e.length!==n.length||n.some((function(n,t){return n!==e[t]}))}function re(e,n){return"function"==typeof n?n(e):n}function oe(e,n){for(var t in n)e[t]=n[t];return e}function ue(e,n){for(var t in e)if("__source"!==t&&!(t in n))return!0;for(var _ in n)if("__source"!==_&&e[_]!==n[_])return!0;return!1}function le(e){this.props=e}(le.prototype=new v).isPureReactComponent=!0,le.prototype.shouldComponentUpdate=function(e,n){return ue(this.props,e)||ue(this.state,n)};var ie=_.__b;_.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),ie&&ie(e)};var ce="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;var fe=function(e,n){return null==e?null:x(x(e).map(n))},ae={map:fe,forEach:fe,count:function(e){return e?x(e).length:0},only:function(e){var n=x(e);if(1!==n.length)throw"Children.only";return n[0]},toArray:x},se=_.__e;_.__e=function(e,n,t){if(e.then)for(var _,r=n;r=r.__;)if((_=r.__c)&&_.__c)return null==n.__e&&(n.__e=t.__e,n.__k=t.__k),_.__c(e,n);se(e,n,t)};var pe=_.unmount;function de(){this.__u=0,this.t=null,this.__b=null}function he(e){var n=e.__.__c;return n&&n.__e&&n.__e(e)}function ve(){this.u=null,this.o=null}_.unmount=function(e){var n=e.__c;n&&n.__R&&n.__R(),n&&!0===e.__h&&(e.type=null),pe&&pe(e)},(de.prototype=new v).__c=function(e,n){var t=n.__c,_=this;null==_.t&&(_.t=[]),_.t.push(t);var r=he(_.__v),o=!1,u=function(){o||(o=!0,t.__R=null,r?r(l):l())};t.__R=u;var l=function(){if(!--_.__u){if(_.state.__e){var e=_.state.__e;_.__v.__k[0]=function e(n,t,_){return n&&(n.__v=null,n.__k=n.__k&&n.__k.map((function(n){return e(n,t,_)})),n.__c&&n.__c.__P===t&&(n.__e&&_.insertBefore(n.__e,n.__d),n.__c.__e=!0,n.__c.__P=_)),n}(e,e.__c.__P,e.__c.__O)}var n;for(_.setState({__e:_.__b=null});n=_.t.pop();)n.forceUpdate()}},i=!0===n.__h;_.__u++||i||_.setState({__e:_.__b=_.__v.__k[0]}),e.then(u,u)},de.prototype.componentWillUnmount=function(){this.t=[]},de.prototype.render=function(e,n){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),_=this.__v.__k[0].__c;this.__v.__k[0]=function e(n,t,_){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach((function(e){"function"==typeof e.__c&&e.__c()})),n.__c.__H=null),null!=(n=oe({},n)).__c&&(n.__c.__P===_&&(n.__c.__P=t),n.__c=null),n.__k=n.__k&&n.__k.map((function(n){return e(n,t,_)}))),n}(this.__b,t,_.__O=_.__P)}this.__b=null}var r=n.__e&&p(h,null,e.fallback);return r&&(r.__h=null),[p(h,null,n.__e?null:e.children),r]};var ye=function(e,n,t){if(++t[1]===t[0]&&e.o.delete(n),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.o.size))for(t=e.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;e.u=t=t[2]}};function me(e){return this.getChildContext=function(){return e.context},e.children}function be(e){var n=this,t=e.i;n.componentWillUnmount=function(){D(null,n.l),n.l=null,n.i=null},n.i&&n.i!==t&&n.componentWillUnmount(),e.__v?(n.l||(n.i=t,n.l={nodeType:1,parentNode:t,childNodes:[],appendChild:function(e){this.childNodes.push(e),n.i.appendChild(e)},insertBefore:function(e,t){this.childNodes.push(e),n.i.appendChild(e)},removeChild:function(e){this.childNodes.splice(this.childNodes.indexOf(e)>>>1,1),n.i.removeChild(e)}}),D(p(me,{context:n.context},e.__v),n.l)):n.l&&n.componentWillUnmount()}(ve.prototype=new v).__e=function(e){var n=this,t=he(n.__v),_=n.o.get(e);return _[0]++,function(r){var o=function(){n.props.revealOrder?(_.push(r),ye(n,e,_)):r()};t?t(o):o()}},ve.prototype.render=function(e){this.u=null,this.o=new Map;var n=x(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&n.reverse();for(var t=n.length;t--;)this.o.set(n[t],this.u=[1,0,this.u]);return e.children},ve.prototype.componentDidUpdate=ve.prototype.componentDidMount=function(){var e=this;this.o.forEach((function(n,t){ye(e,t,n)}))};var ge="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,ke=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Ce=function(e){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(e)};v.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(e){Object.defineProperty(v.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(n){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:n})}})}));var xe=_.event;function Se(){}function Pe(){return this.cancelBubble}function Ee(){return this.defaultPrevented}_.event=function(e){return xe&&(e=xe(e)),e.persist=Se,e.isPropagationStopped=Pe,e.isDefaultPrevented=Ee,e.nativeEvent=e};var we,Ne={configurable:!0,get:function(){return this.class}},He=_.vnode;_.vnode=function(e){var n=e.type,t=e.props,_=t;if("string"==typeof n){for(var r in _={},t){var o=t[r];"value"===r&&"defaultValue"in t&&null==o||("defaultValue"===r&&"value"in t&&null==t.value?r="value":"download"===r&&!0===o?o="":/ondoubleclick/i.test(r)?r="ondblclick":/^onchange(textarea|input)/i.test(r+n)&&!Ce(t.type)?r="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(r)?r=r.toLowerCase():ke.test(r)?r=r.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===o&&(o=void 0),_[r]=o)}"select"==n&&_.multiple&&Array.isArray(_.value)&&(_.value=x(t.children).forEach((function(e){e.props.selected=-1!=_.value.indexOf(e.props.value)}))),"select"==n&&null!=_.defaultValue&&(_.value=x(t.children).forEach((function(e){e.props.selected=_.multiple?-1!=_.defaultValue.indexOf(e.props.value):_.defaultValue==e.props.value}))),e.props=_}n&&t.class!=t.className&&(Ne.enumerable="className"in t,null!=t.className&&(_.class=t.className),Object.defineProperty(_,"className",Ne)),e.$$typeof=ge,He&&He(e)};var Oe=_.__r;_.__r=function(e){Oe&&Oe(e),we=e.__c};var Ue={ReactCurrentDispatcher:{current:{readContext:function(e){return we.__n[e.__c].props.value}}}};"object"==typeof performance&&"function"==typeof performance.now&&performance.now.bind(performance);function Ae(e){return!!e&&e.$$typeof===ge}var Re={useState:Y,useReducer:J,useEffect:function(e,n){var t=Z(j++,3);!_.__s&&_e(t.__H,n)&&(t.__=e,t.__H=n,L.__H.__h.push(t))},useLayoutEffect:K,useRef:function(e){return V=5,Q((function(){return{current:e}}),[])},useImperativeHandle:function(e,n,t){V=6,K((function(){"function"==typeof e?e(n()):e&&(e.current=n())}),null==t?t:t.concat(e))},useMemo:Q,useCallback:function(e,n){return V=8,Q((function(){return e}),n)},useContext:function(e){var n=L.context[e.__c],t=Z(j++,9);return t.__c=e,n?(null==t.__&&(t.__=!0,n.sub(L)),n.props.value):e.__},useDebugValue:function(e,n){_.useDebugValue&&_.useDebugValue(n?n(e):e)},version:"16.8.0",Children:ae,render:function(e,n,t){return null==n.__k&&(n.textContent=""),D(e,n),"function"==typeof t&&t(),e?e.__c:null},hydrate:function(e,n,t){return M(e,n),"function"==typeof t&&t(),e?e.__c:null},unmountComponentAtNode:function(e){return!!e.__k&&(D(null,e),!0)},createPortal:function(e,n){return p(be,{__v:e,i:n})},createElement:p,createContext:function(e,n){var t={__c:n="__cC"+l++,__:e,Consumer:function(e,n){return e.children(n)},Provider:function(e){var t,_;return this.getChildContext||(t=[],(_={})[n]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&t.some(b)},this.sub=function(e){t.push(e);var n=e.componentWillUnmount;e.componentWillUnmount=function(){t.splice(t.indexOf(e),1),n&&n.call(e)}}),e.children}};return t.Provider.__=t.Consumer.contextType=t},createFactory:function(e){return p.bind(null,e)},cloneElement:function(e){return Ae(e)?W.apply(null,arguments):e},createRef:function(){return{current:null}},Fragment:h,isValidElement:Ae,findDOMNode:function(e){return e&&(e.base||1===e.nodeType&&e)||null},Component:v,PureComponent:le,memo:function(e,n){function t(e){var t=this.props.ref,_=t==e.ref;return!_&&t&&(t.call?t(null):t.current=null),n?!n(this.props,e)||!_:ue(this.props,e)}function _(n){return this.shouldComponentUpdate=t,p(e,n)}return _.displayName="Memo("+(e.displayName||e.name)+")",_.prototype.isReactComponent=!0,_.__f=!0,_},forwardRef:function(e){function n(n,t){var _=oe({},n);return delete _.ref,e(_,(t=n.ref||t)&&("object"!=typeof t||"current"in t)?t:null)}return n.$$typeof=ce,n.render=n,n.prototype.isReactComponent=n.__f=!0,n.displayName="ForwardRef("+(e.displayName||e.name)+")",n},unstable_batchedUpdates:function(e,n){return e(n)},StrictMode:h,Suspense:de,SuspenseList:ve,lazy:function(e){var n,t,_;function r(r){if(n||(n=e()).then((function(e){t=e.default||e}),(function(e){_=e})),_)throw _;if(!t)throw n;return p(t,r)}return r.displayName="Lazy",r.__f=!0,r},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Ue};window["preact/compat"]=Re,window.preact=Re}})}));