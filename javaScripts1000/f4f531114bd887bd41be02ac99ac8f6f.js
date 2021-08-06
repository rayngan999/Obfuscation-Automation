jQuery(function ($) {
    'use strict';

    var postData = {
        STORAGE_KEY: 'expert_review_likes:' + base64Encode(window.location.origin),
        _items: [],
        /**
         * @return {postData}
         */
        init: function () {
            var data = {items: []};
            if (typeof localStorage !== 'undefined') {
                data = localStorage.getItem(this.STORAGE_KEY);
                if (data) {
                    data = JSON.parse(data);
                    this._items = data.items;
                }
            }
            return this;
        },
        /**
         * @return {postData}
         */
        store: function () {
            if (typeof localStorage !== 'undefined') {
                var data = {items: this._items};
                localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
            }
            return this;
        },
        /**
         * @param {int} id
         * @param {string} entity
         * @return {postData}
         */
        like: function (id, entity) {
            this._act(id, 'like', entity);
            return this;
        },
        /**
         * @param {int} id
         * @param {string} entity
         * @return {postData}
         */
        dislike: function (id, entity) {
            this._act(id, 'dislike', entity);
            return this;
        },
        /**
         * @param {int} id
         * @param {string} entity
         * @return {postData}
         */
        remove: function (id, entity) {
            this._act(id, 'remove', entity);
            return this;
        },
        _act: function (id, action, entity) {
            entity = entity || 'posts';
            var items = this._items.filter(function (item) {
                if (item.hasOwnProperty('e')) {
                    return item.e !== entity || item.id !== id;
                }
                return item.id !== id;
            });
            if (action !== 'remove') {
                items.push({
                    id: id,
                    a: action,
                    e: entity
                });
            }
            this._items = items;
        },
        /**
         * @param {int} id
         * @param {string} entity
         * @return {boolean}
         */
        isLiked: function (id, entity) {
            return this._check(id, 'like', entity);
        },
        /**
         * @param {int} id
         * @param {string} entity
         * @return {boolean}
         */
        isDisliked: function (id, entity) {
            return this._check(id, 'dislike', entity);
        },
        _check: function (id, action, entity) {
            // @todo cache check state?
            entity = entity || 'posts';
            var items = this._items.filter(function (item) {
                if (item.hasOwnProperty('e')) {
                    return item.e === entity && item.id === id;
                } else if (entity === 'posts') {
                    return item.id === id;
                }
                return false;
            });
            if (items.length) {
                return items[0].a === action;
            }
            return false;
        }
    };

    postData.init();

    var initLikes = function () {
        $('.js-expert-review-likes-button').each(function () {
            var $this = $(this);

            if ($this.data('init')) {
                return;
            }
            $this.data('init', true);

            var $container = $this.parents('.js-expert-review-likes-button-container'),
                data = $this.parent().data(),
                entity = $container.data('entity_type');

            entity = entity || 'posts';

            var id = null;
            if (entity === 'posts') {
                if (data.hasOwnProperty('name')) {
                    id = data.name;
                } else if (data.hasOwnProperty('post_id')) {
                    id = data.post_id;
                }
            } else if (entity === 'comments') {
                id = $container.data('comment_id');
            }

            if (!id) {
                return;
            }

            if ($this.data('type') === 'like' || $this.data('type') === 'toggle') {
                $this.addClass(postData.isLiked(id, entity) ? 'voted' : '');
            } else if ($this.data('type') === 'dislike') {
                $this.addClass(postData.isDisliked(id, entity) ? 'voted' : '');
            }
        });
    };

    document.wpshopExpertReview_InitLikes = initLikes;

    initLikes();

    $(document).on('journalx_load_post', function () {
        setTimeout(initLikes, 100);
    });

    $(document).on('click', '.js-expert-review-likes-button', function (e) {
        e.preventDefault();
        var $this = $(this),
            $container = $this.parents('.js-expert-review-likes-button-container'),
            entity = $container.data('entity_type');

        entity = entity || 'posts';

        var id = null,
            type = $this.data('type'),
            clickType = type === 'toggle' ? 'like' : type,
            data = $this.parent().data(),
            isNamed = false;

        if ($this.hasClass('voted') && type !== 'toggle') {
            return;
        }

        if (entity === 'posts') {
            if (data.hasOwnProperty('name')) {
                id = data.name;
                isNamed = true;
            } else if (data.hasOwnProperty('post_id')) {
                id = data.post_id;
            }
        } else if (entity === 'comments') {
            id = $container.data('comment_id');
        }

        if (!id) {
            return;
        }

        var isNewClick = true;

        if (type === 'toggle') {
            if (postData.isLiked(id, entity)) {
                clickType = 'dislike';
                isNewClick = false;
            } else if (postData.isDisliked(id, entity)) {
                clickType = 'like';
                isNewClick = false;
            }
        } else if (type === 'like') {
            if (postData.isLiked(id, entity)) {
                return;
            }
            isNewClick = !postData.isDisliked(id, entity);
        } else if (type === 'dislike') {
            if (postData.isDisliked(id, entity)) {
                return;
            }
            isNewClick = !postData.isLiked(id, entity);
        }

        var requestData = {
            action: 'expert_review_save_like',
            nonce: expert_review_ajax.nonce,
            is_named: isNamed ? 1 : 0,
            entity: entity,
            id: id,
            type: type,
            click_type: clickType,
            is_new: isNewClick ? 1 : 0
        };

        $.ajax({
            url: expert_review_ajax.url,
            type: 'post',
            data: requestData,
            beforeSend: function () {
                $this.addClass('loading');
                $this.prop('disabled', true);
            }
        }).done(function (response) {
            if (response.success) {
                var selector = isNamed ?
                    '.js-expert-review-likes-button-container[data-name="' + id + '"]' :
                    '.js-expert-review-likes-button-container[data-post_id="' + id + '"]';

                if (entity === 'comments') {
                    selector = '.js-expert-review-likes-button-container[data-comment_id="' + id + '"]';
                }

                $(document).find(selector).each(function () {
                    var $this = $(this),
                        $likes = $this.find('.js-expert-review-likes-count'),
                        $dislikes = $this.find('.js-expert-review-dislikes-count')
                    ;
                    $likes.html(formatNumber(response.data.likes));
                    $dislikes.html(formatNumber(response.data.dislikes));
                    $this.find('.js-expert-review-likes-button').removeClass('voted');
                    if (clickType !== 'dislike') {
                        $this.find('.js-expert-review-likes-button[data-type!="dislike"]').addClass('voted');
                    } else if (type !== 'toggle') {
                        $this.find('.js-expert-review-likes-button[data-type="dislike"]').addClass('voted');
                    }
                });

                if (type === 'like') {
                    postData.like(id, entity);
                } else if (type === 'dislike') {
                    postData.dislike(id, entity);

                    // when type = 'toggle'
                } else if (clickType === 'like') { // toggle cases
                    postData.like(id, entity);
                } else {
                    postData.remove(id, entity);
                }

                postData.store();

                if (isNamed) {
                    $(document).find('.js-expert-review-like-rate[data-name="' + id + '"]').text(response.data.rate);
                    $(document).find('.js-expert-review-like-activity[data-name="' + id + '"]').text(response.data.activity);
                }
            } else {
                console.log(response);
            }
        }).always(function () {
            $this.removeClass('loading');
            $this.prop('disabled', false);
        });
    });

    function formatNumber($num) {
        if ($num > 1000000) {
            return ($num / 1000000).toFixed(1) + '&nbsp;' + 'm.';
        }
        if ($num > 100000) {
            return ($num / 1000).toFixed(0) + '&nbsp;' + 'k.';
        }
        if ($num > 1000) {
            return ($num / 1000).toFixed(1) + '&nbsp;' + 'k.';
        }
        return $num;
    }

    function base64Encode(str) {
        var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, enc = '';

        do {
            o1 = str.charCodeAt(i++);
            o2 = str.charCodeAt(i++);
            o3 = str.charCodeAt(i++);

            bits = o1 << 16 | o2 << 8 | o3;

            h1 = bits >> 18 & 0x3f;
            h2 = bits >> 12 & 0x3f;
            h3 = bits >> 6 & 0x3f;
            h4 = bits & 0x3f;

            enc += b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
        } while (i < str.length);

        switch (str.length % 3) {
            case 1:
                enc = enc.slice(0, -2) + '==';
                break;
            case 2:
                enc = enc.slice(0, -1) + '=';
                break;
        }

        return enc;
    }

});

