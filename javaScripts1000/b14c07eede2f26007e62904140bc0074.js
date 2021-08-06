                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}









this.initHeader=function(isSolrEnabled){};

(function $vpfn_1mwlXP8iy_0WIfN5aNlATg13$1($){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
$(document).ready(function $vpfn_1mwlXP8iy_0WIfN5aNlATg14$22(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}


$.restoreHtmlCache();

var search;
var xsSearch;
var keepSuggestionsOpen=false;

var KEYCODE_UP=38;
var KEYCODE_DOWN=40;
var KEYCODE_ENTER=13;

var updateSuggestions=function $vpfn_igtCIBKyqAwwDOwrf4Kgqw27$32(searchObj,keywords,oSuggestions){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}


if(!searchObj||keywords!==searchObj.SearchBox.currentKeyword()){
return;
}

var suggestionList=$(".header-search-bar-suggestions");

suggestionList.html("");

if(oSuggestions.length===0){
_highlightedItem=null;
suggestionList.hide();
return;
}

$(oSuggestions).each(function $vpfn_1mwlXP8iy_0WIfN5aNlATg44$33(index,value){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
suggestionList.append("<li class='header-search-bar-suggestion'><a href='#here'>"+value+"</a></li>");
});

suggestionList.on('click','li',function $vpfn_1mwlXP8iy_0WIfN5aNlATg48$45(e){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
e.preventDefault();
e.stopPropagation();
$('.header-search-bar-input').val($(this).text());
suggestionList.html("");
searchObj.SearchBox.processSearch();
});

suggestionList.show();

};


var keyPressHandler=function $vpfn_LeoJpD6TQwPLwvqHVfnpUw61$30(e){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var $menuItems=$(".header-search-bar-suggestions li");
var $highlightedItem=$menuItems.filter('.highlighted');

if(e.which==KEYCODE_DOWN||e.which==KEYCODE_UP)
{
if(!$menuItems)
{
return;
}

e.preventDefault();
e.stopPropagation();

$highlightedItem=e.keyCode==KEYCODE_DOWN?$highlightedItem.next():$highlightedItem.prev();

if(!$highlightedItem.length)
{
$highlightedItem=e.keyCode==KEYCODE_DOWN?$menuItems.first():$menuItems.last();
}

$menuItems.removeClass('highlighted');
$highlightedItem.addClass('highlighted');
}
else if(e.which==KEYCODE_ENTER)
{
e.preventDefault();
e.stopPropagation();
if($highlightedItem.length)
{
$highlightedItem.click();
}
else
{
if($(this).parents('.js-xs-header-search-bar').length)
{
xsSearch.SearchBox.processSearch();
}
else
{
search.SearchBox.processSearch();
}
}
}
};

var hideSuggestions=function $vpfn_q3Pg0wuR3yTd6Nvco0IPkQ107$30(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(keepSuggestionsOpen===false)
{
setTimeout(
function $vpfn_1mwlXP8iy_0WIfN5aNlATg112$20(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var suggestionList=$(".header-search-bar-suggestions");
suggestionList.hide();
},100);
}
};

var showSuggestions=function $vpfn_SPdDWdNdPEBxObl$a11iXQ119$30(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

setTimeout(
function $vpfn_1mwlXP8iy_0WIfN5aNlATg122$16(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var suggestionList=$(".header-search-bar-suggestions");
if(suggestionList.html()){
suggestionList.show();
}
},100);
};

var focusOutOnSuggestions=function $vpfn_WCgNenv2eaeB5ZWRWfJvzg130$36(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
keepSuggestionsOpen=false;
hideSuggestions();
};

var wireAccountPaneAnalyticsTracking=function $vpfn_rAg5mEF$PKycRvJg0uM1oA135$47(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var $paneButton=$("[data-tooltip='#headerUserMenu']");

var qs='page_spot_id='+window._vp_page_spot_id;

$paneButton.on('richTooltip:open',function $vpfn_1mwlXP8iy_0WIfN5aNlATg141$47(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.spot.trackWithQueryString('HeaderAccountPane:Open',qs);
});

$paneButton.on('richTooltip:close',function $vpfn_1mwlXP8iy_0WIfN5aNlATg145$48(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.spot.trackWithQueryString('HeaderAccountPane:Close',qs);
});
};

search=new SiteSearch($('.js-header-search-bar .header-search-bar-input'),null,updateSuggestions,false);
xsSearch=new SiteSearch($('.js-xs-header-search-bar .header-search-bar-input'),null,updateSuggestions,false);


$('.js-search-bar-click').click(function $vpfn_1mwlXP8iy_0WIfN5aNlATg154$40(event){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var extraExtraSmall=window.matchMedia&&window.matchMedia('only screen and (max-width: 768px)');
if(extraExtraSmall&&extraExtraSmall.matches||$('.ui-mobile').length){
xsSearch.SearchBox.processSearch(event);
}
else{
search.SearchBox.processSearch(event);
}
});

$('.header-search-bar-input').on('keydown',keyPressHandler);
$('.header-link-search .header-search-bar-input').on('focusout',hideSuggestions);
$('.header-link-search .header-search-bar-input').on('focusin',showSuggestions);
$('.header-link-search .header-search-bar-suggestions').on('mousedown',function $vpfn_1mwlXP8iy_0WIfN5aNlATg167$80(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}keepSuggestionsOpen=true;});
$('.header-link-search .header-search-bar-suggestions').on('mouseup',function $vpfn_1mwlXP8iy_0WIfN5aNlATg168$78(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}keepSuggestionsOpen=false;});
$('.header-link-search .header-search-bar-suggestions').on('focusout',focusOutOnSuggestions);

