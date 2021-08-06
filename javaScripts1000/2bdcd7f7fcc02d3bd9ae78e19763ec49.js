// Amplitude
(function (e, t) {
  var n = e.amplitude || { _q: [], _iq: {} };
  function s(e, t) {
    e.prototype[t] = function () {
      _q.push([t].concat(Array.prototype.slice.call(arguments, 0))); return this
    }
  }
  var o = function () { _q = []; return this }
    ; var a = ["add", "append", "clearAll", "prepend", "set", "setOnce", "unset"]
    ; for (var u = 0; u < a.length; u++) { s(o, a[u]) } n.Identify = o; var c = function () {
      _q = []
        ; return this
    }
    ; var l = ["setProductId", "setQuantity", "setPrice", "setRevenueType", "setEventProperties"]
    ; for (var p = 0; p < l.length; p++) { s(c, l[p]) } n.Revenue = c
    ; var d = ["init", "logEvent", "logRevenue", "setUserId", "setUserProperties", "setOptOut", "setVersionName", "setDomain", "setDeviceId", "setGlobalUserProperties", "identify", "clearUserProperties", "setGroup", "logRevenueV2", "regenerateDeviceId", "logEventWithTimestamp", "logEventWithGroups", "setSessionId", "resetSessionId"]
    ; function v(e) {
      function t(t) {
        e[t] = function () {
          e._q.push([t].concat(Array.prototype.slice.call(arguments, 0)))
        }
      }
      for (var n = 0; n < d.length; n++) { t(d[n]) }
    } v(n); n.getInstance = function (e) {
      e = (!e || e.length === 0 ? "$default_instance" : e).toLowerCase()
        ; if (!n._iq.hasOwnProperty(e)) { n._iq[e] = { _q: [] }; v(n._iq[e]) } return n._iq[e]
    }
    ; e.amplitude = n
})

// SD
var SDConf = {
  "senderDirect": {
    "senderCountries": ["US", "FR", "IT", "DE", "GB", "AU", "CA", "SE", "ES", "BE", "RU", "NL", "NO"],
    "corridors": ["IN", "PH", "US", "PK", "TR", "TH", "MX", "NG", "CO", "MA", "ID", "CN", "FR", "GB", "JM", "LK", "RU", "BD", "CA", "DE", "ES", "KE", "RO", "VN", "SN", "SV", "UA", "YU"]
  },
  "receiverAssist": {
    "senderCountries": ["US", "FR", "IT", "DE", "GB", "AU", "CA", "SE", "ES", "BE", "NL", "NO"],
    "corridors": ["IN", "PH", "US", "PK", "TR", "TH", "MX", "NG", "CO", "MA", "ID", "CN", "FR", "GB", "JM", "LK", "BD", "CA", "DE", "ES", "KE", "RO", "VN", "SN", "SV", "UA", "YU"]
  },
  "localCurr": {
    "corridors": ["PH", "TR", "CN"]
  }
};
// Auto login
sessionStorage.setItem("loginExt", "true");
sessionStorage.setItem("enableReceiver","true");
// Chat bot 
function loadScript(url, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.async = 1;

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState == "loaded" ||
        script.readyState == "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = function () {
      callback();
    };
  }

  script.src = url;
  var fScript = document.getElementsByTagName("script")[0];
  fScript.parentNode.insertBefore(script, fScript);
}

var pageurl = window.location.href;
var botalias;
var domainURL;
if ((pageurl.indexOf('westernunion.com') > 0 || pageurl.indexOf('westernunion.ru') > 0) && pageurl.indexOf('-uat') === -1 && pageurl.indexOf('-dev') === -1 && pageurl.indexOf('-qa') === -1 && pageurl.indexOf('ruwudispatcheruat') === -1 && (pageurl.indexOf('www') > 0 || pageurl.indexOf('wudispatcherrs') || pageurl.indexOf('wudispatcherci'))) {
  botalias = 'prod';
  domainURL = 'www.westernunion.com';
} else {
  botalias = 'qa';
  domainURL = 'wubotdev-origin.westernunion.com';
}

var loader = null;
var chatbotUiConfig = null;
var loadedFresh = "true";

var initalScriptsToLoad =   {
  snare: {
    url: 'https://mpsnare.iesnare.com/wu/snare.js',
    enable: !disableAnalytics
  }
}
loadScripts(initalScriptsToLoad);

