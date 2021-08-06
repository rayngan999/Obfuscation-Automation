    
/* TAGS 2 - 2021-08-03 02:36:57 */

function create_pixel_ad_sw(){
    var smile_img = document.createElement('img');

    smile_img.height = 1;
    smile_img.width = 1;
    smile_img.style = 'border-style:none';
    smile_img.alt = '';

    return smile_img;
}

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function insert_script_js(script_src){
    var insert_script_js = document.createElement('script');
    insert_script_js.type = 'text/javascript';
    insert_script_js.async = true;
    insert_script_js.src = script_src;
    top.document.getElementsByTagName('head')[0].appendChild(insert_script_js);
}


function insert_stylesheet_css(css_src){
    var insert_stylesheet_css = document.createElement('link');
    insert_stylesheet_css.rel  = 'stylesheet';
    insert_stylesheet_css.type = 'text/css';
    insert_stylesheet_css.href = css_src;
    top.document.getElementsByTagName('head')[0].appendChild(insert_stylesheet_css);
}


var script_tag_csync = document.createElement("script");
script_tag_csync.type = "text/javascript";
script_tag_csync.src = "https://csync.smilewanted.com";
(document.getElementsByTagName("head")[0] || document.documentElement ).appendChild(script_tag_csync)

function push_script_content(code){var s = document.createElement("script");s.type = "text/javascript";s.text = code;top.document.getElementsByTagName('head')[0].appendChild(s); }
push_script_content("(function(i, s, o, g, r, a, m){i[\'GoogleAnalyticsObject\'] = r;i[r] = i[r] || function() {(i[r].q = i[r].q || []).push(arguments)}, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m)})(window, document, \'script\', \'https:\/\/www.google-analytics.com\/analytics.js\', \'ga\');ga(\'create\', \'UA-116494254-23\', {\'name\': \'smile_corner_video\'});");

push_script_content("(function() {var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;po.src = 'https://www.googletagmanager.com/gtag/js?id=G-K8JXZBSX4H&l=sw_gtag_data_layer';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);})();window.sw_gtag_data_layer = window.sw_gtag_data_layer || [];function sw_gtag_data_layer_function(){sw_gtag_data_layer.push(arguments);}sw_gtag_data_layer_function('js', new Date());sw_gtag_data_layer_function('config', 'G-K8JXZBSX4H');");

    top.ga('smile_corner_video.set', 'anonymizeIp', true);

if(top.window.location.hostname.includes('toucharger.com')){
    // top.ga('smile_corner_video.send', 'event', 'Quality Traffic', 'toucharger_com_235fa76', 'Same domain');
}else{
    // top.ga('smile_corner_video.send', 'event', 'Quality Traffic', 'toucharger_com_235fa76', 'Not same domain');
    top.ga('smile_corner_video.send', 'event', 'Not same domain', 'toucharger_com_235fa76', top.window.location.hostname);
}


top.ga('smile_corner_video.send', 'pageview');
top.ga('smile_corner_video.send', 'event', 'Source Traffic', 'toucharger_com_235fa76', 'corner-video');


function insert_check_script_sw(url, callback) {
    var d = top.document.head || top.document.getElementsByTagName("head")[0];
    var s = top.document.createElement("script");

    s.type = "text/javascript";
    s.src = url;
    s.charset = "utf-8";
    d.appendChild(s);

    if(callback) {
        if(s.addEventListener) {
            s.onload = callback;
        } else if(s.readyState) {
            s.onreadystatechange = function() {
                s.readyState === "loaded" && callback();
            };
        }
    }
}

