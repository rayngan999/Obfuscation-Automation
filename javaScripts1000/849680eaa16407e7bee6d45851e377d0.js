

(function(){
    if(window.umSiteFontLoaded){return;}
    var domStyle = document.createElement('style');
    var css = "\
    @font-face {\
      font-family: 'umsitefont';  /* project id 472294 */\
      src: url('//at.alicdn.com/t/font_472294_93fw4gr6yua.eot');\
      src: url('//at.alicdn.com/t/font_472294_93fw4gr6yua.eot?#iefix') format('embedded-opentype'),\
      url('//at.alicdn.com/t/font_472294_93fw4gr6yua.woff2') format('woff2'),\
      url('//at.alicdn.com/t/font_472294_93fw4gr6yua.woff') format('woff'),\
      url('//at.alicdn.com/t/font_472294_93fw4gr6yua.ttf') format('truetype'),\
      url('//at.alicdn.com/t/font_472294_93fw4gr6yua.svg#umsitefont') format('svg');\
    }\
    .umsitefont{\
      font-family:'umsitefont' !important;\
      line-height: 1;\
      font-size:30px;font-style:normal;\
      -webkit-font-smoothing: antialiased;\
      -webkit-text-stroke-width: 0.2px;\
      -moz-osx-font-smoothing: grayscale;\
    }\
    body{\
      background-color: #fff; padding:0; margin:0;\
    }\
    body, button, input, select, textarea{\
      font:12px/1.5 'PingFang SC','microsoft yahei',tahoma,arial,'Hiragino Sans GB',sans-serif;\
    }\
    ";
    document.getElementsByTagName("head")[0].appendChild(domStyle);
    if('styleSheet' in domStyle){
        domStyle.setAttribute('type', 'text/css');
        domStyle.styleSheet.cssText += css;
    }else{
        domStyle.innerHTML = css;
    }
    window.umSiteFontLoaded = true;
})();