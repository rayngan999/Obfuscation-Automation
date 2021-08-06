$(document).ready(function(e) {
    $(".priceFormat").each(function(index, element) {
        {
			var price= $(this).attr("price");
			$(this).html(addCommas(price) + " VND");
		}
    });
});

/*
$("img").click(function(){
	$(this).attr("src",$(this).attr("full-src"));	
}); */