jQuery(function($) {
    (function showMenuFooter(){
        $('.footer-open-dropdown').click(function() {
            var className = $(this).parent().prop('className');
            if (className == 'footer-menu-container-category' || className == 'footer-menu-container-category menu-dropdown-active'){
                $('.footer-menu-container-category').toggleClass('menu-dropdown-active');
            }
            else $('.footer-menu-container-services').toggleClass('menu-dropdown-active');
        });
    })();
});