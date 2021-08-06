<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>nPerf Speed Test</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400|Roboto:300,400,700&amp;subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="https://media-cntw.nperf.com/webplugin/dist/SpeedTest/2.5.5/css/OVH.min.css" />
    </head>
<body style="margin: 0; padding: 0;" onload="onLoad()">

<div id="nPerf" style="position: absolute; top:0; left: 0; color: #0000ff; max-width: 700px; width: 100%; height: 500px;">
    <div class="Main" style="width:100%; height: 100%">
        <div class="Splash">
            <div class="loader">&#xe035;</div>
            <div class="message">Loading nPerf plugin...</div>
        </div>
    </div>
</div>

<script id="nPerfJS" src="https://media-cntw.nperf.com/webplugin/dist/SpeedTest/2.5.5/js/OVH.min.o.js"></script>

<script>
     
function onLoad() {
    setTimeout(function() {
        new nPerfSpeedTest(document.getElementById("nPerf"),{
                        licenseKey: '05d1f5db-f38f-42ed-924b-87e3b0f2d5b6',            
        	width: '700',
            height: '400',
            config: JSON.parse('{	"useBrowserLocation": true, "useJavascriptCallback": true, "locationRequestTimeout": 3000,	"webserviceTimeout": 10000,	"allowIPv6": true,	"ipVersionTimeout": 3000,	"tlsPorts": [443,8443],	"tlsTestServer": "test-ipv4.nperf.net",	"checkPortsTimeout": 20000,	"connectionTimeout": 10000,	"ioTimeout": 3000,	"download": {		"duration": 15000,		"maxThreads": 16,		"blockSize": 104857600	},	"upload": {		"duration": 15000,		"maxThreads": 16,		"randomBufferSize": 1048576,		"maxBlockSize": 8388608, "requestQueueSize": 3	},	"latency": {		"samples": 20,		"interval": 200,		"timeout": 3000	}}'),
            
            
            
        });
    },200);
}

</script>



</body>
</html>