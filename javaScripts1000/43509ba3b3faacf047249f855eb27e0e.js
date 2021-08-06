/* >>> file start: js/storage.js */
!function(){function e(e){var o=void 0;o=/null/.test(e.origin)||/https?:\/\/[^\/]*livejournal\.com/.test(e.origin)||/https?:\/\/[^\/]*varlamov\.ru/.test(e.origin)||/https?:\/\/[^\/]*dev\.lj\.rambler\.tech/.test(e.origin)||/https?:\/\/[^\/]*local\.bulyon\.com/.test(e.origin)?!0:!!~e.data.indexOf(i),o&&(n(e.data),t({newValue:e.data}))}function t(e){window.parent.postMessage(e.newValue,"*")}function n(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return localStorage.setItem(i,e),e}function o(e){e=e.replace(/[\[\]]/g,"\\$&");var t=window.location.href,n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),o=n.exec(t);return o?o[2]?decodeURIComponent(o[2].replace(/\+/g," ")):"":null}function r(){try{return window.self!==window.top}catch(e){return!0}}var i=o("key");return i&&r()?(window.addEventListener("storage",t),void window.addEventListener("message",e)):null}();
/* <<< file end: js/storage.js */

//# map link was there [storage.js.map]
