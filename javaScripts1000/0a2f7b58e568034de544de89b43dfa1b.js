(function ($) {

    function reset_form(selector) {

        selector.find('input[type="text"]').val('');
        selector.find('input[type="email"]').val('');
        selector.find('input[type="password"]').val('');
        selector.find('input[type="number"]').val('');
        selector.find('textarea').val('');
        selector.find('input[type="checkbox"]').removeAttr('checked');
        selector.find('option').removeAttr('selected');
        selector.find('.sbHolder > a:nth-child(2)').each(function () {
            var replace_html = $(this).parent().find('ul > li > a').html();
            $(this).html(replace_html);
        });
        selector.find('.ufb-uploaded-files').val('');
        selector.find('.ufb-file-preview').html('');
        if ($(selector).find('#g-recaptcha-response').length > 0) {
            grecaptcha.reset();
        }
        if ((selector).find('.wp-editor-wrap').length > 0) {

            tinyMCE.activeEditor.setContent('');
        }
    }

    $(function () {
        $('.ufb-front-form').submit(function (e) {

            e.preventDefault();
            var selector = $(this);
            if (selector.find('.ufb-wp-editor').length > 0) {
                tinyMCE.triggerSave();
            }
            var form_data = selector.serializeArray();
            var captchaResponse = $(this).find('#g-recaptcha-response').val();
            captchaResponse = (captchaResponse) ? captchaResponse : '';
            var ignore_fields = [];
            $(this).closest('form').find('.ufb-hidden-by-default').each(function () {
                if (!$(this).is(':visible')) {
                    ignore_fields.push($(this).data('field-id'));
                }
            });
            $.ajax({
                url: frontend_js_obj.ajax_url,
                type: 'post',
                data: {
                    _wpnonce: frontend_js_obj.ajax_nonce,
                    form_data: form_data,
                    captchaResponse: captchaResponse,
                    action: 'ufb_front_form_action',
                    ignore_fields: ignore_fields

                },
                beforeSend: function () {
                    selector.find('.ufb-form-loader').show();
                    selector.find('.ufb-error').html('');
                    $('.ufb-form-message').slideUp(300);
                },
                success: function (res) {
                    selector.find('.ufb-form-loader').hide();
                    console.log(res);
                    res = $.parseJSON(res);
                    if (res.error_flag == 1) {
                        for (error_key in res.error_keys) {
                            selector.find('div[data-error-key="' + error_key + '"]').html(res.error_keys[error_key]);
                        }
                        selector.find('.ufb-form-message').html(res.response_message).removeClass('ufb-success-message').addClass('ufb-error-message').slideDown(300);
                        if (selector.find('#g-recaptcha-response').length > 0) {
                            grecaptcha.reset();
                        }
                    } else {
                        selector.find('.ufb-form-message').html(res.response_message).removeClass('ufb-error-message').addClass('ufb-success-message').slideDown(300);
                        selector.find('.ufb-error').html('');
                        if (res.form_hide && res.form_hide == 1) {
                            selector.closest('form').find('.ufb-inner-form-wrap').slideUp('slow');
                        }
                        reset_form(selector);
                        if (res.redirect_url != '' && res.redirect_url) {
                            window.location = res.redirect_url;
                        }

                    }
                }
            });

        });

        $('.ufb-front-form input[type="text"],.ufb-front-form input[type="email"],.ufb-front-form input[type="email"],.ufb-front-form textarea,.ufb-front-form input[type="password"]').keyup(function () {
            $(this).closest('.ufb-form-field').find('.ufb-error').html('');
        });
        $('.ufb-front-form input[type="radio"],.ufb-front-form input[type="checkbox"]').click(function () {
            $(this).closest('.ufb-form-field').find('.ufb-error').html('');
        });
        $('.ufb-front-form select').change(function () {
            $(this).closest('.ufb-form-field').find('.ufb-error').html('');
        });

        $('.ufb-math-captcha-ans').keyup(function () {
            $(this).closest('.ufb-form-field-wrap').find('.ufb-error').html('');
        });

        /**
         * Custom dropdown
         */
        $(".ufb-template-1 .ufb-form-dropdown,.ufb-template-2 .ufb-form-dropdown,.ufb-template-3 .ufb-form-dropdown,.ufb-template-4 .ufb-form-dropdown,.ufb-template-5 .ufb-form-dropdown").selectbox();

        $('.ufb-form-reset').click(function (e) {
            //e.preventDefault();
            var selector = $(this).closest('form');
            reset_form(selector);
        });

        /**
         * Datepicker initialization
         */
        $('.ufb-form-datepicker').datepicker();
        $('.ufb-form-datepicker').each(function () {
            var date_format = $(this).data('date-format');
            if ($.trim(date_format) == '') {
                date_format = 'yy-mm-dd';
            }

            $(this).datepicker("option", "dateFormat", date_format);
        });

        /**
         * UI Slider Initialization
         */
        $('.ufb-front-form .ufb-ui-slider').each(function () {
            var selector = $(this);
            var min_value = $(this).data('min-value');
            var max_value = $(this).data('max-value');
            var step = $(this).data('step');
            var pre_value = String($(this).data('pre-value'));
            pre_value = (pre_value == '') ? min_value : pre_value;
            $(this).slider({
                min: min_value,
                max: max_value,
                step: step,
                value: pre_value,
                range: 'min',
                slide: function (event, ui) {
                    $(this).closest('.ufb-form-field').find('.ufb-slider-value').html(ui.value);
                    $(this).closest('.ufb-form-field').find('.ufb-ui-slider-value').val(ui.value);
                },
                change: function (event, ui) {
                    selector.closest('.ufb-form-field-wrap').find('.ufb-error').html('');
                }
            });



        });
        $('.ufb-front-form .ufb-range-slider').each(function () {
            var selector = $(this);
            var min_value = $(this).data('min-value');
            var max_value = $(this).data('max-value');
            var step = $(this).data('step');
            var pre_value = String($(this).data('pre-value'));
            var pre_value_array = pre_value.split('-');
            if (pre_value_array.length == 1) {
                pre_value_array = pre_value;
            }
            if (typeof (pre_value_array) === 'string') {
                $(this).slider({
                    min: min_value,
                    max: max_value,
                    step: step,
                    range: true,
                    slide: function (event, ui) {
                        slider_min_value = ui.values[0];
                        slider_max_value = ui.values[1];
                        $(this).closest('.ufb-form-field').find('.ufb-slider-value').html(slider_min_value + ' - ' + slider_max_value);
                        $(this).closest('.ufb-form-field').find('.ufb-ui-slider-value').val(slider_min_value + ' - ' + slider_max_value);
                    },
                    change: function (event, ui) {

                        selector.closest('.ufb-form-field-wrap').find('.ufb-error').html('');
                    }
                });
            } else {
                $(this).slider({
                    min: min_value,
                    max: max_value,
                    step: step,
                    values: pre_value_array,
                    range: true,
                    slide: function (event, ui) {
                        slider_min_value = ui.values[0];
                        slider_max_value = ui.values[1];
                        $(this).closest('.ufb-form-field').find('.ufb-slider-value').html(slider_min_value + ' - ' + slider_max_value);
                        $(this).closest('.ufb-form-field').find('.ufb-ui-slider-value').val(slider_min_value + ' - ' + slider_max_value);
                    },
                    change: function (event, ui) {

                        selector.closest('.ufb-form-field-wrap').find('.ufb-error').html('');
                    }
                });
            }
        });

        /** Like Dislike **/
        $('.ufb-thumb').click(function () {
            $('.ufb-thumb').removeClass('ufb-active-thumb');
            $(this).addClass('ufb-active-thumb');
            var thumb_value = $(this).find('.ufb-thumb-value').html();
            $(this).closest('.ufb-form-field').find('.ufb-thumb-store-value').val(thumb_value);
        });


        /** File Uploader initialization */
        var upload_counter = 0;
        var uploader = {};
        $('.ufb-file-uploader').each(function () {
            upload_counter++;
            var attr_element_id = $(this).attr('id');
            var arr_element_id = attr_element_id.split('-');
            var element_id = arr_element_id[3];
            var extensions = $(this).data('extensions');
            var extensions_array = extensions.split(',');
            var size = $(this).data('max-upload-size');
            var multiple_upload = $(this).data('multiple-uploads');
            var limit_flag = 0;
            var selector = $(this);
            var upload_limit = $(this).data('multiple-upload-limit');
            var uploader_label = $(this).data('upload-label');
            var upload_limit_message = $(this).data('multiple-upload-error-message');
            var extension_error_message = $(this).data('extension-error-message')



            uploader['uploader' + upload_counter] = new qq.FileUploader({
                element: document.getElementById(attr_element_id),
                // path to server-side upload script
                // action: '/server/upload'
                action: frontend_js_obj.ajax_url,
                params: {
                    action: 'ufb_file_upload_action',
                    file_uploader_nonce: frontend_js_obj.ajax_nonce,
                    allowedExtensions: extensions_array,
                    sizeLimit: size,
                    element_id: element_id

                },
                allowedExtensions: extensions_array,
                sizeLimit: size, // 100mb
                minSizeLimit: 50,
                uploadButtonText: uploader_label,
                onSubmit: function (id, fileName) {
                    if (multiple_upload == true && upload_limit != -1) {
                        var limit_counter = selector.parent().find('.ufb-multiple-upload-limit').val();
                        limit_counter++;
                        selector.parent().find('.ufb-multiple-upload-limit').val(limit_counter);
                        if (limit_counter > upload_limit) {
                            if (limit_flag == 0) {
                                upload_limit_message = (upload_limit_message != '') ? upload_limit_message : 'Maximum number of files allowed is ' + upload_limit;
                                selector.parent().find('.ufb-error').html(upload_limit_message);
                                limit_flag = 1;
                            }
                            selector.parent().find('.ufb-multiple-upload-limit').val(upload_limit);
                            return false;
                        }
                    }
                },
                onProgress: function (id, fileName, loaded, total) {},
                onComplete: function (id, fileName, responseJSON) {

                    if (responseJSON.success) {

                        $('#' + attr_element_id).closest('.ufb-form-field').find('.ufb-error').html('');
                        var extension_array = fileName.split('.');
                        var extension = extension_array.pop();

                        if (extension == 'jpg' || extension == 'jpeg' || extension == 'png' || extension == 'gif' || extension == 'JPG' || extension == 'JPEG' || extension == 'PNG' || extension == 'GIF') {
                            var preview_img = responseJSON.url;
                        } else {
                            var preview_img = frontend_js_obj.preview_img;
                        }
                        var preview_html = '<div class="ufb-pro-prev-holder"><span class="ufb-prev-name">' + fileName + '</span><img src="' + preview_img + '" /><span class="ufb-pro-preview-remove" data-path="' + responseJSON.path + '" data-url="' + responseJSON.url + '" data-id="' + element_id + '" data-attachment-id="' + responseJSON.attachment_id + '">x</span></div>';
                        if (multiple_upload) {
                            var url = responseJSON.url;
                            var added_url = $('#' + attr_element_id).closest('.ufb-form-field').find('.ufb-uploaded-files').val();
                            if (added_url == '') {
                                added_url = url;

                            } else {
                                var added_url_array = added_url.split(',');
                                added_url_array.push(url);
                                added_url = added_url_array.join();
                            }
                            $('#' + attr_element_id).closest('.ufb-form-field').find('.ufb-uploaded-files').val(added_url);

                            $('#' + attr_element_id).closest('.ufb-form-field').find('.ufb-file-preview').append(preview_html);
                        } else {
                            $('#' + attr_element_id).closest('.ufb-form-field').find('.ufb-uploaded-files').val(responseJSON.url);
                            $('#' + attr_element_id).closest('.ufb-form-field').find('.ufb-file-preview').html(preview_html);

                        }


                    } else {
                        console.log(responseJSON);
                        //alert(responseJSON);
                    }


                },
                onCancel: function (id, fileName) {},
                onError: function (id, fileName, xhr) {},
                messages: {
                    typeError: extension_error_message,
                    sizeError: "{file} is too large, maximum file size is {sizeLimit}.",
                    minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
                    emptyError: "{file} is empty, please select files again without it.",
                    onLeave: "The files are being uploaded, if you leave now the upload will be cancelled."
                },
                showMessage: function (message) {
                    alert(message);
                },
                multiple: multiple_upload
            });

        });

        /**
         * File Delete Action
         */
        $('body').on('click', '.ufb-pro-preview-remove', function () {
            var selector = $(this);
            var path = $(this).data('path');
            var ajax_url = frontend_js_obj.ajax_url;
            var url = $(this).data('url');
            var id = $(this).data('id');
            var attachment_id = $(this).data('attachment-id');

            $.ajax({
                url: ajax_url,
                data: 'action=ufb_file_delete_action&path=' + path + '&_wpnonce=' + frontend_js_obj.ajax_nonce + '&attachment_id=' + attachment_id,
                type: 'post',
                success: function (res) {
                    if (res == 'success') {
                        var prev_url = selector.closest('.ufb-form-field').find('.ufb-uploaded-files').val();
                        var new_url = prev_url.replace(url, '');
                        new_url = new_url.replace(',,', ',');
                        selector.closest('.ufb-form-field').find('.ufb-uploaded-files').val(new_url);
                        var limit_counter = selector.closest('.ufb-form-field').find('.ufb-multiple-upload-limit').val();
                        limit_counter--;
                        limit_counter = (limit_counter < 0) ? 0 : limit_counter;
                        selector.closest('.ufb-form-field').find('.ufb-multiple-upload-limit').val(limit_counter);
                        selector.parent().fadeOut('1500', function () {
                            selector.parent().remove();

                        });
                    }
                }
            });
        });

        /**
         * Next Step Trigger
         */
        $('body').on('click', '.ufb-next-step', function () {
            var selector = $(this);
            var current_step = $(this).data('step-ref');
            var next_step = parseInt(current_step) + 1;
            var form_data = $(this).closest('form').serializeArray();
            var captchaResponse = $(this).closest('form').find('#g-recaptcha-response').val();
            //console.log(captchaResponse);
            captchaResponse = (captchaResponse) ? captchaResponse : '';
            var ignore_fields = [];
            $(this).closest('form').find('.ufb-hidden-by-default').each(function () {
                if (!$(this).is(':visible')) {
                    ignore_fields.push($(this).data('field-id'));
                }
            });
            //  console.log(form_data);
            $.ajax({
                url: frontend_js_obj.ajax_url,
                type: 'post',
                data: {
                    _wpnonce: frontend_js_obj.ajax_nonce,
                    form_data: form_data,
                    current_step: current_step,
                    action: 'ufb_front_form_step_action',
                    captchaResponse: captchaResponse,
                    ignore_fields: ignore_fields

                },
                beforeSend: function () {
                    selector.parent().find('.ufb-form-loader').show();
                    selector.closest('.ufb-each-step-wrap').find('.ufb-error').html('');
                    $('.ufb-step-error[data-step-ref="' + current_step + '"]').slideUp(500);

                },
                success: function (res) {
                    selector.parent().find('.ufb-form-loader').hide();
                    //  console.log(res);
                    res = $.parseJSON(res);
                    if (res.error_flag == 1) {
                        for (error_key in res.error_keys) {
                            selector.closest('.ufb-each-step-wrap').find('div[data-error-key="' + error_key + '"]').html(res.error_keys[error_key]);
                        }
                        var error_message = $('.ufb-step-error[data-step-ref="' + current_step + '"]').data('step-error-message');
                        if (error_message != '') {
                            $('.ufb-step-error[data-step-ref="' + current_step + '"]').html(error_message).slideDown(500);
                        }
                        selector.closest('.ufb-each-step-wrap').find('div[data-step-ref="' + current_step + '"]').html()
                        if (selector.closest('.ufb-each-step-wrap').find('#g-recaptcha-response').length > 0) {
                            grecaptcha.reset();
                        }
                    } else {
                        selector.closest('form').find('.ufb-each-step-heading[data-step-ref="' + next_step + '"]').removeClass('ufb-incomplete-step').addClass('ufb-complete-step');
                        selector.closest('.ufb-each-step-wrap').find('.ufb-error').html('');
                        selector.closest('.ufb-each-step-wrap').hide().next('.ufb-each-step-wrap').show();


                    }
                }
            });
        });

        /**
         * Back Step Trigger
         */
        $('body').on('click', '.ufb-back-step', function () {
            var selector = $(this);
            var back_step = $(this).data('back-ref');
            var current_step = parseInt(back_step) + 1;
            selector.closest('.ufb-each-step-wrap').hide().prev('.ufb-each-step-wrap').show();
            selector.closest('form').find('.ufb-each-step-heading[data-step-ref="' + current_step + '"]').removeClass('ufb-complete-step').addClass('ufb-incomplete-step');
        });

        /**
         * Final Step Trigger
         */
        $('body').on('click', '.ufb-final-step', function () {
            var selector = $(this);
            var form_data = $(this).closest('form').serializeArray();
            var current_step = $(this).data('step-ref');
            var ignore_fields = [];
            $(this).closest('form').find('.ufb-hidden-by-default').each(function () {
                if (!$(this).is(':visible')) {
                    ignore_fields.push($(this).data('field-id'));
                }
            });
            //  console.log(form_data);
            $.ajax({
                url: frontend_js_obj.ajax_url,
                type: 'post',
                data: {
                    _wpnonce: frontend_js_obj.ajax_nonce,
                    form_data: form_data,
                    action: 'ufb_front_form_step_action',
                    ignore_fields: ignore_fields

                },
                beforeSend: function () {
                    selector.parent().find('.ufb-form-loader').show();
                    selector.closest('.ufb-each-step-wrap').find('.ufb-error').html('');
                    $('.ufb-step-error[data-step-ref="' + current_step + '"]').slideUp(500);

                },
                success: function (res) {
                    selector.parent().find('.ufb-form-loader').hide();
                    //  console.log(res);
                    res = $.parseJSON(res);
                    if (res.error_flag == 1) {
                        for (error_key in res.error_keys) {
                            selector.closest('.ufb-each-step-wrap').find('div[data-error-key="' + error_key + '"]').html(res.error_keys[error_key]);
                        }
                        var error_message = $('.ufb-step-error[data-step-ref="' + current_step + '"]').data('step-error-message');
                        if (error_message != '') {
                            $('.ufb-step-error[data-step-ref="' + current_step + '"]').html(error_message).slideDown(500);
                        }
                        if (selector.closest('.ufb-each-step-wrap').find('#g-recaptcha-response').length > 0) {
                            grecaptcha.reset();
                        }
                    } else {
                        selector.closest('.ufb-each-step-wrap').find('.ufb-error').html('');
                        selector.closest('.ufb-each-step-wrap').slideUp(500, function () {
                            selector.closest('form').find('.ufb-form-message').html(res.response_message).removeClass('ufb-error-message').addClass('ufb-success-message').slideDown(300);
                            selector.closest('form').find('.ufb-error').html('');
                            reset_form(selector.closest('form'));
                            if (res.redirect_url != '' && res.redirect_url) {
                                window.location = res.redirect_url;
                            }
                        });


                    }
                }
            });
        });

        $('.ufb-condition-trigger').change(function () {
            var value = $(this).val();
            var selector = $(this);
            // alert($(this).attr('type'));
            if ($(this).attr('type') && $(this).attr('type') == 'checkbox') {
                if (!$(this).is(':checked')) {
                    value = '';
                }
            }

            $(this).closest('.ufb-form-field').find('.ufb-logic-refs').each(function () {
                var logic = $(this).data('logic');
                var logic_check_value = $(this).data('logic-check-value');
                var logic_action = $(this).data('logic-action');
                var effect_field = $(this).data('effect-field');
                switch (logic) {
                    case 'equal':
                        if (value == logic_check_value) {
                            if (effect_field != '') {
                                if (logic_action == 'show') {
                                    $('.ufb-form-field-wrap[data-field-id="' + effect_field + '"]').show();
                                } else {
                                    $('.ufb-form-field-wrap[data-field-id="' + effect_field + '"]').hide();
                                }
                            }
                        } else {
                            if (effect_field != '') {
                                if (logic_action == 'show') {
                                    $('.ufb-form-field-wrap[data-field-id="' + effect_field + '"]').hide();
                                } else {
                                    $('.ufb-form-field-wrap[data-field-id="' + effect_field + '"]').show();
                                }
                            }
                        }
                        break;
                    case 'less':
                        value = (value == '') ? 0 : parseInt(value);
                        if (value < logic_check_value) {
                            if (effect_field != '') {
                                if (logic_action == 'show') {
                                    $('.ufb-form-field-wrap[data-field-id="' + effect_field + '"]').show();
                                } else {
                                    $('.ufb-form-field-wrap[data-field-id="' + effect_field + '"]').hide();
                                }
                            }
                        } else {
                            if (effect_field != '') {
                                if (logic_action == 'show') {
                                    $('.ufb-form-field-wrap[data-field-id="' + effect_field + '"]').hide();
                                } else {
                                    $('.ufb-form-field-wrap[data-field-id="' + effect_field + '"]').show();
                                }
                            }
                        }
                        break;
                    case 'greater':
                        value = (value == '') ? 0 : parseInt(value);
                        if (value > logic_check_value) {
                            if (effect_field != '') {
                                if (logic_action == 'show') {
                                    $('.ufb-form-field-wrap[data-field-id="' + effect_field + '"]').show();
                                } else {
                                    $('.ufb-form-field-wrap[data-field-id="' + effect_field + '"]').hide();
                                }
                            }
                        } else {
                            if (effect_field != '') {
                                if (logic_action == 'show') {
                                    $('.ufb-form-field-wrap[data-field-id="' + effect_field + '"]').hide();
                                } else {
                                    $('.ufb-form-field-wrap[data-field-id="' + effect_field + '"]').show();
                                }
                            }
                        }
                        break;
                }
            });

        });

        $('.ufb-info-icon').mouseenter(function () {
            $(this).next('.ufb-info-icon-notes').show();
        });

        $('.ufb-info-icon').mouseleave(function () {
            $(this).next('.ufb-info-icon-notes').hide();
        });

        /*   $('.ufb-form-datepicker').blur(function(){

         $('.ufb-form-datepicker').datepicker( "hide" );
         });
         */
        if (!!$.datepicker) {
            $(document).unbind('mousedown', $.datepicker._checkExternalClick);
            $('html').mousedown($.datepicker._checkExternalClick);
        }
        ;

        $('.ufb-country-dropdown').change(function () {
            var country_name = $(this).val();
            var country_id = $(this).find('option[value="' + country_name + '"]').data('country-id');
            var key = $(this).data('country-trigger-key');
            if ($('.ufb-states-dropdown[data-country-trigger-ref="' + key + '"]').length > 0) {

                var first_label = $('.ufb-states-dropdown[data-country-trigger-ref="' + key + '"]').data('first-option-label');
                $.ajax({
                    type: 'post',
                    url: frontend_js_obj.ajax_url,
                    data: {
                        _wpnonce: frontend_js_obj.ajax_nonce,
                        action: 'ufb_get_states_from_country_action',
                        country_id: country_id,
                        first_label: first_label
                    },
                    beforeSend: function (xhr) {
                        $('.ufb-states-dropdown[data-country-trigger-ref="' + key + '"]').html('<option value="">' + first_label + '</option>');

                    },
                    success: function (res) {

                        $('.ufb-states-dropdown[data-country-trigger-ref="' + key + '"]').html(res);



                    }
                });
            }
        });
        $('.ufb-states-dropdown').change(function () {
            var state_name = $(this).val();
            var state_id = $(this).find('option[value="' + state_name + '"]').data('state-id');
            var key = $(this).data('states-trigger-key');
            if ($('.ufb-city-dropdown[data-states-trigger-ref="' + key + '"]').length > 0) {

                var first_label = $('.ufb-city-dropdown[data-states-trigger-ref="' + key + '"]').data('first-option-label');
                $.ajax({
                    type: 'post',
                    url: frontend_js_obj.ajax_url,
                    data: {
                        _wpnonce: frontend_js_obj.ajax_nonce,
                        action: 'ufb_get_cities_from_state_action',
                        state_id: state_id,
                        first_label: first_label
                    },
                    beforeSend: function (xhr) {
                        $('.ufb-city-dropdown[data-states-trigger-ref="' + key + '"]').html('<option value="">' + first_label + '</option>');

                    },
                    success: function (res) {

                        $('.ufb-city-dropdown[data-states-trigger-ref="' + key + '"]').html(res);



                    }
                });
            }
        });

        $('.ufb-form-reset').click(function () {
            $('.ufb-hidden-by-default').hide();
        });



    }); //document.ready close
}(jQuery));