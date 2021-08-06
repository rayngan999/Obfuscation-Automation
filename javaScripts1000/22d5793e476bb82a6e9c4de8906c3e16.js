







<!DOCTYPE html>






<!-- Using brand query parameter to decide branding for the page -->





	
	
	
	
	















<!DOCTYPE html>


















<!DOCTYPE html>
<html lang="en-US">
<head>


<!-- // removing loginnew-wait.jsp from search results requirement OLB-7248  -->

<!-- // removing logout.jsp from search results requirement OLB-4998  -->









<!-- // removing logout.jsp from search results requirement OLB-4998  -->


<!-- // removing loginnew-wait.jsp from search results requirement OLB-7248  -->

	<link href="/efs/efs/web-ui/img/mobile-desktop-icons/apple-touch-icon.png" rel="apple-touch-icon">
	<link href="/efs/efs/web-ui/img/mobile-desktop-icons/apple-touch-icon-76x76.png" rel="apple-touch-icon" sizes="76x76">
	<link href="/efs/efs/web-ui/img/mobile-desktop-icons/apple-touch-icon-120x120.png" rel="apple-touch-icon" sizes="120x120">
	<link href="/efs/efs/web-ui/img/mobile-desktop-icons/apple-touch-icon-152x152.png" rel="apple-touch-icon" sizes="152x152">
	<link href="/efs/efs/web-ui/img/mobile-desktop-icons/apple-touch-icon-180x180.png" rel="apple-touch-icon" sizes="180x180">
	<link href="/efs/efs/web-ui/img/mobile-desktop-icons/icon-hires.png" rel="icon" sizes="192x192">
	<link href="/efs/efs/web-ui/img/mobile-desktop-icons/icon-normal.png" rel="icon" sizes="128x128">
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<!--Exclude Ensighten library incase skipEnsighten is "true"-->
	
	<script type="text/javascript">
		var timeStamp = new Date().toString();
		var pageURL = ((window.frames && window.frames.length) ? window.frames[0].location.href : window.location.href);
		var pageName = ((window.document && window.document.title) ? window.document.title : "not available");
		var digitalData = {
			"sessionInformation": {
				"zipCode": "",
				"country": "",
				"city": "",
				"state": "",
				"timeStamp": timeStamp
			},
			"customerAttributes": {
				"CISKey": "",
				"DirectoryID": ""
			},
			"contentInteractions": {
				"siteName": "OLB",
				"siteSection": "Authenticated",
				"pageName": pageName,
				"pageURL": pageURL,
				"pageType": "Legacy"
			}
		};
		if (typeof(parent.Bootstrapper) !== "undefined" && parent.Bootstrapper.ensEvent && parent.Bootstrapper.ensEvent.trigger){
			if(window.frames && window.frames.length) parent.Bootstrapper.ensEvent.trigger("OLBURLChangeFrame"); else parent.Bootstrapper.ensEvent.trigger("OLBURLChangeWindow");
		}
	</script>
	<script type="text/javascript" src="//nexus.ensighten.com/citizensbank/olbprod/Bootstrap.js"></script>
	

	<!-- BEGIN LivePerson Monitor -->
	<script type="text/javascript">
		// Production environment check from olb-web-ui ./js/mv/_onlinebanking/config.js
		var isProductionEnvironment = !!document.location.hostname.match(/(?:^.*\.|^)citizensbankonline.com/);
		// Set LivePerson account number based on environment
		var lpAccountNumber = isProductionEnvironment ? '83789770' : '89632304';

		window.lpTag = window.lpTag || {}, 'undefined' == typeof window.lpTag._tagCount ? (window.lpTag = { wl: lpTag.wl || null, scp: lpTag.scp || null, 
		site: lpAccountNumber || '', section: lpTag.section || '', tagletSection: lpTag.tagletSection || null, autoStart: lpTag.autoStart !== !1, ovr: lpTag.ovr || 
		{}, _v: '1.10.0', _tagCount: 1, protocol: 'https:', events: { bind: function (t, e, i) { lpTag.defer(function () { lpTag.events.bind(t, e, i) }, 0) }, 
		trigger: function (t, e, i) { lpTag.defer(function () { lpTag.events.trigger(t, e, i) }, 1) } }, defer: function (t, e) { 0 === e ? (this._defB = this._defB || [], 
		this._defB.push(t)) : 1 === e ? (this._defT = this._defT || [], this._defT.push(t)) : (this._defL = this._defL || [], this._defL.push(t)) }, 
		load: function (t, e, i) { var n = this; setTimeout(function () { n._load(t, e, i) }, 0) }, _load: function (t, e, i) { var n = t; t || 
		(n = this.protocol + '//' + (this.ovr && this.ovr.domain ? this.ovr.domain : 'lptag.liveperson.net') + '/tag/tag.js?site=' + this.site); 
		var o = document.createElement('script'); o.setAttribute('charset', e ? e : 'UTF-8'), i && o.setAttribute('id', i), o.setAttribute('src', n), 
		document.getElementsByTagName('head').item(0).appendChild(o) }, init: function () { this._timing = this._timing || {}, 
		this._timing.start = (new Date).getTime(); var t = this; window.attachEvent ? window.attachEvent('onload', function () { t._domReady('domReady') }) : 
		(window.addEventListener('DOMContentLoaded', function () { t._domReady('contReady') }, !1), window.addEventListener('load', function () 
		{ t._domReady('domReady') }, !1)), 'undefined' === typeof window._lptStop && this.load() }, start: function () { this.autoStart = !0 }, _domReady: function (t)
		{ this.isDom || (this.isDom = !0, this.events.trigger('LPT', 'DOM_READY', { t: t })), this._timing[t] = (new Date).getTime() }, vars: lpTag.vars || [], 
		dbs: lpTag.dbs || [], ctn: lpTag.ctn || [], sdes: lpTag.sdes || [], hooks: lpTag.hooks || [], identities: lpTag.identities || [], ev: lpTag.ev || [] }, 
		lpTag.init()) : window.lpTag._tagCount += 1;
	</script>
	<!-- END LivePerson Monitor -->

