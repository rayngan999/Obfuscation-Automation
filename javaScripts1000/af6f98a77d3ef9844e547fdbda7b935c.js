(function ($) {
    $(function () {
        /**
         * Auto complete using tagit js
         */
        $('.ap-autocomplete').each(function(){
           var auto_complete_tags = $(this).data('autocomplete-terms');
           var auto_complete_tags_array = auto_complete_tags.split(',');
           //console.log(auto_complete_tags_array);
           $(this).tagit({
                availableTags: auto_complete_tags_array,
                // This will make Tag-it submit a single form value, as a comma-delimited field.
                singleField: true,
                singleFieldNode: $(this)
            });
        });
    }); //document.ready close

}(jQuery));