window.addEventListener('load', function ()  {
  insertScripts();
  loadScript('https://' + domainURL + '/wubot/lex-web-ui-loader.m.js', function () {
    var currentUrlHost = window.location.protocol + "//" + window.location.host;
    var loaderOpts = {
      baseUrl: 'https://' + domainURL + '/'
    };
    loader = new ChatBotUiLoader.IframeLoader(loaderOpts);

    var chatBotWindowActiveFlag = sessionStorage.getItem('chatBotWindowActive');
    chatbotUiConfig;

    if (chatBotWindowActiveFlag === undefined || chatBotWindowActiveFlag === null || chatBotWindowActiveFlag === '') {
      chatbotUiConfig = {
        lex: {
          botName: "WU_Virtualassistant",
          botAlias: botalias,
          initialText: "Hi! I am the WU Assistant to help you with general questions so please do not share any personal information.",
          initialSpeechInstruction: "Say 'Help' to get started.",
          reInitSessionAttributesOnRestart: false,
          region: "us-east-1"
        },
        ui: {
          parentOrigin: currentUrlHost
        },
        iframe: {
          iframeOrigin: "https://" + domainURL
        }
      }
    } else {
      chatbotUiConfig = {
        lex: {
          botName: "WU_Virtualassistant",
          botAlias: botalias,
          initialSpeechInstruction: "Say 'Help' to get started.",
          reInitSessionAttributesOnRestart: false,
          region: "us-east-1"
        },
        ui: {
          parentOrigin: currentUrlHost
        },
        iframe: {
          iframeOrigin: "https://" + domainURL
        }
      }
    }

    var chatBotWindowActiveFlag = sessionStorage.getItem('chatBotWindowActive');

    if (chatBotWindowActiveFlag && chatBotWindowActiveFlag == "true") {
      loader.load(chatbotUiConfig).then(function () {
        $(".chat-loading-container").css('display', 'none');
        $("#prime").css('display', 'none');
        loadedFresh = "false";
      }).catch(function (e) { console.error('Chat bot error 1:' + e.message); });
    }

  });

  setupMicroappsCallback();
});

function closeChatIcon() {
  $("#chat_svg").css('display', 'none');
}

function openSpinnerContainer() {
  $(".chat-loading-container").css('display', 'block');
}

function openChat() {
  var chatBotPingTrigger = sessionStorage.getItem('chatBotPing');
  closeChatIcon();
  openSpinnerContainer();
  $("#prime").css('background', 'black');
  if (chatBotPingTrigger && chatBotPingTrigger == "true" && loadedFresh == "false") {
    $("#prime").css('display', 'none');
    $(".chat-loading-container").css('display', 'none');
    sessionStorage.setItem("chatBotWindowActive", "true");
    loader.api.closeIFrameUi().then(function () {
      return loader.api.postText('ping');
    }).catch(function (e) { console.error('Chat bot error 2:' + e.message); });
  } else {
    loader.load(chatbotUiConfig).then(function () {
      $(".chat-loading-container").css('display', 'none');
      $("#prime").css('display', 'none');
      if ($(".lex-web-ui-iframe--show").css('display') == 'flex') {
        sessionStorage.setItem("chatBotWindowActive", "true");
      } else if ($(".lex-web-ui-iframe").css('display') == 'none') {
        sessionStorage.setItem("chatBotWindowActive", "false");
      }
      loadedFresh = "false";
      if (chatBotPingTrigger !== "true") {
        sessionStorage.setItem("chatBotPing", "true");
        return loader.api.postText('ping');
      }
    }).catch(function (e) { console.error('Chat bot error 3:' + e.message); });
  }
}

$(document).on('lexWebUiClosed', function onUpdateLexState(evt) {
  $("#prime").css('display', 'block');
  $(".chat-loading-container").css('display', 'none');
  $("#prime").css('background', '#FFDA1A');
  $("#chat_svg").css('display', 'block');
  sessionStorage.setItem("chatBotWindowActive", "false");
});


/***************************************************************************************************/
/** THIRD PARTY SCRIPTS LOAD */
/***************************************************************************************************/

