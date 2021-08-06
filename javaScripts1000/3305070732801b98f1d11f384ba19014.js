jQuery(document).ready(function($) {

//     $('.apsc-floating-bar-show-hide').toggle(function() {
//          $('.apsc-floating-sidebar').addClass('floatingbar-hidden');
//          $('.apsc-floating-bar-show-hide').addClass('apsc-hidden');
//     }, function() {
//          $('.apsc-floating-sidebar').removeClass('floatingbar-hidden');
//          $('.apsc-floating-bar-show-hide').removeClass('apsc-hidden');
//     });


     $('.apsc-floating-bar-show-hide').data('status', 'not_clicked');

     $('body').on('click', '.apsc-floating-bar-show-hide', function() {
          if ($(this).data('status') == 'clicked') {
               $(this).data('status', 'not_clicked');

               //your code in case of second click
               $('.apsc-floating-sidebar').removeClass('floatingbar-hidden');
               $('.apsc-floating-bar-show-hide').removeClass('apsc-hidden');
          } else {
               $(this).data('status', 'clicked');

               //your code in case of first click
               $('.apsc-floating-sidebar').addClass('floatingbar-hidden');
               $('.apsc-floating-bar-show-hide').addClass('apsc-hidden');
          }

     });

});