/* AR.CIENRADIOS.COM */

jQuery(function ($) {
    // var instagramID = 1376448181;
    /*------------*/
    /* OFF CANVAS */
    /*------------*/

    var $html = $('html');
    /*
    	$('.off-canvas-left-trigger').on('click', function(e){
    			$html.toggleClass('off-canvas-left-on');
    	});

    	$('.off-canvas-right-trigger').on('click', function(e){
    		$html.toggleClass('off-canvas-right-on');

    		if(typeof $(this).data('tab') !== 'undefined'){
    			var tab_index = $(this).data('tab');
    			$('.radios-tab').removeClass('active');
    			$('.radios-tab').eq(tab_index).addClass('active');

    			$('.radios-tab-block').css('left', (tab_index*-100) + '%');
    		}
    	});

    	$('#off-canvas-overlay').on('click', function(e){
    			$html.removeClass('off-canvas-left-on');
    			$html.removeClass('off-canvas-right-on');
    	});

    	$('.off-canvas-close').on('click', function(e){
    			$html.removeClass('off-canvas-left-on');
    			$html.removeClass('off-canvas-right-on');
    	});

    	// carousel
    	$('.menu-radios-list').each(function(){
    		$(this).slick({
    			dots: false,
    			infinite: false,
    			speed: 150,
    			slidesToShow: 5,
    			centerMode: false,
    			variableWidth: true,
    			draggable: true,
    			swipeToSlide: true,
    			arrows: true,
    			focusOnSelect: true,
    			prevArrow: '<button class="menu-radios-list-arrows prev fa fa-angle-left"></button>',
    			nextArrow: '<button class="menu-radios-list-arrows next fa fa-angle-right"></button>',
    		});
    	});

    	$('.menu-radios-list').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    		$('.menu-radios-info').hide();
    		$('.menu-radios-info[data-tab="'+nextSlide+'"]').show();
    	});
			*/
    /*-------------*/
    /* RADIOS TABS */
    /*-------------*/
    $('.radios-tab').on('click', function (e) {
        $('.radios-tab').removeClass('active');
        $(this).addClass('active');

        var tab_index = $(this).index();

        $('.radios-tab-block').css('left', tab_index * -100 + '%');
    });

    /*
    	$('.radios-music-tab').on('click', function(e){
    			$('.radios-music-tab').removeClass('active');
    			$(this).addClass('active');

    			var tab_index = $(this).data('tab');

    			$('.radios-music-tab-content').hide();
    			$('.radios-music-tab-content').eq(tab_index).show();
    	});
			*/
    $('.radios-vivo-tab').on('click', function (e) {
        $('.radios-vivo-tab').removeClass('active');
        $(this).addClass('active');

        var tab_index = $(this).data('tab');

        $('.radios-vivo-tab-content').hide();
        $('.radios-vivo-tab-content')
            .eq(tab_index)
            .show();
    });

    /*-------------*/
    /* SCROLL BARS */
    /*-------------*/
    //$('.scrollbar-macosx').scrollbar();
    //$('.scrollbar-inner').scrollbar();

    /*--------------*/
    /* CONTEXT BARS */
    /*--------------*/
    var $context_bar = $('.context-bar');
    $(document).on('scroll', function () {
        $context_bar.each(function () {
            var $this = $(this),
                $container = $this.parent();
            if (
                $container.offset().top + $container.outerHeight() <
                $(document).scrollTop() + $('.topbar').outerHeight() + $this.outerHeight()
            ) {
                // Left behid
                $this.attr('data-scroll', 'scrolled'); // SEE ON ARTICLES CSS
            } else if ($container.offset().top < $(document).scrollTop() + $('.topbar').outerHeight()) {
                // Fixed
                $this.attr('data-scroll', 'scrolling');
            } else {
                // Initial status
                $this.attr('data-scroll', '');
            }
        });
    });

    /*-------------*/
    /* PLAYER BARS */
    /*-------------*/
    var $player_bar = $('.player-box-info');
    $(document).on('scroll', function () {
        $player_bar.each(function () {
            var $this = $(this),
                $container = $this.parent();
            if (
                $container.offset().top + $container.outerHeight() - 60 <
                $(document).scrollTop() + $('.topbar').outerHeight()
            ) {
                // Fixed
                $this.attr('data-scroll', 'scrolling');
            } else {
                // Initial status
                $this.attr('data-scroll', '');
            }
        });
    });

    /*-------------*/
    /* BACK TO TOP */
    /*-------------*/
    $('.footer-back-to-top').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({ scrollTop: 0 }, 1000);
    });

    /*-------------*/
    /* HOME SEARCH */
    /*-------------*/
    // $(document).on('scroll', function(){
    // 	var show_cond = $(document).scrollTop() > 240;
    // 	$('.topbar-nav-search').toggleClass('show', show_cond);
    // });

    /*
    	$('.topbar-nav-search-input').on('keyup', function(){
    		$('.search-suggestions').toggleClass('active', this.value !== '');
    	});

    	$('.search-suggestions-close').on('click', function(e){
    		e.preventDefault();
    		$('.topbar-nav-search-input').val('').trigger('keyup');
    	});
    */

    /*-------------*/
    /* LIVE RADIOS */
    /*-------------*/
    /*
    	$('.live-radios-row').slick({
    		dots: false,
    		infinite: true,
    		speed: 150,
    		slidesToShow: 3,
    		centerMode: false,
    		variableWidth: false,
    		draggable: true,
    		swipeToSlide: true,
    		arrows: true,
    		focusOnSelect: true,
    		initialSlide: 0,
    		prevArrow: '<button type="button" class="live-radios-arrows prev fa fa-angle-left"></button>',
    		nextArrow: '<button type="button" class="live-radios-arrows next fa fa-angle-right"></button>',
    		responsive: [
    		{
    			breakpoint: 768,
    			settings: {
    				slidesToShow: 1,
    				variableWidth: true,
    				centerMode: true,
    				arrows: false,
    			}
    		}],
    	});

    	$(window).on('resize', function(){
    		if($(window).width() >= 768){
    			$('.live-radios-row').slick('slickGoTo', 0, true);
    		}
    	});
*/
    /*----------*/
    /* DISCOVER */
    /*----------*/
    // carousel
    /*
    	$('.discover-items').each(function(){
    		var $slickNav = $(this).closest('.discover-row').find('.discover-row-nav');

    		$(this).slick({
    			dots: false,
    			infinite: true,
    			speed: 150,
    			slidesToShow: 6,
    			slidesToScroll: 3,
    			centerMode: false,
    			draggable: true,
    			appendArrows: $slickNav,
    			nextArrow: '<span class="fa fa-angle-right"></span>',
    			prevArrow: '<span class="fa fa-angle-left"></span>',
    			responsive: [
    			{
    				breakpoint: 768,
    				settings: {
    					slidesToShow: 4,
    					slidesToScroll: 2,
    				}
    			},
    			{
    				breakpoint: 480,
    				settings: {
    					slidesToShow: 2,
    					slidesToScroll: 2
    				}
    			}],
    		});
    	});
*/
    // unfold

    // color thief
    // $(window).on('load', function(){
    // 	$('.discover-item-img').each(function(){
    // 		var colorThief = new ColorThief();
    // 		var rgb = colorThief.getColor(this);
    // 		var $this = $(this);
    // 		var $info = $this.siblings('.discover-item-info');
    //
    // 		if(rgb[1] > 180){
    // 				$info.addClass('dark');
    // 		}
    //
    // 		$info.css({
    // 			'background-color': 'rgb('+rgb[0]+','+rgb[1]+','+rgb[2]+')',
    // 			'color': 'rgb('+rgb[0]+','+rgb[1]+','+rgb[2]+')'
    // 		});
    // 	});
    // });

    /*
        var animate_clone = function(complete_width){
            $clone.css({'text-indent': 0});
            $clone.animate({'text-indent': '-'+(complete_width)+'px'}, complete_width*15, 'linear', animate_clone);
        };
        */
    // marquee
    // $('.discover-item').on('mouseover', function(e){
    // 	var $marquee = $(this).find('.discover-item-marquee'),
    // 			$original = $marquee.find('.discover-item-subtitle'),
    // 			text = $original.html();
    //
    // 	if(!$marquee.find('.discover-item-subtitle-clone').length && $original.innerWidth() > $marquee.width()){
    // 		var complete_width = $original.width() + 10;
    // 		$original.hide();
    // 		$clone = $('<p></p>').addClass('discover-item-subtitle-clone').html('<span>'+text+'</span><span style="margin-left: 10px">'+text+'</span>');
    // 		$marquee.append($clone);
    // 		// animate_clone(complete_width);
    // 	}
    // });

    // $('.discover-item').on('mouseleave', function(){
    // 	var $marquee = $(this).find('.discover-item-marquee'),
    // 			$original = $marquee.find('.discover-item-subtitle'),
    // 			$clone = $marquee.find('.discover-item-subtitle-clone');
    // 			$original.show();
    // 			$clone.remove();
    // });
    /*---------*/
    /* RANKING */
    /*---------*/
    // marquee

    /*
    	$('body').on('mouseover', '.ranking-item.radio',  function(e){
    		var $marquee = $(this).find('.ranking-item-marquee'),
    				$original = $marquee.find('.ranking-item-subtitle'),
    				text = $original.html();

    		if(!$marquee.find('.ranking-item-subtitle-clone').length && $original.innerWidth() > $marquee.width()){
    			var complete_width = $original.width() + 10;
    			$original.hide();
    			$clone = $('<p></p>').addClass('ranking-item-subtitle-clone').html('<span>'+text+'</span><span style="margin-left: 10px">'+text+'</span>');
    			$marquee.append($clone);

    			// function animate_clone (){
    			// 	$clone.css({'text-indent': 0});
    			// 	$clone.animate({'text-indent': '-'+(complete_width)+'px'}, complete_width*15, 'linear', animate_clone);
    			// };

    			animate_clone(complete_width);
    		}
    	});

    	$('body').on('mouseleave', '.ranking-item.radio', function(){
    		var $marquee = $(this).find('.ranking-item-marquee'),
    				$original = $marquee.find('.ranking-item-subtitle'),
    				$clone = $marquee.find('.ranking-item-subtitle-clone');
    				$original.show();
    				$clone.remove();
    	});
*/

    /*-------------*/
    /* SLIDER NEWS */
    /*-------------*/
    /*
    	$('.slider-news-container').each(function(){
    		$(this).slick({
    			dots: false,
    			infinite: true,
    			speed: 150,
    			slidesToShow: 4,
    			slidesToScroll: 4,
    			centerMode: false,
    			draggable: true,
    			nextArrow: '<span class="fa fa-angle-right right"></span>',
    			prevArrow: '<span class="fa fa-angle-left left"></span>',
    			responsive: [{
    				breakpoint: 992,
    				settings: {
    					slidesToShow: 3,
    					slidesToScroll: 3
    				}
    			},
    			{
    				breakpoint: 768,
    				settings: 'unslick'
    			}]
    		});
    	});
			*/
    /*---------------*/
    /* ARTICLES GRID */
    /*---------------*/
    // MASONRY
    $(window).on('load', function () {
        $('.masonry').each(function () {
            $(this).isotope({
                itemSelector: '.grid-item',
                masonry: {
                    columnWidth: $('.grid-sizer')[0]
                }
            });
        });
    });

    // category links
    $(document).on('click', '[data-href]', function (e) {
        var href = $(this).data('href');
        window.location.href = href;
        return false;
    });

    /*-----------------*/
    /* ARTICLE GALLERY */
    /*-----------------*/
    /*
    	$('.article-gallery-slider').each(function(){
    		var gallery_id = $(this).data('gallery-large');
    		$(this).slick({
    			dots: false,
    			infinite: true,
    			speed: 150,
    			slidesToShow: 1,
    			draggable: true,
    			swipeToSlide: true,
    			adaptiveHeight: true,
    			prevArrow: '<button class="fa fa-angle-left article-gallery-prev"></button>',
    			nextArrow: '<button class="fa fa-angle-right article-gallery-next"></button>',
    			asNavFor: '.article-gallery-nav[data-gallery-small="'+gallery_id+'"]'
    		});

    		$('.article-gallery-nav[data-gallery-small="'+gallery_id+'"]').slick({
    			dots: false,
    			arrows: false,
    			infinite: true,
    			speed: 150,
    			slidesToShow: 8,
    			variableWidth: true,
    			draggable: true,
    			swipeToSlide: true,
    			focusOnSelect: true,
    			asNavFor: '.article-gallery-slider[data-gallery-large="'+gallery_id+'"]',
    			responsive: [
    				{ breakpoint: 990, settings: { slidesToShow: 8 }},
    				{ breakpoint: 910, settings: { slidesToShow: 7 }},
    				{ breakpoint: 830, settings: { slidesToShow: 6 }},
    				{ breakpoint: 740, settings: { slidesToShow: 5 }},
    				{ breakpoint: 640, settings: { slidesToShow: 4 }},
    				{ breakpoint: 580, settings: { slidesToShow: 7 }},
    				{ breakpoint: 500, settings: { slidesToShow: 6 }},
    				{ breakpoint: 400, settings: { slidesToShow: 5 }},
    				{ breakpoint: 360, settings: { slidesToShow: 7 }}
    			]
    		});
    	});
			*/
    /*--------------*/
    /* ARTICLE BARS */
    /*--------------*/
    function position_shares_bar($elem) {
        var $container = $elem.parent();
        if ($container.offset().top + $container.outerHeight() < $(document).scrollTop() + $(window).height()) {
            $elem.attr('data-scroll', 'scrolled'); // SEE ON ARTICLES CSS
            $elem.css('left', 0 + 'px');
        } else if ($container.offset().top < $(document).scrollTop() + $(window).height() - 260) {
            $elem.attr('data-scroll', 'scrolling');
            $elem.css('left', $container.offset().left + 'px');
        } else {
            $elem.attr('data-scroll', '');
            $elem.css('left', 0 + 'px');
        }
    }

    function position_breadcrumb_bar($elem) {
        var $container = $elem.parent();
        if (
            $container.offset().top + $container.outerHeight() <
            $(document).scrollTop() + $('.topbar').outerHeight() + 90
        ) {
            $elem.attr('data-scroll', 'scrolled'); // SEE ON ARTICLES CSS
            $elem.css('top', $container.outerHeight() - 90 + 'px');
            $elem.css('left', 0 + 'px');
        } else if ($container.offset().top < $(document).scrollTop() + $('.topbar').outerHeight()) {
            $elem.attr('data-scroll', 'scrolling');
            $elem.css('top', $('.topbar').outerHeight() + 'px');
            $elem.css('left', $container.offset().left + 'px');
        } else {
            $elem.attr('data-scroll', '');
            $elem.css('top', '0px');
            $elem.css('left', 0 + 'px');
        }
    }

    var $article_breadcrumb = $('.article-breadcrumb-bar');
    var $article_Shares = $('.article-bottom-bar');

    $article_Shares.each(function () {
        var $this = $(this);
        position_shares_bar($this);
    });

    $(document).on('scroll', function () {
        // Breadcrumbs bar
        $article_breadcrumb.each(function () {
            var $this = $(this);
            position_breadcrumb_bar($this);
        });

        // Share bar
        $article_Shares.each(function () {
            var $this = $(this);
            position_shares_bar($this);
        });
    });

    $(window).on('resize', function () {
        $article_Shares.each(function () {
            var $this = $(this);
            position_shares_bar($this);
        });
        $article_breadcrumb.each(function () {
            var $this = $(this);
            position_breadcrumb_bar($this);
        });
    });

    /*--------------*/
    /* ASIDE STICKY */
    /*--------------*/
    // var $aside_sticky = $('.aside-sticky');
    //
    // aside_sticky_top = !!$aside_sticky.length ? $aside_sticky.offset().top : 0;
    //
    // if ($aside_sticky.length) {
    // 	$(document).on('scroll', function (){
    //
    // 		// if (($(document).scrollTop() + $('.topbar').outerHeight() + $aside_sticky.outerHeight()) > ($('.article-content').offset().top + $('.article-content').outerHeight())) {
    // 		// 			$aside_sticky.attr('data-scroll', 'scrolled'); // SEE ON ARTICLES CSS
    // 		// 			var scrolled_top = $('.article-content').offset().top + $('.article-content').outerHeight() - aside_sticky_top - $aside_sticky.outerHeight();
    // 		// 			$aside_sticky.css('top', scrolled_top); // SEE ON ARTICLES CSS
    // 		// 	} else if (($(document).scrollTop() + $('.topbar').outerHeight()) > aside_sticky_top) { // Fixed
    // 		// 			$aside_sticky.attr('data-scroll', 'scrolling');
    // 		// 			$aside_sticky.attr('style', '');
    // 		// 			//$aside_sticky.css('top', $('.topbar').height()); // SEE ON ARTICLES CSS
    // 		// 	} else { // Initial status
    // 		// 			$aside_sticky.attr('data-scroll', '');
    // 		// 	}
    // 	});
    //
    // 	$(document).on('resize', function (){
    // 			aside_sticky_top = $aside_sticky.offset().top;
    // 	});
    // }

    /*-----------------------*/
    /* INSTAGRAM FEED FOOTER */
    /*-----------------------*/
    // var added = 0;
    // var canterofeed = new Instafeed({
    //     get: 'user',
    //     userId: instagramID,
    //     accessToken: '1202122660.5b9e1e6.760856e2e7d748f4bfe540b19eef9764',
    //     clientId: '1202122660',
    //     limit: 10,
    //     resolution: 'thumbnail',
    //     template:
    //         '<a href="{{link}}" class="footer-instagram-item" target="_blank"><div class="footer-instagram-item-img" style="background-image: url({{image}})"></div></a>',
    //     filter: function(image) {
    //         var imgurl = image.images.thumbnail.url;
    //         imgurl = imgurl.split('150x150');
    //         imgurl = imgurl.join('306x306');
    //         image.images.thumbnail.url = imgurl;
    //         added += image.type === 'image' ? 1 : 0;
    //         return image.type === 'image' && added <= 5;
    //     }
    // });

    //canterofeed.run();

    /*-----------*/
    /* ELLISPSIS */
    /*-----------*/
    $('.ellipsis').dotdotdot({
        ellipsis: ' ...',
        wrap: 'word',
        fallbackToLetter: true,
        after: null,
        watch: window,
        height: null,
        tolerance: 0,
        callback: function (isTruncated, orgContent) { },
        lastCharacter: {
            remove: [' ', ',', ';', '.'],
            noEllipsis: []
        }
    });

    /*--------*/
    /* MODALS */
    /*--------*/
    // function openModal(modalID, callback){
    // 	$('.modal').removeClass('show');
    // 	var $modal = $(modalID);

    // 	$modal.addClass('show');
    // 	$('body').addClass('modal-on');

    // 	if(callback) callback();
    // }

    // function closeModal(modalID, callback){
    // 	var $modal = $(modalID);

    // 	$modal.removeClass('show');
    // 	$('body').removeClass('modal-on');

    // 	if(callback) callback();
    // }

    // $(document).on('click', '[data-modal]', function(e) {
    //     e.preventDefault();
    //     var modalName = $(this).data('modal'),
    //         modalID = '#' + modalName + '-modal';

    //     openModal(modalID);
    // });

    // $('.modal-close, .modal-overlay').on('click', function(e) {
    //     if (e.target == this) {
    //         var modalID = '#' + $(this).closest('.modal')[0].id;

    //         closeModal(modalID);
    //     }
    // });

    /*--------------*/
    /* PHOTOGALLERY */
    /*--------------*/
    /*
    	$('.photogallery-slider').slick({
				speed: 150,
    		prevArrow: '<button type="button" class="photogallery-slider-arrows prev fa fa-angle-left"></button>',
    		nextArrow: '<button type="button" class="photogallery-slider-arrows next fa fa-angle-right"></button>',
    	});

    	$('.photogallery-slider').on('afterChange', function(event, slick, currentSlide){
    		var $curr_slide = $(this).find('.photogallery-slide.slick-current'),
    				$nav = $(this).siblings('.photogallery-info').find('.photogallery-nav'),
    				title = $curr_slide.data('title'),
    				description = $curr_slide.data('description');

    		$(this).siblings('.photogallery-info').find('.photogallery-slide-title').html(title);
    		$(this).siblings('.photogallery-info').find('.photogallery-slide-description').html(description);
    		$('.photogallery-nav-item', $nav).removeClass('active');
    		$('.photogallery-nav-item[data-slide="'+currentSlide+'"]', $nav).addClass('active');

    	});

    	$('.photogallery-nav-item').on('click', function(e){
    		var slide_id = $(this).data('slide');
    		var $slick_elem = $(this).closest('.photogallery-info').siblings('.photogallery-slider');
    		$slick_elem.slick('slickGoTo', slide_id);
    	});
*/
    /*------------------*/
    /* FORMS VALIDATION */
    /*------------------*/
    // $.extend($.validator.messages, {
    // 		required: "Este campo es obligatorio.",
    // 		email: "Ingresa un email vÃ¡lido.",
    // 		equalTo: "Please enter the same value again.",
    // });
    //
    // $('.form').validate({
    // 	errorClass: 'form-error-label',
    // 	errorPlacement: function(error, element) {
    // 		$(element).parent().after(error);
    // 	},
    // 	highlight: function(element) {
    // 		$(element).parent().addClass("error");
    // 	},
    // 	unhighlight: function(element) {
    // 		$(element).parent().removeClass("error");
    // 	}
    // });
});
