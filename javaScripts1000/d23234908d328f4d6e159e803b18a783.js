/* png ï¿½Ì¹ï¿½ï¿½ï¿½ ï¿½ï¿½ï¿½ï¿½ ï¿½ï¿½ï¿½ (IE 6.0 ï¿½ï¿½ï¿½ï¿½) */
//<![CDATA[
 function setPng24(obj) {
 obj.width=obj.height="1";
 obj.className=obj.className.replace(/\bpng24\b/i,"");
 obj.style.filter= "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ obj.src +"',sizingMethod='image');"
 obj.src="";
 return "";
}
//]]>

/* image rollover */
//<![CDATA[
function menuOn(imgEl) {
	imgEl.src = imgEl.src.replace(".gif", "_on.gif");
}

function menuOut(imgEl) {
	imgEl.src = imgEl.src.replace("_on.gif", ".gif");
}
//]]>

/* ï¿½ï¿½Ç²ï¿½Ú½ï¿½ ï¿½Ø½ï¿½Æ® ï¿½ï¿½ï¿½ï¿½ */
//<![CDATA[
var a=false;
function ch () {
if ( a ) return;
document.mail.to.style.backgroundImage="";
a=true;
}
function ch1 () {
document.mail.to1.value="";
}
//]]>

/* Tab Menu */
//<![CDATA[
function mOver()
{
	this.src = this.src.replace("_off.gif", "_on.gif");
}
function mOut()
{
	this.src = this.src.replace("_on.gif", "_off.gif");
}

function initTabMenu(menuContainerID, menuTabName) {
	var tabMenu = document.getElementsByName(menuTabName);
	var i = 0;

	for(i=0; i<tabMenu.length; i++) {
		thismenu = tabMenu.item(i);
		thismenu.menuContainer = document.getElementById(menuContainerID);
		thismenu.targetEl = document.getElementById(tabMenu.item(i).href.split("#")[1]);
		thismenu.targetEl.style.display = "none";
		if (thismenu.getElementsByTagName("img").item(0)) {
			thismenu.getElementsByTagName("img").item(0).onmouseover = mOver;
			thismenu.getElementsByTagName("img").item(0).onmouseout = mOut;
		}
		thismenu.onclick = tabMenuClick;
	}

	initmenu = tabMenu.item(0);
	initmenu.targetEl.style.display = "block";
	if (initmenu.getElementsByTagName("img").item(0)) {
		initmenu.getElementsByTagName("img").item(0).onmouseover();
		initmenu.getElementsByTagName("img").item(0).onmouseover = null;
		initmenu.getElementsByTagName("img").item(0).onmouseout = null;
	}
	initmenu.menuContainer.current = initmenu;
}

function tabMenuClick() {
	currentmenu = this.menuContainer.current;
	if (currentmenu != this) {
		currentmenu.targetEl.style.display = "none";
		if (currentmenu.getElementsByTagName("img").item(0)) {
			currentmenu.getElementsByTagName("img").item(0).onmouseover = mOver;
			currentmenu.getElementsByTagName("img").item(0).onmouseout = mOut;
			currentmenu.getElementsByTagName("img").item(0).onmouseout();
		}

		this.targetEl.style.display = "block";
		if (this.getElementsByTagName("img").item(0)) {
			this.getElementsByTagName("img").item(0).onmouseover = null;
			this.getElementsByTagName("img").item(0).onmouseout = null;
		}
		this.menuContainer.current = this;
	}
	return false;
}
//]]>

/* Toggle Menu */
//<![CDATA[
function tab( idx_ ) {
    var a = document.getElementById("faqList").getElementsByTagName("A");
    for ( var i = 1; i <= a.length; i++ ) {
	    if ( i == idx_ ) {
		    document.getElementById('question' + i).className =  "on";
			document.getElementById('answer' + i).className =  "";
		} else {
			document.getElementById('question' + i).className = "";
			document.getElementById('answer' + i).className = "d_none";
		}
	}
    return false;
};
//]]>

