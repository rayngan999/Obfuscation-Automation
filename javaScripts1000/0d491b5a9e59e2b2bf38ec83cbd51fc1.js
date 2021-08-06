$(document).ready(function() {
	$('.estrellitas').html(function(){
		var numero = $(this).data("value");
		var star="â";
		var emptystar="â";
		var final="";
		for (var i = 1; i <= 5; i++) {
			if(numero>=i){
				final+=star; 
			}else{
				final+=emptystar;
			}
		}
		return final;
	});
});