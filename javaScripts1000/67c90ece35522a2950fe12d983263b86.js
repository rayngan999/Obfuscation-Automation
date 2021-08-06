(function () {
  if (!navigator.userAgent.match(/(?:iPhone|iPod|Android)/) || (location.hash === '#no_banner')) {
    return;
  }

  if (window.addEventListener) {
    window.addEventListener('load', function() {
      var sphd = document.createElement('div');
      sphd.id = 'smartphone';
      sphd.innerHTML = ['<style type="text/css">',
        '#smartphone {',
        '  background-color: #edeff2;',
        '  padding: 18px;',
        '  position: relative;',
        '  bottom: 0;',
        '  left: 0;',
        '  width: 100%;',
        '  -webkit-box-sizing: border-box;',
        '  box-sizing: border-box;',
        '  z-index: 2147483647;',
        '}',
        '.smartphonelink {',
        '  display: block;',
        '  font-size: 18px;',
        '  padding: 2vh;',
        '  color: #fff !important;',
        '  text-decoration: none !important;',
        '  font-weight: bold;',
        '  text-decoration: none;',
        '  text-align: center;',
        '  background: #647088;',
        '  border-radius: 6px;',
        '}',
        '</style>',
        ('<a href="javascript:void(0)" class="smartphonelink" id="blog-change-sp">'
          + unescape('%u30B9%u30DE%u30FC%u30C8%u30D5%u30A9%u30F3%u7248%u3078')
          + '</a>')
      ].join('\n');

      document.body.appendChild(sphd);
      var elm = document.getElementById("blog-change-sp");
      if (elm) {
        elm.addEventListener('click', function() {
          var domain, path;
          var blog_url = ld_blog_vars.url;
          if (blog_url.match(/^https?:\/\/([^\/]+)(\/[^\/]+)\/$/)) {
            domain = RegExp.$1;
            path   = RegExp.$2;
          } else if (blog_url.match(/^https?:\/\/([^\/]+)\/$/)) {
            domain = RegExp.$1;
            path   = '/';
          } else {
            return;
          }
            var cookie = 'sp_friendly=1; domain=' + RegExp.$1 + '; path=' + path + ';';
            document.cookie = cookie;
            document.location.reload(true);
        }, false);
      }
    }, false);
  }
})();
