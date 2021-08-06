<!doctype html>
<html lang="vi" itemscope itemtype="http://schema.org/WebPage">
<head><script>if(navigator.userAgent.match(/MSIE|Internet Explorer/i)||navigator.userAgent.match(/Trident\/7\..*?rv:11/i)){var href=document.location.href;if(!href.match(/[?&]nowprocket/)){if(href.indexOf("?")==-1){if(href.indexOf("#")==-1){document.location.href=href+"?nowprocket=1"}else{document.location.href=href.replace("#","?nowprocket=1#")}}else{if(href.indexOf("#")==-1){document.location.href=href+"&nowprocket=1"}else{document.location.href=href.replace("#","&nowprocket=1#")}}}}</script><script>class RocketLazyLoadScripts{constructor(e){this.triggerEvents=e,this.eventOptions={passive:!0},this.userEventListener=this.triggerListener.bind(this),this.delayedScripts={normal:[],async:[],defer:[]},this.allJQueries=[]}_addUserInteractionListener(e){this.triggerEvents.forEach((t=>window.addEventListener(t,e.userEventListener,e.eventOptions)))}_removeUserInteractionListener(e){this.triggerEvents.forEach((t=>window.removeEventListener(t,e.userEventListener,e.eventOptions)))}triggerListener(){this._removeUserInteractionListener(this),this._loadEverythingNow()}async _loadEverythingNow(){this._handleDocumentWrite(),this._registerAllDelayedScripts(),this._preloadAllScripts(),await this._loadScriptsFromList(this.delayedScripts.normal),await this._loadScriptsFromList(this.delayedScripts.defer),await this._loadScriptsFromList(this.delayedScripts.async),await this._triggerDOMContentLoaded(),await this._triggerWindowLoad(),window.dispatchEvent(new Event("rocket-allScriptsLoaded"))}_registerAllDelayedScripts(){document.querySelectorAll("script[type=rocketlazyloadscript]").forEach((e=>{e.hasAttribute("src")?e.hasAttribute("async")&&!1!==e.async?this.delayedScripts.async.push(e):e.hasAttribute("defer")&&!1!==e.defer||"module"===e.getAttribute("data-rocket-type")?this.delayedScripts.defer.push(e):this.delayedScripts.normal.push(e):this.delayedScripts.normal.push(e)}))}async _transformScript(e){return await this._requestAnimFrame(),new Promise((t=>{var n=document.createElement("script");[...e.attributes].forEach((e=>{let t=e.nodeName;"type"!==t&&("data-rocket-type"===t&&(t="type"),n.setAttribute(t,e.nodeValue))})),e.hasAttribute("src")?(n.addEventListener("load",t),n.addEventListener("error",t)):(n.text=e.text,t()),e.parentNode.replaceChild(n,e)}))}async _loadScriptsFromList(e){const t=e.shift();return t?(await this._transformScript(t),this._loadScriptsFromList(e)):Promise.resolve()}_preloadAllScripts(){var e=document.createDocumentFragment();[...this.delayedScripts.normal,...this.delayedScripts.defer,...this.delayedScripts.async].forEach((t=>{const n=t.getAttribute("src");if(n){const t=document.createElement("link");t.href=n,t.rel="preload",t.as="script",e.appendChild(t)}})),document.head.appendChild(e)}_delayEventListeners(){let e={};function t(t,n){!function(t){function n(n){return e[t].eventsToRewrite.indexOf(n)>=0?"rocket-"+n:n}e[t]||(e[t]={originalFunctions:{add:t.addEventListener,remove:t.removeEventListener},eventsToRewrite:[]},t.addEventListener=function(){arguments[0]=n(arguments[0]),e[t].originalFunctions.add.apply(t,arguments)},t.removeEventListener=function(){arguments[0]=n(arguments[0]),e[t].originalFunctions.remove.apply(t,arguments)})}(t),e[t].eventsToRewrite.push(n)}function n(e,t){const n=e[t];Object.defineProperty(e,t,{get:n||function(){},set:n=>{e["rocket"+t]=n}})}t(document,"DOMContentLoaded"),t(window,"DOMContentLoaded"),t(window,"load"),t(window,"pageshow"),t(document,"readystatechange"),n(document,"onreadystatechange"),n(window,"onload"),n(window,"onpageshow")}_delayJQueryReady(e){let t;Object.defineProperty(window,"jQuery",{get:()=>t,set(n){if(n&&n.fn&&!e.allJQueries.includes(n)){n.fn.ready=n.fn.init.prototype.ready=function(t){e.domReadyFired?t.bind(document)(n):document.addEventListener("rocket-DOMContentLoaded",(()=>t.bind(document)(n)))};const t=n.fn.on;n.fn.on=n.fn.init.prototype.on=function(){if(this[0]===window){function e(e){return e.split(" ").map((e=>"load"===e?"rocket-load":e)).join(" ")}"string"==typeof arguments[0]||arguments[0]instanceof String?arguments[0]=e(arguments[0]):"object"==typeof arguments[0]&&Object.keys(arguments[0]).forEach((t=>{delete Object.assign(arguments[0],{[e(t)]:arguments[0][t]})[t]}))}return t.apply(this,arguments),this},e.allJQueries.push(n)}t=n}})}async _triggerDOMContentLoaded(){this.domReadyFired=!0,await this._requestAnimFrame(),document.dispatchEvent(new Event("rocket-DOMContentLoaded")),await this._requestAnimFrame(),window.dispatchEvent(new Event("rocket-DOMContentLoaded")),await this._requestAnimFrame(),document.dispatchEvent(new Event("rocket-readystatechange")),await this._requestAnimFrame(),document.rocketonreadystatechange&&document.rocketonreadystatechange()}async _triggerWindowLoad(){await this._requestAnimFrame(),window.dispatchEvent(new Event("rocket-load")),await this._requestAnimFrame(),window.rocketonload&&window.rocketonload(),await this._requestAnimFrame(),this.allJQueries.forEach((e=>e(window).trigger("rocket-load"))),window.dispatchEvent(new Event("rocket-pageshow")),await this._requestAnimFrame(),window.rocketonpageshow&&window.rocketonpageshow()}_handleDocumentWrite(){const e=new Map;document.write=document.writeln=function(t){const n=document.currentScript,r=document.createRange(),i=n.parentElement;let o=e.get(n);void 0===o&&(o=n.nextSibling,e.set(n,o));const a=document.createDocumentFragment();r.setStart(a,0),a.appendChild(r.createContextualFragment(t)),i.insertBefore(a,o)}}async _requestAnimFrame(){return new Promise((e=>requestAnimationFrame(e)))}static run(){const e=new RocketLazyLoadScripts(["keydown","mouseover","touchmove","touchstart","wheel"]);e._delayEventListeners(),e._delayJQueryReady(e),e._addUserInteractionListener(e)}}RocketLazyLoadScripts.run();
</script>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />

	<!-- This site is optimized with the Yoast SEO plugin v16.8 - https://yoast.com/wordpress/plugins/seo/ -->
	<title>Cáº§u Thá»§ - Cáº§u Thá»§ Máº¡ng xÃ£ há»i tin tá»©c bÃ³ng ÄÃ¡ nhanh, nÃ³ng, cáº­p nháº­t liÃªn tá»¥c 24h</title><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open%20Sans%7CRoboto%3A400%2C300%2C500%2C700%2C900%2C100%7CAmatic%20SC%7CCrafty%20Girls%7CItalianno%7CGreat%20Vibes%7CSchoolbell%7COswald%7CLato%7CMontserrat%7CDroid%20Sans%7CPoppins%7CVarela%20Round%7COpen%20Sans%3A400%2C600%2C700%2C400italic%2C300%7CPoppins%3A300%2C400%2C500%2C600%2C700%7CMontserrat%3A300%2C300i%2C400%2C800%2C800i%7CLato%3A300%2C400%2C700%2C900%7CRoboto&#038;display=swap" />
	<meta name="description" content="Máº¡ng xÃ£ há»i tin tá»©c Cáº§u thá»§ bÃ³ng ÄÃ¡ nhanh, nÃ³ng, cáº­p nháº­t liÃªn tá»¥c 24h.chuyá»n nhÆ°á»£ng cáº§u thá»§,TIn BÃ³ng ÄÃ¡" />
	<link rel="canonical" href="https://cauthu.com.vn/" />
	<meta property="og:locale" content="vi_VN" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Cáº§u Thá»§ - Cáº§u Thá»§ Máº¡ng xÃ£ há»i tin tá»©c bÃ³ng ÄÃ¡ nhanh, nÃ³ng, cáº­p nháº­t liÃªn tá»¥c 24h" />
	<meta property="og:description" content="Máº¡ng xÃ£ há»i tin tá»©c Cáº§u thá»§ bÃ³ng ÄÃ¡ nhanh, nÃ³ng, cáº­p nháº­t liÃªn tá»¥c 24h.chuyá»n nhÆ°á»£ng cáº§u thá»§,TIn BÃ³ng ÄÃ¡" />
	<meta property="og:url" content="https://cauthu.com.vn/" />
	<meta property="og:site_name" content="Cáº§u Thá»§" />
	<meta property="article:publisher" content="https://www.facebook.com/ngugo/" />
	<meta property="article:modified_time" content="2021-07-15T17:59:17+00:00" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:label1" content="Æ¯á»c tÃ­nh thá»i gian Äá»c" />
	<meta name="twitter:data1" content="1 phÃºt" />
	<script type="application/ld+json" class="yoast-schema-graph">{"@context":"https://schema.org","@graph":[{"@type":"WebSite","@id":"https://cauthu.com.vn/#website","url":"https://cauthu.com.vn/","name":"C\u1ea7u Th\u1ee7","description":"M\u1ea1ng x\u00e3 h\u1ed9i tin t\u1ee9c b\u00f3ng \u0111\u00e1 nhanh, n\u00f3ng, c\u1eadp nh\u1eadt li\u00ean t\u1ee5c 24h","potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://cauthu.com.vn/?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"vi"},{"@type":"WebPage","@id":"https://cauthu.com.vn/#webpage","url":"https://cauthu.com.vn/","name":"C\u1ea7u Th\u1ee7 - C\u1ea7u Th\u1ee7 M\u1ea1ng x\u00e3 h\u1ed9i tin t\u1ee9c b\u00f3ng \u0111\u00e1 nhanh, n\u00f3ng, c\u1eadp nh\u1eadt li\u00ean t\u1ee5c 24h","isPartOf":{"@id":"https://cauthu.com.vn/#website"},"datePublished":"2018-02-26T04:30:47+00:00","dateModified":"2021-07-15T17:59:17+00:00","description":"M\u1ea1ng x\u00e3 h\u1ed9i tin t\u1ee9c C\u1ea7u th\u1ee7 b\u00f3ng \u0111\u00e1 nhanh, n\u00f3ng, c\u1eadp nh\u1eadt li\u00ean t\u1ee5c 24h.chuy\u1ec3n nh\u01b0\u1ee3ng c\u1ea7u th\u1ee7,TIn B\u00f3ng \u0110\u00e1","breadcrumb":{"@id":"https://cauthu.com.vn/#breadcrumb"},"inLanguage":"vi","potentialAction":[{"@type":"ReadAction","target":["https://cauthu.com.vn/"]}]},{"@type":"BreadcrumbList","@id":"https://cauthu.com.vn/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Trang ch\u1ee7"}]}]}</script>
	<meta name="google-site-verification" content="XK0ir7NO-zfa9YFIbybz6o7fEk-Y7rorfs-zp4GtnDc" />
	<meta name="yandex-verification" content="16e5dfcbaa8596e9" />
	<!-- / Yoast SEO plugin. -->


<link rel='dns-prefetch' href='//ajax.googleapis.com' />
<link rel='dns-prefetch' href='//cdn.linearicons.com' />
<link rel='dns-prefetch' href='//maxcdn.bootstrapcdn.com' />
<link rel='dns-prefetch' href='//fonts.googleapis.com' />
<link rel='dns-prefetch' href='//code.jquery.com' />
<link href='https://fonts.gstatic.com' crossorigin rel='preconnect' />
<link rel="alternate" type="application/rss+xml" title="DÃ²ng thÃ´ng tin Cáº§u Thá»§ &raquo;" href="https://cauthu.com.vn/feed" />
<link rel="alternate" type="application/rss+xml" title="DÃ²ng pháº£n há»i Cáº§u Thá»§ &raquo;" href="https://cauthu.com.vn/comments/feed" />
<style type="text/css">
img.wp-smiley,
img.emoji {
	display: inline !important;
	border: none !important;
	box-shadow: none !important;
	height: 1em !important;
	width: 1em !important;
	margin: 0 .07em !important;
	vertical-align: -0.1em !important;
	background: none !important;
	padding: 0 !important;
}
</style>
	<link rel='stylesheet' id='wp-block-library-css'  href='https://cauthu.com.vn/wp-includes/css/dist/block-library/style.min.css?ver=5.8' type='text/css' media='all' />
<link rel='stylesheet' id='ap-fileuploader-animation-css'  href='https://cauthu.com.vn/wp-content/plugins/accesspress-anonymous-post-pro/css/loading-animation.css?ver=5.8' type='text/css' media='all' />
<link rel='stylesheet' id='ap-fileuploader-css'  href='https://cauthu.com.vn/wp-content/plugins/accesspress-anonymous-post-pro/css/fileuploader.css?ver=5.8' type='text/css' media='all' />
<link rel='stylesheet' id='ap-jquery-ui-style-css'  href='//ajax.googleapis.com/ajax/libs/jqueryui/1.8.2/themes/smoothness/jquery-ui.css?ver=5.8' type='text/css' media='all' />
<link rel='stylesheet' id='ap-tagit-styles-css'  href='https://cauthu.com.vn/wp-content/plugins/accesspress-anonymous-post-pro/css/jquery.tagit.css?ver=5.8' type='text/css' media='all' />
<link rel='stylesheet' id='ap-tagit-ui-styles-css'  href='https://cauthu.com.vn/wp-content/plugins/accesspress-anonymous-post-pro/css/tagit.ui-zendesk.css?ver=5.8' type='text/css' media='all' />
<link rel='stylesheet' id='ap-front-styles-css'  href='https://cauthu.com.vn/wp-content/plugins/accesspress-anonymous-post-pro/css/frontend-style.css?ver=3.2.6' type='text/css' media='all' />
<link rel='stylesheet' id='ap-lightbox-css-css'  href='https://cauthu.com.vn/wp-content/plugins/accesspress-anonymous-post-pro/lightbox/css/lightbox.css?ver=3.2.6' type='text/css' media='all' />
<link rel='stylesheet' id='apss-font-awesome-css'  href='//maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css?ver=2.0.7' type='text/css' media='all' />
<link rel='stylesheet' id='apss-socicon-css'  href='https://cauthu.com.vn/wp-content/plugins/accesspress-social-pro/css/share/socicon/style.css?ver=2.0.7' type='text/css' media='all' />

<link rel='stylesheet' id='apss-frontend-css-css'  href='https://cauthu.com.vn/wp-content/plugins/accesspress-social-pro/css/share/frontend.css?ver=2.0.7' type='text/css' media='all' />
<link rel='stylesheet' id='apsc-font-awesome-css'  href='https://cauthu.com.vn/wp-content/plugins/accesspress-social-pro/css/counter/font-awesome/font-awesome.css?ver=2.0.7' type='text/css' media='all' />

<link rel='stylesheet' id='apsc-frontend-css-css'  href='https://cauthu.com.vn/wp-content/plugins/accesspress-social-pro/css/counter/frontend.css?ver=2.0.7' type='text/css' media='all' />
<link rel='stylesheet' id='siteorigin-panels-front-css'  href='https://cauthu.com.vn/wp-content/plugins/siteorigin-panels/css/front-flex.min.css?ver=2.13.0' type='text/css' media='all' />
<link rel='stylesheet' id='jquery-ui-css-css'  href='https://cauthu.com.vn/wp-content/plugins/ultimate-author-box/css/jquery-ui.css?ver=1.12.1' type='text/css' media='all' />
<link rel='stylesheet' id='uab-slick-style-css'  href='https://cauthu.com.vn/wp-content/plugins/ultimate-author-box/js/slick/slick.css?ver=1.0.6' type='text/css' media='all' />
<link rel='stylesheet' id='uab-slick-thmes-style-css'  href='https://cauthu.com.vn/wp-content/plugins/ultimate-author-box/js/slick/slick-theme.css?ver=1.0.6' type='text/css' media='all' />
<link rel='stylesheet' id='uab-frontend-style-css'  href='https://cauthu.com.vn/wp-content/plugins/ultimate-author-box/css/frontend.css?ver=2.0.6' type='text/css' media='all' />
<link rel='stylesheet' id='uab-frontend-responsive-style-css'  href='https://cauthu.com.vn/wp-content/plugins/ultimate-author-box/css/uab-responsive.css?ver=2.0.6' type='text/css' media='all' />
<link rel='stylesheet' id='uab-fontawesome-css-css'  href='https://cauthu.com.vn/wp-content/plugins/ultimate-author-box/css/fontawesome.css?ver=5.8' type='text/css' media='all' />
<link rel='stylesheet' id='uab-fa-solid-css-css'  href='https://cauthu.com.vn/wp-content/plugins/ultimate-author-box/css/fa-solid.css?ver=5.8' type='text/css' media='all' />
<link rel='stylesheet' id='uab-fa-regular-css-css'  href='https://cauthu.com.vn/wp-content/plugins/ultimate-author-box/css/fa-regular.css?ver=5.8' type='text/css' media='all' />
<link rel='stylesheet' id='uab-fa-brands-css-css'  href='https://cauthu.com.vn/wp-content/plugins/ultimate-author-box/css/fa-brands.css?ver=5.8' type='text/css' media='all' />
<link rel='stylesheet' id='uab-font-awesome-style-css'  href='https://cauthu.com.vn/wp-content/plugins/ultimate-author-box/css/font-awesome.min.css?ver=2.0.6' type='text/css' media='all' />
<link rel='stylesheet' id='ip-linearicons-css-css'  href='https://cdn.linearicons.com/free/1.0.0/icon-font.min.css?ver=5.8' type='text/css' media='all' />

<link rel='stylesheet' id='ufb-custom-select-css-css'  href='https://cauthu.com.vn/wp-content/plugins/ultimate-form-builder/css/jquery.selectbox.css?ver=1.1.9' type='text/css' media='all' />
<link rel='stylesheet' id='ufb-font-css-css'  href='https://cauthu.com.vn/wp-content/plugins/ultimate-form-builder/css/font-awesome.min.css?ver=1.1.9' type='text/css' media='all' />
<link rel='stylesheet' id='ufb-jquery-ui-css'  href='//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css?ver=1.1.9' type='text/css' media='all' />
<link rel='stylesheet' id='ufb-front-css-css'  href='https://cauthu.com.vn/wp-content/plugins/ultimate-form-builder/css/frontend.css?ver=1.1.9' type='text/css' media='all' />
<link rel='stylesheet' id='ufb-fileuploader-animation-css'  href='https://cauthu.com.vn/wp-content/plugins/ultimate-form-builder/css/loading-animation.css?ver=5.8' type='text/css' media='all' />
<link rel='stylesheet' id='ufb-fileuploader-css'  href='https://cauthu.com.vn/wp-content/plugins/ultimate-form-builder/css/fileuploader.css?ver=5.8' type='text/css' media='all' />
<link rel='stylesheet' id='vmagazine-shortcodes-front-css'  href='https://cauthu.com.vn/wp-content/plugins/vmagazine-companion/assets/css/shortcodes.css?ver=5.8' type='text/css' media='all' />

<link rel='stylesheet' id='scrollbar-style-css'  href='https://cauthu.com.vn/wp-content/themes/vmagazine/assets/library/mCustomScrollbar/jquery.mCustomScrollbar.min.css?ver=0.1' type='text/css' media='all' />
<link rel='stylesheet' id='elegant-fonts-css'  href='https://cauthu.com.vn/wp-content/themes/vmagazine/assets/library/elegant_font/HTML-CSS/style.css?ver=0.1' type='text/css' media='all' />
<link rel='stylesheet' id='lightslider-style-css'  href='https://cauthu.com.vn/wp-content/themes/vmagazine/assets/library/lightslider/lightslider.css?ver=0.1' type='text/css' media='all' />
<link rel='stylesheet' id='font-awesome-style-css'  href='https://cauthu.com.vn/wp-content/themes/vmagazine/assets/library/font-awesome/css/font-awesome.min.css?ver=0.1' type='text/css' media='all' />
<link rel='stylesheet' id='animate-css-css'  href='https://cauthu.com.vn/wp-content/themes/vmagazine/assets/css/animate.css?ver=0.1' type='text/css' media='all' />
<link rel='stylesheet' id='prettyPhoto-style-css'  href='https://cauthu.com.vn/wp-content/themes/vmagazine/assets/library/prettyPhoto/css/prettyPhoto.css?ver=0.1' type='text/css' media='all' />
<link rel='stylesheet' id='slick-style-css'  href='https://cauthu.com.vn/wp-content/themes/vmagazine/assets/library/slick/slick.css?ver=0.1' type='text/css' media='all' />
<link rel='stylesheet' id='slick-style1-css'  href='https://cauthu.com.vn/wp-content/themes/vmagazine/assets/library/slick/slick-theme.css?ver=0.1' type='text/css' media='all' />
<link rel='stylesheet' id='vmagazine-style-css'  href='https://cauthu.com.vn/wp-content/themes/vmagazine-child/style.css?ver=0.1' type='text/css' media='all' />
<style id='vmagazine-style-inline-css' type='text/css'>
 body{
            font-family : Roboto;
            font-weight : 400;
            text-decoration : none;
            text-transform : none;
            font-size : 17px;
            line-height : 1.7;
            color : #666;
        } .entry-content h1,h1{
            font-family : Roboto;
            font-weight : 700;
            text-decoration : none;
            text-transform : none;
            font-size : 30px;
            line-height : 1.1;
            color : #252525;
        } .entry-content h2,h2{
            font-family : Roboto;
            font-weight : 700;
            text-decoration : none;
            text-transform : none;
            font-size : 26px;
            line-height : 1.1;
            color : #252525;
        } .entry-content h3,h3,.vmagazine-rec-posts.recent-post-widget .recent-posts-content .recent-post-content a{
            font-family : Roboto;
            font-weight : 700;
            text-decoration : none;
            text-transform : none;
            font-size : 22px;
            line-height : 1.1;
            color : #252525;
        } .entry-content h4,.widget-title,h4{
            font-family : Roboto;
            font-weight : 700;
            text-decoration : none;
            text-transform : none;
            font-size : 20px;
            line-height : 1.1;
            color : #252525;
        } .entry-content h5,h5{
            font-family : Roboto;
            font-weight : 700;
            text-decoration : none;
            text-transform : none;
            font-size : 18px;
            line-height : 1.1;
            color : #252525;
        } .entry-content h6,h6{
            font-family : Roboto;
            font-weight : 700;
            text-decoration : none;
            text-transform : none;
            font-size : 16px;
            line-height : 1.1;
            color : #252525;
        }header.header-layout2 nav.main-navigation .nav-wrapper .menu-mmnu-container ul li.menu-item a,
    header.header-layout1 nav.main-navigation .nav-wrapper .menu-mmnu-container ul li.menu-item a, header.header-layout3 nav.main-navigation .nav-wrapper .menu-mmnu-container ul li.menu-item a,
    header.header-layout4 nav.main-navigation .nav-wrapper .menu-mmnu-container ul li.menu-item a{
        font-family : Roboto;
        font-style : normal;
        font-weight : 600;
        text-decoration : none;
        text-transform : uppercase;
        font-size : 18px;
        color : #000;
    }

        .vmagazine-loader{
            background-color: #fff;
        }
        #loading1 #object,
        #loading2 .object,
        #loading5 .object,
        #loading6 .object,
        #loading7 .object,
        #loading8 .object,
        #loading9 .object,
        #loading10 .object,
        #loading11 .object,
        #loading12 .object-one,
        #loading12 .object-two,
        #loading13 .object,
        #loading14 .object,
        #loading15 .object,
        #loading16 .object,
        #loading17 .object,
        #loading18 .object{
            background-color: #ffc000;
        }
             #loading3 .object,
            #loading4 .object{
            border-color: #ffc000 !important;
        }
                span.cat-links .cat-38938{
                        background: #ffc000;
                }
                span.cat-links .cat-4{
                        background: #ffc000;
                }
                span.cat-links .cat-37640{
                        background: #fe7823;
                }
                span.cat-links .cat-59{
                        background: #ffc000;
                }
                span.cat-links .cat-62{
                        background: #ffc000;
                }
                span.cat-links .cat-40{
                        background: #fe7823;
                }
                span.cat-links .cat-37245{
                        background: #fe7823;
                }
                span.cat-links .cat-52{
                        background: #ffc000;
                }
                span.cat-links .cat-55{
                        background: #ffc000;
                }
                span.cat-links .cat-7{
                        background: #fe7823;
                }
                span.cat-links .cat-1850{
                        background: #ffc000;
                }
                span.cat-links .cat-39220{
                        background: #ffc000;
                }
                span.cat-links .cat-23900{
                        background: #ffc000;
                }
                span.cat-links .cat-46{
                        background: #fe7823;
                }
                span.cat-links .cat-47{
                        background: #ffc000;
                }
                span.cat-links .cat-50{
                        background: #ffc000;
                }
                span.cat-links .cat-23891{
                        background: #fe7823;
                }
                span.cat-links .cat-53{
                        background: #ffc000;
                }
                span.cat-links .cat-38024{
                        background: #fe7823;
                }
                span.cat-links .cat-43477{
                        background: #fe7823;
                }
                span.cat-links .cat-1626{
                        background: #ffc000;
                }
                span.cat-links .cat-51322{
                        background: #fe7823;
                }
                span.cat-links .cat-56{
                        background: #ffc000;
                }
                span.cat-links .cat-33{
                        background: #ffc000;
                }
                span.cat-links .cat-14399{
                        background: #fe7823;
                }
                span.cat-links .cat-61{
                        background: #ffc000;
                }
                span.cat-links .cat-37{
                        background: #ffc000;
                }
                span.cat-links .cat-3{
                        background: #ffc000;
                }
                span.cat-links .cat-60{
                        background: #fe7823;
                }
                span.cat-links .cat-44{
                        background: #ffc000;
                }
                span.cat-links .cat-38001{
                        background: #ffc000;
                }
                span.cat-links .cat-49{
                        background: #fe7823;
                }
                span.cat-links .cat-35{
                        background: #ffc000;
                }
                span.cat-links .cat-58{
                        background: #fe7823;
                }
                span.cat-links .cat-1863{
                        background: #fe7823;
                }
                span.cat-links .cat-41845{
                        background: #fe7823;
                }
                span.cat-links .cat-36969{
                        background: #fe7823;
                }
                span.cat-links .cat-51587{
                        background: #e52d6d;
                }
                span.cat-links .cat-45{
                        background: #ffc000;
                }
                span.cat-links .cat-51588{
                        background: #e52d6d;
                }
                span.cat-links .cat-39284{
                        background: #ffc000;
                }
                span.cat-links .cat-57{
                        background: #ffc000;
                }
                span.cat-links .cat-6{
                        background: #fe7823;
                }
                span.cat-links .cat-51327{
                        background: #e52d6d;
                }
                span.cat-links .cat-38002{
                        background: #ffc000;
                }
                span.cat-links .cat-21270{
                        background: #ffc000;
                }
                span.cat-links .cat-1848{
                        background: #fe7823;
                }
                span.cat-links .cat-1510{
                        background: #ffc000;
                }
                span.cat-links .cat-44099{
                        background: #fe7823;
                }
                span.cat-links .cat-39217{
                        background: #ffc000;
                }
                span.cat-links .cat-39{
                        background: #fe7823;
                }
                span.cat-links .cat-51293{
                        background: #e52d6d;
                }
                span.cat-links .cat-36{
                        background: #ffc000;
                }
                span.cat-links .cat-34{
                        background: #fe7823;
                }
                span.cat-links .cat-1{
                        background: #ffc000;
                }
                span.cat-links .cat-42{
                        background: #fe7823;
                }
                span.cat-links .cat-41{
                        background: #ffc000;
                }
                span.cat-links .cat-38699{
                        background: #fe7823;
                }
                span.cat-links .cat-1849{
                        background: #ffc000;
                }
                span.cat-links .cat-51323{
                        background: #fe7823;
                }
                span.cat-links .cat-48{
                        background: #ffc000;
                }
                span.cat-links .cat-38{
                        background: #fe7823;
                }
                span.cat-links .cat-51{
                        background: #ffc000;
                }
                span.cat-links .cat-54{
                        background: #fe7823;
                }
                span.cat-links .cat-5{
                        background: #ffc000;
                }
        .mob-search-form,.mobile-navigation{
            background-image: url(https://beta.cauthu.com.vn/wp-content/uploads/2021/06/bg-footer.jpg);
            background-position-y: center;
            background-position-x: center;
            background-attachment: scroll;
            background-repeat: no-repeat;
        }
        .vmagazine-mobile-search-wrapper .mob-search-form .img-overlay,.vmagazine-mobile-navigation-wrapper .mobile-navigation .img-overlay{
            background-color: rgba(0, 0, 0, 0.53);
        }
            .site-footer{
                background-image: url('https://beta.cauthu.com.vn/wp-content/uploads/2021/06/bg-footer.jpg');
                background-attachment: scroll;
                background-repeat: no-repeat;
                background-position-y: center;
                background-position-x: center;
        }
        .vmagazine-home-wrapp,.vmagazine-container,
        .boxed-width .vmagazine-main-wrapper,
        .boxed-width header.header-layout3 .site-main-nav-wrapper.menu-fixed-triggered, .boxed-width header .vmagazine-nav-wrapper.menu-fixed-triggered,
        .boxed-width .vmagazine-container,.vmagazine-fullwid-slider .vmagazine-container,
        .vmagazine-fullwid-slider.block_layout_2 .single-post .post-content-wrapper,
        .vmagazine-breadcrumb-wrapper .vmagazine-bread-home,
        .boxed-width .vmagazine-fullwid-slider.block_layout_2 .single-post .post-content-wrapper
        {
                max-width: 1200px;
        }
        .template-two .widget-title span, .template-two .block-title span,
        .template-two .block-header .child-cat-tabs,
        .template-two .vmagazine-mul-cat-tabbed .block-header .multiple-child-cat-tabs,
        .template-two .vmagazine-block-post-slider .block-header .multiple-child-cat-tabs-post-slider,
        .template-two .vmagazine-slider-tab-carousel .slider-cat-tabs-carousel,
        .template-two .vmagazine-slider-tab-carousel .block-header h4.block-title span.title-bg, .template-two .vmagazine-related-wrapper h4.related-title span.title-bg
        {
            background: ##f1f1f1!important;
        }
    .vmagazine-ticker-wrapper .default-layout .vmagazine-ticker-caption span, 
    .vmagazine-ticker-wrapper .layout-two .vmagazine-ticker-caption span,
    header.header-layout4 nav.main-navigation .nav-wrapper .menu-mmnu-container ul li.menu-item a:hover,
    a.scrollup,a.scrollup:hover,.widget .tagcloud a:hover,span.cat-links a,.entry-footer .edit-link a.post-edit-link,
    .template-three .widget-title:before, .template-three .block-title:before,.template-three .widget-title span, .template-three .block-title span,.widget-title:after, .block-title:after,
    .template-four .widget-title span, .template-four .block-title span, .template-four .vmagazine-container #primary.vmagazine-content .vmagazine-related-wrapper h4.related-title span.title-bg, .template-four .comment-respond h4.comment-reply-title span, .template-four .vmagazine-container #primary.vmagazine-content .post-review-wrapper h4.section-title span,.template-five .widget-title:before, .template-five .block-title:before,
    .template-five .widget-title span, .template-five .block-title span,.vmagazine-archive-layout2 .vmagazine-container main.site-main article .archive-post .entry-content a.vmagazine-archive-more, .vmagazine-archive-layout2 .vmagazine-container main.site-main article .archive-post .entry-content a.vmagazine-archive-more, .vmagazine-archive-layout2 .vmagazine-container main.site-main article .archive-post .entry-content a.vmagazine-archive-more,.vmagazine-container #primary.vmagazine-content .vmagazine-related-wrapper h4.related-title:after, .vmagazine-container #primary.vmagazine-content .post-review-wrapper .section-title:after, .vmagazine-container #primary.vmagazine-content .comment-respond .comment-reply-title:after,
    .vmagazine-container #primary.vmagazine-content .comment-respond .comment-form .form-submit input.submit,.widget .custom-html-widget .tnp-field-button input.tnp-button,.woocommerce-page .vmagazine-container.sidebar-shop .widget_price_filter .ui-slider .ui-slider-range,.woocommerce-page .vmagazine-container.sidebar-shop ul.products li.product .product-img-wrap a.button,.woocommerce-page .vmagazine-container.sidebar-shop ul.products li.product .onsale, .sidebar-shop .sale span.onsale,.woocommerce #respond input#submit.alt, .woocommerce a.button.alt, .woocommerce button.button.alt, .woocommerce input.button.alt,.woocommerce #respond input#submit.alt:hover, .woocommerce a.button.alt:hover, .woocommerce button.button.alt:hover, .woocommerce input.button.alt:hover,.woocommerce #respond input#submit, .woocommerce a.button, .woocommerce button.button, .woocommerce input.button,.woocommerce #respond input#submit:hover, .woocommerce a.button:hover, .woocommerce button.button:hover, .woocommerce input.button:hover,header ul.site-header-cart li span.count,
    header ul.site-header-cart li.cart-items .widget_shopping_cart p.woocommerce-mini-cart__buttons a.button:hover,
    .widget .tagcloud a:hover, .top-footer-wrap .vmagazine-container .widget.widget_tag_cloud .tagcloud a:hover,
    header.header-layout3 .site-main-nav-wrapper .top-right .vmagazine-search-form-primary form.search-form label:before,
    .vmagazine-archive-layout1 .vmagazine-container #primary article .archive-wrapper .entry-content a.vmagazine-archive-more,
    .vmagazine-container #primary.vmagazine-content .entry-content nav.post-navigation .nav-links a:hover:before,
    .vmagazine-archive-layout4 .vmagazine-container #primary article .entry-content a.vmagazine-archive-more,
    header.header-layout2 .logo-ad-wrapper .middle-search form.search-form:after,
    .ap_toggle .ap_toggle_title,.ap_tagline_box.ap-bg-box,.ap-team .member-social-group a, .horizontal .ap_tab_group .tab-title.active, .horizontal .ap_tab_group .tab-title.hover, .vertical .ap_tab_group .tab-title.active, .vertical .ap_tab_group .tab-title.hover,
    .template-three .vmagazine-container #primary.vmagazine-content .post-review-wrapper h4.section-title span, .template-three .vmagazine-container #primary.vmagazine-content .vmagazine-related-wrapper h4.related-title span, .template-three .vmagazine-container #primary.vmagazine-content .comment-respond h4.comment-reply-title span, .template-three .vmagazine-container #primary.vmagazine-content .post-review-wrapper h4.section-title span.title-bg,
    .template-three .vmagazine-container #primary.vmagazine-content .post-review-wrapper h4.section-title:before, .template-three .vmagazine-container #primary.vmagazine-content .vmagazine-related-wrapper h4.related-title:before, .template-three .vmagazine-container #primary.vmagazine-content .comment-respond h4.comment-reply-title:before, .template-three .vmagazine-container #primary.vmagazine-content .post-review-wrapper h4.section-title:before,
    .vmagazine-container #primary.vmagazine-content .post-password-form input[type='submit'],
    .woocommerce .cart .button, .woocommerce .cart input.button,
    .dot_1,.vmagazine-grid-list.list #loading-grid .dot_1,
    span.view-all a:hover,.block-post-wrapper.block_layout_3 .view-all a:hover,
    .vmagazine-post-col.block_layout_1 span.view-all a:hover,
    .vmagazine-mul-cat.block-post-wrapper.layout-two .block-content-wrapper .right-posts-wrapper .view-all a:hover,
    .block-post-wrapper.list .gl-posts a.vm-ajax-load-more:hover, .block-post-wrapper.grid-two .gl-posts a.vm-ajax-load-more:hover,
    .vmagazine-cat-slider.block-post-wrapper.block_layout_1 .content-wrapper-featured-slider .lSSlideWrapper li.single-post .post-caption p span.read-more a,.template-five .vmagazine-container #primary.vmagazine-content .comment-respond .comment-reply-title span.title-bg,
    .template-three .vmagazine-container #primary.vmagazine-content .vmagazine-author-metabox h4.box-title span.title-bg,
    .template-three .vmagazine-container #primary.vmagazine-content .vmagazine-author-metabox h4.box-title:before,
    .vmagazine-container #primary.vmagazine-content .vmagazine-author-metabox .box-title:after,
    .template-five .vmagazine-container #primary.vmagazine-content .vmagazine-related-wrapper h4.related-title span.title-bg,
    .template-five .vmagazine-container #primary.vmagazine-content .vmagazine-author-metabox .box-title span.title-bg,
    .middle-search .block-loader .dot_1,.no-results.not-found form.search-form input.search-submit,
    .widget_vmagazine_categories_tabbed .vmagazine-tabbed-wrapper ul#vmagazine-widget-tabbed li.active a, .widget_vmagazine_categories_tabbed .vmagazine-tabbed-wrapper ul#vmagazine-widget-tabbed li a:hover,
    .vmagazine-container #primary .entry-content .post-tag .tags-links a,
    .vmagazine-cat-slider.block-post-wrapper.block_layout_1 .lSSlideWrapper .lSAction > a:hover,
    .related-content-wrapper a.vmagazine-related-more,
    .vmagazine-container #primary .post-review-wrapper .review-inner-wrap .percent-review-wrapper .percent-rating-bar-wrap div, .vmagazine-container #primary .post-review-wrapper .review-inner-wrap .points-review-wrapper .percent-rating-bar-wrap div,
    .vmagazine-fullwid-slider.block_layout_1 .slick-slider .post-content-wrapper h3.extra-large-font a:hover,
    .vmagazine-post-carousel.block_layout_2 .block-carousel .single-post:hover .post-caption h3.large-font a,
    .vmagazine-container #primary .comment-respond .comment-reply-title:after,
    .template-five .vmagazine-container #primary .vmagazine-author-metabox .box-title span.title-bg, .template-five .vmagazine-container #primary .vmagazine-related-wrapper h4.related-title span.title-bg, .template-five .vmagazine-container #primary .post-review-wrapper .section-title span.title-bg, .template-five .vmagazine-container #primary .comment-respond .comment-reply-title span.title-bg,.vmagazine-post-carousel .block-carousel button.slick-arrow:hover,.vmagazine-block-post-slider .block-content-wrapper .block-post-slider-wrapper button.slick-arrow:hover,.vmagazine-timeline-post .timeline-post-wrapper .single-post .post-date .blog-date-inner span.posted-day,
    .vmagazine-slider-tab-carousel .block-content-wrapper-carousel button.slick-arrow:hover,.slider-tab-wrapper .block-post-wrapper.block_layout_1 .block-content-wrapper .tab-cat-slider.slick-slider .slick-dots li button:before,.widget.widget_vmagazine_video_player .vmagazine-yt-player .vmagazine-video-holder .video-thumbs .video-controls,
    .vmagazine-mul-cat-tabbed .block-header .multiple-child-cat-tabs .vmagazine-tabbed-links li.active a, .vmagazine-mul-cat-tabbed .block-header .multiple-child-cat-tabs .vmagazine-tabbed-links li a:hover,
    .vmagazine-mul-cat.block-post-wrapper.layout-two .block-header .child-cat-tabs .vmagazine-tab-links li.active a, .vmagazine-mul-cat.block-post-wrapper.layout-two .block-header .child-cat-tabs .vmagazine-tab-links li a:hover,
    .vmagazine-block-post-slider .block-header .multiple-child-cat-tabs-post-slider .vmagazine-tabbed-post-slider li.active a, .vmagazine-block-post-slider .block-header .multiple-child-cat-tabs-post-slider .vmagazine-tabbed-post-slider li a:hover,
    .vmagazine-slider-tab-carousel .slider-cat-tabs-carousel .slider-tab-links-carousel li.active a, .vmagazine-slider-tab-carousel .slider-cat-tabs-carousel .slider-tab-links-carousel li a:hover,
    .vmagazine-mul-cat.layout-one .block-header .child-cat-tabs .vmagazine-tab-links li.active a, .vmagazine-mul-cat.layout-one .block-header .child-cat-tabs .vmagazine-tab-links li a:hover,.cat-style-2 .vmagazine-rec-posts.recent-post-widget .recent-posts-content .recent-post-content span a,.site-footer.footer-4 .social li a:hover,.site-footer.footer-4 .icon-title:after
    {
        background: #ffc000;
    }
    a:hover,.vmagazine-ticker-wrapper .layout-two .ticker-tags ul li a:hover,
    header.header-layout2 nav.main-navigation .nav-wrapper .index-icon a:hover, header.header-layout1 nav.main-navigation .nav-wrapper .index-icon a:hover, header.header-layout3 nav.main-navigation .nav-wrapper .index-icon a:hover, header.header-layout4 nav.main-navigation .nav-wrapper .index-icon a:hover,
    .widget.widget_categories ul li,.widget.widget_categories ul li a:hover,footer .buttom-footer.footer_one .footer-credit .footer-social ul.social li a:hover,header.header-layout4 .logo-wrapper-section .vmagazine-container .social-icons ul.social li a:hover,header.header-layout2 nav.main-navigation .nav-wrapper .menu-mmnu-container ul li.menu-item .sub-menu li a:hover, header.header-layout1 nav.main-navigation .nav-wrapper .menu-mmnu-container ul li.menu-item .sub-menu li a:hover, header.header-layout3 nav.main-navigation .nav-wrapper .menu-mmnu-container ul li.menu-item .sub-menu li a:hover, header.header-layout4 nav.main-navigation .nav-wrapper .menu-mmnu-container ul li.menu-item .sub-menu li a:hover,header.header-layout2 nav.main-navigation .nav-wrapper .menu-mmnu-container ul li.menu-item .sub-menu.mega-sub-menu .ap-mega-menu-con-wrap .cat-con-section .menu-post-block h3 a:hover, header.header-layout1 nav.main-navigation .nav-wrapper .menu-mmnu-container ul li.menu-item .sub-menu.mega-sub-menu .ap-mega-menu-con-wrap .cat-con-section .menu-post-block h3 a:hover, header.header-layout3 nav.main-navigation .nav-wrapper .menu-mmnu-container ul li.menu-item .sub-menu.mega-sub-menu .ap-mega-menu-con-wrap .cat-con-section .menu-post-block h3 a:hover, header.header-layout4 nav.main-navigation .nav-wrapper .menu-mmnu-container ul li.menu-item .sub-menu.mega-sub-menu .ap-mega-menu-con-wrap .cat-con-section .menu-post-block h3 a:hover,.vmagazine-breadcrumb-wrapper .vmagazine-bread-home span.current,.vmagazine-container .vmagazine-sidebar .widget.widget_archive ul li,.vmagazine-container .vmagazine-sidebar .widget.widget_archive ul li a:hover,
    .vmagazine-container .vmagazine-sidebar .widget.widget_nav_menu .menu-main-menu-container ul li a:hover, .vmagazine-container .vmagazine-sidebar .widget.widget_rss ul li a:hover, .vmagazine-container .vmagazine-sidebar .widget.widget_recent_entries ul li a:hover, .vmagazine-container .vmagazine-sidebar .widget.widget_meta ul li a:hover, .vmagazine-container .vmagazine-sidebar .widget.widget_pages ul li a:hover,.site-footer .footer-widgets .widget_vmagazine_info .footer_info_wrap .info_wrap div span:first-of-type,
    .vmagazine-container #primary.vmagazine-content .entry-content nav.post-navigation .nav-links a:hover p,
    .vmagazine-container #primary.vmagazine-content .post-review-wrapper .review-inner-wrap .summary-wrapper .total-reivew-wrapper span.stars-count,.vmagazine-container #primary.vmagazine-content .post-review-wrapper .review-inner-wrap .stars-review-wrapper .review-featured-wrap span.stars-count span.star-value,header.header-layout1 .vmagazine-top-header .top-menu ul li a:hover, header.header-layout3 .vmagazine-top-header .top-menu ul li a:hover,header.header-layout1 .vmagazine-top-header .top-left ul.social li a:hover, header.header-layout3 .vmagazine-top-header .top-right ul.social li a:hover,header.header-layout1 nav.main-navigation .nav-wrapper .menu-mmnu-container ul li.menu-item a:hover, header.header-layout3 nav.main-navigation .nav-wrapper .menu-mmnu-container ul li.menu-item a:hover,header.header-layout2 nav.main-navigation .nav-wrapper .menu-mmnu-container ul li.menu-item .sub-menu li.menu-item.menu-item-has-children:hover:after, header.header-layout1 nav.main-navigation .nav-wrapper .menu-mmnu-container ul li.menu-item .sub-menu li.menu-item.menu-item-has-children:hover:after, header.header-layout3 nav.main-navigation .nav-wrapper .menu-mmnu-container ul li.menu-item .sub-menu li.menu-item.menu-item-has-children:hover:after, header.header-layout4 nav.main-navigation .nav-wrapper .menu-mmnu-container ul li.menu-item .sub-menu li.menu-item.menu-item-has-children:hover:after,header.header-layout2 nav.main-navigation .nav-wrapper .menu-mmnu-container ul li.menu-item .sub-menu li .menu-post-block:hover a, header.header-layout1 nav.main-navigation .nav-wrapper .menu-mmnu-container ul li.menu-item .sub-menu li .menu-post-block:hover a, header.header-layout3 nav.main-navigation .nav-wrapper .menu-mmnu-container ul li.menu-item .sub-menu li .menu-post-block:hover a, header.header-layout4 nav.main-navigation .nav-wrapper .menu-mmnu-container ul li.menu-item .sub-menu li .menu-post-block:hover a,header.header-layout2 nav.main-navigation .nav-wrapper .menu-mmnu-container ul li.menu-item:hover a,.woocommerce-page .vmagazine-container.sidebar-shop ul.products li.product:hover a.woocommerce-LoopProduct-link h2,.woocommerce-page .vmagazine-container.sidebar-shop ul.products span.price,.woocommerce-page .vmagazine-container.sidebar-shop .vmagazine-sidebar .widget_product_categories .product-categories li,.woocommerce-page .vmagazine-container.sidebar-shop .vmagazine-sidebar .widget_product_categories .product-categories li a:hover,.woocommerce-page .vmagazine-container.sidebar-shop .widget_top_rated_products ul.product_list_widget li ins span.woocommerce-Price-amount, .woocommerce-page .vmagazine-container.sidebar-shop .widget_recent_reviews ul.product_list_widget li ins span.woocommerce-Price-amount,.woocommerce-page .vmagazine-container.sidebar-shop .widget_top_rated_products ul.product_list_widget li:hover a, .woocommerce-page .vmagazine-container.sidebar-shop .widget_recent_reviews ul.product_list_widget li:hover a,.woocommerce div.product p.price, .woocommerce div.product span.price,.comment-form-rating p.stars,header ul.site-header-cart li.cart-items .widget_shopping_cart p.woocommerce-mini-cart__buttons a.button,footer .buttom-footer.footer_one .footer-btm-wrap .vmagazine-btm-ftr .footer-nav ul li a:hover,
    .vmagazine-container .vmagazine-sidebar .widget.widget_nav_menu ul li, .vmagazine-container .vmagazine-sidebar .widget.widget_rss ul li, .vmagazine-container .vmagazine-sidebar .widget.widget_recent_entries ul li, .vmagazine-container .vmagazine-sidebar .widget.widget_recent_comments ul li, .vmagazine-container .vmagazine-sidebar .widget.widget_meta ul li, .vmagazine-container .vmagazine-sidebar .widget.widget_pages ul li, .top-footer-wrap .vmagazine-container .widget.widget_meta ul li, .top-footer-wrap .vmagazine-container .widget.widget_pages ul li, .top-footer-wrap .vmagazine-container .widget.widget_recent_comments ul li, .top-footer-wrap .vmagazine-container .widget.widget_recent_entries ul li, .top-footer-wrap .vmagazine-container .widget.widget_rss ul li, .top-footer-wrap .vmagazine-container .widget.widget_nav_menu ul li, .top-footer-wrap .vmagazine-container .widget.widget_archive ul li,
    .vmagazine-container .vmagazine-sidebar .widget.widget_nav_menu ul li a:hover, .vmagazine-container .vmagazine-sidebar .widget.widget_rss ul li a:hover, .vmagazine-container .vmagazine-sidebar .widget.widget_recent_entries ul li a:hover, .vmagazine-container .vmagazine-sidebar .widget.widget_meta ul li a:hover, .vmagazine-container .vmagazine-sidebar .widget.widget_pages ul li a:hover, .top-footer-wrap .vmagazine-container .widget_pages ul li a:hover, .top-footer-wrap .vmagazine-container .widget.widget_meta ul li a:hover, .top-footer-wrap .vmagazine-container .widget.widget_pages ul li a:hover, .top-footer-wrap .vmagazine-container .widget.widget_recent_comments ul li a:hover, .top-footer-wrap .vmagazine-container .widget.widget_recent_entries ul li a:hover, .top-footer-wrap .vmagazine-container .widget.widget_rss ul li a:hover, .top-footer-wrap .vmagazine-container .widget.widget_nav_menu ul li a:hover, .top-footer-wrap .vmagazine-container .widget.widget_archive ul li a:hover,
    .vmagazine-archive-layout2 .vmagazine-container main.site-main article .archive-post .entry-content a.vmagazine-archive-more:hover, .vmagazine-archive-layout2 .vmagazine-container main.site-main article .archive-post .entry-content a.vmagazine-archive-more:hover, .vmagazine-archive-layout2 .vmagazine-container main.site-main article .archive-post .entry-content a.vmagazine-archive-more:hover,
    .vmagazine-archive-layout1 .vmagazine-container #primary article .archive-wrapper .entry-content a.vmagazine-archive-more:hover,
    .vmagazine-container #primary.vmagazine-content .post-password-form input[type='submit']:hover,
    .vmagazine-archive-layout4 .vmagazine-container #primary article .entry-content a.vmagazine-archive-more:hover,
    .vmagazine-container #primary .entry-content .post-tag .tags-links a:hover,
    .vmagazine-archive-layout2 .vmagazine-container main.site-main article .archive-post .entry-content a.vmagazine-archive-more:hover:after,
    .vmagazine-slider-tab-carousel .block-content-wrapper-carousel .single-post:hover .post-caption h3,
    .woocommerce-page .vmagazine-container.sidebar-shop .widget_top_rated_products ul.product_list_widget li:hover a,
    .woocommerce-page .vmagazine-container.sidebar-shop .widget_recently_viewed_products ul.product_list_widget li:hover a,
    .woocommerce-page .vmagazine-container.sidebar-shop .widget_products ul.product_list_widget li:hover a,
    .woocommerce-page .vmagazine-container.sidebar-shop .widget_recent_reviews ul.product_list_widget li:hover a,
    .related-content-wrapper a.vmagazine-related-more:hover,
    .vmagazine-block-post-slider .block-content-wrapper .block-post-slider-wrapper .slider-item-wrapper .slider-bigthumb:hover .post-captions h3.large-font a, .vmagazine-block-post-slider .block-content-wrapper .block-post-slider-wrapper .small-thumbs-wrapper .small-thumbs-inner .slider-smallthumb:hover .post-captions h3.large-font a,.vmagazine-post-carousel .block-carousel .single-post:hover .post-caption h3.large-font a,.vmea-post-block-five-inner .slick-dots li button:before,.vmagazine-rec-posts.recent-post-widget .recent-posts-content .recent-post-content a:hover, .widget .vmagazine-rec-posts.recent-post-widget .recent-posts-content .recent-post-content span a:hover
    {
        color: #ffc000;
    }
    .lSSlideOuter .lSPager.lSpg > li:hover a, .lSSlideOuter .lSPager.lSpg > li a:hover, .lSSlideOuter .lSPager.lSpg > li.active a,
    .widget.widget_vmagazine_video_player .vmagazine-yt-player .vmagazine-video-holder .video-thumbs .mCS-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar
    {
        background-color: #ffc000;
    }
    .widget .tagcloud a:hover,.vmagazine-container .vmagazine-sidebar .widget.widget_search form.search-form input.search-field:focus,.site-footer .footer-widgets .widget .tagcloud a:hover,header ul.site-header-cart li.cart-items .widget_shopping_cart p.woocommerce-mini-cart__buttons a.button,.widget .tagcloud a:hover, .top-footer-wrap .vmagazine-container .widget.widget_tag_cloud .tagcloud a:hover,
    .vmagazine-container #primary.vmagazine-content .entry-content nav.post-navigation .nav-links a:hover:before,
    .vmagazine-archive-layout2 .vmagazine-container main.site-main article .archive-post .entry-content a.vmagazine-archive-more, .vmagazine-archive-layout2 .vmagazine-container main.site-main article .archive-post .entry-content a.vmagazine-archive-more, .vmagazine-archive-layout2 .vmagazine-container main.site-main article .archive-post .entry-content a.vmagazine-archive-more,
    .ap_toggle,.ap_tagline_box.ap-all-border-box,.ap_tagline_box.ap-left-border-box,
    .vmagazine-archive-layout4 .vmagazine-container #primary article .entry-content a.vmagazine-archive-more,
    .vmagazine-archive-layout1 .vmagazine-container #primary article .archive-wrapper .entry-content a.vmagazine-archive-more,
    .vmagazine-container #primary.vmagazine-content .post-password-form input[type='submit'],
    .vmagazine-container #primary.vmagazine-content .post-password-form input[type='submit']:hover,
    .vmagazine-archive-layout2 .vmagazine-container main.site-main article.sticky .archive-post,
    .woocommerce-info,span.view-all a:hover,.vmagazine-post-col.block_layout_1 span.view-all a:hover,
    header.header-layout4 .logo-wrapper-section .vmagazine-container .vmagazine-search-form-primary form.search-form input.search-field:focus,
    .block-post-wrapper.block_layout_3 .view-all a:hover,
    .vmagazine-mul-cat.block-post-wrapper.layout-two .block-content-wrapper .right-posts-wrapper .view-all a:hover,
    .block-post-wrapper.list .gl-posts a.vm-ajax-load-more:hover, .block-post-wrapper.grid-two .gl-posts a.vm-ajax-load-more:hover,
    .vmagazine-cat-slider.block-post-wrapper.block_layout_1 .content-wrapper-featured-slider .lSSlideWrapper li.single-post .post-caption p span.read-more a,
    .no-results.not-found form.search-form input.search-submit,
    .vmagazine-container #primary .entry-content .post-tag .tags-links a,
    .related-content-wrapper a.vmagazine-related-more,.vmea-slider-block-one .thumb-outer-wrapp .slick-slide.slick-current
    {
        border-color: #ffc000;
    }
    .vmagazine-container .vmagazine-sidebar .widget.widget_recent_comments ul li span.comment-author-link,
    .vmagazine-container .vmagazine-sidebar .widget.widget_rss ul li a,.woocommerce-page .vmagazine-container.sidebar-shop .widget_recent_reviews ul.product_list_widget li .reviewer,
    .vmagazine-breadcrumb-wrapper .vmagazine-bread-home li.current
    {
        color: rgba(255,192,0,0.6);
    }
    .vmagazine-container .vmagazine-sidebar .widget.widget_search form.search-form input.search-field:hover
    {
        border-color: rgba(255,192,0,0.3);
    }
    .lSSlideOuter .lSPager.lSpg > li a
    {
        background-color: rgba(255,192,0,0.3);
    }
    .template-two .widget-title:before, .template-two .block-title:before,
    .template-two .vmagazine-container #primary.vmagazine-content .comment-respond h4.comment-reply-title:before, .template-two .vmagazine-container #primary.vmagazine-content .vmagazine-related-wrapper h4.related-title:before, .template-two .vmagazine-container #primary.vmagazine-content .post-review-wrapper .section-title:before,
    .template-two .vmagazine-container #primary.vmagazine-content .vmagazine-author-metabox h4.box-title:before{
        background: rgba(255,192,0,0.2);
    }
    .template-three .widget-title span:after, .template-three .block-title span:after,
    .template-three .vmagazine-container #primary.vmagazine-content .post-review-wrapper h4.section-title span:after, .template-three .vmagazine-container #primary.vmagazine-content .vmagazine-related-wrapper h4.related-title span:after, .template-three .vmagazine-container #primary.vmagazine-content .comment-respond h4.comment-reply-title span:after, .template-three .vmagazine-container #primary.vmagazine-content .post-review-wrapper h4.section-title span.title-bg:after,
    .template-three .vmagazine-container #primary.vmagazine-content .vmagazine-author-metabox h4.box-title span.title-bg:after,
    .vmagazine-ticker-wrapper .default-layout .vmagazine-ticker-caption span:before, .vmagazine-ticker-wrapper .layout-two .vmagazine-ticker-caption span:before
    {
        border-color: transparent transparent transparent #ffc000;
    }
    .vmagazine-rec-posts.recent-post-widget .recent-posts-content .recent-post-content span a:hover{
        color: rgba(255,192,0,0.6);
    }
    header.header-layout3 .site-main-nav-wrapper .top-right .vmagazine-search-form-primary{
        border-top: solid 2px #ffc000;
    }
    .template-four .widget-title span:after, .template-four .block-title span:after, .template-four .vmagazine-container #primary.vmagazine-content .vmagazine-related-wrapper h4.related-title span.title-bg:after, .template-four .comment-respond h4.comment-reply-title span:after, .template-four .vmagazine-container #primary.vmagazine-content .post-review-wrapper h4.section-title span:after
    {
        border-color: #ffc000 transparent transparent transparent;
    }
    .vmagazine-post-carousel .block-carousel .slick-dots li button::before, .vmagazine-post-carousel .block-carousel li.slick-active button:before,
    .vmagazine-block-post-slider .block-content-wrapper .block-post-slider-wrapper .slick-dots li button::before, .vmagazine-block-post-slider .block-content-wrapper .block-post-slider-wrapper li.slick-active button:before,.vmagazine-slider-tab-carousel .block-content-wrapper-carousel .slick-dots li button::before, .vmagazine-slider-tab-carousel .block-content-wrapper-carousel .slick-dots li.slick-active button::before
    {
        background: rgba(255,192,0,0.6);
    }
    .slider-tab-wrapper .block-post-wrapper.block_layout_1 .block-content-wrapper .tab-cat-slider.slick-slider .slick-active.slick-center .post-thumb .image-overlay
    {
        background: rgba(255,192,0,0.4);
    }
    .vmagazine-post-carousel .block-carousel ul.slick-dots:before,.vmagazine-block-post-slider .block-content-wrapper .block-post-slider-wrapper ul.slick-dots:before,.vmagazine-block-post-slider .block-content-wrapper .block-post-slider-wrapper ul.slick-dots:after,.vmagazine-post-carousel .block-carousel ul.slick-dots:after,.vmagazine-slider-tab-carousel .block-content-wrapper-carousel ul.slick-dots:before,.vmagazine-slider-tab-carousel .block-content-wrapper-carousel ul.slick-dots:after
    {
        background: rgba(255,192,0,0.4);
    }
    .vmagazine-ticker-wrapper .default-layout .vmagazine-ticker-caption, .vmagazine-ticker-wrapper .layout-two .vmagazine-ticker-caption
    {
        color: #000000;
    }
    .vmagazine-ticker-wrapper .default-layout .lSSlideOuter .lSSlideWrapper .lSSlide .single-news .date, .vmagazine-ticker-wrapper .default-layout .lSSlideOuter .lSSlideWrapper .lslide .single-news .date, .vmagazine-ticker-wrapper .layout-two .lSSlideOuter .lSSlideWrapper .lSSlide .single-news .date, .vmagazine-ticker-wrapper .layout-two .lSSlideOuter .lSSlideWrapper .lslide .single-news .date
    {
        color: #a0a0a0;
    }
    .vmagazine-ticker-wrapper .default-layout .lSSlideOuter .lSSlideWrapper .lSSlide .single-news .date:before, .vmagazine-ticker-wrapper .default-layout .lSSlideOuter .lSSlideWrapper .lslide .single-news .date:before, .vmagazine-ticker-wrapper .layout-two .lSSlideOuter .lSSlideWrapper .lSSlide .single-news .date:before, .vmagazine-ticker-wrapper .layout-two .lSSlideOuter .lSSlideWrapper .lslide .single-news .date:before
    {
        background: #a0a0a0;
    }
    .block-post-wrapper.block_layout_3 .single-post .content-wrapper .small-font a:hover,
    .vmagazine-post-col.block_layout_1 .single-post .content-wrapper .large-font a:hover,
    .vmagazine-rec-posts.recent-post-widget .recent-posts-content .recent-post-content a:hover, .vmagazine-rec-posts.recent-post-widget .recent-posts-content .recent-post-content span a:hover,
    .vmagazine-post-col.block_layout_1 .single-post .content-wrapper .small-font a:hover,
    .vmagazine-featured-slider.featured-slider-wrapper .featured-posts li.f-slide .slider-caption h3.small-font a:hover,
    .vmagazine-mul-cat.block-post-wrapper.layout-two .block-content-wrapper .right-posts-wrapper .single-post h3.small-font a:hover,
    .vmagazine-mul-cat.block-post-wrapper.layout-two .block-content-wrapper .left-post-wrapper .single-post:hover .post-caption-wrapper .small-font a,
    .vmagazine-block-post-slider .block-content-wrapper .block-post-slider-wrapper .slider-item-wrapper .slider-bigthumb:hover .post-captions h3.large-font a, .vmagazine-block-post-slider .block-content-wrapper .block-post-slider-wrapper .small-thumbs-wrapper .small-thumbs-inner .slider-smallthumb:hover .post-captions h3.large-font a,.vmagazine-post-carousel .block-carousel .single-post:hover .post-caption h3.large-font a,h3 a:hover,h2 a:hover

    {
        color: #ffc000;
    }
    .vmagazine-breadcrumb-wrapper .vmagazine-bread-home li.current
    {
        color: #ffc000;
    }
    .template-two .widget-title:before, .template-two .block-title:before
    {
        background: rgba(255,192,0,0.2);
    }
    .widget-title:after, .block-title:after{
        background: #ffc000;
    }
</style>
<link rel='stylesheet' id='vmagazine-responsive-css'  href='https://cauthu.com.vn/wp-content/themes/vmagazine/assets/css/responsive.css?ver=0.1' type='text/css' media='all' />

<link rel='stylesheet' id='um_fonticons_ii-css'  href='https://cauthu.com.vn/wp-content/plugins/ultimate-member/assets/css/um-fonticons-ii.css?ver=2.2.0' type='text/css' media='all' />
<link rel='stylesheet' id='um_fonticons_fa-css'  href='https://cauthu.com.vn/wp-content/plugins/ultimate-member/assets/css/um-fonticons-fa.css?ver=2.2.0' type='text/css' media='all' />
<link rel='stylesheet' id='select2-css'  href='https://cauthu.com.vn/wp-content/plugins/ultimate-member/assets/css/select2/select2.min.css?ver=4.0.13' type='text/css' media='all' />
<link rel='stylesheet' id='um_crop-css'  href='https://cauthu.com.vn/wp-content/plugins/ultimate-member/assets/css/um-crop.css?ver=2.2.0' type='text/css' media='all' />
<link rel='stylesheet' id='um_modal-css'  href='https://cauthu.com.vn/wp-content/plugins/ultimate-member/assets/css/um-modal.css?ver=2.2.0' type='text/css' media='all' />
<link rel='stylesheet' id='um_styles-css'  href='https://cauthu.com.vn/wp-content/plugins/ultimate-member/assets/css/um-styles.css?ver=2.2.0' type='text/css' media='all' />
<link rel='stylesheet' id='um_profile-css'  href='https://cauthu.com.vn/wp-content/plugins/ultimate-member/assets/css/um-profile.css?ver=2.2.0' type='text/css' media='all' />
<link rel='stylesheet' id='um_account-css'  href='https://cauthu.com.vn/wp-content/plugins/ultimate-member/assets/css/um-account.css?ver=2.2.0' type='text/css' media='all' />
<link rel='stylesheet' id='um_misc-css'  href='https://cauthu.com.vn/wp-content/plugins/ultimate-member/assets/css/um-misc.css?ver=2.2.0' type='text/css' media='all' />
<link rel='stylesheet' id='um_fileupload-css'  href='https://cauthu.com.vn/wp-content/plugins/ultimate-member/assets/css/um-fileupload.css?ver=2.2.0' type='text/css' media='all' />
<link rel='stylesheet' id='um_datetime-css'  href='https://cauthu.com.vn/wp-content/plugins/ultimate-member/assets/css/pickadate/default.css?ver=2.2.0' type='text/css' media='all' />
<link rel='stylesheet' id='um_datetime_date-css'  href='https://cauthu.com.vn/wp-content/plugins/ultimate-member/assets/css/pickadate/default.date.css?ver=2.2.0' type='text/css' media='all' />
<link rel='stylesheet' id='um_datetime_time-css'  href='https://cauthu.com.vn/wp-content/plugins/ultimate-member/assets/css/pickadate/default.time.css?ver=2.2.0' type='text/css' media='all' />
<link rel='stylesheet' id='um_raty-css'  href='https://cauthu.com.vn/wp-content/plugins/ultimate-member/assets/css/um-raty.css?ver=2.2.0' type='text/css' media='all' />
<link rel='stylesheet' id='um_scrollbar-css'  href='https://cauthu.com.vn/wp-content/plugins/ultimate-member/assets/css/simplebar.css?ver=2.2.0' type='text/css' media='all' />
<link rel='stylesheet' id='um_tipsy-css'  href='https://cauthu.com.vn/wp-content/plugins/ultimate-member/assets/css/um-tipsy.css?ver=2.2.0' type='text/css' media='all' />
<link rel='stylesheet' id='um_responsive-css'  href='https://cauthu.com.vn/wp-content/plugins/ultimate-member/assets/css/um-responsive.css?ver=2.2.0' type='text/css' media='all' />
<link rel='stylesheet' id='um_default_css-css'  href='https://cauthu.com.vn/wp-content/plugins/ultimate-member/assets/css/um-old-default.css?ver=2.2.0' type='text/css' media='all' />
<link rel='stylesheet' id='soccer-info-front-css'  href='https://cauthu.com.vn/wp-content/plugins/soccer-info/css/soccer-info-front.css?ver=5.8' type='text/css' media='all' />
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-includes/js/jquery/jquery.min.js?ver=3.6.0' id='jquery-core-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.3.2' id='jquery-migrate-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='//ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min.js?ver=5.8' id='ap-jquery-ui-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/plugins/accesspress-anonymous-post-pro/js/tag-it.js?ver=3.2.6' id='ap-tagit-js-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/plugins/accesspress-anonymous-post-pro/js/tag-it-custom.js?ver=3.2.6' id='ap-tagit-custom-js-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/plugins/accesspress-anonymous-post-pro/js/fileuploader.js?ver=5.8' id='ap-fileuploader-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/plugins/accesspress-anonymous-post-pro/lightbox/js/lightbox.js?ver=3.2.6' id='ap-lightbox-js-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-includes/js/jquery/ui/core.min.js?ver=1.12.1' id='jquery-ui-core-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-includes/js/jquery/ui/datepicker.min.js?ver=1.12.1' id='jquery-ui-datepicker-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' id='jquery-ui-datepicker-js-after'>
jQuery(document).ready(function(jQuery){jQuery.datepicker.setDefaults({"closeText":"\u0110\u00f3ng","currentText":"H\u00f4m nay","monthNames":["Th\u00e1ng M\u1ed9t","Th\u00e1ng Hai","Th\u00e1ng Ba","Th\u00e1ng T\u01b0","Th\u00e1ng N\u0103m","Th\u00e1ng S\u00e1u","Th\u00e1ng B\u1ea3y","Th\u00e1ng T\u00e1m","Th\u00e1ng Ch\u00edn","Th\u00e1ng M\u01b0\u1eddi","Th\u00e1ng M\u01b0\u1eddi M\u1ed9t","Th\u00e1ng M\u01b0\u1eddi Hai"],"monthNamesShort":["Th1","Th2","Th3","Th4","Th5","Th6","Th7","Th8","Th9","Th10","Th11","Th12"],"nextText":"Ti\u1ebfp theo","prevText":"Quay v\u1ec1","dayNames":["Ch\u1ee7 Nh\u1eadt","Th\u1ee9 Hai","Th\u1ee9 Ba","Th\u1ee9 T\u01b0","Th\u1ee9 N\u0103m","Th\u1ee9 S\u00e1u","Th\u1ee9 B\u1ea3y"],"dayNamesShort":["CN","T2","T3","T4","T5","T6","T7"],"dayNamesMin":["C","H","B","T","N","S","B"],"dateFormat":"dd\/mm\/yy","firstDay":1,"isRTL":false});});
</script>
<script type='text/javascript' id='ap-frontend-js-js-extra'>
/* <![CDATA[ */
var ap_fileuploader = {"upload_url":"https:\/\/cauthu.com.vn\/wp-admin\/admin-ajax.php","nonce":"5c62d9ad6e"};
var ap_form_required_message = "This field is required";
var ap_captcha_error_message = "Sum is not correct.";
/* ]]> */
</script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/plugins/accesspress-anonymous-post-pro/js/frontend.js?ver=3.2.6' id='ap-frontend-js-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cdn.linearicons.com/free/1.0.0/svgembedder.min.js?ver=5.8' id='ip-linearicons-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/plugins/ultimate-author-box/js/jquery-ui.js?ver=1.12.1' id='jquery-ui-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/plugins/ultimate-author-box/js/slick/slick.js?ver=1.0.6' id='uab-slick-js-js'></script>
<script type='text/javascript' id='uab-frontend-script-js-extra'>
/* <![CDATA[ */
var uab_js_obj = {"ajax_url":"https:\/\/cauthu.com.vn\/wp-admin\/admin-ajax.php","_wpnonce":"7a3a6c63bd","_wpnonce_popup":"4e228beee6"};
/* ]]> */
</script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/plugins/ultimate-author-box/js/frontend.js?ver=2.0.6' id='uab-frontend-script-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/plugins/ultimate-form-builder/js/fileuploader.js?ver=1.1.9' id='ufb-fileuploader-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/plugins/ultimate-form-builder/js/jquery.selectbox-0.2.min.js?ver=1.1.9' id='ufb-custom-select-js-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-includes/js/jquery/ui/mouse.min.js?ver=1.12.1' id='jquery-ui-mouse-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-includes/js/jquery/ui/slider.min.js?ver=1.12.1' id='jquery-ui-slider-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/plugins/ultimate-form-builder/js/jquery-ui-touchpad.js?ver=1.1.9' id='ufb-touch-ui-js'></script>
<script type='text/javascript' id='ufb-front-js-js-extra'>
/* <![CDATA[ */
var frontend_js_obj = {"default_error_message":"This field is required","ajax_url":"https:\/\/cauthu.com.vn\/wp-admin\/admin-ajax.php","ajax_nonce":"e0dc29a471","preview_img":"https:\/\/cauthu.com.vn\/wp-content\/plugins\/ultimate-form-builder\/images\/no-preview.png"};
/* ]]> */
</script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/plugins/ultimate-form-builder/js/frontend.js?ver=1.1.9' id='ufb-front-js-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/plugins/vmagazine-companion/assets/js/shortcodes-front.js?ver=5.8' id='vmagazine-shortcodes-front-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/plugins/ultimate-member/assets/js/um-gdpr.min.js?ver=2.2.0' id='um-gdpr-js'></script>
<link rel="https://api.w.org/" href="https://cauthu.com.vn/wp-json/" /><link rel="alternate" type="application/json" href="https://cauthu.com.vn/wp-json/wp/v2/pages/134" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://cauthu.com.vn/xmlrpc.php?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://cauthu.com.vn/wp-includes/wlwmanifest.xml" /> 
<meta name="generator" content="WordPress 5.8" />
<link rel='shortlink' href='https://cauthu.com.vn/' />
<link rel="alternate" type="application/json+oembed" href="https://cauthu.com.vn/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fcauthu.com.vn%2F" />
<link rel="alternate" type="text/xml+oembed" href="https://cauthu.com.vn/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fcauthu.com.vn%2F&#038;format=xml" />
<script type="rocketlazyloadscript" async src="https://cdnv.tpmedia.online/publisher/cauthu/tmpPub.min.js"></script>

<meta property="fb:pages" content="1646483089007232" />
<!-- Global site tag (gtag.js) - Google Analytics -->
<script type="rocketlazyloadscript" async src="https://www.googletagmanager.com/gtag/js?id=UA-149066972-1"></script>
<script type="rocketlazyloadscript">
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-149066972-1');
</script>
<script type="rocketlazyloadscript"> (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); ga('create', 'UA-149066972-1', 'auto'); ga('set', 'campaignName', 'Instant Article'); ga('set', 'campaignSource', 'Instant Article'); ga('set', 'campaignMedium', 'social'); ga('send', { hitType: 'pageview', location: ia_document.shareURL, title: ia_document.title }); </script>
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "Organization",
  "name": "Cauthu.com.vn",
  "alternateName": "Cauthu.com.vn",
  "url": "https://cauthu.com.vn",
  "logo": "https://cauthu.com.vn/wp-content/uploads/2019/01/logocauthu1.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+84 909052985",
    "contactType": "customer service",
    "contactOption": "TollFree",
    "areaServed": "VN",
    "availableLanguage": "Vietnamese"
  },
  "sameAs": [
    "https://www.facebook.com/trollbongda/",
    "https://www.youtube.com/channel/UCczppoJrRCzyEyUOUCCZhPw"
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "LocalBusiness",
  "name": "Cauthu.com.vn",
  "image": "https://cauthu.com.vn/wp-content/uploads/2017/11/hdhd.jpg",
  "@id": "",
  "url": "https://cauthu.com.vn/",
  "telephone": "+84 909052985",
  "priceRange": "10000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "47/92 Nguyá»n Há»¯u Tiáº¿n",
    "addressLocality": "Há» ChÃ­ Minh",
    "postalCode": "700000",
    "addressCountry": "VN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 10.8109366,
    "longitude": 106.62533480000002
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  }
}
</script>
		<style type="text/css">
			.um_request_name {
				display: none !important;
			}
		</style>
	<style type="text/css">.recentcomments a{display:inline !important;padding:0 !important;margin:0 !important;}</style>		<style type="text/css">
					.site-title,
			.site-description {
				position: absolute;
				clip: rect(1px, 1px, 1px, 1px);
			}
				</style>
		                <style type="text/css" media="all"
                       id="siteorigin-panels-layouts-head">/* Layout 134 */ #pgc-134-0-0 , #pgc-134-3-0 , #pgc-134-5-0 { width:100%;width:calc(100% - ( 0 * 30px ) ) } #pg-134-0 , #pg-134-2 , #pg-134-6 { margin-bottom:10px } #pgc-134-1-0 { width:66.401%;width:calc(66.401% - ( 0.33598984771574 * 30px ) ) } #pgc-134-1-1 { width:33.599%;width:calc(33.599% - ( 0.66401015228426 * 30px ) ) } #pg-134-1 , #pl-134 .so-panel { margin-bottom:30px } #pgc-134-2-0 , #pgc-134-2-1 , #pgc-134-2-2 , #pgc-134-4-0 , #pgc-134-4-1 , #pgc-134-4-2 , #pgc-134-6-0 , #pgc-134-6-1 , #pgc-134-6-2 { width:33.3333%;width:calc(33.3333% - ( 0.66666666666667 * 30px ) ) } #pg-134-3 , #pg-134-5 { margin-bottom:7px } #pg-134-4 { margin-bottom:-7px } #pl-134 .so-panel:last-of-type { margin-bottom:0px } #pg-134-0.panel-no-style, #pg-134-0.panel-has-style > .panel-row-style , #pg-134-1.panel-no-style, #pg-134-1.panel-has-style > .panel-row-style , #pg-134-2.panel-no-style, #pg-134-2.panel-has-style > .panel-row-style , #pg-134-3.panel-no-style, #pg-134-3.panel-has-style > .panel-row-style , #pg-134-4.panel-no-style, #pg-134-4.panel-has-style > .panel-row-style , #pg-134-5.panel-no-style, #pg-134-5.panel-has-style > .panel-row-style , #pg-134-6.panel-no-style, #pg-134-6.panel-has-style > .panel-row-style { -webkit-align-items:flex-start;align-items:flex-start } #pg-134-1> .panel-row-style , #pg-134-2> .panel-row-style , #pg-134-4> .panel-row-style , #pg-134-6> .panel-row-style { padding:10px 10px 10px 10px } #pgc-134-2-0 , #pgc-134-6-0 { align-self:auto } #pg-134-5> .panel-row-style { padding:30px 0px 0px 0px } @media (max-width:780px){ #pg-134-0.panel-no-style, #pg-134-0.panel-has-style > .panel-row-style , #pg-134-1.panel-no-style, #pg-134-1.panel-has-style > .panel-row-style , #pg-134-2.panel-no-style, #pg-134-2.panel-has-style > .panel-row-style , #pg-134-3.panel-no-style, #pg-134-3.panel-has-style > .panel-row-style , #pg-134-4.panel-no-style, #pg-134-4.panel-has-style > .panel-row-style , #pg-134-5.panel-no-style, #pg-134-5.panel-has-style > .panel-row-style , #pg-134-6.panel-no-style, #pg-134-6.panel-has-style > .panel-row-style { -webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column } #pg-134-0 > .panel-grid-cell , #pg-134-0 > .panel-row-style > .panel-grid-cell , #pg-134-1 > .panel-grid-cell , #pg-134-1 > .panel-row-style > .panel-grid-cell , #pg-134-2 > .panel-grid-cell , #pg-134-2 > .panel-row-style > .panel-grid-cell , #pg-134-3 > .panel-grid-cell , #pg-134-3 > .panel-row-style > .panel-grid-cell , #pg-134-4 > .panel-grid-cell , #pg-134-4 > .panel-row-style > .panel-grid-cell , #pg-134-5 > .panel-grid-cell , #pg-134-5 > .panel-row-style > .panel-grid-cell , #pg-134-6 > .panel-grid-cell , #pg-134-6 > .panel-row-style > .panel-grid-cell { width:100%;margin-right:0 } #pg-134-0 , #pg-134-1 , #pg-134-2 , #pg-134-3 , #pg-134-4 , #pg-134-5 , #pg-134-6 { margin-bottom:px } #pgc-134-1-0 , #pgc-134-2-0 , #pgc-134-2-1 , #pgc-134-4-0 , #pgc-134-4-1 , #pgc-134-6-0 , #pgc-134-6-1 { margin-bottom:30px } #pl-134 .panel-grid-cell { padding:0 } #pl-134 .panel-grid .panel-grid-cell-empty { display:none } #pl-134 .panel-grid .panel-grid-cell-mobile-last { margin-bottom:0px } #panel-134-0-0-0> .panel-widget-style { padding:10px 10px 10px 10px }  } </style><link rel="icon" href="https://cauthu.com.vn/wp-content/uploads/2021/06/favicon-cauthu-100x100.png" sizes="32x32" />
