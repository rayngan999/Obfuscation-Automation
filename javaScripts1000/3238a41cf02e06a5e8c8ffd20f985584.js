(function (w, d, s) {
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s);
    j.async = true;
    j.src = 'https://dmp.im-apps.net/sdk/im-uid.js';
    f.parentNode.insertBefore(j, f);
    w.IMUIDRequest = w.IMUIDRequest || [];
    w.IMUIDPushed = w.IMUIDPushed || [];
    var rtCk = '_im_uid_ses.3929',
        l = rtCk.length + 1,
        ckAry = document.cookie.split("; "),
        ckVal = '';
    for (var i = 0; i < ckAry.length; i++) {
        if (ckAry[i].substr(0, l) === rtCk + "=") {
        ckVal = ckAry[i].substr(l, ckAry[i].length);
        break;
        }
    }
    if (!ckVal) {
        if (w.IMUIDPushed.indexOf(3929) < 0) {
        w.IMUIDPushed.push(3929);
        w.IMUIDRequest.push({
            customerId: 3929,
            callback: function (res) {
            var setCookie = function (name, exp, val) {
                var expiryDate = new Date();
                expiryDate.setTime(expiryDate.getTime() + exp * 1000);
                document.cookie = name + "=" + val +
                "; expires=" + expiryDate.toUTCString() +
                "; path=/" +
                "; domain=." + window.location.hostname +
                (window.location.protocol == "https:" ? "; SameSite:None; secure;" : ";");
            };
            setCookie('_im_uid.3929', 90 * 24 * 60 * 60, res.uid);
            setCookie('_im_uid_ses.3929', 30 * 60, 1);
            },
            callbackTimeout: 3000
        });
        }
    }
})(window,document,'script');

