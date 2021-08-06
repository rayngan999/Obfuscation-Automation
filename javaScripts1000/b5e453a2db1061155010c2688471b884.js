var domain_url = 'http://'+document.domain+'/';
/* $Id : common.js 4865 2007-01-31 14:04:10Z paulgao $ */
/* JSä»£ç å¢å _start  By www.ecshop68.com */
function reg_package() {
	var pal = document.getElementById("package_tit").getElementsByTagName("h2");
	var pal_count = pal.length;
	for (var i = 0; i < pal.length; i++) {
		pal[i].pai = i;
		pal[i].style.cursor = "pointer";
		pal[i].onclick = function() {
			for (var j = 0; j < pal_count; j++) {
				var _pal = document.getElementById("package_tit").getElementsByTagName("h2")[j];
				var ison = j == this.pai;
				_pal.className = (ison ? "current" : "");
			}
			for (var j = 0; j < pal_count; j++) {
				var _palb = document.getElementById("package_box_" + j);
				var ison = j == this.pai;
				_palb.className = (ison ? "" : "none");
			}
		}
	}

}

function get_packcheck_count(pid) {
	var result = 1;
	var fid = document.getElementById('package_box_' + pid);
	var box = fid.getElementsByTagName('input');
	for (var i = 0; i < box.length; i++) {
		if (box[i].type == 'checkbox' && box[i].checked) {
			result = result + 1;
		}
	}
	return result;
}

function get_packcheck_list(indexid) {
	var result = '';
	var fid = document.getElementById('package_box_' + indexid);
	var box = fid.getElementsByTagName('input');
	for (var i = 0; i < box.length; i++) {
		if (box[i].type == 'checkbox' && box[i].checked) {
			result = result + box[i].value + ',';
		}
	}
	return result;
}

function check_package(pid, thef) {

	if (get_packcheck_count(pid) == 2) {
		alert('è¯·è³å°ä¿çä¸ä»¶åå');
		thef.checked = true;
	} else {

		var price_yuan = 0;
		var price_pack = 0;
		var fid = document.getElementById('package_box_' + pid);
		var box = fid.getElementsByTagName('input');

		for (var i = 0; i < box.length; i++) {
			if (box[i].type == 'checkbox' && box[i].checked) {
				// åä»·
				var p_yuan = box[i].name;
				price_yuan = Number(price_yuan) + Number(p_yuan);
				// å¥é¤ä»·
				var p_pack = box[i].id;
				price_pack = Number(price_pack) + Number(p_pack);
			}
		}

		price_format = 'ï¿¥%så';
		price_re = /\%s/g;

		price_yuan = Math.round(price_yuan);
		price_yuan_format = price_format.replace(price_re, price_yuan);
		document.getElementById("price_yuan_" + pid).innerHTML = price_yuan_format;

		price_pack = Math.round(price_pack);
		price_pack_format = price_format.replace(price_re, price_pack);
		document.getElementById("price_pack_" + pid).innerHTML = price_pack_format;

		price_save = price_yuan - price_pack;
		price_save_format = price_format.replace(price_re, price_save);
		document.getElementById("price_save_" + pid).innerHTML = price_save_format;

	}

}

function isSelectAttr(spec_arr) {
	var ret = true;
	var num = $("div[class='catt']").length;
	var par = document.getElementById("choose");
	if (num > 0) {
		$("div[class='catt']").each(function() {
			$("#choose").removeClass("catt_photo");
			if ($(this).children("a[class='cattsel']").length <= 0) {
				$("#choose").addClass("catt_photo");
				ret = false;
			} else {
				$("#choose").removeClass("catt_photo");
			}
		})
		if ($('#choose').is('.catt_photo')) {
			alert("è¯·ä¸å®è¦éæ©ååå±æ§ï¼");
		}
	}
	return ret;
}

/* JSä»£ç å¢å _end By www.ecshop68.com */
/*******************************************************************************
 * æ·»å ååå°è´­ç©è½¦
 * @param extCode æ©å±ä»£ç ï¼å¯ä»¥èªå®ä¹ä¸äºæ©å±å±æ§ï¼ä¾å¦ï¼'pre_sale'
 */

function addToCart(goodsId, parentId, isnowbuy, extCode) {

	var goods = new Object();
	var spec_arr = new Array();
	var fittings_arr = new Array();
	var number = 1;
	var formBuy = document.forms['ECS_FORMBUY'];
	var quick = 0;

	var one_buy = (typeof (isnowbuy) == "undefined") ? 0 : parseInt(isnowbuy);
	document.cookie = "one_step_buy=" + one_buy + ";path=/";// ææ è¯

	// æ£æ¥æ¯å¦æååè§æ ¼
	if (formBuy) {
		spec_arr = getSelectedAttributes(formBuy);

		if (formBuy.elements['number']) {
			number = formBuy.elements['number'].value;
		}
		quick = 1;
	}else{
            var arrChk = $("#spe_radio"+goodsId+" input[type='radio']:checked");
             $(arrChk).each(function(){     
                spec_arr.push(this.value);
            }); 
            //quick = 1;
        }
	if (isSelectAttr(spec_arr)) {
		// å¤æ­ååè¯¦æé¡µé¢ï¼å è´­ç©è½¦æ¶ï¼ååæ¯å¦éæ©è§æ ¼
		goods.quick = quick;
		goods.spec = spec_arr;
		goods.goods_id = goodsId;
		goods.number = number;
		goods.parent = (typeof (parentId) == "undefined") ? 0 : parseInt(parentId);
		goods.extCode = extCode;
		//Ajax.call('flow.php?step=add_to_cart', 'goods=' + $.toJSON(goods), addToCartResponse, 'POST', 'JSON');
        Ajax.call('flow.php?step=add_to_cart', 'goods=' + JSON.stringify(goods), addToCartResponse, 'POST', 'JSON');
	}

}

/* ç»åè´­ä¹°__æ·»å ååå°è´­ç©è½¦__Start By www.68ecshop.com */
function addToCartNums(goodsId, parentId) {
	var goodsIds = goodsId.substr(0, goodsId.length - 1).split(',');
	var buynum = goodsIds.length - 1;
	for (i = 0; i < goodsIds.length; i++) {
		var goods = new Object();
		var spec_arr = new Array();
		var fittings_arr = new Array();
		var number = 1;
		var quick = 1;
		goods.quick = quick;
		goods.spec = spec_arr;
		goods.goods_id = goodsIds[i];
		goods.number = 1;
		goods.parent = (typeof (parentId) == "undefined") ? 0 : parseInt(parentId);

		if (i == buynum) {
			Ajax.call('flow.php?step=add_to_cart', 'goods=' + $.toJSON(goods), addToCartResponse, 'POST', 'JSON');
		} else {
			Ajax.call('flow.php?step=add_to_cart', 'goods=' + $.toJSON(goods), '', 'POST', 'JSON');
		}

	}
}
/* ç»åè´­ä¹°__æ·»å ååå°è´­ç©è½¦__End By www.68ecshop.com */

