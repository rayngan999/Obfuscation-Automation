!function(e,t){if("object"===typeof exports&&"object"===typeof module)module.exports=t(require("react"));else if("function"===typeof define&&define.amd)define(["react"],t);else{var r="object"===typeof exports?t(require("react")):t(e.react);for(var n in r)("object"===typeof exports?exports:e)[n]=r[n]}}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(t,r){t.exports=e},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(7)),t.Platforms=["web","ios","android"],t.ColorSchemes=["light","dark"]},function(e,t,r){var n=r(6);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}e.exports=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){var n=r(5);e.exports=function(e,t){if(null==e)return{};var r,o,u=n(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(u[r]=e[r])}return u},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){e.exports=r(8)},function(e,t){e.exports=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.themes=["creditkarma","intuit","mint","quickbooks","ttfullservice","turbotax","expert","formfly","proconnect","quickbooksdesktop","tsheets","turbo"]},function(e,t,r){"use strict";r.r(t),r.d(t,"dsThemeContextManager",(function(){return f})),r.d(t,"setTheme",(function(){return s})),r.d(t,"ThemeContext",(function(){return l})),r.d(t,"Theme",(function(){return p})),r.d(t,"ThemeProvider",(function(){return p})),r.d(t,"ThemeType",(function(){return a.ThemeType})),r.d(t,"ColorScheme",(function(){return a.ColorScheme})),r.d(t,"themes",(function(){return a.themes})),r.d(t,"colorSchemeOptions",(function(){return a.ColorSchemes})),r.d(t,"useTheme",(function(){return h}));var n=r(3),o=r.n(n),u=r(2),i=r.n(u),c=r(0),f={setTheme:function(e){f.theme=e},getCurrentTheme:function(){return f.theme}},s=function(e){f.setTheme(e)},l=c.createContext(i()({theme:"intuit",colorScheme:"light"},f)),p=function(e){var t=e.children,r=o()(e,["children"]),n=c.useContext(l);return c.createElement(l.Provider,{value:i()(i()({},n),r)},t)},a=r(1);function d(e){var t,r,n="";if("string"===typeof e||"number"===typeof e)n+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=d(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}var m=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=d(e))&&(n&&(n+=" "),n+=t);return n},b=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=e.theme||t.theme||f.getCurrentTheme()||"intuit";"default"===n&&(n="intuit");var o=e.colorScheme||t.colorScheme||"light",u=m(r[n],r[o]);return{currentTheme:n,currentColorScheme:o,themeClass:u}},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return b(e,c.useContext(l),t)}}])}));