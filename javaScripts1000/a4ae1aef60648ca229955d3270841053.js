// toggle
$("#data tr td").on("click", function() {
	var cla = $(this).parent().data("cl");
  $('.'+cla).toggleClass("active");
    //$(this).parent().next("tr").toggleClass("active");
});

(function($){
	"use strict";
	$(document).ready(function($){
		document.mainMenu = $('body');
		document.mainHeader = $('header.header');
		$(
		'.king-sidebar .widget_categories,.king-sidebar .widget_archive,'+
		'.king-sidebar .widget_pages,.king-sidebar .widget_meta,'+
		'.king-sidebar .widget_recent_entries,'+
		'.king-sidebar .widget_product_categories,'+
		'.king-sidebar .widget_nav_menu').each(function(){

			$(this).find('ul').addClass('arrows_list1');
			$(this).find('li a').prepend('<i class="fa fa-caret-right"></i>');

		});
		$('ul.nav>li.current-menu-item>a').addClass('active');


		$('#tabs ul.tabs li').on( 'click', function(e){
			$('#tabs .tab_container').css({display:'none'});
			$( $(this).find('a').attr('href') ).css({display:'block'});
			$('#tabs ul.tabs li.active').removeClass('active');
			$(this).addClass('active');
			e.preventDefault();
		});

		$('#scrollup').on( 'click', function(e){
			$('html,body').animate({ 'scroll-top' : 0 });
			e.preventDefault();
		});

		$( '.navbar-toggle' ).on( 'touchstart click', function( e ){
			var targ = $( this ).attr( 'data-target' );

			e.preventDefault();

			if( $( targ ).get( 0 ) )
			{
				if( document.mainMenu.hasClass( 'slide-menu' ) && targ != '#bs-example-navbar-collapse-1' )
				{
					var showmenu = $( targ ).attr( "data_show" );
					if( typeof showmenu == 'undefined' )
					{
						showmenu = 0;
					}
					if( showmenu == 0 )
					{
						document.mainMenu.toggleClass( "menu-active" );
						$( targ ).attr( "data_show", '1' );
					}
					else
					{
						document.mainMenu.toggleClass( "menu-active" );

						$( targ ).attr( "data_show", '0' );
					}
				}
				else
				{
					$( targ ).slideToggle();
				}
			}
		});

		if( document.mainMenu.hasClass( 'slide-menu' ) )
		{
			$( '#navbar-collapse-1, #bs-onepage-navbar-collapse-1' ).append( '<div class="slide-menu-close fa fa-close"></div>' );
			$('.header .menu_main .navbar, .fixednav3 .navbar').append( '<div class="overlay_menu"></div>' );
			//hide menu
			$( '.slide-menu-close, .overlay_menu' ).on('click', function( e ){
				hideMenu();
			});

			

			
		}

		$('a').on( 'click', function(e){
			if( $(this).attr('href') == '#' ){
				e.preventDefault();
			}
		});





		$('.close-but').on( 'click', function(){
			$(this).parent().parent().hide('slow',function(){$(this).remove();});
		});

		$('.video-player .video-close').on( 'click', function(){
			$(this).parent().find('iframe').remove();
			$(this).parent().animate({opacity:0},function(){$(this).hide();});
		});

		$('.king-video-play-wrapper .play-button').on( 'click', function(){
			var url = $(this).data('video');
			var height = $(this).data('height');
			if( url.indexOf('youtube.com') > -1 ){
				var id = url.split('v=')[1].replace('index.html','');
				id = 'https://www.youtube.com/embed/'+id+'?autoplay=1&controls=0&showinfo=0';
			}else if( url.indexOf('vimeo.com') > -1 ){
				var id = url.split('vimeo.com/index.html')[1].replace('index.html','');
				id = 'https://player.vimeo.com/video/'+id+'?autoplay=1&title=0&byline=0&portrait=0';
			}
			var w = $(window).width();
			var h = parseInt(w*0.5609);
			var mt = -parseInt((h-height)/2);
			$(this).closest('.king-video-play-wrapper')
					.find('.video-player')
					.append('<iframe style="height:'+h+'px;width:'+w+'px;margin-top:'+mt+'px" src="'+id+'"></iframe')
					.css({display:'block', opacity:0})
					.animate({opacity:1});
		});

		$('.king-preload').each(function(){

			var rel = $(this).attr('data-option').split('|');

			(function( elm ){
				$.post( site_uri+'/index.php', {
						'control'	: 'ajax',
						'task'		: rel[0],
						'id'		: rel[1],
						'amount'	: rel[2]
					}, function (result) {

					elm.innerHTML = result;
					$(elm).addClass('animated fadeIn');

				})
			})(this);

		});

		$('.navbar-nav li.yamm-fw a.active').each(function(){
			$(this).closest('li.yamm-fw').find('>a').addClass('active');
		});

		var act = false;
		$('#king-mainmenu>li').each(function(){
			if( $(this).hasClass('current-menu-parent') || $(this).find('>a').hasClass('active') ){
				if( act == false ){
					act = true;
				}else{
					$(this).removeClass('current-menu-parent');
					$(this).find('>a.active').removeClass('active');
				}
			}
		});

		// Menu OnePage
		$('#menu-onepage .navbar-toggle').on( 'click', function(){
			if($(this).hasClass('active')){
				$(this).removeClass('active');
				$('#menu-onepage .navbar-collapse').removeClass('opened').addClass('closed');
			}
			else{
				$(this).addClass('active');
				$('#menu-onepage .navbar-collapse').removeClass('closed').addClass('opened');
			}
			$('#menu-onepage .navbar-collapse').slideToggle();
		});

		$('#menu-onepage a').on( 'click', function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('#menu-onepage li.active').removeClass('active');
					$(this).parent().addClass('active');
					$('.nav-collapse').attr({style:''});

					$('html,body').animate({
						scrollTop: target.offset().top-80
					}, 1000);

					return false;
				}
			}
		});


		$('#king-mainmenu li a').on( 'click', function(e){
			if( !$(this.parentNode).find('ul').get(0) || $('body').width() > 1000 ){
				return true;
			}
			if( $(this.parentNode).hasClass('open') ){
				$(this.parentNode).removeClass('open');
				return true;
			}else $(this.parentNode).addClass('open');

			e.preventDefault();

			return false;
		});

		// Modal close
		$('.simplePopupClose,.simplePopupBackground').on( 'click', function(){
			$('.simplePopupBackground,.simplePopup').animate({'opacity':0}, function(){$('.simplePopupBackground,.simplePopup').remove();});
		});

		//enable scroll for map
		$('.fgmapfull').on( 'click', function () {
		    $('.fgmapfull iframe').css("pointer-events", "auto");
		});

		videos_gallery( jQuery );


		$(function() {
			$('#sidebar ul.children').hide();
			$('#sidebar .arrows_list1 > li > a').on( 'click', function(event) {
				if($(this).parent().hasClass('page_item_has_children')){
					event.preventDefault();
					$(this).next('.children').slideToggle("slow");
				}
			});
		});

		$('.retina-support').each(function(){
			$(this).find('img').each(function(){
				if( $(this).attr('width') ){
					$(this).removeAttr('height').attr({ width : ( $(this).attr('width')/2) });
				}
			});
		});

	});

})(jQuery);

