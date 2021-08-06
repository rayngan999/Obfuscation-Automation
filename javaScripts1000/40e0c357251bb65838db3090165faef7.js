window.lastMidrollPlaySecond = 0;
window.preRollPlaySecond = 0;
(function(a) {
    a.vast = {}
})(jwplayer);
(function(c) {
    var f = c.vast,
        a = c.utils,
        d = c.events,
        b = c._;

    function e(h, g) {
        var i = Math.pow(10, g);
        return Math.round(h * i) / i
    }
    f.adcontroller = function(l, ac, Z) {
        var E, k = this,
            U, p = {},
            ad, R, q = {},
            o = "",
            X = false,
            Q = false,
            B = 0,
            g, H, L, F = null,
            D = [],
            t = [],
            O = false,
            y = {},
            S = false,
            I = -1;
        a.extend(k, new d.eventdispatcher());
        l.onReady(function ab() {
            if (ac.debug) {
                E = l.id
            }
            U = l.getRenderingMode() === "flash";
            H = new f.staticplayer(l, Z);
            L = new f.companion(E);
            var ak = window.location.href;
            var am = new a.key(c.key);
            var ap = am.edition();
            //q.trackingbase = (ak.match(/^https/) ? "https://" : "http://") + "www.myvideo.ge/ping.gif";
            //q.account = am.token();
            //q.domain = V();
            //q.edition = b.indexOf(["pro", "premium", "ads", "invalid", "enterprise"], ap) + 1;
            //q.hosting = c.defaults && c.defaults.ph ? c.defaults.ph : 0;
            R = ad = f.configparser.getSchedule(ac);
            if (ad.isVMAP()) {
                var aj = ad.getVMAP();
                if (aj) {
                    var aq;
                    var ao = function ao(ar) {
                        clearTimeout(aq);
                        try {
                            f.vmapparser(ar.responseXML, ad);
                            Y(ad)
                        } catch (at) {
                            C({
                                message: "Error parsing VMAP",
                                code: 1002,
                                vmap: aj
                            })
                        }
                    };
                    var an = function an(ar) {
                        clearTimeout(aq);
                        a.log(ar);
                        C({
                            message: "Error Loading VMAP Schedule",
                            code: (ar === "Timeout") ? 1007 : 1008,
                            vmap: aj
                        })
                    };
                    var al = a.ajax(aj, ao, an);
                    if (al) {
                        aq = setTimeout(function() {
                            al.onload = null;
                            al.onreadystatechange = null;
                            al.onerror = null;
                            if (al.abort) {
                                al.abort()
                            }
                            an("Timeout")
                        }, 5000)
                    }
                }
            }
            p = f.configparser.getOptParams(ac);
            l.onBeforePlay(A);
            l.onCast(ai);
            l.onPlay(w);
            l.onTime(N);
            l.onBeforeComplete(j);
            l.onPlaylistItem(aa);
            l.onPlaylistComplete(aa);
            l.onComplete(W)
        });

        function ai(aj) {
            O = !!aj.active
        }

        function w(aj) {
            k.sendEvent(d.state.PLAYING, aj)
        }

        function A(aj) {
            if (O) {
                return
            }
            var ak = ad.getPreRoll();
            if (!X && ak) {
                g = s(ak);
                m(ak, aj)
            }
        }

        function N(aj) {
            if (O) {
                return
            }

            var ak = ad.getNextMidRoll(aj.position, aj.duration);

            if((aj.position - window.lastMidrollPlaySecond) < 15){
                ad.removeMidroll(ak);
                return;
            }

            
            if((aj.position - window.preRollPlaySecond) < 15){
                ad.removeMidroll(ak);
                return;
            }

            window.lastMidrollPlaySecond = aj.position;

            
            if (ak) {
                g = s(ak);
                T(ak, aj)
            }
        }

        function j(aj) {
            if (O) {
                return
            }
            var ak = ad.getPostRoll();
            if (!Q && ak) {
                g = s(ak);
                ah(ak, aj)
            }
        }

        function s(aj) {
            if (aj._trackers) {
                return new f.tracker(aj._trackers, E)
            }
            return null
        }

        function m(ak, aj) {
            ak._position = "pre";
            X = true;
            v(ak, aj)
        }

        function T(ak, aj) {
            ak._position = "mid";
            v(ak, aj)
        }

        function ah(ak, aj) {
            ak._position = "post";
            Q = true;
            l.detachMedia();
            v(ak, aj)
        }

        function v(ak, aj) {
            o = ak._position;
            clearTimeout(I);
            I = -1;
            if (ak._type !== "nonlinear") {
                if (!F) {
                    var al = a.isMobile() && (o === "pre" || l.isBeforePlay() || l.getPosition() === 0);
                    if (al) {
                        if (aj && aj.type === d.JWPLAYER_MEDIA_BEFOREPLAY) {
                            k.addEventListener(d.state.PLAYING, ag)
                        }
                    } else {
                        if(ak._position == 'pre'){
                            window.preRollPlaySecond = window.mediaContentSeekedFromJwEvent;
                            window.lastMidrollPlaySecond = window.preRollPlaySecond;
                        }
                        ag()
                    }
                }
            }
            if (ak._adXML) {
                ak._currentTag = ak._currentTag || "clientloadedtag_" + (B++);
                af(ak)
            } else {
                if (ak._adQueue) {
                    y = ak;
                    G()
                } else {
                    a.log("scheduled ad has no url or xml", ak);
                    ae()
                }
            }
        }

        function ag() {
            k.removeEventListener(d.state.PLAYING, ag);
            F = l.createInstream().init()
        }

        function aa(aj) {
            var am = l.getPlaylistItem(aj.index);
            if (b.isObject(am) && am.adschedule) {
                ad = f.configparser.getSchedule(am)
            } else {
                ad = R
            }
            var al;
            for (al = D.length; al--;) {
                var ak = D[al];
                D.length--;
                ak.destroy()
            }
            M();
            u();
            Q = false;
            X = false;
            Y(ad);
            ad.reset()
        }

        function G() {
            var aj = y._adQueue.shift();
            y._currentTag = aj;
            var ak = x(aj);
            if (E) {
                c._ = c._ || {};
                c._[E] = c._[E] || {};
                c._[E].actualTag = ak;
                c._[E].originalTag = aj
            }
            z(y).load(ak)
        }

        function af(aj) {
            z(aj).parseXmlString(aj._adXML)
        }

        function z(ak) {
            var aj = new f.vloader(ak, l);
            aj.addEventListener(d.COMPLETE, P);
            aj.addEventListener(d.ERROR, n);
            D.push(aj);
            return aj
        }

        function K(ak) {
            for (var aj = D.length; aj--;) {
                if (D[aj] === ak) {
                    D.splice(aj, 1);
                    ak.destroy()
                }
            }
        }

        function x(ak) {
            if (!ak) {
                return ak
            }
            var an = l.getPlaylistItem(),
                aj = window.location.href;
            ak = J(ak, "__random-number__", Math.random() * Math.pow(10, 18));
            ak = J(ak, "__timestamp__", new Date().getTime());
            ak = J(ak, "__page-url__", encodeURIComponent(aj));
            ak = J(ak, "__referrer__", encodeURIComponent(document.referrer));
            ak = J(ak, "__player-height__", l.getHeight());
            ak = J(ak, "__player-width__", l.getWidth());
            ak = J(ak, "__item-duration__", e(l.getDuration(), 3));
            ak = J(ak, "__domain__", encodeURIComponent(V()));
            if (p.companion) {
                ak = J(ak, "__companion-div__", p.companion.id)
            } else {
                ak = J(ak, "__companion-div__", "")
            }
            var ap = ak.match(new RegExp(/__item-[a-z 0-9 A-Z]*__/g));
            for (var am = 0; ap && am < ap.length; am++) {
                var al = ap[am];
                var aq = al.substring(7, al.length - 2);
                if (an.hasOwnProperty(aq) && b.isString(an[aq])) {
                    var ao = an[aq];
                    if (ao.length > 1000) {
                        ao = ao.substring(0, 1000)
                    }
                    ak = J(ak, al, encodeURIComponent(ao))
                } else {
                    ak = J(ak, al, "")
                }
            }
            return ak
        }

        function J(aj, al, ak) {
            return aj.replace(al, ak)
        }
        k.jwPauseAd = function() {
            if (t.length) {
                var ak = t[t.length - 1];
                var aj = ak.getState();
                if (aj === d.state.PLAYING || aj === d.state.BUFFERING) {
                    ak.pause()
                } else {
                    if (aj === d.state.PAUSED) {
                        ak.play()
                    }
                }
            }
        };
        k.jwPlayAd = function(ak) {
            S = true;
            u();
            var al;
            if (b.isArray(ak)) {
                al = ak.slice(0)
            } else {
                al = [ak]
            }
            var aj = {
                _adQueue: al,
                _offset: 0,
                _position: "api"
            };
            v(aj)
        };

        function P(aj) {
            k.removeEventListener(d.state.PLAYING, ag);
            clearTimeout(I);
            I = -1;
            if (!y.isWaterfalling) {
                u()
            }
            K(aj);
            var ak = new f.adplayer(aj, l, H, L, q, p, E);
            ak.addEventListener(d.JWPLAYER_AD_ERROR, r);
            ak.addEventListener(d.JWPLAYER_AD_IMPRESSION, h);
            var al = ak.init(F);
            if (!al) {
                ak.destroy();
                return
            }
            F = null;
            ak.addEventListener(d.JWPLAYER_AD_COMPLETE, i);
            t.push(ak)
        }

        function W() {
            u()
        }

        function M() {
            for (var aj = t.length; aj--;) {
                var ak = t[aj];
                t.length--;
                ak.destroy()
            }
        }

        function r(aj) {
            S = false;
            C(aj);
            if (y._adQueue && y._adQueue.length > 0 && !S) {
                v({
                    _adQueue: y._adQueue,
                    _offset: 0,
                    _position: y._position,
                    isWaterfalling: true
                });
                return
            } else {
                M()
            }
            I = setTimeout(function() {
                I = -1;
                if (D.length === 0) {
                    if (o === "post") {
                        l.attachMedia()
                    }
                    l.releaseState();
                    ae()
                }
            }, 0)
        }

        function h(aj) {
            y = {};
            if (g && !g.started) {
                g.breakStart()
            }
            l.dispatchEvent(d.JWPLAYER_AD_IMPRESSION, aj)
        }

        function i() {
            if (g) {
                g.breakEnd()
            }
            if (D.length === 0) {
                if (o === "post") {
                    l.attachMedia()
                }
            }
        }

        function u() {
            if (t.length) {
                var aj = t[t.length - 1];
                aj.clearNonlinear()
            }
        }

        function ae() {
            if (F) {
                F.destroy();
                F = null
            }
        }

        function n(aj) {
            k.removeEventListener(d.state.PLAYING, ag);
            var al = aj.vloader;
            var ak = al.allAds();
            K(al);
            if (ak && ak.length) {
                var am = ak[0];
                if (am) {
                    var ap = am.trackers;
                    if (ap && ap.error) {
                        var ao = new f.tracker(ap, E);
                        ao.error(aj.code)
                    }
                }
            }
            var an = {
                message: aj.message,
                code: aj.code,
                tag: aj.url
            };
            if (aj.wrappedUrl !== aj.url) {
                an.wrappedTag = aj.wrappedUrl
            }
            S = false;
            C(an);
            if (y._adQueue && y._adQueue.length > 0 && !S) {
                v({
                    _adQueue: y._adQueue,
                    _offset: 0,
                    _position: y._position,
                    isWaterfalling: true
                });
                return
            } else {
                M()
            }
            if (I === -1) {
                I = setTimeout(function() {
                    I = -1;
                    if (D.length === 0) {
                        ae()
                    }
                }, 0)
            }
        }

        function C(aj) {
            if (g) {
                g.error(aj.code)
            }
            l.dispatchEvent(d.JWPLAYER_AD_ERROR, aj)
        }

        function V() {
            var aj = window.location.href;
            aj = aj.match(new RegExp(/^[^/]*:\/\/\/?([^\/]*)/));
            if (aj && aj.length > 1) {
                return aj[1]
            }
            return ""
        }

        function Y(al) {
            var ak = al.getMidRolls(),
                aj = [];
            if (ak.length) {
                a.foreach(ak, function(am, an) {
                    if (an._type !== "nonlinear") {
                        aj.push({
                            begin: an._offSet,
                            text: "Advertisement"
                        })
                    }
                });

                l.callInternal("jwSetCues", aj)
            }
        }
    };
    c().registerPlugin("vast", "6.3", f.adcontroller, "vast.swf")
})(window.jwplayer);
(function(e) {
    var b = e.jwplayer,
        g = b.vast,
        a = b.utils,
        c = b.events;
    b.vast.adplayer = function(M, p, P, V, w, v, N) {
        var n = this,
            y = p.getRenderingMode(),
            aa = y === "flash",
            af = M.scheduledAd(),
            L = M.adBuffet(),
            G = M.adPod(),
            X, m = L.length ? L[0] : null,
            q, D, ab, O, Z = 0;
        a.extend(n, new c.eventdispatcher());
        n.init = function(an) {
            n.init = function() {
                throw "vast.adplayer can only be initialized once"
            };
            if (m) {
                J(m)
            }
            if (G) {
                for (var ak = 0; ak < G.length; ak++) {
                    J(G[ak])
                }
            }
            var aj = m || G[0];
            var al = aj.media[0];
            X = ("" + al.adType).toLowerCase();
            if (aa && X === "vpaid") {
                ab = "vpaid";
                I(an)
            } else {
                if (X === "static") {
                    ab = "static";
                    ac();
                    l(an)
                } else {
                    ab = "video";
                    var am = T(an);
                    if (!am) {
                        return false
                    }
                    l(an)
                }
            }
            p.onResize(ah);
            p.onFullscreen(A);
            p.onVolume(h);
            p.onMute(Q);
            return true
        };

        function R() {
            if (q.blocking) {
                l(q.blocking);
                q.blocking = null
            }
        }

        function l(aj) {
            if (aj && aj !== D) {
                aj.destroy()
            }
        }
        n.getState = function() {
            if (D) {
                return D.getState()
            }
            if (q) {
                return q.getState()
            }
            return ""
        };
        n.clearNonlinear = function() {
            P.stop();
            if (q) {
                R();
                q.stop();
                q.destroy();
                q = null
            }
        };
        n.destroy = function() {
            n.resetEventListeners();
            k();
            if (n === null) {
                return
            }
            if (D) {
                D.destroy()
            }
            if (q) {
                R();
                q.destroy()
            }
            n.clearNonlinear();
            n = M = p = q = D = w = af = L = m = G = null
        };
        n.pause = function() {
            if (D) {
                D.pause()
            }
        };
        n.play = function() {
            if (D) {
                D.play()
            }
        };

        function k() {
            if (p) {
                p.removeEventListener(c.JWPLAYER_RESIZE, ah);
                p.removeEventListener(c.JWPLAYER_FULLSCREEN, A);
                p.removeEventListener(c.JWPLAYER_MEDIA_VOLUME, h);
                p.removeEventListener(c.JWPLAYER_MEDIA_MUTE, Q)
            }
            if (D) {
                D.removeEvents()
            }
            if (q) {
                R();
                q.removeEvents()
            }
            P.stop();
            P.removeEvents()
        }

        function J(aj) {
            aj.tracker = new g.tracker(aj.trackers, N)
        }

        function ai() {
            var aj = {
                tag: af._currentTag
            };
            if (O && O.length) {
                aj.sequence = Z + 1;
                aj.podcount = O.length
            }
            return aj
        }

        function ac() {
            m.tracker.linear = "nonlinear";
            var al = m.media[0];
            var ak = m.clickthrough || "";
            var aj = P;
            aj.removeEvents();
            aj.playAd(al.file, ak, al.minDuration, af._currentTag);
            aj.onPlay(S);
            aj.onComplete(u);
            aj.onClick(o);
            aj.onError(B)
        }

        function I(ak) {
            var aj = m.media[0];
            q = new g.vpaidplayer(p, aj.file, af._currentTag, m.adParams);
            q.blocking = ak;
            q.onPlay(S);
            q.onPause(E);
            q.onTime(C);
            q.onComplete(u);
            q.onClick(U);
            q.onError(Y);
            q.onExpandedChange(K)
        }

        function T(aq) {
            var ak = null,
                al = [],
                ao;
            if (m) {
                ak = j(m)
            }
            if (G) {
                for (ao = 0; ao < G.length; ao++) {
                    var ap = j(G[ao]);
                    var an = al.length === ao;
                    if (ap && an) {
                        al.push(ap)
                    } else {}
                }
            }
            if (!al.length && !ak) {
                s("No Compatible Creatives", 403);
                return false
            }
            var am, aj;
            if (al.length) {
                am = al;
                aj = [];
                for (ao = 0; ao < am.length; ao++) {
                    aj.push(i(am[ao].vastAd))
                }
            } else {
                am = ak;
                aj = i(m)
            }
            O = am;
            Z = 0;
            if (aq) {
                D = p.setInstream(aq)
            } else {
                D = p.setInstream(p.createInstream()).init()
            }
            D.onPlay(S);
            D.onPause(E);
            D.onTime(C);
            D.onPlaylistItem(H);
            D.onComplete(t);
            D.onPlaylistComplete(ag);
            D.onMute(W);
            D.onClick(x);
            D.onAdSkipped(ae);
            D.onError(Y);
            D.onMediaError(Y);
            D.loadItem(am, aj);
            return true
        }

        function j(am) {
            am.tracker.linear = "linear";
            var aj = {
                vastAd: am,
                sources: []
            };
            var ak = am.media;
            for (var al = 0; al < ak.length; al++) {
                var an = ak[al];
                aj.sources.push({
                    file: an.file,
                    type: an.type
                })
            }
            var ap = new b.playlist.item(aj);
            var ao = b.playlist.filterSources(ap.sources, aa);
            if (ao.length === 0) {
                return null
            }
            return aj
        }

        function i(aj) {
            var ak = v.skipoffset >= 0 ? v.skipoffset : null;

            if (typeof window.customAdSkipTime != 'undefined') {
                ak = window.customAdSkipTime;
                aj.skipoffset = window.customAdSkipTime;
            }

            return {
                skipoffset: aj.skipoffset || ak,
                skipMessage: v.skipMessage,
                skipText: v.skipText
            }
        }

        function r(ak) {
            if (O) {
                var aj;
                if (O.length) {
                    aj = O[ak]
                } else {
                    aj = O
                }
                if (aj.vastAd) {
                    return aj.vastAd
                }
            } else {
                if (!m && G) {
                    return G[ak]
                }
            }
            return m
        }

        function s(an, am) {
            a.log(an);
            am = am || 900;
            var aj = r(Z);
            var al = aj.tracker;
            al.error(am);
            var ak = ai();
            ak.code = am;
            ak.message = an;
            n.sendEvent(c.JWPLAYER_AD_ERROR, ak)
        }

        function ah() {
            if (q) {
                q.resize()
            }
        }

        function A(aj) {
            var ak = r(Z);
            var al = ak.tracker;
            if (aj.fullscreen && al.started) {
                al.fullscreen()
            }
            ah()
        }

        function h(aj) {
            if (q) {
                q.setVolume(aj.volume)
            }
        }

        function Q(aj) {
            if (q) {
                q.setVolume(aj.mute ? 0 : p.getVolume())
            }
        }

        function H(aj) {
            if (D) {
                Z = aj.index;
                var ak = r(Z);
                var al = ak.clickthrough || "";
                D.setClick(al)
            }
        }

        function S(ak) {
            var am = r(Z);
            var ao = am.tracker;
            var an;
            if (!ao.started) {
                if (q) {
                    ao.linear = ak.linear
                }
                var al = a.extend({
                    linear: ao.linear
                }, ai(), i(am));
                al.message = v.dynamicMessage || "";
                al.clickthrough = am.clickthrough;
                if (al.sequence) {
                    al.podMessage = v.podMessage || ""
                }
                if (am.adTitle) {
                    al.title = am.adTitle
                }
                if (am.companions) {
                    al.companions = am.companions
                }
                p.dispatchEvent(c.JWPLAYER_AD_META, al);
                if (am.companions) {
                    an = ai();
                    an.companions = f(am.companions);
                    p.dispatchEvent(c.JWPLAYER_AD_COMPANIONS, an)
                }
                var ap = V;
                var aq = aa ? am.companions : d(am.companions);
                if (v.companion && aq && aq.length) {
                    ao.hasComp = ap.addCompanion(v.companion, aq)
                }
                var aj = z(am);
                ao.addUrl("impression", aj);
                if (N) {
                    b._[N].trackingURL = aj
                }
                ao.impression();
                an = ai();
                an.adtitle = am.adTitle || "";
                an.creativetype = ab;
                n.sendEvent(c.JWPLAYER_AD_IMPRESSION, an);
                ao.start();
                ao.creativeView();
                ad(ak)
            } else {
                if (ak.oldstate == b.events.state.PAUSED) {
                    ao.resume();
                    ad(ak)
                }
            }
        }

        function ad(aj) {
            if (X === "static" || (X === "vpaid" && aj.linear !== "linear")) {
                return
            }
            var ak = ai();
            ak.oldstate = aj.oldstate;
            ak.newstate = aj.newstate;
            p.dispatchEvent(c.JWPLAYER_AD_PLAY, ak)
        }

        function E(aj) {
            var ak = r(Z);
            var am = ak.tracker;
            am.pause();
            var al = ai();
            al.oldstate = aj.oldstate;
            al.newstate = aj.newstate;
            p.dispatchEvent(c.JWPLAYER_AD_PAUSE, al)
        }

        function C(aq) {
            var at = r(Z);
            var ao = aq.position,
                ak = aq.duration,
                ar = v.dynamicMessage || "",
                an = v.podMessage || "",
                am = ak - ao,
                ap = at.tracker;
            if (ap) {
                ap.time(ao, ak)
            }
            if (D && ar && am > 0) {
                ar = ar.replace(/xx/gi, "" + Math.round(am));
                if (O && O.length) {
                    var al = Z + 1;
                    an = an.replace(/__AD_POD_CURRENT__/g, "" + al);
                    an = an.replace(/__AD_POD_LENGTH__/g, "" + O.length);
                    ar = an + ar
                }
                D.setText(ar)
            }
            var aj = ai();
            aj.position = ao;
            aj.duration = ak;
            p.dispatchEvent(c.JWPLAYER_AD_TIME, aj)
        }

        function u() {
            t();
            ag()
        }

        function t() {
            var aj = r(Z);
            var ak = aj.tracker;
            if (!ak.firedError) {
                ak.complete();
                ak.close();
                p.dispatchEvent(c.JWPLAYER_AD_COMPLETE, ai())
            }
        }

        function ag() {
            k();
            n.sendEvent(c.JWPLAYER_AD_COMPLETE)
        }

        function W(aj) {
            var ak = r(Z);
            var al = ak.tracker;
            if (!al) {
                return
            }
            if (aj.mute) {
                al.mute();
                if (q) {
                    q.setVolume(0)
                }
            } else {
                al.unmute();
                if (q) {
                    q.setVolume(p.getVolume() / 100)
                }
            }
        }

        function o() {
            var aj = r(Z);
            p.pause(true);
            F(aj)
        }

        function U() {
            var aj = r(Z);
            F(aj, true)
        }

        function x() {
            var ak = r(Z);
            if (aa) {
                F(ak)
            } else {
                var aj = D.getState() === c.state.PAUSED;
                if (!aj) {
                    F(ak)
                }
            }
        }

        function F(aj, al) {
            aj.tracker.click();
            p.dispatchEvent(c.JWPLAYER_AD_CLICK, ai());
            var ak = e.jwcast && e.jwcast.player.id;
            if ((al || !aa) && !ak) {
                if (aj.clickthrough) {
                    e.open(aj.clickthrough)
                }
            }
        }

        function ae() {
            var aj = r(Z);
            aj.tracker.skip();
            p.dispatchEvent(c.JWPLAYER_AD_SKIPPED, ai())
        }

        function Y(aj) {
            if (aj.message && aj.message.indexOf("File could not be played") !== -1) {
                s("Error Playing Creative", 405)
            } else {
                s("Error Playing Ad Tag", 400)
            }
        }

        function B() {
            var ak = "Unable to fetch NonLinear resource";
            var aj = 502;
            s(ak, aj)
        }

        function K(aj) {
            var ak = r(Z);
            var al = ak.tracker;
            if (aj.expanded) {
                al.expand()
            } else {
                al.collapse()
            }
        }

        function z(al) {
            var am = {
                    d: w.domain,
                    c: "vast",
                    m: y,
                    a: w.account,
                    co: al.tracker.hasComp,
                    p: af._position,
                    ad: al.adsystem,
                    type: al.tracker.linear,
                    ph: w.hosting,
                    ed: w.edition,
                    n: Math.random().toFixed(16).substr(2, 16)
                },
                aj = w.trackingbase,
                an = "?";
            for (var ak in am) {
                aj += an + ak + "=" + encodeURIComponent(am[ak]);
                an = "&"
            }
            return aj
        }
    };

    function f(l) {
        var n = [];
        for (var m = 0; m < l.length; m++) {
            var j = l[m];
            var k = (j.type == "iframe" || j.type == "html") ? j.type : "static";
            var h = {
                width: j.width,
                height: j.height,
                type: k,
                resource: j.source,
                click: j.clickthrough
            };
            n.push(h)
        }
        return n
    }

    function d(h) {
        var k = [];
        for (var j = 0; h && j < h.length; j++) {
            if (h[j].type.indexOf("flash") < 0) {
                k.push(h[j])
            }
        }
        return k
    }
})(window);
(function(a) {
    a.vast.companion = function(b) {
        var e = this,
            i = a.utils,
            c, j;
        if (b) {
            a._ = a._ || {};
            a._[b] = a._[b] || {};
            a._[b].companionvast = {}
        }
        e.addCompanion = function(m, k) {
            c = m;
            j = document.getElementById(c.id);
            if (!j) {
                return false
            }
            for (var l = 0; l < k.length; l++) {
                if (d(k[l])) {
                    f(k[l]);
                    return true
                }
            }
            return false
        };
        e.removeCompanion = function() {
            j.innerHTML = ""
        };

        function g(m) {
            m = m.creativeView;
            if (!m) {
                return
            }
            if (b) {
                a._[b].companionvast.creativeView = a._[b].companionvast.creativeView || []
            }
            for (var k = 0; k < m.length; k++) {
                var l = new Image();
                l.src = m[k];
                if (b) {
                    a._[b].companionvast.creativeView.push(m[k])
                }
            }
        }

        function h(l, k, m) {
            var n = document.createElement("param");
            n.setAttribute("name", k);
            n.setAttribute("value", m);
            l.appendChild(n)
        }

        function f(l) {
            e.removeCompanion();
            if (l.type == "html") {
                j.innerHTML = l.source;
                g(l.trackers);
                return
            }
            if (l.type == "iframe") {
                var n = document.createElement("iframe");
                n.height = c.height;
                n.width = c.width;
                n.src = l.source;
                n.scrolling = "no";
                n.style.border = "none";
                n.marginWidth = 0;
                n.marginHeight = 0;
                g(l.trackers);
                j.innerHTML = "";
                j.appendChild(n);
                return
            }
            if (l.type == "application/x-shockwave-flash") {
                if (i.isMSIE()) {
                    var m = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" " width="100%" height="100%"id="' + j.id + '" name="' + j.id + '" tabindex=0"">';
                    m += '<param name="movie" value="' + l.source + '">';
                    m += '<param name="allowfullscreen" value="true">';
                    m += '<param name="allowscriptaccess" value="always">';
                    m += '<param name="scale" value="exactfit">';
                    m += '<param name="seamlesstabbing" value="true">';
                    m += '<param name="wmode" value= "opaque">';
                    m += "</object>";
                    j.innerHTML = m
                } else {
                    var o = document.createElement("object");
                    o.setAttribute("type", "application/x-shockwave-flash");
                    o.setAttribute("data", l.source);
                    o.setAttribute("width", "100%");
                    o.setAttribute("height", "100%");
                    o.setAttribute("tabindex", 0);
                    h(o, "allowfullscreen", "true");
                    h(o, "allowscriptaccess", "always");
                    h(o, "seamlesstabbing", "true");
                    h(o, "wmode", "opaque");
                    j.appendChild(o)
                }
                g(l.trackers);
                return
            }
            var k = new Image();
            k.src = l.source;
            if (i.exists(l.clickthrough)) {
                k.onclick = function() {
                    var p = window.open(l.clickthrough, "_blank");
                    p.focus()
                }
            }
            j.innerHTML = "";
            j.appendChild(k);
            g(l.trackers)
        }

        function d(k) {
            return k.width == c.width && k.height == c.height
        }
    }
})(jwplayer);
(function(e) {
    var h = e.utils,
        j = e._;
    var c = "This ad will end in xx seconds.",
        b = "Ad __AD_POD_CURRENT__ of __AD_POD_LENGTH__. ",
        g = -1,
        i = "Skip ad in xx",
        k = "Skip";

    function a(n) {
        if (j.isString(n)) {
            return [n]
        }
        if (j.isArray(n)) {
            return n.slice(0)
        }
        return n
    }

    function f(o) {
        if (o === "start" || o === "0%") {
            return "pre"
        }
        if (o === "end" || o === "100%") {
            return "post"
        }
        if (o === "pre" || o === "post" || j.indexOf(o, "%") > -1) {
            return o
        }
        var n = h.seconds(o);
        if (j.isNumber(n)) {
            return n
        }
        return false
    }

    function d(p, o) {
        var n = o.schedule || o.adschedule;

        j.each(n, function(q) {
            if (q.ad) {
                h.extend(q, q.ad);
                delete q.ad
            }
            var s = f(q.offset),
                r = {
                    _offSet: s,
                    _type: q.type
                };
            if (s === false) {
                h.log("Error: ad offset format not supported", s)
            }
            if (q.tag) {
                r._adQueue = a(q.tag)
            } else {
                if (j.isString(q.vastxml)) {
                    r._adXML = q.vastxml
                } else {
                    h.log("Error: no ad tag provided");
                    return
                }
            }
            switch (s) {
                case "pre":
                    p.setPreRoll(r);
                    break;
                case "post":
                    p.setPostRoll(r);
                    break;
                default:
                    p.addMidRoll(r)
            }
        })
    }

    function m(n) {
        var o = new e.vast.schedule();
        if (n.tag) {
            o.setPreRoll({
                _offSet: "pre",
                _adQueue: a(n.tag)
            })
        } else {
            if (j.isString(n.vastxml)) {
                o.setPreRoll({
                    _offSet: "pre",
                    _adXML: n.vastxml
                })
            } else {
                if (j.isString(n.schedule)) {
                    o.setVMAP(n.schedule);
                    return o
                } else {
                    d(o, n)
                }
            }
        }
        o.sort();
        return o
    }

    function l(o) {
        var n = {
            dynamicMessage: o.admessage || c,
            podMessage: o.podmessage || b,
            skipoffset: o.skipoffset || g,
            skipMessage: o.skipmessage || i,
            skipText: o.skiptext || k
        };
        var p = o.companiondiv;
        if (p) {
            n.companion = {
                id: p.id,
                height: p.height,
                width: p.width
            }
        }
        return n
    }
    e.vast.configparser = {
        getSchedule: m,
        getOptParams: l
    }
})(jwplayer);
(function(b) {
    function a(e) {
        var d;
        b.utils.foreach(e, function(f, g) {
            d = d || {};
            if (f === "_adQueue") {
                d[f] = g.slice()
            } else {
                d[f] = g
            }
        });
        return d
    }
    b.vast.schedule = function() {
        var g, f = [],
            d = 0,
            e, h;
        this.setPreRoll = function(i) {
            g = i
        };
        this.getPreRoll = function() {
            return a(g)
        };
        this.getPostRoll = function() {
            return a(h)
        };
        this.getNextMidRoll = function(l, k) {
            this.sort(k);
            if (f.length >= d + 1) {
                var j = f[d],
                    i = c(j._offSet, k);
                if (i < l) {
                    d++;
                    return a(j)
                }
            }
        };
        this.removeMidroll = function(midRoll){
            return;
            if(midRoll == undefined){
                return;
            }
            if(f.length > 0 && f != undefined){
                for(var i = 0; i < f.length; i++){
                    if(f[i]['_offSet'] == midRoll._offSet){
                        //f = f.slice(i,1);
                    }
                }
            }
        }
        this.getMidRolls = function() {
            var i = [];
            b.utils.foreach(f, function(j, k) {
                i.push(a(k))
            });
            return i
        };
        this.reset = function() {
            d = 0
        };
        this.addMidRoll = function(i) {
            f.push(i)
        };
        this.setPostRoll = function(i) {
            h = i
        };
        this.sort = function(i) {
            if (!i || i < 1) {
                i = 1
            }
            f.sort(function(k, j) {
                return c(k._offSet, i) - c(j._offSet, i)
            })
        };
        this.setVMAP = function(i) {
            e = i
        };
        this.isVMAP = function() {
            return e ? true : false
        };
        this.getVMAP = function() {
            return e
        }
    };

    function c(e, d) {
        if (e.toString().slice(-1) === "%") {
            return d * parseFloat(e.slice(0, -1)) / 100
        }
        return parseFloat(e)
    }
})(jwplayer);
(function(i) {
    var q = i.utils,
        c = i.events,
        d = c.JWPLAYER_MEDIA_TIME,
        o = {
            CLICK: "onClick",
            PLAY: "onPlay",
            PAUSE: "onPause",
            ERROR: "onError",
            COMPLETE: "onComplete"
        },
        l = "_staticLoadSuccess",
        b = "_staticLoadFail",
        e = "_clickHandler",
        g = function(v, B, t) {
            var x = -1,
                z = this,
                u = i._[v.id];
            q.extend(this, new c.eventdispatcher());
            u[l] = function y() {
                v.callInternal("jwAddClickHandler", w(e));
                z.sendEvent(o.PLAY)
            };
            u[b] = function A() {
                z.sendEvent(o.ERROR)
            };
            u[e] = function s() {
                z.sendEvent(o.CLICK)
            };
            x = setTimeout(function() {
                v.callInternal("jwLoadStatic", B, t, w(l), w(b))
            }, 0);
            z.removeListeners = function() {
                clearTimeout(x);
                z.resetEventListeners()
            };
            z.stop = function() {
                v.callInternal("jwStopStatic")
            };

            function w(C) {
                return ["jwplayer", "_", v.id, C].join(".")
            }
        },
        h, r, n = "data:image/png;base64,",
        a = "iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAw0lEQVQ4y2NgwATcQJwGxGuB+BoQP4PSa6Hi3AwEQCAQX4BqxIUvQNVhBcUENKPjYmwueEYGDkYOg4tkGnIViPlAhiSiS+7du/eHs7PzG2QxFxeXNyBxLAaB9DOsQJcAaXj79u1fmEEwPojGYghIP8N5bE6Faayurv6Ix4BnUP0MD3H5GWTAfyAA0XjC5SFOl4C8guwS9DBCd8kKXAaghwkOg1ZSLXaokk5AIIhMQ0KonneQXURMLg4mVBzAypN1xJYnALKHAXPzEPJQAAAAAElFTkSuQmCC",
        f = "iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAiklEQVQ4y2NgwATcQJwGxGuB+BoQP4PSa6Hi3AwEQCAQX4BqxIUvQNVhBcUENKPjYmwueEYGDkYOg4tkGnIViPlAhiTiU/gfCAgYBNLPsIJCQ0D6Gc5TaAhIP8NDbBpxASyGPKSaSygNk5VUix2qpBMQCCLTkBCq5x1kFxGTi4MJFQew8mQdseUJAImp82D/nQbxAAAAAElFTkSuQmCC",
        m = {
            cursor: "pointer",
            position: "absolute",
            margin: "auto",
            left: 0,
            right: 0,
            bottom: 0,
            display: "block"
        },
        p = "opacity 0.2s",
        j = {
            "-webkit-transition": p,
            transition: p
        },
        k = function(v, S, P, K) {
            var D = -1,
                w = -1,
                M = this,
                C;
            q.extend(this, new c.eventdispatcher());
            var x = K.parentNode;
            var A = q.bounds(x).bottom;
            var J = document.getElementById(v.id + "_controlbar");
            var T = (J.style.display === "none");
            var G = 0;
            if (T) {
                G = J.style.opacity;
                J.style.opacity = 0;
                J.style.display = "inline-block"
            }
            var L = q.bounds(J).top || (A - 40);
            if (T) {
                J.style.opacity = G;
                J.style.displa = "none"
            }
            var B = A - L;
            q.css.style(K, {
                bottom: J.offsetHeight + 25
            });
            C = document.createElement("img");
            C.id = v.id + "_vast_static";
            q.css.style(C, q.extend({
                "max-width": "100%",
                opacity: 0
            }, m, j));
            E([r, h]);
            U(h);
            K.appendChild(C);
            K.appendChild(r);
            D = setTimeout(N, 5000);
            C.onerror = N;
            C.onload = function s() {
                clearTimeout(D);
                if (C.naturalWidth === 0) {
                    return N()
                }
                z();
                q.css.style(C, {
                    top: -C.height
                }, true);
                
                q.css.style(r, {
                    top: -C.height - 8,
                    bottom: C.height - 8,
                    left: C.width
                }, true);
                q.css.style(h, {
                    top: -16
                }, true);
                R([K, C]);
                R(r, 0.75);
                if (q.isMobile()) {
                    var V = new q.touch(C);
                    V.addEventListener(q.touchEvents.TAP, y)
                } else {
                    C.onclick = y;
                    K.onmouseover = F;
                    K.onmouseout = Q
                }
                r.onclick = r.ontouchstart = u;
                h.onclick = h.ontouchstart = t;
                M.sendEvent(o.PLAY)
            };
            C.src = S;

            function N() {
                clearTimeout(D);
                M.sendEvent(o.ERROR);
                O()
            }

            function y() {
                M.sendEvent(o.CLICK)
            }

            function F() {
                R(r)
            }

            function Q() {
                R(r, 0.75)
            }

            function H() {
                R(h)
            }

            function I() {
                R(h, 0.5)
            }

            function u(V) {
                if (w === -1) {
                    V.preventDefault();
                    K.onmouseover = K.onmouseout = null;
                    E([C, r, h]);
                    K.appendChild(h);
                    w = setTimeout(function() {
                        U(C);
                        U(r);
                        R(h, 0.5);
                        K.onmouseover = H;
                        K.onmouseout = I;
                        w = -1
                    }, 250)
                }
            }

            function t(V) {
                if (w === -1) {
                    V.preventDefault();
                    K.onmouseover = K.onmouseout = null;
                    K.appendChild(C);
                    K.appendChild(r);
                    w = setTimeout(function() {
                        R([C, r]);
                        K.onmouseover = F;
                        K.onmouseout = Q;
                        w = -1
                    }, 50);
                    E(h)
                }
            }

            function R(W, V) {
                q.css.style(W, {
                    opacity: V || 1
                })
            }

            function E(V) {
                q.css.style(V, {
                    opacity: 0
                })
            }

            function U(V) {
                if (K.contains(V)) {
                    K.removeChild(V)
                    q.css.style(K,{
                        'display' : 'none'
                    });
                }
            }

            function z() {
                C.onload = C.onerror = null
            }

            function O() {
                z();
                U(C)
            }
            M.removeListeners = function() {
                clearTimeout(D);
                clearTimeout(w);
                K.onmouseover = K.onmouseout = r.onclick = h.onclick = null;
                M.resetEventListeners();
                z()
            };
            M.stop = function() {
                E([K, C, r, h]);
                setTimeout(O, 400);
                U(r);
                U(h)
            }
        };
    i.vast.staticplayer = function(z, y) {
        var C = this,
            A = z.getRenderingMode() !== "html5",
            F, s = 0,
            w = 0,
            E;
        q.extend(this, new c.eventdispatcher());
        C.type = "static";
        if (A) {
            i._ = i._ || {};
            i._[z.id] = i._[z.id] || {};
            y.style.visibility = "hidden"
        } else {
            var v = q.isFF() ? {} : j;
            y.style.opacity = 0;
            q.css.style(y, q.extend({
                top: "",
                position: "absolute",
                width: "100%"
            }, v));
            r = r || document.createElement("img");
            h = h || document.createElement("img");
            q.css.style([r, h], q.extend({
                opacity: 0.75
            }, m, v));
            r.src = n + a;
            h.src = n + f
        }
        z.onTime(u);
        C.playAd = function(M, L, K, J) {
            w = q.seconds(K);
            E = J;
            if (F) {
                F.removeListeners();
                F.stop()
            }
            if (A) {
                F = new g(z, M, L)
            } else {
                F = new k(z, M, L, y)
            }
            F.addEventListener(o.PLAY, t);
            F.addEventListener(o.CLICK, D);
            F.addEventListener(o.ERROR, B)
        };

        function u(J) {
            C.sendEvent(d, J)
        }

        function t() {
            s = z.getPosition();
            if (w > 0) {
                if (s === 0) {
                    C.addEventListener(d, x)
                } else {
                    C.addEventListener(d, I)
                }
            }
            H(o.PLAY)
        }

        function x(J) {
            s = J.position;
            C.removeEventListener(d, x);
            C.addEventListener(d, I)
        }

        function I(J) {
            var K = J.position - s;
            if (K > w) {
                C.removeEventListener(d, I);
                C.stop()
            }
        }

        function D() {
            H(o.CLICK)
        }

        function B() {
            H(o.ERROR)
        }

        function H(J, K) {
            K = K || {};
            K.tag = K.tag || E;
            C.sendEvent(J, K)
        }

        function G(J) {
            return function(K) {
                C.addEventListener(J, K)
            }
        }
        C.removeEvents = function() {
            C.resetEventListeners()
        };
        C.getState = function() {
            return c.state.PLAYING
        };
        C.stop = function() {
            if (s && F) {
                s = 0;
                w = 0;
                C.removeEventListener(d, x);
                C.removeEventListener(d, I);
                F.removeListeners();
                F.stop();
                H(o.COMPLETE)
            }
        };
        C.pause = function() {};
        C.onPlay = G(o.PLAY);
        C.onComplete = G(o.COMPLETE);
        C.onClick = G(o.CLICK);
        C.onError = G(o.ERROR)
    }
})(window.jwplayer);
(function(b) {
    var a = b.utils,
        c = "[ERRORCODE]";
    b.vast.tracker = function(h, e) {
        var f = 0,
            l = this,
            m, q = [];
        if (e) {
            b._ = b._ || {};
            b._[e] = b._[e] || {};
            b._[e].trackedvast = b._[e].trackedvast || {};
            m = b._[e].trackedvast
        }

        function p(u) {
            if (h.hasOwnProperty(u)) {
                return h[u]
            }
            return []
        }
        for (var o in h) {
            if (h.hasOwnProperty(o)) {
                if (o.indexOf("progress") === 0) {
                    var i = "" + o.split("_")[1];
                    var k = {
                        key: o,
                        offset: i,
                        tracked: false,
                        percentage: false
                    };
                    if (/^\d+%$/.test(i)) {
                        k.percentage = true;
                        k.offset = parseFloat(i)
                    } else {
                        k.offset = a.seconds(i)
                    }
                    q.push(k)
                }
            }
        }
        l.started = false;
        l.firedError = false;
        l.hasComp = false;
        l.addUrl = function(v, u) {
            if (h.hasOwnProperty(v)) {
                h[v].push(u)
            } else {
                h[v] = [];
                h[v].push(u)
            }
        };

        function r(x, w) {
            var B = p(x),
                v, u, A;
            if (m) {
                m[x] = m[x] || []
            }
            for (v = 0; v < B.length; v++) {
                u = B[v];
                if (u) {
                    if (w) {
                        for (var y in w) {
                            if (w.hasOwnProperty(y)) {
                                var z = w[y];
                                u = u.replace(y, z)
                            }
                        }
                    }
                    A = new Image();
                    A.src = u;
                    if (m) {
                        m[x].push(u)
                    }
                }
            }
        }

        function g() {
            l.started = true;
            r("start")
        }

        function d() {
            l.started = true;
            r("breakStart")
        }

        function t(x, w) {
            var y = 0.25 * w,
                v = 0.5 * w,
                u = 0.75 * w;
            if (x >= y && f < y) {
                r("firstQuartile")
            } else {
                if (x >= v && f < v) {
                    r("midpoint")
                } else {
                    if (x >= u && f < u) {
                        r("thirdQuartile")
                    }
                }
            }
            n(x, w);
            f = x
        }

        function n(x, w) {
            for (var v = q.length; v--;) {
                var u = q[v];
                if (!u.tracked) {
                    var y = u.offset;
                    if (u.percentage) {
                        y = w * y / 100
                    }
                    if (x >= y) {
                        u.tracked = true;
                        r(u.key)
                    }
                }
            }
        }

        function s(v) {
            l.firedError = true;
            v = v || 900;
            var u = {};
            u[c] = v;
            r("error", u)
        }

        function j(u) {
            return function() {
                r(u)
            }
        }
        l.creativeView = j("creativeView");
        l.start = g;
        l.click = j("click");
        l.skip = j("skip");
        l.complete = j("complete");
        l.pause = j("pause");
        l.resume = j("resume");
        l.mute = j("mute");
        l.unmute = j("unmute");
        l.fullscreen = j("fullscreen");
        l.expand = j("expand");
        l.collapse = j("collapse");
        l.acceptInvitation = j("acceptInvitation");
        l.close = j("close");
        l.rewind = j("rewind");
        l.impression = j("impression");
        l.breakStart = d;
        l.breakEnd = j("breakEnd");
        l.time = t;
        l.error = s
    }
})(window.jwplayer);
(function(d) {
    var c = d.jwplayer,
        i = c.events,
        g = c.utils,
        h = c._,
        b = c.vast;
    b.vloader = function(A, k) {
        var z = this,
            r, C = [],
            x = -1,
            p, q = [],
            w = false;
        g.extend(z, new i.eventdispatcher());
        z.load = function(E, G) {
            C.push(E);
            w = false;
            var F = m(E);
            if (F) {
                if (!G && "withCredentials" in F) {
                    F.withCredentials = true;
                }

                if(k.config.advertisment.withCredentials === false){
                    F.withCredentials = false;
                }
                p = F;
                clearTimeout(x);
                x = setTimeout(function() {
                    v(F);
                    o("Timeout", E)
                }, 5000)
            }
        };

        function m(E) {
            return g.ajax(E, function(F) {
                clearTimeout(x);
                B(F, E)
            }, function(I, K, H) {
                if (H.withCredentials === false) {
                    var G = true;
                    clearTimeout(x);
                    o(I, E);
                    //z.load(E, G);
                    return
                }
                if (k.getRenderingMode() === "flash" && I !== "Invalid XML" && a(E)) {
                    c._ = c._ || {};
                    c._[k.id] = c._[k.id] || {};
                    c._[k.id]["_flashLoadSuccess"] = function F(L) {
                        clearTimeout(x);
                        z.parseXmlString(L, E)
                    };
                    c._[k.id]["_flashLoadFail"] = function J(L) {
                        clearTimeout(x);
                        g.log(L);
                        o(L, E)
                    };
                    k.callInternal("jwLoadXML", E, 'jwplayer._["' + k.id + '"]._flashLoadSuccess', 'jwplayer._["' + k.id + '"]._flashLoadFail');
                    return
                }
                clearTimeout(x);
                o(I, E)
            })
        }
        z.destroy = function() {
            clearTimeout(x);
            v(p);
            k = null
        };
        z.scheduledAd = function() {
            return A
        };
        z.allAds = function() {
            return q
        };
        z.adPod = function() {
            var E = [];
            g.foreach(q, function(F, G) {
                if (G.sequence) {
                    E.push(G)
                }
            });
            E.sort(function(G, F) {
                return G.sequence - F.sequence
            });
            return E
        };
        z.adBuffet = function() {
            var E = [];
            g.foreach(q, function(F, G) {
                if (!G.sequence) {
                    E.push(G)
                }
            });
            return E
        };
        z.history = function() {
            return C
        };
        z.parseXmlString = function(F, E) {
            B({
                responseXML: e(F)
            }, E)
        };

        function v(E) {
            if (E) {
                E.onload = null;
                E.onreadystatechange = null;
                E.onerror = null;
                if (E.abort) {
                    E.abort()
                }
            }
        }

        function B(F, E) {
            r = r || new b.vparser();
            try {
                r.parse(F.responseXML)
            } catch (H) {
                u(H.message, H.code || 900, E);
                return
            }
            var G = r.parsedAds();
            if (G && G.length) {
                q = G;
                g.foreach(q, function(I, K) {
                    if (K.wrappedURI) {
                        var J = new b.vloader(A, k);
                        J.addEventListener(i.COMPLETE, function() {
                            D(K, J.allAds())
                        });
                        J.addEventListener(i.ERROR, function(L) {
                            u(L.message, L.code, L.url)
                        });
                        J.load(K.wrappedURI)
                    }
                });
                j()
            } else {
                u("Ad Tag Empty", 101, E)
            }
        }

        function D(F, E) {
            var G = s(F, E);
            var H = h.indexOf(q, F);
            Array.prototype.splice.apply(q, [H, 1].concat(G));
            j()
        }

        function s(G, F) {
            var E = [];
            g.foreach(F, function(H, I) {
                if (G.companions) {
                    I.companions = (I.companions ? I.companions : []).concat(G.companions)
                }
                if (G.trackers) {
                    I.trackers = t(I.trackers, G.trackers)
                }
                if (G.sequence) {
                    I.sequence = G.sequence
                }
                E.push(I)
            });
            return E
        }

        function t(F, E) {
            F = F || {};
            g.foreach(E, function(G, H) {
                if (F[G]) {
                    F[G] = F[G].concat(H)
                } else {
                    F[G] = H
                }
            });
            return F
        }

        function j() {
            var E = false;
            g.foreach(q, function(F, G) {
                if (G.wrappedURI) {
                    E = true
                }
            });
            if (!E) {
                n()
            }
        }

        function n() {
            var J = q.slice(0);
            var I = J.length;
            for (var F = J.length; F--;) {
                var H = J[F];
                if (!H.media || !H.media.length) {
                    J.length--
                }
            }
            var G = I === 0;
            var E = J.length !== I;
            if (G || E) {
                u("Ad Tag Empty", 101, C[C.length - 1]);
                return
            }
            y(i.COMPLETE, z)
        }

        function o(F, E) {
            if (F === "Invalid XML") {
                u(F, 100, E)
            } else {
                u("VAST could not be loaded", 301, E)
            }
        }

        function l() {
            if (C && C.length) {
                return C[0]
            }
            return ""
        }

        function u(G, F, E) {
            if (w) {
                return
            } else {
                w = true
            }
            z.sendEvent(i.ERROR, {
                message: G,
                code: F,
                vloader: z,
                url: l() || E,
                wrappedUrl: E
            })
        }

        function y(E, F) {
            return z.sendEvent(E, F)
        }
    };

    function e(j) {
        if (f(j)) {
            return j
        }
        return g.parseXML(j)
    }

    function f(j) {
        return (typeof Node === "object" ? j instanceof Node : j && typeof j === "object" && typeof j.nodeType === "number" && typeof j.nodeName === "string")
    }

    function a(j) {
        return (j && j.indexOf("://") >= 0) && (j.split("/")[2] != d.location.href.split("/")[2])
    }
})(window);
(function(a) {
    a.vast.vpaidevents = {
        AD_LOADED: "AdLoaded",
        AD_STARTED: "AdStarted",
        AD_STOPPED: "AdStopped",
        AD_LINEAR_CHANGE: "AdLinearChange",
        AD_EXPANDED_CHANGE: "AdExpandedChange",
        AD_REMAINING_TIME_CHANGE: "AdRemainingTimeChange",
        AD_VOLUME_CHANGE: "AdVolumeChange",
        AD_IMPRESSION: "AdImpression",
        AD_VIDEO_START: "AdVideoStart",
        AD_VIDEO_FIRST_QUARTILE: "AdVideoFirstQuartile",
        AD_VIDEO_MIDPOINT: "AdVideoMidpoint",
        AD_VIDEO_THIRD_QUARTILE: "AdVideoThirdQuartile",
        AD_VIDEO_COMPLETE: "AdVideoComplete",
        AD_CLICK_THRU: "AdClickThru",
        AD_USER_ACCEPT_INVITATION: "AdUserAcceptInvitation",
        AD_USER_MINIMIZE: "AdUserMinimize",
        AD_USER_CLOSE: "AdUserClose",
        AD_PAUSED: "AdPaused",
        AD_PLAYING: "AdPlaying",
        AD_LOG: "AdLog",
        AD_ERROR: "AdError"
    }
})(jwplayer);
(function(g) {
    var d = g.jwplayer,
        a = d.vast,
        e = "PLAYING",
        h = "PAUSED",
        i = "BUFFERING",
        b = "IDLE",
        c = true,
        f = false;
    a.vpaidplayer = function(k, D, y, w) {
        var E = this,
            q, j = f,
            n = -1,
            r = f,
            m = new d.events.eventdispatcher(),
            v = a.vpaidevents,
            J = {
                TIME: "onTime",
                CLICK: "onClick",
                PLAY: "onPlay",
                PAUSE: "onPause",
                ERROR: "onError",
                COMPLETE: "onComplete",
                EXPANDED_CHANGE: "onExpandedChange"
            };
        E.type = "vpaid";
        E.blocking = null;

        function s() {
            d._ = d._ || {};
            d._[k.id] = d._[k.id] || {};
            k.callInternal("jwLoadVPAID", D, K(O), K(M))
        }

        function O() {
            u(v.AD_LOADED, N);
            u(v.AD_STARTED, z);
            u(v.AD_LINEAR_CHANGE, B);
            u(v.AD_EXPANDED_CHANGE, I);
            u(v.AD_PAUSED, l);
            u(v.AD_PLAYING, o);
            u(v.AD_STOPPED, H);
            u(v.AD_REMAINING_TIME_CHANGE, G);
            u(v.AD_CLICK_THRU, p);
            u(v.AD_ERROR, M);
            var P = k.getSafeRegion(false);
            A("initAd", P.width, P.height + P.y, k.getFullscreen() ? "fullscreen" : "normal", 0, w)
        }

        function M() {
            C(J.ERROR)
        }

        function C(P, Q) {
            Q = Q || {};
            if (!Q.tag) {
                Q.tag = y
            }
            m.sendEvent(P, Q)
        }
        this.setVolume = function(P) {
            F("adVolume", P)
        };

        function N() {
            B();
            F("adVolume", k.getMute() ? 0 : k.getVolume() / 100);
            A("startAd")
        }

        function z() {
            if (q && E.blocking) {
                E.blocking.hide()
            }
            C(J.PLAY, {
                oldstate: i,
                newstate: e,
                linear: q ? "linear" : "nonlinear"
            })
        }

        function p() {
            C(J.CLICK)
        }

        function B() {
            var Q, P;
            q = x("adLinear");
            if (q) {
                if (E.blocking) {
                    E.blocking.hide()
                } else {
                    var R = k.getState();
                    if (R == e || R == i) {
                        j = c;
                        k.pause();
                        k.setControls(f)
                    }
                }
                safe = k.getSafeRegion(false);
                P = safe.height + safe.y;
                Q = safe.width
            } else {
                if (E.blocking) {
                    E.blocking.destroy();
                    E.blocking = null
                } else {
                    if (j) {
                        k.play(c);
                        k.setControls(c)
                    }
                }
                safe = k.getSafeRegion();
                P = safe.height + safe.y;
                Q = safe.width
            }
            A("resizeAd", Q, P, k.getFullscreen() ? "fullscreen" : "normal")
        }

        function I() {
            var P = x("adExpanded");
            C(J.EXPANDED_CHANGE, {
                expanded: P
            })
        }

        function H() {
            if (j) {
                k.play(c);
                k.setControls(c)
            }
            C(J.COMPLETE)
        }

        function l() {
            if (!r) {
                r = c;
                C(J.PAUSE, {
                    newstate: h,
                    oldstate: e
                })
            }
        }

        function o() {
            if (r) {
                r = f;
                C(J.PLAY, {
                    newstate: e,
                    oldstate: h
                })
            }
        }

        function G() {
            var P = x("adRemainingTime");
            if (n < 0) {
                n = P
            }
            C(J.TIME, {
                position: n - P,
                duration: n
            })
        }

        function A() {
            var P = Array.prototype.slice.call(arguments);
            P.unshift("jwCallVPAID");
            setTimeout(function() {
                k.callInternal.apply(this, P)
            }, 0)
        }

        function x(P) {
            return k.callInternal("jwGetVPAIDProperty", P)
        }

        function F(Q, P) {
            k.callInternal("jwSetVPAIDProperty", Q, P)
        }

        function u(P, Q) {
            k.callInternal("jwAddVPAIDListener", P, K(Q))
        }

        function K(Q) {
            var P = "_vpaidBridge" + Math.floor(Math.random() * 10000);
            d._[k.id][P] = L(Q);
            return "jwplayer._['" + k.id + "']['" + P + "']"
        }

        function L(P) {
            return function() {
                setTimeout(P, 0)
            }
        }

        function t(P) {
            return function(Q) {
                m.addEventListener(P, Q)
            }
        }
        E.setVolume = function(P) {
            F("adVolume", P / 100)
        };
        E.onTime = t(J.TIME);
        E.onComplete = t(J.COMPLETE);
        E.onClick = t(J.CLICK);
        E.onPlay = t(J.PLAY);
        E.onPause = t(J.PAUSE);
        E.onError = t(J.ERROR);
        E.onExpandedChange = t(J.EXPANDED_CHANGE);
        E.play = function() {
            A("resumeAd")
        };
        E.pause = function() {
            A("pauseAd")
        };
        E.stop = function() {
            A("stopAd")
        };
        E.resize = function(P) {
            var Q;
            Q = k.getSafeRegion(!q);
            A("resizeAd", Q.width, Q.height + Q.y, P ? "fullscreen" : "normal")
        };
        E.removeEvents = function() {
            m.resetEventListeners()
        };
        E.destroy = function() {
            if (!E) {
                return
            }
            E.removeEvents();
            E = null
        };
        E.getState = function() {
            if (!x("adLinear")) {
                return b
            } else {
                return r ? h : e
            }
        };
        s()
    }
})(window);
(function(d) {
    var b = d.utils,
        c = "vmap";
    d.vast.vmapparser = function(y, t) {
        var p = h(y, "AdBreak", c);
        for (var o = 0; o < p.length; o++) {
            var x = {},
                q = {},
                n = p[o],
                m = e(n, "timeOffset"),
                v = e(n, "breakType"),
                k = h(n, "AdTagURI")[0],
                u = h(n, "VASTData")[0] || h(n, "VASTAdData")[0],
                s = e(k, "templateType"),
                z = a(k),
                w = h(n, "TrackingEvents", c)[0],
                r = h(w, "Tracking", c);
            x._type = v;
            if (u) {
                x._adXML = h(u, "VAST")[0]
            } else {
                if (s == "vast1" || s == "vast2" || s == "vast3") {
                    x._adQueue = [z]
                } else {
                    continue
                }
            }
            if (r) {
                for (var l = 0; l < r.length; l++) {
                    g(q, r[l])
                }
            }
            x._trackers = q;
            x._type = v;
            switch (m) {
                case "start":
                    x._offSet = "pre";
                    t.setPreRoll(x);
                    break;
                case "100%":
                case "end":
                    x._offSet = "post";
                    t.setPostRoll(x);
                    break;
                default:
                    if (/^#/.test(m)) {
                        break
                    } else {
                        if (/^\d\d?(?:\.\d+)?%$/.test(m)) {
                            x._offSet = m
                        } else {
                            x._offSet = b.seconds(m)
                        }
                    }
                    t.addMidRoll(x)
            }
        }
        t.sort()
    };
    d.vast.vparser = function(o) {
        var s = [],
            u = null;
        if (o) {
            m(o)
        }
        this.parse = m;
        this.parsedAds = function() {
            return s
        };
        this.error = function() {
            return u
        };

        function m(w) {
            var B, v, A, z = [];
            if (w.nodeName === "VAST") {
                B = w
            } else {
                B = h(w, "VAST")[0];
                if (!B) {
                    B = h(w, "VideoAdServingTemplate")[0]
                }
            }
            if (!B) {
                q(101, "Invalid VAST response")
            }
            if (B.tagName === "VideoAdServingTemplate") {
                v = 1
            } else {
                v = parseFloat(e(B, "version") || 0)
            }
            A = h(B, "Ad");
            for (var x = 0; x < A.length; x++) {
                var y = p(v, A[x]);
                z.push(y)
            }
            s = z
        }

        function p(w, A, v) {
            v = v || {};
            var B = h(A, "InLine")[0],
                C = h(A, "Wrapper")[0],
                x = B ? B : C,
                z = x ? a(h(x, "AdTitle")[0]) : "",
                y;
            v.sequence = e(A, "sequence");
            v.adTitle = z;
            if (!w || w > 3 || w < 1) {
                q(102, "Vast version not supported")
            }
            if (x) {
                if (w >= 2) {
                    y = k(x);
                    i(x, "Impression", y.trackers);
                    i(x, "Error", y.trackers)
                } else {
                    y = l(x)
                }
                if (C) {
                    y.wrappedURI = a(h(C, "VASTAdTagURI")[0]) || a(h(C, "VASTAdTagURL")[0])
                }
                y = n(v, y)
            } else {
                q(101, "Invalid VAST response")
            }
            return y
        }

        function n(x, w) {
            var v = b.extend({}, x);
            b.foreach(w, function(y, z) {
                if (b.exists(v[y])) {
                    if (b.typeOf(z) == "array") {
                        v[y] = v[y].concat(z)
                    } else {
                        if (b.typeOf(z) == "object") {
                            v[y] = b.extend(v[y], w[y])
                        } else {
                            v[y] = z
                        }
                    }
                } else {
                    v[y] = z
                }
            });
            return v
        }

        function q(w, v) {
            u = {
                code: w,
                message: v,
                toString: function() {
                    return this.code + " " + this.message
                }
            };
            throw u
        }

        function i(y, x, z) {
            var v = h(y, x),
                w;
            for (w = 0; w < v.length; w++) {
                f(z, x.toLowerCase(), a(v[w]))
            }
        }

        function k(A) {
            var K = h(h(A, "Creatives")[0], "Creative"),
                E, z, x, B = {},
                J = {
                    trackers: B
                },
                C, I, D, y, F, H;
            J.adsystem = a(h(A, "AdSystem")[0]);
            for (z = 0; z < K.length; z++) {
                E = K[z];
                C = h(E, "Linear")[0];
                I = h(E, "NonLinear")[0];
                D = h(h(E, "TrackingEvents")[0], "Tracking");
                if (C || I) {
                    for (x = 0; x < D.length; x++) {
                        g(B, D[x])
                    }
                }
                y = a(h(E, "AdParameters")[0]);
                if (y) {
                    J.adParams = y
                }
                if (C) {
                    F = h(C, "VideoClicks")[0];
                    H = a(h(F, "ClickThrough")[0]);
                    var G = h(F, "ClickTracking");
                    var v = e(C, "skipoffset");
                    for (var w = 0; w < G.length; w++) {
                        f(B, "click", a(G[w]))
                    }
                    if (H) {
                        J.clickthrough = H
                    }
                    if (v) {
                        J.skipoffset = v
                    }
                    j(C, J)
                } else {
                    if (I) {
                        H = a(h(I, "NonLinearClickThrough")[0]);
                        if (H) {
                            J.clickthrough = H
                        }
                        t(E, J)
                    } else {
                        r(E, J)
                    }
                }
            }
            return J
        }

        function l(H) {
            var B = h(H, "Video")[0] || H,
                y = h(H, "NonLinear")[0],
                z = {},
                P = {
                    trackers: z
                },
                N, K, C, A, v, O, G, Q, w, x, D, E;
            if (B) {
                N = h(h(H, "TrackingEvents")[0], "Tracking");
                for (K = 0; K < N.length; K++) {
                    g(z, N[K])
                }
                A = h(h(H, "Impression")[0], "URL");
                for (K = 0; K < A.length; K++) {
                    C = A[K];
                    f(z, "impression", a(C))
                }
                v = h(h(H, "Error")[0], "URL");
                for (K = 0; K < v.length; K++) {
                    C = v[K];
                    f(z, "error", a(C))
                }
                Q = h(B, "VideoClicks")[0];
                w = a(h(Q, "ClickThrough")[0]);
                var M = h(h(Q, "ClickTracking")[0], "URL");
                for (var J = 0; J < M.length; J++) {
                    f(z, "click", a(M[J]))
                }
                if (w) {
                    P.clickthrough = w
                }
                if (x) {
                    f(z, "click", x)
                }
                j(B, P);
                D = h(B, "AdParameters")[0];
                if (D) {
                    E = e(D, "apiFramework");
                    if (E.toLowerCase() == "vpaid") {
                        for (var L = 0; L < P.media.length; L++) {
                            P.media[L].adType = E
                        }
                        P.adParams = a(D)
                    }
                }
            }
            if (y) {
                var I = P.media || [],
                    F = h(y, "URL")[0];
                I.push({
                    type: e(y, "creativeType"),
                    file: a(F),
                    adType: e(y, "apiFramework")
                });
                P.media = I
            }
            O = h(H, "CompanionAds")[0];
            O = h(O, "Companion");
            if (!P.companions) {
                P.companions = []
            }
            for (K = 0; K < O.length; K++) {
                G = O[K];
                P.companions.push({
                    width: parseInt(e(G, "width"), 10),
                    height: parseInt(e(G, "height"), 10),
                    type: e(G, "resourceType"),
                    resource: a(h(G, "URL")[0]),
                    trackers: [],
                    clickthrough: ""
                })
            }
            return P
        }

        function j(w, x) {
            var v = h(h(w, "MediaFiles")[0], "MediaFile"),
                A = x.media ? x.media : [];
            for (var y = 0; y < v.length; y++) {
                var z = {
                    type: e(v[y], "type"),
                    file: a(v[y]),
                    adType: e(v[y], "apiFramework") || ""
                };
                if (z.file) {
                    A.push(z)
                }
            }
            x.media = A
        }

        function t(y, v) {
            var x = [],
                w = h(y, "StaticResource")[0];
            if (w) {
                x.push({
                    type: e(w, "creativeType"),
                    file: a(w),
                    adType: e(h(y, "NonLinear")[0], "apiFramework") || "static",
                    minDuration: e(h(y, "NonLinear")[0], "minSuggestedDuration") || "00:00:00"
                });
                v.media = x
            }
        }

        function r(F, y) {
            var K = h(h(F, "CompanionAds")[0], "Companion"),
                H, B, z, I, J, A, v, w, G, E, C = y.companions ? y.companions : [];
            for (B = 0; B < K.length; B++) {
                H = K[B];
                I = h(H, "StaticResource")[0];
                J = h(H, "IFrameResource")[0];
                A = h(H, "HTMLResource")[0];
                var D = {};
                if (I) {
                    v = e(I, "creativeType");
                    w = a(I)
                } else {
                    if (J) {
                        v = "iframe";
                        w = a(J)
                    } else {
                        if (A) {
                            v = "html";
                            w = a(A)
                        } else {
                            return
                        }
                    }
                }
                var x = h(h(H, "TrackingEvents")[0], "Tracking");
                for (z = 0; z < x.length; z++) {
                    G = e(x[z], "event");
                    f(D, G, a(x[z]))
                }
                E = a(h(H, "CompanionClickThrough")[0]);
                C.push({
                    width: parseInt(e(H, "width"), 10),
                    height: parseInt(e(H, "height"), 10),
                    type: v,
                    source: w,
                    trackers: D,
                    clickthrough: E
                })
            }
            y.companions = C
        }
    };

    function h(j, l, i) {
        var k = [];
        if (j) {
            k = j.getElementsByTagName(l);
            if (i && k && k.length === 0) {
                k = j.getElementsByTagName(i + ":" + l)
            }
        }
        return k
    }

    function e(i, j) {
        if (!i) {
            return null
        }
        return i.getAttribute(j)
    }

    function a(j) {
        if (j) {
            var i = j.textContent || j.text;
            if (i) {
                return b.trim(i)
            }
        }
        return ""
    }

    function g(m, i) {
        var k = e(i, "event");
        if (k === "progress") {
            var l = e(i, "offset");
            k = k + "_" + l
        }
        var j = a(i);
        f(m, k, j)
    }

    function f(k, j, i) {
        if (!k[j]) {
            k[j] = []
        }
        if (i) {
            k[j].push(i)
        }
    }
})(window.jwplayer);