/*! fangcloud - v1.0.1 */

define("modules/common_efe2ae4",["jquery","egeui","i18n","underscore","handlebars","fingerprint2"],function(require,exports,module){var $=require("jquery"),egeui=require("egeui"),lang=require("i18n"),_=require("underscore"),Handlebars=require("handlebars"),Fingerprint2=require("fingerprint2"),ConfirmBox=egeui.ConfirmBox,Popup=egeui.Popup,mod={};!function(g){var r=/\+/g;function _(e){return h.raw?e:encodeURIComponent(e)}function f(e,t){var o=h.raw?e:function n(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(r," ")),h.json?JSON.parse(e):e}catch(t){}}(e);return g.isFunction(t)?t(o):o}var h=g.cookie=function(e,t,o){if(t!==undefined&&!g.isFunction(t)){if("number"==typeof(o=g.extend({},h.defaults,o)).expires){var n=o.expires,r=o.expires=new Date;r.setTime(+r+864e5*n)}return document.cookie=[_(e),"=",function m(e){return _(h.json?JSON.stringify(e):String(e))}(t),o.expires?"; expires="+o.expires.toUTCString():"",o.path?"; path="+o.path:"",o.domain?"; domain="+o.domain:"",o.secure?"; secure":""].join("")}for(var i,a=e?undefined:{},s=document.cookie?document.cookie.split("; "):[],l=0,d=s.length;l<d;l++){var c=s[l].split("="),u=(i=c.shift(),h.raw?i:decodeURIComponent(i)),p=c.join("=");if(e&&e===u){a=f(p,t);break}e||(p=f(p))===undefined||(a[u]=p)}return a};h.defaults={},g.removeCookie=function(e,t){return g.cookie(e)!==undefined&&(g.cookie(e,"",g.extend({},t,{expires:-1})),!g.cookie(e))}}($),jQuery.fn.putCursorAtEnd=function(){return this.each(function(){if($(this).focus(),this.setSelectionRange){var e=2*$(this).val().length;this.setSelectionRange(e,e)}else if(this.createTextRange){var t=this.createTextRange();t.moveEnd("character",this.value.length),t.moveStart("character",this.value.length),t.select()}else $(this).val($(this).val());this.scrollTop=999999})},$.fn.serializeObject=function(){var e={},t=this.serializeArray();return $.each(t,function(){e[this.name]!==undefined?(e[this.name].push||(e[this.name]=[e[this.name]]),e[this.name].push(this.value||"")):e[this.name]=this.value||""}),e},$.fn.formErrorHandle=function(e){this.find(":input, select").focus(function(){$(this).removeClass("error").closest(".form-control-group").find("span.error").remove()})},$.fn.handleFormErros=function(e){var n=this;$.each(e,function(e,t){var o=n.find("[name="+t.field+"]");o[0]||(o=n.find("[data-field="+t.field+"]")),o.addClass("error"),o.closest(".form-control-group").find("span.error").remove(),o.after('<span class="error">'+t.error_tr_msg+"</span>")})},$.fn.bindTextChange=function(){return this.each(function(){if(/\bMSIE [6789]\.0\b/.test(navigator.userAgent)){var o=this.value;$(this).bind("onpropertychange",function(e){if("value"===e.propertyName){var t=e.srcElement.value;t!==o&&(o=t,$(e.srcElement).trigger("textchange"))}}),$(this).on("selectionchange keyup keydown",function(){this.value!==o&&(o=this.value,$(this).trigger("textchange"))})}else $(this).on("input",function(e){$(this).trigger("textchange")})})},$.fn.autoTextarea=function(e){return this.each(function(){var e=$(this);if(!e.data("plugin_autoTextarea")){var n=e.height(),r=parseInt(e.css("paddingBottom"))+parseInt(e.css("paddingTop"))||0;0<this.value.replace(/\s/g,"").length&&e.height(Math.max(this.scrollHeight-r,n)),e.on("input keyup change",function(e){var t=$(window),o=t.scrollTop();$(this).height(0).height(Math.max(this.scrollHeight-r,n)),t.scrollTop(o)}),e.data("plugin_autoTextarea",!0)}})},$.fn.maxlengthTextArea=function(){return this.each(function(){var e=$(this),o=$(this).attr("maxlength");if(!o||!e.is("textArea"))return!1;e.on("change keyup",function(){var e=$(this).val();e.length>o&&$(this).val(e.substring(0,o))}),e.on("paste",function(e){$(this).data("change-action",e.type)}),e.on("input propertychange",function(e){if($(this).data("change-action")){$(this).data("change-action",null);var t=$(this).val();t.length>o&&$(this).val(t.substring(0,o))}})})},$.fn.bindDomResize=function(){return this.each(function(){var o=$(this);if(!o.data("plugin_bindDomResize")){var n=o.height(),r=o.width();setTimeout(function i(){var e=o.height(),t=o.width();e===n&&t===r||(r=t,n=e,o.trigger("dom_resize")),setTimeout(i,20)},20),o.data("plugin_bindDomResize",!0)}})},Handlebars.registerHelper("for",function(e,t,o,n){for(var r="",i=e;i<=t;i+=o)r+=n.fn(i);return r}),Handlebars.registerHelper("select",function(e,t){var o=$("<select/>").html(t.fn(this));return o.find("[value="+e+"]").attr({selected:"selected"}),o.html()}),Handlebars.registerHelper("mention",function(e,n){return e=(e=(e=(e=Handlebars.Utils.escapeExpression(e)).replace(/@\[(?:g\-)?(\d+):([^\]]+)\]/g,function(e,t,o){return"0"===t&&(o="string"==typeof n?n:mod.getI18n("fileutil.comment.metionAll")),'<a class="mention" href="#'+t+'">@'+o+"</a>"})).replace(/&lt;span\s+class=&quot;highlight&quot;&gt;(.*?)&lt;\/span&gt;/g,function(e,t){return'<span class="highlight">'+t+"</span>"})).replace(/(\r\n|\n|\r)/gm,"<br>"),new Handlebars.SafeString(e)}),Handlebars.registerHelper("xss",function(e){return e=(e=(e=Handlebars.Utils.escapeExpression(e)).replace(/&lt;span\s+class=&quot;highlight&quot;&gt;(.*?)&lt;\/span&gt;/g,function(e,t){return'<span class="highlight">'+t+"</span>"})).replace(/(\r\n|\n|\r)/gm,"<br>"),new Handlebars.SafeString(e)}),Handlebars.registerHelper("convertSpaceToNbsp",function(e){return e=(e=Handlebars.Utils.escapeExpression(e)).replace(/\s/g,"&nbsp;"),new Handlebars.SafeString(e)}),Handlebars.registerHelper("lang",function(){return mod.language}),Handlebars.registerHelper("concat",function(){return Array.prototype.slice.call(arguments,0,-1).join("")});var fcConfirmBox=ConfirmBox.extend({setup:function(){this.options.confirmText||(this.options.confirmText=getI18n("base.ok")),this.options.cancelText||(this.options.cancelText=getI18n("base.cancel")),fcConfirmBox.superClass.setup.call(this)}});mod.ConfirmBox=fcConfirmBox;var fcSuccessAlert=ConfirmBox.extend({_tipIconTpl:'<div class="{{classPrefix}}-tip-icon" data-role="tip_icon"><i class="iconfont icon-tipssuccess"></i></div>',setup:function(){this.options.themeClass||(this.options.message?this.options.themeClass="success-confirm":this.options.themeClass="success-confirm no-message"),this.options.confirmText||(this.options.confirmText=getI18n("base.ok")),this.options.cancelText||(this.options.cancelText=getI18n("base.cancel")),this.options.confirmTpl||(this.options.confirmTpl='<button class="pure-button confirm" data-role="confirm">ç¡®å®</button>'),fcSuccessAlert.superClass.setup.call(this),$(this._parseTpl(this._tipIconTpl)).prependTo(this.$element)}}),Qa,Pa;mod.SuccessAlert=fcSuccessAlert,mod.Select=Popup.extend({setup:function(){var e=this.options,t=e.group_element;e.events=e.events||{},e.events["click li"]=function(e){this.setValue(e.target),this.hide()},e.showAlign||(e.showAlign={pos:"bottom",offset:"-1 0"}),e.triggerType||(e.triggerType="click"),t&&(e.trigger||(e.trigger=t.find(".select")),e.element||(e.element=t.find(".select-group-options"))),this.$trigger=$(this.options.trigger),mod.Select.superClass.setup.call(this)},setValue:function(e){if("string"==typeof e||"number"==typeof e)var t=this.$('[data-value="'+e+'"]');else e=(t=$(e)).attr("data-value");if(!t.length)return!1;var o=t.text();this.$trigger.attr("data-value",e).find(".select-text").text(o),this.$trigger.find('[data-role="input"]').val(e),this.trigger("change",{targetValue:e})}}),mod.h5=!!(window.File&&window.FileReader&&window.FileList&&window.Blob),mod.ua=(Pa={},Pa.match=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("Trident")<0&&/(rv):([\w.]+)\) like gecko/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[],o=/(windows)[ ]([ \w.]+)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0",systemData:{system:o[1]||"",version:o[2]||"0"}}},(Qa=Pa.match(navigator.userAgent)).browser&&(Pa[Qa.browser]=!0,Pa.browser=Qa.browser,Pa.version=Qa.version),Pa.rv&&(Pa.msie=!0,Pa.browser="msie"),Pa.chrome?Pa.webkit=!0:Pa.webkit&&(Pa.safari=!0,Pa.browser="safari"),Pa.system={},Qa.systemData.system&&(Pa.system[Qa.systemData.system]=!0,Pa.system.version=Qa.systemData.version),Pa),0<$("#Language").length&&(mod.language=$("#Language").val());var requesttoken=$("#oc_requesttoken").val();function getI18n(e){var t=lang[e];if(t===undefined||null===t)return e;var o=Array.prototype.slice.call(arguments,1);return"string"==typeof t&&"cerschool"===mod.product_id&&"zh-CN"===mod.language&&(t=t.replace(/ä¼ä¸/g,"é«æ ¡").replace(/å¬å¸/g,"é«æ ¡").replace(/é¨é¨/g,"å­¦é¢")),o.length?t.replace(/{(\d+)}/g,function(e,t){return"undefined"!=typeof o[t]?o[t]:e}):t}mod.requesttoken=requesttoken,$("#asset_url")[0]&&(mod.asset_url=$("#asset_url").val()),$("#upload_url")[0]&&(mod.upload_url=$("#upload_url").val()),mod.enterprise_default_name=$("#enterprise_default").val(),0!==$("#not_enterprise").length&&$("#not_enterprise").val()||0<$("#referrer_url").length&&(mod.referrer_url=$("#referrer_url").val()),mod.logout_url=mod.referrer_url||"/sso/logout",mod.logo=mod.asset_url+"images/logo.png",mod.fad_dynamic_require=function(e){return"undefined"!=typeof __fad_dynamic_require_hash_map__?mod.asset_url+__fad_dynamic_require_hash_map__[e]:mod.asset_url+e},mod.logout_url=mod.referrer_url||"/auth/logout",mod.logo=mod.fad_dynamic_require("images/logo."+mod.language+".png","./images/",/logo\.[\w-]+\.png$/),window.console===undefined&&(window.console={log:function(e){}}),mod.product_id=$("#product_id").val(),mod.resource_id=$("#resource_id").val(),mod.app_url=$("#app_url").val(),mod.qrcode_image=mod.fad_dynamic_require("images/"+mod.resource_id+"/qrcode-downloads.png","./images/",/[\w-]+\/qrcode-downloads\.png$/),1==$("#is_ios_enterprise_deployment").val()?mod.ios_link="/mobile?open_ios=1":mod.ios_link=$("#ios_download_link").val(),mod.android_link=mod.app_url+"android/"+mod.resource_id+"/"+mod.resource_id+"-android-latest.apk"+(mod.ua.msie?"":"?t="+(new Date).getTime()),"jinko"===mod.product_id?(mod.sync_windows_link="https://app.fangcloud.com/sync/jinko/new/jinkoSyncInstaller.exe"+(mod.ua.msie?"":"?t="+(new Date).getTime()),mod.sync_mac_link="https://app.fangcloud.com/sync/jinko/new/jinkoSyncInstaller.pkg"+(mod.ua.msie?"":"?t="+(new Date).getTime())):(mod.sync_windows_link=mod.app_url+"sync/"+mod.resource_id+"/"+mod.resource_id+"SyncInstaller.exe"+(mod.ua.msie?"":"?t="+(new Date).getTime()),mod.sync_mac_link=mod.app_url+"sync/"+mod.resource_id+"/"+mod.resource_id+"SyncInstaller.pkg"+(mod.ua.msie?"":"?t="+(new Date).getTime()),mod.v2_sync_windows_link=mod.app_url+"sync/v2/"+mod.resource_id+"/"+mod.resource_id+"Installer.exe"+(mod.ua.msie?"":"?t="+(new Date).getTime()),mod.v2_sync_mac_link=mod.app_url+"sync/v2/"+mod.resource_id+"/"+mod.resource_id+"Installer.pkg"+(mod.ua.msie?"":"?t="+(new Date).getTime())),mod.sync_download_link=mod.ua.system.windows?mod.sync_windows_link:mod.sync_mac_link,mod.v2_sync_download_link=mod.ua.system.windows?mod.v2_sync_windows_link:mod.v2_sync_mac_link,$(document).ajaxSend(function(e,t,o){/^(GET|HEAD|OPTIONS|TRACE)$/.test(o.type)||t.setRequestHeader("requesttoken",requesttoken)}).ajaxError(function(e,t,o,n){500===t.status&&mod.alert(getI18n("common.alert.server500"),null,getI18n("base.ok")),502===t.status&&mod.alert(getI18n("common.alert.server502"),null,getI18n("base.ok")),404===t.status&&mod.alert(getI18n("common.alert.server404"),null,getI18n("base.ok"))}),mod.getI18n=getI18n,mod.getI18nSafeString=function(e){for(var t=Array.prototype.slice.call(arguments,0),o=t.length,n=1;n<o;n++)"string"==typeof t[n]&&(t[n],mod.stripTags(t[n]));return getI18n.apply(this,t)},Handlebars.registerHelper("getI18n",mod.getI18n),Handlebars.registerHelper("getI18nSafeString",mod.getI18nSafeString),mod.urlHelper={split:function(e){var t=e.split("?");if(1<t.length){var o=t[1].split("#");t[1]=o[0],t[2]=o[1]}else{o=t[0].split("#");t[0]=o[0],t[2]=o[1]}return t},join:function(e){var t=e[0];return e[1]&&(t+="?"+e[1]),e[2]&&(t+="#"+e[2]),t},getHash:function(e){return this.split(e)[2]},getQuery:function(e,t,o){var n=this.split(e)[1],r=this.parseQuery(n,o);return t?r[t]:r},addQuery:function(e,t){return t?(o=e?"string"==typeof e?this.parseQuery(e,{decode:!1}):e:{},n=_.extend({},o,t),this.stringifyQuery(n)):e;var o,n},parseQuery:function(e,t){var o,n=!t||!(!1===t.decode),r={};return e&&(o=(o=n?decodeURIComponent(e):e).split("&"),_.forEach(o,function(e){var t=e.split("=");1<t.length&&(r[t[0]]=t[1])})),r},stringifyQuery:function(e){var t,o,n=[];for(t in e)((o=e[t])===undefined||null===o||"number"==typeof o&&o!=o)&&(o=""),n.push(t+"="+o);return n.join("&")},format:function(e,t){if(!t||"string"!=typeof e)return e;var o=this.split(e);return t.hash&&(o[2]=t.hash),t.query&&(o[1]=this.addQuery(o[1],t.query)),this.join(o)}},mod.parseQueryString=function(e){var t={};return e&&_.each(_.map(decodeURI(e).split(/&/g),function(e,t){var o,n=e.split("="),r={};1<=n.length&&(2===n.length&&(o=n[1]),r[n[0]]=o);return r}),function(e){_.extend(t,e)}),t};var tagsToReplace={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"},notifier_timer,has_notification;mod.stripTags=function(e){return e.replace(/[&<>"]/g,function(e){return tagsToReplace[e]||e})},mod.escapeHTML=function(e){return e=(e=(e=mod.stripTags(e)).replace(/&lt;span\s+class=&quot;highlight&quot;&gt;(.*?)&lt;\/span&gt;/g,function(e,t){return'<span class="highlight">'+t+"</span>"})).replace(/(\r\n|\n|\r)/gm,"<br>")},mod.alert=function(e,t,o,n){n=n||{};var r=new ConfirmBox({title:"",themeClass:"no-title",message:e,cancelTpl:null,confirmText:o||getI18n("base.ok"),onConfirm:function(){t&&t()}});n.themeClass&&r.$element.addClass(n.themeClass)},mod.topNotify=function(e,t){e=mod.stripTags(e);var o=mod.top_notifier;o||((o=$('<div id="top_notify" class="top-notify"><div class="notify-msg">'+e+'</div><i class="icon icon-notify-close"></i></div>').appendTo("body")).find("i").click(function(){mod.hideNotifier()}),mod.top_notifier=o),mod.showNotifier(e,t)},mod.showNotifier=function(e,t){has_notification?(notifier_timer?clearTimeout(notifier_timer):mod.top_notifier.stop(),mod.top_notifier.animate({top:120,opacity:.1},300,function(){mod.top_notifier.find(".notify-msg").html(e),mod.top_notifier.animate({top:100,opacity:1},400)})):(mod.top_notifier.find(".notify-msg").html(e),mod.top_notifier.show().animate({top:100,opacity:1},600)),has_notification=!0,notifier_timer=setTimeout(function(){mod.hideNotifier()},1e3*(t||3))},mod.hideNotifier=function(){notifier_timer&&clearTimeout(notifier_timer),mod.top_notifier.animate({top:120,opacity:"hide"},1e3,function(){has_notification=!1}),notifier_timer=null};var ajaxloading=!1,loadingTimeout,hasPopupError;function setDeviceToken(l){new Fingerprint2({excludeScreenResolution:!0,excludeAvailableScreenResolution:!0}).get(function(e){var t=window.location.host.split("."),o=t.slice(t.length-2).join(".");$.cookie(l,e,{path:"/",domain:o});var n,r,i=Array.prototype.slice.call(arguments),a=i[1];for(n=0,r=a.length;n<r;n++)"canvas"!==a[n].key&&"webgl"!==a[n].key||(a[n].value=a[n].value.slice(0,32));var s=JSON.stringify(i);$.ajax({url:"/user_settings/log_device_token",contentType:"application/json",headers:{requesttoken:mod.requesttoken},type:"POST",data:JSON.stringify({device_info:s})})})}mod.globalBlocker=function(e){0===e?($("#global_blocker").remove(),ajaxloading=!1):ajaxloading||(ajaxloading=!0,$('<div id="global_blocker" class="global-blocker"></div>').appendTo("body"))},mod.globalLoading=function(e){if(0===e&&loadingTimeout){var t=Math.max(600-(new Date-loadingTimeout),0);setTimeout(function(){$("#global_loading").remove(),loadingTimeout=null},t)}else loadingTimeout||(loadingTimeout=new Date,e=e||getI18n("base.loading"),$('<div id="global_loading" class="global-loading">'+e+"</div>").appendTo("body"))},mod.ajax=function(t){t.block!==undefined&&!0!==t.block||mod.globalBlocker();"json"===(t=$.extend({type:"post"},t)).type&&(t.method="post",t.data=JSON.stringify(t.data),t.contentType="application/json");var o=t.success;t.success=function(e){if(t.block!==undefined&&!0!==t.block||mod.globalBlocker(0),e.success||t.accept_errors&&e.errors&&_.intersection(t.accept_errors,_.keys(e.errors)).length){if(o)return o.apply(this,arguments)}else e.errors&&(mod.errorHandle(e,t),t.errorHandler&&t.errorHandler.apply(this,arguments))};var n=t.error;return t.error=function(e){t.block!==undefined&&!0!==t.block||mod.globalBlocker(0),n&&n.apply(this,arguments)},t.cache=!1,-1!==t.timeout&&(t.timeout=t.timeout||6e4),$.ajax(t)},mod.popupError=function(e,t,o){if(!hasPopupError){hasPopupError=!0;var n={title:"",message:e,themeClass:"no-title",cancelTpl:null,confirmText:o||getI18n("base.ok"),onConfirm:function(){hasPopupError=!1,t&&t()}};new ConfirmBox(n)}},window.FC_popupError=mod.popupError,mod.errorHandle=function(e,t){var o=e.errors;if(o.login_expired){var n=e.redirect||(mod.referrer_url?mod.referrer_url:"/sso/logout");mod.popupError(getI18n("common.alert.loginFail",getI18n("base.ok")),function(){window.location.href=n},getI18n("base.ok"))}else if(o.logged_in)mod.popupError(getI18n("logged",getI18n("base.ok")),null,getI18n("base.ok"));else if(o.security_check_failed)mod.popupError(getI18n("pageExpired",getI18n("base.ok")),function(){window.location.reload(!0)},getI18n("base.ok"));else if(o.login&&e.redirect)window.location.href=e.redirect;else if(o.force_two_step)window.location.href="/user_settings/index/security";else if(o.validation_errors||o.external_errors){var r=o.validation_errors||o.external_errors;t&&t.validation_form?$(t.validation_form).handleFormErros(r):t&&t.error_position?mod.showSubmitError(r[0].error_tr_msg,t.error_position):mod.popupError(r[0].error_tr_msg)}else o.permission_denied?mod.popupError(getI18n("base.noPermission"),function(){e.redirect&&(window.location.href=e.redirect)},getI18n("base.ok")):mod.popupError("error")},mod.showSubmitError=function(e,t){t.el||(t={el:t,pos:"before"});var o="before"===t.pos?"prev":"next",n=t.el;e?n[o]().hasClass("error-msg")?n[o]().html(e):n[t.pos]('<span class="error-msg">'+e+"</span>"):n[o]().hasClass("error-msg")&&n[o]().remove()},mod.formatDate=function(e,t){"object"!=typeof e&&(e=new Date(e));var o=e.getMonth()+1,n=e.getDate(),r=e.getHours(),i=e.getMinutes(),a=e.getSeconds();if("%R"===(t=t||"%R")){var s=new Date,l=new Date;l.setHours(0,0,0,0),(d=Math.floor((l.getTime()-e.getTime())/1e3))<=0?(d=Math.floor((s.getTime()-e.getTime())/1e3))<=0?t=getI18n("common.time.justNow"):d<60?t=getI18n("common.time.beforeSeconds",d):d<3600?t=getI18n("common.time.beforeMinutes",Math.floor(d/60)):d<86400&&(t=getI18n("common.time.beforeHours",Math.floor(d/60/60))):t=d<=86400?getI18n("common.time.yesterday")+" %hh:%mm":d<=172800?"en"===mod.language?"%Y-%M-%D %hh:%mm":getI18n("common.time.theDayBefore")+" %hh:%mm":"%Y-%M-%D %hh:%mm"}if("%L"===t){var d;s=new Date;(d=Math.floor((e.getTime()-s.getTime())/1e3))<=86400?d<=0?t="":d<60?t=getI18n("unit.second",d):d<3600?t=getI18n("unit.minute",Math.floor(d/60)):d<86400&&(t=getI18n("unit.hour",Math.floor(d/60/60))):t=getI18n("unit.day",Math.floor(d/86400))}return t.replace("%YY",e.getFullYear()).replace("%Y",e.getFullYear()%100).replace("%MM",o<10?"0"+o:o).replace("%M",o).replace("%DD",n<10?"0"+n:n).replace("%D",n).replace("%hh",r<10?"0"+r:r).replace("%h",r).replace("%mm",i<10?"0"+i:i).replace("%m",i).replace("%ss",a<10?"0"+a:a).replace("%s",a)},mod.approxSize=function(e,t,o){var n=!1;o===undefined&&(o=2,n=!0);var r=t?0:1024,i=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],a=i.length-1;for(nMultiple=0,nApprox=e-0;nMultiple<a&&nApprox>=r&&t!==i[nMultiple];nApprox/=1024,nMultiple++);return n&&nMultiple<=1&&(o=0),nApprox.toFixed(o)+(t?"":" "+i[nMultiple])},mod.setPageTitle=function(e,t){t=t||" - "+mod.enterprise_default_name,document.title=e+t},mod.downloadURL=function(e){var t="hiddenDownloader",o=document.getElementById(t);null===o&&((o=document.createElement("iframe")).id=t,o.style.display="none",document.body.appendChild(o)),o.src=e},mod.changeURLArg=function(url,arg,arg_val){var pattern=arg+"=([^&]*)",replaceText=arg+"="+arg_val;if(url.match(pattern)){var tmp="/("+arg+"=)([^&]*)/gi";return tmp=url.replace(eval(tmp),replaceText),tmp}return url.match("[?]")?url+"&"+replaceText:url+"?"+replaceText},mod.stringifyQuery=function(e){var t,o=[];for(t in e)o.push(t+"="+e[t]);return o.join("&")},$.cookie("old_device_token")||$.cookie("device_token")||setDeviceToken("old_device_token"),$.cookie("device_token")||(Fingerprint2.prototype.get=function(n){var e=[];e=this.userAgentKey(e),e=this.colorDepthKey(e),e=this.screenResolutionKey(e),e=this.availableScreenResolutionKey(e),e=this.sessionStorageKey(e),e=this.localStorageKey(e),e=this.indexedDbKey(e),e=this.addBehaviorKey(e),e=this.openDatabaseKey(e),e=this.cpuClassKey(e),e=this.platformKey(e),e=this.canvasKey(e),e=this.webglKey(e),e=this.hasLiedLanguagesKey(e),e=this.hasLiedResolutionKey(e),e=this.hasLiedOsKey(e),e=this.hasLiedBrowserKey(e),e=this.touchSupportKey(e);var r=this;this.fontsKey(e,function(e){var o=[];r.each(e,function(e){var t=e.value;"undefined"!=typeof e.value.join&&(t=e.value.join(";")),o.push(t)});var t=r.x64hash128(o.join("~~~"),31);return n(t,e)})},Fingerprint2.prototype.userAgentKey=function(e){if(!this.options.excludeUserAgent){var t=mod.ua.browser;e.push({key:"user_agent",value:t})}return e},setDeviceToken("device_token")),mod.createI18nPopup=function(e){var t="-23 -16";if(0==$(".current-language").length)return!1;"home"===$(".language-switch").attr("data-flag")&&(t="-23 0");var o=$(e),n=$("#Language").val(),r=o.find('.language-switch-dropdown a[data-by="'+n+'"]');r.parent().clone().prependTo(o.find(".language-switch-dropdown")),r.parent().remove();new Popup({trigger:".current-language",element:".language-switch-dropdown",delegateNode:".external-language-switch",delay:20,showAlign:{pos:"bottom",offset:t},events:{"click a":function(e){e.preventDefault();var t=$(e.currentTarget),o=window.location.href;o=mod.changeURLArg(o,"lang",t.attr("data-by")),window.location.href=o}}})},mod.removeI18nPopup=function(){0<$(".external-language-switch .language-switch").length&&$(".external-language-switch .language-switch").remove()},mod.hideI18nPopup=function(){0<$(".external-language-switch .language-switch").length&&$(".external-language-switch .language-switch").hide()},mod.showI18nPopup=function(){0<$(".external-language-switch .language-switch").length&&$(".external-language-switch .language-switch").show()},mod.is_sso_enterprise=!1,1==$("#is_sso_enterprise").val()&&(mod.is_sso_enterprise=!0),mod.is_account_synchronize_enabled=!1,1==$("#is_account_synchronize_enabled").val()&&(mod.is_account_synchronize_enabled=!0),mod.special_user_guide_disabled=!1,1==$("#special_user_guide_disabled").val()&&(mod.special_user_guide_disabled=!0),mod.external_collab_url_prefix=$("#external_collab_url_prefix").val(),mod.share_with_colleagues_disallowed=!0,$("#share_with_colleagues_disallowed")[0]&&1==$("#share_with_colleagues_disallowed").val()&&(mod.share_with_colleagues_disallowed=!1),mod.share_link_view_others=!1,1==$("#share_link_view_others").val()&&(mod.share_link_view_others=!0),mod.watermark_enabled=!1,1==$("#watermark_enabled").val()&&(mod.watermark_enabled=!0),mod.is_custom_product=!1,1==$("#is_custom_product").val()&&(mod.is_custom_product=!0),mod.international_mobile_phone=!1,1==$("#internationalMobilePhone").val()&&(mod.international_mobile_phone=!0),mod.prohibition_identification_phone=!1,1==$("#prohibition_identification_phone").val()&&(mod.prohibition_identification_phone=!0),mod.user_guide_questions_for_2016=!1,1==$("#user_guide_questions_for_2016").val()&&(mod.user_guide_questions_for_2016=!0),mod.user_guide_for_v2_invitation=!1,1==$("#user_guide_for_v2_invitation").val()&&(mod.user_guide_for_v2_invitation=!0),mod.user_guide_for_v2_invitation_new=!1,1==$("#user_guide_for_v2_invitation_new").val()&&(mod.user_guide_for_v2_invitation_new=!0),mod.is_department_hidden=!1,1==$("#is_department_hidden").val()&&(mod.is_department_hidden=!0),mod.is_personal_space_closed=!1,1==$("#is_personal_space_closed").val()&&(mod.is_personal_space_closed=!0);var v2_login_error_code=["need_to_upgrade_to_v2_for_admin","need_to_upgrade_to_v2_for_personal_user","need_to_upgrade_to_v2","need_to_upgrade_to_v2_sync_for_admin","need_to_upgrade_to_v2_sync_for_personal_user","need_to_upgrade_to_v2_sync","already_upgraded_to_v2_for_personal_user","already_upgraded_to_v2","already_upgraded_to_v2_sync_for_personal_user","already_upgraded_to_v2_sync"];function verification_login_version(e){for(var t=0;t<v2_login_error_code.length;t++)if(v2_login_error_code[t]===e)return!0;return!1}mod.verification_login_version=verification_login_version,module.exports=mod});

