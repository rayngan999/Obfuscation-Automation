var _aa=null;var _ba=null;var _ca=false;var _da=1*24*60*60*1000;var _ea=1*12*60*60*1000;var _fa=[];var _ga=[];var _ha=['//hades.srvtrck.com/v1/profile?action=create&ykuid={YKUID}'];var _ia=['//hades.srvtrck.com/v1/profile?action=opt_out&ykuid={YKUID}'];var _ja=['//hades.srvtrck.com/v1/profile?action=opt_in&ykuid={YKUID}'];function log(xa){if(_ca){console.log(xa);}}
function errorLogger(ya){ya="Hades Server:"+ya+" URL: "+document.location.href+" Agent: "+navigator.userAgent;if(_ca){console.log(ya);}
img=document.createElement("img");img.src='//r.srvtrck.com/v1/log?message='+encodeURIComponent(ya);};function _ka(za,Aa,Ba){for(i=0;i<za.length;i++){za[i]=za[i].replace(Aa,Ba);}
return za;};function cookiesEnabled(){try{var Ca=false;document.cookie="testcookie";Ca=(document.cookie.indexOf("testcookie")!=-1)?true:false;return(Ca);}catch(err){log("cookies are disabled "+err);return false;}};function _la(){if(location.protocol==='https:'){_ka(_ha,'http','https');_ka(_fa,'http','https');_ka(_ia,'http','https');_ka(_ja,'http','https');}};function _ma(){var Da=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15);log("generated uuid: "+Da);return Da;};var _na=false;if('localStorage' in window){try{window.localStorage.setItem('_tmptest','tmpval');window.localStorage.removeItem('_tmptest');_na=true;}
catch(BogusQuotaExceededErrorOnIos5){}};if(_na){try{if(window.localStorage){_aa=window.localStorage;_ba='localStorage';}}
catch(E3){}}
else if('globalStorage' in window){try{if(window.globalStorage){if(window.location.hostname=='localhost'){_aa=window.globalStorage['localhost.localdomain'];}
else{_aa=window.globalStorage[window.location.hostname];}
_ba='globalStorage';}}
catch(E4){}};if(_ba==null&&cookiesEnabled()){_ba="cookieStorage";}
function _oa(){var Ea=_pa("uuid");if(Ea==null){Ea=_ma();_qa("uuid",Ea);_qa("opt_out","false");}
return Ea;};function _ra(Fa,Ga,Ha){var d=new Date();d.setTime(d.getTime()+(Ha*24*60*60*1000));var Ia="expires="+d.toUTCString();document.cookie=Fa+"="+Ga+"; "+Ia;};function _sa(Ja){var Ka=Ja+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1);if(c.indexOf(Ka)==0)return c.substring(Ka.length,c.length);}
return null;};function _ta(La){if(_ba=='localStorage'||_ba=='globalStorage'){try{var Ma=_aa.removeItem(La);return Ma;}catch(err){errorLogger('delete from local storage failed, key: '+La+" ,msg:"+err);}}else if(_ba=='cookieStorage'){try{var Ma=_ra(La,'',-10);return Ma;}catch(err){errorLogger('delete from cookie failed, key: '+La+" ,msg:"+err);return null;}}};function _pa(Na){if(_ba=='localStorage'||_ba=='globalStorage'){try{var Oa=_aa.getItem(Na);return Oa;}catch(err){errorLogger('get from localstorage failed, key: '+Na+" ,msg:"+err);return null;}}else if(_ba=='cookieStorage'){try{var Oa=_sa(Na);return Oa;}catch(err){errorLogger('get from cookie failed, key: '+Na+" ,msg:"+err);return null;}}};function _qa(Pa,Qa){if(_ba=='localStorage'||_ba=='globalStorage'){try{_aa.setItem(Pa,Qa);}catch(err){errorLogger('set to local storage failed, key: '+Pa+" ,msg:"+err);}}else if(_ba=='cookieStorage'){try{_ra(Pa,Qa,365);}catch(err){errorLogger('set to cookie failed, key: '+Pa+" ,msg:"+err);}}};function _ua(Ra){for(var i=0;i<Ra.length;i++){var Sa=Ra[i];obj=document.createElement("img");obj.src=Sa;log("syncing: "+Sa);}};function _va(Ta){if(_sa('OPT-OUT')){return;}
for(var i=0;i<Ta.length;i++){var Ua=Ta[i];log("syncing: "+Ua);try{iframe=document.createElement('iframe');iframe.id='ykhades';iframe.name='ykhades';iframe.src=Ua;iframe.frameborder=0;iframe.height=0;iframe.width=0;var Va=document.getElementsByTagName('body')[0];if(Va){Va.appendChild(iframe);}else{errorLogger("could not append iframe: "+Ua);return;}}catch(err){message='_hadesIframeSync failed : message:'+err.message;errorLogger(message);}}};function getQueryVariable(Wa){var Xa=window.location.search.substring(1);var Ya=Xa.split('&');for(var i=0;i<Ya.length;i++){var Za=Ya[i].split('=');if(decodeURIComponent(Za[0])==Wa){return decodeURIComponent(Za[1]);}}
log('Query variable %s not found',Wa);};function _wa(){var $a=window.location.href;if($a.indexOf('ykuid')!=-1){var ab=getQueryVariable('ykuid');var bb=_pa("uuid");if(bb==null){_qa("uuid",ab);_qa("opt_out","false");}else{_ta('last_sync_partner');_ta('last_sync');}}};function init(){if(!('postMessage' in window)){errorLogger('postMessage not supported');return;}
_wa();try{var cb="true"==_pa("opt_out")||_sa('OPT-OUT')!=null;var db=_oa();var eb={};eb.uuid=db;eb.optOut=cb;eb.action='setUuidYK';var fb='*';log("sending yuid: "+db);var m=JSON.stringify(eb);window.parent.postMessage(m,fb);if(cb){return;}
var gb=_pa("last_sync_partner");gb=gb==null?null:new Date(Date.parse(gb));if(gb==null||((new Date().getTime()-gb.getTime())>_da)){var hb=_ka(_fa,'{YKUID}',_oa());_ua(hb);var ib=_ka(_ga,'{YKUID}',_oa());_va(ib);_qa("last_sync_partner",new Date());}
gb=_pa("last_sync");gb=gb==null?null:new Date(Date.parse(gb));if(gb==null||((new Date().getTime()-gb.getTime())>_ea)){var hb=_ka(_ha,'{YKUID}',_oa());_ua(hb);_qa("last_sync",new Date());}}catch(err){errorLogger('failed in receiveMessage : '+err.message);}};try{init();}catch(err){errorLogger('failed in load : '+err.message);}