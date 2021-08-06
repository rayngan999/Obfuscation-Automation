/**
 * vmagazine Custom JS
 *
 * @package AccessPress Themes
 * @subpackage Vmagazine
 * @since 1.0.0
 *
 * Distributed under the MIT license - http://opensource.org/licenses/MIT
 */
jQuery(document).ready(function($) {
  "use strict";

var lazyLoad = vmagazine_ajax_script.lazy;
if( lazyLoad == 'enable' ){
 $('.lazy').Lazy();
}

    
var rtl_str = vmagazine_ajax_script.rtl;
    if( rtl_str == 'true' ){
        rtl_str = true;
    }else{
        rtl_str = false;
    }
    
 

//Preloader section
var preloader = vmagazine_ajax_script.preloader;
if( preloader == 'show' ){
  $(window).load(function() {
     $('.vmagazine-loader').fadeOut('slow');
     $('body').removeClass('vmagazine-loader-enabled');
  });  

}



/**
* Youtube Video scrollbar
*
*/
$(window).on("load", function () {
  $('.vmagazine-yt-player .vmagazine-video-thumbnails,.sidebar-wrapper').mCustomScrollbar({
    theme: "dark",
    scrollInertia: 500
  });

$('.vmagazine-fullwid-slider .posts-tab-wrap').mCustomScrollbar({
    //theme: "dark"
    scrollInertia: 500

  });

});


/**
* Sticky sidebar
*
*/
 $('#secondary, #secondary-left').theiaStickySidebar({
      // Settings
      additionalMarginTop: 30
    });

/**
* Fixed Header
*
*/
var stickyEnable = vmagazine_ajax_script.stickyHeader;

if( stickyEnable == 'show' ){
  /*position fixed-menu on scroll*/
      
  if( $('.site-header').hasClass('header-layout3') ){
    var hdrOuter = '.site-header.header-layout3';
    var fixHandle = '.site-header .site-main-nav-wrapper';    
  }else{
    var hdrOuter = '.site-header .vmagazine-nav-wrapper';
    var fixHandle = '.site-header .vmagazine-nav-wrapper';
  }

  //sticky menuy for mobile device
  if ($(window).width() <= 768){

      var hdrOuter = '.vmagazine-mob-outer';
      var fixHandle = '.vmagazine-mob-outer';
  }

    var getHeaderHeight = $(hdrOuter).outerHeight();
    var lastScrollPosition = 0;
    
    $(window).scroll(function() {
      var currentScrollPosition = $(window).scrollTop();
      
      if ($(window).scrollTop() > 2.3 * (getHeaderHeight) ) {

        $(fixHandle).addClass('menu-fixed-triggered');

        if (currentScrollPosition > lastScrollPosition) {
        $(fixHandle).removeClass('menu-fixed');
        }else{
          $(fixHandle).addClass('menu-fixed');
        }
        lastScrollPosition = currentScrollPosition;
      } else {
        $(fixHandle).removeClass('menu-fixed');
        $(fixHandle).removeClass('menu-fixed-triggered');
      }
      
    });

}

 //Fix audio and video size
$(".vmagazine-content").fitVids();
$(".vmagazine-content,.player-inner").fitVids({
    customSelector: "iframe[src^='https://w.soundcloud.com']"
});

/**
* Post Gallery preetyphoto
*
*/
 $(".gallery-items a,.shortcode-gallery .gallery_wrap a,.gallery-item div a").prettyPhoto({
    social_tools: false,
    theme: 'facebook'
 });

/* 
* Full width Slider
*
* layout one 
*/
var sliderCount = $('.vmagazine-fullwid-slider').attr('data-count');

var sourceURL = vmagazine_ajax_script.fileUrl;
$('.widget .vmagazine-fullwid-slider.block_layout_1 .slick-wrap').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  rtl: rtl_str,
  fade: true,
  asNavFor: '.widget .vmagazine-fullwid-slider.block_layout_1 .posts-tab-wrap'
});
$('.widget .vmagazine-fullwid-slider.block_layout_1 .posts-tab-wrap').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.widget .vmagazine-fullwid-slider.block_layout_1 .slick-wrap',
  dots: false,
  arrows: true,
  rtl: rtl_str,
  prevArrow:"<button type='button' class='slick-prev pull-left'><img src='"+sourceURL+"/assets/images/previous-long-arrow.png'></button>",
  nextArrow:"<button type='button' class='slick-next pull-right'><img src='"+sourceURL+"/assets/images/next-long-arrow.png'></button>", 
  centerMode: false,
  focusOnSelect: true,
  responsive: [
          {
            breakpoint: 1366,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
             
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        
      ]
});  

