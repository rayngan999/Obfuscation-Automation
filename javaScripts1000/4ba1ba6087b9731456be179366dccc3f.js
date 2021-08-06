// Fall back from CDN
var scripts = document.scripts;
for (var i = 0; i < scripts.length; i++) {
    var e = scripts[i];
    if (
        e.src != '' &&
        e.src.indexOf('centraldispatch') == -1
    ) {
        var basename = e.src.split(/[\\/]/).pop();
        var fallback = false;
        if (basename.indexOf('bootstrap') > -1){
            if (typeof ($.fn.modal) === 'undefined') {
                fallback = true;
            }            
        }
        if (basename.indexOf('jquery.min') > -1){
            if (typeof (jQuery) === 'undefined') {
                fallback = true;
            }                        
        }
        if (basename.indexOf('jquery-ui.min') > -1){
            if (typeof (jQuery.ui) === 'undefined') {
                fallback = true;
            }                        
        }
        if(fallback){
            document.write('<script src="/js/responsive/vendor/' +basename+ '"><\/script>')        
        }
    }
}

var styles = document.styleSheets;
$.each(styles, function (i, e) {
    if (
        e.href != null &&
        e.href.indexOf('centraldispatch') == -1 &&
        e.cssRules != null &&
        e.cssRules.length == 0
    ) {
        $('<link href="/css/responsive/vendor/' + e.href.split(/[\\/]/).pop() + '" rel="stylesheet">').appendTo("head");            
    }
});
