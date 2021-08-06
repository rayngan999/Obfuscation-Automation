if (typeof tiMonitor == "undefined"){ var tiMonitor = tiMonitor || {};
(function(){Function.prototype.bind=Function.prototype.bind||function(a){var c=this;return function(){return c.apply(a,arguments)}}})();var EMPTY_FUN=function(){},UNDEF;
(function(){function a(){}var c=null;try{c=function(){return this}()}catch(b){}a.global=function(){return c};a.namespace=function(b,d,f,m){b=b.split(".");var g=a.NAMESPACE_BASE||a.global(),h=null,l=null,g=f||g;for(f=0;f<b.length-1;f+=1)l=b[f],g[l]=g[l]||{},g=g[l];h=g;l=b[b.length-1];c.TAGSDK_NS_OVERRIDE&&(m=!1);void 0!==d?void 0!==h[l]&&m||(h[l]=d):h[l]=h[l]||{};return h[l]};a.clazz=function(b,d,c,m,g){a.namespace(b,d,m,!0);"function"===typeof c&&(d.superclass=c,d.prototype=new d.superclass(g));d.prototype&&
(b=b.split("."),d.prototype.CLASS_NAME=b[b.length-1],b.splice(b.length-1,1),d.prototype.PACKAGE_NAME=b.join("."));return d};a.clazz("taginspector.Define",a)})();
(function(){function a(b){}for(var c={},b=0;93>b;b++)c["abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ*!-#$&+()@'%./:<>?[\"]^_`{|}~\\;=".charAt(b)]=b;taginspector.Define.clazz("taginspector.Cookie",a);a.cookieAlphabet="abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ*!-#$&+()@'%./:<>?[\"]^_`{|}~\\;=";a.cookieAlphabetMap=c;a.decode=function(b){return decodeURIComponent(b)};a.encode=function(b){return encodeURIComponent(b)};a.set=function(b,c,f,m,g){if(f){var h=new Date;
h.setTime(h.getTime()+864E5*f);f="; expires="+h.toGMTString()}else f="";g&&(b=a.encode(b),c=a.encode(c));b=b+"="+c+f+"; path=/;";m&&(b+=" domain="+m);document.cookie=b};a.get=function(b,c){for(var f=b+"=",m=document.cookie.split(";"),g=0;g<m.length;g++){for(var h=m[g];" "===h.charAt(0);)h=h.substring(1,h.length);if(0===h.indexOf(f))return f=h.substring(f.length,h.length),c&&(f=a.decode(f)),f}return null};a.getAll=function(b,c){for(var f=b+"=",m=document.cookie.split(";"),g=[],h=0;h<m.length;h++){for(var l=
m[h];" "===l.charAt(0);)l=l.substring(1,l.length);0===l.indexOf(f)&&(l=l.substring(f.length,l.length),c&&(l=a.decode(l)),g.push(l))}return g};a.rm=function(b,c){a.set(b,"",-1,c)}})();
(function(){function a(a){if(a)if(a.alphabet)for(this.alphabet=a.alphabet,this.dict={},a=0;a<this.alphabet.length;a++)this.dict[this.alphabet[a]]=a;else this.alphabet=b,this.dict=f}function c(b,a){for(var c in a)if(b===a[c])return c;return null}for(var b=[],e=Math.pow(2,8),d=0;d<e;d++)b.push(String.fromCharCode(d));for(var f={},e=0;e<b.length;e++)f[b[e]]=e;taginspector.Define.clazz("taginspector.compression.LZW",a);a.prototype.encode=function(b){for(var a=this.alphabet.length,c={},d=[],e=0,p=b.charAt(e++),
q,k=this.dict;q=b.charAt(e++);){var n=p+q;if(k.hasOwnProperty(n)||c.hasOwnProperty(n))p=n;else{var f=k.hasOwnProperty(p)?k[p]:c[p];if(void 0===f)throw"Dictionary base is to small for those contents: "+p;d.push(f);c[n]=a++;p=q}}""!==p&&d.push(c.hasOwnProperty(p)?c[p]:k[p]);return d};a.prototype.decode=function(b){for(var a=this.dict,d=this.alphabet.length,e,f={},p=c(b[0],a),q=p,k=[p],n=1;n<b.length;n++){var w=b[n];e=c(w,a);null===e&&(f.hasOwnProperty(w)&&(e=f[w]),null===e&&(e=q+p));k.push(e);p=e.charAt(0);
f[d++]=q+p;q=e}return k.join("")}})();
(function(){function a(b){}for(var c={},b=0;45>b;b++)c["abcdefghijklmnopqrstuvwxyz0123456789'%./:<>?[".charAt(b)]=b;for(var e={},b=0;45>b;b++)e['ABCDEFGHIJKLMNOPQRSTUVWXYZ*!-+()@{|}"]^_`~$&#'.charAt(b)]=b;for(var d={},b=0;45>b;b++)d["abcdefghijklmnopqrstuvwxyz0123456789'%./:<>?[".charAt(b)]='ABCDEFGHIJKLMNOPQRSTUVWXYZ*!-+()@{|}"]^_`~$&#'.charAt(b);var f="abcdefghijklmnopqrstuvwxyz0123456789'%./:<>?[".split(""),m=f.length,g=new taginspector.compression.LZW({});taginspector.Define.clazz("taginspector.compression.Compressor",
a);a.prototype.compress=function(b,a){for(var c=(a||g).encode(b),p=[],q=0;q<c.length;q++)p.push(String.fromCharCode(c[q]));return p.join("")};a.prototype.compressAnsi=function(b,a){for(var c=(a||g).encode(b),p=[],q=0;q<c.length;q++){var k;k=c[q];var n=0,e=0>k;e&&(k=-k);var s="",v=!0;do n=k%m,v?(s=d[f[n]],v=!1):s=f[n]+s,k=(k-n)/m;while(0<k);k=e?"-"+s:s;p.push(k)}return p.join("")};a.prototype.decompressAnsi=function(b,a){for(var d=[],p="",q=0;q<b.length;q++){var k=b.charAt(q);if(e.hasOwnProperty(k)){for(var k=
p+k,p="",n=0,f=0,s=!0,v=0;v<k.length;v++){var x=k.charAt(k.length-1-v);s&&(s=!1,x="abcdefghijklmnopqrstuvwxyz0123456789'%./:<>?[".charAt(e[x]));n+=c[x]*Math.pow(m,f++)}k=n;d.push(k)}else p+=k}return(a||g).decode(d)};a.prototype.decompress=function(b,a){for(var c=[],p=0;p<b.length;p++)c.push(b.charCodeAt(p));return(a||g).decode(c)}})();
(function(){function a(){}function c(b,a){for(var k=m.length,n=0;n<k;n++)if(b===m[n][0])return m[n][1];m[m.length]=[b,a];return!1}function b(a,q,k,n,e){var d=!1,g=!1,l=!1,h=!1,r=!1,r=!1;q&&(d=(r=!!q.all)||q.nodes,h=r||q.win,g=r,l=q.noFunctions&&!r,void 0!==q.noOwn&&(g=!!q.noOwn),void 0!==q.noFunctions&&(l=!!q.noFunctions),void 0!==q.win&&(h=!!q.win),void 0!==q.nodes&&(d=!!q.nodes),r=!!q.copyReference);if(void 0===k||k){void 0!==k&&k--;if(!(a&&a instanceof Object))return a;if(!d){try{if(a instanceof
Node)return a}catch(y){if(a instanceof ActiveXObject&&void 0!==a.nodeType)return a}if(a===document)return a}if(!h&&a===f)return a;d=a instanceof Array?[]:{};a instanceof Date&&(d=new Date(a));!l&&a instanceof Function&&(l=String(a).replace(/\s+/g,""),d=l.indexOf("{[nativecode]}")+14===l.length?function(){return a.apply(e||this,arguments)}:function(){return a.apply(this,arguments)});void 0===n&&(m=[],n=0);if(l=c(a,d))return l;if(d instanceof Array)for(l=0;l<a.length;l++)d[d.length]=a[l]===a[l]?b(a[l],
q,k,n+1,a):a[l];else{var l=0,u;for(u in a){if(g||a.hasOwnProperty(u))d[u]=a[u]===a[u]?b(a[u],q,k,n+1,a):a[u];l++}}q.proto&&(d.prototype=b(a.prototype,q,k,n+1,a));r&&(d.___copy_ref=a);return d}}function e(b,a,k,n,c,d,l){k=k||{};void 0===k.hasOwn&&(k.hasOwn=!0);if(!k.objectsOnly||b instanceof Object)if(void 0===k.maxDeep||k.maxDeep){void 0!==k.maxDeep&&k.maxDeep--;if(!k||!k.nodes)try{if(b instanceof Node)return}catch(m){if(b instanceof ActiveXObject&&void 0!==b.nodeType)return}if(b!==f){void 0===n&&
(g=[],n=0);var h;a:{for(h=0;h<n&&h<g.length;h++)if(b===g[h]){h=!0;break a}h=!1}if(!(h||(g[n]=b,c=c||b,c&&d&&c[d]!==c[d]||a(b,c,d,l)))){d=0;h="";for(var r in b){if(!k.hasOwn||b.hasOwnProperty(r))try{var y=b[r];k.track&&(h=l?l+"."+r:r);e(y,a,k,n+1,c,r,h)}catch(u){}d++}}}}}var d=taginspector.Define,f=d.global();d.clazz("taginspector.datapulse.Utils",a);a.global=d.global;a.namespace=d.namespace;a.clazz=d.clazz;a.getObjectUsingPath=function(b,a){a=a||f;for(var k=b.split("."),c=0;c<k.length;c++)a&&k[c]&&
(a=a[k[c]]);return a};a.variableExists=function(b){return void 0!==b&&null!==b&&""!==b};a.ANON_VARS=[];a.getAnonymousAcessor=function(b){var c=a.indexInArray(b,a.ANON_VARS);-1===c&&(c=a.addToArrayIfNotExist(a.ANON_VARS,b));return"taginspector.datapulse.Utils.ANON_VARS["+c+"]"};a.replaceAll=function(b,a,k){return b.replace(new RegExp(a.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1"),"g"),k)};a.isInt=function(b){if(isNaN(b))return!1;b=parseFloat(b);return(b|0)===b};a.secureText=function(b){"string"!==
typeof b&&(b+="");b=b.replace(/</g,"&lt;");return b=b.replace(/>/g,"&gt;")};a.getUrl=function(){return document.location.href};a.getQueryParam=function(b){var c,k,n,d;c=a.getUrl();if(0<c.indexOf("?"))for(d=c.substring(c.indexOf("?")+1).split("&"),c=0,k=d.length;c<k;c+=1)if(n=d[c],0<n.indexOf("=")&&(n=n.split("="),2===n.length&&n[0]===b))return n[1];return null};a.getElementValue=function(b){return(b=document.getElementById(b))?b.textContent||b.innerText:null};var m=[];a.objectCopy=function(a,c){c=
c||{};var k=b(a,c,c.maxDeep);m=[];return k};var g=[];a.traverse=function(b,a,k){e(b,a,k)};a.prepareQuotedString=function(b){return"string"===typeof b?'"'+b.replace(/\"/g,'\\"')+'"':b};a.expressionToFunction=function(b,c){return a.gevalAndReturn("function ("+(c||"")+") {"+b+"}").result};a.defineClass=function(b,c,k){var d=b.split("."),d=a.gevalAndReturn("(function "+d[d.length-1]+"() {  if ("+b+"._CONSTRUCTOR) {    return "+b+"._CONSTRUCTOR.apply(this, arguments);  } else {    if ("+b+".superclass) {      return "+
b+".superclass.apply(this, arguments);    }  }})").result;d._CONSTRUCTOR=k.CONSTRUCTOR;d.superclass=c;a.clazz(b,d,c);for(var e in k)k.hasOwnProperty(e)&&"CONSTRUCTOR"!==e&&(d.prototype[e]=k[e]);return d};a.keys=function(b){if(b instanceof Object){if(Object.keys)return Object.keys(b);var a=[],c;for(c in b)b.hasOwnProperty(c)&&(a[a.length]=c);return a}throw"keys() called on non-object!";};a.getSrcElement=function(b){var a;b=b||window.event;b.srcElement?a=b.srcElement:b.target&&(a=b.target);return a};
a.addToArrayIfNotExist=function(b,a){for(var c=0,d=!1;c<b.length;c+=1)if(b[c]===a){d=!0;break}d||(b[b.length]=a,c=-1);return c};a.indexInArray=function(b,a){for(var c=0,d=!1;c<b.length;c++)if(b[c]===a){d=!0;break}return d?c:-1};a.removeFromArray=function(b,a){for(var c=0;c<b.length;c+=1)b[c]===a&&b.splice(c,1)};a.addClass=function(b,c){var d;try{b.classList.add(c)}catch(n){null===b.className?b.className=c:(d=b.className.split(" "),a.addToArrayIfNotExist(d,c),b.className=d.join(" "))}};a.removeClass=
function(b,c){var d;try{b.classList.remove(c)}catch(n){null===b.className?b.className="":(d=b.className.split(" "),a.removeFromArray(d,c),b.className=d.join(" "))}};a.gevalAndReturn=function(b){a.gevalAndReturn.___var_test___=void 0;a.gevalAndReturn.___var_test___error=void 0;a.geval("try{taginspector.datapulse.Utils.gevalAndReturn.___var_test___=("+b+");}catch(ex){taginspector.datapulse.Utils.gevalAndReturn.___var_test___error = ex;}");return{result:a.gevalAndReturn.___var_test___,error:a.gevalAndReturn.___var_test___error}};
a.trim=function(b){try{return String(b).trim()}catch(a){return String(b).replace(/^\s+|\s+$/g,"")}};a.setIfUnset=function(b,a){if(b&&a)for(var c in a)a.hasOwnProperty(c)&&!b.hasOwnProperty(c)&&(b[c]=a[c])};a.geval=function(b){window&&window.execScript?window.execScript(b):f.eval.call(f,b)};var h=[],l=!1;a.bodyReady=function(b){if(l)return b&&b(),!0;if(l=!(!document.body||"complete"!==document.readyState)){for(var a=0;a<h.length;a++)try{h[a]()}catch(c){}b&&b()}else b&&h.push(b);return l};var r=f.onload;
f.onload=function(b){a.bodyReady();r&&r(b)}})();
(function(){function a(b){this.config={name:"Trigger-"+c++,uniqueId:"Trigger-"+c++,triggerScript:void 0,rules:[]};this.currentState=a.state.WAITING;if(b){for(var e in b)b.hasOwnProperty(e)&&(this.config[e]=b[e]);this.uniqueId=this.config.uniqueId;b.session&&this.setSession(b.session);return a.register(this)}}var c=0;taginspector.datapulse.Utils.clazz("taginspector.datapulse.trigger.BaseTrigger",a);a.pageTriggers=[];a.resetFiredTriggers=function(){pageTriggers=a.pageTriggers;for(i=0;i<pageTriggers.length;i++){t=
pageTriggers[i];t.config.triggerFired=!1;t.currentState=a.state.WAITING;for(var b=0;b<t.config.rules.length;b++)rule=t.config.rules[b],rule.hitSent=!1}};a.register=function(b){return b instanceof a?(a.pageTriggers.push(b),b):null};a.state={WAITING:0,FIRED:1};a.prototype.checkRules=function(){for(var b=0;b<this.config.rules.length;b++)rule=this.config.rules[b],rule.checkFiltersIfTriggersFired()};a.prototype.triggerCallback=function(){this.currentState=a.state.FIRED;this.checkRules()};a.prototype.initTrigger=
function(b){cb=this.triggerCallback;cb=cb.bind(this);triggerFired=this.config.triggerFired;!1==triggerFired&&this.config.triggerScript(cb,triggerFired);this.config.triggerFired=!0;b(this.config.triggerFired)};a.prototype.getState=function(){return this.currentState};a.prototype.addRule=function(b){this.config.rules.push(b)};a.prototype.setTriggerScript=function(b){this.config.triggerScript=b}})();
(function(){function a(b){this.config={};this.parameters=null;this.reportValue=!1;if(b){this.uniqueId=b.uniqueId;this.reportValue=b.reportValue;a.ALL_VARIABLES[this.uniqueId]=this;for(var c in b)this.config[c]=b[c];void 0!==b.value&&(this.value=b.value);void 0!==b.defaultValue&&(this.defaultValue=b.defaultValue);return a.register(this)}}var c=taginspector.datapulse.Utils;c.clazz("taginspector.datapulse.pagevariable.BaseVariable",a);a.ALL_VARIABLES={};a.pageVariables=[];a.clearCache=function(){pageVars=
a.pageVariables;for(i=0;i<pageVars.length;i++)t=pageVars[i],t.isCachedValueSet=!1};a.register=function(b){return b instanceof a?(a.pageVariables.push(b),b):null};a.prototype.getValue=function(){return this.value};a.prototype.setValue=function(b){this.value=b};a.prototype.getDefaultValue=function(){return this.defaultValue};a.prototype.setDefaultValue=function(b){this.defaultValue=b};a.prototype.exists=function(b){var a=c.variableExists(this.getValue());b&&(a=a||c.variableExists(this.getDefaultValue()));
return a};a.prototype.getRelativeValue=function(b,a){var d=this.getValue();c.variableExists(d)||(d=a);var f;b&&!c.variableExists(d)&&(f=this.getDefaultValue(),c.variableExists(f)&&(d=f));return d};a.prototype.replaceToken=function(b,a,d,f){var m=this.exists();d=m?this.getValue():d;b="\\$\\{"+b+"\\}";return f||d instanceof Array?(f=m?this.getValueAccessorString():c.getAnonymousAcessor(d),a.replace(new RegExp(b,"g"),f)):a.replace(new RegExp(b,"g"),d)};a.prototype.getAccessorString=function(){return"taginspector.datapulse.pagevariable.BaseVariable.ALL_VARIABLES."+
this.uniqueId};a.prototype.getValueAccessorString=function(){return this.getAccessorString()+".getValue()"}})();
(function(){function a(b){this._lockObject={};var e={uniqueId:"Macro-"+c++};if(b)for(var d in b)e[d]=b[d];this.reportValue=!1;b&&(this.uniqueId=b.uniqueId,this.reportValue=b.reportValue);this.valueSetTimestamp=0;this.isCachedValueSet=!1;this.cachedValue="";a.superclass.call(this,e)}var c=0;taginspector.datapulse.Utils.clazz("taginspector.datapulse.pagevariable.JsExpression",a,taginspector.datapulse.pagevariable.BaseVariable);a.prototype.getValue=function(){return!0==this.isCachedValueSet&&3>=performance.now()-
this.valueSetTimestamp?this.cachedValue:this.value(!0)?(this.isCachedValueSet=!0,this.valueSetTimestamp=performance.now(),this.cachedValue=this.value(!0).toString()):""}})();
(function(){function a(b){this.config={order:0,include:!0,name:"Filter-"+c++,uniqueId:"Filter-"+c++,script:void 0,session:void 0};this.session=null;if(b){for(var a in b)b.hasOwnProperty(a)&&(this.config[a]=b[a]);b.session&&this.setSession(b.session)}this.uniqueId=this.config.uniqueId}var c=0;taginspector.datapulse.Utils.clazz("taginspector.datapulse.filter.BaseFilter",a);a.state={DISABLED:-3,SESSION:-2,PASS:-1,FAIL:0};a.prototype.reset=function(){this.enable()};a.prototype.disable=function(){this.config.disabled=
!0};a.prototype.enable=function(){this.config.disabled=!1};a.prototype.match=function(){return!0};a.prototype.setSession=function(b){this.session=b};a.prototype.getSession=function(){return this.session};a.prototype.getState=function(){var b=a.state.PASS;if(this.config.disabled)return a.state.DISABLED;this.config.script&&(b=this.config.script.call(this,b));isNaN(+b)&&(b=a.state.FAIL);this.lastState=+b;return b}})();
(function(){taginspector.datapulse.Utils.namespace("taginspector.datapulse.filter.pattern.PatternType",{CONTAINS:"Contains",MATCHES_EXACTLY:"Matches Exactly",STARTS_WITH:"Starts With",ENDS_WITH:"Ends With",REGULAR_EXPRESSION:"Regular Expression",ALL_URLS:"All URLs",EQUALS:"Equals",DOES_NOT_EQUAL:"Does not Equal",DOES_NOT_CONTAIN:"Does not Contain",DOES_NOT_STARTS_WITH:"Does not Start With",DOES_NOT_END_WITH:"Does not End With",MATCHES_REGEX:"Matches Regex",DOES_NOT_MATCH_REGEX:"Does not Match Regex",
LESS_THAN:"Less Than",GREATER_THAN:"Greater Than"})})();
(function(){function a(c){this._lockObject={};var d={comparisonType:b.CONTAINS,sourceVariable:void 0,comparisonVariable:void 0};if(c)for(var f in c)c.hasOwnProperty(f)&&(d[f]=c[f]);a.superclass.call(this,d)}var c=taginspector.datapulse.Utils,b=taginspector.datapulse.filter.pattern.PatternType;c.clazz("taginspector.datapulse.filter.JsExpressionFilter",a,taginspector.datapulse.filter.BaseFilter);a.prototype.match=function(){var a=!0,d=this.config.sourceVariable.getValue();if("object"==typeof this.config.comparisonVariable)var f=
this.config.comparisonVariable.getValue();else if("string"==typeof this.config.comparisonVariable||"number"==typeof this.config.comparisonVariable)f=this.config.comparisonVariable;else return!1;switch(this.config.comparisonType){case b.LESS_THAN:case b.GREATER_THAN:if(!1==c.isInt(f))return!1;f=parseInt(f)}switch(this.config.comparisonType){case b.DOES_NOT_CONTAIN:case b.CONTAINS:a=0<=d.toLowerCase().indexOf(f.toLowerCase());break;case b.EQUALS:case b.DOES_NOT_EQUAL:case b.MATCHES_EXACTLY:a=d.toLowerCase()===
f.toLowerCase();break;case b.STARTS_WITH:case b.DOES_NOT_STARTS_WITH:a=0===d.toLowerCase().indexOf(f.toLowerCase());break;case b.ENDS_WITH:case b.DOES_NOT_END_WITH:a=d.toLowerCase().substr(-f.length)===f.toLowerCase();break;case b.MATCHES_REGEX:case b.REGULAR_EXPRESSION:case b.DOES_NOT_MATCH_REGEX:a=(new RegExp(f,"i")).test(d);break;case b.LESS_THAN:a=d<f;break;case b.GREATER_THAN:a=d>f;break;case b.ALL_variableValueS:a=!0}switch(this.config.comparisonType){case b.DOES_NOT_EQUAL:case b.DOES_NOT_CONTAIN:case b.DOES_NOT_STARTS_WITH:case b.DOES_NOT_END_WITH:case b.DOES_NOT_MATCH_REGEX:a=
!a}return a}})();
(function(){function a(b){this.config={};this.uniqueId="BR"+d++;this.ruleVersion=1;this.triggerTiming="";if(b){this.uniqueId=b.uniqueId;this.ruleVersion=b.ruleVersion;this.triggerTiming=b.triggerTiming;this.dataCollector=b.dataCollector;for(var a in b)this.config[a]=b[a]}this.filters=[];this.session=void 0;this.triggers=[];this.hitSent=!1}var c=taginspector.datapulse.filter.BaseFilter,b=taginspector.datapulse.trigger.BaseTrigger,e=taginspector.datapulse.pagevariable.BaseVariable,d=0;taginspector.datapulse.Utils.clazz("taginspector.datapulse.BaseRule",
a);a.prototype.getFilters=function(){return this.filters};a.prototype.addFilter=function(b){this.filters.push(b)};a.prototype.addTrigger=function(b){this.triggers.push(b)};a.prototype.hasHitBeenSent=function(){return this.hitSent};var f=b.state.WAITING,m=b.state.FIRED,g=c.state.PASS,h=c.state.FAIL;a.prototype.getFailedFilters=function(){filters=this.filters;failedFilters=[];for(var b=0;b<filters.length;b++)filter=filters[b],filter.match()||failedFilters.push(filter.uniqueId+"|"+filter.config.sourceVariable.uniqueId);
return failedFilters};a.prototype.checkFiltersIfTriggersFired=function(b){b=tiMonitor.dataCollector.timeOnPage();triggersRun=this.triggersState();if(triggersRun==m&&!1==this.hitSent)if(this.hitSent=!0,validationResults=this.filtersState(),validationResults==h){failedFilters=this.getFailedFilters();qsPageVariables=[];pageVariables=e.pageVariables;for(i=0;i<pageVariables.length;i++)try{pageVariable=pageVariables[i],pageVariable instanceof e&&!0==pageVariable.reportValue&&(variableId=pageVariable.uniqueId,
(variableValue=pageVariable.getValue())?1E3<variableValue.length&&(variableValue=variableValue.substring(0,1E3)):variableValue="*undefined*",combinedVariableValue=encodeURIComponent(variableId)+"="+encodeURIComponent(variableValue),qsPageVariables.push(combinedVariableValue))}catch(a){errMessage="Error with variable "+variableId+": "+a.message,console.log(errMessage),jeErrorObj={message:errMessage},tiMonitor.dataCollector.queueRequest(jeErrorObj,"jserror")}failedRuleObject={failedConditions:failedFilters.toString(),
pageMacros:qsPageVariables.toString(),failedRule:this.uniqueId,validationTime:b,ruleVersion:this.ruleVersion,triggerTiming:this.triggerTiming};this.dataCollector.queueRequest(failedRuleObject,"validationerror")}else passedRuleObject={passedRule:this.uniqueId,ruleVersion:this.ruleVersion,validationTime:b,triggerTiming:this.triggerTiming},this.dataCollector.queueRequest(passedRuleObject,"validationsuccess")};a.prototype.triggersState=function(){for(var b=m,a=0;a<this.triggers.length;a++)if(trigger=
this.triggers[a],trigger.getState()==f){b=f;break}return b};a.prototype.filtersState=function(){filters=this.filters;session=this.session;filters=filters.sort(function(b,a){try{return a.config.order-b.config.order}catch(c){return 0}});var b=g;if(!filters||0===filters.length)return b;for(var a,c=0;c<filters.length;c++)if(a=filters[c],a.setSession(session),!1==a.match()){b=h;break}return b}})();
(function(){function a(b){for(var a=[],c=0;c<b.length;c++){var f=d(b[c][0]);a.push([new RegExp(f,"g"),"*"+b[c][1]])}return a}function c(b,a){for(var c=0;c<a.length;c++)if(a[c][1]===b)return a[c][0];return null}function b(b){this._regexDefs=l;this._defs=h;b&&b.definitions&&(this._regexDefs=a(b.definitions),this._defs=b.definitions)}function e(b,a){for(var c=[],d=0;d<b.length;d++){var f=!0;a&&(f=b.charCodeAt(d)<=a);var e=g.cookieAlphabetMap.hasOwnProperty(b.charAt(d));f&&!e?c.push("*"+b.charCodeAt(d)+
"."):c.push(b.charAt(d))}return c.join("")}function d(b){return b.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")}function f(b){for(var a={},c="",d=0;d<b.length;d++){var f=b.charAt(d);switch(f){case "=":case "&":case "?":case "/":case "*":case ",":case ":":isNaN(a[c])&&(a[c]=b.split(c).length-1);c="";break;default:c+=f}}b=[];for(var e in a)a.hasOwnProperty(e)&&(c=a[e],c>=p&&e.length>=r&&b.push([e,c]));return b=b.sort(function(b,a){return b[0].length===a[0].length?0:a[0].length>b[0].length?1:-1})}var m=
taginspector.Define,g=taginspector.Cookie,h=[['","referrer":[{"url":"http://',"1-"],['","referrer":[{"url":"https://',"2-"],[',"referrer":[{"url":"http://',"3-"],[',"referrer":[{"url":"https://',"4-"],[',"sessionStartTime":',"5-"],['":{}}',"6-"],["www.google.com","7-"],["www.google.co.uk","8-"],["www.google.","9-"],['"landing":"',"Z"],['"landing":',"L"],['"time":',"A"],['"sessionStartTime":',"S"],['"pageViews":',"P"],['"sessionCount":',"B"],['"sessionLandingPage":',"E"],['"referrer":',"R"],['"url":"http://www.',
"J"],['"url":"https://www.',"M"],['"url":"',"I"],['"url":',"U"],["http://www.","W"],["https://www.","V"],["%2Fen%2Ftsuk%2F","K"],["http%3A%2F%2Fwww","F"],["http%3A%2F%2F","D"],["http://","H"],["https://","X"],['""',"O"],['",',"Y"]],l=a(h);m.clazz("taginspector.datapulse.compression.Encoder",b);b.prototype.encode=function(b,a){for(var c=b.replace(/\*/g,"**"),g=0;g<this._regexDefs.length;g++)var h=this._regexDefs[g],c=c.replace(h[0],h[1]);for(var c=c.replace(/;/g,"*-"),c=c.replace(/&/g,"*."),c=c.replace(/\\/g,
"*/"),c=c.replace(/=/g,"*+"),c=c.replace(/\n/g,"*N"),c=c.replace(/ /g,"*_"),c=c.replace(/\t/g,"*T"),c=c.replace(/,/g,"*C"),c=c.replace(/"/g,"*Q"),g=f(c),h=c.replace(/\$/g,"$$$"),m=[],l=0,p=0;l<g.length;l++){var r=new RegExp(d(g[l][0]),"g"),r=h.replace(r,"$"+p+"-");r!==h&&(m.push(g[l][0]),p++,h=r)}g=[h,m];h=g[1];(m=0<h.length)&&(c=g[0]);c=a?e(c,a):e(c);return m?"Y"+h.join("*")+"?"+c:"N"+c};var r=4,p=2;b.prototype.decode=function(b){var a=null;if("N"===b.charAt(0))b=b.substring(1);else if("Y"===b.charAt(0)){var d=
b.indexOf("?");if(0<=d&&(a=b.substring(1,d),a=a.split("*"),b=b.substring(d+1),a&&0!==a.length&&b)){for(var d="",f=!1,g=!1,e="",h=0;h<b.length;h++){var m=b.charAt(h);"$"===m||f||g?f||g?(f=!1,"$"===m?d+="$":isNaN(+("-"+m))?g?(d=a&&"-"===m&&a[+e]?d+a[+e]:d+("$"+e+m),e="",g=!1):d+="$"+m:(g=!0,e+=m)):f=!0:d+=m}e&&(d+="$"+e);f&&(d+="$");b=d}}a="";f=d=!1;g="";for(e=0;e<b.length;e++)h=b.charAt(e),"*"===h||d||f?d||f?(d=!1,isNaN(+("-"+h))?f?(a="."===h?a+String.fromCharCode(+g):"-"===h&&c(g+"-",this._defs)?
a+c(g+"-",this._defs):a+("*"+g+h),g="",f=!1):"*"===h?a+="*":"-"===h?a+=";":"/"===h?a+="\\":"."===h?a+="&":"+"===h?a+="=":"N"===h?a+="\n":"_"===h?a+=" ":"T"===h?a+="\t":"C"===h?a+=",":"Q"===h?a+='"':null!==c(h,this._defs)?(h=c(h,this._defs),a+=h):a+="*"+h:(g+=h,f=!0)):d=!0:a+=h;g&&(a+="*"+g);d&&(a+="*");return a}})();
(function(){function a(b){this.testBinary=!1;this.binSupported=e;b&&(this.compressor=new taginspector.compression.Compressor,this.encoder=new taginspector.datapulse.compression.Encoder({}),void 0!==b.binSupported&&(this.binSupported=!!b.binSupported))}var c=taginspector.Define,b=taginspector.Cookie;c.global();var e=!1;c.clazz("taginspector.datapulse.compression.CookieCompressor",a);a.prototype.compress=function(a,c){if("string"!==typeof a||""===a)return a;var e=this.encoder.encode(a),g;if(this.binSupported||
this.testBinary){g=this.compressor.compress(e);g='"B'+this.encoder.encode(g,128)+'"';b.set("__qtag_test_bin__",g);var h=b.get("__qtag_test_bin__");b.rm("__qtag_test_bin__");h&&h!==g&&(g=null)}h=this.encoder.encode(this.compressor.compressAnsi(e));e=!c&&e.length<=h.length?'"E'+e+'"':'"C'+h+'"';return g&&g.length<e.length?g:e};a.prototype.decompress=function(b){if("string"!==typeof b||""===b)return b;'"'===b.charAt(0)&&(b=b.substring(1,b.length-1));var a=b.charAt(0);b=b.substring(1);switch(a){case "E":return this.encoder.decode(b);
case "C":return b=this.compressor.decompressAnsi(this.encoder.decode(b)),this.encoder.decode(b);case "B":return b=this.compressor.decompress(this.encoder.decode(b)),this.encoder.decode(b);default:throw"This code is not supported! Code: "+a;}}})();
(function(){var a=taginspector.Cookie,c=taginspector.datapulse.Utils,b=function(){};c.clazz("taginspector.datapulse.Session",b);var e=new taginspector.datapulse.compression.CookieCompressor({});b.readCompressedCookie=function(b){b=a.get(b);return e.decompress(b)};b.setupSession=function(d){var f,m,g,h,l;f={};l="tm_"+d.containerId;var r="x_tm_"+d.containerId;g=a.get(l,!0);var p=!!g;null===g&&(g=a.get(r),g=e.decompress(g));if(g)try{g=JSON.parse(g)}catch(q){g={sc:0,sessionCount:0,pageViews:0,sessionStartTime:0,
referrer:[],sessionLandingPage:"",__v:{}}}else g={sc:0,sessionCount:0,pageViews:0,sessionStartTime:0,referrer:[],sessionLandingPage:"",__v:{}};m=(new Date).getTime();f.sessionCount!==parseInt(g.sc,10)?(g.sessionStartTime=m,g.sc=f.sessionCount,g.sessionCount+=1,g.referrer.push({url:b.getReferrer(),landing:c.getUrl().substring(0,300),time:m}),g.sessionLandingPage=c.getUrl().substring(0,300)):b.isReferrerDifferent()&&!b.referrerIsSameAsPrevious(g.referrer,m,18E5)&&(g.referrer.push({url:b.getReferrer(),
landing:c.getUrl().substring(0,300),time:m}),g.sessionLandingPage=c.getUrl().substring(0,300),g.sessionStartTime=m,g.sessionCount+=1);f.sessionCount=g.sessionCount;f.sessionStartTime=g.sessionStartTime;f.pageStartTime=m;g.pageViews+=1;f.pageViews=g.pageViews;f.sessionLandingPage=g.sessionLandingPage;f.referrer=g.referrer;5<f.referrer.length&&f.referrer.splice(2,f.referrer.length-5);h=JSON.stringify(g);for(m=0;e.compress(h).length>d.maxCookieLength&&5>m;)3<=g.referrer.length?g.referrer.splice(2,1):
2===g.referrer.length?g.referrer=[g.referrer[0]]:1===g.referrer.length&&(g.referrer=[]),h=JSON.stringify(g),m+=1;f.referrer=g.referrer;p&&a.rm(l);l=e.compress(h);a.rm(r);a.set(r,l,365,d.cookieDomain);f.setVariable=function(b,c,f){g.__v[b]=[c,f?f:0];b=e.compress(JSON.stringify(g));a.set(r,b,365,d.cookieDomain)};f.getCookie=function(b,c){var d=a.get(b);if(d&&(c||0===b.indexOf("x_")))try{d=e.decompress(d)}catch(f){}else d=a.decode(d);return d};f.getVariable=function(b){var a;if(b=g.__v[b])if(a=b[1],
0===a||a>(new Date).getTime())return b[0];return null};f.on=function(b,a,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener&&a.addEventListener(b,c,!1)};f.getTagCookie=function(){return b.readCompressedCookie(r)};return b.lastSession=f};b.referrerIsSameAsPrevious=function(a,f,e){var g,h;return 0<a.length?(g=b.getReferrer(),h=c.getUrl().substring(0,300),a=a[a.length-1],a.url===g&&a.landing===h&&a.time+e>f):!1};b.isReferrerDifferent=function(){var a,c;c=b.getReferrer();a=c.indexOf("://");if(-1===
a)return!0;try{return 0!==c.substring(a+3).indexOf(b.getDomain())?!0:!1}catch(e){return!0}};b.getReferrer=function(){return document.referrer?document.referrer.substring(0,300):"direct"};b.getDomain=function(){return document.location.host}})();
(function(){function a(a){this.config={siteID:"",pixelHost:"",tagDefinitions:[]};this.session=null;if(a)for(var b in a)a.hasOwnProperty(b)&&(this.config[b]=a[b]);this.pixelHost=this.config.pixelHost;this.siteID=this.config.siteID;this.tagDefinitions=this.config.tagDefinitions;this.startTime=Date.now();this.resourceCounter=this.offsetTime=0;this.pageId="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(b){var a=16*Math.random()|0;return("x"==b?a:a&3|8).toString(16)});this.pendingRequests=
[];this.currentlySendingData=!1;this.identifiedRequests={}}taginspector.datapulse.Utils.clazz("taginspector.datapulse.DataCollector",a);a.prototype.timeOnPage=function(){return performance.now()-this.offsetTime};a.prototype.adjustTimeForOffset=function(a){return!1==isNaN(a)?(fts=parseFloat(a).toFixed(2),fts=parseFloat(a),fts-=this.offsetTime,0>fts&&(fts=0),fts.toString()):a};a.prototype.getPageCurrentTime=function(){return Date.now()};a.prototype.getPageStartTime=function(){return this.startTime};
a.prototype.isBeaconSupported=function(){return"sendBeacon"in navigator?!0:!1};a.prototype.getMaxBodySize=function(){isSendBeaconRequest=this.isBeaconSupported();return 6E3};a.prototype.createRequestBody=function(){for(var a={requestList:[]},b=0,e=this.getMaxBodySize(),d=0;0<this.pendingRequests.length;){var f=this.pendingRequests[0];if(void 0!=f||null!=f)if(b+=encodeURIComponent(f).length,b>e&&0!=d)break;else a.requestList.push(this.pendingRequests.shift()),d+=1;else this.pendingRequests.shift()}return a};
a.prototype.createPixelRequest=function(a){reqPixel=new Image;reqPixel.src=this.pixelHost+"?"+a};a.prototype.createAjaxPostRequest=function(a){XMLHttpRequest.prototype.sendAsBinary||(XMLHttpRequest.prototype.sendAsBinary=function(b){for(var a=b.length,c=new Uint8Array(a),e=0;e<a;e++)c[e]=b.charCodeAt(e)&255;this.send(c)});var b=new XMLHttpRequest;b.open("POST",this.pixelHost,!0);var e="----"+Date.now().toString(16);b.setRequestHeader("Content-Type","multipart/form-data; boundary="+e);b.sendAsBinary("--"+
e+'\r\nContent-Disposition: form-data; name="beaconreq"\r\n\r\n'+a+"\r\n--"+e+"--\r\n")};a.prototype.createSendBeaconRequest=function(a){var b=new FormData;b.append("beaconreq",a);result=navigator.sendBeacon(this.pixelHost,b);!1==result&&this.createAjaxPostRequest(a)};a.prototype.b64EncodeUnicode=function(a){return btoa(encodeURIComponent(a).replace(/%([0-9A-F]{2})/g,function(b,a){return String.fromCharCode("0x"+a)}))};a.prototype.identifyRequest=function(a){for(var b=0;b<this.tagDefinitions.length;b++){var e=
this.tagDefinitions[b];if(!0==e.regex.test(a.name)){!1==this.identifiedRequests.hasOwnProperty(e.id)&&(this.identifiedRequests[e.id]=[]);"384"==e.id?(!1==this.identifiedRequests.hasOwnProperty("291")&&(this.identifiedRequests["291"]=[]),this.identifiedRequests["291"].push(a)):"291"==e.id&&(!1==this.identifiedRequests.hasOwnProperty("384")&&(this.identifiedRequests["384"]=[]),this.identifiedRequests["384"].push(a));this.identifiedRequests[e.id].push(a);break}}};a.prototype.resetIdentifiedRequests=
function(){try{currentTs=performance.now();newIdentifiedRequests={};for(var a in this.identifiedRequests)if(this.identifiedRequests.hasOwnProperty(a))for(z=0;z<this.identifiedRequests[a].length;z++)foundTag=this.identifiedRequests[a][z],350>Math.abs(currentTs-foundTag.startTime)&&(!1==newIdentifiedRequests.hasOwnProperty(a)&&(newIdentifiedRequests[a]=[]),newIdentifiedRequests[a].push(foundTag));this.identifiedRequests=newIdentifiedRequests}catch(b){console.log(b.message)}};a.prototype.sendRequests=
function(a){if(!1==tiMonitor.dataCollector.currentlySendingData){tiMonitor.dataCollector.currentlySendingData=!0;for(base_req_data="pid="+this.pageId+"&sid="+this.siteID+"&purl="+encodeURIComponent(tiMonitor.sendData.currentUrl)+"&pst="+encodeURIComponent(this.getPageStartTime())+"&pct="+encodeURIComponent(this.getPageCurrentTime());0<this.pendingRequests.length;)requestBody=this.createRequestBody(),encodedRequestString=encodeURIComponent(this.b64EncodeUnicode(JSON.stringify(requestBody))),req_data=
base_req_data+"&taginfo="+encodedRequestString+"&b64=1",!0!=this.isBeaconSupported()||!0!=a&&!0!=tiMonitor.sendData.windowUnloadEvent?this.createAjaxPostRequest(req_data):this.createSendBeaconRequest(req_data);tiMonitor.dataCollector.currentlySendingData=!1}};a.prototype.isValidResourceStartTime=function(a){var b=!0;try{if(a=parseFloat(a),this.timeOnPage()<a||36E5<a)b=!1}catch(e){console.log(e.message)}return b};a.prototype.queueRequest=function(a,b){if("validationerror"!=b&&"validationsuccess"!=
b||!("complete"!=document.readyState||3E3>performance.now()-tiMonitor.dataCollector.offsetTime)||"DOM Load"==a.triggerTiming){if("resource"==b)if(!0==this.isValidResourceStartTime(this.adjustTimeForOffset(a.startTime)))reqName=a.name,req="rt="+b+"&ce="+encodeURIComponent(this.adjustTimeForOffset(a.connectEnd))+"&cs="+encodeURIComponent(this.adjustTimeForOffset(a.connectStart))+"&dle="+encodeURIComponent(this.adjustTimeForOffset(a.domainLookupEnd))+"&dls="+encodeURIComponent(this.adjustTimeForOffset(a.domainLookupStart))+
"&d="+encodeURIComponent(a.duration.toFixed(2))+"&et="+encodeURIComponent(a.entryType)+"&fs="+encodeURIComponent(this.adjustTimeForOffset(a.fetchStart))+"&it="+encodeURIComponent(a.initiatorType)+"&n="+encodeURIComponent(a.name)+"&rde="+encodeURIComponent(this.adjustTimeForOffset(a.redirectEnd))+"&rds="+encodeURIComponent(this.adjustTimeForOffset(a.redirectStart))+"&reqs="+encodeURIComponent(this.adjustTimeForOffset(a.requestStart))+"&rse="+encodeURIComponent(this.adjustTimeForOffset(a.responseEnd))+
"&rss="+encodeURIComponent(this.adjustTimeForOffset(a.responseStart))+"&scc=&st="+encodeURIComponent(this.adjustTimeForOffset(a.startTime))+"&sz="+encodeURIComponent(this.adjustTimeForOffset(a.decodedBodySize)),this.identifyRequest(a),this.resourceCounter+=1;else return;else if("pageload"==b){dom_complete=dom_content_load=dom_interactive=page_size="";try{var e=performance.timing;0!=e.domInteractive&&(dom_interactive=e.domInteractive-e.fetchStart);0!=e.domContentLoadedEventEnd&&(dom_content_load=e.domContentLoadedEventEnd-
e.fetchStart);0!=e.domComplete&&(dom_complete=e.domComplete-e.fetchStart)}catch(d){console.log(d.message)}conn_type=conn_downlink=conn_roundtrip=conn_downlinkMax=conn_effType="";req="rt="+b+"&ref=&top="+encodeURIComponent(this.timeOnPage())+"&domint="+encodeURIComponent(dom_interactive)+"&domcl="+encodeURIComponent(dom_content_load)+"&domcom="+encodeURIComponent(dom_complete)+"&condl="+encodeURIComponent(conn_downlink)+"&conrt="+encodeURIComponent(conn_roundtrip)+"&coneff="+encodeURIComponent(conn_effType)+
"&psz="+ +encodeURIComponent(page_size)}else"validationerror"==b&&!1==tiMonitor.sendData.preventFiringValidationRules?req="rt="+b+"&fr="+encodeURIComponent(a.failedRule)+"&rv="+encodeURIComponent(a.ruleVersion)+"&pm="+encodeURIComponent(a.pageMacros)+"&fc="+encodeURIComponent(a.failedConditions)+"&vt="+encodeURIComponent(a.validationTime):"validationsuccess"==b&&!1==tiMonitor.sendData.preventFiringValidationRules?req="rt="+b+"&pr="+encodeURIComponent(a.passedRule)+"&rv="+encodeURIComponent(a.ruleVersion)+
"&vt="+encodeURIComponent(a.validationTime):"jserror"==b?req="rt="+b+"&msg="+a.message:"pageBeforeUnload"==b&&(e=performance.timing,dom_interactive=e.domInteractive-e.fetchStart,dom_content_load=e.domContentLoadedEventEnd-e.fetchStart,dom_complete=e.domComplete-e.fetchStart,dom_content_load_end=e.domContentLoadedEventEnd,response_end=e.responseEnd,navigation_start=e.navigationStart,firstContentfulPaint=first_paint=timeToFirstPaint=void 0,window.performance&&(e=window.performance.getEntriesByType("paint"),
void 0!=e&&0<e.length&&(timeToFirstPaint=parseInt(1E3*e[0].startTime),first_paint=navigation_start+timeToFirstPaint,firstContentfulPaint=parseInt(1E3*e[1].startTime))),req="rt="+b+"&ref=&top="+encodeURIComponent(performance.now())+"&domint="+encodeURIComponent(dom_interactive)+"&domcl="+encodeURIComponent(dom_content_load)+"&domcom="+encodeURIComponent(dom_complete)+"&domcle="+encodeURIComponent(dom_content_load_end)+"&rse="+encodeURIComponent(response_end)+"&navs="+encodeURIComponent(navigation_start)+
"&fpt="+encodeURIComponent(first_paint)+"&tfpt="+encodeURIComponent(timeToFirstPaint)+"&fcpt="+encodeURIComponent(firstContentfulPaint));0<this.resourceCounter&&(this.pendingRequests.push(req),"validationerror"!=b&&"validationsuccess"!=b||this.sendRequests(!0))}}})();


tiMonitor.dataCollector = new taginspector.datapulse.DataCollector({siteID:"e71c9a38e93911eb99eb0a93f03eb5ed", pixelHost:"https://collect.analyze.ly", tagDefinitions: [{id: '1', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google-analytics\\.com(\\/r)?\\/__utm\\.gif)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google-analytics\\.com\\/u\\/ga\\.js)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google-analytics\\.com\\/p\\/__utm\\.gif)|(\\/u\\/ga_debug\\.js)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google-analytics\\.com\\/ga\\.js)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google-analytics\\.com\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google\\.com\\/js\\/gweb\\/analytics\\/autotrack\\.js)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google\\.com\\/js\\/gweb\\/analytics\\/doubletrack\\.js)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google-analytics\\.com\\/ga_exp\\.js)|((^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google-analytics\\.com\\/analytics\\.js|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google-analytics\\.com\\/plugins\\/ua\\/))|((^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google-analytics\\.com(\\/[a-z])?\\/collect|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)stats\\.g\\.doubleclick\\.net(\\/[a-z])?\\/collect))|((^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)stats\\.g\\.doubleclick\\.net\\/dc\\.js|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)stats\\.g\\.doubleclick\\.net\\/__utm\\.gif))', 'i')},{id: '2527', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)aarp\\.go2cloud.org\\/)', 'i')},{id: '2526', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)adobedtm\\.com([\\/a-zA-Z0-9]*)?\\/launch)', 'i')},{id: '59', regex: new RegExp('((^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)offermatica\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)tt\\.omtrdc\\.net\\/))|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)d4isvpgrs7dwu\\.cloudfront\\.net\\/adobetarget\\/)|(\\/mbox\\.js)|(\\/m[0-9]\\/(.*)\\/mbox\\/)', 'i')},{id: '85', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)leadback\\.advertising\\.com\\/)', 'i')},{id: '139', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)atdmt\\.com\\/mstag\\/site\\/(.*)\\/(mstag\\.js|analytics\\.html))', 'i')},{id: '273', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)js\\.stormiq\\.com\\/[0-9]*\\.ct\\.js)', 'i')},{id: '740', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)constantcontact\\.com\\/(.*)\\/safe_subscribe_logo\\.gif)', 'i')},{id: '882', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google-analytics\\.com\\/urchin\\.js)', 'i')},{id: '1385', regex: new RegExp('((^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)s3\\.amazonaws\\.com\\/searchdiscovery-satellite-production\\/|\\/satellitelib([a-zA-Z0-9-]*)\\.js)|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)adobedtm\\.com([\\/a-zA-Z0-9]*)?\\/satelliteLib)', 'i')},{id: '1420', regex: new RegExp('(^http(s)?:\\/\\/ct\\.pinterest\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)pinimg.com\\/ct\\/)', 'i')},{id: '1436', regex: new RegExp('((^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)snap\\.licdn\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)(dc|imp2|px).ads\\.linkedin\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)bizographics.com\\/insight\\.(min\\.)?js))', 'i')},{id: '1473', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)yimg\\.com\\/wi\\/ytc\\.js|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)sp\\.analytics\\.yahoo\\.com\\/)', 'i')},{id: '2532', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)(demdex|omtrdc)\\.net\\/id\\?d_visid_ver)', 'i')},{id: '2547', regex: new RegExp('(gtag\\/js\\?id\\=(G|g)-)|((\\/g\\/collect\\?v=2|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)(google-analytics|google)\\.com(\\/[a-z])?\\/collect\\?v=2|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)stats\\.g\\.doubleclick\\.net(\\/[a-z])?\\/collect\\?v=2))', 'i')},{id: '294', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)doubleclick\\.net\\/activity)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)fls\\.doubleclick\\.net\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)googletagmanager\\.com\\/.*id=dc-)|(gtag\\/js\\?id\\=(DC|dc)-)', 'i')},{id: '401', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google-analytics\\.com\\/siteopt\\.js)', 'i')},{id: '747', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)liveagentforsalesforce\\.com\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)salesforceliveagent\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)force\\.com\\/(.*)\\/(ChatInvite|LiveAgent))', 'i')},{id: '1406', regex: new RegExp('((^http(s)?:\\/\\/connect\\.facebook\\.net\\/(.*)\\/fbevents\\.js|^http(s)?:\\/\\/www\\.facebook\\.com\\/tr(\\/|\\?)|http(s)?:\\/\\/connect\\.facebook\\.net\\/signals\\/(config\\/|plugins\\/identity.js)|^http(s)?:\\/\\/facebook\\.com\\/(platform|common)\\/cavalry_endpoint\\.php))', 'i')},{id: '1480', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)googletagmanager\\.com\\/gtag\\/js)', 'i')},{id: '1393', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)platform\\.twitter\\.com\\/oct\\.js|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)ads-twitter\\.com\\/uwt\\.js|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)t\\.co\\/i\\/adsct|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)analytics.twitter.com\\/i\\/adsct)', 'i')},{id: '1450', regex: new RegExp('((^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google-analytics\\.com\\/gtm\\/js|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)googletagmanager\\.com\\/a\\?|googleoptimize\\.com))', 'i')},{id: '396', regex: new RegExp('((^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)googletagmanager\\.com\\/|\\?id=(gtm|GTM)-([a-zA-Z0-9]{4,10})))', 'i')},{id: '1397', regex: new RegExp('(^http(s)?:\\/\\/(.*)fls\\.doubleclick\\.net\\/(.*)type=visua0)', 'i')},{id: '2548', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)(googletagservices|doubleclick)\\.(com|net)(\\/tag\\/js\\/gpt\\.js|\\/gpt\\/|\\/gampad\\/ads)|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)tpc\\.googlesyndication\\.com\\/safeframe\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)googlesyndication\\.com\\/pagead\\/show_companion_ad\\.js)', 'i')},{id: '2549', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)googleapis\\.com\\/adexchangebuyer\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)adexchangebuyer\\.googleapis\\.com\\/)', 'i')},{id: '2550', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)cm\\.g\\.doubleclick\\.net\\/)', 'i')},{id: '291', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)googleads\\.g\\.doubleclick\\.net\\/pagead\\/viewthroughconversion)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google\\.com\\/ads\\/user-lists\\/)', 'i')},{id: '292', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)gan\\.doubleclick\\.net\\/)', 'i')},{id: '1458', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)bid\\.g\\.doubleclick\\.net\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)googleads\\.g\\.doubleclick\\.net\\/dbm\\/ad)', 'i')},{id: '296', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)adx\\.g\\.doubleclick\\.net\\/)', 'i')},{id: '390', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)survey\\.g\\.doubleclick\\.net\\/)', 'i')},{id: '1398', regex: new RegExp('(^http(s)?:\\/\\/(ad\\.doubleclick\\.net\\/(.*)visualiqinc(.*)|((.*)\\.|)myvisualiq\\.net\\/))', 'i')},{id: '295', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)www\\.googletagservices\\.com\\/tag\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)ad-ace\\.doubleclick\\.net\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)ad\\.doubleclick\\.net\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)ad\\.[a-z]*\\.doubleclick\\.net\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)ad-apac\\.doubleclick\\.net\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)ad-emea\\.doubleclick\\.net\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)pubads\\.g\\.doubleclick\\.net\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)m\\.doubleclick\\.net\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)ad-g\\.doubleclick\\.net\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)2mdn\\.net\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)static\\.doubleclick\\.net\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)iv\\.doubleclick\\.net\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)cm\\.g\\.doubleclick\\.net\\/)|(^donotmatch$)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)g\\.doubleclick\\.net\\/)', 'i')},{id: '1312', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)ads\\.yahoo\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)analytics\\.yahoo\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)advertising\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)adsonar\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)tacoda\\.net\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)adtechus\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)adtech\\.de\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)atwola\\.com\\/)', 'i')},{id: '1427', regex: new RegExp('((^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)bluecore\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)triggeredmail\\.appspot\\.com\\/))', 'i')},{id: '2205', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)go2cloud\\.org\\/)', 'i')},{id: '56', regex: new RegExp('((^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)stats\\.adobe\\.com\\/|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)hitbox\\.com|\\/hbx\\.js)))|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)omniture\\.com\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)omniture-static\\.com\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)om\\.cbsi\\.com\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)2o7\\.net\\/)|(\\/s_code[\\.09a-zA-Z_-]*\\.js|omniunih\\.js|\\/omniunih\\.js)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)omtrdc\\.net\\/)|(\\/b\\/ss\\/[\\.a-zA-Z0-9,_-]*\\/[0-9]*\\/(h\\.[0-9]{1,2}|js-[0-9])?)', 'i')},{id: '255', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)criteo\\.com\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)criteo\\.net\\/)', 'i')},{id: '384', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)googleadservices\\.com\\/pagead\\/conversion\\.js)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)googleadservices\\.com\\/pagead\\/conversion\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)googleadservices\\.com\\/pagead\\/conversion_async\\.js)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)googletagmanager\\.com\\/.*id=aw-)', 'i')},{id: '2617', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)analytics\\.tiktok\\.com\\/)', 'i')}]});
tiMonitor.sendData = {
	pageId: 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);return v.toString(16);}),
	sentUnload: false,
	currentlyIterating: false,
	pageBeingSampled: false,
	externalTagStartTimes: [],
	internalTagStartTimes: [],
	currentUrl: window.location.href,
	minimumBeforeUnloadRestriction: 5,
	pageTitle: '',
	sampleRate: 8,
	sampleBlackList: new RegExp('.*'),
	sampleBlackListEnabled: false,
	getRandomInt: function() {
		return Math.floor(Math.random() * (this.sampleRate - 1 + 1)) + 1;
	},
	shouldSamplePage: function(){
		if(this.sampleBlackListEnabled == true){
			if(this.sampleBlackList.test(this.currentUrl) == true){
				return false;
			}
		}
		if(1 == tiMonitor.sendData.getRandomInt()){
			return false;
		}else{
			tiMonitor.sendData.pageBeingSampled = true;
			return true;
		}
	},
	createFakeReq: function(reqUrl){
		fakeHit = {
			connectEnd: 0,
			connectStart: 0,
			decodedBodySize: 0,
			domainLookupEnd: 0,
			domainLookupStart: 0,
			duration: 0,
			entryType: "resource",
			fetchStart: 0,
			initiatorType: "script",
			name: "",
			redirectEnd: 0,
			redirectStart: 0,
			requestStart: 0,
			responseEnd: 0,
			responseStart: 0,
			startTime: 0
		};
		fetchStart = performance.now()
		fakeDuration = 10.47999999905005;
		
		fakeHit.fetchStart = fetchStart;
		fakeHit.startTime = fetchStart;
		fakeHit.duration = fakeDuration;
		fakeHit.responseEnd = fetchStart + fakeDuration;
		fakeHit.name = reqUrl;
		tiMonitor.dataCollector.queueRequest(fakeHit, "resource");
		
	},
	isSinglePageApp: function(){
		if(window.angular){
			return true;
		}else{
			return false;
		}
	},
	isPerformanceObserverSupported: function(){
		if(window.PerformanceObserver){
			return true;
		}else{
			return false;
		}
	},
	isInIframe: function(){
		try {
			return window.self !== window.top;
		} catch (e) {
			return true;
		}
	},
	isPerformanceObserverInitialized: false,
	performanceObserverCallback: function(list){

		var perfEntries = list.getEntries();
		for (var i = 0; i < perfEntries.length; i++){
			var req = perfEntries[i];
			if(tiMonitor.sendData.isValidRequest(req) == true){
				tiMonitor.sendData.externalTagStartTimes.push(tiMonitor.sendData.getUniqueReqKey(req));
				tiMonitor.dataCollector.queueRequest(req, "resource");
			}else{
				tiMonitor.sendData.internalTagStartTimes.push(tiMonitor.sendData.getUniqueReqKey(req));
			}
		}

		tiMonitor.sendData.isPerformanceObserverInitialized=true;
	},
	suportedBrowser: function(){
		var isSupported = true;
		ua = navigator.userAgent;
		var isNativeAndroid = ((ua.indexOf('Mozilla/5.0') > -1 && ua.indexOf('Android ') > -1 && ua.indexOf('AppleWebKit') > -1) && (ua.indexOf('Version') > -1));
		var isIE = ((ua.indexOf('Trident') > -1) || (ua.indexOf('MSIE') > -1));
		var perfMonSupport = false;
		var isEventSupported = false;
		if(typeof Event == "function"){
			isEventSupported = true;
		}
		if ('performance' in window) { 
			if ('getEntries' in performance) {
				perfMonSupport = true;
			}
		}
		if(isNativeAndroid == true || perfMonSupport == false || isIE == true || isEventSupported == false){
			isSupported = false;
		}
		return isSupported;
	},
	blackList: new RegExp('http(s)?:\/\/(col\.eum-appdynamics\.com|((.*)\.|)mouseflow.com|akstat.io)'),
	lastPerformanceObjLength: 0,
	areTriggersActivated: false,
	isDuplicateRequest: function(req){
		lt = tiMonitor.sendData.getUniqueReqKey(req);
		return !(tiMonitor.sendData.externalTagStartTimes.indexOf(lt) == -1 && tiMonitor.sendData.internalTagStartTimes.indexOf(lt) == -1);
	},
	isBlacklistedRequest: function(req){
		return this.blackList.test(req.name) == true;
	},
	isExternalRequest: function(req){
		externalReq = true;
		windowOrigin = window.location.protocol + '//' + window.location.hostname;
		if(req.name.length >= windowOrigin.length){
			truncReqName = (req.name).substr(0, windowOrigin.length);
			externalReq = (truncReqName).indexOf(windowOrigin) == -1;
		}
		return externalReq;
	},
	isTIRequest: function(req){
		return !((req.name).indexOf(tiMonitor.dataCollector.pixelHost) == -1);
	},
	isValidRequest:function(req){
		validReq = false;

		if(this.isTIRequest(req) == false && this.isExternalRequest(req) == true && this.isBlacklistedRequest(req) == false){
			validReq = true;
		}
		return validReq;
	},
	getUniqueReqKey:function(req){
		return (req.startTime).toString() + "-" + (req.responseEnd).toString();
	},
	isBufferFull:function(){
		bufferFull = false;
		if(window.performance.getEntriesByType("resource").length == 150 || window.performance.getEntriesByType("resource").length == 250 || window.performance.getEntriesByType("resource").length == 400){
			bufferFull = true;
		}
		return bufferFull;
	},
	iteratePerformance: function(){
		if(this.currentlyIterating == false){
			this.currentlyIterating = true;

			var pe = performance.getEntriesByType("resource");
			if(this.lastPerformanceObjLength != pe.length){
				this.lastPerformanceObjLength = pe.length;
				for (var i = 0; i < pe.length; i++) {
					var req = pe[i];
					if(this.isDuplicateRequest(req) == false){
						if(tiMonitor.sendData.isValidRequest(req) == true){
							tiMonitor.sendData.externalTagStartTimes.push(tiMonitor.sendData.getUniqueReqKey(req));
							tiMonitor.dataCollector.queueRequest(req, "resource");
						}else{
							tiMonitor.sendData.internalTagStartTimes.push(tiMonitor.sendData.getUniqueReqKey(req));
						}
					}
				}
			}
			if(this.areTriggersActivated == false){
				this.areTriggersActivated = true;
				tiMonitor.validationRules(true);
			}
			this.currentlyIterating = false;
		}
	},
	domLoadCompleteEvent: (document.readyState == 'complete'),
	windowUnloadEvent: false,
	preventFiringValidationRules: false,
	pageVariableFiredEvents: {},
	pageComplete: function(){
		if(tiMonitor.sendData.sentUnload == false && tiMonitor.sendData.pageBeingSampled == false){
			tiMonitor.sendData.sentUnload = true;
			tiMonitor.dataCollector.queueRequest(null, "pageload");
			this.iteratePerformance();
			this.fire();
		}
	},
	waitForDomLoad: function(){
		if (document.readyState == 'complete' && tiMonitor.sendData.sentUnload == false){
			tiMonitor.sendData.pageComplete();
			return true;
		}else{
			return false;
		}
	},
	fire: function(){
		tiMonitor.dataCollector.sendRequests(false);
	},
	clearBuffer: function(){
		if(window.performance.clearResourceTimings){
			startBufferLength = window.performance.getEntriesByType("resource").length;
			tiMonitor.sendData.iteratePerformance();
			window.performance.clearResourceTimings();
			endBufferLength = window.performance.getEntriesByType("resource").length;

			if (startBufferLength == endBufferLength){
				this.preventFiringValidationRules = true;
			}
		}
	},
	handleUnload: function(){
		tiMonitor.windowUnloadEvent=true;
		tiMonitor.sendData.pageComplete();

		if(tiMonitor.sendData.isPerformanceObserverSupported() == false){
			tiMonitor.sendData.iteratePerformance();
		}
		tiMonitor.sendData.fire();
	},
	fullBufferEventListener: function(){
		if("clearResourceTimings" in window.performance){
			if("addEventListener" in window.performance){
				window.performance.addEventListener("resourcetimingbufferfull", function(){
					tiMonitor.sendData.clearBuffer();
				});
			}else{
				if("onresourcetimingbufferfull" in window.performance){
					window.performance.onresourcetimingbufferfull = function(event) {
						tiMonitor.sendData.clearBuffer();
					};
				}
			}
		}
	},
	initialized: false
};

