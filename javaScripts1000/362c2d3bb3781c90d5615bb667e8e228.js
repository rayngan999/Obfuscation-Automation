//tealium universal tag - utag.358 ut4.0.202107091457, Copyright 2021 Tealium.com Inc. All Rights Reserved.
if(typeof JSON!=='object'){JSON={};}
(function(){'use strict';var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;function f(n){return n<10?'0'+n:n;}
function this_value(){return this.valueOf();}
if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z':null;};Boolean.prototype.toJSON=this_value;Number.prototype.toJSON=this_value;String.prototype.toJSON=this_value;}
var gap,indent,meta,rep;function quote(string){rx_escapable.lastIndex=0;return rx_escapable.test(string)?'"'+string.replace(rx_escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}
function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
if(typeof rep==='function'){value=rep.call(holder,key,value);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==='string'){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
if(typeof JSON.stringify!=='function'){meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':value});};}}());try{(function(id,loader,u){try{u=utag.o[loader].sender[id]={"id":id};}catch(e){u=utag.sender[id];}
utag.globals=window.utag.globals||{};u.ev={"all":1};u.server_domain="tealiumiq.com";u.server_prefix="";u.tag_config_server="";u.tag_config_sampling="100"||"100";if(utag.cfg.utagdb){u.tag_config_sampling="100";}
u.tag_config_region="default"||"default";u.region="";u.performance_timing_count=0;u.account=utag.cfg.utid.split("/")[0];u.data_source="ygvrjd";u.profile=""||utag.cfg.utid.split("/")[1];u.visitor_service_override="";u.request_increment=1;u.iab_v20_compliance=true;u.tc_string="";if(u.tag_config_server.indexOf("-collect."+u.server_domain)>1){u.server_prefix=u.tag_config_server.split("collect."+u.server_domain)[0];if(u.tag_config_server.indexOf("/i.gif")<0){u.tag_config_server="https://"+[u.server_prefix+"collect."+u.server_domain,u.account,u.profile,"2","i.gif"].join("/");}}
if(u.tag_config_server===""){if(u.tag_config_region==="default"){u.tag_config_server="https://"+[u.server_prefix+"collect."+u.server_domain,u.account,u.profile,"2","i.gif"].join("/");}else{u.tag_config_server="https://"+[u.server_prefix+"collect-"+u.tag_config_region+"."+u.server_domain,u.account,u.profile,"2","i.gif"].join("/");}}
if(u.tag_config_server.indexOf("-collect-")>-1){u.server_prefix=u.tag_config_server.split("collect-")[0];}
if(u.tag_config_region!=="default"&&u.tag_config_server.indexOf(u.server_prefix+"collect."+u.server_domain)>0){u.tag_config_server=u.tag_config_server.replace(u.server_prefix+"collect."+u.server_domain,u.server_prefix+"collect-"+u.tag_config_region+"."+u.server_domain);u.region=u.tag_config_region;}
u.data_enrichment="none";u.profile_specific_vid=0;u.enrichment_polling=1;u.enrichment_polling_delay=500;u.do_enrichment=function(){};u.deepCopy=function(input){var key,copy;if(typeof input==="object"&&input!==null){if(utag.ut.typeOf(input)==="array"){copy=[];}else{copy={};}
for(key in input){if(typeof input[key]==="object"){copy[key]=u.deepCopy(input[key]);}else{copy[key]=input[key];}}}else{copy=input;}
return copy;}
var q=u.tag_config_server.indexOf("?");if(q>0&&(q+1)==u.tag_config_server.length){u.tag_config_server=u.tag_config_server.replace("?","");}
u.server_list=u.tag_config_server.split("|");u.enrichment_enabled={};u.get_account_profile=function(s){var p;if(u.visitor_service_override||u.tag_config_server.indexOf("tealiumiq.com")===-1){p=[u.tag_config_server.split("//")[1],u.account,u.profile]}else{p=s.substring(s.indexOf(u.server_domain)).split("/");}
return p;};function infixParameters(url,params){var updated_url,url_parts=url.split("?");if(params){if(url_parts[1]===undefined){updated_url=url+"?"+params;}else if(url_parts[1]===""){updated_url=url+params;}else{updated_url=url_parts[0]+"?"+params+"&"+url_parts[1];}}else{updated_url=url;}
return updated_url;}
u.is_in_sample_group=function(b){var group="100";if(u.tag_config_sampling===""||u.tag_config_sampling==="100"){return true;}
if(b["cp.utag_main_dc_group"]){group=b["cp.utag_main_dc_group"];}else{group=Math.floor(Math.random()*100)+1;utag.loader.SC("utag_main",{"dc_group":group});}
if(parseInt(group)<=parseInt(u.tag_config_sampling)){return true;}else{return false;}};u.get_performance_timing=function(b){var t,timing;var data={};function subtract(val1,val2){var difference=0;if(val1>val2){difference=val1-val2;}
return difference;}
if(typeof localStorage!="undefined"&&JSON.parse&&window.performance&&window.performance.timing){t=window.performance.timing;timing=localStorage.getItem("tealium_timing");if(timing!==null&&timing!=="{}"&&typeof b!=="undefined"&&u.performance_timing_count===0){utag.ut.merge(b,utag.ut.flatten({timing:JSON.parse(timing)}),1);}}else{return;}
u.performance_timing_count++;for(var k in t){if((k.indexOf("dom")===0||k.indexOf("load")===0)&&t[k]===0&&u.performance_timing_count<20){setTimeout(u.get_performance_timing,1000);}}
data["domain"]=location.hostname+"";data["pathname"]=location.pathname+"";data["query_string"]=(""+location.search).substring(1);data["timestamp"]=(new Date()).getTime();data["dns"]=subtract(t.domainLookupEnd,t.domainLookupStart);data["connect"]=subtract(t.connectEnd,t.connectStart);data["response"]=subtract(t.responseEnd,t.responseStart);data["dom_loading_to_interactive"]=subtract(t.domInteractive,t.domLoading);data["dom_interactive_to_complete"]=subtract(t.domComplete,t.domInteractive);data["load"]=subtract(t.loadEventEnd,t.loadEventStart);data["time_to_first_byte"]=subtract(t.responseStart,t.connectEnd);data["front_end"]=subtract(t.loadEventStart,t.responseEnd);data["fetch_to_response"]=subtract(t.responseStart,t.fetchStart);data["fetch_to_complete"]=subtract(t.domComplete,t.fetchStart);data["fetch_to_interactive"]=subtract(t.domInteractive,t.fetchStart);try{localStorage.setItem("tealium_timing",JSON.stringify(data));}catch(e){utag.DB(e);}};u.validateProtocol=function(address,force_ssl){if(/^https?:\/\//i.test(address)){if(force_ssl){if(/^http:\/\//i.test(address)){address=address.toLowerCase().replace("http","https");}}}else{if(/^\/\//.test(address)){if(force_ssl){address="https:"+address;}else{address=location.protocol+address;}
}else{if(force_ssl){address="https://"+address;}else{address=location.protocol+"//"+address;}}}
return address;}
u.map={};u.extend=[function(a,b){try{if(1){try{b['adobe_api']=typeof(Visitor)!="undefined"?"VisitorAPI Present":"VisitorAPI Missing";}catch(e){}}}catch(e){utag.DB(e);}},function(a,b){try{if(1){if(a=="view"){if(b['cp.utag_main__sn']==1){b.days_since_last_visit="First Visit";}
else{var today=Date.now();var last=localStorage.getItem("lastvisit");var daysSince=(today-last)/(60*60*24*1000);b.days_since_last_visit="Less than 1 day";if(daysSince>1&&daysSince<7){b.days_since_last_visit="Less than 7 days";}
else if(daysSince>6&&daysSince<30){b.days_since_last_visit="More than 30 days";}}
localStorage.setItem("lastvisit",Date.now());}}}catch(e){utag.DB(e)}},function(a,b){try{if(1){b.aa_visitor_id=b["cp.s_vi"]?b["cp.s_vi"]:b["cp.utag_main_v_id"];}}catch(e){utag.DB(e)}},function(a,b){try{if(1){if(b.event_name=='certona_blended_container_click'){b.sc_event_array=u.addEvent('event202');}}}catch(e){utag.DB(e)}},function(a,b,c,d,e,f,g){if(1){d=b['environment_domain'];if(typeof d=='undefined')return;c=[{'prod:dsw.com':'dswprod'},{'qa:dswq1.com':'dswsre2e'},{'dev:dswd1.com':'dswsrdev'},{'prod:vincecamuto.com':'dswglobalprod'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d==f){b['aa_report_suite']=c[e][f];m=true};};if(m)break};if(!m)b['aa_report_suite']='dswglobaldev';}},function(a,b){b._ccat=[];if(b.event_name!='purchase'){b._corder='';b.order_id='';}
if(b.cart_addType=='browse'){b.cart_addType='pdp';}
if(b.event_name=='cart_edit_save'){b.cart_addType=undefined;}
if(b.event_name=='brand_filter'){b.event_name='category_filter';}
if(b.event_name=='brands_sort'){b.event_name='category_sort';}
if(b.recommendation_adobeCampaign){var newKey=''
newKey+=(b.recommendation_adobeCampaign||'').replace(/\|/g,'')+'|';newKey+=(b.recommendation_adobeExperience||'').replace(/\|/g,'')+'|';newKey+=(b.recommendation_adobeMbox||'').replace(/\|/g,'')+'|';newKey+=(b.recommendation_adobeOffer||'').replace(/\|/g,'');b.recommendation_key=newKey;}},function(a,b){if(b.page_url){b.page_url_full=document.location.hostname+b.page_url.replace(/\?.*/,'')}},function(a,b){try{if(1){if(b.event_name=='cart_addition'){b.persistent_cart_type='current visit';}else if(b.event_name=='cart_view'){b.persistent_cart_type='persistent cart';}
if(Array.isArray(b.product_productID)){b.persistent_cart_type_list=b.product_productID.map(()=>b.persistent_cart_type);}}}catch(e){utag.DB(e)}},function(a,b){if(a=='link'){if(b.event_name){b.link_text=b.event_name;}else if(b.click_category){b.link_text='click_action';}}},function(a,b){utag_data['prev_blocked_hit']='';if(b.event_name=='collection_sort'||b.event_name=='gridwall_click'||b.event_name=='onsite_search_filter'){utag_data['prev_blocked_hit']=b.event_name;return false;}},function(a,b,c,d){try{if(typeof b['alternative_payment_type']!='undefined'){c=[b['click_category'],b['click_detail']];b['click_action']=c.join(':')}}catch(e){utag.DB(e);}},function(a,b){try{if(1){if(b.page_hasUGC||b.page_hasBrandContent){b.product_pdpAttr=b.page_hasUGC+':'+b.page_hasBrandContent;}}}catch(e){utag.DB(e)}},function(a,b){try{if((typeof b['event_name']!='undefined'&&b['event_name'].toString().indexOf('wish_list_addition')>-1)){b['wishlist_revenue']=b['product_revenue']}}catch(e){utag.DB(e);}},function(a,b){for(var attr in b){if(b[attr]==null||b[attr]=='null'){b[attr]='';}}},function(a,b){if(a=='view'){b.login_state='logged out';if(b.customer_id&&b.customer_id!='null'){b.login_state='logged in';}}},function(a,b){if(b.errors_code){for(i=0;i<b.errors_code.length;i++){b.error_list=b.error_list?b.error_list+',':'';b.error_list=b.error_list+b.errors_formName[i]+':'+b.errors_code[i]+':'+b.errors_name[i];}}},function(a,b){var attrArray=['product_color','product_size','product_material','product_heelHeight','product_toeShape','product_width'];var newArray=[]
for(i=0;i<b.product_productID.length;i++){newArray[i]='';for(ii=0;ii<attrArray.length;ii++){newArray[i]=newArray[i]+(ii==0?'':':')+(typeof b[attrArray[ii]]!='undefined'?b[attrArray[ii]][i]:'');if(ii==attrArray.length-1&&newArray[i].length==attrArray.length-1){newArray[i]='';}}}
b.product_concatAttr=newArray;},function(a,b){try{if(1){const targetedEvents=['cart_addition','purchase','product_view','cart_view'];b.fb_content_type='';targetedEvents.forEach(event=>{if(event===b.event_name){b.fb_content_type=(b.banner.toLowerCase()==='vc')?'product_group':'product';}});}}catch(e){utag.DB(e)}},function(a,b){try{if((typeof b['order_id']!='undefined'&&typeof b['product_fulfillmentType']!='undefined')){b.fb_bopus=[];for(i=0;i<b.product_fulfillmentType.length;i++){if(b.product_fulfillmentType[i]=="BOSTS"||b.product_fulfillmentType[i]=="BOPIS"){b.fb_bopus.push("1")}else{b.fb_bopus.push("0")}}}}catch(e){utag.DB(e)}},function(a,b,c,d,e,f,g){if(1){d=b['event_name'];if(typeof d=='undefined')return;c=[{'cart_view':'View_Cart'},{'email_signup':'Email_Registration'},{'registration_start':'Start_Rewards_Registration'},{'registration_complete':'Rewards_Registration'},{'login_complete':'Account_Login'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d.toString().indexOf(f)>-1){b['fb_content_name']=c[e][f];m=true};};if(m)break};}},function(a,b,c,d,e,f,g){if(1){d=b['banner'];if(typeof d=='undefined')return;c=[{'DSW':'554325658056413'},{'VC':'1662594404009820'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d==f){b['fb_tagId']=c[e][f];m=true};};if(m)break};}}];u.send=function(a,b){b.sc_event_array=b.sc_event_array||[];u.addEvent=function(v,n){n=b.sc_event_array;var ta=v.split(",");for(var i=0;i<ta.length;i++){n.push(ta[i]);}
return n;}
var c,d,i;if(u.ev[a]||typeof u.ev["all"]!=="undefined"){if(a==="remote_api"){utag.DB("Remote API event suppressed.");return;}
if(u.iab_v20_compliance===true||u.iab_v20_compliance==="true"){if(typeof __tcfapi==="function"){__tcfapi("getTCData",2,function(tcData,success){if(success){u.tc_string+="gdpr=";if(tcData.gdprApplies===true){u.tc_string+="1";}else if(tcData.gdprApplies===false){u.tc_string+="0";}else{u.tc_string+=String(tcData.gdprApplies);}
u.tc_string+="&gdpr_consent="+tcData.tcString;execute_send();}});}else{var frame=window;var cmpFrame;var cmpCallbacks={};while(frame){try{if(frame.frames["__tcfapiLocator"]){cmpFrame=frame;break;}}catch(error){utag.DB(error);}
if(frame===window.top){break;}
frame=frame.parent;}
if(!cmpFrame){execute_send();}else{window.__tcfapi=function(cmd,version,callback,arg){var callId=String(Math.random());var msg={__tcfapiCall:{command:cmd,parameter:arg,version:version,callId:callId}};cmpCallbacks[callId]=callback;cmpFrame.postMessage(msg,"*");};window.tealiumiabPostMessageHandler=function(event){var json={};try{json=typeof event.data==="string"?JSON.parse(event.data):event.data;}catch(error){utag.DB(error);}
var payload=json.__tcfapiReturn;if(payload){if(typeof cmpCallbacks[payload.callId]==="function"){cmpCallbacks[payload.callId](payload.returnValue,payload.success);cmpCallbacks[payload.callId]=null;}}};window.addEventListener("message",tealiumiabPostMessageHandler,false);__tcfapi("getTCData",2,function(tcData,success){if(success){u.tc_string+="gdpr=";if(tcData.gdprApplies===true){u.tc_string+="1";}else if(tcData.gdprApplies===false){u.tc_string+="0";}else{u.tc_string+=String(tcData.gdprApplies);}
u.tc_string+="&gdpr_consent="+tcData.tcString;execute_send();}});}}}else{execute_send();}
function execute_send(){if(u.data_source){b.tealium_datasource=u.data_source;}
u.make_enrichment_request=false;for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){if(typeof utag_err!='undefined'){utag_err.push({e:'extension error:'+e,s:utag.cfg.path+'utag.'+id+'.js',l:c,t:'ex'})}}};if(!u.is_in_sample_group(b)){return false;}
u.get_performance_timing(b);for(i=0;i<u.server_list.length;i++){if(u.server_list[i].toLowerCase().indexOf("http")===-1){u.server_list[i]=u.validateProtocol(u.server_list[i],true);}
if(u.enrichment_enabled[i]!==false){u.enrichment_enabled[u.server_list[i]]=true;}}
if(u.server_list.length>1){u.profile_specific_vid=1;}
u.data=utag.datacloud||{};u.data["loader.cfg"]={};for(d in utag.loader.GV(utag.loader.cfg)){if(utag.loader.cfg[d].load&&utag.loader.cfg[d].send){utag.loader.cfg[d].executed=1;}else{utag.loader.cfg[d].executed=0;}
u.data["loader.cfg"][d]=utag.loader.GV(utag.loader.cfg[d]);}
u.data.data=b;for(d in u.data.data){if((d+'').indexOf("qp.")===0){u.data.data[d]=encodeURIComponent(u.data.data[d]);}else if((d+'').indexOf("va.")===0){delete u.data.data[d];}}
if(!b["cp.utag_main_dc_event"]){b["cp.utag_main_dc_visit"]=(1+(b["cp.utag_main_dc_visit"]?parseInt(b["cp.utag_main_dc_visit"]):0))+"";}
b["cp.utag_main_dc_event"]=(1+(b["cp.utag_main_dc_event"]?parseInt(b["cp.utag_main_dc_event"]):0))+"";utag.loader.SC("utag_main",{"dc_visit":b["cp.utag_main_dc_visit"],"dc_event":b["cp.utag_main_dc_event"]+";exp-session"});utag.data["cp.utag_main_dc_visit"]=b["cp.utag_main_dc_visit"];utag.data["cp.utag_main_dc_event"]=b["cp.utag_main_dc_event"];var dt=new Date();u.data.browser={};try{u.data.browser["height"]=window.innerHeight||document.body.clientHeight;u.data.browser["width"]=window.innerWidth||document.body.clientWidth;u.data.browser["screen_height"]=screen.height;u.data.browser["screen_width"]=screen.width;u.data.browser["timezone_offset"]=dt.getTimezoneOffset();}catch(e){utag.DB(e);}
u.data["event"]=a+'';u.data["post_time"]=dt.getTime();if(u.data_enrichment==="frequent"||u.data_enrichment==="infrequent"){u.visit_num=b["cp.utag_main_dc_visit"];if(parseInt(u.visit_num)>1&&b["cp.utag_main_dc_event"]==="1"){u.enrichment_polling=2;}
try{u.va_update=parseInt(localStorage.getItem("tealium_va_update")||0);}catch(e){utag.DB(e);}
u.visitor_id=u.visitor_id||b.tealium_visitor_id||b["cp.utag_main_v_id"];if(u.data_enrichment==="frequent"||(u.data_enrichment==="infrequent"&&parseInt(u.visit_num)>1&&parseInt(b["cp.utag_main_dc_event"])<=5&&u.visit_num!==u.va_update)){u.make_enrichment_request=true;}
u.visitor_service_request=function(t,server){var s,p=u.get_account_profile(server);if(u.visitor_service_override){s=u.validateProtocol(u.visitor_service_override,true);}else{s=u.validateProtocol(u.server_prefix,true)+"visitor-service"+(u.region?"-"+u.region:"").replace(/[^-A-Za-z0-9+_.]/g,"")+"."+u.server_domain;}
(function(p){var prefix="tealium_va";var key="_"+p[1]+"_"+p[2];utag.ut["writeva"+p[2]]=function(o){utag.DB("Visitor Attributes: "+prefix+key);utag.DB(o);var str=JSON.stringify(o);if(str!=="{}"&&str!==""){try{localStorage.setItem("tealium_va_update",utag.data["cp.utag_main_dc_visit"]);localStorage.setItem(prefix,str);localStorage.setItem(prefix+key,str);}catch(e){utag.DB(e);}
if(typeof tealium_enrichment==="function"){tealium_enrichment(o,prefix+key);}}};}(p.slice(0)));var vid=u.visitor_id;if(u.profile_specific_vid===1){vid+=p[2];}
utag.ut.loader({id:"tealium_visitor_service_358"+p[2]+"_"+u.request_increment++,src:s+"/"+p[1]+"/"+p[2]+"/"+vid.replace(/\?callback=.*/g,"")+"?callback=utag.ut%5B%22writeva"+p[2]+"%22%5D&rnd="+t});};u.do_enrichment=function(server,enrichment_polling,enrichment_polling_delay){if(typeof utag.ut.loader!="undefined"){for(i=0;i<enrichment_polling;i++){setTimeout(function(){u.visitor_service_request((new Date).getTime(),server);},i*enrichment_polling_delay+1);}}};}
var json_string,regExpReplace=new RegExp(u.visitor_id,"g");if(b.tealium_random&&typeof utag.globals[b.tealium_random]==="object"){for(var downstream_param in utag.globals[b.tealium_random]){u.data.data[downstream_param]=u.deepCopy(utag.globals[b.tealium_random][downstream_param]);}}
if(window.FormData){function postData(server_index,enrichment_polling,enrichment_polling_delay){if(server_index+1>u.server_list.length){return;}
var xhr=new XMLHttpRequest();var server=u.validateProtocol(u.server_list[server_index],true);var formData=new FormData();xhr.addEventListener("readystatechange",function(){if(xhr.readyState===3){try{u.region=xhr.getResponseHeader("X-Region")||u.region||"";}catch(res_error){utag.DB(res_error);u.region=u.region||"";}
if(u.region)utag.loader.SC("utag_main",{"dc_region":u.region+";exp-session"});utag.DB("dc_region:"+u.region);}else if(xhr.readyState===4){postData(server_index+1,enrichment_polling,enrichment_polling_delay);if(u.make_enrichment_request&&u.enrichment_enabled[server]){u.do_enrichment(server,enrichment_polling,enrichment_polling_delay);}}});if(u.server_list[server_index].toLowerCase().indexOf("http")!==0){u.server_list[server_index]=u.validateProtocol(u.server_list[server_index],true);}
u.server_list[server_index]=infixParameters(u.server_list[server_index],u.tc_string);xhr.open("post",u.server_list[server_index],true);xhr.withCredentials=true;json_string=JSON.stringify(u.data);if(u.profile_specific_vid===1&&u.visitor_id){json_string=json_string.replace(regExpReplace,u.visitor_id+u.get_account_profile(server)[2]);}
formData.append("data",json_string);xhr.send(formData);}
postData(0,u.enrichment_polling,u.enrichment_polling_delay);}else{for(i=0;i<u.server_list.length;i++){(function(i,enrichment_polling,enrichment_polling_delay){var server=u.server_list[i];setTimeout(function(){json_string=JSON.stringify(u.data);if(u.profile_specific_vid==1&&u.visitor_id){json_string=json_string.replace(regExpReplace,u.visitor_id+u.get_account_profile(server)[2]);}
var img=new Image();img.src=server+"?"+(u.tc_string?u.tc_string+"&":"")+"data="+encodeURIComponent(json_string);if(u.make_enrichment_request&&u.enrichment_enabled[server]){u.do_enrichment(server,enrichment_polling,enrichment_polling_delay);}},i*700);}(i,u.enrichment_polling,u.enrichment_polling_delay));}}}}};try{utag.o[loader].loader.LOAD(id);}catch(e){utag.loader.LOAD(id);}})("358","dswinc.main");}catch(e){utag.DB(e);}