<title> Online Login | Citizens </title>
<meta name="description" content="Log in to your Citizens account by entering your User ID and password so you can securely view and manage your accounts online.">

<script src="/efs/efs/jsp-ns/pm_fp.js"> </script>






<link rel="stylesheet" href="/efs/efs/jsp-ns/inc/css/jquery-ui-1.10.3.custom.min.css">
<link rel="stylesheet" href="/efs/efs/jsp-ns/inc/css/normalize.css">
<link rel="stylesheet" href="/efs/efs/jsp-ns/inc/css/main.css">
<link rel="stylesheet" href="/efs/efs/jsp-ns/inc/css/flows.css">
<link rel="stylesheet" href="/efs/efs/jsp-ns/inc/css/ad-containers.css">

<script src="/efs/efs/jsp-ns/scripts/modernizr-2.6.2.min.js"></script>

<script>window.jQuery || document.write('<script src="/efs/efs/jsp-ns/scripts/jquery-1.9.1.min.js"><\/script>')</script>
<script src="/efs/efs/jsp-ns/scripts/plugins.js"></script>

<script src="/efs/efs/jsp-ns/scripts/main.js"></script>


<script src="/efs/efs/jsp-ns/scripts/placeholders.min.js"></script>


<!--[if lt IE 9]>
<script src="/efs/efs/jsp-ns/scripts/html5shiv.js"></script>
<![endif]-->





<!--[if IE]>
<style type='text/css'>
form select#SavedUserID {
    width : 200px;
}
</style>
<![endif]-->


<META http-equiv="Refresh" content="580; URL=/efs/servlet/efs/invalidate-session.jsp">



<style>
	input[type=password].error {
		border-color : red;
	}
