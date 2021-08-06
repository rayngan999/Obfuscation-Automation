                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                








;(function(){


var undefined;


var arrayPool=[],
objectPool=[];


var idCounter=0;


var indicatorObject={};


var keyPrefix=+new Date+'';


var largeArraySize=75;


var maxPoolSize=40;


var whitespace=(

' \t\x0B\f\xA0\ufeff'+


'\n\r\u2028\u2029'+


'\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000'
);


var reEmptyStringLeading=/\b__p \+= '';/g,
reEmptyStringMiddle=/\b(__p \+=) '' \+/g,
reEmptyStringTrailing=/(__e\(.*?\)|\b__t\)) \+\n'';/g;





var reEsTemplate=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;


var reFlags=/\w*$/;


var reFuncName=/^\s*function[ \n\r\t]+\w/;


var reInterpolate=/<%=([\s\S]+?)%>/g;


var reLeadingSpacesAndZeros=RegExp('^['+whitespace+']*0+(?=.$)');


var reNoMatch=/($^)/;


var reThis=/\bthis\b/;


var reUnescapedString=/['\n\r\t\u2028\u2029\\]/g;


var contextProps=[
'Array','Boolean','Date','Error','Function','Math','Number','Object',
'RegExp','String','_','attachEvent','clearTimeout','isFinite','isNaN',
'parseInt','setImmediate','setTimeout'
];


var shadowedProps=[
'constructor','hasOwnProperty','isPrototypeOf','propertyIsEnumerable',
'toLocaleString','toString','valueOf'
];


var templateCounter=0;


var argsClass='[object Arguments]',
arrayClass='[object Array]',
boolClass='[object Boolean]',
dateClass='[object Date]',
errorClass='[object Error]',
funcClass='[object Function]',
numberClass='[object Number]',
objectClass='[object Object]',
regexpClass='[object RegExp]',
stringClass='[object String]';


var cloneableClasses={};
cloneableClasses[funcClass]=false;
cloneableClasses[argsClass]=cloneableClasses[arrayClass]=
cloneableClasses[boolClass]=cloneableClasses[dateClass]=
cloneableClasses[numberClass]=cloneableClasses[objectClass]=
cloneableClasses[regexpClass]=cloneableClasses[stringClass]=true;


var debounceOptions={
'leading':false,
'maxWait':0,
'trailing':false
};


var descriptor={
'configurable':false,
'enumerable':false,
'value':null,
'writable':false
};


var iteratorData={
'args':'',
'array':null,
'bottom':'',
'firstArg':'',
'init':'',
'keys':null,
'loop':'',
'shadowedProps':null,
'support':null,
'top':'',
'useHas':false
};


var objectTypes={
'boolean':false,
'function':true,
'object':true,
'number':false,
'string':false,
'undefined':false
};


var stringEscapes={
'\\':'\\',
"'":"'",
'\n':'n',
'\r':'r',
'\t':'t',
'\u2028':'u2028',
'\u2029':'u2029'
};


var root=(objectTypes[typeof window]&&window)||this;


var freeExports=objectTypes[typeof exports]&&exports&&!exports.nodeType&&exports;


var freeModule=objectTypes[typeof module]&&module&&!module.nodeType&&module;


var moduleExports=freeModule&&freeModule.exports===freeExports&&freeExports;


var freeGlobal=objectTypes[typeof global]&&global;
if(freeGlobal&&(freeGlobal.global===freeGlobal||freeGlobal.window===freeGlobal)){
root=freeGlobal;
}













function baseIndexOf(array,value,fromIndex){
var index=(fromIndex||0)-1,
length=array?array.length:0;

while(++index<length){
if(array[index]===value){
return index;
}
}
return-1;
}










function cacheIndexOf(cache,value){
var type=typeof value;
cache=cache.cache;

if(type=='boolean'||value==null){
return cache[value]?0:-1;
}
if(type!='number'&&type!='string'){
type='object';
}
var key=type=='number'?value:keyPrefix+value;
cache=(cache=cache[type])&&cache[key];

return type=='object'
?(cache&&baseIndexOf(cache,value)>-1?0:-1)
:(cache?0:-1);
}







function cachePush(value){
var cache=this.cache,
type=typeof value;

if(type=='boolean'||value==null){
cache[value]=true;
}else{
if(type!='number'&&type!='string'){
type='object';
}
var key=type=='number'?value:keyPrefix+value,
typeCache=cache[type]||(cache[type]={});

if(type=='object'){
(typeCache[key]||(typeCache[key]=[])).push(value);
}else{
typeCache[key]=true;
}
}
}









function charAtCallback(value){
return value.charCodeAt(0);
}










function compareAscending(a,b){
var ac=a.criteria,
bc=b.criteria;



if(ac!==bc){
if(ac>bc||typeof ac=='undefined'){
return 1;
}
if(ac<bc||typeof bc=='undefined'){
return-1;
}
}




return a.index-b.index;
}








function createCache(array){
var index=-1,
length=array.length,
first=array[0],
mid=array[(length/2)|0],
last=array[length-1];

if(first&&typeof first=='object'&&
mid&&typeof mid=='object'&&last&&typeof last=='object'){
return false;
}
var cache=getObject();
cache['false']=cache['null']=cache['true']=cache['undefined']=false;

var result=getObject();
result.array=array;
result.cache=cache;
result.push=cachePush;

while(++index<length){
result.push(array[index]);
}
return result;
}









function escapeStringChar(match){
return'\\'+stringEscapes[match];
}







function getArray(){
return arrayPool.pop()||[];
}







function getObject(){
return objectPool.pop()||{
'array':null,
'cache':null,
'criteria':null,
'false':false,
'index':0,
'null':false,
'number':null,
'object':null,
'push':null,
'string':null,
'true':false,
'undefined':false,
'value':null
};
}








function isNode(value){


return typeof value.toString!='function'&&typeof(value+'')=='string';
}







function releaseArray(array){
array.length=0;
if(arrayPool.length<maxPoolSize){
arrayPool.push(array);
}
}







function releaseObject(object){
var cache=object.cache;
if(cache){
releaseObject(cache);
}
object.array=object.cache=object.criteria=object.object=object.number=object.string=object.value=null;
if(objectPool.length<maxPoolSize){
objectPool.push(object);
}
}














function slice(array,start,end){
start||(start=0);
if(typeof end=='undefined'){
end=array?array.length:0;
}
var index=-1,
length=end-start||0,
result=Array(length<0?0:length);

while(++index<length){
result[index]=array[start+index];
}
return result;
}












function runInContext(context){




context=context?_.defaults(root.Object(),context,_.pick(root,contextProps)):root;


var Array=context.Array,
Boolean=context.Boolean,
Date=context.Date,
Error=context.Error,
Function=context.Function,
Math=context.Math,
Number=context.Number,
Object=context.Object,
RegExp=context.RegExp,
String=context.String,
TypeError=context.TypeError;







var arrayRef=[];


var errorProto=Error.prototype,
objectProto=Object.prototype,
stringProto=String.prototype;


var oldDash=context._;


var toString=objectProto.toString;


var reNative=RegExp('^'+
String(toString)
.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')
.replace(/toString| for [^\]]+/g,'.*?')+'$'
);


var ceil=Math.ceil,
clearTimeout=context.clearTimeout,
floor=Math.floor,
fnToString=Function.prototype.toString,
getPrototypeOf=reNative.test(getPrototypeOf=Object.getPrototypeOf)&&getPrototypeOf,
hasOwnProperty=objectProto.hasOwnProperty,
now=reNative.test(now=Date.now)&&now||function(){return+new Date;},
push=arrayRef.push,
propertyIsEnumerable=objectProto.propertyIsEnumerable,
setTimeout=context.setTimeout,
splice=arrayRef.splice;


var setImmediate=typeof(setImmediate=freeGlobal&&moduleExports&&freeGlobal.setImmediate)=='function'&&
!reNative.test(setImmediate)&&setImmediate;


var defineProperty=(function(){

try{
var o={},
func=reNative.test(func=Object.defineProperty)&&func,
result=func(o,o,o)&&func;
}catch(e){}
return result;
}());


var nativeCreate=reNative.test(nativeCreate=Object.create)&&nativeCreate,
nativeIsArray=reNative.test(nativeIsArray=Array.isArray)&&nativeIsArray,
nativeIsFinite=context.isFinite,
nativeIsNaN=context.isNaN,
nativeKeys=reNative.test(nativeKeys=Object.keys)&&nativeKeys,
nativeMax=Math.max,
nativeMin=Math.min,
nativeParseInt=context.parseInt,
nativeRandom=Math.random;


var ctorByClass={};
ctorByClass[arrayClass]=Array;
ctorByClass[boolClass]=Boolean;
ctorByClass[dateClass]=Date;
ctorByClass[funcClass]=Function;
ctorByClass[objectClass]=Object;
ctorByClass[numberClass]=Number;
ctorByClass[regexpClass]=RegExp;
ctorByClass[stringClass]=String;


var nonEnumProps={};
nonEnumProps[arrayClass]=nonEnumProps[dateClass]=nonEnumProps[numberClass]={'constructor':true,'toLocaleString':true,'toString':true,'valueOf':true};
nonEnumProps[boolClass]=nonEnumProps[stringClass]={'constructor':true,'toString':true,'valueOf':true};
nonEnumProps[errorClass]=nonEnumProps[funcClass]=nonEnumProps[regexpClass]={'constructor':true,'toString':true};
nonEnumProps[objectClass]={'constructor':true};

(function(){
var length=shadowedProps.length;
while(length--){
var key=shadowedProps[length];
for(var className in nonEnumProps){
if(hasOwnProperty.call(nonEnumProps,className)&&!hasOwnProperty.call(nonEnumProps[className],key)){
nonEnumProps[className][key]=false;
}
}
}
}());




































































function lodash(value){

return(value&&typeof value=='object'&&!isArray(value)&&hasOwnProperty.call(value,'__wrapped__'))
?value
:new lodashWrapper(value);
}









function lodashWrapper(value,chainAll){
this.__chain__=!!chainAll;
this.__wrapped__=value;
}

lodashWrapper.prototype=lodash.prototype;








var support=lodash.support={};

(function(){
var ctor=function(){this.x=1;},
object={'0':1,'length':1},
props=[];

ctor.prototype={'valueOf':1,'y':1};
for(var key in new ctor){props.push(key);}
for(key in arguments){}







support.argsClass=toString.call(arguments)==argsClass;







support.argsObject=arguments.constructor==Object&&!(arguments instanceof Array);








support.enumErrorProps=propertyIsEnumerable.call(errorProto,'message')||propertyIsEnumerable.call(errorProto,'name');












support.enumPrototypes=propertyIsEnumerable.call(ctor,'prototype');








support.funcDecomp=!reNative.test(context.WinRTError)&&reThis.test(runInContext);







support.funcNames=typeof Function.name=='string';








support.nonEnumArgs=key!=0;










support.nonEnumShadows=!/valueOf/.test(props);







support.ownLast=props[0]!='x';













support.spliceObjects=(arrayRef.splice.call(object,0,1),!object[0]);










support.unindexedChars=('x'[0]+Object('x')[0])!='xx';









try{
support.nodeClass=!(toString.call(document)==objectClass&&!({'toString':0}+''));
}catch(e){
support.nodeClass=true;
}
}(1));










lodash.templateSettings={







'escape':/<%-([\s\S]+?)%>/g,







'evaluate':/<%([\s\S]+?)%>/g,







'interpolate':reInterpolate,







'variable':'',







'imports':{







'_':lodash
}
};










var iteratorTemplate=function(obj){

var __p='var index, iterable = '+
(obj.firstArg)+
', result = '+
(obj.init)+
';\nif (!iterable) return result;\n'+
(obj.top)+
';';
if(obj.array){
__p+='\nvar length = iterable.length; index = -1;\nif ('+
(obj.array)+
') {  ';
if(support.unindexedChars){
__p+='\n  if (isString(iterable)) {\n    iterable = iterable.split(\'\')\n  }  ';
}
__p+='\n  while (++index < length) {\n    '+
(obj.loop)+
';\n  }\n}\nelse {  ';
}else if(support.nonEnumArgs){
__p+='\n  var length = iterable.length; index = -1;\n  if (length && isArguments(iterable)) {\n    while (++index < length) {\n      index += \'\';\n      '+
(obj.loop)+
';\n    }\n  } else {  ';
}

if(support.enumPrototypes){
__p+='\n  var skipProto = typeof iterable == \'function\';\n  ';
}

if(support.enumErrorProps){
__p+='\n  var skipErrorProps = iterable === errorProto || iterable instanceof Error;\n  ';
}

var conditions=[];if(support.enumPrototypes){conditions.push('!(skipProto && index == "prototype")');}if(support.enumErrorProps){conditions.push('!(skipErrorProps && (index == "message" || index == "name"))');}

if(obj.useHas&&obj.keys){
__p+='\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] && keys(iterable),\n      length = ownProps ? ownProps.length : 0;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n';
if(conditions.length){
__p+='    if ('+
(conditions.join(' && '))+
') {\n  ';
}
__p+=
(obj.loop)+
';    ';
if(conditions.length){
__p+='\n    }';
}
__p+='\n  }  ';
}else{
__p+='\n  for (index in iterable) {\n';
if(obj.useHas){conditions.push("hasOwnProperty.call(iterable, index)");}if(conditions.length){
__p+='    if ('+
(conditions.join(' && '))+
') {\n  ';
}
__p+=
(obj.loop)+
';    ';
if(conditions.length){
__p+='\n    }';
}
__p+='\n  }    ';
if(support.nonEnumShadows){
__p+='\n\n  if (iterable !== objectProto) {\n    var ctor = iterable.constructor,\n        isProto = iterable === (ctor && ctor.prototype),\n        className = iterable === stringProto ? stringClass : iterable === errorProto ? errorClass : toString.call(iterable),\n        nonEnum = nonEnumProps[className];\n      ';
for(k=0;k<7;k++){
__p+='\n    index = \''+
(obj.shadowedProps[k])+
'\';\n    if ((!(isProto && nonEnum[index]) && hasOwnProperty.call(iterable, index))';
if(!obj.useHas){
__p+=' || (!nonEnum[index] && iterable[index] !== objectProto[index])';
}
__p+=') {\n      '+
(obj.loop)+
';\n    }      ';
}
__p+='\n  }    ';
}

}

if(obj.array||support.nonEnumArgs){
__p+='\n}';
}
__p+=
(obj.bottom)+
';\nreturn result';

return __p
};











function baseBind(bindData){
var func=bindData[0],
partialArgs=bindData[2],
thisArg=bindData[4];

function bound(){


if(partialArgs){
var args=partialArgs.slice();
push.apply(args,arguments);
}


if(this instanceof bound){

var thisBinding=baseCreate(func.prototype),
result=func.apply(thisBinding,args||arguments);
return isObject(result)?result:thisBinding;
}
return func.apply(thisArg,args||arguments);
}
setBindData(bound,bindData);
return bound;
}













function baseClone(value,isDeep,callback,stackA,stackB){
if(callback){
var result=callback(value);
if(typeof result!='undefined'){
return result;
}
}

var isObj=isObject(value);
if(isObj){
var className=toString.call(value);
if(!cloneableClasses[className]||(!support.nodeClass&&isNode(value))){
return value;
}
var ctor=ctorByClass[className];
switch(className){
case boolClass:
case dateClass:
return new ctor(+value);

case numberClass:
case stringClass:
return new ctor(value);

case regexpClass:
result=ctor(value.source,reFlags.exec(value));
result.lastIndex=value.lastIndex;
return result;
}
}else{
return value;
}
var isArr=isArray(value);
if(isDeep){

var initedStack=!stackA;
stackA||(stackA=getArray());
stackB||(stackB=getArray());

var length=stackA.length;
while(length--){
if(stackA[length]==value){
return stackB[length];
}
}
result=isArr?ctor(value.length):{};
}
else{
result=isArr?slice(value):assign({},value);
}

if(isArr){
if(hasOwnProperty.call(value,'index')){
result.index=value.index;
}
if(hasOwnProperty.call(value,'input')){
result.input=value.input;
}
}

if(!isDeep){
return result;
}


stackA.push(value);
stackB.push(result);


(isArr?baseEach:forOwn)(value,function(objValue,key){
result[key]=baseClone(objValue,isDeep,callback,stackA,stackB);
});

if(initedStack){
releaseArray(stackA);
releaseArray(stackB);
}
return result;
}









function baseCreate(prototype,properties){
return isObject(prototype)?nativeCreate(prototype):{};
}

if(!nativeCreate){
baseCreate=(function(){
function Object(){}
return function(prototype){
if(isObject(prototype)){
Object.prototype=prototype;
var result=new Object;
Object.prototype=null;
}
return result||context.Object();
};
}());
}











function baseCreateCallback(func,thisArg,argCount){
if(typeof func!='function'){
return identity;
}

if(typeof thisArg=='undefined'||!('prototype'in func)){
return func;
}
var bindData=func.__bindData__;
if(typeof bindData=='undefined'){
if(support.funcNames){
bindData=!func.name;
}
bindData=bindData||!support.funcDecomp;
if(!bindData){
var source=fnToString.call(func);
if(!support.funcNames){
bindData=!reFuncName.test(source);
}
if(!bindData){

bindData=reThis.test(source);
setBindData(func,bindData);
}
}
}

if(bindData===false||(bindData!==true&&bindData[1]&1)){
return func;
}
switch(argCount){
case 1:return function(value){
return func.call(thisArg,value);
};
case 2:return function(a,b){
return func.call(thisArg,a,b);
};
case 3:return function(value,index,collection){
return func.call(thisArg,value,index,collection);
};
case 4:return function(accumulator,value,index,collection){
return func.call(thisArg,accumulator,value,index,collection);
};
}
return bind(func,thisArg);
}









function baseCreateWrapper(bindData){
var func=bindData[0],
bitmask=bindData[1],
partialArgs=bindData[2],
partialRightArgs=bindData[3],
thisArg=bindData[4],
arity=bindData[5];

var isBind=bitmask&1,
isBindKey=bitmask&2,
isCurry=bitmask&4,
isCurryBound=bitmask&8,
key=func;

function bound(){
var thisBinding=isBind?thisArg:this;
if(partialArgs){
var args=partialArgs.slice();
push.apply(args,arguments);
}
if(partialRightArgs||isCurry){
args||(args=slice(arguments));
if(partialRightArgs){
push.apply(args,partialRightArgs);
}
if(isCurry&&args.length<arity){
bitmask|=16&~32;
return baseCreateWrapper([func,(isCurryBound?bitmask:bitmask&~3),args,null,thisArg,arity]);
}
}
args||(args=arguments);
if(isBindKey){
func=thisBinding[key];
}
if(this instanceof bound){
thisBinding=baseCreate(func.prototype);
var result=func.apply(thisBinding,args);
return isObject(result)?result:thisBinding;
}
return func.apply(thisBinding,args);
}
setBindData(bound,bindData);
return bound;
}










function baseDifference(array,values){
var index=-1,
indexOf=getIndexOf(),
length=array?array.length:0,
isLarge=length>=largeArraySize&&indexOf===baseIndexOf,
result=[];

if(isLarge){
var cache=createCache(values);
if(cache){
indexOf=cacheIndexOf;
values=cache;
}else{
isLarge=false;
}
}
while(++index<length){
var value=array[index];
if(indexOf(values,value)<0){
result.push(value);
}
}
if(isLarge){
releaseObject(values);
}
return result;
}












function baseFlatten(array,isShallow,isStrict,fromIndex){
var index=(fromIndex||0)-1,
length=array?array.length:0,
result=[];

while(++index<length){
var value=array[index];

if(value&&typeof value=='object'&&typeof value.length=='number'
&&(isArray(value)||isArguments(value))){

if(!isShallow){
value=baseFlatten(value,isShallow,isStrict);
}
var valIndex=-1,
valLength=value.length,
resIndex=result.length;

result.length+=valLength;
while(++valIndex<valLength){
result[resIndex++]=value[valIndex];
}
}else if(!isStrict){
result.push(value);
}
}
return result;
}














function baseIsEqual(a,b,callback,isWhere,stackA,stackB){

if(callback){
var result=callback(a,b);
if(typeof result!='undefined'){
return!!result;
}
}

if(a===b){

return a!==0||(1/a==1/b);
}
var type=typeof a,
otherType=typeof b;


if(a===a&&
!(a&&objectTypes[type])&&
!(b&&objectTypes[otherType])){
return false;
}


if(a==null||b==null){
return a===b;
}

var className=toString.call(a),
otherClass=toString.call(b);

if(className==argsClass){
className=objectClass;
}
if(otherClass==argsClass){
otherClass=objectClass;
}
if(className!=otherClass){
return false;
}
switch(className){
case boolClass:
case dateClass:


return+a==+b;

case numberClass:

return(a!=+a)
?b!=+b

:(a==0?(1/a==1/b):a==+b);

case regexpClass:
case stringClass:


return a==String(b);
}
var isArr=className==arrayClass;
if(!isArr){

var aWrapped=hasOwnProperty.call(a,'__wrapped__'),
bWrapped=hasOwnProperty.call(b,'__wrapped__');

if(aWrapped||bWrapped){
return baseIsEqual(aWrapped?a.__wrapped__:a,bWrapped?b.__wrapped__:b,callback,isWhere,stackA,stackB);
}

if(className!=objectClass||(!support.nodeClass&&(isNode(a)||isNode(b)))){
return false;
}

var ctorA=!support.argsObject&&isArguments(a)?Object:a.constructor,
ctorB=!support.argsObject&&isArguments(b)?Object:b.constructor;


if(ctorA!=ctorB&&
!(isFunction(ctorA)&&ctorA instanceof ctorA&&isFunction(ctorB)&&ctorB instanceof ctorB)&&
('constructor'in a&&'constructor'in b)
){
return false;
}
}



var initedStack=!stackA;
stackA||(stackA=getArray());
stackB||(stackB=getArray());

var length=stackA.length;
while(length--){
if(stackA[length]==a){
return stackB[length]==b;
}
}
var size=0;
result=true;


stackA.push(a);
stackB.push(b);


if(isArr){
length=a.length;
size=b.length;


result=size==a.length;
if(!result&&!isWhere){
return result;
}

while(size--){
var index=length,
value=b[size];

if(isWhere){
while(index--){
if((result=baseIsEqual(a[index],value,callback,isWhere,stackA,stackB))){
break;
}
}
}else if(!(result=baseIsEqual(a[size],value,callback,isWhere,stackA,stackB))){
break;
}
}
return result;
}


forIn(b,function(value,key,b){
if(hasOwnProperty.call(b,key)){

size++;

return(result=hasOwnProperty.call(a,key)&&baseIsEqual(a[key],value,callback,isWhere,stackA,stackB));
}
});

if(result&&!isWhere){

forIn(a,function(value,key,a){
if(hasOwnProperty.call(a,key)){

return(result=--size>-1);
}
});
}
if(initedStack){
releaseArray(stackA);
releaseArray(stackB);
}
return result;
}












function baseMerge(object,source,callback,stackA,stackB){
(isArray(source)?forEach:forOwn)(source,function(source,key){
var found,
isArr,
result=source,
value=object[key];

if(source&&((isArr=isArray(source))||isPlainObject(source))){

var stackLength=stackA.length;
while(stackLength--){
if((found=stackA[stackLength]==source)){
value=stackB[stackLength];
break;
}
}
if(!found){
var isShallow;
if(callback){
result=callback(value,source);
if((isShallow=typeof result!='undefined')){
value=result;
}
}
if(!isShallow){
value=isArr
?(isArray(value)?value:[])
:(isPlainObject(value)?value:{});
}

stackA.push(source);
stackB.push(value);


if(!isShallow){
baseMerge(value,source,callback,stackA,stackB);
}
}
}
else{
if(callback){
result=callback(value,source);
if(typeof result=='undefined'){
result=source;
}
}
if(typeof result!='undefined'){
value=result;
}
}
object[key]=value;
});
}










function baseRandom(min,max){
return min+floor(nativeRandom()*(max-min+1));
}











function baseUniq(array,isSorted,callback){
var index=-1,
indexOf=getIndexOf(),
length=array?array.length:0,
result=[];

var isLarge=!isSorted&&length>=largeArraySize&&indexOf===baseIndexOf,
seen=(callback||isLarge)?getArray():result;

if(isLarge){
var cache=createCache(seen);
if(cache){
indexOf=cacheIndexOf;
seen=cache;
}else{
isLarge=false;
seen=callback?seen:(releaseArray(seen),result);
}
}
while(++index<length){
var value=array[index],
computed=callback?callback(value,index,array):value;

if(isSorted
?!index||seen[seen.length-1]!==computed
:indexOf(seen,computed)<0
){
if(callback||isLarge){
seen.push(computed);
}
result.push(value);
}
}
if(isLarge){
releaseArray(seen.array);
releaseObject(seen);
}else if(callback){
releaseArray(seen);
}
return result;
}











function createAggregator(setter){
return function(collection,callback,thisArg){
var result={};
callback=lodash.createCallback(callback,thisArg,3);

if(isArray(collection)){
var index=-1,
length=collection.length;

while(++index<length){
var value=collection[index];
setter(result,value,callback(value,index,collection),collection);
}
}else{
baseEach(collection,function(value,key,collection){
setter(result,value,callback(value,key,collection),collection);
});
}
return result;
};
}























function createWrapper(func,bitmask,partialArgs,partialRightArgs,thisArg,arity){
var isBind=bitmask&1,
isBindKey=bitmask&2,
isCurry=bitmask&4,
isCurryBound=bitmask&8,
isPartial=bitmask&16,
isPartialRight=bitmask&32;

if(!isBindKey&&!isFunction(func)){
throw new TypeError;
}
if(isPartial&&!partialArgs.length){
bitmask&=~16;
isPartial=partialArgs=false;
}
if(isPartialRight&&!partialRightArgs.length){
bitmask&=~32;
isPartialRight=partialRightArgs=false;
}
var bindData=func&&func.__bindData__;
if(bindData&&bindData!==true){
bindData=bindData.slice();


if(isBind&&!(bindData[1]&1)){
bindData[4]=thisArg;
}

if(!isBind&&bindData[1]&1){
bitmask|=8;
}

if(isCurry&&!(bindData[1]&4)){
bindData[5]=arity;
}

if(isPartial){
push.apply(bindData[2]||(bindData[2]=[]),partialArgs);
}

if(isPartialRight){
push.apply(bindData[3]||(bindData[3]=[]),partialRightArgs);
}

bindData[1]|=bitmask;
return createWrapper.apply(null,bindData);
}

var creater=(bitmask==1||bitmask===17)?baseBind:baseCreateWrapper;
return creater([func,bitmask,partialArgs,partialRightArgs,thisArg,arity]);
}















function createIterator(){

iteratorData.shadowedProps=shadowedProps;


iteratorData.array=iteratorData.bottom=iteratorData.loop=iteratorData.top='';
iteratorData.init='iterable';
iteratorData.useHas=true;


for(var object,index=0;object=arguments[index];index++){
for(var key in object){
iteratorData[key]=object[key];
}
}
var args=iteratorData.args;
iteratorData.firstArg=/^[^,]+/.exec(args)[0];


var factory=Function(
'baseCreateCallback, errorClass, errorProto, hasOwnProperty, '+
'indicatorObject, isArguments, isArray, isString, keys, objectProto, '+
'objectTypes, nonEnumProps, stringClass, stringProto, toString',
'return function('+args+') {\n'+iteratorTemplate(iteratorData)+'\n}'
);


return factory(
baseCreateCallback,errorClass,errorProto,hasOwnProperty,
indicatorObject,isArguments,isArray,isString,iteratorData.keys,objectProto,
objectTypes,nonEnumProps,stringClass,stringProto,toString
);
}








function escapeHtmlChar(match){
return htmlEscapes[match];
}









function getIndexOf(){
var result=(result=lodash.indexOf)===indexOf?baseIndexOf:result;
return result;
}








var setBindData=!defineProperty?noop:function(func,value){
descriptor.value=value;
defineProperty(func,'__bindData__',descriptor);
};











function shimIsPlainObject(value){
var ctor,
result;


if(!(value&&toString.call(value)==objectClass)||
(ctor=value.constructor,isFunction(ctor)&&!(ctor instanceof ctor))||
(!support.argsClass&&isArguments(value))||
(!support.nodeClass&&isNode(value))){
return false;
}



if(support.ownLast){
forIn(value,function(value,key,object){
result=hasOwnProperty.call(object,key);
return false;
});
return result!==false;
}



forIn(value,function(value,key){
result=key;
});
return typeof result=='undefined'||hasOwnProperty.call(value,result);
}








function unescapeHtmlChar(match){
return htmlUnescapes[match];
}



















function isArguments(value){
return value&&typeof value=='object'&&typeof value.length=='number'&&
toString.call(value)==argsClass||false;
}

if(!support.argsClass){
isArguments=function(value){
return value&&typeof value=='object'&&typeof value.length=='number'&&
hasOwnProperty.call(value,'callee')&&!propertyIsEnumerable.call(value,'callee')||false;
};
}


















var isArray=nativeIsArray||function(value){
return value&&typeof value=='object'&&typeof value.length=='number'&&
toString.call(value)==arrayClass||false;
};










var shimKeys=createIterator({
'args':'object',
'init':'[]',
'top':'if (!(objectTypes[typeof object])) return result',
'loop':'result.push(index)'
});














var keys=!nativeKeys?shimKeys:function(object){
if(!isObject(object)){
return[];
}
if((support.enumPrototypes&&typeof object=='function')||
(support.nonEnumArgs&&object.length&&isArguments(object))){
return shimKeys(object);
}
return nativeKeys(object);
};


var eachIteratorOptions={
'args':'collection, callback, thisArg',
'top':"callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3)",
'array':"typeof length == 'number'",
'keys':keys,
'loop':'if (callback(iterable[index], index, collection) === false) return result'
};


var defaultsIteratorOptions={
'args':'object, source, guard',
'top':
'var args = arguments,\n'+
'    argsIndex = 0,\n'+
"    argsLength = typeof guard == 'number' ? 2 : args.length;\n"+
'while (++argsIndex < argsLength) {\n'+
'  iterable = args[argsIndex];\n'+
'  if (iterable && objectTypes[typeof iterable]) {',
'keys':keys,
'loop':"if (typeof result[index] == 'undefined') result[index] = iterable[index]",
'bottom':'  }\n}'
};


var forOwnIteratorOptions={
'top':'if (!objectTypes[typeof iterable]) return result;\n'+eachIteratorOptions.top,
'array':false
};









var htmlEscapes={
'&':'&amp;',
'<':'&lt;',
'>':'&gt;',
'"':'&quot;',
"'":'&#39;'
};


var htmlUnescapes=invert(htmlEscapes);


var reEscapedHtml=RegExp('('+keys(htmlUnescapes).join('|')+')','g'),
reUnescapedHtml=RegExp('['+keys(htmlEscapes).join('')+']','g');















var baseEach=createIterator(eachIteratorOptions);

































var assign=createIterator(defaultsIteratorOptions,{
'top':
defaultsIteratorOptions.top.replace(';',
';\n'+
"if (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n"+
'  var callback = baseCreateCallback(args[--argsLength - 1], args[argsLength--], 2);\n'+
"} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n"+
'  callback = args[--argsLength];\n'+
'}'
),
'loop':'result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]'
});









































function clone(value,isDeep,callback,thisArg){


if(typeof isDeep!='boolean'&&isDeep!=null){
thisArg=callback;
callback=isDeep;
isDeep=false;
}
return baseClone(value,isDeep,typeof callback=='function'&&baseCreateCallback(callback,thisArg,1));
}










































function cloneDeep(value,callback,thisArg){
return baseClone(value,true,typeof callback=='function'&&baseCreateCallback(callback,thisArg,1));
}
































function create(prototype,properties){
var result=baseCreate(prototype);
return properties?assign(result,properties):result;
}





















var defaults=createIterator(defaultsIteratorOptions);










































function findKey(object,callback,thisArg){
var result;
callback=lodash.createCallback(callback,thisArg,3);
forOwn(object,function(value,key,object){
if(callback(value,key,object)){
result=key;
return false;
}
});
return result;
}










































function findLastKey(object,callback,thisArg){
var result;
callback=lodash.createCallback(callback,thisArg,3);
forOwnRight(object,function(value,key,object){
if(callback(value,key,object)){
result=key;
return false;
}
});
return result;
}
































var forIn=createIterator(eachIteratorOptions,forOwnIteratorOptions,{
'useHas':false
});





























function forInRight(object,callback,thisArg){
var pairs=[];

forIn(object,function(value,key){
pairs.push(key,value);
});

var length=pairs.length;
callback=baseCreateCallback(callback,thisArg,3);
while(length--){
if(callback(pairs[length--],pairs[length],object)===false){
break;
}
}
return object;
}






















var forOwn=createIterator(eachIteratorOptions,forOwnIteratorOptions);



















function forOwnRight(object,callback,thisArg){
var props=keys(object),
length=props.length;

callback=baseCreateCallback(callback,thisArg,3);
while(length--){
var key=props[length];
if(callback(object[key],key,object)===false){
break;
}
}
return object;
}
















function functions(object){
var result=[];
forIn(object,function(value,key){
if(isFunction(value)){
result.push(key);
}
});
return result.sort();
}
















function has(object,property){
return object?hasOwnProperty.call(object,property):false;
}














function invert(object){
var index=-1,
props=keys(object),
length=props.length,
result={};

while(++index<length){
var key=props[index];
result[object[key]]=key;
}
return result;
}














function isBoolean(value){
return value===true||value===false||
value&&typeof value=='object'&&toString.call(value)==boolClass||false;
}














function isDate(value){
return value&&typeof value=='object'&&toString.call(value)==dateClass||false;
}














function isElement(value){
return value&&value.nodeType===1||false;
}






















function isEmpty(value){
var result=true;
if(!value){
return result;
}
var className=toString.call(value),
length=value.length;

if((className==arrayClass||className==stringClass||
(support.argsClass?className==argsClass:isArguments(value)))||
(className==objectClass&&typeof length=='number'&&isFunction(value.splice))){
return!length;
}
forOwn(value,function(){
return(result=false);
});
return result;
}







































function isEqual(a,b,callback,thisArg){
return baseIsEqual(a,b,typeof callback=='function'&&baseCreateCallback(callback,thisArg,2));
}





























function isFinite(value){
return nativeIsFinite(value)&&!nativeIsNaN(parseFloat(value));
}














function isFunction(value){
return typeof value=='function';
}

if(isFunction(/x/)){
isFunction=function(value){
return typeof value=='function'&&toString.call(value)==funcClass;
};
}





















function isObject(value){




return!!(value&&objectTypes[typeof value]);
}


























function isNaN(value){


return isNumber(value)&&value!=+value;
}

















function isNull(value){
return value===null;
}
















function isNumber(value){
return typeof value=='number'||
value&&typeof value=='object'&&toString.call(value)==numberClass||false;
}

























var isPlainObject=!getPrototypeOf?shimIsPlainObject:function(value){
if(!(value&&toString.call(value)==objectClass)||(!support.argsClass&&isArguments(value))){
return false;
}
var valueOf=value.valueOf,
objProto=typeof valueOf=='function'&&(objProto=getPrototypeOf(valueOf))&&getPrototypeOf(objProto);

return objProto
?(value==objProto||getPrototypeOf(value)==objProto)
:shimIsPlainObject(value);
};














function isRegExp(value){
return value&&objectTypes[typeof value]&&toString.call(value)==regexpClass||false;
}














function isString(value){
return typeof value=='string'||
value&&typeof value=='object'&&toString.call(value)==stringClass||false;
}














function isUndefined(value){
return typeof value=='undefined';
}




















































function merge(object){
var args=arguments,
length=2;

if(!isObject(object)){
return object;
}



if(typeof args[2]!='number'){
length=args.length;
}
if(length>3&&typeof args[length-2]=='function'){
var callback=baseCreateCallback(args[--length-1],args[length--],2);
}else if(length>2&&typeof args[length-1]=='function'){
callback=args[--length];
}
var sources=slice(arguments,1,length),
index=-1,
stackA=getArray(),
stackB=getArray();

while(++index<length){
baseMerge(object,sources[index],callback,stackA,stackB);
}
releaseArray(stackA);
releaseArray(stackB);
return object;
}



























function omit(object,callback,thisArg){
var result={};
if(typeof callback!='function'){
var props=[];
forIn(object,function(value,key){
props.push(key);
});
props=baseDifference(props,baseFlatten(arguments,true,false,1));

var index=-1,
length=props.length;

while(++index<length){
var key=props[index];
result[key]=object[key];
}
}else{
callback=lodash.createCallback(callback,thisArg,3);
forIn(object,function(value,key,object){
if(!callback(value,key,object)){
result[key]=value;
}
});
}
return result;
}















function pairs(object){
var index=-1,
props=keys(object),
length=props.length,
result=Array(length);

while(++index<length){
var key=props[index];
result[index]=[key,object[key]];
}
return result;
}




























function pick(object,callback,thisArg){
var result={};
if(typeof callback!='function'){
var index=-1,
props=baseFlatten(arguments,true,false,1),
length=isObject(object)?props.length:0;

while(++index<length){
var key=props[index];
if(key in object){
result[key]=object[key];
}
}
}else{
callback=lodash.createCallback(callback,thisArg,3);
forIn(object,function(value,key,object){
if(callback(value,key,object)){
result[key]=value;
}
});
}
return result;
}
































function transform(object,callback,accumulator,thisArg){
var isArr=isArray(object);
if(accumulator==null){
if(isArr){
accumulator=[];
}else{
var ctor=object&&object.constructor,
proto=ctor&&ctor.prototype;

accumulator=baseCreate(proto);
}
}
if(callback){
callback=lodash.createCallback(callback,thisArg,4);
(isArr?baseEach:forOwn)(object,function(value,index,object){
return callback(accumulator,value,index,object);
});
}
return accumulator;
}














function values(object){
var index=-1,
props=keys(object),
length=props.length,
result=Array(length);

while(++index<length){
result[index]=object[props[index]];
}
return result;
}
























function at(collection){
var args=arguments,
index=-1,
props=baseFlatten(args,true,false,1),
length=(args[2]&&args[2][args[1]]===collection)?1:props.length,
result=Array(length);

if(support.unindexedChars&&isString(collection)){
collection=collection.split('');
}
while(++index<length){
result[index]=collection[props[index]];
}
return result;
}




























function contains(collection,target,fromIndex){
var index=-1,
indexOf=getIndexOf(),
length=collection?collection.length:0,
result=false;

fromIndex=(fromIndex<0?nativeMax(0,length+fromIndex):fromIndex)||0;
if(isArray(collection)){
result=indexOf(collection,target,fromIndex)>-1;
}else if(typeof length=='number'){
result=(isString(collection)?collection.indexOf(target,fromIndex):indexOf(collection,target,fromIndex))>-1;
}else{
baseEach(collection,function(value){
if(++index>=fromIndex){
return!(result=value===target);
}
});
}
return result;
}



































var countBy=createAggregator(function(result,value,key){
(hasOwnProperty.call(result,key)?result[key]++:result[key]=1);
});










































function every(collection,callback,thisArg){
var result=true;
callback=lodash.createCallback(callback,thisArg,3);

if(isArray(collection)){
var index=-1,
length=collection.length;

while(++index<length){
if(!(result=!!callback(collection[index],index,collection))){
break;
}
}
}else{
baseEach(collection,function(value,index,collection){
return(result=!!callback(value,index,collection));
});
}
return result;
}









































function filter(collection,callback,thisArg){
var result=[];
callback=lodash.createCallback(callback,thisArg,3);

if(isArray(collection)){
var index=-1,
length=collection.length;

while(++index<length){
var value=collection[index];
if(callback(value,index,collection)){
result.push(value);
}
}
}else{
baseEach(collection,function(value,index,collection){
if(callback(value,index,collection)){
result.push(value);
}
});
}
return result;
}












































function find(collection,callback,thisArg){
callback=lodash.createCallback(callback,thisArg,3);

if(isArray(collection)){
var index=-1,
length=collection.length;

while(++index<length){
var value=collection[index];
if(callback(value,index,collection)){
return value;
}
}
}else{
var result;
baseEach(collection,function(value,index,collection){
if(callback(value,index,collection)){
result=value;
return false;
}
});
return result;
}
}





















function findLast(collection,callback,thisArg){
var result;
callback=lodash.createCallback(callback,thisArg,3);
forEachRight(collection,function(value,index,collection){
if(callback(value,index,collection)){
result=value;
return false;
}
});
return result;
}



























function forEach(collection,callback,thisArg){
if(callback&&typeof thisArg=='undefined'&&isArray(collection)){
var index=-1,
length=collection.length;

while(++index<length){
if(callback(collection[index],index,collection)===false){
break;
}
}
}else{
baseEach(collection,callback,thisArg);
}
return collection;
}


















function forEachRight(collection,callback,thisArg){
var iterable=collection,
length=collection?collection.length:0;

callback=callback&&typeof thisArg=='undefined'?callback:baseCreateCallback(callback,thisArg,3);
if(isArray(collection)){
while(length--){
if(callback(collection[length],length,collection)===false){
break;
}
}
}else{
if(typeof length!='number'){
var props=keys(collection);
length=props.length;
}else if(support.unindexedChars&&isString(collection)){
iterable=collection.split('');
}
baseEach(collection,function(value,key,collection){
key=props?props[--length]:--length;
return callback(iterable[key],key,collection);
});
}
return collection;
}




































var groupBy=createAggregator(function(result,value,key){
(hasOwnProperty.call(result,key)?result[key]:result[key]=[]).push(value);
});








































var indexBy=createAggregator(function(result,value,key){
result[key]=value;
});























function invoke(collection,methodName){
var args=slice(arguments,2),
index=-1,
isFunc=typeof methodName=='function',
length=collection?collection.length:0,
result=Array(typeof length=='number'?length:0);

forEach(collection,function(value){
result[++index]=(isFunc?methodName:value[methodName]).apply(value,args);
});
return result;
}








































function map(collection,callback,thisArg){
var index=-1,
length=collection?collection.length:0,
result=Array(typeof length=='number'?length:0);

callback=lodash.createCallback(callback,thisArg,3);
if(isArray(collection)){
while(++index<length){
result[index]=callback(collection[index],index,collection);
}
}else{
baseEach(collection,function(value,key,collection){
result[++index]=callback(value,key,collection);
});
}
return result;
}









































function max(collection,callback,thisArg){
var computed=-Infinity,
result=computed;



if(typeof callback!='function'&&thisArg&&thisArg[callback]===collection){
callback=null;
}
if(callback==null&&isArray(collection)){
var index=-1,
length=collection.length;

while(++index<length){
var value=collection[index];
if(value>result){
result=value;
}
}
}else{
callback=(callback==null&&isString(collection))
?charAtCallback
:lodash.createCallback(callback,thisArg,3);

baseEach(collection,function(value,index,collection){
var current=callback(value,index,collection);
if(current>computed){
computed=current;
result=value;
}
});
}
return result;
}









































function min(collection,callback,thisArg){
var computed=Infinity,
result=computed;



if(typeof callback!='function'&&thisArg&&thisArg[callback]===collection){
callback=null;
}
if(callback==null&&isArray(collection)){
var index=-1,
length=collection.length;

while(++index<length){
var value=collection[index];
if(value<result){
result=value;
}
}
}else{
callback=(callback==null&&isString(collection))
?charAtCallback
:lodash.createCallback(callback,thisArg,3);

baseEach(collection,function(value,index,collection){
var current=callback(value,index,collection);
if(current<computed){
computed=current;
result=value;
}
});
}
return result;
}





















var pluck=map;































function reduce(collection,callback,accumulator,thisArg){
var noaccum=arguments.length<3;
callback=lodash.createCallback(callback,thisArg,4);

if(isArray(collection)){
var index=-1,
length=collection.length;

if(noaccum){
accumulator=collection[++index];
}
while(++index<length){
accumulator=callback(accumulator,collection[index],index,collection);
}
}else{
baseEach(collection,function(value,index,collection){
accumulator=noaccum
?(noaccum=false,value)
:callback(accumulator,value,index,collection)
});
}
return accumulator;
}




















function reduceRight(collection,callback,accumulator,thisArg){
var noaccum=arguments.length<3;
callback=lodash.createCallback(callback,thisArg,4);
forEachRight(collection,function(value,index,collection){
accumulator=noaccum
?(noaccum=false,value)
:callback(accumulator,value,index,collection);
});
return accumulator;
}







































function reject(collection,callback,thisArg){
callback=lodash.createCallback(callback,thisArg,3);
return filter(collection,function(value,index,collection){
return!callback(value,index,collection);
});
}




















function sample(collection,n,guard){
if(collection&&typeof collection.length!='number'){
collection=values(collection);
}else if(support.unindexedChars&&isString(collection)){
collection=collection.split('');
}
if(n==null||guard){
return collection?collection[baseRandom(0,collection.length-1)]:undefined;
}
var result=shuffle(collection);
result.length=nativeMin(nativeMax(0,n),result.length);
return result;
}















function shuffle(collection){
var index=-1,
length=collection?collection.length:0,
result=Array(typeof length=='number'?length:0);

forEach(collection,function(value){
var rand=baseRandom(0,++index);
result[index]=result[rand];
result[rand]=value;
});
return result;
}





















function size(collection){
var length=collection?collection.length:0;
return typeof length=='number'?length:keys(collection).length;
}











































function some(collection,callback,thisArg){
var result;
callback=lodash.createCallback(callback,thisArg,3);

if(isArray(collection)){
var index=-1,
length=collection.length;

while(++index<length){
if((result=callback(collection[index],index,collection))){
break;
}
}
}else{
baseEach(collection,function(value,index,collection){
return!(result=callback(value,index,collection));
});
}
return!!result;
}




































function sortBy(collection,callback,thisArg){
var index=-1,
length=collection?collection.length:0,
result=Array(typeof length=='number'?length:0);

callback=lodash.createCallback(callback,thisArg,3);
forEach(collection,function(value,key,collection){
var object=result[++index]=getObject();
object.criteria=callback(value,key,collection);
object.index=index;
object.value=value;
});

length=result.length;
result.sort(compareAscending);
while(length--){
var object=result[length];
result[length]=object.value;
releaseObject(object);
}
return result;
}














function toArray(collection){
if(collection&&typeof collection.length=='number'){
return(support.unindexedChars&&isString(collection))
?collection.split('')
:slice(collection);
}
return values(collection);
}


























var where=filter;

















function compact(array){
var index=-1,
length=array?array.length:0,
result=[];

while(++index<length){
var value=array[index];
if(value){
result.push(value);
}
}
return result;
}
















function difference(array){
return baseDifference(array,baseFlatten(arguments,true,true,1));
}










































function findIndex(array,callback,thisArg){
var index=-1,
length=array?array.length:0;

callback=lodash.createCallback(callback,thisArg,3);
while(++index<length){
if(callback(array[index],index,array)){
return index;
}
}
return-1;
}










































function findLastIndex(array,callback,thisArg){
var length=array?array.length:0;
callback=lodash.createCallback(callback,thisArg,3);
while(length--){
if(callback(array[length],length,array)){
return length;
}
}
return-1;
}




















































function first(array,callback,thisArg){
var n=0,
length=array?array.length:0;

if(typeof callback!='number'&&callback!=null){
var index=-1;
callback=lodash.createCallback(callback,thisArg,3);
while(++index<length&&callback(array[index],index,array)){
n++;
}
}else{
n=callback;
if(n==null||thisArg){
return array?array[0]:undefined;
}
}
return slice(array,0,nativeMin(nativeMax(0,n),length));
}










































function flatten(array,isShallow,callback,thisArg){

if(typeof isShallow!='boolean'&&isShallow!=null){
thisArg=callback;
callback=(typeof isShallow!='function'&&thisArg&&thisArg[isShallow]===array)?null:isShallow;
isShallow=false;
}
if(callback!=null){
array=map(array,callback,thisArg);
}
return baseFlatten(array,isShallow);
}

























function indexOf(array,value,fromIndex){
if(typeof fromIndex=='number'){
var length=array?array.length:0;
fromIndex=(fromIndex<0?nativeMax(0,length+fromIndex):fromIndex||0);
}else if(fromIndex){
var index=sortedIndex(array,value);
return array[index]===value?index:-1;
}
return baseIndexOf(array,value,fromIndex);
}



















































function initial(array,callback,thisArg){
var n=0,
length=array?array.length:0;

if(typeof callback!='number'&&callback!=null){
var index=length;
callback=lodash.createCallback(callback,thisArg,3);
while(index--&&callback(array[index],index,array)){
n++;
}
}else{
n=(callback==null||thisArg)?1:callback||n;
}
return slice(array,0,nativeMin(nativeMax(0,length-n),length));
}















function intersection(array){
var args=arguments,
argsLength=args.length,
argsIndex=-1,
caches=getArray(),
index=-1,
indexOf=getIndexOf(),
length=array?array.length:0,
result=[],
seen=getArray();

while(++argsIndex<argsLength){
var value=args[argsIndex];
caches[argsIndex]=indexOf===baseIndexOf&&
(value?value.length:0)>=largeArraySize&&
createCache(argsIndex?args[argsIndex]:seen);
}
outer:
while(++index<length){
var cache=caches[0];
value=array[index];

if((cache?cacheIndexOf(cache,value):indexOf(seen,value))<0){
argsIndex=argsLength;
(cache||seen).push(value);
while(--argsIndex){
cache=caches[argsIndex];
if((cache?cacheIndexOf(cache,value):indexOf(args[argsIndex],value))<0){
continue outer;
}
}
result.push(value);
}
}
while(argsLength--){
cache=caches[argsLength];
if(cache){
releaseObject(cache);
}
}
releaseArray(caches);
releaseArray(seen);
return result;
}



















































function last(array,callback,thisArg){
var n=0,
length=array?array.length:0;

if(typeof callback!='number'&&callback!=null){
var index=length;
callback=lodash.createCallback(callback,thisArg,3);
while(index--&&callback(array[index],index,array)){
n++;
}
}else{
n=callback;
if(n==null||thisArg){
return array?array[length-1]:undefined;
}
}
return slice(array,nativeMax(0,length-n));
}




























function lastIndexOf(array,value,fromIndex){
var index=array?array.length:0;
if(typeof fromIndex=='number'){
index=(fromIndex<0?nativeMax(0,index+fromIndex):nativeMin(fromIndex,index-1))+1;
}
while(index--){
if(array[index]===value){
return index;
}
}
return-1;
}


















function pull(array){
var args=arguments,
argsIndex=0,
argsLength=args.length,
length=array?array.length:0;

while(++argsIndex<argsLength){
var index=-1,
value=args[argsIndex];
while(++index<length){
if(array[index]===value){
splice.call(array,index--,1);
length--;
}
}
}
return array;
}

































function range(start,end,step){
start=+start||0;
step=typeof step=='number'?step:(+step||1);

if(end==null){
end=start;
start=0;
}


var index=-1,
length=nativeMax(0,ceil((end-start)/(step||1))),
result=Array(length);

while(++index<length){
result[index]=start;
start+=step;
}
return result;
}

































function remove(array,callback,thisArg){
var index=-1,
length=array?array.length:0,
result=[];

callback=lodash.createCallback(callback,thisArg,3);
while(++index<length){
var value=array[index];
if(callback(value,index,array)){
result.push(value);
splice.call(array,index--,1);
length--;
}
}
return result;
}





















































function rest(array,callback,thisArg){
if(typeof callback!='number'&&callback!=null){
var n=0,
index=-1,
length=array?array.length:0;

callback=lodash.createCallback(callback,thisArg,3);
while(++index<length&&callback(array[index],index,array)){
n++;
}
}else{
n=(callback==null||thisArg)?1:nativeMax(0,callback);
}
return slice(array,n);
}

















































function sortedIndex(array,value,callback,thisArg){
var low=0,
high=array?array.length:low;


callback=callback?lodash.createCallback(callback,thisArg,1):identity;
value=callback(value);

while(low<high){
var mid=(low+high)>>>1;
(callback(array[mid])<value)
?low=mid+1
:high=mid;
}
return low;
}















function union(array){
return baseUniq(baseFlatten(arguments,true,true));
}













































function uniq(array,isSorted,callback,thisArg){

if(typeof isSorted!='boolean'&&isSorted!=null){
thisArg=callback;
callback=(typeof isSorted!='function'&&thisArg&&thisArg[isSorted]===array)?null:isSorted;
isSorted=false;
}
if(callback!=null){
callback=lodash.createCallback(callback,thisArg,3);
}
return baseUniq(array,isSorted,callback);
}
















function without(array){
return baseDifference(array,slice(arguments,1));
}

















function zip(){
var array=arguments.length>1?arguments:arguments[0],
index=-1,
length=array?max(pluck(array,'length')):0,
result=Array(length<0?0:length);

while(++index<length){
result[index]=pluck(array,index);
}
return result;
}



















function zipObject(keys,values){
var index=-1,
length=keys?keys.length:0,
result={};

while(++index<length){
var key=keys[index];
if(values){
result[key]=values[index];
}else if(key){
result[key[0]]=key[1];
}
}
return result;
}



























function after(n,func){
if(!isFunction(func)){
throw new TypeError;
}
return function(){
if(--n<1){
return func.apply(this,arguments);
}
};
}























function bind(func,thisArg){
return arguments.length>2
?createWrapper(func,17,slice(arguments,2),null,thisArg)
:createWrapper(func,1,null,null,thisArg);
}

























function bindAll(object){
var funcs=arguments.length>1?baseFlatten(arguments,true,false,1):functions(object),
index=-1,
length=funcs.length;

while(++index<length){
var key=funcs[index];
object[key]=createWrapper(object[key],1,null,null,object);
}
return object;
}



































function bindKey(object,key){
return arguments.length>2
?createWrapper(key,19,slice(arguments,2),null,object)
:createWrapper(key,3,null,null,object);
}































function compose(){
var funcs=arguments,
length=funcs.length;

while(length--){
if(!isFunction(funcs[length])){
throw new TypeError;
}
}
return function(){
var args=arguments,
length=funcs.length;

while(length--){
args=[funcs[length].apply(this,args)];
}
return args[0];
};
}
































function createCallback(func,thisArg,argCount){
var type=typeof func;
if(func==null||type=='function'){
return baseCreateCallback(func,thisArg,argCount);
}

if(type!='object'){
return function(object){
return object[func];
};
}
var props=keys(func),
key=props[0],
a=func[key];


if(props.length==1&&a===a&&!isObject(a)){


return function(object){
var b=object[key];
return a===b&&(a!==0||(1/a==1/b));
};
}
return function(object){
var length=props.length,
result=false;

while(length--){
if(!(result=baseIsEqual(object[props[length]],func[props[length]],null,true))){
break;
}
}
return result;
};
}





























function curry(func,arity){
arity=typeof arity=='number'?arity:(+arity||func.length);
return createWrapper(func,4,null,null,null,arity);
}








































function debounce(func,wait,options){
var args,
maxTimeoutId,
result,
stamp,
thisArg,
timeoutId,
trailingCall,
lastCalled=0,
maxWait=false,
trailing=true;

if(!isFunction(func)){
throw new TypeError;
}
wait=nativeMax(0,wait)||0;
if(options===true){
var leading=true;
trailing=false;
}else if(isObject(options)){
leading=options.leading;
maxWait='maxWait'in options&&(nativeMax(wait,options.maxWait)||0);
trailing='trailing'in options?options.trailing:trailing;
}
var delayed=function(){
var remaining=wait-(now()-stamp);
if(remaining<=0){
if(maxTimeoutId){
clearTimeout(maxTimeoutId);
}
var isCalled=trailingCall;
maxTimeoutId=timeoutId=trailingCall=undefined;
if(isCalled){
lastCalled=now();
result=func.apply(thisArg,args);
if(!timeoutId&&!maxTimeoutId){
args=thisArg=null;
}
}
}else{
timeoutId=setTimeout(delayed,remaining);
}
};

var maxDelayed=function(){
if(timeoutId){
clearTimeout(timeoutId);
}
maxTimeoutId=timeoutId=trailingCall=undefined;
if(trailing||(maxWait!==wait)){
lastCalled=now();
result=func.apply(thisArg,args);
if(!timeoutId&&!maxTimeoutId){
args=thisArg=null;
}
}
};

return function(){
args=arguments;
stamp=now();
thisArg=this;
trailingCall=trailing&&(timeoutId||!leading);

if(maxWait===false){
var leadingCall=leading&&!timeoutId;
}else{
if(!maxTimeoutId&&!leading){
lastCalled=stamp;
}
var remaining=maxWait-(stamp-lastCalled),
isCalled=remaining<=0;

if(isCalled){
if(maxTimeoutId){
maxTimeoutId=clearTimeout(maxTimeoutId);
}
lastCalled=stamp;
result=func.apply(thisArg,args);
}
else if(!maxTimeoutId){
maxTimeoutId=setTimeout(maxDelayed,remaining);
}
}
if(isCalled&&timeoutId){
timeoutId=clearTimeout(timeoutId);
}
else if(!timeoutId&&wait!==maxWait){
timeoutId=setTimeout(delayed,wait);
}
if(leadingCall){
isCalled=true;
result=func.apply(thisArg,args);
}
if(isCalled&&!timeoutId&&!maxTimeoutId){
args=thisArg=null;
}
return result;
};
}
















function defer(func){
if(!isFunction(func)){
throw new TypeError;
}
var args=slice(arguments,1);
return setTimeout(function(){func.apply(undefined,args);},1);
}

if(setImmediate){
defer=function(func){
if(!isFunction(func)){
throw new TypeError;
}
return setImmediate.apply(context,arguments);
};
}


















function delay(func,wait){
if(!isFunction(func)){
throw new TypeError;
}
var args=slice(arguments,2);
return setTimeout(function(){func.apply(undefined,args);},wait);
}






































function memoize(func,resolver){
if(!isFunction(func)){
throw new TypeError;
}
var memoized=function(){
var cache=memoized.cache,
key=resolver?resolver.apply(this,arguments):keyPrefix+arguments[0];

return hasOwnProperty.call(cache,key)
?cache[key]
:(cache[key]=func.apply(this,arguments));
}
memoized.cache={};
return memoized;
}


















function once(func){
var ran,
result;

if(!isFunction(func)){
throw new TypeError;
}
return function(){
if(ran){
return result;
}
ran=true;
result=func.apply(this,arguments);


func=null;
return result;
};
}



















function partial(func){
return createWrapper(func,16,slice(arguments,1));
}




























function partialRight(func){
return createWrapper(func,32,null,slice(arguments,1));
}
































function throttle(func,wait,options){
var leading=true,
trailing=true;

if(!isFunction(func)){
throw new TypeError;
}
if(options===false){
leading=false;
}else if(isObject(options)){
leading='leading'in options?options.leading:leading;
trailing='trailing'in options?options.trailing:trailing;
}
debounceOptions.leading=leading;
debounceOptions.maxWait=wait;
debounceOptions.trailing=trailing;

return debounce(func,wait,debounceOptions);
}






















function wrap(value,wrapper){
return createWrapper(wrapper,16,[value]);
}

















function escape(string){
return string==null?'':String(string).replace(reUnescapedHtml,escapeHtmlChar);
}















function identity(value){
return value;
}
























function mixin(object,source){
var ctor=object,
isFunc=!source||isFunction(ctor);

if(!source){
ctor=lodashWrapper;
source=object;
object=lodash;
}
forEach(functions(source),function(methodName){
var func=object[methodName]=source[methodName];
if(isFunc){
ctor.prototype[methodName]=function(){
var value=this.__wrapped__,
args=[value];

push.apply(args,arguments);
var result=func.apply(object,args);
if(value&&typeof value=='object'&&value===result){
return this;
}
result=new ctor(result);
result.__chain__=this.__chain__;
return result;
};
}
});
}













function noConflict(){
context._=oldDash;
return this;
}













function noop(){

}




















var parseInt=nativeParseInt(whitespace+'08')==8?nativeParseInt:function(value,radix){

return nativeParseInt(isString(value)?value.replace(reLeadingSpacesAndZeros,''):value,radix||0);
};




























function random(min,max,floating){
var noMin=min==null,
noMax=max==null;

if(floating==null){
if(typeof min=='boolean'&&noMax){
floating=min;
min=1;
}
else if(!noMax&&typeof max=='boolean'){
floating=max;
noMax=true;
}
}
if(noMin&&noMax){
max=1;
}
min=+min||0;
if(noMax){
max=min;
min=0;
}else{
max=+max||0;
}
if(floating||min%1||max%1){
var rand=nativeRandom();
return nativeMin(min+(rand*(max-min+parseFloat('1e-'+((rand+'').length-1)))),max);
}
return baseRandom(min,max);
}




























function result(object,property){
if(object){
var value=object[property];
return isFunction(value)?object[property]():value;
}
}























































































function template(text,data,options){




var settings=lodash.templateSettings;
text=String(text||'');


options=defaults({},options,settings);

var imports=defaults({},options.imports,settings.imports),
importsKeys=keys(imports),
importsValues=values(imports);

var isEvaluating,
index=0,
interpolate=options.interpolate||reNoMatch,
source="__p += '";


var reDelimiters=RegExp(
(options.escape||reNoMatch).source+'|'+
interpolate.source+'|'+
(interpolate===reInterpolate?reEsTemplate:reNoMatch).source+'|'+
(options.evaluate||reNoMatch).source+'|$'
,'g');

text.replace(reDelimiters,function(match,escapeValue,interpolateValue,esTemplateValue,evaluateValue,offset){
interpolateValue||(interpolateValue=esTemplateValue);


source+=text.slice(index,offset).replace(reUnescapedString,escapeStringChar);


if(escapeValue){
source+="' +\n__e("+escapeValue+") +\n'";
}
if(evaluateValue){
isEvaluating=true;
source+="';\n"+evaluateValue+";\n__p += '";
}
if(interpolateValue){
source+="' +\n((__t = ("+interpolateValue+")) == null ? '' : __t) +\n'";
}
index=offset+match.length;



return match;
});

source+="';\n";



var variable=options.variable,
hasVariable=variable;

if(!hasVariable){
variable='obj';
source='with ('+variable+') {\n'+source+'\n}\n';
}

source=(isEvaluating?source.replace(reEmptyStringLeading,''):source)
.replace(reEmptyStringMiddle,'$1')
.replace(reEmptyStringTrailing,'$1;');


source='function('+variable+') {\n'+
(hasVariable?'':variable+' || ('+variable+' = {});\n')+
"var __t, __p = '', __e = _.escape"+
(isEvaluating
?', __j = Array.prototype.join;\n'+
"function print() { __p += __j.call(arguments, '') }\n"
:';\n'
)+
source+
'return __p\n}';



var sourceURL='\n/*\n//# sourceURL='+(options.sourceURL||'/lodash/template/source['+(templateCounter++)+']')+'\n*/';

try{
var result=Function(importsKeys,'return '+source+sourceURL).apply(undefined,importsValues);
}catch(e){
e.source=source;
throw e;
}
if(data){
return result(data);
}



result.source=source;
return result;
}
























function times(n,callback,thisArg){
n=(n=+n)>-1?n:0;
var index=-1,
result=Array(n);

callback=baseCreateCallback(callback,thisArg,1);
while(++index<n){
result[index]=callback(index);
}
return result;
}
















function unescape(string){
return string==null?'':String(string).replace(reEscapedHtml,unescapeHtmlChar);
}

















function uniqueId(prefix){
var id=++idCounter;
return String(prefix==null?'':prefix)+id;
}



























function chain(value){
value=new lodashWrapper(value);
value.__chain__=true;
return value;
}





















function tap(value,interceptor){
interceptor(value);
return value;
}


























function wrapperChain(){
this.__chain__=true;
return this;
}













function wrapperToString(){
return String(this.__wrapped__);
}














function wrapperValueOf(){
return this.__wrapped__;
}




lodash.after=after;
lodash.assign=assign;
lodash.at=at;
lodash.bind=bind;
lodash.bindAll=bindAll;
lodash.bindKey=bindKey;
lodash.chain=chain;
lodash.compact=compact;
lodash.compose=compose;
lodash.countBy=countBy;
lodash.create=create;
lodash.createCallback=createCallback;
lodash.curry=curry;
lodash.debounce=debounce;
lodash.defaults=defaults;
lodash.defer=defer;
lodash.delay=delay;
lodash.difference=difference;
lodash.filter=filter;
lodash.flatten=flatten;
lodash.forEach=forEach;
lodash.forEachRight=forEachRight;
lodash.forIn=forIn;
lodash.forInRight=forInRight;
lodash.forOwn=forOwn;
lodash.forOwnRight=forOwnRight;
lodash.functions=functions;
lodash.groupBy=groupBy;
lodash.indexBy=indexBy;
lodash.initial=initial;
lodash.intersection=intersection;
lodash.invert=invert;
lodash.invoke=invoke;
lodash.keys=keys;
lodash.map=map;
lodash.max=max;
lodash.memoize=memoize;
lodash.merge=merge;
lodash.min=min;
lodash.omit=omit;
lodash.once=once;
lodash.pairs=pairs;
lodash.partial=partial;
lodash.partialRight=partialRight;
lodash.pick=pick;
lodash.pluck=pluck;
lodash.pull=pull;
lodash.range=range;
lodash.reject=reject;
lodash.remove=remove;
lodash.rest=rest;
lodash.shuffle=shuffle;
lodash.sortBy=sortBy;
lodash.tap=tap;
lodash.throttle=throttle;
lodash.times=times;
lodash.toArray=toArray;
lodash.transform=transform;
lodash.union=union;
lodash.uniq=uniq;
lodash.values=values;
lodash.where=where;
lodash.without=without;
lodash.wrap=wrap;
lodash.zip=zip;
lodash.zipObject=zipObject;


lodash.collect=map;
lodash.drop=rest;
lodash.each=forEach;
lodash.eachRight=forEachRight;
lodash.extend=assign;
lodash.methods=functions;
lodash.object=zipObject;
lodash.select=filter;
lodash.tail=rest;
lodash.unique=uniq;
lodash.unzip=zip;


mixin(lodash);




lodash.clone=clone;
lodash.cloneDeep=cloneDeep;
lodash.contains=contains;
lodash.escape=escape;
lodash.every=every;
lodash.find=find;
lodash.findIndex=findIndex;
lodash.findKey=findKey;
lodash.findLast=findLast;
lodash.findLastIndex=findLastIndex;
lodash.findLastKey=findLastKey;
lodash.has=has;
lodash.identity=identity;
lodash.indexOf=indexOf;
lodash.isArguments=isArguments;
lodash.isArray=isArray;
lodash.isBoolean=isBoolean;
lodash.isDate=isDate;
lodash.isElement=isElement;
lodash.isEmpty=isEmpty;
lodash.isEqual=isEqual;
lodash.isFinite=isFinite;
lodash.isFunction=isFunction;
lodash.isNaN=isNaN;
lodash.isNull=isNull;
lodash.isNumber=isNumber;
lodash.isObject=isObject;
lodash.isPlainObject=isPlainObject;
lodash.isRegExp=isRegExp;
lodash.isString=isString;
lodash.isUndefined=isUndefined;
lodash.lastIndexOf=lastIndexOf;
lodash.mixin=mixin;
lodash.noConflict=noConflict;
lodash.noop=noop;
lodash.parseInt=parseInt;
lodash.random=random;
lodash.reduce=reduce;
lodash.reduceRight=reduceRight;
lodash.result=result;
lodash.runInContext=runInContext;
lodash.size=size;
lodash.some=some;
lodash.sortedIndex=sortedIndex;
lodash.template=template;
lodash.unescape=unescape;
lodash.uniqueId=uniqueId;


lodash.all=every;
lodash.any=some;
lodash.detect=find;
lodash.findWhere=find;
lodash.foldl=reduce;
lodash.foldr=reduceRight;
lodash.include=contains;
lodash.inject=reduce;

forOwn(lodash,function(func,methodName){
if(!lodash.prototype[methodName]){
lodash.prototype[methodName]=function(){
var args=[this.__wrapped__],
chainAll=this.__chain__;

push.apply(args,arguments);
var result=func.apply(lodash,args);
return chainAll
?new lodashWrapper(result,chainAll)
:result;
};
}
});




lodash.first=first;
lodash.last=last;
lodash.sample=sample;


lodash.take=first;
lodash.head=first;

forOwn(lodash,function(func,methodName){
var callbackable=methodName!=='sample';
if(!lodash.prototype[methodName]){
lodash.prototype[methodName]=function(n,guard){
var chainAll=this.__chain__,
result=func(this.__wrapped__,n,guard);

return!chainAll&&(n==null||(guard&&!(callbackable&&typeof n=='function')))
?result
:new lodashWrapper(result,chainAll);
};
}
});










lodash.VERSION='2.3.0';


lodash.prototype.chain=wrapperChain;
lodash.prototype.toString=wrapperToString;
lodash.prototype.value=wrapperValueOf;
lodash.prototype.valueOf=wrapperValueOf;


baseEach(['join','pop','shift'],function(methodName){
var func=arrayRef[methodName];
lodash.prototype[methodName]=function(){
var chainAll=this.__chain__,
result=func.apply(this.__wrapped__,arguments);

return chainAll
?new lodashWrapper(result,chainAll)
:result;
};
});


baseEach(['push','reverse','sort','unshift'],function(methodName){
var func=arrayRef[methodName];
lodash.prototype[methodName]=function(){
func.apply(this.__wrapped__,arguments);
return this;
};
});


baseEach(['concat','slice','splice'],function(methodName){
var func=arrayRef[methodName];
lodash.prototype[methodName]=function(){
return new lodashWrapper(func.apply(this.__wrapped__,arguments),this.__chain__);
};
});



if(!support.spliceObjects){
baseEach(['pop','shift','splice'],function(methodName){
var func=arrayRef[methodName],
isSplice=methodName=='splice';

lodash.prototype[methodName]=function(){
var chainAll=this.__chain__,
value=this.__wrapped__,
result=func.apply(value,arguments);

if(value.length===0){
delete value[0];
}
return(chainAll||isSplice)
?new lodashWrapper(result,chainAll)
:result;
};
});
}

return lodash;
}




var _=runInContext();


if(typeof define=='function'&&typeof define.amd=='object'&&define.amd){




root._=_;



define(function(){
return _;
});
}

else if(freeExports&&freeModule){

if(moduleExports){
(freeModule.exports=_)._=_;
}

else{
freeExports._=_;
}
}
else{

root._=_;
}
}.call(this));
