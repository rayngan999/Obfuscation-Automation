/**
 * Copyright 2016 Western Union Holdings, Inc. All Rights Reserved.
 * Reproduction or use of this file without explicit
 * written consent is prohibited.
 * Created by jubin jose on 03/31/16.  :)
 * just udpated.....
 */

// make this boolean to true to turn of DTM
var disableAnayltics = false;
var country = '';
var language = '';
var platform = '';
var releaseVersion = '';
var dataCenter = '';
var loginState = "NotLoggedIn";
var transactionPagesArr = ['start', 'sm-login', 'receiver', 'payment', 'globalcollectid', 'fxthreshold', 'review', 'confirmbank-pwmb', 'paymentprocessing', 'receipt', 'decline', 'sendagain', 'progress', 'kycoptions', 'kycoption-verify'];
sessionStorage.setItem("pageLoadDTMRefresh", 'pageReload');

/**
 *  Preload function to set the default variables
 */
// Function to set the country and language global variable
setCountryAndLanguage();
// Function to set the platform related details.
setPlatformDetails();

function loadPageViewEvents() {
  analyticsObject = {
    sc_country: country,
    sc_language: language,
    sc_platform: platform,
    sc_url: window.location.href,
    sc_release: releaseVersion
  };
  //setting data center value only in case if it is valid, fix for PBL-3936
  if (dataCenter && dataCenter !== 'N') {
    analyticsObject.sc_data_center = dataCenter;
  }
  //function to capture the user session id and channel
  setUserSessionIdAndChannel();
  //function to capture the user logged in Status
  setUserLoggedInStatus();
  //function to capture if it is a Single Sign On
  captureSSOStatus();
  // function to capture the sections
  setAnalyticsSections();
  //function to capture the marketing tags to analyticsObject
  captureMarketingTags();
  //function to update user verification status in analyticsObject
  updateAnalyticObjectVerStatus();
  // capture last error
  captureLastError();
  // capture if user recently verified
  captureRecentlyVerified();
  // capture if user recently failed verification
  captureRecentlyFailedVerification();
  // capture if user successfully completes mailkit
  captureLetterSent();
  //function to update successful registration status
  registrationSuccess();
  //function added to check the page refresh logic and set attrubute
  checkPageRefreshforAnalytics();
  capturethirdPartyConsentAnalytics();
}


/**
 * This function is load the get the cookie value in our application
 */

function dtmGetCookie(cookieName) {
  var cookieFromStorage = getCookieFromSessionStorage(cookieName);
  if (cookieFromStorage != "") return cookieFromStorage;
  var i, key, value, cookiesArray = document.cookie.split(";");
  for (i = 0; i < cookiesArray.length; i++) {
    key = cookiesArray[i].substr(0, cookiesArray[i].indexOf("="));
    value = cookiesArray[i].substr(cookiesArray[i].indexOf("=") + 1);
    key = key.replace(/^\s+|\s+$/g, "");
    if (key == cookieName && value !== "") {
      return decodeURIComponent(value);
    }
  }
}

/**
 * This function is to load the cookie value from session storage where cookies are not accessible
 */
function getCookieFromSessionStorage(name) {
  var cookiestore = window.sessionStorage.getItem("cookiestore");
  var cookiestoreObj = JSON.parse(cookiestore);
  if (cookiestoreObj && cookiestoreObj[name]) {
    return cookiestoreObj[name];
  }
  return "";
}

/**
 * This function is to set the cookie to our application
 */

function dtmSetCookie(name, value, path, domain, days, host) {
  storeCookieInSessionStorage(name, value);
  var docdomain = document.domain.split('.');
  var dom1 = "";
  if (typeof(docdomain[docdomain.length - 2]) != 'undefined') {
    dom1 = docdomain[docdomain.length - 2] + '.';
  }
  var domainname = dom1 + docdomain[docdomain.length - 1];
  var optionCookie = dtmGetCookie("CookieOptIn");
  var timeExpired = days;
  if (optionCookie && optionCookie.indexOf("CKMKTG") === -1) {
    timeExpired = null;
  }
  var cookie = name + "=" + value + ";";
  if (timeExpired) {
    var expDate = new Date();
    expDate.setDate(expDate.getDate() + parseInt(timeExpired));
    cookie += "Expires=" + expDate.toGMTString() + ";";
  }
  if (path) {
    cookie += "path=" + path + ";";
  }
  if (domain) {
    cookie += "Domain=" + domain + ";";
  } else if (domainname !== "localhost" && isNaN(parseInt(domainname.charAt(0)))) {
    // handle domain is not localhost and ip address
    cookie += "Domain=" + domainname + ";";
  }
  if (domainname !== ".westernunion.com") {
    cookie += "host=" + window.location.host + ";";
  }
  if (window.location.protocol.indexOf("https") !== -1) {
    cookie += "secure;";
  }
  document.cookie = cookie;
  return cookie;
}

/**
 * This function is to store the cookie in session storage to use where cookies are not accessible
 */
function storeCookieInSessionStorage(name, value) {
  var cookiestore = window.sessionStorage.getItem("cookiestore");
  var jcookiestore = {};
  if (cookiestore) {
    try {
      jcookiestore = JSON.parse(cookiestore);
    } catch (e) {
      jcookiestore = {};
    }
    jcookiestore[name] = value;
  } else {
    jcookiestore = {};
    jcookiestore[name] = value;
  }
  window.sessionStorage.setItem("cookiestore", JSON.stringify(jcookiestore));
}

function getURLParam(name) {
  var urlParams = location.search || location.hash;
  var returnValue = decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(urlParams) || [, ""])[1].replace(/\+/g, '%20')) || null
  if (returnValue !== undefined && returnValue !== null) {
    returnValue = returnValue.trim();
  }
  return returnValue;
}

/**
 * This function set the country and language values in cookie
 * Cookie names set WUCountryCookie_ , WULanguageCookie_
 * This function will set the global varilable country and language
 */

function setCountryAndLanguage() {

  var path, pathArray;
  var fullPath = window.location.href;
  path = window.location.pathname;
  pathArray = path.split("/");
  if (path.indexOf("content") !== -1) {
    country = pathArray[4];
    language = pathArray[5];
  } else {
    country = pathArray[1];
    language = pathArray[2];
  }
  if (country.length > 2) {
    country = "";
    // first preference to URL params
    if (!country) country = getURLParam("WUCountry");

    // else adopt the cookies from wu.com web
    if (!country) country = dtmGetCookie("WUCountryCookie_");

    // default to Akamai cookies otherwise us, en as defaults if there is no country language preferences
    if (!country) country = dtmGetCookie("AKCountry") ? dtmGetCookie("AKCountry") : "US";
  }
  if (!language || language.length > 2) {
    language = "";
    if (!language) language = getURLParam("WULanguage");
    if (!language) language = dtmGetCookie('WULanguageCookie_');
    if (!language) language = "en";
  }
  country = country.toUpperCase();
  //UK is not iso code; changed to GB;
  country = country.toUpperCase() === "UK" ? "GB" : country;

  // Added for PBL-327 : Start
  if ((fullPath.indexOf("www.westernunion.com") !== -1) || (fullPath.indexOf("www2.westernunion.com"))
    || (fullPath.indexOf("locations.westernunion.com")) || (fullPath.indexOf("wudispatcher-prv.westernunion.com"))
    || (fullPath.indexOf("wudispatcher-prvc.westernunion.com")) || (fullPath.indexOf("wudispatcher-prvp.westernunion.com"))
    || (fullPath.indexOf("wudispatcherp.westernunion.com")) || (fullPath.indexOf("wudispatcherc.westernunion.com"))
    || (fullPath.indexOf("wudispatcher.westernunion.com")) || (fullPath.indexOf("www3.westernunion.com"))) {
    // PBL - 327 End
    if (dtmGetCookie('WUCountryCookie_') === undefined ||
      dtmGetCookie('WUCountryCookie_') !== language) {
      dtmSetCookie('WUCountryCookie_', country.toUpperCase(), '/', null, '365');
    }
    if (dtmGetCookie('WULanguageCookie_') === undefined ||
      dtmGetCookie('WULanguageCookie_') !== language) {
      dtmSetCookie('WULanguageCookie_', language, '/', null, '365');
    }
  }
}

/**
 * function to set the platform variables
 * this function will set platform, data center value and release version
 */
function setPlatformDetails() {
  window.sessionStorage.setItem("sc_release", "kepler");
  platform = "website";
  dataCenter = window.sessionStorage.getItem("DataCenter");
  releaseVersion = sessionStorage.getItem("contentVersion");
  if (!dataCenter && localStorage.getItem("DataCenter") != undefined &&
    localStorage.getItem("DataCenter") != null && localStorage.getItem("DataCenter") != '') {
    dataCenter = localStorage.getItem("DataCenter");
  } else {
    if (!dataCenter) {
      dataCenter = 'N';
    }
  }
}

/**
 * function to set the loggedin State
 * will set sc_login_state , sc_user_id
 */

function setUserLoggedInStatus() {

  if (sessionStorage.getItem("AccountNumber") == null &&
    dtmGetCookie('AccountNumber') == undefined) {
    loginState = "NotLoggedIn";
  } else {
    loginState = "LoggedIn";
    if (dtmGetCookie('AccountNumber') != undefined) {
      analyticsObject.sc_user_id = dtmGetCookie('AccountNumber');
    } else {
      analyticsObject.sc_user_id = sessionStorage.getItem("AccountNumber");
    }
  }
  analyticsObject.sc_login_state = loginState;
}

/**
 * function to set the Single Sign On status
 */
function captureSSOStatus() {
  if (sessionStorage.getItem("isSSO")) {
    analyticsObject.sc_sso_status = 'true';
  }
}

/**
 * function to set the user session id
 * will set sc_session_id and  sc_channel
 */

function setUserSessionIdAndChannel() {
  var sessionId = '';
  if (dtmGetCookie('SessionId') != undefined &&
    dtmGetCookie('SessionId') != null &&
    dtmGetCookie('SessionId') != '') {
    sessionId = dtmGetCookie('SessionId');
    analyticsObject.sc_session_id = sessionId;
    analyticsObject.sc_channel = sessionId.substring(0, 3);
  }
}

/**
 * function to set the analytics sections
 * will set sc_section, sc_sub_section and sc_sub_sub_section
 */

