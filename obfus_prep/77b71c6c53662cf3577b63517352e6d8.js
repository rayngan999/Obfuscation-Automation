;(function() {
    !function(e,t,r){"use strict";"function"==typeof window.define&&window.define.amd?window.define(r):"undefined"!=typeof module&&module.exports?module.exports=r():t.exports?t.exports=r():t.Fingerprint2=r()}(0,this,function(){"use strict";var e=function(t){if(!(this instanceof e))return new e(t);this.options=this.extend(t,{swfContainerId:"fingerprintjs2",swfPath:"flash/compiled/FontList.swf",detectScreenOrientation:!0,sortPluginsFor:[/palemoon/i],userDefinedFonts:[],excludeDoNotTrack:!0,excludePixelRatio:!0}),this.nativeForEach=Array.prototype.forEach,this.nativeMap=Array.prototype.map};return e.prototype={extend:function(e,t){if(null==e)return t;for(var r in e)null!=e[r]&&t[r]!==e[r]&&(t[r]=e[r]);return t},get:function(e){var t=this,r={data:[],addPreprocessedComponent:function(e){var n=e.value;"function"==typeof t.options.preprocessor&&(n=t.options.preprocessor(e.key,n)),r.data.push({key:e.key,value:n})}};r=this.userAgentKey(r),r=this.languageKey(r),r=this.colorDepthKey(r),r=this.deviceMemoryKey(r),r=this.pixelRatioKey(r),r=this.hardwareConcurrencyKey(r),r=this.screenResolutionKey(r),r=this.availableScreenResolutionKey(r),r=this.timezoneOffsetKey(r),r=this.sessionStorageKey(r),r=this.localStorageKey(r),r=this.indexedDbKey(r),r=this.addBehaviorKey(r),r=this.openDatabaseKey(r),r=this.cpuClassKey(r),r=this.platformKey(r),r=this.doNotTrackKey(r),r=this.pluginsKey(r),r=this.canvasKey(r),r=this.webglKey(r),r=this.webglVendorAndRendererKey(r),r=this.adBlockKey(r),r=this.hasLiedLanguagesKey(r),r=this.hasLiedResolutionKey(r),r=this.hasLiedOsKey(r),r=this.hasLiedBrowserKey(r),r=this.touchSupportKey(r),r=this.customEntropyFunction(r),this.fontsKey(r,function(r){var n=[];t.each(r.data,function(e){var t=e.value;t&&"function"==typeof t.join&&(t=t.join(";")),n.push(t)});var i=t.x64hash128(n.join("~~~"),31);return e(i,r.data)})},customEntropyFunction:function(e){return"function"==typeof this.options.customFunction&&e.addPreprocessedComponent({key:"custom",value:this.options.customFunction()}),e},userAgentKey:function(e){return this.options.excludeUserAgent||e.addPreprocessedComponent({key:"user_agent",value:this.getUserAgent()}),e},getUserAgent:function(){return navigator.userAgent},languageKey:function(e){return this.options.excludeLanguage||e.addPreprocessedComponent({key:"language",value:navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage||""}),e},colorDepthKey:function(e){return this.options.excludeColorDepth||e.addPreprocessedComponent({key:"color_depth",value:window.screen.colorDepth||-1}),e},deviceMemoryKey:function(e){return this.options.excludeDeviceMemory||e.addPreprocessedComponent({key:"device_memory",value:this.getDeviceMemory()}),e},getDeviceMemory:function(){return navigator.deviceMemory||-1},pixelRatioKey:function(e){return this.options.excludePixelRatio||e.addPreprocessedComponent({key:"pixel_ratio",value:this.getPixelRatio()}),e},getPixelRatio:function(){return window.devicePixelRatio||""},screenResolutionKey:function(e){return this.options.excludeScreenResolution?e:this.getScreenResolution(e)},getScreenResolution:function(e){var t;return t=this.options.detectScreenOrientation&&window.screen.height>window.screen.width?[window.screen.height,window.screen.width]:[window.screen.width,window.screen.height],e.addPreprocessedComponent({key:"resolution",value:t}),e},availableScreenResolutionKey:function(e){return this.options.excludeAvailableScreenResolution?e:this.getAvailableScreenResolution(e)},getAvailableScreenResolution:function(e){var t;return window.screen.availWidth&&window.screen.availHeight&&(t=this.options.detectScreenOrientation?window.screen.availHeight>window.screen.availWidth?[window.screen.availHeight,window.screen.availWidth]:[window.screen.availWidth,window.screen.availHeight]:[window.screen.availHeight,window.screen.availWidth]),void 0!==t&&e.addPreprocessedComponent({key:"available_resolution",value:t}),e},timezoneOffsetKey:function(e){return this.options.excludeTimezoneOffset||e.addPreprocessedComponent({key:"timezone_offset",value:(new Date).getTimezoneOffset()}),e},sessionStorageKey:function(e){return!this.options.excludeSessionStorage&&this.hasSessionStorage()&&e.addPreprocessedComponent({key:"session_storage",value:1}),e},localStorageKey:function(e){return!this.options.excludeSessionStorage&&this.hasLocalStorage()&&e.addPreprocessedComponent({key:"local_storage",value:1}),e},indexedDbKey:function(e){return!this.options.excludeIndexedDB&&this.hasIndexedDB()&&e.addPreprocessedComponent({key:"indexed_db",value:1}),e},addBehaviorKey:function(e){return!this.options.excludeAddBehavior&&document.body&&document.body.addBehavior&&e.addPreprocessedComponent({key:"add_behavior",value:1}),e},openDatabaseKey:function(e){return!this.options.excludeOpenDatabase&&window.openDatabase&&e.addPreprocessedComponent({key:"open_database",value:1}),e},cpuClassKey:function(e){return this.options.excludeCpuClass||e.addPreprocessedComponent({key:"cpu_class",value:this.getNavigatorCpuClass()}),e},platformKey:function(e){return this.options.excludePlatform||e.addPreprocessedComponent({key:"navigator_platform",value:this.getNavigatorPlatform()}),e},doNotTrackKey:function(e){return this.options.excludeDoNotTrack||e.addPreprocessedComponent({key:"do_not_track",value:this.getDoNotTrack()}),e},canvasKey:function(e){return!this.options.excludeCanvas&&this.isCanvasSupported()&&e.addPreprocessedComponent({key:"canvas",value:this.getCanvasFp()}),e},webglKey:function(e){return!this.options.excludeWebGL&&this.isWebGlSupported()&&e.addPreprocessedComponent({key:"webgl",value:this.getWebglFp()}),e},webglVendorAndRendererKey:function(e){return!this.options.excludeWebGLVendorAndRenderer&&this.isWebGlSupported()&&e.addPreprocessedComponent({key:"webgl_vendor",value:this.getWebglVendorAndRenderer()}),e},adBlockKey:function(e){return this.options.excludeAdBlock||e.addPreprocessedComponent({key:"adblock",value:this.getAdBlock()}),e},hasLiedLanguagesKey:function(e){return this.options.excludeHasLiedLanguages||e.addPreprocessedComponent({key:"has_lied_languages",value:this.getHasLiedLanguages()}),e},hasLiedResolutionKey:function(e){return this.options.excludeHasLiedResolution||e.addPreprocessedComponent({key:"has_lied_resolution",value:this.getHasLiedResolution()}),e},hasLiedOsKey:function(e){return this.options.excludeHasLiedOs||e.addPreprocessedComponent({key:"has_lied_os",value:this.getHasLiedOs()}),e},hasLiedBrowserKey:function(e){return this.options.excludeHasLiedBrowser||e.addPreprocessedComponent({key:"has_lied_browser",value:this.getHasLiedBrowser()}),e},fontsKey:function(e,t){return this.options.excludeJsFonts?this.flashFontsKey(e,t):this.jsFontsKey(e,t)},flashFontsKey:function(e,t){return this.options.excludeFlashFonts?t(e):this.hasSwfObjectLoaded()&&this.hasMinFlashInstalled()?void 0===this.options.swfPath?t(e):void this.loadSwfAndDetectFonts(function(r){e.addPreprocessedComponent({key:"swf_fonts",value:r.join(";")}),t(e)}):t(e)},jsFontsKey:function(e,t){var r=this;return setTimeout(function(){var n=["monospace","sans-serif","serif"],i=["Andale Mono","Arial","Arial Black","Arial Hebrew","Arial MT","Arial Narrow","Arial Rounded MT Bold","Arial Unicode MS","Bitstream Vera Sans Mono","Book Antiqua","Bookman Old Style","Calibri","Cambria","Cambria Math","Century","Century Gothic","Century Schoolbook","Comic Sans","Comic Sans MS","Consolas","Courier","Courier New","Geneva","Georgia","Helvetica","Helvetica Neue","Impact","Lucida Bright","Lucida Calligraphy","Lucida Console","Lucida Fax","LUCIDA GRANDE","Lucida Handwriting","Lucida Sans","Lucida Sans Typewriter","Lucida Sans Unicode","Microsoft Sans Serif","Monaco","Monotype Corsiva","MS Gothic","MS Outlook","MS PGothic","MS Reference Sans Serif","MS Sans Serif","MS Serif","MYRIAD","MYRIAD PRO","Palatino","Palatino Linotype","Segoe Print","Segoe Script","Segoe UI","Segoe UI Light","Segoe UI Semibold","Segoe UI Symbol","Tahoma","Times","Times New Roman","Times New Roman PS","Trebuchet MS","Verdana","Wingdings","Wingdings 2","Wingdings 3"];r.options.extendedJsFonts&&(i=i.concat(["Abadi MT Condensed Light","Academy Engraved LET","ADOBE CASLON PRO","Adobe Garamond","ADOBE GARAMOND PRO","Agency FB","Aharoni","Albertus Extra Bold","Albertus Medium","Algerian","Amazone BT","American Typewriter","American Typewriter Condensed","AmerType Md BT","Andalus","Angsana New","AngsanaUPC","Antique Olive","Aparajita","Apple Chancery","Apple Color Emoji","Apple SD Gothic Neo","Arabic Typesetting","ARCHER","ARNO PRO","Arrus BT","Aurora Cn BT","AvantGarde Bk BT","AvantGarde Md BT","AVENIR","Ayuthaya","Bandy","Bangla Sangam MN","Bank Gothic","BankGothic Md BT","Baskerville","Baskerville Old Face","Batang","BatangChe","Bauer Bodoni","Bauhaus 93","Bazooka","Bell MT","Bembo","Benguiat Bk BT","Berlin Sans FB","Berlin Sans FB Demi","Bernard MT Condensed","BernhardFashion BT","BernhardMod BT","Big Caslon","BinnerD","Blackadder ITC","BlairMdITC TT","Bodoni 72","Bodoni 72 Oldstyle","Bodoni 72 Smallcaps","Bodoni MT","Bodoni MT Black","Bodoni MT Condensed","Bodoni MT Poster Compressed","Bookshelf Symbol 7","Boulder","Bradley Hand","Bradley Hand ITC","Bremen Bd BT","Britannic Bold","Broadway","Browallia New","BrowalliaUPC","Brush Script MT","Californian FB","Calisto MT","Calligrapher","Candara","CaslonOpnface BT","Castellar","Centaur","Cezanne","CG Omega","CG Times","Chalkboard","Chalkboard SE","Chalkduster","Charlesworth","Charter Bd BT","Charter BT","Chaucer","ChelthmITC Bk BT","Chiller","Clarendon","Clarendon Condensed","CloisterBlack BT","Cochin","Colonna MT","Constantia","Cooper Black","Copperplate","Copperplate Gothic","Copperplate Gothic Bold","Copperplate Gothic Light","CopperplGoth Bd BT","Corbel","Cordia New","CordiaUPC","Cornerstone","Coronet","Cuckoo","Curlz MT","DaunPenh","Dauphin","David","DB LCD Temp","DELICIOUS","Denmark","DFKai-SB","Didot","DilleniaUPC","DIN","DokChampa","Dotum","DotumChe","Ebrima","Edwardian Script ITC","Elephant","English 111 Vivace BT","Engravers MT","EngraversGothic BT","Eras Bold ITC","Eras Demi ITC","Eras Light ITC","Eras Medium ITC","EucrosiaUPC","Euphemia","Euphemia UCAS","EUROSTILE","Exotc350 Bd BT","FangSong","Felix Titling","Fixedsys","FONTIN","Footlight MT Light","Forte","FrankRuehl","Fransiscan","Freefrm721 Blk BT","FreesiaUPC","Freestyle Script","French Script MT","FrnkGothITC Bk BT","Fruitger","FRUTIGER","Futura","Futura Bk BT","Futura Lt BT","Futura Md BT","Futura ZBlk BT","FuturaBlack BT","Gabriola","Galliard BT","Gautami","Geeza Pro","Geometr231 BT","Geometr231 Hv BT","Geometr231 Lt BT","GeoSlab 703 Lt BT","GeoSlab 703 XBd BT","Gigi","Gill Sans","Gill Sans MT","Gill Sans MT Condensed","Gill Sans MT Ext Condensed Bold","Gill Sans Ultra Bold","Gill Sans Ultra Bold Condensed","Gisha","Gloucester MT Extra Condensed","GOTHAM","GOTHAM BOLD","Goudy Old Style","Goudy Stout","GoudyHandtooled BT","GoudyOLSt BT","Gujarati Sangam MN","Gulim","GulimChe","Gungsuh","GungsuhChe","Gurmukhi MN","Haettenschweiler","Harlow Solid Italic","Harrington","Heather","Heiti SC","Heiti TC","HELV","Herald","High Tower Text","Hiragino Kaku Gothic ProN","Hiragino Mincho ProN","Hoefler Text","Humanst 521 Cn BT","Humanst521 BT","Humanst521 Lt BT","Imprint MT Shadow","Incised901 Bd BT","Incised901 BT","Incised901 Lt BT","INCONSOLATA","Informal Roman","Informal011 BT","INTERSTATE","IrisUPC","Iskoola Pota","JasmineUPC","Jazz LET","Jenson","Jester","Jokerman","Juice ITC","Kabel Bk BT","Kabel Ult BT","Kailasa","KaiTi","Kalinga","Kannada Sangam MN","Kartika","Kaufmann Bd BT","Kaufmann BT","Khmer UI","KodchiangUPC","Kokila","Korinna BT","Kristen ITC","Krungthep","Kunstler Script","Lao UI","Latha","Leelawadee","Letter Gothic","Levenim MT","LilyUPC","Lithograph","Lithograph Light","Long Island","Lydian BT","Magneto","Maiandra GD","Malayalam Sangam MN","Malgun Gothic","Mangal","Marigold","Marion","Marker Felt","Market","Marlett","Matisse ITC","Matura MT Script Capitals","Meiryo","Meiryo UI","Microsoft Himalaya","Microsoft JhengHei","Microsoft New Tai Lue","Microsoft PhagsPa","Microsoft Tai Le","Microsoft Uighur","Microsoft YaHei","Microsoft Yi Baiti","MingLiU","MingLiU_HKSCS","MingLiU_HKSCS-ExtB","MingLiU-ExtB","Minion","Minion Pro","Miriam","Miriam Fixed","Mistral","Modern","Modern No. 20","Mona Lisa Solid ITC TT","Mongolian Baiti","MONO","MoolBoran","Mrs Eaves","MS LineDraw","MS Mincho","MS PMincho","MS Reference Specialty","MS UI Gothic","MT Extra","MUSEO","MV Boli","Nadeem","Narkisim","NEVIS","News Gothic","News GothicMT","NewsGoth BT","Niagara Engraved","Niagara Solid","Noteworthy","NSimSun","Nyala","OCR A Extended","Old Century","Old English Text MT","Onyx","Onyx BT","OPTIMA","Oriya Sangam MN","OSAKA","OzHandicraft BT","Palace Script MT","Papyrus","Parchment","Party LET","Pegasus","Perpetua","Perpetua Titling MT","PetitaBold","Pickwick","Plantagenet Cherokee","Playbill","PMingLiU","PMingLiU-ExtB","Poor Richard","Poster","PosterBodoni BT","PRINCETOWN LET","Pristina","PTBarnum BT","Pythagoras","Raavi","Rage Italic","Ravie","Ribbon131 Bd BT","Rockwell","Rockwell Condensed","Rockwell Extra Bold","Rod","Roman","Sakkal Majalla","Santa Fe LET","Savoye LET","Sceptre","Script","Script MT Bold","SCRIPTINA","Serifa","Serifa BT","Serifa Th BT","ShelleyVolante BT","Sherwood","Shonar Bangla","Showcard Gothic","Shruti","Signboard","SILKSCREEN","SimHei","Simplified Arabic","Simplified Arabic Fixed","SimSun","SimSun-ExtB","Sinhala Sangam MN","Sketch Rockwell","Skia","Small Fonts","Snap ITC","Snell Roundhand","Socket","Souvenir Lt BT","Staccato222 BT","Steamer","Stencil","Storybook","Styllo","Subway","Swis721 BlkEx BT","Swiss911 XCm BT","Sylfaen","Synchro LET","System","Tamil Sangam MN","Technical","Teletype","Telugu Sangam MN","Tempus Sans ITC","Terminal","Thonburi","Traditional Arabic","Trajan","TRAJAN PRO","Tristan","Tubular","Tunga","Tw Cen MT","Tw Cen MT Condensed","Tw Cen MT Condensed Extra Bold","TypoUpright BT","Unicorn","Univers","Univers CE 55 Medium","Univers Condensed","Utsaah","Vagabond","Vani","Vijaya","Viner Hand ITC","VisualUI","Vivaldi","Vladimir Script","Vrinda","Westminster","WHITNEY","Wide Latin","ZapfEllipt BT","ZapfHumnst BT","ZapfHumnst Dm BT","Zapfino","Zurich BlkEx BT","Zurich Ex BT","ZWAdobeF"])),i=(i=i.concat(r.options.userDefinedFonts)).filter(function(e,t){return i.indexOf(e)===t});var a=document.getElementsByTagName("body")[0],o=document.createElement("div"),s=document.createElement("div"),l={},d={},h=function(){var e=document.createElement("span");return e.style.position="absolute",e.style.left="-9999px",e.style.fontSize="72px",e.style.fontStyle="normal",e.style.fontWeight="normal",e.style.letterSpacing="normal",e.style.lineBreak="auto",e.style.lineHeight="normal",e.style.textTransform="none",e.style.textAlign="left",e.style.textDecoration="none",e.style.textShadow="none",e.style.whiteSpace="normal",e.style.wordBreak="normal",e.style.wordSpacing="normal",e.innerHTML="mmmmmmmmmmlli",e},c=function(e){for(var t=!1,r=0;r<n.length;r++)if(t=e[r].offsetWidth!==l[n[r]]||e[r].offsetHeight!==d[n[r]])return t;return t},u=function(){for(var e=[],t=0,r=n.length;t<r;t++){var i=h();i.style.fontFamily=n[t],o.appendChild(i),e.push(i)}return e}();a.appendChild(o);for(var g=0,p=n.length;g<p;g++)l[n[g]]=u[g].offsetWidth,d[n[g]]=u[g].offsetHeight;var m=function(){for(var e,t,r,a={},o=0,l=i.length;o<l;o++){for(var d=[],c=0,u=n.length;c<u;c++){var g=(e=i[o],t=n[c],r=void 0,(r=h()).style.fontFamily="'"+e+"',"+t,r);s.appendChild(g),d.push(g)}a[i[o]]=d}return a}();a.appendChild(s);for(var f=[],S=0,T=i.length;S<T;S++)c(m[i[S]])&&f.push(i[S]);a.removeChild(s),a.removeChild(o),e.addPreprocessedComponent({key:"js_fonts",value:f}),t(e)},1)},pluginsKey:function(e){return this.options.excludePlugins||(this.isIE()?this.options.excludeIEPlugins||e.addPreprocessedComponent({key:"ie_plugins",value:this.getIEPlugins()}):e.addPreprocessedComponent({key:"regular_plugins",value:this.getRegularPlugins()})),e},getRegularPlugins:function(){var e=[];if(navigator.plugins)for(var t=0,r=navigator.plugins.length;t<r;t++)navigator.plugins[t]&&e.push(navigator.plugins[t]);return this.pluginsShouldBeSorted()&&(e=e.sort(function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})),this.map(e,function(e){var t=this.map(e,function(e){return[e.type,e.suffixes].join("~")}).join(",");return[e.name,e.description,t].join("::")},this)},getIEPlugins:function(){var e=[];if(Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(window,"ActiveXObject")||"ActiveXObject"in window){e=this.map(["AcroPDF.PDF","Adodb.Stream","AgControl.AgControl","DevalVRXCtrl.DevalVRXCtrl.1","MacromediaFlashPaper.MacromediaFlashPaper","Msxml2.DOMDocument","Msxml2.XMLHTTP","PDF.PdfCtrl","QuickTime.QuickTime","QuickTimeCheckObject.QuickTimeCheck.1","RealPlayer","RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","RealVideo.RealVideo(tm) ActiveX Control (32-bit)","Scripting.Dictionary","SWCtl.SWCtl","Shell.UIHelper","ShockwaveFlash.ShockwaveFlash","Skype.Detection","TDCCtl.TDCCtl","WMPlayer.OCX","rmocx.RealPlayer G2 Control","rmocx.RealPlayer G2 Control.1"],function(e){try{return new window.ActiveXObject(e),e}catch(e){return null}})}return navigator.plugins&&(e=e.concat(this.getRegularPlugins())),e},pluginsShouldBeSorted:function(){for(var e=!1,t=0,r=this.options.sortPluginsFor.length;t<r;t++){var n=this.options.sortPluginsFor[t];if(navigator.userAgent.match(n)){e=!0;break}}return e},touchSupportKey:function(e){return this.options.excludeTouchSupport||e.addPreprocessedComponent({key:"touch_support",value:this.getTouchSupport()}),e},hardwareConcurrencyKey:function(e){return this.options.excludeHardwareConcurrency||e.addPreprocessedComponent({key:"hardware_concurrency",value:this.getHardwareConcurrency()}),e},hasSessionStorage:function(){try{return!!window.sessionStorage}catch(e){return!0}},hasLocalStorage:function(){try{return!!window.localStorage}catch(e){return!0}},hasIndexedDB:function(){try{return!!window.indexedDB}catch(e){return!0}},getHardwareConcurrency:function(){return navigator.hardwareConcurrency?navigator.hardwareConcurrency:"unknown"},getNavigatorCpuClass:function(){return navigator.cpuClass?navigator.cpuClass:"unknown"},getNavigatorPlatform:function(){return navigator.platform?navigator.platform:"unknown"},getDoNotTrack:function(){return navigator.doNotTrack?navigator.doNotTrack:navigator.msDoNotTrack?navigator.msDoNotTrack:window.doNotTrack?window.doNotTrack:"unknown"},getTouchSupport:function(){var e=0,t=!1;void 0!==navigator.maxTouchPoints?e=navigator.maxTouchPoints:void 0!==navigator.msMaxTouchPoints&&(e=navigator.msMaxTouchPoints);try{document.createEvent("TouchEvent"),t=!0}catch(e){}return[e,t,"ontouchstart"in window]},getCanvasFp:function(){var e=[],t=document.createElement("canvas");t.width=2e3,t.height=200,t.style.display="inline";var r=t.getContext("2d");return r.rect(0,0,10,10),r.rect(2,2,6,6),e.push("canvas winding:"+(!1===r.isPointInPath(5,5,"evenodd")?"yes":"no")),r.textBaseline="alphabetic",r.fillStyle="#f60",r.fillRect(125,1,62,20),r.fillStyle="#069",this.options.dontUseFakeFontInCanvas?r.font="11pt Arial":r.font="11pt no-real-font-123",r.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03",2,15),r.fillStyle="rgba(102, 204, 0, 0.2)",r.font="18pt Arial",r.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03",4,45),r.globalCompositeOperation="multiply",r.fillStyle="rgb(255,0,255)",r.beginPath(),r.arc(50,50,50,0,2*Math.PI,!0),r.closePath(),r.fill(),r.fillStyle="rgb(0,255,255)",r.beginPath(),r.arc(100,50,50,0,2*Math.PI,!0),r.closePath(),r.fill(),r.fillStyle="rgb(255,255,0)",r.beginPath(),r.arc(75,100,50,0,2*Math.PI,!0),r.closePath(),r.fill(),r.fillStyle="rgb(255,0,255)",r.arc(75,75,75,0,2*Math.PI,!0),r.arc(75,75,25,0,2*Math.PI,!0),r.fill("evenodd"),t.toDataURL&&e.push("canvas fp:"+t.toDataURL()),e.join("~")},getWebglFp:function(){var e,t=function(t){return e.clearColor(0,0,0,1),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),"["+t[0]+", "+t[1]+"]"};if(!(e=this.getWebglCanvas()))return null;var r=[],n=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,n);var i=new Float32Array([-.2,-.9,0,.4,-.26,0,0,.732134444,0]);e.bufferData(e.ARRAY_BUFFER,i,e.STATIC_DRAW),n.itemSize=3,n.numItems=3;var a=e.createProgram(),o=e.createShader(e.VERTEX_SHADER);e.shaderSource(o,"attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"),e.compileShader(o);var s=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(s,"precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"),e.compileShader(s),e.attachShader(a,o),e.attachShader(a,s),e.linkProgram(a),e.useProgram(a),a.vertexPosAttrib=e.getAttribLocation(a,"attrVertex"),a.offsetUniform=e.getUniformLocation(a,"uniformOffset"),e.enableVertexAttribArray(a.vertexPosArray),e.vertexAttribPointer(a.vertexPosAttrib,n.itemSize,e.FLOAT,!1,0,0),e.uniform2f(a.offsetUniform,1,1),e.drawArrays(e.TRIANGLE_STRIP,0,n.numItems);try{r.push(e.canvas.toDataURL())}catch(e){}r.push("extensions:"+(e.getSupportedExtensions()||[]).join(";")),r.push("webgl aliased line width range:"+t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))),r.push("webgl aliased point size range:"+t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))),r.push("webgl alpha bits:"+e.getParameter(e.ALPHA_BITS)),r.push("webgl antialiasing:"+(e.getContextAttributes().antialias?"yes":"no")),r.push("webgl blue bits:"+e.getParameter(e.BLUE_BITS)),r.push("webgl depth bits:"+e.getParameter(e.DEPTH_BITS)),r.push("webgl green bits:"+e.getParameter(e.GREEN_BITS)),r.push("webgl max anisotropy:"+function(e){var t=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic");if(t){var r=e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);return 0===r&&(r=2),r}return null}(e)),r.push("webgl max combined texture image units:"+e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),r.push("webgl max cube map texture size:"+e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)),r.push("webgl max fragment uniform vectors:"+e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)),r.push("webgl max render buffer size:"+e.getParameter(e.MAX_RENDERBUFFER_SIZE)),r.push("webgl max texture image units:"+e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)),r.push("webgl max texture size:"+e.getParameter(e.MAX_TEXTURE_SIZE)),r.push("webgl max varying vectors:"+e.getParameter(e.MAX_VARYING_VECTORS)),r.push("webgl max vertex attribs:"+e.getParameter(e.MAX_VERTEX_ATTRIBS)),r.push("webgl max vertex texture image units:"+e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),r.push("webgl max vertex uniform vectors:"+e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)),r.push("webgl max viewport dims:"+t(e.getParameter(e.MAX_VIEWPORT_DIMS))),r.push("webgl red bits:"+e.getParameter(e.RED_BITS)),r.push("webgl renderer:"+e.getParameter(e.RENDERER)),r.push("webgl shading language version:"+e.getParameter(e.SHADING_LANGUAGE_VERSION)),r.push("webgl stencil bits:"+e.getParameter(e.STENCIL_BITS)),r.push("webgl vendor:"+e.getParameter(e.VENDOR)),r.push("webgl version:"+e.getParameter(e.VERSION));try{var l=e.getExtension("WEBGL_debug_renderer_info");l&&(r.push("webgl unmasked vendor:"+e.getParameter(l.UNMASKED_VENDOR_WEBGL)),r.push("webgl unmasked renderer:"+e.getParameter(l.UNMASKED_RENDERER_WEBGL)))}catch(e){}return e.getShaderPrecisionFormat?(r.push("webgl vertex shader high float precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision),r.push("webgl vertex shader high float precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).rangeMin),r.push("webgl vertex shader high float precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).rangeMax),r.push("webgl vertex shader medium float precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision),r.push("webgl vertex shader medium float precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).rangeMin),r.push("webgl vertex shader medium float precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).rangeMax),r.push("webgl vertex shader low float precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_FLOAT).precision),r.push("webgl vertex shader low float precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_FLOAT).rangeMin),r.push("webgl vertex shader low float precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_FLOAT).rangeMax),r.push("webgl fragment shader high float precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision),r.push("webgl fragment shader high float precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).rangeMin),r.push("webgl fragment shader high float precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).rangeMax),r.push("webgl fragment shader medium float precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision),r.push("webgl fragment shader medium float precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).rangeMin),r.push("webgl fragment shader medium float precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).rangeMax),r.push("webgl fragment shader low float precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_FLOAT).precision),r.push("webgl fragment shader low float precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_FLOAT).rangeMin),r.push("webgl fragment shader low float precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_FLOAT).rangeMax),r.push("webgl vertex shader high int precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_INT).precision),r.push("webgl vertex shader high int precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_INT).rangeMin),r.push("webgl vertex shader high int precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_INT).rangeMax),r.push("webgl vertex shader medium int precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_INT).precision),r.push("webgl vertex shader medium int precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_INT).rangeMin),r.push("webgl vertex shader medium int precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_INT).rangeMax),r.push("webgl vertex shader low int precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_INT).precision),r.push("webgl vertex shader low int precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_INT).rangeMin),r.push("webgl vertex shader low int precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_INT).rangeMax),r.push("webgl fragment shader high int precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_INT).precision),r.push("webgl fragment shader high int precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_INT).rangeMin),r.push("webgl fragment shader high int precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_INT).rangeMax),r.push("webgl fragment shader medium int precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_INT).precision),r.push("webgl fragment shader medium int precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_INT).rangeMin),r.push("webgl fragment shader medium int precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_INT).rangeMax),r.push("webgl fragment shader low int precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_INT).precision),r.push("webgl fragment shader low int precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_INT).rangeMin),r.push("webgl fragment shader low int precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_INT).rangeMax),r.join("~")):r.join("~")},getWebglVendorAndRenderer:function(){try{var e=this.getWebglCanvas(),t=e.getExtension("WEBGL_debug_renderer_info");return e.getParameter(t.UNMASKED_VENDOR_WEBGL)+"~"+e.getParameter(t.UNMASKED_RENDERER_WEBGL)}catch(e){return null}},getAdBlock:function(){var e=document.createElement("div");e.innerHTML="&nbsp;",e.className="adsbox";var t=!1;try{document.body.appendChild(e),t=0===document.getElementsByClassName("adsbox")[0].offsetHeight,document.body.removeChild(e)}catch(e){t=!1}return t},getHasLiedLanguages:function(){if(void 0!==navigator.languages)try{if(navigator.languages[0].substr(0,2)!==navigator.language.substr(0,2))return!0}catch(e){return!0}return!1},getHasLiedResolution:function(){return window.screen.width<window.screen.availWidth||window.screen.height<window.screen.availHeight},getHasLiedOs:function(){var e,t=navigator.userAgent.toLowerCase(),r=navigator.oscpu,n=navigator.platform.toLowerCase();if(e=t.indexOf("windows phone")>=0?"Windows Phone":t.indexOf("win")>=0?"Windows":t.indexOf("android")>=0?"Android":t.indexOf("linux")>=0?"Linux":t.indexOf("iphone")>=0||t.indexOf("ipad")>=0?"iOS":t.indexOf("mac")>=0?"Mac":"Other",("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)&&"Windows Phone"!==e&&"Android"!==e&&"iOS"!==e&&"Other"!==e)return!0;if(void 0!==r){if((r=r.toLowerCase()).indexOf("win")>=0&&"Windows"!==e&&"Windows Phone"!==e)return!0;if(r.indexOf("linux")>=0&&"Linux"!==e&&"Android"!==e)return!0;if(r.indexOf("mac")>=0&&"Mac"!==e&&"iOS"!==e)return!0;if((-1===r.indexOf("win")&&-1===r.indexOf("linux")&&-1===r.indexOf("mac"))!=("Other"===e))return!0}return n.indexOf("win")>=0&&"Windows"!==e&&"Windows Phone"!==e||((n.indexOf("linux")>=0||n.indexOf("android")>=0||n.indexOf("pike")>=0)&&"Linux"!==e&&"Android"!==e||((n.indexOf("mac")>=0||n.indexOf("ipad")>=0||n.indexOf("ipod")>=0||n.indexOf("iphone")>=0)&&"Mac"!==e&&"iOS"!==e||((-1===n.indexOf("win")&&-1===n.indexOf("linux")&&-1===n.indexOf("mac"))!=("Other"===e)||void 0===navigator.plugins&&"Windows"!==e&&"Windows Phone"!==e)))},getHasLiedBrowser:function(){var e,t=navigator.userAgent.toLowerCase(),r=navigator.productSub;if(("Chrome"===(e=t.indexOf("firefox")>=0?"Firefox":t.indexOf("opera")>=0||t.indexOf("opr")>=0?"Opera":t.indexOf("chrome")>=0?"Chrome":t.indexOf("safari")>=0?"Safari":t.indexOf("trident")>=0?"Internet Explorer":"Other")||"Safari"===e||"Opera"===e)&&"20030107"!==r)return!0;var n,i=eval.toString().length;if(37===i&&"Safari"!==e&&"Firefox"!==e&&"Other"!==e)return!0;if(39===i&&"Internet Explorer"!==e&&"Other"!==e)return!0;if(33===i&&"Chrome"!==e&&"Opera"!==e&&"Other"!==e)return!0;try{throw"a"}catch(e){try{e.toSource(),n=!0}catch(e){n=!1}}return!(!n||"Firefox"===e||"Other"===e)},isCanvasSupported:function(){var e=document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},isWebGlSupported:function(){if(!this.isCanvasSupported())return!1;var e=this.getWebglCanvas();return!!window.WebGLRenderingContext&&!!e},isIE:function(){return"Microsoft Internet Explorer"===navigator.appName||!("Netscape"!==navigator.appName||!/Trident/.test(navigator.userAgent))},hasSwfObjectLoaded:function(){return void 0!==window.swfobject},hasMinFlashInstalled:function(){return window.swfobject.hasFlashPlayerVersion("9.0.0")},addFlashDivNode:function(){var e=document.createElement("div");e.setAttribute("id",this.options.swfContainerId),document.body.appendChild(e)},loadSwfAndDetectFonts:function(e){var t="___fp_swf_loaded";window[t]=function(t){e(t)};var r=this.options.swfContainerId;this.addFlashDivNode();var n={onReady:t};window.swfobject.embedSWF(this.options.swfPath,r,"1","1","9.0.0",!1,n,{allowScriptAccess:"always",menu:"false"},{})},getWebglCanvas:function(){var e=document.createElement("canvas"),t=null;try{t=e.getContext("webgl")||e.getContext("experimental-webgl")}catch(e){}return t||(t=null),t},each:function(e,t,r){if(null!==e)if(this.nativeForEach&&e.forEach===this.nativeForEach)e.forEach(t,r);else if(e.length===+e.length){for(var n=0,i=e.length;n<i;n++)if(t.call(r,e[n],n,e)==={})return}else for(var a in e)if(e.hasOwnProperty(a)&&t.call(r,e[a],a,e)==={})return},map:function(e,t,r){var n=[];return null==e?n:this.nativeMap&&e.map===this.nativeMap?e.map(t,r):(this.each(e,function(e,i,a){n[n.length]=t.call(r,e,i,a)}),n)},x64Add:function(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var r=[0,0,0,0];return r[3]+=e[3]+t[3],r[2]+=r[3]>>>16,r[3]&=65535,r[2]+=e[2]+t[2],r[1]+=r[2]>>>16,r[2]&=65535,r[1]+=e[1]+t[1],r[0]+=r[1]>>>16,r[1]&=65535,r[0]+=e[0]+t[0],r[0]&=65535,[r[0]<<16|r[1],r[2]<<16|r[3]]},x64Multiply:function(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var r=[0,0,0,0];return r[3]+=e[3]*t[3],r[2]+=r[3]>>>16,r[3]&=65535,r[2]+=e[2]*t[3],r[1]+=r[2]>>>16,r[2]&=65535,r[2]+=e[3]*t[2],r[1]+=r[2]>>>16,r[2]&=65535,r[1]+=e[1]*t[3],r[0]+=r[1]>>>16,r[1]&=65535,r[1]+=e[2]*t[2],r[0]+=r[1]>>>16,r[1]&=65535,r[1]+=e[3]*t[1],r[0]+=r[1]>>>16,r[1]&=65535,r[0]+=e[0]*t[3]+e[1]*t[2]+e[2]*t[1]+e[3]*t[0],r[0]&=65535,[r[0]<<16|r[1],r[2]<<16|r[3]]},x64Rotl:function(e,t){return 32===(t%=64)?[e[1],e[0]]:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t|e[0]>>>32-t]:(t-=32,[e[1]<<t|e[0]>>>32-t,e[0]<<t|e[1]>>>32-t])},x64LeftShift:function(e,t){return 0===(t%=64)?e:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t]:[e[1]<<t-32,0]},x64Xor:function(e,t){return[e[0]^t[0],e[1]^t[1]]},x64Fmix:function(e){return e=this.x64Xor(e,[0,e[0]>>>1]),e=this.x64Multiply(e,[4283543511,3981806797]),e=this.x64Xor(e,[0,e[0]>>>1]),e=this.x64Multiply(e,[3301882366,444984403]),e=this.x64Xor(e,[0,e[0]>>>1])},x64hash128:function(e,t){e=e||"",t=t||0;for(var r=e.length%16,n=e.length-r,i=[0,t],a=[0,t],o=[0,0],s=[0,0],l=[2277735313,289559509],d=[1291169091,658871167],h=0;h<n;h+=16)o=[255&e.charCodeAt(h+4)|(255&e.charCodeAt(h+5))<<8|(255&e.charCodeAt(h+6))<<16|(255&e.charCodeAt(h+7))<<24,255&e.charCodeAt(h)|(255&e.charCodeAt(h+1))<<8|(255&e.charCodeAt(h+2))<<16|(255&e.charCodeAt(h+3))<<24],s=[255&e.charCodeAt(h+12)|(255&e.charCodeAt(h+13))<<8|(255&e.charCodeAt(h+14))<<16|(255&e.charCodeAt(h+15))<<24,255&e.charCodeAt(h+8)|(255&e.charCodeAt(h+9))<<8|(255&e.charCodeAt(h+10))<<16|(255&e.charCodeAt(h+11))<<24],o=this.x64Multiply(o,l),o=this.x64Rotl(o,31),o=this.x64Multiply(o,d),i=this.x64Xor(i,o),i=this.x64Rotl(i,27),i=this.x64Add(i,a),i=this.x64Add(this.x64Multiply(i,[0,5]),[0,1390208809]),s=this.x64Multiply(s,d),s=this.x64Rotl(s,33),s=this.x64Multiply(s,l),a=this.x64Xor(a,s),a=this.x64Rotl(a,31),a=this.x64Add(a,i),a=this.x64Add(this.x64Multiply(a,[0,5]),[0,944331445]);switch(o=[0,0],s=[0,0],r){case 15:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(h+14)],48));case 14:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(h+13)],40));case 13:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(h+12)],32));case 12:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(h+11)],24));case 11:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(h+10)],16));case 10:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(h+9)],8));case 9:s=this.x64Xor(s,[0,e.charCodeAt(h+8)]),s=this.x64Multiply(s,d),s=this.x64Rotl(s,33),s=this.x64Multiply(s,l),a=this.x64Xor(a,s);case 8:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(h+7)],56));case 7:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(h+6)],48));case 6:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(h+5)],40));case 5:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(h+4)],32));case 4:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(h+3)],24));case 3:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(h+2)],16));case 2:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(h+1)],8));case 1:o=this.x64Xor(o,[0,e.charCodeAt(h)]),o=this.x64Multiply(o,l),o=this.x64Rotl(o,31),o=this.x64Multiply(o,d),i=this.x64Xor(i,o)}return i=this.x64Xor(i,[0,e.length]),a=this.x64Xor(a,[0,e.length]),i=this.x64Add(i,a),a=this.x64Add(a,i),i=this.x64Fmix(i),a=this.x64Fmix(a),i=this.x64Add(i,a),a=this.x64Add(a,i),("00000000"+(i[0]>>>0).toString(16)).slice(-8)+("00000000"+(i[1]>>>0).toString(16)).slice(-8)+("00000000"+(a[0]>>>0).toString(16)).slice(-8)+("00000000"+(a[1]>>>0).toString(16)).slice(-8)}},e.VERSION="1.8.0",e});

    function MD5 (s){function L(k,d){return(k<<d)|(k>>>(32-d))}function K(G,k){var I,d,F,H,x;F=(G&2147483648);H=(k&2147483648);I=(G&1073741824);d=(k&1073741824);x=(G&1073741823)+(k&1073741823);if(I&d){return(x^2147483648^F^H)}if(I|d){if(x&1073741824){return(x^3221225472^F^H)}else{return(x^1073741824^F^H)}}else{return(x^F^H)}}function r(d,F,k){return(d&F)|((~d)&k)}function q(d,F,k){return(d&k)|(F&(~k))}function p(d,F,k){return(d^F^k)}function n(d,F,k){return(F^(d|(~k)))}function u(G,F,aa,Z,k,H,I){G=K(G,K(K(r(F,aa,Z),k),I));return K(L(G,H),F)}function f(G,F,aa,Z,k,H,I){G=K(G,K(K(q(F,aa,Z),k),I));return K(L(G,H),F)}function D(G,F,aa,Z,k,H,I){G=K(G,K(K(p(F,aa,Z),k),I));return K(L(G,H),F)}function t(G,F,aa,Z,k,H,I){G=K(G,K(K(n(F,aa,Z),k),I));return K(L(G,H),F)}function e(G){var Z;var F=G.length;var x=F+8;var k=(x-(x%64))/64;var I=(k+1)*16;var aa=Array(I-1);var d=0;var H=0;while(H<F){Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=(aa[Z]| (G.charCodeAt(H)<<d));H++}Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=aa[Z]|(128<<d);aa[I-2]=F<<3;aa[I-1]=F>>>29;return aa}function B(x){var k="",F="",G,d;for(d=0;d<=3;d++){G=(x>>>(d*8))&255;F="0"+G.toString(16);k=k+F.substr(F.length-2,2)}return k}function J(k){k=k.replace(/rn/g,"n");var d="";for(var F=0;F<k.length;F++){var x=k.charCodeAt(F);if(x<128){d+=String.fromCharCode(x)}else{if((x>127)&&(x<2048)){d+=String.fromCharCode((x>>6)|192);d+=String.fromCharCode((x&63)|128)}else{d+=String.fromCharCode((x>>12)|224);d+=String.fromCharCode(((x>>6)&63)|128);d+=String.fromCharCode((x&63)|128)}}}return d}var C=Array();var P,h,E,v,g,Y,X,W,V;var S=7,Q=12,N=17,M=22;var A=5,z=9,y=14,w=20;var o=4,m=11,l=16,j=23;var U=6,T=10,R=15,O=21;s=J(s);C=e(s);Y=1732584193;X=4023233417;W=2562383102;V=271733878;for(P=0;P<C.length;P+=16){h=Y;E=X;v=W;g=V;Y=u(Y,X,W,V,C[P+0],S,3614090360);V=u(V,Y,X,W,C[P+1],Q,3905402710);W=u(W,V,Y,X,C[P+2],N,606105819);X=u(X,W,V,Y,C[P+3],M,3250441966);Y=u(Y,X,W,V,C[P+4],S,4118548399);V=u(V,Y,X,W,C[P+5],Q,1200080426);W=u(W,V,Y,X,C[P+6],N,2821735955);X=u(X,W,V,Y,C[P+7],M,4249261313);Y=u(Y,X,W,V,C[P+8],S,1770035416);V=u(V,Y,X,W,C[P+9],Q,2336552879);W=u(W,V,Y,X,C[P+10],N,4294925233);X=u(X,W,V,Y,C[P+11],M,2304563134);Y=u(Y,X,W,V,C[P+12],S,1804603682);V=u(V,Y,X,W,C[P+13],Q,4254626195);W=u(W,V,Y,X,C[P+14],N,2792965006);X=u(X,W,V,Y,C[P+15],M,1236535329);Y=f(Y,X,W,V,C[P+1],A,4129170786);V=f(V,Y,X,W,C[P+6],z,3225465664);W=f(W,V,Y,X,C[P+11],y,643717713);X=f(X,W,V,Y,C[P+0],w,3921069994);Y=f(Y,X,W,V,C[P+5],A,3593408605);V=f(V,Y,X,W,C[P+10],z,38016083);W=f(W,V,Y,X,C[P+15],y,3634488961);X=f(X,W,V,Y,C[P+4],w,3889429448);Y=f(Y,X,W,V,C[P+9],A,568446438);V=f(V,Y,X,W,C[P+14],z,3275163606);W=f(W,V,Y,X,C[P+3],y,4107603335);X=f(X,W,V,Y,C[P+8],w,1163531501);Y=f(Y,X,W,V,C[P+13],A,2850285829);V=f(V,Y,X,W,C[P+2],z,4243563512);W=f(W,V,Y,X,C[P+7],y,1735328473);X=f(X,W,V,Y,C[P+12],w,2368359562);Y=D(Y,X,W,V,C[P+5],o,4294588738);V=D(V,Y,X,W,C[P+8],m,2272392833);W=D(W,V,Y,X,C[P+11],l,1839030562);X=D(X,W,V,Y,C[P+14],j,4259657740);Y=D(Y,X,W,V,C[P+1],o,2763975236);V=D(V,Y,X,W,C[P+4],m,1272893353);W=D(W,V,Y,X,C[P+7],l,4139469664);X=D(X,W,V,Y,C[P+10],j,3200236656);Y=D(Y,X,W,V,C[P+13],o,681279174);V=D(V,Y,X,W,C[P+0],m,3936430074);W=D(W,V,Y,X,C[P+3],l,3572445317);X=D(X,W,V,Y,C[P+6],j,76029189);Y=D(Y,X,W,V,C[P+9],o,3654602809);V=D(V,Y,X,W,C[P+12],m,3873151461);W=D(W,V,Y,X,C[P+15],l,530742520);X=D(X,W,V,Y,C[P+2],j,3299628645);Y=t(Y,X,W,V,C[P+0],U,4096336452);V=t(V,Y,X,W,C[P+7],T,1126891415);W=t(W,V,Y,X,C[P+14],R,2878612391);X=t(X,W,V,Y,C[P+5],O,4237533241);Y=t(Y,X,W,V,C[P+12],U,1700485571);V=t(V,Y,X,W,C[P+3],T,2399980690);W=t(W,V,Y,X,C[P+10],R,4293915773);X=t(X,W,V,Y,C[P+1],O,2240044497);Y=t(Y,X,W,V,C[P+8],U,1873313359);V=t(V,Y,X,W,C[P+15],T,4264355552);W=t(W,V,Y,X,C[P+6],R,2734768916);X=t(X,W,V,Y,C[P+13],O,1309151649);Y=t(Y,X,W,V,C[P+4],U,4149444226);V=t(V,Y,X,W,C[P+11],T,3174756917);W=t(W,V,Y,X,C[P+2],R,718787259);X=t(X,W,V,Y,C[P+9],O,3951481745);Y=K(Y,h);X=K(X,E);W=K(W,v);V=K(V,g)}var i=B(Y)+B(X)+B(W)+B(V);return i.toLowerCase()};
    function getCookie(name) {var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));return matches ? decodeURIComponent(matches[1]) : undefined;}
    function setCookie(name, value, options) {options = options || {};var expires = options.expires;if (typeof expires === "number" && expires) {         var d = new Date();     d.setTime(d.getTime() + expires * 1000);     expires = options.expires = d;     }     if (expires && expires.toUTCString) {         options.expires = expires.toUTCString();}value = encodeURIComponent(value);var updatedCookie = name + "=" + value;for (var propName in options) {updatedCookie += "; " + propName;var propValue = options[propName];if (propValue !== true) {updatedCookie += "=" + propValue;     }     }     document.cookie = updatedCookie;}

    if (typeof Object.assign != 'function') {
        // Must be writable: true, enumerable: false, configurable: true
        Object.defineProperty(Object, "assign", {
            value: function assign(target, varArgs) { // .length of function is 2
                'use strict';
                if (target == null) { // TypeError if undefined or null
                    throw new TypeError('Cannot convert undefined or null to object');
                }

                var to = Object(target);

                for (var index = 1; index < arguments.length; index++) {
                    var nextSource = arguments[index];

                    if (nextSource != null) { // Skip over if undefined or null
                        for (var nextKey in nextSource) {
                            // Avoid bugs when hasOwnProperty is shadowed
                            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                                to[nextKey] = nextSource[nextKey];
                            }
                        }
                    }
                }
                return to;
            },
            writable: true,
            configurable: true
        });
    }

    function getOffset( el ) {
        var _x = 0;
        var _y = 0;
        while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
            _x += el.offsetLeft - el.scrollLeft;
            _y += el.offsetTop - el.scrollTop;
            el = el.offsetParent;
        }
        return { top: _y, left: _x };
    }

    function Vika(fgp) {

        var _fgp = fgp;

        var trkDef = document.location.host.indexOf('nation-news.ru') !== -1 ?
            {urlRecom: 'https://rp.fabricmedia.ru/nation/recom/', expectedValue: 1, post_id: 0} :
            {urlRecom: 'https://rp.fabricmedia.ru/recom/', expectedValue: 0.8, post_id:0},
            trk = window.trk || trkDef;

        trk.urlRecom = trk.urlRecom || trkDef.urlRecom;
        trk.expectedValue = trk.expectedValue || trkDef.expectedValue;
        trk.post_id = trk.post_id || trkDef.post_id;

        function fetcher(url,method,params,callback, error){
            method = method || 'GET';
            if(method === 'GET'){
                var addstring = '?';
                for(var param in params){
                    if (params.hasOwnProperty(param)) addstring += param + '=' + params[param] + '&';
                }
                url += addstring;
            }
            var body = method === 'POST' ? JSON.stringify(params) : undefined;
            var xhr = new XMLHttpRequest();
            xhr.open(method, url, true);
            if(method === 'POST') xhr.setRequestHeader('Content-Type', 'application/json');
            if(!!callback){
                xhr.onreadystatechange = function() {
                    if (xhr.readyState !== 4) return;
                    if (xhr.status === 200) {
                        callback( xhr.responseText );
                    } else if(typeof error === 'function') {
                        error(xhr.status, xhr.responseText);
                    }
                };
            }
            xhr.send(body);
        }

        /**
         *
         * @param href
         * @returns {Number}
         */
        function mathPostId(href) {
            href = document.location.href || href
            return parseInt((href.match(/([\d]+)-.*/) || [0,0])[1])
        }

        /**
         *
         * @returns {string}
         */
        function mathPostIdStr() {
            return '' + mathPostId();
        }

        /**
         *
         * @returns {string}
         */
        function mathYaClass() {
            return !!document.getElementsByTagName('meta')['vika:ya_class'] ?  (document.getElementsByTagName('meta')['vika:ya_class'].content + '') : '';
        }

        /**
         *
         * @returns {string}
         */
        function mathAuthId() {
            return !!document.getElementsByTagName('meta')['vika:aid'] ?  (document.getElementsByTagName('meta')['vika:aid'].content + '') : '';
        }

        /**
         *
         * @returns {string}
         */
        function mathPageTypeId() {
            return !!document.getElementsByTagName('meta')['vika:ptid'] ?  (document.getElementsByTagName('meta')['vika:ptid'].content + '') : '0';
        }

        /**
         *
         * @returns {*}
         */
        function mathCategory() {
            return !!document.getElementsByTagName('meta')['vika:category'] ?  document.getElementsByTagName('meta')['vika:category'].content : ''
        }

        /**
         *
         * @param postId
         * @returns {string}
         */
        function mathLikePostStr(postId) {
            postId = postId || mathPostIdStr();
            var _mapLike = {};
            if(window.getAllLikes && typeof window.getAllLikes === 'function') {
                _mapLike = window.getAllLikes();
            }
            return _mapLike[postId] ? _mapLike[postId].likes + '' : '0';
        }

        /**
         *
         * @returns {*}
         */
        function getRequestHash(name) {
            name = name || ' vika request ';
            var id = _fgp + name + mathPostId();
            this[id] =  this[id] || MD5(id);
            return this[id];
        }

        /**
         *
         * @returns {*}
         */
        function mathPostTitle() {
            if(!!document.querySelector('meta[property="og:title"]')) {
                return  document.querySelector('meta[property="og:title"]').content;
            }
            return document.title;
        }

        /* FMTRK */


        var defaultFMParams = {
            host:document.location.host,
            post_id: mathPostId(),
            referrer:document.referrer,
            fingerprint:_fgp,
            interested: 0,
            title: mathPostTitle()
        };

        /**
         * 
         * @param data
         * @returns {string}
         */
        function encodeData(data) {
            return Object.keys(data).map(function(key) {
                return [key, data[key]].map(encodeURIComponent).join("=");
            }).join("&");
        }

        /**
         *
         * @param goalId
         * @param success
         */
        function goalPixel(goalId, success) {
            var e = document.createElement('img');
            e.src = 'https://viki.fabricmedia.ru/metrika/goal?' + encodeData({
                    'Host'          : defaultFMParams.host,
                    'Fingerprint'   : defaultFMParams.fingerprint,
                    'GoalId'        : goalId,
                    'Success'       : success
                });
            document.body.appendChild(e);
        }

        /**
         *
         * @param callBack
         * @param value
         * @param postId
         * @param host
         */
        function likeSet(callBack, value, postId, host, fingerPrint) {
            postId = postId || trk.post_id;
            host = host || defaultFMParams.host
            fingerPrint = fingerPrint || _fgp

            if(!!callBack) {
                var body = '{"host":"'+host+'","post_id":'+postId+',"like":'+value+',"fingerprint":"'+fingerPrint+'"}';
                var relReq = new XMLHttpRequest();
                relReq.open('POST', 'https://viki.fabricmedia.ru/v2/services/like?needRate=1', true);
                relReq.setRequestHeader('Content-Type', 'application/json');

                relReq.onreadystatechange = function() {
                    if (relReq.readyState !== 4) return;
                    if (relReq.status === 200) { callBack(JSON.parse(relReq.responseText)) }
                };
                relReq.send(body);
            }
        }

        /**
         *
         * @param position
         * @param callBack
         * @param postId
         * @param limit
         * @param fingerPrint
         * @param host
         */
        function trafficSourceGet(position, callBack, postId, limit, fingerPrint, host) {
            postId = postId || trk.post_id;
            host = host || defaultFMParams.host
            limit = limit || 1
            fingerPrint = fingerPrint || _fgp;
            window.pageHash = window.pageHash || Math.round(Math.random() * 1000000)

            if(!!callBack && !!position){
                var relReq = new XMLHttpRequest();
                relReq.open('GET', 'https://dist.fabricmedia.ru/v2/services/trafficsource/' +
                    position +'/'+fingerPrint+'?limit=' +
                    limit + '&pageHash=' + window.pageHash + '&post_id=' + postId + '&host=' + host + '&text=' + mathPostTitle(), true);
                relReq.setRequestHeader('Content-Type', 'application/json');
                relReq.onreadystatechange = function() {
                    if (relReq.readyState !== 4) return;
                    if (relReq.status === 200) {
                        var data = JSON.parse(relReq.responseText);
                        callBack(data);

                        // show load
                        (data.body.items || []).forEach(function(i){
                            var key = 'nrn_' + i.type + '_' + position+ '_load';
                            yandexReachGo(key);
                        });

                    }
                };
                relReq.send();
            }
        }

        /**
         *
         * @param callBack
         * @param postId
         * @param host
         * @param fingerPrint
         */
        function likeGet(callBack, postId, host, fingerPrint) {
            postId = postId || trk.post_id;
            host = host || defaultFMParams.host
            fingerPrint = fingerPrint || _fgp

            if(!!callBack){
                var relReq = new XMLHttpRequest();
                relReq.open('GET', 'https://viki.fabricmedia.ru/v2/services/like/' +
                                    host +'/'+postId+'/' + fingerPrint, true);
                relReq.setRequestHeader('Content-Type', 'application/json');
                relReq.onreadystatechange = function() {
                    if (relReq.readyState !== 4) return;
                    if (relReq.status === 200) { callBack(JSON.parse(relReq.responseText))}
                };
                relReq.send();
            }
        }

        /**
         *
         * @param callBack
         * @param full
         * @param limit
         */
        function getRankingPosts(callBack, full, limit, distribution) {
            limit = limit || 1;
            full = full || 1;
            distribution = distribution || 0.5;

            if(!!callBack){
                var relReq = new XMLHttpRequest();
                var host = Math.random() > distribution  ? 'rg.fabricmedia.ru' : 'rc.fabricmedia.ru';
                relReq.open('GET', 'https://'+host+'/posts/' +
                                _fgp + '?full=' + full + '&limit='+limit, true);
                relReq.setRequestHeader('Content-Type', 'application/json');
                relReq.onreadystatechange = function() {
                    if (relReq.readyState !== 4) return;
                    if (relReq.status === 200) { callBack(JSON.parse(relReq.responseText)) }
                };
                relReq.send();
            }
        }

        /**
         *
         * @param callBack
         */
        function getAnnouncePosts(callBack) {
            if(!!callBack){
                var relReq = new XMLHttpRequest(),
                    host = 'https://dist.fabricmedia.ru/v2/services/announce';
                relReq.open('GET', host, true);
                relReq.setRequestHeader('Content-Type', 'application/json');
                relReq.onreadystatechange = function() {
                    if (relReq.readyState !== 4) return;
                    if (relReq.status === 200) { callBack(JSON.parse(relReq.responseText)) }
                };
                relReq.send();
            }
        }
        
        function getFMParamsFromDefaults(object){
            var params = {};
            for(var prop1 in defaultFMParams) if (defaultFMParams.hasOwnProperty(prop1)) params[prop1] = defaultFMParams[prop1];
            for(var prop2 in object) if (object.hasOwnProperty(prop2)) params[prop2] = object[prop2];
            return params;
        }

        function getClearParams(object){
            var params = {};
            params['fingerprint'] = defaultFMParams.fingerprint;
            params['host'] = defaultFMParams.host;
            params['interested'] = 0;
            for(var prop in object) if (object.hasOwnProperty(prop)) params[prop] = object[prop];
            return params;
        }

        function fetchStat(data){
            var node = document.querySelector('meta[name="is_published"]')
            if(!node || node.content != 'true'){
                return;
            }
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://viki.fabricmedia.ru/v2', true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(data));
        }

        this.trackUserLikeCurrentPost = function(){
            fetchStat(getFMParamsFromDefaults({interested:1}));
        };

        this.trackUserSeenCurrentPost = function(){
            fetchStat(getFMParamsFromDefaults({interested:0}));
        };

        this.trackUserLikePostID = function (post_id,title) {
            fetchStat(getClearParams({interested:1,post_id:post_id,title:title}));
        };

        this.trackUserSeenPostID = function (post_id,title) {
            fetchStat(getClearParams({interested:0,post_id:post_id,title:title}));
        };

        this.getRelatedForPostID = function(post_id,callback,limit,exclude) {
            limit = limit || 1;
            exclude = exclude || [];
            post_id = post_id || trk.post_id;
            if(!!callback && post_id){
                var relReq = new XMLHttpRequest();
                relReq.open('GET', trk.urlRecom + post_id +'/' + _fgp + '?full=true&limit='+limit+'&exclude='+exclude.join(','), true);
                relReq.setRequestHeader('Content-Type', 'application/json');
                relReq.onreadystatechange = function() {
                    if (relReq.readyState !== 4) return;
                    if (relReq.status === 200) { callback(JSON.parse(relReq.responseText)) }
                };
                relReq.send();
            }
        };

        this.getRelatedForUserByCF = function(callback,limit) {
            limit = limit || 1;
            if(!!callback){
                var relReq = new XMLHttpRequest();
                relReq.open('GET', 'https://rp.fabricmedia.ru/cf/' + _fgp + '?full=true&limit='+limit, true);
                relReq.setRequestHeader('Content-Type', 'application/json');
                relReq.onreadystatechange = function() {
                    if (relReq.readyState !== 4) return;
                    if (relReq.status === 200) { callback(JSON.parse(relReq.responseText)) }
                };
                relReq.send();
            }
        };

        this.getRelatedForCurrentUserByViki = function(callback){
            if(!!callback){
                var body = '{"referrer":"' + document.referrer +
                    '","fingerprint":"' + _fgp +
                    '","host":"'+ defaultFMParams.host +'"}';
                var relReq = new XMLHttpRequest();
                relReq.open('POST', 'https://rc.fabricmedia.ru/posts', true);
                relReq.setRequestHeader('Content-Type', 'application/json');

                relReq.onreadystatechange = function() {
                    if (relReq.readyState !== 4) return;
                    if (relReq.status === 200) { callback(JSON.parse(relReq.responseText)) }
                };
                relReq.send(body);
            }
        };

        this.getRelatedForCurrentPost = function(callback){
            var post_id = mathPostId();
            this.getRelatedForPostID(post_id,callback);
        };

        this.getRelatedForCurrentUser = function(callback){
            if(!!callback){
                var body = '{"referrer":"' + document.referrer +
                    '","fingerprint":"' + _fgp +
                    '","host":"'+defaultFMParams.host+'"}';
                var relReq = new XMLHttpRequest();
                relReq.open('POST', 'https://rc.fabricmedia.ru/posts', true);
                relReq.setRequestHeader('Content-Type', 'application/json');
                relReq.send(body);

                relReq.onreadystatechange = function() {
                    if (relReq.readyState !== 4) return;
                    if (relReq.status === 200) {
                        var data = JSON.parse(relReq.responseText);
                        if(data && data.result && data.result[0]) {

                            var id = data.result[0],
                                r = new XMLHttpRequest();
                            r.open('GET', '/posts/getById?id=' + id, true);
                            r.setRequestHeader('Content-Type', 'application/json');

                            r.onreadystatechange = function() {

                                if (r.readyState !== 4 || r.status !== 200)  {
                                    return;
                                }

                                var json = JSON.parse(r.responseText),
                                    data = [{
                                        'id'     : id,
                                        'title'  : json.title,
                                        'link'   : json.fulllink,
                                        'image'  : json.mainImageLink ?
                                            json.mainImageLink.full
                                            : '',
                                        'images' : [/* todo */]
                                    }];
                                callback(data);
                            };
                            r.send();
                        }
                    }
                }
            }
        };

        this.getRelatedForCurrentPostddd = function(){
            this.getRelatedForCurrentPost(function(data){
                var relEvent = new CustomEvent("viki_related_posts", {
                    detail: data
                });
                document.dispatchEvent(relEvent);
            });
        };

        this.getSimilarUsersRelatedPosts = function() {

        };


        /*  /* FMTRK */


        function sendStat(params){
            params.Fingerprint = _fgp;
            params.GlobalReferrer = _globalRef;
            params.SessionId = _session;
            params.Referrer = _localRef;
            params.PostLike = mathLikePostStr();

            for(var i in params){
                if(params.hasOwnProperty(i)) params[i] = '' + params[i];
            }

            var o = { 'request_id' : getRequestHash(), 'metrika_key': 'viki', attribute : params }
            fetcher(_internalParams.urlMetrika,'POST',o);
        }

        function sendSelection(string){
            var params = {
                request_id:getRequestHash(),
                metrika_key:"select-text",
                attribute:{
                    PostId: mathPostIdStr(),
                    Fingerprint:_fgp,
                    Host:document.location.hostname,
                    SelectCharCount:'' + string.length,
                    PageCharCount: '' + _internalParams.articleElement.innerText.length
                }
            };

            fetcher(_internalParams.urlMetrika,'POST',params);

        }

        /**
         *
         * @param PostId
         * @param Type
         * @param Position
         * @param Success
         * @param Showed
         * @returns {{request_id: *, metrika_key: string, attribute: {Host: string, PostId: string, Fingerprint: *, Type: string, Success: (string|*), Position: (string|*)}}}
         */
        function sendAnnounceStatReq(PostId, Type, Position, Success, Showed, TotalLoad) {
            var lenPost = '0';
            try {
                lenPost = '' + _internalParams.articleElement.innerText.length;
            } catch (e){}
            return {
                request_id:getRequestHash(),
                metrika_key: "announce",
                attribute:{
                    Host:document.location.hostname,
                    PostId: String(PostId),
                    Fingerprint: _fgp,
                    Type: String(Type),// model type
                    Success: String(Success || "0"),
                    Position: String(Position) || "1",
                    PagePostId: mathPostIdStr(),
                    YaCategory: mathYaClass(),
                    Category: mathCategory(),
                    CharCount:  lenPost,
                    Referrer: document.referrer || "*",
                    Showed  : String(Showed || "0"),
                    TotalLoad: String(TotalLoad || "1")
                }
            };
        }

        function sendAnnounceStatReq4(tid, hit, bid) {
            return {
                metrika_key: "user_hit",
                request_id: "default",
                sig       : "test",
                attribute: {
                    BID:    String(bid || "256"),
                    TID:    ""+tid,
                    Fingerprint: "" + _fgp,
                    HitConfirm:""+hit,
                    Hit:    ""+hit,
                    Load:   ""+1,
                    Show:   ""+1,
                    TypeTransition: "0"
                }
            };
        }

        /**
         *
         * @param list
         * @param callback
         */
        function sendAnnounceStat(list, callback) {

            var data = [], data4 = [],data5 = [], totalLoad = list ? list.length : 1;
            for(var i = 0; i < list.length; i ++) {
                if(list[i].type == 4) {
                    data4.push(sendAnnounceStatReq4(list[i].id, list[i].success, list[i].pos));
                }
                if(list[i].type == 5) {
                    data5.push(sendAnnounceStatReq4(list[i].id, 0, list[i].pos + 100000));
                }
                data.push( sendAnnounceStatReq(
                        list[i].id, list[i].type, list[i].pos, list[i].success, list[i].showed, totalLoad) );
            }

            fetcher(_internalParams.urlMetrikaMany,'POST', {List: data}, callback);
            if(data4.length > 0) {
                fetcher('https://blackbox.fabricmedia.ru/metrika/many/','POST', {List: data4}, function(){});
            }
            /*if(data5.length > 0) {
                fetcher('https://core.novosti-online24.ru/metrika/many/','POST', {List: data5}, function(){});
            }*/

            var ms = {};
            (data || []).forEach(function(i){
                var a = i.attribute, key = 'nrn_' + a.Type + '_' + a.Position+ '_'+ (a.Success === '1' ? 'click' : 'show');
                if(!!!ms[key]) {
                    yandexReachGo(key );
                    ms[key] = 1;
                }
            });
        }

        /**
         * Global scroll Y handler
         */
        window.addEventListener('scroll', function(){
            var elements = window.vikaScrollElements || [];
            var y = window.pageYOffset, h = window.innerHeight;

            for(var i = 0; i < elements.length; i ++) {
                var item = elements[i], top = getOffset(item[0]).top;

                if(top >= y && top <= h + y && typeof item[1] === 'function') {
                    item[1].apply(null, []);
                }
            }
        });

        /**
         *
         * @param element
         * @param callBack
         */
        function vikaScrollAdd(element, callBack) {
            (window.vikaScrollElements = (window.vikaScrollElements || [])).push([
                element, callBack
            ])
        };

        function sendReachGoal(GoalId, Success, callback){
            var params = {
                request_id:getRequestHash(),
                metrika_key: "goal",
                attribute:{
                    Fingerprint:_fgp,
                    GoalId: GoalId.toString(),
                    Host:document.location.hostname,
                    Success: Success || "0",
                }
            };
            fetcher(_internalParams.urlMetrika,'POST',params,callback);
        }

        function getSesionOrCreate(){
            var sess = window.sessionStorage.getItem('_Vika_sess_');
            if(!sess) {
                sess = MD5(_fgp + new Date().getTime());
                window.sessionStorage.setItem('_Vika_sess_',sess);
            }
            return sess;
        }

        function getGlobalRefOrCreate(){
            var ver = window.sessionStorage.getItem('_Vika_globarefa_');
            if(!ver){
                ver = document.referrer;
                window.sessionStorage.setItem('_Vika_globarefa_',ver);
            }
            return ver;
        }

        function searchForArticaleNode(){
            var __nodesP = [];
            var mainNode = null;

            function checkNodes(node) {
                var nodes = node.children;
                var avg = 0;
                var all = 0;
                var l = nodes.length;
                for (var i = 0; i < l; i++) {
                    var nodeIn = nodes[i];
                    if (nodeIn.tagName === 'P') {
                        avg++;
                        all++;
                    } else {
                        avg--;
                    }
                    checkNodes(nodes[i]);
                }
                if (all > 0) {
                    __nodesP.push({node: node, count: all, avg: avg});
                }
            }

            checkNodes(document.getElementsByTagName('body')[0]);

            for (var t = 0; t < __nodesP.length; t++) {
                if (!mainNode) {
                    mainNode = __nodesP[t];
                } else {
                    if (mainNode.count < __nodesP[t].count) {
                        mainNode = __nodesP[t];
                    }
                }
            }
            if(!!mainNode) return mainNode.node;

            return null;
        }

        function getParamsFromDefaults(object){
            var params = {};
            for(var prop1 in defaultParams) if (defaultParams.hasOwnProperty(prop1)) params[prop1] = defaultParams[prop1];
            for(var prop2 in object) if (object.hasOwnProperty(prop2)) params[prop2] = object[prop2];
            return params;
        }

        function proceedSelectionEvent(){
            document.onmouseup = function(e){
                var text = window.getSelection().toString();
                if(text !== ''){

                    sendSelection(text);
                }
                return true;
            };
        }

        function initParams() {
            var params = Object.assign({},defaultParams);
            if(!!window.vikaParams){
                params = getParamsFromDefaults(window.vikaParams);
                params.articleElement = null;
                params.getScrolledNews = false;

                if(params.notProceed) {
                    _internalParams = params;
                    return;
                }

                if(!!window.vikaParams.postLocationTag){
                    if(document.querySelectorAll(window.vikaParams.postLocationTag).length > 0){
                        params.getScrolledNews = true;
                        params.articleElement = document.querySelectorAll(window.vikaParams.postLocationTag)[0];
                    }
                }else{
                    params.articleElement = searchForArticaleNode();
                }
            }else{
                params.articleElement = searchForArticaleNode();
            }
            _internalParams = params;
        }

        function initPing(){
            var interval = setInterval(function(){
                if(mouseActivity.length > 0 && !getPageHiddeness()){
                    fetcher(_internalParams.urlPing + getRequestHash(),'POST',{},function(){},function(){
                        clearInterval(interval);
                    });
                    mouseActivity = [];
                }
            },_internalParams.pingInterval || (30*1000))
        }

        function getRequests() {
            var s1 = location.search.substring(1, location.search.length).split('&'),
                r = {}, s2, i;
            for (i = 0; i < s1.length; i += 1) {
                s2 = s1[i].split('=');
                r[decodeURIComponent(s2[0]).toLowerCase()] = decodeURIComponent(s2[1]);
            }
            return r;
        };

        /**
         *
         */
        function initTouchTrack() {


            var gm = (location.search.indexOf('mt_m=1') >= 0),
                gf = (location.search.indexOf('mt_f=1') >= 0),
                touchstart = {}
            ;
            if(!gm && !gf && Math.random() > 0.25) {
               // return ;
            }

            var tt, b = document.body, ht =document.location.hostname, d = [],
                fh = function (e) {

                var ct = e.changedTouches ? e.changedTouches[0] : {};

                if(!ct.target) {
                    return;
                }


                if(e.type === 'touchstart') {
                    touchstart = {
                        Host:ht,MouseEventType:'1', PostId: mathPostIdStr(),
                        RadiusX:ct.radiusX+'', RadiusY:ct.radiusY+'',ScreenX:parseInt(ct.screenX)+'', ScreenY:parseInt(ct.screenY)+'',
                        PageX:parseInt(ct.pageX)+'', PageY:parseInt(ct.pageY)+'',Force:ct.force+'', RotationAngle:ct.rotationAngle+'',
                        ClientX:parseInt(ct.clientX)+'', ClientY:parseInt(ct.clientY)+'',SHeight:screen.height+'',SWidth:screen.width+'',
                        Fingerprint: _fgp,
                        Options:(gm ? 'm' : (gf ? 'f' : 'n')),
                        TimeUp:new Date()
                    };
                    return ;
                }
                touchstart.RadiusXUp = ct.radiusX+''; touchstart.RadiusYUp = ct.radiusY+'';
                touchstart.ScreenXUp = parseInt(ct.screenX)+''; touchstart.ScreenYUp = parseInt(ct.screenY)+'';
                touchstart.PageXUp = parseInt(ct.pageX)+''; touchstart.PageYUp = parseInt(ct.pageY)+'';
                touchstart.ClientXUp = parseInt(ct.clientX)+''; touchstart.ClientYUp = parseInt(ct.clientY)+'';
                touchstart.ForceUp = ct.force+''; touchstart.RotationAngleUp = ct.rotationAngle+'';
                touchstart.TimeUp = ((new Date()) - touchstart.TimeUp) +'';

                d.push({request_id:getRequestHash(),metrika_key: "touch", attribute: touchstart});
                    if(d.length > 5) {
                        fetcher(_internalParams.urlMetrikaMany,'POST', {List: d}, function(){});
                        d = [];
                    }
            }, fhp = function(e){
                if(tt) {
                    clearTimeout(tt);
                }
                tt = setTimeout(function(){
                    fh(e)
                }, 20);
            };
            if(!b.addEventListener) {
                return;
            }

            b.addEventListener('touchstart', fhp);
            b.addEventListener('touchend', fhp);
        }

        /**
         *
         */
        function initMouseTrack() {
            var r = Math.random() > 0.99;
            if(!r && (!document.cookie || document.cookie.indexOf('fgpg=') === -1)) {
               return;
            }
            var tt, b = document.body, ht =document.location.hostname, d = [], fh = function (e) {

                var t = e.type === 'click' ? "1" : "0", x = String(e.clientX), y = String(e.clientY), l = d.length > 0 ? d[d.length-1]['attribute'] : {}, g = document.cookie.indexOf('fgpg=1') >= 0 ? 'm' : 'f';
                if(l['MousePosX'] == x && l['MousePosY'] == y) {
                    return;
                }
                if(r) {
                    g = 'r';
                }
                d.push({request_id:getRequestHash(),metrika_key: "mouse_track", attribute:{ PostId: mathPostIdStr(),
                    Host:ht,MouseEventType:t,MousePosX:x,MousePosY:y,Fingerprint: _fgp, Options: g  }});


                if(d.length > 30) {
                    fetcher(_internalParams.urlMetrikaMany,'POST', {List: d}, function(){});
                    d = [];
                }
            }, fhp = function(e){
                if(tt) {
                    clearTimeout(tt);
                }
                tt = setTimeout(function(){
                    fh(e)
                }, 20);
            };
            if(!b.addEventListener) {
                return;
            }

            b.addEventListener('click', fhp);
            b.addEventListener('mousemove', fhp);
        }


        /**
         *
         * @param target
         * @param options
         */
        function yandexReachGo(target, options) {
            options = options || {};
          //  console.log(target)
            Object.keys(window).forEach(function (key) {
                if(key.indexOf('yaCount') == 0) {
                    try {
                        window[key].reachGoal(target, options);
                    } catch (e) {  }
                }
            });
        }

        /**
         *
         */
        function initYandexGoal() {

            setTimeout(function () {
                Object.keys(window).forEach(function (key) {
                    if(key.indexOf('yaCount') == 0) {
                        try {
                            window[key].reachGoal('viki_fp' ,{fp: _fgp});
                            window[key].userParams({ufp: _fgp});
                        } catch (e) {  }
                    }
                });
            }, 2000)

        }

        /**
         *
         */
        function initSendGoal() {
            var ref = document.referrer, req = getRequests();
            if(!!!req['pnew_goal']) {
                return;
            }
            if(ref.indexOf('riafan.ru/pnew') === -1) {
                return;
            }

            sendReachGoal(req['pnew_goal'], '1', function(){});
            sendAnnounceStat([{
                id      : mathPostIdStr(),
                type    : 4,
                pos     : 4,
                success : "1"
            }]);
        };

        function setMouseHandler(){
            window.addEventListener('mousemove',function(e){
                if(mouseActivity.length === 0 || ( e.timeStamp / 1000 ) - mouseActivity[mouseActivity.length - 1].t > 2){
                    mouseActivity.push({t: parseInt(e.timeStamp / 1000),x:window.pageXOffset + e.clientX,y:window.pageYOffset + e.clientY});
                }
            })
        }

        function getPageHiddeness (){
            if (typeof document.hidden !== "undefined") {
                return document.hidden;
            } else if (typeof document.msHidden !== "undefined") {
                return document.msHidden;
            } else if (typeof document.webkitHidden !== "undefined") {
                return document.webkitHidde;
            }
            return false;
        }

        function _getIframesFromElem(elem){
            var iframesArr = elem.querySelectorAll('iframe');
            var arr = [];
            for(var i = 0; i < iframesArr.length; i ++){
                arr.push(iframesArr[i]);
            }
            return arr.length;
        }

        function _getImagesFromElem(elem){
            var imgArr = elem.querySelectorAll('img');
            var arr = [];
            for(var i = 0; i < imgArr.length; i ++){
                arr.push(imgArr[i]);
            }
            return arr.length;
        }

        function initScrollHandlers (elem,params,first) {

            if(!!_internalParams.onInitScrollHandler && typeof _internalParams.onInitScrollHandler === 'function'){
                _internalParams.onInitScrollHandler();
            }

            if(!elem.clientHeight || !getOffset(elem).top) return console.warn('invalid article element');

            if(!params.PostId || !params.Title) return console.warn('invalid post_id or title in post watcher');

            params = Object.assign({},params);

            params.CharCount = elem.innerText.length;
            params.Iframes = _getIframesFromElem(elem);
            params.ImageCount = _getImagesFromElem(elem);
            params.Host = document.location.hostname;

            var percents = [0,1,10,20,30,40,50,60,70,80,90,100];

            var timer = null;

            var scrollPoints = percents.map(function(item){
                return {perc:item, position:(elem.clientHeight) * (item / 100) + getOffset(elem).top };
            });

            var once = false;

            if(!!first){
                params.Interested = 0;

                sendStat(params);

                scrollPoints.splice(0,1);
            }

            var scrollHandler = function(){

                var visibleLine = window.pageYOffset + window.innerHeight;

                if(scrollPoints.length > 0){
                    for(var i = 0; i < scrollPoints.length; i++){
                        var point = scrollPoints[i];
                        if(visibleLine > point.position){
                            params.Interested = point.perc;

                            if(scrollPoints.length === 4){
                                if(!once && !!_internalParams.onceScrollEvent && typeof _internalParams.onceScrollEvent === 'function'){
                                    once = true;
                                    _internalParams.onceScrollEvent();
                                }
                            }

                            if(!!timer) clearTimeout(timer);

                            timer = setTimeout(function(){
                                sendStat(params);
                            }, 300 - point.perc);

                            scrollPoints.splice(i,1);
                        }
                    }
                }else{
                    window.removeEventListener('scroll', scrollHandler);
                }
            };
            window.addEventListener('scroll', scrollHandler);
        }

        function initFirstPostHandler(elem){
            var params = {};

            var tit = document.querySelector('meta[property="og:title"]');

            if(mathPostId() > 0 && !!elem){
                params.PostId = mathPostId();
                params.Title = tit ? tit.content : document.title;
                params.Category = _internalParams.cats || mathCategory();
                params.Author = _internalParams.authors || !!document.getElementsByTagName('meta')['vika:author'] ?  document.getElementsByTagName('meta')['vika:author'].content : '' ;
                params.Slug = document.location.pathname;
                params.Tags = _internalParams.tags || !!document.getElementsByTagName('meta')['vika:tags'] ?  document.getElementsByTagName('meta')['vika:tags'].content : '';
                params.YaCategory = _internalParams.ya_class || mathYaClass();
                params.PublicatorId = _internalParams.PublicatorId || mathAuthId();
                params.PageTypeId = _internalParams.PageTypeId || mathPageTypeId();

                initScrollHandlers(elem,params,true);
            }
        }

        var defaultParams = {
            debug: false,
            onceScrollEvent:null,
            onInitScrollHandler:null,
            urlRecom: 'https://rp.fabricmedia.ru/' + document.location.hostname + '/markov/',
            urlPing:'https://viki.fabricmedia.ru/v2/ping/',
            urlMetrika:'https://viki.fabricmedia.ru/v2/metrika/',
            urlMetrikaMany: 'https://viki.fabricmedia.ru/v2/metrika/many/',
            expectedValue:0.5,
            host:document.location.host,
            notProceed: false
        };


        var _session = getSesionOrCreate();
        var _globalRef = getGlobalRefOrCreate();
        var _localRef = document.referrer;
        var _internalParams = null;
        var mouseActivity = [];

        function init() {
            this.getFGP = function() { return _fgp; };
            this.vikaScrollAdd = function(elm, clb) { vikaScrollAdd(elm, clb); };
            this.getSession = function () { return _session; };
            this.getInternalParams = function () { return _internalParams; };
            this.addNewArticleWatcher = function (domNode,params) { initScrollHandlers(domNode,params); };
            this.reachGoal = function(id, success, clb){ sendReachGoal(id,success,clb); };
            this.goalPixel = function(id, success){ goalPixel(id,success); };
            this.getRankingPosts = function (clb, full, limit, distribution) { getRankingPosts(clb, full, limit, distribution);};
            this.getAnnouncePosts = function(clb) {getAnnouncePosts(clb);}
            this.likeGet = function(clb, postId, host){ likeGet(clb, postId, host) };
            this.likeSet = function(clb, value, postId, host){ likeSet(clb, value, postId, host) };
            this.sendAnnounceStat = function (list, clb) { sendAnnounceStat(list, clb); };
            this.trafficSourceGet = function (position, clb, postId, limit, host) {                trafficSourceGet(position, clb, postId, limit, undefined, host); };

            initParams();
            if(!!_internalParams.notProceed) {
                return;
            }

            initSendGoal();
            initFirstPostHandler(_internalParams.articleElement);
            //proceedSelectionEvent();
            setMouseHandler();
            initPing();
            //initYandexGoal();
            //initMouseTrack();
            //initTouchTrack();
        }

        init.apply(this);

    }

    try{
        if(!!getCookie('_mbrsfgpx')){
            window.VIKA = new Vika(getCookie('_mbrsfgpx'));
        }else{
            try {
                window.addEventListener('message', function(e) {
                    if (e.origin !== 'https://track.fabricmedia.ru') {
                        return
                    }
                    if(e.data && e.data.yid) {
                        setCookie('_mbrsfgpx',e.data.yid, { expires: 31536000 });
                        window.VIKA = new Vika(e.data.yid);
                    } else {
                        new Fingerprint2().get(function(result){
                        setCookie('_mbrsfgpx',result, {  expires: 31536000 });
                        window.VIKA = new Vika(result); });
                    }
                });

                var i = document.createElement('iframe');
                i.style = 'position:absolute!important;top:-2000px!important;left:0!important;';
                i.src = 'https://track.fabricmedia.ru/index.html';
                document.body.appendChild(i);

            } catch (e) { }
        }
    }catch (e) {
        console.warn('Vika error =>> ',e);
    }

})();
