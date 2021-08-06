'use strict';

define(['jquery', 'apiService', 'brandsiteUtils', 'brandsiteConstants'],
  function($, apiService, utils, brandsiteConstants) {
    $(document).ready(function() {
      init();
    });
    var searchButton = $('#search-btn');
    function displaySuggestions() {
      var searchBarContainerSelector = '.js-search-bar-container',
        viewAllLinkSelector = '.js-view-all-link',
        suggestionsContainerSelector = '.js-search-suggestions-container',
        formSelector = '.js-search-form',
        searchInputSelector = '.js-search-input',
        searchSuggestionsSelector = '.js-search-suggestions',
        searchPageBaseURL = brandsiteConstants.getUrl('SEARCHPAGEURL');

      $(searchInputSelector).on('keyup', utils.debounce(handleKeyUp, 250));


      $(suggestionsContainerSelector).on('click', viewAllLinkSelector, function(_event) {
        var self = $(this);
        var searchInput = self.parents(searchBarContainerSelector).find(searchInputSelector).val();
        var searchType = self.data('searchType');
        window.location = searchPageBaseURL + '?search_string=' + searchInput + '&search_index=' + searchType;
      });

      $(formSelector).on('submit', function(event) {
        event.preventDefault();
        var searchInput = $(this).find(searchInputSelector).val();
        window.location = searchPageBaseURL + '?search_string=' + searchInput;
      });

      $('#digitalKYCButton').on('click', function(){
        window.location = brandsiteConstants.getUrl('SIGNUP');
      })

      function handleKeyUp() {
        var self = $(this);
        var parent = self.parents(searchBarContainerSelector);
        parent.find(suggestionsContainerSelector).empty();

        if (self.val().length >= 3) {
          showLoader();
          var searchInput = self.val();
          apiService.getRequest('GETSEARCHSUGGESTIONS', {'search_string': searchInput})
          .done(function(data) {
            hideLoader();
            parent.find(suggestionsContainerSelector).empty().html(data);
            parent.find(searchSuggestionsSelector).slideDown(100);
          })
          .fail(function(err) {
            console.error(err.status + ': ' + err.responseText);
          });
        } else
          parent.find(searchSuggestionsSelector).slideUp(100);

      }
      function showLoader() {
        searchButton.addClass('search-loader');
      }
      function hideLoader() {
        searchButton.removeClass('search-loader');
      }
    };

    function init() {
      displaySuggestions();
    }
  }
);
