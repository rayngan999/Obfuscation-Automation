<!DOCTYPE html>

<html lang="en" ng-app="FraseBot">
<head>
    <title>Frase Widget</title>
    <meta charset="UTF-8" />
    <meta name="robots" content="noindex" />
    <meta name="robots" content="nofollow" />

    <!--/ jquery and angular libraries /-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.3/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.3/angular-cookies.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.3/angular-resource.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.3/angular-sanitize.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.min.js"></script>

    <!--/ fonts /-->
    <link href="https://dns.frase.io/core_platform/css/minified_files/google_fonts.min.versioning1598399392.css" rel="stylesheet" type="text/css" />
    <link href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" rel="stylesheet" type="text/css" />

    <!--/ angular controllers /-->
    <script src="https://dns.frase.io/frase_bot/minified_files/frase_bot_app.min.js"></script>
    <script src="https://dns.frase.io/frase_bot/controllers/minified_files/bot_controller.min.js"></script>

    <!--/ js libs /-->
    <script src="https://dns.frase.io/js/libraries/minified_files/moment.min.versioning1603761048.js"></script>
    <script src="https://dns.frase.io/js/libraries/minified_files/moment_timezones.min.js"></script>
    <script src="https://dns.frase.io/js/libraries/minified_files/webfont.min.versioning1603761048.js"></script>

    <!--/ css /-->
    <link href="https://dns.frase.io/frase_bot/css/minified_files/bot.min.versioning1619562360.css" rel="stylesheet" type="text/css" />

    <base href="/bot/" />
</head>
<body>
<div id="parent-container" ui-view="" class="content-wrapper"></div>
</body>
</html>
