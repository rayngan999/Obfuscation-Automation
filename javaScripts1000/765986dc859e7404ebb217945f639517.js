window.fifabAlready||(window.fifabAlready=!0,function(){var a=sessionStorage;window.fi_fab=function(d){return new Promise(function(c,e){var f=0,m=d||1E3,k=function(){return"1"==a.getItem("fi_ab")?!0:"0"==a.getItem("fi_ab")?!1:null},h=setInterval(function(){null!==k()?(clearInterval(h),c({adblock:"0"==a.getItem("fi_ab")?!1:!0,acceptableAds:"0"==a.getItem("fi_aa")?!1:!0})):++f>m/10&&(clearInterval(h),e("AdBlockTimeout"))},10);null!==k()&&(clearInterval(h),c({adblock:"0"==a.getItem("fi_ab")?!1:!0,acceptableAds:"0"==
a.getItem("fi_aa")?!1:!0}))})};(function(d,c,e){var f=function(a,n){var g=!1;return Promise.race([function(a){return new Promise(function(l,n){var b=document.createElement("img");b.style.display="none";var c=function(){b.removeEventListener("error",p);b.removeEventListener("load",e)};var p=function(a){c();g||(g=!0,l(1))};var e=function(a){c();g||(g=!0,l(0))};b.addEventListener("error",function(){p()});b.addEventListener("load",function(){e()});b.src=a;(d.document.body||d.document.documentElement).appendChild(b)})}(a),
new Promise(function(b,l){setTimeout(function(){g||(g=!0,l("Image ("+a+") wait timeout: did not return within "+n+"ms"))},n)})])},m=function(a){return new Promise(function(a,b){b=function(a){this._options={loopCheckTime:50,loopMaxNumber:10,btClass:"pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links",btStyle:"width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;"};this._var={bt:null,
checking:!1,loop:null,to1:null,to2:null,loopNumber:0,cb:e};var b=this;b._var.to1=setTimeout(function(){var a=document.createElement("div");a.setAttribute("class",b._options.btClass);a.setAttribute("style",b._options.btStyle);b._var.bt=d.document.body.appendChild(a);b._var.to2=setTimeout(function(){b.check()},1)},1)};b.prototype._options=null;b.prototype._var=null;b.prototype._bt=null;b.prototype.cleanUp=function(){try{clearInterval(this._var.loop),clearTimeout(this._var.to1),clearTimeout(this._var.to2),
d.document.body.removeChild(this._var.bt)}catch(p){}};b.prototype.check=function(){this._var.checking=!0;var a=this;this._var.loopNumber=0;this._var.loop=setInterval(function(){a._checkBait(!0)},this._options.loopCheckTime)};b.prototype._checkBait=function(){var b=!1;if(null!==d.document.body.getAttribute("abp")||null===this._var.bt.offsetParent||0==this._var.bt.offsetHeight||0==this._var.bt.offsetLeft||0==this._var.bt.offsetTop||0==this._var.bt.offsetWidth||0==this._var.bt.clientHeight||0==this._var.bt.clientWidth)b=
!0;if(void 0!==d.getComputedStyle){var c=d.getComputedStyle(this._var.bt,null);!c||"none"!=c.getPropertyValue("display")&&"hidden"!=c.getPropertyValue("visibility")||(b=!0)}this._var.loopNumber++;this._var.loopNumber>=this._options.loopMaxNumber?(!0===b?a(1):a(0),this.cleanUp()):!0===b&&(this.cleanUp(),a(1))};c.FAB=new b})},k=function(){"1"==a.getItem("fi_aa")&&(a.removeItem("fi_aa"),a.removeItem("fi_ab"));return new Promise(function(b,a){a=function(a){b(a)};m().then(a);f("https://ad.doubleclick.net/favicon.ico?ad=300x250&ad_box_=1&adnet=1&showad=1&size=250x250",
800).then(a)})},h=function(b){"0"==a.getItem("fi_aa")&&a.removeItem("fi_aa");return f("https://widgets.outbrain.com/images/widgetIcons/achoice.svg",800).then(function(a){return a?0:1}).catch(function(){return 0})},q,r,t=!1,u=!1;"0"==a.getItem("fi_ab")?e({adblock:0,acceptableAds:0}):Promise.all([k().then(function(b){a.setItem("fi_ab",parseInt(b,10));t||(t=!0,q=b)}),h().then(function(b){a.setItem("fi_aa",parseInt(b,10));u||(u=!0,r=b)})]).then(function(){q||(r=0);e({adblock:q,acceptableAds:r})}).catch(function(a){console.error(a)})})(window,
{},function(d){a.setItem("fi_ab",parseInt(d.adblock,10));a.setItem("fi_aa",parseInt(d.acceptableAds,10));if(d.adblock&&!window.fifabAlreadyTracked){window.fifabAlreadyTracked=!0;var c=document.querySelector("script[src='//ecdn.analysis.fi/static/js/fab.js']");c=c?parseInt(c.getAttribute("id").replace("fi-",""),10):parseInt(window.apd_options&&window.apd_options.websiteId,10);var e=!1;null==a.getItem("fi_as")&&(e=!0,a.setItem("fi_as","1"));var f=new XMLHttpRequest;f.open("POST","//measure.analysis.fi/",
!0);f.send(JSON.stringify({fv:e?1:0,aa:d.acceptableAds,s:c}))}})}());