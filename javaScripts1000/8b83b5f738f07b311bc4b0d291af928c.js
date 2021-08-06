"use strict";
var hsce = function() {};
$(document).ready(function() {
    dataLink();
    liveSliderMore();
    mostWantedSliderDesktop();
    lesenswertSliderDesktop();
    newsRotationSliderDesktop();
    mostWatchedSliderDesktop();
});

function mostWantedSliderDesktop() {
    var mostWanted = new Swiper("#swiper-mostwanted", {
        nextButton: ".go-next-mostwantedslider",
        prevButton: ".go-prev-mostwantedslider",
        loop: true,
        lazyLoading: true,
        lazyLoadingInPrevNext: true,
        speed: 400,
        effect: "fade",
        preloadImages: true,
        simulateTouch: false,
        pagination: ".most-wanted-pagination",
        onSlideChangeEnd: function(swiper) {
            var activeSlide = $(
                '#swiper-mostwanted .swiper-slide[data-swiper-slide-index="' +
                    swiper.realIndex +
                    '"]'
            );
            if (!$.trim(activeSlide.html())) {
                activeSlide.load(activeSlide.attr("data-src"));
            }

            var nextSlide = $(
                '#swiper-mostwanted .swiper-slide[data-swiper-slide-index="' +
                    (swiper.realIndex + 1) +
                    '"]'
            );
            if (!$.trim(nextSlide.html())) {
                nextSlide.load(nextSlide.attr("data-src"));
            }
        }
    });

    $("#goToSwipe").click(function() {
        mostWanted.slideTo(11);
    });
}

function mostWatchedSliderDesktop() {
    new Swiper("#swiper-mostwatched", {
        nextButton: ".go-next-mostwatchedslider",
        prevButton: ".go-prev-mostwatchedslider",
        loop: true,
        speed: 400,
        effect: "fade",
        pagination: ".most-watched-pagination"
    });
}

function newsRotationSliderDesktop() {
    new Swiper("#swiper-newsRotation", {
        nextButton: ".go-next-newsslider",
        prevButton: ".go-prev-newsslider",
        pagination: ".swiper-pagination",
        paginationClickable: true,
        loop: true,
        autoplay: 6000,
        autoplayDisableOnInteraction: false,
        effect: "fade",
        // hashnav: true,
        hashnavWatchState: true,
        // Disable preloading of all images
        preloadImages: false,
        // Enable lazy loading
        lazyLoading: true,
        hashnav: false,
        lazyLoadingInPrevNext: true,
        simulateTouch: false
    });
}

function liveSliderMore() {
    $("#more").click(function() {
        $(
            ".liveSlider, .liveBoxSlider, .go-prev-liveslider, .go-next-liveslider"
        ).toggleClass("expand");
    });
}
function dataLink() {
    $("[data-link]").click(function() {
        window.open($(this).attr("data-link"), "_blank");
        return false;
    });
}
function lesenswertSliderDesktop() {
    new Swiper("#swiper-lesenswert-desktop", {
        nextButton: ".go-next-communitylesenswertslider",
        prevButton: ".go-prev-communitylesenswertslider",
        loop: true,
        effect: "fade",
        speed: 400,
        simulateTouch: false,
        preventClicksPropagation: false,
        preventClicks: false
    });
}

function handleSliderChangeEnd(name, s) {
    var slide = null;
    if (s.isEnd) {
        slide = 1;
    } else if (s.isBeginning) {
        // Der Swiper legt fÃ¼r einen leichteren Ã¼bergang zwei duplikate im DOM an, deshalb "-2"
        slide = s.slides.length - 2;
    } else {
        slide = s.activeIndex;
    }
    sendTrackingData("Startseite", "slider", name + "_" + slide);
}

function sendTrackingData(eventCat, eventAct, eventLab) {
    try {
        wt.sendinfo({ linkId: eventLab });
    } catch (err) {}

    try {
        //_gaq.push(["_trackEvent", eventCat, eventAct, eventLab]);
        tmEvent(eventCat, eventAct, eventLab);
    } catch (err) {}
}
