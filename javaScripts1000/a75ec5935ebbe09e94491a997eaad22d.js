/**
 * Chimpy Plugin Frontend JavaScript
 */
jQuery(document).ready(function() {

    /**
     * Display hidden interest groups (if any)
     */
    jQuery('.chimpy_signup_form fieldset').click(function() {
        jQuery(this).find('.chimpy_interest_groups_hidden').show();
        var form = jQuery(this).closest('.chimpy_signup_form');
        if (form.hasClass('sky-form-modal')) {
            form.css('top', '50%').css('left', '50%').css('margin-top', -form.outerHeight()/2).css('margin-left', -form.outerWidth()/2);
        }
    });

    /**
     * Handle form submit
     */
    jQuery('.chimpy_signup_form').each(function() {

        var chimpy_button = jQuery(this).find('button');
        var chimpy_context = jQuery(this).find('#chimpy_form_context').val();

        chimpy_button.click(function() {
            chimpy_process_mailchimp_signup(jQuery(this), chimpy_context);
        });

        jQuery(this).find('input[type="text"], input[type="email"]').each(function() {
            jQuery(this).keydown(function(e) {
                if (e.keyCode === 13) {
                    chimpy_process_mailchimp_signup(chimpy_button, chimpy_context);
                }
            });
        });
    });

    /**
     * MailChimp signup
     */
    function chimpy_process_mailchimp_signup(button, context)
    {
        if (button.closest('.chimpy_signup_form').valid()) {

            button.closest('.chimpy_signup_form').find('fieldset').fadeOut(function() {

                var  this_form = jQuery(this).closest('.chimpy_signup_form');
                this_form.find('#chimpy_signup_'+context+'_processing').fadeIn();
                button.prop('disabled', true);

                if (this_form.hasClass('sky-form-modal')) {
                    this_form.css('top', '50%').css('left', '50%').css('margin-top', -this_form.outerHeight()/2).css('margin-left', -this_form.outerWidth()/2);
                }

                jQuery.post(
                    chimpy_ajaxurl,
                    {
                        'action': 'chimpy_subscribe',
                        'data': button.closest('.chimpy_signup_form').serialize()
                    },
                    function(response) {
                        var result = jQuery.parseJSON(response);

                        // Remove progress scene
                        this_form.find('#chimpy_signup_'+context+'_processing').fadeOut(function() {
                            if (result['error'] == 1) {
                                this_form.find('#chimpy_signup_'+context+'_error').children().html(result['message']);
                                this_form.find('#chimpy_signup_'+context+'_error').fadeIn();
                            }
                            else {
                                this_form.find('#chimpy_signup_'+context+'_success').children().html(result['message']);
                                this_form.find('#chimpy_signup_'+context+'_success').fadeIn();

                                var date = new Date();
                                date.setTime(date.getTime() + (5 * 365 * 24 * 60 * 60 * 1000));
                                jQuery.cookie('chimpy_s', '1', { expires: date, path: '/' });

                                if (context == 'lock') {
                                    setTimeout(function() {
                                        location.reload();
                                    }, 2000);
                                }
                                else if (typeof result['redirect_url'] !== 'undefined' && result['redirect_url']) {
                                    setTimeout(function() {
                                        location.replace(result['redirect_url']);
                                    }, 1000);
                                }
                            }

                            if (this_form.hasClass('sky-form-modal')) {
                                this_form.css('top', '50%').css('left', '50%').css('margin-top', -this_form.outerHeight()/2).css('margin-left', -this_form.outerWidth()/2);
                            }
                        });
                    }
                );
            });
        }
    }

});
