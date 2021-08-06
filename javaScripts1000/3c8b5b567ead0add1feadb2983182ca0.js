(function() {
	"use strict";
	
	var requireModules = [
		'jquery',
		'util/remspect',
		'lib/toastr',
		'logging/listrak',
		'lib/jquery/bootstrap',
		'lib/jquery/cookie',
		'bootstrapJs/bootstrap-tabcollapse',
		"redesign/typeahead.controller",
		"lib/jquery-unveil/study.unveil"
	];
	
	var shouldGoogleTranslate = document.querySelector("#shouldGoogleTranslate");
	if (shouldGoogleTranslate) {
		requireModules.push('lib/google/translate');
	}
	
	if (document.querySelector("#useHomeschoolFreshchatWidget")) {
		requireModules.push('homeschool/homeschool-advisor');
	}
	else if (document.querySelector("#useGenericFreshchatWidget")) {
		requireModules.push('redesign/generic-advisor');
	}
	
	require(requireModules, init);
	
	window.googleTranslateElementInit = function(){
		new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false}, 'google_translate_element');
	};
	
	function init($, remspect, toastr, listrak) {
		"use strict";
		
		setUpCourseList();
		setUpResourceList();
		
		new listrak();
		
		$(document).ready(function() {
			
			requestEnrollInfo();
			showStudyBanner();
			navSearch();
			collapseMobileNav();
			googleTranslateListeners();
			
			if (remspect.isControl('requireResearch')) {
				submitMiniForms();
			}
			
			$('.ios-scrollable').on('touchstart', function(e) {});
			navOverride();
			
			triggerTooltips();
			
			initSeeMoreSeeLessToggle();
			
			//prevent default when flag exists
			$('[data-preventDefault="true"]').on('click', function(e) {e.preventDefault();});
			
			// initialize tabs to accordion plugin bootstrap-tabcollapse.js
			$('.vertSubTabs').tabCollapse({
				tabsClass: 'visible',
				accordionClass: ''
			});
			
			dropdownAccordion();
			initPlaceholderSwap();
			hideStudyTrainerCtas();
			
			$('[data-toggle="tooltip"]').tooltip();
			$('[data-toggle="popover"]').popover();
			
			$("[study-nav-popout], .course-popout").each(function(index, dom) {
				var element = $(dom);
				var parent = element.closest(".popoutContainer");
				var popoutId = element.attr("study-nav-popout") || element.attr("id");
				element.on("mouseover", function() {
					parent.addClass("show-" + popoutId);
				});
				element.on("mouseout", function() {
					parent.removeClass("show-" + popoutId);
				});
			});
			
		});
		
		function googleTranslateListeners() {
			$("[data-language-list]").on("click", "a", function() {
				var lang = $(this).attr("data-googtrans-cookie");
				
				$.cookie("googtrans", lang, {path: "/", domain: ".study.com"});
				$.cookie("googtrans", lang, {path: "/"});
				location.reload();
			});
		}
		
		function validateEmail(email) {
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		}
		
		/**
		 * @constructor
		 */
		function requestEnrollInfo() {
			setRequestEnrollInfo($("#enroll-info-form"));
			setRequestEnrollInfo($("#enroll-info-form-modal"));
		}
		
		function setRequestEnrollInfo(requestForm) {
			var formSubmit = requestForm.find("[name='enrollRequestSubmit']");
			formSubmit.on('click', function(e) {
				e.preventDefault();
				
				var firstName = requestForm.find("[name='enrollFirstName']");
				var lastName = requestForm.find("[name='enrollLastName']");
				var email = requestForm.find("[name='enrollEmail']");
				var requestType = requestForm.find("[name='enrollRequestType']");
				
				if (firstName.val().length < 1) {
					firstName.attr("placeholder", "required");
					firstName.addClass("required");
					firstName.focus();
					firstName.on('blur', function(e) {
						firstName.removeClass("required");
					});
					return;
				}
				if (lastName.val().length < 1) {
					lastName.attr("placeholder", "required");
					lastName.addClass("required");
					lastName.focus();
					lastName.on('blur', function(e) {
						lastName.removeClass("required");
					});
					return;
				}
				if (email.val().length < 1) {
					email.attr("placeholder", "required");
					email.addClass("required");
					email.focus();
					email.on('blur', function(e) {
						email.removeClass("required");
					});
					
					return;
				}
				if (!validateEmail(email.val())) {
					email.addClass("required");
					email.focus();
					email.on('blur', function(e) {
						email.removeClass("required");
					});
					return;
				}
				if (requestType[0].selectedIndex == 0) {
					requestType.addClass("required");
					requestType.focus();
					requestType.on('blur', function(e) {
						requestType.removeClass("required");
					});
					return;
				}
				formSubmit.prop('disabled', true);
				
				$.ajax({
					type: "POST",
					url: '/academy/enroll/support/request-info.json',
					data: {
						firstName: firstName.val(),
						lastName: lastName.val(),
						email: email.val(),
						requestType: requestType.val(),
						message: requestForm.find("[name='enrollMessage']").val()
					}
				}).done(function(data) {
					if (data.error) {
						toastr.options = {
							"closeButton": false,
							"positionClass": "toast-center"
						};
						toastr["error"](data.error);
					}
					else {
						requestForm.find(".enroll-form-container-left").hide();
						requestForm.find(".enroll-thanks-message").fadeIn();
					}
				}).fail(function() {
					toastr.options = {
						"closeButton": false,
						"positionClass": "toast-center"
					};
					toastr["error"]("There was an error processing your request, please try again in a few minutes.");
				});
			});
		}
		
		function showStudyBanner() {
			//set cookie when visiting site
			//expire with session
			//show banner only if cookie hasnt been set
			$.cookie('hasSeen', 'true');
		}
		
		function initSeeMoreSeeLessToggle() {
			/*shows more [anything] if clicked*/
			$('.seeMore').click(function() {
				$(this).parent().children('.displayNone').toggle();
				
				if ($(window).width() < 481) {
					$(this).parent().children('.displayDesktop').toggle();
				}
				else {
					$(this).parent().children('.displayDesktop').show();
				}
				
				var showMoreToggleText = $(this).html();
				
				if (showMoreToggleText.match(/more/i) !== null) {
					$(this).html($(this).html().replace('more', 'less'));
				}
				else {
					$(this).html($(this).html().replace('less', 'more'));
				}
			});
		}
		
		//this is the form used on the research side
		function submitMiniForms() {
			// Needs to be a delegate in order to support ajax search results!
			$('body').on('change', '.miniformSelect', function() {
				$(this).closest('.miniform').submit();
			});
		}
		
		//bootstrap tooltips have to be initialized with js
		function triggerTooltips() {
			$('#fullSchoolDisclaimer, #sidebarDisclaimer').tooltip();
			
			$("[data-tooltip]").each(function() {
				var elem = $(this);
				var triggers = elem.data('tooltip').split(' ');
				var showTooltip = function() {
					elem.tooltip('show');
				};
				
				for (var i = 0; i < triggers.length; i++) {
					elem.on(triggers[i], showTooltip);
				}
			});
			
			$('body').on('click', function(e) {
				$('[data-toggle="tooltip"]').each(function() {
					//the 'is' for buttons that trigger popups
					//the 'has' for icons within a button that triggers a popup
					if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.tooltip').has(e.target).length === 0) {
						$(this).tooltip('hide');
					}
				});
			});
		}
		
		function navOverride() {
			//hack: this fixes the nav on the homepage on ios??????? dont delete
			$('.newNavContainer .collapseHeader').on('click touch', function() {});
			
			$('.mNav').on('click', function() {
				$(this).parent().toggleClass('open');
			});
			
			$(window).on('resize', function() {
				if ($(window).width() > 768) {
					$('.newNavContainer .dropdown').removeClass('open');
				}
			});
		}
		
		function dropdownAccordion() {
			// Prevent dropdown to be closed when we click on an accordion link
			$('.dropdown-accordion').on('click', 'a[data-toggle="collapse"]', function(event) {
				event.preventDefault();
				event.stopPropagation();
				$($(this).data('parent')).find('.panel-collapse.in').collapse('hide');
				$($(this).attr('href')).collapse('show');
			});
		}
		
		function initPlaceholderSwap() {
			var placeholders = $('[placeholder]');
			// Set up data attribute
			placeholders.each(function() {
				var $elem = $(this);
				$elem.attr('data-placeholder', $elem.attr('placeholder'));
			});
			
			// Just swapping didn't work if the javascript loaded after user focuses in on the search
			// Clear placeholder on focusin
			placeholders.on('focusin', function() {
				$(this).attr('placeholder', '');
			});
			
			// Replace placeholder on focusout
			placeholders.on('focusout', function() {
				$(this).attr('placeholder', $(this).attr('data-placeholder'));
			});
		}
		
		function isLocalStorageEnabled() {
			var testString = 'testString';
			try {
				window.localStorage.setItem(testString, testString);
				window.localStorage.removeItem(testString);
				return true;
			}
			catch (e) {
				return false;
			}
		}
		
		function hideStudyTrainerCtas() {
			if (isLocalStorageEnabled() && window.localStorage.getItem('hasStudyTrainer') === 'false') {
				$('[data-study-trainer-cta]').each(function() {
					$(this).removeClass('hidden');
					var replacementSelector = $(this).data('study-trainer-cta');
					
					if (replacementSelector) {
						$(replacementSelector).addClass('hidden');
					}
				});
			}
		}
		
		function collapseMobileNav() {
			var navBar = $('.study-nav');
			navBar.on('click', '.collapse .study-nav__member-nav a', function() {
				$('#navsContainer').collapse('hide');
			});
		}
		
		function navSearch() {
			$(document).ready(function() {
				$(".searchTrigger").click(function() {
					var mobileSearchBar = $(".xs-search");
					if (mobileSearchBar.hasClass("open")) {
						mobileSearchBar.removeClass("open");
					}
					else {
						mobileSearchBar.addClass("open");
						// focus hides placeholder - maybe not desirable
						//mobileSearchBar.find("input").focus();
					}
				});
			});
		}
		
		function setUpCourseList() {
			$(".study-nav__courses-submenu__course-plan-template-item").on("mouseenter onmouseover", function(event) {
				var link = event.delegateTarget;
				var templateId = link.getAttribute("data-course-plan-template-id");
				
				$("#nav-submenu-resource").removeClass("selected");
				$(".study-nav__courses-submenu .selected").removeClass("selected");
				
				if (templateId) {
					$("#nav-submenu-courses-" + templateId).addClass("selected");
				}
			});
		}
		
		function setUpResourceList() {
			$(".study-nav__resources-submenu__resource-template-item").on("mouseenter onmouseover", function(event) {
				$(".study-nav__resources-submenu .selected").removeClass("selected");
				$("#nav-submenu-resource").addClass("selected");
			});
		}
		
		function studyNavSearch() {
			var navBar = $('.study-nav');
			var navSearchForm = navBar.find('form');
			var navSearchFormInput = navSearchForm.find('input');
			var expandedClass = 'search-expanded';
			
			$(document).ready(function() {
				if (navSearchFormInput.val()) {
					navBar.addClass(expandedClass);
				}
			});
			
			navSearchForm.on('submit', function(event) {
				var searchQuery = navSearchFormInput.val();
				
				if (!searchQuery || (window.matchMedia("max-width: 768px").matches && !navBar.hasClass(expandedClass))) {
					event.preventDefault();
				}
				else {
					navBar.addClass(expandedClass);
				}
			});
			
			navSearchForm.on('click touch', 'button', function() {
				var buttonType = $(this).data('nav-search-toggle');
				
				if (buttonType === 'close') {
					navBar.removeClass(expandedClass);
					navSearchFormInput.val('');
				}
				else if (buttonType === 'expand') {
					navBar.addClass(expandedClass);
				}
				else {
					navSearchForm.submit();
				}
			});
			
			navSearchFormInput.on('focus', function() {
				if (!navBar.hasClass(expandedClass)) {
					navBar.addClass(expandedClass);
				}
			});
			
			navSearchFormInput.on('blur', function() {
				if (!navSearchFormInput.val()) {
					navBar.removeClass(expandedClass);
				}
			});
			
			navSearchForm.on('touchstart', 'button', function() {
				if ($(this).data('nav-search-toggle') === 'expand') {
					navBar.addClass(expandedClass);
				}
			});
		}
	}
	
})();

