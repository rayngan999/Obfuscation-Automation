/// <reference path="/@JSense.js" />
/// <reference path="jquery-1.7.1-vsdoc.js" />

$(document).ready(function () {
    setupTables();
    commonUtilities();
    ajaxTabsGrayInit();
    brandability();
    //progressBars();

});

function setupTables() {
    $('table > tbody').each(function () { setupTable(this); });
}
function setupTable(tbl) {

    $(tbl).children('tr:first').addClass('first');
    $(tbl).children('tr:last').addClass('last');
    $(tbl).children('tr:even').addClass('odd');
    $(tbl).children('tr:odd').addClass('even');
    $(tbl).children('tr').each(function () { $(this).children('td:last').addClass('last'); });

}

function commonUtilities() {
	$(document.body).removeClass('noscript');
	$('input:submit:not(.button30,.button18,.button38,.button41)').bind({ 
		mouseover : function() { $(this).css('background-position', 'left bottom'); },
		mouseout  : function() { $(this).css('background-position', 'left top'); }
	});
	$('.bg_remove').bind('click', function() { $(this).removeClass('bg_remove'); }).blur(function() { if (this.value=='') $(this).addClass('bg_remove'); });

$('ul').each(function () { $(this).children('li').last().addClass('last').end().filter(":odd").addClass('even'); });



	
//	var focused=$('input.focused, textarea.focused');
//	if (focused.length>0) $(focused[0]).setCaret(-1);
	
	$('table tr').bind({
		mouseover: function() {$(this).addClass('over');},
		mouseout: function() {$(this).removeClass('over');}
	});

	/* search short-long versions switch */
	$('form.f_searchDomainNames div.switch a').not('.searchClickBound').bind('click', function (event) {
	    event.preventDefault();
	    $(this).parents('form').find('div.advanced').slideToggle('fast', function () { $(this).parents('div.sBox').toggleClass('short'); });
	}).addClass('searchClickBound');

    /* search short-long versions switch */
    $('div.showhidesite a').bind('click', function (event) {
        event.preventDefault();
        $('div.container').slideToggle(500, function () {
            // Animation complete
        });
    });

	/* sortable tables */
	$('.t_dynamics th:not(.hoverable) a').bind('click', function(event) {
		event.preventDefault();
		$(this).parent().siblings().children('a').removeClass('dn up');
		if ( ($(this).hasClass('dn')) || ($(this).hasClass('up')) )
			$(this).toggleClass('dn').toggleClass('up');
		else 
			$(this).addClass('up');
	});
}


function brandability() {
	var maxWidth=125;
	var $br=$('.brandability');
	var percent = parseInt($br.text());
	if (percent<0) percent=0;
	if (percent>100) percent=100;
	var pos = Math.round(maxWidth*percent/100)-3; // shadow 3px
	var tx="very low";
	if (percent>=75) tx="very high"; 
	else if (percent>60) tx="high";
	else if (percent>=40) tx="good";
	else if (percent>=25) tx="low";
	$br.html('<b style="margin-left:'+pos+'px"></b><strong>'+tx+'</strong>');
}

jQuery.fn.setCaret = function (pos) {
    var input = this[0];
	if (pos<0) pos = input.value.length;
    if (input.setSelectionRange) {
        input.focus();
        input.setSelectionRange(pos, pos);
    } else if (input.createTextRange) {
        var range = input.createTextRange();
        if (pos>=0) { 
			range.collapse(true);
			range.moveEnd('character', pos);
			range.moveStart('character', pos);
		} else range.collapse(false);
        range.select();
    } else if(input.selectionStart){
        input.focus();
        input.selectionStart = pos;
        input.selectionEnd = pos;
    }
};


var cssFix = function(){
  var u = navigator.userAgent.toLowerCase(),
  is = function(t){return (u.indexOf(t)!=-1)};
  $("html").addClass([
    (!(/opera|webtv/i.test(u))&&/msie (\d)/.test(u))?('ie ie'+RegExp.$1)
      :is('firefox/9')?'gecko ff ff9'
      :is('firefox/10')?'gecko ff ff10'
      :is('gecko/')?'gecko'
      :is('opera/9')?'opera opera9':/opera (\d)/.test(u)?'opera opera'+RegExp.$1
      :is('konqueror')?'konqueror'
      :is('applewebkit/')?'webkit safari'
      :is('mozilla/')?'gecko':'',
    (is('x11')||is('linux'))?' linux'
      :is('mac')?' mac'
      :is('win')?' win':''
  ].join(''));
}();


function setSizeOverlay() {
	// overlayResize
	var docHeight=$(document).height();
	var winWidth=$(window).width();
	var cWidth=$("body > .container").width();
	var oWidth=Math.max(cWidth,winWidth);
	$('#overlay').css({ width : oWidth, height: docHeight });
}

function setSizePopup(popup) {
	var pLeft = Math.round($(".container").offset().left+($(".container").width()-$(popup).width())/2);
	$('.popup').css({ left : pLeft });
}

function windowResize() {
	setSizeOverlay();
	setSizePopup($('.popup:visible'));
}

function ajaxTabsGray() {
	var ajaxTabs = $('div.tabsGray .panelTab');
	for (var i=0; i<ajaxTabs.length; i++) 
		if ($(ajaxTabs[i]).hasClass('ajax__tab_active')) 
			$(ajaxTabs[i]).css('z-index', 30); 
		else $(ajaxTabs[i]).css('z-index', 29-i);
}

//function ajaxTabsGrayInit() {
//	$('div.tabsGray .panelTab').bind({click : function() {
//		var ind=$(this).prevAll('.panelTab').length;
//		$(this).addClass('ajax__tab_active').siblings().removeClass('ajax__tab_active');
//		$(this).parent().parent().find('img').removeClass('on').eq(ind).addClass('on');
//		ajaxTabsGray(this); 
//		//$(this).parents('.ajax__tab_container').find('.ajax__tab_panel').removeClass('active').eq(ind).addClass('active');
//		$(this).parents('.ajax__tab_container').find('.ajax__tab_panel').hide().eq(ind).fadeIn(250);
//	}}).eq(0).click();
//}

function ajaxTabsGrayInit() {
    $('div.tabsGray .panelTab').bind({ click: function () {
        var ind = $(this).prevAll('.panelTab').length;
        $(this).addClass('ajax__tab_active').siblings().removeClass('ajax__tab_active');
        $(this).parent().parent().find('img').removeClass('on').eq(ind).addClass('on');
        ajaxTabsGray(this);
        $(this).parent().parent().parent().children('.ajax__tab_body').children('.fr_tab').children('.ajax__tab_panel').removeClass('active').eq(ind).addClass('active');
    }
    });
    $('.ajax__tab_active').click();
}