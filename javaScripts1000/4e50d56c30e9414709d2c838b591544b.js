    function splitHostname() {
        var result = {};
        var regexParse = new RegExp('([a-z\-0-9]{2,63})\.([a-z\.]{2,5})$');
        var urlParts = regexParse.exec(window.location.hostname);
        result.domain = urlParts[1];
        result.type = urlParts[2];
        result.subdomain = window.location.hostname.replace(result.domain + '.' + result.type, '').slice(0, -1);;
        return result;
    }

    function setCustomCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        var splitHostName = splitHostname();
        document.cookie = name + "=" + (value || "") + expires + "; domain=" + splitHostName.domain + '.' + splitHostName.type;
    }

    function redirectToCommunity(url) {
        setCustomCookie('coming-from-login-page', " ", 1);
        window.location.href = url;
    }