var fitNavigation=_.throttle(function $vpfn_1mwlXP8iy_0WIfN5aNlATg171$39(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var $navBar=$(".nav-bar");

if(!$navBar.length)
{
return;
}
var $navBarClientRect=$navBar.clientRect();
var navBarWidth=$navBarClientRect.width;

var $navBarInner=$(".nav-bar-inner");
$navBarInner.css('text-align','left');
$navBarInner.css('display','block');
var $navBarInnerClientRect=$navBarInner.clientRect();

var $navBarChildren=$navBarInner.children();
var navBarChildrenWidth=0;


$navBarChildren.each(function $vpfn_1mwlXP8iy_0WIfN5aNlATg191$33(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
navBarChildrenWidth+=$(this).clientRect().width;
});

var navBarChildrenToRemove=new Array();
if(navBarChildrenWidth>navBarWidth)
{


for(var i=($navBarChildren.length-1);i>-1;i--){
if(navBarChildrenWidth>navBarWidth)
{
navBarChildrenWidth-=$($navBarChildren[i]).clientRect().width;
navBarChildrenToRemove[i]=true;
}else{
navBarChildrenToRemove[i]=false;
}
}
}

for(var j=0;j<$navBarChildren.length;j++){
if(navBarChildrenToRemove[j]){
$($navBarChildren[j]).addClass("nav-use-case-hidden");
}else{
$($navBarChildren[j]).removeClass("nav-use-case-hidden");
}
}

$navBarInner.css('text-align','');
$navBarInner.css('display','');

},100);

fitNavigation();
$(window).on("resize orientationchange",fitNavigation);

wireAccountPaneAnalyticsTracking();

$('.xs-header-link-user').on('click',function $vpfn_1mwlXP8iy_0WIfN5aNlATg229$46(e){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
e.preventDefault();
e.stopPropagation();
$('.xs-user-menu').toggleClass("show-mobile-menu");
$('.xs-header-link-user').toggleClass('header-link-menu-open');

$('.header-link-search-xsmall').removeClass('header-link-menu-open');
$('.search-form').removeClass('visible');
$('.xs-search-menu').removeClass("show-mobile-menu");
$('.xs-header-link-products').removeClass('header-link-menu-open');
$('.xs-product-menu').removeClass("show-mobile-menu");

});

$('.xs-header-link-products').on('click',function $vpfn_1mwlXP8iy_0WIfN5aNlATg243$50(e){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
e.preventDefault();
e.stopPropagation();
$('.xs-product-menu').toggleClass("show-mobile-menu");
$('.xs-header-link-products').toggleClass('header-link-menu-open');

$('.xs-header-link-user').removeClass('header-link-menu-open');
$('.header-link-search-xsmall').removeClass('header-link-menu-open');
$('.search-form').removeClass('visible');
$('.xs-search-menu').removeClass("show-mobile-menu");
$('.xs-user-menu').removeClass("show-mobile-menu");
});

$('.header-link-search-xsmall').on('click',function $vpfn_1mwlXP8iy_0WIfN5aNlATg256$52(e){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
$('.search-form').toggleClass('visible');
$('.xs-search-menu').toggleClass("show-mobile-menu");
$('.header-link-search-xsmall').toggleClass('header-link-menu-open');

$('.xs-header-link-user').removeClass('header-link-menu-open');
$('.xs-header-link-products').removeClass('header-link-menu-open');
$('.xs-user-menu').removeClass("show-mobile-menu");
$('.xs-product-menu').removeClass("show-mobile-menu");

vp.spot.track('MobileHeader:search_btn_click');
});
});
})(jQuery);


