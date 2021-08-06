ï»¿///#source 1 1 /Scripts/modules/wrapBefore.js
//dit is bewust invalide JS
(function() {
    try {
        var releaseBuild = true;
///#source 1 1 /Scripts/modules/config.js
//#region config

//let op, deze waardes hieronder veranderen heeft invloed op de huidig gedeteceerde tids/fingerprints etc
var _storageCookieName = "___c3";
var _localStoragePrefix = "___l3";

if (typeof releaseBuild == "undefined")
    releaseBuild = false;

//#endregion

///#source 1 1 /Scripts/modules/md5.js
//#region md5

function c(m, n) {
    var o = m[0], p = m[1], q = m[2], r = m[3];
    o = d(o, p, q, r, n[0], 7, -680876936);
    r = d(r, o, p, q, n[1], 12, -389564586);
    q = d(q, r, o, p, n[2], 17, 606105819);
    p = d(p, q, r, o, n[3], 22, -1044525330);
    o = d(o, p, q, r, n[4], 7, -176418897);
    r = d(r, o, p, q, n[5], 12, 1200080426);
    q = d(q, r, o, p, n[6], 17, -1473231341);
    p = d(p, q, r, o, n[7], 22, -45705983);
    o = d(o, p, q, r, n[8], 7, 1770035416);
    r = d(r, o, p, q, n[9], 12, -1958414417);
    q = d(q, r, o, p, n[10], 17, -42063);
    p = d(p, q, r, o, n[11], 22, -1990404162);
    o = d(o, p, q, r, n[12], 7, 1804603682);
    r = d(r, o, p, q, n[13], 12, -40341101);
    q = d(q, r, o, p, n[14], 17, -1502002290);
    p = d(p, q, r, o, n[15], 22, 1236535329);
    o = f(o, p, q, r, n[1], 5, -165796510);
    r = f(r, o, p, q, n[6], 9, -1069501632);
    q = f(q, r, o, p, n[11], 14, 643717713);
    p = f(p, q, r, o, n[0], 20, -373897302);
    o = f(o, p, q, r, n[5], 5, -701558691);
    r = f(r, o, p, q, n[10], 9, 38016083);
    q = f(q, r, o, p, n[15], 14, -660478335);
    p = f(p, q, r, o, n[4], 20, -405537848);
    o = f(o, p, q, r, n[9], 5, 568446438);
    r = f(r, o, p, q, n[14], 9, -1019803690);
    q = f(q, r, o, p, n[3], 14, -187363961);
    p = f(p, q, r, o, n[8], 20, 1163531501);
    o = f(o, p, q, r, n[13], 5, -1444681467);
    r = f(r, o, p, q, n[2], 9, -51403784);
    q = f(q, r, o, p, n[7], 14, 1735328473);
    p = f(p, q, r, o, n[12], 20, -1926607734);
    o = h(o, p, q, r, n[5], 4, -378558);
    r = h(r, o, p, q, n[8], 11, -2022574463);
    q = h(q, r, o, p, n[11], 16, 1839030562);
    p = h(p, q, r, o, n[14], 23, -35309556);
    o = h(o, p, q, r, n[1], 4, -1530992060);
    r = h(r, o, p, q, n[4], 11, 1272893353);
    q = h(q, r, o, p, n[7], 16, -155497632);
    p = h(p, q, r, o, n[10], 23, -1094730640);
    o = h(o, p, q, r, n[13], 4, 681279174);
    r = h(r, o, p, q, n[0], 11, -358537222);
    q = h(q, r, o, p, n[3], 16, -722521979);
    p = h(p, q, r, o, n[6], 23, 76029189);
    o = h(o, p, q, r, n[9], 4, -640364487);
    r = h(r, o, p, q, n[12], 11, -421815835);
    q = h(q, r, o, p, n[15], 16, 530742520);
    p = h(p, q, r, o, n[2], 23, -995338651);
    o = j(o, p, q, r, n[0], 6, -198630844);
    r = j(r, o, p, q, n[7], 10, 1126891415);
    q = j(q, r, o, p, n[14], 15, -1416354905);
    p = j(p, q, r, o, n[5], 21, -57434055);
    o = j(o, p, q, r, n[12], 6, 1700485571);
    r = j(r, o, p, q, n[3], 10, -1894986606);
    q = j(q, r, o, p, n[10], 15, -1051523);
    p = j(p, q, r, o, n[1], 21, -2054922799);
    o = j(o, p, q, r, n[8], 6, 1873313359);
    r = j(r, o, p, q, n[15], 10, -30611744);
    q = j(q, r, o, p, n[6], 15, -1560198380);
    p = j(p, q, r, o, n[13], 21, 1309151649);
    o = j(o, p, q, r, n[4], 6, -145523070);
    r = j(r, o, p, q, n[11], 10, -1120210379);
    q = j(q, r, o, p, n[2], 15, 718787259);
    p = j(p, q, r, o, n[9], 21, -343485551);
    m[0] = i(o, m[0]);
    m[1] = i(p, m[1]);
    m[2] = i(q, m[2]);
    m[3] = i(r, m[3])
}

function e(p, n, o, m, r, u) {
    n = i(i(n, p), i(m, u));
    return i((n << r) | (n >>> (32 - r)), o)
}

function d(n, o, p, q, m, r, u) { return e((o & p) | ((~o) & q), n, o, m, r, u) }

function f(n, o, p, q, m, r, u) { return e((o & q) | (p & (~q)), n, o, m, r, u) }

function h(n, o, p, q, m, r, u) { return e(o ^ p ^ q, n, o, m, r, u) }

function j(n, o, p, q, m, r, u) { return e(p ^ (o | (~q)), n, o, m, r, u) }

function g(o) {
    if (/[\x80-\xFF]/.test(o)) {
        o = unescape(encodeURI(o))
    }
    
    var r = o.length, q = [1732584193, -271733879, -1732584194, 271733878], m;
    for (m = 64; m <= o.length; m += 64) {
        c(q, b(o.substring(m - 64, m)))
    }
    o = o.substring(m - 64);
    var p = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (m = 0; m < o.length; m++) {
        p[m >> 2] |= o.charCodeAt(m) << ((m % 4) << 3)
    }
    p[m >> 2] |= 128 << ((m % 4) << 3);
    if (m > 55) {
        c(q, p);
        for (m = 0; m < 16; m++) {
            p[m] = 0
        }
    }
    p[14] = r * 8;
    c(q, p);
    return q
}

function b(n) {
    var o = [], m;
    for (m = 0; m < 64; m += 4) {
        o[m >> 2] = n.charCodeAt(m) + (n.charCodeAt(m + 1) << 8) + (n.charCodeAt(m + 2) << 16) + (n.charCodeAt(m + 3) << 24)
    }
    return o;
}

var l = "0123456789abcdef".split("");

function a(p) {
    var o = "", m = 0;
    for (; m < 4; m++) {
        o += l[(p >> (m * 8 + 4)) & 15] + l[(p >> (m * 8)) & 15]
    }
    return o;
}

function k(n) {
    for (var m = 0; m < n.length; m++) {
        n[m] = a(n[m]);
    }
    return n.join("");
}

var md5 = function (m) { return k(g(m)); };

function i(m, n) { return (m + n) & 4294967295 }

if (md5("hello") != "5d41402abc4b2a76b9719d911017c592") {

    function i(o, p) {
        var m = (o & 65535) + (p & 65535), n = (o >> 16) + (p >> 16) + (m >> 16);
        return (n << 16) | (m & 65535)
    }
}



//#endregion
///#source 1 1 /Scripts/modules/debug-fake.js
function getWithValue(id) {
}

function setValue(id, val) {
    
}


///#source 1 1 /Scripts/fingerprintjs2/fingerprint2.js
(function() {

    /*
    * Fingerprintjs2 2.0.6 - Modern & flexible browser fingerprint library v2
    * https://github.com/Valve/fingerprintjs2
    * Copyright (c) 2015 Valentin Vasilyev (valentin.vasilyev@outlook.com)
    * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
    *
    * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
    * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
    * ARE DISCLAIMED. IN NO EVENT SHALL VALENTIN VASILYEV BE LIABLE FOR ANY
    * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
    * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
    * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
    * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
    * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
    * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    */
    /* global define */
    /// MurmurHash3 related functions

    //
    // Given two 64bit ints (as an array of two 32bit ints) returns the two
    // added together as a 64bit int (as an array of two 32bit ints).
    //
      var x64Add = function (m, n) {
        m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff]
        n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff]
        var o = [0, 0, 0, 0]
        o[3] += m[3] + n[3]
        o[2] += o[3] >>> 16
        o[3] &= 0xffff
        o[2] += m[2] + n[2]
        o[1] += o[2] >>> 16
        o[2] &= 0xffff
        o[1] += m[1] + n[1]
        o[0] += o[1] >>> 16
        o[1] &= 0xffff
        o[0] += m[0] + n[0]
        o[0] &= 0xffff
        return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]]
      }

    //
    // Given two 64bit ints (as an array of two 32bit ints) returns the two
    // multiplied together as a 64bit int (as an array of two 32bit ints).
    //
      var x64Multiply = function (m, n) {
        m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff]
        n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff]
        var o = [0, 0, 0, 0]
        o[3] += m[3] * n[3]
        o[2] += o[3] >>> 16
        o[3] &= 0xffff
        o[2] += m[2] * n[3]
        o[1] += o[2] >>> 16
        o[2] &= 0xffff
        o[2] += m[3] * n[2]
        o[1] += o[2] >>> 16
        o[2] &= 0xffff
        o[1] += m[1] * n[3]
        o[0] += o[1] >>> 16
        o[1] &= 0xffff
        o[1] += m[2] * n[2]
        o[0] += o[1] >>> 16
        o[1] &= 0xffff
        o[1] += m[3] * n[1]
        o[0] += o[1] >>> 16
        o[1] &= 0xffff
        o[0] += (m[0] * n[3]) + (m[1] * n[2]) + (m[2] * n[1]) + (m[3] * n[0])
        o[0] &= 0xffff
        return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]]
      }
    //
    // Given a 64bit int (as an array of two 32bit ints) and an int
    // representing a number of bit positions, returns the 64bit int (as an
    // array of two 32bit ints) rotated left by that number of positions.
    //
      var x64Rotl = function (m, n) {
        n %= 64
        if (n === 32) {
          return [m[1], m[0]]
        } else if (n < 32) {
          return [(m[0] << n) | (m[1] >>> (32 - n)), (m[1] << n) | (m[0] >>> (32 - n))]
        } else {
          n -= 32
          return [(m[1] << n) | (m[0] >>> (32 - n)), (m[0] << n) | (m[1] >>> (32 - n))]
        }
      }
    //
    // Given a 64bit int (as an array of two 32bit ints) and an int
    // representing a number of bit positions, returns the 64bit int (as an
    // array of two 32bit ints) shifted left by that number of positions.
    //
      var x64LeftShift = function (m, n) {
        n %= 64
        if (n === 0) {
          return m
        } else if (n < 32) {
          return [(m[0] << n) | (m[1] >>> (32 - n)), m[1] << n]
        } else {
          return [m[1] << (n - 32), 0]
        }
      }
    //
    // Given two 64bit ints (as an array of two 32bit ints) returns the two
    // xored together as a 64bit int (as an array of two 32bit ints).
    //
      var x64Xor = function (m, n) {
        return [m[0] ^ n[0], m[1] ^ n[1]]
      }
    //
    // Given a block, returns murmurHash3's final x64 mix of that block.
    // (`[0, h[0] >>> 1]` is a 33 bit unsigned right shift. This is the
    // only place where we need to right shift 64bit ints.)
    //
      var x64Fmix = function (h) {
        h = x64Xor(h, [0, h[0] >>> 1])
        h = x64Multiply(h, [0xff51afd7, 0xed558ccd])
        h = x64Xor(h, [0, h[0] >>> 1])
        h = x64Multiply(h, [0xc4ceb9fe, 0x1a85ec53])
        h = x64Xor(h, [0, h[0] >>> 1])
        return h
      }

    //
    // Given a string and an optional seed as an int, returns a 128 bit
    // hash using the x64 flavor of MurmurHash3, as an unsigned hex.
    //
      var x64hash128 = function (key, seed) {
        key = key || ''
        seed = seed || 0
        var remainder = key.length % 16
        var bytes = key.length - remainder
        var h1 = [0, seed]
        var h2 = [0, seed]
        var k1 = [0, 0]
        var k2 = [0, 0]
        var c1 = [0x87c37b91, 0x114253d5]
        var c2 = [0x4cf5ad43, 0x2745937f]
        for (var i = 0; i < bytes; i = i + 16) {
          k1 = [((key.charCodeAt(i + 4) & 0xff)) | ((key.charCodeAt(i + 5) & 0xff) << 8) | ((key.charCodeAt(i + 6) & 0xff) << 16) | ((key.charCodeAt(i + 7) & 0xff) << 24), ((key.charCodeAt(i) & 0xff)) | ((key.charCodeAt(i + 1) & 0xff) << 8) | ((key.charCodeAt(i + 2) & 0xff) << 16) | ((key.charCodeAt(i + 3) & 0xff) << 24)]
          k2 = [((key.charCodeAt(i + 12) & 0xff)) | ((key.charCodeAt(i + 13) & 0xff) << 8) | ((key.charCodeAt(i + 14) & 0xff) << 16) | ((key.charCodeAt(i + 15) & 0xff) << 24), ((key.charCodeAt(i + 8) & 0xff)) | ((key.charCodeAt(i + 9) & 0xff) << 8) | ((key.charCodeAt(i + 10) & 0xff) << 16) | ((key.charCodeAt(i + 11) & 0xff) << 24)]
          k1 = x64Multiply(k1, c1)
          k1 = x64Rotl(k1, 31)
          k1 = x64Multiply(k1, c2)
          h1 = x64Xor(h1, k1)
          h1 = x64Rotl(h1, 27)
          h1 = x64Add(h1, h2)
          h1 = x64Add(x64Multiply(h1, [0, 5]), [0, 0x52dce729])
          k2 = x64Multiply(k2, c2)
          k2 = x64Rotl(k2, 33)
          k2 = x64Multiply(k2, c1)
          h2 = x64Xor(h2, k2)
          h2 = x64Rotl(h2, 31)
          h2 = x64Add(h2, h1)
          h2 = x64Add(x64Multiply(h2, [0, 5]), [0, 0x38495ab5])
        }
        k1 = [0, 0]
        k2 = [0, 0]
        switch (remainder) {
          case 15:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 14)], 48))
          // fallthrough
          case 14:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 13)], 40))
          // fallthrough
          case 13:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 12)], 32))
          // fallthrough
          case 12:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 11)], 24))
          // fallthrough
          case 11:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 10)], 16))
          // fallthrough
          case 10:
            k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 9)], 8))
          // fallthrough
          case 9:
            k2 = x64Xor(k2, [0, key.charCodeAt(i + 8)])
            k2 = x64Multiply(k2, c2)
            k2 = x64Rotl(k2, 33)
            k2 = x64Multiply(k2, c1)
            h2 = x64Xor(h2, k2)
          // fallthrough
          case 8:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 7)], 56))
          // fallthrough
          case 7:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 6)], 48))
          // fallthrough
          case 6:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 5)], 40))
          // fallthrough
          case 5:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 4)], 32))
          // fallthrough
          case 4:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 3)], 24))
          // fallthrough
          case 3:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 2)], 16))
          // fallthrough
          case 2:
            k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 1)], 8))
          // fallthrough
          case 1:
            k1 = x64Xor(k1, [0, key.charCodeAt(i)])
            k1 = x64Multiply(k1, c1)
            k1 = x64Rotl(k1, 31)
            k1 = x64Multiply(k1, c2)
            h1 = x64Xor(h1, k1)
          // fallthrough
        }
        h1 = x64Xor(h1, [0, key.length])
        h2 = x64Xor(h2, [0, key.length])
        h1 = x64Add(h1, h2)
        h2 = x64Add(h2, h1)
        h1 = x64Fmix(h1)
        h2 = x64Fmix(h2)
        h1 = x64Add(h1, h2)
        h2 = x64Add(h2, h1)
        return ('00000000' + (h1[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (h1[1] >>> 0).toString(16)).slice(-8) + ('00000000' + (h2[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (h2[1] >>> 0).toString(16)).slice(-8)
      }

      var defaultOptions = {
        preprocessor: null,
        audio: {
          timeout: 1000,
            // On iOS 11, audio context can only be used in response to user interaction.
            // We require users to explicitly enable audio fingerprinting on iOS 11.
            // See https://stackoverflow.com/questions/46363048/onaudioprocess-not-called-on-ios11#46534088
          excludeIOS11: true
        },
        fonts: {
          swfContainerId: 'fingerprintjs2',
          swfPath: 'flash/compiled/FontList.swf',
          userDefinedFonts: [],
          extendedJsFonts: false
        },
        screen: {
           // To ensure consistent fingerprints when users rotate their mobile devices
          detectScreenOrientation: true
        },
        plugins: {
          sortPluginsFor: [/palemoon/i],
          excludeIE: false
        },
        extraComponents: [],
        excludes: {
          // Unreliable on Windows, see https://github.com/Valve/fingerprintjs2/issues/375
          'enumerateDevices': true,
          // devicePixelRatio depends on browser zoom, and it's impossible to detect browser zoom
          'pixelRatio': true,
          // DNT depends on incognito mode for some browsers (Chrome) and it's impossible to detect incognito mode
          'doNotTrack': true,
          // uses js fonts already
          'fontsFlash': true
        },
        NOT_AVAILABLE: 'not available',
        ERROR: 'error',
        EXCLUDED: 'excluded'
      }

      var each = function (obj, iterator) {
        if (Array.prototype.forEach && obj.forEach === Array.prototype.forEach) {
          obj.forEach(iterator)
        } else if (obj.length === +obj.length) {
          for (var i = 0, l = obj.length; i < l; i++) {
            iterator(obj[i], i, obj)
          }
        } else {
          for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
              iterator(obj[key], key, obj)
            }
          }
        }
      }

      var map = function (obj, iterator) {
        var results = []
        // Not using strict equality so that this acts as a
        // shortcut to checking for `null` and `undefined`.
        if (obj == null) {
          return results
        }
        if (Array.prototype.map && obj.map === Array.prototype.map) { return obj.map(iterator) }
        each(obj, function (value, index, list) {
          results.push(iterator(value, index, list))
        })
        return results
      }

      var extendSoft = function (target, source) {
        if (source == null) { return target }
        var value
        var key
        for (key in source) {
          value = source[key]
          if (value != null && !(Object.prototype.hasOwnProperty.call(target, key))) {
            target[key] = value
          }
        }
        return target
      }

    // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices
      var enumerateDevicesKey = function (done, options) {
        if (!isEnumerateDevicesSupported()) {
          return done(options.NOT_AVAILABLE)
        }
        navigator.mediaDevices.enumerateDevices().then(function (devices) {
          done(devices.map(function (device) {
            return 'id=' + device.deviceId + ';gid=' + device.groupId + ';' + device.kind + ';' + device.label
          }))
        })
          .catch(function (error) {
            done(error)
          })
      }

      var isEnumerateDevicesSupported = function () {
        return (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices)
      }
    // Inspired by and based on https://github.com/cozylife/audio-fingerprint
      var audioKey = function (done, options) {
        var audioOptions = options.audio
        if (audioOptions.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)) {
            // See comment for excludeUserAgent and https://stackoverflow.com/questions/46363048/onaudioprocess-not-called-on-ios11#46534088
          return done(options.EXCLUDED)
        }

        var AudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext

        if (AudioContext == null) {
          return done(options.NOT_AVAILABLE)
        }

        var context = new AudioContext(1, 44100, 44100)

        var oscillator = context.createOscillator()
        oscillator.type = 'triangle'
        oscillator.frequency.setValueAtTime(10000, context.currentTime)

        var compressor = context.createDynamicsCompressor()
        each([
            ['threshold', -50],
            ['knee', 40],
            ['ratio', 12],
            ['reduction', -20],
            ['attack', 0],
            ['release', 0.25]
        ], function (item) {
          if (compressor[item[0]] !== undefined && typeof compressor[item[0]].setValueAtTime === 'function') {
            compressor[item[0]].setValueAtTime(item[1], context.currentTime)
          }
        })

        oscillator.connect(compressor)
        compressor.connect(context.destination)
        oscillator.start(0)
        context.startRendering()

        var audioTimeoutId = setTimeout(function () {
          console.warn('Audio fingerprint timed out. Please report bug at https://github.com/Valve/fingerprintjs2 with your user agent: "' + navigator.userAgent + '".')
          context.oncomplete = function () {}
          context = null
          return done('audioTimeout')
        }, audioOptions.timeout)

        context.oncomplete = function (event) {
          var fingerprint
          try {
            clearTimeout(audioTimeoutId)
            fingerprint = event.renderedBuffer.getChannelData(0)
                .slice(4500, 5000)
                .reduce(function (acc, val) { return acc + Math.abs(val) }, 0)
                .toString()
            oscillator.disconnect()
            compressor.disconnect()
          } catch (error) {
            done(error)
            return
          }
          done(fingerprint)
        }
      }
      var UserAgent = function (done) {
        done(navigator.userAgent)
      }
      var webdriver = function (done, options) {
        done(navigator.webdriver == null ? options.NOT_AVAILABLE : navigator.webdriver)
      }
      var languageKey = function (done, options) {
        done(navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || options.NOT_AVAILABLE)
      }
      var colorDepthKey = function (done, options) {
        done(window.screen.colorDepth || options.NOT_AVAILABLE)
      }
      var deviceMemoryKey = function (done, options) {
        done(navigator.deviceMemory || options.NOT_AVAILABLE)
      }
      var pixelRatioKey = function (done, options) {
        done(window.devicePixelRatio || options.NOT_AVAILABLE)
      }
      var screenResolutionKey = function (done, options) {
        done(getScreenResolution(options))
      }
      var getScreenResolution = function (options) {
        var resolution = [window.screen.width, window.screen.height]
        if (options.screen.detectScreenOrientation) {
          resolution.sort().reverse()
        }
        return resolution
      }
      var availableScreenResolutionKey = function (done, options) {
        done(getAvailableScreenResolution(options))
      }
      var getAvailableScreenResolution = function (options) {
        if (window.screen.availWidth && window.screen.availHeight) {
          var available = [window.screen.availHeight, window.screen.availWidth]
          if (options.screen.detectScreenOrientation) {
            available.sort().reverse()
          }
          return available
        }
        // headless browsers
        return options.NOT_AVAILABLE
      }
      var timezoneOffset = function (done) {
        done(new Date().getTimezoneOffset())
      }
      var timezone = function (done, options) {
        if (window.Intl && window.Intl.DateTimeFormat) {
          done(new window.Intl.DateTimeFormat().resolvedOptions().timeZone)
          return
        }
        done(options.NOT_AVAILABLE)
      }
      var sessionStorageKey = function (done, options) {
        done(hasSessionStorage(options))
      }
      var localStorageKey = function (done, options) {
        done(hasLocalStorage(options))
      }
      var indexedDbKey = function (done, options) {
        done(hasIndexedDB(options))
      }
      var addBehaviorKey = function (done) {
          // body might not be defined at this point or removed programmatically
        done(!!(document.body && document.body.addBehavior))
      }
      var openDatabaseKey = function (done) {
        done(!!window.openDatabase)
      }
      var cpuClassKey = function (done, options) {
        done(getNavigatorCpuClass(options))
      }
      var platformKey = function (done, options) {
        done(getNavigatorPlatform(options))
      }
      var doNotTrackKey = function (done, options) {
        done(getDoNotTrack(options))
      }
      var canvasKey = function (done, options) {
        if (isCanvasSupported()) {
          done(getCanvasFp(options))
          return
        }
        done(options.NOT_AVAILABLE)
      }
      var webglKey = function (done, options) {
        if (isWebGlSupported()) {
          done(getWebglFp())
          return
        }
        done(options.NOT_AVAILABLE)
      }
      var webglVendorAndRendererKey = function (done) {
        if (isWebGlSupported()) {
          done(getWebglVendorAndRenderer())
          return
        }
        done()
      }
      var adBlockKey = function (done) {
        done(getAdBlock())
      }
      var hasLiedLanguagesKey = function (done) {
        done(getHasLiedLanguages())
      }
      var hasLiedResolutionKey = function (done) {
        done(getHasLiedResolution())
      }
      var hasLiedOsKey = function (done) {
        done(getHasLiedOs())
      }
      var hasLiedBrowserKey = function (done) {
        done(getHasLiedBrowser())
      }
    // flash fonts (will increase fingerprinting time 20X to ~ 130-150ms)
      var flashFontsKey = function (done, options) {
        // we do flash if swfobject is loaded
        if (!hasSwfObjectLoaded()) {
          return done('swf object not loaded')
        }
        if (!hasMinFlashInstalled()) {
          return done('flash not installed')
        }
        if (!options.fonts.swfPath) {
          return done('missing options.fonts.swfPath')
        }
        loadSwfAndDetectFonts(function (fonts) {
          done(fonts)
        }, options)
      }
    // kudos to http://www.lalit.org/lab/javascript-css-font-detect/
      var jsFontsKey = function (done, options) {
          // a font will be compared against all the three default fonts.
          // and if it doesn't match all 3 then that font is not available.
        var baseFonts = ['monospace', 'sans-serif', 'serif']

        var fontList = [
          'Andale Mono', 'Arial', 'Arial Black', 'Arial Hebrew', 'Arial MT', 'Arial Narrow', 'Arial Rounded MT Bold', 'Arial Unicode MS',
          'Bitstream Vera Sans Mono', 'Book Antiqua', 'Bookman Old Style',
          'Calibri', 'Cambria', 'Cambria Math', 'Century', 'Century Gothic', 'Century Schoolbook', 'Comic Sans', 'Comic Sans MS', 'Consolas', 'Courier', 'Courier New',
          'Geneva', 'Georgia',
          'Helvetica', 'Helvetica Neue',
          'Impact',
          'Lucida Bright', 'Lucida Calligraphy', 'Lucida Console', 'Lucida Fax', 'LUCIDA GRANDE', 'Lucida Handwriting', 'Lucida Sans', 'Lucida Sans Typewriter', 'Lucida Sans Unicode',
          'Microsoft Sans Serif', 'Monaco', 'Monotype Corsiva', 'MS Gothic', 'MS Outlook', 'MS PGothic', 'MS Reference Sans Serif', 'MS Sans Serif', 'MS Serif', 'MYRIAD', 'MYRIAD PRO',
          'Palatino', 'Palatino Linotype',
          'Segoe Print', 'Segoe Script', 'Segoe UI', 'Segoe UI Light', 'Segoe UI Semibold', 'Segoe UI Symbol',
          'Tahoma', 'Times', 'Times New Roman', 'Times New Roman PS', 'Trebuchet MS',
          'Verdana', 'Wingdings', 'Wingdings 2', 'Wingdings 3'
        ]

        if (options.fonts.extendedJsFonts) {
          var extendedFontList = [
            'Abadi MT Condensed Light', 'Academy Engraved LET', 'ADOBE CASLON PRO', 'Adobe Garamond', 'ADOBE GARAMOND PRO', 'Agency FB', 'Aharoni', 'Albertus Extra Bold', 'Albertus Medium', 'Algerian', 'Amazone BT', 'American Typewriter',
            'American Typewriter Condensed', 'AmerType Md BT', 'Andalus', 'Angsana New', 'AngsanaUPC', 'Antique Olive', 'Aparajita', 'Apple Chancery', 'Apple Color Emoji', 'Apple SD Gothic Neo', 'Arabic Typesetting', 'ARCHER',
            'ARNO PRO', 'Arrus BT', 'Aurora Cn BT', 'AvantGarde Bk BT', 'AvantGarde Md BT', 'AVENIR', 'Ayuthaya', 'Bandy', 'Bangla Sangam MN', 'Bank Gothic', 'BankGothic Md BT', 'Baskerville',
            'Baskerville Old Face', 'Batang', 'BatangChe', 'Bauer Bodoni', 'Bauhaus 93', 'Bazooka', 'Bell MT', 'Bembo', 'Benguiat Bk BT', 'Berlin Sans FB', 'Berlin Sans FB Demi', 'Bernard MT Condensed', 'BernhardFashion BT', 'BernhardMod BT', 'Big Caslon', 'BinnerD',
            'Blackadder ITC', 'BlairMdITC TT', 'Bodoni 72', 'Bodoni 72 Oldstyle', 'Bodoni 72 Smallcaps', 'Bodoni MT', 'Bodoni MT Black', 'Bodoni MT Condensed', 'Bodoni MT Poster Compressed',
            'Bookshelf Symbol 7', 'Boulder', 'Bradley Hand', 'Bradley Hand ITC', 'Bremen Bd BT', 'Britannic Bold', 'Broadway', 'Browallia New', 'BrowalliaUPC', 'Brush Script MT', 'Californian FB', 'Calisto MT', 'Calligrapher', 'Candara',
            'CaslonOpnface BT', 'Castellar', 'Centaur', 'Cezanne', 'CG Omega', 'CG Times', 'Chalkboard', 'Chalkboard SE', 'Chalkduster', 'Charlesworth', 'Charter Bd BT', 'Charter BT', 'Chaucer',
            'ChelthmITC Bk BT', 'Chiller', 'Clarendon', 'Clarendon Condensed', 'CloisterBlack BT', 'Cochin', 'Colonna MT', 'Constantia', 'Cooper Black', 'Copperplate', 'Copperplate Gothic', 'Copperplate Gothic Bold',
            'Copperplate Gothic Light', 'CopperplGoth Bd BT', 'Corbel', 'Cordia New', 'CordiaUPC', 'Cornerstone', 'Coronet', 'Cuckoo', 'Curlz MT', 'DaunPenh', 'Dauphin', 'David', 'DB LCD Temp', 'DELICIOUS', 'Denmark',
            'DFKai-SB', 'Didot', 'DilleniaUPC', 'DIN', 'DokChampa', 'Dotum', 'DotumChe', 'Ebrima', 'Edwardian Script ITC', 'Elephant', 'English 111 Vivace BT', 'Engravers MT', 'EngraversGothic BT', 'Eras Bold ITC', 'Eras Demi ITC', 'Eras Light ITC', 'Eras Medium ITC',
            'EucrosiaUPC', 'Euphemia', 'Euphemia UCAS', 'EUROSTILE', 'Exotc350 Bd BT', 'FangSong', 'Felix Titling', 'Fixedsys', 'FONTIN', 'Footlight MT Light', 'Forte',
            'FrankRuehl', 'Fransiscan', 'Freefrm721 Blk BT', 'FreesiaUPC', 'Freestyle Script', 'French Script MT', 'FrnkGothITC Bk BT', 'Fruitger', 'FRUTIGER',
            'Futura', 'Futura Bk BT', 'Futura Lt BT', 'Futura Md BT', 'Futura ZBlk BT', 'FuturaBlack BT', 'Gabriola', 'Galliard BT', 'Gautami', 'Geeza Pro', 'Geometr231 BT', 'Geometr231 Hv BT', 'Geometr231 Lt BT', 'GeoSlab 703 Lt BT',
            'GeoSlab 703 XBd BT', 'Gigi', 'Gill Sans', 'Gill Sans MT', 'Gill Sans MT Condensed', 'Gill Sans MT Ext Condensed Bold', 'Gill Sans Ultra Bold', 'Gill Sans Ultra Bold Condensed', 'Gisha', 'Gloucester MT Extra Condensed', 'GOTHAM', 'GOTHAM BOLD',
            'Goudy Old Style', 'Goudy Stout', 'GoudyHandtooled BT', 'GoudyOLSt BT', 'Gujarati Sangam MN', 'Gulim', 'GulimChe', 'Gungsuh', 'GungsuhChe', 'Gurmukhi MN', 'Haettenschweiler', 'Harlow Solid Italic', 'Harrington', 'Heather', 'Heiti SC', 'Heiti TC', 'HELV',
            'Herald', 'High Tower Text', 'Hiragino Kaku Gothic ProN', 'Hiragino Mincho ProN', 'Hoefler Text', 'Humanst 521 Cn BT', 'Humanst521 BT', 'Humanst521 Lt BT', 'Imprint MT Shadow', 'Incised901 Bd BT', 'Incised901 BT',
            'Incised901 Lt BT', 'INCONSOLATA', 'Informal Roman', 'Informal011 BT', 'INTERSTATE', 'IrisUPC', 'Iskoola Pota', 'JasmineUPC', 'Jazz LET', 'Jenson', 'Jester', 'Jokerman', 'Juice ITC', 'Kabel Bk BT', 'Kabel Ult BT', 'Kailasa', 'KaiTi', 'Kalinga', 'Kannada Sangam MN',
            'Kartika', 'Kaufmann Bd BT', 'Kaufmann BT', 'Khmer UI', 'KodchiangUPC', 'Kokila', 'Korinna BT', 'Kristen ITC', 'Krungthep', 'Kunstler Script', 'Lao UI', 'Latha', 'Leelawadee', 'Letter Gothic', 'Levenim MT', 'LilyUPC', 'Lithograph', 'Lithograph Light', 'Long Island',
            'Lydian BT', 'Magneto', 'Maiandra GD', 'Malayalam Sangam MN', 'Malgun Gothic',
            'Mangal', 'Marigold', 'Marion', 'Marker Felt', 'Market', 'Marlett', 'Matisse ITC', 'Matura MT Script Capitals', 'Meiryo', 'Meiryo UI', 'Microsoft Himalaya', 'Microsoft JhengHei', 'Microsoft New Tai Lue', 'Microsoft PhagsPa', 'Microsoft Tai Le',
            'Microsoft Uighur', 'Microsoft YaHei', 'Microsoft Yi Baiti', 'MingLiU', 'MingLiU_HKSCS', 'MingLiU_HKSCS-ExtB', 'MingLiU-ExtB', 'Minion', 'Minion Pro', 'Miriam', 'Miriam Fixed', 'Mistral', 'Modern', 'Modern No. 20', 'Mona Lisa Solid ITC TT', 'Mongolian Baiti',
            'MONO', 'MoolBoran', 'Mrs Eaves', 'MS LineDraw', 'MS Mincho', 'MS PMincho', 'MS Reference Specialty', 'MS UI Gothic', 'MT Extra', 'MUSEO', 'MV Boli',
            'Nadeem', 'Narkisim', 'NEVIS', 'News Gothic', 'News GothicMT', 'NewsGoth BT', 'Niagara Engraved', 'Niagara Solid', 'Noteworthy', 'NSimSun', 'Nyala', 'OCR A Extended', 'Old Century', 'Old English Text MT', 'Onyx', 'Onyx BT', 'OPTIMA', 'Oriya Sangam MN',
            'OSAKA', 'OzHandicraft BT', 'Palace Script MT', 'Papyrus', 'Parchment', 'Party LET', 'Pegasus', 'Perpetua', 'Perpetua Titling MT', 'PetitaBold', 'Pickwick', 'Plantagenet Cherokee', 'Playbill', 'PMingLiU', 'PMingLiU-ExtB',
            'Poor Richard', 'Poster', 'PosterBodoni BT', 'PRINCETOWN LET', 'Pristina', 'PTBarnum BT', 'Pythagoras', 'Raavi', 'Rage Italic', 'Ravie', 'Ribbon131 Bd BT', 'Rockwell', 'Rockwell Condensed', 'Rockwell Extra Bold', 'Rod', 'Roman', 'Sakkal Majalla',
            'Santa Fe LET', 'Savoye LET', 'Sceptre', 'Script', 'Script MT Bold', 'SCRIPTINA', 'Serifa', 'Serifa BT', 'Serifa Th BT', 'ShelleyVolante BT', 'Sherwood',
            'Shonar Bangla', 'Showcard Gothic', 'Shruti', 'Signboard', 'SILKSCREEN', 'SimHei', 'Simplified Arabic', 'Simplified Arabic Fixed', 'SimSun', 'SimSun-ExtB', 'Sinhala Sangam MN', 'Sketch Rockwell', 'Skia', 'Small Fonts', 'Snap ITC', 'Snell Roundhand', 'Socket',
            'Souvenir Lt BT', 'Staccato222 BT', 'Steamer', 'Stencil', 'Storybook', 'Styllo', 'Subway', 'Swis721 BlkEx BT', 'Swiss911 XCm BT', 'Sylfaen', 'Synchro LET', 'System', 'Tamil Sangam MN', 'Technical', 'Teletype', 'Telugu Sangam MN', 'Tempus Sans ITC',
            'Terminal', 'Thonburi', 'Traditional Arabic', 'Trajan', 'TRAJAN PRO', 'Tristan', 'Tubular', 'Tunga', 'Tw Cen MT', 'Tw Cen MT Condensed', 'Tw Cen MT Condensed Extra Bold',
            'TypoUpright BT', 'Unicorn', 'Univers', 'Univers CE 55 Medium', 'Univers Condensed', 'Utsaah', 'Vagabond', 'Vani', 'Vijaya', 'Viner Hand ITC', 'VisualUI', 'Vivaldi', 'Vladimir Script', 'Vrinda', 'Westminster', 'WHITNEY', 'Wide Latin',
            'ZapfEllipt BT', 'ZapfHumnst BT', 'ZapfHumnst Dm BT', 'Zapfino', 'Zurich BlkEx BT', 'Zurich Ex BT', 'ZWAdobeF']
          fontList = fontList.concat(extendedFontList)
        }

        fontList = fontList.concat(options.fonts.userDefinedFonts)

          // remove duplicate fonts
        fontList = fontList.filter(function (font, position) {
          return fontList.indexOf(font) === position
        })

          // we use m or w because these two characters take up the maximum width.
          // And we use a LLi so that the same matching fonts can get separated
        var testString = 'mmmmmmmmmmlli'

          // we test using 72px font size, we may use any size. I guess larger the better.
        var testSize = '72px'

        var h = document.getElementsByTagName('body')[0]

          // div to load spans for the base fonts
        var baseFontsDiv = document.createElement('div')

          // div to load spans for the fonts to detect
        var fontsDiv = document.createElement('div')

        var defaultWidth = {}
        var defaultHeight = {}

          // creates a span where the fonts will be loaded
        var createSpan = function () {
          var s = document.createElement('span')
            /*
             * We need this css as in some weird browser this
             * span elements shows up for a microSec which creates a
             * bad user experience
             */
          s.style.position = 'absolute'
          s.style.left = '-9999px'
          s.style.fontSize = testSize

            // css font reset to reset external styles
          s.style.fontStyle = 'normal'
          s.style.fontWeight = 'normal'
          s.style.letterSpacing = 'normal'
          s.style.lineBreak = 'auto'
          s.style.lineHeight = 'normal'
          s.style.textTransform = 'none'
          s.style.textAlign = 'left'
          s.style.textDecoration = 'none'
          s.style.textShadow = 'none'
          s.style.whiteSpace = 'normal'
          s.style.wordBreak = 'normal'
          s.style.wordSpacing = 'normal'

          s.innerHTML = testString
          return s
        }

          // creates a span and load the font to detect and a base font for fallback
        var createSpanWithFonts = function (fontToDetect, baseFont) {
          var s = createSpan()
          s.style.fontFamily = "'" + fontToDetect + "'," + baseFont
          return s
        }

          // creates spans for the base fonts and adds them to baseFontsDiv
        var initializeBaseFontsSpans = function () {
          var spans = []
          for (var index = 0, length = baseFonts.length; index < length; index++) {
            var s = createSpan()
            s.style.fontFamily = baseFonts[index]
            baseFontsDiv.appendChild(s)
            spans.push(s)
          }
          return spans
        }

          // creates spans for the fonts to detect and adds them to fontsDiv
        var initializeFontsSpans = function () {
          var spans = {}
          for (var i = 0, l = fontList.length; i < l; i++) {
            var fontSpans = []
            for (var j = 0, numDefaultFonts = baseFonts.length; j < numDefaultFonts; j++) {
              var s = createSpanWithFonts(fontList[i], baseFonts[j])
              fontsDiv.appendChild(s)
              fontSpans.push(s)
            }
            spans[fontList[i]] = fontSpans // Stores {fontName : [spans for that font]}
          }
          return spans
        }

          // checks if a font is available
        var isFontAvailable = function (fontSpans) {
          var detected = false
          for (var i = 0; i < baseFonts.length; i++) {
            detected = (fontSpans[i].offsetWidth !== defaultWidth[baseFonts[i]] || fontSpans[i].offsetHeight !== defaultHeight[baseFonts[i]])
            if (detected) {
              return detected
            }
          }
          return detected
        }

          // create spans for base fonts
        var baseFontsSpans = initializeBaseFontsSpans()

          // add the spans to the DOM
        h.appendChild(baseFontsDiv)

          // get the default width for the three base fonts
        for (var index = 0, length = baseFonts.length; index < length; index++) {
          defaultWidth[baseFonts[index]] = baseFontsSpans[index].offsetWidth // width for the default font
          defaultHeight[baseFonts[index]] = baseFontsSpans[index].offsetHeight // height for the default font
        }

          // create spans for fonts to detect
        var fontsSpans = initializeFontsSpans()

          // add all the spans to the DOM
        h.appendChild(fontsDiv)

          // check available fonts
        var available = []
        for (var i = 0, l = fontList.length; i < l; i++) {
          if (isFontAvailable(fontsSpans[fontList[i]])) {
            available.push(fontList[i])
          }
        }

          // remove spans from DOM
        h.removeChild(fontsDiv)
        h.removeChild(baseFontsDiv)

        done(available)
      }

      var pluginsComponent = function (done, options) {
        if (isIE()) {
          if (!options.plugins.excludeIE) {
            done(getIEPlugins(options))
          } else {
            done(options.EXCLUDED)
          }
        } else {
          done(getRegularPlugins(options))
        }
      }
      var getRegularPlugins = function (options) {
        if (navigator.plugins == null) {
          return options.NOT_AVAILABLE
        }

        var plugins = []
          // plugins isn't defined in Node envs.
        for (var i = 0, l = navigator.plugins.length; i < l; i++) {
          if (navigator.plugins[i]) { plugins.push(navigator.plugins[i]) }
        }

          // sorting plugins only for those user agents, that we know randomize the plugins
          // every time we try to enumerate them
        if (pluginsShouldBeSorted(options)) {
          plugins = plugins.sort(function (a, b) {
            if (a.name > b.name) { return 1 }
            if (a.name < b.name) { return -1 }
            return 0
          })
        }
        return map(plugins, function (p) {
          var mimeTypes = map(p, function (mt) {
            return [mt.type, mt.suffixes]
          })
          return [p.name, p.description, mimeTypes]
        })
      }
      var getIEPlugins = function (options) {
        var result = []
        if ((Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, 'ActiveXObject')) || ('ActiveXObject' in window)) {
          var names = [
            'AcroPDF.PDF', // Adobe PDF reader 7+
            'Adodb.Stream',
            'AgControl.AgControl', // Silverlight
            'DevalVRXCtrl.DevalVRXCtrl.1',
            'MacromediaFlashPaper.MacromediaFlashPaper',
            'Msxml2.DOMDocument',
            'Msxml2.XMLHTTP',
            'PDF.PdfCtrl', // Adobe PDF reader 6 and earlier, brrr
            'QuickTime.QuickTime', // QuickTime
            'QuickTimeCheckObject.QuickTimeCheck.1',
            'RealPlayer',
            'RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)',
            'RealVideo.RealVideo(tm) ActiveX Control (32-bit)',
            'Scripting.Dictionary',
            'SWCtl.SWCtl', // ShockWave player
            'Shell.UIHelper',
            'ShockwaveFlash.ShockwaveFlash', // flash plugin
            'Skype.Detection',
            'TDCCtl.TDCCtl',
            'WMPlayer.OCX', // Windows media player
            'rmocx.RealPlayer G2 Control',
            'rmocx.RealPlayer G2 Control.1'
          ]
            // starting to detect plugins in IE
          result = map(names, function (name) {
            try {
                // eslint-disable-next-line no-new
              new window.ActiveXObject(name)
              return name
            } catch (e) {
              return options.ERROR
            }
          })
        } else {
          result.push(options.NOT_AVAILABLE)
        }
        if (navigator.plugins) {
          result = result.concat(getRegularPlugins(options))
        }
        return result
      }
      var pluginsShouldBeSorted = function (options) {
        var should = false
        for (var i = 0, l = options.plugins.sortPluginsFor.length; i < l; i++) {
          var re = options.plugins.sortPluginsFor[i]
          if (navigator.userAgent.match(re)) {
            should = true
            break
          }
        }
        return should
      }
      var touchSupportKey = function (done) {
        done(getTouchSupport())
      }
      var hardwareConcurrencyKey = function (done, options) {
        done(getHardwareConcurrency(options))
      }
      var hasSessionStorage = function (options) {
        try {
          return !!window.sessionStorage
        } catch (e) {
          return options.ERROR // SecurityError when referencing it means it exists
        }
      }

    // https://bugzilla.mozilla.org/show_bug.cgi?id=781447
      var hasLocalStorage = function (options) {
        try {
          return !!window.localStorage
        } catch (e) {
          return options.ERROR // SecurityError when referencing it means it exists
        }
      }
      var hasIndexedDB = function (options) {
        try {
          return !!window.indexedDB
        } catch (e) {
          return options.ERROR // SecurityError when referencing it means it exists
        }
      }
      var getHardwareConcurrency = function (options) {
        if (navigator.hardwareConcurrency) {
          return navigator.hardwareConcurrency
        }
        return options.NOT_AVAILABLE
      }
      var getNavigatorCpuClass = function (options) {
        return navigator.cpuClass || options.NOT_AVAILABLE
      }
      var getNavigatorPlatform = function (options) {
        if (navigator.platform) {
          return navigator.platform
        } else {
          return options.NOT_AVAILABLE
        }
      }
      var getDoNotTrack = function (options) {
        if (navigator.doNotTrack) {
          return navigator.doNotTrack
        } else if (navigator.msDoNotTrack) {
          return navigator.msDoNotTrack
        } else if (window.doNotTrack) {
          return window.doNotTrack
        } else {
          return options.NOT_AVAILABLE
        }
      }
    // This is a crude and primitive touch screen detection.
    // It's not possible to currently reliably detect the  availability of a touch screen
    // with a JS, without actually subscribing to a touch event.
    // http://www.stucox.com/blog/you-cant-detect-a-touchscreen/
    // https://github.com/Modernizr/Modernizr/issues/548
    // method returns an array of 3 values:
    // maxTouchPoints, the success or failure of creating a TouchEvent,
    // and the availability of the 'ontouchstart' property

      var getTouchSupport = function () {
        var maxTouchPoints = 0
        var touchEvent
        if (typeof navigator.maxTouchPoints !== 'undefined') {
          maxTouchPoints = navigator.maxTouchPoints
        } else if (typeof navigator.msMaxTouchPoints !== 'undefined') {
          maxTouchPoints = navigator.msMaxTouchPoints
        }
        try {
          document.createEvent('TouchEvent')
          touchEvent = true
        } catch (_) {
          touchEvent = false
        }
        var touchStart = 'ontouchstart' in window
        return [maxTouchPoints, touchEvent, touchStart]
      }
    // https://www.browserleaks.com/canvas#how-does-it-work

      var getCanvasFp = function (options) {
        var result = []
          // Very simple now, need to make it more complex (geo shapes etc)
        var canvas = document.createElement('canvas')
        canvas.width = 2000
        canvas.height = 200
        canvas.style.display = 'inline'
        var ctx = canvas.getContext('2d')
          // detect browser support of canvas winding
          // http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
          // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/canvas/winding.js
        ctx.rect(0, 0, 10, 10)
        ctx.rect(2, 2, 6, 6)
        result.push('canvas winding:' + ((ctx.isPointInPath(5, 5, 'evenodd') === false) ? 'yes' : 'no'))

        ctx.textBaseline = 'alphabetic'
        ctx.fillStyle = '#f60'
        ctx.fillRect(125, 1, 62, 20)
        ctx.fillStyle = '#069'
          // https://github.com/Valve/fingerprintjs2/issues/66
        if (options.dontUseFakeFontInCanvas) {
          ctx.font = '11pt Arial'
        } else {
          ctx.font = '11pt no-real-font-123'
        }
        ctx.fillText('Cwm fjordbank glyphs vext quiz, \ud83d\ude03', 2, 15)
        ctx.fillStyle = 'rgba(102, 204, 0, 0.2)'
        ctx.font = '18pt Arial'
        ctx.fillText('Cwm fjordbank glyphs vext quiz, \ud83d\ude03', 4, 45)

          // canvas blending
          // http://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas/
          // http://jsfiddle.net/NDYV8/16/
        ctx.globalCompositeOperation = 'multiply'
        ctx.fillStyle = 'rgb(255,0,255)'
        ctx.beginPath()
        ctx.arc(50, 50, 50, 0, Math.PI * 2, true)
        ctx.closePath()
        ctx.fill()
        ctx.fillStyle = 'rgb(0,255,255)'
        ctx.beginPath()
        ctx.arc(100, 50, 50, 0, Math.PI * 2, true)
        ctx.closePath()
        ctx.fill()
        ctx.fillStyle = 'rgb(255,255,0)'
        ctx.beginPath()
        ctx.arc(75, 100, 50, 0, Math.PI * 2, true)
        ctx.closePath()
        ctx.fill()
        ctx.fillStyle = 'rgb(255,0,255)'
          // canvas winding
          // http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
          // http://jsfiddle.net/NDYV8/19/
        ctx.arc(75, 75, 75, 0, Math.PI * 2, true)
        ctx.arc(75, 75, 25, 0, Math.PI * 2, true)
        ctx.fill('evenodd')

        if (canvas.toDataURL) { result.push('canvas fp:' + canvas.toDataURL()) }
        return result
      }
      var getWebglFp = function () {
        var gl
        var fa2s = function (fa) {
          gl.clearColor(0.0, 0.0, 0.0, 1.0)
          gl.enable(gl.DEPTH_TEST)
          gl.depthFunc(gl.LEQUAL)
          gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
          return '[' + fa[0] + ', ' + fa[1] + ']'
        }
        var maxAnisotropy = function (gl) {
          var ext = gl.getExtension('EXT_texture_filter_anisotropic') || gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic') || gl.getExtension('MOZ_EXT_texture_filter_anisotropic')
          if (ext) {
            var anisotropy = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
            if (anisotropy === 0) {
              anisotropy = 2
            }
            return anisotropy
          } else {
            return null
          }
        }

        gl = getWebglCanvas()
        if (!gl) { return null }
          // WebGL fingerprinting is a combination of techniques, found in MaxMind antifraud script & Augur fingerprinting.
          // First it draws a gradient object with shaders and convers the image to the Base64 string.
          // Then it enumerates all WebGL extensions & capabilities and appends them to the Base64 string, resulting in a huge WebGL string, potentially very unique on each device
          // Since iOS supports webgl starting from version 8.1 and 8.1 runs on several graphics chips, the results may be different across ios devices, but we need to verify it.
        var result = []
        var vShaderTemplate = 'attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}'
        var fShaderTemplate = 'precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}'
        var vertexPosBuffer = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer)
        var vertices = new Float32Array([-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0])
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
        vertexPosBuffer.itemSize = 3
        vertexPosBuffer.numItems = 3
        var program = gl.createProgram()
        var vshader = gl.createShader(gl.VERTEX_SHADER)
        gl.shaderSource(vshader, vShaderTemplate)
        gl.compileShader(vshader)
        var fshader = gl.createShader(gl.FRAGMENT_SHADER)
        gl.shaderSource(fshader, fShaderTemplate)
        gl.compileShader(fshader)
        gl.attachShader(program, vshader)
        gl.attachShader(program, fshader)
        gl.linkProgram(program)
        gl.useProgram(program)
        program.vertexPosAttrib = gl.getAttribLocation(program, 'attrVertex')
        program.offsetUniform = gl.getUniformLocation(program, 'uniformOffset')
        gl.enableVertexAttribArray(program.vertexPosArray)
        gl.vertexAttribPointer(program.vertexPosAttrib, vertexPosBuffer.itemSize, gl.FLOAT, !1, 0, 0)
        gl.uniform2f(program.offsetUniform, 1, 1)
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexPosBuffer.numItems)
        try {
          result.push(gl.canvas.toDataURL())
        } catch (e) {
            /* .toDataURL may be absent or broken (blocked by extension) */
        }
        result.push('extensions:' + (gl.getSupportedExtensions() || []).join(';'))
        result.push('webgl aliased line width range:' + fa2s(gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE)))
        result.push('webgl aliased point size range:' + fa2s(gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)))
        result.push('webgl alpha bits:' + gl.getParameter(gl.ALPHA_BITS))
        result.push('webgl antialiasing:' + (gl.getContextAttributes().antialias ? 'yes' : 'no'))
        result.push('webgl blue bits:' + gl.getParameter(gl.BLUE_BITS))
        result.push('webgl depth bits:' + gl.getParameter(gl.DEPTH_BITS))
        result.push('webgl green bits:' + gl.getParameter(gl.GREEN_BITS))
        result.push('webgl max anisotropy:' + maxAnisotropy(gl))
        result.push('webgl max combined texture image units:' + gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS))
        result.push('webgl max cube map texture size:' + gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE))
        result.push('webgl max fragment uniform vectors:' + gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS))
        result.push('webgl max render buffer size:' + gl.getParameter(gl.MAX_RENDERBUFFER_SIZE))
        result.push('webgl max texture image units:' + gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS))
        result.push('webgl max texture size:' + gl.getParameter(gl.MAX_TEXTURE_SIZE))
        result.push('webgl max varying vectors:' + gl.getParameter(gl.MAX_VARYING_VECTORS))
        result.push('webgl max vertex attribs:' + gl.getParameter(gl.MAX_VERTEX_ATTRIBS))
        result.push('webgl max vertex texture image units:' + gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS))
        result.push('webgl max vertex uniform vectors:' + gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS))
        result.push('webgl max viewport dims:' + fa2s(gl.getParameter(gl.MAX_VIEWPORT_DIMS)))
        result.push('webgl red bits:' + gl.getParameter(gl.RED_BITS))
        result.push('webgl renderer:' + gl.getParameter(gl.RENDERER))
        result.push('webgl shading language version:' + gl.getParameter(gl.SHADING_LANGUAGE_VERSION))
        result.push('webgl stencil bits:' + gl.getParameter(gl.STENCIL_BITS))
        result.push('webgl vendor:' + gl.getParameter(gl.VENDOR))
        result.push('webgl version:' + gl.getParameter(gl.VERSION))

        try {
            // Add the unmasked vendor and unmasked renderer if the debug_renderer_info extension is available
          var extensionDebugRendererInfo = gl.getExtension('WEBGL_debug_renderer_info')
          if (extensionDebugRendererInfo) {
            result.push('webgl unmasked vendor:' + gl.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL))
            result.push('webgl unmasked renderer:' + gl.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL))
          }
        } catch (e) { /* squelch */ }

        if (!gl.getShaderPrecisionFormat) {
          return result
        }

        each(['FLOAT', 'INT'], function (numType) {
          each(['VERTEX', 'FRAGMENT'], function (shader) {
            each(['HIGH', 'MEDIUM', 'LOW'], function (numSize) {
              each(['precision', 'rangeMin', 'rangeMax'], function (key) {
                var format = gl.getShaderPrecisionFormat(gl[shader + '_SHADER'], gl[numSize + '_' + numType])[key]
                if (key !== 'precision') {
                  key = 'precision ' + key
                }
                var line = ['webgl ', shader.toLowerCase(), ' shader ', numSize.toLowerCase(), ' ', numType.toLowerCase(), ' ', key, ':', format].join('')
                result.push(line)
              })
            })
          })
        })
        return result
      }
      var getWebglVendorAndRenderer = function () {
          /* This a subset of the WebGL fingerprint with a lot of entropy, while being reasonably browser-independent */
        try {
          var glContext = getWebglCanvas()
          var extensionDebugRendererInfo = glContext.getExtension('WEBGL_debug_renderer_info')
          return glContext.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL) + '~' + glContext.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL)
        } catch (e) {
          return null
        }
      }
      var getAdBlock = function () {
        var ads = document.createElement('div')
        ads.innerHTML = '&nbsp;'
        ads.className = 'adsbox'
        var result = false
        try {
            // body may not exist, that's why we need try/catch
          document.body.appendChild(ads)
          result = document.getElementsByClassName('adsbox')[0].offsetHeight === 0
          document.body.removeChild(ads)
        } catch (e) {
          result = false
        }
        return result
      }
      var getHasLiedLanguages = function () {
          // We check if navigator.language is equal to the first language of navigator.languages
        if (typeof navigator.languages !== 'undefined') {
          try {
            var firstLanguages = navigator.languages[0].substr(0, 2)
            if (firstLanguages !== navigator.language.substr(0, 2)) {
              return true
            }
          } catch (err) {
            return true
          }
        }
        return false
      }
      var getHasLiedResolution = function () {
        return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight
      }
      var getHasLiedOs = function () {
        var userAgent = navigator.userAgent.toLowerCase()
        var oscpu = navigator.oscpu
        var platform = navigator.platform.toLowerCase()
        var os
          // We extract the OS from the user agent (respect the order of the if else if statement)
        if (userAgent.indexOf('windows phone') >= 0) {
          os = 'Windows Phone'
        } else if (userAgent.indexOf('win') >= 0) {
          os = 'Windows'
        } else if (userAgent.indexOf('android') >= 0) {
          os = 'Android'
        } else if (userAgent.indexOf('linux') >= 0 || userAgent.indexOf('cros') >= 0) {
          os = 'Linux'
        } else if (userAgent.indexOf('iphone') >= 0 || userAgent.indexOf('ipad') >= 0) {
          os = 'iOS'
        } else if (userAgent.indexOf('mac') >= 0) {
          os = 'Mac'
        } else {
          os = 'Other'
        }
          // We detect if the person uses a mobile device
        var mobileDevice = (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0))

        if (mobileDevice && os !== 'Windows Phone' && os !== 'Android' && os !== 'iOS' && os !== 'Other') {
          return true
        }

          // We compare oscpu with the OS extracted from the UA
        if (typeof oscpu !== 'undefined') {
          oscpu = oscpu.toLowerCase()
          if (oscpu.indexOf('win') >= 0 && os !== 'Windows' && os !== 'Windows Phone') {
            return true
          } else if (oscpu.indexOf('linux') >= 0 && os !== 'Linux' && os !== 'Android') {
            return true
          } else if (oscpu.indexOf('mac') >= 0 && os !== 'Mac' && os !== 'iOS') {
            return true
          } else if ((oscpu.indexOf('win') === -1 && oscpu.indexOf('linux') === -1 && oscpu.indexOf('mac') === -1) !== (os === 'Other')) {
            return true
          }
        }

          // We compare platform with the OS extracted from the UA
        if (platform.indexOf('win') >= 0 && os !== 'Windows' && os !== 'Windows Phone') {
          return true
        } else if ((platform.indexOf('linux') >= 0 || platform.indexOf('android') >= 0 || platform.indexOf('pike') >= 0) && os !== 'Linux' && os !== 'Android') {
          return true
        } else if ((platform.indexOf('mac') >= 0 || platform.indexOf('ipad') >= 0 || platform.indexOf('ipod') >= 0 || platform.indexOf('iphone') >= 0) && os !== 'Mac' && os !== 'iOS') {
          return true
        } else if ((platform.indexOf('win') === -1 && platform.indexOf('linux') === -1 && platform.indexOf('mac') === -1) !== (os === 'Other')) {
          return true
        }

        return typeof navigator.plugins === 'undefined' && os !== 'Windows' && os !== 'Windows Phone'
      }
      var getHasLiedBrowser = function () {
        var userAgent = navigator.userAgent.toLowerCase()
        var productSub = navigator.productSub

          // we extract the browser from the user agent (respect the order of the tests)
        var browser
        if (userAgent.indexOf('firefox') >= 0) {
          browser = 'Firefox'
        } else if (userAgent.indexOf('opera') >= 0 || userAgent.indexOf('opr') >= 0) {
          browser = 'Opera'
        } else if (userAgent.indexOf('chrome') >= 0) {
          browser = 'Chrome'
        } else if (userAgent.indexOf('safari') >= 0) {
          browser = 'Safari'
        } else if (userAgent.indexOf('trident') >= 0) {
          browser = 'Internet Explorer'
        } else {
          browser = 'Other'
        }

        if ((browser === 'Chrome' || browser === 'Safari' || browser === 'Opera') && productSub !== '20030107') {
          return true
        }

          // eslint-disable-next-line no-eval
        var tempRes = eval.toString().length
        if (tempRes === 37 && browser !== 'Safari' && browser !== 'Firefox' && browser !== 'Other') {
          return true
        } else if (tempRes === 39 && browser !== 'Internet Explorer' && browser !== 'Other') {
          return true
        } else if (tempRes === 33 && browser !== 'Chrome' && browser !== 'Opera' && browser !== 'Other') {
          return true
        }

          // We create an error to see how it is handled
        var errFirefox
        try {
            // eslint-disable-next-line no-throw-literal
          throw 'a'
        } catch (err) {
          try {
            err.toSource()
            errFirefox = true
          } catch (errOfErr) {
            errFirefox = false
          }
        }
        return errFirefox && browser !== 'Firefox' && browser !== 'Other'
      }
      var isCanvasSupported = function () {
        var elem = document.createElement('canvas')
        return !!(elem.getContext && elem.getContext('2d'))
      }
      var isWebGlSupported = function () {
          // code taken from Modernizr
        if (!isCanvasSupported()) {
          return false
        }

        var glContext = getWebglCanvas()
        return !!window.WebGLRenderingContext && !!glContext
      }
      var isIE = function () {
        if (navigator.appName === 'Microsoft Internet Explorer') {
          return true
        } else if (navigator.appName === 'Netscape' && /Trident/.test(navigator.userAgent)) { // IE 11
          return true
        }
        return false
      }
      var hasSwfObjectLoaded = function () {
        return typeof window.swfobject !== 'undefined'
      }
      var hasMinFlashInstalled = function () {
        return window.swfobject.hasFlashPlayerVersion('9.0.0')
      }
      var addFlashDivNode = function (options) {
        var node = document.createElement('div')
        node.setAttribute('id', options.fonts.swfContainerId)
        document.body.appendChild(node)
      }
      var loadSwfAndDetectFonts = function (done, options) {
        var hiddenCallback = '___fp_swf_loaded'
        window[hiddenCallback] = function (fonts) {
          done(fonts)
        }
        var id = options.fonts.swfContainerId
        addFlashDivNode()
        var flashvars = { onReady: hiddenCallback }
        var flashparams = { allowScriptAccess: 'always', menu: 'false' }
        window.swfobject.embedSWF(options.fonts.swfPath, id, '1', '1', '9.0.0', false, flashvars, flashparams, {})
      }
      var getWebglCanvas = function () {
        var canvas = document.createElement('canvas')
        var gl = null
        try {
          gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
        } catch (e) { /* squelch */ }
        if (!gl) { gl = null }
        return gl
      }

      var components = [
          { key: 'userAgent', getData: UserAgent },
          { key: 'webdriver', getData: webdriver },
          { key: 'language', getData: languageKey },
          { key: 'colorDepth', getData: colorDepthKey },
          { key: 'deviceMemory', getData: deviceMemoryKey },
          { key: 'pixelRatio', getData: pixelRatioKey },
          { key: 'hardwareConcurrency', getData: hardwareConcurrencyKey },
          { key: 'screenResolution', getData: screenResolutionKey },
          { key: 'availableScreenResolution', getData: availableScreenResolutionKey },
          { key: 'timezoneOffset', getData: timezoneOffset },
          { key: 'timezone', getData: timezone },
          { key: 'sessionStorage', getData: sessionStorageKey },
          { key: 'localStorage', getData: localStorageKey },
          { key: 'indexedDb', getData: indexedDbKey },
          { key: 'addBehavior', getData: addBehaviorKey },
          { key: 'openDatabase', getData: openDatabaseKey },
          { key: 'cpuClass', getData: cpuClassKey },
          { key: 'platform', getData: platformKey },
          { key: 'doNotTrack', getData: doNotTrackKey },
          { key: 'plugins', getData: pluginsComponent },
          { key: 'canvas', getData: canvasKey },
          { key: 'webgl', getData: webglKey },
          { key: 'webglVendorAndRenderer', getData: webglVendorAndRendererKey },
          { key: 'adBlock', getData: adBlockKey },
          { key: 'hasLiedLanguages', getData: hasLiedLanguagesKey },
          { key: 'hasLiedResolution', getData: hasLiedResolutionKey },
          { key: 'hasLiedOs', getData: hasLiedOsKey },
          { key: 'hasLiedBrowser', getData: hasLiedBrowserKey },
          { key: 'touchSupport', getData: touchSupportKey },
          { key: 'fonts', getData: jsFontsKey, pauseBefore: true },
          { key: 'fontsFlash', getData: flashFontsKey, pauseBefore: true },
          { key: 'audio', getData: audioKey },
          { key: 'enumerateDevices', getData: enumerateDevicesKey }
      ];

      var TernairFP3 = function (options) {
          throw new Error("'new Fingerprint()' is deprecated, see https://github.com/Valve/fingerprintjs2#upgrade-guide-from-182-to-200");
      };
      window.TernairFP3 = TernairFP3;


      TernairFP3.getSync = function (options) {
          if (!options) {
              options = {}
          }
          extendSoft(options, defaultOptions)
          options.components = options.extraComponents.concat(components);

          var keys = {
              data: [],
              addPreprocessedComponent: function (key, value) {
                  if (typeof options.preprocessor === 'function') {
                      value = options.preprocessor(key, value)
                  }
                  keys.data.push({ key: key, value: value })
              }
          }

          var i = -1;
          var chainComponents = function (alreadyWaited) {
              i += 1;
              if (i >= options.components.length) { // on finish
                  return keys.data;
              }
              var component = options.components[i]

              if (options.excludes[component.key]) {
                  chainComponents(false) // skip
              }

              if (!alreadyWaited && component.pauseBefore) {
                  i -= 1; 
                  chainComponents(true);
              }

              try {
                  component.getData(function (value) {
                          keys.addPreprocessedComponent(component.key, value);
                          chainComponents(false);
                      },
                      options);
              } catch (error) {
                  // main body error
                  keys.addPreprocessedComponent(component.key, String(error));
                  chainComponents(false);
              }
          }
          chainComponents(true);
          var values = keys.data.map(function(component) { return component.value });
          return TernairFP3.x64hash128(values.join(''), 31);
      }


      TernairFP3.get = function (options, callback) {
        if (!callback) {
          callback = options
          options = {}
        } else if (!options) {
          options = {}
        }
        extendSoft(options, defaultOptions)
        options.components = options.extraComponents.concat(components)

        var keys = {
          data: [],
          addPreprocessedComponent: function (key, value) {
            if (typeof options.preprocessor === 'function') {
              value = options.preprocessor(key, value)
            }
            keys.data.push({key: key, value: value})
          }
        }

        var i = -1
        var chainComponents = function (alreadyWaited) {
          i += 1
          if (i >= options.components.length) { // on finish
            callback(keys.data)
            return
          }
          var component = options.components[i]

          if (options.excludes[component.key]) {
            chainComponents(false) // skip
            return
          }

          if (!alreadyWaited && component.pauseBefore) {
            i -= 1
            setTimeout(function () {
              chainComponents(true)
            }, 1)
            return
          }

          try {
            component.getData(function (value) {
              keys.addPreprocessedComponent(component.key, value)
              chainComponents(false)
            }, options)
          } catch (error) {
            // main body error
            keys.addPreprocessedComponent(component.key, String(error))
            chainComponents(false)
          }
        }

        chainComponents(false)
      }

      TernairFP3.getPromise = function (options) {
        return new Promise(function (resolve, reject) {
            TernairFP3.get(options, resolve)
        })
      }

      TernairFP3.getV18 = function (options, callback) {
        if (callback == null) {
          callback = options
          options = {}
        }
        return TernairFP3.get(options, function (components) {
          var newComponents = []
          for (var i = 0; i < components.length; i++) {
            var component = components[i]
            if (component.value === (options.NOT_AVAILABLE || 'not available')) {
              newComponents.push({key: component.key, value: 'unknown'})
            } else if (component.key === 'plugins') {
              newComponents.push({key: 'plugins',
                value: map(component.value, function (p) {
                  var mimeTypes = map(p[2], function (mt) {
                    if (mt.join) { return mt.join('~') }
                    return mt
                  }).join(',')
                  return [p[0], p[1], mimeTypes].join('::')
                })})
            } else if (['canvas', 'webgl'].indexOf(component.key) !== -1) {
              newComponents.push({key: component.key, value: component.value.join('~')})
            } else if (['sessionStorage', 'localStorage', 'indexedDb', 'addBehavior', 'openDatabase'].indexOf(component.key) !== -1) {
              if (component.value) {
                newComponents.push({key: component.key, value: 1})
              } else {
                // skip
                continue
              }
            } else {
              if (component.value) {
                newComponents.push(component.value.join ? {key: component.key, value: component.value.join(';')} : component)
              } else {
                newComponents.push({key: component.key, value: component.value})
              }
            }
          }
          var murmur = x64hash128(map(newComponents, function (component) { return component.value }).join('~~~'), 31)
          callback(murmur, newComponents)
        })
      }

      TernairFP3.x64hash128 = x64hash128
      TernairFP3.VERSION = '2.0.6'
      return TernairFP3
    
})();
///#source 1 1 /Scripts/modules/fingerprint2.js
//#region fingerprint

