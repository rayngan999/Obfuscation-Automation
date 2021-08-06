/**
 * @type : intro
 * @desc : g4f_string.js´Â ÇÁ·ÎÁ§Æ® Àü¹Ý¿¡ °ÉÃÄ Àü ½Ã½ºÅÛ¿¡¼­ °øÅëÀ¸·Î »ç¿ëÇÏ´Â ÀÚ¹Ù ½ºÅ©¸³Æ®¸¦ ±â¼úÇÑ
 * ÀÚ¹Ù½ºÅ©¸³Æ® ÆÄÀÏÀÌ´Ù. ºó¹øÈ÷ »ç¿ëµÇ´Â ÀÚ¹Ù½ºÅ©¸³Æ®µéÀÌ È­¸é¸¶´Ù ¹Ýº¹ÀûÀ¸·Î °³¹ßµÇÁö
 * ¾Êµµ·Ï ¹Ì¸® Á¤ÀÇµÇ¾î ÀÖ¾î¼­ g4f_string.js¸¦ ¾÷¹«È­¸é¿¡ import½ÃÅ°±â¸¸ ÇÏ¸é g4f_string.js¿¡ Á¤ÀÇµÇ¾î
 * ÀÖ´Â ½ºÅ©¸³Æ®µé¿¡ ´ëÇØ¼­´Â °¢ °³¹ßÀÚ°¡ º°µµ·Î °³¹ßÇÒ ÇÊ¿ä°¡ ¾ø´Ù.<br><br>
 *
 * @version : 1.0
 * @change  :
 * <pre>
 *     <font color="blue">V1.0</font>
 *     - ÃÖÃÊ¹öÀü.
 * </pre>
 */

 /**
 * @type   : prototype_function
 * @access : public
 * @desc   : ÀÚ¹Ù½ºÅ©¸³Æ®ÀÇ ³»Àå °´Ã¼ÀÎ String °´Ã¼¿¡ simpleReplace ¸Þ¼Òµå¸¦ Ãß°¡ÇÑ´Ù. simpleReplace ¸Þ¼Òµå´Â
 *           ½ºÆ®¸µ ³»¿¡ ÀÖ´Â Æ¯Á¤ ½ºÆ®¸µÀ» ´Ù¸¥ ½ºÆ®¸µÀ¸·Î ¸ðµÎ º¯È¯ÇÑ´Ù. String °´Ã¼ÀÇ replace ¸Þ¼Òµå¿Í µ¿ÀÏÇÑ
 *           ±â´ÉÀ» ÇÏÁö¸¸ °£´ÜÇÑ ½ºÆ®¸µÀÇ Ä¡È¯½Ã¿¡ º¸´Ù À¯¿ëÇÏ°Ô »ç¿ëÇÒ ¼ö ÀÖ´Ù.
 * <pre>
 *     var str = "abcde"
 *     str = str.simpleReplace("cd", "xx");
 * </pre>
 * À§ÀÇ ¿¹¿¡¼­ str´Â "abxxe"°¡ µÈ´Ù.
 * @sig    : oldStr, newStr
 * @param  : oldStr required ¹Ù²î¾î¾ß µÉ ±âÁ¸ÀÇ ½ºÆ®¸µ
 * @param  : newStr required ¹Ù²î¾îÁú »õ·Î¿î ½ºÆ®¸µ
 * @return : replaced String.
 * @author : ÀÓÀçÇö
 */
String.prototype.simpleReplace = function(oldStr, newStr) {
	var rStr = oldStr;

	rStr = rStr.replace(/\\/g, "\\\\");
	rStr = rStr.replace(/\^/g, "\\^");
	rStr = rStr.replace(/\$/g, "\\$");
	rStr = rStr.replace(/\*/g, "\\*");
	rStr = rStr.replace(/\+/g, "\\+");
	rStr = rStr.replace(/\?/g, "\\?");
	rStr = rStr.replace(/\./g, "\\.");
	rStr = rStr.replace(/\(/g, "\\(");
	rStr = rStr.replace(/\)/g, "\\)");
	rStr = rStr.replace(/\|/g, "\\|");
	rStr = rStr.replace(/\,/g, "\\,");
	rStr = rStr.replace(/\{/g, "\\{");
	rStr = rStr.replace(/\}/g, "\\}");
	rStr = rStr.replace(/\[/g, "\\[");
	rStr = rStr.replace(/\]/g, "\\]");
	rStr = rStr.replace(/\-/g, "\\-");

  	var re = new RegExp(rStr, "g");
    return this.replace(re, newStr);
}

