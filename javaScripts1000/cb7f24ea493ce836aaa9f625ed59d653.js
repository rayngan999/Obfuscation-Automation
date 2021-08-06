ï»¿(function ()
{
	var parent = document.getElementsByTagName('head')[0];

	// get script reference
	var scriptTags = document.getElementsByTagName('script');
	var url = '';
    for (var i = 0; i < scriptTags.length; i++)
    {
		var src = scriptTags[i].getAttribute('src', -1);
        if (src > '' && src.toLowerCase().indexOf('nextit-script-manager.js') > -1)
        {
			url = src;
			break;
		}
	}

	var baseUrl = url.substr(0, url.toLowerCase().lastIndexOf('/'));
    var currentTime = new Date().getTime();

    //TODO: Add currentTime to URL

	var scriptTag = document.createElement('script');
	scriptTag.id = "nit-loader";
	scriptTag.setAttribute('type', 'text/javascript');
	scriptTag.setAttribute('language', 'javascript');
	scriptTag.setAttribute('async', 'true');
    scriptTag.setAttribute('src', baseUrl + '/nextit-loader.js?' + currentTime);

	if (parent) parent.appendChild(scriptTag);
})();