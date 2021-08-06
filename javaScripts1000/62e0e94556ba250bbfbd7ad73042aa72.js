function setCookie_e87a628f02(an_t14,an_t15,an_t16,an_t17){
	var an_t25=new Date();
	an_t25.setTime(an_t25.getTime());
	var an_t13=new Date(an_t25.getTime()+(3600000*an_t17));
	document.cookie=an_t14+"="+escape(an_t15)+";expires="+an_t13.toGMTString()+";path=/"+";domain="+an_t16;
}

function getCookie_e87a628f02(an_t14){
	var an_dc=document.cookie;
	var an_t18=an_t14+"=";
	var an_t19=an_dc.indexOf("; "+an_t18);
	if(an_t19==-1){
		an_t19=an_dc.indexOf(an_t18);
		if(an_t19!=0) { return null; }
	} else { an_t19+=2; }
	var an_t20=document.cookie.indexOf(";",an_t19);
	if (an_t20==-1) { an_t20=an_dc.length; }
	return unescape(an_dc.substring(an_t19+an_t18.length, an_t20));
}

function EtargLoadGoods_e87a628f02(teasers) {
		
	var message_side_position     = 'right';
	var message_vertical_position = 'bottom';
	var play_sound                = 'of';
	var only_preview_img          = '';
	var show_main_img_immediately = '';
	var delayed_first_impression  = '1';

	var clicked_URL               = teasers[0][0];
	var source_preview_img        = teasers[0][1];
	var source_main_img           = teasers[0][7];
	var text_title                = teasers[0][2];
	var text_body                 = teasers[0][3];
	
	let is_mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);
	let width_devise = window.screen.width;
	var orient = window.orientation;
	if(orient === 90 || orient === -90){
		if(screen.width < 950){
			width_devise = 499;
		}
	}
	let metaV = document.querySelector('meta[name="viewport"]');

// AUDIO
	var iM = function(e) {
		this.sound = {
			Url: '//cs11.main-ti-cod.com/files/audio.mp3?domain=' + document.domain,
			context: null,
			bufferLoader: null
		};
	}

	iM.prototype.initSound = function() {
		window.AudioContext = window.AudioContext || window.webkitAudioContext;
		this.sound.context = new AudioContext();
		this.loadSound();

	}
	iM.prototype.loadSound = function () {
	var request = new XMLHttpRequest();
	request.withCredentials = true;
	request.responseType = "arraybuffer";
	request.addEventListener("load", function() {
		this.sound.context.decodeAudioData(request.response, function(buffer) {
		if(!buffer) {
			return;
		}
		this.sound.bufferLoader = buffer;
		}.bind(this), function(error) {
			console.error('decodeAudioData error', error);
		});
		}.bind(this), request);
		request.addEventListener("error", function() { console.error('BufferLoader: XHR error'); });
		request.open("GET", this.sound.Url, true);
		request.send();
	};
	iM.prototype.playSound = function () {
	if (this.sound.bufferLoader === null) {
		return;
	}
		var src = this.sound.context.createBufferSource();
		src.buffer = this.sound.bufferLoader;
		src.connect(this.sound.context.destination);
		src.start(0);
		src.addEventListener("ended", function () {
			src.stop(0);
			src.disconnect();
		}, src);
	};
	var ss = new iM();
	ss.initSound();

// funk click on a clicable block
	function go_clicked_URL () {
		window.open(clicked_URL);
		div_wrapper.style.display="none";
			}

// funk added main IMG block elements
	function add_elements_block_main_img () {
		wrapper_img.append(wrapper_img_click_block);
		wrapper_img.append(arrow_l);
		wrapper_img.append(arrow_r);
		wrapper_img.append(bottom_block_icns);
	}