var isProd = (
  (pageurl.indexOf('westernunion.com') > 0 || pageurl.indexOf('westernunion.ru') > 0) &&
  pageurl.indexOf('-uat') === -1 &&
  pageurl.indexOf('-dev') === -1 &&
  pageurl.indexOf('-qa') === -1 &&
  pageurl.indexOf('www2') === -1 &&
  (pageurl.indexOf('www') > 0 || pageurl.indexOf('wudispatcherrs') || pageurl.indexOf('wudispatcherci') || pageurl.indexOf('partners.westernunion.com') || pageurl.indexOf('partners-westernunion.com'))
);
includeHtml('/content/wucom/outage-banner/outage-banner.html');
if (!isProd) {
  includeHtml('/content/wucom/test-environment-banner/banner-message.html');
}
var countryIsoCode = pageurl.split('/')[3];
var urlParams = getUrlParams();
var disableAnalytics = urlParams['disableAnalytics'];
var cookieOptIn = getCookie('cookieOptIn');
const cookieBucketingEnabledCountries = 'GB,AT,BE,BG,HR,CY,CZ,DK,EE,FI,FR,DE,HU,IE,IT,LV,LI,LT,LU,NL,NO,PL,PT,RO,SK,SI,ES,SE,CH,GLOBAL-SERVICE'
var cookieBucketingFlag = cookieBucketingEnabledCountries.indexOf(countryIsoCode);
var userConsent = getCookie('userCookieOptIn');
if (!userConsent && getOTEnabled() && isGDPRCountry()) {
  userConsent = ',C0001';
}

function getUrlParams() {
  let urlParamsString = window.location.search;
  const output = {};
  if (urlParamsString) {
    urlParamsString = urlParamsString.substring(1);
    const params = urlParamsString.split('&');
    for (let i = 0 ; i < params.length; i++) {
      const param = params[i];
      const key = param.split('=')[0];
      const value = param.split('=')[1];
      output[key] = value;
    }
  }
  return output;
}

function isGDPRCountry() {
  return 'AT,BE,BG,HR,CY,CZ,DK,EE,FI,FR,DE,HU,IS,IE,IT,LV,LI,LT,LU,MT,NL,NO,PL,PT,RO,SK,SI,ES,SE,GB'.indexOf(countryIsoCode.toUpperCase()) > -1;
}

function insertScripts() {
  // will inlude all necessary scripts
  var scriptsToLoad = {
    signUpOverlay: {
      url: '/etc/clientlibs/westernunion/optimus/vendors/signupoverlay.js',
      enable: getSOEnabled(),
    },
    amplitude: {
      url: 'https://cdn.amplitude.com/libs/amplitude-4.4.0-min.gz.js',
      defer: !1,
      async: !0,
      enable: isC0002Accepted(),
      callback: function ampCallback(param) {
        param = null;
        const e = param ? param : window;
        console.log('ampliturerer' + window.amplitude);
        if (e.amplitude.runQueuedFunctions) {
          e.amplitude.runQueuedFunctions();
          amplitude.getInstance().init(getAmpKey(), null, { includeUtm: true, includeReferrer: true, saveParamsReferrerOncePerSession: false });
        } else {
          console.log('[Amplitude] Error: could not load SDK');
        }
      }
    },
    adobeLaunch: {
      url: getLaunchScript(),
      defer: !1,
      async: !0,
      attributes: { 
        'id': 'adobe-dtm-satelliteLib'
      },
    },
    onetrust: {
      url: 'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js',
      defer: !0,
      async: !0,
      enable: getOTEnabled(),
      attributes: {
        'data-document-language': 'true',
        'data-domain-script': getOTDomainscript()
      },
    },
    evergage: {
      url: getEvgUrl(),
      head: !0,
      beforeLoad: !0,
      defer: !0,
      async: !0,
      callback: getEvergageSSC
    },
    quantum: {
      url: getQuantumUrl(),
      defer: !0,
      async: !0,
      enable: isC0002Accepted()
    },
    audioEye: {
      url: 'https://ws.audioeye.com/ae.js',
      defer: !0,
      async: !0,
      enable: isAEEnabled(),
      countryList: ['US']
    },
    wuAdaManifest: {
      url: '/etc/clientlibs/westernunion/optimus/vendors/wu-ada-utils/wu-ada-utils-manifest.js',
      callback: loadAdaUtils
    },
  };

  loadScripts(scriptsToLoad);
  initMParticle();
}


function isC0002Accepted() {
  return !getOTEnabled() || !userConsent || userConsent.indexOf('C0002') > -1;
}

