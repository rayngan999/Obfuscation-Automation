(function () {
  window.log = function (type, action, ...extra) {

    const { fromAppKey, fromApp } = window.process || {};

    try {
      // extra è¿æ»¤ç©ºæ ¼ï¼ä»¥é²æ¥å¿æ°æ®æåå¤±è´¥
      extra.forEach((e, i) => { extra[i] = e && `${e}`.replace(/\ /g, '-'); });
      // todo ä¸»æå¡å¢å æç¹åå
      $.ajax({
        url: '/api/admin/v3/action',
        data: {
          type,
          action,
          extra: extra.join('|~'),
          screenId: window.screenAlias,
        },
        headers: {
          'from-app': fromApp,
        },
        method: 'GET',
      });
    } catch (e) {
      // catch do nothing
    }
  };

  // ç»ä»¶è¿è¡éè¯¯æ¥å¿
  window.comErrorLog = function (...args) {
    this.log('com', 'error', ...args);
  };
})();
