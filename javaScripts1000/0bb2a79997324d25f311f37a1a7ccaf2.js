// JavaScript Document
function tell_me(goods_id, no_have_val){

	no_have = (typeof(no_have_val) == "undefined" ? 0 : no_have_val)
	Ajax.call('user.php?act=book_goods', 'id=' + goods_id + '&no_have=' + no_have, tellmeResponse, 'GET', 'JSON');
}
function tellmeResponse(result){
	if(result.error == 99){
		$('.pop-mask,.pop-login').show();	
	}
	if(result.error==0){
		$('#tell-me-result').show();
		$('#tell-me-table').hide();
		$('#tell-me-result').css('left',($(window).width()-400)/2);
		$('#tell-me-result').css('top',($(window).height()-240)/2);
		$('.tell-me-result').show().siblings('.tell-me-table').hide();
		$('.tell-me-result').addClass('failed');
		$('.tell-me-result .result-text .title').html(result.message);
	}
	if(result.error==1){
		$('.pop-mask,#tell-me-table').show();
		$('#tell-me-table').css('left',($(window).width()-608)/2);
		$('#tell-me-table').css('top',($(window).height()-390)/2);
		$('#phone-num').val(result.tel);
		// $('#arrival-email').value(result.email);
	}

	if(result.error==2){
		$('#tell-me-result').show();
		$('#tell-me-table').hide();
		$('#tell-me-result').css('left',($(window).width()-400)/2);
		$('#tell-me-result').css('top',($(window).height()-240)/2);
		$('.tell-me-result').show().siblings('.tell-me-table').hide();
		$('.tell-me-result .result-text .title').html(result.message);
	}
	if(result.error == 3){
		$('.tell-me-form .phone-notice').html(result.message).parents('.tell-me-notice').css('visibility','visible');	
	}
	// if(result.error == 4){
	// 	$('.tell-me-form .email-notice').html(result.message).parents('.tell-me-notice').css('visibility','visible');
	// }
}
function tell_me1(goods_id, no_have_val){
	var num=$('#book-number').val();
	var tel=$('#phone-num').val();
	// var email=$('#arrival-email').val();
	var msg = '';
	var g = /^[1-9]*[1-9][0-9]*$/;

	if (num == '') {
		$('.tell-me-form .num-notice').html('æ°éä¸è½ä¸ºç©º!').parents('.tell-me-notice').css('visibility','visible');
	}else if(!g.test(num)){
		$('.tell-me-form .num-notice').html('æ°ééä¸ºæ­£æ´æ°ï¼').parents('.tell-me-notice').css('visibility','visible');
	}
	if (tel == '') {
		$('.tell-me-form .phone-notice').html('ææºå·ç ä¸è½ä¸ºç©ºï¼').parents('.tell-me-notice').css('visibility','visible');
	}
	// if (email == '') {
	// 	$('.tell-me-form .email-notice').html('é®ç®±ä¸è½ä¸ºç©ºï¼').parents('.tell-me-notice').css('visibility','visible');
	// }
	if (msg){
		alert(msg);
		return false;
	}else{
		no_have = (typeof(no_have_val) == "undefined" ? 0 : no_have_val)
		// Ajax.call('user.php?act=add_book_goods', 'id=' + goods_id + '&no_have=' + no_have+ '&num=' + num+ '&tel=' + tel+ '&em=' + email, tellmeResponse, 'GET', 'JSON');
		Ajax.call('user.php?act=add_book_goods', 'id=' + goods_id + '&no_have=' + no_have+ '&num=' + num+ '&tel=' + tel, tellmeResponse, 'GET', 'JSON');
	}
}
function closeDiv1(){
	$('.tell-me-form,.pop-mask').hide();
	var sels = document.getElementsByTagName('select');
	for (var i = 0; i < sels.length; i++){
		sels[i].style.visibility = '';

	}
}
$(function(){
	$('#tell-me-table').css('left',($(window).width()-500)/2);
	$('#tell-me-table').css('top',($(window).height()-$('#tell-me-table').height())/2);
	$('.tell-me-close').click(function(){
		$('.tell-me-form').hide();	
		$('.pop-mask').hide();
	})
})