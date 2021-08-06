<body style="margin:0px;">
<script type="application/javascript">
    var URLToArray = function (url) {
        var request = {};
        var pairs = url.substring(url.indexOf('?') + 1).split('&');
        for (var i = 0; i < pairs.length; i++) {
            if (!pairs[i])
                continue;
            var pair = pairs[i].split('=');
            request[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
        return request;
    };

    function escapeHtml(text) {
        var map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };

        return text.replace(/[&<>"']/g, function (m) {
            return map[m];
        });
    }

    function getAcceptedParams(currentUrl) {
        var acceptedParams = {};
        if (currentUrl.indexOf("?") === -1) {
            throw "No parameters passed"
        }
        var url_parts = currentUrl.split('?', 2);
        var parameters = URLToArray(url_parts[1]);

        if (typeof parameters.tags === 'string' || parameters.tags instanceof String) {
            acceptedParams.ad_tags = escapeHtml(parameters.tags);
        }

        if (typeof parameters.el === 'string' || parameters.el instanceof String) {
            acceptedParams.ad_el = escapeHtml(parameters.el);
        }

        if (
            (typeof parameters.notify === 'string' || parameters.notify instanceof String) && parameters.notify === '1'
        ) {
            acceptedParams.notify = escapeHtml(parameters.notify);
        }

        return acceptedParams;
    }

    var currentUrl = window.location.href;
    var pageParams = {};
    try {
        pageParams = getAcceptedParams(currentUrl);
    } catch (err) {
        console.log(err);
    }

    var ad_idzone = "2864078";
    var ad_width = "300";
    var ad_height = "250";

    
    
    
    if (typeof pageParams.ad_tags != 'undefined') {
        var ad_tags = pageParams.ad_tags;
    }

    if (typeof pageParams.ad_el != 'undefined') {
        var ad_el = pageParams.ad_el;
    }

    if (typeof pageParams.notify != 'undefined') {
        var ad_notify = pageParams.notify;
    }

    var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    var eventer = window[eventMethod];
    var messageEvent = (eventMethod === "attachEvent") ? "onmessage" : "message";
    eventer(messageEvent, function(e) {
        if (e.data === "show-iframe-" + ad_idzone) {
            if (parent.postMessage) {
                parent.postMessage("show-iframe-" + ad_idzone, "*");
            }
        }
    }, false);
</script>
<script type="application/javascript" src="/ads.js"></script>
<noscript>
    <iframe src="https://syndication.exosrv.com/ads-iframe-display.php?idzone=2864078&output=noscript&type=300x250&sub=" width="300" height="250" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>
</noscript>
</body>
