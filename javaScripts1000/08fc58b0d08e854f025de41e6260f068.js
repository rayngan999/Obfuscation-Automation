
function getCookie(e){var t=document.cookie,o=e+"=",e=t.indexOf("; "+o);if(-1==e){if(0!=(e=t.indexOf(o)))return null}else{e+=2;var a=document.cookie.indexOf(";",e);-1==a&&(a=t.length)}return decodeURI(t.substring(e+o.length,a))}function neustar_response(e){var t,o,a,i,n;t=document,(o=t.createElement("script")).type="text/javascript",o.async=!0,o.onload=function(){},null==getCookie("smartDashLRX")&&(a=e,i=(n=new Date).getTime(),n.setTime(i+2592e6),n=n.toUTCString(),document.cookie="smartDashLRX="+a+"; SameSite=None; Secure; expires="+n+"; path=/; domain=."+location.hostname.replace(/^www\./i,"")),o.src="https://lsdm.co/smrtdsh/rec2.cfm?cookie="+getCookie("smartDash")+"&ns="+e+"&scr="+getCookie("smartDashLRX"),t.getElementsByTagName("head")[0].appendChild(o)}var uuid,cookieName,cookieValue,expirationTime,dateTimeNow,date,myCookie=getCookie("smartDash"),dt=(new Date).getTime();null==myCookie&&(dt=(new Date).getTime(),uuid="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=(dt+16*Math.random())%16|0;return dt=Math.floor(dt/16),("x"==e?t:3&t|8).toString(16)}),cookieName="smartDash",cookieValue=uuid,expirationTime=2592e3,expirationTime*=1e3,dateTimeNow=(date=new Date).getTime(),date.setTime(dateTimeNow+expirationTime),date=date.toUTCString(),document.cookie=cookieName+"="+cookieValue+"; SameSite=None; Secure; expires="+date+"; path=/; domain=."+location.hostname.replace(/^www\./i,""),function(e,t){(t=e.createElement("script")).type="text/javascript",t.async=!0,t.onload=function(){},t.src="https://aa.agkn.com/adscores/g.js?sid=9212306938&cv1="+getCookie("smartDash"),e.getElementsByTagName("head")[0].appendChild(t)}(document)),null!=myCookie&&function(e,t){(t=e.createElement("script")).type="text/javascript",t.async=!0,t.onload=function(){},t.src="https://lsdm.co/smrtdsh/rec2.cfm?cookie="+getCookie("smartDash")+"&utk="+btoa(location.href.replace(/^www\./i,""))+"&scr="+getCookie("smartDashLRX"),e.getElementsByTagName("head")[0].appendChild(t)}(document);