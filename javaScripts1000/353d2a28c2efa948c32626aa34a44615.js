
// ------- ÐÐ¾Ð´ÑÑÐµÑ ÑÐµÐ¹ÑÐ¸Ð½Ð³Ð° Ð¼Ð°ÑÐµÑÐ¸Ð°Ð»Ð°
function reiting_mat(RATED,RATING){
 var ier1 = Math.round((RATED*RATING - RATED)/3);
 var ier2 = Math.round((RATED*4 - RATED*RATING)/3);
 var ier3 = ier1 - ier2; 
 //if(ier3<0) {ier3 = " "+ier3;} else {ier3 = " +"+ier3;};
 if (ier3 < 0) { ier3 = 0; } else { ier3 = " +" + ier3; };
 $('#reiting_mat').html(ier3); 
};


// ------- ÐÐ½Ð¾Ð¿ÐºÐ° Ð½Ð°Ð²ÐµÑÑ
jQuery(document).ready(function($){
	$('<style>'+
		'.scrollTop{ display:none; z-index:9999; position:fixed;'+
			'bottom:10px; right:2%; width:60px; height:65px;'+
			'background:url(/files/arrows9.png) 0 0 no-repeat; }' +
		'.scrollTop:hover{background-position:0 -70px;}'
	+'</style>').appendTo('body');
	var
	speed = 500,
	$scrollTop = $('<a href="#" class="scrollTop" title="ÐÐ°Ð²ÐµÑÑ">').appendTo('body');		
	$scrollTop.click(function(e){
		e.preventDefault();
		$( 'html:not(:animated),body:not(:animated)' ).animate({ scrollTop: 0}, speed );
	});
	function show_scrollTop(){	//Ð¿Ð¾ÑÐ²Ð»ÐµÐ½Ð¸Ðµ
		( $(window).scrollTop() > 300 ) ? $scrollTop.fadeIn(600) : $scrollTop.fadeOut(600);
	}
	$(window).scroll( function(){ show_scrollTop(); } );
	show_scrollTop();
});


//------------ ÐÐ¾Ð²Ð¾Ðµ Ð¼Ð¾Ð´Ð°Ð»ÑÐ½Ð¾Ðµ Ð¾ÐºÐ½Ð¾ ---------------------
function mod_ok_tru(){
 $('.open_modal').click(function(event){
 event.preventDefault(); 
 $('#overlay').fadeIn(400,
 function(){
 $('#modal_form') 
 .css('display', 'block')
 .animate({opacity: 1, top: '50%'}, 200);
 });
 });
 $('#modal_close, #overlay').click( function(){ 
 $('#modal_form')
 .animate({opacity: 0, top: '45%'}, 200,
 function(){ 
 $(this).css('display', 'none');
 $('#overlay').fadeOut(400);
 }
 );
 });
};


//------------ Ð Ð°Ð·Ð´Ð²Ð¸Ð³Ð°ÑÑÐµÐµÑÑ Ð¼ÐµÐ½Ñ ---------------------
$(document).ready(function(){
 $('.splLink').click(function(){
 $(this).parent().children('div.splCont').toggle('normal');
 return false;
 });
});

//------------ ÐÑÐµÐ¼Ð¾Ð´ÐµÑÐ°ÑÐ¸Ñ ÑÐ¾Ð¾Ð±ÑÐµÐ½Ð¸Ð¹ Ð½Ð° ÑÐ¾ÑÑÐ¼Ðµ
new function(j,a){a.fn.msg_premod=function(e,h,c,f){var d=f?"":"Ð´Ðµ",g="/forum/"+e+"-"+h+"-"+c+"-9-1";e=a("<div />").addClass("act_msg_progress");a(this).hide();a("#activate_progress_"+c).html("").append(e);a.get(g,function(b){b=a('form[name="addform"]',b);a("#ahtml",b).removeAttr("checked");f?a("#edited",b).attr("checked","checked"):a("#edited",b).removeAttr("checked");a.post("/forum/",b.serialize(),function(b){-1!=b.indexOf("Ð¡Ð¾Ð¾Ð±ÑÐµÐ½Ð¸Ðµ Ð±ÑÐ»Ð¾ ÑÑÐ¿ÐµÑÐ½Ð¾ Ð¸Ð·Ð¼ÐµÐ½ÐµÐ½Ð¾")?(a("#activate_progress_"+c).html("Ð¡Ð¾Ð¾Ð±ÑÐµÐ½Ð¸Ðµ "+d+"Ð°ÐºÑÐ¸Ð²Ð¸ÑÐ¾Ð²Ð°Ð½Ð¾."),_uWnd.alert("Ð¡Ð¾Ð¾Ð±ÑÐµÐ½Ð¸Ðµ #"+c+" "+d+"Ð°ÐºÑÐ¸Ð²Ð¸ÑÐ¾Ð²Ð°Ð½Ð¾!","",{tm:3E3})):(b=a("<span />").css("color","red").html("ÐÑÐ¸Ð±ÐºÐ°, Ð¿Ð¾Ð¿ÑÐ¾Ð±ÑÐ¹ÑÐµ "+d+'Ð°ÐºÑÐ¸Ð²Ð¸ÑÐ¾Ð²Ð°ÑÑ <a href="'+g+'">Ð²ÑÑÑÐ½ÑÑ</a>.'),a("#activate_progress_"+c).html("").append(b),_uWnd.alert("ÐÑÐ¸Ð±ÐºÐ° "+d+"Ð°ÐºÑÐ¸Ð²Ð°ÑÐ¸Ð¸!","",{tm:3E3}))})})}}(document,jQuery);


