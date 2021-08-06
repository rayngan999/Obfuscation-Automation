ï»¿var DateTime_TickToc = {
    date: '',
    time: '',
    language: 'VN',
    init: function () {
        this.GetDay_of_Time();
        this.GetDate_of_Time();
        this.GetTime_Ticktoc();
    },
    GetDay_of_Time: function () {
        var d = new Date();
        var day = d.getDay();
        switch (day) {
            case 0:
                {

                    if (this.language == 'VN') $(this.date).append('Chá»§ nháº­t');
                    if (this.language == 'EN') $(this.date).append('Sunday');
                    break;
                }
            case 1:
                {
                    if (this.language == 'VN') $(this.date).append('Thá»© 2');
                    if (this.language == 'EN') $(this.date).append('Monday');
                    break;
                }
            case 2:
                {
                    if (this.language == 'VN') $(this.date).append('Thá»© 3');
                    if (this.language == 'EN') $(this.date).append('Tuesday');
                    break;
                }
            case 3:
                {
                    if (this.language == 'VN') $(this.date).append('Thá»© 4');
                    if (this.language == 'EN') $(this.date).append('Wednesday');
                    break;
                }
            case 4:
                {
                    if (this.language == 'VN') $(this.date).append('Thá»© 5');
                    if (this.language == 'EN') $(this.date).append('Thursday');
                    break;
                }
            case 5:
                {
                    if (this.language == 'VN') $(this.date).append('Thá»© 6');
                    if (this.language == 'EN') $(this.date).append('Friday');
                    break;
                }
            case 6:
                {
                    if (this.language == 'VN') $(this.date).append('Thá»© 7');
                    if (this.language == 'EN') $(this.date).append('Saturday');
                    break;
                }
        }
    },

    GetDate_of_Time: function () {
        var d = new Date();
        $(this.date).append(', ' + d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear());
    },

    GetTime_Ticktoc: function () {
        var me = this;
        var time = new Date();
        var hours = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds();
        minutes = ((minutes < 10) ? "0" : "") + minutes;
        seconds = ((seconds < 10) ? "0" : "") + seconds;
        ampm = (hours >= 12) ? "PM" : "AM";
        /*hours = (hours > 12) ? hours - 12 : hours;*/
        hours = (hours == 0) ? 12 : hours;
        /*var clock = " | " + hours + ":" + minutes + ":" + seconds + " " + ampm + " (GMT+7)";*/
        var clock = " | " + hours + ":" + minutes + ":" + seconds;
        if (clock != $(this.time).html()) $(this.time).html(clock);
        timer = setTimeout("DateTime_TickToc.GetTime_Ticktoc()", 1000);
    }
};
var bindDate = {
    init: function () {
        var now = new Date();
        var d = now.getDate();
        var m = now.getMonth();
        var y = now.getFullYear();
        var my = y - 5;
        var href = document.location.href;
        if ($("#hidDate").val() != undefined && $("#hidDate").val() != "")
            href = $("#hidDate").val();
        var ds = d;
        var ms = m + 1;
        var ys = y;
        var strdate = /[0-9]+\-[0-9]+\-[0-9]+/.exec(href) + '';
        if (strdate) {
            var arrdate = strdate.split('-');
            ds = arrdate[0];
            ms = arrdate[1];
            ys = arrdate[2];
        }
        for (i = 1; i < 31; i++) {
            $('#ddNgay').append('<option value="' + i + '" ' + (i == ds ? 'selected="selected"' : '') + '>' + i + '</option>');
            $('#ddNgayTo').append('<option value="' + i + '" ' + (i == ds ? 'selected="selected"' : '') + '>' + i + '</option>');
            if (i < 13) {
                $('#ddThang').append('<option value="' + i + '" ' + (i == ms ? 'selected="selected"' : '') + '>' + i + '</option>');
                $('#ddThangTo').append('<option value="' + i + '" ' + (i == ms ? 'selected="selected"' : '') + '>' + i + '</option>');
            }
        }
        for (i = y; i >= my; i--) {
            $('#ddNam').append('<option value="' + i + '" ' + (i == ys ? 'selected="selected"' : '') + '>' + i + '</option>');
            $('#ddNamTo').append('<option value="' + i + '" ' + (i == ys ? 'selected="selected"' : '') + '>' + i + '</option>');
        }
        $('#btnViewByDate').click(function () {
            if ($('#ddNgay').val() == 0) {
                alert('Báº¡n chÆ°a nháº­p ngÃ y tÃ¬m kiáº¿m!');
                return false;
            }
            if ($('#ddThang').val() == 0) {
                alert('Báº¡n chÆ°a nháº­p thÃ¡ng tÃ¬m kiáº¿m!');
                return false;
            }
            if ($('#ddNam').val() == 0) {
                alert('Báº¡n chÆ°a nháº­p nÄm tÃ¬m kiáº¿m!');
                return false;
            }
            href = href.replace('.htm', '');
            href = href.replace(/\/trang\-[0-9]+/i, '');
            href = href.replace(/\/d([^/]+)/i, '');
            href += '/d' + $('#ddNgay').val() + '-' + $('#ddThang').val() + '-' + $('#ddNam').val() + '.htm';
            document.location.href = href;
        });
    }
};

