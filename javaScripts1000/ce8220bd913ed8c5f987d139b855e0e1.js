ï»¿(function ($) {

    $(function () {

        $(document).on('click', '.jq-follow', function (event) {
            event.preventDefault();
            var srcObj = $(this);
            $.ajax({
                url: '/api/sitecore/Follow/Follow',
                type: 'POST',
                dataType: 'JSON',
                async: true,
                data: { firstname: $(this).data('firstname'), lastname: $(this).data('lastname'), action: $(this).data('action') },
                success: function (data) {
                    if (data.Status === 'OK') {
                        if (srcObj.data('action') === 'follow') {
                            srcObj.data('action', 'unfollow');

                        } else {
                            srcObj.data('action', 'follow');
                        }
                        srcObj.find('.cc-button-text').text((srcObj.data('action') === 'follow' ? 'SEGUI ' : 'NON SEGUIRE ') + srcObj.data('firstname'));
                    }
                },
                error: function (data) {

                },
                complete: function (data) {

                }
            });
        });
    });
})(jQueryV2);