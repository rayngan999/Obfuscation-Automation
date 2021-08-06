<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
<script type="text/javascript">!function(n){var t={};function e(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return n[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=n,e.c=t,e.d=function(n,t,i){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:i})},e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=2)}([function(n,t){n.exports={iterate_selfandparents:function(n,t){do{try{if(n&&t.call(n))return!0}catch(e){}}while(n&&n.parent&&n!==n.parent&&(n=n.parent))},iframe_findfromwindow:function(n){try{return n.frameElement}catch(t){}return null},get_script_src:function(){if(document.currentScript)return document.currentScript.src;var n=document.getElementsByTagName("script");for(var t in n){var e=n[t];if(e.src&&e.src.indexOf("technoratimedia.com/")>0)return e.src}return null}}},function(n,t){function e(n){var t=0,e=n;do{n=e,e=decodeURIComponent(n),t++}while(t<10&&e!==n);return e&&(e.match(/\w+(?:@)[a-zA-Z_]+?\.[a-zA-Z]{2,3}/)||e.match(/(?:username|password|sessionid)=/))}n.exports=function(){var n=null,t=!1,i=!1,r=!1;try{n=window.top.location.href;try{e(window.top.document.referrer)&&(window.top.document.referrer,t=!0)}catch(c){}}catch(c){}if(null===n){i=!0;for(var o=20,a=window;o>0&&a!==window.top;){try{e(n=a.document.referrer)&&(t=!0),a.location.href}catch(c){}a=a.parent,o--}if(window.location.ancestorOrigins&&window.location.ancestorOrigins.length){var d=window.location.ancestorOrigins[window.location.ancestorOrigins.length-1];null!==n&&n.substr(0,d.length)===d||(r=!0,n=d)}}return null!==n&&"string"==typeof n&&n.match(/^https?:\/\/(?:[^\@\/]*\@)?([^\/\:]+)/)?(e(n)&&(t=!0),n.length>500&&(n=n.replace(/\?.*$/,""))):n=function(n){try{if(window.location.protocol.match(/^https?:$/))return window.location.protocol}catch(c){}return n.match(/^https:/)?"https:":"http:"}(n||"")+"//unknown/",{origin:n,is_in_crossdomain_frame:i,is_in_nested_crossdomain_frame:r,pii_detected:t}}()},function(n,t,e){window.TN8=window.TN8||{},window.TN8.apn=e(3),window.TN8.tag=e(4),window.TN8.viewability=e(5),window.TN8.location=e(1),window.TN8.utils=e(0),window.TN8.privacyString=e(6),n.exports=window.TN8,e(7)},function(n,t){t.writeTag=function(n,t,e,i,r,o,a){var d=document,c=document.getElementsByTagName("script"),u=1;for(u=1;u<c.length;u++){if(c[c.length-u].src.indexOf("/adserv_")>0)break}var s=c[c.length-u],l=s.src.replace(/^[^\?]+\??/,""),w=(s.src.substring(0,6),window.getCookie&&getCookie("TMEDIA")||-1),m=window.getCookie&&getCookie("TMEDIAISP");-1!=w&&(l=l+"&dmsc="+w.substring(5,w.indexOf("/"))+"&dmsi="+escape(m));a=a||"0";var f=/iphone|ipad|ipod|android|silk|kindle fire/i.test(navigator.userAgent.toLowerCase()),p="https://secure.adnxs.com";(p+="/ttj?id="+r,e.indexOf(",")>-1)?p+="&promo_alignment=none&size="+e.substring(0,e.indexOf(","))+"&promo_sizes="+e.substring(e.indexOf(",")+1):p+="&size="+e;p+="&pt1="+n,p+="&pt2="+t,p+="&pt3="+a,p+="&rev="+a,p+="&position="+("ATF"===i?"above":"below"),f&&(p+="&st=mobile_web"),p+="&brlg="+(window.navigator.userLanguage||window.navigator.language||"").toLowerCase(),p+=o,p+="&"+l,p+="&cb="+Math.floor(11e9*Math.random()),d.write('<script type="text/javascript" src="'+p+'"><\/script>')}},function(n,t){n.exports={createIF:function(){var n=document.createElement(String.fromCharCode(105)+"frame");return n.width=0,n.height=0,n.frameborder=0,n.scrolling="no",n.marginheight=0,n.marginwidth=0,n.opmargin=0,n.leftmargin=0,(n.frameElement||n).style.cssText="border: 0; visibility:hidden; display:none",n},dropJsPixel:function(n){var t=document.createElement("script");t.type="text/javascript",t.src=n,t.async=!0,(document.head||document.getElementsByTagName("head")[0]).appendChild(t)},dropIFPixel:function(n){var t=this.createIF();t.src=n,(document.body||document.getElementsByTagName("body")[0]).appendChild(t)},dropIFScript:function(n){var t=this.createIF();t.onload=function(){var t=this.contentWindow.document,e=t.createElement("script");e.src=n,t.head.appendChild(e)},(document.body||document.getElementsByTagName("body")[0]).appendChild(t)},dropPixel:function(n){var t=document.createElement("img");t.style.cssText="border: 0;width:0;height:0;visibility:hidden;display:none;",t.src=n,(document.body||document.getElementsByTagName("body")[0]).appendChild(t)}},window&&(window.TN8||(window.TN8={}),window.TN8.tag||(window.TN8.tag=n.exports))},function(n,t,e){var i=e(0),r=e(1);function o(){var n=null;return"undefined"!=typeof document.hidden?n="hidden":"undefined"!=typeof document.mozHidden?n="mozHidden":"undefined"!=typeof document.msHidden?n="msHidden":"undefined"!=typeof document.webkitHidden&&(n="webkitHidden"),n?!document[n]:function(){var n=!1;try{window.top.document}catch(t){return window.document.hasFocus()||null}return i.iterate_selfandparents(window,function(){if(!n){this.document.hasFocus()&&(n=!0);for(var e=0;e<this.frames.length;e++)try{if(this.frames[e].contentWindow.document.hasFocus()){n=!0;break}}catch(t){}}}),n}()}function a(n){for(var t,e,r=null,o=window,a=({l:0,t:0,r:"innerWidth"in window?window.innerWidth:window.document.documentElement.clientWidth,b:"innerHeight"in window?window.innerHeight:window.document.documentElement.clientHeight}),d=a.r*a.b,c=0,u=1;o!==window.top;){try{if(o.parent.document,null===(r=i.iframe_findfromwindow(o)))return null;t=r.getBoundingClientRect(),e={w:"innerWidth"in o.parent?o.parent.innerWidth:o.document.parent.documentElement.clientWidth,h:"innerHeight"in o.parent?o.parent.innerHeight:o.document.parent.documentElement.clientHeight}}catch(v){try{return o&&o.$sf&&o.$sf.ext&&o.$sf.ext.inViewPercentage?o.$sf.ext.inViewPercentage():null}catch(v){return null}}if(a.l=Math.max(Math.min(a.l+t.left,e.w),0),a.t=Math.max(Math.min(a.t+t.top,e.h),0),a.r=Math.max(Math.min(a.r+t.left,e.w,t.right),0),a.b=Math.max(Math.min(a.b+t.top,e.h,t.bottom),0),n){var s=0,l=Math.max(1,Math.floor(Math.sqrt(c/500))),w=Math.floor(l/2);Math.pow(l,2);console.log("before",c);for(var m=a.l,f=m+w;f<a.r;f=(m+=l)+w)for(var p=a.t,h=p+w;h<a.b;h=(p+=l)+w)o.parent.document.elementFromPoint(f,h)!==r&&s++;console.log("measurements_off_screen",s,500),u=1-s/500}o=o.parent}c=(a.r-a.l)*(a.b-a.t);var g=d>0?c/d:0;return Math.min(g,u)}n.exports={inViewPercentage:a,getMoat:function(){return r.is_in_nested_crossdomain_frame?-1:o()&&function(n){var t=a();return null===t?null:!(t<n)}(.5)?r.is_in_crossdomain_frame?2:1:0},getAceView:function(){return r.is_in_nested_crossdomain_frame?-1:o()&&function(n){for(var t,e,r=null,o=window,a=({l:0,t:0,r:"innerWidth"in window?window.innerWidth:window.document.documentElement.clientWidth,b:"innerHeight"in window?window.innerHeight:window.document.documentElement.clientHeight}),d=a.r*a.b*n;o!==window.top;){try{if(o.parent.document,null===(r=i.iframe_findfromwindow(o)))return null;t=r.getBoundingClientRect(),e={w:"innerWidth"in o.parent?o.parent.innerWidth:o.parent.document.documentElement.clientWidth,h:"innerHeight"in o.parent?o.parent.innerHeight:o.parent.document.documentElement.clientHeight}}catch(h){try{return o&&o.$sf&&o.$sf.ext&&o.$sf.ext.inViewPercentage?o.$sf.ext.inViewPercentage()>=n:null}catch(h){return null}}a.l=Math.max(Math.min(a.l+t.left,e.w),0),a.t=Math.max(Math.min(a.t+t.top,e.h),0),a.r=Math.max(Math.min(a.r+t.left,e.w,t.right),0),a.b=Math.max(Math.min(a.b+t.top,e.h,t.bottom),0);var c=(a.r-a.l)*(a.b-a.t);if(c<d)return!1;for(var u=0,s=Math.max(1,Math.floor(Math.sqrt(c/500))),l=Math.floor(s/2),w=(Math.pow(s,2),a.l),m=w+l;m<a.r;m=(w+=s)+l){for(var f=a.t,p=f+l;p<a.b;p=(f+=s)+l)o.parent.document.elementFromPoint(m,p)!==r&&u++;if(1-u/500<n)return!1}o=o.parent}return!0}(.5)?r.is_in_crossdomain_frame?2:1:0}},window&&(window.TN8=window.TN8||{},window.TN8.viewability=n.exports)},function(n,t){n.exports=function(n){var t;try{for(var e=window;!t&&(e.__uspapi&&"function"==typeof e.__uspapi&&(t=e),e!==window.top);)e=e.parent;t&&t.__uspapi("getUSPData",1,function(t,e){e&&t.uspString?n(t.uspString):n()})}catch(i){}t||function(n,t,e){for(var r,o=window;!r;){try{o.frames.__uspapiLocator&&(r=o)}catch(i){}if(o===window.top)break;o=o.parent}if(r){var a,d,c=function(t){var e=t&&t.data&&t.data.__uspapiReturn;e&&e.callId&&a===e.callId&&(t.stopImmediatePropagation(),clearTimeout(d),n(e.returnValue),window.removeEventListener("message",c,!1))};window.addEventListener("message",c,!1),function(){a=Math.random()+"";var n={__uspapiCall:{command:t,version:e,callId:a}};r.postMessage(n,"*")}(),d=setTimeout(function(){n(),window.removeEventListener("message",c,!1)},1e3)}else n()}(n,"getUSPData",1)}},function(n,t){!function(){var n;for(window.TN8=window.TN8||{},window.TN8.lq=window.TN8.lq||[],window.TN8.lq.push=window.TN8.lq.unshift=function(n){n.apply(window.TN8)};(n=window.TN8.lq.shift())!==undefined;)try{n.apply(window.TN8)}catch(t){console.error("TN8: Loading queue error",{callback:n,error:t})}}()}]);</script></head>
<body>
<div id="container">

