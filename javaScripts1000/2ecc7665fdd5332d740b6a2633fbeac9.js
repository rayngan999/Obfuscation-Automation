!function(e){var t;t=e(".email-container"),e("label[for]",t).each((function(n,a){var i=e(this).attr("for"),s=i+n;e("#"+i,t).val("").attr("id",s).closest(".f-input").removeClass("f-input--changed"),e(this).attr("for",s)}));var n=!1;e(document).on("click",".c-emailOptin button, .btn-emailsignup",(function(t){t.preventDefault();var a=e(this),i=e(this).closest("form"),o=e(this).closest(".c-emailOptin,.email-container,.s-askAnExpert__form"),c=i.attr("action");if(i.valid()){KCMS.Forms.OnSubmit(i,(function(){if(!n){n=!0,function(t){var n=t.data("tnurl");if(n){var a="";e.ajax({url:n,type:"post",async:!1,success:function(e){a=e}}),e("input[name=__RequestVerificationToken]",t).val(a)}}(i);var t=i.serializeArray();t.push({name:"FormType",value:i.attr("type")}),e.post(c,t).done((function(t){if(n=!1,t&&1==t.succeed){if(o.length>0)i.prev(".consent-section").add(i.next(".consent-section")).addClass("hidden"),e(".message",o).empty().append("<p>"+t.message+"</p>");else{var c=i.closest(".c-dialog--popup");e(".message",c).empty().append("<p>"+t.message+"</p>"),s(c.attr("id"))}window.Rexus&&window.Rexus.collapser&&window.Rexus.collapser.collapse(i.prop("id")),KCMS.Tracking.sendEventTrackingData(a),fbq&&fbq("track","CompleteRegistration")}t&&0==t.succeed&&(n=!1,t.message&&t.message.trim()&&alert(t.message)),KCMS.Forms.RevertToPlainCaptcha(i,t&&t.useplain,t.message)})).fail((function(){n=!1,KCMS.Forms.RevertToPlainCaptcha(i,!1)}))}}))}})),e(document).on("click",".s-footer__email .btn-signup-now",(function(){var t=e("#"+e(this).data("target"));t.addClass("c-dialog--active"),t.data("shown",!0)}));var a="email-signup-modal",i=null;function s(e){var t=("; "+document.cookie).split("; nd_esms=");if(2===t.length){var n=t.pop().split(";")[0].split(";");n.indexOf(e)<0&&(n.push(e),document.cookie="nd_esms="+n.join(";")+";path=/")}else document.cookie="nd_esms="+e+";path=/"}function o(){if(!(!function(){if(KCMS.CMP&&KCMS.CMP.isAvailable())return KCMS.CMP.getConsent().marketing;return!0}()||i.data("shown")||KCMS&&KCMS.GatedContent&&KCMS.GatedContent.hasGatedContent())){var e=!1,t=("; "+document.cookie).split("; nd_esms=");if(2===t.length)e=t.pop().split(";")[0].split(";").indexOf(a)>=0;e||i.addClass("c-dialog--active"),i.data("shown",!0)}}e(document).on("click","#"+a+" .c-dialog__close",(function(){var t,n;(n=e("#"+(t=(t=a)||a))).length>0&&(n.data("shown",!0),n.removeClass("c-dialog--active"),setTimeout((function(){var t=e("form",n);t.removeAttr("style"),t[0].reset(),e(".message",t.closest(".c-dialog--popup")).removeAttr("style").empty(),e(".f-input--invalid,.f-input--changed,.f-input--valid",n).removeClass("f-input--invalid").removeClass("f-input--changed").removeClass("f-input--valid")}),1e3),s(t))})),e(document).ready((function(){(i=e("#"+a)).appendTo("body"),setTimeout((function(){e(window).on("scroll",o)}),500),setTimeout((function(){KCMS.EventBus.subscribe("/cmp/changed",(function(e){e&&e.marketing&&o()}))}),5e3),setTimeout(o,5e3)}))}(jQuery);