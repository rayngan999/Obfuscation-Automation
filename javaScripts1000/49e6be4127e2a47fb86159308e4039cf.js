$(function() {	
		var conTop = $(".floor-list").offset().top;
		$(window).scroll(function() {
			var scrt = $(window).scrollTop();
			if (scrt > conTop) {
				
				$(".elevator").show("fast", function() {
					$(".elevator-floor").css({
						
						"-webkit-transform": "scale(1)",
						"-moz-transform": "scale(1)",
						"transform": "scale(1)",
						"opacity": "1"
					})
				}).css({
					"visibility": "visible"
				})
			} else {
				$(".elevator-floor").css({
					"-webkit-transform": "scale(1.2)",
					"-moz-transform": "scale(1.2)",
					"transform": "scale(1.2)",
					"opacity": "0"
				});
				$(".elevator").css({
					"visibility": "hidden"
				})
			}
			setTab()
		});
		var arr = [],
			fsOffset = 0;
		for (var i = 1; i < $(".floor").length; i++) {
			arr.push(parseInt($(".floor").eq(i).offset().top) + 30)
		}
		$(".elevator-floor a.smooth").on("click", function() {
			var _th = $(this);
			_th.blur();
			var index = $(".elevator-floor a.smooth").index(this);
			if (index > 0) {
				fsOffset = 50
			}
			var hh = arr[index];
			$("html,body").stop().animate({
				scrollTop: hh - fsOffset + "px"
			}, 400)
		});
		$(".elevator-floor a.fsbacktotop").click(function() {
			$("html,body").stop().animate({
				scrollTop: 0
			}, 400)
		})

	function setTab() {
		var Objs = $(".floor:gt(0)");
		var textSt = $(window).scrollTop();
		
		for (var i = Objs.length - 1; i >= 0; i--) {

			if (textSt >= $(Objs[i]).offset().top - 300) {
				$(".elevator-floor a").eq(i).addClass("active").siblings().removeClass("active");
				return
			}
		}
	}
});