// alert("abcde\.()-fgh$$?J+".simpleReplace("\\", ""));

/**
 * @type   : prototype_function
 * @access : public
 * @desc   : ÀÚ¹Ù½ºÅ©¸³Æ®ÀÇ ³»Àå °´Ã¼ÀÎ String °´Ã¼¿¡ trim ¸Þ¼Òµå¸¦ Ãß°¡ÇÑ´Ù. trim ¸Þ¼Òµå´Â ½ºÆ®¸µÀÇ ¾Õ°ú µÚ¿¡
 *           ÀÖ´Â white space ¸¦ Á¦°ÅÇÑ´Ù.
 * <pre>
 *     var str = " abcde "
 *     str = str.trim();
 * </pre>
 * À§ÀÇ ¿¹¿¡¼­ str´Â "abede"°¡ µÈ´Ù.
 * @return : trimed String.
 * @author : ÀÓÀçÇö
 */
String.prototype.trim = function() {
    return this.replace(/(^\s*)|(\s*$)/g, "");
}

/**
 * @type   : prototype_function
 * @access : public
 * @desc   : ÀÚ¹Ù½ºÅ©¸³Æ®ÀÇ ³»Àå °´Ã¼ÀÎ String °´Ã¼¿¡ trimAll ¸Þ¼Òµå¸¦ Ãß°¡ÇÑ´Ù. trim ¸Þ¼Òµå´Â ½ºÆ®¸µ ³»¿¡
 *           ÀÖ´Â white space ¸¦ ¸ðµÎ Á¦°ÅÇÑ´Ù.
 * <pre>
 *     var str = " abc de "
 *     str = str.trimAll();
 * </pre>
 * À§ÀÇ ¿¹¿¡¼­ str´Â "abcde"°¡ µÈ´Ù.
 * @return : trimed String.
 * @author : ÀÓÀçÇö
 */
String.prototype.trimAll = function() {
    return this.replace(/\s*/g, "");
}

// alert(" a b  d ".trimAll());

/**
 * @type   : prototype_function
 * @access : public
 * @desc   : ÀÚ¹Ù½ºÅ©¸³Æ®ÀÇ ³»Àå °´Ã¼ÀÎ String °´Ã¼¿¡ cut ¸Þ¼Òµå¸¦ Ãß°¡ÇÑ´Ù. cut ¸Þ¼Òµå´Â ½ºÆ®¸µÀÇ Æ¯Á¤ ¿µ¿ªÀ»
 *           Àß¶ó³½´Ù.
 * <pre>
 *     var str = "abcde"
 *     str = str.cut(2, 2);
 * </pre>
 * À§ÀÇ ¿¹¿¡¼­ str´Â "abe"°¡ µÈ´Ù.
 * @sig    : start, length
 * @param  : start  required start index to cut
 * @param  : length required length to cut
 * @return : cutted String.
 * @author : ÀÓÀçÇö
 */
String.prototype.cut = function(start, length) {
    return this.substring(0, start) + this.substr(start + length);
}