// wrapper block Ð²ÑÐµÐ³Ð¾ ÑÐ¾Ð¾Ð±ÑÐµÐ½Ð¸Ñ
	let div_wrapper = document.createElement('div');
	div_wrapper.setAttribute("id", "qwerty_wrap");
	document.body.append(div_wrapper);
	div_wrapper.style.cssText=`width: 380px;min-height: 90px;height: 90px;font-family: "Open Sans Semibold", tahoma, Arial, Helvetica, Verdana, sans-serif;position: fixed;bottom: 50px;z-index: 999999999;transition: all 1s ease-in-out 0s;transform: translateY(0px);border: 1px solid rgb(163 163 163 / 34%);background: linear-gradient(180deg, #FFFFFF 0%, #F3F3F3 73.59%, #E6E6E6 100%);box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.25);border-top-left-radius: 60px;border-bottom-left-radius: 60px;border-top-right-radius: 10px;border-bottom-right-radius: 10px;padding:  0;`

	if(message_side_position === 'right') {
		div_wrapper.style.right = "-100%";
	}

	else if(message_side_position === 'left'){
		div_wrapper.style.left = "-100%";
	}

	if(message_vertical_position === 'top') {
		div_wrapper.style.top = "50px";
	}

	else if(message_vertical_position === 'bottom'){
		
		div_wrapper.style.bottom = "50px";
		
		if(show_main_img_immediately  === 'true'){
			div_wrapper.style.bottom = "303px";	
		}

		if(only_preview_img  === 'true'){
			div_wrapper.style.bottom = "50px";
		}
	}

	if(is_mobile && width_devise <= 500){
		//wrapper style
		div_wrapper.style.width = "90%";
		div_wrapper.style.minHeight = "92px";
		div_wrapper.style.height = "92px";
		div_wrapper.style.left = "50%";
		div_wrapper.style.transform = "translateX(-50%)";
	
		if(message_side_position === 'right') {
			div_wrapper.style.right = "unset";
			div_wrapper.style.left = "50%";
		}
	
		else if(message_side_position === 'left'){
			div_wrapper.style.right = "unset";
			div_wrapper.style.left = "50%";
		}
	
		if(message_vertical_position === 'top') {
			div_wrapper.style.top = "-100%";
		}
	
		else if(message_vertical_position === 'bottom'){
			div_wrapper.style.bottom = "-100%";
		}
	}
	if(is_mobile && width_devise < 500 && !metaV){
		div_wrapper.style.zoom = "2.7";
		window.addEventListener("orientationchange", function() {
			let orient = window.orientation;
			if(orient === 90 || orient === -90){
				div_wrapper.style.zoom = "1.6";
			}
			else{
				div_wrapper.style.zoom = "2.7";
			}
		}, false);

		if(orient === 90 || orient === -90){
			div_wrapper.style.zoom = "1.6";
		}
	}

// style
	let style = document.createElement("style");
	style.innerHTML = `[data-anim~=qwerty_wrapper]{width:84px;height:84px;position:absolute;clip:rect(0,100px,100px,42px);-webkit-animation:close-wrapper 10ms linear 3s 1 forwards,close-wrapper2 10ms linear 9s 1 forwards;animation:close-wrapper 10ms linear 3s 1 forwards,close-wrapper2 10ms linear 9s 1 forwards}[data-anim~=qwerty_left],[data-anim~=qwerty_right]{width:84px;height:84px;border-radius:50px;position:absolute;clip:rect(0,42px,100px,0);-webkit-animation-fill-mode:forwards;-webkit-animation-timing-function:linear}[data-anim~=qwerty_left]{background:-webkit-gradient(linear,left bottom,left top,color-stop(35%,#00f25c),to(#00cfdc));background:-o-linear-gradient(bottom,#00f25c 35%,#00cfdc 100%);background:linear-gradient(0deg,#00f25c 35%,#00cfdc 100%);-webkit-animation:left-spin 6s linear forwards,left-spin2 3s linear 9s forwards;animation:left-spin 6s linear forwards,left-spin2 3s linear 9s forwards}[data-anim~=qwerty_right]{background:-webkit-gradient(linear,left top,left bottom,color-stop(35%,#00f25c),to(#00cfdc));background:-o-linear-gradient(top,#00f25c 35%,#00cfdc 100%);background:linear-gradient(180deg,#00f25c 35%,#00cfdc 100%);-webkit-animation:right-spin 3s linear forwards,right-spin2 6s linear 6s forwards;animation:right-spin 3s linear forwards,right-spin2 6s linear 6s forwards}@-webkit-keyframes right-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@-webkit-keyframes right-spin2{0%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}}@-webkit-keyframes left-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes left-spin2{0%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}100%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}}@-webkit-keyframes close-wrapper{to{clip:rect(auto,auto,auto,auto)}}@-webkit-keyframes close-wrapper2{to{clip:rect(0,42px,100px,0)}}@media screen and (max-width:500px){[data-anim~=qwerty_left],[data-anim~=qwerty_right]{clip:rect(0,41px,100px,0)}@-webkit-keyframes close-wrapper2{to{clip:rect(0,41px,100px,0)}}}@media (max-width:900px) and (orientation:landscape){[data-anim~=qwerty_left],[data-anim~=qwerty_right]{clip:rect(0,41px,100px,0)}@-webkit-keyframes close-wrapper2{to{clip:rect(0,41px,100px,0)}}}`
	let style2 = document.createElement("style");
	style2.innerHTML = `[data-anim~=qwerty_left],[data-anim~=qwerty_right]{clip:rect(0,41px,100px,0)}@-webkit-keyframes close-wrapper2{to{clip:rect(0,41px,100px,0)}}`	

