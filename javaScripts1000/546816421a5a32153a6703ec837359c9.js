$(function() {
    // quick view
    $('.quick-view').livequery(function() {
        $(this).each(function() {
            $(this).attr('href', $(this).attr('href') + '&iframe=true&width=580&height=430');
        });
    });

    $('iframe').livequery(function() {
        $(this).attr('allowTransparency', 'true');
    });

    bindQuickView();

});

function bindQuickView() {
    $('a[rel^="vtex-modal"]').prettyPhoto({
        theme: '',
        show_title: false,
        //		allow_resize: false,
        changepicturecallback: function() {
            //retira a descricao
            var pp_details = $('.pp_details');
            var pp_content = $('.pp_content');

            pp_content.height(pp_content.height() - pp_details.outerHeight(true));

            $('.pp_description').hide();
            $('.pp_close').text("Fechar");
        }
    });
    $(".pp_content_container .close").live('click', function() {
        $.prettyPhoto.close();
    });
}
