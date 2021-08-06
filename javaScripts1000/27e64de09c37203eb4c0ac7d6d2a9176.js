var	use_ISOCurrencySymbol=1,
    ISOCurrencySymbol='MXN',
    currency_symbol='$',
    decimal='.',
    separator=',';

//number of decimals, decimal, separator
Number.prototype.formatMoney = function(c, d, t){
var n = this,
    c = isNaN(c = Math.abs(c)) ? 2 : c,
    d = d == undefined ? "." : d,
    t = t == undefined ? "," : t,
    s = n < 0 ? "-" : "",
    i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
    j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

$(function(){
    update_minicart();
    set_max_height();
    if(typeof showCustomTooltip !== 'undefined')
    showCustomTooltip('#minicart-container', '#minicart-wrapper', 'is-empty')
    //Remove from cart
    $('body').on('click', '#items-wrapper .remove ', function(e){
        e.preventDefault();
        var index=$(this).attr('data-index');
        vtexjs.checkout.getOrderForm().then(function(orderForm){
            var item = orderForm.items[index];
            item.index = index;
            return vtexjs.checkout.removeItems([item]);
        }).done(function(orderForm){
            update_minicart();
        });
    });

    //show minicart
    // $('#minicart-container a').on('click',function(e){
    // 	e.preventDefault();
    // 	show_minicart();
    // });
    // //hide minicart
    // $('.overlay, .close-minicart').on('click',function(e){
    // 	e.preventDefault();
    // 	hide_minicart();
    // });

    // Plus QTY
    $('body').on('click', '.qty-plus', function(e){
        e.preventDefault();
        var that=$(this);
        var skuId=that.attr('data-sku');
        var qty=parseInt(that.parent().find('.qty').html());
        qty++;
        update_cart__qty(qty,skuId);
    });

    // Less QTY
    $('body').on('click', '.qty-less', function(e){
        e.preventDefault();
        var that=$(this);
        var skuId=that.attr('data-sku');
        var qty=parseInt(that.parent().find('.qty').html());
        qty--;
        if(qty>=1)
        update_cart__qty(qty,skuId);
    });

    //on resize
    $(window).on('resize', function(){
        set_max_height();
    });
});

function update_cart__qty(qty, skuId){
    // console.log(qty);
    // console.log(skuId);
    var current_qty=0;
    vtexjs.checkout.getOrderForm().then(function(orderForm) {
        var index = -1;
        $.each(orderForm.items, function(i,sku){
            if(sku.id==skuId){
                index=i;
                current_qty=sku.quantity;
                return false;
            }
        });
        if(index!=-1){
            var item={};
                item.index = index;
                item.quantity = qty;
                item.seller = 1;
            // console.log(item);
            return vtexjs.checkout.updateItems([item], null, false);
        }else{
            return false;
        }
    }).done(function(orderForm) {
        // console.log('Done');
        // console.log(orderForm);
        var total_items=0;
        $.each(orderForm.items, function(i,item){
            total_items+=item.quantity;
            if(item.id==skuId){
                if(item.quantity==qty){
                    $('#item-added__quantity'+skuId).html(qty);
                    var subtotal	= 0;
                        subtotal 	= ((item.sellingPrice/100)*item.quantity).toFixed(2).toString();
                    $('#item-added__subtotal'+skuId).html(subtotal);
                    $.each(orderForm.totalizers,function(i,t){
                        if(t.value!=0){
                            subtotal=currency_symbol+(t.value/100).formatMoney(2, decimal, separator);
                            if(use_ISOCurrencySymbol)
                            // subtotal+=' '+ISOCurrencySymbol;
                            if(t.id=='Items'){
                                $('#minicartSubtotal').html(subtotal);
                                $('.minicart__subtotals').show();
                            }else if(t.id=='Shipping'){
                                $('#minicartShipping').html(subtotal);
                                // $('.minicart__shipping').show();
                            }else if(t.id=='Discounts'){
                                $('#minicartDiscount').html(subtotal);
                                // $('.minicart__discount').show();
                            }
                        }
                    });
                }else{
                    $('#item-added__qty'+skuId).append('<div class="item-added__qty-no-stock">Stock no disponible</div>');
                    $('.item-added__qty-no-stock').fadeIn(500);
                    setTimeout(function(){
                        $('.item-added__qty-no-stock').fadeOut(500,function(){
                            $(this).remove();
                        });
                    },2000)
                    // console.log('Stock no disponible');
                }
            }
        });
        update_total_cart_items(total_items)
        // console.log(orderForm);
    });
}

function update_total_cart_items(total_items){
    let triggerWrapper = $('#minicart-container')
    if(total_items>0){
        triggerWrapper.removeClass('is-empty')
        $('#total-cart-items').html(total_items);
        $('#minicart-wrapper').removeClass('is-empty');
    }else{
        triggerWrapper.addClass('is-empty')
        $('#total-cart-items').html(total_items);
        $('#minicart-wrapper').addClass('is-empty');
        $('#items-wrapper').html('<div class="minicart__empty-message">No tienes productos en tu bolsa</div>');
    }
}
function show_minicart(){
    $('body').addClass('overflow');
    $('.overlay--minicart, #minicart-wrapper').addClass('is-active');
    setTimeout(function(){
        set_max_height();
    },400)
}

function hide_minicart(){
    $('.overlay--minicart, #minicart-wrapper').removeClass('is-active');
    $('body').removeClass('overflow');
}

function set_max_height(){
    $('#items-wrapper').css('max-height','auto');
    var items_wrapper_height=$('#items-wrapper').height();
    var window_height=$(window).height()-200;
    var styles='';
    if(items_wrapper_height>=window_height){
        $('#items-wrapper').addClass('overflow');
        styles='#items-wrapper{max-height:'+window_height+'px;padding-right:10px;margin-right:-10px;}';
    }else{
        $('#items-wrapper').removeClass('overflow');
    }
    if($('#styles-max-height-minicart').length){
        $('#styles-max-height-minicart').html(styles);
    }else{
        $('body').append('<style id="styles-max-height-minicart">'+styles+'</style>');
    }
}

function load_size(productId, skuId){
    vtexjs.catalog.getProductWithVariations(productId).done(function(product){
        $.each(product.skus,function(index,sku){
            if(sku.sku==skuId && sku.dimensions!=null && typeof sku.dimensions.Talla !== 'undefined'){
                $('#item-added__size'+skuId).html(sku.dimensions.Talla);
            }
        });
    });
}
function load_color(productId, skuId){
    var sl='1d1fa996-3792-4385-b356-c1b0d6435b90';
    $.ajax({
        url: '/buscapagina?fq=productId:'+productId+'&sl='+sl+'&cc=1&sm=0',
        success: function(product,s,x){
            if(product.length){
                color=$(product).find('>ul:first-child>li:not(".helperComplement") .product_field_20 ul li').html();
                $('#item-added__color'+skuId).html(color);
            }
        }
    });
}

function update_minicart(show=false){
    vtexjs.checkout.getOrderForm().done(function(orderForm){
        // console.log(orderForm);
        //if(orderForm.items.length){
            $('.minicart__subtotals,.minicart__shipping,.minicart__discount').hide();
            $('#items-wrapper').empty().show();
            var subtotal	= 0,
                total		= (orderForm.value/100).formatMoney(2, decimal, separator);

            $('#total-cart').html('$'+total+' MXN');
            $.each(orderForm.totalizers,function(i,t){
                if(t.value!=0){
                    subtotal=currency_symbol+(t.value/100).formatMoney(2, decimal, separator);
                    if(use_ISOCurrencySymbol)
                    // subtotal+=' '+ISOCurrencySymbol;
                    if(t.id=='Items'){
                        $('#minicartSubtotal').html(subtotal);
                        $('.minicart__subtotals').show();
                    }else if(t.id=='Shipping'){
                        $('#minicartShipping').html(subtotal);
                        // $('.minicart__shipping').show();
                    }else if(t.id=='Discounts'){
                        $('#minicartDiscount').html(subtotal);
                        // $('.minicart__discount').show();
                    }
                }
            });

            var total_items=0;
            $.each(orderForm.items, function(i,sku){
                console.log(sku)
                total_items+=sku.quantity;
                var price			= (sku.price/100).toFixed(2).toString(),
                    sellingPrice	= (sku.sellingPrice/100).toFixed(2).toString(),
                    listPrice		= (sku.listPrice/100).toFixed(2).toString(),
                    hasBenefit		= price != sellingPrice ? 'has-benefit' : '',
                    hasDiscount		= sku.price != sku.listPrice ? true : false,
                    subtotal 		= ((sku.sellingPrice/100)*sku.quantity).toFixed(2).toString(),
                    discount 		= parseInt(100-((sku.sellingPrice*100)/sku.listPrice)),
                    color 			= '',
                    size 			= '';

                if(price.length>6){
                    var pos=price.length-6;
                    price=[price.slice(0, pos), ',', price.slice(pos)].join('');
                }
                var img=sku.imageUrl.replace('-55-55','-60-80');
                var new_item=''+
                '<div id="item'+i+'" class="item-added '+hasBenefit+'">'+
                    '<div class="item-added__img"><a href="'+sku.detailUrl+'"><img src="'+img+'" class="img-responsive"></a></div>'+
                    '<div class="item-added__summary">'+
                        '<div class="item-added__name"><a href="'+sku.detailUrl+'">'+sku.name+'</a></div>';
                        // '<div class="item-added__color">Color: <span id="item-added__color'+sku.id+'">'+color+'</span></div>'+
                        // '<div class="item-added__size">Talla: <span id="item-added__size'+sku.id+'">'+size+'</span></div>';
                        if(hasDiscount){
                            new_item+='<div class="item-added__price-wrapper">'+
                                '<div class="item-added__price">$'+listPrice+'</div>'+
                                '<div class="item-added__price--selling">$'+sellingPrice+'</div>'+
                            '</div>';
                        }
                        new_item+=`<div id="item-added__qty${sku.id}" class="item-added__qty">
                                <a href="#" class="qty-less" data-sku="${sku.id}">-</a>
                                <span id="item-added__quantity${sku.id}" class="qty">Cantidad: ${sku.quantity}</span>
                                <a href="#" class="qty-plus" data-sku="${sku.id}">+</a>
                            </div>`+
                        `<div class="item-added__del">
                            <button class="close-minicart remove" data-index="${i}">
                                <svg class="svg-icon"><use href="#svg-icon-close" /></svg>
                            </button>
                        </div>`+
                        '<div class="item-added__additional-info">';
                            if(hasDiscount){
                                new_item+='<div class="item-added__discount">Ahorro de '+discount+'%</div>';
                            }
                        new_item+='</div>'+
                        '<div id="item-added__subtotal'+sku.id+'" class="item-added__subtotal">'+subtotal+'</div>'+
                    '</div>'+
                '</div>';
                $('#items-wrapper').append(new_item);
                // load_size(sku.productId, sku.id);
                // load_color(sku.productId, sku.id);
            });
            update_total_cart_items(total_items)
            $('.minicart__subtotals .minicart__value span').html('Subtotal <span class="minicart__total-products">'+orderForm.items.length+' Productos</span>');
            if(show){
                show_minicart();
                setTimeout(function(){
                    hide_minicart();
                },5000)
            }
        //}
    });
}