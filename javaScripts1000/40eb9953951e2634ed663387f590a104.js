//tealium universal tag - utag.289 ut4.0.202106161934, Copyright 2021 Tealium.com Inc. All Rights Reserved.
var liQ=liQ||[];try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
var match=/ut\d\.(\d*)\..*/.exec(utag.cfg.v);if(utag.ut.loader===undefined||!match||parseInt(match[1])<41){u.loader=function(o,a,b,c,l,m){utag.DB(o);a=document;if(o.type=="iframe"){m=a.getElementById(o.id);if(m&&m.tagName=="IFRAME"){b=m;}else{b=a.createElement("iframe");}o.attrs=o.attrs||{};utag.ut.merge(o.attrs,{"height":"1","width":"1","style":"display:none"},0);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";}if(o.id){b.id=o.id;}for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){this.onreadystatechange=null;o.cb();}};}}if(o.type!="img"&&!m){l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}}};}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={"view":1,"link":1};u.initialized=false;u.scriptrequested=false;u.queue=[];u.map_func=function(arr,obj,item){var i=arr.shift();obj[i]=obj[i]||{};if(arr.length>0){u.map_func(arr,obj[i],item);}else{obj[i]=item;}};u.clearEmptyKeys=function(object){for(var key in object){if(object[key]===""||object[key]===undefined){delete object[key];}}
return object;};u.event_map={"purchase":[{"name":"email"},{"name":"emailHash"},{"name":"name"},{"name":"contentId"},{"name":"items"},{"name":"transactionId"},{"name":"amount"},{"name":"currency"}],"conversion":[{"name":"email"},{"name":"emailHash"},{"name":"name"},{"name":"contentId"},],"content_view":[{"name":"email"},{"name":"emailHash"},{"name":"name"},{"name":"contentId"},],"category_view":[{"name":"email"},{"name":"emailHash"},{"name":"name"},{"name":"contentId"},],"search":[{"name":"email"},{"name":"emailHash"},{"name":"name"},{"name":"contentId"},],"cart_add":[{"name":"email"},{"name":"emailHash"},{"name":"name"},{"name":"contentId"},{"name":"items","required":true}],"cart_remove":[{"name":"email"},{"name":"emailHash"},{"name":"name"},{"name":"contentId"},{"name":"items","required":true}]};u.std_params={"email":function(){return u.data.email;},"emailHash":function(){return u.data.emailHash;},"name":function(){return u.data.name;},"contentId":function(){return u.data.contentId;},"transactionId":function(){return u.data.order_id;},"amount":function(){return u.data.order_total;},"currency":function(){return u.data.order_currency;},"items":function(){return u.item();}};u.item=function(){var g={},i,items=[];for(i=0;i<u.data.product_id.length;i++){g={};g.id=u.data.product_id[i];g.price=(u.data.product_unit_price[i]?u.data.product_unit_price[i]:"");g.quantity=(u.data.product_quantity[i]?u.data.product_quantity[i]:""),g.currency=(u.data.order_currency?u.data.order_currency:"");u.clearEmptyKeys(g);items.push(g);}
return items;};u.map={};u.extend=[];u.loader_cb=function(a,b,c){utag.DB("send:289:CALLBACK");u.initialized=true;var dataName,i,event_param;if(!u.data.event_name&&b.tealium_event&&(b.tealium_event!=="link"&&b.tealium_event!=="view")){u.data.event_name=b.tealium_event;}
if(u.event_map[u.data.event_name]){for(i=0;i<u.event_map[u.data.event_name].length;i++){event_param=u.event_map[u.data.event_name][i];u.data.event[event_param.name]=u.std_params[event_param.name](u.data.event_name);if(u.data.event[event_param.name]===undefined&&event_param.required){utag.DB(u.id+": Event: "+u.data.event_name+": Required attribute not populated");}}}
if(u.data.event_name==="purchase"){u.data.event.event="conversion";if(!u.data.event.name){u.data.event.name="product_purchase";}
for(dataName in u.data[u.data.event_name]){u.data.event[dataName]=u.data[u.data.event_name][dataName];}
u.clearEmptyKeys(u.data.event);liQ.push(u.data.event);}else if(u.data.event_name==="conversion"){u.data.event.event="conversion";for(dataName in u.data[u.data.event_name]){u.data.event[dataName]=u.data[u.data.event_name][dataName];}
u.clearEmptyKeys(u.data.event);liQ.push(u.data.event);}else if(u.data.event_name==="content_view"){u.data.event.event="viewContent";u.data.event.contentId=u.data.product_id[0];for(dataName in u.data[u.data.event_name]){u.data.event[dataName]=u.data[u.data.event_name][dataName];}
u.clearEmptyKeys(u.data.event);liQ.push(u.data.event);}else if(u.data.event_name==="category_view"){u.data.event.event="viewCategory";u.data.event.itemIds=u.data.product_id;for(dataName in u.data[u.data.event_name]){u.data.event[dataName]=u.data[u.data.event_name][dataName];}
u.clearEmptyKeys(u.data.event);liQ.push(u.data.event);}else if(u.data.event_name==="search"){u.data.event.event="viewSearchResult";u.clearEmptyKeys(u.data.event);u.data.event.itemIds=u.data.product_id;for(dataName in u.data[u.data.event_name]){u.data.event[dataName]=u.data[u.data.event_name][dataName];}
liQ.push(u.data.event);}else if(u.data.event_name==="cart_add"){u.data.event.event="addToCart";for(dataName in u.data[u.data.event_name]){u.data.event[dataName]=u.data[u.data.event_name][dataName];}
u.clearEmptyKeys(u.data.event);liQ.push(u.data.event);}else if(u.data.event_name==="cart_remove"){u.data.event.event="removeFromCart";for(dataName in u.data[u.data.event_name]){u.data.event[dataName]=u.data[u.data.event_name][dataName];}
u.clearEmptyKeys(u.data.event);liQ.push(u.data.event);}else if(u.data.event_name){u.data.event.event=u.data.event_name;for(dataName in u.data[u.data.event_name]){u.data.event[dataName]=u.data[u.data.event_name][dataName];}
u.clearEmptyKeys(u.data.event);liQ.push(u.data.event);}
utag.DB("send:289:CALLBACK:COMPLETE");};u.callBack=function(){var data={};while(data=u.queue.shift()){u.data=data.data;u.loader_cb(data.a,data.b,data.c);}};u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){utag.DB("send:289");utag.DB(b);var c,d,e,f,h;u.data={"qsp_delim":"&","kvp_delim":"=","base_url":"//b-code.liadm.com/a-##utag_app_id##.min.js","app_id":"045l","product_id":[],"product_quantity":[],"product_unit_price":[],"event":{}};utag.DB("send:289:EXTENSIONS");utag.DB(b);for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.map_func(e[f].split("."),u.data,b[d]);}}else{h=d.split(":");if(h.length===2&&b[h[0]]===h[1]){if(u.map[d]){u.data.event_name=u.map[d];}}}}
utag.DB("send:289:MAPPINGS");utag.DB(u.data);u.data.order_id=u.data.order_id||b._corder||"";u.data.order_total=u.data.order_total||b._ctotal||"";u.data.order_currency=u.data.order_currency||b._ccurrency||"";if(u.data.product_id.length===0&&b._cprod!==undefined){u.data.product_id=b._cprod.slice(0);}
if(u.data.product_quantity.length===0&&b._cquan!==undefined){u.data.product_quantity=b._cquan.slice(0);}
if(u.data.product_unit_price.length===0&&b._cprice!==undefined){u.data.product_unit_price=b._cprice.slice(0);}
if(!u.data.app_id){utag.DB(u.id+": Tag not fired: Required attribute not populated");return;}
u.data.base_url=u.data.base_url.replace("##utag_app_id##",u.data.app_id);if(u.initialized){u.loader_cb(a,b,c);}else{u.queue.push({"data":u.data,"a":a,"b":b,"c":c});if(!u.scriptrequested){u.scriptrequested=true;u.loader({"type":"script","src":u.data.base_url,"cb":u.callBack,"loc":"script","id":"utag_289","attrs":{}});}}
utag.DB("send:289:COMPLETE");}};utag.o[loader].loader.LOAD(id);}("289","smiledirectclub.main"));}catch(error){utag.DB(error);}
