               
(function (ele, event, cb) {
  ele = ele || {};
  if (ele.addEventListener) {
    ele.addEventListener(event, cb);
  } else if (ele.attachEvent) {
    ele.attachEvent('on' + event, cb);
  } else {
    ele['on' + event] = cb;
  }
})(window, 'load', function(){
  var script = document.createElement('script');
  script.src = 'https://g.alicdn.com/um-f2e/alicare/1.0.9/umeng_message.js';
  script.async = true;
  script.crossorigin = '';
  document.getElementsByTagName("head")[0].appendChild(script);
});