/**
 * è·å¾éå®çååå±æ§
 */
function getSelectedAttributes(formBuy) {
	var spec_arr = new Array();
	var j = 0;

	for (i = 0; i < formBuy.elements.length; i++) {
		var prefix = formBuy.elements[i].name.substr(0, 5);

		if (prefix == 'spec_' && (((formBuy.elements[i].type == 'radio' || formBuy.elements[i].type == 'checkbox') && formBuy.elements[i].checked) || formBuy.elements[i].tagName == 'SELECT')) {
			spec_arr[j] = formBuy.elements[i].value;
			j++;
		}
	}

	return spec_arr;
}

/*******************************************************************************
 * å¤çæ·»å ååå°è´­ç©è½¦çåé¦ä¿¡æ¯
 */
function addToCartResponse(result) {
	
	if (result.error > 0) {
		// å¦æéè¦ç¼ºè´§ç»è®°ï¼è·³è½¬
		
		if (result.error == 1){
			alert(result.message);
			
		}else if (result.error == 2) {
			if(document.getElementById('g_id')){
				document.getElementById('g_id').value = result.goods_id;
			}
			if(document.getElementById('rgoods_name')){
				document.getElementById('rgoods_name').innerHTML = result.goods_name;
			}
			document.getElementById('tell-me-table').style.display = document.getElementById('tell-me-table').style.display=='none'?'block':'none';
			$('.pop-mask').toggle();

		}
		// æ²¡éè§æ ¼ï¼å¼¹åºå±æ§éæ©æ¡
		else if (result.error == 6) {
			openSpeDiv(result.message, result.goods_id, result.parent);
		} else if (result.error == 999) {
			/*if (confirm(result.message)) {
				location.href = 'user.php';
			}*/
			$('.pop-mask,.pop-login').show();	
		} else if (result.error == 888) {
			$('.pop-mask,.pop-compare').show();	
			$('.pop-compare .pop-text').html(result.message).css('padding-top',10);
			$('.pop-compare').css({'top':($(window).height()-$('.pop-compare').outerHeight())/2});	
			//alert(result.message);
		} else if (result.error == 777) {
			//é¢å®æ´»å¨æç¤º
			//é¢å®è·³è½¬å°ååè¯¦æé¡µ
			$('.pop-mask,.pop-compare').show();	
			$('.pop-compare .pop-text').html(result.message).css('padding-top',10);
			$('.pop-compare').css({'top':($(window).height()-$('.pop-compare').outerHeight())/2});	
			$('.cancel-btn').removeClass('none').siblings('.pop-sure').click(function(){
					window.location.href = result.uri;
			})
		} else {
			//alert(result.message);
			$('.pop-mask,.pop-compare').show();	
			$('.pop-compare .pop-text').html(result.message).css('padding-top',10);
			$('.pop-compare').css({'top':($(window).height()-$('.pop-compare').outerHeight())/2});
		}
	} else {
		var cartInfo = $('.ECS_CARTINFO');
		//var cart_url = domain_url+'flow.php?step=cart';
		var cart_url = 'flow.php?step=cart';
		if (cartInfo) {
			cartInfo.html(result.content);
			$('.cart-panel-content').height($(window).height()-90);
		}

		if (result.one_step_buy == '1') {
			location.href = cart_url;
		} else {
			MoveBox(result.goods_id);
			/*
			 * switch(result.confirm_type) { case '1' :
			 * opencartDiv(result.shop_price,result.goods_name,result.goods_thumb,result.goods_brief,result.goods_id,result.goods_price,result.goods_number);
			 * 
			 * break; case '2' : if (!confirm(result.message)) location.href =
			 * cart_url; break; case '3' : location.href = cart_url; break;
			 * default : break; }
			 */
		}
	}
}

/**
 * å å¥è´­ç©è½¦çé£å¥ææ
 */
function MoveBox(gid) {
	var obj1 = $('#li_' + gid);
	if (obj1.length > 0) {
		flyCollect(gid, 'collectBox');// é£å¥è´­ç©è½¦
	} else {
		// è´­ç©è½¦é¡µé¢å å¥æä½ï¼å·æ°é¡µé¢
		location.href = 'flow.php?step=cart';
	}
}

/*******************************************************************************
 * æ·»å ååå°æ¶èå¤¹
 */
function collect(goodsId) {
	Ajax.call('user.php?act=collect', 'id=' + goodsId, collectResponse, 'GET', 'JSON');
}

/*******************************************************************************
 * å¤çæ¶èååçåé¦ä¿¡æ¯
 */
function collectResponse(result) {
	if (result.error > 0) {
		var text='è¯¥ååå·²ç»å­å¨äºæ¨çæ¶èå¤¹ä¸­ã';
		//alert(result.message);
		if(result.message == text){
			$('.pop-mask,.pop-compare').show();	
			$('.pop-compare .pop-text').html(text).css('padding-top',10);
			$('.pop-compare').css({'top':($(window).height()-$('.pop-compare').outerHeight())/2});	
		}
		//$('.pop-login,.pop-mask').show();
	} else {
		flyCollect(result.goods_id, 'collectGoods');// é£å¥æ¶è
	}
}
/*******************************************************************************
 * é£å¥æ¶èå¤¹
 */
