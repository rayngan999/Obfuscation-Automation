$(document).ready(function () {
    var menu = $('.black_menu');
    var origOffsetY = menu.offset().top;
    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('.black_menu').addClass('sticky');
            $('.content').addClass('content-padding');
        } else {
            $('.black_menu').removeClass('sticky');
            $('.content').removeClass('content-padding');
        }
    }
    document.onscroll = scroll;

    $("body").click(function(e){
        if ($(e.target).closest(".search_1").length === 0 && $(e.target).closest(".site_search").length === 0) {
            $(".site_search").removeClass("search-bg-blue");
            $(".site_search .search_icon").attr("data-prop","search");
            $(".site_search .search_icon").html("&#xe804;");
            $(".search_1").hide();
        }
    });

    $(".site_search").click(function(e){
        if($(".site_search .search_icon").attr("data-prop") == "search"){
            $(this).addClass("search-bg-blue");
            $(".site_search .search_icon").attr("data-prop" , "close");
            $(".site_search .search_icon").html("&#xe80b;");
            $(".search_1").show();
        }else{
            $(this).removeClass("search-bg-blue");
            $(".site_search .search_icon").attr("data-prop","search");
            $(".site_search .search_icon").html("&#xe804;");
            $(".search_1").hide();
        }
    });

    $(".cancel_append").click(function(){
        $(this).prev().val("");
    });
    $(".clear_all").click(function(){
        $(".search_filter")[0].reset();
    });

    // $(".firstWord").html(function(){
    //     var text= $(this).text().trim().split(" ");
    //     var first = text.shift();
    //     return (text.length > 0 ? "<span class='red'>"+ first + "</span> " : first) + text.join(" ");
    // });
    
    $(".dropdown-menu").hover(function(){
        // alert(1);
        $(this).prev().toggleClass("uk-text-yellow");
    })
    $('.black_menu .dropdown-toggle').click(function () {
        window.location = $(this).attr('href');
    });
});
