
$(document).ready(function(){var prevarrow="<a href='#' class='icon-photo-slider icon-photo-left'><svg class='icon icon-angle-left'><use xlink:href='#icon-angle-left'/></svg></a>";var nextarrow="<a href='#' class='icon-photo-slider icon-photo-right'><svg class='icon icon-angle-right'><use xlink:href='#icon-angle-right'/></svg></a>"
$('.js-hl-big').slick({autoplay:true,slidesToShow:1,autoplaySpeed:10000,pauseOnFocus:true,fade:true,arrows:false,cssEase:'ease',asNavFor:'.js-hl-thumb'});$('.js-hl-thumb').slick({asNavFor:'.js-hl-big',slidesToShow:4,focusOnSelect:true,});$('.js-photo-wp').slick({autoplay:true,autoplaySpeed:9000,slidesToShow:1,dots:true,pauseOnFocus:true,prevArrow:prevarrow,nextArrow:nextarrow});var s=$('[data-type="score-slide"]').length;if(s>0){$('[data-type="score-slide"]').slick({slidesToShow:5,slidesToScroll:5,autoplay:true,autoplaySpeed:5000,});}
$('.score .slick-next').html('<svg class="icon icon-right"><use xlink:href="#icon-right"></use></svg>');$('.score .slick-prev').html('<svg class="icon icon-left"><use xlink:href="#icon-left"></use></svg>');$(window).scroll(function(){var scrollpos=$(window).scrollTop();var hblock=$('header').outerHeight();var navsticky=$('.mainmenu').outerHeight();if(scrollpos>hblock+20){$('.mainmenu').addClass('fixed');$('header').css({'padding-bottom':'60px','background':'red',});$('.js-ads-stick').addClass('ads__stick--sticky');}else{$('.mainmenu').removeClass('fixed');$('header').css({'padding-bottom':'0px','background':'none',});$('.js-ads-stick').removeClass('ads__stick--sticky');}
var a=$(window).scrollTop(),c=($(window).scrollTop(),$(window).height(),$(".header-sticky").outerHeight());$("footer").outerHeight();a>c+220?$(".ads-skin").css({top:"55px"}):a<c+220&&$(".ads-skin").removeAttr("style");});$('.js-ads-horizontal').click(function(e){e.stopPropagation();e.preventDefault();$('.ads__horizontal').hide();});$('.close-skin').click(function(e){e.stopPropagation();e.preventDefault();$('.ads-skin').remove();});$('.gale-slider__list').slick({autoplay:true,slidesToShow:1,autoplaySpeed:10000,pauseOnFocus:true,fade:true,arrows:true,appendArrows:'.gale-slider__nav',prevArrow:'<div class="gale-nav prev"><svg class="icon icon-left"><use xlink:href="#icon-left"></use></svg></div>',nextArrow:'<div class="gale-nav next"><svg class="icon icon-right"><use xlink:href="#icon-right"></use></svg></div>',cssEase:'ease',asNavFor:'.gale-anchor__list'});$('.gale-anchor__list').slick({asNavFor:'.gale-slider__list',slidesToShow:3,slidesToScroll:1,centerMode:true,focusOnSelect:true,variableWidth:true,infinite:true,appendArrows:'.gale-slider__navdo',prevArrow:'<div class="gale-navdo prev"><svg class="icon icon-left"><use xlink:href="#icon-left"></use></svg></div>',nextArrow:'<div class="gale-navdo next"><svg class="icon icon-right"><use xlink:href="#icon-right"></use></svg></div>',});});

