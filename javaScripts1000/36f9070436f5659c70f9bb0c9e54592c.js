

<!DOCTYPE html>
<html lang="en_GB">
    <head>
        <script src="/auth-service/sso/resources/dist/main.min.js?1626692687"></script>
    </head>
    <body>
        <script type="application/javascript">
            if (isInIframe()) {
                window.addEventListener("message", receiveMessage);
            }

            function isInIframe() {
                try {
                    return window.self !== window.parent;
                } catch (e) {
                    // can happen in case of some browsers, which block access to window.parent due to same origin policy
                    // in such case, exception means that the page is actually displayed in the iframe
                    return true;
                }
            }

            function receiveMessage(e) {
                e.source.postMessage(getSessionStatus(e.data, e.origin), e.origin);
            }

            function getSessionStatus(data, origin) {
                try {
                    // data should contain 'client_id hash.salt'

                    var messageParts = data.split(' ');
                    if (messageParts.length !== 2) {
                        return 'error';
                    }

                    var clientId = messageParts[0];
                    var actualSessionState = messageParts[1];

                    var stateParts = actualSessionState.split('.');
                    if (stateParts.length !== 2) {
                        return 'error';
                    }

                    var salt = stateParts[1];

                    var browserState = Cookies.get('bs');
                    if (!browserState) {
                        return 'changed';
                    }

                    var expectedSessionState = CryptoJS.SHA1(clientId + origin + browserState + salt) + "." + salt;
                    return actualSessionState === expectedSessionState ? 'unchanged' : 'changed';
                } catch (e) {
                    return 'error';
                }
            }
        </script>
    </body>
</html>