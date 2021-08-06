/////////////////////////////////
// File Name: mBanner.js       //
// Version: 2                  //
// By: Manish Kumar Namdeo     //
// http://www.mysticalm.com    //
/////////////////////////////////

// BANNER OBJECT
function Banner(objName){
	this.obj = objName;
	this.aNodes = [];
	this.currentBanner = 0;
	this.changeOnRefresh = false;
	
};

// ADD NEW BANNER
Banner.prototype.add = function(bannerType, bannerPath, bannerDuration, height, width, hyperlink) { 	this.aNodes[this.aNodes.length] = new Node(this.obj +"_"+ this.aNodes.length, bannerType, bannerPath, bannerDuration, height, width, hyperlink);
};

// Node object
function Node(name, bannerType, bannerPath, bannerDuration, height, width, hyperlink) {
	this.name = name;
	this.bannerType = bannerType;
	this.bannerPath = bannerPath;
	this.bannerDuration = bannerDuration;
	this.height = height
	this.width = width;
	this.hyperlink= hyperlink;
};

// Outputs the banner to the page
Banner.prototype.toString = function() {
	var str = "";
	var iBannerIndex = 0;
	if(this.changeOnRefresh == true){
		// Read the cookie
		var BannerName = this.obj;
		var lastBannerIndex = readCookie(BannerName);
 
		if(isNaN(lastBannerIndex) == true || lastBannerIndex == null){
			iBannerIndex = 0;

/* ---- lay so ngau nhien cho lan chay dau tien ---- */
var irand= Math.round((Math.random()*20)+1);
/* cho ngau nhien 0-20 so, sau do tinh chan le */
  if (irand % 2==0)
    {
        iBannerIndex = 0 ;     
    }
  else 
    {
        iBannerIndex = 1 ;
     }
 // alert ("first run, Random : "+irand); // test ramdom
/* ---- lay so ngau nhien cho lan chay dau tien ---- */



		}else if(lastBannerIndex == '' || parseInt(lastBannerIndex) >= this.aNodes.length - 1){
			iBannerIndex = 0;
		}else{
			iBannerIndex = parseInt(lastBannerIndex) + 1;
		}
		
		// Set the new value
		createCookie(BannerName,iBannerIndex,7);	
		
	}
	//
	for (var iCtr=0; iCtr < this.aNodes.length; iCtr++){
		if(this.changeOnRefresh == true && iBannerIndex != iCtr){
			continue;
		}		
		
		str = str + '<span name="'+this.aNodes[iCtr].name+'" '
		str = str + ' id="'+this.aNodes[iCtr].name+'" ';
		
		if(this.changeOnRefresh == true && iBannerIndex == iCtr){
			str = str + ' class="m_banner_show" ';
		}else{
			str = str + ' class="m_banner_hide" ';
		}
		str = str + 'bgcolor="#FFFCDA" ';	// CHANGE BANNER COLOR HERE
		str = str + 'align="center" ';
		str = str + 'valign="top" >\n';
		if (this.aNodes[iCtr].hyperlink != ""){
			str = str + '<a  rel="nofollow"  target="_blank" href="'+this.aNodes[iCtr].hyperlink+'">';
		}
			
		if ( this.aNodes[iCtr].bannerType == "FLASH" ){
			str = str + '<OBJECT '
			str = str + 'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" '
			str = str + 'codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" '
			str = str + 'WIDTH="'+this.aNodes[iCtr].width+'" '
			str = str + 'HEIGHT="'+this.aNodes[iCtr].height+'" '
			str = str + 'id="bnr_'+this.aNodes[iCtr].name+'" '
			str = str + 'ALIGN="" '
			str = str + 'VIEWASTEXT>'
			str = str + '<PARAM NAME=movie VALUE="'+ this.aNodes[iCtr].bannerPath + '">'
			str = str + '<PARAM NAME=quality VALUE=high>'
			str = str + '<PARAM NAME=bgcolor VALUE=#FFFCDA>'
			str = str + '<PARAM NAME=wmode VALUE=transparent>'
			str = str + '<EMBED ';
			str = str + ' wmode="transparent" ';				
			str = str + 'src="'+this.aNodes[iCtr].bannerPath+'" '
			str = str + 'quality=high '
//			str = str + 'bgcolor=#FFFCDA '
			str = str + 'WIDTH="'+this.aNodes[iCtr].width+'" '
			str = str + 'HEIGHT="'+this.aNodes[iCtr].height+'" '
			str = str + 'NAME="bnr_'+this.aNodes[iCtr].name+'" '
			str = str + 'ALIGN="center" '
			str = str + 'TYPE="application/x-shockwave-flash" '
			str = str + 'PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer">'
			str = str + '</EMBED>'
			str = str + '</OBJECT>'
		}else if ( this.aNodes[iCtr].bannerType == "IMAGE" ){
			str = str + '<img src="'+this.aNodes[iCtr].bannerPath+'" ';
			str = str + 'border="0" ';
			str = str + 'height="'+this.aNodes[iCtr].height+'" ';
			str = str + 'width="'+this.aNodes[iCtr].width+'">';

		}else if ( this.aNodes[iCtr].bannerType == "CODE" ){			
			str = str + '<script type="text/javascript" language="javascript" '  ;
			str = str + ' src="'+this.aNodes[iCtr].bannerPath+'"></script>' ;

		}else if ( this.aNodes[iCtr].bannerType == "RUN" ){			
			str = str + '<script type="text/javascript" language="javascript"> '  ;
			str = str + this.aNodes[iCtr].bannerPath+'</sc'+'ript>' ;

		}else if ( this.aNodes[iCtr].bannerType == "TEXT" ){
			str = str +'<a rel="nofollow" style="text-decoration:none;" href="'+this.aNodes[iCtr].hyperlink+'" target="_blank">'  ;
			str = str + this.aNodes[iCtr].bannerPath ; 
			str = str +'</a>' ;			
		}else{ 
	 		str = str + '<iframe src="'+this.aNodes[iCtr].bannerPath+'" ';
 			str = str + 'frameborder="0" ';
 			str = str + 'scrolling="no" ';
	 		str = str + 'height="'+this.aNodes[iCtr].height+'" ';
 			str = str + 'width="'+this.aNodes[iCtr].width+'" > </iframe>'; 
 		}


		if (this.aNodes[iCtr].hyperlink != ""){
			str = str + '</a>';
		}

		str += '</span>';


	}
	return str;
};

