"use strict"
window["ADREADY"] = (function () {
  var PIXEL_CONNECTOR_URL = "https://pixelconnector.adready.com";
  var TRACKER_URL = "https://tracker.adreadyclick.com";

  var LOG_URL = TRACKER_URL + "/log.php";

  var verboseMode = false;
  var advertiser_map = {};

  var consoleLog = function (message) {
    if (!verboseMode) {
      return;
    }
    console.log(message);
  }

  var getRequest = function (url, method, data, successCallback, failCallback) {
    method = method || "GET";
    data = data || null;
    successCallback = successCallback || function(){};
    failCallback = failCallback || function(){};

    consoleLog("Executing " + method + " " + url + (data ? " [data = " + data + "]" : ""));
    try {
      var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
      (xhr.onreadystatechange = function () {
        4 === xhr.readyState &&
          (200 === xhr.status ? successCallback(xhr.response) : failCallback(xhr.status));
      }),
      (xhr.ontimeout = function () {
        failCallback("timeout");
      }),
      xhr.open(method, url, true);
      xhr.timeout = 5000;
      xhr.send(data);
    } catch (errors) {
      failCallback(errors);
    }
  }

  var appendPixel = function (url) {
    var body = document.getElementsByTagName("body")[0];
    var pixelstyle =
      "position:absolute;overflow:hidden;clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;border:0;";
    var pixel = document.createElement("img");

    pixel.src = url;
    pixel.width = "1";
    pixel.height = "1";
    pixel.style = pixelstyle;
    body.appendChild(pixel);
  }

  var appendPiggybackPixels = function (piggyback_pixels) {
    piggyback_pixels.map(function (pixel) {
      consoleLog("Adding [" + pixel + "] pixel...");
      appendPixel(pixel);
    });
  }

  var appendAdvertiserFile = function (external_file) {
    if (external_file !== "") {
      var script = document.createElement("script"); 
      script.src = TRACKER_URL + "/scripts/" + external_file; 
      var head = document.getElementsByTagName("head")[0];
      head.appendChild(script);
    }
  }

  var encodeQueryData = function (data) {
    var ret = [];
    for (var d in data)
      ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
    return ret.join("&");
  }

  var logging = function (data, errors) {
    data = data || '';
    var d = new Date();
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var date = d.getDate();
    var month = months[d.getMonth()];
    var year = d.getFullYear();
    if (min < 10) {
      min = '0' + min;
    }
    if (sec < 10) {
      sec = '0' + sec;
    }

    var dateFormat = '[' + date + '-' + month + '-' + year + ' ' + hr + ':' + min + ':' + sec + ' UTC]';
    var strFormat = dateFormat + ' ' + data + ' | ' + errors + '\n';

    consoleLog(strFormat);

    getRequest(LOG_URL + '?' + encodeQueryData({
        log: strFormat
      }), 'GET', null,
      function() { consoleLog("Logging successful..."); },
      function(e) { consoleLog("Logging failed with errors - " + e); }
    );
  }

  var firePixel = function (advertiser, data_object) {
    if (!advertiser) {
      consoleLog("Invalid advertiser");
      return;
    }

    if (advertiser.piggyback_pixels && advertiser.piggyback_pixels.length > 0) {
      consoleLog("Adding piggyback [" + advertiser.piggyback_pixels.length + "] pixels...");
      appendPiggybackPixels(advertiser.piggyback_pixels);
    } else {
      consoleLog("No piggyback pixels...");
    }

    if (advertiser.external_file !== '') {
      consoleLog("Appending external file [" + advertiser.external_file + "]...");
      appendAdvertiserFile(advertiser.external_file);
    } else {
      consoleLog("No external files to download...");
    }

    var isHomePage = advertiser.conversion_type === "HomepageConv";
    if (isHomePage) {
      data_object = null;
    } else if (!data_object) {
      data_object = {};
    }

    var orderNumber = null;
    var checkout_values = [];
    if (data_object) {
      orderNumber = data_object.orderNumber || null;
      checkout_values = data_object.amount ? [data_object.amount] : [];
    }

    var post_data = {
      flip_pixel_id: advertiser.flip_id,
      advertiser: advertiser.name,
      timestamp: new Date().getTime(),
      order_number: orderNumber,
      checkout_values: checkout_values,
    };

    consoleLog("Firing pixel update request with [" + JSON.stringify(post_data) + "] data...");
    getRequest(PIXEL_CONNECTOR_URL + "/update?s=flip", "POST", JSON.stringify(post_data),
      function () {
        consoleLog("Post to pixelconnector successful...");
      },
      function (e) {
        logging('Advertiser "' + advertiser.flip_id + '" encounter an error: Could not post to pixelconnector.', e);
      }
    );
  }

  var execute = function (pixelId, data_object) {
    if (!pixelId) {
      consoleLog("Missing Advertiser Pixel Id");
      return;
    }

    var flip_advertiser = advertiser_map[pixelId];
    if (!flip_advertiser) {
      var validate_url = PIXEL_CONNECTOR_URL + "/validate" + "?id=" + pixelId;

      consoleLog("Validating [" + pixelId + "] pixel id...");
      getRequest(validate_url, 'GET', null,
        function(valid_res) {
          consoleLog("Pixel validate response = " + valid_res);
          flip_advertiser = JSON.parse(valid_res);
          advertiser_map[pixelId] = flip_advertiser;
          firePixel(flip_advertiser, data_object);
        },
        function(e) {
          logging('Advertiser "' + pixelId + '" encountered an error: Unable to fetch the advertiser details.', e);
        }
      );
    } else {
      firePixel(flip_advertiser, data_object);
    }
  }

  var obj = {};

  obj.fire = function (pixelId, data_object) {
    try {
      execute(pixelId, data_object);
    } catch (errors) {
      logging('Advertiser "' + pixelId + '" encountered an error: Unable to execute pixel.', errors);
    }
  }

  obj.setVerbose = function (verbose) {
    verboseMode = (verbose ? true : false);
  }

  return obj;
}());
