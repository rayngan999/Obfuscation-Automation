jQuery(function ($) {

    var app = {};

    // window.fn_recaptcha = function () {
    //     alert("grecaptcha is ready!");
    // };
    //
    // window.recaptchaCallback = function () {
    //     console.log('test');
    // }
    
    $('.reset-modal-trigger').on('click', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();

        if ($(this).hasClass('loading')) {
            return;
        }

        var container = $(this).addClass('loading');

        console.log('download trigger');

        var d = {
            'action': 'fn_download_file',
            'sec': $(this).find('a.container').data('nonce'),
            'payment_id': $(this).find('a.container').data('payment_id'),
            'purchase_id': $(this).find('a.container').data('purchase_id'),
            'email': $(this).find('a.container').data('email'),
            'filekey': $(this).find('a.container').data('filekey'),
            'download_id': $(this).find('a.container').data('download_id'),
            'price_id': $(this).find('a.container').data('price_id'),
        }

        $.ajax(fndrm.url, {
            data: d,
            dataType: 'json',
            method: 'POST',
            success: function (response) {

                if (response.success && response.data) {
                    app.process_download(response.data)
                } else {
                    app.open_modal(d.payment_id);
                }

                setTimeout(function(){
                    container.removeClass('loading');
                }, 2000)

            }, error: function (error) {
                container.removeClass('loading');
            }
        });
    })

    app.process_download = function(url){
        var a = document.createElement('A');
        a.href = url;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    app.open_modal = function (payment_id) {
        $.featherlight($('#reset-download-modal'), {
            variant: 'fn-reset-download-modal',
            afterOpen: function (e, f) {
                var input = this.$content.find('input[name=payment_id]');
                if (input) {
                    input.val(payment_id);
                }
            }
        });
    }

    $('#reset-download-form').on('submit', function (e) {
        e.preventDefault();

        $(this).addClass('loading')

       var btn = $(this).find('button').attr('disabled', true)

        var fdata = app.of($(this).serializeArray());


        $.ajax(fndrm.url, {
            data: fdata,
            dataType: 'json',
            method: 'POST',
            success: function (response) {
                if (response.success) {

                    btn.fadeOut();
                    $('#reset-download-form .message').find('.loading').fadeOut(function(){
                        $('#reset-download-form .message').find('.success').fadeIn()
                    })

                } else {
                    btn.fadeOut();
                    $('#reset-download-form .message').find('.loading').fadeOut(function(){
                        $('#reset-download-form .message').find('.error').fadeIn()
                    })
                }

                console.log(response);

            }, error: function (error) {
                console.log(error.responseText);
                btn.fadeOut();
                $('#reset-download-form .message').find('.loading').fadeOut(function(){
                    $('#reset-download-form .message').find('.error').fadeIn()
                })

            }
        });
    });

    app.of = function (fa) {
        var ra = {};
        for (var i = 0; i < fa.length; i++) {
            ra[fa[i]['name']] = fa[i]['value'];
        }
        return ra;
    };
});


