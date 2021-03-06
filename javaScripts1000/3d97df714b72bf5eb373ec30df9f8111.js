                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                


var amplify;
/*! 
 * Amplify Store - Persistent Client-Side Storage 1.0.0 
 *  
 * Copyright 2011 appendTo LLC. (http://appendto.com/team) 
 * Dual licensed under the MIT or GPL licenses. 
 * http://appendto.com/open-source-licenses 
 *  
 * http://amplifyjs.com 
 */

(function(amplify,undefined){

var store=amplify.store=function(key,value,options,type){
var type=store.type;
if(options&&options.type&&options.type in store.types){
type=options.type;
}
return store.types[type](key,value,options||{});
};

store.types={};
store.type=null;
store.addType=function(type,storage){
if(!store.type){
store.type=type;
}

store.types[type]=storage;
store[type]=function(key,value,options){
options=options||{};
options.type=type;
return store(key,value,options);
};
}
store.error=function(){
return"amplify.store quota exceeded";
};

var rprefix=/^__amplify__/;
function createFromStorageInterface(storageType,storage){
store.addType(storageType,function(key,value,options){
var storedValue,parsed,i,remove,
ret=value,
now=(new Date()).getTime();

if(!key){
ret={};
remove=[];
i=0;
try{





key=storage.length;

while(key=storage.key(i++)){
if(rprefix.test(key)){
parsed=JSON.parse(storage.getItem(key));
if(parsed.expires&&parsed.expires<=now){
remove.push(key);
}else{
ret[key.replace(rprefix,"")]=parsed.data;
}
}
}
while(key=remove.pop()){
storage.removeItem(key);
}
}catch(error){}
return ret;
}


key="__amplify__"+key;

if(value===undefined){
storedValue=storage.getItem(key);
parsed=storedValue?JSON.parse(storedValue):{expires:-1};
if(parsed.expires&&parsed.expires<=now){
storage.removeItem(key);
}else{
return parsed.data;
}
}else{
if(value===null){
storage.removeItem(key);
}else{
parsed=JSON.stringify({
data:value,
expires:options.expires?now+options.expires:null
});
try{
storage.setItem(key,parsed);

}catch(error){

store[storageType]();
try{
storage.setItem(key,parsed);
}catch(error){
throw store.error();
}
}
}
}

return ret;
});
}



for(var webStorageType in{localStorage:1,sessionStorage:1}){

try{
if(window[webStorageType].getItem){
createFromStorageInterface(webStorageType,window[webStorageType]);
}
}catch(e){}
}




if(window.globalStorage){

try{
createFromStorageInterface("globalStorage",
window.globalStorage[window.location.hostname]);



if(store.type==="sessionStorage"){
store.type="globalStorage";
}
}catch(e){}
}




(function(){



if(store.types.localStorage){
return;
}


var div=document.createElement("div"),
attrKey="amplify";
div.style.display="none";
document.getElementsByTagName("head")[0].appendChild(div);
if(div.addBehavior){
try
{
div.addBehavior("#default#userdata");
}
catch(ex)
{

return;
}

store.addType("userData",function(key,value,options){
div.load(attrKey);
var attr,parsed,prevValue,i,remove,
ret=value,
now=(new Date()).getTime();

if(!key){
ret={};
remove=[];
i=0;
while(attr=div.XMLDocument.documentElement.attributes[i++]){
parsed=JSON.parse(attr.value);
if(parsed.expires&&parsed.expires<=now){
remove.push(attr.name);
}else{
ret[attr.name]=parsed.data;
}
}
while(key=remove.pop()){
div.removeAttribute(key);
}
div.save(attrKey);
return ret;
}





key=key.replace(/[^-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u37f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g,"-");

if(value===undefined){
attr=div.getAttribute(key);
parsed=attr?JSON.parse(attr):{expires:-1};
if(parsed.expires&&parsed.expires<=now){
div.removeAttribute(key);
}else{
return parsed.data;
}
}else{
if(value===null){
div.removeAttribute(key);
}else{

prevValue=div.getAttribute(key);
parsed=JSON.stringify({
data:value,
expires:(options.expires?(now+options.expires):null)
});
div.setAttribute(key,parsed);
}
}

try{
div.save(attrKey);

}catch(error){

if(prevValue===null){
div.removeAttribute(key);
}else{
div.setAttribute(key,prevValue);
}


store.userData();
try{
div.setAttribute(key,parsed);
div.save(attrKey);
}catch(error){

if(prevValue===null){
div.removeAttribute(key);
}else{
div.setAttribute(key,prevValue);
}
throw store.error();
}
}
return ret;
});
}
}());



(function(){
var memory={};

function copy(obj){
return obj===undefined?undefined:JSON.parse(JSON.stringify(obj));
}

store.addType("memory",function(key,value,options){
if(!key){
return copy(memory);
}

if(value===undefined){
return copy(memory[key]);
}

if(value===null){
delete memory[key];
return null;
}

memory[key]=value;
if(options.expires){
setTimeout(function(){
delete memory[key];
},options.expires);
}

return value;
});
}());

}(this.amplify=this.amplify||{}));


