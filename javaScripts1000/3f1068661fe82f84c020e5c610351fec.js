

var notify_visitors =notify_visitors?notify_visitors: {};
    notify_visitors["Bot"]= {
        "data":{"Authentication":"success","brandID":"6055","shopify_shop":"","referrer_source":"https:\/\/www.utimf.com\/","Account":["Chatbot Account Expired. Upgrade now."],"tokens":"","gaEvents":{"trackingID":"","events":[]}}    };
    notify_visitors["Banner"]= {
        "data":{"Authentication":"success","brandID":"6055","shopify_shop":"","referrer_source":"https:\/\/www.utimf.com\/"}    };
    notify_visitors["Push"]={
        "data":{"Authentication":"success","brandID":"6055","shopify_shop":"","referrer_source":"https:\/\/www.utimf.com\/","Account":["Push inactive. Upgrade now."],"add_to_home_details":{"allow":1,"app_id":"88x44ais","theme":"#0149a8","manifest":"https:\/\/www.notifyvisitors.com\/ext\/v1\/pwa\/6055\/88x44ais","dynamic_manifest":"1","aths_type":"0","desktop_status":"1","sw_path":"service-worker.js","sw_scope":"\/","webapp_version":"2.5"},"tokens":"","gaEvents":{"trackingID":"","events":["nv_push_allowed","nv_push_denied","nv_push_closed","nv_push_permbox_denied","nv_push_permbox_allow","nv_push_permbox_shown","web_app_shown","web_app_canceled","web_app_installed","web_app_opened"]}}    };
    notify_visitors["Events"]={
        "data":{"Authentication":"success","brandID":"6055","shopify_shop":"","referrer_source":"https:\/\/www.utimf.com\/","userID":"","status":1}    };
    notify_visitors["Optimize"]={
        "data":{"Authentication":"success","brandID":"6055","shopify_shop":"","referrer_source":"https:\/\/www.utimf.com\/","domain":"https:\/\/www.utimf.com"}    };
    notify_visitors["Form"]={
        "data":{"Authentication":"success","brandID":"6055","shopify_shop":"","referrer_source":"https:\/\/www.utimf.com\/"}    };

    (function(){if("undefined"!=typeof notify_visitors.Push.data.add_to_home_details){var a=notify_visitors.Push.data.add_to_home_details;if(("undefined"!=typeof a.allow&&1==a.allow||"undefined"!=typeof a.desktop_status&&1==a.desktop_status)&&1==a.dynamic_manifest){var b=document.querySelectorAll('[rel="manifest"]'),c=document.querySelectorAll('[name="theme-color"]'),d=a.manifest;a=a.theme||0;if(a.length||d.length)var e=document.head;b.length?b[0].href=d:(b=document.createElement("link"),b.setAttribute("rel","manifest"),b.setAttribute("href",d),e.appendChild(b));a&&(c.length?c[0].content=a:(c=document.createElement("meta"),c.setAttribute("name","theme-color"),c.setAttribute("content",a),e.appendChild(c)))}}})();

    if(notify_visitors.data && !notify_visitors.data.spa){
        notify_visitors.data.spa = {};
    }else if(notify_visitors.data && notify_visitors.data.spa && Object.keys(notify_visitors.data.spa).length > 0){
        if(typeof nvpack != 'undefined' && nvpack.config != 'undefined'){ 
            nvpack.config = {}; 
        }
        if(typeof notify_visitors.data.spa == "string"){
            notify_visitors.data.spa = JSON.parse(notify_visitors.data.spa);
        }
    }


    notify_visitors.spa = 0;

var nv_location = {"country":"Hong Kong","city":"Tai Wai","region":"Hong Kong","code":"HK","dial_code":"+852","long":"114.178970","lat":"22.372860","region_code":"HK","lang":"chinese","continent_code":"AS","continent_name":"Asia"};

 

    notify_visitors.CustomBrandScript = {"data":[{"script_pos":"3","script":"setTimeout(()=>{\n\nvar close = document.querySelector('[id^=\"nv_js-pwa-close-button-\"]');\n  if(close){\n      close.style.display = 'none';\n  }\n  var banner = document.querySelector('[id^=\"notify-visitors-pwa-install-popup-content\"]');\n  if(banner){\n      banner.style.background = 'transparent';\n      banner.style.top = '15%';\n  }\n\n}, 100);","mode":"1"}]};

    
