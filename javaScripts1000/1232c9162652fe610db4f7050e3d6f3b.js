/* try{
	function $$(item){
		return document.getElementById(item);
	}

	var B=BigNews={
		current:0,
		next:0,
		scrollInterval:0,
		autoScroller:0,
		smallpic:"SwitchSmaPic"
	};
	
	BigNews.turn=function(index,obj){
		clearInterval(BigNews.autoScroller);
		BigNews.scroll(index,obj);
	}
	
	BigNews.scroll=function(index,obj){
		if(obj.smallpic==null || obj.smallpic==""){
			clearInterval(BigNews.autoScroller);
			return;
		}

		var count=0;
		var step=obj.step;
		var duration=16;
		var b=BigNews;
		b.next=index;
	
		if(index==b.current){
			return;
		}

		clearInterval(b.scrollInterval);
		
		for(var i=0;i<obj.totalcount;i++){
			$$(obj.smallpic+"_"+i).className='';
			if(obj.pictxt!=null && obj.pictxt!="")		
				$$(obj.pictxt+"_"+i).style.display = "none" ;
		}
	
		$$(obj.smallpic+"_"+index).className=obj.selectstyle;
		if(obj.pictxt!=null && obj.pictxt!="")	
			$$(obj.pictxt+"_"+index).style.display = "block" ;
		var span=index-b.current;
		var begin_value=$$(obj.bigpic).scrollTop;
		var chang_in_value=span*step+(b.current*step-begin_value);
		b.scrollInterval=setInterval(function(){doit(begin_value,chang_in_value)},10);

		function doit(b,c){
			$$(obj.bigpic).scrollTop=cpu(count,b,c,duration);
			count++;
			if(count==duration){
				clearInterval(BigNews.scrollInterval);
				scrollInterval=0;
				count=0;
				$$(obj.bigpic).scrollTop=b+c;
				BigNews.current=index;
			}
		}
	
		function cpu(t,b,c,d) {return c*((t=t/d-1)*t*t+1)+b;};
	}

	BigNews.auto=function(obj){
		//clearTimeout(BigNews.autoScroller);
		clearInterval(BigNews.autoScroller);
		BigNews.autoScroller=setInterval(function(){
			BigNews.scroll(BigNews.current==(obj.totalcount-1)?0:BigNews.current+1,obj);
		},obj.autotimeintval);
	}

	BigNews.pauseSwitch = function() {	
		//clearTimeout(BigNews.autoScroller);
		clearInterval(BigNews.autoScroller);
	}

	BigNews.init=function(obj){
		$$(obj.bigpic).onmouseover = new Function("BigNews.pauseSwitch();") ;		
		$$(obj.bigpic).onmouseout = new Function("BigNews.auto("+obj.objname+");") ;	
		for (i=0;i<obj.totalcount;i++) {	
			if(obj.smallpic!=null && obj.smallpic!="") {
			 $$(obj.smallpic+"_"+i).onmouseover = new Function("BigNews.turn("+i+","+obj.objname+");BigNews.pauseSwitch();") ;		
			 $$(obj.smallpic+"_"+i).onmouseout = new Function("BigNews.auto("+obj.objname+");") ;	
			}
		}
		BigNews.smallpic = obj.smallpic;
	}

	var SmallNews = {
		current:0,
		step:0,
		totalcount:0,
		a_pre:"",
		a_next:"",
		ul:'',
		clickflag:0
	};

	SmallNews.init=function(obj) {
		SmallNews.step = obj.step;
		SmallNews.totalcount = obj.totalcount;
		SmallNews.a_pre = obj.a_pre;
		SmallNews.a_next = obj.a_next;
		SmallNews.ul = obj.ul;
	}

	SmallNews.pre=function(){
		if(SmallNews.current<=0){
			return;
		}else{
			var index = SmallNews.current - 1;
			if(BigNews.current > index + 3) {
				$$(BigNews.smallpic+"_"+ (index + 3)).onmouseover();
				$$(BigNews.smallpic+"_"+ (index + 3)).onmouseout();
			}
			SmallNews.go(SmallNews,SmallNews.current-1);
		}
	}

	SmallNews.next=function(){
		if(SmallNews.current>=SmallNews.totalcount - 4){
			return;
		}else{
			var index = SmallNews.current + 1;
			if (BigNews.current < index) {
				$$(BigNews.smallpic+"_"+index).onmouseover();
				$$(BigNews.smallpic+"_"+index).onmouseout();
			} 
				SmallNews.go(SmallNews,SmallNews.current+1);
		}
	}

	SmallNews.go=function(obj,index){
		if(obj.current==index){return;}
		var span=-index+obj.current;
		if(obj.clickflag > 0){return;}
		obj.clickflag=1;
		if(obj.step>0)
			ScrollCrossUp.scroll($$(obj.ul),obj.step,span,parseInt($$(obj.ul).style.marginTop)||0,cb,10);
		else{
			cb();	
		}
		function cb(){
			obj.current=index;
			if(obj.current == 0) {
				$$(obj.a_pre).className = "no-pre";
				$$(obj.a_next).className = "next";
			}else if(obj.current > 0 && obj.current < obj.totalcount - 4) {
				$$(obj.a_pre).className = "pre";
				$$(obj.a_next).className = "next";
			}else if(obj.current == obj.totalcount - 4) {
				$$(obj.a_pre).className = "pre";
				$$(obj.a_next).className = "no-next";
			}
			obj.clickflag=0;
		}
	}

	//åä¸æ»å¨
	ScrollCrossUp={interval:0,count:0,duration:0,step:0,srcObj:null,callback:null};
	ScrollCrossUp.doit=function(obj,b,c,d){
		var s=ScrollCrossUp;
		//obj.style.marginTop=cpu(s.count,b,c,d)+'px';
		s.count++;
		if(s.count>=d){
			clearInterval(s.interval);
			s.count=0;
			//obj.style.marginTop=b+c+'px';
			s.callback();
		}
		function cpu(t,b,c,d) {return c*((t=t/d-1)*t*t+1)+b;};
	}
	ScrollCrossUp.scroll=function(obj,step,span,beign,callback,duration){
		var s=ScrollCrossUp;
		s.duration=duration;
		s.callback=callback;
		s.interval=setInterval(function(){s.doit(obj,beign,step*span,duration)},10);

	}

}catch(ex){} 
*/