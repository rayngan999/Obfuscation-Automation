var _social_share_elem = '';
var _share_url = '';

function initializeElement(selectorText, shareUrl) {
    if ($(selectorText).length == 0) {
        console.log('element for social-share "' + selectorText + '" not found');
        return;
    }

    _share_url = shareUrl;
    _social_share_elem = selectorText;

    $('#mdl-social-share').modal({
        keyboardShortcuts: false,
        closable: false
    });

    $('#mdl-social-share').find('a.share-facebook').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + _share_url);
    $('#mdl-social-share').find('a.share-twitter').attr('href', 'https://twitter.com/intent/tweet?text=' + _share_url);
    $('#mdl-social-share').find('a.share-line').attr('href', 'https://social-plugins.line.me/lineit/share?url=' + _share_url);

    // $('#mdl-social-share').find('a.share-facebook-message').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + _share_url);
    // $('#mdl-social-share').find('.zalo-share-button').attr('data-href', _share_url);
    $('#mdl-social-share').find('a.share-url').attr('data-clipboard-text', _share_url);

    var clipboard = new ClipboardJS('#mdl-social-share a.share-url');

    clipboard.on('success', function (e) {
        alert($('#mdl-social-share a.share-url').attr('data-tooltip-text'));
    });
}

function openShare() {
    $('#mdl-social-share').modal('show');
    $('#mdl-social-share').css('height', 'auto');
}