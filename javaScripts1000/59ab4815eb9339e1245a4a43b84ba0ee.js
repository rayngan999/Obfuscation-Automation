(function ($){
  $('#tiles').imagesLoaded(function() {
	function comparatorName(a, b) {
	  return $(a).data('name') < $(b).data('name') ? -1 : 1;
	}
	function comparatorPrice(a, b) {
	  return $(a).data('price') < $(b).data('price') ? -1 : 1;
	}
	function comparatorAleatorio(a, b) {
	  return $(a).data('aleatorio') > $(b).data('aleatorio') ? -1 : 1;
	}
	// Prepare layout options.
	var options = {
	  autoResize: true, // This will auto-update the layout when the browser window is resized.
	  container: $('#main'), // Optional, used for some extra CSS styling
	  offset: 2, // Optional, the distance between grid items
	  itemWidth: 210, // Optional, the width of a grid item
	  comparator: comparatorAleatorio,
	  fillEmptySpace: false // Optional, fill the bottom of each column with widths of flexible height
	};

	// Get a reference to your grid items.
	var handler = $('#tiles li'),
		filters = $('#filters li');
		
	// Get a reference to your grid items.
	var handler2 = $('#tiles li'),
		filters2 = $('#filtersp li');

	// Call the layout function.
	handler.wookmark(options);

	/**
	 * When a filter is clicked, toggle it's active state and refresh.
	 */
	var onClickFilter = function(event) {
	  var item = $(event.currentTarget),
		  activeFilters = [];
		if(onlyFilter != 1) item.toggleClass('active');
		else {
			filters.removeClass('active');
			item.addClass('active');
		};
		if(onlyFilter != 1){
		  // Collect active filter strings
		  filters.filter('.active').each(function() {
			activeFilters.push($(this).data('filter'));
		  });
		  if(onlyFilter == 2){
			  filters2.filter('.active').each(function() {
				activeFilters.push($(this).data('filter'));
			  });
		  };
		}else{
		  // Filter by the currently selected filter
		  if (item.hasClass('active')) {
			activeFilters.push(item.data('filter'));
		  }
		};
	  if(onlyFilter != 1) handler.wookmarkInstance.filter(activeFilters, 'and');
	  else handler.wookmarkInstance.filter(activeFilters);
	}

	// Capture filter click events.
	filters.click(onClickFilter);
	if(onlyFilter == 1) $(filters[0]).trigger('click');
	
	// Get a reference to your grid items.
        var $handler1 = $('#tiles li'),
            $sortbys = $('#sortbys li');

        // Call the layout function.
        $handler1.wookmark(options);

        /**
         * When a filter is clicked, toggle it's active state and refresh.
         */
        var onClickSortBy = function(e) {
          e.preventDefault();
          $currentSortby = $(this);
          switch ($currentSortby.data('sortby')) {
            case 'price':
              options.comparator = comparatorPrice;
              break;
            case 'aleatorio':
              options.comparator = comparatorAleatorio;
              break;
            case 'name':
            default:
              options.comparator = comparatorName;
              break;
          }

          $sortbys.removeClass('active');
          $currentSortby.addClass('active');

          $handler1.wookmark(options);
        }

        // Capture filter click events.
        $sortbys.click(onClickSortBy);
		
		// Call the layout function.
		handler2.wookmark(options);

		/**
		 * When a filter is clicked, toggle it's active state and refresh.
		 */
		var onClickFilter1 = function(event) {
		  var item1 = $(event.currentTarget),
			  activefiltersP = [];
				filters2.removeClass('active');
				item1.addClass('active');
				// Filter by the currently selected filter
				if (item1.hasClass('active')) {
					activefiltersP.push(item1.data('filter'));
				};
				 filters.filter('.active').each(function() {
					activefiltersP.push($(this).data('filter'));
				  });
		handler2.wookmarkInstance.filter(activefiltersP,'and');
		}

		// Capture filter click events.
		filters2.click(onClickFilter1);
		$(filters2[0]).trigger('click');
	
  });
})(jQuery);
