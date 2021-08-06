function check_form_submittable(form_id)
{
    if (jQuery('#' + form_id + ' .ap-captcha-type').val() == 'human')
    {
        var error_message = jQuery('#' + form_id + ' #ap-captcha-result').attr('data-required-msg');
        if (error_message == '')
        {
            error_message = ap_captcha_error_message;
        }
        var first_num = jQuery('#' + form_id + ' .ap-captcha-first-num').html();
        var second_num = jQuery('#' + form_id + ' .ap-captcha-second-num').html();
        var result = parseInt(first_num) + parseInt(second_num);
        var user_result = jQuery('#' + form_id + ' #ap-captcha-result').val();
        if (result == user_result)
        {
            jQuery('#' + form_id + ' .ap-front-loader').show();
            jQuery('#' + form_id + ' input[type="submit"]').hide();
            return true;
        } else
        {
            jQuery('#' + form_id + ' .ap-captcha-error-msg').html(error_message);
            return false;
        }
        return false;
    } else if (jQuery('#' + form_id + ' .ap-captcha-type').val() == 'google')
    {
        if (jQuery('#' + form_id + ' .ap-captcha-version').val() == 'v1') {
            challengeField = jQuery("input#recaptcha_challenge_field").val();
            responseField = jQuery("input#recaptcha_response_field").val();
            var html = jQuery.ajax({
                type: "POST",
                url: ap_fileuploader.upload_url,
                data: "action=ap_validate_recaptcha&recaptcha_challenge_field=" + challengeField + "&recaptcha_response_field=" + responseField + '&_wpnonce=' + ap_fileuploader.nonce + '&form_id=' + form_id,
                async: false,
                beforeSend: function (xhr) {
                    jQuery('#' + form_id + ' .ap-front-loader').show();
                }
            }).responseText;
            if (html == "success") {
                jQuery('#' + form_id + ' .ap-front-loader').show();
                jQuery('#' + form_id + ' input[type="submit"]').hide();

                //return true;
                //Add the Action to the Form
                //Indicate a Successful Captcha
                //jQuery("#captcha-status").html("<p>Success! Thanks you may now proceed.</p>");
            } else {
                jQuery('#' + form_id + ' .ap-front-loader').hide();


                var error_message = jQuery('#' + form_id + ' .ap-captcha-error').attr('data-error-message');
                if (error_message == '')
                {
                    error_message = ap_captcha_error_message;
                }
                jQuery('#' + form_id + ' .ap-captcha-error').html(error_message);
                Recaptcha.reload();
                return false;
            }
        } else {
            var captcha_val = jQuery('#g-recaptcha-response').val();
            if (captcha_val != '') {
                jQuery('#' + form_id + ' .ap-front-loader').show();
                var response = jQuery.ajax({
                    type: 'POST',
                    url: ap_fileuploader.upload_url, // The file we're making the request to
                    data: 'captchaResponse=' + captcha_val + '&action=ap_validate_recaptcha&form_id=' + form_id + '&_wpnonce=' + ap_fileuploader.nonce,
                    async: false,
                    beforeSend: function (xhr) {
                        //alert('test');
                        jQuery('#' + form_id + ' .ap-front-loader').show();
                    }
                }).responseText;
                if (response != 'SPAM') {
                    jQuery('#' + form_id + ' .ap-front-loader').show();
                    jQuery('#' + form_id + ' input[type="submit"]').hide();

                    return true;
                } else {
                    jQuery('#' + form_id + ' .ap-front-loader').hide();
                    var error_message = jQuery('#' + form_id + ' .ap-captcha-error').attr('data-error-message');
                    if (error_message == '')
                    {
                        error_message = ap_captcha_error_message;
                    }
                    jQuery('#' + form_id + ' .ap-captcha-error').html(error_message);
                    return false;
                }


            } else {
                var error_message = jQuery('#' + form_id + ' .ap-captcha-error').attr('data-error-message');
                if (error_message == '')
                {
                    error_message = ap_captcha_error_message;
                }
                jQuery('#' + form_id + ' .ap-captcha-error').html(error_message);
                return false;
            }


        }



    } else
    {
        jQuery('#' + form_id + ' .ap-front-loader').show();
        jQuery('#' + form_id + ' input[type="submit"]').hide();
        return true;
    }

}
function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (!emailReg.test($email)) {
        return false;
    } else {
        return true;
    }
}

