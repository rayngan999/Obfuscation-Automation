/**
 * This script triggers ShopRunner specific actions
 */
var intervalId = window.setInterval(initSRActions, 100);

function initSRActions() {
  window.sr_init_count = window.sr_init_count || 0;
  sr_init_count++;

  if (sr_init_count >= 20) {
    clearInterval(intervalId);
    return;
  }

  if (typeof jQuery === 'undefined') {
    return;
  }
  sr_init_count = 20;
  (function (srApp, $, undefined) {
    var $cache;

    function initSRCache() {
      $cache = {
        blockFrm: $('#dwfrm_ineligiblecart'),
        keepItemsBtn: $("button[name='dwfrm_ineligiblecart_keepitems']"),
        srCartDiv: $('div[name="sr_expressCheckoutCartDiv"]')
      };
    }

    function initSREvents() {
      /**
       * This script is used to prevent the default ShopRunner signout behaviour
       * when the "Keep all items and sign out" button is pushed.
       */
      $cache.keepItemsBtn.on('click', function (e) {
        //e.preventDefault();
        sr_$.signOut();
        if ($cache.blockFrm) {
          // set the timeout
          setTimeout(function () {
            $cache.blockFrm.submit();
          }, 900);
        }
      });

      /**
       *  Refresh the page after sign in to / sign out of ShopRunner account
       */
      refreshSRCart();
    }

    /**
     * Refresh cart details page after exit from SR modal
     */
    function refreshSRCart() {
      if ($cache.srCartDiv.length) {
        setTimeout(function () {
          // setup sr_pageRefreshes true
          sr_pageRefreshes = true;
        }, 800);
      }
    }

    /**
     * Initialize SR specific cache
     */
    initSRCache();

    /**
     * Initialize SR specific events
     */
    initSREvents();
  })((window.srApp = window.srApp || {}), jQuery);
}