</div>
<script type="text/javascript">
    (function(d, w, s){
        var TN8 = w.TN8 = (w.TN8 || {});
        if (!TN8.lq) {
            TN8.lq = TN8.lq || [];
            s = d.createElement('script');
            s.src = "https://ad-cdn.technoratimedia.com/lib.js";
            d.head.appendChild(s);
        }
    }(document, window));
</script>
<script>
function getCookies() {
    var cookies = {};
    document.cookie.split(";").map(function (cookie) {
        var cookieKV = cookie.split('=');
        cookies[cookieKV[0].trim()] = cookieKV[1];
    });
    return cookies;
};

function doUserSync(cookies, tmPixelRefresh) {
    /* RO */
    if (!("tads_uidp_25" in cookies) || tmPixelRefresh) {
        TN8.tag.dropPixel("https://sync.1rx.io/usersync2/technorati");
    }
    /*TTD*/
    if (!("tads_uidp_7" in cookies) || tmPixelRefresh) {
        TN8.tag.dropJsPixel("https://match.adsrvr.org/track/cmf/generic?ttd_pid=technoratimedia&ttd_tpi=1");
    }
    /* Rubicon */
    if (!("tads_uidp_44" in cookies) || tmPixelRefresh) {
        TN8.tag.dropIFPixel("https://secure-assets.rubiconproject.com/utils/xapi/multi-sync.html?p=synacor_xapi&endpoint=us-east");
    }
    /* Pubmatic OpenRtb */
    if (!("tads_uidp_45" in cookies) || tmPixelRefresh) {
        TN8.tag.dropIFPixel("https://ads.pubmatic.com/AdServer/js/user_sync.html?p=156344&predirect=https%3A%2F%2Fsync.technoratimedia.com%2Fservices%3Fsrv%3Dcs%26pid%3D45%26uid%3D");
    }
    /* AppNexus OpenRtb */
    if (!("tads_uidp_46" in cookies) || tmPixelRefresh) {
        TN8.tag.dropPixel("https://secure.adnxs.com/getuid?https://sync.technoratimedia.com/services?srv=cs&pid=46&uid=$UID");
    }
    /* OpenX */
    if (!("tads_uidp_50" in cookies) || tmPixelRefresh) {
        TN8.tag.dropIFPixel("https://us-u.openx.net/w/1.0/cm?id=8da2f9dd-77de-4961-a71d-959c5609fdb1&ph=9c552f28-6766-4d68-8e0e-995276acc8c6&r=https://sync.technoratimedia.com/services?srv=cs&pid=50&uid=");
    }
    /* DistrictM */
    if (!("tads_uidp_55" in cookies) || tmPixelRefresh) {
        TN8.tag.dropIFPixel("https://cdn.districtm.io/ids/?sellerid=101769");
    }
    /* 33Across */
    if (!("tads_uidp_61" in cookies) || tmPixelRefresh) {
        TN8.tag.dropIFPixel("https://pixel.33across.com/ps?m=xch&rt=html&id=0014000001aXjnGAAS&ru=https%3A%2F%2Fsync.technoratimedia.com%2Fservices%3Fsrv%3Dcs%26pid%3D61%26uid%3D33XUSERID33X");
    }
    /* Criteo */
    if (!("tads_uidp_64" in cookies) || tmPixelRefresh) {
        TN8.tag.dropPixel("https://gum.criteo.com/sync?c=372&r=1&u=https%3A%2F%2Fsync.technoratimedia.com%2Fservices%3Fsrv%3Dcs%26pid%3D64%26uid%3D%40USERID%40");
    }
    /* Beachfront - Display */
    if (!("tads_uidp_68" in cookies) || tmPixelRefresh) {
    TN8.tag.dropPixel("https://sync.bfmio.com/syncb?pid=164");
    }
    /* Beachfront - Video */
    if (!("tads_uidp_69" in cookies) || tmPixelRefresh) {
    TN8.tag.dropPixel("https://sync.bfmio.com/syncb?pid=163");
    }
    /* Spot X OpenRTB */
    if (!("tads_uidp_72" in cookies) || tmPixelRefresh) {
        TN8.tag.dropPixel("https://sync.search.spotxchange.com/partner?adv_id=8725&redir=https%3A%2F%2Fuat-net.technoratimedia.com%2Fservices%3Fsrv%3Dcs%26pid%3D72%26uid%3D%24SPOTX_USER_ID");
    }
    /* Beeswax - BEES */
    if (!("tads_uidp_73" in cookies) || tmPixelRefresh) {
        TN8.tag.dropPixel("https://match.prod.bidr.io/cookie-sync/syn");
    }
    /* Taboola - TBLA */
    if (!("tads_uidp_75" in cookies) || tmPixelRefresh) {
        TN8.tag.dropPixel("https://trc.taboola.com/sg/synacor-ssp-network/1/rtb-h/?taboola_hm=1");
    }
    /* Rhythmone - RO2 */
    if (!("tads_uidp_76" in cookies) || tmPixelRefresh) {
        TN8.tag.dropPixel("https://sync.1rx.io/usersync2/rmpssp?sub=synacor");
    }
    /* OneTag - OT */
    if (!("tads_uidp_77" in cookies) || tmPixelRefresh) {
        TN8.tag.dropIFPixel("https://onetag-sys.com/usync/?pubId=572a470226457b8");
    }
    /* Improve Digital - ID */
    if (!("tads_uidp_79" in cookies) || tmPixelRefresh) {
        TN8.tag.dropPixel("https://ad.360yield.com/server_match?partner_id=1669&r=https%3A%2F%2Fuat-net.technoratimedia.com%2Fservices%3Fsrv%3Dcs%26pid%3D79%26uid%3D%7BPUB_USER_ID%7D");
    }
    /* Verizon Media - VZM */
    if (!("tads_uidp_80" in cookies) || tmPixelRefresh) {
        TN8.tag.dropPixel("https://ups.analytics.yahoo.com/ups/58266/sync?redir=true");
    }
    /* Index Exchange - IX */
    if (!("tads_uidp_82" in cookies) || tmPixelRefresh) {
        TN8.tag.dropPixel("https://ssum-sec.casalemedia.com/usermatchredir?s=191740&cb=https%3A%2F%2Fuat-net.technoratimedia.com%2Fservices%3Fsrv%3Dcs%26pid%3D82%26uid%3D");
    }
    /* PulsePoint - pp */
    if (!("tads_uidp_83" in cookies) || tmPixelRefresh) {
        TN8.tag.dropPixel("https://bh.contextweb.com/bh/rtset?rurl=https%3A%2F%2Fuat-net.technoratimedia.com/services?srv=cs&pid=83&uid=%%VGUID%%");
    }

    /* EngageBDR - EBDR */
    if (!("tads_uidp_84" in cookies) || tmPixelRefresh) {
        TN8.tag.dropPixel("https://match.bnmla.com/usersync?sspid=1000237&redir=https%3A%2F%2Fuat-net.technoratimedia.com/services?srv=cs%26pid=84%26uid=%5BUUID%5D");
    }
};

