ï»¿/// <reference path="jquery-1.4.1-vsdoc.js" />
/// <reference path="vtex.common.js" />
/// <reference path="vtex.jsevents.js" />
Namespace.create('Vtex.Commerce.JSEvents');

var skuSelectionChangedEventName = 'skuSelectionChanged';
var skuDataReceivedEventName = 'skuDataReceived';
var skuImageRelatedSpecSelectedEventName = 'skuImageRelatedSpecSelected';

Vtex.Commerce.JSEvents.SkuData = Class.create();
Vtex.Commerce.JSEvents.SkuData.prototype = {
    initialize: function () {
        this.id = 0;
        this.idProduct = 0;
        this.name = '';
        this.listPrice = 0.00;
        this.price = 0.00;
        this.availability = false;
        this.availabilitymessage = '';
        this.bestInstallmentValue = 0.00;
        this.bestInstallmentNumer = 0;
        this.images = new Array();
        this.reference = '';
        this.hasExtendedWarranty = false;
        this.hasExtendedWarrantyPage = false;
        this.notifyMe = false;
        this.HasServiceAtProductPage = false;
        this.HasServiceAtCartPage = false;
        this.HasServiceAtServicePage = false;
        this.RealHeight = 0.00;
        this.RealWidth = 0.00;
        this.RealLength = 0.00;
        this.RealWeightKg = 0.00;
        this.RewardValue = 0.00;
        this.Ean = '';
        this.DefaultSellerId = 0;
        this.SalesChannel = 1;
    }
}

var ListSkuData = new Array();

Vtex.Commerce.JSEvents.SkuSelectionChangedEventArgs = Class.create();
Vtex.Commerce.JSEvents.SkuSelectionChangedEventArgs.prototype = new Vtex.JSEvents.EventArgs();
Vtex.Commerce.JSEvents.SkuSelectionChangedEventArgs.prototype.newSkuId = 0;
Vtex.Commerce.JSEvents.SkuSelectionChangedEventArgs.prototype.productIndex = 0;

Vtex.Commerce.JSEvents.SkuDataReceivedEventArgs = Class.create();
Vtex.Commerce.JSEvents.SkuDataReceivedEventArgs.prototype = new Vtex.JSEvents.EventArgs();
Vtex.Commerce.JSEvents.SkuDataReceivedEventArgs.prototype.skuData = null;
Vtex.Commerce.JSEvents.SkuDataReceivedEventArgs.prototype.productIndex = 0;

var skuSelectionChanged = new Vtex.JSEvents.Event(skuSelectionChangedEventName);
var skuDataReceived = new Vtex.JSEvents.Event(skuDataReceivedEventName);
var skuImageRelatedSpecSelected = new Vtex.JSEvents.Event(skuImageRelatedSpecSelectedEventName);

var skuEventDispatcher = new Vtex.JSEvents.EventDispatcher();
skuEventDispatcher.registerEvent(skuSelectionChanged);
skuEventDispatcher.registerEvent(skuDataReceived);
skuEventDispatcher.registerEvent(skuImageRelatedSpecSelected);


function FireSkuSelectionChanged(skuId, pi) {
    var args = new Vtex.Commerce.JSEvents.SkuSelectionChangedEventArgs();
    args.newSkuId = skuId;
    args.productIndex = pi;
    skuEventDispatcher.fireEvent(skuSelectionChangedEventName, args);
    
}

function FireSkuDataReceived(sku, pi) {
    var args = new Vtex.Commerce.JSEvents.SkuDataReceivedEventArgs();
    args.skuData = sku;
    args.productIndex = pi;
    skuEventDispatcher.fireEvent(skuDataReceivedEventName, args);
   
}

function FireSkuChangeImage(sku) {
    var args = new Vtex.Commerce.JSEvents.SkuSelectionChangedEventArgs();
    args.newSkuId = sku;
    skuEventDispatcher.fireEvent(skuImageRelatedSpecSelectedEventName, args);
}

function force() { 

}

//force
