<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/>
<script data-ezscrex='false' data-cfasync='false' data-pagespeed-no-defer>var __ez=__ez||{};__ez.stms=Date.now();__ez.evt={};__ez.script={};__ez.ck=__ez.ck||{};__ez.template={};__ez.template.isOrig=true;__ez.queue=(function(){var count=0,incr=0,items=[],timeDelayFired=false,hpItems=[],lpItems=[],allowLoad=true;var obj={func:function(name,funcName,parameters,isBlock,blockedBy,deleteWhenComplete,proceedIfError){var self=this;this.name=name;this.funcName=funcName;this.parameters=parameters===null?null:(parameters instanceof Array)?parameters:[parameters];this.isBlock=isBlock;this.blockedBy=blockedBy;this.deleteWhenComplete=deleteWhenComplete;this.isError=false;this.isComplete=false;this.isInitialized=false;this.proceedIfError=proceedIfError;this.isTimeDelay=false;this.process=function(){log("... func = "+name);self.isInitialized=true;self.isComplete=true;log("... func.apply: "+name);var funcs=self.funcName.split('.');var func=null;if(funcs.length>3){}else if(funcs.length===3){func=window[funcs[0]][funcs[1]][funcs[2]];}else if(funcs.length===2){func=window[funcs[0]][funcs[1]];}else{func=window[self.funcName];}
if(typeof func!=='undefined'&&func!==null){func.apply(null,this.parameters);}
if(self.deleteWhenComplete===true)delete items[name];if(self.isBlock===true){log("----- F'D: "+self.name);processAll();}}},file:function(name,path,isBlock,blockedBy,async,defer,proceedIfError){var self=this;this.name=name;this.path=path;this.async=async;this.defer=defer;this.isBlock=isBlock;this.blockedBy=blockedBy;this.isInitialized=false;this.isError=false;this.isComplete=false;this.proceedIfError=proceedIfError;this.isTimeDelay=false;this.process=function(){self.isInitialized=true;log("... file = "+name);var scr=document.createElement('script');scr.src=path;if(async===true)scr.async=true;else if(defer===true)scr.defer=true;scr.onerror=function(){log("----- ERR'D: "+self.name);self.isError=true;if(self.isBlock===true){processAll();}};scr.onreadystatechange=scr.onload=function(){var state=scr.readyState;log("----- F'D: "+self.name);if((!state||/loaded|complete/.test(state))){self.isComplete=true;if(self.isBlock===true){processAll();}}};document.getElementsByTagName('head')[0].appendChild(scr);}},fileLoaded:function(name,isComplete){this.name=name;this.path="";this.async=false;this.defer=false;this.isBlock=false;this.blockedBy=[];this.isInitialized=true;this.isError=false;this.isComplete=isComplete;this.proceedIfError=false;this.isTimeDelay=false;this.process=function(){};}};function init(){window.addEventListener("load",function(){setTimeout(function(){timeDelayFired=true;log('TDELAY -----');processAll();},5000);},false);}
function addFile(name,path,isBlock,blockedBy,async,defer,proceedIfError,priority){var item=new obj.file(name,path,isBlock,blockedBy,async,defer,proceedIfError);if(priority===true){hpItems[name]=item}else{lpItems[name]=item}
items[name]=item;checkIfBlocked(item);}
function setallowLoad(settobool){allowLoad=settobool}
function addFunc(name,func,parameters,isBlock,blockedBy,autoInc,deleteWhenComplete,proceedIfError,priority){if(autoInc===true)name=name+"_"+incr++;var item=new obj.func(name,func,parameters,isBlock,blockedBy,deleteWhenComplete,proceedIfError);if(priority===true){hpItems[name]=item}else{lpItems[name]=item}
items[name]=item;checkIfBlocked(item);}
function addTimeDelayFile(name,path){var item=new obj.file(name,path,false,[],false,false,true);item.isTimeDelay=true;log(name+' ... '+' FILE! TDELAY');lpItems[name]=item;items[name]=item;checkIfBlocked(item);}
function addTimeDelayFunc(name,func,parameters){var item=new obj.func(name,func,parameters,false,[],true,true);item.isTimeDelay=true;log(name+' ... '+' FUNCTION! TDELAY');lpItems[name]=item;items[name]=item;checkIfBlocked(item);}
function checkIfBlocked(item){if(isBlocked(item)===true||allowLoad==false)return;item.process();}
function isBlocked(item){if(item.isTimeDelay===true&&timeDelayFired===false){log(item.name+" blocked = TIME DELAY!");return true;}
if(item.blockedBy instanceof Array){for(var i=0;i<item.blockedBy.length;i++){var block=item.blockedBy[i];if(items.hasOwnProperty(block)===false){log(item.name+" blocked = "+block);return true;}else if(item.proceedIfError===true&&items[block].isError===true){return false;}else if(items[block].isComplete===false){log(item.name+" blocked = "+block);return true;}}}
return false;}
function markLoaded(filename){if(!filename||0===filename.length){return;}
if(filename in items){var item=items[filename];if(item.isComplete===true){log(item.name+' '+filename+': error loaded duplicate')}else{item.isComplete=true;item.isInitialized=true;}}else{items[filename]=new obj.fileLoaded(filename,true);}
log("markLoaded dummyfile: "+items[filename].name);}
function logWhatsBlocked(){for(var i in items){if(items.hasOwnProperty(i)===false)continue;var item=items[i];isBlocked(item)}}
function log(msg){var href=window.location.href;var reg=new RegExp('[?&]ezq=([^&#]*)','i');var string=reg.exec(href);var res=string?string[1]:null;if(res==="1")console.debug(msg);}
function processAll(){count++;if(count>200)return;log("let's go");processItems(hpItems);processItems(lpItems);}
function processItems(list){for(var i in list){if(list.hasOwnProperty(i)===false)continue;var item=list[i];if(item.isComplete===true||isBlocked(item)||item.isInitialized===true||item.isError===true){if(item.isError===true){log(item.name+': error')}else if(item.isComplete===true){log(item.name+': complete already')}else if(item.isInitialized===true){log(item.name+': initialized already')}}else{item.process();}}}
init();return{addFile:addFile,addDelayFile:addTimeDelayFile,addFunc:addFunc,addDelayFunc:addTimeDelayFunc,items:items,processAll:processAll,setallowLoad:setallowLoad,markLoaded:markLoaded,logWhatsBlocked:logWhatsBlocked,};})();__ez.evt.add=function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n()},__ez.evt.remove=function(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent?e.detachEvent("on"+t,n):delete e["on"+t]};__ez.script.add=function(e){var t=document.createElement("script");t.src=e,t.async=!0,t.type="text/javascript",document.getElementsByTagName("head")[0].appendChild(t)};__ez.dot={};__ez.vep=(function(){var pixels=[],pxURL="/detroitchicago/grapefruit.gif";function AddPixel(vID,pixelData){if(__ez.dot.isDefined(vID)&&__ez.dot.isValid(pixelData)){pixels.push({type:'video',video_impression_id:vID,domain_id:__ez.dot.getDID(),t_epoch:__ez.dot.getEpoch(0),data:__ez.dot.dataToStr(pixelData)});}}
function Fire(){if(typeof document.visibilityState!=='undefined'&&document.visibilityState==="prerender"){return;}
if(__ez.dot.isDefined(pixels)&&pixels.length>0){while(pixels.length>0){var j=5;if(j>pixels.length){j=pixels.length;}
var pushPixels=pixels.splice(0,j);var pixelURL=__ez.dot.getURL(pxURL)+"?orig="+(__ez.template.isOrig===true?1:0)+"&v="+btoa(JSON.stringify(pushPixels));__ez.dot.Fire(pixelURL);}}
pixels=[];}
return{Add:AddPixel,Fire:Fire};})();</script><script data-ezscrex='false' data-cfasync='false' data-pagespeed-no-defer>__ez.pel=(function(){var pixels=[],pxURL="/porpoiseant/army.gif";function AddAndFirePixel(adSlot,pixelData){AddPixel(adSlot,pixelData,0,0,0,0,0);Fire();}
function AddAndFireOrigPixel(adSlot,pixelData){AddPixel(adSlot,pixelData,0,0,0,0,0,true);Fire();}
function GetCurrentPixels(){return pixels;}
function AddPixel(adSlot,pixelData,revenue,est_revenue,bid_floor_filled,bid_floor_prev,stat_source_id,isOrig){if(!__ez.dot.isDefined(adSlot)||__ez.dot.isAnyDefined(adSlot.getSlotElementId,adSlot.ElementId)==false){return;}
var ad_position_id=parseInt(__ez.dot.getTargeting(adSlot,'ap'));var impId=__ez.dot.getSlotIID(adSlot),adUnit=__ez.dot.getAdUnit(adSlot,isOrig);var compId=parseInt(__ez.dot.getTargeting(adSlot,"compid"));var lineItemId=0;var creativeId=0;var ezimData=getEzimData(adSlot);if(typeof ezimData=='object'){if(ezimData.creative_id!==undefined){creativeId=ezimData.creative_id;}
if(ezimData.line_item_id!==undefined){lineItemId=ezimData.line_item_id;}}
if(__ez.dot.isDefined(impId,adUnit)&&__ez.dot.isValid(pixelData)){pixels.push({type:"impression",impression_id:impId,domain_id:__ez.dot.getDID(),unit:adUnit,t_epoch:__ez.dot.getEpoch(0),revenue:revenue,est_revenue:est_revenue,ad_position:ad_position_id,ad_size:"",bid_floor_filled:bid_floor_filled,bid_floor_prev:bid_floor_prev,stat_source_id:stat_source_id,country_code:__ez.dot.getCC(),pageview_id:__ez.dot.getPageviewId(),comp_id:compId,line_item_id:lineItemId,creative_id:creativeId,data:__ez.dot.dataToStr(pixelData),is_orig:isOrig||__ez.template.isOrig,});}}
function AddPixelById(impFullId,pixelData,isOrig){var vals=impFullId.split('/');if(__ez.dot.isDefined(impFullId)&&vals.length===3&&__ez.dot.isValid(pixelData)){var adUnit=vals[0],impId=vals[2];pixels.push({type:"impression",impression_id:impId,domain_id:__ez.dot.getDID(),unit:adUnit,t_epoch:__ez.dot.getEpoch(0),pageview_id:__ez.dot.getPageviewId(),data:__ez.dot.dataToStr(pixelData),is_orig:isOrig||__ez.template.isOrig});}}
function Fire(){if(typeof document.visibilityState!=='undefined'&&document.visibilityState==="prerender")return;if(__ez.dot.isDefined(pixels)&&pixels.length>0){var allPixels=[pixels.filter(function(pixel){return pixel.is_orig}),pixels.filter(function(pixel){return!pixel.is_orig})];allPixels.forEach(function(pixels){while(pixels.length>0){var isOrig=pixels[0].is_orig||false;var j=5;if(j>pixels.length){j=pixels.length;}
var pushPixels=pixels.splice(0,j);var pixelURL=__ez.dot.getURL(pxURL)+"?orig="+(isOrig===true?1:0)+"&sts="+btoa(JSON.stringify(pushPixels));if(typeof window.isAmp!=='undefined'&&isAmp&&typeof window._ezaq!=='undefined'&&_ezaq.hasOwnProperty("domain_id")){pixelURL+="&visit_uuid="+_ezaq['visit_uuid'];}
__ez.dot.Fire(pixelURL);}})}
pixels=[];}
function getEzimData(adSlot){if(typeof _ezim_d=="undefined"){return false}
var adUnitName=__ez.dot.getAdUnitPath(adSlot).split('/').pop();if(typeof _ezim_d==='object'&&_ezim_d.hasOwnProperty(adUnitName)){return _ezim_d[adUnitName];}
for(var ezimKey in _ezim_d){if(ezimKey.split('/').pop()===adUnitName){return _ezim_d[ezimKey];}}
return false;}
return{Add:AddPixel,AddAndFire:AddAndFirePixel,AddAndFireOrig:AddAndFireOrigPixel,AddById:AddPixelById,Fire:Fire,GetPixels:GetCurrentPixels,};})();</script>
	<!-- Static -->
	
	<link rel="shortcut icon" href="https://congratulationsto.com/favicon.ico"/>
	<meta name="google-site-verification" content="bWiPf5pT1tzZ5kph0drOP8-qJCKGf4TG0Cj9gJe2eoo"/>
	<link rel="stylesheet" type="text/css" media="screen" href="/media/css/main.screen.css"/>
	<link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml"/>
    <script src="https://congratulationsto.com/m/assets/public/js/cookieconsent.min.js"></script>
    <script type="text/javascript">
		window.cookieconsent_options = {"message":"This website uses cookies to ensure you get the best experience on our website.","dismiss":"Got it!","learnMore":"More info","link":"https://congratulationsto.com/privacy-policy.php","theme":"dark-top"};
	</script>
	
	<!-- Dynamic -->
	<link rel="alternate" media="only screen and (max-width: 720px)" href="https://m.congratulationsto.com/"/>
	<meta name="Description" content="Short congratulations quotes and wishes for wedding, having a baby, graduation and other occasions"/>
	<meta name="Keywords" content="congratulations, wedding and marriage wishes, new baby quotes to parents, letter for promotion, free cards, email, facebook"/>
	<title>Congratulations quotes and wishes</title>
	
	<!-- Facebook -->
	<meta property="og:url" content="https://congratulationsto.com"/> 
	<meta property="og:title" content="Congratulations quotes and wishes"/> 
	<meta property="og:image" content="https://m.congratulationsto.com/assets/public/img/logoCongrats.png"/> 
	<meta property="og:description" content="Short congratulations quotes and wishes for various occasions"/>
	
