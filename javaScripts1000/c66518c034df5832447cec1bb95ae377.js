//tealium universal tag - utag.88718 ut4.0.202106281851, Copyright 2021 Tealium.com Inc. All Rights Reserved.
try{var isDevMode=true;var usePlanVersion=5;if(document.domain.indexOf('world.hyatt.com')>-1||document.domain.indexOf('hyatt.com')>-1){isDevMode=false;usePlanVersion=4;}
window.mParticle={config:{isDevelopmentMode:isDevMode,dataPlan:{planId:'web_phase_1',planVersion:usePlanVersion}}};var cust_email_id=null;var cust_gp_num=null;if(utag_data.customer_email!=null){cust_email_id=utag_data.customer_email;}else if(utag_data.email_address!=null){cust_email_id=utag_data.email_address;}
if(utag_data.gp_number!=null){cust_gp_num=utag_data.gp_number;}
var ad_visitor_id=null;var cntAdbCheck=0;function checkAdobeID(){if(cntAdbCheck<=5&&s.Util.cookieRead('s_ecid')!=null&&s.Util.cookieRead('s_ecid')!=''){ad_visitor_id=s.Util.cookieRead('s_ecid').split('|')[1];cntAdbCheck+=1;executemParticle();}else{cntAdbCheck+=1;if(cntAdbCheck<=5){setTimeout(checkAdobeID,1000);}else{executemParticle();}}}
if(s.marketingCloudVisitorID!=null&&s.marketingCloudVisitorID!=''){ad_visitor_id=s.marketingCloudVisitorID;executemParticle();}else{checkAdobeID();}
function executemParticle(){if(document.domain.indexOf('world.hyatt.com')>-1||document.domain.indexOf('world.hyattstg.com')>-1){var identityRequest={userIdentities:{email:WoH.AuthProfile.email||null,other:WoH.AuthProfile.goldpassportId||null,other2:ad_visitor_id}};}else{var identityRequest={userIdentities:{email:cust_email_id,other:cust_gp_num,other2:ad_visitor_id}};}
window.mParticle.config.identifyRequest=identityRequest;(function(t){window.mParticle=window.mParticle||{};window.mParticle.EventType={Unknown:0,Navigation:1,Location:2,Search:3,Transaction:4,UserContent:5,UserPreference:6,Social:7,Other:8};window.mParticle.eCommerce={Cart:{}};window.mParticle.Identity={};window.mParticle.config=window.mParticle.config||{};window.mParticle.config.rq=[];window.mParticle.config.snippetVersion=2.2;window.mParticle.ready=function(t){window.mParticle.config.rq.push(t)};var e=["endSession","logError","logBaseEvent","logEvent","logForm","logLink","logPageView","setSessionAttribute","setAppName","setAppVersion","setOptOut","setPosition","startNewSession","startTrackingLocation","stopTrackingLocation"];var o=["setCurrencyCode","logCheckout"];var i=["identify","login","logout","modify"];e.forEach(function(t){window.mParticle[t]=n(t)});o.forEach(function(t){window.mParticle.eCommerce[t]=n(t,"eCommerce")});i.forEach(function(t){window.mParticle.Identity[t]=n(t,"Identity")});function n(e,o){return function(){if(o){e=o+"."+e}var t=Array.prototype.slice.call(arguments);t.unshift(e);window.mParticle.config.rq.push(t)}}var mp=document.createElement("script");mp.type="text/javascript";mp.async=true;mp.src=("https:"==document.location.protocol?"https://jssdkcdns":"http://jssdkcdn")+".mparticle.com/js/v2/"+t+"/mparticle.js";var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(mp,c)})("us1-b764179128a18f438acf536238ad0890");(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
u.encode=function(a,b){b="";try{b=encodeURIComponent(a)}catch(e){utag.DB(e);}if(b==""){b=escape(a);}return b}
u.ev={'view':1,'link':1};u.map={"sc_page_title":"Page","product_id":"Hotel Web Sites","page_type":"Page Type","page_url":"Page URL","hyatt_platform":"HCOM Platform","dom.domain":"Domain"};u.extend=[];u.send=function(a,b){if(u.ev[a]||typeof u.ev.all!="undefined"){var c,d,e,f;u.data={};c=[];if(b['dom.domain'].indexOf('world.hyatt.com')>-1||b['dom.domain'].indexOf('world.hyattstg.com')>-1){var identityRequest={userIdentities:{email:WoH.AuthProfile.email||null,other:WoH.AuthProfile.goldpassportId||null,other2:ad_visitor_id}};}else{var identityRequest={userIdentities:{email:cust_email_id,other:cust_gp_num,other2:ad_visitor_id}};}
if(b['cp.s_sq']!=null&&b['cp.s_sq'].indexOf('link%3DSIGN%2520IN%26')>-1){var identityCallback=function(result){if(result.getUser()){var aliasRequest=mParticle.Identity.createAliasRequest(result.getPreviousUser(),result.getUser());mParticle.Identity.aliasUsers(aliasRequest);}};mParticle.Identity.login(identityRequest,identityCallback);}else{if((document.domain.indexOf('hyatt.com')>-1||document.domain.indexOf('hyattstg.com')>-1)&&(utag_data.referring_domain!=null&&(utag_data.referring_domain.indexOf('world.hyatt.com')>-1||utag_data.referring_domain.indexOf('world.hyattstg.com')>-1))){if(b['gp_login_status']=='Logged-in'){var identityCallbackhyatt=function(result){if(result.getUser()){}};mParticle.Identity.login(identityRequest,identityCallbackhyatt);}}
if((document.domain.indexOf('world.hyatt.com')>-1||document.domain.indexOf('world.hyattstg.com')>-1)&&(utag_data.referring_domain!=null&&(utag_data.referring_domain.indexOf('hyatt.com')>-1||utag_data.referring_domain.indexOf('hyattstg.com')>-1))){if(WoH.user.isLoggedIn()==true){var identityCallbackwoh=function(result){if(result.getUser()){}};mParticle.Identity.login(identityRequest,identityCallbackwoh);}}}
for(d in utag.loader.GV(u.map)){if(typeof b[d]!=="undefined"&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(!u.data.hasOwnProperty(e[f])){c.push(u.encode(b[d]));}
u.data[e[f]]=b[d];}}}
if(a==="view"){mParticle.logPageView('Page View',u.data,{});}
}};utag.o[loader].loader.LOAD(id);}("88718","hyatt.main"));}}catch(error){utag.DB(error);}
