(function() {
    // ÑÐ¾ÑÑÐ°Ð½ÑÐµÐ¼ Ð½ÐµÐ¾Ð±ÑÐ¾Ð´Ð¸Ð¼ÑÐµ Ð´Ð°Ð½Ð½ÑÐµ Ñ firebaseConfig
    const hostByPushServer = TASSPush.host;
    const websitePushID = TASSPush.safariPushID;

    const isSafari = /Safari/i.test(navigator.userAgent) && !/Chrome/i.test(navigator.userAgent);
    const isB = (function () {
        if (/Firefox/i.test(navigator.userAgent)) {
            return 'browser=1';
        }
        if (/Safari/i.test(navigator.userAgent) && !/Chrome/i.test(navigator.userAgent)) {
            return 'browser=3';
        }
        if (/OPR/i.test(navigator.userAgent)) {
            return 'browser=4';
        }
        if (/Chrome/i.test(navigator.userAgent)) {
            return 'browser=2';
        }
        return 'browser=0';
    })();

    const messaging = getFirebaseMessaging();

    /**
     * ÐÑÐ¿ÑÐ°Ð²Ð»ÑÐµÑ Ð¿Ð¾Ð»ÑÐ·Ð¾Ð²Ð°ÑÐµÐ»ÑÑÐºÐ¸Ðµ Ð´Ð°Ð½Ð½ÑÐµ Ð½Ð° ÑÐµÑÐ²ÐµÑ, ÐµÑÐ»Ð¸ Ð±ÑÐ» Ð¿Ð¾Ð´Ð¿Ð¸ÑÐ°Ð»ÑÑ Ð½Ð¾Ð²ÑÐ¹ Ð¿Ð¾Ð»ÑÐ·Ð¾Ð²Ð°ÑÐµÐ»Ñ
     * @param token ÑÐ¾ÐºÐµÐ½ ÑÐ³ÐµÐ½ÐµÑÐ¸ÑÐ¾Ð²Ð°Ð½Ð½ÑÐ¹ firebase.messaging Ð´Ð»Ñ Ð¿Ð¾Ð»ÑÐ·Ð¾Ð²Ð°ÑÐµÐ»Ñ
     * @param group ÑÑÑÐ¾ÐºÐ° Ñ Ð½Ð°Ð·Ð²Ð°Ð½Ð¸ÐµÐ¼ Ð³ÑÑÐ¿Ð¿Ñ Ð¿Ð¾Ð´Ð¿Ð¸ÑÑÐ¸ÐºÐ¾Ð² "article" Ð¿Ð¾ ÑÐ¼Ð¾Ð»ÑÐ°Ð½Ð¸Ñ
     * @returns { boolean } Ð·Ð°Ð²ÐµÑÑÐ¸ÑÑÑ Ð¿ÑÐµÐ¶Ð´ÐµÐ²ÑÐµÐ¼ÐµÐ½Ð½Ð¾, ÐµÑÐ»Ð¸ ÑÐ¾ÐºÐµÐ½ Ð½Ðµ Ð¾Ð±Ð½Ð¾Ð²Ð¸Ð»ÑÑ
     */
    function savePushToken(token, group) {
        if (token === getPushToken() && hasPushGroup(group)) {
            return true;
        }
        const query = isB+'&'+'endpoint=' + token + '&group=' + group;
        axios.post(hostByPushServer + '/device/subscribe', query, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(function (response) {
                setPushToken(token);
                hasPushGroup(group, "1");
            })
            .catch(function (error) {
                console.warn('subscribe error', error);
            });
    }

    /**
     * ÐÐ°Ð¿ÑÐ°ÑÐ¸Ð²Ð°ÐµÑ ÑÐ°Ð·ÑÐµÑÐµÐ½Ð¸Ðµ Ð½Ð° Ð¾ÑÐ¿ÑÐ°Ð²ÐºÑ ÑÐ²ÐµÐ´Ð¾Ð¼Ð»ÐµÐ½Ð¸Ð¹ Ð¿Ð¾Ð»ÑÐ·Ð¾Ð²Ð°ÑÐµÐ»Ñ,
     * Ð¿ÑÐ¸ ÑÑÐ¿ÐµÑÐ½Ð¾Ð¼ Ð¾ÑÐ²ÐµÑÐµ Ð²ÐµÑÐ½ÐµÑ ÑÐ¾ÐºÐµÐ½ Ð¿Ð¾Ð»ÑÐ·Ð¾Ð²Ð°ÑÐµÐ»Ñ, ÐºÐ¾ÑÐ¾ÑÑÐ¹ Ð·Ð°Ð¿Ð¸ÑÐµÑÑÑ Ð² localStorage
     * @param group ÑÑÑÐ¾ÐºÐ° Ñ Ð½Ð°Ð·Ð²Ð°Ð½Ð¸ÐµÐ¼ Ð³ÑÑÐ¿Ð¿Ñ Ð¿Ð¾Ð´Ð¿Ð¸ÑÑÐ¸ÐºÐ¾Ð² "article" Ð¿Ð¾ ÑÐ¼Ð¾Ð»ÑÐ°Ð½Ð¸Ñ
     */
    function pushSubscribeFcm(group) {
        messaging.requestPermission()
            .then(function() { return messaging.getToken();})
            .then(function(token) {
                savePushToken(token, group);
            });
    }

    function pushSubscribeSafari(group) {
        // Ensure that the user can receive Safari Push Notifications.
        if (!('safari' in window && 'pushNotification' in window.safari)) {
            return false;
        }
        // Safari push-notifications
        const host = hostByPushServer;
        const permissionData = window.safari.pushNotification.permission(websitePushID);
        if (permissionData.permission === 'default') {

            // This is a new web service URL and its validity is unknown.
            window.safari.pushNotification.requestPermission(
                host, // The web service URL.
                websitePushID,     // The Website Push ID.
                {
                    user_id: '19f8d7a6e9fb8a7f6d9330dabe',
                    group: group,
                }, // Data that you choose to send to your server to help you identify the user.
                function () {pushSubscribeSafari(group);}         // The callback function.
            );
        }
        else if (permissionData.permission === 'denied') {
            // The user said no.
        }
        else if (permissionData.permission === 'granted') {
            savePushToken(permissionData.deviceToken, group);
            // The web service URL is a valid push provider, and the user said yes.
            // permissionData.deviceToken is now available to use.
        }
    }

    function getPushToken() {
        return localStorage.getItem('push-token');
    }

    function setPushToken(token) {
        return localStorage.setItem('push-token', token);
    }

    function hasPushGroup(group, has) {
        const key = 'push-group-' + group;
        return !!(has === undefined ? localStorage.getItem('push-group-' + group) : localStorage.setItem(key, has));
    }

    /**
     * ÐÐ½Ð¸ÑÐ¸Ð»Ð¸Ð·Ð¸ÑÑÐµÑ firebase app ÑÐ¾Ð³Ð»Ð°ÑÐ½Ð¾ Ð¿ÐµÑÐµÐ´Ð°Ð½Ð½Ð¾Ð¼Ñ ÐºÐ¾Ð½ÑÐ¸Ð³Ñ
     * @returns FirebaseMessaging object
     */
    function getFirebaseMessaging() {
        firebase.initializeApp(TASSPush);
        return firebase.messaging();
    }

    //ÐÐ¾Ð±Ð°Ð²Ð»ÑÐµÐ¼ Ð³Ð»Ð¾Ð±Ð°Ð»ÑÐ½ÑÐµ Ð¼ÐµÑÐ¾Ð´Ñ
    window.pushSubscribe = isSafari ? pushSubscribeSafari : pushSubscribeFcm;
})();


//ÐÐ¾Ð´Ð¿Ð¸ÑÑÐ²Ð°ÐµÐ¼ÑÑ
document.addEventListener("DOMContentLoaded", function() {
    pushSubscribe('article');
});