var fp3 = function () {

    return "fp3_" + TernairFP3.getSync();
};

//#endregion
///#source 1 1 /Scripts/modules/logging.js
//#region logging

function log2(messages) {
    // ReSharper restore UnusedParameter
    if (console && console.log) {
        try {
            //array, iedere

            for (var i = 0; i < arguments.length; i++) {
                console.log(arguments[i]);
            }

        } catch (e) {
        }
    }
}

function error2(messages) {
    // ReSharper restore UnusedParameter
    if (console && console.log) {


        //eerste als error, rest als logs

        if (!console.error) {

            //geen error? dan fallback naar log
            log2(arguments);
        }


        try {
            //array, iedere

            var isFirst = true;

            for (var i = 0; i < arguments.length; i++) {
                var arg = arguments[i];
                if (isFirst) {
                    console.error(arg);
                    isFirst = false;

                } else {
                    console.log(arg);
                }
            }

        } catch (e) {
        }
    }
}

function log4(messages) {
    /// <summary>logging van array</summary>
    /// <param name="messages" type="Object"></param>

    // ReSharper restore UnusedParameter
    if (console && console.log) {
        try {
            //array, iedere

            for (var i = 0; i < arguments.length; i++) {
                var arr = arguments[i];
                if (arr instanceof Array) {
                    //unwind array
                    for (var j = 0; j < arr.length; j++) {
                        console.log(arr[j]);
                    }
                } else {
                    console.log(arr);
                }
            }

        } catch (e) {
        }
    }
}

