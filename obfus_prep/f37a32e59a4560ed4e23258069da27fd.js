ï»¿var llfp = '';
(function () {
    'use strict';
    var Llfp = function (options) {
        if (!(this instanceof Llfp)) {
            return new Llfp(options);
        }

        var defaultOptions = {
            sortPluginsFor: [/palemoon/i],
            excludeAudioIOS11: true
        };
        this.options = this.extend(options, defaultOptions);
        this.nativeForEach = Array.prototype.forEach;
        this.nativeMap = Array.prototype.map;
    };
    Llfp.prototype = {
        extend: function (source, target) {
            if (source === null) { return target; }
            for (var k in source) {
                if (source[k] !== null && target[k] !== source[k]) {
                    target[k] = source[k];
                }
            }
            return target;
        },
        get: function (done) {
            var that = this,
                keys = {
                    data: []
                };
            keys = this.uA(keys);
            keys = this.la(keys);
            keys = this.hC(keys);
            keys = this.tzo(keys);
            keys = this.tz(keys);
            keys = this.sS(keys);
            keys = this.lS(keys);
            keys = this.iDb(keys);
            keys = this.aB(keys);
            keys = this.oDb(keys);
            keys = this.cC(keys);
            keys = this.pf(keys);
            keys = this.pg(keys);
            keys = this.cvs(keys);
            keys = this.wGl(keys);
            keys = this.wVaR(keys);
            this.fnt(keys, function (keysWithFont) {
                that.ado(keysWithFont, function (newKeys) {
                    var values = [];
                    that.each(newKeys.data, function (pair) {
                        var value = pair.value;
                        if (value && typeof value.join === 'function') {
                            values.push(value.join(';'));
                        } else {
                            values.push(value);
                        }
                    });
                    var murmur = that.x64hash128(values.join('~~~'), 31);
                    return done(murmur, newKeys.data);
                });
            });
        },
        ado: function (keys, done) {
            if (this.options.excludeAudio) {
                return done(keys);
            }

            if (this.options.excludeAudioIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)) {
                return done(keys);
            }

            var AudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext;

            if (AudioContext === null || AudioContext === undefined) {
                keys.data.push({ key: 'audio_fp', value: null });
                return done(keys);
            }

            var context = new AudioContext(1, 44100, 44100);

            var oscillator = context.createOscillator();
            oscillator.type = 'triangle';
            oscillator.frequency.setValueAtTime(10000, context.currentTime);

            var compressor = context.createDynamicsCompressor();
            this.each([
                ['threshold', -50],
                ['knee', 40],
                ['ratio', 12],
                ['reduction', -20],
                ['attack', 0],
                ['release', 0.25]
            ], function (item) {
                if (compressor[item[0]] !== undefined && typeof compressor[item[0]].setValueAtTime === 'function') {
                    compressor[item[0]].setValueAtTime(item[1], context.currentTime);
                }
            });

            var oncompleteTimeout = setTimeout(function () {
                return done(keys);
            }, 1000);

            context.oncomplete = function (event) {
                clearTimeout(oncompleteTimeout);
                var fingerprint = event.renderedBuffer.getChannelData(0)
                    .slice(4500, 5000)
                    .reduce(function (acc, val) { return acc + Math.abs(val); }, 0)
                    .toString();
                oscillator.disconnect();
                compressor.disconnect();

                keys.data.push({ key: 'audio_fp', value: fingerprint });
                return done(keys);
            };

            oscillator.connect(compressor);
            compressor.connect(context.destination);
            oscillator.start(0);
            context.startRendering();
        },
        uA: function (keys) {
            var that = this;
            var ua = function () {
                var userAgent = navigator.userAgent.split('/'),
                    simpAgent = '';
                that.each(userAgent, function (ua1) {
                    var secondSplit = ua1.split(' ');
                    that.each(secondSplit, function (ua2) {
                        var parts = ua2.split('.');
                        if (parts.length > 2) {
                            simpAgent += parts[0] + '.' + parts[1] + ' ';
                        } else {
                            simpAgent += ua2 + ' ';
                        }
                    });
                });
                return simpAgent;
            };
            keys.data.push({ key: 'user_agent', value: ua() });
            return keys;
        },
        la: function (keys) {
            keys.data.push({ key: 'language', value: navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || '' });
            return keys;
        },
        tzo: function (keys) {
            keys.data.push({ key: 'timezone_offset', value: new Date().getTimezoneOffset() });
            return keys;
        },
        tz: function (keys) {
            var value = null;
            if (window.Intl && window.Intl.DateTimeFormat) {
                value = new window.Intl.DateTimeFormat().resolvedOptions().timeZone;
            }
            keys.data.push({ key: 'timezone', value: value });

            return keys;
        },
        sS: function (keys) {
            var hasSS = function () {
                try {
                    return !!window.sessionStorage;
                } catch (e) {
                    return true;
                }
            };
            if (hasSS()) {
                keys.data.push({ key: 'session_storage', value: 1 });
            }
            return keys;
        },
        lS: function (keys) {
            var hasLS = function () {
                try {
                    return !!window.localStorage;
                } catch (e) {
                    return true;
                }
            };
            if (hasLS()) {
                keys.data.push({ key: 'local_storage', value: 1 });
            }
            return keys;
        },
        iDb: function (keys) {
            var hasIDB = function () {
                try {
                    return !!window.indexedDB;
                } catch (e) {
                    return true;
                }
            };
            if (hasIDB()) {
                keys.data.push({ key: 'indexed_db', value: 1 });
            }
            return keys;
        },
        aB: function (keys) {
            if (document.body && document.body.addBehavior) {
                keys.data.push({ key: 'add_behavior', value: 1 });
            }
            return keys;
        },
        oDb: function (keys) {
            if (window.openDatabase) {
                keys.data.push({ key: 'open_database', value: 1 });
            }
            return keys;
        },
        cC: function (keys) {
            var cpuClass = function () {
                if (navigator.cpuClass) {
                    return navigator.cpuClass;
                } else {
                    return 'unknown';
                }
            };
            keys.data.push({ key: 'cpu_class', value: cpuClass() });
            return keys;
        },
        pf: function (keys) {
            var platform = function () {
                if (navigator.platform) {
                    return navigator.platform;
                } else {
                    return 'unknown';
                }
            };
            keys.data.push({ key: 'navigator_platform', value: platform() });
            return keys;
        },
        cvs: function (keys) {
            if (this.isCanvasSupported()) {
                keys.data.push({ key: 'canvas', value: this.getCanvasFp() });
            }
            return keys;
        },
        wGl: function (keys) {
            if (this.isWebGlSupported()) {
                keys.data.push({ key: 'webgl', value: this.getWebglFp() });
            }
            return keys;
        },
        wVaR: function (keys) {
            if (this.isWebGlSupported()) {
                keys.data.push({ key: 'webgl_vendor', value: this.getWebglVendorAndRenderer() });
            }
            return keys;
        },
        fnt: function (keys, done) {
            return this.jsFnt(keys, done);
        },
        jsFnt: function (keys, done) {
            return setTimeout(function () {
                var baseFonts = ['monospace', 'sans-serif', 'serif'],
                    fontList = [
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
                    ], testString = 'mmmmmmmmmmlli', testSize = '72px', h = document.getElementsByTagName('body')[0],
                    baseFontsDiv = document.createElement('div'), fontsDiv = document.createElement('div'), defaultWidth = {},
                    defaultHeight = {};

                var createSpan = function () {
                    var s = document.createElement('span');
                    s.style.position = 'absolute';
                    s.style.left = '-9999px';
                    s.style.fontSize = testSize;

                    s.style.fontStyle = 'normal';
                    s.style.fontWeight = 'normal';
                    s.style.letterSpacing = 'normal';
                    s.style.lineBreak = 'auto';
                    s.style.lineHeight = 'normal';
                    s.style.textTransform = 'none';
                    s.style.textAlign = 'left';
                    s.style.textDecoration = 'none';
                    s.style.textShadow = 'none';
                    s.style.whiteSpace = 'normal';
                    s.style.wordBreak = 'normal';
                    s.style.wordSpacing = 'normal';

                    s.innerHTML = testString;
                    return s;
                };

                var createSpanWithFonts = function (fontToDetect, baseFont) {
                    var s = createSpan();
                    s.style.fontFamily = "'" + fontToDetect + "'," + baseFont;
                    return s;
                };

                var initializeBaseFontsSpans = function () {
                    var spans = [];
                    for (var index = 0, length = baseFonts.length; index < length; index++) {
                        var s = createSpan();
                        s.style.fontFamily = baseFonts[index];
                        baseFontsDiv.appendChild(s);
                        spans.push(s);
                    }
                    return spans;
                };

                var initializeFontsSpans = function () {
                    var spans = {};
                    for (var i = 0, l = fontList.length; i < l; i++) {
                        var fontSpans = [];
                        for (var j = 0, numDefaultFonts = baseFonts.length; j < numDefaultFonts; j++) {
                            var s = createSpanWithFonts(fontList[i], baseFonts[j]);
                            fontsDiv.appendChild(s);
                            fontSpans.push(s);
                        }
                        spans[fontList[i]] = fontSpans;
                    }
                    return spans;
                };

                var isFontAvailable = function (fontSpans) {
                    var detected = false;
                    for (var i = 0; i < baseFonts.length; i++) {
                        detected = (fontSpans[i].offsetWidth !== defaultWidth[baseFonts[i]] || fontSpans[i].offsetHeight !== defaultHeight[baseFonts[i]]);
                        if (detected) {
                            return detected;
                        }
                    }
                    return detected;
                };

                var baseFontsSpans = initializeBaseFontsSpans();
                h.appendChild(baseFontsDiv);

                for (var index = 0, length = baseFonts.length; index < length; index++) {
                    defaultWidth[baseFonts[index]] = baseFontsSpans[index].offsetWidth;
                    defaultHeight[baseFonts[index]] = baseFontsSpans[index].offsetHeight;
                }

                var fontsSpans = initializeFontsSpans();
                h.appendChild(fontsDiv);

                var available = [];
                for (var i = 0, l = fontList.length; i < l; i++) {
                    if (isFontAvailable(fontsSpans[fontList[i]])) {
                        available.push(fontList[i]);
                    }
                }

                h.removeChild(fontsDiv);
                h.removeChild(baseFontsDiv);

                keys.data.push({ key: 'js_fonts', value: available });
                done(keys);
            }, 1);
        },
        pg: function (keys) {
            var isIE = function () {
                if (navigator.appName === 'Microsoft Internet Explorer') {
                    return true;
                } else if (navigator.appName === 'Netscape' && /Trident/.test(navigator.userAgent)) {
                    return true;
                }
                return false;
            };

            if (isIE()) {
                keys.data.push({ key: 'ie_plugins', value: null });
            } else {
                keys.data.push({ key: 'regular_plugins', value: this.getRegularPlugins() });
            }
            return keys;
        },
        getRegularPlugins: function () {
            var plugins = [];
            if (navigator.plugins) {
                for (var i = 0, l = navigator.plugins.length; i < l; i++) {
                    if (navigator.plugins[i]) { plugins.push(navigator.plugins[i]); }
                }
            }
            if (this.pluginsShouldBeSorted()) {
                plugins = plugins.sort(function (a, b) {
                    if (a.name > b.name) { return 1; }
                    if (a.name < b.name) { return -1; }
                    return 0;
                });
            }
            return this.map(plugins, function (p) {
                var mimeTypes = this.map(p, function (mt) {
                    return [mt.type, mt.suffixes].join('~');
                }).join(',');
                return [p.name, p.description, mimeTypes].join('::');
            }, this);
        },
        pluginsShouldBeSorted: function () {
            var should = false;
            for (var i = 0, l = this.options.sortPluginsFor.length; i < l; i++) {
                var re = this.options.sortPluginsFor[i];
                if (navigator.userAgent.match(re)) {
                    should = true;
                    break;
                }
            }
            return should;
        },
        hC: function (keys) {
            var hardwareConcurrency = function () {
                if (navigator.hardwareConcurrency) {
                    return navigator.hardwareConcurrency;
                }
                return 'unknown';
            };
            keys.data.push({ key: 'hardware_concurrency', value: hardwareConcurrency() });
            return keys;
        },
        getCanvasFp: function () {
            var result = [];

            var canvas = document.createElement('canvas');
            canvas.width = 2000;
            canvas.height = 200;
            canvas.style.display = 'inline';

            var ctx = canvas.getContext('2d');
            ctx.rect(0, 0, 10, 10);
            ctx.rect(2, 2, 6, 6);
            result.push('canvas winding:' + ((ctx.isPointInPath(5, 5, 'evenodd') === false) ? 'yes' : 'no'));

            ctx.textBaseline = 'alphabetic';
            ctx.fillStyle = '#f60';
            ctx.fillRect(125, 1, 62, 20);
            ctx.fillStyle = '#069';
            ctx.font = '11pt no-real-font-123';
            ctx.fillText('Cwm fjordbank glyphs vext quiz, \ud83d\ude03', 2, 15);
            ctx.fillStyle = 'rgba(102, 204, 0, 0.2)';
            ctx.font = '18pt Arial';
            ctx.fillText('Cwm fjordbank glyphs vext quiz, \ud83d\ude03', 4, 45);
            ctx.globalCompositeOperation = 'multiply';
            ctx.fillStyle = 'rgb(255,0,255)';
            ctx.beginPath();
            ctx.arc(50, 50, 50, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = 'rgb(0,255,255)';
            ctx.beginPath();
            ctx.arc(100, 50, 50, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = 'rgb(255,255,0)';
            ctx.beginPath();
            ctx.arc(75, 100, 50, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = 'rgb(255,0,255)';
            ctx.arc(75, 75, 75, 0, Math.PI * 2, true);
            ctx.arc(75, 75, 25, 0, Math.PI * 2, true);
            ctx.fill('evenodd');

            if (canvas.toDataURL) {
                result.push('canvas fp:' + canvas.toDataURL());
            }
            return result.join('~');
        },
        getWebglFp: function () {
            var gl;
            var fa2s = function (fa) {
                gl.clearColor(0.0, 0.0, 0.0, 1.0);
                gl.enable(gl.DEPTH_TEST);
                gl.depthFunc(gl.LEQUAL);
                gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
                return '[' + fa[0] + ', ' + fa[1] + ']';
            };
            var maxAnisotropy = function (gl) {
                var ext = gl.getExtension('EXT_texture_filter_anisotropic') || gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic') || gl.getExtension('MOZ_EXT_texture_filter_anisotropic');
                if (ext) {
                    var anisotropy = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                    if (anisotropy === 0) {
                        anisotropy = 2;
                    }
                    return anisotropy;
                } else {
                    return null;
                }
            };
            gl = this.getWebglCanvas();
            if (!gl) { return null; }

            var result = [];
            var vShaderTemplate = 'attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}';
            var fShaderTemplate = 'precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}';
            var vertexPosBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer);
            var vertices = new Float32Array([-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0]);
            gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
            vertexPosBuffer.itemSize = 3;
            vertexPosBuffer.numItems = 3;
            var program = gl.createProgram();
            var vshader = gl.createShader(gl.VERTEX_SHADER);
            gl.shaderSource(vshader, vShaderTemplate);
            gl.compileShader(vshader);
            var fshader = gl.createShader(gl.FRAGMENT_SHADER);
            gl.shaderSource(fshader, fShaderTemplate);
            gl.compileShader(fshader);
            gl.attachShader(program, vshader);
            gl.attachShader(program, fshader);
            gl.linkProgram(program);
            gl.useProgram(program);
            program.vertexPosAttrib = gl.getAttribLocation(program, 'attrVertex');
            program.offsetUniform = gl.getUniformLocation(program, 'uniformOffset');
            gl.enableVertexAttribArray(program.vertexPosArray);
            gl.vertexAttribPointer(program.vertexPosAttrib, vertexPosBuffer.itemSize, gl.FLOAT, !1, 0, 0);
            gl.uniform2f(program.offsetUniform, 1, 1);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexPosBuffer.numItems);
            try {
                result.push(gl.canvas.toDataURL());
            } catch (e) {/*do noting*/ }
            result.push('extensions:' + (gl.getSupportedExtensions() || []).join(';'));
            result.push('webgl aliased line width range:' + fa2s(gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE)));
            result.push('webgl aliased point size range:' + fa2s(gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)));
            result.push('webgl alpha bits:' + gl.getParameter(gl.ALPHA_BITS));
            result.push('webgl antialiasing:' + (gl.getContextAttributes().antialias ? 'yes' : 'no'));
            result.push('webgl blue bits:' + gl.getParameter(gl.BLUE_BITS));
            result.push('webgl depth bits:' + gl.getParameter(gl.DEPTH_BITS));
            result.push('webgl green bits:' + gl.getParameter(gl.GREEN_BITS));
            result.push('webgl max anisotropy:' + maxAnisotropy(gl));
            result.push('webgl max combined texture image units:' + gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS));
            result.push('webgl max cube map texture size:' + gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE));
            result.push('webgl max fragment uniform vectors:' + gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS));
            result.push('webgl max render buffer size:' + gl.getParameter(gl.MAX_RENDERBUFFER_SIZE));
            result.push('webgl max texture image units:' + gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS));
            result.push('webgl max texture size:' + gl.getParameter(gl.MAX_TEXTURE_SIZE));
            result.push('webgl max varying vectors:' + gl.getParameter(gl.MAX_VARYING_VECTORS));
            result.push('webgl max vertex attribs:' + gl.getParameter(gl.MAX_VERTEX_ATTRIBS));
            result.push('webgl max vertex texture image units:' + gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS));
            result.push('webgl max vertex uniform vectors:' + gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS));
            result.push('webgl max viewport dims:' + fa2s(gl.getParameter(gl.MAX_VIEWPORT_DIMS)));
            result.push('webgl red bits:' + gl.getParameter(gl.RED_BITS));
            result.push('webgl renderer:' + gl.getParameter(gl.RENDERER));
            result.push('webgl shading language version:' + gl.getParameter(gl.SHADING_LANGUAGE_VERSION));
            result.push('webgl stencil bits:' + gl.getParameter(gl.STENCIL_BITS));
            result.push('webgl vendor:' + gl.getParameter(gl.VENDOR));
            result.push('webgl version:' + gl.getParameter(gl.VERSION));

            try {
                var extensionDebugRendererInfo = gl.getExtension('WEBGL_debug_renderer_info');
                if (extensionDebugRendererInfo) {
                    result.push('webgl unmasked vendor:' + gl.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL));
                    result.push('webgl unmasked renderer:' + gl.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL));
                }
            } catch (e) { /* squelch */ }

            if (!gl.getShaderPrecisionFormat) {
                return result.join('~');
            }

            var that = this;

            that.each(['FLOAT', 'INT'], function (numType) {
                that.each(['VERTEX', 'FRAGMENT'], function (shader) {
                    that.each(['HIGH', 'MEDIUM', 'LOW'], function (numSize) {
                        that.each(['precision', 'rangeMin', 'rangeMax'], function (key) {
                            var format = gl.getShaderPrecisionFormat(gl[shader + '_SHADER'], gl[numSize + '_' + numType])[key];
                            if (key !== 'precision') {
                                key = 'precision ' + key;
                            }
                            var line = ['webgl ', shader.toLowerCase(), ' shader ', numSize.toLowerCase(), ' ', numType.toLowerCase(), ' ', key, ':', format];
                            result.push(line.join(''));
                        });
                    });
                });
            });
            return result.join('~');
        },
        getWebglVendorAndRenderer: function () {
            try {
                var glContext = this.getWebglCanvas();
                var extensionDebugRendererInfo = glContext.getExtension('WEBGL_debug_renderer_info');
                return glContext.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL) + '~' + glContext.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL);
            } catch (e) {
                return null;
            }
        },
        isCanvasSupported: function () {
            var elem = document.createElement('canvas');
            return !!(elem.getContext && elem.getContext('2d'));
        },
        isWebGlSupported: function () {
            if (!this.isCanvasSupported()) {
                return false;
            }

            var glContext = this.getWebglCanvas();
            return !!window.WebGLRenderingContext && !!glContext;
        },
        getWebglCanvas: function () {
            var canvas = document.createElement('canvas');
            var gl = null;
            try {
                gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            } catch (e) { /* squelch */ }
            if (!gl) { gl = null; }
            return gl;
        },
        each: function (obj, iterator, context) {
            if (obj === null) {
                return;
            }
            if (this.nativeForEach && obj.forEach === this.nativeForEach) {
                obj.forEach(iterator, context);
            } else if (obj.length === +obj.length) {
                for (var i = 0, l = obj.length; i < l; i++) {
                    if (iterator.call(context, obj[i], i, obj) === {}) { return; }
                }
            } else {
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        if (iterator.call(context, obj[key], key, obj) === {}) { return; }
                    }
                }
            }
        },
        map: function (obj, iterator, context) {
            var results = [];
            if (obj === null) { return results; }
            if (this.nativeMap && obj.map === this.nativeMap) { return obj.map(iterator, context); }
            this.each(obj, function (value, index, list) {
                results[results.length] = iterator.call(context, value, index, list);
            });
            return results;
        },

        x64Add: function (m, n) {
            m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];
            n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];
            var o = [0, 0, 0, 0];
            o[3] += m[3] + n[3];
            o[2] += o[3] >>> 16;
            o[3] &= 0xffff;
            o[2] += m[2] + n[2];
            o[1] += o[2] >>> 16;
            o[2] &= 0xffff;
            o[1] += m[1] + n[1];
            o[0] += o[1] >>> 16;
            o[1] &= 0xffff;
            o[0] += m[0] + n[0];
            o[0] &= 0xffff;
            return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]];
        },

        x64Multiply: function (m, n) {
            m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];
            n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];
            var o = [0, 0, 0, 0];
            o[3] += m[3] * n[3];
            o[2] += o[3] >>> 16;
            o[3] &= 0xffff;
            o[2] += m[2] * n[3];
            o[1] += o[2] >>> 16;
            o[2] &= 0xffff;
            o[2] += m[3] * n[2];
            o[1] += o[2] >>> 16;
            o[2] &= 0xffff;
            o[1] += m[1] * n[3];
            o[0] += o[1] >>> 16;
            o[1] &= 0xffff;
            o[1] += m[2] * n[2];
            o[0] += o[1] >>> 16;
            o[1] &= 0xffff;
            o[1] += m[3] * n[1];
            o[0] += o[1] >>> 16;
            o[1] &= 0xffff;
            o[0] += (m[0] * n[3]) + (m[1] * n[2]) + (m[2] * n[1]) + (m[3] * n[0]);
            o[0] &= 0xffff;
            return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]];
        },
        x64Rotl: function (m, n) {
            n %= 64;
            if (n === 32) {
                return [m[1], m[0]];
            } else if (n < 32) {
                return [(m[0] << n) | (m[1] >>> (32 - n)), (m[1] << n) | (m[0] >>> (32 - n))];
            } else {
                n -= 32;
                return [(m[1] << n) | (m[0] >>> (32 - n)), (m[0] << n) | (m[1] >>> (32 - n))];
            }
        },
        x64LeftShift: function (m, n) {
            n %= 64;
            if (n === 0) {
                return m;
            } else if (n < 32) {
                return [(m[0] << n) | (m[1] >>> (32 - n)), m[1] << n];
            } else {
                return [m[1] << (n - 32), 0];
            }
        },
        x64Xor: function (m, n) {
            return [m[0] ^ n[0], m[1] ^ n[1]];
        },
        x64Fmix: function (h) {
            h = this.x64Xor(h, [0, h[0] >>> 1]);
            h = this.x64Multiply(h, [0xff51afd7, 0xed558ccd]);
            h = this.x64Xor(h, [0, h[0] >>> 1]);
            h = this.x64Multiply(h, [0xc4ceb9fe, 0x1a85ec53]);
            h = this.x64Xor(h, [0, h[0] >>> 1]);
            return h;
        },
        x64hash128: function (key, seed) {
            key = key || '';
            seed = seed || 0;
            var remainder = key.length % 16;
            var bytes = key.length - remainder;
            var h1 = [0, seed];
            var h2 = [0, seed];
            var k1 = [0, 0];
            var k2 = [0, 0];
            var c1 = [0x87c37b91, 0x114253d5];
            var c2 = [0x4cf5ad43, 0x2745937f];
            for (var i = 0; i < bytes; i = i + 16) {
                k1 = [((key.charCodeAt(i + 4) & 0xff)) | ((key.charCodeAt(i + 5) & 0xff) << 8) | ((key.charCodeAt(i + 6) & 0xff) << 16) | ((key.charCodeAt(i + 7) & 0xff) << 24), ((key.charCodeAt(i) & 0xff)) | ((key.charCodeAt(i + 1) & 0xff) << 8) | ((key.charCodeAt(i + 2) & 0xff) << 16) | ((key.charCodeAt(i + 3) & 0xff) << 24)];
                k2 = [((key.charCodeAt(i + 12) & 0xff)) | ((key.charCodeAt(i + 13) & 0xff) << 8) | ((key.charCodeAt(i + 14) & 0xff) << 16) | ((key.charCodeAt(i + 15) & 0xff) << 24), ((key.charCodeAt(i + 8) & 0xff)) | ((key.charCodeAt(i + 9) & 0xff) << 8) | ((key.charCodeAt(i + 10) & 0xff) << 16) | ((key.charCodeAt(i + 11) & 0xff) << 24)];
                k1 = this.x64Multiply(k1, c1);
                k1 = this.x64Rotl(k1, 31);
                k1 = this.x64Multiply(k1, c2);
                h1 = this.x64Xor(h1, k1);
                h1 = this.x64Rotl(h1, 27);
                h1 = this.x64Add(h1, h2);
                h1 = this.x64Add(this.x64Multiply(h1, [0, 5]), [0, 0x52dce729]);
                k2 = this.x64Multiply(k2, c2);
                k2 = this.x64Rotl(k2, 33);
                k2 = this.x64Multiply(k2, c1);
                h2 = this.x64Xor(h2, k2);
                h2 = this.x64Rotl(h2, 31);
                h2 = this.x64Add(h2, h1);
                h2 = this.x64Add(this.x64Multiply(h2, [0, 5]), [0, 0x38495ab5]);
            }
            k1 = [0, 0];
            k2 = [0, 0];
            switch (remainder) {
                case 15:
                    k2 = this.x64Xor(k2, this.x64LeftShift([0, key.charCodeAt(i + 14)], 48));
                // fallthrough
                case 14:
                    k2 = this.x64Xor(k2, this.x64LeftShift([0, key.charCodeAt(i + 13)], 40));
                // fallthrough
                case 13:
                    k2 = this.x64Xor(k2, this.x64LeftShift([0, key.charCodeAt(i + 12)], 32));
                // fallthrough
                case 12:
                    k2 = this.x64Xor(k2, this.x64LeftShift([0, key.charCodeAt(i + 11)], 24));
                // fallthrough
                case 11:
                    k2 = this.x64Xor(k2, this.x64LeftShift([0, key.charCodeAt(i + 10)], 16));
                // fallthrough
                case 10:
                    k2 = this.x64Xor(k2, this.x64LeftShift([0, key.charCodeAt(i + 9)], 8));
                // fallthrough
                case 9:
                    k2 = this.x64Xor(k2, [0, key.charCodeAt(i + 8)]);
                    k2 = this.x64Multiply(k2, c2);
                    k2 = this.x64Rotl(k2, 33);
                    k2 = this.x64Multiply(k2, c1);
                    h2 = this.x64Xor(h2, k2);
                // fallthrough
                case 8:
                    k1 = this.x64Xor(k1, this.x64LeftShift([0, key.charCodeAt(i + 7)], 56));
                // fallthrough
                case 7:
                    k1 = this.x64Xor(k1, this.x64LeftShift([0, key.charCodeAt(i + 6)], 48));
                // fallthrough
                case 6:
                    k1 = this.x64Xor(k1, this.x64LeftShift([0, key.charCodeAt(i + 5)], 40));
                // fallthrough
                case 5:
                    k1 = this.x64Xor(k1, this.x64LeftShift([0, key.charCodeAt(i + 4)], 32));
                // fallthrough
                case 4:
                    k1 = this.x64Xor(k1, this.x64LeftShift([0, key.charCodeAt(i + 3)], 24));
                // fallthrough
                case 3:
                    k1 = this.x64Xor(k1, this.x64LeftShift([0, key.charCodeAt(i + 2)], 16));
                // fallthrough
                case 2:
                    k1 = this.x64Xor(k1, this.x64LeftShift([0, key.charCodeAt(i + 1)], 8));
                // fallthrough
                case 1:
                    k1 = this.x64Xor(k1, [0, key.charCodeAt(i)]);
                    k1 = this.x64Multiply(k1, c1);
                    k1 = this.x64Rotl(k1, 31);
                    k1 = this.x64Multiply(k1, c2);
                    h1 = this.x64Xor(h1, k1);
                // fallthrough
            }
            h1 = this.x64Xor(h1, [0, key.length]);
            h2 = this.x64Xor(h2, [0, key.length]);
            h1 = this.x64Add(h1, h2);
            h2 = this.x64Add(h2, h1);
            h1 = this.x64Fmix(h1);
            h2 = this.x64Fmix(h2);
            h1 = this.x64Add(h1, h2);
            h2 = this.x64Add(h2, h1);
            return ('00000000' + (h1[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (h1[1] >>> 0).toString(16)).slice(-8) + ('00000000' + (h2[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (h2[1] >>> 0).toString(16)).slice(-8);
        }
    };

    setTimeout(function () {
        Llfp().get(function (fp, components) {
            llfp = fp; // for forms scripts
            //console.log(fp);
            var trackingEndpointUrl = 'https://lltrck.com/api/tracking',
                pageHit = {
                    accountId: window.sf14gv !== undefined ? sf14gv : window.tl813v !== undefined ? tl813v : llactid, //sf14gv is passed from user code; this is for legacy compatablity.
                    page: location.href,
                    referer: document.referrer || '',
                    fp: fp
                }, serialize = function (obj) {
                    var str = [];
                    for (var p in obj)
                        if (obj.hasOwnProperty(p)) {
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        }
                    return str.join("&");
                };
            var image = new Image();
            image.src = trackingEndpointUrl + '?' + serialize(pageHit);
        });
    }, 75);
})();