var sf_dfp_path_pdup="", sf_dfp_size_pdup, sf_slot1_pdup, sf_slot2_pdup, sf_ui_load_pdup, sf_temp_pdup, sf_temp1_pdup, sf_temp_size_pdup, sf_scroll_pdup=30;
var u = navigator.userAgent, ua = navigator.userAgent.toLowerCase(), isLineApp = u.indexOf("Line") > -1, isFbApp = u.indexOf("FBIOS;FBDV") > -1, isFbApp1 = u.indexOf("FB4A;FBAV") > -1, isWeixinApp = ua.match(/MicroMessenger/i) == "micromessenger";

	if(document.getElementById("sfpdpopup_d1").getAttribute("sf_dfp_path")) {sf_dfp_path_pdup=document.getElementById("sfpdpopup_d1").getAttribute("sf_dfp_path");}
	if(document.getElementById("sfpdpopup_d1").getAttribute("sf_dfp_size")) {sf_dfp_size_pdup=document.getElementById("sfpdpopup_d1").getAttribute("sf_dfp_size");}
    if(document.getElementById("sfpdpopup_d1").getAttribute("sf_scroll")) {sf_scroll_pdup=document.getElementById("sfpdpopup_d1").getAttribute("sf_scroll");}
    if(document.getElementById("sfpdpopup_d1").getAttribute("data-dfp-path")) {sf_dfp_path_pdup=document.getElementById("sfpdpopup_d1").getAttribute("data-dfp-path");}
    if(document.getElementById("sfpdpopup_d1").getAttribute("data-dfp-size")) {sf_dfp_size_pdup=document.getElementById("sfpdpopup_d1").getAttribute("data-dfp-size");}
    if(document.getElementById("sfpdpopup_d1").getAttribute("data-scroll")) {sf_scroll_pdup=document.getElementById("sfpdpopup_d1").getAttribute("data-scroll");}

	if (googletag) {
        googletag.cmd.push(function() {
	      googletag.pubads().addEventListener('slotRenderEnded', renderEnded);
        });
    }

	sf_temp_pdup=sf_dfp_path_pdup.split(", ");
	sf_temp1_pdup=sf_dfp_size_pdup.split("/");
	
	googletag.cmd.push(function() {
		for (var i=0; i<sf_temp_pdup.length; i++) {
			 
             sf_temp_size_pdup=eval(sf_temp1_pdup[i]);

			 if (i==0) {
				 if (sf_temp1_pdup[i].indexOf("[320, 480]")>0) {
				     sf_slot1_pdup=googletag.defineSlot(sf_temp_pdup[i], sf_temp_size_pdup, 'sf_pd_div_0_pdup').addService(googletag.pubads());
				 } else {
				     sf_slot1_pdup=googletag.defineSlot(sf_temp_pdup[i], sf_temp_size_pdup, 'sf_pd_div_0_pdup').addService(googletag.pubads());
				 }
			 }
			 if (i==1) {
				 if (sf_temp1_pdup[i].indexOf("[320, 480]")>0) {
				     sf_slot2_pdup=googletag.defineSlot(sf_temp_pdup[i], sf_temp_size_pdup, 'sf_pd_div_1_pdup').addService(googletag.pubads());
				 } else {
				     sf_slot2_pdup=googletag.defineSlot(sf_temp_pdup[i], sf_temp_size_pdup, 'sf_pd_div_1_pdup').addService(googletag.pubads());
				 }
			 }
		}
    });

window.onload = function() {
	if (document.location.href.indexOf("buycartv.com")!=-1) {
		return false;
	} else {
        sf_init_pdup("sfpdpopup_d1");
	}
}	
	

function sf_init_pdup(sf_curr_id) {
	if(typeof googletag == 'undefined') {
	   sf_ui_load_pdup=setTimeout("sf_init_up("+sf_curr_id+");",500);
	} else {
	   clearTimeout(sf_ui_load_pdup);
	}

	showPdPopupAd_pdup();
}

