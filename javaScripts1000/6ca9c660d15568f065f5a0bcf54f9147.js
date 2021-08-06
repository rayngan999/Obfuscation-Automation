/*!
----------------------------------------------------------------------------------------------------
* Important! - To edit this JS, you must use the JS source file.
----------------------------------------------------------------------------------------------------
*/
"use strict";function load_angle_disable_modal(){if($(".product-modal-size .size-wrapper .size.disabled").length&&$(".product-modal-size .size-wrapper .size.disabled").is(":visible")){var e=Math.atan($(".product-modal-size .size.disabled").height()/$(".product-modal-size .size.disabled").width()),t=Math.PI,i=Math.round(e*(180/t));load_fixed_info("resize");var a=".product-modal-info .product-modal-size .size-wrapper .size.disabled:after{transform:rotate(-"+i+"deg)}";0==$("#style-angle-modal").length?$("body").append('<style id="style-angle-modal">'+a+"</style>"):$("#style-angle-modal").html(a)}}function show_quick_view(e){var t=$("#product-item-color-"+e+" .color.active").attr("data-sku"),i=$('.product-item__main-image[data-id="'+e+'"]').attr("href");"undefined"==typeof t&&(t=$('.product-item__quick-view__trigger[data-id="'+e+'"]').attr("data-sku")),load_sku(t),vtexjs.catalog.getProductWithVariations(e).done(function(a){if($("#productSingleModal .qv-name").html(a.name),$("#productSingleModal .qv-name").attr("data-sku",a.skus[0].sku),$("#productSingleModal .product-modal-summary").html('<a href="'+i+'" class="qv-link">Ver mÃ¡s detalles del producto</a>'),$("#productSingleModal").append('<div class="hide hidden product-info-hide">'+$("#product-info-"+e).parent().html()+"</div>"),a.dimensions.length){a.dimensions[0];$.each(a.skus,function(i,a){if("undefined"!=typeof a.dimensions.Color){var s=a.sku,o=a.dimensions.Talla,n=a.bestPriceFormated,r=a.listPriceFormated,l=a.availablequantity,c=a.dimensions.Color,d=a.dimensions.Color.replace(/\s/g,"-").toLowerCase(),u=l>0&&5>=l?"low-stock":"",h=a.sku==parseInt(t)?"active":"",p=0==a.available?"disabled":"availabletrue";0==$(".product-modal-color .color."+d).length&&$(".product-modal-color").append('<div class="color '+d+'" data-sku="'+s+'" data-id="'+e+'" data-color="'+d+'" data-img="'+a.image+'">'+c+"</div>"),0==$(".product-modal-size #size-"+d).length&&$(".product-modal-size").append('<div class="size-wrapper" id="size-'+d+'"></div>'),""!=h&&($(".product-modal-size #size-"+d).addClass(h),$(".product-modal-color .color."+d).addClass(h)),$(".product-modal-size #size-"+d).append('<div class="size '+p+" "+u+'" data-price="'+n+'" data-stock="'+l+'" data-sku="'+s+'">'+o+"</div>"),$(".product-modal-color-wrapper,.product-modal-size-wrapper").fadeIn()}else if("undefined"!=typeof a.dimensions.Talla){$(".product-modal-size-wrapper").fadeIn();var s=a.sku,o=a.dimensions.Talla,n=a.bestPriceFormated,r=a.listPriceFormated,l=a.availablequantity,d="no-color",u=l>0&&5>=l?"low-stock":"",h=a.sku==parseInt(t)?"active":"",p=0==a.available?"disabled":"availabletrue";0==$("#size-"+d).length&&$(".product-modal-size").append('<div class="size-wrapper active" id="size-'+d+'"></div>'),$(".product-modal-size #size-"+d).append('<div class="size '+p+'" data-sku="'+s+'" data-stock="'+l+'" data-price="'+n+'" data-listprice="'+r+'">'+o+"</div>")}}),$(".product-modal-color, .product-modal-size").fadeIn(500),setTimeout(function(){load_angle_disable_modal()},500)}else $("#productSingleModal .product-modal-size").append('<span class="product-size hide hidden no-variations available'+a.skus[0].available+'" data-id="'+a.skus[0].sku+'"></span>');$("#productSingleModal .add-to-list").attr("data-id",e);var s=$('.product-wishlist .add-to-wishlist.active[data-id="'+e+'"]').length;s&&$("#productSingleModal .add-to-list").html("Â¡En tu lista de deseos!").addClass("active");var o=999987600,n="",r=0,l="";$.each(a.skus,function(e,t){t.bestPrice<o&&(o=t.bestPrice,n=t.bestPriceFormated,r=t.listPrice,l=t.listPriceFormated)}),999987600!=o&&(0!=r&&($("#productSingleModal .product-modal-price .price-new").addClass("price-promo"),$("#productSingleModal .product-modal-price .price-old").html(l)),$("#productSingleModal .product-modal-price .price-new").html(n)),setTimeout(function(){$(".size.low-stock").is(":visible")&&$(".product-detail__last-pieces").addClass("is-visible")},500)})}function load_sku(e){$.ajax({type:"GET",url:"/produto/sku/"+e,dataType:"json",success:function(e){$("#productSingleModal .qv-ref").html(e[0].Reference),$("#productSingleModal .product-modal-thumbnails").empty();var t=2700,i=2943,a=t/i,s=$(".product-modal-image").width(),o=Math.round(s/a),n=s+"-"+o;$.each(e[0].Images,function(t,i){i[0].IsMain&&$("#productSingleModal #productSingleModalImage").attr("src",i[0].Path.replace("292-292",n)),e[0].Images.length>1&&$("#productSingleModal .product-modal-thumbnails").append('<img src="'+i[0].Path.replace("292-292",n)+'">')})}})}function remove_quick_view(){$("#productSingleModal .qv-name").empty(),$("#productSingleModal #productSingleModalImage").attr("src",""),$("#productSingleModal .product-modal-price .price-old").empty(),$("#productSingleModal .product-modal-price .price-new").empty(),$("#productSingleModal .product-modal-summary").empty(),$("#productSingleModal .product-modal-thumbnails").empty(),$("#productSingleModal .product-size").remove(),$("#productSingleModal .button-wrapper .error").remove(),$(".product-modal-color,.product-modal-size").empty(),$(".product-modal-size-wrapper, .product-modal-color-wrapper").fadeOut(10),$(".product-info-hide").remove(),$(".product-detail__last-pieces").removeClass("is-visible"),$(".product-modal-price .price-new").removeClass("price-promo")}$(function(){$("body").on("click",".product-item__quick-view .product-item__quick-view__trigger",function(e){e.preventDefault();var t=$(this).attr("data-id");show_quick_view(t)}),jq2("#productSingleModal").on("hidden.bs.modal",function(){remove_quick_view()}),$("body").on("click",".product-modal-thumbnails img",function(){var e=$(this).attr("src");$("#productSingleModal #productSingleModalImage").attr("src",e)}),$("body").on("click",".product-modal-size .size",function(){var e=$(this);if($(".product-modal-size .size").removeClass("selected"),e.addClass("selected"),$("#productSingleModal .button-wrapper .error").remove(),e.hasClass("disabled"))return $(".msj-low-stock").remove(),!1;var t=e.attr("data-price");$(".product-modal-price .price-new").html(t);var i=e.attr("data-listprice");"$0.00"!=i?($(".product-modal-price .price-old").html(i),$(".product-modal-price .price-new").addClass("price-promo")):($(".product-modal-price .price-old").empty(),$(".product-modal-price .price-new").removeClass("price-promo")),e.hasClass("low-stock")?$(".product-modal-summary").prepend('<div class="msj-low-stock">Ãlimas piezas</div>'):$(".msj-low-stock").remove()}),$("body").on("click",".product-modal-color .color",function(){var e=$(this),t=e.attr("data-sku"),i=e.attr("data-color");$(".product-modal-size .size-wrapper, .product-modal-color .color").removeClass("active"),$(".product-modal-size #size-"+i).addClass("active"),e.addClass("active"),$(".msj-low-stock").remove(),load_sku(t)}),$(".product-modal-sizes").on("click",".product-size",function(){}),$("body").on("click",".collapse-trigger",function(){var e=$(this).attr("data-target");$("#collapse-"+e).slideToggle(500),$(this).toggleClass("active")}),$(".product-modal__quantity-current").on("click",function(){$(".product-modal__quantity-dropdown").toggleClass("active")}),$(".product-modal__quantity-option").on("click",function(){var e=$(this).html();$(".product-modal__quantity-dropdown").removeClass("active"),$(".product-modal__quantity-current").html(e),$(".product-modal__quantity-input").val(e)}),window.addEventListener("resize",load_angle_disable_modal)});
//# sourceMappingURL=css-js_quick-view.min.js.map