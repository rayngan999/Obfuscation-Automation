ï»¿(function ($) {

    $('#showLiveVideoAndChat').click(function () {
        if (!pageEditorMode()) {
            var frame = $('#video-frame');

            $('#homeNewsForegroundStartWidget').hide();
            $('#video-frame').remove();
            $('#homeNewsForegroundChatWidget .cc-content-video').append(frame);
            $('#homeNewsForegroundChatWidget').show();
        }
    });

    $('#showLiveVideo').click(function () {
        if (!pageEditorMode()) {
            var frame = $('#video-frame');
            
            $('#homeNewsForegroundStartWidget').hide();
            $('#ifrForeground').remove();
            $('#homeNewsForegroundOnlyVideoWidget .cc-content-video').append(frame);
            $('#homeNewsForegroundOnlyVideoWidget').show();
        }
    });

    $('#close-video-btn').click(function () {
        if (!pageEditorMode()) {
            var frame = $('#video-frame');

            $('#homeNewsForegroundOnlyVideoWidget').hide();
            $('#video-frame').remove();
            $('#homeNewsForegroundStartWidget .cc-content-video').append(frame);
            $('#homeNewsForegroundStartWidget').show();
        }
    });
	
	$(document).on("click", "#showLiveVideo", function() {
		$.fancybox.open({
			src  : 'https://player-fit.eclexia.it/LivePlayer/b06bc745-888d-41f0-8cf2-ae2e4bbef2e3?ap=1',
			type : 'iframe'
		});
	});
	
})(jQueryV2);