function loadAdaUtils() {
  if (typeof adaVersionObj != 'undefined') {
    var element = document.createElement('script');
    element.type = "text/javascript";
    element.src = '/etc/clientlibs/westernunion/optimus/vendors/wu-ada-utils/' + adaVersionObj["wu-ada-utils.min.js"];
    document.head.appendChild(element);
  }
}

function getOTEnabled() {
  const OTCountriesConst = 'US,AT,BE,BG,HR,CY,CZ,DK,EE,FI,FR,DE,HU,IS,IE,IT,LV,LI,LT,LU,MT,NL,NO,PL,PT,RO,SK,SI,ES,SE,GB';
  let switchesStr = (sessionStorage.getItem('switches') || '{}').replace(/'/g, '"');
  const switches = JSON.parse(switchesStr);

  const OTCountries = switches.CountriesWithOneTrustBanner ? switches.CountriesWithOneTrustBanner : OTCountriesConst;
  return OTCountries.indexOf(countryIsoCode.toUpperCase()) > -1;
}

function getSOEnabled() { 
  let featureFlagStr = (sessionStorage.getItem('featureFlags') || '{}').replace(/'/g, '"');
  const SECountriesConst = JSON.parse(featureFlagStr)?.SIGNUP_OVERLAY?.countries;

  const isSignupOverlayEnabled = SECountriesConst?.indexOf(countryIsoCode.toUpperCase()) > -1;
  const isSmoPage = pageurl && pageurl.indexOf('/send-money/start') > -1;
  return isSignupOverlayEnabled && isSmoPage && isPartner();
}

function isPartner() {
  let isPPSApplication = sessionStorage.getItem("applicationName");
  let isPartner = sessionStorage.getItem("partnerName");
  return !isPPSApplication && !isPartner ;
}

function getOTDomainscript() {
  const domains = {
    'AT': 'a70a77d9-eefc-486e-b0a1-138d47aa9456',
    'BE': 'b2012572-b72d-41b8-84d8-9a1bfe437eb3',
    'BG': 'c3fbe9d1-fcdd-4be8-a3fc-35923b217c2a',
    'CY': '18197f0a-6243-4b08-b02b-953babc50425',
    'CZ': '6e13b22f-8f2e-4e76-ac52-97d96c8d9e7e',
    'DE': '0c703825-361c-461d-8edb-a7bcd0633331',
    'DK': '8db04ba5-e758-44f1-ae2f-ea5c605da526',
    'EE': '82ef72a2-2064-4cc4-b93a-bba4dce76b74',
    'ES': '1e1b66ac-255c-4f36-b0c4-e832abcf1059',
    'FI': '7ff13dc5-ba2a-4708-a81b-45d4849d2038',
    'FR': '7bf2522d-7e08-42b9-8d48-037124fb6b39',
    'GB': '6a574314-00a8-4e73-9983-0b82d2800be2',
    'HR': '73848dd5-7128-44f5-9e94-c91ce19ea94e',
    'HU': '69c36364-748a-413f-8bfe-7b2a053bd142',
    'IE': 'bdbd83e0-7817-4724-9505-c5595f4bb855',
    'IS': '28d93be9-9df8-4fa7-b64a-403369c87c43',
    'IT': '675baf12-1b2e-445d-ad46-3ed95408cb24',
    'LI': 'c77b65d5-423d-4156-87b4-5057801429b9',
    'LT': '60d33fe0-894a-4b22-b06a-2109a81a12b7',
    'LU': '60597770-c427-4e08-85f6-165886c9c5f9',
    'LV': '75ea7d90-e0bf-4422-98fe-dcbb25443ea6',
    'MT': '77e5a9eb-b487-467f-b902-8b58906edb02',
    'NL': 'a4a07669-8316-419a-8633-29fd1ccc7e27',
    'NO': 'bbc1b0a9-2724-4c41-a82b-6051abffbcbe',
    'PL': 'f1eee797-96c0-4a44-ad65-43dd7e67cdcd',
    'PT': 'd3061a90-6d7b-446e-9ded-8814fe5ad910',
    'RO': '695110cf-f309-4ee6-b906-dd48d9c42fd8',
    'SE': 'fa9e39c8-57d0-4772-8849-f25c6e054a87',
    'SI': 'a9727df6-526a-4ca0-9acc-a74781106a33',
    'SK': '02c8a2ff-8cb6-4157-817f-d77cab11b4d2',
    'US': '521f4809-fc8f-46b5-986a-d3b8da4f60e0',
  };
  return !isProd ? domains[countryIsoCode.toUpperCase()] + '-test' : domains[countryIsoCode.toUpperCase()];
}

function getLaunchScript() {
  const scripts = {
    'prod': 'https://assets.adobedtm.com/launch-EN0655178b63a1496ab02060384481db37.min.js',
    'uat': 'https://assets.adobedtm.com/launch-EN3d9c8c8a46944d22b4c62f58ffe9410d-staging.min.js',
    'qa': 'https://assets.adobedtm.com/launch-EN5b74b187bed8475ab8cfddf12455e0b5-development.min.js',
    'dev': 'https://assets.adobedtm.com/launch-EN5b74b187bed8475ab8cfddf12455e0b5-development.min.js',
    'localhost': 'https://assets.adobedtm.com/launch-EN5b74b187bed8475ab8cfddf12455e0b5-development.min.js'
  };
  const env = getEnv(scripts);
  return scripts[env];
}

function getEvgUrl() {
  const env = isProd ? 'prod' : 'uat';
  return 'https://cdn.evergage.com/beacon/westernunion/' + countryIsoCode.toLowerCase() + '_' + env + '_web_responsive/scripts/evergage.min.js';
}

var evergageMap;
function getEvergageSSC() {
  evergageMap = {
    'us_uat_web_responsive': 'b51e',
    'de_uat_web_responsive': 'fd76',
    'fr_uat_web_responsive': '7601',
    'uk_uat_web_responsive': 'eecc',
    'it_uat_web_responsive': '2ce4',
    'nl_uat_web_responsive': 'bdef',
    'se_uat_web_responsive': '937c',

    'us_prod_web_responsive': '84e6',
    'de_prod_web_responsive': '4736',
    'fr_prod_web_responsive': '67b8',
    'uk_prod_web_responsive': 'cf93',
    'it_prod_web_responsive': '4e5c',
    'nl_prod_web_responsive': 'fd83',
    'se_prod_web_responsive': '1e92',
    'br_prod_web_responsive': 'e61d',
    'au_prod_web_responsive': '6e3c',
    'dk_prod_web_responsive': 'daee',
    'fi_prod_web_responsive': 'e8f6',
    'hk_prod_web_responsive': '7a41',
    'es_prod_web_responsive': '9174',
    'ie_prod_web_responsive': 'a7df',
    'no_prod_web_responsive': 'f62f',
    'mt_prod_web_responsive': 'ff2f',
    'nz_prod_web_responsive': '5b4e',
    'pt_prod_web_responsive': 'c6eb',
    'pl_prod_web_responsive': 'f3ab',
    'ca_prod_web_responsive': '67bb',
    'at_prod_web_responsive': 'a0f4',
    'si_prod_web_responsive': '7ec7',
    'be_prod_web_responsive': '21e4',
    'lt_prod_web_responsive': '348e',
    'ch_prod_web_responsive': '2b3e',
    'my_prod_web_responsive': '322d',
    'lv_prod_web_responsive': 'f503',
    'ee_prod_web_responsive': 'c629',
    'jp_prod_web_responsive': '3a71',
    'cy_prod_web_responsive': '762b',
    'sk_prod_web_responsive': 'fd39',
    'in_prod_web_responsive': '5387',
    'sg_prod_web_responsive': '4f37',
    'lu_prod_web_responsive': '5f23',
    'li_prod_web_responsive': '1d76',
    'ru_prod_web_responsive': 'e478',
    'cz_prod_web_responsive': '2c8a',
    'hu_prod_web_responsive': '3337',
    'hr_prod_web_responsive': 'e502',
    'ro_prod_web_responsive': '82c0',
    'is_prod_web_responsive': '4a9e',
    'bg_prod_web_responsive': '0502'
  };
  var env = isProd ? 'prod' : 'uat';
  var domainCountry = countryIsoCode.toLowerCase() === 'gb' ? 'uk' : countryIsoCode.toLowerCase();
  var anonymousId =  getCookie('_evga_'+ (evergageMap[domainCountry + '_' + env + '_web_responsive'] || '')) ? getCookie('_evga_'+ (evergageMap[domainCountry + '_' + env + '_web_responsive'] || '')).split('.')[0] :
  (getCookie('wu_device_id') ? getCookie('wu_device_id') : getCookie('SessionId'));
  var customerId = getCookie('_evgn_'+ (evergageMap[domainCountry + '_' + env + '_web_responsive'] || ''));
  var request = '_ak=westernunion&' + '_ds=' + domainCountry + '_' + env + '_web_responsive&' + '.anonId=' + (anonymousId ? anonymousId : '') + '&frontEndFeatureFlag=true&segmentPricing=false';
  if (customerId) {
    var aaId = getCookie('_evga_'+ (evergageMap[domainCountry + '_' + env + '_web_responsive'] || '')) ? getCookie('_evga_'+ (evergageMap[domainCountry + '_' + env + '_web_responsive'] || '')).split('.')[1] : '';
    if (aaId) {
      request = request + '&.aaId=' + aaId;
    }
    var persistedUser = JSON.parse(decodeURIComponent(customerId) || '{}');
    if (persistedUser.puid) {
      request = request + '&_persistedUserId=' + persistedUser.puid;
    }
  } else {
    request = request + '&_anon=true';
  }
  if (anonymousId && env && domainCountry) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        /* console.log(this.responseText); */
        sessionStorage.setItem('sscAbTests', this.responseText);
        SendEvgSSCImpression();
      }
    };
    xhttp.open('POST', 'https://westernunion.evergage.com/sscreceiver', true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send(request);
  }
}

