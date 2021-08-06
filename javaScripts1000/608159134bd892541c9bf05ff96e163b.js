'use strict';

define(['jquery', 'apiService', 'sessionUtils'], function($, apiService, sessionUtils) {
  $(document).ready(function() {
    init();
  });

  function init() {
    $('.js-watchlist-btn').on('click', function() {
      saveOrDeleteWatchlist($(this));
    });

    $('.js-fund-content-wrapper, .js-fund-details-container').on('click', '.js-watchlist-btn', function() {
      saveOrDeleteWatchlist($(this));
    });
  }

  function saveOrDeleteWatchlist(self) {
    if (sessionUtils.checkLogin()) {
      var watchlistData = {};
      watchlistData.product_id = self.data('productId');
      if (self.hasClass('active'))
        apiCall('postRequest', 'DELETESCHEMEWATCHLIST', watchlistData, 'removeClass', self);
      else
        apiCall('postRequest', 'SAVESCHEMEWATCHLIST', watchlistData, 'addClass', self);
    }
  }

  function apiCall(requestType, apiName, watchlistData, action, selector) {
    apiService[requestType](apiName, watchlistData, action)
    .done(function() {
      selector[action]('active');
    })
    .fail(function(error) {
      console.error(error);
    });
  }
});
