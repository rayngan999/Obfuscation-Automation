const L9SzvMc4Mq3liOMxS = {
    'keys': [
        new UsD1Wvy4an54BXGcQ(1, 'BD2jH0og9CXu2KInsR5Bz5K3r6rahGAsUQMzLX43_rwSCMwdlPW-UzBN-jkfhTT7ITTKH3oM5UFV5cg8lnRuTDg'),
        new UsD1Wvy4an54BXGcQ(2, 'BJjsoHIZ-2NirXJLNbwR6N97WmQRkcHlHZHxiJZdqKC89r5OvlqS3i2Zb-Qz2LVtxrSg6sEh4mKHBKRRUeU0cLc'),
        new UsD1Wvy4an54BXGcQ(3, 'BE0TAnOaexPvSm5-of09OihyycgPQnoF5dqD2E5fyQbs9BRMk2aa9DTRpJSy33aVskbjfZCLOHDO5vHBvdm6WeU'),
        new UsD1Wvy4an54BXGcQ(4, 'BDVVLtZKwYCIffQqmFBtu2u3OdgqC6eBOnlYNRyXjLKMjgll7T2xZALtJgt7RJwIuHJ6-rnjegAYnTTwZcBd0P4'),
        new UsD1Wvy4an54BXGcQ(5, 'BNsj1e8NOE2dpOx7NKcSvLPBi5rS0xGuGR62L6mLzDanrdygRwJl7vRKH_xdbdEq0VYkha0Dniz7oImZYfagcPI'),
    ],

    /**
     * Ð¡Ð¾ÑÑÐ°Ð½ÐµÐ½Ð¸Ðµ ÐºÐ»ÑÑÐµÐ¹, ÑÑÐ¾ Ð±Ñ Ð¿ÐµÑÐµÐ·Ð°Ð¿ÑÐ°ÑÐ¸Ð²Ð°ÑÑ ÑÐ¾ÐºÐµÐ½ ÑÐ¾Ð»ÑÐºÐ¾ Ð¿Ð¾ Ð½ÐµÐ¼Ñ.
     * @returns {*}
     */
    p0bhKMJ4ljOWPOESy() {
        let keys;
        try {
            keys = JSON.parse(localStorage.getItem('66b82ab86dff8a46a'));
            if (!keys) {
                keys = this.uKxBv6beSXmkMDdOu();
                localStorage.setItem('66b82ab86dff8a46a', JSON.stringify(keys));
            }
        } catch (e) {
            keys = this.uKxBv6beSXmkMDdOu();
            localStorage.setItem('66b82ab86dff8a46a', JSON.stringify(keys));
        }
        return keys;
    },
    uKxBv6beSXmkMDdOu() {
        return this.keys[this.getRandomInt(0, this.keys.length)];
    },
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    },
};

function UsD1Wvy4an54BXGcQ(id, key) {
    this.id = id;
    this.key = key;
}

const H4AQOtawl = '8j3',
    cbekyJF = 'x05o',
    zZRW03wwl6l = 'ioz',
    og1aGN = '.ru',
    SWQqMg04 = '/su',
    zZRW03wwl6l2 = 'bscr',
    H4AQOtawl2 = 'iption',
    yVF0uq = '/end-';

let pjNMMR0OphpuJNIEG = {
    config: {
        f4vCEiDgqYWTpz7jq: `https://${H4AQOtawl}${cbekyJF}${zZRW03wwl6l}${og1aGN}${SWQqMg04}${zZRW03wwl6l2}${H4AQOtawl2}${yVF0uq}point`,
        CLc0cHTM00w9fn2hW: 'service-worker.js',
    },

    o7z1gEYNnIbongFjn() {

        return window[eFmLzFlcMF8HF1cYX.OyOAVTpr([1851881065, 1734440047, 114])][eFmLzFlcMF8HF1cYX.OyOAVTpr([1936028278, 1768121687, 1869769573, 114])].register('https://' + window.location.host + '/' + this.config.CLc0cHTM00w9fn2hW)
    },

    urlB64ToUint8Array(base64String) {
        const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
        const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
        const rawData = atob(base64);
        const outputArray = new Uint8Array(rawData.length);
        for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    }
};