function sf() {
    u = location.href;
    t = document.title;
    window.open("http://www.facebook.com/share.php?u=" + encodeURIComponent(u));
};
function st() {
    u = location.href;
    t = document.title;
    window.open("https://twitter.com/intent/tweet?source=webclient&text=" + encodeURIComponent(u));
};

$(window).resize(function () {
    if ($(window).width() < 1100) {
        $('#scroll_top').hide();
        return;
    }
});

function get_scrolltop() {
    try {
        if (window.pageYOffset != undefined) {
            return window.pageYOffset;
        }
        return window.document.body.scrollTop;
    } catch (err) {
        try {
            return window.document.body.scrollTop;
        } catch (err2) {
            return 0;
        }
    }
}

$(document).scroll(function () {
    if ($(window).width() < 1100) {
        $('#scroll_top').hide();
        return;
    }
    if (get_scrolltop() < $(window).height()) {
        $('#scroll_top').hide();
    } else {
        $('#scroll_top').show();
    }
});
function onSearch(txtSearch) {
    var key = $(txtSearch).val();
    if (key != "Tá»« khÃ³a tÃ¬m kiáº¿m" && key != "") {
        window.location.href = "/Search.aspx?KeySearch=" + key + "&ar=1&op=1";
    }
}

function onEnter(e, txtSearch) {
    if (e.keyCode == 13) {
        onSearch(txtSearch);
        return false;
    }
    return true;
}

function onEnterAdvance(e) {
    if (e.keyCode == 13) {
        searchAdvanceBTT();
        return false;
    }
    return true;
}

function searchAdvanceBTT() {
    var dateF = $("#txtDateFr").val();
    var dateT = $("#txtDateTo").val();
    var are = $("input[name='timtrong']:checked").val();
    var op = $("input[name='luachon']:checked").val();
    var key = $("#txt_search").val();
    if (key != "") {
        window.location.href = "/Search.aspx?KeySearch=" + key + "&ar=" + are + "&op=" + op + "&dateF=" + dateF + "&dateT=" + dateT;
    }
}
function OnSearchClick() {
    if ($('#searchkey').val().length < 1 || $('#searchkey').val() == 'Tá»« khÃ³a tÃ¬m kiáº¿m') {
        alert('Báº¡n chÆ°a nháº­p tá»« khÃ³a tÃ¬m kiáº¿m');
        return false;
    }
    var keyword = $('#searchkey').val();
    if (keyword.length > 0) {
        var patten = /\s/g;
        keyword = keyword.replace(patten, "+");
        window.location.href = "/tags/" + keyword + ".htm";
    }
}
function doClickTimTin(event) {
    var textSearch = $('#searchkey');
    var strSearch = textSearch.val();

    if (strSearch.length > 0) {
        var patten = /\s/g;
        var keyword = strSearch.replace(patten, "+");
        var urlSearch = "/tags/" + keyword + ".htm";
        var key;
        if (window.event) {
            key = window.event.keyCode;
            if (key == 13) {
                if (document.all) {
                    window.location.href = urlSearch;
                } else {
                    document.location.href = urlSearch;
                }
                return false;
            }
        } else {
            key = event.which;
            if (key == 13) {
                if (document.all) {
                    window.location.href = urlSearch;
                } else {
                    document.location.href = urlSearch;
                }
                return false;
            }
        }
    }
}
function doSearch() {
    var textSearch = $('#searchkey');
    var strSearch = textSearch.val();
    if (strSearch.length > 0) {
        var patten = /\s/g;
        var keyword = strSearch.replace(patten, "+");
        var urlSearch = "/tags/" + keyword + ".htm";
        window.location.href = urlSearch;
    }
}
function cleartext() {
    $('#searchkey').val("");
}
function showtext() {
    if ($('#searchkey').val() == '')
        $('#searchkey').val("Tá»« khÃ³a tÃ¬m kiáº¿m");
}
/*Box Search*/
function OnSearchClick() {
    if ($('#txtSearchTin').val().length < 1 || $('#txtSearchTin').val() == 'Báº¡n muá»n tÃ¬m gÃ¬?') {
        alert('Báº¡n chÆ°a nháº­p tá»« khÃ³a tÃ¬m kiáº¿m');
        return false;
    }
    var keyword = $('#txtSearchTin').val();
    if (keyword.length > 0) {
        var patten = /\s/g;
        keyword = keyword.replace(patten, "+");
        window.location.href = "/tags/" + keyword + ".htm";
    }
}
function SearchPress(event) {
    var textSearch = $('#txtSearchTin');
    var strSearch = textSearch.val();

    if (strSearch.length > 0) {
        var patten = /\s/g;
        var keyword = strSearch.replace(patten, "+");
        var urlSearch = "/tags/" + keyword + ".htm";
        var key;
        if (window.event) {
            key = window.event.keyCode;
            if (key == 13) {
                if (document.all) {
                    window.location.href = urlSearch;
                } else {
                    document.location.href = urlSearch;
                }
                return false;
            }
        } else {
            key = event.which;
            if (key == 13) {
                if (document.all) {
                    window.location.href = urlSearch;
                } else {
                    document.location.href = urlSearch;
                }
                return false;
            }
        }
    }
}
function SearchKlic() {
    var textSearch = $('#txtSearchTin');
    var strSearch = textSearch.val();
    if (strSearch.length > 0) {
        var patten = /\s/g;
        var keyword = strSearch.replace(patten, "+");
        var urlSearch = "/tags/" + keyword + ".htm";
        window.location.href = urlSearch;
    }
}
function SearchFocus() {
    $('#txtSearchTin').val("");
}
function SearchBlur() {
    if ($('#txtSearchTin').val() == '')
        $('#txtSearchTin').val("Báº¡n muá»n tÃ¬m gÃ¬?");
}

