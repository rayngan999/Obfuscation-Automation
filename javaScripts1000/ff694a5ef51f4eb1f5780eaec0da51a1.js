define('utilities/helpers/helpers-layout-support/1.0.2/js/helpers-layout-support',['module'],function(module){'use strict';var _typeof=typeof Symbol==='function'&&typeof Symbol.iterator==='symbol'?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==='function'&&obj.constructor===Symbol&&obj!==Symbol.prototype?'symbol':typeof obj};var helpers={skipNav:function skipNav(_skipNav,language){language=language||'en';var opts={id:'ada-skip-link',href:'#skip-to-h1',textEn:'Skip to main content',textEs:'Ir al contenido principal'};if(_skipNav===false){return}if((typeof _skipNav==='undefined'?'undefined':_typeof(_skipNav))==='object'){for(var option in _skipNav){if(Object.prototype.hasOwnProperty.call(_skipNav,option)){opts[option]=_skipNav[option]}}}return new Handlebars.SafeString('<a class=\'ada-hidden ada-visible-focus\' href=\''+opts.href+'\' id=\''+opts.id+'\'>'+(language==='es'?opts.textEs:opts.textEn)+'</a>')}};module.exports.register=function(Handlebars,options){options=options||{};for(var helper in helpers){if(helpers.hasOwnProperty(helper)){Handlebars.registerHelper(helper,helpers[helper])}}};module.exports.helpers=helpers});
//# sourceMappingURL=./helpers-layout-support.js.map