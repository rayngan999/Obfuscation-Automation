jQuery(document).ready(function(){jQuery('.wptrigger1').each(function(){var iVAl=jQuery(this).val();if(!iVAl){jQuery(this).next(".alignment").attr("disabled","disabled");}});jQuery(".wptrigger1").keyup(function(){jQuery(this).next(".alignment").removeAttr("disabled","disabled");jQuery(this).next(".alignment").attr("enabled","enabled");});jQuery(".alignment").live("click",function(event){proceed_data_after_button_click(this,event);});jQuery(".wptgg_pass_key1").live("keyup",function(event){if(event.keyCode==13){proceed_data_after_button_click(this.parentElement.querySelector('.alignment'),event);}});function proceed_data_after_button_click(_this,event){if(!jQuery(_this).prevAll('.wptgg_pass_key1').val())return;var obj=_this;var triggerid=jQuery(_this).prevAll('.wptgg_pass_key1').parents(".wptrigger_contents").find(".hi_wptgg_id").val();var pass_key=jQuery(_this).prevAll('.wptgg_pass_key1').parents(".wptrigger_contents").find(".wptgg_pass_key1").val();jQuery(_this).prevAll('.wptgg_pass_key1').parents(".wptrigger_contents").find(".hi_pass_key").val(pass_key);var data={action:"get_display_trigger",wptgg_id:triggerid,passkey:pass_key};jQuery.post(wptgg_ajaxurl,data,function(response){info=jQuery.parseJSON(response);jQuery(obj).parent().children("span").removeClass("wptgg_loading");if(response){var info={};info=jQuery.parseJSON(response);if(info["redirect"]){window.open(info["redirect"],"_self");return;}
if(info["shortcode"]=="checked"&&info["valid_status"]=="yes"){jQuery(obj).parents(".wptrigger_contents").find(".hi_wptrr_pass_keys").attr("name","hi_wptrr_pass_keys");jQuery(obj).parents(".wptrigger_contents").find(".hi_wptrr_pass_keys").val(get_wptgg_info());jQuery(obj).parents(".wptrigger_contents").find(".wptgg_form").submit();return;}
if(info["shortcode"]=="checked"&&info["valid_status"]=="no"){jQuery(obj).parents(".wptrigger_contents").find(".hi_wptrr_pass_keys").attr("name","hi_wptrr_pass_keys");jQuery(obj).parents(".wptrigger_contents").find(".hi_wptrr_pass_keys").val(get_wptgg_info());jQuery(obj).parents(".wptrigger_contents").find(".wptgg_form").submit();return;}
if(info["show_chk"]=="checked"){jQuery(obj).parent(".wptrigger_content").html(info["display_txt"]);}else{jQuery(obj).parent(".wptrigger_content").children(".wptrigger_append").html(info["display_txt"]);}}});}
jQuery(".wptgg_pass_key").live("keyup",function(event){if(event.keyCode==13){if(!jQuery(this).val())return;var obj=this;var triggerid=jQuery(this).parents(".wptrigger_contents").find(".hi_wptgg_id").val();var pass_key=jQuery(this).parents(".wptrigger_contents").find(".wptgg_pass_key").val();jQuery(this).parents(".wptrigger_contents").find(".hi_pass_key").val(pass_key);var data={action:"get_display_trigger",wptgg_id:triggerid,passkey:pass_key};jQuery.post(wptgg_ajaxurl,data,function(response){info=jQuery.parseJSON(response);jQuery(obj).parent().children("span").removeClass("wptgg_loading");if(response){var info={};info=jQuery.parseJSON(response);if(info["redirect"]){window.open(info["redirect"],"_self");return;}
if(info["shortcode"]=="checked"&&info["valid_status"]=="yes"){jQuery(obj).parents(".wptrigger_contents").find(".hi_wptrr_pass_keys").attr("name","hi_wptrr_pass_keys");jQuery(obj).parents(".wptrigger_contents").find(".hi_wptrr_pass_keys").val(get_wptgg_info());jQuery(obj).parents(".wptrigger_contents").find(".wptgg_form").submit();return;}
if(info["shortcode"]=="checked"&&info["valid_status"]=="no"){jQuery(obj).parents(".wptrigger_contents").find(".hi_wptrr_pass_keys").attr("name","hi_wptrr_pass_keys");jQuery(obj).parents(".wptrigger_contents").find(".hi_wptrr_pass_keys").val(get_wptgg_info());jQuery(obj).parents(".wptrigger_contents").find(".wptgg_form").submit();return;}
if(info["show_chk"]=="checked"){jQuery(obj).parent(".wptrigger_content").html(info["display_txt"]);}else{jQuery(obj).parent(".wptrigger_content").children(".wptrigger_append").html(info["display_txt"]);}}});}});get_wptgg_info=function(){var wptgg_info={};jQuery(".wptrigger_contents").each(function(){var trigger_key=jQuery(this).find(".hi_pass_key").val();var trigger_num=jQuery(this).find(".hi_wptgg_num").val();if(trigger_key)wptgg_info["wptrr_"+trigger_num]=trigger_key;});return jQuery.toJSON(wptgg_info);}
jQuery('.wptgg_only_number').keydown(function(e){if(jQuery.inArray(e.keyCode,[46,8,9,27,13,110,190])!==-1||(e.keyCode==65&&(e.ctrlKey===true||e.metaKey===true))||(e.keyCode>=35&&e.keyCode<=40)){return;}
if((e.shiftKey||(e.keyCode<48||e.keyCode>57))&&(e.keyCode<96||e.keyCode>105)){e.preventDefault();}});jQuery(window).scrollTo('.wptgg-bookmark');jQuery('.wptgg-animated').wptrigger_appear();jQuery('.wptgg-animated').each(function(){var current_trigger=jQuery(this);if(current_trigger.is(':wptrigger_appeared')){setTimeout(function(){current_trigger.addClass('animated tada');},1000);}
current_trigger.on('wptrigger_appear',function(event,$all_appeared_elements){setTimeout(function(){current_trigger.addClass('animated tada');},1000);});current_trigger.on('wptrigger_disappear',function(event,$all_appeared_elements){setTimeout(function(){current_trigger.removeClass('animated tada');},1000);});});var below_100_100_input=jQuery('.below_100_100');below_100_100_input.each(function(){var below_100_100_css='';if(jQuery(this)[0]){if(jQuery(this)[0].hasAttribute('style')){below_100_100_css=jQuery(this).attr('style');}}
below_100_100_css+='margin-top: 10px;text-transform: none;';if(jQuery(this).attr('type')!='image'){jQuery(this).css('cssText',below_100_100_css+'width: 100% !important;');}else{jQuery(this).parent().css('cssText','text-align: center !important;');}});var below_100_60_input=jQuery('.below_100_60');below_100_60_input.each(function(){var below_100_60_css='';var below_100_60_parent_css='';if(jQuery(this)[0]){if(jQuery(this)[0].hasAttribute('style')){below_100_60_css=jQuery(this).attr('style');}
if(jQuery(this).parent()[0].hasAttribute('style')){below_100_60_parent_css=jQuery(this).parent().attr('style');}}
below_100_60_css+='margin-top: 10px;text-transform: none;';if(jQuery(this).attr('type')!='image'){jQuery(this).css('cssText',below_100_60_css+'width: 60% !important;');}else{jQuery(this).css('cssText',below_100_60_css);}
jQuery(this).parent().css('cssText',below_100_60_parent_css+'text-align: center !important;');});var right_75_25_input=jQuery('.right_75_25');right_75_25_input.each(function(){var right_75_25_css='';var right_75_25_parent_css='';if(jQuery(this)[0]){if(jQuery(this)[0].hasAttribute('style')){right_75_25_css=jQuery(this).attr('style');}
if(jQuery(this).parent().find('.wptrigger1, .wptrigger')[0].hasAttribute('style')){right_75_25_parent_css=jQuery(this).parent().find('.wptrigger1, .wptrigger').attr('style');}}
right_75_25_css+='margin-left: 10px;text-transform: none;';if(jQuery(this).attr('type')!='image'){jQuery(this).css('cssText',right_75_25_css+'width: 25% !important;');}else{jQuery(this).css('cssText',right_75_25_css);}
jQuery(this).parent().find('.wptrigger1, .wptrigger').css('cssText',right_75_25_parent_css+'float: left !important;width: calc(75% - 10px) !important;box-sizing: border-box !important;');});var right_50_50_input=jQuery('.right_50_50');right_50_50_input.each(function(){var right_50_50_css='';var right_50_50_parent_css='';if(jQuery(this)[0]){if(jQuery(this)[0].hasAttribute('style')){right_50_50_css=jQuery(this).attr('style');}
if(jQuery(this).parent().find('.wptrigger1, .wptrigger')[0].hasAttribute('style')){right_50_50_parent_css=jQuery(this).parent().find('.wptrigger1, .wptrigger').attr('style');}}
right_50_50_css+='margin-left: 10px;text-transform: none;';if(jQuery(this).attr('type')!='image'){jQuery(this).css('cssText',right_50_50_css+';width: 50% !important;');}else{jQuery(this).css('cssText',right_50_50_css);}
jQuery(this).parent().find('.wptrigger1, .wptrigger').css('cssText',right_50_50_parent_css+';float: left !important;width: calc(50% - 10px) !important;box-sizing: border-box !important;');});});