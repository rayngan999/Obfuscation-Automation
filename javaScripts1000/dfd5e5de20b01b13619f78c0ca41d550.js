(function () {
  var list, s, w, _usci, _usf, _usc;
  if (!usObject) return;

  // usObject.list ãæå®ããã¦ããã°ãããä½¿ã
  // usObject.list ãæå®ããã¦ããªããã°ãusObject ãä½¿ãï¼å¾æ¥ã©ããã®åä½ï¼
  list = usObject.list || [usObject];

  _usci = usgetCookie('usonarid');
  _usf = "";
  if (!_usci) {
    _usci = "CID" + new Date().getTime() + String(Math.random()).substr(2, 4);
    _usf = "1";
  }

  w = new Date();
  w.setFullYear(w.getFullYear() + 1);
  ussetCookie("usonarid", _usci, w, "/");
  
  _usc = (document.cookie) ? true : false;

  list.forEach(function(usObjectPart) {
    var usObjectClone, scriptTag, firstScriptTag;
    usObjectClone = {
      _usci: _usci,
      _usf: _usf,
      _usc: _usc,
      path: usObjectPart.path || usObject.path,
      gid: usObjectPart.gid || usObject.gid,
      uid: usObjectPart.uid || usObject.uid,
      pw: usObjectPart.pw || usObject.pw,
      _usv: usObjectPart._usv || usObject._usv,
      callback: usObjectPart.callback || usObject.callback,
    };

    s = usObjectClone.path + "alog.php";
    s += "?gid=" + usObjectClone.gid + "&uid=" + usObjectClone.uid + "&pw=" + usObjectClone.pw;
    s += "&ourl=" + encodeURIComponent(location.href) + "&ref=" + encodeURIComponent(document.referrer) + "&title=" + encodeURIComponent(document.title);
    s += "&_usc=" + usObjectClone._usc + "&_usv=" + usObjectClone._usv + "&_usci=" + usObjectClone._usci + "&_usf=" + usObjectClone._usf;
    s += (usObjectClone.callback ? "&callback=" + encodeURIComponent(usObjectClone.callback) : "");

    scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.async = true;
    scriptTag.src = s;
    firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag);
  });
})();


function ussetCookie(name, value, expires, path, theDomain, secure) {
  value = escape(value);
  var theCookie = name + "=" + value +
    ((expires) ? "; expires=" + expires.toGMTString() : "") +
    ((path) ? "; path=" + path : "") +
    ((theDomain) ? "; domain=" + theDomain : "") +
    ((secure) ? "; secure" : "");
  document.cookie = theCookie;
}

function usgetCookie(Name) {
  var search = Name + "="
  if (document.cookie.length > 0) { // if there are any cookies
    var offset = document.cookie.indexOf(search)
    if (offset != -1) { // if cookie exists
      offset += search.length
      // set index of beginning of value
      var end = document.cookie.indexOf(";", offset)
      // set index of end of cookie value
      if (end == -1) end = document.cookie.length
      return unescape(document.cookie.substring(offset, end))
    }
  }
}
function usdelCookie(name, path, domain) {
  if (usgetCookie(name)) document.cookie = name + "=" +
    ((path) ? ";path=" + path : "") +
    ((domain) ? ";domain=" + domain : "") +
    ";expires=Thu, 01-Jan-70 00:00:01 GMT";
}


var sending = false;
var xhr;
////************************************************
// ie6-8å¯¾å¿ãã³ã¼ã«ããã¯ç¨bindæå¹å
//************************************************
if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== "function") {
      // closest thing possible to the ECMAScript 5 internal IsCallable function
      throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var aArgs = Array.prototype.slice.call(arguments, 1),
      fToBind = this,
      fNOP = function () { },
      fBound = function () {
        return fToBind.apply(this instanceof fNOP
          ? this
          : oThis || window,
          aArgs.concat(Array.prototype.slice.call(arguments)));
      };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
  };
}

//TODO ä¸è¨ãã¹ã¦ä¸è¦