<link rel="icon" href="https://cauthu.com.vn/wp-content/uploads/2021/06/favicon-cauthu.png" sizes="192x192" />
<link rel="apple-touch-icon" href="https://cauthu.com.vn/wp-content/uploads/2021/06/favicon-cauthu.png" />
<meta name="msapplication-TileImage" content="https://cauthu.com.vn/wp-content/uploads/2021/06/favicon-cauthu.png" />
		<style type="text/css" id="wp-custom-css">
			.vmagazine-archive-more {
    display: none!important;
}
.so-widget-sow-tabs-default-02e4508ec074-134 .sow-tabs .sow-tabs-tab-container{
    background-color: #ffc000 !important;
	padding: 0 !important;
}
.so-widget-sow-tabs-default-02e4508ec074-134 .sow-tabs .sow-tabs-panel-container .sow-tabs-panel {
    padding: 0 !important;
}
.sow-tabs-panel-content p{
	    margin-bottom: 0;
}
div.sitable table tbody td.rank{
	    text-align: center;
}
div.sitable table thead th, div.sitable table tbody td{
	padding: 10px 5px;
}
div.sifixtures table tbody td.date{
	    text-align: center;
    font-size: 16px;
    font-weight: 600;
	padding: 5px;
}
div.sifixtures table tbody td{
	padding: 5px;
}
.so-widget-sow-tabs-default-02e4508ec074-134 .sow-tabs .sow-tabs-tab-container .sow-tabs-tab{
	    padding: 10px 3px !important;
}
.so-widget-sow-tabs-default-02e4508ec074-134 .sow-tabs .sow-tabs-tab-container .sow-tabs-tab.sow-tabs-tab-selected, .so-widget-sow-tabs-default-02e4508ec074-134 .sow-tabs .sow-tabs-tab-container .sow-tabs-tab:hover {
    border-top: 3px solid #2d2d2d!important;
}
.sow-tabs-panel-content .sitable, .sow-tabs-panel-content .sifixtures, .sow-tabs-panel-content .siresults{
    height: 500px;
    overflow-y: scroll;
}
td.team span.links img, td.team_b span.links img {
    margin-right: 5px;
}		</style>
		<script type="rocketlazyloadscript">window.dzsvg_settings= {dzsvg_site_url: "https://cauthu.com.vn/",version: "11.721",ajax_url: "https://cauthu.com.vn/wp-admin/admin-ajax.php",deeplink_str: "the-video", debug_mode:"off", merge_social_into_one:"off"}; window.dzsvg_site_url="https://cauthu.com.vn";window.dzsvg_plugin_url="https://cauthu.com.vn/wp-content/plugins/dzs-videogallery/";</script><style class="dzsvg-extra-css">
