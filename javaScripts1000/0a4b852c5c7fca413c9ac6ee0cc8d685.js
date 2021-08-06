var smg = smg || {};

smg['plugins'] = smg.plugins || {};

(function($, plugins) {

    var ajaxSelf;

    plugins.ajaxWidgets = {
        'ajaxURL': '/ajax',
        'widgetDivs': false,

        init: function() {
            ajaxSelf = this;

            ajaxSelf.widgetDivs = $('div.ajax-widget');
            var widgetList = ajaxSelf.getWidgetList();
            
            if (widgetList.length > 0) {
                $.ajax({
                    url: ajaxSelf.ajaxURL,
                    contentType: "application/json",
                    type: "GET",
                    data: {
                        action: 'get_sm_ajax_widgets',
                        widgetList: widgetList
                    },
                    success: function(r) {
                        Object.keys(r).forEach(function(key) {
                            ajaxSelf.widgetDivs.filter('[data-widget-id="' + key + '"]').replaceWith(r[key]);
                        });
                    }
                });
            }
        },

        getWidgetList: function() {
            var result = [];

            ajaxSelf.widgetDivs.each(function(e) {
                result.push($(this).attr('data-widget-id'));
            });

            return result;
        }
    };

    // TODO: make this happen sooner than doc ready?
    $(document).ready(function() {
        plugins.ajaxWidgets.init();
    });

})(jQuery, smg.plugins);