/* 
* Full width Slider
*
* layout two 
*/
var mobArrow;
if ($(window).width() <= 768){
    mobArrow = true;
}else{
   mobArrow = false;
}

$('.widget .vmagazine-fullwid-slider.block_layout_2 .slick-wrap').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  rtl: rtl_str,
  arrows: mobArrow,
  fade: true,
  asNavFor: '.widget .vmagazine-fullwid-slider.block_layout_2 .posts-tab-wrap'
})

$('.widget .vmagazine-fullwid-slider.block_layout_2 .posts-tab-wrap').slick({
  slidesToShow: sliderCount,
  slidesToScroll: 4,
  asNavFor: '.widget .vmagazine-fullwid-slider.block_layout_2 .slick-wrap',
  dots: false,
  arrows: mobArrow,
  centerMode: false,
  rtl: rtl_str,
  centerPadding: 0,
  focusOnSelect: true,
  vertical: true,
  responsive: [
          {
            breakpoint: 1366,
            settings: {
              slidesToShow: sliderCount,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 966,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        
      ]
});


/**
* Back to top button
*/
$('.scrollup').hide();
var offset = 250;
var duration = 300;
$(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
        $('.scrollup').fadeIn(duration);
    } else {
        $('.scrollup').fadeOut(duration);
    }
});
$('body').on('click', '.scrollup', function (event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, duration);
    return false;
})


/**
* Ajax search function
*
*/
var ajaxEnable = vmagazine_ajax_script.ajax_search;
if( ajaxEnable == 'show' ){

  $('body').on('focusout', '.site-header input[type="search"],.vmagazine-mobile-search-wrapper input[type="search"]', function () { 
    $('body').on('click', '.site-header:not(.search-content),.vmagazine-mobile-search-wrapper:not(.search-content)', function () { 
          $('.site-header .search-content,.vmagazine-mobile-search-wrapper .search-content').hide();
      });
    });

  $('.site-header input[type="search"],.vmagazine-mobile-search-wrapper input[type="search"]').on('keyup',function(){
    $('.site-header .search-content,.vmagazine-mobile-search-wrapper .search-content').html('');

    var searVal = $(this).val();
    if( searVal.length >= 2 ){
      $('.site-header .search-content,.vmagazine-mobile-search-wrapper .search-content').show();
      var dis = $(this);
      var keyword = $(this).val();
      
      $('.site-header,.vmagazine-mobile-search-wrapper').find('.block-loader').show();
       $.ajax({
                url : vmagazine_ajax_script.ajaxurl,
                data:{
                      action : 'search_function',
                      key:  keyword,
                    },
                type:'post',
                success: function(res){    
                        $('.site-header .search-content,.vmagazine-mobile-search-wrapper .search-content').html(res);
                        $('.site-header .ajax-search-view-all:not(:last),.vmagazine-mobile-search-wrapper .ajax-search-view-all:not(:last)').remove();
                        $('.site-header .block-loader,.vmagazine-mobile-search-wrapper .block-loader').hide();
                    }
            });
    }

  });  

}


  /**
   * Featured slider
   */
  $('.widget .featuredSlider').lightSlider({
    item:1,
    slideMargin:0,
    enableDrag:true,
    loop:true,
    pager:true,
    rtl: rtl_str,
    pagerHtml: true,
    auto:true,
    speed: 700,
    pause: 4200,
    onSliderLoad: function() {
           $('.featuredSlider').removeClass( 'cS-hidden' );
           
       }
    });

 