.scroller-con.skin_apple > .scrollbar > .scrollbary{
    background: #ffc000!important;
}
.dzsvg-preloader.loader-container.ball-pulse {
    display: none;
}
.video-cau-thu .textwidget.custom-html-widget {
    padding: 0!important;
}</style><noscript><style id="rocket-lazyload-nojs-css">.rll-youtube-player, [data-lazy-src]{display:none !important;}</style></noscript></head>

<body class="home page-template page-template-tpl-blank page-template-tpl-blank-php page page-id-134 wp-custom-logo siteorigin-panels siteorigin-panels-before-js siteorigin-panels-home vmagazineprotg group-blog cat-style-1 hover-effect-1 post-single-layout3 fullwidth_layout right-sidebar template-one vmagazine-single-layout">



	            <a class="skip-link screen-reader-text" href="#site-navigation">Skip to navigation</a>
            <a class="skip-link screen-reader-text" href="#main">Skip to content</a>
            
    <div class="vmagazine-mobile-search-wrapper">
        <div class="mob-search-form">
                         <div class="img-overlay"></div>
           
            <div class="mob-srch-wrap">
                <div class="nav-close">
                    <span></span>
                    <span></span>
                </div>
                <div class="mob-search-wrapp">
                    
<form method="get" class="search-form" action="https://cauthu.com.vn/">
	<label>
		<span class="screen-reader-text">Search for:</span>
		<input type="search" autocomplete="off" class="search-field" placeholder="TÃ¬m kiáº¿m ..." value="" name="s">
	</label>
	<input type="submit" class="search-submit" value="Search">

</form>

                    <div class="search-content"></div>
                    <div class="block-loader" style="display:none;">
                        <div class="sampleContainer">
                            <div class="loader">
                                <span class="dot dot_1"></span>
                                <span class="dot dot_2"></span>
                                <span class="dot dot_3"></span>
                                <span class="dot dot_4"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<div class="vmagazine-mobile-navigation-wrapper">
 
    <div class="mobile-navigation">
                    <div class="img-overlay"></div>
        
        <div class="vmag-opt-wrap">
            <div class="nav-close">
                <span></span>
                <span></span>
            </div>

            <div class="icon-wrapper">
                	    <ul class="social">
	    			        <li>
		        	<a href="#" target="_blank">
		        		<i class="fa fa-facebook"></i>
		        	</a>
		        </li>
	        		        <li>
		        	<a href="#" target="_blank">
		        		<i class="fa fa-twitter"></i>
		        	</a>
		        </li>
	        		</ul>									
	                </div>
            <div class="site-branding">                 
                            <a href="https://cauthu.com.vn/">
                <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="Home" data-lazy-src="https://beta.cauthu.com.vn/wp-content/uploads/2021/06/logo-cauthu.png"><noscript><img src="https://beta.cauthu.com.vn/wp-content/uploads/2021/06/logo-cauthu.png" alt="Home"></noscript>
            </a>
                        <div class="site-title-wrapper">
                                            <div class="site-title"><a href="https://cauthu.com.vn/" rel="home">Cáº§u Thá»§</a></div>
                                            <p class="site-description">Máº¡ng xÃ£ há»i tin tá»©c bÃ³ng ÄÃ¡ nhanh, nÃ³ng, cáº­p nháº­t liÃªn tá»¥c 24h</p>
                                    </div>
            </div><!-- .site-branding -->
            	<div class="vmagazine-nav-wrapper">
		<div class="vmagazine-container">			
			<nav class="main-navigation clearfix" >
				<div class="nav-wrapper">
					
		                    <div class="index-icon">
            <a href="https://cauthu.com.vn/"><i class="fa fa-home"></i></a>
        </div>
    					<div class="menu-mmnu-container"><ul id="primary-menu" class="menu vmagazine_mega_menu"><li id="menu-item-356664" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children page_item page-item-356664 no-mega-menu"><a href="https://cauthu.com.vn/bong-da-viet-nam">Viá»t Nam</a>
<ul class="sub-menu">
	<li id="menu-item-357096" class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357096 no-mega-menu"><a href="https://cauthu.com.vn/bong-da-viet-nam/v-league">V-League</a></li>
	<li id="menu-item-357094" class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357094 no-mega-menu"><a href="https://cauthu.com.vn/bong-da-viet-nam/hang-nhat">Háº¡ng nháº¥t</a></li>
	<li id="menu-item-357097" class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357097 no-mega-menu"><a href="https://cauthu.com.vn/bong-da-viet-nam/doi-tuyen-quoc-gia">Äá»i tuyá»n quá»c gia</a></li>
	<li id="menu-item-357095" class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357095 no-mega-menu"><a href="https://cauthu.com.vn/bong-da-viet-nam/tuyen-olympic">Tuyá»n Olympic</a></li>
	<li id="menu-item-357092" class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357092 no-mega-menu"><a href="https://cauthu.com.vn/bong-da-viet-nam/bong-da-nu">BÃ³ng ÄÃ¡ ná»¯</a></li>
	<li id="menu-item-357093" class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357093 no-mega-menu"><a href="https://cauthu.com.vn/bong-da-viet-nam/bong-da-phui">BÃ³ng ÄÃ¡ phá»§i</a></li>
</ul>
</li>
<li id="menu-item-356665" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children page_item page-item-356665 no-mega-menu"><a href="https://cauthu.com.vn/bong-da-anh">Anh</a>
<ul class="sub-menu">
	<li id="menu-item-357101" class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357101 no-mega-menu"><a href="https://cauthu.com.vn/bong-da-anh/premier-league">Premier League</a></li>
	<li id="menu-item-357099" class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357099 no-mega-menu"><a href="https://cauthu.com.vn/bong-da-anh/cup-fa">CÃºp FA</a></li>
	<li id="menu-item-357100" class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357100 no-mega-menu"><a href="https://cauthu.com.vn/bong-da-anh/cup-lien-doan">CÃºp LiÃªn ÄoÃ n</a></li>
	<li id="menu-item-357098" class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357098 no-mega-menu"><a href="https://cauthu.com.vn/bong-da-anh/doi-tuyen-anh">Äá»i tuyá»n Anh</a></li>
</ul>
</li>
<li id="menu-item-356666" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children page_item page-item-356666 no-mega-menu"><a href="https://cauthu.com.vn/tay-ban-nha">TÃ¢y Ban Nha</a>
<ul class="sub-menu">
	<li id="menu-item-357103" class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357103 no-mega-menu"><a href="https://cauthu.com.vn/tay-ban-nha/la-liga">La Liga</a></li>
	<li id="menu-item-357102" class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357102 no-mega-menu"><a href="https://cauthu.com.vn/tay-ban-nha/cup-nha-vua">CÃºp nhÃ  Vua</a></li>
	<li id="menu-item-357104" class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357104 no-mega-menu"><a href="https://cauthu.com.vn/tay-ban-nha/doi-tuyen-tay-ban-nha">Äá»i tuyá»n TÃ¢y Ban Nha</a></li>
</ul>
</li>
<li id="menu-item-356667" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children page_item page-item-356667 no-mega-menu"><a href="https://cauthu.com.vn/duc">Äá»©c</a>
<ul class="sub-menu">
	<li id="menu-item-357105" class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357105 no-mega-menu"><a href="https://cauthu.com.vn/duc/bundesliga">Bundesliga</a></li>
	<li id="menu-item-357106" class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357106 no-mega-menu"><a href="https://cauthu.com.vn/duc/cup-quoc-gia-duc">CÃºp Quá»c Gia Äá»©c</a></li>
	<li id="menu-item-357107" class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357107 no-mega-menu"><a href="https://cauthu.com.vn/duc/doi-tuyen-duc">Äá»i tuyá»n Äá»©c</a></li>
</ul>
</li>
<li id="menu-item-356668" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children page_item page-item-356668 no-mega-menu"><a href="https://cauthu.com.vn/chau-au">ChÃ¢u Ãu</a>
<ul class="sub-menu">
	<li id="menu-item-357108" class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357108 no-mega-menu"><a href="https://cauthu.com.vn/chau-au/champions-league">Champions League</a></li>
	<li id="menu-item-357110" class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357110 no-mega-menu"><a href="https://cauthu.com.vn/chau-au/europa-league">Europa League</a></li>
	<li id="menu-item-357111" class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357111 no-mega-menu"><a href="https://cauthu.com.vn/chau-au/nations-league">Nations League</a></li>
	<li id="menu-item-357109" class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357109 no-mega-menu"><a href="https://cauthu.com.vn/chau-au/euro-2020">Euro 2020</a></li>
</ul>
</li>
<li id="menu-item-356669" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children page_item page-item-356669 no-mega-menu"><a href="https://cauthu.com.vn/cac-giai-khac">Giáº£i khÃ¡c</a>
<ul class="sub-menu">
	<li id="menu-item-357114" class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357114 no-mega-menu"><a href="https://cauthu.com.vn/cac-giai-khac/serie-a">Serie A</a></li>
	<li id="menu-item-357112" class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357112 no-mega-menu"><a href="https://cauthu.com.vn/cac-giai-khac/ligue-1">Ligue 1</a></li>
	<li id="menu-item-357113" class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357113 no-mega-menu"><a href="https://cauthu.com.vn/cac-giai-khac/muon-mau-bong-da">MuÃ´n mÃ u bÃ³ng ÄÃ¡</a></li>
</ul>
</li>
<li id="menu-item-356670" class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-356670 no-mega-menu"><a href="https://cauthu.com.vn/hau-truong">Háº­u trÆ°á»ng</a></li>
<li id="menu-item-356671" class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-356671 no-mega-menu"><a href="https://cauthu.com.vn/thich-me">ThÃ­ch mÃª</a></li>
</ul></div>				</div><!-- .nav-wrapper -->
			</nav><!-- #site-navigation -->

			
		</div><!-- .vmagazine-container -->	
	</div>
	    
        </div>
    </div>
</div>
	 <div class="vmagazine-main-wrapper">
		 
		     <div class="vmagazine-mob-outer">
        <div class="vmagazine-mobile-nav-wrapp">
            <div class="mob-search-icon">
                <span>
                    <i class="fa fa-search" aria-hidden="true"></i>
                </span>
             </div>
             <div class="vmagazine-logo">
                            <a href="https://cauthu.com.vn/">
                <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="Home" data-lazy-src="https://beta.cauthu.com.vn/wp-content/uploads/2021/06/logo-cauthu.png"><noscript><img src="https://beta.cauthu.com.vn/wp-content/uploads/2021/06/logo-cauthu.png" alt="Home"></noscript>
            </a>
                     </div>
             <div class="nav-toggle">
                <div class="toggle-wrap">
                 <span></span>
                </div>
             </div>
        </div>
    </div>

		 <div class="vmagazine-header-handle">
		 	
<div class="sidebar-wrapper">
	<div class="sidebar-close">
		<i class="fa fa-times"></i>
	</div>
	            <div class="site-branding">                 
                <a href="https://cauthu.com.vn/" class="custom-logo-link" rel="home" aria-current="page"><img width="325" height="107" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20325%20107'%3E%3C/svg%3E" class="custom-logo" alt="Cáº§u Thá»§" data-lazy-srcset="https://cauthu.com.vn/wp-content/uploads/2021/06/logo-cauthu.png 325w, https://cauthu.com.vn/wp-content/uploads/2021/06/logo-cauthu-300x99.png 300w, https://cauthu.com.vn/wp-content/uploads/2021/06/logo-cauthu-100x33.png 100w, https://cauthu.com.vn/wp-content/uploads/2021/06/logo-cauthu-321x107.png 321w" data-lazy-sizes="(max-width: 325px) 100vw, 325px" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/06/logo-cauthu.png" /><noscript><img width="325" height="107" src="https://cauthu.com.vn/wp-content/uploads/2021/06/logo-cauthu.png" class="custom-logo" alt="Cáº§u Thá»§" srcset="https://cauthu.com.vn/wp-content/uploads/2021/06/logo-cauthu.png 325w, https://cauthu.com.vn/wp-content/uploads/2021/06/logo-cauthu-300x99.png 300w, https://cauthu.com.vn/wp-content/uploads/2021/06/logo-cauthu-100x33.png 100w, https://cauthu.com.vn/wp-content/uploads/2021/06/logo-cauthu-321x107.png 321w" sizes="(max-width: 325px) 100vw, 325px" /></noscript></a>                <div class="site-title-wrapper">
                                            <h1 class="site-title"><a href="https://cauthu.com.vn/" rel="home">Cáº§u Thá»§</a></h1>
                                            <p class="site-description">Máº¡ng xÃ£ há»i tin tá»©c bÃ³ng ÄÃ¡ nhanh, nÃ³ng, cáº­p nháº­t liÃªn tá»¥c 24h</p>
                                    </div>
            </div>
        
	<div class="sidebar-widget-area">
			</div>
</div>


<header id="masthead" class="site-header header-layout3">

<div class="vmagazine-top-header">
	<div class="vmagazine-container">
		<div class="top-menu">
			<div class="top-men-wrapp"><ul id="top-menu" class="menu vmagazine_mega_menu"><li id="menu-item-356677" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-134 current_page_item page_item page-item-356677 no-mega-menu"><a href="https://cauthu.com.vn/">Trang chá»§</a></li>
<li id="menu-item-356866" class="menu-item menu-item-type-post_type menu-item-object-page page_item page-item-356866 no-mega-menu"><a href="https://cauthu.com.vn/dang-bai">ÄÄng bÃ i</a></li>
<li id="menu-item-356941" class="menu-item menu-item-type-post_type menu-item-object-page page_item page-item-356941 no-mega-menu"><a href="https://cauthu.com.vn/dang-ky-tai-khoan">ÄÄng kÃ½</a></li>
<li id="menu-item-356915" class="menu-item menu-item-type-post_type menu-item-object-page page_item page-item-356915 no-mega-menu"><a href="https://cauthu.com.vn/dien-dan">Diá»n ÄÃ n</a></li>
<li id="menu-item-356679" class="menu-item menu-item-type-post_type menu-item-object-page page_item page-item-356679 no-mega-menu"><a href="https://cauthu.com.vn/dieu-khoan">Äiá»u khoáº£n sá»­ dá»¥ng</a></li>
</ul></div>		</div>
					
	</div>
</div><!-- .vmagazine-top-header -->

<div class="logo-wrapper">
	<div class="vmagazine-container">
		<div class="site-branding">					
			<a href="https://cauthu.com.vn/" class="custom-logo-link" rel="home" aria-current="page"><img width="325" height="107" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20325%20107'%3E%3C/svg%3E" class="custom-logo" alt="Cáº§u Thá»§" data-lazy-srcset="https://cauthu.com.vn/wp-content/uploads/2021/06/logo-cauthu.png 325w, https://cauthu.com.vn/wp-content/uploads/2021/06/logo-cauthu-300x99.png 300w, https://cauthu.com.vn/wp-content/uploads/2021/06/logo-cauthu-100x33.png 100w, https://cauthu.com.vn/wp-content/uploads/2021/06/logo-cauthu-321x107.png 321w" data-lazy-sizes="(max-width: 325px) 100vw, 325px" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/06/logo-cauthu.png" /><noscript><img width="325" height="107" src="https://cauthu.com.vn/wp-content/uploads/2021/06/logo-cauthu.png" class="custom-logo" alt="Cáº§u Thá»§" srcset="https://cauthu.com.vn/wp-content/uploads/2021/06/logo-cauthu.png 325w, https://cauthu.com.vn/wp-content/uploads/2021/06/logo-cauthu-300x99.png 300w, https://cauthu.com.vn/wp-content/uploads/2021/06/logo-cauthu-100x33.png 100w, https://cauthu.com.vn/wp-content/uploads/2021/06/logo-cauthu-321x107.png 321w" sizes="(max-width: 325px) 100vw, 325px" /></noscript></a>			<div class="site-title-wrapper">
									<p class="site-title"><a href="https://cauthu.com.vn/" rel="home">Cáº§u Thá»§</a></p>
									<p class="site-description">Máº¡ng xÃ£ há»i tin tá»©c bÃ³ng ÄÃ¡ nhanh, nÃ³ng, cáº­p nháº­t liÃªn tá»¥c 24h</p>
							</div>
		</div><!-- .site-branding -->
	</div><!-- .vmagazine-container -->
</div><!-- .logo-ad-wrapper -->

<div class="site-main-nav-wrapper">
	<div class="vmagazine-container">
		<div class="sidebar-icon">
			<i class="fa fa-bars" aria-hidden="true"></i>
		</div>
	    	<div class="vmagazine-nav-wrapper">
			<nav id="site-navigation" class="main-navigation clearfix" >
				<div class="nav-wrapper">
					
		                    <div class="index-icon">
            <a href="https://cauthu.com.vn/"><i class="fa fa-home"></i></a>
        </div>
    					<div class="menu-mmnu-container"><ul id="menu-main-menu" class="menu vmagazine_mega_menu"><li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children page_item page-item-356664 no-mega-menu"><a href="https://cauthu.com.vn/bong-da-viet-nam">Viá»t Nam</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357096 no-mega-menu"><a href="https://cauthu.com.vn/bong-da-viet-nam/v-league">V-League</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357094 no-mega-menu"><a href="https://cauthu.com.vn/bong-da-viet-nam/hang-nhat">Háº¡ng nháº¥t</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357097 no-mega-menu"><a href="https://cauthu.com.vn/bong-da-viet-nam/doi-tuyen-quoc-gia">Äá»i tuyá»n quá»c gia</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357095 no-mega-menu"><a href="https://cauthu.com.vn/bong-da-viet-nam/tuyen-olympic">Tuyá»n Olympic</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357092 no-mega-menu"><a href="https://cauthu.com.vn/bong-da-viet-nam/bong-da-nu">BÃ³ng ÄÃ¡ ná»¯</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357093 no-mega-menu"><a href="https://cauthu.com.vn/bong-da-viet-nam/bong-da-phui">BÃ³ng ÄÃ¡ phá»§i</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children page_item page-item-356665 no-mega-menu"><a href="https://cauthu.com.vn/bong-da-anh">Anh</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357101 no-mega-menu"><a href="https://cauthu.com.vn/bong-da-anh/premier-league">Premier League</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357099 no-mega-menu"><a href="https://cauthu.com.vn/bong-da-anh/cup-fa">CÃºp FA</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357100 no-mega-menu"><a href="https://cauthu.com.vn/bong-da-anh/cup-lien-doan">CÃºp LiÃªn ÄoÃ n</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357098 no-mega-menu"><a href="https://cauthu.com.vn/bong-da-anh/doi-tuyen-anh">Äá»i tuyá»n Anh</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children page_item page-item-356666 no-mega-menu"><a href="https://cauthu.com.vn/tay-ban-nha">TÃ¢y Ban Nha</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357103 no-mega-menu"><a href="https://cauthu.com.vn/tay-ban-nha/la-liga">La Liga</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357102 no-mega-menu"><a href="https://cauthu.com.vn/tay-ban-nha/cup-nha-vua">CÃºp nhÃ  Vua</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357104 no-mega-menu"><a href="https://cauthu.com.vn/tay-ban-nha/doi-tuyen-tay-ban-nha">Äá»i tuyá»n TÃ¢y Ban Nha</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children page_item page-item-356667 no-mega-menu"><a href="https://cauthu.com.vn/duc">Äá»©c</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357105 no-mega-menu"><a href="https://cauthu.com.vn/duc/bundesliga">Bundesliga</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357106 no-mega-menu"><a href="https://cauthu.com.vn/duc/cup-quoc-gia-duc">CÃºp Quá»c Gia Äá»©c</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357107 no-mega-menu"><a href="https://cauthu.com.vn/duc/doi-tuyen-duc">Äá»i tuyá»n Äá»©c</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children page_item page-item-356668 no-mega-menu"><a href="https://cauthu.com.vn/chau-au">ChÃ¢u Ãu</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357108 no-mega-menu"><a href="https://cauthu.com.vn/chau-au/champions-league">Champions League</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357110 no-mega-menu"><a href="https://cauthu.com.vn/chau-au/europa-league">Europa League</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357111 no-mega-menu"><a href="https://cauthu.com.vn/chau-au/nations-league">Nations League</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357109 no-mega-menu"><a href="https://cauthu.com.vn/chau-au/euro-2020">Euro 2020</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children page_item page-item-356669 no-mega-menu"><a href="https://cauthu.com.vn/cac-giai-khac">Giáº£i khÃ¡c</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357114 no-mega-menu"><a href="https://cauthu.com.vn/cac-giai-khac/serie-a">Serie A</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357112 no-mega-menu"><a href="https://cauthu.com.vn/cac-giai-khac/ligue-1">Ligue 1</a></li>
	<li class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-357113 no-mega-menu"><a href="https://cauthu.com.vn/cac-giai-khac/muon-mau-bong-da">MuÃ´n mÃ u bÃ³ng ÄÃ¡</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-356670 no-mega-menu"><a href="https://cauthu.com.vn/hau-truong">Háº­u trÆ°á»ng</a></li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-356671 no-mega-menu"><a href="https://cauthu.com.vn/thich-me">ThÃ­ch mÃª</a></li>
</ul></div>				</div><!-- .nav-wrapper -->
			</nav><!-- #site-navigation -->
	</div>
		   
	    <div class="top-right">
	    	 					    	<div class="search-toggle">
		    		<i class="fa fa-search" aria-hidden="true"></i>	
		    	</div>
				<div class="vmagazine-search-form-primary">