tiMonitor.ruleVariableCache = {
	spaRulesFiring: false,
	_cachedVariableValues: {},
	censor: function(n) {var o = 0;return function(r, t) {if (0 !== o && "object" == typeof n && "object" == typeof t && n == t) {return "[Circular]"}else if (o >= 500) {return "[Unknown]"}else {return (++o, t)}}},
	updateCache: function(maxCacheTime){
		globalVars = tiMonitor.getGlobalJsVars();
		for(var p=0; p<globalVars.length; p++){
			this.getVariableValue(globalVars[p], maxCacheTime)
		}
	},
	getVariableValue: function(variableName, maxCacheTime){
		retVal = '';
		if(this._cachedVariableValues.hasOwnProperty(variableName)){
			if(this._cachedVariableValues[variableName]["cacheTime"] > performance.now() || this.spaRulesFiring == true){
				this._cachedVariableValues[variableName]["cacheTime"] = this._cachedVariableValues[variableName]["cacheTime"] + 30;
				return this._cachedVariableValues[variableName]["val"];
			}
		}
		try{
			var tmpVarVal = eval(variableName);
			if(typeof tmpVarVal === 'object'){
				try{
					if(tmpVarVal.hasOwnProperty('length')){
						tmpArray = [];
						objStart = tiMonitor.spaRuleObjectLengthTracker.getLastValidatedObjectLength(tmpVarVal, variableName);
						for(z=objStart; z < tmpVarVal.length; z++){
							try{
								tmpArray.push(JSON.stringify(tmpVarVal[z]));
							}catch(err){ }
						}
						retVal = tmpArray.toString();
					}else{
						retVal = JSON.stringify(tmpVarVal);
					}
				}catch(err) {
					retVal = JSON.stringify(tmpVarVal, this.censor(tmpVarVal));
					console.log(err.message);
				}
			}else if(typeof tmpVarVal !== 'undefined'){
				retVal = tmpVarVal;
			}
			this._cachedVariableValues[variableName] = {"val": retVal, "cacheTime": performance.now() + maxCacheTime}

		} catch(err) {
			console.log(err.message);
		}
		
		return retVal;
	}
};

