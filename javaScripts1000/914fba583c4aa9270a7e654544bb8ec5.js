// controller
$module('biInitial', function(log, api, module, Kjs) {
	/* if cookie value is 
		true: don't display initial rewards ad
		false: display rewards otp
		empty: display initial rewards ad
		Only load if user is logged in
	*/
	if(!$env.acmRoot){
		$env.acmRoot = "/account/media/";
	}
	if( $tf(Kjs.cookie.get('sephoraRewards')) || !Kjs.cookie.get('DYN_USER_ID') || !Kjs.cookie.get('VisitorUsaFullName')){
		return false;
	}
	$requires($env.acmRoot + 'javascript/app/beautyinsider/biInitial.view.js');
	// To load enrollment form
	$requires($env.acmRoot + 'javascript/app/beautyinsider/biLaunchpad.view.js');
	
	var
		// Data cache
		// Render the UI
		_render = function(data) {
			Kjs.biInitialView.panel.render(data);
		}
	;

	// Define panel composition and load data.
	// $init must be used to refer to dependency
	$init(function _$init_biInitial($) {
		// Request initial data
		$load.json($env.acmRoot + 'javascript/app/beautyinsider/bi.data.json', function(success, response, data) {
			if (success) {
				_staticMsg = data;
			}
		});
	});

	// Present the UI
	$ready(function _$ready_biInitial($) {
		_render(_staticMsg);
		Kjs.biInitialHelper.biHeaderSwitch(_staticMsg);
	});

});
