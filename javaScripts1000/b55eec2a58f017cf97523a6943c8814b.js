<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <title>LiveChat customer auth</title>
    <script>
        var response = (location.hash || location.search).replace(/^(\?|#)/, '').split('&').map(function (pair) {
            return pair.split('=').map(decodeURIComponent)
        }).reduce(function (obj, pair) {
            obj[pair[0]] = pair[1]
            return obj
        }, {})
        parent.postMessage(response, response.redirect_uri)
    </script>
</head>

<body></body>

</html>
