	<!DOCTYPE html>
	<html lang="en">

	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="ip8.com" />
		<meta name="keywords" content="ip8.com" />
		<meta name="google-translate-customization" content="" />
		<meta name="google-site-verification" content="Y-lh0kHnGHotZ0krQGcpq54melY5EbIfqBSejqnaX3o" />
		<link rel="icon" href="/favicon.ico">
		<title>ip8 - IP Lookup Tool</title>
		<link href="/css/bootstrap.min.css" rel="stylesheet">
		<link href="/css/ie10-viewport-bug-workaround.css" rel="stylesheet">
		<link href="/css/ip8.css?1627967574" rel="stylesheet">
		<script src="/js/ie10-viewport-bug-workaround.js"></script>
		<script src="/js/jquery.min.js"></script>
		<script src="/js/bootstrap.min.js"></script>
		<script src="/js/ip8.js"></script>
		<!-- vue -->
		<script src="https://cdn.jsdelivr.net/npm/vue@2.6.0"></script>
		<!-- rtc -->
		<script src="/js/DetectRTC.js"> </script>
		<script src="/js/adapter-latest.js"></script>

		<!--[if lt IE 9]><script src="/js/ie8-responsive-file-warning.js"></script><![endif]-->
		<script src="/js/ie-emulation-modes-warning.js"></script>
		<script src="/js/Chart.bundle.js"></script>
		<link href='https://fonts.googleapis.com/css?family=Orbitron' rel='stylesheet' type='text/css'>

		<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->


<script type="text/javascript" src="https://cdn.weglot.com/weglot.min.js"></script>
<script>
    Weglot.initialize({
        api_key: 'wg_f07a168e24c2f1013e2bc5486f98d82d0'
    });
</script>
	</head>

	<body>
		<div class="container clearfix" id="maincont">
			<div class="header clearfix">
				<nav class="navbar navbar-default navbar-fixed-top">
					<div class="container no-left-padding">
						<div class="navbar-header">
							<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>
							<a class="navbar-brand" href="/"><img id="logo" height="45" src="/images/ip8.png" alt="Logo" /></a>
						</div>
						<div id="navbar" class="navbar-collapse collapse">
						<p class="navbar-text navbar-right actions">
								<!-- <a class="login" href="/account/login">Log In</a>
								<a class="btn btn-default action-button" role="button" href="/account/register">Sign Up</a> -->
								<a href='/account'><i class="glyphicon glyphicon-user" id='userIcon'></i></a>
							</p>
							<ul class="nav navbar-nav navbar-right">
								<li  class='active' ><a href="/">Home</a></li>
								<li ><a href="/iplookup">GeoIp</a></li>
								<li ><a href="/ipdetails">IP Details</a></li>
								

								<li ><a href="/reverseip">Reverse Hosting</a></li>
								
								<li ><a href="/who-is-domain">Domain Whois</a></li>
								<li ><a href="/api">API</a></li>
								
								
								
								<li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="#">Tests <span class="caret"></span></a>
									<ul class="dropdown-menu" role="menu">
										<li ><a href="/speed-test">Speed Test</a></li>
										<li ><a href="/webrtc-test">WebRTC Test</a></li>
										<li ><a href="/dnsleaktest">DNS Leak Test</a></li>		
									</ul>
								</li>
								<li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="#">Lists <span class="caret"></span></a>
									<ul class="dropdown-menu" role="menu">
										<li ><a href="http://ip8.com/listsocks">Socks4/5</a></li>
									</ul>
								</li>
							</ul>
							

						</div>

					</div>
				</nav>



			</div>


			<div class="col-lg-12 clearfix" id="contynr">
				