function setAnalyticsSections() {
  var path = window.location.pathname;
//    var path = window.location.href; // this can be used on local

  var pathArray = path.split("/");
  var section = '';
  var appType = 'send-money';
  if (pathArray !== undefined && pathArray !== null && pathArray !== '') {
    section = pathArray[pathArray.length - 1];
    appType = pathArray[pathArray.length - 3];
    if (pathArray[pathArray.length - 2] == 'errors') {
      section = pathArray[pathArray.length - 2];
      appType = pathArray[pathArray.length - 4];
    }
  }
  if (section !== 'login' && section !== 'register') {
    analyticsObject.sc_service_name = 'moneytransfer';
    analyticsObject.sc_txn_type = 'moneytransfer';
  }
  analyticsObject.sc_page_type = 'responsive';
  var resetpasssuccess = sessionStorage.getItem('resetpass-success');
  if (resetpasssuccess == "true" && analyticsObject.sc_login_state == "LoggedIn") {
    analyticsObject.sc_fp_complete = 'true';
    sessionStorage.removeItem('resetpass-success');
  }
  if (section === 'login') {
    if (appType === 'receive-money') {
      analyticsObject.sc_section = 'pickupcash';
      analyticsObject.sc_sub_section = 'login';
    }
    else
      analyticsObject.sc_section = 'login-rp';
  } else if (section === 'register') {
     sessionStorage.getItem('src') === 'saasquatch' && !sessionStorage.getItem('RAFTnCAccept') ? analyticsObject.sc_section = 'referee' : analyticsObject.sc_section = 'register-rp';
  } else if (section === 'receiver') {
    checkAndSetSendAgainTxnObject(section);
  } else if (section === 'payment') {
    checkAndSetSendAgainTxnObject(section);
  } else if (section === 'review') {
    checkAndSetSendAgainTxnObject(section);
  } else if (section === 'kycConfirmTxn') {
    analyticsObject.sc_section = 'send-money';
    analyticsObject.sc_sub_section = 'kycverificationoptions';
    analyticsObject.sc_sub_sub_section = 'smartphone-confirmtxn';
    directCall('genericdirectcall-rp');
  } else if (section === 'expressregister') {
    analyticsObject.sc_section = 'expressregister';
    analyticsObject.sc_flow_type = 'ExpressRegistration';
    analyticsObject.sc_txn_type = 'register';
  } else if (section === 'reset-password') {
    analyticsObject.sc_section = 'forgot-password-rp';
    analyticsObject.sc_sub_section = 'securityquestion';
  } else if (section === 'tracktransfer' || section === 'track-transfer') {
    analyticsObject.sc_section = 'track-transfer';
    //analyticsObject.sc_sub_section = 'moneyTransfer-tab'; - updated for PBL-2414
    var tracktransfer_InquiryType = sessionStorage.getItem('Tracktransfer_Inquiry_Type');
    var IfnewTrackTransfer = sessionStorage.getItem("IfnewTrackTransfer");
    if (tracktransfer_InquiryType == "MONEY_TRANSFER") {
      if (IfnewTrackTransfer)
        analyticsObject.sc_sub_section = 'sender-tab';
      else
        analyticsObject.sc_sub_section = 'moneytransfer-tab';
    } else if (tracktransfer_InquiryType == "BILL_PAYMENT") {
      if (IfnewTrackTransfer)
        analyticsObject.sc_sub_section = 'receiver_tab';
      else
        analyticsObject.sc_sub_section = 'billpayment-tab';
    } else {
      analyticsObject.sc_sub_section = 'moneytransfer-tab';
    }
    if (sessionStorage.getItem('digitalCancelTransfer') == 'true' && sessionStorage.getItem('isCancelTransfer') == 'true') {
      analyticsObject.sc_canceltxn_status = "canceltxn-displayed";
    }
    analyticsObject.sc_sub_sub_section = null;
    analyticsObject.sc_service_name = 'track-transfer';
    analyticsObject.sc_page_type = 'responsive';
  } else if (section === 'tracktransfersuccess') {
    analyticsObject.sc_section = 'track-transfer';
    var trackingNumber = sessionStorage.getItem('DTM-TrackingNumber');
    var trackingMessageId = sessionStorage.getItem('DTM-TrackingMessageID');
    var cancelViaChat = sessionStorage.getItem('DTM-CancelViaChat');
    var nameChange = sessionStorage.getItem('DTM-NameChange');
    var src = sessionStorage.getItem('DTM-src');

    if (cancelViaChat !== undefined && cancelViaChat !== null && cancelViaChat !== '' && cancelViaChat === 'true' && nameChange !== undefined && nameChange !== null && nameChange !== '' && nameChange === 'true') {
      analyticsObject.sc_link_display = 'cancelchat-enabled|namechange-display';
    } else if (cancelViaChat !== undefined && cancelViaChat !== null && cancelViaChat !== '' && cancelViaChat === 'true') {
      analyticsObject.sc_link_display = 'cancelchat-enabled';
    } else if (nameChange !== undefined && nameChange !== null && nameChange !== '' && nameChange === 'true') {
      analyticsObject.sc_link_display = 'namechange-display';
    }

    if (trackingNumber !== undefined && trackingNumber !== null && trackingNumber !== '') {
      analyticsObject.sc_mtcn = trackingNumber;
      analyticsObject.sc_sub_sub_section = 'status';
    } else {
      analyticsObject.sc_sub_sub_section = null;
    }
    analyticsObject.sc_msg_id = trackingMessageId;
    analyticsObject.sc_src = src;
    //      sessionStorage.removeItem('DTM-TrackingNumber');
    sessionStorage.removeItem('DTM-TrackingMessageID');
    sessionStorage.removeItem('DTM-CancelViaChat');
    sessionStorage.removeItem('DTM-NameChange');
    sessionStorage.removeItem('DTM-src');
    analyticsObject.sc_sub_section = 'moneytransfer-tab';

    analyticsObject.sc_service_name = 'track-transfer';
    analyticsObject.sc_page_type = 'responsive';
  }
  else if (section === 'tracktransferverifypin') {
    var trackingNumber = sessionStorage.getItem('DTM-TrackingNumber');
    var cancelTransfer = sessionStorage.getItem('isCancelTransfer');
    analyticsObject.sc_section = 'name-change';
    analyticsObject.sc_sub_section = 'enter-pin';

    if (trackingNumber !== undefined && trackingNumber !== null && trackingNumber !== '') {
      analyticsObject.sc_mtcn = trackingNumber;
    }
    if (cancelTransfer !== undefined && cancelTransfer !== null && cancelTransfer !== '' && cancelTransfer === 'true') {
      var uniqueId = sessionStorage.getItem('DTM-uniqueId');
      analyticsObject['sc_transaction_id'] = uniqueId;
      analyticsObject.sc_mt_channel = 'retail';
      analyticsObject.sc_section = 'cancel-transfer';
      analyticsObject.sc_sub_section = 'enter-pin';
    }
  }
  else if (section === 'tracktransferverify') {
    sessionStorage.setItem('cancelTransferMobile', 'true');
    var trackingNumber = sessionStorage.getItem('DTM-TrackingNumber');
    var nameChangeEmailMe = sessionStorage.getItem('DTM-nameChangeEmailMe');
    if (nameChangeEmailMe !== undefined && nameChangeEmailMe !== null && nameChangeEmailMe !== '' && nameChangeEmailMe === 'true') {
      analyticsObject.sc_section = 'name-change';
      analyticsObject.sc_sub_section = 'verificationoptions';
      analyticsObject.sc_sub_sub_section = 'email-me';
      sessionStorage.removeItem('DTM-nameChangeEmailMe');
    }
    var nameChangeTextMe = sessionStorage.getItem('DTM-nameChangeTextMe');
    if (nameChangeTextMe !== undefined && nameChangeTextMe !== null && nameChangeTextMe !== '' && nameChangeTextMe === 'true') {
      analyticsObject.sc_section = 'name-change';
      analyticsObject.sc_sub_section = 'verificationoptions';
      analyticsObject.sc_sub_sub_section = 'text-me';
      sessionStorage.removeItem('DTM-nameChangeTextMe');
    }
    if (trackingNumber !== undefined && trackingNumber !== null && trackingNumber !== '') {
      analyticsObject.sc_mtcn = trackingNumber;
    }
    if (sessionStorage.getItem('isCancelTransfer') == 'true' && sessionStorage.getItem('cancelTransferMobile') == 'true') {
      analyticsObject.sc_section = 'cancel-transfer';
      analyticsObject.sc_sub_section = 'verificationoptions';
      analyticsObject.sc_sub_sub_section = 'text-me';
    }
  }
  else if (section === 'tracktransferverifyquestion') {
    var trackingNumber = sessionStorage.getItem('DTM-TrackingNumber');
    var cancelTransfer = sessionStorage.getItem('isCancelTransfer');
    if (trackingNumber !== undefined && trackingNumber !== null && trackingNumber !== '') {
      analyticsObject.sc_mtcn = trackingNumber;
    }
    analyticsObject.sc_section = 'name-change';
    analyticsObject.sc_sub_section = 'securityquestion';
    if (cancelTransfer !== undefined && cancelTransfer !== null && cancelTransfer !== '' && cancelTransfer === 'true') {
      var uniqueId = sessionStorage.getItem('DTM-uniqueId');
      analyticsObject['sc_transaction_id'] = uniqueId;
      analyticsObject.sc_mt_channel = 'retail';
      analyticsObject.sc_section = 'cancel-transfer';
      analyticsObject.sc_sub_section = 'securityquestion';
    }
  } else if (section === 'txn-name-edit') {
    var trackingNumber = sessionStorage.getItem('DTM-TrackingNumber');
    analyticsObject.sc_section = 'name-change';
    analyticsObject.sc_sub_section = 'editreceiver-name';
    if (trackingNumber !== undefined && trackingNumber !== null && trackingNumber !== '') {
      analyticsObject.sc_mtcn = trackingNumber;
    }
  }
  else if (section === 'txn-name-review' || section === 'namechangereview') {
    var trackingNumber = sessionStorage.getItem('DTM-TrackingNumber');
    if (trackingNumber !== undefined && trackingNumber !== null && trackingNumber !== '') {
      analyticsObject.sc_mtcn = trackingNumber;
    }
    var uniqueId = sessionStorage.getItem('DTM-uniqueId');
    analyticsObject.sc_section = 'name-change';
    analyticsObject.sc_sub_section = 'review';
    analyticsObject['sc_transaction_id'] = uniqueId;
  }
  else if (section === 'txn-name-receipt' || section === 'namechangereceipt') {
    var trackingNumber = sessionStorage.getItem('DTM-TrackingNumber');
    if (trackingNumber !== undefined && trackingNumber !== null && trackingNumber !== '') {
      analyticsObject.sc_mtcn = trackingNumber;
    }
    var uniqueId = sessionStorage.getItem('DTM-uniqueId');
    analyticsObject.sc_section = 'name-change';
    analyticsObject.sc_sub_section = 'receipt';
    analyticsObject['sc_transaction_id'] = uniqueId;
    sessionStorage.removeItem('DTM-uniqueId');
  } else if (section === 'billpaystart' || section === 'billpay-start') {
    analyticsObject.sc_section = 'bill-pay';
    analyticsObject.sc_sub_section = 'start';
    analyticsObject.sc_service_name = 'bill-pay';
    analyticsObject.sc_page_type = 'responsive';
  } else if (section === 'sendinmatestart' || section === 'sendinmate-start') {
    analyticsObject.sc_section = 'send-inmate';
    analyticsObject.sc_sub_section = 'start';
    analyticsObject.sc_service_name = 'send-inmate';
  } else if (section === 'history') {
    var showDetails = sessionStorage.getItem('showDetailsEventFired');
    var trackingNumber = sessionStorage.getItem('DTM-TrackingNumber');
    if (trackingNumber !== undefined && trackingNumber !== null && trackingNumber !== '') {
      analyticsObject.sc_mtcn = trackingNumber;
    }
    var ifNameChangeEnabled = sessionStorage.getItem('digitalNameChange');
    if (showDetails != '' && showDetails != null && showDetails != undefined && showDetails == 'true') {
      analyticsObject.sc_mt_channel = 'digital';
      if (ifNameChangeEnabled && ifNameChangeEnabled == 'true') {
        analyticsObject.sc_link_display = 'namechange-display';
      }
      else {
        analyticsObject.sc_link_display = 'canceltxn-tt-enabled';
        analyticsObject.sc_canceltxn_status = 'canceltxn-displayed';
      }
    }
    if (sessionStorage.getItem('previous_page_name') == "retailcancelcode") {
      if (sessionStorage.getItem('fireDirectApi') == null) {
        sessionStorage.setItem('fireDirectApi', true);
      }
    }
    analyticsObject.sc_section = 'profile';
    analyticsObject.sc_sub_section = 'txn-history';
    if (sessionStorage.getItem('fireDirectApi') === 'true') {
      directCall('genericdirectcall-rp');
      sessionStorage.setItem('fireDirectApi', false);
    }

  } else if (section === 'profile') {
    var kycInProgress = sessionStorage.getItem('Kyc-InProgress');
    if (kycInProgress) {
      analyticsObject.sc_ekyc_progress = kycInProgress;
      //sessionStorage.removeItem('Kyc-InProgress');
    }
    analyticsObject.sc_section = 'profile';
    analyticsObject.sc_sub_section = 'personal-info';
  } else if (section === 'profile' && sessionStorage.getItem('emailChangeSuccess')) {
    analyticsObject.sc_section = 'profile';
    analyticsObject.sc_sub_section = 'personal-info';
    analyticsObject.sc_link_name = 'confirm-pin';
  } else if (section === 'emailpin') {
    analyticsObject.sc_section = 'profile';
    analyticsObject.sc_sub_section = 'update-emailpin';
  } else if (section === 'settings') {
    analyticsObject.sc_section = 'profile';
    analyticsObject.sc_sub_section = 'notifications';
  } else if (section === 'edit-address') {
    analyticsObject.sc_section = 'profile';
    analyticsObject.sc_sub_section = 'edit-address';
  } else if (section === 'my-receivers') {
    analyticsObject.sc_section = 'profile';
    analyticsObject.sc_sub_section = 'my-receivers';
  } else if (section === 'edit-receiver') {
    analyticsObject.sc_section = 'my-receivers';
    analyticsObject.sc_sub_section = 'edit-receiver';
  }
  else if (section === 'add-receiver') {
    analyticsObject.sc_section = 'my-receivers';
    analyticsObject.sc_sub_section = 'add-receiver';
  }
  else if (section === 'review') {
    analyticsObject.sc_section = 'send-money';
    analyticsObject.sc_sub_section = 'review';
    var BankOnlineTypeDetails = sessionStorage.getItem('optBAnkOnlineType');
    var BankManualTypeDetails = sessionStorage.getItem('optBAnkManualType');
    if (BankOnlineTypeDetails == 'true') {
      analyticsObject.sc_bank_type = 'PWMB'
    } else if (BankManualTypeDetails == 'true') {
      analyticsObject.sc_bank_type = 'manual'

    }
  }
  else if (section === 'report-fraud') {
    analyticsObject.sc_section = 'report-fraud';
  }
  else if (section === 'report-fraud-hotline') {
    analyticsObject.sc_section = 'report-fraud';
    analyticsObject.sc_sub_section = 'hotline';
  }
  else if (section === 'fraudreport-success') {
    analyticsObject.sc_section = 'report-fraud';
    analyticsObject.sc_sub_section = 'fraudreport-success';
  }
  else if (section === 'start' && sessionStorage.getItem('SendAgainTxnDetails')) {
    checkAndSetSendAgainTxnObject(section);
    analyticsObject.sc_section = 'send-money';
    analyticsObject.sc_sub_section = 'start';
  } else if (section === 'mywu') {
    analyticsObject.sc_section = 'mywu';
    analyticsObject.sc_sub_section = 'rewards';
  } else if (section === 'kycoptions') {
    analyticsObject.sc_section = 'send-money';
    analyticsObject.sc_sub_section = 'kyc';
    analyticsObject.sc_sub_section = 'options';
  } else if (section === 'session-expired') {
    analyticsObject.sc_section = 'login';
    //analyticsObject.sc_sub_section = 'login';
  } else if (section === 'home.html') {
    analyticsObject.sc_section = 'home';
  }
  else if (section === 'collect') {
    analyticsObject.sc_section = 'collectid';
    analyticsObject.sc_sub_section = 'details';
  }
  else if (section === 'choose') {
    analyticsObject.sc_section = 'collectid';
    if (country == 'IN') {
      analyticsObject.sc_sub_section = 'details';
    } else {
      analyticsObject.sc_sub_section = 'options';
    }
  }
  else if (section === 'error') {
    analyticsObject.sc_section = 'collectid';
    if (country == 'IN') {
      analyticsObject.sc_sub_section = 'ekyc-failed';
    } else {
      analyticsObject.sc_sub_section = 'failed';
    }
  }
  else if (section === 'errors') {
    analyticsObject.sc_section = 'partner';
    analyticsObject.sc_sub_section = 'error';
    analyticsObject.sc_error = pathArray[pathArray.length - 1];
  }
  /*PBL-2416*/
  else if (section === 'register-verify-email') {
    analyticsObject.sc_section = 'register';
    analyticsObject.sc_sub_section = 'verifycode';
    if (sessionStorage.getItem('is_register_success')) {
      //analyticsObject.sc_register_success = 'true';//PBL-2491
      sessionStorage.removeItem('is_register_success');
    } else {
      analyticsObject.sc_register_success = null;
    }
    var expiredTokenFlag = sessionStorage.getItem('DTM-TokenExpiredFlow');
    if (expiredTokenFlag !== undefined
      && expiredTokenFlag !== null
      && expiredTokenFlag === 'token-expired') {
      analyticsObject.sc_register_success = null;
      sessionStorage.removeItem('DTM-TokenExpiredFlow');
    }
  } else if (section === 'retailcancelcode') {
    var cancelTransfer = sessionStorage.getItem('isCancelTransfer');
    if (cancelTransfer !== undefined && cancelTransfer !== null && cancelTransfer !== '' && cancelTransfer === 'true') {
      var trackingNumber = sessionStorage.getItem('DTM-TrackingNumber');
      if (trackingNumber !== undefined && trackingNumber !== null && trackingNumber !== '') {
        analyticsObject.sc_mtcn = trackingNumber;
      }
      analyticsObject.sc_mt_channel = 'retail';
      analyticsObject.sc_section = 'cancel-transfer';
      analyticsObject.sc_sub_section = 'reason';
      analyticsObject.sc_canceltxn_status = 'canceltxn-initiated';
    }
  } else if (section === 'cancelreview') {
    analyticsObject.sc_service_name = 'moneytransfer';
    var pageType = sessionStorage.getItem('CancelReviewPageType');

    var uniqueId = sessionStorage.getItem('DTM-uniqueId');
    var trackingNumber = sessionStorage.getItem('DTM-TrackingNumber');
    if (trackingNumber !== undefined && trackingNumber !== null && trackingNumber !== '') {
      analyticsObject.sc_mtcn = trackingNumber;
    }
    analyticsObject['sc_transaction_id'] = uniqueId;
    switch (pageType) {
      case 'canceltxn-submit-fr':
        analyticsObject.sc_section = 'cancel-transfer';
        analyticsObject.sc_mt_channel = 'retail';
        analyticsObject.sc_sub_section = 'review-full-refund';
        analyticsObject.sc_canceltxn_status = 'canceltxn-reviewed-fr';
        break;
      case 'canceltxn-submit-pr':
        analyticsObject.sc_section = 'cancel-transfer';
        analyticsObject.sc_mt_channel = 'retail';
        analyticsObject.sc_sub_section = 'review-pr-refund';
        analyticsObject.sc_canceltxn_status = 'canceltxn-reviewed-pr';
        break;
      case 'canceltxn-submit-cr':
        analyticsObject.sc_section = 'cancel-transfer';
        analyticsObject.sc_mt_channel = 'retail';
        analyticsObject.sc_sub_section = 'case-request';
        analyticsObject.sc_canceltxn_status = 'canceltxn-caserequested';
        break;
    }


  } else if (section === 'retailcallcc') {
    analyticsObject.sc_section = 'cancel-transfer';
    analyticsObject.sc_sub_section = 'declined';
  } else if (section === 'price-estimator') {
    analyticsObject.sc_section = 'price-estimator';
    analyticsObject.sc_sub_section = 'online-tab';

  }
  else if (section === 'pickupcash') {
    analyticsObject.sc_section = 'pickupcash';
    analyticsObject.sc_sub_section = 'start';
    analyticsObject.sc_service_name = 'pickupcash';
  }
  else if (section === 'pickupcashglobalcollectid') {
    analyticsObject.sc_section = 'pickupcash';
    analyticsObject.sc_sub_section = 'globalcollectid';
  }
  else if (section === 'pickupcashsecurityquestion') {
    analyticsObject.sc_section = 'pickupcash';
    analyticsObject.sc_sub_section = 'securityques';
  }
  else if (section === 'pickupcashreceipt') {
    analyticsObject.sc_section = 'pickupcash';
    analyticsObject.sc_sub_section = 'confirm';
  }
  /* PBL-2416*/
  else if (section === 'verificationoptions') {
    analyticsObject.sc_section = 'verification';
    analyticsObject.sc_sub_section = 'options';
  }
  else if (section === 'lookup') {
    analyticsObject.sc_section = 'kyc';
    analyticsObject.sc_sub_section = 'lookup';
  }

  else if (section === 'success') {
    analyticsObject.sc_section = 'kyc';
    analyticsObject.sc_sub_section = 'upload-success';
  }
  else if (section === 'completeyourprofile') {
    if (sessionStorage.userJourney !== undefined && sessionStorage.userJourney !== null) {
       if (appType === 'bill-pay' || sessionStorage.userJourney === 'bill-pay') {
        analyticsObject.sc_section = 'bill-pay';
      } else if (appType === 'inmate-pay' || sessionStorage.userJourney === 'inmate-pay') {
        analyticsObject.sc_section = 'send-inmate';
      } else {
        analyticsObject.sc_section = 'send-money-rp';
      }
    }else{
      analyticsObject.sc_section = 'send-money-rp';
    }
  }
  else {
    analyticsObject.sc_section = section;
  }

  var userJourney = 'send-money-rp';
  if (sessionStorage.userJourney !== undefined && sessionStorage.userJourney !== null) {
    userJourney = sessionStorage.userJourney;
  }
  if (transactionPagesArr.indexOf(section) > -1) {
    if (appType === 'bill-pay' || userJourney === 'bill-pay') {
      analyticsObject.sc_section = 'bill-pay';
    } else if (appType === 'inmate-pay' || userJourney === 'inmate-pay') {
      analyticsObject.sc_section = 'send-inmate';
      // PBL-2683 Start
      if (section === 'receipt' || section === 'kycoptions' || section === 'kycoption-verify' || section === 'review') {
        analyticsObject.sc_service_name = 'send-inmate';
      }
      // PBL-2683 End
    } else {
      analyticsObject.sc_section = 'send-money-rp';
      //MYWU-2330 start
      if (section === 'start') {
        if (sessionStorage.getItem('discount_link')) {
          analyticsObject.sc_link_display = sessionStorage.getItem('discount_link');
        } else {
          analyticsObject.sc_link_display = 'redeem-promo-displayed';
        }
        var kycVerified = sessionStorage.getItem('kyc-Verified');
        if (kycVerified) {
          analyticsObject.sc_ekyc_success = kycVerified;
          //sessionStorage.removeItem('kyc-Verified');
        }
      }
      if (section === 'profile') {
        var kycInProgress = sessionStorage.getItem('Kyc-InProgress');
        if (kycInProgress) {
          analyticsObject.sc_ekyc_progress = kycInProgress;
          //sessionStorage.removeItem('Kyc-InProgress');
        }
      }
      //MYWU-2330 end
    }
    // PBL-2595 Start
    if (transactionPagesArr[transactionPagesArr.indexOf(section)] === 'payment' && userJourney != 'inmate-pay' && userJourney != 'bill-pay') {
      analyticsObject.sc_section = 'send-money';
      analyticsObject.sc_sub_section = 'paymentinformation';
      setTransactionParamsForGenericDirectCall(section);
    } else {
      analyticsObject.sc_sub_section = section;
      setTransactionParamsForGenericDirectCall(section);
    }
    // PBL-2595 End
  }

  var summaryObj = JSON.parse(sessionStorage.getItem('SummaryObjects'));
  if (summaryObj && section === 'receipt' && summaryObj.paying_method === 'WUPay') {
    analyticsObject.sc_sub_section = 'sendmoneywupayreceipt';
  }
  if (section === 'price-estimator') {
    analyticsObject.sc_sub_section = 'online-tab';
  }
  if (summaryObj && (summaryObj.paying_method === 'Sofort' || summaryObj.paying_method === 'POLI' || summaryObj.paying_method === 'Trustly') && (section === 'receipt' || section === 'progress')) {
    analyticsObject.sc_section = 'send-money';
    analyticsObject.sc_sub_section = 'receipt';
  }
  if (summaryObj && section === 'receipt' && summaryObj.paying_method === 'PartnerFunds') {
    analyticsObject.sc_sub_section = 'sendmoneypartnerfundsreceipt';
  }

  checkIfFlowisFromLoginSuccess();
  // bug FW-1718: Added null check for whole analytics event object to prevent issues with analytics tracking
  try {
    Object.keys(analyticsObject).forEach(function (key) {
      if (analyticsObject[key] === null) {
        analyticsObject[key] = '';
      }
    });
  } catch (error) {
    console.log(error);
  }

}

function checkIfFlowisFromLoginSuccess() {
  var loginSuccess = sessionStorage.getItem("dtm_login_success");
  if (loginSuccess == 'true' || loginSuccess == true) {
    analyticsObject.sc_loginsuccess = 'true';
    sessionStorage.setItem("dtm_login_success", 'false');
    sessionStorage.removeItem('sc_login_success');
  }

  var LoggedInFlag = sessionStorage.getItem('DTM-LoginSuccessEvent');
  var autoLogin = sessionStorage.getItem('autoLogin');
  if (LoggedInFlag !== undefined && LoggedInFlag !== null && LoggedInFlag === 'loggedIn' &&
    (autoLogin == undefined || autoLogin == null || autoLogin == "")) {
    //analyticsObject.sc_loginsuccess = 'true';
    sessionStorage.removeItem('DTM-LoginSuccessEvent');
    sessionStorage.setItem("dtm_login_success", 'false');
  } else {
    //analyticsObject.sc_loginsuccess = null;
    //sessionStorage.removeItem('autoLogin');
  }
}


