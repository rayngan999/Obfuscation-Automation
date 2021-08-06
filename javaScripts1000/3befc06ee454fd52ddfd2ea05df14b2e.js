jQuery(function(){
	jQuery(".sp-body.folded").hide();

	jQuery(".sp-head").on('click', function(event){
		$this = jQuery(this);
		if($this.hasClass("unfolded")) {
			$this.removeClass("unfolded");
			$this.next().slideUp("fast");
			$this.next().addClass("folded");
			$this.prop('title', title.unfolded);
		} else {
			$this.addClass("unfolded");
			$this.next().slideDown("fast");
			$this.next().removeClass("folded");
			$this.prop('title', title.folded);
		}
	});
	
	
	jQuery(".spdiv").on('click', function(event){
	$this = jQuery(this).closest("div.sp-body").prev();
		if($this.hasClass("unfolded")) {
			$this.removeClass("unfolded");
			$this.next().slideUp("fast");
			$this.next().addClass("folded");
			$this.prop('title', title.unfolded);
		} 
	});
});