var nvEcheck=function(){if("undefined"!=typeof nvpack){clearInterval(checkNvpack);if("undefined"!=window.nv&&window.nv.q){var c=window.nv.q,e="user pushuser event pushevent pushsubscribe dimensions".split(" ");if(nvpack&&nvpack.anal&&nvpack.anal.nvHandler)for(var b=0;b<c.length;b++){var d=Array.prototype.slice.call(c[b]);notify_visitors.Events.data.status&&-1!==e.indexOf(d[0])&&nvpack.anal.nvHandler(d)}}window.nv=function(){var f="user pushuser event pushevent pushsubscribe dimensions".split(" "),
g=["form_submit"],a=Array.prototype.slice.call(arguments);0<a.length&&notify_visitors.Events.data.status&&-1!==f.indexOf(a[0])&&nvpack&&nvpack.anal&&nvpack.anal.nvHandler&&nvpack.anal.nvHandler(a);notify_visitors.Optimize.data.form_data&&notify_visitors.Optimize.data.form_data.status&&-1!==g.indexOf(arguments[0])&&nvpack&&nvpack.heatmaps&&nvpack.heatmaps.nvHandler&&nvpack.heatmaps.nvHandler(arguments);if(Array.isArray(a)&&"get_NV_UID"==a[0])return window.notify_visitors.data.NV_UID?window.notify_visitors.data.NV_UID:
""}}},checkNvpack=window.setInterval(nvEcheck,100);
notify_visitors.prevLocation=[window.location].reduce(function(c,d){Object.keys(d).forEach(function(f){c[f]=d[f]});return c},{});
(function(c){function d(a){this.callback=a;this.callback=this.callback.bind(this);this.watchPushState=this.watchPushState.bind(this);this.watchPopState=this.watchPopState.bind(this);this.watchReplaceState=this.watchReplaceState.bind(this);this.override(history,"pushState",this.watchPushState);this.override(history,"replaceState",this.watchReplaceState);c.addEventListener("popstate",this.watchPopState)}function f(){h&&clearInterval(h);h=setTimeout(function(){g()},500);notify_visitors.prevLocation=
[c.location].reduce(function(a,b){Object.keys(b).forEach(function(e){a[e]=b[e]});return a},{})}function g(){h=null;if(notify_visitors.eventsRecord&&0<Object.keys(notify_visitors.eventsRecord).length){var a=notify_visitors.eventsRecord,b;for(b in a)a.hasOwnProperty(b)&&a[b].forEach(function(a){try{var b=a.e,e=a.n,c=a.c;b.removeEventListener?b.removeEventListener(e,c):b.detachEvent&&b.detachEvent("on"+e,c)}catch(k){}})}try{a=function(a){a&&a.remove()},document.querySelectorAll("div[id^=notify-visitors-]").forEach(a),
document.querySelectorAll(".notify-visitors-element").forEach(a),document.getElementById("nv_bot_frame")&&document.getElementById("nv_bot_frame").remove()}catch(e){}notify_visitors.data.spa=notify_visitors.data.spa?JSON.stringify(notify_visitors.data.spa):"";notify_visitors.eventsRecord={};notify_visitors.initialize=!1;notify_visitors.init()}d.prototype.watchPushState=function(a){var b=this;return function(){a.apply(this,arguments);try{"function"==typeof b.callback&&b.callback(!0,"push_state")}catch(e){}}};
d.prototype.watchReplaceState=function(a){var b=this;return function(){a.apply(this,arguments);try{"function"==typeof b.callback&&b.callback(!1,"replace_state")}catch(e){}}};d.prototype.watchPopState=function(a){try{"function"==typeof context.callback&&context.callback(!0,"pop_state")}catch(b){}};d.prototype.override=function(a,b,c){a[b]=c(a[b])};var h=null;notify_visitors.routingType&&"hash"==notify_visitors.routingType&&c.addEventListener("hashchange",function(a){a.newURL!=a.oldURL&&f()},!1);c.notify_visitors&&
!c.notify_visitors.nv_history_watch&&(c.notify_visitors.nv_history_watch=new d(function(a,b){var e=new URL(notify_visitors.prevLocation.href),d=new URL(c.location.href);e.origin+e.pathname==d.origin+d.pathname&&e.origin+e.pathname+e.hash==d.origin+d.pathname+d.hash||f()}))})(window);


