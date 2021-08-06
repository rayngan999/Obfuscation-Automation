                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                



(function(window,$){

var msJsonSanitizer=function(key,value){

if(typeof(value)=="string"){
return msJsonDateOnlySanitizer(key,value);
}else if(typeof(value)=="object"){


if(value&&value.__type){
delete value.__type;
}
}

return value;
};


var msJsonDateOnlySanitizer=function(key,value){
if(typeof(value)=="string"){



if(!$.parseMsJSON.isNumericString(value)){
var date=Date.parseISO(value)||
Date.parseMsDate(value)||
(value.indexOf("GMT")>=0?Date.parse(value):NaN);
if(!isNaN(date)){
return new Date(date);
}
}
}

return value;
};


$.parseMsJSON=function(text,preserveType){
if(!text){
return{};
}

var json=JSON.parse(text,preserveType?msJsonDateOnlySanitizer:msJsonSanitizer);

if(!json){
return{};
}



return typeof json.d!="undefined"?json.d:json;
};

$.parseMsJSON.isNumericString=function(value){
return new RegExp(/^-?[0-9]+\.?[0-9]*$/).test(value);
};


var recurseJSON=function(holder,key,reviver){
var k,v,value=holder[key];
if(value&&typeof value=="object"){
for(k in value){
if(Object.prototype.hasOwnProperty.call(value,k)){
v=recurseJSON(value,k,reviver);
if(v!==undefined){
value[k]=v;
}else{
delete value[k];
}
}
}
}

return reviver.call(holder,key,value);
};


$.recurseJSON=function(json,reviver){
return recurseJSON({
"":json
},"",reviver);
};


$.reviveMsJSON=function(json,datesOnly){
return $.recurseJSON(json,datesOnly?msJsonDateOnlySanitizer:msJsonSanitizer);
};

var AJAX_SETTINGS_DEFAULTS={
dataType:"json",
type:"post",
contentType:"application/json; charset=utf-8",
converters:{
"text json":$.parseMsJSON
}
};

var reISO=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/;


$.stringifyMsDate=function(key,value){
if(typeof value=="string"){
var a=reISO.exec(value);
if(a){
var val="/Date("+new Date(Date.UTC(+a[1],+a[2]-1,+a[3],+a[4],+a[5],+a[6])).getTime()+"-0000)/";

this[key]=val;
return val;
}
}
return value;
};




$.msAjax=function(url,settings){
if(!settings){
settings={};
}

if(typeof url=="object"){
settings=url;
}else if(typeof url=="string"){
settings.url=url;
}


if(!settings.url){
throw new Error("$.msAjax: url not specified");
}


if(settings.data){
settings.data=JSON.stringify(settings.data,$.stringifyMsDate);
}


if(settings.methodName){
settings.url+="/"+settings.methodName;
}

var coalescedSettings={};
$.extend(true,coalescedSettings,AJAX_SETTINGS_DEFAULTS,settings);


if(coalescedSettings.async===false){
var xhr=$.ajax(coalescedSettings);
return $.parseMsJSON(xhr.responseText,coalescedSettings.preserveType);
}

return $.ajax(coalescedSettings);
};

$.ajaxAsmx=$.msAjax;
$.ajaxWcf=$.msAjax;


})(window,jQuery);
