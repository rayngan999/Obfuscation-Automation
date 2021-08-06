<!DOCTYPE html>
<html style="overflow-x: hidden; overflow-y: visible">

<head lang="en">
  
  
  <meta charset="UTF-8">
  <meta name="renderer" content="webkit">
  <meta name="data-spm" content="datav">
  
  <!-- Open Graph data -->
  <meta property="og:title" content="www.93x.netæ­£å¼é¨ç½²" />
  <meta property="og:url" content="https://datav.aliyuncs.com/share/80662a42061e44d4277b0aa6ac9a6ee1" />
  <meta property="og:image" content="https://img.alicdn.com/tfs/TB1IzRzRUz1gK0jSZLeXXb9kVXa-300-300.png" />
  <meta property="og:description" content="" />
  
  
  <title>...</title>
  <link href="//cdn-service.datav.aliyun.com/datav-static/2.40.39_6/libs/preview.css" rel="stylesheet" />
  <link href="//cdn-service.datav.aliyun.com/datav-static/2.40.39_6/libs/error_cover.css"  rel="stylesheet"/>
  <script>
    document.domain = 'datav.aliyun.com';
  </script>
</head>

<body data-spm="10712494" class="zh_CN CN">
  <div id="screen" class="screen container">
  </div>
  <div id="datav-loading" style="background: #0f2a42">
    <a target="_blank" href="javascript:;">
      
        <img class="datav-logo" src="//img.alicdn.com/tfs/TB1RzYryY9YBuNjy0FgXXcxcXXa-300-300.gif" />
        <img class="text-logo" src="//img.alicdn.com/tfs/TB1EBjryY9YBuNjy0FgXXcxcXXa-500-129.png" width=100/>
      
    </a>
  </div>
  <div class="datav-layout datavLayout">
    <a id="datav-text-logo" target="_blank" href="http://data.aliyun.com/visual/datav">
      <img src="//img.alicdn.com/tfs/TB1cNyCyYSYBuNjSspiXXXNzpXa-500-129.png" width=50 />
    </a>
  </div>
  <div id="error-cover"> </div>
  
  <script type="text/javascript" src='//cdn-service.datav.aliyun.com/datav-static/2.40.39_6/libs/browser_check.js'></script>
  <script type="text/javascript" src='//cdn-service.datav.aliyun.com/datav-static/2.40.39_6/cube.js'></script>
  
  <script src="//cdn-service.datav.aliyun.com/datav-static/2.40.39_6/libs/jquery-2.1.1.min.js"></script>
  <script src="//cdn-service.datav.aliyun.com/datav-static/2.40.39_6/libs/event.js"></script>
  
  <script type="text/javascript">
    window.global = window;
    (function () {
      // main config for this page
      var appConfig = {
        base: '//cdn-service.datav.aliyun.com/datav-static/2.40.39_6/',
        debug: false
      };
      // semantic éè¦
      Cube.register('jquery', $);

      const fromApp = '';
      const url = new URL(window.location.href);
      const fromAppKey = '';

      window.process = {
        fromApp,
        fromAppKey,
        env: {
          NODE_ENV: 'prod'
        },
        staticBase: 'cdn-service.datav.aliyun.com',
        marqueeUrl: 'https://data.aliyun.com/datav/marquee?wh_ttid=pc',
        marqueeJsonpCallback: 'tms_jsonp_156241',
        inner: 'false',
        serviceBase: 'service.datav.aliyun.com',
        componentCenterBase: 'https://resource.datav.aliyun.com',
        staticPath: '//cdn-service.datav.aliyun.com/datav-static/2.40.39_6/'
      }

      window.screenAlias = '80662a42061e44d4277b0aa6ac9a6ee1'
      window.share = { event: new EventEmitter() }

      var share;

      Cube.init({
        base: appConfig.base,
        debug: appConfig.debug,
        version: '',
        enableCss: true,
        strict: false,
        global: window,
        remoteBase: {
          'datav': 'https://resource.datav.aliyun.com/cube/',
          'main': '/static'
        },
        timeout: 60000
      });

      // æ ¹æ® namespace å¤æ­æ¯å¤§å±é¢è§è¿æ¯åå¹¶èç¹é¢è§
      let namespace = 'share';
      Cube.use(['/common/share.js', 'main:/v3/screen/80662a42061e44d4277b0aa6ac9a6ee1/config.js'], function (Share, cfg) {
        document.title = cfg.name;
        share = Share({
          status: 'preview',
          fromApp,
          fromAppKey,
          datavBase: '',
          id: '80662a42061e44d4277b0aa6ac9a6ee1',
          datacenter: '//dc.datav.aliyun.com/',
          config: cfg,
          ratioX: null,
          ratioY: null,
          is4service: 'false',
          source: '',
          locale: 'zh_CN',
          region: 'CN',
          componentCenterBase: 'https://resource.datav.aliyun.com'
        });

        Cube.use(['main:/screens/80662a42061e44d4277b0aa6ac9a6ee1/hook.js', '/preview/index.js'], function (hook, Screen) {
          window.screen = cfg.config || {};
          window.screen.width && $('body').css('width', window.screen.width);
          window.screen.height && $('body').css('height', window.screen.height);
          $('head').append('<meta name="viewport" content="width=' + window.screen.width + '"/>');
          Screen.run('80662a42061e44d4277b0aa6ac9a6ee1', cfg, hook);
        });
        $(window, document).resize(function () {
          resize();
        }).load(function () {
          $('.datav-layout').css('visibility', 'visible');
          resize();
          $('#datav-loading').fadeOut();
        });
        setTimeout(function () {
          $('.datav-layout').css('visibility', 'visible');
          resize();
          $('#datav-loading').fadeOut();
        }, 10 * 1000);
      })

      function resize() {
        if (window.screen.display == 2) { // ç­æ¯ç¼©æ¾é«åº¦éºæ»¡
          resizeCenter();
        } else if (window.screen.display == 3) { // å¨å±éºæ»¡
          resizeFull();
        } else if (window.screen.display == 4) { // ç­æ¯ç¼©æ¾é«åº¦éºæ»¡å¹¶ä¸å¯ä»¥å·¦å³ç§»å¨
          resizeHeight();
        } else if (window.screen.display === 0) { // ä¸ç¼©æ¾
          resizeNone();
        } else { // ç­æ¯ç¼©æ¾å®½åº¦éºæ»¡
          resizeWidth();
        }
        window.share.event.emit('ratio-change', {
          ratioX: share.get('ratioX'),
          ratioY: share.get('ratioY')
        })
      }
      function resizeNone() {
        share.set('ratioX', 1);
        share.set('ratioY', 1);
        $('body').css({
          overflow: "hidden",
          position: 'relative'
        });
      }
      function resizeWidth() {
        var ratio = $(window).width() / (window.screen.width || $('body').width());
        share.set('ratioX', ratio)
        share.set('ratioY', ratio)
        $('body').css({
          transform: "scale(" + ratio + ")",
          transformOrigin: "left top",
          backgroundSize: "100%"
        });
      }
      function resizeCenter() {
        if (!window.screen.height || !window.screen.width) return resizeCenterBak();
        var ratio = $(window).height() / window.screen.height;
        share.set('ratioX', ratio)
        share.set('ratioY', ratio)
        $('body').css({
          transform: "scale(" + ratio + ")",
          transformOrigin: "left top",
          backgroundSize: 100 * (window.screen.width / $(window).width() * ratio) + "%" + ' 100%',
          backgroundPosition: ($(window).width() - $('body').width() * ratio) / 2 + "px top",
          marginLeft: ($(window).width() - $('body').width() * ratio) / 2
        });
      }

      function resizeHeight() { //
        if (!window.screen.height || !window.screen.width) return resizeCenterBak();
        var ratio = $(window).height() / window.screen.height;
        share.set('ratioX', ratio)
        share.set('ratioY', ratio)
        $('body').css({
          transform: "scale(" + ratio + ")",
          transformOrigin: "left top",
          backgroundSize: 100 * (window.screen.width / $(window).width() * ratio) + "%" + ' 100%',
          backgroundPosition: ($(window).width() - $('body').width() * ratio) / 2 + "px top",
          // marginLeft: ($(window).width() - $('body').width() * ratio) / 2
        });
        $('html').css({
          overflowX: 'scroll',
        })
      }
      
      function resizeFull() {
        if (!window.screen.height || !window.screen.width) return resizeFullBak();
        var ratioX = $(window).width() / window.screen.width;
        var ratioY = $(window).height() / window.screen.height;
        share.set('ratioX', ratioX)
        share.set('ratioY', ratioY)
        $('body').css({
          transform: "scale(" + ratioX + ", " + ratioY + ")",
          transformOrigin: "left top",
          backgroundSize: "100% 100%",
        });
      }

      function resizeCenterBak() {
        var ratioX = $(window).width() / $('body').width();
        var ratioY = $(window).height() / $('body').height();
        var ratio = Math.min(ratioX, ratioY);
        share.set('ratioX', ratio)
        share.set('ratioY', ratio)
        $('body').css({
          transform: "scale(" + ratio + ")",
          transformOrigin: "left top",
          backgroundSize: (1 / ratioX) * 100 * ratio + "%",
          backgroundPosition: ($(window).width() - $('body').width() * ratio) / 2 + "px top",
          marginLeft: ($(window).width() - $('body').width() * ratio) / 2
        });
      }
      function resizeFullBak() {
        var ratioX = $(window).width() / $('body').width();
        var ratioY = $(window).height() / $('body').height();
        share.set('ratioX', ratioX)
        share.set('ratioY', ratioY)
        $('body').css({
          transform: "scale(" + ratioX + ", " + ratioY + ")",
          transformOrigin: "left top",
          backgroundSize: "100% " + ratioY * 100 + "%",
        });
      }
      function getComList(coms) {
        var result = [];
        var comList = {};
        coms.forEach(function (com, index) {
          if (com.parent) return;
          var idx = com.attr.zIndex || 1000;
          if (!comList[idx]) comList[idx] = [];
          comList[idx].push(com);
        });
        Object.keys(comList).sort(function (a, b) {
          a = a * 1;
          b = b * 1;
          if (a > b) return 1;
          if (a < b) return -1;
          return 0
        }).forEach(function (idx) {
          comList[idx].forEach(function (com) {
            result.push(com.com_id);
          });
        });
        return result;
      }
    })();
  </script>
  <script>
  window._csrf = 'JbQUs7kg-3iV7sLHbm0LhH-nWkgddHNsBRhE';
  $.ajaxSetup({
    beforeSend: function(xhr, settings){
      if(!settings.crossDomain) {
        xhr.setRequestHeader('xsrf-token', 'JbQUs7kg-3iV7sLHbm0LhH-nWkgddHNsBRhE');
      }
    }
  });
</script>
  <script src="//cdn-service.datav.aliyun.com/datav-static/2.40.39_6/libs/analytics.js"></script>
  
</body>
</html>