function blank() {
    $(".blank").each(function() {
        $(this).find("a").attr("target", "_blank")
    })
}

function escolhaLabel() {
    $(".form-quantity .form-col-size1 li.specification").each(function() {
        $(this).parents(".form-col-size1").show(), $(this).parent().find("option").eq(0).text("Escolha")
    })
}

function lavagem() {
    $("#caracteristicas table td.Lavagem").each(function() {
        var t = $(this).text();
        if (t.indexOf(",") !== -1)
            for (t = t.toLowerCase().replace(/[ÃÆÃÂ¡ÃÆ ÃÆÃÂ¢ÃÆÃÂ£]/g, "a").replace(/[ÃÆÃÂ©ÃÆÃÂ¨ÃÆÃÂª]/g, "e").replace(/[ÃÆÃÂ³ÃÆÃÂ²ÃÆÃÂ´ÃÆÃÂµ]/g, "o").replace(/[ÃÆÃÂºÃÆÃÂ¹ÃÆÃÂ»]/g, "u").replace(/[ÃÆÃÂ§]/g, "c").replace(/, /g, ",").replace(/ /g, "-").replace(/ÃâÃÂ°/g, "").replace(/ÃâÃÂª/g, ""), t = t.split(","), i = 0; i < t.length; i++) $(this).append("<img src='/arquivos/" + t[i] + ".jpg' style='padding: 6px;' />");
        else t = t.toLowerCase().replace(/[ÃÆÃÂ¡ÃÆ ÃÆÃÂ¢ÃÆÃÂ£]/g, "a").replace(/[ÃÆÃÂ©ÃÆÃÂ¨ÃÆÃÂª]/g, "e").replace(/[ÃÆÃÂ³ÃÆÃÂ²ÃÆÃÂ´ÃÆÃÂµ]/g, "o").replace(/[ÃÆÃÂºÃÆÃÂ¹ÃÆÃÂ»]/g, "u").replace(/[ÃÆÃÂ§]/g, "c").replace(/, /g, ",").replace(/ /g, "-").replace(/ÃâÃÂ°/g, "").replace(/ÃâÃÂª/g, ""), $(this).append("<img src='/arquivos/" + t + ".jpg' style='padding: 6px;' />")
    })
}

function sliderProductImages() {
    var t = $(".thumbs");
    if (t.find("li").length < 2) return !1;
    var e = $("<div/>").attr({
            "class": "slider-single-product"
        }).append('<div class="slider-clip"></div>'),
        i = $("<ul/>").addClass("slides");
    t.find("li").each(function(t, e) {
        $(e).find("a").attr("data-slide-index", t);
        var o = $(e).find("a").attr("rel").trim(),
            n = o.replace(/450/g, "1000"),
            s = $(e).find("img").attr("alt"),
            a = $('<li><div class="slide-image"><img src="' + o + '" alt="' + s + '" border="0" data-zoom-image="' + n + '" /></div></li>');
        i.append(a)
    }), $("#include").hide(), e.find(".slider-clip").append(i), $("#show").prepend(e), $(document).on({
        mouseleave: function() {
            $("body").removeClass("overflow-hidden"), $(".zoomContainer").removeClass("show")
        }
    }, ".zoomContainer"), $(document).on({
        mouseenter: function() {
            $("body").addClass("overflow-hidden"), $(".zoomContainer").addClass("show")
        }
    }, "#show .slider-clip");
    var o = $(".slider-single-product ul.slides");
    o.bxSlider({
        infiniteLoop: !1,
        hideControlOnEnd: !0,
        pagerCustom: ".thumbs",
        controls: !1
    })
}

function qtd() {
    function t() {
        $(".form-quantity .btn-quantity select.quantidade option:selected").each(function() {
            var t = $(".form-quantity .btn-quantity select.quantidade option:selected").val(),
                e = "qty=" + t,
                i = /(qty=)+[0-9]{1,2}/g,
                o = $(".buy-button").attr("href"),
                n = o.replace(i, e);
            $(".buy-button").attr("href", n)
        })
    }
    $(".form-quantity .btn-quantity select.quantidade").focusout(function() {
        t()
    }), $(".buy-button").mouseup(function() {
        t()
    })
}

function marca() {
    $(".brandName").each(function() {
        var t = $(this).find("a").attr("class");
        t = t.split(" "), $(this).html("<a href=/" + t[1] + "><img src='/arquivos/marca-" + t[1] + ".jpg' /></a><br><a href=/" + t[1] + ">Veja mais<br>dessa marca</a>"), $(this).show(), $(this).find("img").error(function() {
            $(this).hide()
        })
    })
}

function capitalizeMarca() {
    $(".menu-departamento ul.Marca li a").each(function() {
        var t = $(this).text().toLowerCase();
        $(this).text(t), $(this).show()
    }), $(".bread-crumb ul li strong a").each(function() {
        var t = $(this).text().toLowerCase();
        $(this).text(t)
    }), $(".widget .widget-body h5.Marca + Ul li").each(function() {
        var t = $(this).text().toLowerCase();
        $(this).text(t)
    })
}

function number_format(t, e, i, o) {
    t = (t + "").replace(",", "").replace(" ", "");
    var n = isFinite(+t) ? +t : 0,
        s = isFinite(+e) ? Math.abs(e) : 0,
        a = "undefined" == typeof o ? "," : o,
        r = "undefined" == typeof i ? "." : i,
        l = "",
        d = function(t, e) {
            var i = Math.pow(10, e);
            return "" + Math.round(t * i) / i
        };
    return l = (s ? d(n, s) : "" + Math.round(n)).split("."), l[0].length > 3 && (l[0] = l[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, a)), (l[1] || "").length < s && (l[1] = l[1] || "", l[1] += new Array(s - l[1].length + 1).join("0")), l.join(r)
}

function montaSeletorCombo() {
    $("body.produto .sku-selector-container ul .select.skuList").append("<p class='load'>Carregando Modelos...</p>"), $(".Cor.numopt-1").length < 1 && ($("body.produto .section-primary .form-quantity").click(function() {
        $("html,body").animate({
            scrollTop: $("section.section-quantity").offset().top - 20
        })
    }), $(".form-quantity .form-actions").show(), $(".form-quantity .form-actions").find("a.buy-button").click(function(t) {
        t.preventDefault()
    })), $(".value-field.Colecao, .value-field.Grade-Grande").length > 0 && ($("body.produto .section-primary .form-quantity").click(function() {
        $("html,body").animate({
            scrollTop: $("section.section-quantity").offset().top - 20
        })
    }), $(".form-quantity .form-actions").show(), $(".form-quantity .form-actions").find("a.buy-button").click(function(t) {
        t.preventDefault()
    }))
}

function description() {
    $(".section-primary .section-content-body.descricaoCurta .productDescription").each(function() {
        var t = $(this).html();
        if (t.length > 450) {
            var e = t.substring(0, 450);
            $(this).html("<p>" + e + " [...]</p><a href='#' class='leiaMais'>[+] leia mais</a>")
        }
        $(this).show()
    }), $(".section-primary .section-content-body.descricaoCurta .productDescription .leiaMais").on("click", function() {
        $("html,body").animate({
            scrollTop: $("section.section-description").offset().top - 20
        })
    })
}

function imagemPrincpalProduto() {
    $("#caracteristicas table td.Imagem-Principal").text().length > 0 ? $("#caracteristicas table td.Imagem-Principal").each(function() {
        var t = $(this).text(),
            e = "https://bazarhorizonte.vteximg.com.br/arquivos/" + t;
        setTimeout(function() {
            $(".apresentacao").each(function() {
                $(this).append("<img class='imagemPrincpalProduto' src='" + e + "' />")
            })
        }, 100)
    }) : $(".section-primary .section-body #show").show()
}

function imagePrincipalVitrine() {
    
    $(".prateleira > ul > li").each(function() {
        var imagemHover;
        if ($(this).find(".product_field_198 ul li").text().length > 0) {
            imagemHover = "https://bazarhorizonte.vteximg.com.br/arquivos/" + $(this).find(".product_field_198 ul li").text();
        }else{
            imagemHover = $(this).find(".grupo-imagens .imagem-principal img").attr("src");
        }
        if ($(this).find(".product_field_109 ul li").text().length > 0) {
            var t = "https://bazarhorizonte.vteximg.com.br/arquivos/" + $(this).find(".product_field_109 ul li").text();
            $(this).find("a.product-image").html("<img src='" + t + "' data-original='" + t + "' />"), $(this).find(".grupo-imagens .imagem-label").html(""), "" != $(this).find(".grupo-imagens .imagem-label").html() ? $(this).find(".imagem-principal-link img").attr("data-hover", $(this).find(".grupo-imagens .imagem-label img").attr("src")) : "" != $(this).find(".grupo-imagens .imagem-principal").html() && $(this).find(".imagem-principal-link img").attr("data-hover", imagemHover), $(this).find("a.product-image img").show()
        } else "" != $(this).find(".grupo-imagens .imagem-label").html() && $(this).find(".imagem-principal img").attr("data-hover", $(this).find(".grupo-imagens .imagem-label img").attr("src")), $(this).find("a.product-image img").eq(0).show();
        $(this).parents("ul").find(".liHide").length > 0 && $(".section-products-tertiary .checkbox").show().find("input").removeClass("seleciona"), $(this).find(".btn a").each(function() {
            var t = $(this).attr("href");
            if (t.indexOf("/checkout/") !== -1) {
                var e = $(this).parents(".product-content").find(".apartir p");
                if (e.text().indexOf("A partir de:") !== -1) {
                    var i = e.html().replace("A partir de:", "Por:");
                    e.html(i)
                }
            }
            $(this).parents(".product-content").find(".apartir").show()
        })
    })
    $( ".product-image" )

        .mouseenter(function() {

            if($( this ).find(".imagem-label").html() != ""){
                if($( this ).find(".imagem-label").find("a").html() != ""){
                    $( this ).addClass( "produto-hover" );
                }
            }else{
                $( this ).find(".imagem-principal-link").find("img").attr("src",$( this ).find(".imagem-principal-link").find("img").attr("data-hover"))
            }         
          
            
        })
        .mouseleave(function() {
            if($( this ).find(".imagem-label").html() != ""){
                if($( this ).find(".imagem-label").find("a").html() != ""){
                    $( this ).removeClass( "produto-hover" );
                }
            }else{
                $( this ).find(".imagem-principal-link").find("img").attr("src",$( this ).find(".imagem-principal-link").find("img").attr("data-original"))
            }  
            
    });    
}

function tagDestaque() {
    $(".prateleira > ul > li").each(function() {
        if ($(this).find(".product_field_187 ul li").text().length > 0) {
            var img = "https://bazarhorizonte.vteximg.com.br/arquivos/" + $(this).find(".product_field_187 ul li").text();
            $(this).find("#img-tag").attr("src",img);
        } 
    })
}

function mostratextoNone() {
    var t = $(".section-products-tertiary .section-body .prateleira.vitrine .prateleira li").length,
        e = $(".section-products-tertiary .section-body .prateleira.vitrine .prateleira li .liHide").length;
    t === e && ($(".section-products-tertiary .section-body .prateleira.vitrine .prateleira p").hasClass("none") || $(".section-products-tertiary .section-body .prateleira.vitrine .prateleira").append("<p class='none'><span>Desculpe!</span> <br />Todos os itens estÃÆÃÂ£o esgotados.<br /> Caso deseje visualizÃÆÃÂ¡los clique em 'Exibir itens Esgotados', acima do Ordenar por.</p>")), $(".section-products-tertiary .section-head").hasClass("mySelect") ? ($(".section-products-tertiary .section-body .prateleira.vitrine .prateleira li .liHide").addClass("liShow"), $(".section-products-tertiary .section-body .prateleira.vitrine .prateleira p.none").hide()) : ($(".section-products-tertiary .section-body .prateleira.vitrine .prateleira li .liHide").removeClass("liShow"), $(".section-products-tertiary .section-body .prateleira.vitrine .prateleira p.none").show())
}

function vitrneMostraEsconde() {
    $(".section-products-tertiary .section-head").hasClass("mySelect") && ($(".catalogo .section-products-tertiary .checkbox input").addClass("seleciona"), $(".section-products-tertiary .section-body .prateleira.vitrine .prateleira li .liHide").addClass("liShow"))
}

function clickboxMostraEsconde() {
    $(".catalogo .section-products-tertiary .section-body .main").each(function() {
        var t = $(".catalogo .section-products-tertiary .section-head .checkbox").clone();
        $(this).append('<div class="checkbox" style="display:none;">' + $(t).html() + "</div>")
    }), $(".section-products-tertiary .checkbox .form-label").on("click", function() {
        $(".checkbox input").each(function() {
            $(this).toggleClass("seleciona"), $(this).parents(".section-head").toggleClass("mySelect")
        }), mostratextoNone()
    })
}

function titlePagina() {
    $(".marca .widget-stitch .widget-head h2").each(function() {
        var t = $(".bread-crumb li.last strong a").text();
        $(this).text(t), $(".marca .section-products-tertiary h2").text(t).show(), $(this).show()
    })
}

function menuSite(t) {
    t < 767 && ($(".nav li .dropdown ul li ol").each(function() {
        $(this).prev().addClass("setinha")
    }), $(".nav li .dropdown ul li ol").mouseover(function() {
        pairar = setTimeout(function() {
            $(this).parent().addClass("active")
        }, 1500, this);
    }), $(".nav li .dropdown ul li ol").mouseleave(function() {
        $(this).parent().removeClass("active")
    }))
}

function mosaico() {
    $(".section-feeds .feed").click(function() {
        var t = $(this).find(".feed-image a").attr("href");
        window.location.href = t
    })
}

function Menu() {
    $(window).scroll(function() {
        $(this).scrollTop() > 280 ? $(".header-fixed").fadeIn() : $(".header-fixed").fadeOut()
    }), $(".nav-mobile").on("click", function(t) {
        t.preventDefault(), $(this).toggleClass("active"), $(this).parents(".header").find(".header-bar .nav").toggleClass("active"), $(".nav").find("li").removeClass("dropdown-visible"), $(".nav > ul > li > a:first-of-type").each(function() {
            $(this).on("click", function(t) {
                t.preventDefault(), $(this).parent().toggleClass("dropdown-visible").siblings().removeClass("dropdown-visible"), $("html, body").stop().animate({
                    scrollTop: $(this).offset().top
                }, 500)
            })
        }), $(".nav  a.setinha").each(function() {
            $(this).on("click", function(t) {
                t.preventDefault();
                var e = $(this).clone().addClass("eu").text("Veja todo o departamento");
                $(this).parent().find("a").hasClass("eu") || $(this).after($(e)), $(this).parent().toggleClass("dropdown-visible").siblings().removeClass("dropdown-visible"), $("html, body").stop().animate({
                    scrollTop: $(this).offset().top
                }, 500)
            })
        })
    })
}

function boxCategorias() {
    $(".section-featured .featured-item .featured-content").each(function() {
        $(this).click(function() {
            var t = $(this).parent().find(".featured-image a").attr("href");
            window.location.href = t
        })
    })
}

function todasasMarca() {
    $(".nav-letters li a").each(function() {
        var t = $(this).text();
        $(this).addClass(t)
    }), $(".section-products-tertiary .section-body .products .menu-departamento .brandFilter ul li").each(function() {
        var t = $(this).text(),
            e = t.substr(0, 1);
        $("div#" + e + " .contet").append($(this).find("a")), "0" != e && "1" != e && "2" != e && "3" != e && "4" != e && "5" != e && "6" != e && "7" != e && "8" != e && "9" != e || ($(".nav-letters li a.0-9").addClass("sim"), $("div#0-9 .contet").append($(this).find("a"))), $(".nav-letters li a." + e).addClass("sim")
    }), $("body.todas-as-marcas .products div .contet").each(function() {
        $(this).text().length > 0 && $(this).parent().show()
    })
}

function modalHome() {
    $("#loja-new").each(function() {
        function t() {
            $.cookie("loja-new-cookie", "ON", {
                expires: 1
            })
        }
        $(this).find(".close").click(function(t) {
            t.preventDefault(), $(this).parent().hide()
        }), $(this).click(function(t) {
            t.preventDefault(), $(this).hide("fast")
        });
        var e = !0,
            i = !0;
        1 == e && ("ON" != $.cookie("loja-new-cookie") ? ($(this).show(), 1 == i && t()) : 0 == i && ($.cookie("loja-new-cookie", ""), $(this).show()))
    })
}

function arrumaTextoDescontoPorcentagem() {
    $(".prateleira ul li a.desconto").each(function() {
        if ($(this).text().length > 0 && $(this).text().indexOf(",") !== -1) {
            var t = $(this).text().split(",");
            $(this).html("<span>-" + t[0] + "%</span>"), $(this).show()
        }
    })
}

