                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}





(function $vpfn_DSD5Vjf7lqNPnEs4H$BUjA7$1($){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

$.ns("vp.pageVisitCounter");


vp.pageVisitCounter.MAX_PAGE_VISITS;
vp.pageVisitCounter.SESSION_COOKIE_NAME="SESH";
vp.pageVisitCounter.SESSION_COOKIE_COUNTER_NAME="PV";
vp.pageVisitCounter.PAGE_VISIT_RECORDED=false;




vp.pageVisitCounter.recordVisit=function $vpfn_3QQVjUfI3LzVoBNfoI_PzA20$38()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(vp.pageVisitCounter.PAGE_VISIT_RECORDED)
{
return;
}


vp.pageVisitCounter.PAGE_VISIT_RECORDED=true;

var currentNumberOfPageVisits=$.cookies.get(vp.pageVisitCounter.SESSION_COOKIE_NAME,vp.pageVisitCounter.SESSION_COOKIE_COUNTER_NAME);


if(!currentNumberOfPageVisits)
{
vp.pageVisitCounter.markVisitsInCookie("1");
}
else
{

currentNumberOfPageVisits++;

if(currentNumberOfPageVisits<=vp.pageVisitCounter.MAX_PAGE_VISITS)
{
vp.pageVisitCounter.markVisitsInCookie(currentNumberOfPageVisits);
}
}
};




vp.pageVisitCounter.markVisitsInCookie=function $vpfn_BqLR0US9WBJ4g18AgwBsDg53$45(sNumber)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var subvalues={};
subvalues[vp.pageVisitCounter.SESSION_COOKIE_COUNTER_NAME]=sNumber;

return $.cookies.set({
name:vp.pageVisitCounter.SESSION_COOKIE_NAME,
value:subvalues
});
};

})(jQuery);