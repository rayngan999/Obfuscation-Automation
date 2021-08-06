function registerUserForWebPush() {
  function getCookie(name) {
    var v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
    return v ? v[2] : null;
  }

  function setCookie(name, value, days) {
    var d = new Date();
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
  }

  var INVALID_WP_ROUTES = [
    "/pf/preview/",
    "/login/",
    "/pf/admin/",
    "/pf/api/",
    "/pagevuilder/editor"
  ];

  function shouldRegister(sdk) {
    var activePath = window.location.pathname || "";
    var invalidRoute = "";
    var x = 0;

    for (; x < INVALID_WP_ROUTES.length; x += 1) {
      invalidRoute = INVALID_WP_ROUTES[x];
      if (activePath.includes(invalidRoute)) {
        return false;
      }
    }

    return (!sdk.channel || !sdk.channel.opt_in) && sdk.canRegister;
  }

  function setVerificationForRegisteredDevice() {
    setCookie("askForWbpnRegistration", "no", 365);
  }

  if (window.Notification && Notification.permission === "granted") {
    UA.then(function(sdk) {
      if (shouldRegister(sdk)) {
        sdk.register();
        setVerificationForRegisteredDevice();
      }
    });
  }

  var askForWbpnRegistration = getCookie("askForWbpnRegistration");

  if (askForWbpnRegistration === "" || askForWbpnRegistration == null) {
    askForWbpnRegistration = "yes";
  }

  if ("yes" == askForWbpnRegistration) {
    UA.then(function(sdk) {
      var popupModal = document.getElementById("push-popup");

      if (popupModal) {
        if (shouldRegister(sdk)) {
          var yesBtn = document.getElementById("push-popup-yes");
          var noBtn = document.getElementById("push-popup-no");
          popupModal.style.display = "block";
          yesBtn.onclick = function() {
            popupModal.style.display = "none";
            setVerificationForRegisteredDevice();
            sdk.register();
          };
          noBtn.onclick = function() {
            popupModal.style.display = "none";
            setCookie("askForWbpnRegistration", "no", 30);
          };
        }
        sdk.addEventListener("channel", function(e) {
          console.log(e.channel);
        });
      }
    })["catch"](function(b) {
      console.log(b);
    });
  }
}

setTimeout(registerUserForWebPush, 2000);