</style>



                              <script>!function(a){var e="https://s.go-mpulse.net/boomerang/",t="addEventListener";if("False"=="True")a.BOOMR_config=a.BOOMR_config||{},a.BOOMR_config.PageParams=a.BOOMR_config.PageParams||{},a.BOOMR_config.PageParams.pci=!0,e="https://s2.go-mpulse.net/boomerang/";if(window.BOOMR_API_key="A9397-AA2WQ-WQN9E-BBVTK-Y8BXE",function(){function n(e){a.BOOMR_onload=e&&e.timeStamp||(new Date).getTime()}if(!a.BOOMR||!a.BOOMR.version&&!a.BOOMR.snippetExecuted){a.BOOMR=a.BOOMR||{},a.BOOMR.snippetExecuted=!0;var i,_,o,r=document.createElement("iframe");if(a[t])a[t]("load",n,!1);else if(a.attachEvent)a.attachEvent("onload",n);r.src="javascript:void(0)",r.title="",r.role="presentation",(r.frameElement||r).style.cssText="width:0;height:0;border:0;display:none;",o=document.getElementsByTagName("script")[0],o.parentNode.insertBefore(r,o);try{_=r.contentWindow.document}catch(O){i=document.domain,r.src="javascript:var d=document.open();d.domain='"+i+"';void(0);",_=r.contentWindow.document}_.open()._l=function(){var a=this.createElement("script");if(i)this.domain=i;a.id="boomr-if-as",a.src=e+"A9397-AA2WQ-WQN9E-BBVTK-Y8BXE",BOOMR_lstart=(new Date).getTime(),this.body.appendChild(a)},_.write("<bo"+'dy onload="document._l();">'),_.close()}}(),"".length>0)if(a&&"performance"in a&&a.performance&&"function"==typeof a.performance.setResourceTimingBufferSize)a.performance.setResourceTimingBufferSize();!function(){if(BOOMR=a.BOOMR||{},BOOMR.plugins=BOOMR.plugins||{},!BOOMR.plugins.AK){var e=""=="true"?1:0,t="",n="o7wglkfydqh3ayiik4hq-f-08fe40f84-clientnsv4-s.akamaihd.net",i="false"=="true"?2:1,_={"ak.v":"32","ak.cp":"701581","ak.ai":parseInt("354307",10),"ak.ol":"0","ak.cr":16,"ak.ipv":4,"ak.proto":"h2","ak.rid":"5a491ef","ak.r":25990,"ak.a2":e,"ak.m":"a","ak.n":"essl","ak.bpcip":"119.236.101.0","ak.cport":65462,"ak.gh":"104.84.150.122","ak.quicv":"","ak.tlsv":"tls1.3","ak.0rtt":"","ak.csrc":"-","ak.acc":"","ak.t":"1627936527","ak.ak":"hOBiQwZUYzCg5VSAfCLimQ==FBrGh4K5psVxksW6aZ1bPvBtZ2vcfa/RVsKhFZ0bX38RWzK1jgU4SB/ta7lJG3OdvkXSTg3Wb4aUidHSI0VZzBOT/JsPaLjGAKbisVh4UQ9WRpBZdAGG+5fYMDMHYgs9wL7mtIGmQx3kkFyB67t+3udOWKEA7xY0jeTk3tcqGiMlXL4UauDDG9G/Fca8g3PXrCZx/ApRuYHlODoYFej2E0KxLyTzySVZ9gTlpzxlrHyakGGC3BA9SYy+a/nHBob52MieUM7/bL+0xUHFquIqoppkMnA629VBr2OdyCw5VT0TvIhzgmouWF1n0W1bbpbg5H+tDtR6OykR/XPINKPUQ/RuzPhP+QaQbeCPXkegTeGisVQAhzMKf52jkxsKeMvH2pehTNFT31jegUfNGsU+98aUuPPyl1x7YGWFoQ8dXGg=","ak.pv":"118","ak.dpoabenc":"","ak.tf":i};if(""!==t)_["ak.ruds"]=t;var o={i:!1,av:function(e){var t="http.initiator";if(e&&(!e[t]||"spa_hard"===e[t]))_["ak.feo"]=void 0!==a.aFeoApplied?1:0,BOOMR.addVar(_)},rv:function(){var a=["ak.bpcip","ak.cport","ak.cr","ak.csrc","ak.gh","ak.ipv","ak.m","ak.n","ak.ol","ak.proto","ak.quicv","ak.tlsv","ak.0rtt","ak.r","ak.acc","ak.t","ak.tf"];BOOMR.removeVar(a)}};BOOMR.plugins.AK={akVars:_,akDNSPreFetchDomain:n,init:function(){if(!o.i){var a=BOOMR.subscribe;a("before_beacon",o.av,null,null),a("onbeacon",o.rv,null,null),o.i=!0}return this},is_complete:function(){return!0}}}}()}(window);</script><script >bazadebezolkohpepadr="881375329"</script><script type="text/javascript" src="https://www3.citizensbankonline.com/akam/11/3488b9c6"  defer></script></head>
