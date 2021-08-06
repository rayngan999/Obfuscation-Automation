// JavaScript Document
document.write('<script type="text/javascript" src="/k/script/lhgdialog.min.js"></script>');
$(function(){
	$(".in_ajax").live('click',function(){
		window.ajaxtit = $(this).attr('ly')?$(this).attr('ly'):$(this).attr('title');
		var ajaxurl = $(this).attr('href');
		var _wid = $(this).attr('width')?$(this).attr('width'):'auto';
		var _hei = $(this).attr('height')?$(this).attr('height'):'auto';
		var _fix = $(this).attr('fix')?false:true;
		window.in_ajax = $.dialog({
			content: 'url:' + ajaxurl,
			id:'in_ajax',
			max: false,
			min: false,
			lock: true,
			width:_wid,
			height:_hei,
			title:$(this).attr('title'),
			fixed:_fix
		});
		return false;
	});
});
function gb(){
	in_ajax.get('in_ajax',1).time(1);
	$.dialog.tips('æåæäº¤');
}



