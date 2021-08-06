/* Tabs Shortcodes */
function initTabGroup(e) {
    if(typeof e === 'undefined'){
        e = document;
    }
    if (jQuery('.tabgroup', jQuery(e)).length) {
        jQuery('.tabgroup', jQuery(e)).tabs().show();
    }
}

/* Video Resize */
var video_resize_timer_id;
jQuery(window).resize(function(){
    resize_videos();
    clearTimeout( video_resize_timer_id );
    video_resize_timer_id = setTimeout( video_done_resizing, 500 );
});

function video_done_resizing(){
    resize_videos();
}

function resize_videos(){
    jQuery(document).find( '.bd-googlemaps-shortcode iframe' ).each(function () {
        var the_video = jQuery( this );
        the_video.attr( 'width', '100%' );
        var video_width = the_video.width();
        the_video.css( 'height', video_width * 0.6, 'important' );
    });
}

// Main JS
(function($) { "use strict";

    /* Mobile */
    if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i) ){
        var mobile_device = true;
    }else{
        var mobile_device = false;
    }

    /* fake placeholder for ie */
    jQuery('input, textarea').placeholder();

    //popup on modal images
    jQuery('.about-me-img').each(function()
    {
        jQuery(this).magnificPopup(
            {
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery:
            {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            image:
            {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '';
                }
            },
            zoom: {
                enabled: true,
                duration: 300, // don't foget to change the duration also in CSS
                opener: function(element) {
                    return element.find('img');
                }
            }
        });
    });

    // Image Popup
    jQuery( 'body.on-lightbox figure.wp-caption, body.on-lightbox figure.gallery-item' ).each(function()
    {
        var caption_text = jQuery(this).children('figcaption').html();
        jQuery(this).children('a').data('caption', caption_text);
    });

    jQuery( 'body.on-lightbox .post' ).each(function()
    {
        jQuery(this).magnificPopup(
        {
            delegate: '.post-featured-image-bd a, .gallery-item a, figure.wp-caption a, .pop-img-bd',
            type: 'image',
            tLoading: 'Loading ...',
            mainClass: 'mfp-img-mobile',
            gallery:
            {
                enabled: true
            },
            image:
            {
                tError: "<a href=\'%url%\'>The image #%curr%</a> could not be loaded.",
                titleSrc: function(item) {
                    var current_caption_bd = jQuery(item.el).data('caption');
                    if (typeof current_caption_bd != "undefined") {
                        return current_caption_bd;
                    } else {
                        return '';
                    }
                }
            },
            zoom:
            {
                enabled: true,
                duration: 300, // don't foget to change the duration also in CSS
                opener: function(element) {
                    return element.find('img');
                }
            }
        });
    });

    /* Prevent Default */
    jQuery( "a.menu-trigger, .bd-slider .flex-control-nav li a" ).click( function(event) {
        event.preventDefault(event);
    });

    // remove empty p
    jQuery('p').filter(function() {
            return $.trim($(this).text()) === '' && $(this).children().length == 0
    }) .remove();

    /* Search Drop Down */
    jQuery(".search-btn").bind("click",function(){if(
            jQuery(this).hasClass("active")){
            jQuery(this).removeClass("active");
            jQuery(".search-btn").removeClass("active");
            jQuery(".search-dropdown").stop().slideUp('fast');
        return false
        }else{
            jQuery(this).addClass("active");
            jQuery(".search-btn").addClass("active");
            jQuery(".search-dropdown").stop().slideDown('fast');
        return false
        }}
    );

    /* Top menu Drop Down */
    jQuery("a.menu-trigger").bind("click",function(){if(
            jQuery(this).hasClass("active")){
            jQuery(this).removeClass("active");
            jQuery("a.menu-trigger").removeClass("active");
            jQuery(".primary-menu-drop").stop().slideUp('fast');
            return false
        }else{
            jQuery(this).addClass("active");
            jQuery("a.menu-trigger").addClass("active");
            jQuery(".primary-menu-drop").stop().slideDown('fast');
            return false
        }}
    );

    /* Top menu Drop Down */
    jQuery(".top-mob-btn").bind("click",function(){if(
            jQuery(this).hasClass("active")){
            jQuery(this).removeClass("active");
            jQuery(".top-mob-btn").removeClass("active");
            jQuery(".top-menu-drop").stop().slideUp('fast');
            return false
        }else{
            jQuery(this).addClass("active");
            jQuery(".top-mob-btn").addClass("active");
            jQuery(".top-menu-drop").stop().slideDown('fast');
            return false
        }}
    );

    /* Breaking News */
    jQuery( '.breaking-news ul, #breakingNews ul' ).each(function() {
        jQuery('.breaking-news ul li, #breakingNews ul li').addClass('wow animated flipInX');

        if ( ! jQuery(this).find( 'li.active' ).length ) {
            jQuery(this).find( 'li:first' ).addClass('active');
        }

        var ticker = jQuery( this );
        window.setInterval( function() {

            var active = ticker.find('li.active');
            active.fadeOut(function() {

                var next = active.next();
                if (!next.length) {
                    next = ticker.find('li:first');
                }

                next.addClass('active').fadeIn();
                active.removeClass('active');
            });

        }, 6000);
    });

    /* Shortcodes toggle */
    jQuery('div.toggle h4').click(function () {
        var text = jQuery(this).siblings('div.panel');
        if (text.is(':hidden')) {
            text.slideDown( 'fast' );
            jQuery(this).siblings('span').html('-');
        } else {
            text.slideUp( 'fast' );
            jQuery(this).siblings('span').html('+');
        }
    });

    //Sticky navigation
    var stickySidebarTop = 0;
    if(jQuery('body.sticky-nav-on #navigation').length>0){
        stickySidebarTop = 50;
        jQuery( '#header' ).imagesLoaded(function() {
            jQuery(function(){
                var navScroll_1 = jQuery(document).scrollTop();
                var headerHeight = jQuery('body.sticky-nav-on #navigation').offset().top;

                jQuery(window).scroll(function() {
                    var navScroll_2 = jQuery(document).scrollTop();

                    if (navScroll_2 > headerHeight){jQuery('body.sticky-nav-on #navigation').addClass('sticky-nav');}
                    else {jQuery('body.sticky-nav-on #navigation').removeClass('sticky-nav');}

                    if (navScroll_2 > navScroll_1){jQuery('body.sticky-nav-on #navigation').removeClass('sticky-nav-appear');}
                    else {jQuery('body.sticky-nav-on #navigation').addClass('sticky-nav-appear');}

                    navScroll_1 = jQuery(document).scrollTop();
                });
            });
        });
    }

    // Load
    jQuery(window).load(function() {
    });

    jQuery(document).ready(function () {

        if ( !mobile_device && bd.sticky_sidebar ) {

            jQuery('.theia_sticky').theiaStickySidebar({
                containerSelector: "#content",
                additionalMarginTop: 0
            });

            jQuery('.home2-sidebar').theiaStickySidebar({
                containerSelector: ".home2-content",
                additionalMarginTop: 0
            });
        }

        initTabGroup();
        bd_ss();
        resize_videos();
        jQuery(".post-content-bd, .post-video-wrap, .bd-video-widget").fitVids();

        jQuery("#slide-out-open").click(function() {
            if( jQuery( this ).hasClass( "slide-out-open" ) ) {
                jQuery('#page').css({overflow:"hidden"});
                jQuery("body").addClass( 'js-nav' );
                jQuery("body #slide-out").addClass( 'soo' );
                jQuery( this ).removeClass('slide-out-open').addClass('slide-out-close');
                return false;
            }
            else if( jQuery( this ).hasClass( "slide-out-close" ) ) {
                jQuery('#page').css({overflow:"auto"});
                jQuery("body").removeClass( 'js-nav' );
                jQuery("body #slide-out").removeClass( 'soo' );
                jQuery( this ).removeClass('slide-out-close').addClass('slide-out-open');
                return false;
            }
        });

        // Slide out
        jQuery( '#slide-out #mobile-menu .menu-item-has-children' ).append( '<i class="mobile-arrows fa fa-chevron-down"></i>' );
        jQuery("#mobile-menu .menu-item-has-children i.mobile-arrows").click(function() {
            if( jQuery( this ).hasClass( "fa-chevron-down" ) )
                jQuery( this ).removeClass( "fa-chevron-down" ).addClass( "fa-chevron-up" );
            else
                jQuery( this ).removeClass( "fa-chevron-up" ).addClass( "fa-chevron-down" );

            jQuery( this ).parent().find('ul:first').toggle();
        });

    });


    /* Img Scroll */
    if( !mobile_device && bd.imgScroll ) {
        jQuery(function () {
            var $window = jQuery(window),
                win_height_padded = $window.height() * .9;

            $window.on('scroll', bd_RevealOnScroll);

            function bd_RevealOnScroll() {
                var scrolled = $window.scrollTop(),
                    win_height_padded = $window.height() * .9;

                jQuery(".fm-story .fm-thumbnail, .post-img, .ws-thumbnail, .flexslider .slides > li, .rp-thumbnail").each(function () {
                    var $this = jQuery(this),
                        offsetTop = $this.offset().top;

                    if (scrolled + win_height_padded > offsetTop) {
                        jQuery(this).addClass('img-over');
                    }
                });
            }
            bd_RevealOnScroll();
        });
    } else {
        jQuery(".fm-story .fm-thumbnail, .post-img, .ws-thumbnail, .flexslider .slides > li, .rp-thumbnail").addClass('bd-show');
        jQuery(".bd-hid a, .bd-hid img, .bd-hid, .fm-story .fm-thumbnail img, .post-img img, .ws-thumbnail img, .flexslider .slides > li a, .rp-thumbnail img").css({'filter':'alpha(opacity=100)', 'zoom':'1', 'opacity':'1'});
    }

    /* Go Top */
    jQuery(window).scroll(function(){if(jQuery(this).scrollTop()>1){jQuery("#go-top").css({bottom:"5px"})}else{jQuery("#go-top").css({bottom:"-45px"})}});jQuery("#go-top").click(function(){jQuery("html, body").animate({scrollTop:"0px"},600);return false});

})(jQuery);