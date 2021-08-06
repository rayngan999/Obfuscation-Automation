
var LoginFrame = LoginFrame ? LoginFrame : {};

(function ($, Drupal, Login, drupalSettings) {

  Login.init({
    container: '.login',
    lang: (drupalSettings.path) ? okApp.getCurrentLang(drupalSettings.path.currentLanguage) : '',
    country: (drupalSettings.path) ? drupalSettings.path.currentLanguage.toUpperCase() : 'ES',
    cookiesDomain: drupalSettings.ok_user.cookie_domain,
    isModal: false, // true si estas en la parte modal, false si no
    getCustomerSessionId: okApp.getSessionCustomerId(), // only call getBiocactch when is active.
    psd2: true,
    authentication: {
      url: drupalSettings.base_api_url + '/authenticationcomposite/login',
      headers: {},
      payload: {
        force: true
      }
    },
    otp: {
      url: drupalSettings.base_api_url + '/authenticationcomposite/verify-otp',
      headers: {},
      payload: {
        force: true
      }
    },
    nuDataKey: drupalSettings.nuDataKey,
    problemsURL: (drupalSettings.login_config && drupalSettings.login_config.remember_password_url)
      ? drupalSettings.login_config.remember_password_url : '',
    onLoginSuccess: function (response) {
      // Tracking on Tealium
      var opcSelected = $('.ok-login__dropdown option:selected');
      if (typeof Drupal.ok_tealium.utagTracking === 'function' && opcSelected.length) {
        Drupal.ok_tealium.utagTracking({
          tipoProceso: 'acceso al area privada',
          pasoProceso: 'exito',
          detalleProceso: $(opcSelected).text()
        });
      }
      // If API user check profile data and redirect to private site.
      if (response.application === 'api') {
        if (!okApp.getStorageItem('rememberUser')) {
          contentManager.clearProfile();
        }
        okApp.redirectToPrivateSite();
      }
      // If Onboarding user redirect to onboarding site.
      else if (response.application === 'onboarding') {
        var url = drupalSettings.onboarding_site_url_login
                  + '/login/'
                  + response.token;
        window.location.replace(url);
      }
    },
    onLoginError: function (error) {
      // Custom login on error (if needed).
      // Tracking on Tealium
      if (typeof Drupal.ok_tealium.utagTracking === 'function') {
        Drupal.ok_tealium.utagTracking({
          tipoProceso: 'acceso al area privada',
          pasoProceso: 'error',
          detalleProceso: 'error de acceso al area privada'
        });
      }
    },
    onLinkClick: function (link) {
      if (typeof Drupal.ok_tealium.utagTracking === 'function') {
        // We will have other links in a future.
        switch (link.id) {
          case 'lnkAccessProblem':
            Drupal.ok_tealium.utagTracking({
              tipoProceso: 'acceso al area privada',
              pasoProceso: 'link no recuerdo mi clave',
              detalleProceso: $('#loginComponentTypeSelect option:selected').text()
            });
            break;
        }
      }
    },
    onClose: function (e) {
      // TODO: Improve this adding the effect.
      $('.login-wrapper').addClass('closed');
      // Remove overlay when login panel is closed
      $('.overlay').hide();
    }
  });

  /**
   * Behavior that modifies the login top position on scroll
   */
  Drupal.behaviors.openbankLoginPosition = {
    attach: function (context, settings) {
      $('.login', context).once('openbank-login-position')
        .each(function () {
          var $self = $(this);
          $(document).on('scroll', function () {
            // calculate top position for login panel
            $self.css('top', okApp.getLoginPosition() + 'px');
          });
        });
    }
  };

  /**
   * Behavior that move the login extra links inside de login component panel
   */
  Drupal.behaviors.openbankAddLoginLinks = {
    attach: function (context, settings) {
      if (typeof drupalSettings.isRNCProcess === 'undefined') {
        $('.modal-dialog-links-extra', context)
          .once('openbank-add-login-links')
          .each(function () {
            // Move links inside the login panel
            // FIXME: find a better way to inject these links here
            var parent_link_access_problem = $('#lnkAccessProblem').parents('.ok-login__problems');
            $(this).insertBefore(parent_link_access_problem, null);
            // and make them visible
            $(this).removeClass('hidden');
          });
      }
      else {
        var config = drupalSettings.ok_mortgage_labels_rnc;

        $('.ok-login__problems').hide();
        $('#okLoginDefaultTitle').text(config.titleLogin);
      }
    }
  };

  /**
   * Behavior that handles closing the login modal for Web Privada links
   */
  Drupal.behaviors.openbankCloseLoginModal = {
    attach: function (context, settings) {
      $('#login-modal', context)
        .once('openbank-close-login-modal')
        .each(function () {
          $(this).on('hidden.bs.modal', function (e) {
            // Hide error messages
            $(this).find('.ok-login-error').hide();
            // Move login panel back into login region
            var loginNode = $('#block-openbank-login-private');
            var loginRegionNode = $('.region-login').first().get(0);
            loginRegionNode.insertBefore(loginNode.get(0), loginRegionNode.firstChild);

            // Restore button text after modal was opened
            loginNode.find('button.ok-login__submit')
              .find('.js-submit-btn-label')
              .html(Drupal.t('Entrar', {}, {context: 'ok_content'}));

            // Restore redirect URL
            delete drupalSettings.private_site_redirect_url;
            // restore logo container
            var $logoContainer = $('#logoContainer');
            $logoContainer.find('img').show();
            $logoContainer.css('padding', '');
          }).on('hide.bs.modal', function () {
            if (okApp.isIE()) {
              // For IE browser the iframe (PDF object) #letter is shown on top of modal dialog, show it when the dialog is close
              $('#letter').css('visibility', 'visible');
            }
          });
        });
    }
  };

  /**
   * Behavior that handles opening the login modal
   */
  Drupal.behaviors.openbankOpenLoginModal = {
    attach: function (context, settings) {
      $('#login-modal', context)
        .once('openbank-open-login-modal')
        .each(function () {
          $(this).on('show.bs.modal', function (e) {
            // Prevents taking the user to the url when modal is presented
            e.stopPropagation();
            if (okApp.isIE()) {
              // For IE browser the iframe (PDF object) #letter is shown on top of modal dialog, hide it while the dialog is open
              $('#letter').css('visibility', 'hidden');
            }
          });
        });
    }
  };

  /**
   * Behavior that triggers the login modal when the toggleLogin param is passed
   * in the URL
   */
  Drupal.behaviors.openbankTriggerLoginModal = {
    attach: function (context, settings) {
      var currentURL = okApp.parseURL(window.location.href);
      if (typeof currentURL.parameters.toggleLogin !== 'undefined') {
        var redirectUrl;
        if (typeof currentURL.parameters.PSD2 !== 'undefined') {
          redirectUrl = drupalSettings.private_site_url + '/myprofile/keys/tpps/tppKeyAdd';
        }
        okApp.displayAccessModal(redirectUrl);
      }
    }
  };

  /**
   * Behavior to add functionality of the close button in login--secundary
   */
  Drupal.behaviors.closeLoginSecundary = {
    attach: function (context, settings) {
      $('.login-mobile').find('#okCloseBtn').click(function () {
        $(this).parents('.login-wrapper').addClass('closed');
      });
      // Closes login panel on desktop by clicking anywhere else but login element
      var breakpoint = window.ResponsiveImages.getBreakpoint();
      if (breakpoint === 'lg') {
        var overlay = $('<div class="overlay"> </div>');
        overlay.appendTo($('body'));
        $('.overlay').hide();
        $('.overlay').on('click', function () {
          $('.login-wrapper').addClass('closed');
          // Removing overlay when login panel is closed
          $('.overlay').hide();
        });
      }
    }
  };

})(jQuery, Drupal, LoginFrame, drupalSettings);