if(top.window.location.hostname.includes('toucharger.com') || top.window.location.hostname.includes("smilewanted.com") || top.window.location.hostname.includes("platformsh.site") || (top.window.location.href.indexOf("#force_domain") !== -1)){
    
//Corner Video V2.3

!function(){if(!top.document.getElementById("sw_corner_video")){var e="toucharger_com_235fa76";insert_stylesheet_css("//tags.smilewanted.com/formats/config_formats/corner-video/"+e+"/style.css");var t=document.createElement("div");t.id="sw_corner_video";var n=document.createElement("div");n.id="sw_corner_video_content";var a=document.createElement("div");a.id="sw_corner_video_close";var o=document.createElement("i");o.classList.add("material-icons"),o.textContent="close",o.style.display="none";var i=document.createElement("div");i.id="sw_corner_progress_bar_container";var d=document.createElement("div");d.id="sw_corner_progress_bar_fill";var r=document.createElement("div");r.id="sw_corner_progress_bar_back";var c=document.createElement("div");c.id="sw_corner_video_sound_click",c.setAttribute("data-state","sound_off");var s=document.createElement("i");s.classList.add("material-icons"),s.id="icon_volume",s.textContent="volume_off",s.style.display="none";var m=document.createElement("div");m.id="sw_corner_video_player";var l=document.createElement("video");l.id="sw_video_content",l.setAttribute("playsinline",""),l.setAttribute("muted",""),l.setAttribute("autoplay","");var u=document.createElement("div");u.id="sw_corner_video_adcontainer";var p=document.createElement("div");function v(e,t){var n=top.document.head||top.document.getElementsByTagName("head")[0],a=top.document.createElement("script");a.type="text/javascript",a.src=e,a.charset="utf-8",n.appendChild(a),t&&(a.addEventListener?a.onload=t:a.readyState&&(a.onreadystatechange=function(){"loaded"===a.readyState&&t()}))}p.id="sw_corner_video_dm_adcontainer",t.appendChild(n),n.appendChild(a),a.appendChild(o),n.appendChild(i),i.appendChild(d),i.appendChild(r),n.appendChild(c),c.appendChild(s),n.appendChild(m),m.appendChild(l),m.appendChild(u),m.appendChild(p),spotxDataLayer=[{source:"178357"}],function(e,t,n,a,o){e[a]=e[a]||[],e[a].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var i=t.getElementsByTagName(n)[0],d=t.createElement(n);d.async=!0,d.src="https://www.googletagmanager.com/gtm.js?id=GTM-NH3RQL3&l=spotxDataLayer",i.parentNode.insertBefore(d,i)}(window,document,"script","spotxDataLayer"),function n(){if(top.document.body){function a(e){var t=top.document.cookie.match(new RegExp("(^| )"+e+"=([^;]+)"));if(t)return t[2]}var o="undefined";a("euconsent-v2")?o=a("euconsent-v2"):a("sas_euconsent_v2")?o=a("sas_euconsent_v2"):a("euconsent")?o=a("euconsent"):a("sas_euconsent")?o=a("sas_euconsent"):a("eupubconsent")?o=a("eupubconsent"):(void 0!==top.window.__cmp&&top.window.__cmp("getConsentData",null,function(e){o=e.consentData}),void 0!==top.window.__tcfapi&&top.window.__tcfapi("getTCData",2,(e,t)=>{t&&(o=e.tcString)},[1,2,3])),top.document.getElementsByTagName("body")[0].appendChild(t),v("//static.smilewanted.com/jwplayer-8.11.7/jwplayer.js",function(){v("//api.dmcdn.net/all.js",function(){var t;v("//tags-videos.smilewanted.com/infos_corner_video.php?domaine="+e+"&device="+(window.navigator.userAgent.match(/Mobile/i)||window.navigator.userAgent.match(/iPhone/i)||window.navigator.userAgent.match(/iPod/i)||window.navigator.userAgent.match(/IEMobile/i)||window.navigator.userAgent.match(/Windows Phone/i)||window.navigator.userAgent.match(/Android/i)||window.navigator.userAgent.match(/BlackBerry/i)||window.navigator.userAgent.match(/webOS/i)?window.navigator.userAgent.match(/Tablet/i)||window.navigator.userAgent.match(/iPad/i)||window.navigator.userAgent.match(/Nexus 7/i)||window.navigator.userAgent.match(/Nexus 10/i)||window.navigator.userAgent.match(/KFAPWI/i)?"tablet":"mobile":(window.navigator.userAgent.match(/Intel Mac/i),"desktop"))+"&url="+top.window.location.href+"&path="+top.window.location.pathname+"&consent_string="+o+"&is_fb="+((t=navigator.userAgent||navigator.vendor||window.opera).indexOf("FBAN")>-1||t.indexOf("FBAV")>-1),function(){insert_script_js("//tags.smilewanted.com/formats/config_formats/corner-video/"+e+"/script.js")})})})}else setTimeout(n,10)}()}}();

}