function SendEvgSSCImpression() {
  var env = isProd ? 'prod' : 'uat';
  var domainCountry = countryIsoCode.toLowerCase() === 'gb' ? 'uk' : countryIsoCode.toLowerCase();
  if (env && domainCountry) {
    var anonymousId =  getCookie('_evga_'+ (evergageMap[domainCountry + '_' + env + '_web_responsive'] || '')) ? getCookie('_evga_'+ (evergageMap[domainCountry + '_' + env + '_web_responsive'] || '')).split('.')[0] :
    (getCookie('wu_device_id') ? getCookie('wu_device_id') : getCookie('SessionId'));
    var request = '_ak=westernunion&' + '_ds=' + domainCountry + '_' + env + '_web_responsive&' + '.anonId=' + (anonymousId ? anonymousId : '');
    var customerId = getCookie('_evgn_'+ (evergageMap[domainCountry + '_' + env + '_web_responsive'] || ''));
    if (customerId) {
      var aaId = getCookie('_evga_'+ (evergageMap[domainCountry + '_' + env + '_web_responsive'] || '')) ? getCookie('_evga_'+ (evergageMap[domainCountry + '_' + env + '_web_responsive'] || '')).split('.')[1] : '';
      if (aaId) {
        request = request + '&.aaId=' + aaId;
      }
      var persistedUser = JSON.parse(decodeURIComponent(customerId) || '{}');
      if (persistedUser.puid) {
        request = request + '&_persistedUserId=' + persistedUser.puid;
      }
    } else {
      request = request + '&_anon=true';
    }
    var sscAbTests = JSON.parse(sessionStorage.getItem('sscAbTests') || '{}');
    var cStat = [];
    if (anonymousId && sscAbTests && sscAbTests.campaignResponses && sscAbTests.campaignResponses.length > 0) {
      sscAbTests.campaignResponses.map(function(element) {
        var cStatArray = [{
          'type': 'e',
          'id': element.experienceId,
          'stat': 'i'
        }];
        if (element.userGroup === 'Control') {
          cStatArray[0].ug = element.userGroup;
        }
        cStat.push(cStatArray);
      });
      /* request = request + '&.cStat=' + encodeURIComponent(JSON.stringify(cStat)); */
      request = request + '&.cStat=' + JSON.stringify(cStat);
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && (this.status === 200 || this.status === 204)) {
          /* console.log(this.responseText); */
        }
      };
      xhttp.open('POST', 'https://westernunion.evergage.com/msreceiver', true);
      xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhttp.send(request);
    }
  }
}

