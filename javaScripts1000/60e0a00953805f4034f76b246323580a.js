<!DOCTYPE html>
<html>
        <meta charset="UTF-8">
        <head></head>
	<body>
                <script type="text/javascript">
                        function getParameterByName(name)
                        {
                                if(typeof window.location != "undefined")
                                {
                                        var url = window.location.href;
                                        name = name.replace(/[\[\]]/g, "\\$&");
                                        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                                            results = regex.exec(url);
                                        if (!results) return '';
                                        if (!results[2]) return '';
                                        return decodeURIComponent(results[2].replace(/\+/g, " "));
                                }
                        }
                        function generateUUID()
                        {
                                var d = new Date().getTime();
                                
                                if (window.performance && typeof window.performance.now === "function"){
                                        d += performance.now();; //use high-precision timer if available
                                }       
                                var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                                        var r = (d + Math.random()*16)%16 | 0;
                                        d = Math.floor(d/16);
                                        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
                                });     
                                return uuid;
                        }
                        function getCookie(cname)
                        {
                                var name = cname + "=";
                                var ca = document.cookie.split(';');
                                for(var i=0; i<ca.length; i++) {
                                        var c = ca[i];
                                        while (c.charAt(0)==' ') c = c.substring(1);
                                        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
                                }
                                return "";
                        }
                        function setCookie(cname, cvalue, exdays)
                        {
                                var d = new Date();
                                d.setTime(d.getTime() + (exdays*24*60*60*1000));
                                var expires = "expires="+d.toUTCString();
                                document.cookie = cname + "=" + cvalue + "; " + expires +"; SameSite=None; Secure; path=/";
                        }
                        var aid = getParameterByName("aid");
                        var m = getParameterByName("m");
                        var r = getParameterByName("r");
                        var cv_ck = getParameterByName('cv_ck');
                        var brandcdn_uid = getCookie('brandcdn_uid');
                        var oid = Math.floor(Math.random() * 10000 * 10000);

                        if (brandcdn_uid == "" && cv_ck != "")
                        {
                                brandcdn_uid = cv_ck;
                        }
                        else if (brandcdn_uid == "")
                        {
                                brandcdn_uid = generateUUID();
                        }
			setCookie('brandcdn_uid',brandcdn_uid,365);
                        
                        var image_element = document.createElement('img');
                        image_element.src = "https://adservices.brandcdn.com/pixel/cv_confirm.png?aid="+aid+'&buid='+brandcdn_uid+"&m="+m+"&r="+r+"&oid="+oid;
                        image_element.style.display = 'none';
                        document.body.appendChild(image_element);
                </script>
        </body>        
</html>

