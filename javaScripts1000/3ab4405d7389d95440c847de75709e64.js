<!DOCTYPE html>
<!--[if lt IE 7]>      <html lang="en" ng-app="searchApp" class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html lang="en" ng-app="searchApp" class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html lang="en" ng-app="searchApp" class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="en" ng-app="searchApp">
<!--<![endif]-->
<head ng-controller="HeadCtrl">
<meta charset="UTF-8" />
<title>Search for car rental</title>
<base href="/partners/integrations/stand-alone-app/"> <meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex, nofollow" />
<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet" type="text/css" />
<link rel="stylesheet" href="css/base.css" />
<link id="css-hook" rel="stylesheet" ng-href="{{ template }}" />
<link rel="stylesheet" ng-href="{{ stylesheet }}" ng-if="stylesheets" css-loaded ng-repeat="stylesheet in stylesheets" />
<!--[if lt IE 9]>
      <script>
        document.createElement("ng-view");
      </script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
      <script src="https://secure.rentalcars.com/js/widget/rw-html5shiv.min.905ad.1.js"></script>
      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.1.10/es5-shim.min.js"
      ></script>
    <![endif]-->
<script src="js/app.min.js"></script>
</head>
<body>
<ng-view></ng-view>

<script type="text/javascript">
      /* get paramater by name */
      function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return "";
        return decodeURIComponent(results[2].replace(/\+/g, " "));
      }
      /* end of get paramater by name */
      /* dataLayer */
      dataLayer = [
        {
          pagename: "stand-alone-app",
          affiliateCode: getParameterByName("affiliateCode"),
          rcid: getParameterByName("rcid"),
          language: getParameterByName("preflang"),
          adcamp: getParameterByName("camp"),
          adplat: getParameterByName("plat"),
          adco: "",
          cor: getParameterByName("cor"),
          protocol: "https:" == document.location.protocol ? "https" : "http",
          displayCurrency: getParameterByName("prefcurrency"),
          channel: "Affiliates",
          utmctr: getParameterByName("utmctr"),
          utmcct: getParameterByName("utmcct"),
          utmccn: getParameterByName("utmccn"),
          utmcsr: getParameterByName("utmcsr"),
          utmcmd: getParameterByName("utmcmd"),
          __utma: getParameterByName("__utma"),
          __utmb: getParameterByName("__utmb"),
          __utmc: getParameterByName("__utmc"),
          __utmx: getParameterByName("__utmx"),
          __utmz: getParameterByName("__utmz"),
          __utmv: getParameterByName("__utmv"),
          __utmk: getParameterByName("__utmk"),
          __ga: getParameterByName("_ga")
        }
      ];
      /* end of dataLayer */
    </script>


<script>
      (function(w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, "script", "dataLayer", "GTM-ND9GV5");
    </script>


<noscript><iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-ND9GV5"
        height="0"
        width="0"
        style="display:none;visibility:hidden"
      ></iframe
    ></noscript>

</body>
</html>