/* BookmarkSite */

function bookmarksite(title , url){
	//document.getElementById('test').setAttribute('rel' , 'sidebar');
	var ua = window.navigator.userAgent;
	if (ua.indexOf('Firefox') > 0) { // Mozilla Firefox Bookmark
		window.sidebar.addPanel( title, url , '');
	} else if(ua.indexOf('MSIE') > 0 || ua.indexOf('Trident') > 0) { // IE Favorite
		window.external.AddFavorite(url, title);
	}else if(window.opera && window.print){ // opera
		var elem = document.createElement('a');
		elem.setAttribute('href',url);
		elem.setAttribute('title',title);
		elem.setAttribute('rel','sidebar');
		elem.click();
	}else {
		alert('CRT+D ë¡ ì¦ê²¨ì°¾ê¸° ì¶ê° íì¸ì')
	}

	return false;
}

/*ë©ì¸ë©ë´ ì¤í¬ë¦½í¸*/
function initNavigation(seq) {
	nav = document.getElementById("topmenu");
	nav.menu = new Array();
	nav.current = null;
	nav.menuseq = 0;
	nav.navRect = 0;
	nav.liRect  = 0;
	nav.subRect = 0;
	navLen = nav.childNodes.length;

	allA = nav.getElementsByTagName("a");
	for(k = 0; k < allA.length; k++) {
		allA.item(k).onmouseover = allA.item(k).onfocus = function () {
			nav.isOver = true;
		};

		allA.item(k).onmouseout = allA.item(k).onblur = function () {
			nav.isOver = false;
			setTimeout(function () {
				if (nav.isOver == false) {
					if (nav.menu[seq])
						nav.menu[seq].onmouseover();
					else if(nav.current) {
						menuImg = nav.current.childNodes.item(0);
						if(menuImg.tagName == "IMG") {
							//if(menuImg.src.match("_on.gif"))
							//	menuImg.src = menuImg.src.replace("_on.gif", ".gif");

							if(menuImg.src.match("image2"))
								menuImg.src = menuImg.src.replace("image2", "image1");
						}
						if (nav.current.submenu) {
							nav.current.submenu.style.display = "none";
						}
						nav.current = null;
					}
				}
			}, 5000);
		};
	};

	for (i = 0; i < navLen; i++) {
		navItem = nav.childNodes.item(i);
		if (navItem.tagName != "LI")
			continue;

		navAnchor = navItem.getElementsByTagName("a").item(0);
		navAnchor.submenu = navItem.getElementsByTagName("ul").item(0);

		navAnchor.onmouseover = navAnchor.onfocus = function () {
			if (nav.current) {
				menuImg = nav.current.childNodes.item(0);
				if(menuImg.tagName == "IMG") {
					//if(menuImg.src.match("_on.gif"))
					//	menuImg.src = menuImg.src.replace("_on.gif", ".gif");

					if(menuImg.src.match("image2"))
						menuImg.src = menuImg.src.replace("image2", "image1");
				}
				if (nav.current.submenu) {
					//alert(nav.current.submenu.className);
					nav.current.submenu.style.display = "none";
				}
				nav.current = null;
			}
			if (nav.current != this) {
				menuImg = this.childNodes.item(0);
				if(menuImg.tagName == "IMG") {
					//if(!menuImg.src.match("_on.gif"))
					//	menuImg.src = menuImg.src.replace(".gif", "_on.gif");

					if(!menuImg.src.match("image2"))
						menuImg.src = menuImg.src.replace("image1", "image2");
				}
				if (this.submenu) {
					nav.navRect = nav.getBoundingClientRect();
					nav.liRect  = menuImg.getBoundingClientRect();

					this.submenu.style.left = (nav.liRect.left - nav.navRect.left) + 10 + "px";
					this.submenu.style.display = "block";

					nav.subRect = this.submenu.getElementsByTagName("li").item(this.submenu.getElementsByTagName("li").length-1).getBoundingClientRect();

					if (nav.navRect.right > 200 && nav.navRect.right < nav.subRect.right) {
						this.submenu.style.left = ((nav.liRect.left - nav.navRect.left) + 10) - (nav.subRect.right - nav.navRect.right) + "px";
					}
				}
				nav.current = this;
			}
			nav.isOver = true;
		};
		nav.menuseq++;
		nav.menu[nav.menuseq] = navAnchor;
	}

	if (nav.menu[seq])
		nav.menu[seq].onmouseover();
}