jQuery(function ($) {
    'use strict';

    var pollStorage = new PollStorage();

    var initPoll = function () {
        $('.js-expert-review-poll').each(function () {
            var $this = $(this);

            if ($this.data('init')) {
                return;
            }
            $this.data('init', true);

            var poll = $this.data('id'),
                reset = parseInt($this.data('r'));

            if (reset) {
                pollStorage.reset(poll, reset);
            }

            var answer = pollStorage.getAnswer(poll);

            if (answer) {
                $this.addClass('voted');
                $this.find('.js-expert-review-poll-item[data-id="' + answer.a + '"]').addClass('voted');
                $this.find('.js-expert-review-poll-result-button').hide();
            }

            var canVote = $this.data('can_vote');
            if (typeof canVote !== 'undefined' && !canVote) {
                $this.addClass('voted');
            } else if (!answer) {
                $this.find('.js-expert-review-poll-result-button').show();
            }
        });
    };

    document.wpshopExpertReview_InitPoll = initPoll;

    initPoll();

    $(document).on('journalx_load_post', function (){
        setTimeout(initPoll, 100);
    });

    $('body').on('journalx_load_post', initPoll);


    $(document).on('click', '.js-expert-review-poll-item', function (e) {
        e.preventDefault();
        var $this = $(this),
            $container = $this.parents('.js-expert-review-poll'),
            $loader = $('<div class="expert-review-poll__loader"><span></span></div>').clone(),
            canVote = $this.data('can_vote');

        if (typeof canVote !== 'undefined' && !canVote) {
            return;
        }

        if ($container.hasClass('voted')) {
            return false;
        }

        var poll = $container.data('id'),
            answer = $this.data('id');

        var requestData = {
            action: 'expert_review_save_poll_vote',
            nonce: expert_review_ajax.nonce,
            question: poll,
            answer: answer
        };

        $.ajax({
            url: expert_review_ajax.url,
            type: 'post',
            data: requestData,
            beforeSend: function () {
                $container.append($loader);
                $this.prop('disabled', true);
            }
        }).done(function (response) {
            if (!response.success) {
                console.log(response);
                return;
            }
            $('.js-expert-review-poll[data-id="' + poll + '"]').each(function () {
                var $this = $(this);
                $this.addClass('voted');
                $this.find('.js-expert-review-poll-item[data-id="' + answer + '"]').addClass('voted');
            });
            pollStorage.vote(poll, answer);

            $(document.body).trigger('expert_review_poll_voted', [$this, $container]);

            $container.find('.js-expert-review-poll-result-button').hide();

            update_stat(poll, response.data);
        }).always(function () {
            $loader.remove();
            $this.prop('disabled', false);
        });
    });

    $(document).on('click', '.js-expert-review-poll-result-button', function (e) {
        e.preventDefault();
        var $this = $(e.currentTarget), txt = $this.data('toggle_txt');
        $this.blur();
        $this.data('toggle_txt', $this.text());
        $this.text(txt);
        if ($this.hasClass('used')) {
            $this.parents('.js-expert-review-poll').removeClass('voted');
            $this.removeClass('used');
        } else {
            $this.parents('.js-expert-review-poll').addClass('voted');
            $this.addClass('used');
        }
    });

    function update_stat(poll, data) {
        $('.js-expert-review-poll[data-id="' + poll + '"]').each(function () {
            var $container = $(this);
            var total = data.total;
            for (var answer in data.votes) {
                var $el = $container.find('.js-expert-review-poll-item[data-id="' + answer + '"]');
                if ($el.length) {
                    var percent = Math.round(data.votes[answer] / (total || data.votes[answer]) * 100);
                    $el.find('.js-expert-review-poll-item-num').text(percent + '%');
                    $el.find('.js-expert-review-poll-item-progress').css('width', percent + '%');
                }
            }
            var $total = $container.find('.js-expert-review-poll-count');
            if ($total.length) {
                $total.text(total);
            }
        });
    }

    function PollStorage() {
        var STORAGE_KEY = 'expert_review_polls_v1:' + base64Encode(window.location.origin);
        var data = {votes: {}, reset: 0};
        if (typeof localStorage !== 'undefined') {
            var storedData = localStorage.getItem(STORAGE_KEY);
            if (storedData) {
                data = JSON.parse(storedData);
            }
        }

        return {
            vote: function (poll, answer) {
                data.votes[poll] = {
                    a: answer,
                    t: Date.now() / 1000 | 0
                };
                store();
            },
            getAnswer: function (poll) {
                if (data.votes.hasOwnProperty(poll)) {
                    return data.votes[poll];
                }
                return null;
            },
            reset(poll, timestamp) {
                if (typeof data.votes[poll] !== 'undefined') {
                    if (data.votes[poll].t < timestamp) {
                        delete data.votes[poll];
                    }
                    store();
                }
            },
            resetAll: function (timestamp) {
                if (timestamp && (!data.reset || data.reset < timestamp)) {
                    data.reset = timestamp;
                    for (var poll in data.votes) {
                        if (data.votes[poll].t < timestamp) {
                            delete data.votes[poll];
                        }
                    }
                    store();
                }
            }
        };

        function store() {
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
            }
        }

        function base64Encode(str) {
            var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, enc = '';

            do {
                o1 = str.charCodeAt(i++);
                o2 = str.charCodeAt(i++);
                o3 = str.charCodeAt(i++);

                bits = o1 << 16 | o2 << 8 | o3;

                h1 = bits >> 18 & 0x3f;
                h2 = bits >> 12 & 0x3f;
                h3 = bits >> 6 & 0x3f;
                h4 = bits & 0x3f;

                enc += b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
            } while (i < str.length);

            switch (str.length % 3) {
                case 1:
                    enc = enc.slice(0, -2) + '==';
                    break;
                case 2:
                    enc = enc.slice(0, -1) + '=';
                    break;
            }

            return enc;
        }
    }
});

