({
    placeAdTag: function () {
        this.init()
        this.placeDisplayIframeAdTag('onLoad');
    },

    init: function () {
        if (!String.prototype.startsWith) {
            String.prototype.startsWith = function (searchString, position) {
                position = position || 0;
                return this.indexOf(searchString, position) === position;
            };
        }
    },

    placeDisplayIframeAdTag: function (loadMode) {
        var params = this.params();
        var noSync = this.param(params, "ns");
        if (noSync == null) {
            var ss = document.createElement("script");
            ss.src = "https://sync.dmp.otm-r.com/match/aotm.js";
            ss.type = "text/javascript";
            this.currentScript().parentElement.appendChild(ss)
        }

        var url = 'https://pub-eu.p.otm-r.com/adi?' + params.join('&') + "cb=" + Date.now(),
            width = this.param(params, 'w'),
            height = this.param(params, 'h'),
            cid = this.param(params, 'cid');

        var tag = document.createElement('iframe');
        tag.style.display = 'inline-block';
        tag.frameBorder = 0;
        tag.scrolling = 'no';
        if (width && height) {
            tag.style.width = width + 'px';
            tag.style.height = height + 'px';
            tag.width = width + 'px';
            tag.height = height + 'px';
        }

        if (loadMode == 'onLoad') {
            tag.src = url;
            this.placeTag(cid,tag);
        } else if (loadMode == 'onLoaded') {
            this.bindEvent(window, 'load', function () {
                tag.src = url;
                this.placeTag(cid,tag);
            })
        }
    },

    placeTag: function (cid, tag) {
        if (cid) {
            document.getElementById(cid).appendChild(tag)
        } else {
            this.currentScript().parentElement.appendChild(tag);
        }
    },

    param: function (params, name) {
        for (var i = 0; i < params.length; i++) {
            if (params[i].startsWith(name + '=')) {
                return params[i].substr(name.length + 1);
            }
        }
        return null;
    },

    params: function () {
        var params = this.clientParams()
        this.addParam(params, 'tz', (new Date).getTimezoneOffset());
        this.addParam(params, 'ref', this.pageUrl());
        this.addParam(params, 'rr', this.pageReferer());
        this.addParam(params, 'rand', Math.round(1e6 * Math.random()));
        return params;
    },

    clientParams: function () {
        return this.currentScript().src.replace(/^[^\?]+\??/, '').split(/[;&]/)
    },

    addParam: function (params, name, value) {
        if (typeof value != 'undefined' && value != null) {
            params.push(name + '=' + encodeURIComponent(value))
        }
    },

    pageUrl: function () {
        try {
            return encodeURIComponent(top.location.href);
        } catch (e) {
            if (this.frameLevel() == 1) {
                return encodeURIComponent(window.document.referrer);
            } else {
                return null
            }
        }
    },

    pageReferer: function () {
        try {
            var ref = top.document.referrer;
            if (ref == null || typeof ref == 'undefined') {
                return null
            }
            return ref.length > 0 ? ref : 'direct';
        } catch (err) {
            return null
        }
    },

    currentScript: function () {
        return document.currentScript || (function () {
            var scripts = document.getElementsByTagName('script');
            return scripts[scripts.length - 1];
        })()
    },

    bindEvent: function (el, eventName, eventHandler) {
        if (el.addEventListener) {
            el.addEventListener(eventName, eventHandler, false);
        } else if (el.attachEvent) {
            el.attachEvent("on" + eventName, eventHandler);
        }
    },

    frameLevel: function () {
        var level = 0;
        var w = window;
        while (window.top != w.window) {
            level++;
            w = w.parent;
            // infinite loop protection
            if (level >= 20) {
                break;
            }
        }
        return level
    },

}).placeAdTag();