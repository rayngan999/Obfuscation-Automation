ï»¿var AdvertisementTypes = {
    "160x600": 1,
    "300x250": 2,
    "300x600": 3,
    "320x100": 4,
    "728x90": 5,
    "970x250FT": 6,
    "970x250MF": 7,
    "970x250ST": 8,
    "200x600": 9
};

var Adv160x600Ids = [0];
var Adv300x250Ids = [0, 1, 2];
var Adv300x600Ids = [3];
var Adv320x100Ids = [4, 5, 6, 7];
var Adv728x90UIds = [8, 9, 10, 11];
var Adv970x250FTIds = [0, 1];
var Adv970x250MFIds = [2, 3];
var Adv970x250STIds = [4, 5];
var Adv200x600Ids = [];

Object.freeze(AdvertisementTypes);
Object.freeze(Adv728x90UIds);
Object.freeze(Adv160x600Ids);
Object.freeze(Adv300x250Ids);
Object.freeze(Adv300x600Ids);
Object.freeze(Adv320x100Ids);
Object.freeze(Adv970x250FTIds);
Object.freeze(Adv970x250MFIds);
Object.freeze(Adv970x250STIds);
Object.freeze(Adv200x600Ids);

function forceKeyPressUppercase(e) {
    var charInput = e.keyCode;
    if ((charInput >= 97) && (charInput <= 122)) { // lowercase
        if (!e.ctrlKey && !e.metaKey && !e.altKey) { // no modifier key
            var newChar = charInput - 32;
            var start = e.target.selectionStart;
            var end = e.target.selectionEnd;
            e.target.value = e.target.value.substring(0, start) + String.fromCharCode(newChar) + e.target.value.substring(end);
            e.target.setSelectionRange(start + 1, start + 1);
            e.preventDefault();
        }
    }
};

var pageEditorMode = function () {
    return !!(window.Sitecore && window.Sitecore.PageModes && window.Sitecore.PageModes.PageEditor);
};

function addLoadEvent(func) {
    var oldonload = window.onload;

    if (typeof window.onload !== 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            if (oldonload) {
                oldonload();
            }
            func();
        };
    }
}

function createAdvContent(desktopElementId, tabletElementId, mobileElementId, advType, dataId) {
    var id = "";

	    if (jQueryV2(window).width() > 0 && desktopElementId !== null && tabletElementId !== null && mobileElementId !== null
        && desktopElementId === tabletElementId && desktopElementId === mobileElementId) {
        id = createAdvId(desktopElementId, advType);
        setAdvId(dataId, id);
        callAdv(id);
    } else if (jQueryV2(window).width() >= 992 && desktopElementId !== null && tabletElementId === null) {
        id = createAdvId(desktopElementId, advType);
        setAdvId(dataId, id);
        callAdv(id);
    } else if (jQueryV2(window).width() >= 768 && desktopElementId !== null && tabletElementId !== null && (desktopElementId === tabletElementId)) {
        id = createAdvId(desktopElementId, advType);
        setAdvId(dataId, id);
        callAdv(id);
    } else if (jQueryV2(window).width() >= 768 && jQueryV2(window).width() <= 991 && tabletElementId !== null) {
        id = createAdvId(tabletElementId, advType);
        setAdvId(dataId, id);
        callAdv(id);
    } else if (jQueryV2(window).width() <= 767 && mobileElementId !== null) {
        id = createAdvId(mobileElementId, advType);
        setAdvId(dataId, id);
        callAdv(id);
    }
}

function createAdvId(elementId, advType) {
    var id = "";

    switch (advType) {
        case AdvertisementTypes["160x600"]:
            id = Adv160x600Ids[0].toString();
            break;
        case AdvertisementTypes["300x250"]:
            id = getAdvId(elementId, Adv300x250Ids);
            break;
        case AdvertisementTypes["300x600"]:
            id = Adv300x600Ids[0].toString();
            break;
        case AdvertisementTypes["320x100"]:
            id = getAdvId(elementId, Adv320x100Ids);
            break;
        case AdvertisementTypes["728x90"]:
            id = getAdvId(elementId, Adv728x90UIds);
            break;
        case AdvertisementTypes["970x250FT"]:
            id = getAdvId(elementId, Adv970x250FTIds);
            break;
        case AdvertisementTypes["970x250MF"]:
            id = getAdvId(elementId, Adv970x250MFIds);
            break;
        case AdvertisementTypes["970x250ST"]:
            id = getAdvId(elementId, Adv970x250STIds);
            break;
        case AdvertisementTypes["200x600"]:
            id = getAdvId(elementId, Adv200x600Ids);
            break;
    }

    return elementId + id;
}

function callAdv(elementId) {
    if (window.googletag !== null && window.googletag !== undefined && window.googletag !== '') {
        window.googletag.cmd.push(function() {
            window.googletag.display(elementId);
        });
    }
}