//#endregion 
///#source 1 1 /Scripts/modules/cookies.js
//#region cookies
//cookie ophalen obv de naam

function getCookieContent(cookieName) {
    /// <summary>Verkrijg de cookie via de naam.</summary>
    /// <param name="cookieName" type="String">naam van de cookie</param>
    /// <param name="onlyFirstValue" type="Boolean">alleen de eerste waarde returen?</param>
    /// <returns type="String">gehele content</returns>

    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookieValue = cookies[i];
        if (cookieValue) {

            var cookiename2 = cookieValue.split('=')[0];
            if (ltrim(cookiename2) == ltrim(cookieName)) {
                //pas de content na de eerste =

                return cookieValue.slice(cookieValue.indexOf("=") + 1);
            }
        }
    }
    return null;
}

function getCookieValues(cookieName) {
    /// <summary>Verkrijg cook</summary>
    /// <param name="cookieName" type="String">naam van de cookie</param>
    /// <returns type="Object">dict</returns>

    var content = getCookieContent(cookieName);
    var vars = destructQueryString(content);

    return vars;
}

function setCookieValues(cookieName, dict) {
    /// <summary>set een cookie met een dict die we omzetten naar een querystring</summary>
    /// <param name="cookieName" type="String">naam van de cookie</param>
    /// <param name="dict" type="Object">object met properties</param>

    var querystring = createQueryString(dict);
    setCookieContent(cookieName, querystring);

}

