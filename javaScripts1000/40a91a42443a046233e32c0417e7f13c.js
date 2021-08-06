$(document).ready(function()
{
	//added for search
	initSearch();
	// Add section to insert border for header when scrolling down
	var offset2 = 20;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset2) {
			$('header').addClass('past-main');
        } else {
            $('header').removeClass('past-main');
        }
    });
	// END HEADER BORDER SECTION
	// This section shows and hides the tabs for the profile
    $('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');

		// Show/Hide Tabs
		jQuery('.tabs ' + currentAttrValue).fadeIn(400).siblings().hide();
 
        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });
	// END PROFILE TABS
	// FOR CATEGORY PAGE
    $('.jsSorting a').on('click', function(e)  {
// check to see which is active..pics or vids...then assign tab1 for vid and tab2 for pics
 		if($('#videobutton').hasClass('active')) {
			currentAttrValue = '#tab1';
		}
		else {
			currentAttrValue = '#tab2';
		}
		// Show/Hide Tabs
		jQuery('.tabs ' + currentAttrValue).fadeIn(400).siblings().hide();
 
        // Change/remove current tab to active
        jQuery('.tabs ' + currentAttrValue).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });
	// END CATEGORY PAGE
	$('a.blank').attr('target', '_blank');

	$('.jsSearchType').on('click', 'a', function()
	{
		$('input#search-type').prop('value', $(this).attr('data-val'));
		$('.jsSearchTypeText').html($(this).text())
		$('.jsSearchType ul').css('display','none');
		setTimeout(function()
		{
			$('.jsSearchType ul').css('display', '');
		}, 200);
		
		return false;
	});

	$('.jsSorting').on('click', 'a', function()
	{
		var url=$(this).attr('data-val');
		if(typeof url === 'undefined'){
		   return false;
		 };
		window.location.href=url;
		return false;
	});

	// disabled link
	$('body').on('click', '.disabled', function()
	{
		return false;
	});

	// subnavigation
	$('body').on('click', '.roll', function()
	{
		if($(this).hasClass('active'))
		{
			$(this).removeClass('active');
			$(this).closest('li').children('ul').slideUp();
		}
		else
		{
			$(this).addClass('active');
			$(this).closest('li').children('ul').slideDown();
		}
		
		return false;
	});