// Inventory Check DAR
var content_script_dar = '<script async src=\"https:\/\/securepubads.g.doubleclick.net\/tag\/js\/gpt.js\"><\/script><script>window.googletag = window.googletag || {cmd: []};googletag.cmd.push(function() {googletag.defineSlot(\'\/275831643\/pixel_dar\', [1, 1], \'div-gpt-ad-1583771140312-0\').addService(googletag.pubads().setTargeting(\"sw_domain_name\", \"toucharger_com_235fa76\"));googletag.pubads().enableSingleRequest();googletag.enableServices();});<\/script><div id=\'div-gpt-ad-1583771140312-0\' style=\'width: 0px; height: 0px;\'><script>googletag.cmd.push(function() { googletag.display(\'div-gpt-ad-1583771140312-0\'); });<\/script><\/div>';

function insertAfter(t,e){e.parentNode.insertBefore(t,e.nextSibling)}function sw_script_async(t){if(t){var e=document.createElement("div");e.innerHTML=t,insertAfter(e,top.document.getElementsByTagName("head")[0]),runScripts(e)}}function seq(t,e,c){void 0===c&&(c=0),t[c](function(){++c===t.length?e():seq(t,e,c)})}function scriptsDone(){var t=document.createEvent("Event");t.initEvent("DOMContentLoaded",!0,!0),document.dispatchEvent(t)}function insertScript(t,e){var c=document.createElement("script");c.type="text/javascript",t.src?(c.onload=e,c.onerror=e,c.src=t.src):c.textContent=t.innerText,document.head.appendChild(c),t.parentNode.removeChild(t),t.src||e()}function runScripts(t){var e,c=t.querySelectorAll("script"),r=[];[].forEach.call(c,function(t){(e=t.getAttribute("type"))&&-1===sw_script_passback_type.indexOf(e)||r.push(function(e){insertScript(t,e)})}),seq(r,scriptsDone)}var sw_script_passback_type=["application/javascript","application/ecmascript","application/x-ecmascript","application/x-javascript","text/ecmascript","text/javascript","text/javascript1.0","text/javascript1.1","text/javascript1.2","text/javascript1.3","text/javascript1.4","text/javascript1.5","text/jscript","text/livescript","text/x-ecmascript","text/x-javascript"];

// sw_script_async(content_script_dar);

// Inventory Check DAR V2
!function t(){var e;top.document.body?top.document.getElementById("div-gpt-ad-1612357021460-0")||((e=document.createElement("iframe")).setAttribute("id","div-gpt-ad-1612357021460-0"),e.setAttribute("frameborder",0),e.setAttribute("scrolling",0),e.setAttribute("marginheight",0),e.setAttribute("marginwidth",0),e.setAttribute("topmargin",0),e.setAttribute("leftmargin",0),e.setAttribute("width",0),e.setAttribute("height",0),e.setAttribute("src","https://pubads.g.doubleclick.net/gampad/adx?iu=/275831643/pixel_dar_test&sz=1x1&t=sw_domain_name%3Dtoucharger_com_235fa76&"+Date.now()),e.setAttribute("style","visibility:hidden;overflow:hidden;overflow-x:hidden;overflow-y:hidden;position:absolute;top:0px;left:0px;right:0px;bottom:0px"),top.document.getElementsByTagName("body")[0].appendChild(e)):setTimeout(t,10)}();
    