/**
 * function to update analytics for analytics
 */
function checkSMRegisterFlow() {
  var baseUrl = getTemplateBasePath();
  if ((baseUrl.toLowerCase().indexOf('gb') > -1) ||
    (baseUrl.toLowerCase().indexOf('de') > -1) || (baseUrl.toLowerCase().indexOf('fr') > -1)) {
    if (sessionStorage.getItem('previous_page_name')) {
      if (sessionStorage.getItem('previous_page_name').indexOf('sm-login') > -1) {
        if (sessionStorage.getItem('page_name') && sessionStorage.getItem('page_name').indexOf('register') > -1) {
          analyticsObject.sc_section = 'send-money';
          //PBL-2491		analyticsObject.sc_register_success = 'true';
        } 
      } 
    }
  }
  else if (sessionStorage.getItem('previous_page_name')) {
    if (sessionStorage.getItem('previous_page_name').indexOf('mywu') > -1) {
      if (sessionStorage.getItem('page_name') && sessionStorage.getItem('page_name').indexOf('register') > -1) {
        analyticsObject.sc_section = 'send-money';
        //PBL-2491	analyticsObject.sc_register_success = 'true';
      }
    }

  }
  if ((baseUrl.toLowerCase().indexOf('it') > -1) ||
    (baseUrl.toLowerCase().indexOf('au') > -1) || (baseUrl.toLowerCase().indexOf('fr') > -1) || (baseUrl.toLowerCase().indexOf('be') > -1)) {
    if (sessionStorage.getItem('previous_page_name')) {
      if (sessionStorage.getItem('previous_page_name').indexOf('register') > -1) {
        if (sessionStorage.getItem('page_name') && sessionStorage.getItem('page_name').indexOf('profile') > -1) {
          //PBL-2491	analyticsObject.sc_register_success = 'true';
        }
      }
    }
  }

  return analyticsObject;
}

/**
 * function to call the direct call events.
 */

