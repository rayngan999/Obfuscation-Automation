var _za_version="2106030729";try{if(ZA&&ZA.version)throw new Error("Already loaded");var ZA=function(){var o=encodeURIComponent,t={t:"https://za.zalo.me"},r={i:"__zi",o:"st",u:"ozi",s:"cdm",l:"_zirc",_:"cme",g:"anoTok",m:"anoVid"},i={p:"/v3/w/_zaf.gif",h:"/v3/le",S:"/static/v3/index.html?origin=",k:"/v3/gb",P:"/v3/brp",A:"/cm",I:"/gen-ano"},a={B:1,C:21,M:20},u={T:"reqVid",R:"resVid"},e={O:"z_tpv_",V:"z_cfb_"},c={W:"z_tpv",D:"resRd"+Date.now(),N:"z_dpm",F:"ZA.onready"},d={},s="https://za.",f={q:function(n,t){if("string"==typeof t)for(var e=n+"=",i=t.split(/[;&]/),o=0;o<i.length;o++){for(var r=i[o];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(e))return r.substring(e.length,r.length)}},J:function(n){return n=n||window.location.pathname+window.location.search},U:function(n){(n=n||{}).url=n.url||"",n.params=n.params||{},n.success=n.success||function(){},n.fail=n.fail||function(){};var t=new XMLHttpRequest;t.addEventListener("readystatechange",function(){4===this.readyState&&(200===this.status?n.success(this.responseText):n.fail(this.status))}),t.open("POST",n.url),t.withCredentials=!0,t.setRequestHeader("content-type","application/x-www-form-urlencoded"),t.send(f.$(n.params))},G:function(n){(n=n||{}).url=n.url||"",n.params=n.params||{},n.success=n.success||function(){},n.fail=n.fail||function(){};var t=new XMLHttpRequest;t.addEventListener("readystatechange",function(){4===this.readyState&&(200===this.status?n.success(this.responseText):n.fail(this.status))}),t.open("GET",n.url+"?"+f.$(n.params)),t.send()},$:function(n){var t="",e=!0;for(var i in n)!1===e?t+="&":e=!1,t+=i+"="+o(n[i]);return t},Z:function(n,t){try{t=t||window.location.href,n=n.replace(/[\[\]]/g,"\\$&");var e=new RegExp("[?&]"+n+"(=([^&#]*)|&|#|$)").exec(t);return e?e[2]?decodeURIComponent(e[2].replace(/\+/g," ")):"":null}catch(n){return""}},L:function(n){var t=document.location.href,e=t.split("?");if(2<=e.length){for(var i=e.shift(),o=e.join("?"),r=encodeURIComponent(n)+"=",a=o.split(/[&;]/g),u=a.length;0<u--;)-1!==a[u].lastIndexOf(r,0)&&a.splice(u,1);t=i+(1<=a.length?"?"+a.join("&"):""),window.history.replaceState("",document.title,t)}return t},j:function(n){for(var t=document.getElementsByTagName("script"),e=0;e<t.length;e++)if(-1<t[e].src.indexOf(n))return t[e].src;return null},H:function(n){(n=n||{}).url=n.url||"",n.params=n.params||{};var t=document.createElement("img");t.setAttribute("width","0"),t.setAttribute("height","0"),t.setAttribute("onload","this.parentNode.removeChild(this)"),t.setAttribute("onerror","this.parentNode.removeChild(this)"),t.src=n.url+"?"+this.$(n.params)+"&r="+(new Date).getTime();var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)},K:function(n){if(!n||""===n)return 1;for(var t=0,e=0,i=n.length-1;0<=i;i--){var o=parseInt(n.charCodeAt(i));0!=(e=266338304&(t=(t<<6&268435455)+o+(o<<14)))&&(t^=e>>21)}return t},X:function(n){n=n||_.Y;var t="Windows";return/windows 4.10/.test(n)?t="Windows 98":/windows 4.90/.test(n)?t="Windows ME":/windows nt 5.0/.test(n)?t="Windows 2000":/windows nt 5.1/.test(n)?t="Windows XP":/windows nt 6.0/.test(n)?t="Windows Vista":/windows nt 6.1/.test(n)?t="Windows 7":/windows nt 6.2/.test(n)?t="Windows 8":/windows nt 6.3/.test(n)&&(t="Windows 8.1"),t},nn:function(){if(/windows phone/.test(_.Y))return"Windows Phone";var n=_.tn.split(" ")[0];return"win32"===n.toLowerCase()||"win64"===n.toLowerCase()?n=this.X():"linux"===n.toLowerCase()&&(0<=_.Y.indexOf("android")?n="Android":0<=_.Y.indexOf("mac os")&&(n="iOS")),n},en:function(t){try{var n=document.cookie;if((n=n&&n.split(";"))&&0<n.length)for(var e=n.length-1;0<=e;e--){var i=n[e].trim().split("=");if(i&&1<i.length&&i[0]===t)return i[1]}return null}catch(n){return t===r.i&&w("Cant get vid: "+n+" | url: "+window.location.href+" | userAgent: "+navigator.userAgent),null}},in:function(n,t){try{var e=d[r.s]||f.on(),i=new Date(Date.now()+63072e6).toUTCString();return document.cookie=n+"="+t+"; expires="+i+"; path=/; domain="+e,!0}catch(n){return!1}},rn:function(n){try{var t=d[r.s]||f.on();return document.cookie=n+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain="+t,!0}catch(n){return!1}},an:function(){return!!navigator.userAgent&&/iPhone|iPad|Macintosh/.test(navigator.userAgent)&&!/CriOS|FxiOS/.test(navigator.userAgent)&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},un:function(){return/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent)},cn:function(){return/Android.+wv.+Chrome.+Mobile/.test(navigator.userAgent)},dn:function(){return f.un()||f.cn()},sn:function(){return/Puffin|SamsungBrowser|UCBrowser|QQBrowser|QIHU|Maxthon|OppoBrowser|MiuiBrowser|RealmeBrowser/.test(navigator.userAgent)},fn:function(){return/zalo/i.test(navigator.userAgent)},vn:function(){return/FBAN|FB_IAB|FBAV/.test(navigator.userAgent)},ln:function(){return/SamsungBrowser/.test(navigator.userAgent)||/Mobile.*OPR/.test(navigator.userAgent)},_n:function(n){return n.split("").reverse().join("")},wn:function(t){var e;try{e=new Event(t,{bubbles:!0,cancelable:!0})}catch(n){(e=document.createEvent("Event")).initEvent(t,!0,!0)}e&&document.dispatchEvent(e)},gn:function(n){var t={eventName:null,successCallback:function(){},timeoutCallback:function(){},errorCallback:function(){},timeout:1e8,target:document,listenTimes:1};if(f.mn(n,t),t.eventName&&t.target)try{var e=!1;function i(){e||(clearTimeout(o),f.pn(t.successCallback),--t.listenTimes||t.target.removeEventListener(t.eventName,i))}var o=setTimeout(function(){e=!0,t.target.removeEventListener(t.eventName,i),f.pn(t.timeoutCallback)},t.timeout);t.target.addEventListener(t.eventName,i)}catch(n){f.pn(t.errorCallback)}},hn:function(){var n=navigator.userAgent;return!/iPhone|iPad/.test(n)&&(/AppleWebKit.* \(KHTML, like Gecko\)( Version.[^ ]*)? Chrome\/\d+(\.\d+)*( Mobile)? Safari\/\d+(\.\d+)*$/.test(n)||/Edg\//.test(n)||/coc_coc_browser/.test(n)||/Vivaldi/.test(n)||/OPR/.test(n)&&!/Mobile/.test(n))},yn:function(){return!!window.postMessage},bn:function(){return window!==window.top},mn:function(n,t){try{for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])}catch(n){}},Sn:function(n){Date.now();var t=document.createElement("div");t.style.top="-10000px",t.style.width="0px",t.style.height="0px",t.style.position="absolute";var e=document.createElement("iframe");return t.appendChild(e),e.onload=function(){},e.setAttribute("src",n),document.body.insertBefore(t,document.body.firstChild),t},kn:function(e,i){window.addEventListener("message",function(n){var t;try{t=JSON.parse(n.data)}catch(n){t={}}/za\.zalo\.me/.test(n.origin)&&t.msgType===e&&(i(t.data),f.wn(c.D))},!1)},on:function(){var n=window.location.hostname.split(".");return"."+n[n.length-2]+"."+n[n.length-1]},pn:function(n){"function"==typeof n&&n()},zn:function(n){return window[n]},Pn:function(n){window[n]=!0},An:function(){for(var n in e)e.hasOwnProperty(n)&&(window[n]=!1)},In:function(){var n=l.Bn(r.i);return p.Cn(n)||/ZaloSDK/.test(navigator.userAgent)}},n="not available",v={Mn:void 0,xn:[],Tn:[],Rn:11,On:[],En:"z_cbd",Vn:void 0,Wn:function(n,t){v.xn.push(n),t&&v.Tn.push(t)},Dn:function(){f.H({params:{fts:v.xn,ver:_za_version,ua:navigator.userAgent,__zi:p.Nn(),ext:v.Tn},url:t.t+i.P})},Fn:function(){if(void 0!==v.Mn)return v.Mn;var n=!1;return 0<v.qn()&&(n=!0),n=n||/bot|spider|google|yahoo|http|baidu|bing|msn|duckduckbot|teoma|slurp|yandex|headless/i.test(navigator.userAgent),v.Mn=n},Jn:function(){var n=navigator.userAgent.toLowerCase(),t="unkown";return-1<n.indexOf("googlebot")?t="Googlebot":-1<n.indexOf("yandex")?t="YandexBot":-1<n.indexOf("googleweblight")?t="googleweblight":-1<n.indexOf("google-speakr")?t="GoogleSpeakr":-1<n.indexOf("google web preview")?t="GoogleWebPreview":-1<n.indexOf("mappy")?t="Mappy":-1<n.indexOf("adsbot-google")?t="AdsBotGoogle":-1<n.indexOf("jp.co.yahoo")?t="YahooBot":-1<n.indexOf("baidu")?t="Baidu":-1<n.indexOf("mediapartners-google")?t="MediapartnersGoogle":-1<n.indexOf("facebook")?t="Facebook":-1<n.indexOf("applebot")?t="Applebot":-1<n.indexOf("google")&&(t="Google"),t},Un:function(e){f.U({url:t.t+i.k,success:function(n){var t;try{n=n||"{}",t=JSON.parse(n)}catch(n){t={},w("parse failed: "+n.message)}p.$n(t[r.i],a.C),f.pn(e)}})},qn:function(){if(void 0!==v.Vn)return v.Vn;var n=0;try{("_phantom"in window||"callPhantom"in window)&&(n=1,v.Wn(1)),"__phantomas"in window&&(n=2,v.Wn(2)),"Buffer"in window&&(n=3,v.Wn(3)),"emit"in window&&(n=4,v.Wn(4)),"spawn"in window&&(n=5,v.Wn(5)),("webdriver"in window&&1==window.webdriver||"webdriver"in window.navigator&&1==window.navigator.webdriver)&&(n=6,v.Wn(6)),"domAutomation"in window&&(n=7,v.Wn(7));try{window.document.documentElement.getAttribute("webdriver")&&(n=8,v.Wn(8))}catch(n){}"_Selenium_IDE_Recorder"in window&&(n=9,v.Wn(9)),"__webdriver_script_fn"in document&&(n=10,v.Wn(10));try{var t,e="__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" "),i="_phantom __nightmare _selenium callPhantom callSelenium _Selenium_IDE_Recorder __stopAllTimers".split(" ");for(t in i)if(window[i[t]]){n=11,v.Wn(11);break}for(var o in e)if(window.document[e[o]]){n=12,v.Wn(12);break}for(var r in window.document)if(r.match(/\$[a-z]dc_/)&&window.document[r].Gn){n=13,v.Wn(13);break}}catch(n){}window.external&&window.external.toString()&&-1!=window.external.toString().indexOf("Sequentum")?(n=14,v.Wn(14)):window.document.documentElement.getAttribute("selenium")?(n=15,v.Wn(15)):window.document.documentElement.getAttribute("driver")?(n=16,v.Wn(16)):null!==document.documentElement.getAttribute("selenium")?(n=17,v.Wn(17)):null!==document.documentElement.getAttribute("webdriver")?(n=18,v.Wn(18)):null!==document.documentElement.getAttribute("driver")&&(n=19,v.Wn(19))}catch(n){}return v.Vn=n,v.On.push("injected"+n),f.wn(v.En),n},Zn:function(t){try{navigator.permissions.query({name:"notifications"}).then(function(n){"denied"===Notification.permission&&"prompt"===n.state&&(v.Wn(20),f.pn(t))})}catch(n){}v.On.push("incons"),f.wn(v.En)},Ln:function(){try{var n=window.navigator.permissions;if(!n)return v.On.push("perOverr"),f.wn(v.En),0;"query"!==n.query.name&&v.Wn(21),/functionquery\(\)\{\[nativecode\]\}/.test(n.query.toString().replace(/\s/g,""))||v.Wn(22),"toString"!==Function.prototype.toString.name&&v.Wn(23,Function.prototype.toString.name),/functiontoString\(\)\{\[nativecode\]\}/.test(n.query.toString.toString().replace(/\s/g,""))||v.Wn(24),n.query.toString.hasOwnProperty("[[Handler]]")&&n.query.toString.hasOwnProperty("[[Target]]")&&n.query.toString.hasOwnProperty("[[IsRevoked]]")&&v.Wn(25),n.hasOwnProperty("query")&&v.Wn(26),"prototype"in Function.prototype.toString&&v.Wn(27)}catch(n){}return v.On.push("perOverr"),f.wn(v.En),0},jn:function(){if(!f.an())return v.On.push("safari"),f.wn(v.En),0;try{/functionhasOwnProperty\(\)\{\[nativecode\]\}/.test(navigator.hasOwnProperty.toString().replace(/\s/g,""))||v.Wn(28),/functiontoString\(\)\{\[nativecode\]\}/.test(navigator.hasOwnProperty.toString.toString().replace(/\s/g,""))||v.Wn(29),-1===navigator.vendor.indexOf("Apple")&&v.Wn(30),47!==navigator.hasOwnProperty.toString().length&&v.Wn(31),navigator.hasOwnProperty("vendor")&&v.Wn(32)}catch(n){}return v.On.push("safari"),f.wn(v.En),0},Hn:function(){return f.cn()||f.fn()||f.vn()||f.sn()||/bot|spider|google|yahoo|http|baidu|bing|msn|duckduckbot|teoma|slurp|yandex|headless/i.test(navigator.userAgent)||!/Chrome/.test(window.navigator.userAgent)||window.chrome?(v.On.push("chrome"),f.wn(v.En),0):(v.Wn(33),v.On.push("chrome"),f.wn(v.En),33)},Kn:function(){return navigator.language&&0!==navigator.languages.length?(v.On.push("lang"),f.wn(v.En),0):(v.Wn(34),v.On.push("lang"),f.wn(v.En),34)},Qn:function(){var n=PluginArray.prototype===navigator.plugins.__proto__;return 0<navigator.plugins.length&&(n&=Plugin.prototype===navigator.plugins[0].__proto__),n?(v.On.push("plug"),f.wn(v.En),0):(v.Wn(35),v.On.push("plug"),f.wn(v.En),35)},Xn:function(){var n=MimeTypeArray.prototype===navigator.mimeTypes.__proto__;return 0<navigator.mimeTypes.length&&(n&=MimeType.prototype===navigator.mimeTypes[0].__proto__),n?(v.On.push("mime"),f.wn(v.En),0):(v.Wn(36),v.On.push("mime"),f.wn(v.En),36)},Yn:function(){if(f.cn()||f.fn()||f.vn()||f.ln())return v.On.push("connRtt"),f.wn(v.En),0;var n=navigator.connection;return 0===(n?n.rtt:void 0)?(v.Wn(37),v.On.push("connRtt"),f.wn(v.En),37):(v.On.push("connRtt"),f.wn(v.En),0)},nt:function(){return 0===window.outerHeight&&0===window.outerWidth?(v.Wn(38),v.On.push("outer"),f.wn(v.En),38):(v.On.push("outer"),f.wn(v.En),0)},tt:function(){if(!f.zn(e.V)&&(f.Pn(e.V),document.addEventListener(v.En,function(){v.Rn--,v.Rn<0&&w("Too many events fired! Events: "+v.On),0===v.Rn&&0<v.xn.length&&v.Dn()}),v.Hn(),v.jn(),v.Yn(),v.Kn(),v.nt(),v.Ln(),v.Xn(),v.Qn(),v.Zn(),-1<navigator.userAgent.indexOf("Mobile")&&-1===navigator.userAgent.indexOf("Firefox")))try{var n=document.createElement("video");if(!n.canPlayType)return void w("create video failed! ua: "+navigator.userAgent);""==n.canPlayType("application/vnd.apple.mpegURL")&&""==n.canPlayType("audio/mpegurl")&&w("not support HLS: "+navigator.userAgent)}catch(n){}},et:function(n){f.pn(n)},it:function(){try{var n=document.createElement("div");n.style.top="-10000px",n.style.width="0px",n.style.height="0px",n.style.position="absolute";var t=document.createElement("iframe");n.appendChild(t),t.srcdoc="page intentionally left blank",document.body.appendChild(n);var e=Object.getOwnPropertyDescriptors(HTMLIFrameElement.prototype),i=e.contentWindow.get.toString().replace(/\s/g,"");"functiongetcontentWindow(){[nativecode]}"!==i&&"functioncontentWindow(){[nativecode]}"!==i&&v.Wn(39,e.contentWindow.get.toString().replace(/\s/g,"")),t.contentWindow===window&&v.Wn(40),!0!==t.contentWindow.navigator.webdriver&&!0!==t.contentWindow.webdriver||v.Wn(41),n.remove()}catch(n){}return v.On.push("iframe"),f.wn(v.En),0}},l={ot:function(t,n){var e=!1;try{e=-1<location.hostname.indexOf("zalo.me")&&f.en(t)===n||f.in(t,n),localStorage.setItem(t,n)}catch(n){e||w("Set key "+t+" failed! Msg: "+n.message)}},Bn:function(n){try{return f.en(n)||localStorage.getItem(n)}catch(n){return null}},rt:function(t){try{var e=f.rn(t);localStorage.removeItem(t)}catch(n){e||w("Remove key "+t+" failed! Msg: "+n.message)}}},_={at:document.referrer||"",ut:document.characterSet||document.charset||"",tn:navigator.platform||"",ct:document.location.host||"",Y:navigator.userAgent.toLowerCase(),dt:"function"==typeof navigator.javaEnabled&&!0===navigator.javaEnabled(),an:-1<navigator.userAgent.toLowerCase().indexOf("safari")&&-1===navigator.userAgent.toLowerCase().indexOf("chrome"),st:[[navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage||n],navigator.languages],ft:navigator.deviceMemory||n,vt:(new Date).getTimezoneOffset(),lt:navigator.hardwareConcurrency||n};function w(n){f.H({params:{msg:n,ver:_za_version},url:t.t+i.h})}var g,m,p={_t:"",m:"",wt:"",o:"",gt:/^2000\.((\w+\.\d+\.\w+$)|([^\.]+\.\d$))/,bot_pattern:/^4000\.\w+\.\d+\.\w+$/,pt:/^3000\.((\d+)|([^\.]+\.\d$))/,ht:/^2001\.((\w+\.\d+\.\w+$)|([^\.]+\.\d$))/,yt:/^2002\.((\w+\.\d+\.\w+$)|([^\.]+\.\d$))/,bt:function(n){return p.gt.test(n)||p.pt.test(n)||p.bot_pattern.test(n)},Cn:function(n){return p.ht.test(n)||p.yt.test(n)},St:function(){var n=l.Bn(r.i);if(p.bt(n))this.$n(n,a.B);else if(v.Fn()){var t=v.Jn().toLowerCase(),e="4000."+f._n(t)+"."+Date.now()+"."+f.K(t);this.$n(e,a.C)}},kt:function(n){!1!==this.bt(n)?(this._t=n,l.ot(r.i,n),k||(k=!0,ZA&&ZA.version?f.wn(c.F):setTimeout(function(){f.wn(c.F)},0))):w("Set visitor id while it is invalid: "+n)},$n:function(n,t){this.zt(t),this.kt(n)},Nn:function(){return this._t},Pt:function(e){return this.m?("function"==typeof e&&e(this.m),this.m):"function"!=typeof e?null:void f.G({url:t.t+i.I,params:{__zi:this._t,anoTok:this.wt},success:function(n){var t=JSON.parse(n);0===t.errorCode?(p.m=t[r.m],e(p.m)):e(null)},fail:function(){e(null)}})},At:function(n){return"function"==typeof n&&(this.bt(this._t)?n(this._t):document.addEventListener(c.F,function(){n(p.Nn())})),this._t},zt:function(n){n&&(this.o=n)},It:function(){return this.o}},h=(g={zl:window.location.href,zrf:_.at,zch:_.ut,zts:(new Date).getTime(),zos:f.nn(),zla:_.st,__zi:l.Bn(r.i),v:_za_version,incog:void 0},(m=l.Bn(r.u))&&(g[r.u]=m),g);function y(){if(!f.zn(e.O)){f.Pn(e.O),h.zact="pv",h._zapp=f.en(location.host+"_zapp"),h._zidnbaid=f.en(location.host+"_zidnbaid");function n(){f.U({url:t.t+i.p,params:h,success:function(n){d=JSON.parse(n),l.rt(r.l),d[r.u]&&l.ot(r.u,d[r.u]),f.L("gidzl"),p.$n(d[r.i],d[r.o]),p.wt=d[r.g],f.wn(c.W),function(){if(!0!==d[r._])return;f.U({url:s+location.host+i.A,params:{url:location.href,ref:document.referrer,__zi:p.Nn()}})}(),function(o){if(!0!==o.enabled)return;try{(new Image).src=o.fbUrl+"&vid="+p.Nn()+"&pf="+o.pf+"&qua=0",(new Image).src=o.fbUrl+"&vid="+p.Nn()+"&pf="+o.pf+"&qua=1",(new Image).src=o.fbUrl+"&vid="+p.Nn()+"&pf="+o.pf+"&qua=2";var t=!1;!function n(){t||("undefined"!=typeof ga?(t=!0,f.G({url:"https://px.za.zaloapp.com/cd",params:{id:o.id,pf:o.pf,pc:o.pc,cp:o.cp,vid:p.Nn()},success:function(n){var t=JSON.parse(n);if(0===t.errorCode)if(ga("create",o.ggUA,"auto","dmp"),ga("dmp.set","userId",p.Nn()),Array.isArray(t.data))for(var e=0;e<t.data.length;e++)ga("dmp.send","pageview",i(t.data[e].cds));else ga("dmp.send","pageview",i(t.data.cds));function i(n){for(var t={},e=1;e<=n.length;e++)t["dimension"+e]=n[e-1];return t}}})):setTimeout(function(){n()},500))}()}catch(n){w("integrate failed! "+n.message)}}(d)},fail:function(n){k||(k=!0,f.wn(c.F))}})}void 0!==h.incog?n():f.gn({eventName:c.N,successCallback:n,timeout:2e3,timeoutCallback:n})}}function b(){window.addEventListener("message",function(n){var t={};try{t=JSON.parse(n.data)}catch(n){}!function(n){return n.msgType===u.T}(t)||n.source.postMessage(function(){var n={msgType:u.R,from:location.origin,data:p.Nn()};return JSON.stringify(n)}(),n.origin)},!1)}function S(e){var n,i=!1,o=setTimeout(function(){i=!0,window.removeEventListener("message",r,!1),e()},1e3);function r(n){var t={};try{t=JSON.parse(n.data)}catch(n){}!function(n){return n.msgType===u.R}(t)||i||(clearTimeout(o),window.removeEventListener("message",r,!1),p.$n(t.data,a.B),e(t))}window.addEventListener("message",r,!1),window.top.postMessage((n={msgType:u.T,from:location.origin},JSON.stringify(n)),"*")}var k=!1;return function(){if(!f.In()){if(f.An(),function(){function a(n){void 0===h.incog&&(h.incog=n,f.wn(c.N))}var n;try{window.webkitRequestFileSystem?76<=function(){var n=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);if(!n)throw new Error("Not Chromium!");return parseInt(n[2],10)}()&&navigator.storage&&navigator.storage.estimate?navigator.storage.estimate().then(function(n){a(!!(n&&n.quota<125829120))}):window.webkitRequestFileSystem(0,1,function(){a(!1)},function(){a(!0)}):/Apple/.test(navigator.vendor)&&/Safari/.test(navigator.userAgent)?function(){function i(n){for(var t="",e=0;e<n;e++)t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62*Math.random()));return t}if(13<=function(){var n=navigator.userAgent.match(/Version\/([0-9\._]+).*Safari/)||navigator.userAgent.match(/iPhone OS ([0-9\._]+).*Safari/);if(!n)throw new Error("Not Safari!");return parseInt(n[1],10)}()){var n=function(){for(var n=i(100),t=[],e=0;e<1e3;e++)t.push(n);return t.join()}(),t=[];try{for(var e=0;e<30;e++){var o=i(10);localStorage.setItem(o,n),t.push(o)}a(!0)}catch(n){a(!1)}finally{for(e=0;e<t.length;e++)localStorage.removeItem(t[e])}}else{var r=!1;try{localStorage.setItem("inPrivate","0"),localStorage.removeItem("inPrivate")}catch(n){return a(navigator.cookieEnabled)}try{window.openDatabase(null,null,null,null)}catch(n){r=!0}a(r)}}():"MozAppearance"in document.documentElement.style?function(){try{if(null==indexedDB)a(!0);else{var n=indexedDB.open("inPrivate");n.onsuccess=function(){a(!1)},n.onerror=function(){a(!0)}}}catch(n){a(!1)}}():(n=!window.indexedDB&&(window.PointerEvent||window.MSPointerEvent),a(!!n))}catch(n){a(!1),w("detect Incogito failed! msg: "+n.message)}}(),p.St(),f.bn())p.Nn()?y():S(y);else b(),p.Nn()?y():v.et(y);1==f.Z("giddebug",window.location.href)&&document.addEventListener("readystatechange",function(n){if("complete"===n.target.readyState){var t=document.createElement("script");t.async=1,t.onload=function(){eruda.init()},t.src="//cdn.jsdelivr.net/npm/eruda",document.body.appendChild(t)}})}}(),{version:_za_version,getVisitorID:function(n){return p.At(n)},getAnonymousVid:function(n){return p.Pt(n)}}}()}catch(n){"Already loaded"!==n.message&&(console.error(n),(new Image).src="https://za.zalo.me/v3/le?error="+encodeURIComponent('{"error":"LOAD", "extra": {"name":"'+n.name+'","line":"'+(n.lineNumber||n.line)+'","script":"'+(n.fileName||n.sourceURL||n.script)+'","stack":"'+(n.stackTrace||n.stack)+'","ver":"'+_za_version+'","message":"'+n.message+'"}}'))}