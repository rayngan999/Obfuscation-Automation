//æ£æ¥ç»æ
var _CHECK_RESULT = {
	// é®ç®±æ£æ¥ç»ææ¯å¦å¯ä»¥æ³¨å
	email: false,
	// ææºæ£æ¥ç»ææ¯å¦å¯ä»¥æ³¨å
	mobile_phone: false
};

/* $Id : user.js 4865 2007-01-31 14:04:10Z paulgao $ */
/* ä»£ç å¢å 2014-12-23 by www.68ecshop.com _star */
function check_username(val) {
	if (val == '') {
		document.getElementById('username_message').innerHTML = 'ç¨æ·åä¸è½ä¸ºç©ºï¼';
	} else if (val.match(/[\u4e00-\u9fa5]/)) {
		document.getElementById('username_message').innerHTML = 'ç¨æ·åä¸è½æä¸­æï¼';
    /* ä»£ç å¢å  By  www.68ecshop.com Start */
    } else if (!val.match(/^[a-zA-Z0-9_]{1,}$/)) {
        document.getElementById('username_message').innerHTML = 'ç¨æ·ååªè½ç±å­æ¯æ°å­ä¸åçº¿ç»æï¼';
    /* ä»£ç å¢å  By  www.68ecshop.com End */
    } else {
		Ajax.call('user.php?act=check_username', 'username=' + val, checkusername_callback, 'GET', 'TEXT', true, true);
	}
}

function checkusername_callback(result) {
	if (result == 0) {
		document.getElementById('username_message').innerHTML = 'å¯ä»¥ä¿®æ¹';
	} else {
		document.getElementById('username_message').innerHTML = 'ç¨æ·åå·²å­å¨ï¼è¯·éæ°è¾å¥ï¼';
	}
}

function identity() {
	var frm = document.forms['formIdentity'];
	var real_name = frm.elements['real_name'].value;
	var card = frm.elements['card'].value;
	var country = frm.elements['country'].value;
	var province = frm.elements['province'].value;
	var city = frm.elements['city'].value;
	var district = frm.elements['district'].value;
	var address = frm.elements['address'].value;
	if (real_name.length == 0) {
		$('form[name=formIdentity]').find('.people-name-notice').html('çå®å§åä¸è½ä¸ºç©º').parents('.required-notice').css('visibility','visible');
		//alert('çå®å§åä¸è½ä¸ºç©º');
		return false;
	}else{
		$('form[name=formIdentity]').find('.people-name-notice').html('').parents('.required-notice').css('visibility','hidden');	
	}
	if (card.length == 0) {
		$('form[name=formIdentity]').find('.people-num-notice').html('èº«ä»½è¯å·ä¸è½ä¸ºç©º').parents('.required-notice').css('visibility','visible');
		//alert('èº«ä»½è¯å·ä¸è½ä¸ºç©ºï¼');
		return false;
	}else {
		var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
		if (reg.test(card) === false) {
			$('form[name=formIdentity]').find('.people-num-notice').html('èº«ä»½è¯è¾å¥ä¸åæ³').parents('.required-notice').css('visibility','visible');
			//alert("èº«ä»½è¯è¾å¥ä¸åæ³");
			return false;
		}else{
			$('form[name=formIdentity]').find('.people-num-notice').html('').parents('.required-notice').css('visibility','hidden');	
		}
	}

	if (country == 0 || province == 0 || city == 0 || district == 0) {
		$('form[name=formIdentity]').find('.address-notice').html('ç°å±å°è¯·éæ©å®æ´').parents('.required-notice').css('visibility','visible');
		//alert('ç°å±å°è¯·éæ©å®æ´ï¼');
		return false;
	}else{
		$('form[name=formIdentity]').find('.address-notice').html('').parents('.required-notice').css('visibility','hidden');	
	}
	if (address.length == 0) {
		$('form[name=formIdentity]').find('.address-detail-notice').html('è¯¦ç»å°åä¸è½ä¸ºç©º').parents('.required-notice').css('visibility','visible');
		//alert('è¯¦ç»å°åä¸è½ä¸ºç©ºï¼');
		return false;
	}else{
		$('form[name=formIdentity]').find('.address-detail-notice').html('').parents('.required-notice').css('visibility','hidden');	
	}
	return true;
}
/* ä»£ç å¢å 2014-12-23 by www.68ecshop.com _end */
/*******************************************************************************
 * ä¿®æ¹ä¼åä¿¡æ¯
 */
function userEdit() {
	var frm = document.forms['formEdit'];
	var email = frm.elements['email'].value;
	var msg = '';
	var reg = null;
	var passwd_answer = frm.elements['passwd_answer'] ? Utils.trim(frm.elements['passwd_answer'].value) : '';
	var sel_question = frm.elements['sel_question'] ? Utils.trim(frm.elements['sel_question'].value) : '';
	/* ä»£ç å¢å 2014-12-23 by www.68ecshop.com _star */
	var username = frm.elements['username'].value;
	if (username.length == 0) {
		msg += 'ç¨æ·åä¸è½ä¸ºç©º' + '\n';
	} else if (username.match(/[\u4e00-\u9fa5]/)) {
		msg += username_chana + '\n';
	} else if (!username.match(/^[a-zA-Z0-9_]{1,}$/)) {
        	msg += 'ç¨æ·ååªè½ç±å­æ¯æ°å­ä¸åçº¿ç»æ' + '\n';
    	}
	/* ä»£ç å¢å 2014-12-23 by www.68ecshop.com _end */
	if (email.length == 0) {
		msg += email_empty + '\n';
	} else {
		if (!(Utils.isEmail(email))) {
			msg += email_error + '\n';
		}
	}

	if (passwd_answer.length > 0 && sel_question == 0 || document.getElementById('passwd_quesetion') && passwd_answer.length == 0) {
		msg += no_select_question + '\n';
	}

	for (var i = 7; i < frm.elements.length - 2; i++) // ä»ç¬¬ä¸é¡¹å¼å§å¾ªç¯æ£æ¥æ¯å¦ä¸ºå¿å¡«é¡¹
	{
		var needinput = document.getElementById(frm.elements[i].name + 'i') ? document.getElementById(frm.elements[i].name + 'i') : '';

		if (needinput != '' && frm.elements[i].value.length == 0) {
			msg += '- ' + needinput.innerHTML + msg_blank + '\n';
		}
	}

	if (msg.length > 0) {
		alert(msg);
		return false;
	} else {
		return true;
	}
}