function DTM_Trigger(type, action, extravalue) {
  setPlatformDetails(); // refresh the data center values.
  sessionStorage.removeItem("pageLoadDTMRefresh");
  loadPageViewEvents();
  // DTM_Trigger("DTM-REGISTER-SUCCESS-STEP1",true);
  var userJourney = 'send-money-rp';
  if (sessionStorage.userJourney !== undefined && sessionStorage.userJourney !== null) {
    userJourney = sessionStorage.userJourney;
  }
  if (userJourney == 'receiver-redirect') {
    if (type == 'receiver-payment') {
      type = 'rd-receiver-payment';
    }
    else if (type == 'rd-status') {
      if (JSON.parse(sessionStorage.getItem('receiverRedirectData')).receiverRedirectStatus == true) {
        type = 'rd-status-confirm';
      }
      else {
        type = 'rd-status-declined';
      }
    }
    else if (type == 'sm-login') {
      type = 'rd-sm-login';
    }
    else if (type == 'register') {
      type = 'rd-register'
    }
  }
  if (type == 'MyWUPromotionBanner') {
    if (analyticsObject.sc_link_display == undefined || analyticsObject.sc_link_display == null || analyticsObject.sc_link_display == '') {
      analyticsObject.sc_link_display = '';
    }
    else {
      analyticsObject.sc_link_display = analyticsObject.sc_link_display + '|';
    }
  }
  checkIfFlowisFromLoginSuccess();

  switch (type) {
    case 'MyWUPromotionBanner':
      analyticsObject.sc_link_display = analyticsObject.sc_link_display + 'mywu-signup-enabled';
      directCall('genericdirectcall-tl');
      break;
    //AFEO-10705
    case 'securityQuestion':
      analyticsObject.sc_section = 'send-money';
      analyticsObject.sc_sub_section = 'kycverificationoptions';
      analyticsObject.sc_sub_sub_section = 'security-question';
      directCall('genericdirectcall-rp');
      break;
    case 'securityQuestionOne':
      analyticsObject.sc_section = 'send-money';
      analyticsObject.sc_sub_section = 'kycverificationoptions';
      analyticsObject.sc_sub_sub_section = 'security-question-1';
      directCall('genericdirectcall-rp');
      break;
    case 'kyclookuppage':
      analyticsObject.sc_section = 'kyc';
      analyticsObject.sc_sub_section = 'lookup';
      var pageRelaodedFlag = sessionStorage.getItem('lookupPageReload');
      if (pageRelaodedFlag !== undefined && pageRelaodedFlag !== null && pageRelaodedFlag !== '') {
        analyticsObject.sc_fire_event = 'no';
      }
      break;
    case 'dutuploadpage':
      analyticsObject.sc_section = 'kyc';
      analyticsObject.sc_sub_section = 'docupload';
      var pageRelaodedFlag = sessionStorage.getItem('uploadPageReload');
      if (pageRelaodedFlag !== undefined && pageRelaodedFlag !== null && pageRelaodedFlag !== '') {
        analyticsObject.sc_fire_event = 'no';
      }
      if (action != null && action !== undefined && action !== '')
        analyticsObject.sc_error = action;
      break;
    case 'dutsuccesspage':
      analyticsObject.sc_section = 'kyc';
      analyticsObject.sc_sub_section = 'upload-success';
      var pageRelaodedFlag = sessionStorage.getItem('successPageReload');
      if (pageRelaodedFlag !== undefined && pageRelaodedFlag !== null && pageRelaodedFlag !== '') {
        analyticsObject.sc_fire_event = 'no';
      }
      break;
    case 'securityQuestionTwo':
    case 'securityQuestionThree':
    case 'securityQuestionFour':
    case 'securityQuestionFive':
    case 'securityQuestionSix':
    case 'securityQuestionSeven':
    case 'securityQuestionEight':
    case 'securityQuestionNine':
      var sqNumbers = {
        securityQuestionTwo: 'security-question-2',
        securityQuestionThree: 'security-question-3',
        securityQuestionFour: 'security-question-4',
        securityQuestionFive: 'security-question-5',
        securityQuestionSix: 'security-question-6',
        securityQuestionSeven: 'security-question-7',
        securityQuestionEight: 'security-question-8',
        securityQuestionNine: 'security-question-9',
      };
      analyticsObject.sc_section = 'send-money';
      analyticsObject.sc_sub_section = 'kycverificationoptions';
      analyticsObject.sc_sub_sub_section = sqNumbers[type];
      directCall('genericdirectcall-rp');
      break;
    //CHQ AFEO-10705
    case 'kyc-smartphone':
      analyticsObject.sc_section = 'send-money';
      analyticsObject.sc_sub_section = 'kycverificationoptions';
      analyticsObject.sc_sub_sub_section = 'smartphone';
      directCall('genericdirectcall-rp');
      break;
    case 'kyc-smartphoneagain':
      analyticsObject.sc_section = 'send-money';
      analyticsObject.sc_sub_section = 'kycverificationoptions';
      analyticsObject.sc_sub_sub_section = 'smartphone-msgsent';
      directCall('genericdirectcall-rp');
      break;
    case 'kycreceipt':
      analyticsObject.sc_section = 'send-money';
      analyticsObject.sc_sub_section = 'receipt';
      directCall('genericdirectcall-rp');
      break;
    case 'kycdecline':
      analyticsObject.sc_section = 'send-money';
      analyticsObject.sc_sub_section = 'declineoptions';
      analyticsObject.sc_sub_sub_section = 'declined';
      directCall('genericdirectcall-rp');
      break;
    case 'smreceipthold':
      analyticsObject.sc_section = 'send-money';
      analyticsObject.sc_sub_section = 'declineoptions';
      analyticsObject.sc_sub_sub_section = 'declined';
      directCall('genericdirectcall-rp');
      break;
    case 'rd-register':
      analyticsObject.sc_section = 'receiver-directed';
      analyticsObject.sc_sub_section = 'register';
      analyticsObject.sc_service_name = 'receiver-redirect';
      directCall('genericdirectcall-rp');
      break;
    case 'rd-sm-login':
      analyticsObject.sc_section = 'receiver-directed';
      analyticsObject.sc_sub_section = 'login';
      analyticsObject.sc_service_name = 'receiver-redirect';
      if (sessionStorage.getItem('receiver-directed-entry-point') == "TrackATransfer") {
        directCall('genericdirectcall-rp');
      }
      break;
    case 'rd-link-on-menu':
      break;
    case 'rd-tatsuccess-redirecttobank':
      break;
    case 'rd-status-confirm':
      analyticsObject.sc_section = 'receiver-directed';
      analyticsObject.sc_service_name = 'receiver-redirect';
      analyticsObject.sc_sub_section = 'confirm';
      analyticsObject.sc_txn_status = 'approved';
      analyticsObject.sc_mtcn = JSON.parse(sessionStorage.getItem('receiverRedirectData')).MTCN;
      analyticsObject.sc_payout_amount = JSON.parse(sessionStorage.getItem('receiverRedirectData')).transactionAmount;
      //receiver
      analyticsObject.sc_payout_state = JSON.parse(sessionStorage.getItem('GatewayCustomer')).address.state;
      analyticsObject.sc_payout_currency = analyticsObject.sc_send_currency = JSON.parse(sessionStorage.getItem('receiverRedirectData')).currency;
      analyticsObject.sc_payout_country = JSON.parse(sessionStorage.getItem('GatewayCustomer')).address.countryIsoCode;
      ;
      //sender right now only for US
      //analyticsObject.sc_send_country=JSON.parse(sessionStorage.getItem('GatewayCustomer')).address.countryIsoCode;
      analyticsObject.sc_send_state = JSON.parse(sessionStorage.getItem('receiverRedirectData')).senderState;
      //analyticsObject.sc_send_currency=analyticsObject.sc_send_currency=JSON.parse(sessionStorage.getItem('receiverRedirectData')).currency;
      directCall('genericdirectcall-rp');
      break;
    case 'rd-status-declined':
      analyticsObject.sc_section = 'receiver-directed';
      analyticsObject.sc_service_name = 'receiver-redirect';
      analyticsObject.sc_sub_section = 'declined';
      analyticsObject.sc_txn_status = JSON.parse(sessionStorage.getItem('receiverRedirectData')).payoutErrorCode;
      ;
      analyticsObject.sc_mtcn = JSON.parse(sessionStorage.getItem('receiverRedirectData')).MTCN;
      analyticsObject.sc_payout_amount = JSON.parse(sessionStorage.getItem('receiverRedirectData')).transactionAmount;
      //receiver
      analyticsObject.sc_payout_state = JSON.parse(sessionStorage.getItem('GatewayCustomer')).address.state;
      analyticsObject.sc_payout_currency = analyticsObject.sc_send_currency = JSON.parse(sessionStorage.getItem('receiverRedirectData')).currency;
      analyticsObject.sc_payout_country = JSON.parse(sessionStorage.getItem('GatewayCustomer')).address.countryIsoCode;
      ;
      //sender right now only for US
      //analyticsObject.sc_send_country=JSON.parse(sessionStorage.getItem('GatewayCustomer')).address.countryIsoCode;
      analyticsObject.sc_send_state = JSON.parse(sessionStorage.getItem('receiverRedirectData')).senderState;
      //analyticsObject.sc_send_currency=analyticsObject.sc_send_currency=JSON.parse(sessionStorage.getItem('receiverRedirectData')).currency;
      directCall('genericdirectcall-rp');
      break;
    case 'rd-review-cancelbtn':
      analyticsObject.sc_service_name = 'receiver-redirect';
      break;
    case 'rd-review-acceptbtn':
      analyticsObject.sc_service_name = 'receiver-redirect';
      break;
    case 'rd-review':
      analyticsObject.sc_section = 'receiver-directed';
      analyticsObject.sc_sub_section = 'review';
      analyticsObject.sc_service_name = 'receiver-redirect';
      analyticsObject.sc_principal = JSON.parse(sessionStorage.getItem('receiverRedirectData')).transactionAmount;
      //not known
      analyticsObject.sc_payout_amount = JSON.parse(sessionStorage.getItem('receiverRedirectData')).transactionAmount;
      analyticsObject.sc_mtcn = JSON.parse(sessionStorage.getItem('receiverRedirectData')).MTCN;
      //receiver
      analyticsObject.sc_payout_state = JSON.parse(sessionStorage.getItem('GatewayCustomer')).address.state;
      analyticsObject.sc_payout_currency = analyticsObject.sc_send_currency = JSON.parse(sessionStorage.getItem('receiverRedirectData')).currency;
      analyticsObject.sc_payout_country = JSON.parse(sessionStorage.getItem('GatewayCustomer')).address.countryIsoCode;
      ;
      //sender right now only for US
      //analyticsObject.sc_send_country=JSON.parse(sessionStorage.getItem('GatewayCustomer')).address.countryIsoCode;
      analyticsObject.sc_send_state = JSON.parse(sessionStorage.getItem('receiverRedirectData')).senderState;
      //analyticsObject.sc_send_currency=analyticsObject.sc_send_currency=JSON.parse(sessionStorage.getItem('receiverRedirectData')).currency;
      directCall('genericdirectcall-rp');
      break;
    case 'rd-receiver-payment':
      analyticsObject.sc_section = 'receiver-directed';
      analyticsObject.sc_sub_section = 'paymentinformation';
      //not known
      analyticsObject.sc_delivery_method = '000';
      analyticsObject.sc_principal = JSON.parse(sessionStorage.getItem('receiverRedirectData')).transactionAmount;
      analyticsObject.sc_service_name = 'receiver-redirect';
      analyticsObject.sc_mtcn = JSON.parse(sessionStorage.getItem('receiverRedirectData')).MTCN;
      analyticsObject.sc_payout_amount = JSON.parse(sessionStorage.getItem('receiverRedirectData')).transactionAmount;
      //receiver
      analyticsObject.sc_payout_state = JSON.parse(sessionStorage.getItem('GatewayCustomer')).address.state;
      analyticsObject.sc_payout_currency = analyticsObject.sc_send_currency = JSON.parse(sessionStorage.getItem('receiverRedirectData')).currency;
      analyticsObject.sc_payout_country = JSON.parse(sessionStorage.getItem('GatewayCustomer')).address.countryIsoCode;
      ;
      //sender right now only for US
      //analyticsObject.sc_send_country=JSON.parse(sessionStorage.getItem('GatewayCustomer')).address.countryIsoCode;
      analyticsObject.sc_send_state = JSON.parse(sessionStorage.getItem('receiverRedirectData')).senderState;
      //analyticsObject.sc_send_currency=JSON.parse(sessionStorage.getItem('receiverRedirectData')).currency;
      directCall('genericdirectcall-rp');
      break;
    case 'rd-verify-transfer-details':
      analyticsObject.sc_section = 'receiver-directed';
      analyticsObject.sc_sub_section = 'transfer-details';
      analyticsObject.sc_service_name = 'receiver-redirect';
      directCall('genericdirectcall-rp');
      break;
    case 'login':
      analyticsObject.sc_section = 'login-rp';
      directCall('genericdirectcall-rp');
      break;
    case 'referFriend':
      analyticsObject.sc_section = 'refer-friend';
      break;
    case 'receipt':
      var summaryObj = JSON.parse(sessionStorage.getItem('SummaryObjects'));
      var wupayTempElm = sessionStorage.getItem('WupayTypeTempElm');
      var storeRespObj = JSON.parse(sessionStorage.getItem('StoreResponse'));
      var MtcObject = JSON.parse(sessionStorage.getItem('MtcObject'));
      if (MtcObject && MtcObject.moneyTransferControl && MtcObject.moneyTransferControl.mtcn) {
        analyticsObject.sc_mtcn = MtcObject.moneyTransferControl.mtcn;
      }
      if (summaryObj && summaryObj.paying_method === 'WUPay' && wupayTempElm === 'true') {
        analyticsObject.sc_section = 'send-money';
        analyticsObject.sc_sub_section = 'wire-complete';
        analyticsObject['sc_txn_status'] = (storeRespObj && storeRespObj.authorizationStatus) ? storeRespObj.authorizationStatus.code : 'approved';
        //Storage.clearSessionStorageItem("WupayTypeTempElm");
        directCall('genericdirectcall-rp');
      } else if (summaryObj && summaryObj.paying_method === 'WUPay') {
        analyticsObject.sc_sub_section = 'sendmoneywupayreceipt';
        analyticsObject['sc_txn_status'] = (storeRespObj && storeRespObj.authorizationStatus) ? storeRespObj.authorizationStatus.code : 'approved';
        directCall('genericdirectcall-rp');
      } else if (summaryObj && summaryObj.paying_method === 'CreditCard') {
        analyticsObject.sc_sub_section = 'receipt';
        analyticsObject['sc_txn_status'] = (storeRespObj && storeRespObj.authorizationStatus) ? storeRespObj.authorizationStatus.code : 'approved';
        directCall('genericdirectcall-rp');
      } else if (summaryObj && (summaryObj.paying_method === 'ACH' || summaryObj.paying_method === 'Paramount')) {
        analyticsObject.sc_sub_section = 'receipt';
        analyticsObject['sc_txn_status'] = (storeRespObj && storeRespObj.authorizationStatus) ? storeRespObj.authorizationStatus.code : 'approved';
        analyticsObject['sc_transaction_id'] = storeRespObj.transactionId ? storeRespObj.transactionId : '';
        directCall('genericdirectcall-rp');
      } else if (summaryObj && summaryObj.paying_method === 'POLI') {
        analyticsObject.sc_sub_section = 'receipt';
        analyticsObject['sc_txn_status'] = (storeRespObj && storeRespObj.authorizationStatus) ? storeRespObj.authorizationStatus.code : 'approved';
        analyticsObject['sc_transaction_id'] = storeRespObj.transactionId ? storeRespObj.transactionId : '';
        directCall('genericdirectcall-rp');
      } else if (summaryObj && summaryObj.paying_method.toLowerCase() === 'sofort') {
        analyticsObject.sc_sub_section = 'receipt';
        analyticsObject['sc_txn_status'] = (storeRespObj && storeRespObj.authorizationStatus) ? storeRespObj.authorizationStatus.code : 'approved';
        analyticsObject['sc_transaction_id'] = storeRespObj.transactionId ? storeRespObj.transactionId : '';
        directCall('genericdirectcall-rp');
      } else if (summaryObj && summaryObj.paying_method === 'Trustly') {
        analyticsObject.sc_sub_section = 'receipt';
        analyticsObject['sc_txn_status'] = (storeRespObj && storeRespObj.authorizationStatus) ? storeRespObj.authorizationStatus.code : 'approved';
        analyticsObject['sc_transaction_id'] = storeRespObj.transactionId ? storeRespObj.transactionId : '';
        directCall('genericdirectcall-rp');
      } else if (summaryObj && summaryObj.paying_method === 'IDEAL') {
        analyticsObject.sc_sub_section = 'receipt';
        analyticsObject['sc_txn_status'] = (storeRespObj && storeRespObj.authorizationStatus) ? storeRespObj.authorizationStatus.code : 'approved';
        analyticsObject['sc_transaction_id'] = storeRespObj.transactionId ? storeRespObj.transactionId : '';
        directCall('genericdirectcall-rp');
      } else if (summaryObj && summaryObj.paying_method === 'iACH') {
        analyticsObject.sc_sub_section = 'receipt';
        analyticsObject['sc_txn_status'] = (storeRespObj && storeRespObj.authorizationStatus) ? storeRespObj.authorizationStatus.code : 'approved';
        analyticsObject['sc_transaction_id'] = storeRespObj.transactionId ? storeRespObj.transactionId : '';
        directCall('genericdirectcall-rp');
      } else if (summaryObj && summaryObj.paying_method === 'DebitCard') {
        analyticsObject.sc_sub_section = 'receipt';
        analyticsObject['sc_txn_status'] = (storeRespObj && storeRespObj.authorizationStatus) ? storeRespObj.authorizationStatus.code : 'approved';
        analyticsObject['sc_transaction_id'] = storeRespObj.transactionId ? storeRespObj.transactionId : '';
        directCall('genericdirectcall-rp');
      } else if (summaryObj && summaryObj.paying_method === 'PartnerFunds') {
        analyticsObject.sc_sub_section = 'sendmoneypartnerfundsreceipt';
        analyticsObject['sc_txn_status'] = (storeRespObj && storeRespObj.authorizationStatus) ? storeRespObj.authorizationStatus.code : 'approved';
        analyticsObject['sc_transaction_id'] = storeRespObj.transactionId ? storeRespObj.transactionId : '';
        directCall('genericdirectcall-rp');
      }
      break;
    case 'upload':
      analyticsObject.sc_section = 'send-money-rp';
      analyticsObject.sc_sub_section = 'docupload in doc upload page';
      setTransactionParamsForGenericDirectCall('upload');
    case 'sm-login':
      analyticsObject.sc_section = 'send-money-rp';
      analyticsObject.sc_sub_section = 'login';
      if (sessionStorage.userJourney !== undefined && sessionStorage.userJourney !== null) {
        if (sessionStorage.userJourney === 'sending_money') {
          analyticsObject.sc_section = 'send-money-rp';
          analyticsObject.sc_sub_section = 'sendmoneylogin';

        } else if (sessionStorage.userJourney === 'bill-pay') {
          analyticsObject.sc_section = 'bill-pay';
          analyticsObject.sc_sub_section = 'paybillslogin';
          setTransactionParamsForGenericDirectCall(sessionStorage.userJourney);
        } else if (sessionStorage.userJourney === 'inmate-pay') {
          analyticsObject.sc_section = 'send-inmate';
          analyticsObject.sc_sub_section = 'login';
          setTransactionParamsForGenericDirectCall(sessionStorage.userJourney);
        } else {
          analyticsObject.sc_section = 'send-money-rp';
          analyticsObject.sc_sub_section = 'login';
        }

      }
      var pageRelaodedFlag = sessionStorage.getItem('uploadPageReload');
      var errorAction = sessionStorage.getItem('lookuperrorCode');
      if (pageRelaodedFlag !== undefined && pageRelaodedFlag !== null && pageRelaodedFlag !== '') {
        analyticsObject.sc_section = 'kyc';
        analyticsObject.sc_sub_section = 'docupload';
      }
      if (errorAction != null && errorAction !== undefined && errorAction !== '')
        analyticsObject.sc_error = errorAction;
      directCall('genericdirectcall-rp');
      break;
    case 'success':
      analyticsObject.sc_section = 'kyc';
      analyticsObject.sc_sub_section = 'upload-success';
      directCall('genericdirectcall-rp');
      break;
    case 'guest':
      analyticsObject.sc_flow_type = 'guest';
      analyticsObject.sc_sub_section = 'guest';
      directCall('genericdirectcall-rp');
      break;
    case 'receiver':
      analyticsObject.sc_section = 'send-money';
      analyticsObject.sc_sub_section = 'receiverinformation';
      //PBL-2377
      if (sessionStorage.getItem('SendAgainTxnDetails')) {
        checkAndSetSendAgainTxnObject(type);
      }
      //End-PBL-2377
      delete analyticsObject.sc_link_display;
      directCall('genericdirectcall-rp');
      break;
    case 'interstitial':
      analyticsObject.sc_section = 'login';
      analyticsObject.sc_sub_section = 'interstitialpage';
      //analyticsObject['sc_loginsuccess'] = 'true';
      if (sessionStorage.userJourney !== undefined && sessionStorage.userJourney !== null) {
        if (sessionStorage.userJourney === 'sending_money') {
          analyticsObject.sc_section = 'send-money';
          analyticsObject.sc_sub_section = 'interstitialpage';

        } else if (sessionStorage.userJourney === 'bill-pay') {
          analyticsObject.sc_section = 'bill-pay';
          analyticsObject.sc_sub_section = 'interstitialpage';
        } else if (sessionStorage.userJourney === 'inmate-pay') {
          analyticsObject.sc_section = 'send-inmate';
          analyticsObject.sc_sub_section = 'interstitialpage';
        }
      }
      directCall('genericdirectcall-rp');
      break;
    case 'register':
      if (sessionStorage.userJourney !== undefined && sessionStorage.userJourney !== null) {
        if (sessionStorage.userJourney === 'sending_money') {
          analyticsObject.sc_section = 'send-money-rp';
          analyticsObject.sc_sub_section = 'register';
          checkSMRegisterFlow();

        } else if (sessionStorage.userJourney === 'bill-pay') {
          analyticsObject.sc_section = 'bill-pay';
          analyticsObject.sc_sub_section = 'register';
          analyticsObject.sc_service_name = 'bill-pay';
        } else if (sessionStorage.userJourney === 'inmate-pay') {
          analyticsObject.sc_section = 'send-inmate';
          analyticsObject.sc_sub_section = 'register';
          analyticsObject.sc_service_name = 'send-inmate';
        } else {
          analyticsObject.sc_section = 'register-rp';
        }
      } else {
        analyticsObject.sc_section = 'register-rp';
      }
      directCall('genericdirectcall-rp');
      break;
    case 'express-migrate':
      analyticsObject.sc_section = 'expressregister';
      analyticsObject.sc_sub_section = 'express-migrate';
      analyticsObject.sc_flow_type = 'ExpressRegistration';
      analyticsObject.sc_txn_type = 'register';
      analyticsObject.sc_accnt_active = 'true';
      directCall('genericdirectcall-rp');
      break;
    case 'DTM-LOGIN-SUCCESS':
      sessionStorage.setItem("dtm_login_success", 'true');
      break;
    case 'DTM-LOGIN-FAIL':
      if (action != 'C1124') { //when logged in go to verify code page
        analyticsObject.sc_error = action;
        if (action != 'C1131') {
          directCall('login-fail');
        }
      }
      break;
    case 'DTM-REGISTER-FAIL':
      if (action === 'C5065' && (analyticsObject.sc_section && analyticsObject.sc_section === 'register-success')) {
        analyticsObject.sc_section = 'register-rp';
        analyticsObject.sc_sub_section = 'check-email';
      }
      else if (action != 'C6006') {
        analyticsObject.sc_error = action;
        directCall('register-verification-failed');
      } else {
      }
      break;
    case 'DTM-TnC-POPUP':
        analyticsObject['sc_sub_section'] = 'tnc-popup';
        // analyticsObject['sc_page_name'] = 'register-rp:tnc-popup';
        setRAFAnalyticsValues(analyticsObject);
        break;
    case 'DTM-TnC-Accept':
        delete analyticsObject['sc_sub_sub_section'];
        delete analyticsObject['sc_page_name'];
        setRAFAnalyticsValues(analyticsObject);
        break;
    case 'DTM-TnC-Decline':
        delete analyticsObject['sc_sub_sub_section'];
        delete analyticsObject['sc_page_name'];
        setRAFAnalyticsValues(analyticsObject);
        break;
    case 'DTM-THIRDPARTY-CONSENT':
        analyticsObject['sc_3rdPartyDataOptin'] = action;
        sessionStorage.setItem('DTM-3rdPartyDataOptin', action ? 'true' : 'false');
        break;
    case 'DTM-THIRDPARTY-POPUP':
        analyticsObject.sc_sub_sub_section = 'thirdPartyDataConsent';
        directCall('genericdirectcall-rp');
        break;
    case 'DTM-THIRDPARTYPOPUP-Accept':
        delete analyticsObject['sc_sub_sub_section'];
        break;
    case 'DTM-THIRDPARTYPOPUP-Decline':
        delete analyticsObject['sc_sub_sub_section'];
        break;
    case 'DTM-ERROR-DIRECT-CALL':
      if (analyticsObject.sc_section !== undefined
        && (analyticsObject.sc_section !== 'login-rp' || analyticsObject.sc_section !== 'register-rp')) {
        analyticsObject.sc_error = action;
        if (action === 'C3577') {
          var subErrorCode = JSON.parse(sessionStorage.getItem('SMSSubErrorCode'));
          if (subErrorCode != null && subErrorCode != undefined && subErrorCode != "") {
            var code = subErrorCode.reason[0].code;
            analyticsObject.sc_sub_error = code;
          }
        }
        directCall(type.toLowerCase());
      }

      break;
    case 'DTM-REGISTER-SUCCESS':
      directCall('dtm_activation');
      //analyticsObject.sc_loginsuccess = null;
      sessionStorage.setItem('autoLogin', true);
      //sessionStorage.setItem("dtm_login_success", 'true');
      break;
    case 'DTM-SMOSENDAMOUNT-BLUR':
      setExtraValuesInAnalyticsObject(extravalue);
      //Start PBL-1998
      directCall('corridorinfo');
      directCall('recievemoneyoption');
      directCall('selectpayoutservice');
      //End PBL-1998
      break;
    case 'DTM-FRAUDPROTECT':
      analyticsObject.sc_sub_section = 'fraudprotection';
      setTransactionParamsForGenericDirectCall('review');
      directCall('genericdirectcall-rp');
      break;
    case 'register-success':
    case 'DTM-REGISTER-SUCCESS-STEP1':
      if (userJourney === 'bill-pay') {
        analyticsObject.sc_section = 'bill-pay';
        analyticsObject.sc_sub_section = 'register';
        analyticsObject.sc_sub_sub_section = 'check-email';
      } else if (userJourney === 'inmate-pay') {
        analyticsObject.sc_section = 'send-inmate';
        analyticsObject.sc_sub_section = 'register';
        analyticsObject.sc_sub_sub_section = 'check-email';
      } else {
        analyticsObject.sc_section = 'register-rp';
        analyticsObject.sc_sub_section = 'check-email';
      }

      //analyticsObject.sc_register_success = 'true';//PBL-2491
      var expiredTokenFlag = sessionStorage.getItem('DTM-TokenExpiredFlow');
      if (expiredTokenFlag !== undefined
        && expiredTokenFlag !== null
        && expiredTokenFlag === 'token-expired') {
        analyticsObject.sc_register_success = null;
        sessionStorage.removeItem('DTM-TokenExpiredFlow');
      }
      //PBL-2605 directCall("dtm_register_success");
      break;
    case 'DTM-REGISTER-VERIFY-EMAIL':
    case 'register-verify-email':
      analyticsObject.sc_section = 'register';
      analyticsObject.sc_sub_section = 'verifycode';
      if (sessionStorage.getItem('C1124') == 'true') {
        analyticsObject.sc_register_success = null;
      }
      else {
        //analyticsObject.sc_register_success = 'true';//PBL-2491
      }
      if (sessionStorage.getItem('is_register_success')) {
        sessionStorage.removeItem('is_register_success');
      } else {
        analyticsObject.sc_register_success = null;
      }
      var expiredTokenFlag = sessionStorage.getItem('DTM-TokenExpiredFlow');
      if (expiredTokenFlag !== undefined
        && expiredTokenFlag !== null
        && expiredTokenFlag === 'token-expired') {
        analyticsObject.sc_register_success = null;
        sessionStorage.removeItem('DTM-TokenExpiredFlow');
      }
      directCall('genericdirectcall-rp');
      //directCall("dtm_register_success");
      break;
    case 'DTM-VERIFY-CODE':
      analyticsObject.sc_register_success = null;
      sessionStorage.setItem('C1124', true);
      break;
    case 'DTM-UNLINK-PARTNER':
      analyticsObject.sc_link_name = extravalue;
      directCall('genericdirectcall-tl');
      break;
    case 'DTM-SSO':
      analyticsObject.sc_sso_status = 'true';
      break;
    case 'resetpass-success':
      directCall(type);
      break;
    case 'track-transfer-BILL_PAYMENT':
      analyticsObject.sc_section = 'track-transfer';
      analyticsObject.sc_sub_section = 'sender-tab'; //PBL-2414
      directCall('genericdirectcall-rp');
      break;
    case 'track-transfer-MONEY_TRANSFER':
      analyticsObject.sc_section = 'track-transfer';
      analyticsObject.sc_sub_section = 'receiver-tab';
      directCall('genericdirectcall-rp');
      break;
    case 'tracktransferSuccess':
      var tracktransfer_InquiryType = sessionStorage.getItem('Tracktransfer_Inquiry_Type');
      var IfnewTrackTransfer = sessionStorage.getItem("ifShowNewTat");
      if (tracktransfer_InquiryType == "MONEY_TRANSFER") {
        if (IfnewTrackTransfer)
          analyticsObject.sc_sub_section = 'sender-tab';
        else
          analyticsObject.sc_sub_section = 'moneytransfer-tab';
      } else if (tracktransfer_InquiryType == "BILL_PAYMENT") {
        if (IfnewTrackTransfer)
          analyticsObject.sc_sub_section = 'receiver_tab';
        else
          analyticsObject.sc_sub_section = 'billpayment-tab';
      } else {
        analyticsObject.sc_sub_section = 'moneytransfer-tab';
      }
      break;
    case 'tracktransferCancelSuccess':
      if (sessionStorage.getItem('isCancelTransfer') == 'true') {
        var uniqueId = sessionStorage.getItem('DTM-uniqueId');
        analyticsObject['sc_transaction_id'] = uniqueId;
        analyticsObject.sc_mt_channel = 'retail';
        analyticsObject.sc_canceltxn_status = 'canceltxn-displayed';
      }
      if (sessionStorage.getItem('cancelTransferClicked') == 'true') {
        analyticsObject.sc_canceltxn_status = 'canceltxn-initiated';
        break;
      }
      directCall('genericdirectcall-rp');
      break;
    case 'tracktransferverifyMobile':
      if (sessionStorage.getItem('isCancelTransfer') == 'true') {
        var uniqueId = sessionStorage.getItem('DTM-uniqueId');
        analyticsObject['sc_transaction_id'] = uniqueId;
        analyticsObject.sc_mt_channel = 'retail';
        analyticsObject.sc_section = 'cancel-transfer';
        analyticsObject.sc_sub_section = 'verificationoptions';
        analyticsObject.sc_sub_sub_section = 'text-me';
      }
      directCall('genericdirectcall-rp');
      break;
    case 'tracktransferverifyEmail':
      if (sessionStorage.getItem('isCancelTransfer') == 'true') {
        var uniqueId = sessionStorage.getItem('DTM-uniqueId');
        analyticsObject['sc_transaction_id'] = uniqueId;
        analyticsObject.sc_mt_channel = 'retail';
        analyticsObject.sc_section = 'cancel-transfer';
        analyticsObject.sc_sub_section = 'verificationoptions';
        analyticsObject.sc_sub_sub_section = 'email-me';
      }
      sessionStorage.removeItem('Tracktransfer_Inquiry_Type');
      directCall('genericdirectcall-rp');
      break;
    case 'track-transfer-retailcancelcode':
      if (sessionStorage.getItem('isCancelTransfer') == 'true') {
        var uniqueId = sessionStorage.getItem('DTM-uniqueId');
        analyticsObject['sc_transaction_id'] = uniqueId;
        analyticsObject.sc_section = 'cancel-transfer';
        analyticsObject.sc_sub_section = 'reason';
        analyticsObject.sc_mt_channel = 'retail';
        analyticsObject.sc_canceltxn_status = 'canceltxn-initiated';
        if (JSON.parse(sessionStorage.getItem('digitalCancelFlow')) == true) {
          analyticsObject.sc_mt_channel = 'digital';
        } else {
          analyticsObject.sc_mt_channel = 'retail';
        }
        if ((sessionStorage.getItem('cancel_reason_code') == 'CMD' || sessionStorage.getItem('cancel_reason_code') == 'OTH') && !sessionStorage.getItem('continueAction')) {
          analyticsObject.sc_link_display = 'canceltxn-reason';
          analyticsObject.sc_reason_category = sessionStorage.getItem('cancel_reason_code');
          break;
        }
        if ((sessionStorage.getItem('cancel_reason_code') == 'RNE' || sessionStorage.getItem('cancel_reason_code') == 'DDE') && !sessionStorage.getItem('continueAction')) {
          if (sessionStorage.getItem('selectedReasonTile')) {
            analyticsObject.sc_reason_category = sessionStorage.getItem('cancel_reason_code') + '-' + sessionStorage.getItem('selectedReasonTile');
          }
          else {
            analyticsObject.sc_reason_category = sessionStorage.getItem('cancel_reason_code');
          }
          break;
        }
        if (sessionStorage.getItem('continueAction') == "true") {
          analyticsObject.sc_link_display = 'canceltxn-reason-cont';
          if (sessionStorage.getItem('cancel_reason_code') == "DDE" && sessionStorage.getItem('page_name') == "retailcancelcode") {
            directCall("ct-dde-cont-click");
          }
          if (sessionStorage.getItem('cancel_reason_code') == "RNE" && sessionStorage.getItem('page_name') == "retailcancelcode") {
            directCall("ct-rne-cont-click");
          }
          if (sessionStorage.getItem('cancel_reason_code') == "OTH" && sessionStorage.getItem('page_name') == "retailcancelcode") {
            directCall("ct-oth-cont-click");
          }
          break;
        }
        if (sessionStorage.getItem('cancelAction') == 'true') {
          analyticsObject.sc_link_display = 'canceltxn-reason-cancel';
          analyticsObject.sc_canceltxn_status = 'canceltxn-abondonded';
          directCall('canceltxn-reason-cancel');
          break;
        }

      }
      break;
    case 'track-transfer-cancelreview':
      if (sessionStorage.getItem('isCancelTransfer') == 'true') {
        var uniqueId = sessionStorage.getItem('DTM-uniqueId');
        analyticsObject['sc_transaction_id'] = uniqueId;
        analyticsObject.sc_mt_channel = 'retail';
      }
      if (sessionStorage.getItem('isTransferFeeAvailable') == true) {
        analyticsObject.sc_link_display = 'refund-fee-option';
      }
      directCall('genericdirectcall-rp');
      break;
    case 'track-transfer-retailcallcc':
      if (sessionStorage.getItem('isCancelTransfer') == 'true') {
        var uniqueId = sessionStorage.getItem('DTM-uniqueId');
        analyticsObject['sc_transaction_id'] = uniqueId;
        analyticsObject.sc_section = 'cancel-transfer';
        analyticsObject.sc_sub_section = 'case-request';
        analyticsObject.sc_mt_channel = 'retail';
        analyticsObject.sc_canceltxn_status = 'canceltxn-casecreated';
      }
      break;
    case 'retailcallcc':
      if (sessionStorage.getItem('isCancelTransfer') == 'true') {
        var uniqueId = sessionStorage.getItem('DTM-uniqueId');
        analyticsObject['sc_transaction_id'] = uniqueId;
        analyticsObject.sc_section = 'cancel-transfer';
        analyticsObject.sc_sub_section = 'case-request';
        analyticsObject.sc_mt_channel = 'retail';
        analyticsObject.sc_canceltxn_status = 'canceltxn-casecreated';
        var cancelValidateResponse = sessionStorage.getItem("cancelValidateResponse_Obj");
        var pAmt = angular.fromJson(cancelValidateResponse).paymentDetails.origination.principalAmount;
        var fee = angular.fromJson(cancelValidateResponse).paymentDetails.fees;
        var rAmt = angular.fromJson(cancelValidateResponse).refund_details.refund_amount;
        var doRetailCancelAction = sessionStorage.getItem('doRetailCancelAction');
        analyticsObject.sc_reason_category = sessionStorage.getItem('cancel_reason_code');

        if (pAmt != null && pAmt != undefined && pAmt != '') {
          analyticsObject.sc_principal = (parseInt(pAmt) / 100).toFixed(2);
        }
        if (fee != null && fee != undefined && fee != '') {
          analyticsObject.sc_txn_fee = (parseInt(fee) / 100).toFixed(2);
        }
        if (rAmt != null && rAmt != undefined && rAmt != '') {
          analyticsObject.sc_refund_amt = (parseInt(rAmt) / 100).toFixed(2);
        }
      }
      directCall('genericdirectcall-rp');
      break;
    case 'track-transfer-retailcancelreview':
      analyticsObject.sc_service_name = 'moneytransfer';
      if (sessionStorage.getItem('cancel_reason_code')) {
        analyticsObject.sc_reason_category = sessionStorage.getItem('cancel_reason_code');
      }
      if (sessionStorage.getItem('isCancelTransfer') == 'true') {
        analyticsObject.sc_mt_channel = 'retail';
        var editReceiverClicked = sessionStorage.getItem('editReceiverClicked');
        var isFullRefund = sessionStorage.getItem('isFullRefund');
        var cancelActionReview = sessionStorage.getItem('cancelActionReview');
        var pageType = sessionStorage.getItem('CancelReviewPageType');
        var cancelValidateResponse = sessionStorage.getItem("cancelValidateResponse_Obj");
        var pAmt = angular.fromJson(cancelValidateResponse).paymentDetails.origination.principalAmount;
        var fee = angular.fromJson(cancelValidateResponse).paymentDetails.fees;
        var rAmt = angular.fromJson(cancelValidateResponse).refund_details.refund_amount;
        var doRetailCancelAction = sessionStorage.getItem('doRetailCancelAction');
        var uniqueId = sessionStorage.getItem('DTM-uniqueId');
        analyticsObject.sc_reason_category = sessionStorage.getItem('cancel_reason_code');
        analyticsObject['sc_transaction_id'] = uniqueId;
        if (pAmt != null && pAmt != undefined && pAmt != '') {
          analyticsObject.sc_principal = (parseInt(pAmt) / 100).toFixed(2);
        }
        if (fee != null && fee != undefined && fee != '') {
          analyticsObject.sc_txn_fee = (parseInt(fee) / 100).toFixed(2);
        }
        if (rAmt != null && rAmt != undefined && rAmt != '') {
          analyticsObject.sc_refund_amt = (parseInt(rAmt) / 100).toFixed(2);
        }
        if (editReceiverClicked != null && editReceiverClicked != undefined && editReceiverClicked != '' && editReceiverClicked == "true") {
          analyticsObject.sc_canceltxn_status = 'canceltxn-namechange';
        }
        if (cancelActionReview != null && cancelActionReview != undefined && cancelActionReview != '' && cancelActionReview == "true") {
          analyticsObject.sc_canceltxn_status = 'canceltxn-abondonded';

          if (isFullRefund == "true") {
            directCall("canceltxn-review-cancel-fr");
          }
          else if (isFullRefund == "false") {
            directCall("canceltxn-review-cancel-pr");
          }
          break;
        }

        switch (pageType) {
          case 'canceltxn-submit-fr':
            var fullRefund = sessionStorage.getItem('fullRefund');
            analyticsObject.sc_section = 'cancel-transfer';
            analyticsObject.sc_mt_channel = 'retail';
            analyticsObject.sc_sub_section = 'review-full-refund';
            analyticsObject.sc_canceltxn_status = 'canceltxn-reviewed-fr';
            if (fullRefund != null && fullRefund != undefined && fullRefund != '' && fullRefund == "true") {
              analyticsObject.sc_canceltxn_status = 'canceltxn-submitted-fr';
            }
            break;
          case 'canceltxn-submit-pr':
            var withoutFeeRefund = sessionStorage.getItem('withoutFeeRefund');
            analyticsObject.sc_section = 'cancel-transfer';
            analyticsObject.sc_mt_channel = 'retail';
            analyticsObject.sc_sub_section = 'review-pr-refund';
            analyticsObject.sc_canceltxn_status = 'canceltxn-reviewed-pr';
            if (withoutFeeRefund != null && withoutFeeRefund != undefined && withoutFeeRefund != '' && withoutFeeRefund == "true") {
              analyticsObject.sc_canceltxn_status = 'canceltxn-submitted-pr';
            }
            break;
          case 'canceltxn-submit-cr':
            var caseRequested = sessionStorage.getItem('caseRequested');
            analyticsObject.sc_section = 'cancel-transfer';
            analyticsObject.sc_mt_channel = 'retail';
            analyticsObject.sc_sub_section = 'case-request';
            analyticsObject.sc_canceltxn_status = 'canceltxn-caserequested';
            if (caseRequested != null && caseRequested != undefined && caseRequested != '' && caseRequested == "true") {
              analyticsObject.sc_canceltxn_status = 'canceltxn-caserequested';
            }
            break;
        }
      }
      if (doRetailCancelAction != null && doRetailCancelAction != undefined && doRetailCancelAction != '' && doRetailCancelAction == "true") {
        break;
      }
      var recClicked = JSON.parse(sessionStorage.getItem('editReceiverClicked'));
      if (!recClicked && !cancelActionReview) {
        directCall('genericdirectcall-rp');
      }
      break;
    case 'track-transfer-cancelreceipt':
      if (sessionStorage.getItem('cancel_reason_code')) {
        analyticsObject.sc_reason_category = sessionStorage.getItem('cancel_reason_code');
      }
      var cancelValidateResponse = sessionStorage.getItem("cancelValidateResponse_Obj");
      if (cancelValidateResponse) {
        var pAmt = angular.fromJson(cancelValidateResponse).paymentDetails.origination.principalAmount;
        var fee = angular.fromJson(cancelValidateResponse).paymentDetails.fees;
        var rAmt = angular.fromJson(cancelValidateResponse).refund_details.refund_amount;
        var uniqueId = sessionStorage.getItem('DTM-uniqueId');
        analyticsObject.sc_reason_category = sessionStorage.getItem('cancel_reason_code');
        analyticsObject['sc_transaction_id'] = uniqueId;
        analyticsObject.sc_section = 'cancel-transfer';
        analyticsObject.sc_mt_channel = 'retail';
        analyticsObject.sc_service_name = 'moneytransfer ';
        if (pAmt != null && pAmt != undefined && pAmt != '') {
          analyticsObject.sc_principal = (parseInt(pAmt) / 100).toFixed(2);
        }
        if (fee != null && fee != undefined && fee != '') {
          analyticsObject.sc_txn_fee = (parseInt(fee) / 100).toFixed(2);
        }
        if (rAmt != null && rAmt != undefined && rAmt != '') {
          analyticsObject.sc_refund_amt = (parseInt(rAmt) / 100).toFixed(2);
        }
        var pageType = sessionStorage.getItem('CancelReviewPageType');
        switch (pageType) {
          case 'canceltxn-submit-fr':
            analyticsObject.sc_canceltxn_status = 'canceltxn-successful-fr';
            analyticsObject.sc_sub_section = 'receipt-full-refund';
            break;
          case 'canceltxn-submit-pr':
            analyticsObject.sc_canceltxn_status = 'canceltxn-successful-pr';
            analyticsObject.sc_sub_section = 'receipt-pr-refund';
            break;
          case 'canceltxn-submit-cr':
            analyticsObject.sc_sub_section = 'case-request';
            analyticsObject.sc_canceltxn_status = 'canceltxn-casecreated';
            break;
        }
      }

      break;
    case 'tracktransferverifycall':
      var trackingNumber = sessionStorage.getItem('DTM-TrackingNumber');
      analyticsObject.sc_section = 'name-change';
      analyticsObject.sc_sub_section = 'verificationoptions';
      analyticsObject.sc_sub_sub_section = 'text-me';
      if (trackingNumber !== undefined && trackingNumber !== null && trackingNumber !== '') {
        analyticsObject.sc_mtcn = trackingNumber;
      }
      directCall('genericdirectcall-rp');
      break;
    case 'tracktransferverifypin':
      var trackingNumber = sessionStorage.getItem('DTM-TrackingNumber');
      var cancelTransfer = sessionStorage.getItem('isCancelTransfer');
      analyticsObject.sc_section = 'name-change';
      analyticsObject.sc_sub_section = 'enter-pin';
      if (sessionStorage.getItem('isCancelTransfer') == 'true') {
        analyticsObject.sc_mt_channel = 'retail';
      }
      if (trackingNumber !== undefined && trackingNumber !== null && trackingNumber !== '') {
        analyticsObject.sc_mtcn = trackingNumber;
      }
      if (cancelTransfer !== undefined && cancelTransfer !== null && cancelTransfer !== '' && cancelTransfer === 'true') {
        var uniqueId = sessionStorage.getItem('DTM-uniqueId');
        analyticsObject['sc_transaction_id'] = uniqueId;
        analyticsObject.sc_mt_channel = 'retail';
        analyticsObject.sc_section = 'cancel-transfer';
        analyticsObject.sc_sub_section = 'enter-pin';
      }
      directCall('genericdirectcall-rp');
      break;
    case 'tracktransferverifyquestion':
      var trackingNumber = sessionStorage.getItem('DTM-TrackingNumber');
      var cancelTransfer = sessionStorage.getItem('isCancelTransfer');
      analyticsObject.sc_section = 'name-change';
      if (trackingNumber !== undefined && trackingNumber !== null && trackingNumber !== '') {
        analyticsObject.sc_mtcn = trackingNumber;
      }
      if (cancelTransfer !== undefined && cancelTransfer !== null && cancelTransfer !== '' && cancelTransfer === 'true') {
        var uniqueId = sessionStorage.getItem('DTM-uniqueId');
        analyticsObject['sc_transaction_id'] = uniqueId;
        analyticsObject.sc_section = 'cancel-transfer';
        analyticsObject.sc_mt_channel = 'retail';
      }
      analyticsObject.sc_sub_section = 'securityquestion';
      directCall('genericdirectcall-rp');
      break;
    case 'txn-name-editcall':
      var trackingNumber = sessionStorage.getItem('DTM-TrackingNumber');
      analyticsObject.sc_section = 'name-change';
      analyticsObject.sc_sub_section = 'editreceiver-name';
      if (trackingNumber !== undefined && trackingNumber !== null && trackingNumber !== '') {
        analyticsObject.sc_mtcn = trackingNumber;
      }
      directCall('genericdirectcall-rp');
      break;
    case 'txn-name-review':
      var trackingNumber = sessionStorage.getItem('DTM-TrackingNumber');
      if (trackingNumber !== undefined && trackingNumber !== null && trackingNumber !== '') {
        analyticsObject.sc_mtcn = trackingNumber;
      }
      var uniqueId = sessionStorage.getItem('DTM-uniqueId');
      analyticsObject.sc_section = 'name-change';
      analyticsObject.sc_sub_section = 'review';
      analyticsObject['sc_transaction_id'] = uniqueId;
      directCall('genericdirectcall-rp');
      break;
    case 'txn-name-receipt':
      var trackingNumber = sessionStorage.getItem('DTM-TrackingNumber');
      if (trackingNumber !== undefined && trackingNumber !== null && trackingNumber !== '') {
        analyticsObject.sc_mtcn = trackingNumber;
      }
      var uniqueId = sessionStorage.getItem('DTM-uniqueId');
      analyticsObject.sc_section = 'name-change';
      analyticsObject.sc_sub_section = 'receipt';
      analyticsObject['sc_transaction_id'] = uniqueId;
      sessionStorage.removeItem('DTM-uniqueId');
      directCall('genericdirectcall-rp');
      break;
    case 'kycoptions':
      analyticsObject.sc_section = 'send-money';
      analyticsObject.sc_sub_section = 'kycverificationoptions';
      directCall('genericdirectcall-rp');
      break;
    case 'kycoption-verify':
      var selectedKycOptionObj = sessionStorage.getItem('SelectedKycOption');
      //PBL-2683 Start
      if (analyticsObject.sc_section !== 'send-inmate') {
        analyticsObject.sc_section = 'send-money';
      }
      //PBL-2683 End
      analyticsObject.sc_sub_section = 'kycverificationoptions';
      if (selectedKycOptionObj !== undefined
        && selectedKycOptionObj !== null
        && selectedKycOptionObj.kycDeliveryFlag !== undefined) {
        if (selectedKycOptionObj.kycDeliveryFlag === 'callme') {
          analyticsObject.sc_sub_section = 'kyc';
          analyticsObject.sc_sub_sub_section = 'callentercode';
        }
        if (selectedKycOptionObj.kycDeliveryFlag === 'text-me') {
          analyticsObject.sc_sub_section = 'kyc';
          analyticsObject.sc_sub_sub_section = 'smsentercode';
        }
        if (selectedKycOptionObj.kycDeliveryFlag === 'vws') {
          analyticsObject.sc_sub_section = 'kyc';
          analyticsObject.sc_sub_sub_section = 'vws';
        }
        if (selectedKycOptionObj.kycDeliveryFlag === 'email-me') {
          analyticsObject.sc_sub_section = 'kyc';
          analyticsObject.sc_sub_sub_section = 'emailentercode';
        }
        if (selectedKycOptionObj.kycDeliveryFlag === 'vma') {
          analyticsObject.sc_sub_section = 'kyc';
          analyticsObject.sc_sub_sub_section = 'vwa';
        }
      }

      directCall('genericdirectcall-rp');
      break;
    case 'ducDocUpload':
      analyticsObject.sc_section = 'kyc';
      analyticsObject.sc_sub_section = 'duc';
      directCall('genericdirectcall-rp');
      break;
    case 'save-address':
      analyticsObject.sc_section = 'profile';
      analyticsObject.sc_sub_section = 'personal-info';
      analyticsObject.sc_link_name = 'save-address';
      directCall('profile-directcall');
      break;
    case 'edit-password':
      analyticsObject.sc_section = 'profile';
      analyticsObject.sc_sub_section = 'edit-password';
      analyticsObject.sc_link_name = 'edit-password';
      directCall('profile-directcall');
      break;
    case 'save-password':
      analyticsObject.sc_section = 'profile';
      analyticsObject.sc_sub_section = 'personal-info';
      analyticsObject.sc_link_name = 'save-password';
      directCall('profile-directcall');
      break;
    case 'edit-securityques' :
      analyticsObject.sc_section = 'profile';
      analyticsObject.sc_sub_section = 'edit-securityques';
      analyticsObject.sc_link_name = 'edit-securityques';
      directCall('profile-directcall');
      break;
    case 'save-securityques':
      analyticsObject.sc_section = 'profile';
      analyticsObject.sc_sub_section = 'personal-info';
      analyticsObject.sc_link_name = 'save-securityques';
      directCall('profile-directcall');
      break;
    case 'history':
      var showDetails = sessionStorage.getItem('showDetailsEventFired');
      var ifCancelTransferEnabled = sessionStorage.getItem('isCancelTransfer');
      var ifNameChangeEnabled = sessionStorage.getItem('digitalNameChange');
      var trackingNumber = sessionStorage.getItem('DTM-TrackingNumber');

      if (trackingNumber !== undefined && trackingNumber !== null && trackingNumber !== '') {
        analyticsObject.sc_mtcn = trackingNumber;
      }

      if (showDetails != '' && showDetails != null && showDetails != undefined && showDetails == 'true') {
        analyticsObject.sc_link_name = 'showdetails-txnhistory';
        analyticsObject.sc_mt_channel = 'digital';
        if ((ifNameChangeEnabled && ifNameChangeEnabled == 'true') && (ifCancelTransferEnabled && ifCancelTransferEnabled == 'true')) {
          analyticsObject.sc_link_display = 'namechange-display|canceltxn-th-enabled';
        }
        else if (ifNameChangeEnabled && ifNameChangeEnabled == 'true') {
          analyticsObject.sc_link_display = 'namechange-display';
        }
        else if (ifCancelTransferEnabled && ifCancelTransferEnabled == 'true') {
          analyticsObject.sc_link_display = 'canceltxn-th-enabled';
        }
        // directCall('genericdirectcall-tl');
        break;
      }
      analyticsObject.sc_section = 'profile';
      analyticsObject.sc_sub_section = 'txn-history';
      if (sessionStorage.getItem('DTM-3rdPartyPopUp') === 'true') {
        analyticsObject.sc_sub_sub_section = 'thirdPartyDataConsent';
      }
      /* Removing the following condition since we are nowhere setting this session variable*/
     // if (sessionStorage.getItem('fireDirectApi') === 'true') {
        directCall('genericdirectcall-rp');
       //   sessionStorage.setItem('fireDirectApi', false);
      //}
      break;
    case 'coachmark':
      analyticsObject.sc_link_name = 'coachmark';
      directCall('genericdirectcall-tl');
      break;
    case 'profile':
      analyticsObject.sc_section = 'profile';
      analyticsObject.sc_sub_section = 'personal-info';
      checkSMRegisterFlow();
      if (sessionStorage.getItem('previous_page_name') == "emailpin") {
      } else {
        directCall('profile-directcall');
      }
      break;
    case 'confirm-pin':
      analyticsObject.sc_section = 'profile';
      analyticsObject.sc_sub_section = 'personal-info';
      analyticsObject.sc_link_name = 'confirm-pin';
      directCall('profile-directcall');
      break;
    case 'edit-email':
      analyticsObject.sc_section = 'profile';
      analyticsObject.sc_sub_section = 'edit-email';
      analyticsObject.sc_link_name = 'edit-email';
      directCall('profile-directcall');
      break;
    case 'edit-email-confirm':
      analyticsObject.sc_section = 'profile';
      analyticsObject.sc_sub_section = 'edit-email-confirm';
      directCall('profile-directcall');
      break;
    case 'emailpin':
      analyticsObject.sc_section = 'profile';
      analyticsObject.sc_sub_section = 'update-emailpin';
      directCall('profile-directcall');
      break;
    case 'settings':
      analyticsObject.sc_section = 'profile';
      analyticsObject.sc_sub_section = 'notifications';
      directCall('profile-directcall');
      break;
    case 'my-receivers':
      analyticsObject.sc_section = 'profile';
      analyticsObject.sc_sub_section = 'my-receivers';
      directCall('profile-directcall');
      break;
    case 'edit-receiver':
      analyticsObject.sc_section = 'my-receivers';
      analyticsObject.sc_sub_section = 'edit-receiver';
      directCall('genericdirectcall-rp');
      break;
    case 'add-receiver':
      analyticsObject.sc_section = 'my-receivers';
      analyticsObject.sc_sub_section = 'add-receiver';
      directCall('genericdirectcall-rp');
      break;
    case 'more-info':
      analyticsObject.sc_section = 'send-money';
      analyticsObject.sc_sub_section = 'receiverinformation';
      analyticsObject.sc_sub_sub_section = 'more-info';
      directCall('genericdirectcall-rp');
      break;
    case 'ifsc-code':
      analyticsObject.sc_section = 'send-money';
      analyticsObject.sc_sub_section = 'ifsc-code';
      directCall('genericdirectcall-rp');
      break;
    case 'ifsc-applied':
      analyticsObject.sc_link_name = 'ifsc-applied';
      break;
    case 'report-fraud':
      analyticsObject.sc_section = 'report-fraud';
      directCall('genericdirectcall-rp');
      break;
    case 'report-fraud-hotline':
      analyticsObject.sc_section = 'report-fraud';
      analyticsObject.sc_sub_section = 'hotline';
      directCall('genericdirectcall-rp');
      break;
    case 'fraudreport-success':
      analyticsObject.sc_section = 'report-fraud';
      analyticsObject.sc_sub_section = 'fraudreport-success';
      directCall('genericdirectcall-rp');
      break;
    case 'alert':
      analyticsObject.sc_section = 'report-fraud';
      analyticsObject.sc_sub_section = 'alert';
      directCall('genericdirectcall-rp');
      break;
    case 'appoverlay':
      analyticsObject.sc_section = 'appoverlay';
      analyticsObject.sc_sub_section = null;
      directCall('appdownloadoverlay');
      break;
    case 'canceltransfercall':
      analyticsObject.sc_section = 'cancel-transfer';
      analyticsObject.sc_sub_section = 'confirm';
      analyticsObject.sc_link_name = 'canceltxn-history';
      analyticsObject.sc_canceltxn_status = 'canceltxn-initiated';
      analyticsObject.sc_service_name = 'moneytransfer';
      directCall('canceltransfercall');
      break;
    case 'cancelreview':
      analyticsObject.sc_section = 'cancel-transfer';
      if (sessionStorage.getItem('cancel_reason_code')) {
        analyticsObject.sc_reason_category = sessionStorage.getItem('cancel_reason_code');
      }
      analyticsObject.sc_sub_section = 'review';
      //analyticsObject.sc_canceltxn_status ='canceltxn-initiated';
      analyticsObject.sc_service_name = 'moneytransfer';
      setCancelTransactionObject('cancelreview');
      if (sessionStorage.getItem('isCancelTransfer') == 'true') {
        var cancelValidateResponse = sessionStorage.getItem("cancelValidateResponse_Obj");

        var pAmt = angular.fromJson(cancelValidateResponse).paymentDetails.origination.principalAmount;
        var fee = angular.fromJson(cancelValidateResponse).paymentDetails.fees;
        var rAmt = angular.fromJson(cancelValidateResponse).refund_details.refund_amount;
        var pageType = sessionStorage.getItem('CancelReviewPageType');
        var uniqueId = sessionStorage.getItem('DTM-uniqueId');
        analyticsObject['sc_transaction_id'] = uniqueId;
        if (pAmt != null && pAmt != undefined && pAmt != '') {
          analyticsObject.sc_principal = (parseInt(pAmt) / 100).toFixed(2);
        }
        if (fee != null && fee != undefined && fee != '') {
          analyticsObject.sc_txn_fee = (parseInt(fee) / 100).toFixed(2);
        }
        if (rAmt != null && rAmt != undefined && rAmt != '') {
          analyticsObject.sc_refund_amt = (parseInt(rAmt) / 100).toFixed(2);
        }
        analyticsObject.sc_mt_channel = 'retail';
        analyticsObject.sc_section = 'cancel-transfer';
        switch (pageType) {
          case 'canceltxn-submit-fr':
            analyticsObject.sc_mt_channel = 'retail';
            analyticsObject.sc_sub_section = 'review-full-refund';
            analyticsObject.sc_canceltxn_status = 'canceltxn-reviewed-fr';
            break;
          case 'canceltxn-submit-pr':
            analyticsObject.sc_mt_channel = 'retail';
            analyticsObject.sc_sub_section = 'review-pr-refund';
            analyticsObject.sc_canceltxn_status = 'canceltxn-reviewed-pr';
            break;
          case 'canceltxn-submit-cr':
            analyticsObject.sc_mt_channel = 'retail';
            analyticsObject.sc_sub_section = 'case-request';
            analyticsObject.sc_canceltxn_status = 'canceltxn-caserequested';
            break;
        }
        break;
      }

      directCall('canceltransfercall');
      break;
    case 'cancelreceipt':
      analyticsObject.sc_section = 'cancel-transfer';
      analyticsObject.sc_sub_section = 'receipt-transfer-cont';
      analyticsObject.sc_canceltxn_status = 'canceltxn-trnf-cont';
      analyticsObject.sc_service_name = 'moneytransfer';
      if (sessionStorage.getItem('cancel_reason_code')) {
        analyticsObject.sc_reason_category = sessionStorage.getItem('cancel_reason_code');
      }
      setCancelTransactionObject('cancelreceipt');
      if (sessionStorage.getItem('isCancelTransfer') == 'true') {
        var cancelValidateResponse = sessionStorage.getItem("cvresponse");
        var pAmt = angular.fromJson(cancelValidateResponse).paymentDetails.origination.principalAmount;
        var fee = angular.fromJson(cancelValidateResponse).paymentDetails.fees;
        var rAmt = angular.fromJson(cancelValidateResponse).refund_details.refund_amount;
        var uniqueId = sessionStorage.getItem('DTM-uniqueId');
        analyticsObject['sc_transaction_id'] = uniqueId;
        analyticsObject.sc_section = 'cancel-transfer';
        analyticsObject.sc_mt_channel = 'retail';
        analyticsObject.sc_service_name = 'moneytransfer ';
        if (pAmt != null && pAmt != undefined && pAmt != '') {
          analyticsObject.sc_principal = (parseInt(pAmt) / 100).toFixed(2);
        }
        if (fee != null && fee != undefined && fee != '') {
          analyticsObject.sc_txn_fee = (parseInt(fee) / 100).toFixed(2);
        }
        if (rAmt != null && rAmt != undefined && rAmt != '') {
          analyticsObject.sc_refund_amt = (parseInt(rAmt) / 100).toFixed(2);
        }
        var pageType = sessionStorage.getItem('CancelReviewPageType');
        switch (pageType) {
          case 'canceltxn-submit-fr':
            analyticsObject.sc_canceltxn_status = 'canceltxn-successful-fr';
            analyticsObject.sc_sub_section = 'receipt-full-refund';
            break;
          case 'canceltxn-submit-pr':
            analyticsObject.sc_canceltxn_status = 'canceltxn-successful-pr';
            analyticsObject.sc_sub_section = 'receipt-pr-refund';
            break;
          case 'canceltxn-submit-cr':
            analyticsObject.sc_sub_section = 'case-request';
            analyticsObject.sc_canceltxn_status = 'canceltxn-casecreated';
            break;
        }
        analyticsObject.sc_mt_channel = 'retail';
        sessionStorage.removeItem('cvresponse');
        if (sessionStorage.getItem('page_name') == 'cancelreceipt') {
          directCall('genericdirectcall-rp');
        }
        break;
      }

      directCall('canceltransfercall');
      break;
    case 'canceldecline':
      analyticsObject.sc_section = 'cancel-transfer';
      analyticsObject.sc_sub_section = 'declined';
      analyticsObject.sc_canceltxn_status = 'canceltxn-declined';
      analyticsObject.sc_service_name = 'canceltransfer';
      setCancelTransactionObject('cancelreceipt');
      if (sessionStorage.getItem('isCancelTransfer') == 'true') {
        var uniqueId = sessionStorage.getItem('DTM-uniqueId');
        analyticsObject['sc_transaction_id'] = uniqueId;
        analyticsObject.sc_mt_channel = 'retail';
        analyticsObject.sc_canceltxn_status = 'canceltxn-abondonded';
        directCall('genericdirectcall-rp');
        break;
      }
      directCall('canceltransfercall');
      break;

    case 'canceltransfer-eventcall':
      analyticsObject.sc_section = 'cancel-transfer';
      analyticsObject.sc_sub_section = 'review';
      analyticsObject.sc_canceltxn_status = 'canceltxn-abondonded';
      analyticsObject.sc_service_name = 'canceltransfer';
      directCall('canceltransfer-eventcall');
      break;
    case 'globalcollectid':
      analyticsObject.sc_section = 'send-money';
      analyticsObject.sc_sub_section = 'globalcollectid';
      directCall('genericdirectcall-rp');
      break;
    case 'receipt-staged':
      analyticsObject.sc_section = 'send-money';
      analyticsObject.sc_sub_section = 'receipt-staged';
      directCall('genericdirectcall-rp');
      break;
    case 'mywu' :
      analyticsObject.sc_section = 'mywu';
      analyticsObject.sc_sub_section = 'rewards';
      directCall('genericdirectcall-rp');
      break;
    case 'closeMYWU' :
      analyticsObject.sc_section = 'mywu';
      analyticsObject.sc_sub_section = 'rewards';
      delete analyticsObject.sc_link_display;
      delete analyticsObject.sc_sub_sub_section;
      directCall('genericdirectcall-rp');
      break;
    case 'RedeemMYWU' :
      analyticsObject.sc_section = 'mywu';
      analyticsObject.sc_sub_section = 'rewards';
      analyticsObject.sc_sub_sub_section = 'usereward';
      directCall('genericdirectcall-rp');
      break;
    case 'allrewardMYWU' :
      analyticsObject.sc_section = 'mywu';
      analyticsObject.sc_sub_section = 'rewards';
      analyticsObject.sc_sub_sub_section = 'usereward';
      analyticsObject.sc_link_display = extravalue;
      directCall('genericdirectcall-rp');
      break;
    case 'selectedRewardMYWU' :
      analyticsObject.sc_section = 'mywu';
      analyticsObject.sc_sub_section = 'rewards';
      analyticsObject.sc_sub_sub_section = 'usereward';
      delete analyticsObject.sc_link_display;
      directCall('genericdirectcall-rp');
      break;
    case 'MYWURewards' :
      analyticsObject.sc_section = 'mywu';
      analyticsObject.sc_sub_section = 'rewards';
      directCall('genericdirectcall-rp');
      break;
    case 'closeRewards' :
      analyticsObject.sc_section = 'mywu';
      analyticsObject.sc_sub_section = 'rewards';
      delete analyticsObject.sc_sub_sub_section;
      delete analyticsObject.sc_link_display;
      directCall('genericdirectcall-rp');
      break;
    case 'rewardRedeemed' :
      analyticsObject.sc_section = 'mywu';
      analyticsObject.sc_sub_section = 'rewards';
      analyticsObject.sc_sub_sub_section = 'applied';
      analyticsObject.sc_reward_type = extravalue;
      directCall('genericdirectcall-rp');
      break;
    case 'redeem-points' :
      analyticsObject.sc_link_name = 'redeem-points';
      break;
    case 'DTM-LINKCARD' :
      analyticsObject.sc_section = 'mywu';
      analyticsObject.sc_sub_section = 'mergecard';
      directCall('genericdirectcall-rp');
      break;

    case 'DTM-MERGESUCCESSFUL' :
      analyticsObject.sc_section = 'mywu';
      analyticsObject.sc_sub_section = 'mergesuccessful';
      directCall('genericdirectcall-rp');
      break;

    case 'linktrackingcall' :

      directCall('linktrackingcall');
      break;
    case 'DTM-PRICE-ESTIMATOR-TAB1' :
      var priceEstimatorType = sessionStorage.getItem('PriceEstimatorTypeTemp');
      analyticsObject.sc_section = 'price-estimator';
      switch (priceEstimatorType) {
        case 'app-priceEstimator-online':
          analyticsObject.sc_sub_section = 'online-tab';
          break;
        case 'app-priceEstimator-inStore':
          analyticsObject.sc_sub_section = 'instore-tab';
          break;
        case 'app-priceEstimator-mobileApp':
          analyticsObject.sc_sub_section = 'mobileapp-tab';
          break;
        case 'app-priceEstimator-phoneCall':
          analyticsObject.sc_sub_section = 'phonecall-tab';
          break;
        default:
        // do nothing :)
      }
      //generic call commented for INTLEXP-4850
      //directCall('genericdirectcall-rp');
      break;
    case 'DTM-EDUIDLIGHTBOXCALL' :
      analyticsObject.sc_section = 'send-money';
      analyticsObject.sc_sub_section = 'start';
      analyticsObject.sc_sub_sub_section = 'check-amount';
      directCall('fmalightboxcall');
      break;
    case 'euidverificationdirectcall' :
      if (sessionStorage.getItem('euidverificationdirectcall') !== 'triggered') {
        analyticsObject.sc_section = 'euid';
        analyticsObject.sc_sub_section = 'confirmaddress';
        directCall('euidverificationdirectcall');
        sessionStorage.setItem('euidverificationdirectcall', 'triggered');
      }
      break;
    case 'euidverificationdirectcall-lettersend' :
      analyticsObject.sc_section = 'euid';
      analyticsObject.sc_sub_section = 'lettersent';
      directCall('euidverificationdirectcall');
      break;
    case 'euidverificationdirectcall-success' :
      analyticsObject.sc_section = 'euid';
      analyticsObject.sc_sub_section = 'successful';
      directCall('euidverificationdirectcall');
      break;
    case 'DTM-EDUIDLIGHTBOXCALL-REVIEW' :
      analyticsObject.sc_section = 'send-money';
      analyticsObject.sc_sub_section = 'review';
      analyticsObject.sc_sub_sub_section = 'regular-user';
      directCall('fmalightboxcall');
      break;
    case 'collectid.choose':
      analyticsObject.sc_section = 'collectid';
      analyticsObject.sc_sub_section = 'options';
      directCall('euidverificationdirectcall');
      break;
    case 'collectid.collect':
      analyticsObject.sc_section = 'collectid';
      analyticsObject.sc_sub_section = 'details';
      directCall('euidverificationdirectcall');
      break;
    case 'collectid.confirmybl':
      analyticsObject.sc_sub_section = 'confirmybl';
      directCall('euidverificationdirectcall');
      break;
    // Confirm page has view & edit mode.
    case 'collectid.confirm':
      // type has to be online or offline
      if (action === 'online') {
        analyticsObject.sc_section = 'collectid';
        analyticsObject.sc_sub_section = (extravalue === 'edit') ? 'edit-identity' : 'identity';
        directCall('euidverificationdirectcall');
      } else if (action === 'offline') {
        analyticsObject.sc_section = 'collectid';
        analyticsObject.sc_sub_section = (extravalue === 'edit') ? 'edit-confirmaddress' : 'confirmaddress';
        directCall('euidverificationdirectcall');
      }
      break;
    case 'collectid.error':
      analyticsObject.sc_section = 'collectid';
      if (country == 'IN') {
        analyticsObject.sc_sub_section = 'ekyc-failed';
      } else {
        analyticsObject.sc_sub_section = 'failed';
      }
      directCall('euidverificationdirectcall');
      break;
    case 'DTM-FB':
      if (action == 'SHOW-OPTIN') {
        if (analyticsObject.sc_link_display) {
          analyticsObject.sc_link_display += '|mess_fb';
        } else {
          analyticsObject.sc_link_display = 'mess_fb';
        }
        directCall('genericdirectcall-tl');
      } else if (action == 'SUBSCRIBE') {
        analyticsObject.sc_link_name = 'mess_fb_opt_saved';
        directCall('genericdirectcall-tl');
      }
      break;
    case 'pickupcashStart':
      analyticsObject.sc_section = 'pickupcash';
      analyticsObject.sc_sub_section = 'start';
      analyticsObject.sc_service_name = 'pickupcash';
      directCall('genericdirectcall-rp');
      break;
    case 'PickupCash_SenderInfo':
      analyticsObject.sc_section = 'pickupcash';
      analyticsObject.sc_sub_section = 'senderinfo';
      directCall('genericdirectcall-rp');
      break;
    case 'PickupCash_NameMismatch':
      analyticsObject.sc_section = 'pickupcash';
      analyticsObject.sc_sub_section = 'senderinfo';
      analyticsObject.sc_sub_sub_section = 'namemismatch';
      directCall('genericdirectcall-rp');
      break;
    case 'pickupcashreceipt':
      analyticsObject.sc_section = 'pickupcash';
      analyticsObject.sc_sub_section = 'confirm';
      directCall('genericdirectcall-rp');
      break;
    case 'promoLink' :
      analyticsObject.sc_link_display = extravalue;
      break;
    case 'allreward' :
      analyticsObject.sc_section = 'send-money';
      analyticsObject.sc_sub_section = 'start';
      analyticsObject.sc_sub_sub_section = 'usereward';
      if (extravalue == '') {
        delete analyticsObject.sc_link_display;
      } else {
        analyticsObject.sc_link_display = extravalue;
      }
      directCall('genericdirectcall-rp');
      break;
    case 'rewardApproved' :
      analyticsObject.sc_section = 'send-money';
      analyticsObject.sc_sub_section = 'start';
      delete analyticsObject.sc_sub_sub_section;
      if (sessionStorage.getItem('discount_link')) {
        analyticsObject.sc_link_display = sessionStorage.getItem('discount_link');
      } else {
        analyticsObject.sc_link_display = 'redeem-promo-displayed';
      }
      if (null != extravalue && extravalue !== undefined) {
        analyticsObject.sc_reward_type = extravalue;
      }
      directCall('genericdirectcall-rp');
      break;
    case 'selectedReward' :
      analyticsObject.sc_section = 'send-money';
      analyticsObject.sc_sub_section = 'start';
      analyticsObject.sc_sub_sub_section = 'usereward';
      delete analyticsObject.sc_link_display;
      directCall('genericdirectcall-rp');
      break;
    case 'enterpromo' :
      analyticsObject.sc_section = 'send-money';
      analyticsObject.sc_sub_section = 'start';
      analyticsObject.sc_sub_sub_section = 'enterpromo';
      delete analyticsObject.sc_link_display;
      directCall('genericdirectcall-rp');
      break;
    case 'cancelRewardPromo' :
      analyticsObject.sc_section = 'send-money';
      analyticsObject.sc_sub_section = 'start';
      delete analyticsObject.sc_sub_sub_section;
      if (sessionStorage.getItem('discount_link')) {
        analyticsObject.sc_link_display = sessionStorage.getItem('discount_link');
      } else {
        analyticsObject.sc_link_display = 'redeem-promo-displayed';
      }
      directCall('genericdirectcall-rp');
      break;
    case 'discountApplied' :
      analyticsObject.sc_section = 'send-money';
      analyticsObject.sc_sub_section = 'start';
      analyticsObject.sc_discount = extravalue.value;
      analyticsObject.sc_promo_code = extravalue.code;
      setTransactionParamsForGenericDirectCall();
      delete analyticsObject.sc_sub_sub_section;
      directCall('genericdirectcall-rp');
      break;
    case 'verificationoptions' :
      directCall('genericdirectcall-rp');
      break;
    case 'video-confirminfo' :
      analyticsObject.sc_section = 'verification';
      analyticsObject.sc_sub_section = 'video-confirminfo';
      directCall('genericcall');
      break;
    case 'postal-confirminfo' :
      analyticsObject.sc_section = 'verification';
      analyticsObject.sc_sub_section = 'postal-confirminfo';
      directCall('genericcall');
      break;
    case 'postal-result' :
      analyticsObject.sc_section = 'verification';
      analyticsObject.sc_sub_section = 'postal-result';
      directCall('genericcall');
      break;
    case 'video-result' :
      if (sessionStorage.getItem('page_name') !== "verificationoptions") {
        analyticsObject.sc_section = 'verification';
        analyticsObject.sc_sub_section = 'video-result';
      }
      if (action === "video_enable_param") {
        analyticsObject.sc_link_display = 'videochat-displayed-enabled';
      }
      else {
        analyticsObject.sc_link_display = 'videochat-displayed-disabled';
      }

      directCall('genericcall');
      break;
    case 'DTM-FRAUDPROTECT-POPUP':
        analyticsObject.sc_sub_sub_section = 'fraudprotection';
        directCall('genericdirectcall-rp');
        break;
    case 'DTM-FRAUDPROTECT-POPUP-ACCEPT':
        delete analyticsObject.sc_sub_sub_section;
        if(analyticsObject.sc_loginsuccess) {
          delete analyticsObject.sc_loginsuccess;
        }
        if(analyticsObject.sc_register_success) {
          delete analyticsObject.sc_register_success;
        }
        sessionStorage.removeItem('sc_register_success');
        directCall('genericdirectcall-rp');
        break;
    default:
      if (type === 'sendmoneyoption') {
        analyticsObject.sc_sub_section = 'start';
        //MYWU-2330 start
        var discount_link = sessionStorage.getItem('discount_link');
        if (discount_link)
          analyticsObject.sc_link_display = discount_link;
        //MYWU-2330 ends
        var kycVerified = sessionStorage.getItem('kyc-Verified');
        if (kycVerified) {
          analyticsObject.sc_ekyc_success = kycVerified;
          //sessionStorage.removeItem('kyc-Verified');
        }
      } else if (type === 'decline') {
        analyticsObject.sc_sub_section = 'declineoptions';
      } else if (type === 'confirmbank-pwmb') {
        analyticsObject.sc_sub_section = 'validateaccount';
      } else if (type === 'forgot-password') {
        analyticsObject.sc_section = 'forgot-password-rp';
        analyticsObject.sc_sub_section = 'start';
      } else if (type === 'forgotpassword-emailsent') {
        analyticsObject.sc_section = 'forgot-password-rp';
        analyticsObject.sc_sub_section = 'emailsent';
      } else if (type === 'reset-password') {
        analyticsObject.sc_section = 'forgot-password-rp';
        analyticsObject.sc_sub_section = 'securityquestion';
      } else if (type === 'reset-password-create-new-password') {
        analyticsObject.sc_section = 'forgot-password-rp';
        analyticsObject.sc_sub_section = 'resetpassword';
      } else if (type === 'tracktransfer') {
        analyticsObject.sc_section = 'track-transfer';
        analyticsObject.sc_sub_section = 'moneytransfer-tab';
        analyticsObject.sc_sub_sub_section = null;
        directCall('genericdirectcall-rp');
      } else if (type === 'tracktransfer-success') {
        analyticsObject.sc_section = 'track-transfer';
        var trackingNumber = sessionStorage.getItem('DTM-TrackingNumber');
        var trackingMessageId = sessionStorage.getItem('DTM-TrackingMessageID');
        var cancelViaChat = sessionStorage.getItem('DTM-CancelViaChat');
        var nameChange = sessionStorage.getItem('DTM-NameChange');
        var cancelTransfer = sessionStorage.getItem('isCancelTransfer');
        var digitalnc = sessionStorage.getItem('isNameChange');

        if (cancelViaChat !== undefined && cancelViaChat !== null && cancelViaChat !== '' && cancelViaChat === 'true' && nameChange !== undefined && nameChange !== null && nameChange !== '' && nameChange === 'true') {
          analyticsObject.sc_link_display = 'cancelchat-enabled|namechange-display';
        } else if (cancelViaChat !== undefined && cancelViaChat !== null && cancelViaChat !== '' && cancelViaChat === 'true') {
          analyticsObject.sc_link_display = 'cancelchat-enabled';
        } else if (nameChange !== undefined && nameChange !== null && nameChange !== '' && nameChange === 'true') {
          analyticsObject.sc_mt_channel = 'retail';
          analyticsObject.sc_link_display = 'namechange-display';
        } else if (cancelTransfer !== undefined && cancelTransfer !== null && cancelTransfer !== '' && cancelTransfer === 'true') {
          analyticsObject.sc_mt_channel = 'retail';
        }

        analyticsObject.sc_msg_id = trackingMessageId;
        if (trackingNumber !== undefined && trackingNumber !== null && trackingNumber !== '') {
          analyticsObject.sc_mtcn = trackingNumber;
        }
        //        sessionStorage.removeItem('DTM-TrackingNumber');
        sessionStorage.removeItem('DTM-TrackingMessageID');
        sessionStorage.removeItem('DTM-CancelViaChat');
        sessionStorage.removeItem('DTM-NameChange');
        analyticsObject.sc_sub_sub_section = 'status';
        if (sessionStorage.getItem('isCancelTransfer') == 'true') {
          analyticsObject.sc_mt_channel = 'retail';
        }

        if (digitalnc === 'true') {
          if (analyticsObject.sc_link_display == undefined) {
            analyticsObject.sc_link_display = 'namechange-display';
          }
          else {
            analyticsObject.sc_link_display = analyticsObject.sc_link_display + "|" + 'namechange-display';
          }
        }
        if (sessionStorage.getItem('digitalCancelTransfer') == 'true' && sessionStorage.getItem('isCancelTransfer') == 'true') {
          analyticsObject.sc_canceltxn_status = 'canceltxn-displayed';
          if (analyticsObject.sc_link_display == undefined) {
            analyticsObject.sc_link_display = 'canceltxn-tt-enabled';
          }
          else {
            analyticsObject.sc_link_display = analyticsObject.sc_link_display + "|" + 'canceltxn-tt-enabled';
          }
        }

        if (sessionStorage.getItem('cancelTransferClicked') == 'true') {
          analyticsObject.sc_canceltxn_status = 'canceltxn-initiated';
        }
        directCall('genericdirectcall-rp');
      } else if (type === 'tracktransferverify') {
        var cancelTransfer = sessionStorage.getItem('isCancelTransfer');
        if (cancelTransfer !== undefined && cancelTransfer !== null && cancelTransfer !== '' && cancelTransfer === 'true') {
          analyticsObject.sc_mt_channel = 'retail';
        }
      } else if (type === 'tracktransferverifypin') {
        var cancelTransfer = sessionStorage.getItem('isCancelTransfer');
        if (cancelTransfer !== undefined && cancelTransfer !== null && cancelTransfer !== '' && cancelTransfer === 'true') {
          var uniqueId = sessionStorage.getItem('DTM-uniqueId');
          analyticsObject['sc_transaction_id'] = uniqueId;
          analyticsObject.sc_mt_channel = 'retail';
        }
      } else if (type === 'tracktransferverifyquestion') {
        var cancelTransfer = sessionStorage.getItem('isCancelTransfer');
        if (cancelTransfer !== undefined && cancelTransfer !== null && cancelTransfer !== '' && cancelTransfer === 'true') {
          var uniqueId = sessionStorage.getItem('DTM-uniqueId');
          analyticsObject['sc_transaction_id'] = uniqueId;
          analyticsObject.sc_mt_channel = 'retail';
        }
      } else if (type === 'retailcallcc') {
        analyticsObject.sc_section = 'cancel-transfer';
        analyticsObject.sc_sub_section = 'declined';
      } else if (type === 'retailcancelcode') {
        if (sessionStorage.getItem('isCancelTransfer') == 'true') {
          var uniqueId = sessionStorage.getItem('DTM-uniqueId');
          analyticsObject['sc_transaction_id'] = uniqueId;
          analyticsObject.sc_section = 'cancel-transfer';
          analyticsObject.sc_sub_section = 'reason';
          analyticsObject.sc_mt_channel = 'retail';
          analyticsObject.sc_canceltxn_status = 'canceltxn-initiated';
          if (JSON.parse(sessionStorage.getItem('digitalCancelFlow')) == true) {
            analyticsObject.sc_mt_channel = 'digital';
          } else {
            analyticsObject.sc_mt_channel = 'retail';
          }
        }
      } else if (type === 'namechangereview') {
        var isDigital = JSON.parse(sessionStorage.getItem('digitalNameChange')) ? true : false;
        if (isDigital) {
          analyticsObject.sc_sub_section = 'review';
        } else {
          analyticsObject.sc_sub_section = 'namechangereview';
        }
      } else if (type === 'billpaystart' || type === 'billpay-start') {
        analyticsObject.sc_section = 'bill-pay';
        analyticsObject.sc_sub_section = 'start';
        analyticsObject.sc_service_name = 'bill-pay';
        analyticsObject.sc_page_type = 'responsive';
      } else if (analyticsObject.sc_section !== undefined
        && analyticsObject.sc_section === 'bill-pay'
        && type === 'payment') {
        analyticsObject.sc_section = 'bill-pay';
        analyticsObject.sc_sub_section = 'paymentinformation';
        analyticsObject.sc_service_name = 'bill-pay';
        analyticsObject.sc_page_type = 'responsive';
      } else if (analyticsObject.sc_section !== undefined
        && analyticsObject.sc_section === 'send-inmate'
        && type === 'payment') {
        analyticsObject.sc_section = 'send-inmate';
        analyticsObject.sc_sub_section = 'inmatepaymentinformation';
        analyticsObject.sc_service_name = 'send-inmate';
        analyticsObject.sc_page_type = 'responsive';
      } else if (analyticsObject.sc_section !== undefined
        && analyticsObject.sc_section === 'send-inmate'
        && type === 'review') {
        analyticsObject.sc_section = 'send-inmate';
        analyticsObject.sc_sub_section = 'inmatereview';
        analyticsObject.sc_service_name = 'send-inmate';
        analyticsObject.sc_page_type = 'responsive';
      } else if (analyticsObject.sc_section !== undefined
        && analyticsObject.sc_section === 'send-inmate'
        && type === 'receipt') {
        analyticsObject.sc_section = 'send-inmate';
        analyticsObject.sc_sub_section = 'inmatereceipt';
        analyticsObject.sc_service_name = 'send-inmate';
        analyticsObject.sc_page_type = 'responsive';
      } else if (analyticsObject.sc_section !== undefined
        && analyticsObject.sc_section === 'bill-pay'
        && type === 'review') {
        analyticsObject.sc_section = 'bill-pay';
        analyticsObject.sc_sub_section = 'review';
        analyticsObject.sc_service_name = 'bill-pay';
        analyticsObject.sc_page_type = 'responsive';
      } else if (analyticsObject.sc_section !== undefined
        && analyticsObject.sc_section === 'bill-pay'
        && type === 'receipt') {
        analyticsObject.sc_section = 'bill-pay';
        analyticsObject.sc_sub_section = 'receipt';
        analyticsObject.sc_service_name = 'bill-pay';
        analyticsObject.sc_page_type = 'responsive';
      } else if (analyticsObject.sc_section !== undefined
        && analyticsObject.sc_section === 'login-rp'
        && type === 'receiver') {
        analyticsObject.sc_section = 'send-money';
        analyticsObject.sc_sub_section = 'receiverinfo';
      }
      //PBL-2595 Start
      else if (analyticsObject.sc_section !== undefined
        && analyticsObject.sc_section === 'send-money-rp'
        && type === 'payment') {
        analyticsObject.sc_section = 'send-money';
        analyticsObject.sc_sub_section = 'paymentinformation';
      }
      //PBL-2595 End
      else {
        analyticsObject.sc_sub_section = type;
        if(type === 'review' && analyticsObject.sc_section === 'progressive-register') {
          analyticsObject.sc_section = 'send-money';
        }
      }
      checkAndSetSendAgainTxnObject(type, action);
      if (transactionPagesArr.indexOf(type) > -1) {
        setTransactionParamsForGenericDirectCall(type);
      }
      if (analyticsObject.sc_section === 'bill-pay' || analyticsObject.sc_section === 'send-inmate') {
        directCall('inmatepaybill-rp');
      } else if (analyticsObject.sc_section === 'track-transfer') {

      } else if ((sessionStorage.userJourney === 'bill-pay' || sessionStorage.userJourney === 'send-inmate' || sessionStorage.userJourney === 'inmate-pay') && type == "payment") {
        directCall('inmatepaybill-rp');
      } else if (sessionStorage.getItem('DTM-3rdPartyPopUp') === 'true'  && type === "start") {
        analyticsObject.sc_sub_sub_section = 'thirdPartyDataConsent';
        directCall('genericdirectcall-rp');
      } else {
        directCall('genericdirectcall-rp');
      }

      break;

  }
  // bug FW-1718: Added null check for whole analytics event object to prevent issues with analytics tracking
  try {
    Object.keys(analyticsObject).forEach(function (key) {
      if (analyticsObject[key] === null) {
        analyticsObject[key] = '';
      }
    });
  } catch (error) {
    console.log(error);
  }
}

