$(function(){$('nav.top-navigation .menu-item').on('hover',function(){$(this).addClass('active');});$('#toolbar nav.top-navigation .menu-toggle').on('click',function(){$('#toolbar nav.top-navigation .wrapper .items').toggleClass('menu-open');$(this).toggleClass('menu-close');});});