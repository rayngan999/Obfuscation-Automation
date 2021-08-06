ï»¿(function ($) {

    window.areVirtualGoodsAlreadyPaid = function() {
        $(".jq-virtual-good").each(function () {
            var itemId = $(this).attr("data-id");
            var clientVirtualGoods = window.readCookie("FitVirtualGoodsCookie");
            if (clientVirtualGoods.toUpperCase().indexOf(itemId.toUpperCase()) >= 0) {

                $(this).replaceWith('<div class="cc-content-purchased-icon" style="display:block">' +
                    '                <div class="cc-svg cc-svg-purchased"><span>Acquistato</span></div>' +
                    '                <span class="cc-text"><strong>Acquistato</strong></span>' +
                    '            </div>');
            }
        });
    };

    
    $(function () {
        window.areVirtualGoodsAlreadyPaid();
    });

})(jQueryV2);