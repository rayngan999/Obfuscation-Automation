var _recsysTrackExtras = {
    isScriptAllowed: function() {
        return true;
    },
    cropImageWidthHeight: "-250-250",
    scriptSrc: "//static.biggylabs.com.br/javascript/recsys-manual-call.min.js",
    productDescriptionElement: ".productDescription",
    itemRemoveCartElementClasses: "icon icon-remove item-remove-ico",
    buildSkuSpecs: function(item) {
        var specs = {};

        var sizeArray = item.TAMANHO || item.Tamanho || item.tamanho;
        if (sizeArray) {
            specs.size = sizeArray[0];
        }

        var colorArray = item.COR || item.Cor || item.cor || item.Cores || item.cores;
        if (colorArray) {
            specs.color = colorArray[0];
        }

        return specs;
    },
    buildProductSpecs: function(product) {
        var specs = {
            size: [],
            color: []
        };

        allSizes = [];
        allColors = [];
        for (var i = 0, len = product.items.length; i < len; i++) {
            var item = product.items[i];

            var sizeArray = item.TAMANHO || item.Tamanho || item.tamanho;
            if (sizeArray) {
                if (allSizes.indexOf(sizeArray[0]) === -1) {
                    allSizes.push(sizeArray[0]);
                }
            }

            var colorArray = item.COR || item.Cor || item.cor || item.Cores || item.cores;
            if (colorArray) {
                if (allColors.indexOf(colorArray[0]) === -1) {
                    allColors.push(colorArray[0]);
                }
            }
        }

        for (var i = 0; i < allSizes.length; i++) {
            specs.size.push({
                id: allSizes[i],
                label: allSizes[i]
            });
        }

        for (var i = 0; i < allColors.length; i++) {
            specs.color.push({
                id: allColors[i],
                label: allColors[i]
            });
        }

        return specs;
    },
    getProductImages: function(product) {
        if (product.items.length > 1 && product["Imagem Principal"]) {
            return { default: "/arquivos/" + product["Imagem Principal"] };
        }

        var itemImages = {};

        var images = product.items[0].images;
        var imageKeys = ["default", "second", "third", "fourth", "fifth", "sixth"];

        // Ignore empty images
        if (images == null || images.length === 0) {
            return;
        }

        for (var i = 0; i < images.length; i++) {
            var image = images[i];

            // Ignore thumbs
            if (
                typeof image.imageLabel !== "undefined" &&
                !!image.imageLabel &&
                (image.imageLabel.toLowerCase() === "thumb" || image.imageLabel.toLowerCase() === "swatch")
            ) {
                continue;
            }

            if (image.imageLabel != null && image.imageLabel !== "") {
                itemImages[image.imageLabel.toLowerCase()] = editImageUrl(image.imageUrl);
            } else {
                // Add image using keys
                var imageKey = imageKeys.shift();
                itemImages[imageKey] = editImageUrl(image.imageUrl);

                // Check for keys
                if (imageKeys.length === 0) {
                    break;
                }
            }
        }

        return itemImages;
    },
    buildProductExtraInfo: function(product, rate) {
        metadados_recsys.product.extra_info = {};

        if (product.items.length > 1 && product["Imagem Principal"] && product["Imagem Principal"].length > 0) {
            metadados_recsys.product.extra_info.productImage = "/arquivos/" + product["Imagem Principal"][0];
        }

        return metadados_recsys.product.extra_info;
    },
    buildProductPrices: function(product, pageInfo) {
        if (product && product.items && product.items.length > 0) {
            var seller = getSellerFromProduct(product);
            metadados_recsys.product.price = seller.commertialOffer.price;

            if (seller.commertialOffer.ListPrice !== metadados_recsys.product.price) {
                metadados_recsys.product.old_price = seller.commertialOffer.ListPrice;
            }

            var installment = getInstallmentFromSeller(seller);
            if (installment) {
                metadados_recsys.product.installment = {};
                metadados_recsys.product.installment.count = installment.NumberOfInstallments;
                metadados_recsys.product.installment.price = installment.Value;
            }
        }
    },
    buildSKUPrices: function(seller) {
        var prices = {};

        prices.price = seller.commertialOffer.Price;

        if (seller.commertialOffer.ListPrice !== prices.price) {
            prices.old_price = seller.commertialOffer.ListPrice;
        }

        var installment = getInstallmentFromSeller(seller);
        if (installment) {
            prices.installment = {};
            prices.installment.count = installment.NumberOfInstallments;
            prices.installment.price = installment.Value;
        }

        return prices;
    }
};