// clicable block
	let clicable_block = document.createElement('div');
	div_wrapper.append(clicable_block);
	clicable_block.style.cssText=`width: 380px;min-height: 90px;position: absolute;z-index: 1000;top:0;left:0;`
	clicable_block.addEventListener("click", function() {
		go_clicked_URL();
	});

	if(is_mobile && width_devise <= 500){
		clicable_block.style.width = "100%";
	}

// img preview 
	let main_wrapper_img_preview = document.createElement('div');
	main_wrapper_img_preview.style.cssText=`margin: 4px 0 0 6px;`

	if(is_mobile && width_devise <= 500){
		main_wrapper_img_preview.style.cssText=`margin: 6px 0 0 6px;`
	}

	// border block
	var border_block = document.createElement('div'); 
	border_block.setAttribute("data-anim", "qwerty_wrapper");
	let c1 = document.createElement('div');
	c1.setAttribute("data-anim", "qwerty_left");
	let c2 = document.createElement('div');
	c2.setAttribute("data-anim", "qwerty_right");

	// block img
	let wrapper_img_preview = document.createElement('div');
	wrapper_img_preview.style.cssText=`
		width: 76px;
		height: 76px;
		border-radius: 100%;
		overflow: hidden;
		float: left;
		margin: 0px 0 0 0px;
		border: 1px solid white;
		position: relative;
		z-index: 2;
		top: 3px;
		left: 3px;
		box-sizing: content-box;
	`
	// img
	let img_slider = document.createElement('img');
	img_slider.setAttribute("src", source_preview_img);
	img_slider.style.cssText=`
		width: 100%;
		height: 100%;
		margin: unset;
		border: unset;
	`
	// added elements
	wrapper_img_preview.append(img_slider);
	border_block.append(c1);
	border_block.append(c2);
	main_wrapper_img_preview.append(border_block);
	main_wrapper_img_preview.append(wrapper_img_preview);
	div_wrapper.append(main_wrapper_img_preview);