tiMonitor.spaRuleObjectLengthTracker = {
	spaPageCounter: 0,
	spaRuleObjectLengths: {0:{}},
	_checkIfObject: function(obj){
		return typeof(obj) == 'object';
	},
	isTrackable: function(obj){
		if(this._checkIfObject(obj)){
			return obj.hasOwnProperty("length")
		}else{
			return false;
		}
	},
	_trackObjectLength: function(obj, objName){
		if(this.isTrackable(obj)){
			objLen = obj.length;
			this.spaRuleObjectLengths[this.spaPageCounter][objName] = objLen;
		}
	},
	getLastValidatedObjectLength: function(obj, objName){
		if(this.isTrackable(obj)){
			if(this.spaRuleObjectLengths[this.spaPageCounter].hasOwnProperty(objName) == false){
				this._trackObjectLength(obj, objName);
			}

			lastValidationLength = 0;
			if(this.spaRuleObjectLengths[this.spaPageCounter - 1].hasOwnProperty(objName)){
				lastValidationLength = this.spaRuleObjectLengths[this.spaPageCounter - 1][objName]
			}
			return lastValidationLength;
		}
	},
	incrimentSpaPageview: function(){
		this.spaPageCounter = this.spaPageCounter + 1;
		this.spaRuleObjectLengths[this.spaPageCounter] = {};
	}
};

