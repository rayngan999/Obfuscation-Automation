/*! fangcloud - v1.0.1 */

define("modules/guest_base_ffb145a",["jquery","underscore","handlebars","egeui","./common_efe2ae4","i18n","fingerprint2","../templates/base_7107372"],function(e,r,o){var n=e("jquery"),i=e("underscore"),t=(e("handlebars"),e("egeui")),a=e("./common_efe2ae4"),s=e("../templates/base_7107372"),l=t.Dialog,c=i.extend({},a);c.ali_biz_id=n("#ali_biz_id").val(),c.appDownloadDialog=function(){new l({closeTpl:'<i class="icon icon-close" title="'+c.getI18n("base.close")+'"></i>',content:s["base/appdownload"]({ios:c.ios_link,android:c.android_link,sync_windows:c.sync_windows_link,sync_mac:c.sync_mac_link,enterprise_default_name:c.enterprise_default_name||c.getI18n("base.fangCloud"),qrcode_image:c.qrcode_image}),mask:!0}).after("render",function(){this.$(".download-sync a").click(function(e){e.preventDefault(),c.downloadURL(n(this).attr("href"))})}).after("hide",function(e){this.destroy()}).show()},c.registerDemo=function(e,o){c.ajax({url:"/auth/collect_info",type:"json",data:e,success:function(e){if(e.success)n.cookie("demo_user_remind",(new Date).getTime(),{path:"/",expires:1}),c.ajax({url:"/auth/login",type:"json",data:{identifier:e.user.login,is_from_demo_login:!0},success:function(e){if(e.success)n("#redirect_url")[0]?window.location.href=n("#redirect_url").val():window.location.href=e.redirect;else if(e.errors){var r;e.errors.validation_errors?r=e.errors.validation_errors[0]:e.errors.external_errors&&(r=e.errors.external_errors[0]),o(r)}},accept_errors:["otp_required","validation_errors"]});else if(e.errors){var r;e.errors.validation_errors?r=e.errors.validation_errors[0]:e.errors.external_errors&&(r=e.errors.external_errors[0]),o(r)}},accept_errors:["validation_errors","external_errors"]})},c.registerDemoUserDialog=function(){var e=new l({closeTpl:'<i class="icon icon-close" title="'+c.getI18n("base.close")+'"></i>',content:s["base/register_demo_user"](),mask:!0,events:{"focus .input":function(e){n(e.currentTarget).removeClass("error")},"click .register":function(){var r=this,e={user_name:n.trim(this.$("#user_name").val()),phone_number:n.trim(this.$("#phone_number").val())};for(var o in e)if(""===e[o])return this.$("#"+o).addClass("error"),c.showSubmitError(c.getI18n("common.guest.enter",n("#"+o).attr("data-name")),r.$(".register")),!1;c.registerDemo(e,function(e){c.showSubmitError(e.error_tr_msg,r.$(".register")),e.field&&r.$("#"+e.field).addClass("error")})}}}).after("hide","destroy").show();return!c.h5&&e.$("input[placeholder]").placeholder(),e},c.init=function(){/action=register_demo/.test(window.location.search)&&c.registerDemoUserDialog(),0<n(".register-demo").length&&n(".register-demo").on("click",function(e){e.preventDefault();var r=n("#base_url").val().replace(/(\/)$/,"");r!==(window.location.origin||window.location.protocol+"//"+window.location.host)?window.location.href=r+window.location.pathname+"?action=register_demo":c.registerDemoUserDialog()}),0<n(".switch_appdownload").length&&n(".switch_appdownload").on("click",function(e){e.preventDefault(),c.appDownloadDialog()}),n(document).on("keydown","button.pure-button",function(e){13===e.which?e.preventDefault():32===e.which&&n(this).blur()}),n(document).on("keydown","a",function(e){13===e.which&&e.preventDefault()})},c.init(),o.exports=c});