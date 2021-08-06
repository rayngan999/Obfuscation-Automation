$(function () {
	var jmenu = $.fn.jui.menu;

	/** ë°°ë ê´ë¦¬ **/
	var bnrCtl			= {},
		bnrNavButtons	= $('div.popup .control .link button'),
		bnrCtlButtons	= $('div.popup .control .btn_control button'),
		bnrBotton;

	// ë°°ë ì¬ë¼ì´ë ì²ë¦¬
	var chgNavFocus	= function (popZone) {

			var dspNo	= popZone.find('li').index(popZone.find('.slide-display'));
			popZone.find('li').css("display", "none");

			$("#pop" + dspNo).css("display", "block");
			$("#pop" + dspNo).addClass('slide-display');

			bnrNavButtons.removeClass('active');
			bnrNavButtons.eq(dspNo).addClass('active');
		},
		popZone	= $('div.popup > ul').juiSlide({
		'slideAnimate'	: 'tick',
		'control'		: bnrCtl,
		'showWrap'		: function (fnc, idx, callbacks) {
			fnc.call(this, idx, callbacks);
			chgNavFocus(popZone);
		},
		'prevWrap'		: function (prev, callbacks) {
			prev.call(this, callbacks)
			chgNavFocus(popZone);
		},
		'nextWrap'		: function (next, callbacks) {
			next.call(this, callbacks)
			chgNavFocus(popZone);
		}
	});

	// ë°°ë Navigation ë²í¼
	bnrNavButtons.bind('click', function () { bnrCtl.show(bnrNavButtons.index(this)) });

	// ì»¨í¸ë¡¤ ê°ì²´ë¥¼ ì´ì©í ë°°ë ì»¨í¸ë¡¤
	bnrCtlButtons.bind('click', function () {
		bnrBotton  = $(this);
		if (bnrBotton.hasClass('prev')) bnrCtl.prev();
		if (bnrBotton.hasClass('next')) bnrCtl.next();
		if (bnrBotton.hasClass('toggle')) {
			bnrCtl.toggle();
			if (bnrCtl.settings.isPlay) {
				bnrBotton
					.addClass('play')
					.removeClass('stop')
					.html('íì ì¤í¬ë¡¤ ì¤ì§');
			}
			else {
				bnrBotton
					.addClass('stop')
					.removeClass('play')
					.html('íì ì¤í¬ë¡¤ ìì');
			}
		}
	});

	/** ì ê´ê¸°ê´ ê´ë¦¬ **/
	var relMenu	= $('div.search > ul'),
		relPtn	= 'url(/comm/img/kr/main_new/ico_region_#.gif)',
		relAlt	= $('<span class="region">ìì¸</span>'),
		relArea,
		relClsLi,
		relClsMap,
		relImgPos,
		relAreaPos;
	relAlt.insertAfter(relMenu);

	// ì ê´ê¸°ê´ í­ë©ë´ ì²ë¦¬
	relMenu.juiMenu({
		'flags'			: jmenu.FLAG_TOGGLE,
		'activeEvents'	: jmenu.EVT_CLICK,
		'extendClass'	: 'extend',
		'active'		: function () { relAlt.css('display', 'none') }
	});

	// ì ê´ê¸°ê´ ì§ì­ëª ë§íì  ì²ë¦¬
	relMenu.find('area')
		.on('focusin mouseover', function (event) {
			relArea		= $(this);
			relClsLi	= relArea.closest('li');
			relClsMap	= relArea.closest('map');
			relImgPos	= relClsLi.find('img[usemap=#'+relClsMap.attr('name')+']').position();
			relAreaPos	= relArea.attr('coords').split(/,/g);

			relAlt
				.css({
					'display'			: 'block',
					'background-image'	: relPtn.replace('#', relArea.attr('name')),
					'left'				: relImgPos.left+(relAreaPos[0]-0+7)+'px',
					'top'				: relImgPos.top+(relAreaPos[1]-25)+'px'
				})
				.html(relArea.attr('alt'));
			if (event.type == 'mouseover') relArea.focus();
		})
		.on('focusout mouseout', function (event) {
			relAlt.css('display', 'none');
		})

});