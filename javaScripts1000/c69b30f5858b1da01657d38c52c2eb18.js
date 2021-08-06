var logopened=false;$(document).ready(function(){$('#sharebtn').click(function(){if(logopened)
{$('#sharelink').hide('fast');$('#sharebtn').removeClass('selected');}
else
{$('#sharelink').show('fast');$('#sharebtn').addClass('selected');}
logopened=!logopened;return false;});}).click(function(e){if(!logopened)
return;e=e||window.event;var target=e.target||e.srcElement;while(target)
{if(target==$('#sharelink').get(0))
return;target=target.parentNode;}
$('#sharelink').hide('fast');$('#sharebtn').removeClass('selected');logopened=false;});$.fn.Button=function(sel)
{var closed=true,th=this;$(sel).hide();$(this).removeClass('selected').click(function(){$(sel).toggle("fast");$(this).toggleClass("selected");closed=!closed;return false;});$(document).click(function(e){if(closed)
return;var target=e.target||e.srcElement;while(target)
{var ret=false;$(sel).each(function(){if(ret=target==this)
return false;});if(ret)
return;target=target.parentNode;}
$(sel).hide('fast');$(th).removeClass('selected');closed=true;});return this;}
$.fn.UlMenu=function()
{$.each(this,function(){$("li.submenu",this).hide();$("li:has(.sublnk)",this).click(function(){$(this).toggleClass("selected").next("li.submenu").slideToggle(300).css("display",function(){if($(this).css("display")=="list-item")
return "block";});});});return this;}
$(document).ready(function(){var tabContainers=$('#socseti .tabcont');tabContainers.hide().filter(':first').show();$('#socseti .tabmenu a').click(function(){tabContainers.hide();tabContainers.filter(this.hash).show();$('#socseti .tabmenu a').removeClass('selected');$(this).addClass('selected');return false;}).filter(':first').click();});$(document).ready(function(){var tabContainers=$('#socseticom .tabcontcom');tabContainers.hide().filter(':first').show();$('#socseticom .tabmenucom a').click(function(){tabContainers.hide();tabContainers.filter(this.hash).show();$('#socseticom .tabmenucom a').removeClass('selected');$(this).addClass('selected');return false;}).filter(':first').click();});$(document).ready(function(){$('#topmenu li.sublnk').hover(function(){$(this).addClass("selected");$(this).find('ul').stop(true,true);$(this).find('ul').show('fast');},function(){$(this).find('ul').hide('fast');$(this).removeClass("selected");});});