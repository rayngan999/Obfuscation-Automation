
    (function ($) {
        function initGoogleAnalytics(enabled) {
            if (enabled) {
               
                $.getScript("https://www.googletagmanager.com/gtag/js?id=UA-62622593-1")
                    .done(function(script, textStatus) {
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'UA-62622593-1', { 'anonymize_ip': true });
                    })
                    .fail(function( jqxhr, settings, exception ) {
                    });
               
            }
        }
        window.initGoogleAnalytics = initGoogleAnalytics;
    })(jQueryV2);
