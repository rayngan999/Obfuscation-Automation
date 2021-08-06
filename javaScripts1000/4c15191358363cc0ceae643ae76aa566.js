ï»¿(function ($) {
    $(function () {
        $(".jq-follow").each(function () {
            var fullname = $(this).attr("data-fullname");
            var name = $(this).attr("data-firstname");
            var clientChampions = window.readCookie("FitChampionsCookie");
            if (clientChampions.toUpperCase().indexOf(fullname.toUpperCase()) >= 0) {
                $(this).find('.cc-button-text').text('NON SEGUIRE ' + name);
            } else {
                $(this).find('.cc-button-text').text('SEGUI ' + name);
            }
        });
    });

})(jQueryV2);