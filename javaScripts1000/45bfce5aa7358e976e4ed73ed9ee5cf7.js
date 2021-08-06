(function($) {
	$(document).ready(function() {
		function is_peta_latino() {
			return window.location.hostname.toLowerCase().includes('petalatino');
		}
		function get_rememberme_info() {
			if(pageJson.pageType == 'donation') {
				if(is_peta_latino()) {
					return 'Marca "RecuÃ©rdame" para completar mÃ¡s rÃ¡pido los formularios de PETA en este dispositivo. Aunque tu informaciÃ³n financiera no serÃ¡ guardada, solo deberÃ­as marcar este casillero desde un dispositivo personal. Haz clic en "Borrar autocompletar" para eliminar la informaciÃ³n de tu dispositivo en cualquier momento.';
				} else {
					return 'Check âRemember meâ to complete PETA forms on this device faster. While your financial information wonât be stored, you should only check this box from a personal device. Click âClear autofillâ to remove the information from your device at any time.';
				}
			} else {
				if(is_peta_latino()) {
					return 'Marca "RecuÃ©rdame" para completar mÃ¡s rÃ¡pido los formularios de PETA en este dispositivo. Solo deberÃ­as marcar este casillero desde un dispositivo personal. Haz clic en "Borrar autocompletar" para eliminar la informaciÃ³n de tu dispositivo en cualquier momento.';
				} else {
					return 'Check âRemember meâ to complete PETA forms on this device faster. You should only check this box from a personal device. Click âClear autofillâ to remove the information from your device at any time.';				
				}
			}
		}
		var fcp = new ENFieldPopulator({
			cookie_name: 'ens_frm_data',
			enabled_domains: [
				// PETA.org
				'www.peta.org',
				'stage.peta.org',
				'dev.peta.org',
				'action.peta.org',

				// PETA Headlines
				'headlines.peta.org',
				'stageheadlines.peta.org',
				'devheadlines.peta.org',

				// PETA Investigations
				'investigations.peta.org',
				'stageinvestigations.peta.org',
				'devinvestigations.peta.org',
			  
				// PETA Engaging Networks
				'support.peta.org',
				'petapack.peta.org',
				'fundraise.peta.org',
				'memorials.peta.org',
				'us.e-activist.com',
				
				// PETA Latino
				'www.petalatino.com',
				'support.petalatino.com',
				'investigaciones.petalatino.com',
				
				// PETA Kids
				'www.petakids.com',
				'action.petakids.com',
				'support.petakids.com'
			],
			remote_origin: 'https://www.peta.org', 
			remote_path: '/wp-content/plugins/peta-middleware-api/data-remember.html'
		});


		// autofill the fields based on previous visits if that data was saved		
		fcp.autofill(function(data) {
			// if autofill completes successfully (there was data saved), add a trigger to permit the user to clear the autofill
			var is_petalatino = is_peta_latino();
			if(!$.isEmptyObject(data)) {				
				var clear_autofill_text = (is_petalatino) ? 'Borrar autocompletado' : 'Clear Autofill';
				$('label[for="en__field_supporter_firstName"]').parents('.en__component--formblock').prev().append(
					'<a id="clear-autofill-data" style="cursor: pointer; margin-bottom: 15px; display: inline-block;">(' + clear_autofill_text + ')</a>'
				);
				$('#clear-autofill-data').click(function(e) {
					// prevent the email address from clearing
					// note: this does not prevent the cookie from emptying...this is only to preserve the value in the input field
					var skip_fields = (pageJson && pageJson.hasOwnProperty('supporterId') && pageJson.supporterId) ? ['supporter.emailAddress'] : [];
					fcp.clear(skip_fields, function() {});
					$(this).hide();
					sendEvent('Remember Me', 'Clear Data', window.location.href);
				});
			} else {
				var remember_me_label = (is_petalatino) ? 'RecuÃ©rdame' : 'Remember Me';

				$('.en__field--emailAddress.en__field').after(
					'<div class="en__field en__field--checkbox"><div class="en__field__item rememberme-wrapper">' +
						'<input id="rememberme" type="checkbox" class="en__field__input en__field__input--checkbox" />' +
						'<label for="rememberme" class="en__field__label en__field__label--item"><div class="rememberme-content">' +
							remember_me_label +
							'&nbsp;&nbsp;<a id="rememberme-learn-more-toggle"><svg style="height: 14px; width: auto;" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 7H9V5H11V7ZM11 9H9V15H11V9ZM10 2C5.59 2 2 5.59 2 10C2 14.41 5.59 18 10 18C14.41 18 18 14.41 18 10C18 5.59 14.41 2 10 2ZM10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0Z" fill="currentColor"/></svg></a>' +
							'<div id="rememberme-learn-more-content" style="display: none; padding-top: 4px;">' + get_rememberme_info() + '</div>' +
						'</div></label>' +
					'</div></div>'
				);

				$('#rememberme-learn-more-toggle').click(function(e) {
					e.preventDefault();
					var $rlmc = $('#rememberme-learn-more-content');
					if($rlmc.is(':visible')) {
						$rlmc.slideUp();
					} else {
						sendEvent('Remember Me', 'Learn More', window.location.href);
						$rlmc.slideDown();
					}
				});

				$('#rememberme').change(function() {
					if($(this).is(':checked')) {
						sendEvent('Remember Me', 'Opt In', window.location.href);
					} else {
						sendEvent('Remember Me', 'Opt Out', window.location.href);
					}
				});
			}
		});


		window.updateAutofill = function(done) {
			var update_autofill_data = true;
			var $rm = $('#rememberme');
			if($rm.length && !$rm.is(':checked')) {
				update_autofill_data = false;
			}
			if(update_autofill_data) {
				// save the contents of the autofill fields as a cross-domain cookie
				fcp.save([
					'supporter.firstName',
					'supporter.lastName',
					'supporter.address1',
					'supporter.address2',
					'supporter.city',
					'supporter.country',
					'supporter.region',
					'supporter.postcode',
					'supporter.emailAddress'
				], true, done);
			} else if(done) {
				done();
			}
		}
	});
})(jQuery);
