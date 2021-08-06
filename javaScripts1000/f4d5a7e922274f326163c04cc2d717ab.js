!function(n,t){"use strict";var c=t.ea,u={settings:{debug:!1,dependencyTriggers:"change keyup",apply:function(t){!function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])}(u.settings,t),function(){if(!i.isBool(u.settings.debug))throw"debug value must be a boolean (true or false)";if(!i.isString(u.settings.dependencyTriggers)&&null!==u.settings.dependencyTriggers&&void 0!==u.settings.dependencyTriggers)throw"dependencyTriggers value must be a string (multiple event types can be bound at once by including each one separated by a space), null or undefined";}();n("form").each(function(){n(this).find("input, select, textarea").off(".expressive.annotations");e.bindFields(this,!0)})}},addMethod:function(n,t){s.addMethod(n,t)},addValueParser:function(n,t){i.addValueParser(n,t)},noConflict:function(){return t.ea===this&&(t.ea=c),this}},r={dump:function(n){u.settings.debug&&console&&"function"==typeof console.log&&console.log(n)},warn:function(n){console&&"function"==typeof console.warn&&console.warn(n)},fail:function(n){console&&"function"==typeof console.error&&console.error(n)}},s={methods:{},addMethod:function(n,t){var i=this.methods[n];this.methods[n]=function(){return t.length===arguments.length?t.apply(this,arguments):"function"==typeof i?i.apply(this,arguments):t.apply(this,arguments)}},registerMethods:function(n){var t,i;for(t in this.initialize(),this.methods)this.methods.hasOwnProperty(t)&&(i=this.methods[t],n[t]=i)},initialize:function(){this.addMethod("Now",function(){return Date.now()});this.addMethod("Today",function(){return new Date((new Date).setHours(0,0,0,0)).getTime()});this.addMethod("ToDate",function(n){return Date.parse(n)});this.addMethod("Date",function(n,t,i){return new Date(new Date(n,t-1,i).setFullYear(n)).getTime()});this.addMethod("Date",function(n,t,i,r,u,f){return new Date(new Date(n,t-1,i,r,u,f).setFullYear(n)).getTime()});this.addMethod("TimeSpan",function(n,t,i,r){return 1e3*r+6e4*i+36e5*t+864e5*n});this.addMethod("Length",function(n){return null!=n?n.length:0});this.addMethod("Trim",function(t){return null!=t?n.trim(t):null});this.addMethod("Concat",function(n,t){return[n,t].join("")});this.addMethod("Concat",function(n,t,i){return[n,t,i].join("")});this.addMethod("CompareOrdinal",function(n,t){return n===t?0:null!==n&&null===t?1:null===n&&null!==t?-1:n>t?1:-1});this.addMethod("CompareOrdinalIgnoreCase",function(n,t){return n=null!=n?n.toLowerCase():null,t=null!=t?t.toLowerCase():null,this.CompareOrdinal(n,t)});this.addMethod("StartsWith",function(n,t){return null!=n&&null!=t&&n.slice(0,t.length)===t});this.addMethod("StartsWithIgnoreCase",function(n,t){return n=null!=n?n.toLowerCase():null,t=null!=t?t.toLowerCase():null,this.StartsWith(n,t)});this.addMethod("EndsWith",function(n,t){return null!=n&&null!=t&&n.slice(-t.length)===t});this.addMethod("EndsWithIgnoreCase",function(n,t){return n=null!=n?n.toLowerCase():null,t=null!=t?t.toLowerCase():null,this.EndsWith(n,t)});this.addMethod("Contains",function(n,t){return null!=n&&null!=t&&n.indexOf(t)>-1});this.addMethod("ContainsIgnoreCase",function(n,t){return n=null!=n?n.toLowerCase():null,t=null!=t?t.toLowerCase():null,this.Contains(n,t)});this.addMethod("IsNullOrWhiteSpace",function(n){return null===n||!/\S/.test(n)});this.addMethod("IsDigitChain",function(n){return/^[0-9]+$/.test(n)});this.addMethod("IsNumber",function(n){return/^[+-]?(?:(?:[0-9]+)|(?:[0-9]+[eE][+-]?[0-9]+)|(?:[0-9]*\.[0-9]+(?:[eE][+-]?[0-9]+)?))$/.test(n)});this.addMethod("IsEmail",function(n){return/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(n)});this.addMethod("IsUrl",function(n){return/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i.test(n)});this.addMethod("IsRegexMatch",function(n,t){return null!=n&&null!=t&&new RegExp(t).test(n)});this.addMethod("Guid",function(n){var t=i.guid.tryParse(n);if(t.error)throw t.msg;return t});this.addMethod("Min",function(n){if(0===arguments.length)throw"no arguments";if(1===arguments.length&&i.isArray(n)){if(0===n.length)throw"empty sequence";return Math.min.apply(null,n)}return Math.min.apply(null,arguments)});this.addMethod("Max",function(n){if(0===arguments.length)throw"no arguments";if(1===arguments.length&&i.isArray(n)){if(0===n.length)throw"empty sequence";return Math.max.apply(null,n)}return Math.max.apply(null,arguments)});this.addMethod("Sum",function(n){if(0===arguments.length)throw"no arguments";var t,r,u=0;if(1===arguments.length&&i.isArray(n)){if(0===n.length)throw"empty sequence";for(t=0,r=n.length;t<r;t++)u+=parseFloat(n[t]);return u}for(t=0,r=arguments.length;t<r;t++)u+=parseFloat(arguments[t]);return u});this.addMethod("Average",function(n){if(0===arguments.length)throw"no arguments";var t,r,u=[];if(1===arguments.length&&i.isArray(n)){if(0===n.length)throw"empty sequence";return this.Sum(n)/n.length}for(t=0,r=arguments.length;t<r;t++)u.push(arguments[t]);return this.Sum(u)/arguments.length})}},i={parsers:{},addValueParser:function(t,r){n.each(t.split(/\s+/),function(n,t){/\S/.test(t)&&(i.parsers[t]=r)})},array:{contains:function(n,t){for(var i=n.length;i--;)if(n[i]===t)return!0;return!1}},object:{keys:function(n){var t,i=[];for(t in n)n.hasOwnProperty(t)&&i.push(t);return i},tryParse:function(t){try{return n.parseJSON(t)}catch(n){return{error:!0,msg:"Given value was not recognized as a valid JSON. "+n}}}},string:{format:function(n,t){function u(n){return n=i.isObject(n)?JSON.stringify(n,null,4):n,n=i.isString(n)?n.replace(/\$/g,"$$$$"):n}function f(n,t,i){return n.replace(new RegExp("\\{"+i+"\\}","gm"),t)}var r;if(t instanceof Array){for(r=0;r<t.length;r++)n=f(n,u(t[r]),r);return n}for(r=0;r<arguments.length-1;r++)n=f(n,u(arguments[r+1]),r);return n},tryParse:function(n){return i.isString(n)?n:null!=n?n.toString():{error:!0,msg:"Given value was not recognized as a valid string."}}},bool:{tryParse:function(t){return i.isBool(t)?t:!i.isString(t)||"true"!==(t=n.trim(t).toLowerCase())&&"false"!==t?{error:!0,msg:"Given value was not recognized as a valid boolean."}:"true"===t}},number:{tryParse:function(n){return t=n,i.isNumeric(parseFloat(t))&&isFinite(t)?parseFloat(n):{error:!0,msg:"Given value was not recognized as a valid float."};var t}},timespan:{tryParse:function(n){if(i.isTimeSpan(n)){var t=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/.exec(n),r="-"===t[1]?-1:1,u={days:i.number.tryParse(t[2]||0)*r,hours:i.number.tryParse(t[3]||0)*r,minutes:i.number.tryParse(t[4]||0)*r,seconds:i.number.tryParse(t[5]||0)*r,milliseconds:i.number.tryParse(t[6]||0)*r};return u.milliseconds+1e3*u.seconds+6e4*u.minutes+36e5*u.hours+864e5*u.days}return{error:!0,msg:"Given value was not recognized as a valid .NET style timespan string."}}},date:{tryParse:function(n){if(i.isDate(n))return n.getTime();if(i.isString(n)){var t=Date.parse(n);if(i.isNumeric(t))return t}return{error:!0,msg:"Given value was not recognized as a valid RFC 2822 or ISO 8601 date."}}},guid:{tryParse:function(n){return i.isGuid(n)?n.toUpperCase():{error:!0,msg:"Given value was not recognized as a valid guid - guid should contain 32 digits with 4 dashes (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)."}}},isTimeSpan:function(n){return/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/.test(n)},isNumeric:function(n){return"number"==typeof n&&!isNaN(n)},isDate:function(n){return n instanceof Date},isObject:function(n){return"object"==typeof n||n instanceof Object},isString:function(n){return"string"==typeof n||n instanceof String},isBool:function(n){return"boolean"==typeof n||n instanceof Boolean},isGuid:function(n){return/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(n)},isArray:function(n){return"[object Array]"===Object.prototype.toString.call(n)},tryParse:function(n,t,u,f){var e;if(null!=f){if(!(e=i.findValueParser(u,f)).error)return e(n,u);r.warn(e.msg)}return(e=i.findValueParser(u,t)).error?i.tryAutoParse(n,t):(r.warn(i.string.format("Overriden {0} type parsing runs for {1} field. All fields of {0} type are going to be parsed using your value parser. If such a behavior is unintentional, change the name of your value parser to one, which does not indicate at {0} (or any other) type name.",t,u)),e(n,u))},tryAutoParse:function(n,t){switch(t){case"timespan":return i.timespan.tryParse(n);case"datetime":return i.date.tryParse(n);case"numeric":return i.number.tryParse(n);case"string":return i.string.tryParse(n);case"bool":return i.bool.tryParse(n);case"guid":return i.guid.tryParse(n);default:return i.object.tryParse(n)}},findValueParser:function(n,t){var r=i.parsers[t];return"function"==typeof r?r:{error:!0,msg:i.string.format("Custom value parser {0} not found. Consider its registration with ea.addValueParser(), or remove redundant ValueParser attribute from {1} model field.",t,n)}}},f={getPrefix:function(n){return n.substr(0,n.lastIndexOf(".")+1)},extractValue:function(t,u,f,e,o){var l,s,c,h;if(s=f+u,0===(l=n(t).find(i.string.format(':input[name="{0}"]',s))).length)throw i.string.format("DOM field {0} not found.",s);if(null==(c=function(n){switch(n.attr("type")){case"checkbox":return n.length>2&&r.warn(i.string.format("DOM field {0} is ambiguous (unless custom value parser is provided).",n.attr("name"))),n.is(":checked");case"radio":return n.filter(":checked").val();default:return n.length>1&&r.warn(i.string.format("DOM field {0} is ambiguous (unless custom value parser is provided).",n.attr("name"))),n.val()}}(l))||""===c)return null;if(null!=(h=i.tryParse(c,e,s,o))&&h.error)throw i.string.format("DOM field {0} value conversion to {1} failed. {2}",s,e,h.msg);return h},deserializeObject:function(n,t,i,r,u){function o(n,t,i){var u,r,f,e,o;for(u=n.split("."),r=i,f=0;f<u.length-1;f++)n=u[f],(e=/^([a-z_0-9]+)\[([0-9]+)\]$/i.exec(n))?(n=e[1],o=e[2],r.hasOwnProperty(n)||(r[n]={}),r[n][o]={},r=r[n][o]):(r.hasOwnProperty(n)||(r[n]={}),r=r[n]);r[n=u[u.length-1]]=t}var f,s,h,e={};for(f in t)t.hasOwnProperty(f)&&(s=t[f],h=r[f],o(f,this.extractValue(n,f,u,s,h),e));for(f in i)i.hasOwnProperty(f)&&o(f,i[f],e);return e},adjustGivenValue:function(n,t,u){var o,e,f;if(n="checkbox"===t.type?t.checked:n,o=t.name.replace(u.prefix,""),e=u.parsersMap[o],null!=e){if(f=i.findValueParser(t.name,e),!f.error)return f(n,t.name);r.warn(f.msg)}return n},ctxEval:function(n,t){return new Function("expression","context","with(context){return eval(expression)}")(n,t)}},e={referencesMap:[],collectReferences:function(n,t,r){for(var u,f=0;f<n.length;f++)(u=r+n[f])!==t&&(this.referencesMap[u]=this.referencesMap[u]||[],i.array.contains(this.referencesMap[u],t)||this.referencesMap[u].push(t))},validateReferences:function(t,u){var e,o,f,s;if(s=n(u).validate(),null!=(f=this.referencesMap[t]))for(r.dump(i.string.format("Validation triggered for following {0} dependencies: {1}.",t,f.join(", "))),e=f.length;e--;)0!==(o=n(u).find(i.string.format(':input[data-val][name="{0}"]',f[e])).not(s.settings.ignore)).length&&o.valid();else r.dump(i.string.format("No dependencies of {0} field detected.",t))},bindFields:function(t,f){if(null!==u.settings.dependencyTriggers&&void 0!==u.settings.dependencyTriggers&&""!==u.settings.dependencyTriggers){var o=[];n.each(u.settings.dependencyTriggers.split(/\s+/),function(n,t){/\S/.test(t)&&o.push(i.string.format("{0}.expressive.annotations",t))});n(t).find("input, select, textarea").not(function(t,i){var r=n(i).hasClass("ea-triggers-bound");return n(i).addClass("ea-triggers-bound"),!f&&r}).on(o.join(" "),function(u){var f=n(this).attr("name");r.dump(i.string.format("Dependency validation trigger - {0} event, handled.",u.type));e.validateReferences(f,t)})}}},h=function(t,r){var u={prefix:f.getPrefix(r.element.name),form:r.form};for(var o in r.params)r.params.hasOwnProperty(o)&&(u[o]=void 0!==r.params[o]?n.parseJSON(r.params[o]):{});r.message&&(r.messages[t]=function(n){var t,i,u,e,o;for(i in t=r.message,n.errFieldsMap)n.errFieldsMap.hasOwnProperty(i)&&(u=n.errFieldsMap[i],e=f.extractValue(n.form,i,n.prefix,"string",null),o=new RegExp(u,"g"),t=t.replace(o,e));return t});e.bindFields(r.form);e.collectReferences(i.object.keys(u.fieldsMap),r.element.name,u.prefix);r.rules[t]=u},o=" abcdefghijklmnopqrstuvwxyz";n.each(o.split(""),function(){var t=i.string.format("assertthat{0}",n.trim(this));n.validator.unobtrusive.adapters.add(t,["expression","fieldsMap","constsMap","parsersMap","errFieldsMap"],function(n){h(t,n)})});n.each(o.split(""),function(){var t=i.string.format("requiredif{0}",n.trim(this));n.validator.unobtrusive.adapters.add(t,["expression","fieldsMap","constsMap","parsersMap","errFieldsMap","allowEmpty"],function(n){h(t,n)})});n.each(o.split(""),function(){var t=i.string.format("assertthat{0}",n.trim(this));n.validator.addMethod(t,function(t,u,e){try{var o=function(n,t,u){if(null!=(n=f.adjustGivenValue(n,t,u))&&""!==n){var e=f.deserializeObject(u.form,u.fieldsMap,u.constsMap,u.parsersMap,u.prefix);if(s.registerMethods(e),r.dump(i.string.format("AssertThat expression of {0} field:\n{1}\nwill be executed within following context (methods hidden):\n{2}",t.name,u.expression,e)),!f.ctxEval(u.expression,e))return!1}return!0}(t,u,e);return n(u).trigger("eavalid",["assertthat",o,e.expression]),o}catch(n){r.fail(n)}},"")});n.each(o.split(""),function(){var t=i.string.format("requiredif{0}",n.trim(this));n.validator.addMethod(t,function(t,u,e){try{var o=function(n,t,u){if(null==(n=f.adjustGivenValue(n,t,u))||""===n||!/\S/.test(n)&&!u.allowEmpty){var e=f.deserializeObject(u.form,u.fieldsMap,u.constsMap,u.parsersMap,u.prefix);if(s.registerMethods(e),r.dump(i.string.format("RequiredIf expression of {0} field:\n{1}\nwill be executed within following context (methods hidden):\n{2}",t.name,u.expression,e)),f.ctxEval(u.expression,e))return!1}return!0}(t,u,e);return n(u).trigger("eavalid",["requiredif",o,e.expression]),o}catch(n){r.fail(n)}},"")});t.ea=u}(jQuery,window)