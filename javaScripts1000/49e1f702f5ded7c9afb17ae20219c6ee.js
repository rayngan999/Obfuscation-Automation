var myScript = document.currentScript.src;
function getParameterByName(name, url) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var myUserID = getParameterByName('userId', myScript);

//Zoomd-zxp
var ifrm = document.createElement('iframe');
ifrm.setAttribute('id', 'ifrm'); // assign an id

// assign url
ifrm.setAttribute('src', 'https://idsync.rlcdn.com/711123.html?partner_uid=' + myUserID);
ifrm.setAttribute('width', '0');
ifrm.setAttribute('height', '0');
ifrm.setAttribute('frameborder', '0');
ifrm.setAttribute('style', 'display:none;');
document.body.appendChild(ifrm); // to place at end of document