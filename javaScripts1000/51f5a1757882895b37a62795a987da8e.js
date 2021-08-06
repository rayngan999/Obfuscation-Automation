/*
==============
JS for - New TEMPO.CO 2017
Developed and Customized by
Muhammad Adam Firdaus
http://www.muhammadadamfirdaus.com/
==============
 */

$(function(){
	// PreLoad
	// setTimeout(function removepreload(){
	// 	$('#preload').hide();
	// 	$('.container').css({'visibility':'visible'});
	// }, 3000);

	// if(!localStorage.getItem('viewed')){
  //   setTimeout(function () {
  //     console.log('pertama-kali');
  //     localStorage.setItem('viewed','yes');
  //   }, 8000);
	// };

	//sticky-toolbar notification
	// if(!localStorage.getItem('saya mengerti')){
	// 	var contentTooltipHeaderBottom = $('<div class="tooltip red-500"><div class="wrapper"><div class="arrow-up"></div><p>Kini Anda dapat mengganti jenis dan ukuran font sesuai preferensi Anda.</p><div class="wrapper"><a class="white" href="#">Saya mengerti</a></div></div></div>');
	// 	$('.sub-head .toolbar').append(contentTooltipHeaderBottom);
	// 	setTimeout(function(){
	// 		var tooltipHeaderBottom = $('.tooltip');
	// 		tooltipHeaderBottom.addClass('active');
	// 		tooltipHeaderBottom.add('a .white').on('click', function(e){
	// 			e.preventDefault();
	// 			e.stopImmediatePropagation();
	// 			tooltipHeaderBottom.removeClass('active');
	// 			setTimeout(function(){
	// 				contentTooltipHeaderBottom.detach();
	// 			}, 800);
	// 			localStorage.setItem('saya mengerti','yes');
	// 		});
	// 	}, 2500);
	// }


	// survey front-end
	// $('.container').append('<div class="sticky survey-front"><a class="survey" href="https://goo.gl/forms/zmBQRN3CJIGI4qog1?utm_source=Close&utm_medium=Survey&utm_campaign=ButtonSurveyClose" target="blank"><h4>Kami ingin mendengar dari Anda</h4><p>Berikan penilaian seputar tampilan baru TEMPO.CO</p></a><center><a class="survey button" href="https://goo.gl/forms/zmBQRN3CJIGI4qog1?utm_source=Close&utm_medium=Survey&utm_campaign=ButtonSurveyClose" target="blank">Klik Di Sini</a></center><span>* kami jamin tidak akan lama</span><a href="#" class="close">x</a></div>');
	// $('.survey-front a.close').on('click', function(e){
	// 	e.preventDefault();
  //   e.stopImmediatePropagation();
  //   $('.survey-front').removeClass('active').addClass('survey-closed');
  //   $('.survey-front a.close').attr('data-click', 'clicked');
	//
	// 	if($('.survey-closed').length || $('.survey-front a.close[data-click]').length){
	// 		// console.log('ada close');
	// 		setTimeout(function(){
	// 			$('.survey-front').detach();
	// 		}, 300);
	// 	}
	// });

	// $('.survey-front a.survey').on('click', function(e){
	// 	// e.preventDefault();
  //   e.stopImmediatePropagation();
  //   // $('.survey-front').removeClass('active').addClass('survey-closed');
  //   $('.survey-front a.survey').attr('data-click', 'clicked');
	//
	// 	if($('.survey-closed').length || $('.survey-front a.survey[data-click]').length){
	// 		console.log('ada close');
	// 		setTimeout(function(){
	// 			$('.survey-front').detach();
	// 		}, 3000);
	// 	}
	// });

	var tempo2017forthefirsttime = new Swiper('.tempo-2017-tutorial', {
		pagination: '.swiper-pagination',
		paginationClickable: true
	});

	// Go To
	$('a[href^="#"].scroll').on('click', function(e){
		e.preventDefault();
		$('html,body').animate({
			scrollTop: $(this.hash).offset().top
		}, 2000);
		return false;
	});

	/* newsflash */
	var newsFlash = new Swiper('.head-newsflash', {
		nextButton: '.swiper-button-next.swiper-button-newsflash',
    prevButton: '.swiper-button-prev.swiper-button-newsflash',
		paginationClickable: true,
		// direction: 'vertical',
		autoplay: 6000,
		loop: true,
		spaceBetween: 20,
		speed: 800,
		observer: true
		// onAutoplayStop: function(){
		// 	setTimeout(function(){
		// 		newsFlash.updateContainerSize();
		// 	}, 2000);
		// }
	});

	// $(document).on('load scroll', function(){
	// 	if($('.sticky-header').length == 0){
	// 		newsFlash.update(true);
	// 	} else {
	// 		newsFlash.destroy(true, true);
	// 	}
	// });
	/* end newsflash */

	/* headline */
	var headline = new Swiper('.headline-terbaru', {
		pagination: '.headline-terbaru .swiper-pagination',
		paginationClickable: true,
		// autoplay: 10000,
		loop: true,
		spaceBetween: 20,
		effect: 'slide',
		speed: 900,
		hashnav: true,
		hashnavWatchState: true,
	});
	/* end headline */

	/* desktop menu */
	var submenuDesktop = $(this).find('.sub ul');
	$('.menu li.sub').on('mouseenter', function(){
		// console.log('ox');
		$(this).not(submenuDesktop).addClass('sub-menu-active');
		$(this).siblings(submenuDesktop).removeClass('sub-menu-active');
	}).on('mouseleave', function(){
		$('.sub').removeClass('sub-menu-active');
	});
	/* end desktop menu */

  function resetmobileMenu(){
    $('.menu').removeClass('menu-collapsed menu-expanded');
    menubutton.removeClass('close');
    $('#menu-button').detach();
  }

  function mobileMenu(){
    menubutton = $('.menu-mobile');
		menu = $('.menu');

    if($('.menu-mobile a').filter(function() {
        return $.trim($.text(this)) === 'Close';
      }).length){
      $('.menu-mobile a').html('Menu');
    }

    function menumobileexpand(){
      if(menu.hasClass('menu-expanded')){
        menubutton.removeClass('close');
        removemenumobile();
      } else {
        menubutton.addClass('close');
        menu.addClass('menu-expanded').removeClass('menu-collapsed');
      }

      if($('.close').length){
        $('.menu-mobile a').html('Close');
      } else {
        $('.menu-mobile a').html('Menu');
      }
    }

    function removemenumobile(){
      if($('.menu-collapsed').length){
        menu.removeClass('menu-collapsed');
      } else {
        menu.removeClass('menu-expanded').addClass('menu-collapsed').delay(1000).queue(function(){
          $('.sub').css({'display':'none'});
        });
      }
    }

    removemenumobile();

    /* buka menu */
    $('.menu-mobile').on('click', function(e){
      e.preventDefault();
      e.stopImmediatePropagation();

      menumobileexpand();
    });

    /* klik link menunya */
    $('.menu a').off('click').on('click', function(e){
      e.stopImmediatePropagation();
      return true;
    });

		$('.night-mode-button').off('click').on('click', function(e){
      e.preventDefault();
      e.stopImmediatePropagation();

			if($('.night-mode-button-active').length){
				// console.log('night mode off');
				$('.night-mode-button').removeClass('night-mode-button-active');
				// setTimeout(function(){
					$('.container').removeClass('night-mode');
				// }, 2200);
			} else {
				// console.log('night mode activated');
				$('.night-mode-button').addClass('night-mode-button-active');
				// setTimeout(function(){
					$('.container').addClass('night-mode');
				// }, 2200);
			}
    });

    /* expand collapse sub menu */
		$('.has-sub').off('click').on('click', function(e){
			e.preventDefault();
      e.stopPropagation();
			var submenu = $(this).find('.sub');
			$('.sub').not(submenu).css({'display':'none'});
			submenu.css({'display':'block'});
		});

		/* tutup menu */
		$(document).on('click', function(e){
			e.preventDefault();
			e.stopPropagation();
			if(e.target.className != 'menu-mobile'){
				removemenumobile();

				menubutton.removeClass('close');
				$('.menu-mobile a').html('Menu');
				menu.removeClass('menu-expanded').addClass('menu-collapsed').delay(1000).queue(function(){
					$('.sub').css({'display':'none'});
				});
			}
		});
	}

	/* menu detail */
	// $('.more .w-20 > li').on('mouseenter', function(e) {
	// 	console.log('hit');
	// 	var moreMenuLiHovered = $(this).closest('.more');
	// 	moreMenuLiHovered.find('.more li.more-active').find('.more .tab-menu.tab-menu-active').removeClass('more-active');
	// 	$(this).addClass('more-active');

	// 	// var menuContent = $(this).closest('.menu-content');
	// 	// moreMenuLiHovered.find('.more .tab-menu:not(:hidden)').removeClass('tab-menu-active');
	// 	// $(this.hash).addClass('.tab-menu-active');

  //   e.preventDefault();
  // }).on('mouseleave', function(e){
	// 	e.preventDefault();
	// 	e.stopImmediatePropagation();
	// 	$('.more .w-20 > li').removeClass('more-active');
	// 	$('.more .tab-menu:not(:hidden)').removeClass('.tab-menu-active');
	// });;

	// $('.more-navigation li').on('mouseenter', function(e) {
  //   var $tabs = $(this).closest('.sub > .more');
  //   $tabs.find('.more-navigation li > a.current').removeClass('current');
  //   $(this).addClass('current');

  //   $tabs.find('.more-content:not(:hidden)').removeClass('selected');
  //   $(this.hash).addClass('selected');

  //   e.preventDefault();
	// });

	$('.more-navigation li').on('mouseenter', function(e) {
		var tabMenu = $(this).attr('data-menu');

		$('.more-navigation li a').removeClass('current');
		$('.more-content').removeClass('selected');

		$(this).addClass('current');
		$("#"+tabMenu).addClass('selected');
  }).on('mouseleave', function(e){
		e.stopImmediatePropagation();
		console.log('triggered');
	});

	// $('.tabs .tabsNav a').click(function(e) {
  //   var $tabs = $(this).closest('.tabs');
  //   $tabs.find('.tabsNav a.current').removeClass('current');
  //   $(this).addClass('current');

  //   $tabs.find('div.linkTab:not(:hidden)').hide();
  //   $(this.hash).show();

  //   e.preventDefault();
	// });






	$('.tab .tab-pagination li:last-child a').on('click', function(e){
		window.location.href = $(this).attr("href");
	});

	// submenu
	// var submenuDesktop = $(this).find('.sub ul');
	// $('.menu li.sub').on('mouseenter', function(e){
	// 	e.preventDefault();
	// 	e.stopImmediatePropagation();
	// 	$(this).not(submenuDesktop).addClass('sub-menu-active');
	// 	$(this).siblings(submenuDesktop).removeClass('sub-menu-active');
	// }).on('mouseleave', function(e){
	// 	e.preventDefault();
	// 	e.stopImmediatePropagation();
	// 	$('.sub').removeClass('sub-menu-active');
	// });

	/* tab */
	$('.tab .tab-pagination li a').on('click', function(e) {
    var $tabs = $(this).closest('.tab');
    $tabs.find('.tab-pagination a.current').removeClass('current');
    $(this).addClass('current');

    $tabs.find('div.tab-content-slide:not(:hidden)').removeClass('selected');
    $(this.hash).addClass('selected');

    e.preventDefault();
  });

	$('.tab .tab-pagination li:last-child a').on('click', function(e){
		window.location.href = $(this).attr("href");
	});

	var subTab = $(this).find('.sub-tab ul');
	$('.tab-pagination li.sub-tab').on('mouseenter', function(e){
		e.preventDefault();
		e.stopImmediatePropagation();
		$(this).not(subTab).addClass('sub-tab-active');
		$(this).siblings(subTab).removeClass('sub-tab-active');
	}).on('mouseleave', function(e){
		e.preventDefault();
		e.stopImmediatePropagation();
		$('.sub-tab').removeClass('sub-tab-active');
	});
	/* end tab */

	/* onscroll */
	var stickyheader = $('.header-bottom');
	var iklanTeratasDesktop = $('.ads.top-banner.premium-head');
	var jarakheader = stickyheader.offset().top + 50;

	var stickyrectangle3 = $('.r3');
	var jarakstickyrectangle3 = stickyrectangle3.offset().top;

	var navigationHeader = $('.tab-pagination');
	var hasScrolled = $('.header-top').offset().top + 1000;

	var searchPindah = $('#search');

	var timer;
	var headerBottom = $('.header-bottom');
	var stickySearch = $('.search-button');
	var extension = $('#extension');
	var trendingList = $('#trending.list');
	stickySearch.on('click', function(e){
		e.preventDefault();
		e.stopImmediatePropagation();
		headerBottom.addClass('sticky-search-active');
		extension.add('.sticky-search').addClass('active');
	});

	var inputSearch = $('#sticky-search.col input.col');
	inputSearch.on('click', function(e){
		e.preventDefault();
		e.stopImmediatePropagation();
		extension.add(trendingList).addClass('active');
	});

	$('#back.button').on('click', function(e){
		e.preventDefault();
		e.stopImmediatePropagation();
		headerBottom.removeClass('sticky-search-active');
		extension.add('.sticky-search').removeClass('active');
		extension.add(trendingList).removeClass('active');
	});

	$(document).on('click', function(e){
		// console.log('outside area');
		trendingList.removeClass('active');
		$('.tooltip').removeClass('active');
	});

	function sticky(){
		var scroll = getCurrentScroll();
  	if(scroll > jarakheader){
			iklanTeratasDesktop.css('margin-top', jarakheader);
			$('header').addClass('sticky sticky-header');
			$('#skin-ad').addClass('sticky');
  	} else {
			iklanTeratasDesktop.css('margin-top', '10px');
			headerBottom.removeClass('sticky-search-active');
			extension.add('.sticky-search').removeClass('active');
  		$('header').removeClass('sticky sticky-header');
			$('#skin-ad').removeClass('sticky');
		}

		var section3 = $('.kanal-pilihan');
		if($('#home .r3').length){
			if(scroll > jarakstickyrectangle3){
				$('.r3').removeClass('lepas').addClass('sticky');
			} else {
				$('.r3').removeClass('sticky');
			}

			var overSection3 = section3.offset().top - 100;
			if(scroll > overSection3){
				$('.r3').addClass('lepas').removeClass('sticky');
			}
		}

		if($('#home').length){
			if(scroll > hasScrolled){
				$('.survey-front').addClass('active');
			} else {
				$('.survey-front').removeClass('active');
			}
		}

		//indikator
		var	indikatorLainnya = $('#list-indikator.indikator');
		if($('#list-indikator.indikator').length){
			var hasilSurveyContainer = $('.data-hasil');
					indikatorLainnyaJarak = indikatorLainnya.offset().top - hasilSurveyContainer.offset().top;

			if(scroll < indikatorLainnyaJarak){
				console.log('lepas');
				hasilSurveyContainer.removeClass('sticky');
				$('#list-indikator.indikator').css('margin-top', 'initial');
			} else {
				// console.log('pasang');
				hasilSurveyContainer.addClass('sticky');
				$('#list-indikator.indikator').css('margin-top', '400px');
			}
		}

		if($('#detail').length){
			console.log('article');
			var subHead1 = $('.sub-head:nth-of-type(1)'),
					subHead2 = $('.sub-head:nth-of-type(2)'),
					gambarArtikelTeratas = $('article figure:nth-of-type(1)');
					jarakSubHead2 = subHead1.offset().top;
					// tecotoolbar = subHead2.append('');

			if(scroll > jarakSubHead2){
				// console.log('sticky');
				subHead2.addClass('sticky');
				subHead1.css('margin-bottom', '44px');

				var paragrafArtikel = $('#isi p');
				$('#font-family').on('change', function(){
					var fontSelected = $('#font-family').val();
					// console.log(fontSelected);
					paragrafArtikel.css('font-family', fontSelected);
				});

				$(".font-increase").on('click', function(e){
					e.preventDefault();
					e.stopImmediatePropagation();
							newFontSize = parseFloat(paragrafArtikel.css('font-size')) + 2 + 'px';
							newLineHeight = parseFloat( paragrafArtikel.css('line-height')) + 4 + 'px';
					paragrafArtikel.css('font-size', newFontSize);
					paragrafArtikel.css('line-height', newLineHeight);

					return false;
				});

				$(".font-decrease").on('click', function(e){
					e.preventDefault();
					e.stopImmediatePropagation();
					var decurrentFontSize = paragrafArtikel.css('font-size'),
							decurrentLineHeight = paragrafArtikel.css('line-height'),
							decurrentFontSizeNum = parseFloat(decurrentFontSize),
							denewFontSize = decurrentFontSizeNum - 2 + 'px';
							decurrentLineHeightNum = parseFloat(decurrentLineHeight),
							denewLineHeight = decurrentLineHeightNum - 4 + 'px';
					paragrafArtikel.css('font-size', denewFontSize);
					paragrafArtikel.css('line-height', denewLineHeight);
				});

			} else {
				// console.log('get off');
				subHead2.removeClass('sticky');
				subHead1.css('margin-bottom', 'initial');
			}
		}

		// var article = $('article'),
		// 		komentar = $('.comments'),
		// 		komentarHasScrolled = section3.offset().top + section3.height();
		// if(komentar.length || article.length){
		// 	if(scroll >= komentarHasScrolled){
		// 		komentar.addClass('sticky');
		// 	} else {
		// 		komentar.removeClass('sticky');
		// 	}
		// }

		// if($('#category').length){

		// 	var jaraknavigationHeader = navigationHeader.offset().top - 0;
		// 	var listkategoripertama = $('#category .tab-content li:nth-of-type(1)');
		// 	if(scroll > jaraknavigationHeader){
		// 		console.log('hi');
		// 		navigationHeader.addClass('sticky');
		// 		listkategoripertama.css('margin-top', '40px');
		// 	} else {
		// 		navigationHeader.removeClass('sticky');
		// 		listkategoripertama.css('margin-top', 0);
		// 	}
		// }
	}

  $(window).on('load scroll', function(){
		/* clear the old timeout */
    clearTimeout(timer);
    /* wait until 400 ms for callback */
		timer = setTimeout(sticky, 0);


	});

	function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
	}



		// $(window).on('scroll', function () {
		// 	if ($('.load-more').offset().top <= $(window).scrollTop() + $(window).height()) {
		// 		 console.log('bottom');
		// 		 $.ajax({
		// 			 type: "GET",
		// 			 url: 'http://www.tmpo.co/ajax?tipe=beritaterkini&limit=10&start=10',
		// 			 success: function (result) {
		// 				 $(".divContent").append(result);

		// 				 sIndex = sIndex + offSet;
		// 				 isPreviousEventComplete = true;

		// 				 if (result == '') //When data is not available
		// 						 isDataAvailable = false;

		// 				 $(".LoaderImage").css("display", "none");
		// 			 },
		// 			 error: function (error) {
		// 					 alert(error);
		// 			 }
		// 		 });
		// 	}
		//  });

	/* end onscroll */

	/* tags active selected */
	// var navigationTags = $('.navigation a');
	// navigationTags.on('click', function(){
	// 	$(this).addClass('active').siblings().removeClass('active');
	// });

	/* datepicker */
	var tanggalSearch = new Pikaday({
		field: document.getElementById('tanggal-search'),
		firstDay: 0,
		minDate: new Date(2011, 11, 31),
		maxDate: new Date,
		yearRange: [2000],
		container: document.getElementById('datepicker'),
		format: 'DD/MM/YYYY',
		toString(date, format) {
			// you should do formatting based on the passed format,
			// but we will just return 'D/M/YYYY' for simplicity
			var day = date.getDate();
			var month = date.getMonth() + 1;
			var year = date.getFullYear();

			if(day < 10){
				day = '0'+day;
			}
			if(month < 10){
				month = '0'+month;
			}
			var dmy = +year+'/'+month+'/'+day;
			// return `${day}/${month}/${year}`;
			return dmy;
		},
		parse(dateString, format) {
			// dateString is the result of `toString` method
			const parts = dateString.split('/');
			var day = parseInt(parts[0], 10);
			var month = parseInt(parts[1] - 1, 10);
			var year = parseInt(parts[1], 10);
			if(day < 10){
				day = '0'+day;
			}
			if(month < 10){
				month = '0'+month;
			}
			var dmy = +year+'/'+month+'/'+day;
			//return new Date(year, month, day);
			return dmy;
		}
	});
	var tanggalIndex = new Pikaday({
		field: document.getElementById('tanggal-index'),
		firstDay: 0,
		minDate: new Date(2011, 11, 31),
		maxDate: new Date,
		yearRange: [2000],
		container: document.getElementById('datepicker-index'),
		format: 'DD/MM/YYYY',
		toString(date, format) {
			// you should do formatting based on the passed format,
			// but we will just return 'D/M/YYYY' for simplicity
			var day = date.getDate();
			var month = date.getMonth() + 1;
			var year = date.getFullYear();

			if(day < 10){
				day = '0'+day;
			}
			if(month < 10){
				month = '0'+month;
			}
			var dmy = +year+'/'+month+'/'+day;
			// return `${day}/${month}/${year}`;
			return dmy;
		},
		parse(dateString, format) {
			// dateString is the result of `toString` method
			const parts = dateString.split('/');
			var day = parseInt(parts[0], 10);
			var month = parseInt(parts[1] - 1, 10);
			var year = parseInt(parts[1], 10);
			if(day < 10){
				day = '0'+day;
			}
			if(month < 10){
				month = '0'+month;
			}
			var dmy = +year+'/'+month+'/'+day;
			//return new Date(year, month, day);
			return dmy;
		}
	});

	var inputTanggalSearch = $('#tanggal-search');
	inputTanggalSearch.on('change', function(e) {
		e.preventDefault();
		var pilihanTanggalSearch = inputTanggalSearch.val();
		window.location = "https://www.tempo.co/indeks/"+pilihanTanggalSearch;
	});

	var inputTanggalIndex = $('#tanggal-index');
	var pilihanTanggalIndex = inputTanggalIndex.val();
	inputTanggalIndex.on('change', function(e) {
		e.preventDefault();
		var pilihanTanggalIndex = inputTanggalIndex.val();
		var pilihanKanal = $('#kanal').val();
		if(pilihanKanal == ""){
			window.location = "https://www.tempo.co/indeks/"+pilihanTanggalIndex;
		} else {
			window.location = "https://www.tempo.co/indeks/"+pilihanTanggalIndex+"/"+pilihanKanal;
		}
	});

	var pilihanKanal = $('#kanal').val();
	var tooltipIndexDateEmpty = inputTanggalIndex.add('.tooltip');

	var contentTooltipIndexDateEmpty = $('<div class="tooltip red-500"><div class="wrapper"><div class="arrow-up"></div><p>Pilih tanggal tayang artikel.</p><div class="wrapper"><a class="white" href="#">OK</a></div></div></div>');
	inputTanggalIndex.after(contentTooltipIndexDateEmpty);

	$('#kanal').on('change', function(e){
		e.preventDefault();
		e.stopImmediatePropagation();
		window.location.hash = $('#kanal').val();
		if(pilihanTanggalIndex == ""){
			// console.log('isi tanggal');
			var caution = setTimeout(function(){
				var tooltipIndexDateEmpty = inputTanggalIndex.add('.tooltip');

				if($('.pika-single.is-hidden').length){
					tooltipIndexDateEmpty.addClass('active');
				}

				tooltipIndexDateEmpty.add('a .white').on('click', function(e){
					e.preventDefault();
					e.stopImmediatePropagation();
					tooltipIndexDateEmpty.removeClass('active');
				});

			clearTimeout(caution);
			}, 0);

		} else {
			window.location = "https://www.tempo.co/indeks/"+pilihanTanggalIndex+"/"+pilihanKanal;
		}
	});

	var fotoHome = new Swiper('.foto-home', {
		pagination: '.swiper-pagination',
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		paginationClickable: true,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
      rotate: 10,
      stretch: 0,
      depth: 120,
      modifier: 1,
      slideShadows : true
    }
  });

	var categoryHeadline = new Swiper('.category-headline', {
		pagination: '.swiper-pagination',
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		paginationClickable: true,
		grabCursor: true,
		centeredSlides: true,
		loop: true,
		slidesPerView: 4,
		spaceBetween: 25
	});

	//detail foto
	var fotoDetail = new Swiper('.foto-detail', {
		pagination: '.swiper-pagination',
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		paginationClickable: true,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
		// loop: true,
		hashnav: true,
		hashnavWatchState: true,
		// hashnavreplaceState: true,
		slidesPerView: 'auto',
    coverflow: {
      rotate: 50,
      stretch: 0,
      depth: 120,
      modifier: 1,
      slideShadows : true
    }
	});

	var fotoDetailCaption = new Swiper('.foto-caption', {
		centeredSlides: true,
		spaceBetween: 30
	});

	fotoDetail.params.control = fotoDetailCaption;
	fotoDetailCaption.params.control = fotoDetail;

	$('.foto-detail.swiper-container a').on('click', function(e){
		e.preventDefault();
	});

	var kolomKonten = new Swiper('.kolom-konten', {
      spaceBetween: 10,
			centeredSlides: true,
  });

  var kolomNavigation = new Swiper('.kolom-navigation', {
      centeredSlides: true,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true,
			freeMode: true,
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',
  });

  kolomKonten.params.control = kolomNavigation;
  kolomNavigation.params.control = kolomKonten;

	$('.swiper-container.kolom-navigation').on('mouseenter', function(e){
		e.preventDefault();
		kolomNavigation.startAutoplay();
	});

	var majalahSlide = new Swiper('.majalah', {
		autoplay: 5000,
		pagination: '.swiper-pagination',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    loop: true,
		effect: 'flip'
	});

	// if($('#gallery').length){
	// 	// console.log('foto');
	// 	$('body').attr('id', 'gallery');
	// 	var fotoDetail = '.foto-home img'
	// 	$('.foto-home').photoSwipe();

	// 	if($('.pswp--open').length){
	// 		$('.foto-home figcaption').css({
	// 			'display':'block'
	// 		});
	// 	} else {
	// 		$('.foto-home figcaption').css({
	// 			'display':'none'
	// 		});
	// 	}
	// }

	// Photoswipe
	if($('figure').length){
		// var slideSelector = 'figure img',
		options     = {bgOpacity: 0.8},
   	events      = {
        close: function () {
            // console.log('closed');
        }
    };
		// $('article').photoSwipe(slideSelector, options, events);
	}

	// curl ads
	// var curlAds = $('.curl-ads');
	// curlAds.add('.curl').on('mouseenter', function(){
	// 	// console.log('hi');
	// 	curlAds.addClass('expanded').removeClass('collapsed');
	// });
	// curlAds.on('mouseleave', function(e){
	// 	e.stopImmediatePropagation();
	// 	// console.log('out');
	// 	curlAds.addClass('collapsed').removeClass('expanded');
	// });

	// bottom ads
  // if($('.bottom-banner').length){
  //   var bottomAdsCloseButton = $('.bottom-banner button');
  //   bottomAdsCloseButton.on('click', function(e){
  //     e.preventDefault();
  //     e.stopImmediatePropagation();
  //     // console.log('closing');
  //     $('.bottom-banner').addClass('bottom-banner-closed');
  //   });
  // }

	// premium head
	// var premiumHead = $('.premium-head');
	// var premiumSmall = $('.premium-head-small');
	// var premiumBig = $('.premium-head-big');
  // if(premiumSmall.length){
  //   premiumHead.on('mouseenter', function(e){
  //     e.preventDefault();
  //     e.stopImmediatePropagation();
  //     // console.log('opening');
	//     premiumSmall.addClass('deactive');
	//     premiumBig.addClass('active');
  //   });
	// 	premiumHead.on('mouseleave', function(e){
	// 		e.preventDefault();
	// 		e.stopImmediatePropagation();
	// 		premiumSmall.removeClass('deactive');
	// 		premiumBig.removeClass('active');
	// 	});
  // }

	// full width
	// if($('.ads-full-width').length){
	// 	var tagMain = $('main');
	// 	tagMain.addClass('ads-full-width-container');
	// 	$('main.ads-full-width-container .container-desktop > .wrapper').css({
	// 		'background-color': '#fff',
	// 		'padding': '10px'
	// 	});
	// 	$('#skin-ad .container-desktop.skin-ad .wrapper, main > .container-desktop:first-child').css({
	// 		'background-color': 'none',
	// 		'padding': 0
	// 	});
	// }

	// popup ads
	// if($('.popup-ads').length){
	// 	var popupAdsCloseButton = $('.popup-ads button');
	// 	setTimeout(function(){
	// 		$('.popup-ads').addClass('active');
	// 	}, 3000);
	// 	setTimeout(function(){
	// 		$('.popup-ads').addClass('popup-ads-closed');
	// 	}, 15000);
	// 	popupAdsCloseButton.on('click', function(e){
	// 		e.preventDefault();
	// 		e.stopImmediatePropagation();
	// 		// console.log('closing');
	// 		$('.popup-ads').addClass('popup-ads-closed');
	// 	});
	// }

	// Ads Zoom
	// if($('.xzoom').length){
	// 	$(".xzoom").xzoom({
	// 		tint: '#333',
	// 		position: '#ads-screen',
	// 		smoothLensMove: 1,
	// 		defaultScale: 2,
	// 		zoomWidth: 200
	// 	});
	// }

	// check if page contain special element
	// if($('body.asian-games').length){
	// 	console.log('asian games ready!');
	// 	$("head link[rel='stylesheet']").last().after('<link rel="stylesheet" type="text/css" href="css/style-asian-games.css">');
	// }

	if($('body.world-cup').length){
		console.log('world cup ready!');
		$("head link[rel='stylesheet']").last().after('<link rel="stylesheet" type="text/css" href="https://statik.tempo.co/css/desktop/style-world-cup.css">');
		var logoTEMPO = $('body#full-dark .header-main .logo-tempo img');
		var fokusNavigationDarkTheme = $('body#full-dark .head-newsflash .swiper-button-newsflash');
		logoTEMPO.attr("src","https://www.tempo.co/images/logo-tempo-co-white.png"); // change logo to white
		fokusNavigationDarkTheme.removeClass('swiper-button-black').addClass('swiper-button-white');
	} else if($('body.asian-games').length){
		console.log('asian games ready!');
		$("head link[rel='stylesheet']").last().after('<link rel="stylesheet" type="text/css" href="https://statik.tempo.co/css/desktop/style-asian-games.css">');
		// var logoTEMPO = $('body.asian-games .header-main .logo-tempo img');
		// var fokusNavigationDarkTheme = $('body.asian-games .head-newsflash .swiper-button-newsflash');
		// logoTEMPO.attr("src","images/logo-tempo-co-white.png"); // change logo to white
		// fokusNavigationDarkTheme.removeClass('swiper-button-black').addClass('swiper-button-white');
	}

	// Google Tag Manager
	(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-KNSBXFS');

});


function windowopen(url, title, w, h) {
	// Fixes dual-screen position Most browsers Firefox
	var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
	var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

	width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
	height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

	var left = ((width / 2) - (w / 2)) + dualScreenLeft;
	var top = ((height / 2) - (h / 2)) + dualScreenTop;
	var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

	// Puts focus on the newWindow
	if (window.focus) {
			newWindow.focus();
	}
}

const language = document.querySelector('.language');
const dropdownLanguage = document.querySelector('.language .dropdown');
// if(language.length){
language.addEventListener('click', function(){
	console.log('active');
	if(dropdownLanguage == 'active'){
		dropdownLanguage.classList.remove('active');
	} else {
		dropdownLanguage.classList.add('active');
	}

	window.addEventListener('click', function(e){
		if(e.target.closest('.language')) {
			return
		};

		dropdownLanguage.classList.remove('active');
	});
});

// }
