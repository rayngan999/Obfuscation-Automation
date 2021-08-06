try {
  if (isReceiverBannerEnabled() && isStartPage()) {
    addEventToCountryDropdown();
  }
  processBanner(outageData);
  document.addEventListener('DOMContentLoaded', function (event) {
    var headerDiv = document.getElementsByClassName("header-container");
    if (headerDiv && headerDiv[0] && headerDiv[0].style) {
      headerDiv[0].style.position = "static";
    }
    var contentDiv = document.getElementsByClassName("content-container");
    if (contentDiv && contentDiv[0] && contentDiv[0].style) {
      contentDiv[0].style.marginTop = 0;
    }
  });

  history.pushState = function (f) {
    return function pushState() {
      var ret = f.apply(this, arguments);
      if (typeof (Event) === 'function') {
        window.dispatchEvent(new Event('pushstate'));
        window.dispatchEvent(new Event('locationchange'));
      } else {
        var push_event = document.createEvent('Event');
        push_event.initEvent('pushstate', true, true);
        window.dispatchEvent(push_event);

        var location_event = document.createEvent('Event');
        location_event.initEvent('locationchange', true, true);
        window.dispatchEvent(location_event);
      }
      if (isReceiverBannerEnabled() && isStartPage()) {
        addEventToCountryDropdown();
      }
      processBanner(outageData);
      return ret;
    };
  }(history.pushState);

  history.replaceState = function (f) {
    return function replaceState() {
      var ret = f.apply(this, arguments);
      if (typeof (Event) === 'function') {
        window.dispatchEvent(new Event('replacestate'));
        window.dispatchEvent(new Event('locationchange')); // processBanner(outageData);
      } else {
        var replace_event = document.createEvent('Event');
        replace_event.initEvent('replacestate', true, true);
        window.dispatchEvent(replace_event);

        var location_event = document.createEvent('Event');
        location_event.initEvent('locationchange', true, true);
        window.dispatchEvent(location_event);
      }

      return ret;
    };
  }(history.replaceState);

  window.addEventListener('popstate', function () {
    if (typeof (Event) === 'function') {
      window.dispatchEvent(new Event('locationchange'));
    } else {
      var location_event = document.createEvent('Event');
      location_event.initEvent('locationchange', true, true);
      window.dispatchEvent(location_event);
    }
    processBanner(outageData);
  });

} catch (ex) {
  console.error('Error while displaying banner.');
  console.error(ex);
}

