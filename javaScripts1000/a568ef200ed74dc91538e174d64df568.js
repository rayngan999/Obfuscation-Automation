(self.sitewideWebpack=self.sitewideWebpack||[]).push([[6397],{85365:function(e,n,t){"use strict";t.r(n),t.d(n,{MegaNav:function(){return ke},default:function(){return Pe}});var r=t(63804),o=t.n(r),i=t(62115),a=t(91633),l=t(25997),s=t(28481),c=t(57058),u=t(96156),d=t(94184),v=t.n(d),p=t(22122),f=t(99887),m=t(68134),b=t(12795),g=(0,r.createContext)({}),y=t(70917);function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var S=function(e){return e.replace(/<\/?[^>]+(>|$)/g,"")},j=(0,y.jsx)("strong",{className:"new"},"New!");function O(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=(0,r.useContext)(g),t=n.displaySubMenu,o=(0,i.u)(),a=o.brand,l=o.color,s=o.font,c=x(x({},s.primary),{},{color:l.gray80,lineHeight:"15px",padding:"5px 0",textTransform:"capitalize"}),u={color:l.b1,letterSpacing:0},d={at:{color:l.gray54},gap:u,gapfs:u,on:[{letterSpacing:0},e&&{background:l.g5},t&&{a:{color:"#585858",display:"inline",fontWeight:100,"&:hover":{borderBottom:"1px solid #000"}}}]};return[c,d[a]]}function w(){var e=(0,i.u)(),n=e.brand,t=e.color,r=e.font,o={display:"inline","&:hover":{borderBottom:"0.75px solid ".concat(t.g2)}},a={color:t.gray80,letterSpacing:1,"&:hover":{borderBottom:"1px solid ".concat(t.gray80)}},l={"&:hover":{color:t.g2}};return[o,{at:{"&:hover":x(x({},r.tertiary),{},{color:t.g1,lineHeight:0,borderBottom:0})},br:a,brfs:a,gap:l,gapfs:l,on:{"&:hover":{borderBottom:"0.75px solid ".concat(t.gray80)}}}[n]]}var E=function(e){var n,t,r=e.categoryAriaLabel,o=e.categoryId,a=e.categoryLink,l=e.categoryName,s=e.categoryStyles,c=e.isActive,u=(0,i.u)(),d=u.brand,p=u.color,f=u.font,m=O(c),b=w(),g=null==s||null===(n=s.className)||void 0===n?void 0:n.includes("sale"),h={color:p.g3},E={borderBottom:0,color:p.g2},N={at:x(x({},f.tertiary),{},{color:p.g1,lineHeight:0}),br:h,brfs:h,gap:E,gapfs:E},k={color:p.r1,"&:hover":{borderBottom:"1px solid ".concat(p.r1)}},P={color:p.r1,"&:hover":{borderBottom:"0.75px solid ".concat(p.r1)}},D={at:{color:p.r1},br:k,brfs:k,gap:P,gapfs:P,on:{color:p.r1,"&:hover":{borderBottom:"0.75px solid ".concat(p.r1)}}},C=[b,c&&N[d],g&&D[d]];return(0,y.jsx)("li",{className:v()("catnav--item",{"catnav--item-selected":c}),css:m},(0,y.jsx)("a",{"aria-label":r,className:v()(null==s?void 0:s.className,"catnav--item--link"),css:C,"data-categoryid":o,href:a,style:null==s?void 0:s.inline},(t=l).toLowerCase().startsWith("new!")?(0,y.jsx)("span",null,j,S(t.slice(4))):(0,y.jsx)("span",null,S(t))))},N={9:"tab",13:"enter",16:"shift-tab",27:"escape",32:"spacebar",37:"left",38:"up",39:"right",40:"down"},k=".catnav--item--link",P=".catnav--item:last-child .catnav--item--link",D=".meganav-category-group",C=".topNavLink",A=".meganav-column",L=".divisionLink",B=".catnav-links",F=/\W/gi,H="data-divisionname",W=function(e){return"wcd-"+e.toLowerCase().replace(F,"")};function I(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function T(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?I(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function Z(e){var n=e.className,t=e.children,o=e.html,a=(0,i.u)().brand,l=(0,r.useContext)(g).ignoreDefaultFlyoutStyles,s=Boolean(o),c="&:not(:last-child)",d=(0,u.Z)({},c,{marginBottom:32}),p=(0,u.Z)({},c,{marginBottom:24}),f={br:d,brfs:d,gap:p,gapfs:p,on:(0,u.Z)({},c,{marginBottom:20})},m=!s&&!l&&f[a];return(0,y.jsx)("ul",{className:v()("meganav-category-group",n),css:m,dangerouslySetInnerHTML:o?{__html:o}:void 0},t)}var M=function(e){var n=e.hasSplitColumns,t=e.header,o=e.headerAriaLabel,a=e.headerId,l=e.customUrl,s=e.categoryGroupColumns,c=W(t),u=(0,i.u)(),d=u.brand,v=u.color,f=u.font,m=u.spacing,b=(0,r.useContext)(g).ignoreDefaultFlyoutStyles,h=[{lineHeight:"15px"},{on:{display:"block",letterSpacing:0,textAlign:"left",textTransform:"none",width:"100%"}}[d]],x={float:"left",width:"calc(50% - ".concat(16,"px)"),"&:not(:first-of-type)":{marginLeft:32}},S=!b&&n&&x;return(0,y.jsx)(Z,{className:c},(0,y.jsx)("li",{className:"catnav--header",css:h},function(){if(!t)return null;var e=T(T({},f.secondary),{},{borderBottom:"0.75px solid ".concat(v.g3),color:v.b1,display:"block",marginBottom:8,padding:"0 0 ".concat(m.small," 0")}),n={borderBottom:"0.5px solid ".concat(v.g3)},r={at:T(T({},f.tertiary),{},{borderBottom:0,color:v.g1,margin:0}),br:n,brfs:n,on:{borderBottom:"0.75px solid ".concat(v.g4),color:v.g1,marginBottom:12}},i={"aria-label":o,css:!b&&[e,r[d]],"data-categoryid":a};return l?(0,y.jsx)("a",(0,p.Z)({},i,{href:l}),t):(0,y.jsx)("span",i,t)}(),(0,y.jsx)("div",null,s.map((function(e,n){var t="column_".concat(n);return(0,y.jsx)("ul",{key:t,className:"catnav-links",css:S},e.map((function(e){var n=e.categoryId;return(0,y.jsx)(E,(0,p.Z)({key:n},e))})))})))))},_=(0,r.memo)(M),z=function(e){var n=e.html,t={".catnav--item":O(),".catnav--item--link":w()};return(0,y.jsx)(Z,{className:"custom",css:t,html:n})},q=t(83998);function R(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function K(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?R(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function V(e){if(function(e){return"wcdInjected"===e.type}(e)){var n=e.html;return(0,y.jsx)(z,{html:n})}return(0,y.jsx)(_,e)}function G(e){var n=e.children,t=(0,i.u)().brand,o=!(0,r.useContext)(g).ignoreDefaultFlyoutStyles&&[{display:"inline-flex",justifyContent:"center",margin:"24px auto 32px",maxWidth:"100%",textAlign:"left"},{on:{margin:"16px auto 32px"}}[t]];return(0,y.jsx)("div",{className:"wcdNavLimit",css:o},n)}function U(e){var n=e.column,t=(0,i.u)().brand,o=(0,r.useContext)(g),a=o.displaySubMenu,l=o.ignoreDefaultFlyoutStyles,s=n.some((function(e){return e.hasSplitColumns})),c=n.map((function(e,n){return(0,y.jsx)(V,(0,p.Z)({key:n},e,{hasSplitColumns:s}))})),u=[{width:s?448:208,"&:not(:first-of-type)":{marginLeft:32},"&:first-of-type,&:last-child":{marginLeft:16}},{on:{textAlign:"left"}}[t]],d=v()("meganav-column",{"double-width-column":s}),f=l?{maxWidth:"100%"}:[u,a&&{on:{display:"block",float:"none",width:"100%","&:not(:first-of-type)":{padding:"0 !important"}}}[t]];return(0,y.jsx)("div",{className:d,css:f,"data-testid":d},c)}var Y=(0,y.jsx)(m.F,{name:"onflyoutedubanner"}),X=function(e){var n=e.flyoutName,t=e.displaySubMenu,o=e.flyoutColumns,a=e.ignoreDefaultFlyoutStyles,l=e.isExpanded,s=e.shouldDisplayOnBanner,c=(0,i.u)(),u=c.brand,d=c.color,p=(0,b.fx)().isCompressedHeader,m=(0,r.useContext)(f.FeatureFlagsContext).enabledFeatures;if(!o||0===o.length)return null;var h=t&&a,x=p?{top:"95%"}:{marginTop:15},S=K(K({backgroundColor:d.wh,display:l?"block":"none",justifyContent:"space-around",left:0},x),{},{overflow:"auto",padding:0,position:"absolute",textAlign:"center",whiteSpace:"normal",width:"100%",zIndex:q.rB.MEGA_NAV}),j={backgroundColor:d.wh,borderTop:"1px solid ".concat(d.g3),fontFamily:"Arial, sans-serif"},O={backgroundColor:"#f7f7f7"},w="1px solid #a1a1a1",E=[S,{br:O,brfs:O,gap:j,gapfs:j,on:{marginTop:1}}[u],h&&{on:{marginBottom:0}}[u],t&&{on:{borderBottom:w,borderLeft:w,borderRight:w,left:0,marginTop:1,position:"absolute",top:40}}[u]],N=v()("meganav",{custom:a},n),k=t?"megaNavSubMenu":"megaNav";return(0,y.jsx)("div",{className:N,css:E,"data-testid":k,id:k,onTouchStart:function(e){e.stopPropagation()}},(0,y.jsx)(g.Provider,{value:{ignoreDefaultFlyoutStyles:a,displaySubMenu:t}},s&&m[q.R2.SIZE_INCLUSIVITY_MEGANAV]&&Y,(0,y.jsx)(G,null,o.map((function(e,n){return(0,y.jsx)(U,{key:n,column:e})})))))};X.defaultProps={displaySubMenu:!1,columns:[]};var $=(0,r.memo)(X),J=t(9518);function Q(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ee(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Q(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Q(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var ne=function(e){var n,t=e.divisionLink,o=e.divisionLinkProps,a=e.divisionName,l=e.divisionAriaLabel,s=e.isActive,c=e.divisionStyles,u=e.divisionSubtitle,d=e.flyoutData,p=e.isExpanded,f=e.hasBeenExpanded,m=e.divisionHoverStart,g=e.divisionHoverEnd,h=e.divisionClickHandler,x=e.divisionTouchHandler,S=(0,i.u)().brand,j=(0,b.fx)().isCompressedHeader,O=(0,r.createRef)(),w=!(null==d||null===(n=d.flyoutColumns)||void 0===n||!n.length),E=W(a),N=null==d?void 0:d.displaySubMenu,k=[ee(ee({boxSizing:"border-box",display:"inline-block",flex:"auto",listStyleType:"none",margin:"0 auto"},j?{padding:"35px 0"}:{paddingBottom:15}),{},{position:"static",textAlign:"center",verticalAlign:"middle",whiteSpace:"nowrap",zIndex:q.rB.MEGA_NAV}),{on:N&&{position:"relative"}}[S]],P=function(e){w&&x(a)(e)};return(0,r.useEffect)((function(){var e=O.current;return e&&e.addEventListener("touchstart",P,{passive:!1}),function(){var e=O.current;e&&e.removeEventListener("touchstart",P)}}),[O.current,w]),(0,y.jsx)("li",{className:v()({topNavLink:!0,"topNavLink--expanded":p,subMenuLink:N}),css:k,onMouseEnter:m(a),onMouseLeave:g},(0,y.jsx)("div",{ref:O,tabIndex:-1},(0,y.jsx)(J.Z,{additionalLinkClassname:c.className,ariaLabel:l,divisionClickHandler:h,divisionLinkProps:o,divisionSubtitle:u,divisionTouchHandler:x,flyoutIsExpanded:p,hasFlyout:w,href:t,isActive:s,name:a})),d&&f&&(0,y.jsx)($,{displaySubMenu:d.displaySubMenu,flyoutColumns:d.flyoutColumns,flyoutName:E,ignoreDefaultFlyoutStyles:d.ignoreDefaultFlyoutStyles,isExpanded:p,shouldDisplayOnBanner:d.shouldDisplayOnBanner}))};function te(e){var n=e.onTouchEnd,t=(0,i.u)().brand,r=(0,b.fx)().isCompressedHeader,a={backgroundColor:"rgba(51,19,81,0)",height:"200vw",left:-100,position:"absolute",top:-250,width:"105vw",zIndex:q.rB.MEGA_NAV-1},l={on:{backgroundColor:"#000",height:"100vw",left:0,marginTop:r?90:42,opacity:.6,position:"absolute",width:"100%",zIndex:200}};return(0,y.jsx)(o().Fragment,null,(0,y.jsx)("div",{"aria-label":"expanded division touch sensor",css:a,onTouchEnd:n}),(0,y.jsx)("div",{css:l[t]}))}var re=function(e){e.current&&(clearTimeout(e.current),e.current=null)},oe=function(e){var n;null===(n=e.querySelector(k))||void 0===n||n.focus()},ie={down:function(e){var n=e.currentExpandedDivisionName,t=e.elementFocusedWhenKeyWasPressed,r=e.isAnyFlyoutExpanded,o=function(e){var n,t,r,o,i=null==e?void 0:e.parentElement;if(!i)return null;var a=null===(n=i.nextElementSibling)||void 0===n?void 0:n.querySelector(k);if(a)return a;var l=i.closest(B),s=null==l||null===(t=l.nextElementSibling)||void 0===t?void 0:t.querySelector(k);if(s)return s;var c=i.closest(D),u=null==c||null===(r=c.nextElementSibling)||void 0===r?void 0:r.querySelector(k);if(u)return u;var d=null==c||null===(o=c.parentElement)||void 0===o?void 0:o.nextElementSibling;if(d)return d.querySelector(k);var v=null==c?void 0:c.closest(C);return null!=v&&v.nextElementSibling?v.nextElementSibling.querySelector(L):null}(t);return o&&(o.focus(),o.classList.contains("divisionLink")&&r)?o.getAttribute(H):n},left:function(e){var n=e.currentExpandedDivisionName,t=function(e){var n,t,r=null===(n=e.closest(B))||void 0===n?void 0:n.previousElementSibling;if(r)return r;var o=null===(t=e.closest(A))||void 0===t?void 0:t.previousElementSibling;return null==o?void 0:o.querySelector(".catnav-links:last-child")}(e.elementFocusedWhenKeyWasPressed);return t&&oe(t),n},right:function(e){var n,t,r,o=e.currentExpandedDivisionName,i=(n=e.elementFocusedWhenKeyWasPressed,(null===(t=n.closest(B))||void 0===t?void 0:t.nextElementSibling)||(null===(r=n.closest(A))||void 0===r?void 0:r.nextElementSibling));return i&&oe(i),o},up:function(e){var n,t=e.currentExpandedDivisionName;return null===(n=function(e){var n,t,r,o,i=null==e?void 0:e.parentElement;if(!i)return null;var a=null===(n=i.previousElementSibling)||void 0===n?void 0:n.querySelector(k);if(a)return a;var l=i.closest(B),s=null==l||null===(t=l.previousElementSibling)||void 0===t?void 0:t.querySelector(P);if(s)return s;var c=i.closest(D),u=null==c||null===(r=c.previousElementSibling)||void 0===r?void 0:r.querySelector(P);if(u)return u;var d=null==c||null===(o=c.parentElement)||void 0===o?void 0:o.previousElementSibling;if(d){var v=d.querySelectorAll(P),p=v.length;return p>0&&v[p-1]||null}var f=null==c?void 0:c.closest(C);return f?f.querySelector(L):null}(e.elementFocusedWhenKeyWasPressed))||void 0===n||n.focus(),t}},ae=function(e,n){return e===n?"":n};function le(e,n,t){if(!e)return t;e.focus();var r=e.getAttribute(H);return r&&n?r:t}var se,ce={spacebar:function(e){var n=e.currentExpandedDivisionName,t=e.elementFocusedWhenKeyWasPressed.getAttribute(H);return ae(n,t)},left:function(e){var n,t,r,o,i=e.currentExpandedDivisionName,a=e.isAnyFlyoutExpanded;return le((n=e.elementFocusedWhenKeyWasPressed,r=null===(t=n.parentElement)||void 0===t?void 0:t.parentElement,null==(o=null==r?void 0:r.previousElementSibling)?void 0:o.querySelector(L)),a,i)},right:function(e){var n,t,r,o,i=e.currentExpandedDivisionName,a=e.isAnyFlyoutExpanded;return le((n=e.elementFocusedWhenKeyWasPressed,r=null===(t=n.parentElement)||void 0===t?void 0:t.parentElement,null==(o=null==r?void 0:r.nextElementSibling)?void 0:o.querySelector(L)),a,i)},down:function(e){var n,t=e.currentExpandedDivisionName,r=null===(n=e.elementFocusedWhenKeyWasPressed.parentElement)||void 0===n?void 0:n.nextElementSibling,o=null==r?void 0:r.querySelector(k);return null==o||o.focus(),t}},ue=function(e){var n=e.divisions,t=e.onTopNavIsHovered,l=(0,r.useState)(!1),u=(0,s.Z)(l,2),d=u[0],v=u[1],p=(0,r.useState)(null),f=(0,s.Z)(p,2),m=f[0],g=f[1],h=(0,r.useState)(new Set),x=(0,s.Z)(h,1)[0],S=(0,c.useLocalize)().localize,j=(0,i.u)().brand,O=(0,b.fx)().isCompressedHeader,w=S("marketing.meganav.navdivisions.aria_label"),E=function(e,n,t,r,i){var l=o().useRef(null),c=o().useRef(null),u=o().useRef(null),d=o().useState(!1),v=(0,s.Z)(d,2),p=v[0],f=v[1],m=o().useContext(a.k),b=m.fetchMegaNavData,g=m.megaNavDataStatus,y=function(){"resolved"!==g&&"pending"!==g&&(f(!0),b())};return{topNavFocus:function(){y()},divisionHoverStart:function(e){return function(){t||(l.current=setTimeout((function(){p?n(e):u.current=setTimeout((function(){n(e)}),100)}),200))}},divisionHoverEnd:function(){t||(re(l),re(u))},divisionClickHandler:function(r){return function(o){o.cancelable&&o.preventDefault(),t||(y(),n(e!==r?r:null))}},topNavHoverStart:function(){t||(c.current=setTimeout((function(){y()}),300),i&&i(!0))},topNavHoverEnd:function(){t||(n(null),f(!1),re(c),re(l),re(u),i&&i(!1))},divisionTouchHandler:function(t){return function(o){o.stopPropagation(),o.cancelable&&o.preventDefault(),y(),r(!0),n(e!==t?t:null)}}}}(m,g,d,v,t),k=E.divisionHoverStart,P=E.divisionHoverEnd,D=E.topNavFocus,C=E.topNavHoverStart,A=E.topNavHoverEnd,L=E.divisionTouchHandler,B=E.divisionClickHandler;m&&x.add(m);var F=n&&n.length>0,W={height:O?void 0:41,listStyleType:"none",margin:O?void 0:"0 auto",padding:0,width:"100%"},I={br:{position:"static",zIndex:q.rB.MEGA_NAV},brfs:{position:"static",zIndex:q.rB.MEGA_NAV},on:{display:"flex"}},T=[{textTransform:"uppercase",display:"flex",margin:O?void 0:"0 auto",maxWidth:1280,textAlign:"center",width:"100%"},{at:{fontSize:13,marginBottom:O?void 0:13},br:{fontSize:12,marginBottom:O?void 0:13},brfs:{fontSize:12,marginBottom:O?void 0:13},gap:{fontSize:13,textTransform:"capitalize"},gapfs:{fontSize:13,textTransform:"capitalize"},on:{fontSize:14}}[j]];return(0,y.jsx)("div",{"aria-label":w,role:"navigation"},(0,y.jsx)("div",{className:"topnav-container",css:[W,I[j],"",""],onKeyDown:function(e){g(function(e){var n=e.event,t=e.currentExpandedDivisionName;if(!n||void 0===n.keyCode||!N[n.keyCode])return t;!function(e){null!=e&&e.keyCode&&["spacebar","up","right","down","left"].includes(N[e.keyCode])&&null!=e&&e.cancelable&&e.preventDefault()}(n);var r,o=N[n.keyCode],i=n.target,a=!!t,l=i.getAttribute("aria-haspopup"),s=i.getAttribute("data-divisionname");return"escape"===o?"":(l||s)&&["spacebar","down","left","right"].includes(o)?function(e,n){var t="false"===n.elementFocusedWhenKeyWasPressed.getAttribute("aria-expanded");if(function(e,n,t){return["tab","shift-tab","up","right","left"].includes(e)&&n&&t}(e,n.isAnyFlyoutExpanded,t)){var r=n.elementFocusedWhenKeyWasPressed.getAttribute(H);return ae(n.currentExpandedDivisionName,r)}return ce[e](n)}(o,{currentExpandedDivisionName:t,elementFocusedWhenKeyWasPressed:i,isAnyFlyoutExpanded:a}):["up","down","left","right"].includes(o)?(r={currentExpandedDivisionName:t,elementFocusedWhenKeyWasPressed:i,isAnyFlyoutExpanded:a},ie[o](r)):t}({event:e,currentExpandedDivisionName:m}))},role:"presentation"},F&&(0,y.jsx)(r.Fragment,null,(0,y.jsx)("ul",{className:"topnav",css:T,"data-testid":"topnav-navdivisions",onFocus:D,onMouseEnter:C,onMouseLeave:A},n.map((function(e){return(0,y.jsx)(ne,{key:e.divisionName,divisionAriaLabel:e.divisionAriaLabel,divisionClickHandler:B,divisionHoverEnd:P,divisionHoverStart:k,divisionLink:e.divisionLink,divisionLinkProps:e.divisionLinkProps,divisionName:e.divisionName,divisionStyles:e.divisionStyles,divisionSubtitle:e.divisionSubtitle,divisionTouchHandler:L,flyoutData:e.flyoutData,hasBeenExpanded:x.has(e.divisionName),isActive:e.isActive,isExpanded:m===e.divisionName})}))),m&&(0,y.jsx)(te,{onTouchEnd:L(null)}))))};!function(e){e.Compressed="compressed",e.Extended="extended"}(se||(se={}));var de=function(e){return e.startsWith("http")||e.startsWith("/")},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,t=e.split("#"),r=(0,s.Z)(t,2),o=r[0],i=r[1];return i=void 0===i?"":"#".concat(i),e.match(/\?/)?"".concat(o,"&nav=").concat(n).concat(i):"".concat(o,"?&nav=").concat(n).concat(i)},pe="meganav",fe=function(e,n,t){var r=e.customUrl||e.link,o=t.name||"",i=n||"",a=e.name||"",l=encodeURIComponent("".concat(pe,":").concat(o,":").concat(i,":").concat(a));return ve(r,l)},me=function(e){var n=e.divisionId[0]||"",t=e.name||"",r=encodeURIComponent("".concat(pe,":").concat(t,"::"));return de(n)?ve(n,r):"#"},be=function(e,n,t){return("at"===t||!["new arrivals","about us","gap factory","factory"].includes(e.name.toLowerCase()))&&("Sale"!==e.name||"jewelry & accessories"!==n.name)&&e.divisionId.map((function(e){if(de(e)){var n=new RegExp(/cid=([^&]+)&/).exec(e);return null==n?void 0:n[1]}return e})).filter((function(e){return!!e})).includes(n.id)};function ge(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ye(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ge(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ge(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var he=function(e,n){if(1==(n&&n>=2?2:1))return[e];var t=Math.ceil(e.length/2);return[e.slice(0,t),e.slice(t)]},xe=function(e,n){var t=(null==n?void 0:n[e.id])||{},r=(null==n?void 0:n["*"])||{},o=t.inlineStyle||{};return ye(ye({},r.inlineStyle||{}),o)},Se=function(e,n){var t=null==n?void 0:n[e.id],r=null==n?void 0:n["*"];return t&&t.colorScheme?t.colorScheme:r&&r.colorScheme?r.colorScheme:""},je=function(e){if(!e.customStyles)return"";var n=e.divisionId.map((function(n){var t;return((null===(t=e.customStyles)||void 0===t?void 0:t[n])||{}).className}));return v()(n)},Oe=function(e,n,t){var r,o=new Set(["header","trimheader"]);return null===(r=e.megaNavOrder)||void 0===r?void 0:r.map((function(r){return r.map((function(r){var i;if(function(e){return e.startsWith("<")}(r))return{type:"wcdInjected",html:r};var a=n[r];return!a||a.hidden||(null===(i=e.exclusionIds)||void 0===i?void 0:i.includes(r))||!o.has(a.type)?null:function(e,n,t,r){var o,i=e[n],a=null!==(o=null==i?void 0:i.name)&&void 0!==o?o:"",l=i.children.filter((function(e){var n;return!(e.hidden||null!==(n=t.exclusionIds)&&void 0!==n&&n.includes(e.id)||"spacer"===e.type)})).map((function(e){var n;return{categoryId:e.id,categoryLink:fe(e,i.name,t),categoryName:e.name,categoryAriaLabel:"".concat(a," ").concat(null!==(n=e.name)&&void 0!==n?n:"").toLowerCase(),isActive:r===e.id,categoryStyles:{inline:xe(e,t.customStyles),className:Se(e,t.customStyles)}}})),s=t.numberOfColumns,c=(void 0===s?{}:s)[i.id],u=c>=2;return{header:i.name,headerAriaLabel:null==a?void 0:a.toLowerCase(),headerId:i.id,customUrl:i.customUrl,type:i.type,categoryGroupColumns:he(l,c),hasSplitColumns:u}}(n,r,e,t)})).filter((function(e){return!!e}))})).filter((function(e){return e.length>0}))},we=function(e,n,t){if(e.megaNavOrder&&n.find((function(e){return e.children}))){var r=function(e){return e.map((function(e){return e.hasSubDivision?e.children.map((function(e){return e.children})).reduce((function(e,n){return e.concat(n)}),[]):e.children})).reduce((function(e,n){return e.concat(n)}),[]).reduce((function(e,n){return e[n.id]=n,e}),{})}(n),o=function(e){var n,t=e.find((function(e){return"category"===e.type||"sale"===e.type}));return null!==(n=null==t?void 0:t.id)&&void 0!==n?n:""}(t),i=!1;return e.name.match(/(women|femme)/gi)&&e.divisionId.forEach((function(e){"5360"===e.trim()&&(i=!0)})),{displaySubMenu:e.displaySubMenu||!1,flyoutColumns:Oe(e,r,o),ignoreDefaultFlyoutStyles:e.ignoreDefaultFlyoutStyles||!1,shouldDisplayOnBanner:i}}},Ee={en_US:{gap:"gap12",gapfs:"gapfs12",br:"br12",brfs:"brfs12",on:"on12",at:"at12"},en_CA:{gap:"gap13",br:"br13",on:"on13",at:"at13"},fr_CA:{gap:"gap14",br:"br14",on:"on14",at:"at14"}},Ne=function(e){var n=e.classStyles;return(0,y.jsx)("style",null,Object.entries(n).reduce((function(e,n){var t=(0,s.Z)(n,2),r=t[0],o=t[1];return"".concat(e,"#topNavWrapper .").concat(r," {").concat(o,"}")}),""))},ke=function(e){var n=e.data,t=e.abtest,s=e.onTopNavIsHovered,c=(0,l.m)(),u=c.abSeg,d=c.brandName,v=c.locale,p=(0,i.u)(),f=p.brand,m=p.color,g=(0,b.fx)().isCompressedHeader,h=(0,r.useContext)(a.k),x=function(e,n){var t,r=e.webHierarchy,o=e.data,i=o.isNavSticky,a=o.activeDivisions,l=o.classStyles,s=e.currentNavigationRoute||[],c=e.brandName,u=a.filter((t=n?se.Compressed:se.Extended,function(e){return!e.membership||e.membership.includes(t)})),d=function(e){return e.find((function(e){return"division"===e.type||"sub-division"===e.type}))||{name:"NO_ACTIVE_DIVISION"}}(s),v=u.map((function(e){var n;return{divisionLink:me(e),divisionLinkProps:e.divisionLinkProps,divisionName:e.name,divisionAriaLabel:null===(n=e.name)||void 0===n?void 0:n.toLowerCase(),divisionStyles:{className:je(e),inline:{}},isActive:be(e,d,c),flyoutData:we(e,r,s),divisionSubtitle:e.subtitle}}));return{isNavSticky:i,brandName:c,divisions:v,classStyles:l}}({brandName:d,data:function(e,n,t,r){var o;if(null==r)return e.data;var i=null==Ee||null===(o=Ee[t])||void 0===o?void 0:o[n];return i&&"a"===r[i]&&e.abtest?e.abtest:e.data}({data:n,abtest:t},d,v,u),webHierarchy:h.webHierarchy,currentNavigationRoute:h.currentNavigationRoute},g),S=x.classStyles,j=x.divisions,O=[{display:"block",width:"100%",backgroundColor:g?"transparent":m.wh},{at:{letterSpacing:.5},br:{letterSpacing:2},brfs:{letterSpacing:2},gap:{margin:"auto",maxWidth:1248},gapfs:{margin:"auto",maxWidth:1248},on:g?{}:{borderBottom:"1px solid ".concat(m.gray40),height:41}}[f]];return(0,y.jsx)(o().Fragment,null,S&&(0,y.jsx)(Ne,{classStyles:S}),(0,y.jsx)("div",{className:d,css:O,"data-testid":"topNavWrapper",id:"topNavWrapper"},(0,y.jsx)(ue,{divisions:j,onTopNavIsHovered:s})))},Pe=ke},9518:function(e,n,t){"use strict";t.d(n,{U:function(){return x}});var r=t(22122),o=t(85061),i=t(96156),a=t(28481),l=t(60701),s=t(63804),c=t.n(s),u=t(94184),d=t.n(u),v=t(62115),p=t(12795),f=t(83998),m=t(41350),b=t(70917);function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var h=s.useLayoutEffect,x=(0,l.default)("a",{target:"elw1bqk0"})("");n.Z=function(e){var n,t,l=e.ariaLabel,u=e.name,g=e.isActive,S=e.href,j=e.hasFlyout,O=e.flyoutIsExpanded,w=e.additionalLinkClassname,E=e.divisionClickHandler,N=e.divisionTouchHandler,k=e.divisionLinkProps,P=e.divisionSubtitle,D=(0,s.useState)(!1),C=(0,a.Z)(D,2),A=C[0],L=C[1],B=(0,s.useState)(!1),F=(0,a.Z)(B,2),H=F[0],W=F[1],I=(0,v.u)(),T=I.brand,Z=I.color,M=I.font,_=(0,p.fx)().isCompressedHeader,z=(0,s.createRef)(),q=null==w?void 0:w.includes("sale"),R=(0,m.S)(f.R2.SIZE_INCLUSIVITY_MEGANAV),K=(0,m.S)(f.R2.ENABLE_ON_GOTHAM_FONT);h((function(){L(g)}),[g]);var V="&:hover,&:active",G={boxShadow:"inset 0 -2px 0 0 ".concat(Z.b1),fontWeight:"bold",textDecoration:"none"},U=y(y({},M.secondary),{},(n={background:"transparent",border:0,color:Z.b1,padding:_?void 0:"0 0 15px"},(0,i.Z)(n,V,G),(0,i.Z)(n,"width","100%"),n)),Y=(t={color:q?Z.r1:void 0,letterSpacing:"inherit",paddingBottom:2,textTransform:"inherit"},(0,i.Z)(t,V,{boxShadow:"inset 0 -2px 0 0 ".concat(q?Z.r1:Z.b1)}),(0,i.Z)(t,"width","unset"),t),X={color:Z.g3,boxShadow:"none"},$={letterSpacing:0,boxShadow:"none"},J={color:Z.g2,boxShadow:"none"},Q={at:y(y({},M.secondary),{},{boxShadow:"inset 0 -2px 0 0 ".concat(Z.b1),color:Z.g1,width:"unset"}),br:X,brfs:X,gap:J,gapfs:J,on:{color:Z.b1,boxShadow:"unset"}},ee={at:y(y({},M.tertiary),{},(0,i.Z)({animation:"none",color:Z.gray54,letterSpacing:"inherit",paddingBottom:0,textTransform:"inherit"},V,y(y({},Q.at),{},{boxShadow:"none"}))),br:Y,brfs:Y,gap:$,gapfs:$,on:(0,i.Z)({boxSizing:"border-box",color:Z.g2,display:"inline-flex",position:"relative",flexDirection:"column",fontSize:K?"13px !important":13,height:_?void 0:41,justifyContent:"space-between",letterSpacing:K?".1px":1.4,lineHeight:"1.2em",textAlign:"center",textDecoration:"none",textTransform:"inherit",whiteSpace:"nowrap"},V,{boxShadow:"inset 0 -3px 0 0 ".concat(Z.b1),color:Z.b1})},ne=[G,Q[T]],te=[U,ee[T]].concat((0,o.Z)(A?ne:[]),(0,o.Z)(O?[G]:[])),re={"aria-label":Boolean(R&&P)?"".concat(l," ").concat(P):l,className:d()("divisionLink",w,{_selected:A}),css:te,"data-divisionname":u},oe=function(e,n){e.preventDefault(),W(n)},ie=(0,b.jsx)("button",(0,r.Z)({},re,{"aria-expanded":O,"aria-haspopup":j,css:{border:"0px",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0px",position:"absolute",width:"1px",":focus + a":{outline:"auto"}},"data-testid":"button_".concat(u),onBlur:function(e){return oe(e,!1)},onClick:E(u),onFocus:function(e){return oe(e,!0)},onTouchEnd:function(){}}),u),ae=function(e){j&&(e.stopPropagation(),e.preventDefault(),N(u)(e))};(0,s.useEffect)((function(){z.current&&j&&z.current.addEventListener("touchstart",ae,{passive:!1})}),[j,S,z]);var le=(0,b.jsx)(x,(0,r.Z)({},k,re,{ref:z,"aria-hidden":j,css:[re.css,j&&{touchAction:"none",msTouchAction:"none"},"",""],"data-testid":"ahref_".concat(u),href:S,tabIndex:j?-1:0}),u,Boolean(R&&P&&(H||O))&&(0,b.jsx)("span",{"aria-hidden":"true",css:{fontWeight:"normal",display:"inline-block",marginBottom:"5px",position:"absolute",bottom:"0",left:"50%",transform:"translateX(-50%)"}},P));return j?(0,b.jsx)(c().Fragment,null,ie,le):le}}}]);