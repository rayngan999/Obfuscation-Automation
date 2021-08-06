window.QGSettings = {
   "debug": false,
   "vapidPublicKey": "BCmgI90-7uSzowmSLDrrWLusJ6uUbSWxuYU0DrBVTLnascikcUoeoxUm704ygaa7Ab7zqdJ4U5ym-ioDbxzHquA",
   "personalizationEnabled": true,
   "appId": "13df8c808888c05d0d88",
   "qgendpoint": "https://.aiqua.io/notify.html",
   "origin": "https://crossing.cw.com.tw/",
   "inWebEnabled": true,
   "cookieServer": {
      "enabled": true,
      "endpoint": "https://appier.cw.com.tw"
   },
   "push": {
      "delay": 0,
      "requestSelf": false,
      "fakePrompt": false,
      "secondsBetweenPrompts": 3600,
      "restrictOrigin": false,
      "useNotifyEndpoint": false,
      "allowedPushDomains": null
   }
};
if(window.qg && window.qg.queue) {
    window.qg.queue.unshift(('init', QGSettings));
}
!function(q,g,r,a,p,h,js){
    if(!q.qg){
        js=q.qg=function() {
            js.callmethod ? js.callmethod.call(js, arguments) : js.queue.push(arguments);
            js.queue = [];
        }
    }
    if(q.qg.initialized){return;}
    window.qg.queue.unshift(['init',window.QGSettings])
    p=g.createElement(r);
    p.async=!0;
    p.src=a;
    h=g.getElementsByTagName(r)[0];
    h.parentNode.insertBefore(p,h);
    q.qg.initialized = true;
}(window,document,'script','//cdn.qgraph.io/v3/r/aiqua.js');