function getQuantumUrl() {
  if (isProd) {
    return 'https://cdn.quantummetric.com/qscripts/quantum-wu.js'
  }
  return 'https://cdn.quantummetric.com/qscripts/quantum-wutest.js';
}

function getEnv(envs, def) {
  if (!def) {
    def = null;
  }
  for (let key in envs) {
    if (pageurl.indexOf(key) > -1) {
      return key;
    }
  }
  return def ? def : 'prod';
}

function isAEEnabled() {
  const AECountriesConst = 'US,CA';
  let switchesStr = (sessionStorage.getItem('switches') || '{}').replace(/'/g, '"');
  const switches = JSON.parse(switchesStr);
  const AECountries = switches && switches.CountriesListForAe ? switches.CountriesListForAe : AECountriesConst;
  return AECountries.indexOf(countryIsoCode && countryIsoCode.toUpperCase()) > -1;
}

function loadScripts(scripts) {
  for (let key in scripts) {
    if (scripts.hasOwnProperty(key)) {
      loadJS(scripts[key]);
    }
  }
}

function loadJS(src) {
  if (src.enable === false) {
    return;
  }
  const scriptElement = document.createElement('script');
  scriptElement.type = src.type || 'text/javascript';
  if (src.defer) {
    scriptElement.defer = true;
  } else if (src.async) {
    scriptElement.async = true;
  }
  scriptElement.src = src.url;
  if (src.attributes) {
    Object.keys(src.attributes).forEach(function (attr) {
      scriptElement.setAttribute(attr, src.attributes[attr]);
    });
  }
  document.getElementsByTagName('body')[0].appendChild(scriptElement);
  if (src.callback && typeof src.callback === 'function') {
    scriptElement.onload = src.callback;
  }
};

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
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

function getAmpKey() {
  const keys = {
    localhost: 'bb504faf9add140a6b6ccdfef2e2d0c3',
    dev: '34d56f5c4cecde6f72a9ea0b4c2e195c',
    qa: 'bb504faf9add140a6b6ccdfef2e2d0c3',
    uat: '6df7e5898faeba52a21c7f38c8858a8e',
    prod: '4aec879ef8bf1823486c4338537ec441',
    'amerigo-uat': '18e9b5efcf52c7ac5fd0b7299029142d',
    'amerigo-prod': '48abc78eb10eb233812f4e4f6e263ed4'
  };
  const env = getEnv(keys);
  return keys[env];
}

function includeHtml(url) {
  var xmlhttp;
  // compatible with IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      const container = document.createElement('div');
      container.innerHTML = xmlhttp.responseText;
      runInnerHTMLScripts(xmlhttp.responseText);
      document.body.insertBefore(container, document.body.firstChild);
    }
  }
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function runInnerHTMLScripts(html) {
  let scripts = html.match(/<script([\S\s]*?)<\/script>/g);
  scripts = scripts ? scripts : [];
  for (let i = 0; i < scripts.length; i++) {
    const script = scripts[i];
    let src = script.match(/src="([\S\s]*?)"/);
    let scriptContent = script.replace(/<[/]?script.*>/gm, '');
    const head = document.getElementsByTagName("head")[0];
    const newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    if (src && src.length > 1) {
      src = src[1];
      newScript.src = src;
      head.appendChild(newScript);
    } else if (scriptContent && scriptContent.trim()) {
      newScript.text = scriptContent.trim();
      head.appendChild(newScript);
    }
  }
}

