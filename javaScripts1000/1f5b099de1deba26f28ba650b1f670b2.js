require.onResourceLoad=function(a,b){"use strict";"jquery.noconflict"===b.name&&require.undef(b.name)},define("hook",function(){"use strict";return{hooks:[],register:function(a){document.hasOwnProperty("bb_core")?"function"==typeof a&&a(require("Core")):this.hooks.push(a)},execute:function(a){var b;for(b in this.hooks)this.hooks.hasOwnProperty(b)&&"function"==typeof this.hooks[b]&&(this.hooks[b](a),delete this.hooks[b])}}});var baseURI=document.getElementById("bb5-ui").getAttribute("data-base-toolbar");require.config({baseUrl:baseURI,catchError:!0,waitSeconds:15,config:{text:{useXhr:function(){"use strict";return!0}}},paths:{component:"src/tb/component/component",filter:"src/tb/filter/filter",vendor:"dist/vendor.min","jquery.noconflict":"src/core-jquery.noconflict",ckeeditor:"dist/ckeeditor/ckeditor"},map:{"*":{jquery:"core-jquery"},"core-jquery":{jquery:"jquery"}},shim:{"lib.jqtree":{deps:["jquery.noconflict"]},"core-jquery":{init:function(){"use strict";return window.$.noConflict(!0)}},underscore:{exports:"_"},BackBone:{deps:["underscore","jquery.noconflict"],exports:"Backbone"},Core:{deps:["BackBone","jquery.noconflict","jsclass","underscore","nunjucks","URIjs/URI"]},"bootstrap-carousel":{deps:["jquery.noconflict"]},"bootstrap-dropdown":{deps:["jquery.noconflict"]},"jquery-layout":{deps:["jquery.noconflict"]},"cryptojs.core":{exports:"CryptoJS"},"cryptojs.md5":{deps:["cryptojs.core"],exports:"CryptoJS"}},deps:["src/tb/init"],callback:function(a){"use strict";a.listen()}});