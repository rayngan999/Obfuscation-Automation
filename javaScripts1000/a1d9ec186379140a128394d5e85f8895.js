//tealium universal tag - utag.278 ut4.0.202106161934, Copyright 2021 Tealium.com Inc. All Rights Reserved.
var adroll_custom_data=adroll_custom_data||{};var adroll_conversion_value=adroll_conversion_value||"";var adroll_conversion_value_in_dollars=adroll_conversion_value_in_dollars||"";var adroll_adv_id="";var adroll_pix_id="";var __adroll_loaded=true;var adroll_record_user={};try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
var match=/ut\d\.(\d*)\..*/.exec(utag.cfg.v);if(utag.ut.loader===undefined||!match||parseInt(match[1])<35){u.loader=function(o){var b,c,l,a=document;if(o.type==="iframe"){b=a.createElement("iframe");o.attrs=o.attrs||{"height":"1","width":"1","style":"display:none"};for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";for(l in utag.loader.GV(o.attrs)){b[l]=o.attrs[l];}b.src=o.src;}if(o.id){b.id=o.id};if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb()},false);}else{b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}}}}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={"view":1,"link":1};u.initialized=false;u.scriptrequested=false;u.queue=[];u.map={};u.extend=[];u.isEmptyObject=function(o,a){for(a in o){if(utag.ut.hasOwn(o,a))return false;}
return true;}
u.send=function(a,b,c,d,e,f){if(u.ev[a]||typeof u.ev.all!="undefined"){adroll_record_user={};u.data={"advID":"33XGM3WJQZECTPKVUJQNHT","pxlID":"X4IMGHSCCZEJVANNPBTPSY","base_url":"//"+(location.protocol=="https:"?"s":"a")+".adroll.com/j/roundtrip.js","adroll":{"conversion_value":""},"adroll_custom_data":{},"adroll_record_user":{}}
for(d in utag.loader.GV(u.map)){if(typeof b[d]!=="undefined"&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(e[f].indexOf("adroll_custom_data.")==0){u.data.adroll_custom_data[e[f].split(".")[1]]=b[d];}else if(e[f].indexOf("adroll_record_user.")==0){u.data.adroll_record_user[e[f].split(".")[1]]=b[d];}else if(e[f].indexOf("adroll_")==0){u.data.adroll[e[f].split("_")[1]]=b[d];}else{u.data[e[f]]=b[d];}}}}
adroll_adv_id=u.data.adroll.adv||u.data.advID;adroll_pix_id=u.data.adroll.pix||u.data.pxlID;if(typeof u.data.adroll.email!='undefined'){u.data.adroll.email=u.data.adroll.email.toLowerCase();}
u.data.order_id=u.data.order_id||b._corder||"";u.data.order_subtotal=u.data.order_subtotal||b._csubtotal||"";if(u.data.order_id){if(adroll_conversion_value==""&&u.data.adroll.conversion_value==""&&u.data.order_subtotal){u.data.adroll.conversion_value=u.data.order_subtotal;}
if(u.data.adroll.conversion_value){u.data.adroll.conversion_value=parseFloat(u.data.adroll.conversion_value);}}
adroll_record_user=u.data.adroll_record_user;adroll_custom_data=u.data.adroll_custom_data;for(var key in u.data.adroll){window["adroll_"+key]=u.data.adroll[key];}
u.loader_cb=function(a,b,c){utag.DB("send:278:CALLBACK");if(u.initialized){if(!u.isEmptyObject(adroll_record_user)){__adroll.record_user(adroll_record_user);}else{utag.DB("Warning: adroll_record_user object is empty, no pixel fired.");}}
u.initialized=true;utag.DB("send:278:CALLBACK:COMPLETE");};u.callBack=function(){var data={};while(data=u.queue.shift()){u.data=data.data;u.loader_cb(data.a,data.b,data.c);}};if(u.initialized){u.loader_cb(a,b,c);}else{u.queue.push({"data":u.data,"a":a,"b":b,"c":c});if(!u.scriptrequested){u.scriptrequested=true;u.loader({"type":"script","src":u.data.base_url,"cb":u.callBack,"loc":"script","id":"utag_278","attrs":{}});}}}};utag.o[loader].loader.LOAD(id);}("278","smiledirectclub.main"));}catch(error){utag.DB(error);}
