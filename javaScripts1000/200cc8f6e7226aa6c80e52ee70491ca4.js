"use strict";window.freedom.nsRequire=function(){var e={};function l(a){e[a]=e[a]||{callbacks:[],loaded:!1}}return{use:function(a,d){l(a),e[a].loaded?d():e[a].callbacks.push(d)},load:function(a){if(l(a),!e[a].loaded)for(var d=0;d<e[a].callbacks.length;d++)e[a].callbacks[d]();e[a].loaded=!0},isLoaded:function(a){return l(a),e[a].loaded}}}();