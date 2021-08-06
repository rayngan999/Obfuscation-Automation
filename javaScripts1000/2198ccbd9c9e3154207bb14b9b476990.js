/*
 * Copyright (c) 1999 - 2016, InterDeal Development LTD.
 * Version: 7.0.00; 28/02/2017
 */

( function ( interdeal ) {

	// console.log support for ie8&9
	if ( !window.console      ) window.console      = {};
	if ( !window.console.log  ) window.console.log  = function () {};
	if ( !window.console.warn ) window.console.warn = function () {};

	var browser = interdeal.browser = ( function() {
		var ua = navigator.userAgent, tem,
		M = ua.match( /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i ) || [];
		if ( /trident/i.test( M[1] ) ) {
			tem = /\brv[ :]+(\d+)/g.exec( ua ) || [];
			return { name: 'Internet Explorer', version: +( tem[1] || '' ) };
		}
		if ( M[1] === 'Chrome' ) {
			tem = ua.match( /\b(OPR|Edge)\/(\d+)/ );
			if ( tem !== null ) return { name: tem[1].replace( 'OPR', 'Opera' ), version: +tem[2] };
		}
		if ( M[1] === 'MSIE' && /compatible;/i.test( ua ) ) {
			tem = /trident\/(\d)/i.exec( ua ) || [];
			return { name: 'Internet Explorer', version: M[2] + ' (Compatibility Mode, Orig: ' + ( +tem[1] + 4 ) + ')' };
		}
		M = M[2]? [ M[1], M[2] ]: [ navigator.appName, navigator.appVersion, '-?' ];
		if ( ( tem = ua.match( /version\/(\d+)/i ) ) !== null ) M.splice( 1, 1, tem[1] );
		return { name: M[0], version: +M[1] };
	})();

	console.warn( '[IND] You are running ' + interdeal.browser.name + ' browser, version: ' + interdeal.browser.version +
		 '\n      Please upgrade your browser, or use a different one(!), for accessibility options.' );

} ) ( window.interdeal = window.interdeal || {} );