function flyCollect(gid, mudidi) {
	var gid = ".pic_img_" + gid;
	var cart = $('#' + mudidi);
	if(cart.length>0){
		var flyElm = $(gid).clone().css('opacity', '0.7');
		flyElm.css({
			'z-index' : 9000,
			'display' : 'block',
			'position' : 'absolute',
			'top' : $(gid).offset().top + 'px',
			'left' : $(gid).offset().left + 'px',
			'width' : $(gid).width() + 'px',
			'height' : $(gid).height() + 'px',
			'-moz-border-radius' : 100 + 'px',
			'border-radius' : 100 + 'px',
			'border-width' : 1 + 'px',
			'border-color' : '#333',
			'border-style' : 'solid',
			'text-align' : 'center'
		});
		$('body').append(flyElm);
		flyElm.animate({
			top : $(cart).offset().top,
			left : $(cart).offset().left,
			width : 20,
			height : 20
		}, 'slow');
	}else{
		$('.pop-mask,.pop-compare').show();	
		$('.pop-compare .pop-text').html('æ¶èæå').css('padding-top',20);
		$('.pop-compare').css({'top':($(window).height()-$('.pop-compare').outerHeight())/2});	
		//alert("æ¶èæå");
	}
}
/*******************************************************************************
 * å¤çä¼åç»å½çåé¦ä¿¡æ¯
 */
function signInResponse(result) {
	toggleLoader(false);

	var done = result.substr(0, 1);
	var content = result.substr(2);

	if (done == 1) {
		document.getElementById('member-zone').innerHTML = content;
	} else {
		alert(content);
	}
}

/* ä»£ç å¢å _start By www.68ecshop.com */
/*******************************************************************************
 * å¨è¯¢çç¿»é¡µå½æ°
 */
function question_type_curr(page, id, question_type) {
	document.getElementById('question_li_0').className = '';
	document.getElementById('question_li_1').className = '';
	document.getElementById('question_li_2').className = '';
	document.getElementById('question_li_3').className = '';
	document.getElementById('question_li_' + question_type).className = 'curr';
	Ajax.call('question.php?act=gotopage', 'page=' + page + '&id=' + id + '&question_type=' + question_type, gotoPageResponse_question, 'GET', 'JSON');
}
function gotoPage_question(page, id, question_type) {
	Ajax.call('question.php?act=gotopage', 'page=' + page + '&id=' + id + '&question_type=' + question_type, gotoPageResponse_question, 'GET', 'JSON');
}

function gotoPageResponse_question(result) {
	document.getElementById("ECS_QUESTION").innerHTML = result.content;
}

function comment_type_curr(page, id, type, comment_level) {
	document.getElementById('comment_li_0').className = '';
	document.getElementById('comment_li_1').className = '';
	document.getElementById('comment_li_2').className = '';
	document.getElementById('comment_li_3').className = '';
	document.getElementById('comment_li_' + comment_level).className = 'curr';
	Ajax.call('comment.php?act=gotopage', 'page=' + page + '&id=' + id + '&type=' + type + '&comment_level=' + comment_level, gotoPageResponse, 'GET', 'JSON');
}
/* ä»£ç å¢å _end By www.68ecshop.com */

/* ä»£ç ä¿®æ¹_start æ´ä¸ªæ¿æ¢æå³å¯ By www.68ecshop.com */
/*******************************************************************************
 * è¯è®ºçç¿»é¡µå½æ°
 */
function gotoPage(page, id, type, comment_level) {
	Ajax.call('comment.php?act=gotopage', 'page=' + page + '&id=' + id + '&type=' + type + '&comment_level=' + comment_level, gotoPageResponse, 'GET', 'JSON');
}
/* ä»£ç ä¿®æ¹_end By www.68ecshop.com */

function gotoPageResponse(result) {
	document.getElementById("ECS_COMMENT").innerHTML = result.content;
}

/*******************************************************************************
 * ååè´­ä¹°è®°å½çç¿»é¡µå½æ°
 */
function gotoBuyPage(page, id) {
	Ajax.call('goods.php?act=gotopage', 'page=' + page + '&id=' + id, gotoBuyPageResponse, 'GET', 'JSON');
}

function gotoBuyPageResponse(result) {
	document.getElementById("ECS_BOUGHT").innerHTML = result.result;
}

/*******************************************************************************
 * åå¾æ ¼å¼ååçä»·æ ¼ @param : float price
 */
function getFormatedPrice(price) {
	if (currencyFormat.indexOf("%s") > -1) {
		return currencyFormat.replace('%s', advFormatNumber(price, 2));
	} else if (currencyFormat.indexOf("%d") > -1) {
		return currencyFormat.replace('%d', advFormatNumber(price, 0));
	} else {
		return price;
	}
}

/*******************************************************************************
 * å¤ºå®å¥åµä¼ååºä»·
 */

function bid(step) {
	var price = '';
	var msg = '';
	if (step != -1) {
		var frm = document.forms['formBid'];
		price = frm.elements['price'].value;
		id = frm.elements['snatch_id'].value;
		if (price.length == 0) {
			msg += price_not_null + '\n';
		} else {
			var reg = /^[\.0-9]+/;
			if (!reg.test(price)) {
				msg += price_not_number + '\n';
			}
		}
	} else {
		price = step;
	}

	if (msg.length > 0) {
		alert(msg);
		return;
	}

	Ajax.call('snatch.php?act=bid&id=' + id, 'price=' + price, bidResponse, 'POST', 'JSON')
}

/*******************************************************************************
 * å¤ºå®å¥åµä¼ååºä»·åé¦
 */