// For the show more show all media comments...
	$('#comments div.comment:lt(10)').show();
	
	if($('#comments').find(".comment:hidden").length == 0){ // check if any hidden divs
		$('#showmore').hide();
		$('#showall').hide();
	}

	$('.hover')
	.mouseover(function(){
		$(this).closest('li').children('ul').stop(true,true).slideDown(1000);
	})
	.mouseleave(function() {
		$(this).closest('li').children('ul').stop(true,true).slideUp(1000);
	});
	$("#related_galleries_btn").click(function() {
   		scrollToAnchor('related_jump');
	});

	$("#related_videos_btn").click(function() {
   		scrollToAnchor('related_jump');
	});

	$('.jsSorting').on('click', 'a', function()
	{
		var url=$(this).attr('data-val');
		if(typeof url === 'undefined'){
		   return false;
		 };
		window.location.href=url;
		return false;
	});
	//input for jumping to a new page...check to see if int and make sure it isn't > max page...
	var pagenumberinput = document.getElementById("pagenumberinput");
	if (pagenumberinput) {
	pagenumberinput.addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
        	event.preventDefault();
			var str = pagenumberinput.value;
    		var res = str.replace(/\D/g, "");
			res = parseInt(res);
			if(res==''){
				return false;
			}
			var maxvalue = parseInt(document.getElementById("maxpage").innerHTML);
			if(res>maxvalue){
				res=maxvalue;
			}
			if (document.getElementById("nextpage").className == "next disabled"){
				var str2 = document.getElementById("lastpage").href;
			}
			else{
				var str2 = document.getElementById("nextpage").href;
			}
			var res2 = str2.replace(/\D/g, "");
			var newhref;
			if (res == '1'){
				res2 = ('-' + res2);
				newhref = str2.replace(res2,'');
			}
			else{
				newhref = str2.replace(res2,res);
			}
			window.location.href = newhref;
    		} 
		});
	};
});
//testingstuff
function tagoverflow() {
	//get width of the tag container
	tagcontainerwidth = $("#taglink").width();
	runningtotal = 0;
	linecounter = 0;
	document.getElementById('taglink').style.maxHeight = "50px";
	document.getElementById('hidesometags').style.display = "none";

	var elements = document.querySelectorAll("#taglink > a");
	for (var i= 0; i < elements.length; i++) {
		if (linecounter == 2) {
			elements[i].style.display = "none";
		} else {
			testingwidth = elements[i].offsetWidth;
			runningtotal = runningtotal + testingwidth;
			if (runningtotal > tagcontainerwidth) {
				linecounter = linecounter + 1;
				// if linecounter = 2 then we are going over
				if (linecounter == 2){
					elements[i-1].style.display = "none";
					elements[i].style.display = "none";
					document.getElementById('showalltags').style.display = "inline-block";
				} else {
					runningtotal = testingwidth + 3;
				}
			}
			//add pixels for space
			runningtotal = runningtotal + 3;
		}
	}
}
function show_all_tags() {
	var elements = document.querySelectorAll("#taglink > a");
	for (var i= 0; i < elements.length; i++) {
		elements[i].style.display = "inline-block";
	}
	document.getElementById('showalltags').style.display = "none";
	document.getElementById('taglink').style.maxHeight = "none";
	document.getElementById('hidesometags').style.display = "inline-block";
}

// added from main.js in mobile...
function initSearch() {
	//search handler
	$('.list-types a').on('click', function() {
		var $this = $(this);
		var value = $this.attr('data-val');
		$('.list-types a').removeClass('active');
		$this.addClass('active');
		$this.closest('.list-types').removeClass('shown');
		var $icon = $this.find('.icon-middle').html();
		$('.search-type .icon-type').html($icon);
		$('#search-type').val(value);
		$('#search-type2').val(value);
	});
}

function scrollToAnchor(aid){
    var h2Tag = $("h2[name='"+ aid +"']");
    $('html,body').animate({scrollTop: (h2Tag.offset().top) - 65},'slow');
}

// Show all and show more comments functions
function show_more(){
	$('#comments div.comment:hidden:lt(10)').fadeIn();
	if($('#comments').find(".comment:hidden").length == 0){ // check if any hidden divs
		$('#showmore').hide();
		$('#showall').hide();
	}
};
function show_all(){
	$('#comments div.comment').fadeIn();
	$('#showmore').hide();
	$('#showall').hide();
};

function iResize(){
	var iFrameID = document.getElementById('iframe');
	if(iFrameID) {
		setIframeHeight(iFrameID)
	}		
	$('#iframe').contents().find("head")
		.append($("<style type='text/css'>  body{background-image:none;}  </style>"));
	 iFrameID.style.visibility="visible"; 
};

function setIframeHeight(iframe) {
    if (iframe) {
        var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
        if (iframeWin.document.body) {
            iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
        }
    }
};

function all_related_videos(){
	document.getElementById('related_videos_btn').onclick();
};

function all_related_galleries(){
	document.getElementById('related_galleries_btn').onclick();
};

