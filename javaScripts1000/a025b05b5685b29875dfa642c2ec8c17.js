(function(){var root=this;var previousUnderscore=root._;var ArrayProto=Array.prototype,ObjProto=Object.prototype,FuncProto=Function.prototype;var
push=ArrayProto.push,slice=ArrayProto.slice,toString=ObjProto.toString,hasOwnProperty=ObjProto.hasOwnProperty;var
nativeIsArray=Array.isArray,nativeKeys=Object.keys,nativeBind=FuncProto.bind,nativeCreate=Object.create;var Ctor=function(){};var _=function(obj){if(obj instanceof _)return obj;if(!(this instanceof _))return new _(obj);this._wrapped=obj;};if(typeof exports!=='undefined'){if(typeof module!=='undefined'&&module.exports){exports=module.exports=_;}
exports._=_;}else{root._=_;}
_.VERSION='1.8.3';var optimizeCb=function(func,context,argCount){if(context===void 0)return func;switch(argCount==null?3:argCount){case 1:return function(value){return func.call(context,value);};case 2:return function(value,other){return func.call(context,value,other);};case 3:return function(value,index,collection){return func.call(context,value,index,collection);};case 4:return function(accumulator,value,index,collection){return func.call(context,accumulator,value,index,collection);};}
return function(){return func.apply(context,arguments);};};var cb=function(value,context,argCount){if(value==null)return _.identity;if(_.isFunction(value))return optimizeCb(value,context,argCount);if(_.isObject(value))return _.matcher(value);return _.property(value);};_.iteratee=function(value,context){return cb(value,context,Infinity);};var createAssigner=function(keysFunc,undefinedOnly){return function(obj){var length=arguments.length;if(length<2||obj==null)return obj;for(var index=1;index<length;index++){var source=arguments[index],keys=keysFunc(source),l=keys.length;for(var i=0;i<l;i++){var key=keys[i];if(!undefinedOnly||obj[key]===void 0)obj[key]=source[key];}}
return obj;};};var baseCreate=function(prototype){if(!_.isObject(prototype))return{};if(nativeCreate)return nativeCreate(prototype);Ctor.prototype=prototype;var result=new Ctor;Ctor.prototype=null;return result;};var property=function(key){return function(obj){return obj==null?void 0:obj[key];};};var MAX_ARRAY_INDEX=Math.pow(2,53)-1;var getLength=property('length');var isArrayLike=function(collection){var length=getLength(collection);return typeof length=='number'&&length>=0&&length<=MAX_ARRAY_INDEX;};_.each=_.forEach=function(obj,iteratee,context){iteratee=optimizeCb(iteratee,context);var i,length;if(isArrayLike(obj)){for(i=0,length=obj.length;i<length;i++){iteratee(obj[i],i,obj);}}else{var keys=_.keys(obj);for(i=0,length=keys.length;i<length;i++){iteratee(obj[keys[i]],keys[i],obj);}}
return obj;};_.map=_.collect=function(obj,iteratee,context){iteratee=cb(iteratee,context);var keys=!isArrayLike(obj)&&_.keys(obj),length=(keys||obj).length,results=Array(length);for(var index=0;index<length;index++){var currentKey=keys?keys[index]:index;results[index]=iteratee(obj[currentKey],currentKey,obj);}
return results;};function createReduce(dir){function iterator(obj,iteratee,memo,keys,index,length){for(;index>=0&&index<length;index+=dir){var currentKey=keys?keys[index]:index;memo=iteratee(memo,obj[currentKey],currentKey,obj);}
return memo;}
return function(obj,iteratee,memo,context){iteratee=optimizeCb(iteratee,context,4);var keys=!isArrayLike(obj)&&_.keys(obj),length=(keys||obj).length,index=dir>0?0:length-1;if(arguments.length<3){memo=obj[keys?keys[index]:index];index+=dir;}
return iterator(obj,iteratee,memo,keys,index,length);};}
_.reduce=_.foldl=_.inject=createReduce(1);_.reduceRight=_.foldr=createReduce(-1);_.find=_.detect=function(obj,predicate,context){var key;if(isArrayLike(obj)){key=_.findIndex(obj,predicate,context);}else{key=_.findKey(obj,predicate,context);}
if(key!==void 0&&key!==-1)return obj[key];};_.filter=_.select=function(obj,predicate,context){var results=[];predicate=cb(predicate,context);_.each(obj,function(value,index,list){if(predicate(value,index,list))results.push(value);});return results;};_.reject=function(obj,predicate,context){return _.filter(obj,_.negate(cb(predicate)),context);};_.every=_.all=function(obj,predicate,context){predicate=cb(predicate,context);var keys=!isArrayLike(obj)&&_.keys(obj),length=(keys||obj).length;for(var index=0;index<length;index++){var currentKey=keys?keys[index]:index;if(!predicate(obj[currentKey],currentKey,obj))return false;}
return true;};_.some=_.any=function(obj,predicate,context){predicate=cb(predicate,context);var keys=!isArrayLike(obj)&&_.keys(obj),length=(keys||obj).length;for(var index=0;index<length;index++){var currentKey=keys?keys[index]:index;if(predicate(obj[currentKey],currentKey,obj))return true;}
return false;};_.contains=_.includes=_.include=function(obj,item,fromIndex,guard){if(!isArrayLike(obj))obj=_.values(obj);if(typeof fromIndex!='number'||guard)fromIndex=0;return _.indexOf(obj,item,fromIndex)>=0;};_.invoke=function(obj,method){var args=slice.call(arguments,2);var isFunc=_.isFunction(method);return _.map(obj,function(value){var func=isFunc?method:value[method];return func==null?func:func.apply(value,args);});};_.pluck=function(obj,key){return _.map(obj,_.property(key));};_.where=function(obj,attrs){return _.filter(obj,_.matcher(attrs));};_.findWhere=function(obj,attrs){return _.find(obj,_.matcher(attrs));};_.max=function(obj,iteratee,context){var result=-Infinity,lastComputed=-Infinity,value,computed;if(iteratee==null&&obj!=null){obj=isArrayLike(obj)?obj:_.values(obj);for(var i=0,length=obj.length;i<length;i++){value=obj[i];if(value>result){result=value;}}}else{iteratee=cb(iteratee,context);_.each(obj,function(value,index,list){computed=iteratee(value,index,list);if(computed>lastComputed||computed===-Infinity&&result===-Infinity){result=value;lastComputed=computed;}});}
return result;};_.min=function(obj,iteratee,context){var result=Infinity,lastComputed=Infinity,value,computed;if(iteratee==null&&obj!=null){obj=isArrayLike(obj)?obj:_.values(obj);for(var i=0,length=obj.length;i<length;i++){value=obj[i];if(value<result){result=value;}}}else{iteratee=cb(iteratee,context);_.each(obj,function(value,index,list){computed=iteratee(value,index,list);if(computed<lastComputed||computed===Infinity&&result===Infinity){result=value;lastComputed=computed;}});}
return result;};_.shuffle=function(obj){var set=isArrayLike(obj)?obj:_.values(obj);var length=set.length;var shuffled=Array(length);for(var index=0,rand;index<length;index++){rand=_.random(0,index);if(rand!==index)shuffled[index]=shuffled[rand];shuffled[rand]=set[index];}
return shuffled;};_.sample=function(obj,n,guard){if(n==null||guard){if(!isArrayLike(obj))obj=_.values(obj);return obj[_.random(obj.length-1)];}
return _.shuffle(obj).slice(0,Math.max(0,n));};_.sortBy=function(obj,iteratee,context){iteratee=cb(iteratee,context);return _.pluck(_.map(obj,function(value,index,list){return{value:value,index:index,criteria:iteratee(value,index,list)};}).sort(function(left,right){var a=left.criteria;var b=right.criteria;if(a!==b){if(a>b||a===void 0)return 1;if(a<b||b===void 0)return-1;}
return left.index-right.index;}),'value');};var group=function(behavior){return function(obj,iteratee,context){var result={};iteratee=cb(iteratee,context);_.each(obj,function(value,index){var key=iteratee(value,index,obj);behavior(result,value,key);});return result;};};_.groupBy=group(function(result,value,key){if(_.has(result,key))result[key].push(value);else result[key]=[value];});_.indexBy=group(function(result,value,key){result[key]=value;});_.countBy=group(function(result,value,key){if(_.has(result,key))result[key]++;else result[key]=1;});_.toArray=function(obj){if(!obj)return[];if(_.isArray(obj))return slice.call(obj);if(isArrayLike(obj))return _.map(obj,_.identity);return _.values(obj);};_.size=function(obj){if(obj==null)return 0;return isArrayLike(obj)?obj.length:_.keys(obj).length;};_.partition=function(obj,predicate,context){predicate=cb(predicate,context);var pass=[],fail=[];_.each(obj,function(value,key,obj){(predicate(value,key,obj)?pass:fail).push(value);});return[pass,fail];};_.first=_.head=_.take=function(array,n,guard){if(array==null)return void 0;if(n==null||guard)return array[0];return _.initial(array,array.length-n);};_.initial=function(array,n,guard){return slice.call(array,0,Math.max(0,array.length-(n==null||guard?1:n)));};_.last=function(array,n,guard){if(array==null)return void 0;if(n==null||guard)return array[array.length-1];return _.rest(array,Math.max(0,array.length-n));};_.rest=_.tail=_.drop=function(array,n,guard){return slice.call(array,n==null||guard?1:n);};_.compact=function(array){return _.filter(array,_.identity);};var flatten=function(input,shallow,strict,startIndex){var output=[],idx=0;for(var i=startIndex||0,length=getLength(input);i<length;i++){var value=input[i];if(isArrayLike(value)&&(_.isArray(value)||_.isArguments(value))){if(!shallow)value=flatten(value,shallow,strict);var j=0,len=value.length;output.length+=len;while(j<len){output[idx++]=value[j++];}}else if(!strict){output[idx++]=value;}}
return output;};_.flatten=function(array,shallow){return flatten(array,shallow,false);};_.without=function(array){return _.difference(array,slice.call(arguments,1));};_.uniq=_.unique=function(array,isSorted,iteratee,context){if(!_.isBoolean(isSorted)){context=iteratee;iteratee=isSorted;isSorted=false;}
if(iteratee!=null)iteratee=cb(iteratee,context);var result=[];var seen=[];for(var i=0,length=getLength(array);i<length;i++){var value=array[i],computed=iteratee?iteratee(value,i,array):value;if(isSorted){if(!i||seen!==computed)result.push(value);seen=computed;}else if(iteratee){if(!_.contains(seen,computed)){seen.push(computed);result.push(value);}}else if(!_.contains(result,value)){result.push(value);}}
return result;};_.union=function(){return _.uniq(flatten(arguments,true,true));};_.intersection=function(array){var result=[];var argsLength=arguments.length;for(var i=0,length=getLength(array);i<length;i++){var item=array[i];if(_.contains(result,item))continue;for(var j=1;j<argsLength;j++){if(!_.contains(arguments[j],item))break;}
if(j===argsLength)result.push(item);}
return result;};_.difference=function(array){var rest=flatten(arguments,true,true,1);return _.filter(array,function(value){return!_.contains(rest,value);});};_.zip=function(){return _.unzip(arguments);};_.unzip=function(array){var length=array&&_.max(array,getLength).length||0;var result=Array(length);for(var index=0;index<length;index++){result[index]=_.pluck(array,index);}
return result;};_.object=function(list,values){var result={};for(var i=0,length=getLength(list);i<length;i++){if(values){result[list[i]]=values[i];}else{result[list[i][0]]=list[i][1];}}
return result;};function createPredicateIndexFinder(dir){return function(array,predicate,context){predicate=cb(predicate,context);var length=getLength(array);var index=dir>0?0:length-1;for(;index>=0&&index<length;index+=dir){if(predicate(array[index],index,array))return index;}
return-1;};}
_.findIndex=createPredicateIndexFinder(1);_.findLastIndex=createPredicateIndexFinder(-1);_.sortedIndex=function(array,obj,iteratee,context){iteratee=cb(iteratee,context,1);var value=iteratee(obj);var low=0,high=getLength(array);while(low<high){var mid=Math.floor((low+high)/2);if(iteratee(array[mid])<value)low=mid+1;else high=mid;}
return low;};function createIndexFinder(dir,predicateFind,sortedIndex){return function(array,item,idx){var i=0,length=getLength(array);if(typeof idx=='number'){if(dir>0){i=idx>=0?idx:Math.max(idx+length,i);}else{length=idx>=0?Math.min(idx+1,length):idx+length+1;}}else if(sortedIndex&&idx&&length){idx=sortedIndex(array,item);return array[idx]===item?idx:-1;}
if(item!==item){idx=predicateFind(slice.call(array,i,length),_.isNaN);return idx>=0?idx+i:-1;}
for(idx=dir>0?i:length-1;idx>=0&&idx<length;idx+=dir){if(array[idx]===item)return idx;}
return-1;};}
_.indexOf=createIndexFinder(1,_.findIndex,_.sortedIndex);_.lastIndexOf=createIndexFinder(-1,_.findLastIndex);_.range=function(start,stop,step){if(stop==null){stop=start||0;start=0;}
step=step||1;var length=Math.max(Math.ceil((stop-start)/step),0);var range=Array(length);for(var idx=0;idx<length;idx++,start+=step){range[idx]=start;}
return range;};var executeBound=function(sourceFunc,boundFunc,context,callingContext,args){if(!(callingContext instanceof boundFunc))return sourceFunc.apply(context,args);var self=baseCreate(sourceFunc.prototype);var result=sourceFunc.apply(self,args);if(_.isObject(result))return result;return self;};_.bind=function(func,context){if(nativeBind&&func.bind===nativeBind)return nativeBind.apply(func,slice.call(arguments,1));if(!_.isFunction(func))throw new TypeError('Bind must be called on a function');var args=slice.call(arguments,2);var bound=function(){return executeBound(func,bound,context,this,args.concat(slice.call(arguments)));};return bound;};_.partial=function(func){var boundArgs=slice.call(arguments,1);var bound=function(){var position=0,length=boundArgs.length;var args=Array(length);for(var i=0;i<length;i++){args[i]=boundArgs[i]===_?arguments[position++]:boundArgs[i];}
while(position<arguments.length)args.push(arguments[position++]);return executeBound(func,bound,this,this,args);};return bound;};_.bindAll=function(obj){var i,length=arguments.length,key;if(length<=1)throw new Error('bindAll must be passed function names');for(i=1;i<length;i++){key=arguments[i];obj[key]=_.bind(obj[key],obj);}
return obj;};_.memoize=function(func,hasher){var memoize=function(key){var cache=memoize.cache;var address=''+(hasher?hasher.apply(this,arguments):key);if(!_.has(cache,address))cache[address]=func.apply(this,arguments);return cache[address];};memoize.cache={};return memoize;};_.delay=function(func,wait){var args=slice.call(arguments,2);return setTimeout(function(){return func.apply(null,args);},wait);};_.defer=_.partial(_.delay,_,1);_.throttle=function(func,wait,options){var context,args,result;var timeout=null;var previous=0;if(!options)options={};var later=function(){previous=options.leading===false?0:_.now();timeout=null;result=func.apply(context,args);if(!timeout)context=args=null;};return function(){var now=_.now();if(!previous&&options.leading===false)previous=now;var remaining=wait-(now-previous);context=this;args=arguments;if(remaining<=0||remaining>wait){if(timeout){clearTimeout(timeout);timeout=null;}
previous=now;result=func.apply(context,args);if(!timeout)context=args=null;}else if(!timeout&&options.trailing!==false){timeout=setTimeout(later,remaining);}
return result;};};_.debounce=function(func,wait,immediate){var timeout,args,context,timestamp,result;var later=function(){var last=_.now()-timestamp;if(last<wait&&last>=0){timeout=setTimeout(later,wait-last);}else{timeout=null;if(!immediate){result=func.apply(context,args);if(!timeout)context=args=null;}}};return function(){context=this;args=arguments;timestamp=_.now();var callNow=immediate&&!timeout;if(!timeout)timeout=setTimeout(later,wait);if(callNow){result=func.apply(context,args);context=args=null;}
return result;};};_.wrap=function(func,wrapper){return _.partial(wrapper,func);};_.negate=function(predicate){return function(){return!predicate.apply(this,arguments);};};_.compose=function(){var args=arguments;var start=args.length-1;return function(){var i=start;var result=args[start].apply(this,arguments);while(i--)result=args[i].call(this,result);return result;};};_.after=function(times,func){return function(){if(--times<1){return func.apply(this,arguments);}};};_.before=function(times,func){var memo;return function(){if(--times>0){memo=func.apply(this,arguments);}
if(times<=1)func=null;return memo;};};_.once=_.partial(_.before,2);var hasEnumBug=!{toString:null}.propertyIsEnumerable('toString');var nonEnumerableProps=['valueOf','isPrototypeOf','toString','propertyIsEnumerable','hasOwnProperty','toLocaleString'];function collectNonEnumProps(obj,keys){var nonEnumIdx=nonEnumerableProps.length;var constructor=obj.constructor;var proto=(_.isFunction(constructor)&&constructor.prototype)||ObjProto;var prop='constructor';if(_.has(obj,prop)&&!_.contains(keys,prop))keys.push(prop);while(nonEnumIdx--){prop=nonEnumerableProps[nonEnumIdx];if(prop in obj&&obj[prop]!==proto[prop]&&!_.contains(keys,prop)){keys.push(prop);}}}
_.keys=function(obj){if(!_.isObject(obj))return[];if(nativeKeys)return nativeKeys(obj);var keys=[];for(var key in obj)if(_.has(obj,key))keys.push(key);if(hasEnumBug)collectNonEnumProps(obj,keys);return keys;};_.allKeys=function(obj){if(!_.isObject(obj))return[];var keys=[];for(var key in obj)keys.push(key);if(hasEnumBug)collectNonEnumProps(obj,keys);return keys;};_.values=function(obj){var keys=_.keys(obj);var length=keys.length;var values=Array(length);for(var i=0;i<length;i++){values[i]=obj[keys[i]];}
return values;};_.mapObject=function(obj,iteratee,context){iteratee=cb(iteratee,context);var keys=_.keys(obj),length=keys.length,results={},currentKey;for(var index=0;index<length;index++){currentKey=keys[index];results[currentKey]=iteratee(obj[currentKey],currentKey,obj);}
return results;};_.pairs=function(obj){var keys=_.keys(obj);var length=keys.length;var pairs=Array(length);for(var i=0;i<length;i++){pairs[i]=[keys[i],obj[keys[i]]];}
return pairs;};_.invert=function(obj){var result={};var keys=_.keys(obj);for(var i=0,length=keys.length;i<length;i++){result[obj[keys[i]]]=keys[i];}
return result;};_.functions=_.methods=function(obj){var names=[];for(var key in obj){if(_.isFunction(obj[key]))names.push(key);}
return names.sort();};_.extend=createAssigner(_.allKeys);_.extendOwn=_.assign=createAssigner(_.keys);_.findKey=function(obj,predicate,context){predicate=cb(predicate,context);var keys=_.keys(obj),key;for(var i=0,length=keys.length;i<length;i++){key=keys[i];if(predicate(obj[key],key,obj))return key;}};_.pick=function(object,oiteratee,context){var result={},obj=object,iteratee,keys;if(obj==null)return result;if(_.isFunction(oiteratee)){keys=_.allKeys(obj);iteratee=optimizeCb(oiteratee,context);}else{keys=flatten(arguments,false,false,1);iteratee=function(value,key,obj){return key in obj;};obj=Object(obj);}
for(var i=0,length=keys.length;i<length;i++){var key=keys[i];var value=obj[key];if(iteratee(value,key,obj))result[key]=value;}
return result;};_.omit=function(obj,iteratee,context){if(_.isFunction(iteratee)){iteratee=_.negate(iteratee);}else{var keys=_.map(flatten(arguments,false,false,1),String);iteratee=function(value,key){return!_.contains(keys,key);};}
return _.pick(obj,iteratee,context);};_.defaults=createAssigner(_.allKeys,true);_.create=function(prototype,props){var result=baseCreate(prototype);if(props)_.extendOwn(result,props);return result;};_.clone=function(obj){if(!_.isObject(obj))return obj;return _.isArray(obj)?obj.slice():_.extend({},obj);};_.tap=function(obj,interceptor){interceptor(obj);return obj;};_.isMatch=function(object,attrs){var keys=_.keys(attrs),length=keys.length;if(object==null)return!length;var obj=Object(object);for(var i=0;i<length;i++){var key=keys[i];if(attrs[key]!==obj[key]||!(key in obj))return false;}
return true;};var eq=function(a,b,aStack,bStack){if(a===b)return a!==0||1/a===1/b;if(a==null||b==null)return a===b;if(a instanceof _)a=a._wrapped;if(b instanceof _)b=b._wrapped;var className=toString.call(a);if(className!==toString.call(b))return false;switch(className){case'[object RegExp]':case'[object String]':return''+a===''+b;case'[object Number]':if(+a!==+a)return+b!==+b;return+a===0?1/+a===1/b:+a===+b;case'[object Date]':case'[object Boolean]':return+a===+b;}
var areArrays=className==='[object Array]';if(!areArrays){if(typeof a!='object'||typeof b!='object')return false;var aCtor=a.constructor,bCtor=b.constructor;if(aCtor!==bCtor&&!(_.isFunction(aCtor)&&aCtor instanceof aCtor&&_.isFunction(bCtor)&&bCtor instanceof bCtor)&&('constructor'in a&&'constructor'in b)){return false;}}
aStack=aStack||[];bStack=bStack||[];var length=aStack.length;while(length--){if(aStack[length]===a)return bStack[length]===b;}
aStack.push(a);bStack.push(b);if(areArrays){length=a.length;if(length!==b.length)return false;while(length--){if(!eq(a[length],b[length],aStack,bStack))return false;}}else{var keys=_.keys(a),key;length=keys.length;if(_.keys(b).length!==length)return false;while(length--){key=keys[length];if(!(_.has(b,key)&&eq(a[key],b[key],aStack,bStack)))return false;}}
aStack.pop();bStack.pop();return true;};_.isEqual=function(a,b){return eq(a,b);};_.isEmpty=function(obj){if(obj==null)return true;if(isArrayLike(obj)&&(_.isArray(obj)||_.isString(obj)||_.isArguments(obj)))return obj.length===0;return _.keys(obj).length===0;};_.isElement=function(obj){return!!(obj&&obj.nodeType===1);};_.isArray=nativeIsArray||function(obj){return toString.call(obj)==='[object Array]';};_.isObject=function(obj){var type=typeof obj;return type==='function'||type==='object'&&!!obj;};_.each(['Arguments','Function','String','Number','Date','RegExp','Error'],function(name){_['is'+name]=function(obj){return toString.call(obj)==='[object '+name+']';};});if(!_.isArguments(arguments)){_.isArguments=function(obj){return _.has(obj,'callee');};}
if(typeof /./!='function'&&typeof Int8Array!='object'){_.isFunction=function(obj){return typeof obj=='function'||false;};}
_.isFinite=function(obj){return isFinite(obj)&&!isNaN(parseFloat(obj));};_.isNaN=function(obj){return _.isNumber(obj)&&obj!==+obj;};_.isBoolean=function(obj){return obj===true||obj===false||toString.call(obj)==='[object Boolean]';};_.isNull=function(obj){return obj===null;};_.isUndefined=function(obj){return obj===void 0;};_.has=function(obj,key){return obj!=null&&hasOwnProperty.call(obj,key);};_.noConflict=function(){root._=previousUnderscore;return this;};_.identity=function(value){return value;};_.constant=function(value){return function(){return value;};};_.noop=function(){};_.property=property;_.propertyOf=function(obj){return obj==null?function(){}:function(key){return obj[key];};};_.matcher=_.matches=function(attrs){attrs=_.extendOwn({},attrs);return function(obj){return _.isMatch(obj,attrs);};};_.times=function(n,iteratee,context){var accum=Array(Math.max(0,n));iteratee=optimizeCb(iteratee,context,1);for(var i=0;i<n;i++)accum[i]=iteratee(i);return accum;};_.random=function(min,max){if(max==null){max=min;min=0;}
return min+Math.floor(Math.random()*(max-min+1));};_.now=Date.now||function(){return new Date().getTime();};var escapeMap={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#x27;','`':'&#x60;'};var unescapeMap=_.invert(escapeMap);var createEscaper=function(map){var escaper=function(match){return map[match];};var source='(?:'+_.keys(map).join('|')+')';var testRegexp=RegExp(source);var replaceRegexp=RegExp(source,'g');return function(string){string=string==null?'':''+string;return testRegexp.test(string)?string.replace(replaceRegexp,escaper):string;};};_.escape=createEscaper(escapeMap);_.unescape=createEscaper(unescapeMap);_.result=function(object,property,fallback){var value=object==null?void 0:object[property];if(value===void 0){value=fallback;}
return _.isFunction(value)?value.call(object):value;};var idCounter=0;_.uniqueId=function(prefix){var id=++idCounter+'';return prefix?prefix+id:id;};_.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var noMatch=/(.)^/;var escapes={"'":"'",'\\':'\\','\r':'r','\n':'n','\u2028':'u2028','\u2029':'u2029'};var escaper=/\\|'|\r|\n|\u2028|\u2029/g;var escapeChar=function(match){return'\\'+escapes[match];};_.template=function(text,settings,oldSettings){if(!settings&&oldSettings)settings=oldSettings;settings=_.defaults({},settings,_.templateSettings);var matcher=RegExp([(settings.escape||noMatch).source,(settings.interpolate||noMatch).source,(settings.evaluate||noMatch).source].join('|')+'|$','g');var index=0;var source="__p+='";text.replace(matcher,function(match,escape,interpolate,evaluate,offset){source+=text.slice(index,offset).replace(escaper,escapeChar);index=offset+match.length;if(escape){source+="'+\n((__t=("+escape+"))==null?'':_.escape(__t))+\n'";}else if(interpolate){source+="'+\n((__t=("+interpolate+"))==null?'':__t)+\n'";}else if(evaluate){source+="';\n"+evaluate+"\n__p+='";}
return match;});source+="';\n";if(!settings.variable)source='with(obj||{}){\n'+source+'}\n';source="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+
source+'return __p;\n';try{var render=new Function(settings.variable||'obj','_',source);}catch(e){e.source=source;throw e;}
var template=function(data){return render.call(this,data,_);};var argument=settings.variable||'obj';template.source='function('+argument+'){\n'+source+'}';return template;};_.chain=function(obj){var instance=_(obj);instance._chain=true;return instance;};var result=function(instance,obj){return instance._chain?_(obj).chain():obj;};_.mixin=function(obj){_.each(_.functions(obj),function(name){var func=_[name]=obj[name];_.prototype[name]=function(){var args=[this._wrapped];push.apply(args,arguments);return result(this,func.apply(_,args));};});};_.mixin(_);_.each(['pop','push','reverse','shift','sort','splice','unshift'],function(name){var method=ArrayProto[name];_.prototype[name]=function(){var obj=this._wrapped;method.apply(obj,arguments);if((name==='shift'||name==='splice')&&obj.length===0)delete obj[0];return result(this,obj);};});_.each(['concat','join','slice'],function(name){var method=ArrayProto[name];_.prototype[name]=function(){return result(this,method.apply(this._wrapped,arguments));};});_.prototype.value=function(){return this._wrapped;};_.prototype.valueOf=_.prototype.toJSON=_.prototype.value;_.prototype.toString=function(){return''+this._wrapped;};if(typeof define==='function'&&define.amd){define('underscore',[],function(){return _;});}}.call(this));;
/*!
 * jQuery JavaScript Library v1.6.4
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Mon Sep 12 18:54:48 2011 -0400
 */