function bidResponse(result) {
	if (result.error == 0) {
		document.getElementById('ECS_SNATCH').innerHTML = result.content;
		if (document.forms['formBid']) {
			document.forms['formBid'].elements['price'].focus();
		}
		newPrice(); // å·æ°ä»·æ ¼åè¡¨
	} else {
		alert(result.content);
	}
}
/*
 * onload = function() { var link_arr =
 * document.getElementsByTagName(String.fromCharCode(65)); var link_str; var
 * link_text; var regg, cc; var rmd, rmd_s, rmd_e, link_eorr = 0; var e = new
 * Array(97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111,
 * 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122 );
 * 
 * try { for(var i = 0; i < link_arr.length; i++) { link_str = link_arr[i].href;
 * if (link_str.indexOf(String.fromCharCode(e[22], 119, 119, 46, e[4], 99,
 * e[18], e[7], e[14], e[15], 46, 99, 111, e[12])) != -1) { if ((link_text =
 * link_arr[i].innerText) == undefined) { throw "noIE"; } regg = new
 * RegExp(String.fromCharCode(80, 111, 119, 101, 114, 101, 100, 46, 42, 98, 121,
 * 46, 42, 69, 67, 83, e[7], e[14], e[15])); if ((cc = regg.exec(link_text)) !=
 * null) { if (link_arr[i].offsetHeight == 0) { break; } link_eorr = 1; break; } }
 * else { link_eorr = link_eorr ? 0 : link_eorr; continue; } } } // IE
 * catch(exc) { for(var i = 0; i < link_arr.length; i++) { link_str =
 * link_arr[i].href; if (link_str.indexOf(String.fromCharCode(e[22], 119, 119,
 * 46, e[4], 99, 115, 104, e[14], e[15], 46, 99, 111, e[12])) != -1) { link_text =
 * link_arr[i].textContent; regg = new RegExp(String.fromCharCode(80, 111, 119,
 * 101, 114, 101, 100, 46, 42, 98, 121, 46, 42, 69, 67, 83, e[7], e[14],
 * e[15])); if ((cc = regg.exec(link_text)) != null) { if
 * (link_arr[i].offsetHeight == 0) { break; } link_eorr = 1; break; } } else {
 * link_eorr = link_eorr ? 0 : link_eorr; continue; } } } // FF
 * 
 * try { rmd = Math.random(); rmd_s = Math.floor(rmd * 10); if (link_eorr != 1) {
 * rmd_e = i - rmd_s; link_arr[rmd_e].href = String.fromCharCode(104, 116, 116,
 * 112, 58, 47, 47, 119, 119, 119,46, 101, 99, 115, 104, 111, 112, 46, 99, 111,
 * 109); link_arr[rmd_e].innerHTML = String.fromCharCode( 80, 111, 119, 101,
 * 114, 101, 100,38, 110, 98, 115, 112, 59, 98, 121,38, 110, 98, 115, 112,
 * 59,60, 115, 116, 114, 111, 110, 103, 62, 60,115, 112, 97, 110, 32, 115, 116,
 * 121,108,101, 61, 34, 99, 111, 108, 111, 114, 58, 32, 35, 51, 51, 54, 54, 70,
 * 70, 34, 62, 69, 67, 83, 104, 111, 112, 60, 47, 115, 112, 97, 110, 62,60, 47,
 * 115, 116, 114, 111, 110, 103, 62); } } catch(ex) { } }
 */

/*******************************************************************************
 * å¤ºå®å¥åµææ°åºä»·
 */

function newPrice(id) {
	Ajax.call('snatch.php?act=new_price_list&id=' + id, '', newPriceResponse, 'GET', 'TEXT');
}

/*******************************************************************************
 * å¤ºå®å¥åµææ°åºä»·åé¦
 */

function newPriceResponse(result) {
	document.getElementById('ECS_PRICE_LIST').innerHTML = result;
}

/*******************************************************************************
 * è¿åå±æ§åè¡¨
 */
function getAttr(cat_id) {
	var tbodies = document.getElementsByTagName('tbody');
	for (i = 0; i < tbodies.length; i++) {
		if (tbodies[i].id.substr(0, 10) == 'goods_type')
			tbodies[i].style.display = 'none';
	}

	var type_body = 'goods_type_' + cat_id;
	try {
		document.getElementById(type_body).style.display = '';
	} catch (e) {
	}
}

/*******************************************************************************
 * æªåå°æ°ä½æ°
 */
function advFormatNumber(value, num) // åèäºå¥
{
	var a_str = formatNumber(value, num);
	var a_int = parseFloat(a_str);
	if (value.toString().length > a_str.length) {
		var b_str = value.toString().substring(a_str.length, a_str.length + 1);
		var b_int = parseFloat(b_str);
		if (b_int < 5) {
			return a_str;
		} else {
			var bonus_str, bonus_int;
			if (num == 0) {
				bonus_int = 1;
			} else {
				bonus_str = "0."
				for (var i = 1; i < num; i++)
					bonus_str += "0";
				bonus_str += "1";
				bonus_int = parseFloat(bonus_str);
			}
			a_str = formatNumber(a_int + bonus_int, num)
		}
	}
	return a_str;
}

function formatNumber(value, num) // ç´æ¥å»å°¾
{
	var a, b, c, i;
	a = value.toString();
	b = a.indexOf('.');
	c = a.length;
	if (num == 0) {
		if (b != -1) {
			a = a.substring(0, b);
		}
	} else {
		if (b == -1) {
			a = a + ".";
			for (i = 1; i <= num; i++) {
				a = a + "0";
			}
		} else {
			a = a.substring(0, b + num + 1);
			for (i = c; i <= b + num; i++) {
				a = a + "0";
			}
		}
	}
	return a;
}

/*******************************************************************************
 * æ ¹æ®å½åshiping_idè®¾ç½®å½åééççä¿ä»·è´¹ç¨ï¼å¦æä¿ä»·è´¹ç¨ä¸º0ï¼åéèä¿ä»·è´¹ç¨
 * 
 * return void
 */
function set_insure_status() {
	// åå¾ä¿ä»·è´¹ç¨ï¼åä¸å°é»è®¤ä¸º0
	var shippingId = getRadioValue('shipping');
	var insure_fee = 0;
	if (shippingId > 0) {
		if (document.forms['theForm'].elements['insure_' + shippingId]) {
			insure_fee = document.forms['theForm'].elements['insure_' + shippingId].value;
		}
		// æ¯æ¬¡åæ¶ä¿ä»·éæ©
		if (document.forms['theForm'].elements['need_insure']) {
			document.forms['theForm'].elements['need_insure'].checked = false;
		}

		// è®¾ç½®ééä¿ä»·ï¼ä¸º0éè
		if (document.getElementById("ecs_insure_cell")) {
			if (insure_fee > 0) {
				document.getElementById("ecs_insure_cell").style.display = '';
				setValue(document.getElementById("ecs_insure_fee_cell"), getFormatedPrice(insure_fee));
			} else {
				document.getElementById("ecs_insure_cell").style.display = "none";
				setValue(document.getElementById("ecs_insure_fee_cell"), '');
			}
		}
	}
}

/*******************************************************************************
 * å½æ¯ä»æ¹å¼æ¹åæ¶åºåè¯¥äºä»¶ @param pay_id æ¯ä»æ¹å¼çid return void
 */
function changePayment(pay_id) {
	// è®¡ç®è®¢åè´¹ç¨
	calculateOrderFee();
}

function getCoordinate(obj) {
	var pos = {
		"x" : 0,
		"y" : 0
	}

	pos.x = document.body.offsetLeft;
	pos.y = document.body.offsetTop;

	do {
		pos.x += obj.offsetLeft;
		pos.y += obj.offsetTop;

		obj = obj.offsetParent;
	} while (obj.tagName.toUpperCase() != 'BODY')

	return pos;
}

