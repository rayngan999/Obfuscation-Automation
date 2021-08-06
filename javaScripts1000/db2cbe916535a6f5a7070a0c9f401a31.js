

$(document).ready(function(){
	$.ajaxSetup({headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}});
	//ç«å³ä½éª====================================
//	$('.btn_try').click(function(){
//		
//		console.log('1234'+islogin);
//	if(islogin){
//		 $.get('/trans',
//		 function(data){
//		 	console.log(data);
//		 	var token = data.token;
//		 	window.location.href='http://www.baidu.com';   
//		 })
//	}else{
//		window.location.href='http://www.53rj.com/?reg/index';
//	}
//})
//é¡¶é¨è´­ä¹°æ­æ¥
function top_scroll(speed,id){
	 var link;
	 var x;
	$.ajax({
		url:"/order",
		type:"post",
		success:function(res){
			var html='';
			if(res.status==201){
				$.each(res.data,function(i,item){
					link=item.product_name;
					switch (link){
						case 'äºå®¢æ':x='/live-chat';
						break;
						case 'å¤è´¦å·ç®¡ç':x='/group-management';
						break;
						case 'ç§æäº':x='/PrivateCloud';
						break;
						case 'é«é²æå¡':x='/EnterpriseDefense';
						break;
						case 'æå¡å':x='/Facilitator';
						break;
					}
					if(link == 'äºå®¢æ'){
						item.product_name = 'å®¢æç³»ç»';
					}
					html+='<li><span>'+item.account+' </span><span> è´­ä¹°äº </span><a href="'+x+'"> '+item.product_name+'</a></li>';
				})
				$('#top_scroll_list').append(html+html);
			}
			
				
		}
	});
	var t;  
    var p = false;  
    var o = document.getElementById(id);
    var top=o.offsetTop;
    o.onmouseover = function() {  
        p = true;  
    }  
    o.onmouseout = function() {  
        p = false;  
    }  
    
  
    function start() {  
        t = setInterval(scrolling,speed);  
        
    }  
  
    function scrolling() {
    	if(!p){
	          
	            top--;
	            o.style.top= top+'px';
	            if(top%28==0){
	            	if(o.offsetTop <= -(o.offsetHeight/2)){
		            	top=0;
		            	o.style.top= '0px';
		            }
	            	clearInterval(t);
	            	setTimeout(start,1000);
	            } 
	              
	        
        }  
    }  
 	setTimeout(start,1000);
}	
top_scroll(50,'top_scroll_list');

	
		//çå¬é®ç,åªåè®¸è½è¾å¥æ°å­
	$('.input-phone,.input-phonecall').on('keypress',function inputNum(event){
		var keyCode = event.which;
            if (keyCode == 46 || (keyCode >= 48 && keyCode <=57) || keyCode == 8)//8æ¯å é¤é®
                return true;
            else
                return false;
	})
	//é¡µå°¾ï¼å¤æ­å·ç ,ææºå·éªè¯,11ä½æ°å­ï¼1å¼å¤´
	var reg=/^1[3|4|5|6|7|8][0-9]{9}$/;
		$('.zhuce-btn').click(function(){
		var val=$('.input-phone').val();
		if(val !== ''){
			var flag=reg.test(val);
			if(!flag){
			$(this).parent().siblings('.span1').find('input').css('border-color','red');
			}else{
				// if (api == undefined) {
				// 	var api = $53.createApi();
				// }
				// api.push('cmd', 'lword');
				// api.push('phone', val);
				// api.push('msg', 'è®¿å®¢éè¿åè´¹æ³¨åééå¡«åçææºå·ä¸ºï¼'+val);
				// api.query();
				var talk_page_tmp = window.location.href;
				if(talk_page_tmp.indexOf('hz6d{') != -1) {
					talk_page_tmp = talk_page_tmp.substring(0,talk_page_tmp.indexOf('hz6d{'));
				}
				$.ajax({
					url:"/lword_phone",
				method:"post",
					data:{
						'phone':val,
						'hz6d_from_page':hz6d_from_page,
						'hz6d_land_page':hz6d_land_page,
						'talk_page_tmp':talk_page_tmp,
						'hz6d_style_id':hz6d_style_id,
						'type':'insert'
					},
					headers: {
						'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
					},
					success:function(data){
						
					}
				});
				var arg = $(this).attr("data-from");
		        var url =
		          "/reg/index?phonenumber=" +
		          val +
		          `&url=${window.location.href}&${arg}`;
		        $(".zhuce-a").attr("href", url);

	//			$('.zhuce-a').click();
			//ææºåè´¹æ³¨å=====================================
	//		$.get('',{'phonenumber':val},function(){
	//			window.location.href=''; 
	//		})
			}

		}
	})
		//è¾å¥æ¡æ¢å¤æ­£å¸¸é¢è²
		$('.input-phone').focus(function(){
		$(this).css('border-color','#1798FC');
	})

jQuery.extend( jQuery.easing, 
{ 
	
  easeOutExpo: function (x, t, b, c, d) { 
    return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b; 
  }, 
  easeOutBounce: function (x, t, b, c, d) { 
    if ((t/=d) < (1/2.75)) { 
      return c*(7.5625*t*t) + b; 
    } else if (t < (2/2.75)) { 
      return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b; 
    } else if (t < (2.5/2.75)) { 
      return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b; 
    } else { 
      return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b; 
    } 
  }, 
});

	
	//ä¾§è¾¹æ ï¼å®¢æå¨è¯¢ï¼å¼¹åºå¯¹è¯çªå£
// 	$(document).on("click","#to_online",function(){
// 	console.log(2)
// 	var num = Math.random();
// 	window.open("https://tb.71baomu.com/code/client/10011840/1","linkman"+num,"height=600,width=800,top=100,left=100,status=yes,toolbar=no,menubar=no,resizable=yes,scrollbars=yes,location=no,titlebar=no");
// })

	
	
	//é¡¶é¨å¯¼èªï¼ä¸ç´å¨é¡µé¦
	var nav=$('.navbox');
	var win=$(window);
	var sc=$(document);
	win.scroll(function(){
		if(sc.scrollTop()>=28){
			nav.addClass('fixednav');
			$('.mid1').css('margin-top','59px');
		}else{
			nav.removeClass('fixednav');
			$('.mid1').css('margin-top','0px');
		}
	});
	
	
	//å¯¼èªé«äº®
	$("li.act>a").each(function() {

	$this = $(this);

	if($this[0].href == String(window.location)) {
		
		$this.parent().addClass("actived");

	}})
 

	var index = window.location.href.split("/").length - 1;
var href = window.location.href.split("/")[index];
$("li.act>a[href*='"+ href +"']").parent().addClass("actived");
$(".productMenu li>a[href*='"+ href +"']").parents('.product').addClass("actived");
$(".productMenu li>a[href*='"+ href +"']").find('p').addClass("selected");
$(".about_box li>a[href*='"+ href +"']").parents('.about').addClass("actived");
$(".about_box li>a[href*='"+ href +"']").addClass('about_choose_blue');
if(href=='Agent'){
	$('.about').addClass("actived");
	$('.about').children('.about_box').children('li').eq(1).children('a').addClass('about_choose_blue');
}
/*$(".productMenu_box_one[href*='"+ href +"']").parents('.product').addClass("actived");
$(".productMenu_box_one[href*='"+ href +"']").addClass("selected");*/
	
	
	
	
	var clearheadbox;
	//å¯¼èª,äº§åäºçº§å¯¼èªï¼ç½è²èæ¯
	$('.product').hover(function(){
		clearInterval(clearheadbox);
		$('#white_bg').css({'height': '101px','transition': 'height .2s'});
		$("ul.productMenu").css({'height': '100px','transition': 'height .2s'});	
	},function(){

		clearheadbox=setTimeout(function(){
			$('#white_bg').css({'height': '0px','transition': 'height .2s'});
			$("ul.productMenu").css({'height': '0px','transition': 'height .2s'});
		},300)
			
			
		
	});
	
	/*$("ul.productMenu").mouseleave(function(ev){
		
			$('#white_bg').css({'height': '0px','transition': 'height 1s'});
			$("ul.productMenu").css({'height': '0px','transition': 'height 1s'});
			return false;
		
	})*/
	
	

	
	//é¡µèï¼å¾®ä¿¡å¾®åäºç»´ç 
	$('.foot3 .contact_qr').mouseover(function(){
		$(this).children('img').css('display','block');
	});
	$('.foot3 .contact_qr').mouseout(function(){
		$(this).children('img').css('display','none');
	});
	$(document).click(function(){
		$('.phoneAsk').removeClass('hide');

	})
	//ä¾§è¾¹æ 
	
	
	$(document).click(function(){
		
		$('.phoneAsk').animate({opacity:"0",left:'-90px'},400,"easeOutExpo",function(){
				$('.phoneAsk').addClass('hide');
			})
		$('.web_watch').animate({opacity:"0",left:'-90px'},400,"easeOutExpo",function(){
			$('.input-webwatch').val('www.').focus();
			$('.web_watch').addClass('hide');
		});

		
	})
	$('.banbox').click(function(event){
		event.stopPropagation();
	})
	$('.side2').click(function(event){

		event.stopPropagation();
		$('.web_watch').animate({opacity:"0",left:'-90px'},400,"easeOutExpo",function(){
			$('.web_watch').addClass('hide');
		});

		if($('.phoneAsk').hasClass('hide')){
			$('.phoneAsk').removeClass('hide').animate({opacity:"1",left:'-274px'},400,"easeOutExpo");
			
		}else{
			$('.phoneAsk').animate({opacity:"0",left:'-90px'},400,"easeOutExpo",function(){
				$('.phoneAsk').addClass('hide');
			})

		}
		
	})

	$('.phoneAsk').click(function(event){
		event.stopPropagation();
		// alert(7);
	});
	
/*	------------------------------------------------------*/
/*


	//é¦é¡µè½®æ­å¾
	var $index=0;
  	var $exdex=0;
  	var len=$(".choose p").length;
   $(".choose p").click(function(){

    $index=$(this).index();  
    
    $(".choose p").eq($index).children('span').addClass("red").end().siblings().children('span').
     removeClass("red");
    
    if($index>$exdex){
     next();
    }else if($index<$exdex){
     pre();
    }
    
    return $exdex=$index;
   });
  
   $(".next").click(function(){
    $index++;
    if($index>len-1){
     $index=0
    }
    $(".choose p").eq($index).children('span').addClass("red").end().siblings().children('span').
      removeClass("red");
    next();
    return $exdex=$index;
   });
   //ä¸ä¸é¡µçç¹å»äºä»¶
   $(".pre").click(function(){
    $index--;
    if($index<0){
     $index=3
    };
    $(".choose p").eq($index).children('span').addClass("red").end().siblings().children('span').
     removeClass("red");
    pre();
    return $exdex=$index;
   });
 //æ¯è¿5ç§ï¼è½®æ­å¾å¨ä¸æ¬¡  
// var atime=setInterval(function(){
//$(".next").click();   
// },5000);
  
  
   function next(){
    $(".banbox>div.pic").eq($index).stop(true,true).
//    css("left","1920px").animate({"left":"0"});
 css("left","100%").animate({"left":"0"});
    $(".banbox>div.pic").eq($exdex).stop(true,true).
//    css("left","0").animate({"left":"-1920px"});
css("left","0").animate({"left":"-100%"});
   }
   function pre(){
    $(".banbox>div.pic").eq($index).stop(true,true).
//   css("left","-1920px").animate({"left":"0"});
 css("left","-100%").animate({"left":"0"});
    $(".banbox>div.pic").eq($exdex).stop(true,true).
//   css("left","0").animate({"left":"1920px"});
 css("left","0").animate({"left":"100%"});
   }
	   
	$('.mid1 div.whitebtn').hover(
		
   function(){
    clearInterval(atime);
   },function(){
     atime=setInterval(function(){
    $(".next").click();   
   },5000); //4000ä¸ºè½®æ­çæ¶é´

   }
);
*/
	//------------------------------------------------------
	//å®¢æç³»ç»é¡µ
	//tagåæ¢
	$('.tag').on('click','.select-btn',function(){
		var index = $(this).index(); 
		$(this).addClass('active').siblings().removeClass('active'); 
		$(this).parent().siblings('.img-card').children(".option-page").eq(index).show().siblings().hide();
		
	} )
	
	//wpcç«¯åæ¢çªå£é¢è²
	//phoneç«¯åæ¢çªå£åºé¨æ 
	function phoneButtom_show() {
	        var $phoneButtom_box = $('.phoneButtom');
	        clearInterval($phoneButtom_box.data('timer'));
	        var $phoneButtoms = $('.phoneButtom div');
	        var len = $phoneButtoms.length;
	        $phoneButtom_box.data('timer', setInterval(function () {
	            var $index = $('.phoneButtom .active').index();
	            $phoneButtoms.eq($index).stop().fadeOut(1000).removeClass('active').end().eq($index + 1 === len ? 0 : $index + 1).stop().fadeIn(1000).addClass('active')
	        }, 2000))
	    }
		  phoneButtom_show();
	
	//æ»å¨å¯¹è¯
	 var lis = $('.mesbox').children();

        var classArr = ['one','two','three','four'];
        var num = 0;
        setInterval(function(){
                num++;
                if(num%2==1){
                    $('.four').addClass('five').removeClass('four');
                }else {
                        for(var i=0;i<lis.length;i++){
                                lis[i].className = classArr[i];
                        };
                        classArr.push(classArr.shift());
                }

        },1000)


	 

	
	//æ¡ä¾é¡µé¢-------------------------------------------------------------------
	//åæ¢
	$('ul.case-list').on('click','>li',function(){
		var index = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$("#wrap").find(">div").eq(index).show().siblings().hide();
		$(document).scrollTop(380);
	})
	//åå°ä¼ æå­ï¼æ¡ä¾ï¼
	
	
	
	
	
	//ä¸è½½é¡µ,åæ¢çæ¬------------------------------------------------------------
	var edition=$('.choose-Edition');
	edition.on('click','>span', function(){
		var index = $(this).index();
		$(this).addClass('seled').siblings().removeClass('seled');
		$(".all-items").find(">div.items").eq(index).show().siblings().hide();
		$(this).css('color','#1798FC').siblings().css('color','#1F2122');
	});
	
	//ä¸è½½æè¡ï¼å è½½æ´å¤

	// function showRank(){
	// 	var index=$('ul.ranklist>li').index();
	// 	var len=$('ul.ranklist>li').length;
	// 	for(var i=0;i<len;i++){
	// 		if(i<5){
	// 		$('ul.ranklist>li').eq(i).css('display','block');
	// 	}
	// 	else{
	// 		$('ul.ranklist>li').eq(i).css('display','none');
	// 	}
	// 	}
	// }
	// showRank();
	// $('.showbtn').click(function(){
	// 	$('ul.ranklist>li').css('display','block');
	// 	$('.showbtn').addClass('hide');
	// 	$('.hidebtn').removeClass('hide');
		
	// })
	// $('.hidebtn').click(function(){
	// 	showRank();
	// 	$('.showbtn').removeClass('hide');
	// 	$(this).addClass('hide');
	// })

	//ä»·æ ¼é¡µ,ç¹å»çµè¯ï¼å¼¹åºç»æåçµ----------------------------------------------
	$('.callphone').click(function(event){
		
		event.stopPropagation();
		$('.phoneAsk').removeClass('hide');	
		
		var tag=$('.phoneAsk');
	var flag=true;
	$(document).bind('click',function(e){
		var target = $(e.target);
        if(target.closest(tag).length == 0 && flag == true){
            $(tag).addClass('hide');
            flag = false;
		}
	})
	});
	//ç¹å»ç©ºç½ï¼å¼¹æ¡æ¶å¤±
	
	

	
	var options = {
	ââuseEasing : true, 
	ââuseGrouping : true, 
	ââseparator : ',', 
	ââdecimal : '.', 
	ââprefix : '', 
	ââsuffix : '' 
	};


	
	
	
   
   //404é¡µé¢
   $('p.back').click(function(){
   	window.history.back();
   })
    $('.refresh-btn').click(function(){
   	window.history.go(0);
   })

   //é®é¢åé¦
   $(".work-order-feedback").click(function(){
		var arg = this.getAttribute('arg')
		var id6d = arg.split('_')[1]
		window.open('https://gdout.53kf.com/feedbackpage/questionCallback?id6d='+id6d+'&com_id=53kf', 'é®é¢åé¦', "height=500,width=400,top=60,left=200,directories=no,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no");
	})
 




	//js SDK ç»inputæ·»å  growing-track='true'

	var inputDom = $(':input')
	inputDom.data("growing-track","true")

	//ä¿®æ¹é¨åæ ·å¼
	
	var pathname = window.location.pathname

	switch(pathname) {
		case '/agent': case '/ticketing-software': case '/price': case '/download': case '/about': case '/free-avater': case '/social-advertising': case '/case':case '/facilitator-recruit':
			$(".footer .foot1 .contant .logobox-line-bg").css("background", '#fff')
		default:
			return false
	}



})