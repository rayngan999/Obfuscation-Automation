(function (window) {
  var PIXEL_CONNECTOR_URL = "https://pixelconnector.adready.com";
  var TRACKER_URL = "https://tracker.adreadyclick.com";

  var LOG_URL = TRACKER_URL + "/log.php";

  var previousURL = window.location.href;

  window.pixel = { post_data: {}, success: [] };

  function encodeQueryData(data) {
    var ret = [];
    for (var d in data)
      ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
    return ret.join("&");
  }

  var getRequest = function (url, method, data, successCallback, failCallback) {
    method = method || "GET";
    data = data || null;
    successCallback = successCallback || function(){};
    failCallback = failCallback || function(){};

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

  function logging(data, errors) {
    if (!(data || errors)) {
      return;
    }
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

    getRequest(LOG_URL + '?' + encodeQueryData({
      log: strFormat
    }), 'GET');
  }

  function appendPixel(url) {
    var head = document.getElementsByTagName("head")[0];
    var pixelstyle =
      "position:absolute;overflow:hidden;clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;border:0;";
    var pixel = document.createElement("img");

    pixel.src = url;
    pixel.width = "1";
    pixel.height = "1";
    pixel.style = pixelstyle;
    head.appendChild(pixel);
  }

  function generateValidateUrl(advertiser) {
    var validate_url = PIXEL_CONNECTOR_URL + "/validate";

    if (typeof advertiser !== "undefined") {
      return validate_url + "?advertiser=" + advertiser;
    }

    var scripts = document.getElementsByTagName("script");

    var flip_ids = [];
    for (var i = 0; i < scripts.length; i++) {
      var script = scripts[i];

      if (script.src && script.src.includes(TRACKER_URL + "/index.js?id=")) {
        var params = script.src.replace(/^[^\?]+\??/, "");

        if (!params.includes("id=")) {
          continue;
        }
        var flip_id = params.replace("id=", "");
        if (!window.pixel.success.includes(flip_id)) {
          flip_ids.push(flip_id);
        }
      }
    }

    var id = flip_ids[flip_ids.length - 1];
    validate_url = validate_url + "?id=" + id;

    return validate_url;
  }

  function appendPiggybackPixels(piggyback_pixels) {
    piggyback_pixels.map(function (pixel) {
      appendPixel(pixel);
    });
  }

  function appendAdvertiserFile(external_file) {
    if (external_file !== "") {
      var script = document.createElement("script"); 
      script.src = TRACKER_URL + "/scripts/" + external_file; 
      document.head.appendChild(script);
    }
  }

  function isEmpty(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop))
        return false;
    }
    return true;
  }

  function generateRegexes(regexes) {
    var body = document.getElementsByTagName("body")[0].innerHTML;

    if (window.pixel.isHomePage) {
      return {};
    }

    if (!isEmpty(regexes)) {
      Object.keys(regexes).filter(function (key) {
        return regexes[key] !== "";
      });
    } else {
      regexes = {
        ordernumber: "(?:(?=.*[A-Z0-9\\-])(?![GTM\\-]))[A-Z0-9\\-]{8,25}",
        total: "(?:\\$)((?:\\.|)\\d+(?:\\,|)\\d{0,3}(?:\\.|)\\d{0,2})",
      };
    }
    var orderRegex = body.match(regexes.ordernumber) || [];

    var orderNumber = null;
    if (orderRegex.length > 0) {
      orderNumber = orderRegex.length === 1 ? orderRegex[0] : orderRegex[1];
    }

    var regex_results = {
      ordernumber: orderNumber,
      total: body.match(new RegExp(regexes.total, "g")) || [],
    };
    regex_results.total = regex_results.total
      .map(function (total) {
        total = total.match(/[\d|,|.|\+]+/g);
        if (!total) {
          return 0;
        }
        return Number(total[0].replace("$", "").replace(",", ""));
      })
      .sort()
      .filter(function (v) { return v > 0; });

    return regex_results;
  }

  function firePixel(advertiser) {
    try {
      var regex_results;
      if (advertiser && advertiser.name === 'casticketpurchase' && window.dataLayer) {
        var tx = window.dataLayer.find(function (d) { return  !!d.transactionId; });
        if (tx) {
          regex_results = { ordernumber: tx.transactionId, total: [tx.transactionTotal] };
        }
      }
      if (!regex_results) {
        regex_results = generateRegexes(advertiser.regex);
      }
      window.pixel.regexes = regex_results;

      if (advertiser.piggyback_pixels.length > 0) {
        appendPiggybackPixels(advertiser.piggyback_pixels);
      }
      if (advertiser.external_file !== '') {
        appendAdvertiserFile(advertiser.external_file);
      }

      var post_data = {
        advertiser: advertiser.name,
        timestamp: new Date().getTime(),
        order_number: regex_results.ordernumber || null,
        checkout_values: regex_results.total || [],
      };

      for (var key in post_data) {
        post_data[key] = window.pixel.post_data[key] || post_data[key];
      }

      if (typeof pixel_object != "undefined") {
        var ownProps = Object.keys(pixel_object),
          i = ownProps.length;
        while (i--) {
          post_data[ownProps[i]] = pixel_object[ownProps[i]];
        }
      }

      getRequest(
        PIXEL_CONNECTOR_URL + "/update",
        "POST",
        JSON.stringify(post_data),
        null,
        function (errors) {
          logging('Advertiser "' + advertiser + '" encounter an error: Could not post to pixelconnector.', errors);
        }
      );

    } catch (err) {
    }
  }

  function matchURL(advertiser, currentURL) {
    return advertiser.authorized_urls.filter(function (url) {
      var base_url = window.location.hash === '' ? currentURL.split("?")[0] : currentURL;
      return base_url.includes(url);
    });
  }

  function checkURLchange(advertiser) {
    var bodyList = document.querySelector("body");

    window.onpopstate = function () {
      var currentURL = window.location.href;
      if (window.location.hash !== '') {
        var matched_url = matchURL(advertiser, currentURL);
        if (matched_url.includes(window.location.hash)) {
          firePixel(advertiser);
        }
      }
    };

    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function () {
        var currentURL = window.location.href;

        if (previousURL !== currentURL) {
          var matched_url = matchURL(advertiser, currentURL);
          if (matched_url.length > 0) {
            firePixel(advertiser);
          }
          previousURL = currentURL;
        }
      });
    });

    observer.observe(bodyList, {
      childList: true,
      subtree: true,
      attributes: true,
    });
  }

  function execute(advertiser) {
    var validate_url = generateValidateUrl(advertiser);

    if (typeof validate_url === "boolean" && !validate_url) {
      console.log("Missing Advertiser ID or Name");
      return;
    }
    getRequest(validate_url, "GET", null,
      function (valid_res) {
        var advertiser = JSON.parse(valid_res);

        window.pixel.isHomePage = advertiser.conversion_type === "HomepageConv";

        if (advertiser.authorized_urls.length > 0) {
          checkURLchange(advertiser);
        } else {
          firePixel(advertiser);
        }
      }
    );

  }

  try {
    var hasEvent = typeof event !== "undefined";
    var isAdvertiserVarSet = typeof advertiser !== "undefined";

    if (!hasEvent || event === "pageLoad") {
      if (!isAdvertiserVarSet) {
        execute();
      } else {
        execute(advertiser);
      }
    } else {
      window.pixel.fire = execute;
    }

  } catch (err) {
  }
})(window);
