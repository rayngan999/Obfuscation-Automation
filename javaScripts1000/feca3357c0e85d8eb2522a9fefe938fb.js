'use strict';

define(['jquery', 'bxslider-4', 'slick-carousel'],
  function($, _bxslider, _slickcarousel) {
    $(document).ready(function() {
      init();
      $('.banner-carousel-section').removeClass('show-loader');
    });

    function init() {
      $('#banner-carousel').slick({
        'dots': true,
        'infinite': true,
        'autoplay': true,
        'autoplaySpeed': 6000,
      });
    }
  }
);