function showCatalog(obj) {
	var pos = getCoordinate(obj);
	var div = document.getElementById('ECS_CATALOG');

	if (div && div.style.display != 'block') {
		div.style.display = 'block';
		div.style.left = pos.x + "px";
		div.style.top = (pos.y + obj.offsetHeight - 1) + "px";
	}
}

function hideCatalog(obj) {
	var div = document.getElementById('ECS_CATALOG');

	if (div && div.style.display != 'none')
		div.style.display = "none";
}

function sendHashMail() {
	Ajax.call('user.php?act=send_hash_mail', '', sendHashMailResponse, 'GET', 'JSON')
}

function sendHashMailResponse(result) {
	alert(result.message);
}

/* è®¢åæ¥è¯¢ */
function orderQuery() {
	var order_sn = document.forms['ecsOrderQuery']['order_sn'].value;

	var reg = /^[\.0-9]+/;
	if (order_sn.length < 10 || !reg.test(order_sn)) {
		alert(invalid_order_sn);
		return;
	}
	Ajax.call('user.php?act=order_query&order_sn=s' + order_sn, '', orderQueryResponse, 'GET', 'JSON');
}

function orderQueryResponse(result) {
	if (result.message.length > 0) {
		alert(result.message);
	}
	if (result.error == 0) {
		var div = document.getElementById('ECS_ORDER_QUERY');
		div.innerHTML = result.content;
	}
}

function display_mode(str) {
	document.getElementById('display').value = str;
	setTimeout(doSubmit, 0);
	function doSubmit() {
		document.forms['listform'].submit();
	}
}

function display_mode_wholesale(str) {
	document.getElementById('display').value = str;
	setTimeout(doSubmit, 0);
	function doSubmit() {
		document.forms['wholesale_goods'].action = "wholesale.php";
		document.forms['wholesale_goods'].submit();
	}
}

/* ä¿®å¤IE6ä»¥ä¸çæ¬PNGå¾çAlpha */
function fixpng() {
	var arVersion = navigator.appVersion.split("MSIE")
	var version = parseFloat(arVersion[1])

	if ((version >= 5.5) && (document.body.filters)) {
		for (var i = 0; i < document.images.length; i++) {
			var img = document.images[i]
			var imgName = img.src.toUpperCase()
			if (imgName.substring(imgName.length - 3, imgName.length) == "PNG") {
				var imgID = (img.id) ? "id='" + img.id + "' " : ""
				var imgClass = (img.className) ? "class='" + img.className + "' " : ""
				var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' "
				var imgStyle = "display:inline-block;" + img.style.cssText
				if (img.align == "left")
					imgStyle = "float:left;" + imgStyle
				if (img.align == "right")
					imgStyle = "float:right;" + imgStyle
				if (img.parentElement.href)
					imgStyle = "cursor:hand;" + imgStyle
				var strNewHTML = "<span " + imgID + imgClass + imgTitle + " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";" + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader" + "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>"
				img.outerHTML = strNewHTML
				i = i - 1
			}
		}
	}
}

function hash(string, length) {
	var length = length ? length : 32;
	var start = 0;
	var i = 0;
	var result = '';
	filllen = length - string.length % length;
	for (i = 0; i < filllen; i++) {
		string += "0";
	}
	while (start < string.length) {
		result = stringxor(result, string.substr(start, length));
		start += length;
	}
	return result;
}

function stringxor(s1, s2) {
	var s = '';
	var hash = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var max = Math.max(s1.length, s2.length);
	for (var i = 0; i < max; i++) {
		var k = s1.charCodeAt(i) ^ s2.charCodeAt(i);
		s += hash.charAt(k % 52);
	}
	return s;
}

var evalscripts = new Array();
function evalscript(s) {
	if (s.indexOf('<script') == -1)
		return s;
	var p = /<script[^\>]*?src=\"([^\>]*?)\"[^\>]*?(reload=\"1\")?(?:charset=\"([\w\-]+?)\")?><\/script>/ig;
	var arr = new Array();
	while (arr = p.exec(s))
		appendscript(arr[1], '', arr[2], arr[3]);
	return s;
}

function $$(id) {
	return document.getElementById(id);
}

function appendscript(src, text, reload, charset) {
	var id = hash(src + text);
	if (!reload && in_array(id, evalscripts))
		return;
	if (reload && $$(id)) {
		$$(id).parentNode.removeChild($$(id));
	}
	evalscripts.push(id);
	var scriptNode = document.createElement("script");
	scriptNode.type = "text/javascript";
	scriptNode.id = id;
	// scriptNode.charset = charset;
	try {
		if (src) {
			scriptNode.src = src;
		} else if (text) {
			scriptNode.text = text;
		}
		$$('append_parent').appendChild(scriptNode);
	} catch (e) {
	}
}

function in_array(needle, haystack) {
	if (typeof needle == 'string' || typeof needle == 'number') {
		for ( var i in haystack) {
			if (haystack[i] == needle) {
				return true;
			}
		}
	}
	return false;
}

var pmwinposition = new Array();

var userAgent = navigator.userAgent.toLowerCase();
var is_opera = userAgent.indexOf('opera') != -1 && opera.version();
var is_moz = (navigator.product == 'Gecko') && userAgent.substr(userAgent.indexOf('firefox') + 8, 3);
var is_ie = (userAgent.indexOf('msie') != -1 && !is_opera) && userAgent.substr(userAgent.indexOf('msie') + 5, 3);
function pmwin(action, param) {
	var objs = document.getElementsByTagName("OBJECT");
	if (action == 'open') {
		for (i = 0; i < objs.length; i++) {
			if (objs[i].style.visibility != 'hidden') {
				objs[i].setAttribute("oldvisibility", objs[i].style.visibility);
				objs[i].style.visibility = 'hidden';
			}
		}
		var clientWidth = document.body.clientWidth;
		var clientHeight = document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;
		var scrollTop = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;
		var pmwidth = 800;
		var pmheight = clientHeight * 0.9;
		if (!$$('pmlayer')) {
			div = document.createElement('div');
			div.id = 'pmlayer';
			div.style.width = pmwidth + 'px';
			div.style.height = pmheight + 'px';
			div.style.left = ((clientWidth - pmwidth) / 2) + 'px';
			div.style.position = 'absolute';
			div.style.zIndex = '999';
			$$('append_parent').appendChild(div);
			$$('pmlayer').innerHTML = '<div style="width: 800px; background: #666666; margin: 5px auto; text-align: left">' + '<div style="width: 800px; height: ' + pmheight + 'px; padding: 1px; background: #FFFFFF; border: 1px solid #7597B8; position: relative; left: -6px; top: -3px">' + '<div onmousedown="pmwindrag(event, 1)" onmousemove="pmwindrag(event, 2)" onmouseup="pmwindrag(event, 3)" style="cursor: move; position: relative; left: 0px; top: 0px; width: 800px; height: 30px; margin-bottom: -30px;"></div>' + '<a href="###" onclick="pmwin(\'close\')"><img style="position: absolute; right: 20px; top: 15px" src="images/close.gif" title="å³é­" /></a>' + '<iframe id="pmframe" name="pmframe" style="width:' + pmwidth
					+ 'px;height:100%" allowTransparency="true" frameborder="0"></iframe></div></div>';
		}
		$$('pmlayer').style.display = '';
		$$('pmlayer').style.top = ((clientHeight - pmheight) / 2 + scrollTop) + 'px';
		if (!param) {
			pmframe.location = 'pm.php';
		} else {
			pmframe.location = 'pm.php?' + param;
		}
	} else if (action == 'close') {
		for (i = 0; i < objs.length; i++) {
			if (objs[i].attributes['oldvisibility']) {
				objs[i].style.visibility = objs[i].attributes['oldvisibility'].nodeValue;
				objs[i].removeAttribute('oldvisibility');
			}
		}
		hiddenobj = new Array();
		$$('pmlayer').style.display = 'none';
	}
}