function showPdPopupAd_pdup() {

	if (document.location.href.indexOf("buycartv.com")!=-1) {
		return false;
	}

	var list_pdup=document.createElement("div");
	var list_pdup_html="";
	var this_referrer=document.location.href;
	for (var i=0; i<sf_temp_pdup.length; i++) {
		list_pdup_html=list_pdup_html+'<div id="lightbox'+i+'_pdup" style="width:0px;height:0px;display:none;">';
        if (this_referrer.indexOf("pilio.idv")!=-1 || this_referrer.indexOf("viablog.okmall.tw")!=-1) {
			list_pdup_html=list_pdup_html+'<div id="banner'+i+'_pdup" style="position: relative;margin: 0 auto;overflow: hidden;">';
			list_pdup_html=list_pdup_html+'<div id="closebtn'+i+'_pdup" style="position:absolute;z-index:9999;width:60px;height:60px;right:-3px;top:-3px;font-size:30px;display:none;">';
			list_pdup_html=list_pdup_html+'<img src="//cdn2.sales-frontier.com/adtype/pdpopup/close-button.png" style="width:60px;height:60px;cursor:pointer;"/>';
        } else {
			list_pdup_html=list_pdup_html+'<div id="banner'+i+'_pdup" style="position: relative;margin: 0 auto;">';
			list_pdup_html=list_pdup_html+'<div id="closebtn'+i+'_pdup" style="position:absolute;z-index:9999;width:30px;height:30px;right:0;top:0;display:none;">';
			list_pdup_html=list_pdup_html+'<img src="//cdn2.sales-frontier.com/adtype/pdpopup/close-button.png" style="width:30px;height:30px;cursor:pointer;"/>';
        }
		list_pdup_html=list_pdup_html+'</div>';
		list_pdup_html=list_pdup_html+'<div id="sf_pd_div_'+i+'_pdup">';
		list_pdup_html=list_pdup_html+'</div>';
		list_pdup_html=list_pdup_html+'</div>';
		list_pdup_html=list_pdup_html+'</div>';
    }
    list_pdup.innerHTML=list_pdup_html;
	document.getElementsByTagName('body')[0].parentNode.insertBefore(list_pdup, document.getElementsByTagName('body')[0].nextSibling);

	for (var i=0; i<sf_temp_pdup.length; i++) {
	     googletag.cmd.push(function() { googletag.display("sf_pd_div_"+i+"_pdup"); });
    }
}