/**
 * @type   : prototype_function
 * @access : public
 * @desc   : ÀÚ¹Ù½ºÅ©¸³Æ®ÀÇ ³»Àå °´Ã¼ÀÎ String °´Ã¼¿¡ insert ¸Þ¼Òµå¸¦ Ãß°¡ÇÑ´Ù. insert ¸Þ¼Òµå´Â ½ºÆ®¸µÀÇ Æ¯Á¤ ¿µ¿ª¿¡
 *           ÁÖ¾îÁø ½ºÆ®¸µÀ» »ðÀÔÇÑ´Ù.
 * <pre>
 *     var str = "abcde"
 *     str = str.insert(3, "xyz");
 * </pre>
 * À§ÀÇ ¿¹¿¡¼­ str´Â "abcxyzde"°¡ µÈ´Ù.
 * @sig    : start, length
 * @param  : index required »ðÀÔÇÒ À§Ä¡. ÇØ´ç ½ºÆ®¸µÀÇ index ¹Ù·Î ¾Õ¿¡ »ðÀÔµÈ´Ù. index´Â 0ºÎÅÍ ½ÃÀÛ.
 * @param  : str   required »ðÀÔÇÒ ½ºÆ®¸µ.
 * @return : inserted String.
 * @author : ÀÓÀçÇö
 */
String.prototype.insert = function(index, str) {
    return this.substring(0, index) + str + this.substr(index);
}

/**
 * @type   : prototype_function
 * @access : public
 * @desc   : String.split() ¿Í °°Áö¸¸ ¿©·¯°¡Áö ¿É¼ÇÀ» ÁÙ ¼ö ÀÖ´Ù.
 * <pre>
 *     option list
 *
 *     - i : ignored split
 *         ±¸ºÐÀÚ ¹®ÀÚ ¾Õ¿¡ "\" °¡ ºÙ¾îÀÖÀ» ¶§´Â ±¸ºÐÀÚ·Î ÀÎ½ÄÇÏÁö ¾Ê´Â´Ù. ('\' ¹®ÀÚ¸¦ stringÀ¸·Î Ç¥ÇöÇÒ ¶§´Â "\\" ·Î ÇØ¾ßÇÔ)
 *             var str = "abc,de\\,fg"
 *             var strArr = str.advancedSplit(",", "i");
 *         À§ÀÇ ¿¹¿¡¼­ strArr[0]´Â "abc", strArr[1]´Â "de,fg"°¡ µÈ´Ù.
 *
 *     - t : trimed split
 *         split ÈÄ¿¡ splited string µéÀ» trim ½ÃÅ²´Ù.
 *             var str = "abc,  de,fg"
 *             var strArr = str.advancedSplit(",", "t");
 *         À§ÀÇ ¿¹¿¡¼­ strArr[0]´Â "abc", strArr[1]´Â "de", strArr[2]´Â "fg"°¡ µÈ´Ù.
 * </pre>
 * ¿É¼ÇµéÀº º¹ÇÕÀûÀ¸·Î »ç¿ëµÉ ¼ö ÀÖ´Ù.
 * <pre>
 *     var str = "abc,  de\\,fg"
 *     var strArr = str.advancedSplit(",", "it");
 * </pre>
 * À§ÀÇ ¿¹¿¡¼­ strArr[0]´Â "abc", strArr[1]´Â "de,fg"°¡ µÈ´Ù.
 * @sig    : delim, options
 * @param  : delim   required delimenator
 * @param  : options required ¿É¼ÇÀ» ³ªÅ¸³»´Â ¹®ÀÚµéÀ» ³ª¿­ÇÑ ½ºÆ®¸µ
 * @return : splited string array.
 * @author : ÀÓÀçÇö
 */
String.prototype.advancedSplit = function(delim, options) {
	if (options == null || options.trim() == "") {
		return this.split(delim);
	}

	var optionI = false;
	var optionT = false;

	options = options.trim().toUpperCase();

	for (var i = 0; i < options.length; i++) {
		if (options.charAt(i) == 'I') {
			optionI = true;
		} else if (options.charAt(i) == 'T') {
			optionT = true;
		}
	}

	var arr = new Array();
	var cnt = 0;
	var startIdx = 0;
	var delimIdx = -1;
	var str = this;
	var temp = 0;

	while ( (delimIdx = (str == null) ?
	         -1 : str.indexOf(delim, startIdx)
	        ) != -1
	      ) {

		if (optionI && str.substr(delimIdx - 1, 2) == '\\' + delim) {
			str = str.cut(delimIdx - 1, 1);
			startIdx = delimIdx;
			continue;
		}

		arr[cnt++] = optionT ? str.substring(0, delimIdx).trim() :
		                       str.substring(0, delimIdx);
		str = str.substr(delimIdx + 1);
		startIdx = 0;
	}

	arr[cnt] = (str == null) ? "" : str;

	return arr;
}