<div class="col-lg-12 clearfix ">
    <div class="panel panel-default" id="trarm">
        <div class="panel-heading"><h1>Your IP Address</h1></div>
        <div class="panel-body text-center">
            <div class="col-lg-10 col-lg-offset-1">
                <div class="input-group abow">
                    <input type="text" class="form-control input-lg" id="ipInput" value="119.236.101.168" >
                    <div class="input-group-btn">
                        <button onclick="copyToClipboard('119.236.101.168')" class="btn btn-info btn-lg" type="button">Copy</button>
                        <button onclick="document.location='/webrtc-test'" class="btn btn-primary btn-lg" type="button">Leak Test</button>
                        <button onclick="document.location='/ipdetails/119.236.101.168'" class="btn btn-success btn-lg" type="button">Details</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="col-lg-12 clearfix hidden" id="webrtc_detection" >
<div class="alert alert-danger alert-dismissible" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <strong>Warning! </strong>Your Browsers WebRTC is leaking your IP Address (<strong><span id='publicIP'></span>,<span id='privateIP'></span></strong>). This will reveal your IP to any website you visit even if you use a VPN or Proxy. We recommend you to do a <a href='/webrtc-test'>Leak Test</a>
</div>
</div>

<div class="col-lg-12 clearfix hidden" id="ipdiscrepancy_detection" >
<div class="alert alert-danger alert-dismissible" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <strong>Warning! </strong>
  <p id='ipdiscrepancy_detection_content'>
  </p>
</div>
</div>

<div style="text-align:left; margin: 20px 0px 20px 30px;">
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ip8-leader -->
<ins class="adsbygoogle"
     style="display:inline-block;width:728px;height:90px"
     data-ad-client="ca-pub-1031368385756464"
     data-ad-slot="2766573840"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
</div>


<div class="col-lg-12 clearfix">
  
  <div class="col-lg-6 clearfix " >
    <div class="panel panel-success" >
        <div class="panel-heading"><h3 class="panel-title">IP Address Details</h3></div>
        <div class="panel-body" >
            <table class="table table-responsive">
            <tr><td>IP Address </td><td> : </td><td><a href='/ipdetails/119.236.101.168'>119.236.101.168</a></td></tr>
            <tr><td>ISP </td><td> : </td><td><a href='/ipdetails/119.236.101.168'>Netvigator</a></td></tr>
            <tr><td>Hostname </td><td> : </td><td id='resolvedHost'>...Loading...</td></tr>
            <tr><td>Country </td><td> : </td><td><img src="/images/flags/24/hk.png" height="20"
                alt="Hong Kong (HK)"/> Hong Kong                (HK) </td></tr>
            <tr><td>City </td><td> : </td><td> Central </td></tr>
            <tr><td>Postal Code </td><td> : </td><td> - </td></tr>
            <tr><td>Region </td><td> : </td><td> Central and Western District,HCW </td></tr>
            <tr><td>Latitude / Longitude </td><td> : </td><td> 22.2908 / 114.1501 </td></tr>
            </table>
        </div>
    </div>
  </div>
  
	<div class="col-lg-6 clearfix ">
		<div style="padding: 35px 80px">
      <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      <!-- ip8-react-home -->
      <ins class="adsbygoogle"
           style="display:inline-block;width:336px;height:280px"
           data-ad-client="ca-pub-1031368385756464"
           data-ad-slot="2969356039"></ins>
      <script>
      (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    </div>
	</div>
  
</div>

<div class="col-lg-12 clearfix">
	<div class="col-lg-6 clearfix ">
    <iframe
      width="520"
      height="359"
      frameborder="0" style="border:0"
      src="https://www.google.com/maps/embed/v1/view?key=AIzaSyCyPimxzFMCERPfBobexZc3oSQ9IF8g4jk&zoom=15&center=22.2908,114.1501" allowfullscreen>
    </iframe>
	</div>
	<div class="col-lg-6 ">
	<div class="alert alert-info " style="height: 359px">
    <span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
    <b>What is IP8.com</b>

    <p class="whtsip8">IP8.com helps you stay safe online by learning about which of your personal information is accessible. </p><br>
    <p class="whtsip8">The site offers VPN, Proxy, IP lookup, and domain-based services and provides you with an array of tests like WebRTC, IP address speed and anonymity tests to show you how vulnerable you are online. </p><br>
    <p class="whtsip8">We are committed to ensuring that you fully understand the associated risks of using the internet and help you take right steps to maintain your online privacy.</p>
	</div></div>
</div>



<div style="text-align:center; margin: 20px 0px 20px 0px;">
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ip8-leader -->
<ins class="adsbygoogle"
     style="display:inline-block;width:728px;height:90px"
     data-ad-client="ca-pub-1031368385756464"
     data-ad-slot="2766573840"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
</div>


<div class="col-lg-12 clearfix ">
    <div class="panel panel-info" >
        <div class="panel-heading"><h3 class="panel-title">System Details</h3></div>
        <div class="panel-body">
            <table class="table table-responsive">
                    			    <tr>
                        <td>Operating System </td><td> : </td><td> OS X macOS  10.15</td>
                    </tr>
    	            <tr><td>Browser </td><td> : </td><td> Firefox 52.0 </td></tr>
    	                        <tr><td>Browser Language </td><td>          : </td><td id="brlng"></td></tr>
                <tr><td>User-Agent </td><td>                : </td><td> Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:52.0) Gecko/20100101 Firefox/52.0      </td></tr>
                <tr><td>HTTP Accept </td><td>               : </td><td> text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8          </td></tr>
                <tr><td>HTTP Accept-Encoding </td><td>      : </td><td> gzip, deflate, br </td></tr>
                <tr><td>HTTP Accept-Language </td><td>      : </td><td> en-US,en;q=0.5 </td></tr>
                <tr><td>HTTP Connection </td><td>           : </td><td> keep-alive      </td></tr>
            </table>
        </div>
    </div>
