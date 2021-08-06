let recaptchaWidgets = [];
recaptchaCallback = function() {
	
	let forms = document.getElementsByTagName( 'form' );
	let pattern = /(^|\s)g-recaptcha(\s|$)/;

	for ( let i = 0; i < forms.length; i++ ) {
		let divs = forms[ i ].getElementsByTagName( 'div' );

		for ( let j = 0; j < divs.length; j++ ) {
			let sitekey = divs[ j ].getAttribute( 'data-sitekey' );

			if ( divs[ j ].className && divs[ j ].className.match( pattern ) && sitekey ) {
				let params = {
					'sitekey': sitekey,
					'type': divs[ j ].getAttribute( 'data-type' ),
					'size': divs[ j ].getAttribute( 'data-size' ),
					'theme': divs[ j ].getAttribute( 'data-theme' ),
					'align': divs[ j ].getAttribute( 'data-align' ),
					'badge': divs[ j ].getAttribute( 'data-badge' ),
					'tabindex': divs[ j ].getAttribute( 'data-tabindex' )
				};

				let callback = divs[ j ].getAttribute( 'data-callback' );

				if ( callback && 'function' == typeof window[ callback ] ) {
					params[ 'callback' ] = window[ callback ];
				}

				let expired_callback = divs[ j ].getAttribute( 'data-expired-callback' );

				if ( expired_callback && 'function' == typeof window[ expired_callback ] ) {
					params[ 'expired-callback' ] = window[ expired_callback ];
				}

				let widget_id = grecaptcha.render( divs[ j ], params );
				recaptchaWidgets.push( widget_id );
				break;
			}
		}
	}
};

/**
 * Reset the reCaptcha when Contact Form 7 gives us:
 *  - Spam
 *  - Success
 *  - Fail
 * 
 * @return void
 */
document.addEventListener( 'wpcf7submit', function( event ) {
	switch ( event.detail.status ) {
		case 'spam':
		case 'mail_sent':
		case 'mail_failed':
			for ( let i = 0; i < recaptchaWidgets.length; i++ ) {
				grecaptcha.reset( recaptchaWidgets[ i ] );
			}
	}
}, false );

/**
 * Verify reCaptcha response and display error if not found.
 */
document.addEventListener( 'wpcf7spam', function( event ) {
	
	let wpcf7forms = document.getElementsByClassName( 'wpcf7' );
	
	Array.prototype.forEach.call( wpcf7forms, function( form ) {
		
		if( form.getAttribute( 'id' ) != event.target.getAttribute( 'id' ) ) {
			return;
		}
		
		let response  = form.querySelector( 'textarea[name="g-recaptcha-response"]' );
		let recaptcha = form.querySelector( 'div.wpcf7-recaptcha' );
		if( response && '' === response.value ) {
			let recaptchaWrapper = recaptcha.parentElement;
			wpcf7.notValidTip( recaptchaWrapper, wpcf7iqfix.recaptcha_empty );
		} else if( null === response ) {
			console.log( wpcf7iqfix.response_err );
		}
	} );
} );