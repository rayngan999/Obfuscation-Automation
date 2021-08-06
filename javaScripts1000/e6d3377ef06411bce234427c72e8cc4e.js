ï»¿var _mobileWidth = 640;
var _frameId = 'oo-chat-widget-frame'

var meta = document.createElement('meta');
meta.setAttribute('name', 'viewport');
meta.setAttribute('content', 'width=device-width, initial-scale=1');
document.getElementsByTagName('head')[0].appendChild(meta);

var frame = document.createElement('iframe');
frame.id = _frameId;
frame.src = 'https://chat.slsp.sk/WCW/index.html?t=' + Date.now();
frame.style.border = 'none';
frame.style.position = 'fixed';
frame.style.bottom = '0';
frame.style.right = '0';
frame.style.zIndex = 99999;
frame.style.boxSizing = 'content-box';
frame.width = '0';
frame.height = '0';

document.body.appendChild(frame);


function displayMessage(e) {
    var frame = document.getElementById(_frameId);
    if (frame && e.data && e.data.type) {
        switch (e.data.type) {
            case 'resize':
                resizeFrame(frame, e);
                break;
            case 'metadata':
                postMetadataMessage(frame);
                postSizeMessage(frame);
                break;
            case 'cobrowsing':
                cb_Begin(e.data.clientGuid);
        }
    }
}

function resizeFrame(frame, e) {
    var frameWidth;
    var frameHeight;
    var frameRight;
    var frameBottom;

    if (getScreenWidth() > _mobileWidth) {
        document.body.style.position = '';

        frameWidth = e.data.width;
        frameHeight = e.data.height;
        frameRight = '50px';
        frameBottom = e.data.nhwc && !e.data.expanded ? '20px' : '0';
    } else {
        if (e.data.expanded) {
            document.body.style.position = 'fixed'
        } else {
            setTimeout(function () {
                document.body.style.position = '';
            }, 100);
        }

        frameWidth = e.data.expanded ? '100%' : e.data.width;
        frameHeight = e.data.expanded ? '100%' : e.data.height;
        frameRight = e.data.expanded ? '0' : '20px';
        frameBottom = e.data.expanded ? '0' : '20px';
    }

    frame.width = frameWidth;
    frame.height = frameHeight;
    frame.style.right = frameRight;
    frame.style.bottom = frameBottom;
    frame.style.border = 'solid 1px transparent';
}

function postSizeMessage(frame) {
    var message = {
        type: 'size',
        width: getScreenWidth(),
        height: getScreenHeight()
    };
    frame.contentWindow.postMessage(message, '*');
}

function postMetadataMessage(frame) {
    var message = {
        type: 'metadata',
        url: window.location.href,
        webchatUsername: window.webchatUsername,
        webchatEmail: window.webchatEmail
    };
    frame.contentWindow.postMessage(message, '*');
}

function windowResize(e) {
    var frame = document.getElementById(_frameId);
    if (frame) {
        setTimeout(function () {
            postSizeMessage(frame);
        }, 100);
    }
}

if (window.addEventListener) {
    window.addEventListener("message", displayMessage, false);
    window.addEventListener("resize", windowResize, false);
}
else {
    window.attachEvent("onmessage", displayMessage);
    window.addEventListener("resize", windowResize);
}

function getScreenWidth() {
    return (window.innerWidth > 0) ? window.innerWidth : screen.width;
}

function getScreenHeight() {
    return (window.innerHeight > 0) ? window.innerHeight : screen.height;
}