// Stats SW v2
(function(){var b=new XMLHttpRequest;b.open('POST','https://prebid.smilewanted.com/track/analytics/adcall.php?id_site=5345&id_format=24&id_device='+function(){return top.window.navigator.userAgent.match(/Mobile/i)||top.window.navigator.userAgent.match(/iPhone/i)||top.window.navigator.userAgent.match(/iPod/i)||top.window.navigator.userAgent.match(/IEMobile/i)||top.window.navigator.userAgent.match(/Windows Phone/i)||top.window.navigator.userAgent.match(/Android/i)||top.window.navigator.userAgent.match(/BlackBerry/i)||top.window.navigator.userAgent.match(/webOS/i)?top.window.navigator.userAgent.match(/Tablet/i)||top.window.navigator.userAgent.match(/iPad/i)||top.window.navigator.userAgent.match(/Nexus 7/i)||top.window.navigator.userAgent.match(/Nexus 10/i)||top.window.navigator.userAgent.match(/KFAPWI/i)?'2':'3':top.window.navigator.userAgent.match(/Intel Mac/i)?'1':'1'}(),!0),b.send()})();

// Stats VidÃ©o V2.5
if(void 0===sw_stats_video){var sw_stop_stats,domaine_sw="toucharger_com_235fa76",sw_stats_video=!0;!function(){if(!(-1<(I=navigator.userAgent||navigator.vendor||window.opera).indexOf("FBAN")||-1<I.indexOf("FBAV"))){var n;top.window.onbeforeunload=function(){x()},top.document.addEventListener("visibilitychange",function(){document.hidden&&x()},!1);var e=!0,o=0,a=0,i=0,r=!1,s=!1,d=!1;function c(){n=top.window.setTimeout(m,250)}function t(t){e&&(top.window.clearTimeout(n),r=setInterval(function(){a+=100},100),d=setInterval(function(){o<1e4&&(i+=100)},100),c(),e=!1)}function m(){r&&clearInterval(r),d&&clearInterval(d),e=!0}function g(t,n){var e=Math.pow(10,n);return Math.round(t*e)/e}top.document.addEventListener("mousemove",t,!1),top.document.addEventListener("mousedown",t,!1),top.document.addEventListener("keypress",t,!1),top.document.addEventListener("DOMMouseScroll",t,!1),top.document.addEventListener("mousewheel",t,!1),top.document.addEventListener("touchmove",t,!1),top.document.addEventListener("MSPointerMove",t,!1),c(),s=setInterval(function(){o<1e4?o+=100:(clearInterval(d),clearInterval(s))},100);var l="ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|be|bf|bg|bh|bi|bj|bm|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|cl|cm|cn|co|cr|cu|cv|cw|cx|cz|de|dj|dk|dm|do|dz|ec|ee|eg|es|et|eu|fi|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|im|in|io|iq|ir|is|it|je|jo|jp|kg|ki|km|kn|kp|kr|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|na|nc|ne|nf|ng|nl|no|nr|nu|nz|om|pa|pe|pf|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|yt".split("|"),p="com|edu|gov|net|mil|org|nom|sch|caa|res|off|gob|int|tur|ip6|uri|urn|asn|act|nsw|qld|tas|vic|pro|biz|adm|adv|agr|arq|art|ato|bio|bmd|cim|cng|cnt|ecn|eco|emp|eng|esp|etc|eti|far|fnd|fot|fst|g12|ggf|imb|ind|inf|jor|jus|leg|lel|mat|med|mus|not|ntr|odo|ppg|psc|psi|qsl|rec|slg|srv|teo|tmp|trd|vet|zlg|web|ltd|sld|pol|fin|k12|lib|pri|aip|fie|eun|sci|prd|cci|pvt|mod|idv|rel|sex|gen|nic|abr|bas|cal|cam|emr|fvg|laz|lig|lom|mar|mol|pmn|pug|sar|sic|taa|tos|umb|vao|vda|ven|mie|åæµ·é|åæ­å±±|ç¥å¥å·|é¹¿åå³¶|ass|rep|tra|per|ngo|soc|grp|plc|its|air|and|bus|can|ddr|jfk|mad|nrw|nyc|ski|spy|tcm|ulm|usa|war|fhs|vgs|dep|eid|fet|fla|flÃ¥|gol|hof|hol|sel|vik|cri|iwi|ing|abo|fam|gok|gon|gop|gos|aid|atm|gsm|sos|elk|waw|est|aca|bar|cpa|jur|law|sec|plo|www|bir|cbg|jar|khv|msk|nov|nsk|ptz|rnd|spb|stv|tom|tsk|udm|vrn|cmw|kms|nkz|snz|pub|fhv|red|ens|nat|rns|rnu|bbs|tel|bel|kep|nhs|dni|fed|isa|nsn|gub|e12|tec|Ð¾ÑÐ³|Ð¾Ð±Ñ|ÑÐ¿Ñ|alt|nis|jpn|mex|ath|iki|nid|gda|inc".split("|"),w=function(t){for(var n=(t=t.replace(/^www\./,"")).split(".");3<n.length;)n.shift();return 3===n.length&&(2<n[1].length&&2<n[2].length||-1===p.indexOf(n[1])&&-1===l.indexOf(n[2]))&&n.shift(),n.join(".")};var u,v,h,f,b,k,A=0;function y(){var t,n=((t=document.createElement("img")).height=1,t.width=1,t.style="border-style:none",t.alt="",t),e=(new Date).getTime(),o={};o[0]=domaine_sw,o[1]=top.window.navigator.userAgent.match(/Mobile/i)||top.window.navigator.userAgent.match(/iPhone/i)||top.window.navigator.userAgent.match(/iPod/i)||top.window.navigator.userAgent.match(/IEMobile/i)||top.window.navigator.userAgent.match(/Windows Phone/i)||top.window.navigator.userAgent.match(/Android/i)||top.window.navigator.userAgent.match(/BlackBerry/i)||top.window.navigator.userAgent.match(/webOS/i)?top.window.navigator.userAgent.match(/Tablet/i)||top.window.navigator.userAgent.match(/iPad/i)||top.window.navigator.userAgent.match(/Nexus 7/i)||top.window.navigator.userAgent.match(/Nexus 10/i)||top.window.navigator.userAgent.match(/KFAPWI/i)?"tablet":"mobile":(top.window.navigator.userAgent.match(/Intel Mac/i),"desktop"),o[2]=top.window.location.pathname,o[3]=u,o[4]=v,o[5]=h,o[6]=f,o[7]=b,o[8]=k,o[9]=A,o[10]=top.window.location.host,o[11]=top.window.location.protocol,o[12]=top.window.location.href,o[13]=top.screen.width,o[14]=top.screen.height,o[15]=e,o[16]=function(t){for(var n="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split(""),e=[],o=0;o<t;o++){var a=(Math.random()*(n.length-1)).toFixed(0);e[o]=n[a]}return e.join("")}(30),o[17]=top.window.location.hostname,o[18]=w(top.window.location.hostname),n.src="//stats.smilewanted.com/stats_video_V2/pixel_V2.1.php?data="+btoa(JSON.stringify(o))}var j=!1,z=new Date;function x(){if(!j){var t=new Date;u=Math.round((t-z)/100,2)/10,h=g((v=a/1e3)/u*100,2),f=g(u-a/1e3,2),b=g(f/u*100,2),A=g((k=i/1e3)/10*100,2),y(),clearInterval(d),clearInterval(s),j=!0}}}var I}()}
    
    
// CPF - Pixel Code
var captify_kw_query_12357 = "";
(function(c,a,p,t,i,f,y){i=c.createElement(a);t=c.getElementsByTagName(a)[0];i.type='text/javascript';i.async=true;i.src=p;t.parentNode.insertBefore(i,t);})(document,'script','https://p.cpx.to/p/12357/px.js');

    

    
var sw_consent_string = "";

// Consent String V1
if(typeof __cmp !== 'undefined'){
    __cmp('getConsentData', null, function(result) {
        sw_consent_string = result.consentData;
    });
}

// Consent String V2
if(typeof __tcfapi !== 'undefined'){
    __tcfapi('getTCData', 2, (tcData, success) => {
      if(success) {
        sw_consent_string = tcData.tcString;
      }
    }, [1,2,3]);
}