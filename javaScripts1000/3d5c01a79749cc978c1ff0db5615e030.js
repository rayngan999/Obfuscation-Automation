var OcJ1 = -1;
var TmPZT2 = -1;

function STip(nS3, z4) {
	if (nS3 == "") {
		window["document"]["getElementById"]("search-tips")["style"]["display"] = "none";
		return;
	} else {
		var QzdMAsTL5 = window["document"]["getElementById"]("search-tips")["getElementsByTagName"]("div")["length"];
		if ((z4["keyCode"] == 38 || z4["keyCode"] == 40) && window["document"]["getElementById"]("search-tips")["style"]["display"] != "none") {
			if (QzdMAsTL5 > 0) {
				TmPZT2 = OcJ1;
				if (z4["keyCode"] == 38) {
					if (OcJ1 == -1) {
						OcJ1 = QzdMAsTL5 - 1;
					} else {
						OcJ1 = OcJ1 - 1;
						if (OcJ1 < 0) {
							OcJ1 = QzdMAsTL5 - 1;
						}
					}
					if (OcJ1 != -1) {
						window["document"]["getElementById"]("li_" + OcJ1)["style"]["backgroundColor"] = "#cbf3fd";
						window["document"]["getElementById"]("keyword")["value"] = window["document"]["getElementById"]("li_" + OcJ1)["title"];
					}
					if (TmPZT2 != -1) {
						window["document"]["getElementById"]("li_" + TmPZT2)["style"]["backgroundColor"] = "#ffffff";
					}
				}
				if (z4["keyCode"] == 40) {
					if (OcJ1 == QzdMAsTL5 - 1) {
						OcJ1 = 0;
					} else {
						OcJ1 = OcJ1 + 1;
						if (OcJ1 > QzdMAsTL5 - 1) {
							OcJ1 = 0;
						}
					}
					if (OcJ1 != -1) {
						window["document"]["getElementById"]("li_" + OcJ1)["style"]["backgroundColor"] = "#cbf3fd";
						window["document"]["getElementById"]("keyword")["value"] = window["document"]["getElementById"]("li_" + OcJ1)["title"];
					}
					if (TmPZT2 != -1) {
						window["document"]["getElementById"]("li_" + TmPZT2)["style"]["backgroundColor"] = "#ffffff";
					}
				}
			}
		} else if (z4["keyCode"] == 13 && window["document"]["getElementById"]("search-tips")["style"]["display"] != "none") {
			if (QzdMAsTL5 > 0) {
				window["document"]["getElementById"]("keyword")["value"] = window["document"]["getElementById"]("li_" + OcJ1)["title"];
				window["document"]["getElementById"]("search-tips")["style"]["display"] = "none";
				OcJ1 = -1;
				TmPZT2 = -1;
			}
		} else {
			autoComplete(nS3);
			window["document"]["getElementById"]("search-tips")["style"]["display"] = "";
			OcJ1 = -1;
			TmPZT2 = -1;
		}
	}
}
function autoComplete(e_NIt6) {
	if (e_NIt6) {
		Ajax["call"]('ajax_www_68ecshop_com.php', 'act=tipword&word=' + e_NIt6, _autoComplete, 'GET', 'JSON');
	}
}
function _autoComplete(yUlrl7) {
	if (yUlrl7["error"] == 0) {
		if (yUlrl7["content"]) {
			window["document"]["getElementById"]('search-tips')["style"]["display"] = 'block';
			window["document"]["getElementById"]('search-tips')["innerHTML"] = yUlrl7["content"] + '<label onclick="Dh(\'search-tips\');">å³é­&nbsp;&nbsp;</label>';
		} else {
			window["document"]["getElementById"]('search-tips')["innerHTML"] = '';
			window["document"]["getElementById"]('search-tips')["style"]["display"] = 'none';
		}
	}
}
function setTip(Y8) {
	window["document"]["getElementById"]('search-tips')["style"]["display"] = 'none';
	window["document"]["getElementById"]('keyword')["value"] = Y8;
	window["document"]["getElementById"]('searchForm')["submit"]();
}
function Dh(OsoY9) {
	window["document"]["getElementById"](OsoY9)["style"]["display"] = 'none';
}