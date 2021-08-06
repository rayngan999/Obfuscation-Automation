/***
	Usage:
		<script src="https://cdn.candid.org/wrapper/javascript/multisite_nav.js"></script>
		<script>
		jQuery(document).ready(function(){
			// parameters:  targetId, loadSuccess, loadError, sourceDomain, endpoint, targetFooterId, showOptions
			multisite_nav.load('#multisite_nav_target');
		});
		</script>
		<div id="multisite_nav_target"></div>

	Requirements:
		jQuery > 1.10

	Common Errors:
				
		If jQuery is not defined there will be an error in the console.
		If the target #element is not found, then nothing will happen, and there will be an error in the console.

	Properties:
		targetId (string|null): this is the target on the page that the responding html will be appended to.
		loadSuccess (function|null): function to run on success
		loadError (function|null): function to run on error	
		sourceDomain (string|null): When the source HTML is returned the '~DOMAIN~' string will be replaced with this sourceDomain string.  			
			Passing the special sourceDomain = 'SAMEDOMAIN' value will make the replacement "" and allow same domain testing.
		endpoint (string|null): AJAX call to this endpoint to load the HTML
		targetFooterId (string|null): Default action is to append the foter to the end of the <body>. If a footer target is provided, append there instead.
		showOptions: (array|null): Display only the elements in provided array. 
			* null - default, show top and footer
			* [] - do not show at all
			* ['top']  - show only top (at-a-glance)
			* ['footer'] - show only footer
			* ['top','footer'] - same as null, show top and footer

*/

