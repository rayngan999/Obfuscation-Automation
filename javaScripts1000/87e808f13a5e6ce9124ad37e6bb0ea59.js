if (smg && smg.isTouch) {
    (function ($) {
        $(document).ready(function () {
            var imgTouchObj = null;

            $('.modal-box, .screen-overlay, .x-close-modal').css('display', 'none');

            $('.gallery-el')
                .on('init', function (event, slick) {
                    galleryModalToggle();
                });

            function openModal(image) {
                var mycanvas = document.getElementById('mycanvas');
                $('.modal-box,#mycanvas, .x-close-modal').css('display', 'block');
                $('#content').addClass('image-open');
                imgTouchObj = new ImgTouchCanvas({
                    canvas: mycanvas,
                    path: image.data('imgZoom')
                });
            }

            function modalToggle() {
                $('img.zoom-image').on('click', function (e) {
                    openModal($(this));

                })
            }

            function galleryModalToggle() {
                $('.slick-slide:not(.video-slide)').on('click', function (e) {
                    e.stopPropagation();
                    openModal($('.slick-current .imageresource'));
                });

                 if (window.location.search.indexOf('fullscreen=1') > -1) {
                    openModal($('.slick-current .imageresource'));
                }
            }

            function clickBlackClose(e) {
                var xPosition = e.clientX;
                var yPosition = e.clientY;
                var click_position = {
                    x: xPosition,
                    y: yPosition
                };
                //closes image when you click the black background around it
                if (!(click_position.x > imgTouchObj.position.x && click_position.x < (imgTouchObj.imgTexture.width * imgTouchObj.scale.x) + imgTouchObj.position.x &&
                    click_position.y > imgTouchObj.position.y && click_position.y < (imgTouchObj.imgTexture.height * imgTouchObj.scale.y) + imgTouchObj.position.y )) {
                    closeModal();
                }
            }

            function click_close() {
                $('#mycanvas').on('click', function (e) {
                    clickBlackClose(e);
                });
                $('.x-close-modal').on('click', function () {
                    closeModal();
                });
            }

            function closeModal() {
                $('#mycanvas, .x-close-modal, .modal-box').css('display', 'none');
                $('#content').removeClass('image-open');
                imgTouchObj.clear();
            }

            modalToggle();
            click_close();

        });

    })(jQuery);
}