/* ä¼åä¿®æ¹å¯ç  */
function editPassword() {
	var frm = document.forms['formPassword'];
	var old_password = frm.elements['old_password'].value;
	var new_password = frm.elements['new_password'].value;
	var confirm_password = frm.elements['comfirm_password'].value;

	var msg = '';
	var reg = null;

	if (old_password.length == 0) {
		msg += old_password_empty + '\n';
	}

	if (new_password.length == 0) {
		msg += new_password_empty + '\n';
	}

	if (confirm_password.length == 0) {
		msg += confirm_password_empty + '\n';
	}

	if (new_password.length > 0 && confirm_password.length > 0) {
		if (new_password != confirm_password) {
			msg += both_password_error + '\n';
		}
	}

	if (msg.length > 0) {
		alert(msg);
		return false;
	} else {
		return true;
	}
}

/*******************************************************************************
 * å¯¹ä¼åççè¨è¾å¥ä½å¤ç
 */
function submitMsg() {
	var frm = document.forms['formMsg'];
	var msg_title = frm.elements['msg_title'].value;
	var msg_content = frm.elements['msg_content'].value;
	var msg = '';

	if (msg_title.length == 0) {
		$('form[name=formMsg]').find('.message-title-notice').html(msg_title_empty).parents('.required-notice').css('visibility','visible');
		msg += msg_title_empty + '\n';
	}else if(msg_title.length > 200) {
		$('form[name=formMsg]').find('.message-title-notice').html(msg_title_limit).parents('.required-notice').css('visibility','visible');
		msg += msg_title_limit + '\n';
	}else{
		$('form[name=formMsg]').find('.message-title-notice').html('').parents('.required-notice').css('visibility','hidden');	
	}
	if (msg_content.length == 0) {
		$('form[name=formMsg]').find('.message-content-notice').html(msg_content_empty).parents('.required-notice').css('visibility','visible');
		msg += msg_content_empty + '\n'
	}else{
		$('form[name=formMsg]').find('.message-content-notice').html('').parents('.required-notice').css('visibility','hidden');
	}

	if (msg.length > 0) {
		//alert(msg);
		return false;
	} else {
		return true;
	}
}

/*******************************************************************************
 * ä¼åæ¾åå¯ç æ¶ï¼å¯¹è¾å¥ä½å¤ç
 */
function submitPwdInfo() {
	var frm = document.forms['getPassword'];
	var user_name = frm.elements['user_name'].value;
	var email = frm.elements['email'].value;

	var errorMsg = '';
	if (user_name.length == 0) {
		errorMsg += user_name_empty + '\n';
	}

	if (email.length == 0) {
		errorMsg += email_address_empty + '\n';
	} else {
		if (!(Utils.isEmail(email))) {
			errorMsg += email_address_error + '\n';
		}
	}

	if (errorMsg.length > 0) {
		alert(errorMsg);
		return false;
	}

	return true;
}

/*******************************************************************************
 * ä¼åæ¾åå¯ç æ¶ï¼å¯¹è¾å¥ä½å¤ç
 */
function submitPwd() {
	var frm = document.forms['getPassword2'];
	var password = frm.elements['new_password'].value;
	var confirm_password = frm.elements['confirm_password'].value;

	var errorMsg = '';
	if (password.length == 0) {
		errorMsg += new_password_empty + '\n';
	}

	if (confirm_password.length == 0) {
		errorMsg += confirm_password_empty + '\n';
	}

	if (confirm_password != password) {
		errorMsg += both_password_error + '\n';
	}

	if (errorMsg.length > 0) {
		alert(errorMsg);
		return false;
	} else {
		return true;
	}
}

/*******************************************************************************
 * å¤çä¼åæäº¤çç¼ºè´§ç»è®°
 */
function addBooking() {
	var frm = document.forms['formBooking'];
	var goods_id = frm.elements['id'].value;
	var rec_id = frm.elements['rec_id'].value;
	var number = frm.elements['number'].value;
	var desc = frm.elements['desc'].value;
	var linkman = frm.elements['linkman'].value;
	var email = frm.elements['email'].value;
	var tel = frm.elements['tel'].value;
	var msg = "";

	if (number.length == 0) {
		msg += booking_amount_empty + '\n';
	} else {
		var reg = /^[0-9]+/;
		if (!reg.test(number)) {
			msg += booking_amount_error + '\n';
		}
	}

	if (desc.length == 0) {
		msg += describe_empty + '\n';
	}

	if (linkman.length == 0) {
		msg += contact_username_empty + '\n';
	}

	if (email.length == 0) {
		msg += email_empty + '\n';
	} else {
		if (!(Utils.isEmail(email))) {
			msg += email_error + '\n';
		}
	}

	if (tel.length == 0) {
		msg += contact_phone_empty + '\n';
	}

	if (msg.length > 0) {
		alert(msg);
		return false;
	}

	return true;
}

/*******************************************************************************
 * ä¼åç»å½
 */
