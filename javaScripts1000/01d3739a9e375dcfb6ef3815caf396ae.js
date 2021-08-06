/** Shortcode Jquery **/
jQuery(document).ready(function ($){
	 "use strict";

	/** Toggle Js **/
	$('body').on('click','.ap_toggle_title',function(){
        $(this).next('.ap_toggle_content').slideToggle();
        $(this).toggleClass('active');
    });

	/** Tabs Js **/
	$('.ap_tab_wrap').prepend('<div class="ap_tab_group clearfix"></div>');
	$('.ap_tab_wrap').each(function(){
		$(this).children('.ap_tab').find('.tab-title').prependTo($(this).find('.ap_tab_group'));
		$(this).children('.ap_tab').wrapAll( "<div class='ap_tab_content' />");
	});

	$('body').each(function(){
		$(this).find('.ap_tab:first-child').show();
		$(this).find('.tab-title:first-child').addClass('active')
	});
	$('.ap_tab').not(":first-child").hide();

	$('body').on('click','.ap_tab_group .tab-title',function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		$(this).parent('.ap_tab_group ').next('.ap_tab_content').find('.ap_tab').hide();
		var ap_id = $(this).attr('id');
		$(this).parent('.ap_tab_group ').next('.ap_tab_content').find('.'+ap_id).show();
	});
});