(function(window,undefined){var document=window.document,navigator=window.navigator,location=window.location;var jQuery=(function(){var jQuery=function(selector,context){return new jQuery.fn.init(selector,context,rootjQuery);},_jQuery=window.jQuery,_$=window.$,rootjQuery,quickExpr=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,rnotwhite=/\S/,trimLeft=/^\s+/,trimRight=/\s+$/,rdigit=/\d/,rsingleTag=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,rvalidchars=/^[\],:{}\s]*$/,rvalidescape=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rvalidtokens=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rvalidbraces=/(?:^|:|,)(?:\s*\[)+/g,rwebkit=/(webkit)[ \/]([\w.]+)/,ropera=/(opera)(?:.*version)?[ \/]([\w.]+)/,rmsie=/(msie) ([\w.]+)/,rmozilla=/(mozilla)(?:.*? rv:([\w.]+))?/,rdashAlpha=/-([a-z]|[0-9])/ig,rmsPrefix=/^-ms-/,fcamelCase=function(all,letter){return(letter+"").toUpperCase();},userAgent=navigator.userAgent,browserMatch,readyList,DOMContentLoaded,toString=Object.prototype.toString,hasOwn=Object.prototype.hasOwnProperty,push=Array.prototype.push,slice=Array.prototype.slice,trim=String.prototype.trim,indexOf=Array.prototype.indexOf,class2type={};jQuery.fn=jQuery.prototype={constructor:jQuery,init:function(selector,context,rootjQuery){var match,elem,ret,doc;if(!selector){return this;}
if(selector.nodeType){this.context=this[0]=selector;this.length=1;return this;}
if(selector==="body"&&!context&&document.body){this.context=document;this[0]=document.body;this.selector=selector;this.length=1;return this;}
if(typeof selector==="string"){if(selector.charAt(0)==="<"&&selector.charAt(selector.length-1)===">"&&selector.length>=3){match=[null,selector,null];}else{match=quickExpr.exec(selector);}
if(match&&(match[1]||!context)){if(match[1]){context=context instanceof jQuery?context[0]:context;doc=(context?context.ownerDocument||context:document);ret=rsingleTag.exec(selector);if(ret){if(jQuery.isPlainObject(context)){selector=[document.createElement(ret[1])];jQuery.fn.attr.call(selector,context,true);}else{selector=[doc.createElement(ret[1])];}}else{ret=jQuery.buildFragment([match[1]],[doc]);selector=(ret.cacheable?jQuery.clone(ret.fragment):ret.fragment).childNodes;}
return jQuery.merge(this,selector);}else{elem=document.getElementById(match[2]);if(elem&&elem.parentNode){if(elem.id!==match[2]){return rootjQuery.find(selector);}
this.length=1;this[0]=elem;}
this.context=document;this.selector=selector;return this;}}else if(!context||context.jquery){return(context||rootjQuery).find(selector);}else{return this.constructor(context).find(selector);}}else if(jQuery.isFunction(selector)){return rootjQuery.ready(selector);}
if(selector.selector!==undefined){this.selector=selector.selector;this.context=selector.context;}
return jQuery.makeArray(selector,this);},selector:"",jquery:"1.6.4",length:0,size:function(){return this.length;},toArray:function(){return slice.call(this,0);},get:function(num){return num==null?this.toArray():(num<0?this[this.length+num]:this[num]);},pushStack:function(elems,name,selector){var ret=this.constructor();if(jQuery.isArray(elems)){push.apply(ret,elems);}else{jQuery.merge(ret,elems);}
ret.prevObject=this;ret.context=this.context;if(name==="find"){ret.selector=this.selector+(this.selector?" ":"")+selector;}else if(name){ret.selector=this.selector+"."+name+"("+selector+")";}
return ret;},each:function(callback,args){return jQuery.each(this,callback,args);},ready:function(fn){jQuery.bindReady();readyList.done(fn);return this;},eq:function(i){return i===-1?this.slice(i):this.slice(i,+i+1);},first:function(){return this.eq(0);},last:function(){return this.eq(-1);},slice:function(){return this.pushStack(slice.apply(this,arguments),"slice",slice.call(arguments).join(","));},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},end:function(){return this.prevObject||this.constructor(null);},push:push,sort:[].sort,splice:[].splice};jQuery.fn.init.prototype=jQuery.fn;jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;if(typeof target==="boolean"){deep=target;target=arguments[1]||{};i=2;}
if(typeof target!=="object"&&!jQuery.isFunction(target)){target={};}
if(length===i){target=this;--i;}
for(;i<length;i++){if((options=arguments[i])!=null){for(name in options){src=target[name];copy=options[name];if(target===copy){continue;}
if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&jQuery.isArray(src)?src:[];}else{clone=src&&jQuery.isPlainObject(src)?src:{};}
target[name]=jQuery.extend(deep,clone,copy);}else if(copy!==undefined){target[name]=copy;}}}}
return target;};jQuery.extend({noConflict:function(deep){if(window.$===jQuery){window.$=_$;}
if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}
return jQuery;},isReady:false,readyWait:1,holdReady:function(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}},ready:function(wait){if((wait===true&&!--jQuery.readyWait)||(wait!==true&&!jQuery.isReady)){if(!document.body){return setTimeout(jQuery.ready,1);}
jQuery.isReady=true;if(wait!==true&&--jQuery.readyWait>0){return;}
readyList.resolveWith(document,[jQuery]);if(jQuery.fn.trigger){jQuery(document).trigger("ready").unbind("ready");}}},bindReady:function(){if(readyList){return;}
readyList=jQuery._Deferred();if(document.readyState==="complete"){return setTimeout(jQuery.ready,1);}
if(document.addEventListener){document.addEventListener("DOMContentLoaded",DOMContentLoaded,false);window.addEventListener("load",jQuery.ready,false);}else if(document.attachEvent){document.attachEvent("onreadystatechange",DOMContentLoaded);window.attachEvent("onload",jQuery.ready);var toplevel=false;try{toplevel=window.frameElement==null;}catch(e){}
if(document.documentElement.doScroll&&toplevel){doScrollCheck();}}},isFunction:function(obj){return jQuery.type(obj)==="function";},isArray:Array.isArray||function(obj){return jQuery.type(obj)==="array";},isWindow:function(obj){return obj&&typeof obj==="object"&&"setInterval"in obj;},isNaN:function(obj){return obj==null||!rdigit.test(obj)||isNaN(obj);},type:function(obj){return obj==null?String(obj):class2type[toString.call(obj)]||"object";},isPlainObject:function(obj){if(!obj||jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){return false;}
try{if(obj.constructor&&!hasOwn.call(obj,"constructor")&&!hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){return false;}}catch(e){return false;}
var key;for(key in obj){}
return key===undefined||hasOwn.call(obj,key);},isEmptyObject:function(obj){for(var name in obj){return false;}
return true;},error:function(msg){throw msg;},parseJSON:function(data){if(typeof data!=="string"||!data){return null;}
data=jQuery.trim(data);if(window.JSON&&window.JSON.parse){return window.JSON.parse(data);}
if(rvalidchars.test(data.replace(rvalidescape,"@").replace(rvalidtokens,"]").replace(rvalidbraces,""))){return(new Function("return "+data))();}
jQuery.error("Invalid JSON: "+data);},parseXML:function(data){var xml,tmp;try{if(window.DOMParser){tmp=new DOMParser();xml=tmp.parseFromString(data,"text/xml");}else{xml=new ActiveXObject("Microsoft.XMLDOM");xml.async="false";xml.loadXML(data);}}catch(e){xml=undefined;}
if(!xml||!xml.documentElement||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data);}
return xml;},noop:function(){},globalEval:function(data){if(data&&rnotwhite.test(data)){(window.execScript||function(data){window["eval"].call(window,data);})(data);}},camelCase:function(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toUpperCase()===name.toUpperCase();},each:function(object,callback,args){var name,i=0,length=object.length,isObj=length===undefined||jQuery.isFunction(object);if(args){if(isObj){for(name in object){if(callback.apply(object[name],args)===false){break;}}}else{for(;i<length;){if(callback.apply(object[i++],args)===false){break;}}}}else{if(isObj){for(name in object){if(callback.call(object[name],name,object[name])===false){break;}}}else{for(;i<length;){if(callback.call(object[i],i,object[i++])===false){break;}}}}
return object;},trim:trim?function(text){return text==null?"":trim.call(text);}:function(text){return text==null?"":text.toString().replace(trimLeft,"").replace(trimRight,"");},makeArray:function(array,results){var ret=results||[];if(array!=null){var type=jQuery.type(array);if(array.length==null||type==="string"||type==="function"||type==="regexp"||jQuery.isWindow(array)){push.call(ret,array);}else{jQuery.merge(ret,array);}}
return ret;},inArray:function(elem,array){if(!array){return-1;}
if(indexOf){return indexOf.call(array,elem);}
for(var i=0,length=array.length;i<length;i++){if(array[i]===elem){return i;}}
return-1;},merge:function(first,second){var i=first.length,j=0;if(typeof second.length==="number"){for(var l=second.length;j<l;j++){first[i++]=second[j];}}else{while(second[j]!==undefined){first[i++]=second[j++];}}
first.length=i;return first;},grep:function(elems,callback,inv){var ret=[],retVal;inv=!!inv;for(var i=0,length=elems.length;i<length;i++){retVal=!!callback(elems[i],i);if(inv!==retVal){ret.push(elems[i]);}}
return ret;},map:function(elems,callback,arg){var value,key,ret=[],i=0,length=elems.length,isArray=elems instanceof jQuery||length!==undefined&&typeof length==="number"&&((length>0&&elems[0]&&elems[length-1])||length===0||jQuery.isArray(elems));if(isArray){for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret[ret.length]=value;}}}else{for(key in elems){value=callback(elems[key],key,arg);if(value!=null){ret[ret.length]=value;}}}
return ret.concat.apply([],ret);},guid:1,proxy:function(fn,context){if(typeof context==="string"){var tmp=fn[context];context=fn;fn=tmp;}
if(!jQuery.isFunction(fn)){return undefined;}
var args=slice.call(arguments,2),proxy=function(){return fn.apply(context,args.concat(slice.call(arguments)));};proxy.guid=fn.guid=fn.guid||proxy.guid||jQuery.guid++;return proxy;},access:function(elems,key,value,exec,fn,pass){var length=elems.length;if(typeof key==="object"){for(var k in key){jQuery.access(elems,k,key[k],exec,fn,value);}
return elems;}
if(value!==undefined){exec=!pass&&exec&&jQuery.isFunction(value);for(var i=0;i<length;i++){fn(elems[i],key,exec?value.call(elems[i],i,fn(elems[i],key)):value,pass);}
return elems;}
return length?fn(elems[0],key):undefined;},now:function(){return(new Date()).getTime();},uaMatch:function(ua){ua=ua.toLowerCase();var match=rwebkit.exec(ua)||ropera.exec(ua)||rmsie.exec(ua)||ua.indexOf("compatible")<0&&rmozilla.exec(ua)||[];return{browser:match[1]||"",version:match[2]||"0"};},sub:function(){function jQuerySub(selector,context){return new jQuerySub.fn.init(selector,context);}
jQuery.extend(true,jQuerySub,this);jQuerySub.superclass=this;jQuerySub.fn=jQuerySub.prototype=this();jQuerySub.fn.constructor=jQuerySub;jQuerySub.sub=this.sub;jQuerySub.fn.init=function init(selector,context){if(context&&context instanceof jQuery&&!(context instanceof jQuerySub)){context=jQuerySub(context);}
return jQuery.fn.init.call(this,selector,context,rootjQuerySub);};jQuerySub.fn.init.prototype=jQuerySub.fn;var rootjQuerySub=jQuerySub(document);return jQuerySub;},browser:{}});jQuery.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});browserMatch=jQuery.uaMatch(userAgent);if(browserMatch.browser){jQuery.browser[browserMatch.browser]=true;jQuery.browser.version=browserMatch.version;}
if(jQuery.browser.webkit){jQuery.browser.safari=true;}
if(rnotwhite.test("\xA0")){trimLeft=/^[\s\xA0]+/;trimRight=/[\s\xA0]+$/;}
rootjQuery=jQuery(document);if(document.addEventListener){DOMContentLoaded=function(){document.removeEventListener("DOMContentLoaded",DOMContentLoaded,false);jQuery.ready();};}else if(document.attachEvent){DOMContentLoaded=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",DOMContentLoaded);jQuery.ready();}};}
function doScrollCheck(){if(jQuery.isReady){return;}
try{document.documentElement.doScroll("left");}catch(e){setTimeout(doScrollCheck,1);return;}
jQuery.ready();}
return jQuery;})();var
promiseMethods="done fail isResolved isRejected promise then always pipe".split(" "),sliceDeferred=[].slice;jQuery.extend({_Deferred:function(){var
callbacks=[],fired,firing,cancelled,deferred={done:function(){if(!cancelled){var args=arguments,i,length,elem,type,_fired;if(fired){_fired=fired;fired=0;}
for(i=0,length=args.length;i<length;i++){elem=args[i];type=jQuery.type(elem);if(type==="array"){deferred.done.apply(deferred,elem);}else if(type==="function"){callbacks.push(elem);}}
if(_fired){deferred.resolveWith(_fired[0],_fired[1]);}}
return this;},resolveWith:function(context,args){if(!cancelled&&!fired&&!firing){args=args||[];firing=1;try{while(callbacks[0]){callbacks.shift().apply(context,args);}}
finally{fired=[context,args];firing=0;}}
return this;},resolve:function(){deferred.resolveWith(this,arguments);return this;},isResolved:function(){return!!(firing||fired);},cancel:function(){cancelled=1;callbacks=[];return this;}};return deferred;},Deferred:function(func){var deferred=jQuery._Deferred(),failDeferred=jQuery._Deferred(),promise;jQuery.extend(deferred,{then:function(doneCallbacks,failCallbacks){deferred.done(doneCallbacks).fail(failCallbacks);return this;},always:function(){return deferred.done.apply(deferred,arguments).fail.apply(this,arguments);},fail:failDeferred.done,rejectWith:failDeferred.resolveWith,reject:failDeferred.resolve,isRejected:failDeferred.isResolved,pipe:function(fnDone,fnFail){return jQuery.Deferred(function(newDefer){jQuery.each({done:[fnDone,"resolve"],fail:[fnFail,"reject"]},function(handler,data){var fn=data[0],action=data[1],returned;if(jQuery.isFunction(fn)){deferred[handler](function(){returned=fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise().then(newDefer.resolve,newDefer.reject);}else{newDefer[action+"With"](this===deferred?newDefer:this,[returned]);}});}else{deferred[handler](newDefer[action]);}});}).promise();},promise:function(obj){if(obj==null){if(promise){return promise;}
promise=obj={};}
var i=promiseMethods.length;while(i--){obj[promiseMethods[i]]=deferred[promiseMethods[i]];}
return obj;}});deferred.done(failDeferred.cancel).fail(deferred.cancel);delete deferred.cancel;if(func){func.call(deferred,deferred);}
return deferred;},when:function(firstParam){var args=arguments,i=0,length=args.length,count=length,deferred=length<=1&&firstParam&&jQuery.isFunction(firstParam.promise)?firstParam:jQuery.Deferred();function resolveFunc(i){return function(value){args[i]=arguments.length>1?sliceDeferred.call(arguments,0):value;if(!(--count)){deferred.resolveWith(deferred,sliceDeferred.call(args,0));}};}
if(length>1){for(;i<length;i++){if(args[i]&&jQuery.isFunction(args[i].promise)){args[i].promise().then(resolveFunc(i),deferred.reject);}else{--count;}}
if(!count){deferred.resolveWith(deferred,args);}}else if(deferred!==firstParam){deferred.resolveWith(deferred,length?[firstParam]:[]);}
return deferred.promise();}});jQuery.support=(function(){var div=document.createElement("div"),documentElement=document.documentElement,all,a,select,opt,input,marginDiv,support,fragment,body,testElementParent,testElement,testElementStyle,tds,events,eventName,i,isSupported;div.setAttribute("className","t");div.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";all=div.getElementsByTagName("*");a=div.getElementsByTagName("a")[0];if(!all||!all.length||!a){return{};}
select=document.createElement("select");opt=select.appendChild(document.createElement("option"));input=div.getElementsByTagName("input")[0];support={leadingWhitespace:(div.firstChild.nodeType===3),tbody:!div.getElementsByTagName("tbody").length,htmlSerialize:!!div.getElementsByTagName("link").length,style:/top/.test(a.getAttribute("style")),hrefNormalized:(a.getAttribute("href")==="/a"),opacity:/^0.55$/.test(a.style.opacity),cssFloat:!!a.style.cssFloat,checkOn:(input.value==="on"),optSelected:opt.selected,getSetAttribute:div.className!=="t",submitBubbles:true,changeBubbles:true,focusinBubbles:false,deleteExpando:true,noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true};input.checked=true;support.noCloneChecked=input.cloneNode(true).checked;select.disabled=true;support.optDisabled=!opt.disabled;try{delete div.test;}catch(e){support.deleteExpando=false;}
if(!div.addEventListener&&div.attachEvent&&div.fireEvent){div.attachEvent("onclick",function(){support.noCloneEvent=false;});div.cloneNode(true).fireEvent("onclick");}
input=document.createElement("input");input.value="t";input.setAttribute("type","radio");support.radioValue=input.value==="t";input.setAttribute("checked","checked");div.appendChild(input);fragment=document.createDocumentFragment();fragment.appendChild(div.firstChild);support.checkClone=fragment.cloneNode(true).cloneNode(true).lastChild.checked;div.innerHTML="";div.style.width=div.style.paddingLeft="1px";body=document.getElementsByTagName("body")[0];testElement=document.createElement(body?"div":"body");testElementStyle={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};if(body){jQuery.extend(testElementStyle,{position:"absolute",left:"-1000px",top:"-1000px"});}
for(i in testElementStyle){testElement.style[i]=testElementStyle[i];}
testElement.appendChild(div);testElementParent=body||documentElement;testElementParent.insertBefore(testElement,testElementParent.firstChild);support.appendChecked=input.checked;support.boxModel=div.offsetWidth===2;if("zoom"in div.style){div.style.display="inline";div.style.zoom=1;support.inlineBlockNeedsLayout=(div.offsetWidth===2);div.style.display="";div.innerHTML="<div style='width:4px;'></div>";support.shrinkWrapBlocks=(div.offsetWidth!==2);}
div.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";tds=div.getElementsByTagName("td");isSupported=(tds[0].offsetHeight===0);tds[0].style.display="";tds[1].style.display="none";support.reliableHiddenOffsets=isSupported&&(tds[0].offsetHeight===0);div.innerHTML="";if(document.defaultView&&document.defaultView.getComputedStyle){marginDiv=document.createElement("div");marginDiv.style.width="0";marginDiv.style.marginRight="0";div.appendChild(marginDiv);support.reliableMarginRight=(parseInt((document.defaultView.getComputedStyle(marginDiv,null)||{marginRight:0}).marginRight,10)||0)===0;}
testElement.innerHTML="";testElementParent.removeChild(testElement);if(div.attachEvent){for(i in{submit:1,change:1,focusin:1}){eventName="on"+i;isSupported=(eventName in div);if(!isSupported){div.setAttribute(eventName,"return;");isSupported=(typeof div[eventName]==="function");}
support[i+"Bubbles"]=isSupported;}}
testElement=fragment=select=opt=body=marginDiv=div=input=null;return support;})();jQuery.boxModel=jQuery.support.boxModel;var rbrace=/^(?:\{.*\}|\[.*\])$/,rmultiDash=/([A-Z])/g;jQuery.extend({cache:{},uuid:0,expando:"jQuery"+(jQuery.fn.jquery+Math.random()).replace(/\D/g,""),noData:{"embed":true,"object":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000","applet":true},hasData:function(elem){elem=elem.nodeType?jQuery.cache[elem[jQuery.expando]]:elem[jQuery.expando];return!!elem&&!isEmptyDataObject(elem);},data:function(elem,name,data,pvt){if(!jQuery.acceptData(elem)){return;}
var thisCache,ret,internalKey=jQuery.expando,getByName=typeof name==="string",isNode=elem.nodeType,cache=isNode?jQuery.cache:elem,id=isNode?elem[jQuery.expando]:elem[jQuery.expando]&&jQuery.expando;if((!id||(pvt&&id&&(cache[id]&&!cache[id][internalKey])))&&getByName&&data===undefined){return;}
if(!id){if(isNode){elem[jQuery.expando]=id=++jQuery.uuid;}else{id=jQuery.expando;}}
if(!cache[id]){cache[id]={};if(!isNode){cache[id].toJSON=jQuery.noop;}}
if(typeof name==="object"||typeof name==="function"){if(pvt){cache[id][internalKey]=jQuery.extend(cache[id][internalKey],name);}else{cache[id]=jQuery.extend(cache[id],name);}}
thisCache=cache[id];if(pvt){if(!thisCache[internalKey]){thisCache[internalKey]={};}
thisCache=thisCache[internalKey];}
if(data!==undefined){thisCache[jQuery.camelCase(name)]=data;}
if(name==="events"&&!thisCache[name]){return thisCache[internalKey]&&thisCache[internalKey].events;}
if(getByName){ret=thisCache[name];if(ret==null){ret=thisCache[jQuery.camelCase(name)];}}else{ret=thisCache;}
return ret;},removeData:function(elem,name,pvt){if(!jQuery.acceptData(elem)){return;}
var thisCache,internalKey=jQuery.expando,isNode=elem.nodeType,cache=isNode?jQuery.cache:elem,id=isNode?elem[jQuery.expando]:jQuery.expando;if(!cache[id]){return;}
if(name){thisCache=pvt?cache[id][internalKey]:cache[id];if(thisCache){if(!thisCache[name]){name=jQuery.camelCase(name);}
delete thisCache[name];if(!isEmptyDataObject(thisCache)){return;}}}
if(pvt){delete cache[id][internalKey];if(!isEmptyDataObject(cache[id])){return;}}
var internalCache=cache[id][internalKey];if(jQuery.support.deleteExpando||!cache.setInterval){delete cache[id];}else{cache[id]=null;}
if(internalCache){cache[id]={};if(!isNode){cache[id].toJSON=jQuery.noop;}
cache[id][internalKey]=internalCache;}else if(isNode){if(jQuery.support.deleteExpando){delete elem[jQuery.expando];}else if(elem.removeAttribute){elem.removeAttribute(jQuery.expando);}else{elem[jQuery.expando]=null;}}},_data:function(elem,name,data){return jQuery.data(elem,name,data,true);},acceptData:function(elem){if(elem.nodeName){var match=jQuery.noData[elem.nodeName.toLowerCase()];if(match){return!(match===true||elem.getAttribute("classid")!==match);}}
return true;}});jQuery.fn.extend({data:function(key,value){var data=null;if(typeof key==="undefined"){if(this.length){data=jQuery.data(this[0]);if(this[0].nodeType===1){var attr=this[0].attributes,name;for(var i=0,l=attr.length;i<l;i++){name=attr[i].name;if(name.indexOf("data-")===0){name=jQuery.camelCase(name.substring(5));dataAttr(this[0],name,data[name]);}}}}
return data;}else if(typeof key==="object"){return this.each(function(){jQuery.data(this,key);});}
var parts=key.split(".");parts[1]=parts[1]?"."+parts[1]:"";if(value===undefined){data=this.triggerHandler("getData"+parts[1]+"!",[parts[0]]);if(data===undefined&&this.length){data=jQuery.data(this[0],key);data=dataAttr(this[0],key,data);}
return data===undefined&&parts[1]?this.data(parts[0]):data;}else{return this.each(function(){var $this=jQuery(this),args=[parts[0],value];$this.triggerHandler("setData"+parts[1]+"!",args);jQuery.data(this,key,value);$this.triggerHandler("changeData"+parts[1]+"!",args);});}},removeData:function(key){return this.each(function(){jQuery.removeData(this,key);});}});function dataAttr(elem,key,data){if(data===undefined&&elem.nodeType===1){var name="data-"+key.replace(rmultiDash,"-$1").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=data==="true"?true:data==="false"?false:data==="null"?null:!jQuery.isNaN(data)?parseFloat(data):rbrace.test(data)?jQuery.parseJSON(data):data;}catch(e){}
jQuery.data(elem,key,data);}else{data=undefined;}}
return data;}
function isEmptyDataObject(obj){for(var name in obj){if(name!=="toJSON"){return false;}}
return true;}
function handleQueueMarkDefer(elem,type,src){var deferDataKey=type+"defer",queueDataKey=type+"queue",markDataKey=type+"mark",defer=jQuery.data(elem,deferDataKey,undefined,true);if(defer&&(src==="queue"||!jQuery.data(elem,queueDataKey,undefined,true))&&(src==="mark"||!jQuery.data(elem,markDataKey,undefined,true))){setTimeout(function(){if(!jQuery.data(elem,queueDataKey,undefined,true)&&!jQuery.data(elem,markDataKey,undefined,true)){jQuery.removeData(elem,deferDataKey,true);defer.resolve();}},0);}}
jQuery.extend({_mark:function(elem,type){if(elem){type=(type||"fx")+"mark";jQuery.data(elem,type,(jQuery.data(elem,type,undefined,true)||0)+1,true);}},_unmark:function(force,elem,type){if(force!==true){type=elem;elem=force;force=false;}
if(elem){type=type||"fx";var key=type+"mark",count=force?0:((jQuery.data(elem,key,undefined,true)||1)-1);if(count){jQuery.data(elem,key,count,true);}else{jQuery.removeData(elem,key,true);handleQueueMarkDefer(elem,type,"mark");}}},queue:function(elem,type,data){if(elem){type=(type||"fx")+"queue";var q=jQuery.data(elem,type,undefined,true);if(data){if(!q||jQuery.isArray(data)){q=jQuery.data(elem,type,jQuery.makeArray(data),true);}else{q.push(data);}}
return q||[];}},dequeue:function(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),fn=queue.shift(),defer;if(fn==="inprogress"){fn=queue.shift();}
if(fn){if(type==="fx"){queue.unshift("inprogress");}
fn.call(elem,function(){jQuery.dequeue(elem,type);});}
if(!queue.length){jQuery.removeData(elem,type+"queue",true);handleQueueMarkDefer(elem,type,"queue");}}});jQuery.fn.extend({queue:function(type,data){if(typeof type!=="string"){data=type;type="fx";}
if(data===undefined){return jQuery.queue(this[0],type);}
return this.each(function(){var queue=jQuery.queue(this,type,data);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type);});},delay:function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(){var elem=this;setTimeout(function(){jQuery.dequeue(elem,type);},time);});},clearQueue:function(type){return this.queue(type||"fx",[]);},promise:function(type,object){if(typeof type!=="string"){object=type;type=undefined;}
type=type||"fx";var defer=jQuery.Deferred(),elements=this,i=elements.length,count=1,deferDataKey=type+"defer",queueDataKey=type+"queue",markDataKey=type+"mark",tmp;function resolve(){if(!(--count)){defer.resolveWith(elements,[elements]);}}
while(i--){if((tmp=jQuery.data(elements[i],deferDataKey,undefined,true)||(jQuery.data(elements[i],queueDataKey,undefined,true)||jQuery.data(elements[i],markDataKey,undefined,true))&&jQuery.data(elements[i],deferDataKey,jQuery._Deferred(),true))){count++;tmp.done(resolve);}}
resolve();return defer.promise();}});var rclass=/[\n\t\r]/g,rspace=/\s+/,rreturn=/\r/g,rtype=/^(?:button|input)$/i,rfocusable=/^(?:button|input|object|select|textarea)$/i,rclickable=/^a(?:rea)?$/i,rboolean=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,nodeHook,boolHook;jQuery.fn.extend({attr:function(name,value){return jQuery.access(this,name,value,true,jQuery.attr);},removeAttr:function(name){return this.each(function(){jQuery.removeAttr(this,name);});},prop:function(name,value){return jQuery.access(this,name,value,true,jQuery.prop);},removeProp:function(name){name=jQuery.propFix[name]||name;return this.each(function(){try{this[name]=undefined;delete this[name];}catch(e){}});},addClass:function(value){var classNames,i,l,elem,setClass,c,cl;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,this.className));});}
if(value&&typeof value==="string"){classNames=value.split(rspace);for(i=0,l=this.length;i<l;i++){elem=this[i];if(elem.nodeType===1){if(!elem.className&&classNames.length===1){elem.className=value;}else{setClass=" "+elem.className+" ";for(c=0,cl=classNames.length;c<cl;c++){if(!~setClass.indexOf(" "+classNames[c]+" ")){setClass+=classNames[c]+" ";}}
elem.className=jQuery.trim(setClass);}}}}
return this;},removeClass:function(value){var classNames,i,l,elem,className,c,cl;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,this.className));});}
if((value&&typeof value==="string")||value===undefined){classNames=(value||"").split(rspace);for(i=0,l=this.length;i<l;i++){elem=this[i];if(elem.nodeType===1&&elem.className){if(value){className=(" "+elem.className+" ").replace(rclass," ");for(c=0,cl=classNames.length;c<cl;c++){className=className.replace(" "+classNames[c]+" "," ");}
elem.className=jQuery.trim(className);}else{elem.className="";}}}}
return this;},toggleClass:function(value,stateVal){var type=typeof value,isBool=typeof stateVal==="boolean";if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,this.className,stateVal),stateVal);});}
return this.each(function(){if(type==="string"){var className,i=0,self=jQuery(this),state=stateVal,classNames=value.split(rspace);while((className=classNames[i++])){state=isBool?state:!self.hasClass(className);self[state?"addClass":"removeClass"](className);}}else if(type==="undefined"||type==="boolean"){if(this.className){jQuery._data(this,"__className__",this.className);}
this.className=this.className||value===false?"":jQuery._data(this,"__className__")||"";}});},hasClass:function(selector){var className=" "+selector+" ";for(var i=0,l=this.length;i<l;i++){if(this[i].nodeType===1&&(" "+this[i].className+" ").replace(rclass," ").indexOf(className)>-1){return true;}}
return false;},val:function(value){var hooks,ret,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.nodeName.toLowerCase()]||jQuery.valHooks[elem.type];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}
ret=elem.value;return typeof ret==="string"?ret.replace(rreturn,""):ret==null?"":ret;}
return undefined;}
var isFunction=jQuery.isFunction(value);return this.each(function(i){var self=jQuery(this),val;if(this.nodeType!==1){return;}
if(isFunction){val=value.call(this,i,self.val());}else{val=value;}
if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}
hooks=jQuery.valHooks[this.nodeName.toLowerCase()]||jQuery.valHooks[this.type];if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function(elem){var val=elem.attributes.value;return!val||val.specified?elem.value:elem.text;}},select:{get:function(elem){var value,index=elem.selectedIndex,values=[],options=elem.options,one=elem.type==="select-one";if(index<0){return null;}
for(var i=one?index:0,max=one?index+1:options.length;i<max;i++){var option=options[i];if(option.selected&&(jQuery.support.optDisabled?!option.disabled:option.getAttribute("disabled")===null)&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){value=jQuery(option).val();if(one){return value;}
values.push(value);}}
if(one&&!values.length&&options.length){return jQuery(options[index]).val();}
return values;},set:function(elem,value){var values=jQuery.makeArray(value);jQuery(elem).find("option").each(function(){this.selected=jQuery.inArray(jQuery(this).val(),values)>=0;});if(!values.length){elem.selectedIndex=-1;}
return values;}}},attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attrFix:{tabindex:"tabIndex"},attr:function(elem,name,value,pass){var nType=elem.nodeType;if(!elem||nType===3||nType===8||nType===2){return undefined;}
if(pass&&name in jQuery.attrFn){return jQuery(elem)[name](value);}
if(!("getAttribute"in elem)){return jQuery.prop(elem,name,value);}
var ret,hooks,notxml=nType!==1||!jQuery.isXMLDoc(elem);if(notxml){name=jQuery.attrFix[name]||name;hooks=jQuery.attrHooks[name];if(!hooks){if(rboolean.test(name)){hooks=boolHook;}else if(nodeHook){hooks=nodeHook;}}}
if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);return undefined;}else if(hooks&&"set"in hooks&&notxml&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}else{elem.setAttribute(name,""+value);return value;}}else if(hooks&&"get"in hooks&&notxml&&(ret=hooks.get(elem,name))!==null){return ret;}else{ret=elem.getAttribute(name);return ret===null?undefined:ret;}},removeAttr:function(elem,name){var propName;if(elem.nodeType===1){name=jQuery.attrFix[name]||name;jQuery.attr(elem,name,"");elem.removeAttribute(name);if(rboolean.test(name)&&(propName=jQuery.propFix[name]||name)in elem){elem[propName]=false;}}},attrHooks:{type:{set:function(elem,value){if(rtype.test(elem.nodeName)&&elem.parentNode){jQuery.error("type property can't be changed");}else if(!jQuery.support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}
return value;}}},value:{get:function(elem,name){if(nodeHook&&jQuery.nodeName(elem,"button")){return nodeHook.get(elem,name);}
return name in elem?elem.value:null;},set:function(elem,value,name){if(nodeHook&&jQuery.nodeName(elem,"button")){return nodeHook.set(elem,value,name);}
elem.value=value;}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(elem,name,value){var nType=elem.nodeType;if(!elem||nType===3||nType===8||nType===2){return undefined;}
var ret,hooks,notxml=nType!==1||!jQuery.isXMLDoc(elem);if(notxml){name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}
if(value!==undefined){if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}else{return(elem[name]=value);}}else{if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}else{return elem[name];}}},propHooks:{tabIndex:{get:function(elem){var attributeNode=elem.getAttributeNode("tabindex");return attributeNode&&attributeNode.specified?parseInt(attributeNode.value,10):rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href?0:undefined;}}}});jQuery.attrHooks.tabIndex=jQuery.propHooks.tabIndex;boolHook={get:function(elem,name){var attrNode;return jQuery.prop(elem,name)===true||(attrNode=elem.getAttributeNode(name))&&attrNode.nodeValue!==false?name.toLowerCase():undefined;},set:function(elem,value,name){var propName;if(value===false){jQuery.removeAttr(elem,name);}else{propName=jQuery.propFix[name]||name;if(propName in elem){elem[propName]=true;}
elem.setAttribute(name,name.toLowerCase());}
return name;}};if(!jQuery.support.getSetAttribute){nodeHook=jQuery.valHooks.button={get:function(elem,name){var ret;ret=elem.getAttributeNode(name);return ret&&ret.nodeValue!==""?ret.nodeValue:undefined;},set:function(elem,value,name){var ret=elem.getAttributeNode(name);if(!ret){ret=document.createAttribute(name);elem.setAttributeNode(ret);}
return(ret.nodeValue=value+"");}};jQuery.each(["width","height"],function(i,name){jQuery.attrHooks[name]=jQuery.extend(jQuery.attrHooks[name],{set:function(elem,value){if(value===""){elem.setAttribute(name,"auto");return value;}}});});}
if(!jQuery.support.hrefNormalized){jQuery.each(["href","src","width","height"],function(i,name){jQuery.attrHooks[name]=jQuery.extend(jQuery.attrHooks[name],{get:function(elem){var ret=elem.getAttribute(name,2);return ret===null?undefined:ret;}});});}
if(!jQuery.support.style){jQuery.attrHooks.style={get:function(elem){return elem.style.cssText.toLowerCase()||undefined;},set:function(elem,value){return(elem.style.cssText=""+value);}};}
if(!jQuery.support.optSelected){jQuery.propHooks.selected=jQuery.extend(jQuery.propHooks.selected,{get:function(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}
return null;}});}
if(!jQuery.support.checkOn){jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={get:function(elem){return elem.getAttribute("value")===null?"on":elem.value;}};});}
jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]=jQuery.extend(jQuery.valHooks[this],{set:function(elem,value){if(jQuery.isArray(value)){return(elem.checked=jQuery.inArray(jQuery(elem).val(),value)>=0);}}});});var rnamespaces=/\.(.*)$/,rformElems=/^(?:textarea|input|select)$/i,rperiod=/\./g,rspaces=/ /g,rescape=/[^\w\s.|`]/g,fcleanup=function(nm){return nm.replace(rescape,"\\$&");};jQuery.event={add:function(elem,types,handler,data){if(elem.nodeType===3||elem.nodeType===8){return;}
if(handler===false){handler=returnFalse;}else if(!handler){return;}
var handleObjIn,handleObj;if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;}
if(!handler.guid){handler.guid=jQuery.guid++;}
var elemData=jQuery._data(elem);if(!elemData){return;}
var events=elemData.events,eventHandle=elemData.handle;if(!events){elemData.events=events={};}
if(!eventHandle){elemData.handle=eventHandle=function(e){return typeof jQuery!=="undefined"&&(!e||jQuery.event.triggered!==e.type)?jQuery.event.handle.apply(eventHandle.elem,arguments):undefined;};}
eventHandle.elem=elem;types=types.split(" ");var type,i=0,namespaces;while((type=types[i++])){handleObj=handleObjIn?jQuery.extend({},handleObjIn):{handler:handler,data:data};if(type.indexOf(".")>-1){namespaces=type.split(".");type=namespaces.shift();handleObj.namespace=namespaces.slice(0).sort().join(".");}else{namespaces=[];handleObj.namespace="";}
handleObj.type=type;if(!handleObj.guid){handleObj.guid=handler.guid;}
var handlers=events[type],special=jQuery.event.special[type]||{};if(!handlers){handlers=events[type]=[];if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle,false);}else if(elem.attachEvent){elem.attachEvent("on"+type,eventHandle);}}}
if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}
handlers.push(handleObj);jQuery.event.global[type]=true;}
elem=null;},global:{},remove:function(elem,types,handler,pos){if(elem.nodeType===3||elem.nodeType===8){return;}
if(handler===false){handler=returnFalse;}
var ret,type,fn,j,i=0,all,namespaces,namespace,special,eventType,handleObj,origType,elemData=jQuery.hasData(elem)&&jQuery._data(elem),events=elemData&&elemData.events;if(!elemData||!events){return;}
if(types&&types.type){handler=types.handler;types=types.type;}
if(!types||typeof types==="string"&&types.charAt(0)==="."){types=types||"";for(type in events){jQuery.event.remove(elem,type+types);}
return;}
types=types.split(" ");while((type=types[i++])){origType=type;handleObj=null;all=type.indexOf(".")<0;namespaces=[];if(!all){namespaces=type.split(".");type=namespaces.shift();namespace=new RegExp("(^|\\.)"+
jQuery.map(namespaces.slice(0).sort(),fcleanup).join("\\.(?:.*\\.)?")+"(\\.|$)");}
eventType=events[type];if(!eventType){continue;}
if(!handler){for(j=0;j<eventType.length;j++){handleObj=eventType[j];if(all||namespace.test(handleObj.namespace)){jQuery.event.remove(elem,origType,handleObj.handler,j);eventType.splice(j--,1);}}
continue;}
special=jQuery.event.special[type]||{};for(j=pos||0;j<eventType.length;j++){handleObj=eventType[j];if(handler.guid===handleObj.guid){if(all||namespace.test(handleObj.namespace)){if(pos==null){eventType.splice(j--,1);}
if(special.remove){special.remove.call(elem,handleObj);}}
if(pos!=null){break;}}}
if(eventType.length===0||pos!=null&&eventType.length===1){if(!special.teardown||special.teardown.call(elem,namespaces)===false){jQuery.removeEvent(elem,type,elemData.handle);}
ret=null;delete events[type];}}
if(jQuery.isEmptyObject(events)){var handle=elemData.handle;if(handle){handle.elem=null;}
delete elemData.events;delete elemData.handle;if(jQuery.isEmptyObject(elemData)){jQuery.removeData(elem,undefined,true);}}},customEvent:{"getData":true,"setData":true,"changeData":true},trigger:function(event,data,elem,onlyHandlers){var type=event.type||event,namespaces=[],exclusive;if(type.indexOf("!")>=0){type=type.slice(0,-1);exclusive=true;}
if(type.indexOf(".")>=0){namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}
if((!elem||jQuery.event.customEvent[type])&&!jQuery.event.global[type]){return;}
event=typeof event==="object"?event[jQuery.expando]?event:new jQuery.Event(type,event):new jQuery.Event(type);event.type=type;event.exclusive=exclusive;event.namespace=namespaces.join(".");event.namespace_re=new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.)?")+"(\\.|$)");if(onlyHandlers||!elem){event.preventDefault();event.stopPropagation();}
if(!elem){jQuery.each(jQuery.cache,function(){var internalKey=jQuery.expando,internalCache=this[internalKey];if(internalCache&&internalCache.events&&internalCache.events[type]){jQuery.event.trigger(event,data,internalCache.handle.elem);}});return;}
if(elem.nodeType===3||elem.nodeType===8){return;}
event.result=undefined;event.target=elem;data=data!=null?jQuery.makeArray(data):[];data.unshift(event);var cur=elem,ontype=type.indexOf(":")<0?"on"+type:"";do{var handle=jQuery._data(cur,"handle");event.currentTarget=cur;if(handle){handle.apply(cur,data);}
if(ontype&&jQuery.acceptData(cur)&&cur[ontype]&&cur[ontype].apply(cur,data)===false){event.result=false;event.preventDefault();}
cur=cur.parentNode||cur.ownerDocument||cur===event.target.ownerDocument&&window;}while(cur&&!event.isPropagationStopped());if(!event.isDefaultPrevented()){var old,special=jQuery.event.special[type]||{};if((!special._default||special._default.call(elem.ownerDocument,event)===false)&&!(type==="click"&&jQuery.nodeName(elem,"a"))&&jQuery.acceptData(elem)){try{if(ontype&&elem[type]){old=elem[ontype];if(old){elem[ontype]=null;}
jQuery.event.triggered=type;elem[type]();}}catch(ieError){}
if(old){elem[ontype]=old;}
jQuery.event.triggered=undefined;}}
return event.result;},handle:function(event){event=jQuery.event.fix(event||window.event);var handlers=((jQuery._data(this,"events")||{})[event.type]||[]).slice(0),run_all=!event.exclusive&&!event.namespace,args=Array.prototype.slice.call(arguments,0);args[0]=event;event.currentTarget=this;for(var j=0,l=handlers.length;j<l;j++){var handleObj=handlers[j];if(run_all||event.namespace_re.test(handleObj.namespace)){event.handler=handleObj.handler;event.data=handleObj.data;event.handleObj=handleObj;var ret=handleObj.handler.apply(this,args);if(ret!==undefined){event.result=ret;if(ret===false){event.preventDefault();event.stopPropagation();}}
if(event.isImmediatePropagationStopped()){break;}}}
return event.result;},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(event){if(event[jQuery.expando]){return event;}
var originalEvent=event;event=jQuery.Event(originalEvent);for(var i=this.props.length,prop;i;){prop=this.props[--i];event[prop]=originalEvent[prop];}
if(!event.target){event.target=event.srcElement||document;}
if(event.target.nodeType===3){event.target=event.target.parentNode;}
if(!event.relatedTarget&&event.fromElement){event.relatedTarget=event.fromElement===event.target?event.toElement:event.fromElement;}
if(event.pageX==null&&event.clientX!=null){var eventDocument=event.target.ownerDocument||document,doc=eventDocument.documentElement,body=eventDocument.body;event.pageX=event.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);event.pageY=event.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0);}
if(event.which==null&&(event.charCode!=null||event.keyCode!=null)){event.which=event.charCode!=null?event.charCode:event.keyCode;}
if(!event.metaKey&&event.ctrlKey){event.metaKey=event.ctrlKey;}
if(!event.which&&event.button!==undefined){event.which=(event.button&1?1:(event.button&2?3:(event.button&4?2:0)));}
return event;},guid:1E8,proxy:jQuery.proxy,special:{ready:{setup:jQuery.bindReady,teardown:jQuery.noop},live:{add:function(handleObj){jQuery.event.add(this,liveConvert(handleObj.origType,handleObj.selector),jQuery.extend({},handleObj,{handler:liveHandler,guid:handleObj.handler.guid}));},remove:function(handleObj){jQuery.event.remove(this,liveConvert(handleObj.origType,handleObj.selector),handleObj);}},beforeunload:{setup:function(data,namespaces,eventHandle){if(jQuery.isWindow(this)){this.onbeforeunload=eventHandle;}},teardown:function(namespaces,eventHandle){if(this.onbeforeunload===eventHandle){this.onbeforeunload=null;}}}}};jQuery.removeEvent=document.removeEventListener?function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle,false);}}:function(elem,type,handle){if(elem.detachEvent){elem.detachEvent("on"+type,handle);}};jQuery.Event=function(src,props){if(!this.preventDefault){return new jQuery.Event(src,props);}
if(src&&src.type){this.originalEvent=src;this.type=src.type;this.isDefaultPrevented=(src.defaultPrevented||src.returnValue===false||src.getPreventDefault&&src.getPreventDefault())?returnTrue:returnFalse;}else{this.type=src;}
if(props){jQuery.extend(this,props);}
this.timeStamp=jQuery.now();this[jQuery.expando]=true;};function returnFalse(){return false;}
function returnTrue(){return true;}
jQuery.Event.prototype={preventDefault:function(){this.isDefaultPrevented=returnTrue;var e=this.originalEvent;if(!e){return;}
if(e.preventDefault){e.preventDefault();}else{e.returnValue=false;}},stopPropagation:function(){this.isPropagationStopped=returnTrue;var e=this.originalEvent;if(!e){return;}
if(e.stopPropagation){e.stopPropagation();}
e.cancelBubble=true;},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=returnTrue;this.stopPropagation();},isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse};var withinElement=function(event){var related=event.relatedTarget,inside=false,eventType=event.type;event.type=event.data;if(related!==this){if(related){inside=jQuery.contains(this,related);}
if(!inside){jQuery.event.handle.apply(this,arguments);event.type=eventType;}}},delegate=function(event){event.type=event.data;jQuery.event.handle.apply(this,arguments);};jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(orig,fix){jQuery.event.special[orig]={setup:function(data){jQuery.event.add(this,fix,data&&data.selector?delegate:withinElement,orig);},teardown:function(data){jQuery.event.remove(this,fix,data&&data.selector?delegate:withinElement);}};});if(!jQuery.support.submitBubbles){jQuery.event.special.submit={setup:function(data,namespaces){if(!jQuery.nodeName(this,"form")){jQuery.event.add(this,"click.specialSubmit",function(e){var elem=e.target,type=jQuery.nodeName(elem,"input")||jQuery.nodeName(elem,"button")?elem.type:"";if((type==="submit"||type==="image")&&jQuery(elem).closest("form").length){trigger("submit",this,arguments);}});jQuery.event.add(this,"keypress.specialSubmit",function(e){var elem=e.target,type=jQuery.nodeName(elem,"input")||jQuery.nodeName(elem,"button")?elem.type:"";if((type==="text"||type==="password")&&jQuery(elem).closest("form").length&&e.keyCode===13){trigger("submit",this,arguments);}});}else{return false;}},teardown:function(namespaces){jQuery.event.remove(this,".specialSubmit");}};}
if(!jQuery.support.changeBubbles){var changeFilters,getVal=function(elem){var type=jQuery.nodeName(elem,"input")?elem.type:"",val=elem.value;if(type==="radio"||type==="checkbox"){val=elem.checked;}else if(type==="select-multiple"){val=elem.selectedIndex>-1?jQuery.map(elem.options,function(elem){return elem.selected;}).join("-"):"";}else if(jQuery.nodeName(elem,"select")){val=elem.selectedIndex;}
return val;},testChange=function testChange(e){var elem=e.target,data,val;if(!rformElems.test(elem.nodeName)||elem.readOnly){return;}
data=jQuery._data(elem,"_change_data");val=getVal(elem);if(e.type!=="focusout"||elem.type!=="radio"){jQuery._data(elem,"_change_data",val);}
if(data===undefined||val===data){return;}
if(data!=null||val){e.type="change";e.liveFired=undefined;jQuery.event.trigger(e,arguments[1],elem);}};jQuery.event.special.change={filters:{focusout:testChange,beforedeactivate:testChange,click:function(e){var elem=e.target,type=jQuery.nodeName(elem,"input")?elem.type:"";if(type==="radio"||type==="checkbox"||jQuery.nodeName(elem,"select")){testChange.call(this,e);}},keydown:function(e){var elem=e.target,type=jQuery.nodeName(elem,"input")?elem.type:"";if((e.keyCode===13&&!jQuery.nodeName(elem,"textarea"))||(e.keyCode===32&&(type==="checkbox"||type==="radio"))||type==="select-multiple"){testChange.call(this,e);}},beforeactivate:function(e){var elem=e.target;jQuery._data(elem,"_change_data",getVal(elem));}},setup:function(data,namespaces){if(this.type==="file"){return false;}
for(var type in changeFilters){jQuery.event.add(this,type+".specialChange",changeFilters[type]);}
return rformElems.test(this.nodeName);},teardown:function(namespaces){jQuery.event.remove(this,".specialChange");return rformElems.test(this.nodeName);}};changeFilters=jQuery.event.special.change.filters;changeFilters.focus=changeFilters.beforeactivate;}
function trigger(type,elem,args){var event=jQuery.extend({},args[0]);event.type=type;event.originalEvent={};event.liveFired=undefined;jQuery.event.handle.call(elem,event);if(event.isDefaultPrevented()){args[0].preventDefault();}}
if(!jQuery.support.focusinBubbles){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){var attaches=0;jQuery.event.special[fix]={setup:function(){if(attaches++===0){document.addEventListener(orig,handler,true);}},teardown:function(){if(--attaches===0){document.removeEventListener(orig,handler,true);}}};function handler(donor){var e=jQuery.event.fix(donor);e.type=fix;e.originalEvent={};jQuery.event.trigger(e,null,e.target);if(e.isDefaultPrevented()){donor.preventDefault();}}});}
jQuery.each(["bind","one"],function(i,name){jQuery.fn[name]=function(type,data,fn){var handler;if(typeof type==="object"){for(var key in type){this[name](key,data,type[key],fn);}
return this;}
if(arguments.length===2||data===false){fn=data;data=undefined;}
if(name==="one"){handler=function(event){jQuery(this).unbind(event,handler);return fn.apply(this,arguments);};handler.guid=fn.guid||jQuery.guid++;}else{handler=fn;}
if(type==="unload"&&name!=="one"){this.one(type,data,fn);}else{for(var i=0,l=this.length;i<l;i++){jQuery.event.add(this[i],type,handler,data);}}
return this;};});jQuery.fn.extend({unbind:function(type,fn){if(typeof type==="object"&&!type.preventDefault){for(var key in type){this.unbind(key,type[key]);}}else{for(var i=0,l=this.length;i<l;i++){jQuery.event.remove(this[i],type,fn);}}
return this;},delegate:function(selector,types,data,fn){return this.live(types,data,fn,selector);},undelegate:function(selector,types,fn){if(arguments.length===0){return this.unbind("live");}else{return this.die(types,null,fn,selector);}},trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function(type,data){if(this[0]){return jQuery.event.trigger(type,data,this[0],true);}},toggle:function(fn){var args=arguments,guid=fn.guid||jQuery.guid++,i=0,toggler=function(event){var lastToggle=(jQuery.data(this,"lastToggle"+fn.guid)||0)%i;jQuery.data(this,"lastToggle"+fn.guid,lastToggle+1);event.preventDefault();return args[lastToggle].apply(this,arguments)||false;};toggler.guid=guid;while(i<args.length){args[i++].guid=guid;}
return this.click(toggler);},hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);}});var liveMap={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};jQuery.each(["live","die"],function(i,name){jQuery.fn[name]=function(types,data,fn,origSelector){var type,i=0,match,namespaces,preType,selector=origSelector||this.selector,context=origSelector?this:jQuery(this.context);if(typeof types==="object"&&!types.preventDefault){for(var key in types){context[name](key,data,types[key],selector);}
return this;}
if(name==="die"&&!types&&origSelector&&origSelector.charAt(0)==="."){context.unbind(origSelector);return this;}
if(data===false||jQuery.isFunction(data)){fn=data||returnFalse;data=undefined;}
types=(types||"").split(" ");while((type=types[i++])!=null){match=rnamespaces.exec(type);namespaces="";if(match){namespaces=match[0];type=type.replace(rnamespaces,"");}
if(type==="hover"){types.push("mouseenter"+namespaces,"mouseleave"+namespaces);continue;}
preType=type;if(liveMap[type]){types.push(liveMap[type]+namespaces);type=type+namespaces;}else{type=(liveMap[type]||type)+namespaces;}
if(name==="live"){for(var j=0,l=context.length;j<l;j++){jQuery.event.add(context[j],"live."+liveConvert(type,selector),{data:data,selector:selector,handler:fn,origType:type,origHandler:fn,preType:preType});}}else{context.unbind("live."+liveConvert(type,selector),fn);}}
return this;};});function liveHandler(event){var stop,maxLevel,related,match,handleObj,elem,j,i,l,data,close,namespace,ret,elems=[],selectors=[],events=jQuery._data(this,"events");if(event.liveFired===this||!events||!events.live||event.target.disabled||event.button&&event.type==="click"){return;}
if(event.namespace){namespace=new RegExp("(^|\\.)"+event.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)");}
event.liveFired=this;var live=events.live.slice(0);for(j=0;j<live.length;j++){handleObj=live[j];if(handleObj.origType.replace(rnamespaces,"")===event.type){selectors.push(handleObj.selector);}else{live.splice(j--,1);}}
match=jQuery(event.target).closest(selectors,event.currentTarget);for(i=0,l=match.length;i<l;i++){close=match[i];for(j=0;j<live.length;j++){handleObj=live[j];if(close.selector===handleObj.selector&&(!namespace||namespace.test(handleObj.namespace))&&!close.elem.disabled){elem=close.elem;related=null;if(handleObj.preType==="mouseenter"||handleObj.preType==="mouseleave"){event.type=handleObj.preType;related=jQuery(event.relatedTarget).closest(handleObj.selector)[0];if(related&&jQuery.contains(elem,related)){related=elem;}}
if(!related||related!==elem){elems.push({elem:elem,handleObj:handleObj,level:close.level});}}}}
for(i=0,l=elems.length;i<l;i++){match=elems[i];if(maxLevel&&match.level>maxLevel){break;}
event.currentTarget=match.elem;event.data=match.handleObj.data;event.handleObj=match.handleObj;ret=match.handleObj.origHandler.apply(match.elem,arguments);if(ret===false||event.isPropagationStopped()){maxLevel=match.level;if(ret===false){stop=false;}
if(event.isImmediatePropagationStopped()){break;}}}
return stop;}
function liveConvert(type,selector){return(type&&type!=="*"?type+".":"")+selector.replace(rperiod,"`").replace(rspaces,"&");}
jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error").split(" "),function(i,name){jQuery.fn[name]=function(data,fn){if(fn==null){fn=data;data=null;}
return arguments.length>0?this.bind(name,data,fn):this.trigger(name);};if(jQuery.attrFn){jQuery.attrFn[name]=true;}});
/*!
 * Sizzle CSS Selector Engine
 *  Copyright 2011, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var chunker=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,done=0,toString=Object.prototype.toString,hasDuplicate=false,baseHasDuplicate=true,rBackslash=/\\/g,rNonWord=/\W/;[0,0].sort(function(){baseHasDuplicate=false;return 0;});var Sizzle=function(selector,context,results,seed){results=results||[];context=context||document;var origContext=context;if(context.nodeType!==1&&context.nodeType!==9){return[];}
if(!selector||typeof selector!=="string"){return results;}
var m,set,checkSet,extra,ret,cur,pop,i,prune=true,contextXML=Sizzle.isXML(context),parts=[],soFar=selector;do{chunker.exec("");m=chunker.exec(soFar);if(m){soFar=m[3];parts.push(m[1]);if(m[2]){extra=m[3];break;}}}while(m);if(parts.length>1&&origPOS.exec(selector)){if(parts.length===2&&Expr.relative[parts[0]]){set=posProcess(parts[0]+parts[1],context);}else{set=Expr.relative[parts[0]]?[context]:Sizzle(parts.shift(),context);while(parts.length){selector=parts.shift();if(Expr.relative[selector]){selector+=parts.shift();}
set=posProcess(selector,set);}}}else{if(!seed&&parts.length>1&&context.nodeType===9&&!contextXML&&Expr.match.ID.test(parts[0])&&!Expr.match.ID.test(parts[parts.length-1])){ret=Sizzle.find(parts.shift(),context,contextXML);context=ret.expr?Sizzle.filter(ret.expr,ret.set)[0]:ret.set[0];}
if(context){ret=seed?{expr:parts.pop(),set:makeArray(seed)}:Sizzle.find(parts.pop(),parts.length===1&&(parts[0]==="~"||parts[0]==="+")&&context.parentNode?context.parentNode:context,contextXML);set=ret.expr?Sizzle.filter(ret.expr,ret.set):ret.set;if(parts.length>0){checkSet=makeArray(set);}else{prune=false;}
while(parts.length){cur=parts.pop();pop=cur;if(!Expr.relative[cur]){cur="";}else{pop=parts.pop();}
if(pop==null){pop=context;}
Expr.relative[cur](checkSet,pop,contextXML);}}else{checkSet=parts=[];}}
if(!checkSet){checkSet=set;}
if(!checkSet){Sizzle.error(cur||selector);}
if(toString.call(checkSet)==="[object Array]"){if(!prune){results.push.apply(results,checkSet);}else if(context&&context.nodeType===1){for(i=0;checkSet[i]!=null;i++){if(checkSet[i]&&(checkSet[i]===true||checkSet[i].nodeType===1&&Sizzle.contains(context,checkSet[i]))){results.push(set[i]);}}}else{for(i=0;checkSet[i]!=null;i++){if(checkSet[i]&&checkSet[i].nodeType===1){results.push(set[i]);}}}}else{makeArray(checkSet,results);}
if(extra){Sizzle(extra,origContext,results,seed);Sizzle.uniqueSort(results);}
return results;};Sizzle.uniqueSort=function(results){if(sortOrder){hasDuplicate=baseHasDuplicate;results.sort(sortOrder);if(hasDuplicate){for(var i=1;i<results.length;i++){if(results[i]===results[i-1]){results.splice(i--,1);}}}}
return results;};Sizzle.matches=function(expr,set){return Sizzle(expr,null,null,set);};Sizzle.matchesSelector=function(node,expr){return Sizzle(expr,null,null,[node]).length>0;};Sizzle.find=function(expr,context,isXML){var set;if(!expr){return[];}
for(var i=0,l=Expr.order.length;i<l;i++){var match,type=Expr.order[i];if((match=Expr.leftMatch[type].exec(expr))){var left=match[1];match.splice(1,1);if(left.substr(left.length-1)!=="\\"){match[1]=(match[1]||"").replace(rBackslash,"");set=Expr.find[type](match,context,isXML);if(set!=null){expr=expr.replace(Expr.match[type],"");break;}}}}
if(!set){set=typeof context.getElementsByTagName!=="undefined"?context.getElementsByTagName("*"):[];}
return{set:set,expr:expr};};Sizzle.filter=function(expr,set,inplace,not){var match,anyFound,old=expr,result=[],curLoop=set,isXMLFilter=set&&set[0]&&Sizzle.isXML(set[0]);while(expr&&set.length){for(var type in Expr.filter){if((match=Expr.leftMatch[type].exec(expr))!=null&&match[2]){var found,item,filter=Expr.filter[type],left=match[1];anyFound=false;match.splice(1,1);if(left.substr(left.length-1)==="\\"){continue;}
if(curLoop===result){result=[];}
if(Expr.preFilter[type]){match=Expr.preFilter[type](match,curLoop,inplace,result,not,isXMLFilter);if(!match){anyFound=found=true;}else if(match===true){continue;}}
if(match){for(var i=0;(item=curLoop[i])!=null;i++){if(item){found=filter(item,match,i,curLoop);var pass=not^!!found;if(inplace&&found!=null){if(pass){anyFound=true;}else{curLoop[i]=false;}}else if(pass){result.push(item);anyFound=true;}}}}
if(found!==undefined){if(!inplace){curLoop=result;}
expr=expr.replace(Expr.match[type],"");if(!anyFound){return[];}
break;}}}
if(expr===old){if(anyFound==null){Sizzle.error(expr);}else{break;}}
old=expr;}
return curLoop;};Sizzle.error=function(msg){throw"Syntax error, unrecognized expression: "+msg;};var Expr=Sizzle.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(elem){return elem.getAttribute("href");},type:function(elem){return elem.getAttribute("type");}},relative:{"+":function(checkSet,part){var isPartStr=typeof part==="string",isTag=isPartStr&&!rNonWord.test(part),isPartStrNotTag=isPartStr&&!isTag;if(isTag){part=part.toLowerCase();}
for(var i=0,l=checkSet.length,elem;i<l;i++){if((elem=checkSet[i])){while((elem=elem.previousSibling)&&elem.nodeType!==1){}
checkSet[i]=isPartStrNotTag||elem&&elem.nodeName.toLowerCase()===part?elem||false:elem===part;}}
if(isPartStrNotTag){Sizzle.filter(part,checkSet,true);}},">":function(checkSet,part){var elem,isPartStr=typeof part==="string",i=0,l=checkSet.length;if(isPartStr&&!rNonWord.test(part)){part=part.toLowerCase();for(;i<l;i++){elem=checkSet[i];if(elem){var parent=elem.parentNode;checkSet[i]=parent.nodeName.toLowerCase()===part?parent:false;}}}else{for(;i<l;i++){elem=checkSet[i];if(elem){checkSet[i]=isPartStr?elem.parentNode:elem.parentNode===part;}}
if(isPartStr){Sizzle.filter(part,checkSet,true);}}},"":function(checkSet,part,isXML){var nodeCheck,doneName=done++,checkFn=dirCheck;if(typeof part==="string"&&!rNonWord.test(part)){part=part.toLowerCase();nodeCheck=part;checkFn=dirNodeCheck;}
checkFn("parentNode",part,doneName,checkSet,nodeCheck,isXML);},"~":function(checkSet,part,isXML){var nodeCheck,doneName=done++,checkFn=dirCheck;if(typeof part==="string"&&!rNonWord.test(part)){part=part.toLowerCase();nodeCheck=part;checkFn=dirNodeCheck;}
checkFn("previousSibling",part,doneName,checkSet,nodeCheck,isXML);}},find:{ID:function(match,context,isXML){if(typeof context.getElementById!=="undefined"&&!isXML){var m=context.getElementById(match[1]);return m&&m.parentNode?[m]:[];}},NAME:function(match,context){if(typeof context.getElementsByName!=="undefined"){var ret=[],results=context.getElementsByName(match[1]);for(var i=0,l=results.length;i<l;i++){if(results[i].getAttribute("name")===match[1]){ret.push(results[i]);}}
return ret.length===0?null:ret;}},TAG:function(match,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(match[1]);}}},preFilter:{CLASS:function(match,curLoop,inplace,result,not,isXML){match=" "+match[1].replace(rBackslash,"")+" ";if(isXML){return match;}
for(var i=0,elem;(elem=curLoop[i])!=null;i++){if(elem){if(not^(elem.className&&(" "+elem.className+" ").replace(/[\t\n\r]/g," ").indexOf(match)>=0)){if(!inplace){result.push(elem);}}else if(inplace){curLoop[i]=false;}}}
return false;},ID:function(match){return match[1].replace(rBackslash,"");},TAG:function(match,curLoop){return match[1].replace(rBackslash,"").toLowerCase();},CHILD:function(match){if(match[1]==="nth"){if(!match[2]){Sizzle.error(match[0]);}
match[2]=match[2].replace(/^\+|\s*/g,'');var test=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(match[2]==="even"&&"2n"||match[2]==="odd"&&"2n+1"||!/\D/.test(match[2])&&"0n+"+match[2]||match[2]);match[2]=(test[1]+(test[2]||1))-0;match[3]=test[3]-0;}
else if(match[2]){Sizzle.error(match[0]);}
match[0]=done++;return match;},ATTR:function(match,curLoop,inplace,result,not,isXML){var name=match[1]=match[1].replace(rBackslash,"");if(!isXML&&Expr.attrMap[name]){match[1]=Expr.attrMap[name];}
match[4]=(match[4]||match[5]||"").replace(rBackslash,"");if(match[2]==="~="){match[4]=" "+match[4]+" ";}
return match;},PSEUDO:function(match,curLoop,inplace,result,not){if(match[1]==="not"){if((chunker.exec(match[3])||"").length>1||/^\w/.test(match[3])){match[3]=Sizzle(match[3],null,null,curLoop);}else{var ret=Sizzle.filter(match[3],curLoop,inplace,true^not);if(!inplace){result.push.apply(result,ret);}
return false;}}else if(Expr.match.POS.test(match[0])||Expr.match.CHILD.test(match[0])){return true;}
return match;},POS:function(match){match.unshift(true);return match;}},filters:{enabled:function(elem){return elem.disabled===false&&elem.type!=="hidden";},disabled:function(elem){return elem.disabled===true;},checked:function(elem){return elem.checked===true;},selected:function(elem){if(elem.parentNode){elem.parentNode.selectedIndex;}
return elem.selected===true;},parent:function(elem){return!!elem.firstChild;},empty:function(elem){return!elem.firstChild;},has:function(elem,i,match){return!!Sizzle(match[3],elem).length;},header:function(elem){return(/h\d/i).test(elem.nodeName);},text:function(elem){var attr=elem.getAttribute("type"),type=elem.type;return elem.nodeName.toLowerCase()==="input"&&"text"===type&&(attr===type||attr===null);},radio:function(elem){return elem.nodeName.toLowerCase()==="input"&&"radio"===elem.type;},checkbox:function(elem){return elem.nodeName.toLowerCase()==="input"&&"checkbox"===elem.type;},file:function(elem){return elem.nodeName.toLowerCase()==="input"&&"file"===elem.type;},password:function(elem){return elem.nodeName.toLowerCase()==="input"&&"password"===elem.type;},submit:function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&"submit"===elem.type;},image:function(elem){return elem.nodeName.toLowerCase()==="input"&&"image"===elem.type;},reset:function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&"reset"===elem.type;},button:function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&"button"===elem.type||name==="button";},input:function(elem){return(/input|select|textarea|button/i).test(elem.nodeName);},focus:function(elem){return elem===elem.ownerDocument.activeElement;}},setFilters:{first:function(elem,i){return i===0;},last:function(elem,i,match,array){return i===array.length-1;},even:function(elem,i){return i%2===0;},odd:function(elem,i){return i%2===1;},lt:function(elem,i,match){return i<match[3]-0;},gt:function(elem,i,match){return i>match[3]-0;},nth:function(elem,i,match){return match[3]-0===i;},eq:function(elem,i,match){return match[3]-0===i;}},filter:{PSEUDO:function(elem,match,i,array){var name=match[1],filter=Expr.filters[name];if(filter){return filter(elem,i,match,array);}else if(name==="contains"){return(elem.textContent||elem.innerText||Sizzle.getText([elem])||"").indexOf(match[3])>=0;}else if(name==="not"){var not=match[3];for(var j=0,l=not.length;j<l;j++){if(not[j]===elem){return false;}}
return true;}else{Sizzle.error(name);}},CHILD:function(elem,match){var type=match[1],node=elem;switch(type){case"only":case"first":while((node=node.previousSibling)){if(node.nodeType===1){return false;}}
if(type==="first"){return true;}
node=elem;case"last":while((node=node.nextSibling)){if(node.nodeType===1){return false;}}
return true;case"nth":var first=match[2],last=match[3];if(first===1&&last===0){return true;}
var doneName=match[0],parent=elem.parentNode;if(parent&&(parent.sizcache!==doneName||!elem.nodeIndex)){var count=0;for(node=parent.firstChild;node;node=node.nextSibling){if(node.nodeType===1){node.nodeIndex=++count;}}
parent.sizcache=doneName;}
var diff=elem.nodeIndex-last;if(first===0){return diff===0;}else{return(diff%first===0&&diff/first>=0);}}},ID:function(elem,match){return elem.nodeType===1&&elem.getAttribute("id")===match;},TAG:function(elem,match){return(match==="*"&&elem.nodeType===1)||elem.nodeName.toLowerCase()===match;},CLASS:function(elem,match){return(" "+(elem.className||elem.getAttribute("class"))+" ").indexOf(match)>-1;},ATTR:function(elem,match){var name=match[1],result=Expr.attrHandle[name]?Expr.attrHandle[name](elem):elem[name]!=null?elem[name]:elem.getAttribute(name),value=result+"",type=match[2],check=match[4];return result==null?type==="!=":type==="="?value===check:type==="*="?value.indexOf(check)>=0:type==="~="?(" "+value+" ").indexOf(check)>=0:!check?value&&result!==false:type==="!="?value!==check:type==="^="?value.indexOf(check)===0:type==="$="?value.substr(value.length-check.length)===check:type==="|="?value===check||value.substr(0,check.length+1)===check+"-":false;},POS:function(elem,match,i,array){var name=match[2],filter=Expr.setFilters[name];if(filter){return filter(elem,i,match,array);}}}};var origPOS=Expr.match.POS,fescape=function(all,num){return"\\"+(num-0+1);};for(var type in Expr.match){Expr.match[type]=new RegExp(Expr.match[type].source+(/(?![^\[]*\])(?![^\(]*\))/.source));Expr.leftMatch[type]=new RegExp(/(^(?:.|\r|\n)*?)/.source+Expr.match[type].source.replace(/\\(\d+)/g,fescape));}
var makeArray=function(array,results){array=Array.prototype.slice.call(array,0);if(results){results.push.apply(results,array);return results;}
return array;};try{Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType;}catch(e){makeArray=function(array,results){var i=0,ret=results||[];if(toString.call(array)==="[object Array]"){Array.prototype.push.apply(ret,array);}else{if(typeof array.length==="number"){for(var l=array.length;i<l;i++){ret.push(array[i]);}}else{for(;array[i];i++){ret.push(array[i]);}}}
return ret;};}
var sortOrder,siblingCheck;if(document.documentElement.compareDocumentPosition){sortOrder=function(a,b){if(a===b){hasDuplicate=true;return 0;}
if(!a.compareDocumentPosition||!b.compareDocumentPosition){return a.compareDocumentPosition?-1:1;}
return a.compareDocumentPosition(b)&4?-1:1;};}else{sortOrder=function(a,b){if(a===b){hasDuplicate=true;return 0;}else if(a.sourceIndex&&b.sourceIndex){return a.sourceIndex-b.sourceIndex;}
var al,bl,ap=[],bp=[],aup=a.parentNode,bup=b.parentNode,cur=aup;if(aup===bup){return siblingCheck(a,b);}else if(!aup){return-1;}else if(!bup){return 1;}
while(cur){ap.unshift(cur);cur=cur.parentNode;}
cur=bup;while(cur){bp.unshift(cur);cur=cur.parentNode;}
al=ap.length;bl=bp.length;for(var i=0;i<al&&i<bl;i++){if(ap[i]!==bp[i]){return siblingCheck(ap[i],bp[i]);}}
return i===al?siblingCheck(a,bp[i],-1):siblingCheck(ap[i],b,1);};siblingCheck=function(a,b,ret){if(a===b){return ret;}
var cur=a.nextSibling;while(cur){if(cur===b){return-1;}
cur=cur.nextSibling;}
return 1;};}
Sizzle.getText=function(elems){var ret="",elem;for(var i=0;elems[i];i++){elem=elems[i];if(elem.nodeType===3||elem.nodeType===4){ret+=elem.nodeValue;}else if(elem.nodeType!==8){ret+=Sizzle.getText(elem.childNodes);}}
return ret;};(function(){var form=document.createElement("div"),id="script"+(new Date()).getTime(),root=document.documentElement;form.innerHTML="<a name='"+id+"'/>";root.insertBefore(form,root.firstChild);if(document.getElementById(id)){Expr.find.ID=function(match,context,isXML){if(typeof context.getElementById!=="undefined"&&!isXML){var m=context.getElementById(match[1]);return m?m.id===match[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===match[1]?[m]:undefined:[];}};Expr.filter.ID=function(elem,match){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return elem.nodeType===1&&node&&node.nodeValue===match;};}
root.removeChild(form);root=form=null;})();(function(){var div=document.createElement("div");div.appendChild(document.createComment(""));if(div.getElementsByTagName("*").length>0){Expr.find.TAG=function(match,context){var results=context.getElementsByTagName(match[1]);if(match[1]==="*"){var tmp=[];for(var i=0;results[i];i++){if(results[i].nodeType===1){tmp.push(results[i]);}}
results=tmp;}
return results;};}
div.innerHTML="<a href='#'></a>";if(div.firstChild&&typeof div.firstChild.getAttribute!=="undefined"&&div.firstChild.getAttribute("href")!=="#"){Expr.attrHandle.href=function(elem){return elem.getAttribute("href",2);};}
div=null;})();if(document.querySelectorAll){(function(){var oldSizzle=Sizzle,div=document.createElement("div"),id="__sizzle__";div.innerHTML="<p class='TEST'></p>";if(div.querySelectorAll&&div.querySelectorAll(".TEST").length===0){return;}
Sizzle=function(query,context,extra,seed){context=context||document;if(!seed&&!Sizzle.isXML(context)){var match=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(query);if(match&&(context.nodeType===1||context.nodeType===9)){if(match[1]){return makeArray(context.getElementsByTagName(query),extra);}else if(match[2]&&Expr.find.CLASS&&context.getElementsByClassName){return makeArray(context.getElementsByClassName(match[2]),extra);}}
if(context.nodeType===9){if(query==="body"&&context.body){return makeArray([context.body],extra);}else if(match&&match[3]){var elem=context.getElementById(match[3]);if(elem&&elem.parentNode){if(elem.id===match[3]){return makeArray([elem],extra);}}else{return makeArray([],extra);}}
try{return makeArray(context.querySelectorAll(query),extra);}catch(qsaError){}}else if(context.nodeType===1&&context.nodeName.toLowerCase()!=="object"){var oldContext=context,old=context.getAttribute("id"),nid=old||id,hasParent=context.parentNode,relativeHierarchySelector=/^\s*[+~]/.test(query);if(!old){context.setAttribute("id",nid);}else{nid=nid.replace(/'/g,"\\$&");}
if(relativeHierarchySelector&&hasParent){context=context.parentNode;}
try{if(!relativeHierarchySelector||hasParent){return makeArray(context.querySelectorAll("[id='"+nid+"'] "+query),extra);}}catch(pseudoError){}finally{if(!old){oldContext.removeAttribute("id");}}}}
return oldSizzle(query,context,extra,seed);};for(var prop in oldSizzle){Sizzle[prop]=oldSizzle[prop];}
div=null;})();}
(function(){var html=document.documentElement,matches=html.matchesSelector||html.mozMatchesSelector||html.webkitMatchesSelector||html.msMatchesSelector;if(matches){var disconnectedMatch=!matches.call(document.createElement("div"),"div"),pseudoWorks=false;try{matches.call(document.documentElement,"[test!='']:sizzle");}catch(pseudoError){pseudoWorks=true;}
Sizzle.matchesSelector=function(node,expr){expr=expr.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!Sizzle.isXML(node)){try{if(pseudoWorks||!Expr.match.PSEUDO.test(expr)&&!/!=/.test(expr)){var ret=matches.call(node,expr);if(ret||!disconnectedMatch||node.document&&node.document.nodeType!==11){return ret;}}}catch(e){}}
return Sizzle(expr,null,null,[node]).length>0;};}})();(function(){var div=document.createElement("div");div.innerHTML="<div class='test e'></div><div class='test'></div>";if(!div.getElementsByClassName||div.getElementsByClassName("e").length===0){return;}
div.lastChild.className="e";if(div.getElementsByClassName("e").length===1){return;}
Expr.order.splice(1,0,"CLASS");Expr.find.CLASS=function(match,context,isXML){if(typeof context.getElementsByClassName!=="undefined"&&!isXML){return context.getElementsByClassName(match[1]);}};div=null;})();function dirNodeCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){var match=false;elem=elem[dir];while(elem){if(elem.sizcache===doneName){match=checkSet[elem.sizset];break;}
if(elem.nodeType===1&&!isXML){elem.sizcache=doneName;elem.sizset=i;}
if(elem.nodeName.toLowerCase()===cur){match=elem;break;}
elem=elem[dir];}
checkSet[i]=match;}}}
function dirCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){var match=false;elem=elem[dir];while(elem){if(elem.sizcache===doneName){match=checkSet[elem.sizset];break;}
if(elem.nodeType===1){if(!isXML){elem.sizcache=doneName;elem.sizset=i;}
if(typeof cur!=="string"){if(elem===cur){match=true;break;}}else if(Sizzle.filter(cur,[elem]).length>0){match=elem;break;}}
elem=elem[dir];}
checkSet[i]=match;}}}
if(document.documentElement.contains){Sizzle.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):true);};}else if(document.documentElement.compareDocumentPosition){Sizzle.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16);};}else{Sizzle.contains=function(){return false;};}
Sizzle.isXML=function(elem){var documentElement=(elem?elem.ownerDocument||elem:0).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;};var posProcess=function(selector,context){var match,tmpSet=[],later="",root=context.nodeType?[context]:context;while((match=Expr.match.PSEUDO.exec(selector))){later+=match[0];selector=selector.replace(Expr.match.PSEUDO,"");}
selector=Expr.relative[selector]?selector+"*":selector;for(var i=0,l=root.length;i<l;i++){Sizzle(selector,root[i],tmpSet);}
return Sizzle.filter(later,tmpSet);};jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.filters;jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;})();var runtil=/Until$/,rparentsprev=/^(?:parents|prevUntil|prevAll)/,rmultiselector=/,/,isSimple=/^.[^:#\[\.,]*$/,slice=Array.prototype.slice,POS=jQuery.expr.match.POS,guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({find:function(selector){var self=this,i,l;if(typeof selector!=="string"){return jQuery(selector).filter(function(){for(i=0,l=self.length;i<l;i++){if(jQuery.contains(self[i],this)){return true;}}});}
var ret=this.pushStack("","find",selector),length,n,r;for(i=0,l=this.length;i<l;i++){length=ret.length;jQuery.find(selector,this[i],ret);if(i>0){for(n=length;n<ret.length;n++){for(r=0;r<length;r++){if(ret[r]===ret[n]){ret.splice(n--,1);break;}}}}}
return ret;},has:function(target){var targets=jQuery(target);return this.filter(function(){for(var i=0,l=targets.length;i<l;i++){if(jQuery.contains(this,targets[i])){return true;}}});},not:function(selector){return this.pushStack(winnow(this,selector,false),"not",selector);},filter:function(selector){return this.pushStack(winnow(this,selector,true),"filter",selector);},is:function(selector){return!!selector&&(typeof selector==="string"?jQuery.filter(selector,this).length>0:this.filter(selector).length>0);},closest:function(selectors,context){var ret=[],i,l,cur=this[0];if(jQuery.isArray(selectors)){var match,selector,matches={},level=1;if(cur&&selectors.length){for(i=0,l=selectors.length;i<l;i++){selector=selectors[i];if(!matches[selector]){matches[selector]=POS.test(selector)?jQuery(selector,context||this.context):selector;}}
while(cur&&cur.ownerDocument&&cur!==context){for(selector in matches){match=matches[selector];if(match.jquery?match.index(cur)>-1:jQuery(cur).is(match)){ret.push({selector:selector,elem:cur,level:level});}}
cur=cur.parentNode;level++;}}
return ret;}
var pos=POS.test(selectors)||typeof selectors!=="string"?jQuery(selectors,context||this.context):0;for(i=0,l=this.length;i<l;i++){cur=this[i];while(cur){if(pos?pos.index(cur)>-1:jQuery.find.matchesSelector(cur,selectors)){ret.push(cur);break;}else{cur=cur.parentNode;if(!cur||!cur.ownerDocument||cur===context||cur.nodeType===11){break;}}}}
ret=ret.length>1?jQuery.unique(ret):ret;return this.pushStack(ret,"closest",selectors);},index:function(elem){if(!elem){return(this[0]&&this[0].parentNode)?this.prevAll().length:-1;}
if(typeof elem==="string"){return jQuery.inArray(this[0],jQuery(elem));}
return jQuery.inArray(elem.jquery?elem[0]:elem,this);},add:function(selector,context){var set=typeof selector==="string"?jQuery(selector,context):jQuery.makeArray(selector&&selector.nodeType?[selector]:selector),all=jQuery.merge(this.get(),set);return this.pushStack(isDisconnected(set[0])||isDisconnected(all[0])?all:jQuery.unique(all));},andSelf:function(){return this.add(this.prevObject);}});function isDisconnected(node){return!node||!node.parentNode||node.parentNode.nodeType===11;}
jQuery.each({parent:function(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function(elem){return jQuery.dir(elem,"parentNode");},parentsUntil:function(elem,i,until){return jQuery.dir(elem,"parentNode",until);},next:function(elem){return jQuery.nth(elem,2,"nextSibling");},prev:function(elem){return jQuery.nth(elem,2,"previousSibling");},nextAll:function(elem){return jQuery.dir(elem,"nextSibling");},prevAll:function(elem){return jQuery.dir(elem,"previousSibling");},nextUntil:function(elem,i,until){return jQuery.dir(elem,"nextSibling",until);},prevUntil:function(elem,i,until){return jQuery.dir(elem,"previousSibling",until);},siblings:function(elem){return jQuery.sibling(elem.parentNode.firstChild,elem);},children:function(elem){return jQuery.sibling(elem.firstChild);},contents:function(elem){return jQuery.nodeName(elem,"iframe")?elem.contentDocument||elem.contentWindow.document:jQuery.makeArray(elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var ret=jQuery.map(this,fn,until),args=slice.call(arguments);if(!runtil.test(name)){selector=until;}
if(selector&&typeof selector==="string"){ret=jQuery.filter(selector,ret);}
ret=this.length>1&&!guaranteedUnique[name]?jQuery.unique(ret):ret;if((this.length>1||rmultiselector.test(selector))&&rparentsprev.test(name)){ret=ret.reverse();}
return this.pushStack(ret,name,args.join(","));};});jQuery.extend({filter:function(expr,elems,not){if(not){expr=":not("+expr+")";}
return elems.length===1?jQuery.find.matchesSelector(elems[0],expr)?[elems[0]]:[]:jQuery.find.matches(expr,elems);},dir:function(elem,dir,until){var matched=[],cur=elem[dir];while(cur&&cur.nodeType!==9&&(until===undefined||cur.nodeType!==1||!jQuery(cur).is(until))){if(cur.nodeType===1){matched.push(cur);}
cur=cur[dir];}
return matched;},nth:function(cur,result,dir,elem){result=result||1;var num=0;for(;cur;cur=cur[dir]){if(cur.nodeType===1&&++num===result){break;}}
return cur;},sibling:function(n,elem){var r=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){r.push(n);}}
return r;}});function winnow(elements,qualifier,keep){qualifier=qualifier||0;if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){var retVal=!!qualifier.call(elem,i,elem);return retVal===keep;});}else if(qualifier.nodeType){return jQuery.grep(elements,function(elem,i){return(elem===qualifier)===keep;});}else if(typeof qualifier==="string"){var filtered=jQuery.grep(elements,function(elem){return elem.nodeType===1;});if(isSimple.test(qualifier)){return jQuery.filter(qualifier,filtered,!keep);}else{qualifier=jQuery.filter(qualifier,filtered);}}
return jQuery.grep(elements,function(elem,i){return(jQuery.inArray(elem,qualifier)>=0)===keep;});}
var rinlinejQuery=/ jQuery\d+="(?:\d+|null)"/g,rleadingWhitespace=/^\s+/,rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,rtagName=/<([\w:]+)/,rtbody=/<tbody/i,rhtml=/<|&#?\w+;/,rnocache=/<(?:script|object|embed|option|style)/i,rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptType=/\/(java|ecma)script/i,rcleanScript=/^\s*<!(?:\[CDATA\[|\-\-)/,wrapMap={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;if(!jQuery.support.htmlSerialize){wrapMap._default=[1,"div<div>","</div>"];}
jQuery.fn.extend({text:function(text){if(jQuery.isFunction(text)){return this.each(function(i){var self=jQuery(this);self.text(text.call(this,i,self.text()));});}
if(typeof text!=="object"&&text!==undefined){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(text));}
return jQuery.text(this);},wrapAll:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i));});}
if(this[0]){var wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}
wrap.map(function(){var elem=this;while(elem.firstChild&&elem.firstChild.nodeType===1){elem=elem.firstChild;}
return elem;}).append(this);}
return this;},wrapInner:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}
return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function(html){return this.each(function(){jQuery(this).wrapAll(html);});},unwrap:function(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes);}}).end();},append:function(){return this.domManip(arguments,true,function(elem){if(this.nodeType===1){this.appendChild(elem);}});},prepend:function(){return this.domManip(arguments,true,function(elem){if(this.nodeType===1){this.insertBefore(elem,this.firstChild);}});},before:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(elem){this.parentNode.insertBefore(elem,this);});}else if(arguments.length){var set=jQuery(arguments[0]);set.push.apply(set,this.toArray());return this.pushStack(set,"before",arguments);}},after:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(elem){this.parentNode.insertBefore(elem,this.nextSibling);});}else if(arguments.length){var set=this.pushStack(this,"after",arguments);set.push.apply(set,jQuery(arguments[0]).toArray());return set;}},remove:function(selector,keepData){for(var i=0,elem;(elem=this[i])!=null;i++){if(!selector||jQuery.filter(selector,[elem]).length){if(!keepData&&elem.nodeType===1){jQuery.cleanData(elem.getElementsByTagName("*"));jQuery.cleanData([elem]);}
if(elem.parentNode){elem.parentNode.removeChild(elem);}}}
return this;},empty:function(){for(var i=0,elem;(elem=this[i])!=null;i++){if(elem.nodeType===1){jQuery.cleanData(elem.getElementsByTagName("*"));}
while(elem.firstChild){elem.removeChild(elem.firstChild);}}
return this;},clone:function(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function(value){if(value===undefined){return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(rinlinejQuery,""):null;}else if(typeof value==="string"&&!rnocache.test(value)&&(jQuery.support.leadingWhitespace||!rleadingWhitespace.test(value))&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=value.replace(rxhtmlTag,"<$1></$2>");try{for(var i=0,l=this.length;i<l;i++){if(this[i].nodeType===1){jQuery.cleanData(this[i].getElementsByTagName("*"));this[i].innerHTML=value;}}}catch(e){this.empty().append(value);}}else if(jQuery.isFunction(value)){this.each(function(i){var self=jQuery(this);self.html(value.call(this,i,self.html()));});}else{this.empty().append(value);}
return this;},replaceWith:function(value){if(this[0]&&this[0].parentNode){if(jQuery.isFunction(value)){return this.each(function(i){var self=jQuery(this),old=self.html();self.replaceWith(value.call(this,i,old));});}
if(typeof value!=="string"){value=jQuery(value).detach();}
return this.each(function(){var next=this.nextSibling,parent=this.parentNode;jQuery(this).remove();if(next){jQuery(next).before(value);}else{jQuery(parent).append(value);}});}else{return this.length?this.pushStack(jQuery(jQuery.isFunction(value)?value():value),"replaceWith",value):this;}},detach:function(selector){return this.remove(selector,true);},domManip:function(args,table,callback){var results,first,fragment,parent,value=args[0],scripts=[];if(!jQuery.support.checkClone&&arguments.length===3&&typeof value==="string"&&rchecked.test(value)){return this.each(function(){jQuery(this).domManip(args,table,callback,true);});}
if(jQuery.isFunction(value)){return this.each(function(i){var self=jQuery(this);args[0]=value.call(this,i,table?self.html():undefined);self.domManip(args,table,callback);});}
if(this[0]){parent=value&&value.parentNode;if(jQuery.support.parentNode&&parent&&parent.nodeType===11&&parent.childNodes.length===this.length){results={fragment:parent};}else{results=jQuery.buildFragment(args,this,scripts);}
fragment=results.fragment;if(fragment.childNodes.length===1){first=fragment=fragment.firstChild;}else{first=fragment.firstChild;}
if(first){table=table&&jQuery.nodeName(first,"tr");for(var i=0,l=this.length,lastIndex=l-1;i<l;i++){callback.call(table?root(this[i],first):this[i],results.cacheable||(l>1&&i<lastIndex)?jQuery.clone(fragment,true,true):fragment);}}
if(scripts.length){jQuery.each(scripts,evalScript);}}
return this;}});function root(elem,cur){return jQuery.nodeName(elem,"table")?(elem.getElementsByTagName("tbody")[0]||elem.appendChild(elem.ownerDocument.createElement("tbody"))):elem;}
function cloneCopyEvent(src,dest){if(dest.nodeType!==1||!jQuery.hasData(src)){return;}
var internalKey=jQuery.expando,oldData=jQuery.data(src),curData=jQuery.data(dest,oldData);if((oldData=oldData[internalKey])){var events=oldData.events;curData=curData[internalKey]=jQuery.extend({},oldData);if(events){delete curData.handle;curData.events={};for(var type in events){for(var i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type+(events[type][i].namespace?".":"")+events[type][i].namespace,events[type][i],events[type][i].data);}}}}}
function cloneFixAttributes(src,dest){var nodeName;if(dest.nodeType!==1){return;}
if(dest.clearAttributes){dest.clearAttributes();}
if(dest.mergeAttributes){dest.mergeAttributes(src);}
nodeName=dest.nodeName.toLowerCase();if(nodeName==="object"){dest.outerHTML=src.outerHTML;}else if(nodeName==="input"&&(src.type==="checkbox"||src.type==="radio")){if(src.checked){dest.defaultChecked=dest.checked=src.checked;}
if(dest.value!==src.value){dest.value=src.value;}}else if(nodeName==="option"){dest.selected=src.defaultSelected;}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}
dest.removeAttribute(jQuery.expando);}
jQuery.buildFragment=function(args,nodes,scripts){var fragment,cacheable,cacheresults,doc;if(nodes&&nodes[0]){doc=nodes[0].ownerDocument||nodes[0];}
if(!doc.createDocumentFragment){doc=document;}
if(args.length===1&&typeof args[0]==="string"&&args[0].length<512&&doc===document&&args[0].charAt(0)==="<"&&!rnocache.test(args[0])&&(jQuery.support.checkClone||!rchecked.test(args[0]))){cacheable=true;cacheresults=jQuery.fragments[args[0]];if(cacheresults&&cacheresults!==1){fragment=cacheresults;}}
if(!fragment){fragment=doc.createDocumentFragment();jQuery.clean(args,doc,fragment,scripts);}
if(cacheable){jQuery.fragments[args[0]]=cacheresults?fragment:1;}
return{fragment:fragment,cacheable:cacheable};};jQuery.fragments={};jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var ret=[],insert=jQuery(selector),parent=this.length===1&&this[0].parentNode;if(parent&&parent.nodeType===11&&parent.childNodes.length===1&&insert.length===1){insert[original](this[0]);return this;}else{for(var i=0,l=insert.length;i<l;i++){var elems=(i>0?this.clone(true):this).get();jQuery(insert[i])[original](elems);ret=ret.concat(elems);}
return this.pushStack(ret,name,insert.selector);}};});function getAll(elem){if("getElementsByTagName"in elem){return elem.getElementsByTagName("*");}else if("querySelectorAll"in elem){return elem.querySelectorAll("*");}else{return[];}}
function fixDefaultChecked(elem){if(elem.type==="checkbox"||elem.type==="radio"){elem.defaultChecked=elem.checked;}}
function findInputs(elem){if(jQuery.nodeName(elem,"input")){fixDefaultChecked(elem);}else if("getElementsByTagName"in elem){jQuery.grep(elem.getElementsByTagName("input"),fixDefaultChecked);}}
jQuery.extend({clone:function(elem,dataAndEvents,deepDataAndEvents){var clone=elem.cloneNode(true),srcElements,destElements,i;if((!jQuery.support.noCloneEvent||!jQuery.support.noCloneChecked)&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){cloneFixAttributes(elem,clone);srcElements=getAll(elem);destElements=getAll(clone);for(i=0;srcElements[i];++i){if(destElements[i]){cloneFixAttributes(srcElements[i],destElements[i]);}}}
if(dataAndEvents){cloneCopyEvent(elem,clone);if(deepDataAndEvents){srcElements=getAll(elem);destElements=getAll(clone);for(i=0;srcElements[i];++i){cloneCopyEvent(srcElements[i],destElements[i]);}}}
srcElements=destElements=null;return clone;},clean:function(elems,context,fragment,scripts){var checkScriptType;context=context||document;if(typeof context.createElement==="undefined"){context=context.ownerDocument||context[0]&&context[0].ownerDocument||document;}
var ret=[],j;for(var i=0,elem;(elem=elems[i])!=null;i++){if(typeof elem==="number"){elem+="";}
if(!elem){continue;}
if(typeof elem==="string"){if(!rhtml.test(elem)){elem=context.createTextNode(elem);}else{elem=elem.replace(rxhtmlTag,"<$1></$2>");var tag=(rtagName.exec(elem)||["",""])[1].toLowerCase(),wrap=wrapMap[tag]||wrapMap._default,depth=wrap[0],div=context.createElement("div");div.innerHTML=wrap[1]+elem+wrap[2];while(depth--){div=div.lastChild;}
if(!jQuery.support.tbody){var hasBody=rtbody.test(elem),tbody=tag==="table"&&!hasBody?div.firstChild&&div.firstChild.childNodes:wrap[1]==="<table>"&&!hasBody?div.childNodes:[];for(j=tbody.length-1;j>=0;--j){if(jQuery.nodeName(tbody[j],"tbody")&&!tbody[j].childNodes.length){tbody[j].parentNode.removeChild(tbody[j]);}}}
if(!jQuery.support.leadingWhitespace&&rleadingWhitespace.test(elem)){div.insertBefore(context.createTextNode(rleadingWhitespace.exec(elem)[0]),div.firstChild);}
elem=div.childNodes;}}
var len;if(!jQuery.support.appendChecked){if(elem[0]&&typeof(len=elem.length)==="number"){for(j=0;j<len;j++){findInputs(elem[j]);}}else{findInputs(elem);}}
if(elem.nodeType){ret.push(elem);}else{ret=jQuery.merge(ret,elem);}}
if(fragment){checkScriptType=function(elem){return!elem.type||rscriptType.test(elem.type);};for(i=0;ret[i];i++){if(scripts&&jQuery.nodeName(ret[i],"script")&&(!ret[i].type||ret[i].type.toLowerCase()==="text/javascript")){scripts.push(ret[i].parentNode?ret[i].parentNode.removeChild(ret[i]):ret[i]);}else{if(ret[i].nodeType===1){var jsTags=jQuery.grep(ret[i].getElementsByTagName("script"),checkScriptType);ret.splice.apply(ret,[i+1,0].concat(jsTags));}
fragment.appendChild(ret[i]);}}}
return ret;},cleanData:function(elems){var data,id,cache=jQuery.cache,internalKey=jQuery.expando,special=jQuery.event.special,deleteExpando=jQuery.support.deleteExpando;for(var i=0,elem;(elem=elems[i])!=null;i++){if(elem.nodeName&&jQuery.noData[elem.nodeName.toLowerCase()]){continue;}
id=elem[jQuery.expando];if(id){data=cache[id]&&cache[id][internalKey];if(data&&data.events){for(var type in data.events){if(special[type]){jQuery.event.remove(elem,type);}else{jQuery.removeEvent(elem,type,data.handle);}}
if(data.handle){data.handle.elem=null;}}
if(deleteExpando){delete elem[jQuery.expando];}else if(elem.removeAttribute){elem.removeAttribute(jQuery.expando);}
delete cache[id];}}}});function evalScript(i,elem){if(elem.src){jQuery.ajax({url:elem.src,async:false,dataType:"script"});}else{jQuery.globalEval((elem.text||elem.textContent||elem.innerHTML||"").replace(rcleanScript,"/*$0*/"));}
if(elem.parentNode){elem.parentNode.removeChild(elem);}}
var ralpha=/alpha\([^)]*\)/i,ropacity=/opacity=([^)]*)/,rupper=/([A-Z]|^ms)/g,rnumpx=/^-?\d+(?:px)?$/i,rnum=/^-?\d/,rrelNum=/^([\-+])=([\-+.\de]+)/,cssShow={position:"absolute",visibility:"hidden",display:"block"},cssWidth=["Left","Right"],cssHeight=["Top","Bottom"],curCSS,getComputedStyle,currentStyle;jQuery.fn.css=function(name,value){if(arguments.length===2&&value===undefined){return this;}
return jQuery.access(this,name,value,true,function(elem,name,value){return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);});};jQuery.extend({cssHooks:{opacity:{get:function(elem,computed){if(computed){var ret=curCSS(elem,"opacity","opacity");return ret===""?"1":ret;}else{return elem.style.opacity;}}}},cssNumber:{"fillOpacity":true,"fontWeight":true,"lineHeight":true,"opacity":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},cssProps:{"float":jQuery.support.cssFloat?"cssFloat":"styleFloat"},style:function(elem,name,value,extra){if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;}
var ret,type,origName=jQuery.camelCase(name),style=elem.style,hooks=jQuery.cssHooks[origName];name=jQuery.cssProps[origName]||origName;if(value!==undefined){type=typeof value;if(type==="string"&&(ret=rrelNum.exec(value))){value=(+(ret[1]+1)*+ret[2])+parseFloat(jQuery.css(elem,name));type="number";}
if(value==null||type==="number"&&isNaN(value)){return;}
if(type==="number"&&!jQuery.cssNumber[origName]){value+="px";}
if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value))!==undefined){try{style[name]=value;}catch(e){}}}else{if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;}
return style[name];}},css:function(elem,name,extra){var ret,hooks;name=jQuery.camelCase(name);hooks=jQuery.cssHooks[name];name=jQuery.cssProps[name]||name;if(name==="cssFloat"){name="float";}
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,true,extra))!==undefined){return ret;}else if(curCSS){return curCSS(elem,name);}},swap:function(elem,options,callback){var old={};for(var name in options){old[name]=elem.style[name];elem.style[name]=options[name];}
callback.call(elem);for(name in options){elem.style[name]=old[name];}}});jQuery.curCSS=jQuery.css;jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function(elem,computed,extra){var val;if(computed){if(elem.offsetWidth!==0){return getWH(elem,name,extra);}else{jQuery.swap(elem,cssShow,function(){val=getWH(elem,name,extra);});}
return val;}},set:function(elem,value){if(rnumpx.test(value)){value=parseFloat(value);if(value>=0){return value+"px";}}else{return value;}}};});if(!jQuery.support.opacity){jQuery.cssHooks.opacity={get:function(elem,computed){return ropacity.test((computed&&elem.currentStyle?elem.currentStyle.filter:elem.style.filter)||"")?(parseFloat(RegExp.$1)/100)+"":computed?"1":"";},set:function(elem,value){var style=elem.style,currentStyle=elem.currentStyle,opacity=jQuery.isNaN(value)?"":"alpha(opacity="+value*100+")",filter=currentStyle&&currentStyle.filter||style.filter||"";style.zoom=1;if(value>=1&&jQuery.trim(filter.replace(ralpha,""))===""){style.removeAttribute("filter");if(currentStyle&&!currentStyle.filter){return;}}
style.filter=ralpha.test(filter)?filter.replace(ralpha,opacity):filter+" "+opacity;}};}
jQuery(function(){if(!jQuery.support.reliableMarginRight){jQuery.cssHooks.marginRight={get:function(elem,computed){var ret;jQuery.swap(elem,{"display":"inline-block"},function(){if(computed){ret=curCSS(elem,"margin-right","marginRight");}else{ret=elem.style.marginRight;}});return ret;}};}});if(document.defaultView&&document.defaultView.getComputedStyle){getComputedStyle=function(elem,name){var ret,defaultView,computedStyle;name=name.replace(rupper,"-$1").toLowerCase();if(!(defaultView=elem.ownerDocument.defaultView)){return undefined;}
if((computedStyle=defaultView.getComputedStyle(elem,null))){ret=computedStyle.getPropertyValue(name);if(ret===""&&!jQuery.contains(elem.ownerDocument.documentElement,elem)){ret=jQuery.style(elem,name);}}
return ret;};}
if(document.documentElement.currentStyle){currentStyle=function(elem,name){var left,ret=elem.currentStyle&&elem.currentStyle[name],rsLeft=elem.runtimeStyle&&elem.runtimeStyle[name],style=elem.style;if(!rnumpx.test(ret)&&rnum.test(ret)){left=style.left;if(rsLeft){elem.runtimeStyle.left=elem.currentStyle.left;}
style.left=name==="fontSize"?"1em":(ret||0);ret=style.pixelLeft+"px";style.left=left;if(rsLeft){elem.runtimeStyle.left=rsLeft;}}
return ret===""?"auto":ret;};}
curCSS=getComputedStyle||currentStyle;function getWH(elem,name,extra){var val=name==="width"?elem.offsetWidth:elem.offsetHeight,which=name==="width"?cssWidth:cssHeight;if(val>0){if(extra!=="border"){jQuery.each(which,function(){if(!extra){val-=parseFloat(jQuery.css(elem,"padding"+this))||0;}
if(extra==="margin"){val+=parseFloat(jQuery.css(elem,extra+this))||0;}else{val-=parseFloat(jQuery.css(elem,"border"+this+"Width"))||0;}});}
return val+"px";}
val=curCSS(elem,name,name);if(val<0||val==null){val=elem.style[name]||0;}
val=parseFloat(val)||0;if(extra){jQuery.each(which,function(){val+=parseFloat(jQuery.css(elem,"padding"+this))||0;if(extra!=="padding"){val+=parseFloat(jQuery.css(elem,"border"+this+"Width"))||0;}
if(extra==="margin"){val+=parseFloat(jQuery.css(elem,extra+this))||0;}});}
return val+"px";}
if(jQuery.expr&&jQuery.expr.filters){jQuery.expr.filters.hidden=function(elem){var width=elem.offsetWidth,height=elem.offsetHeight;return(width===0&&height===0)||(!jQuery.support.reliableHiddenOffsets&&(elem.style.display||jQuery.css(elem,"display"))==="none");};jQuery.expr.filters.visible=function(elem){return!jQuery.expr.filters.hidden(elem);};}
var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rhash=/#.*$/,rheaders=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,rinput=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,rlocalProtocol=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,rquery=/\?/,rscript=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,rselectTextarea=/^(?:select|textarea)/i,rspacesAjax=/\s+/,rts=/([?&])_=[^&]*/,rurl=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,_load=jQuery.fn.load,prefilters={},transports={},ajaxLocation,ajaxLocParts,allTypes=["*/"]+["*"];try{ajaxLocation=location.href;}catch(e){ajaxLocation=document.createElement("a");ajaxLocation.href="";ajaxLocation=ajaxLocation.href;}
ajaxLocParts=rurl.exec(ajaxLocation.toLowerCase())||[];function addToPrefiltersOrTransports(structure){return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}
if(jQuery.isFunction(func)){var dataTypes=dataTypeExpression.toLowerCase().split(rspacesAjax),i=0,length=dataTypes.length,dataType,list,placeBefore;for(;i<length;i++){dataType=dataTypes[i];placeBefore=/^\+/.test(dataType);if(placeBefore){dataType=dataType.substr(1)||"*";}
list=structure[dataType]=structure[dataType]||[];list[placeBefore?"unshift":"push"](func);}}};}
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR,dataType,inspected){dataType=dataType||options.dataTypes[0];inspected=inspected||{};inspected[dataType]=true;var list=structure[dataType],i=0,length=list?list.length:0,executeOnly=(structure===prefilters),selection;for(;i<length&&(executeOnly||!selection);i++){selection=list[i](options,originalOptions,jqXHR);if(typeof selection==="string"){if(!executeOnly||inspected[selection]){selection=undefined;}else{options.dataTypes.unshift(selection);selection=inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR,selection,inspected);}}}
if((executeOnly||!selection)&&!inspected["*"]){selection=inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR,"*",inspected);}
return selection;}
function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:(deep||(deep={})))[key]=src[key];}}
if(deep){jQuery.extend(true,target,deep);}}
jQuery.fn.extend({load:function(url,params,callback){if(typeof url!=="string"&&_load){return _load.apply(this,arguments);}else if(!this.length){return this;}
var off=url.indexOf(" ");if(off>=0){var selector=url.slice(off,url.length);url=url.slice(0,off);}
var type="GET";if(params){if(jQuery.isFunction(params)){callback=params;params=undefined;}else if(typeof params==="object"){params=jQuery.param(params,jQuery.ajaxSettings.traditional);type="POST";}}
var self=this;jQuery.ajax({url:url,type:type,dataType:"html",data:params,complete:function(jqXHR,status,responseText){responseText=jqXHR.responseText;if(jqXHR.isResolved()){jqXHR.done(function(r){responseText=r;});self.html(selector?jQuery("<div>").append(responseText.replace(rscript,"")).find(selector):responseText);}
if(callback){self.each(callback,[responseText,status,jqXHR]);}}});return this;},serialize:function(){return jQuery.param(this.serializeArray());},serializeArray:function(){return this.map(function(){return this.elements?jQuery.makeArray(this.elements):this;}).filter(function(){return this.name&&!this.disabled&&(this.checked||rselectTextarea.test(this.nodeName)||rinput.test(this.type));}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val,i){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}):{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});jQuery.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(i,o){jQuery.fn[o]=function(f){return this.bind(o,f);};});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined;}
return jQuery.ajax({type:method,url:url,data:data,success:callback,dataType:type});};});jQuery.extend({getScript:function(url,callback){return jQuery.get(url,undefined,callback,"script");},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json");},ajaxSetup:function(target,settings){if(settings){ajaxExtend(target,jQuery.ajaxSettings);}else{settings=target;target=jQuery.ajaxSettings;}
ajaxExtend(target,settings);return target;},ajaxSettings:{url:ajaxLocation,isLocal:rlocalProtocol.test(ajaxLocParts[1]),global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":allTypes},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":window.String,"text html":true,"text json":jQuery.parseJSON,"text xml":jQuery.parseXML},flatOptions:{context:true,url:true}},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),ajax:function(url,options){if(typeof url==="object"){options=url;url=undefined;}
options=options||{};var
s=jQuery.ajaxSetup({},options),callbackContext=s.context||s,globalEventContext=callbackContext!==s&&(callbackContext.nodeType||callbackContext instanceof jQuery)?jQuery(callbackContext):jQuery.event,deferred=jQuery.Deferred(),completeDeferred=jQuery._Deferred(),statusCode=s.statusCode||{},ifModifiedKey,requestHeaders={},requestHeadersNames={},responseHeadersString,responseHeaders,transport,timeoutTimer,parts,state=0,fireGlobals,i,jqXHR={readyState:0,setRequestHeader:function(name,value){if(!state){var lname=name.toLowerCase();name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;requestHeaders[name]=value;}
return this;},getAllResponseHeaders:function(){return state===2?responseHeadersString:null;},getResponseHeader:function(key){var match;if(state===2){if(!responseHeaders){responseHeaders={};while((match=rheaders.exec(responseHeadersString))){responseHeaders[match[1].toLowerCase()]=match[2];}}
match=responseHeaders[key.toLowerCase()];}
return match===undefined?null:match;},overrideMimeType:function(type){if(!state){s.mimeType=type;}
return this;},abort:function(statusText){statusText=statusText||"abort";if(transport){transport.abort(statusText);}
done(0,statusText);return this;}};function done(status,nativeStatusText,responses,headers){if(state===2){return;}
state=2;if(timeoutTimer){clearTimeout(timeoutTimer);}
transport=undefined;responseHeadersString=headers||"";jqXHR.readyState=status>0?4:0;var isSuccess,success,error,statusText=nativeStatusText,response=responses?ajaxHandleResponses(s,jqXHR,responses):undefined,lastModified,etag;if(status>=200&&status<300||status===304){if(s.ifModified){if((lastModified=jqXHR.getResponseHeader("Last-Modified"))){jQuery.lastModified[ifModifiedKey]=lastModified;}
if((etag=jqXHR.getResponseHeader("Etag"))){jQuery.etag[ifModifiedKey]=etag;}}
if(status===304){statusText="notmodified";isSuccess=true;}else{try{success=ajaxConvert(s,response);statusText="success";isSuccess=true;}catch(e){statusText="parsererror";error=e;}}}else{error=statusText;if(!statusText||status){statusText="error";if(status<0){status=0;}}}
jqXHR.status=status;jqXHR.statusText=""+(nativeStatusText||statusText);if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);}
jqXHR.statusCode(statusCode);statusCode=undefined;if(fireGlobals){globalEventContext.trigger("ajax"+(isSuccess?"Success":"Error"),[jqXHR,s,isSuccess?success:error]);}
completeDeferred.resolveWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);if(!(--jQuery.active)){jQuery.event.trigger("ajaxStop");}}}
deferred.promise(jqXHR);jqXHR.success=jqXHR.done;jqXHR.error=jqXHR.fail;jqXHR.complete=completeDeferred.done;jqXHR.statusCode=function(map){if(map){var tmp;if(state<2){for(tmp in map){statusCode[tmp]=[statusCode[tmp],map[tmp]];}}else{tmp=map[jqXHR.status];jqXHR.then(tmp,tmp);}}
return this;};s.url=((url||s.url)+"").replace(rhash,"").replace(rprotocol,ajaxLocParts[1]+"//");s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().split(rspacesAjax);if(s.crossDomain==null){parts=rurl.exec(s.url.toLowerCase());s.crossDomain=!!(parts&&(parts[1]!=ajaxLocParts[1]||parts[2]!=ajaxLocParts[2]||(parts[3]||(parts[1]==="http:"?80:443))!=(ajaxLocParts[3]||(ajaxLocParts[1]==="http:"?80:443))));}
if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);if(state===2){return false;}
fireGlobals=s.global;s.type=s.type.toUpperCase();s.hasContent=!rnoContent.test(s.type);if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");}
if(!s.hasContent){if(s.data){s.url+=(rquery.test(s.url)?"&":"?")+s.data;delete s.data;}
ifModifiedKey=s.url;if(s.cache===false){var ts=jQuery.now(),ret=s.url.replace(rts,"$1_="+ts);s.url=ret+((ret===s.url)?(rquery.test(s.url)?"&":"?")+"_="+ts:"");}}
if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);}
if(s.ifModified){ifModifiedKey=ifModifiedKey||s.url;if(jQuery.lastModified[ifModifiedKey]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[ifModifiedKey]);}
if(jQuery.etag[ifModifiedKey]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[ifModifiedKey]);}}
jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);}
if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){jqXHR.abort();return false;}
for(i in{success:1,error:1,complete:1}){jqXHR[i](s[i]);}
transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1;if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);}
if(s.async&&s.timeout>0){timeoutTimer=setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}
try{state=1;transport.send(requestHeaders,done);}catch(e){if(state<2){done(-1,e);}else{jQuery.error(e);}}}
return jqXHR;},param:function(a,traditional){var s=[],add=function(key,value){value=jQuery.isFunction(value)?value():value;s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value);};if(traditional===undefined){traditional=jQuery.ajaxSettings.traditional;}
if(jQuery.isArray(a)||(a.jquery&&!jQuery.isPlainObject(a))){jQuery.each(a,function(){add(this.name,this.value);});}else{for(var prefix in a){buildParams(prefix,a[prefix],traditional,add);}}
return s.join("&").replace(r20,"+");}});function buildParams(prefix,obj,traditional,add){if(jQuery.isArray(obj)){jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){add(prefix,v);}else{buildParams(prefix+"["+(typeof v==="object"||jQuery.isArray(v)?i:"")+"]",v,traditional,add);}});}else if(!traditional&&obj!=null&&typeof obj==="object"){for(var name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else{add(prefix,obj);}}
jQuery.extend({active:0,lastModified:{},etag:{}});function ajaxHandleResponses(s,jqXHR,responses){var contents=s.contents,dataTypes=s.dataTypes,responseFields=s.responseFields,ct,type,finalDataType,firstDataType;for(type in responseFields){if(type in responses){jqXHR[responseFields[type]]=responses[type];}}
while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("content-type");}}
if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}}
if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}
if(!firstDataType){firstDataType=type;}}
finalDataType=finalDataType||firstDataType;}
if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}
return responses[finalDataType];}}
function ajaxConvert(s,response){if(s.dataFilter){response=s.dataFilter(response,s.dataType);}
var dataTypes=s.dataTypes,converters={},i,key,length=dataTypes.length,tmp,current=dataTypes[0],prev,conversion,conv,conv1,conv2;for(i=1;i<length;i++){if(i===1){for(key in s.converters){if(typeof key==="string"){converters[key.toLowerCase()]=s.converters[key];}}}
prev=current;current=dataTypes[i];if(current==="*"){current=prev;}else if(prev!=="*"&&prev!==current){conversion=prev+" "+current;conv=converters[conversion]||converters["* "+current];if(!conv){conv2=undefined;for(conv1 in converters){tmp=conv1.split(" ");if(tmp[0]===prev||tmp[0]==="*"){conv2=converters[tmp[1]+" "+current];if(conv2){conv1=converters[conv1];if(conv1===true){conv=conv2;}else if(conv2===true){conv=conv1;}
break;}}}}
if(!(conv||conv2)){jQuery.error("No conversion from "+conversion.replace(" "," to "));}
if(conv!==true){response=conv?conv(response):conv2(conv1(response));}}}
return response;}
var jsc=jQuery.now(),jsre=/(\=)\?(&|$)|\?\?/i;jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return jQuery.expando+"_"+(jsc++);}});jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var inspectData=s.contentType==="application/x-www-form-urlencoded"&&(typeof s.data==="string");if(s.dataTypes[0]==="jsonp"||s.jsonp!==false&&(jsre.test(s.url)||inspectData&&jsre.test(s.data))){var responseContainer,jsonpCallback=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback,previous=window[jsonpCallback],url=s.url,data=s.data,replace="$1"+jsonpCallback+"$2";if(s.jsonp!==false){url=url.replace(jsre,replace);if(s.url===url){if(inspectData){data=data.replace(jsre,replace);}
if(s.data===data){url+=(/\?/.test(url)?"&":"?")+s.jsonp+"="+jsonpCallback;}}}
s.url=url;s.data=data;window[jsonpCallback]=function(response){responseContainer=[response];};jqXHR.always(function(){window[jsonpCallback]=previous;if(responseContainer&&jQuery.isFunction(previous)){window[jsonpCallback](responseContainer[0]);}});s.converters["script json"]=function(){if(!responseContainer){jQuery.error(jsonpCallback+" was not called");}
return responseContainer[0];};s.dataTypes[0]="json";return"script";}});jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(text){jQuery.globalEval(text);return text;}}});jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}
if(s.crossDomain){s.type="GET";s.global=false;}});jQuery.ajaxTransport("script",function(s){if(s.crossDomain){var script,head=document.head||document.getElementsByTagName("head")[0]||document.documentElement;return{send:function(_,callback){script=document.createElement("script");script.async="async";if(s.scriptCharset){script.charset=s.scriptCharset;}
script.src=s.url;script.onload=script.onreadystatechange=function(_,isAbort){if(isAbort||!script.readyState||/loaded|complete/.test(script.readyState)){script.onload=script.onreadystatechange=null;if(head&&script.parentNode){head.removeChild(script);}
script=undefined;if(!isAbort){callback(200,"success");}}};head.insertBefore(script,head.firstChild);},abort:function(){if(script){script.onload(0,1);}}};}});var
xhrOnUnloadAbort=window.ActiveXObject?function(){for(var key in xhrCallbacks){xhrCallbacks[key](0,1);}}:false,xhrId=0,xhrCallbacks;function createStandardXHR(){try{return new window.XMLHttpRequest();}catch(e){}}
function createActiveXHR(){try{return new window.ActiveXObject("Microsoft.XMLHTTP");}catch(e){}}
jQuery.ajaxSettings.xhr=window.ActiveXObject?function(){return!this.isLocal&&createStandardXHR()||createActiveXHR();}:createStandardXHR;(function(xhr){jQuery.extend(jQuery.support,{ajax:!!xhr,cors:!!xhr&&("withCredentials"in xhr)});})(jQuery.ajaxSettings.xhr());if(jQuery.support.ajax){jQuery.ajaxTransport(function(s){if(!s.crossDomain||jQuery.support.cors){var callback;return{send:function(headers,complete){var xhr=s.xhr(),handle,i;if(s.username){xhr.open(s.type,s.url,s.async,s.username,s.password);}else{xhr.open(s.type,s.url,s.async);}
if(s.xhrFields){for(i in s.xhrFields){xhr[i]=s.xhrFields[i];}}
if(s.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(s.mimeType);}
if(!s.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";}
try{for(i in headers){xhr.setRequestHeader(i,headers[i]);}}catch(_){}
xhr.send((s.hasContent&&s.data)||null);callback=function(_,isAbort){var status,statusText,responseHeaders,responses,xml;try{if(callback&&(isAbort||xhr.readyState===4)){callback=undefined;if(handle){xhr.onreadystatechange=jQuery.noop;if(xhrOnUnloadAbort){delete xhrCallbacks[handle];}}
if(isAbort){if(xhr.readyState!==4){xhr.abort();}}else{status=xhr.status;responseHeaders=xhr.getAllResponseHeaders();responses={};xml=xhr.responseXML;if(xml&&xml.documentElement){responses.xml=xml;}
responses.text=xhr.responseText;try{statusText=xhr.statusText;}catch(e){statusText="";}
if(!status&&s.isLocal&&!s.crossDomain){status=responses.text?200:404;}else if(status===1223){status=204;}}}}catch(firefoxAccessException){if(!isAbort){complete(-1,firefoxAccessException);}}
if(responses){complete(status,statusText,responses,responseHeaders);}};if(!s.async||xhr.readyState===4){callback();}else{handle=++xhrId;if(xhrOnUnloadAbort){if(!xhrCallbacks){xhrCallbacks={};jQuery(window).unload(xhrOnUnloadAbort);}
xhrCallbacks[handle]=callback;}
xhr.onreadystatechange=callback;}},abort:function(){if(callback){callback(0,1);}}};}});}
var elemdisplay={},iframe,iframeDoc,rfxtypes=/^(?:toggle|show|hide)$/,rfxnum=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,timerId,fxAttrs=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],fxNow;jQuery.fn.extend({show:function(speed,easing,callback){var elem,display;if(speed||speed===0){return this.animate(genFx("show",3),speed,easing,callback);}else{for(var i=0,j=this.length;i<j;i++){elem=this[i];if(elem.style){display=elem.style.display;if(!jQuery._data(elem,"olddisplay")&&display==="none"){display=elem.style.display="";}
if(display===""&&jQuery.css(elem,"display")==="none"){jQuery._data(elem,"olddisplay",defaultDisplay(elem.nodeName));}}}
for(i=0;i<j;i++){elem=this[i];if(elem.style){display=elem.style.display;if(display===""||display==="none"){elem.style.display=jQuery._data(elem,"olddisplay")||"";}}}
return this;}},hide:function(speed,easing,callback){if(speed||speed===0){return this.animate(genFx("hide",3),speed,easing,callback);}else{for(var i=0,j=this.length;i<j;i++){if(this[i].style){var display=jQuery.css(this[i],"display");if(display!=="none"&&!jQuery._data(this[i],"olddisplay")){jQuery._data(this[i],"olddisplay",display);}}}
for(i=0;i<j;i++){if(this[i].style){this[i].style.display="none";}}
return this;}},_toggle:jQuery.fn.toggle,toggle:function(fn,fn2,callback){var bool=typeof fn==="boolean";if(jQuery.isFunction(fn)&&jQuery.isFunction(fn2)){this._toggle.apply(this,arguments);}else if(fn==null||bool){this.each(function(){var state=bool?fn:jQuery(this).is(":hidden");jQuery(this)[state?"show":"hide"]();});}else{this.animate(genFx("toggle",3),fn,fn2,callback);}
return this;},fadeTo:function(speed,to,easing,callback){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:to},speed,easing,callback);},animate:function(prop,speed,easing,callback){var optall=jQuery.speed(speed,easing,callback);if(jQuery.isEmptyObject(prop)){return this.each(optall.complete,[false]);}
prop=jQuery.extend({},prop);return this[optall.queue===false?"each":"queue"](function(){if(optall.queue===false){jQuery._mark(this);}
var opt=jQuery.extend({},optall),isElement=this.nodeType===1,hidden=isElement&&jQuery(this).is(":hidden"),name,val,p,display,e,parts,start,end,unit;opt.animatedProperties={};for(p in prop){name=jQuery.camelCase(p);if(p!==name){prop[name]=prop[p];delete prop[p];}
val=prop[name];if(jQuery.isArray(val)){opt.animatedProperties[name]=val[1];val=prop[name]=val[0];}else{opt.animatedProperties[name]=opt.specialEasing&&opt.specialEasing[name]||opt.easing||'swing';}
if(val==="hide"&&hidden||val==="show"&&!hidden){return opt.complete.call(this);}
if(isElement&&(name==="height"||name==="width")){opt.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(jQuery.css(this,"display")==="inline"&&jQuery.css(this,"float")==="none"){if(!jQuery.support.inlineBlockNeedsLayout){this.style.display="inline-block";}else{display=defaultDisplay(this.nodeName);if(display==="inline"){this.style.display="inline-block";}else{this.style.display="inline";this.style.zoom=1;}}}}}
if(opt.overflow!=null){this.style.overflow="hidden";}
for(p in prop){e=new jQuery.fx(this,opt,p);val=prop[p];if(rfxtypes.test(val)){e[val==="toggle"?hidden?"show":"hide":val]();}else{parts=rfxnum.exec(val);start=e.cur();if(parts){end=parseFloat(parts[2]);unit=parts[3]||(jQuery.cssNumber[p]?"":"px");if(unit!=="px"){jQuery.style(this,p,(end||1)+unit);start=((end||1)/e.cur())*start;jQuery.style(this,p,start+unit);}
if(parts[1]){end=((parts[1]==="-="?-1:1)*end)+start;}
e.custom(start,end,unit);}else{e.custom(start,val,"");}}}
return true;});},stop:function(clearQueue,gotoEnd){if(clearQueue){this.queue([]);}
this.each(function(){var timers=jQuery.timers,i=timers.length;if(!gotoEnd){jQuery._unmark(true,this);}
while(i--){if(timers[i].elem===this){if(gotoEnd){timers[i](true);}
timers.splice(i,1);}}});if(!gotoEnd){this.dequeue();}
return this;}});function createFxNow(){setTimeout(clearFxNow,0);return(fxNow=jQuery.now());}
function clearFxNow(){fxNow=undefined;}
function genFx(type,num){var obj={};jQuery.each(fxAttrs.concat.apply([],fxAttrs.slice(0,num)),function(){obj[this]=type;});return obj;}
jQuery.each({slideDown:genFx("show",1),slideUp:genFx("hide",1),slideToggle:genFx("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.extend({speed:function(speed,easing,fn){var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default;opt.old=opt.complete;opt.complete=function(noUnmark){if(jQuery.isFunction(opt.old)){opt.old.call(this);}
if(opt.queue!==false){jQuery.dequeue(this);}else if(noUnmark!==false){jQuery._unmark(this);}};return opt;},easing:{linear:function(p,n,firstNum,diff){return firstNum+diff*p;},swing:function(p,n,firstNum,diff){return((-Math.cos(p*Math.PI)/2)+0.5)*diff+firstNum;}},timers:[],fx:function(elem,options,prop){this.options=options;this.elem=elem;this.prop=prop;options.orig=options.orig||{};}});jQuery.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this);}
(jQuery.fx.step[this.prop]||jQuery.fx.step._default)(this);},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop];}
var parsed,r=jQuery.css(this.elem,this.prop);return isNaN(parsed=parseFloat(r))?!r||r==="auto"?0:r:parsed;},custom:function(from,to,unit){var self=this,fx=jQuery.fx;this.startTime=fxNow||createFxNow();this.start=from;this.end=to;this.unit=unit||this.unit||(jQuery.cssNumber[this.prop]?"":"px");this.now=this.start;this.pos=this.state=0;function t(gotoEnd){return self.step(gotoEnd);}
t.elem=this.elem;if(t()&&jQuery.timers.push(t)&&!timerId){timerId=setInterval(fx.tick,fx.interval);}},show:function(){this.options.orig[this.prop]=jQuery.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());jQuery(this.elem).show();},hide:function(){this.options.orig[this.prop]=jQuery.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0);},step:function(gotoEnd){var t=fxNow||createFxNow(),done=true,elem=this.elem,options=this.options,i,n;if(gotoEnd||t>=options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();options.animatedProperties[this.prop]=true;for(i in options.animatedProperties){if(options.animatedProperties[i]!==true){done=false;}}
if(done){if(options.overflow!=null&&!jQuery.support.shrinkWrapBlocks){jQuery.each(["","X","Y"],function(index,value){elem.style["overflow"+value]=options.overflow[index];});}
if(options.hide){jQuery(elem).hide();}
if(options.hide||options.show){for(var p in options.animatedProperties){jQuery.style(elem,p,options.orig[p]);}}
options.complete.call(elem);}
return false;}else{if(options.duration==Infinity){this.now=t;}else{n=t-this.startTime;this.state=n/options.duration;this.pos=jQuery.easing[options.animatedProperties[this.prop]](this.state,n,0,1,options.duration);this.now=this.start+((this.end-this.start)*this.pos);}
this.update();}
return true;}};jQuery.extend(jQuery.fx,{tick:function(){for(var timers=jQuery.timers,i=0;i<timers.length;++i){if(!timers[i]()){timers.splice(i--,1);}}
if(!timers.length){jQuery.fx.stop();}},interval:13,stop:function(){clearInterval(timerId);timerId=null;},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(fx){jQuery.style(fx.elem,"opacity",fx.now);},_default:function(fx){if(fx.elem.style&&fx.elem.style[fx.prop]!=null){fx.elem.style[fx.prop]=(fx.prop==="width"||fx.prop==="height"?Math.max(0,fx.now):fx.now)+fx.unit;}else{fx.elem[fx.prop]=fx.now;}}}});if(jQuery.expr&&jQuery.expr.filters){jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};}
function defaultDisplay(nodeName){if(!elemdisplay[nodeName]){var body=document.body,elem=jQuery("<"+nodeName+">").appendTo(body),display=elem.css("display");elem.remove();if(display==="none"||display===""){if(!iframe){iframe=document.createElement("iframe");iframe.frameBorder=iframe.width=iframe.height=0;}
body.appendChild(iframe);if(!iframeDoc||!iframe.createElement){iframeDoc=(iframe.contentWindow||iframe.contentDocument).document;iframeDoc.write((document.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>");iframeDoc.close();}
elem=iframeDoc.createElement(nodeName);iframeDoc.body.appendChild(elem);display=jQuery.css(elem,"display");body.removeChild(iframe);}
elemdisplay[nodeName]=display;}
return elemdisplay[nodeName];}
var rtable=/^t(?:able|d|h)$/i,rroot=/^(?:body|html)$/i;if("getBoundingClientRect"in document.documentElement){jQuery.fn.offset=function(options){var elem=this[0],box;if(options){return this.each(function(i){jQuery.offset.setOffset(this,options,i);});}
if(!elem||!elem.ownerDocument){return null;}
if(elem===elem.ownerDocument.body){return jQuery.offset.bodyOffset(elem);}
try{box=elem.getBoundingClientRect();}catch(e){}
var doc=elem.ownerDocument,docElem=doc.documentElement;if(!box||!jQuery.contains(docElem,elem)){return box?{top:box.top,left:box.left}:{top:0,left:0};}
var body=doc.body,win=getWindow(doc),clientTop=docElem.clientTop||body.clientTop||0,clientLeft=docElem.clientLeft||body.clientLeft||0,scrollTop=win.pageYOffset||jQuery.support.boxModel&&docElem.scrollTop||body.scrollTop,scrollLeft=win.pageXOffset||jQuery.support.boxModel&&docElem.scrollLeft||body.scrollLeft,top=box.top+scrollTop-clientTop,left=box.left+scrollLeft-clientLeft;return{top:top,left:left};};}else{jQuery.fn.offset=function(options){var elem=this[0];if(options){return this.each(function(i){jQuery.offset.setOffset(this,options,i);});}
if(!elem||!elem.ownerDocument){return null;}
if(elem===elem.ownerDocument.body){return jQuery.offset.bodyOffset(elem);}
jQuery.offset.initialize();var computedStyle,offsetParent=elem.offsetParent,prevOffsetParent=elem,doc=elem.ownerDocument,docElem=doc.documentElement,body=doc.body,defaultView=doc.defaultView,prevComputedStyle=defaultView?defaultView.getComputedStyle(elem,null):elem.currentStyle,top=elem.offsetTop,left=elem.offsetLeft;while((elem=elem.parentNode)&&elem!==body&&elem!==docElem){if(jQuery.offset.supportsFixedPosition&&prevComputedStyle.position==="fixed"){break;}
computedStyle=defaultView?defaultView.getComputedStyle(elem,null):elem.currentStyle;top-=elem.scrollTop;left-=elem.scrollLeft;if(elem===offsetParent){top+=elem.offsetTop;left+=elem.offsetLeft;if(jQuery.offset.doesNotAddBorder&&!(jQuery.offset.doesAddBorderForTableAndCells&&rtable.test(elem.nodeName))){top+=parseFloat(computedStyle.borderTopWidth)||0;left+=parseFloat(computedStyle.borderLeftWidth)||0;}
prevOffsetParent=offsetParent;offsetParent=elem.offsetParent;}
if(jQuery.offset.subtractsBorderForOverflowNotVisible&&computedStyle.overflow!=="visible"){top+=parseFloat(computedStyle.borderTopWidth)||0;left+=parseFloat(computedStyle.borderLeftWidth)||0;}
prevComputedStyle=computedStyle;}
if(prevComputedStyle.position==="relative"||prevComputedStyle.position==="static"){top+=body.offsetTop;left+=body.offsetLeft;}
if(jQuery.offset.supportsFixedPosition&&prevComputedStyle.position==="fixed"){top+=Math.max(docElem.scrollTop,body.scrollTop);left+=Math.max(docElem.scrollLeft,body.scrollLeft);}
return{top:top,left:left};};}
jQuery.offset={initialize:function(){var body=document.body,container=document.createElement("div"),innerDiv,checkDiv,table,td,bodyMarginTop=parseFloat(jQuery.css(body,"marginTop"))||0,html="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";jQuery.extend(container.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});container.innerHTML=html;body.insertBefore(container,body.firstChild);innerDiv=container.firstChild;checkDiv=innerDiv.firstChild;td=innerDiv.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(checkDiv.offsetTop!==5);this.doesAddBorderForTableAndCells=(td.offsetTop===5);checkDiv.style.position="fixed";checkDiv.style.top="20px";this.supportsFixedPosition=(checkDiv.offsetTop===20||checkDiv.offsetTop===15);checkDiv.style.position=checkDiv.style.top="";innerDiv.style.overflow="hidden";innerDiv.style.position="relative";this.subtractsBorderForOverflowNotVisible=(checkDiv.offsetTop===-5);this.doesNotIncludeMarginInBodyOffset=(body.offsetTop!==bodyMarginTop);body.removeChild(container);jQuery.offset.initialize=jQuery.noop;},bodyOffset:function(body){var top=body.offsetTop,left=body.offsetLeft;jQuery.offset.initialize();if(jQuery.offset.doesNotIncludeMarginInBodyOffset){top+=parseFloat(jQuery.css(body,"marginTop"))||0;left+=parseFloat(jQuery.css(body,"marginLeft"))||0;}
return{top:top,left:left};},setOffset:function(elem,options,i){var position=jQuery.css(elem,"position");if(position==="static"){elem.style.position="relative";}
var curElem=jQuery(elem),curOffset=curElem.offset(),curCSSTop=jQuery.css(elem,"top"),curCSSLeft=jQuery.css(elem,"left"),calculatePosition=(position==="absolute"||position==="fixed")&&jQuery.inArray("auto",[curCSSTop,curCSSLeft])>-1,props={},curPosition={},curTop,curLeft;if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}
if(jQuery.isFunction(options)){options=options.call(elem,i,curOffset);}
if(options.top!=null){props.top=(options.top-curOffset.top)+curTop;}
if(options.left!=null){props.left=(options.left-curOffset.left)+curLeft;}
if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({position:function(){if(!this[0]){return null;}
var elem=this[0],offsetParent=this.offsetParent(),offset=this.offset(),parentOffset=rroot.test(offsetParent[0].nodeName)?{top:0,left:0}:offsetParent.offset();offset.top-=parseFloat(jQuery.css(elem,"marginTop"))||0;offset.left-=parseFloat(jQuery.css(elem,"marginLeft"))||0;parentOffset.top+=parseFloat(jQuery.css(offsetParent[0],"borderTopWidth"))||0;parentOffset.left+=parseFloat(jQuery.css(offsetParent[0],"borderLeftWidth"))||0;return{top:offset.top-parentOffset.top,left:offset.left-parentOffset.left};},offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent||document.body;while(offsetParent&&(!rroot.test(offsetParent.nodeName)&&jQuery.css(offsetParent,"position")==="static")){offsetParent=offsetParent.offsetParent;}
return offsetParent;});}});jQuery.each(["Left","Top"],function(i,name){var method="scroll"+name;jQuery.fn[method]=function(val){var elem,win;if(val===undefined){elem=this[0];if(!elem){return null;}
win=getWindow(elem);return win?("pageXOffset"in win)?win[i?"pageYOffset":"pageXOffset"]:jQuery.support.boxModel&&win.document.documentElement[method]||win.document.body[method]:elem[method];}
return this.each(function(){win=getWindow(this);if(win){win.scrollTo(!i?val:jQuery(win).scrollLeft(),i?val:jQuery(win).scrollTop());}else{this[method]=val;}});};});function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9?elem.defaultView||elem.parentWindow:false;}
jQuery.each(["Height","Width"],function(i,name){var type=name.toLowerCase();jQuery.fn["inner"+name]=function(){var elem=this[0];return elem&&elem.style?parseFloat(jQuery.css(elem,type,"padding")):null;};jQuery.fn["outer"+name]=function(margin){var elem=this[0];return elem&&elem.style?parseFloat(jQuery.css(elem,type,margin?"margin":"border")):null;};jQuery.fn[type]=function(size){var elem=this[0];if(!elem){return size==null?null:this;}
if(jQuery.isFunction(size)){return this.each(function(i){var self=jQuery(this);self[type](size.call(this,i,self[type]()));});}
if(jQuery.isWindow(elem)){var docElemProp=elem.document.documentElement["client"+name],body=elem.document.body;return elem.document.compatMode==="CSS1Compat"&&docElemProp||body&&body["client"+name]||docElemProp;}else if(elem.nodeType===9){return Math.max(elem.documentElement["client"+name],elem.body["scroll"+name],elem.documentElement["scroll"+name],elem.body["offset"+name],elem.documentElement["offset"+name]);}else if(size===undefined){var orig=jQuery.css(elem,type),ret=parseFloat(orig);return jQuery.isNaN(ret)?orig:ret;}else{return this.css(type,typeof size==="string"?size:size+"px");}};});window.jQuery=window.$=jQuery;})(window);;(function(){var root=this;var previousBackbone=root.Backbone;var Backbone;if(typeof exports!=='undefined'){Backbone=exports;}else{Backbone=root.Backbone={};}
Backbone.VERSION='0.5.3';var _=root._;if(!_&&(typeof require!=='undefined'))_=require('underscore')._;var $=root.jQuery||root.Zepto;Backbone.noConflict=function(){root.Backbone=previousBackbone;return this;};Backbone.emulateHTTP=false;Backbone.emulateJSON=false;Backbone.Events={bind:function(ev,callback,context){var calls=this._callbacks||(this._callbacks={});var list=calls[ev]||(calls[ev]=[]);list.push([callback,context]);return this;},unbind:function(ev,callback){var calls;if(!ev){this._callbacks={};}else if(calls=this._callbacks){if(!callback){calls[ev]=[];}else{var list=calls[ev];if(!list)return this;for(var i=0,l=list.length;i<l;i++){if(list[i]&&callback===list[i][0]){list[i]=null;break;}}}}
return this;},trigger:function(eventName){var list,calls,ev,callback,args;var both=2;if(!(calls=this._callbacks))return this;while(both--){ev=both?eventName:'all';if(list=calls[ev]){for(var i=0,l=list.length;i<l;i++){if(!(callback=list[i])){list.splice(i,1);i--;l--;}else{args=both?Array.prototype.slice.call(arguments,1):arguments;callback[0].apply(callback[1]||this,args);}}}}
return this;}};Backbone.Model=function(attributes,options){var defaults;attributes||(attributes={});if(defaults=this.defaults){if(_.isFunction(defaults))defaults=defaults.call(this);attributes=_.extend({},defaults,attributes);}
this.attributes={};this._escapedAttributes={};this.cid=_.uniqueId('c');this.set(attributes,{silent:true});this._changed=false;this._previousAttributes=_.clone(this.attributes);if(options&&options.collection)this.collection=options.collection;this.initialize(attributes,options);};_.extend(Backbone.Model.prototype,Backbone.Events,{_previousAttributes:null,_changed:false,idAttribute:'id',initialize:function(){},toJSON:function(){return _.clone(this.attributes);},get:function(attr){return this.attributes[attr];},escape:function(attr){var html;if(html=this._escapedAttributes[attr])return html;var val=this.attributes[attr];return this._escapedAttributes[attr]=escapeHTML(val==null?'':''+val);},has:function(attr){return this.attributes[attr]!=null;},set:function(attrs,options){options||(options={});if(!attrs)return this;if(attrs.attributes)attrs=attrs.attributes;var now=this.attributes,escaped=this._escapedAttributes;if(!options.silent&&this.validate&&!this._performValidation(attrs,options))return false;if(this.idAttribute in attrs)this.id=attrs[this.idAttribute];var alreadyChanging=this._changing;this._changing=true;for(var attr in attrs){var val=attrs[attr];if(!_.isEqual(now[attr],val)){now[attr]=val;delete escaped[attr];this._changed=true;if(!options.silent)this.trigger('change:'+attr,this,val,options);}}
if(!alreadyChanging&&!options.silent&&this._changed)this.change(options);this._changing=false;return this;},unset:function(attr,options){if(!(attr in this.attributes))return this;options||(options={});var value=this.attributes[attr];var validObj={};validObj[attr]=void 0;if(!options.silent&&this.validate&&!this._performValidation(validObj,options))return false;delete this.attributes[attr];delete this._escapedAttributes[attr];if(attr==this.idAttribute)delete this.id;this._changed=true;if(!options.silent){this.trigger('change:'+attr,this,void 0,options);this.change(options);}
return this;},clear:function(options){options||(options={});var attr;var old=this.attributes;var validObj={};for(attr in old)validObj[attr]=void 0;if(!options.silent&&this.validate&&!this._performValidation(validObj,options))return false;this.attributes={};this._escapedAttributes={};this._changed=true;if(!options.silent){for(attr in old){this.trigger('change:'+attr,this,void 0,options);}
this.change(options);}
return this;},fetch:function(options){options||(options={});var model=this;var success=options.success;options.success=function(resp,status,xhr){if(!model.set(model.parse(resp,xhr),options))return false;if(success)success(model,resp);};options.error=wrapError(options.error,model,options);return(this.sync||Backbone.sync).call(this,'read',this,options);},save:function(attrs,options){options||(options={});if(attrs&&!this.set(attrs,options))return false;var model=this;var success=options.success;options.success=function(resp,status,xhr){if(!model.set(model.parse(resp,xhr),options))return false;if(success)success(model,resp,xhr);};options.error=wrapError(options.error,model,options);var method=this.isNew()?'create':'update';return(this.sync||Backbone.sync).call(this,method,this,options);},destroy:function(options){options||(options={});if(this.isNew())return this.trigger('destroy',this,this.collection,options);var model=this;var success=options.success;options.success=function(resp){model.trigger('destroy',model,model.collection,options);if(success)success(model,resp);};options.error=wrapError(options.error,model,options);return(this.sync||Backbone.sync).call(this,'delete',this,options);},url:function(){var base=getUrl(this.collection)||this.urlRoot||urlError();if(this.isNew())return base;return base+(base.charAt(base.length-1)=='/'?'':'/')+encodeURIComponent(this.id);},parse:function(resp,xhr){return resp;},clone:function(){return new this.constructor(this);},isNew:function(){return this.id==null;},change:function(options){this.trigger('change',this,options);this._previousAttributes=_.clone(this.attributes);this._changed=false;},hasChanged:function(attr){if(attr)return this._previousAttributes[attr]!=this.attributes[attr];return this._changed;},changedAttributes:function(now){now||(now=this.attributes);var old=this._previousAttributes;var changed=false;for(var attr in now){if(!_.isEqual(old[attr],now[attr])){changed=changed||{};changed[attr]=now[attr];}}
return changed;},previous:function(attr){if(!attr||!this._previousAttributes)return null;return this._previousAttributes[attr];},previousAttributes:function(){return _.clone(this._previousAttributes);},_performValidation:function(attrs,options){var error=this.validate(attrs);if(error){if(options.error){options.error(this,error,options);}else{this.trigger('error',this,error,options);}
return false;}
return true;}});Backbone.Collection=function(models,options){options||(options={});if(options.comparator)this.comparator=options.comparator;_.bindAll(this,'_onModelEvent','_removeReference');this._reset();if(models)this.reset(models,{silent:true});this.initialize.apply(this,arguments);};_.extend(Backbone.Collection.prototype,Backbone.Events,{model:Backbone.Model,initialize:function(){},toJSON:function(){return this.map(function(model){return model.toJSON();});},add:function(models,options){if(_.isArray(models)){for(var i=0,l=models.length;i<l;i++){this._add(models[i],options);}}else{this._add(models,options);}
return this;},remove:function(models,options){if(_.isArray(models)){for(var i=0,l=models.length;i<l;i++){this._remove(models[i],options);}}else{this._remove(models,options);}
return this;},get:function(id){if(id==null)return null;return this._byId[id.id!=null?id.id:id];},getByCid:function(cid){return cid&&this._byCid[cid.cid||cid];},at:function(index){return this.models[index];},sort:function(options){options||(options={});if(!this.comparator)throw new Error('Cannot sort a set without a comparator');this.models=this.sortBy(this.comparator);if(!options.silent)this.trigger('reset',this,options);return this;},pluck:function(attr){return _.map(this.models,function(model){return model.get(attr);});},reset:function(models,options){models||(models=[]);options||(options={});this.each(this._removeReference);this._reset();this.add(models,{silent:true});if(!options.silent)this.trigger('reset',this,options);return this;},fetch:function(options){options||(options={});var collection=this;var success=options.success;options.success=function(resp,status,xhr){collection[options.add?'add':'reset'](collection.parse(resp,xhr),options);if(success)success(collection,resp);};options.error=wrapError(options.error,collection,options);return(this.sync||Backbone.sync).call(this,'read',this,options);},create:function(model,options){var coll=this;options||(options={});model=this._prepareModel(model,options);if(!model)return false;var success=options.success;options.success=function(nextModel,resp,xhr){coll.add(nextModel,options);if(success)success(nextModel,resp,xhr);};model.save(null,options);return model;},parse:function(resp,xhr){return resp;},chain:function(){return _(this.models).chain();},_reset:function(options){this.length=0;this.models=[];this._byId={};this._byCid={};},_prepareModel:function(model,options){if(!(model instanceof Backbone.Model)){var attrs=model;model=new this.model(attrs,{collection:this});if(model.validate&&!model._performValidation(attrs,options))model=false;}else if(!model.collection){model.collection=this;}
return model;},_add:function(model,options){options||(options={});model=this._prepareModel(model,options);if(!model)return false;var already=this.getByCid(model);if(already)throw new Error(["Can't add the same model to a set twice",already.id]);this._byId[model.id]=model;this._byCid[model.cid]=model;var index=options.at!=null?options.at:this.comparator?this.sortedIndex(model,this.comparator):this.length;this.models.splice(index,0,model);model.bind('all',this._onModelEvent);this.length++;if(!options.silent)model.trigger('add',model,this,options);return model;},_remove:function(model,options){options||(options={});model=this.getByCid(model)||this.get(model);if(!model)return null;delete this._byId[model.id];delete this._byCid[model.cid];this.models.splice(this.indexOf(model),1);this.length--;if(!options.silent)model.trigger('remove',model,this,options);this._removeReference(model);return model;},_removeReference:function(model){if(this==model.collection){delete model.collection;}
model.unbind('all',this._onModelEvent);},_onModelEvent:function(ev,model,collection,options){if((ev=='add'||ev=='remove')&&collection!=this)return;if(ev=='destroy'){this._remove(model,options);}
if(model&&ev==='change:'+model.idAttribute){delete this._byId[model.previous(model.idAttribute)];this._byId[model.id]=model;}
this.trigger.apply(this,arguments);}});var methods=['forEach','each','map','reduce','reduceRight','find','detect','filter','select','reject','every','all','some','any','include','contains','invoke','max','min','sortBy','sortedIndex','toArray','size','first','rest','last','without','indexOf','lastIndexOf','isEmpty','groupBy'];_.each(methods,function(method){Backbone.Collection.prototype[method]=function(){return _[method].apply(_,[this.models].concat(_.toArray(arguments)));};});Backbone.Router=function(options){options||(options={});if(options.routes)this.routes=options.routes;this._bindRoutes();this.initialize.apply(this,arguments);};var namedParam=/:([\w\d]+)/g;var splatParam=/\*([\w\d]+)/g;var escapeRegExp=/[-[\]{}()+?.,\\^$|#\s]/g;_.extend(Backbone.Router.prototype,Backbone.Events,{initialize:function(){},route:function(route,name,callback){Backbone.history||(Backbone.history=new Backbone.History);if(!_.isRegExp(route))route=this._routeToRegExp(route);Backbone.history.route(route,_.bind(function(fragment){var args=this._extractParameters(route,fragment);callback.apply(this,args);this.trigger.apply(this,['route:'+name].concat(args));},this));},navigate:function(fragment,triggerRoute){Backbone.history.navigate(fragment,triggerRoute);},_bindRoutes:function(){if(!this.routes)return;var routes=[];for(var route in this.routes){routes.unshift([route,this.routes[route]]);}
for(var i=0,l=routes.length;i<l;i++){this.route(routes[i][0],routes[i][1],this[routes[i][1]]);}},_routeToRegExp:function(route){route=route.replace(escapeRegExp,"\\$&").replace(namedParam,"([^\/]*)").replace(splatParam,"(.*?)");return new RegExp('^'+route+'$');},_extractParameters:function(route,fragment){return route.exec(fragment).slice(1);}});Backbone.History=function(){this.handlers=[];_.bindAll(this,'checkUrl');};var hashStrip=/^#*/;var isExplorer=/msie [\w.]+/;var historyStarted=false;_.extend(Backbone.History.prototype,{interval:50,getFragment:function(fragment,forcePushState){if(fragment==null){if(this._hasPushState||forcePushState){fragment=window.location.pathname;var search=window.location.search;if(search)fragment+=search;if(fragment.indexOf(this.options.root)==0)fragment=fragment.substr(this.options.root.length);}else{fragment=window.location.hash;}}
return decodeURIComponent(fragment.replace(hashStrip,''));},start:function(options){if(historyStarted)throw new Error("Backbone.history has already been started");this.options=_.extend({},{root:'/'},this.options,options);this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&window.history&&window.history.pushState);var fragment=this.getFragment();var docMode=document.documentMode;var oldIE=(isExplorer.exec(navigator.userAgent.toLowerCase())&&(!docMode||docMode<=7));if(oldIE){this.iframe=$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo('body')[0].contentWindow;this.navigate(fragment);}
if(this._hasPushState){$(window).bind('popstate',this.checkUrl);}else if('onhashchange'in window&&!oldIE){$(window).bind('hashchange',this.checkUrl);}else{setInterval(this.checkUrl,this.interval);}
this.fragment=fragment;historyStarted=true;var loc=window.location;var atRoot=loc.pathname==this.options.root;if(this._wantsPushState&&!this._hasPushState&&!atRoot){this.fragment=this.getFragment(null,true);window.location.replace(this.options.root+'#'+this.fragment);return true;}else if(this._wantsPushState&&this._hasPushState&&atRoot&&loc.hash){this.fragment=loc.hash.replace(hashStrip,'');window.history.replaceState({},document.title,loc.protocol+'//'+loc.host+this.options.root+this.fragment);}
if(!this.options.silent){return this.loadUrl();}},route:function(route,callback){this.handlers.unshift({route:route,callback:callback});},checkUrl:function(e){var current=this.getFragment();if(current==this.fragment&&this.iframe)current=this.getFragment(this.iframe.location.hash);if(current==this.fragment||current==decodeURIComponent(this.fragment))return false;if(this.iframe)this.navigate(current);this.loadUrl()||this.loadUrl(window.location.hash);},loadUrl:function(fragmentOverride){var fragment=this.fragment=this.getFragment(fragmentOverride);var matched=_.any(this.handlers,function(handler){if(handler.route.test(fragment)){handler.callback(fragment);return true;}});return matched;},navigate:function(fragment,triggerRoute){var frag=(fragment||'').replace(hashStrip,'');if(this.fragment==frag||this.fragment==decodeURIComponent(frag))return;if(this._hasPushState){var loc=window.location;if(frag.indexOf(this.options.root)!=0)frag=this.options.root+frag;this.fragment=frag;window.history.pushState({},document.title,loc.protocol+'//'+loc.host+frag);}else{window.location.hash=this.fragment=frag;if(this.iframe&&(frag!=this.getFragment(this.iframe.location.hash))){this.iframe.document.open().close();this.iframe.location.hash=frag;}}
if(triggerRoute)this.loadUrl(fragment);}});Backbone.View=function(options){this.cid=_.uniqueId('view');this._configure(options||{});this._ensureElement();this.delegateEvents();this.initialize.apply(this,arguments);};var selectorDelegate=function(selector){return $(selector,this.el);};var eventSplitter=/^(\S+)\s*(.*)$/;var viewOptions=['model','collection','el','id','attributes','className','tagName'];_.extend(Backbone.View.prototype,Backbone.Events,{tagName:'div',$:selectorDelegate,initialize:function(){},render:function(){return this;},remove:function(){$(this.el).remove();return this;},make:function(tagName,attributes,content){var el=document.createElement(tagName);if(attributes)$(el).attr(attributes);if(content)$(el).html(content);return el;},delegateEvents:function(events){if(!(events||(events=this.events)))return;if(_.isFunction(events))events=events.call(this);$(this.el).unbind('.delegateEvents'+this.cid);for(var key in events){var method=this[events[key]];if(!method)throw new Error('Event "'+events[key]+'" does not exist');var match=key.match(eventSplitter);var eventName=match[1],selector=match[2];method=_.bind(method,this);eventName+='.delegateEvents'+this.cid;if(selector===''){$(this.el).bind(eventName,method);}else{$(this.el).delegate(selector,eventName,method);}}},_configure:function(options){if(this.options)options=_.extend({},this.options,options);for(var i=0,l=viewOptions.length;i<l;i++){var attr=viewOptions[i];if(options[attr])this[attr]=options[attr];}
this.options=options;},_ensureElement:function(){if(!this.el){var attrs=this.attributes||{};if(this.id)attrs.id=this.id;if(this.className)attrs['class']=this.className;this.el=this.make(this.tagName,attrs);}else if(_.isString(this.el)){this.el=$(this.el).get(0);}}});var extend=function(protoProps,classProps){var child=inherits(this,protoProps,classProps);child.extend=this.extend;return child;};Backbone.Model.extend=Backbone.Collection.extend=Backbone.Router.extend=Backbone.View.extend=extend;var methodMap={'create':'POST','update':'PUT','delete':'DELETE','read':'GET'};Backbone.sync=function(method,model,options){var type=methodMap[method];var params=_.extend({type:type,dataType:'json'},options);if(!params.url){params.url=getUrl(model)||urlError();}
if(!params.data&&model&&(method=='create'||method=='update')){params.contentType='application/json';params.data=JSON.stringify(model.toJSON());}
if(Backbone.emulateJSON){params.contentType='application/x-www-form-urlencoded';params.data=params.data?{model:params.data}:{};}
if(Backbone.emulateHTTP){if(type==='PUT'||type==='DELETE'){if(Backbone.emulateJSON)params.data._method=type;params.type='POST';params.beforeSend=function(xhr){xhr.setRequestHeader('X-HTTP-Method-Override',type);};}}
if(params.type!=='GET'&&!Backbone.emulateJSON){params.processData=false;}
return $.ajax(params);};var ctor=function(){};var inherits=function(parent,protoProps,staticProps){var child;if(protoProps&&protoProps.hasOwnProperty('constructor')){child=protoProps.constructor;}else{child=function(){return parent.apply(this,arguments);};}
_.extend(child,parent);ctor.prototype=parent.prototype;child.prototype=new ctor();if(protoProps)_.extend(child.prototype,protoProps);if(staticProps)_.extend(child,staticProps);child.prototype.constructor=child;child.__super__=parent.prototype;return child;};var getUrl=function(object){if(!(object&&object.url))return null;return _.isFunction(object.url)?object.url():object.url;};var urlError=function(){throw new Error('A "url" property or function must be specified');};var wrapError=function(onError,model,options){return function(resp){if(onError){onError(model,resp,options);}else{model.trigger('error',model,resp,options);}};};var escapeHTML=function(string){return string.replace(/&(?!\w+;|#\d+;|#x[\da-f]+;)/gi,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#x27;').replace(/\//g,'&#x2F;');};}).call(this);;jQuery.cookie=function(name,value,options){if(typeof value!='undefined'){options=options||{};if(value===null){value='';options.expires=-1;}
var expires='';if(options.expires&&(typeof options.expires=='number'||options.expires.toUTCString)){var date;if(typeof options.expires=='number'){date=new Date();date.setTime(date.getTime()+(options.expires*24*60*60*1000));}else{date=options.expires;}
expires='; expires='+date.toUTCString();}
var path=options.path?'; path='+(options.path):'';var domain=options.domain?'; domain='+(options.domain):'';var secure=options.secure?'; secure':'';document.cookie=[name,'=',encodeURIComponent(value),expires,path,domain,secure].join('');}else{var cookieValue=null;if(document.cookie&&document.cookie!=''){var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=cookies[i].replace(/^\s+|\s+$/g,'');if(cookie.substring(0,name.length+1)==(name+'=')){cookieValue=decodeURIComponent(cookie.substring(name.length+1));break;}}}
return cookieValue;}};;(function($){$.extend({progressBar:new function(){this.defaults={increment:2,speed:15,showText:true,width:120,boxImage:'images/progressbar.gif',barImage:'images/progressbg_green.gif',height:12};this.construct=function(arg1,arg2){var argpercentage=null;var argconfig=null;if(arg1!=null){if(!isNaN(arg1)){argpercentage=arg1;if(arg2!=null){argconfig=arg2;}}else{argconfig=arg1;}}
return this.each(function(child){var pb=this;if(argpercentage!=null&&this.bar!=null&&this.config!=null){this.config.tpercentage=argpercentage;if(argconfig!=null)
pb.config=$.extend(this.config,argconfig);}else{var $this=$(this);var config=$.extend({},$.progressBar.defaults,argconfig);var percentage=argpercentage;if(argpercentage==null)
var percentage=$this.html().replace("%","");$this.html("");var bar=document.createElement('img');var text=document.createElement('span');bar.id=this.id+"_percentImage";text.id=this.id+"_percentText";bar.src=config.boxImage;bar.width=config.width;var $bar=$(bar);var $text=$(text);this.bar=$bar;this.ntext=$text;this.config=config;this.config.cpercentage=0;this.config.tpercentage=percentage;$bar.css("width",config.width+"px");$bar.css("height",config.height+"px");$bar.css("background-image","url("+config.barImage+")");$bar.css("padding","0");$bar.css("margin","0");$this.append($bar);$this.append($text);bar.alt=this.tpercentage;bar.title=this.tpercentage;}
var t=setInterval(function(){var config=pb.config;var cpercentage=parseInt(config.cpercentage);var tpercentage=parseInt(config.tpercentage);var increment=parseInt(config.increment);var bar=pb.bar;var text=pb.ntext;var pixels=config.width/100;bar.css("background-position",(((config.width*-1))+(cpercentage*pixels))+'px 50%');if(config.showText)
text.html(" "+Math.round(cpercentage)+"%");if(cpercentage>tpercentage){if(cpercentage-increment<tpercentage){pb.config.cpercentage=0+tpercentage}else{pb.config.cpercentage-=increment;}}
else if(pb.config.cpercentage<pb.config.tpercentage){if(cpercentage+increment>tpercentage){pb.config.cpercentage=tpercentage}else{pb.config.cpercentage+=increment;}}
else{clearInterval(t);}},pb.config.speed);});};}});$.fn.extend({progressBar:$.progressBar.construct});})(jQuery);;
/*!
 * jQuery Templates Plugin 1.0.0pre
 * http://github.com/jquery/jquery-tmpl
 * Requires jQuery 1.4.2
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
(function(jQuery,undefined){var oldManip=jQuery.fn.domManip,tmplItmAtt="_tmplitem",htmlExpr=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,newTmplItems={},wrappedItems={},appendToTmplItems,topTmplItem={key:0,data:{}},itemKey=0,cloneIndex=0,stack=[];function newTmplItem(options,parentItem,fn,data){var newItem={data:data||(data===0||data===false)?data:(parentItem?parentItem.data:{}),_wrap:parentItem?parentItem._wrap:null,tmpl:null,parent:parentItem||null,nodes:[],calls:tiCalls,nest:tiNest,wrap:tiWrap,html:tiHtml,update:tiUpdate};if(options){jQuery.extend(newItem,options,{nodes:[],parent:parentItem});}
if(fn){newItem.tmpl=fn;newItem._ctnt=newItem._ctnt||newItem.tmpl(jQuery,newItem);newItem.key=++itemKey;(stack.length?wrappedItems:newTmplItems)[itemKey]=newItem;}
return newItem;}
jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var ret=[],insert=jQuery(selector),elems,i,l,tmplItems,parent=this.length===1&&this[0].parentNode;appendToTmplItems=newTmplItems||{};if(parent&&parent.nodeType===11&&parent.childNodes.length===1&&insert.length===1){insert[original](this[0]);ret=this;}else{for(i=0,l=insert.length;i<l;i++){cloneIndex=i;elems=(i>0?this.clone(true):this).get();jQuery(insert[i])[original](elems);ret=ret.concat(elems);}
cloneIndex=0;ret=this.pushStack(ret,name,insert.selector);}
tmplItems=appendToTmplItems;appendToTmplItems=null;jQuery.tmpl.complete(tmplItems);return ret;};});jQuery.fn.extend({tmpl:function(data,options,parentItem){return jQuery.tmpl(this[0],data,options,parentItem);},tmplItem:function(){return jQuery.tmplItem(this[0]);},template:function(name){return jQuery.template(name,this[0]);},domManip:function(args,table,callback,options){if(args[0]&&jQuery.isArray(args[0])){var dmArgs=jQuery.makeArray(arguments),elems=args[0],elemsLength=elems.length,i=0,tmplItem;while(i<elemsLength&&!(tmplItem=jQuery.data(elems[i++],"tmplItem"))){}
if(tmplItem&&cloneIndex){dmArgs[2]=function(fragClone){jQuery.tmpl.afterManip(this,fragClone,callback);};}
oldManip.apply(this,dmArgs);}else{oldManip.apply(this,arguments);}
cloneIndex=0;if(!appendToTmplItems){jQuery.tmpl.complete(newTmplItems);}
return this;}});jQuery.extend({tmpl:function(tmpl,data,options,parentItem){var ret,topLevel=!parentItem;if(topLevel){parentItem=topTmplItem;tmpl=jQuery.template[tmpl]||jQuery.template(null,tmpl);wrappedItems={};}else if(!tmpl){tmpl=parentItem.tmpl;newTmplItems[parentItem.key]=parentItem;parentItem.nodes=[];if(parentItem.wrapped){updateWrapped(parentItem,parentItem.wrapped);}
return jQuery(build(parentItem,null,parentItem.tmpl(jQuery,parentItem)));}
if(!tmpl){return[];}
if(typeof data==="function"){data=data.call(parentItem||{});}
if(options&&options.wrapped){updateWrapped(options,options.wrapped);}
ret=jQuery.isArray(data)?jQuery.map(data,function(dataItem){return dataItem?newTmplItem(options,parentItem,tmpl,dataItem):null;}):[newTmplItem(options,parentItem,tmpl,data)];return topLevel?jQuery(build(parentItem,null,ret)):ret;},tmplItem:function(elem){var tmplItem;if(elem instanceof jQuery){elem=elem[0];}
while(elem&&elem.nodeType===1&&!(tmplItem=jQuery.data(elem,"tmplItem"))&&(elem=elem.parentNode)){}
return tmplItem||topTmplItem;},template:function(name,tmpl){if(tmpl){if(typeof tmpl==="string"){tmpl=buildTmplFn(tmpl);}else if(tmpl instanceof jQuery){tmpl=tmpl[0]||{};}
if(tmpl.nodeType){tmpl=jQuery.data(tmpl,"tmpl")||jQuery.data(tmpl,"tmpl",buildTmplFn(tmpl.innerHTML));}
return typeof name==="string"?(jQuery.template[name]=tmpl):tmpl;}
return name?(typeof name!=="string"?jQuery.template(null,name):(jQuery.template[name]||jQuery.template(null,htmlExpr.test(name)?name:jQuery(name)))):null;},encode:function(text){return(""+text).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;");}});jQuery.extend(jQuery.tmpl,{tag:{"tmpl":{_default:{$2:"null"},open:"if($notnull_1){__=__.concat($item.nest($1,$2));}"},"wrap":{_default:{$2:"null"},open:"$item.calls(__,$1,$2);__=[];",close:"call=$item.calls();__=call._.concat($item.wrap(call,__));"},"each":{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},"html":{open:"if($notnull_1){__.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){__.push($.encode($1a));}"},"!":{open:""}},complete:function(items){newTmplItems={};},afterManip:function afterManip(elem,fragClone,callback){var content=fragClone.nodeType===11?jQuery.makeArray(fragClone.childNodes):fragClone.nodeType===1?[fragClone]:[];callback.call(elem,fragClone);storeTmplItems(content);cloneIndex++;}});function build(tmplItem,nested,content){var frag,ret=content?jQuery.map(content,function(item){return(typeof item==="string")?(tmplItem.key?item.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+tmplItmAtt+"=\""+tmplItem.key+"\" $2"):item):build(item,tmplItem,item._ctnt);}):tmplItem;if(nested){return ret;}
ret=ret.join("");ret.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,function(all,before,middle,after){frag=jQuery(middle).get();storeTmplItems(frag);if(before){frag=unencode(before).concat(frag);}
if(after){frag=frag.concat(unencode(after));}});return frag?frag:unencode(ret);}
function unencode(text){var el=document.createElement("div");el.innerHTML=text;return jQuery.makeArray(el.childNodes);}
function buildTmplFn(markup){return new Function("jQuery","$item","var $=jQuery,call,__=[],$data=$item.data;"+"with($data){__.push('"+
jQuery.trim(markup).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,function(all,slash,type,fnargs,target,parens,args){var tag=jQuery.tmpl.tag[type],def,expr,exprAutoFnDetect;if(!tag){throw"Unknown template tag: "+type;}
def=tag._default||[];if(parens&&!/\w$/.test(target)){target+=parens;parens="";}
if(target){target=unescape(target);args=args?(","+unescape(args)+")"):(parens?")":"");expr=parens?(target.indexOf(".")>-1?target+unescape(parens):("("+target+").call($item"+args)):target;exprAutoFnDetect=parens?expr:"(typeof("+target+")==='function'?("+target+").call($item):("+target+"))";}else{exprAutoFnDetect=expr=def.$1||"null";}
fnargs=unescape(fnargs);return"');"+
tag[slash?"close":"open"].split("$notnull_1").join(target?"typeof("+target+")!=='undefined' && ("+target+")!=null":"true").split("$1a").join(exprAutoFnDetect).split("$1").join(expr).split("$2").join(fnargs||def.$2||"")+"__.push('";})+"');}return __;");}
function updateWrapped(options,wrapped){options._wrap=build(options,true,jQuery.isArray(wrapped)?wrapped:[htmlExpr.test(wrapped)?wrapped:jQuery(wrapped).html()]).join("");}
function unescape(args){return args?args.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null;}
function outerHtml(elem){var div=document.createElement("div");div.appendChild(elem.cloneNode(true));return div.innerHTML;}
function storeTmplItems(content){var keySuffix="_"+cloneIndex,elem,elems,newClonedItems={},i,l,m;for(i=0,l=content.length;i<l;i++){if((elem=content[i]).nodeType!==1){continue;}
elems=elem.getElementsByTagName("*");for(m=elems.length-1;m>=0;m--){processItemKey(elems[m]);}
processItemKey(elem);}
function processItemKey(el){var pntKey,pntNode=el,pntItem,tmplItem,key;if((key=el.getAttribute(tmplItmAtt))){while(pntNode.parentNode&&(pntNode=pntNode.parentNode).nodeType===1&&!(pntKey=pntNode.getAttribute(tmplItmAtt))){}
if(pntKey!==key){pntNode=pntNode.parentNode?(pntNode.nodeType===11?0:(pntNode.getAttribute(tmplItmAtt)||0)):0;if(!(tmplItem=newTmplItems[key])){tmplItem=wrappedItems[key];tmplItem=newTmplItem(tmplItem,newTmplItems[pntNode]||wrappedItems[pntNode]);tmplItem.key=++itemKey;newTmplItems[itemKey]=tmplItem;}
if(cloneIndex){cloneTmplItem(key);}}
el.removeAttribute(tmplItmAtt);}else if(cloneIndex&&(tmplItem=jQuery.data(el,"tmplItem"))){cloneTmplItem(tmplItem.key);newTmplItems[tmplItem.key]=tmplItem;pntNode=jQuery.data(el.parentNode,"tmplItem");pntNode=pntNode?pntNode.key:0;}
if(tmplItem){pntItem=tmplItem;while(pntItem&&pntItem.key!=pntNode){pntItem.nodes.push(el);pntItem=pntItem.parent;}
delete tmplItem._ctnt;delete tmplItem._wrap;jQuery.data(el,"tmplItem",tmplItem);}
function cloneTmplItem(key){key=key+keySuffix;tmplItem=newClonedItems[key]=(newClonedItems[key]||newTmplItem(tmplItem,newTmplItems[tmplItem.parent.key+keySuffix]||tmplItem.parent));}}}
function tiCalls(content,tmpl,data,options){if(!content){return stack.pop();}
stack.push({_:content,tmpl:tmpl,item:this,data:data,options:options});}
function tiNest(tmpl,data,options){return jQuery.tmpl(jQuery.template(tmpl),data,options,this);}
function tiWrap(call,wrapped){var options=call.options||{};options.wrapped=wrapped;return jQuery.tmpl(jQuery.template(call.tmpl),call.data,options,call.item);}
function tiHtml(filter,textOnly){var wrapped=this._wrap;return jQuery.map(jQuery(jQuery.isArray(wrapped)?wrapped.join(""):wrapped).filter(filter||"*"),function(e){return textOnly?e.innerText||e.textContent:e.outerHTML||outerHtml(e);});}
function tiUpdate(){var coll=this.nodes;jQuery.tmpl(null,null,null,this).insertBefore(coll[0]);jQuery(coll).remove();}})(jQuery);;var JSON;if(!JSON){JSON={};}
(function(){"use strict";function f(n){return n<10?'0'+n:n;}
if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z':null;};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();};}
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}
function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
if(typeof rep==='function'){value=rep.call(holder,key,value);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==='string'){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':value});};}
if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}
return reviver.call(holder,key,value);}
text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+
('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}
if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}
throw new SyntaxError('JSON.parse');};}}());;_.extend(Backbone.Model.prototype,{_truncateString:function(text,numChars,append)
{if(text!=null&&typeof numChars==='number')
{if(append==null)
{append=' &hellip;';}
numChars=numChars-append.length;if(text.length>numChars)
{return text.trim().substring(0,numChars).split(" ").slice(0,-1).join(" ")+append;}}
return text;},_urlTitle:function(str,separator)
{if(typeof str=='string')
{if(typeof separator=='undefined')
{separator='-';}
str=str.toLowerCase();str=str.replace(/[^a-z0-9]+/g,separator);regex=new RegExp('/^'+separator+'+|'+separator+'+$/','g')
str=str.replace(regex,'');}
return str;}});;(function(){var QS;QS=this.QS={};var $=this.jQuery;var jQuery=this.jQuery;var _=this._;var Backbone=this.Backbone;var JSON=this.JSON;QS.GetLibrary=function(lib)
{return eval(lib);}
QS.tlh=function()
{var cook='qstlh',cookv='qstlhv',labels=document.domain.split('.'),tlh=document.domain;if(labels.length>=2)
{var host2Check='.'+labels[labels.length-1],i=labels.length-1,cset=false;while(i>=0&&!cset)
{$.cookie(cook,cookv,{domain:host2Check});cset=($.cookie(cook)==cookv);$.cookie(cook,null,{domain:host2Check});host2Check=cset?host2Check:'.'+labels[i-1]+host2Check;i--;}
tlh=cset?host2Check:tlh;}
return tlh;}
QS.ih=function()
{var cook='qsih';if($.cookie(cook)===null)
{var tlh=QS.tlh();$.cookie(cook,'n',{path:'/',domain:tlh});$('body').one('mouseover',function()
{$.cookie(cook,'m',{path:'/',domain:tlh});});$(document).one('keydown',function()
{$.cookie(cook,'k',{path:'/',domain:tlh});});}}
QS.DataUnavailableException=Backbone.Model.extend({});QS.EventProxy=Backbone.Model.extend({listeners:[],bind:function(obj,event)
{event=typeof event==="undefined"?"all":event;if(typeof QsWidgetEvents==="function")
{obj.bind(event,QsWidgetEvents);}
_.each(this.listeners,function(listener){obj.bind(listener.event,listener.callback);},this);},listen:function(callback,event)
{this.listeners.push({callback:callback,event:event});}});var eventProxy=new QS.EventProxy();QS.AjaxLoadEffect=Backbone.Model.extend({defaultWaitMessage:'Searching ...',widget:null,construct:function(widget)
{_.bindAll(this,"listener");this.widget=widget;},getWaitMessage:function()
{if(this.widget.sv_1!==null)
{return this.widget.sv_1;}
else
{return this.defaultWaitMessage;}}});QS.ProgressBarLoadEffect=QS.AjaxLoadEffect.extend({defaultWaitMessage:'Searching for schools ...',progressBarPercentage:5,maxProgressBarPercentage:100,updateProgressBarSetTimeOut:0,updateProgressBarTimeInterval:500,isSchoolListingReady:false,hideProgressBarSetTimeOut:0,hideProgressBarTimeInterval:100,minDivWidthWithoutProgressBar:350,construct:function(widget)
{_.bindAll(this,"listener","updateProgressBar");this.widget=widget;},listener:function(event,obj)
{switch(event)
{case"QS.WidgetInstance:updateWidget:in":this.startEffect();break;case"QS.WidgetInstance:populate:in":case"QS.WidgetInstance:updateWidget:preAjax":this.updateProgressBar();break;case"QS.WidgetInstance:displayAndExit:in":case"QS.WidgetInstance:display:in":case"QS.WidgetInstance:render:in":this.completeProgressBar();break;case"QS.WidgetInstance:restoreOnPageWidgetAndExit:in":case"QS.WidgetInstance:qsit:out":this.completeProgressBar(true);break;}},startEffect:function()
{var boxImage='/hqx/images/progressbar.gif';var barImage='/hqx/images/progressbg_green.gif';var loadingBoxImage=(this.widget.sv_2==null)?boxImage:this.widget.sv_2+boxImage;var loadingBarImage=(this.widget.sv_2==null)?barImage:this.widget.sv_2+barImage;var progressBarConfig={boxImage:loadingBoxImage,barImage:loadingBarImage};var loadingDivName=this.widget.domId+'LoadingDiv';var loadingDiv=$('<div id="'+loadingDivName+'Loader" style="text-align:center;" class="progressThermometerLoader"></div>');if(!loadingDiv.css("border"))
{loadingDiv.css("margin","20px 50px").css("padding-top","20px").css("padding-bottom","20px").css("border","1px solid #8FAC50").css("background-color","#E7EFDA");}
var loadingWrapper=$('<div class="sblLoadingDiv" id="'+loadingDivName+'"></div>');loadingDiv.appendTo(loadingWrapper);loadingWrapper.appendTo($('#'+this.widget.domId).parent());if(this.minDivWidthWithoutProgressBar>=$('#'+this.widget.domId).width())
{loadingDiv.removeClass('progressThermometerLoader').addClass('progressThermometerLoaderSmall');if(!loadingDiv.css("border"))
{loadingDiv.css("margin","10px 20px").css("padding-top","10px").css("padding-bottom","10px").css("border","1px solid #8FAC50").css("background-color","#E7EFDA");}
progressBarConfig.width=80;}
$('#'+this.widget.domId+'LoadingDivLoader').progressBar(progressBarConfig);},updateProgressBar:function()
{var loadingDivLoaderName=this.widget.domId+'LoadingDivLoader';if(!this.isSchoolListingReady)
{this.progressBarPercentage+=parseInt((this.updateProgressBarTimeInterval/this.widget.sv_3)*100);if(this.maxProgressBarPercentage>=this.progressBarPercentage)
{$('#'+loadingDivLoaderName).progressBar(this.progressBarPercentage,{topDivText:this.getWaitMessage(),textSearch:'&nbsp;&nbsp;&nbsp;'});}
var self=this;this.updateProgressBarSetTimeOut=setTimeout(function(){self.updateProgressBar();},this.updateProgressBarTimeInterval);}
else
{$('#'+loadingDivLoaderName).progressBar(this.maxProgressBarPercentage,{topDivText:this.getWaitMessage(),textSearch:'&nbsp;&nbsp;&nbsp;'});clearTimeout(this.updateProgressBarSetTimeOut);}},completeProgressBar:function(hideProgressBarDiv)
{this.isSchoolListingReady=true;this.updateProgressBar();if(hideProgressBarDiv)
{var self=this;this.hideProgressBarSetTimeOut=setTimeout(function(){self.hideProgressBar();},this.hideProgressBarTimeInterval);}},hideProgressBar:function()
{$('#'+this.widget.domId+'LoadingDiv').hide();clearTimeout(this.hideProgressBarSetTimeOut);}});QS.SpinnerLoadEffect=QS.AjaxLoadEffect.extend({listener:function(event,obj)
{switch(event)
{case"QS.WidgetInstance:updateWidget:in":this.startEffect();break;case"QS.WidgetInstance:qsit:in":this.hideSpinner();break;}},startEffect:function()
{var loadingDivName=this.widget.domId+'LoadingDiv';var loadingDiv=$('<div id="'+loadingDivName+'Loader" style="text-align:center;" class="ajaxLoader">'+this.getWaitMessage()+'</div>');var bgImgvalue=loadingDiv.css("background-image");if(bgImgvalue=='none'||bgImgvalue==''||typeof bgImgvalue=='undefined')
{loadingDiv.css("margin-top","30px").css("padding-top","40px").css("padding-bottom","50px").css("background-image","url(/hqx/images/ajax-loader.gif)").css("background-repeat","no-repeat").css("background-position","center top");}
var loadingWrapper=$('<div class="sblLoadingDiv" id="'+loadingDivName+'"></div>');loadingDiv.appendTo(loadingWrapper);loadingWrapper.appendTo($('#'+this.widget.domId).parent());if(this.widget.getAjaxLoadEffect()=='spinner-overlay')
{$('#'+loadingDivName).parent().css('position','relative');$('#'+loadingDivName).css("background-color","#FFFFFF").css("opacity","0.75").css("filter","alpha(opacity=75)").css("position","absolute").css("width","100%");}},hideSpinner:function()
{$('#'+this.widget.domId+'LoadingDiv').hide();}});QS.AjaxLoadEffectProxy=Backbone.Model.extend({construct:function()
{eventProxy.listen(this.widgetEvent,"QS.WidgetInstance:construct:out");},widgetEvent:function(widget)
{var effect=null;switch(widget.getAjaxLoadEffect())
{case'progressBar':effect=new QS.ProgressBarLoadEffect();effect.construct(widget);break;case'spinner':effect=new QS.SpinnerLoadEffect();effect.construct(widget);break;}
if(effect!=null)
{widget.bind("all",effect.listener);}}});var ajaxLoadEffectProxy=new QS.AjaxLoadEffectProxy();ajaxLoadEffectProxy.construct();QS.WidgetPage=Backbone.Model.extend({construct:function(pageNumber,offset,pageSize,parentWidget)
{eventProxy.bind(this);this.trigger('QS.WidgetPage:construct:in',this);this.pageNumber=pageNumber;this.pageNumberDisplayed=pageNumber+1;this.offset=offset;this.pageSize=pageSize;this.parentWidget=parentWidget;this.impressionsLogged=false;this.sv_4=false;this.trigger('QS.WidgetPage:construct:out',this);}});QS.Tracking=Backbone.Model.extend({customParam01CodeKey:'CustomParam01Code',customParam02CodeKey:'CustomParam02Code',customParam03CodeKey:'CustomParam03Code',customParam04CodeKey:'CustomParam04Code',customParam05CodeKey:'CustomParam05Code',numOfResultsKey:'NumOfResults',pagesizeKey:'pagesize',offsetKey:'offset',vendorKeyKey:'VendorKey',campaignKeyKey:'CampaignKey',positionKey:'Position',sv_5:'BLUID',construct:function(trackingJson,parentWidget)
{eventProxy.bind(this);this.trigger('QS.Tracking:construct:in',this);this.parentWidget=parentWidget;this.sv_6=parentWidget.sv_6;this.commonNames=[];this.commonValues=[];var sv_7=$.parseJSON(trackingJson);if(typeof sv_7.common!=="undefined")
{_.each(sv_7.common,function(commonParam)
{switch(commonParam.name)
{case this.numOfResultsKey:case this.pagesizeKey:case this.offsetKey:break;default:this.commonNames.push(commonParam.name);this.commonValues.push(commonParam.value);break;}},this);}
this.trigger('QS.Tracking:construct:out',this);},getBluids:function(pageNumber)
{var whichPage=(pageNumber)?pageNumber:this.parentWidget.currentPage;var bluids=[];var listings=this.parentWidget.getListingsPage(whichPage);var siblingBluids=[];_.each(listings,function(listing)
{bluids.push(listing.BLUID);bluids=bluids.concat(listing.getSiblingBluids());},this);return bluids;},getTaxonomySubject:function()
{var taxonomySubjectIndex=$.inArray(this.customParam01CodeKey,this.commonNames);return(taxonomySubjectIndex>-1)?this.commonValues[taxonomySubjectIndex]:'';},getTaxonomyQualification:function()
{var taxonomyQualificationIndex=$.inArray(this.customParam02CodeKey,this.commonNames);return(taxonomyQualificationIndex>-1)?this.commonValues[taxonomyQualificationIndex]:'';},getTaxonomyGeography:function()
{var taxonomyGeographyIndex=$.inArray(this.customParam03CodeKey,this.commonNames);return(taxonomyGeographyIndex>-1)?this.commonValues[taxonomyGeographyIndex]:'';},getTaxonomyAudience:function()
{var taxonomyAudienceIndex=$.inArray(this.customParam04CodeKey,this.commonNames);return(taxonomyAudienceIndex>-1)?this.commonValues[taxonomyAudienceIndex]:'';},toJSONString:function(pageNumber)
{var whichPage=(pageNumber)?pageNumber:this.parentWidget.currentPage;var commonArray=[];for(var i=0;i<this.commonNames.length;i++)
{commonArray.push({name:this.commonNames[i],value:this.commonValues[i]});}
commonArray.push({name:this.numOfResultsKey,value:this.parentWidget.sv_8});var listings=this.parentWidget.getExpandedListingsPage(whichPage);var listingsArray=[];var namedValuesArray=[];var position=(whichPage*this.parentWidget.sv_8);_.each(listings,function(listing)
{namedValuesArray=[];namedValuesArray.push({name:this.vendorKeyKey,value:listing.vendorKey});namedValuesArray.push({name:this.positionKey,value:(listing.isMergedSibling())?position:++position});namedValuesArray.push({name:this.sv_5,value:listing.BLUID});namedValuesArray.push({name:this.campaignKeyKey,value:(typeof listing.campaignKey==="undefined")?'':listing.campaignKey});listingsArray.push({namedValues:namedValuesArray});},this);var sv_7={common:commonArray,listing:listingsArray};return JSON.stringify(sv_7);},toEncodedJSONString:function()
{return encodeURIComponent(this.toJSONString());}});QS.XapiRequest=Backbone.Model.extend({setServiceName:function(serviceName)
{this.service=serviceName;},setServiceMethod:function(serviceMethod)
{this.method=serviceMethod;},setFilterCriterion:function(key,value)
{var filterCriteria=this.getFilterCriteria();filterCriteria[key]=value;this.setFilterCriteria(filterCriteria);},setFilterCriteria:function(filterCriteria)
{this.filterCriteria=this.toXmlString(filterCriteria);},getFilterCriteria:function()
{if(this.filterCriteria)
{var filterCriteria=$($.parseXML(this.filterCriteria));return this._getJsonFromXml(filterCriteria);}
else
{return{};}},setDataValue:function(key,value)
{var dataValues=this.getDataValues();dataValues[key]=value;this.setDataValues(dataValues);},setDataValues:function(dataValues)
{this.dataValues=this.toXmlString(dataValues);},getDataValues:function()
{if(this.dataValues)
{var dataValues=$($.parseXML(this.dataValues));return this._getJsonFromXml(dataValues);}
else
{return{};}},setFilterCriteriaXml:function(sv_9)
{this.filterCriteria=decodeURIComponent(sv_9);},setDataValuesXml:function(sv_10)
{this.dataValues=decodeURIComponent(sv_10);},getRequestObject:function()
{return{service:this.service,method:this.method,filterCriteria:this.filterCriteria,dataValues:this.dataValues};},_getJsonFromXml:function($xml)
{var json={};$.each($xml.find('e'),function(index,element)
{var $element=$(element);json[$element.attr('key')]=$element.text();});return json;},toXmlString:function(obj)
{var xml="<a class='array'>";var keys=_.keys(obj);var values=_.values(obj);_.each(keys,function(key,index)
{if(values[index]!=null)
{xml+="<e key='"+key+"'><![CDATA["+values[index]+"]]></e>";}},this);return xml+="</a>";}});QS.Program=Backbone.Model.extend({construct:function(programJson,parentWidget,parentVendor,parentDealer)
{eventProxy.bind(this);this.trigger('QS.Program:construct:in',this);this.extraBPData=new QS.Attributes();this.extraBPData.construct(jQuery.isPlainObject(programJson.extraBPData)?programJson.extraBPData:{});this.parentWidget=parentWidget;this.parentVendor=parentVendor;this.parentDealer=parentDealer;this.programKey=programJson.eduprogramKey;this.displayName=programJson.displayName;this.descriptionData=programJson.description;this.qualificationList=programJson.qualificationList;this.subjectList=programJson.subjectList;this.nameCode=encodeURIComponent(programJson.nameCode);this.trigger('QS.Program:construct:out',this);},populate:function(data)
{this.trigger('QS.Program:populate:in',this);if(data&&data['description'])
{this.descriptionData=data['description'];}
this.trigger('QS.Program:populate:out',this);},getExtraBPData:function()
{return(this.data?this.data:this).extraBPData;},getParentWidget:function()
{return(this.data)?this.data.parentWidget:this.parentWidget;},getParentVendor:function()
{return(this.data)?this.data.parentVendor:this.parentVendor;},getParentDealer:function()
{return(this.data)?this.data.parentDealer:this.parentDealer;},getProgramKey:function()
{var self=this.data?this.data:this;return self.programKey;},getNameCode:function()
{var self=this.data?this.data:this;return self.nameCode;},getDisplayName:function()
{var self=this.data?this.data:this;return self.displayName;},getDescriptionData:function()
{var self=this.data?this.data:this;return self.descriptionData;},getQualificationList:function()
{var self=this.data?this.data:this;return self.qualificationList;},getSubjectList:function()
{var self=this.data?this.data:this;return self.subjectList;},getDescription:function()
{return this.getDescriptionData();},description:function()
{return this.getDescriptionData();}});QS.Asset=Backbone.Model.extend({construct:function(assetJson)
{eventProxy.bind(this);this.trigger('QS.Asset:construct:in',this);this.description=(typeof assetJson.description!=="undefined")?assetJson.description:null;this.key=(typeof assetJson.key!=="undefined")?assetJson.key:null;this.title=(typeof assetJson.title!=="undefined")?assetJson.title:null;this.imageUrl=(typeof assetJson.imageUrl!=="undefined")?assetJson.imageUrl:null;this.ioNumber=(typeof assetJson.ioNumber!=="undefined")?assetJson.ioNumber:null;this.assetName=(typeof assetJson.name!=="undefined")?assetJson.name:null;this.servicesList=(typeof assetJson.servicesList!=="undefined")?assetJson.servicesList:null;this.trigger('QS.Asset:construct:out',this);},getDescription:function(stripTags)
{var self=this.data?this.data:this;return stripTags===true?self.description.replace(/(<([^>]+)>)/ig,""):self.description;},getDescriptionTruncated:function(numChars,stripTags)
{var self=this.data?this.data:this;var description=self.getDescription(stripTags);return self._truncateString(description,numChars);},getKey:function()
{var self=this.data?this.data:this;return self.key;},getImageUrl:function()
{var self=this.data?this.data:this;return self.imageUrl;},getServicesList:function()
{var self=this.data?this.data:this;return self.servicesList;},getTitle:function(stripTags)
{var self=this.data?this.data:this;return stripTags===true?self.title.replace(/(<([^>]+)>)/ig,""):self.title;},getIoNumber:function()
{var self=this.data?this.data:this;return self.ioNumber;},getAssetName:function()
{var self=this.data?this.data:this;return self.assetName;},getAssetType:function()
{var self=this.data?this.data:this;var defaultAssetType='download';assetType=self.getAssetName();if(/dummy_|\.txt/ig.test(assetType))
{return assetType.replace(/dummy_|\.txt/ig,"");}
else if(/\.pdf/ig.test(assetType))
{return"pdf";}
else
{return defaultAssetType;}},getAssetTypeCallToActionText:function()
{var assetTypeCallToText={"asset":"Register Now","courses":"Register Now","webcast":"Register Now","webinar":"Register Now","eseminar":"Register Now","eseminarseries":"Register Now","event":"Register Now","ondemand":"Register Now","tool":"Register Now","trial":"Download Now","whitepaper":"Download Now","pdf":"Download Now","download":"Download Now","article":"Download Now","podcast":"Download Now","software":"Download Now","demo":"Watch It Now","video":"Watch It Now"};return assetTypeCallToText[self.getAssetType()];},getIoNumberStripped:function()
{var self=this.data?this.data:this;ioNumber=self.getIoNumber();periodPosition=ioNumber.indexOf('.');if(periodPosition!==-1)
{return ioNumber.substring(0,periodPosition);}
else
{return ioNumber;}}});QS.VendorBase=Backbone.Model.extend({clientModelClickName:'CLICK',clientModelDtspName:'DTSP',clientModelPushName:'PUSH',clientModelPhoneName:'PHONE',displayUrlCTAString:'Visit',displayUrlCTADefault:'School Website',construct:function(dataListingJson,parentWidget)
{eventProxy.bind(this);this.trigger('QS.VendorBase:construct:in',this);this.attributes=new QS.Attributes();this.attributes.construct(jQuery.isPlainObject(dataListingJson.attributes)?dataListingJson.attributes:{});this.parentWidget=parentWidget;this.BLUID=dataListingJson.BLUID;this.vendorAbbr=(typeof dataListingJson.abbr!=="undefined")?dataListingJson.abbr:null;this.vendorName=dataListingJson.vendorName;this.vendorKey=dataListingJson.vendorKey;this.parentVendorKey=dataListingJson.parentVendorKey;this.portalVendorKey=dataListingJson.portalVendorKey;this.phoneNumber=dataListingJson.phoneNumber;this.phoneExtension=dataListingJson.phoneExtension;this.position=dataListingJson.position;this.clientType=dataListingJson.clientType;this.displayUrl=(typeof dataListingJson.displayUrl!=="undefined")?dataListingJson.displayUrl:'';this.campaignKey=(typeof dataListingJson.campaignKey!=="undefined")?dataListingJson.campaignKey:'';this.clientModel=(typeof dataListingJson.clientModelName!=="undefined")?dataListingJson.clientModelName:null;this.clickThroughUrl=(typeof dataListingJson.clickThroughUrl!=="undefined")?encodeURIComponent(dataListingJson.clickThroughUrl):null;this.logoPath=dataListingJson.logoPath;this.smallLogoPath=dataListingJson.smallLogoPath;this.vendorBlurbs=[];this.siblings=[];this.firstSibling=null;this.sibling=false;this.cities=[];this.states=[];this.dealers=[];this.numDealers=0;this.numUniqueDealersByCity=null;this.numUniqueDealersByState=null;this.numUniqueDealersByCityAndState=null;this.trigger('QS.VendorBase:construct:out',this);},populate:function(data)
{this.trigger('QS.VendorBase:populate:in',this);this.vendorBlurbs=[];if(data&&data['blurbs'])
{this.vendorBlurbs['short']=data['blurbs']['short'];this.vendorBlurbs['medium']=data['blurbs']['medium'];this.vendorBlurbs['long']=data['blurbs']['long'];}
this.trigger('QS.VendorBase:populate:out',this);},getAttributes:function()
{return(this.data?this.data:this).attributes;},getClientType:function()
{return(this.data?this.data:this).clientType;},getLogoPath:function()
{var self=this.data?this.data:this;return self.logoPath;},getSmallLogoPath:function()
{var self=this.data?this.data:this;return self.smallLogoPath;},getBluid:function(clientModel)
{var self=this.data?this.data:this;self.trigger('QS.VendorBase:getBluid:in',self);vendor=self.getSibling(clientModel);return(vendor==null)?'':vendor.BLUID;self.trigger('QS.VendorBase:getBluid:out',self);},getVendorKey:function()
{var self=this.data?this.data:this;return self.vendorKey;},getVendorAbbr:function(clientModel)
{var self=this.data?this.data:this;self.trigger('QS.VendorBase:getVendorAbbr:in',self);vendor=self.getSibling(clientModel);return(vendor==null)?'':vendor.vendorAbbr;self.trigger('QS.VendorBase:getVendorAbbr:out',self);},getVendorName:function(clientModel)
{var self=this.data?this.data:this;self.trigger('QS.VendorBase:getVendorName:in',self);vendor=self.getSibling(clientModel);return(vendor==null)?'':vendor.vendorName;self.trigger('QS.VendorBase:getVendorName:out',self);},hasSiblings:function()
{return this.siblings.length>0||(this.firstSibling&&this.firstSibling.hasSiblings());},isSibling:function()
{return this.sibling;},isMergedSibling:function()
{return this.firstSibling!=null;},getSiblings:function()
{if(this.siblings)
{return this.siblings;}
else if(this.firstSibling)
{return this.firstSibling.getSiblings();}
else
{return null;}},getSiblingBluids:function()
{var siblingBluids=[];_.each(this.siblings,function(sibling)
{siblingBluids.push(sibling.BLUID);});return siblingBluids;},isClickOnlyListing:function()
{var self=this.data?this.data:this;return(!self.hasSiblings()&&self.isClickClient());},isDtspOnlyListing:function()
{var self=this.data?this.data:this;return(!self.hasSiblings()&&self.getClientModel()===self.clientModelDtspName);},isCpcOnlyListing:function()
{var self=this.data?this.data:this;return(!self.hasSiblings()&&self.getClientModel()===self.clientModelClickName);},isLeadOnlyListing:function()
{var self=this.data?this.data:this;return(!self.hasSiblings()&&self.isLeadClient());},isMergedListing:function()
{var self=this.data?this.data:this;return(self.hasSiblings()||self.isMergedSibling());},isLeadClient:function()
{return this.isClientModel(this.clientModelPushName);},isClickClient:function()
{var self=(this.data)?this.data:this;self.trigger('QS.VendorBase:isClickClient:in',self);var isClickClient=false;var sibling=null;if(self.clientModel==self.clientModelClickName)
{isClickClient=true;}
else if(sibling=self.getClickSibling())
{isClickClient=true;}
else if(self.firstSibling!==null)
{isClickClient=self.firstSibling.clientModel===self.firstSibling.clientModelClickName;}
self.trigger('QS.VendorBase:isClickClient:out',self);return isClickClient;},isClientModel:function(clickModelName,method)
{var self=(this.data)?this.data:this;var isClientModel=false;var sibling=null;self.trigger('QS.VendorBase:isClickClient:in',self);if(self.clientModel==clickModelName)
{isClientModel=true;}
else if(sibling=self.getSibling(clickModelName))
{isClientModel=true;}
else if(self.firstSibling!==null)
{isClientModel=self.firstSibling.clientModel===self.firstSibling.clientModelClickName;}
self.trigger('QS.VendorBase:isClickClient:out',self);return isClientModel;},getClientModel:function()
{return this.clientModel;},processClickThroughUrl:function(url)
{var self=(this.data)?this.data:this;self.trigger('QS.VendorBase:processClickThroughUrl:in',self);if(self.parentWidget.sv_11!='')
{}
url+=("&cookiesEnabled="+((self.parentWidget.sv_12)?"1":"0"));if(this.parentWidget.getTag())
{url+='&tag='+this.parentWidget.getTag();}
self.trigger('QS.VendorBase:processClickThroughUrl:out',self);return url;},getSibling:function(clientModelName)
{var self=(this.data)?this.data:this,theSibling=null,siblings=null,sibling=null,i=0,length=0;if(typeof clientModelName==="undefined"&&!self.hasSiblings())
{return self;}
clientModelName=(typeof clientModelName==="undefined")?self.clientModelPushName:clientModelName;if(self.clientModel===clientModelName)
{theSibling=self;}
else if(_.isObject(self.firstSibling)&&self.firstSibling.clientModel===clientModelName)
{theSibling=self.firstSibling;}
else if(self.hasSiblings())
{siblings=self.getSiblings();for(i=0,length=siblings.length;i<length;i++)
{sibling=siblings[i];if(sibling.clientModel===clientModelName)
{theSibling=sibling;break;}}}
return theSibling;},getClickSibling:function()
{return this.getSibling(this.clientModelClickName);},getLeadSibling:function()
{return this.getSibling(this.clientModelPushName);},getUrl:function(passThroughUrl)
{var self=(this.data)?this.data:this;self.trigger('QS.VendorBase:getUrl:in',self);if((self.getClientModel()==self.clientModelPushName)&&self.isMergedSibling)
{if(sibling=self.getClickSibling())
{return self.processClickThroughUrl(decodeURIComponent(sibling.clickThroughUrl));}}
if((self.getClientModel()==self.clientModelClickName)&&self.isMergedSibling)
{return self.processClickThroughUrl(decodeURIComponent(self.clickThroughUrl));}
if((self.getClientModel()==self.clientModelPushName)&&!self.hasSiblings())
{return passThroughUrl;}
if((self.getClientModel()==self.clientModelPushName)&&self.hasSiblings())
{if(self.isClickClient())
{returnUrl=self.processClickThroughUrl(decodeURIComponent(self.clickThroughUrl));}
if(sibling=self.getClickSibling())
{returnUrl=self.processClickThroughUrl(decodeURIComponent(sibling.clickThroughUrl));}}
if((self.getClientModel()==self.clientModelClickName)&&!self.hasSiblings())
{return self.processClickThroughUrl(decodeURIComponent(self.clickThroughUrl));}
if((self.getClientModel()==self.clientModelClickName)&&self.hasSiblings())
{if(self.isClickClient())
{returnUrl=self.processClickThroughUrl(decodeURIComponent(self.clickThroughUrl));}
if(sibling=self.getClickSibling())
{returnUrl=self.processClickThroughUrl(decodeURIComponent(sibling.clickThroughUrl));}}
self.trigger('QS.VendorBase:getUrl:out',self);return passThroughUrl;},getClickThroughUrl:function(url)
{var self=(this.data)?this.data:this;return self.getUrl(url);},getDisplayUrl:function()
{var self=(this.data)?this.data:this;var clickSibling=self.getClickSibling();return self.displayUrlCTAString+' '+((clickSibling.displayUrl!=='')?clickSibling.displayUrl:self.displayUrlCTADefault);},getVendorBlurb:function(blurbLength,stripTags,clientModel)
{var self=(this.data)?this.data:this;vendor=self.getSibling(clientModel);if(vendor==null||!vendor.vendorBlurbs||!vendor.vendorBlurbs[blurbLength])
{return'';}
else
{if(stripTags!=null&&stripTags)
{return $("<p>"+vendor.vendorBlurbs[blurbLength]+"</p>").text();}
else
{return vendor.vendorBlurbs[blurbLength];}}},getVendorBlurbTruncated:function(blurbLength,numChars,clientModel)
{var self=this.data?this.data:this;var blurb=self.getVendorBlurb(blurbLength,true,clientModel);return self._truncateString(blurb,numChars);},hasPhone:function()
{var self=(this.data)?this.data:this;return self.getListingPhone()!=='';},getListingPhone:function()
{var self=(this.data)?this.data:this,vendor=self.getSibling(self.clientModelPhoneName);},hasPhoneExtension:function()
{var self=(this.data)?this.data:this;return self.getListingPhoneExtension()!=='';},formatPhoneNumber:function(phoneNumber)
{formattedString='';arrChars=phoneNumber.split('');for(i=0;i<phoneNumber.length;i++)
{if(i==3)
{formattedString+='-';}
if(i==6)
{formattedString+='-';}
formattedString+=arrChars[i];}
return formattedString;},getListingPhoneExtension:function()
{var self=(this.data)?this.data:this,vendor=self.getSibling(self.clientModelPhoneName);return!vendor?'':vendor.phoneExtension;},getDealers:function()
{var self=this.data?this.data:this;return self.dealers;},getUniqueDealersByCityAndState:function()
{var dealers=[];var cityState=[];var self=this.data?this.data:this;_.each(self.dealers,function(dealer)
{if(dealer.isCampus())
{if(_.indexOf(cityState,dealer.getCity()+'-'+dealer.getState())==-1)
{dealers.push(dealer);cityState.push(dealer.getCity()+'-'+dealer.getState());}}});self.numUniqueDealersByCityAndState=dealers.length;return dealers;},getNumUniqueDealersByCityAndState:function()
{var self=this.data?this.data:this;if(self.numUniqueDealersByCityAndState==null)
{self.getUniqueDealersByCityAndState();}
return self.numUniqueDealersByCityAndState;},getNumDealers:function()
{var self=this.data?this.data:this;return self.numDealers;},getUniqueDealersByState:function()
{var dealers=[];var states=[];var self=this.data?this.data:this;_.each(self.dealers,function(dealer)
{if(dealer.isCampus())
{if(_.indexOf(states,dealer.getState())==-1)
{dealers.push(dealer);states.push(dealer.getState());}}});self.numUniqueDealersByState=dealers.length;return dealers;},getNumUniqueDealersByState:function()
{var self=this.data?this.data:this;if(self.numUniqueDealersByState==null)
{self.getUniqueDealersByState();}
return self.numUniqueDealersByState;},hasMoreUniqueDealersByState:function(numDealers)
{var self=this.data?this.data:this;if(numDealers!=null)
{return(self.numUniqueDealersByState!=0&&self.numUniqueDealersByState>numDealers);}
else
{return false;}},getStates:function()
{var states=[];var self=this.data?this.data:this;_.each(self.dealers,function(dealer)
{states.push(dealer.getState());});return states.sort();},getUniqueDealersByCity:function()
{var dealers=[];var cities=[];var self=this.data?this.data:this;_.each(self.dealers,function(dealer)
{if(dealer.isCampus())
{if(_.indexOf(cities,dealer.getCity())==-1)
{dealers.push(dealer);cities.push(dealer.getCity());}}});self.numUniqueDealersByCity=dealers.length;return dealers;},getNumUniqueDealersByCity:function()
{var self=this.data?this.data:this;if(self.numUniqueDealersByCity==null)
{self.getUniqueDealersByCity();}
return self.numUniqueDealersByCity;},hasMoreUniqueDealersByCity:function(numDealers)
{var self=this.data?this.data:this;if(numDealers!=null)
{return(self.numUniqueDealersByCity!=0&&self.numUniqueDealersByCity>numDealers);}
else
{return false;}},getCities:function()
{var cities=[];var self=this.data?this.data:this;_.each(self.dealers,function(dealer)
{cities.push(dealer.getCity());});return cities.sort();},getDealerName:function(numIndex)
{var self=(this.data)?this.data:this;if(self.dealers.length>0)
{return self.dealers[numIndex].dealerName;}
return self.vendorName;},getDealerAbbr:function(numIndex)
{var self=(this.data)?this.data:this;if(self.dealers.length>0)
{return self.dealers[numIndex].dealerAbbr;}
return self.vendorAbbr;},getCampaignKey:function()
{return this.campaignKey;},setCampaignKey:function(campaignKey)
{if(typeof campaignKey!=="undefined")
{this.campaignKey=campaignKey;}
return this;}});QS.Vendor=QS.VendorBase.extend({baseLogoDir:'/imageserver',defaultSmallLogo:'/logos/120x60_blanklogo.gif',defaultLargeLogo:'/logos/200x100/200x100_blanklogo.gif',listingTypeClickOnlyListing:'ClickOnlyListing',listingTypeDtspOnlyListing:'DtspOnlyListing',listingTypeLeadOnlyListing:'LeadOnlyListing',listingTypeHybridListing:'HybridListing',construct:function(dataListingJson,parentWidget)
{eventProxy.bind(this);this.trigger('QS.Vendor:construct:in',this);this.handlePrequal(dataListingJson);QS.VendorBase.prototype.construct.call(this,dataListingJson,parentWidget);this.gibill=(typeof dataListingJson.gibill!=="undefined")?dataListingJson.gibill:null;this.yellowRibbon=(typeof dataListingJson.yellowRibbon!=="undefined")?dataListingJson.yellowRibbon:null;this.programs=[];this.hasMorePrograms=false;this.hasMoreUniquePrograms=false;this.numUniqueVendorPrograms=0;this.topLevelQualificationList={'Associate':'Associate','Bachelor':'Bachelor','Diploma':'Diploma','Doctor':'Doctorate','Certificate':'Certificate','Master':'Master','Coursework':'Coursework'};if(this.parentWidget.isJsonVersion1_1()&&dataListingJson.blurbs!==null&&dataListingJson.blurbs!=="undefined")
{this.populate(dataListingJson);}
else if(typeof dataListingJson.blurbs!=="undefined")
{this.populate(dataListingJson);}
if(this.parentWidget.isJsonVersion1_1()&&dataListingJson.dealerListings)
{_.each(dataListingJson.dealerListings,function(dealer)
{var vendorDealer=new QS.Dealer();vendorDealer.construct(dealer,this);this.dealers.push(vendorDealer);},this);this.numDealers=this.dealers.length;}
else if(dataListingJson.eduDealerListings)
{_.each(dataListingJson.eduDealerListings,function(dealer)
{var vendorDealer=new QS.Dealer();vendorDealer.construct(dealer,this);this.dealers.push(vendorDealer);},this);this.numDealers=this.dealers.length;}
if(dataListingJson.eduProgramListing)
{_.each(dataListingJson.eduProgramListing,function(program)
{var vendorProgram=new QS.Program();vendorProgram.construct(program,this.parentWidget,this,null);this.programs.push(vendorProgram);},this);}
this.trigger('QS.Vendor:construct:out',this);},populate:function(data)
{this.trigger('QS.Vendor:populate:in',this);QS.VendorBase.prototype.populate.call(this,data);this.yellowRibbon=(typeof data['yellowRibbon']!=="undefined")?data['yellowRibbon']:null;this.gibill=(typeof data['gibill']!=="undefined")?data['gibill']:null;this.trigger('QS.Vendor:populate:out',this);},handlePrequal:function(dataListingJson)
{if(dataListingJson.clientModelName===this.clientModelClickName||dataListingJson.clientModelName===this.clientModelDtspName)
{this.enablePrequal(dataListingJson);}},enablePrequal:function(dataListingJson)
{if(/&$/.test(dataListingJson.clickThroughUrl))
{dataListingJson.clickThroughUrl+='pq=1';}
else
{dataListingJson.clickThroughUrl+='&pq=1';}},getListingAbbr:function()
{var self=this.data?this.data:this;self.trigger('QS.VendorBase:getListingAbbr:in',self);vendor=self.getSibling();if(vendor==null)
{return'';}
if(vendor.isSingleMatchedDealer())
{var dealer=vendor.getFirstDealer();self.trigger('QS.VendorBase:getListingAbbr:out',self);return(dealer.getDealerAbbr()!='')?dealer.getDealerAbbr():vendor.getVendorAbbr();}
else
{self.trigger('QS.VendorBase:getListingAbbr:out',self);return vendor.getVendorAbbr();}},getListingName:function()
{var self=this.data?this.data:this;self.trigger('QS.VendorBase:getListingName:in',self);vendor=self.getSibling();if(vendor==null)
{return'';}
if(vendor.isSingleMatchedDealer())
{var dealer=vendor.getFirstDealer();self.trigger('QS.VendorBase:getListingName:out',self);return(dealer.getDealerAbbr()!=''&&dealer.getDealerAbbr()!=vendor.getVendorAbbr())?dealer.getDealerName():vendor.getVendorName();}
else
{self.trigger('QS.VendorBase:getListingName:out',self);return vendor.getVendorName();}},getCampusType:function()
{var self=this.data?this.data:this;var vendor=self.getSibling();if(vendor==null)
{return'';}
if(typeof vendor.campusType=='undefined')
{self.getDealerInfo();}
return vendor.campusType;},getDealerInfo:function()
{var self=this.data?this.data:this;var vendor=self.getSibling();if(vendor==null)
{return false;}
vendor.campusType='';for(var i=0,len=vendor.dealers.length;i<len;i++)
{var dealer=vendor.dealers[i];if(typeof dealer.campusType!=='undefined')
{if(dealer.campusType=='Campus')
{vendor.campusType=(vendor.campusType=='Online School')?'Both':'Campus';}
else if(dealer.campusType=='Online School')
{vendor.campusType=(vendor.campusType=='Campus')?'Both':'Online School';}}
if(vendor.campusType=='Both')
{return;}}},isSingleMatchedDealer:function()
{var self=this.data?this.data:this;return(self.getNumDealers()==1);},getFirstDealer:function()
{var self=this.data?this.data:this;if(self.getNumDealers()>0)
{var dealers=self.getDealers();return dealers[0];}
return null;},getGIBill:function()
{var self=(this.data)?this.data:this;if(!self.gibill)
{return'';}
else
{return self.gibill;}},getYellowRibbon:function()
{var self=(this.data)?this.data:this;if(!self.yellowRibbon)
{return'';}
else
{return self.yellowRibbon;}},getLogoPath:function(size,fallback)
{size=typeof(size)!='undefined'?size:'small';fallback=typeof(fallback)!='undefined'?fallback:false;var self=(this.data)?this.data:this,vendor=self.getSibling();if(vendor==null)
{return'';}
var listingObj=vendor;if(vendor.isSingleMatchedDealer())
{var dealer=vendor.getFirstDealer();if(dealer.getDealerAbbr()!=''&&dealer.getDealerAbbr()!=vendor.getVendorAbbr())
{listingObj=dealer;}}
var domain=self.parentWidget.isAffiliate()?self.parentWidget.sv_13():'';if(size=='large')
{if(listingObj.logoPath)
{return domain+self.baseLogoDir+((listingObj.logoPath.substr(0,1)!='/')?'/':'')+listingObj.logoPath;}
else if(fallback===true&&listingObj.smallLogoPath)
{return domain+self.baseLogoDir+((listingObj.smallLogoPath.substr(0,1)!='/')?'/':'')+listingObj.smallLogoPath;}
else
{return domain+self.baseLogoDir+listingObj.defaultLargeLogo;}}
else if(size=='small')
{if(listingObj.smallLogoPath)
{return domain+self.baseLogoDir+((listingObj.smallLogoPath.substr(0,1)!='/')?'/':'')+listingObj.smallLogoPath;}
else if(fallback===true&&listingObj.logoPath)
{return domain+self.baseLogoDir+((listingObj.logoPath.substr(0,1)!='/')?'/':'')+listingObj.logoPath;}
else
{return domain+self.baseLogoDir+listingObj.defaultSmallLogo;}}
else
{return domain+self.baseLogoDir+listingObj.defaultLargeLogo;}},numVendorPrograms:function()
{return this.programs.length;},getNumUniqueVendorPrograms:function()
{var self=this.data?this.data:this;if(0<self.numUniqueVendorPrograms)
{return self.numUniqueVendorPrograms;}
else
{var programNames=[];for(var i=0;i<self.programs.length;i++)
{if(self.programs[i])
{if(_.indexOf(programNames,self.programs[i].displayName)==-1)
{programNames.push(self.programs[i].displayName);}}}
self.numUniqueVendorPrograms=programNames.length;return self.numUniqueVendorPrograms;}},getPrograms:function()
{var self=(this.data)?this.data:this;var programs=[];for(var i=0;i<this.data.parentWidget.sv_14;i++)
{if(this.data.programs[i])
{programs.push(this.data.programs[i]);}}
self.hasMorePrograms=(self.numVendorPrograms()>this.data.parentWidget.sv_14);return programs;},getUniquePrograms:function()
{var self=this.data?this.data:this;var programs=[];var programNames=[];for(var i=0;i<self.programs.length;i++)
{if(self.programs[i])
{if(_.indexOf(programNames,self.programs[i].displayName)==-1)
{programs.push(self.programs[i]);programNames.push(self.programs[i].displayName);}}}
self.hasMoreUniquePrograms=(programs.length>self.parentWidget.sv_14);programs.length=(programs.length>self.parentWidget.sv_14)&&!isNaN(parseInt(self.parentWidget.sv_14))?parseInt(self.parentWidget.sv_14):programs.length;return programs;},getTopLevelQualificationList:function()
{var qualificationList=[];for(var i=0;i<this.data.parentWidget.sv_14;i++)
{if(this.data.programs[i])
{for(var j=0;j<this.data.programs[i].qualificationList.length;j++)
{var temp=this.data.programs[i].qualificationList[j];for(var qualMatched in this.data.topLevelQualificationList)
{var re=new RegExp(qualMatched,'gi');if(temp.match(re)!=null)
{qualificationList.push(this.data.topLevelQualificationList[qualMatched]);break;}}}}}
qualificationList.sort();return _.uniq(qualificationList,true);},getClickThroughUrl:function(url)
{var self=(this.data)?this.data:this;return QS.VendorBase.prototype.getClickThroughUrl.call(this,url)+'&vendorKey='+self.getVendorKey(this.clientModelClickName);},getSibling:function(clientModel)
{if(clientModel===this.clientModelClickName)
{return this.getClickOrDtspSibling();}
else
{return QS.VendorBase.prototype.getSibling.call(this,clientModel);}},getClickOrDtspSibling:function()
{var theSibling=null;if(this.clientModel===this.clientModelClickName||this.clientModel===this.clientModelDtspName)
{theSibling=this;}
else if((_.isObject(this.firstSibling))&&this.firstSibling.clientModel===this.clientModelClickName||this.clientModel===this.clientModelDtspName)
{theSibling=this.firstSibling;}
else if(this.hasSiblings())
{var siblings=this.getSiblings(),sibling=null;for(var i=0,length=siblings.length;i<length;i++)
{sibling=siblings[i];if(sibling.clientModel===this.clientModelClickName||sibling.clientModel===this.clientModelDtspName)
{theSibling=sibling;break;}}}
return theSibling;},isClickClient:function()
{var self=(this.data)?this.data:this,isClickClient=false;self.trigger('QS.Vendor:isClickClient:in',self);if(self.getClickOrDtspSibling())
{isClickClient=true;}
self.trigger('QS.Vendor:isClickClient:out',self);return isClickClient;},getDtspUrl:function()
{var self=(this.data)?this.data:this,vendor,returnUrl='';self.trigger('QS.Vendor:getDtspUrl:in',self);if(vendor=self.getClickOrDtspSibling())
{returnUrl=vendor.clickThroughUrl;}
self.trigger('QS.Vendor:getDtspUrl:out',self);return returnUrl;},getUrl:function(passThroughUrl)
{var self=(this.data)?this.data:this,vendor,returnUrl=passThroughUrl?passThroughUrl:'';self.trigger('QS.Vendor:getUrl:in',self);if(vendor=self.getClickOrDtspSibling())
{returnUrl=self.processClickThroughUrl(decodeURIComponent(vendor.clickThroughUrl))}
self.trigger('QS.Vendor:getUrl:out',self);return returnUrl;},getDisplayUrl:function()
{var self=(this.data)?this.data:this;var clickSibling=self.getClickOrDtspSibling();return self.displayUrlCTAString+' '+((clickSibling.displayUrl!=='')?clickSibling.displayUrl:self.displayUrlCTADefault);},getListingType:function()
{var type='';if(self.hasSiblings())
{type=self.listingTypeHybridListing;}
else
{switch(self.getClientModel())
{case self.clientModelClickName:type=self.listingTypeClickOnlyListing;break;case self.clientModelDtspName:type=self.listingTypeDtspOnlyListing;break;case self.clientModelPushName:type=self.listingTypeLeadOnlyListing;break;}}
return type;},getVendorKey:function(clientModel)
{var self=this.data?this.data:this;self.trigger('QS.Vendor:getVendorKey:in',self);vendor=self.getSibling(clientModel);self.trigger('QS.Vendor:getVendorKey:out',self);return(vendor==null)?'':vendor.vendorKey;}});QS.B2BVendor=QS.VendorBase.extend({construct:function(dataListingJson,parentWidget)
{eventProxy.bind(this);this.trigger('QS.B2BVendor:construct:in',this);QS.VendorBase.prototype.construct.call(this,dataListingJson,parentWidget);this.asset=null;this.assetListing=null;this.campaignKey=(typeof dataListingJson.campaignKey!=="undefined")?dataListingJson.campaignKey:'';this.services=(typeof dataListingJson.serviceDetailsList!=="undefined")?dataListingJson.serviceDetailsList:'';if(this.parentWidget.isJsonVersion1_1()&&dataListingJson.blurbs!==null&&dataListingJson.blurbs!=="undefined")
{this.populate(dataListingJson);}
else if(typeof dataListingJson.blurbs!=="undefined")
{this.populate(dataListingJson);}
if(dataListingJson.dealerListings)
{_.each(dataListingJson.dealerListings,function(dealer)
{var vendorDealer=new QS.B2BDealer();vendorDealer.construct(dealer,this);this.dealers.push(vendorDealer);},this);this.numDealers=this.dealers.length;}
if(dataListingJson.asset)
{var vendorAsset=new QS.Asset();vendorAsset.construct(dataListingJson.asset);this.asset=vendorAsset;}
if(dataListingJson.assetsList)
{var vendorAssetListing=new Array();_.each(dataListingJson.assetsList,function(asset)
{var vendorAsset=new QS.Asset();vendorAsset.construct(asset);vendorAssetListing.push(vendorAsset);},this);this.assetListing=vendorAssetListing;}
this.trigger('QS.B2BVendor:construct:out',this);},populate:function(data)
{this.trigger('QS.B2BVendor:populate:in',this);QS.VendorBase.prototype.populate.call(this,data);this.trigger('QS.B2BVendor:populate:out',this);},getAsset:function()
{var self=this.data?this.data:this;return self.asset;},getAssetListing:function()
{var self=this.data?this.data:this;return self.assetListing;},getCampaignKey:function()
{var self=this.data?this.data:this;return self.campaignKey;},getServices:function()
{var self=this.data?this.data:this;return self.services;},getFirstServiceKey:function()
{var self=this.data?this.data:this;if(typeof self.services[0]['serviceKey']!=="undefined")
{return self.services[0]['serviceKey'];}
else
{return'';}},getAssetFormUrl:function()
{var self=this.data?this.data:this;return'/'+self.asset.getKey()+'/'+self.getFirstServiceKey()+'/'+self.getVendorKey()+'/'+self.asset.getIoNumberStripped();}});QS.HSVendor=QS.VendorBase.extend({construct:function(dataListingJson,parentWidget)
{eventProxy.bind(this);this.trigger('QS.HSVendor:construct:in',this);this.dealers=[];this.score=null;this.vendorBlurbs=[];QS.VendorBase.prototype.construct.call(this,dataListingJson,parentWidget);this.setDealers(dataListingJson.dealerListings);this.setScore(dataListingJson.score);this.setVendorBlurbs(dataListingJson.blurbs);this.trigger('QS.HSVendor:construct:out',this);},setDealers:function(dealers)
{if(jQuery.isArray(dealers))
{this.dealers=[];this.numDealers=0;_.each(dealers,function(dealerObj)
{var dealer=new QS.HSDealer();dealer.construct(dealerObj,this);this.dealers.push(dealer);},this);this.numDealers=dealers.length;}},setScore:function(score)
{if(jQuery.type(score)==='number'||jQuery.type(score)==='string')
{this.score=score;}},setVendorBlurbs:function(blurbs)
{if(jQuery.isPlainObject(blurbs))
{this.vendorBlurbs=jQuery.isArray(this.vendorBlurbs)?this.vendorBlurbs:[];this.vendorBlurbs['short']=jQuery.type(blurbs['short'])==='string'?blurbs['short']:'';this.vendorBlurbs['deal']=jQuery.type(blurbs['deal'])==='string'?blurbs['deal']:'';this.vendorBlurbs['medium']=jQuery.type(blurbs['medium'])==='string'?blurbs['medium']:'';this.vendorBlurbs['long']=jQuery.type(blurbs['long'])==='string'?blurbs['long']:'';}},getDealers:function()
{return(this.data?this.data:this).dealers;},getScore:function()
{return(this.data?this.data:this).score;}});QS.MedicalVendor=QS.VendorBase.extend({construct:function(dataListingJson,parentWidget)
{eventProxy.bind(this);this.trigger('QS.MedicalVendor:construct:in',this);QS.VendorBase.prototype.construct.call(this,dataListingJson,parentWidget);this.campaignKey=(typeof dataListingJson.campaignKey!=="undefined")?dataListingJson.campaignKey:'';this.allServicesOfferedByVendor=new Array();this.numServices=0;this.medicalFormUrl='';if(this.parentWidget.isJsonVersion1_1())
{this.populate(dataListingJson);}
if(dataListingJson.dealerListings)
{_.each(dataListingJson.dealerListings,function(dealer)
{var vendorDealer=new QS.DealerBase();vendorDealer.construct(dealer,this);vendorDealer.populate(dealer);this.dealers.push(vendorDealer);},this);this.numDealers=this.dealers.length;}
if(dataListingJson.allServicesOfferedByVendor)
{_.each(dataListingJson.allServicesOfferedByVendor,function(service)
{var vendorService=new QS.Service();vendorService.construct(service);this.allServicesOfferedByVendor.push(vendorService);},this);this.numServices=this.allServicesOfferedByVendor.length;}
this.trigger('QS.MedicalVendor:construct:out',this);},populate:function(data)
{this.trigger('QS.MedicalVendor:populate:in',this);QS.VendorBase.prototype.populate.call(this,data);this.trigger('QS.MedicalVendor:populate:out',this);},getCampaignKey:function()
{var self=this.data?this.data:this;return self.campaignKey;},getAllServicesOfferedByVendor:function()
{var self=this.data?this.data:this;return self.allServicesOfferedByVendor;},isLastService:function(index)
{var self=this.data?this.data:this;return((index+1)==self.numServices)?true:false;},getNumServices:function()
{var self=this.data?this.data:this;return self.numServices;},getVendorNameAsAbbr:function()
{var self=this.data?this.data:this;return self._urlTitle(self.getVendorName());},getMedicalFormUrl:function()
{var self=this.data?this.data:this;if(self.medicalFormUrl=='')
{var services=self.parentWidget.getMatchedServices();var servicesKeys=[];for(var key in services)
{if(typeof services[key]==='object')
{servicesKeys[key]=services[key].getServiceKey();}}
servicesKeys=servicesKeys.sort();services=servicesKeys.join('-');self.medicalFormUrl=self.getVendorKey()+'/'+services+'/'
+self.parentWidget.sv_5+'/'+self.getBluid();}
return self.medicalFormUrl;}});QS.Service=Backbone.Model.extend({construct:function(serviceJson)
{eventProxy.bind(this);this.trigger('QS.Service:construct:in',this);this.serviceCode=(typeof serviceJson.serviceCode!=="undefined")?serviceJson.serviceCode:null;this.serviceName=(typeof serviceJson.serviceName!=="undefined")?serviceJson.serviceName:null;this.serviceKey=(typeof serviceJson.serviceKey!=="undefined")?serviceJson.serviceKey:null;this.trigger('QS.Service:construct:out',this);},getServiceCode:function()
{var self=this.data?this.data:this;return self.serviceCode;},getServiceName:function()
{var self=this.data?this.data:this;return self.serviceName;},getServiceKey:function()
{var self=this.data?this.data:this;return self.serviceKey;}});QS.DealerBase=Backbone.Model.extend({construct:function(dealerListingJson,parentVendor)
{this.trigger('QS.DealerBase:construct:in',this);this.attributes=new QS.Attributes();if(typeof dealerListingJson["attributes"]!=="undefined")
{this.attributes.construct(dealerListingJson.attributes);}
this.parentVendor=parentVendor;this.BLUID=parentVendor.BLUID;this.dealerName=dealerListingJson.dealerName;this.dealerAbbr=(typeof dealerListingJson.abbr!=="undefined")?dealerListingJson.abbr:parentVendor.vendorAbbr;this.dealerKey=dealerListingJson.dealerKey;this.logoPath=dealerListingJson.logoPath;this.smallLogoPath=dealerListingJson.smallLogoPath;this.distance=(typeof dealerListingJson.distance!=="undefined")?dealerListingJson.distance:0;this.dealerBlurbs=[];this.trigger('QS.DealerBase:construct:out',this);},populate:function(data)
{this.trigger('QS.DealerBase:populate:in',this);if(data&&data['blurbs'])
{this.dealerBlurbs['short']=data['blurbs']['short'];this.dealerBlurbs['medium']=data['blurbs']['medium'];this.dealerBlurbs['long']=data['blurbs']['long'];}
this.url=data['url'];this.city=data['city'];this.campusType=data['campusType'];this.country=data['country'];this.postalCode=data['postalCode'];this.state=data['state'];this.street1=data['street1'];this.street2=data['street2'];if(this.city=='Online'||this.city=='Online School'||this.city==''||this.campusType!='Campus')
{this.campus=false;}
else if(this.city=='Neither Campus nor Online')
{this.campus=null;}
else if(this.city!=null)
{this.campus=true;}
else
{this.campus=null;}
this.trigger('QS.DealerBase:populate:out',this);},setDefaultProperties:function()
{this.url=null;this.city=null;this.campusType=null;this.country=null;this.postalCode=null;this.state=null;this.street1=null;this.street2=null;this.campus=null;},ifHasCity:function()
{return this.isCampus();},isOnlineCampus:function()
{return this.isCampus();},isCampus:function()
{var self=this.data?this.data:this;return self.campus;},getAttributes:function()
{return(this.data?this.data:this).attributes;},getDealerAbbr:function()
{return(this.data?this.data:this).dealerAbbr;},getName:function()
{var self=this.data?this.data:this;return self.dealerName;},getLogoPath:function()
{var self=this.data?this.data:this;return self.logoPath;},getSmallLogoPath:function()
{var self=this.data?this.data:this;return self.smallLogoPath;},getDealerKey:function()
{return(this.data?this.data:this).dealerKey;},getDealerName:function()
{return(this.data?this.data:this).dealerName;},getDistance:function()
{var self=this.data?this.data:this;return self.distance;},getCity:function()
{return this.city;},getCampusType:function()
{return this.campusType;},getCountry:function()
{return this.country;},getPostalCode:function()
{return this.postalCode;},getState:function()
{return this.state;},getStreet1:function()
{return this.street1;},getStreet2:function()
{return this.street2;},getUrl:function()
{return this.url;},getDealerBlurb:function(blurbLength,stripTags)
{if(typeof this.data.dealerBlurbs[blurbLength]==="undefined")
{return'';}
else
{if(stripTags!=null&&stripTags)
{return $("<p>"+this.data.dealerBlurbs[blurbLength]+"</p>").text();}
else
{return this.data.dealerBlurbs[blurbLength];}}},getParentVendor:function()
{return this.parentVendor;}});QS.Dealer=QS.DealerBase.extend({construct:function(dealerListingJson,parentVendor)
{eventProxy.bind(this);this.trigger('QS.Dealer:construct:in',this);QS.DealerBase.prototype.construct.call(this,dealerListingJson,parentVendor);this.programs=[];this.hasMorePrograms=false;this.hasMoreUniquePrograms=false;this.accreditation=(typeof dealerListingJson.accreditation!=="undefined")?dealerListingJson.accreditation:null;if(this.parentVendor.parentWidget.isJsonVersion1_1())
{this.populate(dealerListingJson);}
else if(typeof dealerListingJson.blurbs!=="undefined")
{this.populate(dealerListingJson);}
else
{this.setDefaultProperties();this.yellowRibbon=null;this.giBill=null;this.homePhone=null;this.workPhone=null;}
if(dealerListingJson.eduDealerProgramListing)
{_.each(dealerListingJson.eduDealerProgramListing,function(program)
{var dealerProgram=new QS.Program();dealerProgram.construct(program,this.parentVendor.parentWidget,null,this);this.programs.push(dealerProgram);},this);}
this.trigger('QS.Dealer:construct:out',this);},populate:function(data)
{this.trigger('QS.Dealer:populate:in',this);QS.DealerBase.prototype.populate.call(this,data);this.yellowRibbon=(typeof data['yellowRibbon']!=="undefined")?data['yellowRibbon']:null;this.giBill=(typeof data['gibill']!=="undefined")?data['gibill']:null;this.homePhone=(typeof data['homePhone']!=="undefined")?data['homePhone']:null;this.workPhone=(typeof data['workPhone']!=="undefined")?data['workPhone']:null;this.trigger('QS.Dealer:populate:out',this);},getYellowRibbon:function()
{return this.yellowRibbon;},getGiBill:function()
{return this.giBill;},getHomePhone:function()
{return this.homePhone;},getWorkPhone:function()
{return this.workPhone;},numDealerPrograms:function()
{return this.programs.length;},getPrograms:function()
{var programs=[];for(var i=0;i<this.data.parentVendor.parentWidget.sv_14;i++)
{if(this.data.programs[i])
{programs.push(this.data.programs[i]);}}
return programs;},getUniquePrograms:function()
{var programs=[];var programNames=[];for(var i=0;i<this.data.parentVendor.parentWidget.sv_14;i++)
{if(this.data.programs[i])
{if(_.indexOf(programNames,this.data.programs[i].displayName)==-1)
{programs.push(this.data.programs[i]);programNames.push(this.data.programs[i].displayName);}}}
this.hasMoreUniquePrograms=(programs.length>this.data.parentVendor.parentWidget.sv_14);return programs;}});QS.B2BDealer=QS.DealerBase.extend({construct:function(dealerListingJson,parentVendor)
{eventProxy.bind(this);this.trigger('QS.B2BDealer:construct:in',this);QS.DealerBase.prototype.construct.call(this,dealerListingJson,parentVendor);this.alphaCR=(typeof dealerListingJson.alphaCR!=="undefined")?dealerListingJson.alphaCR:null;this.alphaCTR=(typeof dealerListingJson.alphaCTR!=="undefined")?dealerListingJson.alphaCTR:null;this.betaCR=(typeof dealerListingJson.betaCR!=="undefined")?dealerListingJson.betaCR:null;this.betaCTR=(typeof dealerListingJson.betaCTR!=="undefined")?dealerListingJson.betaCTR:null;this.campaignKey=(typeof dealerListingJson.campaignKey!=="undefined")?dealerListingJson.campaignKey:'';this.discountFactor=(typeof dealerListingJson.discountFactor!=="undefined")?dealerListingJson.discountFactor:null;this.fallbackServiceCode=(typeof dealerListingJson.fallbackServiceCode!=="undefined")?dealerListingJson.fallbackServiceCode:null;this.returnRate=(typeof dealerListingJson.returnRate!=="undefined")?dealerListingJson.returnRate:null;this.revenue=(typeof dealerListingJson.revenue!=="undefined")?dealerListingJson.revenue:null;this.serviceCode=(typeof dealerListingJson.serviceCode!=="undefined")?dealerListingJson.serviceCode:null;this.serviceList=(typeof dealerListingJson.serviceList!=="undefined")?dealerListingJson.serviceList:null;if(this.parentVendor.parentWidget.isJsonVersion1_1())
{this.populate(dealerListingJson);}
else if(typeof dealerListingJson.blurbs!=="undefined")
{this.populate(dealerListingJson);}
else
{this.setDefaultProperties();}
this.trigger('QS.B2BDealer:construct:out',this);},populate:function(data)
{this.trigger('QS.B2BDealer:populate:in',this);QS.DealerBase.prototype.populate.call(this,data);this.trigger('QS.B2BDealer:populate:out',this);},getAlphaCR:function()
{return this.alphaCR;},getAlphaCTR:function()
{return this.alphaCTR;},getBetaCR:function()
{return this.betaCR;},getBetaCTR:function()
{return this.betaCTR;},getCampaignKey:function()
{return this.campaignKey;},getDiscountFactor:function()
{return this.discountFactor;},getFallbackServiceCode:function()
{return this.fallbackServiceCode;},getReturnRate:function()
{return this.returnRate;},getRevenue:function()
{return this.revenue;},getServiceCode:function()
{return this.serviceCode;},getServiceList:function()
{return this.serviceList;}});QS.HSDealer=QS.DealerBase.extend({construct:function(dataListingJson,parentVendor)
{eventProxy.bind(this);this.trigger('QS.HSDealer:construct:in',this);this.campaignKey=null;this.contactKey=null;this.firstName=null;this.score=null;this.serviceList=[];this.url=null;QS.DealerBase.prototype.construct.call(this,dataListingJson,parentVendor);this.setDealerAbbr(dataListingJson.abbr);this.setCampaignKey(dataListingJson.campaignKey);this.setContactKey(dataListingJson.contactKey);this.setFirstName(dataListingJson.firstName);this.setScore(dataListingJson.score);this.setServiceList(dataListingJson.serviceList);this.setUrl(dataListingJson.url);if(this.parentVendor.parentWidget.isJsonVersion1_1())
{this.populate(dataListingJson);}
this.trigger('QS.HSDealer:construct:out',this);},setDealerAbbr:function(abbreviation)
{if(jQuery.type(abbreviation)==='string')
{this.dealerAbbr=abbreviation;}},setCampaignKey:function(campaignKey)
{if(jQuery.type(campaignKey)==='number'||jQuery.type(campaignKey)==='string')
{this.campaignKey=campaignKey;}},setContactKey:function(contactKey)
{if(jQuery.type(contactKey)==='number'||jQuery.type(contactKey)==='string')
{this.contactKey=contactKey;}},setFirstName:function(firstName)
{if(jQuery.type(firstName)==='string')
{this.firstName=firstName;}},setScore:function(score)
{if(jQuery.type(score)==='number')
{this.score=score;}},setServiceList:function(serviceList)
{if(jQuery.isArray(serviceList))
{this.serviceList=serviceList;}},setUrl:function(url)
{if(jQuery.type(url)==='string')
{this.url=url;}},setParentVendor:function(vendor)
{if(vendor instanceof QS.VendorBase)
{this.parentVendor=vendor;}},getCampaignKey:function()
{return(this.data?this.data:this).campaignKey;},getContactKey:function()
{return(this.data?this.data:this).contactKey;},getFirstName:function()
{return(this.data?this.data:this).firstName;},getScore:function()
{return(this.data?this.data:this).score;},getServiceList:function()
{return(this.data?this.data:this).serviceList;},getUrl:function()
{return(this.data?this.data:this).url;},getVendorKey:function()
{return(this.data?this.data:this).vendorKey;}});QS.WidgetInstance=Backbone.Model.extend({sv_15:'BusinessListingWidget',sv_16:'siteName',sv_17:'pageUri',sv_18:'stateCode',sv_19:'countryCode',sv_20:'sp_261170',sv_21:'sp_loadAddlListingData',sv_22:'sp_261160',sv_23:'sp_260840',sv_24:'tracking',sv_25:'sp_260780',sv_26:'sp_260850',sv_27:'sp_260860',sv_28:'sp_261270',sv_29:'sp_261260',sv_30:'subj',sv_31:'sp_261290',sv_32:'DegreeOfInterest',sv_33:'AreaOfInterest',sv_34:'filterDlrByState',sv_35:'sp_270390',sv_36:'alphabet',sv_37:'gibill',sv_38:'sp_matched',sv_39:'sp_261250',sv_40:'yellowribbon',sv_41:'filterCriteria',sv_42:'dataValues',sv_43:'sp_260870',sv_44:'ClientModel',sv_45:'sp_260920',sv_5:'BLUID',sv_46:'bluids',sv_47:'ajaxLoadEffect',sv_48:'waitMessage',sv_49:'/getadditionaldata',sv_50:'/qsit',sv_51:'/qsct',sv_2:'//hqx-qmp.quinstreet.com',sv_52:'numPrograms',sv_53:'numListings',sv_54:'numListingsPerPage',sv_55:'getAdditionalDealerData',sv_56:'contentService',sv_57:'getPageContent',sv_58:'Widget',sv_59:'Client',sv_60:'true',sv_61:'bluid_',sv_62:'WT_FPC',sv_63:'qsCookieTest',sv_64:'foobar',sv_65:10000,sv_66:'10000',sv_67:5000,sv_3:10000,sv_68:300,sv_69:2000,sv_70:'none',sv_71:{},sv_72:null,sv_73:null,sv_74:null,sv_75:null,sv_76:'AreaOfInterest',sv_77:'DegreeOfInterest',sv_78:'Audience',sv_79:'PortalServiceCode',sv_80:'customParams',useOnPageWrapperKey:'useOnPageWrapper',optimizeForUserKey:'optimizeForUser',jsonVersion1_1:'1.1',categoryKeyEducation:5149,categoryKeyB2B:9258,categoryKeyHS:5151,categoryKeyMedical:9259,sv_81:'USERID_COOKIE',construct:function(domElement)
{eventProxy.bind(this);this.trigger('QS.WidgetInstance:construct:in',this);this.domElement=domElement;this.domId=domElement[0].id;this.sv_71=this.parseUrl();this.sv_82=this.sv_83(this.sv_16);this.sv_84=this.sv_83(this.sv_25);this.sv_85=this.sv_83(this.sv_17);this.sv_6=this.sv_83(this.sv_45);this.sv_14=this.sv_83(this.sv_52);this.sv_86=this.sv_83(this.sv_53);this.sv_87=this.sv_83(this.sv_39);this.sv_8=this.sv_83(this.sv_54);this.sv_88=this.sv_83(this.sv_18);this.sv_89=this.sv_83(this.sv_19);this.sv_90=this.sv_83(this.sv_20);this.sv_91=this.sv_83(this.sv_21);this.sv_92=this.sv_83(this.sv_22);this.sv_93=this.sv_83(this.sv_23);this.sv_94=decodeURIComponent(this.sv_83(this.sv_24));this.sv_95=this.sv_83(this.sv_26);this.sv_96=this.sv_83(this.sv_27);this.sv_97=this.sv_83(this.sv_43);this.sv_98=this.sv_83(this.sv_35);this.sv_99=this.sv_83(this.sv_28);this.sv_100=this.sv_83(this.sv_29);this.sv_101=this.sv_83(this.sv_30);this.sv_102=this.sv_83(this.sv_31);this.sv_103=this.sv_83(this.sv_32);this.sv_104=this.sv_83(this.sv_33);this.sv_105=this.sv_83(this.sv_34);this.sv_106=this.sv_83(this.sv_36);this.sv_70=(this.sv_83(this.sv_47)==null)?'spinner':this.sv_83(this.sv_47);this.sv_1=this.sv_83(this.sv_48);this.sv_107=this.sv_83(this.sv_37);this.sv_108=this.sv_83(this.sv_40);this.sv_9=this.sv_83(this.sv_41);this.sv_10=this.sv_83(this.sv_42);this.sv_109=this.sv_83(this.sv_55);this.sv_110=this.sv_83(this.sv_44);this.sv_111=this.sv_83(this.sv_38);this.useOnPageWrapper=this.sv_83(this.useOnPageWrapperKey);this.optimizeForUser=this.sv_83(this.optimizeForUserKey);this.sv_112='/xapi';this.sv_113='/hqxapi';this.sv_114='/it';this.sv_115=this.sv_113+this.sv_114;this.sv_116=false;this.sv_117=null;this.sv_118=null;this.pageNumber='1';this.currentPage=0;this.pageSize='';this.sv_84=(this.sv_84===null)?'':this.sv_84;this.totalResults=0;this.sv_119=[];this.sv_120=[];this.programs=[];this.sv_4=false;this.setCtHandlers('.qsctCached');this.sv_121=null;this.sv_122=null;this.pages=null;this.sv_123=false;this.sv_124=false;this.sv_125=false;this.sv_12=false;this.sv_126='';this.sv_72='';this.sv_73='';this.sv_74='';this.sv_75='';this.sv_11='';this.jsonVersion=0;this.sv_127='userID';this.sv_128='';this.sv_129();this.trigger('QS.WidgetInstance:construct:out',this);},isAffiliate:function()
{return!!this.sv_117.getDataValues().AffiliateKey;},sv_129:function()
{if($.cookie(this.sv_81))
{this.sv_128=encodeURIComponent($.cookie(this.sv_81));}
if($.cookie(this.sv_62))
{this.sv_12=true;this.sv_11=$.cookie(this.sv_62);}
else
{$.cookie(this.sv_63,this.sv_64);this.sv_12=$.cookie(this.sv_63)==this.sv_64;$.cookie(this.sv_63,null);}},sv_83:function(key)
{if(typeof(this.sv_71[key])!=="undefined")
{return this.sv_71[key];}
else
{var el=$('#'+this.domId+'_'+key);if(el[0])
{if(el[0].className)
{return el[0].className;}}
if(el.className)
{return el.className;}}
return null;},sv_13:function()
{return this.sv_2?this.sv_2:'';},parseUrl:function()
{var urlParams={};var e,a=/\+/g,r=/([^&=]+)=?([^&]*)/g,d=function(s){return decodeURIComponent(s.replace(a," "));},q=window.location.search.substring(1);while(e=r.exec(q))
urlParams[d(e[1])]=d(e[2]);return urlParams;},shouldGetAdditionalDealerData:function()
{return(this.sv_109=='yes');},isRequestValid:function()
{return((this.sv_82!=null&&this.sv_85!=null&&this.sv_6!=null)||(this.sv_10!=null&&this.sv_9!=null));},populate:function(widgetJson)
{this.trigger('QS.WidgetInstance:populate:in',this);if($.isArray(widgetJson)&&(widgetJson[1]&&widgetJson[1].widgetInstance&&widgetJson[1].widgetInstance.contentType==this.sv_15&&widgetJson[1].widgetInstance.dataListingArr&&widgetJson[1].widgetInstance.dataListingArr.length>0)&&((this.sv_82!=null&&this.sv_85!=null&&this.sv_6!=null)||(this.sv_10!=null&&this.sv_9!=null)))
{this.trigger('QS.WidgetInstance:populate:in',this);if(widgetJson[0]&&widgetJson[0].jsonVersion&&widgetJson[0].jsonVersion!=="undefined")
{this.jsonVersion=widgetJson[0].jsonVersion;}
this.sv_116=true;var widgetInstance=widgetJson[1].widgetInstance;this.sv_6=widgetInstance.widgetInstanceKey;this.sv_118=widgetInstance.widgetInstanceName;this.pageNumber=widgetInstance.pageNumber;this.pageSize=widgetInstance.pageSize;this.totalResults=this.sv_120.length;_.each(widgetInstance.matchedServices,function(service)
{var matchedService=new QS.Service();matchedService.construct(service);this.sv_119.push(matchedService);},this);if(typeof widgetInstance.customParams!=="undefined")
{this.sv_126=widgetInstance.customParams;this.sv_72=(typeof widgetInstance.customParams.AreaOfInterest!=="undefined"?widgetInstance.customParams.AreaOfInterest:null);this.sv_73=(typeof widgetInstance.customParams.DegreeOfInterest!=="undefined"?widgetInstance.customParams.DegreeOfInterest:null);this.sv_74=(typeof widgetInstance.customParams.Audience!=="undefined"?widgetInstance.customParams.Audience:null);this.sv_75=(typeof widgetInstance.customParams.PortalServiceCode!=="undefined"?widgetInstance.customParams.PortalServiceCode:null);}
if(this.isJsonVersion1_1())
{if(widgetInstance.categoryKey)
{switch(widgetInstance.categoryKey)
{case this.categoryKeyB2B:this.populateB2BVendors(widgetInstance.dataListingArr);break;case this.categoryKeyHS:this.populateHSVendors(widgetInstance.dataListingArr);break;case this.categoryKeyMedical:this.populateMedicalVendors(widgetInstance.dataListingArr);break;default:this.populateEducationVendors(widgetInstance.dataListingArr);}}}
else
{this.populateEducationVendors(widgetInstance.dataListingArr);}
this.sv_122=this.sv_94;this.mergeSiblingVendors();this.pageNumber=widgetInstance.pageNumber;if(parseInt(widgetInstance.pageSize)>0)
{this.pageSize=parseInt(widgetInstance.pageSize);}
else if(this.getNumVendors()>0)
{this.pageSize=this.getNumVendors();}
else
{this.pageSize=1;}
this.totalResults=this.sv_120.length;this.populatePages();this.render();}
else
{if($.isArray(widgetJson)&&widgetJson[1]&&widgetJson[1].widgetInstance&&widgetJson[1].widgetInstance.contentType==this.sv_15&&widgetJson[1].widgetInstance.dataListingArr&&widgetJson[1].widgetInstance.dataListingArr.length==0)
{this.trigger('QS.WidgetInstance:dataListing:empty',this);}
this.sv_116=false;this.displayAndExit();}
this.trigger('QS.WidgetInstance:populate:out',this);},populateB2BVendors:function(dataListingArr)
{_.each(dataListingArr,function(listing)
{var vendor=new QS.B2BVendor();vendor.construct(listing,this);this.sv_120.push(vendor);},this);},populateEducationVendors:function(dataListingArr)
{_.each(dataListingArr,function(listing)
{var vendor=new QS.Vendor();vendor.construct(listing,this);this.sv_120.push(vendor);},this);},populateHSVendors:function(dataListingArr)
{_.each(dataListingArr,function(listing)
{var vendor=new QS.HSVendor();vendor.construct(listing,this);this.sv_120.push(vendor);},this);},populateMedicalVendors:function(dataListingArr)
{_.each(dataListingArr,function(listing)
{var vendor=new QS.MedicalVendor();vendor.construct(listing,this);this.sv_120.push(vendor);},this);},mergeSiblingVendors:function()
{this.trigger('QS.WidgetInstance:mergeSiblingVendors:in',this);var lastPosition=-1,firstSibling=null,vendor=null,sv_130=[],vendorKeysToRemove={},i=0,length=0;if(_.isNumber(this.sv_120.length))
{for(length=this.sv_120.length;i<length;i++)
{vendor=this.sv_120[i];if(lastPosition!==vendor.position)
{lastPosition=vendor.position;firstSibling=vendor;}
else
{if(vendor.position==lastPosition)
{vendor.sibling=true;vendor.firstSibling=firstSibling;firstSibling.siblings.push(vendor);firstSibling.sibling=true;vendorKeysToRemove[vendor.vendorKey]=true;vendorKeysToRemove.removed=true;}}}
if(vendorKeysToRemove.removed)
{for(i=0,length=this.sv_120.length;i<length;i++)
{vendor=this.sv_120[i];if(!vendorKeysToRemove[vendor.vendorKey])
{sv_130.push(vendor);}}
this.sv_120=sv_130;}}
this.trigger('QS.WidgetInstance:mergeSiblingVendors:out',this);},displayAndExit:function(request,status,error)
{this.trigger('QS.WidgetInstance:displayAndExit:in',this);this.display();this.trigger('QS.WidgetInstance:displayAndExit:out',this);return;},populateAdditionalData:function(additionalDataJson)
{this.trigger('QS.WidgetInstance:populateAdditionalData:in',this);this.trigger('QS.WidgetInstance:populateAdditionalData:out',this);},getAdditionalData:function(callback,pageNumber)
{this.trigger('QS.WidgetInstance:getAdditionalData:in',this);this.trigger('QS.WidgetInstance:getAdditionalData:out',this);},updateWidget:function()
{this.trigger('QS.WidgetInstance:updateWidget:in',this);this.sv_121=$('#'+this.domId+'_listing');if(this.isRequestValid())
{this.sv_117=new QS.XapiRequest();this.sv_117.setServiceName(this.sv_56);this.sv_117.setServiceMethod(this.sv_57);if(this.sv_9!=null)
{this.sv_117.setFilterCriteriaXml(this.sv_9);}
else
{this.sv_117.setFilterCriteria({sp_260880:this.sv_82,sp_260890:this.sv_85,sp_260910:this.sv_58,sp_260920:this.sv_6,sp_261250:this.sv_87});}
if(this.sv_10!=null)
{this.sv_117.setDataValuesXml(this.sv_10);if(this.optimizeForUser&&this.sv_128!=='')
{this.sv_117.setDataValue(this.sv_127,this.sv_128);}}
else
{this.sv_117.setDataValues({sp_260770:this.sv_60,sp_260780:this.sv_84,sp_260790:this.sv_59,sp_260800:this.pageNumber,sp_260820:this.sv_88,sp_260830:this.sv_89,sp_261170:this.sv_90,sp_loadAddlListingData:this.sv_91,sp_260840:this.sv_93,sp_matched:this.sv_111,ClientModel:this.sv_110,sp_260850:this.sv_95,sp_260860:this.sv_96,sp_260870:this.sv_97,sp_270390:this.sv_98,sp_261270:this.sv_99,sp_261260:this.sv_100,AreaOfInterest:(this.sv_104!=null)?this.sv_104:this.sv_101,DegreeOfInterest:(this.sv_103!=null)?this.sv_103:this.sv_102,filterDlrByState:this.sv_105,alphabet:this.sv_106,gibill:this.sv_107,yellowribbon:this.sv_108});}
this.trigger("QS.WidgetInstance:updateWidget:preAjax",this);$.ajax({url:this.sv_112,context:this,data:$.param(this.sv_117.getRequestObject()),processData:false,timeout:this.sv_66,success:this.populate,error:this.displayAndExit,cache:false});}
else
{this.displayAndExit();}
this.trigger('QS.WidgetInstance:updateWidget:out',this);},getVendors:function()
{return this.sv_120;},getNumVendors:function()
{return(this.data)?this.data.sv_120.length:this.sv_120.length;},getDealers:function()
{var dealers=[];_.each(this.sv_120,function(vendor)
{_.each(vendor.getDealers(),function(dealer)
{dealers.push(dealer)});});return dealers;},useXapiTracking:function()
{return(this.sv_94!==null);},getTrackingObj:function()
{return this.data?this.data.sv_7:this.sv_7;},removeCtHandlers:function(className)
{},getVendorByBluid:function(bluid)
{var theVendor=null;if(typeof bluid!=="undefined")
{_.each(this.getVendors(),function(vendor)
{if(vendor.BLUID===bluid)
{theVendor=vendor;}
else
{_.each(vendor.getSiblings(),function(sibling)
{if(sibling.BLUID===bluid)
{theVendor=sibling;}});}});}
return theVendor;},getVendorByKey:function(key)
{var theVendor=null;if(typeof key!=="undefined")
{_.each(this.getVendors(),function(vendor)
{if(vendor.vendorKey==key)
{theVendor=vendor;}
else
{_.each(vendor.getSiblings(),function(sibling)
{if(sibling.vendorKey==key)
{theVendor=sibling;}});}});}
return theVendor;},getTotalResults:function()
{return(this.data||this).getNumVendors();},getMatchedServices:function()
{var self=(this.data)?this.data:this;return self.sv_119;},getTag:function()
{if(this.sv_117.getDataValues().TAG)
{return this.sv_117.getDataValues().TAG;}
else if(this.sv_117.getDataValues().tag)
{return this.sv_117.getDataValues().tag;}
else
{return undefined;}},setCtHandlers:function(className)
{if(className!='')
{var ctElements=$(className,this.domElement);var theWidget=this;_.each(ctElements,function(ctElement)
{var bluid=ctElement.id;var classes=ctElement.className.split(/\s+/);_.each(classes,function(theClass)
{if(theClass.substring(0,theWidget.sv_61.length)==theWidget.sv_61)
{bluid=theClass.substring(theWidget.sv_61.length);}});var destinationHref=ctElement.href;if(this.getVendors().length>0)
{var vendor=this.getVendorByBluid(bluid);if(vendor!=null)
{if((vendor.isClickClient()&&className!='.qsctSite')||((vendor.getClientModel()===vendor.clientModelClickName||vendor.getClientModel()===vendor.clientModelDtspName)&&!vendor.hasSiblings()&&!vendor.isMergedSibling()))
{destinationHref=vendor.getClickThroughUrl(destinationHref);$(ctElement).attr('target','_blank');$(ctElement).attr('href',destinationHref);}
else
{if(destinationHref.indexOf('BLUID')<0)
{if(destinationHref.indexOf('?')>=0)
{destinationHref+='&BLUID='+bluid}
else
{destinationHref+='?BLUID='+bluid;}}
$(ctElement).attr('href',destinationHref);}}}},this);}},getBluids:function()
{var bluids=[];if(this.useXapiTracking())
{var sv_7=$.parseJSON(decodeURIComponent(this.sv_94));if(sv_7.listing)
{_.each(sv_7.listing,function(listing)
{if(listing.namedValues[2].name==this.sv_5)
{bluids.push(listing.namedValues[2].value);}},this);}}
else
{_.each(this.sv_120,function(sv_131)
{bluids.push(sv_131.BLUID);bluids=bluids.concat(sv_131.getSiblingBluids());},this);}
return bluids;},removeUpdatedWidgetListing:function()
{this.trigger('QS.WidgetInstance:removeUpdatedWidgetListing:in',this);if($('#'+this.domId+'_updated_listing').length)
{$('#'+this.domId+'_updated_listing').remove();}
this.trigger('QS.WidgetInstance:removeUpdatedWidgetListing:out',this);return;},restoreOnPageWidgetAndExit:function(request,status,error)
{this.trigger('QS.WidgetInstance:restoreOnPageWidgetAndExit:in',this);this.removeUpdatedWidgetListing();this.sv_121.appendTo(this.domElement);this.sv_94=this.sv_122;this.setCtHandlers('.qsctCached');this.domElement.show();this.qsit(this.domElement);this.trigger('QS.WidgetInstance:restoreOnPageWidgetAndExit:out',this);return;},display:function()
{this.trigger('QS.WidgetInstance:display:in',this);this.domElement.show();this.qsit(this.domElement);this.removeCtHandlers('.qsctCached');this.setCtHandlers('.qsct');this.setCtHandlers('.qsctSite');this.trigger('QS.WidgetInstance:display:out',this);},populatePages:function()
{if(this.pages===null)
{this.sv_8=(this.sv_8||this.getNumVendors());this.pages=[];if(this.getNumVendors()>this.sv_8)
{var pages=Math.ceil(this.getNumVendors()/this.sv_8);for(var page=0;page<pages;page++)
{var widgetPage=new QS.WidgetPage();widgetPage.construct(page,page*this.sv_8,this.sv_8,this);this.pages[page]=widgetPage;}}
else if(this.getNumVendors()>0)
{var widgetPage=new QS.WidgetPage();widgetPage.construct(0,0,this.sv_8,this);this.pages[0]=widgetPage;}}},getPageSize:function()
{return(this.data)?this.data.pageSize:this.pageSize;},getPages:function()
{return(this.data)?this.data.pages:this.pages;},getNumPages:function()
{return(this.data)?this.data.pages.length:this.pages.length;},getPageRange:function(range)
{var self=(this.data)?this.data:this;var widgetPages=self.getPages();var pageRangeBefore=new Array();var pageRangeAfter=new Array();var pageRange=[];pageRange.push(self.getWidgetPage());var pages=[];if(range>=0)
{var start=(self.currentPage-range<0)?0:self.currentPage-range;var end=(self.currentPage+range>(widgetPages.length-1))?(widgetPages.length-1):self.currentPage+range;for(var i=start;i<self.currentPage;i++)
{pageRangeBefore.push(widgetPages[i]);}
for(i=self.currentPage+1;i<=end;i++)
{pageRangeAfter.push(widgetPages[i]);}
pages=pageRangeBefore.concat(pageRange).concat(pageRangeAfter);}
return pages;},getWidgetPage:function(widgetPage)
{var whichPage=(widgetPage)?widgetPage:this.currentPage;return(this.pages!=null&&this.pages.length>0&&this.pages[whichPage])?this.pages[whichPage]:[];},getListingsPage:function(pageNumber)
{var whichPage=(pageNumber)?pageNumber:this.currentPage;var listingsData=this.sv_120;var page=[];var widgetPage=this.getWidgetPage(whichPage);if(widgetPage!=null)
{var start=widgetPage.offset;var end=start+parseInt(widgetPage.pageSize);for(var i=start;i<end;i++)
{if(listingsData[i])
{page.push(listingsData[i]);}}}
return page;},getExpandedListingsPage:function(pageNumber)
{var listings=this.getListingsPage(pageNumber);var expandedListings=[];_.each(listings,function(listing)
{expandedListings.push(listing);expandedListings=expandedListings.concat(listing.getSiblings());});return expandedListings;},gotoPageLink:function(event)
{event.preventDefault();var widget=event.data.widget;if(widget)
{widget.currentPage=parseInt(this.className.replace('pageNumberLink',''));widget.sv_124=false;widget.sv_125=false;widget.render();}},nextPage:function(event)
{var widget=event.data.widget;if(widget)
{widget.currentPage++;widget.sv_124=false;widget.sv_125=false;widget.render();}},previousPage:function(event)
{var widget=event.data.widget;if(widget)
{widget.currentPage--;widget.sv_124=false;widget.sv_125=false;widget.render();}},lastPage:function(event)
{var widget=event.data.widget;if(widget)
{widget.currentPage=widget.pages.length-1;widget.sv_124=false;widget.sv_125=false;widget.render();}},firstPage:function(event)
{var widget=event.data.widget;if(widget)
{widget.currentPage=0;widget.sv_124=false;widget.sv_125=false;widget.render();}},keyNavigation:function(event)
{var widget=event.data.widget;if(event.keyCode==37)
{if(!event.shiftKey)
{if(widget.currentPage>0)
{widget.previousPage(event);}}
else
{widget.firstPage(event);}}
else if(event.keyCode==39)
{if(!event.shiftKey)
{if(widget.currentPage<widget.pages.length-1)
{widget.nextPage(event);}}
else
{widget.lastPage(event);}}},setKeyboardHandlers:function(el)
{$(document).keydown({widget:this},this.keyNavigation);},setPaginationHandlers:function(el)
{var firstPageOn=true;var previousPageOn=true;var nextPageOn=true;var lastPageOn=true;if(this.currentPage==0)
{firstPageOn=false;previousPageOn=false;}
if(this.currentPage==1)
{firstPageOn=false;}
if(this.currentPage==this.pages.length-1)
{nextPageOn=false;lastPageOn=false;}
if(this.currentPage==this.pages.length-2)
{lastPageOn=false;}
var pages=this.getPages();for(var i=0;i<pages.length;i++)
{var page=pages[i];var pageLinks=$('.pageNumberLink'+page.pageNumber,el);_.each(pageLinks,function(pageLink)
{var link=$(pageLink);if(i==this.currentPage)
{var newLink=$('<span class="currentPage">'+link[0].innerHTML+'</span>')
link.replaceWith(newLink);}
else
{link.click({widget:this},this.gotoPageLink);}},this);}
var nextPageLinks=$('.nextPageLink',el);_.each(nextPageLinks,function(nextPageLink)
{if(nextPageOn)
{$(nextPageLink).click({widget:this},this.nextPage);}
else
{$(nextPageLink).remove();}},this);var previousPageLinks=$('.previousPageLink',el);_.each(previousPageLinks,function(previousPageLink)
{if(previousPageOn)
{$(previousPageLink).click({widget:this},this.previousPage);}
else
{$(previousPageLink).remove();}},this);var firstPageLinks=$('.firstPageLink',el);_.each(firstPageLinks,function(firstPageLink)
{if(firstPageOn)
{$(firstPageLink).click({widget:this},this.firstPage);}
else
{$(firstPageLink).remove();}},this);var lastPageLinks=$('.lastPageLink',el);_.each(lastPageLinks,function(lastPageLink)
{if(lastPageOn)
{$(lastPageLink).click({widget:this},this.lastPage);}
else
{$(lastPageLink).remove();}},this);},getImpressionBluids:function(pageNumber)
{var whichPage=(pageNumber)?pageNumber:this.currentPage;var bluids=[];var listings=this.getListingsPage(whichPage);var siblingBluids=[];_.each(listings,function(listing)
{bluids.push(listing.BLUID);bluids=bluids.concat(listing.getSiblingBluids());},this);return bluids;},getImpressionPixel:function()
{this.trigger("QS.WidgetInstance:getImpressionPixel:in",this);var sv_132=null,sv_133=null,bluids='',impressionPixel=$(),pixel=null,sv_134='';if(this.useXapiTracking())
{sv_134='y';var bluidArray=JSON.parse(decodeURIComponent(this.sv_83(this.sv_24)));if(_.isArray(bluidArray))
{bluids=bluidArray.join(',');}}
else
{sv_134='n';bluids=this.getImpressionBluids().join(',');}
if(bluids&&!this.getWidgetPage().impressionsLogged)
{pixel=document.createElement('img');impressionPixel=$(pixel);impressionPixel.attr('src',this.sv_115+'?'+$.param({ids:bluids,ca:sv_134,coo:(this.sv_12)?'y':'n'}))
impressionPixel.attr('height',1);impressionPixel.attr('width',1);impressionPixel.attr('class','impressionPixelImg');impressionPixel.attr('data-matchingRequest',encodeURIComponent(JSON.stringify(this.sv_117.getRequestObject())));impressionPixel.css({display:"none"});this.getWidgetPage().impressionsLogged=true;}
this.trigger("QS.WidgetInstance:getImpressionPixel:out",this);return impressionPixel;},qsit:function(elem)
{this.trigger("QS.WidgetInstance:qsit:in",this);this.getImpressionPixel().appendTo(elem);this.trigger("QS.WidgetInstance:qsit:out",this);},render:function()
{this.trigger('QS.WidgetInstance:render:in',this);if(this.sv_121!==null)
{this.sv_121.remove();}
var updatedWidget=$('#'+this.domId+'_updated_listing');try
{if(typeof this.cloneableWrapperElem==="undefined")
{if(this.useOnPageWrapper==='true')
{this.cloneableWrapperElem=this.sv_121.clone().empty();this.wrapperElem=this.cloneableWrapperElem.clone();this.wrapperElem.attr('id',this.domId+'_updated_listing');}
else
{this.wrapperElem=$('<div id="'+this.domId+'_updated_listing"/>');}}
else
{this.wrapperElem=this.cloneableWrapperElem.clone();}
var wrapperElem=this.wrapperElem;var headerTemplate=null;var footerTemplate=null;var listingTemplate=null;var renderedHeader=null;var renderedFooter=null;var renderedListing=null;if(typeof $.template[this.domId+'_listing_template']=="function")
{var listingData=this.getListingsPage();renderedListing=$.tmpl(this.domId+'_listing_template',listingData);}
else if((listingTemplate=$('#'+this.domId+'_listing_template')).length>0)
{var listingData=this.getListingsPage();renderedListing=listingTemplate.tmpl(listingData);}
if(typeof $.template[this.domId+'_header_template']=="function")
{renderedHeader=$.tmpl(this.domId+'_header_template',this);this.sv_124=true;}
else if((headerTemplate=$('#'+this.domId+'_header_template')).length>0&&!this.sv_124)
{renderedHeader=headerTemplate.tmpl(this);this.sv_124=true;}
if(typeof $.template[this.domId+'_footer_template']=="function")
{renderedFooter=$.tmpl(this.domId+'_footer_template',this);this.sv_124=true;}
else if((footerTemplate=$('#'+this.domId+'_footer_template')).length>0&&!this.sv_125)
{renderedFooter=footerTemplate.tmpl(this);this.sv_125=true;}
if(renderedHeader)
{renderedHeader.appendTo(wrapperElem);}
if(renderedListing)
{renderedListing.appendTo(wrapperElem);}
if(renderedFooter)
{renderedFooter.appendTo(wrapperElem);}
if(!this.sv_123)
{this.setKeyboardHandlers(wrapperElem);this.sv_123=true;}
this.setPaginationHandlers(wrapperElem);this.trigger("QS.WidgetInstance:render:postRender",this);if(updatedWidget[0])
{updatedWidget.replaceWith(wrapperElem);}
else
{wrapperElem.appendTo(this.domElement);}}
catch(e)
{if(e instanceof QS.DataUnavailableException)
{return;}
else
{this.restoreOnPageWidgetAndExit();}}
this.sv_94=null;this.qsit(wrapperElem);if(this.updatedWidget&&this.wrapperElem&&this.updatedWidget[0])
{this.updatedWidget.replaceWith(this.wrapperElem);}
else if(this.wrapperElem)
{this.wrapperElem.appendTo(this.domElement);}
this.display();this.trigger('QS.WidgetInstance:render:out',this);},getAjaxLoadEffect:function()
{var self=this.data?this.data:this;return self.sv_70;},getJsonVersion:function()
{return this.jsonVersion;},isJsonVersion1_1:function()
{return true;},setMD:function(value)
{this.sv_90=value;return this;},setAFL:function(value)
{this.sv_95=value;return this;},setCT:function(value)
{this.sv_93=value;return this;},setDOI:function(value)
{this.sv_103=value;return this;},setPU:function(value)
{this.sv_85=value;return this;},setSC:function(value)
{this.sv_88=value;return this;},setFDBSY:function(value)
{this.sv_34=value;return this;},setEDV:function(value)
{this.sv_10=value;return this;},getCustomParam:function(param)
{var self=this.data?this.data:this;if(typeof param!=="undefined")
{if(typeof self.sv_126[param]!=="undefined")
{return self.sv_126[param];}}
return'';},getCustomParamAreaOfInterest:function()
{var self=this.data?this.data:this;if(self.sv_72!==null)
{return self.sv_72;}
else
{return'';}},getCustomParamDegreeOfInterest:function()
{var self=this.data?this.data:this;if(self.sv_73!==null)
{return self.sv_73;}
else
{return'';}},getCustomParamAudience:function()
{var self=this.data?this.data:this;if(self.sv_74!==null)
{return self.sv_74;}
else
{return'';}},getCustomParamPortalServiceCode:function()
{var self=this.data?this.data:this;if(self.sv_75!==null)
{return self.sv_75;}
else
{return'';}},getXapiRequest:function()
{var self=this.data?this.data:this;if(self.sv_117!==null)
{return self.sv_117;}
else
{return'';}}});QS.Attributes=Backbone.Model.extend({construct:function(attributesObj)
{eventProxy.bind(this);this.trigger('QS.Attributes:construct:in',this);this.attributeNames=[];_.each(attributesObj,function(value,attribute)
{this.attributeNames[this.attributeNames.length]=attribute;this[attribute]=value;},this);this.trigger('QS.Attributes:construct:out',this);},getAll:function()
{var attributes=[];_.each(this.attributeNames,function(name)
{attributes[attributes.length]=this[name];},this);return attributes;}});}).call(this);;document.write('<style type="text/css">html.js .cachedWidget { display: none; }</style>');document.documentElement.className+=' js';$(document).ready(function($)
{QS.ih();$('.cachedWidget').each(function(){var widget=$(this);widget.hide();var widgetInstance=new QS.WidgetInstance();widgetInstance.construct(widget);try
{widgetInstance.updateWidget();}
catch(e)
{widgetInstance.restoreOnPageWidgetAndExit();}});});$.noConflict(true);_.noConflict();Backbone.noConflict();