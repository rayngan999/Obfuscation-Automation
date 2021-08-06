var tracker = function() {
  // '//s.umeng.com/tracker/clue.js?pid=U-web'
  // 'https://g.alicdn.com/um-f2e/cdn-res/tracker/clue.js?pid=U-web'
  function getPid() {
    var re = /^(?:https?:)?\/\/(?:g\.alicdn\.com\/um-f2e\/cdn-res|s\.umeng\.com)\/tracker\/clue\.js\?pid=([^\?&=]+)(?:&|#|$)/i;
    var scripts = document.getElementsByTagName('script');
    for (var i = 0, len = scripts.length; i < len; i++) {
      var a, el = scripts[i];
      if (el.src && (a = re.exec(el.src))) {
        return decodeURIComponent(a[1]);
      }
    }
    return 'umeng';
  }
  function getUid() {
    var m = document.cookie.match(/umplus_uc_loginid=([^;]+)/);
    return m && m.length > 1 ? decodeURIComponent(m[1]) : 'Unknow(Clue)';
  }
  function checkResult(pid, result) {
    switch (pid) {
      case 'U-web':
        return !!result.data;
      case 'push-3':
        return result.status;
      case 'u-app-haitang':
      case 'uapp':
        return result.result === 'success'
          || result.result === 'ok'
          || result.code === 200
          || result.status === 200
          || result.status === true;
      case 'adplus-apptrack':
      case 'adplus-unitrack':
        return result.ec === 0;
      case 'insight': // co-dip
        return result.status && result.status === 200;
      default:
        return true;
    }
  }
  function getCode(pid, result) {
    switch (pid) {
      case 'U-web':
      case 'push-3':
        return result.code || 9999;
      case 'u-app-haitang':
      case 'uapp':
        return -1;
      case 'insight': // co-dip
        return result.status || 9999;
      default:
        return -1;
    }
  }
  function getMsg(pid, result) {
    if (pid === 'adplus-apptrack' || pid === 'adplus-unitrack') {
      return result.f;
    }
    return result.msg;
  }
  function evaluate(responseText) {
    var result = JSON.parse(responseText);
    // console.log('result', result);
    // ! æ¥å£ç»è®¡éæ ¹æ®åä¸ªäº§åå·ä½æåµä¿®æ¹æ­¤å¤
    // å½ç¬¦åæ¥å£å¼å¸¸ç»è®¡æ¶ï¼å¦æ¥å£ status ä¸º false æ code ä¸ºé 200ï¼è¿åå¦ä¸å¯¹è±¡
    if (!checkResult(pid, result)) {
      return {
        errorCode: getCode(pid, result),
        msg: getMsg(pid, result) || 'æ¥å£åºé(Clue)',
        traceId: result.traceId || ''
      };
    }
  }
  function beforeLog(logItem) {
    if (logItem.code === 3) { // åªéå¯¹æ§è½çæ§åå¹¶pageå°å
      if (pid === 'uapp' || pid === 'u-app-haitang') {
        logItem.page = logItem.page
          .replace(/\/(apps|platform)\/[\da-f]{24}(\/|$)/i, "/$1/\$pid$2")
          .replace(/(\/apps\/\$pid\/channels\/)[\da-f]{24}/i, "$1\$id")
          .replace(/(\/apps\/\$pid\/events\/)[\da-f]{24}/i, "$1\$id")
          .replace(/(\/platform\/\$pid\/channels\/list\/)[\da-f]{24}/i, "$1\$id")
          .replace(/(\/platform\/\$pid\/error_types\/list\/)[\d]{13}/i, "$1\$id")
          .replace(/(\/platform\/\$pid\/function\/events\/detail\/)[\da-f]{24}(\/(?:string|numberic))\/?/i, "$1\$id$2")
          .replace(/(\/platform\/\$pid\/function\/conversion\/)[\da-f]{24}/i, "$1\$id")
          .replace(/(\/platform\/\$pid\/reports\/app_version\/)[\d\.]+/i, "$1\$version")
          .replace(/(\/platform\/\$pid\/board\/)[\da-z]{32}(\/addreport)?/i, "$1\$id$2")
          .replace(/(\/platform\/\$pid\/analysis\/(?:retention|segment|funnel)\/detail\/(?:re|se|fu)_)[\da-z]{32}/i, "$1\$id")
          .replace(/(\/platform\/apps\/group_trend\/)[\da-f]{24}/i, "$1\$id")
          .replace(/(\/platform\/integration\/um_logs\/)[\da-f]{24}/i, "$1\$id")
          ;
      }
    }
    return logItem;
  }
  var pid;
  function init() {
    // ! æ­¤å¤æ¿æ¢ Clue é¡¹ç® ID
    pid = getPid(); // 'U-web', 'u-app-haitang', 'uapp', 'umsite', 'push-3', 'adplus-apptrack', 'adplus-unitrack', 'finplus', 'insight'
    var plugins = [
      [window.performanceTrackerPlugin/*, {sampleRate: 1, oncePerSession: false}*/]
    ];
    if (pid !== 'umsite') {
      var plugin = [window.interfaceTrackerPlugin];
      if (pid !== 'finplus') {
        plugin.push({evaluate: evaluate});
      }
      plugins.push(plugin);
    }
    var tracker = new window.Tracker({
      pid: pid,
      uidResolver: getUid,
      plugins: plugins,
      // sampleRate: 1,
      // ignoreScriptError: false,
      // ignoredQueries: [],
      // msgWhiteList: null,
      // urlWhiteList: null,
      // oncePerSession: false,
      // global: true,
      // debug: true, // for 4.x
      // releaseResolver: function() {},
      // uaParser: function() {},
      beforeLog: beforeLog
    });
    // if (/^4\./.test(tracker.VERSION)) { // 4.x
    tracker.install(); // å¯å¨ tracker å¹¶çå¬å¨å± JS å¼å¸¸
    // } else { // 3.x or lower
    //   tracker.onGlobalError(); // çå¬å¨å± JS å¼å¸¸
    // }
    return tracker;
  }
  return init();
}();
