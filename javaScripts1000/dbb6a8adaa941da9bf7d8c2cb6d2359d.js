                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}


(function $vpfn_fsD8J7j0FXMIJ46ZiELAFQ4$1($)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var COOKIE="devuitype";
var LOCAL_STORAGE_KEY="mobile_site_switch";

$(document).ready(function $vpfn_fsD8J7j0FXMIJ46ZiELAFQ9$22()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

$(".mobile-toggle-link").click(function $vpfn_fsD8J7j0FXMIJ46ZiELAFQ12$39(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
e.preventDefault();


var data={
pageSpotId:window._vp_page_spot_id
};

var value=$.cookies.get(COOKIE)||(vp.browser.isSmallMobile?"SmallMobile":"Desktop");

if(value.toLowerCase()!="smallmobile")
{
$.cookies.set(COOKIE,"SmallMobile");
data.switchedToVersion="mobile";
}
else
{
$.cookies.set(COOKIE,"Desktop");
data.switchedToVersion="full";
}

try
{
amplify.store(LOCAL_STORAGE_KEY,null);
amplify.store(LOCAL_STORAGE_KEY,data);
}
catch(e){}

window.location.reload(true);
});
});


var switchData=amplify.store(LOCAL_STORAGE_KEY);

if(switchData)
{
$.ajax({
type:"GET",
url:"/mobile/api/tracking/siteversionswitch.aspx",
data:switchData,
dataType:"html",
error:function(){}
});

try
{
amplify.store(LOCAL_STORAGE_KEY,null);
}
catch(e){}
}

})(jQuery);
