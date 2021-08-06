<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <!--[if lte IE 8]><script src="//static.javhd.com/h5/files/js/videojs-ie8.min.js"></script><![endif]-->
    <link href="//static.javhd.com/h5/files/css/style.css" rel="stylesheet">
    <style>
       .container:hover .play {display:block !important;}
    </style>
    <script src="//static.javhd.com/h5/files/js/mobile_video_player.min.js"></script>
    <script src="//static.javhd.com/h5/files/js/video.js"></script>
	<script>
        // Minified version of isMobile included in the HTML since it's small


(function () {var f=/iPhone/i,j=/iPod/i,p=/iPad/i,g=/\bAndroid(?:.+)Mobile\b/i,i=/Android/i,d=/\bAndroid(?:.+)SD4930UR\b/i,e=/\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i,c=/Windows Phone/i,h=/\bWindows(?:.+)ARM\b/i,k=/BlackBerry/i,l=/BB10/i,m=/Opera Mini/i,n=/\b(CriOS|Chrome)(?:.+)Mobile/i,o=/Mobile(?:.+)Firefox\b/i;function b($,a){return $.test(a)}function a($){var a=($=$||("undefined"!=typeof navigator?navigator.userAgent:"")).split("[FBAN");void 0!==a[1]&&($=a[0]),void 0!==(a=$.split("Twitter"))[1]&&($=a[0]);var r={apple:{phone:b(f,$)&&!b(c,$),ipod:b(j,$),tablet:!b(f,$)&&b(p,$)&&!b(c,$),device:(b(f,$)||b(j,$)||b(p,$))&&!b(c,$)},amazon:{phone:b(d,$),tablet:!b(d,$)&&b(e,$),device:b(d,$)||b(e,$)},android:{phone:!b(c,$)&&b(d,$)||!b(c,$)&&b(g,$),tablet:!b(c,$)&&!b(d,$)&&!b(g,$)&&(b(e,$)||b(i,$)),device:!b(c,$)&&(b(d,$)||b(e,$)||b(g,$)||b(i,$))||b(/\bokhttp\b/i,$)},windows:{phone:b(c,$),tablet:b(h,$),device:b(c,$)||b(h,$)},other:{blackberry:b(k,$),blackberry10:b(l,$),opera:b(m,$),firefox:b(o,$),chrome:b(n,$),device:b(k,$)||b(l,$)||b(m,$)||b(o,$)||b(n,$)},any:!1,phone:!1,tablet:!1};return r.any=r.apple.device||r.android.device||r.windows.device||r.other.device,r.phone=r.apple.phone||r.android.phone||r.windows.phone,r.tablet=r.apple.tablet||r.android.tablet||r.windows.tablet,r}window.isMobile=a();})();






    </script>
    <script>
        // Options
            var targetUrl ;
	    var matches = location.search.match(/[\?\&]targetUrl\=([^^\&]+)/i);
	    if (matches) {
	    	targetUrl = decodeURIComponent(matches[1]);
    	} else {
	    	targetUrl = "http://javhd.com/";
    	}

function go(cms_id) {
	var url = targetUrl;
	try {
		var delim = url.indexOf('?') !== -1 ? '&' : '?';
		if (!Date.now) {
		  Date.now = function now() {
		    return new Date().getTime();
		  };
		}
		var uts = Date.now();
		if (uts) {
			url += delim + 'uts=' + uts + '&cms_id=' + cms_id;
		}	
	} catch (err) {}

	window.open(url);
}
    </script>
</head>
<body>
    <div class="container" onclick="go(19142);">
        <img src="//static.javhd.com/h5/files/overlay/1008-overlay-preview.png" class="overlay-preview"  style="position: absolute; z-index: 1; left:0px; top: 0px;">
        <img src="//static.javhd.com/h5/files/overlay/1008-overlay.gif" class="overlay"  style="position: absolute; z-index: 99999; left:0px; top: 0px;">
        <img class="play" src="//static.javhd.com/h5/files/button/29-button.png" style="position: absolute; z-index: 99998; left: 0px; top: 0px; display: none;">
        <div class="video-container" id="video-container"></div>
    </div>
	<script type="text/javascript">
		(function () {//maybe redirect on mobile template?
			if (isMobile.any) {
				document.getElementById('video-container').innerHTML = '<canvas width="300" height="250" id="video-1"></canvas>';
				var canvas = document.getElementById('video-1');
				
				var player = new JVmpeg('//static.javhd.com/h5/files/video/1262-19142-300x250.mpg', {
					canvas: canvas,
					autoplay: true,
					//fallback: '//static.javhd.com/sb/schoolgirlshd_11404_300x250.gif',
					loop: true
				});
				canvas.addEventListener('click', function () {
					if (player.playing) {
						player.play();
					} else {
						player.play();
					}
				}, false);
			} else {
				document.getElementById('video-container').innerHTML = '<video id="video-1" class="video-js" loop muted preload="auto" width="300" height="250" ><source src="//static.javhd.com/h5/files/video/1262-19142-300x250.mp4" type="video/mp4" /></video>';
				
		
				var players = document.querySelectorAll('.video-js');
				for (var i = 0, n = players.length; i < n; ++i) {
					
					videojs(players[i].id, {}, function () {
						this.play();
					});
				}
			}
		})();
	</script>
</body>
</html>