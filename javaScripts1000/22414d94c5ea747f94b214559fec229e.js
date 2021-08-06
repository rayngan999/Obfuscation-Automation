$(function(){
	var lxbtip = 'è¯·è¾å¥æ¨ççµè¯å·ç ';
	var tishi = '<style>.lxb_big{width:210px; height:81px; position:relative; background:url(http://www.0755bdqn.com/k/img/blxb.png) no-repeat; z-index:999999}.lxb_big .lxb_gb{width:10px; height:63px; position:absolute; left:0; top:13px; cursor:pointer;}.lxb_big #vtel{width:104px; height:18px; line-height:18px; position:absolute; left:17px; top:57px; border:0; font-size:12px;}.lxb_big #cbBtn{width:80px; height:21px; position:absolute; left:126px; top:55px; border:0;}.lxb_xiao{width:24px; height:46px; display:none; cursor:pointer;}.c_999{color:#999;}.lxb_tishi{width:200px; position:absolute; top:81px; right:0px; background:#FFEDBF; font-size:12px; font-family:å®ä½; display:none;}.lxb_tishi .lxbt{line-height:16px; padding:5px;}.lxb_tishi .lxbp{line-height:16px; padding:0 5px 5px 5px; color:#CC6601;}<div class="lxb_tishi"><div class="lxbt">ææºè¯·ç´æ¥è¾å¥ï¼å¦18680086xxxx<br />åº§æºåå åºå·ï¼å¦0109036xxxx</div><div class="lxbp">è¾å¥æ¨ççµè¯å·ç ï¼ç¹å»éè¯ï¼ç¨åæ¨å°æ¥å°æä»¬ççµè¯ï¼è¯¥éè¯å¯¹æ¨ <strong>å®å¨åè´¹</strong>ï¼è¯·æ¾å¿æ¥å¬ï¼</div></div>';
	$("body").attr("onload","lxbcb.getTk('vtel','cbBtn',false)");
	$("<form />").attr({id:"lxb-data-form",style:"display:none"}).appendTo($("body"));
	$("#lxb-data-form").html('<input type="hidden" id="uid" name="uid" value="467045"/><input type="hidden" id="tk" name="tk" value=""/>a');
	$("<div />").attr({id:"lxb_box"}).appendTo($("body")).css({position:"fixed",right:"50px",bottom:"0px",display:"none"});
	$("#lxb_box").html('<div class="lxb_big"><input type="text" id="vtel" maxlength="12"/><input type="image" src="/k/img/blank.gif" id="cbBtn" value="" /><img src="/k/img/blank.gif" class="lxb_gb" />'+tishi+'</div><img src="/k/img/sbtn.png" class="lxb_xiao" />');
	$("#vtel").val(lxbtip).addClass('c_999');
	$("#vtel").live('click',function(){
		if($(this).val() == lxbtip){
			$(this).val('');
		}
		$(".lxb_tishi").show();
		$(this).removeClass('c_999');
	});
	$("#vtel").live('blur',function(){
		if(!$(this).val()){
			$(this).val(lxbtip);
			$(this).addClass('c_999');
		}
		$(".lxb_tishi").hide();
	});
	$(".lxb_gb").live('click',function(){
		$(".lxb_big").hide();
		$(".lxb_xiao").show();		
	});
	$(".lxb_xiao").live('click',function(){
		$(".lxb_big").show();
		$(".lxb_xiao").hide();		
	});
	loadjs('/k/script/lxb.js',"#lxb_box");
});	