function srchFunction(site_url){
	var srchinput = []
	var url= site_url +'stp/all_tags.json';
	if (document.getElementById("search-type").value == 'gallery'){
		$.getJSON(url,function(data)
			{
				$.each(data.galleries, function(key, val)
					{
					var srchinputrow = {}
					srchinputrow.value = key.toLowerCase();;
					srchinputrow.label = key.toLowerCase();;
					srchinput.push(srchinputrow);
					});
			});
	} else if (document.getElementById("search-type").value == 'video'){
		$.getJSON(url,function(data)
			{
				$.each(data.videos, function(key, val)
					{
					var srchinputrow = {}
					srchinputrow.value = key.toLowerCase();;
					srchinputrow.label = key.toLowerCase();;
					srchinput.push(srchinputrow);
					});
			});
	} else {
		$( "#searchfield" ).autocomplete("destroy");
		return false;
	}
	
	$( "#searchfield" ).autocomplete({
		source: srchinput,
		minLength: 2,
		appendTo: "search",
		open: function(e,ui) {
            var
			acData = $(this).data('uiAutocomplete');
            acData
            .menu
            .element
            .find('li')
            .each(function() {
                    var me = $(this);
                    var keywords = acData.term.split(' ').join('|');
                    me.html(me.text().replace(new RegExp("(" + keywords + ")", "gi"), '<strong>$1</strong>'));
            });
        },
		select: function (event, ui) {
			var tagstring = ui.item.value;
			var tagwithplus = tagstring.split(' ').join('+');
			var lowertag = tagwithplus.toLowerCase();
			window.location.href = '/search/' + document.getElementById("search-type").value + '/' + lowertag;
			return false;
		}
	});
}
// two search boxes so we need two autocompletes
function srchFunction2(site_url){
	var srchinput = []
	var url= site_url +'stp/all_tags.json';
	if (document.getElementById("search-type").value == 'gallery'){
		$.getJSON(url,function(data)
			{
				$.each(data.galleries, function(key, val)
					{
					var srchinputrow = {}
					srchinputrow.value = key.toLowerCase();;
					srchinputrow.label = key.toLowerCase();;
					srchinput.push(srchinputrow);
					});
			});
	} else if (document.getElementById("search-type").value == 'video'){
		$.getJSON(url,function(data)
			{
				$.each(data.videos, function(key, val)
					{
					var srchinputrow = {}
					srchinputrow.value = key.toLowerCase();;
					srchinputrow.label = key.toLowerCase();;
					srchinput.push(srchinputrow);
					});
			});
	} else {
		$( "#searchfield2" ).autocomplete("destroy");
		return false;
	}
	
	$( "#searchfield2" ).autocomplete({
		source: srchinput,
		minLength: 2,
		appendTo: "search2",
		open: function(e,ui) {
            var
			acData = $(this).data('uiAutocomplete');
            acData
            .menu
            .element
            .find('li')
            .each(function() {
                    var me = $(this);
                    var keywords = acData.term.split(' ').join('|');
                    me.html(me.text().replace(new RegExp("(" + keywords + ")", "gi"), '<strong>$1</strong>'));
            });
        },
		select: function (event, ui) {
			var tagstring = ui.item.value;
			var tagwithplus = tagstring.split(' ').join('+');
			var lowertag = tagwithplus.toLowerCase();
			window.location.href = '/search/' + document.getElementById("search-type").value + '/' + lowertag;
			return false;
		}
	});
}

//  For this function the number returned is actually X-5 because the first 5 are shown on the lefthand side.  So when you return 11 it is actually going to show 6 (two ros of 3) or 13 is actually 8 (two rows of 4) etc...	
function related_video_calc(){
	var width =$(document).width();
	if (width < 1261) {
            return 12;
        }
	if (width < 1541) {
            return 17;
        }
	if (width < 1991) {
            return 20;
        }
	return 23;
}

function related_gallery_calc(){
	var width =$(document).width();
	if (width < 707) {
            return 12;
        }
	if (width < 939) {
            return 16;
        }
	if (width < 1191) {
            return 15;
        }
	if (width < 1261) {
            return 18;
        }
	if (width < 1381) {
            return 15;
        }
	if (width < 1613) {
            return 20;
        }
	if (width < 1681) {
            return 23;
        }
	if (width < 1733) {
            return 20;
        }
	if (width < 1965) {
            return 23;
        }
	if (width < 2197) {
            return 26;
        }
	return 29;
}