function setRAFAnalyticsValues(analyticsObject) {
  if (!_.isEmpty(analyticsObject)) {
    analyticsObject['sc_service_name'] = 'refer-friend';
    analyticsObject['sc_campaign'] = !_.isNil(sessionStorage.getItem('utm_campaign')) ? sessionStorage.getItem('utm_campaign') : '';
  }
}

function capturethirdPartyConsentAnalytics(){
  var thirdPartyconsent = JSON.parse(sessionStorage.getItem('DTM-3rdPartyDataOptin'));
  if ( thirdPartyconsent != null && thirdPartyconsent !=undefined) {
    analyticsObject['sc_3rdPartyDataOptin'] = thirdPartyconsent;
    //sessionStorage.removeItem('DTM-3rdPartyDataOptin');
  }
}
/*
* Insert extra params in analytics object
*/
function setExtraValuesInAnalyticsObject(extraValues) {
  for (var prop in extraValues) {
    if (extraValues.hasOwnProperty(prop)) {
      analyticsObject['sc_' + prop] = extraValues[prop];
    }
  }
}

/** send again attributes in analytics Object */
function checkAndSetSendAgainTxnObject(type, action, values) {
  if (type !== 'start' && !sessionStorage.getItem('SendAgainTxnDetails')) {
    var isFlagSet = sessionStorage.getItem('DTM-sendagainFlow');
    if (isFlagSet === undefined || isFlagSet === null || isFlagSet === '') {
      return;
    }
  }
  // if send again is happening should keep send money flow landing page flag (IFOP-9238)
  if (sessionStorage.getItem('DTM-SendAgainHappening')) {
    switch (type) {
      case 'receiver':
      case 'payment':
      case 'review':
      case 'globalcollectid':
      case 'fxthreshold':
      case 'decline':
        analyticsObject['sc_internal_campaign'] = sessionStorage.getItem('DTM-SendAgainHappening');
        return;
      case 'start':
      default:
        sessionStorage.removeItem('DTM-SendAgainHappening', true);
    }
  }

  switch (type) {
    case 'start':
      if (sessionStorage.getItem('SendAgainTxnDetails')) {
        sessionStorage.setItem('DTM-startFlow', true);
      }
      break;
    case 'receiver':
      removeSendAgainFlag();
      analyticsObject['sc_internal_campaign'] = 'send_again_receiver';
      sessionStorage.setItem('DTM-SendAgainHappening', analyticsObject['sc_internal_campaign']);
      break;
    case 'payment':
      removeSendAgainFlag();
      analyticsObject['sc_internal_campaign'] = 'send_again_payment';
      sessionStorage.setItem('DTM-SendAgainHappening', analyticsObject['sc_internal_campaign']);
      break;
    case 'review':
      removeSendAgainFlag();
      analyticsObject['sc_internal_campaign'] = 'send_again_review';
      sessionStorage.setItem('DTM-SendAgainHappening', analyticsObject['sc_internal_campaign']);
      break;
    case 'globalcollectid':
      removeSendAgainFlag();
      analyticsObject['sc_internal_campaign'] = 'send_again_compliance';
      sessionStorage.setItem('DTM-SendAgainHappening', analyticsObject['sc_internal_campaign']);
      break;
    case 'fxthreshold':
      removeSendAgainFlag();
      analyticsObject['sc_internal_campaign'] = 'send_again_fxthreshold';
      sessionStorage.setItem('DTM-SendAgainHappening', analyticsObject['sc_internal_campaign']);
      break;
    case 'decline':
      removeSendAgainFlag();
      analyticsObject['sc_internal_campaign'] = 'send_again_fxthreshold';
      sessionStorage.setItem('DTM-SendAgainHappening', analyticsObject['sc_internal_campaign']);
      break;
    case 'displayEnable':
      analyticsObject.sc_link_display = 'promo-displayed-' + action;
      analyticsObject.sc_section = 'send-money';
      analyticsObject.sc_sub_section = 'start';
      analyticsObject.sc_sub_sub_section = 'enterpromo';
      directCall('genericdirectcall-rp');
    case 'afterPromoAplly':
      analyticsObject.sc_section = 'send-money';
      analyticsObject.sc_sub_section = 'start';
      directCall('genericdirectcall-rp');
    default:
    // do nothing :)
  }

  /**
   send_again_review
   - send_again_compliance
   - send_again_payment
   - send_again_receiver
   */
}

