ï»¿(function ($) {
    $(function () {
        function isValidUrl(str) {
            return str !== undefined && str !== null && str.length > 0;
        }

        var _chpii = "";
        if ($("#IsB2CUser").length > 0 && $("#IsB2CUser").val().toLowerCase() === 'true') {
            _chpii = $("#chpii").val();
            loadUnreadNotification();
            loadGamificationStatus();
            loadNotifications();
            setInterval(updateNotificationsAgo, 10000);
        }

        function updateNotificationsAgo() {
            for (var i = 0; i < $(".jq-timeago").length; ++i) {
                var element = $(".jq-timeago")[i];
                $(element).text(getTime($(element).attr("jq-iso-date")));
            }
        }


        $("#login,#loginMobile,#accedi,#accediChat").click(function (e) {
            e.preventDefault();
            var redirection = $(location).attr("href");
            var addressValue = $(this).attr("href") + redirection;
            $(location).attr("href", addressValue);
        });
        $("#logout").click(function (e) {
            e.preventDefault();
            jQuery("#frmLogout").submit();
        });
        function loadUnreadNotification() {
            var data = ssGet("ch-unreadnotificationdata");
            if (data !== null) {
                $("#notReadNotification").text(data);
            } else {
                $.ajax({
                    url: $("#UnreadNotificationsUrl").val(),
                    type: "GET",
                    dataType: "Json",
                    async: true,
                    success: function (result) {
                        ssInsert("ch-unreadnotificationdata", result.Data);
                        $("#notReadNotification").text(result.Data);
                    }
                });
            }
        }
        function loadGamificationStatus() {
            $.ajax({
                url: $("#GamificationStatusUrl").val(),
                type: "GET",
                dataType: "Json",
                async: true,
                success: function (result) {
                    $("#fitCoinAmount").text(result.Data);
                }
            });
        }

        function loadNotifications() {
            $.ajax({
                url: $("#NotificationsUrl").val(),
                type: "GET",
                dataType: "Json",
                async: true,
                success: function (result) {
                    $("#div-notifications").empty();
                    for (var i = 0; i < result.Data.length; i++) {
                        appendSingleNotify(result.Data[i]);
                    }
                    if (result.Data.length > 0) {
                        $("#btn-show-notifications").text("Mostra Tutte");
                    }
                }
            });
        }

        function ssInsert(key, value) {
            sessionStorage.setItem(key + _chpii, moment().format() + "#ED#" + value);
        }

        function ssGet(key) {
            key += _chpii;
            var value = sessionStorage.getItem(key);
            if (value === null || value === "" || value === undefined) {
                return null;
            }

            var splitValue = value.split("#ED#");
            if (splitValue[0] !== null) {
                if (moment().diff(moment(splitValue[0])) > 30000) {
                    sessionStorage.removeItem(key);
                    value = null;
                } else {
                    value = splitValue[1];
                }
            } else {
                sessionStorage.removeItem(key);
                value = null;
            }

            return value;
        }

        function appendSingleNotify(notify) {
            var active = "cc-active";
            if (notify.Readed) {
                active = "";
            }
            var fallbackAttribute = "this.src='https://fitprodglstacdn.blob.core.windows.net/global-avatar/default.png'";
            var element = $('<div class="cc-element ' + active + ' jq-notify" data-idnotification="' + notify.IdNotification + '" data-isreaded=' + notify.Readed + ' data-contenturl="' + notify.ImageLinkUrl + '">' +
                '   <div class="cc-content-img">' +
                '      <img class="cc-size" src="/Images/layout/1-1.png" alt="">' +
                '      <img class="cc-img" src="' + notify.ImageUrl + '" alt="" onerror="' + fallbackAttribute + '">' +
                '   </div>' +
                '   <div class="cc-content-info">' +
                '      <span class="cc-date jq-timeago" jq-iso-date=' + new Date(parseInt(notify.NotificationDate.substr(6))).toISOString() + '>' + getTime(new Date(parseInt(notify.NotificationDate.substr(6))).toISOString()) + '</span>' +
                '      <span class="cc-title">' + notify.Text + '</span>' +
                '      <span class="cc-description">' + notify.BodyText + '</span>' +
                '   </div>' +
                '</div>');
            $("#div-notifications").append(element);
            element.on(
                "click",
                function (evt) {
                    evt.preventDefault();
                    var context = $(this).closest(".jq-notify");
                    var idNotification = context.data("idnotification");
                    var isAlreadyRead = context.data("isreaded");
                    var redirectUrl = context.data('contenturl');
                    if (!isAlreadyRead) {
                        $.ajax({
                            url: $("#NotificationReadUrl").val(),
                            type: "POST",
                            data: {
                                idNotification: idNotification
                            },
                            cache: false
                        }).done(function (result) {
                            if (result.Res) {
                                context.removeClass("cc-active");
                                context.data("isreaded", true);
                                if (parseInt($("#notReadNotification").text()) > 0) {
                                    $("#notReadNotification").text(parseInt($("#notReadNotification").text()) - 1);
                                }
                                if (isValidUrl(redirectUrl)) {
                                    window.location.href = redirectUrl;
                                }
                            }

                        });
                    }
                    else if (isValidUrl(redirectUrl)) {
                        window.location.href = redirectUrl;
                    }
                });
        }
        var templates = {
            prefix: "",
            suffix: " fa",
            seconds: "meno di un minuto",
            minute: "circa un minuto",
            minutes: "%d minuti",
            hour: "circa un ora",
            hours: "circa %d ore",
            day: "un giorno",
            days: "%d giorni",
            month: "circa un mese",
            months: "%d mesi",
            year: "circa un anno",
            years: "%d anni"
        };
        var template = function (t, n) {
            return templates[t] && templates[t].replace(/%d/i, Math.abs(Math.round(n)));
        };

        var getTime = function (time) {
            if (!time) {
                return;
            }
            time = time.replace(/\.\d+/, ""); // remove milliseconds
            time = time.replace(/-/, "/").replace(/-/, "/");
            time = time.replace(/T/, " ").replace(/Z/, " UTC");
            time = time.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"); // -04:00 -> -0400
            time = new Date(time * 1000 || time);

            var now = new Date();
            var seconds = ((now.getTime() - time) * .001) >> 0;
            var minutes = seconds / 60;
            var hours = minutes / 60;
            var days = hours / 24;
            var years = days / 365;

            return templates.prefix + (
                seconds < 45 && template("seconds", seconds) || seconds < 90 && template("minute", 1) || minutes < 45 && template("minutes", minutes) || minutes < 90 && template("hour", 1) || hours < 24 && template("hours", hours) || hours < 42 && template("day", 1) || days < 30 && template("days", days) || days < 45 && template("month", 1) || days < 365 && template("months", days / 30) || years < 1.5 && template("year", 1) || template("years", years)) + templates.suffix;
        };
    });

})(jQueryV2);