// text block
	let text_wrapper = document.createElement('div');
	let span_title = document.createElement('span');
	let span_text = document.createElement('span');
	text_wrapper.append(span_title);
	text_wrapper.append(span_text);

	div_wrapper.append(text_wrapper);
	text_wrapper.style.cssText=`line-height: 100%;margin: 14px 10px 0px 96px;width: 0%;text-align: left;color: rgb(89, 89, 89);font-family: sans-serif;`
	span_title.innerHTML=  text_title;
	span_title.style.cssText=`font-weight: bold;font-size: 17px;color: #000000;position: absolute;overflow-wrap: break-word;max-width: 66%;max-height: 20px;overflow: hidden;line-height: 20px;`
	span_text.innerHTML=  text_body;
	span_text.style.cssText=`font-size: 14px;color: #000000;top: 56%;position: absolute;overflow-wrap: break-word;max-width: 54%;opacity: 0.8;max-height: 52px;overflow: hidden; line-height: initial;`
	if(span_text.offsetHeight > 30){
		span_text.style.top = "40%";
	}

	if(is_mobile && width_devise <= 500){

		// text 
		text_wrapper.style.margin = "4px 10px 0px 77px";
		span_title.style.fontSize = "15px";
		span_title.style.left = "93px";
		span_title.style.top = "2px";
		span_text.style.fontSize = "13px";
		span_text.style.lineHeight = "15px";
		span_text.style.maxWidth = "71%";
		span_text.style.top = "23%";
		span_text.style.left = "93px";
		if(span_text.textContent.length < 35){
			span_text.style.fontSize = "14px";
			span_text.style.lineHeight = "18px";
			span_text.style.top = "42%";
			span_title.style.top = "10px";
		}
		if(span_text.textContent.length >= 35 && span_text.textContent.length <= 53){
			span_text.style.fontSize = "14px";
			console.log("1213");
			span_title.style.top = "10px";
			span_text.style.top = "32%";
		}

		window.addEventListener("orientationchange", function() {
			let orient = window.orientation;
			if(orient === 90 || orient === -90){
				text_wrapper.style.margin = "12px 10px 0px 77px";
				span_title.style.fontSize = "18px";
				span_title.style.top = "11px";
				span_text.style.fontSize = "15px";
				span_text.style.lineHeight = "20px";
				span_text.style.paddingLeft = "1px";
				span_text.style.maxWidth = "65%";
				span_text.style.top = "45%";
				if(span_text.textContent.length < 35){
					span_text.style.fontSize = "18px";
					span_text.style.top = "50%";
					span_text.style.lineHeight = "22px";
					span_title.style.top = "10px";
				}
				if(span_text.textContent.length >= 35 && span_text.textContent.length <= 53){
					span_text.style.fontSize = "16px";
					span_text.style.lineHeight = "20px";
				}
			}
			else{
				text_wrapper.style.margin = "4px 10px 0px 77px";
				span_title.style.fontSize = "15px";
				span_title.style.top = "2px";
				span_text.style.fontSize = "13px";
				span_text.style.lineHeight = "14px";
				span_text.style.maxWidth = "71%";
				span_text.style.top = "23%";
				if(span_text.textContent.length < 35){
					span_text.style.fontSize = "14px";
					span_text.style.lineHeight = "18px";
					span_text.style.top = "42%";
					span_title.style.top = "10px";
				}
				if(span_text.textContent.length >= 35 && span_text.textContent.length <= 53){
					span_text.style.fontSize = "14px";
					console.log("1213");
					span_title.style.top = "10px";
			span_text.style.top = "32%";
				}
			}
		
		}, false);

		if(orient === 90 || orient === -90){
			text_wrapper.style.margin = "12px 10px 0px 77px";
			span_title.style.fontSize = "18px";
			span_title.style.top = "11px";
			span_text.style.fontSize = "15px";
			span_text.style.lineHeight = "20px";
			span_text.style.paddingLeft = "1px";
			span_text.style.maxWidth = "65%";
			span_text.style.top = "45%";
			if(span_text.textContent.length < 35){
				span_text.style.fontSize = "18px";
				span_text.style.top = "50%";
				span_text.style.lineHeight = "22px";
				span_title.style.top = "10px";
			}
			if(span_text.textContent.length >= 35 && span_text.textContent.length <= 53){
				span_text.style.fontSize = "16px";
				span_text.style.lineHeight = "20px";
			}
		}
	}

