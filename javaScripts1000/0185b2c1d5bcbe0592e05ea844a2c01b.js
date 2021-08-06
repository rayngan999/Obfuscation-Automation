if (themoneytizer_async != 1) {
var confiantWrap = function confiantWrap(a,b,c,d,e,f,g){'v2.202005201049';function h(a){for(var b in l)if(b===a&&l[b])return l[b];return null}function i(a){if("string"!=typeof a)return a;var b=a.match(/[^\u0000-\u024F\u1E00-\u1EFF\u2C60-\u2C7F\uA720-\uA7FF]/g);if(!b)return a;for(var c=0;c < b.length;c++)a=a.replace(b[c],encodeURIComponent(b[c]));return a}function j(a){return a=i(a),(s(a)||"")[y]("/","_")[y]("+","-")}function k(b,c,e,g){var h=D+t(b)+"&d="+c,i="err__"+1*new Date;q[i]=g;var j="<"+w+' type="text/java'+w+'">window["'+d+'"]={};'+'window["'+d+'"]["tpid"]="'+b+'";'+'window["'+d+'"]["'+b+'"]='+r.stringify(e)+";"+"</"+w+">",k="<"+w+" on"+z+'="void('+i+'())" '+x+'="'+h+'" type="text/java'+w+'" ></'+w+">";f&&(k="<"+w+" on"+z+'="void('+i+'())" '+'" type="text/java'+w+'" >'+unescape(f)+"</"+w+">"),a[B](j+k)}var l=b.adserverTargeting,m=b.bidder,n=null,o=b.size;g=g||{},f=f||null;var p=g.devMode,q=a.parentWindow||a.defaultView,r=q.JSON,s=q.btoa,t=q.encodeURIComponent;if(!r||!s)return!1;var u="t",v="i",w="script",x="src",y="replace",z="error",A="stringify",B="wr"+v+u+"e";c.indexOf("http")< 0&&(c="https://"+c);var C,D=c+"/?wrapper="+t(d)+"&tpid=";C=h("oz_winner")||"ozone"===m?{k:{hb_bidder:[h("oz_winner")],hb_size:[o]}}:{k:{hb_bidder:[m],hb_size:[o]}};var E=!1,F=!(!window._clrm||!window._clrm.gpt),G=!(!window.confiant||!window.confiant.settings),H=window.confiant||window._clrm||{};return F||G||H.isListener||(H.isListener=!0,function(){function a(a){var b="cb";if("string"==typeof a.data&&a.data.indexOf(b+d)>-1){var c=a.data.substr(b.length+d.length),f=atob(c),g=window.JSON.parse(f);try{e.apply(this,g)}catch(a){console.log("Custom callback failed with an error: "+a)}"undefined"!=typeof confiantAutoRFCb&&confiantAutoRFCb.apply(null,g)}}if(window.addEventListener)try{window.top.addEventListener("message",a,!1)}catch(b){window.addEventListener("message",a,!1)}else window.top.attachEvent("onmessage",a)}()),function(){try{n=j(d+"/"+C.k.hb_bidder[0]+":"+C.k.hb_size[0]);var c={wh:n,wd:r.parse(r[A](C)),wr:0};2===p&&(c.cb=1e3*Math.random());var f={prebid:{adId:b.adId,cpm:b.cpm,s:b.adUnitCode},tp_crid:b.creativeId},h=!1;try{h=!!q.frameElement.getAttribute("data-forced-sandbox")}catch(a){}var i={d:c,t:escape(b.ad),isE:!0,cb:e,id:f,isFSb:h,devMode:p,isPerf:g.isPerf,isLS:g.isLS};k(n,j(r[A](c)),i,function(){a[B](b.ad)})}catch(a){E=!0;var c={property_id:d,uh:n||"wt_not_established",url:window.location.href||window.top.location.href||document.url||"url not found",label:"confiantWrap_initialize",msg:a.message},l=new XMLHttpRequest;l.open("POST","https://protected-by.clarium.io/werror",!0),l.send(s(r.stringify(c)))}}(),a.close(),!E};
var themoneytizer_async = 1;
(function(){window.whenFormatFctDefined=function($context,$variable){if($context[$variable]){$context[$variable]()}else{Object.defineProperty($context,$variable,{configurable:!0,enumerable:!0,writeable:!0,get:function(){return this['_'+$variable]},set:function(val){this['_'+$variable]=val;$context[$variable]()}})}}}).call(this);
(function(){window.whenDefined=function($context,$variable,$callback){if($context[$variable]){$callback()}else{Object.defineProperty($context,$variable,{configurable:!0,enumerable:!0,writeable:!0,get:function(){return this['_'+$variable]},set:function(val){this['_'+$variable]=val;$callback()}})}}}).call(this);
if (window.jQuery) {
if (jQuery.ajaxSetup) {
jQuery.ajaxSetup({cache:true});
}
}
var geo = document.createElement('script');
geo.type = 'text/javascript';
geo.async = true;
geo.src = 'https://g.themoneytizer.net/g/';
var node = document.getElementsByTagName('script')[0];
node.parentNode.appendChild(geo);
var eucountries = ["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE","EU", "ES", "FI", "FR", "GB", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK"];
(function(){var s=document.createElement('script'),
t=document.getElementsByTagName('script')[0];s.type='text/javascript';
s.src='https://ads.themoneytizer.com/moneybile.js';t.parentNode.insertBefore(s,t)})();

var sas = sas || {};
sas.cmd = sas.cmd || [];

 sas.cmd.push(function() {
             sas.setup({networkid: 1097, domain: "https://ww1097.smartadserver.com", async: true, renderMode: sas.renderMode.ON_DEMAND });
        });

var generic = document.createElement("script");
generic.setAttribute("type", "text/javascript");
generic.setAttribute("src", "https://ww1097.smartadserver.com/config.js?nwid=1097");
document.head.appendChild(generic);
}