<form method="get" class="search-form" action="https://cauthu.com.vn/">
	<label>
		<span class="screen-reader-text">Search for:</span>
		<input type="search" autocomplete="off" class="search-field" placeholder="TÃ¬m kiáº¿m ..." value="" name="s">
	</label>
	<input type="submit" class="search-submit" value="Search">

</form>

</div>
				
				<div class="search-content"></div>
				<div class="block-loader" style="display:none;">
	        		<div class="sampleContainer">
					    <div class="loader">
					        <span class="dot dot_1"></span>
					        <span class="dot dot_2"></span>
					        <span class="dot dot_3"></span>
					        <span class="dot dot_4"></span>
					    </div>
					</div>
	    		</div>
    	
		</div>
	</div>
</div>

            <div class="vmagazine-ticker-wrapper cS-hidden">
        <div class="vmagazine-container layout-two">
                        <div class="ticker-wrapp">
                    <div class="vmagazine-ticker-caption">
                        <span>Má»i Nháº¥t</span>
                    </div>
                <ul id="vmagazine-news-ticker" >                    <li>
                        <div class="single-news">
                            <a href="https://cauthu.com.vn/tai-va-dung-thu-windows-11-ngay-bay-gio.html">
                            Táº£i vÃ  dÃ¹ng thá»­ Windows 11 ngay bÃ¢y giá»                            </a>
                            <span class="date">
                                03/08/2021                            </span>
                        </div>
                    </li>
                            <li>
                        <div class="single-news">
                            <a href="https://cauthu.com.vn/con-nguoi-trong-tuong-lai-se-song-duoi-dat-giong-chuot-chui.html">
                            Con ngÆ°á»i trong tÆ°Æ¡ng lai sáº½ sá»ng dÆ°á»i Äáº¥t giá»ng chuá»t chÅ©i?                            </a>
                            <span class="date">
                                03/08/2021                            </span>
                        </div>
                    </li>
                            <li>
                        <div class="single-news">
                            <a href="https://cauthu.com.vn/trung-ve-ngoai-quoc-roi-viet-nam-chua-hen-ngay-tro-lai-hagl.html">
                            Trung vá» ngoáº¡i quá»c rá»i Viá»t Nam, chÆ°a háº¹n ngÃ y trá» láº¡i HAGL                            </a>
                            <span class="date">
                                02/08/2021                            </span>
                        </div>
                    </li>
                            <li>
                        <div class="single-news">
                            <a href="https://cauthu.com.vn/ket-qua-boc-tham-vong-play-off-champions-league-2021-22.html">
                            Káº¿t quáº£ bá»c thÄm vÃ²ng play-off Champions League 2021-22                            </a>
                            <span class="date">
                                02/08/2021                            </span>
                        </div>
                    </li>
                            <li>
                        <div class="single-news">
                            <a href="https://cauthu.com.vn/bau-duc-tuyen-bo-cho-khong-dt-thai-lan-hlv-kiatisak.html">
                            Báº§u Äá»©c tuyÃªn bá» &#8216;cho khÃ´ng&#8217; ÄT ThÃ¡i Lan HLV Kiatisak                            </a>
                            <span class="date">
                                02/08/2021                            </span>
                        </div>
                    </li>
        </ul>            </div>
                        <div class="ticker-tags">
               
                <div class="tag-title">Trending:</div>
                <ul><li><a href="https://cauthu.com.vn/tag/windows-11" rel="tag">windows 11</a></li><li><a href="https://cauthu.com.vn/tag/con-nguoi-song-duoi-dat" rel="tag">con ngÆ°á»i sá»ng dÆ°á»i Äáº¥t</a></li><li><a href="https://cauthu.com.vn/tag/hagl" rel="tag">hagl</a></li><li><a href="https://cauthu.com.vn/tag/kim-dong-su" rel="tag">Kim Dong-su</a></li><li><a href="https://cauthu.com.vn/tag/v-league" rel="tag">V-League</a></li><li><a href="https://cauthu.com.vn/tag/champions-league" rel="tag">Champions League</a></li><li><a href="https://cauthu.com.vn/tag/play-off" rel="tag">Play-off</a></li><li><a href="https://cauthu.com.vn/tag/play-off-champions-league" rel="tag">Play-off Champions League</a></li><li><a href="https://cauthu.com.vn/tag/bau-duc" rel="tag">báº§u Äá»©c</a></li><li><a href="https://cauthu.com.vn/tag/hagl" rel="tag">hagl</a></li><li><a href="https://cauthu.com.vn/tag/kiatisak" rel="tag">Kiatisak</a></li><li><a href="https://cauthu.com.vn/tag/vleague" rel="tag">vleague</a></li></ul>            </div>
            </div><!--.vmagazine-container --></div></header><!-- #masthead -->

		</div>
		
		<div id="content" class="site-content">
			
			
		<div class="vmagazine-home-wrapp">
		<div id="pl-134"  class="panel-layout" ><div id="pg-134-0"  class="panel-grid panel-no-style" ><div id="pgc-134-0-0"  class="panel-grid-cell" ><div id="panel-134-0-0-0" class="so-panel widget widget_vmagazine_top_trending_block Vmagazine_Top_Trending_Block panel-first-child panel-last-child" data-index="0"><div class="panel-widget-style panel-widget-style-for-134-0-0-0">        <div class="vmagazine-top-trending-block block-post-wrapper wow fadeInUp" data-wow-duration="0.7s">
            
                                    
                                                        	                            	<div class="first-block-wrap">
                            	                            		<div class="inner-wrap">
                            		<div class="post-thumb">
                                        <a href="https://cauthu.com.vn/tai-va-dung-thu-windows-11-ngay-bay-gio.html">
                                                    <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="Táº£i vÃ  dÃ¹ng thá»­ Windows 11 ngay bÃ¢y giá»" title="Táº£i vÃ  dÃ¹ng thá»­ Windows 11 ngay bÃ¢y giá»" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/08/11.jpg" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/08/11.jpg" alt="Táº£i vÃ  dÃ¹ng thá»­ Windows 11 ngay bÃ¢y giá»" title="Táº£i vÃ  dÃ¹ng thá»­ Windows 11 ngay bÃ¢y giá»" /></noscript>
                                                </a>    
                                        <div class="image-overlay"></div>
                                   
                                	</div><!-- .post-thumb -->
                                	<div class="post-content-wrapper clearfix">
	                                    <span class="cat-links"><a href="https://cauthu.com.vn/thich-me/cong-nghe" class="cat-1850" rel="category tag">CÃ´ng nghá»</a><a href="https://cauthu.com.vn/thich-me" class="cat-1510" rel="category tag">ThÃ­ch mÃª</a></span>	                                   
	                                    <h3 class="extra-large-font">
	                                        <a href="https://cauthu.com.vn/tai-va-dung-thu-windows-11-ngay-bay-gio.html">
	                                        	Táº£i vÃ  dÃ¹ng thá»­ Windows 11 ngay bÃ¢y giá»	                                        </a>
	                                    </h3>
                                                                                 <div class="post-meta clearfix">
                                            <span class="posted-on"><i class="fa fa-clock-o"></i>03/08/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>0</span>                                        </div><!-- .post-meta --> 
                                        		                             </div><!-- .post-content-wrapper -->
		                         	</div>
		                                                                                       
                                
                                                
                                                        	                            		<div class="inner-wrap">
                            		<div class="post-thumb">
                                        <a href="https://cauthu.com.vn/con-nguoi-trong-tuong-lai-se-song-duoi-dat-giong-chuot-chui.html">
                                                    <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="Con ngÆ°á»i trong tÆ°Æ¡ng lai sáº½ sá»ng dÆ°á»i Äáº¥t giá»ng chuá»t chÅ©i?" title="Con ngÆ°á»i trong tÆ°Æ¡ng lai sáº½ sá»ng dÆ°á»i Äáº¥t giá»ng chuá»t chÅ©i?" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/08/2-612x588.jpg" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/08/2-612x588.jpg" alt="Con ngÆ°á»i trong tÆ°Æ¡ng lai sáº½ sá»ng dÆ°á»i Äáº¥t giá»ng chuá»t chÅ©i?" title="Con ngÆ°á»i trong tÆ°Æ¡ng lai sáº½ sá»ng dÆ°á»i Äáº¥t giá»ng chuá»t chÅ©i?" /></noscript>
                                                </a>    
                                        <div class="image-overlay"></div>
                                   
                                	</div><!-- .post-thumb -->
                                	<div class="post-content-wrapper clearfix">
	                                    <span class="cat-links"><a href="https://cauthu.com.vn/thich-me/cong-nghe" class="cat-1850" rel="category tag">CÃ´ng nghá»</a><a href="https://cauthu.com.vn/thich-me" class="cat-1510" rel="category tag">ThÃ­ch mÃª</a></span>	                                   
	                                    <h3 class="extra-large-font">
	                                        <a href="https://cauthu.com.vn/con-nguoi-trong-tuong-lai-se-song-duoi-dat-giong-chuot-chui.html">
	                                        	Con ngÆ°á»i trong tÆ°Æ¡ng lai sáº½ sá»ng dÆ°á»i Äáº¥t giá»ng chuá»t chÅ©i?	                                        </a>
	                                    </h3>
                                                                                 <div class="post-meta clearfix">
                                            <span class="posted-on"><i class="fa fa-clock-o"></i>03/08/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>3</span>                                        </div><!-- .post-meta --> 
                                        		                             </div><!-- .post-content-wrapper -->
		                         	</div>
		                             
                            		</div><!-- .first-block-wrap -->
                            		                                                           
                                
                                                
                                                        		<div class="middle-block-wrap">
                            			<div class="inner-wrap">
	                            		<div class="post-thumb">
	                                    
                                                                               <a href="https://cauthu.com.vn/trung-ve-ngoai-quoc-roi-viet-nam-chua-hen-ngay-tro-lai-hagl.html">
                                                    <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="Trung vá» ngoáº¡i quá»c rá»i Viá»t Nam, chÆ°a háº¹n ngÃ y trá» láº¡i HAGL" title="Trung vá» ngoáº¡i quá»c rá»i Viá»t Nam, chÆ°a háº¹n ngÃ y trá» láº¡i HAGL" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/08/b-64-o-0176-1616414214944-540x427.jpg" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/08/b-64-o-0176-1616414214944-540x427.jpg" alt="Trung vá» ngoáº¡i quá»c rá»i Viá»t Nam, chÆ°a háº¹n ngÃ y trá» láº¡i HAGL" title="Trung vá» ngoáº¡i quá»c rá»i Viá»t Nam, chÆ°a háº¹n ngÃ y trá» láº¡i HAGL" /></noscript>
                                                </a>
	                                   <div class="image-overlay"></div>
	                                    
	                                	</div>
	                                	<div class="post-content-wrapper clearfix">
		                                    <span class="cat-links"><a href="https://cauthu.com.vn/bong-da-viet-nam" class="cat-1" rel="category tag">Viá»t Nam</a></span>		                                    
		                                    <h3 class="extra-large-font">
		                                        <a href="https://cauthu.com.vn/trung-ve-ngoai-quoc-roi-viet-nam-chua-hen-ngay-tro-lai-hagl.html">
		                                        	Trung vá» ngoáº¡i quá»c rá»i Viá»t Nam, chÆ°a háº¹n ngÃ y trá» láº¡i HAGL		                                        </a>
		                                    </h3>
                                                                                        <div class="post-meta clearfix">
                                                <span class="posted-on"><i class="fa fa-clock-o"></i>02/08/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>2</span>                                            </div><!-- .post-meta --> 
                                            		                                </div><!-- .post-content-wrapper -->
		                             </div>
                            		</div>
                                                           
                                
                                                
                                                        		                            		<div class="last-block-wrap">
                            		                            			<div class="inner-wrap">
	                            		<div class="post-thumb">
                                        <a href="https://cauthu.com.vn/ket-qua-boc-tham-vong-play-off-champions-league-2021-22.html">
                                                    <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="Káº¿t quáº£ bá»c thÄm vÃ²ng play-off Champions League 2021-22" title="Káº¿t quáº£ bá»c thÄm vÃ²ng play-off Champions League 2021-22" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/08/play-off.jpg" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/08/play-off.jpg" alt="Káº¿t quáº£ bá»c thÄm vÃ²ng play-off Champions League 2021-22" title="Káº¿t quáº£ bá»c thÄm vÃ²ng play-off Champions League 2021-22" /></noscript>
                                                </a>
	                                   <div class="image-overlay"></div>
	                                	</div>
	                                	<div class="post-content-wrapper clearfix">
		                                    <span class="cat-links"><a href="https://cauthu.com.vn/chau-au/champions-league" class="cat-55" rel="category tag">Champions League</a><a href="https://cauthu.com.vn/chau-au" class="cat-7" rel="category tag">ChÃ¢u Ãu</a></span>		                                    
		                                    <h3 class="extra-large-font">
		                                        <a href="https://cauthu.com.vn/ket-qua-boc-tham-vong-play-off-champions-league-2021-22.html">
		                                        	Káº¿t quáº£ bá»c thÄm vÃ²ng play-off Champions League 2021-22		                                        </a>
		                                    </h3>
                                                                                        <div class="post-meta clearfix">
                                                <span class="posted-on"><i class="fa fa-clock-o"></i>02/08/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>29</span>                                            </div><!-- .post-meta --> 
                                            		                                </div><!-- .post-content-wrapper -->
		                            	</div>
		                                                                                           
                                
                                                
                                                        		                            			<div class="inner-wrap">
	                            		<div class="post-thumb">
                                        <a href="https://cauthu.com.vn/bau-duc-tuyen-bo-cho-khong-dt-thai-lan-hlv-kiatisak.html">
                                                    <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="Báº§u Äá»©c tuyÃªn bá» &#8216;cho khÃ´ng&#8217; ÄT ThÃ¡i Lan HLV Kiatisak" title="Báº§u Äá»©c tuyÃªn bá» &#8216;cho khÃ´ng&#8217; ÄT ThÃ¡i Lan HLV Kiatisak" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/08/images3026146_hagl1_1618984200_9-612x440.jpg" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/08/images3026146_hagl1_1618984200_9-612x440.jpg" alt="Báº§u Äá»©c tuyÃªn bá» &#8216;cho khÃ´ng&#8217; ÄT ThÃ¡i Lan HLV Kiatisak" title="Báº§u Äá»©c tuyÃªn bá» &#8216;cho khÃ´ng&#8217; ÄT ThÃ¡i Lan HLV Kiatisak" /></noscript>
                                                </a>
	                                   <div class="image-overlay"></div>
	                                	</div>
	                                	<div class="post-content-wrapper clearfix">
		                                    <span class="cat-links"><a href="https://cauthu.com.vn/bong-da-viet-nam" class="cat-1" rel="category tag">Viá»t Nam</a></span>		                                    
		                                    <h3 class="extra-large-font">
		                                        <a href="https://cauthu.com.vn/bau-duc-tuyen-bo-cho-khong-dt-thai-lan-hlv-kiatisak.html">
		                                        	Báº§u Äá»©c tuyÃªn bá» &#8216;cho khÃ´ng&#8217; ÄT ThÃ¡i Lan HLV Kiatisak		                                        </a>
		                                    </h3>
                                                                                        <div class="post-meta clearfix">
                                                <span class="posted-on"><i class="fa fa-clock-o"></i>02/08/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>68</span>                                            </div><!-- .post-meta --> 
                                            		                                </div><!-- .post-content-wrapper -->
		                            	</div>
		                                                            			</div><!-- .last-block-wrap -->
                            			                                                           
                                
                                    
            
            
        </div><!-- .block-post-wrapper -->
    </div></div></div></div><div id="pg-134-1"  class="panel-grid panel-has-style" ><div class="panel-row-style panel-row-style-for-134-1" ><div id="pgc-134-1-0"  class="panel-grid-cell" ><div id="panel-134-1-0-0" class="so-panel widget widget_vmagazine_cat_tabbed_ajax vmagazine_cat_tabbed_ajax panel-first-child panel-last-child" data-index="1">        <div class="vmagazine-mul-cat-tabbed block-post-wrapper clearfix" >
            <div class="block-header clearfix">
                    <h4 class="block-title"><span class="title-bg">
Premier League    </span></h4>
<div class="multiple-child-cat-tabs"><ul class="vmagazine-tabbed-links"><li>
                            <a href="javascript:void(0)" data-meta="show" data-id="45" data-slug="45" data-link="https://cauthu.com.vn/bong-da-anh/premier-league" data-count="400">Premier League</a>
                            </li></ul></div>            </div><!-- .block-header-->
            <div class="block-content-wrapper">
                <div class="block-loader" style="display:none;">
                    <div class="sampleContainer">
                        <div class="loader">
                            <span class="dot dot_1"></span>
                            <span class="dot dot_2"></span>
                            <span class="dot dot_3"></span>
                            <span class="dot dot_4"></span>
                        </div>
                    </div>
                </div>
                <div class="block-cat-content 45">

            <div class="top-post-wrapper wow fadeInDown" data-wow-duration="0.7s">                        <div class="single-post clearfix">
                            <div class="post-thumb">
                                <a class="thumb-zoom" href="https://cauthu.com.vn/harry-kane-tu-choi-tro-lai-tottenham-de-tap-luyen.html" title="Harry Kane tá»« chá»i trá» láº¡i táº­p luyá»n cÃ¹ng Tottenham">
                                            <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="Harry Kane tá»« chá»i trá» láº¡i táº­p luyá»n cÃ¹ng Tottenham" title="Harry Kane tá»« chá»i trá» láº¡i táº­p luyá»n cÃ¹ng Tottenham" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/08/harry-kane-510x369.jpg" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/08/harry-kane-510x369.jpg" alt="Harry Kane tá»« chá»i trá» láº¡i táº­p luyá»n cÃ¹ng Tottenham" title="Harry Kane tá»« chá»i trá» láº¡i táº­p luyá»n cÃ¹ng Tottenham" /></noscript>
                                            <div class="image-overlay"></div>
                                </a>
                                                            </div><!-- .post-thumb -->
                            <div class="post-caption-wrapper">
                               
                                                                <div class="post-meta clearfix">
                                    <span class="posted-on"><i class="fa fa-clock-o"></i>02/08/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>322</span>                                </div>
                                 
                                <h3 class="large-font">
                                    <a href="https://cauthu.com.vn/harry-kane-tu-choi-tro-lai-tottenham-de-tap-luyen.html">
                                        Harry Kane tá»« chá»i trá» láº¡i táº­p luyá»n cÃ¹ng Tottenham                                    </a>
                                </h3>
                                                                    <p> 
                                    NhÆ° váº­y lÃ  tiá»n Äáº¡o Harry Kane ÄÃ£ báº¯t Äáº§u cuá»c ná»i loáº¡n, khi anh khÃ´ng trá» láº¡i luyá»n táº­p vá»i Tottenham nháº±m má»¥c ÄÃ­ch gÃ¢y sá»©c Ã©p, buá»c Äá»i bÃ³ng London pháº£i bÃ¡n anh vÃ o hÃ¨ nÃ y. Â  KhÃ´ng lÃ¢u sau tráº­n chung káº¿t EURO 2020, Harry Kane ÄÃ£ Äi nghá» hÃ¨ cÃ¹ng gia... 
                                    </p>
                                
                            </div><!-- .post-caption-wrapper -->
                           
                        </div><!-- .single-post -->
                    </div><div class="btm-posts-wrapper wow fadeInUp" data-wow-duration="0.7s"><div class="first-col-wrapper">                        <div class="single-post clearfix">
                            <div class="post-thumb">
                                <a class="thumb-zoom" href="https://cauthu.com.vn/kho-tin-barca-de-nghi-man-utd-doi-griezmann-lay-1-trung-ve.html" title="KhÃ³ tin: Barca Äá» nghá» Man Utd Äá»i Griezmann láº¥y 1 trung vá»">
                                            <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="KhÃ³ tin: Barca Äá» nghá» Man Utd Äá»i Griezmann láº¥y 1 trung vá»" title="KhÃ³ tin: Barca Äá» nghá» Man Utd Äá»i Griezmann láº¥y 1 trung vá»" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/07/RTS3FMUS-scaled-1-320x224.jpg" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/07/RTS3FMUS-scaled-1-320x224.jpg" alt="KhÃ³ tin: Barca Äá» nghá» Man Utd Äá»i Griezmann láº¥y 1 trung vá»" title="KhÃ³ tin: Barca Äá» nghá» Man Utd Äá»i Griezmann láº¥y 1 trung vá»" /></noscript>
                                            <div class="image-overlay"></div>
                                </a>
                                                            </div><!-- .post-thumb -->
                            <div class="post-caption-wrapper">
                               
                                                                <div class="post-meta clearfix">
                                    <span class="posted-on"><i class="fa fa-clock-o"></i>31/07/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>43</span>                                </div>
                                 
                                <h3 class="small-font">
                                    <a href="https://cauthu.com.vn/kho-tin-barca-de-nghi-man-utd-doi-griezmann-lay-1-trung-ve.html">
                                        KhÃ³ tin: Barca Äá» nghá» Man Utd Äá»i Griezmann láº¥y 1 trung vá»                                    </a>
                                </h3>
                                
                            </div><!-- .post-caption-wrapper -->
                           
                        </div><!-- .single-post -->
                                            <div class="single-post clearfix">
                            <div class="post-thumb">
                                <a class="thumb-zoom" href="https://cauthu.com.vn/grealish-hoa-nguoi-nha-que-khi-tru-eo-man-city-khong-vo-dich-ngoai-hang-anh.html" title="Grealish quÃª Äá» khi bá» fan &#8220;bÃ³c máº»&#8221; tá»«ng cáº§u xui rá»§i Äá» Man City khÃ´ng vÃ´ Äá»ch Premier League">
                                            <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="Grealish quÃª Äá» khi bá» fan &#8220;bÃ³c máº»&#8221; tá»«ng cáº§u xui rá»§i Äá» Man City khÃ´ng vÃ´ Äá»ch Premier League" title="Grealish quÃª Äá» khi bá» fan &#8220;bÃ³c máº»&#8221; tá»«ng cáº§u xui rá»§i Äá» Man City khÃ´ng vÃ´ Äá»ch Premier League" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/07/grealish-anti-man-cty-320x224.jpg" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/07/grealish-anti-man-cty-320x224.jpg" alt="Grealish quÃª Äá» khi bá» fan &#8220;bÃ³c máº»&#8221; tá»«ng cáº§u xui rá»§i Äá» Man City khÃ´ng vÃ´ Äá»ch Premier League" title="Grealish quÃª Äá» khi bá» fan &#8220;bÃ³c máº»&#8221; tá»«ng cáº§u xui rá»§i Äá» Man City khÃ´ng vÃ´ Äá»ch Premier League" /></noscript>
                                            <div class="image-overlay"></div>
                                </a>
                                                            </div><!-- .post-thumb -->
                            <div class="post-caption-wrapper">
                               
                                                                <div class="post-meta clearfix">
                                    <span class="posted-on"><i class="fa fa-clock-o"></i>31/07/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>27</span>                                </div>
                                 
                                <h3 class="small-font">
                                    <a href="https://cauthu.com.vn/grealish-hoa-nguoi-nha-que-khi-tru-eo-man-city-khong-vo-dich-ngoai-hang-anh.html">
                                        Grealish quÃª Äá» khi bá» fan &#8220;bÃ³c máº»&#8221; tá»«ng cáº§u xui rá»§i Äá» Man City khÃ´ng vÃ´ Äá»ch Premier League                                    </a>
                                </h3>
                                
                            </div><!-- .post-caption-wrapper -->
                           
                        </div><!-- .single-post -->
                                            <div class="single-post clearfix">
                            <div class="post-thumb">
                                <a class="thumb-zoom" href="https://cauthu.com.vn/rashford-nghi-thi-dau-den-thang-11.html" title="Rashford nghá» thi Äáº¥u Äáº¿n thÃ¡ng 11">
                                            <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="Rashford nghá» thi Äáº¥u Äáº¿n thÃ¡ng 11" title="Rashford nghá» thi Äáº¥u Äáº¿n thÃ¡ng 11" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/06/marcus-rashford-chan-thuong-320x224.jpg" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/06/marcus-rashford-chan-thuong-320x224.jpg" alt="Rashford nghá» thi Äáº¥u Äáº¿n thÃ¡ng 11" title="Rashford nghá» thi Äáº¥u Äáº¿n thÃ¡ng 11" /></noscript>
                                            <div class="image-overlay"></div>
                                </a>
                                                            </div><!-- .post-thumb -->
                            <div class="post-caption-wrapper">
                               
                                                                <div class="post-meta clearfix">
                                    <span class="posted-on"><i class="fa fa-clock-o"></i>31/07/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>19</span>                                </div>
                                 
                                <h3 class="small-font">
                                    <a href="https://cauthu.com.vn/rashford-nghi-thi-dau-den-thang-11.html">
                                        Rashford nghá» thi Äáº¥u Äáº¿n thÃ¡ng 11                                    </a>
                                </h3>
                                
                            </div><!-- .post-caption-wrapper -->
                           
                        </div><!-- .single-post -->
                    </div><div class="second-col-wrapper">                        <div class="single-post clearfix">
                            <div class="post-thumb">
                                <a class="thumb-zoom" href="https://cauthu.com.vn/arsenal-chinh-thuc-don-ben-white-ve-emirates.html" title="Arsenal chÃ­nh thá»©c ÄÃ³n Ben White vá» Emirates">
                                            <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="Arsenal chÃ­nh thá»©c ÄÃ³n Ben White vá» Emirates" title="Arsenal chÃ­nh thá»©c ÄÃ³n Ben White vá» Emirates" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/07/arsenal-ben-white-3-320x224.jpg" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/07/arsenal-ben-white-3-320x224.jpg" alt="Arsenal chÃ­nh thá»©c ÄÃ³n Ben White vá» Emirates" title="Arsenal chÃ­nh thá»©c ÄÃ³n Ben White vá» Emirates" /></noscript>
                                            <div class="image-overlay"></div>
                                </a>
                                                            </div><!-- .post-thumb -->
                            <div class="post-caption-wrapper">
                               
                                                                <div class="post-meta clearfix">
                                    <span class="posted-on"><i class="fa fa-clock-o"></i>30/07/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>110</span>                                </div>
                                 
                                <h3 class="small-font">
                                    <a href="https://cauthu.com.vn/arsenal-chinh-thuc-don-ben-white-ve-emirates.html">
                                        Arsenal chÃ­nh thá»©c ÄÃ³n Ben White vá» Emirates                                    </a>
                                </h3>
                                
                            </div><!-- .post-caption-wrapper -->
                           
                        </div><!-- .single-post -->
                                            <div class="single-post clearfix">
                            <div class="post-thumb">
                                <a class="thumb-zoom" href="https://cauthu.com.vn/m-u-phai-huy-tran-giao-huu-vi-hang-loat-thanh-vien-dinh-covid.html" title="M.U pháº£i há»§y tráº­n giao há»¯u vÃ¬ hÃ ng loáº¡t thÃ nh viÃªn dÃ­nh COVID">
                                            <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="M.U pháº£i há»§y tráº­n giao há»¯u vÃ¬ hÃ ng loáº¡t thÃ nh viÃªn dÃ­nh COVID" title="M.U pháº£i há»§y tráº­n giao há»¯u vÃ¬ hÃ ng loáº¡t thÃ nh viÃªn dÃ­nh COVID" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/07/manchester-matic-1-320x224.jpg" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/07/manchester-matic-1-320x224.jpg" alt="M.U pháº£i há»§y tráº­n giao há»¯u vÃ¬ hÃ ng loáº¡t thÃ nh viÃªn dÃ­nh COVID" title="M.U pháº£i há»§y tráº­n giao há»¯u vÃ¬ hÃ ng loáº¡t thÃ nh viÃªn dÃ­nh COVID" /></noscript>
                                            <div class="image-overlay"></div>
                                </a>
                                                            </div><!-- .post-thumb -->
                            <div class="post-caption-wrapper">
                               
                                                                <div class="post-meta clearfix">
                                    <span class="posted-on"><i class="fa fa-clock-o"></i>30/07/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>27</span>                                </div>
                                 
                                <h3 class="small-font">
                                    <a href="https://cauthu.com.vn/m-u-phai-huy-tran-giao-huu-vi-hang-loat-thanh-vien-dinh-covid.html">
                                        M.U pháº£i há»§y tráº­n giao há»¯u vÃ¬ hÃ ng loáº¡t thÃ nh viÃªn dÃ­nh COVID                                    </a>
                                </h3>
                                
                            </div><!-- .post-caption-wrapper -->
                           
                        </div><!-- .single-post -->
                                            <div class="single-post clearfix">
                            <div class="post-thumb">
                                <a class="thumb-zoom" href="https://cauthu.com.vn/varane-tu-choi-ca-tien-va-bang-doi-truong-cua-real-vi-mot-ly-do.html" title="Varane tá»« chá»i cáº£ tiá»n vÃ  bÄng Äá»i trÆ°á»ng cá»§a Real vÃ¬ má»t lÃ½ do">
                                            <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="Varane tá»« chá»i cáº£ tiá»n vÃ  bÄng Äá»i trÆ°á»ng cá»§a Real vÃ¬ má»t lÃ½ do" title="Varane tá»« chá»i cáº£ tiá»n vÃ  bÄng Äá»i trÆ°á»ng cá»§a Real vÃ¬ má»t lÃ½ do" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2018/07/varane-the-best-2.jpg" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2018/07/varane-the-best-2.jpg" alt="Varane tá»« chá»i cáº£ tiá»n vÃ  bÄng Äá»i trÆ°á»ng cá»§a Real vÃ¬ má»t lÃ½ do" title="Varane tá»« chá»i cáº£ tiá»n vÃ  bÄng Äá»i trÆ°á»ng cá»§a Real vÃ¬ má»t lÃ½ do" /></noscript>
                                            <div class="image-overlay"></div>
                                </a>
                                                            </div><!-- .post-thumb -->
                            <div class="post-caption-wrapper">
                               
                                                                <div class="post-meta clearfix">
                                    <span class="posted-on"><i class="fa fa-clock-o"></i>29/07/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>38</span>                                </div>
                                 
                                <h3 class="small-font">
                                    <a href="https://cauthu.com.vn/varane-tu-choi-ca-tien-va-bang-doi-truong-cua-real-vi-mot-ly-do.html">
                                        Varane tá»« chá»i cáº£ tiá»n vÃ  bÄng Äá»i trÆ°á»ng cá»§a Real vÃ¬ má»t lÃ½ do                                    </a>
                                </h3>
                                
                            </div><!-- .post-caption-wrapper -->
                           
                        </div><!-- .single-post -->
                    </div></div>
            </div>
            
            </div>
        </div><!-- .block-post-wrapper -->
    </div></div><div id="pgc-134-1-1"  class="panel-grid-cell" ><div id="panel-134-1-1-0" class="so-panel widget widget_vmagazine_block_grid_list vmagazine_block_grid_list panel-first-child panel-last-child" data-index="2">    <div class="vmagazine-grid-list-wrapp grid-two no-desc">
        <div class="block-header clearfix">
            <h4 class="block-title"><span class="title-bg">
Viá»t Nam    </span></h4>
    </div><!-- .block-header-->
            <div class="vmagazine-grid-list block-post-wrapper grid-two">
            
            <div class="posts-wrap">
                                        <div class="single-post first-post clearfix wow fadeInUp" data-wow-duration="0.7s">
                            <div class="post-thumb">
                                <a class="thumb-zoom" href="https://cauthu.com.vn/trung-ve-ngoai-quoc-roi-viet-nam-chua-hen-ngay-tro-lai-hagl.html" title="Trung vá» ngoáº¡i quá»c rá»i Viá»t Nam, chÆ°a háº¹n ngÃ y trá» láº¡i HAGL">
                                            <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="Trung vá» ngoáº¡i quá»c rá»i Viá»t Nam, chÆ°a háº¹n ngÃ y trá» láº¡i HAGL" title="Trung vá» ngoáº¡i quá»c rá»i Viá»t Nam, chÆ°a háº¹n ngÃ y trá» láº¡i HAGL" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/08/b-64-o-0176-1616414214944-510x369.jpg" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/08/b-64-o-0176-1616414214944-510x369.jpg" alt="Trung vá» ngoáº¡i quá»c rá»i Viá»t Nam, chÆ°a háº¹n ngÃ y trá» láº¡i HAGL" title="Trung vá» ngoáº¡i quá»c rá»i Viá»t Nam, chÆ°a háº¹n ngÃ y trá» láº¡i HAGL" /></noscript>
                                            <div class="image-overlay"></div>
                                </a>
                                                            </div><!-- .post-thumb -->
                            <div class="post-content-wrapper clearfix">
                                                                <div class="post-meta clearfix">
                                   <span class="posted-on"><i class="fa fa-clock-o"></i>02/08/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>2</span>                                </div><!-- .post-meta --> 
                                                               
                                <h3 class="large-font">
                                    <a href="https://cauthu.com.vn/trung-ve-ngoai-quoc-roi-viet-nam-chua-hen-ngay-tro-lai-hagl.html">
                                        Trung vá» ngoáº¡i quá»c rá»i Viá»t Nam, chÆ°a háº¹n ngÃ y trá» láº¡i HAGL                                    </a>
                                </h3>
                                
                                
                            </div><!-- .post-content-wrapper -->
                        </div><!-- .single-post  -->
                                                <div class="single-post  clearfix wow fadeInUp" data-wow-duration="0.7s">
                            <div class="post-thumb">
                                <a class="thumb-zoom" href="https://cauthu.com.vn/bau-duc-tuyen-bo-cho-khong-dt-thai-lan-hlv-kiatisak.html" title="Báº§u Äá»©c tuyÃªn bá» &#8216;cho khÃ´ng&#8217; ÄT ThÃ¡i Lan HLV Kiatisak">
                                            <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="Báº§u Äá»©c tuyÃªn bá» &#8216;cho khÃ´ng&#8217; ÄT ThÃ¡i Lan HLV Kiatisak" title="Báº§u Äá»©c tuyÃªn bá» &#8216;cho khÃ´ng&#8217; ÄT ThÃ¡i Lan HLV Kiatisak" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/08/images3026146_hagl1_1618984200_9-320x224.jpg" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/08/images3026146_hagl1_1618984200_9-320x224.jpg" alt="Báº§u Äá»©c tuyÃªn bá» &#8216;cho khÃ´ng&#8217; ÄT ThÃ¡i Lan HLV Kiatisak" title="Báº§u Äá»©c tuyÃªn bá» &#8216;cho khÃ´ng&#8217; ÄT ThÃ¡i Lan HLV Kiatisak" /></noscript>
                                            <div class="image-overlay"></div>
                                </a>
                                                            </div><!-- .post-thumb -->
                            <div class="post-content-wrapper clearfix">
                                                                <div class="post-meta clearfix">
                                   <span class="posted-on"><i class="fa fa-clock-o"></i>02/08/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>68</span>                                </div><!-- .post-meta --> 
                                                               
                                <h3 class="large-font">
                                    <a href="https://cauthu.com.vn/bau-duc-tuyen-bo-cho-khong-dt-thai-lan-hlv-kiatisak.html">
                                        Báº§u Äá»©c tuyÃªn bá» &#8216;cho khÃ´ng&#8217; ÄT ThÃ¡i Lan HLV Kiatisak                                    </a>
                                </h3>
                                
                                
                            </div><!-- .post-content-wrapper -->
                        </div><!-- .single-post  -->
                                                <div class="single-post  clearfix wow fadeInUp" data-wow-duration="0.7s">
                            <div class="post-thumb">
                                <a class="thumb-zoom" href="https://cauthu.com.vn/fifa-co-su-dieu-chinh-luat-dt-viet-nam-huong-loi-cuc-lon.html" title="FIFA cÃ³ sá»± Äiá»u chá»nh luáº­t, ÄT Viá»t Nam hÆ°á»ng lá»£i cá»±c lá»n">
                                            <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="FIFA cÃ³ sá»± Äiá»u chá»nh luáº­t, ÄT Viá»t Nam hÆ°á»ng lá»£i cá»±c lá»n" title="FIFA cÃ³ sá»± Äiá»u chá»nh luáº­t, ÄT Viá»t Nam hÆ°á»ng lá»£i cá»±c lá»n" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/08/nho-quy-dinh-moi-cua-fifa-dt-vie-320x224.jpeg" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/08/nho-quy-dinh-moi-cua-fifa-dt-vie-320x224.jpeg" alt="FIFA cÃ³ sá»± Äiá»u chá»nh luáº­t, ÄT Viá»t Nam hÆ°á»ng lá»£i cá»±c lá»n" title="FIFA cÃ³ sá»± Äiá»u chá»nh luáº­t, ÄT Viá»t Nam hÆ°á»ng lá»£i cá»±c lá»n" /></noscript>
                                            <div class="image-overlay"></div>
                                </a>
                                                            </div><!-- .post-thumb -->
                            <div class="post-content-wrapper clearfix">
                                                                <div class="post-meta clearfix">
                                   <span class="posted-on"><i class="fa fa-clock-o"></i>01/08/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>114</span>                                </div><!-- .post-meta --> 
                                                               
                                <h3 class="large-font">
                                    <a href="https://cauthu.com.vn/fifa-co-su-dieu-chinh-luat-dt-viet-nam-huong-loi-cuc-lon.html">
                                        FIFA cÃ³ sá»± Äiá»u chá»nh luáº­t, ÄT Viá»t Nam hÆ°á»ng lá»£i cá»±c lá»n                                    </a>
                                </h3>
                                
                                
                            </div><!-- .post-content-wrapper -->
                        </div><!-- .single-post  -->
                                    </div>
                            
            
        </div><!-- .block-post-wrapper -->
    </div>
    </div></div></div></div><div id="pg-134-2"  class="panel-grid panel-has-style" ><div class="panel-row-style panel-row-style-for-134-2" ><div id="pgc-134-2-0"  class="panel-grid-cell" ><div id="panel-134-2-0-0" class="so-panel widget widget_vmagazine_block_grid_list vmagazine_block_grid_list panel-first-child panel-last-child" data-index="3">    <div class="vmagazine-grid-list-wrapp grid no-desc">
        <div class="block-header clearfix">
            <h4 class="block-title"><span class="title-bg">
