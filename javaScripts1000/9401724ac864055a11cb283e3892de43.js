// @codekit-append "main.js";

(function ($) {
    /* $ rappresenta la nostra versione di jQuery, abbiamo dichiarato la variabile nell'head dell'html, subito dopo l'inclusione di jQuery */

    /* Variabili globali */
    window.isMobile = false;
		
    /* Funzioni Globali */
    var responsiveResize = function () {
        if (window.matchMedia("(max-width: 1023px)").matches) {
            $('body')
                .addClass('cc-mobile')
                .removeClass('cc-desktop');
            window.isMobile = true;
        } else {
            $('body')
                .addClass('cc-desktop')
                .removeClass('cc-mobile');
            window.isMobile = false;
        }

        visualSliderMobile();

        aboutNumbersMobile();

        initChampionFacility();

        initListingCategorySliderMobile();

        palinsestoMain();
    };

    var syncSearchBars = function () {
        var dest;
        var source;
        if (window.matchMedia("(max-width: 1023px)").matches) {

            dest = $(".cc-header-desktop").find("input[name=search-terms]");
            source = $(".cc-header-mobile").find("input[name=search-terms]");
        } else {
            source = $(".cc-header-desktop").find("input[name=search-terms]");
            dest = $(".cc-header-mobile").find("input[name=search-terms]");
        }
        dest.val(source.val());
    }

    //Set live class to the real live event
    var setLiveEventClass = function (slidesContainer) {
        var today = new Date().today();
        var timeNow = new Date().timeNow();
        var currentDateTime = Date.parse(today + " " + timeNow);
        var timesAvailableElements = slidesContainer.find('.cc-front .cc-time');
        var liveEventFound = false;
        for (var i = 0; i < timesAvailableElements.length; i++) {

            var timeAvailableElement = $(timesAvailableElements[i]);

            var timeStart = getTimefromElement(timeAvailableElement, "time-start");
            var dateStart = getDatefromElement(timeAvailableElement, "time-start");
            var specificEventStartDateTime = Date.parse(dateStart + " " + timeStart);

            var timeEnd = getTimefromElement(timeAvailableElement, "time-end");
            var dateEnd = getDatefromElement(timeAvailableElement, "time-end");
            var specificEventEndDateTime = Date.parse(dateEnd + " " + timeEnd);

            if ((specificEventStartDateTime <= currentDateTime) && (currentDateTime < specificEventEndDateTime)) {
                timeAvailableElement.closest('.cc-event').addClass('cc-live');

                setTimeout(function() {
                        var slidesContainer = $('.cc-palinsesto-slides');
                        var events = slidesContainer.find('.cc-front .cc-time');
                        events.each(function(index, element) {
                            jQueryV2(element.closest('.cc-event')).removeClass('cc-live');
                        });
                        setLiveEventClass(slidesContainer);
                        slickGoToSlide(slidesContainer, '.cc-live');
                    },
                    specificEventEndDateTime - currentDateTime);
                liveEventFound = true;
                break;
            } else {
                timeAvailableElement.closest('.cc-event').removeClass('cc-live');
            }
        }
        if (!liveEventFound && timesAvailableElements.length>0) {
            //NOTE: The reloading of the whole page has been selected over the reloading of the single component because,
            //the change required to reload component should be inside the javascript for that particular partial view. However
            //the logic for deciding which event is live is in this file and i find it inappropriate to insert logic for
            //single components in the js used by all pages of supertennis
            //window.location.reload(true);
        }
    };

    var stringIsNotNullOrEmpty = function (value) {
        return value != null && value != "" && typeof value != 'undefined';
    };

    var refreshpickerSelect = function() {
        $('.selectpicker').selectpicker('refresh');
    };

    var textareaAutoResize=function (textareaObject) {
        var offset = textareaObject.prop('offsetHeight') - textareaObject.prop('clientHeight');
        textareaObject.css('height', 'auto').css('height',textareaObject.prop('scrollHeight') + offset);
    };
    $(document).on("keyup change keydown paste cut", '.cc-textarea-autosize', function () {
        textareaAutoResize($(this));
    });

    $(document).on("click", '.cc-comments-section .cc-col-text .cc-button-reply.cc-button-reply-active', function () {
        $(this).removeClass('cc-button-reply-active');
        $(this).closest('.cc-col-text').find('.cc-reply-area').slideToggle(200).find('.cc-textarea').focus();
    });


    var renderPickerSelect = function () {
        $('.selectpicker').selectpicker('render');
    };

    var convertUtcDateToLocalDate = function(date) {
        var currentDate = new Date(date);
        var offset = -(currentDate.getTimezoneOffset());
        var minutes = currentDate.getMinutes();
        minutes += offset;
        currentDate.setMinutes(minutes);
        return currentDate;
    }

    /*use slick plugin to go to specific slide */
    var slickGoToSlide = function (slidesContainer, classFocusElement) {
        if (stringIsNotNullOrEmpty(classFocusElement)) {
            if (slidesContainer.find(classFocusElement).parent().attr('data-slick-index') !== null &&
                slidesContainer.find(classFocusElement).parent().attr('data-slick-index') !== undefined) {
                var liveEvent = parseInt(slidesContainer.find(classFocusElement).parent().attr('data-slick-index'));
                if (slidesContainer.length > 0) {
                    slidesContainer.slick('slickGoTo', liveEvent);
                }
            }
        }
    };

    /* Header Search */
    var searchButton = function () {
        $('.cc-header .cc-main-header .cc-link-search').click(function () {
            $('.cc-header .cc-main-header .cc-find').fadeIn(200);
            $('.cc-header .cc-main-header .cc-find .cc-input-find').focus();
        });

        $('.cc-header .cc-main-header .cc-find .cc-svg').click(function () {
            $('.cc-header .cc-main-header .cc-find').fadeOut(200);
        });
    };


    /* Steacky Header */
    var steackyHeader = function () {
        if ($(document).scrollTop() > 34) {
            $('.cc-header .cc-main-header .cc-content-info').addClass('cc-sticky');
        } else {
            $('.cc-header .cc-main-header .cc-content-info').removeClass('cc-sticky');
        }
    };

    /* Funzionamento menu mobile */
    var mobileMenu = function () {
        $(document).on("click", '.cc-header .cc-header-mobile .cc-content-button-menu', function () {
            $('.cc-header .cc-header-mobile .cc-nav').toggleClass('cc-nav-visible');
        });

        $(document).on("click", '.cc-header .cc-header-mobile .cc-nav .cc-link-parent', function () {
            $(this).parent().find('.cc-internal-menu').fadeIn(200);
            $('.cc-header .cc-header-mobile .cc-nav').addClass('cc-exploded');
            $('.cc-header .cc-header-mobile .cc-nav .cc-button-back').fadeIn(200);
        });

        $(document).on("click", '.cc-header .cc-header-mobile .cc-nav .cc-button-back', function () {
            $('.cc-header .cc-header-mobile .cc-nav .cc-button-back').fadeOut(200);
            $('.cc-header .cc-header-mobile .cc-nav').removeClass('cc-exploded');
            $('.cc-header .cc-header-mobile .cc-nav .cc-internal-menu').fadeOut(200);
        });
    };


    /* Visual slider mobile */
    var visualSliderMobile = function () {
        if ($('.cc-visual-slider.cc-animated').length > 0) {

            if (window.isMobile) {
                if ($('.cc-visual-slider.cc-animated .slick-slide').length == 0) {
                    $('.cc-visual-slider.cc-animated').each(function () {
                        var $currentSlide = $(this).find('.cc-gallery-pagination .cc-current');
                        var $totalSlide = $(this).find('.cc-gallery-pagination .cc-total');
                        var $slickElement = $(this).find('.cc-slides');


                        $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
                            var i = 0;

                            if (slick.slideCount > 0) {
                                i = (currentSlide ? currentSlide : 0) + 1;
                            } else {
                                i = 0;
                            }

                            $currentSlide.text(i);
                            $totalSlide.text(slick.slideCount);

                        });

                        if ( $(this).hasClass('cc-visual-video-img') ) {
                            $(this).find('.cc-mobile-hp-news-slides').slick({
                                lazyLoad: 'progressive',
                                infinite: true,
                                autoplay: false,
                                autoplaySpeed: 5000,
                                speed: 700,
                                slidesToShow: 1,
                                adaptiveHeight: true,
                                prevArrow: '<div class="cc-svg cc-svg-arrow-caret-left"><span>PrevGallery</span></div>',
                                nextArrow: '<div class="cc-svg cc-svg-arrow-caret-right"><span>Next</span></div>',
                                appendArrow: $('.cc-visual-slider .cc-content-graphic-news .cc-content-pagination')
                            });
                        } else {
                            $(this).find('.cc-mobile-hp-news-slides').slick({
                                lazyLoad: 'progressive',
                                infinite: true,
                                autoplay: false,
                                autoplaySpeed: 5000,
                                speed: 700,
                                slidesToShow: 1,
                                adaptiveHeight: false,
                                prevArrow: '<div class="cc-svg cc-svg-arrow-caret-left"><span>PrevGallery</span></div>',
                                nextArrow: '<div class="cc-svg cc-svg-arrow-caret-right"><span>Next</span></div>',
                                appendArrow: $('.cc-visual-slider .cc-content-graphic-news .cc-content-pagination')
                            });
                        }
                    });
                }
            } else {
                if ($('.cc-visual-slider.cc-animated .slick-slide').length > 0) {
                    $('.cc-visual-slider.cc-animated').each(function () {
                        $(this).find('.cc-mobile-hp-news-slides').slick('unslick');
                    });
                }

            }

        }
    };


    /* About - gestione della sezione numeri durante lo scroll */
    var aboutNumbersDesktop = function () {

    };

    /* About - gestione della sezione numeri come slider */
    var aboutNumbersMobile = function () {

        if ($('.cc-wrapper.cc-wrapper-about').length > 0) {

            if (!window.isMobile) {

                if ($('.cc-number-mobile-slider .slick-slide').length > 0) {
                    $('.cc-number-mobile-slider').each(function () {
                        $(this).slick('unslick');
                    });
                }

            } else {

                if ($('.cc-number-mobile-slider .slick-slide').length == 0) {
                    $('.cc-number-mobile-slider').each(function () {

                        $(this).slick({
                            lazyLoad: 'progressive',
                            infinite: true,
                            autoplay: false,
                            autoplaySpeed: 5000,
                            speed: 700,
                            centerMode: true,
                            centerPadding: '20%',
                            slidesToShow: 1,
                            adaptiveHeight: false,
                            prevArrow: '<div class="cc-svg cc-svg-arrow-caret-left"><span>PrevGallery</span></div>',
                            nextArrow: '<div class="cc-svg cc-svg-arrow-caret-right"><span>Next</span></div>',
                            arrows: false
                        });
                    });
                }
            }
        }

    };

    /* About - Gestione delle card delle persone */
    var aboutPeopleCard = function () {

        if ($('.cc-wrapper.cc-wrapper-about .cc-person-container .cc-person').length > 0) {
            $('.cc-wrapper.cc-wrapper-about .cc-person .cc-front .cc-button-info').click(function () {
                $(this).parent().parent().find('.cc-back').fadeIn(200);
            });
            $('.cc-wrapper.cc-wrapper-about .cc-person .cc-back .cc-button-close').click(function () {
                $(this).parent().fadeOut(200);
            });
        }

    };

    /* Palinsesto slider */
    var palinsesto = function () {

        if ((($('.cc-wrapper.cc-wrapper-live-tv').length > 0) || ($('.cc-wrapper.cc-wrapper-home-page').length > 0)) && ($('.cc-palinsesto-slider').length > 0)) {

            if ($('.cc-palinsesto-slider .slick-slide').length == 0) {
                $('.cc-palinsesto-slider').each(function () {
                    var slidesContainer = $(this).find('.cc-palinsesto-slides');

                    slidesContainer.slick({
                        lazyLoad: 'progressive',
                        infinite: false,
                        autoplay: false,
                        autoplaySpeed: 5000,
                        speed: 700,
                        slidesToScroll: 1,
                        slidesToShow: 5,
                        adaptiveHeight: false,
                        prevArrow: '<button class="cc-slider-prev"></button>',
                        nextArrow: '<button class="cc-slider-next"></button>',
                        appendArrow: $('.cc-palinsesto-slider .cc-content-button .cc-button'),
                        responsive: [
                            {
                                breakpoint: 1199,
                                settings: {
                                    slidesToShow: 4
                                }
                            },
                            {
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: 3
                                }
                            },
                            {
                                breakpoint: 767,
                                settings: {
                                    slidesToShow: 2
                                }
                            },
                            {
                                breakpoint: 480,
                                settings: {
                                    slidesToShow: 1
                                }
                            }
                        ]
                    });
                    setLiveEventClass(slidesContainer);
                    setContentInfoEvent(slidesContainer);
                    slickGoToSlide(slidesContainer, '.cc-live');
                });
            }
        }
    };
    var setContentInfoEvent = function (container) {
        var events = container.find('.cc-content-time-back .cc-time');

        for (var i = 0; i < events.length; i++) {
            var timeAvailableElement = $(events[i]);
            timeAvailableElement.text(getTimefromElement(timeAvailableElement, "time-start") + " - " + getTimefromElement(timeAvailableElement, "time-end"));
        }
    }
    var setEventStartTime=function(container) {
        var timesAvailableElements = container.find('.cc-front .cc-time');

        for (var i = 0; i < timesAvailableElements.length; i++) {
            var timeAvailableElement = $(timesAvailableElements[i]);
            timeAvailableElement.text(getTimefromElement(timeAvailableElement, "time-start"));
        }
    }
    function getTimefromElement(timeAvailableElement,dataAttributeName) {
        if (timeAvailableElement === null ||
            timeAvailableElement === 'undefined' ||
            timeAvailableElement.length === 0) {
            return "";
        }
        var specificEventTime = timeAvailableElement.data(dataAttributeName);
        var convertedDate = convertUtcDateToLocalDate(specificEventTime);
        return convertedDate.timeNow();
    }
    function getDatefromElement(dateAvailableElement, dataAttributeName) {
        if (dateAvailableElement === null ||
            dateAvailableElement === 'undefined' ||
            dateAvailableElement.length === 0) {
            return "";
        }
        var specificEventDate = dateAvailableElement.data(dataAttributeName);
        var convertedDate = convertUtcDateToLocalDate(specificEventDate);
        return convertedDate.today();
    }

    var palinsestoSpecific = function (container, index) {
        setEventStartTime(container);
        container.slick({
            lazyLoad: 'progressive',
            infinite: false,
            autoplay: false,
            autoplaySpeed: 5000,
            speed: 700,
            slidesToShow: 5,
            adaptiveHeight: false,
            prevArrow: '<button class="cc-slider-prev"></button>',
            nextArrow: '<button class="cc-slider-next"></button>',
            appendArrow: $('.cc-palinsesto-slider .cc-content-button .cc-button'),
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

        if (index == "1") {
            //setLiveEventClass(container);
            setContentInfoEvent(container);
            slickGoToSlide(container, '.cc-live');
        }

    };


    /* AGGIUNTA FUNZIONE PER PALINSESTO SLIDER IN PAGINA PALINSESTO */
    var palinsestoMain = function () {

        if (($('.cc-wrapper.cc-wrapper-palinsesto').length > 0) && ($('.cc-palinsesto-slider').length > 0)) {
			return false;
            if (window.isMobile) {
                if ($('.cc-palinsesto-slider .slick-slide').length == 0) {

                    $('.cc-palinsesto-slider').each(function () {
                        var slidesContainer = $(this).find('.cc-palinsesto-slides');

                        slidesContainer.slick({
                            lazyLoad: 'progressive',
                            infinite: false,
                            autoplay: false,
                            autoplaySpeed: 5000,
                            speed: 700,
                            slidesToScroll: 1,
                            slidesToShow: 2,
                            adaptiveHeight: false,
                            prevArrow: '<button class="cc-slider-prev"></button>',
                            nextArrow: '<button class="cc-slider-next"></button>',
                            appendArrow: $('.cc-palinsesto-slider .cc-content-button .cc-button'),
                            responsive: [
                                {
                                    breakpoint: 480,
                                    settings: {
                                        slidesToShow: 1
                                    }
                                }
                            ]
                        });
                        setLiveEventClass(slidesContainer);
                        slickGoToSlide(slidesContainer, '.cc-live');
                    });
                }

            } else {

                if ($('.cc-palinsesto-slider .slick-slide').length != 0) {

                    $('.cc-palinsesto-slider').each(function () {
                        var slidesContainer = $(this).find('.cc-palinsesto-slides');
                        slidesContainer.slick('unslick');

                    });
                }

                $('.cc-palinsesto-slider').each(function () {
                    var slidesContainer = $(this).find('.cc-palinsesto-slides');
                });

            }


        }
    };

    /* Settare l'icona favoriti su attiva o no */
    var setFavoriteIcon = function () {
        $(document).on('click', '.cc-content-category .cc-favorite-icon', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).parent().toggleClass('cc-favorite');
        });
    };





    $(document).on("click", ".cc-wrapper .cc-button-show-chat", function () {
        $('.cc-live-tv-visual .cc-col-chat').fadeIn(350);
    });
    $(document).on("click", ".cc-wrapper .cc-live-tv-visual .cc-chat-head .cc-close-button", function () {
        $('.cc-live-tv-visual .cc-col-chat').fadeOut(350);
    });



    $(document).on("click", ".cc-live-tv-visual .cc-col-chat .cc-chat-main .cc-report", function () {
        $('.cc-overlay-report').fadeIn(350);
    });

    $(document).on("click", ".cc-comments-section .cc-content-message .cc-content-text .cc-report", function () {
        $('.cc-overlay-report').fadeIn(350);
    });

    $(document).on("click", ".cc-comments-section .cc-content-message .cc-content-text .cc-delete", function () {
        $('.cc-overlay-delete').fadeIn(350);
    });











    /* Fa scrollare la chat... Funzione da richiamare quando scrivi un nuovo messaggio */
    var chatScrollDown = function () {
        if ($('.cc-chat-main').length > 0) {
            var i = 0;

            $('.cc-chat-main .cc-content-message').each( function () {
                i+= $(this).height();
            });

            $('.cc-chat-main').animate({
                scrollTop: i
            }, 500);
        }
    };

    //get time now "HH:MM"
    Date.prototype.timeNow = function () {
        return ((this.getHours() < 10) ? "0" : "") + this.getHours() + ":" + ((this.getMinutes() < 10) ? "0" : "") + this.getMinutes();
    };

    //get today date "MM/dd/yyyy"
    Date.prototype.today = function () {
        return (((this.getMonth() + 1) < 10) ? "0" : "") + (this.getMonth() + 1) + "/" + ((this.getDate() < 10) ? "0" : "") + this.getDate() + "/" + this.getFullYear();
    };



    /* Champion Card Slider */
    var championCardSlider = function () {

        if ($('.cc-champion-card-slider').length > 0) {

            if ($('.cc-champion-card-slider .slick-slide').length == 0) {
                $('.cc-champion-card-slider').each(function () {
                    var slidesContainer = $(this).find('.cc-champion-card-slides');

                    slidesContainer.slick({
                        lazyLoad: 'progressive',
                        infinite: false,
                        autoplay: false,
                        autoplaySpeed: 5000,
                        speed: 700,
                        slidesToScroll: 1,
                        slidesToShow: 4,
                        adaptiveHeight: false,
                        prevArrow: '<button class="cc-slider-prev"></button>',
                        nextArrow: '<button class="cc-slider-next"></button>',
                        appendArrow: $('.cc-champion-card-slider'),
                        responsive: [
                            {
                                breakpoint: 1023,
                                settings: {
                                    infinite: true,
                                    centerMode: true,
                                    centerPadding: '10%',
                                    slidesToShow: 3
                                }
                            },
                            {
                                breakpoint: 767,
                                settings: {
                                    infinite: true,
                                    centerMode: true,
                                    centerPadding: '10%',
                                    slidesToShow: 2
                                }
                            },
                            {
                                breakpoint: 480,
                                settings: {
                                    infinite: true,
                                    centerMode: true,
                                    centerPadding: '8%',
                                    slidesToShow: 1
                                }
                            }
                        ]
                    });
                });
            }
        }
    };





    /* Gallery Slider */ /* TEO */
    var gallerySlider = function () {

        if ($('.cc-gallery-slider').length > 0) {

            if ($('.cc-gallery-slider .cc-slider .slick-slide').length == 0) {
                $('.cc-gallery-slider .cc-slider').each(function () {
                    var slidesContainer = $(this);

                    var $currentSlide = $(this).parent().find('.cc-gallery-pagination .cc-current');
                    var $totalSlide = $(this).parent().find('.cc-gallery-pagination .cc-total');
                    var $slickElement = $(this);

                    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
                        var i = 0;

                        if (slick.slideCount > 0) {
                            i = (currentSlide ? currentSlide : 0) + 1;
                        } else {
                            i = 0;
                        }

                        $currentSlide.text(i);
                        $totalSlide.text(slick.slideCount);

                    });


                    slidesContainer.slick({
                        lazyLoad: 'progressive',
                        infinite: false,
                        autoplay: false,
                        autoplaySpeed: 5000,
                        speed: 700,
                        slidesToScroll: 1,
                        slidesToShow: 1,
                        centerMode: true,
                        centerPadding: '20%',
                        adaptiveHeight: true,
                        prevArrow: '<button class="cc-slider-prev"></button>',
                        nextArrow: '<button class="cc-slider-next"></button>',
                        appendArrow: $('.cc-champion-card-slider'),
                        responsive: [
                            {
                                breakpoint: 1023,
                                settings: {
                                    centerPadding: '15%'
                                }
                            },
                            {
                                breakpoint: 767,
                                settings: {
                                    centerPadding: '8%'
                                }
                            },
                            {
                                breakpoint: 480,
                                settings: {
                                    centerPadding: '0%'
                                }
                            }
                        ]
                    });
                });
            }
        }
    };


    /* Palinsesto apre overlay info aggiuntive */
    var palinsestoInfoOverlayToggle = function () {

        if ($('.cc-palinsesto-slider').length > 0) {
            $(document).on('click', '.cc-palinsesto-slider .cc-slide .cc-front .cc-svg-info-live', function () {
                $(this).closest('.cc-event').find('.cc-back').fadeIn(200);
            });
            $(document).on('click', '.cc-palinsesto-slider .cc-slide .cc-back .cc-button-close', function () {
                $(this).closest('.cc-back').fadeOut(200);
            });
        }
    };

    /*
     NEW FOR CLAMP
     */
    var screenIsDesktop = function () {
        var mq = window.matchMedia("(min-width: 1024px)");
        return mq.matches;
    };

    var screenIsTablet = function () {
        var mq = window.matchMedia("(min-width: 768px) and (max-width: 1023px)");
        return mq.matches;
    };

    var screenIsMobile = function () {
        var mq = window.matchMedia("(max-width: 1023px)");
        return mq.matches;
    };


    var clampContentManager = function () {

        var clampClassPrefix = 'cc-clamp';
        var clampResponsiveSuffix = "";
        if (screenIsDesktop()) {
            clampResponsiveSuffix = "d";
        }
        if (screenIsTablet()) {
            clampResponsiveSuffix = "t";
        }
        if (screenIsMobile()) {
            clampResponsiveSuffix = "m";
        }

        var clampClassResponsivePrefix = clampClassPrefix + '-' + clampResponsiveSuffix + '-';
        $('.cc-wrapper').find('[class*=' + clampClassResponsivePrefix + ']').each(function () {
            var clampClassAttr = $(this).attr('class');
            if (clampClassAttr.indexOf(clampClassResponsivePrefix) > -1) {
                var clampClassAttrArray = clampClassAttr.split(' ');
                if (clampClassAttrArray.length > 0) {
                    var clampValue = '';
                    for (var i = 0; i < clampClassAttrArray.length; i++) {
                        var currentClass = clampClassAttrArray[i];
                        if (clampClassAttrArray[i].indexOf(clampClassResponsivePrefix) > -1) {
                            clampValue = currentClass.replace(clampClassResponsivePrefix, '').trim();
                            break;
                        }
                    }
                    if (clampValue != '') {
                        window.$clamp($(this)[0], { clamp: clampValue, truncationChar: '...' });
                    }
                }
            }
        });
    };

    /*
     END FOR CLAMP
     */


    // custom validation for contacts page
    var manageContactsForm = function (idForm) {
        var form = $("#" + idForm);

        form.validate({
            onkeyup: function (element) {
                if (this.checkable(element) && element.value == "on") {
                    $("#termsFormErrorMessage").text("");
                }
            },
            onfocusout: function (element) {
                if (!this.checkable(element)) {
                    if (this.element(element)) {
                        if (element.name == "ContactFormCustomerName") {
                            $("#nameSurnameErrorMessage").text("");
                        }
                        else if (element.name == "ContactFormCustomerEmail") {
                            $("#emailErrorMessage").text("");
                        }
                        else if (element.name == "ContactFormCustomerBody") {
                            $("#textAreaErrorMessage").text("");
                        }
                    }
                }
            },
            errorPlacement: function (error, element) {
                if (element.attr("name") == "ContactFormCustomerName") {
                    $("#nameSurnameErrorMessage").text(error.text());
                }
                else if (element.attr("name") == "ContactFormCustomerEmail") {
                    $("#emailErrorMessage").text(error.text());
                }
                else if (element.attr("name") == "ContactFormCustomerBody") {
                    $("#textAreaErrorMessage").text(error.text());
                }
                else if (element.attr("name") == "termsForm") {
                    $("#termsFormErrorMessage").text(error.text());
                }
            },
            messages: {
                ContactFormCustomerName: "E' obbligatorio inserire nome e cognome",
                ContactFormCustomerEmail: {
                    required: "E' obbligatorio inserire l'email",
                    email: "E' obbligatorio inserire un email valida"
                },
                ContactFormCustomerBody: "E' obbligatorio inserire un messaggio",
                termsForm: "E' obbligatorio accettare le condizioni"
            }
        });

        $("#termsForm").change(function (e) {
            if ($(e.currentTarget.form).validate().element(this)) {
                $("#termsFormErrorMessage").text("");
            }
        });

        form.on('submit', function (e) {
            if (form.valid()) {
                // everything looks good!
                form.find("[data-tovalidate=true]").each(function() {
                    if ($(this)[0].type === "checkbox") {
                        $(this).removeAttr('checked');
                    } else {
                        $(this).val('');
                    }
                });

                form.append('<input type="hidden" name="__RequestVerificationToken" value="' + $('input[name="__RequestVerificationToken"]').val() + '" />');

            } else {
                return false;
            }
        });
    };



    /* Scheda campione: Gestione delle attrezzature */
    var initChampionFacility = function () {

        if ($('.cc-wrapper.cc-wrapper-champion-details').length > 0) {

            if (!window.isMobile) {

                if ($('.cc-facility-mobile-slider .slick-slide').length > 0) {
                    $('.cc-facility-mobile-slider').each(function () {
                        $(this).slick('unslick');
                    });
                }

                $('.cc-champion-details-facility .cc-desktop-tab .cc-tab-1').click(function () {
                    $('.cc-champion-details-facility .cc-desktop-tab .cc-tab').removeClass('cc-active');
                    $(this).addClass('cc-active');
                    $('.cc-champion-details-facility .cc-content-sections .cc-section').removeClass('cc-active');
                    $('.cc-champion-details-facility .cc-content-sections .cc-section-1').addClass('cc-active');
                });
                $('.cc-champion-details-facility .cc-desktop-tab .cc-tab-2').click(function () {
                    $('.cc-champion-details-facility .cc-desktop-tab .cc-tab').removeClass('cc-active');
                    $(this).addClass('cc-active');
                    $('.cc-champion-details-facility .cc-content-sections .cc-section').removeClass('cc-active');
                    $('.cc-champion-details-facility .cc-content-sections .cc-section-2').addClass('cc-active');
                });
                $('.cc-champion-details-facility .cc-desktop-tab .cc-tab-3').click(function () {
                    $('.cc-champion-details-facility .cc-desktop-tab .cc-tab').removeClass('cc-active');
                    $(this).addClass('cc-active');
                    $('.cc-champion-details-facility .cc-content-sections .cc-section').removeClass('cc-active');
                    $('.cc-champion-details-facility .cc-content-sections .cc-section-3').addClass('cc-active');
                });


            } else {

                if ($('.cc-facility-mobile-slider .slick-slide').length == 0) {
                    $('.cc-facility-mobile-slider').each(function () {

                        $(this).slick({
                            lazyLoad: 'progressive',
                            infinite: true,
                            autoplay: false,
                            autoplaySpeed: 5000,
                            speed: 700,
                            slidesToShow: 1,
                            adaptiveHeight: true,
                            prevArrow: '<div class="cc-svg cc-svg-arrow-caret-left"><span>PrevGallery</span></div>',
                            nextArrow: '<div class="cc-svg cc-svg-arrow-caret-right"><span>Next</span></div>',
                            arrows: true
                        });
                    });
                }
            }
        }
    };





    /* Listing Category card */
    var initListingCategorySliderMobile = function () {

        if ($('.cc-listing-category-slider-mobile').length > 0) {

            if (!window.isMobile) {

                if ($('.cc-listing-category-slider-mobile .slick-slide').length > 0) {
                    $('.cc-listing-category-slider-mobile .cc-slider').each(function () {
                        $(this).slick('unslick');
                    });
                }

            } else {

                if ($('.cc-listing-category-slider-mobile .slick-slide').length == 0) {
                    $('.cc-listing-category-slider-mobile .cc-slider').each(function () {

                        $(this).slick({
                            lazyLoad: 'progressive',
                            infinite: true,
                            autoplay: false,
                            autoplaySpeed: 5000,
                            speed: 700,
                            slidesToShow: 2,
                            adaptiveHeight: false,
                            centerMode: true,
                            centerPadding: '5%',
                            prevArrow: '<div class="cc-svg cc-svg-arrow-caret-left"><span>PrevGallery</span></div>',
                            nextArrow: '<div class="cc-svg cc-svg-arrow-caret-right"><span>Next</span></div>',
                            arrows: false,
                            responsive: [
                                {
                                    breakpoint: 767,
                                    settings: {
                                        centerMode: true,
                                        slidesToShow: 1,
                                        centerPadding: '8%'
                                    }
                                }
                            ]
                        });
                    });
                }
            }
        }
    };

    window.visualPalinsesto = palinsesto;
    window.visualPalinsestoSpecific = palinsestoSpecific;
    window.visualPalinsestoMain = palinsestoMain;

    window.refreshSelect = refreshpickerSelect;
    window.renderSelect = renderPickerSelect;
    window.clampManager = clampContentManager;

    window.setLiveEventClassPalinsesto = setLiveEventClass;
    window.setContentInfoEventPalinsesto = setContentInfoEvent;
    window.setEventTimePalinsesto = setEventStartTime;

    var horizon = function () {
        if ($('.horizon-swiper').length > 0) {
            $('.horizon-swiper').horizonSwiper();
        }
    };

    function mediaSize() {
        if (window.matchMedia('(min-width: 1024px)').matches) {
            $(document).trigger("desktopMode");
        } else if (window.matchMedia('(min-width: 768px) and (max-width: 1023px)').matches) {
            $(document).trigger("tabletMode");
        } else {
            $(document).trigger("mobileMode");
        }
    }
    //Cambio il default del caret di selectpicker
    $.fn.selectpicker.Constructor.DEFAULTS.template.caret = "<div class=\"cc-svg cc-svg-select-arrow-down\"><span></span></div>";

    // var isDesktop = false;
    // var isTablet = false;
    // var isMobile = false;

    //Document ready
    $(function () {
        // Aggiungo classe sul body per valutare se mobile o desktop
        $(window).resize(function () {
            mediaSize();
            responsiveResize();
            clampContentManager();
            syncSearchBars();
        });

        $(document).on("scroll", function () {
            mediaSize();
        });

        //Dopo ogni chiamata ajax
        $(document).ajaxComplete(function () {
            clampContentManager();
            horizon();
        });

        $(document).on('load', '.cc-wrapper', function () {
            clampContentManager();
        });
        $(document).on("desktopMode", function () {
            if ( ($('.cc-wrapper.cc-wrapper-news-detail').length > 0) && (!$('.cc-content-action-buttons').hasClass('cc-content-action-buttons-gallery')) ) {
                var desktopHeaderFixedHeight = 0 + $('.cc-header-desktop .cc-main-header .cc-sticky').height(); /* Altezza Header fisso desktop */

                var actionButtonOffset = $('.cc-news-detail .cc-content-action-buttons').offset().top; /* Calcolo la posizione degli action button della news. INNESTO 2 */
                var actionButtonOffsetDistance = actionButtonOffset - desktopHeaderFixedHeight - $(window).scrollTop(); /* Countdown EFFETTO 2 */
                var action_left_top = 0 - actionButtonOffsetDistance; /* Attributo EFFETTO 2 */

                /* EFFETTO 2 */
                if ((actionButtonOffsetDistance) < 0) {
                    $('.cc-desktop .cc-content-action-buttons .cc-box').css('top', action_left_top);
                } else {
                    $('.cc-desktop .cc-content-action-buttons .cc-box').css('top', '0');
                }


                if ($('.cc-section-news.cc-section-card .cc-content-champion-card .cc-champion-card').length > 0) {

                    var cardSectionChampionOffset = $('.cc-section-news.cc-section-card').offset().top;
                    var cardSectionChampionOffsetDistance = cardSectionChampionOffset - desktopHeaderFixedHeight - $(window).scrollTop() - 50;
                    /* Countdown EFFETTO 3 */
                    var cardSectionChampionTop = 0 - cardSectionChampionOffsetDistance;
                    /* Attributo EFFETTO 3 */
                    var cardSectionChampionHeight = $('.cc-section-news.cc-section-card').height();
                    var cardChampionHeight = $('.cc-section-news.cc-section-card .cc-content-champion-card .cc-champion-card').height();
                    var maxValue = cardSectionChampionHeight - cardChampionHeight - cardSectionChampionTop - 56;

                    /* EFFETTO 3 */
                    if ((cardSectionChampionOffsetDistance < 0) && (maxValue > 0)) {
                        $('.cc-section-news.cc-section-card .cc-content-champion-card .cc-champion-card').css('top', cardSectionChampionTop);
                    }
                }
            }
        });
        $(document).on("mobileMode tabletMode", function () {
            if ($('.cc-wrapper.cc-wrapper-news-detail').length > 0) {
                /* 1 Pulsanti action in header per dettaglio news */
                /* 2 Pulsanti action che devono attaccarsi on top in dettaglio news */
                var mobileHeaderFixedHeight = 0 + $('.cc-header-mobile .cc-main-header .cc-sticky').height(); /* Altezza Header fisso mobile */
                /* EFFETTO 1 */
                var newsTitleOffset = $('.cc-news-detail .cc-intro-title-main').offset().top; /* Calcolo la posizione del titolo principale della news. INNESTO 1 */
                var newsTitleOffsetDistance = newsTitleOffset - mobileHeaderFixedHeight - $(window).scrollTop(); /* Countdown EFFETTO 1 */

                if ((newsTitleOffsetDistance) < 0) {
                    $('.cc-header-mobile .cc-main-header .cc-main-bar .cc-link-search').fadeOut(50);
                    $('.cc-header-mobile .cc-main-header .cc-main-bar .cc-link-logo').fadeOut(50);
                    $('.cc-header-mobile .cc-main-header .cc-main-bar .cc-content-action-buttons').fadeIn(350);
                } else {
                    $('.cc-header-mobile .cc-main-header .cc-main-bar .cc-link-search').fadeIn(350);
                    $('.cc-header-mobile .cc-main-header .cc-main-bar .cc-link-logo').fadeIn(350);
                    $('.cc-header-mobile .cc-main-header .cc-main-bar .cc-content-action-buttons').fadeOut(50);
                }
            }
        });

        //Abilito il pulsante del search sull'header
        $(document).on("click", ".cc-header .cc-main-header .cc-link-search", function () {
            $('.cc-header .cc-main-header .cc-find').fadeIn(200);
            $('.cc-header .cc-main-header .cc-find .cc-input-find').focus();
        });
        $(document).on("click", ".cc-header .cc-main-header .cc-find .cc-svg", function () {
            $(this).closest('.cc-find').fadeOut(200);
        });

        $(document).on("chatScrollDown", function () {
            chatScrollDown();
        });

        // Inizializzo lo scroll orizzontale

        $(document).scroll(function () {
            // Abilito lo stecky header (mobile e desktop
            steackyHeader();

            /* Inizializzo le funzioni per desktop della pagina chi siamo */
            aboutNumbersDesktop();
        });

        $(document).on("desktopMode", function () {
            if ($('.cc-wrapper.cc-wrapper-about').length > 0) {
                var desktopHeaderFixedHeight = 0 + $('.cc-header-desktop .cc-main-header .cc-sticky').height(); /* Altezza Header fisso desktop */
                var numberSectionOffset = $('.cc-abouts-main .cc-section-number').offset().top;
                var numberSectionOffsetDistance = numberSectionOffset - desktopHeaderFixedHeight - $(window).scrollTop() + 130; /* Countdown EFFETTO 3 */
                var numberSectionTop = 150 - numberSectionOffsetDistance; /* Attributo EFFETTO 3 */
                var numberSectionMaxHeight = $('.cc-abouts-main').height();
                var cardChampionHeight = $('.cc-abouts-main .cc-section-number .cc-content-number').height();
                var maxValue = numberSectionMaxHeight - cardChampionHeight - numberSectionTop - 50;

                /* EFFETTO 3 */
                if ((numberSectionOffsetDistance < 0) && (maxValue > 0)) {
                    $('.cc-desktop .cc-abouts-main .cc-section-number .cc-content-number').css('top', numberSectionTop);
                }
            }
        });

        // Pulsante per Aprire gli share
        $(document).on("click", ".cc-content-action-buttons .cc-box .cc-button-open-share", function () {
            if (window.matchMedia('(min-width: 991px)').matches) {
                $(this).parent().find('.cc-content-box-share-left').fadeIn(200);
            } else {
                $('.cc-overlay-message.cc-overlay-share').fadeIn(200);	
				$('.cc-content-box-share-left').fadeIn(200);
				$('.cc-content-box-share-left').addClass("displayBlock");
            }
        });

        $(document).on("click", ".cc-header-mobile .cc-content-action-buttons .cc-header-button-share", function () {
            $('.cc-overlay-message.cc-overlay-share').fadeIn(200);
			$('.cc-content-box-share-left').fadeIn(200);
			$('.cc-content-box-share-left').addClass("displayBlock");
        });



        // Pulsante per Chiudere gli share
        $(document).on("click", ".cc-content-action-buttons .cc-box .cc-content-box-share-left .cc-button-close-overlay", function () {
            $('.cc-content-action-buttons .cc-box .cc-content-box-share-left').fadeOut(200);
			$('.cc-content-box-share-left').removeClass("displayBlock");
        });

        // Pulsante per chiudere gli overlay
        $(document).on("click", ".cc-overlay-message .cc-close-overlay", function () {
            $('.cc-overlay-message').fadeOut(200);
        });


        // TOP HEADER CROSS PORTAL
        $(document).on("click", ".cc-header-cross-platform .cc-top-header .cc-link", function () {
            if ($(this).hasClass('cc-has-child')) {
                $(this).find('.cc-link-overlay').toggle('fast');
                $(this).toggleClass('cc-active');
            }
        });

        $(document).on("click", ".cc-header-cross-platform .cc-top-header .cc-link.cc-link-world", function () {
            $('.cc-header-cross-platform .cc-top-header .cc-fit-world').slideToggle('fast');
            $(this).find('.cc-link-overlay').toggle('fast');
            $(this).toggleClass('cc-active');
        });

        $(document).on("click", ".cc-header-cross-platform .cc-top-header .cc-background", function () {
            $(this).closest('cc-link').removeClass('cc-active');
            $(this).closest('cc-link-overlay').hide();
        });

        $(document).on("click", ".cc-wrapper-landing-page .cc-link-info", function () {
            $('.cc-wrapper-landing-page .cc-section.cc-section-info-overlay').addClass('cc-open');
        });

        $(document).on("click", ".cc-section.cc-section-info-overlay .cc-info-overlay-close", function () {
            $(this).closest('.cc-section-info-overlay').removeClass('cc-open');
        });

        $(document).on("desktopMode", function () {
            if ($('.cc-datepicker').length > 0) {
                $('.cc-datepicker').each(function () {
                    $('.cc-datepicker').datepicker({
                        format: 'dd/mm/yyyy',
                        language: 'it'
                    });
                });
            }
        });

        // Abilito tutte le funzioni mobile menu
        mobileMenu();

        /* Visual Slider Mobile */
        visualSliderMobile();

        /* Slider chi siamo */
        aboutNumbersMobile();

        /* Gestione delle card chi siamo */
        aboutPeopleCard();

        /* Set favorite icon */
        setFavoriteIcon();

        /* Slider Palinsesto */
        /* Viene caricato nel file temp.js per farlo funzionare solo a livello front-end... in produzione viene gestito dal file livetv-navigation-bar.js*/
        /*visualPalinsesto();*/

        /* Scrolla la chat */
        chatScrollDown();

        /* Slider delle card Champions */
        championCardSlider();

        gallerySlider();

        /**/
        palinsestoInfoOverlayToggle();

        /* Scheda Campione */
        initChampionFacility();

        initListingCategorySliderMobile();

        //visualPalinsesto();

        //visualPalinsestoMain();

        mediaSize();

        horizon();
        responsiveResize();

        manageContactsForm('formContacts');

        //Resize all textareas in the page
        var textareas=$(".cc-textarea-autosize");
        for (var i=0;i!=textareas.length;++i){
            textareaAutoResize($(textareas[i]));
        }

        $('[data-toggle="tooltip"]').tooltip();


        function getHiddenFieldFromPage(fieldId) {
            return $("#" + fieldId).val();
        }
        function getCookieOptions() {
            return {
                // if false, this prevents the popup from showing (useful for giving to control to another piece of code)
                enabled: true,

                // optional (expecting a HTML element) if passed, the popup is appended to this element. default is `document.body`
                container: null,

                // defaults cookie options - it is RECOMMENDED to set these values to correspond with your server
                cookie: {
                    // This is the name of this cookie - you can ignore this
                    name: 'cookieconsent_status',

                    // This is the url path that the cookie 'name' belongs to. The cookie can only be read at this location
                    path: '/',

                    // This is the domain that the cookie 'name' belongs to. The cookie can only be read on this domain.
                    //  - Guide to cookie domains - http://erik.io/blog/2014/03/04/definitive-guide-to-cookie-domains/
                    domain: '',

                    // The cookies expire date, specified in days (specify -1 for no expiry)
                    expiryDays: 365,
                },

                // these callback hooks are called at certain points in the program execution
                onPopupOpen: function () { },
                onPopupClose: function () { },
                onInitialise: function (status) { },
                onStatusChange: function (status, chosenBefore) { },
                onRevokeChoice: function () { },

                // each item defines the inner text for the element that it references
                content: {
                    header: getHiddenFieldFromPage("ccbb-title"),
                    message: getHiddenFieldFromPage("ccbb-text"),
                    dismiss: 'Ok',
                    allow: 'Allow cookies',
                    deny: 'Non Accetto',
                    link: getHiddenFieldFromPage("ccbb-linktext"),
                    href: getHiddenFieldFromPage("ccbb-linkurl"),
                    close: '&#x274c;'
                },

                // This is the HTML for the elements above. The string {{header}} will be replaced with the equivalent text below.
                // You can remove "{{header}}" and write the content directly inside the HTML if you want.
                //
                //  - ARIA rules suggest to ensure controls are tabbable (so the browser can find the first control),
                //    and to set the focus to the first interactive control (http://w3c.github.io/aria-in-html/)
                elements: {
                    header: '<span class="cc-header">{{header}}</span>&nbsp;',
                    message: '<span id="cookieconsent:desc" class="cc-message">{{message}}</span>',
                    messagelink: '<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}">{{link}}</a></span>',
                    dismiss: '<a aria-label="dismiss cookie message" role=button tabindex="0" class="cc-btn cc-dismiss">{{dismiss}}</a>',
                    allow: '<a aria-label="allow cookies" role=button tabindex="0"  class="cc-btn cc-allow">{{allow}}</a>',
                    deny: '<a aria-label="deny cookies" role=button tabindex="0" class="cc-btn cc-deny">{{deny}}</a>',
                    link: '<a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" target="_blank">{{link}}</a>',
                    close: '<span aria-label="dismiss cookie message" role=button tabindex="0" class="cc-close">{{close}}</span>',

                    //compliance: compliance is also an element, but it is generated by the application, depending on `type` below
                },

                // The placeholders {{classes}} and {{children}} both get replaced during initialisation:
                //  - {{classes}} is where additional classes get added
                //  - {{children}} is where the HTML children are placed
                window: '<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" id="cc-cookieconsent" class="cc-window {{classes}}"><!--googleoff: all-->{{children}}<!--googleon: all--></div>',

                // This is the html for the revoke button. This only shows up after the user has selected their level of consent
                // It can be enabled of disabled using the `revokable` option
                revokeBtn: '<div class="cc-revoke {{classes}}">Cookie Policy</div>',

                // define types of 'compliance' here. '{{value}}' strings in here are linked to `elements`
                compliance: {
                    'info': '<div class="cc-compliance">{{dismiss}}</div>',
                    'opt-in': '<div class="cc-compliance cc-highlight">{{dismiss}}{{allow}}</div>',
                    'opt-out': '<div class="cc-compliance cc-highlight">{{deny}}{{dismiss}}</div>',
                },

                // select your type of popup here
                type: 'info', // refers to `compliance` (in other words, the buttons that are displayed)

                // define layout layouts here
                layouts: {
                    // the 'block' layout tend to be for square floating popups
                    'basic': '{{messagelink}}{{compliance}}',
                    'basic-close': '{{messagelink}}{{compliance}}{{close}}',
                    'basic-header': '{{header}}{{message}}{{link}}{{compliance}}',

                    // add a custom layout here, then add some new css with the class '.cc-layout-my-cool-layout'
                    //'my-cool-layout': '<div class="my-special-layout">{{message}}{{compliance}}</div>{{close}}',
                },

                // default layout (see above)
                layout: 'basic',

                // this refers to the popup windows position. we currently support:
                //  - banner positions: top, bottom
                //  - floating positions: top-left, top-right, bottom-left, bottom-right
                //
                // adds a class `cc-floating` or `cc-banner` which helps when styling
                position: 'bottom', // default position is 'bottom'

                // Available styles
                //    -block (default, no extra classes)
                //    -edgeless
                //    -classic
                // use your own style name and use `.cc-theme-STYLENAME` class in CSS to edit .
                // Note: style "wire" is used for the configurator, but has no CSS styles of its own, only palette is used.
                theme: 'block',

                // The popup is `fixed` by default, but if you want it to be static (inline with the page content), set this to false
                // Note: by default, we animate the height of the popup from 0 to full size
                static: false,

                // if you want custom colours, pass them in here. this object should look like this.
                // ideally, any custom colours/themes should be created in a separate style sheet, as this is more efficient.
                //   {
                //     popup: {background: '#000000', text: '#fff', link: '#fff'},
                //     button: {background: 'transparent', border: '#f8e71c', text: '#f8e71c'},
                //     highlight: {background: '#f8e71c', border: '#f8e71c', text: '#000000'},
                //   }
                // `highlight` is optional and extends `button`. if it exists, it will apply to the first button
                // only background needs to be defined for every element. if not set, other colors can be calculated from it
                palette: null,

                // Some countries REQUIRE that a user can change their mind. You can configure this yourself.
                // Most of the time this should be false, but the `cookieconsent.law` can change this to `true` if it detects that it should
                revokable: false,

                // if true, the revokable button will tranlate in and out
                animateRevokable: true,

                // used to disable link on existing layouts
                // replaces element messagelink with message and removes content of link
                showLink: true,

                // set value as scroll range to enable
                dismissOnScroll: false,

                // set value as time in milliseconds to autodismiss after set time
                dismissOnTimeout: false,

                // The application automatically decideds whether the popup should open.
                // Set this to false to prevent this from happening and to allow you to control the behaviour yourself
                autoOpen: true,

                // By default the created HTML is automatically appended to the container (which defaults to <body>). You can prevent this behaviour
                // by setting this to false, but if you do, you must attach the `element` yourself, which is a public property of the popup instance:
                //
                //     var instance = cookieconsent.factory(options);
                //     document.body.appendChild(instance.element);
                //
                autoAttach: true,

                // simple whitelist/blacklist for pages. specify page by:
                //   - using a string : '/index.html'           (matches '/index.html' exactly) OR
                //   - using RegExp   : /\/page_[\d]+\.html/    (matched '/page_1.html' and '/page_2.html' etc)
                whitelistPage: [],
                blacklistPage: [],

                // If this is defined, then it is used as the inner html instead of layout. This allows for ultimate customisation.
                // Be sure to use the classes `cc-btn` and `cc-allow`, `cc-deny` or `cc-dismiss`. They enable the app to register click
                // handlers. You can use other pre-existing classes too. See `src/styles` folder.
                overrideHTML: null
            };
        }
        if (window.cookieconsent !== null && window.cookieconsent !== undefined) {
            var isPreviewOrExperience = !!(window.Sitecore && window.Sitecore.PageModes);
            if (!isPreviewOrExperience) {
                //window.cookieconsent.initialise(getCookieOptions());
            }
        }
		
		if($(".cc-content-text-news.cc-content-elements-news.cc-content-live-streaming-blocked").length) {
			var tesserato = localStorage.getItem("Member") != 0 ? true : false;
			if(localStorage.getItem("Member") === null)
				tesserato = false;
			if (tesserato) {
				$(".cc-content-text-news.cc-content-elements-news.cc-content-live-streaming-blocked").html('<div class="cc-content-video"><iframe id="video-frame" class="cc-video" src="https://player-fit.eclexia.it/LivePlayer/b06bc745-888d-41f0-8cf2-ae2e4bbef2e3?ap=1" scrolling="no" marginheight="0" marginwidth="0" width="100%" height="auto" frameborder="0" allowfullscreen=""></iframe></div><div class="cc-content-live-element"><div class="cc-content-ball">    <div class="cc-ball"></div>    <div class="cc-wave"></div></div><span class="cc-category">Ora in onda</span> <span class="cc-title cc-clamp-d-1">WTA Internazionali BNL d&#39;Italia QF (differita)</span><p class="cc-text cc-clamp-d-5"> </p></div><div class="cc-button-expand"><div class="cc-icon" id="showLiveVideo">    <div class="cc-svg cc-svg-expand"><span>Espandi</span></div>    <span class="cc-button-label"><strong>Ingrandisci</strong> il video</span> </div></div>');
				$(".cc-content-text-news.cc-content-elements-news.cc-content-live-streaming-blocked").removeClass("cc-content-live-streaming-blocked");
			}
		}

    });
})(jQueryV2);

