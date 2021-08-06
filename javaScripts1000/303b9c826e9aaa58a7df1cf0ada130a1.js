$(document).ready(function (){
    //add tracker event to CompanyName field only
    $('#olal-container').delegate( ".asset_title_link", "click", function(e) {
        e.preventDefault();
        if (typeof Tracker != 'undefined')
            Tracker.log(Tracker.link_click, 'asset_title_link','article_middle');

        var url = $(this).attr('href');
        window.open(url, '_blank');
    });

    $('#olal-container').delegate( ".asset_button","click", function(e) {
        e.preventDefault();
        if (typeof Tracker != 'undefined')
            Tracker.log(Tracker.button_click, 'asset_button','article_middle');

        var url = $(this).attr('href');
        window.open(url, '_blank');
    });

    $('#olal-container').delegate( ".asset_image","click", function(e) {
        e.preventDefault();
        if (typeof Tracker != 'undefined')
            Tracker.log(Tracker.image_click, 'asset_image','article_middle');

        var url = $(this).attr('href');
        window.open(url, '_blank');
    });

    $('#whitepaper-listing').delegate( ".asset_title_link","click", function(e) {
        e.preventDefault();
        if (typeof Tracker != 'undefined')
            Tracker.log(Tracker.link_click, 'asset_title_link','article_right');

        var url = $(this).attr('href');
        window.open(url, '_blank');
    });

    $('#whitepaper-listing').delegate( ".asset_button","click", function(e) {
        e.preventDefault();
        if (typeof Tracker != 'undefined')
            Tracker.log(Tracker.button_click, 'asset_button','article_right');

        var url = $(this).attr('href');
        window.open(url, '_blank');
    });

    $('#whitepaper-listing').delegate( ".asset_image","click", function(e) {
        e.preventDefault();
        if (typeof Tracker != 'undefined')
            Tracker.log(Tracker.image_click, 'asset_image','article_right');

        var url = $(this).attr('href');
        window.open(url, '_blank');
    });
$('#bottom-container').delegate( ".asset_title_link", "click",function(e) {
        e.preventDefault();
        if (typeof Tracker != 'undefined')
            Tracker.log(Tracker.link_click, 'asset_title_link','article_bottom');

        var url = $(this).attr('href');
        window.open(url, '_blank');
    });
   
    $('#bottom-container').delegate( ".asset_image","click", function(e) {
        e.preventDefault();
        if (typeof Tracker != 'undefined')
            Tracker.log(Tracker.image_click, 'asset_image','article_bottom');

        var url = $(this).attr('href');
        window.open(url, '_blank');
    });
    
    $('#bottom-container').delegate( ".asset_button","click", function(e) {
        e.preventDefault();
        if (typeof Tracker != 'undefined')
            Tracker.log(Tracker.button_click, 'asset_button','article_bottom');

        var url = $(this).attr('href');
        window.open(url, '_blank');
    });


});