La Liga    </span></h4>
    </div><!-- .block-header-->
            <div class="vmagazine-grid-list block-post-wrapper grid">
            
            <div class="posts-wrap">
                                        <div class="single-post first-post clearfix wow fadeInUp" data-wow-duration="0.7s">
                            <div class="post-thumb">
                                <a class="thumb-zoom" href="https://cauthu.com.vn/real-madrid-lai-soi-dong-vi-body-moi-cua-hazard.html" title="Real Madrid láº¡i sÃ´i Äá»ng vÃ¬ body má»i cá»§a Hazard">
                                            <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="Real Madrid láº¡i sÃ´i Äá»ng vÃ¬ body má»i cá»§a Hazard" title="Real Madrid láº¡i sÃ´i Äá»ng vÃ¬ body má»i cá»§a Hazard" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/07/hazard-1-510x369.jpg" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/07/hazard-1-510x369.jpg" alt="Real Madrid láº¡i sÃ´i Äá»ng vÃ¬ body má»i cá»§a Hazard" title="Real Madrid láº¡i sÃ´i Äá»ng vÃ¬ body má»i cá»§a Hazard" /></noscript>
                                            <div class="image-overlay"></div>
                                </a>
                                                            </div><!-- .post-thumb -->
                            <div class="post-content-wrapper clearfix">
                                                                <div class="post-meta clearfix">
                                   <span class="posted-on"><i class="fa fa-clock-o"></i>30/07/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>68</span>                                </div><!-- .post-meta --> 
                                                               
                                <h3 class="large-font">
                                    <a href="https://cauthu.com.vn/real-madrid-lai-soi-dong-vi-body-moi-cua-hazard.html">
                                        Real Madrid láº¡i sÃ´i Äá»ng vÃ¬ body má»i cá»§a Hazard                                    </a>
                                </h3>
                                
                                
                            </div><!-- .post-content-wrapper -->
                        </div><!-- .single-post  -->
                                                <div class="single-post  clearfix wow fadeInUp" data-wow-duration="0.7s">
                            <div class="post-thumb">
                                <a class="thumb-zoom" href="https://cauthu.com.vn/varane-tu-choi-ca-tien-va-bang-doi-truong-cua-real-vi-mot-ly-do.html" title="Varane tá»« chá»i cáº£ tiá»n vÃ  bÄng Äá»i trÆ°á»ng cá»§a Real vÃ¬ má»t lÃ½ do">
                                            <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="Varane tá»« chá»i cáº£ tiá»n vÃ  bÄng Äá»i trÆ°á»ng cá»§a Real vÃ¬ má»t lÃ½ do" title="Varane tá»« chá»i cáº£ tiá»n vÃ  bÄng Äá»i trÆ°á»ng cá»§a Real vÃ¬ má»t lÃ½ do" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2018/07/varane-the-best-2.jpg" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2018/07/varane-the-best-2.jpg" alt="Varane tá»« chá»i cáº£ tiá»n vÃ  bÄng Äá»i trÆ°á»ng cá»§a Real vÃ¬ má»t lÃ½ do" title="Varane tá»« chá»i cáº£ tiá»n vÃ  bÄng Äá»i trÆ°á»ng cá»§a Real vÃ¬ má»t lÃ½ do" /></noscript>
                                            <div class="image-overlay"></div>
                                </a>
                                                            </div><!-- .post-thumb -->
                            <div class="post-content-wrapper clearfix">
                                                                <div class="post-meta clearfix">
                                   <span class="posted-on"><i class="fa fa-clock-o"></i>29/07/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>38</span>                                </div><!-- .post-meta --> 
                                                               
                                <h3 class="large-font">
                                    <a href="https://cauthu.com.vn/varane-tu-choi-ca-tien-va-bang-doi-truong-cua-real-vi-mot-ly-do.html">
                                        Varane tá»« chá»i cáº£ tiá»n vÃ  bÄng Äá»i trÆ°á»ng cá»§a Real vÃ¬ má»t lÃ½ do                                    </a>
                                </h3>
                                
                                
                            </div><!-- .post-content-wrapper -->
                        </div><!-- .single-post  -->
                                                <div class="single-post  clearfix wow fadeInUp" data-wow-duration="0.7s">
                            <div class="post-thumb">
                                <a class="thumb-zoom" href="https://cauthu.com.vn/messi-chi-quay-ve-barcelona-vai-tieng-dong-ho.html" title="Messi chá» quay vá» Barcelona.. vÃ i tiáº¿ng Äá»ng há»">
                                            <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="Messi chá» quay vá» Barcelona.. vÃ i tiáº¿ng Äá»ng há»" title="Messi chá» quay vá» Barcelona.. vÃ i tiáº¿ng Äá»ng há»" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/07/messi-chuyen-nhuong-320x224.png" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/07/messi-chuyen-nhuong-320x224.png" alt="Messi chá» quay vá» Barcelona.. vÃ i tiáº¿ng Äá»ng há»" title="Messi chá» quay vá» Barcelona.. vÃ i tiáº¿ng Äá»ng há»" /></noscript>
                                            <div class="image-overlay"></div>
                                </a>
                                                            </div><!-- .post-thumb -->
                            <div class="post-content-wrapper clearfix">
                                                                <div class="post-meta clearfix">
                                   <span class="posted-on"><i class="fa fa-clock-o"></i>29/07/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>60</span>                                </div><!-- .post-meta --> 
                                                               
                                <h3 class="large-font">
                                    <a href="https://cauthu.com.vn/messi-chi-quay-ve-barcelona-vai-tieng-dong-ho.html">
                                        Messi chá» quay vá» Barcelona.. vÃ i tiáº¿ng Äá»ng há»                                    </a>
                                </h3>
                                
                                
                            </div><!-- .post-content-wrapper -->
                        </div><!-- .single-post  -->
                                                <div class="single-post  clearfix wow fadeInUp" data-wow-duration="0.7s">
                            <div class="post-thumb">
                                <a class="thumb-zoom" href="https://cauthu.com.vn/barca-co-the-khien-messi-bi-cam-thi-dau-den-nam-sau.html" title="Barca cÃ³ thá» khiáº¿n Messi bá» cáº¥m thi Äáº¥u Äáº¿n nÄm sau">
                                            <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="Barca cÃ³ thá» khiáº¿n Messi bá» cáº¥m thi Äáº¥u Äáº¿n nÄm sau" title="Barca cÃ³ thá» khiáº¿n Messi bá» cáº¥m thi Äáº¥u Äáº¿n nÄm sau" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/07/messi-barcelona_natg-320x224.jpg" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/07/messi-barcelona_natg-320x224.jpg" alt="Barca cÃ³ thá» khiáº¿n Messi bá» cáº¥m thi Äáº¥u Äáº¿n nÄm sau" title="Barca cÃ³ thá» khiáº¿n Messi bá» cáº¥m thi Äáº¥u Äáº¿n nÄm sau" /></noscript>
                                            <div class="image-overlay"></div>
                                </a>
                                                            </div><!-- .post-thumb -->
                            <div class="post-content-wrapper clearfix">
                                                                <div class="post-meta clearfix">
                                   <span class="posted-on"><i class="fa fa-clock-o"></i>24/07/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>70</span>                                </div><!-- .post-meta --> 
                                                               
                                <h3 class="large-font">
                                    <a href="https://cauthu.com.vn/barca-co-the-khien-messi-bi-cam-thi-dau-den-nam-sau.html">
                                        Barca cÃ³ thá» khiáº¿n Messi bá» cáº¥m thi Äáº¥u Äáº¿n nÄm sau                                    </a>
                                </h3>
                                
                                
                            </div><!-- .post-content-wrapper -->
                        </div><!-- .single-post  -->
                                    </div>
                            
            
        </div><!-- .block-post-wrapper -->
    </div>
    </div></div><div id="pgc-134-2-1"  class="panel-grid-cell" ><div id="panel-134-2-1-0" class="so-panel widget widget_vmagazine_block_grid_list vmagazine_block_grid_list panel-first-child panel-last-child" data-index="4">    <div class="vmagazine-grid-list-wrapp grid no-desc">
        <div class="block-header clearfix">
            <h4 class="block-title"><span class="title-bg">
Bundesliga    </span></h4>
    </div><!-- .block-header-->
            <div class="vmagazine-grid-list block-post-wrapper grid">
            
            <div class="posts-wrap">
                                        <div class="single-post first-post clearfix wow fadeInUp" data-wow-duration="0.7s">
                            <div class="post-thumb">
                                <a class="thumb-zoom" href="https://cauthu.com.vn/ngay-sancho-ra-mat-m-u-dortmund-chi-ngay-30-trieu-euro-mua-nguoi-thay-the.html" title="NgÃ y Sancho ra máº¯t M.U, Dortmund chi ngay 30 triá»u euro mua ngÆ°á»i thay tháº¿">
                                            <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="NgÃ y Sancho ra máº¯t M.U, Dortmund chi ngay 30 triá»u euro mua ngÆ°á»i thay tháº¿" title="NgÃ y Sancho ra máº¯t M.U, Dortmund chi ngay 30 triá»u euro mua ngÆ°á»i thay tháº¿" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/07/malen-dortmund-1-510x369.jpg" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/07/malen-dortmund-1-510x369.jpg" alt="NgÃ y Sancho ra máº¯t M.U, Dortmund chi ngay 30 triá»u euro mua ngÆ°á»i thay tháº¿" title="NgÃ y Sancho ra máº¯t M.U, Dortmund chi ngay 30 triá»u euro mua ngÆ°á»i thay tháº¿" /></noscript>
                                            <div class="image-overlay"></div>
                                </a>
                                                            </div><!-- .post-thumb -->
                            <div class="post-content-wrapper clearfix">
                                                                <div class="post-meta clearfix">
                                   <span class="posted-on"><i class="fa fa-clock-o"></i>24/07/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>80</span>                                </div><!-- .post-meta --> 
                                                               
                                <h3 class="large-font">
                                    <a href="https://cauthu.com.vn/ngay-sancho-ra-mat-m-u-dortmund-chi-ngay-30-trieu-euro-mua-nguoi-thay-the.html">
                                        NgÃ y Sancho ra máº¯t M.U, Dortmund chi ngay 30 triá»u euro mua ngÆ°á»i thay tháº¿                                    </a>
                                </h3>
                                
                                
                            </div><!-- .post-content-wrapper -->
                        </div><!-- .single-post  -->
                                                <div class="single-post  clearfix wow fadeInUp" data-wow-duration="0.7s">
                            <div class="post-thumb">
                                <a class="thumb-zoom" href="https://cauthu.com.vn/dortmund-lam-cung-vu-haaland-chelsea-se-tan-cong-bayern-munich.html" title="Dortmund lÃ m cá»©ng vá»¥ Haaland, Chelsea sáº½ táº¥n cÃ´ng Bayern Munich">
                                            <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="Dortmund lÃ m cá»©ng vá»¥ Haaland, Chelsea sáº½ táº¥n cÃ´ng Bayern Munich" title="Dortmund lÃ m cá»©ng vá»¥ Haaland, Chelsea sáº½ táº¥n cÃ´ng Bayern Munich" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/07/chelsea-lewandowski-1-320x224.jpg" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/07/chelsea-lewandowski-1-320x224.jpg" alt="Dortmund lÃ m cá»©ng vá»¥ Haaland, Chelsea sáº½ táº¥n cÃ´ng Bayern Munich" title="Dortmund lÃ m cá»©ng vá»¥ Haaland, Chelsea sáº½ táº¥n cÃ´ng Bayern Munich" /></noscript>
                                            <div class="image-overlay"></div>
                                </a>
                                                            </div><!-- .post-thumb -->
                            <div class="post-content-wrapper clearfix">
                                                                <div class="post-meta clearfix">
                                   <span class="posted-on"><i class="fa fa-clock-o"></i>18/07/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>119</span>                                </div><!-- .post-meta --> 
                                                               
                                <h3 class="large-font">
                                    <a href="https://cauthu.com.vn/dortmund-lam-cung-vu-haaland-chelsea-se-tan-cong-bayern-munich.html">
                                        Dortmund lÃ m cá»©ng vá»¥ Haaland, Chelsea sáº½ táº¥n cÃ´ng Bayern Munich                                    </a>
                                </h3>
                                
                                
                            </div><!-- .post-content-wrapper -->
                        </div><!-- .single-post  -->
                                                <div class="single-post  clearfix wow fadeInUp" data-wow-duration="0.7s">
                            <div class="post-thumb">
                                <a class="thumb-zoom" href="https://cauthu.com.vn/clb-o-bundesliga-co-cau-thu-su-dung-ten-tuoi-gia.html" title="CLB á» Bundesliga cÃ³ cáº§u thá»§ sá»­ dá»¥ng tÃªn tuá»i giáº£">
                                            <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="CLB á» Bundesliga cÃ³ cáº§u thá»§ sá»­ dá»¥ng tÃªn tuá»i giáº£" title="CLB á» Bundesliga cÃ³ cáº§u thá»§ sá»­ dá»¥ng tÃªn tuá»i giáº£" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/06/9WUAkkg1mTAI_oya33143u0I9_1440x.960-1-320x224.jpg" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/06/9WUAkkg1mTAI_oya33143u0I9_1440x.960-1-320x224.jpg" alt="CLB á» Bundesliga cÃ³ cáº§u thá»§ sá»­ dá»¥ng tÃªn tuá»i giáº£" title="CLB á» Bundesliga cÃ³ cáº§u thá»§ sá»­ dá»¥ng tÃªn tuá»i giáº£" /></noscript>
                                            <div class="image-overlay"></div>
                                </a>
                                                            </div><!-- .post-thumb -->
                            <div class="post-content-wrapper clearfix">
                                                                <div class="post-meta clearfix">
                                   <span class="posted-on"><i class="fa fa-clock-o"></i>09/06/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>118</span>                                </div><!-- .post-meta --> 
                                                               
                                <h3 class="large-font">
                                    <a href="https://cauthu.com.vn/clb-o-bundesliga-co-cau-thu-su-dung-ten-tuoi-gia.html">
                                        CLB á» Bundesliga cÃ³ cáº§u thá»§ sá»­ dá»¥ng tÃªn tuá»i giáº£                                    </a>
                                </h3>
                                
                                
                            </div><!-- .post-content-wrapper -->
                        </div><!-- .single-post  -->
                                                <div class="single-post  clearfix wow fadeInUp" data-wow-duration="0.7s">
                            <div class="post-thumb">
                                <a class="thumb-zoom" href="https://cauthu.com.vn/ket-qua-bayern-munich-dau-gladbach-lewandowski-lap-hattrick-bayern-don-chao-dia-bac-bang-bua-tiec-ban-thang.html" title="Káº¿t quáº£ Bayern Munich Äáº¥u Gladbach: Lewandowski láº­p hattrick, Bayern ÄÃ³n chÃ o ÄÄ©a báº¡c báº±ng bá»¯a tiá»c bÃ n tháº¯ng">
                                            <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="Káº¿t quáº£ Bayern Munich Äáº¥u Gladbach: Lewandowski láº­p hattrick, Bayern ÄÃ³n chÃ o ÄÄ©a báº¡c báº±ng bá»¯a tiá»c bÃ n tháº¯ng" title="Káº¿t quáº£ Bayern Munich Äáº¥u Gladbach: Lewandowski láº­p hattrick, Bayern ÄÃ³n chÃ o ÄÄ©a báº¡c báº±ng bá»¯a tiá»c bÃ n tháº¯ng" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/05/2021_05_08T171313Z_290627489_UP1EH581BU0OW_RTRMADP_3_SOCCER_GERMANY_BAY_BMG_REPORT-e1620511096906.jpg" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/05/2021_05_08T171313Z_290627489_UP1EH581BU0OW_RTRMADP_3_SOCCER_GERMANY_BAY_BMG_REPORT-e1620511096906.jpg" alt="Káº¿t quáº£ Bayern Munich Äáº¥u Gladbach: Lewandowski láº­p hattrick, Bayern ÄÃ³n chÃ o ÄÄ©a báº¡c báº±ng bá»¯a tiá»c bÃ n tháº¯ng" title="Káº¿t quáº£ Bayern Munich Äáº¥u Gladbach: Lewandowski láº­p hattrick, Bayern ÄÃ³n chÃ o ÄÄ©a báº¡c báº±ng bá»¯a tiá»c bÃ n tháº¯ng" /></noscript>
                                            <div class="image-overlay"></div>
                                </a>
                                                            </div><!-- .post-thumb -->
                            <div class="post-content-wrapper clearfix">
                                                                <div class="post-meta clearfix">
                                   <span class="posted-on"><i class="fa fa-clock-o"></i>09/05/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>102</span>                                </div><!-- .post-meta --> 
                                                               
                                <h3 class="large-font">
                                    <a href="https://cauthu.com.vn/ket-qua-bayern-munich-dau-gladbach-lewandowski-lap-hattrick-bayern-don-chao-dia-bac-bang-bua-tiec-ban-thang.html">
                                        Káº¿t quáº£ Bayern Munich Äáº¥u Gladbach: Lewandowski láº­p hattrick, Bayern ÄÃ³n chÃ o ÄÄ©a báº¡c báº±ng bá»¯a tiá»c bÃ n tháº¯ng                                    </a>
                                </h3>
                                
                                
                            </div><!-- .post-content-wrapper -->
                        </div><!-- .single-post  -->
                                    </div>
                            
            
        </div><!-- .block-post-wrapper -->
    </div>
    </div></div><div id="pgc-134-2-2"  class="panel-grid-cell" ><div id="panel-134-2-2-0" class="so-panel widget widget_vmagazine_block_grid_list vmagazine_block_grid_list panel-first-child panel-last-child" data-index="5">    <div class="vmagazine-grid-list-wrapp grid no-desc">
        <div class="block-header clearfix">
            <h4 class="block-title"><span class="title-bg">
ChÃ¢u Ãu    </span></h4>
    </div><!-- .block-header-->
            <div class="vmagazine-grid-list block-post-wrapper grid">
            
            <div class="posts-wrap">
                                        <div class="single-post first-post clearfix wow fadeInUp" data-wow-duration="0.7s">
                            <div class="post-thumb">
                                <a class="thumb-zoom" href="https://cauthu.com.vn/ket-qua-boc-tham-vong-play-off-champions-league-2021-22.html" title="Káº¿t quáº£ bá»c thÄm vÃ²ng play-off Champions League 2021-22">
                                            <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="Káº¿t quáº£ bá»c thÄm vÃ²ng play-off Champions League 2021-22" title="Káº¿t quáº£ bá»c thÄm vÃ²ng play-off Champions League 2021-22" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/08/play-off-510x369.jpg" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/08/play-off-510x369.jpg" alt="Káº¿t quáº£ bá»c thÄm vÃ²ng play-off Champions League 2021-22" title="Káº¿t quáº£ bá»c thÄm vÃ²ng play-off Champions League 2021-22" /></noscript>
                                            <div class="image-overlay"></div>
                                </a>
                                                            </div><!-- .post-thumb -->
                            <div class="post-content-wrapper clearfix">
                                                                <div class="post-meta clearfix">
                                   <span class="posted-on"><i class="fa fa-clock-o"></i>02/08/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>29</span>                                </div><!-- .post-meta --> 
                                                               
                                <h3 class="large-font">
                                    <a href="https://cauthu.com.vn/ket-qua-boc-tham-vong-play-off-champions-league-2021-22.html">
                                        Káº¿t quáº£ bá»c thÄm vÃ²ng play-off Champions League 2021-22                                    </a>
                                </h3>
                                
                                
                            </div><!-- .post-content-wrapper -->
                        </div><!-- .single-post  -->
                                                <div class="single-post  clearfix wow fadeInUp" data-wow-duration="0.7s">
                            <div class="post-thumb">
                                <a class="thumb-zoom" href="https://cauthu.com.vn/tin-nong-super-league-toa-an-tuyen-bo-real-juve-barca-thang-kien-uefa.html" title="Tin nÃ³ng Super League: TÃ²a Ã¡n tuyÃªn bá» Real, Juve, Barca tháº¯ng kiá»n UEFA">
                                            <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="Tin nÃ³ng Super League: TÃ²a Ã¡n tuyÃªn bá» Real, Juve, Barca tháº¯ng kiá»n UEFA" title="Tin nÃ³ng Super League: TÃ²a Ã¡n tuyÃªn bá» Real, Juve, Barca tháº¯ng kiá»n UEFA" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/07/super-league-1-320x224.jpg" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/07/super-league-1-320x224.jpg" alt="Tin nÃ³ng Super League: TÃ²a Ã¡n tuyÃªn bá» Real, Juve, Barca tháº¯ng kiá»n UEFA" title="Tin nÃ³ng Super League: TÃ²a Ã¡n tuyÃªn bá» Real, Juve, Barca tháº¯ng kiá»n UEFA" /></noscript>
                                            <div class="image-overlay"></div>
                                </a>
                                                            </div><!-- .post-thumb -->
                            <div class="post-content-wrapper clearfix">
                                                                <div class="post-meta clearfix">
                                   <span class="posted-on"><i class="fa fa-clock-o"></i>31/07/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>45</span>                                </div><!-- .post-meta --> 
                                                               
                                <h3 class="large-font">
                                    <a href="https://cauthu.com.vn/tin-nong-super-league-toa-an-tuyen-bo-real-juve-barca-thang-kien-uefa.html">
                                        Tin nÃ³ng Super League: TÃ²a Ã¡n tuyÃªn bá» Real, Juve, Barca tháº¯ng kiá»n UEFA                                    </a>
                                </h3>
                                
                                
                            </div><!-- .post-content-wrapper -->
                        </div><!-- .single-post  -->
                                                <div class="single-post  clearfix wow fadeInUp" data-wow-duration="0.7s">
                            <div class="post-thumb">
                                <a class="thumb-zoom" href="https://cauthu.com.vn/nhieu-kha-nang-se-co-2-qua-bong-vang-duoc-trao-trong-nam-2021.html" title="Nhiá»u kháº£ nÄng sáº½ cÃ³ 2 Quáº£ bÃ³ng vÃ ng ÄÆ°á»£c trao trong nÄm 2021">
                                            <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="Nhiá»u kháº£ nÄng sáº½ cÃ³ 2 Quáº£ bÃ³ng vÃ ng ÄÆ°á»£c trao trong nÄm 2021" title="Nhiá»u kháº£ nÄng sáº½ cÃ³ 2 Quáº£ bÃ³ng vÃ ng ÄÆ°á»£c trao trong nÄm 2021" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/07/tumblr_1784dd6b21e37b137c12d9677d7754d1_fe2c0765_1280-320x224.jpg" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/07/tumblr_1784dd6b21e37b137c12d9677d7754d1_fe2c0765_1280-320x224.jpg" alt="Nhiá»u kháº£ nÄng sáº½ cÃ³ 2 Quáº£ bÃ³ng vÃ ng ÄÆ°á»£c trao trong nÄm 2021" title="Nhiá»u kháº£ nÄng sáº½ cÃ³ 2 Quáº£ bÃ³ng vÃ ng ÄÆ°á»£c trao trong nÄm 2021" /></noscript>
                                            <div class="image-overlay"></div>
                                </a>
                                                            </div><!-- .post-thumb -->
                            <div class="post-content-wrapper clearfix">
                                                                <div class="post-meta clearfix">
                                   <span class="posted-on"><i class="fa fa-clock-o"></i>29/07/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>32</span>                                </div><!-- .post-meta --> 
                                                               
                                <h3 class="large-font">
                                    <a href="https://cauthu.com.vn/nhieu-kha-nang-se-co-2-qua-bong-vang-duoc-trao-trong-nam-2021.html">
                                        Nhiá»u kháº£ nÄng sáº½ cÃ³ 2 Quáº£ bÃ³ng vÃ ng ÄÆ°á»£c trao trong nÄm 2021                                    </a>
                                </h3>
                                
                                
                            </div><!-- .post-content-wrapper -->
                        </div><!-- .single-post  -->
                                                <div class="single-post  clearfix wow fadeInUp" data-wow-duration="0.7s">
                            <div class="post-thumb">
                                <a class="thumb-zoom" href="https://cauthu.com.vn/can-tau-rao-mang-mbappe-tuyen-bo-khong-gia-han-voi-psg.html" title="Cáº¡n tÃ u rÃ¡o mÃ¡ng, Mbappe tuyÃªn bá» khÃ´ng gia háº¡n vá»i PSG">
                                            <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="Cáº¡n tÃ u rÃ¡o mÃ¡ng, Mbappe tuyÃªn bá» khÃ´ng gia háº¡n vá»i PSG" title="Cáº¡n tÃ u rÃ¡o mÃ¡ng, Mbappe tuyÃªn bá» khÃ´ng gia háº¡n vá»i PSG" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/07/medium_2021-07-23-0c4a686082-320x224.jpg" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/07/medium_2021-07-23-0c4a686082-320x224.jpg" alt="Cáº¡n tÃ u rÃ¡o mÃ¡ng, Mbappe tuyÃªn bá» khÃ´ng gia háº¡n vá»i PSG" title="Cáº¡n tÃ u rÃ¡o mÃ¡ng, Mbappe tuyÃªn bá» khÃ´ng gia háº¡n vá»i PSG" /></noscript>
                                            <div class="image-overlay"></div>
                                </a>
                                                            </div><!-- .post-thumb -->
                            <div class="post-content-wrapper clearfix">
                                                                <div class="post-meta clearfix">
                                   <span class="posted-on"><i class="fa fa-clock-o"></i>24/07/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>69</span>                                </div><!-- .post-meta --> 
                                                               
                                <h3 class="large-font">
                                    <a href="https://cauthu.com.vn/can-tau-rao-mang-mbappe-tuyen-bo-khong-gia-han-voi-psg.html">
                                        Cáº¡n tÃ u rÃ¡o mÃ¡ng, Mbappe tuyÃªn bá» khÃ´ng gia háº¡n vá»i PSG                                    </a>
                                </h3>
                                
                                
                            </div><!-- .post-content-wrapper -->
                        </div><!-- .single-post  -->
                                    </div>
                            
            
        </div><!-- .block-post-wrapper -->
    </div>
    </div></div></div></div><div id="pg-134-3"  class="panel-grid panel-has-style" ><div class="siteorigin-panels-stretch panel-row-style panel-row-style-for-134-3" data-stretch-type="full-stretched" ><div id="pgc-134-3-0"  class="panel-grid-cell" ><div id="panel-134-3-0-0" class="so-panel widget widget_vmagazine_category_posts_slider vmagazine_category_posts_slider panel-first-child panel-last-child" data-index="6">        <div data-bg="https://cauthu.com.vn/wp-content/uploads/2021/06/bg-pick.jpg" class="vmagazine-cat-slider block-post-wrapper block_layout_1 has-bg rocket-lazyload" style="">
            
            <div class="content-wrapper-featured-slider">                <h4 class="block-title"><span class="title-bg">
