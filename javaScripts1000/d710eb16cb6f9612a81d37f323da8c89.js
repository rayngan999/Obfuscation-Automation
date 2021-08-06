(function($) {
    "use strict"; // Start of use strict
    var $post_carousel = $(".post-carousel");
    var $post_carousel2 = $(".post-carousel2");
    var $post_carousel3 = $(".post-carousel3");
    var $post_carousel4 = $(".post-carousel4");
    var $post_carousel5 = $(".post-carousel5");
    var $post_carousel6 = $(".post-carousel6");

    var $single_carousel = $(".single-carousel");
    var $news_carousel = $(".news-carousel");
    var $menu_carousel = $(".menu-carousel");
    var $menu_carousel2 = $(".menu-carousel2");
    var $product_slider = $(".product-slider");

    // POST CAROUSEL
    if ($post_carousel.length && $.fn.slick) {
        $post_carousel.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: $('.prev'),
            nextArrow: $('.next')
        });
    }

    // POST CAROUSEL
    if ($post_carousel3.length && $.fn.slick) {
        $post_carousel3.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            prevArrow: $('.prev4'),
            nextArrow: $('.next4')
        });
    }

    // POST CAROUSEL
    if ($product_slider.length && $.fn.slick) {
        $product_slider.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: $('.prev3'),
            nextArrow: $('.next3')
        });
    }

    // POST CAROUSEL
    if ($post_carousel2.length && $.fn.slick) {
        $post_carousel2.slick({
            dots: true,
            infinite: true,
            arrows: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }

    // POST CAROUSEL
    if ($post_carousel4.length && $.fn.slick) {
        $post_carousel4.slick({
            dots: true,
            infinite: true,
            arrows: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }

    new WOW().init();
    $('.wrapper div').addClass('wow fadeIn');
    $('header div').removeClass('wow fadeIn');

    // POST CAROUSEL
    if ($post_carousel5.length && $.fn.slick) {
        $post_carousel5.slick({
            dots: true,
            infinite: true,
            arrows: false,
            speed: 300,
            centerMode: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }

    // POST CAROUSEL
    if ($post_carousel6.length && $.fn.slick) {
        $post_carousel6.slick({
            dots: true,
            infinite: true,
            arrows: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }

    // POST CAROUSEL
    if ($menu_carousel.length && $.fn.slick) {
        $menu_carousel.slick({
            dots: false,
            infinite: true,
            arrows: true,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            prevArrow: $('.prev2'),
            nextArrow: $('.next2'),
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }

    // POST CAROUSEL
    if ($menu_carousel2.length && $.fn.slick) {
        $menu_carousel2.slick({
            dots: false,
            infinite: true,
            arrows: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: $('.prev5'),
            nextArrow: $('.next5'),
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }

    // POST SINGLE CAROUSEL
    if ($single_carousel.length && $.fn.slick) {
        $single_carousel.slick({

            autoplay: false,
            dots: true,
            prevArrow: $('.prev1'),
            nextArrow: $('.next1'),
            customPaging: function(slider, i) {
                var thumb = $(slider.$slides[i]).data('thumb');
                return '<a><img src="' + thumb + '"></a>';
            },

            responsive: [{
                breakpoint: 500,
                settings: {
                    dots: false,
                    arrows: false,
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }

    // SLIDER CAROUSEL
    if ($news_carousel.length && $.fn.slick) {
        $news_carousel.slick({
            infinite: true,
            slidesToShow: 1,
            vertical: true,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToScroll: 1,
            dots: false,
            arrows: false
        });
    }

    $('.video-list').css('height', $('.video-container').height() - 59);
    $('.video-list ul').css('height', $('.video-container').height() - 59);

    $('.video-play').on('click', function() {
        if ($("video").get(0).paused) {
            $("video").get(0).play();
        } else {
            $("video").get(0).pause();
        }
    });

    $('video').on('click', function() {
        if ($(this).get(0).paused) {
            $(this).get(0).play();
        } else {
            $(this).get(0).pause();
        }
    });

    $('.video-play').on('click', function() {
        $("video").addClass("active");
    });

    $('.vl-video1').on('click', function() {
        $("video").attr("src", "video/1.mp4");
        $(".now-playing p").html("Desktop Showdown: Apple's Siri vs. Microsoft's Cortana <span>20:45</span>");
        $(".vc-item2, .vc-item3, .vc-item4, .vc-item5").removeClass("active");
        $(".vc-item1").addClass("active");

        var $this = $("video").removeClass('active');
        window.setTimeout(function() {
            $this.addClass('active');

            if ($("video").get(0).paused) {
                $("video").get(0).play();
            } else {
                $("video").get(0).pause();
            }

        }, 2500);
    });

    $('.vl-video2').on('click', function() {
        $("video").attr("src", "video/2.mp4");
        $(".now-playing p").html("The Best New Features Coming to Your Windows<span>18:35</span>");
        $(".vc-item1, .vc-item3, .vc-item4, .vc-item5").removeClass("active");
        $(".vc-item2").addClass("active");

        var $this = $("video").removeClass('active');
        window.setTimeout(function() {
            $this.addClass('active');

            if ($("video").get(0).paused) {
                $("video").get(0).play();
            } else {
                $("video").get(0).pause();
            }

        }, 2500);
    });

    $('.vl-video3').on('click', function() {
        $("video").attr("src", "video/3.mp4");
        $(".now-playing p").html("This Child Model Is So Over Being On Live TV <span>11:20</span>");
        $(".vc-item1, .vc-item2, .vc-item4, .vc-item5").removeClass("active");
        $(".vc-item3").addClass("active");
        var $this = $("video").removeClass('active');
        window.setTimeout(function() {
            $this.addClass('active');

            if ($("video").get(0).paused) {
                $("video").get(0).play();
            } else {
                $("video").get(0).pause();
            }

        }, 2500);
    });

    $('.vl-video4').on('click', function() {
        $("video").attr("src", "video/4.mp4");
        $(".now-playing p").html("Outrage at bloodied Aleppo boy photo and lorem <span>15:25</span>");
        $(".vc-item1, .vc-item2, .vc-item3, .vc-item5").removeClass("active");
        $(".vc-item4").addClass("active");
        var $this = $("video").removeClass('active');
        window.setTimeout(function() {
            $this.addClass('active');

            if ($("video").get(0).paused) {
                $("video").get(0).play();
            } else {
                $("video").get(0).pause();
            }

        }, 2500);
    });

    $('.vl-video5').on('click', function() {
        $("video").attr("src", "video/5.mp4");
        $(".now-playing p").html("The best lorem ipsum video of 2016 releaed <span>13:45</span>");
        $(".vc-item1, .vc-item2, .vc-item3, .vc-item4").removeClass("active");
        $(".vc-item5").addClass("active");
        var $this = $("video").removeClass('active');
        window.setTimeout(function() {
            $this.addClass('active');

            if ($("video").get(0).paused) {
                $("video").get(0).play();
            } else {
                $("video").get(0).pause();
            }

        }, 2500);
    });

    $('ul.tabs li').on('click', function() {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })

    $(".search-trigger1 i").on('click', function() {
        $(".search-wrap1").toggleClass("active");
        $(".search-trigger1").toggleClass("active");
    });

    $(".search-trigger2").on('click', function() {
        $(".search-wrap2").addClass("active");
        window.setTimeout(function(){
          document.querySelector('.search-wrap2 input').focus()
        },100)
    });

    $(".sw2-close").on('click', function() {
        $(".search-wrap2").removeClass("active");
    });

    $(".offset-trigger").on('click', function() {
        $(this).toggleClass("active");
        $("#sidebar-wrapper").toggleClass("active");
        $(".wrapper").toggleClass("active");
    });

    $('.counter').ShareCounter({
        url: 'http://themeforest.net/',
        increment: true
    });

})(jQuery); // End of use strict


// DATE PLUGIN
function date_time(id) {
    date = new Date;
    year = date.getFullYear();
    month = date.getMonth();
    months = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Decer');
    d = date.getDate();
    day = date.getDay();
    days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    h = date.getHours();
    if (h < 10) {}
    m = date.getMinutes();
    if (m < 10) {}
    s = date.getSeconds();
    if (s < 10) {}
    result = '' + days[day] + ', ' + months[month] + ' ' + d + ', ' + year;
    document.getElementById(id).innerHTML = result;
    setTimeout('date_time("' + id + '");', '1000');
    return true;
}