/****************************************************************
* XMLHttpRequestã®ä½æ(ajax_send_sync,ajax_send_asyncã¨ã»ãã)
*
* å¼æ° ï¼ -
* æ»å¤ ï¼ XMLHttpRequestãªãã¸ã§ã¯ã or false
* ä½¿æ¹ ï¼ var xhr = createXmlHttp();
*
****************************************************************/
function createXmlHttp() {
  xhr = false;

  if (window.XDomainRequest) {
    // IE8å¯¾å¿
    xhr = new XDomainRequest();
    // IE8ãã©ã°
    xhr.domainRequest = true;
  } else if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    // IEå¯¾å¿
    // ãããªãã°ActiveXãªãã¸ã§ã¯ããå©ç¨
    try {
      xhr = new ActiveXObject('MSXML2.XMLHTTP.6.0');
    } catch (e) {
      try {
        xhr = new ActiveXObject('MSXML2.XMLHTTP.3.0');
      } catch (e) {
        try {
          xhr = new ActiveXObject('MSXML2.XMLHTTP');
        } catch (e) {
        }
      }
    }
  }
  return xhr;
}

/****************************************************************
* XMLHttpRequestã®éä¿¡(åæ)
*
* â»åæã»éåæã§æåãéãã®ã§åãã
*
* å¼æ° ï¼ url ãªã¯ã¨ã¹ãå
*         params ãã©ã¡ã¼ã¿(ä¾ï¼"name=ponpon&body=test")
* æ»å¤ ï¼ XMLHttpRequestãªãã¸ã§ã¯ã or false
* ä½¿æ¹ ï¼ ajax_send_sync(url, "name=ponpon&body=test");
*
****************************************************************/
function ajax_send_sync(url, params) {
  if (sending === true) { return; }

  sending = true;
  try {
    xhr = createXmlHttp();
    xhr.open('POST', url, false);
    if (xhr.domainRequest !== true) {
      // IE8(XDomainRequestç¨)
      //xhr.setRequestHeader("Content-Type" , "application/x-www-form-urlencoded");
      xhr.setRequestHeader("Content-Type", "text/plain"); // å¤åãããéè¦ãtext/plainãã§ãªãã¨å¼æ°ãæã£ã¦ãããªãã

      // ã­ã£ãã·ã¥ç¡å¹
      //xhr.setRequestHeader("If-Modified-Since", "Thu, 01 Jun 1970 00:00:00 GMT");
    }
    xhr.send(params);

    if (xhr.readyState == 4 && xhr.status == 200) {
      sending = false;
      return xhr;
    }
  } catch (e) {
    sending = false;
  }
  sending = false;
  return false;
}

/****************************************************************
* XMLHttpRequestã®éä¿¡(éåæ)
*
* â»åæã»éåæã§æåãéãã®ã§åãã
*
* å¼æ° ï¼ url ãªã¯ã¨ã¹ãå
*         params ãã©ã¡ã¼ã¿(ä¾ï¼"name=ponpon&body=test")
*         callback ã³ã¼ã«ããã¯é¢æ°
* æ»å¤ ï¼ -
* ä½¿æ¹ ï¼ ajax_send_async(url, "name=ponpon&body=test", func);
*
****************************************************************/
function ajax_send_async(url, params, callback) {
  if (sending === true) { return; }
  sending = true;
  try {
    var xhr = createXmlHttp();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          sending = false;
          if (callback) { callback(xhr); }
        } else {
          sending = false;
          if (callback) { callback(false); }
        }
      }
    }

    xhr.open('POST', url, true);
    if (xhr.domainRequest !== true) {
      // IE8(XDomainRequestç¨)
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      // ã­ã£ãã·ã¥ç¡å¹
      xhr.setRequestHeader("If-Modified-Since", "Thu, 01 Jun 1970 00:00:00 GMT");
    }
    xhr.send(params);
  } catch (e) {
    sending = false;
    // alert(e)
    //alert ('ãã ãã¾æ··ã¿åã£ã¦ããã¾ã')
  }
  sending = false;
}