<body class="responsive-enabled">
	<script>
	if(self == top) {
		var thebody = document.getElementsByTagName('body')[0]
		thebody.style.display = "block"
	} else {
		top.location = self.location
	}
	
	</script>
    


<script type="text/javascript" src="/efs/efs/js/tealeaf.js"></script>
<!-- begin CITIZENS Hosted Header -->
<div class="citizens-header">

    <!-- overlay to hide elements until CSS is loaded -->
    <style>
        .citizens-header-footer-overlay{ opacity:1; background-color:#fff; position:fixed; width:100%; height:100%; top:0px; left:0px; z-index:1000; }
        .citizens-header-footer-overlay .centered-content { width: 100%; max-width: 1060px; padding: 0 20px; margin: 0 auto; font-family: arial, helvetica, san-serif; font-size: 14px;}
        .citizens-header-footer-overlay .responsive-enabled .centered-content { width: auto; max-width: 1060px; }
        .citizens-header-footer-overlay .page-logo { float: none; }
        .citizens-header-footer-overlay .page-logo img{ margin: 10px; float: none;}
        .citizens-header-footer-overlay .topshadow {
            position: absolute; width: 100%; top: 100px; z-index: 5; height: 8px;
            background: -webkit-radial-gradient(50% 100%, farthest-side, rgba(0, 0, 0, 0.1), transparent 100%); background: radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0) 100%); background-repeat: no-repeat; background-size: cover;
        }
    </style>
    <div class="citizens-header-footer-overlay">
        <div>
            <div class="topshadow"></div>
            <div class="centered-content clearfix">

                <a href="#" class="page-logo">
                    <!-- Display the brand logo for either citizens one or citizen bank customers -->
                    <img border="0" alt="Citizens" width="203" height="25" src="/efs/hhf/img/CTZ_Green-01.png">
                </a>
                <div style="text-align: center;">
					Please wait... <br />
                    <!-- ajax-loader.gif as base 64 -->
                    <img border="0" width="16" height="11" alt="loading..." src="data:image/gif;base64,R0lGODlhEAALAPQAAP///wCaeNrv69Dr5er28wacewCaeC6skILNvGC/qrrj2iKniUq3n4rQwGTBrL7k3CaojASbek64oeb08djv6fT6+Diwldzw7PL597bh2KDYzMrp4u739QAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCwAAACwAAAAAEAALAAAFLSAgjmRpnqSgCuLKAq5AEIM4zDVw03ve27ifDgfkEYe04kDIDC5zrtYKRa2WQgAh+QQJCwAAACwAAAAAEAALAAAFJGBhGAVgnqhpHIeRvsDawqns0qeN5+y967tYLyicBYE7EYkYAgAh+QQJCwAAACwAAAAAEAALAAAFNiAgjothLOOIJAkiGgxjpGKiKMkbz7SN6zIawJcDwIK9W/HISxGBzdHTuBNOmcJVCyoUlk7CEAAh+QQJCwAAACwAAAAAEAALAAAFNSAgjqQIRRFUAo3jNGIkSdHqPI8Tz3V55zuaDacDyIQ+YrBH+hWPzJFzOQQaeavWi7oqnVIhACH5BAkLAAAALAAAAAAQAAsAAAUyICCOZGme1rJY5kRRk7hI0mJSVUXJtF3iOl7tltsBZsNfUegjAY3I5sgFY55KqdX1GgIAIfkECQsAAAAsAAAAABAACwAABTcgII5kaZ4kcV2EqLJipmnZhWGXaOOitm2aXQ4g7P2Ct2ER4AMul00kj5g0Al8tADY2y6C+4FIIACH5BAkLAAAALAAAAAAQAAsAAAUvICCOZGme5ERRk6iy7qpyHCVStA3gNa/7txxwlwv2isSacYUc+l4tADQGQ1mvpBAAIfkECQsAAAAsAAAAABAACwAABS8gII5kaZ7kRFGTqLLuqnIcJVK0DeA1r/u3HHCXC/aKxJpxhRz6Xi0ANAZDWa+kEAA7AAAAAAAAAAAA">
                </div>
            </div>
        </div>
    </div>
    <!-- end overlay -->

    <style>
        .account-section-title.checkmark h1 { padding: 0px 0px 5px 28px !important; }
        .mobile-alert-dot {min-width: 22px; min-height: 22px; width: auto; height: auto; max-width: 50px; max-height: 50px; padding: 5px; }
    </style>

    <!-- htmlContainer PREFIX -->
    <div class="citizens-header-footer">
        <div id="page-header" class="page-header">
            <!-- inc-header.html START -->
            <div class="topshadow"></div>
            <div class="centered-content clearfix">

                <a href="#" class="page-logo" tabindex="1">
                    <!-- Display the brand logo for either citizens one or citizen bank customers -->
                    <img border="0" alt="Citizens" width="203" height="25" src="/efs/hhf/img/CTZ_Green-01.png">
                </a>
                <div id="header-navigation-container"></div>

            </div>
            <!-- inc-header.html END -->
        </div>
    </div>
    <!-- htmlContainer SUFFIX -->


