//tealium universal tag - utag.25944 ut4.0.202101050833, Copyright 2021 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader,u){try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};u.ev={'view':1};u.qsp_delim="&";u.kvp_delim="=";u.base_url='//action';u.pixId="43384";u.pcv="";u.base_url='//action';if(location.protocol=="https:"){u.base_url="//secure"};u.base_url+=".media6degrees.com/orbserv/hbjs?";u.map={};u.extend=[];u.send=function(a,b,c,d,e,f){if(u.ev[a]||typeof u.ev.all!="undefined"){c=[];for(d in utag.loader.GV(u.map)){if(typeof b[d]!=="undefined"&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(e[f]=="pcv"||e[f]=="pixId"){u[e[f]]=b[d];}else{c.push(e[f]+u.kvp_delim+encodeURIComponent(b[d]));}}}}
if(u.pixId){c.push("pixId="+u.pixId)};if(u.pcv){c.push("pcv="+u.pcv)};c.push('new_or_repeat_customer='+b._new_repeat);c.push('locale='+b.Locale);c.push('language='+b.Language);c.push('channel='+b.channel_id);c.push('source_id='+b.PppId);c.push('date='+b.UTCTime);c.push('page_stage='+b.PageStage);c.push('page_type='+b.PageType);c.push('product_category='+b.ProductCategory);c.push('product_id='+b.PfIds);c.push('marketing_SKU='+b.ProductIds);c.push('visitor_id='+b.VisitorId);c.push('product_fit='+b.ProductFit);c.push('device='+b.ResolvedDeviceUIType);c.push('absolute_path='+b.AbsolutePath);c.push('page_name='+b.PageName);c.push('registered_or_unregistered='+b.registered_or_unregistered);c.push('session_id='+b.SessionId);c.push('product_name='+b.MostRecentBreadcrumbName);c.push('audience_id='+b.AudienceNames);if(typeof b._corder!='undefined'&&b._corder!=''){c.push('mx6value='+b._csubtotal);c.push('mx6id='+b._corder);}
u.s=document.getElementsByTagName("script")[0];u.scr=document.createElement("script");u.scr.type="text/javascript";u.scr.setAttribute("async","");u.scr.src=u.base_url+c.join(u.qsp_delim);u.s.parentNode.insertBefore(u.scr,u.s);}}
try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}})('25944','vprt.prf-main');}catch(e){}