/*===========================================================================================================*/ 


/*===========================================================================================================*/ 

/**
* Child Category Posts Ajax Function
*
* vmagazine-multiple-category
*/
$('.vmagazine-tab-links li').first('li').addClass('active');

    $('.widget .child-cat-tabs .vmagazine-tab-links a').on('click', function(e)  {
        
      $.dis = $(this);
        var currentAttrValue = $(this).attr('data-id');
        var currentAttrSlug = $(this).attr('data-slug');
        var currentAttrLayout = $(this).attr('class');
        var currentLayout   = $(this).attr('data-layout');
        var postCount = $(this).attr('data-count');
        var postLengths = $(this).attr('data-length');
        var postBtm = $(this).attr('data-btn');
        var postMeta = $(this).attr('data-meta');

        $(this).parent('li').addClass('active').siblings().removeClass('active');

        if($(this).parents('.block-header').siblings('.block-content-wrapper').find('.'+currentAttrSlug).length > 0){
            $(this).parents('.block-header').siblings('.block-content-wrapper').find('.block-cat-content').hide();
            $(this).parents('.block-header').siblings('.block-content-wrapper').find('.'+currentAttrSlug).show();

        } else {
          $.dis.parents('.block-header').siblings('.block-content-wrapper').find('.block-loader').show();
          $.ajax({
              url : vmagazine_ajax_script.ajaxurl,
              
              data:{
                      action : 'vmagazine_tabs_ajax_action',
                      category_id:  currentAttrValue,
                      category_slug: currentAttrSlug,
                      class: currentAttrLayout,
                      layout: currentLayout,
                      limit: postCount,
                      plength: postLengths,
                      readMore: postBtm,
                      post_meta: postMeta
                  },
              type:'post',
               success: function(res){                                        
                      $.dis.parents('.block-header').siblings('.block-content-wrapper').append(res);
                      $.dis.parents('.block-header').siblings('.block-content-wrapper').find('.block-cat-content').hide();
                      $.dis.parents('.block-header').siblings('.block-content-wrapper').find('.'+currentAttrSlug).show();
                      $('.block-loader').hide();
                  }
          });
      }
    });

/* --------------------------------------------------------------------------------------------------------------------------- */
/**
* Category tabbde ajax
*
* Vmagazine-multiple-category-tabbed
*/ 
$('.vmagazine-tabbed-links li').first('li').addClass('active');

    $('.widget .multiple-child-cat-tabs .vmagazine-tabbed-links a').on('click', function(e)  {
        
      $.dis = $(this);
      var currentAttrValue = $(this).attr('data-id');
      var currentAttrSlug = $(this).attr('data-slug');
      var excerpts        = $(this).attr('data-count');
      var currentAttrLayout = $(this).attr('class');
      var currentMeta =     $(this).attr('data-meta');

      $(this).parent('li').addClass('active').siblings().removeClass('active');

      if($(this).parents('.block-header').siblings('.block-content-wrapper').find('.'+currentAttrSlug).length > 0){
          $(this).parents('.block-header').siblings('.block-content-wrapper').find('.block-cat-content').hide();
          $(this).parents('.block-header').siblings('.block-content-wrapper').find('.'+currentAttrSlug).show();

      } else {
        $.dis.parents('.block-header').siblings('.block-content-wrapper').find('.block-loader').show();
        $.ajax({
            url : vmagazine_ajax_script.ajaxurl,
            
            data:{
                    action : 'vmagazine_cat_tabbed_ajax_action',
                    category_id:  currentAttrValue,
                    category_slug: currentAttrSlug,
                    post_excerpt: excerpts,
                    class: currentAttrLayout,
                    show_meta: currentMeta
                },
            type:'post',
            success: function(res){                                        
                    $.dis.parents('.block-header').siblings('.block-content-wrapper').append(res);
                    $.dis.parents('.block-header').siblings('.block-content-wrapper').find('.block-cat-content').hide();
                    $.dis.parents('.block-header').siblings('.block-content-wrapper').find('.'+currentAttrSlug).show();
                    $('.block-loader').hide();
                }
        });
      }
    });