function renderEnded(event) {
	if (isLineApp || isFbApp || isFbApp1 || isWeixinApp) {
		sf_scroll_pdup=0;
        onScrollHandler();
	} else {
	    window.addEventListener("scroll", onScrollHandler, false);
    }

	function onScrollHandler() {
		var oh= document.body.offsetHeight;
        var vh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	    var scrollTop = Math.max((document.scrollingElement===undefined)?0:document.scrollingElement.scrollTop,document.documentElement.scrollTop,document.body.scrollTop), scrollBottom = scrollTop + vh;

        if (scrollTop>=parseInt(oh*sf_scroll_pdup/100)) {
			if (event.slot === sf_slot1_pdup) {
				if (!event.isEmpty) {
					try {
						if (isLineApp || isFbApp || isFbApp1 || isWeixinApp) {
							var check_passback=document.querySelector("iframe[id*=google_ads_iframe_"+sf_temp_pdup[0].split("/").join("\\/")+"]").contentWindow.document;
						} else {
							var check_passback=document.querySelector("#lightbox0_pdup iframe[data-load-complete=true]").contentWindow.document;
						}
						if (check_passback.querySelector("div>script") && check_passback.querySelector("div>script").innerText.indexOf("definePassback('/7682122/")>0) {
							if ((check_passback.querySelector("div>div>div") && check_passback.querySelector("div>div>div").childNodes.length>0) || (check_passback.querySelector("div>div>iframe"))) {
								setTimeout("document.getElementById('lightbox0_pdup').style.cssText='background: rgba(0,0,0,0.7);z-index: 99999;width: 100%;height: 100%;padding: 0px;position: fixed;top: 0px;display: flex;justify-content: center;align-items: center;';",1000);
								setTimeout("document.getElementById('closebtn0_pdup').style.display='block';",2000);
								document.getElementById('closebtn0_pdup').addEventListener('click', closeClickHandler_pdup, false);
							}
						} else {
							if (check_passback.querySelector("body>div[id=google_image_div]") || check_passback.querySelector("body").innerHTML!="") {
								setTimeout("document.getElementById('lightbox0_pdup').style.cssText='background: rgba(0,0,0,0.7);z-index: 99999;width: 100%;height: 100%;padding: 0px;position: fixed;top: 0px;display: flex;justify-content: center;align-items: center;';",1000);
								setTimeout("document.getElementById('closebtn0_pdup').style.display='block';",2000);
								document.getElementById('closebtn0_pdup').addEventListener('click', closeClickHandler_pdup, false);
							}
						}
					}
					catch (err) {
						setTimeout("document.getElementById('lightbox0_pdup').style.cssText='background: rgba(0,0,0,0.7);z-index: 99999;width: 100%;height: 100%;padding: 0px;position: fixed;top: 0px;display: flex;justify-content: center;align-items: center;';",1000);
						setTimeout("document.getElementById('closebtn0_pdup').style.display='block';",2000);
						document.getElementById('closebtn0_pdup').addEventListener('click', closeClickHandler_pdup, false);
					}
				}
			}
			if (event.slot === sf_slot2_pdup) {
				if (!event.isEmpty) {
					try {
						if (isLineApp || isFbApp || isFbApp1 || isWeixinApp) {
							var check_passback=document.querySelector("iframe[id*=google_ads_iframe_"+sf_temp_pdup[1].split("/").join("\\/")+"]").contentWindow.document;
						} else {
							var check_passback=document.querySelector("#lightbox1_pdup iframe[data-load-complete=true]").contentWindow.document;
						}
						if (check_passback.querySelector("div>script") && check_passback.querySelector("div>script").innerText.indexOf("definePassback('/7682122/")>0) {
							if ((check_passback.querySelector("div>div>div") && check_passback.querySelector("div>div>div").childNodes.length>0) || (check_passback.querySelector("div>div>iframe"))) {
								setTimeout("document.getElementById('lightbox0_pdup').style.cssText='background: rgba(0,0,0,0.7);z-index: 99999;width: 100%;height: 100%;padding: 0px;position: fixed;top: 0px;display: flex;justify-content: center;align-items: center;';",1000);
								setTimeout("document.getElementById('closebtn0_pdup').style.display='block';",2000);
								document.getElementById('closebtn0_pdup').addEventListener('click', closeClickHandler_pdup, false);
							}
						} else {
							if (check_passback.querySelector("body>div[id=google_image_div]") || check_passback.querySelector("body").innerHTML!="") {
								setTimeout("document.getElementById('lightbox0_pdup').style.cssText='background: rgba(0,0,0,0.7);z-index: 99999;width: 100%;height: 100%;padding: 0px;position: fixed;top: 0px;display: flex;justify-content: center;align-items: center;';",1000);
								setTimeout("document.getElementById('closebtn0_pdup').style.display='block';",2000);
								document.getElementById('closebtn0_pdup').addEventListener('click', closeClickHandler_pdup, false);
							}
						}
					}
					catch (err) {
						setTimeout("document.getElementById('lightbox0_pdup').style.cssText='background: rgba(0,0,0,0.7);z-index: 99999;width: 100%;height: 100%;padding: 0px;position: fixed;top: 0px;display: flex;justify-content: center;align-items: center;';",1000);
						setTimeout("document.getElementById('closebtn0_pdup').style.display='block';",2000);
						document.getElementById('closebtn0_pdup').addEventListener('click', closeClickHandler_pdup, false);
					}
				}
			}
			window.removeEventListener('scroll', onScrollHandler, false);
        }
    }
  }

  function closeClickHandler_pdup() {
    if (document.getElementById('lightbox0_pdup')) {
		document.getElementById('lightbox0_pdup').style.cssText="width:0px;height:0px;display:none;";
	}
    if (document.getElementById('lightbox1_pdup')) {
        document.getElementById('lightbox1_pdup').style.cssText="width:0px;height:0px;display:none;";
	}
  }