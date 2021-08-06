//tealium universal tag - utag.153 ut4.0.202104200808, Copyright 2021 Tealium.com Inc. All Rights Reserved.
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
return str('',{'':value});};}}());try{(function(id,loader,u){try{u=utag.o[loader].sender[id]={};}catch(e){u=utag.sender[id];}
utag.globals=window.utag.globals||{};u.ev={"all":1};u.server_domain="tealiumiq.com";u.server_prefix="";u.tag_config_server="";u.tag_config_sampling="100"||"100";if(utag.cfg.utagdb){u.tag_config_sampling="100";}
u.tag_config_region="eu-central-1"||"default";u.region="";u.performance_timing_count=0;u.account=utag.cfg.utid.split("/")[0];u.data_source="";u.profile=""||utag.cfg.utid.split("/")[1];if(u.tag_config_server.indexOf("-collect."+u.server_domain)>1){u.server_prefix=u.tag_config_server.split("collect."+u.server_domain)[0];if(u.tag_config_server.indexOf("/i.gif")<0){u.tag_config_server="https://"+[u.server_prefix+"collect."+u.server_domain,u.account,u.profile,"2","i.gif"].join("/");}}
if(u.tag_config_server===""){if(u.tag_config_region==="default"){u.tag_config_server="https://"+[u.server_prefix+"collect."+u.server_domain,u.account,u.profile,"2","i.gif"].join("/");}else{u.tag_config_server="https://"+[u.server_prefix+"collect-"+u.tag_config_region+"."+u.server_domain,u.account,u.profile,"2","i.gif"].join("/");}}
if(u.tag_config_server.indexOf("-collect-")>-1){u.server_prefix=u.tag_config_server.split("collect-")[0];}
if(u.tag_config_region!=="default"&&u.tag_config_server.indexOf(u.server_prefix+"collect."+u.server_domain)>0){u.tag_config_server=u.tag_config_server.replace(u.server_prefix+"collect."+u.server_domain,u.server_prefix+"collect-"+u.tag_config_region+"."+u.server_domain);u.region=u.tag_config_region;}
u.data_enrichment="none";u.profile_specific_vid=0;u.enrichment_polling=1;u.enrichment_polling_delay=500;u.do_enrichment=function(){};var q=u.tag_config_server.indexOf("?");if(q>0&&(q+1)==u.tag_config_server.length){u.tag_config_server=u.tag_config_server.replace("?","");}
u.server_list=u.tag_config_server.split("|");u.enrichment_enabled={};u.get_account_profile=function(s){var p=s.substring(s.indexOf(u.server_domain)).split("/");return p;};u.is_in_sample_group=function(b){var group="100";if(u.tag_config_sampling===""||u.tag_config_sampling==="100"){return true;}
if(b["cp.utag_main_dc_group"]){group=b["cp.utag_main_dc_group"];}else{group=Math.floor(Math.random()*100)+1;utag.loader.SC("utag_main",{"dc_group":group});}
if(parseInt(group)<=parseInt(u.tag_config_sampling)){return true;}else{return false;}};u.get_performance_timing=function(b){var t,timing;var data={};function subtract(val1,val2){var difference=0;if(val1>val2){difference=val1-val2;}
return difference;}
if(typeof localStorage!="undefined"&&JSON.parse&&window.performance&&window.performance.timing){t=window.performance.timing;timing=localStorage.getItem("tealium_timing");if(timing!==null&&timing!=="{}"&&typeof b!=="undefined"&&u.performance_timing_count===0){utag.ut.merge(b,utag.ut.flatten({timing:JSON.parse(timing)}),1);}}else{return;}
u.performance_timing_count++;for(var k in t){if((k.indexOf("dom")===0||k.indexOf("load")===0)&&t[k]===0&&u.performance_timing_count<20){setTimeout(u.get_performance_timing,1000);}}
data["domain"]=location.hostname+"";data["pathname"]=location.pathname+"";data["query_string"]=(""+location.search).substring(1);data["timestamp"]=(new Date()).getTime();data["dns"]=subtract(t.domainLookupEnd,t.domainLookupStart);data["connect"]=subtract(t.connectEnd,t.connectStart);data["response"]=subtract(t.responseEnd,t.responseStart);data["dom_loading_to_interactive"]=subtract(t.domInteractive,t.domLoading);data["dom_interactive_to_complete"]=subtract(t.domComplete,t.domInteractive);data["load"]=subtract(t.loadEventEnd,t.loadEventStart);data["time_to_first_byte"]=subtract(t.responseStart,t.connectEnd);data["front_end"]=subtract(t.loadEventStart,t.responseEnd);data["fetch_to_response"]=subtract(t.responseStart,t.fetchStart);data["fetch_to_complete"]=subtract(t.domComplete,t.fetchStart);data["fetch_to_interactive"]=subtract(t.domInteractive,t.fetchStart);try{localStorage.setItem("tealium_timing",JSON.stringify(data));}catch(e){utag.DB(e);}};u.map={};u.extend=[function(a,b){utag.ut.md5=function(t,n){var r;if("undefined"!=typeof window&&window.crypto&&(r=window.crypto),!r&&"undefined"!=typeof window&&window.msCrypto&&(r=window.msCrypto),!r&&"undefined"!=typeof global&&global.crypto&&(r=global.crypto),!r&&"function"==typeof require)try{r=require("crypto")}catch(t){}var e=function(){if(r){if("function"==typeof r.getRandomValues)try{return r.getRandomValues(new Uint32Array(1))[0]}catch(t){}if("function"==typeof r.randomBytes)try{return r.randomBytes(4).readInt32LE()}catch(t){}}throw new Error("Native crypto module could not be used to get secure random number.")},i=Object.create||function(){function t(){}return function(n){var r;return t.prototype=n,r=new t,t.prototype=null,r}}(),o={},s=o.lib={},a=s.Base={extend:function(t){var n=i(this);return t&&n.mixIn(t),n.hasOwnProperty("init")&&this.init!==n.init||(n.init=function(){n.$super.init.apply(this,arguments)}),n.init.prototype=n,n.$super=this,n},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var n in t)t.hasOwnProperty(n)&&(this[n]=t[n]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},c=s.WordArray=a.extend({init:function(t,n){t=this.words=t||[],this.sigBytes=null!=n?n:4*t.length},toString:function(t){return(t||f).stringify(this)},concat:function(t){var n=this.words,r=t.words,e=this.sigBytes,i=t.sigBytes;if(this.clamp(),e%4)for(var o=0;o<i;o++){var s=r[o>>>2]>>>24-o%4*8&255;n[e+o>>>2]|=s<<24-(e+o)%4*8}else for(o=0;o<i;o+=4)n[e+o>>>2]=r[o>>>2];return this.sigBytes+=i,this},clamp:function(){var n=this.words,r=this.sigBytes;n[r>>>2]&=4294967295<<32-r%4*8,n.length=t.ceil(r/4)},clone:function(){var t=a.clone.call(this);return t.words=this.words.slice(0),t},random:function(t){for(var n=[],r=0;r<t;r+=4)n.push(e());return new c.init(n,t)}}),u=o.enc={},f=u.Hex={stringify:function(t){for(var n=t.words,r=t.sigBytes,e=[],i=0;i<r;i++){var o=n[i>>>2]>>>24-i%4*8&255;e.push((o>>>4).toString(16)),e.push((15&o).toString(16))}return e.join("")},parse:function(t){for(var n=t.length,r=[],e=0;e<n;e+=2)r[e>>>3]|=parseInt(t.substr(e,2),16)<<24-e%8*4;return new c.init(r,n/2)}},h=u.Latin1={stringify:function(t){for(var n=t.words,r=t.sigBytes,e=[],i=0;i<r;i++){var o=n[i>>>2]>>>24-i%4*8&255;e.push(String.fromCharCode(o))}return e.join("")},parse:function(t){for(var n=t.length,r=[],e=0;e<n;e++)r[e>>>2]|=(255&t.charCodeAt(e))<<24-e%4*8;return new c.init(r,n)}},d=u.Utf8={stringify:function(t){try{return decodeURIComponent(escape(h.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return h.parse(unescape(encodeURIComponent(t)))}},l=s.BufferedBlockAlgorithm=a.extend({reset:function(){this._data=new c.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=d.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(n){var r,e=this._data,i=e.words,o=e.sigBytes,s=this.blockSize,a=o/(4*s),u=(a=n?t.ceil(a):t.max((0|a)-this._minBufferSize,0))*s,f=t.min(4*u,o);if(u){for(var h=0;h<u;h+=s)this._doProcessBlock(i,h);r=i.splice(0,u),e.sigBytes-=f}return new c.init(r,f)},clone:function(){var t=a.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),p=(s.Hasher=l.extend({cfg:a.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){l.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(n,r){return new t.init(r).finalize(n)}},_createHmacHelper:function(t){return function(n,r){return new p.HMAC.init(t,r).finalize(n)}}}),o.algo={});return o}(Math);(function(t){var n=utag.ut.md5,r=n.lib,e=r.WordArray,i=r.Hasher,o=n.algo,s=[];!function(){for(var n=0;n<64;n++)s[n]=4294967296*t.abs(t.sin(n+1))|0}();var a=o.MD5=i.extend({_doReset:function(){this._hash=new e.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,n){for(var r=0;r<16;r++){var e=n+r,i=t[e];t[e]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8)}var o=this._hash.words,a=t[n+0],d=t[n+1],l=t[n+2],p=t[n+3],y=t[n+4],g=t[n+5],w=t[n+6],v=t[n+7],_=t[n+8],m=t[n+9],B=t[n+10],x=t[n+11],b=t[n+12],S=t[n+13],H=t[n+14],z=t[n+15],C=o[0],M=o[1],A=o[2],D=o[3];C=c(C,M,A,D,a,7,s[0]),D=c(D,C,M,A,d,12,s[1]),A=c(A,D,C,M,l,17,s[2]),M=c(M,A,D,C,p,22,s[3]),C=c(C,M,A,D,y,7,s[4]),D=c(D,C,M,A,g,12,s[5]),A=c(A,D,C,M,w,17,s[6]),M=c(M,A,D,C,v,22,s[7]),C=c(C,M,A,D,_,7,s[8]),D=c(D,C,M,A,m,12,s[9]),A=c(A,D,C,M,B,17,s[10]),M=c(M,A,D,C,x,22,s[11]),C=c(C,M,A,D,b,7,s[12]),D=c(D,C,M,A,S,12,s[13]),A=c(A,D,C,M,H,17,s[14]),C=u(C,M=c(M,A,D,C,z,22,s[15]),A,D,d,5,s[16]),D=u(D,C,M,A,w,9,s[17]),A=u(A,D,C,M,x,14,s[18]),M=u(M,A,D,C,a,20,s[19]),C=u(C,M,A,D,g,5,s[20]),D=u(D,C,M,A,B,9,s[21]),A=u(A,D,C,M,z,14,s[22]),M=u(M,A,D,C,y,20,s[23]),C=u(C,M,A,D,m,5,s[24]),D=u(D,C,M,A,H,9,s[25]),A=u(A,D,C,M,p,14,s[26]),M=u(M,A,D,C,_,20,s[27]),C=u(C,M,A,D,S,5,s[28]),D=u(D,C,M,A,l,9,s[29]),A=u(A,D,C,M,v,14,s[30]),C=f(C,M=u(M,A,D,C,b,20,s[31]),A,D,g,4,s[32]),D=f(D,C,M,A,_,11,s[33]),A=f(A,D,C,M,x,16,s[34]),M=f(M,A,D,C,H,23,s[35]),C=f(C,M,A,D,d,4,s[36]),D=f(D,C,M,A,y,11,s[37]),A=f(A,D,C,M,v,16,s[38]),M=f(M,A,D,C,B,23,s[39]),C=f(C,M,A,D,S,4,s[40]),D=f(D,C,M,A,a,11,s[41]),A=f(A,D,C,M,p,16,s[42]),M=f(M,A,D,C,w,23,s[43]),C=f(C,M,A,D,m,4,s[44]),D=f(D,C,M,A,b,11,s[45]),A=f(A,D,C,M,z,16,s[46]),C=h(C,M=f(M,A,D,C,l,23,s[47]),A,D,a,6,s[48]),D=h(D,C,M,A,v,10,s[49]),A=h(A,D,C,M,H,15,s[50]),M=h(M,A,D,C,g,21,s[51]),C=h(C,M,A,D,b,6,s[52]),D=h(D,C,M,A,p,10,s[53]),A=h(A,D,C,M,B,15,s[54]),M=h(M,A,D,C,d,21,s[55]),C=h(C,M,A,D,_,6,s[56]),D=h(D,C,M,A,z,10,s[57]),A=h(A,D,C,M,w,15,s[58]),M=h(M,A,D,C,S,21,s[59]),C=h(C,M,A,D,y,6,s[60]),D=h(D,C,M,A,x,10,s[61]),A=h(A,D,C,M,l,15,s[62]),M=h(M,A,D,C,m,21,s[63]),o[0]=o[0]+C|0,o[1]=o[1]+M|0,o[2]=o[2]+A|0,o[3]=o[3]+D|0},_doFinalize:function(){var n=this._data,r=n.words,e=8*this._nDataBytes,i=8*n.sigBytes;r[i>>>5]|=128<<24-i%32;var o=t.floor(e/4294967296),s=e;r[15+(i+64>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),r[14+(i+64>>>9<<4)]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),n.sigBytes=4*(r.length+1),this._process();for(var a=this._hash,c=a.words,u=0;u<4;u++){var f=c[u];c[u]=16711935&(f<<8|f>>>24)|4278255360&(f<<24|f>>>8)}return a},clone:function(){var t=i.clone.call(this);return t._hash=this._hash.clone(),t}});function c(t,n,r,e,i,o,s){var a=t+(n&r|~n&e)+i+s;return(a<<o|a>>>32-o)+n}function u(t,n,r,e,i,o,s){var a=t+(n&e|r&~e)+i+s;return(a<<o|a>>>32-o)+n}function f(t,n,r,e,i,o,s){var a=t+(n^r^e)+i+s;return(a<<o|a>>>32-o)+n}function h(t,n,r,e,i,o,s){var a=t+(r^(n|~e))+i+s;return(a<<o|a>>>32-o)+n}n.MD5=i._createHelper(a),n.HmacMD5=i._createHmacHelper(a)}(Math));try{if(typeof b['user.profile.profileInfo.profileId']!='undefined'&&b['user.profile.profileInfo.profileId']!=''){b['user.profile.profileInfo.profileId']=utag.ut.md5.MD5(b['user.profile.profileInfo.profileId']).toString();}}catch(e){}},function(a,b){try{if(1){if(b['conversion.funnel.funnelStep']&&b['page.category.category1']&&b['page.category.category2']){if(b['conversion.funnel.funnelStep'].toLowerCase()==='confirmation'&&b['page.category.category1'].toLowerCase()==='book'&&b['page.category.category2'].toLowerCase()==='confirmation-new'){b.booking_counter=1;}}
b.consent_value="(not set)";b.consent_timestamp="(not set)";var consent_cookie=window.utag.gdpr.getCookieValues()||{};if(consent_cookie&&consent_cookie.consent=='true'){b.consent_value="s".concat(consent_cookie.c2).concat('|c').concat(consent_cookie.c3).concat('|p').concat(consent_cookie.c4);b.consent_timestamp=consent_cookie.ts;}}}catch(e){utag.DB(e)}},function(a,b){try{if((typeof b['cp.CONSENTMGR']!='undefined'&&b['cp.CONSENTMGR'].toString().toLowerCase().indexOf('c4:1'.toLowerCase())>-1)){b['ga_displayfeatures']='true'}}catch(e){utag.DB(e);}},function(a,b){try{if(1){var stepArr=[],step=false;if(b['transaction.item.productInfo.productName'])stepArr.push('transaction.item');if(b['cart.item.productInfo.productName'])stepArr.push('cart.item');if(b['filter.element.userInput'])stepArr.push('filter');if(b['product.productInfo.productName'])stepArr.push('product');if(stepArr.length>0){for(var n=0;n<stepArr.length;n++){step=stepArr[n];if(b[step+'.productInfo.productName']&&b[step+'.attributes.variant']&&b[step+'.price.basePrice']){var pn=b[step+'.productInfo.productName'],pv=b[step+'.attributes.variant'],bp=b[step+'.price.basePrice'],len=pn.length;if(len===pv.length&&len===bp.length){var price;for(var i=0;i<len;i++){if(pn[i]==='asr'){price=parseFloat(bp[i]);if(pv[i]!=='')pv[i]+=' ';if(price>0)pv[i]+='chargeable';else pv[i]+='free';}}}}}}}}catch(e){utag.DB(e)}},function(a,b){try{if(1){(function(history){var pushState=history.pushState;history.pushState=function(state){if(typeof history.onpushstate=="function"){history.onpushstate({state:state});}
return pushState.apply(history,arguments);};})(window.history);window.onpopstate=history.onpushstate=function(e){utag.view();}}}catch(e){utag.DB(e)}},function(a,b){try{if(b['conversion.funnel.funnelName']=='bbf'){if(window.lhgData.hasOwnProperty("cart")===true&&utag.data['conversion.funnel.funnelStep']=='personaldata'){b['enh_action']="checkout";b['enh.checkout.step']="1";}else if(window.lhgData.hasOwnProperty("cart")===true&&utag.data['conversion.funnel.funnelStep']=='payment'){b['enh_action']="checkout";b['enh.checkout.step']="2";}}}catch(e){utag.DB(e)}},function(a,b,c,d){try{if(1){c=[b['transaction.attributes.paymentType'],b['transaction.attributes.paymentMethod']];b['transaction.payment.method']=c.join('|')}}catch(e){utag.DB(e);}},function(a,b){try{if(1){var cid,split,trackers;if(b['cp._ga']!==null){split=b['cp._ga'].split('.');b.google_cid=split[2].concat('.')+split[3];}else{window.setTimeout(function(){trackers=ga.getAll();for(var i=0;i<trackers.length;++i){var tracker=trackers[i];var trackerName=tracker.get('name');ga(function(trackerName){cid=tracker.get('clientId');b.google_cid=cid;});}
utag.link(b,null,['153']);},1000);}}}catch(e){utag.DB(e)}}];u.send=function(a,b){var c,d,i;if(u.ev[a]||typeof u.ev["all"]!=="undefined"){if(a==="remote_api"){utag.DB("Remote API event suppressed.");return;}
if(typeof __cmp==="function"){__cmp("getVendorConsents",[522],function(consents,is_successful){var consented_to_tealium=consents.vendorConsents[522];var consented_to_purposes=consents.purposeConsents[2]&&consents.purposeConsents[3]&&consents.purposeConsents[5];if(consented_to_tealium&&consented_to_purposes){execute_send();}else{utag.DB("Detected that consent was not granted for Tealium and/or its listed purposes. Aborting Tealium Collect.");}});}else{execute_send();}
function execute_send(){if(u.data_source){b.tealium_datasource=u.data_source;}
u.make_enrichment_request=false;try{if(utag.gdpr.consent_prompt.isEnabled||utag.gdpr.getConsentState()){b["consent_categories"]=utag.gdpr.getSelectedCategories();b["policy"]="gdpr";}}catch(e){utag.DB(e)}for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){if(typeof utag_err!='undefined'){utag_err.push({e:'extension error:'+e,s:utag.cfg.path+'utag.'+id+'.js',l:c,t:'ex'})}}};if(!u.is_in_sample_group(b)){return false;}
u.get_performance_timing(b);for(i=0;i<u.server_list.length;i++){if(u.enrichment_enabled[i]!==false){u.enrichment_enabled[u.server_list[i]]=true;}}
if(u.server_list.length>1){u.profile_specific_vid=1;}
u.data=utag.datacloud||{};u.data["loader.cfg"]={};for(d in utag.loader.GV(utag.loader.cfg)){if(utag.loader.cfg[d].load&&utag.loader.cfg[d].send){utag.loader.cfg[d].executed=1;}else{utag.loader.cfg[d].executed=0;}
u.data["loader.cfg"][d]=utag.loader.GV(utag.loader.cfg[d]);}
u.data.data=b;for(d in u.data.data){if((d+'').indexOf("qp.")===0){u.data.data[d]=encodeURIComponent(u.data.data[d]);}else if((d+'').indexOf("va.")===0){delete u.data.data[d];}}
if(!b["cp.utag_main_dc_event"]){b["cp.utag_main_dc_visit"]=(1+(b["cp.utag_main_dc_visit"]?parseInt(b["cp.utag_main_dc_visit"]):0))+'';}
b["cp.utag_main_dc_event"]=(1+(b["cp.utag_main_dc_event"]?parseInt(b["cp.utag_main_dc_event"]):0))+'';utag.loader.SC("utag_main",{"dc_visit":b["cp.utag_main_dc_visit"],"dc_event":b["cp.utag_main_dc_event"]+";exp-session"});utag.data["cp.utag_main_dc_visit"]=b["cp.utag_main_dc_visit"];utag.data["cp.utag_main_dc_event"]=b["cp.utag_main_dc_event"];var dt=new Date();u.data.browser={};try{u.data.browser["height"]=window.innerHeight||document.body.clientHeight;u.data.browser["width"]=window.innerWidth||document.body.clientWidth;u.data.browser["screen_height"]=screen.height;u.data.browser["screen_width"]=screen.width;u.data.browser["timezone_offset"]=dt.getTimezoneOffset();}catch(e){utag.DB(e);}
u.data["event"]=a+'';u.data["post_time"]=dt.getTime();if(u.data_enrichment==="frequent"||u.data_enrichment==="infrequent"){u.visit_num=b["cp.utag_main_dc_visit"];if(parseInt(u.visit_num)>1&&b["cp.utag_main_dc_event"]==="1"){u.enrichment_polling=2;}
try{u.va_update=parseInt(localStorage.getItem("tealium_va_update")||0);}catch(e){utag.DB(e);}
u.visitor_id=u.visitor_id||b.tealium_visitor_id||b['cp.utag_main_v_id'];if(u.data_enrichment==="frequent"||(u.data_enrichment==="infrequent"&&parseInt(u.visit_num)>1&&parseInt(b["cp.utag_main_dc_event"])<=5&&u.visit_num!==u.va_update)){u.make_enrichment_request=true;}
u.visitor_service_request=function(t,server){var s="https://"+u.server_prefix+"visitor-service"+(u.region?"-"+u.region:"").replace(/[^-A-Za-z0-9+_.]/g,"")+"."+u.server_domain;var p=u.get_account_profile(server);(function(p){var prefix="tealium_va";var key="_"+p[1]+"_"+p[2];utag.ut["writeva"+p[2]]=function(o){utag.DB("Visitor Attributes: "+prefix+key);utag.DB(o);var str=JSON.stringify(o);if(str!=="{}"&&str!==""){try{localStorage.setItem("tealium_va_update",utag.data["cp.utag_main_dc_visit"]);localStorage.setItem(prefix,str);localStorage.setItem(prefix+key,str);}catch(e){utag.DB(e);}
if(typeof tealium_enrichment==="function"){tealium_enrichment(o,prefix+key);}}};}(p.slice(0)));var vid=u.visitor_id;if(u.profile_specific_vid===1){vid+=p[2];}
utag.ut.loader({id:"tealium_visitor_service_153"+p[2],src:s+"/"+p[1]+"/"+p[2]+"/"+vid.replace(/\?callback=.*/g,"")+"?callback=utag.ut%5B%22writeva"+p[2]+"%22%5D&rnd="+t});};u.do_enrichment=function(server,enrichment_polling,enrichment_polling_delay){if(typeof utag.ut.loader!="undefined"){for(i=0;i<enrichment_polling;i++){setTimeout(function(){u.visitor_service_request((new Date).getTime(),server);},i*enrichment_polling_delay+1);}}};}
var json_string;var regExpReplace=new RegExp(u.visitor_id,"g");if(b.tealium_random&&typeof utag.globals[b.tealium_random]==="object"){for(var downstream_param in utag.globals[b.tealium_random]){u.data.data[downstream_param]=utag.globals[b.tealium_random][downstream_param];}}
if(window.FormData){function postData(server_index,enrichment_polling,enrichment_polling_delay){if(server_index+1>u.server_list.length){return;}
var xhr=new XMLHttpRequest();var server=u.server_list[server_index];var formData=new FormData();xhr.addEventListener("readystatechange",function(){if(xhr.readyState===3){try{u.region=xhr.getResponseHeader("X-Region")||u.region||"";}catch(res_error){utag.DB(res_error);u.region=u.region||"";}
if(u.region)utag.loader.SC("utag_main",{"dc_region":u.region+";exp-session"});utag.DB("dc_region:"+u.region);}else if(xhr.readyState===4){postData(server_index+1,enrichment_polling,enrichment_polling_delay);if(u.make_enrichment_request&&u.enrichment_enabled[server]){u.do_enrichment(server,enrichment_polling,enrichment_polling_delay);}}});xhr.open("post",u.server_list[server_index],true);xhr.withCredentials=true;json_string=JSON.stringify(u.data);if(u.profile_specific_vid===1&&u.visitor_id){json_string=json_string.replace(regExpReplace,u.visitor_id+u.get_account_profile(server)[2]);}
formData.append("data",json_string);xhr.send(formData);}
postData(0,u.enrichment_polling,u.enrichment_polling_delay);}else{for(i=0;i<u.server_list.length;i++){(function(i,enrichment_polling,enrichment_polling_delay){var server=u.server_list[i];setTimeout(function(){json_string=JSON.stringify(u.data);if(u.profile_specific_vid==1&&u.visitor_id){json_string=json_string.replace(regExpReplace,u.visitor_id+u.get_account_profile(server)[2]);}
var img=new Image();img.src=server+"?data="+encodeURIComponent(json_string);if(u.make_enrichment_request&&u.enrichment_enabled[server]){u.do_enrichment(server,enrichment_polling,enrichment_polling_delay);}},i*700);}(i,u.enrichment_polling,u.enrichment_polling_delay));}}}}};try{utag.o[loader].loader.LOAD(id);}catch(e){utag.loader.LOAD(id);}})('153','lufthansa.lx-main');}catch(e){utag.DB(e);}