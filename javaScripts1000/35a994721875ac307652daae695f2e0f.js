/* Collect Script - NONIO - Weborama Portugal */
var wamid = null;
var Wvar = [];
var typ = null;
var WAM_ACCOUNT = "7859";
var LABEL = null;
var WBO_VERSION = "1.5.0.2";

function getDomain() {
  let parts = document.location.hostname.split(".");
  return parts.length > 2 ? parts.slice(parts.length - 2).join(".") : document.location.host;
}
(function (window) {
  var attrsElement = document.querySelector("script[collect]");
  if (attrsElement.getAttribute("events")) {
    if (attrsElement.getAttribute("events").length > 0) {
      var eventsArray = attrsElement.getAttribute("events").split(":");
      for (var i = 0; i < eventsArray.length; i++) {
        document.addEventListener(eventsArray[i], function (e) {
          nonio.debug("event added - " + eventsArray[i], "gray");
        });
      }
    }
  }
  window.onerror = function (e) {
    console.log(e)
  }
  window.nonio = {
    debug: function (message, color) {
      if (localStorage.getItem("wbo_nonio_debug") === "true") {
        console.log("%c wbo-nonio %c " + message + " ", "background: #a10117; color: white;border-top-left-radius:10px;border-bottom-left-radius:10px;", 'background: ' + color + '; color: white;border-top-right-radius:10px;border-bottom-right-radius:10px;');
      }
    },
    gdpr: {},
    isPT: "maybe",
    profile: [],
    setStore: function (storageValue) {
      var expires = "";
      var days = 60;
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
      document.cookie = "wbo_sid=" + storageValue + expires + "; path=/ ; domain=" + getDomain() + "; SameSite=None; Secure";
      localStorage.setItem("wbo_sid", storageValue);
    },
    setCRMId: function (id) {
      window.localStorage.setItem("wbo_uid", id);
    },
    getCRMId: function () {
      return window.localStorage.getItem("wbo_uid");
    },
    getStore: function () {
      var value = "; " + document.cookie;
      var parts = value.split("; wbo_sid=");
      if (parts.length == 2) return parts.pop().split(";").shift();
    },
    createDebugWindow(callback) {
      if (window.location.search.indexOf("wbo=true") >= 0) {
        localStorage.setItem("wbo_nonio_debug", true);
      }
      if (localStorage.getItem("wbo_nonio_debug") === "true") {
        if (!document.querySelector("#wbo-nonio-debug")) {
          var div = document.createElement("div");
          div.id = "wbo-nonio-debug"
          div.setAttribute("style", "font-family:Arial;border:1px solid gray; border-radius:5px;position:fixed;z-index:99999999999999;height:auto;padding:10px;background-color:white;color:gray;font-size:11px;bottom:25px;right:25px;");
          var title = document.createElement("div");
          title.id = "wbo-nonio-debug-title"
          title.setAttribute("style", "line-height:20px !important; font-size:12px !important;");
          var wbotext = document.createElement("div");
          wbotext.setAttribute("style", "line-height:20px !important; font-size:12px !important;");
          wbotext.id = "wbo-nonio-debug-text"
          div.appendChild(title);
          div.querySelector("#wbo-nonio-debug-title").innerHTML = "<b style='color:#b1060c;font-weight:700'>Weborama Debug:</b><br/>";
          div.appendChild(wbotext);
          document.body.appendChild(div);
          if (callback) {
            callback()
          }
        }
      }
    },
    addDebugText(key, text) {
      if (localStorage.getItem("wbo_nonio_debug") === "true" && document.querySelector("#wbo-nonio-debug")) {
        var element = document.createElement("div");
        element.innerHTML = "<b style='color:black; font-weight:bold;'>" + key + "</b>" + text;
        document.querySelector("#wbo-nonio-debug").appendChild(element)
      }
    },
    getFlatProfile: function (custom_audience) {
      var a = [];
      var b = [];
      var c = []
      if (custom_audience) {
        b = a.concat(custom_audience);
      }
      if (nonio.profile.audiences) {
        c = b.concat(nonio.profile.audiences);
        return c;
      } else {
        return b;
      }
    },
    getProfile: function (idcrm, callback) {
      var xhttp = new XMLHttpRequest();
      xhttp.withCredentials = true;
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status >= 200) {
          try { nonio.profile = JSON.parse(xhttp.responseText); nonio.debug("profile", "greed") } catch (e) { nonio.debug("profile", "red") };
          if (callback) {
            callback(nonio.profile)
          }
        }
      };
      var url = "https://bsd.frontend.weborama.fr/bsd?token=f3QL5OaQckbl&wamid=7859&bounce=1"
      if (idcrm) {
        url = "https://bsd.frontend.weborama.fr/bsd?token=f3QL5OaQckbl&idcrm=" + idcrm + "&wamid=7859&bounce=1"
      }
      xhttp.open("GET", url, true);
      xhttp.send();
    },
    debugImpact: function (callback) {
      var url = "https://analytics.voxelscope.com/collect/hot"
      var i = new Image()
      i.src = url;
    },
    detectBlocker: function () {
      if (!document.getElementById("ad-blocker-detector")) {
        var box = document.createElement("div");
        box.setAttribute("id", "ad-blocker-detector");
        box.setAttribute("class", "ads ad adsbox ad-placement");
        box.setAttribute("style", "height:1px !important;width:1px !important;position:absolute !important,left:0px;top:0px;opacity:0 !important;");
        var checker = setInterval(function () {
          if (document.body) {
            clearInterval(checker);
            document.body.appendChild(box);
            return getComputedStyle(document.getElementById("ad-blocker-detector"))["display"] == "none" ? true : false;
          }
        }, 50)
      } else {
        return null;
      }
    },
    uuid: function (length) {
      var text = "";
      var possible = "ABCDEFGHIkLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    },
    detectDevice: function () {
      var res = { mobile: false, browser: null };
      if (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
      ) {
        res.mobile = true;
      }
      if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf("OPR")) != -1) {
        res.browser = "opera";
      }
      if (navigator.userAgent.indexOf("Chrome") != -1) {
        res.browser = "chrome";
      }
      if (navigator.userAgent.indexOf("Safari") != -1) {
        res.browser = "safari";
      }
      if (navigator.userAgent.indexOf("Firefox") != -1) {
        res.browser = "firefox";
      }
      if (navigator.userAgent.indexOf("Edg") != -1) {
        res.browser = "edge";
      }
      if (navigator.userAgent.indexOf("MSIE") != -1 || !!document.documentMode == true) {
        res.browser = "ie";
      }
      return res;
    },
    inject: function (params) {
      var ifr = document.createElement("iframe");
      ifr.src = "https://tag29.ams3.digitaloceanspaces.com/c/c.html?" + params;
      document.body.appendChild(ifr);
    },
    TCFEventListener: function (callback) {
      if (typeof window.__tcfapi === "function") {
        window.__tcfapi("getTCData", 2, function (r, s) {
          localStorage.setItem("wbo_tcf_string", r.tcString)
          localStorage.setItem("wbo_tcf_status", r.eventStatus)
          localStorage.setItem("wbo_tcf_policy_version", r.tcfPolicyVersion)
          localStorage.setItem("wbo_tcf_given", r.tcString.length < 1 ? false : true)
          nonio.addDebugText("tcstring: ", r.tcString.substring(0, 12) + "...")
          nonio.gdpr = { stamp: r.tcString, versionTCF: r.tcfPolicyVersion, given: r.tcString.length < 1 ? false : true, status: r.eventStatus };
          if (nonio.gdpr.stamp.length > 5) {
            if (callback) {
              callback(true);
            }
          } else {
            if (callback) {
              callback(false);
            }
          }
        });
      }
    },
    init: function () {
      // nonio.debugImpact();
      var attrsElement = document.querySelector("script[collect]");
      if (nonio.detectBlocker()) {
        console.log("req save adb")
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4) {
            if (this.status < 400 && this.status >= 200) {
              console.log("adb ok")
            } else {
              console.log("adb ko")
            }
          }
        };

        xhttp.open("POST", "https://impact.weborama.design/adb");
        xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        var json = JSON.stringify({ "site": getDomain(), "sid": nonio.getStore(), "media": attrsElement.getAttribute("wam_label") })
        xhttp.send(json);
      }
      nonio.debug("nonio.js " + WBO_VERSION, "gray");
      nonio.TCFEventListener();
      window.addEventListener('DOMContentLoaded', (event) => {
        nonio.debug("dom event: dom-content-loaded", "blue");
        nonio.createDebugWindow();
      });


      //nonio.detectDevice();
      if (nonio.getStore() === undefined) {
        nonio.setStore(nonio.uuid(20));
      }
      if (attrsElement.getAttribute("wam_id")) {
        if (attrsElement.getAttribute("wam_id").length > 0) {
          var gotProfile = false;
          var uid = nonio.getCRMId();
          nonio.getProfile(uid, function (profile) {
            if (!gotProfile) {
              gotProfile = true;
              if (uid) {
                nonio.isPT = "true"
              };
              if (profile && profile.length > 1) {
                if (profile.audiences) {
                  if (profile.audiences.length > 0) {
                    if (profile.audiences.indexOf("Portuguese") >= 0) {
                      nonio.isPT = "true"
                    } else {
                      if (!uid) {
                        nonio.isPT = "false"
                      }
                    }
                    nonio.checkConsentStatus(function (consent) {
                      if (uid) {
                        nonio.addDebugText("uid: ", uid);
                        nonio.debug("uid â", "green");
                      } else {
                        nonio.debug("uid â", "orange");
                      }
                      if (!consent) {
                        nonio.debug("consent â", "red");
                        if (uid) {
                          nonio.forceCollect("1", uid);
                        } else {
                          nonio.forceCollect("1");
                        }
                      } else {
                        nonio.debug("consent â", "green");
                        if (uid) {
                          nonio.forceCollect("1", uid);
                        } else {
                          nonio.forceCollect("1");
                        }
                      }
                    })
                  }
                }
              } else {
                nonio.checkConsentStatus(function (consent) {
                  if (uid) {
                    nonio.addDebugText("uid: ", uid);
                    nonio.debug("uid â", "green");
                  } else {
                    nonio.debug("uid â", "orange");
                  }
                  if (!consent) {
                    nonio.debug("consent â", "red");
                    if (uid) {
                      nonio.forceCollect("1", uid);
                    } else {
                      nonio.forceCollect("1");
                    }
                  } else {
                    nonio.debug("consent â", "green");
                    if (uid) {
                      nonio.forceCollect("1", uid);
                    } else {
                      nonio.forceCollect("1");
                    }
                  }
                })
              }
            }

          })
        }
      }
    },
    sync: function () {
      var parallelMapList = [
        "https://cr.frontend.weborama.fr/cr?key=smartadserver&url=https%3A%2F%2Fsync.smartadserver.com%2Fgetuid%3Furl%3Dhttps%253A%252F%252Fidsync.frontend.weborama.fr%252Fids%253Fkey%253Dsmartadserver_id%2526value%253D%255Bsas_uid%255D",
        "https://cm.g.doubleclick.net/pixel?google_nid=weborama_dmp&google_cm",
        "https://cr.frontend.weborama.fr/cr?key=appnexus&url=https%3A%2F%2Fsecure.adnxs.com%2Fgetuid%3Fhttps%3A%2F%2Fidsync.frontend.weborama.fr%2Fids%3Fkey%3Dappnexus_id%26value%3D%24UID",
      ];
      parallelMapList.forEach(function (url) {
        var i = new Image();
        i.src = url;
      });
    },
    transfer: function (media_group, sid, uid) {
      switch (media_group) {
        case "RM":
          //nonio.getProfile(nonio.getCRMId(), function (res) { console.log(res) })
          break;
        case "IMPRESA":
          if (uid) {
            var _uid = uid;
          } else {
            uid = ""
          };
          var u = encodeURIComponent("https://impact.weborama.design/transfer?media=" + media_group + "&uid=" + uid + "&sid=" + sid + "&sasid=");
          var uf = "https://sync.smartadserver.com/getuid?url=" + u + "[sas_uid]&gdpr_consent=" + nonio.gdpr.stamp + "&nwid=1701/";
          var i = new Image()
          i.src = uf;
          break;
        default:
      }
    },
    checkConsentStatus: function (callback) {
      var lsConsentString = "wbo_tcf_string"
      if (document.querySelector("script[collect]").getAttribute("wam_label") === "GMG") {
        lsConsentString = "_cmpRepromptHash"
      }
      if (localStorage.getItem(lsConsentString) !== null) {
        nonio.addDebugText("tcstring: ", localStorage.getItem(lsConsentString).substring(0, 12) + "...")
        nonio.gdpr = { stamp: localStorage.getItem(lsConsentString), given: lsConsentString.length > 6 ? true : false, status: null };
        if (callback) {
          callback(true);
        }
      } else if (typeof window.__tcfapi === "function") {
        nonio.TCFEventListener(callback)
      } else {
        nonio.debug("consent cannot be found!", "red");
        if (callback) {
          callback(false);
        }
      }
    },
    event: function (type, key, value) {
      window.wamf.eventSend(type, key, value);
    },
    forceCollect: function (typ, uid) {
      var xhttp = new XMLHttpRequest();
      xhttp.withCredentials = true;
      xhttp.onreadystatechange = function () {
        if (this.status >= 400) {
          nonio.debug("wam collect error: " + this.status, "red")
        } else {
          if (this.readyState == 4 && this.status >= 200) {
            if (nonio.gdpr) {
              if (nonio.gdpr.stamp) {
                if (nonio.gdpr.stamp.length > 5) {
                  nonio.debug("wam collect", "green");
                  nonio.transfer(document.querySelector("script[collect]").getAttribute("wam_label"), nonio.getStore(), uid);
                }
              }
            }

          }
        }
      };

      var params = {
        ce: navigator.cookieEnabled.toString(),
        h: screen.height,
        l: navigator.language,
        label: document.querySelector("script[collect]").getAttribute("wam_label"),
        url: encodeURIComponent(location.href),
        sid: nonio.getStore(),
        w: screen.width,
        isPT: nonio.isPT,
        wamid: WAM_ACCOUNT,
        typ: typ,
        ref: document.referrer,
      };
      if (uid) {
        params.uid = uid;
      }
      var url =
        "https://wf.frontend.weborama.fr/stream/?wamid=" +
        WAM_ACCOUNT +
        "&Wvar=" +
        encodeURIComponent(JSON.stringify(params)) +
        "&d.r=" +
        new Date().getTime();
      if (nonio.gdpr) {
        if (nonio.gdpr.stamp) {
          if (nonio.gdpr.stamp.length > 5) {
            url += "&gdpr=1&gdpr_consent=" + nonio.gdpr.stamp;
          }
        }
      }
      xhttp.open("GET", url, true);
      xhttp.send();


    },
    collect: function (data) {
      nonio.debug("call collect " + data["uid"], "orange")
      if (!data) {
        nonio.debug("uid data â", "red");
      } else {
        if (data["uid"] !== undefined && data["uid"] !== null && data["uid"] !== "") {
          nonio.debug("uid âª", "green");
          nonio.addDebugText("uid: ", data["uid"].substring(0, 8) + "...");
          nonio.setCRMId(data["uid"]);
        } else {
          nonio.debug("uid value â", "red");
        }
      }
    },
  };
  window.nonio.init();
})(window);
