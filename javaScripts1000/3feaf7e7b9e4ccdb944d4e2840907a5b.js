//function from https://halgatewood.com/how-to-customize-the-pin-it-button-for-pinterest
function pinIt() {
     var e = document.createElement('script');
     e.setAttribute('type', 'text/javascript');
     e.setAttribute('charset', 'UTF-8');
     e.setAttribute('src', 'https://assets.pinterest.com/js/pinmarklet.js?r=' + Math.random() * 99999999);
     document.body.appendChild(e);
}
//validate email function
function validateEmail($email) {
     var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
     if (!emailReg.test($email)) {
          return 0;
     } else {
          return 1;
     }
}
function validateEmails(emails) {
     var res = emails.split(",");
     for (i = 0; i < res.length; i++)
          if (!validateEmail(res[i]))
               return false;
     return true;
}
//clear the error
function removeMe(arg) {
     jQuery('.' + arg).html('');
}

//function to display the popup window
function apss_open_in_popup_window(event, url) {
     event.preventDefault(event);

     window.open(url, 'fdadas', 'toolbars=0,width=640,height=320,left=200,top=200,scrollbars=1,resizable=1');
}

jQuery(document).ready(function($) {

     $('.apss-social-share-sidebar.apss-theme-1 .apss-single-icon').hover(function() {
          var html = $(this).find('.apss-share').html();
          $('.apss-temp').html(html);
          var width = $('.apss-temp').width();
          $('.apss-temp').html('');
          $(this).find('.apss-icon-block').outerWidth(width + 80);

     }, function() {
          $(this).find('.apss-icon-block').outerWidth(40);
     });

     $('.apss-social-share-sidebar.apss-theme-2 .apss-single-icon').hover(function() {
          var html = $(this).find('.apss-social-text').html();
          $('.apss-temp').html(html);
          var width = $('.apss-temp').width();
          $('.apss-temp').html('');
          $(this).find('.apss-icon-block').outerWidth(width + 60);
          var margin = width / 1.9;
          if ($(this).closest('.apss-social-share-sidebar').hasClass('apss-sidebar-bottom_right') || $(this).closest('.apss-social-share-sidebar').hasClass('apss-sidebar-bottom_left')) {
               $(this).find('.apss-icon-block').css({
                    'margin-left': '-' + margin + 'px',
                    'margin-right': '-' + margin + 'px'
               });
          }
     }, function() {
          $(this).find('.apss-icon-block').outerWidth(40);
          if ($(this).closest('.apss-social-share-sidebar').hasClass('apss-sidebar-bottom_right') || $(this).closest('.apss-social-share-sidebar').hasClass('apss-sidebar-bottom_left')) {

               $(this).find('.apss-icon-block').css({
                    'margin-left': '',
                    'margin-right': ''
               });
          }
     });

     $('.apss-social-share-sidebar.apss-theme-4 .apss-single-icon').hover(function() {
          var html = $(this).find('.apss-share').html();
          $('.apss-temp').html(html);
          var width = $('.apss-temp').width();
          $('.apss-temp').html('');
          $(this).find('.apss-share').outerWidth(width + 60);
     }, function() {
          $(this).find('.apss-share').outerWidth(width);
     });

     $('.apss_close_popup').click(function() {
          $('.apss-popup-overlay').hide();
          $('.apss_email_share_popup').hide();
          $('.apss-social-share-popup').hide();
          $('.apss-social-share-popup-all-shares').hide();
          $('#apss-popup-overlay-start').hide();
          var current_page_url = $('#apss-current-url').val();
          $.ajax({
               type: 'post',
               url: frontend_ajax_object.ajax_url,
               data: 'action=frontend_session&_wpnonce=' + frontend_ajax_object.ajax_nonce + '&current_page_url=' + current_page_url,
               success: function(res) {
                    if (res == 'success') {
                         $('.apss-social-share-popup').hide();
                    }
               }
          });
     });

     $('.share-email-popup').click(function() {
          $('.apss-popup-overlay').show();
          $('.apss_email_share_popup').show();
          $('.apss-social-share-popup').hide();
          $('.apss-social-share-popup-all-shares').hide();
          $('#apss-popup-overlay-start').hide();
          return false;
     });

     $('#apss_email_popup_send_email').click(function() {
          var name = $('#apss_email_popup_name').val();
          var from_email = $('#apss_email_popup_from').val();
          var receiver_email = $('#apss_email_popup_receiver').val();
          var email_subject = $('#apss_email_popup_subject').val();
          var email_message = $('#apss_email_popup_message').val();
          var from_email_validate = validateEmail(from_email);
          var receiver_email_validate = validateEmails(receiver_email);

          if (name == ' ') {
               $('.apss_email_popup_name_error').html('This field is required');
               $('#apss_email_popup_name').focus();
               return false;
          }

          if (from_email === ' ') {
               $('.apss_email_popup_from_error').html('Please enter your email address.');
               $('#apss_email_popup_from').focus();
               return false;
          }

          if (from_email_validate === 0) {
               $('.apss_email_popup_from_error').html('Please enter your valid email address.');
               $('#apss_email_popup_from').focus();
               return false;
          }

          if (receiver_email === ' ') {
               $('.apss_email_popup_sendto_error').html('Please enter receivers email address.');
               $('#apss_email_popup_receiver').focus();
               return false;
          }

          if (receiver_email_validate === false) {
               $('.apss_email_popup_sendto_error').html('Please enter receivers valid email address.');
               $('#apss_email_popup_receiver').focus();
               return false;
          }

          $('#apss_email_popup_send_email').prop('disabled', true);
          $('.apss_email_popup_loading').show();
          $.ajax({
               type: 'post',
               url: frontend_ajax_object.ajax_url,
               data: 'action=frontend_popup_email_send&_wpnonce=' + frontend_ajax_object.ajax_nonce + '&name=' + name + '&from_email=' + from_email + '&receiver_email=' + receiver_email + '&email_subject=' + email_subject + '&email_message=' + email_message,
               success: function(res) {
                    if (res == 'success') {
                         $('.apss_email_popup_loading').hide();
                         $('.apss_email_popup_result').html('Email has been send successfully. Thankyou.');
                    } else {
                         $('.apss_email_popup_loading').hide();
                         $('.apss_email_popup_result').html('Some error has occured.Please try again later. Thankyou.');
                    }
               }
          });
     });

     $('body').on('click', '.apss_email_share_popup_close', function() {
          $('.apss_email_share_popup').hide();
          $('.apss-popup-overlay').hide();
          $('.apss-social-share-popup').hide();
          $('.apss-social-share-popup-all-shares').hide();
          return false;
     });

     $('body').on('click', '.apss-popup-overlay', function() {
          $('.apss-popup-overlay').hide();
          $('.apss_email_share_popup').hide();
          $('.apss-social-share-popup').hide();
          $('.apss-social-share-popup-all-shares').hide();
     });

     $('body').on('click', '.apss-display-all-shares', function() {
          $('.apss-popup-overlay').hide();
          $('.apss_email_share_popup').hide();
          $('#apss-popup-overlay-email').hide();
          $('.apss-social-share-popup').hide();
          $('.apss-social-share-popup-all-shares').show();
          $('#apss-popup-overlay-all-shares-start').show();
     });

     $('body').on('click', '.apss-bp-social-button', function() {
          $(this).closest('.activity-meta').find('.apss-social-share-buddypress').slideToggle('fast');
          ;
     });

     var shortcode_profile_array = [];
     $('.apss-count').each(function() {
          var social_detail = $(this).attr('data-social-detail');
          if ($.inArray(social_detail, shortcode_profile_array) == -1) {
               shortcode_profile_array.push(social_detail);
          }
     });
     if (shortcode_profile_array.length > 0) {
     }
     $(document).keydown(function(e) {
          if (e.keyCode === 27) {
               $('.apss_email_share_popup').hide();
               $('.apss-popup-overlay').hide();
               $('.apss_email_share_popup').hide();
               $('.apss-social-share-popup').hide();
               $('.apss-social-share-popup-all-shares').hide();
          }

     });

//     $('.apss-floating-bar-show-hide').toggle(function() {
//          $('.apss-floating-social-networks').addClass('floatingbar-hidden');
//          $('.apss-floating-bar-show-hide').addClass('apss-hidden');
//     }, function() {
//          $('.apss-floating-social-networks').removeClass('floatingbar-hidden');
//          $('.apss-floating-bar-show-hide').removeClass('apss-hidden');
//     });


     $('.apss-floating-bar-show-hide').data('status', 'not_clicked');

     $('body').on('click', '.apss-floating-bar-show-hide', function() {
          if ($(this).data('status') == 'clicked') {
               $(this).data('status', 'not_clicked');

               //your code in case of second click
               $('.apss-floating-social-networks').removeClass('floatingbar-hidden');
               $('.apss-floating-bar-show-hide').removeClass('apss-hidden');
          } else {
               $(this).data('status', 'clicked');

               //your code in case of first click
               $('.apss-floating-social-networks').addClass('floatingbar-hidden');
               $('.apss-floating-bar-show-hide').addClass('apss-hidden');
          }

     });





     $('.apss-sidebar-mobile-close').toggle(function() {
          $('.apss-social-share-sidebar-mobile-medias').fadeOut();
          $(this).addClass('open');
     }, function() {
          $('.apss-social-share-sidebar-mobile-medias').fadeIn();
          $(this).removeClass('open');
     });

     $('.apss-sticky-header-close').click(function() {
          $('.apss-sticky-header-wrapper').css({
               transition: 'all 0.6 ease-in-out',
               top: '-100%'
          });
     });

     /**
      * Mobile devices detection
      **/
     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          // tasks to do if it is a Mobile Device
     } else {
          // tasks to do if it is not a mobile device
          var whatsapp_hide = frontend_js_object.whatsapp_hide;
          var viber_hide = frontend_js_object.viber_hide;
          var sms_hide = frontend_js_object.sms_hide;
          var messenger_hide = frontend_js_object.messenger_hide;
          if (whatsapp_hide == '1') {
               $('.apss-whatsapp').hide();
          }

          if (viber_hide === '1') {
               $('.apss-viber').hide();
          }

          if (sms_hide === '1') {
               $('.apss-sms').hide();
          }

          if (messenger_hide === '1') {
               $('.apss-fb-messenger').hide();
          }
     }

     var width = $(window).width(), height = $(window).height();
     if (width <= 768) {
          $('.apss-floating-bar-show-hide').hide();
     }

     $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          if (scroll > 150) {
               $(".apss-sticky-header-wrapper").addClass("apss-fixed-header");
          } else {
               $(".apss-sticky-header-wrapper").removeClass("apss-fixed-header");
          }
     });












     //  MAJOR UPATE CODE START


     // FOR POPUP OPTION
     var popup_type = $('.apss-social-share-popup').data("popup-type");
     //alert(popup_type);

     if (popup_type === 'delayed_time') {
          var delay_time = $('.apss-social-share-popup').data("delay-time");

          //var hide_popup_overlay = $('.apss-social-share-popup').data("hide-popup-overlay");
          //alert(hide_popup_overlay);
          //if (hide_popup_overlay != 1) { // DO NOT REMOVE THIS COMMENTED CODE
          setTimeout(function() {
               $('#apss-popup-overlay-start').fadeIn();
          }, delay_time);
          setTimeout(function() {
               $('.apss-social-share-popup').fadeIn();
          }, delay_time);
          // for delay of popup ends
          // } DONOT REMOVE THIS COMMENTED CODE
     } else if (popup_type === 'content_viewed') {
          var percent_viewed = $('.apss-social-share-popup').data("percent-viewed");
          var $output = $('#output');

          $(window).on("scroll", function() {
               var winheight = $(window).height()
               var docheight = $(document).height()
               var scrollTop = $(window).scrollTop()
               var trackLength = docheight - winheight
               var pctScrolled = Math.floor(scrollTop / trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)

               if (pctScrolled === percent_viewed) {
                    $('#apss-popup-overlay-start').show();
                    $('.apss-social-share-popup').show();
               }
               $output.html('You have scrolled the page by: ' + pctScrolled + '%')
          });

     } else if (popup_type === "end_of_content") {
          var $output = $('#output');

          $(window).on("scroll", function() {
               var winheight = $(window).height()
               var docheight = $(document).height()
               var scrollTop = $(window).scrollTop()
               var trackLength = docheight - winheight
               var pctScrolled = Math.floor(scrollTop / trackLength * 100)
               if (pctScrolled === 100) {
                    $('#apss-popup-overlay-start').show();// or fade, css display however you'd like.
                    $('.apss-social-share-popup').show();
               }
               $output.html('You have scrolled the page by: ' + pctScrolled + '%')
          });
     } else {
          $('#apss-popup-overlay-start').hide();// or fade, css display however you'd like.
          $('.apss-social-share-popup').hide();
     }



     $('.apss_close_flyin').click(function() {
          $('.apss-social-share-flyin').hide();
          var current_page_url = $('#apss-current-url').val();
          $.ajax({
               type: 'post',
               url: frontend_ajax_object.ajax_url,
               data: 'action=frontend_session&_wpnonce=' + frontend_ajax_object.ajax_nonce + '&current_page_url=' + current_page_url,
               success: function(res) {
                    if (res == 'success') {
                         $('.apss-social-share-popup').hide();
                    }
               }
          });
     });




});
