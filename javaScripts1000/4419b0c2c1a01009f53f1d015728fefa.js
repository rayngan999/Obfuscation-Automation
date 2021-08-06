ï»¿(function ($) {
    $(function () {
        var searchForms = $("form[name=search]");
        searchForms.each(function (index) {
            $(this).submit(function () {
                if ($(this).find("input[name=search-terms]").val().trim() === "" || pageEditorMode()) {
                    return false;
                }
            });
        });
    });
})(jQueryV2);
