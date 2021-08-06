<!DOCTYPE html>
<HEAD>
	<script>
		"use strict";
		window.IframeShim = (function(){

			//orign & namespace data is passed in via urlencoded json object in url hash
			var _hash_data = JSON.parse(decodeURIComponent(window.location.hash.substr(1))),
				_namespace = _hash_data.namespace,
				_window_origin = _hash_data.window_origin,
				_iframe_origin = _hash_data.iframe_origin,
				_debug = _hash_data.debug;

			function _log(){
				if(!_debug) return;
				arguments[0] = ":XDC_IFR: "+arguments[0];
				console.log.apply(console, arguments);
			}
				
			//basic cookie getter function (returns object of all cookies key/val)
			function _get_local_cookies(){
				var cstring = document.cookie.split(';'),
					cookies = {};
				cstring.forEach(function(cs){
					var vals = cs.trim().split("=");
					if(!vals[0]) return;
			        cookies[vals[0]] = decodeURIComponent(vals[1]);
				});
			    return cookies;
			}

			//basic cookie setter function
			function _set_local_cookie( cookie_name, cookie_value, expires_days, secure_only ){
				var d = new Date();
			    d.setTime(d.getTime() + (expires_days*1000*60*60*24) );
			    var cookie_str = cookie_name + "=" + cookie_value + "; expires="+d.toUTCString() + (secure_only ? ";secure" : "");
			    _log("_set_local_cookie", cookie_str);
			    document.cookie = cookie_str;
			}

			//listen for incoming postMessage requests (to write cookie, incoming from local page that loaded iframe)
			window.addEventListener('message', function(event){

				_log("incoming postMessage", event.origin, event.data);

				var origin = event.origin || event.originalEvent.origin; // For Chrome, the origin property is in the event.originalEvent object.
				if ( [_window_origin,_iframe_origin].indexOf(origin) === -1 ) return; //incoming message not from iframe page
				
				//We must filter messages here to verify that it's the specific message/type we are looking for, and not from another script
				var data = null;
				try{
		        	data = JSON.parse(event.data);
		        }catch(e){}
		        
		        if(!data) return; //data is null		        
		        if(typeof data !== 'object' || (data instanceof Array)) return; //data is not a non-array object
	        	if(!('msg_type' in data) || data.msg_type !== 'xdsc_write') return; //data is not a xdomainc-cookie payload
	        	if(!('namespace' in data) || data.namespace !== _namespace) return; //wrong namespace for msg

	        	if(data.secure_only && window.location.protocol !== 'https:'){
	        		console.error("xDomainCookie - ERROR, secure_only flag set but page is not loaded over HTTPS:");
	        	}
	        	
	        	var expires_days = parseInt(data.expires_days,10);
		        _set_local_cookie( data.cookie_name, data.cookie_val, expires_days, data.secure_only );
		        //ping down to page again to update values of xdomain cookie data
		        _send_xdomain_cookie_data_to_page();
			});

			function _send_xdomain_cookie_data_to_page(){
				var msg = {
					cookies:  _get_local_cookies(),
					msg_type: 'xdsc_read',
					namespace: _namespace
				};

				_log("_send_xdomain_cookie_data_to_page", msg);
				//postmessage to parent window w/ data
				window.parent.postMessage(JSON.stringify(msg), _window_origin);
			}

			//initialization - ping parent window w/ cookie payload right away so it an hit callbacks asap
			_send_xdomain_cookie_data_to_page();

		})();
	</script>
</HEAD>
</HTML>