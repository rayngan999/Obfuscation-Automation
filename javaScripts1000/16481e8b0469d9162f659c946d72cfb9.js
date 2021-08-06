"use strict";
(function () {
    window.addEventListener('DOMContentLoaded', function () {
        var elementList = document.querySelectorAll('span[data-link-node]');
        for (var i = 0; i < elementList.length; i++) {
            var el = elementList[i];
            var link = document.createElement('a');
            link.href = atob(el.dataset.linkNode);
            link.innerHTML = el.innerHTML;
            var testId = document.createAttribute('test-id');
            testId.value = el.attributes.getNamedItem('data-anchor-test-id').value;
            link.attributes.setNamedItem(testId);
            if (el.attributes.getNamedItem('class')) {
                link.attributes.setNamedItem(el.attributes.getNamedItem('class').cloneNode());
            }
            link.attributes.setNamedItem(el.attributes.getNamedItem('data-cname').cloneNode());
            link.attributes.setNamedItem(el.attributes.getNamedItem('data-link-node').cloneNode());
            el.parentNode.replaceChild(link, el);
        }
    });
})();

//# sourceMappingURL=lazyLoadSeoLinks.js.map