function pauseME(vid)
{ 
	document.getElementById(vid).pause();
}
function playME(vid)
{
	document.getElementById(vid).play();
}
function show_category()
{
	$('.categorytoggle').show();
	$('.tagtoggle').hide();
	$('#popularbutton').addClass('active').removeClass('inactive');
	$('#allbutton').addClass('inactive').removeClass('active');
	$('.ubox-ul').children().show();
	$('#videoSearchResults').hide();
	$('#gallerySearchResults').hide();
	$('.category-select').children().removeClass('active');
}
function show_tags()
{
	$('.categorytoggle').hide();
	$('.tagtoggle').show();
	$('#popularbutton').addClass('inactive').removeClass('active');
	$('#allbutton').addClass('active').removeClass('inactive');
	$('.ubox-ul').children().show();
	$('#videoSearchResults').hide();
	$('#gallerySearchResults').hide();
	$('.category-select').children().removeClass('active');
}
function show_pics(videoname)
{
	$('#videobutton').addClass('inactive').removeClass('active');
	$('#picbutton').addClass('active').removeClass('inactive');
	if($('#popularbutton').hasClass('active')) {
		for (let el of document.querySelectorAll('.outer-item')) el.style.display = 'none';
		for (let el of document.querySelectorAll('.outer-item-pics')) el.style.display = 'block';
	}
	for (let a of document.querySelectorAll('.catlinks')) {
		var str = a.href;
		var newstr = str.replace("/videos/", "/galleries/");
		a.setAttribute('href', newstr);
	}
	document.getElementsByClassName("catlinkname")[0].innerHTML = "PIC CATEGORIES";
}
function show_videos(videoname)
{
	$('#picbutton').addClass('inactive').removeClass('active');
	$('#videobutton').addClass('active').removeClass('inactive');
	if($('#popularbutton').hasClass('active')) {
		for (let el of document.querySelectorAll('.outer-item')) el.style.display = 'block';
		for (let el of document.querySelectorAll('.outer-item-pics')) el.style.display = 'none';
	}
	for (let a of document.querySelectorAll('.catlinks')) {
		var str = a.href;
		var newstr = str.replace("/galleries/","/videos/");
		a.setAttribute('href', newstr);
	}
	var videocategory = videoname + " CATEGORIES";
	document.getElementsByClassName("catlinkname")[0].innerHTML = videocategory;

}
// Show both movies and pics ... ?
function letter_select(ele,letter)
{
 	var name="#letter-" + letter;
 	var name2="#gallery-letter-" + letter;
	var make_active="video_" + letter;
	var make_active2="gallery_" + letter;
	$('.categorytoggle').hide();
	$('.tagtoggle').show();
	$('#popularbutton').addClass('inactive').removeClass('active');
	$('#allbutton').addClass('active').removeClass('inactive');
    $('.ubox-ul').children().hide();
    $(name).show();
    $(name2).show();
	$('.category-select').show();
	$('.category-select').children().removeClass('active');
	document.getElementById(make_active).className = "active";
	$('.categorytoggle').hide();
	$('.tagtoggle').show();
}
function letter_show_all()
{
	$('.ubox-ul').children().show();
	$('#videoSearchResults').hide();
	$('#gallerySearchResults').hide();
	$('.category-select').children().removeClass('active');
	document.getElementById('video_show_all').className = "active";
	document.getElementById('gallery_show_all').className = "active";
}
function gallery_letter_select(ele,letter)
{
 	var name="#letter-" + letter;
 	var name2="#gallery-letter-" + letter;
	var make_active="video_" + letter;
	var make_active2="gallery_" + letter;
    $('.ubox-ul').children().hide();
    $(name).show();
    $(name2).show();
	$('.category-select').show();
	$('.category-select').children().removeClass('active');
	document.getElementById(make_active).className = "active";
	document.getElementById(make_active2).className = "active";
}
function gallery_letter_show_all()
{
	$('.ubox-ul').children().show();
	$('#videoSearchResults').hide();
	$('#gallerySearchResults').hide();
	$('.category-select').children().removeClass('active');
	document.getElementById('video_show_all').className = "active";
	document.getElementById('gallery_show_all').className = "active";
}
function tagSearch()
{
    var input, filter, div, li, a, i, j, newli, newa, t, cleardiv, newspan;
    input = document.getElementById('myTagSearch');
	if (input.value.length < 2) {
		$('.ubox-ul').children().show();
		$('#videoSearchResults').hide();
		$('#gallerySearchResults').hide();
		return;
	}
	$('.categorytoggle').hide();
	$('.tagtoggle').show();
	$('#popularbutton').addClass('inactive').removeClass('active');
	$('#allbutton').addClass('active').removeClass('inactive');
    $('.ubox-ul').children().hide();
	$('#videoSearchResults').html('');
	$('#gallerySearchResults').html('');
	$('.category-select').children().removeClass('active');
	filter = input.value.toUpperCase();
	div = document.getElementsByClassName('category-section');
	for (j=0; j < div.length; j++) {
		li = div[j].getElementsByTagName("li");
		for (i = 0; i < li.length; i++) {
			a = li[i].getElementsByTagName("a")[0];
			if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
				newli = document.createElement('li');
				newli.setAttribute('class','category-item')
				if(a.href.indexOf('/tags/video/') > -1) {
					document.getElementById('videoSearchResults').appendChild(newli);
				}
				else if(a.href.indexOf('/videos/') > -1) {
					document.getElementById('videoSearchResults').appendChild(newli);
				}
				else {
					document.getElementById('gallerySearchResults').appendChild(newli);
				}
				newa = document.createElement('a');
				newli.appendChild(newa);
				newa.innerHTML=a.innerHTML;
				newa.href=a.href;
				newli.innerHTML=li[i].innerHTML;
			}
		}
	}
	if( $('#videoSearchResults').is(':empty') ) {
		newspan = document.createElement('span');
		document.getElementById('videoSearchResults').appendChild(newspan);
		newspan.innerHTML="No search results found.";
	}
	if( $('#gallerySearchResults').is(':empty') ) {
		newspan = document.createElement('span');
		document.getElementById('gallerySearchResults').appendChild(newspan);
		newspan.innerHTML="No search results found.";
	}
	$('#videoSearchResults').show();
	$('#gallerySearchResults').show();
}

