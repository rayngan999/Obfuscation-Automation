<html style="height: 100%">
<head>
    <meta content="text/html; charset=windows-1251" http-equiv="Content-Type">
   <link href="https://images.gwars.ru/img/index-images-2.0/styles.css" type="text/css" rel="stylesheet">
   <meta name="description" content="&quot;GangstaWars&quot; - on-line èãðà â ìàôèþ, áîåâîé ñèìóëÿòîð è ýêîíîìè÷åñêàÿ ñòðàòåãèÿ.">
   <meta name="keywords" content="îíëàéí, èãðà, îíëàéí èãðà, gwars, gangstawars, ganja, ganjawars, ãàíæà, online, on-line èãðà â ìàôèþ">
   <title>GWars.ru: îíëàéí-èãðà &laquo;GangstaWars&raquo;</title>

<link rel="apple-touch-icon" sizes="72x72" href="https://images.gwars.ru/img/apple72.png" />
<link rel="apple-touch-icon" sizes="114x114" href="https://images.gwars.ru/img/apple114.png" />
<link rel="apple-touch-icon" sizes="144x144" href="https://images.gwars.ru/img/apple144.png" />


<link rel="stylesheet" href="https://images.gwars.ru/js/dg-picture-zoom.css?v1" type="text/css" />
<script type="text/javascript" src="https://images.gwars.ru/js/external/mootools-1.2.4-core-yc.js"></script>
<script type="text/javascript" src="https://images.gwars.ru/js/external/mootools-more.js"></script>
<script type="text/javascript" src="https://images.gwars.ru/js/dg-picture-zoom.js"></script> 
<script type="text/javascript" src="https://images.gwars.ru/js/dg-picture-zoom-autoload.js"></script>

</head>
<body onLoad='do_focus()' bgcolor=#c8dfbd background="https://images.gwars.ru/img/index-images-2.0/main_bg.jpg" leftMargin=0 topMargin=0 marginheight="0" marginwidth="0" style="height: 100%">