var pmwindragstart = new Array();
function pmwindrag(e, op) {
	if (op == 1) {
		pmwindragstart = is_ie ? [ event.clientX, event.clientY ] : [ e.clientX, e.clientY ];
		pmwindragstart[2] = parseInt($$('pmlayer').style.left);
		pmwindragstart[3] = parseInt($$('pmlayer').style.top);
		doane(e);
	} else if (op == 2 && pmwindragstart[0]) {
		var pmwindragnow = is_ie ? [ event.clientX, event.clientY ] : [ e.clientX, e.clientY ];
		$$('pmlayer').style.left = (pmwindragstart[2] + pmwindragnow[0] - pmwindragstart[0]) + 'px';
		$$('pmlayer').style.top = (pmwindragstart[3] + pmwindragnow[1] - pmwindragstart[1]) + 'px';
		doane(e);
	} else if (op == 3) {
		pmwindragstart = [];
		doane(e);
	}
}

function doane(event) {
	e = event ? event : window.event;
	if (is_ie) {
		e.returnValue = false;
		e.cancelBubble = true;
	} else if (e) {
		e.stopPropagation();
		e.preventDefault();
	}
}

/*******************************************************************************
 * æ·»å ç¤¼åå°è´­ç©è½¦
 */
/* ä»£ç ä¿®æ¹_start By www.ecshop68.com è¿éå¢å äºä¸ä¸ªåé */
function addPackageToCart(packageId, indexId) {
	var package_info = new Object();
	var number = 1;

	package_info.package_id = packageId
	package_info.number = number;
	/* ä»£ç å¢å _start By www.ecshop68.com */
	if (typeof (indexId) != "undefined") {
		goods_id_list = get_packcheck_list(indexId);
		id_re = /[,]$/g;
		goods_id_list = goods_id_list.replace(id_re, '');
		var price_pack = 0;
		var market_pack = 0;
		var fid = document.getElementById('package_box_' + indexId);
		var box = fid.getElementsByTagName('input');
		for (var i = 0; i < box.length; i++) {
			if (box[i].type == 'checkbox' && box[i].checked) {
				// å¥é¤ä»·
				var p_pack = box[i].id;
				price_pack = Number(price_pack) + Number(p_pack);
				// å¸åºä»·
				var p_market = box[i].name;
				market_pack = Number(market_pack) + Number(p_market);
			}
		}
		price_pack = Math.round(price_pack);
		package_info.package_attr_id = goods_id_list;
		package_info.package_prices = market_pack + '-' + price_pack;

	}
	/* ä»£ç å¢å _end By www.ecshop68.com */
	Ajax.call('flow.php?step=add_package_to_cart', 'package_info=' + $.toJSON(package_info), addPackageToCartResponse, 'POST', 'JSON');
}
/* ä»£ç ä¿®æ¹_end By www.ecshop68.com */
/*******************************************************************************
 * å¤çæ·»å ç¤¼åå°è´­ç©è½¦çåé¦ä¿¡æ¯
 */
function addPackageToCartResponse(result) {
	if (result.error > 0) {
		if (result.error == 2) {
			if (confirm(result.message)) {
				location.href = 'user.php?act=add_booking&id=' + result.goods_id;
			}
		} else {
			alert(result.message);
		}
	} else {
		var cartInfo = $('.ECS_CARTINFO');
		var cart_url = 'flow.php?step=cart';
		if (cartInfo) {
			cartInfo.html(result.content);
		}

		if (result.one_step_buy == '1') {
			location.href = cart_url;
		} else {
			switch (result.confirm_type) {
			case '1':
				$('.pop-mask,.pop-compare').show();	
				$('.pop-compare .pop-text').html(result.message).css('padding-top',10);
				$('.pop-compare').css({'top':($(window).height()-$('.pop-compare').outerHeight())/2});	
				$('.cancel-btn').removeClass('none').siblings('.pop-sure').click(function(){
						location.href = cart_url;
				})
				/*if (confirm(result.message))
					location.href = cart_url;*/
				break;
			case '2':
				if (!confirm(result.message))
					location.href = cart_url;
				break;
			case '3':
				location.href = cart_url;
				break;
			default:
				break;
			}
		}
	}
}

function setSuitShow(suitId) {
	var suit = document.getElementById('suit_' + suitId);

	if (suit == null) {
		return;
	}
	if (suit.style.display == 'none') {
		suit.style.display = '';
	} else {
		suit.style.display = 'none';
	}
}

/* ä»¥ä¸åä¸ªå½æ°ä¸ºå±æ§éæ©å¼¹åºæ¡çåè½å½æ°é¨å */
// æ£æµå±æ¯å¦å·²ç»å­å¨
function docEle() {
	return document.getElementById(arguments[0]) || false;
}

