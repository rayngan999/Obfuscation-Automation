<!doctype html>
<html lang="en">

<head>
    <base href="/">
    <title>Credit One Bank</title>
    <meta name="description" content="General Service">
    <meta property="og:image" content="https://dvgpba5hywmpo.cloudfront.net/media/image/d49s3i7Rn2ru7xBuXWuS5SCA1"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">

    
    <link href="//netdna.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" />
    <meta charset="utf-8">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0079fe">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="theme-color" content="#ffffff">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.13/es5-shim.min.js"></script>
<link rel="stylesheet" href="styles.0f8087b559525cba93cd.css"></head>

<body style="position: relative;">
    <app-root>
        <div style="position: absolute; display: flex; align-items: center; justify-content: center; top: 0; left: 0; right: 0; bottom: 0">
            <img src="/assets/img/loader.gif" alt="SnatchBot Webchat is loading, please wait..." style="width: 150px">
        </div>
    </app-root>
    
    <script>

        var googleMapsError = false,
            googleMapsOpened = false,
            googleMapsLoaded = false;
            appendChild = Element.prototype.appendChild;

        Element.prototype.appendChild = function (element) {
            var isGMapScript = element.tagName === 'SCRIPT' && /maps\.googleapis\.com/i.test(element.src);

            if (isGMapScript && element.src.indexOf('AuthenticationService') !== -1) {
                googleMapsLoaded = true;
            }

            return appendChild.call(this, element);
        };

        function gm_authFailure() {
            googleMapsError = true;
        }
    </script>

<script src="runtime-es2015.7bce183f1ed5ae5f2249.js" type="module"></script><script src="runtime-es5.7bce183f1ed5ae5f2249.js" nomodule defer></script><script src="polyfills-es5.ff63e8889decc16f095f.js" nomodule defer></script><script src="polyfills-es2015.672b7a2e40e72b3e4f33.js" type="module"></script><script src="scripts.283183af5a3027be6590.js" defer></script><script src="main-es2015.1008784bdeae28109d10.js" type="module"></script><script src="main-es5.1008784bdeae28109d10.js" nomodule defer></script></body>

</html>