//-----------------------------------
// Start ENFieldPopulator class
//-----------------------------------
function ENFieldPopulator(config) {
	var inFrame = function() { try { return window.self !== window.top; } catch (e) { return true; } }

	// Required configuration object properties
	//   cookie_name: string (ens_frm_data)
	//   remote_origin: string (https://remote-storage-domain.com)
	//   remote_path: string (/path/to/your/remote/storage/process)
	const required_properties = ['cookie_name', 'remote_origin', 'remote_path'];
	required_properties.forEach(function(property_name) {
		if(!config.hasOwnProperty(property_name)) {
			throw 'ENFieldPopulator: ' + property_name + ' is not provided.';
		}
	});

	this.cookie_name = config.cookie_name;
	this.autofill_fields_data = {};

	// START optional overridable field names and query selectors
	//   Defaulting these fields but permitting them to be overridden should the field names change.
	//   They only apply if autofilling donation amounts.
	this.fn_donation_amount_radios = config.hasOwnProperty('fn_donation_amount_radios') ? 
		config.fn_donation_amount_radios : 'transaction.donationAmt';

	this.fn_donation_amount_other_input = config.hasOwnProperty('fn_donation_amount_other_input') ?
		config.fn_donation_amount_other_input : 'transaction.donationAmt.other';

	this.fn_donation_recurr_pay_radios = config.hasOwnProperty('fn_donation_recurr_pay_radios') ?
		config.fn_donation_recurr_pay_radios : 'transaction.recurrpay';

	this.qs_donation_amount_other_checkbox = config.hasOwnProperty('fid_donation_amount_other_checkbox') ?
		config.qs_donation_amount_other_checkbox : '#en__field_transaction_donationAmt4';
	// END optional overridable field names and query selectors

	this.referring_url = (inFrame()) ? document.referrer : window.location.href;
	if(!this.referring_url) {
		throw 'ENFieldPopulator: Referring URL is not valid.';
	}

	function includes(array, string) {
		var na = array.filter(function(el) {
			return el.indexOf(string) >= 0;
		});
		return na.length > 0;
	}

	this.referring_domain = this.referring_url.match(/:\/\/(.[^/]+)/)[1];
	if(!includes(config.enabled_domains, this.referring_domain)) {
		throw 'ENFieldPopulator: Referring domain is not valid.';		
	}

	this.remote_storage = new CrossDomainStorageRM(config.remote_origin, config.remote_path);
	this.remote_storage.init();
}

ENFieldPopulator.prototype = {
	constructor: ENFieldPopulator,
	autofill: function(done) {
		// fetch stored autofill data and fill in the matching fields
		this.remote_storage.requestValue(this.cookie_name, function(data) {
			var cookie_value = (data.hasOwnProperty('value')) ? data.value : null;
			if(!cookie_value) {
				if(done) done(null);
				return;
			}

			// handle recurring payment option
			this.autofill_fields_data = jQuery.parseJSON(cookie_value); // save the field data so that it can be cleared if required

			// decodeURIComponent each element
			jQuery.each(this.autofill_fields_data, function(field_name, field_value) {
				this.autofill_fields_data[field_name] = decodeURIComponent(field_value);
			}.bind(this));

			if(this.autofill_fields_data.hasOwnProperty(this.fn_donation_recurr_pay_radios) && 'Y' === this.autofill_fields_data[this.fn_donation_recurr_pay_radios]) {
				jQuery('input[name="' + this.fn_donation_recurr_pay_radios + '"]').click();
			}

			// fill in each of the inputs and save their content should we need to reverse it
			jQuery.each(this.autofill_fields_data, function(field_name, field_value) {
				if(this.fn_donation_amount_radios === field_name) {
					// Select the button corresponding to the specific amount if it exists
					var specific_amount_button = jQuery('input[name="' + this.fn_donation_amount_radios + '"][value="' + field_value + '"]');
					if(specific_amount_button.length) {
						specific_amount_button.click();
					} else {
						// Select the 'Other' radio button and enter the custom amount
						jQuery(this.qs_donation_amount_other_checkbox).click();						
						jQuery('[name="' + this.fn_donation_amount_other_input + '"]').val(field_value);
					}
				} else if(this.fn_donation_recurr_pay_radios === field_name) {
					// Do nothing - we've already processed this field
				} else {
					var f = jQuery('[name="' + field_name + '"]');					
					if(!f.val()) f.val(field_value);
				}
			}.bind(this)); 

			if(done) done(this.autofill_fields_data);
		}.bind(this));
	},
	// saves autofill data for the field names provided
	save: function(field_names, fill, done) {
		// if the auto-clear has been triggered, don't try to save this again
		if(this.manual_clear) {
			return done(null);
		}

		// create a collection of the field values
		var values = {};
		for(var i = 0; i < field_names.length; i++) {
			var input_selector = '[name="' + field_names[i] + '"]';
			var input = jQuery(input_selector);
			if(input.length) {
				if('input' === input.prop('tagName').toLowerCase()) {
					// if this is a radio button or checkbox, we need to append :checked to the selector to grab the correct value
					var type = input.prop('type');
					if('radio' === type || 'checkbox' === type) {
						input = jQuery(input_selector + ':checked');
						if(!input.length) continue;
					}
				}
				values[field_names[i]] = encodeURIComponent(input.val());

			// if the field does not exist in this form but it did in a previous submission, fill it in
			} else if(fill && this.autofill_fields_data[field_names[i]]) {
				values[field_names[i]] = encodeURIComponent(this.autofill_fields_data[field_names[i]]);
			}
		}

		// save the field values
		this.remote_storage.storeValue(this.cookie_name, values, done);
	},
	// deletes the autofill data
	// skip_fields must be an array; empty if there is no need to skip a field when clearing fields; otherwise must consist of field names
	clear: function(skip_fields, done) {
		if(!Array.isArray(skip_fields)) skip_fields = [];
		this.manual_clear = true;
		this.remote_storage.storeValue(this.cookie_name, {}, done);		
		jQuery.each(this.autofill_fields_data, function(field_name, field_value) {
			if(!skip_fields.includes(field_name)) {
				var input_selector = '[name="' + field_name + '"]';
				var input = jQuery(input_selector);
				if(input.length) {
					var tag_name = input.prop('tagName').toLowerCase();
					if('input' === tag_name) {
						var type = input.prop('type');
						if('radio' === type || 'checkbox' === type) {
							// we don't know what this was, so leave it alone
						} else {
							input.val('');
						}
					} else if('select' === tag_name) {
						input.val([]);
					}
				}
			} 
		});
	}
}
//-----------------------------------
// End ENFieldPopulator class
//-----------------------------------