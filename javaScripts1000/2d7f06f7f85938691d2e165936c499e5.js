<!doctype html>
<html ng-app="dorgEuiApp">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="google-site-verification" content="FZ_7yLM2ZRm31wgOsSiVVEulmqEpS_UFSs53JvzbzX8" />
    <base href=".">
    <title ng-bind="($state.current.data.$title || $title || 'Home') + ' | ZoomInfo Discover'">ZoomInfo Discover</title>
    <link rel="stylesheet" href="bower_components/ui-core/dist/dorg-ui-core.css" />
    <link rel="stylesheet" href="https://cdn1.aws.discoverydb.com/openlayers/v4.2.0-dist/ol.css" />

    <!-- Polyfills for Internet Explorer -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.16/system-polyfills.js"></script>

    <link rel="stylesheet" href="app/4945a7a3.vendor.css">

    <link rel="stylesheet" href="app/dc4783dc.app.css">

    <!-- in:newrelic -->
    <script type="text/javascript" src="app/ede64427.newrelic.js"></script>
    <!-- endnewrelic -->

    <link href="assets/images/favicon.png" rel="shortcut icon" type="image/x-icon" />
    <script type="text/javascript" src="https://cdn1.aws.discoverydb.com/openlayers/v4.2.0-dist/ol.js"></script>
    <script type="text/javascript"> window.isIE9 = false; </script>
</head>

<body ng-jq ng-class="{'with-padding': !isLoginPage}">
    <a id="liveagent_button_online" href="javascript://Chat" style="display: none;"><!-- Online Chat Content --></a>
    <div id="liveagent_button_offline" style="display: none;"><!-- Offline Chat Content --></div>
    <discoverorg-logo-component class="login-image-container" ng-if="!Session.authenticated && !isLoginPage"></discoverorg-logo-component>
    <nav-bar-component ng-if="Session.authenticated" id="navbar-main" show-header="showHeader" ng-class="{'quickSearchLanding': !showHeader}"></nav-bar-component>
    <div flash-message="2000"></div>
    <section id="well" ui-view ng-class="{isSearch:isSearch, isLoginPage: isLoginPage,'with-padding': !isLoginPage}"></section>
    <footer ng-if="!isLoginPage"></footer>
    <download-export-status></download-export-status>
    <upload-import-status ng-if="$root.Session.navigation"></upload-import-status>
    <div id="popoverBox"></div>

    <script src="app/50add54d.vendor.js"></script>

    <!-- Preload LinkedIn API -->
    <script src="//platform.linkedin.com/in.js" type="text/javascript"></script>
    <!-- End Preload LinkedIn API-->

    <!-- Pendo -->
    <script>
        (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=[];
        v=['initialize','identify','updateOptions','pageLoad'];for(w=0,x=v.length;w<x;++w)(function(m){
        o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
        y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/e95c0c55-8a01-453a-5029-e1a68991b4d8/pendo.js';
        z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');
    </script>
    <!-- End Pendo -->

    <!-- Load font references, due security constraints the font references are not loading properly in Internet Explorer with https protocol -->
    <script>
        (function() {
            var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
            if (isIE11) {
                var css = [
                'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-grid/3.0.7/ui-grid.min.css',
                'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
                ],
                i = 0,
                link = document.createElement('link'),
                head = document.getElementsByTagName('head')[0],
                tmp;
                link.rel = 'stylesheet';
                link.type = 'text/css';

                for(; i < css.length; i++){
                    tmp = link.cloneNode(true);
                    tmp.href = css[i];
                    head.appendChild(tmp);
                }
            }
        })();
    </script>
    <!-- End Load font references -->

    <script src="app/21af4a4f.app.js"></script>

    <!-- in:tpls -->
    <script type="text/javascript" src="app/3513b68e.app.tpls.js"></script>
    <!-- endtpls -->

    <!--[if IE 9]> <script type="text/javascript"> $('#well').addClass('ie'); window.isIE9 = true; </script> <![endif]-->
</body>
</html>
