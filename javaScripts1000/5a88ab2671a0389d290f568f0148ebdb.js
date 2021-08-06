/*
	Version 1.2
*/

 
     
(function(){
	/*
		Added IIFE not to pollute the global space 
	*/
	function getHostName() {
		 var origin = window.location.origin; 
		 var exp = new RegExp( /.*(www\.)|(origin\.).*/ );
		 var hostname = exp.exec( origin ) ? 'www' : 'uat'; 
		 return hostname;
 	}
	
	const scriptUrl = `//${getHostName()}.medtargetsystem.com/javascript/beacon.js`;
	
	// Start: Initialize AIM Script //
	(function(w,d,s,m,n,t){
		w[m]=w[m]||{init:function(){(w[m].q=w[m].q||[]).push(arguments);},ready:function(c){if('function'!=typeof c){return;}(w[m].c=w[m].c||[]).push(c);c=w[m].c;
		n.onload=n.onreadystatechange=function(){if(!n.readyState||/loaded|complete/.test(n.readyState)){n.onload=n.onreadystatechange=null;
		if(t.parentNode&&n.parentNode){t.parentNode.removeChild(n);}while(c.length){(c.shift())();}}};}},w[m].d=1*new Date();n=d.createElement(s);t=d.getElementsByTagName(s)[0];
		n.async=1;n.src=scriptUrl+'?'+Date.now().toString();n.setAttribute("data-aim",m);t.parentNode.insertBefore(n,t);
	})(window,document,'script','AIM_35');
	// END: Initialize AIM Script //

})()

AIM_35.init(hm.AIM_Signal_API_Key);

AIM_35.ready(function(){
	
	AIM_35.ondetect(function(data){
		console.log('AIM_35.ondetect:', data);
		console.log('DMD AIM data:' + JSON.stringify(data));
		if (Object.keys(data).length) { //Check if object is empty
			if ( typeof($) !== 'undefined' && typeof $.EventBus === 'function' ) {
				EventBus(haymarketCustomEvents.dmdData).publish(data);
			}
			if (dataLayer) {
				dataLayer.push({'AIM':data});
				dataLayer.push({event:'AIM Loaded'});
			}
		}
	});
});