<script>
!function(e,t,i){"use strict";"function"==typeof define&&define.amd?define(i):"undefined"!=typeof module&&module.exports?module.exports=i():t.exports?t.exports=i():t[e]=i()}("Fingerprint2",this,function(){"use strict";var e=function(t){if(!(this instanceof e))return new e(t);var i={swfContainerId:"fingerprintjs2",swfPath:"flash/compiled/FontList.swf",detectScreenOrientation:!0,sortPluginsFor:[/palemoon/i],userDefinedFonts:[]};this.options=this.extend(t,i),this.nativeForEach=Array.prototype.forEach,this.nativeMap=Array.prototype.map};return e.prototype={extend:function(e,t){if(null==e)return t;for(var i in e)null!=e[i]&&t[i]!==e[i]&&(t[i]=e[i]);return t},get:function(e){var t=this,i={data:[],push:function(e){var i=e.key,a=e.value;"function"==typeof t.options.preprocessor&&(a=t.options.preprocessor(i,a)),this.data.push({key:i,value:a})}};i=this.userAgentKey(i),i=this.languageKey(i),i=this.colorDepthKey(i),i=this.pixelRatioKey(i),i=this.hardwareConcurrencyKey(i),i=this.screenResolutionKey(i),i=this.availableScreenResolutionKey(i),i=this.timezoneOffsetKey(i),i=this.sessionStorageKey(i),i=this.localStorageKey(i),i=this.indexedDbKey(i),i=this.addBehaviorKey(i),i=this.openDatabaseKey(i),i=this.cpuClassKey(i),i=this.platformKey(i),i=this.doNotTrackKey(i),i=this.pluginsKey(i),i=this.canvasKey(i),i=this.webglKey(i),i=this.adBlockKey(i),i=this.hasLiedLanguagesKey(i),i=this.hasLiedResolutionKey(i),i=this.hasLiedOsKey(i),i=this.hasLiedBrowserKey(i),i=this.touchSupportKey(i),i=this.customEntropyFunction(i),this.fontsKey(i,function(i){var a=[];t.each(i.data,function(e){var t=e.value;"undefined"!=typeof e.value.join&&(t=e.value.join(";")),a.push(t)});var r=t.x64hash128(a.join("~~~"),31);return e(r,i.data)})},customEntropyFunction:function(e){return"function"==typeof this.options.customFunction&&e.push({key:"custom",value:this.options.customFunction()}),e},userAgentKey:function(e){return this.options.excludeUserAgent||e.push({key:"user_agent",value:this.getUserAgent()}),e},getUserAgent:function(){return navigator.userAgent},languageKey:function(e){return this.options.excludeLanguage||e.push({key:"language",value:navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage||""}),e},colorDepthKey:function(e){return this.options.excludeColorDepth||e.push({key:"color_depth",value:screen.colorDepth||-1}),e},pixelRatioKey:function(e){return this.options.excludePixelRatio||e.push({key:"pixel_ratio",value:this.getPixelRatio()}),e},getPixelRatio:function(){return window.devicePixelRatio||""},screenResolutionKey:function(e){return this.options.excludeScreenResolution?e:this.getScreenResolution(e)},getScreenResolution:function(e){var t;return t=this.options.detectScreenOrientation&&screen.height>screen.width?[screen.height,screen.width]:[screen.width,screen.height],"undefined"!=typeof t&&e.push({key:"resolution",value:t}),e},availableScreenResolutionKey:function(e){return this.options.excludeAvailableScreenResolution?e:this.getAvailableScreenResolution(e)},getAvailableScreenResolution:function(e){var t;return screen.availWidth&&screen.availHeight&&(t=this.options.detectScreenOrientation?screen.availHeight>screen.availWidth?[screen.availHeight,screen.availWidth]:[screen.availWidth,screen.availHeight]:[screen.availHeight,screen.availWidth]),"undefined"!=typeof t&&e.push({key:"available_resolution",value:t}),e},timezoneOffsetKey:function(e){return this.options.excludeTimezoneOffset||e.push({key:"timezone_offset",value:(new Date).getTimezoneOffset()}),e},sessionStorageKey:function(e){return!this.options.excludeSessionStorage&&this.hasSessionStorage()&&e.push({key:"session_storage",value:1}),e},localStorageKey:function(e){return!this.options.excludeSessionStorage&&this.hasLocalStorage()&&e.push({key:"local_storage",value:1}),e},indexedDbKey:function(e){return!this.options.excludeIndexedDB&&this.hasIndexedDB()&&e.push({key:"indexed_db",value:1}),e},addBehaviorKey:function(e){return document.body&&!this.options.excludeAddBehavior&&document.body.addBehavior&&e.push({key:"add_behavior",value:1}),e},openDatabaseKey:function(e){return!this.options.excludeOpenDatabase&&window.openDatabase&&e.push({key:"open_database",value:1}),e},cpuClassKey:function(e){return this.options.excludeCpuClass||e.push({key:"cpu_class",value:this.getNavigatorCpuClass()}),e},platformKey:function(e){return this.options.excludePlatform||e.push({key:"navigator_platform",value:this.getNavigatorPlatform()}),e},doNotTrackKey:function(e){return this.options.excludeDoNotTrack||e.push({key:"do_not_track",value:this.getDoNotTrack()}),e},canvasKey:function(e){return!this.options.excludeCanvas&&this.isCanvasSupported()&&e.push({key:"canvas",value:this.getCanvasFp()}),e},webglKey:function(e){return this.options.excludeWebGL?e:this.isWebGlSupported()?(e.push({key:"webgl",value:this.getWebglFp()}),e):e},adBlockKey:function(e){return this.options.excludeAdBlock||e.push({key:"adblock",value:this.getAdBlock()}),e},hasLiedLanguagesKey:function(e){return this.options.excludeHasLiedLanguages||e.push({key:"has_lied_languages",value:this.getHasLiedLanguages()}),e},hasLiedResolutionKey:function(e){return this.options.excludeHasLiedResolution||e.push({key:"has_lied_resolution",value:this.getHasLiedResolution()}),e},hasLiedOsKey:function(e){return this.options.excludeHasLiedOs||e.push({key:"has_lied_os",value:this.getHasLiedOs()}),e},hasLiedBrowserKey:function(e){return this.options.excludeHasLiedBrowser||e.push({key:"has_lied_browser",value:this.getHasLiedBrowser()}),e},fontsKey:function(e,t){return this.options.excludeJsFonts?this.flashFontsKey(e,t):this.jsFontsKey(e,t)},flashFontsKey:function(e,t){return this.options.excludeFlashFonts?t(e):this.hasSwfObjectLoaded()&&this.hasMinFlashInstalled()?"undefined"==typeof this.options.swfPath?t(e):void this.loadSwfAndDetectFonts(function(i){e.push({key:"swf_fonts",value:i.join(";")}),t(e)}):t(e)},jsFontsKey:function(e,t){var i=this;return setTimeout(function(){var a=["monospace","sans-serif","serif"],r=["Andale Mono","Arial","Arial Black","Arial Hebrew","Arial MT","Arial Narrow","Arial Rounded MT Bold","Arial Unicode MS","Bitstream Vera Sans Mono","Book Antiqua","Bookman Old Style","Calibri","Cambria","Cambria Math","Century","Century Gothic","Century Schoolbook","Comic Sans","Comic Sans MS","Consolas","Courier","Courier New","Garamond","Geneva","Georgia","Helvetica","Helvetica Neue","Impact","Lucida Bright","Lucida Calligraphy","Lucida Console","Lucida Fax","LUCIDA GRANDE","Lucida Handwriting","Lucida Sans","Lucida Sans Typewriter","Lucida Sans Unicode","Microsoft Sans Serif","Monaco","Monotype Corsiva","MS Gothic","MS Outlook","MS PGothic","MS Reference Sans Serif","MS Sans Serif","MS Serif","MYRIAD","MYRIAD PRO","Palatino","Palatino Linotype","Segoe Print","Segoe Script","Segoe UI","Segoe UI Light","Segoe UI Semibold","Segoe UI Symbol","Tahoma","Times","Times New Roman","Times New Roman PS","Trebuchet MS","Verdana","Wingdings","Wingdings 2","Wingdings 3"],n=["Abadi MT Condensed Light","Academy Engraved LET","ADOBE CASLON PRO","Adobe Garamond","ADOBE GARAMOND PRO","Agency FB","Aharoni","Albertus Extra Bold","Albertus Medium","Algerian","Amazone BT","American Typewriter","American Typewriter Condensed","AmerType Md BT","Andalus","Angsana New","AngsanaUPC","Antique Olive","Aparajita","Apple Chancery","Apple Color Emoji","Apple SD Gothic Neo","Arabic Typesetting","ARCHER","ARNO PRO","Arrus BT","Aurora Cn BT","AvantGarde Bk BT","AvantGarde Md BT","AVENIR","Ayuthaya","Bandy","Bangla Sangam MN","Bank Gothic","BankGothic Md BT","Baskerville","Baskerville Old Face","Batang","BatangChe","Bauer Bodoni","Bauhaus 93","Bazooka","Bell MT","Bembo","Benguiat Bk BT","Berlin Sans FB","Berlin Sans FB Demi","Bernard MT Condensed","BernhardFashion BT","BernhardMod BT","Big Caslon","BinnerD","Blackadder ITC","BlairMdITC TT","Bodoni 72","Bodoni 72 Oldstyle","Bodoni 72 Smallcaps","Bodoni MT","Bodoni MT Black","Bodoni MT Condensed","Bodoni MT Poster Compressed","Bookshelf Symbol 7","Boulder","Bradley Hand","Bradley Hand ITC","Bremen Bd BT","Britannic Bold","Broadway","Browallia New","BrowalliaUPC","Brush Script MT","Californian FB","Calisto MT","Calligrapher","Candara","CaslonOpnface BT","Castellar","Centaur","Cezanne","CG Omega","CG Times","Chalkboard","Chalkboard SE","Chalkduster","Charlesworth","Charter Bd BT","Charter BT","Chaucer","ChelthmITC Bk BT","Chiller","Clarendon","Clarendon Condensed","CloisterBlack BT","Cochin","Colonna MT","Constantia","Cooper Black","Copperplate","Copperplate Gothic","Copperplate Gothic Bold","Copperplate Gothic Light","CopperplGoth Bd BT","Corbel","Cordia New","CordiaUPC","Cornerstone","Coronet","Cuckoo","Curlz MT","DaunPenh","Dauphin","David","DB LCD Temp","DELICIOUS","Denmark","DFKai-SB","Didot","DilleniaUPC","DIN","DokChampa","Dotum","DotumChe","Ebrima","Edwardian Script ITC","Elephant","English 111 Vivace BT","Engravers MT","EngraversGothic BT","Eras Bold ITC","Eras Demi ITC","Eras Light ITC","Eras Medium ITC","EucrosiaUPC","Euphemia","Euphemia UCAS","EUROSTILE","Exotc350 Bd BT","FangSong","Felix Titling","Fixedsys","FONTIN","Footlight MT Light","Forte","FrankRuehl","Fransiscan","Freefrm721 Blk BT","FreesiaUPC","Freestyle Script","French Script MT","FrnkGothITC Bk BT","Fruitger","FRUTIGER","Futura","Futura Bk BT","Futura Lt BT","Futura Md BT","Futura ZBlk BT","FuturaBlack BT","Gabriola","Galliard BT","Gautami","Geeza Pro","Geometr231 BT","Geometr231 Hv BT","Geometr231 Lt BT","GeoSlab 703 Lt BT","GeoSlab 703 XBd BT","Gigi","Gill Sans","Gill Sans MT","Gill Sans MT Condensed","Gill Sans MT Ext Condensed Bold","Gill Sans Ultra Bold","Gill Sans Ultra Bold Condensed","Gisha","Gloucester MT Extra Condensed","GOTHAM","GOTHAM BOLD","Goudy Old Style","Goudy Stout","GoudyHandtooled BT","GoudyOLSt BT","Gujarati Sangam MN","Gulim","GulimChe","Gungsuh","GungsuhChe","Gurmukhi MN","Haettenschweiler","Harlow Solid Italic","Harrington","Heather","Heiti SC","Heiti TC","HELV","Herald","High Tower Text","Hiragino Kaku Gothic ProN","Hiragino Mincho ProN","Hoefler Text","Humanst 521 Cn BT","Humanst521 BT","Humanst521 Lt BT","Imprint MT Shadow","Incised901 Bd BT","Incised901 BT","Incised901 Lt BT","INCONSOLATA","Informal Roman","Informal011 BT","INTERSTATE","IrisUPC","Iskoola Pota","JasmineUPC","Jazz LET","Jenson","Jester","Jokerman","Juice ITC","Kabel Bk BT","Kabel Ult BT","Kailasa","KaiTi","Kalinga","Kannada Sangam MN","Kartika","Kaufmann Bd BT","Kaufmann BT","Khmer UI","KodchiangUPC","Kokila","Korinna BT","Kristen ITC","Krungthep","Kunstler Script","Lao UI","Latha","Leelawadee","Letter Gothic","Levenim MT","LilyUPC","Lithograph","Lithograph Light","Long Island","Lydian BT","Magneto","Maiandra GD","Malayalam Sangam MN","Malgun Gothic","Mangal","Marigold","Marion","Marker Felt","Market","Marlett","Matisse ITC","Matura MT Script Capitals","Meiryo","Meiryo UI","Microsoft Himalaya","Microsoft JhengHei","Microsoft New Tai Lue","Microsoft PhagsPa","Microsoft Tai Le","Microsoft Uighur","Microsoft YaHei","Microsoft Yi Baiti","MingLiU","MingLiU_HKSCS","MingLiU_HKSCS-ExtB","MingLiU-ExtB","Minion","Minion Pro","Miriam","Miriam Fixed","Mistral","Modern","Modern No. 20","Mona Lisa Solid ITC TT","Mongolian Baiti","MONO","MoolBoran","Mrs Eaves","MS LineDraw","MS Mincho","MS PMincho","MS Reference Specialty","MS UI Gothic","MT Extra","MUSEO","MV Boli","Nadeem","Narkisim","NEVIS","News Gothic","News GothicMT","NewsGoth BT","Niagara Engraved","Niagara Solid","Noteworthy","NSimSun","Nyala","OCR A Extended","Old Century","Old English Text MT","Onyx","Onyx BT","OPTIMA","Oriya Sangam MN","OSAKA","OzHandicraft BT","Palace Script MT","Papyrus","Parchment","Party LET","Pegasus","Perpetua","Perpetua Titling MT","PetitaBold","Pickwick","Plantagenet Cherokee","Playbill","PMingLiU","PMingLiU-ExtB","Poor Richard","Poster","PosterBodoni BT","PRINCETOWN LET","Pristina","PTBarnum BT","Pythagoras","Raavi","Rage Italic","Ravie","Ribbon131 Bd BT","Rockwell","Rockwell Condensed","Rockwell Extra Bold","Rod","Roman","Sakkal Majalla","Santa Fe LET","Savoye LET","Sceptre","Script","Script MT Bold","SCRIPTINA","Serifa","Serifa BT","Serifa Th BT","ShelleyVolante BT","Sherwood","Shonar Bangla","Showcard Gothic","Shruti","Signboard","SILKSCREEN","SimHei","Simplified Arabic","Simplified Arabic Fixed","SimSun","SimSun-ExtB","Sinhala Sangam MN","Sketch Rockwell","Skia","Small Fonts","Snap ITC","Snell Roundhand","Socket","Souvenir Lt BT","Staccato222 BT","Steamer","Stencil","Storybook","Styllo","Subway","Swis721 BlkEx BT","Swiss911 XCm BT","Sylfaen","Synchro LET","System","Tamil Sangam MN","Technical","Teletype","Telugu Sangam MN","Tempus Sans ITC","Terminal","Thonburi","Traditional Arabic","Trajan","TRAJAN PRO","Tristan","Tubular","Tunga","Tw Cen MT","Tw Cen MT Condensed","Tw Cen MT Condensed Extra Bold","TypoUpright BT","Unicorn","Univers","Univers CE 55 Medium","Univers Condensed","Utsaah","Vagabond","Vani","Vijaya","Viner Hand ITC","VisualUI","Vivaldi","Vladimir Script","Vrinda","Westminster","WHITNEY","Wide Latin","ZapfEllipt BT","ZapfHumnst BT","ZapfHumnst Dm BT","Zapfino","Zurich BlkEx BT","Zurich Ex BT","ZWAdobeF"];i.options.extendedJsFonts&&(r=r.concat(n)),r=r.concat(i.options.userDefinedFonts);var o="mmmmmmmmmmlli",s="72px",l=document.getElementsByTagName("body")[0],h=document.createElement("div"),u=document.createElement("div"),c={},d={},g=function(){var e=document.createElement("span");return e.style.position="absolute",e.style.left="-9999px",e.style.fontSize=s,e.style.lineHeight="normal",e.innerHTML=o,e},p=function(e,t){var i=g();return i.style.fontFamily="'"+e+"',"+t,i},f=function(){for(var e=[],t=0,i=a.length;t<i;t++){var r=g();r.style.fontFamily=a[t],h.appendChild(r),e.push(r)}return e},m=function(){for(var e={},t=0,i=r.length;t<i;t++){for(var n=[],o=0,s=a.length;o<s;o++){var l=p(r[t],a[o]);u.appendChild(l),n.push(l)}e[r[t]]=n}return e},T=function(e){for(var t=!1,i=0;i<a.length;i++)if(t=e[i].offsetWidth!==c[a[i]]||e[i].offsetHeight!==d[a[i]])return t;return t},S=f();l.appendChild(h);for(var x=0,v=a.length;x<v;x++)c[a[x]]=S[x].offsetWidth,d[a[x]]=S[x].offsetHeight;var E=m();l.appendChild(u);for(var M=[],A=0,y=r.length;A<y;A++)T(E[r[A]])&&M.push(r[A]);l.removeChild(u),l.removeChild(h),e.push({key:"js_fonts",value:M}),t(e)},1)},pluginsKey:function(e){return this.options.excludePlugins||(this.isIE()?this.options.excludeIEPlugins||e.push({key:"ie_plugins",value:this.getIEPlugins()}):e.push({key:"regular_plugins",value:this.getRegularPlugins()})),e},getRegularPlugins:function(){for(var e=[],t=0,i=navigator.plugins.length;t<i;t++)e.push(navigator.plugins[t]);return this.pluginsShouldBeSorted()&&(e=e.sort(function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})),this.map(e,function(e){var t=this.map(e,function(e){return[e.type,e.suffixes].join("~")}).join(",");return[e.name,e.description,t].join("::")},this)},getIEPlugins:function(){var e=[];if(Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(window,"ActiveXObject")||"ActiveXObject"in window){var t=["AcroPDF.PDF","Adodb.Stream","AgControl.AgControl","DevalVRXCtrl.DevalVRXCtrl.1","MacromediaFlashPaper.MacromediaFlashPaper","Msxml2.DOMDocument","Msxml2.XMLHTTP","PDF.PdfCtrl","QuickTime.QuickTime","QuickTimeCheckObject.QuickTimeCheck.1","RealPlayer","RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","RealVideo.RealVideo(tm) ActiveX Control (32-bit)","Scripting.Dictionary","SWCtl.SWCtl","Shell.UIHelper","ShockwaveFlash.ShockwaveFlash","Skype.Detection","TDCCtl.TDCCtl","WMPlayer.OCX","rmocx.RealPlayer G2 Control","rmocx.RealPlayer G2 Control.1"];e=this.map(t,function(e){try{return new ActiveXObject(e),e}catch(t){return null}})}return navigator.plugins&&(e=e.concat(this.getRegularPlugins())),e},pluginsShouldBeSorted:function(){for(var e=!1,t=0,i=this.options.sortPluginsFor.length;t<i;t++){var a=this.options.sortPluginsFor[t];if(navigator.userAgent.match(a)){e=!0;break}}return e},touchSupportKey:function(e){return this.options.excludeTouchSupport||e.push({key:"touch_support",value:this.getTouchSupport()}),e},hardwareConcurrencyKey:function(e){return this.options.excludeHardwareConcurrency||e.push({key:"hardware_concurrency",value:this.getHardwareConcurrency()}),e},hasSessionStorage:function(){try{return!!window.sessionStorage}catch(e){return!0}},hasLocalStorage:function(){try{return!!window.localStorage}catch(e){return!0}},hasIndexedDB:function(){try{return!!window.indexedDB}catch(e){return!0}},getHardwareConcurrency:function(){return navigator.hardwareConcurrency?navigator.hardwareConcurrency:"unknown"},getNavigatorCpuClass:function(){return navigator.cpuClass?navigator.cpuClass:"unknown"},getNavigatorPlatform:function(){return navigator.platform?navigator.platform:"unknown"},getDoNotTrack:function(){return navigator.doNotTrack?navigator.doNotTrack:navigator.msDoNotTrack?navigator.msDoNotTrack:window.doNotTrack?window.doNotTrack:"unknown"},getTouchSupport:function(){var e=0,t=!1;"undefined"!=typeof navigator.maxTouchPoints?e=navigator.maxTouchPoints:"undefined"!=typeof navigator.msMaxTouchPoints&&(e=navigator.msMaxTouchPoints);try{document.createEvent("TouchEvent"),t=!0}catch(i){}var a="ontouchstart"in window;return[e,t,a]},getCanvasFp:function(){var e=[],t=document.createElement("canvas");t.width=2e3,t.height=200,t.style.display="inline";var i=t.getContext("2d");return i.rect(0,0,10,10),i.rect(2,2,6,6),e.push("canvas winding:"+(i.isPointInPath(5,5,"evenodd")===!1?"yes":"no")),i.textBaseline="alphabetic",i.fillStyle="#f60",i.fillRect(125,1,62,20),i.fillStyle="#069",this.options.dontUseFakeFontInCanvas?i.font="11pt Arial":i.font="11pt no-real-font-123",i.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03",2,15),i.fillStyle="rgba(102, 204, 0, 0.2)",i.font="18pt Arial",i.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03",4,45),i.globalCompositeOperation="multiply",i.fillStyle="rgb(255,0,255)",i.beginPath(),i.arc(50,50,50,0,2*Math.PI,!0),i.closePath(),i.fill(),i.fillStyle="rgb(0,255,255)",i.beginPath(),i.arc(100,50,50,0,2*Math.PI,!0),i.closePath(),i.fill(),i.fillStyle="rgb(255,255,0)",i.beginPath(),i.arc(75,100,50,0,2*Math.PI,!0),i.closePath(),i.fill(),i.fillStyle="rgb(255,0,255)",i.arc(75,75,75,0,2*Math.PI,!0),i.arc(75,75,25,0,2*Math.PI,!0),i.fill("evenodd"),e.push("canvas fp:"+t.toDataURL()),e.join("~")},getWebglFp:function(){var e,t=function(t){return e.clearColor(0,0,0,1),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),"["+t[0]+", "+t[1]+"]"},i=function(e){var t,i=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic");return i?(t=e.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT),0===t&&(t=2),t):null};if(e=this.getWebglCanvas(),!e)return null;var a=[],r="attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}",n="precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}",o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o);var s=new Float32Array([-.2,-.9,0,.4,-.26,0,0,.732134444,0]);e.bufferData(e.ARRAY_BUFFER,s,e.STATIC_DRAW),o.itemSize=3,o.numItems=3;var l=e.createProgram(),h=e.createShader(e.VERTEX_SHADER);e.shaderSource(h,r),e.compileShader(h);var u=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(u,n),e.compileShader(u),e.attachShader(l,h),e.attachShader(l,u),e.linkProgram(l),e.useProgram(l),l.vertexPosAttrib=e.getAttribLocation(l,"attrVertex"),l.offsetUniform=e.getUniformLocation(l,"uniformOffset"),e.enableVertexAttribArray(l.vertexPosArray),e.vertexAttribPointer(l.vertexPosAttrib,o.itemSize,e.FLOAT,!1,0,0),e.uniform2f(l.offsetUniform,1,1),e.drawArrays(e.TRIANGLE_STRIP,0,o.numItems),null!=e.canvas&&a.push(e.canvas.toDataURL()),a.push("extensions:"+e.getSupportedExtensions().join(";")),a.push("webgl aliased line width range:"+t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))),a.push("webgl aliased point size range:"+t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))),a.push("webgl alpha bits:"+e.getParameter(e.ALPHA_BITS)),a.push("webgl antialiasing:"+(e.getContextAttributes().antialias?"yes":"no")),a.push("webgl blue bits:"+e.getParameter(e.BLUE_BITS)),a.push("webgl depth bits:"+e.getParameter(e.DEPTH_BITS)),a.push("webgl green bits:"+e.getParameter(e.GREEN_BITS)),a.push("webgl max anisotropy:"+i(e)),a.push("webgl max combined texture image units:"+e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),a.push("webgl max cube map texture size:"+e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)),a.push("webgl max fragment uniform vectors:"+e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)),a.push("webgl max render buffer size:"+e.getParameter(e.MAX_RENDERBUFFER_SIZE)),a.push("webgl max texture image units:"+e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)),a.push("webgl max texture size:"+e.getParameter(e.MAX_TEXTURE_SIZE)),a.push("webgl max varying vectors:"+e.getParameter(e.MAX_VARYING_VECTORS)),a.push("webgl max vertex attribs:"+e.getParameter(e.MAX_VERTEX_ATTRIBS)),a.push("webgl max vertex texture image units:"+e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),a.push("webgl max vertex uniform vectors:"+e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)),a.push("webgl max viewport dims:"+t(e.getParameter(e.MAX_VIEWPORT_DIMS))),a.push("webgl red bits:"+e.getParameter(e.RED_BITS)),a.push("webgl renderer:"+e.getParameter(e.RENDERER)),a.push("webgl shading language version:"+e.getParameter(e.SHADING_LANGUAGE_VERSION)),a.push("webgl stencil bits:"+e.getParameter(e.STENCIL_BITS)),a.push("webgl vendor:"+e.getParameter(e.VENDOR)),a.push("webgl version:"+e.getParameter(e.VERSION));try{var c=e.getExtension("WEBGL_debug_renderer_info");c&&(a.push("webgl unmasked vendor:"+e.getParameter(c.UNMASKED_VENDOR_WEBGL)),a.push("webgl unmasked renderer:"+e.getParameter(c.UNMASKED_RENDERER_WEBGL)))}catch(d){}return e.getShaderPrecisionFormat?(a.push("webgl vertex shader high float precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision),a.push("webgl vertex shader high float precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).rangeMin),a.push("webgl vertex shader high float precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).rangeMax),a.push("webgl vertex shader medium float precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision),a.push("webgl vertex shader medium float precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).rangeMin),a.push("webgl vertex shader medium float precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).rangeMax),a.push("webgl vertex shader low float precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_FLOAT).precision),a.push("webgl vertex shader low float precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_FLOAT).rangeMin),a.push("webgl vertex shader low float precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_FLOAT).rangeMax),a.push("webgl fragment shader high float precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision),a.push("webgl fragment shader high float precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).rangeMin),a.push("webgl fragment shader high float precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).rangeMax),a.push("webgl fragment shader medium float precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision),a.push("webgl fragment shader medium float precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).rangeMin),a.push("webgl fragment shader medium float precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).rangeMax),a.push("webgl fragment shader low float precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_FLOAT).precision),a.push("webgl fragment shader low float precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_FLOAT).rangeMin),a.push("webgl fragment shader low float precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_FLOAT).rangeMax),a.push("webgl vertex shader high int precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_INT).precision),a.push("webgl vertex shader high int precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_INT).rangeMin),a.push("webgl vertex shader high int precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_INT).rangeMax),a.push("webgl vertex shader medium int precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_INT).precision),a.push("webgl vertex shader medium int precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_INT).rangeMin),a.push("webgl vertex shader medium int precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_INT).rangeMax),a.push("webgl vertex shader low int precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_INT).precision),a.push("webgl vertex shader low int precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_INT).rangeMin),a.push("webgl vertex shader low int precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_INT).rangeMax),a.push("webgl fragment shader high int precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_INT).precision),a.push("webgl fragment shader high int precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_INT).rangeMin),a.push("webgl fragment shader high int precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_INT).rangeMax),a.push("webgl fragment shader medium int precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_INT).precision),a.push("webgl fragment shader medium int precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_INT).rangeMin),a.push("webgl fragment shader medium int precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_INT).rangeMax),a.push("webgl fragment shader low int precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_INT).precision),a.push("webgl fragment shader low int precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_INT).rangeMin),a.push("webgl fragment shader low int precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_INT).rangeMax),a.join("~")):a.join("~")},getAdBlock:function(){var e=document.createElement("div");e.innerHTML="&nbsp;",e.className="adsbox";var t=!1;try{document.body.appendChild(e),t=0===document.getElementsByClassName("adsbox")[0].offsetHeight,document.body.removeChild(e)}catch(i){t=!1}return t},getHasLiedLanguages:function(){if("undefined"!=typeof navigator.languages)try{var e=navigator.languages[0].substr(0,2);if(e!==navigator.language.substr(0,2))return!0}catch(t){return!0}return!1},getHasLiedResolution:function(){return screen.width<screen.availWidth||screen.height<screen.availHeight},getHasLiedOs:function(){var e,t=navigator.userAgent.toLowerCase(),i=navigator.oscpu,a=navigator.platform.toLowerCase();e=t.indexOf("windows phone")>=0?"Windows Phone":t.indexOf("win")>=0?"Windows":t.indexOf("android")>=0?"Android":t.indexOf("linux")>=0?"Linux":t.indexOf("iphone")>=0||t.indexOf("ipad")>=0?"iOS":t.indexOf("mac")>=0?"Mac":"Other";var r;if(r="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,r&&"Windows Phone"!==e&&"Android"!==e&&"iOS"!==e&&"Other"!==e)return!0;if("undefined"!=typeof i){if(i=i.toLowerCase(),i.indexOf("win")>=0&&"Windows"!==e&&"Windows Phone"!==e)return!0;if(i.indexOf("linux")>=0&&"Linux"!==e&&"Android"!==e)return!0;if(i.indexOf("mac")>=0&&"Mac"!==e&&"iOS"!==e)return!0;if(0===i.indexOf("win")&&0===i.indexOf("linux")&&i.indexOf("mac")>=0&&"other"!==e)return!0}return a.indexOf("win")>=0&&"Windows"!==e&&"Windows Phone"!==e||((a.indexOf("linux")>=0||a.indexOf("android")>=0||a.indexOf("pike")>=0)&&"Linux"!==e&&"Android"!==e||((a.indexOf("mac")>=0||a.indexOf("ipad")>=0||a.indexOf("ipod")>=0||a.indexOf("iphone")>=0)&&"Mac"!==e&&"iOS"!==e||(0===a.indexOf("win")&&0===a.indexOf("linux")&&a.indexOf("mac")>=0&&"other"!==e||"undefined"==typeof navigator.plugins&&"Windows"!==e&&"Windows Phone"!==e)))},getHasLiedBrowser:function(){var e,t=navigator.userAgent.toLowerCase(),i=navigator.productSub;if(e=t.indexOf("firefox")>=0?"Firefox":t.indexOf("opera")>=0||t.indexOf("opr")>=0?"Opera":t.indexOf("chrome")>=0?"Chrome":t.indexOf("safari")>=0?"Safari":t.indexOf("trident")>=0?"Internet Explorer":"Other",("Chrome"===e||"Safari"===e||"Opera"===e)&&"20030107"!==i)return!0;var a=eval.toString().length;if(37===a&&"Safari"!==e&&"Firefox"!==e&&"Other"!==e)return!0;if(39===a&&"Internet Explorer"!==e&&"Other"!==e)return!0;if(33===a&&"Chrome"!==e&&"Opera"!==e&&"Other"!==e)return!0;var r;try{throw"a"}catch(n){try{n.toSource(),r=!0}catch(o){r=!1}}return!(!r||"Firefox"===e||"Other"===e)},isCanvasSupported:function(){var e=document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},isWebGlSupported:function(){if(!this.isCanvasSupported())return!1;var e,t=document.createElement("canvas");try{e=t.getContext&&(t.getContext("webgl")||t.getContext("experimental-webgl"))}catch(i){e=!1}return!!window.WebGLRenderingContext&&!!e},isIE:function(){return"Microsoft Internet Explorer"===navigator.appName||!("Netscape"!==navigator.appName||!/Trident/.test(navigator.userAgent))},hasSwfObjectLoaded:function(){return"undefined"!=typeof window.swfobject},hasMinFlashInstalled:function(){return swfobject.hasFlashPlayerVersion("9.0.0")},addFlashDivNode:function(){var e=document.createElement("div");e.setAttribute("id",this.options.swfContainerId),document.body.appendChild(e)},loadSwfAndDetectFonts:function(e){var t="___fp_swf_loaded";window[t]=function(t){e(t)};var i=this.options.swfContainerId;this.addFlashDivNode();var a={onReady:t},r={allowScriptAccess:"always",menu:"false"};swfobject.embedSWF(this.options.swfPath,i,"1","1","9.0.0",!1,a,r,{})},getWebglCanvas:function(){var e=document.createElement("canvas"),t=null;try{t=e.getContext("webgl")||e.getContext("experimental-webgl")}catch(i){}return t||(t=null),t},each:function(e,t,i){if(null!==e)if(this.nativeForEach&&e.forEach===this.nativeForEach)e.forEach(t,i);else if(e.length===+e.length){for(var a=0,r=e.length;a<r;a++)if(t.call(i,e[a],a,e)==={})return}else for(var n in e)if(e.hasOwnProperty(n)&&t.call(i,e[n],n,e)==={})return},map:function(e,t,i){var a=[];return null==e?a:this.nativeMap&&e.map===this.nativeMap?e.map(t,i):(this.each(e,function(e,r,n){a[a.length]=t.call(i,e,r,n)}),a)},x64Add:function(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var i=[0,0,0,0];return i[3]+=e[3]+t[3],i[2]+=i[3]>>>16,i[3]&=65535,i[2]+=e[2]+t[2],i[1]+=i[2]>>>16,i[2]&=65535,i[1]+=e[1]+t[1],i[0]+=i[1]>>>16,i[1]&=65535,i[0]+=e[0]+t[0],i[0]&=65535,[i[0]<<16|i[1],i[2]<<16|i[3]]},x64Multiply:function(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var i=[0,0,0,0];return i[3]+=e[3]*t[3],i[2]+=i[3]>>>16,i[3]&=65535,i[2]+=e[2]*t[3],i[1]+=i[2]>>>16,i[2]&=65535,i[2]+=e[3]*t[2],i[1]+=i[2]>>>16,i[2]&=65535,i[1]+=e[1]*t[3],i[0]+=i[1]>>>16,i[1]&=65535,i[1]+=e[2]*t[2],i[0]+=i[1]>>>16,i[1]&=65535,i[1]+=e[3]*t[1],i[0]+=i[1]>>>16,i[1]&=65535,i[0]+=e[0]*t[3]+e[1]*t[2]+e[2]*t[1]+e[3]*t[0],i[0]&=65535,[i[0]<<16|i[1],i[2]<<16|i[3]]},x64Rotl:function(e,t){return t%=64,32===t?[e[1],e[0]]:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t|e[0]>>>32-t]:(t-=32,[e[1]<<t|e[0]>>>32-t,e[0]<<t|e[1]>>>32-t])},x64LeftShift:function(e,t){return t%=64,0===t?e:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t]:[e[1]<<t-32,0]},x64Xor:function(e,t){return[e[0]^t[0],e[1]^t[1]]},x64Fmix:function(e){return e=this.x64Xor(e,[0,e[0]>>>1]),e=this.x64Multiply(e,[4283543511,3981806797]),e=this.x64Xor(e,[0,e[0]>>>1]),e=this.x64Multiply(e,[3301882366,444984403]),e=this.x64Xor(e,[0,e[0]>>>1])},x64hash128:function(e,t){
e=e||"",t=t||0;for(var i=e.length%16,a=e.length-i,r=[0,t],n=[0,t],o=[0,0],s=[0,0],l=[2277735313,289559509],h=[1291169091,658871167],u=0;u<a;u+=16)o=[255&e.charCodeAt(u+4)|(255&e.charCodeAt(u+5))<<8|(255&e.charCodeAt(u+6))<<16|(255&e.charCodeAt(u+7))<<24,255&e.charCodeAt(u)|(255&e.charCodeAt(u+1))<<8|(255&e.charCodeAt(u+2))<<16|(255&e.charCodeAt(u+3))<<24],s=[255&e.charCodeAt(u+12)|(255&e.charCodeAt(u+13))<<8|(255&e.charCodeAt(u+14))<<16|(255&e.charCodeAt(u+15))<<24,255&e.charCodeAt(u+8)|(255&e.charCodeAt(u+9))<<8|(255&e.charCodeAt(u+10))<<16|(255&e.charCodeAt(u+11))<<24],o=this.x64Multiply(o,l),o=this.x64Rotl(o,31),o=this.x64Multiply(o,h),r=this.x64Xor(r,o),r=this.x64Rotl(r,27),r=this.x64Add(r,n),r=this.x64Add(this.x64Multiply(r,[0,5]),[0,1390208809]),s=this.x64Multiply(s,h),s=this.x64Rotl(s,33),s=this.x64Multiply(s,l),n=this.x64Xor(n,s),n=this.x64Rotl(n,31),n=this.x64Add(n,r),n=this.x64Add(this.x64Multiply(n,[0,5]),[0,944331445]);switch(o=[0,0],s=[0,0],i){case 15:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(u+14)],48));case 14:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(u+13)],40));case 13:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(u+12)],32));case 12:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(u+11)],24));case 11:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(u+10)],16));case 10:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(u+9)],8));case 9:s=this.x64Xor(s,[0,e.charCodeAt(u+8)]),s=this.x64Multiply(s,h),s=this.x64Rotl(s,33),s=this.x64Multiply(s,l),n=this.x64Xor(n,s);case 8:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(u+7)],56));case 7:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(u+6)],48));case 6:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(u+5)],40));case 5:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(u+4)],32));case 4:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(u+3)],24));case 3:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(u+2)],16));case 2:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(u+1)],8));case 1:o=this.x64Xor(o,[0,e.charCodeAt(u)]),o=this.x64Multiply(o,l),o=this.x64Rotl(o,31),o=this.x64Multiply(o,h),r=this.x64Xor(r,o)}return r=this.x64Xor(r,[0,e.length]),n=this.x64Xor(n,[0,e.length]),r=this.x64Add(r,n),n=this.x64Add(n,r),r=this.x64Fmix(r),n=this.x64Fmix(n),r=this.x64Add(r,n),n=this.x64Add(n,r),("00000000"+(r[0]>>>0).toString(16)).slice(-8)+("00000000"+(r[1]>>>0).toString(16)).slice(-8)+("00000000"+(n[0]>>>0).toString(16)).slice(-8)+("00000000"+(n[1]>>>0).toString(16)).slice(-8)}},e.VERSION="1.5.1",e});function collectinfo() {
var height=0;
var width=0;
var cd=screen.colorDepth;
//document.forms.loginform.pass1.value=document.forms.loginform.pass.value;
//document.forms.loginform.pwdmd5.value=hex_md5(document.forms.loginform.pass.value+'119.23-2021-213-6');
//document.forms.loginform.pass.value='';
if (self.screen) {     
        width = screen.width
        height = screen.height
} else if (self.java) {   
       var jkit = java.awt.Toolkit.getDefaultToolkit();
       var scrsize = jkit.getScreenSize();       
       width = scrsize.width; 
       height = scrsize.height; 
}
var t=new Date();
document.forms.loginform.resl.value=width+'x'+height+'@'+cd+', '+t;
document.forms.loginform.time.value=t.getHours()*60*60+t.getMinutes()*60+t.getSeconds();;
document.forms.loginform.date.value=t.getDate();
return true;
 }
