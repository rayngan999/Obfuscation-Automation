

if(SCTrackingBean.pageName=="null")
	SCTrackingBean.pageName="";
if(SCTrackingBean.siteSections=="null")
	SCTrackingBean.siteSections="";
if(SCTrackingBean.subSections=="null")
	SCTrackingBean.subSections="";
if(SCTrackingBean.subSectionsLevel2=="null")
	SCTrackingBean.subSectionsLevel2="";

if(SCTrackingBean.eVar86=="null")
	SCTrackingBean.eVar86="";
if(SCTrackingBean.eVar87=="null")
	SCTrackingBean.eVar87="";

var visitorId = getCookieByName("VisitorId");
var trackingCookieValue = getCookieByName(""+visitorId);
var eVar39_Value = visitorId;
var userStatus = "kohls not logged in|loyalty not logged in";

var eVar70_Value = visitorId;
var eVar71_Value =  "klsbrwcki:" + visitorId;
var eVar73_value = getCookieByName("loyalty_id");
var customerNameCookie = getCookieByName( 'VisitorUsaFullName' );
if(customerNameCookie == '' || customerNameCookie == null ){
	eVar39_Value = "";
}else{
	if(eVar73_value == '' || eVar73_value == null ){
		userStatus = "kohls logged in|loyalty not logged in";		
	}else{
		userStatus = "kohls logged in|loyalty logged in";
	}	
} 
var y2yTablet = ""; 
var y2yMobile = ""; 
var y2yDesktop = "";
var eVar42_Value = "no cart";
var prop4_Value = SCTrackingBean.pageType;
var prop63_Value = "";
prop63_Value = "";/* JSESSIONID not valid*/
var eVar19_Value = "Monday";
var eVar18_Value = "04:00 PM";
eVar18_Value = "Mon|WeekDay|04:00 PM";
var eVar20_Value = "WeekDay";
var eVar40_Value = "atg";
eVar40_Value = "cloud17";
var eVar68_Value = SCTrackingBean.pageName;
var eVar3_Value = SCTrackingBean.productFindingMethod;
var eVar8_Value = SCTrackingBean.searchTerm;
var prop9_Value = SCTrackingBean.siteSections;
var pageName_Value = SCTrackingBean.pageName;
var eVar22_Value = "Kohl's";
eVar22_Value = "desktop";

var CartPersistence = getCookieByName("CartPersistence");		
var total = '';
var visitorName = '';
var values = total.split("|");
var visitorBagTotals = values[1];


var PageUrl  = window.location.pathname;

if ((/mobi/i.test((navigator.userAgent).toLowerCase())) && window.screen.width > 600 && window.screen.width < 1024)
{
	y2yTablet = "true";
}
else if(/mobi/i.test((navigator.userAgent).toLowerCase()) == true )
{
	y2yMobile = "true";
}
else {
	y2yDesktop = "true";
}	
if(CartPersistence == "" || CartPersistence == null)
{
	if(customerNameCookie != "" && visitorBagTotals >= "1")
	{
		eVar42_Value = "Registered";
	}
	else if(visitorBagTotals >= "1")
	{
		eVar42_Value = "Guest";
	}
}
else 
{
	if(customerNameCookie != "" && CartPersistence === "2")
	{
		eVar42_Value = "Registered";
	}
	else if(CartPersistence === "1" && visitorBagTotals >= "1")
	{
		eVar42_Value = "Guest";
	}
}	

if(typeof(SCTrackingBean) === 'undefined'){
	SCTrackingBean = new Object();
	console.warn("SCTrackingBean is undefined, some values will n't captured in SC Report!!");
}
if(SCTrackingBean.viewSortType || SCTrackingBean.pageIndex){
	SCTrackingBean.viewSortValue = (SCTrackingBean.viewSortType? SCTrackingBean.viewSortType:'') + ":" +
	(SCTrackingBean.pageIndex?SCTrackingBean.pageIndex:'');
}
$env('omniture', function _trackinganalytics(){
	s.currencyCode="USD";
	s.pageName=pageName_Value;
	s.pageType=prop4_Value;
	s.prop1=SCTrackingBean.department;
	s.prop2=SCTrackingBean.category;
	s.prop3=SCTrackingBean.subCategory;
	s.prop4=prop4_Value;
	s.prop5=eVar8_Value;
	s.prop6=SCTrackingBean.searchResultsCount;
	s.prop7=SCTrackingBean.lowLevelSubCategory;
	s.prop8="";
	s.prop9=prop9_Value;
	s.prop10=SCTrackingBean.subSections;
	s.prop11=SCTrackingBean.subSectionsLevel2;
	s.prop16=eVar3_Value;
	s.prop17=userStatus;
	s.prop18=userStatus;
	s.prop18=eVar18_Value;
	s.prop22="2021-08-02";
	s.prop37="";
	s.prop38="";
	s.prop39=SCTrackingBean.refinementTypes;
	s.prop40=SCTrackingBean.refinementTypes;
	s.prop41=SCTrackingBean.refinementValues;
	s.prop42=SCTrackingBean.refinementValues;
	s.prop45="";
	s.prop46="";
	s.prop50="D=s_tempsess";
	s.prop53=eVar68_Value;
	s.events=SCTrackingBean.events;
	s.products=SCTrackingBean.productString;
	s.eVar8=eVar8_Value;
	s.eVar3 = eVar3_Value;
	s.eVar17=userStatus;
	s.eVar18=eVar18_Value;
	/* s.eVar19=eVar19_Value;
	s.eVar20=eVar20_Value; */
	s.eVar22=eVar22_Value;
	s.eVar23=SCTrackingBean.refinementTypes;
	s.eVar24=SCTrackingBean.refinementValues;
	s.eVar25=SCTrackingBean.department;
	s.eVar26=SCTrackingBean.category;
	s.eVar27=SCTrackingBean.subCategory;
	s.eVar28=SCTrackingBean.lowLevelSubCategory;
	s.eVar29=SCTrackingBean.viewSortValue;
	s.eVar35="";
	s.eVar36="";
	s.eVar39=eVar39_Value;
	s.eVar40=eVar40_Value;
	s.eVar42=eVar42_Value;
	s.eVar43="";
	s.eVar44="";
	s.eVar45="";
	s.eVar55="";
	s.eVar56="";
	s.eVar59=SCTrackingBean.pageTypeView;
	s.eVar68=eVar68_Value;
	s.eVar70=eVar70_Value;
	s.eVar71=eVar71_Value;
	s.eVar73 = eVar73_value;
	s.prop63 = prop63_Value;		
	s.eVar86 = SCTrackingBean.eVar86;
	s.eVar87 = SCTrackingBean.eVar87;
	/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
	if(typeof(enableTHCOmniture) != 'undefined' && enableTHCOmniture){
		document.addEventListener("thcOmniture", function(e){ var s_code=s.t();if(s_code)document.write(s_code); });
		Kjs.log.info('THCOmniture event triggered');
	}else{
		var s_code=s.t();if(s_code)document.write(s_code);
		Kjs.log.info('THCOmniture event NOT triggered');
	}	
});
