(function ($) {
    $(document).ready(function() {
        $(document).foundation();

        $('.title-bar button').on("click", null, function () {
            if( $(this).hasClass('menuopen')){
              $('.top-bar').removeClass('menuopen');
              $(this).removeClass('menuopen');
            }else{
              $('.top-bar').addClass('menuopen');
              $(this).addClass('menuopen');
            }
        });
      $('.mobsearch').on("click", null, function () {
        event.preventDefault();
        $("#mobilsearch").toggle();

      });

    });

    function SetMapa() {


        $("#block-custom-ep-custom-ep-mapa .dropdown dd ul li a").click(function (event) {
            event.preventDefault();
            $("#block-custom-ep-custom-ep-mapa .dropdown dd ul li a").removeClass('selected');
            $(this).addClass('selected');
            $('#block-custom-ep-custom-ep-mapa a.goto').attr('href', "/" + $(this).attr('target'));
            /*$.ajax({
             url: "stojednicka-get-current-country/"+$(this).attr('nid'),
             }).done(function(data) {
             //console.log(data);
             $('#block-views-zeme-sveta-block-1 .content').html(data);
             });*/
        });


    }

    function HideFlag() {
        if (jQuery.trim(jQuery('.field-name-vlajka-s-odkazem-na-zemi .views-row').html()) == '') {
            jQuery('.field-name-vlajka-s-odkazem-na-zemi').remove();
        }
    }

    function HideEmptyCaption() {
        $('.image_field_caption').each(function () {
            if ($(this).html() == '<p>-</p>' || $(this).html() == '<p>.</p>') {
                $(this).remove();
            }
        });
    }

    jQuery(document).ready(function () {
        $("#map-continents").CSSMap({
            "size": 750,
            "cities": true,
            "tooltips": "sticky",
            "responsive": "auto",
            "tapOnce": true,
            "onClick": function(e){
                var getRegions = e.attr('alt');

                $('#block-custom-ep-custom-ep-mapa dd ul li a').hide();
                $("#block-custom-ep-custom-ep-mapa a[svetadil='"+getRegions+"']").show();
                // $('#block-custom-ep-custom-ep-mapa a').show();


            } // END onLoad;
        });

        HideFlag();
        SetMapa();
        HideEmptyCaption();
    });


}(jQuery));