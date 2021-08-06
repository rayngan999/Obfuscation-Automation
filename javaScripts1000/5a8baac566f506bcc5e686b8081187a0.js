(function($, window, document, undefined) {
    'use strict';

    // init cubeportfolio
    var _cols = 2;
    if( $('#grid-container').data('cols') != undefined ){
	    _cols = $('#grid-container').data('cols');
    }
    var _gap = 45, _gaph = 45;
    if( _cols == 3 ){
	    _gap = 20;
	    _gaph = 20;
    }else if( _cols == 4 ){
	    _gap = 10;
	    _gaph = 10;
    }
    if( $('#grid-container').data('gap') != undefined ){
	    _gap = $('#grid-container').data('gap');
    }
    if( $('#grid-container').data('gaph') != undefined ){
	    _gaph = $('#grid-container').data('gaph');
    }
    $('#grid-container').cubeportfolio({
        filters: '#filters-container',
        loadMore: '#loadMore-container',
        loadMoreAction: 'auto',
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: 'fadeOutTop',
        gapHorizontal: _gaph,
        gapVertical: _gap,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1600,
            cols: _cols
        }, {
            width: 1200,
            cols: _cols
        }, {
            width: 800,
            cols: _cols
        }, {
            width: 500,
            cols: _cols
        }, {
            width: 320,
            cols: _cols
        }],
        caption: 'overlayBottom',
        displayType: 'lazyLoading',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
    });

})(jQuery, window, document);
