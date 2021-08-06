(function ($) {
  Drupal.behaviors.ajaxThrobber = {
    attach: function () {
      if (Drupal.settings.ajaxThrobber) {
        var $spinner = $(".overlay-spinner ");

        var itemColor = Drupal.settings.ajaxThrobber.item_color;
        var bgColor = Drupal.settings.ajaxThrobber.bg_color;
        var type = Drupal.settings.ajaxThrobber.type;

        _ajax_throbber_adjust_css_for_type($spinner, itemColor, bgColor, type);

        $(document).ajaxComplete(function () {
          $spinner.fadeOut(100);
        });

        $(document).ajaxSend(function () {
          $spinner.fadeIn(100);
        });
      }
    }
  }
})(jQuery);

function _ajax_throbber_adjust_css_for_type($spinner, itemColor, bgColor, type) {
  $spinner.css("background", "rgba(" + bgColor + ")");
  switch (type) {
    case 'circle':
      // Circle
      $spinner.find(".container1 > div, .container2 > div, .container3 > div").css("background-color", "rgba(" + itemColor + ")");
      break;
    case 'fading_circle':
    case 'square':
      $spinner.find(".spinner").css("background", "rgba(" + itemColor + ")");
      break;
    default:
      $spinner.find(".spinner > div").css("background", "rgba(" + itemColor + ")");
  }
}
;