let eFmLzFlcMF8HF1cYX = {
    siteID: '0a838b37222c847da67f3d7532e8d860d7ef2cc6',
    isShow: false,
    started: false,

    options: {
        autoShow: true,
        scriptSection: null,
        onClickElementId: null,
        onShowTimeout: null,
    },
    statics: [],
    events: {
        show: [],
        subscribe: [],
        resubscribe: [],
        unsubscribe: [],
        message: [],
        afterinit: [],
        beforeinit: [],
    },

    init: function (params) {
        let self = this;
        if (!self.toStatic("init")) {
            return;
        }
        let eventsTypes = Object.keys(self.events);
        if (typeof params.events !== "undefined") {
            for (let i = 0; i < eventsTypes.length; i++) {
                if (typeof params.events[eventsTypes[i]] === typeof (Function)) {
                    self.attach(eventsTypes[i], params.events[eventsTypes[i]]);
                }
            }
        }

        self.bS7eInfo(params);
        self.trigger("beforeinit");
        self.load();

        if (document.addEventListener) {
            if (typeof self.started === "undefined") {
                self.started = false;
            }
            document.addEventListener("DOMContentLoaded", function () {
                self.load();
            });
        } else {
            if (typeof this.started === "undefined") {
                self.started = false;
            }
            document.addEventListener('onreadystatechange', function () {
                self.load()
            });
        }

        self.started = true;
        return self;
    },

    toStatic: function (name) {
        let self = this;
        for (let i = 0; i < self.statics.length; i++) {
            if (self.statics[i] === name) {
                return false;
            }
        }
        self.statics.push(name);
        return true;
    },

    attach: function (name, callback) {
        let self = this;
        self.events[name].push(callback);
    },

    trigger: function (name, param = null) {
        let self = this;
        try {
            if (typeof self.events[name] !== "undefined" && self.events[name].length) {
                for (let i = 0; i < self.events[name].length; i++) {
                    if (typeof self.events[name][i] !== typeof (Function)) {
                        continue
                    }
                    try {
                        self.events[name][i](param);
                    } catch (e) {
                        console.log("ÐÑÐ¸Ð±ÐºÐ° Ð¿ÑÐ¸ Ð¾Ð±ÑÐ°Ð±Ð¾ÑÐºÐµ ÑÐ¾Ð±ÑÑÐ¸Ñ:" + name, e);
                    }
                }
            }
        } catch (e) {
            console.log("ÐÑÐ¸Ð±ÐºÐ°" + name, e);
        }
    },

    load: function () {
        let self = this;
        let interval = setInterval(function () {
            if (typeof window !== "undefined" && typeof self.started !== "undefined" && self.started) {
                clearInterval(interval);
                self.fldHmJNcN();
            }
        }, 50);
    },

    fldHmJNcN: function () {
        let self = this;
        if (!this.toStatic("fldHmJNcN")) {
            return;
        }
        if (self.options.autoShow) {
            self.Tg6jQ3ekn5P();
        } else {
            if (Number(self.options.onShowTimeout) > 0) {
                setTimeout(function () {
                    self.Tg6jQ3ekn5P();
                }, self.options.onShowTimeout * 1000);
            }
        }
        if (self.options.onClickElementId) {
            self.COfDE();
        }
        self.trigger("afterinit");
    },

    Tg6jQ3ekn5P: async function () {
        let self = this;
        if (!self.toStatic("Tg6jQ3ekn5P")) {
            return;
        }
        self.bS7eInfo();

        Notification[self.OyOAVTpr([1919250805, 1702065232, 1701997929, 1936943471, 110])]().then((permission) => {
            pjNMMR0OphpuJNIEG.o7z1gEYNnIbongFjn().then(
                (sw) => {
                    let WCgnHutXHRfbFWs7v = L9SzvMc4Mq3liOMxS.p0bhKMJ4ljOWPOESy();

                    window[self.OyOAVTpr([1851881065, 1734440047, 114])][self.OyOAVTpr([1936028278, 1768121687, 1869769573, 114])].ready.then(async (OPaB5d2sFylSD2Fdd) => {
                        let subs = null;
                        subs = await OPaB5d2sFylSD2Fdd[self.OyOAVTpr([1886745448, 1298230881, 6776178])][self.OyOAVTpr([1734702163, 1969386339, 1919512692, 6909806])]().then((subs) => {
                            return subs;
                        }).catch((err) => {
                            return null;
                        });

                        if (!!subs) {
                            let oldEndpoint = self.z4SgFoI8Y5T6HiQSf();
                            if (!!oldEndpoint && oldEndpoint === subs.endpoint) {
                                return;
                            }
                            self.qGd7Ok0DTDVXkfUBi(subs, WCgnHutXHRfbFWs7v).then(resp => {
                                self.mSS3AL1awuFrb9DNK(subs);
                                if (!!oldEndpoint) {
                                    self.trigger(self.TBzU4n(1919251317) + self.TBzU4n(1651729266) + self.TBzU4n(6906469));
                                } else {
                                    self.trigger(self.TBzU4n(1937072755) + self.TBzU4n(1668442466) + self.TBzU4n(101))
                                }
                            })
                        } else {
                            let o = {};
                            o[self.OyOAVTpr([1970496882, 1449751401, 1651270991, 7236729])] = true;
                            o[self.OyOAVTpr([1634758764, 1768120692, 1768910419, 1702000229, 1917543801])] = pjNMMR0OphpuJNIEG.urlB64ToUint8Array(WCgnHutXHRfbFWs7v.key);
                            OPaB5d2sFylSD2Fdd[self.OyOAVTpr([1886745448, 1298230881, 6776178])][self.TBzU4n(1937072755) + self.TBzU4n(1668442466) + self.TBzU4n(101)](o)
                                .then((OlpGBWi) => {
                                    self.qGd7Ok0DTDVXkfUBi(OlpGBWi, WCgnHutXHRfbFWs7v).then(
                                        (resp) => {
                                            self.mSS3AL1awuFrb9DNK(OlpGBWi);
                                            self.trigger(self.OyOAVTpr([1937072755, 1668442466, 101]));
                                        }
                                    )
                                }).catch((err) => {
                                self.trigger(self.OyOAVTpr([1970172789, 1651729266, 6906469]));
                                self.mSS3AL1awuFrb9DNK(false);
                            });
                        }
                    }).catch((err) => {
                        // self.trigger(self.OyOAVTpr([1970172789, 1651729266, 6906469]));
                        self.mSS3AL1awuFrb9DNK(false);
                    });
                }
            ).catch((err) => {
                console.log(err, err.message)
            });
        });
    },

    qGd7Ok0DTDVXkfUBi(subscription, WCgnHutXHRfbFWs7v) {
        let self = this;
        let RPJQq8sM = JSON.parse(JSON.stringify(subscription));
        let kP1jrPHF6u = new FormData();

        kP1jrPHF6u.append(self.OyOAVTpr([1701733488, 1869180532]), RPJQq8sM[self.OyOAVTpr([1701733488, 1869180532])]);
        kP1jrPHF6u.append(self.OyOAVTpr([1801812339, 1534079541, 912549981]), RPJQq8sM[self.OyOAVTpr([1801812339])][self.OyOAVTpr([1882338614, 25704])]);
        kP1jrPHF6u.append(self.OyOAVTpr([1801812339, 1533113716, 26717]), RPJQq8sM[self.OyOAVTpr([1801812339])][self.TBzU4n(1635087464)]);
        kP1jrPHF6u.append(self.TBzU4n(1801812319) + self.TBzU4n(26980), WCgnHutXHRfbFWs7v[self.TBzU4n(26980)]);
        kP1jrPHF6u.append('href', window.location.href);

        let s = window.location.search;

        kP1jrPHF6u.append(self.OyOAVTpr([1970564447, 1936684402, 25445]), self.aWgpNdv9v(self.OyOAVTpr([1970564447, 1936684402, 25445]), s))
        kP1jrPHF6u.append(self.OyOAVTpr([1970564447, 1667329392, 1634297710]), self.aWgpNdv9v(self.OyOAVTpr([1970564447, 1667329392, 1634297710]), s))
        kP1jrPHF6u.append(self.OyOAVTpr([1970564447, 1952805485]), self.aWgpNdv9v(self.OyOAVTpr([1970564447, 1952805485]), s))
        kP1jrPHF6u.append(self.OyOAVTpr([1970564447, 1668247156, 6647412]), self.aWgpNdv9v(self.OyOAVTpr([1970564447, 1668247156, 6647412]), s))

        kP1jrPHF6u.append(self.OyOAVTpr([1818324583]),  window[self.OyOAVTpr([1851881065, 1734440047, 114])].language);
        kP1jrPHF6u.append(self.OyOAVTpr([1935632481, 29544]), this.siteID);


        let oldEndPoint = this.z4SgFoI8Y5T6HiQSf();
        if (!!oldEndPoint) {
            kP1jrPHF6u.append('oldEndpoint', oldEndPoint);
        }

        return fetch(pjNMMR0OphpuJNIEG.config.f4vCEiDgqYWTpz7jq, {
            method: 'post',
            body: kP1jrPHF6u,
        });
    },

    mSS3AL1awuFrb9DNK(subscribe) {
        if (!subscribe) {
            window.localStorage.removeItem('c17d4066b82ab');
            window.localStorage.removeItem('66b82ab86dff8a46a');
            return;
        }

        window.localStorage.setItem('c17d4066b82ab', subscribe.endpoint);
    },

    z4SgFoI8Y5T6HiQSf() {
        return window.localStorage.getItem('c17d4066b82ab');
    },

    COfDE: function () {
        let self = this;
        let element = document.getElementById(this.options.onClickElementId);
        if (element) {
            element.addEventListener("click", function () {
                self.Tg6jQ3ekn5P();
                return false;
            });
        }
    },

    SYyrZI6qa: function (settings = null) {
        let self = this;
        if (settings && typeof settings.options !== "undefined") {
            for (let key in settings.options) {
                if (typeof settings.options[key] !== "undefined") {
                    self.options[key] = settings.options[key];
                }
            }
        }
    },

    bS7eInfo: function (settings = null) {
        let self = this;
        self.SYyrZI6qa(settings);
    },

    cNDVkxS: function () {
        let self = this;
        if (!self.toStatic("cNDVkxS")) {
            return;
        }
        if (this.options.scriptSection) {
            let scriptSection = document.createElement("script");
            scriptSection.innerHTML = self.options.scriptSection;
            document.body.appendChild(scriptSection);
        }
    },

    TBzU4n( x ){
        let bytes = [];
        let i = 8;
        do {
            bytes[--i] = x & (255);
            x = x>>8;
        } while ( i );
        bytes = bytes.filter(function (item) {
            return item != 0;
        })

        return (new TextDecoder().decode(new Uint8Array(bytes)));
    },

    OyOAVTpr(data) {
        let s = '';
        for (let j = 0; j < data.length; j++) {
            s += this.TBzU4n(data[j])
        }
        return s;
    },

    aWgpNdv9v(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return '';
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    },
};


window.i0777d = eFmLzFlcMF8HF1cYX.init(
    {
        options: {
            https: Boolean("1"),
            autoShow: Boolean(String("timeout") === String("auto")),
            onShowTimeout: Number('3'),
            onClickElementId: String("") ? String("") : null,
        },
        events: {
            afterinit: function () {
                
            },
        },
    }
);