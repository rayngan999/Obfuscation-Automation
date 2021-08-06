$(document).ready(function () {
	swiperWMliveBoxSlider();
	if (onlyMobile) {
		wmTeaserBarSlider();
	}
});

function swiperWMliveBoxSlider() {
	if (typeof aktuellesLiveSpiel === 'undefined') {
		aktuellesLiveSpiel = 1;
	}

	if (onlyMobile) {
		new Swiper('#swiperWMliveBoxSlider', {
			nextButton: '.go-next-WMliveslider',
			prevButton: '.go-prev-WMliveslider',
			freeMode: false,
			spaceBetween: -1,
			scrollbarHide: false,
			initialSlide: aktuellesLiveSpiel,
			speed: 50,
			watchSlidesVisibility: true,
			lazyLoading: true,
			lazyLoadingInPrevNext: true,
			lazyLoadingInPrevNextAmount: 6,
			slidesOffsetBefore: 38,
			slidesOffsetAfter: 38,
			slidesPerView: 1.7
		});
	} else {
		new Swiper('#swiperWMliveBoxSlider', {
			nextButton: '.go-next-WMliveslider',
			prevButton: '.go-prev-WMliveslider',
			freeMode: false,
			scrollbarHide: false,
			initialSlide: aktuellesLiveSpiel,
			speed: 50,
			watchSlidesVisibility: true,
			lazyLoading: true,
			lazyLoadingInPrevNext: true,
			lazyLoadingInPrevNextAmount: 6,
			slidesOffsetBefore: 38,
			slidesOffsetAfter: 38,
			slidesPerGroup: 4,
			slidesPerView: 'auto'
		});
		$(document).on('click', '#swiperWMliveBoxSlider .swiper-slide-visible a', function() {window.location = $(this).attr('href')});
	}
}

function wmTeaserBarSlider() {
	new Swiper('#wm-teaserbar', {
		slidesPerView: 1.2,
		spaceBetween: 10,
		freeMode: false,
		scrollbarHide: true,
		loop: true,
		pagination: '.teaser-pagination'
	});
}
