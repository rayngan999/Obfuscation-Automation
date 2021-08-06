ï»¿Array.prototype.contains = function (v) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == v) return true;
    }
    return false;
};
Array.prototype.add = function (v) {
    this.unshift(v);
    $.unique(this);
};
Array.prototype.remove = function (v) {
    var removed = false;
    var index = 0;
    while ((index < this.length) && !removed) {
        if (this[index] == v) {
            this.splice(index, 1);
            removed = true;
        }
        index++;
    }
};

var selectedForComparison = new Array(0);

$(document).ready(function () {
    getQueryStringCompareParameters();
    bindProductComparisonCheckBoxes();
    bindCompareButtons();
});

$(document).ajaxStop(function () {
    bindProductComparisonCheckBoxes();
});

//obtem da query string os ids dos produtos selecionados para comparaÃ§Ã£o.
function getQueryStringCompareParameters() {
    var url = document.location.href;
    var paramArray = url.split('&');
    if (paramArray.length > 0) {
        var products;
        products = getParameterByName('ComparacaoProdutos', paramArray);
        if (products != '') {
            var productIds = products.split(',');
            if (productIds.length > 0) {
                for (var i = 0; i < productIds.length; i++) {
                    if (productIds[i] != '') {
                        selectedForComparison.add(productIds[i]);
                    }
                }
            }
        }
    }
}

function getParameterByName(nameParameter, paramArray) {
    for (var i = 0; i < paramArray.length; i++) {
        var parameterLine = paramArray[i].split('=');
        if (parameterLine[0] == nameParameter)
            return parameterLine[1];
    }
    return '';
}

function bindProductComparisonCheckBoxes() {
    //adicionado o tratamento para nÃ£o registrar o click 2 vezes na mesma chamada
    if ($('.compare-product-checkbox').attr('addedClick') != 'yes') {
        $('.compare-product-checkbox').click(function () {
            onCompareCheckBoxClick(this);
        });
    }
    $('.compare-product-checkbox').attr('addedClick', 'yes');
    preCheckProductsSelectedForComparison();
}

function bindCompareButtons() {
    $('a.btn-comparar').click(function () {
        onCompareButtonClick(this);
    });
}

function onCompareButtonClick() {

    if (selectedForComparison.length <= 1) {

        var locale = $("meta[name='language']").attr("content");

        var alertMessage;

        switch (locale) {
            case "es-AR":
                alertMessage = 'Debes seleccionar por lo menos 2 productos.';
                break;
            default:
                alertMessage = 'Ã necessÃ¡rio a seleÃ§Ã£o de 2 produtos ou mais para realizar a comparaÃ§Ã£o.';
        }

        alert(alertMessage);
        return;
    }
    var products = selectedForComparison.toString();

    products = products.replace(/,/g, ';');

    var compareUrl = '/Compare?refp=' + products + '&ReturnUrl=' + escape(document.location.href);

    document.location.href = compareUrl;
}

function preCheckProductsSelectedForComparison() {
    var pid;
    $('.compare-product-checkbox').each(function (i, chk) {
        pid = $(chk).attr('rel');
        chk.checked = selectedForComparison.contains(pid);
    });
    updateComparisonSelectionCount();
}

function onCompareCheckBoxClick(sender) {
    var pid = $(sender).attr('rel');
    if (sender.checked) {
        if (selectedForComparison.length < 4) {
            selectedForComparison.add(pid);
        }
        else {
            sender.checked = false;

            var locale = $("meta[name='language']").attr("content");

            var alertMessage;

            switch (locale) {
                case "es-AR":
                    alertMessage = 'No se puede comparar mÃ¡s de 4 productos al mismo tiempo.';
                    break;
                default:
                    alertMessage = 'SÃ³ Ã© possÃ­vel comparar 4 itens por vez.';
            }

            alert(alertMessage);
        }
    }
    else {
        selectedForComparison.remove(pid);
    }
    updateComparisonSelectionCount();
}

function updateComparisonSelectionCount() {
    $('.compare-selection-count').text(selectedForComparison.length);
}
