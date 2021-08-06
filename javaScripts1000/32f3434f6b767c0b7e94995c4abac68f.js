/**
 * This script triggers sign in / sign out
 * related actions on the endpoint
 */
(function (prApp, $, undefined) {
  var $cache;

  function initPRCache() {
    $cache = {
      shippingFrm: 'dwfrm_singleshipping_shippingAddress',
      srToken: getCookie('sr_token')
    };
  }

  function initPREvents() {
    /**
     * Tries to update the shipping method list first
     */
    updateShippingList();

    /**
     * Submit the selected form (singleshipping_shippingAddress form)
     */
    //submitFrm($cache.shippingFrm, $cache.srToken);
  }

  function updateShippingList() {
    if (typeof parent.updateShippingMethodList === 'function') {
      parent.updateShippingMethodList();
    }
  }

  function submitFrm(formId, srtoken) {
    if (typeof parent.document.forms[formId] !== 'undefined') {
      var timeout = srtoken == null ? 0.85 : 2.25;
      // set the timeout
      setTimeout(function () {
        parent.document.forms[formId].submit();
      }, timeout * 1000);
    }
  }

  function getCookie(name) {
    name += '=';
    for (var ca = document.cookie.split(/;\s*/), i = ca.length - 1; i >= 0; i--) {
      if (!ca[i].indexOf(name)) {
        return ca[i].replace(name, '');
      }
    }
    return null;
  }

  /**
   * Initialize PR specific cache
   */
  initPRCache();

  /**
   * Initialize PR specific events
   */
  initPREvents();
})((window.prApp = window.prApp || {}));