/** Remove temporary flag */
function removeSendAgainFlag() {
  sessionStorage.removeItem('DTM-sendagainFlow');
}

/** Set Cancel Transfer related object */

function setCancelTransactionObject(type) {

  if (!sessionStorage.getItem('CancelPendingTransaction_Obj') || sessionStorage.getItem('CancelPendingTransaction_Obj') == 'undefined')
    return;
  var summaryData = JSON.parse(sessionStorage.getItem('CancelPendingTransaction_Obj'));
  if (summaryData) {
    if (summaryData.transferTotal !== undefined && summaryData.transferTotal) {
      analyticsObject['sc_refund_amount'] = summaryData.transferTotal;
    }
    if (summaryData.transferFee !== undefined && summaryData.transferFee) {
      analyticsObject['sc_txn_fee'] = summaryData.transferFee;
    }
    if (summaryData.mtcn !== undefined && summaryData.mtcn) {
      analyticsObject['sc_mtcn'] = summaryData.mtcn;
      analyticsObject['sc_transaction_id'] = summaryData.mtcn;
    }
    if (summaryData.transferAmount !== undefined && summaryData.transferAmount) {
      analyticsObject['sc_principal'] = summaryData.transferAmount;
    }
  }
}

/*
* set transaction details in analytics object for generic direct call
*/
function setTransactionParamsForGenericDirectCall(type) {
  if (!sessionStorage.getItem('SummaryObjects') || sessionStorage.getItem('SummaryObjects') == 'undefined')
    return;

  var summaryData = JSON.parse(sessionStorage.getItem('SummaryObjects'));
  var smvResponse = sessionStorage.getItem('ValidationResponse') ? JSON.parse(sessionStorage.getItem('ValidationResponse')) : null;

  //PBL-1999
  //analyticsObject['sc_loginsuccess'] = null;
  if (summaryData) {
    // Remove null, it cause analytics to break
    for (var key in summaryData) {
      if (summaryData[key] === null) {
        delete summaryData[key];
      }
    }
    analyticsObject['sc_principal'] = summaryData.transfer_amount;
    analyticsObject['sc_txn_fee'] = summaryData.transfer_fee;
    analyticsObject['sc_send_currency'] = summaryData.defaultCurrencyIsoCode;
    analyticsObject['sc_payout_currency'] = summaryData.currencyIsoCode;
    analyticsObject['sc_send_country'] = analyticsObject.sc_country;
    analyticsObject['sc_payout_country'] = summaryData.flag_position;
    if (summaryData.temp_zipcode) {
      analyticsObject['sc_send_zip'] = summaryData.temp_zipcode;
    }
    if (summaryData.receive_amount) {
      analyticsObject['sc_payout_amount'] = summaryData.receive_amount;
    }
    if (summaryData.paying_method == "AG") {
      analyticsObject['sc_payment_method'] = "cashatagentlocation";
    } else if (summaryData.paying_method == "Sofort") {
        analyticsObject['sc_payment_method'] = "klarna";
    } else {
      var summaryObj = JSON.parse(sessionStorage.getItem('SummaryObjects'));
      var wupayTempElm = sessionStorage.getItem('WupayTypeTempElm');
      if (summaryObj.paying_method === 'WUPay' && wupayTempElm === 'true') {
        analyticsObject['sc_payment_method'] = "wire";
      }
      else {
        analyticsObject['sc_payment_method'] = summaryData.paying_method;
      }
    }

    // Changes as per PBL-3759
    if (smvResponse && smvResponse.payment_details && smvResponse.payment_details.paymentTypeIndicator) {
      var payingMethod = smvResponse.payment_details.payment_type;
      if (payingMethod && (payingMethod == 'CreditCard' || payingMethod == 'DebitCard') && smvResponse.payment_details.credit_debit_card) {
        payingMethod = payingMethod + (smvResponse.payment_details.credit_debit_card.card_type ? ":" + smvResponse.payment_details.credit_debit_card.card_type : '');
        analyticsObject['sc_payment_method'] = payingMethod;
      }
    } else if (summaryData && summaryData.paying_method !== undefined && summaryData.paying_method == 'CreditCard' || summaryData.paying_method == 'DebitCard') {
      var summaryCard, cardTypeVal;
      if (summaryData.credit_debit_cards && summaryData.credit_debit_cards.credit_debit_card[0]) {
        summaryCard = summaryData.credit_debit_cards.credit_debit_card[0];
        cardTypeVal = summaryCard.card_type;
        payingMethod = summaryData.paying_method + (cardTypeVal ? ':' + cardTypeVal : '');
        analyticsObject['sc_payment_method'] = payingMethod;
      } else if (summaryData.creditDebitCards && summaryData.creditDebitCards.creditDebitCard[0]) {
        summaryCard = summaryData.creditDebitCards.creditDebitCard[0];
        cardTypeVal = summaryCard.cardType;
        payingMethod = summaryData.paying_method + (cardTypeVal ? ':' + cardTypeVal : '');
        analyticsObject['sc_payment_method'] = payingMethod;
      }
    }

    //analyticsObject['sc_delivery_method'] = summaryData.payout_method_code;
    //PBL-2256
    if (summaryData.type === "bill-pay" || summaryData.type === "inmate-pay") {
    } else {
      analyticsObject['sc_delivery_method'] = summaryData.payout_method_code;
    }
    //End-PBL-2256
    if (summaryData.promotional_code_discount)
      analyticsObject['sc_promo_code'] = summaryData.promotional_code_discount;

    var userJourney = 'send-money-rp';
    if (sessionStorage.userJourney !== undefined && sessionStorage.userJourney !== null) {
      userJourney = sessionStorage.userJourney;
    }
    if (userJourney === 'bill-pay') {
      if (summaryData.biller_details !== undefined && summaryData.biller_details.companyName !== undefined) {
        analyticsObject['sc_biller_inmate'] = summaryData.biller_details.companyName;

        if (summaryData.biller_details.industry !== undefined) {
          analyticsObject['sc_biller_inmate_industry_type'] = summaryData.biller_details.industry;
        }
        if (summaryData.biller_details.code !== undefined) {
          analyticsObject['sc_biller_inmate_companycode'] = summaryData.biller_details.code;
        }
      }

    } else if (userJourney === 'inmate-pay') {
      if (summaryData.inmate_details !== undefined && summaryData.inmate_details.companyName !== undefined) {
        analyticsObject['sc_biller_inmate'] = summaryData.inmate_details.companyName;

        if (summaryData.inmate_details.industry !== undefined) {
          analyticsObject['sc_biller_inmate_industry_type'] = summaryData.inmate_details.industry;
        }
        if (summaryData.inmate_details.code !== undefined) {
          analyticsObject['sc_biller_inmate_companycode'] = summaryData.inmate_details.code;
        }
      }
    }


    if (type) {
      if (type === 'review' && sessionStorage.getItem('ValidationResponse')) {
        var validationRespObj = JSON.parse(sessionStorage.getItem('ValidationResponse'));
        analyticsObject['sc_transaction_id'] = validationRespObj.temp_transaction_id;

        if (validationRespObj && validationRespObj.payment_details && validationRespObj.payment_details.fx_threshold_flag) {
          var fxthresholdflagV = validationRespObj.payment_details.fx_threshold_flag;
          var feethresholdflagV = validationRespObj.payment_details.fee_threshold_flag;
          if (fxthresholdflagV == "N" || feethresholdflagV == "N") {
            analyticsObject['sc_dodd_frank'] = true;
          }
        }

      } else if (type === 'receipt') {
        var storeRespObj = JSON.parse(sessionStorage.getItem('StoreResponse'));
        if (storeRespObj) {
          analyticsObject['sc_txn_status'] = (storeRespObj && storeRespObj.authorizationStatus) ? storeRespObj.authorizationStatus.code : 'approved';
          analyticsObject['sc_transaction_id'] = storeRespObj.transactionId;
          analyticsObject['sc_mtcn'] = storeRespObj.moneyTransferControl && storeRespObj.moneyTransferControl.mtcn;
        }
      } else if (type === 'decline' && sessionStorage.getItem('ErrorResponse')) {
        var declineRespObj = JSON.parse(sessionStorage.getItem('ErrorResponse'));
        analyticsObject['sc_txn_status'] = declineRespObj.code;
      } else if ((type === 'receiver' && sessionStorage.getItem('previous_page_name') === 'sm-login') || (type === 'payment' && sessionStorage.getItem('previous_page_name') === 'sm-login')) {
        //analyticsObject['sc_loginsuccess'] = 'true';
      } else if (type === 'confirmbank-pwmb' && sessionStorage.getItem('ErrorResponse')) {
        var storeErrRespObj = JSON.parse(sessionStorage.getItem('ErrorResponse'));
        analyticsObject['sc_error'] = storeErrRespObj.code;
      } else if (type === "upload") {
        var storeRespObj = JSON.parse(sessionStorage.getItem('StoreResponse')) || {};
        if (storeRespObj) {
          analyticsObject['sc_txn_status'] = (storeRespObj && storeRespObj.authorizationStatus) ? storeRespObj.authorizationStatus.code : 'approved';
          analyticsObject['sc_mtcn'] = storeRespObj.moneyTransferControl ? storeRespObj.moneyTransferControl.mtcn : '';
        }
      } else if (type === "payment" && analyticsObject.sc_section && analyticsObject.sc_section == "send-inmate") {
        analyticsObject.sc_sub_section = 'inmatepaymentinformation';
      } else if (type === "payment" && analyticsObject.sc_section && analyticsObject.sc_section == "bill-pay") {
        analyticsObject.sc_sub_section = 'paymentinformation';
      }
      else {
      }
    }
  }
}

