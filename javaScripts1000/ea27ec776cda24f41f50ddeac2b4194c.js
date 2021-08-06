document.addEventListener( 'DOMContentLoaded', function () {
	const throtleOptions = window.hmThrotle
	console.log( throtleOptions);
	if ( throtleOptions && throtleOptions.throtle_partner_id ) {
		var throtleScript = document.createElement('script');
		throtleScript.setAttribute('src', 'https://thrtle.com/insync?vxii_pid='+throtleOptions.throtle_partner_id+'&loc='+throtleOptions.throtle_location_id);
		throtleScript.setAttribute('type', 'text/javascript');
		document.body.appendChild(throtleScript);
	}
});