Editorâs Pick    </span></h4>
                <ul class="widget-cat-slider cS-hidden">                            <li class="single-post clearfix">
                                <div class="post-thumb">
                                    <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" title="NÃ³i chuyá»n sÆ°á»ng, HLV Park Hang Seo âsá» 2â thÃ¬ khÃ´ng aiâ¦ sá» 1" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/07/ava.png" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/07/ava.png" alt="" title="NÃ³i chuyá»n sÆ°á»ng, HLV Park Hang Seo âsá» 2â thÃ¬ khÃ´ng aiâ¦ sá» 1" /></noscript>
                                </div>
                                <div class="post-caption">
                                    <span class="cat-links"><a href="https://cauthu.com.vn/editors-pick" class="cat-43477" rel="category tag">Editor's Pick</a><a href="https://cauthu.com.vn/bong-da-viet-nam" class="cat-1" rel="category tag">Viá»t Nam</a></span>                                    <div class="post-meta">
                                        <span class="posted-on"><i class="fa fa-clock-o"></i>30/07/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>50</span>                                    </div>
                                                                        <h3 class="extra-large-font">
                                        <a href="https://cauthu.com.vn/noi-chuyen-suong-hlv-park-hang-seo-so-2-thi-khong-ai-so-1.html">
                                             NÃ³i chuyá»n sÆ°á»ng, HLV Park Hang Seo âsá» 2â thÃ¬ khÃ´ng aiâ¦ sá» 1                                        </a>
                                    </h3>
                                                                        <p>
                                      CÃ¢u chuyá»n HLV Akira Nishino bá» ThÃ¡i Lan sa tháº£i Äang trá» thÃ nh Äá» tÃ i bÃ n luáº­n rÃ´m ráº£ ká» tá»« ngÃ y hÃ´m qua. VÃ  ngÆ°á»i ta cÅ©ng chá»£t nháº­n ra, Park Hang Seo, ngÆ°á»i Äá»ng nghiá»p cá»§a nhÃ  cáº§m quÃ¢n Nháº­t Báº£n Äan                                                                          </p>
                                                                    </div><!-- .post-caption -->
                            </li><!-- .single-post -->
                                                        <li class="single-post clearfix">
                                <div class="post-thumb">
                                    <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" title="Man United sáº½ pháº£i giáº£i quyáº¿t bÃ i toÃ¡n mang tÃªn Pogba nhÆ° tháº¿ nÃ o?" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/07/POGBA-1024x512-1-1024x500.jpg" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/07/POGBA-1024x512-1-1024x500.jpg" alt="" title="Man United sáº½ pháº£i giáº£i quyáº¿t bÃ i toÃ¡n mang tÃªn Pogba nhÆ° tháº¿ nÃ o?" /></noscript>
                                </div>
                                <div class="post-caption">
                                    <span class="cat-links"><a href="https://cauthu.com.vn/bong-da-anh" class="cat-4" rel="category tag">Anh</a><a href="https://cauthu.com.vn/editors-pick" class="cat-43477" rel="category tag">Editor's Pick</a></span>                                    <div class="post-meta">
                                        <span class="posted-on"><i class="fa fa-clock-o"></i>29/07/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>50</span>                                    </div>
                                                                        <h3 class="extra-large-font">
                                        <a href="https://cauthu.com.vn/man-united-se-phai-giai-quyet-bai-toan-mang-ten-pogba-nhu-the-nao.html">
                                             Man United sáº½ pháº£i giáº£i quyáº¿t bÃ i toÃ¡n mang tÃªn Pogba nhÆ° tháº¿ nÃ o?                                        </a>
                                    </h3>
                                                                        <p>
                                      Manchester United ÄÃ£ kÃ­ch ná» bom táº¥n Äáº§u tiÃªn trong ká»³ chuyá»n nhÆ°á»£ng mÃ¹a HÃ¨, vá»i báº£n há»£p Äá»ng trá» giÃ¡ khoáº£ng 73 triá»u báº£ng dÃ nh cho Jadon Sancho. Sáº¯p tá»i ÄÃ¢y, dá»± kiáº¿n há» cÃ²n thÃ¢u tÃ³m thÃªm má»t ngÃ´i sao                                                                          </p>
                                                                    </div><!-- .post-caption -->
                            </li><!-- .single-post -->
                                                        <li class="single-post clearfix">
                                <div class="post-thumb">
                                    <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" title="Xáº¡ thá»§ HoÃ ng XuÃ¢n Vinh: Tá»« cÃº bÃ³p cÃ² âcháº¥n Äá»ngâ Äáº¿n káº» tháº¥t báº¡iâ¦ vÄ© Äáº¡i" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/07/hxv-bia.jpg" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/07/hxv-bia.jpg" alt="" title="Xáº¡ thá»§ HoÃ ng XuÃ¢n Vinh: Tá»« cÃº bÃ³p cÃ² âcháº¥n Äá»ngâ Äáº¿n káº» tháº¥t báº¡iâ¦ vÄ© Äáº¡i" /></noscript>
                                </div>
                                <div class="post-caption">
                                    <span class="cat-links"><a href="https://cauthu.com.vn/editors-pick" class="cat-43477" rel="category tag">Editor's Pick</a><a href="https://cauthu.com.vn/thich-me/sau-anh-hao-quang" class="cat-51588" rel="category tag">Sau Ã¡nh hÃ o quang</a></span>                                    <div class="post-meta">
                                        <span class="posted-on"><i class="fa fa-clock-o"></i>29/07/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>96</span>                                    </div>
                                                                        <h3 class="extra-large-font">
                                        <a href="https://cauthu.com.vn/xa-thu-hoang-xuan-vinh-tu-cu-bop-co-chan-dong-den-ke-that-bai-vi-dai.html">
                                             Xáº¡ thá»§ HoÃ ng XuÃ¢n Vinh: Tá»« cÃº bÃ³p cÃ² âcháº¥n Äá»ngâ Äáº¿n káº» tháº¥t báº¡iâ¦ vÄ© Äáº¡i                                        </a>
                                    </h3>
                                                                        <p>
                                      Táº¡i Olympic Tokyo 2020, HoÃ ng XuÃ¢n Vinh ÄÃ£ khÃ´ng thá» viáº¿t thÃªm cÃ¢u chuyá»n cá» tÃ­ch nhÆ° 5 nÄm vá» trÆ°á»c táº¡i Rio (Brazil). Tháº¥t báº¡i cá»§a xáº¡ thá»§ 47 tuá»i ÄÃ£ ÄÆ°á»£c dá»± bÃ¡o nhÆ°ng anh váº«n trá» thÃ nh má»t nhÃ¢n váº­t v                                                                          </p>
                                                                    </div><!-- .post-caption -->
                            </li><!-- .single-post -->
                                                        <li class="single-post clearfix">
                                <div class="post-thumb">
                                    <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" title="Váº¿t sáº¹o tuá»i 20, mÅ©i vaccine âgÃ¢y bÃ£oâ cá»§a cÃ´ Hoa khÃ´i vÃ  Ã´ng cá»±u phÃ³" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/07/vn.png" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/07/vn.png" alt="" title="Váº¿t sáº¹o tuá»i 20, mÅ©i vaccine âgÃ¢y bÃ£oâ cá»§a cÃ´ Hoa khÃ´i vÃ  Ã´ng cá»±u phÃ³" /></noscript>
                                </div>
                                <div class="post-caption">
                                    <span class="cat-links"><a href="https://cauthu.com.vn/editors-pick" class="cat-43477" rel="category tag">Editor's Pick</a><a href="https://cauthu.com.vn/bong-da-viet-nam" class="cat-1" rel="category tag">Viá»t Nam</a></span>                                    <div class="post-meta">
                                        <span class="posted-on"><i class="fa fa-clock-o"></i>26/07/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>61</span>                                    </div>
                                                                        <h3 class="extra-large-font">
                                        <a href="https://cauthu.com.vn/vet-seo-tuoi-20-mui-vaccine-gay-bao-cua-co-hoa-khoi-va-ong-cuu-pho.html">
                                             Váº¿t sáº¹o tuá»i 20, mÅ©i vaccine âgÃ¢y bÃ£oâ cá»§a cÃ´ Hoa khÃ´i vÃ  Ã´ng cá»±u phÃ³                                        </a>
                                    </h3>
                                                                        <p>
                                      BÃªn bÃ n thá» vá»ng, DÆ°Æ¡ng Thá» Anh, má»t tÃ¬nh nguyá»n viÃªn ÄÆ°á»£c chi viá»n tá»« trÆ°á»ng Äáº¡i há»c ká»¹ thuáº­t Y táº¿ Háº£i DÆ°Æ¡ng cháº¥p tay kháº¥n láº¡y vÃ  xin bá» tha lá»i vÃ¬ khÃ´ng thá» vá» quÃª nhÃ¬n máº·t Ã´ng láº§n cuá»i. Cha cá»§a DÆ°Æ¡                                                                          </p>
                                                                    </div><!-- .post-caption -->
                            </li><!-- .single-post -->
                            </ul>        </div><!-- .content-wrapper -->
        </div><!-- .block-post-wrapper -->
    </div></div></div></div><div id="pg-134-4"  class="panel-grid panel-has-style" ><div class="panel-row-style panel-row-style-for-134-4" ><div id="pgc-134-4-0"  class="panel-grid-cell" ><div id="panel-134-4-0-0" class="so-panel widget widget_sow-tabs panel-first-child panel-last-child" data-index="7" ><div class="so-widget-sow-tabs so-widget-sow-tabs-default-02e4508ec074-134"><h3 class="widget-title">Báº£ng xáº¿p háº¡ng</h3><div class="sow-tabs">
	<div class="sow-tabs-tab-container" role="tablist">
			<div class="sow-tabs-tab sow-tabs-tab-selected"
			 role="tab" data-anchor="epl"
			 aria-selected="true" tabindex="0">
			<div class="sow-tabs-title sow-tabs-title-icon-left">
								EPL							</div>
		</div>
			<div class="sow-tabs-tab"
			 role="tab" data-anchor="la-liga"
			 aria-selected="false" tabindex="-1">
			<div class="sow-tabs-title sow-tabs-title-icon-left">
								La Liga							</div>
		</div>
			<div class="sow-tabs-tab"
			 role="tab" data-anchor="bundesliga"
			 aria-selected="false" tabindex="-1">
			<div class="sow-tabs-title sow-tabs-title-icon-left">
								Bundesliga							</div>
		</div>
			<div class="sow-tabs-tab"
			 role="tab" data-anchor="serie-a"
			 aria-selected="false" tabindex="-1">
			<div class="sow-tabs-title sow-tabs-title-icon-left">
								Serie A							</div>
		</div>
			<div class="sow-tabs-tab"
			 role="tab" data-anchor="ligue-1"
			 aria-selected="false" tabindex="-1">
			<div class="sow-tabs-title sow-tabs-title-icon-left">
								Ligue 1							</div>
		</div>
		</div>
	
	<div class="sow-tabs-panel-container">
			<div class="sow-tabs-panel">
			<div class="sow-tabs-panel-content" role="tabpanel" tabindex="0">
				<p><div style="width:100%;" class="sitable "><table id="sitafire422761231">
<thead><tr>
<th class="rank first" title="Rank">#</th>
<th class="team" title="Team">Team</th>
<th class="matches_played" title="Matches played">MP</th>
<th class="points last" title="Points">P</th>
</tr></thead>
<tbody>
<tr class="even">
<td class="rank first">1</td>
<td class="team"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/arsenal.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/arsenal.png" alt="" /></noscript></span>Arsenal</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">2</td>
<td class="team"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/aston_villa.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/aston_villa.png" alt="" /></noscript></span>Aston Villa</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">3</td>
<td class="team">Brentford</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">4</td>
<td class="team">Brighton & Hovâ¦</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">5</td>
<td class="team">Burnley</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">6</td>
<td class="team"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/chelsea.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/chelsea.png" alt="" /></noscript></span>Chelsea</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">7</td>
<td class="team"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/crystal_palace.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/crystal_palace.png" alt="" /></noscript></span>Crystal Palace</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">8</td>
<td class="team"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/everton.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/everton.png" alt="" /></noscript></span>Everton</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">9</td>
<td class="team">Leeds United</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">10</td>
<td class="team"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/leicester_city.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/leicester_city.png" alt="" /></noscript></span>Leicester City</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">11</td>
<td class="team"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/liverpool.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/liverpool.png" alt="" /></noscript></span>Liverpool</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">12</td>
<td class="team"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/manchester_city.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/manchester_city.png" alt="" /></noscript></span>Manchester City</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">13</td>
<td class="team"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/manchester_united.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/manchester_united.png" alt="" /></noscript></span>Manchester United</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">14</td>
<td class="team"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/newcastle_united.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/newcastle_united.png" alt="" /></noscript></span>Newcastle United</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">15</td>
<td class="team"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/norwich_city.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/norwich_city.png" alt="" /></noscript></span>Norwich City</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">16</td>
<td class="team"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/southampton.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/southampton.png" alt="" /></noscript></span>Southampton</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">17</td>
<td class="team"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/tottenham_hotspur.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/tottenham_hotspur.png" alt="" /></noscript></span>Tottenham Hotspur</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">18</td>
<td class="team"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/watford.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/watford.png" alt="" /></noscript></span>Watford</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">19</td>
<td class="team"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/west_ham_united.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/west_ham_united.png" alt="" /></noscript></span>West Ham United</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">20</td>
<td class="team">Wolverhampton Wanderers</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
</tbody>
</table>
</div></p>
			</div>
		</div>
			<div class="sow-tabs-panel">
			<div class="sow-tabs-panel-content" role="tabpanel" aria-hidden="true">
				<p><div style="width:100%;" class="sitable "><table id="sitafire251101323">
<thead><tr>
<th class="rank first" title="Rank">#</th>
<th class="team" title="Team">Team</th>
<th class="matches_played" title="Matches played">MP</th>
<th class="points last" title="Points">P</th>
</tr></thead>
<tbody>
<tr class="even">
<td class="rank first">1</td>
<td class="team">Alaves</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">2</td>
<td class="team">Athletic Bilbao</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">3</td>
<td class="team">AtlÃ©tico de Madrid</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">4</td>
<td class="team">Barcelona</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">5</td>
<td class="team">Cadiz</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">6</td>
<td class="team">Celta Vigo</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">7</td>
<td class="team">Elche</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">8</td>
<td class="team">Espanyol</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">9</td>
<td class="team">Getafe</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">10</td>
<td class="team">Granada</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">11</td>
<td class="team">Levante</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">12</td>
<td class="team">Mallorca</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">13</td>
<td class="team">Osasuna</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">14</td>
<td class="team">Rayo Vallecano</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">15</td>
<td class="team">Real Betis</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">16</td>
<td class="team">Real Madrid</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">17</td>
<td class="team">Real Sociedad</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">18</td>
<td class="team">Sevilla</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">19</td>
<td class="team">Valencia</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">20</td>
<td class="team">Villarreal</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
</tbody>
</table>
</div></p>
			</div>
		</div>
			<div class="sow-tabs-panel">
			<div class="sow-tabs-panel-content" role="tabpanel" aria-hidden="true">
				<p><div style="width:100%;" class="sitable "><table id="sitafire1106521522">
<thead><tr>
<th class="rank first" title="Rank">#</th>
<th class="team" title="Team">Team</th>
<th class="matches_played" title="Matches played">MP</th>
<th class="points last" title="Points">P</th>
</tr></thead>
<tbody>
<tr class="even">
<td class="rank first">1</td>
<td class="team"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/arminia_bielefeld.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/arminia_bielefeld.png" alt="" /></noscript></span>Arminia Bielefeld</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">2</td>
<td class="team">Augsburg 1907</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">3</td>
<td class="team">Bayer 04 Leverkusen</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">4</td>
<td class="team">Bayern Munich</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">5</td>
<td class="team"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/vfl_bochum.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/vfl_bochum.png" alt="" /></noscript></span>VFL Bochum</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">6</td>
<td class="team"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/borussia_dortmund.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/borussia_dortmund.png" alt="" /></noscript></span>Borussia Dortmund</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">7</td>
<td class="team">Borussia MÃ¶nchengladbach</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">8</td>
<td class="team"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/eintracht_frankfurt.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/eintracht_frankfurt.png" alt="" /></noscript></span>Eintracht Frankfurt</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">9</td>
<td class="team">FC Cologne</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">10</td>
<td class="team"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/sc_freiburg.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/sc_freiburg.png" alt="" /></noscript></span>SC Freiburg</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">11</td>
<td class="team"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/greuther_fuerth.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/greuther_fuerth.png" alt="" /></noscript></span>Greuther FÃ¼rth</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">12</td>
<td class="team">Hertha Berlin</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">13</td>
<td class="team">TSG 1899 Hoffenheim</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">14</td>
<td class="team">Mainz</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">15</td>
<td class="team"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/rb_leipzig.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/rb_leipzig.png" alt="" /></noscript></span>RB Leipzig</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">16</td>
<td class="team"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/stuttgart.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/stuttgart.png" alt="" /></noscript></span>Stuttgart</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">17</td>
<td class="team"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/union_berlin.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/union_berlin.png" alt="" /></noscript></span>Union Berlin</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">18</td>
<td class="team"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/wolfsburg.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/wolfsburg.png" alt="" /></noscript></span>Wolfsburg</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
</tbody>
</table>
</div></p>
			</div>
		</div>
			<div class="sow-tabs-panel">
			<div class="sow-tabs-panel-content" role="tabpanel" aria-hidden="true">
				<p><div style="width:100%;" class="sitable "><table id="sitafire742971618">
<thead><tr>
<th class="rank first" title="Rank">#</th>
<th class="team" title="Team">Team</th>
<th class="matches_played" title="Matches played">MP</th>
<th class="points last" title="Points">P</th>
</tr></thead>
<tbody>
<tr class="even">
<td class="rank first">1</td>
<td class="team">AC Milan</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">2</td>
<td class="team">Atalanta</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">3</td>
<td class="team">Bologna</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">4</td>
<td class="team">Cagliari</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">5</td>
<td class="team">Empoli</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">6</td>
<td class="team">Fiorentina</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">7</td>
<td class="team">Genoa</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">8</td>
<td class="team">Inter Milan</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">9</td>
<td class="team">Juventus</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">10</td>
<td class="team">Lazio</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">11</td>
<td class="team">SSC Napoli</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">12</td>
<td class="team">Roma</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">13</td>
<td class="team">Salernitana</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">14</td>
<td class="team">Sampdoria</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">15</td>
<td class="team">Sassuolo</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">16</td>
<td class="team">Spezia</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">17</td>
<td class="team">Torino</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">18</td>
<td class="team">Udinese</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">19</td>
<td class="team">Venezia</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">20</td>
<td class="team">Verona</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
</tbody>
</table>
</div></p>
			</div>
		</div>
			<div class="sow-tabs-panel">
			<div class="sow-tabs-panel-content" role="tabpanel" aria-hidden="true">
				<p><div style="width:100%;" class="sitable "><table id="sitafire1724021980">
<thead><tr>
<th class="rank first" title="Rank">#</th>
<th class="team" title="Team">Team</th>
<th class="matches_played" title="Matches played">MP</th>
<th class="points last" title="Points">P</th>
</tr></thead>
<tbody>
<tr class="even">
<td class="rank first">1</td>
<td class="team">Angers</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">2</td>
<td class="team">Girondins de Bordeaux</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">3</td>
<td class="team">Brest</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">4</td>
<td class="team">Clermont</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">5</td>
<td class="team">Lens</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">6</td>
<td class="team">LOSC Lille MÃ©tropole</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">7</td>
<td class="team">Lorient</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">8</td>
<td class="team">Lyon</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">9</td>
<td class="team">Marseille</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">10</td>
<td class="team">Metz</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">11</td>
<td class="team">Monaco</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">12</td>
<td class="team">Montpellier HÃ©rault SC</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">13</td>
<td class="team">Nantes</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">14</td>
<td class="team">OGC Nice</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">15</td>
<td class="team">Paris Saint-Germain</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">16</td>
<td class="team">Stade de Reims</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">17</td>
<td class="team">Stade Rennais FC</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">18</td>
<td class="team">Saint-Etienne</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="even">
<td class="rank first">19</td>
<td class="team">Strasbourg</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
<tr class="odd">
<td class="rank first">20</td>
<td class="team">ESTAC</td>
<td class="matches_played">0</td>
<td class="points last">0</td>
</tr>
</tbody>
</table>
</div></p>
			</div>
		</div>
		</div>
</div>
</div></div></div><div id="pgc-134-4-1"  class="panel-grid-cell" ><div id="panel-134-4-1-0" class="so-panel widget widget_sow-tabs panel-first-child panel-last-child" data-index="8" ><div class="so-widget-sow-tabs so-widget-sow-tabs-default-02e4508ec074-134"><h3 class="widget-title">Lá»ch thi Äáº¥u - Káº¿t quáº£</h3><div class="sow-tabs">
	<div class="sow-tabs-tab-container" role="tablist">
			<div class="sow-tabs-tab sow-tabs-tab-selected"
			 role="tab" data-anchor="epl"
			 aria-selected="true" tabindex="0">
			<div class="sow-tabs-title sow-tabs-title-icon-left">
								EPL							</div>
		</div>
			<div class="sow-tabs-tab"
			 role="tab" data-anchor="la-liga"
			 aria-selected="false" tabindex="-1">
			<div class="sow-tabs-title sow-tabs-title-icon-left">
								La Liga							</div>
		</div>
			<div class="sow-tabs-tab"
			 role="tab" data-anchor="bundesliga"
			 aria-selected="false" tabindex="-1">
			<div class="sow-tabs-title sow-tabs-title-icon-left">
								Bundesliga							</div>
		</div>
			<div class="sow-tabs-tab"
			 role="tab" data-anchor="serie-a"
			 aria-selected="false" tabindex="-1">
			<div class="sow-tabs-title sow-tabs-title-icon-left">
								Serie A							</div>
		</div>
			<div class="sow-tabs-tab"
			 role="tab" data-anchor="ligue-1"
			 aria-selected="false" tabindex="-1">
			<div class="sow-tabs-title sow-tabs-title-icon-left">
								Ligue 1							</div>
		</div>
		</div>
	
	<div class="sow-tabs-panel-container">
			<div class="sow-tabs-panel">
			<div class="sow-tabs-panel-content" role="tabpanel" tabindex="0">
				<p><div style="width:100%;" class="sifixtures "><table id="sitafire1082224886">
<tbody>
<tr class="date"><td class="date" colspan="3">14/08/2021</td></tr>
<tr class="even">
<td class="team_a">Brentford</td>
<td class="time">02:00</td>
<td class="team_b"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/arsenal.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/arsenal.png" alt="" /></noscript></span>Arsenal</td>
</tr>
<tr class="odd">
<td class="team_a">Manchester United <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/manchester_united.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/manchester_united.png" alt="" /></noscript></span></td>
<td class="time">18:30</td>
<td class="team_b">Leeds United</td>
</tr>
<tr class="even">
<td class="team_a">Burnley</td>
<td class="time">21:00</td>
<td class="team_b">Brighton & Hovâ¦</td>
</tr>
<tr class="odd">
<td class="team_a">Chelsea <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/chelsea.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/chelsea.png" alt="" /></noscript></span></td>
<td class="time">21:00</td>
<td class="team_b"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/crystal_palace.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/crystal_palace.png" alt="" /></noscript></span>Crystal Palace</td>
</tr>
<tr class="even">
<td class="team_a">Everton <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/everton.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/everton.png" alt="" /></noscript></span></td>
<td class="time">21:00</td>
<td class="team_b"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/southampton.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/southampton.png" alt="" /></noscript></span>Southampton</td>
</tr>
<tr class="odd">
<td class="team_a">Leicester City <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/leicester_city.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/leicester_city.png" alt="" /></noscript></span></td>
<td class="time">21:00</td>
<td class="team_b">Wolverhampton Wanderers</td>
</tr>
<tr class="even">
<td class="team_a">Watford <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/watford.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/watford.png" alt="" /></noscript></span></td>
<td class="time">21:00</td>
<td class="team_b"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/aston_villa.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/aston_villa.png" alt="" /></noscript></span>Aston Villa</td>
</tr>
<tr class="odd">
<td class="team_a">Norwich City <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/norwich_city.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/norwich_city.png" alt="" /></noscript></span></td>
<td class="time">23:30</td>
<td class="team_b"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/liverpool.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/liverpool.png" alt="" /></noscript></span>Liverpool</td>
</tr>
<tr class="date"><td class="date" colspan="3">15/08/2021</td></tr>
<tr class="even">
<td class="team_a">Newcastle United <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/newcastle_united.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/newcastle_united.png" alt="" /></noscript></span></td>
<td class="time">20:00</td>
<td class="team_b"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/west_ham_united.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/west_ham_united.png" alt="" /></noscript></span>West Ham United</td>
</tr>
<tr class="odd">
<td class="team_a">Tottenham Hotspur <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/tottenham_hotspur.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/tottenham_hotspur.png" alt="" /></noscript></span></td>
<td class="time">22:30</td>
<td class="team_b"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/manchester_city.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/manchester_city.png" alt="" /></noscript></span>Manchester City</td>
</tr>
<tr class="date"><td class="date" colspan="3">21/08/2021</td></tr>
<tr class="even">
<td class="team_a">Liverpool <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/liverpool.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/liverpool.png" alt="" /></noscript></span></td>
<td class="time">18:30</td>
<td class="team_b">Burnley</td>
</tr>
<tr class="odd">
<td class="team_a">Manchester City <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/manchester_city.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/manchester_city.png" alt="" /></noscript></span></td>
<td class="time">21:00</td>
<td class="team_b"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/norwich_city.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/norwich_city.png" alt="" /></noscript></span>Norwich City</td>
</tr>
<tr class="even">
<td class="team_a">Aston Villa <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/aston_villa.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/aston_villa.png" alt="" /></noscript></span></td>
<td class="time">21:00</td>
<td class="team_b"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/newcastle_united.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/newcastle_united.png" alt="" /></noscript></span>Newcastle United</td>
</tr>
<tr class="odd">
<td class="team_a">Leeds United</td>
<td class="time">21:00</td>
<td class="team_b"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/everton.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/everton.png" alt="" /></noscript></span>Everton</td>
</tr>
<tr class="even">
<td class="team_a">Crystal Palace <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/crystal_palace.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/crystal_palace.png" alt="" /></noscript></span></td>
<td class="time">21:00</td>
<td class="team_b">Brentford</td>
</tr>
<tr class="odd">
<td class="team_a">Brighton & Hovâ¦</td>
<td class="time">23:30</td>
<td class="team_b"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/watford.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/watford.png" alt="" /></noscript></span>Watford</td>
</tr>
<tr class="date"><td class="date" colspan="3">22/08/2021</td></tr>
<tr class="even">
<td class="team_a">Southampton <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/southampton.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/southampton.png" alt="" /></noscript></span></td>
<td class="time">20:00</td>
<td class="team_b"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/manchester_united.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/manchester_united.png" alt="" /></noscript></span>Manchester United</td>
</tr>
<tr class="odd">
<td class="team_a">Wolverhampton Wanderers</td>
<td class="time">20:00</td>
<td class="team_b"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/tottenham_hotspur.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/tottenham_hotspur.png" alt="" /></noscript></span>Tottenham Hotspur</td>
</tr>
<tr class="even">
<td class="team_a">Arsenal <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/arsenal.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/arsenal.png" alt="" /></noscript></span></td>
<td class="time">22:30</td>
<td class="team_b"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/chelsea.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/chelsea.png" alt="" /></noscript></span>Chelsea</td>
</tr>
<tr class="date"><td class="date" colspan="3">24/08/2021</td></tr>
<tr class="odd">
<td class="team_a">West Ham United <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/west_ham_united.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/west_ham_united.png" alt="" /></noscript></span></td>
<td class="time">02:00</td>
<td class="team_b"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/leicester_city.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/leicester_city.png" alt="" /></noscript></span>Leicester City</td>
</tr>
</tbody>
</table>
</div></p>
			</div>
		</div>
			<div class="sow-tabs-panel">
			<div class="sow-tabs-panel-content" role="tabpanel" aria-hidden="true">
				<p><div style="width:100%;" class="sifixtures "><table id="sitafire1260560384">
<tbody>
<tr class="date"><td class="date" colspan="3">14/08/2021</td></tr>
<tr class="even">
<td class="team_a">Valencia</td>
<td class="time">02:00</td>
<td class="team_b">Getafe</td>
</tr>
<tr class="odd">
<td class="team_a">Osasuna</td>
<td class="time">22:00</td>
<td class="team_b">Espanyol</td>
</tr>
<tr class="date"><td class="date" colspan="3">15/08/2021</td></tr>
<tr class="even">
<td class="team_a">Mallorca</td>
<td class="time">00:30</td>
<td class="team_b">Real Betis</td>
</tr>
<tr class="odd">
<td class="team_a">Cadiz</td>
<td class="time">00:30</td>
<td class="team_b">Levante</td>
</tr>
<tr class="even">
<td class="team_a">Alaves</td>
<td class="time">03:00</td>
<td class="team_b">Real Madrid</td>
</tr>
<tr class="odd">
<td class="team_a">Celta Vigo</td>
<td class="time">22:30</td>
<td class="team_b">AtlÃ©tico de Madrid</td>
</tr>
<tr class="date"><td class="date" colspan="3">16/08/2021</td></tr>
<tr class="even">
<td class="team_a">Barcelona</td>
<td class="time">01:00</td>
<td class="team_b">Real Sociedad</td>
</tr>
<tr class="odd">
<td class="team_a">Sevilla</td>
<td class="time">03:15</td>
<td class="team_b">Rayo Vallecano</td>
</tr>
<tr class="date"><td class="date" colspan="3">17/08/2021</td></tr>
<tr class="even">
<td class="team_a">Villarreal</td>
<td class="time">01:00</td>
<td class="team_b">Granada</td>
</tr>
<tr class="odd">
<td class="team_a">Elche</td>
<td class="time">03:00</td>
<td class="team_b">Athletic Bilbao</td>
</tr>
<tr class="date"><td class="date" colspan="3">21/08/2021</td></tr>
<tr class="even">
<td class="team_a">Real Betis</td>
<td class="time">02:00</td>
<td class="team_b">Cadiz</td>
</tr>
<tr class="odd">
<td class="team_a">Alaves</td>
<td class="time">22:00</td>
<td class="team_b">Mallorca</td>
</tr>
<tr class="date"><td class="date" colspan="3">22/08/2021</td></tr>
<tr class="even">
<td class="team_a">Granada</td>
<td class="time">00:30</td>
<td class="team_b">Valencia</td>
</tr>
<tr class="odd">
<td class="team_a">Espanyol</td>
<td class="time">00:30</td>
<td class="team_b">Villarreal</td>
</tr>
<tr class="even">
<td class="team_a">Athletic Bilbao</td>
<td class="time">03:00</td>
<td class="team_b">Barcelona</td>
</tr>
<tr class="odd">
<td class="team_a">Real Sociedad</td>
<td class="time">22:00</td>
<td class="team_b">Rayo Vallecano</td>
</tr>
<tr class="date"><td class="date" colspan="3">23/08/2021</td></tr>
<tr class="even">
<td class="team_a">AtlÃ©tico de Madrid</td>
<td class="time">00:30</td>
<td class="team_b">Elche</td>
</tr>
<tr class="odd">
<td class="team_a">Levante</td>
<td class="time">03:00</td>
<td class="team_b">Real Madrid</td>
</tr>
<tr class="date"><td class="date" colspan="3">24/08/2021</td></tr>
<tr class="even">
<td class="team_a">Getafe</td>
<td class="time">01:00</td>
<td class="team_b">Sevilla</td>
</tr>
<tr class="odd">
<td class="team_a">Osasuna</td>
<td class="time">03:00</td>
<td class="team_b">Celta Vigo</td>
</tr>
</tbody>
</table>
</div></p>
			</div>
		</div>
			<div class="sow-tabs-panel">
			<div class="sow-tabs-panel-content" role="tabpanel" aria-hidden="true">
				<p><div style="width:100%;" class="sifixtures "><table id="sitafire1893441096">
<tbody>
<tr class="date"><td class="date" colspan="3">14/08/2021</td></tr>
<tr class="even">
<td class="team_a">Borussia MÃ¶nchengladbach</td>
<td class="time">01:30</td>
<td class="team_b">Bayern Munich</td>
</tr>
<tr class="odd">
<td class="team_a">Augsburg 1907</td>
<td class="time">20:30</td>
<td class="team_b">TSG 1899 Hoffenheim</td>
</tr>
<tr class="even">
<td class="team_a">Arminia Bielefeld <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/arminia_bielefeld.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/arminia_bielefeld.png" alt="" /></noscript></span></td>
<td class="time">20:30</td>
<td class="team_b"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/sc_freiburg.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/sc_freiburg.png" alt="" /></noscript></span>SC Freiburg</td>
</tr>
<tr class="odd">
<td class="team_a">Wolfsburg <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/wolfsburg.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/wolfsburg.png" alt="" /></noscript></span></td>
<td class="time">20:30</td>
<td class="team_b"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/vfl_bochum.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/vfl_bochum.png" alt="" /></noscript></span>VFL Bochum</td>
</tr>
<tr class="even">
<td class="team_a">Stuttgart <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/stuttgart.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/stuttgart.png" alt="" /></noscript></span></td>
<td class="time">20:30</td>
<td class="team_b"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/greuther_fuerth.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/greuther_fuerth.png" alt="" /></noscript></span>Greuther FÃ¼rth</td>
</tr>
<tr class="odd">
<td class="team_a">Union Berlin <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/union_berlin.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/union_berlin.png" alt="" /></noscript></span></td>
<td class="time">20:30</td>
<td class="team_b">Bayer 04 Leverkusen</td>
</tr>
<tr class="even">
<td class="team_a">Borussia Dortmund <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/borussia_dortmund.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/borussia_dortmund.png" alt="" /></noscript></span></td>
<td class="time">23:30</td>
<td class="team_b"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/eintracht_frankfurt.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/eintracht_frankfurt.png" alt="" /></noscript></span>Eintracht Frankfurt</td>
</tr>
<tr class="date"><td class="date" colspan="3">15/08/2021</td></tr>
<tr class="odd">
<td class="team_a">Mainz</td>
<td class="time">20:30</td>
<td class="team_b"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/rb_leipzig.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/rb_leipzig.png" alt="" /></noscript></span>RB Leipzig</td>
</tr>
<tr class="even">
<td class="team_a">FC Cologne</td>
<td class="time">22:30</td>
<td class="team_b">Hertha Berlin</td>
</tr>
<tr class="date"><td class="date" colspan="3">21/08/2021</td></tr>
<tr class="odd">
<td class="team_a">RB Leipzig <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/rb_leipzig.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/rb_leipzig.png" alt="" /></noscript></span></td>
<td class="time">01:30</td>
<td class="team_b"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/stuttgart.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/stuttgart.png" alt="" /></noscript></span>Stuttgart</td>
</tr>
<tr class="even">
<td class="team_a">Greuther FÃ¼rth <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/greuther_fuerth.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/greuther_fuerth.png" alt="" /></noscript></span></td>
<td class="time">20:30</td>
<td class="team_b"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/arminia_bielefeld.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/arminia_bielefeld.png" alt="" /></noscript></span>Arminia Bielefeld</td>
</tr>
<tr class="odd">
<td class="team_a">VFL Bochum <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/vfl_bochum.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/vfl_bochum.png" alt="" /></noscript></span></td>
<td class="time">20:30</td>
<td class="team_b">Mainz</td>
</tr>
<tr class="even">
<td class="team_a">Hertha Berlin</td>
<td class="time">20:30</td>
<td class="team_b"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/wolfsburg.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/wolfsburg.png" alt="" /></noscript></span>Wolfsburg</td>
</tr>
<tr class="odd">
<td class="team_a">SC Freiburg <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/sc_freiburg.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/sc_freiburg.png" alt="" /></noscript></span></td>
<td class="time">20:30</td>
<td class="team_b"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/borussia_dortmund.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/borussia_dortmund.png" alt="" /></noscript></span>Borussia Dortmund</td>
</tr>
<tr class="even">
<td class="team_a">Eintracht Frankfurt <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/eintracht_frankfurt.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/eintracht_frankfurt.png" alt="" /></noscript></span></td>
<td class="time">20:30</td>
<td class="team_b">Augsburg 1907</td>
</tr>
<tr class="odd">
<td class="team_a">Bayer 04 Leverkusen</td>
<td class="time">23:30</td>
<td class="team_b">Borussia MÃ¶nchengladbach</td>
</tr>
<tr class="date"><td class="date" colspan="3">22/08/2021</td></tr>
<tr class="even">
<td class="team_a">TSG 1899 Hoffenheim</td>
<td class="time">20:30</td>
<td class="team_b"> <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/union_berlin.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/union_berlin.png" alt="" /></noscript></span>Union Berlin</td>
</tr>
<tr class="odd">
<td class="team_a">Bayern Munich</td>
<td class="time">22:30</td>
<td class="team_b">FC Cologne</td>
</tr>
<tr class="date"><td class="date" colspan="3">28/08/2021</td></tr>
<tr class="even">
<td class="team_a">Borussia Dortmund <span class="links"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" data-lazy-src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/borussia_dortmund.png" /><noscript><img src="https://cauthu.com.vn/wp-content/plugins/soccer-info/img/soccer-icons/borussia_dortmund.png" alt="" /></noscript></span></td>
<td class="time">01:30</td>
<td class="team_b">TSG 1899 Hoffenheim</td>
</tr>
</tbody>
</table>
</div></p>
			</div>
		</div>
			<div class="sow-tabs-panel">
			<div class="sow-tabs-panel-content" role="tabpanel" aria-hidden="true">
				<p><div style="width:100%;" class="sifixtures "><table id="sitafire1504631355">
