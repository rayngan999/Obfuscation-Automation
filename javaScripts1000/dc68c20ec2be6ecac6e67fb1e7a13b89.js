<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sync Pixels</title>
</head>
<body>

<script>

    var syncPixels = "https://sync.mathtag.com/sync/img?mt_exid=75&redir=%2F%2Fonetag-sys.com%2Fsync%2Fi%2C1%2F%5BMM_UUID%5D https://pixel-eu.rubiconproject.com/exchange/sync.php?p=onetag https://dmp.adform.net/serving/cookie/match?party=1167&cid=yBesYLyBqHGZq_ryeTwERTlTNReX6vqD8OIsQKMIsyg https://cm.g.doubleclick.net/pixel?google_nid=one_tag&google_cm&no_r=1 https://pixel.rubiconproject.com/tap.php?v=223352&nid=4584&put=yBesYLyBqHGZq_ryeTwERTlTNReX6vqD8OIsQKMIsyg https://pixel.advertising.com/ups/58198/sync?&gdpr=${GDPR}&gdpr_consent=${GDPR_STRING}&redir=true https://ups.analytics.yahoo.com/ups/58488/occ https://match.adsrvr.org/track/cmf/generic?ttd_pid=vw6iyrn&ttd_tpi=1&gpdr=${GDPR}&gdpr_consent=${GDPR_STRING} https://x.bidswitch.net/sync?ssp=onetag";
    var syncIframes = "";

    var GDPR_APPLIES = "gdpr=";
    var GDPR = "gdpr_consent=";
    var US_PRIVACY = "us_privacy=";


    var params = location.search.substring(1);
    var consentString = "";
    var usPrivacy = "";
    var gdprAppliesValue = "1";

    try {

        var index = params.indexOf(GDPR);
        if (index >= 0) {
            consentString = params.substring(index + GDPR.length).split("&")[0];
        }

        index = params.indexOf(GDPR_APPLIES);
        if (index >= 0) {
            var tmp = params.substring(index + GDPR_APPLIES.length).split("&")[0];
            gdprAppliesValue = (tmp == null || tmp === "" || tmp === "1") ? "1" : "0";
        }

        index = params.indexOf(US_PRIVACY);
        if (index >= 0) {
            usPrivacy = params.substring(index + US_PRIVACY.length).split("&")[0];
        }

    } catch (e) {
        console.log("Can't detect gdpr consent string");
    }

    if (syncPixels) {

        var sync = syncPixels.split(" ");
        if (sync != null) {
            sync.forEach(function(url) {

                url = url.replace("${GDPR}",gdprAppliesValue);
                url = url.replace("${GDPR_STRING}", consentString);
                url = url.replace("${US_PRIVACY}", usPrivacy);

                new Image().src = url;

            });
        }
    }

    if (syncIframes) {

        var syncF = syncIframes.split(",");
        if (syncF != null) {
            syncF.forEach(function(url) {

                url = url.replace("${GDPR}",gdprAppliesValue);
                url = url.replace("${GDPR_STRING}", consentString);
                url = url.replace("${US_PRIVACY}", usPrivacy);

                var iframe = document.createElement("iframe");
                iframe.src = url;
                iframe.style.display = "none";
                iframe.style.width = "0px";
                iframe.style.height = "0px";
                document.body.appendChild(iframe);

            });
        }
    }

</script>

</body>
</html>