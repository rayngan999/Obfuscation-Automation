let manageHistoryTrackerForMenu = function( menuStatus ) {
	if ( menuStatus ) {
		if ( !window.history.state || !window.history.state.burgerMenu )
			window.history.pushState( { burgerMenu: true }, 'theFork', '' );
		}
		else if ( window.history.state && window.history.state.burgerMenu )
			window.history.back();
	}

angular
	.module( 'tassApp' )
		.directive(
			'headerDirective',
			function(){
				return {
					restrict: 'A',
					link: function( $scope ) {
						let header = document.getElementById( 'header' );
						let main = document.getElementsByTagName( 'main' ).item( 0 );
						let currentState = false;
						window.addEventListener(
							'scroll',
							function(){
								if ( $scope.$root.mainMenuStatus )
									return true;
								let setState = ( main.offsetTop - header.offsetHeight <= window.pageYOffset - 5 );
								if ( !currentState && setState ) {
									header.classList.remove("header-on_top");
									currentState = true;
									}
								if ( currentState && !setState ) {
									header.classList.add("header-on_top");
									currentState = false;
									}
								}
							);
						$scope.manageHistoryTrackerForMenu = manageHistoryTrackerForMenu;
						}
					}
				}
			);

angular
	.module( 'tassApp' )
		.directive(
			'menuDirective',
			function() {
				return {
					restrict: 'A',
					link: function( $scope ) {
						$scope.manageHistoryTrackerForMenu = manageHistoryTrackerForMenu;
						window.addEventListener(
							'popstate',
							function( e ){
								if ( $scope.$root.mainMenuStatus )
									document.getElementById( 'close-menu-button' ).click();
									else if ( window.history.state && window.history.state.burgerMenu )
										document.getElementById( 'open-menu-button' ).click();
								}
							);
						}
					}
				}
			);