function hideMenu()
{
	var container = jQuery( ".navbar-collapse" );
	container.attr( "data_show", '0' );
	jQuery('body').removeClass( "menu-active" );
}
function timelineLoadmore( index, btn ){

	jQuery( btn ).html('<i class="fa fa-spinner fa-spin"></i>').get(0).disabled = true;
	jQuery.post( site_uri+'/wp-admin/admin-ajax.php', {
			'action': 'loadPostsTimeline',
			'index': index
		}, function (result) {
			jQuery( btn ).remove();
			jQuery('#cd-timeline').append( result );
	});
	return false;
}



function videos_gallery($){

	$('.videos-gallery-list').each(function(){
		$(this).find('iframe').each(function(){
			$(this).parent().find('br').remove();
			var yid = this.src;
			yid = yid.split('embed')[1].replace(/\//g,'');
			$(this).closest('.wpb_text_column').attr({'data-yid':yid}).on( 'click', function(){
				var yid = $(this).attr('data-yid');
				$(this).closest('.wpb_row').find('.videos-gallery-player .wpb_wrapper').html('<iframe src="https://www.youtube.com/embed/'+yid+'?autoplay=1"></iframe>');
			});
			$(this).after('<img src="https://i.ytimg.com/vi/'+yid+'/default.jpg" />').remove();
		});
	});

}


function king_modal_ready(){

	var $ = jQuery;

	$('.simplePopupBackground,.simplePopup').css({'display':'block'}).animate({'opacity':1});

	var width = $('#pop-modal').width()+10;
	var height = $('#pop-modal').height()+10;
	$('#pop-modal').css({ width: width+'px', marginLeft : -(width/2)+'px', marginTop : -(height/2)+'px' });
	if( $('#pop-modal').width() > $(window).width() -100 ){
		$('#pop-modal').css({ width: ($(window).width() - 100)+'px', marginLeft : -(($(window).width() - 100)/2)+'px' });
	}

	if( $('#pop-modal').height() > $(window).height() - 100 ){
		$('#pop-modal').css({ marginTop: -(($(window).height() - 100)/2)+'px' });
	}

	$('html,body').animate({ scrollTop: 0 });

}