<tbody>
<tr class="date"><td class="date" colspan="3">07/08/2021</td></tr>
<tr class="even">
<td class="team_a">Sporting Lisbon</td>
<td class="time">02:15</td>
<td class="team_b">Vizela</td>
</tr>
<tr class="odd">
<td class="team_a">Arouca</td>
<td class="time">21:30</td>
<td class="team_b">Estoril</td>
</tr>
<tr class="date"><td class="date" colspan="3">08/08/2021</td></tr>
<tr class="even">
<td class="team_a">Moreirense</td>
<td class="time">00:00</td>
<td class="team_b">Benfica</td>
</tr>
<tr class="odd">
<td class="team_a">MarÃ­timo</td>
<td class="time">02:30</td>
<td class="team_b">SC Braga</td>
</tr>
<tr class="even">
<td class="team_a">Vitoria Guimaraes</td>
<td class="time">21:30</td>
<td class="team_b">Portimonense</td>
</tr>
<tr class="odd">
<td class="team_a">Tondela</td>
<td class="time">21:30</td>
<td class="team_b">Santa Clara</td>
</tr>
<tr class="date"><td class="date" colspan="3">09/08/2021</td></tr>
<tr class="even">
<td class="team_a">Porto</td>
<td class="time">00:00</td>
<td class="team_b">Belenenses</td>
</tr>
<tr class="odd">
<td class="team_a">PaÃ§os Ferreira</td>
<td class="time">02:30</td>
<td class="team_b">FamalicÃ£o</td>
</tr>
<tr class="date"><td class="date" colspan="3">10/08/2021</td></tr>
<tr class="even">
<td class="team_a">Gil Vicente</td>
<td class="time">02:15</td>
<td class="team_b">Boavista</td>
</tr>
<tr class="date"><td class="date" colspan="3">14/08/2021</td></tr>
<tr class="odd">
<td class="team_a">Boavista</td>
<td class="time">07:00</td>
<td class="team_b">PaÃ§os Ferreira</td>
</tr>
<tr class="even">
<td class="team_a">Vizela</td>
<td class="time">07:00</td>
<td class="team_b">Tondela</td>
</tr>
<tr class="odd">
<td class="team_a">Estoril</td>
<td class="time">07:00</td>
<td class="team_b">Vitoria Guimaraes</td>
</tr>
<tr class="even">
<td class="team_a">Portimonense</td>
<td class="time">07:00</td>
<td class="team_b">Gil Vicente</td>
</tr>
<tr class="odd">
<td class="team_a">Santa Clara</td>
<td class="time">07:00</td>
<td class="team_b">Moreirense</td>
</tr>
<tr class="even">
<td class="team_a">Belenenses</td>
<td class="time">07:00</td>
<td class="team_b">MarÃ­timo</td>
</tr>
<tr class="odd">
<td class="team_a">FamalicÃ£o</td>
<td class="time">07:00</td>
<td class="team_b">Porto</td>
</tr>
<tr class="even">
<td class="team_a">SC Braga</td>
<td class="time">07:00</td>
<td class="team_b">Sporting Lisbon</td>
</tr>
<tr class="odd">
<td class="team_a">Benfica</td>
<td class="time">07:00</td>
<td class="team_b">Arouca</td>
</tr>
</tbody>
</table>
</div></p>
			</div>
		</div>
			<div class="sow-tabs-panel">
			<div class="sow-tabs-panel-content" role="tabpanel" aria-hidden="true">
				<p><div style="width:100%;" class="sifixtures "><table id="sitafire2094347365">
<tbody>
<tr class="date"><td class="date" colspan="3">21/08/2021</td></tr>
<tr class="even">
<td class="team_a">Verona</td>
<td class="time">23:30</td>
<td class="team_b">Sassuolo</td>
</tr>
<tr class="odd">
<td class="team_a">Inter Milan</td>
<td class="time">23:30</td>
<td class="team_b">Genoa</td>
</tr>
<tr class="date"><td class="date" colspan="3">22/08/2021</td></tr>
<tr class="even">
<td class="team_a">Empoli</td>
<td class="time">01:45</td>
<td class="team_b">Lazio</td>
</tr>
<tr class="odd">
<td class="team_a">Torino</td>
<td class="time">01:45</td>
<td class="team_b">Atalanta</td>
</tr>
<tr class="even">
<td class="team_a">Bologna</td>
<td class="time">23:30</td>
<td class="team_b">Salernitana</td>
</tr>
<tr class="odd">
<td class="team_a">Udinese</td>
<td class="time">23:30</td>
<td class="team_b">Juventus</td>
</tr>
<tr class="date"><td class="date" colspan="3">23/08/2021</td></tr>
<tr class="even">
<td class="team_a">SSC Napoli</td>
<td class="time">01:45</td>
<td class="team_b">Venezia</td>
</tr>
<tr class="odd">
<td class="team_a">Roma</td>
<td class="time">01:45</td>
<td class="team_b">Fiorentina</td>
</tr>
<tr class="even">
<td class="team_a">Cagliari</td>
<td class="time">23:30</td>
<td class="team_b">Spezia</td>
</tr>
<tr class="date"><td class="date" colspan="3">24/08/2021</td></tr>
<tr class="odd">
<td class="team_a">Sampdoria</td>
<td class="time">01:45</td>
<td class="team_b">AC Milan</td>
</tr>
<tr class="date"><td class="date" colspan="3">27/08/2021</td></tr>
<tr class="even">
<td class="team_a">Udinese</td>
<td class="time">23:30</td>
<td class="team_b">Venezia</td>
</tr>
<tr class="date"><td class="date" colspan="3">28/08/2021</td></tr>
<tr class="odd">
<td class="team_a">Verona</td>
<td class="time">01:45</td>
<td class="team_b">Inter Milan</td>
</tr>
<tr class="even">
<td class="team_a">Atalanta</td>
<td class="time">23:30</td>
<td class="team_b">Bologna</td>
</tr>
<tr class="odd">
<td class="team_a">Lazio</td>
<td class="time">23:30</td>
<td class="team_b">Spezia</td>
</tr>
<tr class="date"><td class="date" colspan="3">29/08/2021</td></tr>
<tr class="even">
<td class="team_a">Fiorentina</td>
<td class="time">01:45</td>
<td class="team_b">Torino</td>
</tr>
<tr class="odd">
<td class="team_a">Juventus</td>
<td class="time">01:45</td>
<td class="team_b">Empoli</td>
</tr>
<tr class="even">
<td class="team_a">Genoa</td>
<td class="time">23:30</td>
<td class="team_b">SSC Napoli</td>
</tr>
<tr class="odd">
<td class="team_a">Sassuolo</td>
<td class="time">23:30</td>
<td class="team_b">Sampdoria</td>
</tr>
<tr class="date"><td class="date" colspan="3">30/08/2021</td></tr>
<tr class="even">
<td class="team_a">AC Milan</td>
<td class="time">01:45</td>
<td class="team_b">Cagliari</td>
</tr>
<tr class="odd">
<td class="team_a">Salernitana</td>
<td class="time">01:45</td>
<td class="team_b">Roma</td>
</tr>
</tbody>
</table>
</div></p>
			</div>
		</div>
		</div>
</div>
</div></div></div><div id="pgc-134-4-2"  class="panel-grid-cell" ><div id="panel-134-4-2-0" class="so-panel widget widget_sow-tabs panel-first-child panel-last-child" data-index="9" ><div class="so-widget-sow-tabs so-widget-sow-tabs-default-02e4508ec074-134"><h3 class="widget-title">Top ghi bÃ n</h3><div class="sow-tabs">
	<div class="sow-tabs-tab-container" role="tablist">
			<div class="sow-tabs-tab sow-tabs-tab-selected"
			 role="tab" data-anchor="epl"
			 aria-selected="true" tabindex="0">
			<div class="sow-tabs-title sow-tabs-title-icon-left">
								EPL							</div>
		</div>
			<div class="sow-tabs-tab"
			 role="tab" data-anchor="la-liga"
			 aria-selected="false" tabindex="-1">
			<div class="sow-tabs-title sow-tabs-title-icon-left">
								La Liga							</div>
		</div>
			<div class="sow-tabs-tab"
			 role="tab" data-anchor="bundesliga"
			 aria-selected="false" tabindex="-1">
			<div class="sow-tabs-title sow-tabs-title-icon-left">
								Bundesliga							</div>
		</div>
			<div class="sow-tabs-tab"
			 role="tab" data-anchor="serie-a"
			 aria-selected="false" tabindex="-1">
			<div class="sow-tabs-title sow-tabs-title-icon-left">
								Serie A							</div>
		</div>
			<div class="sow-tabs-tab"
			 role="tab" data-anchor="ligue-1"
			 aria-selected="false" tabindex="-1">
			<div class="sow-tabs-title sow-tabs-title-icon-left">
								Ligue 1							</div>
		</div>
		</div>
	
	<div class="sow-tabs-panel-container">
			<div class="sow-tabs-panel">
			<div class="sow-tabs-panel-content" role="tabpanel" tabindex="0">
				<p><div style="width:100%;" class="siresults "><table id="sitafire1606396314">
<tbody>
</tbody>
</table>
</div></p>
			</div>
		</div>
			<div class="sow-tabs-panel">
			<div class="sow-tabs-panel-content" role="tabpanel" aria-hidden="true">
				<p><div style="width:100%;" class="siresults "><table id="sitafire720836571">
<tbody>
</tbody>
</table>
</div></p>
			</div>
		</div>
			<div class="sow-tabs-panel">
			<div class="sow-tabs-panel-content" role="tabpanel" aria-hidden="true">
				<p><div style="width:100%;" class="siresults "><table id="sitafire1583411880">
<tbody>
</tbody>
</table>
</div></p>
			</div>
		</div>
			<div class="sow-tabs-panel">
			<div class="sow-tabs-panel-content" role="tabpanel" aria-hidden="true">
				<p><div style="width:100%;" class="siresults "><table id="sitafire1704545703">
<tbody>
</tbody>
</table>
</div></p>
			</div>
		</div>
			<div class="sow-tabs-panel">
			<div class="sow-tabs-panel-content" role="tabpanel" aria-hidden="true">
				<p><div style="width:100%;" class="siresults "><table id="sitafire135155780">
<tbody>
</tbody>
</table>
</div></p>
			</div>
		</div>
		</div>
</div>
</div></div></div></div></div><div id="pg-134-5"  class="panel-grid panel-has-style" ><div class="panel-row-style panel-row-style-for-134-5" ><div id="pgc-134-5-0"  class="panel-grid-cell" ><div id="panel-134-5-0-0" class="widget_text so-panel widget widget_custom_html panel-first-child panel-last-child" data-index="10" ><div class="widget_text video-cau-thu panel-widget-style panel-widget-style-for-134-5-0-0" ><h3 class="widget-title"><span class="title-bg">Video</span></h3><div class="textwidget custom-html-widget"><div class="gallery-precon gp1" style="width:100%;height:auto;"><div class="videogallery-con" style="width:100%;"> <div class="dzsvg-preloader loader-container ball-pulse"> <div class="loader"> <div class="line-1"></div> <div class="line-2"></div> <div class="line-3"></div> <div class="line-4"></div> <div class="line-5"></div> </div> </div><div class="vg1 transition-fade dzsvg-videogallery videogallery videogallery-1 auto-init id_video-cauthu skin-boxy navigation-skin--skin-boxy"  id="video-cauthu"  data-dzsvg-gallery-id="video-cauthu"  data-options='{"settings_menu_overlay":"on","nav_type":"scroller","menuitem_width":"275","menuitem_height":"100","menuitem_space":"","nav_type_outer_grid":"default","transition_type":"fade","design_skin":"skin-boxy","design_navigationUseEasing":"on","settings_enable_linking":"on","search_field":"on","videoplayersettings":"skinauroradefault"}'    style="background-color:;  height:300px; "><div class="items"><div   class="vp1 vplayer-tobe " data-player-id="362731" data-videoTitle="MARCUS RASHFORD THUYáº¾T PHá»¤C POGBA á» Láº I MANCHESTER UNITED" data-type="youtube" data-sourcevp="https://www.youtube.com/watch?v=VUyYeqBqCHQ"><div class="videoDescription feed-dzsvg description-from-parse_items">content here</div><div class="menuDescription from-parse-items"><div data-imgsrc="//img.youtube.com/vi/VUyYeqBqCHQ/0.jpg"   class="divimage imgblock"></div><div class="dzs-navigation--item--title-and-meta"><div class="the-title from-parse-items">MARCUS RASHFORD THUYáº¾T PHá»¤C POGBA á» Láº I MANCHESTER UNITED</div><div class="paragraph from-menu-desc-parse-items">content here</div></div><!-- end .title-and-meta --></div></div><div   class="vp2 vplayer-tobe " data-player-id="362531" data-videoTitle="JOHN TERRY QUYáº¾T Äá»NH Tá»ª CHá»¨C TRá»¢ L&Yacute; HLV Cá»¦A ASTON VILLA" data-type="youtube" data-sourcevp="https://www.youtube.com/watch?v=cNvzscyvaPQ"><div class="videoDescription feed-dzsvg description-from-parse_items">content here</div><div class="menuDescription from-parse-items"><div data-imgsrc="//img.youtube.com/vi/cNvzscyvaPQ/0.jpg"   class="divimage imgblock"></div><div class="dzs-navigation--item--title-and-meta"><div class="the-title from-parse-items">JOHN TERRY QUYáº¾T Äá»NH Tá»ª CHá»¨C TRá»¢ LÃ HLV Cá»¦A ASTON VILLA</div><div class="paragraph from-menu-desc-parse-items">content here</div></div><!-- end .title-and-meta --></div></div><div   class="vp3 vplayer-tobe " data-player-id="362362" data-videoTitle="9 CLB KH&Ocirc;NG Äá»NG &Yacute; L&Ugrave;I V.LEAGUE 2021 SANG NÄM 2022" data-type="youtube" data-sourcevp="https://www.youtube.com/watch?v=SattPHjqf2c"><div class="videoDescription feed-dzsvg description-from-parse_items">content here</div><div class="menuDescription from-parse-items"><div data-imgsrc="//img.youtube.com/vi/SattPHjqf2c/0.jpg"   class="divimage imgblock"></div><div class="dzs-navigation--item--title-and-meta"><div class="the-title from-parse-items">9 CLB KHÃNG Äá»NG Ã LÃI V.LEAGUE 2021 SANG NÄM 2022</div><div class="paragraph from-menu-desc-parse-items">content here</div></div><!-- end .title-and-meta --></div></div><div   class="vp4 vplayer-tobe " data-player-id="362297" data-videoTitle="TOTTENHAM V&Agrave; SON HEUNG MIN Äáº T ÄÆ¯á»¢C THá»A THUáº¬N GIA Háº N HÄ TH&Ecirc;M 4 NÄM" data-type="youtube" data-sourcevp="https://www.youtube.com/watch?v=8wxUcZIujYQ"><div class="videoDescription feed-dzsvg description-from-parse_items">content here</div><div class="menuDescription from-parse-items"><div data-imgsrc="//img.youtube.com/vi/8wxUcZIujYQ/0.jpg"   class="divimage imgblock"></div><div class="dzs-navigation--item--title-and-meta"><div class="the-title from-parse-items">TOTTENHAM VÃ SON HEUNG MIN Äáº T ÄÆ¯á»¢C THá»A THUáº¬N GIA Háº N HÄ THÃM 4 NÄM</div><div class="paragraph from-menu-desc-parse-items">content here</div></div><!-- end .title-and-meta --></div></div><div   class="vp5 vplayer-tobe " data-player-id="362096" data-videoTitle="THUA KH&Ocirc;NG PHá»¤C, Cáº¦U THá»¦ BOCA JUNIORS LAO V&Agrave;O Táº¨N TRá»NG T&Agrave;I &amp; Cáº¢NH S&Aacute;T" data-sourcevp="https://www.youtube.com/watch?v=HxfAH07nYmo"><div class="videoDescription feed-dzsvg description-from-parse_items">content here</div><div class="menuDescription from-parse-items"><div data-imgsrc="//img.youtube.com/vi/HxfAH07nYmo/0.jpg"   class="divimage imgblock"></div><div class="dzs-navigation--item--title-and-meta"><div class="the-title from-parse-items">THUA KHÃNG PHá»¤C, Cáº¦U THá»¦ BOCA JUNIORS LAO VÃO Táº¨N TRá»NG TÃI & Cáº¢NH SÃT</div><div class="paragraph from-menu-desc-parse-items">content here</div></div><!-- end .title-and-meta --></div></div><div   class="vp6 vplayer-tobe " data-player-id="362149" data-videoTitle="CHIáº¾C &Aacute;O Sá» 4 RAMOS Äá» Láº I Ä&Atilde; C&Oacute; CHá»¦ NH&Acirc;N Má»I" data-type="youtube" data-sourcevp="https://www.youtube.com/watch?v=caYLP8SijHE"><div class="videoDescription feed-dzsvg description-from-parse_items">content here</div><div class="menuDescription from-parse-items"><div data-imgsrc="//img.youtube.com/vi/caYLP8SijHE/0.jpg"   class="divimage imgblock"></div><div class="dzs-navigation--item--title-and-meta"><div class="the-title from-parse-items">CHIáº¾C ÃO Sá» 4 RAMOS Äá» Láº I ÄÃ CÃ CHá»¦ NHÃN Má»I</div><div class="paragraph from-menu-desc-parse-items">content here</div></div><!-- end .title-and-meta --></div></div><div   class="vp7 vplayer-tobe " data-player-id="361908" data-videoTitle="TUáº¤N ANH B&Igrave;NH PHá»¤C CHáº¤N THÆ¯Æ NG, Sáº´N S&Agrave;NG T&Aacute;I XUáº¤T" data-type="youtube" data-sourcevp="https://www.youtube.com/watch?v=0ekVSgN3uwU"><div class="videoDescription feed-dzsvg description-from-parse_items">content here</div><div class="menuDescription from-parse-items"><div data-imgsrc="//img.youtube.com/vi/0ekVSgN3uwU/0.jpg"   class="divimage imgblock"></div><div class="dzs-navigation--item--title-and-meta"><div class="the-title from-parse-items">TUáº¤N ANH BÃNH PHá»¤C CHáº¤N THÆ¯Æ NG, Sáº´N SÃNG TÃI XUáº¤T</div><div class="paragraph from-menu-desc-parse-items">content here</div></div><!-- end .title-and-meta --></div></div><div   class="vp8 vplayer-tobe " data-player-id="361838" data-videoTitle="AC MILAN MUA NH&Agrave; V&Ocirc; Äá»CH CH&Acirc;U &Acirc;U | MESSI C&Oacute; Ká»² NGHá» &amp;#8221;KH&Ocirc;NG THOáº¢I M&Aacute;I&amp;#8221;" data-type="youtube" data-sourcevp="https://www.youtube.com/watch?v=8TsK_tqdYVY"><div class="videoDescription feed-dzsvg description-from-parse_items">content here</div><div class="menuDescription from-parse-items"><div data-imgsrc="//img.youtube.com/vi/8TsK_tqdYVY/0.jpg"   class="divimage imgblock"></div><div class="dzs-navigation--item--title-and-meta"><div class="the-title from-parse-items">AC MILAN MUA NHÃ VÃ Äá»CH CHÃU ÃU | MESSI CÃ Ká»² NGHá» &#8221;KHÃNG THOáº¢I MÃI&#8221;</div><div class="paragraph from-menu-desc-parse-items">content here</div></div><!-- end .title-and-meta --></div></div></div><!-- end .items--></div></div><div class="clear"></div></div>30</div></div></div></div></div></div><div id="pg-134-6"  class="panel-grid panel-has-style" ><div class="panel-row-style panel-row-style-for-134-6" ><div id="pgc-134-6-0"  class="panel-grid-cell" ><div id="panel-134-6-0-0" class="so-panel widget widget_vmagazine_block_grid_list vmagazine_block_grid_list panel-first-child panel-last-child" data-index="11">    <div class="vmagazine-grid-list-wrapp grid no-desc">
        <div class="block-header clearfix">
            <h4 class="block-title"><span class="title-bg">
ThÃ­ch mÃª    </span></h4>
    </div><!-- .block-header-->
            <div class="vmagazine-grid-list block-post-wrapper grid">
            
            <div class="posts-wrap">
                                        <div class="single-post first-post clearfix wow fadeInUp" data-wow-duration="0.7s">
                            <div class="post-thumb">
                                <a class="thumb-zoom" href="https://cauthu.com.vn/tai-va-dung-thu-windows-11-ngay-bay-gio.html" title="Táº£i vÃ  dÃ¹ng thá»­ Windows 11 ngay bÃ¢y giá»">
                                            <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="Táº£i vÃ  dÃ¹ng thá»­ Windows 11 ngay bÃ¢y giá»" title="Táº£i vÃ  dÃ¹ng thá»­ Windows 11 ngay bÃ¢y giá»" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/08/11-510x369.jpg" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/08/11-510x369.jpg" alt="Táº£i vÃ  dÃ¹ng thá»­ Windows 11 ngay bÃ¢y giá»" title="Táº£i vÃ  dÃ¹ng thá»­ Windows 11 ngay bÃ¢y giá»" /></noscript>
                                            <div class="image-overlay"></div>
                                </a>
                                                            </div><!-- .post-thumb -->
                            <div class="post-content-wrapper clearfix">
                                                                <div class="post-meta clearfix">
                                   <span class="posted-on"><i class="fa fa-clock-o"></i>03/08/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>0</span>                                </div><!-- .post-meta --> 
                                                               
                                <h3 class="large-font">
                                    <a href="https://cauthu.com.vn/tai-va-dung-thu-windows-11-ngay-bay-gio.html">
                                        Táº£i vÃ  dÃ¹ng thá»­ Windows 11 ngay bÃ¢y giá»                                    </a>
                                </h3>
                                
                                
                            </div><!-- .post-content-wrapper -->
                        </div><!-- .single-post  -->
                                                <div class="single-post  clearfix wow fadeInUp" data-wow-duration="0.7s">
                            <div class="post-thumb">
                                <a class="thumb-zoom" href="https://cauthu.com.vn/con-nguoi-trong-tuong-lai-se-song-duoi-dat-giong-chuot-chui.html" title="Con ngÆ°á»i trong tÆ°Æ¡ng lai sáº½ sá»ng dÆ°á»i Äáº¥t giá»ng chuá»t chÅ©i?">
                                            <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="Con ngÆ°á»i trong tÆ°Æ¡ng lai sáº½ sá»ng dÆ°á»i Äáº¥t giá»ng chuá»t chÅ©i?" title="Con ngÆ°á»i trong tÆ°Æ¡ng lai sáº½ sá»ng dÆ°á»i Äáº¥t giá»ng chuá»t chÅ©i?" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/08/2-320x224.jpg" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/08/2-320x224.jpg" alt="Con ngÆ°á»i trong tÆ°Æ¡ng lai sáº½ sá»ng dÆ°á»i Äáº¥t giá»ng chuá»t chÅ©i?" title="Con ngÆ°á»i trong tÆ°Æ¡ng lai sáº½ sá»ng dÆ°á»i Äáº¥t giá»ng chuá»t chÅ©i?" /></noscript>
                                            <div class="image-overlay"></div>
                                </a>
                                                            </div><!-- .post-thumb -->
                            <div class="post-content-wrapper clearfix">
                                                                <div class="post-meta clearfix">
                                   <span class="posted-on"><i class="fa fa-clock-o"></i>03/08/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>3</span>                                </div><!-- .post-meta --> 
                                                               
                                <h3 class="large-font">
                                    <a href="https://cauthu.com.vn/con-nguoi-trong-tuong-lai-se-song-duoi-dat-giong-chuot-chui.html">
                                        Con ngÆ°á»i trong tÆ°Æ¡ng lai sáº½ sá»ng dÆ°á»i Äáº¥t giá»ng chuá»t chÅ©i?                                    </a>
                                </h3>
                                
                                
                            </div><!-- .post-content-wrapper -->
                        </div><!-- .single-post  -->
                                                <div class="single-post  clearfix wow fadeInUp" data-wow-duration="0.7s">
                            <div class="post-thumb">
                                <a class="thumb-zoom" href="https://cauthu.com.vn/facebook-danh-sap-website-cua-nhan-vien-cu-vi-dam-boc-phot-cong-ty.html" title="Facebook ÄÃ¡nh sáº­p website cá»§a nhÃ¢n viÃªn cÅ© vÃ¬ dÃ¡m bÃ³c phá»t cÃ´ng ty">
                                            <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="Facebook ÄÃ¡nh sáº­p website cá»§a nhÃ¢n viÃªn cÅ© vÃ¬ dÃ¡m bÃ³c phá»t cÃ´ng ty" title="Facebook ÄÃ¡nh sáº­p website cá»§a nhÃ¢n viÃªn cÅ© vÃ¬ dÃ¡m bÃ³c phá»t cÃ´ng ty" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/07/mark-320x224.jpg" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/07/mark-320x224.jpg" alt="Facebook ÄÃ¡nh sáº­p website cá»§a nhÃ¢n viÃªn cÅ© vÃ¬ dÃ¡m bÃ³c phá»t cÃ´ng ty" title="Facebook ÄÃ¡nh sáº­p website cá»§a nhÃ¢n viÃªn cÅ© vÃ¬ dÃ¡m bÃ³c phá»t cÃ´ng ty" /></noscript>
                                            <div class="image-overlay"></div>
                                </a>
                                                            </div><!-- .post-thumb -->
                            <div class="post-content-wrapper clearfix">
                                                                <div class="post-meta clearfix">
                                   <span class="posted-on"><i class="fa fa-clock-o"></i>31/07/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>21</span>                                </div><!-- .post-meta --> 
                                                               
                                <h3 class="large-font">
                                    <a href="https://cauthu.com.vn/facebook-danh-sap-website-cua-nhan-vien-cu-vi-dam-boc-phot-cong-ty.html">
                                        Facebook ÄÃ¡nh sáº­p website cá»§a nhÃ¢n viÃªn cÅ© vÃ¬ dÃ¡m bÃ³c phá»t cÃ´ng ty                                    </a>
                                </h3>
                                
                                
                            </div><!-- .post-content-wrapper -->
                        </div><!-- .single-post  -->
                                                <div class="single-post  clearfix wow fadeInUp" data-wow-duration="0.7s">
                            <div class="post-thumb">
                                <a class="thumb-zoom" href="https://cauthu.com.vn/muon-chup-man-hinh-doan-chat-nhung-luoi-chup-nhieu-hinh-chi-chup-mot-anh-dai-duy-nhat-bang-cach-nay.html" title="Muá»n chá»¥p mÃ n hÃ¬nh Äoáº¡n chat nhÆ°ng lÆ°á»i chá»¥p nhiá»u hÃ¬nh? Chá» chá»¥p má»t áº£nh dÃ i duy nháº¥t báº±ng cÃ¡ch nÃ y">
                                            <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="Muá»n chá»¥p mÃ n hÃ¬nh Äoáº¡n chat nhÆ°ng lÆ°á»i chá»¥p nhiá»u hÃ¬nh? Chá» chá»¥p má»t áº£nh dÃ i duy nháº¥t báº±ng cÃ¡ch nÃ y" title="Muá»n chá»¥p mÃ n hÃ¬nh Äoáº¡n chat nhÆ°ng lÆ°á»i chá»¥p nhiá»u hÃ¬nh? Chá» chá»¥p má»t áº£nh dÃ i duy nháº¥t báº±ng cÃ¡ch nÃ y" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/07/c1-1-320x224.jpg" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/07/c1-1-320x224.jpg" alt="Muá»n chá»¥p mÃ n hÃ¬nh Äoáº¡n chat nhÆ°ng lÆ°á»i chá»¥p nhiá»u hÃ¬nh? Chá» chá»¥p má»t áº£nh dÃ i duy nháº¥t báº±ng cÃ¡ch nÃ y" title="Muá»n chá»¥p mÃ n hÃ¬nh Äoáº¡n chat nhÆ°ng lÆ°á»i chá»¥p nhiá»u hÃ¬nh? Chá» chá»¥p má»t áº£nh dÃ i duy nháº¥t báº±ng cÃ¡ch nÃ y" /></noscript>
                                            <div class="image-overlay"></div>
                                </a>
                                                            </div><!-- .post-thumb -->
                            <div class="post-content-wrapper clearfix">
                                                                <div class="post-meta clearfix">
                                   <span class="posted-on"><i class="fa fa-clock-o"></i>30/07/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>22</span>                                </div><!-- .post-meta --> 
                                                               
                                <h3 class="large-font">
                                    <a href="https://cauthu.com.vn/muon-chup-man-hinh-doan-chat-nhung-luoi-chup-nhieu-hinh-chi-chup-mot-anh-dai-duy-nhat-bang-cach-nay.html">
                                        Muá»n chá»¥p mÃ n hÃ¬nh Äoáº¡n chat nhÆ°ng lÆ°á»i chá»¥p nhiá»u hÃ¬nh? Chá» chá»¥p má»t áº£nh dÃ i duy nháº¥t báº±ng cÃ¡ch nÃ y                                    </a>
                                </h3>
                                
                                
                            </div><!-- .post-content-wrapper -->
                        </div><!-- .single-post  -->
                                    </div>
                            
            
        </div><!-- .block-post-wrapper -->
    </div>
    </div></div><div id="pgc-134-6-1"  class="panel-grid-cell" ><div id="panel-134-6-1-0" class="so-panel widget widget_vmagazine_block_grid_list vmagazine_block_grid_list panel-first-child panel-last-child" data-index="12">    <div class="vmagazine-grid-list-wrapp grid no-desc">
        <div class="block-header clearfix">
            <h4 class="block-title"><span class="title-bg">
Háº­u trÆ°á»ng    </span></h4>
    </div><!-- .block-header-->
            <div class="vmagazine-grid-list block-post-wrapper grid">
            
            <div class="posts-wrap">
                                        <div class="single-post first-post clearfix wow fadeInUp" data-wow-duration="0.7s">
                            <div class="post-thumb">
                                <a class="thumb-zoom" href="https://cauthu.com.vn/tan-binh-tuyen-viet-nam-cam-thay-ao-khi-duoc-hoi-quan-cung-dan-anh-hagl.html" title="TÃ¢n binh tuyá»n Viá»t Nam cáº£m tháº¥y &#8216;áº£o&#8217; khi ÄÆ°á»£c há»i quÃ¢n cÃ¹ng ÄÃ n anh HAGL">
                                            <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="TÃ¢n binh tuyá»n Viá»t Nam cáº£m tháº¥y &#8216;áº£o&#8217; khi ÄÆ°á»£c há»i quÃ¢n cÃ¹ng ÄÃ n anh HAGL" title="TÃ¢n binh tuyá»n Viá»t Nam cáº£m tháº¥y &#8216;áº£o&#8217; khi ÄÆ°á»£c há»i quÃ¢n cÃ¹ng ÄÃ n anh HAGL" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/08/img-5649_lemt-510x369.jpeg" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/08/img-5649_lemt-510x369.jpeg" alt="TÃ¢n binh tuyá»n Viá»t Nam cáº£m tháº¥y &#8216;áº£o&#8217; khi ÄÆ°á»£c há»i quÃ¢n cÃ¹ng ÄÃ n anh HAGL" title="TÃ¢n binh tuyá»n Viá»t Nam cáº£m tháº¥y &#8216;áº£o&#8217; khi ÄÆ°á»£c há»i quÃ¢n cÃ¹ng ÄÃ n anh HAGL" /></noscript>
                                            <div class="image-overlay"></div>
                                </a>
                                                            </div><!-- .post-thumb -->
                            <div class="post-content-wrapper clearfix">
                                                                <div class="post-meta clearfix">
                                   <span class="posted-on"><i class="fa fa-clock-o"></i>01/08/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>592</span>                                </div><!-- .post-meta --> 
                                                               
                                <h3 class="large-font">
                                    <a href="https://cauthu.com.vn/tan-binh-tuyen-viet-nam-cam-thay-ao-khi-duoc-hoi-quan-cung-dan-anh-hagl.html">
                                        TÃ¢n binh tuyá»n Viá»t Nam cáº£m tháº¥y &#8216;áº£o&#8217; khi ÄÆ°á»£c há»i quÃ¢n cÃ¹ng ÄÃ n anh HAGL                                    </a>
                                </h3>
                                
                                
                            </div><!-- .post-content-wrapper -->
                        </div><!-- .single-post  -->
                                                <div class="single-post  clearfix wow fadeInUp" data-wow-duration="0.7s">
                            <div class="post-thumb">
                                <a class="thumb-zoom" href="https://cauthu.com.vn/mourinho-fortnite-la-tua-game-quai-quy.html" title="Mourinho: &#8220;Fortnite lÃ  tá»±a game quÃ¡i quá»·&#8221;">
                                            <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="Mourinho: &#8220;Fortnite lÃ  tá»±a game quÃ¡i quá»·&#8221;" title="Mourinho: &#8220;Fortnite lÃ  tá»±a game quÃ¡i quá»·&#8221;" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/08/Jose-Mourinho-725x408-1-320x224.jpeg" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/08/Jose-Mourinho-725x408-1-320x224.jpeg" alt="Mourinho: &#8220;Fortnite lÃ  tá»±a game quÃ¡i quá»·&#8221;" title="Mourinho: &#8220;Fortnite lÃ  tá»±a game quÃ¡i quá»·&#8221;" /></noscript>
                                            <div class="image-overlay"></div>
                                </a>
                                                            </div><!-- .post-thumb -->
                            <div class="post-content-wrapper clearfix">
                                                                <div class="post-meta clearfix">
                                   <span class="posted-on"><i class="fa fa-clock-o"></i>01/08/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>44</span>                                </div><!-- .post-meta --> 
                                                               
                                <h3 class="large-font">
                                    <a href="https://cauthu.com.vn/mourinho-fortnite-la-tua-game-quai-quy.html">
                                        Mourinho: &#8220;Fortnite lÃ  tá»±a game quÃ¡i quá»·&#8221;                                    </a>
                                </h3>
                                
                                
                            </div><!-- .post-content-wrapper -->
                        </div><!-- .single-post  -->
                                                <div class="single-post  clearfix wow fadeInUp" data-wow-duration="0.7s">
                            <div class="post-thumb">
                                <a class="thumb-zoom" href="https://cauthu.com.vn/vo-cua-verratti-nong-bong-tren-bai-bien.html" title="Vá»£ cá»§a Verratti nÃ³ng bá»ng trÃªn bÃ£i biá»n">
                                            <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="Vá»£ cá»§a Verratti nÃ³ng bá»ng trÃªn bÃ£i biá»n" title="Vá»£ cá»§a Verratti nÃ³ng bá»ng trÃªn bÃ£i biá»n" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/08/270ac9f649-320x224.jpeg" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/08/270ac9f649-320x224.jpeg" alt="Vá»£ cá»§a Verratti nÃ³ng bá»ng trÃªn bÃ£i biá»n" title="Vá»£ cá»§a Verratti nÃ³ng bá»ng trÃªn bÃ£i biá»n" /></noscript>
                                            <div class="image-overlay"></div>
                                </a>
                                                            </div><!-- .post-thumb -->
                            <div class="post-content-wrapper clearfix">
                                                                <div class="post-meta clearfix">
                                   <span class="posted-on"><i class="fa fa-clock-o"></i>01/08/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>42</span>                                </div><!-- .post-meta --> 
                                                               
                                <h3 class="large-font">
                                    <a href="https://cauthu.com.vn/vo-cua-verratti-nong-bong-tren-bai-bien.html">
                                        Vá»£ cá»§a Verratti nÃ³ng bá»ng trÃªn bÃ£i biá»n                                    </a>
                                </h3>
                                
                                
                            </div><!-- .post-content-wrapper -->
                        </div><!-- .single-post  -->
                                                <div class="single-post  clearfix wow fadeInUp" data-wow-duration="0.7s">
                            <div class="post-thumb">
                                <a class="thumb-zoom" href="https://cauthu.com.vn/hot-girl-le-phuong-anh-dang-cuc-noi-tren-mang-la-ai.html" title="Hot girl L.P.A Äang ráº¥t hot trÃªn máº¡ng lÃ  ai?">
                                            <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="Hot girl L.P.A Äang ráº¥t hot trÃªn máº¡ng lÃ  ai?" title="Hot girl L.P.A Äang ráº¥t hot trÃªn máº¡ng lÃ  ai?" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/08/le-phuong-anh-320x224.jpeg" /><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/08/le-phuong-anh-320x224.jpeg" alt="Hot girl L.P.A Äang ráº¥t hot trÃªn máº¡ng lÃ  ai?" title="Hot girl L.P.A Äang ráº¥t hot trÃªn máº¡ng lÃ  ai?" /></noscript>
                                            <div class="image-overlay"></div>
                                </a>
                                                            </div><!-- .post-thumb -->
                            <div class="post-content-wrapper clearfix">
                                                                <div class="post-meta clearfix">
                                   <span class="posted-on"><i class="fa fa-clock-o"></i>01/08/2021</span><span class="comments"><i class="fa fa-comments"></i>0</span><span class="post-view"><i class="fa fa-eye"></i>344</span>                                </div><!-- .post-meta --> 
                                                               
                                <h3 class="large-font">
                                    <a href="https://cauthu.com.vn/hot-girl-le-phuong-anh-dang-cuc-noi-tren-mang-la-ai.html">
                                        Hot girl L.P.A Äang ráº¥t hot trÃªn máº¡ng lÃ  ai?                                    </a>
                                </h3>
                                
                                
                            </div><!-- .post-content-wrapper -->
                        </div><!-- .single-post  -->
                                    </div>
                            
            
        </div><!-- .block-post-wrapper -->
    </div>
    </div></div><div id="pgc-134-6-2"  class="panel-grid-cell" ><div id="panel-134-6-2-0" class="so-panel widget widget_vmagazine_timeline_posts_list vmagazine_timeline_posts_list panel-first-child" data-index="13">        <div class="vmagazine-timeline-post block-post-wrapper wow fadeInUp" data-wow-duration="1s">
                <h4 class="block-title"><span class="title-bg">
