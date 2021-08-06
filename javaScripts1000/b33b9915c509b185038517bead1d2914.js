
/**
 * @type   : function
 * @access : public
 * @desc   : íì¤í¸ ë°ì¤ì ë ì§ìë ¥ì ìí´ ë¬ë ¥ì ì¤ííë íì<br>
 *			  íµì¼ì±ì ìí´ "onclick" ì´ë²¤í¸ ë°ìì í¸ì¶íëë¡ íë¤.<br>
 * @sig    : obj, event, inputName
 * @param  : event - onclick
 * @param  : obj - ì´ë²¤í¸ë¥¼ í¸ì¶íë ì¤ë¸ì í¸
 * @param  : event - ì´ë²¤í¸
 * @param  : inputName - ê°ì ëê²¨ë°ì íì¤í¸ë°ì¤ëª ë¬¸ìì´
 * @param  : dateType - ì¸íë  ë ì§íì('YYYYMM':ëì, 'YYYY':ë, ê·¸ì¸:ëìì¼)
 * <pre>
 *    cfOpenCalendar(this,event,inputName)
 * </pre>
 * @return : void
 * @author : ííì£¼
 */  	
function cfOpenCalendar(obj, event, inputName, dateType, fncName)
{
	var sURL = null;
	var vArguments = new Object();
	var sFeature = null;

	var dlg_width  = 200;
	var dlg_height = 200;

	//íë©´ì ìì¹
	var innerX,innerY;
	if (self.innerWidth) { // IE ê¸°ë°
		innerX = self.screen.left;
		innerY = self.screen.top;
	}
	else if (document.documentElement && document.documentElement.clientTop) { // Explorer 6 Strict 
		innerX = document.documentElement.clientLeft;
		innerY = document.documentElement.clientTop;
	}
	else if (document.body) { // ê¸°í ëë¨¸ì§
		innerX = document.body.clientLeft;
		innerY = document.body.clientTop;
	}

	//ì¤í¬ë¡¤ ë ì¬ì´ì¦
	var scrollX,scrollY;
	if (self.pageYOffset) { //  IE ê¸°ë°
		scrollX = self.pageXOffset;
		scrollY = self.pageYOffset;
	}
	else if (document.documentElement && document.documentElement.scrollTop) {	// Explorer 6 Strict
		scrollX = document.documentElement.scrollLeft;
		scrollY = document.documentElement.scrollTop;
	}
	else if (document.body) { // ê¸°í ëë¨¸ì§
		scrollX = document.body.scrollLeft;
		scrollY = document.body.scrollTop;
	}
	var dlg_left   = cfGetRealOffsetLeft(obj) + (event.screenX - event.clientX) + innerX - scrollX;
	var dlg_top    = cfGetRealOffsetTop(obj)  + (event.screenY - event.clientY) + innerY - scrollY + obj.offsetHeight;

	if (dlg_left + dlg_width > screen.availWidth) {
		dlg_left = screen.availWidth - dlg_width;
	}
	if (dlg_top + dlg_height > screen.availHeight) {
		dlg_top = dlg_top - dlg_height - obj.offsetHeight;
	}
	if (dlg_top < 0) dlg_top = 0;

	//2008.08.25 ContextPath ì ê±° ë¥ì í¸
//	sURL = gvContextPath + "/wem/common/calendar.jsp?inputName="+inputName;
	sURL ="/comm/pop/calendar.jsp?inputName=" + inputName + "&dateType=" + dateType + "&fncName=" + fncName;

	vArguments = new Object();
	vArguments.control = obj;
	sFeature = "toolbar=no,location=no,directories=no,status=no,scrollbars=no,menubar=no,width="+dlg_width+", height="+dlg_height+", left="+dlg_left+", top="+dlg_top;
	window.open(sURL, 'cal' , sFeature);
}

/**
 * @type   : function
 * @access : public
 * @desc   : íì¤í¸ ë°ì¤ì ëììë ¥ì ìí´ ë¬ë ¥ì ì¤ííë íì<br>
 *			  íµì¼ì±ì ìí´ "onclick" ì´ë²¤í¸ ë°ìì í¸ì¶íëë¡ íë¤.<br>
 * @sig    : obj, event, inputName
 * @param  : event - onclick
 * @param  : obj - ì´ë²¤í¸ë¥¼ í¸ì¶íë ì¤ë¸ì í¸
 * @param  : event - ì´ë²¤í¸
 * @param  : inputName - ê°ì ëê²¨ë°ì íì¤í¸ë°ì¤ëª ë¬¸ìì´
 * <pre>
 *    cfOpenCalendarMonth(this,event,inputName)
 * </pre>
 * @return : void
 * @author : ííì£¼
 */  	
