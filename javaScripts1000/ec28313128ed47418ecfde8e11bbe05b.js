/**
 *
 */
(function ($) {

  $.fn.extend({

    promoTile: function (options) {
      
      var $win = $(window);
      var defaultOptions = {
            queue : $('#promo-tile-results'),
            pool  : $('#search-result-items'),
            match : '.promo-tile-results',
            multiMatch: $('.promo-tile-cat-results'),
            sort  : function() { return false; }
          };

      options = $.extend(true, defaultOptions, options);

      var promoTile =  options.queue.children('.promo-tile-item');
      var $firstPromo = "",
      	  firstPromoSize = "",
      	  offset = [0];
      
      if (promoTile.length === 0) { return false; }
      
      var positions = [];

      promoTile.each(function(index) {

        // if is is catlevelone template, search pool for tile results sections equal to promotile grid number, 
        // get it's child eq to the promotile position and put promotile before it
        // else if it's categoryslots the only match will be one, then parse for position

        var match = options.multiMatch.length > 0 ? parseInt($(this).data('gridpos'), 10) - 1 : 0;

        var promoDesktopTileStart = $(this).data('promodesktoptilestart');
        var promoMobileTileStart = $(this).data('promomobiletilestart');
        var promoTileStartPosition = '';
        
        if (typeof(promoDesktopTileStart) !== 'undefined' && $win.width() >= 768) {
          promoTileStartPosition = promoDesktopTileStart;
        } else if (typeof(promoMobileTileStart) !== 'undefined' && $win.width() < 768) {
          if (promoMobileTileStart === '-1.0') {
            promoTileStartPosition = promoDesktopTileStart;
          } else {
            promoTileStartPosition = promoMobileTileStart;
          }
        }
        
        if (promoTileStartPosition === '' || promoTileStartPosition === '-1.0') {
          promoTileStartPosition = '1.0';
        }
        
        var position = parseInt(promoTileStartPosition, 10);
        
        // handle same positions
        if (positions.length > 0 && positions.toString().indexOf(position) > -1) {
          // position already reserved by another promo item
          position = position + 1;
        } else {
          positions.push(position);
        }

        $(this).css('-ms-flex-order', "" + position);

        var found = options.pool.find(options.match).eq(match);
          
        options.sort.apply(found, {});
      });

      // check again...
    }

  });

})(jQuery);
