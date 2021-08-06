/**
 * Use this file to trigger hotjar for user tracking
 */
(function (init) {
	require(['jquery', 'util/remspect'], init);
})(function ($, remspect) {
	// Remspect factor="hotjar" variation="v1"
	$(document).ready(function() {
		if (remspect.isVariation('hotjar', 'v1')) {
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:416824,hjsv:5};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');
		}
	});
});