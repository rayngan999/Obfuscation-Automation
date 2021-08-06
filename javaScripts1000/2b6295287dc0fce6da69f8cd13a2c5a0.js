/* eslint-disable spaced-comment */
(function() {
  var confiantGlobal = window.confiant || (window.confiant = {});
  var clientSettings = (window.confiant && window.confiant['mOinGM9MTu5v-Lto835XLhlrSPY'] && window.confiant['mOinGM9MTu5v-Lto835XLhlrSPY'].clientSettings)
    || window.confiant;

  var integrationSetting = {
    config_ver: '202108030009',
    integration_type: 'gpt_and_prebid_v3l',
    integration_version: '202107301441',
    prebid_integration_version: confiantGlobal.prebid_integration_version || '202107301441',
    gpt_integration_version: confiantGlobal.gpt_integration_version || '202107301441',
    c_integration_version: confiantGlobal.c_integration_version || 'undefined',
    exec_test_ver: null,
  };
  function defaultCallback() {
    console.log('Confiant: ad blocked', arguments);
  };
  if (clientSettings.enable_integrations && clientSettings.devMode != 2){
    clientSettings.enable_integrations = null;
  }
  var settings = {
    propertyId: 'mOinGM9MTu5v-Lto835XLhlrSPY',
    adServer: 'https://protected-by.clarium.io',
    confiantCdn: 'https://clarium.global.ssl.fastly.net',
    confiant_cdn_v3: 'confiant-integrations.global.ssl.fastly.net',
    mapping: 'W3siaSI6MiwidCI6Int7b319Ont7d319eHt7aH19IiwicCI6MCwiRCI6MSwiciI6W119LHsiaSI6NiwidCI6Int7Y299fTp7e3d9fXh7e2h9fSIsInAiOjUwLCJEIjowLCJyIjpbeyJ0IjoiZXgiLCJzIjpudWxsLCJ2IjoiY28ifV19XQ==',
    activation: '|||MjM5MTY5MzI0NA==,|||MjM5MTcyNjQyOQ==,|||MjM5MTcyOTcyMQ==,|||MjM5MTczMjcwOQ==,|||MjM5MTczNzY3MQ==,|||MjM5MTczNzY4Mw==,|||MjM5MTgwMDE1NA==,|||MjM5MTgwMTUzMQ==,|||MjM5MTgwMzQ0OA==,|||MjM5MTgwMzQ2OQ==,|||MjM5MTgwNDY4NA==,|||MjM5MTgwNDg1Mg==,|||MjM5MTgwNTg2MA==,|||MjQxMTgyNzE2Ng==,|||MjQxMTgzMDczOQ==,|||MjQzMjk4MjQzNw==,|||MjQzMzU3ODgzOA==,|||MjQzNzU1MTA2Mg==,|||MjQ2MDczODYyOQ==,|||MjQ2MDc2MjE0MA==,|||MjQ2MDkyMTk2Nw==,|||MjQ2MDkyMjQ4Ng==,|||MjQ2MTM0MzI0MQ==,|||MjQ2MTM0MzkzMQ==,|||MjQ3NjcwMjQ5MQ==,|||MjYwNjQyNDcxMQ==,|||MjYwNTYxNzI5OQ==,|||MjY0MDU1MDc5Ng==,|||MjY0MDU1MTE4MA==,|||MjY0MDU1MTc1Ng==,|||MjY0MDU1MTc1OQ==,|||MjY0MDc4NTIwNg==,|||MjY0MDc4NTIzMw==,|||MjY0MDc4NTIzNg==,|||MjY0MDc4NTIzOQ==,|||MjY0MDc4NTI0Mg==,|||MjY0MTMyMjg0Nw==,|co||NDQ1NTQ0NDY1NQ==,|co||NDQ2MDYwOTkwMg==,|co||NDQ2MzU3OTcyOQ==,|co||NDU1MDcyNjc2Ng==,|co||NDYyMzc0Mzg4Mg==,|co||NDYzNDAyMDI5MA==,|co||NDY0MjkwMTk4OA==,|co||NDY5NzExNTc2MA==,|co||NDYyMzc0MzY5MA==,|co||NDgwNTk4NTk3Mw==,|co||NDkyNjE5OTE2OQ==,|||MjczMTgyNTM1OA==,|||MjczMjkzOTg4MA==,|||MjQwOTYzNzExOA==,|||MjQwOTY2NTQxNA==,|||MjczNTU0NzUyNQ==,|||MjgwNjkyNTcxOQ==,|||MjgwNzU4MDkyMQ==,|co||NTAwNDg4MTAyMQ==,|||MjgwNjU4NjYxMA==,|||MjgwNjU4NzA2Ng==,|||MjgzNzk4NDMwNA==,|||MjgzNzk4NDM0OQ==,|||MjgzODAwOTk5OQ==,|||MjgzODAxMDI5Mw==,|||MjgzNzUyMDQwNw==,|||MjgzNzY1OTM4NA==,|||Mjg1MDIzMDM2Mg==,|||Mjg1MDgyNTQ5OA==,|||Mjg0OTY3NTY0MA==,|||Mjg0OTY3NTI3MQ==,|||Mjg0NzkwMTQzMw==,|||Mjg0ODE0MjE1Mg==',
    cdt_version: '202107301441',
    prebidExcludeBidders: clientSettings.prebidExcludeBidders || [], //prebid bidder exclusion list
    sandbox: clientSettings.sandbox || '1',
    prebidNameSpace: clientSettings.prebidNameSpace || 'pbjs',
    callback: clientSettings.callback || defaultCallback,
    isMaster: true,
    devMode: clientSettings.devMode,
    enable_integrations: clientSettings.enable_integrations || 'prebid:false,gpt:true',
    isAR: clientSettings.isAR || 'true' === 'true',
    isPerf: 'undefined' === 'true',
    isHT: clientSettings.isHT || 'undefined' === 'true',
    isSA: 'false' === 'true',
    isAZOnly: 'false' === 'true',
    isXF: 'true' === 'true',
    prebidUseTopWindow:  typeof clientSettings.prebidUseTopWindow == 'boolean' ? clientSettings.prebidUseTopWindow :'undefined' === 'true',
    isIntegrationEnabled: isIntegrationEnabled,
    noSample: parseFloat(clientSettings.noSample) || parseFloat('1') || 0,
    isNativeLL: 'undefined' === 'true',
    isStandardSwitch: 'undefined' === 'true' || 'undefined' === 'true',
    isNS: 'false' === 'true',
    nsSample: 'undefined'
  };
  var scriptId = !!confiantGlobal.settings ? settings.propertyId : null;
  var propertySettings = scriptId ? confiantGlobal[scriptId] || (confiantGlobal[scriptId] = {}) : confiantGlobal;

  propertySettings.settings = settings;
  propertySettings.settings['gpt_and_prebid_v3l'] = integrationSetting;
  function injectScript(path) {
    var e = document.createElement('script');
    e.onload = initConfiantQueue;
    e.onerror = initConfiantQueue;
    if (scriptId) {
      e.id = scriptId;
    }
    e.async = true;
    e.src = path;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(e, s);
  }
  var shouldAddAllIntegerations = propertySettings.settings.propertyId === 'test_account';
  var integrationsCounter = 0;
  function isIntegrationEnabled(type) {
    var integrations = propertySettings.settings.enable_integrations;
    var checkType = Array.isArray(integrations) ? type : type + ':true';
    return shouldAddAllIntegerations || (integrations && integrations.indexOf(checkType) > -1);
  }

  if (Math.random() <= settings.noSample) {
    var integrationsString = 'gptprebidnative_v3l';
    integrationsCounter++;
    var versionToUse = integrationSetting.exec_test_ver ?
      integrationSetting.exec_test_ver :
      integrationSetting.integration_version ?
        integrationSetting.integration_version :
        integrationSetting.gpt_integration_version;
    injectScript('//' + [propertySettings.settings.confiant_cdn_v3, integrationsString, versionToUse, 'wrap.js'].join('/'));

  } else {
    if (isIntegrationEnabled('gpt')) {
      integrationsCounter++;
      injectScript('//' + [propertySettings.settings.confiant_cdn_v3, 'gpt_v3l', (integrationSetting.exec_test_ver ? integrationSetting.exec_test_ver : integrationSetting.gpt_integration_version), 'wrap.js'].join('/'));
    }
    if (isIntegrationEnabled('prebid')) {
      integrationsCounter++;
      injectScript('//' + [propertySettings.settings.confiant_cdn_v3, 'prebid_v3l', (integrationSetting.exec_test_ver ? integrationSetting.exec_test_ver : integrationSetting.prebid_integration_version), 'wrap.js'].join('/'));
    }

  }

  if (settings.isNativeLL && !isIntegrationEnabled('native')) {
    function injectNative() {
      injectScript('//' + [propertySettings.settings.confiant_cdn_v3, 'mOinGM9MTu5v-Lto835XLhlrSPY', 'native', 'config.js'].join('/'));
    }
    window.addEventListener('load', injectNative);
    if (document.readyState == 'complete') injectNative();
  }

  if (!isIntegrationEnabled('gpt') && !isIntegrationEnabled('prebid')) {
    console.warn('Confiant', 'Current configuration is set not to monitor, please contact support@confiant.com');
  }

  function initConfiantQueue() {
    integrationsCounter--;
    if (integrationsCounter === 0) {
      confiantGlobal.cmd = confiantGlobal.cmd || [];
      for (var i = 0; i < confiantGlobal.cmd.length; i++) {
        try {
          confiantGlobal.cmd[i].call(null);
        } catch (e) {}
      }
      confiantGlobal.cmd = {};
      confiantGlobal.cmd.push = function(funcToExec) {
        funcToExec.call(null);
      };
    }
  }
})();
