$("#ddlLanguage .dropdown-menu li button").on("click",function(){$(this).parents().find("[id=hdnHdrLang]").val($(this).data("value"));ChangeLanguageImpl($("#hdnHdrLang").val());return false});var global_action_bar=$(".global-action-bar1");$(".dropdown",global_action_bar).on("click",function(){var a=$(this);if(!a.hasClass("open")){a.find("i").removeClass("fa-angle-down");a.find("i").addClass("fa-angle-up")}else{a.find("i").removeClass("fa-angle-up");a.find("i").addClass("fa-angle-down")}});var ddlLang=$("#ddlLanguage");
ddlLang.on("mouseenter",function(){}).on("mouseleave",function(){closeDropdownOnFocusOut(ddlLang)});$("#ddlLanguage ul.dropdown-menu li").last().focusout(function(){closeDropdownOnFocusOut(ddlLang)});var ddlCurr=$("#SelectedCurrencyId");ddlCurr.on("mouseenter",function(){}).on("mouseleave",function(){closeDropdownOnFocusOut(ddlCurr)});$("#SelectedCurrencyId ul.dropdown-menu li").last().focusout(function(){closeDropdownOnFocusOut(ddlCurr)});function closeDropdownOnFocusOut(a){setTimeout(function(){a.removeClass("open");
a.find("i").removeClass("fa-angle-up");a.find("i").addClass("fa-angle-down");a.find("button").attr("aria-expanded","false")},200)}$(".aLang").append('<i class="fa fa-angle-down" aria-hidden="true"></i>');$(".lnkCurr").append('<i class="fa fa-angle-down" aria-hidden="true"></i>');$(window).on("load",function(){setTimeout(function(){$(".LPMcontainer").removeAttr("tabindex");$(".LPMcontainer").attr("tabindex","-1")},5000)});