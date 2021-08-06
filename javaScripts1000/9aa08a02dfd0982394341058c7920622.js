window.Modernizr=function(window,document,undefined){var featureName,hasOwnProp,Modernizr={},docElement=document.documentElement,mod="modernizr",modElem=document.createElement(mod),mStyle=modElem.style,inputElem=document.createElement("input"),smile=":)",toString={}.toString,prefixes=" -webkit- -moz- -o- -ms- ".split(" "),cssomPrefixes="Webkit Moz O ms".split(" "),domPrefixes="Webkit Moz O ms".toLowerCase().split(" "),ns_svg="http://www.w3.org/2000/svg",tests={},inputs={},attrs={},classes=[],slice=classes.slice,injectElementWithStyles=function(rule,callback,nodes,testnames){var style,ret,node,docOverflow,div=document.createElement("div"),body=document.body,fakeBody=body||document.createElement("body");if(parseInt(nodes,10))for(;nodes--;)(node=document.createElement("div")).id=testnames?testnames[nodes]:mod+(nodes+1),div.appendChild(node);return style=["&#173;",'<style id="s',mod,'">',rule,"</style>"].join(""),div.id=mod,(body?div:fakeBody).innerHTML+=style,fakeBody.appendChild(div),body||(fakeBody.style.background="",fakeBody.style.overflow="hidden",docOverflow=docElement.style.overflow,docElement.style.overflow="hidden",docElement.appendChild(fakeBody)),ret=callback(div,rule),body?div.parentNode.removeChild(div):(fakeBody.parentNode.removeChild(fakeBody),docElement.style.overflow=docOverflow),!!ret},isEventSupported=function(){var TAGNAMES={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return function(eventName,element){element=element||document.createElement(TAGNAMES[eventName]||"div");var isSupported=(eventName="on"+eventName)in element;return isSupported||(element.setAttribute||(element=document.createElement("div")),element.setAttribute&&element.removeAttribute&&(element.setAttribute(eventName,""),isSupported=is(element[eventName],"function"),is(element[eventName],"undefined")||(element[eventName]=undefined),element.removeAttribute(eventName))),element=null,isSupported}}(),_hasOwnProperty={}.hasOwnProperty;function setCss(str){mStyle.cssText=str}function is(obj,type){return typeof obj===type}function contains(str,substr){return!!~(""+str).indexOf(substr)}function testProps(props,prefixed){for(var i in props){var prop=props[i];if(!contains(prop,"-")&&mStyle[prop]!==undefined)return"pfx"!=prefixed||prop}return!1}function testPropsAll(prop,prefixed,elem){var ucProp=prop.charAt(0).toUpperCase()+prop.slice(1),props=(prop+" "+cssomPrefixes.join(ucProp+" ")+ucProp).split(" ");return is(prefixed,"string")||is(prefixed,"undefined")?testProps(props,prefixed):function(props,obj,elem){for(var i in props){var item=obj[props[i]];if(item!==undefined)return!1===elem?props[i]:is(item,"function")?item.bind(elem||obj):item}return!1}(props=(prop+" "+domPrefixes.join(ucProp+" ")+ucProp).split(" "),prefixed,elem)}for(var feature in hasOwnProp=is(_hasOwnProperty,"undefined")||is(_hasOwnProperty.call,"undefined")?function(object,property){return property in object&&is(object.constructor.prototype[property],"undefined")}:function(object,property){return _hasOwnProperty.call(object,property)},Function.prototype.bind||(Function.prototype.bind=function(that){var target=this;if("function"!=typeof target)throw new TypeError;var args=slice.call(arguments,1),bound=function(){if(this instanceof bound){var F=function(){};F.prototype=target.prototype;var self=new F,result=target.apply(self,args.concat(slice.call(arguments)));return Object(result)===result?result:self}return target.apply(that,args.concat(slice.call(arguments)))};return bound}),tests.flexbox=function(){return testPropsAll("flexWrap")},tests.flexboxlegacy=function(){return testPropsAll("boxDirection")},tests.canvas=function(){var elem=document.createElement("canvas");return!(!elem.getContext||!elem.getContext("2d"))},tests.canvastext=function(){return!(!Modernizr.canvas||!is(document.createElement("canvas").getContext("2d").fillText,"function"))},tests.webgl=function(){return!!window.WebGLRenderingContext},tests.touch=function(){var bool;return"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch?bool=!0:injectElementWithStyles(["@media (",prefixes.join("touch-enabled),("),mod,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(node){bool=9===node.offsetTop}),bool},tests.geolocation=function(){return"geolocation"in navigator},tests.postmessage=function(){return!!window.postMessage},tests.websqldatabase=function(){return!!window.openDatabase},tests.indexedDB=function(){return!!testPropsAll("indexedDB",window)},tests.hashchange=function(){return isEventSupported("hashchange",window)&&(document.documentMode===undefined||document.documentMode>7)},tests.history=function(){return!(!window.history||!history.pushState)},tests.draganddrop=function(){var div=document.createElement("div");return"draggable"in div||"ondragstart"in div&&"ondrop"in div},tests.websockets=function(){return"WebSocket"in window||"MozWebSocket"in window},tests.rgba=function(){return setCss("background-color:rgba(150,255,150,.5)"),contains(mStyle.backgroundColor,"rgba")},tests.hsla=function(){return setCss("background-color:hsla(120,40%,100%,.5)"),contains(mStyle.backgroundColor,"rgba")||contains(mStyle.backgroundColor,"hsla")},tests.multiplebgs=function(){return setCss("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(mStyle.background)},tests.backgroundsize=function(){return testPropsAll("backgroundSize")},tests.borderimage=function(){return testPropsAll("borderImage")},tests.borderradius=function(){return testPropsAll("borderRadius")},tests.boxshadow=function(){return testPropsAll("boxShadow")},tests.textshadow=function(){return""===document.createElement("div").style.textShadow},tests.opacity=function(){var str1,str2;return str1="opacity:.55",setCss(prefixes.join(str1+";")+(str2||"")),/^0.55$/.test(mStyle.opacity)},tests.cssanimations=function(){return testPropsAll("animationName")},tests.csscolumns=function(){return testPropsAll("columnCount")},tests.cssgradients=function(){var str1="background-image:";return setCss((str1+"-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));"+str1)+prefixes.join("linear-gradient(left top,#9f9, white);"+str1)).slice(0,-str1.length)),contains(mStyle.backgroundImage,"gradient")},tests.cssreflections=function(){return testPropsAll("boxReflect")},tests.csstransforms=function(){return!!testPropsAll("transform")},tests.csstransforms3d=function(){var ret=!!testPropsAll("perspective");return ret&&"webkitPerspective"in docElement.style&&injectElementWithStyles("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(node,rule){ret=9===node.offsetLeft&&3===node.offsetHeight}),ret},tests.csstransitions=function(){return testPropsAll("transition")},tests.fontface=function(){var bool;return injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}',function(node,rule){var style=document.getElementById("smodernizr"),sheet=style.sheet||style.styleSheet,cssText=sheet?sheet.cssRules&&sheet.cssRules[0]?sheet.cssRules[0].cssText:sheet.cssText||"":"";bool=/src/i.test(cssText)&&0===cssText.indexOf(rule.split(" ")[0])}),bool},tests.generatedcontent=function(){var bool;return injectElementWithStyles(["#",mod,"{font:0/0 a}#",mod,':after{content:"',smile,'";visibility:hidden;font:3px/1 a}'].join(""),function(node){bool=node.offsetHeight>=3}),bool},tests.video=function(){var elem=document.createElement("video"),bool=!1;try{(bool=!!elem.canPlayType)&&((bool=new Boolean(bool)).ogg=elem.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),bool.h264=elem.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),bool.webm=elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(e){}return bool},tests.audio=function(){var elem=document.createElement("audio"),bool=!1;try{(bool=!!elem.canPlayType)&&((bool=new Boolean(bool)).ogg=elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),bool.mp3=elem.canPlayType("audio/mpeg;").replace(/^no$/,""),bool.wav=elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),bool.m4a=(elem.canPlayType("audio/x-m4a;")||elem.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(e){}return bool},tests.localstorage=function(){try{return localStorage.setItem(mod,mod),localStorage.removeItem(mod),!0}catch(e){return!1}},tests.sessionstorage=function(){try{return sessionStorage.setItem(mod,mod),sessionStorage.removeItem(mod),!0}catch(e){return!1}},tests.webworkers=function(){return!!window.Worker},tests.applicationcache=function(){return!!window.applicationCache},tests.svg=function(){return!!document.createElementNS&&!!document.createElementNS(ns_svg,"svg").createSVGRect},tests.inlinesvg=function(){var div=document.createElement("div");return div.innerHTML="<svg/>",(div.firstChild&&div.firstChild.namespaceURI)==ns_svg},tests.smil=function(){return!!document.createElementNS&&/SVGAnimate/.test(toString.call(document.createElementNS(ns_svg,"animate")))},tests.svgclippaths=function(){return!!document.createElementNS&&/SVGClipPath/.test(toString.call(document.createElementNS(ns_svg,"clipPath")))},tests)hasOwnProp(tests,feature)&&(featureName=feature.toLowerCase(),Modernizr[featureName]=tests[feature](),classes.push((Modernizr[featureName]?"":"no-")+featureName));return Modernizr.input||(Modernizr.input=function(props){for(var i=0,len=props.length;i<len;i++)attrs[props[i]]=!!(props[i]in inputElem);return attrs.list&&(attrs.list=!(!document.createElement("datalist")||!window.HTMLDataListElement)),attrs}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),Modernizr.inputtypes=function(props){for(var bool,inputElemType,defaultView,i=0,len=props.length;i<len;i++)inputElem.setAttribute("type",inputElemType=props[i]),(bool="text"!==inputElem.type)&&(inputElem.value=smile,inputElem.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(inputElemType)&&inputElem.style.WebkitAppearance!==undefined?(docElement.appendChild(inputElem),bool=(defaultView=document.defaultView).getComputedStyle&&"textfield"!==defaultView.getComputedStyle(inputElem,null).WebkitAppearance&&0!==inputElem.offsetHeight,docElement.removeChild(inputElem)):/^(search|tel)$/.test(inputElemType)||(bool=/^(url|email)$/.test(inputElemType)?inputElem.checkValidity&&!1===inputElem.checkValidity():inputElem.value!=smile)),inputs[props[i]]=!!bool;return inputs}("search tel url email datetime date month week time datetime-local number range color".split(" "))),Modernizr.addTest=function(feature,test){if("object"==typeof feature)for(var key in feature)hasOwnProp(feature,key)&&Modernizr.addTest(key,feature[key]);else{if(feature=feature.toLowerCase(),Modernizr[feature]!==undefined)return Modernizr;test="function"==typeof test?test():test,docElement.className+=" "+(test?"":"no-")+feature,Modernizr[feature]=test}return Modernizr},setCss(""),modElem=inputElem=null,function(window,document){var supportsHtml5Styles,supportsUnknownElements,options=window.html5||{},reSkip=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,saveClones=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,expando="_html5shiv",expanID=0,expandoData={};function getElements(){var elements=html5.elements;return"string"==typeof elements?elements.split(" "):elements}function getExpandoData(ownerDocument){var data=expandoData[ownerDocument[expando]];return data||(data={},expanID++,ownerDocument[expando]=expanID,expandoData[expanID]=data),data}function createElement(nodeName,ownerDocument,data){return ownerDocument||(ownerDocument=document),supportsUnknownElements?ownerDocument.createElement(nodeName):(data||(data=getExpandoData(ownerDocument)),!(node=data.cache[nodeName]?data.cache[nodeName].cloneNode():saveClones.test(nodeName)?(data.cache[nodeName]=data.createElem(nodeName)).cloneNode():data.createElem(nodeName)).canHaveChildren||reSkip.test(nodeName)||node.tagUrn?node:data.frag.appendChild(node));var node}function shivDocument(ownerDocument){ownerDocument||(ownerDocument=document);var data=getExpandoData(ownerDocument);return!html5.shivCSS||supportsHtml5Styles||data.hasCSS||(data.hasCSS=!!function(ownerDocument,cssText){var p=ownerDocument.createElement("p"),parent=ownerDocument.getElementsByTagName("head")[0]||ownerDocument.documentElement;return p.innerHTML="x<style>"+cssText+"</style>",parent.insertBefore(p.lastChild,parent.firstChild)}(ownerDocument,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),supportsUnknownElements||function(ownerDocument,data){data.cache||(data.cache={},data.createElem=ownerDocument.createElement,data.createFrag=ownerDocument.createDocumentFragment,data.frag=data.createFrag()),ownerDocument.createElement=function(nodeName){return html5.shivMethods?createElement(nodeName,ownerDocument,data):data.createElem(nodeName)},ownerDocument.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+getElements().join().replace(/[\w\-]+/g,function(nodeName){return data.createElem(nodeName),data.frag.createElement(nodeName),'c("'+nodeName+'")'})+");return n}")(html5,data.frag)}(ownerDocument,data),ownerDocument}!function(){try{var a=document.createElement("a");a.innerHTML="<xyz></xyz>",supportsHtml5Styles="hidden"in a,supportsUnknownElements=1==a.childNodes.length||function(){document.createElement("a");var frag=document.createDocumentFragment();return void 0===frag.cloneNode||void 0===frag.createDocumentFragment||void 0===frag.createElement}()}catch(e){supportsHtml5Styles=!0,supportsUnknownElements=!0}}();var html5={elements:options.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:"3.7.0",shivCSS:!1!==options.shivCSS,supportsUnknownElements:supportsUnknownElements,shivMethods:!1!==options.shivMethods,type:"default",shivDocument:shivDocument,createElement:createElement,createDocumentFragment:function(ownerDocument,data){if(ownerDocument||(ownerDocument=document),supportsUnknownElements)return ownerDocument.createDocumentFragment();for(var clone=(data=data||getExpandoData(ownerDocument)).frag.cloneNode(),i=0,elems=getElements(),l=elems.length;i<l;i++)clone.createElement(elems[i]);return clone}};window.html5=html5,shivDocument(document)}(this,document),Modernizr._version="2.7.2",Modernizr._prefixes=prefixes,Modernizr._domPrefixes=domPrefixes,Modernizr._cssomPrefixes=cssomPrefixes,Modernizr.mq=function(mq){var bool,matchMedia=window.matchMedia||window.msMatchMedia;return matchMedia?matchMedia(mq).matches:(injectElementWithStyles("@media "+mq+" { #"+mod+" { position: absolute; } }",function(node){bool="absolute"==(window.getComputedStyle?getComputedStyle(node,null):node.currentStyle).position}),bool)},Modernizr.hasEvent=isEventSupported,Modernizr.testProp=function(prop){return testProps([prop])},Modernizr.testAllProps=testPropsAll,Modernizr.testStyles=injectElementWithStyles,Modernizr.prefixed=function(prop,obj,elem){return obj?testPropsAll(prop,obj,elem):testPropsAll(prop,"pfx")},docElement.className=docElement.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+" js "+classes.join(" "),Modernizr}(this,this.document);