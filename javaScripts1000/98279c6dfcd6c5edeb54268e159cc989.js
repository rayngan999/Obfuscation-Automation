<html>

<script>


 var getUUID =function () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
	var getCookie = function(cname) {
        try {
            var name = cname + "=";
            var decodedCookie = document.cookie;
            var ca = decodedCookie.split(';');
            for(var i = 0; i <ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return decodeURIComponent(c.substring(name.length, c.length));
                }
            }
            return "";
        } catch(e) {
        }
    };

 var setCookie = function(k, v) {
        var d = new Date();
        d.setTime(d.getTime() + (1500 * 240 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = k + "=" + v + ";path=/;"+ expires+";domain=.izooto.com;SameSite=None;Secure;";
    };

var sendMessage = function(key, value, option, bkey) {
       var jsonToSend = {
                   k: key,
                   v: value
               };
       if (bkey != undefined) {
               jsonToSend.bkey = bkey;
           }
		 var msg = {
            "izootoMsg" : jsonToSend
        };

       if ('parent' === option) {
           window.parent.postMessage(JSON.stringify(msg), '*');
       } else if('opener' === option) {
           window.opener.postMessage(JSON.stringify(msg), '*');
       } else {
        //console.log(JSON.stringify(jsonToSend));
           option.contentWindow.postMessage(JSON.stringify(msg), '*');
       }
   };

var cvalue =getCookie("IZCID");
if(cvalue=="") {
  var cvalue=getUUID();
  setCookie("IZCID",cvalue);
} else {
  setCookie("IZCID",cvalue);
}

sendMessage('izCidToParent',cvalue,'parent');


</script>
</html>

