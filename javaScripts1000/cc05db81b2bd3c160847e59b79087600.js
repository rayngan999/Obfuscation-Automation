ï»¿
var jsonContentApiProxy = function () {
    var scriptName = '/js/json-content-api-proxy.js';
    var config = function () {
        var theValue = { apiRootUrl: '' };
        return {
            init: function () {
                var scriptUrl = $('script[src*="' + scriptName + '"]')[0].src;
                theValue.apiRootUrl = scriptUrl.split('?')[0].replace(scriptName, '/');
            },
            getApiRootUrl: function () { return theValue.apiRootUrl; }
        };
    }();

    config.init();
    return {
        post: function (action, payload, timeout) {
            if (!timeout) timeout = 60 * 1000; // 60 segundos 
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: config.getApiRootUrl() + action,
                    method: 'POST',
                    crossDomain: true,
                    data: JSON.stringify(payload),
                    dataType: 'json',
                    timeout: timeout
                }).done(function (data) {
                    resolve(data);
                }).fail(function (jqXHR) {
                    console.log('jsonContentApiProxy.post failed! - ' + jqXHR.responseText);
                    reject(new Error(jqXHR.responseText));
                });
            });
        },
        get: function (action, payload, timeout) {
            if (!timeout) timeout = 60 * 1000; // 60 segundos 
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: config.getApiRootUrl() + action,
                    method: 'GET',
                    crossDomain: true,
                    data: { options: JSON.stringify(payload) },
                    dataType: 'json',
                    timeout: timeout
                }).done(function (data) {
                    resolve(data);
                }).fail(function (jqXHR) {
                    console.log('jsonContentApiProxy.get failed! - ' + jqXHR.responseText);
                    reject(new Error(jqXHR.responseText));
                });
            });
        }
    };
}();

