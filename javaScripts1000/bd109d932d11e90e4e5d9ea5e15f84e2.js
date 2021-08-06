(function ($) {
    var ldoExtend = function (context) {
        var $context = null;

        if (context) {
            $context = $(context);
        } else {
            $context = $(document);
        }

        var fnSetTabActive     = function (selector) {
            var $self    = $(this),
                $element = $self.parent('li');
            if ($element.hasClass('is-active')) return;

            var $container = $element.parent();
            var $active    = $container.find('> .is-active');

            $active.removeClass('is-active')
                .end()
                .find('[data-toggle="tab"]')
                .attr('aria-expanded', false);

            $element.addClass('is-active')
                .find('[data-toggle="tab"]')
                .attr('aria-expanded', true);
            var $target    = $(selector);
            var $tabActive = $target.parent().find('> .is-active');
            $tabActive.removeClass('is-active');

            $target.addClass('is-active');
        }, fnGetSelectorTarget = function () {
            var $this    = $(this),
                selector = $this.data('target');

            if (!selector) {
                selector = $this.attr('href');
                selector = selector && selector.replace(/.*(#[^\s]*)\s*$/, '$1');
            }

            return selector;
        };

        $context.find('[data-toggle]').on('click', function (e) {
            e.preventDefault();
            var $this  = $(this),
                toggle = $this.data('toggle');

            var selector = fnGetSelectorTarget.call(this);

            switch (toggle) {
                case 'tab':
                    fnSetTabActive.call($this, selector);
                    break;
                case 'modal':
                    if ($this.data('ajax')) {
                        switch ($this.data('type')) {
                            case 'collaborate':
                                $.confirm(
                                    {
                                        backgroundDismiss: true,
                                        title:             $this.data('title'),
                                        content:           'url:' + selector,
                                        onContentReady:    function () {
                                            var self = this;
                                            ldoExtend(self.$content);
                                        },
                                        columnClass:       'large',
                                        buttons:           {
                                            ok:    {
                                                text:     'Gá»­i thÃ´ng tin',
                                                keys:     ['enter'],
                                                btnClass: 'btn btn-red',
                                                action:   function () {
                                                    $.alert('You clicked on something else');
                                                }
                                            },
                                            close: {
                                                text: 'ÄÃ³ng láº¡i'
                                            }
                                        }
                                    }
                                );
                                break;
                            default:
                                $.confirm(
                                    {
                                        backgroundDismiss: true,
                                        title:             $this.data('title'),
                                        content:           'url:' + selector,
                                        onContentReady:    function () {
                                            var self = this;
                                            ldoExtend(self.$content);
                                        },
                                        columnClass:       'large',
                                        buttons:           {
                                            ok: {
                                                text:   'Something else &*', // Some Non-Alphanumeric characters
                                                action: function () {
                                                    $.alert('You clicked on something else');
                                                }
                                            }
                                        }
                                    }
                                );
                                break;
                        }


                    }
                    break;
            }
        });

        var targetHref = $.trim((window.location.href || ''));
        if (targetHref.length) {
            targetHref = targetHref.replace(/.*(#[^\s]*)\s*$/, '$1');

            var targetInUri = $.trim(targetHref || '').toLowerCase();
            if (targetInUri.length && targetInUri[0] === '#') {
                $context.find('[data-toggle="tab"]').each(function () {
                    var $this   = $(this),
                        _target = fnGetSelectorTarget.call($this);
                    if (_target.toLowerCase() === targetInUri) {

                        $this.trigger('click');
                    }
                });
            }

        }
    };

    $(document).ready(function () {
        $('a[href="#"]').click(function (e) {
            e.preventDefault();
        });

        ldoExtend();
    });
})(jQuery);