function setCookieContent(cookieName, content) {
    /// <summary>set een cookie met 1 waarde</summary>
    /// <param name="cookieName" type="String">naam van de cookie</param>
    var exdate = new Date(2050, 1, 1);
    var fullValue = content + "; expires=" + exdate.toUTCString() + "; path=/";

    document.cookie = cookieName + "=" + fullValue;
}

//#endregion
///#source 1 1 /Scripts/modules/url.js
//#region url

function splitVars(startSymbol, querystring) {

    var vars = destructQueryString(querystring, startSymbol);

    //voeg de retrieve functie toe;
    vars.retrieve = dictExt.retrieve;

    return vars;
}

function destructQueryString(querystring, startSymbol) {
    ///<summary>Zet querstrying om naar object</summary>
    ///<param name="startSymbol" type="String">optionele startsymbool. Indien leeg, dan niet spliten hierop</param>
    ///<returns type="Object">object met functie .retrieve en .add</returns>

    if (startSymbol && querystring) {
        //split eerst hierop
        querystring = querystring.slice(querystring.indexOf(startSymbol) + 1);
    }

    var vars = {};
    //voeg functies toe
    vars.add = dictExt.add;
    vars.retrieve = dictExt.retrieve;

    if (!querystring) {
        return vars;
    }


    var items = querystring.split('&');
    for (var i = 0; i < items.length; i++) {
        var item = items[i].split('=');
        var key = item[0];
        var val = item[1];
        if (key != null && key != "" && key.toLowerCase) {

            if (val == null) {
                val = null;
            } else {
                val = decodeURIComponent(val);
            }

            key = decodeURIComponent(key);
            vars.add(key, val);

        }
    }
    return vars;

}

