/**
 * @file
 * Contains the functionality related to AFI simulators.
 */

(function ($, _, Drupal) {
  'use strict';

  /**
    * Behavior on load the page that initializes back to top component.
  */
  Drupal.behaviors.initializeIframeAFI = {
    attach: function (context) {
      $('[data-iframe-url]').once('initialize-iframe-afi')
        .each(function (index, placeholder) {
          var $placeholder = $(placeholder);
          // Generate a token for simulation.
          var token = okApp.generateUUIDv4();
          // Store token for redirect.
          okApp.setStorageItem('simulation_token', token);
          // Create an iframe on-the-fly.
          var url = $placeholder.attr('data-iframe-url') + '&token=' + token;
          var iframe = document.createElement('iframe');
          iframe.setAttribute('src', url);
          iframe.setAttribute('frameborder', 0);
          iframe.setAttribute('scrolling', 'no');
          // Attach iframe to markup.
          $placeholder.html(iframe);
          // Adding event to the iframe.
          $(iframe).on('load', function (e) {
            window.addEventListener('message',
              Drupal.behaviors.initializeIframeAFI.onSimulationSubmit, false);
          });
        });
    },
    // Submit function for simulation.
    onSimulationSubmit: function (event) {
      if (event.data.func === 'onSimulationSubmit') {
        var url = drupalSettings.private_site_url + '/myprofile/loans-mortgages/request-payroll-loan';
        var token = okApp.getStorageItem('simulation_token');
        // If response is OK redirect to private site.
        // There is no scenario for error, just redirect without token.
        if (typeof event.data.param1 !== 'undefined') {
          // Redirect to private site.
          url = url + '/' + token;
        }
        okApp.displayAccessModal(url);
      }
    }
  };

})(jQuery, _, Drupal);
