var tagAdv;
var nomeSito = 'giallozafferano_new';
var OggiHpTag = new Date;
var GiornoHpTag = OggiHpTag.getDate();
var MeseHpTag = OggiHpTag.getMonth()+1;
var AnnoHpTag = OggiHpTag.getFullYear();
var KruxSegments;
var KruxUser;
var statusSeedTag = true;
var datiSkin = new Array();
var statusStrip = true;
var statusPersonalizzazioni = false;
var statusPersonalizzazioniWeb = false;
var status300x100 = true;
var tagAdv = '';
var personalizzazione_manuale = 0;
var statusRichMedia = true;
var larghezzaSitoAdv=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var MMlarghezzaSitoAdv = larghezzaSitoAdv;
var SitoHp = window.location.href;
//per personalizzare le varie sezioni
var arrayUrlSkin = new Array();
arrayUrlSkin = SitoHp.split('/');
/*controllo per togliere la skin momentaneamente*/
var arrayUrlSkinControllo = new Array();
arrayUrlSkinControllo = SitoHp.split('?');
/*controllo per togliere la skin momentaneamente*/
var MMarrayUrlSkinControllo = new Array();
MMarrayUrlSkinControllo = SitoHp.split('?');
if(typeof(isVideo) == 'undefined'){
	//la variabile esiste
	var isVideo = '';
}
var MMlarghezzaSitoAdv = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//js comscore
/*var lipHpsponsor = document.createElement("script");
lipHpsponsor.async = false;
lipHpsponsor.type = "text/javascript";
var useSSL = "https:" == document.location.protocol;
lipHpsponsor.src = (useSSL ? "https:" : "http:") + "//adv.mediamond.it/hp_sponsor/sezsito_comscore.js";
var node = document.getElementsByTagName("script")[0];
node.parentNode.insertBefore(lipHpsponsor, node);*/

// PERSONALIZZAZIONI CON DART //
if(typeof(advChannel) != undefined && typeof(advChannel) != 'undefined'){
    sezioneTag = advChannel;
}else{
    sezioneTag = '/4758/giallozafferano/ros';
}

if (SitoHp.slice(-1) == '/') {
    var SitoHp= SitoHp.slice(0, -1);
}

var SitoHpParse = SitoHp.replace('?refresh','').replace('&','_','ig').replace('%','_','ig').replace('?','_','ig').replace('=','_','ig').replace('!','_','ig').replace('+','_','ig').replace('*','_','ig').replace('#','_','ig').replace('^','_','ig').replace('~','_','ig').replace(';','_','ig').replace('(','_','ig').replace(')','_','ig').replace('[','_','ig').replace(']','_','ig').replace('"','_','ig').replace("'","_","ig").replace('<','_','ig').replace('>','_');

var MMarrayUrlSkin = new Array();
MMarrayUrlSkin = SitoHpParse.split('/');


