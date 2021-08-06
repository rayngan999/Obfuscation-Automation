ï»¿/// <reference path="jquery-1.4.1-vsdoc.js" />
/// <reference path="vtex.common.js" />
/// <reference path="vtex.jsevents.js" />
/// <reference path="vtex.skuEvents.js" />

var skuDataFetcherListener = new Vtex.JSEvents.Listener('skuDataFetcher', SkuDataFetcher_OnSkuSelectionChanged);
skuEventDispatcher.addListener(skuSelectionChangedEventName, skuDataFetcherListener);

function SkuDataFetcher_OnSkuSelectionChanged(e) {
    var skuId = e.newSkuId;
    var skuData = getSkuData(skuId);
    showSkuName(skuData);
    FireSkuDataReceived(skuData, e.productIndex);
}


function getSkuData(skuId) {
    var skuData = new Vtex.Commerce.JSEvents.SkuData();
    // chamadaAjax para pegar os dados do Sku;
    // popula skuData
    if (skuId > 0) {
        if (ListSkuData["sku" + skuId] === undefined) {
            $.ajax({
                type: "GET",
                url: '/produto/sku/' + skuId,
                dataType: 'json',
                async: false,
                success: function (dataValue) {
                    var temp = "";
                    for (var i in dataValue) {
                        if (!isNaN(i)) {
                            skuData.id = dataValue[i].Id;
                            skuData.idProduct = dataValue[i].IdProduct;
                            skuData.name = dataValue[i].Name;
                            skuData.listPrice = dataValue[i].ListPrice;
                            skuData.price = dataValue[i].Price;
                            skuData.availability = dataValue[i].Availability;
                            skuData.availabilitymessage = dataValue[i].AvailabilityMessage;
                            skuData.bestInstallmentValue = dataValue[i].BestInstallmentValue;
                            skuData.bestInstallmentNumber = dataValue[i].BestInstallmentNumber;
                            skuData.images = dataValue[i].Images;
                            skuData.reference = dataValue[i].Reference;
                            skuData.hasExtendedWarranty = dataValue[i].HasExtendedWarranty;
                            skuData.hasExtendedWarrantyPage = dataValue[i].HasExtendedWarrantyPage;
                            skuData.notifyMe = dataValue[i].NotifyMe;
                            skuData.HasServiceAtServicePage = dataValue[i].HasServiceAtServicePage;
                            skuData.HasServiceAtCartPage = dataValue[i].HasServiceAtCartPage;
                            skuData.HasServiceAtProductPage = dataValue[i].HasServiceAtProductPage;
                            skuData.RealHeight = dataValue[i].RealHeight;
                            skuData.RealWidth = dataValue[i].RealWidth;
                            skuData.RealLength = dataValue[i].RealLength;
                            skuData.RealWeightKg = dataValue[i].RealWeightKg;
                            skuData.RewardValue = dataValue[i].RewardValue;
                            skuData.Ean = dataValue[i].Ean;
                            skuData.DefaultSellerId = dataValue[i].DefaultSellerId;
                            skuData.SkuSellersInformation = dataValue[i].SkuSellersInformation;
                            ListSkuData["sku" + dataValue[i].Id] = skuData;
                        }
                        //alert(dataValue[i].Id + "-" + dataValue[i].DefaultSellerId);
                    }
                    //alert(ListSkuData["sku" + skuId]);
                },
                error: function () {
                    alert("erro ao buscar objeto SKU");
                }
            });
        }
        skuData = ListSkuData["sku" + skuId];
        /*alert(skuData);
        alert(skuData.images.length);
        alert(skuData.images);
        alert(skuData.images[0][0].IdArchive);*/
    }
    else {
        alert("SKU nao encontrado");
    }
    return skuData;
}

function showSkuName(skuData) {
    if (skuData.id > 0 && skuData.name !== "") {
        $('.productName:not(.kit)').text(skuData.name);
    }
}
