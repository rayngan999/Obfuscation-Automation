(function (d, w) {
function getServer() {
    var server = 'www.hotelscombined.co.uk';
    var currentHost = d.location.hostname;
    if (currentHost.indexOf('hotelscombined') > -1) {
        var subdom = currentHost.split('.')[0];
        if (subdom === 'www' || subdom.length === 2) {
            server = currentHost;
        }
    } else if (currentHost.indexOf('detectahotel') > -1 || currentHost.indexOf('roomguru') > -1 || currentHost.indexOf('biyi') > -1) {
        server = currentHost;
    }
    return server;
}

function getCaptchaId() {
    var s = document.location.pathname.split('/');
    return s[s.length - 1];
}

function validateCaptcha(token) {
    var data = "requestHost=" + d.location.hostname + "&captchaToken=" + token + "&captchaId=" + getCaptchaId() + "&captchaType=ReCaptcha2";
    var url = "https://" + getServer() + "/h/bots/hc/captcha/verify";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.withCredentials = true;
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            if (typeof w._onCaptchaSuccess === "function") {
                var d = JSON.parse(xhr.responseText);
                w._onCaptchaSuccess(d.success);
            }
        }
    };
    xhr.send(data);
}

function logCaptchaShown() {
    var data = "requestHost=" + d.location.hostname + "&captchaId=" + getCaptchaId() + "&captchaType=ReCaptcha2";
    var url = "https://" + getServer() + "/h/bots/hc/captcha/shown";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);
}

function loadCaptcha() {
    var s = d.createElement('script');
    s.async = true;
    s.defer = true;
    s.src = 'https://www.google.com/recaptcha/api.js';
    var a = d.getElementsByTagName('head')[0].appendChild(s);
    a.parentNode.insertBefore(s, a);
}

var a = d.getElementById('r9-captcha');
a.className += ' g-recaptcha';
a.setAttribute('data-sitekey', '6LdP__4SAAAAAGUXXlqaRXStDlw4Cm067cFlF66V');
a.setAttribute('data-callback', '_validateCaptcha');

loadCaptcha();
logCaptchaShown();
w._validateCaptcha = validateCaptcha;
})(document, window);