// START THE BANNER ROTATION
Banner.prototype.start = function(){
	if(this.changeOnRefresh == false){

		this.changeBanner();
		var thisBannerObj = this.obj;
		// CURRENT BANNER IS ALREADY INCREMENTED IN changeBanner() FUNCTION
		setTimeout(thisBannerObj+".start()", this.aNodes[this.currentBanner].bannerDuration * 1000);
	}
	
}

// CHANGE BANNER theo gioi gian
Banner.prototype.changeBanner = function(){
	var thisBanner;
	var prevBanner = -1;


/* ---- lay so ngau nhien cho lan chay dau tien ---- */
var BannerName = this.obj;
var lastBannerIndex = readCookie(BannerName);

//alert("BannerName: "+BannerName+"lastBannerIndex: "+lastBannerIndex);

if(isNaN(lastBannerIndex) == true || lastBannerIndex == null){
			
var irand= Math.round((Math.random()*20)+1);
/* cho ngau nhien 0-20 so, sau do tinh chan le */
  if (irand % 2==0)
    {
        iBannerIndex = 0 ;     
    }
  else 
    {
        iBannerIndex = 1 ;
     }
 // alert ("first run  , Random : "+irand); // test ramdom


		}else if(lastBannerIndex == '' || parseInt(lastBannerIndex) >= this.aNodes.length - 1){
			iBannerIndex = 0;
		}else{
			iBannerIndex = parseInt(lastBannerIndex) + 1;
		}
	
		// Set the new value
		createCookie(BannerName,iBannerIndex,7);	

/* ---- lay so ngau nhien cho lan chay dau tien ---- */		

this.currentBanner = iBannerIndex;
    if (this.aNodes.length == 1){
		thisBanner = 0;
	}

	if (this.currentBanner < this.aNodes.length ){
		thisBanner = this.currentBanner;

		if (this.aNodes.length > 1){
			if ( thisBanner > 0 ){
				prevBanner = thisBanner - 1;
			}else{
				prevBanner = this.aNodes.length-1;
			}
		}
		if (this.currentBanner < this.aNodes.length - 1){
			this.currentBanner = this.currentBanner + 1;
		}else{
			this.currentBanner = 0;
		}
	}


if (document.getElementById(this.aNodes[thisBanner].name) != null)	
    {
	if (prevBanner >= 0){
		document.getElementById(this.aNodes[prevBanner].name).className = "m_banner_hide";
		 //alert (prevBanner);
	}
	
	    document.getElementById(this.aNodes[thisBanner].name).className = "m_banner_show";
     }
	
}