/*
var splitTestStr = "abc  , de\\,  fg , f d".advancedSplit(",", "it");
for (var i = 0; i < splitTestStr.length; i++) {
	alert("'" + splitTestStr[i] + "'");
}
*/

/**
 * @type   : prototype_function
 * @access : public
 * @desc   : ÀÚ¹Ù½ºÅ©¸³Æ®ÀÇ ³»Àå °´Ã¼ÀÎ String °´Ã¼¿¡ toDate ¸Þ¼Òµå¸¦ Ãß°¡ÇÑ´Ù. toDate ¸Þ¼Òµå´Â ³¯Â¥¸¦ Ç¥ÇöÇÏ´Â
 *           ½ºÆ®¸µ °ªÀ» ÀÚ¹Ù½ºÅ©¸³Æ®ÀÇ ³»Àå °´Ã¼ÀÎ Date °´Ã¼·Î º¯È¯ÇÑ´Ù.
 * <pre>
 *     var date = "2002-03-05".toDate("YYYY-MM-DD")
 * </pre>
 * À§ÀÇ ¿¹¿¡¼­ date º¯¼ö´Â ½ÇÁ¦·Î 2002³â 3¿ù 5ÀÏÀ» Ç¥ÇöÇÏ´Â Date ¿ÀºêÁ§Æ®¸¦ °¡¸£Å²´Ù.
 * @sig    : [pattern]
 * @param  : pattern optional Date¸¦ Ç¥ÇöÇÏ°í ÀÖ´Â ÇöÀçÀÇ StringÀ» patternÀ¸·Î Ç¥ÇöÇÑ´Ù. (default : YYYYMMDD)
 * <pre>
 *     # syntex
 *
 *       YYYY : year(4ÀÚ¸®)
 *       YY   : year(2ÀÚ¸®)
 *       MM   : month in year(number)
 *       DD   : day in month
 *       HH   : hour in day (0~23)
 *       mm   : minute in hour
 *       ss   : second in minute
 *       SS   : millisecond in second
 *
 *     <font color=red>ÁÖÀÇ)</font> YYYY(YY)´Â ¹Ýµå½Ã ÀÖ¾î¾ß ÇÑ´Ù. YYYY(YY) ¸¸ »ç¿ëÇÒ °æ¿ì´Â 1¿ù 1ÀÏÀ» ±âÁØÀ¸·Î
 *     ÇÏ°í YYYY¿Í MM ¸¸»ç¿ëÇÒ °æ¿ì´Â 1ÀÏÀ» ±âÁØÀ¸·Î ÇÑ´Ù.
 * </pre>
 * @return : º¯È¯µÈ Date Object.
 * @author : ÀÓÀçÇö
 */
String.prototype.toDate = function(pattern) {
	var index = -1;
	var year;
	var month;
	var day;
	var hour = 0;
	var min  = 0;
	var sec  = 0;
	var ms   = 0;
	var newDate;

	if (pattern == null) {
		pattern = "YYYYMMDD";
	}

	if ((index = pattern.indexOf("YYYY")) == -1 ) {
		index = pattern.indexOf("YY");
		year = "20" + this.substr(index, 2);
	} else {
		year = this.substr(index, 4);
	}

	if ((index = pattern.indexOf("MM")) != -1 ) {
		month = this.substr(index, 2);
	} else {
		month = 1;
	}

	if ((index = pattern.indexOf("DD")) != -1 ) {
		day = this.substr(index, 2);
	} else {
		day = 1;
	}

	if ((index = pattern.indexOf("HH")) != -1 ) {
		hour = this.substr(index, 2);
	}

	if ((index = pattern.indexOf("mm")) != -1 ) {
		min = this.substr(index, 2);
	}

	if ((index = pattern.indexOf("ss")) != -1 ) {
		sec = this.substr(index, 2);
	}

	if ((index = pattern.indexOf("SS")) != -1 ) {
		ms = this.substr(index, 2);
	}

	newDate = new Date(year, month - 1, day, hour, min, sec, ms);
	if (month > 12) {
		newDate.setFullYear(year + 1);
	} else {
		newDate.setFullYear(year);
	}

	return newDate;
}


