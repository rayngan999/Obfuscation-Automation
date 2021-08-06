(function($,wpreview,Cookies){"use strict";wpreview.initNotificationBar=function(){if($('#hello-bar').length){$('body').addClass('has-hello-bar')}
$('#hello-bar.hello-bar--top:not(.hello-bar--floating)').prependTo('body');if($('#hello-bar.hello-bar--top.hello-bar--floating').length){$('body').css({paddingTop:$('#hello-bar').height()+10})}};wpreview.getAnimateDuration=function(animation){if(!animation){return 0}
switch(animation){case 'flipOutX':case 'flipOutY':case 'bounceIn':case 'bounceOut':return 750;case 'hinge':return 2000}
return 1000};wpreview.openPopup=function(popup){if(!popup){popup='#wp-review-popup'}
$.magnificPopup.open({items:{src:popup,type:'inline'},removalDelay:wpreview.getAnimateDuration(wpreview.popup.animation_out),callbacks:{beforeOpen:function(){this.st.mainClass='animated '+wpreview.popup.animation_in},beforeClose:function(){var $wrap=this.wrap,$bg=$wrap.prev(),$mfp=$wrap.add($bg);$mfp.removeClass(wpreview.popup.animation_in).addClass(wpreview.popup.animation_out)}}})};wpreview.initPopup=function(){if(!$('#wp-review-popup').length){return}
var popupShown=!1,expiration=parseInt(wpreview.popup.expiration),cookieName=wpreview.popup.cookie_name||'wpr-popup';function canShowPopup(){if(popupShown){return!1}
if(expiration&&Cookies.get(cookieName)){return!1}
if(wpreview.popup.screen_size_check&&$(window).width()<=parseInt(wpreview.popup.screen_width)){return!1}
return!0}
function showPopup(){wpreview.openPopup('#wp-review-popup');popupShown=!0;if(expiration){Cookies.set(cookieName,1,{expires:expiration})}}
if(wpreview.popup.show_on_load){var delay=parseInt(wpreview.popup.delay)*1000;setTimeout(function(){if(!canShowPopup()){return}
showPopup()},delay)}
if(wpreview.popup.show_on_reach_bottom&&$('#wp-review-content-bottom').length){var offsetTop=$('#wp-review-content-bottom').offset().top;$(window).on('scroll',function(){if(!canShowPopup()){return}
var scrollTop=$(window).scrollTop();if(scrollTop>=offsetTop){showPopup()}})}
if(wpreview.popup.exit_intent){$(document).exitIntent(function(){if(!canShowPopup()){return}
showPopup()})}};wpreview.loadReviews=function($el,options){$el.html('<div class="loading"></div>');function onSuccess(response){$el.removeClass('js-reviews-placeholder loading').html(response)};function onError(response){console.log(response)};wp.ajax.send('wp-review-load-reviews',{success:onSuccess,error:onError,data:options})};wpreview.ajaxReviewsLoading=function(){$('.js-reviews-placeholder').each(function(){var options=$(this).attr('data-options')?JSON.parse($(this).attr('data-options')):{};wpreview.loadReviews($(this),options)});$(document).on('click','.reviews-pagination a',function(ev){ev.preventDefault();var $pagination,$reviews,options,page;$pagination=$(this).closest('.reviews-pagination');$reviews=$pagination.closest('.wp-reviews-list');options=$reviews.attr('data-options')?JSON.parse($reviews.attr('data-options')):{};page=$pagination.attr('data-page')?parseInt($pagination.attr('data-page')):1;options.page=$(this).hasClass('previous')?(page-1):(page+1);options.no_cache=!0;wpreview.loadReviews($reviews,options)})};wpreview.featuresRating=function($wrapper){var data=$wrapper.data();if(!data.rating){return}
data.action='wpr-visitor-features-rating';$.ajax({beforeSend:function(){$wrapper.addClass('wp-review-loading')},data:data,type:'post',url:wpreview.ajaxurl,success:function(response){$wrapper.removeClass('wp-review-loading');if(typeof response!='object'){response=JSON.parse(response)}
if('ok'!=response.status){console.error(response);return}
response.html=response.html.replace('delay-animation','');$wrapper.closest('#review').replaceWith(response.html);Cookies.set('wpr_visitor_has_reviewed_post_'+data.post_id,1,{expires:315360000000})},error:function(response){$wrapper.removeClass('wp-review-loading');console.log(response)}})};wpreview.initResponsiveTable=function(){if('function'!==typeof $.fn.stacktable){return}
$('.comparison-table').stacktable()};wpreview.addVerifiedPurchase=function(){$('.wp_review_comment.verified cite, .wp_review_comment.verified .fn').after('<em> '+wpreview.verifiedPurchase+'</em>')};$(document).ready(function(){wpreview.initNotificationBar();wpreview.initPopup();wpreview.ajaxReviewsLoading();wpreview.initResponsiveTable();wpreview.addVerifiedPurchase();$('[data-wp-review-tabs] .tab-title:first-child').addClass('active');$('[data-wp-review-tabs] .tab-content:first-of-type').fadeIn();$('[data-wp-review-tabs] .tab-title button').on('click',function(ev){ev.preventDefault();var $btn,$tabs,href;$btn=$(this);$tabs=$btn.closest('[data-wp-review-tabs]');href=$btn.attr('data-href');$tabs.find('.tab-title').removeClass('active');$btn.closest('.tab-title').addClass('active');$tabs.find('.tab-content').hide();$tabs.find(href).fadeIn()});$('#commentform').on('submit',function(ev){$(this).find('.wpr-error').remove();if($(this).hasClass('wpr-uncompleted-rating')){$(this).append('<div class="wpr-error">'+wpreview.rateAllFeatures+'</div>');ev.preventDefault()}})})})(jQuery,window.wpreview||{},Cookies);jQuery(document).ready(function($){$('.wp-review-comment-field.allowed-to-rate a').on('click',function(){var $this=$(this),$elem=$this.closest('.wp-review-comment-field');if($elem.hasClass('allowed-to-rate')){$elem.removeClass('has-not-rated-yet');$elem.find('.review-result').css('width',parseInt($this.data('input-value'))*20+'%');$elem.find('.wp_review_comment_rating').val($this.data('input-value'))}});if($('.review-wrapper').length){$('.review-wrapper').wpr_appear().on('wpr_appear',function(event){var $this=$(this);if($this.hasClass('delay-animation')){$this.removeClass('delay-animation');if($this.find('.wp-review-circle-rating').length){$this.find('.wp-review-circle-rating').each(function(index,el){if($(el).closest('.wp-review-user-rating').length)
return!0;var initial_value=$(el).data('initial_value');$({value:0}).animate({value:initial_value},{duration:2000,easing:'swing',step:function(){$(el).val(Math.floor(this.value)).trigger('change')},complete:function(){$(el).val(initial_value).trigger('change')}})})}}}).on('wpr_disappear',function(event){var $this=$(this)});$(window).load(function(){$.wpr_force_appear()})}
var $commentFeedback=$('.wp-review-feedback');$commentFeedback.on('click','a',function(e){var $this=$(this);e.preventDefault();if($this.hasClass('voted')||$this.siblings().hasClass('voted')||$commentFeedback.hasClass('processing'))return;$.ajax({type:'POST',url:wpreview.ajaxurl,beforeSend:function(){$commentFeedback.addClass('processing')},data:{action:'mts_review_feedback',isHelpful:$this.data('value'),commentId:$this.data('comment-id')},success:function(data){$this.closest('.wp-review-feedback').find('a').removeClass('voted');$this.addClass('voted').find('.feedback-count').text('('+data+')')},error:function(jqXHR){alert(jqXHR.responseText)},complete:function(){$commentFeedback.removeClass('processing')}})});if($('#wp-review-comment-title-field').length){$('#wp-review-comment-title-field').closest('form').addClass('wp-review-comment-form')}
$(document).on('click','.wp-review-comment-img-field a',function(e){e.preventDefault();$(this).parents('.wp-review-comment-form-photo').find('.hide').removeClass('hide');$(this).parent().addClass('hide').find('input').val('');return!1});$(document).on('change','.wp-review-comment-attachment-source .input-file',function(e){e.preventDefault();var $this=$(this);if($this.parents('.wp-review-comment-form-photo').find('#comment_image_spinner').length!=0){return}
$this.parents('form').find('input[type="submit"]').attr('disabled','disabled');$('<i id="comment_image_spinner" class="fa fa-spinner fa-spin"></i>').insertAfter($this.parent('p'));var $fd=new FormData(),files=$(this)[0].files[0];$fd.append("files[]",files);$fd.append('action','wpr-upload-comment-image');$fd.append('_ajax_nonce',wpreview.commentImageUploadNonce);$.ajax({type:'POST',url:wpreview.ajaxurl,processData:!1,contentType:!1,data:$fd,success:function(response){if(response){$this.next('input').val(response)}else{alert('Something went wrong. Please upload different image.')}
$this.parents('form').find('input[type="submit"]').removeAttr('disabled');$this.parents('.wp-review-comment-form-photo').find('#comment_image_spinner').remove()},error:function(){alert('Something went wrong. Please upload different image.');$this.parents('form').find('input[type="submit"]').removeAttr('disabled');$this.parents('.wp-review-comment-form-photo').find('#comment_image_spinner').remove()}});return!1})});function wp_review_rate($elem){var is_comment_rating=($elem.is('.wp-review-comment-rating-star')||!!$elem.closest('.wp-review-comment-rating-star').length);if(is_comment_rating){return''}
var rating=$elem.find('.wp-review-user-rating-val').val();var postId=$elem.find('.wp-review-user-rating-postid').val();var token=$elem.find('.wp-review-user-rating-nonce').val();var $target=$elem;if(!$target.is('.wp-review-user-rating'))
$target=$elem.closest('.wp-review-user-rating');if(rating==0){return''}
jQuery.ajax({beforeSend:function(){$target.addClass('wp-review-loading')},data:{action:'wp_review_rate',post_id:postId,nonce:token,review:rating},type:'post',dataType:'json',url:wpreview.ajaxurl,success:function(response){$target.removeClass('wp-review-loading');if(typeof response.html!=='undefined'&&response.html!=''){$target.empty().append(response.html).addClass('has-rated').removeClass('wp-review-user-rating')}
if(typeof response.rating_total!=='undefined'&&response.rating_total!=''){$target.parent().find('.wp-review-user-rating-total').text(response.rating_total)}
if(typeof response.rating_count!=='undefined'&&response.rating_count!=''){$target.parent().find('.wp-review-user-rating-counter').text(response.rating_count)}
if(response.awaiting_moderation!=undefined){$target.parent().find('.user-total-wrapper .awaiting-response-wrapper').text(response.awaiting_moderation)}
Cookies.set('wpr_visitor_has_reviewed_post_'+postId,1,{expires:315360000000})}})}