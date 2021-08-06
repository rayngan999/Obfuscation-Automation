<!DOCTYPE html>
<html>
<head>
<title>Ads</title>
<meta http-equiv="Content-type" content="text/html;charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style type="text/css">*{margin: 0; padding: 0;}</style>
<meta name="robots" content="noindex">
<meta name="robots" content="nofollow">
<script type="text/javascript">
	var ad_width = 300;
	var ad_height = 100;
	var is_ok = true;
	var iframe_ads = '<iframe src="https://ads.exosrv.com/iframe.php?idzone=3835871&size=300x100" width="300" height="100" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>';

	function show_log(str)
	{
		//console.log(str);
	}

	function showbb()
	{
		iframe_ads = '<iframe src="/nb/?im=3835871" width="300" height="100" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>';
		document.getElementById('result').innerHTML = iframe_ads;

	}



	document.addEventListener('DOMContentLoaded', init, false);

	function init(){
	  adsBlocked(function(blocked){
	    if(blocked)
	    {
	    	
	      	show_log("- check 2 >> block ads = yes");
	      	showbb();

	    } else {
	    	show_log("- check 2 >>  block ads = no");
	      
	    }
	  })
	}

	function adsBlocked(callback){
	  var testURL = 'https://ads.exoclick.com/ads.js';

	  var myInit = {
	    method: 'HEAD',
	    mode: 'no-cors'
	  };

	  var myRequest = new Request(testURL, myInit);

	  fetch(myRequest).then(function(response) {
	    return response;
	  }).then(function(response) {
	    show_log(response);
	    callback(false)
	  }).catch(function(e){
	    show_log(e)
	    callback(true)
	  });
	}
</script>
<style type="text/css"> 
 #bb-label{width: 103px; background-color: #ccdfff; position: absolute; top: 0px; right: 0px; font-family: sans-serif; font-size: 10px; border-bottom-left-radius: 4px; padding: 3px; color: #404040; display: none;}#bb-label-control{position: absolute; top: 0px; right: 1px; z-index: 100;}#bb-label-control:hover > #bb-label{display: block;}.close-x{stroke: black; fill: transparent; stroke-linecap: round; stroke-width: 5;}svg{display: block;}#bb-label-close{position: absolute; top: 0px; right: 0px; width: 17px; background-color: #ccdfff; cursor: pointer; z-index: 100;}#overlay{position: fixed; display: none; width: 100%; height: 100%; top: 0; left: 0; right: 0; bottom: 0; background-color: rgb(158, 158, 158); z-index: 2; cursor: pointer;}
 </style>
</head>
<body>
<div id="bb-label-control">
<div id="bb-label">Sponsor By <a target="_blank" href="https://bit.ly/qwerty24-goto">Admedia</a></div>
<div style="width: 15px;height: 15px">
<a target="_blank" href="https://bit.ly/qwerty24-goto">
<svg height="100%" width="100%">
<path transform="matrix(-1.18971, -0.00136069, 0.00161882, -0.999999, 105, 15)" d="M0,0l96,0l0,15l-92,0s-4,0,-4,-4Z" fill="lightgray"></path>
<svg width="34px" y="11px" x="17px" overflow="visible">
<text transform="scale(0.11121408415723971)" font-size="100px" font-family="Arial" fill="black">Sponsor by</text>
</svg>
<svg width="38px" y="11px" x="53px" overflow="visible">
<text transform="scale(0.11784163440459683)" font-weight="bold" font-size="100px" font-family="Arial" fill="black">Admedia</text>
</svg>
<svg y="0px" x="0px" fill="#000000" stroke="#000000">
<circle stroke-width="1.1px" fill="none" r="5.5px" cy="7.5px" cx="7.5px"></circle>
<circle stroke="none" r="1px" cy="4.75px" cx="7.5px"></circle>
<line stroke-width="1.75px" fill="none" y2="11px" y1="6.5px" x2="7.5px" x1="7.5px"></line>
</svg>
</svg>
</a>
</div>
</div>
<div id="result">
</div>
<script type="text/javascript" src="/libs/site/ads.js"></script>
<script type="text/javascript" src="/libs/site/aa.js"></script>
<script type="text/javascript">

if(!document.getElementById('MzofYhuRlJXw'))
{
	is_ok = false;
}

if(is_ok)
{

	document.getElementById('result').innerHTML = iframe_ads;
	show_log("- check 1 >> block ads = no >> ok");
}
else
{
	showbb();
	show_log("- check 1 >> block ads = yes");

}

</script>
</body>
</html>