function getAdvId(elementId, array) {
    var copiedArray = array;
    var tempId = null;
    var i = 0;

    while (true) {
        tempId = copiedArray[i];
        if (jQueryV2('#' + elementId + tempId).length === 0) {
            break;
        } else {
            i++;
            continue;
        }
    }

    if (tempId === null || tempId === undefined) {
        return "";
    }

    return tempId.toString();
}

function setAdvId(dataId, id) {
    jQueryV2("div[data-id=" + dataId + "]").attr("id", id);
}

// duration in minutes
function writeCookie(name, value, duration) {
    var expiration = new Date();
    var now = new Date();
    expiration.setTime(now.getTime() + (parseInt(duration) * 60000));
    document.cookie = name + '=' + escape(value) + '; expires=' + expiration.toGMTString() + '; path=/';
}

function GetParameterValueFromQueryString(param) {
    var decodedUrl = decodeURI(window.location.href);
    var url = decodedUrl.slice(decodedUrl.indexOf('?') + 1).split('&');
    for (var i = 0; i < url.length; i++) {
        var urlparam = url[i].split('=');
        if (urlparam[0] === decodeURI(param)) {
            return urlparam[1];
        }
    }
}

function readCookie(name) {
    if (document.cookie.length > 0) {
        var start = document.cookie.indexOf(name + "=");
        if (start !== -1) {
            start = start + name.length + 1;
            var end = document.cookie.indexOf(";", start);
            if (end === -1) {
                end = document.cookie.length;
            }
            return unescape(document.cookie.substring(start, end));
        } else {
            return "";
        }
    }
    return "";
}

function getFormattedDate(dateString) {

    var day = new Date(dateString);
    var dd = day.getDate();
    var mm = day.getMonth() + 1;
    var yyyy = day.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    day = dd + "/" + mm + '/' + yyyy;
    return day;
}

function createImageCaption() {
    jQueryV2("div.cc-content-img > img.cc-img").not('.cc-content-video').not('.cc-content-sponsor').each(function () {
        if (!jQueryV2(this.parentElement).next().is("p")) {
            var that = jQueryV2(this);
            var captionText = that.data('caption');
            if (captionText !== undefined && captionText !== null && captionText !== "") {
                jQueryV2("<p class='cc-img-description'>").text(captionText).insertAfter(that.parent());
            }
        }
    });
}

window.updatePaginationTotalCount = function (newValue) {
    window.jQueryV2('#totalCount').val(newValue);
};

jQueryV2(document).ready(function () {

    var currentPath = document.location.pathname;
    jQueryV2('.cc-header-desktop .cc-content-link .cc-parent-megamenu').each(function (index) {
        if (jQueryV2(this).attr('href') !== null &&
            jQueryV2(this).attr('href') !== undefined &&
            jQueryV2(this).attr('href') !== '') {
            if (jQueryV2(this).attr('href').toLowerCase().trim() === currentPath.toLowerCase().trim()) {
                jQueryV2(jQueryV2(this).find('span')).addClass('cc-active');
            } else {
                jQueryV2(jQueryV2(this).find('span')).removeClass('cc-active');
            }
        }
    });

    jQueryV2(document).keyup(function (e) {
        if (e.key !== undefined && e.key.toLowerCase() === "escape") {
            if (jQueryV2('.img-overlay').is(':visible')) {
                jQueryV2('.overlay-dark').remove();
            }
        }
    });

    jQueryV2("img[data-field-name='Picture'], img[data-field-name='Image']").hover(function () {
        jQueryV2(this).css("cursor", "pointer");
    });

    jQueryV2("img[data-field-name='Picture'], img[data-field-name='Image']").on('click', function (event) {

        if (!pageEditorMode()) {
            var top = jQueryV2(document.head).offset().top - 50;
            var html = '';
            jQueryV2.ajax({
                url: '/api/sitecore/Common/GetOriginalImage',
                type: 'post',
                data: { id: jQueryV2(this).attr('data-id'), fieldName: jQueryV2(this).attr('data-field-name') },
                success: function (response) {
                    if (response !== "") {

                        html += '<div class="overlay-dark">';
                        html += '<img class="close-button" src="/Images/close.png" />';
                        html += '<img class="img-overlay"></div>';

                        if (jQueryV2('.overlay-dark').length > 0) {
                            jQueryV2('.overlay-dark').remove();
                        }

                        jQueryV2(document.body).prepend(html);
                        jQueryV2('.img-overlay').css('opacity', 1);
                        jQueryV2('.img-overlay').attr('src', response);

                        jQueryV2('.close-button').on('click',
                            function () {
                                jQueryV2(".overlay-dark").remove();
                            });
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log(textStatus, errorThrown);
                }
            });
        }
    });
});
