    

<html>
<head>
	<meta name="robots" content="noindex">
	<script type="text/javascript" src="scripts/oii-ivid-perisistence.js?v=1.17"></script>
	<script>window.JSON || document.write('<script src="/scripts/libs/v2/json3.min.js"><\/script>');</script>
</head>
<body>
<script type="text/javascript">
    var rdto = new rdt();

    var expirationDate = new Date();	
    expirationDate.setDate(expirationDate.getDate()+1+365*5);	
    var cookieOptions = {
        expires : expirationDate,	
        domain : '.intuit.com',	
        path : '/',
        secure : true
    };

    var getParameterByName = function(name) {	
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");	
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),	
            results = regex.exec(window.location.search);	
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));	
    };

    // Although the /ividFrame java may overwrite the ivid cookie before we land in this jsp,
    // if RDT finds more matches for a previous ivid in other storage, it will choose that.
    // Also, note that rdto.set does not overwrite document.cookie, 
    // because some browsers restrict client-side TTL. oiiCookie.cookie sets cookies via API.
    function ividRetrievedCallback(rdtFoundIvid) {
        var queryStringIVID = getParameterByName('query_string_ivid');
        var newIvid = oiiCookie.cookie('ivid'); // the new cookie from /ividFrame java controller
        if(queryStringIVID) { // ignore RDT suggestion if the new ivid was chosen explicitly by url
            rdto.set('ivid', queryStringIVID);
            if(newIvid !== queryStringIVID) { // this never happens - see backend logic
                oiiCookie.cookie('ivid', queryStringIVID, cookieOptions);
            }
        } else if(rdtFoundIvid !== newIvid) { // prefer RDT's saved cookie, if different
            rdto.set('ivid', rdtFoundIvid); // re-synchronize RDT ivid
            oiiCookie.cookie('ivid', rdtFoundIvid, cookieOptions); // and restore the cookie
            // Note: mid-2019 we added logging and observed 2% of production /ividFrame cookies
            // are in fact overwritten by a value retrieve via RDT.
        } else {
            rdto.set('ivid', newIvid); // bring rdt up to date
        }

        var postMessageEnabled = 'postMessage' in window;
        if(parent && postMessageEnabled) {
            var o = {
                ivid: oiiCookie.cookie('ivid'),
                ivid_b: oiiCookie.cookie('ivid_b')
            };
            // this is a harmless message, thus wildcard allow origin
            parent.postMessage(JSON.stringify(o), "*");
        }
    }

    rdto.get('ivid', ividRetrievedCallback);

    // ********************* for tests **********************
    var messageReceiver = function(event) {
        var data = event.data ? event.data : event.message;
        if(data && window.JSON) {
            var obj = JSON.parse(data);
            if(obj && obj.event === 'deleteIVID') {
                var opts = { path:'/', domain: '.intuit.com' };
                if(obj.deleteIVID) {
                    oiiCookie.removeCookie('ivid', opts);
                }

                if(obj.deleteBackupIVID) {
                    oiiCookie.removeCookie('ivid_b', opts);
                }
            }
        }
    };

    if (window.addEventListener) {
        window.addEventListener("message", messageReceiver, false);
    } else if (window.attachEvent) {
        window.attachEvent("onmessage", messageReceiver);
    }
    // *********************** test section end **********************
    

</script>
</body>
</html>