/* --------------------------------------------------------------------------------------------------------------------------- */

/*
 * slider tab ajax
 *
 * Vmagazine-slier-tab
 *
  */
  $('.slider-tab-links li').first('li').addClass('active');

    $('.widget .slider-cat-tabs .slider-tab-links a').on('click', function(e)  {
        
      $.dis = $(this);
        var currentAttrValue = $(this).attr('data-id');
        var currentAttrSlug = $(this).attr('data-slug');
        var PostPerPage = $(this).attr('data-offset');


        $(this).parent('li').addClass('active').siblings().removeClass('active');

        if($(this).parents('.block-header').siblings('.block-content-wrapper').find('.'+currentAttrSlug).length > 0){
            $(this).parents('.block-header').siblings('.block-content-wrapper').find('.block-cat-content').hide();
            $(this).parents('.block-header').siblings('.block-content-wrapper').find('.'+currentAttrSlug).show();

        } else {
          $.dis.parents('.block-header').siblings('.block-content-wrapper').find('.block-loader').show();
          $.ajax({
              url : vmagazine_ajax_script.ajaxurl,
              
              data:{
                      action : 'vmagazine_slider_tab_action',
                      category_id:  currentAttrValue,
                      category_slug: currentAttrSlug,
                      postper_page: PostPerPage,
                  },
              type:'post',
               success: function(res){                                        
                      $.dis.parents('.block-header').siblings('.block-content-wrapper').append(res);
                      vmagazine_cat_tabs('.'+currentAttrSlug);
                      $.dis.parents('.block-header').siblings('.block-content-wrapper').find('.block-cat-content').hide();
                      $.dis.parents('.block-header').siblings('.block-content-wrapper').find('.'+currentAttrSlug).show();
                      $('.block-loader').hide();
                  }
          });
      }
    });


  /**
  * Tab cat slider
  * 
  * vmagazine-slider-tab
  */
  function vmagazine_cat_tabs($slider_class){
      $('.widget .vmagazine-slider-tab '+ $slider_class).each(function(){
        var Id = $(this).attr('data-slug');
        var NewId = Id;
        var target = '.'+Id+' .tab-cat-slider';
        NewId = $(target).slick({
          dots: true,
          speed: 600,
          rtl: rtl_str,
          arrows: false,
          focusOnSelect: true,
          centerMode: true,
          centerPadding: 0,
          slidesToShow: 3,
          slidesToScroll: 3,
          responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3,
                      dots: true
                    }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  }
              ]
        });
      })
    } 
    $('.vmagazine_category_slider_tab').each(function(){
        var first_active_tab_content = $(this).find('.block-content-wrapper .block-cat-content:first').attr('data-slug');
        if(first_active_tab_content){
        vmagazine_cat_tabs('.' + first_active_tab_content);
        }
    });      

/*===========================================================================================================*/
/**
  * Tab cat slider
  * 
  * vmagazine-slider-tab-carousel
  */
  function vmagazine_cat_tabs_carousel($slider_class){
      $('.widget .vmagazine-slider-tab-carousel '+ $slider_class).each(function(){
        var Id = $(this).attr('data-slug');
        var NewId = Id;
        var target = '.'+Id+' .tab-cat-slider-carousel';
        NewId = $(target).slick({
          dots: true,
          speed: 600,
          arrows: true,
          rtl: rtl_str,
          focusOnSelect: true,
          //centerMode: true,
          centerPadding: 0,
          slidesToShow: 4,
          responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3,
                    }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2
                    }
                  },
                  {
                    breakpoint: 500,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  }
              ]
        });
      })
    } 
    $('.vmagazine_category_slider_tab_carousel').each(function(){
        var first_active_tab_content = $(this).find('.block-content-wrapper-carousel .block-cat-content-carousel:first').attr('data-slug');
        if(first_active_tab_content){
        vmagazine_cat_tabs_carousel('.' + first_active_tab_content);
        }
    });