</div>
<!-- end CITIZENS Hosted Header -->




<div id="page-container" class="page-container">
	<div class="centered-content clearfix">
		<section id="top-content" class="page-region top-content">

    	</section>
    	<section id="main-container" class="main-container two-col layout-2-1 clearfix">

        	<!-- =================
        	MAIN CONTENT AREA START
        	================= -->
        	<section id="main-content" class="page-region main-content">

	<div class="account-table account-table-full">
    	<span class="account-table-border"></span>
    	<div class="account-table-content">
            <div class="account-content-container">
                <div class="account-table-body">
                    <header class="account-section-title clearfix account-secure">
                    <a href="#" class="mobile-help-trigger">Help</a>
                    
                            <h1>Secure Online Banking Login</h1>
                    
                                            
                    </header>
                    
                    






 





 








 

                    <div id="messagecontainer" class="error-message show-error" role="alert">The online user ID below does not match our records. Please review your information then try again. If you are still unable to continue, please call our Customer Service Center.</div>
                    <section class="account-section">
                        
                                    <form class="pay-transfer-options clearfix" action="https://www3.citizensbankonline.com/efs/servlet/efs/default.jsp" name="SignOn" id="frmSignOn" method="post">
                                    
                                    
                                    <div class="account-title clearfix">
                                            <p>Please enter your Online User ID and Password.</p>
                                    </div>
                                    
                                    
                                    <input type="hidden" name="CSRF_TOKEN" value="OPNB-MKTN-8G2O-UFGS-RTWH-SXSV-Q8PY-K159"/>
                                    <input type="hidden" name="BrandSettingsFile" value="citSettings.jsp">
                                    <input type="hidden" name="fp_deviceprint" value="" />
                                    <input type="hidden" name="fp_language" value="" />
                                    <input type="hidden" name="fp_timezone" value="" />
                                    <input type="hidden" name="fp_browser" value=""  />
                                    <input type="hidden" name="fp_screen" value="" />
                                    <input type="hidden" name="fp_software" value="" />
                                    <input type="hidden" name="pm_fp" value="" />
                                    <input type="hidden" name="RSASessionID" value="" />
				    <input type="hidden" name="asstFlow" value="" />
                                    <input type="hidden" name="initlogin" value="1" />
                                    <input type="hidden" name="enterUserIdMode" value="" />
		<div class="form-item label-right full-width clearfix">
	    
            
                
            
    
            
                <label for="UserID"><strong>Online User ID: </strong></label>
                <input tabindex="1" type="text" id="UserID" name="UserID" autocomplete="off" maxlength="20" class="required demo-username">
                <input type="hidden" name="enterUserIdMode" value="true" />
                <input type="hidden" id="SaveUserID" name="SaveUserID" value="" />
                
                        
            
                	<div class="full-width checkbox-item clearfix">
                            <input type="hidden" name="Register" id="Register" value="0">
                            <input type="checkbox" tabindex="5" disabled="disabled" id="cbSaveUserID" name="cbSaveUserID" style="vertical-align:top">
                            <span class="inline-tooltip">
                            <label for="cbSaveUserID">Remember User ID</label>

                            <span class="tooltip" tabindex="6" role="tooltip" aria-describedby="tooltip-content">
                                    <div class="tooltip-icon" title="Remember User ID tooltip"></div>
                                    <div class="tooltip-box">
                                    <div class="tooltip-content" id="aria-tooltip-content">

                                            <span class="tooltip-arrow"></span>
                                            <div>Select the &quot;Remember User ID&quot; box  on the Login page if you want to be remembered.</div>
                                            <br>
                                            <div>Please note, if the &quot;Remember User ID&quot; check box is not displayed on the Login page, click on the &quot;Login using different Online User ID&quot; link to display it.</div>
                                            <br>
                                            <div>DO NOT check this box if you are using a public device that is accessible to others.</div>
                                    </div>
                                    <div class="bottomshadow"></div>
                                    </div>
                                  
                            </span>
                            </span>
                    </div>
                
                    	<div class="form-item full-width">
                            
                            <label for="currentpassword"><strong>Password: </strong></label>
                           
                           
                            <input  tabindex="2" type="password" id="currentpassword" name="Password" maxlength="15" size="15" class="required demo-password">
                           