/**
 * Satellite direct call method
 */
function directCall(_action) {
  if (typeof _satellite != "undefined") {
    _satellite.track(_action);
  }
}

/**
 *  function to set the marketing tags if present;
 *  will set sc_src_code,mc_id
 *  same will be placed in session storage too.
 *  RINTL-15168 -- Story or bug related
 *  HQW-4237
 */

function captureMarketingTags() {

  var urlparam = window.location.search;
  var url_param_replaced = urlparam.replace('?', '');
  if (url_param_replaced.indexOf("src") != -1) {
    var src_code = url_param_replaced.replace('src=', '');
    analyticsObject.sc_src_code = src_code;
    sessionStorage.setItem("src_code", src_code);
  }
  /** HQW-4237 starts here*/
  if (url_param_replaced.indexOf("mc_id") != -1) {
    var mc_id_param = url_param_replaced.replace('mc_id=', '');
    var mc_id = mc_id_param.replace('&src=paid_gg_brand&', '');
    sessionStorage.setItem("mc_id", mc_id);
  }
  /** HQW-4237 ends here*/
  if (sessionStorage.getItem("src_code") != undefined) {
    analyticsObject.sc_src_code = sessionStorage.getItem("src_code");
  }
}

/**
 * This function is to set registration successful results.
 */
