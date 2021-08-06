ï»¿(function ($) {

    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
	
	$(document).on('click', '#viewSubscribeToNewsletter', function (event) {
		var emailAddress = $("#newsletterAddressTmp").val();
        var errors = '';
        if (!isEmail(emailAddress)) {
            errors += "E' necessario inserire una mail valida\n";
        }	
        if (errors) {
            MessageBox("Attenzione", errors);
            return;
        }
		var popuUp = '<div  id="popup" class="cc-overlay cc-overlay-purchase cc-overlay-newsletter" style="display: block;">' +
			'   <div class="cc-overlay-main cc-overlay-main-small"   style="background: white;"  >' +
			'      <div class="cc-close-button">' +
			'         <div class="cc-svg cc-svg-close-primary-color jq-popup-close"><span>Chiudi</span></div>' +
			'      </div>' +
			'      <section class="cc-purchase-contents">' +
			'         <div class="cc-content-title cc-content-title-feedback">' +
			'            <h1 class="cc-purchase-main-title" style="color:#222225">Iscriviti alla nostra newsletter</h1>' +
			'            <p class="cc-purchase-subtitle">Completa la procedura di registrazione</p>' +
			'         </div>' +
			'         <div class="cc-content-main-info cc-small-padding-top">' +
			'			 <div>' + 
			'			 	<div class="cc-content-input">' + 
			'		  			<input class="cc-input form-control" placeholder="Inserisci il tuo indirizzo email" id="newsletterAddress" type="email" value="' + emailAddress + '">' + 
			'		  			<p class="cc-error-message"><small style="color:red;"></small></p>' +
			'					<span class="cc-terms">Letta e compresa <a href="/Privacy-Policy.html" class="cc-link-terms" target="_blank">l\'Informativa Privacy</a>, espressamente e liberamente</span>' +
            '        			<div class="cc-content-checks">' +
            '						<div class="cc-content-check">' +
			'							<input name="footerPrivacyA" type="radio" class="cc-check" id="consentoA">' + 
			'							<label for="consentoA">Consento</label>' +
			'						</div>' +
			'						<div class="cc-content-check">' +
			'                       	<input name="footerPrivacyA" type="radio" class="cc-check" id="non-consentoA">' +
			'            				<label for="non-consentoA">Non Consento</label>' +
			'	        			</div>' +
			'					</div>' +
			'					<span class="cc-terms">il trattamento dei miei dati personali per le finalitÃ  di cui al paragrafo 4.B, ivi comprese quelle relative allâinvio di newsletter, comunicazioni commerciali, promozionali e di marketing diretto attraverso sistemi di contatto totalmente automatizzati (ferma restando la possibilitÃ  di manifestare in qualsiasi momento la volontÃ  di ricevere comunicazioni per le suddette finalitÃ  esclusivamente attraverso modalitÃ  di contatto tradizionali).</span>' +
            '        			<div class="cc-content-checks">' +
            '						<div class="cc-content-check">' +
			'							<input name="footerPrivacyB" type="radio" class="cc-check" id="consentoB">' + 
			'							<label for="consentoB">Consento</label>' +
			'						</div>' +
			'						<div class="cc-content-check">' +
			'                       	<input name="footerPrivacyB" type="radio" class="cc-check" id="non-consentoB">' +
			'            				<label for="non-consentoB">Non Consento</label>' +
			'	        			</div>' +
			'					</div>' +
			'					<span class="cc-terms">il trattamento dei miei dati personali per le finalitÃ  di cui al paragrafo 4.C, ivi comprese quelle relative allâinvio di newsletter, materiale pubblicitario e/o comunicazioni e informazioni di natura commerciale e di marketing indiretto su servizi e prodotti, relativi ad offerte, sconti e ogni altra iniziativa promozionale e di fidelizzazione adottata dai nostri partner commerciali attraverso sistemi di contatto totalmente automatizzati (ferma restando la possibilitÃ  di manifestare in qualsiasi momento la volontÃ  di ricevere comunicazioni per le suddette finalitÃ  esclusivamente attraverso modalitÃ  di contatto tradizionali).</span>' +
			'				</div>' +
			'			 </div>' +
			'            <div class="cc-content-button"><a href="javascript:;" class="cc-button cc-button-secondary jq-popup-close">Chiudi</a><button class="cc-button cc-button-primary" id="subscribeToNewsletter">Iscriviti</button></div>' +
			'         </div>' +
			'      </section>' +
			'   </div>' +
			'</div>';

		if ($('.cc-desktop').length > 0) {
			$('.cc-desktop').append(popuUp);
		} else if ($('.cc-mobile').length > 0) {
			$('.cc-mobile').append(popuUp);
		}

		$(".jq-popup-close").on("click", function () {
			$("#popup").remove();
		});		
	});	

    $(document).on('click', '#subscribeToNewsletter', function (event) {

        if (pageEditorMode()) {
            return;
        }

        var emailAddress = $("#newsletterAddress").val();
		var isInformativaPrivacyAcceptedA = $("#consentoA").is(':checked');
		var isInformativaPrivacyAcceptedB = $("#consentoB").is(':checked');
        var errors = '';

        if (!isEmail(emailAddress)) {
            errors += "E' necessario inserire una mail valida\n";
        }

        if (!isInformativaPrivacyAcceptedA || !isInformativaPrivacyAcceptedB) {
            errors += "E' necessario accettare i consensi";
        }

        if (errors) {
            $(".cc-overlay-newsletter .cc-error-message small").html(errors);
            return;
        }

		$.ajax({
			url: 'https://dp-fit-prod-function.azurewebsites.net/api/v3/generic/newsletter/subscribe',
			type: 'POST',
			data: JSON.stringify({"email" : emailAddress, "privacy" : true, "privacy2" : true,"source":"21C87FE9-E5DA-4F15-B5A9-A86CAFEE0F3E"}),
			contentType: "application/json; charset=utf-8",
            success: function (data, textStatus, jqXHR) {
                $("#popup").remove();
				if (data.toLowerCase() == "ok") {
                    MessageBox("Avviso", "Grazie per esserti iscritto.");
                }
                else {
                    MessageBox("Errore", "Impossibile iscriversi alla newsletter, riprova piÃ¹ tardi.");
                }
            },
			error: function (xhr, ajaxOptions, thrownError) {
				$("#popup").remove();
				//alert("PASSA 2");
			}
        });
    });

})(jQueryV2);