(function(c){function p(){if("object"===typeof p.instance)return p.instance;this.get_deviceID=function(){return"119236101168yxpsf"};this.customPermissionBox=function(){return notify_visitors.po.customPermissionBox(1)};this.customPermissionBox=this.customPermissionBox.bind(this);this.get_deviceID=this.get_deviceID.bind(this);p.instance=this}function u(){c.notify_visitors=c.notify_visitors||{};c.notify_visitors.manual=c.notify_visitors.manual||{};c.notify_visitors.manual.onclick||(c.notify_visitors.manual.onclick=
function(a){notify_visitors.Banner.data.auth=notify_visitors.auth;w("//cdn.notifyvisitors.com/ext/js/nv-banner.js",function(){try{notify_visitors.data.spa.banner=1}catch(e){}c.notify_visitors.manual.onclick(a)})});c.notify_visitors.manual.onclickForm||(c.notify_visitors.manual.onclickForm=function(a){notify_visitors.Form.data.auth=notify_visitors.auth;w("//cdn.notifyvisitors.com/ext/js/nv-leadform.js",function(){try{notify_visitors.data.spa.leadform=1}catch(e){}c.notify_visitors.manual.onclickForm(a)})})}
function w(a,e){var b=document.createElement("script");b.type="text/javascript";b.readyState?b.onreadystatechange=function(){if("loaded"==b.readyState||"complete"==b.readyState)b.onreadystatechange=null,e()}:b.onload=function(){e()};b.src=a;document.getElementsByTagName("head")[0].appendChild(b)}c._nv_data=new p;if(notify_visitors.CustomBrandScript&&notify_visitors.CustomBrandScript.data&&0<notify_visitors.CustomBrandScript.data.length){var h=notify_visitors.CustomBrandScript.data,l;for(l in h)if(h[l].script_pos&&
h[l].script){var n=document.createElement("script");n.type="text/javascript";n.setAttribute("class","notify-visitors-element");n.text=1==h[l].mode?"(function (){"+h[l].script+"})()":h[l].script;1==h[l].script_pos&&document.head?document.head.appendChild(n):2==h[l].script_pos&&document.body?document.body.firstChild?document.body.insertBefore(n,document.body.firstChild):document.body.appendChild(n):3==h[l].script_pos&&document.body&&document.body.appendChild(n)}}"complete"==document.readyState?u():
c.addEventListener?c.addEventListener("load",u,!1):c.attachEvent&&c.attachEvent("onload",u);c.sessionStorage.getItem("_nv_location")||""===nv_location||c.sessionStorage.setItem("_nv_location",JSON.stringify(nv_location));h=parseInt(function(a){a+="=";for(var e=document.cookie.split(";"),b=0;b<e.length;b++){var d=e[b].trim();if(0==d.indexOf(a))return d.substring(a.length,d.length)}return null}("_nv_pv"));(function(a,e,b,d){var g=new Date((new Date).setHours(23,59,59,0));document.cookie=a+"="+e+"; "+
(b||0==b?"expires="+b:"expires="+g)+"; "+(d?"domain=."+d:"")+"; path=/"})("_nv_pv",h?h+1:1);notify_visitors.data.session=function(a){if(a&&"object"===typeof a&&a.cookies&&"object"===typeof a.cookies&&0<Object.keys(a.cookies).length&&a.domain){Array.isArray(a.cookies._nv_hit)&&a.cookies._nv_hit[0]&&1!=a.cookies._nv_hit[0]&&(a.cookies._nv_hit[0]=notify_visitors.data.modifyHitCookie(a.cookies._nv_hit[0]));var e="none"!==a.domain?"domain="+a.domain+";":"",b;for(b in a.cookies){var d=new Date;if("_nv_sess"==
a.cookies[b]){if(document.cookie="_nv_sess="+a.cookies[b][0]+";expires="+(new Date(d.getTime()+6E4*a.cookies[b][1])).toUTCString()+";"+e+"path=/",a.newSess&&a.callback_data){var g=null;g=c.setInterval(function(){c&&c.nvpack&&c.nvpack.callbackNotifyEvent&&(c.clearInterval(g),c.nvpack.callbackNotifyEvent.send(a.callback_data,"userSession"))},100)}}else document.cookie=b+"="+a.cookies[b][0]+";"+(a.cookies[b][1]?"expires="+(new Date(d.getTime()+6E4*a.cookies[b][1])).toUTCString()+";":"")+e+" path=/"}}};
notify_visitors.data.modifyHitCookie=function(a){if(a){var e=a.split("."),b=notify_visitors.data.getCookie("_nv_hit");if(b&&a){b=c.atob(b.split(".")[2]);var d=c.atob(e[2]);if("pview=1"===d)return a;if(b!==d){b=b.split("|");d=d.split("|");var g={},m={},v="",x=function(f){for(var q=0;q<f.length;++q)for(var r=q+1;r<f.length;++r)f[q]===f[r]&&f.splice(r--,1);return f};b.forEach(function(f){f=f.split("=");g[f[0]]=JSON.parse(f[1])});d.forEach(function(f){f=f.split("=");m[f[0]]=JSON.parse(f[1])});if(0<Object.keys(g).length&&
0<Object.keys(m).length){for(var k in m)m.hasOwnProperty(k)&&g.hasOwnProperty(k)?JSON.stringify(m[k])!==JSON.stringify(g[k])&&(g[k]="pview"==k?m[k]:x(g[k].concat(m[k]))):g[k]=m[k];for(var t in g)v+=v?"|"+t+"="+JSON.stringify(g[t]):""+t+"="+JSON.stringify(g[t]);return e[0]+"."+e[1]+"."+c.btoa(v)}}}return a}};notify_visitors.data.getCookie=function(a){a+="=";for(var e=decodeURIComponent(document.cookie).split(";"),b=0;b<e.length;b++){for(var d=e[b];" "==d.charAt(0);)d=d.substring(1);if(0==d.indexOf(a))return d.substring(a.length,
d.length)}return""};notify_visitors.data.set_NV_UID=function(a){notify_visitors.data.NV_UID=a}})(window);

