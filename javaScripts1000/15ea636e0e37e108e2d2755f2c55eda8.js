function ValidateMyForm() {
    MessageLength = document.REPLIER.Post.value.length;
    errors = "";
    if (MessageLength < 50) {
        errors = "Please enter some text, at least 10 chars."
    }
    if (errors != "") {
        alert(errors);
        return false
    } else {
        document.REPLIER.submit.disabled = true;
        return true
    }
}
function paste(e) {
    document.REPLIER.Post.value += "[b]" + e + "[/b]\n"
}
function paste2(e) {
    if (e != "") document.REPLIER.Post.value += "[quote]" + e + "[/quote]\n"
}
function paste3(e) {
    if (e != "") document.REPLIER.Post.value += "" + e + "\n"
}
function Insert(e) {
    if (e != "") paste4("[quote]" + e + "[/quote]\n", 0)
}
function paste4(e, t) {
    if (document.REPLIER) {
        if (document.selection && t) {
            document.REPLIER.Post.focus();
            document.REPLIER.document.selection.createRange().text = e
        } else document.REPLIER.Post.value += e
    }
}
function get_selection() {
    if (document.getSelection) {
        selection = document.getSelection();
        selection = selection.replace(/\r\n\r\n/gi, "_doublecaret_");
        selection = selection.replace(/\r\n/gi, " ");
        while (selection.indexOf("  ") != -1) selection = selection.replace(/  /gi, "");
        selection = selection.replace(/_doublecaret_/gi, "\r\n\r\n")
    } else selection = document.selection.createRange().text
}
function Is() {
    var e = navigator.userAgent.toLowerCase();
    this.major = parseInt(navigator.appVersion);
    this.minor = parseFloat(navigator.appVersion);
    this.nav = e.indexOf("mozilla") != -1 && e.indexOf("spoofer") == -1 && e.indexOf("compatible") == -1 && e.indexOf("opera") == -1 && e.indexOf("konqueror") == -1 && e.indexOf("safari") == -1 && e.indexOf("webtv") == -1 && e.indexOf("hotjava") == -1;
    if (e.indexOf("mozilla") != -1 && (e.indexOf("konqueror") >= 0 || e.indexOf("safari") >= 0)) {
        this.nav = true
    }
    this.nav2 = this.nav && this.major == 2;
    this.nav3 = this.nav && this.major == 3;
    this.nav4 = this.nav && this.major == 4;
    this.nav4up = this.nav && this.major >= 4;
    this.navonly = this.nav && (e.indexOf(";nav") != -1 || e.indexOf("; nav") != -1);
    this.nav6 = this.nav && this.major == 5;
    this.nav6up = this.nav && this.major >= 5;
    this.gecko = e.indexOf("gecko") != -1;
    this.ie = e.indexOf("msie") != -1 && e.indexOf("opera") == -1;
    this.ie3 = this.ie && this.major < 4;
    this.ie4 = this.ie && this.major == 4 && e.indexOf("msie 4") != -1;
    this.ie4up = this.ie && this.major >= 4;
    this.ie5 = this.ie && this.major == 4 && e.indexOf("msie 5.0") != -1;
    this.ie5_5 = this.ie && this.major == 4 && e.indexOf("msie 5.5") != -1;
    this.ie5up = this.ie && !this.ie3 && !this.ie4;
    this.ie5_5up = this.ie && !this.ie3 && !this.ie4 && !this.ie5;
    this.ie6 = this.ie && this.major == 4 && e.indexOf("msie 6.") != -1;
    this.ie6up = this.ie && !this.ie3 && !this.ie4 && !this.ie5 && !this.ie5_5;
    this.aol = e.indexOf("aol") != -1;
    this.aol3 = this.aol && this.ie3;
    this.aol4 = this.aol && this.ie4;
    this.aol5 = e.indexOf("aol 5") != -1;
    this.aol6 = e.indexOf("aol 6") != -1;
    this.opera = e.indexOf("opera") != -1;
    this.opera2 = e.indexOf("opera 2") != -1 || e.indexOf("opera/2") != -1;
    this.opera3 = e.indexOf("opera 3") != -1 || e.indexOf("opera/3") != -1;
    this.opera4 = e.indexOf("opera 4") != -1 || e.indexOf("opera/4") != -1;
    this.opera5 = e.indexOf("opera 5") != -1 || e.indexOf("opera/5") != -1;
    this.opera6 = e.indexOf("opera 6") != -1 || e.indexOf("opera/6") != -1;
    this.opera7 = e.indexOf("opera 7") != -1 || e.indexOf("opera/7") != -1;
    this.opera7up = this.opera && !this.opera2 && !this.opera3 && !this.opera4 && !this.opera5 && !this.opera6 && !this.opera7;
    this.webtv = e.indexOf("webtv") != -1;
    this.TVNavigator = e.indexOf("navio") != -1 || e.indexOf("navio_aoltv") != -1;
    this.AOLTV = this.TVNavigator;
    this.hotjava = e.indexOf("hotjava") != -1;
    this.hotjava3 = this.hotjava && this.major == 3;
    this.hotjava3up = this.hotjava && this.major >= 3;
    this.konqueror = e.indexOf("konqueror") != -1;
    this.safari = e.indexOf("safari") != -1
}
function handleKeys(e) {
    var t = window.event ? event : e;
    if (t.altKey || t.ctrlKey) return true;
    var n;
    n = e.which;
    if (e.which == 96) geoobj.checked = !geoobj.checked;
    var r = formobj.value.length - 1;
    if (e.which == 96) {
        var i = e.target;
        var s = i.selectionStart;
        i.value = i.value.substring(0, i.selectionStart) + "" + i.value.substring(i.selectionStart);
        i.setSelectionRange(s, s);
        return false
    }
    if (geoobj.checked) {
        for (r = 0; r <= geo.length; r++) {
            if (eng[r] == e.which) {
                var i = e.target;
                var s = i.selectionStart;
                i.value = i.value.substring(0, i.selectionStart) + String.fromCharCode(geo[r]) + i.value.substring(i.selectionEnd);
                s++;
                i.setSelectionRange(s, s);
                return false
            }
        }
        status = n
    }
    return true
}
function changeVal() {
    formobj2 = document.REPLIER.Post;
    geoobj2 = document.REPLIER.geo;
    formobj = formobj2;
    geoobj = geoobj2;
    var e = new Is;
    if (e.konqueror && formobj.value == "") {
        formobj.value = " "
    }
    if (e.ie4up) {
        if (event.keyCode == 96) geoobj.checked = geoobj.checked ? false : true;
        if (event.keyCode == 96) event.keyCode = ""
    } else if (e.nav6up || e.konqueror || e.safari) {
        document.onkeypress = handleKeys
    }
    if (geoobj.checked) {
        if (e.ie4up || e.opera && !e.opera7up) {
            var t;
            t = event.keyCode;
            for (i = 0; i <= geo.length; i++) {
                if (eng[i] == event.keyCode) {
                    event.keyCode = geo[i]
                }
            }
            status = t
        } else if (e.nav6up || e.opera) {
            document.onkeypress = handleKeys
        } else {
            alert("We doesn't currently support your browser");
            geoobj.checked = false
        }
    }
}