//added from mobile others.js to allow filter to work
function doSearchFocus() {
	document.getElementById("SearchInput").focus();
}
function OnSubmitForm(addr){
	if(document.filterform.sort[0].checked == true)
	{
		document.filterform.action = addr + "-popular.html";
	}
	if(document.filterform.sort[1].checked == true)
	{
		document.filterform.action = addr + "-recent.html";
	}
	if(document.filterform.sort[2].checked == true)
	{
		document.filterform.action = addr + "-view.html";
	}
	if(document.filterform.sort[3].checked == true)
	{
		document.filterform.action = addr + "-rate.html";
	}
	if(document.filterform.sort[4].checked == true)
	{
		document.filterform.action = addr + "-length.html";
	}
	return true;
}

// attempting to re-enable the trailers after ajax load
function afterAjax() {
	var bname = false;
	if (bowser.name != undefined) {
		var bowser_name = bowser.name.toLowerCase();
		if (bowser_name == 'opera') {
			bname = true;
		}
		if (bowser_name == 'safari' && bowser.version == undefined) {
			bname = true;
		}
	}
	if (!bname && !navigator.userAgent.match(/UCBrowser/) && !navigator.userAgent.match(/SamsungBrowser/) && Modernizr.video && Modernizr.videoloop && Modernizr.videocrossorigin && Modernizr.videopreload) {
		$('img[data-preview]').videopreview();
	} else {
		$('img[data-preview]').attr('data-autoplaynotsupported', true).videopreview();
	}
	IMG_rotationEngineStartup(0.2, 0.5);

}