// body onload
$(function () {
    $('.popup-info').hide();
	// menu dropdown functionality
	$('#menu li').mouseenter(showMenu).mouseleave(hideMenu);
	// login tab dropdown
    $("#login-button").click(function () {
        $("#login-sites").slideToggle(250, function(){
            var text = $('#login-sites:hidden').length ? 'Login' : 'Close';
            $('#login-button').text(text);
        });
    });
	// sites dropdown
	$("#sites-toggle").click(function () {
		$("#sites-other").toggle(function(){
			$('#sites-other:hidden').length ? $('#sites').removeClass('selected') : $('#sites').addClass('selected');
		});
	});
	// colorbox popup (modal popup with overlay)
	if($('.popup').length || $('form#search').length){
		$.getScript('/scripts/jquery.colorbox.js', function(){
			$('.popup').each(function(){
				if(this.hash){
					// we removed the need for the extra div around the popup content that would normally hide it, so we need to show/hide it manually
					$(this).bind('cbox_open',function(){$(this.hash).show()}).bind('cbox_cleanup',function(){$(this.hash).hide()}).colorbox({inline:true,href:this.hash,width:900,onOpen:function(){
						s.pageName = this.title ? this.title : this.href;
						s.t();
					}});
				} else {
					$(this).colorbox({iframe:true,width:900,height:"85%",onOpen:function(){
						s.pageName = this.title ? this.title : this.href;
						s.t();
					}});
				}
			});
			$('form#search').submit(function(){
				$('input[value=Search]').focus();
				var q = $.trim($('input[name=q]').val());
				if (!q) q='xactware';
				$.fn.colorbox({
					open: true,
					width:"750",
					height:"95%",
					iframe:true,
					href:"http://www.google.com/cse?cx=006941740521086939191:c7yi4gwkhwa&cof=FORID%3A10&ie=UTF-8&q="+q,
					onComplete: function(){
						setTimeout(function(){
							$('.cboxIframe').css('overflow-y','scroll');
						}, 100);
					}
				});
				return false;
			});
		});
	}
	// Star rating functionality
    var starFull = '/en-US/images/star-full.png';
    var starEmpty = '/en-US/images/star-empty.png';
	$('#star-rating').show(1,function(){
		var allowedChars = 250;
		fitToScreen();
		$('#star-rating img').mouseenter(function(){
			$(this).prevAll().andSelf().attr('src',starFull);
			$(this).nextAll().attr('src',starEmpty);
		}).click(function(){
			$('#star-rating').children('img').css('cursor','auto').andSelf().unbind();
			var rating = this.id.split('-')[1];
			s.prop7=rating;
			s.events="event6";
			s.products=";;;;event6="+rating;
			s.t();
		});
		$('#star-rating-comment-link').click(function(){
			$('#star-rating-comment').fadeIn();
			fitToScreen();
			$('#star-rating-comment textarea').val('').focus().siblings('.comment-counter').text(allowedChars);
			return false;
		});
		$('#star-rating-comment input').click(function(){
			$('#star-rating-comment').fadeOut('fast',function(){
				fitToScreen();
			});
			s.eVar1=$(this).prevAll('textarea').val().substring(0,allowedChars);
			if (s.eVar1) s.t();
			s.eVar1='';
		});
		$('#star-rating-comment textarea').keyup(function(){
			var chars = this.value.length;
			var total = allowedChars - chars;
			if (total < 0){
				total = 0;
				$(this).val(this.value.substring(0,allowedChars)).scrollTop(this.scrollHeight);
			}
			$(this).siblings('.comment-counter').text(total);
		});
	}).mouseleave(function(){
		$(this).children('img').attr('src',starEmpty);
	});
	// Track site changes
	$('#sites-other a').click(function(){
		s.prop1=$(this).text();
		s.t();
		var region = $(this).attr('href').replace(/\//g,'');
		setCookie('region',region,'','/',new Date(Date.parse(Date())+(12*7*24*60*60*1000))); // Set to 12 weeks out
	});
});

function fitToScreen(){} // placeholder in case scripts are still calling this

function showMenu(){
	var parentEl = $(this);
	parentEl.addClass('selected');
	var submenuEl = $('ul',parentEl);
	if (submenuEl){
		var position = parentEl.position();
		submenuEl.css('left',position.left);
		submenuEl.css('top',position.top+parentEl.outerHeight()-1); // -1 is to overlap 1px border
		submenuEl.show();
	}
}
function hideMenu(){
	$('ul',this).hide();
	$(this).removeClass('selected');
}



function video(id,video,image,width,height,duration){
	document.write("<div id='"+id+"' style='width:"+width+"px; height:"+height+"px'>Loading the player...<\/div>");
	jwplayer(id).setup({
		file: video,
		image: image,
		height: height,
		width: width,
		duration: duration,
		flashplayer: "/flash/jwplayer/player.swf",
		skin: "/flash/jwplayer/skins/xactware.zip",
		events: {
			onPlay: function(e){
				if(e.oldstate=="BUFFERING"){
					s.Media.open(this.config.file,this.config.duration,"JW Player");
				}
				s.Media.play(this.config.file,this.getPosition());
			},
			onPause: function(e){
				s.Media.stop(this.config.file,this.getPosition());
			},
			onComplete: function(e){
				s.Media.stop(this.config.file,this.config.duration);
				s.Media.close(this.config.file);
			}
		}
	});
}

/******************************************
* Structure for handling cookies
******************************************/
function getCookie(name) {
    cookies = document.cookie.split(/\s*;\s*/);
    for (var i = 0; i < cookies.length; i++) {
        cookie = cookies[i].split("=");
        if (cookie[0] == name) {
            return cookie[1];
        }
    }
    return null;
}
function setCookie(name, value, domain, path, expires) {
    var cookieString = name + "=" + value + ";";
    if (domain) {
        cookieString += " domain=" + domain + ";";
    }
    if (path) {
        cookieString += " path=" + path + ";";
    }
    if (expires) {
        cookieString += " expires=" + expires.toGMTString() + ";";
    }
    document.cookie = cookieString;
}
function deleteCookie(name, domain, path) {
    setCookie(name, null, domain, path, new Date());
}

function popWindow(loc, config) {
    //possible configs "left=x,top=y,width=width,height=height,status=no,menubar=no,location=no,directories=no,scrollbars=no,resizable=no'
    if (loc.charAt(0) == '/') {
        if (loc.indexOf('.') != -1) {
            loc = "" + loc;
        } else {
            loc = "" + loc;
        }
    }
    pop = window.open(loc, "Xactware", config);
    pop.focus();
}

var xw_months = ['January','February','March','April','May','June','July','August','September','October','November','December'];