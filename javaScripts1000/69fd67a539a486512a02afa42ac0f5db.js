$(document).ready(function () {

    /**
     * for Tooltip in Bootstrap 3 don't have a listener on windows resize
     * here created manually Tooltip Window Resize Listener for position recalculate
     */
    function addTooltipWindowResizeListener() {
        $.fn.tooltip.Constructor.prototype.recalculatePosition = function () {
            var $tip = this.tip();
            if ($tip.is(':visible')) {
                var placement = typeof this.options.placement == 'function' ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement;

                var autoToken = /\s?auto?\s?/i;
                var autoPlace = autoToken.test(placement);
                if (autoPlace) placement = placement.replace(autoToken, '') || 'top';

                $tip.addClass(placement);

                this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element);
                this.$element.trigger('inserted.bs.' + this.type);

                var pos = this.getPosition();
                var actualWidth = $tip[0].offsetWidth;
                var actualHeight = $tip[0].offsetHeight;

                if (autoPlace) {
                    var orgPlacement = placement;
                    var viewportDim = this.getPosition(this.$viewport);

                    placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top' : placement == 'top' && pos.top - actualHeight < viewportDim.top ? 'bottom' : placement == 'right' && pos.right + actualWidth > viewportDim.width ? 'left' : placement == 'left' && pos.left - actualWidth < viewportDim.left ? 'right' : placement;

                    $tip
                        .removeClass(orgPlacement)
                        .addClass(placement);
                }

                var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);
                this.applyPlacement(calculatedOffset, placement);
            }
        };

        $(window).on('resize', function () {
            $('.glyphicon.glyphicon-info-sign').tooltip('recalculatePosition');
            $('[data-toggle="tooltip"]').tooltip('recalculatePosition');
        });
    }

    addTooltipWindowResizeListener();
});
