ï»¿var timeInterval = 15;
var curCountDown = timeInterval;
var liveTimer = 0;
var lastItemDate = 0;
var isFinish = false;
function SetLiveTimer() {
    curCountDown = timeInterval;
    $("#pnlCountDown").html("Tá»± Äá»ng cáº­p nháº­t trong " + timeInterval + " giÃ¢y...");
    liveTimer = setInterval(function () {
        curCountDown--;
        if (curCountDown == -1) {
            ClearLiveTimer();
            $("#pnlCountDown").html('Loading...');
            GetAllLiveInfo(false);
        }
        else {
            $("#pnlCountDown").html("Tá»± Äá»ng cáº­p nháº­t trong " + curCountDown + " giÃ¢y...");
        }
    }, 1000);
}
function ClearLiveTimer() {
    clearInterval(liveTimer);
}

var isTheFirst = false;
function GetAllLiveInfo(isInit) {
    var method = isInit ? "getinit" : "getlastest";
    var dateLast = $("#lastDate").val();
    if (dateLast > 0)
        isTheFirst = true;
    if (isTheFirst && lastItemDate==0)
        lastItemDate = dateLast;
    
    var newsId = $("#hdNewsId").val();
    if (!isFinish) {
        $.ajax({
            url: "/Handler/LiveInfo.ashx",
            data: { m: method, n: newsId, d: lastItemDate },
            dataType: "json",
            success: function (data) {
                binStatus(data.IsFinish);
                isFinish = data.IsFinish;
                if (data.Data != null && !data.IsFinish) {
                    binDataTimeLine(data.Data.LiveTimeline);
                    binDataFocus(data.Data.LiveFocus);
                    binDataUpdate();
                    setTimeout(function () { SetLiveTimer(); }, 2000);
                }
                else {
                    binDataUpdate();
                    setTimeout(function () { SetLiveTimer(); }, 2000);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                setTimeout(function () { SetLiveTimer(); }, 2000);
            }
        });
    } 
}
String.format = function () {
    var s = arguments[0];
    for (var i = 0; i < arguments.length - 1; i++) {
        var reg = new RegExp("\\{" + i + "\\}", "gm");
        s = s.replace(reg, arguments[i + 1]);
    }

    return s;
};
function binDataUpdate() {
    var newsId = $("#hdNewsId").val();
    $.ajax({
        url: "/Handler/LiveInfoCache.ashx",
        data: {n: newsId},
        success: function(data) {
            if (data != null && data.length > 0) {
                var arr = data.split(',');
                for (var i = 0; i < arr.length; i++) {
                    $("#liveid_" + arr[i]).hide();
                }
            }
        }
    });
}
function binDataFocus(json) {
    var html = "";
    if (json != null && json.length > 0) {
        for (var i = 0; i < json.length; i++) {
            var item = json[i];
            html += String.format('<li>');
            html += String.format('<h4>');
            html += String.format('<a href="#livefocus{0}" rel="nofollow">', item.LiveId);
            html += String.format('{0}', item.LiveTitle);
            html += String.format('</a>');
            html += String.format('</h4>');
            html += String.format('<span>');
            html += String.format('{0}', item.LiveTimeFocus);
            html += String.format('</span>');
            html += String.format('</li>');
        }
        $("#livefocus").prepend(html);
    }
}

function binStatus(isFinish) {
    if (isFinish) {
        $("#liveRunning").hide();
        $("#liveFinish").show();
    }
    else {
        $("#liveRunning").show();
        $("#liveFinish").hide();
    }
}
function binDataTimeLine(json) {
    var html = "";
    if (json != null && json.length > 0) {
        lastItemDate = json[0].LiveTimeSpan;
        for (var i = 0; i < json.length; i++) {
            var item = json[i];
            html += String.format('<div class="liveitem" id="liveid_{0}">', item.LiveId);
            html += String.format('<a id="livefocus{0}" rel="nofollow" href="javascript:void(0);"></a>', item.LiveId);
            html += String.format('<div class="liveinfo">');
            html += String.format('<div class="noavatar"></div>');
            html += String.format('<div class="livetime">{0}</div>', item.LiveTime);
            html += String.format('</div>');
            html += String.format('<div class="livemedia">');
            html += String.format('<h3>{0}</h3>', item.LiveTitle);
            html += String.format('{0}', item.mediaUrl.replace("http://","https://"));
            html += String.format('<h5>');
            html += String.format('{0}', item.LiveNote);
            html += String.format('</h5>');
            html += String.format('<div class="livecontent">');
            html += String.format('{0}', item.LiveContent);
            html += String.format('</div>');
            html += String.format('</div>');
            html += String.format('<div class="backtotop">');
            html += String.format('<a href="#livetopfocus" rel="nofollow" class="livebacktop"></a>');
            html += String.format('</div>');
            html += String.format('</div>');
        }
    }
    $("#liveContent").prepend(html);
}
function displayData(json) {
    var html = "";
    if (json != null && json.length > 0) {
        var isFinsh = json[0].isFinish;
        if (isFinsh) {
            $("#liveRunning").hide();
            $("#liveFinish").show();
        }
        else {
            $("#liveRunning").show();
            $("#liveFinish").hide();
        }
        $("#lastDate").val(json[0].LiveTimeSpan);
        for (var i = 0; i < json.length; i++) {
            var item = json[i];
            html += String.format('<div class="liveitem" id="liveid_{0}">', item.LiveId);
            html += String.format('<div class="liveinfo">');
            html += String.format('<div class="noavatar"></div>');
            html += String.format('<div class="livetime">{0}</div>', item.LiveTime);
            html += String.format('</div>');
            html += String.format('<div class="livemedia">');
            html += String.format('<h3>{0}</h3>', item.LiveTitle);
            html += String.format('{0}', item.mediaUrl.replace("http://", "https://"));
            html += String.format('<h5>');
            html += String.format('{0}', item.LiveNote);
            html += String.format('</h5>');
            html += String.format('<div class="livecontent">');
            html += String.format('{0}', item.LiveContent);
            html += String.format('</div>');
            html += String.format('<a id="livefocus{0}" rel="nofollow" href="javascript:void(0);"></a>', item.LiveId);
            html += String.format('</div>');
            html += String.format('<div class="backtotop">');
            html += String.format('<a href="#livetopfocus" rel="nofollow" class="livebacktop"></a>');
            html += String.format('</div>');
            html += String.format('</div>');
        }
    }
    $("#liveContent").prepend(html);
}
function binDataTimeLineSorting(json) {
    var html = "";
    if (json != null && json.length > 0) {
        for (var i = 0; i < json.length; i++) {
            var item = json[i];
            html += String.format('<div class="liveitem" id="liveid_{0}">', item.LiveId);
            html += String.format('<a id="livefocus{0}" rel="nofollow" href="javascript:void(0);"></a>', item.LiveId);
            html += String.format('<div class="liveinfo">');
            html += String.format('<div class="noavatar"></div>');
            html += String.format('<div class="livetime">{0}</div>', item.LiveTime);
            html += String.format('</div>');
            html += String.format('<div class="livemedia">');
            html += String.format('<h3>{0}</h3>', item.LiveTitle);
            html += String.format('{0}', item.mediaUrl.replace("http://", "https://"));
            html += String.format('<h5>');
            html += String.format('{0}', item.LiveNote);
            html += String.format('</h5>');
            html += String.format('<div class="livecontent">');
            html += String.format('{0}', item.LiveContent);
            html += String.format('</div>');
            html += String.format('</div>');
            html += String.format('<div class="backtotop">');
            html += String.format('<a href="#livetopfocus" rel="nofollow" class="livebacktop"></a>');
            html += String.format('</div>');
            html += String.format('</div>');
        }
    }
    $("#liveContent").html(html);
}
$("#ddlsort").change(function () {
    var newsId = $("#hdNewsId").val();
    var action = $(this).val();
    $.ajax({
        url: "/Handler/LiveInfo.ashx",
        data: {n: newsId, Type: action },
        dataType: "json",
        success: function (data) {
            if (data.Data != null) {
                binDataTimeLineSorting(data.Data.LiveTimeline);
            }
            else {
                setTimeout(function () { SetLiveTimer(); }, 15000);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            setTimeout(function () { SetLiveTimer(); }, 15000);
        }
    });
});