(function (d) {
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

var data = "requestHost=" + d.location.hostname;
var url = "https://" + getServer() + "/h/bots/hc/sensor";
var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.withCredentials = true;
xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
        var res = JSON.parse(xhr.responseText);
        if (res && res.userToken) {
            var d = new Date();
            d.setTime(d.getTime() + (10 * 1000));
            var expires = "expires="+ d.toUTCString();
            document.cookie = "_kut=" + res.userToken + "; " + expires + "; path=/; Secure; SameSite=None";
        }
    }
};

xhr.send(data);

})(document);
