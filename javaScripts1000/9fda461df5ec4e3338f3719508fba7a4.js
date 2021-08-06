$( document ).ready(function() {
    function smartBannerShow() {
        $('.nav-menu-expanded, .header-fix .box-search .input-search, .pane-wrapper, .header-fix .box-search #search').css('margin-top', '72px');
        $('.smartbanner-android').show();
    }

    function smartBannerHide() {
        $('.smartbanner-android').hide();
        $('.nav-menu-expanded, .header-fix .box-search .input-search, .pane-wrapper, .header-fix .box-search #search').css('margin-top', '0');
    }

    if (!navigator.userAgent.match(/android/gi)) {
        smartBannerHide();
    } else {
        var cookieBanner = readCookie('{{ sbCookie }}');
        if (cookieBanner == 'on') {
            smartBannerHide();
        } else if ($(window).width() < 651) {
            smartBannerShow()
        }

        $(window).scroll(function () {
            $('header[class^="nx-"]').css({'position': 'absolute', 'top': '0'});
        });

        $('.smartbanner-close, .smartbanner-button').click(function () {
            createCookie('{{ sbCookie }}', 'on', 1);
            smartBannerHide();
        });

        $('.box-menu').click(function () {
            smartBannerHide();
        });
    }
});