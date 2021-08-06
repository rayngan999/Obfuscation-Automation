'use strict';

define(['jquery', 'apiService', 'sessionUtils'], function($, apiService, sessionUtils) {
  function checkWatchlistStatus(self) {
    if (sessionUtils.getSessionToken()) {
      var watchlistBtn = self ? self.find('.js-watchlist-btn') : $('.js-watchlist-btn');
      var watchlistData = {
        'product_id': watchlistBtn.data('productId')
      };

      apiService
      .postRequest('GETSCHEMEWATCHLISTSTATUS', watchlistData)
      .done(function(data) {
        watchlistBtn.toggleClass('active', data.is_watchlist);
      })
      .fail(function(error) {
        console.error(error);
      });
    }
  }

  return {
    'checkWatchlistStatus': checkWatchlistStatus
  };
});
