ï»¿/// <reference path="../jquery-1.4.1-vsdoc.js" />
/// <reference path="../vtex.common.js" />
/// <reference path="../vtex.jsevents.js" />
/// <reference path="../vtex.skuEvents.js" />
$(document).ready(function () {
    LoadOn();
})

function LoadOn() {
    (function ($) {
        $.fn.getAttributes = function () {
            var attributes = {};

            if (!this.length)
                return this;

            $.each(this[0].attributes, function (index, attr) {
                if (attr.name != "action" && attr.name.substr(0, 3) == 'vt-') {
                    attributes['cfg_' + MakeOriginalCaseToAttrName(attr.nodeName.substr(3))] = attr.nodeValue;
                }
            });

            return attributes;
        }
    })(jQuery);

    
//    $('vt').each(function (i, element) {
//        VT__Run($(this))
//    })


    $('[id=__vt]').each(function (i, element) {
        VT__Run($(this))
    })

}

function VT__Run(tag) {
    var action = $(tag).attr('action');
    var cssclass = $(tag).attr('vt-class');
    var post = $(tag).getAttributes();
    LoadContentInTag(action, post, $(tag), cssclass);
}


function LoadContentInTag(action, post, $tag, cssclass) {
    $.ajax({
        url: ___scriptPath + '/ViewPart/' + action + GetQueryString(),
        data: post,
        dataType: 'jsonp',
        jsonp: 'callback',
        //headers: 'P3P: CP="IDC DSP COR CURa ADMa OUR IND PHY ONL COM STA"',
        cache: false,
        async: true,
        success: function (data) {
            var $divContainer = $('<div />').addClass(cssclass).html(data.message);
            $tag.replaceWith($divContainer);
            $('#' + $tag.attr('vt-uid')).remove();
            return;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $('#' + $tag.attr('vt-uid')).remove();
            var $divContainer = $('<div />').hide().html(XMLHttpRequest.responseText);
            //alert(XMLHttpRequest.responseText);
        }
    });
}

function GetQueryString() {
    var originalUrl = document.location.href;
    var pos = originalUrl.indexOf('?');
    if (pos != -1) {
        return originalUrl.substr(pos);
    } else {
        return "";
    }
}

function MakeOriginalCaseToAttrName(name) {
    var char = "";
    var pos = name.indexOf("-");
    while (pos != -1) {
        char = name.substr(pos, 2);
        if (char.length == 2) {
            name = name.replace(char, char.substr(1, 1).toUpperCase());
            pos = name.indexOf("-");
        } else {
            alert("Nome de atributo invÃ¡lido dentro da tag 'VT': " + name + ". \n Os nomes tem que ser em caixa baixa e os compostos separadodos por hiffen (-)");
        }
    }
    return name;
}
