'use strict';

define(['materialize', 'brandsiteUtils', 'brandsiteConstants'], function(_materialize, utils, constants) {
  // Gets session token from cookies
  function getSessionToken() {
    var cookieArray = document.cookie.split(';');
    for (var i in cookieArray) {
      cookieArray[i] = cookieArray[i].trim().split('=');
      if (cookieArray[i][0] === 'SessionToken')
        return cookieArray[i][1];
    }
    return null;
  }

  function checkLogin() {
    if (getSessionToken())
      return true;

    utils.openModal('Please login to continue', null, 'Continue to login', constants.getUrl('LOGIN') + '?next=' + window.location.pathname);
    return false;
  }

  // Sets cookie with value as session token
  function setSessionToken(token) {
    document.cookie = 'SessionToken=' + token;
  }

  // delete
  function deleteSessionToken() {
    document.cookie = 'SessionToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }

  function getuserData() {
    return JSON.parse(localStorage["userData"]);
  }

  function checkLoginWithoutPopup() {
    if (getSessionToken())
      return true;
    return false;
  }

  var sessionData = {
    'getSessionToken': getSessionToken,
    'createSessionToken': setSessionToken,
    'deleteSessionToken': deleteSessionToken,
    'checkLogin': checkLogin,
    'getuserData': getuserData,
    'checkLoginWithoutPopup': checkLoginWithoutPopup
  };

  return sessionData;
});
