if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, '');
    };
}

var currentDept = '0';

var suggestionsStack = '';

function enableFullTextSearchBox(textBox, dropDown, fieldDropDown, button, searchlink, defaulttext) {

    if ($('#' + textBox).val() == '') {
        $('#' + textBox).val(defaulttext);
    }

    $('#' + textBox).focus(function () {
        $(this).filter(function () {
            return $(this).val() == '' || $(this).val() == defaulttext;
        }).val('');
    });

    $('#' + textBox).blur(function () {
        $(this).filter(function () {
            return ($(this).val() === '');
        }).val(defaulttext);
    });

    $('#' + dropDown).change(function () {
        var control = $('#' + fieldDropDown);
        $(control).val('');
        if ($(this).val() === currentDept) {
            $(control).removeAttr('disabled');
        }
        else {
            $(control).attr('disabled', 'disabled');
        }
    });

    $('#' + textBox).keypress(function (k) {
        if (k.which === 13) {
            doSearch(textBox, dropDown, fieldDropDown, searchlink, defaulttext);
            return false;
        }
        return true;
    });
    $('#' + button).click(function () {
        doSearch(textBox, dropDown, fieldDropDown, searchlink, defaulttext);
    });
}

function containsIllegalPathCharacter(strTestString) {

    var illegalPathCharacterPattern = "['\"\%\#\&\*\+\(\)\|\<\>\/\\\?]"; // Os Colchetes apenas delimitam uma lista de opï¿½ï¿½es (OR).

    var re = new RegExp(illegalPathCharacterPattern, "gi");

    return (re.exec(strTestString) != null);
}

function removeChars(str) {
    var newStr = str.replace(",", "");
    newStr = newStr.replace("\"", "+");
    var sourceCharacters = "'!@#$%&+,*()-?:;={}][/\u00A8\u00C4\u00C5\u00C1\u00C2\u00C0\u00C3\u00E4\u00E1\u00E2\u00E0\u00E3\u00C9\u00CA\u00CB\u00C8\u00E9\u00EA\u00EB\u00E8\u00CD\u00CE\u00CF\u00CC\u00ED\u00EE\u00EF\u00EC\u00D6\u00D3\u00D4\u00D2\u00D5\u00F6\u00F3\u00F4\u00F2\u00F5\u00DC\u00DA\u00DB\u00FC\u00FA\u00FB\u00F9\u00C7\u00E7 /";
    var targetCharacters = "-----------------------AAAAAAaaaaaEEEEeeeeIIIIiiiiOOOOOoooooUUUuuuuCc--";
    for (var i = 0; i < sourceCharacters.length; i++)
        newStr = newStr.replace(sourceCharacters[i], targetCharacters[i]);
    return newStr;
}

function doSearch(textBox, dropDown, fieldDropDown, searchlink, defaulttext) {
    var ft = jQuery.trim($('#' + textBox).val());
    var dept = $('#' + dropDown).val();
    var field = $('#' + fieldDropDown).val();

    var deptObj = $('#' + dropDown)[0];
    var deptName = deptObj.selectedIndex != 0 ? deptObj[deptObj.selectedIndex].innerHTML.toLowerCase() : '';
    deptName = removeChars(deptName);

    if (ft != '' && ft != defaulttext) {
        var re = new RegExp("['\"\%\#\&\*\+\(\)\|\<\>\\\/\?]", "g");
        ft = ft.replace(re, ' ').trim();

        // If it does not find illegal characters in 'ft', builds a friendly URL for the search link.
        // Otherwise, builds an old and unfriendly URL for the search link.
        var concatenador;

        if (!containsIllegalPathCharacter(ft) && ft.toLowerCase() !== 'admin' && ft.toLowerCase() !== 'webservice' && ft.toLowerCase() !== 'admin/a') {
            while (searchlink.indexOf("SEARCHTERM") > 0) {
                searchlink = searchlink.replace('SEARCHTERM', encodeURIComponent(ft));
            }

            concatenador = searchlink.indexOf("?") < 0 ? '?' : '&';
            if (field !== '') {
                searchlink += concatenador + 'map=specificationIndexed_' + field;
            }

            concatenador = searchlink.indexOf("?") < 0 ? '?' : '&';
            if (deptName !== '') {
                searchlink = '/' + deptName + searchlink;
            }
        }
        else {
            searchlink = searchlink.replace('SEARCHTERM', 'busca');

            concatenador = searchlink.indexOf("?") < 0 ? '?' : '&';
            if (field !== '') {
                searchlink += concatenador + 'fq=specificationIndexed_' + field + ':' + encodeURIComponent(ft);
            }
            else {
                searchlink += concatenador + "ft=" + encodeURIComponent(ft);
            }

            concatenador = searchlink.indexOf("?") < 0 ? '?' : '&';
            if (deptName !== '') {
                searchlink += concatenador + 'fq=C:' + dept + '/';
            }
        }

        if (jQuery.trim(ft) !== '') {
            if (suggestionsStack === '' || suggestionsStack === null) {
                document.location.href = searchlink;
            }
            else {
                var suggestions = suggestionsStack.split('\u00A3'); // ï¿½
                if (suggestions.length > 1) {
                    var suggestionSplitted;
                    var suggestionIdx = suggestions.length - 1;
                    var suggestionFound = false;

                    for (var i = suggestions.length - 1; i >= 1; --i) {
                        suggestionSplitted = suggestions[i].split('\u00A2'); // ï¿½

                        var friendlyDescription = suggestionSplitted[0].replace(re, ' ').trim();

                        if (jQuery.trim(ft) == jQuery.trim(friendlyDescription)) {
                            suggestionIdx = i;
                            suggestionFound = true;
                            break;
                        }
                    }

                    if (suggestionFound) {
                        suggestionSplitted = suggestions[suggestionIdx].split('\u00A2'); // ï¿½
                        document.location.href = suggestionSplitted[1];
                    }
                    else
                        document.location.href = searchlink;
                }
            }
        }
    }
}

$(document).ready(function () {
    var gotoHref = function (href) {
        document.location.href = href;
    };

    var mapReturnedItems = function (item) {
        return {
            label: (item.thumb != "" ? item.thumb + " " : "") + item.name,
            value: item.name,
            href: item.href,
            criteria: item.criteria
        };
    };

    var autoCompleteSource = function (request, response) {
        $.ajax({
            url: "/buscaautocomplete/",
            dataType: "json",
            data: {
                maxRows: 12,
                productNameContains: request.term,
                suggestionsStack: suggestionsStack
            },
            success: function (data) {
                if (data) {
                    response($.map(data.itemsReturned, mapReturnedItems));
                }
            }
        });
    };

    if ($.fn.autocomplete) {
        $(".fulltext-search-box").autocomplete({
            source: autoCompleteSource,
            minLength: 3,
            delay: 500,
            select: function (event, ui) {
                gotoHref(ui.item.href);
            },
            open: function () {
                $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
            },
            close: function () {
                $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
            },
            focus: function (event, ui) {
                suggestionsStack = ui.item.criteria;
            }
        });
    }
});