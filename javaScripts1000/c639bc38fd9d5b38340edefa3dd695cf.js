googletag.cmd.push(function(){function adUnit(domId,slotName,sizes){var slotObj={slotID:domId,slotName:slotName,sizes:[]};const amzA9AllowedSizeArr=[[728,90],[970,250],[300,250],[300,600],[120,600],[160,600],[320,50],[300,50]];for(var size in sizes){var currentSize=sizes[size];for(var i=0;i<amzA9AllowedSizeArr.length;i++){var currentSizeToBidFor=amzA9AllowedSizeArr[i];if(currentSize[0]===currentSizeToBidFor[0]&&currentSize[1]===currentSizeToBidFor[1]){slotObj.sizes.push(currentSizeToBidFor)}}}return slotObj}var generateAdUnits=function(){var amzSlots=[];var actualAdsOnPage=googletag.pubads().getSlots();for(var slot in actualAdsOnPage){var slotDomId=actualAdsOnPage[slot].getSlotElementId();var slotName=actualAdsOnPage[slot].getSlotId().getId();var slotSizes=actualAdsOnPage[slot].getSizes().map(function(size){if(size.getWidth&&size.getHeight){return[size.getWidth(),size.getHeight()]}else{return[1,1]}});var slotObj=adUnit(slotDomId,slotName,slotSizes);if(slotObj.sizes.length>0){amzSlots.push(slotObj)}}return amzSlots};var amazonSlots=generateAdUnits();apstag.fetchBids({slots:amazonSlots,timeout:2000},function(bids){apstag.setDisplayBids();googletag.pubads().refresh()})});