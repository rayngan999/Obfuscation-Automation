///<reference path="../../Infra/Infra.js" />
///<reference path="../../Infra/Logging.js" />
///<reference path="../../Adaptor/StdAdaptor.js" />
///<reference path="../../Adaptor/Adaptor.js" />
///<reference path="../../Adaptor/Browser.js" />
///<reference path="../../Positioning/Positioning.js" />
///<reference path="../../Enums.js" />
///<reference path="../../Events.js" />
///<reference path="../InteractionData.js" />
///<reference path="../InteractionUtil.js"/>
///<reference path="../InteractionObjects.js" />
///<reference path="../StdInteractionManager.js" />
///<reference path="../InteractionManager.js" />
///<reference path="../../Initializer.js" />

EBG.declareNamespace("RichModules");

EBG.RichModules.FFVisibilityProvider = function (resourceObjId, adConfig, options) {
    /// <summary>
    /// works for  BOTH FireFox and Safari 6.0+
    /// </summary>
    /// <param name="resourceObjId" type="String">Resource Object id which the visibility provider calculates</param>
    /// <param name="adConfig" type="Object">Holds the configuration of the Ad.</param>

    EBG.callSuperConstructor(EBG.RichModules.FFVisibilityProvider, this, [resourceObjId, adConfig, options]);
};

EBG.RichModules.FFVisibilityProvider.prototype = {
    name: "FF",
    isTimedBaseVisibility: true,

    _magicConstant: 100, // the height of the bars in firefox, it's either 80 or 120 depending if bookmarks are shown. 100 is the middle.
    _focusOnResourceElem: null,        // is the focus currently on resource element (resource Id)
    _justReceivedFocusOnPage: null,        // is our resource element (resource Id) currently blured
    _reachedMaxAdDuration: false,
    _lastValue: -1,

    _getInnerFrameTopLeft: function () {
        /// <summary>
        /// returns the iframe position in the window. 
        /// </summary>
        /// <returns type="Object">Top Left point of containing window (X,Y)</returns>
        return EBG.adaptor.getIframePosition();
    },


    _getViewPortRect: function () {
        // for FFVisibilityProvider, element rect is relative to screen (monitor) top left, and not the viewport top left as in Geometric.
        // Therefore we need to adjust the viewport the same way
        var viewPortSize = this._getViewPortMetrics();
        var top = ~~window.screenY;
        var left = ~~window.screenX;
        return { top: top + (window.fullScreen ? 0 : this._magicConstant), left: left, right: left + viewPortSize.Width, bottom: top + viewPortSize.Height };
    },

    _getViewPortMetrics: function () {
        /// <summary>
        /// returns the browser screen size (if in iframe in FF)
        /// </summary>
        /// <returns type="Object">Top Left point of containing window (X,Y)</returns>

        var win = this.adConfig.displayWin || EBG.adaptor.getDisplayWin();
        var heightWidth = { Height: 0, Width: 0 };
        if (EBG.isDefined(win.outerWidth) && (win.outerWidth > 0 || win.outerHeight > 0)) {
            heightWidth.Width = win.outerWidth;
            heightWidth.Height = win.outerHeight;
        }
        else if (EBG.isDefined(win.screen.availWidth)) {
            heightWidth.Width = win.screen.availWidth;
            heightWidth.Height = win.screen.availHeight;
        }
        //subtract browser window scrollbars if there are any
        if (EBG.isDefined(win.scrollMaxX) && win.scrollMaxX > 0 && EBG.isDefined(EBG.adaptor.scrollBarWidth) && EBG.adaptor.scrollBarWidth > 0) {
            heightWidth.Height -= EBG.adaptor.scrollBarWidth;
        }
        if (EBG.isDefined(win.scrollMaxY) && win.scrollMaxY > 0 && EBG.isDefined(EBG.adaptor.scrollBarHeight) && EBG.adaptor.scrollBarHeight > 0) {
            heightWidth.Width -= EBG.adaptor.scrollBarHeight;
        }
        return heightWidth;

    },

    _subscribeToEvents: function () {
        /// <summary>
        /// Subscribe the provider for some events for recalculating visibility
        /// </summary>
        EBG.runTimed(this, this._visibilityPollingCheck, [], EBG.RichModules.VisibilityManager.VisibilityCheckInterval);
    },

    _visibilityPollingCheck: function () {
        /// <summary>
        /// This is the visibility polling check in case we cannot get any visibility events.
        /// </summary>
        var $this = this;
        if (!this._reachedMaxAdDuration) {
            var res = this._calculateVisibilityResult();
            if (res.percentage != this._lastValue) {
                this._dispatchCheckVisibility(res);
                this._lastValue = res.percentage;
            }

            EBG.runTimed($this, $this._visibilityPollingCheck, [], EBG.RichModules.VisibilityManager.VisibilityCheckInterval);
        }
    },
    _getAssetRect: function (id) {
        var rect = EBGInfra.callSuperFunction(EBG.RichModules.FFVisibilityProvider, this, "_getAssetRect", [id]);
        // iframe position relative to monitor (screen) top left
        rect.top += ~~window.mozInnerScreenY; 
        rect.left += ~~window.mozInnerScreenX;
        rect.bottom += ~~window.mozInnerScreenY;
        rect.right += ~~window.mozInnerScreenX;
        return rect;
    }
};

EBG.declareClass(EBG.RichModules.FFVisibilityProvider, EBG.RichModules.GeometricVisibilityProvider);