<!--                            <div class="show-hide">
                                <a id="showpswd">SHOW</a>
                            	</div>                           -->
                            	
                
                            
                    	</div>
                
                
                	
                        
			 	<span class="mobile-line-break"><a tabindex="7" style="font-size:16px!important" id="troublelogging" data-trigger="login-trouble" href="/efs/ui/tli/index.html">Trouble logging in?</a></span><br>
			
                
                      </div>
            <div id="fielderror" class="show-error" role="alert">We're sorry. That user ID and password does not match our records. Please try again, or do you need Login Assistance?</div>
            	<div class="form-actions">
                
                        
                
                
            <input type="submit" class="submit-button arrow" tabindex="3" data-trigger="next" value="Login"> <a  tabindex="8" href="http://www.citizensbank.com/" class="cancel">Cancel</a>           
            </div>
    </form>
        
                </section>
            </div>
            </div>
    	</div>
	</div>


  






<!DOCTYPE html>



</section> 

<!-- Brand type from query parameter -->


<aside id="main-sidebar" class="page-region main-sidebar">
	<div id="citizens-help" class="citizens-help sidebar-item sidebar-list-container sidebar-accordian mobile-modal">
	    <div class="sidebar-list-content">
	        <header class="sidebar-list-title">
	            <h3>Need Help?</h3>
	        </header>


	        <div id="faq-holder">
	        <form action="https://www3.citizensbankonline.com/efs/servlet/efs/login-assistance.jsp" name="frmAsst" id="frmAsst" method="post">
	           <input type="hidden" name="CSRF_TOKEN" value="OPNB-MKTN-8G2O-UFGS-RTWH-SXSV-Q8PY-K159"/>
               
               <input type="hidden" name="needHelp" value="1"/>

					<section class="toggle-list-container faq-container" id="faq-index-1">
	                	<a href="#" title="Expand contents of Where can I get login assistance for Online Banking?" aria-label="Expand Contents" class="sidebar-list-option-accordian showhide">Where can I get login assistance for Online Banking?</a>
						<ul class="loginfaq sidebar-list showhide-content">
							<li>
								<p>Simply click on &quot;Trouble logging in?&quot; link. Or, you can click on  &quot;View All Help Topics&quot; link, which appears on each screen.</p>
							</li>
						</ul>
	            	</section>

					<section class="toggle-list-container faq-container" id="faq-index-10">
						<a href="#" title="Expand contents of Is Online Banking secure?" aria-label="Expand Contents" class="sidebar-list-option-accordian showhide">Is Online Banking secure?</a>
						<ul class="loginfaq sidebar-list showhide-content">
							<li>
								<p>To make Online Banking secure, Citizens uses the highest level of encryption available today. Encryption is the process by which information is translated into un-interpretable code and then back to recognized information.<br>As an added measure, Online Banking gives you the capability to easily verify that you are on the authentic Citizens website and not on a fake site created by fraudsters. Just look for the green bar (or some variation of it) in your browser address. The green bar should remind you that &quot;green is good&quot; and that our website has passed a sophisticated authentication process, letting you know you are good to go.</p>
							</li>
						</ul>
					</section>

					<section class="toggle-list-container faq-container" id="faq-index-12">
						 <a href="#" aria-label="Expand Contents" class="sidebar-list-option-accordian showhide" title="Show contents of Should my browser address bar have a green indicator when I use Online Banking?">Should my browser address bar have a "green" indicator when I use Online Banking?</a>
						<ul class="loginfaq sidebar-list showhide-content">
							<li>
								<p>Yes. As an added measure, Online Banking gives you the capability to easily verify that you are on the authentic Citizens website and not on a fake site created by fraudsters. Just look for the green bar (or some variation of it) in your browser address. The green bar should remind you that &quot;green is good&quot; and that our website has passed a sophisticated authentication process, letting you know you are good to go.</p>
							</li>
						</ul>
					</section>

					<section class="toggle-list-container faq-container" id="faq-index-20">
						<a href="#" title="Expand contents of How do I log into Online Banking if IÃ¢ÂÂm a first-time user?" aria-label="Expand Contents" class="sidebar-list-option-accordian showhide">How do I log into Online Banking if I'm a first-time user?</a>
						<ul class="loginfaq sidebar-list showhide-content">
							<li>
								<p>Simply enter your Online User ID and Password and click &quot;LOGIN&quot;, then answer your Challenge Question (if presented). In some situations, your Online User ID will be your ATM/Debit Card number and your Password will be the last four digits of your Social Security number followed by &quot;Abcd&quot; (e.g. 1234Abcd). If you haven&#39;t already selected an Online User ID, you will be asked to do so.</p>
							</li>
						</ul>
					</section>

            </form>
            </div>

			<ul class="sidebar-list">
				<li class="cta-row">
					<a href="login-faqs.jsp" class="blue" target="_blank">View All Help Topics</a>
				</li>

					<li class="cta-row sign-up-prompt visible clearfix">
						<span>Haven't signed up for Online Banking?</span>
						<a href="/efs/ui/enrollment/index.html" class="cta orange">Enroll Now</a>
					</li>

			</ul>
		</div>
	</div>
