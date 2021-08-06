var smg = smg || {};

smg['plugins'] = smg.plugins || {};

(function($, plugins) {
    var self;

    plugins.ajaxCommentsFetchCounts = {
        alreadyFetched: {},
        fetchCounts: function(ids) {
            if (!ids) {
                var ids = [];
                $.each($("[class*='comment-count-']"), function(i, el) {
                    let postId = $(this).attr("class").match(/comment-count-(\d+)/i)[1];
                    if (typeof self.alreadyFetched[postId] === 'undefined') {
                        ids.push(postId);
                    } else {
                        $('.comment-count-' + postId).text(self.alreadyFetched[postId]);
                    }
                });
            }

            $.ajax({
                url: ajax_comments_vars.ajaxurl + '/comments_count/',
                contentType: 'application/json',
                data: {post_ids: ids},
                success: function(r) {
                  if(Object.keys(r).length) {
                    $.each(r, function(post_id, count) {
                        $('.comment-count-' + post_id).text(count);
                        self.alreadyFetched[post_id] = count;
                    });
                  }

                }
            });
        },
        init: function() {
            self = this;
            self.fetchCounts();
        }
    };

    $(document).ready(function() {
        plugins.ajaxCommentsFetchCounts.init();
    });
})(jQuery, smg.plugins);
