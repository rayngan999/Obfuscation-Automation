(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{238:function(e,t,n){"use strict";n.r(t);var a=n(5),o=n.n(a),s=n(4),r=n(2),i=n.n(r),u=n(771),c=n(1),l=n.n(c),d=n(767),p=n(68),h=function(e){var t,n,a=(t=e,n={},[].forEach.call(t.attributes,(function(e){if(/^data-/.test(e.name)){var t=e.name.replace("data-","").replace(/-(.)/g,(function(e,t){return t.toUpperCase()}));n[t]=e.value}})),n),r=i.a.get(a,"hashId",""),c=i.a.get(a,"page","");if(window.karma=window.karma||{},window.karma.cmd=window.karma.cmd||[],"unsubscribe"===c){var h=p.a.data(),f={contentIsPost:h.contentIsPost,contentShownOnPlatform:h.contentShownOnPlatform,contentSyndicated:h.contentSyndicated,contentType:"other",search:h.search,title:h.title,meredithBrand:h.meredithBrand,registrationsource:"000",userDecisionArea:"Subscribe",metric9:"1",category:"auth0"},m=function(){window.location.href="/?banner=newsletterchg"},b=function(e){var t=l()("input[name=unsubscribe-survey-modal-answer]:checked"),n=l()(".comment").val()?l()(".comment").val():"",a={answers:[]};["Newsletter ID","Hash ID","Survey Question","Leave a Comment"].forEach((function(e){var o={questionId:null,answerIds:[]};switch(e){case"Newsletter ID":if(o.questionId="Newsletter ID","unsubscribe"===c){var s=l()("#unsubscribedId")?l()("#unsubscribedId").val():"";o.answerIds.push(s)}else{Array.from(document.querySelectorAll(".checkbox")).forEach((function(e){"newsletter"!==e.name||e.checked||o.answerIds.push(e.value)}))}break;case"Hash ID":o.questionId="Hash ID",o.answerIds.push(r);break;case"Survey Question":o.questionId=l()(".unsubscribe-survey-modal-question")[0].innerText,t.length&&o.answerIds.push(t[0].value);break;case"Leave a Comment":o.questionId="Leave a Comment",o.answerIds.push(n)}a.answers.push(o)})),function(e,t){l.a.ajax({url:Object(d.a)("/user-proxy/unsubscribe-survey"),type:"POST",data:e,success:t})}(a,e)},v=function(){var e=new u.a(l()(".unsubscribe-survey-modal"),"unsubscribe-survey-modal");setTimeout((function(){e.open(),o()(s.o).subscribe((function(e,t){0===t.closest(".unsubscribe-survey-modal").length||t[0].classList.contains("close-modal-link")?(e.preventDefault(),m()):t[0].classList.contains("submit")&&(e.preventDefault(),b(m))})),l()(".unsubscribe-survey-modal button.close").on("click",(function(e){e.preventDefault(),m()}))}),0)};l()("#newsletterUnsubscribeForm").on("submit",(function(e){e.preventDefault();var t=l()('input[name="newsletterId"]').val(),n=document.querySelectorAll(".checkbox"),a=Array.from(n).filter((function(e){return"objector"===e.name})).map((function(e){return"objector"===e.name&&e.checked?"".concat(e.value,":in"):"objector"===e.name&&!e.checked&&"".concat(e.value,":out")})).filter((function(e){return!1!==e})).join(",");!function(e,t){l.a.ajax({url:Object(d.a)("/element-api/content-proxy/updateNewslettersByHashId"),type:"POST",data:e,complete:t})}({hashId:r,optout:t,objectors:a},v),f.label=t,f.userDecisionArea="Unsubscribe",p.a.track("newsletter unsubscribe page",f)})),l()(".newsletter-management .unsubscribe").on("click",(function(e){e.preventDefault(),l()("#newsletterUnsubscribeForm").submit()})),l()(".newsletter-management .cancel-page").on("click",(function(e){e.preventDefault(),p.a.track("cancel",p.a.data()),window.location.href="/"}))}};t.default=function(){var e=document.getElementById("newsletterManagementConfig");e&&h(e)}},268:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n.n(a),s=n(1),r=n.n(s),i=n(5),u=n.n(i),c=n(4),l=n(767);t.default=function(){r()(document).ready((function(){var e=new URLSearchParams(window.location.search).get("entry");if(e&&o.a.isInteger(o.a.toNumber(e))){var t=Object(l.a)("/element-api/content-proxy/sweepstakes-confirmation");r.a.ajax({url:t,type:"GET",data:{entry:e},cache:!1,success:function(e,t,n){if(200===n.status){var a=e.sweepstakesEntry;a.expired?u()(c.Mb).broadcast("We're sorry, ".concat(a.title,' has ended. See <a href="').concat(a.rules_url,'">Official Rules</a>.'),".sweepstakes"):(r()(".sweepstakesEntry__confirmation").html(e.html).addClass("rendered"),u()(c.zb).broadcast())}document.title="Sweepstakes Entry Confirmed"}})}}))}},276:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),s=n(2),r=n.n(s),i=n(4),u=n(5),c=n.n(u),l=n(767);function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var p=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$context=t,this.$photoUploadComponent=t.find(".component.ugc-photo-upload"),this.$alert=t.find(".alert-banner"),this.$uploadedImg=t.find(".js--uploadedImage"),this.$fileInput=t.find(".js--fileInput"),this.$photoMaxUploadSize=this.$fileInput.data("photo-max-upload-size"),this.$favoriteModalLink=o()(".shareicon-favorite-link"),this.contentId=this.$favoriteModalLink.data("content-id"),this.photoUpload={photoId:null,photoUrl:null,step:{getPhotoId:"get_photo_id",uploadPhoto:"photo_upload"}}}var t,n,a;return t=e,(n=[{key:"readUrl",value:function(){var e=this;if(this.$fileInput[0].files&&this.$fileInput[0].files[0]){var t=new FileReader;t.onload=function(t){r.a.set(e.$uploadedImg,"[0].style.backgroundImage","url(".concat(t.target.result,")"))},t.readAsDataURL(this.$fileInput[0].files[0])}}},{key:"showError",value:function(e){this.$alert.removeClass("hidden"),this.$alert.find(".alert-text").text(e)}},{key:"hideError",value:function(){this.$alert.addClass("hidden"),this.$alert.find(".alert-text").text("")}},{key:"photoUploadStatus",value:function(e){e?this.$photoUploadComponent.addClass("uploaded"):this.$photoUploadComponent.removeClass("uploaded")}},{key:"uploadPhoto",value:function(e){var t=this,n=e,a=Object(l.a)("/element-api/content-proxy/photo-upload");o.a.post(a,n,(function(n,a){"success"===a&&(t.hideError(),e.type===t.photoUpload.step.getPhotoId&&(r.a.get(n,"photoId")&&(t.photoUpload.photoId=r.a.get(n,"photoId"),t.photoUpload.photoUrl=r.a.get(n,"imageDestinationUrl")),c()(i.kc).broadcast()),e.type===t.photoUpload.step.uploadPhoto&&t.photoUploadStatus(!0))})).fail((function(e){e.responseJSON&&e.responseJSON.message.includes("dimensions")?(t.showError(e.responseJSON.message),r.a.set(t.$uploadedImg,"[0].style.backgroundImage","")):t.showError("Error submitting. Please try again."),t.photoUploadStatus(!1)}))}},{key:"photoMetaData",value:function(e){return{type:e,filename:this.$fileInput[0].value.replace(/.*[/\\]/,""),contentId:this.contentId}}},{key:"photoUploadData",value:function(e){return{type:e,photoId:this.photoUpload.photoId,photoData:r.a.get(this.$uploadedImg,"[0].style.backgroundImage"),contentId:this.contentId}}},{key:"events",value:function(){var e=this;c()(i.jc).subscribe((function(){var t=e.photoMetaData(e.photoUpload.step.getPhotoId);e.uploadPhoto(t)})),c()(i.kc).subscribe((function(){var t=e.photoUploadData(e.photoUpload.step.uploadPhoto);e.uploadPhoto(t)})),this.$fileInput.on("change",(function(){e.$fileInput[0].value&&(e.$fileInput[0].files[0].size>e.$photoMaxUploadSize?e.showError("Maximum photo size is ".concat(Math.round(e.$photoMaxUploadSize/1024/1024)," MB. Please submit a smaller photo.")):(e.readUrl(e.$fileInput[0],e.$uploadedImg),c()(i.jc).broadcast()))}))}},{key:"init",value:function(){this.events()}}])&&d(t.prototype,n),a&&d(t,a),e}();t.default=function(){o()(".component.ugc-upload-with-photo").each((function(){new p(o()(this)).init()}))}},767:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(2),o=n.n(a),s=n(1),r=n.n(s);function i(e){return r()(document.body).data("add-slash")&&!o.a.endsWith(e,"/")?"".concat(e,"/"):e}}}]);
//# sourceMappingURL=20-20.js.map