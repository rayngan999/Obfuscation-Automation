Cube("datav:/npm/dchart-core/2.6.52/util",["datav:/npm/dchart-core/2.6.52/util/animation","datav:/npm/dchart-core/2.6.52/core/animation","datav:/npm/dchart-core/2.6.52/util/constants","datav:/npm/lodash/4.17.11","datav:/npm/bcore/0.0.22/utils"],function(a,b,c){var d=c("datav:/npm/lodash/4.17.11"),e=c("datav:/npm/bcore/0.0.22/utils"),f=c("datav:/npm/dchart-core/2.6.52/util/animation"),g=c("datav:/npm/dchart-core/2.6.52/core/animation"),h=e.deepMergeWithoutArray,i=c("datav:/npm/dchart-core/2.6.52/util/constants");return e.deepMerge=function(a,b){return h(a,b)},d.mixin(e),d.mixin({animationController:f}),d.mixin(g),d.mixin({exec:function(a){var b=Array.apply(null,arguments).slice(1);return"function"==typeof a?a.call(this,b):a},instance:function(a){if(!d.has(this,a)){var b=Array.apply(null,arguments).slice(1);return new a(b)}return this[a]},initialUpperCase:function(a){var b;return a.replace(/\w+/g,function(a){return b=a.substring(0,1).toUpperCase()+a.substring(1)}),b},pos2Str:function(a){var b="";return a.forEach(function(a){b+=a.x+","+a.y+" "}),b},obj2Str:function(a){var b="",c=null;for(var d in"function"==typeof arguments[1]&&(c=arguments[1]),a)b+=c?c(d,a[d]):d+":"+a[d]+";";return b},pos2Path:function(a,b){var c="M";return a.forEach(function(a,b){c+=0===b?a.x+" "+a.y:"L"+a.x+" "+a.y}),b||(c+="Z"),c},pos2PathByArr:function(a){for(var b="M",c=0;c<a.length;c+=2)b+=0===c?a[c]+","+a[c+1]:"L"+a[c]+","+a[c+1];return b+="Z"},split:function(a,b){if(d.isArray(a))return a.split(b);var c="";for(var f in a)c+=a[f]+b;return c},getUUID:function(){return~~(1e4*Math.random())+ +new Date},getRectPath:function(a,b,c,d){return"M".concat(a," ").concat(b," h").concat(c," v").concat(d," h").concat(-c," L").concat(a," ").concat(b)}}),Object.assign(d,i),a.exports=d,a.exports});