Timeline    </span></h4>
                                    <div class="timeline-post-wrapper">
                                                    <div class="single-post">
                                <div class="post-date">
                                    <div class="blog-date"><div class="blog-date-inner"><span class="posted-day">3</span><span class="posted-month">Th8</span><span class="posted-year">2021</span></div></div>                                </div><!-- .post-thumb -->
                                <div class="post-caption clearfix">
                                    <div class="captions-wrapper">
                                        <h3 class="small-font">
                                            <a href="https://cauthu.com.vn/tai-va-dung-thu-windows-11-ngay-bay-gio.html">
                                               Táº£i vÃ  dÃ¹ng thá»­ Windows 11 ngay bÃ¢y giá»                                            </a>
                                        </h3>
                                        <div class="post-meta">
                                        <span class="comments-count"><i class="fa fa-comment-o"></i><a href="https://cauthu.com.vn/tai-va-dung-thu-windows-11-ngay-bay-gio.html#respond">0</a></span><span class="post-view"><i class="fa fa-eye"></i>0</span>   
                                        </div><!-- .post-meta -->
                                    </div>
                                </div><!-- .post-caption -->
                            </div><!-- .single-post -->
                                                        <div class="single-post">
                                <div class="post-date">
                                    <div class="blog-date"><div class="blog-date-inner"><span class="posted-day">3</span><span class="posted-month">Th8</span><span class="posted-year">2021</span></div></div>                                </div><!-- .post-thumb -->
                                <div class="post-caption clearfix">
                                    <div class="captions-wrapper">
                                        <h3 class="small-font">
                                            <a href="https://cauthu.com.vn/con-nguoi-trong-tuong-lai-se-song-duoi-dat-giong-chuot-chui.html">
                                               Con ngÆ°á»i trong tÆ°Æ¡ng lai sáº½ sá»ng dÆ°á»i Äáº¥t giá»ng chuá»t chÅ©i?                                            </a>
                                        </h3>
                                        <div class="post-meta">
                                        <span class="comments-count"><i class="fa fa-comment-o"></i><a href="https://cauthu.com.vn/con-nguoi-trong-tuong-lai-se-song-duoi-dat-giong-chuot-chui.html#respond">0</a></span><span class="post-view"><i class="fa fa-eye"></i>3</span>   
                                        </div><!-- .post-meta -->
                                    </div>
                                </div><!-- .post-caption -->
                            </div><!-- .single-post -->
                                                        <div class="single-post">
                                <div class="post-date">
                                    <div class="blog-date"><div class="blog-date-inner"><span class="posted-day">2</span><span class="posted-month">Th8</span><span class="posted-year">2021</span></div></div>                                </div><!-- .post-thumb -->
                                <div class="post-caption clearfix">
                                    <div class="captions-wrapper">
                                        <h3 class="small-font">
                                            <a href="https://cauthu.com.vn/trung-ve-ngoai-quoc-roi-viet-nam-chua-hen-ngay-tro-lai-hagl.html">
                                               Trung vá» ngoáº¡i quá»c rá»i Viá»t Nam, chÆ°a háº¹n ngÃ y trá» láº¡i HAGL                                            </a>
                                        </h3>
                                        <div class="post-meta">
                                        <span class="comments-count"><i class="fa fa-comment-o"></i><a href="https://cauthu.com.vn/trung-ve-ngoai-quoc-roi-viet-nam-chua-hen-ngay-tro-lai-hagl.html#respond">0</a></span><span class="post-view"><i class="fa fa-eye"></i>2</span>   
                                        </div><!-- .post-meta -->
                                    </div>
                                </div><!-- .post-caption -->
                            </div><!-- .single-post -->
                                                        <div class="single-post">
                                <div class="post-date">
                                    <div class="blog-date"><div class="blog-date-inner"><span class="posted-day">2</span><span class="posted-month">Th8</span><span class="posted-year">2021</span></div></div>                                </div><!-- .post-thumb -->
                                <div class="post-caption clearfix">
                                    <div class="captions-wrapper">
                                        <h3 class="small-font">
                                            <a href="https://cauthu.com.vn/ket-qua-boc-tham-vong-play-off-champions-league-2021-22.html">
                                               Káº¿t quáº£ bá»c thÄm vÃ²ng play-off Champions League 2021-22                                            </a>
                                        </h3>
                                        <div class="post-meta">
                                        <span class="comments-count"><i class="fa fa-comment-o"></i><a href="https://cauthu.com.vn/ket-qua-boc-tham-vong-play-off-champions-league-2021-22.html#respond">0</a></span><span class="post-view"><i class="fa fa-eye"></i>29</span>   
                                        </div><!-- .post-meta -->
                                    </div>
                                </div><!-- .post-caption -->
                            </div><!-- .single-post -->
                                                    </div>
                         </div><!-- .block-post-wrapper -->
    </div><div id="panel-134-6-2-1" class="so-panel widget" data-index="14" ></div><div id="panel-134-6-2-2" class="so-panel widget widget_sow-button panel-last-child" data-index="15" ><div class="so-widget-sow-button so-widget-sow-button-flat-e12998d5217a-134"><div class="ow-button-base ow-button-align-center">
	<a href="/dien-dan" class="ow-icon-placement-left ow-button-hover" target="_blank" rel="noopener noreferrer" 		>
		<span>
			
			Xem thÃªm		</span>
	</a>
</div>
</div></div></div></div></div></div>	
</div><!-- .vmagazine-home-wrapp -->
</div><!-- #content -->

			
		<footer id="colophon" class="site-footer footer-three">

									<div class="img-overlay"></div>
				<div class="buttom-footer footer_one">
			<div class="middle-footer-wrap">
			<div class="vmagazine-container">
				<div class="middle-ftr-wrap">
									     <div class="footer-logo-wrap">
	        			<a href="https://cauthu.com.vn/"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="Home" data-lazy-src="https://cauthu.com.vn/wp-content/uploads/2021/06/logo-trang.png"><noscript><img src="https://cauthu.com.vn/wp-content/uploads/2021/06/logo-trang.png" alt="Home"></noscript></a>
	        		</div>
				    				    <div class="footer-desc">
				    	<p>Giáº¥y phÃ©p MXH sá» 133/GP-BTTTT cáº¥p ngÃ y 04/04/2017</p>
<p>CÆ¡ quan cáº¥p phÃ©p: Bá» ThÃ´ng tin vÃ  Truyá»n thÃ´ng</p>
<a href="https://www.dmca.com/Protection/Status.aspx?ID=cb459a32-a519-4921-98ac-55337e393ef1&amp;refurl=https://cauthu.com.vn/" title="DMCA.com Protection Status" class="dmca-badge"> <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="DMCA.com Protection Status" data-lazy-src="https://images.dmca.com/Badges/_dmca_premi_badge_5.png?ID=cb459a32-a519-4921-98ac-55337e393ef1"><noscript><img src="https://images.dmca.com/Badges/_dmca_premi_badge_5.png?ID=cb459a32-a519-4921-98ac-55337e393ef1" alt="DMCA.com Protection Status"></noscript></a>				    </div>
				    				    				</div>
			</div>
		</div>
			<div class="footer-btm-wrap">
			<div class="vmagazine-container">
				<div class="vmagazine-btm-ftr">
					<div class="footer-credit">
	            						<div class="site-info">
											Báº£n quyá»n thuá»c vá» cauthu.com.vn Â© 2016	
									</div><!-- .site-info -->				
			            	</div>
	            			            	<div class="footer-nav">
		            	<nav class="footer-navigation">
			        		<div class="menu-main-menu-container"><ul id="footer-menu" class="menu vmagazine_mega_menu"><li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children page_item page-item-356664 no-mega-menu"><a href="https://cauthu.com.vn/bong-da-viet-nam">Viá»t Nam</a></li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children page_item page-item-356665 no-mega-menu"><a href="https://cauthu.com.vn/bong-da-anh">Anh</a></li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children page_item page-item-356666 no-mega-menu"><a href="https://cauthu.com.vn/tay-ban-nha">TÃ¢y Ban Nha</a></li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children page_item page-item-356667 no-mega-menu"><a href="https://cauthu.com.vn/duc">Äá»©c</a></li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children page_item page-item-356668 no-mega-menu"><a href="https://cauthu.com.vn/chau-au">ChÃ¢u Ãu</a></li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children page_item page-item-356669 no-mega-menu"><a href="https://cauthu.com.vn/cac-giai-khac">Giáº£i khÃ¡c</a></li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-356670 no-mega-menu"><a href="https://cauthu.com.vn/hau-truong">Háº­u trÆ°á»ng</a></li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category page_item page-item-356671 no-mega-menu"><a href="https://cauthu.com.vn/thich-me">ThÃ­ch mÃª</a></li>
</ul></div>			        		</nav>
		        		</div>
		        	        		</div>
            </div>
		</div>
</div>
		
			
		</footer><!-- #colophon -->
		
	
<a href="#" class="scrollup">
	<i class="fa fa-angle-up" aria-hidden="true"></i>
</a>
</div><!-- .vmagazine-main-wrapper -->


<div id="um_upload_single" style="display:none"></div>
<div id="um_view_photo" style="display:none">

	<a href="javascript:void(0);" data-action="um_remove_modal" class="um-modal-close"
	   aria-label="Close view photo modal">
		<i class="um-faicon-times"></i>
	</a>

	<div class="um-modal-body photo">
		<div class="um-modal-photo"></div>
	</div>

</div><div class='apss-popup-overlay' id="apss-popup-overlay-email" style="display:none"></div>
<div class="apss_email_share_popup" style="display:none;">
     <div class='apss_email_share_popup_close'>X</div>
          <div class="apss_popup_top">
          <div class="title"> </div>
          <div class="apss_email_share_popup_close_bttn"></div>
          <div class="clear"></div>
     </div>
     <div class="apss_email_popup_content">
          <div class="apss_email_popup_form">
               <div class="apss_email_popup_name apss-email-block">
                    <input type="text" id="apss_email_popup_name" placeholder="Your Name" onkeyup="removeMe('apss_email_popup_name_error');">
                    <div class='error apss_email_popup_name_error'></div>
               </div>
               <div class="apss_email_popup_from apss-email-block">
                    <input type="text" id="apss_email_popup_from" placeholder="Your email" onkeyup="removeMe('apss_email_popup_from_error');">
                    <div class='error apss_email_popup_from_error'></div>
               </div>
               <div class="apss_email_popup_sendto apss-email-block">
                    <input type="text" id="apss_email_popup_receiver" placeholder="Friend's email address" onkeyup="removeMe('apss_email_popup_sendto_error');">
                    <div class='error apss_email_popup_sendto_error'></div>
               </div>

               <div class='apss-sub-wrap apss-email-block'>
                    <div class="apss_email_popup_label">
                         Subject:
                    </div>

                    <div class="apss_email_popup_subject">
                         <input type="text" id="apss_email_popup_subject" value="Please visit this link https://cauthu.com.vn:443/">
                    </div>
               </div>
               <div class='apss-message-wrap apss-email-block'>
                    <div class="apss_email_popup_label">
                         Message:
                    </div>
                    <div class="apss_email_popup_message">
                         <textarea id="apss_email_popup_message">Hey Buddy!, I found this information for you: "Home". Here is the website link: https://cauthu.com.vn/. Thank you</textarea>
                    </div>
               </div>
          </div>
          <button class="apss-the-button" id="apss_email_popup_send_email">Send</button>
          <span class="apss_email_popup_loading" style="display:none;"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt='Ajax loader' data-lazy-src="https://cauthu.com.vn/wp-content/plugins/accesspress-social-pro/images/share/ajax-loader.gif" /><noscript><img src='https://cauthu.com.vn/wp-content/plugins/accesspress-social-pro/images/share/ajax-loader.gif' alt='Ajax loader' /></noscript></span>
          <div class="clear"></div>
          <div class='apss_email_popup_result'> </div>
     </div>
</div>
               <input type="hidden" id="apss-current-url" value="https://cauthu.com.vn:443/"/>
                              <span class="apss-temp" style="font-size:14px;position:relative;z-index:99999;"></span>
               <div class='apss-popup-overlay' id='apss-popup-overlay-all-shares-start' style="display:none"></div>
<div class='apss-social-share-popup-all-shares apss-social-share apss-theme-2 clearfix' style="display:none">
     <span class='apss_share_popup'>Share with friends</span>
     <div class='apss_popup_all_wrapper'>
          
<div class='apss-facebook apss-single-icon  '>

                    <a rel='nofollow' onclick="apss_open_in_popup_window( event, https://www.facebook.com/sharer.php?u=https%3A%2F%2Fcauthu.com.vn%3A443%2F ) "  data-hover="Facebook" title="Share on Facebook "  target='' href='https://www.facebook.com/sharer.php?u=https%3A%2F%2Fcauthu.com.vn%3A443%2F' >
                              <div class='apss-icon-block clearfix' data-hover="Facebook">
                                        <i class="socicon-facebook "></i>
                    <span class='apss-social-text'>Share on Facebook</span>
                    <span class='apss-share'>Share</span>
               </div>
               <div class="apss-hover-content-wrap">
                                        <div class="apss-hover-text">
                         Share                    </div>
               </div>
          </a>
</div>

<div class='apss-twitter apss-single-icon  '>

                    <a rel='nofollow' onclick="apss_open_in_popup_window( event, https://twitter.com/intent/tweet?text=Home&amp;url=https%253A%252F%252Fcauthu.com.vn%253A443%252F&counturl=https%253A%252F%252Fcauthu.com.vn%253A443%252F&amp;via=thanhqui ) "  data-hover="Twitter" title="Share on Twitter "  target='' href='https://twitter.com/intent/tweet?text=Home&amp;url=https%253A%252F%252Fcauthu.com.vn%253A443%252F&counturl=https%253A%252F%252Fcauthu.com.vn%253A443%252F&amp;via=thanhqui' >
                              <div class='apss-icon-block clearfix' data-hover="Twitter">
                                        <i class="socicon-twitter "></i>
                    <span class='apss-social-text'>Share on Twitter</span>
                    <span class='apss-share'>Share</span>
               </div>
               <div class="apss-hover-content-wrap">
                                        <div class="apss-hover-text">
                         Share                    </div>
               </div>
          </a>
</div>
     </div>
</div><link rel='stylesheet' id='sow-tabs-default-02e4508ec074-134-css'  href='https://cauthu.com.vn/wp-content/uploads/siteorigin-widgets/sow-tabs-default-02e4508ec074-134.css?ver=5.8' type='text/css' media='all' />
<link rel='stylesheet' id='dzsvg-css'  href='https://cauthu.com.vn/wp-content/plugins/dzs-videogallery/videogallery/vplayer.css?ver=11.721' type='text/css' media='all' />
<link rel='stylesheet' id='fontawesome-css'  href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css?ver=5.8' type='text/css' media='all' />
<link rel='stylesheet' id='dzs.scroller-css'  href='https://cauthu.com.vn/wp-content/plugins/dzs-videogallery/assets/dzsscroller/scroller.css?ver=5.8' type='text/css' media='all' />
<link rel='stylesheet' id='sow-button-flat-e12998d5217a-134-css'  href='https://cauthu.com.vn/wp-content/uploads/siteorigin-widgets/sow-button-flat-e12998d5217a-134.css?ver=5.8' type='text/css' media='all' />
<link rel='stylesheet' id='sow-button-base-css'  href='https://cauthu.com.vn/wp-content/plugins/so-widgets-bundle/widgets/button/css/style.css?ver=1.23.0' type='text/css' media='all' />
<script type='text/javascript' id='apss-frontend-mainjs-js-extra'>
/* <![CDATA[ */
var frontend_ajax_object = {"ajax_url":"https:\/\/cauthu.com.vn\/wp-admin\/admin-ajax.php","ajax_nonce":"6d365fb26a"};
var frontend_js_object = {"whatsapp_hide":"0","viber_hide":"0","sms_hide":"0","messenger_hide":"0","hide_popup_overlay":"0"};
/* ]]> */
</script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/plugins/accesspress-social-pro/js/share/frontend.js?ver=2.0.7' id='apss-frontend-mainjs-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/plugins/accesspress-social-pro/js/counter/frontend.js?ver=2.0.7' id='apsc-frontend-script-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' id='rocket-browser-checker-js-after'>
"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var RocketBrowserCompatibilityChecker=function(){function RocketBrowserCompatibilityChecker(options){_classCallCheck(this,RocketBrowserCompatibilityChecker),this.passiveSupported=!1,this._checkPassiveOption(this),this.options=!!this.passiveSupported&&options}return _createClass(RocketBrowserCompatibilityChecker,[{key:"_checkPassiveOption",value:function(self){try{var options={get passive(){return!(self.passiveSupported=!0)}};window.addEventListener("test",null,options),window.removeEventListener("test",null,options)}catch(err){self.passiveSupported=!1}}},{key:"initRequestIdleCallback",value:function(){!1 in window&&(window.requestIdleCallback=function(cb){var start=Date.now();return setTimeout(function(){cb({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-start))}})},1)}),!1 in window&&(window.cancelIdleCallback=function(id){return clearTimeout(id)})}},{key:"isDataSaverModeOn",value:function(){return"connection"in navigator&&!0===navigator.connection.saveData}},{key:"supportsLinkPrefetch",value:function(){var elem=document.createElement("link");return elem.relList&&elem.relList.supports&&elem.relList.supports("prefetch")&&window.IntersectionObserver&&"isIntersecting"in IntersectionObserverEntry.prototype}},{key:"isSlowConnection",value:function(){return"connection"in navigator&&"effectiveType"in navigator.connection&&("2g"===navigator.connection.effectiveType||"slow-2g"===navigator.connection.effectiveType)}}]),RocketBrowserCompatibilityChecker}();
</script>
<script type='text/javascript' id='rocket-preload-links-js-extra'>
/* <![CDATA[ */
var RocketPreloadLinksConfig = {"excludeUris":"\/(.+\/)?feed\/?.+\/?|\/(?:.+\/)?embed\/|\/(index\\.php\/)?wp\\-json(\/.*|$)|\/wp-admin\/|\/logout\/|\/wp-login.php","usesTrailingSlash":"1","imageExt":"jpg|jpeg|gif|png|tiff|bmp|webp|avif","fileExt":"jpg|jpeg|gif|png|tiff|bmp|webp|avif|php|pdf|html|htm","siteUrl":"https:\/\/cauthu.com.vn","onHoverDelay":"100","rateThrottle":"3"};
/* ]]> */
</script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' id='rocket-preload-links-js-after'>
(function() {
"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var t=function(){function n(e,t){i(this,n),this.browser=e,this.config=t,this.options=this.browser.options,this.prefetched=new Set,this.eventTime=null,this.threshold=1111,this.numOnHover=0}return e(n,[{key:"init",value:function(){!this.browser.supportsLinkPrefetch()||this.browser.isDataSaverModeOn()||this.browser.isSlowConnection()||(this.regex={excludeUris:RegExp(this.config.excludeUris,"i"),images:RegExp(".("+this.config.imageExt+")$","i"),fileExt:RegExp(".("+this.config.fileExt+")$","i")},this._initListeners(this))}},{key:"_initListeners",value:function(e){-1<this.config.onHoverDelay&&document.addEventListener("mouseover",e.listener.bind(e),e.listenerOptions),document.addEventListener("mousedown",e.listener.bind(e),e.listenerOptions),document.addEventListener("touchstart",e.listener.bind(e),e.listenerOptions)}},{key:"listener",value:function(e){var t=e.target.closest("a"),n=this._prepareUrl(t);if(null!==n)switch(e.type){case"mousedown":case"touchstart":this._addPrefetchLink(n);break;case"mouseover":this._earlyPrefetch(t,n,"mouseout")}}},{key:"_earlyPrefetch",value:function(t,e,n){var i=this,r=setTimeout(function(){if(r=null,0===i.numOnHover)setTimeout(function(){return i.numOnHover=0},1e3);else if(i.numOnHover>i.config.rateThrottle)return;i.numOnHover++,i._addPrefetchLink(e)},this.config.onHoverDelay);t.addEventListener(n,function e(){t.removeEventListener(n,e,{passive:!0}),null!==r&&(clearTimeout(r),r=null)},{passive:!0})}},{key:"_addPrefetchLink",value:function(i){return this.prefetched.add(i.href),new Promise(function(e,t){var n=document.createElement("link");n.rel="prefetch",n.href=i.href,n.onload=e,n.onerror=t,document.head.appendChild(n)}).catch(function(){})}},{key:"_prepareUrl",value:function(e){if(null===e||"object"!==(void 0===e?"undefined":r(e))||!1 in e||-1===["http:","https:"].indexOf(e.protocol))return null;var t=e.href.substring(0,this.config.siteUrl.length),n=this._getPathname(e.href,t),i={original:e.href,protocol:e.protocol,origin:t,pathname:n,href:t+n};return this._isLinkOk(i)?i:null}},{key:"_getPathname",value:function(e,t){var n=t?e.substring(this.config.siteUrl.length):e;return n.startsWith("/")||(n="/"+n),this._shouldAddTrailingSlash(n)?n+"/":n}},{key:"_shouldAddTrailingSlash",value:function(e){return this.config.usesTrailingSlash&&!e.endsWith("/")&&!this.regex.fileExt.test(e)}},{key:"_isLinkOk",value:function(e){return null!==e&&"object"===(void 0===e?"undefined":r(e))&&(!this.prefetched.has(e.href)&&e.origin===this.config.siteUrl&&-1===e.href.indexOf("?")&&-1===e.href.indexOf("#")&&!this.regex.excludeUris.test(e.href)&&!this.regex.images.test(e.href))}}],[{key:"run",value:function(){"undefined"!=typeof RocketPreloadLinksConfig&&new n(new RocketBrowserCompatibilityChecker({capture:!0,passive:!0}),RocketPreloadLinksConfig).init()}}]),n}();t.run();
}());
</script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/themes/vmagazine/assets/library/mCustomScrollbar/jquery.mCustomScrollbar.js?ver=0.1' id='jquery-mCustomScrollbar-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/themes/vmagazine/assets/js/jquery.fitvids.js?ver=0.1' id='jquery-fitvids-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/themes/vmagazine/assets/js/navigation.js?ver=0.1' id='vmagazine-navigation-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/themes/vmagazine/assets/js/skip-link-focus-fix.js?ver=0.1' id='vmagazine-skip-link-focus-fix-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/themes/vmagazine/assets/library/lightslider/lightslider.js?ver=0.1' id='jquery-lightslider-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/themes/vmagazine/assets/js/wow.js?ver=0.1' id='jquery-wow-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/themes/vmagazine/assets/library/prettyPhoto/js/jquery.prettyPhoto.js?ver=0.1' id='jquery-prettyphoto-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/themes/vmagazine/assets/js/iframe-api.js?ver=0.1' id='youtube-api-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/themes/vmagazine/assets/library/theia-sticky-sidebar/theia-sticky-sidebar.js?ver=0.1' id='jquery-theia-sticky-sidebar-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/themes/vmagazine/assets/library/slick/slick.min.js?ver=0.1' id='jquery-slick-js'></script>
<script type='text/javascript' id='vmagazine-custom-script-js-extra'>
/* <![CDATA[ */
var vmagazine_ajax_script = {"mode":"enable","ajax_search":"show","ajaxurl":"https:\/\/cauthu.com.vn\/wp-admin\/admin-ajax.php","fileUrl":"https:\/\/cauthu.com.vn\/wp-content\/themes\/vmagazine","lazy":"disable","controls":"","rtl":"false","preloader":"hide","stickyHeader":"show"};
/* ]]> */
</script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/themes/vmagazine/assets/js/vmagazine-custom.js?ver=0.1' id='vmagazine-custom-script-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/plugins/ultimate-member/assets/js/select2/select2.full.min.js?ver=4.0.13' id='select2-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-includes/js/underscore.min.js?ver=1.8.3' id='underscore-js'></script>
<script type='text/javascript' id='wp-util-js-extra'>
/* <![CDATA[ */
var _wpUtilSettings = {"ajax":{"url":"\/wp-admin\/admin-ajax.php"}};
/* ]]> */
</script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-includes/js/wp-util.min.js?ver=5.8' id='wp-util-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/plugins/ultimate-member/assets/js/um-crop.min.js?ver=2.2.0' id='um_crop-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/plugins/ultimate-member/assets/js/um-modal.min.js?ver=2.2.0' id='um_modal-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/plugins/ultimate-member/assets/js/um-jquery-form.min.js?ver=2.2.0' id='um_jquery_form-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/plugins/ultimate-member/assets/js/um-fileupload.js?ver=2.2.0' id='um_fileupload-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/plugins/ultimate-member/assets/js/pickadate/picker.js?ver=2.2.0' id='um_datetime-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/plugins/ultimate-member/assets/js/pickadate/picker.date.js?ver=2.2.0' id='um_datetime_date-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/plugins/ultimate-member/assets/js/pickadate/picker.time.js?ver=2.2.0' id='um_datetime_time-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-includes/js/dist/vendor/regenerator-runtime.min.js?ver=0.13.7' id='regenerator-runtime-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=3.15.0' id='wp-polyfill-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-includes/js/dist/hooks.min.js?ver=a7edae857aab69d69fa10d5aef23a5de' id='wp-hooks-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-includes/js/dist/i18n.min.js?ver=5f1269854226b4dd90450db411a12b79' id='wp-i18n-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' id='wp-i18n-js-after'>
wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
</script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/plugins/ultimate-member/assets/js/um-raty.min.js?ver=2.2.0' id='um_raty-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/plugins/ultimate-member/assets/js/um-tipsy.min.js?ver=2.2.0' id='um_tipsy-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-includes/js/imagesloaded.min.js?ver=4.1.4' id='imagesloaded-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-includes/js/masonry.min.js?ver=4.2.2' id='masonry-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-includes/js/jquery/jquery.masonry.min.js?ver=3.1.2b' id='jquery-masonry-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/plugins/ultimate-member/assets/js/simplebar.min.js?ver=2.2.0' id='um_scrollbar-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/plugins/ultimate-member/assets/js/um-functions.min.js?ver=2.2.0' id='um_functions-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/plugins/ultimate-member/assets/js/um-responsive.min.js?ver=2.2.0' id='um_responsive-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/plugins/ultimate-member/assets/js/um-conditional.min.js?ver=2.2.0' id='um_conditional-js'></script>
<script type='text/javascript' id='um_scripts-js-extra'>
/* <![CDATA[ */
var um_scripts = {"max_upload_size":"209715200000","nonce":"d053c6f99c"};
/* ]]> */
</script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/plugins/ultimate-member/assets/js/um-scripts.min.js?ver=2.2.0' id='um_scripts-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/plugins/ultimate-member/assets/js/um-profile.min.js?ver=2.2.0' id='um_profile-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/plugins/ultimate-member/assets/js/um-account.min.js?ver=2.2.0' id='um_account-js'></script>
<script type='text/javascript' src='https://cauthu.com.vn/wp-includes/js/wp-embed.min.js?ver=5.8' id='wp-embed-js'></script>
<script type='text/javascript' id='siteorigin-panels-front-styles-js-extra'>
/* <![CDATA[ */
var panelsStyles = {"fullContainer":"body"};
/* ]]> */
</script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/plugins/siteorigin-panels/js/styling.min.js?ver=2.13.0' id='siteorigin-panels-front-styles-js'></script>
<script type='text/javascript' id='sow-tabs-js-extra'>
/* <![CDATA[ */
var sowTabs = {"scrollto_after_change":"1"};
var sowTabs = {"scrollto_after_change":"1"};
var sowTabs = {"scrollto_after_change":"1"};
/* ]]> */
</script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/plugins/so-widgets-bundle/widgets/tabs/js/tabs.min.js?ver=1.23.0' id='sow-tabs-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/plugins/dzs-videogallery/videogallery/vplayer.js?ver=11.721' id='dzsvg-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://cauthu.com.vn/wp-content/plugins/dzs-videogallery/assets/dzsscroller/scroller.js?ver=5.8' id='dzs.scroller-js'></script>
      <script type="rocketlazyloadscript">
        var dzsvg_vpconfigs = {"skinauroradefault":{"settings_video_end_reset_time":"off","design_skin":"skin_aurora","defaultvolume":"","settings_ios_usecustomskin":"off","settings_video_overlay":"on","vimeo_portrait":"0","vimeo_color":"","ad_show_markers":"on","settings_suggestedQuality":"hd720","responsive_ratio":"detect"}};
      </script>
      <script type="rocketlazyloadscript" class="dzsvg-multisharer-script">"use strict";
  window.init_zoombox_settings = {
    settings_zoom_doNotGoBeyond1X: 'off'
    , design_skin: 'skin-nebula'
    , settings_enableSwipe: 'off'
    , settings_enableSwipeOnDesktop: 'off'
    , settings_galleryMenu: 'dock'
    , settings_useImageTag: 'on'
    , settings_paddingHorizontal: '100'
    , settings_paddingVertical: '100'
    , settings_disablezoom: 'off'
    , settings_transition: 'fade'
    , settings_transition_out: 'fade'
    , settings_transition_gallery: 'slide'
    , settings_disableSocial: 'on'
    , settings_zoom_use_multi_dimension: 'on'
    ,videoplayer_settings:{
      zoombox_video_autoplay: "off",design_skin: "skin_aurora"
      ,settings_youtube_usecustomskin: "on"
      ,extra_classes: ""    }
  };
</script>
<script type="rocketlazyloadscript" data-rocket-type="text/javascript">document.body.className = document.body.className.replace("siteorigin-panels-before-js","");</script>		<script type="rocketlazyloadscript" data-rocket-type="text/javascript">
			jQuery( window ).on( 'load', function() {
				jQuery('input[name="um_request"]').val('');
			});
		</script>
	<script>window.lazyLoadOptions={elements_selector:"img[data-lazy-src],.rocket-lazyload,iframe[data-lazy-src]",data_src:"lazy-src",data_srcset:"lazy-srcset",data_sizes:"lazy-sizes",class_loading:"lazyloading",class_loaded:"lazyloaded",threshold:300,callback_loaded:function(element){if(element.tagName==="IFRAME"&&element.dataset.rocketLazyload=="fitvidscompatible"){if(element.classList.contains("lazyloaded")){if(typeof window.jQuery!="undefined"){if(jQuery.fn.fitVids){jQuery(element).parent().fitVids()}}}}}};window.addEventListener('LazyLoad::Initialized',function(e){var lazyLoadInstance=e.detail.instance;if(window.MutationObserver){var observer=new MutationObserver(function(mutations){var image_count=0;var iframe_count=0;var rocketlazy_count=0;mutations.forEach(function(mutation){for(i=0;i<mutation.addedNodes.length;i++){if(typeof mutation.addedNodes[i].getElementsByTagName!=='function'){continue}
if(typeof mutation.addedNodes[i].getElementsByClassName!=='function'){continue}
images=mutation.addedNodes[i].getElementsByTagName('img');is_image=mutation.addedNodes[i].tagName=="IMG";iframes=mutation.addedNodes[i].getElementsByTagName('iframe');is_iframe=mutation.addedNodes[i].tagName=="IFRAME";rocket_lazy=mutation.addedNodes[i].getElementsByClassName('rocket-lazyload');image_count+=images.length;iframe_count+=iframes.length;rocketlazy_count+=rocket_lazy.length;if(is_image){image_count+=1}
if(is_iframe){iframe_count+=1}}});if(image_count>0||iframe_count>0||rocketlazy_count>0){lazyLoadInstance.update()}});var b=document.getElementsByTagName("body")[0];var config={childList:!0,subtree:!0};observer.observe(b,config)}},!1)</script><script data-no-minify="1" async src="https://cauthu.com.vn/wp-content/plugins/wp-rocket/assets/js/lazyload/16.1/lazyload.min.js"></script>


</body>
</html>

<!-- This website is like a Rocket, isn't it? Performance optimized by WP Rocket. Learn more: https://wp-rocket.me - Debug: cached@1627932235 -->