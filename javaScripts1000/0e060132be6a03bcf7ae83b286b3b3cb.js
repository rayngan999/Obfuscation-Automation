(function($) {

  $.fn.myvideoResize = function(o){
    // Extend the default settings
    var s = $.extend({}, $.fn.myvideoResize.defaults, o);
    
    // Fire window load event
    $.event.add(window, "load", setContent(true));
    
    // Fire window resize event with setTimeout()
    if ($.browser.msie  && parseInt($.browser.version, 10) != 7) {
        var TO = false;
        $(window).resize(function(){
          if(TO !== false)
          clearTimeout(TO);
          TO = setTimeout(setContent, 300);
        });
    }
      
    // Resize the content
    function setContent(first_load) {
      var w = $(window).width();
      var cur_size_state = $.cookie('page_size');
      if(first_load){
        cur_size_state = false;
      }
      if (w > '1260') {
         if(cur_size_state != 'large' && !first_load){
            $("link#ie_css_holder").attr({href : ""});
            $.cookie('page_size', 'large', { expires: 7 });
        }
        return false;
      } else {
        if(cur_size_state != 'small'){
            $("link#ie_css_holder").attr({href : ""+s.small_css_path+""});
            $.cookie('page_size', 'small', { expires: 7 });
        }
        return false;
      }  
    }
    
  };
  
  // Defualts
  $.fn.myvideoResize.defaults = {
        small_css_path: "",
        large_css_path: "",
        small_sessions_path: "",
        large_sessions_path: "",
        facebook_url: ""
    };
    
})(jQuery);

(function($) {
  $.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
      options = options || {};
      if (value === null) {
        value = '';
        options.expires = -1;
      }
      var expires = '';
      if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
        var date;
        if (typeof options.expires == 'number') {
          date = new Date();
          date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
        } else {
          date = options.expires;
        }
        expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
      }
      // CAUTION: Needed to parenthesize options.path and options.domain
      // in the following expressions, otherwise they evaluate to undefined
      // in the packed version for some reason...
      var path = options.path ? '; path=' + (options.path) : '';
      var domain = options.domain ? '; domain=' + (options.domain) : '';
      var secure = options.secure ? '; secure' : '';
      document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
      var cookieValue = null;
      if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
          var cookie = jQuery.trim(cookies[i]);
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) == (name + '=')) {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            break;
          }
        }
      }
      return cookieValue;
    }
  };
})(jQuery);