function syncWithVisitorId(cookies, visitorID, tmPixelRefresh) {
    /* UCX */
    if (!("tads_uidp_37" in cookies) || tmPixelRefresh) {
        TN8.tag.dropPixel("https://sync.aralego.com/idSync?ucf_nid=par-488A3E6BD8D997D0ED8B3BD34D8BA4B&ucf_user_id=" + visitorID + "&redirect=https%3A%2F%2Fsync.technoratimedia.com%2Fservices%3Fsrv%3Dcs%26pid%3D37%26uid%3DUCFUID");
    }
    /* Oath Display OpenRtb */
    if (!("tads_uidp_47" in cookies) || tmPixelRefresh) {
        TN8.tag.dropPixel("https://pixel.advertising.com/ups/58150/sync?_origin=1&redir=true&uid=" + visitorID);
    }
    /* Bidswitch */
    if (!("tads_uidp_48" in cookies) || tmPixelRefresh) {
        TN8.tag.dropPixel("https://x.bidswitch.net/sync?ssp=synacor&user_id=" + visitorID);
    }
    /* Conversant */
    if (!("tads_uidp_49" in cookies) || tmPixelRefresh) {
        TN8.tag.dropPixel("https://synacor-match.dotomi.com/match/bounce/current?networkId=63258&version=1&nuid=" + visitorID);
    }
    /* Oath Video OpenRtb */
    if (!("tads_uidp_52" in cookies) || tmPixelRefresh) {
        TN8.tag.dropPixel("https://pixel.advertising.com/ups/58182/sync?&gdpr=&gdpr_consent=&redir=true&uid=" + visitorID);
    }
    /* Media.Net */
    if (!("tads_uidp_62" in cookies) || tmPixelRefresh) {
        TN8.tag.dropPixel("https://contextual.media.net/cksync.php?cs=3&type=syn&ovsid=" + visitorID + "&redir=https%3A%2F%2Fsync.technoratimedia.com%2Fservices%3Fsrv%3Dcs%26pid%3D62%26uid%3D%5BUSER_ID%5D");
    }
    /* TripleLift */
    if (!("tads_uidp_88" in cookies) || tmPixelRefresh) {
      TN8.tag.dropIFPixel("https://eb2.3lift.com/getuid?redir=https%3A%2F%2Fsync.technoratimedia.com%2Fservices%3Fsrv%3Dcs%26pid%3D88%26uid%3D$UID");
    }
    /* Taboola bi-directional */
    if (!("tads_tbla_bidi" in cookies) || cookies.tads_tbla_bidi - Date.now() > 86400000 || tmPixelRefresh) {
      document.cookie = "tads_tbla_bidi=" + Date.now();
      TN8.tag.dropPixel("https://sync.taboola.com/sg/synacorrtb-network/1/rtb-h?taboola_hm=" + visitorID);
    }
    /* Chocolate */
    if (!("tads_choc_bidi" in cookies) || (cookies.tads_choc_bidi - Date.now() > 86400000) || tmPixelRefresh) {
      document.cookie = "tads_choc_bidi=" + Date.now();
      TN8.tag.dropPixel("https://cs.chocolateplatform.com/bid?advid=5704&bcid=" + visitorID);
    }
};

