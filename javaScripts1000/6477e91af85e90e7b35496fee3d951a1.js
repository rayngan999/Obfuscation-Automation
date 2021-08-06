/*

	Globals
	
*/

var dFDDayInSeconds = 24 * 60 * 60;
var dFDHourInSeconds = 60 * 60;
var dFDInclineNumber = function( N, Words) {
    //N = 1, Words = [ 'ÑÐµÐºÑÐ½Ð´Ñ', 'ÑÐµÐºÑÐ½Ð´Ñ', 'ÑÐµÐºÑÐ½Ð´' ] 
	return ( N < 10 || N > 19 )
		? ( N%10 == 1 )
			? Words[ 0 ] 
			: ( N%10 < 5 && N%10 != 0 )
				? Words[ 1 ]
				: Words[ 2 ]
		: Words[ 2 ]
	}

/*

The directives

*/

tassApp.directive(
	'dateformat', 
	function( $filter ) {
		return {
			restrict: 'E', /* optional */
			scope: true,
			link: function( $scope, $el, $attrs ) {

				$scope.format = 'd MMM, HH:mm';
				$scope.visibleDate = undefined;
				$scope.visibleTextDate = undefined;
				$scope.visibleDate = undefined;

				let ClientDateAtLocalTZ = new Date();

                let userDate = {
                    year: ClientDateAtLocalTZ.getUTCFullYear(),
                    timezoneDiff: ClientDateAtLocalTZ.getTimezoneOffset(), // ÑÐ°Ð·Ð½Ð¸ÑÐ° Ð² Ð¼Ð¸Ð½ÑÑÐ°Ñ
                    time: ClientDateAtLocalTZ.getTime(),
                    day: ClientDateAtLocalTZ.getDate(),
                    minutes: ClientDateAtLocalTZ.getMinutes(),
                    hours: ClientDateAtLocalTZ.getHours(),
                    month: ClientDateAtLocalTZ.getMonth()
                };

                let ItemRelDateAtClientTZ =  new Date(($attrs.rel - (180*60) - (userDate.timezoneDiff*60) ) * 1000 ),
                    ItemDateAtClientTZ = new Date( parseInt( $attrs.time ) * 1000 ),
                    ItemToClientDateDiffInSeconds = Math.floor( ( ClientDateAtLocalTZ.getTime() - ItemDateAtClientTZ.getTime() ) / 1000 ),
                    diffMode = $attrs.diff || 1,
                    N = 0;
                let itemDate = {
                    year: ItemDateAtClientTZ.getFullYear(),
                    month: ItemDateAtClientTZ.getMonth(),
                    day: ItemDateAtClientTZ.getDate(),
                    hours: ItemDateAtClientTZ.getHours(),
                    minutes: ItemDateAtClientTZ.getMinutes(),
                    time: ItemDateAtClientTZ.getTime()
                };

                $scope.absFormat = function() {

                    if (itemDate.year < userDate.year) {
                        $scope.format = 'd MMM yyyy, HH:mm';
                    }

                    $scope.visibleDate = new Date(itemDate.year, itemDate.month, itemDate.day, itemDate.hours, itemDate.minutes);
                };

                if ($attrs.mode === 'relFrom') {
                    if(ItemRelDateAtClientTZ){
                        relDate = {
                            year: ItemRelDateAtClientTZ.getFullYear(),
                            month: ItemRelDateAtClientTZ.getMonth(),
                            day: ItemRelDateAtClientTZ.getDate(),
                            hours: ItemRelDateAtClientTZ.getHours(),
                            minutes: ItemRelDateAtClientTZ.getMinutes()
                        };
                    } else {
                        relDate = userDate;
                    }
                    if (itemDate.year === relDate.year && itemDate.month === relDate.month  && itemDate.day === relDate.day){
                    	$scope.format = 'HH:mm';
                        $scope.visibleDate = new Date(itemDate.year, itemDate.month, itemDate.day, itemDate.hours, itemDate.minutes);
                    } else {
                        $scope.absFormat();
                    }
                }
				if ( $attrs.mode === 'rel' ) {
					if ( diffMode && ItemToClientDateDiffInSeconds < 5 * dFDHourInSeconds ) {
						if ( ItemToClientDateDiffInSeconds < 60 )
							$scope.visibleTextDate = 'Ð¡ÐµÐ¹ÑÐ°Ñ';
							else {
								if ( ItemToClientDateDiffInSeconds < dFDHourInSeconds && ( N = Math.floor( ItemToClientDateDiffInSeconds / 60 ) ) )
									$scope.visibleTextDate = N + ' ' + dFDInclineNumber( N, [ 'Ð¼Ð¸Ð½ÑÑÑ', 'Ð¼Ð¸Ð½ÑÑÑ', 'Ð¼Ð¸Ð½ÑÑ' ] )
									else if ( N = Math.floor( ItemToClientDateDiffInSeconds / dFDHourInSeconds ) )
										$scope.visibleTextDate = N + ' ' + dFDInclineNumber( N, [ 'ÑÐ°Ñ', 'ÑÐ°ÑÐ°', 'ÑÐ°ÑÐ¾Ð²' ] )
								$scope.visibleTextDate += ' Ð½Ð°Ð·Ð°Ð´'
								}
						return;
						}
						else if ( ItemToClientDateDiffInSeconds < 4 * 24 * dFDHourInSeconds ) {
							let DD = ( 
								( ItemDateAtClientTZ.getMonth() == ClientDateAtLocalTZ.getMonth() ) 
									? 0 
									: new Date( ItemDateAtClientTZ.getFullYear(), ItemDateAtClientTZ.getMonth() + 1, 0 ).getDate()
									)
								- ItemDateAtClientTZ.getDate() 
								+ ClientDateAtLocalTZ.getDate();
							if ( DD < 3 ) {
								$scope.format = 'HH:mm';
								$scope.visibleDate = ItemDateAtClientTZ;
								$scope.visibleTextDate = ( DD == 0 )
									 ? 'Ð¡ÐµÐ³Ð¾Ð´Ð½Ñ, '
									 : ( DD == 1 )
										? 'ÐÑÐµÑÐ°, '
										: 'ÐÐ¾Ð·Ð°Ð²ÑÐµÑÐ°, '
								return;
								}
							}
						}
				
				if ( ItemDateAtClientTZ.getFullYear() !== ClientDateAtLocalTZ.getFullYear() || $attrs.mode === 'print')
					$scope.format = 'd MMM yyyy, HH:mm';
				$scope.visibleDate = ItemDateAtClientTZ;
				$scope.visibleDateThreeHours = new Date(new Date($scope.visibleDate).getTime() + (60 * 60 * 3 * 1000));
                $scope.visibleDateISO = $scope.visibleDateThreeHours.toISOString().replace(/\.\d{3}Z$/, '+03:00');
			},
			template: '<span data-ng-if="visibleTextDate">{{visibleTextDate}}</span><time datetime="{{visibleDateISO}}" data-ng-if="visibleDate">{{ visibleDate | date : format}}</time>'
    	}
	}
);

