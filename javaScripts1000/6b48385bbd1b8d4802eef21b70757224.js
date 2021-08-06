(function() {
  function get_host(url){
      return url.replace(/^((\w+:)?\/\/[^\/]+\/?).*$/,'$1');
  }
  var host = get_host(document.currentScript.src);
  var promo_root = document.createElement('div');
  promo_root.id = 'promo-root';
  promo_root.style.display = 'none';
  document.body.appendChild(promo_root);
  var url = host + 'res/delivery/delivery.js';
  var iframe = document.createElement('iframe');
  (iframe.frameElement || iframe).style.cssText = "width: 0; height: 0; border: 0";
  iframe.src = "javascript:false";
  document.getElementById('promo-root').appendChild(iframe);
  var doc = iframe.contentWindow.document;
  doc.open().write('<body onload="'+
    'window.inDapIF = true;' +
    'var js = document.createElement(\'script\');'+
    'js.src = \''+ url +'\';'+
    'document.body.appendChild(js);">');
  doc.close();
}());

// async init once loading is done
window.promoAsyncInit = function() {
    PROMO.init();
};

//start to play promo_video_ad
function listenMessage(msg) {
  var promo_video = document.getElementById('promo-video-id');
  if (promo_video == null ) {
    return;
  }
  if (msg.data == 'error') {
    return;
  }
  var units = promo_video.style.width.split("");
  var aspectRatio;
  if (units[units.length-1] == "x") {
    aspectRatio = promo_video.offsetWidth * msg.data.aspectRatio + "px";
  }else{
    aspectRatio =  msg.data.aspectRatio * 100 + "%";
  }
  var el_height = promo_video.offsetWidth * msg.data.aspectRatio;
    //console.log(el_height);
  if (document.body.offsetHeight - promo_video.offsetTop <= el_height) {
    el_height = 300;
  }
  if (msg.data == 'close') {
    promo_video.parentNode.removeChild(promo_video);
  }
  window.addEventListener("scroll", function scrol(event) {
    var scrollTop = this.scrollY + this.innerHeight - el_height;
    if ( scrollTop > promo_video.offsetTop) {
      //div style for responsive
      var v_cont = promo_video;
      var v_cont_style = v_cont.style;
      var v_iframe = v_cont.childNodes[0];
      var v_iframe_style = v_cont.childNodes[0].style;

      v_cont_style.position = 'relative';
      v_cont_style.display = 'block';
      v_cont_style.height = '0';
      v_cont_style.padding = '0';
      v_cont_style.overflow = 'hidden';
      v_cont_style.paddingBottom = aspectRatio;

      //iframe style
      v_iframe_style.position = "absolute";
      v_iframe_style.left = "0";
      v_iframe_style.right = "0";
      v_iframe_style.marginRight = "auto";
      v_iframe_style.marginLeft = "auto";
      v_iframe_style.width = "100%";
      v_iframe_style.height = "100%";
      v_iframe_style.border = "0";
      v_iframe_style.transition = "all 1s linear";
      
      //send message to videojs
      if (v_iframe.contentWindow) {
        v_iframe.contentWindow.postMessage('play', "*");
        window.removeEventListener("scroll", scrol, false);
      }
    }
  }, false);
}


if (window.addEventListener) {
    window.addEventListener("message", listenMessage, false);
} else {
    window.attachEvent("onmessage", listenMessage);
}


