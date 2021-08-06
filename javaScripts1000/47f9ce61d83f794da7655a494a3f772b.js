function CotyShopifyPromos(promos) {
    
    this.BOGO = [
        {
            promoId: 'us-july21-lip-promo',
            buyVariantIds: ['Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDkzNzI0NzY3MDQ3Ng==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDkzNzI0NzcwMzI0NA==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDkzNzI0NDU5MDI4NA==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDkzNzI0ODM1ODYwNA==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDkzNzI0MzczODMxNg==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDkzNzI0NTE0NzM0MA==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDkzNzI0Nzg5OTg1Mg==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDkzNzI0NjA2NDg0NA==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDkzNzI0NTA0OTAzNg==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDkzNzI0NTI0NTY0NA==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDkzNzI0NDk1MDczMg==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDkzNzI0NTIxMjg3Ng==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDkzNzI0NDYyMzA1Mg==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDkzNzI0Njc4NTc0MA==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDkzNzI0NzgwMTU0OA==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDkzNzI0MzYwNzI0NA==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDkzNzI0NDg4NTE5Ng==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDkzNzI0NTAxNjI2OA==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDkzNzI0NDcyMTM1Ng==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDkzNzI0MzY0MDAxMg==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDkzNzI0NTExNDU3Mg==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDkzNzI0MzY3Mjc4MA==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDkzNzI0NDkxNzk2NA==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDkzNzI0Mzc3MTA4NA==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDkzNzI0NDY4ODU4OA==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDkzNzI0NTA4MTgwNA==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDkzNzI0NTE4MDEwOA==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDkzNzI0NDU1NzUxNg==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDkzNzI0NDQ5MTk4MA==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDkzNzI0ODA5NjQ2MA==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDkzNzI0NDk4MzUwMA==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDkzNzI0NzYzNzcwOA==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDkzNzI0NDgxOTY2MA==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDkzNzI0NjIyODY4NA==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDkzNzI0NDQ1OTIxMg==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDkzNzI0NDUyNDc0OA==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDkzNzI0NDY1NTgyMA=='],
            quantityToBuy: 1,
            getProductHandles: ['sugar-lip-scrub', 'hydrating-lip-mask', 'makeup-removing-wipes'],
            getVariantIds: ['Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMTkyNzAxODkxMzgzOQ==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMDk5NDYyMTI2ODAxNQ==', 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xMTYzMDEyNzU3OTE4Mw=='],
            quantityToDiscount: 1,
            startTime: new Date('2021-07-29T08:45:00-07:00'),   // 9am PDT
            endTime: new Date('2021-07-31T09:00:00-04:00')      // 9am EDT
        }
    ];
    
    this.GWT = [
    /*
        {
            promoId: 'gwt-test',
            threshold: 100,
            productHandles: ['coconut-body-lotion', 'face-moisturizer', 'face-mask-brush'],
            quantityToDiscount: 1
        }
    */
    ];
    
    
    
    
    
    // must be called BEFORE a cart operation is sent through the API
    this.before = function(op, item, cart) {
        var campaign,
            results = [],   // one record per campaign
            result,
            numNoPromo,
            numInPromo,
            numQualifyingSets,
            numShouldGet,
            matches,
            i, j;
        
        // KDHTODO !!! We have to assume that the line item being operated on is not the free gift item, otherwise this will never work
        // imagine if you had buy 2 get 1 free, and had 2+1 in your cart.  If you removed the +1 (the gift), the script would see that you
        // now have 2 in your cart and are therefore qualified for a free gift and add it back in.  In fact, it doesn't work by removing
        // the reqular one either.  Basically we can only consider those items that are NOT part of the promotion already, because in the
        // same scenario, if you removed one of the qualifying items (changing qty from 2 to 1), you would then have 1+1 in your cart,
        // though the +1 wouldn't be a gift anymore, so it would convert to a regular item, which would then make it a qualifying item
        // again, which would then add a new free gift to your cart.  So we have to ignore all gifts unless we are dictacting what needs
        // to get removed.
        
        for (i=0; i<this.BOGO.length; i++) {
            campaign = this.BOGO[i];
            
            // make sure the campaign is active
            if (!checkTimegate(campaign)) continue;
            
            // we only care about processing this BOGO campaign if the item being operated on is part of it
            matches = false;
            for (j=0; j<campaign.buyVariantIds.length; j++) {
                if (item.variantId == campaign.buyVariantIds[j]) {
                    matches = true;
                    break;
                }
            }
            if (!matches) continue;
            
            result = {
                add: null,
                remove: null
            };
            
            numNoPromo = numItemsInCart(cart, campaign.buyVariantIds, campaign.promoId, true);
            numInPromo = numItemsInCart(cart, campaign.getVariantIds, campaign.promoId);
            
            // pretend the add/remove operation has already happened and see what that leaves us for sets in this campaign
            numNoPromo += (item.quantity * (op == 'add' ? 1 : -1));
            numQualifyingSets = Math.floor(numNoPromo / campaign.quantityToBuy);
            numShouldGet = Math.max(0, campaign.quantityToDiscount * numQualifyingSets);
            
            if (op == 'add') {
                // adding
                if (numShouldGet > numInPromo) {
                    result.add = {
                        productHandles: campaign.getProductHandles,
                        quantity: numShouldGet - numInPromo,
                        promoId: campaign.promoId,
                        removable: (campaign.getProductHandles.length > 1 ? true : false)
                    };
                }
            } else {
                // removing
                if (numShouldGet < numInPromo) {
                    result.remove = {
                        productHandles: campaign.getProductHandles,
                        quantity: numInPromo - numShouldGet,
                        promoId: campaign.promoId
                    };
                }
            }
            
            results.push(result);
        }
        
        return results;
    };
    
    
    
    
    // must be called AFTER a cart operation is sent through the API
    this.after = function(cart) {
        var campaign,
            results = [],   // one record per campaign
            result,
            difference,
            i;
        
        
        for (i=0; i<this.GWT.length; i++) {
            campaign = this.GWT[i];
            
            // make sure the campaign is active
            if (!checkTimegate(campaign)) continue;
            
            result = {
                add: null,
                remove: null
            };
            difference = campaign.quantityToDiscount - numItemsInCart(cart, campaign.productHandles, campaign.promoId);
            if (getCartTotal(cart) >= campaign.threshold) {
                // the cart meets the campaign threshold
                if (difference > 0) {
                    // they don't have enough gifts yet for this campaign
                    result.add = {
                        productHandles: campaign.productHandles,
                        quantity: difference,
                        promoId: campaign.promoId,
                        removable: (campaign.productHandles.length > 1 ? true : false)
                    };
                }
            } else {
                // the cart does not meet the campaign threshold, make sure they don't still have the free gift(s)
                if (difference < 0) {
                    // they have gifts from this promo in their cart, but they don't qualify
                    result.remove = {
                        productHandles: campaign.productHandles,
                        quantity: difference,
                        promoId: campaign.promoId
                        
                    };
                }
            }
            results.push(result);
        }
        
        return results;
    };
    
    
    
    
    function checkTimegate(campaign) {
        var active = true,
            now = new Date().getTime();
        if (campaign.hasOwnProperty('startTime') && campaign.startTime instanceof Date) {
            active = active && campaign.startTime.getTime() <= now;
        }
        if (campaign.hasOwnProperty('endTime') && campaign.endTime instanceof Date) {
            active = active && campaign.endTime.getTime() > now;
        }
        return active;
    }
    
    
    function isKnownCartFormat(cart) {
        return (typeof cart == 'object'
            && cart !== null
            && cart.hasOwnProperty('lineItems')
            && cart.lineItems.hasOwnProperty('edges')
        );
    };
    
    
    function isKnownLineItemFormat(li) {
        return (typeof li == 'object'
            && li !== null
            && li.hasOwnProperty('node')
            && li.node.hasOwnProperty('variant')
        );
    };
    
    
    function getCartTotal(cart) {
        var total = 0,
            li, price,
            i;
        
        if (!isKnownCartFormat(cart)) return total;
        
        for (i=0; i<cart.lineItems.edges.length; i++) {
            li = cart.lineItems.edges[i];
            if (isKnownLineItemFormat(li)) {
                price = parseFloat(li.node.variant.price);
                if (!isNaN(price)) {
                    total += (price * li.node.quantity);
                }
            }
        }
        
        return total;
    };
    
    
    function numItemsInCart(cart, variantId, promoId, excludePromo) {
        var total = 0,
            matches,
            thisItem,
            itemVariantId,
            i, j;
        
        if (!isKnownCartFormat(cart)) return total;
        
        for (i=0; i<cart.lineItems.edges.length; i++) {
            thisItem = cart.lineItems.edges[i];
            
            if (!isKnownLineItemFormat(thisItem)) continue;
            
            matches = true;
            if (variantId !== null) {
                itemVariantId = thisItem.node.variant.id;
                if (Array.isArray(variantId)) {
                    matches = false;
                    for (j=0; j<variantId.length; j++) {
                        if (itemVariantId == variantId[j]) {
                            matches = true;
                            break;
                        }
                    }
                } else {
                    matches = (itemVariantId == variantId);
                }
            }
            
            if (!matches) continue;
            
            matches = true;
            if (promoId !== null) {
                matches = thisItem.node.hasOwnProperty('customAttributes') &&
                          thisItem.node.customAttributes.hasOwnProperty('promoId') &&
                          thisItem.node.customAttributes.promoId == promoId;
                if (excludePromo) {
                    matches = !matches;
                }
            }
            
            if (matches) {
                total += thisItem.node.quantity;
            }
            
        }
        
        return total;
    };
    
}