tiMonitor.getGlobalJsVars = function (){
	try {
		var tiGlobalJsVars = ['OptanonActiveGroups', 'digitalData.page.pageURL', 'digitalData.page.title', 'digitalData.page.pageName', 'digitalData.pageInfo.country', 'digitalData.pageInfo.currencyCode', 'digitalData.pageInfo.language', 'digitalData.page.category', 'digitalData.pageInfo.platform'];
		return tiGlobalJsVars;
	}
	catch(err) {
		console.log(err.message);
		jeErrorObj = {
			message: err.message
		};
		tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
		return [];
	}
};

tiMonitor.validationRules = function (){
	try {
		macro_function_814e0bc4_d9be_5eaf_994e_c7267909ba91 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('255') == true){
				returnVal = 'true';
			}
			return returnVal;
		} 
		macro_814e0bc4_d9be_5eaf_994e_c7267909ba91 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '814e0bc4_d9be_5eaf_994e_c7267909ba91', reportValue: false});
		macro_814e0bc4_d9be_5eaf_994e_c7267909ba91.setValue(macro_function_814e0bc4_d9be_5eaf_994e_c7267909ba91);
		macro_function_31dad1ae_f686_5581_8cbc_52bf9629b428 = function(){
			return tiMonitor.sendData.currentUrl;
		} 
		macro_31dad1ae_f686_5581_8cbc_52bf9629b428 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '31dad1ae_f686_5581_8cbc_52bf9629b428', reportValue: false});
		macro_31dad1ae_f686_5581_8cbc_52bf9629b428.setValue(macro_function_31dad1ae_f686_5581_8cbc_52bf9629b428);
		macro_function_cd466443_90c1_5af2_af93_88633b465248 = function(){
			return tiMonitor.ruleVariableCache.getVariableValue('OptanonActiveGroups', 100);
		} 
		macro_cd466443_90c1_5af2_af93_88633b465248 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'cd466443_90c1_5af2_af93_88633b465248', reportValue: true});
		macro_cd466443_90c1_5af2_af93_88633b465248.setValue(macro_function_cd466443_90c1_5af2_af93_88633b465248);
		macro_function_fb153011_968d_5130_8ebb_e903b10ac333 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1') == true){
				var re = new RegExp("(?:[?&])(pa=purchase)(&|$)", 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_fb153011_968d_5130_8ebb_e903b10ac333 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'fb153011_968d_5130_8ebb_e903b10ac333', reportValue: false});
		macro_fb153011_968d_5130_8ebb_e903b10ac333.setValue(macro_function_fb153011_968d_5130_8ebb_e903b10ac333);
		macro_function_8b82c2be_77ce_5128_881a_d304da1bf2e8 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1') == true){
				var re = new RegExp('ev=[0-9]+', 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_8b82c2be_77ce_5128_881a_d304da1bf2e8 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '8b82c2be_77ce_5128_881a_d304da1bf2e8', reportValue: false});
		macro_8b82c2be_77ce_5128_881a_d304da1bf2e8.setValue(macro_function_8b82c2be_77ce_5128_881a_d304da1bf2e8);
		macro_function_497c09aa_85db_5eb3_ac75_e72114f87323 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1') == true){
				var re = new RegExp('(?:[?&])(pr1qt=([^&]{1,}))', 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_497c09aa_85db_5eb3_ac75_e72114f87323 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '497c09aa_85db_5eb3_ac75_e72114f87323', reportValue: false});
		macro_497c09aa_85db_5eb3_ac75_e72114f87323.setValue(macro_function_497c09aa_85db_5eb3_ac75_e72114f87323);
		macro_function_c4148896_2a0e_522a_a4fe_c4bac3b6549e = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1') == true){
				var re = new RegExp("(?:[?&])(ea=purchase)(&|$)", 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_c4148896_2a0e_522a_a4fe_c4bac3b6549e = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'c4148896_2a0e_522a_a4fe_c4bac3b6549e', reportValue: false});
		macro_c4148896_2a0e_522a_a4fe_c4bac3b6549e.setValue(macro_function_c4148896_2a0e_522a_a4fe_c4bac3b6549e);
		macro_function_72fec5ba_a85c_5ef1_9f39_c6f8d075a8b9 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1') == true){
				var re = new RegExp('(?:[?&])(ti=([^&]{1,}))', 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_72fec5ba_a85c_5ef1_9f39_c6f8d075a8b9 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '72fec5ba_a85c_5ef1_9f39_c6f8d075a8b9', reportValue: false});
		macro_72fec5ba_a85c_5ef1_9f39_c6f8d075a8b9.setValue(macro_function_72fec5ba_a85c_5ef1_9f39_c6f8d075a8b9);
		macro_function_bcd86d23_207f_537e_8f9a_82a2faf38f09 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1') == true){
				var re = new RegExp('(?:[?&])(pr1nm=([^&]{1,}))', 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_bcd86d23_207f_537e_8f9a_82a2faf38f09 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'bcd86d23_207f_537e_8f9a_82a2faf38f09', reportValue: false});
		macro_bcd86d23_207f_537e_8f9a_82a2faf38f09.setValue(macro_function_bcd86d23_207f_537e_8f9a_82a2faf38f09);
		macro_function_d7f70b04_f89f_5af8_ba5e_b3af4cdf6a1a = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1') == true){
				var re = new RegExp('(?:[?&])(pr1id=([^&]{1,}))', 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_d7f70b04_f89f_5af8_ba5e_b3af4cdf6a1a = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'd7f70b04_f89f_5af8_ba5e_b3af4cdf6a1a', reportValue: false});
		macro_d7f70b04_f89f_5af8_ba5e_b3af4cdf6a1a.setValue(macro_function_d7f70b04_f89f_5af8_ba5e_b3af4cdf6a1a);
		macro_function_22dc7922_97c9_5d53_99a1_7cab6cf97b25 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1') == true){
				returnVal = 'true';
			}
			return returnVal;
		} 
		macro_22dc7922_97c9_5d53_99a1_7cab6cf97b25 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '22dc7922_97c9_5d53_99a1_7cab6cf97b25', reportValue: false});
		macro_22dc7922_97c9_5d53_99a1_7cab6cf97b25.setValue(macro_function_22dc7922_97c9_5d53_99a1_7cab6cf97b25);
		macro_function_2787d2a0_a369_5303_9942_3d5728e92fca = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1') == true){
				var re = new RegExp("(?:[?&])(ec=ecommerce)(&|$)", 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_2787d2a0_a369_5303_9942_3d5728e92fca = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '2787d2a0_a369_5303_9942_3d5728e92fca', reportValue: false});
		macro_2787d2a0_a369_5303_9942_3d5728e92fca.setValue(macro_function_2787d2a0_a369_5303_9942_3d5728e92fca);
		macro_function_0dbe3ea1_8091_52e1_ab69_4383d5414f81 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1') == true){
				var re = new RegExp('tr=[0-9]+', 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_0dbe3ea1_8091_52e1_ab69_4383d5414f81 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '0dbe3ea1_8091_52e1_ab69_4383d5414f81', reportValue: false});
		macro_0dbe3ea1_8091_52e1_ab69_4383d5414f81.setValue(macro_function_0dbe3ea1_8091_52e1_ab69_4383d5414f81);
		macro_function_dc909c80_6107_5a1c_95c7_db8a43711be5 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1') == true){
				var re = new RegExp('(?:[?&])(pr1pr=([^&]{1,}))', 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_dc909c80_6107_5a1c_95c7_db8a43711be5 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'dc909c80_6107_5a1c_95c7_db8a43711be5', reportValue: false});
		macro_dc909c80_6107_5a1c_95c7_db8a43711be5.setValue(macro_function_dc909c80_6107_5a1c_95c7_db8a43711be5);
		macro_function_0e967c6a_4c02_5ec5_9d55_4b3eb262e580 = function(){
			return tiMonitor.ruleVariableCache.getVariableValue('digitalData.page.pageURL', 100);
		} 
		macro_0e967c6a_4c02_5ec5_9d55_4b3eb262e580 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '0e967c6a_4c02_5ec5_9d55_4b3eb262e580', reportValue: true});
		macro_0e967c6a_4c02_5ec5_9d55_4b3eb262e580.setValue(macro_function_0e967c6a_4c02_5ec5_9d55_4b3eb262e580);
		macro_function_5aff3c21_e884_5506_bb3c_1de819ee21d8 = function(){
			return tiMonitor.ruleVariableCache.getVariableValue('digitalData.page.title', 100);
		} 
		macro_5aff3c21_e884_5506_bb3c_1de819ee21d8 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '5aff3c21_e884_5506_bb3c_1de819ee21d8', reportValue: true});
		macro_5aff3c21_e884_5506_bb3c_1de819ee21d8.setValue(macro_function_5aff3c21_e884_5506_bb3c_1de819ee21d8);
		macro_function_27c189c5_2d60_5751_a4df_dcb9e5dbe419 = function(){
			return tiMonitor.ruleVariableCache.getVariableValue('digitalData.page.pageName', 100);
		} 
		macro_27c189c5_2d60_5751_a4df_dcb9e5dbe419 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '27c189c5_2d60_5751_a4df_dcb9e5dbe419', reportValue: true});
		macro_27c189c5_2d60_5751_a4df_dcb9e5dbe419.setValue(macro_function_27c189c5_2d60_5751_a4df_dcb9e5dbe419);
		macro_function_2b54fb07_8320_5b5b_a3fc_bfcb7a9de4e4 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('56') == true){
				returnVal = 'true';
			}
			return returnVal;
		} 
		macro_2b54fb07_8320_5b5b_a3fc_bfcb7a9de4e4 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '2b54fb07_8320_5b5b_a3fc_bfcb7a9de4e4', reportValue: false});
		macro_2b54fb07_8320_5b5b_a3fc_bfcb7a9de4e4.setValue(macro_function_2b54fb07_8320_5b5b_a3fc_bfcb7a9de4e4);
		macro_function_ea4e020c_0c80_5148_9d36_b7a935453d33 = function(){
			return tiMonitor.ruleVariableCache.getVariableValue('digitalData.pageInfo.country', 100);
		} 
		macro_ea4e020c_0c80_5148_9d36_b7a935453d33 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'ea4e020c_0c80_5148_9d36_b7a935453d33', reportValue: true});
		macro_ea4e020c_0c80_5148_9d36_b7a935453d33.setValue(macro_function_ea4e020c_0c80_5148_9d36_b7a935453d33);
		macro_function_53db9d08_2b27_59bc_b9d1_c26b195a2400 = function(){
			return tiMonitor.ruleVariableCache.getVariableValue('digitalData.pageInfo.currencyCode', 100);
		} 
		macro_53db9d08_2b27_59bc_b9d1_c26b195a2400 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '53db9d08_2b27_59bc_b9d1_c26b195a2400', reportValue: true});
		macro_53db9d08_2b27_59bc_b9d1_c26b195a2400.setValue(macro_function_53db9d08_2b27_59bc_b9d1_c26b195a2400);
		macro_function_3458f917_8e3a_5215_be8e_ef9920f93c2f = function(){
			return tiMonitor.ruleVariableCache.getVariableValue('digitalData.pageInfo.language', 100);
		} 
		macro_3458f917_8e3a_5215_be8e_ef9920f93c2f = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '3458f917_8e3a_5215_be8e_ef9920f93c2f', reportValue: true});
		macro_3458f917_8e3a_5215_be8e_ef9920f93c2f.setValue(macro_function_3458f917_8e3a_5215_be8e_ef9920f93c2f);
		macro_function_05ec94b1_ac32_5414_a857_d7aa0ea4c5a3 = function(){
			return tiMonitor.ruleVariableCache.getVariableValue('digitalData.page.category', 100);
		} 
		macro_05ec94b1_ac32_5414_a857_d7aa0ea4c5a3 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '05ec94b1_ac32_5414_a857_d7aa0ea4c5a3', reportValue: true});
		macro_05ec94b1_ac32_5414_a857_d7aa0ea4c5a3.setValue(macro_function_05ec94b1_ac32_5414_a857_d7aa0ea4c5a3);
		macro_function_5dce70db_8cab_53a2_96c4_27ace7c98382 = function(){
			return tiMonitor.ruleVariableCache.getVariableValue('digitalData.pageInfo.platform', 100);
		} 
		macro_5dce70db_8cab_53a2_96c4_27ace7c98382 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '5dce70db_8cab_53a2_96c4_27ace7c98382', reportValue: true});
		macro_5dce70db_8cab_53a2_96c4_27ace7c98382.setValue(macro_function_5dce70db_8cab_53a2_96c4_27ace7c98382);
		macro_function_20667fd8_6568_5667_987e_d6dcd87ed0ae = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('56') == true){
				var re = new RegExp('pageName=(US|GB|FR|DE|EU):checkout:thank_you', 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['56'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['56'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_20667fd8_6568_5667_987e_d6dcd87ed0ae = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '20667fd8_6568_5667_987e_d6dcd87ed0ae', reportValue: false});
		macro_20667fd8_6568_5667_987e_d6dcd87ed0ae.setValue(macro_function_20667fd8_6568_5667_987e_d6dcd87ed0ae);
		macro_function_4e2ae22b_8aa1_5533_bcaf_4ffc39919b4a = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('56') == true){
				var re = new RegExp('products=(;(\\$|[a-z]|(%20| )|\\d|-)+;\\d+;\\d+\\.\\d+;event82=\\d+\\|event83=\\d+\\.\\d+;evar29=([a-z]|\\d)+\\|evar58=\\d+(&|,|$))+', 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['56'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['56'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_4e2ae22b_8aa1_5533_bcaf_4ffc39919b4a = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '4e2ae22b_8aa1_5533_bcaf_4ffc39919b4a', reportValue: false});
		macro_4e2ae22b_8aa1_5533_bcaf_4ffc39919b4a.setValue(macro_function_4e2ae22b_8aa1_5533_bcaf_4ffc39919b4a);
		macro_function_1826aba4_c20f_5229_be89_bc1ae652ffd8 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('56') == true){
				var re = new RegExp('events=purchase,event82,event83,event146,event129=\\d+\\.\\d+,event81=\\d+.\\d+,event144=\\d+.\\d+,event151=\\d+.\\d+,event49', 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['56'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['56'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_1826aba4_c20f_5229_be89_bc1ae652ffd8 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '1826aba4_c20f_5229_be89_bc1ae652ffd8', reportValue: false});
		macro_1826aba4_c20f_5229_be89_bc1ae652ffd8.setValue(macro_function_1826aba4_c20f_5229_be89_bc1ae652ffd8);
		macro_function_ea3984b3_759a_5089_b0e0_ffb910863858 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1406') == true){
				var re = new RegExp('ev=Purchase', 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1406'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1406'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_ea3984b3_759a_5089_b0e0_ffb910863858 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'ea3984b3_759a_5089_b0e0_ffb910863858', reportValue: false});
		macro_ea3984b3_759a_5089_b0e0_ffb910863858.setValue(macro_function_ea3984b3_759a_5089_b0e0_ffb910863858);
		macro_function_2691a811_3b50_5052_8871_5ddc3428cad8 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1406') == true){
				var re = new RegExp('cd[currency]=(USD|GBP|EUR)', 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1406'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1406'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_2691a811_3b50_5052_8871_5ddc3428cad8 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '2691a811_3b50_5052_8871_5ddc3428cad8', reportValue: false});
		macro_2691a811_3b50_5052_8871_5ddc3428cad8.setValue(macro_function_2691a811_3b50_5052_8871_5ddc3428cad8);
		macro_function_65e1c1b7_4387_5b56_aa9c_fdeda9564254 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1406') == true){
				var re = new RegExp('cd[total_value]=[0-9]+', 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1406'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1406'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_65e1c1b7_4387_5b56_aa9c_fdeda9564254 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '65e1c1b7_4387_5b56_aa9c_fdeda9564254', reportValue: false});
		macro_65e1c1b7_4387_5b56_aa9c_fdeda9564254.setValue(macro_function_65e1c1b7_4387_5b56_aa9c_fdeda9564254);
		macro_function_5dc1dc70_2e88_5258_bcb8_e7646f1e1c17 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1406') == true){
				var re = new RegExp('cd[value]=[0-9]+', 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1406'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1406'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_5dc1dc70_2e88_5258_bcb8_e7646f1e1c17 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '5dc1dc70_2e88_5258_bcb8_e7646f1e1c17', reportValue: false});
		macro_5dc1dc70_2e88_5258_bcb8_e7646f1e1c17.setValue(macro_function_5dc1dc70_2e88_5258_bcb8_e7646f1e1c17);
		macro_function_006513e9_d422_5092_b6ce_8ffb6969c49b = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1406') == true){
				var re = new RegExp('(?:[?&])(cd(%5B|(%5C|\\\\)?[)contents(%5D|(%5C|\\\\)?])=([^&]{1,}))', 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1406'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1406'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_006513e9_d422_5092_b6ce_8ffb6969c49b = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '006513e9_d422_5092_b6ce_8ffb6969c49b', reportValue: false});
		macro_006513e9_d422_5092_b6ce_8ffb6969c49b.setValue(macro_function_006513e9_d422_5092_b6ce_8ffb6969c49b);
		macro_function_bb8da69b_2039_5513_ba0d_3ade601e3171 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1406') == true){
				var re = new RegExp('cd[content_type]=product', 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1406'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1406'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_bb8da69b_2039_5513_ba0d_3ade601e3171 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'bb8da69b_2039_5513_ba0d_3ade601e3171', reportValue: false});
		macro_bb8da69b_2039_5513_ba0d_3ade601e3171.setValue(macro_function_bb8da69b_2039_5513_ba0d_3ade601e3171);
		macro_function_1b0c2cbd_74a4_5e1e_b323_cd9f72150a3f = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('384') == true){
				returnVal = 'true';
			}
			return returnVal;
		} 
		macro_1b0c2cbd_74a4_5e1e_b323_cd9f72150a3f = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '1b0c2cbd_74a4_5e1e_b323_cd9f72150a3f', reportValue: false});
		macro_1b0c2cbd_74a4_5e1e_b323_cd9f72150a3f.setValue(macro_function_1b0c2cbd_74a4_5e1e_b323_cd9f72150a3f);
		macro_function_5904dde1_2387_5264_bf5f_2d51fd0c3dd1 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('2617') == true){
				returnVal = 'true';
			}
			return returnVal;
		} 
		macro_5904dde1_2387_5264_bf5f_2d51fd0c3dd1 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '5904dde1_2387_5264_bf5f_2d51fd0c3dd1', reportValue: false});
		macro_5904dde1_2387_5264_bf5f_2d51fd0c3dd1.setValue(macro_function_5904dde1_2387_5264_bf5f_2d51fd0c3dd1);
		