/*
 * slider tab ajax
 *
 * Vmagazine-slier-tab
 *
  */
  $('.slider-tab-links-carousel li').first('li').addClass('active');

    $('.widget .slider-cat-tabs-carousel .slider-tab-links-carousel a').on('click', function(e)  {
        
      $.dis = $(this);
        var currentAttrValue = $(this).attr('data-id');
        var currentAttrSlug = $(this).attr('data-slug');
        var PostPerPage = $(this).attr('data-offset');
        var PostMeta = $(this).attr('data-meta');


        $(this).parent('li').addClass('active').siblings().removeClass('active');

        if($(this).parents('.block-header').siblings('.block-content-wrapper-carousel').find('.'+currentAttrSlug).length > 0){
            $(this).parents('.block-header').siblings('.block-content-wrapper-carousel').find('.block-cat-content-carousel').hide();
            $(this).parents('.block-header').siblings('.block-content-wrapper-carousel').find('.'+currentAttrSlug).show();

        } else {
          $.dis.parents('.block-header').siblings('.block-content-wrapper-carousel').find('.block-loader').show();
          $.ajax({
              url : vmagazine_ajax_script.ajaxurl,
              
              data:{
                      action : 'vmagazine_slider_tab_carousel_action',
                      category_id:  currentAttrValue,
                      category_slug: currentAttrSlug,
                      postper_page: PostPerPage,
                      post_meta: PostMeta
                  },
              type:'post',
               success: function(res){                                        
                      $.dis.parents('.block-header').siblings('.block-content-wrapper-carousel').append(res);
                      vmagazine_cat_tabs_carousel('.'+currentAttrSlug);
                      $.dis.parents('.block-header').siblings('.block-content-wrapper-carousel').find('.block-cat-content-carousel').hide();
                      $.dis.parents('.block-header').siblings('.block-content-wrapper-carousel').find('.'+currentAttrSlug).show();
                      $('.block-loader').hide();
                  }
          });
      }
    });


/*===========================================================================================================*/
/**
  * Tab cat slider
  * 
  * vmagazine-block-post-slider
  */
  /**
* block post slider
*/
    
  function vmagazine_block_post_slider($slider_class){
      $('.widget .vmagazine-block-post-slider '+ $slider_class).each(function(){
        var Id = $(this).attr('data-slug');
        var NewId = Id;
        var target = '.'+Id+' .block-post-slider-wrapper';
        NewId = $(target).slick({
          dots: true,
          speed: 600,
          rtl: rtl_str,
          arrows: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1
         
        });
      })
    } 
    $('.vmagazine_block_post_slider').each(function(){
        var first_active_tab_content = $(this).find('.block-content-wrapper .block-cat-content:first').attr('data-slug');
        if(first_active_tab_content){
        vmagazine_block_post_slider('.' + first_active_tab_content);
        }
    });

/*
 * slider tab ajax
 *
 * vmagazine-block-post-slider
 *
  */
  $('.vmagazine-tabbed-post-slider li').first('li').addClass('active');

    $('.multiple-child-cat-tabs-post-slider .vmagazine-tabbed-post-slider a').on('click', function(e)  {
        
      $.dis = $(this);
        var currentAttrValue = $(this).attr('data-id');
        var currentAttrSlug = $(this).attr('data-slug');
        var PostPerPage = $(this).attr('data-offset');
        var PostMeta = $(this).attr('data-meta');


        $(this).parent('li').addClass('active').siblings().removeClass('active');

        if($(this).parents('.block-header').siblings('.block-content-wrapper').find('.'+currentAttrSlug).length > 0){
            $(this).parents('.block-header').siblings('.block-content-wrapper').find('.block-cat-content').hide();
            $(this).parents('.block-header').siblings('.block-content-wrapper').find('.'+currentAttrSlug).show();

        } else {
          $.dis.parents('.block-header').siblings('.block-content-wrapper').find('.block-loader').show();
          $.ajax({
              url : vmagazine_ajax_script.ajaxurl,
              
              data:{
                      action : 'vmagazine_block_post_slider_action',
                      category_id:  currentAttrValue,
                      category_slug: currentAttrSlug,
                      postper_page: PostPerPage,
                      post_meta: PostMeta
                  },
              type:'post',
               success: function(res){                                        
                      $.dis.parents('.block-header').siblings('.block-content-wrapper').append(res);
                      vmagazine_block_post_slider('.'+currentAttrSlug);
                      $.dis.parents('.block-header').siblings('.block-content-wrapper').find('.block-cat-content').hide();
                      $.dis.parents('.block-header').siblings('.block-content-wrapper').find('.'+currentAttrSlug).show();
                      $('.block-loader').hide();
                  }
          });
      }
    });

