<!DOCTYPE html>
<html>
<head>
    <title></title>
<style>
html, body {
    margin: 0;
    height: 100%;
    width: 100%;
    overflow:hidden;
}
</style>
</head>
<body>
<hitag data-tag='ch=2017005&st=201703000010'></hitag>
<script src='//t.ssp.hinet.net/tag.js'></script>
<script src="https://code.jquery.com/jquery-1.9.1.min.js" integrity="sha256-wS9gmOZBqsqWxgIVgA8Y9WcQOa7PgSIX+rPA0VL2rbQ=" crossorigin="anonymous"></script>
<script type="text/javascript">
(function(){
    function hideAd() {
    }
    window.hideAd = hideAd;
    function noAd() {
        console.info('SSP AD noAd qzluN');
        clearTimeout(thirdTime);
        clearInterval(monitor);
        hideAd();
        window.location.replace('https://ssp.hinet.net/api/web/request/?c=2017005&s=201703000010&t=1609310836026&u=b2b22dae-94e7-6e7f-9fe4-6dd2441830a8&o=qzluN&show=static&ca=&k=&cab=&kb=&mode=roll');
    }
    window.noAd = noAd;
    function showAd() {
        clearTimeout(thirdTime);
        $.get("https://ssp.hinet.net/api/web/third?c=2017005&s=201703000010&th=69&wc=2916");
        console.info('SSP AD show qzluN');
    }
    window.showAd = showAd;
    var thirdTime = setTimeout(function() {
        var yahoo_ad = $('#thirdparty').find('img').attr('src');
        var head_javascript = $('head').find('script');
        var iframe_content = $('body').find('iframe');
        if(yahoo_ad !=  undefined || iframe_content.length > 0|| head_javascript.length > 0){
            showAd();
        }else{
            noAd();
        }
    },3000);

    var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent",
    eventer = window[eventMethod],
    messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
    eventer(messageEvent,function(e) {
        //console.log(e)
        var key = e.message ? "message" : "data",
            data = e[key];
        if(data === "noAd"){ console.info(data); noAd();e.stopPropagation();}
        if(data === "showAd"){console.info(data); showAd();e.stopPropagation();}
    },false);
    
    var monitor = setInterval(function(){
        var elem = document.activeElement;
        if(elem && (elem.tagName == 'IFRAME' || elem.tagName == 'iframe')){
            clearInterval(monitor);
            console.info('clicked!')
            hideAd();
        }
    },1000)
})();
</script>
<div id="thirdparty">
<script type="text/javascript" async src="//ads.aralego.com/sdk"></script>
<ins class="ucfad_async" style="display:none;width:970px;height:250px" data-ad_unit_id="ad-9A293742B8E4AB8B18966DA89B3D67A"data-gdpr="${GDPR}"data-euconsent-v2="${GDPR_CONSENT_607}"></ins>
<script>
  (ucfad_async = window.ucfad_async||[]).push({});
</script></div>
</body>
</html>
