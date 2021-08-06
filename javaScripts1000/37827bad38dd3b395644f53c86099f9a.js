
(function() {
var widthExoLayer;
var heightExoLayer;
var marginExoLayer;

marginExoLayer = 20;
widthExoLayer       = 300;
heightExoLayer      = 250;;
var frequency_period = 60;
var exoDocumentProtocol = (document.location.protocol != "https:" && document.location.protocol != "http:") ? "https:" : document.location.protocol;
var closeImage = '//s3t3d2y7.ackcdn.net/images/close-icon-circle.png';

function setCookie(c_name, value, minutes_ttl) {
    minutes_ttl = parseInt(minutes_ttl, 10);

    var exdate = new Date();
    exdate.setMinutes(exdate.getMinutes() + minutes_ttl);
    var c_value = escape(value) + "; expires=" + exdate.toUTCString() + ";path=/";
    document.cookie = c_name + "=" + c_value;
}

function getCookie(c_name) {
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++)
    {
        x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
        y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
        x=x.replace(/^\s+|\s+$/g,"");
        if (x==c_name)
        {
            return unescape(y);
        }
    }
}

var codeExoLayer = ''
	+ '<div id="divExoLayerWrapper" style="position: fixed; width: ' + widthExoLayer + 'px; height: 0px; display:none; z-index: 100; bottom: 0 !important; right: ' + marginExoLayer + 'px; !important; transition: height 1s ease-in-out 0s; -webkit-transition: height 1s ease-in-out 0s; -o-transition: height 1s ease-in-out 0s; -moz-transition: height 1s ease-in-out 0s; -ms-transition: height 2s ease-in-out 0s;">'
    + '<div id="divExoLayer" style="position: absolute;  z-index: 101;">'
        + '<div id="exoCloseButton" style="height:24px;width:24px;float:right;top:-12px;right:-12px;position:relative;z-index:100;cursor:pointer;vertical-align:top;">'
            + '<img src="' + closeImage + '">'
        + '</div>'
	+ '<div style="position: relative; top:-24px; width: ' + widthExoLayer + 'px; height: ' + heightExoLayer + 'px; overflow: hidden;">'
    + '<iframe id="exoIMFrame" frameborder="0" scrolling="no" width="300px" height="250px"></iframe>'
	+ '</div>'
    + '</div>'
	+ '</div>';
	

function writeExoLayer() {
	document.write(codeExoLayer);
    var doc = document.getElementById('exoIMFrame').contentWindow.document;
    doc.open();
        doc.write('<body style="margin:0px;"><div>\n    <a href="https://syndication.realsrv.com/click.php?data=H4sIAAAAAAAAA1VQTW_bMAz9K7nkOIMUJVk.FgiCDF7dbu3cYDfLspFsdvxRB90M_vjRTjtgogiS71EPIjXGgMYxRQb5NE3965butmovtwjoIn.eJW2i_tRvaS..K6XBDSdbeRu2Spx2pg6YOKcoVKUFbYtCuxCDElrkdpTEVhsrlZdKOzQmSRbSn5fXEIEcMihIvyJdF7IsHB6_HQ_Zl.yQHYt4pAb32IQs94P_MQzj2NPTtWua_DFP7fCCeD8Ph.f82oTU5og_x3RI03E8vswzHL8_C35vcxj749O1XVpgvjw0AZX_.rnWb74tzY0cLiu75rv47pN8qmyXufVtU1L_qv68deM6OCx1wGUt19epa5mB0ao4IZkx5tN58l3XRpdqYsQkUmQjBIzQOv7YA7.vh0WMWSOTKIgMMAH8VkYExZhFTiL8pwmrbd6hjUCb6rK59S0WGyKTOMmcUpSQ4vWDjlfWqDXof.0PKdd1WahaW_SqNsaB9SWWnqjWuiJdwF.bZyG2MAIAAA--"\n        id="link_b5ec886d70085f4f99bcbedf65fc07ee"\n        target="_blank"\n        ontouchstart=""\n        onclick="\n            let href=\'https://syndication.realsrv.com/click.php?data=H4sIAAAAAAAAA1VQTW_bMAz9K7nkOIMUJVk.FgiCDF7dbu3cYDfLspFsdvxRB90M_vjRTjtgogiS71EPIjXGgMYxRQb5NE3965butmovtwjoIn.eJW2i_tRvaS..K6XBDSdbeRu2Spx2pg6YOKcoVKUFbYtCuxCDElrkdpTEVhsrlZdKOzQmSRbSn5fXEIEcMihIvyJdF7IsHB6_HQ_Zl.yQHYt4pAb32IQs94P_MQzj2NPTtWua_DFP7fCCeD8Ph.f82oTU5og_x3RI03E8vswzHL8_C35vcxj749O1XVpgvjw0AZX_.rnWb74tzY0cLiu75rv47pN8qmyXufVtU1L_qv68deM6OCx1wGUt19epa5mB0ao4IZkx5tN58l3XRpdqYsQkUmQjBIzQOv7YA7.vh0WMWSOTKIgMMAH8VkYExZhFTiL8pwmrbd6hjUCb6rK59S0WGyKTOMmcUpSQ4vWDjlfWqDXof.0PKdd1WahaW_SqNsaB9SWWnqjWuiJdwF.bZyG2MAIAAA--\';\n            href += \'&clickX=\' + event.clientX;\n            href += \'&clickY=\' + event.clientY;\n            this.href = href;\n        ">\n        <video\n            id="video_b5ec886d70085f4f99bcbedf65fc07ee"\n            loop\n            muted\n            autoplay\n            playsinline\n            preload="auto"\n            width="300"\n            height="250"\n        ><source src="https://s3t3d2y7.ackcdn.net/library/184868/95099f484f5941d2c218dd5cc893903b49368513.mp4" type="video/mp4" /></video>\n    </a>\n</div><script>var exoDynamicParams={"id":"b5ec886d70085f4f99bcbedf65fc07ee","alternateMediaUrl":"https:\/\/s3t3d2y7.ackcdn.net\/library\/184868\/6b0157a9821217bf4b4deb74aceb5db6e95cf848.gif","width":"300","height":"250"};var elemVideo=document.getElementById("video_"+exoDynamicParams.id);if(exoDynamicParams.id&&exoDynamicParams.alternateMediaUrl&&exoDynamicParams.width&&exoDynamicParams.height&&elemVideo!==undefined&&elemVideo!==null){var video=elemVideo.play();if(video===undefined){changeVideoToGif(exoDynamicParams.id,exoDynamicParams.alternateMediaUrl,exoDynamicParams.width,exoDynamicParams.height)}else{video.then(function(_){}).catch(function(error){changeVideoToGif(exoDynamicParams.id,exoDynamicParams.alternateMediaUrl,exoDynamicParams.width,exoDynamicParams.height)})}}function getExtension(fileName){var fileNameSplitted=fileName.split(\'.\');return fileNameSplitted[(fileNameSplitted.length-1)]}function changeVideoToGif(id,image,width,height){var elemLink=document.getElementById(\'link_\'+id);if(getExtension(image)===\'gif\'&&elemLink!==undefined&&elemLink!==null){var html=\'<img border="0" width="\'+width+\'" height="\'+height+\'" src="\'+image+\'">\';elemLink.innerHTML=html}}</script></body>');
        doc.close();
}

function logImp() {
    
    impTrack('https://syndication.realsrv.com/cimp.php?t=imp&data=H4sIAAAAAAAAA1WQTWoDMQyFr9ILjNGPJUtZF1roMvQA43GGdtFmk0UWOnzlDASqDyPh92zJJiBcwBagF9QT+klaIHoh1oKABdXi/eMtKsbX961frz/l93ILtGqpKBorRzNTkGBvWkVDwNLfACWzoYg7BWpwQOJtpgLAgtEgPs+vj4VJegDuJJD17Jp9omYN93mSu7WuAxlGHSiVXMzGuoPIWNnmBfBvSjgogHGIB02YxS2WuWVE7EyRAfGQM4Se5glFozmSy8ZbzTf2SpJfQOb7ZetWlfa2Vv0DE7umu00BAAA=&d=inst');
}

function closeExoLayer(e) {
    e.stopPropagation();
    e.preventDefault();
    document.getElementById('divExoLayerWrapper').style.display = "none";
    closedStatus = true;

            setCookie('zone-closed-3976456', closedStatus, frequency_period);
    }

function initExoLayer() {
    var et = document.getElementById('exoCloseButton');
    et.addEventListener('mousedown',closeExoLayer,true);
    et.addEventListener('touchstart',closeExoLayer,true);
    et.addEventListener('mouseup',closeExoLayer,true);
    et.addEventListener('touchend',closeExoLayer,true);
}

function showExoLayer() {
    if (!closedStatus) {
        document.getElementById('divExoLayerWrapper').style.display = "block";
        window.setTimeout(function() {
           document.getElementById('divExoLayerWrapper').style.height = heightExoLayer + 'px';
           hideAgainExoLayer();
        }, 100);
    }
}

function hideExoLayer() {
    document.getElementById('divExoLayerWrapper').style.height = '0px';
    window.setTimeout(function() {
        document.getElementById('divExoLayerWrapper').style.display = "none";
        showAgainExoLayer();
    }, 1000);
}

function showAgainExoLayer() {
	initExoLayer();
	window.setTimeout(showExoLayer, 5000);
}

function hideAgainExoLayer() {
	window.setTimeout(hideExoLayer, 7000);
}

function loadExoLayer() {
	initExoLayer();
	showExoLayer();
}

function impTrack(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.withCredentials = true;
    xhr.send();
}


    var closedStatus = getCookie('zone-closed-3976456');
if (!closedStatus) {
    writeExoLayer();
    logImp();
    window.setTimeout(loadExoLayer,3000);
}

    var exoIMFrame = document.getElementById('exoIMFrame');
    if (exoIMFrame) {
        exoIMFrame.contentWindow.document.body.querySelector('a').addEventListener('click', function(e) {
            e.preventDefault();
            if (this.href.indexOf("?") !== -1) {
                var separatorUrlParams = "&";
            } else {
                var separatorUrlParams = "?";
            }
            clickXY = 'clickX=' + e.clientX + '&clickY=' + e.clientY;
            window.open(this.href + separatorUrlParams + clickXY, '_blank');
        });
    }

})();



    