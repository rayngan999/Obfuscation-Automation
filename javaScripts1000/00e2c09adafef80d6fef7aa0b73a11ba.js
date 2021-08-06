// ES5 only
(function() {
    var bodyClass = '__body_initial_color_light';
    var cookies = {};

    document.cookie
        .split(';')
        .map(function(c) {
            return c.trim();
        })
        .forEach(function(c) {
            var pair = c.split('=');
            if (pair && pair.length === 2) {
                cookies[pair[0]] = pair[1];
            }
        });

    var theme = cookies.theme;
    if (theme === 'dark') {
        bodyClass = '__body_initial_color_dark';
    } else if (theme === 'device') {
        bodyClass =
            window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
                ? '__body_initial_color_dark'
                : '__body_initial_color_light';
    }

    document.documentElement.classList.add(bodyClass);
})();
