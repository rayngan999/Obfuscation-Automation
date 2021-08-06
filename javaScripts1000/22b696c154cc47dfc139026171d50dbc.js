// Act-On Beacon Library copyright Â© Act-On Software

(function() {
window['ActOn'] = window['ActOn'] || {};
ActOn.Beacon = ActOn.Beacon || {};
ActOn.Beacon.q = ActOn.Beacon.q || [];

ActOn.Beacon.mode = ActOn.Beacon.mode || (function() {
var beaconMode = 0;
return function(mode) {
if (mode != null && mode != undefined) {
beaconMode = Math.max(beaconMode, mode);
} else {
return beaconMode;
}
};
})();

ActOn.Beacon.optIn = ActOn.Beacon.optIn || function(cb) {
var optIn = 0;

if (this.mode() < 1) cb(true);
else if (this.mode() === 3) cb(false);
else {
var mode = this.mode();
var now = +new Date();
var expiry = new Date();
expiry.setDate(expiry.getDate() + 365);
expiry = expiry.toUTCString();
if (document.cookie.indexOf('ao_optin=') >= 0) {
document.cookie = "ao_optin=" + now + ";path=/;expires=" + expiry;
optIn = 1;
cb(true);
} else if (document.cookie.indexOf('ao_optout=') >= 0) {
document.cookie = "ao_optout=" + now + ";path=/;expires=" + expiry;
optIn = -1;
cb(false);
} else {
var optInMessage = 'This site would like to place a cookie on your browser to help us better deliver relevant and valuable content to you.';

if (typeof HTMLDialogElement === 'function') {
var dialog = document.createElement('dialog');
dialog.setAttribute("id", "_aoCookieModal");
dialog.style.cssText="all: initial; background: white; width: -webkit-fit-content; height: -webkit-fit-content; left: 0px; right: 0px; position: fixed; display: block; padding: 1em; margin: auto; border: solid; text-align: center;";

var text = document.createElement('p');
text.style.cssText="all: initial; display: block;";
text.innerHTML = optInMessage;

var okBtn = document.createElement('button');
okBtn.style.cssText="all: initial; cursor: pointer; margin: 20px 10px 0 10px; padding: 1px 7px 2px; border: 1px solid; border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186); background-color: buttonface;";
okBtn.innerHTML = "OK";

var cancelBtn = document.createElement('button');
cancelBtn.style.cssText="all: initial; cursor: pointer; margin: 20px 10px 0 10px; padding: 1px 7px 2px; border: 1px solid; border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186); background-color: buttonface;";
cancelBtn.innerHTML = "Cancel";

dialog.appendChild(text);
dialog.appendChild(okBtn);
dialog.appendChild(cancelBtn);

okBtn.addEventListener('click', function() {
dialog.close();
dialog.parentNode.removeChild(dialog);
document.cookie = "ao_optin=" + now + ";path=/;expires=" + expiry;
optIn = 1;
cb(true);
});

cancelBtn.addEventListener('click', function() {
dialog.close();
dialog.parentNode.removeChild(dialog);
if (mode < 2) document.cookie = "ao_optout=" + now + ";path=/;expires=" + expiry;
optIn = -1;
cb(false);
});

document.body.appendChild(dialog);
dialog.showModal();
} else {
if (confirm(optInMessage)) {
document.cookie = "ao_optin=" + now + ";path=/;expires=" + expiry;
optIn = 1;
} else {
if (this.mode() < 2) document.cookie = "ao_optout=" + now + ";path=/;expires=" + expiry;
optIn = -1;
}
cb(optIn > 0);
}
}
};
};

var buildParameters = function(resource, event, timestamp, cb) {
event = event || 'page';
ActOn.Beacon.optIn(function(nc){
var parameters = "?target=" + encodeURIComponent(document.location) + "&ref=" + encodeURIComponent(document.referrer) + "&v=2&ts=" + timestamp + "&nc=" + ((nc) ? "0" : "1");
if (resource) {
if (event == 'page') {
parameters += "&page=" + encodeURIComponent(resource);
}
}

cb(parameters);
})
};

var addListener = function(elem, type, fn) {
if (elem.addEventListener) {
elem.addEventListener(type, fn, false);
} else if(elem.attachEvent) {
elem.attachEvent("on" + type, function() {
return fn.call(elem, window.event);
});
}
}

var track = function(){
ActOn.Beacon.account(36423, 0, '//my.carolina.com/acton/bn/36423');

ActOn.Beacon.track = function(resource, event, timestamp) {
timestamp = timestamp || +new Date();
buildParameters(resource, event, timestamp, function(parameters){
for (var id in ActOn.Beacon.account()) {
var image = new Image();
image.src = ActOn.Beacon.account(id).target + parameters;
}
ActOn.Beacon.q.push({r: resource, e: event, t: timestamp});
});
};
};

ActOn.Beacon.account = ActOn.Beacon.account || (function() {
var accounts = {};
return function(id, mode, target) {
if (id) {
if (target) {
this.mode(mode);
if (!accounts[id]) {
for (var i = 0; i < this.q.length; i++) {
var image = new Image();
buildParameters(this.q[i].r, this.q[i].e, this.q[i].t, function(parameters){
image.src = target + parameters;
});
}
}
accounts[id] = {mode: mode, target: target};
} else {
return accounts[id];
}
} else {
return accounts;
}
};
})();

if(document.readyState == "complete"){
track();
} else {
addListener(window, "load", track);
}
})();

ActOn.Beacon.cookie = ActOn.Beacon.cookie || {};
ActOn.Beacon.cookie['36423'] = '972776a2-f220-4187-aa5e-69253029703b';