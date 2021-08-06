ï»¿var Community = function () {
    var _config = function () {
        var scriptName = '/tracker/tracker.js';
        var data = { apiRootUrl: '', brand: '', browser_id: '' };

        var _init = function () {
            var scriptUrl = $('script[src*="' + scriptName + '"]')[0].src;
            data.apiRootUrl = scriptUrl.split('?')[0].replace(scriptName, '/');
        }
        _init();

        return {
            getApiRootUrl: function () { return data.apiRootUrl; },
            getTrackerUrl: function () { return data.apiRootUrl + 'tracker/tracker.ashx'; },
            setBrand: function (brand) { data.brand = brand; },
            getBrand: function () { return data.brand; },
            setBrowserId: function (browser_id) { data.browser_id = browser_id; },
            getBrowserId: function () { return data.browser_id; },
        };
    }();

    var isAnArray = function (arg) {
        if (Array.isArray) { return Array.isArray(arg); }
        else { return Object.prototype.toString.call(arg) === '[object Array]'; };
    };

    var isAString = function (arg) {
        return (typeof arg === 'string' || arg instanceof String);
    };

    var AggregateIfListList = function (list) {
        try {
            if (!isAnArray(list)) {
                if (isAString(list)) { return list; }
                return '';
            }
            var aggregatedValue = '';
            list.forEach(function (item) { aggregatedValue += '|' + item; });
            if (aggregatedValue.length > 0) { aggregatedValue += '|'; }
            if (aggregatedValue && isAString(aggregatedValue)) return aggregatedValue;
        } catch (e) { }
        return '';
    };

    var _track = function (options) {
        var date = new Date();
        var argsNames = "";
        var args = {
            "date": date.getTime(),
            "url": document.location,
            "referrer": document.referrer,
            "useragent": navigator.userAgent,
            "t": "views",
            "platform": navigator.platform,
            "brand": _config.getBrand(),
            //"options": options
            "feature": (options && options.feature) ? options.feature : '',
            "properties": (options && options.properties) ? AggregateIfListList(options.properties) : '',
            "tags": (options && options.tags) ? AggregateIfListList(options.tags) : ''
        };

        for (i in args) {
            if (args.hasOwnProperty(i)) {
                argsNames += i + ";";
            }
        }

        try {
            var i = document.createElement("img");
            i.src = _config.getTrackerUrl() + "?_h=" + (new Date()).getTime() + "&" + serialize(args);

            document.appendChild(i);
        }
        catch (err) { }
    };

    var _lake = function () {
        var date = new Date();
        var argsNames = "";
        var args = {
            "browser_id": _config.getBrowserId(),
            "t": "datalake",
            "url": document.location,
            "timestamp": date.getTime(),
            "brand": _config.getBrand()
        };

        for (i in args) {
            if (args.hasOwnProperty(i)) {
                argsNames += i + ";";
            }
        }

        try {
            var i = document.createElement("img");
            i.src = _config.getTrackerUrl() + "?_h=" + (new Date()).getTime() + "&" + serialize(args);

            document.appendChild(i);
        }
        catch (err) { }
    };

    var serialize = function (obj, prefix) {
        var str = "";
        var lastprop = "";
        prefix = (prefix ? prefix : "");
        for (prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                if (lastprop.length > 0)
                    str += lastprop + "&";
                lastprop = prefix + prop.toString() + "=" + encodeURIComponent(obj[prop] == undefined ? "" : obj[prop].toString());
            }
        }
        str += lastprop;
        return str;
    };

    return {
        track: function () {
            _track();
        },
        track: function (feature, properties, tags) {
            _track({ feature: feature, properties: properties, tags: tags });
        },
        track: function (options) {
            // options Ã© opcional e todas as properties tb sÃ£o opcionais
            // ex: { feature: 'article', properties: ['video'], tags: ['futebol'] }
            // ex: { tags: ['ng:nacional'] }
            _track(options);
        },
        datalake: function () {
            _lake();
        },
        brand: function (brand) {
            _config.setBrand(brand);
        },
        browser_id: function (browser_id) {
            _config.setBrowserId(browser_id);
        }
    };
}();