function runUserSyncing(skipUser) {
    var cookies = getCookies();
    var visitorID = cookies["tads_uid"];

    if (visitorID === "GDPR") {
        return;
    }

    var ccpaCookie = cookies["ccpaOptOut"];
    if (ccpaCookie != null && ccpaCookie.length === 4 && ccpaCookie.charAt(2) === 'Y') {
        return;
    }

    /* timestamper */
    var tmPixelExpiration;
    var tmPixelRefresh;

    try {
      tmPixelExpiration = parseInt(localStorage.getItem("tads_last_sync"),10)+(60*60*1000*12); /*12 hour expiration*/
      tmPixelRefresh = isNaN(tmPixelExpiration) || (tmPixelExpiration < new Date().getTime()) || !visitorID;
      if (tmPixelRefresh && visitorID) {
        localStorage.setItem("tads_last_sync", new Date().getTime().toString());
      }
    } catch (e) {
      return;
    }

    if (!skipUser) {
        doUserSync(cookies, tmPixelRefresh);
    }

    if (visitorID) {
        syncWithVisitorId(cookies, visitorID, tmPixelRefresh);
    } else {
        setTimeout(function() {
            runUserSyncing(true);
        });
    }
};

TN8.lq.push(function() {
    runUserSyncing(false);
});
</script>
</body>
</html>