/*===========================================================================================================*/

       /* load-more ajax for block post lists */

       $('body').on('click','.load-posts',function(){
          var $this= $(this); 
           var ban_off = $this.attr('data-banner-offset');
           var pagEd = $this.attr('data-paged');
           var cat_ID = $this.attr('id');
           var Type = $this.attr('data-offset');
           
           
           pagEd = parseInt(pagEd)+1;
           $.ajax({
               url: vmagazine_ajax_script.ajaxurl,
               
               type: 'post',
               dataType: 'json',
               data: {
                   action: 'ajax_load_more',
                   paged: pagEd,
                   banner_offset: ban_off,
                   cat_id: cat_ID,
                   type: Type

                   
               },
               beforeSend: function() {
                   $this.siblings('#loading').show('slow');
               },
               complete: function() {
                   $this.siblings('#loading').hide('slow');
               },
               success: function( resp ) {  
                
                   if(resp){
                       
                       $this.attr( 'data-paged', resp.message2);
                       
                       var off = (parseInt(ban_off)+5);
                       $this.attr( 'data-banner-offset', off);
                       
                       var $elems = $( resp.message1 );
                       
                       var masCon = $this.siblings('.posts-wrap');
                       masCon.append( $elems);
                  
                       if( resp.message2 < 1 ){
                           $this.remove();
                       }
                   }
                   else{
                       $this.siblings('#loading').hide('slow');
                       $this.remove();
                   }   
               }
           });
       });    


/*
*
* load-more ajax for grid/list posts 
*
* 
*/
   $('body').on('click','.gl-posts',function(){
      var $this= $(this); 
       var ban_off = $this.attr('data-banner-offset');
       var pagEd = $this.attr('data-paged');
       var cat_ID = $this.attr('data-cat');
       var PostType = $this.attr('data-offset');
       var Layout = $this.attr('data-type');
       var PostPerPage = $this.attr('data-id');
       var postLength = $this.attr('data-length');
       var postMeta = $this.attr('data-meta');

       pagEd = parseInt(pagEd)+1;
       $.ajax({
           url: vmagazine_ajax_script.ajaxurl,
           
           type: 'post',
           dataType: 'json',
           data: {
               action: 'grid_list_ajax_load',
               paged: pagEd,
               banner_offset: ban_off,
               cat_id: cat_ID,
               post_type: PostType,
               layout: Layout,
               postper_page: PostPerPage,
               pLength: postLength,
               data_meta: postMeta               
           },
           beforeSend: function() {
               
               $('.vm-ajax-load-more').addClass('posts-loading');
           },
           complete: function() {
               $('.vm-ajax-load-more').removeClass('posts-loading');
           },
            success: function( resp ) {  
              if(resp){
                $this.attr( 'data-paged', resp.message2);
                var off = (parseInt(ban_off) + parseInt(PostPerPage));
                $this.attr( 'data-banner-offset', off);
                var $elems = $( resp.message1 );
                var masCon = $this.siblings('.posts-wrap');
                masCon.append( $elems);                  
                if( resp.message2 < 1 ){
                  $this.siblings('#loading-grid').removeClass('posts-loading');
                  
                  $this.remove();
                }
              }
              else{
                
               $('.vm-ajax-load-more').removeClass('posts-loading');
                $this.remove();
              }   
            }
       });
   }); 

  // Widget tabbed
  $('.vmagazine-cat-tabs').each(function(){
        $(this).find('.cat-tab:first').addClass('active');
    });

    $('.vmagazine-tabbed-wrapper').each(function(){
        $(this).find('.vmagazine-tabbed-section:first').show();
    });

    $('body').on('click', '#vmagazine-widget-tabbed li a', function (event) { 
    var tabId = $(this).attr('id');
    $('.vmagazine-tabbed-section').hide();
    $('#section-'+tabId).show();
    $('.cat-tab').removeClass('active');
    $(this).parent('li').addClass('active');
  }); 