</aside>



   <script type="text/javascript">
      $(document).ready(function() {
         $("#troubleloggingin1,#troubleloggingin2,#troubleloggingin3,#troubleloggingin4").click(function(e) {
            e.preventDefault();
            $("#frmAsst").attr("action","https://www3.citizensbankonline.com/efs/servlet/efs/login-assistance.jsp");
            $("#frmAsst").submit();
         });

         $("#resetpassword1").click(function(e) {
            e.preventDefault();
            $("#frmAsst").attr("action","https://www3.citizensbankonline.com/efs/servlet/efs/default-reset.jsp");
            $("#frmAsst").submit();
         });
      });
   </script>


  


		</section> 
	</div> 
</div> 





<!DOCTYPE html>



<!-- begin CITIZENS Hosted Footer -->
<div class="citizens-footer"></div>
<script src="/efs/hhf/js/citizensHeaderFooter-citizensns44583.js"></script>
<script type="text/javascript">

    if(typeof HHF === "undefined"){
        var el = document.querySelector(".citizens-header");
        el.innerHTML = '<div style="padding: .5em 1em; background: #FEF3F3; color: #F00;"><strong>Critical Error.</strong> Unable to load the header and footer at this time.</div>';
    } else {
        contentLoaded(window, function() {
            var hhfPromise = HHF.init({
                'showNav': false,
                'initialHelpRequest': false,
                'showTimeout': false,
                'useCSS': false
            });
            hhfPromise.done(function(args){
                console.log('hhfPromise.msg: ' + args.attributes.msg);
            });
            hhfPromise.fail(function(args){
                $('.citizens-header').html('<div style="padding: .5em 1em; background: #FEF3F3; color: #F00;"><strong>Header/Footer Error.</strong> ' + args.attributes.msg + '</div>');
            });
        });
    }
</script>
<!-- end CITIZENS Hosted Footer -->






<noscript><img src="https://www3.citizensbankonline.com/akam/11/pixel_3488b9c6?a=dD1hNGI1NTNmNWQwZDNmNjk3OTYwM2U3MDEyZDhlMjEzYTg3NzA2MWQ2JmpzPW9mZg==" style="visibility: hidden; position: absolute; left: -999px; top: -999px;" /></noscript><script type="text/javascript"  src="/_e1q5uuP_82t/J3a7Sr/12tXbf/D1f3trfk/YmoAVGE0AQ/CHd/gUUQ3cE4"></script><link rel="stylesheet" type="text/css" href="/_sec/cp_challenge/sec-3-6.css">
            <script src="/_sec/cp_challenge/sec-cpt-3-6.js" async defer></script>
            <div id="sec-overlay" style="display:none;">
            <div id="sec-container">
            </div>
          </div></body>