condition_a74971bd_8397_458f_ab51_cccfc39fb686 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_814e0bc4_d9be_5eaf_994e_c7267909ba91, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: 'a74971bd_8397_458f_ab51_cccfc39fb686'});

rule_15792 = new taginspector.datapulse.BaseRule({uniqueId: '15792', triggerTiming: 'Window Before Unload',  ruleVersion: 2, dataCollector: tiMonitor.dataCollector});
rule_15792.addFilter(condition_a74971bd_8397_458f_ab51_cccfc39fb686);

condition_32da8fdc_56a4_4e30_bc37_a160c56304c8 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_fb153011_968d_5130_8ebb_e903b10ac333, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '32da8fdc_56a4_4e30_bc37_a160c56304c8'});

condition_166da312_a462_46b7_aca9_5a82a76c2f1e = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_8b82c2be_77ce_5128_881a_d304da1bf2e8, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '166da312_a462_46b7_aca9_5a82a76c2f1e'});

condition_5e4a134e_970e_4eb2_b19d_2d0c64da4862 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_497c09aa_85db_5eb3_ac75_e72114f87323, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '5e4a134e_970e_4eb2_b19d_2d0c64da4862'});

condition_09a9fe55_8000_4f5f_9ba1_4616fad42282 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_c4148896_2a0e_522a_a4fe_c4bac3b6549e, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '09a9fe55_8000_4f5f_9ba1_4616fad42282'});

