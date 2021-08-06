
function loadImagesLazy() {
    try {
        $('.ui-lazy').Lazy({
            afterLoad: function (element) {
                if ($(element).parents('.bx-viewport').length > 0) {
                    $('.bx-viewport').css('height', 'auto');
                }
            },
            bind: 'event',
            threshold: 200,
            scrollDirection: 'vertical',
            effect: 'fadeIn',
            visibleOnly: true
        });
    }
    catch (err) {
        // Fallback if the plugin fails or not exists
        $("img.ui-lazy").each(function () {
            if (jQuery(this).attr("data-src")) {
                jQuery(this).attr('src', jQuery(this).attr("data-src"));
            }
        });
    }
}

jQuery(function ($) {
    $(document).ready(function(){
        loadImagesLazy();
    });
});