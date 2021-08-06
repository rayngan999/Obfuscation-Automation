if (typeof(google_ad_client) == 'undefined' || !google_ad_client) google_ad_client = 'ca-livedoor-blog_js';
if (typeof(google_ad_channel) == 'undefined' || !google_ad_channel) google_ad_channel = 'blog_2';

//save parameters
ldb_google_ad_client = google_ad_client;
ldb_google_ad_channel = google_ad_channel;
ldb_google_encoding = (typeof(ld_blog_vars) == 'object' ? ld_blog_vars.charset : 'euc-jp');
ldb_google_ad_type = (typeof(google_ad_type) != 'undefined' ? google_ad_type : 'image,flash,html');
ldb_google_hints = (typeof(google_hints) != 'undefined' ? google_hints : '');
ldb_google_page_url = (typeof(google_page_url) != 'undefined' ? google_page_url : '');

var ldb_user_ads = {
	display: function(format,channel,client){
	//common parameters
	google_language = 'ja';
	google_safe = 'high';
	google_ad_section = 'default';
	google_ui_version = 1;
	//load parameters
	google_ad_client = (typeof(client) != 'undefined' ? client : ldb_google_ad_client);
	google_ad_channel = (typeof(channel) != 'undefined' ? channel : ldb_google_ad_channel);
	google_encoding = ldb_google_encoding;
	google_ad_type = ldb_google_ad_type;
	google_hints = ldb_google_hints;
	google_page_url = ldb_google_page_url;
	switch(format){
		case '728x90':
			google_ad_width = 728;
			google_ad_height = 90;
			google_ad_format = '728x90_as';
			break;
		case '468x60':
			google_ad_width = 468;
			google_ad_height = 60;
			google_ad_format = '468x60_as';
			break;
		case '300x250':
			google_ad_width = 300;
			google_ad_height = 250;
			google_ad_format = '300x250_as';
			break;
		case '336x280':
			google_ad_width = 336;
			google_ad_height = 280;
			google_ad_format = '336x280_as';
			break;
		case '200x200':
			google_ad_width = 200;
			google_ad_height = 200;
			google_ad_format = '200x200_as';
			break;
		case '160x600':
			google_ad_width = 160;
			google_ad_height = 600;
			google_ad_format = '160x600_as';
			break;
		default:
			return;
	}
	document.write('<scr' + 'ipt type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></scr' + 'ipt>');
	}
}
