                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                


(function($){


$.Url=function(url){
var me=this;

var _normalize=function(input){
if(input==null||input===""){
return"";
}

return input.toString();
};


var _protocol="";

this.protocol=function(value){
if(typeof value!="undefined"){
_protocol=_normalize(value);

if(_protocol){
if(_protocol.charAt(_protocol.length-1)!=":"){
_protocol+=":";
}
}
}else{
return _protocol;
}
};


var _hostname="";

this.hostname=function(value){
if(typeof value!="undefined"){
_hostname=_normalize(value);
}else{
return _hostname;
}
};

var _port="";


this.port=function(value){
if(typeof value!="undefined"){
_port=_normalize(value);
}else{
return _port;
}
};



this.host=function(value){
if(typeof value!="undefined"){
value=_normalize(value);


if(value){
var colonPos=value.indexOf(":");
if(colonPos!=-1){
_hostname=value.substr(0,colonPos);
_port=value.substr(colonPos+1,value.length);
}else{
_hostname=_normalize(value);
_port="";
}
}else{
_hostname="";
_port="";
}
}else{
var out=_hostname;
if(_port){
out+=":"+_port;
}
return out;
}
};

var _pathname="";


this.pathname=function(value){
if(typeof value!="undefined"){
_pathname=_normalize(value);
}else{
return _pathname;
}
};


this.queryString={};


this.search=function(value){
if(typeof value!="undefined"){
value=_normalize(value);
me.queryString=$.deparam(value);
}else{
var qs=$.param(me.queryString);
return qs?"?"+qs:qs;
}
};


var _hash="";

this.hash=function(value){
if(typeof value!="undefined"){
value=_normalize(value);


if(value.length>0){
if(value.charAt(0)!="#"){
value="#"+value;
}
}
_hash=value;
}else{
return _hash;
}
};

var load=function(url){
var nextPartPos;
var temp=url;


if(temp.search(/https\:\/\/+/i)===0)
{
_protocol="https:";
temp=url.substr(8);
}else if(temp.search(/http\:\/\/+/i)===0)
{
_protocol="http:";
temp=url.substr(7);
}

if(temp.length===0){
return;
}


if(_protocol!==""){

nextPartPos=temp.search(/[\/\?\#]/i);
if(nextPartPos==-1){
me.host(temp);
return;
}

me.host(temp.substring(0,nextPartPos));
temp=temp.substr(nextPartPos);
}

if(temp.length===0){
return;
}

nextPartPos=temp.search(/[\?\#]/i);


if(nextPartPos!==0){
if(nextPartPos==-1){
_pathname=temp;
return;
}

_pathname=temp.substr(0,nextPartPos);
temp=temp.substr(nextPartPos);
}

if(temp.length===0){
return;
}



if(temp.indexOf("?")===0){
nextPartPos=temp.indexOf("#");

if(nextPartPos==-1){
me.queryString=$.deparam(temp.substr(1));
temp="";
}else{
me.queryString=$.deparam(temp.substring(1,nextPartPos));
temp=temp.substr(nextPartPos);
}
}

if(temp.length===0){
return;
}


if(temp.indexOf("#")===0){
_hash=temp;
}
};


this.toString=function(){
var url="";
var host=me.host();
if(host){
url=(_protocol||"http:")+"//"+me.host();
}
return url+me.pathname()+me.search()+me.hash();
};


this.get=function(key,defaultValue){
if(!me.queryString.hasOwnProperty(key)){
return defaultValue;
}

return _normalize(me.queryString[key]);
};


this.set=function(key,value){
if(key==null||key===""){
throw new Error("Invalid key: "+key);
}

me.queryString[key]=value;
};


this.remove=function(key){
delete me.queryString[key];
};


this.getItemOrDefault=this.get;
this.getOrDefault=this.get;
this.getItem=this.get;
this.setItem=this.set;
this.removeItem=this.remove;

load(url?url.toString():"");
};

})(jQuery);
