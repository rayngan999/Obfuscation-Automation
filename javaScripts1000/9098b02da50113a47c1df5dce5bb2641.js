//////////////////////////////
//	"date":new Date(å¹´, æ - 1, æ¥, æ, å, ç§),
//////////////////////////////
var object = {
	0:{
		"date":new Date(2019, 9 - 1, 15, 00, 00, 00),
		"html":"",
	},
	1:{
		"date":new Date(2019, 9 - 1, 16, 00, 00, 00),
		"html":"<div id=\"jin115_ad_b\"><a href=\"https://geo-online.co.jp/campaign/special/store/norikae.html?utm_source=oreteki-game&utm_medium=banner&utm_campaign=mediastore-norikae20190914-0930&utm_content=normal-banner\" target=\"_blank\" onclick=\"ga('send', 'event', 'geocp_banner','click', 'geocp_20190916',1 );\"><img src=\"http://jin115.com/adv/GEO_1322x125_20190916.png\" border=\"0\" onload=\"ga('send', 'event', 'geocp_banner','impression', 'geocp_20190916',1 );\"></a></div>",
	},
	2:{
		"date":new Date(2019, 9 - 1, 20, 23, 59, 59),
		"html":"",
	},
}

//////////////////////////////
//	è¨­å®ããæ¥ä»ããã¼ã¹ã«åãæ¿ããè¡ã
//////////////////////////////
var now = new Date();
var tmp_date = "";
var tmp_html = "";

for (var i in object){
	if(now >= object[i]["date"]) {
		if(tmp_date == "" || object[i]["date"] >= tmp_date) {
			tmp_date = object[i]["date"];
			tmp_html = object[i]["html"];
		}
	}
}
document.write(tmp_html);
