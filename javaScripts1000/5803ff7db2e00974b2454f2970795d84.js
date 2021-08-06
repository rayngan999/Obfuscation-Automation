                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                (function(_,Backbone){





if(window._skipLoad&&window._skipLoad.backbone){return;}




if(typeof require!=='undefined'){
_=_||require('underscore');
Backbone=Backbone||require('backbone');
}

var queryStringParam=/^\?(.*)/,
optionalParam=/\((.*?)\)/g,
namedParam=/(\(\?)?:\w+/g,
splatParam=/\*\w+/g,
escapeRegExp=/[\-{}\[\]+?.,\\\^$|#\s]/g,
queryStrip=/(\?.*)$/,
fragmentStrip=/^([^\?]*)/,
hasQueryString=/(\?)[\w-]+=/i,
namesPattern=/[\:\*]([^\:\?\/]+)/g;
Backbone.Router.arrayValueSplit='|';

var _getFragment=Backbone.History.prototype.getFragment;

_.extend(Backbone.History.prototype,{
getFragment:function(fragment,forcePushState,excludeQueryString){
fragment=_getFragment.apply(this,arguments);
if(excludeQueryString){
fragment=fragment.replace(queryStrip,'');
}else if(!hasQueryString.test(fragment)){







if(this._hasPushState||!this._wantsHashChange||forcePushState){
fragment+=this.location.search;
}else if(hasQueryString.test(this.location.hash)){
var match=this.location.hash.match(queryStrip);
if(match){
fragment+=match[1];
}
}
}
return fragment;
},



getQueryParameters:function(fragment,forcePushState){
fragment=_getFragment.apply(this,arguments);

var queryString=fragment.replace(fragmentStrip,'');
var match=queryString.match(queryStringParam);
if(match){
queryString=match[1];
var rtn={};
iterateQueryString(queryString,function(name,value){




value=decodeURIComponent(value);

if(!rtn[name]){
rtn[name]=value;
}else if(_.isString(rtn[name])){
rtn[name]=[rtn[name],value];
}else{
rtn[name].push(value);
}
});
return rtn;
}else{

return{};
}
}
});

_.extend(Backbone.Router.prototype,{
initialize:function(options){
this.encodedSplatParts=options&&options.encodedSplatParts;
},

getFragment:function(fragment,forcePushState,excludeQueryString){
fragment=_getFragment.apply(this,arguments);
if(excludeQueryString){
fragment=fragment.replace(queryStrip,'');
}
return fragment;
},

_routeToRegExp:function(route){
var splatMatch=(splatParam.exec(route)||{index:-1}),
namedMatch=(namedParam.exec(route)||{index:-1}),
paramNames=route.match(namesPattern)||[];

route=route.replace(escapeRegExp,'\\$&')
.replace(optionalParam,'(?:$1)?')
.replace(namedParam,function(match,optional){
return optional?match:'([^\\/\\?]+)';
})
.replace(splatParam,'([^\?]*?)');
route+='([\?]{1}.*)?';
var rtn=new RegExp('^'+route+'$');


if(splatMatch.index>=0){

if(namedMatch>=0){

rtn.splatMatch=splatMatch.index-namedMatch.index;
}else{
rtn.splatMatch=-1;
}
}
rtn.paramNames=_.map(paramNames,function(name){return name.substring(1);});
rtn.namedParameters=this.namedParameters;

return rtn;
},





_extractParameters:function(route,fragment){
var params=route.exec(fragment).slice(1),
namedParams={};


var match=params.length&&params[params.length-1]&&params[params.length-1].match(queryStringParam);
if(match){
var queryString=match[1];
var data={};
if(queryString){
var self=this;
iterateQueryString(queryString,function(name,value){
self._setParamValue(name,value,data);
});
}
params[params.length-1]=data;
_.extend(namedParams,data);
}


var length=params.length;
if(route.splatMatch&&this.encodedSplatParts){
if(route.splatMatch<0){

return params;
}else{
length=length-1;
}
}

for(var i=0;i<length;i++){
if(_.isString(params[i])){
params[i]=Backbone.Router.decodeParams?decodeURIComponent(params[i]):params[i];
if(route.paramNames.length>=i-1){
namedParams[route.paramNames[i]]=params[i];
}
}
}

return(Backbone.Router.namedParameters||route.namedParameters)?[namedParams]:params;
},




_setParamValue:function(key,value,data){

var parts=key.split('.');
var _data=data;
for(var i=0;i<parts.length;i++){
var part=parts[i];
if(i===parts.length-1){

_data[part]=this._decodeParamValue(value,_data[part]);
}else{
_data=_data[part]=_data[part]||{};
}
}
},






_decodeParamValue:function(value,currentValue){

var splitChar=Backbone.Router.arrayValueSplit;
if(value.indexOf(splitChar)>=0){
var values=value.split(splitChar);

for(var i=values.length-1;i>=0;i--){
if(!values[i]){
values.splice(i,1);
}else{
values[i]=decodeURIComponent(values[i]);
}
}
return values;
}
if(!currentValue){
return decodeURIComponent(value);
}else if(_.isArray(currentValue)){
currentValue.push(decodeURIComponent(value));
return currentValue;
}else{
return[currentValue,decodeURIComponent(value)];
}
},




toFragment:function(route,queryParameters){
if(queryParameters){
if(!_.isString(queryParameters)){
queryParameters=this._toQueryString(queryParameters);
}
if(queryParameters){
route+='?'+queryParameters;
}
}
return route;
},




_toQueryString:function(val,namePrefix){
var splitChar=Backbone.Router.arrayValueSplit;
function encodeSplit(val){return val.replace(splitChar,encodeURIComponent(splitChar));}

if(!val)return'';
namePrefix=namePrefix||'';
var rtn='';
for(var name in val){
var _val=val[name];
if(_.isString(_val)||_.isNumber(_val)||_.isBoolean(_val)||_.isDate(_val)){

_val=this._toQueryParam(_val);
if(_.isBoolean(_val)||_.isNumber(_val)||_val){
rtn+=(rtn?'&':'')+this._toQueryParamName(name,namePrefix)+'='+encodeSplit(encodeURIComponent(_val));
}
}else if(_.isArray(_val)){

var str='';
for(var i in _val){
var param=this._toQueryParam(_val[i]);
if(_.isBoolean(param)||param){
str+=splitChar+encodeSplit(param);
}
}
if(str){
rtn+=(rtn?'&':'')+this._toQueryParamName(name,namePrefix)+'='+str;
}
}else{

var result=this._toQueryString(_val,this._toQueryParamName(name,namePrefix,true));
if(result){
rtn+=(rtn?'&':'')+result;
}
}
}
return rtn;
},







_toQueryParamName:function(name,prefix,isPrefix){
return(prefix+name+(isPrefix?'.':''));
},




_toQueryParam:function(param){
if(_.isNull(param)||_.isUndefined(param)){
return null;
}
return param;
}
});

function iterateQueryString(queryString,callback){
var keyValues=queryString.split('&');
_.each(keyValues,function(keyValue){
var i=keyValue.indexOf('=');
var arr=[keyValue.slice(0,i),keyValue.slice(i+1)];
if(arr.length>1){
callback(arr[0],arr[1]);
}
});
}

})(typeof _==='undefined'?null:_,typeof Backbone==='undefined'?null:Backbone);