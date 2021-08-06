function checkIfAdKitReady(event) {
    adkit.onReady(startAd);
}

function startAd() {

    carruselVideo();

    function registerInteractions() {
        EB.clickthrough("clickthrough");
        EB.clickthrough("click_slide_1");
        EB.clickthrough("click_slide_2");
        EB.clickthrough("click_slide_3");
        EB.clickthrough("click_slide_4");
        EB.clickthrough("click_slide_5");
        EB.clickthrough("click_icons_reactions");
        EB.clickthrough("click_caption");
        EB.clickthrough("click_cta");
        EB.clickthrough("click_icons_reactions");
    }
}

window.addEventListener("load", checkIfAdKitReady);

function carruselVideo() {
    /* Vars Definitions */
    const ad = document.querySelector('.hotspot');
    const header = document.querySelector('.head');
    // const caption = document.querySelector('.hotspot__caption');
    const actions = document.querySelector('.hotspot__actions');
    
    var slide_1 = document.querySelector('.slide_1');
    var slide_2 = document.querySelector('.slide_2');
    var slide_3 = document.querySelector('.slide_3');
    var slide_4 = document.querySelector('.slide_4');
    var slide_5 = document.querySelector('.slide_5');
    var icons_reactions = document.querySelector('.reactions');
    var caption = document.querySelector('.caption');
    var slider_dots;
    var cta = document.querySelector('.cta');
    var iterations = 1;
    
    var arrow_left;
    var arrow_right;
    /* /Vars Definitions */
    
    /* Events Handlers */
    header.addEventListener("click", function(){
        console.log('ct_clickthrough');
        EB.clickthrough("clickthrough");
    });
    
    slide_1.addEventListener("click", function(){
        console.log('ct_click_slide_1');
        EB.clickthrough("click_slide_1");
    });
    
    slide_2.addEventListener("click", function(){
        console.log('ct_click_slide_2');
        EB.clickthrough("click_slide_2");
    });
    
    slide_3.addEventListener("click", function(){
        console.log('ct_click_slide_3');
        EB.clickthrough("click_slide_3");
    });
    
    slide_4.addEventListener("click", function(){
        console.log('ct_click_slide_4');
        EB.clickthrough("click_slide_4");
    });
    slide_5.addEventListener("click", function(){
        console.log('ct_click_slide_5');
        EB.clickthrough("click_slide_5");
    });
    
    icons_reactions.addEventListener("click", function(){
        console.log('ct_click_icons_reactions');
        EB.clickthrough("click_icons_reactions");
    });
    
    caption.addEventListener("click", function(){
        console.log('ct_click_caption');
        EB.clickthrough("click_caption");
    });
    
    cta.addEventListener("click", function(){
        console.log('ct_click_cta');
        EB.clickthrough("click_cta");
    });
    /* /Events Handlers */
    
    /* check for slider init */
    $('.center').on('init', function(event, slick){
        /* Define Sizmek Events */
        slider_dots = document.querySelector('.slick-dots');
    
        slider_dots.addEventListener("click", function(){
            console.log('ct_click_icons_reactions');
            EB.clickthrough("click_icons_reactions");
        });
    });
    /* /check for slider init */
    
    $('.center').slick({
        dots: true,
        arrows: false,
        infinite: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
    
    });
    
    /* stop slick slider */
    $('.center').on('afterChange', function(event, slick, currentSlide, nextSlide) {
        var actual = currentSlide + 1;
        if (actual == 1) {
            if (iterations == 3) { 
    			$('.center').slick('slickPause');
    		}
            iterations++;
        }
    });
    
    /*function addConversionPixel(type, url) {
        if(type == 'image') {
            var pixel = document.createElement('img');
            pixel.src = url;
            pixel.width  = 1;
            pixel.height  = 1;
            pixel.style.display = 'none';
        }
        if(type == 'script') {
            var pixel = document.createElement('script');
            pixel.src = url;
        }
    
        document.body.appendChild(pixel);
    }*/
}
