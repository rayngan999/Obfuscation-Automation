<html><body>

<script>
(function() {
var ft_D9Tag=function(g,h,k,l,m,n){var a={v:"5.3.5",register:"3",cGuid:l,D9Settings:g||{},privacy:k,d9Callback:h,guid:"",d9TimeoutMS:parseInt(m,10)||0,d9Timeout:0,forceF:n||!1,forceFDeploy:!1,urlMod:"",status:"",regName:"ftD9ResponseRegister",getGuid:function(){var c="",b=decodeURIComponent("%"+"5C");window.ft_GUID?c=window.ft_GUID:a.cGuid&&!RegExp("9{13}"+b+"d").test(a.cGuid)&&RegExp(b+"d{4}[0-9A-F]{10}").test(a.cGuid)&&(c=a.cGuid);return c},deployCallback:function(c){var b={};"timeout"==a.status&&(a.deployCallback=function(){});c?b=c:(b.guid=a.guid,b.d9ID=a.getD9Id(),b.time=a.getD9Time(),b.urlMod=a.urlMod);a.d9Callback(null,b)},getD9Id:function(){return window.ft_d9ID||""},getD9Time:function(){return window.ft_d9Time||""},d9Response:function(c){var b="";clearTimeout(a.d9Timeout);try{b=c.DeviceID[0]}catch(e){}"timeout"!=b&&b?a.getD9Id()||(window.ft_d9ID=b||"",a.getD9Id()&&(a.d9Response=function(){},a.status="ok")):(a.urlMod+="&ftd9er=1&erMsg="+String(b),a.status="timeout");try{window.ft_d9SegList=c.ftseg[0]}catch(e){}try{window.ft_d9Time=c.time[0]}catch(e){}a.deployCallback()},ftD9Callback:function(c){var b=function(a){"function"==typeof a.d9Response&&a.d9Response(c)},e=[],d=a.regName+a.register;a.legacyRegisters();for(var f=0;f<window[d].length;f++)window[d][f].forceF?window[d][f].forceFDeploy?b(window[d][f]):e.push(window[d][f]):b(window[d][f]);window[d]=[];0<e.length&&(window[d]=e,window[d][0].forceFDeploy=!0,a.updateD9Objs(window[d][0].D9Settings),window.d9PendingXDR=void 0,window.D9(D9v,D9r,"d9.flashtalking.com"))},legacyRegisters:function(){var c=!1,b=a.regName+a.register;if(!window[b+"Cap"]){var e=0===window[b].length?!0:!1;(function(){var b=a.regName;return[b,b+"2"]})().forEach(function(a){"undefined"!=typeof window[a]&&window[a].constructor==Array&&0<window[a].length&&(window[b]=window[b].concat(window[a]),window[a]=[],c=!0)});e&&0<window[b].length&&(window[b][0].forceFDeploy=!0)}return c},updateD9Objs:function(c){var b=window;b.D9v={};b.D9v.UserID=a.guid||"99999999999999";b.D9r={};b.D9r.DeviceID=!0;b.D9r.callback=function(b){a.ftD9Callback(b)};var e=c.D9r||"";c=c.D9v||(e?"":c);for(var d in c)b.D9v[d]=c[d];for(d in e)b.D9r[d]=e[d]},init:function(){var c=a.regName+a.register;if(a.privacy&&"x"!==a.privacy)a.deployCallback({privacy:a.privacy});else{var b=a.getGuid();"undefined"==typeof window[c]&&(window[c]=[]);a.legacyRegisters()&&"undefined"!=typeof window.D9r&&(window.D9r.callback=function(b){a.legacyRegisters();a.ftD9Callback(b)});window[c].push(a);b&&(window.ft_GUID=b,a.guid=b);if(a.getD9Id()&&!a.forceF)a.ftD9Callback();else{!a.forceFDeploy&&(0===window[c].length&&a.forceF||1===window[c].length)&&(a.forceFDeploy=!0);if("undefined"==typeof window.D9||"function"==typeof window.D9&&"undefined"!=typeof window.d9PendingXDR||a.forceFDeploy)a.updateD9Objs(a.D9Settings),window[c+"Check"]=!0,"function"==typeof window.D9?(window.d9PendingXDR=void 0,window.D9(D9v,D9r,"d9.flashtalking.com")):(window.D9scr=document.createElement("script"),D9scr.type="text/javascript",D9scr.async=!0,D9scr.src="ht"+"tps://d9.flashtalking.com/d9core",window.D9=document.getElementsByTagName("script")[0],D9.parentNode.insertBefore(D9scr,D9));0<a.d9TimeoutMS&&(a.d9Timeout=setTimeout(function(){a.d9Response({DeviceID:["timeout"]})},a.d9TimeoutMS))}}}};a.init()};
var init=function(){
	ft_D9Tag({
	    D9v: {
	        TAG: "2",
	        AdvID: "1121",
	        SiteID: "1638"
	    },
	    D9r: {
	        DeviceID: !0
	    }
	}, function(c, b) {

      (new Image).src = "https://i.flashtalking.com/ft/?aid=1638&uid=D9:"+b.d9ID+"&seg=xh0";


    }, "x", "99999999999999");
};init();}());
</script>

<!--  Segment Tag | Add Segment |  (1638) | Homepage_2019 (xh0) | Kohls (419) | Expected URL:  | Export Date: Mar. 13, 2019 @ 9:46pm UTC -->
<img style="width:1px; height:1px;" src="https://servedby.flashtalking.com/segment/modify/xh0;;pixel/?name=Homepage_2019"/>

<img src="https://idsync.rlcdn.com/422866.gif?partner_uid=99999999999999&" />
</body></html>