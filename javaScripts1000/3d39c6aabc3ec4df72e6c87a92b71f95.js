$(function () {
	/** ìë¨ë©ë´ ê´ë¦¬. **/
	$('#gnb > ul').juiMenu({
		'initialMenu'	: window.initialMenu || []
	});

	/** ìë¸ë©ë´ ê´ë¦¬ **/
	$('#lnb > ul').juiMenu({
		'initialMenu'	: window.initialSubMenu || [],
		'animate'		: function  (settings, menuNode, flags) {
			var menu		= settings.menu,
				menuNode	= settings.initialMenu.size ? settings.initialMenu : menu.getMenuNode(settings, settings.initialMenu);
			(menuNode.data(menu.PARENTS_NM) || $()).add(menuNode).addClass(settings.activeClass);
		}
	});

	/** íµë©ë´ ê´ë¦¬ **/
//	var docNode	= $(document),
//		qckNode	= $('#quick'),
//		qckTop	= qckNode.position().top;
//	$(window).scroll(function (evt) {
//		qckNode
//			.stop()
//			.animate({'top':qckTop+docNode.scrollTop()+'px'});
//	});

	/** í¨ë°ë¦¬ì¬ì´í¸ ê´ë¦¬ **/
	var fmlCtrl			= {},
		fmlCtlButtons	= $('#familysite .control > button'),
		fmlButton;

	// í¨ë°ë¦¬ì¬ì´í¸ ì¬ë¼ì´ë ì²ë¦¬
	$('#familysite > ul').juiSlide({
		'slideAuto'		: false,
		'slideAnimate'	: 'tick',
		'exposedSize'	: 6,
		'control'		: fmlCtrl
	});


	// ì»¨í¸ë¡¤ ê°ì²´ë¥¼ ì´ì©í í¨ë°ë¦¬ì¬ì´í¸ ì»¨í¸ë¡¤
	fmlCtlButtons.bind('click', function () {
		fmlButton  = $(this);
		if (fmlButton.hasClass('prev')) fmlCtrl.prev();
		if (fmlButton.hasClass('next')) fmlCtrl.next();
	});
});