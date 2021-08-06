(function () {
    // LP-4062 - load player
    const userAgent = navigator.userAgent;
    if (userAgent && userAgent.search(/lighthouse/i) >= 0) {
        return; // stop
    }

    // clone script
    const me = document.currentScript;
    const thePlayer = document.createElement('script');
    for (let i = me.attributes.length - 1; i >= 0; i--) {
        const attribute = me.attributes[i];
        thePlayer.setAttribute(attribute.name, attribute.value);
    }

    // change url
    thePlayer.src = me.src.replace('-lh.js', '.js');

    // insert before current script
    me.parentNode.insertBefore(thePlayer, me);
})();
