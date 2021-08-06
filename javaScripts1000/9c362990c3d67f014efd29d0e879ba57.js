var GoogleAnalyticsHelper = function (eventMap) {
    this.eventMap = eventMap;
};
GoogleAnalyticsHelper.prototype = {

    batchBindEventBy: function (uri) {
        for (var index in this.eventMap) {
            if (uri.match(index) && $.isArray(this.eventMap[index])) {
                this.batchBindEvent(this.eventMap[index]);
                break;
            }
        }
    },

    batchBindEvent: function (gaEventlist) {
        for (var index = 0; index < gaEventlist.length; index++) {
            this.bindEvent(gaEventlist[index]);
        }
    },

    bindEvent: function (gaParameter) {
        var gaHelper = this;

        gaParameter.gaEvent = gaParameter.gaEvent || gaHelper.getEventNameByDataAttr;

        var gaEvent = gaParameter.gaEvent;
        var selector = gaParameter.selector;
        var event = gaParameter.event;
        var gaCategory = gaParameter.gaCategory;

        $(function () {
            if (event == 'documentReady') {
                ga('send', 'event', gaCategory, gaEvent);
                return;
            }

            $(selector).on(event, gaParameter.delegate, function () {
                if (!gaHelper.before(gaParameter)) {
                    return true;
                }
                try {
                    var gaEventName = $.isFunction(gaEvent) ? gaEvent(this) : gaEvent.toString();
                    ga('send', 'event', gaCategory, gaEventName);
                    gaHelper.after(gaParameter);
                } catch (ex) {
                }
            });
        });
    },

    before: function (gaParameter) {
        if(gaParameter.ignoreBeforeCheck){
            return true;
        }

        if($.isFunction(gaParameter.before)) {
            var beforeDSL = gaParameter.before.call(this, gaParameter);

            const result = document.querySelectorAll(beforeDSL.selector);
            const operationFn = beforeDSL.operationFn !== 'undefined' && $.isFunction(beforeDSL.operationFn)
                ? beforeDSL.operationFn
                : function(result, expectedValue) {
                    return result[beforeDSL.attr] == expectedValue
                };

            return  typeof result !== "undefined" && operationFn(result, beforeDSL.val);

        }
        return !$(gaParameter.selector).attr(this.getDataKey(gaParameter.gaEvent));
    },

    after: function (gaParameter) {
        if(gaParameter.ignoreAfterCheck){
            return true;
        }
        $(gaParameter.selector).attr(this.getDataKey(gaParameter.gaEvent), true);
        return true;
    },

    getEventNameByDataAttr: function(element){
        var name = $(element).data('ga-event-name');
        return name || 'unknown';
    },

    getDataKey: function (eventName) {
        var name = $.isFunction(eventName) ? eventName(this) : eventName.toString();
        return ("ga-" + name + "-sent").replace(/\//ig, '').replace(/ /ig, '');
    }
};