                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                /*! 
 * jQuery-ajaxTransport-XDomainRequest - v1.0.4 - 2015-03-05 
 * https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest 
 * Copyright (c) 2015 Jason Moon (@JSONMOON) 
 * Licensed MIT (/blob/master/LICENSE.txt) 
 */

(function(factory){
if(typeof define==='function'&&define.amd){

define(['jquery'],factory);
}else if(typeof exports==='object'){

module.exports=factory(require('jquery'));
}else{

factory(jQuery);
}
}(function($){


if($.support.cors||!$.ajaxTransport||!window.XDomainRequest){
return $;
}

var httpRegEx=/^(https?:)?\/\//i;
var getOrPostRegEx=/^get|post$/i;
var sameSchemeRegEx=new RegExp('^(\/\/|'+location.protocol+')','i');


$.ajaxTransport('* text html xml json',function(options,userOptions,jqXHR){


if(!options.crossDomain||!options.async||!getOrPostRegEx.test(options.type)||!httpRegEx.test(options.url)||!sameSchemeRegEx.test(options.url)){
return;
}

var xdr=null;

return{
send:function(headers,complete){
var postData='';
var userType=(userOptions.dataType||'').toLowerCase();

xdr=new XDomainRequest();
if(/^\d+$/.test(userOptions.timeout)){
xdr.timeout=userOptions.timeout;
}

xdr.ontimeout=function(){
complete(500,'timeout');
};

xdr.onload=function(){
var allResponseHeaders='Content-Length: '+xdr.responseText.length+'\r\nContent-Type: '+xdr.contentType;
var status={
code:200,
message:'success'
};
var responses={
text:xdr.responseText
};
try{
if(userType==='html'||/text\/html/i.test(xdr.contentType)){
responses.html=xdr.responseText;
}else if(userType==='json'||(userType!=='text'&&/\/json/i.test(xdr.contentType))){
try{
responses.json=$.parseJSON(xdr.responseText);
}catch(e){
status.code=500;
status.message='parseerror';

}
}else if(userType==='xml'||(userType!=='text'&&/\/xml/i.test(xdr.contentType))){
var doc=new ActiveXObject('Microsoft.XMLDOM');
doc.async=false;
try{
doc.loadXML(xdr.responseText);
}catch(e){
doc=undefined;
}
if(!doc||!doc.documentElement||doc.getElementsByTagName('parsererror').length){
status.code=500;
status.message='parseerror';
throw'Invalid XML: '+xdr.responseText;
}
responses.xml=doc;
}
}catch(parseMessage){
throw parseMessage;
}finally{
complete(status.code,status.message,responses,allResponseHeaders);
}
};


xdr.onprogress=function(){};
xdr.onerror=function(){
complete(500,'error',{
text:xdr.responseText
});
};

if(userOptions.data){
postData=($.type(userOptions.data)==='string')?userOptions.data:$.param(userOptions.data);
}
xdr.open(options.type,options.url);
xdr.send(postData);
},
abort:function(){
if(xdr){
xdr.abort();
}
}
};
});

return $;

}));