</div>

<div class="col-lg-12">
    <div class="col-lg-12 alert alert-light">
        <h3 style="font-size:24px">What You Need to Know About Your IP Address</h3>
	<div class="ip-info">
		<p>An IP address is a unique number attributed to all your online activity. It's an identifier that helps the system tell your device apart from the billions of devices on the internet. </p>
    		<p>Your IP address is how you get all your personal information (chats, VoIP calls, emails, etc.) sent directly to your device, whether you're on your mobile phone, laptop, or office computer.</p>
    	
		<h4>Where do you get an IP address?</h4>
		<p>So, every device has a unique IP address. But how are these IP addresses assigned? Who gets to choose what address goes to your device? Your Internet Service Provider does.</p>
		<p>IP addresses are managed globally by a body known as the Internet Assigned Numbers Authority (IANA) via five Regional Internet Registries (RIRs) who allocate blocks of IP addresses to the Internet Service Providers (ISPs). Your ISP assigns an IP address to your device.</p>
		
		<h4>What information does my IP address reveal?</h4>
		<p>While there isn't much the average curious person can find out about your online activity through your IP address, your personal information isnât entirely safe from websites you visit.</p>
		<p>If you were to send an email from your home or office, a person with savvy internet skills (e.g. a hacker) and the right tools can use your exposed IP address to find out (with good accuracy) the approximate location it was sent from.  </p>
		<p>Moreover, your personal information can be tracked by third parties like your ISP, advertisers, hackers and even government agencies.</p>
		<p>In the case of cybercrime, law enforcement authorities might obtain a subpoena to enable them to track a user through their IP address. </p>
		<p>In that instance, they can take that IP address to the ISP to get more information about the user like legal name and home address.</p>

		<h4>How can I hide my IP address?</h4>
		<p>One of the best ways to ensure your online anonymity is by using a Virtual Private Network (VPN). A VPN is great because it gives an added layer of protection to your IP address. Many people use VPNs to maintain online anonymity. </p>
                <h4>Which VPN Service is the best ?</h4>
		<p>You may want to check VPN Review sites like <a href='https://www.vpnranks.com/'>https://vpnranks.com</a> before installing a VPN</p>
	</div>
	</div>
</div>

<div style="text-align:center; margin: 20px 0px 20px 0px;">
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ip8-leader -->
<ins class="adsbygoogle"
     style="display:inline-block;width:728px;height:90px"
     data-ad-client="ca-pub-1031368385756464"
     data-ad-slot="2766573840"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
</div>