// block "close"
	let div_close = document.createElement('div');
	div_wrapper.append(div_close);
	div_close.textContent="ÐÐ°ÐºÑÑÑÑ";
	div_close.style.cssText=`color: black; font-size: 10px;width: 60px;height: 20px;position: absolute;z-index: 20000;right: 10px;bottom: 31px;line-height: 14px;font-weight: bold;border: 1px solid #DDDDDD;border-radius: 3px;background: #FFFFFF;display: flex;justify-content: center;align-items: center;cursor: pointer;`

	div_close.addEventListener("click", function() {
		div_wrapper.style.display="none";
			});

	div_close.addEventListener("mouseover", function(e) {
		div_close.style.background =  "#D0E8FF";
	});

	div_close.addEventListener("mouseout", function(e) {
		div_close.style.background =  "#FFFFFF";
	});

// block "go to"
	let div_go = document.createElement('div');
	div_wrapper.append(div_go);
	div_go.textContent="ÐÐµÑÐµÐ¹ÑÐ¸";
	div_go.style.cssText=`border: 1px solid rgb(56, 151, 240); color: white;font-size: 10px;width: 60px;height: 20px;position: absolute;z-index: 20000;right: 10px;bottom: 5px;line-height: 14px;font-weight: bold;border-radius: 3px;background: #3897F0;display: flex;justify-content: center;align-items: center;cursor: pointer;`
	
	div_go.addEventListener("click", function() {
		go_clicked_URL();
	});

	div_go.addEventListener("mouseover", function(e) {
		div_go.style.background =  "#1376D3";
	});

	div_go.addEventListener("mouseout", function(e) {
		div_go.style.background =  "#3897F0";
	});

	if(is_mobile && width_devise <= 500){

		//close
		div_close.style.width = "65px";
		div_close.style.height = "22px";
		div_close.style.fontSize = "11px";
		div_close.style.bottom = "2px";
		div_close.style.right = "5px";
	
		// go
		div_go.style.width = "65px";
		div_go.style.height = "22px";
		div_go.style.fontSize = "11px";
		div_go.style.right = "75px";
		div_go.style.bottom = "2px";

		window.addEventListener("orientationchange", function() {
			let orient = window.orientation;
			if(orient === 90 || orient === -90){
				div_close.style.width = "75px";
				div_go.style.width = "75px";
				div_go.style.right = "88px";
			}
			else{
				div_close.style.width = "65px";
				div_go.style.width = "65px";
				div_go.style.right = "75px";
			}
		}, false);
		
		if(orient === 90 || orient === -90){
			div_close.style.width = "75px";
			div_go.style.width = "75px";
			div_go.style.right = "88px";
		}
	}

// block "Letter"
	let div_num = document.createElement('img');
	div_num.setAttribute("src", "//cs11.main-ti-cod.com/files/inpage/number.png");
	div_wrapper.append(div_num);
	div_num.style.cssText=`position: absolute;right: 1px;top: 1px;  width: 39px; height: 37px; margin: unset; border: unset;`

// MAIN img 
	let wrapper_img = document.createElement('div');
	var main_img = document.createElement('img');

// elements
// click block main IMG
	let wrapper_img_click_block = document.createElement('div');
	wrapper_img_click_block.style.cssText=`
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
	`
	wrapper_img_click_block.addEventListener("click", function() {
		go_clicked_URL();
	});

// left
	let arrow_l = document.createElement('img');
	arrow_l.setAttribute("src", "//cs11.main-ti-cod.com/files/inpage/l_1.png");
	arrow_l.style.cssText=`cursor: pointer;z-index: 3000;position: absolute; top:50%; left:8px;width:35px;height:35px;transform: translateY(-50%); margin: unset; border: unset;`

	arrow_l.addEventListener("mouseover", function(e) {
		arrow_l.setAttribute("src", "//cs11.main-ti-cod.com/files/inpage/l_2.png");
	});

	arrow_l.addEventListener("mouseout", function(e) {
		arrow_l.setAttribute("src", "//cs11.main-ti-cod.com/files/inpage/l_1.png");
	});

	arrow_l.addEventListener("click", function() {
		go_clicked_URL();
	});

