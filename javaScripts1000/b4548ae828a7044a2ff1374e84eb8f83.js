/*******************************************************************
 * 
 *  Functionality to invoke the FiftyOne Welcome Mat
 * 
 ******************************************************************/

if(typeof(Demandware)=='undefined')Demandware = {};
if(!Demandware.FiftyOne)Demandware.FiftyOne = {};

Demandware.FiftyOne.WelcomeMat = new function()
{
	var _this = this;
	
	var _divParams = null;
	var _welcomeUrl = null;
	var _merchantId = null;
	var _country = null;
		
	//constructor
	new function()
	{
		$(document).bind("ready", initialize);
		$(window).bind("unload", dispose);
	}
	
	function initialize()
	{
		if(cookieExists()) return;
		initializeParameters();
		invokeWelcomeMat();
	}
	
	function initializeParameters()
	{
		_divParams = $('#divFiftyOneWelcomeMatParams');
		_welcomeUrl = $('#txtFiftyOneWelcomeUrl').val();
		_merchantId = _divParams.find('#txtFiftyOneMerchantId').val();
		_country = _divParams.find('#txtFiftyOneCountryId').val();
	}
	
	function cookieExists() 
	{
        var cookieName = 'wlcme';
        var index = document.cookie.indexOf(cookieName + "=");
        return (index > -1);   	
	}
	
	function invokeWelcomeMat()
	{
		if(!_merchantId || ! _country || ! _welcomeUrl)
			return;
		
		var url = _welcomeUrl+'?merchId='+_merchantId+'&countryId='+_country+'&setCookie=Y'
		var scriptTag = document.createElement("script");
		scriptTag.src = url;
		scriptTag.async = "async"; 
		scriptTag.type = "text/javascript";
		var headNode = document.getElementsByTagName("head")[0];
		//insert at top of head element
		headNode.insertBefore(scriptTag,headNode.childNodes[0]);
	}
	
	function dispose()
	{
		_this = _divParams = null;
	}
}