function user_login(back_history){

	var logform = $('form[name="formLogin"]');
	var username = logform.find('#username');
	var password = logform.find('#password');
	var captcha = logform.find('#authcode');
	var error = logform.find('.msg-wrap');
	var back_act = logform.find("input[name='back_act']").val();

	if(username.val()==''){
		error.css({'visibility':'visible'});
		error.find('.msg-error-text').html('è¯·è¾å¥è´¦æ·å');
		username.parents('.item').addClass('item-error');
		return false;
	}

	if(password.val()==''){
		error.css({'visibility':'visible'});
		password.parents('.item').addClass('item-error');
		error.find('.msg-error-text').html('è¯·è¾å¥å¯ç ');
		return false;
	}
	
	if(captcha.val()==''){
		error.css({'visibility':'visible'});
		captcha.parents('.item-detail').addClass('item-error');
		error.find('.msg-error-text').html('è¯·è¾å¥éªè¯ç ');
		return false;
	}

	if(back_history){
		Ajax.call( 'user.php?act=act_login', 'username=' + username.val()+'&password='+password.val()+'&captcha='+captcha.val()+'&back_act='+back_act, return_login_back , 'POST', 'JSON');	
	}else{
		Ajax.call( 'user.php?act=act_login', 'username=' + username.val()+'&password='+password.val()+'&captcha='+captcha.val()+'&back_act='+back_act, return_login , 'POST', 'JSON');
	}
return false;
}
function return_login(result){
	if(result.error>0){
		$('form[name="formLogin"]').find('.msg-error-text').html(result.message);
        $('#o-authcode').find('img').attr('src','captcha.php?is_login=1&'+Math.random());
		if(result.message != 'å¯¹ä¸èµ·ï¼æ¨è¾å¥çéªè¯ç ä¸æ­£ç¡®ã'){
			$('#authcode').parents('.item-detail').removeClass('item-error');
			$('form[name="formLogin"]').find('.msg-wrap').css('visibility','visible');
		}
		if(result.message == 'å¯¹ä¸èµ·ï¼æ¨è¾å¥çéªè¯ç ä¸æ­£ç¡®ã'){
			$('#authcode').parents('.item-detail').addClass('item-error');
			$('form[name="formLogin"]').find('.msg-wrap').css('visibility','visible');
		}
		if(result.message == 'ç¨æ·åæå¯ç éè¯¯'){
			$('#password,#username').parents('.item').addClass('item-error');
			$('form[name="formLogin"]').find('.msg-wrap').css('visibility','visible');
		}
		if(result.message != 'ç¨æ·åæå¯ç éè¯¯'){
			$('#password,#username').parents('.item').removeClass('item-error');
			$('form[name="formLogin"]').find('.msg-wrap').css('visibility','visible');
		}
	}else{
		$('.pop-login,.pop-mask').hide();
		$('form[name="formLogin"]').find('.msg-error-text').css('visibility','visible');
	//	top.location.reload();
		//window.location.href = '/user.php?act=login_other';
		window.location.href = result.url;
	}
}
function return_login_back(result){
	if(result.error>0){
		$('form[name="formLogin"]').find('.msg-error-text').html(result.message);
        $('#o-authcode').find('img').attr('src','captcha.php?is_login=1&'+Math.random());
		if(result.message != 'å¯¹ä¸èµ·ï¼æ¨è¾å¥çéªè¯ç ä¸æ­£ç¡®ã'){
			$('#authcode').parents('.item-detail').removeClass('item-error');
            $('form[name="formLogin"]').find('.msg-wrap').css('visibility','visible');
		}
		if(result.message == 'å¯¹ä¸èµ·ï¼æ¨è¾å¥çéªè¯ç ä¸æ­£ç¡®ã'){
			$('#authcode').parents('.item-detail').addClass('item-error');
            $('form[name="formLogin"]').find('.msg-wrap').css('visibility','visible');
		}
		if(result.message == 'ç¨æ·åæå¯ç éè¯¯'){
			$('#password,#username').parents('.item').addClass('item-error');
            $('form[name="formLogin"]').find('.msg-wrap').css('visibility','visible');
		}
		if(result.message != 'ç¨æ·åæå¯ç éè¯¯'){
			$('#password,#username').parents('.item').removeClass('item-error');
            $('form[name="formLogin"]').find('.msg-wrap').css('visibility','visible');
		}
	}else{
		$('form[name="formLogin"]').find('.msg-error-text').css('visibility','visible');
		
		var message = {key: "token", method: "set", data: result.token};
		var jsonString = JSON.stringify(message);
		window.frames[0].postMessage(jsonString, "https://www.huitouyu.com");
		window.frames[1].postMessage(jsonString, "https://www.qiaocao.hk");
		window.frames[2].postMessage(jsonString, "https://www.huitouyu.hk");
		//console.log(result.token);
		window.location.href = result.url;
			//window.location.href = '/user.php?act=login_other';    
	}
}

function userLogin() {
	var frm = document.forms['formLogin'];
	var username = frm.elements['username'].value;
	var password = frm.elements['password'].value;
	var msg = '';

	if (username.length == 0) {
		msg += username_empty + '\n';
	}

	if (password.length == 0) {
		msg += password_empty + '\n';
	}

	if (msg.length > 0) {
		alert(msg);
		return false;
	} else {
		return true;
	}
}

function chkstr(str) {
	for (var i = 0; i < str.length; i++) {
		if (str.charCodeAt(i) < 127 && !str.substr(i, 1).match(/^\w+$/ig)) {
			return false;
		}
	}
	return true;
}

function check_password(password) {
	conform_password = document.getElementById('conform_password').value;
	if (password.length < 6) {
		document.getElementById('password_notice').innerHTML = password_shorter;
		$("#pwd_notice").show();
		$("#pwd_intensity").hide();
	} else if (conform_password.length > 0) {
		if (password != conform_password) {
			document.getElementById('password_notice').innerHTML = confirm_password_invalid;
			document.getElementById('password_notice').style.color = "#E31939";
			$("#pwd_notice").show();
			$("#pwd_intensity").hide();
		} else {
			document.getElementById('password_notice').innerHTML = msg_can_rg;
			document.getElementById('password_notice').style.color = "#093";
			document.getElementById('conform_password_notice').innerHTML = msg_can_rg;
			document.getElementById('conform_password_notice').style.color = "#093";
			$("#pwd_notice").hide();
			$("#pwd_intensity").show();
		}
	} else {
		document.getElementById('password_notice').innerHTML = msg_can_rg;
		document.getElementById('password_notice').style.color = "#093";
		$("#pwd_notice").hide();
		$("#pwd_intensity").show();
	}
}

function check_conform_password(conform_password) {
	var password = document.getElementById('password').value;

	if (conform_password.length < 6) {
		document.getElementById('conform_password_notice').innerHTML = password_shorter;
		document.getElementById('conform_password_notice').style.color = "#E31939";
		return false;
	}
	if (conform_password != password) {
		document.getElementById('conform_password_notice').innerHTML = confirm_password_invalid;
		document.getElementById('conform_password_notice').style.color = "#E31939";
	} else {
		document.getElementById('conform_password_notice').innerHTML = msg_can_rg;
		document.getElementById('conform_password_notice').style.color = "#093";
	}
}

function is_registered(username) {
	var submit_disabled = false;
	var unlen = username.replace(/[^\x00-\xff]/g, "**").length;
	if (username.match(/[\u4e00-\u9fa5]/)) {
		document.getElementById('username_notice').innerHTML = msg_un_chine;
		document.getElementById('username_notice').style.color = "#E31939";
		var submit_disabled = true;
	}
	if (username == '') {
		document.getElementById('username_notice').innerHTML = msg_un_blank;
		document.getElementById('username_notice').style.color = "#E31939";
		var submit_disabled = true;
	}

	if (!chkstr(username)) {
		document.getElementById('username_notice').innerHTML = msg_un_format;
		document.getElementById('username_notice').style.color = "#E31939";
		var submit_disabled = true;
	}
	if (unlen < 3) {
		document.getElementById('username_notice').innerHTML = username_shorter;
		document.getElementById('username_notice').style.color = "#E31939";
		var submit_disabled = true;
	}
	if (unlen > 14) {
		document.getElementById('username_notice').innerHTML = msg_un_length;
		document.getElementById('username_notice').style.color = "#E31939";
		var submit_disabled = true;
	}

	if (submit_disabled) {
		document.forms['formUser'].elements['Submit'].disabled = 'disabled';
		return false;
	}

	Ajax.call('user.php?act=is_registered', 'username=' + username, registed_callback, 'GET', 'TEXT', true, true);
}

