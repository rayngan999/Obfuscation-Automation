ï»¿
if(typeof JSON2!=='object'&&typeof window.JSON==='object'&&window.JSON.stringify&&window.JSON.parse){JSON2=window.JSON;}else{(function(){var exports={};(function(){var isLoader=typeof define==="function"&&define.amd;var objectTypes={"function":true,"object":true};var freeExports=objectTypes[typeof exports]&&exports&&!exports.nodeType&&exports;var root=objectTypes[typeof window]&&window||this,freeGlobal=freeExports&&objectTypes[typeof module]&&module&&!module.nodeType&&typeof global=="object"&&global;if(freeGlobal&&(freeGlobal["global"]===freeGlobal||freeGlobal["window"]===freeGlobal||freeGlobal["self"]===freeGlobal)){root=freeGlobal;}
function runInContext(context,exports){context||(context=root["Object"]());exports||(exports=root["Object"]());var Number=context["Number"]||root["Number"],String=context["String"]||root["String"],Object=context["Object"]||root["Object"],Date=context["Date"]||root["Date"],SyntaxError=context["SyntaxError"]||root["SyntaxError"],TypeError=context["TypeError"]||root["TypeError"],Math=context["Math"]||root["Math"],nativeJSON=context["JSON"]||root["JSON"];if(typeof nativeJSON=="object"&&nativeJSON){exports.stringify=nativeJSON.stringify;exports.parse=nativeJSON.parse;}
var objectProto=Object.prototype,getClass=objectProto.toString,isProperty,forEach,undef;var isExtended=new Date(-3509827334573292);try{isExtended=isExtended.getUTCFullYear()==-109252&&isExtended.getUTCMonth()===0&&isExtended.getUTCDate()===1&&isExtended.getUTCHours()==10&&isExtended.getUTCMinutes()==37&&isExtended.getUTCSeconds()==6&&isExtended.getUTCMilliseconds()==708;}catch(exception){}
function has(name){if(has[name]!==undef){return has[name];}
var isSupported;if(name=="bug-string-char-index"){isSupported="a"[0]!="a";}else if(name=="json"){isSupported=has("json-stringify")&&has("json-parse");}else{var value,serialized='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';if(name=="json-stringify"){var stringify=exports.stringify,stringifySupported=typeof stringify=="function"&&isExtended;if(stringifySupported){(value=function(){return 1;}).toJSON=value;try{stringifySupported=stringify(0)==="0"&&stringify(new Number())==="0"&&stringify(new String())=='""'&&stringify(getClass)===undef&&stringify(undef)===undef&&stringify()===undef&&stringify(value)==="1"&&stringify([value])=="[1]"&&stringify([undef])=="[null]"&&stringify(null)=="null"&&stringify([undef,getClass,null])=="[null,null,null]"&&stringify({"a":[value,true,false,null,"\x00\b\n\f\r\t"]})==serialized&&stringify(null,value)==="1"&&stringify([1,2],null,1)=="[\n 1,\n 2\n]"&&stringify(new Date(-8.64e15))=='"-271821-04-20T00:00:00.000Z"'&&stringify(new Date(8.64e15))=='"+275760-09-13T00:00:00.000Z"'&&stringify(new Date(-621987552e5))=='"-000001-01-01T00:00:00.000Z"'&&stringify(new Date(-1))=='"1969-12-31T23:59:59.999Z"';}catch(exception){stringifySupported=false;}}
isSupported=stringifySupported;}
if(name=="json-parse"){var parse=exports.parse;if(typeof parse=="function"){try{if(parse("0")===0&&!parse(false)){value=parse(serialized);var parseSupported=value["a"].length==5&&value["a"][0]===1;if(parseSupported){try{parseSupported=!parse('"\t"');}catch(exception){}
if(parseSupported){try{parseSupported=parse("01")!==1;}catch(exception){}}
if(parseSupported){try{parseSupported=parse("1.")!==1;}catch(exception){}}}}}catch(exception){parseSupported=false;}}
isSupported=parseSupported;}}
return has[name]=!!isSupported;}
if(!has("json")){var functionClass="[object Function]",dateClass="[object Date]",numberClass="[object Number]",stringClass="[object String]",arrayClass="[object Array]",booleanClass="[object Boolean]";var charIndexBuggy=has("bug-string-char-index");if(!isExtended){var floor=Math.floor;var Months=[0,31,59,90,120,151,181,212,243,273,304,334];var getDay=function(year,month){return Months[month]+365*(year-1970)+floor((year-1969+(month=+(month>1)))/4)-floor((year-1901+month)/100)+floor((year-1601+month)/400);};}
if(!(isProperty=objectProto.hasOwnProperty)){isProperty=function(property){var members={},constructor;if((members.__proto__=null,members.__proto__={"toString":1},members).toString!=getClass){isProperty=function(property){var original=this.__proto__,result=property in(this.__proto__=null,this);this.__proto__=original;return result;};}else{constructor=members.constructor;isProperty=function(property){var parent=(this.constructor||constructor).prototype;return property in this&&!(property in parent&&this[property]===parent[property]);};}
members=null;return isProperty.call(this,property);};}
forEach=function(object,callback){var size=0,Properties,members,property;(Properties=function(){this.valueOf=0;}).prototype.valueOf=0;members=new Properties();for(property in members){if(isProperty.call(members,property)){size++;}}
Properties=members=null;if(!size){members=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"];forEach=function(object,callback){var isFunction=getClass.call(object)==functionClass,property,length;var hasProperty=!isFunction&&typeof object.constructor!="function"&&objectTypes[typeof object.hasOwnProperty]&&object.hasOwnProperty||isProperty;for(property in object){if(!(isFunction&&property=="prototype")&&hasProperty.call(object,property)){callback(property);}}
for(length=members.length;property=members[--length];hasProperty.call(object,property)&&callback(property));};}else if(size==2){forEach=function(object,callback){var members={},isFunction=getClass.call(object)==functionClass,property;for(property in object){if(!(isFunction&&property=="prototype")&&!isProperty.call(members,property)&&(members[property]=1)&&isProperty.call(object,property)){callback(property);}}};}else{forEach=function(object,callback){var isFunction=getClass.call(object)==functionClass,property,isConstructor;for(property in object){if(!(isFunction&&property=="prototype")&&isProperty.call(object,property)&&!(isConstructor=property==="constructor")){callback(property);}}
if(isConstructor||isProperty.call(object,(property="constructor"))){callback(property);}};}
return forEach(object,callback);};if(!has("json-stringify")){var Escapes={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"};var leadingZeroes="000000";var toPaddedString=function(width,value){return(leadingZeroes+(value||0)).slice(-width);};var unicodePrefix="\\u00";var quote=function(value){var result='"',index=0,length=value.length,useCharIndex=!charIndexBuggy||length>10;var symbols=useCharIndex&&(charIndexBuggy?value.split(""):value);for(;index<length;index++){var charCode=value.charCodeAt(index);switch(charCode){case 8:case 9:case 10:case 12:case 13:case 34:case 92:result+=Escapes[charCode];break;default:if(charCode<32){result+=unicodePrefix+toPaddedString(2,charCode.toString(16));break;}
result+=useCharIndex?symbols[index]:value.charAt(index);}}
return result+'"';};var serialize=function(property,object,callback,properties,whitespace,indentation,stack){var value,className,year,month,date,time,hours,minutes,seconds,milliseconds,results,element,index,length,prefix,result;try{value=object[property];}catch(exception){}
if(typeof value=="object"&&value){className=getClass.call(value);if(className==dateClass&&!isProperty.call(value,"toJSON")){if(value>-1/0&&value<1/0){if(getDay){date=floor(value/864e5);for(year=floor(date/365.2425)+1970-1;getDay(year+1,0)<=date;year++);for(month=floor((date-getDay(year,0))/30.42);getDay(year,month+1)<=date;month++);date=1+date-getDay(year,month);time=(value%864e5+864e5)%864e5;hours=floor(time/36e5)%24;minutes=floor(time/6e4)%60;seconds=floor(time/1e3)%60;milliseconds=time%1e3;}else{year=value.getUTCFullYear();month=value.getUTCMonth();date=value.getUTCDate();hours=value.getUTCHours();minutes=value.getUTCMinutes();seconds=value.getUTCSeconds();milliseconds=value.getUTCMilliseconds();}
value=(year<=0||year>=1e4?(year<0?"-":"+")+toPaddedString(6,year<0?-year:year):toPaddedString(4,year))+"-"+toPaddedString(2,month+1)+"-"+toPaddedString(2,date)+"T"+toPaddedString(2,hours)+":"+toPaddedString(2,minutes)+":"+toPaddedString(2,seconds)+"."+toPaddedString(3,milliseconds)+"Z";}else{value=null;}}else if(typeof value.toJSON=="function"&&((className!=numberClass&&className!=stringClass&&className!=arrayClass)||isProperty.call(value,"toJSON"))){value=value.toJSON(property);}}
if(callback){value=callback.call(object,property,value);}
if(value===null){return"null";}
className=getClass.call(value);if(className==booleanClass){return""+value;}else if(className==numberClass){return value>-1/0&&value<1/0?""+value:"null";}else if(className==stringClass){return quote(""+value);}
if(typeof value=="object"){for(length=stack.length;length--;){if(stack[length]===value){throw TypeError();}}
stack.push(value);results=[];prefix=indentation;indentation+=whitespace;if(className==arrayClass){for(index=0,length=value.length;index<length;index++){element=serialize(index,value,callback,properties,whitespace,indentation,stack);results.push(element===undef?"null":element);}
result=results.length?(whitespace?"[\n"+indentation+results.join(",\n"+indentation)+"\n"+prefix+"]":("["+results.join(",")+"]")):"[]";}else{forEach(properties||value,function(property){var element=serialize(property,value,callback,properties,whitespace,indentation,stack);if(element!==undef){results.push(quote(property)+":"+(whitespace?" ":"")+element);}});result=results.length?(whitespace?"{\n"+indentation+results.join(",\n"+indentation)+"\n"+prefix+"}":("{"+results.join(",")+"}")):"{}";}
stack.pop();return result;}};exports.stringify=function(source,filter,width){var whitespace,callback,properties,className;if(objectTypes[typeof filter]&&filter){if((className=getClass.call(filter))==functionClass){callback=filter;}else if(className==arrayClass){properties={};for(var index=0,length=filter.length,value;index<length;value=filter[index++],((className=getClass.call(value)),className==stringClass||className==numberClass)&&(properties[value]=1));}}
if(width){if((className=getClass.call(width))==numberClass){if((width-=width%1)>0){for(whitespace="",width>10&&(width=10);whitespace.length<width;whitespace+=" ");}}else if(className==stringClass){whitespace=width.length<=10?width:width.slice(0,10);}}
return serialize("",(value={},value[""]=source,value),callback,properties,whitespace,"",[]);};}
if(!has("json-parse")){var fromCharCode=String.fromCharCode;var Unescapes={92:"\\",34:'"',47:"/",98:"\b",116:"\t",110:"\n",102:"\f",114:"\r"};var Index,Source;var abort=function(){Index=Source=null;throw SyntaxError();};var lex=function(){var source=Source,length=source.length,value,begin,position,isSigned,charCode;while(Index<length){charCode=source.charCodeAt(Index);switch(charCode){case 9:case 10:case 13:case 32:Index++;break;case 123:case 125:case 91:case 93:case 58:case 44:value=charIndexBuggy?source.charAt(Index):source[Index];Index++;return value;case 34:for(value="@",Index++;Index<length;){charCode=source.charCodeAt(Index);if(charCode<32){abort();}else if(charCode==92){charCode=source.charCodeAt(++Index);switch(charCode){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:value+=Unescapes[charCode];Index++;break;case 117:begin=++Index;for(position=Index+4;Index<position;Index++){charCode=source.charCodeAt(Index);if(!(charCode>=48&&charCode<=57||charCode>=97&&charCode<=102||charCode>=65&&charCode<=70)){abort();}}
value+=fromCharCode("0x"+source.slice(begin,Index));break;default:abort();}}else{if(charCode==34){break;}
charCode=source.charCodeAt(Index);begin=Index;while(charCode>=32&&charCode!=92&&charCode!=34){charCode=source.charCodeAt(++Index);}
value+=source.slice(begin,Index);}}
if(source.charCodeAt(Index)==34){Index++;return value;}
abort();default:begin=Index;if(charCode==45){isSigned=true;charCode=source.charCodeAt(++Index);}
if(charCode>=48&&charCode<=57){if(charCode==48&&((charCode=source.charCodeAt(Index+1)),charCode>=48&&charCode<=57)){abort();}
isSigned=false;for(;Index<length&&((charCode=source.charCodeAt(Index)),charCode>=48&&charCode<=57);Index++);if(source.charCodeAt(Index)==46){position=++Index;for(;position<length&&((charCode=source.charCodeAt(position)),charCode>=48&&charCode<=57);position++);if(position==Index){abort();}
Index=position;}
charCode=source.charCodeAt(Index);if(charCode==101||charCode==69){charCode=source.charCodeAt(++Index);if(charCode==43||charCode==45){Index++;}
for(position=Index;position<length&&((charCode=source.charCodeAt(position)),charCode>=48&&charCode<=57);position++);if(position==Index){abort();}
Index=position;}
return+source.slice(begin,Index);}
if(isSigned){abort();}
if(source.slice(Index,Index+4)=="true"){Index+=4;return true;}else if(source.slice(Index,Index+5)=="false"){Index+=5;return false;}else if(source.slice(Index,Index+4)=="null"){Index+=4;return null;}
abort();}}
return"$";};var get=function(value){var results,hasMembers;if(value=="$"){abort();}
if(typeof value=="string"){if((charIndexBuggy?value.charAt(0):value[0])=="@"){return value.slice(1);}
if(value=="["){results=[];for(;;hasMembers||(hasMembers=true)){value=lex();if(value=="]"){break;}
if(hasMembers){if(value==","){value=lex();if(value=="]"){abort();}}else{abort();}}
if(value==","){abort();}
results.push(get(value));}
return results;}else if(value=="{"){results={};for(;;hasMembers||(hasMembers=true)){value=lex();if(value=="}"){break;}
if(hasMembers){if(value==","){value=lex();if(value=="}"){abort();}}else{abort();}}
if(value==","||typeof value!="string"||(charIndexBuggy?value.charAt(0):value[0])!="@"||lex()!=":"){abort();}
results[value.slice(1)]=get(lex());}
return results;}
abort();}
return value;};var update=function(source,property,callback){var element=walk(source,property,callback);if(element===undef){delete source[property];}else{source[property]=element;}};var walk=function(source,property,callback){var value=source[property],length;if(typeof value=="object"&&value){if(getClass.call(value)==arrayClass){for(length=value.length;length--;){update(value,length,callback);}}else{forEach(value,function(property){update(value,property,callback);});}}
return callback.call(source,property,value);};exports.parse=function(source,callback){var result,value;Index=0;Source=""+source;result=get(lex());if(lex()!="$"){abort();}
Index=Source=null;return callback&&getClass.call(callback)==functionClass?walk((value={},value[""]=result,value),"",callback):result;};}}
exports["runInContext"]=runInContext;return exports;}
if(freeExports&&!isLoader){runInContext(root,freeExports);}else{var nativeJSON=root.JSON,previousJSON=root["JSON3"],isRestored=false;var JSON3=runInContext(root,(root["JSON3"]={"noConflict":function(){if(!isRestored){isRestored=true;root.JSON=nativeJSON;root["JSON3"]=previousJSON;nativeJSON=previousJSON=null;}
return JSON3;}}));root.JSON={"parse":JSON3.parse,"stringify":JSON3.stringify};}
if(isLoader){define(function(){return JSON3;});}}).call(this);JSON2=exports;})();}
if(typeof _atsc_paq!=='object'){_atsc_paq=[];}
if(typeof window.Atsc!=='object'){window.Atsc=(function(){'use strict';var expireDateTime,plugins={},documentAlias=document,navigatorAlias=navigator,screenAlias=screen,windowAlias=window,performanceAlias=windowAlias.performance||windowAlias.mozPerformance||windowAlias.msPerformance||windowAlias.webkitPerformance,encodeWrapper=windowAlias.encodeURIComponent,decodeWrapper=windowAlias.decodeURIComponent,urldecode=unescape,asyncTracker,iterator,Atsc;function safeDecodeWrapper(url){try{return decodeWrapper(url);}catch(e){return unescape(url);}}
function stringifyJsonValue(val){if(!isDefined(val)||!val.length){return' ';}
return"'"+val.toString()+"'";}
function isDefined(property){var propertyType=typeof property;return propertyType!=='undefined';}
function isFunction(property){return typeof property==='function';}
function isObject(property){return typeof property==='object';}
function isString(property){return typeof property==='string'||property instanceof String;}
function isObjectEmpty(property){if(!property){return true;}
var i;var isEmpty=true;for(i in property){if(Object.prototype.hasOwnProperty.call(property,i)){isEmpty=false;}}
return isEmpty;}
function apply(){var i,f,parameterArray;for(i=0;i<arguments.length;i+=1){parameterArray=arguments[i];f=parameterArray.shift();if(isString(f)){asyncTracker[f].apply(asyncTracker,parameterArray);}else{f.apply(asyncTracker,parameterArray);}}}
function addEventListener(element,eventType,eventHandler,useCapture){if(element.addEventListener){element.addEventListener(eventType,eventHandler,useCapture);return true;}
if(element.attachEvent){return element.attachEvent('on'+eventType,eventHandler);}
element['on'+eventType]=eventHandler;}
function executePluginMethod(methodName,callback){var result='',i,pluginMethod;for(i in plugins){if(Object.prototype.hasOwnProperty.call(plugins,i)){pluginMethod=plugins[i][methodName];if(isFunction(pluginMethod)){result+=pluginMethod(callback);}}}
return result;}
function beforeUnloadHandler(){var now;executePluginMethod('unload');if(expireDateTime){do{now=new Date();}while(now.getTimeAlias()<expireDateTime);}}
function loadScript(src,onLoad){var script=documentAlias.createElement('script');script.type='text/javascript';script.src=src;if(script.readyState){script.onreadystatechange=function(){var state=this.readyState;if(state==='loaded'||state==='complete'){script.onreadystatechange=null;onLoad();}};}else{script.onload=onLoad;}
documentAlias.getElementsByTagName('head')[0].appendChild(script);}
function getReferrer(){var referrer='';try{referrer=windowAlias.top.document.referrer;}catch(e){if(windowAlias.parent){try{referrer=windowAlias.parent.document.referrer;}catch(e2){referrer='';}}}
if(referrer===''){referrer=documentAlias.referrer;}
return referrer;}
function getProtocolScheme(url){var e=new RegExp('^([a-z]+):'),matches=e.exec(url);return matches?matches[1]:null;}
function getHostName(url){var e=new RegExp('^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)'),matches=e.exec(url);return matches?matches[1]:url;}
function getParameter(url,name){var regexSearch="[\\?&#]"+name+"=([^&#]*)";var regex=new RegExp(regexSearch);var results=regex.exec(url);return results?decodeWrapper(results[1]):'';}
function utf8_encode(argString){return unescape(encodeWrapper(argString));}
function sha1(str){var
rotate_left=function(n,s){return(n<<s)|(n>>>(32-s));},cvt_hex=function(val){var strout='',i,v;for(i=7;i>=0;i--){v=(val>>>(i*4))&0x0f;strout+=v.toString(16);}
return strout;},blockstart,i,j,W=[],H0=0x67452301,H1=0xEFCDAB89,H2=0x98BADCFE,H3=0x10325476,H4=0xC3D2E1F0,A,B,C,D,E,temp,str_len,word_array=[];str=utf8_encode(str);str_len=str.length;for(i=0;i<str_len-3;i+=4){j=str.charCodeAt(i)<<24|str.charCodeAt(i+1)<<16|str.charCodeAt(i+2)<<8|str.charCodeAt(i+3);word_array.push(j);}
switch(str_len&3){case 0:i=0x080000000;break;case 1:i=str.charCodeAt(str_len-1)<<24|0x0800000;break;case 2:i=str.charCodeAt(str_len-2)<<24|str.charCodeAt(str_len-1)<<16|0x08000;break;case 3:i=str.charCodeAt(str_len-3)<<24|str.charCodeAt(str_len-2)<<16|str.charCodeAt(str_len-1)<<8|0x80;break;}
word_array.push(i);while((word_array.length&15)!==14){word_array.push(0);}
word_array.push(str_len>>>29);word_array.push((str_len<<3)&0x0ffffffff);for(blockstart=0;blockstart<word_array.length;blockstart+=16){for(i=0;i<16;i++){W[i]=word_array[blockstart+i];}
for(i=16;i<=79;i++){W[i]=rotate_left(W[i-3]^W[i-8]^W[i-14]^W[i-16],1);}
A=H0;B=H1;C=H2;D=H3;E=H4;for(i=0;i<=19;i++){temp=(rotate_left(A,5)+((B&C)|(~B&D))+E+W[i]+0x5A827999)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;}
for(i=20;i<=39;i++){temp=(rotate_left(A,5)+(B^C^D)+E+W[i]+0x6ED9EBA1)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;}
for(i=40;i<=59;i++){temp=(rotate_left(A,5)+((B&C)|(B&D)|(C&D))+E+W[i]+0x8F1BBCDC)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;}
for(i=60;i<=79;i++){temp=(rotate_left(A,5)+(B^C^D)+E+W[i]+0xCA62C1D6)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;}
H0=(H0+A)&0x0ffffffff;H1=(H1+B)&0x0ffffffff;H2=(H2+C)&0x0ffffffff;H3=(H3+D)&0x0ffffffff;H4=(H4+E)&0x0ffffffff;}
temp=cvt_hex(H0)+cvt_hex(H1)+cvt_hex(H2)+cvt_hex(H3)+cvt_hex(H4);return temp.toLowerCase();}
function urlFixup(hostName,href,referrer){if(!hostName){hostName='';}
if(!href){href='';}
if(hostName==='translate.googleusercontent.com'){if(referrer===''){referrer=href;}
href=getParameter(href,'u');hostName=getHostName(href);}else if(hostName==='cc.bingj.com'||hostName==='webcache.googleusercontent.com'||hostName.slice(0,5)==='74.6.'){href=documentAlias.links[0].href;hostName=getHostName(href);}
return[hostName,href,referrer];}
function domainFixup(domain){var dl=domain.length;if(domain.charAt(--dl)==='.'){domain=domain.slice(0,dl);}
if(domain.slice(0,2)==='*.'){domain=domain.slice(1);}
if(domain.indexOf('/')!==-1){domain=domain.substr(0,domain.indexOf('/'));}
return domain;}
function titleFixup(title){title=title&&title.text?title.text:title;if(!isString(title)){var tmp=documentAlias.getElementsByTagName('title');if(tmp&&isDefined(tmp[0])){title=tmp[0].text;}}
return title;}
function getChildrenFromNode(node){if(!node){return[];}
if(!isDefined(node.children)&&isDefined(node.childNodes)){return node.children;}
if(isDefined(node.children)){return node.children;}
return[];}
function containsNodeElement(node,containedNode){if(!node||!containedNode){return false;}
if(node.contains){return node.contains(containedNode);}
if(node===containedNode){return true;}
if(node.compareDocumentPosition){return!!(node.compareDocumentPosition(containedNode)&16);}
return false;}
function indexOfArray(theArray,searchElement){if(theArray&&theArray.indexOf){return theArray.indexOf(searchElement);}
if(!isDefined(theArray)||theArray===null){return-1;}
if(!theArray.length){return-1;}
var len=theArray.length;if(len===0){return-1;}
var k=0;while(k<len){if(theArray[k]===searchElement){return k;}
k++;}
return-1;}
function stringEndsWith(str,suffix){str=String(str);return str.indexOf(suffix,str.length-suffix.length)!==-1;}
function stringContains(str,needle){str=String(str);return str.indexOf(needle)!==-1;}
function removeCharactersFromEndOfString(str,numCharactersToRemove){str=String(str);return str.substr(0,str.length-numCharactersToRemove);}
function isVisible(node){if(!node){return false;}
function _getStyle(el,property){if(windowAlias.getComputedStyle){return documentAlias.defaultView.getComputedStyle(el,null)[property];}
if(el.currentStyle){return el.currentStyle[property];}}
function _elementInDocument(element){element=element.parentNode;while(element){if(element===documentAlias){return true;}
element=element.parentNode;}
return false;}
function _isVisible(el,t,r,b,l,w,h){var p=el.parentNode,VISIBLE_PADDING=1;if(!_elementInDocument(el)){return false;}
if(9===p.nodeType){return true;}
if('0'===_getStyle(el,'opacity')||'none'===_getStyle(el,'display')||'hidden'===_getStyle(el,'visibility')){return false;}
if(!isDefined(t)||!isDefined(r)||!isDefined(b)||!isDefined(l)||!isDefined(w)||!isDefined(h)){t=el.offsetTop;l=el.offsetLeft;b=t+el.offsetHeight;r=l+el.offsetWidth;w=el.offsetWidth;h=el.offsetHeight;}
if(node===el&&(0===h||0===w)&&'hidden'===_getStyle(el,'overflow')){return false;}
if(p){if(('hidden'===_getStyle(p,'overflow')||'scroll'===_getStyle(p,'overflow'))){if(l+VISIBLE_PADDING>p.offsetWidth+p.scrollLeft||l+w-VISIBLE_PADDING<p.scrollLeft||t+VISIBLE_PADDING>p.offsetHeight+p.scrollTop||t+h-VISIBLE_PADDING<p.scrollTop){return false;}}
if(el.offsetParent===p){l+=p.offsetLeft;t+=p.offsetTop;}
return _isVisible(p,t,r,b,l,w,h);}
return true;}
return _isVisible(node);}
var query={htmlCollectionToArray:function(foundNodes){var nodes=[],index;if(!foundNodes||!foundNodes.length){return nodes;}
for(index=0;index<foundNodes.length;index++){nodes.push(foundNodes[index]);}
return nodes;},find:function(selector){if(!document.querySelectorAll||!selector){return[];}
var foundNodes=document.querySelectorAll(selector);return this.htmlCollectionToArray(foundNodes);},findMultiple:function(selectors){if(!selectors||!selectors.length){return[];}
var index,foundNodes;var nodes=[];for(index=0;index<selectors.length;index++){foundNodes=this.find(selectors[index]);nodes=nodes.concat(foundNodes);}
nodes=this.makeNodesUnique(nodes);return nodes;},findNodesByTagName:function(node,tagName){if(!node||!tagName||!node.getElementsByTagName){return[];}
var foundNodes=node.getElementsByTagName(tagName);return this.htmlCollectionToArray(foundNodes);},makeNodesUnique:function(nodes){var copy=[].concat(nodes);nodes.sort(function(n1,n2){if(n1===n2){return 0;}
var index1=indexOfArray(copy,n1);var index2=indexOfArray(copy,n2);if(index1===index2){return 0;}
return index1>index2?-1:1;});if(nodes.length<=1){return nodes;}
var index=0;var numDuplicates=0;var duplicates=[];var node;node=nodes[index++];while(node){if(node===nodes[index]){numDuplicates=duplicates.push(index);}
node=nodes[index++]||null;}
while(numDuplicates--){nodes.splice(duplicates[numDuplicates],1);}
return nodes;},getAttributeValueFromNode:function(node,attributeName){if(!this.hasNodeAttribute(node,attributeName)){return;}
if(node&&node.getAttribute){return node.getAttribute(attributeName);}
if(!node||!node.attributes){return;}
var typeOfAttr=(typeof node.attributes[attributeName]);if('undefined'===typeOfAttr){return;}
if(node.attributes[attributeName].value){return node.attributes[attributeName].value;}
if(node.attributes[attributeName].nodeValue){return node.attributes[attributeName].nodeValue;}
var index;var attrs=node.attributes;if(!attrs){return;}
for(index=0;index<attrs.length;index++){if(attrs[index].nodeName===attributeName){return attrs[index].nodeValue;}}
return null;},hasNodeAttributeWithValue:function(node,attributeName){var value=this.getAttributeValueFromNode(node,attributeName);return!!value;},hasNodeAttribute:function(node,attributeName){if(node&&node.hasAttribute){return node.hasAttribute(attributeName);}
if(node&&node.attributes){var typeOfAttr=(typeof node.attributes[attributeName]);return'undefined'!==typeOfAttr;}
return false;},hasNodeCssClass:function(node,klassName){if(node&&klassName&&node.className){var classes=typeof node.className==="string"?node.className.split(' '):[];if(-1!==indexOfArray(classes,klassName)){return true;}}
return false;},findNodesHavingAttribute:function(nodeToSearch,attributeName,nodes){if(!nodes){nodes=[];}
if(!nodeToSearch||!attributeName){return nodes;}
var children=getChildrenFromNode(nodeToSearch);if(!children||!children.length){return nodes;}
var index,child;for(index=0;index<children.length;index++){child=children[index];if(this.hasNodeAttribute(child,attributeName)){nodes.push(child);}
nodes=this.findNodesHavingAttribute(child,attributeName,nodes);}
return nodes;},findFirstNodeHavingAttribute:function(node,attributeName){if(!node||!attributeName){return;}
if(this.hasNodeAttribute(node,attributeName)){return node;}
var nodes=this.findNodesHavingAttribute(node,attributeName);if(nodes&&nodes.length){return nodes[0];}},findFirstNodeHavingAttributeWithValue:function(node,attributeName){if(!node||!attributeName){return;}
if(this.hasNodeAttributeWithValue(node,attributeName)){return node;}
var nodes=this.findNodesHavingAttribute(node,attributeName);if(!nodes||!nodes.length){return;}
var index;for(index=0;index<nodes.length;index++){if(this.getAttributeValueFromNode(nodes[index],attributeName)){return nodes[index];}}},findNodesHavingCssClass:function(nodeToSearch,className,nodes){if(!nodes){nodes=[];}
if(!nodeToSearch||!className){return nodes;}
if(nodeToSearch.getElementsByClassName){var foundNodes=nodeToSearch.getElementsByClassName(className);return this.htmlCollectionToArray(foundNodes);}
var children=getChildrenFromNode(nodeToSearch);if(!children||!children.length){return[];}
var index,child;for(index=0;index<children.length;index++){child=children[index];if(this.hasNodeCssClass(child,className)){nodes.push(child);}
nodes=this.findNodesHavingCssClass(child,className,nodes);}
return nodes;},findFirstNodeHavingClass:function(node,className){if(!node||!className){return;}
if(this.hasNodeCssClass(node,className)){return node;}
var nodes=this.findNodesHavingCssClass(node,className);if(nodes&&nodes.length){return nodes[0];}},isLinkElement:function(node){if(!node){return false;}
var elementName=String(node.nodeName).toLowerCase();var linkElementNames=['a','area'];var pos=indexOfArray(linkElementNames,elementName);return pos!==-1;},setAnyAttribute:function(node,attrName,attrValue){if(!node||!attrName){return;}
if(node.setAttribute){node.setAttribute(attrName,attrValue);}else{node[attrName]=attrValue;}}};var content={CONTENT_ATTR:'data-track-content',CONTENT_CLASS:'atscTrackContent',CONTENT_NAME_ATTR:'data-content-name',CONTENT_PIECE_ATTR:'data-content-piece',CONTENT_PIECE_CLASS:'atscContentPiece',CONTENT_TARGET_ATTR:'data-content-target',CONTENT_TARGET_CLASS:'atscContentTarget',CONTENT_IGNOREINTERACTION_ATTR:'data-content-ignoreinteraction',CONTENT_IGNOREINTERACTION_CLASS:'atscContentIgnoreInteraction',location:undefined,findContentNodes:function(){var cssSelector='.'+this.CONTENT_CLASS;var attrSelector='['+this.CONTENT_ATTR+']';var contentNodes=query.findMultiple([cssSelector,attrSelector]);return contentNodes;},findContentNodesWithinNode:function(node){if(!node){return[];}
var nodes1=query.findNodesHavingCssClass(node,this.CONTENT_CLASS);var nodes2=query.findNodesHavingAttribute(node,this.CONTENT_ATTR);if(nodes2&&nodes2.length){var index;for(index=0;index<nodes2.length;index++){nodes1.push(nodes2[index]);}}
if(query.hasNodeAttribute(node,this.CONTENT_ATTR)){nodes1.push(node);}else if(query.hasNodeCssClass(node,this.CONTENT_CLASS)){nodes1.push(node);}
nodes1=query.makeNodesUnique(nodes1);return nodes1;},findParentContentNode:function(anyNode){if(!anyNode){return;}
var node=anyNode;var counter=0;while(node&&node!==documentAlias&&node.parentNode){if(query.hasNodeAttribute(node,this.CONTENT_ATTR)){return node;}
if(query.hasNodeCssClass(node,this.CONTENT_CLASS)){return node;}
node=node.parentNode;if(counter>1000){break;}
counter++;}},findPieceNode:function(node){var contentPiece;contentPiece=query.findFirstNodeHavingAttribute(node,this.CONTENT_PIECE_ATTR);if(!contentPiece){contentPiece=query.findFirstNodeHavingClass(node,this.CONTENT_PIECE_CLASS);}
if(contentPiece){return contentPiece;}
return node;},findTargetNodeNoDefault:function(node){if(!node){return;}
var target=query.findFirstNodeHavingAttributeWithValue(node,this.CONTENT_TARGET_ATTR);if(target){return target;}
target=query.findFirstNodeHavingAttribute(node,this.CONTENT_TARGET_ATTR);if(target){return target;}
target=query.findFirstNodeHavingClass(node,this.CONTENT_TARGET_CLASS);if(target){return target;}},findTargetNode:function(node){var target=this.findTargetNodeNoDefault(node);if(target){return target;}
return node;},findContentName:function(node){if(!node){return;}
var nameNode=query.findFirstNodeHavingAttributeWithValue(node,this.CONTENT_NAME_ATTR);if(nameNode){return query.getAttributeValueFromNode(nameNode,this.CONTENT_NAME_ATTR);}
var contentPiece=this.findContentPiece(node);if(contentPiece){return this.removeDomainIfIsInLink(contentPiece);}
if(query.hasNodeAttributeWithValue(node,'title')){return query.getAttributeValueFromNode(node,'title');}
var clickUrlNode=this.findPieceNode(node);if(query.hasNodeAttributeWithValue(clickUrlNode,'title')){return query.getAttributeValueFromNode(clickUrlNode,'title');}
var targetNode=this.findTargetNode(node);if(query.hasNodeAttributeWithValue(targetNode,'title')){return query.getAttributeValueFromNode(targetNode,'title');}},findContentPiece:function(node){if(!node){return;}
var nameNode=query.findFirstNodeHavingAttributeWithValue(node,this.CONTENT_PIECE_ATTR);if(nameNode){return query.getAttributeValueFromNode(nameNode,this.CONTENT_PIECE_ATTR);}
var contentNode=this.findPieceNode(node);var media=this.findMediaUrlInNode(contentNode);if(media){return this.toAbsoluteUrl(media);}},findContentTarget:function(node){if(!node){return;}
var targetNode=this.findTargetNode(node);if(query.hasNodeAttributeWithValue(targetNode,this.CONTENT_TARGET_ATTR)){return query.getAttributeValueFromNode(targetNode,this.CONTENT_TARGET_ATTR);}
var href;if(query.hasNodeAttributeWithValue(targetNode,'href')){href=query.getAttributeValueFromNode(targetNode,'href');return this.toAbsoluteUrl(href);}
var contentNode=this.findPieceNode(node);if(query.hasNodeAttributeWithValue(contentNode,'href')){href=query.getAttributeValueFromNode(contentNode,'href');return this.toAbsoluteUrl(href);}},isSameDomain:function(url){if(!url||!url.indexOf){return false;}
if(0===url.indexOf(this.getLocation().origin)){return true;}
var posHost=url.indexOf(this.getLocation().host);if(8>=posHost&&0<=posHost){return true;}
return false;},removeDomainIfIsInLink:function(text){var regexContainsProtocol='^https?:\/\/[^\/]+';var regexReplaceDomain='^.*\/\/[^\/]+';if(text&&text.search&&-1!==text.search(new RegExp(regexContainsProtocol))&&this.isSameDomain(text)){text=text.replace(new RegExp(regexReplaceDomain),'');if(!text){text='/';}}
return text;},findMediaUrlInNode:function(node){if(!node){return;}
var mediaElements=['img','embed','video','audio'];var elementName=node.nodeName.toLowerCase();if(-1!==indexOfArray(mediaElements,elementName)&&query.findFirstNodeHavingAttributeWithValue(node,'src')){var sourceNode=query.findFirstNodeHavingAttributeWithValue(node,'src');return query.getAttributeValueFromNode(sourceNode,'src');}
if(elementName==='object'&&query.hasNodeAttributeWithValue(node,'data')){return query.getAttributeValueFromNode(node,'data');}
if(elementName==='object'){var params=query.findNodesByTagName(node,'param');if(params&&params.length){var index;for(index=0;index<params.length;index++){if('movie'===query.getAttributeValueFromNode(params[index],'name')&&query.hasNodeAttributeWithValue(params[index],'value')){return query.getAttributeValueFromNode(params[index],'value');}}}
var embed=query.findNodesByTagName(node,'embed');if(embed&&embed.length){return this.findMediaUrlInNode(embed[0]);}}},trim:function(text){if(text&&String(text)===text){return text.replace(/^\s+|\s+$/g,'');}
return text;},isOrWasNodeInViewport:function(node){if(!node||!node.getBoundingClientRect||node.nodeType!==1){return true;}
var rect=node.getBoundingClientRect();var html=documentAlias.documentElement||{};var wasVisible=rect.top<0;if(wasVisible&&node.offsetTop){wasVisible=(node.offsetTop+rect.height)>0;}
var docWidth=html.clientWidth;if(windowAlias.innerWidth&&docWidth>windowAlias.innerWidth){docWidth=windowAlias.innerWidth;}
var docHeight=html.clientHeight;if(windowAlias.innerHeight&&docHeight>windowAlias.innerHeight){docHeight=windowAlias.innerHeight;}
return((rect.bottom>0||wasVisible)&&rect.right>0&&rect.left<docWidth&&((rect.top<docHeight)||wasVisible));},isNodeVisible:function(node){var isItVisible=isVisible(node);var isInViewport=this.isOrWasNodeInViewport(node);return isItVisible&&isInViewport;},buildInteractionRequestParams:function(interaction,name,piece,target){var params='';if(interaction){params+='c_i='+encodeWrapper(interaction);}
if(name){if(params){params+='&';}
params+='c_n='+encodeWrapper(name);}
if(piece){if(params){params+='&';}
params+='c_p='+encodeWrapper(piece);}
if(target){if(params){params+='&';}
params+='c_t='+encodeWrapper(target);}
return params;},buildImpressionRequestParams:function(name,piece,target){var params='c_n='+encodeWrapper(name)+'&c_p='+encodeWrapper(piece);if(target){params+='&c_t='+encodeWrapper(target);}
return params;},buildContentBlock:function(node){if(!node){return;}
var name=this.findContentName(node);var piece=this.findContentPiece(node);var target=this.findContentTarget(node);name=this.trim(name);piece=this.trim(piece);target=this.trim(target);return{name:name||'Unknown',piece:piece||'Unknown',target:target||''};},collectContent:function(contentNodes){if(!contentNodes||!contentNodes.length){return[];}
var contents=[];var index,contentBlock;for(index=0;index<contentNodes.length;index++){contentBlock=this.buildContentBlock(contentNodes[index]);if(isDefined(contentBlock)){contents.push(contentBlock);}}
return contents;},setLocation:function(location){this.location=location;},getLocation:function(){var locationAlias=this.location||windowAlias.location;if(!locationAlias.origin){locationAlias.origin=locationAlias.protocol+"//"+locationAlias.hostname+(locationAlias.port?':'+locationAlias.port:'');}
return locationAlias;},toAbsoluteUrl:function(url){if((!url||String(url)!==url)&&url!==''){return url;}
if(''===url){return this.getLocation().href;}
if(url.search(/^\/\//)!==-1){return this.getLocation().protocol+url;}
if(url.search(/:\/\//)!==-1){return url;}
if(0===url.indexOf('#')){return this.getLocation().origin+this.getLocation().pathname+url;}
if(0===url.indexOf('?')){return this.getLocation().origin+this.getLocation().pathname+url;}
if(0===url.search('^[a-zA-Z]{2,11}:')){return url;}
if(url.search(/^\//)!==-1){return this.getLocation().origin+url;}
var regexMatchDir='(.*\/)';var base=this.getLocation().origin+this.getLocation().pathname.match(new RegExp(regexMatchDir))[0];return base+url;},isUrlToCurrentDomain:function(url){var absoluteUrl=this.toAbsoluteUrl(url);if(!absoluteUrl){return false;}
var origin=this.getLocation().origin;if(origin===absoluteUrl){return true;}
if(0===String(absoluteUrl).indexOf(origin)){if(':'===String(absoluteUrl).substr(origin.length,1)){return false;}
return true;}
return false;},setHrefAttribute:function(node,url){if(!node||!url){return;}
query.setAnyAttribute(node,'href',url);},shouldIgnoreInteraction:function(targetNode){var hasAttr=query.hasNodeAttribute(targetNode,this.CONTENT_IGNOREINTERACTION_ATTR);var hasClass=query.hasNodeCssClass(targetNode,this.CONTENT_IGNOREINTERACTION_CLASS);return hasAttr||hasClass;}};function getAtscUrlForOverlay(trackerUrl,apiUrl){if(apiUrl){return apiUrl;}
if(stringContains(trackerUrl,'?')){var posQuery=trackerUrl.indexOf('?');trackerUrl=trackerUrl.slice(0,posQuery);}
if(stringEndsWith(trackerUrl,'atsc.php')){trackerUrl=removeCharactersFromEndOfString(trackerUrl,'atsc.php'.length);}else if(stringEndsWith(trackerUrl,'.php')){var lastSlash=trackerUrl.lastIndexOf('/');var includeLastSlash=1;trackerUrl=trackerUrl.slice(0,lastSlash+includeLastSlash);}
if(stringEndsWith(trackerUrl,'/js/')){trackerUrl=removeCharactersFromEndOfString(trackerUrl,'js/'.length);}
return trackerUrl;}
function isOverlaySession(configTrackerSiteId){var windowName='Atsc_Overlay';var referrerRegExp=new RegExp('index\\.php\\?module=Overlay&action=startOverlaySession'+'&idSite=([0-9]+)&period=([^&]+)&date=([^&]+)(&segment=.*)?$');var match=referrerRegExp.exec(documentAlias.referrer);if(match){var idsite=match[1];if(idsite!==String(configTrackerSiteId)){return false;}
var period=match[2],date=match[3],segment=match[4];if(!segment){segment='';}else if(segment.indexOf('&segment=')===0){segment=segment.substr('&segment='.length);}
windowAlias.name=windowName+'###'+period+'###'+date+'###'+segment;}
var windowNameParts=windowAlias.name.split('###');return windowNameParts.length===4&&windowNameParts[0]===windowName;}
function injectOverlayScripts(configTrackerUrl,configApiUrl,configTrackerSiteId){var windowNameParts=windowAlias.name.split('###'),period=windowNameParts[1],date=windowNameParts[2],segment=windowNameParts[3],atscUrl=getAtscUrlForOverlay(configTrackerUrl,configApiUrl);loadScript(atscUrl+'plugins/Overlay/client/client.js?v=1',function(){Atsc_Overlay_Client.initialize(atscUrl,configTrackerSiteId,period,date,segment);});}
function isInsideAnIframe(){if(isDefined(windowAlias.frameElement)){return(windowAlias.frameElement&&String(windowAlias.frameElement.nodeName).toLowerCase()==='iframe');}
try{return windowAlias.self!==windowAlias.top;}catch(e){return true;}}
function Tracker(trackerUrl,siteId,conversionUrl,conversionType,conversionValue,conversionReference){var
registeredHooks={},locationArray=urlFixup(documentAlias.domain,windowAlias.location.href,getReferrer()),domainAlias=domainFixup(locationArray[0]),locationHrefAlias=safeDecodeWrapper(locationArray[1]),configReferrerUrl=safeDecodeWrapper(locationArray[2]),enableJSErrorTracking=false,defaultRequestMethod='GET',configRequestMethod=defaultRequestMethod,defaultRequestContentType='application/x-www-form-urlencoded; charset=UTF-8',configRequestContentType=defaultRequestContentType,configTrackerUrl=trackerUrl||'',configApiUrl='',configAppendToTrackingUrl='',configTrackerSiteId=siteId||'',configConversionUrl=conversionUrl||'',configConversionType=conversionType||'',configConversionValue=conversionValue||'',configConversionReference=conversionReference||'',configUserId='',visitorUUID='',configCustomUrl,configTitle=documentAlias.title,configDownloadExtensions=['7z','aac','apk','arc','arj','asf','asx','avi','azw3','bin','csv','deb','dmg','doc','docx','epub','exe','flv','gif','gz','gzip','hqx','ibooks','jar','jpg','jpeg','js','mobi','mp2','mp3','mp4','mpg','mpeg','mov','movie','msi','msp','odb','odf','odg','ods','odt','ogg','ogv','pdf','phps','png','ppt','pptx','qt','qtm','ra','ram','rar','rpm','sea','sit','tar','tbz','tbz2','bz','bz2','tgz','torrent','txt','wav','wma','wmv','wpd','xls','xlsx','xml','z','zip'],configHostsAlias=[domainAlias],configIgnoreClasses=[],configDownloadClasses=[],configLinkClasses=[],configTrackerPause=500,configMinimumVisitTime,configHeartBeatDelay,heartBeatPingIfActivityAlias,configDiscardHashTag,configCustomData,configCampaignNameParameters=['pk_campaign','atsc_campaign','utm_campaign','utm_source','utm_medium'],configCampaignKeywordParameters=['pk_kwd','atsc_kwd','utm_term'],configCookieNamePrefix='_pk_',configCookieDomain,configCookiePath,configCookiesDisabled=false,configDoNotTrack,configCountPreRendered,configConversionAttributionFirstReferrer,configVisitorCookieTimeout=33955200000,configSessionCookieTimeout=1800000,configReferralCookieTimeout=15768000000,configPerformanceTrackingEnabled=true,configPerformanceGenerationTime=0,configStoreCustomVariablesInCookie=false,customVariables=false,configCustomRequestContentProcessing,customVariablesPage={},customVariablesEvent={},customDimensions={},customVariableMaximumLength=200,ecommerceItems={},browserFeatures={},trackedContentImpressions=[],isTrackOnlyVisibleContentEnabled=false,timeNextTrackingRequestCanBeExecutedImmediately=false,linkTrackingInstalled=false,linkTrackingEnabled=false,heartBeatSetUp=false,hadWindowFocusAtLeastOnce=isInsideAnIframe(),lastTrackerRequestTime=null,heartBeatTimeout,lastButton,lastTarget,hash=sha1,domainHash;function setCookie(cookieName,value,msToExpire,path,domain,secure){if(configCookiesDisabled){return;}
var expiryDate;if(msToExpire){expiryDate=new Date();expiryDate.setTime(expiryDate.getTime()+msToExpire);}
documentAlias.cookie=cookieName+'='+encodeWrapper(value)+(msToExpire?';expires='+expiryDate.toGMTString():'')+';path='+(path||'/')+(domain?';domain='+domain:'')+(secure?';secure':'');}
function getCookie(cookieName){if(configCookiesDisabled){return 0;}
var cookiePattern=new RegExp('(^|;)[ ]*'+cookieName+'([^;]*)'),cookieMatch=cookiePattern.exec(documentAlias.cookie);return cookieMatch?decodeWrapper(cookieMatch[2]):0;}
function purify(url){var targetPattern;if(configDiscardHashTag){targetPattern=new RegExp('#.*');return url.replace(targetPattern,'');}
return url;}
function resolveRelativeReference(baseUrl,url){var protocol=getProtocolScheme(url),i;if(protocol){return url;}
if(url.slice(0,1)==='/'){return getProtocolScheme(baseUrl)+'://'+getHostName(baseUrl)+url;}
baseUrl=purify(baseUrl);i=baseUrl.indexOf('?');if(i>=0){baseUrl=baseUrl.slice(0,i);}
i=baseUrl.lastIndexOf('/');if(i!==baseUrl.length-1){baseUrl=baseUrl.slice(0,i+1);}
return baseUrl+url;}
function isSameHost(hostName,alias){var offset;hostName=String(hostName).toLowerCase();alias=String(alias).toLowerCase();if(hostName===alias){return true;}
if(alias.slice(0,1)==='.'){if(hostName===alias.slice(1)){return true;}
offset=hostName.length-alias.length;if((offset>0)&&(hostName.slice(offset)===alias)){return true;}}
return false;}
function getPathName(url){var parser=document.createElement('a');if(url.indexOf('//')!==0&&url.indexOf('http')!==0){url='http://'+url;}
parser.href=content.toAbsoluteUrl(url);if(parser.pathname){return parser.pathname;}
return'';}
function isSitePath(path,pathAlias){var matchesAnyPath=(!pathAlias||pathAlias==='/'||pathAlias==='/*');if(matchesAnyPath){return true;}
if(path===pathAlias){return true;}
if(!path){return false;}
pathAlias=String(pathAlias).toLowerCase();path=String(path).toLowerCase();if(stringEndsWith(pathAlias,'*')){pathAlias=pathAlias.slice(0,-1);matchesAnyPath=(!pathAlias||pathAlias==='/');if(matchesAnyPath){return true;}
if(path===pathAlias){return true;}
return path.indexOf(pathAlias)===0;}
if(!stringEndsWith(path,'/')){path+='/';}
if(!stringEndsWith(pathAlias,'/')){pathAlias+='/';}
return path.indexOf(pathAlias)===0;}
function isSiteHostPath(host,path){var i,alias,configAlias,aliasHost,aliasPath;for(i=0;i<configHostsAlias.length;i++){aliasHost=domainFixup(configHostsAlias[i]);aliasPath=getPathName(configHostsAlias[i]);if(isSameHost(host,aliasHost)&&isSitePath(path,aliasPath)){return true;}}
return false;}
function isSiteHostName(hostName){var i,alias,offset;for(i=0;i<configHostsAlias.length;i++){alias=domainFixup(configHostsAlias[i].toLowerCase());if(hostName===alias){return true;}
if(alias.slice(0,1)==='.'){if(hostName===alias.slice(1)){return true;}
offset=hostName.length-alias.length;if((offset>0)&&(hostName.slice(offset)===alias)){return true;}}}
return false;}
function getImage(request,callback,url){var image=new Image(1,1);if(!isDefined(url))
url=configTrackerUrl;image.onload=function(){iterator=0;if(typeof callback==='function'){callback();}};image.src=url+(url.indexOf('?')<0?'?':'&')+request;}
function sendXmlHttpRequest(request,callback,fallbackToGet,url){if(!isDefined(fallbackToGet)||null===fallbackToGet){fallbackToGet=true;}
if(!isDefined(url))
url=configTrackerUrl;try{var xhr=windowAlias.XMLHttpRequest?new windowAlias.XMLHttpRequest():windowAlias.ActiveXObject?new ActiveXObject('Microsoft.XMLHTTP'):null;xhr.open('POST',url,true);xhr.onreadystatechange=function(){if(this.readyState===4&&!(this.status>=200&&this.status<300)&&fallbackToGet){getImage(request,callback,url);}else{if(typeof callback==='function'){callback();}}};xhr.setRequestHeader('Content-Type',configRequestContentType);xhr.send(request);}catch(e){if(fallbackToGet){getImage(request,callback,url);}}}
function setExpireDateTime(delay){var now=new Date();var time=now.getTime()+delay;if(!expireDateTime||time>expireDateTime){expireDateTime=time;}}
function heartBeatUp(delay){if(heartBeatTimeout||!configHeartBeatDelay){return;}
heartBeatTimeout=setTimeout(function heartBeat(){heartBeatTimeout=null;if(!hadWindowFocusAtLeastOnce){hadWindowFocusAtLeastOnce=(!documentAlias.hasFocus||documentAlias.hasFocus());}
if(!hadWindowFocusAtLeastOnce){heartBeatUp(configHeartBeatDelay);return;}
if(heartBeatPingIfActivityAlias()){return;}
var now=new Date(),heartBeatDelay=configHeartBeatDelay-(now.getTime()-lastTrackerRequestTime);heartBeatDelay=Math.min(configHeartBeatDelay,heartBeatDelay);heartBeatUp(heartBeatDelay);},delay||configHeartBeatDelay);}
function heartBeatDown(){if(!heartBeatTimeout){return;}
clearTimeout(heartBeatTimeout);heartBeatTimeout=null;}
function heartBeatOnFocus(){hadWindowFocusAtLeastOnce=true;if(heartBeatPingIfActivityAlias()){return;}
heartBeatUp();}
function heartBeatOnBlur(){heartBeatDown();}
function setUpHeartBeat(){if(heartBeatSetUp||!configHeartBeatDelay){return;}
heartBeatSetUp=true;addEventListener(windowAlias,'focus',heartBeatOnFocus);addEventListener(windowAlias,'blur',heartBeatOnBlur);heartBeatUp();}
function makeSureThereIsAGapAfterFirstTrackingRequestToPreventMultipleVisitorCreation(callback){var now=new Date();var timeNow=now.getTime();lastTrackerRequestTime=timeNow;if(timeNextTrackingRequestCanBeExecutedImmediately&&timeNow<timeNextTrackingRequestCanBeExecutedImmediately){var timeToWait=timeNextTrackingRequestCanBeExecutedImmediately-timeNow;setTimeout(callback,timeToWait);setExpireDateTime(timeToWait+50);timeNextTrackingRequestCanBeExecutedImmediately+=50;return;}
if(timeNextTrackingRequestCanBeExecutedImmediately===false){var delayInMs=800;timeNextTrackingRequestCanBeExecutedImmediately=timeNow+delayInMs;}
callback();}
function sendRequest(request,delay,callback,url){if(!isDefined(url))
url=configTrackerUrl;if(!isValid())
return;if(!configDoNotTrack&&request){makeSureThereIsAGapAfterFirstTrackingRequestToPreventMultipleVisitorCreation(function(){if(configRequestMethod==='POST'){sendXmlHttpRequest(request,callback,url);}else{getImage(request,callback,url);}
setExpireDateTime(delay);});}
if(!heartBeatSetUp){setUpHeartBeat();}else{heartBeatUp();}}
function canSendBulkRequest(requests){if(configDoNotTrack){return false;}
return(requests&&requests.length);}
function sendBulkRequest(requests,delay,url){if(!canSendBulkRequest(requests)){return;}
if(!isDefined(url))
url=configTrackerUrl;var bulk='{"requests":["?'+requests.join('","?')+'"]}';makeSureThereIsAGapAfterFirstTrackingRequestToPreventMultipleVisitorCreation(function(){sendXmlHttpRequest(bulk,null,false,url);setExpireDateTime(delay);});}
function getCookieName(baseName){return configCookieNamePrefix+baseName+'.'+configTrackerSiteId+'.'+domainHash;}
function hasCookies(){if(configCookiesDisabled){return'0';}
if(!isDefined(navigatorAlias.cookieEnabled)){var testCookieName=getCookieName('testcookie');setCookie(testCookieName,'1');return getCookie(testCookieName)==='1'?'1':'0';}
return navigatorAlias.cookieEnabled?'1':'0';}
function updateDomainHash(){domainHash=hash((configCookieDomain||domainAlias)+(configCookiePath||'/')).slice(0,4);}
function getCustomVariablesFromCookie(){var cookieName=getCookieName('cvar'),cookie=getCookie(cookieName);if(cookie.length){cookie=JSON2.parse(cookie);if(isObject(cookie)){return cookie;}}
return{};}
function loadCustomVariables(){if(customVariables===false){customVariables=getCustomVariablesFromCookie();}}
function generateRandomUuid(){return hash((navigatorAlias.userAgent||'')+(navigatorAlias.platform||'')+JSON2.stringify(browserFeatures)+(new Date()).getTime()+Math.random()).slice(0,16);}
function loadVisitorIdCookie(){var now=new Date(),nowTs=Math.round(now.getTime()/1000),visitorIdCookieName=getCookieName('id'),id=getCookie(visitorIdCookieName),cookieValue,uuid;if(id){cookieValue=id.split('.');cookieValue.unshift('0');if(visitorUUID.length){cookieValue[1]=visitorUUID;}
return cookieValue;}
if(visitorUUID.length){uuid=visitorUUID;}else if('0'===hasCookies()){uuid='';}else{uuid=generateRandomUuid();}
cookieValue=['1',uuid,nowTs,0,nowTs,'',''];return cookieValue;}
function getValuesFromVisitorIdCookie(){var cookieVisitorIdValue=loadVisitorIdCookie(),newVisitor=cookieVisitorIdValue[0],uuid=cookieVisitorIdValue[1],createTs=cookieVisitorIdValue[2],visitCount=cookieVisitorIdValue[3],currentVisitTs=cookieVisitorIdValue[4],lastVisitTs=cookieVisitorIdValue[5];if(!isDefined(cookieVisitorIdValue[6])){cookieVisitorIdValue[6]="";}
var lastEcommerceOrderTs=cookieVisitorIdValue[6];return{newVisitor:newVisitor,uuid:uuid,createTs:createTs,visitCount:visitCount,currentVisitTs:currentVisitTs,lastVisitTs:lastVisitTs,lastEcommerceOrderTs:lastEcommerceOrderTs};}
function getRemainingVisitorCookieTimeout(){var now=new Date(),nowTs=now.getTime(),cookieCreatedTs=getValuesFromVisitorIdCookie().createTs;var createTs=parseInt(cookieCreatedTs,10);var originalTimeout=(createTs*1000)+configVisitorCookieTimeout-nowTs;return originalTimeout;}
function setVisitorIdCookie(visitorIdCookieValues){if(!configTrackerSiteId){return;}
var now=new Date(),nowTs=Math.round(now.getTime()/1000);if(!isDefined(visitorIdCookieValues)){visitorIdCookieValues=getValuesFromVisitorIdCookie();}
var cookieValue=visitorIdCookieValues.uuid+'.'+visitorIdCookieValues.createTs+'.'+visitorIdCookieValues.visitCount+'.'+nowTs+'.'+visitorIdCookieValues.lastVisitTs+'.'+visitorIdCookieValues.lastEcommerceOrderTs;setCookie(getCookieName('id'),cookieValue,getRemainingVisitorCookieTimeout(),configCookiePath,configCookieDomain);}
function loadReferrerAttributionCookie(){var cookie=getCookie(getCookieName('ref'));if(cookie.length){try{cookie=JSON2.parse(cookie);if(isObject(cookie)){return cookie;}}catch(ignore){}}
return['','',0,''];}
function deleteCookie(cookieName,path,domain){setCookie(cookieName,'',-86400,path,domain);}
function isPossibleToSetCookieOnDomain(domainToTest){var valueToSet='testvalue';setCookie('test',valueToSet,10000,null,domainToTest);if(getCookie('test')===valueToSet){deleteCookie('test',null,domainToTest);return true;}
return false;}
function deleteCookies(){var savedConfigCookiesDisabled=configCookiesDisabled;configCookiesDisabled=false;var cookiesToDelete=['id','ses','cvar','ref'];var index,cookieName;for(index=0;index<cookiesToDelete.length;index++){cookieName=getCookieName(cookiesToDelete[index]);if(0!==getCookie(cookieName)){deleteCookie(cookieName,configCookiePath,configCookieDomain);}}
configCookiesDisabled=savedConfigCookiesDisabled;}
function atSetSiteId(siteId){configTrackerSiteId=siteId;setVisitorIdCookie();}
function sortObjectByKeys(value){if(!value||!isObject(value)){return;}
var keys=[];var key;for(key in value){if(Object.prototype.hasOwnProperty.call(value,key)){keys.push(key);}}
var normalized={};keys.sort();var len=keys.length;var i;for(i=0;i<len;i++){normalized[keys[i]]=value[keys[i]];}
return normalized;}
function setSessionCookie(){setCookie(getCookieName('ses'),'*',configSessionCookieTimeout,configCookiePath,configCookieDomain);}
function getRequest(request,customData,pluginMethod,currentEcommerceOrderTs){var i,now=new Date(),nowTs=Math.round(now.getTime()/1000),referralTs,referralUrl,referralUrlMaxLength=1024,currentReferrerHostName,originalReferrerHostName,customVariablesCopy=customVariables,cookieSessionName=getCookieName('ses'),cookieReferrerName=getCookieName('ref'),cookieCustomVariablesName=getCookieName('cvar'),cookieSessionValue=getCookie(cookieSessionName),attributionCookie=loadReferrerAttributionCookie(),currentUrl=configCustomUrl||locationHrefAlias,campaignNameDetected,campaignKeywordDetected;if(configCookiesDisabled){deleteCookies();}
if(configDoNotTrack){return'';}
var cookieVisitorIdValues=getValuesFromVisitorIdCookie();if(!isDefined(currentEcommerceOrderTs)){currentEcommerceOrderTs="";}
var charSet=documentAlias.characterSet||documentAlias.charset;if(!charSet||charSet.toLowerCase()==='utf-8'){charSet=null;}
campaignNameDetected=attributionCookie[0];campaignKeywordDetected=attributionCookie[1];referralTs=attributionCookie[2];referralUrl=attributionCookie[3];if(!cookieSessionValue){var visitDuration=configSessionCookieTimeout/1000;if(!cookieVisitorIdValues.lastVisitTs||(nowTs-cookieVisitorIdValues.lastVisitTs)>visitDuration){cookieVisitorIdValues.visitCount++;cookieVisitorIdValues.lastVisitTs=cookieVisitorIdValues.currentVisitTs;}
if(!configConversionAttributionFirstReferrer||!campaignNameDetected.length){for(i in configCampaignNameParameters){if(Object.prototype.hasOwnProperty.call(configCampaignNameParameters,i)){campaignNameDetected=getParameter(currentUrl,configCampaignNameParameters[i]);if(campaignNameDetected.length){break;}}}
for(i in configCampaignKeywordParameters){if(Object.prototype.hasOwnProperty.call(configCampaignKeywordParameters,i)){campaignKeywordDetected=getParameter(currentUrl,configCampaignKeywordParameters[i]);if(campaignKeywordDetected.length){break;}}}}
currentReferrerHostName=getHostName(configReferrerUrl);originalReferrerHostName=referralUrl.length?getHostName(referralUrl):'';if(currentReferrerHostName.length&&!isSiteHostName(currentReferrerHostName)&&(!configConversionAttributionFirstReferrer||!originalReferrerHostName.length||isSiteHostName(originalReferrerHostName))){referralUrl=configReferrerUrl;}
if(referralUrl.length||campaignNameDetected.length){referralTs=nowTs;attributionCookie=[campaignNameDetected,campaignKeywordDetected,referralTs,purify(referralUrl.slice(0,referralUrlMaxLength))];setCookie(cookieReferrerName,JSON2.stringify(attributionCookie),configReferralCookieTimeout,configCookiePath,configCookieDomain);}}
request+='&idsite='+configTrackerSiteId+'&rec=1'+'&r='+String(Math.random()).slice(2,8)+'&h='+now.getHours()+'&m='+now.getMinutes()+'&s='+now.getSeconds()+'&url='+encodeWrapper(purify(currentUrl))+(configReferrerUrl.length?'&urlref='+encodeWrapper(purify(configReferrerUrl)):'')+((configUserId&&configUserId.length)?'&uid='+encodeWrapper(configUserId):'')+'&_id='+cookieVisitorIdValues.uuid+'&_idts='+cookieVisitorIdValues.createTs+'&_idvc='+cookieVisitorIdValues.visitCount+'&_idn='+cookieVisitorIdValues.newVisitor+(campaignNameDetected.length?'&_rcn='+encodeWrapper(campaignNameDetected):'')+(campaignKeywordDetected.length?'&_rck='+encodeWrapper(campaignKeywordDetected):'')+'&_refts='+referralTs+'&_viewts='+cookieVisitorIdValues.lastVisitTs+(String(cookieVisitorIdValues.lastEcommerceOrderTs).length?'&_ects='+cookieVisitorIdValues.lastEcommerceOrderTs:'')+(String(referralUrl).length?'&_ref='+encodeWrapper(purify(referralUrl.slice(0,referralUrlMaxLength))):'')+(charSet?'&cs='+encodeWrapper(charSet):'')+'&send_image=0';for(i in browserFeatures){if(Object.prototype.hasOwnProperty.call(browserFeatures,i)){request+='&'+i+'='+browserFeatures[i];}}
var customDimensionIdsAlreadyHandled=[];if(customData){for(i in customData){if(Object.prototype.hasOwnProperty.call(customData,i)&&/^dimension\d+$/.test(i)){var index=i.replace('dimension','');customDimensionIdsAlreadyHandled.push(parseInt(index,10));customDimensionIdsAlreadyHandled.push(String(index));request+='&'+i+'='+customData[i];delete customData[i];}}}
if(customData&&isObjectEmpty(customData)){customData=null;}
for(i in customDimensions){if(Object.prototype.hasOwnProperty.call(customDimensions,i)){var isNotSetYet=(-1===customDimensionIdsAlreadyHandled.indexOf(i));if(isNotSetYet){request+='&dimension'+i+'='+customDimensions[i];}}}
if(customData){request+='&data='+encodeWrapper(JSON2.stringify(customData));}else if(configCustomData){request+='&data='+encodeWrapper(JSON2.stringify(configCustomData));}
function appendCustomVariablesToRequest(customVariables,parameterName){var customVariablesStringified=JSON2.stringify(customVariables);if(customVariablesStringified.length>2){return'&'+parameterName+'='+encodeWrapper(customVariablesStringified);}
return'';}
var sortedCustomVarPage=sortObjectByKeys(customVariablesPage);var sortedCustomVarEvent=sortObjectByKeys(customVariablesEvent);request+=appendCustomVariablesToRequest(sortedCustomVarPage,'cvar');request+=appendCustomVariablesToRequest(sortedCustomVarEvent,'e_cvar');if(customVariables){request+=appendCustomVariablesToRequest(customVariables,'_cvar');for(i in customVariablesCopy){if(Object.prototype.hasOwnProperty.call(customVariablesCopy,i)){if(customVariables[i][0]===''||customVariables[i][1]===''){delete customVariables[i];}}}
if(configStoreCustomVariablesInCookie){setCookie(cookieCustomVariablesName,JSON2.stringify(customVariables),configSessionCookieTimeout,configCookiePath,configCookieDomain);}}
if(configPerformanceTrackingEnabled){if(configPerformanceGenerationTime){request+='&gt_ms='+configPerformanceGenerationTime;}else if(performanceAlias&&performanceAlias.timing&&performanceAlias.timing.requestStart&&performanceAlias.timing.responseEnd){request+='&gt_ms='+(performanceAlias.timing.responseEnd-performanceAlias.timing.requestStart);}}
cookieVisitorIdValues.lastEcommerceOrderTs=isDefined(currentEcommerceOrderTs)&&String(currentEcommerceOrderTs).length?currentEcommerceOrderTs:cookieVisitorIdValues.lastEcommerceOrderTs;setVisitorIdCookie(cookieVisitorIdValues);setSessionCookie();request+=executePluginMethod(pluginMethod);if(configAppendToTrackingUrl.length){request+='&'+configAppendToTrackingUrl;}
if(isFunction(configCustomRequestContentProcessing)){request=configCustomRequestContentProcessing(request);}
return request;}
heartBeatPingIfActivityAlias=function heartBeatPingIfActivity(){var now=new Date();if(lastTrackerRequestTime+configHeartBeatDelay<=now.getTime()){var requestPing=getRequest('ping=1',null,'ping');sendRequest(requestPing,configTrackerPause);return true;}
return false;};function logEcommerce(orderId,grandTotal,subTotal,tax,shipping,discount){var request='idgoal=0',lastEcommerceOrderTs,now=new Date(),items=[],sku;if(String(orderId).length){request+='&ec_id='+encodeWrapper(orderId);lastEcommerceOrderTs=Math.round(now.getTime()/1000);}
request+='&revenue='+grandTotal;if(String(subTotal).length){request+='&ec_st='+subTotal;}
if(String(tax).length){request+='&ec_tx='+tax;}
if(String(shipping).length){request+='&ec_sh='+shipping;}
if(String(discount).length){request+='&ec_dt='+discount;}
if(ecommerceItems){for(sku in ecommerceItems){if(Object.prototype.hasOwnProperty.call(ecommerceItems,sku)){if(!isDefined(ecommerceItems[sku][1])){ecommerceItems[sku][1]="";}
if(!isDefined(ecommerceItems[sku][2])){ecommerceItems[sku][2]="";}
if(!isDefined(ecommerceItems[sku][3])||String(ecommerceItems[sku][3]).length===0){ecommerceItems[sku][3]=0;}
if(!isDefined(ecommerceItems[sku][4])||String(ecommerceItems[sku][4]).length===0){ecommerceItems[sku][4]=1;}
items.push(ecommerceItems[sku]);}}
request+='&ec_items='+encodeWrapper(JSON2.stringify(items));}
request=getRequest(request,configCustomData,'ecommerce',lastEcommerceOrderTs);sendRequest(request,configTrackerPause);}
function logEcommerceOrder(orderId,grandTotal,subTotal,tax,shipping,discount){if(String(orderId).length&&isDefined(grandTotal)){logEcommerce(orderId,grandTotal,subTotal,tax,shipping,discount);}}
function logEcommerceCartUpdate(grandTotal){if(isDefined(grandTotal)){logEcommerce("",grandTotal,"","","","");}}
function logPageView(customTitle,customData){var request='';if(configConversionType!=''){request=buildConversionPixelRequest();sendRequest(request,configTrackerPause,null,configConversionUrl);}
request=getRequest(buildAtscRequest("PageView",''),customData,'log');sendRequest(request,configTrackerPause);}
function logAction(name,customData){var request=getRequest(buildAtscRequest('Action',name),customData,'log');sendRequest(request,configTrackerPause);}
function getClassesRegExp(configClasses,defaultClass){var i,classesRegExp='(^| )(atsc[_-]'+defaultClass;if(configClasses){for(i=0;i<configClasses.length;i++){classesRegExp+='|'+configClasses[i];}}
classesRegExp+=')( |$)';return new RegExp(classesRegExp);}
function startsUrlWithTrackerUrl(url){return(configTrackerUrl&&url&&0===String(url).indexOf(configTrackerUrl));}
function getLinkType(className,href,isInLink,hasDownloadAttribute){if(startsUrlWithTrackerUrl(href)){return 0;}
var downloadPattern=getClassesRegExp(configDownloadClasses,'download'),linkPattern=getClassesRegExp(configLinkClasses,'link'),downloadExtensionsPattern=new RegExp('\\.('+configDownloadExtensions.join('|')+')([?&#]|$)','i');if(linkPattern.test(className)){return'link';}
if(hasDownloadAttribute||downloadPattern.test(className)||downloadExtensionsPattern.test(href)){return'download';}
if(isInLink){return 0;}
return'link';}
function getSourceElement(sourceElement){var parentElement;parentElement=sourceElement.parentNode;while(parentElement!==null&&isDefined(parentElement)){if(query.isLinkElement(sourceElement)){break;}
sourceElement=parentElement;parentElement=sourceElement.parentNode;}
return sourceElement;}
function getLinkIfShouldBeProcessed(sourceElement){sourceElement=getSourceElement(sourceElement);if(!query.hasNodeAttribute(sourceElement,'href')){return;}
if(!isDefined(sourceElement.href)){return;}
var href=query.getAttributeValueFromNode(sourceElement,'href');if(startsUrlWithTrackerUrl(href)){return;}
var originalSourcePath=sourceElement.pathname||getPathName(sourceElement.href);var originalSourceHostName=sourceElement.hostname||getHostName(sourceElement.href);var sourceHostName=originalSourceHostName.toLowerCase();var sourceHref=sourceElement.href.replace(originalSourceHostName,sourceHostName);var scriptProtocol=new RegExp('^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto|tel):','i');if(!scriptProtocol.test(sourceHref)){var linkType=getLinkType(sourceElement.className,sourceHref,isSiteHostPath(sourceHostName,originalSourcePath),query.hasNodeAttribute(sourceElement,'download'));if(linkType){return{type:linkType,href:sourceHref};}}}
function buildContentInteractionRequest(interaction,name,piece,target){var params=content.buildInteractionRequestParams(interaction,name,piece,target);if(!params){return;}
return getRequest(params,null,'contentInteraction');}
function buildContentInteractionTrackingRedirectUrl(url,contentInteraction,contentName,contentPiece,contentTarget){if(!isDefined(url)){return;}
if(startsUrlWithTrackerUrl(url)){return url;}
var redirectUrl=content.toAbsoluteUrl(url);var request='redirecturl='+encodeWrapper(redirectUrl)+'&';request+=buildContentInteractionRequest(contentInteraction,contentName,contentPiece,(contentTarget||url));var separator='&';if(configTrackerUrl.indexOf('?')<0){separator='?';}
return configTrackerUrl+separator+request;}
function isNodeAuthorizedToTriggerInteraction(contentNode,interactedNode){if(!contentNode||!interactedNode){return false;}
var targetNode=content.findTargetNode(contentNode);if(content.shouldIgnoreInteraction(targetNode)){return false;}
targetNode=content.findTargetNodeNoDefault(contentNode);if(targetNode&&!containsNodeElement(targetNode,interactedNode)){return false;}
return true;}
function getContentInteractionToRequestIfPossible(anyNode,interaction,fallbackTarget){if(!anyNode){return;}
var contentNode=content.findParentContentNode(anyNode);if(!contentNode){return;}
if(!isNodeAuthorizedToTriggerInteraction(contentNode,anyNode)){return;}
var contentBlock=content.buildContentBlock(contentNode);if(!contentBlock){return;}
if(!contentBlock.target&&fallbackTarget){contentBlock.target=fallbackTarget;}
return content.buildInteractionRequestParams(interaction,contentBlock.name,contentBlock.piece,contentBlock.target);}
function wasContentImpressionAlreadyTracked(contentBlock){if(!trackedContentImpressions||!trackedContentImpressions.length){return false;}
var index,trackedContent;for(index=0;index<trackedContentImpressions.length;index++){trackedContent=trackedContentImpressions[index];if(trackedContent&&trackedContent.name===contentBlock.name&&trackedContent.piece===contentBlock.piece&&trackedContent.target===contentBlock.target){return true;}}
return false;}
function replaceHrefIfInternalLink(contentBlock){if(!contentBlock){return false;}
var targetNode=content.findTargetNode(contentBlock);if(!targetNode||content.shouldIgnoreInteraction(targetNode)){return false;}
var link=getLinkIfShouldBeProcessed(targetNode);if(linkTrackingEnabled&&link&&link.type){return false;}
if(query.isLinkElement(targetNode)&&query.hasNodeAttributeWithValue(targetNode,'href')){var url=String(query.getAttributeValueFromNode(targetNode,'href'));if(0===url.indexOf('#')){return false;}
if(startsUrlWithTrackerUrl(url)){return true;}
if(!content.isUrlToCurrentDomain(url)){return false;}
var block=content.buildContentBlock(contentBlock);if(!block){return;}
var contentName=block.name;var contentPiece=block.piece;var contentTarget=block.target;if(!query.hasNodeAttributeWithValue(targetNode,content.CONTENT_TARGET_ATTR)||targetNode.wasContentTargetAttrReplaced){targetNode.wasContentTargetAttrReplaced=true;contentTarget=content.toAbsoluteUrl(url);query.setAnyAttribute(targetNode,content.CONTENT_TARGET_ATTR,contentTarget);}
var targetUrl=buildContentInteractionTrackingRedirectUrl(url,'click',contentName,contentPiece,contentTarget);content.setHrefAttribute(targetNode,targetUrl);return true;}
return false;}
function replaceHrefsIfInternalLink(contentNodes){if(!contentNodes||!contentNodes.length){return;}
var index;for(index=0;index<contentNodes.length;index++){replaceHrefIfInternalLink(contentNodes[index]);}}
function trackContentImpressionClickInteraction(targetNode){return function(event){if(!targetNode){return;}
var contentBlock=content.findParentContentNode(targetNode);var interactedElement;if(event){interactedElement=event.target||event.srcElement;}
if(!interactedElement){interactedElement=targetNode;}
if(!isNodeAuthorizedToTriggerInteraction(contentBlock,interactedElement)){return;}
setExpireDateTime(configTrackerPause);if(query.isLinkElement(targetNode)&&query.hasNodeAttributeWithValue(targetNode,'href')&&query.hasNodeAttributeWithValue(targetNode,content.CONTENT_TARGET_ATTR)){var href=query.getAttributeValueFromNode(targetNode,'href');if(!startsUrlWithTrackerUrl(href)&&targetNode.wasContentTargetAttrReplaced){query.setAnyAttribute(targetNode,content.CONTENT_TARGET_ATTR,'');}}
var link=getLinkIfShouldBeProcessed(targetNode);if(linkTrackingInstalled&&link&&link.type){return link.type;}
if(replaceHrefIfInternalLink(contentBlock)){return'href';}
var block=content.buildContentBlock(contentBlock);if(!block){return;}
var contentName=block.name;var contentPiece=block.piece;var contentTarget=block.target;var request=buildContentInteractionRequest('click',contentName,contentPiece,contentTarget);sendRequest(request,configTrackerPause);return request;};}
function setupInteractionsTracking(contentNodes){if(!contentNodes||!contentNodes.length){return;}
var index,targetNode;for(index=0;index<contentNodes.length;index++){targetNode=content.findTargetNode(contentNodes[index]);if(targetNode&&!targetNode.contentInteractionTrackingSetupDone){targetNode.contentInteractionTrackingSetupDone=true;addEventListener(targetNode,'click',trackContentImpressionClickInteraction(targetNode));}}}
function buildContentImpressionsRequests(contents,contentNodes){if(!contents||!contents.length){return[];}
var index,request;for(index=0;index<contents.length;index++){if(wasContentImpressionAlreadyTracked(contents[index])){contents.splice(index,1);index--;}else{trackedContentImpressions.push(contents[index]);}}
if(!contents||!contents.length){return[];}
replaceHrefsIfInternalLink(contentNodes);setupInteractionsTracking(contentNodes);var requests=[];for(index=0;index<contents.length;index++){request=getRequest(content.buildImpressionRequestParams(contents[index].name,contents[index].piece,contents[index].target),undefined,'contentImpressions');if(request){requests.push(request);}}
return requests;}
function getContentImpressionsRequestsFromNodes(contentNodes){var contents=content.collectContent(contentNodes);return buildContentImpressionsRequests(contents,contentNodes);}
function getCurrentlyVisibleContentImpressionsRequestsIfNotTrackedYet(contentNodes){if(!contentNodes||!contentNodes.length){return[];}
var index;for(index=0;index<contentNodes.length;index++){if(!content.isNodeVisible(contentNodes[index])){contentNodes.splice(index,1);index--;}}
if(!contentNodes||!contentNodes.length){return[];}
return getContentImpressionsRequestsFromNodes(contentNodes);}
function buildContentImpressionRequest(contentName,contentPiece,contentTarget){var params=content.buildImpressionRequestParams(contentName,contentPiece,contentTarget);return getRequest(params,null,'contentImpression');}
function buildContentInteractionRequestNode(node,contentInteraction){if(!node){return;}
var contentNode=content.findParentContentNode(node);var contentBlock=content.buildContentBlock(contentNode);if(!contentBlock){return;}
if(!contentInteraction){contentInteraction='Unknown';}
return buildContentInteractionRequest(contentInteraction,contentBlock.name,contentBlock.piece,contentBlock.target);}
function buildEventRequest(category,action,name,value){return'e_c='+encodeWrapper(category)+'&e_a='+encodeWrapper(action)+(isDefined(name)?'&e_n='+encodeWrapper(name):'')+(isDefined(value)?'&e_v='+encodeWrapper(value):'');}
function getParameterByName(name,url){if(!url)url=window.location.href;name=name.replace(/[\[\]]/g,"\\$&");var regex=new RegExp("[?&#]"+name+"(=([^&#]*)|&|#|$)"),results=regex.exec(url);if(!results)return null;if(!results[2])return'';return decodeURIComponent(results[2].replace(/\+/g," "));}
function logEvent(category,action,name,value,customData){if(String(category).length===0||String(action).length===0){return false;}
var request=getRequest(buildEventRequest(category,action,name,value),customData,'event');sendRequest(request,configTrackerPause);}
function isValid(){if(isDefined(configTrackerSiteId)&&isDefined(configUserId)&&configUserId!==0){return true;}
return false;}
function buildAtscRequest(name,value){var piwikToken=getCookie("_pk_id");return(isDefined(name)?"name="+name+"&":'')+(isDefined(value)?"value="+value+"&":'')+(isDefined(piwikToken)?"piwiktoken="+piwikToken+"&":'')+(isDefined(configTrackerSiteId)?"siteid="+configTrackerSiteId+"&":'')+(isDefined(value)?"value="+value+"&":'')+(isDefined(configUserId)&&configUserId!=null?"token="+configUserId+"&":'');}
function buildConversionPixelRequest(){var urlParts=[];urlParts.push(['_at',configUserId]);urlParts.push(['_sid',configTrackerSiteId]);urlParts.push(['_ct',configConversionType]);urlParts.push(['_cv',configConversionValue]);if(configConversionReference!=null&&configConversionReference!='')
urlParts.push(['_ref',configConversionReference]);var encodedParts=[];for(var x=0,y=urlParts.length;x<y;x++)
encodedParts.push(urlParts[x][0]+'='+encodeURIComponent(urlParts[x][1]));var qs=encodedParts.join('&');return qs;}
function logCloseTab(name,value,customData){if(String(name).length===0||String(value).length===0){return false;}
var request=getRequest(buildAtscRequest(name,value),customData,"log");sendRequest(request,configTrackerPause);}
function logIdle(name,value,customData){if(String(value).length===0){return false;}
var request=getRequest(buildAtscRequest(name,value),customData,"log");sendRequest(request,configTrackerPause);}
function logScrollTo(name,value,customData){if(String(value).length===0){return false;}
var request=getRequest(buildAtscRequest(name,value),customData,"log");sendRequest(request,configTrackerPause);}
function logSiteSearch(keyword,category,resultsCount,customData){var request=getRequest('search='+encodeWrapper(keyword)+(category?'&search_cat='+encodeWrapper(category):'')+(isDefined(resultsCount)?'&search_count='+resultsCount:''),customData,'sitesearch');sendRequest(request,configTrackerPause);}
function logGoal(idGoal,customRevenue,customData){var request=getRequest('idgoal='+idGoal+(customRevenue?'&revenue='+customRevenue:''),customData,'goal');sendRequest(request,configTrackerPause);}
function logLink(url,linkType,customData,callback,sourceElement){var linkParams=linkType+'='+encodeWrapper(purify(url));var interaction=getContentInteractionToRequestIfPossible(sourceElement,'click',url);if(interaction){linkParams+='&'+interaction;}
var request=getRequest(linkParams,customData,'link');sendRequest(request,(callback?0:configTrackerPause),callback);}
function prefixPropertyName(prefix,propertyName){if(prefix!==''){return prefix+propertyName.charAt(0).toUpperCase()+propertyName.slice(1);}
return propertyName;}
function trackCallback(callback){var isPreRendered,i,prefixes=['','webkit','ms','moz'],prefix;if(!configCountPreRendered){for(i=0;i<prefixes.length;i++){prefix=prefixes[i];if(Object.prototype.hasOwnProperty.call(documentAlias,prefixPropertyName(prefix,'hidden'))){if(documentAlias[prefixPropertyName(prefix,'visibilityState')]==='prerender'){isPreRendered=true;}
break;}}}
if(isPreRendered){addEventListener(documentAlias,prefix+'visibilitychange',function ready(){documentAlias.removeEventListener(prefix+'visibilitychange',ready,false);callback();});return;}
callback();}
function trackCallbackOnLoad(callback){if(documentAlias.readyState==='complete'){callback();}else if(windowAlias.addEventListener){windowAlias.addEventListener('load',callback);}else if(windowAlias.attachEvent){windowAlias.attachEvent('onload',callback);}}
function trackCallbackOnReady(callback){var loaded=false;if(documentAlias.attachEvent){loaded=documentAlias.readyState==='complete';}else{loaded=documentAlias.readyState!=='loading';}
if(loaded){callback();return;}
var _timer;if(documentAlias.addEventListener){addEventListener(documentAlias,'DOMContentLoaded',function ready(){documentAlias.removeEventListener('DOMContentLoaded',ready,false);if(!loaded){loaded=true;callback();}});}else if(documentAlias.attachEvent){documentAlias.attachEvent('onreadystatechange',function ready(){if(documentAlias.readyState==='complete'){documentAlias.detachEvent('onreadystatechange',ready);if(!loaded){loaded=true;callback();}}});if(documentAlias.documentElement.doScroll&&windowAlias===windowAlias.top){(function ready(){if(!loaded){try{documentAlias.documentElement.doScroll('left');}catch(error){setTimeout(ready,0);return;}
loaded=true;callback();}}());}}
addEventListener(windowAlias,'load',function(){if(!loaded){loaded=true;callback();}},false);}
function processClick(sourceElement){var link=getLinkIfShouldBeProcessed(sourceElement);if(link&&link.type){link.href=safeDecodeWrapper(link.href);logLink(link.href,link.type,undefined,null,sourceElement);}}
function processCloseTab(name,value){logCloseTab(name,value);}
function processScrollTo(name,value){logScrollTo(name,value);}
function processIdle(name,value){logIdle(name,value);}
function isIE8orOlder(){return documentAlias.all&&!documentAlias.addEventListener;}
function getKeyCodeFromEvent(event){var which=event.which;var typeOfEventButton=(typeof event.button);if(!which&&typeOfEventButton!=='undefined'){if(isIE8orOlder()){if(event.button&1){which=1;}else if(event.button&2){which=3;}else if(event.button&4){which=2;}}else{if(event.button===0||event.button==='0'){which=1;}else if(event.button&1){which=2;}else if(event.button&2){which=3;}}}
return which;}
function getNameOfClickedButton(event){switch(getKeyCodeFromEvent(event)){case 1:return'left';case 2:return'middle';case 3:return'right';}}
function getTargetElementFromEvent(event){return event.target||event.srcElement;}
function clickHandler(enable){return function(event){event=event||windowAlias.event;var button=getNameOfClickedButton(event);var target=getTargetElementFromEvent(event);if(event.type==='click'){var ignoreClick=false;if(enable&&button==='middle'){ignoreClick=true;}
if(target&&!ignoreClick){processClick(target);}}else if(event.type==='mousedown'){if(button==='middle'&&target){lastButton=button;lastTarget=target;}else{lastButton=lastTarget=null;}}else if(event.type==='mouseup'){if(button===lastButton&&target===lastTarget){processClick(target);}
lastButton=lastTarget=null;}else if(event.type==='contextmenu'){processClick(target);}};}
var _maxscrooll=0;var idletimer=0;var _maxidleTime=0;function scrollToHandler(event){event=event||windowAlias.event;return function(event){var scrollPercent=currentScrollPercentage();if(_maxscrooll<scrollPercent){_maxscrooll=scrollPercent;processScrollTo("ScrollTo",scrollPercent);}}}
function currentScrollPercentage(){var scrollTopPercentage=((document.documentElement.scrollTop+document.body.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100);return Math.round(scrollTopPercentage);}
function closeTabHandler(event){return function(event){idlebreak();event=event||windowAlias.event;var target=getTargetElementFromEvent(event);if(event.clientY==10){processCloseTab("CloseTab",true)}}}
function addScrollToListener(element){addEventListener(element,'scroll',scrollToHandler(event),false);}
function addCloseTabListener(element){addEventListener(element,'mousemove',closeTabHandler(event),false);addEventListener(element,'onmousemove',closeTabHandler(event),false);}
function addIdleListener(element){Idle();}
function idlefunction(){idletimer=idletimer+1;}
function idlebreak(){if(_maxidleTime<idletimer){_maxidleTime=idletimer;processIdle("Idle",idletimer);}
clearTimeout(idletimer);Idle();}
function Idle(){idletimer=0;setInterval(idlefunction,1000);}
function addClickListener(element,enable){addEventListener(element,'click',clickHandler(enable),false);if(enable){addEventListener(element,'mouseup',clickHandler(enable),false);addEventListener(element,'mousedown',clickHandler(enable),false);addEventListener(element,'contextmenu',clickHandler(enable),false);}}
function addClickListeners(enable){if(!linkTrackingInstalled){linkTrackingInstalled=true;var i,ignorePattern=getClassesRegExp(configIgnoreClasses,'ignore'),linkElements=documentAlias.links;if(linkElements){for(i=0;i<linkElements.length;i++){if(!ignorePattern.test(linkElements[i].className)){addClickListener(linkElements[i],enable);}}}}}
function enableTrackOnlyVisibleContent(checkOnSroll,timeIntervalInMs,tracker){if(isTrackOnlyVisibleContentEnabled){return true;}
isTrackOnlyVisibleContentEnabled=true;var didScroll=false;var events,index;function setDidScroll(){didScroll=true;}
trackCallbackOnLoad(function(){function checkContent(intervalInMs){setTimeout(function(){if(!isTrackOnlyVisibleContentEnabled){return;}
didScroll=false;tracker.trackVisibleContentImpressions();checkContent(intervalInMs);},intervalInMs);}
function checkContentIfDidScroll(intervalInMs){setTimeout(function(){if(!isTrackOnlyVisibleContentEnabled){return;}
if(didScroll){didScroll=false;tracker.trackVisibleContentImpressions();}
checkContentIfDidScroll(intervalInMs);},intervalInMs);}
if(checkOnSroll){events=['scroll','resize'];for(index=0;index<events.length;index++){if(documentAlias.addEventListener){documentAlias.addEventListener(events[index],setDidScroll);}else{windowAlias.attachEvent('on'+events[index],setDidScroll);}}
checkContentIfDidScroll(100);}
if(timeIntervalInMs&&timeIntervalInMs>0){timeIntervalInMs=parseInt(timeIntervalInMs,10);checkContent(timeIntervalInMs);}});}
function detectBrowserFeatures(){var i,mimeType,pluginMap={pdf:'application/pdf',qt:'video/quicktime',realp:'audio/x-pn-realaudio-plugin',wma:'application/x-mplayer2',dir:'application/x-director',fla:'application/x-shockwave-flash',java:'application/x-java-vm',gears:'application/x-googlegears',ag:'application/x-silverlight'},devicePixelRatio=windowAlias.devicePixelRatio||1;if(!((new RegExp('MSIE')).test(navigatorAlias.userAgent))){if(navigatorAlias.mimeTypes&&navigatorAlias.mimeTypes.length){for(i in pluginMap){if(Object.prototype.hasOwnProperty.call(pluginMap,i)){mimeType=navigatorAlias.mimeTypes[pluginMap[i]];browserFeatures[i]=(mimeType&&mimeType.enabledPlugin)?'1':'0';}}}
if(typeof navigator.javaEnabled!=='unknown'&&isDefined(navigatorAlias.javaEnabled)&&navigatorAlias.javaEnabled()){browserFeatures.java='1';}
if(isFunction(windowAlias.GearsFactory)){browserFeatures.gears='1';}
browserFeatures.cookie=hasCookies();}
var width=parseInt(screenAlias.width,10)*devicePixelRatio;var height=parseInt(screenAlias.height,10)*devicePixelRatio;browserFeatures.res=parseInt(width,10)+'x'+parseInt(height,10);}
function registerHook(hookName,userHook){var hookObj=null;if(isString(hookName)&&!isDefined(registeredHooks[hookName])&&userHook){if(isObject(userHook)){hookObj=userHook;}else if(isString(userHook)){try{eval('hookObj ='+userHook);}catch(ignore){}}
registeredHooks[hookName]=hookObj;}
return hookObj;}
detectBrowserFeatures();updateDomainHash();setVisitorIdCookie();executePluginMethod('run',registerHook);return{hook:registeredHooks,getHook:function(hookName){return registeredHooks[hookName];},getQuery:function(){return query;},getContent:function(){return content;},buildContentImpressionRequest:buildContentImpressionRequest,buildContentInteractionRequest:buildContentInteractionRequest,buildContentInteractionRequestNode:buildContentInteractionRequestNode,buildContentInteractionTrackingRedirectUrl:buildContentInteractionTrackingRedirectUrl,getContentImpressionsRequestsFromNodes:getContentImpressionsRequestsFromNodes,getCurrentlyVisibleContentImpressionsRequestsIfNotTrackedYet:getCurrentlyVisibleContentImpressionsRequestsIfNotTrackedYet,trackCallbackOnLoad:trackCallbackOnLoad,trackCallbackOnReady:trackCallbackOnReady,buildContentImpressionsRequests:buildContentImpressionsRequests,wasContentImpressionAlreadyTracked:wasContentImpressionAlreadyTracked,appendContentInteractionToRequestIfPossible:getContentInteractionToRequestIfPossible,setupInteractionsTracking:setupInteractionsTracking,trackContentImpressionClickInteraction:trackContentImpressionClickInteraction,internalIsNodeVisible:isVisible,isNodeAuthorizedToTriggerInteraction:isNodeAuthorizedToTriggerInteraction,replaceHrefIfInternalLink:replaceHrefIfInternalLink,getDomains:function(){return configHostsAlias;},getConfigCookiePath:function(){return configCookiePath;},getConfigDownloadExtensions:function(){return configDownloadExtensions;},enableTrackOnlyVisibleContent:function(checkOnScroll,timeIntervalInMs){return enableTrackOnlyVisibleContent(checkOnScroll,timeIntervalInMs,this);},clearTrackedContentImpressions:function(){trackedContentImpressions=[];},getTrackedContentImpressions:function(){return trackedContentImpressions;},clearEnableTrackOnlyVisibleContent:function(){isTrackOnlyVisibleContentEnabled=false;},disableLinkTracking:function(){linkTrackingInstalled=false;linkTrackingEnabled=false;},getConfigVisitorCookieTimeout:function(){return configVisitorCookieTimeout;},getRemainingVisitorCookieTimeout:getRemainingVisitorCookieTimeout,getVisitorId:function(){return getValuesFromVisitorIdCookie().uuid;},getVisitorInfo:function(){return loadVisitorIdCookie();},getAttributionInfo:function(){return loadReferrerAttributionCookie();},getAttributionCampaignName:function(){return loadReferrerAttributionCookie()[0];},getAttributionCampaignKeyword:function(){return loadReferrerAttributionCookie()[1];},getAttributionReferrerTimestamp:function(){return loadReferrerAttributionCookie()[2];},getAttributionReferrerUrl:function(){return loadReferrerAttributionCookie()[3];},atSetTrackerUrl:function(trackerUrl){configTrackerUrl=trackerUrl;},getTrackerUrl:function(){return configTrackerUrl;},getSiteId:function(){return configTrackerSiteId;},atSetSiteId:function(siteId){atSetSiteId(siteId);},setUserId:function(userId){var token=getParameterByName(userId);if(token==null||token==''){token=getCookie(userId);if(token&&typeof(token)!=="undefined"&&token.indexOf("=")==0)
token=token.substr(1);}
else{setCookie(userId,token,configReferralCookieTimeout,null,configCookieDomain);}
if(!isDefined(userId)||!userId.length){return;}
configUserId=isDefined(token)?token:userId;visitorUUID=hash(configUserId).substr(0,16);},getUserId:function(){return configUserId;},setConversionUrl:function(conversionUrl){configConversionUrl=conversionUrl;},getConversionUrl:function(){return configConversionUrl;},setConversionType:function(conversionType){configConversionType=conversionType;},getConversionType:function(){return configConversionType;},setConversionValue:function(conversionValue){configConversionValue=conversionValue;},getConversionValue:function(){return configConversionValue;},setConversionReference:function(conversionReference){configConversionReference=conversionReference;},getConversionReference:function(){return configConversionReference;},setCustomData:function(key_or_obj,opt_value){if(isObject(key_or_obj)){configCustomData=key_or_obj;}else{if(!configCustomData){configCustomData={};}
configCustomData[key_or_obj]=opt_value;}},getCustomData:function(){return configCustomData;},setCustomRequestProcessing:function(customRequestContentProcessingLogic){configCustomRequestContentProcessing=customRequestContentProcessingLogic;},appendToTrackingUrl:function(queryString){configAppendToTrackingUrl=queryString;},getRequest:function(request){return getRequest(request);},addPlugin:function(pluginName,pluginObj){plugins[pluginName]=pluginObj;},setCustomDimension:function(customDimensionId,value){customDimensionId=parseInt(customDimensionId,10);if(customDimensionId>0){if(!isDefined(value)){value='';}
if(!isString(value)){value=String(value);}
customDimensions[customDimensionId]=value;}},getCustomDimension:function(customDimensionId){customDimensionId=parseInt(customDimensionId,10);if(customDimensionId>0&&Object.prototype.hasOwnProperty.call(customDimensions,customDimensionId)){return customDimensions[customDimensionId];}},deleteCustomDimension:function(customDimensionId){customDimensionId=parseInt(customDimensionId,10);if(customDimensionId>0){delete customDimensions[customDimensionId];}},setCustomVariable:function(index,name,value,scope){var toRecord;if(!isDefined(scope)){scope='visit';}
if(!isDefined(name)){return;}
if(!isDefined(value)){value="";}
if(index>0){name=!isString(name)?String(name):name;value=!isString(value)?String(value):value;toRecord=[name.slice(0,customVariableMaximumLength),value.slice(0,customVariableMaximumLength)];if(scope==='visit'||scope===2){loadCustomVariables();customVariables[index]=toRecord;}else if(scope==='page'||scope===3){customVariablesPage[index]=toRecord;}else if(scope==='event'){customVariablesEvent[index]=toRecord;}}},getCustomVariable:function(index,scope){var cvar;if(!isDefined(scope)){scope="visit";}
if(scope==="page"||scope===3){cvar=customVariablesPage[index];}else if(scope==="event"){cvar=customVariablesEvent[index];}else if(scope==="visit"||scope===2){loadCustomVariables();cvar=customVariables[index];}
if(!isDefined(cvar)||(cvar&&cvar[0]==='')){return false;}
return cvar;},deleteCustomVariable:function(index,scope){if(this.getCustomVariable(index,scope)){this.setCustomVariable(index,'','',scope);}},storeCustomVariablesInCookie:function(){configStoreCustomVariablesInCookie=true;},setLinkTrackingTimer:function(delay){configTrackerPause=delay;},setDownloadExtensions:function(extensions){if(isString(extensions)){extensions=extensions.split('|');}
configDownloadExtensions=extensions;},addDownloadExtensions:function(extensions){var i;if(isString(extensions)){extensions=extensions.split('|');}
for(i=0;i<extensions.length;i++){configDownloadExtensions.push(extensions[i]);}},removeDownloadExtensions:function(extensions){var i,newExtensions=[];if(isString(extensions)){extensions=extensions.split('|');}
for(i=0;i<configDownloadExtensions.length;i++){if(indexOfArray(extensions,configDownloadExtensions[i])===-1){newExtensions.push(configDownloadExtensions[i]);}}
configDownloadExtensions=newExtensions;},setDomains:function(hostsAlias){configHostsAlias=isString(hostsAlias)?[hostsAlias]:hostsAlias;var hasDomainAliasAlready=false,i;for(i in configHostsAlias){if(Object.prototype.hasOwnProperty.call(configHostsAlias,i)&&isSameHost(domainAlias,domainFixup(String(configHostsAlias[i])))){hasDomainAliasAlready=true;}}
if(!hasDomainAliasAlready){configHostsAlias.push(domainAlias);}},setIgnoreClasses:function(ignoreClasses){configIgnoreClasses=isString(ignoreClasses)?[ignoreClasses]:ignoreClasses;},setRequestMethod:function(method){configRequestMethod=method||defaultRequestMethod;},setRequestContentType:function(requestContentType){configRequestContentType=requestContentType||defaultRequestContentType;},setReferrerUrl:function(url){configReferrerUrl=url;},setCustomUrl:function(url){configCustomUrl=resolveRelativeReference(locationHrefAlias,url);},setDocumentTitle:function(title){configTitle=title;},setAPIUrl:function(apiUrl){configApiUrl=apiUrl;},setDownloadClasses:function(downloadClasses){configDownloadClasses=isString(downloadClasses)?[downloadClasses]:downloadClasses;},setLinkClasses:function(linkClasses){configLinkClasses=isString(linkClasses)?[linkClasses]:linkClasses;},setCampaignNameKey:function(campaignNames){configCampaignNameParameters=isString(campaignNames)?[campaignNames]:campaignNames;},setCampaignKeywordKey:function(campaignKeywords){configCampaignKeywordParameters=isString(campaignKeywords)?[campaignKeywords]:campaignKeywords;},discardHashTag:function(enableFilter){configDiscardHashTag=enableFilter;},setCookieNamePrefix:function(cookieNamePrefix){configCookieNamePrefix=cookieNamePrefix;customVariables=getCustomVariablesFromCookie();},setCookieDomain:function(domain){var domainFixed=domainFixup(domain);if(isPossibleToSetCookieOnDomain(domainFixed)){configCookieDomain=domainFixed;updateDomainHash();}},setCookiePath:function(path){configCookiePath=path;updateDomainHash();},setVisitorCookieTimeout:function(timeout){configVisitorCookieTimeout=timeout*1000;},setSessionCookieTimeout:function(timeout){configSessionCookieTimeout=timeout*1000;},setReferralCookieTimeout:function(timeout){configReferralCookieTimeout=timeout*1000;},setConversionAttributionFirstReferrer:function(enable){configConversionAttributionFirstReferrer=enable;},disableCookies:function(){configCookiesDisabled=true;browserFeatures.cookie='0';if(configTrackerSiteId){deleteCookies();}},deleteCookies:function(){deleteCookies();},setDoNotTrack:function(enable){var dnt=navigatorAlias.doNotTrack||navigatorAlias.msDoNotTrack;configDoNotTrack=enable&&(dnt==='yes'||dnt==='1');if(configDoNotTrack){this.disableCookies();}},addListener:function(element,enable){addClickListener(element,enable);},addListenerCloseTab:function(element){addCloseTabListener(element);},addListenerScrollTo:function(element){addScrollToListener(element);},addListenerIdle:function(element){addIdleListener(element);},atEnableLinkTracking:function(enable){linkTrackingEnabled=true;trackCallback(function(){trackCallbackOnReady(function(){addClickListeners(enable);});});},enableJSErrorTracking:function(){if(enableJSErrorTracking){return;}
enableJSErrorTracking=true;var onError=windowAlias.onerror;windowAlias.onerror=function(message,url,linenumber,column,error){trackCallback(function(){var category='JavaScript Errors';var action=url+':'+linenumber;if(column){action+=':'+column;}
logEvent(category,action,message);});if(onError){return onError(message,url,linenumber,column,error);}
return false;};},disablePerformanceTracking:function(){configPerformanceTrackingEnabled=false;},setGenerationTimeMs:function(generationTime){configPerformanceGenerationTime=parseInt(generationTime,10);},enableHeartBeatTimer:function(heartBeatDelayInSeconds){heartBeatDelayInSeconds=Math.max(heartBeatDelayInSeconds,1);configHeartBeatDelay=(heartBeatDelayInSeconds||15)*1000;if(lastTrackerRequestTime!==null){setUpHeartBeat();}},disableHeartBeatTimer:function(){heartBeatDown();configHeartBeatDelay=null;window.removeEventListener('focus',heartBeatOnFocus);window.removeEventListener('blur',heartBeatOnBlur);},killFrame:function(){if(windowAlias.location!==windowAlias.top.location){windowAlias.top.location=windowAlias.location;}},redirectFile:function(url){if(windowAlias.location.protocol==='file:'){windowAlias.location=url;}},setCountPreRendered:function(enable){configCountPreRendered=enable;},trackGoal:function(idGoal,customRevenue,customData){trackCallback(function(){logGoal(idGoal,customRevenue,customData);});},trackLink:function(sourceUrl,linkType,customData,callback){trackCallback(function(){logLink(sourceUrl,linkType,customData,callback);});},atTrackPageView:function(customTitle,customData){trackedContentImpressions=[];if(isOverlaySession(configTrackerSiteId)){trackCallback(function(){injectOverlayScripts(configTrackerUrl,configApiUrl,configTrackerSiteId);});}else{trackCallback(function(){logPageView(customTitle,customData);});}},trackAllContentImpressions:function(){if(isOverlaySession(configTrackerSiteId)){return;}
trackCallback(function(){trackCallbackOnReady(function(){var contentNodes=content.findContentNodes();var requests=getContentImpressionsRequestsFromNodes(contentNodes);sendBulkRequest(requests,configTrackerPause);});});},trackVisibleContentImpressions:function(checkOnSroll,timeIntervalInMs){if(isOverlaySession(configTrackerSiteId)){return;}
if(!isDefined(checkOnSroll)){checkOnSroll=true;}
if(!isDefined(timeIntervalInMs)){timeIntervalInMs=750;}
enableTrackOnlyVisibleContent(checkOnSroll,timeIntervalInMs,this);trackCallback(function(){trackCallbackOnLoad(function(){var contentNodes=content.findContentNodes();var requests=getCurrentlyVisibleContentImpressionsRequestsIfNotTrackedYet(contentNodes);sendBulkRequest(requests,configTrackerPause);});});},trackContentImpression:function(contentName,contentPiece,contentTarget){if(isOverlaySession(configTrackerSiteId)){return;}
if(!contentName){return;}
contentPiece=contentPiece||'Unknown';trackCallback(function(){var request=buildContentImpressionRequest(contentName,contentPiece,contentTarget);sendRequest(request,configTrackerPause);});},trackContentImpressionsWithinNode:function(domNode){if(isOverlaySession(configTrackerSiteId)||!domNode){return;}
trackCallback(function(){if(isTrackOnlyVisibleContentEnabled){trackCallbackOnLoad(function(){var contentNodes=content.findContentNodesWithinNode(domNode);var requests=getCurrentlyVisibleContentImpressionsRequestsIfNotTrackedYet(contentNodes);sendBulkRequest(requests,configTrackerPause);});}else{trackCallbackOnReady(function(){var contentNodes=content.findContentNodesWithinNode(domNode);var requests=getContentImpressionsRequestsFromNodes(contentNodes);sendBulkRequest(requests,configTrackerPause);});}});},trackContentInteraction:function(contentInteraction,contentName,contentPiece,contentTarget){if(isOverlaySession(configTrackerSiteId)){return;}
if(!contentInteraction||!contentName){return;}
contentPiece=contentPiece||'Unknown';trackCallback(function(){var request=buildContentInteractionRequest(contentInteraction,contentName,contentPiece,contentTarget);sendRequest(request,configTrackerPause);});},trackContentInteractionNode:function(domNode,contentInteraction){if(isOverlaySession(configTrackerSiteId)||!domNode){return;}
trackCallback(function(){var request=buildContentInteractionRequestNode(domNode,contentInteraction);sendRequest(request,configTrackerPause);});},logAllContentBlocksOnPage:function(){var contentNodes=content.findContentNodes();var contents=content.collectContent(contentNodes);if(console!==undefined&&console&&console.log){console.log(contents);}},trackEvent:function(category,action,name,value,customData){trackCallback(function(){logEvent(category,action,name,value,customData);});},trackAction:function(name,customData){logAction(name,customData);},trackSiteSearch:function(keyword,category,resultsCount,customData){trackCallback(function(){logSiteSearch(keyword,category,resultsCount,customData);});},setEcommerceView:function(sku,name,category,price){if(!isDefined(category)||!category.length){category="";}else if(category instanceof Array){category=JSON2.stringify(category);}
customVariablesPage[5]=['_pkc',category];if(isDefined(price)&&String(price).length){customVariablesPage[2]=['_pkp',price];}
if((!isDefined(sku)||!sku.length)&&(!isDefined(name)||!name.length)){return;}
if(isDefined(sku)&&sku.length){customVariablesPage[3]=['_pks',sku];}
if(!isDefined(name)||!name.length){name="";}
customVariablesPage[4]=['_pkn',name];},addEcommerceItem:function(sku,name,category,price,quantity){if(sku.length){ecommerceItems[sku]=[sku,name,category,price,quantity];}},trackEcommerceOrder:function(orderId,grandTotal,subTotal,tax,shipping,discount){logEcommerceOrder(orderId,grandTotal,subTotal,tax,shipping,discount);},trackEcommerceCartUpdate:function(grandTotal){logEcommerceCartUpdate(grandTotal);}};}
function TrackerProxy(){return{push:apply};}
function applyMethodsInOrder(paq,methodsToApply){var appliedMethods={};var index,iterator;for(index=0;index<methodsToApply.length;index++){var methodNameToApply=methodsToApply[index];appliedMethods[methodNameToApply]=1;for(iterator=0;iterator<paq.length;iterator++){if(paq[iterator]&&paq[iterator][0]){var methodName=paq[iterator][0];if(methodNameToApply===methodName){apply(paq[iterator]);delete paq[iterator];if(appliedMethods[methodName]>1){if(console!==undefined&&console&&console.error){console.error('The method '+methodName+' is registered more than once in "paq" variable. Only the last call has an effect. Please have a look at the multiple atsc trackers documentation: http://developer.piwik.org/guides/tracking-javascript-guide#multiple-piwik-trackers');}}
appliedMethods[methodName]++;}}}}
return paq;}
addEventListener(windowAlias,'beforeunload',beforeUnloadHandler,false);Date.prototype.getTimeAlias=Date.prototype.getTime;asyncTracker=new Tracker();var applyFirst=['disableCookies','atSetTrackerUrl','setAPIUrl','setCookiePath','setCookieDomain','setDomains','setUserId','atSetSiteId','atEnableLinkTracking','setConversionUrl','setConversionType','setConversionValue','setConversionReference'];_atsc_paq=applyMethodsInOrder(_atsc_paq,applyFirst);for(iterator=0;iterator<_atsc_paq.length;iterator++){if(_atsc_paq[iterator]){apply(_atsc_paq[iterator]);}}
_atsc_paq=new TrackerProxy();Atsc={addPlugin:function(pluginName,pluginObj){plugins[pluginName]=pluginObj;},getTracker:function(atscUrl,siteId,conversionUrl,conversionType,conversionValue,conversionReference){if(!isDefined(siteId)){siteId=this.getAsyncTracker().getSiteId();}
if(!isDefined(atscUrl)){atscUrl=this.getAsyncTracker().getTrackerUrl();}
if(!isDefined(conversionUrl)){conversionUrl=this.getAsyncTracker().getConversionUrl();}
if(!isDefined(conversionType)){conversionType=this.getAsyncTracker().getConversionType();}
if(!isDefined(conversionValue)){conversionValue=this.getAsyncTracker().getConversionValue();}
if(!isDefined(conversionReference)){conversionReference=this.getAsyncTracker().getConversionReference();}
return new Tracker(atscUrl,siteId,conversionUrl,conversionType,conversionValue,conversionReference);},getAsyncTracker:function(){return asyncTracker;}};if(typeof define==='function'&&define.amd){define('atsc',[],function(){return Atsc;});}
return Atsc;}());}
if(window&&window.atscAsyncInit){window.atscAsyncInit();}
(function(){var jsTrackerType=(typeof AnalyticsTracker);if(jsTrackerType==='undefined'){AnalyticsTracker=window.Atsc;}}());if(typeof Atsc_log!=='function'){Atsc_log=function(documentTitle,siteId,AtscUrl,customData){'use strict';function getOption(optionName){try{if(window['Atsc_'+optionName]){return window['Atsc_'+optionName];}}catch(ignore){}
return;}
var option,AtscTracker=window.Atsc.getTracker(AtscUrl,siteId);AtscTracker.setDocumentTitle(documentTitle);AtscTracker.setCustomData(customData);option=getOption('tracker_pause');if(option){AtscTracker.setLinkTrackingTimer(option);}
option=getOption('download_extensions');if(option){AtscTracker.setDownloadExtensions(option);}
option=getOption('hosts_alias');if(option){AtscTracker.setDomains(option);}
option=getOption('ignore_classes');if(option){AtscTracker.setIgnoreClasses(option);}
AtscTracker.atTrackPageView();if(getOption('install_tracker')){Atsc_track=function(sourceUrl,siteId,AtscUrl,linkType){AtscTracker.atSetSiteId(siteId);AtscTracker.atSetTrackerUrl(AtscUrl);AtscTracker.trackLink(sourceUrl,linkType);};AtscTracker.atEnableLinkTracking();}};}