(function($){
	$(function() {

		//ã¹ã¯ã­ã¼ã«ãã¦ããã
		var topBtn = $('#page-top a');
		topBtn.click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 500);
			return false;
		});
		
	  // ãã¼ã¸åãªã³ã¯ã®ã¿ãåå¾
	  $('.ancher').click(function() {
	    // ç§»ååã¨ãªãè¦ç´ ãåå¾
	    var target = $(this.hash);
	    if (!target.length) return ;
	    // ç§»ååã¨ãªãå¤
	    var targetY = target.offset();
	    // ã¹ã¯ã­ã¼ã«ã¢ãã¡ã¼ã·ã§ã³
	    $('html,body').animate({scrollTop: targetY.top}, 500);
	    // ããã·ã¥æ¸ãæãã¨ã
	    window.history.pushState(null, null, this.hash);
	    // ããã©ã«ãã®å¦çã¯ã­ã£ã³ã»ã«
	    return false;
	  });
		

        $("a[href='#']").on("click", function() {
            console.log("blocked");
            return false;
        });
		
		//å¤é¨ãµã¤ãã¯æ°ããã¦ã¤ã³ãã¦	
		$('a').removeAttr('target');  
		$("a[href^='http']:not([href*='" + location.hostname + "'])").attr('target', '_blank');
		$('a.target').attr('target', '_blank');
		

		//ãã«ãã¦ã³
		$('.pulldown').hover(function(){
			$("ul:not(:animated)", this).slideDown();
			$(this).addClass("current");
		}, function(){
			$("ul.child",this).slideUp();
			$(this).removeClass("current");
		});
		
		
		//ã¹ã¯ããã¤ã¡ã¼ã¸
		$(".imgSrcChanges").click(function(){
			var src = $(this).attr("href");
			$("#target").fadeOut("fast",function() {
				$(this).attr("src",src);
				$(this).fadeIn();
			});
			$(".imgSrcChanges").not(this).removeClass('selected');
			$(this).toggleClass('selected');
			return false;
		});
		
		
		//ã­ã¼ã«ãªã¼ãã¼
		$('.hover').hover(function(){
			$(this).attr('src', $(this).attr('src').replace('_off', '_on'));
			}, function(){
				if (!$(this).hasClass('currentPage')) {
					$(this).attr('src', $(this).attr('src').replace('_on', '_off'));
			}
		});

		//ã¢ã³ã¼ãã£ãªã³ããã«
		$('.accordion_head').click(function() {
			$(this).toggleClass("selected").next().slideToggle();
		}).next().hide();

	});


			
})(jQuery);
