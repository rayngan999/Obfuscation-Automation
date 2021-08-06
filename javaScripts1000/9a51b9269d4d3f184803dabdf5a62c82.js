jQuery.noConflict();jQuery(function($){var enLength=$('#pma-root-node').length;if(enLength>0){var alertParent=$('#pma-root-node').parent();var alertParentTitleLength=$(alertParent).find('.section-title').length;if(0==alertParentTitleLength){$(alertParent).addClass('en-alert-section');}}
$('.social-share .share-fb').on('click',function(){sendSocialEvent(petaGA_SNsource_Facebook,'Header Share',window.location.href);});$('.social-share .share-tw').on('click',function(){sendSocialEvent(petaGA_SNsource_Twitter,'Header Share',window.location.href);});$('.footer-social-share .share-email').on('click',function(){sendSocialEvent(petaGA_SNsource_email,'Footer Share',window.location.href);});});(function($){function isOnScreen(elem){if(elem.length==0){return;}
var $window=$(window)
var viewport_top=$window.scrollTop()
var viewport_height=$window.height()
var viewport_bottom=viewport_top+viewport_height
var $elem=$(elem)
var top=$elem.offset().top
var height=$elem.height()
var bottom=top+height
return(top>=viewport_top&&top<viewport_bottom)||(bottom>viewport_top&&bottom<=viewport_bottom)||(height>viewport_height&&top<=viewport_top&&bottom>=viewport_bottom)}
$(document).ready(function(){function targetElement(selector){window.addEventListener('scroll',function(e){if(isOnScreen($(selector))){$('.take-action').addClass('take-action--hide');}else{$('.take-action').removeClass('take-action--hide');}});}
if($('#pma_form').length){targetElement('#pma_form');}else{targetElement('#footer');}});$('#pma_form').submit(function(){$('.take-action').remove();})
$('.qg-img').each(function(){var img_width=$(this).data('defwidth'),img_height=$(this).data('defheight'),image_aspect_ratio=(img_height/img_width)*100;$(this).find('img').wrap(`<div class="qg-img-wrap"/>`);$(this).find('.qg-img-wrap').css('padding-top',image_aspect_ratio+'%');});$('.qg-overlay > .qg-title').siblings('.icon-circle').remove();})(jQuery);jQuery(document).ready(function($){socialToggle();});function loadFacebookShare(url,redirect,title,location_label){if(typeof(location_label)==='undefined')location_label='Share';var strWindowFeatures="location=yes,height=400,width=685,scrollbars=yes,status=yes";var URL="https://www.facebook.com/dialog/share?"+
"app_id=124139360941459"+
"&display=popup"+
"&href="+url+
"&redirect_uri="+redirect;sendSocialEvent(petaGA_SNsource_Facebook,location_label,url);return window.open(URL,"_blank",strWindowFeatures);}
function loadTwitterShare(url,text,title,location_label){if(typeof(location_label)==='undefined')location_label='Share';var strWindowFeatures="location=yes,height=400,width=685,scrollbars=yes,status=yes";var URL="https://twitter.com/intent/tweet?"+
"&text="+text+
"&url="+url+
"&via=PETA";sendSocialEvent(petaGA_SNsource_Twitter,location_label,url);return window.open(URL,"_blank",strWindowFeatures);}
function socialToggle(){jQuery('.footer-social-share .share-item').click(function(e){if(!jQuery('.footer-social-share .share-item').hasClass('share-email')){console.log('hi');e.preventDefault();}
var share_location='Share';var data_share_location=jQuery(this).data('share-location');if(undefined!==data_share_location&&data_share_location.length){share_location=data_share_location;}
var shareMethod=jQuery(this).data('social');if(shareMethod=='facebook'){loadFacebookShare(jQuery(this).data('url'),jQuery(this).data('redirect'),jQuery(this).data('title'),share_location);}else if(shareMethod=='twitter'){loadTwitterShare(jQuery(this).data('url'),jQuery(this).data('text'),jQuery(this).data('title'),share_location);}});}