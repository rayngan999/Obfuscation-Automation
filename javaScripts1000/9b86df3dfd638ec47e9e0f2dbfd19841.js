(function(d,w,_RB) {

  var d = d
    , w = w
    , RB = _RB;

  w.RB = _RB;

  RB.logs = RB.logs || [];

  RB.initErrorHandler = function(err) {
    var a = d.createElement("script");
    a.type="text/javascript";
    a.async=!0;
    f=d.getElementsByTagName("script")[0];
    f.parentNode.insertBefore(a,f);
    a.onload = function() {
      RB.bugsnagClient = bugsnag({
        apiKey: 'ea41baf0449e82ae968680854e7690eb',
        autoNotify: false
      });
      if (err) RB.bugsnagClient.notify(err);
    }
    a.src="//d2wy8f7a9ursnm.cloudfront.net/v6/bugsnag.min.js";
  }

  var wrapError = function(fn) {
    return function() {
      try {
        return fn.apply(null, arguments)
      } catch(e) {
        RB.bugsnagClient ? RB.bugsnagClient.notify(e) : RB.initErrorHandler(e);
      }
    }
  }

  var wrapErrorObj = function(obj) {
    Object.keys(obj).map(function(key) {
      if (typeof(obj[key]) === 'function') {
        obj[key] = wrapError(obj[key]);
      }
    })
  }


  Array.prototype.map = Array.prototype.map || function(fn){
    var y = []; var length = this.length; for (var i = 0; i < length; i++) { y.push(fn(this[i],i)); }
    return y
  }

  Object.keys = Object.keys || function(obj) {
    var theKeys = []; for (var name in obj) { theKeys.push(name); }
    return theKeys
  }

  var base64 = {};
  base64.PADCHAR = '=';
  base64.ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  base64.makeDOMException = function() { return "base64.decode issue" }

  base64.decode = function(s) {
    var s = '' + s;
    var getbyte64 = function(s,i) {
      var idx = base64.ALPHA.indexOf(s.charAt(i));
      if (idx === -1) {
          throw base64.makeDOMException();
      }
      return idx;
    };
    var pads, i, b10;

    if (s.length % 4 !== 0) {
      s = s + Array((4 - (s.length % 4)) + 1).join("=")
    }

    var imax = s.length
    if (imax === 0) {
      return s;
    }

    if (imax % 4 !== 0) {
      throw base64.makeDOMException();
    }

    pads = 0
    if (s.charAt(imax - 1) === base64.PADCHAR) {
      pads = 1;
      if (s.charAt(imax - 2) === base64.PADCHAR) {
          pads = 2;
      }
      // either way, we want to ignore this last block
      imax -= 4;
    }

    var x = [];
    for (i = 0; i < imax; i += 4) {
      b10 = (getbyte64(s,i) << 18) | (getbyte64(s,i+1) << 12) |
          (getbyte64(s,i+2) << 6) | getbyte64(s,i+3);
      x.push(String.fromCharCode(b10 >> 16, (b10 >> 8) & 0xff, b10 & 0xff));
    }

    switch (pads) {
    case 1:
        b10 = (getbyte64(s,i) << 18) | (getbyte64(s,i+1) << 12) | (getbyte64(s,i+2) << 6);
        x.push(String.fromCharCode(b10 >> 16, (b10 >> 8) & 0xff));
        break;
    case 2:
        b10 = (getbyte64(s,i) << 18) | (getbyte64(s,i+1) << 12);
        x.push(String.fromCharCode(b10 >> 16));
        break;
    }
    return x.join('');
  }

  var atob = atob || base64.decode;

  var getRootDomain = function(url) {
    var DOMAIN_TEST_COOKIE_KEY = "__rbtld__";

    // extract host domain from url
    var matches = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
    var host = matches && matches[1];
    if (!host) return "";

    // split domain into parts
    var parts = host.split(".");
    var last = parts[parts.length - 1];
    var levels = [];

    // ignore IP Addresses and localhost
    if (parts.length === 4 && last === parseInt(last, 10)) return "";
    if (parts.length <= 1) return "";

    // create levels
    for (var i = parts.length - 2; i >= 0; --i) {
      levels.push(parts.slice(i).join('.'));
    }

    // iterate through potential domains (broadest first)
    for (var i = 0; i < levels.length; ++i) {
      // build test cookie & try writing it to browser
      var domain = "." + levels[i];
      var domainStr = "domain=" + domain;
      var testCookieStr = DOMAIN_TEST_COOKIE_KEY + "=1;" + domainStr;
      document.cookie = testCookieStr;
      // check to see if cookie was written
      var index = document.cookie.indexOf(DOMAIN_TEST_COOKIE_KEY);
      // if cookie was written, remove test cookie & return that domain
      if (index !== -1) {
        var removeCookieStr = DOMAIN_TEST_COOKIE_KEY + "=;Max-Age=-1;" + domainStr;
        document.cookie = removeCookieStr;
        return domain;
      }
    }

    return "";
  }

  var T = {
      getWithDefault: function(obj, key, _default) {
        try {
          return obj[key] || _default
        } catch(e) {
          return _default
        }
      }
    , stringifyNestedObject: function(obj) {
        var p = {};
        Object.keys(JSON.parse(JSON.stringify(obj))).map(function(k) {
          var val = obj[k];
          if (val !== "") p[k] = typeof(val) == "object" ? JSON.stringify(val) : val;
          return p;
        })
        return p;
      }
    , assignToObj: function(obj, input) {
        Object.keys(input).map(function(key) {
          obj[key] = input[key]
        })
      }
    , getById: function(lst, id) {
        if (!lst.hasOwnProperty("length")) return false;
        for (var i=0; i < lst.length; i++) {
          if (lst[i].id == id) return lst[i]
        }
        return false
      }
    , deepCopy: function(obj) {
        return JSON.parse(JSON.stringify(obj))
      }
    , assignChildsToParent: function(obj, key, parent) {
        if (!!obj && typeof obj == "object" && Object.keys(obj).length > 0) {
          Object.keys(obj).map(function(k) {
            T.assignChildsToParent(obj[k], k, parent);
          })
          return
        }
        parent[key] = obj;
    }
    , flattenDeep: function(obj) {
        Object.keys(obj).map(function(k) {
          T.assignChildsToParent(obj[k], k, obj);
          if (typeof obj[k] == "object") delete obj[k];
        })
        return obj
      }
  }


  var init = function() {
    var sources = atob(RB.source).split("|")
      , source = sources[0]
      , baseUrl = "https://getrockerbox.com/v2/rb?"
      , extend = function(base,ext) {
          Object.keys(ext).map(function(k){ base[k] = ext[k] })
        }
      , HTTPBuildQuery = function(values, arg_separator) {
          var key, use_val, use_key
            , tmp_arr = []
            , arg_separator = arg_separator || "&";

          Object.keys(JSON.parse(JSON.stringify(values))).map(function(key) {
            var val = values[key];
            if (val !== undefined && val !== null && val !== "" && val !== "null") {
              use_val = encodeURIComponent(val.toString());
              use_key = encodeURIComponent(key);
              tmp_arr[tmp_arr.length] = use_key + '=' + use_val;
            }
          });

          return tmp_arr.join(arg_separator);
        }
      , fire = function(href) {
          var ping = new Image();
          ping.src = href;
        }

      function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }

      RB.getSession = function() {
        try {
          if (!w.sessionStorage) return {};
          var sessionId = sessionStorage.getItem("RB.sessionId");
          if (!sessionId) {
            sessionId = uuidv4();
            sessionStorage.setItem("RB.sessionId", sessionId);
          }
          return {"sessionId": sessionId}
        } catch(e) {
          return {}
        }
      }
      var VERSION = {"script_version":"wxyz.v2.js"}
        , COOKIE_KEY = "rbuid"
        , UID_OVERRIDE_PARAM = "_rbuid"
        , setUID = {
            local: function(uid) {
              try {
                if (!!w.localStorage) localStorage.setItem("RB.uid", uid);
              } catch(e) { console.log("could not access localStorage")}
            }
          , session: function(uid) {
              try {
                if (!!w.sessionStorage) sessionStorage.setItem("RB.uid", uid);
              } catch(e) { console.log("could not access sessionStorage")}
            }
          , cookie: function(uid) {
              var cookieStr = COOKIE_KEY + "=" + uid + ";"
              var d = new Date();
              d.setTime(d.getTime() + (30*24*60*60*1000));
              var expires = "expires="+ d.toUTCString();
              var domain = getRootDomain(window.location.href);
              var domainStr = "";
              if (domain.length > 1) domainStr = ";domain=" +  domain;
              document.cookie = cookieStr + expires + ";path=/" + domainStr;
            }
          , all: function(uid) {
              if (uid) {
                setUID.local(uid);
                setUID.session(uid);
                setUID.cookie(uid);
              }
              return uid;
            }
        }
        , getUID = {
            local: function() {
              try {
                if (!w.localStorage) return false;
                var uid = localStorage.getItem("RB.uid");
                if (uid) return uid;
              } catch(e) { console.log("could not access localStorage")}
              return false
            }
          , session: function() {
              try {
                if (!w.sessionStorage) return false;
                var uid = sessionStorage.getItem("RB.uid");
                if (uid) return uid;
              } catch(e) { console.log("could not access sessionStorage")}
              return false
            }
          , cookie: function() {
              var index = document.cookie.indexOf(COOKIE_KEY);
              if (index == -1) return false;
              return document.cookie.slice(index + COOKIE_KEY.length + 1).split(";")[0]
            }
          , jsonP: function() {
              // This <script> id attribute is needed to prevent multiple jsonP
              // requests
              var scriptId = '_rockerbox_jsonP_script';
              if (document.getElementById(scriptId) !== null) return;
              var jsonP = document.createElement('script');
              jsonP.src = "https://getrockerbox.com/jpuid?jsonp=RB.jsonPUID";
              jsonP.id = scriptId;
              var firstScript = document.getElementsByTagName('script')[0];
              var target = firstScript && firstScript.parentNode || document.head;
              target.appendChild(jsonP);
            }
          , urlParam: function() {
              var index = document.location.search.indexOf(UID_OVERRIDE_PARAM);
              if (index == -1) return false;
              return document.location.search.slice(index + UID_OVERRIDE_PARAM.length + 1).split("&")[0]
            }
          , addCallback: function(cb) {
              RB.cbQueue.push(cb)
            }
          , runCallbacks: function() {
              var uid = setUID.all(getUID.urlParam() || getUID.local() || getUID.cookie() || getUID.session());
              if (!uid) return false;
              RB.cbQueue.map(function(cb) { return cb({"uid": uid}) });
              RB.cbQueue = [];
              return true;
            }
          , all: function(cb) {
              if (cb) getUID.addCallback(cb);
              if (getUID.runCallbacks()) return;
              getUID.jsonP();
            }
          , allExclude: function(cb) {
              getUID.all(function(uid) {
                uid.exclude_uid = uid.uid;
                cb(uid);
              })
            }
        };

      RB.cbQueue = RB.cbQueue || [];
      RB.jsonPUID = function(msg) {
        setUID.all(msg.rbuid)
        getUID.all()
      }

      RB.jsonPIntegrations = function(msg) {
        Integrations.setEnabled(msg.integrations)
        Integrations.runEnabled()
      }

      var Integrations = {
          integrations: {
              "Invoca": {
                  key: "invoca_id"
                , autoDetect: true
                , checks: [["Invoca", "_Cache"], ["Invoca", "PNAPI", "currentPageSettings"]]
                , wait: 500
                , max_tries: 5
                , getId: function() {
                    var session = w.Invoca._Cache.get().session;
                    if (session) return { "invoca_id" : session.invoca_id };
                    return false
                  }
                , fn: function() {
                    if (!w.Invoca.PNAPI) return;

                    if (w.Invoca._Cache.ready) {
                      var obj = Integrations.integrations.Invoca.getId();
                      if (obj && obj.invoca_id) return Integrations.set(obj, true);
                    }
                    var cb = w.Invoca.PNAPI.currentPageSettings.onComplete
                    w.Invoca.PNAPI.currentPageSettings.onComplete = (function(cb) {
                      return function(msg) {
                        var obj = Integrations.integrations.Invoca.getId();
                        if (obj) Integrations.set(obj, true);
                        if (cb) cb(msg);
                      }
                    })(cb);
                  }
              }
            , "branch": {
                  key: "branch_id"
                , autoDetect: true
                , storeKey: "rb_branch_identify"
                , checks: [["branch", "c", "get"]]
                , wait: 500
                , max_tries: 5
                , getId: function() {
                    var branchObj = JSON.parse(branch.c.get("branch_session_first") || branch.c.get("branch_session") || "{}")
                      , branch_id = branchObj['identity_id']
                      , branch_browser_id = branchObj['browser_fingerprint_id'];
                    if (branch_id) {
                      Integrations.integrations.branch.external(branch_id);
                      return { "branch_id": branch_id, "branch_browser_id": branch_browser_id }
                    }
                    return false
                  }
                , fn: function() {
                    if (!w.branch.c || !w.branch.c.get) return;
                    if (!!w.branch.c) {
                      var obj = Integrations.integrations.branch.getId()
                      if (obj && obj.branch_id) return Integrations.set(obj, true);
                    }

                    branch.addListener(function(event) {
                      if (Integrations.ids['branch_id']) return;
                      var obj = Integrations.integrations.branch.getId();
                      if (obj && obj.branch_id) return Integrations.set(obj, true);
                    });
                  }
                , external: function(branch_id) {
                    getUID.all(function(obj){
                      var uid = obj['uid'];
                      var hash = btoa(branch_id+":"+uid);
                      if (Integrations.integrations.branch.checkStore(hash)) return;
                      branch.logEvent("RB_IDENTIFY", { rbuid: uid, branch_id: branch_id });
                      Integrations.integrations.branch.setStore(hash);
                    });
                  }
                , checkStore: function(hash) {
                    return w.localStorage && (hash === localStorage.getItem(Integrations.integrations.branch.storeKey));
                  }
                , setStore: function(hash) {
                    if (!w.localStorage) return;
                    localStorage.setItem(Integrations.integrations.branch.storeKey, hash);
                  }
              }
            , "tatari": {
                  key: "tatari_session_id"
                , autoDetect: true
                , checks: [["tatari", "sessionId"]]
                , wait: 500
                , max_tries: 5
                , getId: function() {
                    var session_id = w.tatari.sessionId;
                    var user_id = w.tatari.userId;
                    var obj = { "tatari_session_id" : session_id };
                    if (user_id) obj["tatari_user_id"] = user_id;
                    if (session_id) return obj;
                    return false
                  }
                , fn: function() {
                    if (!w.tatari) return;
                    var obj = Integrations.integrations.tatari.getId()
                    if (obj && obj.tatari_session_id) return Integrations.set(obj, true);
                  }
              }
            , "_sva": {
                  key: "survicate_visitor_id"
                , autoDetect: true
                , checks: [["_sva", "getVisitorId"], ["_sva", "setVisitorTraits"], ["_sva", "addEventListener"]]
                , wait: 500
                , max_tries: 5
                , getId: function() {
                    var survicate_visitor_id = w._sva.getVisitorId();
                    var obj = { "survicate_visitor_id" : survicate_visitor_id };
                    if (survicate_visitor_id) return obj;
                    return false
                  }
                , fn: function() {
                    if (!w._sva) return;
                    Integrations.integrations._sva.external();
                    Listeners.add("survicate");
                    var obj = Integrations.integrations._sva.getId();
                    if (obj && obj.survicate_visitor_id) return Integrations.set(obj, true);
                  }
                , external: function() {
                    getUID.all(function(obj){
                      var uid = obj["uid"];
                      if (w._sva && w._sva.setVisitorTraits) w._sva.setVisitorTraits({rockerbox_uid: uid});
                    });
                  }
                , fallback: function() {
                    w.addEventListener("SurvicateReady", function() {
                      Integrations.runOnce(Integrations.integrations._sva)
                    })
                  }
              }
            , "Privy": {
                  key: "privy_uuid"
                , autoDetect: true
                , checks: [["Privy", "user", "uuid"], ["Privy", "_appendConversionJs", "length"]]
                , wait: 500
                , max_tries: 5
                , getId: function() {
                    var privy_uuid = w.Privy.user.uuid;
                    var obj = { "privy_uuid" : privy_uuid };
                    if (privy_uuid) return obj;
                    return false
                  }
                , fn: function() {
                    if (!w.Privy) return;
                    Integrations.integrations.Privy.external();
                    var obj = Integrations.integrations.Privy.getId();
                    if (obj && obj.privy_uuid) return Integrations.set(obj, true);
                  }
                , external: function() {
                    var pfn = Privy._appendConversionJs;
                    if (pfn.length == 3) {
                      Privy._appendConversionJs = function(e, t, n){
                        try {
                          var obj = T.deepCopy(n);
                          obj = T.flattenDeep(obj);
                          if (obj.hasOwnProperty("id")) delete obj["id"];
                          RB.track("privy.form_submit", obj);
                        } catch (err) {
                          console.error(err);
                        }
                        pfn(e, t, n);
                      }
                    }
                  }
              }
            , "juapp": {
                  key: "justuno_session_id"
                , autoDetect: true
                , checks: [["juapp"]]
                , wait: 500
                , max_tries: 5
                , getId: function() {
                    var justuno_session_id = w.localStorage && w.localStorage.getItem("_ju_dc");
                    var obj = { "justuno_session_id" : justuno_session_id };
                    if (justuno_session_id) return obj;
                    return false
                  }
                , fn: function() {
                    if (!w.juapp) return;
                    Integrations.integrations.juapp.external();
                    Listeners.add("justuno");
                    var obj = Integrations.integrations.juapp.getId();
                    if (obj && obj.justuno_session_id) return Integrations.set(obj, true);
                  }
                , external: function() {
                    getUID.all(function(obj){
                      var uid = obj["uid"];
                      if (w.juapp) w.juapp("arb", "rockerbox_uid", uid);
                    });
                  }
                , fallback: function() {
                    var ju_init_existing = w.ju_init;
                    w.ju_init = function(){
                      Integrations.runOnce(Integrations.integrations.juapp);
                      if (!!ju_init_existing) ju_init_existing();
                    }
                  }
              }
            , "pintrk": {
                  key: "pinterest_view_id"
                , autoDetect: false
                , storeKey: "rb_pinterest_identify"
                , checks: [["pintrk", "partnerData", "pin_unauth"]]
                , wait: 500
                , max_tries: 5
                , getId: function() {
                    Integrations.integrations.pintrk.external();
                    var pinterest_id_encoded = pintrk.partnerData.pin_unauth;
                    if (pinterest_id_encoded) {
                      var m = atob(pinterest_id_encoded).match(/uid=([^&#\s]+)/i);
                      if (!m || m.length < 2) return false;
                      var pinterest_view_id = atob(m[1]);
                      return { "pinterest_view_id": pinterest_view_id }
                    }
                    return false
                  }
                , fn: function() {
                    if (!w.pintrk || !w.pintrk.partnerData) return;
                    var obj = Integrations.integrations.pintrk.getId()
                    if (obj && obj.pinterest_view_id) return Integrations.set(obj, true);
                  }
                , external: function() {
                    getUID.all(function(obj){
                      var uid = obj["uid"];
                      var hash = btoa(uid);
                      pintrk("track", "ExternalMeasurement", {
                        external_measurement_id: uid,
                        external_measurement_vendor_id: 1
                      });
                      if (Integrations.integrations.pintrk.checkStore(hash)) return;
                      pintrk("track", "custom", {
                        order_id: uid
                      });
                      Integrations.integrations.pintrk.setStore(hash);
                    });
                  }
                , checkStore: function(hash) {
                    return w.localStorage && (hash === localStorage.getItem(Integrations.integrations.pintrk.storeKey));
                  }
                , setStore: function(hash) {
                    if (!w.localStorage) return;
                    localStorage.setItem(Integrations.integrations.pintrk.storeKey, hash);
                  }
              }
            , "amplitude": {
                  key: "amplitude_device_id"
                , autoDetect: true
                , checks: [["amplitude", "_instances", "$default_instance", "options", "deviceId"]]
                , wait: 500
                , max_tries: 5
                , getId: function() {
                    var amplitude_instance = w.amplitude.getInstance();
                    if (!amplitude_instance || !amplitude_instance.options) return false;
                    var amplitude_device_id = amplitude_instance.options.deviceId;
                    var obj = { "amplitude_device_id" : amplitude_device_id };
                    if (amplitude_device_id) return obj;
                    return false
                  }
                , fn: function() {
                    if (!w.amplitude) return;
                    var obj = Integrations.integrations.amplitude.getId();
                    if (obj && obj.amplitude_device_id) return Integrations.set(obj, true);
                  }
              }
            , "_st": {
                  key: "dialogtech_session_id"
                , autoDetect: true
                , storeKey: "rb_dialogtech_identify"
                , checks: [["_st", "isReady"], ["_st", "getInfo"], ["_st", "pushData"]]
                , wait: 500
                , max_tries: 5
                , getId: function() {
                    var dialogtech_session_id = (w._st.getInfo() || {})['pid'];
                    if (dialogtech_session_id) {
                      Integrations.integrations._st.external(dialogtech_session_id);
                      return { "dialogtech_session_id": dialogtech_session_id }
                    }
                    return false
                  }
                , fn: function() {
                    if (!w._st || !w._st.isReady() || !w._st.getInfo()) return;
                    var obj = Integrations.integrations._st.getId();
                    if (obj && obj.dialogtech_session_id) return Integrations.set(obj, true);
                  }
                , external: function(dialogtech_session_id) {
                    getUID.all(function(obj){
                      var uid = obj["uid"];
                      var hash = btoa(dialogtech_session_id+":"+uid);
                      if (Integrations.integrations._st.checkStore(hash)) return;
                      w._st.pushData('rockerbox_uid', uid);
                      Integrations.integrations._st.setStore(hash);
                    });
                  }
                , checkStore: function(hash) {
                    return w.localStorage && (hash === localStorage.getItem(Integrations.integrations._st.storeKey));
                  }
                , setStore: function(hash) {
                    if (!w.localStorage) return;
                    localStorage.setItem(Integrations.integrations._st.storeKey, hash);
                  }
              }
            , "trackable": {
                  key: "chartable_user_id"
                , autoDetect: true
                , storeKey: "rb_chartable_identify"
                , checks: [["trackable", "uid"], ["trackable", "rb_identify"]]
                , wait: 500
                , max_tries: 5
                , getId: function() {
                    var chartable_user_id = w.trackable.uid;
                    if (chartable_user_id) {
                      Integrations.integrations.trackable.external(chartable_user_id);
                      return { "chartable_user_id": chartable_user_id }
                    }
                    return false
                  }
                , fn: function() {
                    if (!w.trackable) return;
                    var obj = Integrations.integrations.trackable.getId();
                    if (obj && obj.chartable_user_id) return Integrations.set(obj, true);
                  }
                , external: function(chartable_user_id) {
                    getUID.all(function(obj){
                      var uid = obj["uid"];
                      var hash = btoa(chartable_user_id+":"+uid);
                      if (Integrations.integrations.trackable.checkStore(hash)) return;
                      w.trackable('rb_identify', {userId: uid});
                      Integrations.integrations.trackable.setStore(hash);
                    });
                  }
                , checkStore: function(hash) {
                    return w.localStorage && (hash === localStorage.getItem(Integrations.integrations.trackable.storeKey));
                  }
                , setStore: function(hash) {
                    if (!w.localStorage) return;
                    localStorage.setItem(Integrations.integrations.trackable.storeKey, hash);
                  }
              }
            , "hj": {
                  key: "hotjar_user_id"
                , autoDetect: false
                , checks: [["hj", "globals", "get"], ["hj", "request", "savePollResponse"], ["hjSiteSettings", "polls"]]
                , wait: 500
                , max_tries: 5
                , getId: function() {
                    var hotjar_user_id = w.hj.globals.get("userId");
                    var obj = { "hotjar_user_id" : hotjar_user_id };
                    if (hotjar_user_id) return obj;
                    return false
                  }
                , fn: function() {
                    if (!w.hj) return;
                    Listeners.add("hotjar");
                    var obj = Integrations.integrations.hj.getId();
                    if (obj && obj.hotjar_user_id) return Integrations.set(obj, true);
                  }
              }
            , "fbq": {
                  key: "facebook_pixel_id"
                , autoDetect: false
                , checks: [["fbq", "loaded"], ["fbq", "getState"]]
                , wait: 500
                , max_tries: 5
                , getId: function() {
                    var fbState = w.fbq.getState() || {};
                    var fbPixels = fbState.pixels || [{}];
                    var fbPixel = !!fbPixels ? fbPixels[0] : {};
                    var fbPixelId = fbPixel.id;
                    var obj = { "facebook_pixel_id" : fbPixelId };
                    if (fbPixelId) return obj;
                    return false
                  }
                , fn: function() {
                    if (!w.fbq) return;
                    Integrations.integrations.fbq.external();
                    var obj = Integrations.integrations.fbq.getId();
                    if (obj && obj.facebook_pixel_id) return Integrations.set(obj, true);
                  }
                , external: function() {
                    var subPage = !!window.location.pathname && (window.location.pathname.length > 1);
                    var fbClick = !!window.location.search && (window.location.search.indexOf("fbclid") > -1);
                    var intraSiteClick = !!document.referrer && (document.referrer.indexOf(window.location.hostname) > -1);
                    if (subPage || fbClick || intraSiteClick) w.fbq("track", "ViewContent");
                  }
              }
          }
        , check: function(k) {
            if(!!w[k]) {
              if (Integrations.detected.indexOf(k) == -1) Integrations.detected.push(k);
              RB.logs.push(k);
              return !Integrations.ids[Integrations.integrations[k]['key']];
            }
            return false
          }
        , detected: []
        , detect: function() {
            var integrations = Integrations.integrations;
            Object.keys(integrations).map(function(key) {
              var i = integrations[key];
              if (i.autoDetect){
                Integrations.check(key) ? Integrations.runOnce(i) : Integrations.runFallback(i)
              }
            });
            Integrations.jsonP();
          }
        , runOnce: function(integration) {
            return C.once(integration.checks, integration.fn);
          }
        , runFallback: function(integration) {
            return !!integration.fallback && integration.fallback()
          }
        , supportedIds: ["segment_anonymous_id", "invoca_id", "branch_id", "branch_browser_id", "tatari_session_id", "tatari_user_id", "survicate_visitor_id", "privy_uuid", "justuno_session_id", "pinterest_view_id", "amplitude_device_id", "dialogtech_session_id", "chartable_user_id", "hotjar_user_id", "facebook_pixel_id"]
        , ids: {}
        , set: function(obj, identify) {
            Integrations.supportedIds.map(function(k) {
              if (obj[k]) Integrations.ids[k] = obj[k];
            });
            if (identify) RB.track("identify");
          }
        , enabled: []
        , runEnabled: function() {
            for (var i=0; i < Integrations.enabled.length; i++) {
              var k = Integrations.enabled[i];
              var integration = Integrations.integrations[k];
              if (!Integrations.ids[integration['key']]) Integrations.runWithChecks(integration);
            }
          }
        , runWithChecks: function(integration) {
            if (integration.checks) return C.start(integration.checks, integration.fn, integration.wait, integration.max_tries);
            return integration.fn();
          }
        , setEnabled: function(newIntegrations) {
            for (var i=0; i < newIntegrations.length; i++) {
              Integrations.addEnabled(newIntegrations[i])
            }
          }
        , addEnabled: function(k) {
            var availableIntegrations = Integrations.available();
            if (availableIntegrations.indexOf(k) === -1) return;
            if (Integrations.enabled.indexOf(k) !== -1) return;
            Integrations.enabled.push(k);
          }
        , available: function() {
            return Object.keys(Integrations.integrations)
          }
        , jsonP: function() {
            var scriptId = '_rockerbox_jsonP_integrations';
            if (document.getElementById(scriptId) !== null) return;
            var jsonP = document.createElement('script');
            jsonP.src = "https://getrockerbox.com/integrations?source="+source;
            jsonP.id = scriptId;
            var firstScript = document.getElementsByTagName('script')[0];
            var target = firstScript && firstScript.parentNode || document.head;
            target.appendChild(jsonP);
          }
      }

      var C = {
          start: function(checks, run, timeout, maxAttempts) {
            return C.checkAndRun(checks, run, timeout, 1, maxAttempts);
          }
        , once: function(checks, run) {
            return C.checkAndRun(checks, run, false, 1, 1);
          }
        , checkAndRun: function(checks, run, timeout, attempt, maxAttempts) {
            if (C.runChecks(checks)) return run();
            if (attempt > maxAttempts) return;
            if (timeout) {
              timeout = Math.min(timeout*2, 6000);
              w.setTimeout(function(){
                C.checkAndRun(checks, run, timeout, attempt+1, maxAttempts)
              }, timeout);
            }
          }
        , runChecks: function(checks) {
            for (var i=0; i < checks.length; i++) {
              var result = C.check(w, checks[i])
              if (!result) return false;
            }
            return true;
          }
        , check: function(prev, next) {
            if (!prev.hasOwnProperty(next[0])) return false;
            var remainingNext = next.slice(0).splice(1, next.length);
            if (remainingNext.length > 0) return C.check(prev[next[0]], remainingNext);
            return true;
          }
      }

      var Listeners = {
          integrations: {
              "klaviyo": {
                  event: "klaviyoForms"
                , addAutomatically: true
                , fn: function(e) {
                    if (e.detail.type == "submit") {
                      var obj = e.detail.metaData;
                      obj.formId = e.detail.formId;
                      obj.companyId = e.detail.companyId;
                      obj.email = e.detail.metaData.$email;
                      RB.track("klaviyo.form_submit", obj);
                    }
                  }
              }
            , "survicate": {
                  event: "question_answered"
                , addAutomatically: false
                , generateAdder: function(){ return w._sva && w._sva.addEventListener }
                , fn: function(survey_id, point_id, answer) {
                    var obj = Listeners.integrations.survicate.buildSurveyObj(survey_id, point_id, answer);
                    var action_name = "survicate.question_answered" + (!!obj.answer_type ? "."+obj.answer_type : "");
                    RB.track(action_name, obj);
                  }
                , buildSurveyObj: function(survey_id, point_id, answer) {
                    var obj = {
                      survey_id: survey_id,
                      question_id: point_id,
                      survicate_visitor_id: w._sva && w._sva.getVisitorId && w._sva.getVisitorId()
                    };
                    T.assignToObj(obj, answer);
                    var surveys = w._svd && w._svd.surveys;
                    if (!surveys) return obj;
                    var s = T.getById(surveys, survey_id) || {};
                    obj.survey_name = s.name;
                    var p = T.getById(s.points, point_id) || {};
                    obj.question_name = p.content;
                    var answer_id = answer.answer_id;
                    if (!answer_id) return obj;
                    var a = T.getById(p.answers, answer_id) || {};
                    T.assignToObj(obj, a);
                    return obj
                  }
              }
            , "attentive": {
                  event: "message"
                , addAutomatically: true
                , fn: function(e) {
                    if (e.data && e.data.hasOwnProperty("__attentive")) {
                      var obj = T.deepCopy(e.data.__attentive);
                      var action_name = "attentive";
                      if (obj.hasOwnProperty("action") && obj.action) {
                        action_name = action_name + "." + obj.action;
                        delete obj.action;
                      }
                      RB.track(action_name, obj);
                    }
                  }
              }
            , "justuno": {
                  event: "engagement"
                , addAutomatically: false
                , generateAdder: function(){
                    return function(e, fn){
                      var juapp = w.juapp || function(){(w.juapp.q=w.juapp.q||[]).push(arguments)};
                      juapp("trackFunc", e, fn);
                    }
                  }
                , fn: function(email, eventname, promotitle, cmid, options, form) {
                    var obj = Listeners.integrations.justuno.buildObj(email, eventname, promotitle, cmid, options, form);
                    RB.track("justuno.engagement", obj);
                  }
                , buildObj: function(email, eventname, promotitle, cmid, options, form) {
                    var obj = {
                      email: email,
                      event_name: eventname,
                      promo_title: promotitle,
                      promo_id: cmid,
                      justuno_session_id: w.localStorage && w.localStorage.getItem("_ju_dc")
                    };
                    if (!!form && form.hasOwnProperty("length")) {
                      for (var i=0; i<form.length; i++) {
                        var fieldName = form[i]["name"];
                        if (fieldName) obj[fieldName] = form[i]["value"];
                      }
                    }
                    return obj
                  }
              }
            , "hotjar": {
                  event: "poll_response"
                , addAutomatically: false
                , generateAdder: function() {
                    return function(evt, fn) {
                      if (!w.hj || !w.hj.request) return false;
                      var orig = w.hj.request.savePollResponse;
                      w.hj.request.savePollResponse = function(e) {
                        orig(e);
                        fn(evt, e);
                      }
                    }
                  }
                , fn: function(evt, e) {
                    var evtName = "hotjar."+evt;
                    var obj = Listeners.integrations.hotjar.buildObj(e);
                    RB.track(evtName, obj);
                  }
                , buildObj: function(e) {
                    var response_content = JSON.parse(e.response_content || "{}");
                    var answer = response_content.answers[response_content.answers.length-1];
                    var questionId = answer.questionUuid;
                    var hjQuestionsMap = Listeners.integrations.hotjar.buildQuestionMap();
                    var hjIdentifyId = w.hj.globals.get("identifyUserId");
                    var obj = {
                      question_id: hjQuestionsMap[questionId].id,
                      question: hjQuestionsMap[questionId].text,
                      answer: answer.answer,
                      comment: answer.comment,
                      hotjar_user_id: e.user_id,
                      hotjar_identify_id: hjIdentifyId,
                      hotjar_action: e.action,
                      first_seen: e.first_seen
                    }
                    return obj
                  }
                , buildQuestionMap: function() {
                    w.hjQuestionsMap = w.hjQuestionsMap || {};
                    w.hjSiteSettings.polls.map(function(p) {
                      p.content.questions.map(function(q) {
                        var key = q.uuid.split("-")[0]
                        w.hjQuestionsMap[key] = {
                          id: q.uuid,
                          text: q.text
                        }
                      })
                    })
                    return w.hjQuestionsMap;
                  }
              }
          }
        , added: []
        , add: function(key) {
            if (Listeners.added.indexOf(key) != -1) return;
            var integration = Listeners.integrations[key];
            var adder = integration.generateAdder ? integration.generateAdder() : w.addEventListener;
            adder(integration.event, integration.fn);
            Listeners.added.push(key);
          }
        , addAll: function() {
            var integrations = Listeners.integrations;
            Object.keys(integrations).map(function(key) {
              if (integrations[key].addAutomatically) {
                Listeners.add(key);
              }
            });
          }
      }

      Listeners.addAll()
      Integrations.detect()
      setTimeout(Integrations.detect,2000)


      var SPA = {
          previousLocation: document.referrer
        , currentLocation: document.location.href
        , updateSPA: function() {
            if (SPA.currentLocation != document.location.href) {
              SPA.previousLocation = SPA.currentLocation;
              SPA.currentLocation = document.location.href;
            }
          }
      }


      RB.track = function(action, values) {

        SPA.updateSPA();
        Integrations.detect();

        var values = values || {}
          , session = RB.getSession()
          , caller = T.getWithDefault(RB.track, "caller",{})
          , _args = T.getWithDefault(caller, "arguments", [])
          , args = T.getWithDefault(_args, 0, {})
          , callerObj = T.getWithDefault(args, "obj", {})
          , properties  = T.getWithDefault(callerObj, "properties", {})
          , traits = T.getWithDefault(callerObj, "traits", {})
          , v = {
              pageReferrer: SPA.previousLocation
            , url: SPA.currentLocation
            , action: action
            , source : source
            , rb_source : source
            , segment_anonymous_id: callerObj.anonymousId
            , segmentmessageId: callerObj.messageId
            , segmentUserId: callerObj.userId
          }
          , obj = {};

        if (action == "identify") extend(v,Integrations.ids);
        extend(v,VERSION);
        extend(v,session);
        extend(v,obj);
        extend(v,values);
        extend(v,properties);
        extend(v,traits);
        v = T.stringifyNestedObject(v);
        Integrations.set(v);

        var getUidFn = v.ignore_user_events ? getUID.allExclude : getUID.all;
        getUidFn(function(uid) {
          extend(v,uid);
          var valuesString = HTTPBuildQuery(v)
            , url = baseUrl + valuesString;

          fire(url);
        })

      }

    if (!RB.disablePushState) RB.track("view");
    RB.queue.map(function(args){ RB.track(args[0],args[1]) });
    RB.queue = [];
    RB.loaded = true;

    wrapErrorObj(getUID);
    wrapErrorObj(setUID);
    wrapErrorObj(T);
    wrapErrorObj(C);
    wrapErrorObj(Integrations);
    wrapErrorObj(Listeners);
  }

  wrapError(init)()

})(document,window,window.RB || {})
