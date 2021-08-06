var BlogPostURL = 'http://blogcms.jp/select/article/edit';

function quickTrackBack(url) {
    var body = '<a href="' + url + '" target="_blank">';
    var title = document.title;
    if (title.length >= 100) { title = title.substring(0, 100) + ' ... '; }
    body += title  + '</a><br />';
    var loc = BlogPostURL + "?_tb=" + encodeURIComponent(url) + '&_body=' + encodeURIComponent(body);
    document.location.href = loc;
}

function openList(url, name) {
    var p = window.open(url, name, 'width=200,height=500,resizable=yes,scrollbars=yes');
    p.focus();
    return p;
}

if (document.URL.indexOf("?new_session") >= 0) {
    deleteCookie('tkey_namecache', '', '');
}
else if (hasCookie('tkey_namecache')) {
   var authorized_name = getCookie('tkey_namecache');
}

// Copyright (c) 1996-1997 Athenia Associates.
// http://www.webreference.com/js/
// License is granted if and only if this entire
// copyright notice is included. By Tomer Shiran.

function setCookie (name, value, expires, path, domain, secure) {
    var curCookie = name + "=" + encodeURIComponent(value) + (expires ? "; expires=" + expires.toGMTString() : "") + (path ? "; path=" + path : "") + (domain ? "; domain=" + domain : "") + (secure ? "secure" : "");
    document.cookie = curCookie;
}

function hasCookie (name) {
   var prefix = name + '=';
   var c = document.cookie;
   var cookieStartIndex = c.indexOf(prefix);
   return ((cookieStartIndex >= 0) ? 1 : 0);
}

function getCookie (name) {
    var prefix = name + '=';
    var c = document.cookie;
    var nullstring = '';
    var cookieStartIndex = c.indexOf(prefix);
    if (cookieStartIndex == -1)
        return nullstring;
    var cookieEndIndex = c.indexOf(";", cookieStartIndex + prefix.length);
    if (cookieEndIndex == -1)
        cookieEndIndex = c.length;
    return decodeURIComponent(c.substring(cookieStartIndex + prefix.length, cookieEndIndex));
}

function deleteCookie (name, path, domain) {
    if (getCookie(name))
        document.cookie = name + "=" + ((path) ? "; path=" + path : "") + ((domain) ? "; domain=" + domain : "") + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
}

function fixDate (date) {
    var base = new Date(0);
    var skew = base.getTime();
    if (skew > 0)
        date.setTime(date.getTime() - skew);
}

function setCommentAuthor(f) {
    var flag = f.bake.checked;
    if(!flag) {
	return removeCommentAuthor(f);
    }
    var now = new Date();
    fixDate(now);
    var path = '/'
    if (location.hostname.match(/blog\.livedoor\.jp/)) {
        // ãµããã£ã¬ã¯ããªã®ã³ã¡ã³ãã¯ãã£ã¬ã¯ããªãã¨ã«è¨­å®
        path += location.pathname.split('/')[1];
        // éå»ä½¿ã£ã¦ããrootã®Cookieã¯åé¤
        deleteCookie("author", '/', '');
        deleteCookie("email", '/', '');
        deleteCookie("url", '/', '');
    }
    now.setTime(now.getTime() + 30 * 24 * 60 * 60 * 1000);
    if(f.author && f.author != undefined)
        setCookie("author", f.author.value, now, path, '', '');
    if(f.email && f.email != undefined)
        setCookie("email", f.email.value, now, path, '', '');
    if(f.url && f.url != undefined)
        setCookie("url", f.url.value, now, path, '', '');
}

function removeCommentAuthor(f) {
    var path = '/'
    if (location.hostname.match(/blog\.livedoor\.jp/)) {
        // ãµããã£ã¬ã¯ããªã®ã³ã¡ã³ãã¯ãã£ã¬ã¯ããªãã¨ã«è¨­å®
        path += location.pathname.split('/')[1];
        // éå»ä½¿ã£ã¦ããrootã®Cookieã¯åé¤
        deleteCookie("author", '/', '');
        deleteCookie("email", '/', '');
        deleteCookie("url", '/', '');
    }
    deleteCookie("author", path, '');
    deleteCookie("email", path, '');
    deleteCookie("url", path, '');
}

function loadCommentAuthor(f) {
    if(!f)
	return;
    if (f.author && getCookie("author"))
	f.author.value = getCookie("author");
    if (f.email)
	f.email.value = getCookie("email");
    if (f.url)
	f.url.value = getCookie("url");
    if ((f.author && f.author.value) || (f.email && f.email.value))
	f.bake.checked = true;
}

function submitOnce(button) {
    submitOnce = function() {
        alert("\u305F\u3060\u3044\u307E\u51E6\u7406\u4E2D\u3067\u3059\u3002\u3057\u3070\u3089\u304F\u304A\u5F85\u3061\u4E0B\u3055\u3044\u3002");
        return false;
    }
    button.disabled = true;
    return true;
}
