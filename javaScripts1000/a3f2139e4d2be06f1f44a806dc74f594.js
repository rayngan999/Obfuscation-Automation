define(['module.base','session'],function(Module,_session){Module.Alerts=function(){var self=this;self.init=function(){self.high_alerts();};self.high_alerts=function(){var a=setTimeout(function(){if(typeof isAlertsTakeOver!="undefined"&&isAlertsTakeOver!=null&&isAlertsTakeOver==true){var closed_alerts=_session.fld('closed_takeover_alerts'),code=null,alert_closed=false,p=0,_closed_alerts=[];if(closed_alerts!=null){_closed_alerts=Function('return ['+closed_alerts+']')();}
if(typeof window.placecode!="undefined"&&window.placecode!=null){code=window.placecode;}
for(p=_closed_alerts.length-1;p>=0;p--){if(code==_closed_alerts[p]){alert_closed=true;break;}}
if(alert_closed===false){var url='/alerts/high-alert/';if(typeof window.placecode!="undefined"&&window.placecode!=null){url+=(window.placecode+"/");}
if(typeof window.postalcode!=null&&window.postalcode!=null){url+=(window.postalcode+"/");}
if(typeof window.gridindex!="undefined"&&window.gridindex!=null){url+=(window.gridindex+"/");}
clearTimeout(a);window.location=url;}}else{if(typeof isSkiPage!="undefined"&&isSkiPage!=null&&isSkiPage===true){var url='/alerts/high-alert/';if(typeof window.placecode!="undefined"&&window.placecode!=null){url+=(window.placecode+"/");}
document.getElementById("warning-link").href=url;};}},500);};self.redirect_url=function(url){if(typeof window.placecode!="undefined"&&window.placecode!=null){url+=(window.placecode+"/");}
if(typeof window.postalcode!=null&&window.postalcode!=null){url+=(window.postalcode+"/");}
if(typeof window.gridindex!="undefined"&&window.gridindex!=null){url+=(window.gridindex+"/");}
return url;};self.fix_banner_link=function(){var banner_elem=document.getElementById("takeover-band"),elem='',addon_url='';if(!banner_elem)return;if(typeof window.postalcode!=null&&window.postalcode!=null){addon_url+="/"+(window.postalcode);}
if(typeof window.gridindex!="undefined"&&window.gridindex!=null){addon_url+="/"+(window.gridindex);}
elem=banner_elem.getElementsByTagName('a');if(!elem)return;for(var i=0;typeof elem[i]!=='undefined';i++){if(elem[i].className.match(/warning-link/)&&typeof elem[i].href!='undefined'){if(elem[i].href.indexOf(addon_url)==-1){elem[i].href+=addon_url;}}}}};return Module.factory('Alerts');});;