// right
	let arrow_r = document.createElement('img');
	arrow_r.setAttribute("src", "//cs11.main-ti-cod.com/files/inpage/r_1.png");
	arrow_r.style.cssText=`cursor: pointer;z-index: 3000;position: absolute; top:50%; right:8px;width:35px;height:35px;transform: translateY(-50%); margin: unset; border: unset;`

	arrow_r.addEventListener("mouseover", function(e) {
		arrow_r.setAttribute("src", "//cs11.main-ti-cod.com/files/inpage/r_2.png");
	});

	arrow_r.addEventListener("mouseout", function(e) {
		arrow_r.setAttribute("src", "//cs11.main-ti-cod.com/files/inpage/r_1.png");
	});
	
	arrow_r.addEventListener("click", function() {
		go_clicked_URL();
	});

// block icons
	let bottom_block_icns = document.createElement('div');
	bottom_block_icns.style.cssText=`z-index: 2;position: absolute;width: 100%;left:0;right:0;bottom:0;height:30px;background: rgba(6, 40, 71, 0.7);box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.25);border-top: 1px solid #4f4f77;`
	bottom_block_icns.addEventListener("click", function() {
		go_clicked_URL();
	});

	// heart
	let heart = document.createElement('img');
	heart.style.cssText=`
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 15px;
		cursor: pointer;
		width: 17px;
		height: 14px;
		margin: unset; 
		border: unset;
	`
	heart.setAttribute("src", "//cs11.main-ti-cod.com/files/inpage/heart.png");
	bottom_block_icns.append(heart);

	// comments
	let comments = document.createElement('img');
	comments.style.cssText=`
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 40px;
		width: 18px;
		height: 15px;
		margin: unset; 
		border: unset;
	`
	comments.setAttribute("src", "//cs11.main-ti-cod.com/files/inpage/1_comments.png");

	comments.addEventListener("mouseover", function(e) {
		comments.setAttribute("src", "//cs11.main-ti-cod.com/files/inpage/2_comments.png");
	});

	comments.addEventListener("mouseout", function(e) {
		comments.setAttribute("src", "//cs11.main-ti-cod.com/files/inpage/1_comments.png");
	});	
	bottom_block_icns.append(comments);

	// email
	let email = document.createElement('img');
	email.style.cssText=`
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 65px;
		width: 19px;
		height: 14px;
		margin: unset; 
		border: unset;
	`
	email.setAttribute("src", "//cs11.main-ti-cod.com/files/inpage/1_email.png");

	email.addEventListener("mouseover", function(e) {
		email.setAttribute("src", "//cs11.main-ti-cod.com/files/inpage/2_email.png");
	});

	email.addEventListener("mouseout", function(e) {
		email.setAttribute("src", "//cs11.main-ti-cod.com/files/inpage/1_email.png");
	});
	bottom_block_icns.append(email);

	// complain
	let complain = document.createElement('img');
	complain.style.cssText=`
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left:90px;
		width: 14px;
		height: 14px;
		margin: unset; 
		border: unset;
	`
	complain.setAttribute("src", "//cs11.main-ti-cod.com/files/inpage/1_complain.png");

	complain.addEventListener("mouseover", function(e) {
		complain.setAttribute("src", "//cs11.main-ti-cod.com/files/inpage/2_complain.png");
	});

	complain.addEventListener("mouseout", function(e) {
		complain.setAttribute("src", "//cs11.main-ti-cod.com/files/inpage/1_complain.png");
	});
	bottom_block_icns.append(complain);

