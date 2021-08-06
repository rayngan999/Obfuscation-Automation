var PF = PF || (window ? window.PF : {}) || {};

PF.Dialog = new function ()
{
    this.open = function (options)
    {
        var $options = $.extend({
            size: null,
            url: null,
            params: null,
            html: null,
            animation: 'fade'
        }, options);
        var $className  = '.bs-modal' + ($options.size !== null ? '-' + $options.size : '');

        if (!$($className).length)
        {
            $('<div/>', {
                'class': 'modal modal-legacy ' + $options.animation + ' ' + $className.substr(1),
                'data-test': 'IB8NFY4toE6Bj4F',
                html: $('<div/>', {
                    'class': 'modal-dialog' + ($options.size !== null ? ' modal-' + $options.size : ''),
                    html: $('<div/>', {
                        'class': 'modal-content'
                    })
                })
            })
                .on('hidden.bs.modal', function (e)
                {
                    $(this).remove();
                })
                .on('show.bs.modal', function () {
                    $('.tooltip.in').removeClass('in');
                })
                    .appendTo('#content');
        }
        else
        {
            $($className).find('.modal-content').empty();
        }

        if ($options.url !== null)
        {
           $($className)
                .find('.modal-content')
                    .load($options.url, $options.params, function (data)
                    {
                        $($className).modal({ show: true, keyboard: false });
                    });
        }
        else if ($options.html !== null)
        {
            $($className)
                .find('.modal-content')
                    .html($options.html);

            $($className).modal({ show: true });
        }
        return false;
    };

    this.close = function (data)
    {
        $('.modal').last().modal('hide');
    };

    this.setContent = function (data)
    {
        $('.modal-content').last().html(data);
    };

    this.reloadContent = function (options)
    {
        var $options = $.extend({
                size: null,
                url: null,
                params: null,
                html: null,
                animation: 'fade'
            }, options);

        var $className  = '.bs-modal' + ($options.size !== null ? '-' + $options.size : '');

        $($className).find('.modal-content').load($options.url, $options.params, function () {
            $($className).modal({ show: true, keyboard: false });
        });
    };

    this.formSubmit = function (form)
    {
        var $form = $(form);
        var $params = {};
        var $size = form.split(' ', 1);
            $size = $size[0].replace('.bs-modal', '').replace('-', '');
            $size = $size.length ? $size : null;

        if ($form !== null)
        {
            PF.Dialog.open({
                size: $size,
                url: $form.attr('action'),
                params: $form.serializeArray()
            });
        }

        return false;
    };

    this.prompt = function (options) {
        options = $.extend({
            title: 'Confirm action',
            description: null,
            buttons: {
                cancel: {
                    text: 'Cancel',
                    href: 'javascript:void(0);',
                    style: 'button gray cdark margin-right-10 pull-left',
                    callback: null
                },
                proceed: {
                    text: 'Continue',
                    href: 'javascript:void(0);',
                    style: 'pf-btn pf-btn-primary pull-left',
                    callback: null
                }
            }
        }, options);

        var btns = '.modal-footer';
        var dom = $('<div/>', {
            html: [
                $('<div/>', {
                    'class': 'modal-header',
                    html: $('<div/>', {
                        'class': 'modal-title pf-h3',
                        text: options.title
                    })
                }),
                $('<div/>', {
                    'class': 'modal-body pf-ui-subheading',
                    html: $('<p/>', {
                        text: options.description
                    })
                }),
                $('<div/>', {
                    'class': 'modal-footer',
                    style: 'margin-top:0 !important;'
                })
            ]
        });

        if (options.description === null) {
            dom.find('.modal-body p').remove();
            dom.find('.modal-footer').remove();
            btns = '.modal-body';
        }

        for (var i in options.buttons) {
            if (options.buttons[i] === null) {
                continue;
            }

            if (i == 'signin') {
                $('<span/>', {
                    'class': 'margin-horizontal-5',
                    html: 'or'
                }).appendTo(dom.find(btns));
            }

            var button = $('<a/>', {
                'class': options.buttons[i].style,
                'data-dismiss': (i == 'cancel' ? 'modal' : ''),
                'data-type': i,
                href: options.buttons[i].href,
                text: options.buttons[i].text
            }).appendTo(dom.find(btns));


            if (typeof options.buttons[i].callback === 'function') {
                button.on('click', function(){
                    $(this).closest('.modal').modal('hide');
                    options.buttons[i].callback($(this).data('type'));
                });
            }
        }

        if (options.description === null) {
            $('<div/>', { 'class': 'clearfix' }).appendTo(dom.find(btns));
        }

        PF.Dialog.open({ html: dom });

        return false;
    };
};