/*ì ì²´ë©ë´*/
function MM_showHideLayers() { //v3.0
	  var i,p,v,obj,args=MM_showHideLayers.arguments;
	  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
	    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v='hide')?'hidden':v; }
	    obj.visibility=v; }
	}
	function MM_findObj(n, d) { //v3.0
	  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
	    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
	  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
	  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document); return x;
	}


/*íëì*/
function flashwrite( id, flashUri, vWidth, vHeight, winMode ) {
	var _obj_ = "";
	_obj_ = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="' + vWidth + '" height="' + vHeight + '" id="' + id + '" align="middle">';
	_obj_ += '<param name="movie" value="' + flashUri + '" />';
	_obj_ += '<param name="allowScriptAccess" value="always" />';
	_obj_ += '<param name="quality" value="high" />';
	_obj_ += '<param name="wmode" value="' + winMode + '" />    ';

	_obj_ += '<embed src="' + flashUri + '" quality="high"  allowScriptAccess="always" wmode="' + winMode + '" bgcolor="#ffffff" width="' + vWidth +'" height="' + vHeight + '" id="' + id + '" align="middle" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></embed>    ';
	_obj_ += '</object>';



	document.writeln( _obj_ );

}


/* div ë©ë´ ì¶ê°íê¸° ìí ìì¤ -------------------- ìì */

ResultMenu          = new Object();

ResultMenu.ObjDiv   = null;

ResultMenu.TdWidth  = 0;

ResultMenu.ArrMenu  = new Array();
ResultMenu.ArrFuncParam  = new Array();

ResultMenu.ExeFunc  = "";

ResultMenu.Clear = function() {
    ResultMenu.ArrMenu      = new Array();
    ResultMenu.ArrFuncParam      = new Array();

    ResultMenu.ObjDiv       = document.createElement("div");
    ResultMenu.ObjDiv.name  = "iemenu";

    ResultMenu.ObjDiv.style.position    = "absolute";
    ResultMenu.ObjDiv.style.left        = "0px";
    ResultMenu.ObjDiv.style.top         = event.clientY + "px";
    ResultMenu.ObjDiv.style.display     = "inline";
    ResultMenu.ObjDiv.style.border      = "1px solid #979797";
    ResultMenu.ObjDiv.style.zIndex 		= 100;

    ResultMenu.ObjDiv.onfocusout = function() {
    									if( window.event.toElement == null || window.event.toElement.name != "iemenu" ) {
                                    	   ResultMenu.ObjDiv.removeNode(true);
                                           ResultMenu.ObjDiv   = null;
                                           ResultMenu.TdWidth  = 0;
                                           ResultMenu.ArrMenu  = null;
                                           ResultMenu.ArrFuncParam  = null;
                                       }
                                   }

    document.body.appendChild( ResultMenu.ObjDiv );
}


ResultMenu.AddItem = function( menuName ) {
    var strlength   = ResultMenu.GetByte( menuName );
    var strwidth    = strlength * 6 - 5 ;

    if ( ResultMenu.TdWidth < strwidth ) {
        ResultMenu.TdWidth              = strwidth;
    }

    ResultMenu.ArrMenu.push( menuName );
}


ResultMenu.AddFuncParam = function( param ) {
	ResultMenu.ArrFuncParam.push( param );
}


