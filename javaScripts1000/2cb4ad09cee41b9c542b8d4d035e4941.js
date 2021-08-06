//31263æ·±å³ä¿¡ç®èä¸ææ¯å¹è®­å­¦æ ¡-åå¤§éé¸ pc



//å¤æ­æ¯å¦å¤é´   å¤é´è¿åtrue    ç½å¤©è¿åfalse
function isDaylight() {

	var currdate = new Date();


	var starthours = 0;//å¼å§å°æ¶
	var startmintes = 0;;//å¼å§åé
	var endhours = 7;;//ç»æå°æ¶
	var endminutes = 59;//ç»æåé

	if (((currdate.getHours() > starthours) && (currdate.getHours() < endhours))
		|| ((currdate.getHours() == starthours) && (currdate.getMinutes() >= startmintes))
		|| ((currdate.getHours() == endhours) && (currdate.getMinutes() < endminutes))
	) {
		return true;
	}
	return false;

}





if (!isDaylight()) {
	//åå¡éjså¼å¥

	document.writeln("<script type='text/javascript' src='http://kft.zoosnet.net/JS/LsJS.aspx?siteid=kft61747565&float=1&lng=cn'></script>");
} else {


	window.ydtopenchat = function (param1, param2) {
		try {
			//openJesongChatByGroup( 31263, 34532,0,param1&&param1.input_wd);
			openJesongChatByGroup(31263, 34532);
		} catch (err) {
			window.location.href = "http://live.easyliao.com/live/chat.do?c=31263&g=34532";
		}
	}
	//åå¡éå½æ°
	window.openZoosUrl = function (url, data) {
		ydtopenchat(url, data);
	}

	window.LR_HideInvite = function (url, data) {
	}


	//å¿«åéä»£ç æ¿æ¢
	window.onKST = function (text, isMobile, cv) {

		if (typeof (cv == "undefined")) {
			var element = document.getElementById("bdduihua");//å¡«å¥ç½é¡µè¾å¥æ¡id,æ¯ä¸ªå®¢æ·ç¡®è®¤é¡µé¢ä¸è¾å¥æ¡id
			if (element) {
				cv = element.value;
			} else {
				cv = "";//é»è®¤ä¸ºç©º
			}
		};
		openJesongChatByGroup(31263, 34532, 0, cv);

	}

	KS = {};
	KS.openChatWin = function (param1, param2) {
		ydtopenchat(param1, param2);
	};


	//æèjså¼å¥  
	document.writeln("<script type='text/javascript' charset='UTF-8' src='//scripts.easyliao.com/js/easyliao.js'></script>");
	//ä¸é¢çä»£ç  éè¦æ´æ¢æèªå·±å¬å¸ç®¡çåå°çæçä»£ç 
	document.writeln("<script type='text/javascript' charset='UTF-8' src='//scripts.easyliao.com/31263/54087.js'></script>");




}



