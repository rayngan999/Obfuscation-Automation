ï»¿/// <reference path="jquery-1.4.1-vsdoc.js" />
/// <reference path="vtex.common.js" />
/// <reference path="vtex.jsevents.js" />
/// <reference path="vtex.skuEvents.js" />

var selectedToBuy = new Array(0);
var totalPriceBatchBuy = 0;
var mainProductHasAggregateServices = 0;
var seller;
var actualPrice = 0;


$(document).ready(function () {
    var batchBuyListener = new Vtex.JSEvents.Listener('batchBuyListener', BatchBuy_OnSkuDataReceived);
    skuEventDispatcher.addListener(skuDataReceivedEventName, batchBuyListener);
});

function BatchBuy_OnSkuDataReceived(e) {
    var id = e.skuData.id;
    selectedToBuy = [];
    if (id > 0) {
        console.log(e.skuData);
        if(e.skuData.availability) {
            $('.prateleiracompre.vitrinecompre').show();
            selectedToBuy.add(id.toString());
            totalPriceBatchBuy -= actualPrice;
            totalPriceBatchBuy += e.skuData.price*100;
            actualPrice = e.skuData.price*100;
        }
        else {
            $('.prateleiracompre.vitrinecompre').hide();
        }
        CheckBatchProductsSelectedForBuying();
    }
}

$(document).ready(function () {
    if (!(typeof skuJson === 'undefined' || skuJson === null)) {
        CheckIfProdcutIsAvailable();
    }
    bindProductBatchBuyCheckboxes();
    bindBatchBuyButtons();
    if ($('.buy-product-checkbox-checked').length > 0) {
        var pId = $('.buy-product-checkbox-checked').attr('pId');
        var price = parseInt($('.buy-product-checkbox-checked').attr('price'));
        actualPrice = price;
        totalPriceBatchBuy += price;
        selectedToBuy.add(pId);
    }
    if ($('#main-product-has-aggregate-services').length > 0) {
        mainProductHasAggregateServices = $('#main-product-has-aggregate-services').val();
    }
});

$(document).ajaxStop(function () {
    bindProductBatchBuyCheckboxes();
    bindBatchBuyButtons();
});

function bindProductBatchBuyCheckboxes() {
    $('.buy-product-checkbox').each(function (index) {
        if ($(this).attr('addedClick') != 'yes') {
            $(this).click(function () {
                onBatchBuyCheckboxClick(this);
            });
            $(this).attr('addedClick', 'yes');
        }
    });
    preCheckProductsSelectedForBuying();
}

function bindBatchBuyButtons() {
    $('.btn-batch-buy').unbind('click');

    $('.btn-batch-buy').click(function () {

        onBatchBuyButtonClick(this);
    });
}

function onBatchBuyCheckboxClick(sender) {
    var pid = $(sender).attr('rel');
    var price = parseInt($(sender).attr('price'));
    if (sender.checked) {
        if (!selectedToBuy.contains(pid)) {
            selectedToBuy.add(pid);
            totalPriceBatchBuy += price;
        }
    }
    else {
        if (selectedToBuy.contains(pid)) {
            selectedToBuy.remove(pid);
            totalPriceBatchBuy -= price;
        }
    }
    preCheckProductsSelectedForBuying();
}

function preCheckProductsSelectedForBuying() {
    var pid;
    $('.buy-product-checkbox').each(function (i, chk) {
        pid = $(chk).attr('rel');
        chk.checked = selectedToBuy.contains(pid);
    });
    updateBatchBuySelectionLabels();
}

function onBatchBuyButtonClick(sender) {
    //requires: vtex.common.js
    var cartUrl = jscheckoutAddUrl;
    var seller =  "1";

    if (skuJson_0.skus[0] != null) {
        seller = skuJson_0.skus[0].sellerId;
    }

    if (selectedToBuy.length > 0) {
         jQuery.map(selectedToBuy, function (sku, index) {
            var skuAdd = "";
            if (index == 0) {
                return cartUrl += "?sku=" + sku + "&qty=1&seller=" + seller;
            } else {
                return cartUrl += "&sku=" + sku + "&qty=1&seller=" + seller;
            }

        });

        document.location.href = cartUrl+"&redirect=true&sc="+jssalesChannel;


    } else {
        alert("NÃ£o hÃ¡ produtos selecionados para compra.");
    }
}

function updateBatchBuySelectionLabels() {
    $('.selected-count').text(selectedToBuy.length);
    var price = totalPriceBatchBuy / 100;
    $('.selected-value').text(price.toBrazilianCurrency());
}

function CheckBatchProductsSelectedForBuying() {
    $('.buy-product-checkbox').each(function (index) {
        if ($(this).is(':checked') && !$(this)[0].hasAttribute("pid")) {
            selectedToBuy.add($(this).attr('rel'));
        }
    });
}

function CheckIfProdcutIsAvailable() {
    if(skuJson.skus.length == 1 && !skuJson.skus[0].available) {
        $('.prateleiracompre.vitrinecompre').hide();
    }
}