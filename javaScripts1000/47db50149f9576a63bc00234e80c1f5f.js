(function (w, d) {
    var html = [];
    //var html = ['<img srr="dsp-server.com/mpixel">', '<img srr="dsp-server.com/mpixel">'];


function attr(el, attrs) {
    for (var key in attrs) {
        if (attrs.hasOwnProperty(key)) {
            el.setAttribute(key, attrs[key]);
        }
    }
}
function appendToBody(el, callback) {
    if (d.body) {
        d.body.appendChild(el);
        callback();
    } else {
        w.addEventListener("DOMContentLoaded", function () {
            d.body.appendChild(el);
            callback();
        });
    }
}
function addFrame(content) {
    var frame = d.createElement("iframe");
    attr(frame, {
        allowfullscreen: "true",
        allowtransparency: "true",
        frameborder: "0",
        hidefocus: "true",
        marginheight: "0",
        marginwidth: "0",
        mozallowfullscreen: "true",
        msallowfullscreen: "true",
        oallowfullscreen: "true",
        scrolling: "no",
        tabindex: "-1",
        webkitallowfullscreen: "true",
        width: "0",
        height: "0"
    });
    appendToBody(frame, function () {
        frame.contentWindow.document.write(content);
        frame.contentWindow.document.close();
    });
}
for (var i = 0, ln = html.length; i < ln; i++) {
    addFrame(html[i]);
}
}) (window, document);