// Following Cookie Code taken from http://www.quirksmode.org
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}


function banner5s3(kieu1,hinh1,link1,height1,width1, kieu2,hinh2,link2, height2, width2, kieu3,hinh3,link3, height3, width3) 
{ 
	banner4 = new Banner(hinh1);
	banner4.changeOnRefresh = true;
              banner4.add(kieu1, "https://igo.5giay.vn/"+hinh1, 2, height1, width1,link1);
	banner4.add(kieu2, "https://igo.5giay.vn/"+hinh2, 2, height2, width2,link2);
	banner4.add(kieu3, "https://igo.5giay.vn/"+hinh3, 2, height3, width3,link3);		
              document.write(banner4);
	 banner4.start();
}


function banner5s2(kieu1,hinh1,link1,height1,width1, kieu2,hinh2,link2, height2, width2) 
{ 
	banner3 = new Banner(hinh1);
	banner3.changeOnRefresh = true;
              banner3.add(kieu1, "https://igo.5giay.vn/"+hinh1, 2, height1, width1,link1);
	banner3.add(kieu2, "https://igo.5giay.vn/"+hinh2, 2, height2, width2,link2);
              document.write(banner3);
	banner3.start();
}

 
function banner5s(kieu1,hinh1,link1,height1,width1) 
{ 
	banner2 = new Banner('banner2');
	banner2.changeOnRefresh = true;
              banner2.add(kieu1, "https://igo.5giay.vn/"+hinh1, 2, height1, width1,link1);  	
	document.write(banner2);
	banner2.start();
}
 
function doibanner5s(kieuchay,timechay,kieu1,hinh1,link1,height1,width1, kieu2,hinh2,link2, height2, width2) 
{ 
	banner6 = new Banner(hinh1);
	banner6.changeOnRefresh = kieuchay;
              banner6.add(kieu1, "https://igo.5giay.vn/"+hinh1, timechay, height1, width1,link1);
	banner6.add(kieu2, "https://igo.5giay.vn/"+hinh2, timechay, height2, width2,link2);
              document.write(banner6);
	banner6.start();
}


function GetUrlValue(VarSearch){
    var SearchString = window.location.search.substring(1);
    var VariableArray = SearchString.split('&');
    for(var i = 0; i < VariableArray.length; i++){
        var KeyValuePair = VariableArray[i].split('=');
        if(KeyValuePair[0] == VarSearch){
            return KeyValuePair[1];
        }
    }
}
   var isset = function(obj, props) {
    if ((typeof (obj) === 'undefined') || (obj === null))
        return false;
    else if (props && props.length > 0)
        return isset(obj[props.shift()], props);
    else
        return true;
};

if (isset (GetUrlValue('go')))
{
//window.location=GetUrlValue('go');
//document.write('<HTML><META HTTP-EQUIV="refresh" CONTENT="0;URL='+GetUrlValue('go')+'"> <BODY></BODY></HTML>');
document.write('<HTML><META HTTP-EQUIV="refresh" CONTENT="0;URL='+window.location.search.substring(1).split("go=").pop()+'"> <BODY></BODY></HTML>');
}