(function ($) {
    $(function () {


        //All js related for frontend

        //Checking  required fields

        $('.ap-pro-front-form .ap-pro-submit-btn').click(function () {
            var error_flag = 0;
            var id = $(this).closest('.ap-pro-front-form').attr('id');
            if ($('#' + id + ' .ap-form-wp-editor').length > 0)
            {
                tinyMCE.triggerSave();
                if ($('#' + id + ' .ap-character-limit-flag').length > 0 && $('#' + id + ' .ap-character-limit-flag').val() == 1) {

                    error_flag = 1;
                }

            }
            if ($('#' + id + ' .ap-form-content-editor').length > 0)
            {
                if ($.trim($('#' + id + ' .ap-form-content-editor').val()) == '' && $('#' + id + ' .ap-form-content-error').attr('data-required') == 'required')
                {
                    error_flag = 1;
                    var error_msg = $('#' + id + ' .ap-form-content-error').attr('data-required-msg');
                    if (error_msg == '')
                    {
                        error_msg = ap_form_required_message;
                    }
                    $('#' + id + ' .ap-form-content-error').html(error_msg);
                }
            }


            $('#' + id + ' input').each(function () {
                if ($(this).hasClass('ap-required-field') && $.trim($(this).val()) == '')
                {
                    error_flag = 1;
                    var error_msg = $(this).attr('data-required-msg');
                    if (error_msg == '')
                    {
                        error_msg = ap_form_required_message;
                    }
                    $(this).closest('.ap-pro-form-field-wrapper').find('.ap-form-error').html(error_msg);
                }
                if ($(this).hasClass('ap-email-field') && $.trim($(this).val() != ''))
                {
                    if (!validateEmail($(this).val()))
                    {
                        error_flag = 1;
                        var error_msg = $(this).attr('data-required-msg');
                        if (error_msg == '')
                        {
                            error_msg = ap_form_required_message;
                        }
                        $(this).closest('.ap-pro-form-field-wrapper').find('.ap-form-error').html(error_msg);
                    }

                }
                if ($(this).attr('name') == 'ap_form_post_image' && $(this).val() != '') {
                    var file = $(this).val();
                    var file_array = file.split('\\');
                    var filename = file_array.pop();
                    var filename_array = filename.split('.');
                    var extension = filename_array.pop();
                    extension = extension.toLowerCase();
                    if (!(extension == 'jpg' || extension == 'jpeg' || extension == 'png' || extension == 'gif')) {
                        error_flag = 1;
                        $(this).closest('.ap-pro-form-field-wrapper').find('.ap-form-error').html('Unsupported filetype');
                    }
                }
            });

            $('#' + id + ' textarea.ap-pro-textarea').each(function () {
                if ($(this).hasClass('ap-required-field') && $.trim($(this).val()) == '')
                {
                    error_msg = $(this).attr('data-required-msg');
                    if (error_msg == '')
                    {
                        error_msg = ap_form_required_message;
                    }
                    $(this).closest('.ap-pro-form-field-wrapper').find('.ap-form-error').html(error_msg);
                }
            });
            $('#' + id + ' select').each(function () {

                if ($(this).hasClass('ap-required-field') && $.trim($(this).val()) == '')
                {
                    error_flag = 1;
                    error_msg = $(this).attr('data-required-msg');
                    if (error_msg == '')
                    {
                        error_msg = ap_form_required_message;
                    }
                    $(this).closest('.ap-pro-form-field-wrapper').find('.ap-form-error').html(error_msg);
                }
            });

            $('#' + id + ' .ap-radio-wrap').each(function () {
                if ($(this).hasClass('ap-required-field') && $(this).find('input[type="radio"]:checked').length == 0)
                {
                    error_flag = 1;
                    error_msg = $(this).attr('data-required-msg');
                    if (error_msg == '')
                    {
                        error_msg = ap_form_required_message;
                    }
                    $(this).closest('.ap-pro-form-field-wrapper').find('.ap-form-error').html(error_msg);
                }

            });
            $('#' + id + ' .ap-checkbox-wrap').each(function () {
                if ($(this).hasClass('ap-required-field') && $(this).find('input[type="checkbox"]:checked').length == 0)
                {
                    error_flag = 1;
                    error_msg = $(this).attr('data-required-msg');
                    if (error_msg == '')
                    {
                        error_msg = ap_form_required_message;
                    }
                    $(this).closest('.ap-pro-form-field-wrapper').find('.ap-form-error').html(error_msg);
                }

            });
            if ($('#' + id + ' .ap-agreement-checkbox').length > 0 && !$('#' + id + ' .ap-agreement-checkbox').is(":checked"))
            {
                error_flag = 1;
                var error_msg = $('#' + id + ' .ap-agreement-checkbox').attr('data-required-msg');
                if (error_msg == '')
                {
                    error_msg = ap_form_required_message;
                }
                $('#' + id + ' .ap-agreement-error').html(error_msg);
            }

            if (error_flag == 1)
            {
                $('#' + id + ' .ap-form-error').each(function () {
                    var selector = $(this);
                    if (selector.html() != '') {
                        $('html,body').animate({
                            scrollTop: selector.closest('.ap-pro-form-field-wrapper').offset().top - 100},
                                'slow');
                        return false;
                    }
                    ;
                });



                return false;
            } else
            {
                return true;
            }

        });
        $('.ap-pro-front-form input[type="text"]').keyup(function () {
            $(this).closest('.ap-pro-form-field-wrapper').find('.ap-form-error').html('');
        });

        $('.ap-pro-front-form textarea.ap-pro-textarea').keyup(function () {
            $(this).closest('.ap-pro-form-field-wrapper').find('.ap-form-error').html('');
        });
        $('.ap-form-content-editor').keyup(function () {
            $('.ap-form-content-error').html('');
        });

        $('.ap-pro-front-form select,.ap-pro-front-form input[type="checkbox"]').change(function () {
            $(this).closest('.ap-pro-form-field-wrapper').find('.ap-form-error').html('');
        });
        $('.ap-form-content-editor').change(function () {
            $('.ap-form-content-error').html('');
        });

        $('.ap-pro-datepicker').datepicker();
        $('.ap-pro-datepicker').each(function () {
            var date_format = $(this).data('date-format');
            date_format = (date_format) ? date_format : 'yy-mm-dd';
            $(this).datepicker("option", "dateFormat", date_format);
        });

        $('.ap-agreement-checkbox').click(function () {
            if ($(this).is(':checked'))
            {
                $(this).closest('.ap-form-agreement-wrap').find('.ap-agreement-error').html('');
            } else
            {
                var error_msg = $(this).attr('data-required-msg');
                if (error_msg == '')
                {
                    error_msg = ap_form_required_message;
                }
                $(this).closest('.ap-form-agreement-wrap').find('.ap-agreement-error').html(error_msg);
            }

        });

        /*----------File Uploader-----------------*/
        var uploader_counter = 0;
        var uploader = {};
        $('.ap-file-uploader').each(function () {
            var $selector = $(this);
          //  uploader_counter++;
            var attr_element_id = $(this).attr('id');
            var arr_element_id = attr_element_id.split('-');
            var element_id = arr_element_id[3];
            uploader_counter = element_id;
            var extensions = $(this).attr('data-extensions');
            var extensions_array = extensions.split('|');
            var size = $(this).attr('data-size');
            var multiple_upload = $(this).attr('data-multiple');
            var limit_flag = 0;
            var upload_limit = $(this).attr('data-upload-limit');
            var selector = $(this);
            var uploader_label = $(this).data('uploader-label');
            var upload_limit_message = $(this).data('upload-limit-message');
            var media_attachment = $(this).data('media-attachment');
            var custom_folder = $(this).data('cf');
            var upload_nonce = $('#ap_form_nonce').val();
            uploader['uploader' + uploader_counter] = new qq.FileUploader({
                element: document.getElementById('ap-file-uploader-' + uploader_counter),
                // path to server-side upload script
                // action: '/server/upload'
                action: ap_fileuploader.upload_url,
                params: {
                    action: 'ap_file_upload_action',
                    file_uploader_nonce: upload_nonce,
                    allowedExtensions: extensions_array,
                    sizeLimit: size,
                    element_id: element_id,
                    custom_folder: custom_folder

                },
                allowedExtensions: extensions_array,
                sizeLimit: size, // 100mb
                minSizeLimit: 500,
                uploadButtonText: uploader_label,
                onSubmit: function (id, fileName) {
                    if (multiple_upload == true && upload_limit != -1) {
                        var limit_counter = selector.parent().find('.ap-pro-upload-counter').val();
                        limit_counter++;
                        selector.parent().find('.ap-pro-upload-counter').val(limit_counter);
                        //limit_counter = $('#ap-pro-file-preview'+id+' .ap-pro-prev-holder').length;
                        //alert(limit_counter);
                        if (limit_counter > upload_limit) {
                            if (limit_flag == 0) {
                                upload_limit_message = (upload_limit_message != '') ? upload_limit_message : 'Maximum number of files allowed is ' + upload_limit;
                                selector.parent().find('.ap-upload-limit-error').html(upload_limit_message);

                                //console.log(id);
                                //alert('Maximum number of files allowed is '+upload_limit);
                                limit_flag = 1;
                            }
                            selector.parent().find('.ap-pro-upload-counter').val(upload_limit);
                            return false;
                        }
                    }
                },
                onProgress: function (id, fileName, loaded, total) {
                },
                onComplete: function (id, fileName, responseJSON) {
                    //alert(id);

                    //console.log(responseJSON);
                    if (responseJSON.success)
                    {
                        //tinyMCE.triggerSave();
                        $('#ap-pro-file-url-' + element_id).closest('.ap-pro-form-field-wrapper').find('.ap-form-error').html('');
                        var extension_array = fileName.split('.');
                        var extension = extension_array.pop();
                        if (extension == 'jpg' || extension == 'jpeg' || extension == 'png' || extension == 'gif' || extension == 'JPG' || extension == 'JPEG' || extension == 'PNG' || extension == 'GIF') {

                            var preview_html = '<div class="ap-pro-prev-holder"><span class="ap-prev-name">' + fileName + '</span><img src="' + responseJSON.url + '" /><span class="ap-pro-preview-remove"  data-url="' + responseJSON.url + '" data-id="' + element_id + '" data-attachment-id="' + responseJSON.attachment_id + '" data-attachment-code="' + responseJSON.attachment_code + '">x</span></div>';
                        } else {

                            var preview_html = '<div class="ap-pro-prev-holder"><span class="ap-prev-name">' + fileName + '</span><span class="ap-pro-preview-remove"  data-url="' + responseJSON.url + '" data-id="' + element_id + '" data-attachment-id="' + responseJSON.attachment_id + '" data-attachment-code="' + responseJSON.attachment_code + '">x</span></div>';
                        }
                        if (multiple_upload)
                        {
                            var url = responseJSON.url;
                            var previous_url = $('#ap-pro-file-url-' + element_id).val();
                            if (previous_url == '')
                            {
                                $('#ap-pro-file-url-' + element_id).val(url);
                            } else
                            {
                                $('#ap-pro-file-url-' + element_id).val(previous_url + ',' + url);
                            }
                            $('#ap-pro-file-preview' + element_id).append(preview_html);
                        } else
                        {
                            if ($selector.hasClass('ap-post-image-uploader')) {
                                $('#ap-pro-file-url-' + element_id).val(responseJSON.attachment_id);
                            } else {

                                $('#ap-pro-file-url-' + element_id).val(responseJSON.url);
                            }
                            $('#ap-pro-file-preview' + element_id).html(preview_html);

                        }

                        if (media_attachment == 1) {
                            var attachment_ids = selector.closest('form').find('.ap-attachment-ids').val();
                            if (attachment_ids != '') {
                                var attachment_ids_array = attachment_ids.split(',');
                                attachment_ids_array.push(responseJSON.attachment_id);
                                var attachment_ids = attachment_ids_array.join();
                                selector.closest('form').find('.ap-attachment-ids').val(attachment_ids);
                            } else {
                                selector.closest('form').find('.ap-attachment-ids').val(responseJSON.attachment_id);
                            }
                        }
                    }

                },
                onCancel: function (id, fileName) {
                },
                onError: function (id, fileName, xhr) {
                },
                messages: {
                    typeError: " {file} has invalid extension. Only {extensions} are allowed.",
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
        if ($('.ap-content-file-uploader').length > 0)
        {

            $('.ap-content-file-uploader').each(function () {
                var id = $(this).attr('id');
                var link_source_url = $(this).data('link-source-url');
                var lightbox_rel_attr = $(this).data('lightbox-rel-attr');
                var uploadSizeLimit = $(this).attr('data-upload-size');
                var upload_nonce = $('#ap_form_nonce').val();
                var content_image_uploader = new qq.FileUploader({
                    element: document.getElementById(id),
                    // path to server-side upload script
                    // action: '/server/upload'
                    action: ap_fileuploader.upload_url,
                    params: {
                        action: 'ap_file_upload_action',
                        file_uploader_nonce: upload_nonce,
                        allowedExtensions: ['jpg', 'png', 'gif', 'jpeg'],
                        sizeLimit: uploadSizeLimit,
                    },
                    allowedExtensions: ['jpg', 'png', 'gif', 'jpeg'],
                    sizeLimit: uploadSizeLimit, // 100mb
                    minSizeLimit: 500,
                    onSubmit: function (id, fileName) {

                    },
                    onProgress: function (id, fileName, loaded, total) {
                    },
                    onComplete: function (id, fileName, responseJSON) {

                        //console.log(responseJSON);
                        if (responseJSON.success)
                        {
                            tinyMCE.triggerSave();
                            if (link_source_url == 1) {
                                if (lightbox_rel_attr == 1) {
                                    var insert_content = '<a href="' + responseJSON.url + '" rel="lightbox"><img src="' + responseJSON.url + '" class="size-full wp-image-' + responseJSON.attachment_id + '" alt="' + fileName + '"/></a>';
                                } else {

                                    var insert_content = '<a href="' + responseJSON.url + '"><img src="' + responseJSON.url + '" class="size-full wp-image-' + responseJSON.attachment_id + '" alt="' + fileName + '"/></a>';
                                }
                            } else {

                                var insert_content = '<img src="' + responseJSON.url + '" class="size-full wp-image-' + responseJSON.attachment_id + '" alt="' + fileName + '"/>';
                            }
                            tinyMCE.activeEditor.execCommand('mceInsertContent', false, insert_content);

                            $('#ap-content-file-uploader .qq-upload-list').html('');
                        }

                    },
                    onCancel: function (id, fileName) {
                    },
                    onError: function (id, fileName, xhr) {
                    },
                    messages: {
                        typeError: " {file} has invalid extension. Only {extensions} are allowed.",
                        sizeError: "{file} is too large, maximum file size is {sizeLimit}.",
                        minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
                        emptyError: "{file} is empty, please select files again without it.",
                        onLeave: "The files are being uploaded, if you leave now the upload will be cancelled."
                    },
                    showMessage: function (message) {
                        alert(message);
                    },
                    multiple: false
                });
            });
        }



        /*----------File Uploader-----------------*/

        // tinyMCE.execCommand('mceInsertContent', false, "some text");
//            tinyMCE.triggerSave();
        /**
         * File Delete Action
         */
        $('body').on('click', '.ap-pro-preview-remove', function () {
            var selector = $(this);
            var ajax_url = ap_fileuploader.upload_url;
            var url = $(this).data('url');
            var id = $(this).data('id');
            var attachment_id = $(this).data('attachment-id');
            attachment_id = $.trim(attachment_id);
            var attachment_code = $(this).data('attachment-code');
            $.ajax({
                url: ajax_url,
                data: 'action=ap_file_delete_action&_wpnonce=' + ap_fileuploader.nonce + '&attachment_id=' + attachment_id + '&attachment_code=' + attachment_code,
                type: 'post',
                success: function (res) {
                    if (res == 'success') {
                        var attachment_ids = selector.closest('form').find('.ap-attachment-ids').val();
                        attachment_ids = $.trim(attachment_ids);
                        var attachment_ids_array = attachment_ids.split(',');
                        var attachment_index = attachment_ids_array.indexOf(attachment_id);
                        if (attachment_index != -1) {
                            attachment_ids_array.splice(attachment_index, 1);
                            var attachment_ids = attachment_ids_array.join();
                            selector.closest('form').find('.ap-attachment-ids').val(attachment_ids);
                        }

                        var prev_url = $('#ap-pro-file-url-' + id).val();
                        //alert(prev_url);
                        var new_url = prev_url.replace(url, '');
                        new_url = new_url.replace(',,', ',');
                        $('#ap-pro-file-url-' + id).val(new_url);
                        var limit_counter = $('#ap-pro-upload-counter-' + id).val();
                        //console.log(limit_counter);
                        limit_counter--;
                        //selector.closest('.ap-pro-form-field').find('.ap-upload-limit-error').html('');
                        $('#ap-pro-upload-counter-' + id).val(limit_counter);
                        selector.parent().fadeOut('1500', function () {
                            selector.parent().remove();

                        });
                    } else {
                        alert('No script kiddies please!');
                    }
                }
            });
        });

        /** Limit Characters */
        if ($('.ap-pro-character-limit').length > 0) {
            var editor_char_limit = $('.ap-pro-character-limit').val();

            // jQuery ready fires too early, use window.onload instead
            window.onload = function () {
                var char_limit_message = $('.ap-pro-character-limit-message').val();
                jQuery('.mce-statusbar').append('<span class="word-count-message">' + char_limit_message + '</span>');

                tinyMCE.activeEditor.onKeyUp.add(function () {
                    $('.ap-form-content-error').html('');
                    // Strip HTML tags, WordPress shortcodes and white space
                    editor_content = this.getContent().replace(/(<[a-zA-Z\/][^<>]*>|\[([^\]]+)\])|(\s+)/ig, '');
                    //console.log(editor_content.length);
                    if (editor_content.length > editor_char_limit) {
                        jQuery('.mce-statusbar').addClass('toomanychars');
                        $('.ap-character-limit-flag').val(1);
                        //error_flag = 1;
                    } else {
                        jQuery('.mce-statusbar').removeClass('toomanychars');
                        $('.ap-character-limit-flag').val(0);
                        //error_flag = 0;
                    }
                });
            }
        }

        $('input[name="ap_form_post_image"]').change(function () {
            var file = $(this).val();
            var file_array = file.split('\\');
            var filename = file_array.pop();
            var filename_array = filename.split('.');
            var extension = filename_array.pop();
            if (!(extension == 'jpg' || extension == 'jpeg' || extension == 'png' || extension == 'gif' || extension == 'JPG' || extension == 'JPEG' || extension == 'PNG' || extension == 'GIF')) {

                $(this).closest('.ap-pro-form-field-wrapper').find('.ap-form-error').html('Unsupported filetype');
            } else {
                $(this).closest('.ap-pro-form-field-wrapper').find('.ap-form-error').html('');
            }
        });


    }); //document.ready close

}(jQuery));