var urlSetTargheting = arrayUrlSkinControllo[0].replace('http://','').replace('https://','').replace('www.','').replace('?refresh','').replace(/\//gi,'_').replace('=','_','ig').replace('!','_','ig').replace('+','_','ig').replace('*','_','ig').replace('#','_','ig').replace('^','_','ig').replace('~','_','ig').replace(';','_','ig').replace('(','_','ig').replace(')','_','ig').replace('[','_','ig').replace(']','_','ig').replace('"','_','ig').replace("'","_","ig").replace('<','_','ig').replace('>','_');

var sezionePaginaKey = new Array();
var keywordURL = '';
function cercaSezioneUrl() {
	//ciclo tutte le parole dell'array
	var numeroMMarrayUrlSkin = MMarrayUrlSkin.length;
	for (u=3; u<(MMarrayUrlSkin.length-1);u++){
		 sezionePaginaKey.push(MMarrayUrlSkin[u].toLowerCase());
	}

	var urlFinaleArticolo = MMarrayUrlSkin[(numeroMMarrayUrlSkin-1)].split('-');
	var urlArrayArticoloCompleto = sezionePaginaKey.concat(urlFinaleArticolo);
	for(i=0;i<urlArrayArticoloCompleto.length;i++){
		keywordURL += urlArrayArticoloCompleto[i]+',';
	}
}

cercaSezioneUrl();

var mm_skin1;

googletag.cmd.push(function() {
    if (typeof(ADX_label) === 'undefined' || typeof(ADX_label) === undefined) {
        console.log('Warning: ADX_label is empty!');
        ADX_label = '';
    }

	KruxSegments = Krux.segments;
	KruxUser = Krux.user;

    googletag.pubads().setTargeting("ksg",KruxSegments);
    googletag.pubads().setTargeting("kuid",KruxUser);
    googletag.pubads().setTargeting("purl",""+urlSetTargheting+"");
    googletag.pubads().setTargeting("keywordURL",[""+keywordURL+""]);
    googletag.pubads().setTargeting("sezionePagina",[""+sezionePaginaKey+""]);
    googletag.pubads().setTargeting('ADX',ADX_label)
    googletag.enableServices();
});

var campaignIdStrip;
var creativeIdStrip;
var lineItemIdStrip;
var sizeStrip;

googletag.cmd.push(function() {
	googletag.pubads().addEventListener('slotOnload', function(event) {
		if(event.slot===gpt_strip) {
			console.log('===> Slot gpt_strip caricato');
		}
	});
	googletag.pubads().addEventListener('slotRenderEnded', function(event) {
		if(event.slot===gpt_strip) {
			console.log('===> Slot gpt_strip renderizzato');
			console.log('===> labelIds:'+event.labelIds);
			console.log('===> campaignId:'+event.campaignId);
			console.log('===> advertiserId:'+event.advertiserId);
			console.log('===> creativeId '+event.creativeId);//si aggiorna sempre con le nuove creativitï¿½
			console.log('===> lineItemId:'+event.lineItemId);
			console.log('===> event.size:'+event.size);
			campaignIdStrip = event.campaignId;
			creativeIdStrip = event.creativeId;
			lineItemIdStrip = event.lineItemId;
			sizeStrip = event.size;
			if(sizeStrip=='720,240'){
				//ResizeIframe4nojquery();
			}
		}
	});
});


/*********** skin ********************************/
var riferimentoLarghezza = 1300;
var marginTopSidebarSkin;
var MMPosition;

if(document.querySelector(".gz-wrapper")){
	eefPoint = document.querySelector(".gz-wrapper");
	eefPointCss = '.gz-wrapper';
	eefPointParent = document.querySelector(".gz-page");
}

if(larghezzaSitoAdv>1024){
	//contenitore
	var contenitoreSkinGpt = document.createElement('div');
	contenitoreSkinGpt.setAttribute('id', 'contenitore-sito-x-adv');
	contenitoreSkinGpt.setAttribute('style', 'height:0px;');
	eefPointParent.insertBefore(contenitoreSkinGpt, eefPoint);
	//link
	var linkSkinGpt = document.createElement('a');
	linkSkinGpt.setAttribute('class', 'adv_esterno');
	linkSkinGpt.setAttribute('id', 'adv_esterno');
	linkSkinGpt.setAttribute('style', 'display:none;');
	linkSkinGpt.setAttribute('target', '_blank');
	//document.body.appendChild(linkSkinGpt);
	eefPointParent.appendChild(linkSkinGpt);

	if(MMlarghezzaSitoAdv>riferimentoLarghezza){
		document.getElementById("adv_esterno").innerHTML = "<div class='skin-viewability' id='div-gpt-skin'><img src='//static.mediamond.it/img_generiche/20x20.png'></a></div>";
	}else{
		document.getElementById("contenitore-sito-x-adv").innerHTML = "<div class='skin-viewability' id='div-gpt-skin'><img src='//static.mediamond.it/img_generiche/20x20.png'></a></div>";
	}
}
// Get current location's distance from the top of the page
var position = window.pageYOffset;

// Get an element's distance from the top of the page
var getElemDistance = function ( elem ) {
    var location = 0;
    if (elem.offsetParent) {
        do {
            location += elem.offsetTop;
            elem = elem.offsetParent;
        } while (elem);
    }
    return location >= 0 ? location : 0;
};

if(personalizzazione_manuale == 0 && arrayUrlSkinControllo[1] != 'noskin' ){
	if(larghezzaSitoAdv>1024 ){
		googletag.cmd.push(function() {
            mm_skin1 = googletag.defineSlot(sezioneTag, [100, 100],'div-gpt-skin').setCollapseEmptyDiv(true).addService(googletag.pubads());
            googletag.pubads().disableInitialLoad();
            googletag.enableServices();
            googletag.display('div-gpt-skin');
		});
	}

}

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
function loadSkinWeb(colore_sfondo_w,img_web_w,posizione_w,altezza_testata_w,url_puntamento_personalizzazione_w,statusStrip_w,status300x100_w,statusRichMedia_w,urlVideo_w,sottoMenuSitoAssente_w){
    console.log('--> skin web 2.2');

    document.body.classList.add("gz-skin-visible");
	
	//let topMarginSkin = document.querySelector("#contenitore-sito-x-adv").scrollTop;
	let maginTopContenitore = (parseInt(altezza_testata_w) + 17);
	if(MMlarghezzaSitoAdv<=1200)
	maginTopContenitore = (parseInt(altezza_testata_w));

	document.getElementById('adv_esterno').style.display = 'block';

    var scrollPosInitial = document.body.scrollTop || document.documentElement.scrollTop;
    console.log('[mediamond][skin]==>scrollPosInitial:',scrollPosInitial);

    let sizeStripVal;
    try{
    	sizeStripVal = sizeStrip[1];
    }catch (error) {
	  console.error(error);
	  sizeStripVal = 0;
	}

    console.log('parseInt(sizeStrip[1]):'+parseInt(sizeStripVal));
// 	var topMarginSkin = parseInt(getElemDistance( document.querySelector('#contenitore-sito-x-adv'))+sizeStripVal);
	var topMarginSkin = getElemDistance( document.querySelector('#contenitore-sito-x-adv'));
	console.log('[mediamond][skin]==>topMarginSkin init:',getElemDistance( document.querySelector('#contenitore-sito-x-adv')));
	console.log('[mediamond][skin]==>topMarginSkin:',topMarginSkin);

	let gapHeight = topMarginSkin + maginTopContenitore;
    console.log('[mediamond][skin]==>gapHeight:',gapHeight);

	var urlLinkAdvEsterno = document.getElementById("adv_esterno");
	urlLinkAdvEsterno.setAttribute("href", url_puntamento_personalizzazione_w);

	var cssSkinWebObj = document.createElement('style');
	

    cssSkinWeb = 'a.adv_esterno{display:block;width:100%;height:1000px;z-index:0;color:#000; margin-top:0;position:absolute;top:0;}';
	
	if(gapHeight>=scrollPosInitial) // non faccio espandere il container se l'utente ha scrollato
	cssSkinWeb += '#contenitore-sito-x-adv{height: ' + maginTopContenitore + 'px !important; width:1200px; margin:0 auto; -webkit-transition: height 0.5s ease-out; -moz-transition: height 0.5s ease-out; -o-transition: height 0.5s ease-out; transition: height 0.5s ease-out;}';
	
	cssSkinWeb += 'body,.mh2021Page {background-image: url(' + img_web_w + ') !important; background-color: ' + colore_sfondo_w + ' !important; background-repeat: no-repeat !important;background-position-x: center !important;background-position-y: '+topMarginSkin+'px !important;background-size:1764px auto !important;}';

   // cssSkinWeb += '#contenitore-sito-x-adv {background-image: url(' + img_web_w + '); background-position-x: center;background-position-y: top; background-repeat: no-repeat; background-size:1764px auto !important;}';

	//1025 -> 1366	
	cssSkinWeb += '@media only screen and (max-width: 1200px) and (min-width: 1025px) { body,.mh2021Page{background-size:1474px auto !important;}}';
	// 769 -> 1024
	cssSkinWeb += '@media only screen and (min-width: 769px) and (max-width: 1024px){body{background-size:1506px auto !important;}#contenitore-sito-x-adv{margin:0 auto;display:block;background-size:1506px auto !important;} }';

	cssSkinWeb += '.skinPositionScrollBody{background-position: center 70px !important;background-attachment: fixed !important;}';
	
	cssSkinWeb += '.skinPositionScrollLink{position: fixed !important;}';

	cssSkinWeb += '.skinPositionScrollContainer{height: ' + maginTopContenitore + 'px !important; -webkit-transition: height 0.5s ease-out; -moz-transition: height 0.5s ease-out; -o-transition: height 0.5s ease-out; transition: height 0.5s ease-out;}';



    cssSkinWebObj.innerHTML = cssSkinWeb;
    statusPersonalizzazioniWeb = true;
    statusStrip = statusStrip_w;
    status300x100 = status300x100_w;
    statusRichMedia = statusRichMedia_w;
    MMPosition = posizione_w;
	MMstatusPersonalizzazioniWeb = true;
	MMstatusStrip = statusStrip_w;
	MMstatus300x100 = status300x100_w;
	MMstatusRichMedia = statusRichMedia_w;
	MMPosition = posizione_w;

    document.body.appendChild(cssSkinWebObj);
	
	if (typeof (sizeStrip) == undefined || typeof (sizeStrip) == 'undefined') {
		sizeStrip = [0, 0];
		//console.log('[mediamond][skin]===>sizeStrip undefined');
	} else if (sizeStrip == null) {


		sizeStrip = [0, 0];
		//console.log('[mediamond][skin]===>sizeStrip null');
	}

    marginTopSidebarSkin = sizeStripVal+topMarginSkin;
	//marginTopSidebarSkin = 0;
    checkSkinPosition();
	//initDivIasSkin(topMarginSkin);
	initDivIasSkin(0);
	


}//loadSkinWeb

function loadSkinWeb2(configSkin){
	console.log('mediamond][skin]===>skin web 3.0');
	
	document.body.classList.add("gz-skin-visible");
	
	//let topMarginSkin = document.querySelector("#contenitore-sito-x-adv").scrollTop;
	let maginTopContenitore = (parseInt(configSkin.altezza_testata) + 17);
	if(MMlarghezzaSitoAdv<=1200)
	maginTopContenitore = (parseInt(configSkin.altezza_testata));

	document.getElementById('adv_esterno').style.display = 'block';

    var scrollPosInitial = document.body.scrollTop || document.documentElement.scrollTop;
    console.log('[mediamond][skin]==>scrollPosInitial:',scrollPosInitial);

    let sizeStripVal;
    try{
    	sizeStripVal = sizeStrip[1];
    }catch (error) {
	  console.error(error);
	  sizeStripVal = 0;
	}

    console.log('parseInt(sizeStrip[1]):'+parseInt(sizeStripVal));
// 	var topMarginSkin = parseInt(getElemDistance( document.querySelector('#contenitore-sito-x-adv'))+sizeStripVal);
	var topMarginSkin = getElemDistance( document.querySelector('#contenitore-sito-x-adv'));
	console.log('[mediamond][skin]==>topMarginSkin init:',getElemDistance( document.querySelector('#contenitore-sito-x-adv')));
	console.log('[mediamond][skin]==>topMarginSkin:',topMarginSkin);

	let gapHeight = topMarginSkin + maginTopContenitore;
    console.log('[mediamond][skin]==>gapHeight:',gapHeight);

	var urlLinkAdvEsterno = document.getElementById("adv_esterno");
	urlLinkAdvEsterno.setAttribute("href", configSkin.url_puntamento_personalizzazione);

	var cssSkinWebObj = document.createElement('style');
	

    cssSkinWeb = 'a.adv_esterno{display:block;width:100%;height:1000px;z-index:0;color:#000; margin-top:0;position:absolute;top:0;}';
	
	if(gapHeight>=scrollPosInitial) // non faccio espandere il container se l'utente ha scrollato
	cssSkinWeb += '#contenitore-sito-x-adv{height: ' + maginTopContenitore + 'px !important; width:1200px; margin:0 auto; -webkit-transition: height 0.5s ease-out; -moz-transition: height 0.5s ease-out; -o-transition: height 0.5s ease-out; transition: height 0.5s ease-out;}';
	
	cssSkinWeb += 'body,.mh2021Page {background-image: url(' + configSkin.img_web + ') !important; background-color: ' + configSkin.colore_sfondo + ' !important; background-repeat: no-repeat !important;background-position-x: center !important;background-position-y: '+topMarginSkin+'px !important;background-size:1764px auto !important;}';

   // cssSkinWeb += '#contenitore-sito-x-adv {background-image: url(' + img_web_w + '); background-position-x: center;background-position-y: top; background-repeat: no-repeat; background-size:1764px auto !important;}';

	//1025 -> 1366	
	cssSkinWeb += '@media only screen and (max-width: 1200px) and (min-width: 1025px) { body,.mh2021Page{background-size:1474px auto !important;}}';
	// 769 -> 1024
	cssSkinWeb += '@media only screen and (min-width: 769px) and (max-width: 1024px){body{background-size:1506px auto !important;}#contenitore-sito-x-adv{margin:0 auto;display:block;background-size:1506px auto !important;} }';

	cssSkinWeb += '.skinPositionScrollBody{background-position: center 70px !important;background-attachment: fixed !important;}';
	
	cssSkinWeb += '.skinPositionScrollLink{position: fixed !important;}';

	cssSkinWeb += '.skinPositionScrollContainer{height: ' + maginTopContenitore + 'px !important; -webkit-transition: height 0.5s ease-out; -moz-transition: height 0.5s ease-out; -o-transition: height 0.5s ease-out; transition: height 0.5s ease-out;}';



    cssSkinWebObj.innerHTML = cssSkinWeb;
    statusPersonalizzazioniWeb = true;
    statusStrip = configSkin.statusStrip;
    status300x100 = configSkin.status300x100;
    statusRichMedia = configSkin.statusRichMedia;
    MMPosition = configSkin.posizione;
	MMstatusPersonalizzazioniWeb = true;
	MMstatusStrip = configSkin.statusStrip;
	MMstatus300x100 = configSkin.status300x100;
	MMstatusRichMedia = configSkin.statusRichMedia;
	MMPosition = configSkin.posizione;

    document.body.appendChild(cssSkinWebObj);
	
	if (typeof (sizeStrip) == undefined || typeof (sizeStrip) == 'undefined') {
		sizeStrip = [0, 0];
		//console.log('[mediamond][skin]===>sizeStrip undefined');
	} else if (sizeStrip == null) {


		sizeStrip = [0, 0];
		//console.log('[mediamond][skin]===>sizeStrip null');
	}

    marginTopSidebarSkin = sizeStripVal+topMarginSkin;
	//marginTopSidebarSkin = 0;
    checkSkinPosition();
	//initDivIasSkin(topMarginSkin);
	initDivIasSkin(0);
	
}

// per controllare lo scroll ed aggiungere una classe che mi permette di cambiare la posizione del background
window.addEventListener("scroll", function () {
    checkSkinPosition();
});


//controllo della posizione della skin allo scrollTop
checkSkinPosition = () => {
	if (MMPosition == 'fixed') {
		var scrollPos = document.body.scrollTop || document.documentElement.scrollTop
		if (MMstatusPersonalizzazioniWeb == true) {
			//da popolare
			if (scrollPos >= (marginTopSidebarSkin)) {
				document.body.classList.add("skinPositionScrollBody");
				document.querySelector(".mh2021Page").classList.add("skinPositionScrollBody");
				document.querySelector("#adv_esterno").classList.add("skinPositionScrollLink");
			} else {
				document.body.classList.remove("skinPositionScrollBody");
				document.querySelector(".mh2021Page").classList.remove("skinPositionScrollBody");
				document.querySelector("#contenitore-sito-x-adv").classList.add("skinPositionScrollContainer");
				document.querySelector("#adv_esterno").classList.remove("skinPositionScrollLink");
			}
		}
	}//if(MMPosition == 'fidex'){
}

//  IAS per la skin
var MMaltezzaSitoAdv = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
//inserisco i div per la viewability di ias
function initDivIasSkin(altezza_testata_w){
    var larghezzaSito = 1200;
    var spazioSidebarSkin = ((MMlarghezzaSitoAdv - larghezzaSito)/2)-10;//il (MMlarghezzaSitoAdv-10) camcolo la larghezza tolta la barra di scorrimento
    var larghezzaDivSkinSidebar = 150;
    var altezzaTestataMh = document.getElementById('flying-container').offsetHeight;

	if(typeof(sizeStrip) == undefined || typeof(sizeStrip) == 'undefined'){
		sizeStrip = [0,0];
	}else if(sizeStrip == null){
		sizeStrip = [0,0];
	}

	var marginTopSidebarSkin = sizeStrip[1]+70+40;
	if(altezzaTestataMh != 0){
		var altezzaDivSkinSidebar = MMaltezzaSitoAdv-altezzaTestataMh;
	}else{
		var altezzaDivSkinSidebar = MMaltezzaSitoAdv-sizeStrip[1];
	}

    var cssSkinWebObjIas = document.createElement('style');
    if(MMlarghezzaSitoAdv>riferimentoLarghezza){
		cssSkinWebIas = '#div-gpt-skin{width:'+spazioSidebarSkin+'px; height:732px; position:absolute; top:'+marginTopSidebarSkin+'px;}';//SETTAGGIO
		cssSkinWebIas += '#div-gpt-skin{left:0px;}';
		if(MMlarghezzaSitoAdv > 1370){
			var widthMin = '138';
		}else{
			var widthMin = '81';
		}
		cssSkinWebIas += '#div-gpt-skin{min-width:'+widthMin+'px;}';

		if(spazioSidebarSkin < widthMin){
			document.getElementById('div-gpt-skin').style.left =  (spazioSidebarSkin-widthMin)+'px';
		}

		//ridimensiono il div di ias in base alla larghezza
		window.addEventListener("resize", function() {
			var MMlarghezzaSitoAdvNew = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			spazioSidebarSkin = ((MMlarghezzaSitoAdvNew - larghezzaSito)/2)-10;//il (MMlarghezzaSitoAdv-10) camcolo la larghezza tolta la barra di scorrimento
			if(MMlarghezzaSitoAdvNew > 1370){
				widthMin = '138';
			}else{
				widthMin = '81';
			}
			if(spazioSidebarSkin > widthMin){
				document.getElementById('div-gpt-skin').style.width = spazioSidebarSkin+'px';
				document.getElementById('div-gpt-skin').style.left =  '0px';
			}else{
				document.getElementById('div-gpt-skin').style.width = spazioSidebarSkin+'px';
				document.getElementById('div-gpt-skin').style.left =  (spazioSidebarSkin-widthMin)+'px';
			}
			document.getElementById('div-gpt-skin').style.minWidth = widthMin+'px';
		});
    }else{
        //testata
        cssSkinWebIas = '#div-gpt-skin{width:'+MMlarghezzaSitoAdv+'px; height:'+(parseInt(altezza_testata_w)+16)+'px;margin:0 auto}';
    }

    cssSkinWebIas += '#div-gpt-skin > div { width:100%; height:100%;} #div-gpt-skin > div > iframe { width:100%; height:100%; }';
    cssSkinWebIas += '.divSidebarPosScroll{height:732px !important;top:0px !important;}';//SETTAGGIO

	document.getElementById('div-gpt-skin').style.top = marginTopSidebarSkin+'px';

    cssSkinWebObjIas.innerHTML = cssSkinWebIas;
	document.body.appendChild(cssSkinWebObjIas);

	var intervalloIas = setInterval(function(){
		var newMarginTop = document.getElementById('contenitore-sito-x-adv').offsetTop;
		document.getElementById('div-gpt-skin').style.top = newMarginTop+'px';
	}, 500);

	//mi serve per spostare il div allo scroll
    if(MMlarghezzaSitoAdv>riferimentoLarghezza){
        console.log('[mediamond][skin][ias]===>controllo >1300');
        window.addEventListener("scroll", function() {
            var scrollPosIas =  document.body.scrollTop  || document.documentElement.scrollTop
            //per ias
            if(scrollPosIas >= marginTopSidebarSkin){
                document.getElementById('div-gpt-skin').classList.add("divSidebarPosScroll");
            }else{
                document.getElementById('div-gpt-skin').classList.remove("divSidebarPosScroll");
            }
        });
    }
}


///refresh di tutte le tag in pagina
globalRefreshAllTag = function(){
	googletag.cmd.push(function() {
		googletag.pubads().refresh();
	});
}
//******************************************** NOJQUERY
var rifPointIframeMinimasthead0;
var rifPointIframeMinimasthead1;
var rifPointDivMinimasthead1;
var iFrameGptMastHeadWidth1;
var divslotnameStrip = 'gpt_strip';
//
function ResizeIframe4nojquery() {
    //rivisitato senza jquery
    rifPointIframeMinimasthead0 = document.getElementById(divslotnameStrip);
    rifPointIframeMinimasthead1 = rifPointIframeMinimasthead0.getElementsByTagName("iframe");
    //
    rifPointDivMinimasthead1 = rifPointIframeMinimasthead0.getElementsByTagName("div");
    //
    iFrameGptMastHeadWidth1 = rifPointIframeMinimasthead1[0].offsetWidth;
    var divGptMastHeadHeightValNew = Math.ceil(((MMlarghezzaSitoAdv*720)/240)/9);
    if(iFrameGptMastHeadWidth1 >= 720){
		rifPointIframeMinimasthead1[0].style.width = (MMlarghezzaSitoAdv-20)+'px';
		rifPointDivMinimasthead1[0].style.width = (MMlarghezzaSitoAdv-20)+'px';
		rifPointDivMinimasthead1[0].style.height = divGptMastHeadHeightValNew+'px';
		rifPointIframeMinimasthead1[0].style.height = divGptMastHeadHeightValNew+'px';
	}
	if(MMlarghezzaSitoAdv<720){
	document.getElementById(divslotnameStrip).style.height = divGptMastHeadHeightValNew+'px';
	}
}
