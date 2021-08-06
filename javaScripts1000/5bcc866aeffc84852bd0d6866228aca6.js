'use strict';

function setCurrencyAndGoToURL(currency, url) {
    $.ajax({
        dataType: 'json',
        url: url,
        data: {
            format: 'ajax',
            currencyMnemonic: currency
        }
    })
    .success(function () {
        location.reload();
    });
}

function initialize() {    
	$('.js-countries_selectbox').on('change', function(){
		var url = $(this).data('url');
		setCurrencyAndGoToURL(this.value, url);
	})
}

$(document).ready(function(){
	initialize();
});