var multisite_nav = {

	targetId: '#multisite_nav_target',	
	targetFooterId: null,
	// DO NOT place a trailing slash on sourceDomain
	defaultDomain: 'https://candid.org',
	sourceDomain:  'https://candid.org',
	endpointFile: 'multisite_nav.html',
	endpoint:  'https://cdn.candid.org/wrapper',
	replaceBase: '~BASE~',
	showOptions: null,
		
	load: function(targetId, loadSuccess, loadError, sourceDomain, endpoint, targetFooterId, showOptions){
		if(typeof targetId === 'string'){
			this.targetId = targetId;
		}
		if(typeof loadSuccess === 'function') {
			this.loadSuccess = loadSuccess;
		}
		if(typeof loadError === 'function') {
			this.loadError = loadError;
		}
		if(typeof endpoint === 'string' && endpoint.length > 0){
			this.endpoint = endpoint;
		}
		if(typeof sourceDomain === 'string'){			
			this.sourceDomain = sourceDomain;
			// special local directory condition
			if(sourceDomain === 'SAMEDOMAIN') {
				this.sourceDomain = ""; 
			}
		}
		if(typeof targetFooterId === 'string'){
			this.targetFooterId = targetFooterId;
		}
		if(typeof showOptions !== 'undefined') {
			this.showOptions = showOptions;
		}

		// build full endpoint url
		this.endpointFileUrl = this.endpoint+'/'+this.endpointFile;

		// if targetId found load navigation
		var requestHtml = false;
		if( jQuery(this.targetId).length > 0) {
			requestHtml = true;
		}
		if( jQuery(this.targetFooterId).length > 0) {
			requestHtml = true;
		}
		if(requestHtml){
			var that = this;
			targetId = this.targetId;
			targetFooterId = this.targetFooterId;
			showOptions = this.showOptions;

			this.loadNavigation(
				function(data, config) {
					if(data !== false){
						that.displayHtml(data, targetId, targetFooterId, showOptions );
						that.addEvents();
						that.loadSuccess();
					} else {
						that.loadError();
					}
				}
			);			
		} else {
			console && console.warn('Multisite Navigation: HTML not requested. No targets found');	
		}
		
	},

	loadNavigation: function(callback){
		var that = this;
		jQuery.ajax({
			url: that.endpointFileUrl,
			success:function(data,textStatus,jqXHR){
				if(data !== ''){

					// Special request for source domain change replacement (debug) 
					if(that.sourceDomain !== that.defaultDomain) {
						var re = new RegExp(that.quote(that.defaultDomain),"g");
						data = data.replace(re,that.sourceDomain);
					}

					// Special BASE replace (if used)
					var base_re = new RegExp(that.quote(that.replaceBase),"g");
					data = data.replace(base_re,that.endpoint);

					callback(data);
				} else {
					console && console.warn('Multisite Navigation: Error - no data returned');
					callback(false);
				}
			},
			error:function(jqXHR, textStatus, errorThrown){
				console && console.error('Multisite Navigation: Error - possible bad endpoint:', that.endpointFileUrl);
				callback(false);
			}
		});
	},

	// Display top/footer into target IDs.
	// Called from AJAX response and passed HTML data
	// Called from local and passed no data, used only for display logic
	// NOTE: IE bug with appending to hidden target required a more deliverate extract and render approach
	displayHtml: function(data, targetId, targetFooterid, showOptions ) {

		// These ID's are aligned with the source HTML
		var topDomId = '#nav-multisite';
		var footerDomId = '#universal-footer';

		var renderTop = true;
		var renderFooter = true;

		// Data can be null (local use) or HTML from AJAX
		if(data) {
			jQuery(targetId).before(data);
		}
		
		// showOptions config
		if(showOptions) {
			if(showOptions.indexOf('top') === -1 ) {
				renderTop = false;
			}
			if(showOptions.indexOf('footer') === -1 ) {
				renderFooter = false;
			}
		}

		if(typeof targetId !== 'undefined' && jQuery(targetId).length) {
			if(renderTop === true) {
				//console && console.log('Multisite Navigation: Append top to targetId');
				jQuery(topDomId).addClass('nav-visible');
			} else {
				//console && console.log('Multisite Navigation: skip top');
			}
			if(renderFooter === true) {				
				if(typeof targetFooterid == 'string' && jQuery(targetFooterid).length) {		
					//console && console.log('Multisite Navigation: Append footer to targetFooterid');
					jQuery(targetFooterid).append( jQuery(footerDomId) );
				} else {
					console && console.log('Multisite Navigation: Append footer to body');
					jQuery('body').append( jQuery(footerDomId) );			
				}
				// Show footer (default in-line hidden)
				jQuery(footerDomId).addClass('nav-visible');
			} else {
				//console && console.log('Multisite Navigation: skip footer');
			}
		} else {
			//console && console.log("Multisite Navigation: Error - missing targetId");
		}
		
	},
	
	addEvents: function () {
		// These ID's are aligned with the source HTML
		var navContainer = jQuery('#nav-multisite');
		var navContent = jQuery('#nav-multisite .ms-content');
		var toggleMenu = jQuery('#nav-multisite .toggle-menu');

		// Add animation
		//navContent.addClass('animated slideOutUp');

		// Collapse and init if not already
		navContainer.addClass('collapsed initialized');		

		// NOTE: WILL Render HIDDEN by default and CSS will force visible when loaded (timeing workaround)

		//Toggle content when trigger is clicked
		jQuery('#ms-trigger').on('click', function() {
			//navContent.toggleClass('slideOutUp').toggleClass('slideInDown');
			navContainer.toggleClass('collapsed');
		})

		//Hide content when close button is clicked
		jQuery('#ms-close-btn').on('click', function () {
			navContainer.toggleClass('collapsed');
			//navContent.removeClass('slideInDown').addClass('slideOutUp');
		});

        //Toggle individual lists when heading/arrow is clicked
        jQuery(toggleMenu).on('click', function() {
            jQuery(this).parent('nav').find('.list-wrap').toggleClass('open');
            jQuery(this).children('span').toggleClass('down');
        });

    },

	loadSuccess: function() {
		// override function
	},

	loadError: function() {
		// override function
	},

	quote: function(str) {
		return str.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
 	}
	
};
