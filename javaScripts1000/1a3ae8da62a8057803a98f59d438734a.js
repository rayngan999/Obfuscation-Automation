jQuery(document).ready(function(){
	jQuery(".click-vote2x").on("click", function(){
		var id_post = jQuery(this).data("id");
		var id_status = jQuery(this).data("vote");
		jQuery.ajax({
			url: ajaxUrl,
			data: 'action=vote2x_click&vote_id='+id_status+'&post_id='+id_post,
			type: 'POST',
			success: function(data) {
				jQuery("#vote2x-"+id_post).find(".button-vote2x>span").remove();
				jQuery("#vote2x-"+id_post).find(".button-vote2x").html(data.result);
			},
			dataType: 'json'
		});
		return false;
	});	
});