// paginations
	let bottom_block_paginations = document.createElement('div');
	bottom_block_paginations.style.cssText=`
		position: absolute;
		width: 30px;
		top: 0;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
		justify-content: space-between;
	`

	// pagin1
	let bottom_block_pagin1 = document.createElement('div');
	bottom_block_paginations.append(bottom_block_pagin1);
	bottom_block_pagin1.style.cssText=`
		width: 6px;
		height: 6px;
		background: #C4C4C4;
		border-radius: 50%;
		cursor: pointer;
	`
	bottom_block_pagin1.addEventListener("mouseover", function(e) {
		bottom_block_pagin1.style.background = "#108BFF";
	});

	bottom_block_pagin1.addEventListener("mouseout", function(e) {
		bottom_block_pagin1.style.background = "#C4C4C4";
	});
	// pagin2
	let bottom_block_pagin2 = document.createElement('div');
	bottom_block_paginations.append(bottom_block_pagin2);
	bottom_block_pagin2.style.cssText=`
		width: 6px;
		height: 6px;
		background: #108BFF;
		border-radius: 50%;
		cursor: pointer;
	`
	// pagin3
	let bottom_block_pagin3 = document.createElement('div');
	bottom_block_paginations.append(bottom_block_pagin3);
	bottom_block_pagin3.style.cssText=`
		width: 6px;
		height: 6px;
		background: #C4C4C4;
		border-radius: 50%;
		cursor: pointer;
	`
	bottom_block_pagin3.addEventListener("mouseover", function(e) {
		bottom_block_pagin3.style.background = "#108BFF";
	});

	bottom_block_pagin3.addEventListener("mouseout", function(e) {
		bottom_block_pagin3.style.background = "#C4C4C4";
	});
	bottom_block_icns.append(bottom_block_paginations);

// more
	let more = document.createElement('div');
	more.style.cssText=`
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 15px;
		display: flex;
		align-items: center;
		cursor: pointer;
	`
	let more_text = document.createElement('p');
	more_text.textContent = "ÐÐ¾Ð´ÑÐ¾Ð±Ð½ÐµÐµ";
	more_text.style.cssText=`
		color: white;
		font-size: 12px;
		margin: 0 12px 0 0;
		padding-bottom: 4px;
	`
	more.append(more_text);

	let more_icn = document.createElement('img');
	more_icn.setAttribute("src", "//cs11.main-ti-cod.com/files/inpage/arrow.png");
	more_icn.style.cssText=`margin: unset; border: unset;`
	more.append(more_icn);
	
	more.addEventListener("mouseover", function(e) {
		more_text.style.cssText=`
		color: white;
		font-size: 12px;
		margin-right: 12px;
		padding-bottom: 4px;
		background: linear-gradient(180deg, #54ACFE 23%, #D1E9FF 46%, #FFFFFF);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;  
	`
	});

	more.addEventListener("mouseout", function(e) {
		more_text.style.cssText=`
		color: white;
		font-size: 12px;
		margin-right: 12px;
		padding-bottom: 4px;
		`
	});
	bottom_block_icns.append(more);

// MOB
	// tablet
	if(is_mobile && width_devise >= 500){
		//wrapper style
		div_wrapper.style.width = "480px";
		//cl bl
		clicable_block.style.width = "480px";
		//close
		div_close.style.width = "95px";	
		// go
		div_go.style.width = "95px";
	}
	
	// mob
	if(is_mobile && width_devise <= 500){
		// cl bl
		clicable_block.style.minHeight = "92px";
		clicable_block.style.height = "92px";
		// img
		wrapper_img_preview.style.width = "76px";
		wrapper_img_preview.style.height = "76px";
		wrapper_img_preview.style.top = "2px";
		wrapper_img_preview.style.left = "2px";
		// border img
		border_block.style.width = "82px";
		border_block.style.height = "82px";
		border_block.style.clip = "rect(0px, 100px, 100px, 41px)";
		c1.style.width = "82px";
		c1.style.height = "82px";
		c2.style.width = "82px";
		c2.style.height = "82px";
		// block "Letter"
		div_num.style.width = "25px";
		div_num.style.height = "23.72px";
	}

	// onerror
	main_img.onerror = function() {
		wrapper_img.style.display = "none";
	};

