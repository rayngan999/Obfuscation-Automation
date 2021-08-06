define('maps-page',['jquery','defaults','showhide','session'],function($,defaults,showhide,sess){var _ms=sess.fld('map_spd'),_defaults={spd:1,opc:50};if(_ms){_defaults.spd=_ms*10;}
_ms=sess.fld('map_trn');if(_ms){_defaults.opc=Math.round(_ms*100);}
var Mediator={init:function(){$(function(){if(window._config.map_home=='uk'&&window._config.map_homepage===true){$("div.gmnoprint:nth-child(2)").css("margin-top","0px");$("div.gmnoprint:nth-child(3)").css("margin-top","0px");$("div.gmnoprint:nth-child(2)").css("visibility","visible");$("div.gmnoprint:nth-child(3)").css("visibility","visible");}else if(window._config.map_home==='traffic'){}else{$("div.gmnoprint:nth-child(2)").css("margin-top","35px");$("div.gmnoprint:nth-child(3)").css("margin-top","25px");$("div.gmnoprint:nth-child(2)").css("visibility","visible");$("div.gmnoprint:nth-child(3)").css("visibility","visible");}
if($("#slider").length){var update_result=true;var static_map_action=function(){update_result=true;var childVal=parseInt($("#slider").val())/10;$("#period-slider").children('.active').removeClass('active');var newChild=$("#period-slider li:nth-child("+childVal+")");var imagename=newChild.attr('imagename');$('#staticmapImage').attr('src',imagename);newChild.addClass('active');}
$('#slider').on("change",function(){if(update_result===true){update_result=false;setTimeout(function(){static_map_action();},500);}});$('#slider').on("input",function(){$('#slider').off("change");if(update_result===true){update_result=false;setTimeout(function(){static_map_action();},500);}});$("#left-arrow-slider").click(function(){if(parseInt($("#slider").val())>10){$("#slider").val(parseInt($("#slider").val())-10);static_map_action();}});$("#right-arrow-slider").click(function(){if(parseInt($("#slider").val())<$('#slider').prop('max')){$("#slider").val(parseInt($("#slider").val())+10);static_map_action();}});$(".mapSliderAnchor").click(function(){val=$(this).attr('index');$("#slider").val(parseInt(val)*10);static_map_action();return false;});}
$('#map-selector, #snow-map-selector, #snow-state-selector').click(function(){$(this).focus();});var meta=$("meta[name=description]").attr('content');$("#weather-map .social-share a").each(function(){$(this).attr('data-description',meta);});$("#map-view #map-selector").change(function(){$("#map-view.collapsed .tools .showtoggler").click();});var mapToggler=defaults.elements.mapToggler;showhide.bindMapToggler(mapToggler);var agent=navigator.userAgent.toLowerCase();if(((agent.indexOf('iphone')!=-1)||(agent.indexOf('ipod')!=-1)||(agent.indexOf('ipad')!=-1))){$("#map_clk_opn").remove();$("#trends").on('click',"#chart-next,#chart-next-night",function(){$('#trends .next:not(.inactive)').click();}).on('click',"#chart-prev,#chart-prev-night",function(){$('#trends .prev:not(.inactive)').click();});}else{$("#map-view .tools").on('click','.showtoggler',function(){if($(this).hasClass('collapse')){setTimeout(function(){$("#map_clk_opn").show();if(!$('#map-view li.fullmap-interactive').is(':visible')){$("#map_clk_opn .show_map").css('width','100%');$("#map_clk_opn .show_map_fullscreen").hide();}
else{$("#map_clk_opn .show_map").css('width','50%');$("#map_clk_opn .show_map_fullscreen").show();}},500);}else{$("#map_clk_opn").hide();}});if($('#map-view.collapsed').length){var opts=$('#map-view.collapsed').attr('data-param'),fsmap_opt=false;if(opts){opts=eval('('+opts+')');if(typeof opts.fullmap_showhide!='undefined'){fsmap_opt=opts.fullmap_showhide;}}
if(fsmap_opt){$("#map-view.collapsed #map_clk_opn").show();}else{$("#map-view.collapsed #map_clk_opn .show_map_fullscreen").hide();$("#map-view.collapsed #map_clk_opn .show_map").css('width','100%');$("#map-view.collapsed #map_clk_opn").show();}}
$('#map_clk_opn').on('click','.show_map_fullscreen',function(){$("#map_clk_opn").hide();$("#map-view span.showhide").click();var e=document.getElementById("map-selector");var strUser=e.options[e.selectedIndex].dataset.param;if(typeof JSON==='object'&&typeof JSON.parse==='function'){strUser=JSON.parse(strUser);}else{strUser=eval('('+strUser+')');;}
if(dataLayer){dataLayer.push({'event':'VirtualPageview','vpvProduct':'maps','pageName':'vpv: maps: full screen'+(strUser.omni?': '+strUser.omni:''),'vpvName':'maps: full screen'+(strUser.omni?': '+strUser.omni:'')});}
setTimeout(function(){window.fscreen();$("#map_clk_opn").hide();},1000);}).on('click','.show_map',function(){var e=document.getElementById("map-selector");var strUser=e.options[e.selectedIndex].dataset.param;if(typeof JSON==='object'&&typeof JSON.parse==='function'){strUser=JSON.parse(strUser);}else{strUser=eval('('+strUser+')');;}
if(dataLayer){dataLayer.push({'event':'VirtualPageview','vpvProduct':'maps','pageName':'vpv: maps'+(strUser.omni?': '+strUser.omni:''),'vpvName':'maps'+(strUser.omni?': '+strUser.omni:'')});}
$("#map_clk_opn").hide();$("#map-view span.showhide").click();setTimeout(function(){window.mapexpandfix();$("#map_clk_opn").hide();},1000);});}});require(['carousels'],function(carousels){var ch_options={displaySlideQty:11,moveSlideQty:11,infiniteLoop:false,hideControlOnEnd:false,prevText:'<i class="icon-chevron-left"></i>',nextText:'<i class="icon-chevron-right"></i>',onAfterSlide:function(currentSlideNumber,totalSlideQty,currentSlideHtmlObject){if(currentSlideNumber==0)
$('#seventytwohours-weather-forecast-map').parent().parent().find('.bx-prev').addClass('inactive');else
$('#seventytwohours-weather-forecast-map').parent().parent().find('.bx-prev').removeClass('inactive');if(currentSlideNumber==66)
$('#seventytwohours-weather-forecast-map').parent().parent().find('.bx-next').addClass('inactive');else
$('#seventytwohours-weather-forecast-map').parent().parent().find('.bx-next').removeClass('inactive');}};window.fixSeventyTwoHourMapSlider=function(){if(typeof $("#seventytwohours-weather-forecast-map").slider!=='function'||!$("#seventytwohours-weather-forecast-map").parent().hasClass('bx-window')){carousels.bind("#seventytwohours-weather-forecast-map",ch_options);$('#map_offshorewinds #table-container-seventytwohours').css({'height':'auto','width':'auto',});$('#map_offshorewinds .bx-wrapper').css({'width':'auto'});setTimeout(fixSeventyTwoHourMapSlider,50);}else{$('#map_offshorewinds .bx-wrapper').css({'width':'auto'});}}
fixSeventyTwoHourMapSlider();});}};Mediator.init();});define('video-page',['jquery'],function($){var Mediator={init:function(){$(function(){$('.videoplayer > a.close-icon').click(function(){$('.videoplayer').css({'display':'none'});$('body').removeClass('videoon');});$("#video-page-main-player").prepend('<div id="videogalleryplayermodule" class="module" style="padding: 0; margin: 0;" data-template="video.gallery_player" data-module="video/playvideo"></div>');if(window.location.hash){var hash_value=window.location.hash.replace('#','');if(hash_value=="videos_brightcove-great-outdoors"){processDFP.renderBehaviouralTargetting("outdoorsuser");}}});}};Mediator.init();});;require(['maps-page','video-page']);