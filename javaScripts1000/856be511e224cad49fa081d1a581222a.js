<!doctype html>
<html>
    <head></head>
    <body style="margin: 0">
        <script>
            function getQueryStringObject() {
                if (window.location.search === '') {
                    return {};
                }
                return window.location.search.substr(1).split('&').reduce(function (acc, cur) {
                    var split = cur.split('=');
                    acc[split[0]] = decodeURIComponent(split[1]);
                    return acc;
                }, {})
            }

            function serializeQueryString(obj) {
                var str = [];
                for (var p in obj) {
                    if (obj.hasOwnProperty(p)) {
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    }
                }
                return str.join("&");
            }

            function writeImg(url, image_src, width, height) {
                document.write(
                    '<a href="' + url + '" target="_blank">'
                    + '<img src="' + image_src + '" '
                    + 'style="width: ' + width + 'px; height: ' + height + 'px; border: none;">'
                    + '</a>'
                );
            }

            function sendRequest(method, url) {
                var http_request = new XMLHttpRequest();
                http_request.open(method, url, true);
                http_request.send();
            }
        </script>
            <script>
        sendRequest('GET', 'https://in16.zog.link/in/show/' + '?' + serializeQueryString(Object.assign(
            {},
            getQueryStringObject(),
            {"banner_id":2289,"banner_creative_id":4566}        )));
    </script>
            <div>
        <iframe src="https://chaturbate.com/in/?track=1clickadilla-thegay.com&tour=CoeM&campaign=taOsB&disable_sound=1&mobileRedirect=never&embed_video_only=1&target=_blank" height="250px" width="300px" frameborder="0" class="code" scrolling="no"></iframe>
    </div>
    </body>
</html>