new Fingerprint2().get(function(result, components){ document.forms.myform.brdata.value=result; });
</script>
<script>
 /* JS MD5 Version 2.1 Copyright (C) Paul Johnston 1999 - 2002. */
var hexcase = 0;   /* hex output format. 0 - lowercase; 1 - uppercase        */
var chrsz   = 8;   /* bits per input character. 8 - ASCII; 16 - Unicode      */
function hex_md5(s){ return  binl2hex(core_md5(str2binl(s), s.length * chrsz));}

function  core_md5(x, len)
{
   /* append padding */
  x[len >> 5] |= 0x80 << ((len) % 32 );
  x[(((len + 64) >>> 9) << 4) + 14 ] = len;

  var a =  1732584193 ;
  var b = -271733879 ;
  var c = -1732584194 ;
  var d =  271733878 ;

  for(var i = 0; i < x.length; i += 16 )
  {
    var  olda = a;
    var  oldb = b;
    var  oldc = c;
    var  oldd = d;

    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936 );
    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586 );
    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819 );
    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330 );
    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897 );
    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426 );
    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341 );
    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983 );
    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416 );
    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417 );
    c = md5_ff(c, d, a, b, x[i+ 10], 17, -42063 );
    b = md5_ff(b, c, d, a, x[i+ 11], 22, -1990404162 );
    a = md5_ff(a, b, c, d, x[i+ 12], 7 ,  1804603682 );
    d = md5_ff(d, a, b, c, x[i+ 13], 12, -40341101 );
    c = md5_ff(c, d, a, b, x[i+ 14], 17, -1502002290 );
    b = md5_ff(b, c, d, a, x[i+ 15], 22,  1236535329 );

    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510 );
    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632 );
    c = md5_gg(c, d, a, b, x[i+ 11], 14,  643717713 );
    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302 );
    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691 );
    d = md5_gg(d, a, b, c, x[i+ 10], 9 ,  38016083 );
    c = md5_gg(c, d, a, b, x[i+ 15], 14, -660478335 );
    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848 );
    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438 );
    d = md5_gg(d, a, b, c, x[i+ 14], 9 , -1019803690 );
    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961 );
    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501 );
    a = md5_gg(a, b, c, d, x[i+ 13], 5 , -1444681467 );
    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784 );
    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473 );
    b = md5_gg(b, c, d, a, x[i+ 12], 20, -1926607734 );

    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558 );
    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463 );
    c = md5_hh(c, d, a, b, x[i+ 11], 16,  1839030562 );
    b = md5_hh(b, c, d, a, x[i+ 14], 23, -35309556 );
    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060 );
    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353 );
    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632 );
    b = md5_hh(b, c, d, a, x[i+ 10], 23, -1094730640 );
    a = md5_hh(a, b, c, d, x[i+ 13], 4 ,  681279174 );
    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222 );
    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979 );
    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189 );
    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487 );
    d = md5_hh(d, a, b, c, x[i+ 12], 11, -421815835 );
    c = md5_hh(c, d, a, b, x[i+ 15], 16,  530742520 );
    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651 );

    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844 );
    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415 );
    c = md5_ii(c, d, a, b, x[i+ 14], 15, -1416354905 );
    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055 );
    a = md5_ii(a, b, c, d, x[i+ 12], 6 ,  1700485571 );
    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606 );
    c = md5_ii(c, d, a, b, x[i+ 10], 15, -1051523 );
    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799 );
    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359 );
    d = md5_ii(d, a, b, c, x[i+ 15], 10, -30611744 );
    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380 );
    b = md5_ii(b, c, d, a, x[i+ 13], 21,  1309151649 );
    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070 );
    d = md5_ii(d, a, b, c, x[i+ 11], 10, -1120210379 );
    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259 );
    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551 );

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
  }
  return  Array(a, b, c, d);

}

