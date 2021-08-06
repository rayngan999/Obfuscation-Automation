(function () {

    // Check capabilities.
    if (!document.querySelectorAll) return;
    if (!document.querySelector) return;
    if (!XMLHttpRequest) return;
    if (!document.addEventListener) return;

    // Tracking enabled?
    var pvs = document.querySelectorAll('[data-bsp-pv]');
    if (!pvs || pvs.length === 0) return;

    var script = document.querySelector('script[data-bsp-site]');
    var siteId = script ? script.getAttribute('data-bsp-site') : null;
    var url = '/_track';

    function getNow() {
        return +new Date();
    }

    function post(data, callback) {
        var req = new XMLHttpRequest();

        if (callback) {
            req.open('POST', url, false);
            req.onreadystatechange = function () {
                if (req.readyState === XMLHttpRequest.DONE && req.status === 200) {
                    callback();
                }
            }

        } else {
            req.open('POST', url, true);
        }

        req.send(JSON.stringify(data));
    }

    // Track page views.
    var pvIds = [ ];

    for (var i = 0, l = pvs.length; i < l; ++ i) {
        var pvId = pvs[i].getAttribute('data-bsp-pv');

        if (pvId) {
            pvIds.push(pvId);
        }
    }

    post({
        s: siteId,
        e: 'pv',
        p: pvIds
    });

    // Track traffic source
    var referrer = "";

    if (document.referrer) {
        var anchor = document.createElement("a");
        anchor.href = document.referrer;
        referrer = anchor.host;
    }
    post({
        s: siteId,
        e: 'ch',
        r: referrer,
        u: window.location.href
    });

    // Track visitors and visits
    var localStorage = window.localStorage;

    if (localStorage) {
        var siteSuffix = siteId ? '.' + siteId : '';
        var UV = 'bsp.analytics.uniqueVisit' + siteSuffix;
        var VS = 'bsp.analytics.visitStarted' + siteSuffix;
        var LA = 'bsp.analytics.lastActivity' + siteSuffix;

        function setItem(key, value) {
            try {
                localStorage.setItem(key, value);
            } catch (e) {
                // Ignore quota errors.
            }
        }

        if (!localStorage.getItem(UV)) {
            setItem(UV, true);
            post({
                s: siteId,
                e: 'uv'
            });
        }

        var visitStarted = localStorage.getItem(VS);
        var lastActivity = localStorage.getItem(LA);
        var now = getNow();

        setItem(LA, now);

        if (!visitStarted || (parseInt(visitStarted) + 12 * 60 * 60 * 1000) < now) {
            setItem(VS, now);
            post({
                s: siteId,
                e: 'v'
            });

        } else if (!lastActivity || (parseInt(lastActivity) + 30 * 60 * 1000) < now) {
            post({
                s: siteId,
                e: 'v'
            });
        }
    }

    // Track time on page.
    TimeMe.initialize({
        idleTimeoutInSeconds: 30
    });

    var timeOnPage = 0;
    var interval = 10000;
    var maxInterval = interval * 32;

    function postTimeOnPage () {
        if (interval < maxInterval) {
            interval = interval * 2;
        }

        setTimeout(postTimeOnPage, interval);

        var newTimeOnPage = TimeMe.getTimeOnCurrentPageInSeconds();
        var diff = newTimeOnPage - timeOnPage;

        if (diff > 0) {
            timeOnPage = newTimeOnPage;

            // Guard against abnormal time, typically caused by the machine
            // sleeping.
            post({
                s: siteId,
                e: 't',
                p: pvIds,
                t: diff > maxInterval ? maxInterval : diff
            });
        }
    }

    setTimeout(postTimeOnPage, interval);

    window.addEventListener('beforeunload', function () {
        var diff = TimeMe.getTimeOnCurrentPageInSeconds() - timeOnPage;

        if (diff <= 0) {
            return;
        }

        var data = {
            s: siteId,
            e: 't',
            p: pvIds,
            t: diff
        };

        if (navigator.sendBeacon) {
            navigator.sendBeacon(url, JSON.stringify(data));

        } else {
            var complete;
            var end = getNow() + 200;

            post(data, function () {
                complete = true;
            });

            while (!complete) {
                if (getNow() > end) {
                    break;
                }
            }
        }
    });
})();
