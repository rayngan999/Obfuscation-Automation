;
if (window.jQuery) (function ($) {
    $.ajaxPrefilter(function (options, originalOptions, jqXHR) {
        if (options.type.toLowerCase() == 'get') {
            return;
        }

        if (!options.data || options.data.indexOf(YII_CSRF_TOKEN_KEY) == -1) {

            var newOptionsData = '';
            if (originalOptions.data != null) {
                newOptionsData = (jQuery.type(originalOptions.data) === "string") ? originalOptions.data : $.param(originalOptions.data);
            }
            newOptionsData += (newOptionsData == '' ? '' : '&') + YII_CSRF_TOKEN_KEY + '=' + YII_CSRF_TOKEN_VALUE;
            options.data = newOptionsData;
        }
    });

})(jQuery);