function setup_REPLIER(e) {
    if (!e && navigator.appVersion.indexOf("MSIE") != -1) {
        var t = 1;
        while (document.all("tbl" + t) != null) {
            document.all("tbl" + t).style.tableLayout = "fixed";
            t++
        }
        var n = getCookie("setup2");
        if (n != null) {
            form_cookie = n.split("|");
            if (form_cookie[3] != null && form_cookie[3] >= 20 && form_cookie[3] <= 250) {
                document.REPLIER.Post.cols = form_cookie[3]
            } else {
                document.REPLIER.Post.style.width = "100%"
            } if (form_cookie[4] != null) {
                document.REPLIER.Post.rows = form_cookie[4]
            }
            if (form_cookie[5] != null) {
                document.REPLIER.Post.style.fontSize = form_cookie[5]
            }
            if (form_cookie[6] != null) {
                document.REPLIER.Post.accessKey = form_cookie[6]
            }
        } else {
            document.REPLIER.Post.style.width = "100%"
        }
    }
}
function getCookie(e) {
    var t = e + "=";
    var n = document.cookie.indexOf(t);
    if (n == -1) return null;
    var r = document.cookie.indexOf(";", n + t.length);
    if (r == -1) r = document.cookie.length;
    return unescape(document.cookie.substring(n + t.length, r))
}
function ajax_showContent(e, t, n) {
    document.getElementById(e).innerHTML = dynamicContent_ajaxObjects[t].response;
    if (enableCache) {
        jsCache[n] = dynamicContent_ajaxObjects[t].response
    }
    dynamicContent_ajaxObjects[t] = false
}
function ajax_loadContent(e, t) {
    if (enableCache && jsCache[t]) {
        document.getElementById(e).innerHTML = jsCache[t];
        return
    }
    var n = dynamicContent_ajaxObjects.length;
    document.getElementById(e).innerHTML = '<div style="border:1px solid #CCCCCC; padding:1px; background:white; margin:5px; padding:3px;">áááááááá áááá¡ á©áá¢ááá ááá</div>';
    dynamicContent_ajaxObjects[n] = new sack;
    if (t.indexOf("?") >= 0) {
        dynamicContent_ajaxObjects[n].method = "GET";
        var r = t.substring(t.indexOf("?"));
        t = t.replace(r, "");
        r = r.replace("?", "");
        var i = r.split(/&/g);
        for (var s = 0; s < i.length; s++) {
            var o = i[s].split("=");
            if (o.length == 2) {
                dynamicContent_ajaxObjects[n].setVar(o[0], o[1])
            }
        }
        t = t.replace(r, "")
    }
    dynamicContent_ajaxObjects[n].requestFile = t;
    dynamicContent_ajaxObjects[n].onCompletion = function () {
        ajax_showContent(e, n, t)
    };
    dynamicContent_ajaxObjects[n].runAJAX()
}
function sack(file) {
    this.AjaxFailedAlert = "Your browser does not support the enhanced functionality of this website, and therefore you will have an experience that differs from the intended one.\n";
    this.requestFile = file;
    this.method = "POST";
    this.URLString = "";
    this.encodeURIString = true;
    this.execute = false;
    this.onLoading = function () {};
    this.onLoaded = function () {};
    this.onInteractive = function () {};
    this.onCompletion = function () {};
    this.createAJAX = function () {
        try {
            this.xmlhttp = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (e) {
            try {
                this.xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {
                this.xmlhttp = null
            }
        }
        if (!this.xmlhttp && typeof XMLHttpRequest != "undefined") this.xmlhttp = new XMLHttpRequest;
        if (!this.xmlhttp) {
            this.failed = true
        }
    };
    this.setVar = function (e, t) {
        if (this.URLString.length < 3) {
            this.URLString = e + "=" + t
        } else {
            this.URLString += "&" + e + "=" + t
        }
    };
    this.encVar = function (e, t) {
        var n = encodeURIComponent(e) + "=" + encodeURIComponent(t);
        return n
    };
    this.encodeURLString = function (e) {
        varArray = e.split("&");
        for (i = 0; i < varArray.length; i++) {
            urlVars = varArray[i].split("=");
            if (urlVars[0].indexOf("amp;") != -1) {
                urlVars[0] = urlVars[0].substring(4)
            }
            varArray[i] = this.encVar(urlVars[0], urlVars[1])
        }
        return varArray.join("&")
    };
    this.runResponse = function () {
        eval(this.response)
    };
    this.runAJAX = function (e) {
        this.responseStatus = new Array(2);
        if (this.failed && this.AjaxFailedAlert) {
            alert(this.AjaxFailedAlert)
        } else {
            if (e) {
                if (this.URLString.length) {
                    this.URLString = this.URLString + "&" + e
                } else {
                    this.URLString = e
                }
            }
            if (this.encodeURIString) {
                var t = (new Date).getTime();
                this.URLString = this.encodeURLString(this.URLString);
                this.setVar("rndval", t)
            }
            if (this.element) {
                this.elementObj = document.getElementById(this.element)
            }
            if (this.xmlhttp) {
                var n = this;
                if (this.method == "GET") {
                    var r = this.requestFile + "?" + this.URLString;
                    this.xmlhttp.open(this.method, r, true)
                } else {
                    this.xmlhttp.open(this.method, this.requestFile, true)
                } if (this.method == "POST") {
                    try {
                        this.xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
                    } catch (i) {}
                }
                this.xmlhttp.send(this.URLString);
                this.xmlhttp.onreadystatechange = function () {
                    switch (n.xmlhttp.readyState) {
                    case 1:
                        n.onLoading();
                        break;
                    case 2:
                        n.onLoaded();
                        break;
                    case 3:
                        n.onInteractive();
                        break;
                    case 4:
                        n.response = n.xmlhttp.responseText;
                        n.responseXML = n.xmlhttp.responseXML;
                        n.responseStatus[0] = n.xmlhttp.status;
                        n.responseStatus[1] = n.xmlhttp.statusText;
                        n.onCompletion();
                        if (n.execute) {
                            n.runResponse()
                        }
                        if (n.elementObj) {
                            var e = n.elementObj.nodeName;
                            e.toLowerCase();
                            if (e == "input" || e == "select" || e == "option" || e == "textarea") {
                                n.elementObj.value = n.response
                            } else {
                                n.elementObj.innerHTML = n.response
                            }
                        }
                        n.URLString = "";
                        break
                    }
                }
            }
        }
    };
    this.createAJAX()
}
function ajax_showTooltip(e, t) {
    showRealTip(e, t)
}
function showRealTip(e, t) {
    if (!ajax_tooltipObj) {
        ajax_tooltipObj = document.createElement("DIV");
        ajax_tooltipObj.style.position = "absolute";
        ajax_tooltipObj.id = "ajax_tooltipObj";
        document.body.appendChild(ajax_tooltipObj);
        var n = document.createElement("DIV");
        n.className = "ajax_tooltip_arrow";
        n.id = "ajax_tooltip_arrow";
        ajax_tooltipObj.appendChild(n);
        var r = document.createElement("DIV");
        r.className = "ajax_tooltip_content";
        ajax_tooltipObj.appendChild(r);
        r.id = "ajax_tooltip_content";
        if (ajax_tooltip_MSIE) {
            ajax_tooltipObj_iframe = document.createElement('<IFRAME frameborder="0">');
            ajax_tooltipObj_iframe.style.position = "absolute";
            ajax_tooltipObj_iframe.border = "0";
            ajax_tooltipObj_iframe.frameborder = 0;
            ajax_tooltipObj_iframe.style.backgroundColor = "#FFF";
            ajax_tooltipObj_iframe.src = "about:blank";
            r.appendChild(ajax_tooltipObj_iframe);
            ajax_tooltipObj_iframe.style.left = "0px";
            ajax_tooltipObj_iframe.style.top = "0px"
        }
    }
    ajax_tooltipObj.style.display = "block";
    ajax_loadContent("ajax_tooltip_content", e);
    if (ajax_tooltip_MSIE) {
        ajax_tooltipObj_iframe.style.width = ajax_tooltipObj.clientWidth + "px";
        ajax_tooltipObj_iframe.style.height = ajax_tooltipObj.clientHeight + "px"
    }
    ajax_positionTooltip(t)
}
function ajax_positionTooltip(e) {
    var t = ajaxTooltip_getLeftPos(e) + e.offsetWidth;
    var n = ajaxTooltip_getTopPos(e);
    var r = document.getElementById("ajax_tooltip_content").offsetWidth + document.getElementById("ajax_tooltip_arrow").offsetWidth;
    ajax_tooltipObj.style.left = t + "px";
    ajax_tooltipObj.style.top = n + "px"
}
function ajax_hideTooltip() {
    ajax_tooltipObj.style.display = "none"
}
function ajaxTooltip_getTopPos(e) {
    var t = e.offsetTop;
    while ((e = e.offsetParent) != null) {
        if (e.tagName != "HTML") t += e.offsetTop
    }
    return t
}
function ajaxTooltip_getLeftPos(e) {
    var t = e.offsetLeft;
    while ((e = e.offsetParent) != null) {
        if (e.tagName != "HTML") t += e.offsetLeft
    }
    return t
}
function ControlVersion() {
    var e;
    var t;
    var n;
    try {
        t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
        e = t.GetVariable("$version")
    } catch (n) {}
    if (!e) {
        try {
            t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
            e = "WIN 6,0,21,0";
            t.AllowScriptAccess = "always";
            e = t.GetVariable("$version")
        } catch (n) {}
    }
    if (!e) {
        try {
            t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
            e = t.GetVariable("$version")
        } catch (n) {}
    }
    if (!e) {
        try {
            t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
            e = "WIN 3,0,18,0"
        } catch (n) {}
    }
    if (!e) {
        try {
            t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
            e = "WIN 2,0,0,11"
        } catch (n) {
            e = -1
        }
    }
    return e
}
function GetSwfVer() {
    var e = -1;
    if (navigator.plugins != null && navigator.plugins.length > 0) {
        if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
            var t = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
            var n = navigator.plugins["Shockwave Flash" + t].description;
            var r = n.split(" ");
            var i = r[2].split(".");
            var s = i[0];
            var o = i[1];
            var u = r[3];
            if (u == "") {
                u = r[4]
            }
            if (u[0] == "d") {
                u = u.substring(1)
            } else if (u[0] == "r") {
                u = u.substring(1);
                if (u.indexOf("d") > 0) {
                    u = u.substring(0, u.indexOf("d"))
                }
            }
            var e = s + "." + o + "." + u
        }
    } else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.6") != -1) e = 4;
    else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.5") != -1) e = 3;
    else if (navigator.userAgent.toLowerCase().indexOf("webtv") != -1) e = 2;
    else if (isIE && isWin && !isOpera) {
        e = ControlVersion()
    }
    return e
}
function DetectFlashVer(e, t, n) {
    versionStr = GetSwfVer();
    if (versionStr == -1) {
        return false
    } else if (versionStr != 0) {
        if (isIE && isWin && !isOpera) {
            tempArray = versionStr.split(" ");
            tempString = tempArray[1];
            versionArray = tempString.split(",")
        } else {
            versionArray = versionStr.split(".")
        }
        var r = versionArray[0];
        var i = versionArray[1];
        var s = versionArray[2];
        if (r > parseFloat(e)) {
            return true
        } else if (r == parseFloat(e)) {
            if (i > parseFloat(t)) return true;
            else if (i == parseFloat(t)) {
                if (s >= parseFloat(n)) return true
            }
        }
        return false
    }
}
function AC_AddExtension(e, t) {
    if (e.indexOf("?") != -1) return e.replace(/\?/, t + "?");
    else return e + t
}
function AC_Generateobj(e, t, n) {
    var r = "";
    if (isIE && isWin && !isOpera) {
        r += "<object ";
        for (var i in e) {
            r += i + '="' + e[i] + '" '
        }
        r += ">";
        for (var i in t) {
            r += '<param name="' + i + '" value="' + t[i] + '" /> '
        }
        r += "</object>"
    } else {
        r += "<embed ";
        for (var i in n) {
            r += i + '="' + n[i] + '" '
        }
        r += "> </embed>"
    }
    document.write(r)
}
function AC_FL_RunContent() {
    var e = AC_GetArgs(arguments, ".swf", "movie", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000", "application/x-shockwave-flash");
    AC_Generateobj(e.objAttrs, e.params, e.embedAttrs)
}
function AC_SW_RunContent() {
    var e = AC_GetArgs(arguments, ".dcr", "src", "clsid:166B1BCA-3F9C-11CF-8075-444553540000", null);
    AC_Generateobj(e.objAttrs, e.params, e.embedAttrs)
}
function AC_GetArgs(e, t, n, r, i) {
    var s = new Object;
    s.embedAttrs = new Object;
    s.params = new Object;
    s.objAttrs = new Object;
    for (var o = 0; o < e.length; o = o + 2) {
        var u = e[o].toLowerCase();
        switch (u) {
        case "classid":
            break;
        case "pluginspage":
            s.embedAttrs[e[o]] = e[o + 1];
            break;
        case "src":
        case "movie":
            e[o + 1] = AC_AddExtension(e[o + 1], t);
            s.embedAttrs["src"] = e[o + 1];
            s.params[n] = e[o + 1];
            break;
        case "onafterupdate":
        case "onbeforeupdate":
        case "onblur":
        case "oncellchange":
        case "onclick":
        case "ondblClick":
        case "ondrag":
        case "ondragend":
        case "ondragenter":
        case "ondragleave":
        case "ondragover":
        case "ondrop":
        case "onfinish":
        case "onfocus":
        case "onhelp":
        case "onmousedown":
        case "onmouseup":
        case "onmouseover":
        case "onmousemove":
        case "onmouseout":
        case "onkeypress":
        case "onkeydown":
        case "onkeyup":
        case "onload":
        case "onlosecapture":
        case "onpropertychange":
        case "onreadystatechange":
        case "onrowsdelete":
        case "onrowenter":
        case "onrowexit":
        case "onrowsinserted":
        case "onstart":
        case "onscroll":
        case "onbeforeeditfocus":
        case "onactivate":
        case "onbeforedeactivate":
        case "ondeactivate":
        case "type":
        case "codebase":
        case "id":
            s.objAttrs[e[o]] = e[o + 1];
            break;
        case "width":
        case "height":
        case "align":
        case "vspace":
        case "hspace":
        case "class":
        case "title":
        case "accesskey":
        case "name":
        case "tabindex":
            s.embedAttrs[e[o]] = s.objAttrs[e[o]] = e[o + 1];
            break;
        default:
            s.embedAttrs[e[o]] = s.params[e[o]] = e[o + 1]
        }
    }
    s.objAttrs["classid"] = r;
    if (i) s.embedAttrs["type"] = i;
    return s
}
function setcookie(e, t, n) {
    var r = new Date;
    var i = new Date;
    if (n == null || n == 0) n = 1;
    i.setTime(r.getTime() + 36e5 * 24 * n);
    document.cookie = e + "=" + escape(t) + ";expires=" + i.toGMTString()
}
function readCookie(e) {
    var t = e + "=";
    var n = document.cookie.split(";");
    for (var r = 0; r < n.length; r++) {
        var i = n[r];
        while (i.charAt(0) == " ") i = i.substring(1, i.length);
        if (i.indexOf(t) == 0) return i.substring(t.length, i.length)
    }
    return null
}
function addFavs(e, t) {
    $("#" + e + "_add .favloader").show();
    console.log('aaaaa');
    $.post("act_ajax_add_favs.php?act=add_favs&f_video_id=" + t, "", function () {
        $("#" + e + "_add .favloader").hide();
        $("#" + e + "_add").hide();
        $("#" + e + "_del").show()
    })
}
function delFavs(e, t) {
    $("#" + e + "_del .favloader").show();
    $.post("act_ajax_add_favs.php?act=del_favs&f_video_id=" + t, "", function () {
        $("#" + e + "_del .favloader").hide();
        $("#" + e + "_del").hide();
        $("#" + e + "_add").show()
    })
}
eng = new Array(97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 87, 82, 84, 83, 67, 74, 90);
geo = new Array(4304, 4305, 4330, 4307, 4308, 4324, 4306, 4336, 4312, 4335, 4313, 4314, 4315, 4316, 4317, 4318, 4325, 4320, 4321, 4322, 4323, 4309, 4332, 4334, 4327, 4310, 4333, 4326, 4311, 4328, 4329, 4319, 4331, 91, 93, 59, 39, 44, 46, 96);
(function () {
    String.prototype.pasteTo = function (e) {
        e.focus();
        if (document.selection) {
            var t = document.selection.createRange();
            if (t) {
                t.text = this
            }
        } else if (e.selectionStart != undefined) {
            var n = e.scrollTop,
                r = e.selectionStart,
                i = e.selectionEnd;
            var s = e.value.substring(0, r) + this + e.value.substring(i, e.value.length);
            e.value = s;
            e.scrollTop = n;
            e.setSelectionRange(r + this.length, r + this.length)
        } else {
            e.value += this;
            e.setSelectionRange(e.value.length, e.value.length)
        }
    }, String.prototype.translateToKA = function () {
        var e, t, n = [],
            r = "abgdevzTiklmnopJrstufqRySCcZwWxjh";
        for (var i = 0; i < this.length; i++) {
            t = this.substr(i, 1);
            if ((e = r.indexOf(t)) >= 0) {
                n.push(String.fromCharCode(e + 4304))
            } else {
                n.push(t)
            }
        }
        return n.join("")
    }, GeoKBD = {
        browser: {
            isOpera: navigator.userAgent.toLowerCase().indexOf("opera") > -1,
            isIe: navigator.userAgent.toLowerCase().indexOf("msie") > -1,
            isIe6: navigator.userAgent.toLowerCase().indexOf("msie 6") > -1,
            isIe7: navigator.userAgent.toLowerCase().indexOf("msie 7") > -1
        },
        event: {
            get: function (e) {
                return e || window.event
            },
            getKeyCode: function (e) {
                e = this.get(e);
                return e.keyCode || e.which
            },
            targetIs: function (e, t) {
                e = this.get(e);
                var n = e.target || e.srcElement;
                return n.tagName.toLowerCase() == t ? n : null
            },
            attach: function (e, t, n, r) {
                if (e.addEventListener) {
                    e.addEventListener(t, n, r)
                } else if (e.attachEvent) {
                    return e.attachEvent("on" + t, n)
                } else {
                    e["on" + t] = n
                }
            },
            detach: function (e, t, n, r) {
                if (e.removeEventListener) {
                    e.removeEventListener(t, n, r)
                } else if (e.detachEvent) {
                    e.detachEvent("on" + t, n)
                } else {
                    e["on" + t] = null
                }
            },
            cancel: function (e) {
                e = this.get(e);
                if (e.stopPropagation) {
                    e.stopPropagation();
                    e.preventDefault()
                } else {
                    e.cancelBubble = true;
                    e.returnValue = false
                }
            }
        },
        keyHandlers: {},
        addKeyHandler: function (e, t) {
            if (typeof e == "string") {
                e = e.charCodeAt(0)
            }
            if (!this.keyHandlers[e]) {
                this.keyHandlers[e] = []
            }
            this.keyHandlers[e].push(t)
        },
        handleKey: function (e) {
            if (GeoKBD.keyHandlers[e]) {
                var t = null;
                for (var n = 0; n < GeoKBD.keyHandlers[e].length; n++) {
                    t = GeoKBD.keyHandlers[e][n];
                    if (t.constructor && t.constructor == Array) {
                        t[0][t[1]].call(t[0], e)
                    } else {
                        t(e)
                    }
                }
            }
        },
        map: function (e, t, n) {
            var r = this,
                i = [],
                s = [];
            if (e) {
                if (e.constructor) {
                    if (e.constructor == String) {
                        i.push(e)
                    } else if (e.constructor == Array) {
                        i = e
                    }
                    if (i.length) {
                        for (var o in i) {
                            if (document.forms[i[o]]) {
                                s.push(document.forms[i[o]])
                            }
                        }
                    }
                } else {
                    s.push(e)
                }
            } else {
                s = document.forms
            }
            for (var o = 0; o < s.length; o++) {
                e = s[o];
                if (!e.fields || e.fields == undefined) e.fields = {};
                if (e.ka == undefined) e.ka = e[n] ? e[n].checked : true;
                if (t) {
                    if (typeof t == "string") t = [t];
                    for (var u = 0; u < t.length; u++) {
                        if (e[t[u]] && !e.fields[t[u]]) e.fields[t[u]] = t[u]
                    }
                } else {
                    var a, f;
                    for (var u = 0; u < e.elements.length; u++) {
                        if (e.elements[u].type) {
                            a = e.elements[u].name || e.elements[u].id;
                            f = e.elements[u].type.toLowerCase();
                            if (a && (f == "text" || f == "textarea")) {
                                e.fields[a] = a
                            }
                        }
                    }
                }
                n = n || "geo";
                e.switcher = n;
                e.onkeypress = function (e) {
                    e = r.event.get(e);
                    if (e.altKey || e.ctrlKey) return;
                    if (!r.browser.isIe && !r.browser.isOpera && !e.charCode) {
                        return
                    }
                    var t, i = n,
                        s = r.event.getKeyCode(e);
                    if (s == 96) {
                        if (this[i]) {
                            this.ka = this[i].checked = !this[i].checked
                        } else {
                            this.ka = !this.ka
                        }
                        return false
                    } else if (this[i]) {
                        this.ka = this[i].checked
                    }
                    if (!this.ka) return;
                    if (t = r.event.targetIs(e, "textarea") || r.event.targetIs(e, "input")) {
                        if (!this.fields[t.name || t.id]) return;
                        text = String.fromCharCode(s);
                        kaText = text.translateToKA();
                        if (kaText != text) {
                            if (GeoKBD.browser.isIe) {
                                e.keyCode = kaText.charCodeAt(0)
                            } else {
                                kaText.pasteTo(t);
                                return false
                            }
                        }
                    }
                }
            }
            e = s = i = null
        },
        mapIFrame: function (e) {
            var t = function (e) {
                if (e.altKey || e.ctrlKey) return;
                var t = (e.target || e.srcElement).ownerDocument;
                if (t.ka == undefined) t.ka = true;
                var n = GeoKBD.event.getKeyCode(e);
                var r = String.fromCharCode(n);
                var i, s;
                if (parent.document.forms[t.parentForm]) {
                    i = parent.document.forms[t.parentForm];
                    if (i.switcher && i[i.switcher]) {
                        s = i[i.switcher]
                    }
                }
                if (n == 96) {
                    t.ka = !t.ka;
                    if (s) s.checked = t.ka;
                    GeoKBD.event.cancel(e)
                } else if (s) {
                    t.ka = s.checked
                }
                i = s = null;
                if (t.ka) {
                    var o = r.translateToKA();
                    if (o != r) {
                        if (!GeoKBD.browser.isIe) {
                            t.execCommand("InsertHTML", false, o)
                        } else {
                            var u = t.selection.createRange();
                            u.pasteHTML(o)
                        }
                        GeoKBD.event.cancel(e)
                    }
                }
            };
            var n = function (e) {
                if (!GeoKBD.browser.isIe) {
                    GeoKBD.event.attach(this.document, "keypress", t, true);
                    GeoKBD.event.detach(this, "focus", n, true)
                } else {
                    GeoKBD.event.attach(this.contentWindow.document, "keypress", t, true);
                    this.onfocus = null
                }
            };
            var r = window.setInterval(function () {
                var t = typeof e == "string" ? document.getElementById(e) : e();
                if (t) {
                    for (var i = t.parentNode; i && i != document.body; i = i.parentNode) {
                        if (/form/i.test(i.tagName)) {
                            if (t.contentWindow.document) {
                                t.contentWindow.document.parentForm = i.name || i.id
                            } else {
                                t.document.parentForm = i.name || i.id
                            }
                            break
                        }
                    }
                    if (!GeoKBD.browser.isIe) {
                        GeoKBD.event.attach(t.contentWindow, "focus", n, true)
                    } else {
                        t.onfocus = n
                    }
                    t = null;
                    window.clearInterval(r)
                }
            }, 100)
        }
    };
    window.GeoKBD = GeoKBD
})();
var enableCache = true;
var jsCache = new Array;
var dynamicContent_ajaxObjects = new Array;
var x_offset_tooltip = 5;
var y_offset_tooltip = 0;
var ajax_tooltipObj = false;
var ajax_tooltipObj_iframe = false;
var ajax_tooltip_MSIE = false;
if (navigator.userAgent.indexOf("MSIE") >= 0) ajax_tooltip_MSIE = true;

this.tooltip = function () {
    xOffset = 10;
    yOffset = 20;
    $(".tiper").hover(function (e) {
        this.t = this.title;
        this.title = "";
        $("body").append("<p id='tiper'>" + this.t + "</p>");
        $("#tiper").css("top", e.pageY - xOffset + "px").css("left", e.pageX + yOffset + "px").show()
    }, function () {
        this.title = this.t;
        $("#tiper").remove()
    });
    $(".tiper").mousemove(function (e) {
        $("#tiper").css("top", e.pageY - xOffset + "px").css("left", e.pageX + yOffset + "px")
    })
};
$(document).ready(function () {
    var e = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        e = true
    }
    if (!e) {
        tooltip()
    }
});
var isIE = navigator.appVersion.indexOf("MSIE") != -1 ? true : false;
var isWin = navigator.appVersion.toLowerCase().indexOf("win") != -1 ? true : false;
var isOpera = navigator.userAgent.indexOf("Opera") != -1 ? true : false;
(function (e) {
    function t() {
        if (e.fn.ajaxSubmit.debug && window.console && window.console.log) window.console.log("[jquery.form] " + Array.prototype.join.call(arguments, ""))
    }
    e.fn.ajaxSubmit = function (n) {
        function p() {
            function p() {
                if (c++) return;
                o.detachEvent ? o.detachEvent("onload", p) : o.removeEventListener("load", p, false);
                var t = true;
                try {
                    if (h) throw "timeout";
                    var n, i;
                    i = o.contentWindow ? o.contentWindow.document : o.contentDocument ? o.contentDocument : o.document;
                    f.responseText = i.body ? i.body.innerHTML : null;
                    f.responseXML = i.XMLDocument ? i.XMLDocument : i;
                    f.getResponseHeader = function (e) {
                        var t = {
                            "content-type": r.dataType
                        };
                        return t[e]
                    };
                    if (r.dataType == "json" || r.dataType == "script") {
                        var u = i.getElementsByTagName("textarea")[0];
                        f.responseText = u ? u.value : f.responseText
                    } else if (r.dataType == "xml" && !f.responseXML && f.responseText != null) {
                        f.responseXML = d(f.responseText)
                    }
                    n = e.httpData(f, r.dataType)
                } catch (a) {
                    t = false;
                    e.handleError(r, f, "error", a)
                }
                if (t) {
                    r.success(n, "success");
                    if (l) e.event.trigger("ajaxSuccess", [f, r])
                }
                if (l) e.event.trigger("ajaxComplete", [f, r]);
                if (l && !--e.active) e.event.trigger("ajaxStop");
                if (r.complete) r.complete(f, t ? "success" : "error");
                setTimeout(function () {
                    s.remove();
                    f.responseXML = null
                }, 100)
            }
            function d(e, t) {
                if (window.ActiveXObject) {
                    t = new ActiveXObject("Microsoft.XMLDOM");
                    t.async = "false";
                    t.loadXML(e)
                } else t = (new DOMParser).parseFromString(e, "text/xml");
                return t && t.documentElement && t.documentElement.tagName != "parsererror" ? t : null
            }
            var t = u[0];
            var r = e.extend({}, e.ajaxSettings, n);
            var i = "jqFormIO" + (new Date).getTime();
            var s = e('<iframe id="' + i + '" name="' + i + '" />');
            var o = s[0];
            var a = e.browser.opera && window.opera.version() < 9;
            if (e.browser.msie || a) o.src = 'javascript:false;document.write("");';
            s.css({
                position: "absolute",
                top: "-1000px",
                left: "-1000px"
            });
            var f = {
                responseText: null,
                responseXML: null,
                status: 0,
                statusText: "n/a",
                getAllResponseHeaders: function () {},
                getResponseHeader: function () {},
                setRequestHeader: function () {}
            };
            var l = r.global;
            if (l && !(e.active++)) e.event.trigger("ajaxStart");
            if (l) e.event.trigger("ajaxSend", [f, r]);
            var c = 0;
            var h = 0;
            setTimeout(function () {
                var a = u.attr("target"),
                    f = u.attr("action");
                u.attr({
                    target: i,
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data",
                    method: "POST",
                    action: r.url
                });
                if (r.timeout) setTimeout(function () {
                        h = true;
                        p()
                    }, r.timeout);
                var l = [];
                try {
                    if (n.extraData) for (var c in n.extraData) l.push(e('<input type="hidden" name="' + c + '" value="' + n.extraData[c] + '" />').appendTo(t)[0]);
                    s.appendTo("body");
                    o.attachEvent ? o.attachEvent("onload", p) : o.addEventListener("load", p, false);
                    t.submit()
                } finally {
                    u.attr("action", f);
                    a ? u.attr("target", a) : u.removeAttr("target");
                    e(l).remove()
                }
            }, 10);
        }
        if (!this.length) {
            t("ajaxSubmit: skipping submit process - no element selected");
            return this
        }
        if (typeof n == "function") n = {
                success: n
        };
        n = e.extend({
            url: this.attr("action") || window.location.toString(),
            type: this.attr("method") || "GET"
        }, n || {});
        var r = {};
        this.trigger("form-pre-serialize", [this, n, r]);
        if (r.veto) {
            t("ajaxSubmit: submit vetoed via form-pre-serialize trigger");
            return this
        }
        var i = this.formToArray(n.semantic);
        if (n.data) {
            n.extraData = n.data;
            for (var s in n.data) i.push({
                    name: s,
                    value: n.data[s]
                })
        }
        if (n.beforeSubmit && n.beforeSubmit(i, this, n) === false) {
            t("ajaxSubmit: submit aborted via beforeSubmit callback");
            return this
        }
        this.trigger("form-submit-validate", [i, this, n, r]);
        if (r.veto) {
            t("ajaxSubmit: submit vetoed via form-submit-validate trigger");
            return this
        }
        var o = e.param(i);
        if (n.type.toUpperCase() == "GET") {
            n.url += (n.url.indexOf("?") >= 0 ? "&" : "?") + o;
            n.data = null
        } else n.data = o;
        var u = this,
            a = [];
        if (n.resetForm) a.push(function () {
                u.resetForm()
            });
        if (n.clearForm) a.push(function () {
                u.clearForm()
            });
        if (!n.dataType && n.target) {
            var f = n.success || function () {};
            a.push(function (t) {
                e(n.target).html(t).each(f, arguments)
            })
        } else if (n.success) a.push(n.success);
        n.success = function (e, t) {
            for (var n = 0, r = a.length; n < r; n++) a[n](e, t, u)
        };
        var l = e("input:file", this).fieldValue();
        var c = false;
        for (var h = 0; h < l.length; h++) if (l[h]) c = true;
        if (n.iframe || c) {
            if (e.browser.safari && n.closeKeepAlive) e.get(n.closeKeepAlive, p);
            else p()
        } else e.ajax(n);
        this.trigger("form-submit-notify", [this, n]);
        return this;
    };
    e.fn.ajaxForm = function (t) {
        return this.ajaxFormUnbind().bind("submit.form-plugin", function () {
            e(this).ajaxSubmit(t);
            return false
        }).each(function () {
            e(":submit,input:image", this).bind("click.form-plugin", function (t) {
                var n = this.form;
                n.clk = this;
                if (this.type == "image") {
                    if (t.offsetX != undefined) {
                        n.clk_x = t.offsetX;
                        n.clk_y = t.offsetY
                    } else if (typeof e.fn.offset == "function") {
                        var r = e(this).offset();
                        n.clk_x = t.pageX - r.left;
                        n.clk_y = t.pageY - r.top
                    } else {
                        n.clk_x = t.pageX - this.offsetLeft;
                        n.clk_y = t.pageY - this.offsetTop
                    }
                }
                setTimeout(function () {
                    n.clk = n.clk_x = n.clk_y = null
                }, 10)
            })
        })
    };
    e.fn.ajaxFormUnbind = function () {
        this.unbind("submit.form-plugin");
        return this.each(function () {
            e(":submit,input:image", this).unbind("click.form-plugin")
        })
    };
    e.fn.formToArray = function (t) {
        var n = [];
        if (this.length == 0) return n;
        var r = this[0];
        var i = t ? r.getElementsByTagName("*") : r.elements;
        if (!i) return n;
        for (var s = 0, o = i.length; s < o; s++) {
            var u = i[s];
            var a = u.name;
            if (!a) continue;
            if (t && r.clk && u.type == "image") {
                if (!u.disabled && r.clk == u) n.push({
                        name: a + ".x",
                        value: r.clk_x
                    }, {
                        name: a + ".y",
                        value: r.clk_y
                    });
                continue
            }
            var f = e.fieldValue(u, true);
            if (f && f.constructor == Array) {
                for (var l = 0, c = f.length; l < c; l++) n.push({
                        name: a,
                        value: f[l]
                    })
            } else if (f !== null && typeof f != "undefined") n.push({
                    name: a,
                    value: f
                })
        }
        if (!t && r.clk) {
            var h = r.getElementsByTagName("input");
            for (var s = 0, o = h.length; s < o; s++) {
                var p = h[s];
                var a = p.name;
                if (a && !p.disabled && p.type == "image" && r.clk == p) n.push({
                        name: a + ".x",
                        value: r.clk_x
                    }, {
                        name: a + ".y",
                        value: r.clk_y
                    })
            }
        }
        return n
    };
    e.fn.formSerialize = function (t) {
        return e.param(this.formToArray(t))
    };
    e.fn.fieldSerialize = function (t) {
        var n = [];
        this.each(function () {
            var r = this.name;
            if (!r) return;
            var i = e.fieldValue(this, t);
            if (i && i.constructor == Array) {
                for (var s = 0, o = i.length; s < o; s++) n.push({
                        name: r,
                        value: i[s]
                    })
            } else if (i !== null && typeof i != "undefined") n.push({
                    name: this.name,
                    value: i
                })
        });
        return e.param(n)
    };
    e.fn.fieldValue = function (t) {
        for (var n = [], r = 0, i = this.length; r < i; r++) {
            var s = this[r];
            var o = e.fieldValue(s, t);
            if (o === null || typeof o == "undefined" || o.constructor == Array && !o.length) continue;
            o.constructor == Array ? e.merge(n, o) : n.push(o)
        }
        return n
    };
    e.fieldValue = function (t, n) {
        var r = t.name,
            i = t.type,
            s = t.tagName.toLowerCase();
        if (typeof n == "undefined") n = true;
        if (n && (!r || t.disabled || i == "reset" || i == "button" || (i == "checkbox" || i == "radio") && !t.checked || (i == "submit" || i == "image") && t.form && t.form.clk != t || s == "select" && t.selectedIndex == -1)) return null;
        if (s == "select") {
            var o = t.selectedIndex;
            if (o < 0) return null;
            var u = [],
                a = t.options;
            var f = i == "select-one";
            var l = f ? o + 1 : a.length;
            for (var c = f ? o : 0; c < l; c++) {
                var h = a[c];
                if (h.selected) {
                    var p = e.browser.msie && !h.attributes["value"].specified ? h.text : h.value;
                    if (f) return p;
                    u.push(p)
                }
            }
            return u
        }
        return t.value
    };
    e.fn.clearForm = function () {
        return this.each(function () {
            e("input,select,textarea", this).clearFields()
        })
    };
    e.fn.clearFields = e.fn.clearInputs = function () {
        return this.each(function () {
            var e = this.type,
                t = this.tagName.toLowerCase();
            if (e == "text" || e == "password" || t == "textarea") this.value = "";
            else if (e == "checkbox" || e == "radio") this.checked = false;
            else if (t == "select") this.selectedIndex = -1
        })
    };
    e.fn.resetForm = function () {
        return this.each(function () {
            if (typeof this.reset == "function" || typeof this.reset == "object" && !this.reset.nodeType) this.reset()
        })
    };
    e.fn.enable = function (e) {
        if (e == undefined) e = true;
        return this.each(function () {
            this.disabled = !e
        })
    };
    e.fn.select = function (t) {
        if (t == undefined) t = true;
        return this.each(function () {
            var n = this.type;
            if (n == "checkbox" || n == "radio") this.checked = t;
            else if (this.tagName.toLowerCase() == "option") {
                var r = e(this).parent("select");
                if (t && r[0] && r[0].type == "select-one") {
                    r.find("option").select(false)
                }
                this.selected = t
            }
        })
    };
})(jQuery);
var dateFormat = function () {
    var e = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
        t = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        n = /[^-+\dA-Z]/g,
        r = function (e, t) {
            e = String(e);
            t = t || 2;
            while (e.length < t) e = "0" + e;
            return e
        };
    return function (i, s, o) {
        var u = dateFormat;
        if (arguments.length == 1 && Object.prototype.toString.call(i) == "[object String]" && !/\d/.test(i)) {
            s = i;
            i = undefined
        }
        i = i ? new Date(i) : new Date;
        if (isNaN(i)) throw SyntaxError("invalid date");
        s = String(u.masks[s] || s || u.masks["default"]);
        if (s.slice(0, 4) == "UTC:") {
            s = s.slice(4);
            o = true
        }
        var a = o ? "getUTC" : "get",
            f = i[a + "Date"](),
            l = i[a + "Day"](),
            c = i[a + "Month"](),
            h = i[a + "FullYear"](),
            p = i[a + "Hours"](),
            d = i[a + "Minutes"](),
            v = i[a + "Seconds"](),
            m = i[a + "Milliseconds"](),
            g = o ? 0 : i.getTimezoneOffset(),
            y = {
                d: f,
                dd: r(f),
                ddd: u.i18n.dayNames[l],
                dddd: u.i18n.dayNames[l + 7],
                m: c + 1,
                mm: r(c + 1),
                mmm: u.i18n.monthNames[c],
                mmmm: u.i18n.monthNames[c + 12],
                yy: String(h).slice(2),
                yyyy: h,
                h: p % 12 || 12,
                hh: r(p % 12 || 12),
                H: p,
                HH: r(p),
                M: d,
                MM: r(d),
                s: v,
                ss: r(v),
                l: r(m, 3),
                L: r(m > 99 ? Math.round(m / 10) : m),
                t: p < 12 ? "a" : "p",
                tt: p < 12 ? "am" : "pm",
                T: p < 12 ? "A" : "P",
                TT: p < 12 ? "AM" : "PM",
                Z: o ? "UTC" : (String(i).match(t) || [""]).pop().replace(n, ""),
                o: (g > 0 ? "-" : "+") + r(Math.floor(Math.abs(g) / 60) * 100 + Math.abs(g) % 60, 4),
                S: ["th", "st", "nd", "rd"][f % 10 > 3 ? 0 : (f % 100 - f % 10 != 10) * f % 10]
            };
        return s.replace(e, function (e) {
            return e in y ? y[e] : e.slice(1, e.length - 1)
        })
    }
}();
dateFormat.masks = {
    "default": "ddd mmm dd yyyy HH:MM:ss",
    shortDate: "m/d/yy",
    mediumDate: "mmm d, yyyy",
    longDate: "mmmm d, yyyy",
    fullDate: "dddd, mmmm d, yyyy",
    shortTime: "h:MM TT",
    mediumTime: "h:MM:ss TT",
    longTime: "h:MM:ss TT Z",
    isoDate: "yyyy-mm-dd",
    isoTime: "HH:MM:ss",
    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};
dateFormat.i18n = {
    dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};
Date.prototype.format = function (e, t) {
    return dateFormat(this, e, t)
};
var swfobject = function () {
    function C() {
        if (b) {
            return
        }
        try {
            var e = a.getElementsByTagName("body")[0].appendChild(U("span"));
            e.parentNode.removeChild(e)
        } catch (t) {
            return
        }
        b = true;
        var n = c.length;
        for (var r = 0; r < n; r++) {
            c[r]()
        }
    }
    function k(e) {
        if (b) {
            e()
        } else {
            c[c.length] = e
        }
    }
    function L(t) {
        if (typeof u.addEventListener != e) {
            u.addEventListener("load", t, false)
        } else {
            if (typeof a.addEventListener != e) {
                a.addEventListener("load", t, false)
            } else {
                if (typeof u.attachEvent != e) {
                    z(u, "onload", t)
                } else {
                    if (typeof u.onload == "function") {
                        var n = u.onload;
                        u.onload = function () {
                            n();
                            t()
                        }
                    } else {
                        u.onload = t
                    }
                }
            }
        }
    }
    function A() {
        if (l) {
            O()
        } else {
            M()
        }
    }
    function O() {
        var n = a.getElementsByTagName("body")[0];
        var r = U(t);
        r.setAttribute("type", i);
        var s = n.appendChild(r);
        if (s) {
            var o = 0;
            (function () {
                if (typeof s.GetVariable != e) {
                    var t = s.GetVariable("$version");
                    if (t) {
                        t = t.split(" ")[1].split(",");
                        T.pv = [parseInt(t[0], 10), parseInt(t[1], 10), parseInt(t[2], 10)]
                    }
                } else {
                    if (o < 10) {
                        o++;
                        setTimeout(arguments.callee, 10);
                        return
                    }
                }
                n.removeChild(r);
                s = null;
                M()
            })()
        } else {
            M()
        }
    }
    function M() {
        var t = h.length;
        if (t > 0) {
            for (var n = 0; n < t; n++) {
                var r = h[n].id;
                var i = h[n].callbackFn;
                var s = {
                    success: false,
                    id: r
                };
                if (T.pv[0] > 0) {
                    var o = R(r);
                    if (o) {
                        if (W(h[n].swfVersion) && !(T.wk && T.wk < 312)) {
                            V(r, true);
                            if (i) {
                                s.success = true;
                                s.ref = _(r);
                                i(s)
                            }
                        } else {
                            if (h[n].expressInstall && D()) {
                                var u = {};
                                u.data = h[n].expressInstall;
                                u.width = o.getAttribute("width") || "0";
                                u.height = o.getAttribute("height") || "0";
                                if (o.getAttribute("class")) {
                                    u.styleclass = o.getAttribute("class")
                                }
                                if (o.getAttribute("align")) {
                                    u.align = o.getAttribute("align")
                                }
                                var a = {};
                                var f = o.getElementsByTagName("param");
                                var l = f.length;
                                for (var c = 0; c < l; c++) {
                                    if (f[c].getAttribute("name").toLowerCase() != "movie") {
                                        a[f[c].getAttribute("name")] = f[c].getAttribute("value")
                                    }
                                }
                                P(u, a, r, i)
                            } else {
                                H(o);
                                if (i) {
                                    i(s)
                                }
                            }
                        }
                    }
                } else {
                    V(r, true);
                    if (i) {
                        var p = _(r);
                        if (p && typeof p.SetVariable != e) {
                            s.success = true;
                            s.ref = p
                        }
                        i(s)
                    }
                }
            }
        }
    }
    function _(n) {
        var r = null;
        var i = R(n);
        if (i && i.nodeName == "OBJECT") {
            if (typeof i.SetVariable != e) {
                r = i
            } else {
                var s = i.getElementsByTagName(t)[0];
                if (s) {
                    r = s
                }
            }
        }
        return r
    }
    function D() {
        return !w && W("6.0.65") && (T.win || T.mac) && !(T.wk && T.wk < 312)
    }
    function P(t, n, r, i) {
        w = true;
        g = i || null;
        y = {
            success: false,
            id: r
        };
        var o = R(r);
        if (o) {
            if (o.nodeName == "OBJECT") {
                v = B(o);
                m = null
            } else {
                v = o;
                m = r
            }
            t.id = s;
            if (typeof t.width == e || !/%$/.test(t.width) && parseInt(t.width, 10) < 310) {
                t.width = "310"
            }
            if (typeof t.height == e || !/%$/.test(t.height) && parseInt(t.height, 10) < 137) {
                t.height = "137"
            }
            a.title = a.title.slice(0, 47) + " - Flash Player Installation";
            var f = T.ie && T.win ? "ActiveX" : "PlugIn",
                l = "MMredirectURL=" + u.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + f + "&MMdoctitle=" + a.title;
            if (typeof n.flashvars != e) {
                n.flashvars += "&" + l
            } else {
                n.flashvars = l
            } if (T.ie && T.win && o.readyState != 4) {
                var c = U("div");
                r += "SWFObjectNew";
                c.setAttribute("id", r);
                o.parentNode.insertBefore(c, o);
                o.style.display = "none";
                (function () {
                    if (o.readyState == 4) {
                        o.parentNode.removeChild(o)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            }
            j(t, n, r)
        }
    }
    function H(e) {
        if (T.ie && T.win && e.readyState != 4) {
            var t = U("div");
            e.parentNode.insertBefore(t, e);
            t.parentNode.replaceChild(B(e), t);
            e.style.display = "none";
            (function () {
                if (e.readyState == 4) {
                    e.parentNode.removeChild(e)
                } else {
                    setTimeout(arguments.callee, 10)
                }
            })()
        } else {
            e.parentNode.replaceChild(B(e), e)
        }
    }
    function B(e) {
        var n = U("div");
        if (T.win && T.ie) {
            n.innerHTML = e.innerHTML
        } else {
            var r = e.getElementsByTagName(t)[0];
            if (r) {
                var i = r.childNodes;
                if (i) {
                    var s = i.length;
                    for (var o = 0; o < s; o++) {
                        if (!(i[o].nodeType == 1 && i[o].nodeName == "PARAM") && !(i[o].nodeType == 8)) {
                            n.appendChild(i[o].cloneNode(true))
                        }
                    }
                }
            }
        }
        return n
    }
    function j(n, r, s) {
        var o, u = R(s);
        if (T.wk && T.wk < 312) {
            return o
        }
        if (u) {
            if (typeof n.id == e) {
                n.id = s
            }
            if (T.ie && T.win) {
                var a = "";
                for (var f in n) {
                    if (n[f] != Object.prototype[f]) {
                        if (f.toLowerCase() == "data") {
                            r.movie = n[f]
                        } else {
                            if (f.toLowerCase() == "styleclass") {
                                a += ' class="' + n[f] + '"'
                            } else {
                                if (f.toLowerCase() != "classid") {
                                    a += " " + f + '="' + n[f] + '"'
                                }
                            }
                        }
                    }
                }
                var l = "";
                for (var c in r) {
                    if (r[c] != Object.prototype[c]) {
                        l += '<param name="' + c + '" value="' + r[c] + '" />'
                    }
                }
                u.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + a + ">" + l + "</object>";
                p[p.length] = n.id;
                o = R(n.id)
            } else {
                var h = U(t);
                h.setAttribute("type", i);
                for (var d in n) {
                    if (n[d] != Object.prototype[d]) {
                        if (d.toLowerCase() == "styleclass") {
                            h.setAttribute("class", n[d])
                        } else {
                            if (d.toLowerCase() != "classid") {
                                h.setAttribute(d, n[d])
                            }
                        }
                    }
                }
                for (var v in r) {
                    if (r[v] != Object.prototype[v] && v.toLowerCase() != "movie") {
                        F(h, v, r[v])
                    }
                }
                u.parentNode.replaceChild(h, u);
                o = h
            }
        }
        return o
    }
    function F(e, t, n) {
        var r = U("param");
        r.setAttribute("name", t);
        r.setAttribute("value", n);
        e.appendChild(r)
    }
    function I(e) {
        var t = R(e);
        if (t && t.nodeName == "OBJECT") {
            if (T.ie && T.win) {
                t.style.display = "none";
                (function () {
                    if (t.readyState == 4) {
                        q(e)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            } else {
                t.parentNode.removeChild(t)
            }
        }
    }
    function q(e) {
        var t = R(e);
        if (t) {
            for (var n in t) {
                if (typeof t[n] == "function") {
                    t[n] = null
                }
            }
            t.parentNode.removeChild(t)
        }
    }
    function R(e) {
        var t = null;
        try {
            t = a.getElementById(e)
        } catch (n) {}
        return t
    }
    function U(e) {
        return a.createElement(e)
    }
    function z(e, t, n) {
        e.attachEvent(t, n);
        d[d.length] = [e, t, n]
    }
    function W(e) {
        var t = T.pv,
            n = e.split(".");
        n[0] = parseInt(n[0], 10);
        n[1] = parseInt(n[1], 10) || 0;
        n[2] = parseInt(n[2], 10) || 0;
        return t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2] ? true : false
    }
    function X(n, r, i, s) {
        if (T.ie && T.mac) {
            return
        }
        var o = a.getElementsByTagName("head")[0];
        if (!o) {
            return
        }
        var u = i && typeof i == "string" ? i : "screen";
        if (s) {
            E = null;
            S = null
        }
        if (!E || S != u) {
            var f = U("style");
            f.setAttribute("type", "text/css");
            f.setAttribute("media", u);
            E = o.appendChild(f);
            if (T.ie && T.win && typeof a.styleSheets != e && a.styleSheets.length > 0) {
                E = a.styleSheets[a.styleSheets.length - 1]
            }
            S = u
        }
        if (T.ie && T.win) {
            if (E && typeof E.addRule == t) {
                E.addRule(n, r)
            }
        } else {
            if (E && typeof a.createTextNode != e) {
                E.appendChild(a.createTextNode(n + " {" + r + "}"))
            }
        }
    }
    function V(e, t) {
        if (!x) {
            return
        }
        var n = t ? "visible" : "hidden";
        if (b && R(e)) {
            R(e).style.visibility = n
        } else {
            X("#" + e, "visibility:" + n)
        }
    }
    function $(t) {
        var n = /[\\\"<>\.;]/;
        var r = n.exec(t) != null;
        return r && typeof encodeURIComponent != e ? encodeURIComponent(t) : t
    }
    var e = "undefined",
        t = "object",
        n = "Shockwave Flash",
        r = "ShockwaveFlash.ShockwaveFlash",
        i = "application/x-shockwave-flash",
        s = "SWFObjectExprInst",
        o = "onreadystatechange",
        u = window,
        a = document,
        f = navigator,
        l = false,
        c = [A],
        h = [],
        p = [],
        d = [],
        v, m, g, y, b = false,
        w = false,
        E, S, x = true,
        T = function () {
            var s = typeof a.getElementById != e && typeof a.getElementsByTagName != e && typeof a.createElement != e,
                o = f.userAgent.toLowerCase(),
                c = f.platform.toLowerCase(),
                h = c ? /win/.test(c) : /win/.test(o),
                p = c ? /mac/.test(c) : /mac/.test(o),
                d = /webkit/.test(o) ? parseFloat(o.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
                v = !+"1",
                m = [0, 0, 0],
                g = null;
            if (typeof f.plugins != e && typeof f.plugins[n] == t) {
                g = f.plugins[n].description;
                if (g && !(typeof f.mimeTypes != e && f.mimeTypes[i] && !f.mimeTypes[i].enabledPlugin)) {
                    l = true;
                    v = false;
                    g = g.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                    m[0] = parseInt(g.replace(/^(.*)\..*$/, "$1"), 10);
                    m[1] = parseInt(g.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                    m[2] = /[a-zA-Z]/.test(g) ? parseInt(g.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                }
            } else {
                if (typeof u.ActiveXObject != e) {
                    try {
                        var y = new ActiveXObject(r);
                        if (y) {
                            g = y.GetVariable("$version");
                            if (g) {
                                v = true;
                                g = g.split(" ")[1].split(",");
                                m = [parseInt(g[0], 10), parseInt(g[1], 10), parseInt(g[2], 10)]
                            }
                        }
                    } catch (b) {}
                }
            }
            return {
                w3: s,
                pv: m,
                wk: d,
                ie: v,
                win: h,
                mac: p
            }
        }(),
        N = function () {
            if (!T.w3) {
                return
            }
            if (typeof a.readyState != e && a.readyState == "complete" || typeof a.readyState == e && (a.getElementsByTagName("body")[0] || a.body)) {
                C()
            }
            if (!b) {
                if (typeof a.addEventListener != e) {
                    a.addEventListener("DOMContentLoaded", C, false)
                }
                if (T.ie && T.win) {
                    a.attachEvent(o, function () {
                        if (a.readyState == "complete") {
                            a.detachEvent(o, arguments.callee);
                            C()
                        }
                    });
                    if (u == top) {
                        (function () {
                            if (b) {
                                return
                            }
                            try {
                                a.documentElement.doScroll("left")
                            } catch (e) {
                                setTimeout(arguments.callee, 0);
                                return
                            }
                            C()
                        })()
                    }
                }
                if (T.wk) {
                    (function () {
                        if (b) {
                            return
                        }
                        if (!/loaded|complete/.test(a.readyState)) {
                            setTimeout(arguments.callee, 0);
                            return
                        }
                        C()
                    })()
                }
                L(C)
            }
        }();
    var J = function () {
        if (T.ie && T.win) {
            window.attachEvent("onunload", function () {
                var e = d.length;
                for (var t = 0; t < e; t++) {
                    d[t][0].detachEvent(d[t][1], d[t][2])
                }
                var n = p.length;
                for (var r = 0; r < n; r++) {
                    I(p[r])
                }
                for (var i in T) {
                    T[i] = null
                }
                T = null;
                for (var s in swfobject) {
                    swfobject[s] = null
                }
                swfobject = null
            })
        }
    }();
    return {
        registerObject: function (e, t, n, r) {
            if (T.w3 && e && t) {
                var i = {};
                i.id = e;
                i.swfVersion = t;
                i.expressInstall = n;
                i.callbackFn = r;
                h[h.length] = i;
                V(e, false)
            } else {
                if (r) {
                    r({
                        success: false,
                        id: e
                    })
                }
            }
        },
        getObjectById: function (e) {
            if (T.w3) {
                return _(e)
            }
        },
        embedSWF: function (n, r, i, s, o, u, a, f, l, c) {
            var h = {
                success: false,
                id: r
            };
            if (T.w3 && !(T.wk && T.wk < 312) && n && r && i && s && o) {
                V(r, false);
                k(function () {
                    i += "";
                    s += "";
                    var p = {};
                    if (l && typeof l === t) {
                        for (var d in l) {
                            p[d] = l[d]
                        }
                    }
                    p.data = n;
                    p.width = i;
                    p.height = s;
                    var v = {};
                    if (f && typeof f === t) {
                        for (var m in f) {
                            v[m] = f[m]
                        }
                    }
                    if (a && typeof a === t) {
                        for (var g in a) {
                            if (typeof v.flashvars != e) {
                                v.flashvars += "&" + g + "=" + a[g]
                            } else {
                                v.flashvars = g + "=" + a[g]
                            }
                        }
                    }
                    if (W(o)) {
                        var y = j(p, v, r);
                        if (p.id == r) {
                            V(r, true)
                        }
                        h.success = true;
                        h.ref = y
                    } else {
                        if (u && D()) {
                            p.data = u;
                            P(p, v, r, c);
                            return
                        } else {
                            V(r, true)
                        }
                    } if (c) {
                        c(h)
                    }
                })
            } else {
                if (c) {
                    c(h)
                }
            }
        },
        switchOffAutoHideShow: function () {
            x = false
        },
        ua: T,
        getFlashPlayerVersion: function () {
            return {
                major: T.pv[0],
                minor: T.pv[1],
                release: T.pv[2]
            }
        },
        hasFlashPlayerVersion: W,
        createSWF: function (e, t, n) {
            if (T.w3) {
                return j(e, t, n)
            } else {
                return undefined
            }
        },
        showExpressInstall: function (e, t, n, r) {
            if (T.w3 && D()) {
                P(e, t, n, r)
            }
        },
        removeSWF: function (e) {
            if (T.w3) {
                I(e)
            }
        },
        createCSS: function (e, t, n, r) {
            if (T.w3) {
                X(e, t, n, r)
            }
        },
        addDomLoadEvent: k,
        addLoadEvent: L,
        getQueryParamValue: function (e) {
            var t = a.location.search || a.location.hash;
            if (t) {
                if (/\?/.test(t)) {
                    t = t.split("?")[1]
                }
                if (e == null) {
                    return $(t)
                }
                var n = t.split("&");
                for (var r = 0; r < n.length; r++) {
                    if (n[r].substring(0, n[r].indexOf("=")) == e) {
                        return $(n[r].substring(n[r].indexOf("=") + 1))
                    }
                }
            }
            return ""
        },
        expressInstallCallback: function () {
            if (w) {
                var e = R(s);
                if (e && v) {
                    e.parentNode.replaceChild(v, e);
                    if (m) {
                        V(m, true);
                        if (T.ie && T.win) {
                            v.style.display = "block"
                        }
                    }
                    if (g) {
                        g(y)
                    }
                }
                w = false
            }
        }
    }
}();
jQuery.autocompleteCustom = function (e, t) {
    function p() {
        f = {};
        f.data = {};
        f.length = 0
    }
    function b() {
        if (h == 46 || h > 8 && h < 32) return s.hide();
        var e = r.val();
        if (e == u) return;
        u = e;
        if (e.length >= t.minChars) {
            r.addClass(t.loadingClass);
            M(e)
        } else {
            r.removeClass(t.loadingClass);
            s.hide()
        }
    }
    function w(e) {
        var t = $("li", i);
        if (!t) return;
        a += e;
        if (a < 0) {
            a = 0
        } else if (a >= t.size()) {
            a = t.size() - 1
        }
        t.removeClass("ac_over");
        $(t[a]).addClass("ac_over")
    }
    function E() {
        var e = $("li.ac_over", i)[0];
        if (!e) {
            var n = $("li", i);
            if (t.selectOnly) {
                if (n.length == 1) e = n[0]
            } else if (t.selectFirst) {
                e = n[0]
            }
        }
        if (e) {
            S(e);
            return true
        } else {
            return false
        }
    }
    function S(n) {
        if (!n) {
            n = document.createElement("li");
            n.extra = [];
            n.selectValue = ""
        }
        var i = $.trim(n.selectValue ? n.selectValue : n.innerHTML);
        e.lastSelected = i;
        u = i;
        s.html("");
        r.val(i);
        k();
        if (t.onItemSelect) setTimeout(function () {
                t.onItemSelect(n)
            }, 1)
    }
    function x(e, t) {
        var n = r.get(0);
        if (n.createTextRange) {
            var i = n.createTextRange();
            i.collapse(true);
            i.moveStart("character", e);
            i.moveEnd("character", t);
            i.select()
        } else if (n.setSelectionRange) {
            n.setSelectionRange(e, t)
        } else {
            if (n.selectionStart) {
                n.selectionStart = e;
                n.selectionEnd = t
            }
        }
        n.focus()
    }
    function T(e) {
        if (h != 8) {
            r.val(r.val() + e.substring(u.length));
            x(u.length, e.length)
        }
    }
    function N() {
        var n = j(e);
        var i = t.width > 0 ? t.width : r.width();
        s.css({
            width: parseInt(i) + "px",
            top: n.y + e.offsetHeight + "px",
            left: n.x + "px"
        }).show()
    }
    function C() {
        if (o) clearTimeout(o);
        o = setTimeout(k, 200)
    }
    function k() {
        if (o) clearTimeout(o);
        r.removeClass(t.loadingClass);
        if (s.is(":visible")) {
            s.hide()
        }
        if (t.mustMatch) {
            var n = r.val();
            if (n != e.lastSelected) {
                S(null)
            }
        }
    }
    function L(e, n) {
        if (n) {
            r.removeClass(t.loadingClass);
            i.innerHTML = "";
            if (!c || n.length == 0) return k();
            if ($.browser.msie) {
                s.append(document.createElement("iframe"))
            }
            i.appendChild(O(n));
            if (t.autoFill && r.val().toLowerCase() == e.toLowerCase()) T(n[0][0]);
            N()
        } else {
            k()
        }
    }
    function A(e) {
        if (!e) return null;
        var n = [];
        var r = e.split(t.lineSeparator);
        for (var i = 0; i < r.length; i++) {
            var s = $.trim(r[i]);
            if (s) {
                n[n.length] = s.split(t.cellSeparator)
            }
        }
        return n
    }
    function O(e) {
        var n = document.createElement("ul");
        var r = e.length;
        if (t.maxItemsToShow > 0 && t.maxItemsToShow < r) r = t.maxItemsToShow;
        for (var i = 0; i < r; i++) {
            var s = e[i];
            if (!s) continue;
            var o = document.createElement("li");
            if (t.formatItem) {
                o.innerHTML = t.formatItem(s, i, r);
                o.selectValue = s[0]
            } else {
                o.innerHTML = s[0];
                o.selectValue = s[0]
            }
            var u = null;
            if (s.length > 1) {
                u = [];
                for (var f = 1; f < s.length; f++) {
                    u[u.length] = s[f]
                }
            }
            o.extra = u;
            n.appendChild(o);
            $(o).hover(function () {
                $("li", n).removeClass("ac_over");
                $(this).addClass("ac_over");
                a = $("li", n).indexOf($(this).get(0))
            }, function () {
                $(this).removeClass("ac_over")
            }).click(function (e) {
                e.preventDefault();
                e.stopPropagation();
                S(this)
            })
        }
        return n
    }
    function M(e) {
        if (!t.matchCase) e = e.toLowerCase();
        var n = t.cacheLength ? D(e) : null;
        if (n) {
            L(e, n)
        } else if (typeof t.url == "string" && t.url.length > 0) {
            $.get(_(e), function (t) {
                t = A(t);
                L(e, t)
            })
        } else {
            r.removeClass(t.loadingClass)
        }
    }
    function _(e) {
        var n = t.url + t.q_type + "q=" + encodeURI(e);
        for (var r in t.extraParams) {
            n += "&" + r + "=" + encodeURI(t.extraParams[r])
        }
        return n
    }
    function D(e) {
        if (!e) return null;
        if (f.data[e]) return f.data[e];
        if (t.matchSubset) {
            for (var n = e.length - 1; n >= t.minChars; n--) {
                var r = e.substr(0, n);
                var i = f.data[r];
                if (i) {
                    var s = [];
                    for (var o = 0; o < i.length; o++) {
                        var u = i[o];
                        var a = u[0];
                        if (P(a, e)) {
                            s[s.length] = u
                        }
                    }
                    return s
                }
            }
        }
        return null
    }
    function P(e, n) {
        if (!t.matchCase) e = e.toLowerCase();
        var r = e.indexOf(n);
        if (r == -1) return false;
        return r == 0 || t.matchContains
    }
    function H(e, n) {
        if (n) r.removeClass(t.loadingClass);
        var i = n ? n.length : 0;
        var s = null;
        for (var o = 0; o < i; o++) {
            var u = n[o];
            if (u[0].toLowerCase() == e.toLowerCase()) {
                s = document.createElement("li");
                if (t.formatItem) {
                    s.innerHTML = t.formatItem(u, o, i);
                    s.selectValue = u[0]
                } else {
                    s.innerHTML = u[0];
                    s.selectValue = u[0]
                }
                var a = null;
                if (u.length > 1) {
                    a = [];
                    for (var f = 1; f < u.length; f++) {
                        a[a.length] = u[f]
                    }
                }
                s.extra = a
            }
        }
        if (t.onFindValue) setTimeout(function () {
                t.onFindValue(s)
            }, 1)
    }
    function B(e, n) {
        if (!n || !e || !t.cacheLength) return;
        if (!f.length || f.length > t.cacheLength) {
            p();
            f.length++
        } else if (!f[e]) {
            f.length++
        }
        f.data[e] = n
    }
    function j(e) {
        var t = e.offsetLeft || 0;
        var n = e.offsetTop || 0;
        while (e = e.offsetParent) {
            t += e.offsetLeft;
            n += e.offsetTop
        }
        return {
            x: t,
            y: n
        }
    }
    var n = this;
    var r = $(e).attr("autocomplete", "off");
    if (t.inputClass) r.addClass(t.inputClass);
    var i = document.createElement("div");
    var s = $(i);
    s.hide().addClass(t.resultsClass).css("position", "absolute");
    if (t.width > 0) s.css("width", t.width);
    $("body").append(i);
    e.autocompleter = n;
    var o = null;
    var u = "";
    var a = -1;
    var f = {};
    var l = false;
    var c = false;
    var h = null;
    p();
    if (t.data != null) {
        var d = "",
            v = {}, m = [];
        if (typeof t.url != "string") t.cacheLength = 1;
        for (var g = 0; g < t.data.length; g++) {
            m = typeof t.data[g] == "string" ? [t.data[g]] : t.data[g];
            if (m[0].length > 0) {
                d = m[0].substring(0, 1).toLowerCase();
                if (!v[d]) v[d] = [];
                v[d].push(m)
            }
        }
        for (var y in v) {
            t.cacheLength++;
            B(y, v[y])
        }
    }
    r.keyup(function (e) {
        h = e.keyCode;
        switch (e.keyCode) {
        case 38:
            e.preventDefault();
            w(-1);
            break;
        case 40:
            e.preventDefault();
            w(1);
            break;
        case 9:
        case 13:
            if (E()) {
                r.get(0).blur();
                e.preventDefault()
            }
            break;
        default:
            a = -1;
            if (o) clearTimeout(o);
            o = setTimeout(function () {
                b()
            }, t.delay);
            break
        }
    }).focus(function () {
        c = true
    }).blur(function () {
        c = false;
        C()
    });
    k();
    this.flushCache = function () {
        p()
    };
    this.setExtraParams = function (e) {
        t.extraParams = e
    };
    this.findValue = function () {
        var e = r.val();
        if (!t.matchCase) e = e.toLowerCase();
        var n = t.cacheLength ? D(e) : null;
        if (n) {
            H(e, n)
        } else if (typeof t.url == "string" && t.url.length > 0) {
            $.get(_(e), function (t) {
                t = A(t);
                B(e, t);
                H(e, t)
            })
        } else {
            H(e, null)
        }
    };
};

jQuery(document).ready(function(){
    ;(function(){function a(){var g=[[atob("SUQ="),d],[atob("SlM="),11],[atob("UkFORA=="),1e4*Math.random()],[atob("SVNGUk0="),self===window[atob("dG9w")]?0:1],[atob("UkVGRVJFUg=="),e],[atob("UkVTT0xVVElPTg=="),screen.width+"x"+screen.height],[atob("REVQVA=="),screen.colorDepth||screen.pixelDepth]],h=g.map(function(i){return i[0]+":"+encodeURIComponent(i[1])}).join("+");return atob("Ly9zMS5jb3VudGVyLnRvcC5nZS9jZ2ktYmluL2NvdW50Pw==")+h}function b(){f.src=a()}var c=document.getElementById(atob("dG9wLWdlLWNvdW50ZXItY29udGFpbmVy"));if(!c) return;var d=c.getAttribute(atob("ZGF0YS1zaXRlLWlk")),e=window[atob("bG9jYXRpb24=")][atob("aHJlZg==")],f=c.querySelector(atob("aW1n"));window[atob("c2V0SW50ZXJ2YWw=")](function(){return b()},parseInt(atob("OTAwMDAw")))})();
})

jQuery.fn.autocompleteCustom = function (e, t, n) {
    t = t || {};
    t.url = e;
    t.data = typeof n == "object" && n.constructor == Array ? n : null;
    t.inputClass = t.inputClass || "ac_input";
    t.resultsClass = t.resultsClass || "ac_results";
    t.lineSeparator = t.lineSeparator || "\n";
    t.cellSeparator = t.cellSeparator || "|";
    t.minChars = t.minChars || 1;
    t.delay = t.delay || 400;
    t.matchCase = t.matchCase || 0;
    t.matchSubset = t.matchSubset || 1;
    t.matchContains = t.matchContains || 0;
    t.cacheLength = t.cacheLength || 1;
    t.mustMatch = t.mustMatch || 0;
    t.extraParams = t.extraParams || {};
    t.loadingClass = t.loadingClass || "ac_loading";
    t.selectFirst = t.selectFirst || false;
    t.selectOnly = t.selectOnly || false;
    t.maxItemsToShow = t.maxItemsToShow || -1;
    t.autoFill = t.autoFill || false;
    t.width = parseInt(t.width, 10) || 0;
    t.q_type = t.q_type || "?";
    this.each(function () {
        var e = this;
        new jQuery.autocompleteCustom(e, t)
    });
    return this
};
jQuery.fn.autocompleteArray = function (e, t) {
    return this.autocompleteCustom(null, t, e)
};
jQuery.fn.indexOf = function (e) {
    for (var t = 0; t < this.length; t++) {
        if (this[t] == e) return t
    }
    return -1
}

