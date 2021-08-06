//tealium universal tag - utag.26572 ut4.0.202101050833, Copyright 2021 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
var match=/ut\d\.(\d*)\..*/.exec(utag.cfg.v);if(utag.ut.loader===undefined||!match||parseInt(match[1])<41){u.loader=function(o,a,b,c,l,m){utag.DB(o);a=document;if(o.type=="iframe"){m=a.getElementById(o.id);if(m&&m.tagName=="IFRAME"){b=m;}else{b=a.createElement("iframe");}o.attrs=o.attrs||{};utag.ut.merge(o.attrs,{"height":"1","width":"1","style":"display:none"},0);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";}if(o.id){b.id=o.id;}for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){this.onreadystatechange=null;o.cb();}};}}if(o.type!="img"&&!m){l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}}};}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={"view":1,"link":1};u.map={"_sm_26572_1":"type"};u.extend=[function(a,b){try{b['_sm_26572_1']="visit";}catch(e){utag.DB(e);}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){utag.DB("send:26572");utag.DB(b);var c,d,e,f,h,key,custom_data_pairs;u.data={"base_url":"//pt.ispot.tv/v2/##utag_site_id##.gif?","site_id":"TC-3422-2","app":"web","uid":"","cid":"","type":"","url":"","datetime":"","ip":"","os":"","device":"","language":"","customdata":b.ActualDevice+","+b._ispot_channel_groups,"custom":{}};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};utag.DB("send:26572:EXTENSIONS");utag.DB(b);c=[];for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(u.data.hasOwnProperty(e[f])){u.data[e[f]]=b[d];}else{u.data.custom[e[f]]=b[d];}}}else{h=d.split(":");if(h.length===3&&b[h[0]]===h[1]){if(u.map[d]){u.data.type=u.map[d];}}}}
utag.DB("send:26572:MAPPINGS");utag.DB(u.data);u.data.uid=u.data.uid||b._ccustid||"";if(u.data.uid){c.push("uid="+u.data.uid);}
if(u.data.app_type){c.push("app="+u.data.app_type);}else{c.push("app=web");}
if(u.data.cid){c.push("cid="+u.data.cid);}
if(u.data.type){c.push("type="+u.data.type);}else{c.push("type=visit");}
if(u.data.url){c.push("url="+encodeURIComponent(u.data.url));}
if(u.data.ip){c.push("ip="+u.data.ip);}
if(u.data.datetime){c.push("datetime="+encodeURIComponent(u.data.datetime));}
if(u.data.os){c.push("os="+u.data.os);}
if(u.data.device){c.push("device="+u.data.device);}
if(u.data.language){c.push("language="+u.data.language);}
if(u.data.customdata){c.push("customdata="+u.data.customdata);}
custom_data_pairs=[];for(key in u.data.custom){if(u.data.custom.hasOwnProperty(key)&&u.data.custom[key]){custom_data_pairs.push(key+"="+u.data.custom[key]);}}
if(custom_data_pairs.length>0){c.push("customdata="+encodeURIComponent("{"+custom_data_pairs.join(",")+"}"));}
if(!u.data.site_id){utag.DB(u.id+": Tag not fired: Required attribute site_id not populated");return;}
u.data.base_url=u.data.base_url.replace("##utag_site_id##",u.data.site_id);u.loader({"type":"img","src":u.data.base_url+c.join("&")});utag.DB("send:26572:COMPLETE");}};utag.o[loader].loader.LOAD(id);}("26572","vprt.prf-main"));}catch(error){utag.DB(error);}
