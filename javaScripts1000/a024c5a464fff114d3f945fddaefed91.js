!function(l,r){l.cntrUpTag={pixelserv:"https://pixel.sitescout.com",sync:function(){var e=l.cntrUpTag.pixelserv+"/dmp/asyncPixelSync",n=r.createElement("iframe");function t(){r.body.appendChild(n);var t=n.contentWindow.document;t.open().write("<body onload=\"window.location.href='"+e+"'\">"),t.close()}(n.frameElement||n).style.cssText="width: 0; height: 0; border: 0; display: none !important;",n.src="javascript:false",r.body?t():r.addEventListener?r.addEventListener("DOMContentLoaded",t):r.attachEvent("onreadystatechange",function(){"complete"===r.readyState&&t()})},track:function(t,e){var n=l.cntrUpTag.pixelserv,r=l[t]||{};r.hasOwnProperty("cntr_url")||(r.cntr_url=l.cntrUpTag.cntrUrl);var c,a=[];for(var o in r)r.hasOwnProperty(o)&&a.push(encodeURIComponent(o)+"="+encodeURIComponent(r[o]));"undefined"==typeof Storage||!1===l.cntrUpTag.cookieless||(c=JSON.parse(l.localStorage.getItem("cntr_attr"))||[])&&c.length&&c.forEach(function(t){var e="cntr_clickAuctionId="+encodeURIComponent(t.aid);a.indexOf(e)<0&&a.push(e)});var i=a.join("&"),s=n+"/up/"+e+(i?"?"+i:"");(new Image).src=s},cntrUrl:"",cookieless:!0};var t,e,n,c,a,o,i,s=r.currentScript;if(!s)for(var p=r.getElementsByTagName("script"),d=p.length-1;0<=d;d--)if(/\/up.js\?/.test(p[d].src)){s=p[d];break}try{l.cntrUpTag.cntrUrl=top.location.href}catch(t){l.cntrUpTag.cntrUrl=l.location!==l.parent.location?r.referrer:r.location.href}function g(t,e){var n=new RegExp("[?&]"+e+"=([^&]+)&?"),r=t.match(n);return r&&r[1]||null}s&&("1"===g(e=0<=(t=s.src.indexOf("?"))?s.src.slice(t):"","um")&&l.cntrUpTag.sync(),n=g(e,"ck")||"cntr_auctionId",c=g(l.cntrUpTag.cntrUrl,n),"undefined"!=typeof Storage&&"0"!==g(e,"ca")&&c?(a=JSON.parse(l.localStorage.getItem("cntr_attr"))||[],o=(new Date).getTime()-7776e6,(i=a.filter(function(t){return t.ts>o})).push({ts:(new Date).getTime(),aid:c}),l.localStorage.setItem("cntr_attr",JSON.stringify(i))):l.cntrUpTag.cookieless=!1)}(window,document,navigator);