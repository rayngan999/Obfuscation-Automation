// cpe-client v0.2.18 Dailymotion
var cpeclient=function(){"use strict";function n(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function e(){var n="prod",e=window&&window.location&&window.location.hostname?window.location.hostname:"localhost",t=/env=([^&]+)/.exec(window.location.search.substring(1));return("preprod.dailymotion.com"===e||"api-stage.dmcdn.net"===e||/stage-(\d+).dailymotion.com/.exec(e))&&(n="preprod"),t&&(n=t[1]),n}var t=function(){function t(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var a,o,c;return a=t,(o=[{key:"launch",value:function(){var n=this;"loading"!==document.readyState?this.load():document.onreadystatechange=function(){"loading"!==document.readyState&&(n.load(),document.onreadystatechange=null)}}},{key:"load",value:function(){var n=this.getCpeUrl();window.cpeAsyncInit=function(){window.cpeAsyncInit=null},function(){var e=document.createElement("script");e.async=!0,e.src=n;var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()}},{key:"getCpeUrl",value:function(){switch(e()){case"dev":return"app.js";case"qualif":case"pprod":case"preprod":return"https://api-stage.dmcdn.net/pxl/cpe/app.min.js"}return"https://api.dmcdn.net/pxl/cpe/app.min.js"}}])&&n(a.prototype,o),c&&n(a,c),t}();return(new t).launch(),t}();