tassApp.factory(
	'genDateTS', 
	[
		'$window', 
		'$rootScope', 
		'$timeout',
		'$filter', 
		function( $window, $rootScope, $timeout, $filter ) {
			function generaDate( timeStamp, mode, zone) {
				visibleDate = '';
				format = 'd MMM, HH:mm';
				visibleTextDate = false;
				visibleDate = false;
				var userTime = new Date();
				let diffZone = zone ? zone*60 : 0;

				var userDate = {
					year: userTime.getUTCFullYear(),
					timezoneDiff: userTime.getTimezoneOffset(), // ÑÐ°Ð·Ð½Ð¸ÑÐ° Ð² Ð¼Ð¸Ð½ÑÑÐ°Ñ
					time: userTime.getTime(),
					day: userTime.getDate(),
					minutes: userTime.getMinutes(),
					hours: userTime.getHours(),
					month: userTime.getMonth()
					};

				var moscowTimezone = 180;
				// itemTime = new Date((timeStamp - (moscowTimezone*60) - (userDate.timezoneDiff*60))* 1000),
				// var itemTime = new Date((timeStamp - (userDate.timezoneDiff*60))* 1000);
				//console.log((userDate.timezoneDiff*60),userDate.timezoneDiff);
				var itemTime = new Date( ( timeStamp - diffZone - ( userDate.timezoneDiff*60 ) ) * 1000 );
				var itemMode = mode;
				// diffMode = $attrs.diff ? $attrs.diff : 1;
				// relTime = new Date(($attrs.rel - (moscowTimezone*60) - (userDate.timezoneDiff*60))* 1000);
				var itemDate = {
					year: itemTime.getFullYear(),
					month: itemTime.getMonth(),
					day: itemTime.getDate(),
					hours: itemTime.getHours(),
					minutes: itemTime.getMinutes(),
					time: itemTime.getTime()
					};
    
				absFormat = function() {
					if (itemDate.year < userDate.year)
						format = 'd MMM yyyy, HH:mm';
					visibleDate = new Date(itemDate.year, itemDate.month, itemDate.day, itemDate.hours, itemDate.minutes);
					}
		        if ( itemMode == 'abs' )
					absFormat();
		        return $filter('date')( visibleDate, format ); 
		    	}
	    	return generaDate
			}
		]
	);