jQuery(function ($) {
    var globals = expert_review_ajax || {},
        i18n = globals.i18n;

    var $loaderProto = $('<div class="expert-review-popup__loader"><span></span></div>');

    $(document).on('click', '.js-expert-review-button', function (e) {
        e.preventDefault();
        var $this = $(this);
        var settings = $this.data('settings');
        switch (settings.type) {
            case 'popup':
                show_popup(settings);
                break;
            case 'comments':
                scroll_to_comments();
                break;
            case 'link':
                if (e.ctrlKey || parseInt(globals.ask_question_link_new_tab)) {
                    $('<a href="' + settings.link + '" target="_blank" rel="noopener"></a>')[0].click();
                } else {
                    document.location = settings.link;
                }
                break;
            default:
                break;
        }
    });

    // submit question
    $(document).on('click', '.js-expert-review-popup button[type="submit"]', function (e) {
        e.preventDefault();

        var $this = $(this);
        var $popup = $this.parents('.js-expert-review-popup');
        var $form = $popup.find('form');
        var $loader = $loaderProto.clone();

        var messageTimeout;
        var prependMessage = function (message) {
            $popup.find('form').prepend('<p class="fail-message">' + message + '</p>');
            clearTimeout(messageTimeout);
            messageTimeout = setTimeout(function () {
                $popup.find('.fail-message').remove();
            }, 5000);
        };

        if (!validate($form)) {
            return;
        }

        var data = form_data($popup.find('form'));

        $.ajax({
            url: globals.url,
            type: 'post',
            data: {
                action: 'expert_review_submit_question',
                nonce: globals.nonce,
                data: data
            },
            beforeSend: function () {
                $this.prop('disabled', true);
                $popup.find('.expert-review-popup').append($loader);
            }
        }).done(function (response) {
            if (response.success) {
                $popup.find('form').prepend('<p class="success-message">' + i18n.question_submitted + '</p>');
                setTimeout(function () {
                    $popup.remove();
                }, 3000);
                document.dispatchEvent(new CustomEvent('expert_review_question:submit', {
                    'detail': {
                        'request': data,
                        'response': response
                    }
                }));
            } else if (response.data && Array.isArray(response.data)) {
                response.data.reverse().forEach(function (item) {
                    var message = item.message;
                    if (item.code === 'legacy_form') {
                        console.error(message);
                        message = i18n.legacy_form;
                    }
                    prependMessage(message);
                });
            } else if (response.data && response.data.message) {
                prependMessage(response.data.message);
            }
        }).always(function () {
            $this.prop('disabled', false);
            $loader.remove();
        });
    });

    // click on close or cancel
    $(document).on('click', '.js-expert-review-cancel, .js-expert-review-close-mark', function (e) {
        e.preventDefault();
        $(this).parents('.js-expert-review-popup').remove();
    });

    // close on escape
    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            $('.js-expert-review-close-mark').trigger('click');
        }
    });

    // close on outside click
    $('body').on('click', function (e) {
        var $target = $(e.target);
        if ($target.is(".js-expert-review-popup") && !$target.find().is(".js-expert-review-popup")) {
            $('.js-expert-review-close-mark').trigger('click');
        }
    });

    function show_popup(params) {
        if (typeof expert_review_question_popup === 'function') {
            $('body').append(expert_review_question_popup(i18n, params));
            return;
        }

        var contactInput = params.use_phone ?
            '        <label>' + i18n.question_popup_phone + ': <input type="text" name="_p" class="required"></label>' :
            '        <label>' + i18n.question_popup_email + ': <input type="text" name="_a" class="required"></label>';

        var consentCheckbox = globals.consent ?
            '        <label><input type="checkbox" name="consent" value="1" class="required"> ' + i18n.consent + '</label>'
            : '';

        var html =
            '<div class="expert-review-popup-holder js-expert-review-popup"><div class="expert-review-popup">' +
            '    <span class="expert-review-popup__close js-expert-review-close-mark">&times;</span>' +
            '    <div class="expert-review-popup__content">' +
            '        <form>' +
            '        <label>' + i18n.question_popup_name + ': <input type="text" name="name" class="required"></label>' +
            contactInput +
            '        <input type="hidden" name="email">' +
            '        <label>' + i18n.question_popup_question + ': <textarea name="text" class="required"></textarea></label>' +
            consentCheckbox +
            '        <button type="submit" class="expert-review-popup__submit">' + i18n.question_popup_submit + '</button>' +
            '        <span class="expert-review-popup__cancel js-expert-review-cancel">' + i18n.question_popup_cancel + '</span>' +
            $('<input type="hidden" name="settings">').val(JSON.stringify(params)).prop('outerHTML') +
            '        </form>' +
            '    </div>' +
            '</div></div>';
        $('body').append(html);
    }

    function scroll_to_comments() {
        if (typeof expert_review_scroll_to_comments === 'function') {
            expert_review_scroll_to_comments();
            return;
        }

        var selector = "#comments";
        if (globals.comment_to_scroll_selector) {
            selector = globals.comment_to_scroll_selector;
        }
        var $comments = $(selector);
        if ($comments.length) {
            $('html, body').animate({
                scrollTop: $comments.offset().top
            }, 200);
        }
    }

    var validationMessageTimeout;

    function validate($form) {
        $form.find('.js-expert-review-validation-message').remove();

        var result = true;
        $form.find('input.required, textarea.required').each(function () {
            var $this = $(this);
            if ($this.is(':checkbox')) {
                if (!$this.is(':checked')) {
                    result = false;
                    $this.parents('label').append('<p class="js-expert-review-validation-message validation-failed">' + i18n.field_must_be_checked + '</p>');
                }
            } else {
                if (!$this.val().trim()) {
                    result = false;
                    $this.parents('label').append('<p class="js-expert-review-validation-message validation-failed">' + i18n.field_cannot_be_empty + '</p>');
                }
            }
        });
        clearTimeout(validationMessageTimeout);
        if (!result) {
            validationMessageTimeout = setTimeout(function () {
                $form.find('.js-expert-review-validation-message').hide(150, function () {
                    $(this).remove();
                });
            }, 5000);
        }
        return result;
    }

    function form_data($form) {
        var formData = $form.serializeArray();
        var data = {};
        $.map(formData, function (n, i) {
            data[n.name] = n.value;
        });
        return data;
    }

    /**
     * FAQ
     */
    $(document).on('click', '.js-expert-review-faq-item-question', on_faq_item_click);

    function on_faq_item_click(e) {
        e.preventDefault();
        var $this = $(this),
            $parent = $this.parent();

        if ($parent.hasClass('expand')) {
            $parent.removeClass('expand');
        } else {
            $parent.addClass('expand');
        }

        $(this).parent().find('.js-expert-review-faq-item-answer').slideToggle();
    }
});
