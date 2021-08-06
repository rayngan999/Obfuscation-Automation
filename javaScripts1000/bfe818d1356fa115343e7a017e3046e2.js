

jQuery(document).ready(function($){

  $(".slider-news .ellipsis").dotdotdot();

  $('.slider-news-container').each(function(){
    $(this).slick({
      dots: false,
      infinite: true,
      speed: 150,
      slidesToShow: 4,
      slidesToScroll: 4,
      centerMode: false,
      draggable: true,
      nextArrow: '<span class="fa fa-angle-right right"></span>',
      prevArrow: '<span class="fa fa-angle-left left"></span>',
      responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: 'unslick'
      }]
    });
  });



});