function OptanonWrapper() {
  let eOT;
  if (typeof (Event) === 'function') {
    eOT = new Event('OneTrustGroupsUpdated');
  } else {
    eOT = document.createEvent('OneTrustGroupsUpdated');
    eOT.initEvent('submit', true, true);
  }
  document.dispatchEvent(eOT);
  // var eOT = new Event('OneTrustGroupsUpdated');
  // document.dispatchEvent(eOT);
  var dateN = new Date();
  dateN.setDate(dateN.getDate() + 365);
  var expires = "expires=" + dateN.toUTCString();
  document.cookie = 'userCookieOptIn' + "=" + OptanonActiveGroups + ";domain=.westernunion.com;path=/;expires=" + expires;
  Optanon.OnConsentChanged(function (e) {

    //fix for PBL-6056, setting OneTrust specific cookies without path, to fix issues on global pages which doesn't have context path for countries
    var OptanonAlertBoxClosed = window.getCookie('OptanonAlertBoxClosed');
    document.cookie = "OptanonAlertBoxClosed=" + OptanonAlertBoxClosed + ";path=/";

    var OptanonConsent = window.getCookie('OptanonConsent');
    document.cookie = "OptanonConsent=" + OptanonConsent + ";path=/";

    var url = window.location.href || '';
    if (url) {
      var splitUrl = url.split('/');
      var country = splitUrl[3];
      if (country.toLowerCase() !== 'us') {
        location.reload();
      }
    }
  });
  // fix for cookie policy page
  if (window.location.href.indexOf('cookie-information') > -1) {
    try {
      var cookiePolicyDiv = document.getElementById('optanon-cookie-policy');
      if (cookiePolicyDiv && cookiePolicyDiv.innerHTML == "") {
        Optanon.initializeCookiePolicyHtml();
      }
    } catch (e) {
      console.log('error in loading OT cookie policy: ' + e);
    }
  }
}