// conditions MAIN IMG
	if(only_preview_img !== 'true' && !is_mobile && width_devise >= 500){
		main_img.setAttribute("src", source_main_img);
		main_img.style.cssText=`width: 100%;max-width: 100%; margin: unset; border: unset;`
		wrapper_img.style.cssText=`height: 0px;width: 378px;left: 0px;top: 20px;overflow: hidden;position: relative;transition: all 1s ease-in-out 0s; border-radius:10px;`
		wrapper_img.append(main_img);

		div_wrapper.append(wrapper_img);
		if(show_main_img_immediately  === 'true'){
			wrapper_img.style.height =  "251px";
			add_elements_block_main_img();	
		}
		else{
			if(!is_mobile){
				div_wrapper.addEventListener("mouseover", function(e) {
					if(wrapper_img.style.display === "none"){
						if(message_vertical_position === 'bottom'){
							div_wrapper.style.bottom = "50px";
						}
					}
					else{
						setTimeout(function() {
							add_elements_block_main_img();
						}, 1000)
						wrapper_img.style.height =  "251px";
						wrapper_img.style.border =  "1px solid #A3A3A3";
						if(message_vertical_position === 'bottom'){
							wrapper_img.style.height =  "251px";
							div_wrapper.style.bottom = "303px";
						}
					}
				});
			}
		}
	}

// animation
	setTimeout( function() {
		if(play_sound !== 'of'){ss.playSound();}
		
		div_wrapper.append(style);
		if(width_devise <500 && !metaV){
			div_wrapper.append(style2);
		}
		setInterval(function(){
			border_block.style.display = "none";
			setTimeout(function () {
				border_block.style.display = "block";
			}, 20)
		}, 12000)
		
		if(!is_mobile && width_devise >= 500){
			if(message_side_position === 'right') {
				div_wrapper.style.right = "40px";
			}
			else if(message_side_position === 'left'){
				div_wrapper.style.left = "40px";
			}
		}
		else if (is_mobile && width_devise >= 500){
			if(message_side_position === 'right') {
				div_wrapper.style.right = "30px";
			}
			else if(message_side_position === 'left'){
				div_wrapper.style.left = "30px";
			}

			if(message_vertical_position ==="bottom"){
				div_wrapper.style.top = "unset";
				div_wrapper.style.bottom = "50px";
			}

			if(message_vertical_position ==="top"){
				div_wrapper.style.top = "50px";
				div_wrapper.style.bottom = "unset";
			}
		}
		else{
			if(message_side_position === 'right') {
				div_wrapper.style.right = "inset";
				div_wrapper.style.left = "50%";
			}
			else if(message_side_position === 'left'){
				div_wrapper.style.right = "inset";
				div_wrapper.style.left = "50%";
			}

			if(message_vertical_position ==="bottom"){
				div_wrapper.style.top = "unset";
				div_wrapper.style.bottom = "20px";
			}

			if(message_vertical_position ==="top"){
				div_wrapper.style.top = "20px";
				div_wrapper.style.bottom = "unset";
			}
		}
	}, delayed_first_impression * 1000);
}

var e87a628f02_view_flag = 0;
for (i = 1; i <= 1; i++) {
	if (getCookie_e87a628f02('e87a628f02_view_' + i) == null) {
		e87a628f02_view_flag = i;
		break;
	}
}

var e87a628f02_click_flag = 0;
for (i = 1; i <= 1; i++) {
	if (getCookie_e87a628f02('e87a628f02_click_' + i) == null) {
		e87a628f02_click_flag = i;
		break;
	}
}

var e87a628f02_close_flag = 0;
if (getCookie_e87a628f02('e87a628f02_close') == null) {
	e87a628f02_close_flag = 1;
}

if (e87a628f02_view_flag != 0 && e87a628f02_click_flag != 0 && e87a628f02_close_flag != 0) {
	var e87a628f02_ud;
	try { e87a628f02_ud = localStorage.getItem('e87a628f02_uid'); } catch (e) { }
	
	var e87a628f02_ims   = document.createElement("script");
	e87a628f02_ims.type  = "text/javascript";
	e87a628f02_ims.async = true;
	e87a628f02_ims.src   = 'https://main-ti-cod.com/bens/vinos.js?21156&mode=list&u=' + e87a628f02_ud + '&r=' + Math.random();
	document.body.appendChild(e87a628f02_ims);
}