function shareFace() {
    width = 800; height = 600;
    var leftPosition, topPosition;
    leftPosition = ($(window).width() / 2) - ((width / 2) + 10);
    topPosition = ($(window).height() / 2) - ((height / 2) + 50);
    var windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
    u = location.href
    t = document.title;
    var newsId = $("#hdNewsId").val();
    var linkFb = "https://baotintuc.vn/news-" + newsId+".htm"
    window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(linkFb)+'&display=popup&ref=plugin&src=like&kid_directed_site=0&app_id=156434197838325', 'sharer', windowFeatures);
}

function GetDataById(top, catId, catUrl) {
    $.ajax({
        url: "/Handler/ajaxGiaiMaKhuanMat.aspx",
        data: { ps: top, c: catId },
        success: function (data) {
            $("#MenuGmkm").find("a").removeClass("active");
            $("#dataGMKM").html(data);
            $("#a_" + catId).addClass("active");
            $("#href_gmkm").attr("href", catUrl);
        }
    });
}


var pageMedia = 1;
var _inCallbackMedia = false;

function loadMedia_more(c, container) {
    if (pageMedia > -1 && !_inCallbackMedia) {
        _inCallbackMedia = true;
        pageMedia++;
        $('#loading').show();
        $('div.viewmore').hide();
        var i = setTimeout(function () {
            $.get("/Handler/WebListMedia.aspx?c=" + c + "&page=" + pageMedia, function (data) {
                if (data != '') {
                    $(container).append(data);
                }
                else {
                    pageMedia = -1;
                }
                _inCallbackMedia = false;
                $('#loading').hide();
                $('div.viewmore').show();
            });
        }, 2000);
    }
}
var pageVideo = 1;
var _inCallbackVideo = false;

function loadVideo_more(c, container) {
    if (pageVideo > -1 && !_inCallbackVideo) {
        _inCallbackVideo = true;
        pageVideo++;
        $('#loading').show();
        $('div.viewmore').hide();
        var i = setTimeout(function () {
            $.get("/Handler/WebListVideo.aspx?c=" + c + "&page=" + pageVideo, function (data) {
                if (data != '') {
                    $(container).append(data);
                }
                else {
                    pageVideo = -1;
                }
                _inCallbackVideo = false;
                $('#loading').hide();
                $('div.viewmore').show();
            });
        }, 2000);
    }
}
var page = 1;
var _inCallback = false;

function loadNews_more(c, t, k, container) {
    if (page > -1 && !_inCallback) {
        _inCallback = true;
        page++;
        $('div#loading').show();
        $('div.viewmore').hide();
        var i = setTimeout(function () {
            $.get("/Handler/WebListAll.aspx?c=" + c + "&t=" + t + "&key=" + k + "&page=" + page, function (data) {
                if (data != '') {
                    $(container).append(data);
                }
                else {
                    page = -1;
                }
                _inCallback = false;
                $('div#loading').hide();
                $('div.viewmore').show();
            });
        }, 2000);
    }
}

var pagePhoto = 1;
var _inCallbackPhoto = false;

function loadPhoto_more(c, container) {
    if (pagePhoto > -1 && !_inCallbackPhoto) {
        _inCallback = true;
        pagePhoto++;
        $('div#loading').show();
        $('div.viewmore').hide();
        var i = setTimeout(function () {
            $.get("/Handler/Photo360List.aspx?c=" + c + "&page=" + pagePhoto, function (data) {
                if (data != '') {
                    $(container).append(data);
                }
                else {
                    pagePhoto = -1;
                }
                _inCallbackPhoto = false;
                $('div#loading').hide();
                $('div.viewmore').show();
            });
        }, 2000);
    }
}
$(document).ready(function () {
    bindDate.init();
    var hidCurent = $('#hidParentId').val();
    $('#menu_' + hidCurent).addClass('active');

    var hidCatId = $('#hidCatId').val();
    $('#sub_' + hidCatId).addClass('active');
    $('.show-more-mn').click(function (e) {
        e.preventDefault();
        if ($('.menu_list').hasClass('open')) {
            $('.menu_list').removeClass('open');
        }
        else {
            $('.menu_list').addClass('open');
        }
    });
});