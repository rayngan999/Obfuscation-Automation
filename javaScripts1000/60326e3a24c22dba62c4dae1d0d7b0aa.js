function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(function() {
    var origin = location.protocol + '//' + location.hostname;
    var img = new Image(1, 1);
    img.src = origin + '/index.php?action=track_visitor&' + new Date().getTime();
    img.onload = function() { return true; };
});
