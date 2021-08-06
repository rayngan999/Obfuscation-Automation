// ------------------------------
//        input_default
// ------------------------------

function input_default(elm)
{
  if (!elm.base) elm.base = elm.value
  if (elm.value == elm.base) elm.value = "";
  else if (elm.value == "") elm.value = elm.base;
}

// -------------------------
//					menu
// -------------------------

$(function() {
	$('a[id*="menu_0"]').hover(function() 
	{
		var id = $(this).attr("id"); 
		var width = $(this).width();
		var left = ((width-200)/2)+18;
		$("div#sub"+id).css("left", left);
	}, 
	function () 
	{
	});
});

//-------------------------
//				submenu
//-------------------------

$(function() {
	$('div[id*="submenu_0"]').hover(function() 
	{
		var id = $(this).attr("id");
		id = id.replace("sub", "");
		$("a#"+id).attr("class", "selected");
	}, 
	function () 
	{
		var id = $(this).attr("id");
		id = id.replace("sub", "");
		$("a#"+id).attr("class", "menu");
	});
});

//-------------------------
//	scrollable slideshow
//-------------------------	

$(function() 
{ 
	var slideshow = $("div#scrollable_slideshow").scrollable({circular: true, speed: 400}).navigator().autoscroll({interval: 4000});
	window.api = slideshow.data("scrollable");

	var width = $(window).width();
	
	if(window.api != undefined)
	{
		if(width < 1000)
		{
			window.api.pause();
			window.api.move(0);
		}
		else
		{
			window.api.play();
		}
	}
});

$(window).resize(function() 
{
	var width = $(window).width();

		if(width < 1000)
		{
			$(function() 
			{ 
				window.api.pause();
				window.api.move(0);
			});
		}
		else
		{
			$(function() 
			{ 
				window.api.play();
			});
		}

});

//-------------------------------
//	scrollable slideshow gallery
//-------------------------------	

$(function() 
{ 
	$("div#scrollable_slideshow_gallery").scrollable({speed: 400, size: 4}).navigator();
});	
