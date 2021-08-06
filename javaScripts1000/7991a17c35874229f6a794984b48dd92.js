ï»¿(function (root, jQuery, helpers, factory) {
    root.PreChat = factory(root, jQuery, helpers);
})(window, jQuery, upstream.customerchat.helpers, function (win, $, helpers) {
    function PreChat(options) {
        this.options = options;
    }

    PreChat.prototype.options = {
        failed: false,
        language: null,
	    displaySettingId: null,
	    isPreChatForm: false,
        offlineTimeout: 90000,
        useReCaptcha: false
    }

    PreChat.prototype.close = function () {
        if (win.parent !== win) {
            // when loaded within an iframe (for docking chat)
            win.parent.postMessage("uwfButtonClick", "*");
        } else if (win.opener) {
            // when loaded as a popup
            win.close();
        }
    }

    PreChat.prototype.initValidation = function () {
        // setup validators
        $.validator.setDefaults({
            highlight: function (elm) {
                $(elm).closest(".form-group").addClass("has-error");
            },
            unhighlight: function (elm) {
                $(elm).closest(".form-group").removeClass("has-error");
                if ($(".letschat").is("[disabled]")) {
                    $(".letschat").removeAttr("disabled");
                }
            }
        });
    }

    PreChat.prototype.initUserLanguage = function () {
        $("#UserLanguage").val(this.options.language);
    }

    PreChat.prototype.bind = function () {
        var _this = this;
        var submitted = false;

        // form submission event
	    $("body").on("submit", "#chatrequestform", function (e) {
            if(submitted) {
                e.preventDefault();
                return;
            }
            submitted = true;
            // with reCaptcha turned on we should have a valid reCaptcha response.
            if ($("#chatrequestform").valid() && (!_this.options.useReCaptcha || _this.options.useReCaptcha && grecaptcha.getResponse())) {
                // automatically setting up browser timezone information (this is done automatically in the new prechat form)
                var timeZoneName = helpers.GetTimeZoneName();
                $("#Parameters_TimeZoneOffset_").val(timeZoneName);

                // avoid double clicking submission
                $(".letschat").attr("disabled", "disabled");
                
                // set showChat state
                var helper = upstream.customerchat.helpers;
                helper.updateShowChatState()
            } else {
                e.preventDefault();
            }
	    });
	    $(document).on("click", ".recaptchaSubmit", function (e) {
	        grecaptcha.execute();
	    });

        // event listener for minimize / close the chat window
        $(document).on("click", "[data-dismiss]", function (event) {
            var it = $(event.target);
            switch (it.data("dismiss")) {
                case "window":
                    _this.close();
                    break;
            }
        });
    }

    PreChat.prototype.tryRestore = function (referrer) {
        var stopRestore = this.options.failed || helpers.isChatExpired(referrer, this.options.offlineTimeout);

        if (stopRestore) {
            helpers.clearChatData(referrer);
            $("#chatrequestform").removeClass("hidden");
            win.parent.postMessage("uwfChatReady", "*");
            return false;
        }

        // The chat has not been expired and no previous restore attempt failed, proceed to restore chat.
        var chatData = helpers.getChatData(referrer);

        // Reconnect to the existing chat session.
        win.location = "/Home/Chat?chatId=" + encodeURIComponent(chatData.chatId) 
            + "&isPreChatForm=" + this.options.isPreChatForm
            + "&displaySettingId=" + this.options.displaySettingId
            + "&returnUrl=" + chatData.returnUrl
            + "&sessionId=" + chatData.sessionId
            + "&referrer=" + chatData.referrer;
        return true;
    }

    PreChat.prototype.init = function (referrer) {
        var _this = this;

        $(function () {
            _this.initValidation();
            _this.initUserLanguage();
            _this.bind();
            _this.tryRestore(referrer);

            if (window.parent !== win || window.opener) {
                $("[data-dismiss='window']").removeClass("hidden");
            }
        });

        // UWF-3983: For IE & FF trim spaces from email before validation. Chrome does it automatically.
        // TODO: Replace this function with a normalizer function after updating jQuery.Validation package to 1.16.* or later.
        $("input[type='email']").on('input propertychange', function () {
            $(this).val($(this).val().trim());
        });
        var referrerUrl = document.referrer.split("/").slice(0, 3).join("/");
        $('#Parameters_DocumentReferrer_').val(referrerUrl);
    }

    return PreChat;
});