/*
 * These functions implement the four basic operations the algorithm uses.
 */
function  md5_cmn(q, a, b, x, s, t)
{
  return  safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
}
function  md5_ff(a, b, c, d, x, s, t)
{
  return  md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
}
function  md5_gg(a, b, c, d, x, s, t)
{
  return  md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
}
function  md5_hh(a, b, c, d, x, s, t)
{
  return  md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function  md5_ii(a, b, c, d, x, s, t)
{
  return  md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
}

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function  safe_add(x, y)
{
  var lsw = (x & 0xFFFF) + (y & 0xFFFF );
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16 );
  return (msw << 16) | (lsw & 0xFFFF );
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function  bit_rol(num, cnt)
{
  return (num << cnt) | (num >>> (32  - cnt));
}
function  binl2hex(binarray)
{
  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef" ;
  var str = "" ;
  for(var i = 0; i < binarray.length * 4 ; i++)
  {
    str += hex_tab.charAt((binarray[i>> 2] >> ((i%4)*8+4)) & 0xF ) +
           hex_tab.charAt((binarray[i>> 2] >> ((i%4)*8  )) & 0xF );
  }
  return  str;
}

function  str2binl(str)
{
  var  bin = Array();
  var mask = (1 << chrsz) - 1 ;
  for(var i = 0 ; i < str.length * chrsz; i += chrsz)
    bin[i>> 5] |= (str.charCodeAt(i / chrsz) & mask) << (i%32 );
  return  bin;
}


//alert(hex_md5('hello, ugly world'));
</script>
<script type="text/javascript">
function highlite(menuItemId, action) {

	if(action) {
		document.getElementById('menu_' + menuItemId).className = 'menu_arrow_active';
	}

	else {
		document.getElementById('menu_' + menuItemId).className = 'menu_arrow';
	}
}
</script>



<table width=100% height=100% cellpadding=0 cellspacing=0 border=0 background="https://images.gwars.ru/img/index-images-2.0/top_bg.jpg" style="background-repeat: repeat-x; background-position: top">
<tr><td background="https://images.gwars.ru/img/index-images-2.0/bot_bg.jpg" style="overflow: hidden; background-repeat: repeat-x; background-position: bottom">

	<table width=100% height=100% cellpadding=0 cellspacing=0 border=0 background="https://images.gwars.ru/img/index-images-2.0/top_img_v2.jpg" style="background-repeat: no-repeat; background-position: center top">
	<tr><td><img src="https://images.gwars.ru/img/index-images-2.0/p.gif" alt="" width="1" height="1"></td>
	<td width="960" valign=top>

        <div style="position: relative; z-index: 1">


		<table width="960" cellpadding=0 cellspacing=0 border=0>
		<tr><td colspan=2 height=199 width="960" valign=top align=left>
			<table cellpadding=0 cellspacing=0 border=0>
			<tr><td height=57 align=left valign=top> 
				<table cellpadding=0 cellspacing=0 border=0 height=33><tr>
				<td width=5><img src="https://images.gwars.ru/img/index-images-2.0/p.gif" alt="" width="5" height="1"></td>
				<td width=101 align=center valign=center><a href="/help/" class=green14b>Îá èãðå</a></td>
				<td width=111 align=center valign=center><a href="/forum.php" class=green14b>Ôîðóì</a></td>
				<td width=110 align=center valign=center><a href="http://www.ganjafoto.ru" class=green14b>Ganjafoto</a></td>
				</tr></table>
			</td></tr>
			<tr><td height=130>  
				<table cellpadding=0 cellspacing=0 border=0 height=130><tr>
				<td width=373></td>
				<td width=243>

<form style="margin: 0px" onSubmit='collectinfo()' name='loginform' id='loginform' action='https://www.gwars.ru/login.php' method=post >
<input type=hidden name=skey value='119.236.101.168'>
<input type=hidden name=brdata value='Null.'>
<input type=hidden name=resl value='Null.'>
<input type=hidden name=time value='Null.'>
<input type=hidden name=date value='Null.'>
<input type=hidden name=pass1 value=''>
<input type=hidden name=pwdmd5 value='Null.'>
<input type=hidden name=loginkey value='1627926341'>
<input type=hidden name=loginkeymd value='cab553108de010cd2bafe6d20f3da39e'>


					<table cellpadding=0 cellspacing=0 border=0 height=130>
					<tr><td width=60 class=black12b align=left valign=middle>Èìÿ:&nbsp;</td>
					    <td><input class=login name=login value='' type=text size=18></td>
					</tr>
					<tr><td width=60 class=black12b align=left valign=middle>Ïàðîëü:&nbsp;</td>
					    <td><input class=login name=pass type=password size=18></td>
					</tr>
<tr><td>&nbsp;</td><td align=right valign=top>
<!--- input id="store" name="store_password_here" value="1" type="checkbox"> <label for="store">Çàïîìíèòü èìÿ è ïàðîëü</label --->
<a href="/password-recovery.php" style='font: 12px tahoma; color: #174f07;'>Âñïîìíèòü ïàðîëü</a>&nbsp;&nbsp;
</td></tr>

					<tr><td colspan=2 valign=middle>
<table cellpadding=0 cellspacing=0><tr><td><input type="submit" class="submit" value="Âîéòè"></td>
<td width=170 align=center valign=middle><a class="green18" href="/regform.php">Ðåãèñòðàöèÿ</a></td></tr></table>
					</td></tr>	
					</table>

</form><!-- from ends here -->


				</td>
				<td width=68></td>
				<td width=190 class=black12 valign=top>
					Ñåé÷àñ â èãðå  <b class=red14b>2,293</b> èãðîêà<br><img src="https://images.gwars.ru/img/index-images-2.0/p.gif" alt="" width="1" height="8"><br>
					Çà ïîñëåäíèå ñåìü äíåé<br> çàõîäèëè <b class=red14b>11,446</b> èãðîêîâ<br><img src="https://images.gwars.ru/img/index-images-2.0/p.gif" alt="" width="1" height="8"><br>
					Èäåò <b class=red14b>42</b> áîÿ<br><img src="https://images.gwars.ru/img/index-images-2.0/p.gif" alt="" width="1" height="8"><br>


<br>

				</td>
				</tr></table>
 			</td></tr>
 			</table>

		</td></tr>
		<tr><td width=349 valign=top style="padding-left: 15px; padding-right: 20px; padding-top: 10px">

			<a href="/news.php" class=green24>Íîâîñòè èãðû</a><br><br>
			<a href="/messages.php?fid=1&tid=1636" class=red18> Íîâûå øòóðìîâûå âèíòîâêè</a><br>
			<b class=data>19:49 31.07</b><br><img src="https://images.gwars.ru/img/index-images-2.0/p.gif" alt="" width=1 height=7><br>
Ñåãîäíÿ â ãîñóäàðñòâåííîì ìàãàçèíå ïîÿâèëèñü íîâûå øòóðìîâûå âèíòîâêè. <br>Ýòî Bushmaster ACR: https://www.gwars.ru/item.php?item_id=bushmaster <br>è Beretta ARX-200: https://www.gwars.ru/item.php?item_id=arx200 <br> <br>Âîçìîæíîñòü àïãðåéäà ýòèõ ïðåäìåòîâ ïîÿâèòñÿ â áëèæàéøåì áóäóùåì.			<br><img src="https://images.gwars.ru/img/index-images-2.0/ind_line.jpg" height=3 width=308 vspace=15><br>

			<a href="/messages.php?fid=1&tid=1635" class=green18> Âòîðîé ëè÷íûé NPC</a><br>
			<b class=data>16:30 25.07</b>
<br><img src="https://images.gwars.ru/img/index-images-2.0/p.gif" alt="" width=1 height=7><br>Ñ ñåãîäíÿøíåãî äíÿ âñåì ïåðñîíàæàì, ïîëó÷èâøèì 50 áîåâîé óðîâåíü, äîñòóïíî ñîçäàíèå âòîðîãî ëè÷íîãî NPC. <br> <br>Ïðîâåðèòü äîñòóïíîñòü âòîðîãî NPC ìîæíî íà ñòðàíèöå &quot;Âàøè êâåñòû&quot;: https://www.gwars.ru/questlog.php			<br><img src="https://images.gwars.ru/img/index-images-2.0/ind_line.jpg" height=3 width=308 vspace=15><br>
			<a href="/messages.php?fid=1&tid=1634" class=green18> Ôóëëãîñ-2021: ðåçóëüòàòû</a><br>
			<b class=data>02:05 18.07</b>
<br><img src="https://images.gwars.ru/img/index-images-2.0/p.gif" alt="" width=1 height=7><br>Ïîäîøåë ê êîíöó äâàäöàòü ÷åòâåðòûé ñèíäèêàòíûé ÷åìïèîíàò &quot;Ôóëëãîñ-2021&quot; è ìû ïîçäðàâëÿåì ïîáåäèò...(<a style="color: #174f07;" href="/messages.php?fid=1&tid=1634">äàëåå</a>)		    </td>
		    <td width=611 valign=top background="https://images.gwars.ru/img/index-images-2.0/rating_shadows.jpg" style="background-repeat: no-repeat; background-position: top right">

			<table width=611 cellpadding=0 cellspacing=0 border=0>
			<tr><td width=307 valign=top style="padding-left: 5px; padding-top: 8px">


				<table width="290" cellpadding=0 cellspacing=0 border=0>
				<tr><td colspan=3 height=36>

					<table width=100% height=36 border=0><tr>
					<td align=center width=40><a href="/index.php?rp=2"><img src="https://images.gwars.ru/img/index-images-2.0/al.gif" alt="Âëåâî" width=29 height=23 border=0></a></td>
					<td align=center valign=middle class=black18>Ëó÷øèé ñíàéïåð
</td>
					<td align=center  width=40><a href="/index.php?rp=4"><img src="https://images.gwars.ru/img/index-images-2.0/ar.gif" alt="Âïðàâî" width=29 height=23 border=0></a></td></tr>
					</table>

				</td></tr>
				<tr><td colspan=3 height=40 valign=middle style="padding-left: 17px">Ðåçóëüòàòû ñ 24.07 ïî 30.07
</td></tr>
<tr><td width=40 height=28 align=center>1</td>
<td><a href="/info.php?id=1895235" class=red12b>(Mashka Popins)</a> [46]</td>
<td width="50">2042
</td>
</tr>
<tr><td width=40 height=28 align=center>2</td>
<td><a href="/info.php?id=2376390" class=red12b>eWo Mk.2</a> [23]</td>
<td width="50">1570
</td>
</tr>
<tr><td width=40 height=28 align=center>3</td>
<td><a href="/info.php?id=1131303" class=red12b>Òàáà÷åê</a> [48]</td>
<td width="50">1306
</td>
</tr>
<tr><td width=40 height=28 align=center>4</td>
<td><a href="/info.php?id=1404044" class=red12b>YURGEN_KLINSMAN</a> [43]</td>
<td width="50">887
</td>
</tr>
<tr><td width=40 height=28 align=center>5</td>
<td><a href="/info.php?id=303515" class=red12b>NemiR OFF</a> [44]</td>
<td width="50">838
</td>
</tr>
<tr><td width=40 height=28 align=center>6</td>
<td><a href="/info.php?id=586732" class=red12b>xronikkk</a> [50]</td>
<td width="50">825
</td>
</tr>
<tr><td width=40 height=28 align=center>7</td>
<td><a href="/info.php?id=2366733" class=red12b>ZeD_-</a> [38]</td>
<td width="50">728
</td>
</tr>
<tr><td width=40 height=28 align=center>8</td>
<td><a href="/info.php?id=2374995" class=red12b>Ïðîñòî ñòðàõ</a> [24]</td>
<td width="50">656
</td>
</tr>
<tr><td width=40 height=28 align=center>9</td>
<td><a href="/info.php?id=486904" class=red12b>)Aks(</a> [49]</td>
<td width="50">643
</td>
</tr>
<tr><td width=40 height=28 align=center>10</td>
<td><a href="/info.php?id=2200736" class=red12b>(Àëüòðóèñòêà)</a> [44]</td>
<td width="50">629
</td>
</tr>

</table>

			</td><td width=306 valign="top" style="padding-left: 15px; padding-top: 8px">

				<table width="290" cellpadding=0 cellspacing=0 border=0>
				<tr><td colspan=3 height=36>

					<table width=100% height=36 border=0><tr>
					<td align=center width=40>&nbsp;</td>
					<td align=center valign=middle class=black18>Ðåéòèíã ñèíäèêàòîâ
</td>
					<td align=center  width=40>&nbsp;</td></tr>
					</table>

				</td></tr>
				<tr><td colspan=3 height=40 valign=middle style="padding-left: 17px">Ðåçóëüòàòû ñ 17.07 ïî 28.07
</td></tr>

<tr><td width=40 height=28 align=center>1</td>
<td><a href="/syndicate.php?id=6363" class=red12b>DSS
</a></td>
<td width="50">22</td>
</tr>
<tr><td width=40 height=28 align=center>2</td>
<td><a href="/syndicate.php?id=1677" class=red12b>Íàåìíèêè
</a></td>
<td width="50">22</td>
</tr>
<tr><td width=40 height=28 align=center>3</td>
<td><a href="/syndicate.php?id=592" class=red12b>Òåðìèòû
</a></td>
<td width="50">22</td>
</tr>
<tr><td width=40 height=28 align=center>4</td>
<td><a href="/syndicate.php?id=2150" class=red12b>V E N O M
</a></td>
<td width="50">21</td>
</tr>
<tr><td width=40 height=28 align=center>5</td>
<td><a href="/syndicate.php?id=5353" class=red12b>NR&amp;BW
</a></td>
<td width="50">20</td>
</tr>
<tr><td width=40 height=28 align=center>6</td>
<td><a href="/syndicate.php?id=4933" class=red12b>ÀÍÀÐÕÈß
</a></td>
<td width="50">20</td>
</tr>
<tr><td width=40 height=28 align=center>7</td>
<td><a href="/syndicate.php?id=3965" class=red12b>Áóáíè
</a></td>
<td width="50">20</td>
</tr>
<tr><td width=40 height=28 align=center>8</td>
<td><a href="/syndicate.php?id=116" class=red12b>Ê Ð Å Ì Í È
</a></td>
<td width="50">20</td>
</tr>
<tr><td width=40 height=28 align=center>9</td>
<td><a href="/syndicate.php?id=7627" class=red12b>A&amp;P
</a></td>
<td width="50">20</td>
</tr>
<tr><td width=40 height=28 align=center>10</td>
<td><a href="/syndicate.php?id=1608" class=red12b>KamCHATka
</a></td>
<td width="50">18</td>
</tr>
</table>

			</td></tr>
			<tr><td width=611 colspan=2 style="padding-left: 20px; padding-right: 55px; padding-bottom: 50px" valign=top><br><br>
<h1>Ñêðèíøîòû</h1>

<table cellspacing=10 cellpadding=0 border=0 align=center>
<tr>
<td><img width=250 src=https://images.gwars.ru/img/screenshots/screen1p.jpg?url=https://images.gwars.ru/img/screenshots/screen1.jpg class="dg-picture-zoom"></td>
<td><img width=250 src=https://images.gwars.ru/img/screenshots/screen2p.jpg?url=https://images.gwars.ru/img/screenshots/screen2.jpg class="dg-picture-zoom"></td>
</tr><tr>
<td><img width=250 src=https://images.gwars.ru/img/screenshots/screen3p.jpg?url=https://images.gwars.ru/img/screenshots/screen3.jpg class="dg-picture-zoom"></td>
<td><img width=250 src=https://images.gwars.ru/img/screenshots/screen6p.jpg?url=https://images.gwars.ru/img/screenshots/screen6.jpg class="dg-picture-zoom"></td>
</tr><tr>
<td><img width=250 src=https://images.gwars.ru/img/screenshots/screen5p.jpg?url=https://images.gwars.ru/img/screenshots/screen5.jpg class="dg-picture-zoom"></td>
<td><img width=250 src=https://images.gwars.ru/img/screenshots/screen4p.jpg?url=https://images.gwars.ru/img/screenshots/screen4.jpg class="dg-picture-zoom"></td>
</tr></table>

			<h1>Îá èãðå</h1>
			- ýòî èãðà â ìàôèþ, áîåâîé ñèìóëÿòîð è ýêîíîìè÷åñêàÿ ñòðàòåãèÿ. Èãðàòü â íå¸ ìîæíî êàê ñ êîìïüþòåðà, èñïîëüçóÿ òîëüêî áðàóçåð, òàê è ñî ñìàðòôîíîâ, è ñ ïëàíøåòîâ. Â ýòó èãðó îäíîâðåìåííî èãðàþò íåñêîëüêî òûñÿ÷ ÷åëîâåê, êîòîðûå ó÷àñòâóþò â âèðòóàëüíûõ ïåðåñòðåëêàõ, çàíèìàþòñÿ òîðãîâëåé, ïðîèçâîäñòâîì èëè ñîáñòâåííûì áèçíåñîì.
			</td></tr>	
			</table>

		    </td>
        	</tr>
		</table>                
		</div>

	</td>
	<td><img src="https://images.gwars.ru/img/index-images-2.0/p.gif" alt="" width="1" height="1"></td></tr>
	<tr><td><img src="https://images.gwars.ru/img/index-images-2.0/p.gif" alt="" width="1" height="1"></td>
 

<td valign=bottom>
	
        	<div style="position: relative; z-index: 1">

		        <table width=100% height=110 cellpadding=0 cellspacing=0 border=0><tr>
			<td valign=top width=130 style="padding-top: 30px; padding-left: 15px" class=p11><img src="/img/t.gif" width="1" height="9"><br>
<a style="color: #174f07;font-size: 10pt;text-decoration: none;background-color: #bcd6b1;padding: 5px;margin-top: 5px;opacity: 0.8;" href="/help/index.php?sid=49&pid=46"><b>Êîíòàêòû</b></a></td>
			<td valign=top width=110 style="padding-top: 35px;">


<!--LiveInternet counter--><script language="JavaScript"><!--
document.write('<a href="https://www.liveinternet.ru/click" '+
'target=_blank><img src="https://counter.yadro.ru/hit?t21.15;r'+
escape(document.referrer)+((typeof(screen)=='undefined')?'':
';s'+screen.width+'*'+screen.height+'*'+(screen.colorDepth?
screen.colorDepth:screen.pixelDepth))+';'+Math.random()+
'" alt="liveinternet.ru: ïîêàçàíî ÷èñëî ïðîñìîòðîâ çà 24 ÷àñà, ïîñåòèòåëåé çà 24 ÷àñà è çà ñåãîäí\ÿ" '+
'border=0 width=1 height=1 style="opacity:0.1"></a>')//--></script><!--/LiveInternet-->

</td>
			<td valign=top width=110 style="padding-top: 35px;">

<a href="/index.php?app=1" style='opacity:0.8;'>
  <img alt="Get it on Google Play"
       src="https://images.gwars.ru/img/googleplay-small.png" width=110 height=37/>
</a>

</td>
			<td valign=top class=p11 background="https://images.gwars.ru/img/index-images-2.0/key.jpg" style="background-repeat: no-repeat; background-position: bottom left; padding-top: 35px; padding-left: 150px">
							<a href="http://www.motorwars.ru"><img src="https://images.gwars.ru/img/index-images-2.0/motorwars.gif" width=108 height=22 border=0></a><br>&nbsp;Ñêîðîñòü îí-ëàéí</td>	
			<!--- td valign=top width=110 style="padding-top: 32px;"><a href="http://promo-mediasite.ru" class=p11>ïðîäâèæåíèå ñàéòà</a><br><a href="http://promo-mediasite.ru"><img src="https://images.gwars.ru/img/index-images-2.0/promo.gif" width=97 height=35 border=0></a></td --->
			<!--- td valign=top align=right width=140 style="padding-right: 30px; padding-top: 32px;"><a href="http://www.mediasite.ru" class=p11>ðàçðàáîòêà ñàéòà</a><br><a href="http://www.mediasite.ru"><img src="https://images.gwars.ru/img/index-images-2.0/mediasite.gif" width=113 height=17 border=0 vspace=1></a></td ---->
			</tr></table>	

		</div>

		<div style="position: relative; z-index: 0; zoom: 1;"><div style="position: absolute; bottom: 0; right: 50%; width: 310px; height: 306px; margin-right: -650px; background: url('https://images.gwars.ru/img/index-images-2.0/bot2.jpg') no-repeat; z-index: 0">&nbsp;</div></div>
		<div style="position: relative; z-index: 0; zoom: 1;"><div style="position: absolute; bottom: 0; left: 50%; width: 169px; height: 100px; margin-left: -580px; background: url('https://images.gwars.ru/img/index-images-2.0/bo1.jpg') no-repeat; z-index: 0">&nbsp;</div></div>

            </td><td><img src="https://images.gwars.ru/img/index-images-2.0/p.gif" alt="" width="1" height="1"></td></tr>
	</table>

</td></tr>
</table>

<script>
function do_focus() {
document.forms.loginform.login.focus();
 }
do_focus();
</script>

</body>
</html>