function cfOpenCalendarMonth(obj, event, inputName, dateType, fncName)
{
	var sURL = null;
	var vArguments = new Object();
	var sFeature = null;

	var dlg_width  = 200;
	var dlg_height = 100;

	//íë©´ì ìì¹
	var innerX,innerY;
	if (self.innerWidth) { // IE ê¸°ë°
		innerX = self.screen.left;
		innerY = self.screen.top;
	}
	else if (document.documentElement && document.documentElement.clientTop) { // Explorer 6 Strict 
		innerX = document.documentElement.clientLeft;
		innerY = document.documentElement.clientTop;
	}
	else if (document.body) { // ê¸°í ëë¨¸ì§
		innerX = document.body.clientLeft;
		innerY = document.body.clientTop;
	}

	//ì¤í¬ë¡¤ ë ì¬ì´ì¦
	var scrollX,scrollY;
	if (self.pageYOffset) { //  IE ê¸°ë°
		scrollX = self.pageXOffset;
		scrollY = self.pageYOffset;
	}
	else if (document.documentElement && document.documentElement.scrollTop) {	// Explorer 6 Strict
		scrollX = document.documentElement.scrollLeft;
		scrollY = document.documentElement.scrollTop;
	}
	else if (document.body) { // ê¸°í ëë¨¸ì§
		scrollX = document.body.scrollLeft;
		scrollY = document.body.scrollTop;
	}
	var dlg_left   = cfGetRealOffsetLeft(obj) + (event.screenX - event.clientX) + innerX - scrollX;
	var dlg_top    = cfGetRealOffsetTop(obj)  + (event.screenY - event.clientY) + innerY - scrollY + obj.offsetHeight;

	if (dlg_left + dlg_width > screen.availWidth) {
		dlg_left = screen.availWidth - dlg_width;
	}
	if (dlg_top + dlg_height > screen.availHeight) {
		dlg_top = dlg_top - dlg_height - obj.offsetHeight;
	}
	if (dlg_top < 0) dlg_top = 0;

	//2008.08.25 ContextPath ì ê±° ë¥ì í¸
//	sURL = gvContextPath + "/wem/common/calendar.jsp?inputName="+inputName;
	sURL ="/comm/pop/calendarMonth.jsp?inputName=" + inputName + "&dateType=" + dateType + "&fncName=" + fncName;

	vArguments = new Object();
	vArguments.control = obj;
	sFeature = "toolbar=no,location=no,directories=no,status=no,scrollbars=no,menubar=no,width="+dlg_width+", height="+dlg_height+", left="+dlg_left+", top="+dlg_top;
	window.open(sURL, 'cal' , sFeature);
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì¤í¬ë¦°ì RealOffsetLeft ê°ì ¸ì¤ê¸°<br>
 *			 ë¬ë ¥íìì ìì¹ë¥¼ ê³ì°íê¸° ìí´ ì¬ì© 
 * @sig    : obj
 * @param  : obj - ì´ë²¤í¸ë¥¼ í¸ì¶íë ì¤ë¸ì í¸
 * <pre>
 *    GetRealOffsetLeft(obj)
 * </pre>
 * @return : void
 * @author : ííì£¼
 */ 
function cfGetRealOffsetLeft(obj)
{
	return (obj ? obj.offsetLeft + cfGetRealOffsetLeft(obj.offsetParent) : 0);
}

/**
 * @type   : function
 * @access : public
 * @desc   : ì¤í¬ë¦°ì RealOffsetTop ê°ì ¸ì¤ê¸°<br>
 *			 ë¬ë ¥íìì ìì¹ë¥¼ ê³ì°íê¸° ìí´ ì¬ì©
 * @sig    : obj
 * @param  : obj - ì´ë²¤í¸ë¥¼ í¸ì¶íë ì¤ë¸ì í¸
 * <pre>
 *    GetRealOffsetTop(obj)
 * </pre>
 * @return : void
 * @author : ííì£¼
 */  
function cfGetRealOffsetTop(obj)
{
	return (obj ? obj.offsetTop + cfGetRealOffsetTop(obj.offsetParent) : 0);
}