function createQueryString(o) {
    ///<summary>Maak querystring van object, zonder de ?</summary>
    ///<param name="o" type="Object">object met properties</param>
    var arr = [];

    for (var key in o) {

        arr.push(encodeURIComponent(key) + "=" + encodeURIComponent(o[key]));
    }

    return arr.join("&");

}

function getQuerystringParameters() {
    /// <summary>Verkrijg alle parameters na de #</summary>
    ///<returns type="Object">object met functie .retrieve en .add</returns>
    return splitVars("?", window.location.search);
}

function getAllHashParameters() {
    /// <summary>Verkrijg alle parameters na de #</summary>
    ///<returns type="Object">object met functie .retrieve en .add</returns>

    return splitVars("#", window.location.hash);
}

function getAllUrlParameters() {
    /// <summary>Verkrijg alle querystring + hash</summary>
    /// <returns type="Object">object met functie .retrieve en .add</returns>

    var allQuerystringParameters = getQuerystringParameters();
    var allHashParameters = getAllHashParameters();

    var allUrlParameters = allQuerystringParameters;

    //voeg hash parameters toe met een # voor de key
    if (allHashParameters && allHashParameters.values) {
        for (var key in allHashParameters.values) {
            var value = allHashParameters.values[key];
            allUrlParameters.add("#" + key, value);
        }
    }
    return allUrlParameters;


}

