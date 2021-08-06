<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

</head>

<body>
  <script>

window.addEventListener("message", function (e) {
  var messageSent = false;
  var errorEventName = "error";
  var impressionLoggingKey = "IL_";
  function isParsableJson(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  function triggerRequest(eventName, data) {
    if (isParsableJson(data)) {
      var stringJson = data;
    } else {
      var stringJson = JSON.stringify(data);
      //stringifying the error object returns empty object
      //https://stackoverflow.com/questions/18391212/is-it-not-possible-to-stringify-an-error-using-json-stringify
      if (stringJson === "{}")
        stringJson = JSON.stringify(data, Object.getOwnPropertyNames(data));
    }
    var encodedStringJson = btoa(stringJson);
    var pixel = document.createElement("img");
    pixel.src =
      "https://aplogger.adpushup.com/log?event=" +
      impressionLoggingKey +
      eventName +
      "&data=" +
      encodedStringJson;
  }

  function generateUniqueId() {
    return (
      "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }) +
      "-" +
      new Date().valueOf()
    );
  }

  function fallback() {
    var uniqueId = generateUniqueId();
    var trackerObj = {
      userId: uniqueId,
    };
    var jsonStr = JSON.stringify(trackerObj);
    encodedStr = btoa(jsonStr);
    try {
      localStorage.setItem(key, encodedStr);
    } catch (e) {
      var log = {
        message: "Custom message. Local storage not accessible in incognito.",
        stack: e,
      };
      triggerRequest(errorEventName, log);
    }
    if (!messageSent) {
      messageSent = true;
      window.parent.postMessage(jsonStr, "*");
    }
  }

  window.addEventListener("error", function (event) {
    try {
      var error = event.error;
      if (error) {
        var message = error.message;
        var stack = error.stack;
      }
      message = message || event.message;
      var log = {
        message: message,
        stack: stack || "",
        type: "uncaughterror",
      };
      triggerRequest(errorEventName, log);
      fallback();
    } catch (error) {
      triggerRequest(errorEventName, error);
      fallback();
    }
  });

  var key = btoa("user_stats");
  var origin = "https://cdnorigin.staging.adpushup.com";
  var client = "https://client.adpushup.com";
  try {
    if (!isParsableJson(e.data)) return;
    var data = JSON.parse(e.data);
    if (data.origin !== client) return;
    var encodedTrackerObj = window.localStorage.getItem(key);
    if (encodedTrackerObj) {
      var trackerObj = atob(encodedTrackerObj);
      trackerObj = JSON.parse(trackerObj);
    } else {
      var trackerObj = {};
    }
    if (!trackerObj.hasOwnProperty("userId")) {
      trackerObj = {
        userId: data.userId,
      };
      var jsonStr = JSON.stringify(trackerObj);
      encodedStr = btoa(jsonStr);
      localStorage.setItem(key, encodedStr);
    }
    var jsonStr = JSON.stringify(trackerObj);
    if (!messageSent) {
      messageSent = true;
      window.parent.postMessage(jsonStr, "*");
    }
  } catch (error) {
    triggerRequest(errorEventName, error);
    fallback();
  }
});


  </script>
</body>
</html>