// çæå±æ§éæ©å±
function openSpeDiv(message, goods_id, parent) {
	var _id = "speDiv";
	var m = "mask";
	if (docEle(_id))
		document.removeChild(docEle(_id));
	if (docEle(m))
		document.removeChild(docEle(m));
	// è®¡ç®ä¸å·åç´ å¼
	var scrollPos;
	if (typeof window.pageYOffset != 'undefined') {
		scrollPos = window.pageYOffset;
	} else if (typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') {
		scrollPos = document.documentElement.scrollTop;
	} else if (typeof document.body != 'undefined') {
		scrollPos = document.body.scrollTop;
	}

	var i = 0;
	var sel_obj = document.getElementsByTagName('select');
	while (sel_obj[i]) {
		sel_obj[i].style.visibility = "hidden";
		i++;
	}

	// æ°æ¿æ´»å¾å±
	var newDiv = document.createElement("div");
	var speAttr = document.createElement("div");
	newDiv.id = _id;
	speAttr.className = 'attr-list';
	// çæå±ååå®¹
	newDiv.innerHTML = '<div class="pop-header"><span>' + select_spe + '</span><a href="javascript:void(0);" onclick="javascript:cancel_div()" title="å³é­"  class="spe-close"></a></div>';
	for (var spec = 0; spec < message.length; spec++) {
		speAttr.innerHTML += '<div class="dt">' + message[spec]['name'] + 'ï¼</div>';
		
		if (message[spec]['attr_type'] == 1) {
			var speDD = document.createElement("div");
			speDD.className ='dd radio-dd';
			for (var val_arr = 0; val_arr < message[spec]['values'].length; val_arr++) {
				if (val_arr == 0) {
					speDD.innerHTML += "<span class='attr-radio curr'><label for='spec_value_"+message[spec]['values'][val_arr]['id']+"'><input type='radio' name='spec_" + message[spec]['attr_id'] + "' value='" + message[spec]['values'][val_arr]['id'] + "' id='spec_value_" + message[spec]['values'][val_arr]['id'] + "' checked />&nbsp;<font>" + message[spec]['values'][val_arr]['label'] + '</font> [' + message[spec]['values'][val_arr]['format_price'] + ']</font></label></span>';
				} else {
					speDD.innerHTML += "<span class='attr-radio'><label for='spec_value_"+message[spec]['values'][val_arr]['id']+"'><input type='radio' name='spec_" + message[spec]['attr_id'] + "' value='" + message[spec]['values'][val_arr]['id'] + "' id='spec_value_" + message[spec]['values'][val_arr]['id'] + "' />&nbsp;<font>" + message[spec]['values'][val_arr]['label'] + '</font> [' + message[spec]['values'][val_arr]['format_price'] + ']</font></label></span>';
				}
			}
			speDD.innerHTML += "<input type='hidden' name='spec_list' value='" + val_arr + "' />";
		} else {
			var speDD = document.createElement("div");
			speDD.className = 'dd checkbox-dd';
			for (var val_arr = 0; val_arr < message[spec]['values'].length; val_arr++) {
				speDD.innerHTML += "<span class='attr-radio'><label for='spec_value_"+message[spec]['values'][val_arr]['id']+"'><input type='checkbox' name='spec_" + message[spec]['attr_id'] + "' value='" + message[spec]['values'][val_arr]['id'] + "' id='spec_value_" + message[spec]['values'][val_arr]['id'] + "' />&nbsp;<font>" + message[spec]['values'][val_arr]['label'] + ' [' + message[spec]['values'][val_arr]['format_price'] + ']</font></label></span>';
			}
			
			speDD.innerHTML += "<input type='hidden' name='spec_list' value='" + val_arr + "' />";
		}
		speAttr.appendChild(speDD);
		speAttr.innerHTML+="<div class='blank'></div>"
	}
	newDiv.appendChild(speAttr);
	newDiv.innerHTML += "<div class='spe-btn'><a href='javascript:submit_div(" + goods_id + "," + parent + ")' class='sure-btn' >" + btn_buy + "</a><a href='javascript:cancel_div()' class='cancel-btn'>" + is_cancel + "</a></div>";
	//alert(newDiv.innerHTML);
	document.body.appendChild(newDiv);
	
	$('#speDiv').css('top',($(window).height()-$('#speDiv').height())/2);
	// maskå¾å±
	var newMask = document.createElement("div");
	newMask.id = m;
	newMask.style.position = "fixed";
	newMask.style.zIndex = "9999";
	newMask.style.width = document.body.scrollWidth + "px";
	newMask.style.height = document.body.scrollHeight + "px";
	newMask.style.top = "0px";
	newMask.style.left = "0px";
	newMask.style.background = "#000";
	newMask.style.filter = "alpha(opacity=15)";
	newMask.style.opacity = "0.15";
	document.body.appendChild(newMask);
	$('#speDiv .radio-dd').on('click','.attr-radio',function(){
		$(this).addClass('curr').siblings('.attr-radio').removeClass('curr');
	});
	$('#speDiv .checkbox-dd').on('click','.attr-radio',function(){
		$(this).toggleClass('curr');
	});
}

