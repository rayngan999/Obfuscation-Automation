var $=jQuery.noConflict();jQuery.fn.exists=function(callback){var args=[].slice.call(arguments,1);if(this.length){callback.call(this,args);}
return this;};jQuery(document).ready(function(){jQuery("body").prepend("<div id='move-to-top' class='animate '><i class='icon-chevron-up'></i></div>");var scrollDes='html,body';if(navigator.userAgent.match(/opera/i)){scrollDes='html';}
jQuery(window).scroll(function(){if(jQuery(this).scrollTop()>160){jQuery('#move-to-top').addClass('filling').removeClass('hiding');}else{jQuery('#move-to-top').removeClass('filling').addClass('hiding');}});jQuery('#move-to-top').click(function(){jQuery(scrollDes).animate({scrollTop:0},{duration:500});});});$(function(){$('a[href*="#comments"]:not([href="#comments"])').click(function(){if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')||location.hostname==this.hostname){var target=$(this.hash);target=target.length?target:$('[name='+this.hash.slice(1)+']');if(target.length){$('html,body').animate({scrollTop:target.offset().top},1000);return false;}}});});jQuery(document).ready(function($){var $top_menu=$('.top-navigation');var $secondary_menu=$('.secondary-navigation');var $first_menu='';var $second_menu='';if($top_menu.length==0&&$secondary_menu.length==0){return;}else{if($top_menu.length){$first_menu=$top_menu;$second_menu=$secondary_menu;}else{$first_menu=$secondary_menu;}}
var menu_wrapper=$first_menu.clone().attr('class','mobile-menu').wrap('<div id="mobile-menu-wrapper"></div>').parent().hide().appendTo('body');if($second_menu.length){$second_menu.find('li').clone().prependTo('.mobile-menu ul');}
$('.toggle-mobile-menu').click(function(e){e.preventDefault();e.stopPropagation();$('#mobile-menu-wrapper').show();$('body').toggleClass('mobile-menu-active');});$('#mobile-menu-wrapper').click(function(e){e.stopPropagation();});$(document).click(function(){if($('body').hasClass('mobile-menu-active')){$('body').removeClass('mobile-menu-active');}});});jQuery(document).ready(function(){$('.navigation ul.sub-menu').hide();$('.navigation li').hover(function(){$(this).children('ul.sub-menu').slideDown('fast');},function(){$(this).children('ul.sub-menu').hide();});});jQuery(document).ready(function(){jQuery('a[href="#top"]').click(function(){jQuery('html, body').animate({scrollTop:0},'slow');return false;});});jQuery(document).ready(function(){jQuery.fn.exists=function(callback){var args=[].slice.call(arguments,1);if(this.length){callback.call(this,args);}
return this;};(function(d,s){jQuery('span.gplusbtn').exists(function(){load('https://apis.google.com/js/plusone.js','gplus1js');});jQuery('span.twitterbtn').exists(function(){load('//platform.twitter.com/widgets.js','tweetjs');});jQuery('span.linkedinbtn').exists(function(){load('//platform.linkedin.com/in.js','linkedinjs');});jQuery('span.pinbtn').exists(function(){load('//assets.pinterest.com/js/pinit.js','pinterestjs');});jQuery('span.stumblebtn').exists(function(){load('//platform.stumbleupon.com/1/widgets.js','stumbleuponjs');});}(document,'script'));});