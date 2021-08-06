$(document).ready(function() {

$(".j-custom-select").select2({dropdownAutoWidth: true, minimumResultsForSearch: Infinity});

$('.settings-title').click(function () {
	if ($(this).parent().hasClass('settings-item-open')) {
		$(this).parent().removeClass('settings-item-open');
	} else {
		$(this).parent().addClass('settings-item-open');
	}	
})



$('.bottom-menu-title').click(function () {
	if ($(this).parent().hasClass('bottom-menu-item-open')) {
		$(this).parent().removeClass('bottom-menu-item-open');
	} else {
		$(this).parent().addClass('bottom-menu-item-open');
	}	
})





$(function() {
    $('input[title]').bind({
        focus: function() {
            if ($(this).attr('title') == $(this).attr('value')) {
				$(this).attr('value', '');			
            }
        },
        blur: function() {
            if ($(this).attr('value') == '') {
                $(this).attr('value', $(this).attr('title'));
            }
        }
    });
});


$('.j-close').click(function () {
	$popupStatus.removeClass('button-active');
	$popupStatus = '';
	$(this).parent().hide();
})
var $popupStatus = '';
$(".main-container").click(function (event) {
	$target = $(event.target);
	if (!event.target) {
		$target = event.srcElement
	}
    if($target.is(".button-ft")){
		if ($popupStatus) {
			$('#popup-full-text,#popup-abstract,#popup-journal-info').hide();
			$popupStatus.removeClass("button-active");
			$popupStatus = '';		
		}
		$target.addClass("button-active");
		$("#popup-ft-list").html($target.next().html())
		$popupStatus = $target;
		positionTop =  $target.offset().top;
		positionLeft =  $target.offset().left;
		$("#popup-full-text").css( {
			top:positionTop + 24,
			left:positionLeft
		});
		$("#popup-full-text").show()
    }
	else {
		 if($target.is(".button-abstract")){
			if ($popupStatus) {
				$('#popup-full-text,#popup-abstract,#popup-journal-info').hide();
				$popupStatus.removeClass("button-active");
				$popupStatus = '';				
			}
			$target.addClass("button-active");
			$("#popup-abstract-content").html($target.next().html())
			$popupStatus = $target;
			$("#popup-abstract").css("margin-top", -($("#popup-abstract").height() + 80)/2+"px");
			$("#popup-abstract").show()
		} else {
			if($target.is(".button-journal")){
				if ($popupStatus) {
					$('#popup-full-text,#popup-abstract,#popup-journal-info').hide();
					$popupStatus.removeClass("button-active");
					$popupStatus = '';				
				}
				$("#popup-journal-info-content").html($target.parent().next().html())
				$popupStatus = $target;
				positionTop =  $target.offset().top;
				positionLeft =  $target.offset().left;
				$("#popup-journal-info").css( {
					top:positionTop + 24,
					left:positionLeft
				});
				$("#popup-journal-info").show()
			} else {
				if ($popupStatus) {
					$('#popup-full-text,#popup-abstract,#popup-journal-info').hide();
					$popupStatus.removeClass("button-active");
					$popupStatus = '';
				}
			}
		}
	}
});

var $linkMenuStatus = '';
$(".main-container").click(function (event) {
	$target = $(event.target);
	if (!event.target) {
		$target = event.srcElement
	}
	if($target.is(".nav-link")){
 		if ($linkMenuStatus) {
			$linkMenuStatus.parent().removeClass("show-subnav");
			$linkMenuStatus = '';
		}
		else{
			if($target.parent().has('.subnav')){
				$target.parent().addClass('show-subnav');
				$linkMenuStatus = $target;
			}
		}
    }
	else {
		if(!$target.is(".subnav-link")){
			if ($linkMenuStatus) {
				$linkMenuStatus.parent().removeClass("show-subnav");
				$linkMenuStatus = '';
			}
		}
	}
});

var $linkStatus = '';
$(".main-container").click(function (event) {
	$target = $(event.target);
	if (!event.target) {
		$target = event.srcElement
	}
	if($target.is(".icon-dd-active-breadcrumb")){
		if ($linkStatus) {
			$linkStatus.parent().removeClass("show-subnav-breadcrumbs");
			$linkStatus = '';
		}
		else{
			$target.parent().toggleClass('show-subnav-breadcrumbs');
			$linkStatus = $target;
		}
	}
	else {
		if ($linkStatus) {
			$linkStatus.parent().removeClass("show-subnav-breadcrumbs");
				$linkStatus = '';
		}
	}
});

var $searchStatus = '';
$(".main-container").click(function (event) {
	$target = $(event.target);
	if (!event.target) {
		$target = event.srcElement
	}
	if($target.is(".icon-dd-active-block-search")){
		if ($searchStatus) {
			$searchStatus.parent().removeClass("show-subnav-block-search");
			$searchStatus = '';	
		}
		else{
			$target.parent().addClass("show-subnav-block-search");
			$searchStatus = $target;
		}
	}
	else{
		if ($searchStatus) {
			$searchStatus.parent().removeClass("show-subnav-block-search");
			$searchStatus = '';
		}
    }
});
$('.block-settings-link').click(function(){
	$('.block-settings-state1').toggle();
	$('.block-settings-state2').toggle();
});

$('.ico-close-alert').click(function(){
	$(this).parent().parent().hide();
});		




$('.icon-clear').click (function(){
	if($(this))
	$(this).parent().find("input[type='text']").attr("value", "");
	$(this).parent().find("input[type='text'][title]").attr("value", $(this).parent().find("input[type='text'][title]").attr("title"));
	saveForm($('.searchInputForm').attr("id"));
});

function criteria_last_child() {
//  IE8 no longer supported so commenting out as this causes a null reference in ie 
	/*if ($.browser.msie  && parseInt($.browser.version, 10) === 8) {
		$('.criteria-last-child').removeClass('criteria-last-child');
        $('.search-criteria-item:last-child').addClass('criteria-last-child');
    }*/
};
criteria_last_child();

//var criteriaList = $('.search-criteria-list');

$('.j-add-criteria').click (function(){
	//var itemRow = $('.template-criteria .search-criteria-item:first').clone(true);
	//itemRow.find("select").addClass('j-custom-select').select2({dropdownAutoWidth: true});
	//itemRow.appendTo(criteriaList);
	if ($('.search-criteria-action .g-hide')) $('.search-criteria-action .g-hide').removeClass('g-hide')
	criteria_last_child();
});

/*
$('.j-clear-criteria').click (function(){
	$('select.j-custom-select')[1].selectedIndex  = '0';
	$('.search-criteria-item input[type="text"]').each(function(){
        $(this).attr("value", $(this).attr("title"));
      });
});
*/


/* make the search type dropdown work. */
/*
var heading = $("h2.block-search-title");
var label;
var spans = $.grep(heading.find("span"), function(e){ return e.id === 'selectedLabel'; });
if (spans.length == 0) {
    label = heading.find("span").first();
} else {
	label = spans[0];
}
var selected = heading.find("li").first();

heading.find("li a").each(function()
{
    var link = $(this);
    
    link.click(function()
    {
        label.html(link.html());
        
        selected.removeClass("block-search-active-option");
        selected = link.parent();
        selected.addClass("block-search-active-option");
    });
});
*/

/* make the database dropdown work. */
var selectedDatabase = $(".breadCrumbs-active-option");
var databaseLabel = $("#databases").first();
$("#skip-navigation li i li a.database").each(function()
{
    var link = $(this);
    
    link.click(function()
    {
        var caption = link.html() + "&nbsp;";
        databaseLabel.html(caption);
        /* databaseLabel.attr("title", "Search: " + link.html()); */
        
        selectedDatabase.removeClass("breadCrumbs-active-option");
        selectedDatabase = link.parent();
        selectedDatabase.addClass("breadCrumbs-active-option");
    });
});
/* breadCrumbs-active-option */

});