ResultMenu.PopUp = function () {
    var objTable        = document.createElement("table");
    var objTBody        = document.createElement("tbody");
    var objTr;
    var objTd;
    var objTextNode;
    var cntMenu         = ResultMenu.ArrMenu.length;
    var scrollWidth;
    var totalwidth;

    objTable.cellPadding             = "0";
    objTable.cellSpacing             = "0";

    objTable.style.width             = 4 + 20 + 10 + ResultMenu.TdWidth;
    objTable.style.height            = "100%";
    objTable.style.display           = "inline";
    objTable.style.backgroundColor   = "#FFFFFF";
    objTable.style.border            = "2px solid #F5F5F5";

    objTable.appendChild( objTBody );

    ResultMenu.ObjDiv.appendChild( objTable  );

    scrollWidth = parseFloat( document.body.scrollWidth );
    totalwidth  = parseFloat( event.clientX ) + parseFloat( objTable.style.width );

    if ( scrollWidth < totalwidth ) {
        ResultMenu.ObjDiv.style.left = scrollWidth - parseFloat( objTable.style.width ) - 5;
    }else {
        ResultMenu.ObjDiv.style.left = event.clientX + "px";
        ResultMenu.ObjDiv.style.background = "#fff";
    }

    if (  ( document.all.onchangebody     && document.all.onchangebody.value == "H" ) ) {
        ResultMenu.ObjDiv.style.top = "0px";
//        ResultMenu.ObjDiv.style.background = "#fff";
    }

    for ( var i = 0; i < cntMenu; i++ ) {
        objTr = document.createElement("tr");

        objTr.onmouseover = function () {
            this.style.backgroundColor = "#D1EBF4";
        }

        objTr.onmouseout = function () {
            this.style.backgroundColor = "#FFFFFF"; //"#F0F0F0";
        }

        objTr.onclick = function () {
            ResultMenu.ObjDiv.removeNode(true);

            ResultMenu.ObjDiv   = null;
            ResultMenu.TdWidth  = 0;
            ResultMenu.ArrMenu  = null;

            eval( ResultMenu.ExeFunc + "('" +ResultMenu.ArrFuncParam[this.rowIndex] + "')" );
        }

        objTr.style.cursor = "pointer";

        objTd           = document.createElement("td");
        objTextNode     = document.createTextNode( ResultMenu.ArrMenu[i] );
        objTd.appendChild( objTextNode );

        objTd.name = "iemenu";

        objTd.style.width       = ( ResultMenu.TdWidth + 100 ) + "px";
//        objTd.style.height      = "16px";
        objTd.style.paddingLeft = "5px";
        objTd.style.fontSize    = "11px";

        objTr.appendChild( objTd );

        objTBody.appendChild( objTr );
    }

    ResultMenu.ObjDiv.focus();
}


ResultMenu.GetByte = function ( str ) {
    var IEYES       = 0;
    var menufacture = navigator.appName;
    var version     = navigator.appVersion;
    var brow        = navigator.appName;

    if ( ( 0 < brow.indexOf("Explorer") )
      && (  version.indexOf("4") >= 0
         || version.indexOf("5") > 0
         || version.indexOf("6") > 0
         || version.indexOf("7") > 0
         || version.indexOf("8") > 0
         || version.indexOf("9") > 0 ) ){
         IEYES = 1;
    }

    var i;
    var strByte;
    var strLen  = str.length;;

    if ( IEYES == 1 ) {
        for ( i = 0, strByte = 0; i < strLen; i++ )  {
            if ( str.charAt(i) >= " " && str.charAt(i) <= "~" ) {
                strByte++;
            }else {
                strByte += 2;
            }
        }
        return strByte;
    }else {
        return strLen;
    }
}

/* div ë©ë´ ì¶ê°íê¸° ìí ìì¤ -------------------- ë */

addLoadEvent(getLoad);
function addLoadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload != 'function'){
		window.onload =func;
	}
	else{
		window.onload =function(){
			oldonload();
			func();
		};
	}
}

function getLoad(){
	document.oncontextmenu = function(){
		return false;
	};
}