function processBanner(outageData) {
  var countryValue = '';
  var languageValue = '';
  var resourcePath = window.location.href;
  var spath = resourcePath.split("/");
  if (resourcePath.toLowerCase().indexOf('/global') < 0) {
    countryValue = spath[3];
    languageValue = spath[4];
  }
  if (countryValue.length <= 0) {
    countryValue = (getQueryParameterByName("WUCountry") != null) ? getQueryParameterByName("WUCountry") :
      getCookieValue("WUCountryCookie_");
  }
  if (languageValue.length <= 0) {
    languageValue = (getQueryParameterByName("WULanguage") != null) ? getQueryParameterByName("WULanguage") :
      getCookieValue("WULanguageCookie_");
  }

  countryValue = (countryValue || 'us').toLowerCase();
  languageValue = (languageValue || 'en').toLowerCase();

  //var outageData = JSON.parse(elements);
  var bannerConfig = getConfigForCountry(outageData.web, countryValue);
  var displayBanner = false;
  var isBannerAlreadyDisplayed = /true/i.test((getSessionValue('bannerAlreadyDisplayed') || ''));
  var isPartner = ((getSessionValue('partnerName') || '').length > 2) || ((getQueryParameterByName("partnerName") != null)) || (resourcePath && resourcePath.toLowerCase().indexOf('partner') != -1);
  if (!bannerConfig ||
    (bannerConfig && bannerConfig.showBannerOnlyOncePerSession && isBannerAlreadyDisplayed) ||
    (bannerConfig && !bannerConfig.showBannerForPartner && isPartner)) {
    return;
  }

  // Sender country Logic
  if (bannerConfig.exceptionCountries != null && bannerConfig.exceptionCountries.length > 0 && bannerConfig
    .exceptionCountries.join(',').indexOf(countryValue) >= 0) {
    displayBanner = false;
  } else if (bannerConfig.displayGlobalBanner) {
    displayBanner = true;
  } else if (bannerConfig.displayCountrySpecificBanner && bannerConfig.countries && bannerConfig.countries.length >
    0 &&
    bannerConfig.countries.join(',').indexOf(countryValue) >= 0) {
    displayBanner = true;
  }

  // Device Type Logic
  if (bannerConfig.deviceType && bannerConfig.deviceType.length > 0 && displayBanner) {
    var deviceTypeToShowBanner = bannerConfig.deviceType.join(',').toLowerCase();
    displayBanner = (deviceTypeToShowBanner.indexOf('mobile') >= 0 && isMobile()) ||
      (deviceTypeToShowBanner.indexOf('tablet') >= 0 && isMobileTablet()) ||
      (deviceTypeToShowBanner.indexOf('desktop') >= 0 && isDesktop())
  }

  // Pages Support
  if (!bannerConfig.showOnAllPages && bannerConfig.pages && bannerConfig.pages.length > 0 && displayBanner) {
    var currentPage = window.location.href.toLowerCase();
    var matchFound = false;
    for (var index = 0; index < bannerConfig.pages.length; index++) {
      var page = bannerConfig.pages[index];
      var url = '';
      if (typeof page === 'string') {
        url = page.toLowerCase();
      } else if (typeof page === 'object') {
        url = page.url ? page.url.toLowerCase() : page.url;
      }

      if (currentPage.indexOf(url) >= 0) {
        matchFound = true;
        if (page.buttonsTobeDisabled && page.buttonsTobeDisabled.length > 0) {
          disableButtons(page.buttonsTobeDisabled);
        }
      }
    }
    if (!matchFound) {
      displayBanner = false;
    }
  }

  //Display Icon logic
  if (bannerConfig.showBannerIcon && bannerConfig.bannerIconsrc && displayBanner) {
    var bannerIconDiv = document.getElementById('banner_icon');
    var bannerIconImg = document.getElementById('banner_icon_img');
    bannerIconDiv.style.display = 'block';
    bannerIconImg.src = bannerConfig.bannerIconsrc;
  }

  // Query Param Logic
  if (getQueryParameterByName('displayBannerTest') === '6d5adae52007b2e055ee219ca3718517') {
    displayBanner = true;
  }
  if (!isBannerAlreadyDisplayed && displayBanner) {
    setSessionValue('bannerAlreadyDisplayed', true);
  }
  var translationObjt = outageData.translations;
  if (translationObjt && translationObjt['default']) {
    countrylangObj = translationObjt['default'];
    displayObj = (countrylangObj && countrylangObj[languageValue]) ? countrylangObj[languageValue] : countrylangObj[
      'en'];
    displayTitle = (displayObj != null && displayObj['title'] != '') ? displayObj['title'] : "";
    displayDescription = (displayObj != null && displayObj['description'] != '') ? displayObj['description'] : "";
  }

  if (translationObjt != null && translationObjt[countryValue]) {
    countrylangObj = translationObjt[countryValue];
    if (countrylangObj && countrylangObj[languageValue]) {
      displayObj = countrylangObj[languageValue];
      displayTitle = (displayObj && displayObj['title']) ? displayObj['title'] : "";
      displayDescription = (displayObj && displayObj['description']) ? displayObj['description'] : "";
    }
  }
  var bannerDiv = document.getElementById('outage_banner_div');
  var bannerStyles = bannerConfig.styles;
  var backgroundStyles = bannerStyles ? bannerStyles["background"] : null;
  var titleStyles = bannerStyles ? bannerStyles["title"] : null;
  var descriptionStyles = bannerStyles ? bannerStyles["description"] : null;
  var title = document.getElementById("bb_title");
  title.innerHTML = displayTitle;
  var description = document.getElementById("bb_description");
  description.innerHTML = displayDescription;
  var amplitudeTracking = bannerConfig.amplitudeTracking;

  // Receiving Corridor Logic
  var receivingCorridor = bannerConfig.receiverCountries && bannerConfig.receiverCountries.length > 0 ? bannerConfig.receiverCountries.join(',') : '';
  if (displayBanner && isReceiverBannerEnabled()) {
    var lastCountry = '';
    if (getSessionValue('app')) {
      var smoObj = JSON.parse(getSessionValue('app'));
      if (smoObj && smoObj.corridor && smoObj.corridor.receiverCountry && smoObj.corridor.receiverCountry.isoCode) {
        lastCountry = smoObj.corridor.receiverCountry.isoCode;
      }
    }
    if (lastCountry && receivingCorridor.toLowerCase().indexOf(lastCountry.toLowerCase()) >= 0) {
      displayBanner = true;
    } else {
      displayBanner = false;
    }
  }

  if (displayBanner) {
    bannerDiv.classList.remove('hide_banner');
    bannerDiv.classList.add('show_banner')

    //background color change
    if (backgroundStyles && backgroundStyles["color"]) {
      bannerDiv.style.backgroundColor = backgroundStyles["color"];
    }
    //banner title font size change
    if (titleStyles && titleStyles["fontSize"]) {
      title.style.fontSize = titleStyles["fontSize"];
    }

    //banner title font color change
    if (titleStyles && titleStyles["fontColor"]) {
      title.style.color = titleStyles["fontColor"];
    }

    //banner title font family change
    if (titleStyles && titleStyles["fontFamily"]) {
      title.style.fontFamily = titleStyles["fontFamily"];
    }

    //banner Description font size change
    if (descriptionStyles && descriptionStyles["fontSize"]) {
      description.style.fontSize = descriptionStyles["fontSize"];
    }

    //banner Description font color change
    if (descriptionStyles && descriptionStyles["fontColor"]) {
      description.style.textDecorationColor = descriptionStyles["fontColor"];
    }

    //banner Description font family change
    if (descriptionStyles && descriptionStyles["fontFamily"]) {
      description.style.fontFamily = descriptionStyles["fontFamily"];
    }

    //trigger amplitude ab test event
    setTimeout(function () {
      if (amplitudeTracking && amplitudeTracking["ab-test"] && amplitudeTracking["ab-test-variant"]) {
        logEvergageExperienceAmplitudeEvent({
          ab_test: amplitudeTracking["ab-test"],
          ab_test_variant: amplitudeTracking["ab-test-variant"]
        });
      }
    }, 5000);

  } else {
    bannerDiv.classList.add('hide_banner');
    bannerDiv.classList.remove('show_banner')
  }
}