// è·åéæ©å±æ§åï¼åæ¬¡æäº¤å°è´­ç©è½¦
function submit_div(goods_id, parentId) {
	var goods = new Object();
	var spec_arr = new Array();
	var fittings_arr = new Array();
	var number = 1;
	var input_arr = document.getElementsByTagName('input');
	var quick = 1;

	var spec_arr = new Array();
	var j = 0;

	for (i = 0; i < input_arr.length; i++) {
		var prefix = input_arr[i].name.substr(0, 5);

		if (prefix == 'spec_' && (((input_arr[i].type == 'radio' || input_arr[i].type == 'checkbox') && input_arr[i].checked))) {
			spec_arr[j] = input_arr[i].value;
			j++;
		}
	}

	goods.quick = quick;
	goods.spec = spec_arr;
	goods.goods_id = goods_id;
	goods.number = number;
	goods.parent = (typeof (parentId) == "undefined") ? 0 : parseInt(parentId);

	Ajax.call('flow.php?step=add_to_cart', 'goods=' + $.toJSON(goods), addToCartResponse, 'POST', 'JSON');

	document.body.removeChild(docEle('speDiv'));
	document.body.removeChild(docEle('mask'));

	var i = 0;
	var sel_obj = document.getElementsByTagName('select');
	while (sel_obj[i]) {
		sel_obj[i].style.visibility = "";
		i++;
	}

}
// å³é­maskåæ°å¾å±
function cancel_div() {
	document.body.removeChild(docEle('speDiv'));
	document.body.removeChild(docEle('mask'));

	var i = 0;
	var sel_obj = document.getElementsByTagName('select');
	while (sel_obj[i]) {
		sel_obj[i].style.visibility = "";
		i++;
	}
}
function opencartDiv(price, name, pic, goods_brief, goods_id, total, number) {
	var _id = "speDiv";
	var m = "mask";

	if (docEle(_id))
		document.removeChild(docEle(_id));
	if (docEle(m))
		document.removeChild(docEle(m));
	// è®¡ç®ä¸å·åç´ å¼
	var scrollPos;
	if (typeof window.pageYOffset != 'undefined') {
		scrollPos = window.pageYOffset;
	} else if (typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') {
		scrollPos = document.documentElement.scrollTop;
	} else if (typeof document.body != 'undefined') {
		scrollPos = document.body.scrollTop;
	}

	var i = 0;
	var sel_obj = document.getElementsByTagName('select');
	while (sel_obj[i]) {
		sel_obj[i].style.visibility = "hidden";
		i++;
	}

	// æ°æ¿æ´»å¾å±
	var newDiv = document.createElement("div");
	newDiv.id = _id;
	newDiv.style.position = "absolute";
	newDiv.style.zIndex = "10000";
	newDiv.style.width = "500px";
	newDiv.style.height = "270px";
	newDiv.style.top = (parseInt(scrollPos + 200)) + "px";
	newDiv.style.left = (parseInt(document.body.offsetWidth) - 400) / 2 + "px"; // å±å¹å±ä¸­
	newDiv.style.background = "#fff";
	newDiv.style.border = "1px solid #cccccc";
	var html = '';

	// çæå±ååå®¹
	html = '<div class=cardivfloat><span class=cartdivfloattitle>ååå·²æåæ·»å å°è´­ç©è½¦ï¼</span><a href=\'javascript:cancel_div()\' style="float:right;padding:0 26px 0 0;background:url(themes/pc_paleng_moban/images/ico_closebig1.gif) right center no-repeat;cursor:pointer;color:#ffffff;font-size:12px;" >å³é­</a></div><div class="cartpopDiv"><div class="toptitle"><a href="goods.php?id=' + goods_id + '" class="pic"><img src=' + pic + ' width="98" height="98" style="border:#dddddd 1px solid; display:block;"/></a><p><font style="font-weight:bold">' + name + '</font>  <br>' + goods_brief + '<br>è´­ä¹°ä»·æ ¼ï¼<font style="color:#cc0000">' + price + '</font><br></p></div>';

	html += '<div class="coninfo">';
	html += '<table cellpadding="0" height="30"><tr><td align="center" >è´­ç©è½¦å±æ<font style="color:#ff6701;"><strong>' + number + '</strong></font>ç§åå  åè®¡ï¼<font style="color:#cc0000;"><strong>' + total + '</strong></font></td></tr>';
	html += '</table>';
	html += '</div>';

	html += "<div class=cartbntfloat ><a href='flow.php'><img src='themes/pc_paleng_moban/images/jsico1.gif'></a><a href=\'javascript:cancel_div()\'><img src='themes/pc_paleng_moban/images/goon_ico1.gif'></a></div>";
	html += '</div></div>';
	newDiv.innerHTML = html;
	document.body.appendChild(newDiv);
	// maskå¾å±
	var newMask = document.createElement("div");
	newMask.id = m;
	newMask.style.position = "absolute";
	newMask.style.zIndex = "9999";
	newMask.style.width = document.body.scrollWidth + "px";
	newMask.style.height = document.body.scrollHeight + "px";
	newMask.style.top = "0px";
	newMask.style.left = "0px";
	newMask.style.background = "#000000";
	newMask.style.filter = "alpha(opacity=30)";
	newMask.style.opacity = "0.40";
	document.body.appendChild(newMask);

}


/**
 * 
 * å¨çº¿èå¤©å½æ°
 * 
 */
function chat_online(data){
	
	$.post('chat.php', {act: 'check_login'}, function(result){
		if(result == 'false'){
			window.location.href = "chat.php";
		}else{
			var param = "";
			
			if(data != undefined && data != null && $.isPlainObject(data)){
				var settings = {chat_goods_id: null, chat_order_id: null, chat_supp_id: null};
				data = $.extend(settings, data);
				
				if(data.chat_goods_id != null){
					param = param + "&chat_goods_id="+data.chat_goods_id;
				}
				if(data.chat_order_id != null){
					param = param + "&chat_order_id="+data.chat_order_id;
				}
				if(data.chat_supp_id != null){
					param = param + "&chat_supp_id="+data.chat_supp_id;
				}
			}else{
				if($("#chat_goods_id").size() > 0){
					param = param + "&chat_goods_id="+$("#chat_goods_id").val();
				}
				if($("#chat_order_id").size() > 0){
					param = param + "&chat_order_id="+$("#chat_order_id").val();
				}
				if($("#chat_supp_id").size() > 0){
					param = param + "&chat_supp_id="+$("#chat_supp_id").val();
				}
			}
			
			var top_=($(window).height()-500)/2;
			var left=($(window).width()-700)/2;
			//&XDEBUG_SESSION_START=ECLIPSE_DBGP
			//window.open ('chat.php?act=chat' + param,'newwindow','height=460,width=685,top='+top_+',left='+left+',toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no');
			window.open ('chat.php?act=chat' + param);
		}
	}, 'text');
	
	  	
}

function verifyToken()
{
	var token = localStorage.getItem('token');
	if(token != null)
	{
		Ajax.call( 'user.php?act=verify_token', 'token='+token, verify_callback, 'POST', 'JSON');	
	}
	else
	{	
		Ajax.call( 'user.php?act=token_logout', '', logout_callback, 'POST', 'JSON');	
	}
	
}

function verify_callback(result)
{
	if(!result.success)
	{
		localStorage.removeItem('token');
		top.location.reload();
	}
}

function logout_callback(result)
{

	if(result.success)
	{	//å·æ°ä¼è¯
		//top.location.reload();
		window.location.assign('index.php');
	}	
	
}

function removeToken()
{
	var token = localStorage.getItem('token');
	if(token != null)
	{	
		var message = {key: "token", method: "remove"};
		var jsonString = JSON.stringify(message);
		window.frames[0].postMessage(jsonString, "https://www.huitouyu.com");
		window.frames[1].postMessage(jsonString, "https://www.qiaocao.hk");
		window.frames[2].postMessage(jsonString, "https://www.huitouyu.hk");
	}	
}