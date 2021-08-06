/*
 *  jQuery loopslider v1.0.0
 *
 *  Copyright (c) 2013 Shirotama Dango
 *
 */

;(function($){
    $.fn.loopSlider = function(options){
        
        //include settings
        var defaoults = {
            autoMove : true,
            mouseOnStop : true,
            turn : 5000,
            motion : 'swing',
            delay: 500,
            //image size
            width : 800,
            height : 100,
            marginLR : 10,
            viewSize : 900,
            viewOverflow : 'hidden',
            navPositionBottom : 30,
            navibotton : true,
            navbtnImage : 'â'
        }
        var setting = $.extend(defaoults, options);
        
        //setting
        var slider = $('#slider'),
            slView = $('#sl-view'),
            slDiv = $('.sl-div'),
            slDivLen = slDiv.length,
            slWrap = $('#sl-wrap'),
            nextBtn = $('#sl-next'),
            prevBtn = $('#sl-prev');
        
        //counter
        var counter = {
            min : 0,
            max : slDivLen,
            current : 0
        }
        
        slDiv.css({
            width : setting.width + 'px',
            height : setting.height + 'px',
            marginLeft : (setting.marginLR) + 'px',
            marginRight : (setting.marginLR) + 'px'
        });
        
        slView.css({
            width : setting.viewSize + 'px',
            height : setting.height + 'px',
            overflow : setting.viewOverflow
        });
        
        if(setting.viewOverflow == 'hidden'){
            slView.append(nextBtn);
            slView.append(prevBtn);
        }
        
        //prepend
        slWrap.prepend(slWrap.html());
        slWrap.css({
            width : (setting.width + (setting.marginLR * 2)) * slDivLen*2 + 'px'
        });
        
        //default position
        var range = -(setting.width+setting.marginLR*2); //move Distance
        var firstPosition = range*slDivLen + (setting.viewSize-setting.width)/2 - setting.marginLR;
        slWrap.css({
            marginLeft : firstPosition + 'px'
        });
        
        //pagenation append
        
        if(setting.navibotton){
            slider.append('<div id="sl-nav"></div>')
        }
        var slNav = $('#sl-nav')
        
        for(var i=0; i<slDivLen ;i++){
            slNav.append('<p>'+setting.navbtnImage+'</p>')
        }
        $('#sl-nav p:first-child').addClass('hit')
        navWidth = slNav.outerWidth();
        
        // nav botton centering
        slNav.css({
            bottom : setting.navPositionBottom + 'px',
            left: '50%',
            marginLeft: -(navWidth/2) + 'px'
        });
        var slNavP = $('#sl-nav p');
        
        slNavP.on('click',function(){
            var target = $(this).index();
            if( Math.abs(counter.current - target) > Math.floor(slDivLen/2)){
                counter.current = -(slDivLen - target);
                prev();
            }else{
                counter.current = target;
                next();
            }
        
        });
        
        //next animation
        var next = function(){
            if(counter.current < counter.max-1){
                slWrap.stop().animate({
                    left: range * counter.current + 'px'
                },setting.delay,setting.motion);
            }else if(counter.current == counter.max-1){
                slWrap.css({
                    left: -range*2  + 'px'
                });
                slWrap.stop().animate({
                    left: range * (-1) + 'px'
                },setting.delay,setting.motion);
                counter.current = -1;
            }
            slNavP.removeClass('hit');
            slNavP.eq(counter.current).addClass('hit');
        }
        
        //prev animation
        var prev = function(){
            if(counter.current > -(slDivLen)){
                slWrap.stop().animate({
                    left: range*counter.current + 'px'
                },setting.delay,setting.motion);
            }else if(counter.current == -(slDivLen)){
                slWrap.css({
                    left: range  + 'px'
                });
                slWrap.stop().animate({
                    left: 0 + 'px'
                },setting.delay,setting.motion);
                counter.current = 0;
            }
            slNavP.removeClass('hit');
            slNavP.eq(counter.current).addClass('hit');
        }
        
        //next btn click event
        nextBtn.on('click',function(){
            counter.current++;
            next();
        });
        
        //prev btn click event
        prevBtn.on('click',function(){
            counter.current--;
            prev();
        });
        
        var timer;
        if(setting.autoMove)startTimer();
        
        if(setting.viewOverflow == 'visible'){
            if(setting.autoMove){
                if(setting.mouseOnStop){
                    slider.on({
                        'mouseover':function(){
                            clearTimer();
                        },
                        'mouseleave':function(){
                            startTimer();
                        }
                    });
                }
            }
        }else{
            if(setting.autoMove){
                if(setting.mouseOnStop){
                    slView.on({
                        'mouseover':function(){
                            clearTimer();
                        },
                        'mouseleave':function(){
                            startTimer();
                        }
                    });
                }
            }
        }
        
        //set interval
        function startTimer(){
            timer = setInterval(function(){
                counter.current++;
                next();
            },setting.turn);
        }
        
        //clear interval
        function clearTimer(){
            clearInterval(timer)
        }
    }
    
	$(document).ready(function($){
		if( !document.outer_slider ){
			$('.outer_slider').loopSlider({
				autoMove : true,
				mouseOnStop : true,
				turn : 9000,
				motion : 'swing',
				delay: 500,
				width : 750,
				height : 500,
				marginLR : 5,
				viewSize : 100,
				viewOverflow : 'visible',
				navPositionBottom : 30,
				navibotton : true,
				navbtnImage : ''
			});					
			document.outer_slider = true;
		}	
	});
    
})(jQuery);