function registed_callback(result) {
	if (result == "true") {
		document.getElementById('username_notice').innerHTML = msg_can_rg;
		document.getElementById('username_notice').style.color = "#093";
		document.forms['formUser'].elements['Submit'].disabled = '';
	} else {
		document.getElementById('username_notice').innerHTML = msg_un_registered;
		document.getElementById('username_notice').style.color = "#E31939";
		document.forms['formUser'].elements['Submit'].disabled = 'disabled';
	}
}

/**
 * éªè¯é®ç®±,ç¬¬ä¸æ­¥åæ³æ§éªè¯ï¼ ç¬¬äºæ­¥æ¯å¦å­å¨éªè¯
 * 
 * @param email
 *            éªè¯é®ç®±ï¼æ¯æé®ç®±åé®ç®±å¯¹è±¡
 * @param callback
 *            åè°å½æ°ï¼true-å¯ä»¥æ³¨å false-ä¸å¯ä»¥æ³¨å
 */
function checkEmail(email, callback) {
	var submit_disabled = false;

	var emailObj = null;

	if (typeof (email) == 'object') {
		emailObj = $(email);
		email = emailObj.val();
	}

	if (email == '') {
		document.getElementById('email_notice').innerHTML = msg_email_blank;
		document.getElementById('email_notice').style.color = '#E31939';
		submit_disabled = true;

		if (emailObj != null) {
			emailObj.focus();
		}

	} else if (!Utils.isEmail(email)) {
		document.getElementById('email_notice').innerHTML = msg_email_format;
		document.getElementById('email_notice').style.color = '#E31939';
		submit_disabled = true;

		if (emailObj != null) {
			emailObj.focus();
		}

	}

	if (submit_disabled) {
		document.forms['formUser'].elements['Submit'].disabled = 'disabled';
		return false;
	}

	// Ajax.call('user.php?act=check_email', 'email=' + email,
	// check_email_callback, 'GET', 'TEXT', true, true);
	if (emailObj == null) {
		checkEmailExist(email, callback);
	} else {
		checkEmailExist(emailObj, callback);
	}
}

/**
 * æ£æ¥é®ç®±æ¯å¦å·²ç»ç»å®è¿ç¨æ·
 * 
 * @param email
 *            éªè¯é®ä»¶:æ¯æé®ç®±åé®ç®±å¯¹è±¡
 * @param callback
 *            åè°å½æ°ï¼true-å¯ä»¥æ³¨å false-ä¸å¯ä»¥æ³¨å
 */
function checkEmailExist(email, callback) {

	var emailObj = null;

	if (typeof (email) == 'object') {
		emailObj = $(email);
		email = emailObj.val();
	}

	// Ajax.call('user.php?act=check_email', 'email=' + email,
	// check_email_callback, 'GET', 'TEXT', true, true);
	$.post('user.php?act=check_email', {
		email: email
	}, function(result) {
		if (result == 'ok') {
			document.getElementById('email_notice').innerHTML = msg_can_rg;
			document.getElementById('email_notice').style.color = '#093';
			document.forms['formUser'].elements['Submit'].disabled = '';

			if ($.isFunction(callback)) {
				callback(true);
			}
		} else {
			document.getElementById('email_notice').innerHTML = msg_email_registered;
			document.getElementById('email_notice').style.color = '#E31939';
			document.forms['formUser'].elements['Submit'].disabled = 'disabled';

			if (emailObj != null) {
				emailObj.focus();
			}

			if ($.isFunction(callback)) {
				callback(false);
			}

		}
	}, 'text');
}

function checkMobilePhone(mobile, callback) {
	var submit_disabled = false;

	var mobileObj = null;

	if (typeof (mobile) == 'object') {
		mobileObj = $(mobile);
		mobile = mobileObj.val();
	}

	if (mobile == '') {
		document.getElementById('mobile_phone_notice').innerHTML = msg_mobile_phone_blank;
		document.getElementById('mobile_phone_notice').style.color = '#E31939';
		submit_disabled = true;

		if (mobileObj != null) {
			mobileObj.focus();
		}

	} else if (!Utils.isMobile(mobile)) {
		document.getElementById('mobile_phone_notice').innerHTML = msg_mobile_phone_format;
		document.getElementById('mobile_phone_notice').style.color = '#E31939';
		submit_disabled = true;

		if (mobileObj != null) {
			mobileObj.focus();
		}
	}

	if (submit_disabled) {
		document.forms['formUser'].elements['Submit'].disabled = 'disabled';
		return false;
	}
	// Ajax.call('user.php?act=check_mobile_phone', 'mobile_phone=' + mobileObj,
	// check_mobile_phone_callback, 'GET', 'TEXT', true, true);

	if (mobileObj == null) {
		checkMobilePhoneExist(mobile, callback);
	} else {
		checkMobilePhoneExist(mobileObj, callback);
	}
}

/**
 * æ£æ¥ææºå·æ¯å¦å·²ç»å­å¨
 * 
 * @param mobile
 * @param callback
 */
var cur_mobile_phone = null;
function checkMobilePhoneExist(mobile, callback) {
	var mobileObj = null;

	if (typeof (mobile) == 'object') {
		mobileObj = $(mobile);
		mobile = mobileObj.val();
	}

	if (mobile == cur_mobile_phone && !$.isFunction(callback)) {
		if (mobileObj != null) {
			mobileObj.focus();
		}
		return;
	}

	$.post('user.php?act=check_mobile_phone', {
		mobile_phone: mobile
	}, function(result) {

		if (result == 'ok') {
			document.getElementById('mobile_phone_notice').innerHTML = msg_can_rg;
			document.getElementById('mobile_phone_notice').style.color = '#093';
			document.forms['formUser'].elements['Submit'].disabled = '';

			if ($.isFunction(callback)) {
				callback(true);
			}
		} else {
			document.getElementById('mobile_phone_notice').innerHTML = msg_mobile_phone_registered;
			document.getElementById('mobile_phone_notice').style.color = '#E31939';
			document.forms['formUser'].elements['Submit'].disabled = 'disabled';

			if (mobileObj != null) {
				mobileObj.focus();
			}

			if ($.isFunction(callback)) {
				callback(false);
			}
		}

		cur_mobile_phone = mobile;

	}, 'text');
}

/*******************************************************************************
 * å¤çæ³¨åç¨æ·
 */
