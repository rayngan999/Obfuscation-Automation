jQuery(function($) {
    // var instagramID = $("#instafeed").data("id");
    /*------------*/
    /* OFF CANVAS */
    /*------------*/

    var $html = $("html");

    $(".off-canvas-left-trigger").on("click", function(e) {
        $html.toggleClass("off-canvas-left-on");
    });

    $('.tags-dropdown').hover(function() {
        $(this).children('.tags-menu-dropdown').stop().slideToggle(400);
    });

    $('.tags-dropdown-offcanvas').on("click", function(e) {
        $(this).children('.tags-menu-dropdown-offcanvas').slideToggle(400);
    });

    var title = $('.context-bar-title');
    var titleString = (title && title[0]) ? title[0].innerText : '';

    if (titleString.length > 40) {
        var text_input = $('.context-bar-title');
        text_input.css("font-size", "15px");
    }

    $(".off-canvas-right-trigger").on("click", function(e) {
        $html.toggleClass("off-canvas-right-on");

        var parts = location.hostname.split(".");
        var subdomain = parts.shift();

        if (typeof $(this).data("tab") !== "undefined" && subdomain == "ar") {
            var tab_index = $(this).data("tab");
            $(".radios-tab").removeClass("active");
            $(".radios-tab")
                .eq(tab_index)
                .addClass("active");

            $(".radios-tab-block").css("left", tab_index * -100 + "%");
        }
    });

    $("#off-canvas-overlay").on("click", function(e) {
        $html.removeClass("off-canvas-left-on");
        $html.removeClass("off-canvas-right-on");
        e.preventDefault();
    });

    $(".off-canvas-close").on("click", function(e) {
        $html.removeClass("off-canvas-left-on");
        $html.removeClass("off-canvas-right-on");
        e.preventDefault();
    });

    $(document).keyup(function(e) {
        if ($("html").hasClass("off-canvas-right-on") || $("html").hasClass("off-canvas-left-on")) {
            if (e.which == 27) {
                $html.removeClass("off-canvas-left-on");
                $html.removeClass("off-canvas-right-on");
            }
        }
    });

    // carousel
    $(".menu-radios-list").each(function() {
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
            nextArrow: '<button class="menu-radios-list-arrows next fa fa-angle-right"></button>'
        });
    });

    $(".menu-radios-list").on("beforeChange", function(event, slick, currentSlide, nextSlide) {
        $(".menu-radios-info").hide();
        $('.menu-radios-info[data-tab="' + nextSlide + '"]').show();
    });

    /*-------------*/
    /* RADIOS TABS */
    /*-------------*/
    // $('.radios-tab').on('click', function(e){
    // 		$('.radios-tab').removeClass('active');
    // 		$(this).addClass('active');
    //
    // 		var tab_index = $(this).index();
    //
    // 		$('.radios-tab-block').css('left', (tab_index*-100) + '%');
    // });

    /*
    	$('.radios-music-tab').on('click', function(e){

					$('.radios-music-tab').removeClass('active');
    			$(this).addClass('active');

    			var tab_index = $(this).data('tab');

    			$('.radios-music-tab-content').hide();
    			$('.radios-music-tab-content').eq(tab_index).show();
    	});
			*/

    // $('.radios-vivo-tab').on('click', function(e){
    // 		$('.radios-vivo-tab').removeClass('active');
    // 		$(this).addClass('active');
    //
    // 		var tab_index = $(this).data('tab');
    //
    // 		$('.radios-vivo-tab-content').hide();
    // 		$('.radios-vivo-tab-content').eq(tab_index).show();
    // });

    /*-------------*/
    /* SCROLL BARS */
    /*-------------*/
    //$('.scrollbar-macosx').scrollbar();
    //$('.scrollbar-inner').scrollbar();

    /*--------------*/
    /* CONTEXT BARS */
    /*--------------*/
    var $context_bar = $(".context-bar");
    $(document).on("scroll", function() {
        $context_bar.each(function() {
            var $this = $(this),
                $container = $this.parent();
            if (typeof $container.offset() != "undefined") {
                if (
                    $container.offset().top + $container.outerHeight() <
                    $(document).scrollTop() + $(".topbar").outerHeight() + $this.outerHeight()
                ) {
                    // Left behid
                    $this.attr("data-scroll", "scrolled"); // SEE ON ARTICLES CSS
                } else if ($container.offset().top < $(document).scrollTop() + $(".topbar").outerHeight()) {
                    // Fixed
                    $this.attr("data-scroll", "scrolling");
                } else {
                    // Initial status
                    $this.attr("data-scroll", "");
                }
            }
        });
    });

    /*-------------*/
    /* PLAYER BARS */
    /*-------------*/
    var $player_bar = $(".player-box-info");
    $(document).on("scroll", function() {
        $player_bar.each(function() {
            var $this = $(this),
                $container = $this.parent();
            if (
                $container.offset().top + $container.outerHeight() - 60 <
                $(document).scrollTop() + $(".topbar").outerHeight()
            ) {
                // Fixed
                $this.attr("data-scroll", "scrolling");
            } else {
                // Initial status
                $this.attr("data-scroll", "");
            }
        });
    });

    /*-------------*/
    /* BACK TO TOP */
    /*-------------*/
    $(".footer-back-to-top").on("click", function(e) {
        e.preventDefault();

        $("html, body").animate({ scrollTop: 0 }, 1000);
    });

    /*---------------*/
    /* MOBILE SEARCH */
    /*---------------*/
    $(".open-mobile-search").on("click", function(e) {
        e.preventDefault();

        $("body").toggleClass("show-mobile-search");
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
    $(".live-radios-row").slick({
        dots: false,
        infinite: true,
        speed: 150,
        slidesToShow: 3,
        centerMode: false,
        variableWidth: false,
        draggable: true,
        swipeToSlide: true,
        arrows: true,
        focusOnSelect: false,
        initialSlide: 0,
        prevArrow: '<button type="button" class="live-radios-arrows prev fa fa-angle-left"></button>',
        nextArrow: '<button type="button" class="live-radios-arrows next fa fa-angle-right"></button>',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                variableWidth: true,
                centerMode: true,
                arrows: false
            }
        }]
    });

    $(window).on("resize", function() {
        if ($(window).width() >= 768) {
            $(".live-radios-row").slick("slickGoTo", 0, true);
        }
    });

    /*----------*/
    /* DISCOVER */
    /*----------*/
    // carousel
    /*
			$('.discover-items').each(function(){
    		var $slickNav = $(this).closest('.discover-row').find('.discover-row-nav');

    		$(this).slick({
    			dots: false,
				lazyLoad: 'ondemand',
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

    	// unfold
    	$('.discover-open').on('click', function(e){
    		var $discover = $(this).closest('.discover-block');
    		$discover.toggleClass('active');

    		if($discover.hasClass('active')) {
    			$discover.animate({height: '600px'}, 500, 'linear', function(){
    				$discover.css({'height': 'auto'});
    				var autoHeight = $discover.height();
    				$discover.css({'height': '600px'});
    				$discover.animate({height: autoHeight}, autoHeight, 'linear');
    			});
    		} else {
    			$discover.css({'height': '270px'});
				var discoverTop = $('.discover-block').scrollTop();
				$('html, body').animate({ scrollTop: discoverTop }, 600);
    		}
    	});
			*/

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

    			 function animate_clone (){
    				$clone.css({'text-indent': 0});
    				$clone.animate({'text-indent': '-'+(complete_width)+'px'}, complete_width*15, 'linear', animate_clone);
    			};

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
    $(window).on("load", function() {
        $(".masonry").each(function() {
            $(this).isotope({
                itemSelector: ".grid-item",
                masonry: {
                    columnWidth: $(".grid-sizer")[0]
                }
            });
        });
    });

    // category links
    $(document).on("click", "[data-href]", function(e) {
        var href = $(this).data("href");
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
        //  console.log('position_shares_bar::AdsSticky', AdsSticky)
        if (typeof AdsSticky != 'undefined' && AdsSticky == true) {
            $elem.attr("data-scroll", "");
            $elem.css("left", 0 + "px");
            return;
        }
        //
        var $container = $elem.parent();
        if ($container.offset().top + $container.outerHeight() < $(document).scrollTop() + $(window).height()) {
            $elem.attr("data-scroll", "scrolled"); // SEE ON ARTICLES CSS
            $elem.css("left", 0 + "px");
        } else if ($container.offset().top < $(document).scrollTop() + $(window).height() - 260) {
            $elem.attr("data-scroll", "scrolling");
            $elem.css("left", $container.offset().left + "px");
        } else {
            $elem.attr("data-scroll", "");
            $elem.css("left", 0 + "px");
        }
    }

    function position_breadcrumb_bar($elem) {
        var $container = $elem.parent();
        if (
            $container.offset().top + $container.outerHeight() <
            $(document).scrollTop() + $(".topbar").outerHeight() + 90
        ) {
            $elem.attr("data-scroll", "scrolled"); // SEE ON ARTICLES CSS
            $elem.css("top", $container.outerHeight() - 90 + "px");
            $elem.css("left", 0 + "px");
        } else if ($container.offset().top < $(document).scrollTop() + $(".topbar").outerHeight()) {
            $elem.attr("data-scroll", "scrolling");
            $elem.css("top", $(".topbar").outerHeight() + "px");
            $elem.css("left", $container.offset().left + "px");
        } else {
            $elem.attr("data-scroll", "");
            $elem.css("top", "0px");
            $elem.css("left", 0 + "px");
        }
    }

    var $article_breadcrumb = $(".article-breadcrumb-bar");
    var $article_Shares = $(".article-bottom-bar");

    $article_Shares.each(function() {
        var $this = $(this);
        position_shares_bar($this);
    });

    $(document).on("scroll", function() {
        // Breadcrumbs bar
        $article_breadcrumb.each(function() {
            var $this = $(this);
            position_breadcrumb_bar($this);
        });

        // Share bar
        $article_Shares.each(function() {
            var $this = $(this);
            position_shares_bar($this);
        });
    });

    $(window).on("resize", function() {
        $article_Shares.each(function() {
            var $this = $(this);
            position_shares_bar($this);
        });
        $article_breadcrumb.each(function() {
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
    //
    //
    // 		//console.log($('.topbar').height(), $('.aside-sticky').offset().top - $(window).scrollTop());
    //
    // 			if($('.topbar').height() >= $('.aside-sticky').offset().top - $(window).scrollTop()){
    //
    // 				//$aside_sticky.css('top', $('.aside-sticky').offset().top - $(window).scrollTop());
    //
    // 			}
    //
    // 			//if (($(document).scrollTop() + $('.topbar').outerHeight() + $aside_sticky.outerHeight()) > ($('.article-content').offset().top + $('.article-content').outerHeight())) {
    //
    // 			if($('.topbar').height() >= $('.aside-sticky').offset().top - $(window).scrollTop()){
    // 						$aside_sticky.attr('data-scroll', 'scrolled'); // SEE ON ARTICLES CSS
    // 						var scrolled_top = $('.article-content').offset().top + $('.article-content').outerHeight() - aside_sticky_top - $aside_sticky.outerHeight();
    // 						console.log("1");
    // 						$aside_sticky.css('top', $('.topbar').height()); // SEE ON ARTICLES CSS
    // 						$aside_sticky.css('position', 'fixed'); // SEE ON ARTICLES CSS
    //
    //
    // 			} else if (($(document).scrollTop() + $('.topbar').outerHeight()) > aside_sticky_top) { // Fixed
    // 					console.log("2");
    // 					$aside_sticky.attr('data-scroll', 'scrolling');
    // 					$aside_sticky.attr('style', '');
    // 			} else { // Initial status
    // 				console.log("3");
    // 					$aside_sticky.attr('data-scroll', '');
    // 			}
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
    // 	get: "user",
    // 	userId: instagramID,
    // 	accessToken: "1202122660.5b9e1e6.760856e2e7d748f4bfe540b19eef9764",
    // 	clientId: "1202122660",
    // 	limit: 10,
    // 	resolution: "thumbnail",
    // 	template:
    // 		'<a href="{{link}}" class="footer-instagram-item" target="_blank"><div class="footer-instagram-item-img" style="background-image: url({{image}})"></div></a>',
    // 	filter: function(image) {
    // 		var imgurl = image.images.thumbnail.url;
    // 		imgurl = imgurl.split("150x150");
    // 		imgurl = imgurl.join("306x306");
    // 		image.images.thumbnail.url = imgurl;
    // 		added += image.type === "image" ? 1 : 0;
    // 		return image.type === "image" && added <= 5;
    // 	}
    // });

    //canterofeed.run();

    /*-----------*/
    /* ELLISPSIS */
    /*-----------*/
    $(".ellipsis").dotdotdot({
        ellipsis: " ...",
        wrap: "word",
        fallbackToLetter: true,
        after: null,
        watch: window,
        height: null,
        tolerance: 0,
        callback: function(isTruncated, orgContent) {},
        lastCharacter: {
            remove: [" ", ",", ";", "."],
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

    // $(document).on('click', '[data-modal]', function(e){
    // 	e.preventDefault();
    // 	var modalName = $(this).data('modal'),
    // 			modalID = '#' + modalName + '-modal';

    // 	openModal(modalID);
    // });

    // $('.modal-close, .modal-overlay').on('click', function(e){
    // 	if(e.target == this){
    // 		var modalID = '#' + $(this).closest('.modal')[0].id;

    // 		closeModal(modalID);
    // 	}

    // });

    /*--------------*/
    /* PHOTOGALLERY */
    /*--------------*/
    $(".photogallery-slider").slick({
        speed: 150,
        prevArrow: '<button type="button" class="photogallery-slider-arrows prev fa fa-angle-left"></button>',
        nextArrow: '<button type="button" class="photogallery-slider-arrows next fa fa-angle-right"></button>'
    });

    $(".photogallery-slider").on("afterChange", function(event, slick, currentSlide) {
        var $curr_slide = $(this).find(".photogallery-slide.slick-current"),
            $nav = $(this)
            .siblings(".photogallery-info")
            .find(".photogallery-nav"),
            title = $curr_slide.data("title"),
            description = $curr_slide.data("description"),
            link = $curr_slide.data("link");

        $(this)
            .siblings(".photogallery-info")
            .find(".photogallery-slide-link")
            .attr("href", link);
        $(this)
            .siblings(".photogallery-info")
            .find(".photogallery-slide-title")
            .html(title);
        $(this)
            .siblings(".photogallery-info")
            .find(".photogallery-slide-description")
            .html(description);
        $(".photogallery-nav-item", $nav).removeClass("active");
        $('.photogallery-nav-item[data-slide="' + currentSlide + '"]', $nav).addClass("active");
    });

    $(".photogallery-nav-item").on("click", function(e) {
        var slide_id = $(this).data("slide");
        var $slick_elem = $(this)
            .closest(".photogallery-info")
            .siblings(".photogallery-slider");
        $slick_elem.slick("slickGoTo", slide_id);
    });

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

    // FACEBOOK SHARE
    window.fbAsyncInit = function() {
        FB.init({
            appId: jQuery('meta[name="facebook:app_id"]').attr("content"),
            xfbml: true,
            version: "v2.6"
        });
    };
    (function(d, s, id) {
        var js,
            fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");

    //TWITTER SHARE
    $.fn.SocialSharePopup = function(e, intWidth, intHeight, blnResize) {
        e.preventDefault();
        intWidth = intWidth || "500";
        intHeight = intHeight || "400";
        strResize = blnResize ? "yes" : "no";

        var share = $(this).attr("data-share");
        var title = $(this).attr("data-title");
        var link = $(this).attr("data-link");

        console.log(link);
        console.log(title);
        var url = urlShortener(link);

        if (share == "twitter") url = "https://twitter.com/share?url=" + url + "&amp;text=" + title;
        else if (share == "google") url = "https://plus.google.com/share?url=" + url;

        var strTitle = typeof this.attr("data-title") !== "undefined" ? this.attr("data-title") : "Social Share",
            strParam = "width=" + intWidth + ",height=" + intHeight + ",resizable=" + strResize,
            objWindow = window.open(url, strTitle, strParam).focus();
    };

    $(document).ready(function() {
        $("[data-share]").on("click", function(e) {
            var share_type = $(this).data("share");

            switch (share_type) {
                case "facebook":
                    var title = $(this).data("title");
                    var description = $(this).data("desc");
                    var img = $(this).data("img");
                    var link = $(this).data("link");
                    FB.ui({
                            method: "share",
                            href: link,
                            picture: img,
                            title: title,
                            description: description,
                            caption: ""
                        },
                        function(response) {}
                    );
                    e.preventDefault();
                    break;
                case "twitter":
                    $(this).SocialSharePopup(e);
                    break;
                case "google":
                    $(this).SocialSharePopup(e);
                    break;
                case "whatsapp":
                    break;
            }
        });
    });

    var url_base = jQuery('meta[name="url_base"]').attr("content"),
        comscore_c2 = jQuery('meta[name="comscore:c2"]').attr("content"),
        comscore_ns_site = jQuery('meta[name="comscore:ns_site"]').attr("content"),
        comscore_name = jQuery('meta[name="comscore:name"]').attr("content"),
        cxense_id = jQuery('meta[name="cxense:id"]').attr("content");
    var cs_name = comscore_name.split("."),
        url_name = cs_name[1];

    function generateEvent(event, info) {
        var rand = Math.random(),
            time = getCurrentTime();
        // GA
        if (typeof _gaq !== "undefined") {
            _gaq.push(["_trackPageview", "/" + url_name + ".event=" + event + ".info=" + info + ".time=" + time]);
        } else if (typeof ga !== "undefined") {
            ga("send", "pageview", {
                page: "/" + url_name + ".event=" + event + ".info=" + info + ".time=" + time,
                title: document.title
            });
        }
        // cXense
        if (typeof cX !== "undefined") {
            cX.initializePage();
            cX.callQueue.push(["setSiteId", cxense_id]);
            cX.callQueue.push(["setCustomParameters", { "page=": url_name, event: event, info: info, time: time }]);
            cX.callQueue.push(["sendPageViewEvent"]);
        }
        // DAX
        $.ajax({
            url: url_base + "/comscore-pageview.txt?rand=" + rand,
            type: "GET"
        });
        // <![CDATA[
        function udm_(e) {
            var t = "comScore=",
                n = document,
                r = n.cookie,
                i = "",
                s = "indexOf",
                o = "substring",
                u = "length",
                a = 2048,
                f,
                l = "&ns_",
                c = "&",
                h,
                p,
                d,
                v,
                m = window,
                g = m.encodeURIComponent || escape;
            if (r[s](t) + 1)
                for (d = 0, p = r.split(";"), v = p[u]; d < v; d++)
                    (h = p[d][s](t)), h + 1 && (i = c + unescape(p[d][o](h + t[u])));
            (e +=
                l +
                "_t=" +
                +new Date() +
                l +
                "c=" +
                (n.characterSet || n.defaultCharset || "") +
                "&c8=" +
                g(n.title) +
                i +
                "&c7=" +
                g(n.URL) +
                "&c9=" +
                g(n.referrer)),
            e[u] > a &&
                e[s](c) > 0 &&
                ((f = e[o](0, a - 8).lastIndexOf(c)), (e = (e[o](0, f) + l + "cut=" + g(e[o](f + 1)))[o](0, a))),
                n.images ?
                ((h = new Image()), m.ns_p || (ns_p = h), (h.src = e)) :
                n.write("<", "p", "><", 'img src="', e, '" height="1" width="1" alt="*"', "><", "/p", ">");
        }
        udm_(
            "http" +
            (document.location.href.charAt(4) == "s" ? "s://sb" : "://b") +
            ".scorecardresearch.com/b?c1=2&c2=" +
            comscore_c2 +
            "&ns_site=" +
            comscore_ns_site +
            "&name=" +
            comscore_name +
            ".event=" +
            event +
            ".info=" +
            info +
            ".time=" +
            time
        );
        // ]]>
    }

    function getCurrentTime() {
        var date = new Date();
        return date.getTime();
    }
});

//OVERLAY
function openOverlay(olEl) {
    $oLay = $(olEl);

    if ($("#overlay-shade").length == 0) $("body").prepend('<div id="overlay-shade"></div>');

    $("#overlay-shade").fadeTo(300, 0.6, function() {
        var props = {
            oLayWidth: $oLay.width(),
            scrTop: $(window).scrollTop(),
            viewPortWidth: $(window).width()
        };

        var leftPos = (props.viewPortWidth - props.oLayWidth) / 2;

        $oLay
            .css({
                display: "block",
                opacity: 0,
                top: "-=300",
                left: leftPos + "px"
            })
            .animate({
                    top: props.scrTop + 40,
                    opacity: 1
                },
                600
            );
    });
}

function closeOverlay() {
    $(".overlay").animate({
            top: "-=300",
            opacity: 0
        },
        400,
        function() {
            $("#overlay-shade").fadeOut(300);
            $(this).css("display", "none");
        }
    );
}
//------------------------------------

/* ACORTAR URLS */
// function updateURL(link) {
//   var url = getParameterByName(link, 'url');
//   var shortUrl = urlShortener(url);
//   var newUrl = replaceUrlParam(link, 'url', shortUrl);
//
//   return newUrl;
// }
//
// function getParameterByName(url, paramName) {
//   if (!url) url = window.location.href;
//   paramName = paramName.replace(/[\[\]]/g, "\\$&");
//   var regex = new RegExp("[?&]" + paramName + "(=([^&#]*)|&|#|$)"),
//     results = regex.exec(url);
//   if (!results) return null;
//   if (!results[2]) return '';
//   return decodeURIComponent(results[2].replace(/\+/g, " "));
// }



function urlShortener(url) {
    var shorturl;

    $.ajax({
        type: "POST",
        url: "https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyBnWIXtPgSSf7k-L3mT7EDAKIw6vowjOGM",
        data: '{"longUrl": "' + url + '"}',
        dataType: "json",
        headers: {
            "Content-Type": "application/json"
        },
        success: function(json) {
            shorturl = json.id;
        },
        async: false
    });
    return shorturl;
}

jQuery(window).load(function() {
    iFrameResize({ log: false }, "#iframeBolilleroMundial");
    //$('.single iframe').iFrameResize([{'resizedCallback':iframeResizeCallback()}]);
    var iframes = $(".single iframe");
    $.each(iframes, function(k, v) {
        var src = $(v).attr("src");
        if (typeof src != "undefined" && src.indexOf("data.cienradios.com") >= 0) {
            $(v).iFrameResize();
        }
    });
});

// function replaceUrlParam(url, paramName, paramValue){
//   var pattern = new RegExp('\\b('+paramName+'=).*?(&|$)');
//   if(url.search(pattern)>=0){
//     return url.replace(pattern,'$1' + paramValue + '$2');
//   }
//   return url + (url.indexOf('?')>0 ? '&' : '?') + paramName + '=' + paramValue;
// }
/*-----------------*/