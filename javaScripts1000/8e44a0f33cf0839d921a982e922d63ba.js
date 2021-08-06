document.addEventListener("DOMContentLoaded", function () {
    var lazyCEObservers = [];
    var lazyCustomElements = document.querySelectorAll(
        "tm-competition-table, tm-competition-assists, tm-competition-rumour, tm-competition-scorer, tm-competition-cleansheets, tm-competition-mvp, tm-competition-matches, tm-competition-youngest-player, tm-competition-oldest-player, tm-competition-scorer-points, tm-competition-top-transfers, tm-instagram-widget, tm-quick-select-bar"
    );

    function registerObservers(elements) {
        elements.forEach(function (element, index) {
            lazyCEObservers[index] = new IntersectionObserver(
                intersectionCallback,
                {
                    root: null,
                    rootMargin: "0px 0px 300px 0px",
                    threshold: [0, 1],
                }
            );
            lazyCEObservers[index].observe(element);
        });
    }

    function intersectionCallback(entries, observer) {
        entries.forEach(function (entry) {
            if (entry.intersectionRatio > 0 || entry.isIntersecting) {
                setTimeout(function () {
                    entry.target.setAttribute("in-viewport", "true");
                }, 250);
                observer.disconnect();
            }
        });
    }

    if (!!window.IntersectionObserver) {
        registerObservers(lazyCustomElements);
    } else {
        lazyCustomElements.forEach(function (element) {
            element.setAttribute("in-viewport", "true");
        });
    }
});