condition_b9044904_eefa_4e66_806d_b6b94c98345d = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_72fec5ba_a85c_5ef1_9f39_c6f8d075a8b9, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: 'b9044904_eefa_4e66_806d_b6b94c98345d'});

condition_093e4c30_5231_4bd4_8d60_9635ad68c892 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_bcd86d23_207f_537e_8f9a_82a2faf38f09, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '093e4c30_5231_4bd4_8d60_9635ad68c892'});

condition_e601983d_ac08_4505_b530_8410cc22aeec = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_d7f70b04_f89f_5af8_ba5e_b3af4cdf6a1a, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: 'e601983d_ac08_4505_b530_8410cc22aeec'});

condition_33fa7198_62ad_4f40_99d1_359e0104b953 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_22dc7922_97c9_5d53_99a1_7cab6cf97b25, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '33fa7198_62ad_4f40_99d1_359e0104b953'});

condition_4cbdf029_6615_4bd8_8818_cacf97fe0873 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_2787d2a0_a369_5303_9942_3d5728e92fca, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '4cbdf029_6615_4bd8_8818_cacf97fe0873'});

condition_527026d5_9184_4405_9ed1_fbd9d4a72a73 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_0dbe3ea1_8091_52e1_ab69_4383d5414f81, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '527026d5_9184_4405_9ed1_fbd9d4a72a73'});

condition_0c4a5dfa_21e7_4388_b9d5_d2822aa4623e = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_dc909c80_6107_5a1c_95c7_db8a43711be5, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '0c4a5dfa_21e7_4388_b9d5_d2822aa4623e'});

rule_15791 = new taginspector.datapulse.BaseRule({uniqueId: '15791', triggerTiming: 'Window Before Unload',  ruleVersion: 2, dataCollector: tiMonitor.dataCollector});
rule_15791.addFilter(condition_32da8fdc_56a4_4e30_bc37_a160c56304c8);
rule_15791.addFilter(condition_166da312_a462_46b7_aca9_5a82a76c2f1e);
rule_15791.addFilter(condition_5e4a134e_970e_4eb2_b19d_2d0c64da4862);
rule_15791.addFilter(condition_09a9fe55_8000_4f5f_9ba1_4616fad42282);
rule_15791.addFilter(condition_b9044904_eefa_4e66_806d_b6b94c98345d);
rule_15791.addFilter(condition_093e4c30_5231_4bd4_8d60_9635ad68c892);
rule_15791.addFilter(condition_e601983d_ac08_4505_b530_8410cc22aeec);
rule_15791.addFilter(condition_33fa7198_62ad_4f40_99d1_359e0104b953);
rule_15791.addFilter(condition_4cbdf029_6615_4bd8_8818_cacf97fe0873);
rule_15791.addFilter(condition_527026d5_9184_4405_9ed1_fbd9d4a72a73);
rule_15791.addFilter(condition_0c4a5dfa_21e7_4388_b9d5_d2822aa4623e);

condition_360a2ee6_85c4_46ea_a3d0_bf0fc836ac84 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_0e967c6a_4c02_5ec5_9d55_4b3eb262e580, comparisonVariable: '.+', comparisonType: 'Matches Regex', uniqueId: '360a2ee6_85c4_46ea_a3d0_bf0fc836ac84'});

condition_654236bc_6f88_4156_b5ea_9e4a30d3e906 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_5aff3c21_e884_5506_bb3c_1de819ee21d8, comparisonVariable: '.+', comparisonType: 'Matches Regex', uniqueId: '654236bc_6f88_4156_b5ea_9e4a30d3e906'});

condition_94e5d1f6_d1f6_4b51_935e_e888c5fa0aa9 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_27c189c5_2d60_5751_a4df_dcb9e5dbe419, comparisonVariable: '^(US|GB|FR|DE|EU)\\:([a-z]|[A-Z]|_|-)+($|\\:([a-z]|[A-Z]|_|-))+', comparisonType: 'Matches Regex', uniqueId: '94e5d1f6_d1f6_4b51_935e_e888c5fa0aa9'});

condition_1d8d7f33_21cf_4908_bc44_535c698965d7 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_2b54fb07_8320_5b5b_a3fc_bfcb7a9de4e4, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '1d8d7f33_21cf_4908_bc44_535c698965d7'});

condition_9ef378e3_c651_4fe9_b6f0_5f2582682b3a = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_ea4e020c_0c80_5148_9d36_b7a935453d33, comparisonVariable: '^(US|GB|FR|DE|EU)$', comparisonType: 'Matches Regex', uniqueId: '9ef378e3_c651_4fe9_b6f0_5f2582682b3a'});

condition_ce5fd73e_8e7a_489d_8d7d_83f55ef1f62d = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_53db9d08_2b27_59bc_b9d1_c26b195a2400, comparisonVariable: '(GBP|USD|EUR)', comparisonType: 'Matches Regex', uniqueId: 'ce5fd73e_8e7a_489d_8d7d_83f55ef1f62d'});

condition_e2fd6d39_8d6c_49c3_83f3_35a9587e52d2 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_3458f917_8e3a_5215_be8e_ef9920f93c2f, comparisonVariable: '(en-US|en-GB|fr-FR|en|de-DE)', comparisonType: 'Matches Regex', uniqueId: 'e2fd6d39_8d6c_49c3_83f3_35a9587e52d2'});

condition_648f6963_1d6e_469d_9d12_c7ba32a7d9bc = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_05ec94b1_ac32_5414_a857_d7aa0ea4c5a3, comparisonVariable: 'Skin|Cosmetics|Baby|Kylie-beauty', comparisonType: 'Matches Regex', uniqueId: '648f6963_1d6e_469d_9d12_c7ba32a7d9bc'});

condition_97ceb64d_54fc_4a97_b751_507ece7b54d1 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_5dce70db_8cab_53a2_96c4_27ace7c98382, comparisonVariable: 'desktop|mobile', comparisonType: 'Matches Regex', uniqueId: '97ceb64d_54fc_4a97_b751_507ece7b54d1'});

rule_14167 = new taginspector.datapulse.BaseRule({uniqueId: '14167', triggerTiming: 'Window Before Unload',  ruleVersion: 6, dataCollector: tiMonitor.dataCollector});
rule_14167.addFilter(condition_360a2ee6_85c4_46ea_a3d0_bf0fc836ac84);
rule_14167.addFilter(condition_654236bc_6f88_4156_b5ea_9e4a30d3e906);
rule_14167.addFilter(condition_94e5d1f6_d1f6_4b51_935e_e888c5fa0aa9);
rule_14167.addFilter(condition_1d8d7f33_21cf_4908_bc44_535c698965d7);
rule_14167.addFilter(condition_9ef378e3_c651_4fe9_b6f0_5f2582682b3a);
rule_14167.addFilter(condition_ce5fd73e_8e7a_489d_8d7d_83f55ef1f62d);
rule_14167.addFilter(condition_e2fd6d39_8d6c_49c3_83f3_35a9587e52d2);
rule_14167.addFilter(condition_648f6963_1d6e_469d_9d12_c7ba32a7d9bc);
rule_14167.addFilter(condition_97ceb64d_54fc_4a97_b751_507ece7b54d1);

condition_0efc5606_f41c_4c88_b23e_4fb2b6ef7462 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_20667fd8_6568_5667_987e_d6dcd87ed0ae, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '0efc5606_f41c_4c88_b23e_4fb2b6ef7462'});