/**
 * Block posts carousel
 */
$('.widget .vmagazine-post-carousel.block_layout_1 .block-carousel').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  rtl: rtl_str,
  arrows: true,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.widget .vmagazine-post-carousel.block_layout_2 .block-carousel').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  dots: false,
  rtl: rtl_str,
  centerMode: true,
  centerPadding: '60px',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerPadding: '30px'
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '30px'
      }
    }
  ]
});
    $('body').on('click', '.vmagazine-lSPrev', function () { 
        NewId.goToPrevSlide(); 
    });

    $('body').on('click', '.vmagazine-lSNext', function () { 
        NewId.goToNextSlide(); 
    }); 



  /**
  * Category slider
  */
  $('.widget .widget-cat-slider').lightSlider({
    item:1,
    slideMargin:0,
    rtl: rtl_str,
    loop:false,
    controls:true,
    enableDrag:true,
    speed: 700,
    onSliderLoad: function() {
           $('.widget-cat-slider').removeClass( 'cS-hidden' );
       }
  });
 

  /*
   * Post format gallery
   */
  $('.meta-gallery').lightSlider({
    adaptiveHeight:true,
    item:1,
    slideMargin:0,
    rtl: rtl_str,
    enableDrag:true,
    loop:true,
    pager:false,
    controls:true,
    prevHtml:'<span class="prev">Prev</span>',
    nextHtml: '<span class="next">Next</span>',
    auto:true,
    speed: 700,
    pause: 4200,
    onSliderLoad: function() {
           $('.meta-gallery').removeClass( 'cS-hidden' );

       }
  });

/** 
* Adds class on search focus 
* 
**/
$('body').on('focus', '.site-header.header-layout1 input[type="search"]', function () { 
  $('.search-form').addClass('focus');
});

$('body').on('focusout', '.site-header.header-layout1 input[type="search"]', function () { 
  $('.search-form').removeClass('focus');
});




  /**
   * Mega menu sub tabs hide
   */
    $('.ap-mega-menu-con-wrap  .cat-con-section:not(:first-child)').hide();
    $('.ap-mega-menu-cat-wrap  div:first-child a').addClass('mega-active-cat');

    /**
     * Toggle On Hover of cat menu
     */
    $('body').on('hover','.ap-mega-menu-cat-wrap a.mega-cat-menu', function(){
        $(this).parents('.menu-item-inner-mega').find('a').removeClass('mega-active-cat');
        $(this).addClass('mega-active-cat');
        var cat_id = $(this).attr('data-cat-id');
        $(this).parents('.menu-item-inner-mega').find('.cat-con-section').hide();
        $(this).parents('.menu-item-inner-mega').find('.cat-con-id-'+cat_id).show();
        $(this).parents('.menu-item-inner-mega').find('.cat-con-id-'+cat_id).addClass('animated vmagFadeInDown');
    });



/**
* Search focus on mobile 
* 
*/
$('body').on('focus','.vmagazine-mobile-search-wrapper input[type="search"]', function(){
  $('.vmagazine-mobile-search-wrapper .mob-search-form').addClass('focus');
});
$('body').on('focusout','.vmagazine-mobile-search-wrapper input[type="search"]', function(){
  $('.vmagazine-mobile-search-wrapper .mob-search-form').removeClass('focus');
});

  /**
  * Mobile navigation toggles
  * 
  */
  //Mobile Navigation toggle
  $('body').on('click touchstart', '.nav-toggle', function () { 
      $('.mobile-navigation').addClass("on");
      $('body').addClass('mob-menu-enabled');
  });
  
  $('body').on('click touchstart', '.nav-close', function () {
      $('.mobile-navigation,.mob-search-form').removeClass("on");
      $('body').removeClass('mob-menu-enabled');
      $('body').removeClass('mob-search-enabled');
  });
  /* Mobile Search toggle **/
  $('body').on('click touchstart', '.mob-search-icon', function () {
      $('.mob-search-form').addClass("on");
      $('body').addClass('mob-search-enabled');
  });

