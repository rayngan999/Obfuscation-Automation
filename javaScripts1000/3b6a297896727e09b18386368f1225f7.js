jQuery(document).ready(function($) {
	
	function select_currency() {
		
		var current_country  = jQuery( '#edd_address_country' ).val();
		var current_currency = pl_currencies.current;
				
		jQuery( "#edd_bank_currency" ).empty();
		if ( pl_currencies.association[current_country] == undefined ) {
			jQuery.each(pl_currencies.all, function(key, value) {   
			     jQuery( '#edd_bank_currency' ).append($("<option></option>")
			                    .attr("value", key)
			                    .text(value)); 
			});
			
			if ( pl_currencies.all[ current_currency ] !== undefined ) {
				jQuery( "#edd_bank_currency" ).val( current_currency ).trigger( 'change' );
			} else {
				jQuery( "#edd_bank_currency" ).val( "USD" ).trigger( 'change' );
			}
			bank_currency_changed();
		} else {
			
			var currency_country = pl_currencies.association[current_country];
 			jQuery( '#edd_bank_currency' ).append($("<option></option>").attr("value", currency_country).text( pl_currencies.all[currency_country] ) ); 
 			jQuery( "#edd_bank_currency" ).trigger( 'change' );
 			bank_currency_changed();
		}
	}
	
	if ( jQuery( '#edd_address_country' ).length ) {
		
		select_currency();
		jQuery( "#edd_address_country" ).change(function() {
			select_currency();
		} );
	}
	
	if ( jQuery( '.edd-trash-payment' ).length ) {

		jQuery('.edd-trash-payment').click(function(){
		    return confirm( "Are you sure you want to delete?" );
		} );
	}
	
	if ( jQuery( 'input[name="edd_payment_method"]' ).length ) {
		var payment_method = jQuery( "input[name='edd_payment_method']:checked" ).val();
		if ( payment_method == 'paypal' ) {
			jQuery( '#edd-add-validate' ).hide();
		} else {
			
			var validated = jQuery( '#edd_bank_validated_account' ).val();
			if ( !validated ) {
				jQuery( '#edd-add-validate' ).show();
			} else {
				jQuery( '#edd-add-validate' ).hide();
			}
		}
	}
	
	if ( jQuery( '#edd_payment_amount' ).length ) {
		jQuery( "#edd_payment_amount" ).change(function() {
			
			var min = parseInt( jQuery( this ).attr( 'min' ) );
			var max = parseInt( jQuery( this ).attr( 'max' ) );
			var val = parseInt( jQuery( this ).val() );
						
			if ( val <= min ) {
				jQuery( this ).val( min );
			} else if ( val > max ) {
				jQuery( this ).val( max );
			} else if ( !val ) {
				jQuery( this ).val( min );
			}
		});
	}
	
	if ( jQuery( 'input[type=radio][name=edd_payment_period]' ).length ) {
				
		jQuery( 'input[type=radio][name=edd_payment_period]' ).change(function() {
		    if ( this.value == 'monthly' ) {
			    
			    jQuery( "#edd_by_month_desc" ).css('visibility', 'visible');
			    jQuery( "#edd_payment_amount" ).css('visibility', 'hidden');
			    jQuery( "#edd_by_ammount_desc" ).css('visibility', 'hidden');
			    jQuery( "#edd_amount_dolar" ).css('visibility', 'hidden');
			} else {
				
				jQuery( "#edd_by_month_desc" ).css('visibility', 'hidden');
			    jQuery( "#edd_payment_amount" ).css('visibility', 'visible');
			    jQuery( "#edd_by_ammount_desc" ).css('visibility', 'visible');
			    jQuery( "#edd_amount_dolar" ).css('visibility', 'visible');
			    
			    var min = parseInt( jQuery( "#edd_payment_amount" ).attr( 'min' ) );
				var max = parseInt( jQuery( "#edd_payment_amount" ).attr( 'max' ) );
				var val = parseInt( jQuery( "#edd_payment_amount" ).val() );
												
				if ( val <= min ) {
					jQuery( "#edd_payment_amount" ).val( min );
				} else if ( val > max ) {
					jQuery( "#edd_payment_amount" ).val( max );
				} else if ( !val ) {					
					jQuery( "#edd_payment_amount" ).val( min );
				}
			}
		} );
	}
	
	jQuery( 'input[type=radio][name=edd_payment_method]' ).change(function() {
	    if ( this.value == 'bank' ) {
		    jQuery( '#edd_paypal_div' ).hide();
		    jQuery( '#edd_bank_div' ).show();
		    jQuery( "#edd-add-validate" ).show();
		    
		    var validated = jQuery( '#edd_bank_validated_account' ).val();
			if ( !validated ) {
				
				jQuery( "#edd-add-validate" ).show();
				jQuery( "input[type=submit][name=edd-add-submit]" ).hide();
			  	jQuery( "input[type=submit][name=edd-add-activate-submit]" ).hide();
		  	} else {
			  	
			  	jQuery( "#edd-add-validate" ).hide();
			  	jQuery( "input[type=submit][name=edd-add-submit]" ).show();
			  	jQuery( "input[type=submit][name=edd-add-activate-submit]" ).show();
		  	}
	    }
	    else if ( this.value == 'paypal' ) {
		    jQuery( '#edd_paypal_div' ).show();
		    jQuery( '#edd_bank_div' ).hide();
		    jQuery( "#edd-add-validate" ).hide();
		    		    		    
		    jQuery( "input[type=submit][name=edd-add-submit]").show();
		    		    
		    if ( pl_action == 'add_payment_method' ) {
			    jQuery( "input[type=submit][name=edd-add-submit]").val( "Add" );
		        jQuery( "input[type=submit][name=edd-add-activate-submit]").val( "Add and Activate" );
			    
		    } else {
			    jQuery( "input[type=submit][name=edd-add-submit]").val( "Update" );
		        jQuery( "input[type=submit][name=edd-add-activate-submit]").val( "Update and Activate" );
	        }
	        
	        jQuery( "input[type=submit][name=edd-add-submit]").show();
		  	jQuery( "input[type=submit][name=edd-add-activate-submit]").show();
	    }
	} );
	
	jQuery( 'input[type=radio][name=edd_bank_type]' ).change(function() {
					
	    if ( this.value == 'BUSINESS' ) {
		    jQuery( '#edd_address_company' ).parent().show();
		    jQuery( '#edd_bank_account_type' ).text( "Business Bank Account" );
	    }
	    else if ( this.value == 'PRIVATE' ) {
		    jQuery( '#edd_address_company' ).parent().hide();
		    jQuery( '#edd_bank_account_type' ).text( "Private Bank Account" );
	    }
	} );
		
	jQuery( '#edd_payment_amount' ).change(function() {
		
		var currency = jQuery( this ).val();
		jQuery( '#edd_payment_amount_span' ).text( currency );
	} );
	
	jQuery( "#edd_next_payout_btn" ).click(function() {
		
		validate_next_page();
	} );
		
	jQuery( ".edd_previous_payout_btn" ).click(function() {
		
		jQuery( '#edd_comission_payouts_step_2' ).hide();
		jQuery( '#edd_comission_payouts_step_1' ).show();
		jQuery( '.fes-profile-form div.step-indicator > span.line' ).css('background-color','#d9d9d9');
	} );
	
	function validate_next_page() {
		
		if ( jQuery( "#edd_comission_payouts_step_1" ).is(":visible") ) {
			
			var firstname = jQuery( '#edd_address_first_name' ).val();
			var lastname  = jQuery( '#edd_address_last_name' ).val();
			var address_1 = jQuery( '#edd_address_address_1' ).val();
			var city      = jQuery( '#edd_address_city' ).val();
			var region    = jQuery( '#edd_address_region' ).val();
			var country   = jQuery( '#edd_address_country' ).val();
			var zipcode   = jQuery( '#edd_address_zipcode' ).val();
			
			var company   = jQuery( '#edd_address_company' ).val();
			var type      = jQuery( 'input[name=edd_bank_type]:checked' ).val()
			
			var hasError  = false;
			
			jQuery( '.pl_edd_invalid' ).removeClass( 'pl_edd_invalid' );
			
			if ( firstname == "" ) {
				jQuery( '#edd_address_first_name' ).addClass( 'pl_edd_invalid' );
				hasError = true;
			} if( lastname == "" ) {
				jQuery( '#edd_address_last_name' ).addClass( 'pl_edd_invalid' );
				hasError = true;
			} if( address_1 == "" ) {
				jQuery( '#edd_address_address_1' ).addClass( 'pl_edd_invalid' );
				hasError = true;
			} if( city == "" ) {
				jQuery( '#edd_address_city' ).addClass( 'pl_edd_invalid' );
				hasError = true;
			} if( region == "" ) {
				jQuery( '#edd_address_region' ).addClass( 'pl_edd_invalid' );
				hasError = true;
			} if( zipcode == "" ) {
				jQuery( '#edd_address_zipcode' ).addClass( 'pl_edd_invalid' );
				hasError = true;
			} if( company == "" && type == "BUSINESS" ) {
				jQuery( '#edd_address_company' ).addClass( 'pl_edd_invalid' );
				hasError = true;
			} if ( !hasError ) {
			
				var user_name = firstname;
				if ( lastname ) {
					user_name += " " + lastname;
				}
			    var address_formated = address_1;
			    if ( city ) {
				    address_formated += ", " + city;
			    }
			    if ( region ) {
				    address_formated += ", " + region;
			    }
			    if ( country ) {
				    if ( pl_countries.all[country] != undefined ) {
				    	address_formated += ", " + pl_countries.all[country];
				    }
			    }
			    
			    jQuery( '#edd_user_name' ).text( user_name ); 
			    jQuery( '#edd_user_address' ).text( address_formated ); 
			    
			    var payment_method = jQuery( "input[name='edd_payment_method']:checked" ).val();
			    
			    if ( pl_countries.transferwise[country] == undefined ) {
				    
				    jQuery( '#bank' ).hide();
				    jQuery( '#edd_bank_div' ).hide();
				    jQuery( '.bank-radio' ).hide();
				    
				    jQuery( '#paypal' ).click();
				    jQuery( "label[for='bank']" ).hide();
				    
			    } else {
				    
				    jQuery( '#bank' ).show();
				    if ( payment_method == 'bank' ) {
				    	jQuery( '#edd_bank_div' ).show();
				    }
				    jQuery( '.bank-radio' ).show();
				    jQuery( "label[for='bank']" ).show();
			    }
			    	    
				jQuery( '#edd_comission_payouts_step_1' ).hide();
				jQuery( '#edd_comission_payouts_step_2' ).show();
				jQuery( '.fes-profile-form div.step-indicator > span.line' ).css('background-color','#fa64b7');
					
			}
		}
	}
	
	function validate_bank_account()Â {
				
		var currency   = jQuery( '#edd_bank_currency' ).val();
		var field_1    = jQuery( '#edd_bank_field_1' ).val();
		var field_2    = jQuery( '#edd_bank_field_2' ).val();
		var field_3    = jQuery( '#edd_bank_field_3' ).val();
		var holder     = jQuery( '#edd_bank_holder' ).val();
		var type       = jQuery( 'input[name=edd_bank_type]:checked' ).val();
		var account_id = jQuery( '#edd_bank_validated_account' ).val();
		
		// Address fields
		var country   = jQuery( '#edd_address_country' ).val();
		var city 	  = jQuery( '#edd_address_city' ).val();
		var state     = jQuery( '#edd_address_region' ).val();
		var postCode  = jQuery( '#edd_address_zipcode' ).val();
		var firstLine = jQuery( '#edd_address_address_1' ).val();
		
		var address   = {country:country, city:city, state:state, postCode:postCode, firstLine:firstLine};
								
		if ( account_id ) {
			
			jQuery( "#edd-add-validate" ).hide();
			jQuery( "input[type=submit][name=edd-add-submit]" ).show();
			jQuery( "input[type=submit][name=edd-add-activate-submit]" ).show();
			alert( "Bank account is valid. You can now update and activate" );
		} else {
			
			jQuery( ".pl-validate-spinner" ).show();
			jQuery( '#edd-add-validate').addClass( 'pl_disabled' );
				
			var ajaxFunction = 'pl_edd_validate_bank';
			jQuery.ajax({
		      url: pl_countries.ajax_url,
		      dataType: 'JSON',
		      data: {
		          'action'  : ajaxFunction,
		          'currency': currency,
		          'field_1' : field_1,
		          'field_2' : field_2,
		          'field_3' : field_3,
		          'holder'  : holder,
		          'type'    : type,
		          'address' : address
		      },
		      
		      success:function( response ) {
			      
			    jQuery( ".pl-validate-spinner" ).hide();
			    jQuery( '#edd-add-validate').removeClass( 'pl_disabled' );
		        if ( response ) {
			        if ( response.result ) {
				        				        
				        var account_id = response.account_id;
				        jQuery( '#edd_bank_validated_account' ).val( account_id );	
				        
				        jQuery( "#edd-add-validate" ).hide();	
				        jQuery( "input[type=submit][name=edd-add-submit]").show();
						jQuery( "input[type=submit][name=edd-add-activate-submit]").show();		        
				        alert( "Bank account is valid. You can now update and activate" );
			        }
			        else {
				        alert( "Bank account is not valid!" );		 
				        jQuery( '#edd_bank_validated_account' ).val( "" );	       
			        }
		        }
		      },
		      error: function(errorThrown){
			    
			    jQuery( '#edd-add-validate').removeClass( 'pl_disabled' );
			    jQuery( ".pl-validate-spinner" ).hide();
			    alert( "Failed to validate bank account!" );	
		      }
		    });
	    }
	}
	
	function bank_currency_changed() {

		var currency    = jQuery( "#edd_bank_currency" ).val();
		jQuery( '#edd_currency_symbol' ).text( currency );
		var bank_fields = pl_countries.bank_fields[currency];
		if ( bank_fields == undefined ) {
			
			jQuery( '#edd_bank_field_1' ).parent().show();
			jQuery( "label[for='edd_bank_field_1']" ).text( "Account Number" );
			jQuery( "#edd_bank_field_1" ).prop( 'placeholder', "Account Number" );

			jQuery( '#edd_bank_field_2' ).parent().hide();
			jQuery( '#edd_bank_field_3' ).parent().hide();
		} else {
			
			var field_1 = bank_fields[0];
			var field_2 = bank_fields[1];
			var field_3 = bank_fields[2];
			
			if ( field_1 == undefined ) {
				
				jQuery( '#edd_bank_field_1' ).parent().hide();
			} else {
				
				jQuery( '#edd_bank_field_1' ).parent().show();
				jQuery( "label[for='edd_bank_field_1']" ).text( field_1 );
				jQuery( "#edd_bank_field_1" ).prop( 'placeholder', field_1 );
			}
			
			if ( field_2 == undefined ) {
				
				jQuery( '#edd_bank_field_2' ).parent().hide();
			} else {
				
				jQuery( '#edd_bank_field_2' ).parent().show();
				jQuery( "label[for='edd_bank_field_2']" ).text( field_2 );
				jQuery( "#edd_bank_field_2" ).prop( 'placeholder', field_2 );
			}
			
			if ( field_3 == undefined ) {
				
				jQuery( '#edd_bank_field_3' ).parent().hide();
			} else {
				
				jQuery( '#edd_bank_field_3' ).parent().show();
				jQuery( "label[for='edd_bank_field_3']" ).text( field_3 );
				jQuery( "#edd_bank_field_3" ).prop( 'placeholder', field_3 );
			}			
		}
	}
	
	
	jQuery( "#edd_bank_currency" ).change(function() {

		bank_currency_changed();
	} );
	
	jQuery( "form#edd-payment-form-new-payment" ).submit(function(e){
		
		if ( jQuery( "#edd_comission_payouts_step_1" ).is(":visible") ) {
			validate_next_page();
			e.preventDefault();
		} else {
					
			var payment_method = jQuery( "input[name='edd_payment_method']:checked" ).val();
			if ( payment_method == 'bank' ) {
				var validated = jQuery( '#edd_bank_validated_account' ).val();
				if ( !validated ) {
					e.preventDefault();
		        }
	        } else if( payment_method == 'paypal' ) {
		        
		        var emailFirst = jQuery( "#edd_paypal_email" ).val();
		        var emailLast  = jQuery( "#edd_paypal_email_confirm" ).val();
		        
				jQuery( "#edd_paypal_email").removeClass( 'pl_edd_invalid' );
				jQuery( "#edd_paypal_email_confirm").removeClass( 'pl_edd_invalid' );
		        
		        if ( !emailLast && !emailLast ) {
			        jQuery( "#edd_paypal_email").addClass( 'pl_edd_invalid' );
					jQuery( "#edd_paypal_email_confirm").addClass( 'pl_edd_invalid' );
			        e.preventDefault();
		        } else if ( !emailLast ) {
					jQuery( "#edd_paypal_email_confirm").addClass( 'pl_edd_invalid' );
			        e.preventDefault();
		        } else if ( !emailFirst ) {
					jQuery( "#edd_paypal_email").addClass( 'pl_edd_invalid' );
			        e.preventDefault();
		        } else if ( emailFirst !== emailLast ) {
					alert("Email addresses do not match.");
   			        jQuery( "#edd_paypal_email").addClass( 'pl_edd_invalid' );
					jQuery( "#edd_paypal_email_confirm").addClass( 'pl_edd_invalid' );
			        e.preventDefault();
		        }
	        }
        }
    } );    
    
    jQuery( ".edd_bank_data_field" ).change(function() {
	    	    
	    if ( jQuery( 'input[name=edd_payment_method]:checked' ).val() == 'bank' ) {
		    
		    jQuery( "#edd-add-validate" ).show();
		  	jQuery( "input[type=submit][name=edd-add-submit]").hide();
		  	jQuery( "input[type=submit][name=edd-add-activate-submit]").hide();
	  	}
	  	jQuery( '#edd_bank_validated_account' ).val( "" );
	} );
	
	jQuery( "#edd_bank_holder" ).change(function() {
		
		if ( jQuery( 'input[name=edd_payment_method]:checked' ).val() == 'bank' ) { 
			jQuery( "#edd-add-validate" ).show();
		  	jQuery( "input[type=submit][name=edd-add-submit]").hide();
		  	jQuery( "input[type=submit][name=edd-add-activate-submit]").hide();
		}
		
		jQuery( '#edd_bank_validated_account' ).val( "" );
	} );
	
	jQuery( "#edd_bank_currency" ).change(function() {
		
		if ( jQuery( 'input[name=edd_payment_method]:checked' ).val() == 'bank' ) { 
			jQuery( "#edd-add-validate" ).show();
		  	jQuery( "input[type=submit][name=edd-add-submit]").hide();
		  	jQuery( "input[type=submit][name=edd-add-activate-submit]").hide();
		}
		
		jQuery( '#edd_bank_validated_account' ).val( "" );
	} );

	jQuery( "#edd_comission_payouts_step_2 .paypal_radio").click( function() {
		jQuery( "#edd_comission_payouts_step_2 #paypal ").attr('checked',true);
		jQuery( "#edd_comission_payouts_step_2 #paypal ").trigger("change");
		jQuery( "#edd_comission_payouts_step_2 .bank_radio").removeClass("selected");
		jQuery( "#edd_comission_payouts_step_2 .paypal_radio").addClass("selected");
	});
	jQuery( "#edd_comission_payouts_step_2 .bank_radio").click( function() {
		jQuery( "#edd_comission_payouts_step_2 #bank ").attr('checked',true);
		jQuery( "#edd_comission_payouts_step_2 #bank ").trigger("change");
		jQuery( "#edd_comission_payouts_step_2 .paypal_radio").removeClass("selected");
		jQuery( "#edd_comission_payouts_step_2 .bank_radio").addClass("selected");
	});
	
	jQuery( "#edd-add-validate" ).click(function() {
		
		if ( !jQuery( this ).hasClass( 'pl_disabled' ) ) {
			validate_bank_account();
		}
	} );
	
	jQuery('#edd_paypal_email_confirm').keypress(function(e) {
	  if (e.which == 13) {
		e.preventDefault();
	    jQuery('input[name="edd-add-activate-submit"]').trigger('click');
	  }       
	});
	
	jQuery("input, textarea, email").bind("checkval",function(){
	}).on("keyup",function(){
	  jQuery(this).trigger("checkval");
	}).on("focus",function(){
	  jQuery(this).last(".fes-fields label").addClass("float-on");
	}).on("blur",function(){
	    jQuery(this).last(".fes-fields label").removeClass("float-on");
	}).trigger("checkval");

    
} );