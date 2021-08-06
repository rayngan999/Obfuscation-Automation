

function ShowFreeShippingBanner() {
 
    var freeShippingBanner = document.createElement('div');
    freeShippingBanner.setAttribute("id", "FreeShippingBanner");
    freeShippingBanner.setAttribute("style", ';direction:ltr;');
    //CORE-16309
    freeShippingBanner.setAttribute("data-gem-ignore", '');


    //textContext from text resource
    freeShippingBanner.textContent = "Enjoy our great international shipping rates";
    var containerId = "SO1";
    if (containerId) {
        merchantContainerId = document.getElementById(containerId);

        if (merchantContainerId) {
            merchantContainerId.appendChild(freeShippingBanner);
        }
        else {
            console.log("ShowFreeShippingBanner : Container Id : " + containerId + " not found in DOM")
        }       
    }
    else {
        var body = document.body;
        var firstElement = body.firstChild;
        body.insertBefore(freeShippingBanner, firstElement);
    }
    try {
        gleTags.freeShippingBannerShowed('705', '94', 'HKD');
    }
    catch (err) {
        console.log(err.message);
    }
}

ShowFreeShippingBanner();