//#endregion
///#source 1 1 /Scripts/modules/localstorage.js
//#region localstorage

function createLocalKey(key) {
    /// <summary>maak sleutel</summary>
    /// <param name="key" type="Object"></param>

    return _localStoragePrefix + "_" + encodeURIComponent(key.toString().toLowerCase());
}

function setLocal(key, stringValue) {
    /// <summary>sla op in localstorage</summary>
    /// <param name="key" type="Object"></param>
    /// <param name="stringValue" type="Object"></param>

    try {


        if (typeof (Storage) !== "undefined" && window.localStorage) {
            window.localStorage[createLocalKey(key)] = stringValue;

        }
    } catch (e) {
        error2(e);
    }
}


function setLocalValues(dict) {
    /// <param name="dict" type="Object">object met properties</param>
    //en localstorage
    for (var key in dict) {
        var val = dict[key];
        setLocal(key, val);

    }
}

function getLocal(key) {
    try {

        if (typeof (Storage) !== "undefined" && window.localStorage) {
            return window.localStorage[createLocalKey(key)];
        }
        return null;
    } catch (e) {
        error2(e);
        return null;
    }

}

//#endregion
///#source 1 1 /Scripts/modules/helpers.js



//#region storage helpers

//item die we gaan opslaan in de storage
var _storageQueue = {};

