var contentManager = contentManager ? contentManager : {};
var OKContentSegmentationApp = OKContentSegmentationApp || null;
var OKCreativitySegmentationApp = OKCreativitySegmentationApp || null;
var utag_data = utag_data || {};

(({ behaviors }, drupalSettings, OKContentSegmentationApp, OKCreativitySegmentationApp, $, cookies) => {

  contentManager.settings = {
    collectiveTitle: drupalSettings.ok_topbar ? drupalSettings.ok_topbar.topbar.collectives_title : '',
    defaultAvatar: drupalSettings.path_theme + '/images/avatar_default.svg',
    defaultName: '#',
    debugMode: true, // display log messages if true
    redirect: false
  };

  contentManager.logMessage = function (message, data) {
    if (contentManager.settings.debugMode) {
      // eslint-disable-next-line no-console
      console.log(
        ' %cPROFILE MANAGER%c ' + message,
        'background-color: #1E4363; color: white;',
        'background-color: white; color: #1E4363;',
        (data) ? data : ''
      );
    }
  };

    /**
   * Gets the user profile name
   *
   * @return     {string}  the user name.
   */
  contentManager.getName = function () {
    var name = okApp.getStorageItem('tb_username');
    if (typeof name !== 'undefined' && name !== null && name !== '') {
      name = Drupal.checkPlain(name.trim());
      return name;
    }
    else {
      contentManager.logMessage('Data by default');
      return contentManager.settings.defaultName;
    }
  };

  /**
   * Gets the user profile avatar
   *
   * @return     {string}  the user avatar.
   */
  contentManager.getAvatar = function () {
    var avatar = okApp.getStorageItem('tb_avatar');
    if (typeof avatar !== 'undefined' && avatar !== null && avatar !== '') {
      return Drupal.checkPlain(avatar);
    }
    else {
      contentManager.logMessage('Data by default');
      return contentManager.settings.defaultAvatar;
    }
  };

  /**
   * Check if the user has collective
   *
   * @return     {string}.
   */
  contentManager.hasCollective = function () {
    var hasCollective = okApp.getStorageItem('tb_has_collective');
    utag_data = utag_data || {};
    if (hasCollective !== 'undefined' && hasCollective && hasCollective !== 'false') {
      if (utag_data) {
        utag_data.colectivo = okApp.getStorageItem('tb_collectiveId');
      }
      return hasCollective;
    }
    else {
      if (utag_data) {
        delete utag_data.colectivo;
      }
      return null;
    }
  };

  /**
   * Clear user profile data from local storage
   */
  contentManager.clearProfile = function () {
    okApp.removeStorageItem('tb_avatar');
    okApp.removeStorageItem('tb_username');
    okApp.removeStorageItem('offlogToken');
    okApp.removeStorageItem('tb_has_collective');
    okApp.removeStorageItem('tb_collectiveId');
  };

  /**
   * Clear remembered profile data from local storage
   */
  contentManager.clearRememberedProfile = function () {
    okApp.removeStorageItem('userNumber');
    okApp.removeStorageItem('userNumberType');
    okApp.removeStorageItem('rememberUser');
    okApp.removeStorageItem('userFirstName');
    okApp.removeStorageItem('tb_has_collective');
    okApp.removeStorageItem('tb_collectiveId');
  };

  /**
   * Checks if valid, if tries to get it from service
   *
   * @param      {Object}   settings  The settings
   * @return     {boolean}  false if nothing is done, otherwise true
   */
  contentManager.checkProfileData = function (settings) {
    // if onboarding  topbar avoid call service
    const onboardingTopbar = document.querySelector('.ok-onboarding-topbar');
    if (onboardingTopbar && OKContentSegmentationApp) {
      OKContentSegmentationApp.run();
      return false;
    };
    var name = contentManager.getName();
    var avatar = contentManager.getAvatar();
    var hasCollective = contentManager.hasCollective();
    var offlogTokenCookie = decodeURI(cookies.get('offlogToken'));
    var offlogToken = JSON.parse(offlogTokenCookie);
    var needUpdate = false;

    // set local storage data
    okApp.setStorageItem('tb_username', name);
    okApp.setStorageItem('tb_avatar', avatar);

    try {
      offlogToken = JSON.parse(offlogTokenCookie);
      if (!offlogToken) {
        throw new Error('offlogTokenCookie empty or null');
      }
    }
    catch (err) {
      contentManager.logMessage('offlogTokenCookie is undefined');
      // just in case, remove cookie and local offlogToken
      cookies.set('offlogToken', null, {path: '/', domain: drupalSettings.ok_user.cookie_domain, secure: true});
      okApp.removeStorageItem('offlogToken');
      contentManager.checkRememberUserStatus();
      // Load default topbar
      if (OKContentSegmentationApp) {
        OKContentSegmentationApp.run('prospect');
      }
      return false;
    }

    // merge settings
    contentManager.settings = $.extend(contentManager.settings, settings);

    // verify offLogToken
    var currentOffLogToken = okApp.getStorageItem('offlogToken');
    if (!currentOffLogToken || (currentOffLogToken !== offlogToken)) {
      contentManager.logMessage('Profile data expired');
      needUpdate = true;
    }

    if (!needUpdate) {
      contentManager.checkRememberUserStatus();
      if (OKContentSegmentationApp) {
        OKContentSegmentationApp.run();
      }
      if (OKCreativitySegmentationApp && (drupalSettings.ok_omnichannel || drupalSettings.ok_component_react)) {
        OKCreativitySegmentationApp.run();
      }
      return false;
    }
    // get the profile data
    contentManager.logMessage('Getting profile data...');

    fetch(`${drupalSettings.base_api_url}/offlog-profiles/${offlogToken}`, {
      headers: {
        'version': '2'
      }
    })
      .then(response => response.json())
      .then(data => {
        var profileName = '';
        var collectiveId;
        hasCollective = (data.isCollective)
          ? data.isCollective
          : false;

        if (hasCollective && data.collectiveType) {
          var collectiveType = data.collectiveType;
          collectiveId = 'Collective_' + collectiveType.company + '-' + collectiveType.code3 + '-' + collectiveType.code4;
          // Add collective Id to storage
          okApp.setStorageItem('tb_collectiveId', collectiveId);
          utag_data.colectivo = collectiveId;
        }
        if (data.name || data.alias) {
          if (data.alias) {
            profileName = data.alias.trim();
          }
          else {
            profileName = data.name.trim();
          }
        }
        else {
          profileName = name;
        }
        var profileAvatar = (data.avatar)
          ? data.avatar
          : avatar;

        okApp.setStorageItem('tb_username', profileName);
        okApp.setStorageItem('userFirstName', profileName);
        okApp.setStorageItem('tb_avatar', profileAvatar);
        okApp.setStorageItem('tb_has_collective', hasCollective);
        okApp.setStorageItem('offlogToken', offlogToken);

        contentManager.updateTopbar();
        contentManager.checkRememberUserStatus();

        contentManager.logMessage('Profile data updated');
        if (contentManager.settings.redirect === true) {
          okApp.redirectToPrivateSite();
        }
        else {
          if (!$.isEmptyObject(OKContentSegmentationApp)) {
            OKContentSegmentationApp.run();
          }
          if (!$.isEmptyObject(OKCreativitySegmentationApp) && (drupalSettings.ok_omnichannel || drupalSettings.ok_component_react)) {
            OKCreativitySegmentationApp.run();
          }
        }
      })
      .catch((error) => {
        contentManager.logMessage(`There was an error fetching profile data - ${error}`);
        okApp.setStorageItem('tb_username', name);
        okApp.setStorageItem('tb_avatar', avatar);
        okApp.setStorageItem('offlogToken', offlogToken);

        if (contentManager.settings.redirect === true) {
          okApp.redirectToPrivateSite();
        }
        else {
          if (!$.isEmptyObject(OKContentSegmentationApp)) {
            OKContentSegmentationApp.run('prospect');
          }
        }
      });
  };

  /**
   * Updates Topbar information based on profile
   */
  contentManager.updateTopbar = function () {
    var $avatar = $('.openbank-topbar__actions__user--publica')
      .find('.image')
      .first();
    var $name = $('.openbank-topbar__actions__user--publica')
      .find('.username')
      .first();
    if (okApp.getStorageItem('tb_has_collective') === 'true') {
      $('span[data-collective-name]').html(contentManager.settings.collectiveTitle);
    }
    if ($name.length) {
      $name.html(contentManager.getName());
    }
    if ($avatar.length) {
      $avatar.get(0).style.backgroundImage = 'url(' + contentManager.getAvatar() + ')';
    }
  };

  /**
   * Updates username placeholders in Login component
   *
   * @param      {string}  name    The username
   */
  contentManager.updateUsernamePlaceholders = function (name) {
    var name = Drupal.checkPlain(name);
    contentManager.logMessage('Updating username in Login component');
    $('#secLog').find('.okLoginUserFirstName')
      .html(name);
  };

  /**
   * Checks if username should be shown in Login component
   */
  contentManager.checkRememberUserStatus = function () {
    var rememberUser = okApp.getStorageItem('rememberUser')
      ? okApp.getStorageItem('rememberUser')
      : false;
    var name = okApp.getStorageItem('tb_username')
      ? okApp.getStorageItem('tb_username')
      : '';

    if (!rememberUser) {
      return;
    }

    contentManager.updateUsernamePlaceholders(name);
  };


  /*
   * This function hides the provided skeleton node
   * in the provided timeout
  */
  function hideSkeletonBlock(skeleton, timeout) {
    if (!timeout) {
      timeout = 500;
    }
    if (!skeleton) {
      return;
    }
    // This needs jQuery to catch the event that notifies the slick initialization
    var $girobox = $('.girobox-campaign-block');
    if (!$girobox.length) {
      return;
    }
    $girobox.on('slick-initialized', function (event) {
      setTimeout(removeSkeleton, timeout);
    });
    function removeSkeleton() {
      var cardsHighlights = document.querySelectorAll('.card--highlight');
      $(skeleton).fadeOut('slow');
      // as in Privada the highlight might change, we have to select the new highlights
      if (cardsHighlights) {
        for (var i = 0; i < cardsHighlights.length; i++) {
          cardsHighlights[i].style.pointerEvents = 'initial';
        }
      }
      if (NodeList.prototype.isPrototypeOf(skeleton) && !document.body.contains(skeleton[0])) {
        var highlightsSkeletons = document.querySelectorAll('.highlight-skeleton-item--node');
        $(highlightsSkeletons).fadeOut('slow');
      }
    }
  }

  /*
   * This function hides the topbar placeholder, which has the 'topbar-placeholder' class
  */
  function hideTopbarPlaceholder() {
    setTimeout(function () {
      try {
        $('.topbar-placeholder').fadeOut('slow');
      }
      catch (e) {
        return;
      }
    }, 1000);
  }

  (function segmentationInit() {
    var giroBoxSkeleton = document.querySelector('.campaign__skeleton');
    var highLightsSkeleton = document.querySelectorAll('.highlight-skeleton-item--node');
    contentManager.logMessage('Initialized');
    if (okApp.isCustomer()) {
      $('[data-gtns-segmentation-variant]').hide();
      // Check if is a T24 user and if is model environment
      if (!okApp.isT24User() && !drupalSettings.path.is_model) {
        contentManager.checkProfileData();
      }
      else {
        OKContentSegmentationApp.run('prospect');
        hideSkeletonBlock(giroBoxSkeleton);
        hideSkeletonBlock(highLightsSkeleton);
      }
      okApp.userSegmentationCheck();
      $('[data-gtns-segmentation-variant]').show();
    }
    else {
      contentManager.logMessage('User is not logged in, won\'t do anything');
      if (OKContentSegmentationApp) {
        hideSkeletonBlock(giroBoxSkeleton);
        hideSkeletonBlock(highLightsSkeleton);
        OKContentSegmentationApp.run('prospect');
        contentManager.checkRememberUserStatus();
      }
    }
    hideTopbarPlaceholder();
  })();
})(Drupal, drupalSettings, OKContentSegmentationApp, OKCreativitySegmentationApp, jQuery, window.Cookies);