function register1() {
	var frm = document.forms['formUser'];
	var username = Utils.trim(frm.elements['username'].value);
	var email = frm.elements['email'].value;
	var password = Utils.trim(frm.elements['password'].value);
	var confirm_password = Utils.trim(frm.elements['confirm_password'].value);
	var checked_agreement = frm.elements['agreement'].checked;
	var msn = frm.elements['extend_field1'] ? Utils.trim(frm.elements['extend_field1'].value) : '';
	var qq = frm.elements['extend_field2'] ? Utils.trim(frm.elements['extend_field2'].value) : '';
	var home_phone = frm.elements['extend_field4'] ? Utils.trim(frm.elements['extend_field4'].value) : '';
	var office_phone = frm.elements['extend_field3'] ? Utils.trim(frm.elements['extend_field3'].value) : '';
	var mobile_phone = frm.elements['extend_field5'] ? Utils.trim(frm.elements['extend_field5'].value) : '';
	var passwd_answer = frm.elements['passwd_answer'] ? Utils.trim(frm.elements['passwd_answer'].value) : '';
	var sel_question = frm.elements['sel_question'] ? Utils.trim(frm.elements['sel_question'].value) : '';

	var msg = "";
	// æ£æ¥è¾å¥
	var msg = '';
	if (username.length == 0) {
		msg += username_empty + '\n';
	} else if (username.match(/^\s*$|^c:\\con\\con$|[%,\'\*\"\s\t\<\>\&\\]/)) {
		msg += username_invalid + '\n';
	} else if (username.length < 3) {
		// msg += username_shorter + '\n';
	}

	if (username.match(/[\u4e00-\u9fa5]/)) {
		msg += username_chana + '\n';
	}

	if (email.length == 0) {
		msg += email_empty + '\n';
	} else {
		if (!(Utils.isEmail(email))) {
			msg += email_invalid + '\n';
		}
	}
	if (password.length == 0) {
		msg += password_empty + '\n';
	} else if (password.length < 6) {
		msg += password_shorter + '\n';
	}
	if (/ /.test(password) == true) {
		msg += passwd_balnk + '\n';
	}
	if (confirm_password != password) {
		msg += confirm_password_invalid + '\n';
	}
	if (checked_agreement != true) {
		msg += agreement + '\n';
	}

	if (msn.length > 0 && (!Utils.isEmail(msn))) {
		msg += msn_invalid + '\n';
	}

	if (qq.length > 0 && (!Utils.isNumber(qq))) {
		msg += qq_invalid + '\n';
	}

	if (office_phone.length > 0) {
		var reg = /^[\d|\-|\s]+$/;
		if (!reg.test(office_phone)) {
			msg += office_phone_invalid + '\n';
		}
	}
	if (home_phone.length > 0) {
		var reg = /^[\d|\-|\s]+$/;

		if (!reg.test(home_phone)) {
			msg += home_phone_invalid + '\n';
		}
	}
	if (mobile_phone.length > 0) {
		var reg = /^[\d|\-|\s]+$/;
		if (!reg.test(mobile_phone)) {
			msg += mobile_phone_invalid + '\n';
		}
	}
	if (passwd_answer.length > 0 && sel_question == 0 || document.getElementById('passwd_quesetion') && passwd_answer.length == 0) {
		msg += no_select_question + '\n';
	}

	for (var i = 4; i < frm.elements.length - 4; i++) // ä»ç¬¬äºé¡¹å¼å§å¾ªç¯æ£æ¥æ¯å¦ä¸ºå¿å¡«é¡¹
	{
		var needinput = document.getElementById(frm.elements[i].name + 'i') ? document.getElementById(frm.elements[i].name + 'i') : '';

		if (needinput != '' && frm.elements[i].value.length == 0) {
			msg += '- ' + needinput.innerHTML + msg_blank + '\n';
		}
	}

	if (msg.length > 0) {
		alert(msg);
		return false;
	} else {
		return true;
	}
}

/**
 * ç¨æ·æ³¨å
 * 
 * @param register_type
 *            æ³¨åç±»åï¼emailãmobile
 */
function register(register_type) {
	if (register_type == "email") {
		return reg_by_email();
	} else {
		return reg_by_mobile();
	}
}

/**
 * éè¿é®ç®±æ³¨å
 * 
 * @returns {Boolean}
 */
function reg_by_email() {
	var frm = document.forms['formUser'];
	// é®ç®±æ³¨åæ¶ä¸æ¯æç¨æ·åæ³¨å
	// var username = Utils.trim(frm.elements['username'].value);
	var email = frm.elements['email'].value;
	var password = Utils.trim(frm.elements['password'].value);
	var confirm_password = Utils.trim(frm.elements['confirm_password'].value);
	var checked_agreement = frm.elements['agreement'].checked;
	var msn = frm.elements['extend_field1'] ? Utils.trim(frm.elements['extend_field1'].value) : '';
	var qq = frm.elements['extend_field2'] ? Utils.trim(frm.elements['extend_field2'].value) : '';
	var home_phone = frm.elements['extend_field4'] ? Utils.trim(frm.elements['extend_field4'].value) : '';
	var office_phone = frm.elements['extend_field3'] ? Utils.trim(frm.elements['extend_field3'].value) : '';
	// é®ç®±æ³¨åä¸è½ç»å®ææºï¼è®¸å¤æ³¨åæåååç»å®
	// var mobile_phone = frm.elements['extend_field5'] ?
	// Utils.trim(frm.elements['extend_field5'].value) : '';
	var passwd_answer = frm.elements['passwd_answer'] ? Utils.trim(frm.elements['passwd_answer'].value) : '';
	var sel_question = frm.elements['sel_question'] ? Utils.trim(frm.elements['sel_question'].value) : '';
	// é®ç®±éªè¯ç 
	var email_code = frm.elements['email_code'] ? Utils.trim(frm.elements['email_code'].value) : '';
	// éªè¯ç 
	var captcha = frm.elements['captcha'] ? Utils.trim(frm.elements['captcha'].value) : '';

	var msg = "";
	// æ£æ¥è¾å¥
	var msg = '';

	if (email.length == 0) {
		msg += email_empty + '\n';
	} else {
		if (!(Utils.isEmail(email))) {
			msg += email_invalid + '\n';
		}
	}
	if (password.length == 0) {
		msg += password_empty + '\n';
	} else if (password.length < 6) {
		msg += password_shorter + '\n';
	}
	if (/ /.test(password) == true) {
		msg += passwd_balnk + '\n';
	}
	if (confirm_password != password) {
		msg += confirm_password_invalid + '\n';
	}
	if (checked_agreement != true) {
		msg += agreement + '\n';
	}

	if (msn.length > 0 && (!Utils.isEmail(msn))) {
		msg += msn_invalid + '\n';
	}

	if (qq.length > 0 && (!Utils.isNumber(qq))) {
		msg += qq_invalid + '\n';
	}

	if (office_phone.length > 0) {
		var reg = /^[\d|\-|\s]+$/;
		if (!reg.test(office_phone)) {
			msg += office_phone_invalid + '\n';
		}
	}
	if (home_phone.length > 0) {
		var reg = /^[\d|\-|\s]+$/;

		if (!reg.test(home_phone)) {
			msg += msg_email_code_blank + '\n';
		}
	}

	if ($("#email_code").size() > 0 && email_code.length == 0) {
		msg += msg_email_code_blank + '\n';
	}

	if ($("#captcha").size() > 0 && captcha.length == 0) {
		msg += msg_captcha_blank + '\n';
	}

	// if (mobile_phone.length > 0) {
	// var reg = /^[\d|\-|\s]+$/;
	// if (!reg.test(mobile_phone)) {
	// msg += mobile_phone_invalid + '\n';
	// }
	// }
	if (passwd_answer.length > 0 && sel_question == 0 || document.getElementById('passwd_quesetion') && passwd_answer.length == 0) {
		msg += no_select_question + '\n';
	}

	for (var i = 4; i < frm.elements.length - 4; i++) // ä»ç¬¬äºé¡¹å¼å§å¾ªç¯æ£æ¥æ¯å¦ä¸ºå¿å¡«é¡¹
	{
		var needinput = document.getElementById(frm.elements[i].name + 'i') ? document.getElementById(frm.elements[i].name + 'i') : '';

		if (needinput != '' && frm.elements[i].value.length == 0) {
			msg += '- ' + needinput.innerHTML + msg_blank + '\n';
		}
	}

	if (msg.length > 0) {
		alert(msg);
		return false;
	} else {
		return true;
	}
}

function reg_by_mobile() {
	var frm = document.forms['formUser'];
	// ææºæ¶ä¸æ¯æç¨æ·åæ³¨å
	// var username = Utils.trim(frm.elements['username'].value);
	var mobile_phone = frm.elements['mobile_phone'].value;
	var password = Utils.trim(frm.elements['password'].value);
	var confirm_password = Utils.trim(frm.elements['confirm_password'].value);
	var checked_agreement = frm.elements['agreement'].checked;
	var msn = frm.elements['extend_field1'] ? Utils.trim(frm.elements['extend_field1'].value) : '';
	var qq = frm.elements['extend_field2'] ? Utils.trim(frm.elements['extend_field2'].value) : '';
	var home_phone = frm.elements['extend_field4'] ? Utils.trim(frm.elements['extend_field4'].value) : '';
	var office_phone = frm.elements['extend_field3'] ? Utils.trim(frm.elements['extend_field3'].value) : '';
	// é®ç®±æ³¨åä¸è½ç»å®ææºï¼è®¸å¤æ³¨åæåååç»å®
	// var mobile_phone = frm.elements['extend_field5'] ?
	// Utils.trim(frm.elements['extend_field5'].value) : '';
	var passwd_answer = frm.elements['passwd_answer'] ? Utils.trim(frm.elements['passwd_answer'].value) : '';
	var sel_question = frm.elements['sel_question'] ? Utils.trim(frm.elements['sel_question'].value) : '';
	// ææºéªè¯ç 
	var mobile_code = frm.elements['mobile_code'] ? Utils.trim(frm.elements['mobile_code'].value) : '';
	// éªè¯ç 
	var captcha = frm.elements['captcha'] ? Utils.trim(frm.elements['captcha'].value) : '';

	var msg = "";
	// æ£æ¥è¾å¥
	var msg = '';

	if (mobile_phone.length == 0) {
		msg += msg_mobile_phone_blank + '\n';
	} else {
		if (!(Utils.isMobile(mobile_phone))) {
			msg += mobile_phone_invalid + '\n';
		}
	}
	if (password.length == 0) {
		msg += password_empty + '\n';
	} else if (password.length < 6) {
		msg += password_shorter + '\n';
	}
	if (/ /.test(password) == true) {
		msg += passwd_balnk + '\n';
	}
	if (confirm_password != password) {
		msg += confirm_password_invalid + '\n';
	}
	if (checked_agreement != true) {
		msg += agreement + '\n';
	}

	if (msn.length > 0 && (!Utils.isEmail(msn))) {
		msg += msn_invalid + '\n';
	}

	if (qq.length > 0 && (!Utils.isNumber(qq))) {
		msg += qq_invalid + '\n';
	}

	if (office_phone.length > 0) {
		var reg = /^[\d|\-|\s]+$/;
		if (!reg.test(office_phone)) {
			msg += office_phone_invalid + '\n';
		}
	}
	if (home_phone.length > 0) {
		var reg = /^[\d|\-|\s]+$/;

		if (!reg.test(home_phone)) {
			msg += home_phone_invalid + '\n';
		}
	}

	if ($("#mobile_code").size() > 0 && mobile_code.length == 0) {
		msg += msg_mobile_phone_code_blank + '\n';
	}

	if ($("#captcha").size() > 0 && captcha.length == 0) {
		msg += msg_captcha_blank + '\n';
	}

	// if (mobile_phone.length > 0) {
	// var reg = /^[\d|\-|\s]+$/;
	// if (!reg.test(mobile_phone)) {
	// msg += mobile_phone_invalid + '\n';
	// }
	// }
	if (passwd_answer.length > 0 && sel_question == 0 || document.getElementById('passwd_quesetion') && passwd_answer.length == 0) {
		msg += no_select_question + '\n';
	}

	for (var i = 4; i < frm.elements.length - 4; i++) // ä»ç¬¬äºé¡¹å¼å§å¾ªç¯æ£æ¥æ¯å¦ä¸ºå¿å¡«é¡¹
	{
		var needinput = document.getElementById(frm.elements[i].name + 'i') ? document.getElementById(frm.elements[i].name + 'i') : '';

		if (needinput != '' && frm.elements[i].value.length == 0) {
			msg += '- ' + needinput.innerHTML + msg_blank + '\n';
		}
	}

	if (msg.length > 0) {
		alert(msg);
		return false;
	} else {
		return true;
	}
}

/**
 * åéé®ç®±éªè¯ç 
 * 
 * @param emailObj
 *            é®ç®±å¯¹è±¡
 * @param emailCodeObj
 *            é®ç®±éªè¯ç å¯¹è±¡
 * @param sendButton
 *            ç¹å»åéé®ç®±éªè¯ç çæé®å¯¹è±¡ï¼ç¨äºæ¾ç¤ºåè®¡æ¶ä¿¡æ¯
 */
function sendEmailCode(emailObj, emailCodeObj, sendButton) {
	checkEmail(emailObj, function(result) {
		if (result) {
			// åéé®ä»¶
			// &XDEBUG_SESSION_START=ECLIPSE_DBGP
			var url = 'user.php?act=send_email_code&XDEBUG_SESSION_START=ECLIPSE_DBGP';
			$.post(url, {
				email: emailObj.val()
			}, function(result) {
				if (result == 'ok') {
					// åè®¡æ¶
					countdown(sendButton);
				} else {
					alert(result);
				}
			}, 'text');
		}
	});
}

/**
 * åéé®ç®±éªè¯ç 
 * 
 * @param mobileObj
 *            ææºå·å¯¹è±¡
 * @param mobileCodeObj
 *            ç­ä¿¡éªè¯ç å¯¹è±¡
 * @param sendButton
 *            ç¹å»åéç­ä¿¡è¯ç çæé®å¯¹è±¡ï¼ç¨äºæ¾ç¤ºåè®¡æ¶ä¿¡æ¯
 */
function sendMobileCode(mobileObj, mobileCodeObj, sendButton) {
    alert(2);
	checkMobilePhone(mobileObj, function(result) {
		if (result) {
			// åéé®ä»¶
			var url = 'user.php?act=send_mobile_code&XDEBUG_SESSION_START=ECLIPSE_DBGP';
			$.post(url, {
				mobile_phone: mobileObj.val()
			}, function(result) {
				if (result == 'ok') {
					// åè®¡æ¶
					countdown(sendButton);
				} else {
					alert(result);
				}
			}, 'text');
		}
	});
}

/*******************************************************************************
 * ç¨æ·ä¸­å¿è®¢åä¿å­å°åä¿¡æ¯
 */
function saveOrderAddress(id) {
	var frm = document.forms['formAddress'];
	var consignee = frm.elements['consignee'].value;
	var email = frm.elements['email'].value;
	var address = frm.elements['address'].value;
	var zipcode = frm.elements['zipcode'].value;
	var tel = frm.elements['tel'].value;
	var mobile = frm.elements['mobile'].value;
	var sign_building = frm.elements['sign_building'].value;
	var best_time = frm.elements['best_time'].value;

	if (id == 0) {
		alert(current_ss_not_unshipped);
		return false;
	}
	var msg = '';
	if (address.length == 0) {
		msg += address_name_not_null + "\n";
	}
	if (consignee.length == 0) {
		msg += consignee_not_null + "\n";
	}

	if (msg.length > 0) {
		alert(msg);
		return false;
	} else {
		return true;
	}
}

/*******************************************************************************
 * ä¼åä½é¢ç³è¯·
 */
function submitSurplus() {
	var frm = document.forms['formSurplus'];
	var surplus_type = frm.elements['surplus_type'].value;
	var surplus_amount = frm.elements['amount'].value;
	var process_notic = frm.elements['user_note'].value;
	var payment_id = 0;
	var msg = '';

	if (surplus_amount.length == 0) {
		msg += surplus_amount_empty + "\n";
	} else {
		var reg = /^[\.0-9]+/;
		if (!reg.test(surplus_amount)) {
			msg += surplus_amount_error + '\n';
		}
	}

	if (process_notic.length == 0) {
		msg += process_desc + "\n";
	}

	if (msg.length > 0) {
		alert(msg);
		return false;
	}

	if (surplus_type == 0) {
		for (var i = 0; i < frm.elements.length; i++) {
			if (frm.elements[i].name == "payment_id" && frm.elements[i].checked) {
				payment_id = frm.elements[i].value;
				break;
			}
		}

		if (payment_id == 0) {
			alert(payment_empty);
			return false;
		}
	}

	return true;
}

/*******************************************************************************
 * å¤çç¨æ·æ·»å ä¸ä¸ªçº¢å
 */
function addBonus() {
	var frm = document.forms['addBouns'];
	var bonus_sn = frm.elements['bonus_sn'].value;

	if (bonus_sn.length == 0) {
		alert(bonus_sn_empty);
		return false;
	} else {
		var reg = /^[0-9]{10}$/;
		if (!reg.test(bonus_sn)) {
			alert(bonus_sn_error);
			return false;
		}
	}

	return true;
}

/*******************************************************************************
 * åå¹¶è®¢åæ£æ¥
 */
function mergeOrder() {
	if (!confirm(confirm_merge)) {
		return false;
	}

	var frm = document.forms['formOrder'];
	var from_order = frm.elements['from_order'].value;
	var to_order = frm.elements['to_order'].value;
	var msg = '';

	if (from_order == 0) {
		msg += from_order_empty + '\n';
	}
	if (to_order == 0) {
		msg += to_order_empty + '\n';
	} else if (to_order == from_order) {
		msg += order_same + '\n';
	}
	if (msg.length > 0) {
		alert(msg);
		return false;
	} else {
		return true;
	}
}

/*******************************************************************************
 * è®¢åä¸­çååè¿åè´­ç©è½¦
 * 
 * @param int
 *            orderId è®¢åå·
 */
function returnToCart(orderId) {
	Ajax.call('user.php?act=return_to_cart', 'order_id=' + orderId, returnToCartResponse, 'POST', 'JSON');
}

function returnToCartResponse(result) {
	// alert(result.message);
	if (result.error > 0) {
		// å¦æéè¦ç¼ºè´§ç»è®°ï¼è·³è½¬

		if (result.error == 1) {
			alert(result.message);
			location.href = 'user.php';
		} else if (result.error == 2) {

			// if (confirm(result.message)) {
			// location.href = 'user.php?act=add_booking&id=' + result.goods_id
			// + '&spec=' + result.product_spec;
			// document.getElementById('tell_me_form').style.display = 'block';
			// }
			// document.getElementById('tell_me_form').style.display = 'block';

			if (document.getElementById('g_id')) {
				document.getElementById('g_id').value = result.goods_id;
			}
			if (document.getElementById('rgoods_name')) {
				document.getElementById('rgoods_name').innerHTML = result.goods_name;
			}
			document.getElementById('tell_me_form').style.display = document.getElementById('tell_me_form').style.display == 'none' ? 'block' : 'none';
			// document.getElementById('bg').style.display='none';

		}
		// æ²¡éè§æ ¼ï¼å¼¹åºå±æ§éæ©æ¡
		else if (result.error == 6) {
			openSpeDiv(result.message, result.goods_id, result.parent);
		} else if (result.error == 999) {
			if (confirm(result.message)) {
				location.href = 'user.php';
			}
		} else if (result.error == 888) {
			alert(result.message);
		} else if (result.error == 777) {
			// é¢å®æ´»å¨æç¤º
			// é¢å®è·³è½¬å°ååè¯¦æé¡µ
			if (confirm(result.message)) {
				window.location.href = result.uri;
			}
		} else {
			alert(result.message);
		}
	} else {
		var cartInfo = $('.ECS_CARTINFO');
		if (cartInfo) {
			cartInfo.html(result.content);
		}
	}
}

/*******************************************************************************
 * æ£æµå¯ç å¼ºåº¦
 * 
 * @param string
 *            pwd å¯ç 
 */
function checkIntensity(pwd) {

	$("#pwd_notice").hide();
	$("#pwd_intensity").show();

	var Mcolor = "#FFF", Lcolor = "#FFF", Hcolor = "#FFF";
	var m = 0;

	var Modes = 0;
	for (var i = 0; i < pwd.length; i++) {
		var charType = 0;
		var t = pwd.charCodeAt(i);
		if (t >= 48 && t <= 57) {
			charType = 1;
		} else if (t >= 65 && t <= 90) {
			charType = 2;
		} else if (t >= 97 && t <= 122)
			charType = 4;
		else
			charType = 4;
		Modes |= charType;
	}

	for (i = 0; i < 4; i++) {
		if (Modes & 1)
			m++;
		Modes >>>= 1;
	}

	if (pwd.length <= 4) {
		m = 1;
	}

	switch (m) {
	case 1:
		Lcolor = "2px solid red";
		Mcolor = Hcolor = "2px solid #DADADA";
		break;
	case 2:
		Mcolor = "2px solid #f90";
		Lcolor = Hcolor = "2px solid #DADADA";
		break;
	case 3:
		Hcolor = "2px solid #3c0";
		Lcolor = Mcolor = "2px solid #DADADA";
		break;
	case 4:
		Hcolor = "2px solid #3c0";
		Lcolor = Mcolor = "2px solid #DADADA";
		break;
	default:
		Hcolor = Mcolor = Lcolor = "";
		break;
	}
	if (document.getElementById("pwd_lower")) {
		document.getElementById("pwd_lower").style.borderBottom = Lcolor;
		document.getElementById("pwd_middle").style.borderBottom = Mcolor;
		document.getElementById("pwd_high").style.borderBottom = Hcolor;
	}

}

function changeType(obj) {
	if (obj.getAttribute("min") && document.getElementById("ECS_AMOUNT")) {
		document.getElementById("ECS_AMOUNT").disabled = false;
		document.getElementById("ECS_AMOUNT").value = obj.getAttribute("min");
		if (document.getElementById("ECS_NOTICE") && obj.getAttribute("to") && obj.getAttribute('fee')) {
			var fee = parseInt(obj.getAttribute("fee"));
			var to = parseInt(obj.getAttribute("to"));
			if (fee < 0) {
				to = to + fee * 2;
			}
			document.getElementById("ECS_NOTICE").innerHTML = notice_result + to;
		}
	}
}

function calResult() {
	var amount = document.getElementById("ECS_AMOUNT").value;
	var notice = document.getElementById("ECS_NOTICE");

	reg = /^\d+$/;
	if (!reg.test(amount)) {
		notice.innerHTML = notice_not_int;
		return;
	}
	amount = parseInt(amount);
	var frm = document.forms['transform'];
	for (var i = 0; i < frm.elements['type'].length; i++) {
		if (frm.elements['type'][i].checked) {
			var min = parseInt(frm.elements['type'][i].getAttribute("min"));
			var to = parseInt(frm.elements['type'][i].getAttribute("to"));
			var fee = parseInt(frm.elements['type'][i].getAttribute("fee"));
			var result = 0;
			if (amount < min) {
				notice.innerHTML = notice_overflow + min;
				return;
			}

			if (fee > 0) {
				result = (amount - fee) * to / (min - fee);
			} else {
				// result = (amount + fee* min /(to+fee)) * (to + fee) / min ;
				result = amount * (to + fee) / min + fee;
			}

			notice.innerHTML = notice_result + parseInt(result + 0.5);
		}
	}
}
/* ä»£ç å¢å 2014-12-23 by www.68ecshop.com _star */
function choose_type(val) {
	if (val == 0) {
		document.getElementById('f_mobile').style.display = 'none';
		document.getElementById('f_code').style.display = 'none';
		document.getElementById('f_email').style.display = 'none';
	}
	if (val == 1) {
		document.getElementById('f_mobile').style.display = 'block';
		document.getElementById('f_code').style.display = 'block';
		document.getElementById('f_email').style.display = 'none';
	}
	if (val == 2) {
		document.getElementById('f_mobile').style.display = 'none';
		document.getElementById('f_code').style.display = 'none';
		document.getElementById('f_email').style.display = 'block';
	}
}

function forget_pass() {
	var frm = document.forms['fpForm'];
	var user_name = frm.elements['u_name'].value;
	var find_type = frm.elements['find_type'].value;
	var mobile = frm.elements['mobile'].value;
	var code = frm.elements['code'].value;
	var email = frm.elements['email'].value;
	if (user_name.length == 0) {
		alert('ç¨æ·åä¸è½ä¸ºç©ºï¼');
		return false;
	}
	if (find_type == 0) {
		alert('è¯·éæ©æ¾åæ¹å¼ï¼');
		return false;
	}
	if (find_type == 1) {
		if (mobile.length == 0) {
			alert('ææºå·ä¸è½ä¸ºç©ºï¼');
			return false;
		} else {
			if (mobile.length != 11) {
				alert('ææºå·ä¸æ¯11ä½ï¼');
				return false;
			} else {
				if (code.length == 0) {
					alert('éªè¯ç ä¸è½ä¸ºç©ºï¼');
					return false;
				}
			}
		}
	}

	if (find_type == 2) {
		if (email.length == 0) {
			alert('é®ç®±ä¸è½ä¸ºç©ºï¼');
			return false;
		} else {
			if (!(Utils.isEmail(email))) {
				alert('é®ç®±æ ¼å¼ä¸æ­£ç¡®ï¼');
				return false;
			}
		}
	}
	return true;
}

var wait = 60;
function countdown(obj, msg) {
	obj = $(obj);

	if (wait == 0) {
		obj.removeAttr("disabled");
		obj.val(msg);
		wait = 60;
	} else {
		if (msg == undefined || msg == null) {
			msg = obj.val();
		}
		obj.attr("disabled", "disabled");
		obj.val(wait + "ç§åéæ°è·å");
		wait--;
		setTimeout(function() {
			countdown(obj, msg)
		}, 1000)
	}
}
/* ä»£ç å¢å 2014-12-23 by www.68ecshop.com _end */