<link rel='canonical' href='https://congratulationsto.com/' />
<script type="text/javascript">var ezouid = "1";</script><base href="https://congratulationsto.com/"><script type='text/javascript'>
var ezoTemplate = 'old_site_gc';
if(typeof ezouid == 'undefined')
{
    var ezouid = 'none';
}
var ezoFormfactor = '1';
var ezo_elements_to_check = Array();
</script><!-- START EZHEAD -->
<script data-ezscrex="false" type='text/javascript'>
var soc_app_id = '0';
var did = 179420;
var ezdomain = 'congratulationsto.com';
var ezoicSearchable = 1;
</script>
<!--{jquery}-->
<!-- END EZHEAD -->
<script data-ezscrex="false" type="text/javascript" data-cfasync="false">var _ezaq = {"ad_cache_level":0,"ad_lazyload_version":0,"ad_load_version":0,"city":"Central","country":"HK","days_since_last_visit":-1,"domain_id":179420,"engaged_time_visit":0,"ezcache_level":2,"ezcache_skip_code":0,"form_factor_id":1,"framework_id":1,"is_return_visitor":false,"is_sitespeed":0,"last_page_load":"","last_pageview_id":"","lt_cache_level":0,"metro_code":0,"page_ad_positions":"","page_view_count":0,"page_view_id":"3f6384d5-efcf-48a1-7975-2770eb5b208c","position_selection_id":0,"postal_code":"","pv_event_count":0,"response_size_orig":42244,"response_time_orig":1,"serverid":"18.136.126.46:16268","state":"HCW","t_epoch":1627924452,"template_id":126,"time_on_site_visit":0,"url":"https://congratulationsto.com/","user_id":0,"weather_precipitation":0,"weather_summary":"","weather_temperature":0,"word_count":2018,"worst_bad_word_level":0};var _ezExtraQueries = "&ez_orig=1";</script>
<script data-ezscrex='false' data-pagespeed-no-defer data-cfasync='false'>
function create_ezolpl(pvID, rv) {
    var d = new Date();
    d.setTime(d.getTime() + (365*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    __ez.ck.setByCat("ezux_lpl_179420=" + new Date().getTime() + "|" + pvID + "|" + rv + "; " + expires, 3);
}
function attach_ezolpl(pvID, rv) {
    if (document.readyState === "complete") {
        create_ezolpl(pvID, rv);
    }
    if(window.attachEvent) {
        window.attachEvent("onload", create_ezolpl, pvID, rv);
    } else {
        if(window.onload) {
            var curronload = window.onload;
            var newonload = function(evt) {
                curronload(evt);
                create_ezolpl(pvID, rv);
            };
            window.onload = newonload;
        } else {
            window.onload = create_ezolpl.bind(null, pvID, rv);
        }
    }
}

__ez.queue.addFunc("attach_ezolpl", "attach_ezolpl", ["3f6384d5-efcf-48a1-7975-2770eb5b208c", "false"], false, ['/detroitchicago/boise.js'], true, false, false, false);
</script>
<script type="text/javascript">var _audins_dom="congratulationsto_com",_audins_did=179420;__ez.queue.addFile('/detroitchicago/cmbv2.js', '/detroitchicago/cmbv2.js?gcb=195-2&cb=04-1y02-4y06-12y07-1y19-5y0b-5y0d-10y13-3y17-3y1a-2y20-3y52-1&cmbcb=20&sj=x04x02x06x07x19x0bx0dx13x17x1ax20x52', true, [], true, false, true, false);</script>
<script type="text/javascript" defer>__ez.queue.addFile('/detroitchicago/cmbdv2.js', '/detroitchicago/cmbdv2.js?gcb=195-2&cb=03-4y0c-5y18-3&cmbcb=20&sj=x03x0cx18', true, ['/detroitchicago/cmbv2.js'], true, false, true, false);</script></head>

<body class="index">


<div id="container">
	<!-- :::::::: HEADER :::::::: -->
	<header id="header" class="clearfix">
		<div id="header-left">
			<div class="logo"><a title="Congratulations to" href="https://congratulationsto.com/"><span>Website congratulationsto.com</span></a></div>
		</div>
		<div id="header-right">
			<a title="Birthday wishes" href="https://congratulationsto.com/various/birthday-wishes.php"><img src="https://congratulationsto.com/media/birthday-wishes_648x120.jpg" width="648" height="120" style="padding-bottom: 4px;" title="Birthday wishes" alt="Wishes for birthday"/></a>
		</div>
	</header><!-- /header -->
	
	<!-- :::::::: TOP MENU :::::::: -->
	<div id="top-nav-wrapper">
		<nav id="top-nav" class="clearfix">
<ul><!--
	--><li class="first"><span><a title="All congratulations" href="https://congratulationsto.com/"><b>All <br/>congratulations</b></a></span></li><!--
	--><li class=""><span><a title="Wedding quotes" href="https://congratulationsto.com/wedding_congratulations/wedding_quotes.php"><b>Wedding <br/>quotes</b></a></span></li><!--
	--><li class=""><span><a title="New parents congratulations" href="https://congratulationsto.com/baby_congratulations/new_parents_congratulations.php"><b>New parents <br/>congratulations</b></a></span></li><!--
	--><li class=""><span><a title="Job congratulations" href="https://congratulationsto.com/job_congratulations/job_congratulations.php"><b>Job <br/>congratulations</b></a></span></li><!--
	--><li class=""><span><a title="Education congratulations" href="https://congratulationsto.com/education_congratulations/education_congratulations.php"><b>Education <br/>congratulations</b></a></span></li><!--
	--><li class=""><span><a title="Various occasions" href="https://congratulationsto.com/various/various_congratulations.php"><b>Various <br/>occasions</b></a></span></li><!--
	--><li class="last"><span><a title="Holidays wishes" href="https://congratulationsto.com/holidays_wishes/holidays_wishes.php"><b>Holidays <br/>wishes</b></a></span></li><!--
--></ul>
		</nav>
	</div><!-- /top-nav-wrapper -->

	<!-- :::::::: INFO :::::::: -->
	<div id="info" class="clearfix">
		<aside id="left-nav-wrapper">

			<p class="sb-title">Ads</p>

<div class="padd-left-5">
<!-- CT_300x250 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-1171585364407251" data-ad-slot="2014106406"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
</div>

			<p class="sb-title">Related topics</p>

<nav>
	<ul class="articles">
		<li><a href="https://congratulationsto.com/"><b>All congratulations</b></a></li>

	</ul>
</nav>

<div style="border-bottom: 1px solid #000;">
<script id="mNCC">  medianet_width='300';  medianet_height='600';  medianet_crid='311343129';  </script>
<script id="mNSC" src="https://contextual.media.net/nmedianet.js?cid=8CU89N2CZ"></script>
</div>

<nav>
	<ul class="articles">
		<li><a href="https://congratulationsto.com/wedding_congratulations/wedding_quotes.php"><b>Wedding quotes</b></a></li>
		<li><a href="https://congratulationsto.com/baby_congratulations/new_parents_congratulations.php"><b>New parents congratulations</b></a></li>
		<li><a href="https://congratulationsto.com/job_congratulations/job_congratulations.php"><b>Job congratulations</b></a></li>
		<li><a href="https://congratulationsto.com/education_congratulations/education_congratulations.php"><b>Education congratulations</b></a></li>
		<li><a href="https://congratulationsto.com/various/various_congratulations.php"><b>Various occasions</b></a></li>
		<li><a href="https://congratulationsto.com/holidays_wishes/holidays_wishes.php"><b>Holidays wishes</b></a></li>
	</ul>
</nav>

			<br/><br/>

		</aside><!-- /left-nav-wrapper -->
		
		<!-- :::::::: CONTENT :::::::: -->
		<div id="content-wrapper">
			<section id="content" role="main">
				<h1 class="content">Congratulations quotes and wishes</h1>

<div class="desc">
<i>How to congratulate someone? You may find on our website a lot of free beautiful words and <a href="https://congratulationsto.com/wedding_congratulations/congratulations_to_marriage.php"><b>marriage wishes</b></a> in english, spanish and other languages for wedding cards for your friends, relatives and family members (for sister, brother, daughter or son)getting married, congratulation <a href="https://congratulationsto.com/baby_congratulations/congratulations_to_new_parents.php"><b>quotes for new parents</b></a>, <a href="https://congratulationsto.com/job_congratulations/job_congratulations.php"><b>job related</b></a> congratulatory messages to friends or co-workers on their <a href="https://congratulationsto.com/job_congratulations/promotion_congratulations.php"><b>promotion at work</b></a> and examples how to write congratulation letters etc. If your friend, son or daughter graduates from (high) school, send a congratulatory greeting message on their <a href="https://congratulationsto.com/education_congratulations/congratulations_on_graduation.php"><b>graduation</b></a> and diploma. You may also use these cute words when sending congrats emails, sms messages or writing Facebook posts. 
If you are looking for a beautiful and unique free <a href="https://congratulationsto.com/wedding_congratulations/wedding_cards.php"><b>wedding card</b></a> or an ecard for <a href="https://congratulationsto.com/baby_congratulations/new_baby_cards.php"><b>new parents</b></a> you can find ready to send very nice and cute greeting cards with cool pictures and touching messages as well. And all these electronic and downloadable greeting cards are 100 percent for free! Just choose your favourite one, save to your computer and send shortly by your electronic mail or to share on social networks. Also we have a list of great <a href="https://congratulationsto.com/wedding_congratulations/wedding_gifts.php"><b>wedding</b></a> and <a href="https://congratulationsto.com/job_congratulations/office_gift_ideas.php"><b>office</b></a> gift ideas. They will help you not to be boring and surprise people. Examples how to reply to congratulations are waiting for you as well. We hope you will find what you are looking for and will have a wonderful and fun-filled celebration! Wishing you a good luck!</i>
</div>

<br/>

<h2><a href="https://congratulationsto.com/wedding_congratulations/wedding_quotes.php">Wedding quotes and marriage wishes</a></h2>
<article>
	<h3><a href="https://congratulationsto.com/wedding_congratulations/wedding_congratulations.php">Wedding congratulations</a></h3>
	<blockquote><i>A wedding day is to be cherished as you begin your new life together as a couple.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/wedding_congratulations/congratulations_to_marriage.php">Congrats to marriage</a></h3>
	<blockquote><i>Every love story is beautiful. Happy married life!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/wedding_congratulations/congratulations_to_friends_getting_married.php">Congratulations to friends getting married</a></h3>
	<blockquote><i>Love is best when shared by two! Have a wonderful wedded life!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/wedding_congratulations/funny_wedding_quotes.php">Funny wedding quotes</a></h3>
	<blockquote><i>Welcome to the dangerous world of married life. It&#39;s too late to repent!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/wedding_congratulations/congratulations_to_a_wedding.php">Congrats to a wedding</a></h3>
	<blockquote><i>Marriage is the uniting of two souls. Wishing you a lifetime of love!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/wedding_congratulations/congratulations_to_newly_wed.php">Congratulatory messages to newly wed</a></h3>
	<blockquote><i>May your married life be an inspiration to all the couples!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/wedding_congratulations/marriage_congratulations_quotes.php">Marriage congrats quotes</a></h3>
	<blockquote><i>Just &#34;I do&#34; it! Congratulations on your marriage!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/wedding_congratulations/wedding_wishes.php">Wedding wishes</a></h3>
	<blockquote><i>I hope your life together will be filled with joy, happiness and lots of love!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/wedding_congratulations/belated_wedding_wishes.php">Belated wedding wishes</a></h3>
	<blockquote><i>Sorry, I couldn&#39;t make it to celebrate your wedding.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/wedding_congratulations/congratulations_to_bride_and_groom.php">Congrats to bride and groom</a></h3>
	<blockquote><i>All the best to you and your new family at this special time and always!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/wedding_congratulations/congratulations_to_bride.php">Congratulations to bride</a></h3>
	<blockquote><i>Congratulations on your union! Today every eye is focused on you!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/wedding_congratulations/wedding_congratulations_to_brother.php">Wedding congrats to brother</a></h3>
	<blockquote><i>Wedding wishes for a dear brother and new sister-in-law.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/wedding_congratulations/religious_wedding_congratulations.php">Religious wedding congrats wording</a></h3>
	<blockquote><i>May God pour all his warmth and care on your lovely journey ahead.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/wedding_congratulations/wedding_poems.php">Wedding poems</a></h3>
	<blockquote><i>To a wedding joy neverending, /The warmest wishes I am sending!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/wedding_congratulations/marriage_wishes.php">Marriage wishes</a></h3>
	<blockquote><i>May this be the happiest day of your lives, and the beginning of a wonderful future together.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/wedding_congratulations/congratulations-on-gay-marriage.php">Gay marriage</a></h3>
	<blockquote><i>Congratulations to the Grooms!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/wedding_congratulations/lesbian-wedding-wishes.php">Lesbian wedding</a></h3>
	<blockquote><i>You ladies make a fabulous couple!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/wedding/anniversary-wishes.php">Anniversary wishes</a></h3>
	<blockquote><i>Enjoy your celebrations and have a very Happy Anniversary!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/wedding_congratulations/funny-marriage-advice.php">Funny advice for marriage</a></h3>
	<blockquote><i>Marriage should not be about looking at each other but looking in the same direction.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/wedding_congratulations/wedding_invitations.php">Wedding invitations</a></h3>
	<blockquote><i>You are invited to celebrate the love story of...</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/wedding_congratulations/save-the-date.php">Save the date</a></h3>
	<blockquote><i>Please save the date as we become Mr. and Mrs. !</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/wedding/wedding-toasts.php">Wedding toasts</a></h3>
	<blockquote><i>May ÑÐ¾ur lÐ¾vÐµ bÐµ Ð°ddÐµd. May it nÐµvÐµr bÐµ subtracted.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/wedding_congratulations/wedding_gifts.php">Wedding gifts</a></h3>
	<blockquote><i>A collection of original ideas for unforgettable wedding gift.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/wedding_congratulations/wedding_games.php">Wedding games</a></h3>
	<blockquote><i>Who are you? Who, where, when?</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/wedding_congratulations/wedding_cards.php">Free wedding cards</a></h3>
	<blockquote><i>Beautiful ecards with wedding wishes.</i></blockquote>
</article>


<h2><a href="https://congratulationsto.com/baby_congratulations/new_parents_congratulations.php">New baby congratulations to parents</a></h2>
<article>
	<h3><a href="https://congratulationsto.com/baby_congratulations/congratulations_to_new_parents.php">Congratulations to the new parents</a></h3>
	<blockquote><i>A beautiful baby has come to fill your lives with joy and bliss.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/baby_congratulations/congratulations_to_birth_of_baby.php">Congrats to birth of baby</a></h3>
	<blockquote><i>Only perfect things happen to such a beautiful couples!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/baby_congratulations/congratulations_to_become_a_father.php">Congratulations to become a father</a></h3>
	<blockquote><i>Parenthood is one of the best journeys in life.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/baby_congratulations/congratulations_to_be_mother.php">Congratulatory messages to be a mother</a></h3>
	<blockquote><i>Hey new Mom! Here&#39;s wishing you a lot of fun with your baby!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/baby_congratulations/congratulations_to_first_time_parents.php">Congratulations to first time parents</a></h3>
	<blockquote><i>Good luck to a great happy family and a first time mum and dad!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/baby_congratulations/congratulations_to_having_a_baby.php">Congrats to having a baby</a></h3>
	<blockquote><i>Get ready for lots of laughter and loud cries, big hugs and sleepless nights!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/baby_congratulations/new_born_wishes.php">New born wishes</a></h3>
	<blockquote><i>Just to say &#34;Hi&#34; to the new member of the family!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/baby_congratulations/religious_congratulations_new_baby.php">Religious congratulations on new baby</a></h3>
	<blockquote><i>May God&#39;s blessings be with you and your little one today and always.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/baby_congratulations/funny_new_baby_quotes.php">Funny new baby quotes</a></h3>
	<blockquote><i>A perfect example of minority rule is a new baby in the house.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/baby_congratulations/new_baby_poems.php">New baby poems</a></h3>
	<blockquote><i>A cute baby girl (boy) came home today, /And lots of wishes I send your way!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/baby_congratulations/baby-shower-messages-and-quotes.php">Baby shower messages</a></h3>
	<blockquote><i>Sending hugs and kisses to you on this baby shower.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/wedding_congratulations/congratulations-on-your-pregnancy.php">Wishes for pregnant woman</a></h3>
	<blockquote><i>Wishing all the joy of anticipation!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/baby_congratulations/new_baby_cards.php">New baby cards</a></h3>
	<blockquote><i>Free ecards with beautiful pictures of little babies, flowers, cakes and toys.</i></blockquote>
</article>

<br/>
<script id="mNCC4" language="javascript">
    medianet_width = "336";
    medianet_height = "280";
    medianet_crid = "142533074";
    medianet_versionId = "3111299"; 
</script>
<script src="//contextual.media.net/nmedianet.js?cid=8CU89N2CZ"></script>

<h2><a href="https://congratulationsto.com/job_congratulations/job_congratulations.php">Job congratulations to boss and colleagues</a></h2>
<article>
	<h3><a href="https://congratulationsto.com/job_congratulations/congratulations_to_boss.php">Congrats to boss</a></h3>
	<blockquote><i>You are appreciated by so many! Take some time for yourself this boss&#39;s day.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/job_congratulations/new_job_wishes.php">New job wishes</a></h3>
	<blockquote><i>My greetings and the best wishes for you in this new stage!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/job_congratulations/congratulations_on_promotion_to_friend.php">Congratulations on promotion to friends</a></h3>
	<blockquote><i>Enjoy the fruits of your labor!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/job_congratulations/promotion_congratulations.php">Promotion congratulatory messages</a></h3>
	<blockquote><i>Your turn has come at last!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/job_congratulations/congratulations_to_business_partner.php">Congratulations to business partner</a></h3>
	<blockquote><i>With this success, comes greater opportunities and challenges.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/job_congratulations/congratulations_to_colleague.php">Congrats wording to colleague</a></h3>
	<blockquote><i>I am very happy for you because of the rise obtained!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/job_congratulations/retirement_wishes.php">Retirement wishes</a></h3>
	<blockquote><i>You was the best co worker anyone could ever wish for!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/job_congratulations/farewell-wishes.php">Farewell quotes</a></h3>
	<blockquote><i>It is sad toÂ see youÂ leave.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/job_congratulations/congratulations_to_employee.php">Congratulations to employee</a></h3>
	<blockquote><i>Your dedication, talent and abilties have earned you a promotion.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/job_congratulations/congratulations_for_achievement.php">Congrats for achievement</a></h3>
	<blockquote><i>You have made us all proud. Keep up the good work!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/job_congratulations/religious_congratulations_on_new_job_promotion.php">Religious congratulations on new job or promotion</a></h3>
	<blockquote><i>Prayers and God&#39;s protection will lead you to even greater success!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/job_congratulations/good_job_quotes.php">Good job quotes</a></h3>
	<blockquote><i>A success well deserved, an occasion worth celebrating!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/congratulations_letters/congratulations_letter_on_promotion.php">Congratulatory letter on promotion</a></h3>
	<blockquote><i>It was with great pleasure to hear of your promotion to (position).</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/job_congratulations/funny_job_congratulations.php/">Funny job congrats</a></h3>
	<blockquote><i>I heard you earned a new fancy job title.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/job_congratulations/appointment_congratulations.php">Appointment congratulation</a></h3>
	<blockquote><i>I wish you the best in this new term of office.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/job_congratulations/office_gift_ideas.php">Office gift ideas</a></h3>
	<blockquote><i>Here you will find great corporate gift ideas for your dear boss, colleagues or customers.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/job_congratulations/ecards_work.php">Ecards work</a></h3>
	<blockquote><i>Beautiful and unique business ecards.</i></blockquote>	
</article>


<h2><a href="https://congratulationsto.com/education_congratulations/education_congratulations.php">Education congratulations on graduation to students</a></h2>
<article>
	<h3><a href="https://congratulationsto.com/education_congratulations/congratulations_on_graduation.php">Congratulations on graduation</a></h3>
	<blockquote><i>You have reached an important time in life, and achieved a wonderful result.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/education_congratulations/congratulations_to_students.php">Congrats to students</a></h3>
	<blockquote><i>You worked hard and you did it!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/education_congratulations/diploma_congratulations.php">Diploma gongratulatory words</a></h3>
	<blockquote><i>Congratulations from all of us on getting your degree. Now enjoy your summer!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/education_congratulations/graduation_quotes.php">Graduation quotes</a></h3>
	<blockquote><i>Happy Graduation Day! Your reward lies ahead.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/education_congratulations/education_wishes.php">Education quotes</a></h3>
	<blockquote><i>Tomorrow belongs to those who prepare for it today.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/education_congratulations/graduation_religious_quotes.php">Graduation religious quotes</a></h3>
	<blockquote><i>Anything is possible when you just believe in God and in yourself.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/education_congratulations/graduation_messages.php">Graduation messages</a></h3>
	<blockquote><i>We&#39;re celebrating you today!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/education_congratulations/exam_congratulations.php">Exam congratulatory messages</a></h3>
	<blockquote><i>Passed exam is a happy event. I witnessed how hard you studied.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/education_congratulations/free_graduation_cards.php">Free graduation cards</a></h3>
	<blockquote><i>Cards with quotes to graduates, students for passing exams or earning diploma.</i></blockquote>
</article>


<h2><a href="https://congratulationsto.com/various/various_congratulations.php">Congratulations on various occasions</a></h2>
<article>
	<h3><a href="https://congratulationsto.com/various/poems_for_congratulations.php">Poems for congratulations</a></h3>
	<blockquote><i>Follow your dreams and reach for the stars / Wherever you go just follow your heart.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/various/funny-birthday-meme.php">Happy birthday meme</a></h3>
	<blockquote><i>Wishing the year that lies ahead brings many unexpected pleasant happenings!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/various/birthday_anniversary_wishes.php">Milestone Birthday wishes</a></h3>
	<blockquote><i>Wishing the year that lies ahead brings many unexpected pleasant happenings!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/various/funny-birthday-wishes.php">Funny Bday wishes</a></h3>
	<blockquote><i>Birthdays are like bank accounts. The more you worry about them, the less fun you have.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/various/birthday_congratulations.php">Birthday congratulatory words</a></h3>
	<blockquote><i>Wishing you a happy and crazy birthday filled with wonderful surprises!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/various/birthday-wishes.php">Wishes for Birthday</a></h3>
	<blockquote><i>I wish you a ÑÐµrfÐµÑt birthdÐ°Ñ and Ð°ll thÐ°t lifÐµ has tÐ¾ offer.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/various/birthday-facebook-wishes.php">Birthday wishes for Facebook</a></h3>
	<blockquote><i>I wish you a Happy Birthday and successful year to come.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/various/good-morning-wishes.php">Good morning wishes</a></h3>
	<blockquote><i>Good morning I say to you and send a passionate kiss.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/various/engagement_wishes.php">Engagement wishes</a></h3>
	<blockquote><i>Your love has reached new heights!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/wedding_congratulations/engagement-gift-ideas.php">Engagement gift ideas</a></h3>
	<blockquote><i>Before the engagement a lot of questions are raised by friends and relatives</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/various/new_home_congratulations.php">New home congrats</a></h3>
	<blockquote><i>A new home is a place for memories to be made and dreams to come true.</i></blockquote>	
</article>
<article>
	<h3><a href="https://congratulationsto.com/various/funny_congratulations.php">Funny congratulations</a></h3>
	<blockquote><i>Hoping you dance this night away or at least stay awake...</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/various/congratulations_jokes.php">Congratulatory jokes</a></h3>
	<blockquote><i>Everyone&#39;s here saying greetings to you! Can you believe it?</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/various/christian_congratulations.php">Christian congratulations</a></h3>
	<blockquote><i>May the Holy Spirit fill your heart and grant you strength to do God&#39;s will.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/various/sports_congratulations.php">Sports congrats</a></h3>
	<blockquote><i>You&#39;re a superstar!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/various/stay-safe-and-healthy.php">Stay safe and healthy</a></h3>
	<blockquote><i>Stay healthy and we&#39;ll get through this.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/various/gift-ideas-for-mother.php">Mother gift ideas</a></h3>
	<blockquote><i>How to cheer your mother!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/various/reply_to_congratulations.php">Reply to congratulation message</a></h3>
	<blockquote><i>Thanks so much for thinking of me!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/various/synonyms_for_congratulations.php">Synonyms for congratulations</a></h3>
	<blockquote><i>Greetings, Salutations, Hooray!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/various/ecards_congratulations.php">Ecards congratulation</a></h3>
	<blockquote><i>Beautiful pictures with nice wording and best wishes!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/various/spanish_congratulations.php">Spanish congrats words</a></h3>
	<blockquote><i>Felicitaciones, Felicidades, Enhorabuena!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/various/feliz-cumpleanos-amiga.php">Feliz cumpleanos amiga</a></h3>
	<blockquote><i>Que tengas el mejor cumpleanos de tu vida!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/various/feliz-cumpleanos-gracioso.php">Feliz cumpleaÃ±os gracioso</a></h3>
	<blockquote><i>AprovÃ©chalo al mÃ¡ximo!</i></blockquote>
</article>


<h2><a href="https://congratulationsto.com/holidays_wishes/holidays_wishes.php">Holidays wishes and quotes</a></h2>
<article>
	<h3><a href="https://congratulationsto.com/various/happy_independence_day.php">Happy independence day</a></h3>
	<blockquote><i>Wishing you a fun and festive 4th of July celebration!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/various/halloween_wishes.php">Halloween wishes</a></h3>
	<blockquote><i>Wishing you a fun Halloween filled with magical surprises!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/various/halloween_poems.php">Halloween poems</a></h3>
	<blockquote><i>When spooks abound and ghosts are seen, I&#39;ll keep you safe on Halloween</i></blockquote>	
</article>
<article>
	<h3><a href="https://congratulationsto.com/various/halloween-words.php">Halloween words</a></h3>
	<blockquote><i>Hope you have a spirited Halloween</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/various/thanksgiving_wishes.php">Thanksgiving wishes</a></h3>
	<blockquote><i>May your home be blessed with all of the small things that matter most.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/holidays_wishes/thanksgiving-messages.php">Thanksgiving messages</a></h3>
	<blockquote><i>Wishing you a Thanksgiving filled with blessings and happiness!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/holidays_wishes/thanksgiving-poems.php">Thanksgiving rhymes</a></h3>
	<blockquote><i>Enjoy the meal and family day, a Thanksgiving feast now comes our way!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/holidays_wishes/christmas_congratulations.php">Christmas congratulations</a></h3>
	<blockquote><i>We want to take the time to say thank you for all you do, and to wish you a blessed and joyful Christmas!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/holidays_wishes/short_christmas_poems.php">Short Christmas poems</a></h3>
	<blockquote><i>I send my wish so fine and true/ This holy evening just to you!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/holidays_wishes/quotes_for_christmas.php">Quotes for Christmas</a></h3>
	<blockquote><i>The spirit of Christmas is about making room for everyone.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/holidays_wishes/funny_christmas_wishes.php">Funny Christmas wishes</a></h3>
	<blockquote><i>Hope your Christmas is out of this world!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/holidays_wishes/christmas_religious_quotes.php">Christmas religious quotes</a></h3>
	<blockquote><i>May your season be touched with the simple grace of Christ&#39;s love.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/holidays_wishes/christmas_cards_verses.php">Christmas cards verses</a></h3>
	<blockquote><i>For one who&#39;s very dear - have a very joyous year!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/holidays_wishes/merry_christmas_messages.php">Merry Christmas messages</a></h3>
	<blockquote><i>May the gift of love be your greatest present this year!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/holidays_wishes/christmas_words.php">Christmas words</a></h3>
	<blockquote><i>May you share the season with the ones you love.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/holidays_wishes/wishes_for_christmas.php">Wishes for Christmas</a></h3>
	<blockquote><i>Let us share in the spirit of peace and joy this holiday season.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/holidays_wishes/new_year_congratulations.php">New Year congratulations</a></h3>
	<blockquote><i>A new year, a fresh start and infinite possibilities.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/holidays_wishes/happy_valentines_day.php">Happy Valentines day</a></h3>
	<blockquote><i>I will love you forever!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/holidays_wishes/funny_valentines_messages.php">Funny Valentines messages</a></h3>
	<blockquote><i>Be my Valentine or...</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/holidays_wishes/valentine_wishes.php">Valentine wishes</a></h3>
	<blockquote><i>All I want to do is shower you with hugs, kisses and all my love forever!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/holidays_wishes/womens_day_wishes.php">Women&#39;s day wishes</a></h3>
	<blockquote><i>Women can do anything! Congratulations on International Women&#39;s Day!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/holidays_wishes/gift-ideas-womens-day.php">Women&#39;s day gift ideas</a></h3>
	<blockquote><i>Let your woman feel like the most important and special person in your life.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/holidays_wishes/fools_day_wishes.php">Fool&#39;s day wishes</a></h3>
	<blockquote><i>Merry Christmas! Whoops..., Happy April 1!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/holidays_wishes/easter_wishes.php">Easter wishes</a></h3>
	<blockquote><i>Wishing you a very Happy Easter spent with the ones you love most.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/holidays_wishes/happy_easter_messages.php">Happy Easter messages</a></h3>
	<blockquote><i>This Easter, may you enjoy all the lovely gifts that Springtime has to offer!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/holidays_wishes/easter_congratulations.php">Easter congratulations</a></h3>
	<blockquote><i>Sending you love and good wishes on Easter!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/holidays_wishes/mothers_day_congratulations.php">Mother&#39;s day congratulations</a></h3>
	<blockquote><i>For a wonderful mom on Mother&#39;s day.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/holidays_wishes/mothers_day_wishes.php">Mother&#39;s day wishes</a></h3>
	<blockquote><i>Dear Mom, You&#39;re Everything to us.</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/holidays_wishes/fathers_day_messages.php">Father&#39;s day messages</a></h3>
	<blockquote><i>You&#39;re a first class Daddy!</i></blockquote>
</article>
<article>
	<h3><a href="https://congratulationsto.com/holidays_wishes/quotes_for_fathers_day.php">Quotes for Father&#39;s day</a></h3>
	<blockquote><i>No matter how much time passes you will always be my superdad!</i></blockquote>
</article>

<br/>
<br/>

<div class="ad-336x280">
<!-- congrat-336x280_bottom -->
<ins class="adsbygoogle" style="display:inline-block;width:336px;height:280px" data-ad-client="ca-pub-8040849356053987" data-ad-slot="3221541914"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
</div>

<br/>

<!-- ct_matched1 -->
<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3346332582457553" data-ad-slot="2278241870" data-ad-format="autorelaxed"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

<br/>

<br/>

<br/>

<div class="desc">
<i>Thank you for visiting our website. We hope you enjoyed viewing our topics and found some beautiful and inspirational quotes for your beloved family members, best friends or coworkers. Help us to improve this collection! Your comments sent by email are greatly appreciated. We would like to read them! Also you can tell us what other important themes in which languages you wish to see on Congratulationsto.com. We would like to know what public holidays, occasions for celebration and which special people we have missed. You may also send us your own greeting messages, words and we will put them to the website. And don&#39;t forget to tell your Facebook friends about this useful website. May you have a beautiful day and please come back for future updates.</i>
</div>

<br/>
<br/>

			</section><!-- /content -->
		</div><!-- /content-wrapper -->
		
		<aside id="sponsors-wrapper">

			<div style="padding: 0 20px 0 40px;">
				<div class="g-plusone"></div>
				<div style="height: 8px;"></div>
				<div class="fb-like" data-href="https://www.facebook.com/congratulationsto" data-layout="button_count" data-action="like" data-show-faces="false" data-share="false"></div>
				<div style="height: 12px;"></div>
				<a href="https://twitter.com/CongratsToAll" class="twitter-follow-button" data-show-count="false" data-size="large" data-show-screen-name="false" data-dnt="true">Follow @CongratsToAll</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^https:/.test(d.location)?'https':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
			</div>
			<br/>
			

			<br/>
			<br/>
			
<div class="padd-left-20">
<script type="text/javascript">
google_ad_client = "ca-pub-8040849356053987";
/* congrat-160-600 */
google_ad_slot = "7717621511";
google_ad_width = 160;
google_ad_height = 600;
</script>
<script type="text/javascript" src="https://pagead2.googlesyndication.com/pagead/show_ads.js">
</script>
</div>

			<br/>

<div class="padd-left-10">
<script type="text/javascript">
google_ad_client = "ca-pub-8040849356053987";
/* congrat-180x90 */
google_ad_slot = "9229440319";
google_ad_width = 180;
google_ad_height = 90;
</script>
<script type="text/javascript" src="https://pagead2.googlesyndication.com/pagead/show_ads.js">
</script>
</div>

			<br/>

			<br/>
			<p class="sb-title">Links Â  Â  Â  Â  Â </p>
			<ul class="friends">
				<li><a href="https://www.funny-quotes.eu/"><b>Quotes funny</b></a></li>
				<li><a href="https://moviequotes.eu/"><b>Quotes from movies</b></a></li>
						</ul>
			
			<br/><br/>

		</aside><!-- /sponsors-wrapper -->
	</div><!-- /info -->
	
	<!-- :::::::: FOOTER :::::::: -->
	<footer>
		<div class="contacts">
			<div class="vcard">
				<span class="fn">Congratulationsto Â© 2012-2021</span>
				<div class="org">Inmodus</div>
				<div>Email: <span class="email"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="7e1a1b1d110a110e171d0d3e1a1b1d110a110e171d0d501d1113">[email&#160;protected]</a></span></div>
			</div>
		</div>
		<div class="contacts"><a href="https://congratulationsto.com/privacy-policy.php">Privacy Policy</a></div>
		<div style="height: 100px;"></div>
	</footer>

</div><!-- /container -->


<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11&appId=756156561090444&autoLogAppEvents=1';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
<script type="text/javascript">
  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();
</script>
<script type="text/javascript">
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-39730775-1', 'congratulationsto.com');
  ga('send', 'pageview');

</script>




<script type='text/javascript' style='display:none;' async>
</script>

<script type="text/javascript" data-cfasync="false"></script></body></html>