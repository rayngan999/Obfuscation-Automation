ï»¿var helperFactory = {};

(function ($) {
    $.fn.inputFilter = function (inputFilter) {
        return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function () {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            }
        });
    };
}(jQuery));

helperFactory.loader = {
    show: function () {
        $('body').append('<div id="dimmer" class="ui active inverted dimmer"><div class="ui text loader"></div></div>');
    },

    hide: function () {
        $('#dimmer').remove()
    }
};

helperFactory.getMobileOperatingSystem = function () {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
};

helperFactory.redirect = function (url) {
    window.location.href = url;
};

helperFactory.mobileRedirect = function (url) {
    var mobileos = this.getMobileOperatingSystem();
    if (mobileos == "Android" || mobileos == "iOS") {
        window.location.href = url;
    }
};

helperFactory.stepTo = function (from, to) {
    $(from).hide();
    $(to).show();
};

helperFactory.blockInspect = function () {
    $(document).bind("contextmenu", function (e) {
        return false;
    });
    $(document).keydown(function (e) {
        if (e.keyCode == 123) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
            return false;
        }
    });
};

helperFactory.numberWithCommas = function (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};