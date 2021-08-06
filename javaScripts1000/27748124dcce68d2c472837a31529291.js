 (function () {
        'use strict';
        function pixelCall(_consent) {

            var _id5id;

            if (window.ID5 && window.ID5.initialized === true && window.ID5.userId) {
                _id5id = '&dsp=id5&dsp_uid=' + ID5.userId
            } else if (window.pbjs && window.pbjs.getUserIds && window.pbjs.getUserIds().id5id && window.pbjs.getUserIds().id5id.uid) {
                _id5id = '&dsp=id5&dsp_uid=' + window.pbjs.getUserIds().id5id.uid;
            } else {
                _id5id = '';
            }

            var _hn_ver = 18,
                _ref = encodeURIComponent(document.referrer),
                _kwQuery = window.captify_kw_query_12357 ? '&kw=' + encodeURIComponent(captify_kw_query_12357) : '',
                _pxlUrl = 'https://s.cpx.to/fire.js?',
                _pid = 12357,
                _uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                    var r = Math.random() * 16 | 0,
                        v = c == 'x' ? r : (r & 0x3 | 0x8);
                    return v.toString(16);
                }),
                _consentParam = _consent ? '&gcv=' + _consent : '',
                _groupParams = 'pid=' + _pid + '&ref=' + _ref + '&hn_ver=' + _hn_ver + '&fid=' + _uuid + _kwQuery + _consentParam + _id5id;

            if (window.ats && window.ats.retrieveEnvelope) {
                window.ats.retrieveEnvelope(function (result) {
                    var liveRampId;
                    if (result) {
                        if (result.envelope) {
                            liveRampId = result.envelope;
                        } else {
                            liveRampId = result
                        }
                    }
                    if (liveRampId) {
                        new Image().src = 'https://s.cpx.to/sync?dsp=live_ramp&dsp_uid=' + liveRampId + '&fid=' + _uuid;
                    }
                });
            }

            var syncScript = document.createElement('script');
            syncScript.src = _pxlUrl + _groupParams;

            document.head.appendChild(syncScript);
        }
        if (window.__tcfapi) {
            window.__tcfapi('getTCData', 2, (tcData) => {
                pixelCall(tcData.tcString);
            });
        } else if (window.__cmp) {
            window.__cmp('getConsentData', null, function(result) {
                pixelCall(result ? (result.consentData || '') : '');
            });
        } else  {
            var _consentCookieName = 'euconsent';
            var _cookies = document.cookie.split(';');
            var _consentCookie = '';
            for (var i = 0; i < _cookies.length; i++) {
                if (_cookies[i].trim().substring(0, _consentCookieName.length) === _consentCookieName) {
                    _consentCookie = _cookies[i];
                }
            }
            var _consent = _consentCookie.split(_consentCookieName + '=')[1];
            pixelCall(_consent || '');
        }

    })(window);