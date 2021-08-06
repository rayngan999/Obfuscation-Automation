<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-PSCCSHQ"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

<script type="text/javascript">
    function getGoogleTagManagerId(){
        var id = 'GTM-PSCCSHQ',
            urlId=(/gtmid=GTM-(.)*/ig).exec(window.frameElement.src);
        if(urlId !== null && urlId.length>0)
            id = urlId[0].split('=')[1];
        return id;
    }

    function isIframe() {
        try {
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    }

    function trimUrl(url, isGtmUrlTrimmerEnabled) {
        if (isGtmUrlTrimmerEnabled) {
            var firstSlashIndex = url.indexOf('/');
            var secondSlashIndex = firstSlashIndex > -1 ? url.substring(firstSlashIndex + 1).indexOf('/') : -1;
            if (secondSlashIndex > -1) {
                return url.substring(0, secondSlashIndex + 1);
            }
        }
        return url;
    }

    if (isIframe()) {
        var parent = window.parent;
        var parentDoc = parent.document;
        var isGtmUrlTrimmerEnabled = typeof parent.R9 !== 'undefined' && parent.R9.config && parent.R9.config.getBoolean('ui.gtmUrlTrimmer.enabled', false);
        isGtmUrlTrimmerEnabled = isGtmUrlTrimmerEnabled || parent.isGtmUrlTrimmerEnabled;

        var title = isGtmUrlTrimmerEnabled ? '' : parentDoc.title;

        Object.defineProperty(document, 'referrer', {
            get: function() {
                if (isGtmUrlTrimmerEnabled) {
                    return;
                }
                return parentDoc.referrer;
            },
        });

        if (window.history && window.history.replaceState) {
            var origin = parentDoc.location.origin;
            var pathname = trimUrl(parentDoc.location.pathname, isGtmUrlTrimmerEnabled);
            var search = parentDoc.location.search;
            window.history.replaceState('', title, origin + pathname + search);
        }
        document.title = title;
    }

</script>

<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','unifiedDataLayer',getGoogleTagManagerId());</script>

</body>
</html>
