!function(e,t){if("object"===typeof exports&&"object"===typeof module)module.exports=t(require("react"),require("prop-types"),require("styled-components"),require("@ids/theme"));else if("function"===typeof define&&define.amd)define(["react","prop-types","styled-components","@ids/theme"],t);else{var r="object"===typeof exports?t(require("react"),require("prop-types"),require("styled-components"),require("@ids/theme")):t(e.react,e["prop-types"],e["styled-components"],e["@ids/theme"]);for(var n in r)("object"===typeof exports?exports:e)[n]=r[n]}}(this,(function(e,t,r,n){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=15)}([function(t,r){t.exports=e},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},function(e,t,r){var n=r(17);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},function(e,t,r){var n=r(12),o=r(4);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?o(e):t}},function(e,t,r){"use strict";e.exports=function(e,t){if(t=t||100,6===(e=e.replace("#","")).length)var r=parseInt(e.substring(0,2),16),n=parseInt(e.substring(2,4),16),o=parseInt(e.substring(4,6),16);else{var i=e.substring(0,1)+e.substring(0,1),a=e.substring(1,2)+e.substring(1,2),c=e.substring(2,3)+e.substring(2,3);r=parseInt(i,16),n=parseInt(a,16),o=parseInt(c,16)}return"rgba("+r+", "+n+", "+o+", "+t/100+")"}},function(e,t){function r(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}e.exports=r},function(e,t,r){var n=r(16);e.exports=function(e,t){if(null==e)return{};var r,o,i=n(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}},function(e,t,r){e.exports=r(18)},function(e,t){e.exports=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}},function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},function(e,t,r){"use strict";r.r(t);var n=r(13),o=r.n(n),i=r(14),a=r.n(i),c=r(7),s=r.n(c),f=r(8),u=r.n(f),d=r(4),p=r.n(d),l=r(9),y=r.n(l),b=r(10),h=r.n(b),m=r(5),v=r.n(m),g=r(1),x=r.n(g),T=r(0),C=r.n(T),k=r(2),O=r.n(k);function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=v()(e);if(t){var o=v()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return h()(this,r)}}var S=O.a.node,G=O.a.string,z=O.a.bool,B=function(e){y()(r,e);var t=j(r);function r(e){var n;return s()(this,r),n=t.call(this,e),x()(p()(n),"onMouseDown",(function(e){return function(t){n.mouseActive=!0,e&&e(t)}})),x()(p()(n),"onClick",(function(e){return function(t){n.setState({a11yFocus:0===t.clientX&&0===t.clientY}),e&&e(t)}})),x()(p()(n),"onFocus",(function(e){return function(t){n.setState({a11yFocus:!n.mouseActive}),e&&e(t)}})),x()(p()(n),"onBlur",(function(e){return function(t){n.mouseActive=!1,n.setState({a11yFocus:!1}),e&&e(t)}})),n.mouseActive=!1,n.state={a11yFocus:!1},n}return u()(r,[{key:"render",value:function(){var e=this,t=this.onBlur,r=this.onFocus,n=this.onClick,o=this.onMouseDown,i=this.props,a=i.children,c=i.className,s=i.style,f=i.onFocusClassName,u=i.passA11yFocusProp,d=[];return 1===C.a.Children.count(a)&&(d=C.a.Children.map(a,(function(i){var a=c||"",d=e.state.a11yFocus?f:"",p=i.props.className||"",l=Object.assign({},i.props,{className:"".concat(p," ").concat(d," ").concat(a).trim(),style:Object.assign({},s,{},i.props.style),a11yFocus:e.state.a11yFocus,onBlur:t(i.props.onBlur),onFocus:r(i.props.onFocus),onClick:n(i.props.onClick),onMouseDown:o(i.props.onMouseDown)});return u||delete l.a11yFocus,e.state.a11yFocus?l["data-a11yfocus"]=!0:delete l["data-a11yfocus"],C.a.cloneElement(i,l)}))),d[0]}}]),r}(C.a.Component);x()(B,"propTypes",{children:S,onFocusClassName:G,passA11yFocusProp:z}),x()(B,"defaultProps",{children:null,onFocusClassName:"",passA11yFocusProp:!1});var w=B,F=r(12),L=r.n(F),R=r(6),H=r(3),P=r.n(H),I=r(11),D=r.n(I),_={primary:"#0077c5",secondary:"#d4d7dc",secondaryGhost:"transparent",tertiary:"transparent",icon:"transparent",destructive:"#d52b1e",special:"#ff8000",destructiveTertiary:"transparent"},q={mini:{minHeight:"24px",minWidth:"80px"},standard:{minHeight:"36px",minWidth:"100px"},responsive:{minHeight:"40px",minWidth:"100px"},jumbo:{minHeight:"48px",minWidth:"120px"}},E={intuit:{themeBgColors:{primary:"#0077c5",secondary:_.secondary,tertiary:"transparent",secondaryGhost:"transparent",icon:"transparent",destructive:_.destructive,special:_.special,destructiveTertiary:_.destructiveTertiary},darkThemeBgColors:{primary:"#0077c5",secondary:_.secondary,tertiary:"transparent",secondaryGhost:"transparent",icon:"transparent",destructive:_.destructive,special:_.special,destructiveTertiary:_.destructiveTertiaryTertiary},themeBgStateColors:{primary:"#055393",secondary:"#8d9096",secondaryGhost:"#0077c5",tertiary:"#0077c5",icon:"#0077c5",destructive:"#b80000",special:"#f95700",destructiveTertiary:"#d52b1e"},darkThemeBgStateColors:{primary:"#055393",secondary:"#8d9096",secondaryGhost:"#f4f5f8",tertiary:"#f4f5f8",icon:"#f4f5f8",destructive:"#b80000",special:"#f95700",destructiveTertiary:"#d52b1e"},iconFillColors:{primary:"#ffffff",secondary:"#393a3d",secondaryGhost:"#0077c5",tertiary:"#0077c5",icon:"#0077c5",destructive:"#ffffff",special:"#ffffff",destructiveTertiary:"#d52b1e"},darkThemeIconFillColors:{primary:"#ffffff",secondary:"#393a3d",secondaryGhost:"#ffffff",tertiary:"#ffffff",icon:"#ffffff",destructive:"#ffffff",special:"#ffffff",destructiveTertiary:"#d52b1e"},focusColorLight:{primary:"#0077c5",secondary:"#0077c5",tertiary:"#0077c5",secondaryGhost:"#0077c5",icon:"#0077c5",destructive:_.destructive,special:_.special,destructiveTertiary:_.destructive},focusColorDark:{primary:"#ffffff",secondary:"#ffffff",tertiary:"#ffffff",secondaryGhost:"#ffffff",icon:"#ffffff",destructive:_.destructive,special:_.special,destructiveTertiary:_.destructive},buttonSizes:q,disabledOpacity:.4},quickbooks:{themeBgColors:{primary:"#2ca01c",secondary:"transparent",tertiary:"transparent",secondaryGhost:"transparent",icon:"transparent",destructive:_.destructive,special:_.special,destructiveTertiary:_.destructiveTertiary},darkThemeBgColors:{primary:"#2ca01c",secondary:"transparent",tertiary:"transparent",secondaryGhost:"transparent",icon:"transparent",primarymini:"#393a3d",destructive:_.destructive,special:_.special,destructiveTertiary:_.destructiveTertiary},themeBgStateColors:{primary:"#108000",secondary:"#8d9096",secondaryGhost:"#393a3d",tertiary:"#6b6c72",icon:"#6b6c72",destructive:"#b80000",special:"#f95700",destructiveTertiary:"#d52b1e"},darkThemeBgStateColors:{primary:"#393a3d",primarymini:"#000000",secondary:"#8d9096",secondaryGhost:"#f4f5f8",tertiary:"#f4f5f8",icon:"#f4f5f8",destructive:"#b80000",special:"#f95700",destructiveTertiary:"#d52b1e"},iconFillColors:{primary:"#ffffff",secondary:"#393a3d",secondaryGhost:"#393a3d",tertiary:"#0077c5",icon:"#6b6c72",iconActive:"#393a3d",destructive:"#ffffff",special:"#ffffff",destructiveTertiary:"#d52b1e"},darkThemeIconFillColors:{primary:"#ffffff",secondary:"#ffffff",secondaryGhost:"#ffffff",tertiary:"#ffffff",icon:"#ffffff",destructive:"#ffffff",special:"#ffffff",destructiveTertiary:"#d52b1e"},buttonSizes:Object.assign({},q,{mini:Object.assign({},q.mini,{borderRadius:"12px"}),standard:Object.assign({},q.standard,{borderRadius:"18px"}),jumbo:Object.assign({},q.jumbo,{borderRadius:"24px"}),responsive:{minHeight:"36px",minWidth:"100px",borderRadius:"20px"}}),focusColorLight:{primary:"#0077c5",secondary:"#0077c5",tertiary:"#0077c5",secondaryGhost:"#0077c5",icon:"#0077c5",primarymini:"#0077c5",destructive:_.destructive,special:_.special,destructiveTertiary:_.destructive},focusColorDark:{primary:"#34bfff",secondary:"#34bfff",tertiary:"#34bfff",secondaryGhost:"#34bfff",icon:"#34bfff",primarymini:"#0077c5",destructive:_.destructive,special:_.special,destructiveTertiary:_.destructive},focusBoxShadow:"0 0 0 2px",focusBorderRadius:"20px",focusOpacity:1,iconBorderRadius:"8px",disabledOpacity:.4},turbotax:{themeBgColors:{primary:"#06b6c9",secondary:_.secondary,tertiary:"transparent",secondaryGhost:"transparent",icon:"transparent",destructive:_.destructive,special:_.special,destructiveTertiary:_.destructiveTertiary},darkThemeBgColors:{primary:"#ffffff",secondary:_.secondary,tertiary:"transparent",secondaryGhost:"transparent",icon:"transparent",destructive:_.destructive,special:_.special,destructiveTertiary:_.destructiveTertiary},themeBgStateColors:{primary:"#037c8f",secondary:"#8d9096",secondaryGhost:"#0493a3",tertiary:"#06b6c9",icon:"#06b6c9",destructive:"#b80000",special:"#f95700",destructiveTertiary:"#d52b1e"},darkThemeBgStateColors:{primary:"#06b6c9",secondary:"#8d9096",secondaryGhost:"#f4f5f8",tertiary:"#8d9096",icon:"#f4f5f8",destructive:"#b80000",special:"#f95700",destructiveTertiary:"#d52b1e"},iconFillColors:{primary:"#ffffff",secondary:"#393a3d",secondaryGhost:"#05a4b5",tertiary:"#06b6c9",icon:"#05a4b5",destructive:"#ffffff",special:"#ffffff",destructiveTertiary:"#d52b1e"},darkThemeIconFillColors:{primary:"#06b6c9",secondary:"#393a3d",secondaryGhost:"#ffffff",tertiary:"#ffffff",icon:"#ffffff",destructive:"#ffffff",special:"#ffffff",destructiveTertiary:"#d52b1e"},buttonSizes:q,focusColorLight:{primary:"#06b6c9",secondary:"#0077c5",tertiary:"#06b6c9",secondaryGhost:"#0077c5",icon:"#06b6c9",destructive:_.destructive,special:_.special,destructiveTertiary:_.destructive},focusColorDark:{primary:"#ffffff",secondary:"#ffffff",tertiary:"#ffffff",secondaryGhost:"#ffffff",icon:"#ffffff",destructive:_.destructive,special:_.special,destructiveTertiary:_.destructive},disabledOpacity:.4},mint:{themeBgColors:{primary:"#06b6c9",secondary:_.secondary,secondaryGhost:"transparent",tertiary:"transparent",icon:"#06b6c9",destructive:_.destructive,special:_.special,destructiveTertiary:_.destructiveTertiary},darkThemeBgColors:{primary:"#ffffff",secondary:_.secondary,secondaryGhost:"transparent",tertiary:"transparent",icon:"transparent",destructive:_.destructive,special:_.special,destructiveTertiary:_.destructiveTertiary},themeBgStateColors:{primary:"#05a4b5",secondary:"#8d9096",secondaryGhost:"#05a4b5",tertiary:"#06b6c9",icon:"#06b6c9",destructive:"#b80000",special:"#f95700",destructiveTertiary:"#d52b1e"},darkThemeBgStateColors:{primary:"#06b6c9",secondary:"#8d9096",secondaryGhost:"#f4f5f8",tertiary:"#8d9096",icon:"#f4f5f8",destructive:"#b80000",special:"#f95700",destructiveTertiary:"#d52b1e"},iconFillColors:{primary:"#ffffff",secondary:"#393a3d",secondaryGhost:"#05a4b5",tertiary:"#06b6c9",icon:"#05a4b5",destructive:"#ffffff",special:"#ffffff",destructiveTertiary:"#d52b1e"},darkThemeIconFillColors:{primary:"#06b6c9",secondary:"#393a3d",secondaryGhost:"#ffffff",tertiary:"#ffffff",icon:"#ffffff",destructive:"#ffffff",special:"#ffffff",destructiveTertiary:"#d52b1e"},buttonSizes:q,focusColorLight:{primary:"#06b6c9",secondary:"#0077c5",tertiary:"#06b6c9",secondaryGhost:"#0077c5",icon:"#06b6c9",destructive:_.destructive,special:_.special,destructiveTertiary:_.destructive},focusColorDark:{primary:"#ffffff",secondary:"#ffffff",tertiary:"#ffffff",secondaryGhost:"#ffffff",icon:"#ffffff",destructive:_.destructive,special:_.special,destructiveTertiary:_.destructive},disabledOpacity:.4}},N={primary:50,secondary:50,secondaryGhost:25,tertiary:25,icon:25,destructive:50,destructiveTertiary:25,special:50},A={primary:100,secondary:100,secondaryGhost:40,tertiary:40,icon:40,destructive:100,destructiveTertiary:40,special:100},M={primary:60,secondary:100,secondaryGhost:40,tertiary:40,icon:40,destructive:100,destructiveTertiary:40,special:100},W=Object(H.css)(["cursor:default;pointer-events:none;opacity:",";fill:"," !important;"],(function(e){return E[e.theme].disabledOpacity}),(function(e){return"quickbooks"===e.theme&&(e.inverse?"#6b6c72":"#babec5")})),V=Object(H.css)(["height:100%;height:36px;width:36px;border-radius:",";"],(function(e){return E[e.theme].iconBorderRadius||"4px"})),X=Object(H.css)([""," "," &:before{width:calc(100% + 6px);height:calc(100% + 6px);left:-3px;top:-3px;}"],(function(e){return"\n    border: 2px solid ".concat(E[e.theme].themeBgColors.primary,";\n  ")}),(function(e){return e.inverse&&"\n    border-color: ".concat("#ffffff",";\n  ")})),Y=P.a.span.withConfig({displayName:"StyledButton__Overlay",componentId:"vnaxcc-0"})(["display:block;width:100%;border-radius:",";",";"],(function(e){return function(e){var t=e.theme,r=e.size,n=e.buttonType,o=(E[t].buttonSizes&&E[t].buttonSizes[r]).borderRadius;return"secondaryGhost"===n?"2px":o||"4px"}(e)}),(function(e){return"icon"===e.buttonType&&V})),J=function(e,t){var r,n=e.theme,o=e.inverse,i=e.loading,a=e.buttonType,c=e.size,s=E[n],f=s.themeBgStateColors,u=s.darkThemeBgStateColors,d=t?N[a]:o?M[a]:A[a];return r=o?D()(u["".concat(a).concat(c)]||u[a],d):D()(f[a],d),r=i?"transparent!important":r},K=Object(H.css)(["",""],(function(e){return E[e.theme]&&"\n    &:hover ".concat(Y," {\n      background-color: ").concat(J(e,!0),";\n    }\n    &:active ").concat(Y," {\n      background-color: ").concat(J(e),";\n    }\n  ")})),Q=Object(H.css)(["",""],(function(e){return"\n    min-height: ".concat(E[e.theme].buttonSizes[e.size].minHeight,";\n    min-width: ").concat(E[e.theme].buttonSizes[e.size].minWidth,";\n  ")})),U=P.a.button.withConfig({displayName:"StyledButton__Wrapper",componentId:"vnaxcc-1"})(["font-family:inherit;box-sizing:border-box;position:relative;outline:none;padding:0;margin:0;border:none;background-color:",";border-radius:",";&[data-a11yfocus]{&:focus:not(:active):before{box-shadow:",";color:",";opacity:",";}}cursor:",";fill:",";",";"," &:active{fill:",'}&:before{opacity:0;content:"";border-radius:',";display:block;position:absolute;width:calc(100% + 2px);height:calc(100% + 2px);left:-1px;top:-1px;}",";"," "," "," ","::-moz-focus-inner{border:0;}"],(function(e){return function(e){var t=e.theme,r=e.inverse,n=e.buttonType,o=e.size,i=e.loading,a=E[t],c=a.darkThemeBgColors,s=a.themeBgColors,f=s[n];return r&&(f=c["".concat(n).concat(o)]||c[n]),i&&"transparent"!==s[n]&&(f=D()(s[n],40)),f}(e)}),(function(e){return function(e){var t=e.theme,r=e.size;return(E[t].buttonSizes&&E[t].buttonSizes[r]).borderRadius||"4px"}(e)}),(function(e){return E[e.theme].focusBoxShadow||"0 0 0 2px"}),(function(e){return function(e){var t=e.theme,r=e.inverse,n=e.buttonType,o=e.size,i=E[t],a=i.focusColorLight,c=i.focusColorDark;return r?c["".concat(n).concat(o)]||c[n]:a[n]}(e)}),(function(e){return E[e.theme].focusOpacity||.5}),(function(e){return e.loading?"none":"pointer"}),(function(e){return e.inverse?E[e.theme].darkThemeIconFillColors[e.buttonType]:E[e.theme].iconFillColors[e.buttonType]}),(function(e){return"icon"!==e.buttonType&&Q}),(function(e){return!e.disabled&&K}),(function(e){return E[e.theme]&&E[e.theme].iconFillColors["".concat(e.buttonType,"Active")]}),(function(e){return function(e){var t=e.theme,r=e.buttonType,n=E[t].focusBorderRadius||"5px";return E[t].focusBorderRadius&&"icon"===r&&(n="8px"),n}(e)}),(function(e){return"icon"===e.buttonType&&V}),(function(e){return"quickbooks"===e.theme&&"secondary"===e.buttonType&&"\n      border: ".concat(e.inverse?"2px solid ".concat("#ffffff"):"2px solid ".concat("#393a3d"),";\n      &:before {\n        width: calc(100% + 6px);\n        height: calc(100% + 6px);\n        left: -3px;\n        top: -3px;\n      }\n    ")}),(function(e){return"quickbooks"===e.theme&&"secondary"===e.buttonType&&"mini"===e.size&&"\n      border-width: 1px;\n    "}),(function(e){return"secondaryGhost"===e.buttonType&&X}),(function(e){return e.disabled&&W})),Z={intuit:{labelColor:{primary:"#ffffff",secondary:"#393a3d",secondaryGhost:"#0077c5",tertiary:"#0077c5"},labelColorDarkTheme:{primary:"#ffffff",secondary:"#393a3d",secondaryGhost:"#ffffff",tertiary:"#ffffff"}},quickbooks:{labelColor:{primary:"#ffffff",secondary:"#393a3d",secondaryGhost:"#393a3d",tertiary:"#0077c5"},labelColorDarkTheme:{primary:"#ffffff",secondary:"#ffffff",secondaryGhost:"#ffffff",tertiary:"#ffffff"}},turbotax:{labelColor:{primary:"#ffffff",secondary:"#393a3d",secondaryGhost:"#05a4b5",tertiary:"#06b6c9"},labelColorDarkTheme:{primary:"#06b6c9",secondary:"#393a3d",secondaryGhost:"#ffffff",tertiary:"#ffffff"}},mint:{labelColor:{primary:"#ffffff",secondary:"#393a3d",secondaryGhost:"#05a4b5",tertiary:"#06b6c9"},labelColorDarkTheme:{primary:"#06b6c9",secondary:"#393a3d",secondaryGhost:"#ffffff",tertiary:"#ffffff"}}},$={mini:{labelFontSize:"12px",labelLineHeight:"16px",padding:"4px 20px"},standard:{labelFontSize:"16px",labelLineHeight:"20px",padding:"8px 20px"},responsive:{labelFontSize:"16px",labelLineHeight:"24px",padding:"8px 20px"},jumbo:{labelFontSize:"19px",labelLineHeight:"24px",padding:"12px 20px"}},ee={mini:{labelLineHeight:"16px",padding:"4px 20px"},standard:{padding:"6px 20px",labelLineHeight:"24px"},responsive:{padding:"6px 20px",labelLineHeight:"28px"},jumbo:{padding:"10px 20px",labelLineHeight:"28px"}},te={mini:{padding:"2px 18px"},standard:{padding:"6px 18px"},responsive:{padding:"6px 18px"},jumbo:{padding:"10px 18px"}},re={standard:{padding:"4px 18px",labelLineHeight:"24px"},responsive:{padding:"4px 18px",labelLineHeight:"28px"},jumbo:{padding:"8px 18px",labelLineHeight:"28px"}},ne={mini:{padding:"2px 20px",labelLineHeight:"18px"},standard:{padding:"6px 20px",labelLineHeight:"20px"},responsive:{padding:"8px 20px",labelLineHeight:"20px"},jumbo:{padding:"10px 20px",labelLineHeight:"28px"}},oe=P.a.span.withConfig({displayName:"StyledButtonLabel__Label",componentId:"ri94b7-0"})(["font-weight:600;color:",";display:inline-block;"," padding:",";line-height:",";",";",";",";",";",";"," "," ",""],"#ffffff",(function(e){return"\n    font-size: ".concat($[e.size].labelFontSize,";\n    line-height: ").concat($[e.size].labelLineHeight,";\n  ")}),(function(e){return e.icon?ee[e.size].padding:$[e.size].padding}),(function(e){return e.icon?ee[e.size].labelLineHeight:$[e.size].labelLineHeight}),(function(e){return"secondaryGhost"===e.buttonType&&"padding: ".concat(e.icon?re[e.size].padding:te[e.size].padding)}),(function(e){return"secondaryGhost"===e.buttonType&&"line-height: ".concat(e.icon?re[e.size].labelLineHeight:$[e.size].labelLineHeight)}),(function(e){return"quickbooks"===e.theme&&(e.icon||"secondary"===e.buttonType)&&"padding: ".concat(ne[e.size].padding)}),(function(e){return"quickbooks"===e.theme&&!e.icon&&"secondary"===e.buttonType&&"line-height: ".concat(ne[e.size].labelLineHeight)}),(function(e){return"quickbooks"===e.theme&&"secondary"===e.buttonType&&e.icon&&"padding: ".concat(re[e.size].padding)}),(function(e){return"destructiveTertiary"!==e.buttonType&&"\n    color: ".concat(Z[e.theme].labelColor[e.buttonType],";\n  ")}),(function(e){return"destructiveTertiary"===e.buttonType&&"\n    color: ".concat("#d52b1e",";\n  ")}),(function(e){return e.inverse&&"\n    color: ".concat(Z[e.theme].labelColorDarkTheme[e.buttonType],";\n  ")}));function ie(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=v()(e);if(t){var o=v()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return h()(this,r)}}var ae=O.a.bool,ce=O.a.func,se=O.a.object,fe=O.a.string,ue=O.a.oneOf,de=O.a.node,pe=function(e){y()(r,e);var t=ie(r);function r(){var e;s()(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return e=t.call.apply(t,[this].concat(o)),x()(p()(e),"getButtonRef",(function(t){e.props.assignButtonRef(t)})),e}return u()(r,[{key:"cloneIconLabel",value:function(){var e=this.props,t=e.icon,r={width:"20px",height:"20px",style:{verticalAlign:"middle"}};return"left"===e.iconPosition?Object.assign(r,{margin:"0 4px 0 0"}):Object.assign(r,{margin:"0 0 0 4px"}),C.a.cloneElement(t,r)}},{key:"cloneLoadingComponent",value:function(){var e=this.props,t=e.loadingComponent,r=e.buttonType,n="";return e.inverse&&(n="#ffffff"),"destructive"!==r&&"destructiveTertiary"!==r||(n="#d52b1e"),"special"===r&&(n="#ff8000"),"secondary"===r&&(n="#393a3d"),C.a.cloneElement(t,{fill:n})}},{key:"renderIconOnly",value:function(){var e=this.props,t=e.icon,r={width:"20px",height:"20px",margin:"8px 0 0 0"};return"quickbooks"===e.theme&&(r.width="24px",r.height="24px"),C.a.cloneElement(t,r)}},{key:"renderButtonIconLabel",value:function(){var e=this.props,t=e.children,r=e.buttonType,n=e.icon,o=e.iconPosition,i=e.loading,a=e.loadingComponent,c=e.size,s=e.inverse,f=Object(R.getTheme)(this.props,this.context).currentTheme;return a&&i?C.a.createElement("span",null,a&&this.cloneLoadingComponent()):C.a.createElement(oe,{theme:f,buttonType:r,size:c,inverse:s,icon:n},n&&"left"===o&&this.cloneIconLabel(),t,n&&"right"===o&&this.cloneIconLabel())}},{key:"render",value:function(){var e=this.props,t=e.automationId,r=e.buttonType,n=e.children,i=e.icon,c=e.loading,s=e.size,f=e.theme,u=a()(e,["automationId","buttonType","children","icon","loading","size","theme"]),d=this.props.inverse?"dark":"light",p=Object(R.getTheme)({theme:f,colorScheme:d},this.context),l=p.currentTheme,y=p.currentColorScheme;return Object(R.isValidTheme)(l)?(n||u["aria-label"]||console.error("Please provide one of aria-label or children for button."),C.a.createElement(w,null,C.a.createElement(U,o()({ref:this.getButtonRef,buttonType:r,icon:i,theme:l,"data-automation-id":t,size:s,colorScheme:y,loading:c?"true":void 0},u),C.a.createElement(Y,{buttonType:r,theme:l,size:s},n&&this.renderButtonIconLabel(),!n&&i&&this.renderIconOnly())))):null}}]),r}(C.a.PureComponent);x()(pe,"contextType",R.ThemeContext),x()(pe,"propTypes",{automationId:fe,children:de,disabled:ae,loading:ae,loadingComponent:se,icon:se,iconPosition:fe,inverse:ae,onBlur:ce,onClick:ce,onFocus:ce,onMouseDown:ce,size:ue(["mini","standard","jumbo","responsive"]),theme:ue(R.themes),buttonType:ue(["primary","secondary","tertiary","special","destructive","destructiveTertiary","icon","secondaryGhost"]),"aria-label":fe,a11yFocus:ae,assignButtonRef:ce,styleOverrideReason:function(e,t,r){if(e.className&&"string"!==typeof e.className)throw new Error("Required prop className needs to be of type string.");if(e.style&&"object"!==L()(e.style))throw new Error("Required prop style needs to be of type object.");return null}}),x()(pe,"defaultProps",{automationId:void 0,a11yFocus:!1,inverse:!1,buttonType:"primary",children:void 0,disabled:!1,loading:!1,loadingComponent:void 0,icon:void 0,iconPosition:"left",onBlur:function(){},onClick:function(){},onFocus:function(){},onMouseDown:function(){},assignButtonRef:function(){},size:"standard",theme:void 0,styleOverrideReason:void 0,"aria-label":void 0}),pe.displayName="Button";var le=pe;t.default=le}])}));