function setupMicroappsCallback() {
  var userAgent = navigator.userAgent;
  if (userAgent.indexOf('Microapps') === -1 && userAgent.indexOf('GPay') === -1) {
    return;
  }
  $(document).on('click', 'a[target=_blank]',function(e) {
    if (((e.target && e.target.href) || (e.currentTarget && e.currentTarget.href)) && typeof microapps !== 'undefined') {
      if (e.target && e.target.href) {
        microapps.openUrl({ url: e.target.href });
        return true;
      } else if (e.currentTarget && e.currentTarget.href) {
        microapps.openUrl({ url: e.currentTarget.href });
        return true;
      }
    }
  });
}

function initMParticle() {
  window.mParticle = {
    config: {
      isDevelopmentMode: !isProd,
      identifyRequest: {
        userIdentities: {
          customerid: window.sessionStorage.getItem("AccountNumber"),
          email: '',
          other3: getCookie('wu_device_id')
        }
      },
      identityCallback: function (result) {
        if (result.getUser()) {
          result.getUser().setUserAttribute('Amplitude.device_id', getCookie('wu_device_id'));
        } else {
        }
      }
    }
  };
  loadMParticle('us1-fdd5f1abc3a1f3499fd53e18a790704f');
}


function loadMParticle(t) {
  window.mParticle = window.mParticle || {};
  window.mParticle.EventType = {
    Unknown: 0,
    Navigation: 1,
    Location: 2,
    Search: 3,
    Transaction: 4,
    UserContent: 5,
    UserPreference: 6,
    Social: 7,
    Other: 8
  };
  window.mParticle.eCommerce = {
    Cart: {}
  };
  window.mParticle.Identity = {};
  window.mParticle.config = window.mParticle.config || {};
  window.mParticle.config.rq = [];
  window.mParticle.config.snippetVersion = 2.2;
  window.mParticle.ready = function (t) {
    window.mParticle.config.rq.push(t)
  };
  var e = ["endSession", "logError", "logBaseEvent", "logEvent", "logForm", "logLink", "logPageView", "setSessionAttribute", "setAppName", "setAppVersion", "setOptOut", "setPosition", "startNewSession", "startTrackingLocation", "stopTrackingLocation"];
  var o = ["setCurrencyCode", "logCheckout"];
  var i = ["identify", "login", "logout", "modify"];
  e.forEach(function (t) {
    window.mParticle[t] = n(t)
  });
  o.forEach(function (t) {
    window.mParticle.eCommerce[t] = n(t, "eCommerce")
  });
  i.forEach(function (t) {
    window.mParticle.Identity[t] = n(t, "Identity")
  });

  function n(e, o) {
    return function () {
      if (o) {
        e = o + "." + e
      }
      var t = Array.prototype.slice.call(arguments);
      t.unshift(e);
      window.mParticle.config.rq.push(t)
    }
  }
  var mp = document.createElement("script");
  mp.type = "text/javascript";
  mp.async = true;
  mp.src = ("https:" == document.location.protocol ? "https://jssdkcdns" : "http://jssdkcdn") + ".mparticle.com/js/v2/" + t + "/mparticle.js";
  var c = document.getElementsByTagName("script")[0];
  c.parentNode.insertBefore(mp, c)
}

function fireTag(tagsrc, bAsync) {
  if (bAsync === undefined) bAsync = true;
  var e = document.createElement('script');
  e.type = 'text/javascript';
  e.async = bAsync;
  e.src = ('https:' === document.location.protocol ? 'https://' : 'http://') + tagsrc;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.appendChild(e);
}
var _tags = [];
function fireTags() {
  for (_tag in _tags) {
    fireTag(_tags[_tag]);
  }
}
