/**
  Script as provided by Feathr
 */

  !function(f,e,a,t,h,r){if(!f[h]){r=f[h]=function(){r.invoke?
  r.invoke.apply(r,arguments):r.queue.push(arguments)},
  r.queue=[],r.loaded=1*new Date,r.version="1.0.0",
  f.FeathrBoomerang=r;var g=e.createElement(a),
  h=e.getElementsByTagName("head")[0]||e.getElementsByTagName("script")[0].parentNode;
  g.async=!0,g.src=t,h.appendChild(g)}
  }(window,document,"script","https://cdn.feathr.co/js/boomerang.min.js","feathr");

  feathr("fly", hm_feathr.Feathr_API_Key);
  feathr("sprinkle", "page_view");