function registrationSuccess() {
  var previousUrl = document.referrer;
  var baseUrl = getTemplateBasePath();
  if ((baseUrl.toLowerCase().indexOf('gb') > -1) ||
    (baseUrl.toLowerCase().indexOf('de') > -1) ||
    (baseUrl.toLowerCase().indexOf('fr') > -1) ||
    (baseUrl.toLowerCase().indexOf('ca') > -1)) {
    if (previousUrl.indexOf('register') > -1) {
      delete analyticsObject.sc_loginsuccess;
    }
  }
}

/**
 * This function is to check page refresh and set analytics attribute
 */
function checkPageRefreshforAnalytics() {
  if (performance.navigation.type == 1 && sessionStorage.getItem('pageLoadDTMRefresh') !== undefined && sessionStorage.getItem('pageLoadDTMRefresh') == "pageReload") {
    analyticsObject.sc_fire_event = "no";
    var kycVerified = sessionStorage.getItem('kyc-Verified');
    if (kycVerified) {
      sessionStorage.removeItem('kyc-Verified');
    }
    var kycInProgress = sessionStorage.getItem('Kyc-InProgress');
    if (kycInProgress) {
      sessionStorage.removeItem('Kyc-InProgress');
    }
  }
}

/**
 * This function is to set verification status to the analytics object
 */
function updateAnalyticObjectVerStatus() {
  analyticsObject.sc_verify_status = "";
  if (sessionStorage.getItem('GatewayCustomer')) {
    var inProgressFlags = ['R', 'I', 'P', 'M', 'X'];
    if (JSON.parse(sessionStorage.getItem('GatewayCustomer')).identityVerificationStatus) {
      var verificationStatus = JSON.parse(sessionStorage.getItem('GatewayCustomer')).identityVerificationStatus;
      if (inProgressFlags.indexOf(verificationStatus) > -1) {
        analyticsObject.sc_verify_status = "Inprogress";
      }
      else if (verificationStatus == "Y") {
        analyticsObject.sc_verify_status = "Verified";
      }
      else if (verificationStatus == "N") {
        analyticsObject.sc_verify_status = "Unverified";
      }

    }
  }
  return analyticsObject.sc_verify_status;
}

/**
 * Capture last error
 */
function captureLastError() {
  if (!!sessionStorage.getItem('DTM-LastError')) {
    analyticsObject.sc_error = sessionStorage.getItem('DTM-LastError');
    sessionStorage.removeItem('DTM-LastError');
  }
}

/**
 * Capture if user recently verified
 */
function captureRecentlyVerified() {
  if (!!sessionStorage.getItem('DTM-RecentlyVerified')) {
    analyticsObject.sc_id_verification_success = sessionStorage.getItem('DTM-RecentlyVerified');
    sessionStorage.removeItem('DTM-RecentlyVerified');
  }
}

/**
 * Capture if online user verification has recently failed
 */
function captureRecentlyFailedVerification() {
  if (!!sessionStorage.getItem('DTM-RecentlyFailedVerification')) {
    analyticsObject.sc_id_verification_failed = sessionStorage.getItem('DTM-RecentlyFailedVerification');
    sessionStorage.removeItem('DTM-RecentlyFailedVerification');
  }
}

/**
 * Capture if user successfully completes mailkit
 */
function captureLetterSent() {
  if (!!sessionStorage.getItem('DTM-LetterSent')) {
    analyticsObject.sc_letter_sent = sessionStorage.getItem('DTM-LetterSent');
    sessionStorage.removeItem('DTM-LetterSent');
  }
}

/**
 *  function to set the current and previous page name
 */
function setPageNames(previous, current) {
  if (previous !== undefined && previous !== '' && previous !== null) {
    sessionStorage.setItem("previous_page_name", previous);
  }
  if (current !== undefined && current !== '' && current !== null) {
    sessionStorage.setItem("page_name", current);
  }
}

/** HQW-4237 Starts here */
function markettingCookieSet() {
  var gu = guid();
  if (dtmGetCookie('wu_device_id') === undefined || dtmGetCookie('wu_device_id') === '' || dtmGetCookie('wu_device_id') === null) {
    dtmSetCookie('wu_device_id', gu, '/', null, '365');
  }

  function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }
}

markettingCookieSet();

/** HQW-4237 Ends here */

/** new added functions for angular2 start here **/
// prepare template base path
function getTemplateBasePath() {
  var version = getVersion();
  if (version && version !== "NA") return "/content/wucom/dist/" + version + "/html/";
  return "/content/wucom/includes/index/";
}

//Check & return version, in order: Get from switches -> Get from URL -> Get from Cookie
function getVersion() {
  return '';
  var version = sessionStorage.getItem("assetVersion");
  if (getRequestParameterFromURL('version')) {
    version = getRequestParameterFromURL('version');
    if (version && version.toLocaleUpperCase() === 'NA') {
      return;
    }
  }
  return version;
}

function getRequestParameterFromURL(name) {
  var urlParams = location.search || location.hash;
  var returnValue = decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(urlParams) || [, ""])[1].replace(/\+/g, '%20')) || null
  if (returnValue !== undefined && returnValue !== null) {
    returnValue = returnValue.trim();
  }
  return returnValue;
}

/** new added functions for angular2 end here **/

loadPageViewEvents();
