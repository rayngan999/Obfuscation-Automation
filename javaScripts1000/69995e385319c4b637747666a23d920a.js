angular
	.module('tassApp')
		.directive( 
			'headerTop0Directive', 
			function() {
				return {
					restrict: 'A',
					link: function ( $scope ) {
						let header = document.getElementsByClassName( 'top0-header' ).item ( 0 );
						let top0 = document.getElementsByClassName( 'top0' ).item( 0 );
						let currentState = true;
						window.addEventListener(
							'scroll', 
							function() {
								if ( $scope.$root.mainMenuVisible )
									return true;
								let setState = ( header.clientTop < top0.getBoundingClientRect().top - header.clientHeight + 1 );
								if ( !currentState && setState ) {
									header.classList.add( 'top0-header__active' );
									currentState = true;
									}
								if ( currentState && !setState ) {
									header.classList.remove( 'top0-header__active' );
									currentState = false;
									}
								}
							);
						}
					};
				}
			);
