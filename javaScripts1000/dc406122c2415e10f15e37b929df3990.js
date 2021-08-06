                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
(function($){

$.cookies={};






var _cookieEncode=function(sText){
if(!sText){
return"";
}else{
sText=sText.toString();
}


sText=encodeURIComponent(sText);


sText=sText.replace(/\+/gi,"%2B").replace(/\%20/gi,"+");


return sText;
};





var _cookieDecode=function(sText){
if(!sText){
return"";
}else{
sText=sText.toString();
}


sText=sText.replace(/\+/gi,"%20").replace(/\%2B/gi,"+");


try{
return decodeURIComponent(sText);
}catch(ex){


return sText;
}

};

var _defaultPermanentDate=function(){
var d=new Date();
d.setFullYear(d.getFullYear()+1);
return d.toUTCString();
};

var _defaults={
domain:null,
path:"/",
permanentDate:_defaultPermanentDate(),
watcher:$.noop
};

var _settings=_defaults;

$.cookies.setDefaults=function(settings){
_settings=$.extend({},_defaults,settings);
};

var _getDefault=function(key,overrideValue){
if(overrideValue){
return overrideValue;
}

return _settings[key];
};



$.cookies.enabled=function(){
$.cookies.set("cookietest","value");
if($.cookies.get("cookietest")=="value"){
$.cookies.remove("cookietest");
return true;
}else{
return false;
}
};





$.cookies.get=function(name,subCookie){
var cookies=new Cookies();
var cookie=cookies[name];
if(cookie){
if(subCookie){
if(cookie.subCookies){
return cookie.subCookies[subCookie]||null;
}

return null;
}

if(cookie.subCookies){
return cookie.subCookies;
}else{
return cookie.value||"";
}
}

return null;
};







$.cookies.set=function(nameOrData,value,domain,permanent,clearExistingSubCookies){
var name=nameOrData;
var path;

if(typeof(nameOrData)=="object"){
name=nameOrData.name;
value=nameOrData.value;
domain=nameOrData.domain;
permanent=nameOrData.permanent;
path=nameOrData.path;
clearExistingSubCookies=nameOrData.clearExistingSubCookies||nameOrData.clearExisting;
}


var subCookies;
if(typeof(value)=="object"&&value!==null){
subCookies=value;
value=null;
}


var cookie=(new Cookies())[name];
if(!cookie){
cookie=new Cookie();
cookie.name=name;
}

cookie.value=value;

if(subCookies){
if(clearExistingSubCookies||!cookie.subCookies){
cookie.subCookies=subCookies;
}else{

for(var subCookie in subCookies){
if(subCookies.hasOwnProperty(subCookie)){
cookie.subCookies[subCookie]=subCookies[subCookie];
}
}
}
}

cookie.domain=_getDefault("domain",domain);
cookie.path=_getDefault("path",path);
cookie.isPermanent=!!permanent;

cookie.save();
};



$.cookies.remove=function(name,domain,path){
var cookie=_cookieEncode(name)+"=a; path="+_getDefault("path",path)+"; expires=Wed, 17 Jan 1979 07:01:00 GMT";

domain=_getDefault("domain",domain);
if(domain){
cookie+="; domain="+domain;
}

_settings.watcher(cookie);

document.cookie=cookie;
};



var Cookies=function(){
var me=this;
var cookie=document.cookie.toString();
var cookieArray=cookie.split(";");

var iLen=cookieArray.length;
for(var i=0;i<iLen;i++){
var oCookie=new Cookie();
oCookie.parse(cookieArray[i]);
if(oCookie.name){
me[oCookie.name]=oCookie;
}
}
};



var Cookie=function(){
var me=this;


this.name=null;


this.subCookies=null;



this.value=null;



this.domain=null;


this.path=null;


this.isPermanent=false;

var _validateName=function(){
if(!me.name){
throw new Error("Cookie: Cookie name is null.");
}
};




this.serialize=function(){
_validateName();

var cookie=_cookieEncode(me.name)+"="+_getEncodedValue();

cookie+="; path="+_getDefault("path",this.path);

var domain=_getDefault("domain",me.domain);
if(domain){
cookie+="; domain="+domain;
}

if(me.isPermanent){
cookie+="; expires="+_getDefault("permanentDate");
}

return cookie;
};



this.save=function(){
_validateName();

var cookie=me.serialize();
_settings.watcher(cookie);

document.cookie=cookie;
};




this.parse=function(sUnparsedValue){
if(!sUnparsedValue){
return;
}


sUnparsedValue=sUnparsedValue.replace(/^\s*(.*?)\s*$/,"$1");


var iPosEquals=sUnparsedValue.indexOf("=");
if(iPosEquals<=0){
return;
}

me.name=_cookieDecode(sUnparsedValue.substr(0,iPosEquals));

var sValue=sUnparsedValue.substr(iPosEquals+1);
if(sValue.indexOf("=")==-1){
me.value=_cookieDecode(sValue);
return;
}

me.subCookies={};

var aSubCookies=sValue.split("&");
var iLen=aSubCookies.length;
for(var i=0;i<iLen;i++){
var aSubCookie=aSubCookies[i].split("=");
if(aSubCookie.length!=2){
me.subCookies=null;
return;
}else{
me.subCookies[_cookieDecode(aSubCookie[0])]=_cookieDecode(aSubCookie[1]);
}
}
};



var _getEncodedValue=function(){
if(me.subCookies){
var aOut=[];
for(var sSub in me.subCookies){
aOut.push(_cookieEncode(sSub)+"="+_cookieEncode(me.subCookies[sSub]));
}
return aOut.join("&");
}else{
return _cookieEncode(me.value);
}
};

};

})(jQuery);

jQuery.cookies.setDefaults({domain:window._cookieDomain});