function videos() {
    function t(t, e) {
        t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var i = "[\\?&]" + t + "=([^&#]*)",
            o = new RegExp(i),
            n = o.exec(e);
        return null == n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
    }
    $("#caracteristicas td.Video").each(function() {
        var e = $(this).html(),
            i = t("v", e);
        $(".section-image.video").html('<iframe src="https://www.youtube.com/embed/' + i + '" frameborder="0" allowfullscreen></iframe>')
    })
}
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(t, e, i, o, n) {
            return jQuery.easing[jQuery.easing.def](t, e, i, o, n)
        },
        easeInQuad: function(t, e, i, o, n) {
            return o * (e /= n) * e + i
        },
        easeOutQuad: function(t, e, i, o, n) {
            return -o * (e /= n) * (e - 2) + i
        },
        easeInOutQuad: function(t, e, i, o, n) {
            return (e /= n / 2) < 1 ? o / 2 * e * e + i : -o / 2 * (--e * (e - 2) - 1) + i
        },
        easeInCubic: function(t, e, i, o, n) {
            return o * (e /= n) * e * e + i
        },
        easeOutCubic: function(t, e, i, o, n) {
            return o * ((e = e / n - 1) * e * e + 1) + i
        },
        easeInOutCubic: function(t, e, i, o, n) {
            return (e /= n / 2) < 1 ? o / 2 * e * e * e + i : o / 2 * ((e -= 2) * e * e + 2) + i
        },
        easeInQuart: function(t, e, i, o, n) {
            return o * (e /= n) * e * e * e + i
        },
        easeOutQuart: function(t, e, i, o, n) {
            return -o * ((e = e / n - 1) * e * e * e - 1) + i
        },
        easeInOutQuart: function(t, e, i, o, n) {
            return (e /= n / 2) < 1 ? o / 2 * e * e * e * e + i : -o / 2 * ((e -= 2) * e * e * e - 2) + i
        },
        easeInQuint: function(t, e, i, o, n) {
            return o * (e /= n) * e * e * e * e + i
        },
        easeOutQuint: function(t, e, i, o, n) {
            return o * ((e = e / n - 1) * e * e * e * e + 1) + i
        },
        easeInOutQuint: function(t, e, i, o, n) {
            return (e /= n / 2) < 1 ? o / 2 * e * e * e * e * e + i : o / 2 * ((e -= 2) * e * e * e * e + 2) + i
        },
        easeInSine: function(t, e, i, o, n) {
            return -o * Math.cos(e / n * (Math.PI / 2)) + o + i
        },
        easeOutSine: function(t, e, i, o, n) {
            return o * Math.sin(e / n * (Math.PI / 2)) + i
        },
        easeInOutSine: function(t, e, i, o, n) {
            return -o / 2 * (Math.cos(Math.PI * e / n) - 1) + i
        },
        easeInExpo: function(t, e, i, o, n) {
            return 0 == e ? i : o * Math.pow(2, 10 * (e / n - 1)) + i
        },
        easeOutExpo: function(t, e, i, o, n) {
            return e == n ? i + o : o * (-Math.pow(2, -10 * e / n) + 1) + i
        },
        easeInOutExpo: function(t, e, i, o, n) {
            return 0 == e ? i : e == n ? i + o : (e /= n / 2) < 1 ? o / 2 * Math.pow(2, 10 * (e - 1)) + i : o / 2 * (-Math.pow(2, -10 * --e) + 2) + i
        },
        easeInCirc: function(t, e, i, o, n) {
            return -o * (Math.sqrt(1 - (e /= n) * e) - 1) + i
        },
        easeOutCirc: function(t, e, i, o, n) {
            return o * Math.sqrt(1 - (e = e / n - 1) * e) + i
        },
        easeInOutCirc: function(t, e, i, o, n) {
            return (e /= n / 2) < 1 ? -o / 2 * (Math.sqrt(1 - e * e) - 1) + i : o / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
        },
        easeInElastic: function(t, e, i, o, n) {
            var s = 1.70158,
                a = 0,
                r = o;
            if (0 == e) return i;
            if (1 == (e /= n)) return i + o;
            if (a || (a = .3 * n), r < Math.abs(o)) {
                r = o;
                var s = a / 4
            } else var s = a / (2 * Math.PI) * Math.asin(o / r);
            return -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - s) * (2 * Math.PI) / a)) + i
        },
        easeOutElastic: function(t, e, i, o, n) {
            var s = 1.70158,
                a = 0,
                r = o;
            if (0 == e) return i;
            if (1 == (e /= n)) return i + o;
            if (a || (a = .3 * n), r < Math.abs(o)) {
                r = o;
                var s = a / 4
            } else var s = a / (2 * Math.PI) * Math.asin(o / r);
            return r * Math.pow(2, -10 * e) * Math.sin((e * n - s) * (2 * Math.PI) / a) + o + i
        },
        easeInOutElastic: function(t, e, i, o, n) {
            var s = 1.70158,
                a = 0,
                r = o;
            if (0 == e) return i;
            if (2 == (e /= n / 2)) return i + o;
            if (a || (a = n * (.3 * 1.5)), r < Math.abs(o)) {
                r = o;
                var s = a / 4
            } else var s = a / (2 * Math.PI) * Math.asin(o / r);
            return e < 1 ? -.5 * (r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - s) * (2 * Math.PI) / a)) + i : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * n - s) * (2 * Math.PI) / a) * .5 + o + i
        },
        easeInBack: function(t, e, i, o, n, s) {
            return void 0 == s && (s = 1.70158), o * (e /= n) * e * ((s + 1) * e - s) + i
        },
        easeOutBack: function(t, e, i, o, n, s) {
            return void 0 == s && (s = 1.70158), o * ((e = e / n - 1) * e * ((s + 1) * e + s) + 1) + i
        },
        easeInOutBack: function(t, e, i, o, n, s) {
            return void 0 == s && (s = 1.70158), (e /= n / 2) < 1 ? o / 2 * (e * e * (((s *= 1.525) + 1) * e - s)) + i : o / 2 * ((e -= 2) * e * (((s *= 1.525) + 1) * e + s) + 2) + i
        },
        easeInBounce: function(t, e, i, o, n) {
            return o - jQuery.easing.easeOutBounce(t, n - e, 0, o, n) + i
        },
        easeOutBounce: function(t, e, i, o, n) {
            return (e /= n) < 1 / 2.75 ? o * (7.5625 * e * e) + i : e < 2 / 2.75 ? o * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : e < 2.5 / 2.75 ? o * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : o * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
        },
        easeInOutBounce: function(t, e, i, o, n) {
            return e < n / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, o, n) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - n, 0, o, n) + .5 * o + i
        }
    }),
    function(t) {
        var e = {},
            o = {
                mode: "horizontal",
                slideSelector: "",
                infiniteLoop: !0,
                hideControlOnEnd: !1,
                speed: 500,
                easing: null,
                slideMargin: 0,
                startSlide: 0,
                randomStart: !1,
                captions: !1,
                ticker: !1,
                tickerHover: !1,
                adaptiveHeight: !1,
                adaptiveHeightSpeed: 500,
                video: !1,
                useCSS: !0,
                preloadImages: "visible",
                responsive: !0,
                slideZIndex: 50,
                wrapperClass: "bx-wrapper",
                touchEnabled: !0,
                swipeThreshold: 50,
                oneToOneTouch: !0,
                preventDefaultSwipeX: !0,
                preventDefaultSwipeY: !1,
                pager: !0,
                pagerType: "full",
                pagerShortSeparator: " / ",
                pagerSelector: null,
                buildPager: null,
                pagerCustom: null,
                controls: !0,
                nextText: "Next",
                prevText: "Prev",
                nextSelector: null,
                prevSelector: null,
                autoControls: !1,
                startText: "Start",
                stopText: "Stop",
                autoControlsCombine: !1,
                autoControlsSelector: null,
                auto: !1,
                pause: 4e3,
                autoStart: !0,
                autoDirection: "next",
                autoHover: !1,
                autoDelay: 0,
                autoSlideForOnePage: !1,
                minSlides: 1,
                maxSlides: 1,
                moveSlides: 0,
                slideWidth: 0,
                onSliderLoad: function() {},
                onSlideBefore: function() {},
                onSlideAfter: function() {},
                onSlideNext: function() {},
                onSlidePrev: function() {},
                onSliderResize: function() {}
            };
        t.fn.bxSlider = function(n) {
            if (0 == this.length) return this;
            if (this.length > 1) return this.each(function() {
                t(this).bxSlider(n)
            }), this;
            var s = {},
                a = this;
            e.el = this;
            var r = t(window).width(),
                l = t(window).height(),
                d = function() {
                    s.settings = t.extend({}, o, n), s.settings.slideWidth = parseInt(s.settings.slideWidth), s.children = a.children(s.settings.slideSelector), s.children.length < s.settings.minSlides && (s.settings.minSlides = s.children.length), s.children.length < s.settings.maxSlides && (s.settings.maxSlides = s.children.length), s.settings.randomStart && (s.settings.startSlide = Math.floor(Math.random() * s.children.length)), s.active = {
                        index: s.settings.startSlide
                    }, s.carousel = s.settings.minSlides > 1 || s.settings.maxSlides > 1, s.carousel && (s.settings.preloadImages = "all"), s.minThreshold = s.settings.minSlides * s.settings.slideWidth + (s.settings.minSlides - 1) * s.settings.slideMargin, s.maxThreshold = s.settings.maxSlides * s.settings.slideWidth + (s.settings.maxSlides - 1) * s.settings.slideMargin, s.working = !1, s.controls = {}, s.interval = null, s.animProp = "vertical" == s.settings.mode ? "top" : "left", s.usingCSS = s.settings.useCSS && "fade" != s.settings.mode && function() {
                        var t = document.createElement("div"),
                            e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                        for (var i in e)
                            if (void 0 !== t.style[e[i]]) return s.cssPrefix = e[i].replace("Perspective", "").toLowerCase(), s.animProp = "-" + s.cssPrefix + "-transform", !0;
                        return !1
                    }(), "vertical" == s.settings.mode && (s.settings.maxSlides = s.settings.minSlides), a.data("origStyle", a.attr("style")), a.children(s.settings.slideSelector).each(function() {
                        t(this).data("origStyle", t(this).attr("style"))
                    }), c()
                },
                c = function() {
                    a.wrap('<div class="' + s.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'), s.viewport = a.parent(), s.loader = t('<div class="bx-loading" />'), s.viewport.prepend(s.loader), a.css({
                        width: "horizontal" == s.settings.mode ? 100 * s.children.length + 215 + "%" : "auto",
                        position: "relative"
                    }), s.usingCSS && s.settings.easing ? a.css("-" + s.cssPrefix + "-transition-timing-function", s.settings.easing) : s.settings.easing || (s.settings.easing = "swing");
                    f();
                    s.viewport.css({
                        width: "100%",
                        overflow: "hidden",
                        position: "relative"
                    }), s.viewport.parent().css({
                        maxWidth: g()
                    }), s.settings.pager || s.viewport.parent().css({
                        margin: "0 auto 0px"
                    }), s.children.css({
                        "float": "horizontal" == s.settings.mode ? "left" : "none",
                        listStyle: "none",
                        position: "relative"
                    }), s.children.css("width", m()), "horizontal" == s.settings.mode && s.settings.slideMargin > 0 && s.children.css("marginRight", s.settings.slideMargin), "vertical" == s.settings.mode && s.settings.slideMargin > 0 && s.children.css("marginBottom", s.settings.slideMargin), "fade" == s.settings.mode && (s.children.css({
                        position: "absolute",
                        zIndex: 0,
                        display: "none"
                    }), s.children.eq(s.settings.startSlide).css({
                        zIndex: s.settings.slideZIndex,
                        display: "block"
                    })), s.controls.el = t('<div class="bx-controls" />'), s.settings.captions && F(), s.active.last = s.settings.startSlide == v() - 1, s.settings.video && a.fitVids();
                    var e = s.children.eq(s.settings.startSlide);
                    "all" == s.settings.preloadImages && (e = s.children), s.settings.ticker ? s.settings.pager = !1 : (s.settings.pager && y(), s.settings.controls && S(), s.settings.auto && s.settings.autoControls && C(), (s.settings.controls || s.settings.autoControls || s.settings.pager) && s.viewport.after(s.controls.el)), h(e, u)
                },
                h = function(e, i) {
                    var o = e.find("img, iframe").length;
                    if (0 == o) return void i();
                    var n = 0;
                    e.find("img, iframe").each(function() {
                        t(this).one("load", function() {
                            ++n == o && i()
                        }).each(function() {
                            this.complete && t(this).load()
                        })
                    })
                },
                u = function() {
                    if (s.settings.infiniteLoop && "fade" != s.settings.mode && !s.settings.ticker) {
                        var e = "vertical" == s.settings.mode ? s.settings.minSlides : s.settings.maxSlides,
                            i = s.children.slice(0, e).clone().addClass("bx-clone"),
                            o = s.children.slice(-e).clone().addClass("bx-clone");
                        a.append(i).prepend(o)
                    }
                    s.loader.remove(), b(), "vertical" == s.settings.mode && (s.settings.adaptiveHeight = !0), s.viewport.height(p()), a.redrawSlider(), s.settings.onSliderLoad(s.active.index), s.initialized = !0, s.settings.responsive && t(window).bind("resize", R), s.settings.auto && s.settings.autoStart && (v() > 1 || s.settings.autoSlideForOnePage) && P(), s.settings.ticker && B(), s.settings.pager && E(s.settings.startSlide), s.settings.controls && O(), s.settings.touchEnabled && !s.settings.ticker && D()
                },
                p = function() {
                    var e = 0,
                        o = t();
                    if ("vertical" == s.settings.mode || s.settings.adaptiveHeight)
                        if (s.carousel) {
                            var n = 1 == s.settings.moveSlides ? s.active.index : s.active.index * w();
                            for (o = s.children.eq(n), i = 1; i <= s.settings.maxSlides - 1; i++) o = n + i >= s.children.length ? o.add(s.children.eq(i - 1)) : o.add(s.children.eq(n + i))
                        } else o = s.children.eq(s.active.index);
                    else o = s.children;
                    return "vertical" == s.settings.mode ? (o.each(function(i) {
                        e += t(this).outerHeight()
                    }), s.settings.slideMargin > 0 && (e += s.settings.slideMargin * (s.settings.minSlides - 1))) : e = Math.max.apply(Math, o.map(function() {
                        return t(this).outerHeight(!1)
                    }).get()), "border-box" == s.viewport.css("box-sizing") ? e += parseFloat(s.viewport.css("padding-top")) + parseFloat(s.viewport.css("padding-bottom")) + parseFloat(s.viewport.css("border-top-width")) + parseFloat(s.viewport.css("border-bottom-width")) : "padding-box" == s.viewport.css("box-sizing") && (e += parseFloat(s.viewport.css("padding-top")) + parseFloat(s.viewport.css("padding-bottom"))), e
                },
                g = function() {
                    var t = "100%";
                    return s.settings.slideWidth > 0 && (t = "horizontal" == s.settings.mode ? s.settings.maxSlides * s.settings.slideWidth + (s.settings.maxSlides - 1) * s.settings.slideMargin : s.settings.slideWidth), t
                },
                m = function() {
                    var t = s.settings.slideWidth,
                        e = s.viewport.width();
                    return 0 == s.settings.slideWidth || s.settings.slideWidth > e && !s.carousel || "vertical" == s.settings.mode ? t = e : s.settings.maxSlides > 1 && "horizontal" == s.settings.mode && (e > s.maxThreshold || e < s.minThreshold && (t = (e - s.settings.slideMargin * (s.settings.minSlides - 1)) / s.settings.minSlides)), t
                },
                f = function() {
                    var t = 1;
                    if ("horizontal" == s.settings.mode && s.settings.slideWidth > 0)
                        if (s.viewport.width() < s.minThreshold) t = s.settings.minSlides;
                        else if (s.viewport.width() > s.maxThreshold) t = s.settings.maxSlides;
                    else {
                        var e = s.children.first().width() + s.settings.slideMargin;
                        t = Math.floor((s.viewport.width() + s.settings.slideMargin) / e)
                    } else "vertical" == s.settings.mode && (t = s.settings.minSlides);
                    return t
                },
                v = function() {
                    var t = 0;
                    if (s.settings.moveSlides > 0)
                        if (s.settings.infiniteLoop) t = Math.ceil(s.children.length / w());
                        else
                            for (var e = 0, i = 0; e < s.children.length;) ++t, e = i + f(), i += s.settings.moveSlides <= f() ? s.settings.moveSlides : f();
                    else t = Math.ceil(s.children.length / f());
                    return t
                },
                w = function() {
                    return s.settings.moveSlides > 0 && s.settings.moveSlides <= f() ? s.settings.moveSlides : f()
                },
                b = function() {
                    if (s.children.length > s.settings.maxSlides && s.active.last && !s.settings.infiniteLoop) {
                        if ("horizontal" == s.settings.mode) {
                            var t = s.children.last(),
                                e = t.position();
                            x(-(e.left - (s.viewport.width() - t.outerWidth())), "reset", 0)
                        } else if ("vertical" == s.settings.mode) {
                            var i = s.children.length - s.settings.minSlides,
                                e = s.children.eq(i).position();
                            x(-e.top, "reset", 0)
                        }
                    } else {
                        var e = s.children.eq(s.active.index * w()).position();
                        s.active.index == v() - 1 && (s.active.last = !0), void 0 != e && ("horizontal" == s.settings.mode ? x(-e.left, "reset", 0) : "vertical" == s.settings.mode && x(-e.top, "reset", 0))
                    }
                },
                x = function(t, e, i, o) {
                    if (s.usingCSS) {
                        var n = "vertical" == s.settings.mode ? "translate3d(0, " + t + "px, 0)" : "translate3d(" + t + "px, 0, 0)";
                        a.css("-" + s.cssPrefix + "-transition-duration", i / 1e3 + "s"), "slide" == e ? (a.css(s.animProp, n), a.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                            a.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), L()
                        })) : "reset" == e ? a.css(s.animProp, n) : "ticker" == e && (a.css("-" + s.cssPrefix + "-transition-timing-function", "linear"), a.css(s.animProp, n), a.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                            a.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), x(o.resetValue, "reset", 0), M()
                        }))
                    } else {
                        var r = {};
                        r[s.animProp] = t, "slide" == e ? a.animate(r, i, s.settings.easing, function() {
                            L()
                        }) : "reset" == e ? a.css(s.animProp, t) : "ticker" == e && a.animate(r, speed, "linear", function() {
                            x(o.resetValue, "reset", 0), M()
                        })
                    }
                },
                z = function() {
                    for (var e = "", i = v(), o = 0; o < i; o++) {
                        var n = "";
                        s.settings.buildPager && t.isFunction(s.settings.buildPager) ? (n = s.settings.buildPager(o), s.pagerEl.addClass("bx-custom-pager")) : (n = o + 1, s.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + o + '" class="bx-pager-link">' + n + "</a></div>"
                    }
                    s.pagerEl.html(e)
                },
                y = function() {
                    s.settings.pagerCustom ? s.pagerEl = t(s.settings.pagerCustom) : (s.pagerEl = t('<div class="bx-pager" />'), s.settings.pagerSelector ? t(s.settings.pagerSelector).html(s.pagerEl) : s.controls.el.addClass("bx-has-pager").append(s.pagerEl), z()), s.pagerEl.on("click", "a", k)
                },
                S = function() {
                    s.controls.next = t('<a class="bx-next" href="">' + s.settings.nextText + "</a>"), s.controls.prev = t('<a class="bx-prev" href="">' + s.settings.prevText + "</a>"), s.controls.next.bind("click", $), s.controls.prev.bind("click", T), s.settings.nextSelector && t(s.settings.nextSelector).append(s.controls.next), s.settings.prevSelector && t(s.settings.prevSelector).append(s.controls.prev), s.settings.nextSelector || s.settings.prevSelector || (s.controls.directionEl = t('<div class="bx-controls-direction" />'), s.controls.directionEl.append(s.controls.prev).append(s.controls.next), s.controls.el.addClass("bx-has-controls-direction").append(s.controls.directionEl))
                },
                C = function() {
                    s.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + s.settings.startText + "</a></div>"), s.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + s.settings.stopText + "</a></div>"), s.controls.autoEl = t('<div class="bx-controls-auto" />'), s.controls.autoEl.on("click", ".bx-start", W), s.controls.autoEl.on("click", ".bx-stop", I), s.settings.autoControlsCombine ? s.controls.autoEl.append(s.controls.start) : s.controls.autoEl.append(s.controls.start).append(s.controls.stop), s.settings.autoControlsSelector ? t(s.settings.autoControlsSelector).html(s.controls.autoEl) : s.controls.el.addClass("bx-has-controls-auto").append(s.controls.autoEl), H(s.settings.autoStart ? "stop" : "start")
                },
                F = function() {
                    s.children.each(function(e) {
                        var i = t(this).find("img:first").attr("title");
                        void 0 != i && ("" + i).length && t(this).append('<div class="bx-caption"><span>' + i + "</span></div>")
                    })
                },
                $ = function(t) {
                    s.settings.auto && a.stopAuto(), a.goToNextSlide(), t.preventDefault()
                },
                T = function(t) {
                    s.settings.auto && a.stopAuto(), a.goToPrevSlide(), t.preventDefault()
                },
                W = function(t) {
                    a.startAuto(), t.preventDefault()
                },
                I = function(t) {
                    a.stopAuto(), t.preventDefault()
                },
                k = function(e) {
                    s.settings.auto && a.stopAuto();
                    var i = t(e.currentTarget);
                    if (void 0 !== i.attr("data-slide-index")) {
                        var o = parseInt(i.attr("data-slide-index"));
                        o != s.active.index && a.goToSlide(o), e.preventDefault()
                    }
                },
                E = function(e) {
                    var i = s.children.length;
                    return "short" == s.settings.pagerType ? (s.settings.maxSlides > 1 && (i = Math.ceil(s.children.length / s.settings.maxSlides)), void s.pagerEl.html(e + 1 + s.settings.pagerShortSeparator + i)) : (s.pagerEl.find("a").removeClass("active"), void s.pagerEl.each(function(i, o) {
                        t(o).find("a").eq(e).addClass("active")
                    }))
                },
                L = function() {
                    if (s.settings.infiniteLoop) {
                        var t = "";
                        0 == s.active.index ? t = s.children.eq(0).position() : s.active.index == v() - 1 && s.carousel ? t = s.children.eq((v() - 1) * w()).position() : s.active.index == s.children.length - 1 && (t = s.children.eq(s.children.length - 1).position()), t && ("horizontal" == s.settings.mode ? x(-t.left, "reset", 0) : "vertical" == s.settings.mode && x(-t.top, "reset", 0))
                    }
                    s.working = !1, s.settings.onSlideAfter(s.children.eq(s.active.index), s.oldIndex, s.active.index)
                },
                H = function(t) {
                    s.settings.autoControlsCombine ? s.controls.autoEl.html(s.controls[t]) : (s.controls.autoEl.find("a").removeClass("active"), s.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"))
                },
                O = function() {
                    1 == v() ? (s.controls.prev.addClass("disabled"), s.controls.next.addClass("disabled")) : !s.settings.infiniteLoop && s.settings.hideControlOnEnd && (0 == s.active.index ? (s.controls.prev.addClass("disabled"), s.controls.next.removeClass("disabled")) : s.active.index == v() - 1 ? (s.controls.next.addClass("disabled"), s.controls.prev.removeClass("disabled")) : (s.controls.prev.removeClass("disabled"), s.controls.next.removeClass("disabled")))
                },
                P = function() {
                    if (s.settings.autoDelay > 0) {
                        setTimeout(a.startAuto, s.settings.autoDelay)
                    } else a.startAuto();
                    s.settings.autoHover && a.hover(function() {
                        s.interval && (a.stopAuto(!0), s.autoPaused = !0)
                    }, function() {
                        s.autoPaused && (a.startAuto(!0), s.autoPaused = null)
                    })
                },
                B = function() {
                    var e = 0;
                    if ("next" == s.settings.autoDirection) a.append(s.children.clone().addClass("bx-clone"));
                    else {
                        a.prepend(s.children.clone().addClass("bx-clone"));
                        var i = s.children.first().position();
                        e = "horizontal" == s.settings.mode ? -i.left : -i.top
                    }
                    x(e, "reset", 0), s.settings.pager = !1, s.settings.controls = !1, s.settings.autoControls = !1, s.settings.tickerHover && !s.usingCSS && s.viewport.hover(function() {
                        a.stop()
                    }, function() {
                        var e = 0;
                        s.children.each(function(i) {
                            e += "horizontal" == s.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
                        });
                        var i = s.settings.speed / e,
                            o = "horizontal" == s.settings.mode ? "left" : "top",
                            n = i * (e - Math.abs(parseInt(a.css(o))));
                        M(n)
                    }), M()
                },
                M = function(t) {
                    speed = t ? t : s.settings.speed;
                    var e = {
                            left: 0,
                            top: 0
                        },
                        i = {
                            left: 0,
                            top: 0
                        };
                    "next" == s.settings.autoDirection ? e = a.find(".bx-clone").first().position() : i = s.children.first().position();
                    var o = "horizontal" == s.settings.mode ? -e.left : -e.top,
                        n = "horizontal" == s.settings.mode ? -i.left : -i.top,
                        r = {
                            resetValue: n
                        };
                    x(o, "ticker", speed, r)
                },
                D = function() {
                    s.touch = {
                        start: {
                            x: 0,
                            y: 0
                        },
                        end: {
                            x: 0,
                            y: 0
                        }
                    }, s.viewport.bind("touchstart", q)
                },
                q = function(t) {
                    if (s.working) t.preventDefault();
                    else {
                        s.touch.originalPos = a.position();
                        var e = t.originalEvent;
                        s.touch.start.x = e.changedTouches[0].pageX, s.touch.start.y = e.changedTouches[0].pageY, s.viewport.bind("touchmove", A), s.viewport.bind("touchend", _)
                    }
                },
                A = function(t) {
                    var e = t.originalEvent,
                        i = Math.abs(e.changedTouches[0].pageX - s.touch.start.x),
                        o = Math.abs(e.changedTouches[0].pageY - s.touch.start.y);
                    if (3 * i > o && s.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * o > i && s.settings.preventDefaultSwipeY && t.preventDefault(), "fade" != s.settings.mode && s.settings.oneToOneTouch) {
                        var n = 0;
                        if ("horizontal" == s.settings.mode) {
                            var a = e.changedTouches[0].pageX - s.touch.start.x;
                            n = s.touch.originalPos.left + a
                        } else {
                            var a = e.changedTouches[0].pageY - s.touch.start.y;
                            n = s.touch.originalPos.top + a
                        }
                        x(n, "reset", 0)
                    }
                },
                _ = function(t) {
                    s.viewport.unbind("touchmove", A);
                    var e = t.originalEvent,
                        i = 0;
                    if (s.touch.end.x = e.changedTouches[0].pageX, s.touch.end.y = e.changedTouches[0].pageY, "fade" == s.settings.mode) {
                        var o = Math.abs(s.touch.start.x - s.touch.end.x);
                        o >= s.settings.swipeThreshold && (s.touch.start.x > s.touch.end.x ? a.goToNextSlide() : a.goToPrevSlide(), a.stopAuto())
                    } else {
                        var o = 0;
                        "horizontal" == s.settings.mode ? (o = s.touch.end.x - s.touch.start.x, i = s.touch.originalPos.left) : (o = s.touch.end.y - s.touch.start.y, i = s.touch.originalPos.top), !s.settings.infiniteLoop && (0 == s.active.index && o > 0 || s.active.last && o < 0) ? x(i, "reset", 200) : Math.abs(o) >= s.settings.swipeThreshold ? (o < 0 ? a.goToNextSlide() : a.goToPrevSlide(), a.stopAuto()) : x(i, "reset", 200)
                    }
                    s.viewport.unbind("touchend", _)
                },
                R = function(e) {
                    if (s.initialized) {
                        var i = t(window).width(),
                            o = t(window).height();
                        r == i && l == o || (r = i, l = o, a.redrawSlider(), s.settings.onSliderResize.call(a, s.active.index))
                    }
                };
            return a.goToSlide = function(e, i) {
                if (!s.working && s.active.index != e)
                    if (s.working = !0, s.oldIndex = s.active.index, e < 0 ? s.active.index = v() - 1 : e >= v() ? s.active.index = 0 : s.active.index = e, s.settings.onSlideBefore(s.children.eq(s.active.index), s.oldIndex, s.active.index), "next" == i ? s.settings.onSlideNext(s.children.eq(s.active.index), s.oldIndex, s.active.index) : "prev" == i && s.settings.onSlidePrev(s.children.eq(s.active.index), s.oldIndex, s.active.index), s.active.last = s.active.index >= v() - 1, s.settings.pager && E(s.active.index), s.settings.controls && O(),
                        "fade" == s.settings.mode) s.settings.adaptiveHeight && s.viewport.height() != p() && s.viewport.animate({
                        height: p()
                    }, s.settings.adaptiveHeightSpeed), s.children.filter(":visible").fadeOut(s.settings.speed).css({
                        zIndex: 0
                    }), s.children.eq(s.active.index).css("zIndex", s.settings.slideZIndex + 1).fadeIn(s.settings.speed, function() {
                        t(this).css("zIndex", s.settings.slideZIndex), L()
                    });
                    else {
                        s.settings.adaptiveHeight && s.viewport.height() != p() && s.viewport.animate({
                            height: p()
                        }, s.settings.adaptiveHeightSpeed);
                        var o = 0,
                            n = {
                                left: 0,
                                top: 0
                            };
                        if (!s.settings.infiniteLoop && s.carousel && s.active.last)
                            if ("horizontal" == s.settings.mode) {
                                var r = s.children.eq(s.children.length - 1);
                                n = r.position(), o = s.viewport.width() - r.outerWidth()
                            } else {
                                var l = s.children.length - s.settings.minSlides;
                                n = s.children.eq(l).position()
                            }
                        else if (s.carousel && s.active.last && "prev" == i) {
                            var d = 1 == s.settings.moveSlides ? s.settings.maxSlides - w() : (v() - 1) * w() - (s.children.length - s.settings.maxSlides),
                                r = a.children(".bx-clone").eq(d);
                            n = r.position()
                        } else if ("next" == i && 0 == s.active.index) n = a.find("> .bx-clone").eq(s.settings.maxSlides).position(), s.active.last = !1;
                        else if (e >= 0) {
                            var c = e * w();
                            n = s.children.eq(c).position()
                        }
                        if ("undefined" != typeof n) {
                            var h = "horizontal" == s.settings.mode ? -(n.left - o) : -n.top;
                            x(h, "slide", s.settings.speed)
                        }
                    }
            }, a.goToNextSlide = function() {
                if (s.settings.infiniteLoop || !s.active.last) {
                    var t = parseInt(s.active.index) + 1;
                    a.goToSlide(t, "next")
                }
            }, a.goToPrevSlide = function() {
                if (s.settings.infiniteLoop || 0 != s.active.index) {
                    var t = parseInt(s.active.index) - 1;
                    a.goToSlide(t, "prev")
                }
            }, a.startAuto = function(t) {
                s.interval || (s.interval = setInterval(function() {
                    "next" == s.settings.autoDirection ? a.goToNextSlide() : a.goToPrevSlide()
                }, s.settings.pause), s.settings.autoControls && 1 != t && H("stop"))
            }, a.stopAuto = function(t) {
                s.interval && (clearInterval(s.interval), s.interval = null, s.settings.autoControls && 1 != t && H("start"))
            }, a.getCurrentSlide = function() {
                return s.active.index
            }, a.getCurrentSlideElement = function() {
                return s.children.eq(s.active.index)
            }, a.getSlideCount = function() {
                return s.children.length
            }, a.redrawSlider = function() {
                s.children.add(a.find(".bx-clone")).width(m()), s.viewport.css("height", p()), s.settings.ticker || b(), s.active.last && (s.active.index = v() - 1), s.active.index >= v() && (s.active.last = !0), s.settings.pager && !s.settings.pagerCustom && (z(), E(s.active.index))
            }, a.destroySlider = function() {
                s.initialized && (s.initialized = !1, t(".bx-clone", this).remove(), s.children.each(function() {
                    void 0 != t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style")
                }), void 0 != t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"), t(this).unwrap().unwrap(), s.controls.el && s.controls.el.remove(), s.controls.next && s.controls.next.remove(), s.controls.prev && s.controls.prev.remove(), s.pagerEl && s.settings.controls && s.pagerEl.remove(), t(".bx-caption", this).remove(), s.controls.autoEl && s.controls.autoEl.remove(), clearInterval(s.interval), s.settings.responsive && t(window).unbind("resize", R))
            }, a.reloadSlider = function(t) {
                void 0 != t && (n = t), a.destroySlider(), d()
            }, d(), this
        }
    }(jQuery),
    function(t) {
        t(window.jQuery, window, document)
    }(function(t, e, i, o) {
        t.widget("selectBox.selectBoxIt", {
            VERSION: "3.8.1",
            options: {
                showEffect: "none",
                showEffectOptions: {},
                showEffectSpeed: "medium",
                hideEffect: "none",
                hideEffectOptions: {},
                hideEffectSpeed: "medium",
                showFirstOption: !0,
                defaultText: "",
                defaultIcon: "",
                downArrowIcon: "",
                theme: "default",
                keydownOpen: !0,
                isMobile: function() {
                    return /iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/.test(navigator.userAgent || navigator.vendor || e.opera)
                },
                "native": !1,
                aggressiveChange: !1,
                selectWhenHidden: !0,
                viewport: t(e),
                similarSearch: !1,
                copyAttributes: ["title", "rel"],
                copyClasses: "button",
                nativeMousedown: !1,
                customShowHideEvent: !1,
                autoWidth: !0,
                html: !0,
                populate: "",
                dynamicPositioning: !0,
                hideCurrent: !1
            },
            getThemes: function() {
                var e = t(this.element).attr("data-theme") || "c";
                return {
                    bootstrap: {
                        focus: "active",
                        hover: "",
                        enabled: "enabled",
                        disabled: "disabled",
                        arrow: "caret",
                        button: "btn",
                        list: "dropdown-menu",
                        container: "bootstrap",
                        open: "open"
                    },
                    jqueryui: {
                        focus: "ui-state-focus",
                        hover: "ui-state-hover",
                        enabled: "ui-state-enabled",
                        disabled: "ui-state-disabled",
                        arrow: "ui-icon ui-icon-triangle-1-s",
                        button: "ui-widget ui-state-default",
                        list: "ui-widget ui-widget-content",
                        container: "jqueryui",
                        open: "selectboxit-open"
                    },
                    jquerymobile: {
                        focus: "ui-btn-down-" + e,
                        hover: "ui-btn-hover-" + e,
                        enabled: "ui-enabled",
                        disabled: "ui-disabled",
                        arrow: "ui-icon ui-icon-arrow-d ui-icon-shadow",
                        button: "ui-btn ui-btn-icon-right ui-btn-corner-all ui-shadow ui-btn-up-" + e,
                        list: "ui-btn ui-btn-icon-right ui-btn-corner-all ui-shadow ui-btn-up-" + e,
                        container: "jquerymobile",
                        open: "selectboxit-open"
                    },
                    "default": {
                        focus: "selectboxit-focus",
                        hover: "selectboxit-hover",
                        enabled: "selectboxit-enabled",
                        disabled: "selectboxit-disabled",
                        arrow: "selectboxit-default-arrow",
                        button: "selectboxit-btn",
                        list: "selectboxit-list",
                        container: "selectboxit-container",
                        open: "selectboxit-open"
                    }
                }
            },
            isDeferred: function(e) {
                return t.isPlainObject(e) && e.promise && e.done
            },
            _create: function(e) {
                var o = this.options.populate,
                    n = this.options.theme;
                if (this.element.is("select")) return this.widgetProto = t.Widget.prototype, this.originalElem = this.element[0], this.selectBox = this.element, this.options.populate && this.add && !e && this.add(o), this.selectItems = this.element.find("option"), this.firstSelectItem = this.selectItems.slice(0, 1), this.documentHeight = t(i).height(), this.theme = t.isPlainObject(n) ? t.extend({}, this.getThemes()["default"], n) : this.getThemes()[n] ? this.getThemes()[n] : this.getThemes()["default"], this.currentFocus = 0, this.blur = !0, this.textArray = [], this.currentIndex = 0, this.currentText = "", this.flipped = !1, e || (this.selectBoxStyles = this.selectBox.attr("style")), this._createDropdownButton()._createUnorderedList()._copyAttributes()._replaceSelectBox()._addClasses(this.theme)._eventHandlers(), this.originalElem.disabled && this.disable && this.disable(), this._ariaAccessibility && this._ariaAccessibility(), this.isMobile = this.options.isMobile(), this._mobile && this._mobile(), this.options["native"] && this._applyNativeSelect(), this.triggerEvent("create"), this
            },
            _createDropdownButton: function() {
                var e = this.originalElemId = this.originalElem.id || "",
                    i = this.originalElemValue = this.originalElem.value || "",
                    o = this.originalElemName = this.originalElem.name || "",
                    n = this.options.copyClasses,
                    s = this.selectBox.attr("class") || "";
                return this.dropdownText = t("<span/>", {
                    id: e && e + "SelectBoxItText",
                    "class": "selectboxit-text",
                    unselectable: "on",
                    text: this.firstSelectItem.text()
                }).attr("data-val", i), this.dropdownImageContainer = t("<span/>", {
                    "class": "selectboxit-option-icon-container"
                }), this.dropdownImage = t("<i/>", {
                    id: e && e + "SelectBoxItDefaultIcon",
                    "class": "selectboxit-default-icon",
                    unselectable: "on"
                }), this.dropdown = t("<span/>", {
                    id: e && e + "SelectBoxIt",
                    "class": "selectboxit " + ("button" === n ? s : "") + " " + (this.selectBox.prop("disabled") ? this.theme.disabled : this.theme.enabled),
                    name: o,
                    tabindex: this.selectBox.attr("tabindex") || "0",
                    unselectable: "on"
                }).append(this.dropdownImageContainer.append(this.dropdownImage)).append(this.dropdownText), this.dropdownContainer = t("<span/>", {
                    id: e && e + "SelectBoxItContainer",
                    "class": "selectboxit-container " + this.theme.container + " " + ("container" === n ? s : "")
                }).append(this.dropdown), this
            },
            _createUnorderedList: function() {
                var e, i, o, n, s, a, r, l, d, c, h, u, p, g = this,
                    m = "",
                    f = g.originalElemId || "",
                    f = t("<ul/>", {
                        id: f && f + "SelectBoxItOptions",
                        "class": "selectboxit-options",
                        tabindex: -1
                    });
                if (g.options.showFirstOption || (g.selectItems.first().attr("disabled", "disabled"), g.selectItems = g.selectBox.find("option").slice(1)), g.selectItems.each(function(f) {
                        u = t(this), o = i = "", e = u.prop("disabled"), n = u.attr("data-icon") || "", a = (s = u.attr("data-iconurl") || "") ? "selectboxit-option-icon-url" : "", r = s ? "style=\"background-image:url('" + s + "');\"" : "", l = u.attr("data-selectedtext"), h = (d = u.attr("data-text")) ? d : u.text(), p = u.parent(), p.is("optgroup") && (i = "selectboxit-optgroup-option", 0 === u.index() && (o = '<span class="selectboxit-optgroup-header ' + p.first().attr("class") + '"data-disabled="true">' + p.first().attr("label") + "</span>")), u.attr("value", this.value), m += o + '<li data-id="' + f + '" data-val="' + this.value + '" data-disabled="' + e + '" class="' + i + " selectboxit-option " + (t(this).attr("class") || "") + '"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon ' + n + " " + (a || g.theme.container) + '"' + r + "></i></span>" + (g.options.html ? h : g.htmlEscape(h)) + "</a></li>", c = u.attr("data-search"), g.textArray[f] = e ? "" : c ? c : h, this.selected && (g._setText(g.dropdownText, l || h), g.currentFocus = f)
                    }), g.options.defaultText || g.selectBox.attr("data-text")) {
                    var v = g.options.defaultText || g.selectBox.attr("data-text");
                    g._setText(g.dropdownText, v), g.options.defaultText = v
                }
                return f.append(m), g.list = f, g.dropdownContainer.append(g.list), g.listItems = g.list.children("li"), g.listAnchors = g.list.find("a"), g.listItems.first().addClass("selectboxit-option-first"), g.listItems.last().addClass("selectboxit-option-last"), g.list.find("li[data-disabled='true']").not(".optgroupHeader").addClass(g.theme.disabled), g.dropdownImage.addClass(g.selectBox.attr("data-icon") || g.options.defaultIcon || g.listItems.eq(g.currentFocus).find("i").attr("class")), g.dropdownImage.attr("style", g.listItems.eq(g.currentFocus).find("i").attr("style")), g
            },
            _replaceSelectBox: function() {
                var e, i = this.originalElem.id || "",
                    n = this.selectBox.attr("data-size"),
                    n = this.listSize = n === o ? "auto" : "0" === n ? "auto" : +n;
                return this.selectBox.css("display", "none").after(this.dropdownContainer), this.dropdownContainer.appendTo("body").addClass("selectboxit-rendering"), this.dropdown.height(), this.downArrow = t("<i/>", {
                    id: i && i + "SelectBoxItArrow",
                    "class": "selectboxit-arrow",
                    unselectable: "on"
                }), this.downArrowContainer = t("<span/>", {
                    id: i && i + "SelectBoxItArrowContainer",
                    "class": "selectboxit-arrow-container",
                    unselectable: "on"
                }).append(this.downArrow), this.dropdown.append(this.downArrowContainer), this.listItems.removeClass("selectboxit-selected").eq(this.currentFocus).addClass("selectboxit-selected"), i = this.downArrowContainer.outerWidth(!0), e = this.dropdownImage.outerWidth(!0), this.options.autoWidth && (this.dropdown.css({
                    width: "auto"
                }).css({
                    width: this.list.outerWidth(!0) + i + e
                }), this.list.css({
                    "min-width": this.dropdown.width()
                })), this.dropdownText.css({
                    "max-width": this.dropdownContainer.outerWidth(!0) - (i + e)
                }), this.selectBox.after(this.dropdownContainer), this.dropdownContainer.removeClass("selectboxit-rendering"), "number" === t.type(n) && (this.maxHeight = this.listAnchors.outerHeight(!0) * n), this
            },
            _scrollToView: function(t) {
                var e = this.listItems.eq(this.currentFocus),
                    i = this.list.scrollTop(),
                    o = e.height(),
                    e = e.position().top,
                    n = Math.abs(e),
                    s = this.list.height();
                return "search" === t ? s - e < o ? this.list.scrollTop(i + (e - (s - o))) : -1 > e && this.list.scrollTop(e - o) : "up" === t ? -1 > e && this.list.scrollTop(i - n) : "down" === t && s - e < o && this.list.scrollTop(i + (n - s + o)), this
            },
            _callbackSupport: function(e) {
                return t.isFunction(e) && e.call(this, this.dropdown), this
            },
            _setText: function(t, e) {
                return this.options.html ? t.html(e) : t.text(e), this
            },
            open: function(t) {
                var e = this,
                    i = e.options.showEffect,
                    o = e.options.showEffectSpeed,
                    n = e.options.showEffectOptions,
                    s = e.options["native"],
                    a = e.isMobile;
                return !e.listItems.length || e.dropdown.hasClass(e.theme.disabled) ? e : (s || a || this.list.is(":visible") || (e.triggerEvent("open"), e._dynamicPositioning && e.options.dynamicPositioning && e._dynamicPositioning(), "none" === i ? e.list.show() : "show" === i || "slideDown" === i || "fadeIn" === i ? e.list[i](o) : e.list.show(i, n, o), e.list.promise().done(function() {
                    e._scrollToView("search"), e.triggerEvent("opened")
                })), e._callbackSupport(t), e)
            },
            close: function(t) {
                var e = this,
                    i = e.options.hideEffect,
                    o = e.options.hideEffectSpeed,
                    n = e.options.hideEffectOptions,
                    s = e.isMobile;
                return e.options["native"] || s || !e.list.is(":visible") || (e.triggerEvent("close"), "none" === i ? e.list.hide() : "hide" === i || "slideUp" === i || "fadeOut" === i ? e.list[i](o) : e.list.hide(i, n, o), e.list.promise().done(function() {
                    e.triggerEvent("closed")
                })), e._callbackSupport(t), e
            },
            toggle: function() {
                var t = this.list.is(":visible");
                t ? this.close() : t || this.open()
            },
            _keyMappings: {
                38: "up",
                40: "down",
                13: "enter",
                8: "backspace",
                9: "tab",
                32: "space",
                27: "esc"
            },
            _keydownMethods: function() {
                var t = this,
                    e = t.list.is(":visible") || !t.options.keydownOpen;
                return {
                    down: function() {
                        t.moveDown && e && t.moveDown()
                    },
                    up: function() {
                        t.moveUp && e && t.moveUp()
                    },
                    enter: function() {
                        var e = t.listItems.eq(t.currentFocus);
                        t._update(e), "true" !== e.attr("data-preventclose") && t.close(), t.triggerEvent("enter")
                    },
                    tab: function() {
                        t.triggerEvent("tab-blur"), t.close()
                    },
                    backspace: function() {
                        t.triggerEvent("backspace")
                    },
                    esc: function() {
                        t.close()
                    }
                }
            },
            _eventHandlers: function() {
                var e, i, o = this,
                    n = o.options.nativeMousedown,
                    s = o.options.customShowHideEvent,
                    a = o.focusClass,
                    r = o.hoverClass,
                    l = o.openClass;
                return this.dropdown.on({
                    "click.selectBoxIt": function() {
                        o.dropdown.trigger("focus", !0), o.originalElem.disabled || (o.triggerEvent("click"), n || s || o.toggle())
                    },
                    "mousedown.selectBoxIt": function() {
                        t(this).data("mdown", !0), o.triggerEvent("mousedown"), n && !s && o.toggle()
                    },
                    "mouseup.selectBoxIt": function() {
                        o.triggerEvent("mouseup")
                    },
                    "blur.selectBoxIt": function() {
                        o.blur && (o.triggerEvent("blur"), o.close(), t(this).removeClass(a))
                    },
                    "focus.selectBoxIt": function(e, i) {
                        var n = t(this).data("mdown");
                        t(this).removeData("mdown"), n || i || setTimeout(function() {
                            o.triggerEvent("tab-focus")
                        }, 0), i || (t(this).hasClass(o.theme.disabled) || t(this).addClass(a), o.triggerEvent("focus"))
                    },
                    "keydown.selectBoxIt": function(t) {
                        var e = o._keyMappings[t.keyCode],
                            i = o._keydownMethods()[e];
                        i && (i(), !o.options.keydownOpen || "up" !== e && "down" !== e || o.open()), i && "tab" !== e && t.preventDefault()
                    },
                    "keypress.selectBoxIt": function(t) {
                        var e = o._keyMappings[t.charCode || t.keyCode],
                            i = String.fromCharCode(t.charCode || t.keyCode);
                        o.search && (!e || e && "space" === e) && o.search(i, !0, !0), "space" === e && t.preventDefault()
                    },
                    "mouseenter.selectBoxIt": function() {
                        o.triggerEvent("mouseenter")
                    },
                    "mouseleave.selectBoxIt": function() {
                        o.triggerEvent("mouseleave")
                    }
                }), o.list.on({
                    "mouseover.selectBoxIt": function() {
                        o.blur = !1
                    },
                    "mouseout.selectBoxIt": function() {
                        o.blur = !0
                    },
                    "focusin.selectBoxIt": function() {
                        o.dropdown.trigger("focus", !0)
                    }
                }), o.list.on({
                    "mousedown.selectBoxIt": function() {
                        o._update(t(this)), o.triggerEvent("option-click"), "false" === t(this).attr("data-disabled") && "true" !== t(this).attr("data-preventclose") && o.close(), setTimeout(function() {
                            o.dropdown.trigger("focus", !0)
                        }, 0)
                    },
                    "focusin.selectBoxIt": function() {
                        o.listItems.not(t(this)).removeAttr("data-active"), t(this).attr("data-active", "");
                        var e = o.list.is(":hidden");
                        (o.options.searchWhenHidden && e || o.options.aggressiveChange || e && o.options.selectWhenHidden) && o._update(t(this)), t(this).addClass(a)
                    },
                    "mouseup.selectBoxIt": function() {
                        n && !s && (o._update(t(this)), o.triggerEvent("option-mouseup"), "false" === t(this).attr("data-disabled") && "true" !== t(this).attr("data-preventclose") && o.close())
                    },
                    "mouseenter.selectBoxIt": function() {
                        "false" === t(this).attr("data-disabled") && (o.listItems.removeAttr("data-active"), t(this).addClass(a).attr("data-active", ""), o.listItems.not(t(this)).removeClass(a), t(this).addClass(a), o.currentFocus = +t(this).attr("data-id"))
                    },
                    "mouseleave.selectBoxIt": function() {
                        "false" === t(this).attr("data-disabled") && (o.listItems.not(t(this)).removeClass(a).removeAttr("data-active"), t(this).addClass(a), o.currentFocus = +t(this).attr("data-id"))
                    },
                    "blur.selectBoxIt": function() {
                        t(this).removeClass(a)
                    }
                }, ".selectboxit-option"), o.list.on({
                    "click.selectBoxIt": function(t) {
                        t.preventDefault()
                    }
                }, "a"), o.selectBox.on({
                    "change.selectBoxIt, internal-change.selectBoxIt": function(t, n) {
                        var s, a;
                        n || (s = o.list.find('li[data-val="' + o.originalElem.value + '"]'), s.length && (o.listItems.eq(o.currentFocus).removeClass(o.focusClass), o.currentFocus = +s.attr("data-id"))), s = o.listItems.eq(o.currentFocus), a = s.attr("data-selectedtext"), i = (e = s.attr("data-text")) ? e : s.find("a").text(), o._setText(o.dropdownText, a || i), o.dropdownText.attr("data-val", o.originalElem.value), s.find("i").attr("class") && (o.dropdownImage.attr("class", s.find("i").attr("class")).addClass("selectboxit-default-icon"), o.dropdownImage.attr("style", s.find("i").attr("style"))), o.triggerEvent("changed")
                    },
                    "disable.selectBoxIt": function() {
                        o.dropdown.addClass(o.theme.disabled)
                    },
                    "enable.selectBoxIt": function() {
                        o.dropdown.removeClass(o.theme.disabled)
                    },
                    "open.selectBoxIt": function() {
                        var t = o.list.find("li[data-val='" + o.dropdownText.attr("data-val") + "']");
                        t.length || (t = o.listItems.not("[data-disabled=true]").first()), o.currentFocus = +t.attr("data-id"), t = o.listItems.eq(o.currentFocus), o.dropdown.addClass(l).removeClass(r).addClass(a), o.listItems.removeClass(o.selectedClass).removeAttr("data-active").not(t).removeClass(a), t.addClass(o.selectedClass).addClass(a), o.options.hideCurrent && (o.listItems.show(), t.hide())
                    },
                    "close.selectBoxIt": function() {
                        o.dropdown.removeClass(l)
                    },
                    "blur.selectBoxIt": function() {
                        o.dropdown.removeClass(a)
                    },
                    "mouseenter.selectBoxIt": function() {
                        t(this).hasClass(o.theme.disabled) || o.dropdown.addClass(r)
                    },
                    "mouseleave.selectBoxIt": function() {
                        o.dropdown.removeClass(r)
                    },
                    destroy: function(t) {
                        t.preventDefault(), t.stopPropagation()
                    }
                }), o
            },
            _update: function(t) {
                var e, i = this.options.defaultText || this.selectBox.attr("data-text"),
                    o = this.listItems.eq(this.currentFocus);
                "false" === t.attr("data-disabled") && (this.listItems.eq(this.currentFocus).attr("data-selectedtext"), (e = o.attr("data-text")) || o.text(), (i && this.options.html ? this.dropdownText.html() === i : this.dropdownText.text() === i) && this.selectBox.val() === t.attr("data-val") ? this.triggerEvent("change") : (this.selectBox.val(t.attr("data-val")), this.currentFocus = +t.attr("data-id"), this.originalElem.value !== this.dropdownText.attr("data-val") && this.triggerEvent("change")))
            },
            _addClasses: function(t) {
                this.focusClass = t.focus, this.hoverClass = t.hover;
                var e = t.button,
                    i = t.list,
                    o = t.arrow,
                    n = t.container;
                return this.openClass = t.open, this.selectedClass = "selectboxit-selected", this.downArrow.addClass(this.selectBox.attr("data-downarrow") || this.options.downArrowIcon || o), this.dropdownContainer.addClass(n), this.dropdown.addClass(e), this.list.addClass(i), this
            },
            refresh: function(t, e) {
                return this._destroySelectBoxIt()._create(!0), e || this.triggerEvent("refresh"), this._callbackSupport(t), this
            },
            htmlEscape: function(t) {
                return String(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            },
            triggerEvent: function(t) {
                return this.selectBox.trigger(t, {
                    selectbox: this.selectBox,
                    selectboxOption: this.selectItems.eq(this.options.showFirstOption ? this.currentFocus : 0 <= this.currentFocus - 1 ? this.currentFocus : 0),
                    dropdown: this.dropdown,
                    dropdownOption: this.listItems.eq(this.currentFocus)
                }), this
            },
            _copyAttributes: function() {
                return this._addSelectBoxAttributes && this._addSelectBoxAttributes(), this
            },
            _realOuterWidth: function(t) {
                if (t.is(":visible")) return t.outerWidth(!0);
                t = t.clone();
                var e;
                return t.css({
                    visibility: "hidden",
                    display: "block",
                    position: "absolute"
                }).appendTo("body"), e = t.outerWidth(!0), t.remove(), e
            }
        });
        var n = t.selectBox.selectBoxIt.prototype;
        n._ariaAccessibility = function() {
            var e = this,
                i = t("label[for='" + e.originalElem.id + "']");
            return e.dropdownContainer.attr({
                role: "combobox",
                "aria-autocomplete": "list",
                "aria-haspopup": "true",
                "aria-expanded": "false",
                "aria-owns": e.list[0].id
            }), e.dropdownText.attr({
                "aria-live": "polite"
            }), e.dropdown.on({
                "disable.selectBoxIt": function() {
                    e.dropdownContainer.attr("aria-disabled", "true")
                },
                "enable.selectBoxIt": function() {
                    e.dropdownContainer.attr("aria-disabled", "false")
                }
            }), i.length && e.dropdownContainer.attr("aria-labelledby", i[0].id), e.list.attr({
                role: "listbox",
                "aria-hidden": "true"
            }), e.listItems.attr({
                role: "option"
            }), e.selectBox.on({
                "open.selectBoxIt": function() {
                    e.list.attr("aria-hidden", "false"), e.dropdownContainer.attr("aria-expanded", "true")
                },
                "close.selectBoxIt": function() {
                    e.list.attr("aria-hidden", "true"), e.dropdownContainer.attr("aria-expanded", "false")
                }
            }), e
        }, n._addSelectBoxAttributes = function() {
            var e = this;
            return e._addAttributes(e.selectBox.prop("attributes"), e.dropdown), e.selectItems.each(function(i) {
                e._addAttributes(t(this).prop("attributes"), e.listItems.eq(i))
            }), e
        }, n._addAttributes = function(e, i) {
            var o = this.options.copyAttributes;
            return e.length && t.each(e, function(e, n) {
                var s = n.name.toLowerCase(),
                    a = n.value;
                "null" === a || -1 === t.inArray(s, o) && -1 === s.indexOf("data") || i.attr(s, a)
            }), this
        }, n.destroy = function(t) {
            return this._destroySelectBoxIt(), this.widgetProto.destroy.call(this), this._callbackSupport(t), this
        }, n._destroySelectBoxIt = function() {
            return this.dropdown.off(".selectBoxIt"), t.contains(this.dropdownContainer[0], this.originalElem) && this.dropdownContainer.before(this.selectBox), this.dropdownContainer.remove(), this.selectBox.removeAttr("style").attr("style", this.selectBoxStyles), this.triggerEvent("destroy"), this
        }, n.disable = function(t) {
            return this.options.disabled || (this.close(), this.selectBox.attr("disabled", "disabled"), this.dropdown.removeAttr("tabindex").removeClass(this.theme.enabled).addClass(this.theme.disabled), this.setOption("disabled", !0), this.triggerEvent("disable")), this._callbackSupport(t), this
        }, n.disableOption = function(e, i) {
            var o, n;
            return "number" === t.type(e) && (this.close(), o = this.selectBox.find("option").eq(e), this.triggerEvent("disable-option"), o.attr("disabled", "disabled"), this.listItems.eq(e).attr("data-disabled", "true").addClass(this.theme.disabled), this.currentFocus === e && (o = this.listItems.eq(this.currentFocus).nextAll("li").not("[data-disabled='true']").first().length, n = this.listItems.eq(this.currentFocus).prevAll("li").not("[data-disabled='true']").first().length, o ? this.moveDown() : n ? this.moveUp() : this.disable())), this._callbackSupport(i), this
        }, n._isDisabled = function(t) {
            return this.originalElem.disabled && this.disable(), this
        }, n._dynamicPositioning = function() {
            if ("number" === t.type(this.listSize)) this.list.css("max-height", this.maxHeight || "none");
            else {
                var e = this.dropdown.offset().top,
                    i = this.list.data("max-height") || this.list.outerHeight(),
                    o = this.dropdown.outerHeight(),
                    n = this.options.viewport,
                    s = n.height(),
                    n = t.isWindow(n.get(0)) ? n.scrollTop() : n.offset().top,
                    a = !(e + o + i <= s + n);
                this.list.data("max-height") || this.list.data("max-height", this.list.outerHeight()), a ? this.dropdown.offset().top - n >= i ? (this.list.css("max-height", i), this.list.css("top", this.dropdown.position().top - this.list.outerHeight())) : (e = Math.abs(e + o + i - (s + n)), s = Math.abs(this.dropdown.offset().top - n - i), e < s ? (this.list.css("max-height", i - e - o / 2), this.list.css("top", "auto")) : (this.list.css("max-height", i - s - o / 2), this.list.css("top", this.dropdown.position().top - this.list.outerHeight()))) : (this.list.css("max-height", i), this.list.css("top", "auto"))
            }
            return this
        }, n.enable = function(t) {
            return this.options.disabled && (this.triggerEvent("enable"), this.selectBox.removeAttr("disabled"), this.dropdown.attr("tabindex", 0).removeClass(this.theme.disabled).addClass(this.theme.enabled), this.setOption("disabled", !1), this._callbackSupport(t)), this
        }, n.enableOption = function(e, i) {
            var o;
            return "number" === t.type(e) && (o = this.selectBox.find("option").eq(e), this.triggerEvent("enable-option"), o.removeAttr("disabled"), this.listItems.eq(e).attr("data-disabled", "false").removeClass(this.theme.disabled)), this._callbackSupport(i), this
        }, n.moveDown = function(t) {
            this.currentFocus += 1;
            var e = "true" === this.listItems.eq(this.currentFocus).attr("data-disabled"),
                i = this.listItems.eq(this.currentFocus).nextAll("li").not("[data-disabled='true']").first().length;
            if (this.currentFocus === this.listItems.length) this.currentFocus -= 1;
            else {
                if (e && i) return this.listItems.eq(this.currentFocus - 1).blur(), void this.moveDown();
                e && !i ? this.currentFocus -= 1 : (this.listItems.eq(this.currentFocus - 1).blur().end().eq(this.currentFocus).focusin(), this._scrollToView("down"), this.triggerEvent("moveDown"))
            }
            return this._callbackSupport(t), this
        }, n.moveUp = function(t) {
            this.currentFocus -= 1;
            var e = "true" === this.listItems.eq(this.currentFocus).attr("data-disabled"),
                i = this.listItems.eq(this.currentFocus).prevAll("li").not("[data-disabled='true']").first().length;
            if (-1 === this.currentFocus) this.currentFocus += 1;
            else {
                if (e && i) return this.listItems.eq(this.currentFocus + 1).blur(), void this.moveUp();
                e && !i ? this.currentFocus += 1 : (this.listItems.eq(this.currentFocus + 1).blur().end().eq(this.currentFocus).focusin(), this._scrollToView("up"), this.triggerEvent("moveUp"))
            }
            return this._callbackSupport(t), this
        }, n._setCurrentSearchOption = function(t) {
            return (this.options.aggressiveChange || this.options.selectWhenHidden || this.listItems.eq(t).is(":visible")) && !0 !== this.listItems.eq(t).data("disabled") && (this.listItems.eq(this.currentFocus).blur(), this.currentFocus = this.currentIndex = t, this.listItems.eq(this.currentFocus).focusin(), this._scrollToView("search"), this.triggerEvent("search")), this
        }, n._searchAlgorithm = function(t, e) {
            var i, o, n, s, a = !1,
                r = this.textArray,
                l = this.currentText;
            for (i = t, n = r.length; i < n; i += 1) {
                for (s = r[i], o = 0; o < n; o += 1) - 1 !== r[o].search(e) && (a = !0, o = n);
                if (a || (l = this.currentText = this.currentText.charAt(this.currentText.length - 1).replace(/[|()\[{.+*?$\\]/g, "\\$0")), e = RegExp(l, "gi"), 3 > l.length) {
                    if (e = RegExp(l.charAt(0), "gi"), -1 !== s.charAt(0).search(e)) return this._setCurrentSearchOption(i), (s.substring(0, l.length).toLowerCase() !== l.toLowerCase() || this.options.similarSearch) && (this.currentIndex += 1), !1
                } else if (-1 !== s.search(e)) return this._setCurrentSearchOption(i), !1;
                if (s.toLowerCase() === this.currentText.toLowerCase()) return this._setCurrentSearchOption(i), this.currentText = "", !1
            }
            return !0
        }, n.search = function(t, e, i) {
            return this.currentText = i ? this.currentText + t.replace(/[|()\[{.+*?$\\]/g, "\\$0") : t.replace(/[|()\[{.+*?$\\]/g, "\\$0"), this._searchAlgorithm(this.currentIndex, RegExp(this.currentText, "gi")) && this._searchAlgorithm(0, this.currentText), this._callbackSupport(e), this
        }, n._updateMobileText = function() {
            var t, e;
            t = this.selectBox.find("option").filter(":selected"), e = (e = t.attr("data-text")) ? e : t.text(), this._setText(this.dropdownText, e), this.list.find('li[data-val="' + t.val() + '"]').find("i").attr("class") && this.dropdownImage.attr("class", this.list.find('li[data-val="' + t.val() + '"]').find("i").attr("class")).addClass("selectboxit-default-icon")
        }, n._applyNativeSelect = function() {
            return this.dropdownContainer.append(this.selectBox), this.dropdown.attr("tabindex", "-1"), this.selectBox.css({
                display: "block",
                visibility: "visible",
                width: this._realOuterWidth(this.dropdown),
                height: this.dropdown.outerHeight(),
                opacity: "0",
                position: "absolute",
                top: "0",
                left: "0",
                cursor: "pointer",
                "z-index": "999999",
                margin: this.dropdown.css("margin"),
                padding: "0",
                "-webkit-appearance": "menulist-button"
            }), this.originalElem.disabled && this.triggerEvent("disable"), this
        }, n._mobileEvents = function() {
            var t = this;
            t.selectBox.on({
                "changed.selectBoxIt": function() {
                    t.hasChanged = !0, t._updateMobileText(), t.triggerEvent("option-click")
                },
                "mousedown.selectBoxIt": function() {
                    t.hasChanged || !t.options.defaultText || t.originalElem.disabled || (t._updateMobileText(), t.triggerEvent("option-click"))
                },
                "enable.selectBoxIt": function() {
                    t.selectBox.removeClass("selectboxit-rendering")
                },
                "disable.selectBoxIt": function() {
                    t.selectBox.addClass("selectboxit-rendering")
                }
            })
        }, n._mobile = function(t) {
            return this.isMobile && (this._applyNativeSelect(), this._mobileEvents()), this
        }, n.selectOption = function(e, i) {
            var o = t.type(e);
            return "number" === o ? this.selectBox.val(this.selectItems.eq(e).val()).change() : "string" === o && this.selectBox.val(e).change(), this._callbackSupport(i), this
        }, n.setOption = function(e, i, o) {
            var n = this;
            return "string" === t.type(e) && (n.options[e] = i), n.refresh(function() {
                n._callbackSupport(o)
            }, !0), n
        }, n.setOptions = function(e, i) {
            var o = this;
            return t.isPlainObject(e) && (o.options = t.extend({}, o.options, e)), o.refresh(function() {
                o._callbackSupport(i)
            }, !0), o
        }, n.wait = function(t, e) {
            return this.widgetProto._delay.call(this, e, t), this
        }, n.add = function(e, i) {
            this._populate(e, function(e) {
                var o, n = this,
                    s = t.type(e),
                    a = 0,
                    r = [],
                    l = (o = n._isJSON(e)) && n._parseJSON(e);
                if (e && ("array" === s || o && l.data && "array" === t.type(l.data)) || "object" === s && e.data && "array" === t.type(e.data)) {
                    for (n._isJSON(e) && (e = l), e.data && (e = e.data), o = e.length; a <= o - 1; a += 1) s = e[a], t.isPlainObject(s) ? r.push(t("<option/>", s)) : "string" === t.type(s) && r.push(t("<option/>", {
                        text: s,
                        value: s
                    }));
                    n.selectBox.append(r)
                } else e && "string" === s && !n._isJSON(e) ? n.selectBox.append(e) : e && "object" === s ? n.selectBox.append(t("<option/>", e)) : e && n._isJSON(e) && t.isPlainObject(n._parseJSON(e)) && n.selectBox.append(t("<option/>", n._parseJSON(e)));
                return n.dropdown ? n.refresh(function() {
                    n._callbackSupport(i)
                }, !0) : n._callbackSupport(i), n
            })
        }, n._parseJSON = function(e) {
            return JSON && JSON.parse && JSON.parse(e) || t.parseJSON(e)
        }, n._isJSON = function(t) {
            try {
                return this._parseJSON(t), !0
            } catch (e) {
                return !1
            }
        }, n._populate = function(e, i) {
            var o = this;
            return e = t.isFunction(e) ? e.call() : e, o.isDeferred(e) ? e.done(function(t) {
                i.call(o, t)
            }) : i.call(o, e), o
        }, n.remove = function(e, i) {
            var o, n = this,
                s = t.type(e),
                a = 0,
                r = "";
            if ("array" === s) {
                for (o = e.length; a <= o - 1; a += 1) s = e[a], "number" === t.type(s) && (r = r.length ? r + (", option:eq(" + s + ")") : r + ("option:eq(" + s + ")"));
                n.selectBox.find(r).remove()
            } else "number" === s ? n.selectBox.find("option").eq(e).remove() : n.selectBox.find("option").remove();
            return n.dropdown ? n.refresh(function() {
                n._callbackSupport(i)
            }, !0) : n._callbackSupport(i), n
        }
    }), ! function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
    }(function(t) {
        function e(t) {
            return r.raw ? t : encodeURIComponent(t)
        }

        function i(t) {
            return r.raw ? t : decodeURIComponent(t)
        }

        function o(t) {
            return e(r.json ? JSON.stringify(t) : String(t))
        }

        function n(t) {
            0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return t = decodeURIComponent(t.replace(a, " ")), r.json ? JSON.parse(t) : t
            } catch (e) {}
        }

        function s(e, i) {
            var o = r.raw ? e : n(e);
            return t.isFunction(i) ? i(o) : o
        }
        var a = /\+/g,
            r = t.cookie = function(n, a, l) {
                if (void 0 !== a && !t.isFunction(a)) {
                    if (l = t.extend({}, r.defaults, l), "number" == typeof l.expires) {
                        var d = l.expires,
                            c = l.expires = new Date;
                        c.setTime(+c + 864e5 * d)
                    }
                    return document.cookie = [e(n), "=", o(a), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
                }
                for (var h = n ? void 0 : {}, u = document.cookie ? document.cookie.split("; ") : [], p = 0, g = u.length; g > p; p++) {
                    var m = u[p].split("="),
                        f = i(m.shift()),
                        v = m.join("=");
                    if (n && n === f) {
                        h = s(v, a);
                        break
                    }
                    n || void 0 === (v = s(v)) || (h[f] = v)
                }
                return h
            };
        r.defaults = {}, t.removeCookie = function(e, i) {
            return void 0 !== t.cookie(e) && (t.cookie(e, "", t.extend({}, i, {
                expires: -1
            })), !t.cookie(e))
        }
    }), $("body").hasClass("fale-conosco") && eval(function(t, e, i, o, n, s) {
        if (n = function(t) {
                return (t < e ? "" : n(parseInt(t / e))) + ((t %= e) > 35 ? String.fromCharCode(t + 29) : t.toString(36))
            }, !"".replace(/^/, String)) {
            for (; i--;) s[n(i)] = o[i] || n(i);
            o = [function(t) {
                return s[t]
            }], n = function() {
                return "\\w+"
            }, i = 1
        }
        for (; i--;) o[i] && (t = t.replace(new RegExp("\\b" + n(i) + "\\b", "g"), o[i]));
        return t
    }('(5($){$.K.w=5(b,c){2(3.7==0)6;2(14 b==\'15\'){c=(14 c==\'15\')?c:b;6 3.L(5(){2(3.M){3.N();3.M(b,c)}v 2(3.17){4 a=3.17();a.1x(O);a.1y(\'P\',c);a.18(\'P\',b);a.1z()}})}v{2(3[0].M){b=3[0].1A;c=3[0].1B}v 2(Q.R&&Q.R.19){4 d=Q.R.19();b=0-d.1C().18(\'P\',-1D);c=b+d.1E.7}6{t:b,S:c}}};4 q={\'9\':"[0-9]",\'a\':"[A-T-z]",\'*\':"[A-T-1a-9]"};$.1b={1F:5(c,r){q[c]=r}};$.K.U=5(){6 3.1G("U")};$.K.1b=5(m,n){n=$.1H({C:"1I",V:B},n);4 o=D W("^"+$.1J(m.1c(""),5(c,i){6 q[c]||((/[A-T-1a-9]/.1d(c)?"":"\\\\")+c)}).1e(\'\')+"$");6 3.L(5(){4 d=$(3);4 f=D 1f(m.7);4 g=D 1f(m.7);4 h=u;4 j=u;4 l=B;$.L(m.1c(""),5(i,c){g[i]=(q[c]==B);f[i]=g[i]?c:n.C;2(!g[i]&&l==B)l=i});5 X(){x();y();1g(5(){$(d[0]).w(h?m.7:l)},0)};5 Y(e){4 a=$(3).w();4 k=e.Z;j=(k<16||(k>16&&k<10)||(k>10&&k<1h));2((a.t-a.S)!=0&&(!j||k==8||k==1i)){E(a.t,a.S)}2(k==8){11(a.t-->=0){2(!g[a.t]){f[a.t]=n.C;2($.F.1K){s=y();d.G(s.1j(0,a.t)+" "+s.1j(a.t));$(3).w(a.t+1)}v{y();$(3).w(1k.1l(l,a.t))}6 u}}}v 2(k==1i){E(a.t,a.t+1);y();$(3).w(1k.1l(l,a.t));6 u}v 2(k==1L){E(0,m.7);y();$(3).w(l);6 u}};5 12(e){2(j){j=u;6(e.Z==8)?u:B}e=e||1M.1N;4 k=e.1O||e.Z||e.1P;4 a=$(3).w();2(e.1Q||e.1R){6 O}v 2((k>=1h&&k<=1S)||k==10||k>1T){4 p=13(a.t-1);2(p<m.7){2(D W(q[m.H(p)]).1d(1m.1n(k))){f[p]=1m.1n(k);y();4 b=13(p);$(3).w(b);2(n.V&&b==m.7)n.V.1U(d)}}}6 u};5 E(a,b){1o(4 i=a;i<b&&i<m.7;i++){2(!g[i])f[i]=n.C}};5 y(){6 d.G(f.1e(\'\')).G()};5 x(){4 a=d.G();4 b=0;1o(4 i=0;i<m.7;i++){2(!g[i]){f[i]=n.C;11(b++<a.7){4 c=D W(q[m.H(i)]);2(a.H(b-1).1p(c)){f[i]=a.H(b-1);1V}}}}4 s=y();2(!s.1p(o)){d.G("");E(0,m.7);h=u}v h=O};5 13(a){11(++a<m.7){2(!g[a])6 a}6 m.7};d.1W("U",5(){d.I("N",X);d.I("1q",x);d.I("1r",Y);d.I("1s",12);2($.F.1t)3.1u=B;v 2($.F.1v)3.1X(\'1w\',x,u)});d.J("N",X);d.J("1q",x);d.J("1r",Y);d.J("1s",12);2($.F.1t)3.1u=5(){1g(x,0)};v 2($.F.1v)3.1Y(\'1w\',x,u);x()})}})(1Z);', 62, 124, "||if|this|var|function|return|length||||||||||||||||||||||begin|false|else|caret|checkVal|writeBuffer|||null|placeholder|new|clearBuffer|browser|val|charAt|unbind|bind|fn|each|setSelectionRange|focus|true|character|document|selection|end|Za|unmask|completed|RegExp|focusEvent|keydownEvent|keyCode|32|while|keypressEvent|seekNext|typeof|number||createTextRange|moveStart|createRange|z0|mask|split|test|join|Array|setTimeout|41|46|substring|Math|max|String|fromCharCode|for|match|blur|keydown|keypress|msie|onpaste|mozilla|input|collapse|moveEnd|select|selectionStart|selectionEnd|duplicate|100000|text|addPlaceholder|trigger|extend|_|map|opera|27|window|event|charCode|which|ctrlKey|altKey|122|186|call|break|one|removeEventListener|addEventListener|jQuery".split("|"), 0, {})),
    function(t) {
        t.extend(t.fn, {
            validate: function(e) {
                if (!this.length) return void(e && e.debug && window.console && console.warn("nothing selected, can't validate, returning nothing"));
                var i = t.data(this[0], "validator");
                return i ? i : (i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.find("input, button").filter(".cancel").click(function() {
                    i.cancelSubmit = !0
                }), i.settings.submitHandler && this.find("input, button").filter(":submit").click(function() {
                    i.submitButton = this
                }), this.submit(function(e) {
                    function o() {
                        if (i.settings.submitHandler) {
                            if (i.submitButton) var e = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(i.submitButton.value).appendTo(i.currentForm);
                            return i.settings.submitHandler.call(i, i.currentForm), i.submitButton && e.remove(), !1
                        }
                        return !0
                    }
                    return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, o()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : o() : (i.focusInvalid(), !1)
                })), i)
            },
            valid: function() {
                if (t(this[0]).is("form")) return this.validate().form();
                var e = !0,
                    i = t(this[0].form).validate();
                return this.each(function() {
                    e &= i.element(this)
                }), e
            },
            removeAttrs: function(e) {
                var i = {},
                    o = this;
                return t.each(e.split(/\s/), function(t, e) {
                    i[e] = o.attr(e), o.removeAttr(e)
                }), i
            },
            rules: function(e, i) {
                var o = this[0];
                if (e) {
                    var n = t.data(o.form, "validator").settings,
                        s = n.rules,
                        a = t.validator.staticRules(o);
                    switch (e) {
                        case "add":
                            t.extend(a, t.validator.normalizeRule(i)), s[o.name] = a, i.messages && (n.messages[o.name] = t.extend(n.messages[o.name], i.messages));
                            break;
                        case "remove":
                            if (!i) return delete s[o.name], a;
                            var r = {};
                            return t.each(i.split(/\s/), function(t, e) {
                                r[e] = a[e], delete a[e]
                            }), r
                    }
                }
                var l = t.validator.normalizeRules(t.extend({}, t.validator.metadataRules(o), t.validator.classRules(o), t.validator.attributeRules(o), t.validator.staticRules(o)), o);
                if (l.required) {
                    var d = l.required;
                    delete l.required, l = t.extend({
                        required: d
                    }, l)
                }
                return l
            }
        }), t.extend(t.expr[":"], {
            blank: function(e) {
                return !t.trim("" + e.value)
            },
            filled: function(e) {
                return !!t.trim("" + e.value)
            },
            unchecked: function(t) {
                return !t.checked
            }
        }), t.validator = function(e, i) {
            this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init()
        }, t.validator.format = function(e, i) {
            return 1 == arguments.length ? function() {
                var i = t.makeArray(arguments);
                return i.unshift(e), t.validator.format.apply(this, i)
            } : (arguments.length > 2 && i.constructor != Array && (i = t.makeArray(arguments).slice(1)), i.constructor != Array && (i = [i]), t.each(i, function(t, i) {
                e = e.replace(new RegExp("\\{" + t + "\\}", "g"), i)
            }), e)
        }, t.extend(t.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                validClass: "valid",
                errorElement: "label",
                focusInvalid: !0,
                errorContainer: t([]),
                errorLabelContainer: t([]),
                onsubmit: !0,
                ignore: [],
                ignoreTitle: !1,
                onfocusin: function(t) {
                    this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide())
                },
                onfocusout: function(t) {
                    this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
                },
                onkeyup: function(t) {
                    (t.name in this.submitted || t == this.lastElement) && this.element(t)
                },
                onclick: function(t) {
                    t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
                },
                highlight: function(e, i, o) {
                    "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(o) : t(e).addClass(i).removeClass(o)
                },
                unhighlight: function(e, i, o) {
                    "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(o) : t(e).removeClass(i).addClass(o)
                }
            },
            setDefaults: function(e) {
                t.extend(t.validator.defaults, e)
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date (ISO).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                creditcard: "Please enter a valid credit card number.",
                equalTo: "Please enter the same value again.",
                accept: "Please enter a value with a valid extension.",
                maxlength: t.validator.format("Please enter no more than {0} characters."),
                minlength: t.validator.format("Please enter at least {0} characters."),
                rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
                range: t.validator.format("Please enter a value between {0} and {1}."),
                max: t.validator.format("Please enter a value less than or equal to {0}."),
                min: t.validator.format("Please enter a value greater than or equal to {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function() {
                    function e(e) {
                        var i = t.data(this[0].form, "validator"),
                            o = "on" + e.type.replace(/^validate/, "");
                        i.settings[o] && i.settings[o].call(i, this[0])
                    }
                    this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var i = this.groups = {};
                    t.each(this.settings.groups, function(e, o) {
                        t.each(o.split(/\s/), function(t, o) {
                            i[o] = e
                        })
                    });
                    var o = this.settings.rules;
                    t.each(o, function(e, i) {
                        o[e] = t.validator.normalizeRule(i)
                    }), t(this.currentForm).validateDelegate(":text, :password, :file, select, textarea", "focusin focusout keyup", e).validateDelegate(":radio, :checkbox, select, option", "click", e), this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
                },
                form: function() {
                    return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                },
                checkForm: function() {
                    this.prepareForm();
                    for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
                    return this.valid()
                },
                element: function(e) {
                    e = this.clean(e), this.lastElement = e, this.prepareElement(e), this.currentElements = t(e);
                    var i = this.check(e);
                    return i ? delete this.invalid[e.name] : this.invalid[e.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i
                },
                showErrors: function(e) {
                    if (e) {
                        t.extend(this.errorMap, e), this.errorList = [];
                        for (var i in e) this.errorList.push({
                            message: e[i],
                            element: this.findByName(i)[0]
                        });
                        this.successList = t.grep(this.successList, function(t) {
                            return !(t.name in e)
                        })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function() {
                    t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass)
                },
                numberOfInvalids: function() {
                    return this.objectLength(this.invalid)
                },
                objectLength: function(t) {
                    var e = 0;
                    for (var i in t) e++;
                    return e
                },
                hideErrors: function() {
                    this.addWrapper(this.toHide).hide()
                },
                valid: function() {
                    return 0 == this.size()
                },
                size: function() {
                    return this.errorList.length
                },
                focusInvalid: function() {
                    if (this.settings.focusInvalid) try {
                        t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (e) {}
                },
                findLastActive: function() {
                    var e = this.lastActive;
                    return e && 1 == t.grep(this.errorList, function(t) {
                        return t.element.name == e.name
                    }).length && e
                },
                elements: function() {
                    var e = this,
                        i = {};
                    return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                        return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), !(this.name in i || !e.objectLength(t(this).rules())) && (i[this.name] = !0, !0)
                    })
                },
                clean: function(e) {
                    return t(e)[0]
                },
                errors: function() {
                    return t(this.settings.errorElement + "." + this.settings.errorClass, this.errorContext)
                },
                reset: function() {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([])
                },
                prepareForm: function() {
                    this.reset(), this.toHide = this.errors().add(this.containers)
                },
                prepareElement: function(t) {
                    this.reset(), this.toHide = this.errorsFor(t)
                },
                check: function(e) {
                    e = this.clean(e), this.checkable(e) && (e = this.findByName(e.name).not(this.settings.ignore)[0]);
                    var i = t(e).rules(),
                        o = !1;
                    for (var n in i) {
                        var s = {
                            method: n,
                            parameters: i[n]
                        };
                        try {
                            var a = t.validator.methods[n].call(this, e.value.replace(/\r/g, ""), e, s.parameters);
                            if ("dependency-mismatch" == a) {
                                o = !0;
                                continue
                            }
                            if (o = !1, "pending" == a) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                            if (!a) return this.formatAndAdd(e, s), !1
                        } catch (r) {
                            throw this.settings.debug && window.console && console.log("exception occured when checking element " + e.id + ", check the '" + s.method + "' method", r), r
                        }
                    }
                    if (!o) return this.objectLength(i) && this.successList.push(e), !0
                },
                customMetaMessage: function(e, i) {
                    if (t.metadata) {
                        var o = this.settings.meta ? t(e).metadata()[this.settings.meta] : t(e).metadata();
                        return o && o.messages && o.messages[i]
                    }
                },
                customMessage: function(t, e) {
                    var i = this.settings.messages[t];
                    return i && (i.constructor == String ? i : i[e])
                },
                findDefined: function() {
                    for (var t = 0; t < arguments.length; t++)
                        if (void 0 !== arguments[t]) return arguments[t]
                },
                defaultMessage: function(e, i) {
                    return this.findDefined(this.customMessage(e.name, i), this.customMetaMessage(e, i), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i], "<strong>Warning: No message defined for " + e.name + "</strong>")
                },
                formatAndAdd: function(t, e) {
                    var i = this.defaultMessage(t, e.method),
                        o = /\$?\{(\d+)\}/g;
                    "function" == typeof i ? i = i.call(this, e.parameters, t) : o.test(i) && (i = jQuery.format(i.replace(o, "{$1}"), e.parameters)), this.errorList.push({
                        message: i,
                        element: t
                    }), this.errorMap[t.name] = i, this.submitted[t.name] = i
                },
                addWrapper: function(t) {
                    return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
                },
                defaultShowErrors: function() {
                    for (var t = 0; this.errorList[t]; t++) {
                        var e = this.errorList[t];
                        this.settings.highlight && this.settings.highlight.call(this, e.element, this.settings.errorClass, this.settings.validClass), this.showLabel(e.element, e.message)
                    }
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (var t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
                    if (this.settings.unhighlight)
                        for (var t = 0, i = this.validElements(); i[t]; t++) this.settings.unhighlight.call(this, i[t], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                validElements: function() {
                    return this.currentElements.not(this.invalidElements())
                },
                invalidElements: function() {
                    return t(this.errorList).map(function() {
                        return this.element
                    })
                },
                showLabel: function(e, i) {
                    var o = this.errorsFor(e);
                    o.length ? (o.removeClass().addClass(this.settings.errorClass), o.attr("generated") && o.html(i)) : (o = t("<" + this.settings.errorElement + "/>").attr({
                        "for": this.idOrName(e),
                        generated: !0
                    }).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (o = o.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(o).length || (this.settings.errorPlacement ? this.settings.errorPlacement(o, t(e)) : o.insertAfter(e))), !i && this.settings.success && (o.text(""), "string" == typeof this.settings.success ? o.addClass(this.settings.success) : this.settings.success(o)), this.toShow = this.toShow.add(o)
                },
                errorsFor: function(e) {
                    var i = this.idOrName(e);
                    return this.errors().filter(function() {
                        return t(this).attr("for") == i
                    })
                },
                idOrName: function(t) {
                    return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
                },
                checkable: function(t) {
                    return /radio|checkbox/i.test(t.type)
                },
                findByName: function(e) {
                    var i = this.currentForm;
                    return t(document.getElementsByName(e)).map(function(t, o) {
                        return o.form == i && o.name == e && o || null
                    })
                },
                getLength: function(e, i) {
                    switch (i.nodeName.toLowerCase()) {
                        case "select":
                            return t("option:selected", i).length;
                        case "input":
                            if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                    }
                    return e.length
                },
                depend: function(t, e) {
                    return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
                },
                dependTypes: {
                    "boolean": function(t, e) {
                        return t
                    },
                    string: function(e, i) {
                        return !!t(e, i.form).length
                    },
                    "function": function(t, e) {
                        return t(e)
                    }
                },
                optional: function(e) {
                    return !t.validator.methods.required.call(this, t.trim(e.value), e) && "dependency-mismatch"
                },
                startRequest: function(t) {
                    this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
                },
                stopRequest: function(e, i) {
                    this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], i && 0 == this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 == this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                },
                previousValue: function(e) {
                    return t.data(e, "previousValue") || t.data(e, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(e, "remote")
                    })
                }
            },
            classRuleSettings: {
                required: {
                    required: !0
                },
                email: {
                    email: !0
                },
                url: {
                    url: !0
                },
                date: {
                    date: !0
                },
                dateISO: {
                    dateISO: !0
                },
                dateDE: {
                    dateDE: !0
                },
                number: {
                    number: !0
                },
                numberDE: {
                    numberDE: !0
                },
                digits: {
                    digits: !0
                },
                creditcard: {
                    creditcard: !0
                }
            },
            addClassRules: function(e, i) {
                e.constructor == String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
            },
            classRules: function(e) {
                var i = {},
                    o = t(e).attr("class");
                return o && t.each(o.split(" "), function() {
                    this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
                }), i
            },
            attributeRules: function(e) {
                var i = {},
                    o = t(e);
                for (var n in t.validator.methods) {
                    var s = o.attr(n);
                    s && (i[n] = s)
                }
                return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i
            },
            metadataRules: function(e) {
                if (!t.metadata) return {};
                var i = t.data(e.form, "validator").settings.meta;
                return i ? t(e).metadata()[i] : t(e).metadata()
            },
            staticRules: function(e) {
                var i = {},
                    o = t.data(e.form, "validator");
                return o.settings.rules && (i = t.validator.normalizeRule(o.settings.rules[e.name]) || {}), i
            },
            normalizeRules: function(e, i) {
                return t.each(e, function(o, n) {
                    if (n === !1) return void delete e[o];
                    if (n.param || n.depends) {
                        var s = !0;
                        switch (typeof n.depends) {
                            case "string":
                                s = !!t(n.depends, i.form).length;
                                break;
                            case "function":
                                s = n.depends.call(i, i)
                        }
                        s ? e[o] = void 0 === n.param || n.param : delete e[o]
                    }
                }), t.each(e, function(o, n) {
                    e[o] = t.isFunction(n) ? n(i) : n
                }), t.each(["minlength", "maxlength", "min", "max"], function() {
                    e[this] && (e[this] = Number(e[this]))
                }), t.each(["rangelength", "range"], function() {
                    e[this] && (e[this] = [Number(e[this][0]), Number(e[this][1])])
                }), t.validator.autoCreateRanges && (e.min && e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), e.minlength && e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e.messages && delete e.messages, e
            },
            normalizeRule: function(e) {
                if ("string" == typeof e) {
                    var i = {};
                    t.each(e.split(/\s/), function() {
                        i[this] = !0
                    }), e = i
                }
                return e
            },
            addMethod: function(e, i, o) {
                t.validator.methods[e] = i, t.validator.messages[e] = void 0 != o ? o : t.validator.messages[e], i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
            },
            methods: {
                required: function(e, i, o) {
                    if (!this.depend(o, i)) return "dependency-mismatch";
                    switch (i.nodeName.toLowerCase()) {
                        case "select":
                            var n = t(i).val();
                            return n && n.length > 0;
                        case "input":
                            if (this.checkable(i)) return this.getLength(e, i) > 0;
                        default:
                            return t.trim(e).length > 0
                    }
                },
                remote: function(e, i, o) {
                    if (this.optional(i)) return "dependency-mismatch";
                    var n = this.previousValue(i);
                    if (this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), n.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = n.message, o = "string" == typeof o && {
                            url: o
                        } || o, this.pending[i.name]) return "pending";
                    if (n.old === e) return n.valid;
                    n.old = e;
                    var s = this;
                    this.startRequest(i);
                    var a = {};
                    return a[i.name] = e, t.ajax(t.extend(!0, {
                        url: o,
                        mode: "abort",
                        port: "validate" + i.name,
                        dataType: "json",
                        data: a,
                        success: function(o) {
                            s.settings.messages[i.name].remote = n.originalMessage;
                            var a = o === !0;
                            if (a) {
                                var r = s.formSubmitted;
                                s.prepareElement(i), s.formSubmitted = r, s.successList.push(i), s.showErrors()
                            } else {
                                var l = {},
                                    d = o || s.defaultMessage(i, "remote");
                                l[i.name] = n.message = t.isFunction(d) ? d(e) : d, s.showErrors(l)
                            }
                            n.valid = a, s.stopRequest(i, a)
                        }
                    }, o)), "pending"
                },
                minlength: function(e, i, o) {
                    return this.optional(i) || this.getLength(t.trim(e), i) >= o
                },
                maxlength: function(e, i, o) {
                    return this.optional(i) || this.getLength(t.trim(e), i) <= o
                },
                rangelength: function(e, i, o) {
                    var n = this.getLength(t.trim(e), i);
                    return this.optional(i) || n >= o[0] && n <= o[1]
                },
                min: function(t, e, i) {
                    return this.optional(e) || t >= i
                },
                max: function(t, e, i) {
                    return this.optional(e) || t <= i
                },
                range: function(t, e, i) {
                    return this.optional(e) || t >= i[0] && t <= i[1]
                },
                email: function(t, e) {
                    return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(t)
                },
                url: function(t, e) {
                    return this.optional(e) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
                },
                date: function(t, e) {
                    return this.optional(e) || !/Invalid|NaN/.test(new Date(t))
                },
                dateISO: function(t, e) {
                    return this.optional(e) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(t)
                },
                number: function(t, e) {
                    return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(t)
                },
                digits: function(t, e) {
                    return this.optional(e) || /^\d+$/.test(t)
                },
                creditcard: function(t, e) {
                    if (this.optional(e)) return "dependency-mismatch";
                    if (/[^0-9-]+/.test(t)) return !1;
                    var i = 0,
                        o = 0,
                        n = !1;
                    t = t.replace(/\D/g, "");
                    for (var s = t.length - 1; s >= 0; s--) {
                        var a = t.charAt(s),
                            o = parseInt(a, 10);
                        n && (o *= 2) > 9 && (o -= 9), i += o, n = !n
                    }
                    return i % 10 == 0
                },
                accept: function(t, e, i) {
                    return i = "string" == typeof i ? i.replace(/,/g, "|") : "png|jpe?g|gif", this.optional(e) || t.match(new RegExp(".(" + i + ")$", "i"))
                },
                equalTo: function(e, i, o) {
                    var n = t(o).unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                        t(i).valid()
                    });
                    return e == n.val()
                }
            }
        }), t.format = t.validator.format
    }(jQuery),
    function(t) {
        var e = {};
        if (t.ajaxPrefilter) t.ajaxPrefilter(function(t, i, o) {
            var n = t.port;
            "abort" == t.mode && (e[n] && e[n].abort(), e[n] = o)
        });
        else {
            var i = t.ajax;
            t.ajax = function(o) {
                var n = ("mode" in o ? o : t.ajaxSettings).mode,
                    s = ("port" in o ? o : t.ajaxSettings).port;
                return "abort" == n ? (e[s] && e[s].abort(), e[s] = i.apply(this, arguments)) : i.apply(this, arguments)
            }
        }
    }(jQuery),
    function(t) {
        jQuery.event.special.focusin || jQuery.event.special.focusout || !document.addEventListener || t.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, i) {
            function o(e) {
                return e = t.event.fix(e), e.type = i, t.event.handle.call(this, e)
            }
            t.event.special[i] = {
                setup: function() {
                    this.addEventListener(e, o, !0)
                },
                teardown: function() {
                    this.removeEventListener(e, o, !0)
                },
                handler: function(e) {
                    return arguments[0] = t.event.fix(e), arguments[0].type = i, t.event.handle.apply(this, arguments)
                }
            }
        }), t.extend(t.fn, {
            validateDelegate: function(e, i, o) {
                return this.bind(i, function(i) {
                    var n = t(i.target);
                    if (n.is(e)) return o.apply(n, arguments)
                })
            }
        })
    }(jQuery), "function" != typeof Object.create && (Object.create = function(t) {
        function e() {}
        return e.prototype = t, new e
    }),
    function(t, e, i, o) {
        var n = {
            init: function(e, i) {
                var o = this;
                o.elem = i, o.$elem = t(i), o.imageSrc = o.$elem.data("zoom-image") ? o.$elem.data("zoom-image") : o.$elem.attr("src"), o.options = t.extend({}, t.fn.elevateZoom.options, e), o.options.tint && (o.options.lensColour = "none", o.options.lensOpacity = "1"), "inner" == o.options.zoomType && (o.options.showLens = !1), o.$elem.parent().removeAttr("title").removeAttr("alt"), o.zoomImage = o.imageSrc, o.refresh(1), t("#" + o.options.gallery + " a").click(function(e) {
                    return o.options.galleryActiveClass && (t("#" + o.options.gallery + " a").removeClass(o.options.galleryActiveClass), t(this).addClass(o.options.galleryActiveClass)), e.preventDefault(), t(this).data("zoom-image") ? o.zoomImagePre = t(this).data("zoom-image") : o.zoomImagePre = t(this).data("image"), o.swaptheimage(t(this).data("image"), o.zoomImagePre), !1
                })
            },
            refresh: function(t) {
                var e = this;
                setTimeout(function() {
                    e.fetch(e.imageSrc)
                }, t || e.options.refresh)
            },
            fetch: function(t) {
                var e = this,
                    i = new Image;
                i.onload = function() {
                    e.largeWidth = i.width, e.largeHeight = i.height, e.startZoom(), e.currentImage = e.imageSrc, e.options.onZoomedImageLoaded(e.$elem)
                }, i.src = t
            },
            startZoom: function() {
                var e = this;
                if (e.nzWidth = e.$elem.width(), e.nzHeight = e.$elem.height(), e.isWindowActive = !1, e.isLensActive = !1, e.isTintActive = !1, e.overWindow = !1, e.options.imageCrossfade && (e.zoomWrap = e.$elem.wrap('<div style="height:' + e.nzHeight + "px;width:" + e.nzWidth + 'px;" class="zoomWrapper" />'), e.$elem.css("position", "absolute")), e.zoomLock = 1, e.scrollingLock = !1, e.changeBgSize = !1, e.currentZoomLevel = e.options.zoomLevel, e.nzOffset = e.$elem.offset(), e.widthRatio = e.largeWidth / e.currentZoomLevel / e.nzWidth, e.heightRatio = e.largeHeight / e.currentZoomLevel / e.nzHeight, "window" == e.options.zoomType && (e.zoomWindowStyle = "overflow: hidden;background-position: 0px 0px;text-align:center;background-color: " + String(e.options.zoomWindowBgColour) + ";width: " + String(e.options.zoomWindowWidth) + "px;height: " + String(e.options.zoomWindowHeight) + "px;float: left;background-size: " + e.largeWidth / e.currentZoomLevel + "px " + e.largeHeight / e.currentZoomLevel + "px;display: none;z-index:100;border: " + String(e.options.borderSize) + "px solid " + e.options.borderColour + ";background-repeat: no-repeat;position: absolute;"), "inner" == e.options.zoomType) {
                    var i = e.$elem.css("border-left-width");
                    e.zoomWindowStyle = "overflow: hidden;margin-left: " + String(i) + ";margin-top: " + String(i) + ";background-position: 0px 0px;width: " + String(e.nzWidth) + "px;height: " + String(e.nzHeight) + "px;px;float: left;display: none;cursor:" + e.options.cursor + ";px solid " + e.options.borderColour + ";background-repeat: no-repeat;position: absolute;"
                }
                "window" == e.options.zoomType && (e.nzHeight < e.options.zoomWindowWidth / e.widthRatio ? lensHeight = e.nzHeight : lensHeight = String(e.options.zoomWindowHeight / e.heightRatio), e.largeWidth < e.options.zoomWindowWidth ? lensWidth = e.nzWidth : lensWidth = e.options.zoomWindowWidth / e.widthRatio, e.lensStyle = "background-position: 0px 0px;width: " + String(e.options.zoomWindowWidth / e.widthRatio) + "px;height: " + String(e.options.zoomWindowHeight / e.heightRatio) + "px;float: right;display: none;overflow: hidden;z-index: 999;-webkit-transform: translateZ(0);opacity:" + e.options.lensOpacity + ";filter: alpha(opacity = " + 100 * e.options.lensOpacity + "); zoom:1;width:" + lensWidth + "px;height:" + lensHeight + "px;background-color:" + e.options.lensColour + ";cursor:" + e.options.cursor + ";border: " + e.options.lensBorderSize + "px solid " + e.options.lensBorderColour + ";background-repeat: no-repeat;position: absolute;"), e.tintStyle = "display: block;position: absolute;background-color: " + e.options.tintColour + ";filter:alpha(opacity=0);opacity: 0;width: " + e.nzWidth + "px;height: " + e.nzHeight + "px;", e.lensRound = "", "lens" == e.options.zoomType && (e.lensStyle = "background-position: 0px 0px;float: left;display: none;border: " + String(e.options.borderSize) + "px solid " + e.options.borderColour + ";width:" + String(e.options.lensSize) + "px;height:" + String(e.options.lensSize) + "px;background-repeat: no-repeat;position: absolute;"), "round" == e.options.lensShape && (e.lensRound = "border-top-left-radius: " + String(e.options.lensSize / 2 + e.options.borderSize) + "px;border-top-right-radius: " + String(e.options.lensSize / 2 + e.options.borderSize) + "px;border-bottom-left-radius: " + String(e.options.lensSize / 2 + e.options.borderSize) + "px;border-bottom-right-radius: " + String(e.options.lensSize / 2 + e.options.borderSize) + "px;"), e.zoomContainer = t('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:' + e.nzOffset.left + "px;top:" + e.nzOffset.top + "px;height:" + e.nzHeight + "px;width:" + e.nzWidth + 'px;"></div>'), t("body").append(e.zoomContainer), e.options.containLensZoom && "lens" == e.options.zoomType && e.zoomContainer.css("overflow", "hidden"), "inner" != e.options.zoomType && (e.zoomLens = t("<div class='zoomLens' style='" + e.lensStyle + e.lensRound + "'>&nbsp;</div>").appendTo(e.zoomContainer).click(function() {
                    e.$elem.trigger("click")
                }), e.options.tint && (e.tintContainer = t("<div/>").addClass("tintContainer"), e.zoomTint = t("<div class='zoomTint' style='" + e.tintStyle + "'></div>"), e.zoomLens.wrap(e.tintContainer), e.zoomTintcss = e.zoomLens.after(e.zoomTint), e.zoomTintImage = t('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: ' + e.nzWidth + "px; height: " + e.nzHeight + 'px;" src="' + e.imageSrc + '">').appendTo(e.zoomLens).click(function() {
                    e.$elem.trigger("click")
                }))), isNaN(e.options.zoomWindowPosition) ? e.zoomWindow = t("<div style='z-index:999;left:" + e.windowOffsetLeft + "px;top:" + e.windowOffsetTop + "px;" + e.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>").appendTo("body").click(function() {
                    e.$elem.trigger("click")
                }) : e.zoomWindow = t("<div style='z-index:999;left:" + e.windowOffsetLeft + "px;top:" + e.windowOffsetTop + "px;" + e.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>").appendTo(e.zoomContainer).click(function() {
                    e.$elem.trigger("click")
                }), e.zoomWindowContainer = t("<div/>").addClass("zoomWindowContainer").css("width", e.options.zoomWindowWidth), e.zoomWindow.wrap(e.zoomWindowContainer), "lens" == e.options.zoomType && e.zoomLens.css({
                    backgroundImage: "url('" + e.imageSrc + "')"
                }), "window" == e.options.zoomType && e.zoomWindow.css({
                    backgroundImage: "url('" + e.imageSrc + "')"
                }), "inner" == e.options.zoomType && e.zoomWindow.css({
                    backgroundImage: "url('" + e.imageSrc + "')"
                }), e.$elem.bind("touchmove", function(t) {
                    t.preventDefault();
                    var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0];
                    e.setPosition(i)
                }), e.zoomContainer.bind("touchmove", function(t) {
                    "inner" == e.options.zoomType && e.showHideWindow("show"), t.preventDefault();
                    var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0];
                    e.setPosition(i)
                }), e.zoomContainer.bind("touchend", function(t) {
                    e.showHideWindow("hide"), e.options.showLens && e.showHideLens("hide"), e.options.tint && "inner" != e.options.zoomType && e.showHideTint("hide")
                }), e.$elem.bind("touchend", function(t) {
                    e.showHideWindow("hide"), e.options.showLens && e.showHideLens("hide"), e.options.tint && "inner" != e.options.zoomType && e.showHideTint("hide")
                }), e.options.showLens && (e.zoomLens.bind("touchmove", function(t) {
                    t.preventDefault();
                    var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0];
                    e.setPosition(i)
                }), e.zoomLens.bind("touchend", function(t) {
                    e.showHideWindow("hide"), e.options.showLens && e.showHideLens("hide"), e.options.tint && "inner" != e.options.zoomType && e.showHideTint("hide")
                })), e.$elem.bind("mousemove", function(t) {
                    0 == e.overWindow && e.setElements("show"), e.lastX === t.clientX && e.lastY === t.clientY || (e.setPosition(t), e.currentLoc = t), e.lastX = t.clientX, e.lastY = t.clientY
                }), e.zoomContainer.bind("mousemove", function(t) {
                    0 == e.overWindow && e.setElements("show"), e.lastX === t.clientX && e.lastY === t.clientY || (e.setPosition(t), e.currentLoc = t), e.lastX = t.clientX, e.lastY = t.clientY
                }), "inner" != e.options.zoomType && e.zoomLens.bind("mousemove", function(t) {
                    e.lastX === t.clientX && e.lastY === t.clientY || (e.setPosition(t), e.currentLoc = t), e.lastX = t.clientX, e.lastY = t.clientY
                }), e.options.tint && "inner" != e.options.zoomType && e.zoomTint.bind("mousemove", function(t) {
                    e.lastX === t.clientX && e.lastY === t.clientY || (e.setPosition(t), e.currentLoc = t), e.lastX = t.clientX, e.lastY = t.clientY
                }), "inner" == e.options.zoomType && e.zoomWindow.bind("mousemove", function(t) {
                    e.lastX === t.clientX && e.lastY === t.clientY || (e.setPosition(t), e.currentLoc = t), e.lastX = t.clientX, e.lastY = t.clientY
                }), e.zoomContainer.add(e.$elem).mouseenter(function() {
                    0 == e.overWindow && e.setElements("show")
                }).mouseleave(function() {
                    e.scrollLock || (e.setElements("hide"), e.options.onDestroy(e.$elem))
                }), "inner" != e.options.zoomType && e.zoomWindow.mouseenter(function() {
                    e.overWindow = !0, e.setElements("hide")
                }).mouseleave(function() {
                    e.overWindow = !1
                }), 1 != e.options.zoomLevel, e.options.minZoomLevel ? e.minZoomLevel = e.options.minZoomLevel : e.minZoomLevel = 2 * e.options.scrollZoomIncrement, e.options.scrollZoom && e.zoomContainer.add(e.$elem).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function(i) {
                    e.scrollLock = !0, clearTimeout(t.data(this, "timer")), t.data(this, "timer", setTimeout(function() {
                        e.scrollLock = !1
                    }, 250));
                    var o = i.originalEvent.wheelDelta || i.originalEvent.detail * -1;
                    return i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault(), o / 120 > 0 ? e.currentZoomLevel >= e.minZoomLevel && e.changeZoomLevel(e.currentZoomLevel - e.options.scrollZoomIncrement) : e.options.maxZoomLevel ? e.currentZoomLevel <= e.options.maxZoomLevel && e.changeZoomLevel(parseFloat(e.currentZoomLevel) + e.options.scrollZoomIncrement) : e.changeZoomLevel(parseFloat(e.currentZoomLevel) + e.options.scrollZoomIncrement), !1
                })
            },
            setElements: function(t) {
                var e = this;
                return !!e.options.zoomEnabled && ("show" == t && e.isWindowSet && ("inner" == e.options.zoomType && e.showHideWindow("show"), "window" == e.options.zoomType && e.showHideWindow("show"), e.options.showLens && e.showHideLens("show"), e.options.tint && "inner" != e.options.zoomType && e.showHideTint("show")), void("hide" == t && ("window" == e.options.zoomType && e.showHideWindow("hide"), e.options.tint || e.showHideWindow("hide"), e.options.showLens && e.showHideLens("hide"), e.options.tint && e.showHideTint("hide"))))
            },
            setPosition: function(t) {
                var e = this;
                return !!e.options.zoomEnabled && (e.nzHeight = e.$elem.height(), e.nzWidth = e.$elem.width(), e.nzOffset = e.$elem.offset(), e.options.tint && "inner" != e.options.zoomType && (e.zoomTint.css({
                    top: 0
                }), e.zoomTint.css({
                    left: 0
                })), e.options.responsive && !e.options.scrollZoom && e.options.showLens && (e.nzHeight < e.options.zoomWindowWidth / e.widthRatio ? lensHeight = e.nzHeight : lensHeight = String(e.options.zoomWindowHeight / e.heightRatio), e.largeWidth < e.options.zoomWindowWidth ? lensWidth = e.nzWidth : lensWidth = e.options.zoomWindowWidth / e.widthRatio, e.widthRatio = e.largeWidth / e.nzWidth, e.heightRatio = e.largeHeight / e.nzHeight, "lens" != e.options.zoomType && (e.nzHeight < e.options.zoomWindowWidth / e.widthRatio ? lensHeight = e.nzHeight : lensHeight = String(e.options.zoomWindowHeight / e.heightRatio), e.nzWidth < e.options.zoomWindowHeight / e.heightRatio ? lensWidth = e.nzWidth : lensWidth = String(e.options.zoomWindowWidth / e.widthRatio), e.zoomLens.css("width", lensWidth), e.zoomLens.css("height", lensHeight), e.options.tint && (e.zoomTintImage.css("width", e.nzWidth), e.zoomTintImage.css("height", e.nzHeight))), "lens" == e.options.zoomType && e.zoomLens.css({
                    width: String(e.options.lensSize) + "px",
                    height: String(e.options.lensSize) + "px"
                })), e.zoomContainer.css({
                    top: e.nzOffset.top
                }), e.zoomContainer.css({
                    left: e.nzOffset.left
                }), e.mouseLeft = parseInt(t.pageX - e.nzOffset.left), e.mouseTop = parseInt(t.pageY - e.nzOffset.top), "window" == e.options.zoomType && (e.Etoppos = e.mouseTop < e.zoomLens.height() / 2, e.Eboppos = e.mouseTop > e.nzHeight - e.zoomLens.height() / 2 - 2 * e.options.lensBorderSize,
                    e.Eloppos = e.mouseLeft < 0 + e.zoomLens.width() / 2, e.Eroppos = e.mouseLeft > e.nzWidth - e.zoomLens.width() / 2 - 2 * e.options.lensBorderSize), "inner" == e.options.zoomType && (e.Etoppos = e.mouseTop < e.nzHeight / 2 / e.heightRatio, e.Eboppos = e.mouseTop > e.nzHeight - e.nzHeight / 2 / e.heightRatio, e.Eloppos = e.mouseLeft < 0 + e.nzWidth / 2 / e.widthRatio, e.Eroppos = e.mouseLeft > e.nzWidth - e.nzWidth / 2 / e.widthRatio - 2 * e.options.lensBorderSize), e.mouseLeft < 0 || e.mouseTop < 0 || e.mouseLeft > e.nzWidth || e.mouseTop > e.nzHeight ? void e.setElements("hide") : (e.options.showLens && (e.lensLeftPos = String(Math.floor(e.mouseLeft - e.zoomLens.width() / 2)), e.lensTopPos = String(Math.floor(e.mouseTop - e.zoomLens.height() / 2))), e.Etoppos && (e.lensTopPos = 0), e.Eloppos && (e.windowLeftPos = 0, e.lensLeftPos = 0, e.tintpos = 0), "window" == e.options.zoomType && (e.Eboppos && (e.lensTopPos = Math.max(e.nzHeight - e.zoomLens.height() - 2 * e.options.lensBorderSize, 0)), e.Eroppos && (e.lensLeftPos = e.nzWidth - e.zoomLens.width() - 2 * e.options.lensBorderSize)), "inner" == e.options.zoomType && (e.Eboppos && (e.lensTopPos = Math.max(e.nzHeight - 2 * e.options.lensBorderSize, 0)), e.Eroppos && (e.lensLeftPos = e.nzWidth - e.nzWidth - 2 * e.options.lensBorderSize)), "lens" == e.options.zoomType && (e.windowLeftPos = String(((t.pageX - e.nzOffset.left) * e.widthRatio - e.zoomLens.width() / 2) * -1), e.windowTopPos = String(((t.pageY - e.nzOffset.top) * e.heightRatio - e.zoomLens.height() / 2) * -1), e.zoomLens.css({
                    backgroundPosition: e.windowLeftPos + "px " + e.windowTopPos + "px"
                }), e.changeBgSize && (e.nzHeight > e.nzWidth ? ("lens" == e.options.zoomType && e.zoomLens.css({
                    "background-size": e.largeWidth / e.newvalueheight + "px " + e.largeHeight / e.newvalueheight + "px"
                }), e.zoomWindow.css({
                    "background-size": e.largeWidth / e.newvalueheight + "px " + e.largeHeight / e.newvalueheight + "px"
                })) : ("lens" == e.options.zoomType && e.zoomLens.css({
                    "background-size": e.largeWidth / e.newvaluewidth + "px " + e.largeHeight / e.newvaluewidth + "px"
                }), e.zoomWindow.css({
                    "background-size": e.largeWidth / e.newvaluewidth + "px " + e.largeHeight / e.newvaluewidth + "px"
                })), e.changeBgSize = !1), e.setWindowPostition(t)), e.options.tint && "inner" != e.options.zoomType && e.setTintPosition(t), "window" == e.options.zoomType && e.setWindowPostition(t), "inner" == e.options.zoomType && e.setWindowPostition(t), e.options.showLens && (e.fullwidth && "lens" != e.options.zoomType && (e.lensLeftPos = 0), e.zoomLens.css({
                    left: e.lensLeftPos + "px",
                    top: e.lensTopPos + "px"
                })), void 0))
            },
            showHideWindow: function(t) {
                var e = this;
                "show" == t && (e.isWindowActive || (e.options.zoomWindowFadeIn ? e.zoomWindow.stop(!0, !0, !1).fadeIn(e.options.zoomWindowFadeIn) : e.zoomWindow.show(), e.isWindowActive = !0)), "hide" == t && e.isWindowActive && (e.options.zoomWindowFadeOut ? e.zoomWindow.stop(!0, !0).fadeOut(e.options.zoomWindowFadeOut, function() {
                    e.loop && (clearInterval(e.loop), e.loop = !1)
                }) : e.zoomWindow.hide(), e.isWindowActive = !1)
            },
            showHideLens: function(t) {
                var e = this;
                "show" == t && (e.isLensActive || (e.options.lensFadeIn ? e.zoomLens.stop(!0, !0, !1).fadeIn(e.options.lensFadeIn) : e.zoomLens.show(), e.isLensActive = !0)), "hide" == t && e.isLensActive && (e.options.lensFadeOut ? e.zoomLens.stop(!0, !0).fadeOut(e.options.lensFadeOut) : e.zoomLens.hide(), e.isLensActive = !1)
            },
            showHideTint: function(t) {
                var e = this;
                "show" == t && (e.isTintActive || (e.options.zoomTintFadeIn ? e.zoomTint.css({
                    opacity: e.options.tintOpacity
                }).animate().stop(!0, !0).fadeIn("slow") : (e.zoomTint.css({
                    opacity: e.options.tintOpacity
                }).animate(), e.zoomTint.show()), e.isTintActive = !0)), "hide" == t && e.isTintActive && (e.options.zoomTintFadeOut ? e.zoomTint.stop(!0, !0).fadeOut(e.options.zoomTintFadeOut) : e.zoomTint.hide(), e.isTintActive = !1)
            },
            setLensPostition: function(t) {},
            setWindowPostition: function(e) {
                var i = this;
                if (isNaN(i.options.zoomWindowPosition)) i.externalContainer = t("#" + i.options.zoomWindowPosition), i.externalContainerWidth = i.externalContainer.width(), i.externalContainerHeight = i.externalContainer.height(), i.externalContainerOffset = i.externalContainer.offset(), i.windowOffsetTop = i.externalContainerOffset.top, i.windowOffsetLeft = i.externalContainerOffset.left;
                else switch (i.options.zoomWindowPosition) {
                    case 1:
                        i.windowOffsetTop = i.options.zoomWindowOffety, i.windowOffsetLeft = +i.nzWidth;
                        break;
                    case 2:
                        i.options.zoomWindowHeight > i.nzHeight && (i.windowOffsetTop = (i.options.zoomWindowHeight / 2 - i.nzHeight / 2) * -1, i.windowOffsetLeft = i.nzWidth);
                        break;
                    case 3:
                        i.windowOffsetTop = i.nzHeight - i.zoomWindow.height() - 2 * i.options.borderSize, i.windowOffsetLeft = i.nzWidth;
                        break;
                    case 4:
                        i.windowOffsetTop = i.nzHeight, i.windowOffsetLeft = i.nzWidth;
                        break;
                    case 5:
                        i.windowOffsetTop = i.nzHeight, i.windowOffsetLeft = i.nzWidth - i.zoomWindow.width() - 2 * i.options.borderSize;
                        break;
                    case 6:
                        i.options.zoomWindowHeight > i.nzHeight && (i.windowOffsetTop = i.nzHeight, i.windowOffsetLeft = (i.options.zoomWindowWidth / 2 - i.nzWidth / 2 + 2 * i.options.borderSize) * -1);
                        break;
                    case 7:
                        i.windowOffsetTop = i.nzHeight, i.windowOffsetLeft = 0;
                        break;
                    case 8:
                        i.windowOffsetTop = i.nzHeight, i.windowOffsetLeft = (i.zoomWindow.width() + 2 * i.options.borderSize) * -1;
                        break;
                    case 9:
                        i.windowOffsetTop = i.nzHeight - i.zoomWindow.height() - 2 * i.options.borderSize, i.windowOffsetLeft = (i.zoomWindow.width() + 2 * i.options.borderSize) * -1;
                        break;
                    case 10:
                        i.options.zoomWindowHeight > i.nzHeight && (i.windowOffsetTop = (i.options.zoomWindowHeight / 2 - i.nzHeight / 2) * -1, i.windowOffsetLeft = (i.zoomWindow.width() + 2 * i.options.borderSize) * -1);
                        break;
                    case 11:
                        i.windowOffsetTop = i.options.zoomWindowOffety, i.windowOffsetLeft = (i.zoomWindow.width() + 2 * i.options.borderSize) * -1;
                        break;
                    case 12:
                        i.windowOffsetTop = (i.zoomWindow.height() + 2 * i.options.borderSize) * -1, i.windowOffsetLeft = (i.zoomWindow.width() + 2 * i.options.borderSize) * -1;
                        break;
                    case 13:
                        i.windowOffsetTop = (i.zoomWindow.height() + 2 * i.options.borderSize) * -1, i.windowOffsetLeft = 0;
                        break;
                    case 14:
                        i.options.zoomWindowHeight > i.nzHeight && (i.windowOffsetTop = (i.zoomWindow.height() + 2 * i.options.borderSize) * -1, i.windowOffsetLeft = (i.options.zoomWindowWidth / 2 - i.nzWidth / 2 + 2 * i.options.borderSize) * -1);
                        break;
                    case 15:
                        i.windowOffsetTop = (i.zoomWindow.height() + 2 * i.options.borderSize) * -1, i.windowOffsetLeft = i.nzWidth - i.zoomWindow.width() - 2 * i.options.borderSize;
                        break;
                    case 16:
                        i.windowOffsetTop = (i.zoomWindow.height() + 2 * i.options.borderSize) * -1, i.windowOffsetLeft = i.nzWidth;
                        break;
                    default:
                        i.windowOffsetTop = i.options.zoomWindowOffety, i.windowOffsetLeft = i.nzWidth
                }
                i.isWindowSet = !0, i.windowOffsetTop = i.windowOffsetTop + i.options.zoomWindowOffety, i.windowOffsetLeft = i.windowOffsetLeft + i.options.zoomWindowOffetx, i.zoomWindow.css({
                    top: i.windowOffsetTop
                }), i.zoomWindow.css({
                    left: i.windowOffsetLeft
                }), "inner" == i.options.zoomType && (i.zoomWindow.css({
                    top: 0
                }), i.zoomWindow.css({
                    left: 0
                })), i.windowLeftPos = String(((e.pageX - i.nzOffset.left) * i.widthRatio - i.zoomWindow.width() / 2) * -1), i.windowTopPos = String(((e.pageY - i.nzOffset.top) * i.heightRatio - i.zoomWindow.height() / 2) * -1), i.Etoppos && (i.windowTopPos = 0), i.Eloppos && (i.windowLeftPos = 0), i.Eboppos && (i.windowTopPos = (i.largeHeight / i.currentZoomLevel - i.zoomWindow.height()) * -1), i.Eroppos && (i.windowLeftPos = (i.largeWidth / i.currentZoomLevel - i.zoomWindow.width()) * -1), i.fullheight && (i.windowTopPos = 0), i.fullwidth && (i.windowLeftPos = 0), "window" != i.options.zoomType && "inner" != i.options.zoomType || (1 == i.zoomLock && (i.widthRatio <= 1 && (i.windowLeftPos = 0), i.heightRatio <= 1 && (i.windowTopPos = 0)), "window" == i.options.zoomType && (i.largeHeight < i.options.zoomWindowHeight && (i.windowTopPos = 0), i.largeWidth < i.options.zoomWindowWidth && (i.windowLeftPos = 0)), i.options.easing ? (i.xp || (i.xp = 0), i.yp || (i.yp = 0), i.loop || (i.loop = setInterval(function() {
                    i.xp += (i.windowLeftPos - i.xp) / i.options.easingAmount, i.yp += (i.windowTopPos - i.yp) / i.options.easingAmount, i.scrollingLock ? (clearInterval(i.loop), i.xp = i.windowLeftPos, i.yp = i.windowTopPos, i.xp = ((e.pageX - i.nzOffset.left) * i.widthRatio - i.zoomWindow.width() / 2) * -1, i.yp = ((e.pageY - i.nzOffset.top) * i.heightRatio - i.zoomWindow.height() / 2) * -1, i.changeBgSize && (i.nzHeight > i.nzWidth ? ("lens" == i.options.zoomType && i.zoomLens.css({
                        "background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px"
                    }), i.zoomWindow.css({
                        "background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px"
                    })) : ("lens" != i.options.zoomType && i.zoomLens.css({
                        "background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvalueheight + "px"
                    }), i.zoomWindow.css({
                        "background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvaluewidth + "px"
                    })), i.changeBgSize = !1), i.zoomWindow.css({
                        backgroundPosition: i.windowLeftPos + "px " + i.windowTopPos + "px"
                    }), i.scrollingLock = !1, i.loop = !1) : Math.round(Math.abs(i.xp - i.windowLeftPos) + Math.abs(i.yp - i.windowTopPos)) < 1 ? (clearInterval(i.loop), i.zoomWindow.css({
                        backgroundPosition: i.windowLeftPos + "px " + i.windowTopPos + "px"
                    }), i.loop = !1) : (i.changeBgSize && (i.nzHeight > i.nzWidth ? ("lens" == i.options.zoomType && i.zoomLens.css({
                        "background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px"
                    }), i.zoomWindow.css({
                        "background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px"
                    })) : ("lens" != i.options.zoomType && i.zoomLens.css({
                        "background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvaluewidth + "px"
                    }), i.zoomWindow.css({
                        "background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvaluewidth + "px"
                    })), i.changeBgSize = !1), i.zoomWindow.css({
                        backgroundPosition: i.xp + "px " + i.yp + "px"
                    }))
                }, 16))) : (i.changeBgSize && (i.nzHeight > i.nzWidth ? ("lens" == i.options.zoomType && i.zoomLens.css({
                    "background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px"
                }), i.zoomWindow.css({
                    "background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px"
                })) : ("lens" == i.options.zoomType && i.zoomLens.css({
                    "background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvaluewidth + "px"
                }), i.largeHeight / i.newvaluewidth < i.options.zoomWindowHeight ? i.zoomWindow.css({
                    "background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvaluewidth + "px"
                }) : i.zoomWindow.css({
                    "background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px"
                })), i.changeBgSize = !1), i.zoomWindow.css({
                    backgroundPosition: i.windowLeftPos + "px " + i.windowTopPos + "px"
                })))
            },
            setTintPosition: function(t) {
                var e = this;
                e.nzOffset = e.$elem.offset(), e.tintpos = String((t.pageX - e.nzOffset.left - e.zoomLens.width() / 2) * -1), e.tintposy = String((t.pageY - e.nzOffset.top - e.zoomLens.height() / 2) * -1), e.Etoppos && (e.tintposy = 0), e.Eloppos && (e.tintpos = 0), e.Eboppos && (e.tintposy = (e.nzHeight - e.zoomLens.height() - 2 * e.options.lensBorderSize) * -1), e.Eroppos && (e.tintpos = (e.nzWidth - e.zoomLens.width() - 2 * e.options.lensBorderSize) * -1), e.options.tint && (e.fullheight && (e.tintposy = 0), e.fullwidth && (e.tintpos = 0), e.zoomTintImage.css({
                    left: e.tintpos + "px"
                }), e.zoomTintImage.css({
                    top: e.tintposy + "px"
                }))
            },
            swaptheimage: function(e, i) {
                var o = this,
                    n = new Image;
                o.options.loadingIcon && (o.spinner = t("<div style=\"background: url('" + o.options.loadingIcon + "') no-repeat center;height:" + o.nzHeight + "px;width:" + o.nzWidth + 'px;z-index: 2000;position: absolute; background-position: center center;"></div>'), o.$elem.after(o.spinner)), o.options.onImageSwap(o.$elem), n.onload = function() {
                    o.largeWidth = n.width, o.largeHeight = n.height, o.zoomImage = i, o.zoomWindow.css({
                        "background-size": o.largeWidth + "px " + o.largeHeight + "px"
                    }), o.swapAction(e, i)
                }, n.src = i
            },
            swapAction: function(e, i) {
                var o = this,
                    n = new Image;
                if (n.onload = function() {
                        o.nzHeight = n.height, o.nzWidth = n.width, o.options.onImageSwapComplete(o.$elem), o.doneCallback()
                    }, n.src = e, o.currentZoomLevel = o.options.zoomLevel, o.options.maxZoomLevel = !1, "lens" == o.options.zoomType && o.zoomLens.css({
                        backgroundImage: "url('" + i + "')"
                    }), "window" == o.options.zoomType && o.zoomWindow.css({
                        backgroundImage: "url('" + i + "')"
                    }), "inner" == o.options.zoomType && o.zoomWindow.css({
                        backgroundImage: "url('" + i + "')"
                    }), o.currentImage = i, o.options.imageCrossfade) {
                    var s = o.$elem,
                        a = s.clone();
                    if (o.$elem.attr("src", e), o.$elem.after(a), a.stop(!0).fadeOut(o.options.imageCrossfade, function() {
                            t(this).remove()
                        }), o.$elem.width("auto").removeAttr("width"), o.$elem.height("auto").removeAttr("height"), s.fadeIn(o.options.imageCrossfade), o.options.tint && "inner" != o.options.zoomType) {
                        var r = o.zoomTintImage,
                            l = r.clone();
                        o.zoomTintImage.attr("src", i), o.zoomTintImage.after(l), l.stop(!0).fadeOut(o.options.imageCrossfade, function() {
                            t(this).remove()
                        }), r.fadeIn(o.options.imageCrossfade), o.zoomTint.css({
                            height: o.$elem.height()
                        }), o.zoomTint.css({
                            width: o.$elem.width()
                        })
                    }
                    o.zoomContainer.css("height", o.$elem.height()), o.zoomContainer.css("width", o.$elem.width()), "inner" == o.options.zoomType && (o.options.constrainType || (o.zoomWrap.parent().css("height", o.$elem.height()), o.zoomWrap.parent().css("width", o.$elem.width()), o.zoomWindow.css("height", o.$elem.height()), o.zoomWindow.css("width", o.$elem.width()))), o.options.imageCrossfade && (o.zoomWrap.css("height", o.$elem.height()), o.zoomWrap.css("width", o.$elem.width()))
                } else o.$elem.attr("src", e), o.options.tint && (o.zoomTintImage.attr("src", i), o.zoomTintImage.attr("height", o.$elem.height()), o.zoomTintImage.css({
                    height: o.$elem.height()
                }), o.zoomTint.css({
                    height: o.$elem.height()
                })), o.zoomContainer.css("height", o.$elem.height()), o.zoomContainer.css("width", o.$elem.width()), o.options.imageCrossfade && (o.zoomWrap.css("height", o.$elem.height()), o.zoomWrap.css("width", o.$elem.width()));
                o.options.constrainType && ("height" == o.options.constrainType && (o.zoomContainer.css("height", o.options.constrainSize), o.zoomContainer.css("width", "auto"), o.options.imageCrossfade ? (o.zoomWrap.css("height", o.options.constrainSize), o.zoomWrap.css("width", "auto"), o.constwidth = o.zoomWrap.width()) : (o.$elem.css("height", o.options.constrainSize), o.$elem.css("width", "auto"), o.constwidth = o.$elem.width()), "inner" == o.options.zoomType && (o.zoomWrap.parent().css("height", o.options.constrainSize), o.zoomWrap.parent().css("width", o.constwidth), o.zoomWindow.css("height", o.options.constrainSize), o.zoomWindow.css("width", o.constwidth)), o.options.tint && (o.tintContainer.css("height", o.options.constrainSize), o.tintContainer.css("width", o.constwidth), o.zoomTint.css("height", o.options.constrainSize), o.zoomTint.css("width", o.constwidth), o.zoomTintImage.css("height", o.options.constrainSize), o.zoomTintImage.css("width", o.constwidth))), "width" == o.options.constrainType && (o.zoomContainer.css("height", "auto"), o.zoomContainer.css("width", o.options.constrainSize), o.options.imageCrossfade ? (o.zoomWrap.css("height", "auto"), o.zoomWrap.css("width", o.options.constrainSize), o.constheight = o.zoomWrap.height()) : (o.$elem.css("height", "auto"), o.$elem.css("width", o.options.constrainSize), o.constheight = o.$elem.height()), "inner" == o.options.zoomType && (o.zoomWrap.parent().css("height", o.constheight), o.zoomWrap.parent().css("width", o.options.constrainSize), o.zoomWindow.css("height", o.constheight), o.zoomWindow.css("width", o.options.constrainSize)), o.options.tint && (o.tintContainer.css("height", o.constheight), o.tintContainer.css("width", o.options.constrainSize), o.zoomTint.css("height", o.constheight), o.zoomTint.css("width", o.options.constrainSize), o.zoomTintImage.css("height", o.constheight), o.zoomTintImage.css("width", o.options.constrainSize))))
            },
            doneCallback: function() {
                var t = this;
                t.options.loadingIcon && t.spinner.hide(), t.nzOffset = t.$elem.offset(), t.nzWidth = t.$elem.width(), t.nzHeight = t.$elem.height(), t.currentZoomLevel = t.options.zoomLevel, t.widthRatio = t.largeWidth / t.nzWidth, t.heightRatio = t.largeHeight / t.nzHeight, "window" == t.options.zoomType && (t.nzHeight < t.options.zoomWindowWidth / t.widthRatio ? lensHeight = t.nzHeight : lensHeight = String(t.options.zoomWindowHeight / t.heightRatio), t.options.zoomWindowWidth < t.options.zoomWindowWidth ? lensWidth = t.nzWidth : lensWidth = t.options.zoomWindowWidth / t.widthRatio, t.zoomLens && (t.zoomLens.css("width", lensWidth), t.zoomLens.css("height", lensHeight)))
            },
            getCurrentImage: function() {
                var t = this;
                return t.zoomImage
            },
            getGalleryList: function() {
                var e = this;
                return e.gallerylist = [], e.options.gallery ? t("#" + e.options.gallery + " a").each(function() {
                    var i = "";
                    t(this).data("zoom-image") ? i = t(this).data("zoom-image") : t(this).data("image") && (i = t(this).data("image")), i == e.zoomImage ? e.gallerylist.unshift({
                        href: "" + i,
                        title: t(this).find("img").attr("title")
                    }) : e.gallerylist.push({
                        href: "" + i,
                        title: t(this).find("img").attr("title")
                    })
                }) : e.gallerylist.push({
                    href: "" + e.zoomImage,
                    title: t(this).find("img").attr("title")
                }), e.gallerylist
            },
            changeZoomLevel: function(t) {
                var e = this;
                e.scrollingLock = !0, e.newvalue = parseFloat(t).toFixed(2), newvalue = parseFloat(t).toFixed(2), maxheightnewvalue = e.largeHeight / (e.options.zoomWindowHeight / e.nzHeight * e.nzHeight), maxwidthtnewvalue = e.largeWidth / (e.options.zoomWindowWidth / e.nzWidth * e.nzWidth), "inner" != e.options.zoomType && (maxheightnewvalue <= newvalue ? (e.heightRatio = e.largeHeight / maxheightnewvalue / e.nzHeight, e.newvalueheight = maxheightnewvalue, e.fullheight = !0) : (e.heightRatio = e.largeHeight / newvalue / e.nzHeight, e.newvalueheight = newvalue, e.fullheight = !1), maxwidthtnewvalue <= newvalue ? (e.widthRatio = e.largeWidth / maxwidthtnewvalue / e.nzWidth, e.newvaluewidth = maxwidthtnewvalue, e.fullwidth = !0) : (e.widthRatio = e.largeWidth / newvalue / e.nzWidth, e.newvaluewidth = newvalue, e.fullwidth = !1), "lens" == e.options.zoomType && (maxheightnewvalue <= newvalue ? (e.fullwidth = !0, e.newvaluewidth = maxheightnewvalue) : (e.widthRatio = e.largeWidth / newvalue / e.nzWidth, e.newvaluewidth = newvalue, e.fullwidth = !1))), "inner" == e.options.zoomType && (maxheightnewvalue = parseFloat(e.largeHeight / e.nzHeight).toFixed(2), maxwidthtnewvalue = parseFloat(e.largeWidth / e.nzWidth).toFixed(2), newvalue > maxheightnewvalue && (newvalue = maxheightnewvalue), newvalue > maxwidthtnewvalue && (newvalue = maxwidthtnewvalue), maxheightnewvalue <= newvalue ? (e.heightRatio = e.largeHeight / newvalue / e.nzHeight, newvalue > maxheightnewvalue ? e.newvalueheight = maxheightnewvalue : e.newvalueheight = newvalue, e.fullheight = !0) : (e.heightRatio = e.largeHeight / newvalue / e.nzHeight, newvalue > maxheightnewvalue ? e.newvalueheight = maxheightnewvalue : e.newvalueheight = newvalue, e.fullheight = !1), maxwidthtnewvalue <= newvalue ? (e.widthRatio = e.largeWidth / newvalue / e.nzWidth, newvalue > maxwidthtnewvalue ? e.newvaluewidth = maxwidthtnewvalue : e.newvaluewidth = newvalue, e.fullwidth = !0) : (e.widthRatio = e.largeWidth / newvalue / e.nzWidth, e.newvaluewidth = newvalue, e.fullwidth = !1)), scrcontinue = !1, "inner" == e.options.zoomType && (e.nzWidth >= e.nzHeight && (e.newvaluewidth <= maxwidthtnewvalue ? scrcontinue = !0 : (scrcontinue = !1, e.fullheight = !0, e.fullwidth = !0)), e.nzHeight > e.nzWidth && (e.newvaluewidth <= maxwidthtnewvalue ? scrcontinue = !0 : (scrcontinue = !1, e.fullheight = !0, e.fullwidth = !0))), "inner" != e.options.zoomType && (scrcontinue = !0), scrcontinue && (e.zoomLock = 0, e.changeZoom = !0, e.options.zoomWindowHeight / e.heightRatio <= e.nzHeight && (e.currentZoomLevel = e.newvalueheight, "lens" != e.options.zoomType && "inner" != e.options.zoomType && (e.changeBgSize = !0, e.zoomLens.css({
                    height: String(e.options.zoomWindowHeight / e.heightRatio) + "px"
                })), "lens" != e.options.zoomType && "inner" != e.options.zoomType || (e.changeBgSize = !0)), e.options.zoomWindowWidth / e.widthRatio <= e.nzWidth && ("inner" != e.options.zoomType && e.newvaluewidth > e.newvalueheight && (e.currentZoomLevel = e.newvaluewidth), "lens" != e.options.zoomType && "inner" != e.options.zoomType && (e.changeBgSize = !0, e.zoomLens.css({
                    width: String(e.options.zoomWindowWidth / e.widthRatio) + "px"
                })), "lens" != e.options.zoomType && "inner" != e.options.zoomType || (e.changeBgSize = !0)), "inner" == e.options.zoomType && (e.changeBgSize = !0, e.nzWidth > e.nzHeight && (e.currentZoomLevel = e.newvaluewidth), e.nzHeight > e.nzWidth && (e.currentZoomLevel = e.newvaluewidth))), e.setPosition(e.currentLoc)
            },
            closeAll: function() {
                self.zoomWindow && self.zoomWindow.hide(), self.zoomLens && self.zoomLens.hide(), self.zoomTint && self.zoomTint.hide()
            },
            changeState: function(t) {
                var e = this;
                "enable" == t && (e.options.zoomEnabled = !0), "disable" == t && (e.options.zoomEnabled = !1)
            }
        };
        t.fn.elevateZoom = function(e) {
            return this.each(function() {
                var i = Object.create(n);
                i.init(e, this), t.data(this, "elevateZoom", i)
            })
        }, t.fn.elevateZoom.options = {
            zoomActivation: "hover",
            zoomEnabled: !0,
            preloading: 1,
            zoomLevel: 1,
            scrollZoom: !1,
            scrollZoomIncrement: .1,
            minZoomLevel: !1,
            maxZoomLevel: !1,
            easing: !1,
            easingAmount: 12,
            lensSize: 200,
            zoomWindowWidth: 400,
            zoomWindowHeight: 400,
            zoomWindowOffetx: 0,
            zoomWindowOffety: 0,
            zoomWindowPosition: 1,
            zoomWindowBgColour: "#fff",
            lensFadeIn: !1,
            lensFadeOut: !1,
            debug: !1,
            zoomWindowFadeIn: !1,
            zoomWindowFadeOut: !1,
            zoomWindowAlwaysShow: !1,
            zoomTintFadeIn: !1,
            zoomTintFadeOut: !1,
            borderSize: 4,
            showLens: !0,
            borderColour: "#888",
            lensBorderSize: 1,
            lensBorderColour: "#000",
            lensShape: "square",
            zoomType: "window",
            containLensZoom: !1,
            lensColour: "white",
            lensOpacity: .4,
            lenszoom: !1,
            tint: !1,
            tintColour: "#333",
            tintOpacity: .4,
            gallery: !1,
            galleryActiveClass: "zoomGalleryActive",
            imageCrossfade: !1,
            constrainType: !1,
            constrainSize: !1,
            loadingIcon: !1,
            cursor: "default",
            responsive: !0,
            onComplete: t.noop,
            onDestroy: function() {},
            onZoomedImageLoaded: function() {},
            onImageSwap: t.noop,
            onImageSwapComplete: t.noop
        }
    }(jQuery, window, document);
