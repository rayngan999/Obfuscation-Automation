function openWindow( title, formhtml, width, height )
{
	if ( !$('div').is('#openwindow') ) 
	{
		$("body").css("overflow","hidden");
		
		$('body').prepend('<div id="openwindow"><div id="openwindow-header"><div id="openwindow-title"></div><div id="openwindow-close" class="box" title="ÐÐ°ÐºÑÑÑÑ Ð¾ÐºÐ½Ð¾"></div></div><div id="openwindow-content" class="clear"></div></div>');

		$('#openwindow').css({'width': width, 'height': height, 'margin-left': -Math.floor(width/2), 'margin-top': -Math.floor(height/2) });

		$('#openwindow-title').html( title );
		$('#openwindow-content').html( formhtml );
		$('#openwindow-content').css({ 'height': $('#openwindow').height()-$('#openwindow-title').height()-60 });

		$('#openwindow-close').click(function(){
			backformclose();
			return false;
		});
		$('#openwindow').show().find('input[type=text]').first().focus();
		if ( !$('div').is('#backgroundform') ){
			$('body').prepend('<div id="backgroundform"></div>');
			$('#backgroundform').click(function(){ backformclose(); });
		}
	}
	return false;
}
function backformclose(){
	$('#openwindow,#backgroundform').remove();
	$("body").css("overflow","auto");
	$('.imgareaselect-outer').remove();;
	$('.imgareaselect-selection').parent().remove();
}