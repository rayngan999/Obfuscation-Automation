(function () {
  var companyId = 'T7eYJQ';

  if (window.klaviyoModulesObject) {
    console.warn('Cannot load klaviyo.js multiple times for the same site. Skipping account "' + companyId + '". Active account is "' + window.klaviyoModulesObject.companyId + '"');
    return;
  };

  window._learnq = window._learnq || [];
  window.__klKey = window.__klKey || companyId;
  window._learnq.push(['account', companyId]);

  Object.defineProperty(window, 'klaviyoModulesObject', {
    value: { companyId: companyId, loadTime: new Date() },
    enumerable: false,
  });

  var loadedAssets = {};
  function addScript(asset) {
    if (loadedAssets[asset]) return;
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = asset;
    document.head.appendChild(s);
    loadedAssets[asset] = true;
  }
  function addCSS(asset) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = asset;
    document.head.appendChild(link);
  }

  var manifest = {'static': {'js': ['https://static.klaviyo.com/onsite/js/fender_analytics.aa7945940a2e94a59f31.js', 'https://static.klaviyo.com/onsite/js/sharedUtils.801d74280423a941f3ea.js', 'https://static.klaviyo.com/onsite/js/static.3bdeff36682c858fa4ec.js']}, 'signup_forms_new': {'js': ['https://static.klaviyo.com/onsite/js/sharedUtils.801d74280423a941f3ea.js', 'https://static.klaviyo.com/onsite/js/styles.1a3032aad1cfe1bfcb35.js', 'https://static.klaviyo.com/onsite/js/sentry.0f28a6620ddc44e3411b.js', 'https://static.klaviyo.com/onsite/js/vendors~signup_forms~signup_forms_new.956ce3d4efea3fe89a3c.js', 'https://static.klaviyo.com/onsite/js/vendors~signup_forms_new.a709e3693b8386251a89.js', 'https://static.klaviyo.com/onsite/js/signup_forms~signup_forms_new.69422c1797527afd0c2e.js', 'https://static.klaviyo.com/onsite/js/signup_forms_new.61f34403bca85f44587d.js'], 'css': 'https://static.klaviyo.com/onsite/js/1.8263e8fb383455d93186.css'}};
  for (var key in manifest) {
    if (manifest.hasOwnProperty(key)) {
      var onsiteModule = manifest[key];
      for (var i = 0; i < onsiteModule.js.length; i += 1) {
        addScript(onsiteModule.js[i]);
      }
      if (onsiteModule.css) {
        addCSS(onsiteModule.css);
      }
    }
  }
})();