//#endregion

//#region dict/storage helpers

function filterNonEmpty(dict) {
    ///<returns type="Object">object (dict) zonder undefined/lege waardes</returns>
    if (!dict) return dict;
    var dict2 = {};
    for (var key in dict) {
        var value = dict[key];
        if (typeof value != "undefined" && value != null) {
            dict2[key] = value;
        }
    }
    return dict2;
}

function registerCookieQueue(key, value) {


    //onthoud in de dict om later op te slaan

    _storageQueue[key] = value;
}

var dictExt = {
    //toevoegen aan een dict, ofwel assoc array.
    //we zoeken het in de property .values
    retrieve: function (key) {
        ///<summary>Verkrijg item hoofdletterongevoelig</summary>
        ///<param name="callcack">func bij toevoegen. Krijg key en value mee.</param>
        if (key != null && key != "" && key.toLowerCase) {

            //hoofdletterongevoelig maken
            var key2 = key.toString().toLowerCase();

            //we slaan de values op in de values property. Anders kunnen values en functie overlappen (zoals 'add')
            if (typeof this.values == "undefined") {
                this.values = {};
            }

            var value = this.values[key2];


            return value;
        }
        return null;
    },
    add: function (key, value) {
        ///<summary>Voeg item toe</summary>

        //hoofdletterongevoelig maken
        var key2 = key.toString().toLowerCase();


        if (typeof this.values == "undefined") {
            this.values = {};
        }
        this.values[key2] = value;

    }
};