notify_visitors.data.set_NV_UID('6f4987cd-8b3a-4220-80da-2efcac8ace82');
notify_visitors.data.session({"cookies":{"_nv_sess":["239950940.1627923841.JgkNrXsysMndS6VCL3maBu6KjUPPJ8xItL9JhqGxpl3nWaLTgH",30],"_nv_uid":["239950940.1627923841.6f4987cd-8b3a-4220-80da-2efcac8ace82.1627923841.1627923841.1",1051000],"_nv_utm":["239950940.1627923841.1.1.dXRtc3JjPShkaXJlY3QpfHV0bWNjbj0oZGlyZWN0KXx1dG1jbWQ9KG5vbmUpfHV0bWN0cj0obm90IHNldCl8dXRtY2N0PShub3Qgc2V0KXxnY2xpZD0obm90IHNldCk=",262800],"_nv_hit_uid":[1,-1440],"_nv_form_x":[1,-1440],"_nv_banner_x":[1,-1440],"_nv_did":["239950940.1627923841.119236101168yxpsf",1051000],"_nv_hit":["239950940.1627923841.cHZpZXc9MQ==",262800]},"domain":".utimf.com","uuid":"6f4987cd-8b3a-4220-80da-2efcac8ace82","newSess":true,"callback_data":{"utm_params":{"utm_source":"(direct)","utm_campaign":"(direct)","utm_medium":"(none)","utm_keyword":"(not set)","utm_content":"(not set)","utm_gclid":"(not set)"}}});


 
            
         notify_visitors.data.spa.anal = 1;
         notify_visitors.Events.data.auth = notify_visitors.auth;
            notify_visitors.load("//cdn.notifyvisitors.com/ext/js/nv-anal.js");
 
        
    
        notify_visitors.data.spa.push = 1;
        notify_visitors.Push.data.auth = notify_visitors.auth;
            notify_visitors.load("//cdn.notifyvisitors.com/ext/js/nv-push.js");   
    
 
    
