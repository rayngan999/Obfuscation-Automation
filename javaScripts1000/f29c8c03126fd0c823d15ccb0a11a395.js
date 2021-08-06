function activeXDetect(e) {
  return (
    (componentVersion = document.body.getComponentVersion(
      '{' + e + '}',
      'ComponentID'
    )),
    null != componentVersion ? componentVersion : !1
  );
}
function stripIllegalChars(e) {
  for (t = '', e = e.toLowerCase(), i = 0; i < e.length; i++)
    '\n' != e.charAt(i) && '/' != e.charAt(i) && '\\' != e.charAt(i)
      ? (t += e.charAt(i))
      : '\n' == e.charAt(i) && (t += 'n');
  return t;
}
function stripFullPath(e, n, t) {
  var i = n,
    r = t,
    a = e,
    o = a.lastIndexOf(i);
  o >= 0 &&
    ((filenameLen = a.length), (a = a.substring(o + i.length, filenameLen)));
  var p = a.indexOf(r);
  return p >= 0 && (a = a.slice(0, p)), a;
}
function Hashtable() {
  function e(e) {
    for (var a = null, o = 0; 'number' == typeof t[o]; ) o += 1;
    (t[o] = 0),
      (this.hasNext = this.hasMoreElements = function() {
        return t[o] < i ? !0 : ('number' == typeof t[o] && (t[o] = null), !1);
      }),
      (this.next = this.nextElement = function() {
        return this.hasNext ? ((a = t[o]), n[e][t[o]++]) : null;
      }),
      (this.remove = function() {
        'number' == typeof a && (r.remove(n.__indexToKeys[a]), (a = null));
      });
  }
  var n = { __indexToValue: [], __indexToKeys: [] },
    t = [],
    i = 0,
    r = this;
  (this.get = function(e) {
    return 'number' == typeof n[e] ? n.__indexToValue[n[e]] : null;
  }),
    (this.put = function(e, t) {
      'number' == typeof n[e]
        ? (n.__indexToValue[n[e]] = t)
        : ((n[e] = i), (n.__indexToValue[i] = t), (n.__indexToKeys[i++] = e));
    }),
    (this.remove = function(e) {
      var r = n[e];
      if ('number' == typeof r) {
        delete n[e], (i -= 1);
        for (var a = r; i > a; a++)
          (n.__indexToValue[a] = n.__indexToValue[a + 1]),
            (n[(n.__indexToKeys[a] = n.__indexToKeys[a + 1])] = a);
        for (var a = 0; a < t.length; a++) t[a] && r < t[a] && (t[a] -= 1);
      }
    }),
    (this.size = function() {
      return i;
    }),
    (this.__enumerate = function(n) {
      return new e(n);
    }),
    (Hashtable.prototype.elements = function() {
      return this.__enumerate('__indexToValue');
    }),
    (Hashtable.prototype.keys = function() {
      return this.__enumerate('__indexToKeys');
    }),
    (Hashtable.prototype.clear = function() {
      for (var e = this.keys(); e.hasNext(); ) this.remove(e.next());
    }),
    (Hashtable.prototype.toString = function() {
      for (var e, n = this.keys(), t = ''; n.hasNext(); )
        (e = n.next()), (t += e + ' =&gt; ' + this.get(e) + '\r\n');
      return t;
    }),
    (Hashtable.prototype.contains = function(e) {
      for (var n = this.elements(); n.hasNext(); ) if (n.next() == e) return !0;
      return !1;
    }),
    (Hashtable.prototype.containsValue = Hashtable.prototype.contains),
    (Hashtable.prototype.containsKey = function(e) {
      return null != this.get(e);
    }),
    (Hashtable.prototype.isEmpty = function() {
      return 0 == this.size();
    }),
    (Hashtable.prototype.putAll = function(e) {
      if (e.constructor == Hashtable)
        for (var n, t = e.keys(); t.hasNext(); )
          (n = t.next()), this.put(n, e.get(n));
    }),
    (Hashtable.prototype.clone = function() {
      var e = new Hashtable();
      return e.putAll(this), e;
    }),
    (Hashtable.prototype.equals = function(e) {
      return e == this;
    });
}
function IE_FingerPrint() {
  (this.deviceprint_browser = function() {
    var e = navigator.userAgent.toLowerCase();
    return (
      (t = e + SEP + navigator.appVersion + SEP + navigator.platform),
      (t +=
        SEP +
        navigator.appMinorVersion +
        SEP +
        navigator.cpuClass +
        SEP +
        navigator.browserLanguage),
      (t += SEP + ScriptEngineBuildVersion()),
      t
    );
  }),
    (this.deviceprint_software = function() {
      var t = '',
        r = !0;
      document.body.addBehavior('#default#clientCaps');
      var a;
      for (i = 0; i < n.length; i++) {
        a = activeXDetect(n[i]);
        var o = e[i];
        a
          ? 1 == r
            ? ((t += o + PAIR + a), (r = !1))
            : (t += SEP + o + PAIR + a)
          : ((t += ''), (r = !1));
      }
      return t;
    });
  var e = new Array(
      'abk',
      'wnt',
      'aol',
      'arb',
      'chs',
      'cht',
      'dht',
      'dhj',
      'dan',
      'dsh',
      'heb',
      'ie5',
      'icw',
      'ibe',
      'iec',
      'ieh',
      'iee',
      'jap',
      'krn',
      'lan',
      'swf',
      'shw',
      'msn',
      'wmp',
      'obp',
      'oex',
      'net',
      'pan',
      'thi',
      'tks',
      'uni',
      'vtc',
      'vnm',
      'mvm',
      'vbs',
      'wfd'
    ),
    n = new Array(
      '7790769C-0471-11D2-AF11-00C04FA35D02',
      '89820200-ECBD-11CF-8B85-00AA005B4340',
      '47F67D00-9E55-11D1-BAEF-00C04FC2D130',
      '76C19B38-F0C8-11CF-87CC-0020AFEECF20',
      '76C19B34-F0C8-11CF-87CC-0020AFEECF20',
      '76C19B33-F0C8-11CF-87CC-0020AFEECF20',
      '9381D8F2-0288-11D0-9501-00AA00B911A5',
      '4F216970-C90C-11D1-B5C7-0000F8051515',
      '283807B5-2C60-11D0-A31D-00AA00B92C03',
      '44BBA848-CC51-11CF-AAFA-00AA00B6015C',
      '76C19B36-F0C8-11CF-87CC-0020AFEECF20',
      '89820200-ECBD-11CF-8B85-00AA005B4383',
      '5A8D6EE0-3E18-11D0-821E-444553540000',
      '630B1DA0-B465-11D1-9948-00C04F98BBC9',
      '08B0E5C0-4FCB-11CF-AAA5-00401C608555',
      '45EA75A0-A269-11D1-B5BF-0000F8051515',
      'DE5AED00-A4BF-11D1-9948-00C04F98BBC9',
      '76C19B30-F0C8-11CF-87CC-0020AFEECF20',
      '76C19B31-F0C8-11CF-87CC-0020AFEECF20',
      '76C19B50-F0C8-11CF-87CC-0020AFEECF20',
      'D27CDB6E-AE6D-11CF-96B8-444553540000',
      '2A202491-F00D-11CF-87CC-0020AFEECF20',
      '5945C046-LE7D-LLDL-BC44-00C04FD912BE',
      '22D6F312-B0F6-11D0-94AB-0080C74C7E95',
      '3AF36230-A269-11D1-B5BF-0000F8051515',
      '44BBA840-CC51-11CF-AAFA-00AA00B6015C',
      '44BBA842-CC51-11CF-AAFA-00AA00B6015B',
      '76C19B32-F0C8-11CF-87CC-0020AFEECF20',
      '76C19B35-F0C8-11CF-87CC-0020AFEECF20',
      'CC2A9BA0-3BDD-11D0-821E-444553540000',
      '3BF42070-B3B1-11D1-B5C5-0000F8051515',
      '10072CEC-8CC1-11D1-986E-00A0C955B42F',
      '76C19B37-F0C8-11CF-87CC-0020AFEECF20',
      '08B0E5C0-4FCB-11CF-AAA5-00401C608500',
      '4F645220-306D-11D2-995D-00C04F98BBC9',
      '73FA19D0-2D75-11D2-995D-00C04F98BBC9'
    );
}
function Mozilla_FingerPrint() {}
function Opera_FingerPrint() {}
function detectFields() {
  var e,
    n,
    t = 'form',
    i = 'input',
    r = document.getElementsByTagName('form'),
    a = r.length,
    o = [];
  o.push('url=' + window.location.href);
  for (var p = 0; a > p; p++) {
    o.push(t + '=' + r[p].name),
      (e = r[p].getElementsByTagName('input')),
      (n = e.length);
    for (var s = 0; n > s; s++)
      'hidden' != e[s].type && o.push(i + '=' + e[s].name);
  }
  var u = o.join('|');
  return u;
}
function FingerPrint() {
  var e = 2,
    n = new Hashtable();
  n.put('npnul32', 'def'),
    n.put('npqtplugin6', 'qt6'),
    n.put('npqtplugin5', 'qt5'),
    n.put('npqtplugin4', 'qt4'),
    n.put('npqtplugin3', 'qt3'),
    n.put('npqtplugin2', 'qt2'),
    n.put('npqtplugin', 'qt1'),
    n.put('nppdf32', 'pdf'),
    n.put('NPSWF32', 'swf'),
    n.put('NPJava11', 'j11'),
    n.put('NPJava12', 'j12'),
    n.put('NPJava13', 'j13'),
    n.put('NPJava32', 'j32'),
    n.put('NPJava14', 'j14'),
    n.put('npoji600', 'j61'),
    n.put('NPJava131_16', 'j16'),
    n.put('NPOFFICE', 'mso'),
    n.put('npdsplay', 'wpm'),
    n.put('npwmsdrm', 'drm'),
    n.put('npdrmv2', 'drn'),
    n.put('nprjplug', 'rjl'),
    n.put('nppl3260', 'rpl'),
    n.put('nprpjplug', 'rpv'),
    n.put('npchime', 'chm'),
    n.put('npCortona', 'cor'),
    n.put('np32dsw', 'dsw'),
    n.put('np32asw', 'asw'),
    (this.deviceprint_version = function() {
      return e;
    }),
    (this.deviceprint_browser = function() {
      var e = navigator.userAgent,
        n = e.toLowerCase(),
        t = n + SEP + navigator.appVersion + SEP + navigator.platform;
      return t;
    }),
    (this.deviceprint_software = function() {
      var e = '',
        t = !0;
      if (navigator.plugins.length > 0) {
        var r = '',
          a = '',
          o = '',
          p = 'Plugins';
        for (i = 0; i < navigator.plugins.length; i++)
          (plugin = navigator.plugins[i]),
            (a = stripFullPath(plugin.filename, p, '.')),
            1 == t
              ? ((o = n.containsKey(a)),
                o ? ((r += n.get(a)), (t = !1)) : ((r = ''), (t = !1)))
              : ((o = n.containsKey(a)), (r += o ? SEP + n.get(a) : ''));
        e = stripIllegalChars(r);
      } else if (navigator.mimeTypes.length > 0)
        for (o = '', i = 0; i < navigator.mimeTypes.length; i++)
          (mimeType = navigator.mimeTypes[i]),
            1 == t
              ? ((o = n.containsKey(mimeType)),
                o
                  ? ((e += n.get(mimeType) + PAIR + mimeType), (t = !1))
                  : ((e += 'unknown' + PAIR + mimeType), (t = !1)))
              : ((o = n.containsKey(mimeType)),
                o ? (e += SEP + n.get(mimeType) + PAIR + mimeType) : (r += ''));
      return e;
    }),
    (this.deviceprint_display = function() {
      var e = '';
      return (
        self.screen &&
          (e +=
            screen.colorDepth +
            SEP +
            screen.width +
            SEP +
            screen.height +
            SEP +
            screen.availHeight),
        e
      );
    }),
    (this.deviceprint_all_software = function() {
      var e = '',
        n = !0;
      if (navigator.plugins.length > 0) {
        var t = '',
          r = '';
        for (i = 0; i < navigator.plugins.length; i++) {
          var a = navigator.plugins[i];
          (r = a.filename),
            (r = stripFullPath(r, 'Plugins', '.')),
            1 == n ? ((t += r), (n = !1)) : (t += SEP + r);
        }
        e = stripIllegalChars(t);
      }
      return e;
    }),
    (this.deviceprint_timezone = function() {
      var e = (new Date().getTimezoneOffset() / 60) * -1;
      return e;
    }),
    (this.deviceprint_language = function() {
      var e;
      return (
        (e =
          'undefined' != typeof navigator.language
            ? 'lang' + PAIR + navigator.language + SEP
            : 'undefined' != typeof navigator.browserLanguage
            ? 'lang' + PAIR + navigator.browserLanguage + SEP
            : 'lang' + PAIR + SEP),
        (e +=
          'undefined' != typeof navigator.systemLanguage
            ? 'syslang' + PAIR + navigator.systemLanguage + SEP
            : 'syslang' + PAIR + SEP),
        (e +=
          'undefined' != typeof navigator.userLanguage
            ? 'userlang' + PAIR + navigator.userLanguage
            : 'userlang' + PAIR)
      );
    }),
    (this.deviceprint_java = function() {
      var e = navigator.javaEnabled() ? 1 : 0;
      return e;
    }),
    (this.deviceprint_cookie = function() {
      var e = navigator.cookieEnabled ? 1 : 0;
      return (
        'undefined' != typeof navigator.cookieEnabled ||
          e ||
          ((document.cookie = 'testcookie'),
          (e = -1 !== document.cookie.indexOf('testcookie') ? 1 : 0)),
        e
      );
    }),
    (this.deviceprint_appName = function() {
      return 'undefined' != typeof navigator.appName ? navigator.appName : '';
    }),
    (this.deviceprint_appCodeName = function() {
      return 'undefined' != typeof navigator.appCodeName
        ? navigator.appCodeName
        : '';
    }),
    (this.deviceprint_online = function() {
      return 'undefined' != typeof navigator.onLine ? navigator.onLine : '';
    }),
    (this.deviceprint_opsProfile = function() {
      return 'undefined' != typeof navigator.opsProfile &&
        null != navigator.opsProfile
        ? navigator.opsProfile
        : '';
    }),
    (this.deviceprint_userProfile = function() {
      return 'undefined' != typeof navigator.userProfile &&
        null != navigator.userProfile
        ? navigator.userProfile
        : '';
    }),
    (this.deviceprint_screen_availWidth = function() {
      return 'undefined' != typeof screen.availWidth ? screen.availWidth : '';
    }),
    (this.deviceprint_screen_pixelDepth = function() {
      return 'undefined' != typeof screen.pixelDepth ? screen.pixelDepth : '';
    }),
    (this.deviceprint_screen_bufferDepth = function() {
      return 'undefined' != typeof screen.bufferDepth ? screen.bufferDepth : '';
    }),
    (this.deviceprint_screen_deviceXDPI = function() {
      return 'undefined' != typeof screen.deviceXDPI ? screen.deviceXDPI : '';
    }),
    (this.deviceprint_screen_deviceYDPI = function() {
      return 'undefined' != typeof screen.deviceYDPI ? screen.deviceYDPI : '';
    }),
    (this.deviceprint_screen_logicalXDPI = function() {
      return 'undefined' != typeof screen.logicalXDPI ? screen.logicalXDPI : '';
    }),
    (this.deviceprint_screen_logicalYDPI = function() {
      return 'undefined' != typeof screen.logicalYDPI ? screen.logicalYDPI : '';
    }),
    (this.deviceprint_screen_fontSmoothingEnabled = function() {
      return 'undefined' != typeof screen.fontSmoothingEnabled
        ? screen.fontSmoothingEnabled
        : '';
    }),
    (this.deviceprint_screen_updateInterval = function() {
      return 'undefined' != typeof screen.updateInterval
        ? screen.updateInterval
        : '';
    }),
    (this.deviceprint_timezone = function() {
      var e = (new Date().getTimezoneOffset() / 60) * -1;
      return e;
    });
}
function urlEncode(e) {
  var n = escape(e)
    .replace(/\*/g, '%2A')
    .replace(/\+/g, '%2B')
    .replace(/-/g, '%2D')
    .replace(/\./g, '%2E')
    .replace(/\//g, '%2F')
    .replace(/_/g, '%5F')
    .replace(/@/g, '%40');
  return n;
}
function encode_deviceprint() {
  var e = add_deviceprint();
  return urlEncode(e);
}
function decode_deviceprint() {
  return unescape(encode_deviceprint());
}
function post_deviceprint() {
  return (document.forms[0].pm_fp.value = encode_deviceprint()), !0;
}
function post_fingerprints(e) {
  e.deviceprint.value = encode_deviceprint();
}
function add_deviceprint() {
  BrowserDetect.init();
  var e;
  switch (BrowserDetect.browser) {
    case 'Explorer':
      e = new IE_FingerPrint();
      break;
    case 'Firefox':
      e = new Mozilla_FingerPrint();
      break;
    case 'Opera':
      e = new Opera_FingerPrint();
      break;
    default:
      e = new FingerPrint();
  }
  var n =
    'version=' +
    e.deviceprint_version() +
    '&pm_fpua=' +
    e.deviceprint_browser() +
    '&pm_fpsc=' +
    e.deviceprint_display() +
    '&pm_fpsw=' +
    e.deviceprint_software() +
    '&pm_fptz=' +
    e.deviceprint_timezone() +
    '&pm_fpln=' +
    e.deviceprint_language() +
    '&pm_fpjv=' +
    e.deviceprint_java() +
    '&pm_fpco=' +
    e.deviceprint_cookie();
  return (
    (n = n + '&pm_fpasw=' + e.deviceprint_all_software()),
    (n =
      n +
      '&pm_fpan=' +
      e.deviceprint_appName() +
      '&pm_fpacn=' +
      e.deviceprint_appCodeName() +
      '&pm_fpol=' +
      e.deviceprint_online() +
      '&pm_fposp=' +
      e.deviceprint_opsProfile() +
      '&pm_fpup=' +
      e.deviceprint_userProfile() +
      '&pm_fpsaw=' +
      e.deviceprint_screen_availWidth() +
      '&pm_fpspd=' +
      e.deviceprint_screen_pixelDepth() +
      '&pm_fpsbd=' +
      e.deviceprint_screen_bufferDepth() +
      '&pm_fpsdx=' +
      e.deviceprint_screen_deviceXDPI() +
      '&pm_fpsdy=' +
      e.deviceprint_screen_deviceYDPI() +
      '&pm_fpslx=' +
      e.deviceprint_screen_logicalXDPI() +
      '&pm_fpsly=' +
      e.deviceprint_screen_logicalYDPI() +
      '&pm_fpsfse=' +
      e.deviceprint_screen_fontSmoothingEnabled() +
      '&pm_fpsui=' +
      e.deviceprint_screen_updateInterval())
  );
}
function form_add_data(e, n, t) {
  return (
    e && e.length > 0 ? (e += '&') : (e = ''),
    (e += n + '=' + escape(t.toString()))
  );
}
function form_add_deviceprint(e, n, t) {
  return (e = form_add_data(e, n + 'd', t));
}
function asyncpost_deviceprint(e) {
  var n = !1;
  if (
    (n || 'undefined' == typeof XMLHttpRequest || (n = new XMLHttpRequest()),
    !n)
  )
    return !1;
  n.open('POST', e, !0),
    n.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'),
    BrowserDetect.init();
  var t;
  switch (BrowserDetect.browser) {
    case 'Explorer':
      t = new IE_FingerPrint();
      break;
    case 'Firefox':
      t = new Mozilla_FingerPrint();
      break;
    case 'Opera':
      t = new Opera_FingerPrint();
      break;
    default:
      t = new FingerPrint();
  }
  var i;
  return (
    (i = form_add_deviceprint(i, 'fp_browser', t.deviceprint_browser())),
    (i = form_add_deviceprint(i, 'fp_display', t.deviceprint_display())),
    (i = form_add_deviceprint(i, 'fp_software', t.deviceprint_software())),
    (i = form_add_deviceprint(i, 'fp_timezone', t.deviceprint_timezone())),
    (i = form_add_deviceprint(i, 'fp_language', t.deviceprint_language())),
    (i = form_add_deviceprint(i, 'fp_java', t.deviceprint_java())),
    (i = form_add_deviceprint(i, 'fp_cookie', t.deviceprint_cookie())),
    n.send(i),
    !0
  );
}
var BrowserDetect = {
  init: function() {
    (this.browser =
      this.searchString(this.dataBrowser) || 'An unknown browser'),
      (this.version =
        this.searchVersion(navigator.userAgent) ||
        this.searchVersion(navigator.appVersion) ||
        'an unknown version'),
      (this.OS = this.searchString(this.dataOS) || 'an unknown OS');
  },
  searchString: function(e) {
    for (var n = 0; n < e.length; n++) {
      var t = e[n].string,
        i = e[n].prop;
      if (
        ((this.versionSearchString = e[n].versionSearch || e[n].identity), t)
      ) {
        if (-1 != t.indexOf(e[n].subString)) return e[n].identity;
      } else if (i) return e[n].identity;
    }
  },
  searchVersion: function(e) {
    var n = e.indexOf(this.versionSearchString);
    if (-1 != n)
      return parseFloat(e.substring(n + this.versionSearchString.length + 1));
  },
  dataBrowser: [
    { string: navigator.userAgent, subString: 'Chrome', identity: 'Chrome' },
    {
      string: navigator.userAgent,
      subString: 'OmniWeb',
      versionSearch: 'OmniWeb/',
      identity: 'OmniWeb'
    },
    {
      string: navigator.vendor,
      subString: 'Apple',
      identity: 'Safari',
      versionSearch: 'Version'
    },
    { prop: window.opera, identity: 'Opera' },
    { string: navigator.vendor, subString: 'iCab', identity: 'iCab' },
    { string: navigator.vendor, subString: 'KDE', identity: 'Konqueror' },
    { string: navigator.userAgent, subString: 'Firefox', identity: 'Firefox' },
    { string: navigator.vendor, subString: 'Camino', identity: 'Camino' },
    {
      string: navigator.userAgent,
      subString: 'Netscape',
      identity: 'Netscape'
    },
    {
      string: navigator.userAgent,
      subString: 'MSIE',
      identity: 'Explorer',
      versionSearch: 'MSIE'
    },
    {
      string: navigator.userAgent,
      subString: 'Gecko',
      identity: 'Mozilla',
      versionSearch: 'rv'
    },
    {
      string: navigator.userAgent,
      subString: 'Mozilla',
      identity: 'Netscape',
      versionSearch: 'Mozilla'
    }
  ],
  dataOS: [
    { string: navigator.platform, subString: 'Win', identity: 'Windows' },
    { string: navigator.platform, subString: 'Mac', identity: 'Mac' },
    {
      string: navigator.userAgent,
      subString: 'iPhone',
      identity: 'iPhone/iPod'
    },
    { string: navigator.platform, subString: 'Linux', identity: 'Linux' }
  ]
};
(IE_FingerPrint.prototype = new FingerPrint()),
  (Mozilla_FingerPrint.prototype = new FingerPrint()),
  (Opera_FingerPrint.prototype = new FingerPrint());
var SEP = '|',
  PAIR = '=',
  DEV = '~';
