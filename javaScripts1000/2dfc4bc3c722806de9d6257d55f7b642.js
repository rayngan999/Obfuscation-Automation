$(document).ready(function () {
	//$('.eco-tank-new').each(function(){ $(this).feedAnimation(); });
	!$('.eco-tank-new-change .description .text').length ? $('.eco-tank-new-change .description').wrapInner('<div class="text"></div>') : '';
});


$.fn.feedAnimation = function () {

	var sheets_wrapper = this.find('#hero_vertical'),
		sheets = sheets_wrapper.find('.image');

	var sheet_height = sheets.first().outerHeight(),
		last_sheet = sheets.not('.mwd_loop-helper').length - 1; // last sheet index

	/* === CONFIG === */
	var sheetfed_speed = 1, // sheets per second
		max_count = 30, // maximum sheets for animation cycle
		animation_duration = max_count / sheetfed_speed; // seconds

	/* === LOCK === */
	var animation_disabled = false;
	
	var current_sheet = 0;

	function repullSheet() {
		/*if (current_sheet == last_sheet) {
			sheets.css('top', '0px');
		}*/
		//sheets.css('z-index', 83);
		current_sheet++;
		pullSheet();
	}

	function pullSheet() {

		if (animation_disabled === true) {
			return;
		}

		if (current_sheet > last_sheet) {
			current_sheet = 0;
		}
		/*sheets.removeAttr('style');
		sheets.eq(current_sheet).css('z-index',86);*/
		sheets.eq(current_sheet).css('z-index',88);
		sheets.eq(current_sheet).animate({
			top: -Math.abs(sheet_height) + 'px'
		}, (1000 / sheetfed_speed), 'linear', function () {						
			sheets.eq(current_sheet -1 ).removeAttr('style');
			repullSheet();
		});
	}

	pullSheet(); // init
	mobileCheck(); // init

	function mobileCheck() {

		if ($(window).width() <= 768) {
			/* stop animation */
			animation_disabled = true;
		} else if (animation_disabled === true) {
			/* restart animation */
			animation_disabled = false;
			pullSheet();

		}

	}

	var resize_timer;
	$(window).resize(function () {

		clearTimeout(resize_timer);
		resize_timer = setTimeout(mobileCheck, 500);

	});

}