/**
 * @type   : prototype_function
 * @access : public
 * @desc   : ÀÚ¹Ù½ºÅ©¸³Æ®ÀÇ ³»Àå °´Ã¼ÀÎ String °´Ã¼¿¡ toMoney ¸Þ¼Òµå¸¦ Ãß°¡ÇÑ´Ù. 
 *           toMoney ¸Þ¼Òµå´Â ½ºÆ®¸µÀ» ÅëÈ­Çü Æ÷¸ËÀ¸·Î º¯È¯ÇÑ´Ù.
 * <pre>
 *     var str = "-123456.78";
 *     str = str.toMoney();
 * </pre>
 * À§ÀÇ ¿¹¿¡¼­ str´Â -123,456.78ÀÌ µÈ´Ù.
 * @sig    : 
 * @return : formated string
 * @author : Á¤ÈÆ±Ô
 */
String.prototype.toMoney=function(){
	if(this!=parseFloat(this)) return this;

	var isMinus = false;
	var value=this.trim();

	if(this.charAt(0)=="-") {
		value = value.substring(1);
		isMinus = true;
	}

	var tmp = value.split(".");
	
	for(i=tmp[0].length-3;i>0;i-=3){
		tmp[0]=tmp[0].substring(0, i)+","+tmp[0].substring(i);
	}

	if(isMinus) tmp[0] = "-"+tmp[0];

	if(tmp.length > 1) return tmp[0]+"."+tmp[1];
	else return tmp[0];
}

/**
 * @type   : prototype_function
 * @object : Date
 * @access : public
 * @desc   : ÀÚ¹Ù½ºÅ©¸³Æ®ÀÇ ³»Àå °´Ã¼ÀÎ Date °´Ã¼¿¡ format ¸Þ¼Òµå¸¦ Ãß°¡ÇÑ´Ù. format ¸Þ¼Òµå´Â Date °´Ã¼°¡ °¡Áø ³¯Â¥¸¦
 *           ÁöÁ¤µÈ Æ÷¸äÀÇ ½ºÆ®¸µÀ¸·Î º¯È¯ÇÑ´Ù.
 * <pre>
 *     var dateStr = new Date().format("YYYYMMDD");
 *
 *     Âü°í : Date ¿ÀºêÁ§Æ® »ý¼ºÀÚµé - dateObj = new Date()
 *                                   - dateObj = new Date(dateVal)
 *                                   - dateObj = new Date(year, month, date[, hours[, minutes[, seconds[,ms]]]])
 * </pre>
 * À§ÀÇ ¿¹¿¡¼­ ¿À´Ã³¯Â¥°¡ 2002³â 3¿ù 5ÀÏÀÌ¶ó¸é dateStrÀÇ °ªÀº "20020305"°¡ µÈ´Ù.
 * default patternÀº "YYYYMMDD"ÀÌ´Ù.
 * @sig    : [pattern]
 * @param  : pattern optional º¯È¯ÇÏ°íÀÚ ÇÏ´Â ÆÐÅÏ ½ºÆ®¸µ. (default : YYYYMMDD)
 * <pre>
 *     # syntex
 *
 *       YYYY : hour in am/pm (1~12)
 *       MM   : month in year(number)
 *       MON  : month in year(text)  ¿¹) "January"
 *       mon  : short month in year(text)  ¿¹) "Jan"
 *       DD   : day in month
 *       DAY  : day in week  ¿¹) "Sunday"
 *       day  : short day in week  ¿¹) "Sun"
 *       hh   : hour in am/pm (1~12)
 *       HH   : hour in day (0~23)
 *       mm   : minute in hour
 *       ss   : second in minute
 *       SS   : millisecond in second
 *       a    : am/pm  ¿¹) "AM"
 * </pre>
 * @return : Date¸¦ Ç¥ÇöÇÏ´Â º¯È¯µÈ String.
 * @author : ÀÓÀçÇö
 */
