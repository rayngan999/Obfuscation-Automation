                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;

}






if(!vp)
{
var vp={};
}

if(!vp.browser)
{
vp.browser={};
}





vp.browser.hasSpyware=false;





vp.browser.supportsPng=true;

(function $vpfn_ZZYg03b649fIF1VXFuduJg32$1()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var BROWSER_SPYWARE_TOKENS={
"funwebproducts":{
name:"FunWebProducts",
url:"http://www.adwarealert.com/glossary_details.php?ID=133616"
},
"simbar":{
name:"Simbar",
url:"http://spywaredetector.net/spyware_encyclopedia/ToolBar.Simbar.htm"
}
};


if(window._browserData)
{
for(var prop in window._browserData)
{
this[prop]=window._browserData[prop];
}
}

this.ver=this.version.major;

this.OS={
isMac:this.operatingSystem==BROWSER_OS_Macintosh,
isWin:this.operatingSystem==BROWSER_OS_Windows,
isLinux:this.operatingSystem==BROWSER_OS_Linux,
isIOs:this.operatingSystem==BROWSER_OS_IOS,
isAndroid:this.operatingSystem==BROWSER_OS_Android,
isBlackberry:this.operatingSystem==BROWSER_OS_Blackberry,
isWindowsPhone:this.operatingSystem==BROWSER_OS_WindowsPhone,
name:this.operatingSystem,
version:this.operatingSystemVersion.major
};

this.isIE=this.className==BROWSER_CLASS_InternetExplorer;
this.isGecko=this.className==BROWSER_CLASS_Gecko;
this.isWebKit=this.className==BROWSER_CLASS_Webkit;
this.isFirefox=this.name==BROWSER_NAME_Firefox;
this.isSafari=this.name==BROWSER_NAME_Safari;

this.isMobileSafari=this.name==BROWSER_NAME_MobileSafari||(this.OS.isIOs&&this.name==BROWSER_NAME_MobileChrome);
this.isAndroid=this.name==BROWSER_NAME_Android;
this.isGoogleChrome=this.name==BROWSER_NAME_GoogleChrome;
this.isOpera=this.name==BROWSER_NAME_Opera;

delete this.operatingSystem;

var sUA=navigator.userAgent.toLowerCase();
for(var sToken in BROWSER_SPYWARE_TOKENS)
{
if(sUA.indexOf(sToken)!=-1)
{
this.hasSpyware=true;
if(!this.spyware)
{
this.spyware=[];
}

this.spyware.push(BROWSER_SPYWARE_TOKENS[sToken]);
}
}
}).call(vp.browser);