var nomeDoProduto = "";
! function(t, e, i, o) {
    var n = t(e),
        s = t(i);
    s.ajaxStop(function() {
        imagePrincipalVitrine(), tagDestaque(), vitrneMostraEsconde(), arrumaTextoDescontoPorcentagem(), setTimeout(function() {
            mostratextoNone()
        }, 1e3), t(".helperComplement").remove()
    }), s.ready(function() {
        Menu(), blank(), capitalizeMarca(), t("body").hasClass("produto") && (montaSeletorCombo(), imagemPrincpalProduto(), t("body.produto .sku-selector-container ul .select.skuList").length > 0 && qtd(), videos(), lavagem(), escolhaLabel(), sliderProductImages(), marca(), description()), imagePrincipalVitrine(), clickboxMostraEsconde(), tagDestaque();
        var o = t(e).width();
        menuSite(o), mosaico(), boxCategorias(), t(".catalogo .sub:first-of-type .resultado-busca-filtro .orderBy select").each(function() {
            t(this).selectBoxIt().parent().appendTo(".section-products-tertiary .section-head").show()
        }), t("body").hasClass("marca") && titlePagina(), t("body").hasClass("home") && (t(".intro-image").each(function() {
            t(this).find(".box-banner").length > 1 && t(this).bxSlider({
                adaptiveHeight: !0,
                controls: !1,
                auto: !0,
                speed: 1e3
            })
        }), t(".section.section-slider .section-body .slider-clip .prateleira ul").bxSlider({
            minSlides: 1,
            maxSlides: 4,
            moveSlides: 4,
            slideWidth: 230,
            pager: 0
        }), t(".slider-logos .slides").bxSlider({
            slideWidth: 110,
            minSlides: 1,
            maxSlides: 9,
            pager: 0,
            auto: !0,
            speed: 500
        })), t(".section-foot .fullsize-image .box-banner, .content .fullsize-image .box-banner").each(function() {
            t(".section-intro").show()
        }), t.fn.doPlaceholders = function() {
            if (t.support.placeholder) return this;
            var e = this.filter(function() {
                return !t(this).data("didPlaceholders")
            });
            return e.on("focus blur", function(t) {
                var e = this.getAttribute("placeholder");
                "focus" === t.type && e === this.value ? this.value = "" : "blur" === t.type && "" === this.value && (this.value = e)
            }), e.each(function() {
                "" === this.value && (this.value = this.getAttribute("placeholder"))
            }), e.data("didPlaceholders", !0), e
        }, t.support.placeholder = function() {
            return "placeholder" in i.createElement("input")
        }(), t.support.placeholder || t("input[placeholder], textarea[placeholder]").doPlaceholders(), t(".helperComplement").remove(), t(".section-crochet .section-body .section-content p").each(function() {
            t(this).text().length > 0 && t(this).parents(".section-crochet").show()
        }), t(".section-products-quaternary .section-body .products").each(function() {
            t(this).text().length > 0 && t(this).parents(".section-products-quaternary").show()
        }), t(".widget-product .widget-body").each(function() {
            t(this).text().length > 0 && t(this).parents(".widget-product").show()
        }), t(".section-products-secondary .section-body").each(function() {
            t(this).text().length > 0 && t(this).parents(".section-products-secondary").show()
        }), t(".section-slider .section-body").each(function() {
            t(this).text().length > 0 && t(this).parents(".section-slider").show()
        }), t(".featured-item img").each(function() {
            t(this).length > 0 && t(this).parents(".section-featured").css({
                "margin-bottom": "29px"
            })
        }), t(".widget-stitch h2.titulo-sessao").each(function() {
            var e = "";
            e = t(this).text().toLowerCase(), e = e.replace("/./g", "").replace(/\s/g, "_").replace(new RegExp("[ÃÆÃÂÃÆÃ¢âÂ¬ÃÆÃ¢â¬Å¡ÃÆÃâ]", "gi"), "a").replace(new RegExp("[ÃÆÃ¢â¬Â°ÃÆÃâ ÃÆÃ ]", "gi"), "e").replace(new RegExp("[ÃÆÃÂÃÆÃâÃÆÃÂ½]", "gi"), "i").replace(new RegExp("[ÃÆÃ¢â¬ÅÃÆÃ¢â¬â¢ÃÆÃ¢â¬ÂÃÆÃ¢â¬Â¢]", "gi"), "o").replace(new RegExp("[ÃÆÃÂ¡ÃÆÃ¢âÂ¢ÃÆÃ¢â¬Âº]", "gi"), "u").replace(new RegExp("[ÃÆÃ¢â¬Â¡ÃÆÃÂ§]", "gi"), "c").replace("&", "_").replace("///", "-"), "celulares" != e && "natal" != e || (t(this).parents("li").addClass(e), t(".widget .widget-head span").html('<i class="ico-christmas"></i>')), "croche_e_trico" == e && (t(this).parents("li").addClass(e), t(".widget .widget-head span").html('<i class="ico-stitch"></i>')), "patch_e_costura" == e && (t(this).parents("li").addClass(e), t(".widget .widget-head span").html('<i class="ico-patch"></i>')), "pintura" == e && (t(this).parents("li").addClass(e), t(".widget .widget-head span").html('<i class="ico-paint"></i>')), "bordado" == e && (t(this).parents("li").addClass(e), t(".widget .widget-head span").html('<i class="ico-embroidery"></i>')), "scrap" == e && (t(this).parents("li").addClass(e), t(".widget .widget-head span").html('<i class="ico-scrap"></i>')), "biscuit" == e && (t(this).parents("li").addClass(e), t(".widget .widget-head span").html('<i class="ico-biscuit"></i>')), "meia_de_seda" == e && (t(this).parents("li").addClass(e), t(".widget .widget-head span").html('<i class="ico-socks"></i>')), "eva" == e && (t(this).parents("li").addClass(e), t(".widget .widget-head span").html('<i class="ico-scissors"></i>')), "revistas" == e && (t(this).parents("li").addClass(e), t(".widget .widget-head span").html('<i class="ico-revistas"></i>'))
        }), t("body.orders .shell").find("link").attr("href", "/"), t("body.institucional .section-products-tertiary .section-head h1").each(function() {
            var e = t(this).text(),
                i = location.href;
            t(".breadcrumbs .breadJs").html('<div class="bread-crumb"><ul><li class="last"><strong><a title="' + e + '" href="' + i + '">' + e + "</a></strong></li></ul></div>")
        }), t(".section-products.section-products-secondary .section-body, .section-equals .section-body").each(function() {
            var e = t(this).text().length;
            e > 0 && t(this).parent().show()
        }), t("body").hasClass("todas-as-marcas") && todasasMarca()
    }), n.load(function() {
        t("body.login").on("click", "button.close.vtexIdUI-close.ng-hide", function() {
            e.history.go(-1)
        }), setTimeout(function() {
            t("body.produto #show .slider-single-product ul li img").elevateZoom({
                zoomType: "inner",
                cursor: "crosshair"
            })
        }, 1e3)
    })
}(jQuery, window, document), $(document).ready(function() {});