Date.prototype.format = function(pattern) {
    var year      = this.getFullYear();
    var month     = this.getMonth() + 1;
    var day       = this.getDate();
    var dayInWeek = this.getDay();
    var hour24    = this.getHours();
    var ampm      = (hour24 < 12) ? "AM" : "PM";
    var hour12    = (hour24 > 12) ? (hour24 - 12) : hour24;
    var min       = this.getMinutes();
    var sec       = this.getSeconds();

    var YYYY = "" + year;
    var YY   = YYYY.substr(2);
    var MM   = (("" + month).length == 1) ? "0" + month : "" + month;
    var MON  = GLB_MONTH_IN_YEAR[month-1];
    var mon  = GLB_SHORT_MONTH_IN_YEAR[month-1];
    var DD   = (("" + day).length == 1) ? "0" + day : "" + day;
    var DAY  = GLB_DAY_IN_WEEK[dayInWeek];
    var day  = GLB_SHORT_DAY_IN_WEEK[dayInWeek];
    var HH   = (("" + hour24).length == 1) ? "0" + hour24 : "" + hour24;
    var hh   = (("" + hour12).length == 1) ? "0" + hour12 : "" + hour12;
    var mm   = (("" + min).length == 1) ? "0" + min : "" + min;
    var ss   = (("" + sec).length == 1) ? "0" + sec : "" + sec;
    var SS   = "" + this.getMilliseconds();

    var dateStr;
    var index = -1;

    if (typeof(pattern) == "undefined") {
    	dateStr = "YYYYMMDD";
    } else {
    	dateStr = pattern;
    }

	dateStr = dateStr.replace(/YYYY/g, YYYY);
	dateStr = dateStr.replace(/YY/g,   YY);
	dateStr = dateStr.replace(/MM/g,   MM);
	dateStr = dateStr.replace(/MON/g,  MON);
	dateStr = dateStr.replace(/mon/g,  mon);
	dateStr = dateStr.replace(/DD/g,   DD);
	dateStr = dateStr.replace(/DAY/g,  DAY);
	dateStr = dateStr.replace(/day/g,  day);
	dateStr = dateStr.replace(/hh/g,   hh);
	dateStr = dateStr.replace(/HH/g,   HH);
	dateStr = dateStr.replace(/mm/g,   mm);
	dateStr = dateStr.replace(/ss/g,   ss);
	dateStr = dateStr.replace(/(\s+)a/g, "$1" + ampm);

	return dateStr;
}

/**
 * @type   : prototype_function
 * @object : Date
 * @access : public
 * @desc   : ÇöÀç Date °´Ã¼ÀÇ ³¯Â¥º¸´Ù ÀÌÈÄ³¯Â¥¸¦ °¡Áø Date °´Ã¼¸¦ ¸®ÅÏÇÑ´Ù.
 *           ¿¹¸¦ µé¾î ³»ÀÏ ³¯Â¥¸¦ ¾òÀ¸·Á¸é ´ÙÀ½°ú °°ÀÌ ÇÏ¸é µÈ´Ù.
 * <pre>
 *     var oneDayAfter = new Date.after(0, 0, 1);
 * </pre>
 * @sig    : [years[, months[, dates[, hours[, minutes[, seconds[, mss]]]]]]]
 * @param  : years   optional ÀÌÈÄ ³â¼ö
 * @param  : months  optional ÀÌÈÄ ¿ù¼ö
 * @param  : dates   optional ÀÌÈÄ ÀÏ¼ö
 * @param  : hours   optional ÀÌÈÄ ½Ã°£¼ö
 * @param  : minutes optional ÀÌÈÄ ºÐ¼ö
 * @param  : seconds optional ÀÌÈÄ ÃÊ¼ö
 * @param  : mss     optional ÀÌÈÄ ¹Ð¸®ÃÊ¼ö
 * @return : ÀÌÈÄ³¯Â¥¸¦ Ç¥ÇöÇÏ´Â Date °´Ã¼
 * @author : ÀÓÀçÇö
 */