function closeBanner() {
  try {
    var bannerDiv = document.getElementById('outage_banner_div');
    if (bannerDiv) {
      bannerDiv.style.display = 'none';
    }
  } catch (e) {
    console.log(e);
  }
}

function getConfigForCountry(config, country) {
  var result = {};
  var countryConfig = config.additionalSetting[country] || {};
  var proConfig = Object.keys(config);
  if (proConfig && proConfig.length > 0) {
    for (var index = 0; index < proConfig.length; index++) {
      var prop = proConfig[index];
      if (config.hasOwnProperty(prop) && countryConfig.hasOwnProperty(prop)) {
        result[prop] = countryConfig[prop]
      } else if (prop != 'additionalSetting') {
        result[prop] = config[prop]
      }
    }
  }
  return result;
}

function getCookieFromSessionStorage(name){
    var cookiestoreObj = JSON.parse(sessionStorage.getItem('cookiestore') || '{}');
    if (cookiestoreObj && cookiestoreObj[name]) {
        return cookiestoreObj[name];
    }
    return "";
  }

function getCookieValue(cname) {
  var cookieFromStorage = getCookieFromSessionStorage(cname);
  if (cookieFromStorage != "") return cookieFromStorage;

  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getQueryParameterByName(name) {
  var url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function getSessionValue(name) {
  return sessionStorage.getItem(name);
}

function setSessionValue(name, value) {
  return sessionStorage.setItem(name, value);
}

function disableButtons(buttonIds) {
  var count = 1;
  var btnDisableInterval = setInterval(function () {
    try {
      for (var index = 0; index < buttonIds.length; index++) {
        var buttonclass = document.getElementsByClassName(buttonIds[index]);
        var buttonid = document.getElementById(buttonIds[index]);
        if (buttonid) {
          clearInterval(btnDisableInterval);
          buttonid.setAttribute('disabled', true);
        } else if (buttonclass && buttonclass.length > 0) {
          clearInterval(btnDisableInterval);
          buttonclass[0].setAttribute('disabled', true);
        }
      }
      count++;
      if (count > 30) {
        clearInterval(registerSuccess);
      }
    } catch (e) {
      clearInterval(btnDisableInterval);
    }
  }, 1000);
}

function isMobile() {
  var check = false;
  (function (a) {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)) {
      check = true;
    }
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

function isMobileTablet() {
  var check = false;
  (function (a) {
    if (
      /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/
      .test(a.substr(0, 4))) {
      check = true;
    }
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
}

function isDesktop() {
  return !isMobile() && !isMobileTablet();
}

function addEventToCountryDropdown() {
  var count = 1;
  var intervalForEvent = setInterval(function () {
    try {
      var ddlClassName = 'hy-drop dropdown-menu hide-panel';
      var tabClassName = 'no-cache-top-country-main';
      if (document.getElementsByClassName(ddlClassName) && document.getElementsByClassName(ddlClassName).length > 0) {
        document.getElementsByClassName(ddlClassName)[0].onclick = function () {
          processBanner(outageData);
        }
        if (document.getElementsByClassName(tabClassName) && document.getElementsByClassName(tabClassName).length > 0) {
          document.getElementsByClassName(tabClassName)[0].onclick = function () {
            processBanner(outageData);
          }
        }
        clearInterval(intervalForEvent);
        processBanner(outageData);
      }
      count++;
      if (count > 15) {
        clearInterval(intervalForEvent);
      }
    } catch (e) {
      clearInterval(intervalForEvent);
    }
  }, 1000);
}

function isReceiverBannerEnabled() {
  try {
    var receivingCorridor = outageData.web.receiverCountries && outageData.web.receiverCountries.length > 0 ? outageData.web.receiverCountries.join(',') : '';
    return outageData.web.showReceiverCountryBanner && receivingCorridor && receivingCorridor.length > 0;
  } catch (e) {
    return false;
  }
}

function isStartPage() {
  try {
    var resourceLocation = window.location.href;
    return resourceLocation && resourceLocation.indexOf('/web/send-money') > -1;
  } catch (e) {
    return false;
  }
}
