if(typeof JSON!=='object'){JSON={};};(function(){'use strict';function f(n){return n<10?'0'+n:n;};if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z':null;};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf();};};var cx,escapable,gap,indent,meta,rep;function quote(aa){escapable.lastIndex=0;return escapable.test(aa)?'"'+aa.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+aa+'"';};function str(ba,ca){var i,k,v,length,mind=gap,partial,value=ca[ba];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(ba);}
if(typeof rep==='function'){value=rep.call(ca,ba,value);}
switch(typeof value){case 'string':return quote(value);case 'number':return isFinite(value)?String(value):'null';case 'boolean':case 'null':return String(value);case 'object':if(!value){return 'null';}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==='string'){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}};if(typeof JSON.stringify!=='function'){escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};JSON.stringify=function(da,ea,fa){var i;gap='';indent='';if(typeof fa==='number'){for(i=0;i<fa;i+=1){indent+=' ';}}
else if(typeof fa==='string'){indent=fa;}
rep=ea;if(ea&&typeof ea!=='function'&&(typeof ea!=='object'||typeof ea.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':da});};};if(typeof JSON.parse!=='function'){cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;JSON.parse=function(ga,ha){var j;function walk(ia,ja){var k,v,value=ia[ja];if(value&&typeof value==='object'){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}
else{delete value[k];}}}}
return ha.call(ia,ja,value);}
ga=String(ga);cx.lastIndex=0;if(cx.test(ga)){ga=ga.replace(cx,function(a){return '\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}
if(/^[\],:{}\s]*$/.test(ga.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+ga+')');return typeof ha==='function'?walk({'':j},''):j;}
throw new SyntaxError('JSON.parse');};};}());