//#endregion

//#region helpers
function storeValues(o) {
    /// <summary>Store all values in cookie and localstorage. Filter de lege eruit</summary>
    /// <param name="o" type="Object">dict</param>
    var o2 = filterNonEmpty(o);
    setCookieValues(_storageCookieName, o2);
    setLocalValues(o2);
}

function ltrim(value) {
    /// <summary>Lefttrim, niet support door browsers</summary>
    /// <param name="value" type="String">waarde die we left trimmen</param>


    return value.replace(/^\s+/, "");
}

//tid waarde uit het 'google' cookie lezen

function getFromUtmvCookie(gaCustomKey) {
    /// <summary>haal uit GA cookue. Let op, key is customkey naar GA</summary>
    /// <param name="gaCustomKey" type="String">Custom1, etc</param>

    var utmvCookie = getCookieContent(' __utmv');

    if (utmvCookie) {
        var cookieValue = utmvCookie.split('|')[1];
        var cookieValues = cookieValue.split('^');

        for (var i = 0; i < cookieValues.length; i++) {
            var elem = cookieValues[i];
            var key = elem.split('=')[1];
            if (key.toLowerCase() == gaCustomKey.toLowerCase()) {
                return elem.split('=')[2];

            }
        }
    }

    return null; //anders

}

function okValue(tid) {
    return (tid && tid != "'");
}

var allUrlParameters = getAllUrlParameters();

//tid ophalen
//url, url hash, anders localstorage, anders cookie, anders google cooke
//bestaat deze niet (meer) in de uri en wel in het (vorige) google cookie, halen we deze uit het goole cookie

function getTid2() {
    var tid = getStoredVal("tid", true);
    if (okValue(tid)) {
        return tid;
    }
    return null;
}



function getFingerPrint3() {
    /// <summary>fingerprint, probeer eerst van local</summary> 
    try {
        var fi = getLocal("fingerprint31");
        if (fi && fi != "") {
            return fi;
        }
        else if (typeof fp3 == "function") {
            return fp3();
        } else {
            return null;
        }
    } catch (err) {
        return null;
    }
}

function getFingerPrint2() {
    /// <summary>fingerprint, probeer eerst van local</summary>
    return getFingerPrint3();
}

function getStoredVal(key, fromUrl, gaKey) {
    ///<summary>Verkrijg een opgeslagen waarde</summary>
    ///<param name="key">sleutel. Met #, dan uit #</param>
    ///<param name="fromUrl">zoeken we in de querystring?</param>
    ///<param name="fromHash">zoeken we in de url na de #?</param>
    ///<param name="gaKey">custom var naam in GA. Indien leeg, dan overnemen van key</param>
    var value;

    if (!gaKey) gaKey = key;
    if (fromUrl && allUrlParameters) {
        value = allUrlParameters.retrieve(key);
        if (okValue(value)) {
            return value;
        }
    }

    value = getLocal(key);
    if (okValue(value)) {
        return value;
    }

    var cookieVals = getCookieValues(_storageCookieName);
    value = cookieVals.retrieve(key);

    if (okValue(value)) {
        return value;
    }

    value = getFromUtmvCookie(gaKey);

    return value;

}

//#endregion
///#source 1 1 /Scripts/modules/send2univeral.js

//globale default, kan niet overrulen hier.
var globalDefault = 'none';

window.getFingerprint = function (defaultValue) {
    return getFingerPrint3(defaultValue);
}

window.getFingerprint3 = function (defaultValue) {
    /// <summary>
    /// Verkrijg fingerprint
    /// </summary>
    /// <param name="defaultValue">standaard waarde indien mislukt</param>
    /// <returns type=""></returns>
    var fingerprint3 = fp3();
    fingerprint3 = getValueHelper(fingerprint3, defaultValue);
    _storageQueue.fingerprint31 = fingerprint3;
    storeValues(_storageQueue);
    if (!releaseBuild) {
        log4("fingerprint3: " + fingerprint3);
    }
    return fingerprint3;
}

window.getTid = function(defaultValue) {
    var tid = getTid2();
    tid = getValueHelper(tid, defaultValue);
    _storageQueue.tid = tid;
    storeValues(_storageQueue);
    if (!releaseBuild) {
        log4("tid2: " + tid);
    }
    return tid;
}

function getValueHelper(val, defaultValue) {
    /// <param name="key" type="String">waarde. Indien lege string, dan default</param>
    /// <param name="defaultValue" type="Object">default, dit mage een lege string zijn/</param>
    if (!val) {
        //pak standaard defaultValue van windows
        if (defaultValue == "") {
            //speciale case voor lege string
            val = defaultValue;
        } else {
            val = defaultValue || globalDefault;
        }

    }
    return val;
}

window.getUrlValue = function (key, defaultValue, gaKey) {
    /// <summary>Ophalen</summary>
    /// <param name="key" type="String">waarde. Indien lege string, dan default</param>
    /// <param name="defaultValue" type="Object">default, dit mage een lege string zijn/</param>
    ///<param name="gaKey">voor oude GA cookie (niet universal)</param>
    
    var val = getStoredVal(key, true, gaKey);
    //we slaan op welke waardes we requested hebben voor de cookuie/localstorage

    //we slaan de default niet op, zo kunnen we default later wijzigen
    _storageQueue[key] = val;

    
    val = getValueHelper(val, defaultValue);

    if (!releaseBuild) {
        log4("get2 " + key + ": " + val);
    }

    storeValues(_storageQueue);

    return val;
};



///#source 1 1 /Scripts/modules/wrapAfter.js
//dit is bewust invalide JS
    } catch(e) {
        if (console && console.error) {
            console.error(e);
        }
    }


})();

