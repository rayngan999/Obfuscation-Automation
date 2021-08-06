/**
 * @type : intro
 * @desc : g4f_gVariable.js´Â ÇÁ·ÎÁ§Æ® Àü¹Ý¿¡ °ÉÃÄ Àü ½Ã½ºÅÛ¿¡¼­ °øÅëÀ¸·Î »ç¿ëÇÏ´Â »ó¼ö¸¦ ±â¼úÇÑ
 * ÀÚ¹Ù½ºÅ©¸³Æ® ÆÄÀÏÀÌ´Ù. ºó¹øÈ÷ »ç¿ëµÇ´Â »ó¼ö¸¦ È­¸é¸¶´Ù ¹Ýº¹ÀûÀ¸·Î ÇÏµåÄÚµùµÇÁö
 * ¾Êµµ·Ï ¹Ì¸® Á¤ÀÇµÇ¾î ÀÖ¾î¼­ g4f_gVariable.js¸¦ ¾÷¹«È­¸é¿¡ import½ÃÅ°±â¸¸ ÇÏ°í
 * °¢ °³¹ßÀÚ°¡ º°µµ·Î °³¹ßÇÒ ÇÊ¿ä°¡ ¾ø´Ù?.<br><br>
 *
 * </pre>
 * @version : 1.0
 * @change  :
 * <pre>
 *     <font color="blue">V1.0</font>
 *     - ÃÖÃÊ¹öÀü.
 * </pre>
 */

/**
 * @type   : var
 * @access : public
 * @desc   : °¢ ¼­ºê½Ã½ºÅÛº° root µð·ºÅä¸®¸¦ ÁöÁ¤ÇÑ´Ù.
 */

var TARGET_PAGE	= "Target_Page";	//server call page parameter name

var B_MAIN_PAGE		= (opener == null || opener == 'undefined') ? true : false;		// ÇöÀç ÆäÀÌÁö°¡ ¸ÞÀÎÆäÀÌÁöÀÎÁö È®ÀÎÇÏ´Â Flag

var COMBO_ROW_DELIMITER		= "|";				// combodata string row delimiter
var COMBO_COL_DELIMITER		= ",";				// combodata string col delimiter
var COMBO_SEPARATOR			= ":";				// combodata string code/name separator

var DATE_SEPARATOR	= "/";
var TIME_SEPARATOR	= ":";

var NOR_COLOR	= "#ffffff";
var ESS_COLOR	= "#F5F8E4";
var LCK_COLOR	= "#E6E6E6";
var TEXT_COLOR	= "#000000";

var NOR_COLOR_DEC	= "16777215";
var ESS_COLOR_DEC	= "16120036";
var LCK_COLOR_DEC	= "15132390";
var TEXT_COLOR_DEC	= "";	// ¹Ì»ç¿ë


// User Message
var CONFIRM			= "CONFIRM";
var CONFIRM_YES		= "YES";
var CONFIRM_NO		= "NO";
var CONFIRM_CANCEL	= "CANCEL";

var SEARCH_MULTI	= "MultiRow";

var GAUCE_ACTION	= "GA_ACTION";		// server call method type name

var GAUCE_QUERY		= GAUCE_ACTION + "=" + "GA_QUERY";		// server query
var GAUCE_SAVE		= GAUCE_ACTION + "=" + "GA_SAVE";		// server save
var GAUCE_DELETE	= GAUCE_ACTION + "=" + "GA_DELETE"		// server delete

var GAUCE_USER_MSG	= "GA_USERMSG";		// server return user message type name

var GAUCE_DECIMAL_POINT	= 1;			//¼Ò¼öÁ¡ ÀÌÇÏ ÀÚ¸®¼ö

var USER_INSERT = 1;	// UserStatus Àû¿ë½Ã »ç¿ëµÇ´Â Status
var USER_DELETE = 2;

var COLTYPE_STRING	= 1;
var COLTYPE_INTEGER	= 2;
var COLTYPE_DECIMAL	= 3;
var COLTYPE_URL		= 10;

var COLPROP_KEY		= 2;
var COLPROP_NOR		= 0;
var COLPROP_ESS		= 4;
var COLPROP_LCK		= 3;	// Gauce¿¡¼­ Áö¿øÇÏÁö ¾ÊÀ¸¹Ç·Î »ç¿ë±ÝÁö


var GAUCE_GRID_BGC		= "#ffffff";		// grid Bgcolor
var GAUCE_GRID_HBGC		= "#DAE2E9";		// grid HeadBgcolor
var GAUCE_GRID_HC		= "#393939";		// grid Headcolor
var GAUCE_GRID_DC		= "#393939";		// grid DataColor

var GAUCE_GRID_SUM_BGC1	= "#C4CEDF";		// ¼Ò°è color
var GAUCE_GRID_SUM_BGC2	= "#B9C6D9";		// Áß°è color
var GAUCE_GRID_SUM_BGC3	= "#A7B7CF";		// ÇÕ°è color


var GLB_MONTH_IN_YEAR       = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var GLB_SHORT_MONTH_IN_YEAR = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var GLB_DAY_IN_WEEK         = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
var GLB_SHORT_DAY_IN_WEEK   = ["Sun", "Mon", "Tue", "Wed","Thu", "Fri", "Sat"];
var GLB_DAYS_IN_MONTH       = [31,28,31,30,31,30,31,31,30,31,30,31];


/**
 * @type   : var
 * @access : public
 * @desc   : ÁöÁ¤ÇÑ datasetÀÇ rowÀÇ »óÅÂ°¡ º¯ÇÔÀÌ ¾øÀ»¶§
 */
var JOB_NORMAL = 0;
/**
 * @type   : var
 * @access : public
 * @desc   : ÁöÁ¤ÇÑ datasetÀÇ row°¡ Ãß°¡ µÈ°ÍÀÏ¶§
 */
var JOB_INSERT = 1;
/**
 * @type   : var
 * @access : public
 * @desc   : ÁöÁ¤ÇÑ datasetÀÇ row°¡ »èÁ¦ µÈ°ÍÀÏ¶§
 */
var JOB_DELETE = 2;
/**
 * @type   : var
 * @access : public
 * @desc   : ÁöÁ¤ÇÑ datasetÀÇ row°¡ º¯°æ µÈ°ÍÀÏ¶§
 */
var JOB_UPDATE = 3;
/**
 * @type   : var
 * @access : public
 * @desc   : ¾÷¹«Ã³¸®»ó ÇØ´çrow¸¦ º¹»çÇÏ´Â °æ¿ì
 */
var JOB_COPY = 5;
/**
 * @type   : var
 * @access : public
 * @desc   : ¾÷¹«Ã³¸®»ó read-only È­¸éÀÎ °æ¿ì
 */
var JOB_READ_ONLY = 6;
/**
 * @type   : var
 * @access : public
 * @desc   : Gauce Grid¿¡¼­ checkbox checkÇÑ °æ¿ì
 */
var GRID_CHECKED = 1;
/**
 * @type   : var
 * @access : public
 * @desc   : Gauce Grid¿¡¼­ checkbox uncheckÇÑ °æ¿ì
 */
var GRID_UNCHECKED = 0;
/**
 * @type   : var
 * @access : public
 * @desc   : Gauce DataSet¿¡¼­ Row Mark ¿©ºÎ
 */
var ROW_MARKED = 1;
/**
 * @type   : var
 * @access : public
 * @desc   : Gauce DataSet¿¡¼­ Row Mark ¿©ºÎ
 */
var ROW_UNMARKED = 0;



