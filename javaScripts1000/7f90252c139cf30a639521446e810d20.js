! function(a) {
    "use strict";
    a(document).ready(function() {
        function S() {
            R = {
                lat: 23.790546,
                lng: 90.375583
            }, P = new google.maps.Map(document.getElementById("map"), {
                center: R,
                zoom: 16,
                scrollwheel: !1,
                disableDefaultUI: !0,
                zoomControl: !0
            }), Q = new google.maps.Marker({
                position: R,
                map: P,
                animation: google.maps.Animation.DROP,
                draggable: !0
            }), c.width() < 767 && P.setOptions({
                draggable: !1
            })
        }

        function T() {
            var a = [
                ["Hanota Sagar", 23.737385, 78.757671, 4],
                ["\u0997\u09c1\u09b2\u09b6\u09be\u09a8, \u09a2\u09be\u0995\u09be", 23.789747, 90.3929248, 5],
                ["Gannan, Gansu, China", 34.9862056, 102.8388954, 3],
                ["\u09ae\u09c1\u09ae\u09cd\u09ac\u0987, \u09ae\u09b9\u09be\u09b0\u09be\u09b7\u09cd\u099f\u09cd\u09b0, India", 19.0825223, 72.7411178, 2],
                ["Mahaoya, Sri Lanka", 7.8784551, 81.2146297, 4]
            ];
            P = new google.maps.Map(document.getElementById("map2"), {
                center: new google.maps.LatLng(20.9124975, 73.7479053),
                zoom: 5,
                scrollwheel: !1,
                disableDefaultUI: !0,
                zoomControl: !0
            });
            var b, d;
            for (d = 0; d < a.length; d++) b = new google.maps.Marker({
                position: new google.maps.LatLng(a[d][1], a[d][2]),
                map: P
            });
            c.width() < 767 && P.setOptions({
                draggable: !1
            })
        }
        var b = a("[data-bg-src]");
        b.each(function() {
            var b = a(this),
                c = b.data("bg-src");
            b.css("background-image", "url(" + c + ")")
        });
        var c = a(window),
            d = a(".menu--topbar"),
            e = a("#primaryMenu"),
            f = a("#secondaryMenu"),
            g = d.outerHeight() + e.outerHeight(),
            h = g + f.outerHeight(),
            i = function() {
                return c.scrollTop() > g ? f.addClass("sticky") : f.removeClass("sticky")
            };
        f.length && (i(), c.on("resize", function() {
            g = d.outerHeight() + e.outerHeight(), j.css("margin-top", h)
        }));
        var j = a(".HeaderAdjust");
        j.length && (j.css("margin-top", h), c.on("resize", function() {
            h = g + f.outerHeight(), j.css("margin-top", h)
        }));
        var k = a("#backToTop"),
            l = a(".domain--offer"),
            m = function() {
                return c.scrollTop() > 1 ? k.add(l).addClass("show") : k.add(l).removeClass("show")
            };
        k.on("click", function() {
            return a("html, body").animate({
                scrollTop: 0
            }, 500), !1
        }), k.length && m(), c.on("scroll", function() {
            f.length && i(), k.length && m()
        });
        var n = a("#subscribeForm");
        n.length && n.validate({
            rules: {
                EMAIL: {
                    required: !0,
                    email: !0
                }
            },
            errorPlacement: function(a, b) {
                return !0
            }
        });
        var o = a("#loginForm");
        o.length && o.validate({
            rules: {
                username: "required",
                password: "required"
            },
            errorPlacement: function(a, b) {
                return !0
            }
        });
        var p = a("#contactForm"),
            q = a(".contact-form-status");
        p.length && p.validate({
            rules: {
                contactName: "required",
                contactEmail: {
                    required: !0,
                    email: !0
                },
                contactSubject: "required",
                contactMessage: "required"
            },
            errorPlacement: function(a, b) {
                return !0
            },
            submitHandler: function(b) {
                var c = p.serialize();
                a.ajax({
                    type: "POST",
                    url: p.attr("action"),
                    data: c
                }).done(function(a) {
                    q.show().html(a).delay(1e3).fadeOut("slow")
                })
            }
        });
        var r = a("#postCommentForm");
        r.length && r.validate({
            rules: {
                name: "required",
                email: {
                    required: !0,
                    email: !0
                },
                comments: "required"
            },
            errorPlacement: function(a, b) {
                return !0
            }
        });
        var s = a('[data-toggle="tooltip"]');
        s.length && s.tooltip();
        var t = a(".header-slider"),
            u = a(".header--slider-nav");
        t.length && t.owlCarousel({
            slideSpeed: 1000,
			paginationSpeed: 1000,
            singleItem: !0,
            autoPlay: false,
            addClassActive: !0,
            pagination: !1,
            navigation: !0,
            navigationText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
            afterMove: function() {
                u.find("li").removeClass("active").eq(this.currentItem).addClass("active")
            }
        }), u.on("click", "li", function() {
            t.trigger("owl.goTo", a(this).index())
        });
        var v = a(".testimonial-slider"),
            w = function() {
                a.each(this.owl.userItems, function(b) {
                    var c = jQuery(this).data("recommender-thumb"),
                        d = jQuery(".testimonial-slider .owl-page span");
                    a(d[b]).html('<img src="' + c + '" alt="" class="img-responsive" />')
                })
            };
        v.length && (v.children(".testimonial-item").length > 3 && v.addClass("overload"), v.owlCarousel({
            slideSpeed: 1000,
            paginationSpeed: 1000,
            singleItem: !0,
            autoPlay: !0,
            addClassActive: !0,
            afterInit: w,
            afterUpdate: w
        }));
        var x = a(".brands-slider");
        x.length && x.owlCarousel({
            slideSpeed: 1000,
            paginationSpeed: 1000,
            items: 5,
            autoPlay: !0,
            pagination: !1
        });
        var y = a(".vps-pricing--slider-holder"),
            z = a(".VPSPricingSlider"),
            A = a(".vps-pricing--cpu"),
            B = a(".vps-pricing--ram"),
            C = a(".vps-pricing--space"),
            D = a(".vps-pricing--bandwidth"),
            E = a(".vps-pricing--total-price span"),
            F = a(".InputCPUText"),
            G = a(".InputRamText"),
            H = a(".InputSpaceText"),
            I = a(".InputBandwidthText"),
            J = a(".InputPriceText");
        if (z.length) {
            for (var K, L = vpsSliderOpts.maxPlans - 1, M = vpsSliderOpts.detfaultPlan - 1, N = 0; L > N; N++) a('<div class="pip"></div>').css("left", 100 / L * N + "%").appendTo(y.children(".pips"));
            z.slider({
                animate: "fast",
                range: "min",
                min: 0,
                max: L,
                value: M,
                step: 1,
                create: function() {
                    A.text(vpsSliderOpts.plans[M].cpuText), B.text(vpsSliderOpts.plans[M].ramText), C.text(vpsSliderOpts.plans[M].spaceText), D.text(vpsSliderOpts.plans[M].brandwidthText), E.text(vpsSliderOpts.plans[M].priceText), F.val(vpsSliderOpts.plans[M].cpuText), G.val(vpsSliderOpts.plans[M].ramText), H.val(vpsSliderOpts.plans[M].spaceText), I.val(vpsSliderOpts.plans[M].brandwidthText), J.val(vpsSliderOpts.plans[M].priceText), K = z.children(".ui-slider-handle"), a('<i class="fa fa-map-marker"></i><em></em>').appendTo(K), K.children("em").html(vpsSliderOpts.plans[M].planName)
                },
                slide: function(a, b) {
                    A.text(vpsSliderOpts.plans[b.value].cpuText), B.text(vpsSliderOpts.plans[b.value].ramText), C.text(vpsSliderOpts.plans[b.value].spaceText), D.text(vpsSliderOpts.plans[b.value].brandwidthText), E.text(vpsSliderOpts.plans[b.value].priceText), F.val(vpsSliderOpts.plans[b.value].cpuText), G.val(vpsSliderOpts.plans[b.value].ramText), H.val(vpsSliderOpts.plans[b.value].spaceText), I.val(vpsSliderOpts.plans[b.value].brandwidthText), J.val(vpsSliderOpts.plans[b.value].priceText), K.children("em").html(vpsSliderOpts.plans[b.value].planName)
                }
            })
        }
        var O = a(".counter-number");
        a(O).length && a(O).counterUp({
            delay: 10,
            time: 1e3
        });
        var P, Q, R;
        a("#map").length && S(), a("#map2").length && T(), c.width() < 992 && a("#compare table td, #pricingTable2 table td").each(function() {
            a(this).prepend('<span class="labelText">' + a(this).data("label") + "</span>")
        });
        var U = a("#sidebarTwitter");
        U.length && twttr.widgets.createTimeline({
            sourceType: "profile",
            screenName: U.data("user-name")
        }, document.getElementById("sidebarTwitter"));
        var X = (new Date, document.createElement("script"));
       
    }), a(window).on("load", function() {
        var b = a("#preloader");
        b.length && b.fadeOut("slow")
    })
}(jQuery);