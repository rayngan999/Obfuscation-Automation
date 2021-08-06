(function($){
    $(function() {

        var app = this;
        app.sp_width = 768;
        app.is_sp = (window.innerWidth<=app.sp_width);

        app.init = function() {
            if( app.is_sp ) app.sp_events();
            else app.pc_events();
        }

        app.pc_events = function() {
            app.header_scrollPC();
            app.mega_menuPC();
        }

        app.sp_events = function() {
            app.header_scrollSP();
            app.mega_menuSP();
//            app.cv_buttonsSP();
        }

        app.header_scrollPC = function() {

            var mod = this;
            mod.$nav = $(".nav");
            mod.$mega_menu = mod.$nav.find(".mega-menu-function");
            mod.fixed = false;
            mod.nav_top = mod.$nav.offset().top;
            mod.hideVal = -mod.$nav.outerHeight()-20;
            $("body").prepend(mod.$nav.clone().addClass("header-clone").addClass("fixed"));
            mod.$clone = $("body").find(".header-clone");
            mod.$clone.css({
                "top": mod.hideVal+"px",
                "z-index": 205
            });
            var lastTop = $(window).scrollTop();

            mod.$nav.addClass("active");

            mod.fixed_header = function() {

                var winTop = $(window).scrollTop();

                if( winTop>=mod.nav_top && mod.$mega_menu.hasClass("shown") ) mod.$nav.addClass("fixed");
                else mod.$nav.removeClass("fixed");

                clearTimeout($.data(this, 'timer'));
                $.data(this, 'timer', setTimeout(function() {
                    if( winTop<lastTop && winTop>=mod.nav_top+300 ) {
                        if ( !mod.fixed && !mod.$mega_menu.hasClass("shown") ) {
                            mod.fixed = true;
                            mod.$nav.removeClass("active");
                            mod.$clone.addClass("active").stop().animate({'top' : "0px"}, 800,"easeOutExpo");
                            $('#page-top').fadeIn();
                            $('#cv-btn').fadeIn();
                        }
                    }
                    else {
                        if( mod.fixed && !mod.$mega_menu.hasClass("shown") ) {
                            mod.fixed = false;
                            mod.$clone.removeClass("active").stop().animate({'top' : mod.hideVal+"px"}, 800, "easeOutExpo");
                            mod.$nav.addClass("active");
                            $('#page-top').fadeOut();
                            $('#cv-btn').fadeOut();
                        }
                    }
                    app.mega_menuPC();
                    lastTop = winTop;
                }, 50));


            }

            $(window).on("scroll", mod.fixed_header);
        }

        app.header_scrollSP = function() {

            var mod = this;
            mod.$nav = $(".nav");
			mod.$btn = $("#cv-btn");
            mod.$mega_menu = mod.$nav.find(".mega-menu-function");
            mod.fixed = false;
            mod.nav_top = mod.$nav.offset().top+mod.$nav.height();
            mod.lastTop = 0;

            mod.fixed_header = function() {

                if( !mod.$mega_menu.hasClass("display-on") ) {
                    var winTop = $(window).scrollTop();
                    if( winTop > mod.lastTop ) {
                        if( winTop>=150 ) {
                            mod.$nav.css("top", "-"+mod.$nav.outerHeight()+"px");
							mod.$btn.css("bottom", "0px");
                        }
                    }
                    else {
						mod.$nav.css("top", "0px");
						mod.$btn.css("bottom", "-61px");
					}

                    if( winTop>=mod.nav_top ) {
                        if ( !mod.fixed ) {
                            mod.fixed = true;
                            $('#page-top').fadeIn();
                            setTimeout(function() {
                               mod.$nav.addClass("fixed");
                            }, 300);
                        }
                    }
                    else if( winTop<=mod.nav_top ) {
                        if( mod.fixed ) {
                            mod.fixed = false;
                            mod.$nav.removeClass("fixed");
                            $('#page-top').fadeOut();
                        }
                    }
                    mod.lastTop = winTop;
                }

            }

            $(window).on("scroll", mod.fixed_header);
        }


        app.mega_menuPC = function() {
			$(".mega-menu-function .content").addClass("active");
            var mod = this,
				toShow,
				delay = parseInt($("#header-wrapper").attr("data-delay")),
				margin = parseInt($(".mega-menu-function .content.active").css("margin-top"));
			$(".mega-menu-function .content").removeClass("active");
            mod.$menu = $(".nav.active .menu");
            mod.$nav_item = mod.$menu.find(".nav-item");
            mod.$mega_menu = mod.$menu.find(".mega-menu-function");

            mod.$nav_item.off(".megaEvent");
            mod.$nav_item.on("mouseover.megaEvent", function() {

                var menu = $(this).parents("li").attr("data-menu"),
					$content,
					$not_content;

				if (menu) {
					$content = mod.$mega_menu.find(".content[data-menu='"+menu+"']");
                	$not_content = mod.$mega_menu.find(".content").not("[data-menu='"+menu+"']");
				}
				else {
					$content = null;
					$not_content = mod.$mega_menu.find(".content");
				}
                if( !mod.$mega_menu.hasClass("shown") ) {
					$not_content.hide();
                    mod.$mega_menu.find(".content").removeClass("active");
					if ($content) {
						mod.$mega_menu.addClass("shown");
						$content.show().addClass("active");
						toShow = true;
						setTimeout(function() {
							if (toShow) {
								mod.$mega_menu.css("min-height", $content.outerHeight()-10+margin).css("max-height", $content.outerHeight()+10+margin);
							}
						}, delay);
					}
                }
                else {
                    if( menu!=mod.$mega_menu.find(".content.active").attr("data-menu") ) {
						mod.$mega_menu.find(".content").removeClass("active").fadeOut(300);
						if ($content) {
							$content.addClass("active");
							toShow = true;
							setTimeout(function() {
								$not_content.hide();
								$content.fadeIn(300);
								mod.$mega_menu.css("min-height", Math.max(0, $content.outerHeight()-10+margin)).css("max-height", $content.outerHeight()+10+margin);
							}, 300);
						}
						else {
							toShow = false;
							setTimeout(function() {
								mod.$mega_menu.css("min-height", 0).css("max-height", 0);
								mod.$mega_menu.removeClass("shown");
								$not_content.hide();
							}, 300);
						}
                    }
                }
            });

			mod.$menu.off(".megaEvent");
            mod.$menu.on("mouseleave.megaEvent", function() {
				toShow = false;
                if( !mod.$mega_menu.hasClass("fixed") ) {
					setTimeout(function() {
						if (!toShow) {
							mod.$mega_menu.removeClass("shown").css("min-height", 0).css("max-height", 0);
							setTimeout(function() {
								mod.$nav.removeClass("fixed");
							}, delay);
						}
					}, 500);
                    if( $(window).scrollTop()<=mod.$nav.outerHeight() ) {
                        setTimeout(function() {
                            mod.$clone.removeClass("active").css("top", -mod.$nav.outerHeight()+"px");
                            mod.$nav.addClass("active");
                            app.mega_menuPC();
                        }, 500);
                    }
                }
            });
			mod.$mega_menu.off(".megaEvent");
            mod.$mega_menu.on("mouseover.megaEvent", function() {
				toShow = true;
			});
        }

        app.mega_menuSP = function() {

            $(".drop-down-function").click(function() {
                var menu = $(this).attr("data-menu");
                var $content = $(".mega-menu-function").find(".content[data-menu='"+menu+"']");
                var $not_content = $(".mega-menu-function").find(".content").not("[data-menu='"+menu+"']");

                $not_content.hide();
                $content.show();

                if( !$(this).hasClass("selected") ) {
                    $("body").addClass("locked");
                    $(".mega-menu-function").addClass('display-on');
                    $(".drop-down-function.selected").removeClass("selected");
                    $(this).addClass('selected');
                }
                else {
                    $("body").removeClass("locked");
                    $(this).removeClass("selected");
                    $(".mega-menu-function").removeClass('display-on');
                }
            });

            $("body").on("click", function(e) {
                if( $(e.target).parents(".menu-container").length==0 ) {
                    $("body").removeClass("locked");
                    $(".drop-down-function.selected").removeClass("selected");
                    $(".mega-menu-function").removeClass('display-on');
                }
            });

            $(".menu-close, .overlay").on("click", function() {
                $("body").removeClass("locked");
                $(".drop-down-function.selected").removeClass("selected");
                $(".mega-menu-function").removeClass('display-on');
            });

        }

        app.cv_buttonsSP = function() {

            var mod = this;
            mod.$btn = $("#cv-btn");
            mod.fixed = false;
            var lastTop = 0;

            mod.show_btn = function() {

                var winTop = $(window).scrollTop();
                clearTimeout($.data(this, 'timer'));
                $.data(this, 'timer', setTimeout(function() {
                    if( winTop>lastTop ) {
                        if( !mod.$btn.hasClass("animating") ) {
                            mod.$btn.addClass("animating").fadeIn(500, function() {
                                mod.$btn.removeClass("animating");
                            });
                        }
                    }
                    else if( winTop<lastTop) {
                        if( !mod.$btn.hasClass("animating") ) {
                            mod.$btn.addClass("animating").fadeOut(500, function() {
                                mod.$btn.removeClass("animating");
                            });
                        }
                    }
                    lastTop = winTop;
                }, 250));

            }

            $(window).on("scroll", mod.show_btn);

        }

        app.init();

    });
})(jQuery);