condition_307fe9ab_bf2b_4ed1_805d_c7ca1df4e14c = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_4e2ae22b_8aa1_5533_bcaf_4ffc39919b4a, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '307fe9ab_bf2b_4ed1_805d_c7ca1df4e14c'});

condition_035dd0a3_f40c_4ffa_8f96_c6cf225583a7 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_1826aba4_c20f_5229_be89_bc1ae652ffd8, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '035dd0a3_f40c_4ffa_8f96_c6cf225583a7'});

rule_13055 = new taginspector.datapulse.BaseRule({uniqueId: '13055', triggerTiming: 'Window Before Unload',  ruleVersion: 7, dataCollector: tiMonitor.dataCollector});
rule_13055.addFilter(condition_0efc5606_f41c_4c88_b23e_4fb2b6ef7462);
rule_13055.addFilter(condition_307fe9ab_bf2b_4ed1_805d_c7ca1df4e14c);
rule_13055.addFilter(condition_035dd0a3_f40c_4ffa_8f96_c6cf225583a7);

condition_3e373dfa_eb40_4439_b6fa_08a296df4819 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_ea3984b3_759a_5089_b0e0_ffb910863858, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '3e373dfa_eb40_4439_b6fa_08a296df4819'});

condition_e7d031a5_9167_4116_9812_1b984cf05a4c = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_2691a811_3b50_5052_8871_5ddc3428cad8, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: 'e7d031a5_9167_4116_9812_1b984cf05a4c'});

condition_b9dcba6a_e8fb_49c3_9897_006ad5232c42 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_65e1c1b7_4387_5b56_aa9c_fdeda9564254, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: 'b9dcba6a_e8fb_49c3_9897_006ad5232c42'});

condition_466947fd_31b5_477c_97c1_83b696b3f74f = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_5dc1dc70_2e88_5258_bcb8_e7646f1e1c17, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '466947fd_31b5_477c_97c1_83b696b3f74f'});

condition_57329b04_851b_4353_8382_1aaa353d1ca6 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_006513e9_d422_5092_b6ce_8ffb6969c49b, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '57329b04_851b_4353_8382_1aaa353d1ca6'});

condition_5bf5f69c_e6d5_4c80_8a81_19beaa502756 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_bb8da69b_2039_5513_ba0d_3ade601e3171, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '5bf5f69c_e6d5_4c80_8a81_19beaa502756'});

rule_15788 = new taginspector.datapulse.BaseRule({uniqueId: '15788', triggerTiming: 'Window Before Unload',  ruleVersion: 2, dataCollector: tiMonitor.dataCollector});
rule_15788.addFilter(condition_3e373dfa_eb40_4439_b6fa_08a296df4819);
rule_15788.addFilter(condition_e7d031a5_9167_4116_9812_1b984cf05a4c);
rule_15788.addFilter(condition_b9dcba6a_e8fb_49c3_9897_006ad5232c42);
rule_15788.addFilter(condition_466947fd_31b5_477c_97c1_83b696b3f74f);
rule_15788.addFilter(condition_57329b04_851b_4353_8382_1aaa353d1ca6);
rule_15788.addFilter(condition_5bf5f69c_e6d5_4c80_8a81_19beaa502756);

condition_d4cb7198_384a_4afb_882e_8d3496af4f00 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_22dc7922_97c9_5d53_99a1_7cab6cf97b25, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: 'd4cb7198_384a_4afb_882e_8d3496af4f00'});

rule_15798 = new taginspector.datapulse.BaseRule({uniqueId: '15798', triggerTiming: 'Window Before Unload',  ruleVersion: 1, dataCollector: tiMonitor.dataCollector});
rule_15798.addFilter(condition_d4cb7198_384a_4afb_882e_8d3496af4f00);

condition_5b0bc75c_6c57_4492_b839_5909e972b41f = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_2b54fb07_8320_5b5b_a3fc_bfcb7a9de4e4, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '5b0bc75c_6c57_4492_b839_5909e972b41f'});

rule_15799 = new taginspector.datapulse.BaseRule({uniqueId: '15799', triggerTiming: 'Window Before Unload',  ruleVersion: 1, dataCollector: tiMonitor.dataCollector});
rule_15799.addFilter(condition_5b0bc75c_6c57_4492_b839_5909e972b41f);

condition_1783349c_fad0_4ce3_9d49_e3e70d2c0272 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_1b0c2cbd_74a4_5e1e_b323_cd9f72150a3f, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '1783349c_fad0_4ce3_9d49_e3e70d2c0272'});

rule_15790 = new taginspector.datapulse.BaseRule({uniqueId: '15790', triggerTiming: 'Window Before Unload',  ruleVersion: 1, dataCollector: tiMonitor.dataCollector});
rule_15790.addFilter(condition_1783349c_fad0_4ce3_9d49_e3e70d2c0272);

condition_abf72b89_5eb1_4737_8337_01220d3d67c5 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_5904dde1_2387_5264_bf5f_2d51fd0c3dd1, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: 'abf72b89_5eb1_4737_8337_01220d3d67c5'});

rule_15789 = new taginspector.datapulse.BaseRule({uniqueId: '15789', triggerTiming: 'Window Before Unload',  ruleVersion: 1, dataCollector: tiMonitor.dataCollector});
rule_15789.addFilter(condition_abf72b89_5eb1_4737_8337_01220d3d67c5);


condition_5cc37e11_5c3c_4898_a23f_f02fb9e2a424 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_31dad1ae_f686_5581_8cbc_52bf9629b428, comparisonVariable: 'thank_you', comparisonType: 'Contains', uniqueId: '5cc37e11_5c3c_4898_a23f_f02fb9e2a424'});
trigger_function_trigger_e88f23d4_f3cc_11eb_8125_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_5cc37e11_5c3c_4898_a23f_f02fb9e2a424.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_e88f23d4_f3cc_11eb_8125_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_e88f23d4_f3cc_11eb_8125_1201f4358c27, uniqueId: 'e88f23d4_f3cc_11eb_8125_1201f4358c27', triggerFired: false });
trigger_e88f23d4_f3cc_11eb_8125_1201f4358c27.addRule(rule_15792);
rule_15792.addTrigger(trigger_e88f23d4_f3cc_11eb_8125_1201f4358c27);

condition_5cf73b3e_e5d4_4f7f_9b88_3dcdd66d6d34 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_cd466443_90c1_5af2_af93_88633b465248, comparisonVariable: 'C0004', comparisonType: 'Contains', uniqueId: '5cf73b3e_e5d4_4f7f_9b88_3dcdd66d6d34'});
trigger_function_trigger_e88f2bd6_f3cc_11eb_8125_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_5cf73b3e_e5d4_4f7f_9b88_3dcdd66d6d34.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_e88f2bd6_f3cc_11eb_8125_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_e88f2bd6_f3cc_11eb_8125_1201f4358c27, uniqueId: 'e88f2bd6_f3cc_11eb_8125_1201f4358c27', triggerFired: false });
trigger_e88f2bd6_f3cc_11eb_8125_1201f4358c27.addRule(rule_15792);
rule_15792.addTrigger(trigger_e88f2bd6_f3cc_11eb_8125_1201f4358c27);

condition_eed51e8e_4417_4a22_ab2e_1a5c81259301 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_31dad1ae_f686_5581_8cbc_52bf9629b428, comparisonVariable: '/thank_you', comparisonType: 'Ends With', uniqueId: 'eed51e8e_4417_4a22_ab2e_1a5c81259301'});
trigger_function_trigger_e88f69a2_f3cc_11eb_8125_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_eed51e8e_4417_4a22_ab2e_1a5c81259301.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_e88f69a2_f3cc_11eb_8125_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_e88f69a2_f3cc_11eb_8125_1201f4358c27, uniqueId: 'e88f69a2_f3cc_11eb_8125_1201f4358c27', triggerFired: false });
trigger_e88f69a2_f3cc_11eb_8125_1201f4358c27.addRule(rule_15791);
rule_15791.addTrigger(trigger_e88f69a2_f3cc_11eb_8125_1201f4358c27);

condition_ab71b84d_ac51_47a8_8a46_c8bccf3aea0f = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_cd466443_90c1_5af2_af93_88633b465248, comparisonVariable: 'C0002', comparisonType: 'Contains', uniqueId: 'ab71b84d_ac51_47a8_8a46_c8bccf3aea0f'});
trigger_function_trigger_e88f938c_f3cc_11eb_8125_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_ab71b84d_ac51_47a8_8a46_c8bccf3aea0f.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_e88f938c_f3cc_11eb_8125_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_e88f938c_f3cc_11eb_8125_1201f4358c27, uniqueId: 'e88f938c_f3cc_11eb_8125_1201f4358c27', triggerFired: false });
trigger_e88f938c_f3cc_11eb_8125_1201f4358c27.addRule(rule_14167);
rule_14167.addTrigger(trigger_e88f938c_f3cc_11eb_8125_1201f4358c27);

condition_c31d453a_d047_4bd5_832e_fd46bd8d04ed = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_31dad1ae_f686_5581_8cbc_52bf9629b428, comparisonVariable: 'thank_you', comparisonType: 'Contains', uniqueId: 'c31d453a_d047_4bd5_832e_fd46bd8d04ed'});
trigger_function_trigger_e88fab60_f3cc_11eb_8125_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_c31d453a_d047_4bd5_832e_fd46bd8d04ed.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_e88fab60_f3cc_11eb_8125_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_e88fab60_f3cc_11eb_8125_1201f4358c27, uniqueId: 'e88fab60_f3cc_11eb_8125_1201f4358c27', triggerFired: false });
trigger_e88fab60_f3cc_11eb_8125_1201f4358c27.addRule(rule_13055);
rule_13055.addTrigger(trigger_e88fab60_f3cc_11eb_8125_1201f4358c27);

condition_be2f2245_3fcd_4fb1_bfc7_bf955b2fd12d = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_cd466443_90c1_5af2_af93_88633b465248, comparisonVariable: ',C0004,', comparisonType: 'Contains', uniqueId: 'be2f2245_3fcd_4fb1_bfc7_bf955b2fd12d'});
trigger_function_trigger_e88fcfe6_f3cc_11eb_8125_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_be2f2245_3fcd_4fb1_bfc7_bf955b2fd12d.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_e88fcfe6_f3cc_11eb_8125_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_e88fcfe6_f3cc_11eb_8125_1201f4358c27, uniqueId: 'e88fcfe6_f3cc_11eb_8125_1201f4358c27', triggerFired: false });
trigger_e88fcfe6_f3cc_11eb_8125_1201f4358c27.addRule(rule_15788);
rule_15788.addTrigger(trigger_e88fcfe6_f3cc_11eb_8125_1201f4358c27);

condition_2cdb67ae_6048_4ff0_ad66_a9ed608c0f28 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_31dad1ae_f686_5581_8cbc_52bf9629b428, comparisonVariable: '/thank_you', comparisonType: 'Ends With', uniqueId: '2cdb67ae_6048_4ff0_ad66_a9ed608c0f28'});
trigger_function_trigger_e88fd572_f3cc_11eb_8125_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_2cdb67ae_6048_4ff0_ad66_a9ed608c0f28.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_e88fd572_f3cc_11eb_8125_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_e88fd572_f3cc_11eb_8125_1201f4358c27, uniqueId: 'e88fd572_f3cc_11eb_8125_1201f4358c27', triggerFired: false });
trigger_e88fd572_f3cc_11eb_8125_1201f4358c27.addRule(rule_15788);
rule_15788.addTrigger(trigger_e88fd572_f3cc_11eb_8125_1201f4358c27);

condition_f7a06d45_e72d_4778_8bc2_4310650b144c = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_cd466443_90c1_5af2_af93_88633b465248, comparisonVariable: 'C0002', comparisonType: 'Contains', uniqueId: 'f7a06d45_e72d_4778_8bc2_4310650b144c'});
trigger_function_trigger_e88fe080_f3cc_11eb_8125_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_f7a06d45_e72d_4778_8bc2_4310650b144c.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_e88fe080_f3cc_11eb_8125_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_e88fe080_f3cc_11eb_8125_1201f4358c27, uniqueId: 'e88fe080_f3cc_11eb_8125_1201f4358c27', triggerFired: false });
trigger_e88fe080_f3cc_11eb_8125_1201f4358c27.addRule(rule_15798);
rule_15798.addTrigger(trigger_e88fe080_f3cc_11eb_8125_1201f4358c27);

condition_9ab58f1f_b9b5_4fce_b1b1_50002c20b65a = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_cd466443_90c1_5af2_af93_88633b465248, comparisonVariable: 'C0002', comparisonType: 'Contains', uniqueId: '9ab58f1f_b9b5_4fce_b1b1_50002c20b65a'});
trigger_function_trigger_e88feb2a_f3cc_11eb_8125_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_9ab58f1f_b9b5_4fce_b1b1_50002c20b65a.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_e88feb2a_f3cc_11eb_8125_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_e88feb2a_f3cc_11eb_8125_1201f4358c27, uniqueId: 'e88feb2a_f3cc_11eb_8125_1201f4358c27', triggerFired: false });
trigger_e88feb2a_f3cc_11eb_8125_1201f4358c27.addRule(rule_15799);
rule_15799.addTrigger(trigger_e88feb2a_f3cc_11eb_8125_1201f4358c27);

condition_dbc961ea_3020_42a8_9469_4e03b5206592 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_31dad1ae_f686_5581_8cbc_52bf9629b428, comparisonVariable: '/thank_you', comparisonType: 'Ends With', uniqueId: 'dbc961ea_3020_42a8_9469_4e03b5206592'});
trigger_function_trigger_e88ff548_f3cc_11eb_8125_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_dbc961ea_3020_42a8_9469_4e03b5206592.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_e88ff548_f3cc_11eb_8125_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_e88ff548_f3cc_11eb_8125_1201f4358c27, uniqueId: 'e88ff548_f3cc_11eb_8125_1201f4358c27', triggerFired: false });
trigger_e88ff548_f3cc_11eb_8125_1201f4358c27.addRule(rule_15790);
rule_15790.addTrigger(trigger_e88ff548_f3cc_11eb_8125_1201f4358c27);

condition_deba3f29_7677_4c3f_9aae_2b435c18b234 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_cd466443_90c1_5af2_af93_88633b465248, comparisonVariable: ',C0004,', comparisonType: 'Contains', uniqueId: 'deba3f29_7677_4c3f_9aae_2b435c18b234'});
trigger_function_trigger_e88ffb24_f3cc_11eb_8125_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_deba3f29_7677_4c3f_9aae_2b435c18b234.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_e88ffb24_f3cc_11eb_8125_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_e88ffb24_f3cc_11eb_8125_1201f4358c27, uniqueId: 'e88ffb24_f3cc_11eb_8125_1201f4358c27', triggerFired: false });
trigger_e88ffb24_f3cc_11eb_8125_1201f4358c27.addRule(rule_15790);
rule_15790.addTrigger(trigger_e88ffb24_f3cc_11eb_8125_1201f4358c27);

condition_d6a84461_5644_4cc9_8adc_6d88b37309eb = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_31dad1ae_f686_5581_8cbc_52bf9629b428, comparisonVariable: '/thank_you', comparisonType: 'Ends With', uniqueId: 'd6a84461_5644_4cc9_8adc_6d88b37309eb'});
trigger_function_trigger_e8900560_f3cc_11eb_8125_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_d6a84461_5644_4cc9_8adc_6d88b37309eb.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_e8900560_f3cc_11eb_8125_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_e8900560_f3cc_11eb_8125_1201f4358c27, uniqueId: 'e8900560_f3cc_11eb_8125_1201f4358c27', triggerFired: false });
trigger_e8900560_f3cc_11eb_8125_1201f4358c27.addRule(rule_15789);
rule_15789.addTrigger(trigger_e8900560_f3cc_11eb_8125_1201f4358c27);

