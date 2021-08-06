(function() {
    if (typeof currentLayout !== 'undefined') {
        var layoutWithScripts = [
                'HomeGenerale.twig',
                'MediaPlayer.twig'
            ];


        var display = layoutWithScripts.indexOf(currentLayout);

        if (display >= 0 && site != 'site01net') {
            var xtnv = document; //parent.document or top.document or document
            var xtidmod = ""; //ClickZone model id
            var xtergo = ""; //0 to deactivate ClickZone

            var path = 'bfmtv';
            if (site == 'site01net') {
                var path = '01net';
            }

            function loadXitiScript(e){var t="https://static.bfmtv.com/ressources/js/external/"+path+"/",a=document.createElement("script"),n=document.getElementsByTagName("script")[0];a.type="text/javascript",a.defer=1,a.async=1,a.src=t+"xtclicks.js",a.onload=e,a.readyState?a.onreadystatechange=function(){("loaded"==a.readyState||"complete"==a.readyState)&&(a.onreadystatechange=null,e&&"function"==typeof e&&e())}:a.onload=function(){e&&"function"==typeof e&&e()},n.parentNode.insertBefore(a,n)}

            loadXitiScript();
        }
    }
})();