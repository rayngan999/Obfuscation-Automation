<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=EDGE" />
</head>
<body>
<script>
    
    !function(a,b,c,d,e,f,g,h,i,j,k,l){a[f]=a[f]||[],k=a[f];try{k.push(a.localStorage)}catch(a){}try{k.push(a.sessionStorage)}catch(a){}k.push({setItem:function(a,d,s,e,f,g,r){r="",e=new Date,f=typeof d,g="object"===f&&"undefined"!==f?JSON.stringify({v:d}):d,e.setTime(e.getTime()+1e11);for(key in s){if(key.toLowerCase() == "secure" && s[key] && location.protocol != "https:") {delete s[key];continue;}r+=key+"="+s[key]+";"}b[c]=a+"="+encodeURIComponent(g)+"; expires="+e.toUTCString()+"; path=/;"+r;},getItem:function(a){for(var f=a+"=",g=b[c].split(";"),h="",j={},k=0;k<g[d];k++){for(var m=g[k];" "==m.charAt(0);)m=m[e](1,m[d]);if(0===m.indexOf(f)){if(h=decodeURIComponent(m[e](f[d],m[d])),"{"==h[e](0,1))try{if("v"in(j=JSON.parse(h)))return j.v}catch(a){return h}return"undefined"==h?l:h}}return null}}),k.get=function(a,b){for(i=0;i<k[d];i++)if(b=k[i]){try{b=b.getItem(a)}catch(a){}if(b)return k.set(a,b),b}},k.set=function(a,b,s){for(i=0;i<k[d];i++)if(result=k[i],result)try{result.setItem(a,b,s)}catch(a){}}}(window,document,"cookie","length","substring","APC");

    if (!Object.keys) {
        Object.keys = function(obj) {
            var keys = [];

            for (var i in obj) {
                if (obj.hasOwnProperty(i)) {
                    keys.push(i);
                }
            }

            return keys;
        };
    }

    // logger for AD-2589 start
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    try {
        var apuidInCookie = getCookie("apuid");
        var apuidInLS = APC.get("apuid");
        if (!apuidInCookie && apuidInLS) {
            var img = document.createElement("img");
            img.setAttribute('src', 'https://file.adpartner.pro/check-local-storage.png');
            img.setAttribute('style', 'display:none;');
            document.getElementsByTagName('body')[0].appendChild(img);
        }
    }catch(e){}
    // logger for AD-2589 end

    var userId = "";
    var saved = true;
    try {
        userId = APC.get("apuid");
		var pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        if (typeof userId !== "string" || !pattern.test(userId)){
            userId = "";
        } else {
            parent.window.postMessage("user_id_" + userId, document.referrer ? document.referrer : "*");
        }
    }catch(e){}

    if (userId === "") {
        var newUserId = "82ac22db-ea93-4de7-981c-06f0f25fdc8b";
        try{
            APC.set("apuid", newUserId, {secure: true, sameSite: 'none'});
            userId = APC.get("apuid");
        }
        catch(e){}
        if (newUserId != userId) {
            saved = false;
            userId = newUserId;
        }
    }

    var apudmg = undefined;
    try{
        apudmg = APC.get('apudmg');
    }
    catch(e){}

    if(!apudmg && saved){
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-83862518-1', 'auto');
        ga('set', 'dimension1', userId);
        ga('send', 'pageview');

        try{
            APC.set('apudmg', 1, {secure: true, sameSite: 'none'});
        }
        catch(e){}
    }

    var xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
           var data = xhttp.responseText;
            try {
                var dataNew = JSON.parse(data);
                if (typeof(dataNew['unitId']) != 'undefined') {
                    dataNew['bannerNum'] = "";
                    data = JSON.stringify(dataNew);
                }
            }catch(e){}
            parent.window.postMessage(data, document.referrer ? document.referrer : "*");
        }
    };

    xhttp.open("POST", "https://a4p.adpartner.pro/jsunit?banner_num=1627933115992154113&id=3935&is_in_viewport=1&ref=&reload_count=0&session_id=17c27ed2-9f88-40e2-a17c-12781f0e6a3f&session_pageview=1&shown=&site_visited=1&unit_id=7024", true);
    xhttp.withCredentials = true;
    xhttp.setRequestHeader("Content-type", "text/plain");
    xhttp.send(JSON.stringify({
    	"apuid": userId,
    	"width": 300,
        "screen_width": 1792,
    	"url": encodeURIComponent("https://tvgid.ua/")
    }));
    
</script>

</body>
</html>
