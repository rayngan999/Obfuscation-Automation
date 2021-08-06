$(function(){
    $('.renters-menu').hover(function(){
        $('.renters-sub-menu').show();
    }, function(){
        $('.renters-sub-menu').hide();
    });

    $('.property-manager-menu').hover(function(){
        $('.pm-sub-menu').show();
    },function(){
        $('.pm-sub-menu').hide();
    });

    $('.pm-sub-menu, .renters-sub-menu').hover(function(){
        $(this).stop().show();
    }, function(){
        $(this).stop().hide();
    });

    var timerId, switchHeaderStyling = function(){
        if ($(window).scrollTop() <= 150 && $('.header').hasClass('scroll-down')) {
            $('.header').stop().hide(0, function() {
                $(this).removeClass('scroll-down').slideDown(200);
            });
        } else if ($(window).scrollTop() > 150 && !$('.header').hasClass('scroll-down')) {
            $('.header').stop().hide(0, function() {
                $(this).addClass('scroll-down').slideDown(200);
            });
        }
    };
    $(window).scroll(function(){
        if(timerId){
            clearTimeout(timerId);
        }
        timerId = setTimeout(switchHeaderStyling, 30);
    });
});