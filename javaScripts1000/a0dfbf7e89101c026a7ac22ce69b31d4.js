'use strict';

define(['jquery', 'brandsiteConstants'], function($, brandsiteConstants) {
  $(document).ready(function() {
    addInvestListener();
    reInitiateInvestListener();
  });

  function reInitiateInvestListener() {
    $(document).on('initiate-invest-btn-event', addInvestListener);

    /*
      just trigger custom event 'initiate-invest-btn-event' in your js if the element is dynamically attached
      using this elemenates the need to attach a delegated element on "js-invest-btn" parent.
    */
  }

  function addInvestListener() {
    $('.js-invest-btn').on('click', function() {
      var dofaSchemeCode = $(this).data('dofaSchemeCode');
      sessionStorage.purchaseData = JSON.stringify({'dofa_scheme_code': dofaSchemeCode});
      window.location.href = brandsiteConstants.getUrl('PURCHASETRANSACTION');
    });
  }
});