if(__fad_dynamic_require_hash_map_extend__===undefined){var __fad_dynamic_require_hash_map_extend__=function(a,b){for(var k in b){a[k]=b[k]}}}
var __fad_dynamic_require_hash_map__ = __fad_dynamic_require_hash_map__ || {};
__fad_dynamic_require_hash_map_extend__(__fad_dynamic_require_hash_map__, {
	"images/Jinko/logo.en.png": "images/Jinko/logo.en_24bc5ec.png",
	"images/Jinko/logo.zh-CN.png": "images/Jinko/logo.zh-CN_f45b0ff.png",
	"images/Jinko/logo.zh-TW.png": "images/Jinko/logo.zh-TW_92b7c16.png",
	"images/bucea/logo.en.png": "images/bucea/logo.en_035f4aa.png",
	"images/bucea/logo.zh-CN.png": "images/bucea/logo.zh-CN_035f4aa.png",
	"images/bucea/logo.zh-TW.png": "images/bucea/logo.zh-TW_035f4aa.png",
	"images/cerschool/client-logo.en.png": "images/cerschool/client-logo.en_3bbe810.png",
	"images/cerschool/client-logo.zh-CN.png": "images/cerschool/client-logo.zh-CN_0bf3dce.png",
	"images/cerschool/client-logo.zh-TW.png": "images/cerschool/client-logo.zh-TW_855e1d7.png",
	"images/cerschool/logo.en.png": "images/cerschool/logo.en_9519298.png",
	"images/cerschool/logo.zh-CN.png": "images/cerschool/logo.zh-CN_efb6d23.png",
	"images/cerschool/logo.zh-TW.png": "images/cerschool/logo.zh-TW_3fae14e.png",
	"images/client-logo.en.png": "images/client-logo.en_d4cd3cc.png",
	"images/client-logo.zh-CN.png": "images/client-logo.zh-CN_7440eeb.png",
	"images/client-logo.zh-TW.png": "images/client-logo.zh-TW_b3f3a74.png",
	"images/cnegroup/logo.en.png": "images/cnegroup/logo.en_3a38e34.png",
	"images/cnegroup/logo.zh-CN.png": "images/cnegroup/logo.zh-CN_3a38e34.png",
	"images/cnegroup/logo.zh-TW.png": "images/cnegroup/logo.zh-TW_3a38e34.png",
	"images/fangcloud/logo.en.png": "images/fangcloud/logo.en_5c7754c.png",
	"images/fangcloud/logo.zh-CN.png": "images/fangcloud/logo.zh-CN_1e91c1b.png",
	"images/fangcloud/logo.zh-TW.png": "images/fangcloud/logo.zh-TW_8f45588.png",
	"images/guide/logo.en.png": "images/guide/logo.en_69fb18f.png",
	"images/home/logo.en.png": "images/home/logo.en_0832dd0.png",
	"images/home/logo.zh-CN.png": "images/home/logo.zh-CN_e4cd211.png",
	"images/home/logo.zh-TW.png": "images/home/logo.zh-TW_47cfb67.png",
	"images/logo.en.png": "images/logo.en_5c7754c.png",
	"images/logo.zh-CN.png": "images/logo.zh-CN_1e91c1b.png",
	"images/logo.zh-TW.png": "images/logo.zh-TW_8f45588.png",
	"images/longfor/logo.en.png": "images/longfor/logo.en_b4e77ac.png",
	"images/longfor/logo.zh-CN.png": "images/longfor/logo.zh-CN_b4e77ac.png",
	"images/longfor/logo.zh-TW.png": "images/longfor/logo.zh-TW_b4e77ac.png",
	"images/njcit/logo.en.png": "images/njcit/logo.en_de32870.png",
	"images/njcit/logo.zh-CN.png": "images/njcit/logo.zh-CN_de32870.png",
	"images/njcit/logo.zh-TW.png": "images/njcit/logo.zh-TW_de32870.png",
	"images/pousheng/logo.en.png": "images/pousheng/logo.en_8069e9e.png",
	"images/pousheng/logo.zh-CN.png": "images/pousheng/logo.zh-CN_8069e9e.png",
	"images/pousheng/logo.zh-TW.png": "images/pousheng/logo.zh-TW_8069e9e.png",
	"images/scuec/logo.en.png": "images/scuec/logo.en_ff939d4.png",
	"images/scuec/logo.zh-CN.png": "images/scuec/logo.zh-CN_70318bc.png",
	"images/scuec/logo.zh-TW.png": "images/scuec/logo.zh-TW_30a4680.png",
	"images/trcloud/logo.en.png": "images/trcloud/logo.en_e701661.png",
	"images/trcloud/logo.zh-CN.png": "images/trcloud/logo.zh-CN_e701661.png",
	"images/trcloud/logo.zh-TW.png": "images/trcloud/logo.zh-TW_e701661.png",
	"images/weiwork/logo.en.png": "images/weiwork/logo.en_f37ec16.png",
	"images/weiwork/logo.zh-CN.png": "images/weiwork/logo.zh-CN_f37ec16.png",
	"images/weiwork/logo.zh-TW.png": "images/weiwork/logo.zh-TW_f37ec16.png",
	"images/zfc/logo.en.png": "images/zfc/logo.en_05591a8.png",
	"images/zfc/logo.zh-CN.png": "images/zfc/logo.zh-CN_05591a8.png",
	"images/zfc/logo.zh-TW.png": "images/zfc/logo.zh-TW_05591a8.png",
	"images/zju/logo.en.png": "images/zju/logo.en_49cb693.png",
	"images/zju/logo.zh-CN.png": "images/zju/logo.zh-CN_e216529.png",
	"images/zju/logo.zh-TW.png": "images/zju/logo.zh-TW_8032717.png",
	"images/zsyp/logo.en.png": "images/zsyp/logo.en_9053aad.png",
	"images/zsyp/logo.zh-CN.png": "images/zsyp/logo.zh-CN_747f319.png",
	"images/zsyp/logo.zh-TW.png": "images/zsyp/logo.zh-TW_da04068.png",
	"images/Jinko/qrcode-downloads.png": "images/Jinko/qrcode-downloads_f88a492.png",
	"images/bucea/qrcode-downloads.png": "images/bucea/qrcode-downloads_9373ea4.png",
	"images/cerschool/qrcode-downloads.png": "images/cerschool/qrcode-downloads_6561cc4.png",
	"images/cnegroup/qrcode-downloads.png": "images/cnegroup/qrcode-downloads_b09be7d.png",
	"images/fangcloud/qrcode-downloads.png": "images/fangcloud/qrcode-downloads_b09be7d.png",
	"images/longfor/qrcode-downloads.png": "images/longfor/qrcode-downloads_b09be7d.png",
	"images/njcit/qrcode-downloads.png": "images/njcit/qrcode-downloads_09d6e2d.png",
	"images/pousheng/qrcode-downloads.png": "images/pousheng/qrcode-downloads_4133a93.png",
	"images/qrcode-downloads.png": "images/qrcode-downloads_b09be7d.png",
	"images/trcloud/qrcode-downloads.png": "images/trcloud/qrcode-downloads_1350fb4.png",
	"images/zfc/qrcode-downloads.png": "images/zfc/qrcode-downloads_cfa2c8f.png",
	"images/zju/qrcode-downloads.png": "images/zju/qrcode-downloads_504cb4e.png",
	"images/zsyp/qrcode-downloads.png": "images/zsyp/qrcode-downloads_43e0714.png"
})