Date.prototype.after = function(years, months, dates, hours, miniutes, seconds, mss) {
    if (years == null)    years    = 0;
    if (months == null)   months   = 0;
    if (dates == null)    dates    = 0;
    if (hours == null)    hours    = 0;
    if (miniutes == null) miniutes = 0;
    if (seconds == null)  seconds  = 0;
    if (mss == null)      mss      = 0;

	return new Date(this.getFullYear() + years,
	                this.getMonth() + months,
	                this.getDate() + dates,
	                this.getHours() + hours,
	                this.getMinutes() + miniutes,
	                this.getSeconds() + seconds,
	                this.getMilliseconds() + mss
	               );
}
// alert(new Date().after(1, 1, 1, 1, 1, 1).format("YYYYMMDD HHmmss"));

/**
 * @type   : prototype_function
 * @object : Date
 * @access : public
 * @desc   : ÇöÀç Date °´Ã¼ÀÇ ³¯Â¥º¸´Ù ÀÌÀü³¯Â¥¸¦ °¡Áø Date °´Ã¼¸¦ ¸®ÅÏÇÑ´Ù.
 *           ¿¹¸¦ µé¾î ¾îÁ¦ ³¯Â¥¸¦ ¾òÀ¸·Á¸é ´ÙÀ½°ú °°ÀÌ ÇÏ¸é µÈ´Ù.
 * <pre>
 *     var oneDayBefore = new Date.before(0, 0, 1);
 * </pre>
 * @sig    : [years[, months[, dates[, hours[, minutes[, seconds[, mss]]]]]]]
 * @param  : years   optional ÀÌÀüÀ¸·Î µ¹¾Æ°¥ ³â¼ö
 * @param  : months  optional ÀÌÀüÀ¸·Î µ¹¾Æ°¥ ¿ù¼ö
 * @param  : dates   optional ÀÌÀüÀ¸·Î µ¹¾Æ°¥ ÀÏ¼ö
 * @param  : hours   optional ÀÌÀüÀ¸·Î µ¹¾Æ°¥ ½Ã°£¼ö
 * @param  : minutes optional ÀÌÀüÀ¸·Î µ¹¾Æ°¥ ºÐ¼ö
 * @param  : seconds optional ÀÌÀüÀ¸·Î µ¹¾Æ°¥ ÃÊ¼ö
 * @param  : mss     optional ÀÌÀüÀ¸·Î µ¹¾Æ°¥ ¹Ð¸®ÃÊ¼ö
 * @return : ÀÌÀü³¯Â¥¸¦ Ç¥ÇöÇÏ´Â Date °´Ã¼
 * @author : ÀÓÀçÇö
 */
Date.prototype.before = function(years, months, dates, hours, miniutes, seconds, mss) {
    if (years == null)    years    = 0;
    if (months == null)   months   = 0;
    if (dates == null)    dates    = 0;
    if (hours == null)    hours    = 0;
    if (miniutes == null) miniutes = 0;
    if (seconds == null)  seconds  = 0;
    if (mss == null)      mss      = 0;

	return new Date(this.getFullYear() - years,
	                this.getMonth() - months,
	                this.getDate() - dates,
	                this.getHours() - hours,
	                this.getMinutes() - miniutes,
	                this.getSeconds() - seconds,
	                this.getMilliseconds() - mss
	               );
}
//alert(new Date().before(1, 1, 1, 1, 1, 1).format("YYYYMMDD HHmmss"));