condition_24584694_d804_4862_b8d6_9c3b51f6d534 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_cd466443_90c1_5af2_af93_88633b465248, comparisonVariable: ',C0004,', comparisonType: 'Contains', uniqueId: '24584694_d804_4862_b8d6_9c3b51f6d534'});
trigger_function_trigger_e8900b32_f3cc_11eb_8125_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_24584694_d804_4862_b8d6_9c3b51f6d534.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_e8900b32_f3cc_11eb_8125_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_e8900b32_f3cc_11eb_8125_1201f4358c27, uniqueId: 'e8900b32_f3cc_11eb_8125_1201f4358c27', triggerFired: false });
trigger_e8900b32_f3cc_11eb_8125_1201f4358c27.addRule(rule_15789);
rule_15789.addTrigger(trigger_e8900b32_f3cc_11eb_8125_1201f4358c27);


		function _asyncFireTrigger(tgr){
			return new Promise(function(resolve, reject){
				tgr.initTrigger(resolve);
			});
		}

		function initUnloadTriggers(){
			var tiTriggerListInit = [];
			tiMonitor.ruleVariableCache.updateCache(100);
			tiTriggerListInit.push(_asyncFireTrigger(trigger_e88f23d4_f3cc_11eb_8125_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_e88f2bd6_f3cc_11eb_8125_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_e88f69a2_f3cc_11eb_8125_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_e88f938c_f3cc_11eb_8125_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_e88fab60_f3cc_11eb_8125_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_e88fcfe6_f3cc_11eb_8125_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_e88fd572_f3cc_11eb_8125_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_e88fe080_f3cc_11eb_8125_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_e88feb2a_f3cc_11eb_8125_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_e88ff548_f3cc_11eb_8125_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_e88ffb24_f3cc_11eb_8125_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_e8900560_f3cc_11eb_8125_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_e8900b32_f3cc_11eb_8125_1201f4358c27));

			Promise.all(tiTriggerListInit).then(function(values){
			});
		}

		window.addEventListener("unload", function (event) {
			tiMonitor.sendData.fire();
		});

		window.addEventListener("pagehide", function (event) {
			tiMonitor.fireValidationRules();
		});

		window.addEventListener("beforeunload", function (event) {
			tiMonitor.fireValidationRules();
		});

		document.addEventListener('tiSimulateUnload', function (e) {
			initUnloadTriggers();
		}, false);


	}
	catch(err) {
		console.log(err.message);
		jeErrorObj = {
			message: err.message
		};
		tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
	}
};

tiMonitor.fireValidationRules = function (){
	try {
		//fire unload triggers:
		if(typeof Event == "function" && tiMonitor.sendData.pageBeingSampled == false){
			var event = new Event("tiSimulateUnload");
			tiMonitor.sendData.handleUnload();
			document.dispatchEvent(event);
		}
	}
	catch(err) {
		console.log(err.message);
		jeErrorObj = {
			message: err.message
		};
		tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
	}
};

tiMonitor.enableEnhancedTagSupport = function (){
	try {
		scInterval = 0;
		var tiScPostSupport = setInterval(function() {
			scInterval = scInterval + 100;
			if(scInterval >= 20000){
				clearInterval(tiScPostSupport);
			}
			if(typeof(s) != "undefined"){
				if (s.hasOwnProperty("registerPostTrackCallback")){
					s.registerPostTrackCallback(function(requestUrl) {
						if(requestUrl.length > 2048 || navigator.userAgent.indexOf("iPhone") > -1){
							tiMonitor.sendData.createFakeReq(requestUrl);
						}
					});
					clearInterval(tiScPostSupport);
				}
			}
		}, 100);
		fbInterval = 0;
		var tiFbPostSupport = setInterval(function() {
			fbInterval = fbInterval + 100;
			if(fbInterval >= 20000){
				clearInterval(tiFbPostSupport);
			}
			if(typeof(fbq) != "undefined"){
				if (fbq.hasOwnProperty("on")){
					clearInterval(tiFbPostSupport);
					fbq.on( "fired", function(reqMethod, reqData) {
						if(reqMethod == "POST"){
							params = []
							for(x=1;x<reqData["_params"].length;x++){
								param = reqData["_params"][x];
								params.push(encodeURIComponent(param.name) + '=' + encodeURIComponent(param.value));
							}
							fbUrl = "https://www.facebook.com/tr/?" + params.join('&');
							tiMonitor.sendData.createFakeReq(fbUrl);
						}
					});
				}
			}
		}, 100);
	
		function initGaTracker(tracker){
			var globalSendTaskName = '_' + tracker.get('trackingId') + '_sendHitTask';
			var originalSendHitTask = window[globalSendTaskName] = window[globalSendTaskName] || tracker.get('sendHitTask');

			tracker.set('sendHitTask', function(model) {
				globalSendTaskName2 = '_' + model.get('trackingId') + '_sendHitTask';
				originalSendHitTask2 = window[globalSendTaskName2];
				originalSendHitTask2(model);
				hitPayload = model.get('hitPayload');
				fullHitUrl = "https://www.google-analytics.com/collect?" + hitPayload
				if(hitPayload.length > 2036 && hitPayload.length <= 8192){
					tiMonitor.sendData.createFakeReq(fullHitUrl);
				}
			});
		}
		gaInterval = 0;
		tiGaPostSupport = setInterval(function() {
			gaInterval = gaInterval + 500;
			if(gaInterval >= 20000){
				clearInterval(tiGaPostSupport);
			}
			if(typeof(ga) != "undefined"){
				if (ga.hasOwnProperty("getAll")){
					if(ga.getAll().length > 0){
						for(x=0; x<ga.getAll().length; x++){
						initGaTracker(ga.getAll()[x])
						}
						clearInterval(tiGaPostSupport);
					}
				}
			}
		}, 500);
	}catch(err) {
		console.log(err.message);
		jeErrorObj = {
			message: err.message
		};
		tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
	}
};

tiMonitor.initializeNewPage = function (){
	try {
		tiMonitor.windowUnloadEvent = false;
		tiMonitor.sendData.sentUnload = false;
		tiMonitor.sendData.pageBeingSampled = tiMonitor.sendData.shouldSamplePage();
		newPageId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);return v.toString(16);});
		tiMonitor.sendData.pageId = newPageId;
		tiMonitor.dataCollector.pageId = newPageId;
		
		tiMonitor.dataCollector.startTime = Date.now();
		// tiMonitor.dataCollector.identifiedRequests = {};
		tiMonitor.dataCollector.resetIdentifiedRequests();
		tiMonitor.dataCollector.offsetTime = performance.now();
		tiMonitor.sendData.currentUrl = window.location.href;
		tiMonitor.sendData.preventFiringValidationRules = false;
		tiMonitor.dataCollector.resource_size = 0;
		taginspector.datapulse.trigger.BaseTrigger.resetFiredTriggers();
		taginspector.datapulse.pagevariable.BaseVariable.clearCache();
		tiMonitor.spaRuleObjectLengthTracker.incrimentSpaPageview();
	}
	catch(err) {
		console.log(err.message);
		jeErrorObj = {
			message: err.message
		};
		tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
	}
};

tiMonitor.enableSpaSupport = function() {
	var portRegex = /:[0-9]+$/;
	var kd = {};
	ld = function (a, b) {
		kd[a] = kd[a] || [];
		kd[a][b] = !0
	}
	getWindowParam = function(a, b, c) {
		b && (void 0 === window[a] || c && !window[a]) && (window[a] = b);
		return window[a]
	}
	getUrl = function () {
		return document.location.href;
	}

	getUrlwithoutFragment = function (a) {
		return stripFragmentFromUrl(getUrlDict(a))
	}
	stripFragmentFromUrl = function (a) {
		var b = "";
		if (a && a.href) {
			var c = a.href.indexOf("#");
			b = 0 > c ? a.href : a.href.substr(0, c)
		}
		return b
	}
	getUrlDict = function (a) {
		var b = document.createElement("a");
		a && (b.href = a);
		var c = b.pathname;
		"/" !== c[0] && (a || ld("TAGGING", 1), c = "/" + c);
		var d = b.hostname.replace(portRegex, "");
		return {
			href: b.href,
			protocol: b.protocol,
			host: b.host,
			hostname: d,
			pathname: c,
			search: b.search,
			hash: b.hash,
			port: b.port
		}
	}
	getUrlComponent = function (urlDict, uriComponent, c, d, e) {
		uriComponent && (uriComponent = String(uriComponent).toLowerCase());
		if ("protocol" === uriComponent || "port" === uriComponent){
			urlDict.protocol = stripSemicolon(urlDict.protocol) || stripSemicolon(document.location.protocol);
		}
		"port" === uriComponent ? urlDict.port = String(Number(urlDict.hostname ? urlDict.port : document.location.port) || ("http" == urlDict.protocol ? 80 : "https" == urlDict.protocol ? 443 : "")) : "host" === uriComponent && (urlDict.hostname = (urlDict.hostname || document.location.hostname).replace(portRegex, "").toLowerCase());
		var uriComponentCopy = uriComponent, h, k = stripSemicolon(urlDict.protocol);
		uriComponentCopy && (uriComponentCopy = String(uriComponentCopy).toLowerCase());
		switch (uriComponentCopy) {
			case "url_no_fragment":
				result = stripFragmentFromUrl(a);
				break;
			case "protocol":
				result = k;
				break;
			case "host":
				result = urlDict.hostname.replace(portRegex, "").toLowerCase();
				if (c) {
					var l = /^www\d*\./.exec(result);
					l && l[0] && (result = result.substr(l[0].length))
				}
				break;
			case "port":
				result = String(Number(urlDict.port) || ("http" == k ? 80 : "https" == k ? 443 : ""));
				break;
			case "path":
				urlDict.pathname || urlDict.hostname || ld("TAGGING", 1);
				result = "/" == urlDict.pathname.substr(0, 1) ? urlDict.pathname : "/" + urlDict.pathname;
				var m = result.split("/");
				0 <= n(d || [], m[m.length - 1]) && (m[m.length - 1] = "");
				result = m.join("/");
				break;
			case "query":
				result = urlDict.search.replace("?", "");
				e && (result = getQueryparameters(result, e, void 0));
				break;
			case "extension":
				var q = urlDict.pathname.split(".");
				result = 1 < q.length ? q[q.length - 1] : "";
				result = result.split("/")[0];
				break;
			case "fragment":
				result = urlDict.hash.replace("#", "");
				break;
			default:
				result = a && urlDict.href
		}
		return result
	}
	getUrlFragment = function (a) {
		return getUrlComponent(getUrlDict(a), "fragment")
	}
	stripSemicolon = function (a) {
		return a ? a.replace(":", "").toLowerCase() : ""
	}
	isFunction = function(a) {
		return "function" == typeof a
	}
	getQueryparameters = function(a, b, c) {
		for (var d = a.split("&"), e = 0; e < d.length; e++) {
			var f = d[e].split("=");
			if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
				var h = f.slice(1).join("=");
				return c ? h : decodeURIComponent(h).replace(/\+/g, " ")
			}
		}
	}
	addListener = function(a, b, c, d) {
		a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
	}
	var avb = function(){
		function getNewUrlOnEventCallback(event) {
			return event.target && event.target.location && event.target.location.href ? event.target.location.href : getUrl()
		}
		function listenToHashChangeEvents(winObj, histObj) {
			addListener(winObj, "hashchange", function(event) {
				var newUrl = getNewUrlOnEventCallback(event);
				histObj({
					source: "hashchange",
					state: null,
					url: getUrlwithoutFragment(newUrl),
					L: getUrlFragment(newUrl)
				})
			})
		} 
		function listenToPopstateEvents(winObj, histObj) {
			addListener(winObj, "popstate", function(event) {
				var newUrl = getNewUrlOnEventCallback(event);
				histObj({
					source: "popstate",
					state: event.state,
					url: getUrlwithoutFragment(newUrl),
					L: getUrlFragment(newUrl)
				})
			})
		}
		function bindToHistoryEvent(eventName, windowObj, historyObj) {
			var windowHistoryObj = windowObj.history;
			var eventType = windowHistoryObj[eventName];
			if (isFunction(eventType))
				try {
					windowHistoryObj[eventName] = function (q, r, u) {
						eventType.apply(windowHistoryObj, [].slice.call(arguments, 0));
						historyObj({
							source: eventName,
							state: q,
							url: getUrlwithoutFragment(getUrl()),
							L: getUrlFragment(getUrl())
						})
					}
				} catch (q) {}
		}	
		function orgHistoryObj() {
			var historyDict = {
				source: null,
				state: getWindowParam("history").state || null,
				url: getUrlwithoutFragment(getUrl()),
				L: getUrlFragment(getUrl())
			};
			return function(winObj) {
				var l = {};
				l[historyDict.source] = !0;
				l[winObj.source] = !0;
				if (!l.popstate || !l.hashchange || historyDict.L != winObj.L) {
					if(historyDict.url !== undefined && winObj.url !== undefined){
						var historyDictUrlNoQs = (historyDict.url).split("?")[0];
						var winObjUrlNoQs = (winObj.url).split("?")[0];
						if (historyDictUrlNoQs !== winObjUrlNoQs) {
							historyDict = winObj;
							if(performance.now() - tiMonitor.dataCollector.offsetTime > 200){
								tiMonitor.ruleVariableCache.updateCache(100);
								tiMonitor.ruleVariableCache.spaRulesFiring = true;
								setTimeout(function() {
									tiMonitor.fireValidationRules();
									tiMonitor.sendData.pageComplete();
									tiMonitor.ruleVariableCache.spaRulesFiring = false;
									tiMonitor.initializeNewPage();
									tiMonitor.sendData.pageComplete();
								}, 200);
							}
						}
					}
				}
			}
		}(function(f) {
			f()
		})(function() {
			var winObj = getWindowParam("self");
			var histObj = orgHistoryObj();
			listenToHashChangeEvents(winObj, histObj);
			listenToPopstateEvents(winObj, histObj);
			bindToHistoryEvent("pushState", winObj, histObj);
			bindToHistoryEvent("replaceState", winObj, histObj);
		})
	}();
};

tiMonitor.initializeMain = function() {
	if(tiMonitor.sendData.suportedBrowser() == true && tiMonitor.sendData.isInIframe() == false){
		if(tiMonitor.sendData.initialized == false){
			tiMonitor.sendData.initialized = true;
			if(tiMonitor.sendData.shouldSamplePage() == false && tiMonitor.sendData.isBufferFull() == false){
				if(false){
					tiMonitor.dataCollector.session = taginspector.datapulse.Session.setupSession({"containerId": "e71c9a38e93911eb99eb0a93f03eb5ed"});
				}
				tiMonitor.sendData.fullBufferEventListener();
				tiMonitor.spaRuleObjectLengthTracker.incrimentSpaPageview();

				if(tiMonitor.sendData.isPerformanceObserverSupported() == true){
					var iteratePerformanceCompleted = false;
					while(iteratePerformanceCompleted == false){
						tiMonitor.sendData.iteratePerformance();
						pe = performance.getEntriesByType("resource");
						if(tiMonitor.sendData.lastPerformanceObjLength == pe.length){
							iteratePerformanceCompleted = true;
						}
					}
					var observer = new PerformanceObserver(tiMonitor.sendData.performanceObserverCallback);
					observer.observe({entryTypes: ['resource']});

				}else{
					setInterval(function () {tiMonitor.sendData.iteratePerformance()}, 1000);
				}
				tiMonitor.enableEnhancedTagSupport();
				try {
					tiMonitor.enableSpaSupport();
				} catch (err) {
					console.log(err.message);
					jeErrorObj = {
						message: err.message
					};
					tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
				}
				var tiDomLoadInterval = setInterval(function () {
					isDomLoaded = tiMonitor.sendData.waitForDomLoad();
					if(isDomLoaded){
						clearInterval(tiDomLoadInterval);
					}
				}, 1000);
				setInterval(function () {tiMonitor.sendData.fire()}, 1000);
			}
		}
	}
}
tiMonitor.initializeMain();
 }