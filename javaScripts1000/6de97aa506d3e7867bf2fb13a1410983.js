ï»¿var searchFiltersToAdd = new Array(0);
var partialSearchUrl = '/busca/?';

$(document).ready(function() {
    bindMultipleSearchNavigatorCheckBoxes();
    bindAdvancedSearchBoxes();
    cleanAdvancedSearchBoxes();
    bindSearchNavigatorButtons();
});

function bindMultipleSearchNavigatorCheckBoxes() {
    $('.multi-search-checkbox').click(function() {
        onSearchNavigatorCheckBoxClick(this);
    });
}

function bindAdvancedSearchBoxes() {
    $('.advanced-search-box').blur(function() {
        onAdvancedSearchBoxBlur(this);
    });
}

function cleanAdvancedSearchBoxes() {
    $('.advanced-search-box').each(function(sender) {
        this.value = '';
    });
}

function bindSearchNavigatorButtons() {
    $('a.search-filter-button').click(function() {
        onSearchNavigatorButtonClick(this);
    });
}

function onSearchNavigatorCheckBoxClick(sender) {
    var filter = $(sender).attr('rel');
    if (sender.checked) {
        searchFiltersToAdd.add(filter);
    }
    else {
        searchFiltersToAdd.remove(filter);
    }
}

function removeFTextFilter(vector, filter) {
    var removed = false;
    var index = 0;
    while ((index < vector.length) && !removed) {
        if (vector[index].split('&')[1] == filter.split('&')[1]) {
            vector.splice(index, 1);
            removed = true;
        }
        index++;
    }
}

function onAdvancedSearchBoxBlur(sender) {
    var filter = $(sender).attr('rel');
    var value = jQuery.trim($(sender).val());

    removeFTextFilter(searchFiltersToAdd, filter);
    if (value != '') {
        var preProcessedFilter = filter.replace('##value##', value);
        var splitFilter = preProcessedFilter.split('&');
        for (i = splitFilter.length - 1; i >= 0; --i) {
            if ($.inArray(splitFilter[i], searchFiltersToAdd) == -1) {
                searchFiltersToAdd.add(splitFilter[i]);
            }
        }
    }
}

function foundOtherAdvancedSearchField(searchFilters) {
    var found = false;
    var i = 0;
    while (!found && i < searchFilters.length) {
        found = searchFilters[i].indexOf('specificationIndexed_') != -1;
        i++;
    }
    return found;
}

function removeQueryToFiltersToAdd(partialUrl) {
    var splitUri = partialUrl.split('?');
    if (splitUri.length > 1) {
        var parameters = splitUri[1].split('&');
        for (i = parameters.length - 1; i >= 0; --i) {
            if (parameters[i].indexOf("map=") == -1)
                continue;
            if ((parameters[i].length > 0) && ((parameters[i].indexOf("specificationIndexed_", 0) == -1) || !foundOtherAdvancedSearchField(searchFiltersToAdd))) {
                searchFiltersToAdd.add(unescape(parameters[i]));
            }
        }
        return splitUri[0] + '?'; 
    }
    else {
        return splitUri[0].replace('&','?');
    }
    
}

function onSearchNavigatorButtonClick(sender) {
    var searchUrl = removeQueryToFiltersToAdd(partialSearchUrl);
    var isMultipleSelection = false;

    if ($.inArray('Mode=M', searchFiltersToAdd) == -1 && sender.search.indexOf('Mode=M') == -1) {
        if ($(sender).hasClass('bt-refinar')) {
            searchFiltersToAdd.add('Mode=M');
            isMultipleSelection = true;
        }
    }
    else {
        isMultipleSelection = true;
    }

    var separator = '&';
    var newFilters = '';
    var newPathAndQuery = '/busca/';
    for (i = 0; i < searchFiltersToAdd.length; i++) {
        newFilters += separator + searchFiltersToAdd[i];

        if (searchFiltersToAdd[i].indexOf('fq=specificationFilter_') == 0) {
            $("input[rel='" + searchFiltersToAdd[i] + "']").attr('checked', false);
        }
    }

    if (newFilters.length > 0) {
        newFilters = newFilters.substring(1);

        searchUrl += newFilters;
        newPathAndQuery += '?' + newFilters;
    }

    if (searchUrl.length > 0) {
        if (searchUrl[0] == '?') {
            searchUrl = searchUrl.substring(1);
        }
    }

    currentPathAndQuery = '';
    if (sender.pathname.length > 0) {
        currentPathAndQuery = sender.pathname.indexOf('/') == 0 ? sender.pathname : '/' + sender.pathname;
        currentPathAndQuery += sender.search;
    }

    if (isMultipleSelection) {
        $.ajax({
            url: "/doresolvecriteriatofriendlyurl/",
            dataType: "text",
            type: "POST",
            data: { currentPathAndQuery: currentPathAndQuery, newPathAndQuery: newPathAndQuery },
            success: function (data) {
                if (data != null) {
                    document.location.href = '/' + data;
                }
            }
        });
    }
    else {
        document.location.href = searchUrl;
    }
}

function goToTopPage() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
}