/**
* Vmagazine Mobile sub-menu
*
*/
$('.vmagazine-mobile-navigation-wrapper .menu-mmnu-container ul li ul').hide();

$('<div class="sub-toggle"></div>').insertBefore('.vmagazine-mobile-navigation-wrapper .menu-item-has-children ul');
$('<div class="sub-toggle-children"></div>').insertBefore('.vmagazine-mobile-navigation-wrapper .page_item_has_children ul');



$('body').on('vclick touchstart','.vmagazine-mobile-navigation-wrapper .sub-toggle', function()  {
  $(this).next('ul.sub-menu').slideToggle();
  $(this).parent('li').toggleClass('mob-menu-toggle');
});

$('body').on('vclick touchstart','.vmagazine-mobile-navigation-wrapper .sub-toggle-children',function() {
    $(this).next('ul').slideToggle();
});


/** wow animations **/
var enableAnim = vmagazine_ajax_script.mode;
if( enableAnim == 'enable' ){
  var wow = new WOW();
  wow.init();
}



  /**
  * News ticker 
  */
   
  $('#vmagazine-news-ticker').lightSlider({
    loop:true,
    vertical: true,
    pager:false,
    auto:true,
    controls: vmagazine_ajax_script.controls,
    speed: 600,
    pause: 3000,
    enableDrag:false,
    verticalHeight:80,
    onSliderLoad: function() {
           $('.vmagazine-ticker-wrapper').removeClass( 'cS-hidden' );
       }
  });

  /**
   * vmagazine-block-post-carousel(small)
   */
  $('.widget .vmagazine-block-post-car-small .carousel-wrap').lightSlider({
    item:3,
    loop:true,
    auto:true,
    controls: true,
    slideMargin: 0,
    rtl: rtl_str,
    pager:false,
    speed:600,
    enableDrag:true,
    responsive : [
            {
                breakpoint:800,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:500,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ],
    onSliderLoad: function() {
           $('.vmagazine-block-post-car-small .carousel-wrap').removeClass( 'cS-hidden' );
       }
  });

/*
* Sidebar Menu
*
*/
//enabling sidebar
$('body').on('click', '.site-main-nav-wrapper .sidebar-icon', function () {
  $('.sidebar-wrapper').toggleClass('sidebar-active');
});
//for closing sidebar
$('body').on('click', '.sidebar-wrapper .sidebar-close', function () {
  $('.sidebar-wrapper').removeClass('sidebar-active');
});


/**
* Header three search toggle
*
*/
$('body').on('click', '.header-layout3 .search-toggle', function () {
  $(this).toggleClass('active');
  $('.header-layout3 .vmagazine-search-form-primary').toggleClass('search-active');
});
$('body').on('focusout', '.header-layout3 .vmagazine-search-form-primary input[type="search"]', function () {
  $('.header-layout3 .search-toggle').toggleClass('active');
  $('.header-layout3 .vmagazine-search-form-primary').removeClass('search-active');
  $('.search-content').hide();
});

/**
* Header Four 
*
*/
$('body').on('click', '.header-layout4 .social-icon-togggle', function () {
  $('.header-layout4 .social-icons').addClass('icons-active');
});

$('body').on('click', '.header-layout4 .social-icons-close', function () {
  $('.header-layout4 .social-icons').removeClass('icons-active');
})

$('body').on('click', '.header-layout4 .search-toggle', function () {
  $('.header-layout4 .header-search-wrapper').addClass('search-active');
});

$('body').on('click', '.header-layout4 .search-close', function () {
  $('.header-layout4 .header-search-wrapper').removeClass('search-active');
});

$('body').on('click', '.header-layout4 .vmagazine-search-form-primary input[type="search"]', function () {
  $('.search-content').hide();
});
    
});    