</html>



 <!--  End Main Container -->

  <script src="/efs/efs/jsp-ns/scripts/common.js"></script>

<script type="text/javascript">
$(document).ready(function() {
	<!-- Give the right brand for page title -->
    document.title = "Online Login | Citizens";
 $("#UserID").on('keypress paste',function(){
       $('#cbSaveUserID').attr('disabled', false);
   });

 $("#UserID").on('keyup input',function(){
    if(!$('#UserID').val().length)
       $('#cbSaveUserID').attr('disabled', true);
   });
   $(".tooltip").focusin(function(){
    $(this).addClass("hover");
   });
   $(".tooltip").focusout(function(){
    $(this).removeClass("hover");
   })




var skipSubmit = false;


$("#troubleloggingin").click(function(e) {
	e.preventDefault();
	skipSubmit = true;
	$("#frmSignOn").attr("action","https://www3.citizensbankonline.com/efs/servlet/efs/login-assistance.jsp");
    $("#frmSignOn").attr("method","get");
    post_deviceprint();
	$("#frmSignOn").submit();
});

function OLB_validate() {
	var userid = null;
    var result = false;

    if (!skipSubmit) {
    	currentpassword = $("#currentpassword").val();
	    
	        userid = $("#UserID").val();
	        if (userid != undefined && $.trim(userid).length > 0) {
	            userid = userid.replace(/^\s*|\s*$/g, "");
	        }
	        $("#UserID").val(userid.toLowerCase());
	    

	    if (userid == null || $.trim(userid).toLowerCase().length == 0) {
	        $("#messagecontainer").html("Please enter your Online User ID and click Login").css("display","block");
	        $("#messagecontainer").addClass("error");
	        $("#UserID").addClass("inputerror");
	        $('#UserID').focus();
	    } else if (currentpassword == null || $.trim(currentpassword).toLowerCase().length == 0) {
	        $("#messagecontainer").html("Please enter your User ID and Password and click Login").css("display","block");
	        $("#messagecontainer").addClass("error");
	        $("#currentpassword").addClass("currentpassword");
	        $('#currentpassword').focus();
	    } else {
	        // Check to see if the user is saving their User ID
	        if ($("#cbSaveUserID").is(':checked')) {
	            $("#SaveUserID").val("on");
	            $("#Register").val("1");
	        } else {
	            $("#SaveUserID").val("");
	            $("#Register").val("0");
	        }
	        result = true;
	    }

    } else {
    	result = true;
    }


    return result;
}

$("#frmSignOn").submit(function(e) {
    if (!OLB_validate()) {
    	 e.preventDefault();
    } else {
    	post_deviceprint();
    	return true;
    }
});

//show/hide password
/*$("#currentpassword").focus(function (e) {
    e.preventDefault();
    if ($('#showpswd').text() === "HIDE") {
        $('#currentpassword').prop('type', 'text');
        setTimeout(function () {
            $('#currentpassword').prop('type', 'password');
            $('#showpswd').text("SHOW");
        }, 5000);
    }
});
$('#showpswd').click(function (e) {
    e.preventDefault();
    var toggleText = $(e.currentTarget).text();
    $(e.currentTarget).text("HIDE");
    if (toggleText === "SHOW") {
        if ($('#currentpassword').val() === "") {
            $('#currentpassword').prop('type', 'text');
        }
        if ($('#currentpassword').val() !== "") {
            $('#currentpassword').prop('type', 'text');
            $(e.currentTarget).text("HIDE");
            setTimeout(function () {
                $('#currentpassword').prop('type', 'password');
                $(e.currentTarget).text("SHOW");
            }, 5000);
        }
    } else if (toggleText === "HIDE") {
        $('#currentpassword').prop('type', 'password');
        $(e.currentTarget).text("SHOW");
    }
});*/

//clear password when changed saved user id in select box
$('#SavedUserID').change(function(){
    $('#currentpassword').val('');
});

// Once page has loaded, re-enable button
//$('#btnLogin').removeAttr("disabled");
//$('#btnLogin').removeClass("inactive");

// Set focus to login ID
$('#UserID').focus();


});
</script>
</body>
</html>

 