//-------------- Ð¡Ð¾Ð¾Ð±ÑÐµÐ½Ð¸Ñ Ð¾Ð± Ð¾ÑÐ¸Ð±ÐºÐµ ---------------------
// ÑÑÐ½ÐºÑÐ¸Ñ Ð´Ð»Ñ Ð¿Ð¾Ð»ÑÑÐµÐ½Ð¸Ðµ Ð²ÑÐ´ÐµÐ»ÐµÐ½Ð½Ð¾Ð³Ð¾ ÑÐµÐºÑÑÐ°
function getSelectedText(){
 var text = "";
 if (window.getSelection) {
 text = window.getSelection();
 }else if (document.getSelection) {
 text = document.getSelection();
 }else if (document.selection) {
 text = document.selection.createRange().text;
 }
 return text;
};

function send_error(){
 var user_f = $('#user_f').val();
 var user_t = $('#user').val();
 var text_f = $('#text_f').val();
 var text_t = $('#text_t').val();
 var komm = $('#komm').val();
 var url = $('#url').val();
 $('#modal_close').click();
 $.ajax({
 type: 'POST',
 url: 'https://a.easyen.ru/errors/add_db.php',
 data: 'user_f='+user_f+'&user_t='+user_t+'&text_f='+text_f+'&text_t='+text_t+'&komm='+komm+'&url='+url,
 success: function(otvet){
 }}
 );
};

function open_okno_error(text){
 user_t = $('#user').val();
 $('#namek1').html('<img src="/disain/knopki/error.png" width="25" style="float:left;margin-top:-9px;"> <div style="float:left;margin-top:-9px;">Ð¡Ð¾Ð¾Ð±ÑÐµÐ½Ð¸Ðµ Ð¾Ð± Ð¾ÑÐ¸Ð±ÐºÐµ</div><div style="clear:both;"></div>');
 var st = '<div id="ttt"><div id="ttt21"><h4>Ð¢ÐµÐºÑÑ Ñ Ð¾ÑÐ¸Ð±ÐºÐ¾Ð¹</h4>'+text;
 st = st + '<h4>ÐÑÐ¿ÑÐ°Ð²Ð»ÐµÐ½Ð½ÑÐ¹ ÑÐµÐºÑÑ</h4>';
 st = st + '<textarea style="display:none" id="text_f">'+text+'</textarea>';
 st = st + '<textarea rows="3" style="width:500px;padding:1px;" id="text_t">'+text+'</textarea><br>';
 st = st + '<input type="text" placeholder="ÐÐ¾Ð¼Ð¼ÐµÐ½ÑÐ°ÑÐ¸Ð¹ Ðº Ð¾ÑÐ¸Ð±ÐºÐµ" id="komm" style="width:500px;margin-top:5px;padding:1px;"><br>';
 st = st + '<div style="float:left;padding-right:20px;"><h4>ÐÐ²ÑÐ¾Ñ Ð¾ÑÐ¸Ð±ÐºÐ¸</h4><input type="text" id="user_f" placeholder="ÐÐ¾Ð³Ð¸Ð½ Ð°Ð²ÑÐ¾ÑÐ° Ð¾ÑÐ¸Ð±ÐºÐ¸" style="width:240px;padding:1px;"></div>';
 st = st + '<div style="float:left;"><h4>Ð ÐµÐ´Ð°ÐºÑÐ¾Ñ</h4>'+$('#user').val()+'</div>';
 st = st + '<div style="clear:both;"></div><br>';
 st = st + '<center><a href="javascript://" onclick="send_error();"><button>ÐÑÐ¿ÑÐ°Ð²Ð¸ÑÑ</button></a><center>';
 st = st + '</div>';
 $('#ttt').html(st);
 $('#open_modal').click();
};

$(document).ready(function() {
 // Ð¿ÑÐ¸ Ð½Ð°Ð¶Ð°ÑÐ¸Ð¸ Ð½Ð° Ctrl + Enter
 var isCtrl = false;
 $(document).keyup(function (e) {
 if(e.which == 17) isCtrl = false;
 }).keydown(function (e) {
 if(e.which == 17) isCtrl=true;
 if(e.which == 13 && isCtrl == true) {
 // Ð¿Ð¾Ð»ÑÑÐ°ÐµÐ¼ Ð¸ Ð¿Ð¾ÐºÐ°Ð·ÑÐ²Ð°ÐµÐ¼ Ð²ÑÐ´ÐµÐ»ÐµÐ½Ð½ÑÐ¹ ÑÐµÐºÑÑ
 var text = getSelectedText()+'';
 if (text.length > 500){
 alert("Ð¡Ð»Ð¸ÑÐºÐ¾Ð¼ Ð´Ð»Ð¸Ð½Ð½ÑÐ¹ ÑÐµÐºÑÑ, Ð¿Ð¾Ð¿ÑÐ¾Ð±ÑÐ¹ÑÐµ Ð²ÑÐ´ÐµÐ»Ð¸ÑÑ Ð¼ÐµÐ½ÑÑÐµ!");
 } else {
 if (text.length < 4) {alert("Ð¡Ð»Ð¸ÑÐºÐ¾Ð¼ ÐºÐ¾ÑÐ¾ÑÐºÐ¸Ð¹ ÑÐµÐºÑÑ, Ð¿Ð¾Ð¿ÑÐ¾Ð±ÑÐ¹ÑÐµ Ð²ÑÐ´ÐµÐ»Ð¸ÑÑ Ð±Ð¾Ð»ÑÑÐµ!");} else {
 open_okno_error(text);
 } } } });});