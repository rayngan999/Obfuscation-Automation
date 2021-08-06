var FromSearchEngine = false;
(function(){
    var ref = document.referrer;
    var engines = [
        /^https?:\/\/([a-zA-Z0-9]+)\.google\.(co\.jp|com)/,
        /^https?:\/\/blogsearch\.google\.co\.jp\/blogsearch/,
        /^https?:\/\/search\.yahoo\.co\.jp\/search/,
        /^https?:\/\/blog\-search\.yahoo\.co\.jp\/search/,
        /^https?:\/\/search\.livedoor\.com\/search/,
        /^https?:\/\/sf\.livedoor\.com\/search/,
        /^https?:\/\/www\.bing\.com\/search/,
        /^https?:\/\/www\.baidu\.jp/,
        /^https?:\/\/blog\.baidu\.jp/,
        /^https?:\/\/search\.goo\.ne\.jp\/web.jsp/,
        /^https?:\/\/blog\.search\.goo\.ne\.jp\/search_goo\/result/,
        /^https?:\/\/search\.nifty\.com\/websearch\/search/,
        /^https?:\/\/search\.nifty\.com\/blogsearch\/search/,
        /^https?:\/\/search\.www\.infoseek\.co\.jp\/Web/,
        /^https?:\/\/blogsearch\.fc2\.com/,
        /^https?:\/\/ask\.jp\/web\.asp/,
        /^https?:\/\/www\.excite\.co\.jp\/search\.gw/
    ];
    for (var i = 0, max_i = engines.length; i < max_i; i++) {
        var engine = engines[i];
        if (engine) {
            if (engine.test(ref)) {
                FromSearchEngine = true;
                break;
            }
        }
    }
})();


var blog_counter_adtrk;

function blog_counter(name, id, url) {
   var vkey = "ldblog_v";
   var ckey = "ldblog_c";
   var fkey = "ldblog_f";
   var ukey = "ldblog_u";

   var counter2_base = "https://counter2.blog.livedoor.com/c";
   var _get_cookie = function(key) {
      var value = document.cookie.match(new RegExp("(?:^|;) *" + key + "=([^;]*)"));
      return (value ? value[1] : null);
   };
   var _set_cookie = function(key, value, expires, path) {
      document.cookie = key + "=" + value + "; expires=" + expires.toGMTString() + "; path=/" + path + ";";
   };

   //
   var d = document; var w = window;
   if (w.self != w.parent) return;

   var r = d.referrer;  var u = d.referrer;
   if(d.parent && d.parent != undefined) r = d.parent.referrer;

   if(r.match(/^(undefined|unknown|bookmark)$/i)) r = "";
   if (w.top.location == d.location)  u = d.location;
   u = u + "";
   //

   var revisit = _get_cookie(vkey) ? true:false;
   var vcount = parseInt(_get_cookie(ckey)) + (revisit ? 0:1) || 1;
   var fvisit = _get_cookie(fkey); if (!fvisit) { var dt = new Date(); fvisit = Math.floor(dt.getTime()/1000); };
   var sid = _get_cookie(ukey) || '';

   var path = '';
   if (url) {
      if ( r.match(new RegExp("^" + url))) r = "";
      var value = url.match(new RegExp("^https?://[^/]*/(.*)$"));
      path = (value ? value[1] : '');
   }

   var dt = new Date(); dt.setTime(dt.getTime() + 86400000);
   dt.setSeconds(0);dt.setMinutes(0);dt.setHours(0);
   _set_cookie(vkey, 1, dt, path);

   dt.setTime(dt.getTime() + 86400000 * 90);
   _set_cookie(ckey, vcount, dt, path);
   _set_cookie(fkey, fvisit, dt, path);

   var params = { output:'no', name:name, id:id, r:r, u:u };
   if (revisit) params.re = 1;
   if (sid) params.sid = sid;
   if (vcount) params.vc = vcount;
   if (fvisit) params.fv = fvisit;
   if (ld_blog_vars && ld_blog_vars.current_page) {
      var page = ld_blog_vars.current_page;
      if (page.type === 'article' && ld_blog_vars.articles[0])
          params.pid = ld_blog_vars.articles[0].id;
      params.ptype = page.type;
      params.ppage = page.page;
      var subtype = [];
      if (page.type == 'monthly') { subtype = [page.year, page.month] }
      else if (page.type == 'category') { subtype = [page.category] }
      else if (page.type == 'tag') { subtype = [page.tag_name] }
      else if (page.type == 'search') { subtype = page.search_keywords || [] }
      params.psubtype = subtype.join(',');

      if (page.is_smartphone == 1) { params.is_smph = 1; };
   }
   document.writeln('<img src="' + counter2_base + build_query(params) + '" width="1" height="1" style="display:none;" />');

   blog_counter_adtrk = function(addiv, adtype) {
      var params = { output:'no', ro:1, act:'ad', addiv:addiv, adtype:adtype, name:name, id:id, r:r, u:u};
      if (revisit) params.re = 1;
      if (sid) params.sid = sid;
      if (vcount) params.vc = vcount;
      if (fvisit) params.fv = fvisit;
      var img = document.createElement('img');
      img.setAttribute('src', counter2_base + build_query(params));
      img.style.height = '1px';
      img.style.width = '1px';
      document.getElementsByTagName('body')[0].appendChild(img);
   };
}

function build_query(params) {
    queries = '?';
    for (var key in params) {
        queries += key + '=' + encodeURIComponent(params[key]) + '&';
    }
    queries += 'noCache=' + encodeURIComponent(Math.floor(Math.random() * 1000000));
    return queries;
}
