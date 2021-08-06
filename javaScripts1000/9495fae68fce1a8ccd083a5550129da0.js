jQuery(function ($) {

    // if ($('.fn-invoice').length > 0) {
    //     $('.fn-invoice').on('click', function(){
    //         window.print()
    //     });
    // }

    if ($('.view-files').length > 0) {

        if(window.location.hash){
            const speed = 1000;
            const scrollOffset = $('.site-header-menu').height() + 100;

            const hash = window.location.hash.replace('#', '');
            const targetElement = document.getElementById(hash);
            if (targetElement) {
                $('html, body').animate({scrollTop: $(targetElement).offset().top - scrollOffset}, speed);
                $(targetElement).find('.view-files .title').addClass('open');
                $(targetElement).find('.view-files .file-wrap').slideToggle(100);
            }
        }


        $('.view-files').each(function () {
            var handle = $(this).find('.title')
            var content = $(this).find('.file-wrap');

            handle.on('click', function () {
                content.slideToggle(100);
                handle.toggleClass('open');
            })
        })
    }
});