<script>
    resolveIp('119.236.101.168','resolvedHost');
    evaluateIP('119.236.101.168','ipdiscrepancy_detection_content');
    
    // evaluateIP('138.68.176.13','ipdiscrepancy_detection_content');
    
   function detectIpAddresses(stream) {
    DetectRTC.DetectLocalIPAddress(function(ipAddress) {
                document.getElementById('webrtc_detection').classList.remove('hidden')
               if (ipAddress.indexOf('Local') !== -1) {
                    document.getElementById('privateIP').innerText=ipAddress;
               } else {                
                    document.getElementById('publicIP').innerText=ipAddress;
               }
    
               if(!stream) return;
    
               stream.getTracks().forEach(function(track) {
                   track.stop();
               });
    
               stream = null;
           }, stream);
    }
    
    DetectRTC.load(function() {
        console.log('Browser : '+DetectRTC.browser.name);
        if(DetectRTC.browser.name === 'Edge') {
            navigator.mediaDevices.getUserMedia({video: true}).then(function(stream) {
                console.log('Edge');
                detectIpAddresses(stream);
            });
            return;
        }
        detectIpAddresses();
    });
    </script>
</script>
<hr/>			</div>
			<footer class="footer clearfix text-center">

				<p><small><a href="/privacy-policy">Privacy Policy</a> | <a href="mailto:support@ip8.com">Contact Us</a></small> | <small><a href='/account'>Control Panel</a></small>  | 
<small><a href='https://ip8.freshdesk.com/en/support/home'>Support</a></small>  |
<small><a href='https://cyberchef.org'>CyberChef</a></small>
					<p>
						<p>&copy; 2014-2021 from ip8.com - a <a href="https://def24.com">DEF24.com</a> Service</p>
			</footer>
		</div>
		<!-- Cookie consent -->
		<script type="text/javascript" src="//autocookie.org/basic.php?pp=/privacy-policy" async></script>
		<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-1934755-61"></script>
		<script>
			window.dataLayer = window.dataLayer || [];

			function gtag() {
				dataLayer.push(arguments);
			}
			gtag('js', new Date());
			gtag('config', 'UA-1934755-61');
		</script>
	</body>

	<script>
		var ip = '119.236.101.168'
		$(document).ready(() => {
			var jqxhr = $.get(`https://rdap.db.ripe.net/ip/${ip}`, function(result) {
					$.post('https://api.ip8.com/rdap/analyze', {
						result
					})
				})
				.fail(function(result) {
					$.post('https://api.ip8.com/rdap/analyze', {
						result,
						failed: true
					})
				})
		})
	</script>

<!-- freshdesk -->
<script src="https://wchat.freshchat.com/js/widget.js"></script>
    <script>
      window.fcWidget.init({
        token: '3d552b75-d447-4ae6-a542-63b8212c2bcc',
        host: 'https://wchat.freshchat.com',
        open: false,
        config: {
          disableEvents: true,
          showFAQOnOpen: false,
          agent: {
            hideName: true,
            hidePic: true,
            hideBio: true,
          },
          headerProperty: {
            backgroundColor: '#02b875',
            backgroundImage: 'https://public-data.prod.freddyproject.com/autofaq/66457089-2297-403a-9a30-c4bfdf57084d.png',
            hideChatButton: false,
            direction: 'ltr'
          }
        },
        meta: {
          'fw_product': 'freshdesk',
          'fw_product_acc_id': '1329254',
          'fw_group_id': '60000039193'
        }
      });
    </script>


	<!-- Start of ip8 Zendesk Widget script -->
<!--	<script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=568ce40e-3b34-4725-9e56-ef7c0f3daea4"> </script> //>
	<!-- End of ip8 Zendesk Widget script -->
	<script>
		var userOK = false
		$(document).ready(() => {
			if (localStorage.getItem('auth')) {
				try {
					var auth = JSON.parse(localStorage.getItem('auth'))
					// console.log(`>>auth`,auth)
					if (auth && auth.hasOwnProperty('hpassword')) {
						userAuth = auth
						userOK=true
						$('#userIcon').css('color', '#35aed9')
					}
				} catch (e) {

				}
			}
		})
	</script>

	</html>
