                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
(function(window,$){
var _currentScripts;



$.fn.partialLoadHtml=function(html,uniqueScripts,target){

var scriptFunction=function(i,script){
if(script.src){

if(isScriptUnique(script.src)){
uniqueScripts.push(script);
}
}else{

uniqueScripts.push(script);
}
};
this.each(function(i,el){
loadHtml(i,el,html,target,scriptFunction);
});
return this;
};

$.fn.partialLoad=function(url,target,data,callback){

var type="GET";
var response;



if(jQuery.isFunction(target)){
callback=target;
target=undefined;
}else if(data){

if(jQuery.isFunction(data)){
callback=data;
data=undefined;
}

else if(typeof data==="object"){
data=jQuery.param(data,jQuery.ajaxSettings.traditional);
type="POST";
}
}

var self=this;




$.ajax({
url:url,
type:type,
dataType:"html",
data:data
}).done(function(responseText){

response=arguments;


var scriptFunction=function(i,script){
if(script.src){

if(isScriptUnique(script.src)){
$.ajax({
type:"GET",
global:false,
url:script.src,
async:false,
dataType:"script"
});
}
}else{

$.globalEval((script.text||script.textContent||script.innerHTML||"").replace(rcleanScript,"/*$0*/"));
}
};

self.each(function(i,el){
loadHtml(i,el,responseText,target,scriptFunction);
});

}).complete(callback&&function(jqXHR,status){
self.each(callback,response||[jqXHR.responseText,status,jqXHR]);
});

return this;
};

var loadHtml=function(i,el,responseText,target,scriptFunction){
var $el=$(el);
var scripts=[];
var fragment=getFragmentAndScripts(responseText,target,$el,scripts);


try{

$el.html(fragment);

if(scripts.length){
$.each(scripts,scriptFunction);
}
}catch(e){

}
};

var isScriptUnique=function(src){
var srcLower=src.toLowerCase();



if(!_currentScripts){
_currentScripts={};

var currentScripts=document.getElementsByTagName("SCRIPT");
for(var i=0;i<currentScripts.length;i++){
if(currentScripts[i].src){
_currentScripts[currentScripts[i].src.toLowerCase()]=true;
}
}
}


if(_currentScripts[srcLower]){
return false;
}

_currentScripts[srcLower]=true;

return true;
};

var _currentStylesheets;

var isStylesheetUnique=function(href){
var hrefLower=href.toLowerCase();



if(!_currentStylesheets){
_currentStylesheets={};

var currentStylesheets=document.getElementsByTagName("LINK");
for(var i=0;i<currentStylesheets.length;i++){
if(currentStylesheets[i].href){
_currentStylesheets[currentStylesheets[i].href.toLowerCase()]=true;
}
}
}


if(_currentStylesheets[hrefLower]){
return false;
}

_currentStylesheets[hrefLower]=true;

return true;
};

var rcleanScript=/^\s*<!(?:\[CDATA\[|\-\-)/;

var getFragmentAndScripts=function(responseText,selector,context,scripts){
var $target;

if(selector){

var $temp=$("<div>");



$temp[0].innerHTML=responseText;

$target=$temp.find(selector);

$target.find("script").map(function(i,elem){
scripts.push(elem);
});

}else{



if(compareVersion(jqueryVersion(),[1,9,0])>=0){
context=context[0].ownerDocument;
}


var fragment=$.buildFragment([responseText],context,scripts);

$target=fragment.fragment||fragment;
}

if(scripts.length){
$.each(scripts,function(i,elem){
if(elem.parentNode){
elem.parentNode.removeChild(elem);
}
});
}




var REMOVE_LIST={
META:true,
LINK:true,
NOSCRIPT:true
};

var nodes=$target.jquery?$target:$target.childNodes;

if(nodes){
for(var i=nodes.length-1;i>=0;i--){
var child=nodes[i];

if(REMOVE_LIST[child.tagName]){


if(child.tagName=="LINK"&&child.rel.toLowerCase()=="stylesheet"&&child.href){
if(isStylesheetUnique(child.href)){
continue;
}
}

$target.removeChild(child);
}
}
}

return $target;
};

function jqueryVersion(){
return $.map(
$.fn.jquery.split("."),
function(value){
return parseInt(value,10);
});
}

function compareVersion(v1,v2){
for(var i=0;i<3;i++){
if(v1[i]!=v2[i]){
return(v1[i]>v2[i])?1:-1;
}
}

return 0;
}

})(window,jQuery);
