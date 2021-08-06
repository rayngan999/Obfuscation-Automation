ï»¿//Obj pro nacteni reklamy do divu
function adxAdvSSP() {
    var _arrData = new Array();
        _isLoad = false,
            _baseUrl = "https://richmedia.cz/ssp/";

    //Nacte globalni css
    loadContent(_baseUrl + "Css/main2.css", "", "", loadGlobalCss);
    //Nacte ssp js
    var script = document.createElement('script');
    script.src = "https://ssp.imedia.cz/static/js/ssp.js";
    document.head.appendChild(script);
    //Overim zda zda je script nacteny
    script.onload = function () {
        _isLoad = true;
    };

    //Initicalizace
    this.init = function Init (element, id, width, height, folder, template, acceptAdv, emptyEvent, closeButton=true, formatAd="sticky", responsive=true, nonresMobile=true, nameCookie='', timeCookie=600, closeButtonAlign='right', adOffsetTop=0) {
        _arrData[element] = { name: element, id: id, width: width, height: height, folder: folder, template: template, acceptAdv: acceptAdv, emptyEvent: emptyEvent, closeButton: closeButton, responsive: responsive, formatAd: formatAd, nonresMobile: nonresMobile, nameCookie: nameCookie, timeCookie: timeCookie, closeButtonAlign:  closeButtonAlign, adOffsetTop: adOffsetTop };

        if (_isLoad)
            initSSP(element);
        else
            setTimeout(function () { initSSP(element); }, 1000);
    };

    //Nacte globalni css
    function loadGlobalCss(content, element, param) {
        var style = document.createElement('style');
        style.innerHTML = content;
        document.head.appendChild(style);
    }

    //Nacte lokalni css
    function loadLocalCss(content, element, param) {
        var style = document.createElement('style');
        style.innerHTML = content;
        document.getElementById(element).appendChild(style);
    }

    function isMobile() {
	   try{ document.createEvent("TouchEvent"); return true; }
	   catch(e){ return false; }
	}



    function setCookie(name,value,seconds) {
        var expires = "";
        if (seconds) {
            var date = new Date();
            date.setTime(date.getTime() + (seconds*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }
    function eraseCookie(name) {   
        document.cookie = name+'=; Max-Age=-99999999;';  
    }



    //Nacte ssp
    function initSSP(element) {
        var data = new Object();
        data.zoneId = _arrData[element].id;
        data.id = element;
        document.getElementById(_arrData[element].name).style.display = "none";
        if(_arrData[element].closeButton === true || _arrData[element].formatAd == "interstitial") {
        	var elem1 = document.createElement('div');
            if(_arrData[element].formatAd == "interstitial") {
            	elem1.setAttribute("id", "banner-close-inter");
            } else {
                elem1.setAttribute("id", "banner-close");
                console.log(_arrData[element].closeButtonAlign );
                if(_arrData[element].closeButtonAlign == 'left') {
                    elem1.style.left = 0; 
                    elem1.style.right = 'auto'; 
                }
            }
        	elem1.innerHTML = "ZavÅÃ­t reklamu"; 
        	document.getElementById(element).appendChild(elem1);

            document.addEventListener('click',function(e){
                if(e.target && e.target.id== 'banner-close'){
                    document.getElementById(_arrData[element].name).style.display = "none";
                    if(_arrData[element].nameCookie != '') {
                        setCookie(_arrData[element].nameCookie,'hide', _arrData[element].timeCookie);
                    }
                    console.log(getCookie(_arrData[element].nameCookie));
                }
             });
            document.addEventListener('click',function(e){
                if(e.target && e.target.id== 'banner-close-inter'){
                    document.getElementById(_arrData[element].name).style.display = "none";
                    if(_arrData[element].nameCookie != '') {
                        setCookie(_arrData[element].nameCookie,'hide', _arrData[element].timeCookie);
                    }
                }
             });
        }
        if(_arrData[element].formatAd == "interstitial") {
            loadContent(_baseUrl + "Css/interstitial.css", "", "", loadGlobalCss);
        }

        if(_arrData[element].formatAd == "sticky" && _arrData[element].responsive == false &&Â _arrData[element].nonresMobile == true) {

        	if(isMobile()) {
        		loadContent(_baseUrl + "Css/nonresponsive-web-mobile.css", "", "", loadGlobalCss);
        	} 

            
        }



        if (_arrData[element].width > 0) {
            data.width = _arrData[element].width;
        }
        if (_arrData[element].height > 0) {
            data.height = _arrData[element].height;
        }

        data.callback = function (ad) {
        	//console.log(_arrData[element]);
            if (ad.type == 'empty') {
                if (_arrData[element].emptyEvent != undefined && _arrData[element].emptyEvent != null) {
                    if (typeof ibb_data != "undefined" && ibb_data.passbackIds) {

                        ibb_data.passbackIds.impressionUnsold();

                    }
                	_arrData[element].emptyEvent();
            	} else {
            		document.getElementById(_arrData[element].name).style.display = "none";
            	}

                return;
            } else {
            	setTimeout(function() {
                    if(_arrData[element].adOffsetTop > 0) {
                        window.onscroll = function () {
                           if(document.documentElement.scrollTop >= _arrData[element].adOffsetTop) {
                                document.getElementById(_arrData[element].name).style.display = "block";
                            }
                        }
                    } else {
            		  document.getElementById(_arrData[element].name).style.display = "block";
                    }
            	}, 100);
            	
            }

            var jsonData = JSON.parse(ad.data.trim());
          //  console.log(ad.data.trim()); //JSON.stringify(ad.tracking.served)

            //var cssArr = new Array();
            for (var i = 0; i < jsonData.ads.length; i++) {
                //Overim zda mam nastavene nejake typy reklam
                if (_arrData[element].acceptAdv.indexOf(jsonData.ads[i].adType) === -1)
                    continue;

                //" + _arrData[element].template + "
                var url = _baseUrl + "Templates/" + _arrData[element].folder + "/Ad_" + jsonData.ads[i].adType;
                //Css nechci nacitat x krat
                //if (cssArr.indexOf(url) === -1) {
                //    cssArr.push(url);
                //    loadContent(url + ".css", element, "", loadLocalCss);
                //}
                loadContent(url + ".html", element, jsonData.ads[i], showAdv);
            }

            //Pockam 1s aby vsechny reklamy byli nacteny
            //setTimeout(function ()
            //{
            //    var img = document.createElement('img');
            //    img.src = jsonData.confirmImpUrl;
            //    document.getElementById(element).appendChild(img);

            //    //console.log(JSON.stringify(ad.tracking.served));
            //    sssp.served(ad.tracking.served);
                
            //}, 500);

            var img = document.createElement('img');
            img.src = jsonData.confirmImpUrl;
            document.getElementById(element).appendChild(img);

            //console.log(JSON.stringify(ad.tracking.served));
            sssp.served(ad.tracking.served);
        };

        if(getCookie(_arrData[element].nameCookie) != 'hide') {
            //console.log("seznamad", sssp);
            sssp.getAds(data);
         
        } else {
            document.getElementById(_arrData[element].name).style.display = "none";
        }
    }

    //Zobrazim reklamu
    //Zobrazim reklamu
    function showAdv(html, element, ads) {
        for (var property in ads) {
            if (ads.hasOwnProperty(property)) {
                //console.log("[" + property + "] = "+ ads[property]);
                html = html.replace("[" + property + "]", ads[property]);
            }
            if(property == "eventTrackers") {
                html = html.replace("[tracking1]", ads[property]['impress'][0]);
                html = html.replace("[tracking2]", ads[property]['impress'][1]);
            }
        }
        document.getElementById(element).innerHTML += html;
    }

    //Nacita obsah pomoci ajaxu
    function loadContent(url, element, param, fnc) {
        //console.log(url);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                fnc(this.responseText, element, param);
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }
}

var adx = new adxAdvSSP();

/*window.onload = function () {
    nameSpaceAdv.Init();
};*/