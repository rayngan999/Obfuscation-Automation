<!DOCTYPE html>
<html>
    <head>
        <meta name="robots" content="noindex,nofollow">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
        <meta name="HandheldFriendly" content="true"/>
        <meta name="apple-mobile-web-app-capable" content="YES"/>
        <meta name="robots" content="noindex, nofollow"/>
        <title>stackla_desktop_grid_shoppable</title>

        <link rel="stylesheet" href="https://assetscdn.stackla.com/media/css/widget/base/base-common.combine.75b8f3c3.css">

        <!-- Head Slot (start) -->
                <!-- Head Slot (end) -->

        <!-- Custom CSS (start) -->
        <style id="custom-css">@import url(https://cdn.jsdelivr.net/npm/@smiledirectclub/sds-globals@1.6.0/dist/tokens/css/sds-tokens.css);
@import url(https://cdn.jsdelivr.net/npm/@smiledirectclub/sds-globals/dist/assets/fonts/SofiaPro/SofiaPro.css);
/** HTML & Class Names Structure
 * .tile
 *   .tile-detail
 *     .tile-caption
 *     .tile-user
 *       i.tile-user-source
 *       a.tile-user-link
 *         span.tile-user-handle
 *   .tile-image
 *   .tile-source
 */
.tile-detail {
  background: rgba(87, 0, 255, 0.75);
  transition: opacity 200ms cubic-bezier(0.2, 0.51, 0.76, 0.72);
}
.tile-caption {
  display: none;
}
.tile-user {
  display: none;
}
.tile-source {
  display: none;
}
.tile-icon {
  opacity: 0;
  transition: opacity 200ms cubic-bezier(0.2, 0.51, 0.76, 0.72);
}
.tile:hover .tile-icon {
  opacity: 1;
  top: calc(50% - 10px);
  left: calc(50% - 10px);
  position: absolute;
  z-index: 50;
}
.load-more--button {
  background: none;
  width: 300px !important;
  border: 2px solid #5700FF;
  border-radius: 28px;
  margin: 0 auto;
  letter-spacing: 0.2px;
  font-size: 14px;
  font-family: Sofia Black, Sofia Pro Black, Sofia Pro, Helvetica, Arial, sans-serif;
  font-weight: 600;
  color: #5700FF;
}
.load-more--button:hover {
  background: #5700ff;
  opacity: .9;
  color: white;
}
/*.load-more--button:before {	
	content: "Load More";
	font-size: 14px;
}*/
</style>
        <!-- Custom CSS (end) -->

        <!-- Sentry -->
        <script src="//cdn.ravenjs.com/3.15.0/raven.min.js" integrity="sha384-emluOS7+UrA6MIOAWxw8L52iFpZNh7+i1kKBfkofwZJn/s66JpKS9gR1ZMOwiayX" crossorigin="anonymous"></script>
    <script src="//assetscdn.stackla.com/media/js/admin/common/sentry.js?1627880420" data-dsn=""></script>

        
        <!-- Lightbox Custom JS (start) -->
        <script type="text/html" id="lightbox-custom-js">/* global Stackla, console, $tackla */
/* jshint strict: false */
// Events
Stackla.WidgetManager
    .on('load', function (e, data) {
        // console.log(e.type, data.filterId, data.hashId, data.styleName, data.uniqueId, data.widgetId, data.widgetType);
    })
    .on('tileExpand', function (e, data) {
        // console.log(e.type, data.expandType,  data.tileData,  data.widgetId);
    })
    .on('beforeExpandedTileOpen', function (e, data) {
        // console.log(e.type, data.el, data.tileData,  data.widgetId);
    })
    .on('expandedTileImageLoad', function (e, data) {
        // console.log(e.type, data.el, data.tileEl, data.widgetId);
    })
    .on('beforeExpandedTileImageResize', function (e, data) {
        // console.log(e.type, data.sizes, data.el, data.tileEl, data.widgetId);
    })
    .on('expandedTileOpen', function (e, data) {
        // console.log(e.type, data.el, data.tileData,  data.widgetId);
		// console.log("Check for avatar");
	
		if( document.querySelector('.stacklapopup-avatar-wrapper').innerHTML.trim().length > 0 ) {
			document.querySelector('.stacklapopup-source').setAttribute("style", "display:none;");
		}
	
		document.querySelector('.stacklapopup-caption-paragraph').setAttribute('class', 'sds-Text--caption');
		document.querySelector('.stacklapopup-user-handle').setAttribute('class', 'sds-Text--footnote');
	
		var footerArea = document.querySelector('.stacklapopup-footer');
		var newDiv = document.createElement('div');
		newDiv.setAttribute('class', 'ctaBox');
	
		var ctaCopy = document.createElement('p');
		ctaCopy.setAttribute('class', 'ctaCopy sds-Text--caption');
		var ctaMessage = document.createTextNode("Get started on a smile you'll love by taking our free Smile Assessment.");
		ctaCopy.appendChild(ctaMessage);
	
		var ctaButton = document.createElement('a');
		var ctaButtonCopy = document.createTextNode("Am I A Candidate?");
		ctaButton.setAttribute('class', 'sds-Button sds-Button--extraSmall');
		ctaButton.setAttribute('href', 'https://smiledirectclub.com/smile_assessment');
		ctaButton.appendChild(ctaButtonCopy);
		newDiv.appendChild(ctaCopy);
		newDiv.appendChild(ctaButton);
		footerArea.appendChild(newDiv);
	
		// Disable linking to social media profiles
		var profileLink = document.querySelector('.stacklapopup-user-link');
		profileLink.addEventListener('click', function (e) {
			e.preventDefault();
			e.stopPropagation();
		});
	
		var avatarLink = document.querySelector('.stacklapopup-avatar-link');
		avatarLink.addEventListener('click', function (e) {
			e.preventDefault();
			e.stopPropagation();
		});
	
	

    })
    .on('expandedTileImageResize', function (e, data) {
        // console.log(e.type, data.sizes, data.el, data.tileEl, data.widgetId);
    })
    .on('userClick', function (e, data) {
        // console.log(e.type, data.tileData, data.widgetId);
    })
    .on('shareClick', function (e, data) {
        // console.log(e.type, data.shareNetwork, data.tileData, data.widgetId);
    })
    .on('moreLoad', function (e, data) {
        // console.log(e.type, data.page, data.widgetId);
    })
    .on('shopspotFlyoutExpand', function (e, data) {
        // console.log(e.type, data.productTag, data.tileData, data.widgetId);
			document.querySelector('.stacklapopup-shopspot-flyout-image').appendChild(document.querySelector('.stacklapopup-shopspot-flyout-button'));
    })
    .on('shopspotActionClick', function (e, data) {
        // console.log(e.type, data.productTag, data.tileData, data.widgetId);
    })
    .on('productActionClick', function (e, data) {
        // console.log(e.type, data.productTag, data.tileData, data.widgetId);
    });

// Methods
// Stackla.WidgetManager.postMessage(typeName, data, [widgetId])
// Stackla.WidgetManager.sync();
// Stackla.WidgetManager.search(widgetId, keyword);
// Stackla.WidgetManager.changeFilter(widgetId, filterId);</script>
        <!-- Lightbox Custom JS (end) -->

        <!-- Lightbox Custom CSS (start) -->
        <script type="text/html" id="lightbox-custom-css">@import url(https://cdn.jsdelivr.net/npm/@smiledirectclub/sds-globals/dist/assets/fonts/SofiaPro/SofiaPro.css);
@import url(https://cdn.jsdelivr.net/npm/@smiledirectclub/sds-css@1.6.1/dist/sds-css--all.css);
.stacklapopup,
.sdc-cms .stacklapopup {
  font-family: "Sofia Pro", Helvetica, Arial, sans-serif;
  font-weight: normal;
  font-style: normal;
  /*
	&-panel-right .stacklapopup-caption .sds-Text--caption {
		max-height: 20vh;
		overflow: scroll;
		font-size: 14px;
		
		@media screen and (max-width: 768px) {
			max-height: 35vh;
		}
	}
	*/
}
.stacklapopup-bg,
.sdc-cms .stacklapopup-bg {
  background-color: rgba(0, 0, 0, 0.6);
}
.stacklapopup-content,
.sdc-cms .stacklapopup-content {
  max-width: 75vw !important;
}
@media screen and (max-width: 768px) {
  .stacklapopup-content,
  .sdc-cms .stacklapopup-content {
    max-width: 100vw !important;
    margin-top: -10px;
  }
}
@media screen and (min-width: 1680px) {
  .stacklapopup-content,
  .sdc-cms .stacklapopup-content {
    max-width: 60vw !important;
  }
}
.stacklapopup-content-wrap,
.sdc-cms .stacklapopup-content-wrap {
  border-radius: 8px;
}
.stacklapopup-panel,
.sdc-cms .stacklapopup-panel {
  display: flex;
  align-items: stretch;
}
.stacklapopup-panel-left,
.sdc-cms .stacklapopup-panel-left {
  border-radius: 8px;
  width: 60%;
}
.stacklapopup-panel-left .stacklapopup-shopspot,
.sdc-cms .stacklapopup-panel-left .stacklapopup-shopspot {
  background-color: transparent !important;
}
.stacklapopup-panel-left .stacklapopup-shopspot-hover,
.sdc-cms .stacklapopup-panel-left .stacklapopup-shopspot-hover {
  box-shadow: none !important;
}
.stacklapopup-panel-left .stacklapopup-shopspot .stacklapopup-shopspot-icon,
.sdc-cms .stacklapopup-panel-left .stacklapopup-shopspot .stacklapopup-shopspot-icon {
  background: #5700ff !important;
  box-shadow: #ffffff 0px 0px 0px 5px !important;
}
.stacklapopup-panel-left .stacklapopup-shopspot-flyout,
.sdc-cms .stacklapopup-panel-left .stacklapopup-shopspot-flyout {
  border-radius: 8px !important;
  padding: 0px;
}
.stacklapopup-panel-left .stacklapopup-shopspot-flyout-image,
.sdc-cms .stacklapopup-panel-left .stacklapopup-shopspot-flyout-image {
  position: relative;
}
.stacklapopup-panel-left .stacklapopup-shopspot-flyout-text,
.sdc-cms .stacklapopup-panel-left .stacklapopup-shopspot-flyout-text {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
}
.stacklapopup-panel-left .stacklapopup-shopspot-flyout-title,
.sdc-cms .stacklapopup-panel-left .stacklapopup-shopspot-flyout-title {
  font-family: "Sofia Pro", Helvetica, Arial, sans-serif;
  font-weight: 700;
  font-size: 24px;
  font-style: normal;
  flex: 0 1 auto;
  margin-right: 5px;
}
.stacklapopup-panel-left .stacklapopup-shopspot-flyout-price,
.sdc-cms .stacklapopup-panel-left .stacklapopup-shopspot-flyout-price {
  display: none !important;
}
.stacklapopup-panel-left .stacklapopup-shopspot-flyout-button,
.sdc-cms .stacklapopup-panel-left .stacklapopup-shopspot-flyout-button {
  flex: 0 0 auto;
  border-radius: 25px;
  border: 2px solid #5700ff;
  font-family: "Sofia Pro", Helvetica, Arial, sans-serif;
  font-weight: 700;
  font-size: 16px;
  font-style: normal;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 12px 20px;
}
.stacklapopup-panel-left .stacklapopup-shopspot-flyout-button-text,
.sdc-cms .stacklapopup-panel-left .stacklapopup-shopspot-flyout-button-text {
  color: #5700ff !important;
}
.stacklapopup-panel-left .stacklapopup-shopspot-flyout-close-link,
.sdc-cms .stacklapopup-panel-left .stacklapopup-shopspot-flyout-close-link {
  top: 10px !important;
  left: 0 !important;
  background: none !important;
  color: #5700ff !important;
  box-shadow: none !important;
}
.stacklapopup-panel-right,
.sdc-cms .stacklapopup-panel-right {
  width: 40%;
  vertical-align: top;
  display: flex;
  flex-direction: column;
  align-content: space-evenly;
}
@media screen and (max-width: 768px) {
  .stacklapopup-panel,
  .sdc-cms .stacklapopup-panel {
    flex-wrap: wrap;
  }
  .stacklapopup-panel-left,
  .sdc-cms .stacklapopup-panel-left,
  .stacklapopup-panel-right,
  .sdc-cms .stacklapopup-panel-right {
    width: 100%;
  }
}
.stacklapopup-panel-right .stacklapopup-footer,
.sdc-cms .stacklapopup-panel-right .stacklapopup-footer {
  flex: 0 0 auto;
}
.stacklapopup-close,
.sdc-cms .stacklapopup-close {
  font-size: 13px;
  width: 30px;
  height: 30px;
  padding: 7px;
}
.stacklapopup-close:hover,
.sdc-cms .stacklapopup-close:hover,
.stacklapopup-close:focus,
.sdc-cms .stacklapopup-close:focus,
.stacklapopup-close:active .stacklapopup-arrow,
.stacklapopup-close:active .sdc-cms .stacklapopup-arrow,
.sdc-cms .stacklapopup-close:active .stacklapopup-arrow,
.sdc-cms .stacklapopup-close:active .sdc-cms .stacklapopup-arrow {
  color: var(--token-color-core-blurple);
}
@media screen and (max-width: 480px) {
  .stacklapopup-close,
  .sdc-cms .stacklapopup-close,
  .stacklapopup-close:hover,
  .sdc-cms .stacklapopup-close:hover {
    background: rgba(63, 63, 63, 0.8);
    color: white;
  }
}
.stacklapopup-arrow,
.sdc-cms .stacklapopup-arrow {
  font-size: 24px;
  height: 44px;
  width: 44px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  box-shadow: none;
}
@media screen and (max-width: 480px) {
  .stacklapopup-arrow,
  .sdc-cms .stacklapopup-arrow {
    position: absolute;
    top: 225px;
  }
}
.stacklapopup-arrow-icon,
.sdc-cms .stacklapopup-arrow-icon {
  height: 44px;
  width: 44px;
}
@media screen and (max-width: 480px) {
  .stacklapopup-arrow-left,
  .sdc-cms .stacklapopup-arrow-left {
    left: 10px;
  }
  .stacklapopup-arrow-right,
  .sdc-cms .stacklapopup-arrow-right {
    right: 10px;
  }
}
.stacklapopup-arrow-left .stacklapopup-arrow-icon:before,
.stacklapopup-arrow-left .sdc-cms .stacklapopup-arrow-icon:before,
.sdc-cms .stacklapopup-arrow-left .stacklapopup-arrow-icon:before,
.sdc-cms .stacklapopup-arrow-left .sdc-cms .stacklapopup-arrow-icon:before {
  position: absolute;
  left: 8px;
  top: 10px;
}
.stacklapopup-arrow-right .stacklapopup-arrow-icon:before,
.stacklapopup-arrow-right .sdc-cms .stacklapopup-arrow-icon:before,
.sdc-cms .stacklapopup-arrow-right .stacklapopup-arrow-icon:before,
.sdc-cms .stacklapopup-arrow-right .sdc-cms .stacklapopup-arrow-icon:before {
  position: absolute;
  top: 10px;
  right: 0px;
}
.stacklapopup-source,
.sdc-cms .stacklapopup-source {
  background: #5700ff;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 26px;
  margin-right: 0;
}
.stacklapopup-user-link,
.sdc-cms .stacklapopup-user-link {
  padding-left: 8px;
}
.stacklapopup-user-link:hover,
.sdc-cms .stacklapopup-user-link:hover {
  cursor: default;
}
.stacklapopup-avatar-image,
.sdc-cms .stacklapopup-avatar-image {
  width: 40px;
  height: 40px;
}
.stacklapopup-avatar-image:hover,
.sdc-cms .stacklapopup-avatar-image:hover {
  cursor: default;
}
.stacklapopup-user-info-wrapper,
.sdc-cms .stacklapopup-user-info-wrapper {
  margin-left: 0px;
}
.stacklapopup-user-name,
.sdc-cms .stacklapopup-user-name {
  font-weight: bold;
  font-size: 13px !important;
  color: black;
}
.stacklapopup-user-handle,
.sdc-cms .stacklapopup-user-handle {
  font-size: 12px !important;
  color: #5700ff;
}
.stacklapopup-user-bottom .sds-Text--footnote,
.sdc-cms .stacklapopup-user-bottom .sds-Text--footnote {
  color: #5700ff;
  font-weight: bold;
}
.stacklapopup-caption,
.sdc-cms .stacklapopup-caption {
  font-size: 16px !important;
  text-align: left;
  padding-left: 5px;
  font-family: "Sofia Pro", Helvetica, Arial, sans-serif;
  font-weight: normal;
  font-style: normal;
  flex-grow: 2;
  width: 100%;
}
.stacklapopup-caption .sds-Text--caption,
.sdc-cms .stacklapopup-caption .sds-Text--caption {
  font-size: 16px !important;
}
.stacklapopup-twitter-intent-wrapper,
.sdc-cms .stacklapopup-twitter-intent-wrapper {
  display: none;
}
.stacklapopup-products-item,
.sdc-cms .stacklapopup-products-item {
  border: none;
  border-top: 2px solid #f5f5f5;
}
.stacklapopup-products-item-media,
.sdc-cms .stacklapopup-products-item-media {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
}
.stacklapopup-products-item-title,
.sdc-cms .stacklapopup-products-item-title {
  font-family: "Sofia Pro", Helvetica, Arial, sans-serif;
  font-weight: 700;
  font-style: normal;
  margin-bottom: 15px;
}
.stacklapopup-products-item-price,
.sdc-cms .stacklapopup-products-item-price {
  display: none;
}
.stacklapopup-products-item-button,
.sdc-cms .stacklapopup-products-item-button {
  border-radius: 25px;
  border: 2px solid #5700ff;
  font-family: "Sofia Pro", Helvetica, Arial, sans-serif;
  font-weight: 700;
  font-style: normal;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 5px 10px;
  color: #5700ff !important;
}
.stacklapopup-timestamp,
.sdc-cms .stacklapopup-timestamp {
  display: none;
}
.stacklapopup-footer .ctaBox,
.sdc-cms .stacklapopup-footer .ctaBox {
  width: 100%;
  background: rgba(225, 225, 225, 0.4);
  padding: var(--token-whitespace-x-3);
  border-radius: 8px;
  margin: 10px 0;
  padding: 30px 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.stacklapopup-footer .ctaBox .ctaCopy,
.sdc-cms .stacklapopup-footer .ctaBox .ctaCopy {
  text-align: center;
  margin-bottom: var(--token-whitespace-x-2);
  font-family: "Sofia Pro", Helvetica, Arial, sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 16px !important;
}
.stacklapopup-footer .ctaBox .sds-Button,
.sdc-cms .stacklapopup-footer .ctaBox .sds-Button {
  border-radius: 5px;
  border: 2px solid transparent;
  color: #fff;
  cursor: pointer;
  display: block;
  font-family: Sofia Black, Sofia Pro Black, Sofia Pro, Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 13px;
  line-height: 22px;
  margin: 20px auto 0;
  letter-spacing: 3px;
  text-transform: uppercase;
  padding: 15px 5px;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 100%;
}
.stacklapopup-footer .ctaBox .ctaButton,
.sdc-cms .stacklapopup-footer .ctaBox .ctaButton {
  border: 2px solid var(--sds-Button-primary-color);
  background: #5700ff;
  color: white;
  border-radius: 100px;
  margin: 10px 0;
  font-size: var(--token-text-size-body-small);
  line-height: var(--token-text-line-height-base);
  padding: 10px 8px;
  width: fit-content;
}
.stacklapopup-wrap:not(.stacklapopup-mobile) .stacklapopup-panel-left .stacklapopup-shopspot .stacklapopup-shopspot-flyout .stacklapopup-shopspot-flyout-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
}
</script>
        <!-- Lightbox Custom CSS (end) -->

        
            <script src="//assetscdn.stackla.com/media/js/https/https-rules.1627880420.min.gz.js"></script>
        <script type="text/html" id="tpl-video"><!-- Video Embed Code (start) -->
{{#show_video}}
{{#is_ie8}}
<div class="stacklapopup-image-wrapper">
    <a href="{{video_url}}" target="_blank">
        <img src="{{image}}" alt="{{image_alt_text}}">
        <div class="stacklapopup-play-icon"></div>
    </a>
</div>
{{/is_ie8}}
{{^is_ie8}}
<div class="stacklapopup-video-wrapper">
    <div class="stacklapopup-video-wrapper-inner">
        <div class="stacklapopup-video {{dimensions}}">

        {{#embed_url}}
            {{#is_vimeo}}
            <iframe width="640" height="360" src="//player.vimeo.com/video/{{embed_url}}" frameborder="0" class="stacklapopup-iframe" />
            {{/is_vimeo}}

            {{#is_vine}}
            <iframe src="{{embed_url}}/embed/simple" width="640" height="640" frameborder="0" class="stacklapopup-iframe stackla-vine" />
            {{/is_vine}}

            {{#is_youtube}}
            <iframe type="text/html" width="640" height="360" src="//www.youtube.com/embed/{{embed_url}}?autoplay=1" allowfullscreen="allowFullScreen" frameborder="0" class="stacklapopup-iframe" />
            {{/is_youtube}}

            {{#is_weibo}}
            <iframe type="text/html" width="480" height="480" src="http://video.weibo.com/show?fid={{embed_url}}" frameborder="0" class="weibo-iframe" />
            {{/is_weibo}}
        {{/embed_url}}

        {{#is_mp4}}
            {{#is_firefox}}
            <video
                class="video-js vjs-default-skin"
                controls autoplay
                preload="auto"
                width="640"
                height="640"
                poster=""
                data-setup=""
                onerror="window.Stackla.WidgetManager.onAssetError('{{id}}')">
                <source src="{{{mp4_url}}}" type="video/mp4" />
            </video>
            {{/is_firefox}}

            {{^is_firefox}}
            <video
                src="{{{mp4_url}}}"
                class="video-js vjs-default-skin"
                controls autoplay
                preload="auto" width="640" height="640" poster=""
                onerror="window.Stackla.WidgetManager.onAssetError('{{id}}')">
                {{#image}}
                <img
                    src="{{image}}"
                    width="100%"
                    class="unknown-video"
                    onerror="window.Stackla.WidgetManager.onAssetError('{{id}}')"/>
                {{/image}}
            </video>
            {{/is_firefox}}
        {{/is_mp4}}

        {{#is_facebook}}
        <div
            class="fb-video"
            data-autoplay="true"
            data-href="{{{link_post}}}"
            data-show-text="false">
        </div>
        {{/is_facebook}}

        {{#is_unknown_video}}
            {{#image}}
            <a href="{{original_link}}" target="_blank">
                <img
                    src="{{image}}"
                    width="100%"
                    class="unknown-video"
                    onerror="window.Stackla.WidgetManager.onAssetError('{{id}}')"/>
                <div class="stacklapopup-play-icon"></div>
            </a>
            {{/image}}
        {{/is_unknown_video}}



        </div>
    </div>
</div>
{{/is_ie8}}
{{/show_video}}
<!-- Video Embed Code (end) -->
</script>        <script type="text/html" id="tpl-product-list">
<div class="stacklapopup-products-wrap">
    <ul class="stacklapopup-products">
        {{#products}}
        <li class="stacklapopup-products-item" data-tag-id="{{id}}">
            {{#tag}}
            <a href="{{{custom_url}}}" target="_blank" class="stacklapoup-prodcuts-item-title-wrap">
                <h2 class="stacklapopup-products-item-title">{{tag}}</h2>
            </a>
            {{/tag}}
            {{#image_small_url}}
            <div class="stacklapopup-products-item-image">
                 <img src="{{{image_small_url}}}" width="{{image_small_width}}" height="{{image_small_height}}">
            </div>
            {{/image_small_url}}
            <div class="stacklapopup-products-item-content">
                {{#price}}
                <div class="stacklapopup-products-item-price">{{price}}</div>
                {{/price}}
                {{#description}}
                <p class="stacklapopup-products-item-description">{{description}}</p>
                {{/description}}
                <a href="{{{custom_url}}}" target="{{target}}" class="stacklapoup-prodcuts-item-button-wrap">
                    <span class="stacklapopup-products-item-button">{{cta_text}}</span>
                </a>
            </div>
            <a href="javascript:void(0)" title="Close" class="stacklapopup-products-item-close-link">Ã</a>
        </li>
        {{/products}}
    </ul>
</div>
</script>

        <script>
        window.Stackla = window.Stackla || {
            debug: false,
            widgetType: 'base_grid'
        };
        </script>
    </head>
    <body class="cf-*homepage-us">
        <div class="queue"></div>
<div class="track" style="">
    <div class="container"></div>
</div>


        <script src="https://assetscdn.stackla.com/media/js/widget/base-common.combine.65bce237.js"></script>

        <!--// Include socialHubConfig //-->
        <script type="text/javascript">

var stacklaSocialHub = {

    config: {userRole:0,comps:[]},

    showVote: function ( title ) {
        
        if ( typeof title === 'undefined' ) {
            return false;
        }

        var comps = this.config.comps;
        for (var i in comps) {
            // Viewable by none
            if (typeof comps[i].viewable !== 'undefined' && comps[i].viewable === -1 || typeof comps[i].voting_tags === 'undefined') {
                return false;
            }
            
            if (comps[i].voting_tags.length === 0) {
                if (this.config.userRole >= comps[i].viewable) {
                        return true;
                }
            } else {
                for (var j in title['tags']) {
                    if ($.inArray(title['tags'][j], comps[i].voting_tags) + 1) {
                        if (this.config.userRole >= comps[i].viewable) {
                            return true;
                        }
                    }
                }
            }
        }

        return false;
    },
    actionVote: function ( title ) {
        
        if ( typeof title === 'undefined' || !this.showVote(title)) {
            return false;
        }

        var comps = this.config.comps;
        for (var i in comps) {
            // Actionable by none
            if (typeof comps[i].actionable !== 'undefined' && comps[i].actionable === -1 || typeof comps[i].voting_tags === 'undefined') {
                return false;
            }
            if (comps[i].voting_tags.length === 0) {
                if (this.config.userRole >= comps[i].actionable) {
                    return true;
                }
            } else {
                for (var j in title['tags']) {
                    if ($.inArray(title['tags'][j], comps[i].voting_tags) + 1) {
                        if (this.config.userRole >= comps[i].actionable) {
                            return true;
                        }
                    }
                }
            }
        }

        return false;
    }

};
</script>

                    <script src="https://assetscdn.stackla.com/media/js/dist/trackla.combine.ca968318.js"></script>
<script>
(function() {
    if (window.Stackla && window.Stackla.Trackla) {
        new window.Stackla.Trackla({"stackId":"3215","tracklaEndPoint":"https:\/\/trackla.stackla.com"});
    }
}());
</script>
        
        <!-- Customisable Strings (start) -->
        <script>
        var Strings = {
            "load_more": "Load more",
            "loading": "Loading...",
            "scroll_load": "Loading...",
            "scroll_end": "There is no more content to be displayed."
        };
        </script>
        <!-- Customisable Strings (end) -->

        <!-- Last Slot (start) -->
        <script src="https://assetscdn.stackla.com/media/js/widget/base_grid.combine.e8130149.js"></script>

    <link rel="stylesheet" href="https://assetscdn.stackla.com/media/js/widget/base_grid/base_grid_old.combine.e3d5256e.css">
    
<script src="https://assetscdn.stackla.com/media/js/dist/base_grid.combine.e864c016.js"></script>

<!-- Custom JS (start) -->
<script>
/* global $, console */
/* jshint strict: false, maxparams: 5 */

// // Tips: Load the JavaScript libraries you need
// Stackla.loadJS([
//     'https://cdnjs.cloudflare.com/ajax/libs/slabText/2.3/jquery.slabtext.min.js'
// ]).then(function () {
//     // After all JS urls are loaded
// });

$(document).on('widget:ready', function (e, instance) {
    instance
        .on('init', function (e, instance) {
            //console.log(e.type, instance);
        })
        .on('load', function (e, listData) {
            /*
             *Name: Stackla CS Integration
             *Version: 1.0
             */

            var topDom = (function () {
                var i = 0,
                    domain = document.domain,
                    p = domain.split("."),
                    s = "_gd" + (new Date()).getTime();
                while (i < (p.length - 1) && document.cookie.indexOf(s + "=" + s) == -1) {
                    domain = p.slice(-1 - (++i)).join(".");
                    document.cookie = s + "=" + s + ";domain=" + domain + ";SameSite=None;Secure";
                }
                document.cookie = s + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=" + domain + ";";
                return domain;
            })();

            function readCookie(name) {
                var nameEQ = name + "=";
                var ca = document.cookie.split(";");
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == " ") c = c.substring(1, c.length);
                    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
                }
                return "";
            }

            var receiveMessage = function (f) {

                if (f && f.data && f.data.message && f.data.message === "Contentsquare_Stackla_Integration_Launch" && f.data.user_values) {
                    window.removeEventListener("message", receiveMessage, true);

                    var getCookieValues = f.data.user_values;

                    if (getCookieValues) {
                        var splitCookieValues = getCookieValues.split("|");
                        var ct_uid = splitCookieValues[0];
                        var _cs_id = splitCookieValues[1];
                        var _cs_s = splitCookieValues[2];
                        var _cs_c = splitCookieValues[3];
                        var _cs_optout = splitCookieValues[4];

                        if (_cs_id && _cs_s && _cs_c) {

                            if (ct_uid) {
                                document.cookie = "WRUID=" + ct_uid + ";domain=" + topDom + ";path=/;SameSite=None;Secure";
                            }

                            document.cookie = "_cs_id=" + _cs_id + ";domain=" + topDom + ";path=/;SameSite=None;Secure";
                            document.cookie = "_cs_s=" + _cs_s + ";domain=" + topDom + ";path=/;SameSite=None;Secure";
                            document.cookie = "_cs_c=" + _cs_c + ";domain=" + topDom + ";path=/;SameSite=None;Secure";

                            if (_cs_optout) {
                                document.cookie = "_cs_optout=" + _cs_optout + ";domain=" + topDom + ";path=/;SameSite=None;Secure";
                            } else {
                                document.cookie = "_cs_optout=;domain=" + topDom + ";path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;SameSite=None;Secure";
                                document.cookie = "_cs_optout=;domain=." + document.location.host + ";path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;SameSite=None;Secure";
                            }

                            var partition = "";
                            var guid = "";
                            var tag_id = "";
                            var src = "";

                            if (f.data.partition) {
                                partition = f.data.partition;
                                guid = f.data.guid;
                                src = "https://cdnssl.clicktale.net/" + partition + "/ptc/" + guid + ".js";
                            } else if (f.data.tag_id) {
                                tag_id = f.data.tag_id;
                                src = "https://t.contentsquare.net/uxa/" + tag_id + ".js";
                            }

                            if (src) {
                                var mt = document.createElement("script");
                                mt.type = "text/javascript";
                                mt.async = true;
                                mt.src = src;
                                document.getElementsByTagName("head")[0].appendChild(mt);

                                if (e && e.target && e.target.widget_id && e.target.widgetConfig && e.target.widgetConfig.name) {
                                    var widgetName = e.target.widgetConfig.name;
                                    var widgetID = e.target.widget_id;

                                    var pass_dvar_data = {
                                        "message": "Contentsquare_Stackla_SendDvar",
                                        "widget_name": widgetName,
                                        "widget_id": widgetID
                                    };

                                    window.top.postMessage(pass_dvar_data, document.referrer);
                                }
                            }
                        }
                    }
                }
            };

            window.addEventListener("message", receiveMessage, true);

            var pass_ready_data = {
                'message': 'Contentsquare_Stackla_Integration_Ready'
            };

            window.top.postMessage(pass_ready_data, document.referrer);

            function callback() {
                if (!disableCallback) {
                    disableCallback = true;

                    var pass_pv_data = {
                        "message": "Contentsquare_Stackla_Pageview",
                        "pv_value": readCookie("_cs_s")
                    };

                    window.top.postMessage(pass_pv_data, document.referrer);
                }
            }

            var disableCallback = false;

            window._uxa = window._uxa || [];
            _uxa.push(["afterPageView", callback]);
            //Stackla CS Integration End
        })
        .on('beforeRender', function (e, $appendRoot, listData) {
            //console.log(e.type, $appendRoot, listData);
        })
        .on('beforeIterate', function (e, tileData, tileId) {
            //console.log(e.type, tileData, tileId);
        })
        .on('iterate', function (e, tileData, tileHTML) {
            //console.log(e.type, tileData, tileHTML);
        })
        .on('beforeAppend', function (e, $tile, tileData, $appendRoot) {
            //console.log(e.type, $tile, tileData, $appendRoot);
        })
        .on('append', function (e, $tile, tileData, $appendRoot) {
            //console.log(e.type, $tile, tileData, $appendRoot);
        })
        .on('render', function (e, $appendRoot, listData) {
            //console.log(e.type, $appendRoot, listData);
        })
        .on('message', function (e, addedData, removeIDList) {
            //console.log(e.type, addedData, removeIDList);
		$('.load-more').attr('value', 'Load More');
        });
});
</script>
<!-- Custom JS (end) -->

<script>
(function () {
    var setting = _.assign({"parent_id":null,"name":"stackla_desktop_grid_shoppable","external_js":null,"config":{"lightbox":{"apply_custom_sharing_title_on_miss_title":false,"disable_short_url":false,"fallback_share_image":"","layout":"landscape","post_comments":false,"sharing_text":"","sharing_title":"","show_additional_info":true,"show_caption":true,"show_timestamp":false,"show_comments":false,"show_dislikes":false,"show_likes":false,"show_nav":true,"show_sharing":false,"show_shopspots":true,"show_products":true,"show_tags":false,"show_votes":false,"show_powered_by_stackla":false,"analytics":{"events":{"load":false,"tileExpand":true,"pinClick":false,"userClick":true,"shareClick":true,"moreLoad":true,"shopspotFlyoutExpand":true,"shopspotActionClick":true,"productActionClick":true,"impression":true,"hover":true,"likeClick":true,"dislikeClick":true,"voteClick":true},"nonInteractionEvents":{"load":false,"tileExpand":false,"pinClick":false,"userClick":false,"shareClick":false,"moreLoad":false,"shopspotFlyoutExpand":false,"shopspotActionClick":false,"productActionClick":false,"impression":false,"hover":false,"likeClick":false,"dislikeClick":false,"voteClick":false},"categoryName":"","enabledCustomCategoryName":false,"eventLabel":"default","accountId":"44790758","trackingId":"UA-44790758-2","viewId":"86295777"}}},"id":"71386","guid":"5ee914688ec7f","stack_id":"3215","filter":[],"style":{"click_through_url":"[EXPAND]","margin":10,"name":"stackla_desktop_grid_shoppable","rows":3,"show_powered_by_stackla":false,"shopspot_btn_background":"0198CF","shopspot_btn_font_color":"ffffff","shopspot_icon":"","style":"base_grid","tile_size":"large","type":"fluid","widget_background":"transparent","load_more_type":"button"},"css":"","custom_css":"@import url(https:\/\/cdn.jsdelivr.net\/npm\/@smiledirectclub\/sds-globals@1.6.0\/dist\/tokens\/css\/sds-tokens.css);\r\n@import url(https:\/\/cdn.jsdelivr.net\/npm\/@smiledirectclub\/sds-globals\/dist\/assets\/fonts\/SofiaPro\/SofiaPro.css);\r\n\/** HTML & Class Names Structure\r\n * .tile\r\n *   .tile-detail\r\n *     .tile-caption\r\n *     .tile-user\r\n *       i.tile-user-source\r\n *       a.tile-user-link\r\n *         span.tile-user-handle\r\n *   .tile-image\r\n *   .tile-source\r\n *\/\r\n.tile-detail {\r\n  background: rgba(87, 0, 255, 0.75);\r\n  transition: opacity 200ms cubic-bezier(0.2, 0.51, 0.76, 0.72);\r\n}\r\n.tile-caption {\r\n  display: none;\r\n}\r\n.tile-user {\r\n  display: none;\r\n}\r\n.tile-source {\r\n  display: none;\r\n}\r\n.tile-icon {\r\n  opacity: 0;\r\n  transition: opacity 200ms cubic-bezier(0.2, 0.51, 0.76, 0.72);\r\n}\r\n.tile:hover .tile-icon {\r\n  opacity: 1;\r\n  top: calc(50% - 10px);\r\n  left: calc(50% - 10px);\r\n  position: absolute;\r\n  z-index: 50;\r\n}\r\n.load-more--button {\r\n  background: none;\r\n  width: 300px !important;\r\n  border: 2px solid #5700FF;\r\n  border-radius: 28px;\r\n  margin: 0 auto;\r\n  letter-spacing: 0.2px;\r\n  font-size: 14px;\r\n  font-family: Sofia Black, Sofia Pro Black, Sofia Pro, Helvetica, Arial, sans-serif;\r\n  font-weight: 600;\r\n  color: #5700FF;\r\n}\r\n.load-more--button:hover {\r\n  background: #5700ff;\r\n  opacity: .9;\r\n  color: white;\r\n}\r\n\/*.load-more--button:before {\t\r\n\tcontent: \"Load More\";\r\n\tfont-size: 14px;\r\n}*\/\r\n","custom_js":"\/* global $, console *\/\r\n\/* jshint strict: false, maxparams: 5 *\/\r\n\r\n\/\/ \/\/ Tips: Load the JavaScript libraries you need\r\n\/\/ Stackla.loadJS([\r\n\/\/     'https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/slabText\/2.3\/jquery.slabtext.min.js'\r\n\/\/ ]).then(function () {\r\n\/\/     \/\/ After all JS urls are loaded\r\n\/\/ });\r\n\r\n$(document).on('widget:ready', function (e, instance) {\r\n    instance\r\n        .on('init', function (e, instance) {\r\n            \/\/console.log(e.type, instance);\r\n        })\r\n        .on('load', function (e, listData) {\r\n            \/*\r\n             *Name: Stackla CS Integration\r\n             *Version: 1.0\r\n             *\/\r\n\r\n            var topDom = (function () {\r\n                var i = 0,\r\n                    domain = document.domain,\r\n                    p = domain.split(\".\"),\r\n                    s = \"_gd\" + (new Date()).getTime();\r\n                while (i < (p.length - 1) && document.cookie.indexOf(s + \"=\" + s) == -1) {\r\n                    domain = p.slice(-1 - (++i)).join(\".\");\r\n                    document.cookie = s + \"=\" + s + \";domain=\" + domain + \";SameSite=None;Secure\";\r\n                }\r\n                document.cookie = s + \"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=\" + domain + \";\";\r\n                return domain;\r\n            })();\r\n\r\n            function readCookie(name) {\r\n                var nameEQ = name + \"=\";\r\n                var ca = document.cookie.split(\";\");\r\n                for (var i = 0; i < ca.length; i++) {\r\n                    var c = ca[i];\r\n                    while (c.charAt(0) == \" \") c = c.substring(1, c.length);\r\n                    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);\r\n                }\r\n                return \"\";\r\n            }\r\n\r\n            var receiveMessage = function (f) {\r\n\r\n                if (f && f.data && f.data.message && f.data.message === \"Contentsquare_Stackla_Integration_Launch\" && f.data.user_values) {\r\n                    window.removeEventListener(\"message\", receiveMessage, true);\r\n\r\n                    var getCookieValues = f.data.user_values;\r\n\r\n                    if (getCookieValues) {\r\n                        var splitCookieValues = getCookieValues.split(\"|\");\r\n                        var ct_uid = splitCookieValues[0];\r\n                        var _cs_id = splitCookieValues[1];\r\n                        var _cs_s = splitCookieValues[2];\r\n                        var _cs_c = splitCookieValues[3];\r\n                        var _cs_optout = splitCookieValues[4];\r\n\r\n                        if (_cs_id && _cs_s && _cs_c) {\r\n\r\n                            if (ct_uid) {\r\n                                document.cookie = \"WRUID=\" + ct_uid + \";domain=\" + topDom + \";path=\/;SameSite=None;Secure\";\r\n                            }\r\n\r\n                            document.cookie = \"_cs_id=\" + _cs_id + \";domain=\" + topDom + \";path=\/;SameSite=None;Secure\";\r\n                            document.cookie = \"_cs_s=\" + _cs_s + \";domain=\" + topDom + \";path=\/;SameSite=None;Secure\";\r\n                            document.cookie = \"_cs_c=\" + _cs_c + \";domain=\" + topDom + \";path=\/;SameSite=None;Secure\";\r\n\r\n                            if (_cs_optout) {\r\n                                document.cookie = \"_cs_optout=\" + _cs_optout + \";domain=\" + topDom + \";path=\/;SameSite=None;Secure\";\r\n                            } else {\r\n                                document.cookie = \"_cs_optout=;domain=\" + topDom + \";path=\/;expires=Thu, 01-Jan-1970 00:00:01 GMT;SameSite=None;Secure\";\r\n                                document.cookie = \"_cs_optout=;domain=.\" + document.location.host + \";path=\/;expires=Thu, 01-Jan-1970 00:00:01 GMT;SameSite=None;Secure\";\r\n                            }\r\n\r\n                            var partition = \"\";\r\n                            var guid = \"\";\r\n                            var tag_id = \"\";\r\n                            var src = \"\";\r\n\r\n                            if (f.data.partition) {\r\n                                partition = f.data.partition;\r\n                                guid = f.data.guid;\r\n                                src = \"https:\/\/cdnssl.clicktale.net\/\" + partition + \"\/ptc\/\" + guid + \".js\";\r\n                            } else if (f.data.tag_id) {\r\n                                tag_id = f.data.tag_id;\r\n                                src = \"https:\/\/t.contentsquare.net\/uxa\/\" + tag_id + \".js\";\r\n                            }\r\n\r\n                            if (src) {\r\n                                var mt = document.createElement(\"script\");\r\n                                mt.type = \"text\/javascript\";\r\n                                mt.async = true;\r\n                                mt.src = src;\r\n                                document.getElementsByTagName(\"head\")[0].appendChild(mt);\r\n\r\n                                if (e && e.target && e.target.widget_id && e.target.widgetConfig && e.target.widgetConfig.name) {\r\n                                    var widgetName = e.target.widgetConfig.name;\r\n                                    var widgetID = e.target.widget_id;\r\n\r\n                                    var pass_dvar_data = {\r\n                                        \"message\": \"Contentsquare_Stackla_SendDvar\",\r\n                                        \"widget_name\": widgetName,\r\n                                        \"widget_id\": widgetID\r\n                                    };\r\n\r\n                                    window.top.postMessage(pass_dvar_data, document.referrer);\r\n                                }\r\n                            }\r\n                        }\r\n                    }\r\n                }\r\n            };\r\n\r\n            window.addEventListener(\"message\", receiveMessage, true);\r\n\r\n            var pass_ready_data = {\r\n                'message': 'Contentsquare_Stackla_Integration_Ready'\r\n            };\r\n\r\n            window.top.postMessage(pass_ready_data, document.referrer);\r\n\r\n            function callback() {\r\n                if (!disableCallback) {\r\n                    disableCallback = true;\r\n\r\n                    var pass_pv_data = {\r\n                        \"message\": \"Contentsquare_Stackla_Pageview\",\r\n                        \"pv_value\": readCookie(\"_cs_s\")\r\n                    };\r\n\r\n                    window.top.postMessage(pass_pv_data, document.referrer);\r\n                }\r\n            }\r\n\r\n            var disableCallback = false;\r\n\r\n            window._uxa = window._uxa || [];\r\n            _uxa.push([\"afterPageView\", callback]);\r\n            \/\/Stackla CS Integration End\r\n        })\r\n        .on('beforeRender', function (e, $appendRoot, listData) {\r\n            \/\/console.log(e.type, $appendRoot, listData);\r\n        })\r\n        .on('beforeIterate', function (e, tileData, tileId) {\r\n            \/\/console.log(e.type, tileData, tileId);\r\n        })\r\n        .on('iterate', function (e, tileData, tileHTML) {\r\n            \/\/console.log(e.type, tileData, tileHTML);\r\n        })\r\n        .on('beforeAppend', function (e, $tile, tileData, $appendRoot) {\r\n            \/\/console.log(e.type, $tile, tileData, $appendRoot);\r\n        })\r\n        .on('append', function (e, $tile, tileData, $appendRoot) {\r\n            \/\/console.log(e.type, $tile, tileData, $appendRoot);\r\n        })\r\n        .on('render', function (e, $appendRoot, listData) {\r\n            \/\/console.log(e.type, $appendRoot, listData);\r\n        })\r\n        .on('message', function (e, addedData, removeIDList) {\r\n            \/\/console.log(e.type, addedData, removeIDList);\r\n\t\t$('.load-more').attr('value', 'Load More');\r\n        });\r\n});\r\n","lightbox_custom_js":"\/* global Stackla, console, $tackla *\/\r\n\/* jshint strict: false *\/\r\n\/\/ Events\r\nStackla.WidgetManager\r\n    .on('load', function (e, data) {\r\n        \/\/ console.log(e.type, data.filterId, data.hashId, data.styleName, data.uniqueId, data.widgetId, data.widgetType);\r\n    })\r\n    .on('tileExpand', function (e, data) {\r\n        \/\/ console.log(e.type, data.expandType,  data.tileData,  data.widgetId);\r\n    })\r\n    .on('beforeExpandedTileOpen', function (e, data) {\r\n        \/\/ console.log(e.type, data.el, data.tileData,  data.widgetId);\r\n    })\r\n    .on('expandedTileImageLoad', function (e, data) {\r\n        \/\/ console.log(e.type, data.el, data.tileEl, data.widgetId);\r\n    })\r\n    .on('beforeExpandedTileImageResize', function (e, data) {\r\n        \/\/ console.log(e.type, data.sizes, data.el, data.tileEl, data.widgetId);\r\n    })\r\n    .on('expandedTileOpen', function (e, data) {\r\n        \/\/ console.log(e.type, data.el, data.tileData,  data.widgetId);\r\n\t\t\/\/ console.log(\"Check for avatar\");\r\n\t\r\n\t\tif( document.querySelector('.stacklapopup-avatar-wrapper').innerHTML.trim().length > 0 ) {\r\n\t\t\tdocument.querySelector('.stacklapopup-source').setAttribute(\"style\", \"display:none;\");\r\n\t\t}\r\n\t\r\n\t\tdocument.querySelector('.stacklapopup-caption-paragraph').setAttribute('class', 'sds-Text--caption');\r\n\t\tdocument.querySelector('.stacklapopup-user-handle').setAttribute('class', 'sds-Text--footnote');\r\n\t\r\n\t\tvar footerArea = document.querySelector('.stacklapopup-footer');\r\n\t\tvar newDiv = document.createElement('div');\r\n\t\tnewDiv.setAttribute('class', 'ctaBox');\r\n\t\r\n\t\tvar ctaCopy = document.createElement('p');\r\n\t\tctaCopy.setAttribute('class', 'ctaCopy sds-Text--caption');\r\n\t\tvar ctaMessage = document.createTextNode(\"Get started on a smile you'll love by taking our free Smile Assessment.\");\r\n\t\tctaCopy.appendChild(ctaMessage);\r\n\t\r\n\t\tvar ctaButton = document.createElement('a');\r\n\t\tvar ctaButtonCopy = document.createTextNode(\"Am I A Candidate?\");\r\n\t\tctaButton.setAttribute('class', 'sds-Button sds-Button--extraSmall');\r\n\t\tctaButton.setAttribute('href', 'https:\/\/smiledirectclub.com\/smile_assessment');\r\n\t\tctaButton.appendChild(ctaButtonCopy);\r\n\t\tnewDiv.appendChild(ctaCopy);\r\n\t\tnewDiv.appendChild(ctaButton);\r\n\t\tfooterArea.appendChild(newDiv);\r\n\t\r\n\t\t\/\/ Disable linking to social media profiles\r\n\t\tvar profileLink = document.querySelector('.stacklapopup-user-link');\r\n\t\tprofileLink.addEventListener('click', function (e) {\r\n\t\t\te.preventDefault();\r\n\t\t\te.stopPropagation();\r\n\t\t});\r\n\t\r\n\t\tvar avatarLink = document.querySelector('.stacklapopup-avatar-link');\r\n\t\tavatarLink.addEventListener('click', function (e) {\r\n\t\t\te.preventDefault();\r\n\t\t\te.stopPropagation();\r\n\t\t});\r\n\t\r\n\t\r\n\r\n    })\r\n    .on('expandedTileImageResize', function (e, data) {\r\n        \/\/ console.log(e.type, data.sizes, data.el, data.tileEl, data.widgetId);\r\n    })\r\n    .on('userClick', function (e, data) {\r\n        \/\/ console.log(e.type, data.tileData, data.widgetId);\r\n    })\r\n    .on('shareClick', function (e, data) {\r\n        \/\/ console.log(e.type, data.shareNetwork, data.tileData, data.widgetId);\r\n    })\r\n    .on('moreLoad', function (e, data) {\r\n        \/\/ console.log(e.type, data.page, data.widgetId);\r\n    })\r\n    .on('shopspotFlyoutExpand', function (e, data) {\r\n        \/\/ console.log(e.type, data.productTag, data.tileData, data.widgetId);\r\n\t\t\tdocument.querySelector('.stacklapopup-shopspot-flyout-image').appendChild(document.querySelector('.stacklapopup-shopspot-flyout-button'));\r\n    })\r\n    .on('shopspotActionClick', function (e, data) {\r\n        \/\/ console.log(e.type, data.productTag, data.tileData, data.widgetId);\r\n    })\r\n    .on('productActionClick', function (e, data) {\r\n        \/\/ console.log(e.type, data.productTag, data.tileData, data.widgetId);\r\n    });\r\n\r\n\/\/ Methods\r\n\/\/ Stackla.WidgetManager.postMessage(typeName, data, [widgetId])\r\n\/\/ Stackla.WidgetManager.sync();\r\n\/\/ Stackla.WidgetManager.search(widgetId, keyword);\r\n\/\/ Stackla.WidgetManager.changeFilter(widgetId, filterId);","lightbox_custom_css":"@import url(https:\/\/cdn.jsdelivr.net\/npm\/@smiledirectclub\/sds-globals\/dist\/assets\/fonts\/SofiaPro\/SofiaPro.css);\r\n@import url(https:\/\/cdn.jsdelivr.net\/npm\/@smiledirectclub\/sds-css@1.6.1\/dist\/sds-css--all.css);\r\n.stacklapopup,\r\n.sdc-cms .stacklapopup {\r\n  font-family: \"Sofia Pro\", Helvetica, Arial, sans-serif;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  \/*\r\n\t&-panel-right .stacklapopup-caption .sds-Text--caption {\r\n\t\tmax-height: 20vh;\r\n\t\toverflow: scroll;\r\n\t\tfont-size: 14px;\r\n\t\t\r\n\t\t@media screen and (max-width: 768px) {\r\n\t\t\tmax-height: 35vh;\r\n\t\t}\r\n\t}\r\n\t*\/\r\n}\r\n.stacklapopup-bg,\r\n.sdc-cms .stacklapopup-bg {\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n}\r\n.stacklapopup-content,\r\n.sdc-cms .stacklapopup-content {\r\n  max-width: 75vw !important;\r\n}\r\n@media screen and (max-width: 768px) {\r\n  .stacklapopup-content,\r\n  .sdc-cms .stacklapopup-content {\r\n    max-width: 100vw !important;\r\n    margin-top: -10px;\r\n  }\r\n}\r\n@media screen and (min-width: 1680px) {\r\n  .stacklapopup-content,\r\n  .sdc-cms .stacklapopup-content {\r\n    max-width: 60vw !important;\r\n  }\r\n}\r\n.stacklapopup-content-wrap,\r\n.sdc-cms .stacklapopup-content-wrap {\r\n  border-radius: 8px;\r\n}\r\n.stacklapopup-panel,\r\n.sdc-cms .stacklapopup-panel {\r\n  display: flex;\r\n  align-items: stretch;\r\n}\r\n.stacklapopup-panel-left,\r\n.sdc-cms .stacklapopup-panel-left {\r\n  border-radius: 8px;\r\n  width: 60%;\r\n}\r\n.stacklapopup-panel-left .stacklapopup-shopspot,\r\n.sdc-cms .stacklapopup-panel-left .stacklapopup-shopspot {\r\n  background-color: transparent !important;\r\n}\r\n.stacklapopup-panel-left .stacklapopup-shopspot-hover,\r\n.sdc-cms .stacklapopup-panel-left .stacklapopup-shopspot-hover {\r\n  box-shadow: none !important;\r\n}\r\n.stacklapopup-panel-left .stacklapopup-shopspot .stacklapopup-shopspot-icon,\r\n.sdc-cms .stacklapopup-panel-left .stacklapopup-shopspot .stacklapopup-shopspot-icon {\r\n  background: #5700ff !important;\r\n  box-shadow: #ffffff 0px 0px 0px 5px !important;\r\n}\r\n.stacklapopup-panel-left .stacklapopup-shopspot-flyout,\r\n.sdc-cms .stacklapopup-panel-left .stacklapopup-shopspot-flyout {\r\n  border-radius: 8px !important;\r\n  padding: 0px;\r\n}\r\n.stacklapopup-panel-left .stacklapopup-shopspot-flyout-image,\r\n.sdc-cms .stacklapopup-panel-left .stacklapopup-shopspot-flyout-image {\r\n  position: relative;\r\n}\r\n.stacklapopup-panel-left .stacklapopup-shopspot-flyout-text,\r\n.sdc-cms .stacklapopup-panel-left .stacklapopup-shopspot-flyout-text {\r\n  padding: 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-wrap: nowrap;\r\n}\r\n.stacklapopup-panel-left .stacklapopup-shopspot-flyout-title,\r\n.sdc-cms .stacklapopup-panel-left .stacklapopup-shopspot-flyout-title {\r\n  font-family: \"Sofia Pro\", Helvetica, Arial, sans-serif;\r\n  font-weight: 700;\r\n  font-size: 24px;\r\n  font-style: normal;\r\n  flex: 0 1 auto;\r\n  margin-right: 5px;\r\n}\r\n.stacklapopup-panel-left .stacklapopup-shopspot-flyout-price,\r\n.sdc-cms .stacklapopup-panel-left .stacklapopup-shopspot-flyout-price {\r\n  display: none !important;\r\n}\r\n.stacklapopup-panel-left .stacklapopup-shopspot-flyout-button,\r\n.sdc-cms .stacklapopup-panel-left .stacklapopup-shopspot-flyout-button {\r\n  flex: 0 0 auto;\r\n  border-radius: 25px;\r\n  border: 2px solid #5700ff;\r\n  font-family: \"Sofia Pro\", Helvetica, Arial, sans-serif;\r\n  font-weight: 700;\r\n  font-size: 16px;\r\n  font-style: normal;\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n  padding: 12px 20px;\r\n}\r\n.stacklapopup-panel-left .stacklapopup-shopspot-flyout-button-text,\r\n.sdc-cms .stacklapopup-panel-left .stacklapopup-shopspot-flyout-button-text {\r\n  color: #5700ff !important;\r\n}\r\n.stacklapopup-panel-left .stacklapopup-shopspot-flyout-close-link,\r\n.sdc-cms .stacklapopup-panel-left .stacklapopup-shopspot-flyout-close-link {\r\n  top: 10px !important;\r\n  left: 0 !important;\r\n  background: none !important;\r\n  color: #5700ff !important;\r\n  box-shadow: none !important;\r\n}\r\n.stacklapopup-panel-right,\r\n.sdc-cms .stacklapopup-panel-right {\r\n  width: 40%;\r\n  vertical-align: top;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-content: space-evenly;\r\n}\r\n@media screen and (max-width: 768px) {\r\n  .stacklapopup-panel,\r\n  .sdc-cms .stacklapopup-panel {\r\n    flex-wrap: wrap;\r\n  }\r\n  .stacklapopup-panel-left,\r\n  .sdc-cms .stacklapopup-panel-left,\r\n  .stacklapopup-panel-right,\r\n  .sdc-cms .stacklapopup-panel-right {\r\n    width: 100%;\r\n  }\r\n}\r\n.stacklapopup-panel-right .stacklapopup-footer,\r\n.sdc-cms .stacklapopup-panel-right .stacklapopup-footer {\r\n  flex: 0 0 auto;\r\n}\r\n.stacklapopup-close,\r\n.sdc-cms .stacklapopup-close {\r\n  font-size: 13px;\r\n  width: 30px;\r\n  height: 30px;\r\n  padding: 7px;\r\n}\r\n.stacklapopup-close:hover,\r\n.sdc-cms .stacklapopup-close:hover,\r\n.stacklapopup-close:focus,\r\n.sdc-cms .stacklapopup-close:focus,\r\n.stacklapopup-close:active .stacklapopup-arrow,\r\n.stacklapopup-close:active .sdc-cms .stacklapopup-arrow,\r\n.sdc-cms .stacklapopup-close:active .stacklapopup-arrow,\r\n.sdc-cms .stacklapopup-close:active .sdc-cms .stacklapopup-arrow {\r\n  color: var(--token-color-core-blurple);\r\n}\r\n@media screen and (max-width: 480px) {\r\n  .stacklapopup-close,\r\n  .sdc-cms .stacklapopup-close,\r\n  .stacklapopup-close:hover,\r\n  .sdc-cms .stacklapopup-close:hover {\r\n    background: rgba(63, 63, 63, 0.8);\r\n    color: white;\r\n  }\r\n}\r\n.stacklapopup-arrow,\r\n.sdc-cms .stacklapopup-arrow {\r\n  font-size: 24px;\r\n  height: 44px;\r\n  width: 44px;\r\n  background: rgba(0, 0, 0, 0.6);\r\n  color: white;\r\n  box-shadow: none;\r\n}\r\n@media screen and (max-width: 480px) {\r\n  .stacklapopup-arrow,\r\n  .sdc-cms .stacklapopup-arrow {\r\n    position: absolute;\r\n    top: 225px;\r\n  }\r\n}\r\n.stacklapopup-arrow-icon,\r\n.sdc-cms .stacklapopup-arrow-icon {\r\n  height: 44px;\r\n  width: 44px;\r\n}\r\n@media screen and (max-width: 480px) {\r\n  .stacklapopup-arrow-left,\r\n  .sdc-cms .stacklapopup-arrow-left {\r\n    left: 10px;\r\n  }\r\n  .stacklapopup-arrow-right,\r\n  .sdc-cms .stacklapopup-arrow-right {\r\n    right: 10px;\r\n  }\r\n}\r\n.stacklapopup-arrow-left .stacklapopup-arrow-icon:before,\r\n.stacklapopup-arrow-left .sdc-cms .stacklapopup-arrow-icon:before,\r\n.sdc-cms .stacklapopup-arrow-left .stacklapopup-arrow-icon:before,\r\n.sdc-cms .stacklapopup-arrow-left .sdc-cms .stacklapopup-arrow-icon:before {\r\n  position: absolute;\r\n  left: 8px;\r\n  top: 10px;\r\n}\r\n.stacklapopup-arrow-right .stacklapopup-arrow-icon:before,\r\n.stacklapopup-arrow-right .sdc-cms .stacklapopup-arrow-icon:before,\r\n.sdc-cms .stacklapopup-arrow-right .stacklapopup-arrow-icon:before,\r\n.sdc-cms .stacklapopup-arrow-right .sdc-cms .stacklapopup-arrow-icon:before {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 0px;\r\n}\r\n.stacklapopup-source,\r\n.sdc-cms .stacklapopup-source {\r\n  background: #5700ff;\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 40px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: white;\r\n  font-size: 26px;\r\n  margin-right: 0;\r\n}\r\n.stacklapopup-user-link,\r\n.sdc-cms .stacklapopup-user-link {\r\n  padding-left: 8px;\r\n}\r\n.stacklapopup-user-link:hover,\r\n.sdc-cms .stacklapopup-user-link:hover {\r\n  cursor: default;\r\n}\r\n.stacklapopup-avatar-image,\r\n.sdc-cms .stacklapopup-avatar-image {\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n.stacklapopup-avatar-image:hover,\r\n.sdc-cms .stacklapopup-avatar-image:hover {\r\n  cursor: default;\r\n}\r\n.stacklapopup-user-info-wrapper,\r\n.sdc-cms .stacklapopup-user-info-wrapper {\r\n  margin-left: 0px;\r\n}\r\n.stacklapopup-user-name,\r\n.sdc-cms .stacklapopup-user-name {\r\n  font-weight: bold;\r\n  font-size: 13px !important;\r\n  color: black;\r\n}\r\n.stacklapopup-user-handle,\r\n.sdc-cms .stacklapopup-user-handle {\r\n  font-size: 12px !important;\r\n  color: #5700ff;\r\n}\r\n.stacklapopup-user-bottom .sds-Text--footnote,\r\n.sdc-cms .stacklapopup-user-bottom .sds-Text--footnote {\r\n  color: #5700ff;\r\n  font-weight: bold;\r\n}\r\n.stacklapopup-caption,\r\n.sdc-cms .stacklapopup-caption {\r\n  font-size: 16px !important;\r\n  text-align: left;\r\n  padding-left: 5px;\r\n  font-family: \"Sofia Pro\", Helvetica, Arial, sans-serif;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  flex-grow: 2;\r\n  width: 100%;\r\n}\r\n.stacklapopup-caption .sds-Text--caption,\r\n.sdc-cms .stacklapopup-caption .sds-Text--caption {\r\n  font-size: 16px !important;\r\n}\r\n.stacklapopup-twitter-intent-wrapper,\r\n.sdc-cms .stacklapopup-twitter-intent-wrapper {\r\n  display: none;\r\n}\r\n.stacklapopup-products-item,\r\n.sdc-cms .stacklapopup-products-item {\r\n  border: none;\r\n  border-top: 2px solid #f5f5f5;\r\n}\r\n.stacklapopup-products-item-media,\r\n.sdc-cms .stacklapopup-products-item-media {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-wrap: nowrap;\r\n  flex-direction: row;\r\n}\r\n.stacklapopup-products-item-title,\r\n.sdc-cms .stacklapopup-products-item-title {\r\n  font-family: \"Sofia Pro\", Helvetica, Arial, sans-serif;\r\n  font-weight: 700;\r\n  font-style: normal;\r\n  margin-bottom: 15px;\r\n}\r\n.stacklapopup-products-item-price,\r\n.sdc-cms .stacklapopup-products-item-price {\r\n  display: none;\r\n}\r\n.stacklapopup-products-item-button,\r\n.sdc-cms .stacklapopup-products-item-button {\r\n  border-radius: 25px;\r\n  border: 2px solid #5700ff;\r\n  font-family: \"Sofia Pro\", Helvetica, Arial, sans-serif;\r\n  font-weight: 700;\r\n  font-style: normal;\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n  padding: 5px 10px;\r\n  color: #5700ff !important;\r\n}\r\n.stacklapopup-timestamp,\r\n.sdc-cms .stacklapopup-timestamp {\r\n  display: none;\r\n}\r\n.stacklapopup-footer .ctaBox,\r\n.sdc-cms .stacklapopup-footer .ctaBox {\r\n  width: 100%;\r\n  background: rgba(225, 225, 225, 0.4);\r\n  padding: var(--token-whitespace-x-3);\r\n  border-radius: 8px;\r\n  margin: 10px 0;\r\n  padding: 30px 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n}\r\n.stacklapopup-footer .ctaBox .ctaCopy,\r\n.sdc-cms .stacklapopup-footer .ctaBox .ctaCopy {\r\n  text-align: center;\r\n  margin-bottom: var(--token-whitespace-x-2);\r\n  font-family: \"Sofia Pro\", Helvetica, Arial, sans-serif;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  font-size: 16px !important;\r\n}\r\n.stacklapopup-footer .ctaBox .sds-Button,\r\n.sdc-cms .stacklapopup-footer .ctaBox .sds-Button {\r\n  border-radius: 5px;\r\n  border: 2px solid transparent;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  display: block;\r\n  font-family: Sofia Black, Sofia Pro Black, Sofia Pro, Helvetica, Arial, sans-serif;\r\n  font-weight: bold;\r\n  font-size: 13px;\r\n  line-height: 22px;\r\n  margin: 20px auto 0;\r\n  letter-spacing: 3px;\r\n  text-transform: uppercase;\r\n  padding: 15px 5px;\r\n  -ms-touch-action: manipulation;\r\n  touch-action: manipulation;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  width: 100%;\r\n}\r\n.stacklapopup-footer .ctaBox .ctaButton,\r\n.sdc-cms .stacklapopup-footer .ctaBox .ctaButton {\r\n  border: 2px solid var(--sds-Button-primary-color);\r\n  background: #5700ff;\r\n  color: white;\r\n  border-radius: 100px;\r\n  margin: 10px 0;\r\n  font-size: var(--token-text-size-body-small);\r\n  line-height: var(--token-text-line-height-base);\r\n  padding: 10px 8px;\r\n  width: fit-content;\r\n}\r\n.stacklapopup-wrap:not(.stacklapopup-mobile) .stacklapopup-panel-left .stacklapopup-shopspot .stacklapopup-shopspot-flyout .stacklapopup-shopspot-flyout-button {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  padding: 10px 20px;\r\n}\r\n","custom_tile":"","filter_id":"130942","slug":"smiledirectclub.stackla.com","status":"production","short_name":"smiledirectclub","stack_config":{"enable_text_indexes":null,"stackla_analytics":null,"disable_badword_content":"no","filter_by_claimed":null,"enable_brightcove_video_cloud":null,"shopspots":null,"enable_track_widget_load_time":null,"enable_trackla":1,"enable_trackla_on_gen1_widgets":null,"enable_old_widget_styling":true},"stub":"*homepage-us","widget_type_name":"Grid","widget_type_style":"base_grid","widget_type_gen":"2","custom_templates":{"tile":{"display_name":"Tile","html_id":"tile","mandatory":1,"use_default_template":0,"template":"<div\r\n    class=\"{{class_names}} {{tagClassNames}}\"\r\n    {{#position}}data-pin-position=\"{{position}}\"{{\/position}}\r\n    data-id=\"{{id}}\"\r\n    data-network=\"{{source}}\"\r\n    data-media=\"{{media}}\"\r\n    data-has-image=\"{{has_image}}\"\r\n    data-identity=\"{{source_user_id}}\"\r\n    data-width=\"{{photo_width}}\"\r\n    data-height=\"{{photo_height}}\"\r\n    {{#click_through_link}}data-click-through-link=\"{{click_through_link}}\"{{\/click_through_link}}\r\n    {{#click_through_url}}data-click-through-url=\"{{click_through_url}}\"{{\/click_through_url}}\r\n    {{^isInstagramVideo}}style=\"background-image: url('{{image_src}}');\"{{\/isInstagramVideo}}>\r\n    {{#is_audio}}\r\n    <div class=\"fs fs-volume-high tile-audio-play\"><\/div>\r\n    {{\/is_audio}}\r\n    {{#isInstagramVideo}}\r\n    <video width=\"100%\">\r\n        <source src={{mp4_url}} type=\"video\/mp4\" \/>\r\n    <\/video>\r\n    {{\/isInstagramVideo}}\r\n    {{#is_video}}\r\n    <div class=\"fs fs-play tile-video-play\"><\/div>\r\n    {{\/is_video}}\r\n    <div class=\"tile-detail\">\r\n        <div class=\"tile-caption\" data-message=\"{{message}}\">\r\n            {{#emoji}}{{{message}}}{{\/emoji}}\r\n        <\/div>\r\n        <div class=\"tile-user\">\r\n            <i class=\"tile-user-source fs fs-{{icon_name}}\"><\/i>\r\n            {{#show_user_info}}\r\n            {{#user_link}}\r\n            <a\r\n                class=\"tile-user-link\"\r\n                href=\"{{user_link}}\"\r\n                {{#user_link}} target=\"_blank\"{{\/user_link}}>\r\n                <span class=\"tile-user-handle\">{{user}}<\/span>\r\n            <\/a>\r\n            {{\/user_link}}\r\n            {{^user_link}}\r\n            <span class=\"tile-user-handle\">{{user}}<\/span>\r\n            {{\/user_link}}\r\n            {{\/show_user_info}}\r\n        <\/div>\r\n    <\/div>\r\n    <div\r\n        class=\"tile-image\"\r\n        style=\"width: {{photo_width}}px; height: {{photo_height}}px;\">\r\n    <\/div>\r\n    <div class=\"tile-source tile-source-{{source}}\">\r\n        <i class=\"fs fs-{{icon_name}}\"><\/i>\r\n    <\/div>\r\n\t<div class=\"tile-icon\">\r\n\t\t<img data-v-070bad99=\"\" src=\"data:image\/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT56b29tLWluLWljb248L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMTkuNywxOC4zIEwxNiwxNC42IEMxNy4yLDEzLjEgMTgsMTEuMSAxOCw5IEMxOCw0IDE0LDAgOSwwIEM0LDAgMCw0IDAsOSBDMCwxNCA0LDE4IDksMTggQzExLjEsMTggMTMuMSwxNy4zIDE0LjYsMTYgTDE4LjMsMTkuNyBDMTguNSwxOS45IDE4LjgsMjAgMTksMjAgQzE5LjIsMjAgMTkuNSwxOS45IDE5LjcsMTkuNyBDMjAuMSwxOS4zIDIwLjEsMTguNyAxOS43LDE4LjMgWiBNMiw5IEMyLDUuMSA1LjEsMiA5LDIgQzEyLjksMiAxNiw1LjEgMTYsOSBDMTYsMTAuOSAxNS4yLDEyLjcgMTQsMTMuOSBDMTQsMTMuOSAxNCwxMy45IDE0LDEzLjkgQzE0LDEzLjkgMTQsMTMuOSAxNCwxMy45IEMxMi43LDE1LjIgMTEsMTUuOSA5LjEsMTUuOSBDNS4xLDE2IDIsMTIuOSAyLDkgWiBNMTMsOSBDMTMsOS42IDEyLjYsMTAgMTIsMTAgTDEwLDEwIEwxMCwxMiBDMTAsMTIuNiA5LjYsMTMgOSwxMyBDOC40LDEzIDgsMTIuNiA4LDEyIEw4LDEwIEw2LDEwIEM1LjQsMTAgNSw5LjYgNSw5IEM1LDguNCA1LjQsOCA2LDggTDgsOCBMOCw2IEM4LDUuNCA4LjQsNSA5LDUgQzkuNiw1IDEwLDUuNCAxMCw2IEwxMCw4IEwxMiw4IEMxMi42LDggMTMsOC40IDEzLDkgWiIgaWQ9InBhdGgtMSI+PC9wYXRoPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8dXNlIGlkPSJ6b29tLWluLWljb24iIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICA8L2c+Cjwvc3ZnPg==\" alt=\"\">\r\n\t<\/div>\r\n<\/div>\r\n","created":"2021-05-20 19:22:56","modified":"0000-00-00 00:00:00"}},"enable_old_widget_styling":null,"click_through_url":"{\"ct\":\"[EXPAND]\",\"domain\":\"widget.stackla.com\"}","search":null,"tags":null,"data_tags":null,"tile_id":null,"tags_grouped_as":null,"geohash":null,"widget_id":"71386","competition":[],"tag_group":null,"available_products_only":null,"permission":{"claim":false,"shopspot":true,"analytics":true,"google_ads":false},"templates":{"tile":{"display_name":"Tile","html_id":"tile","mandatory":1,"use_default_template":0,"template":"<div\r\n    class=\"{{class_names}} {{tagClassNames}}\"\r\n    {{#position}}data-pin-position=\"{{position}}\"{{\/position}}\r\n    data-id=\"{{id}}\"\r\n    data-network=\"{{source}}\"\r\n    data-media=\"{{media}}\"\r\n    data-has-image=\"{{has_image}}\"\r\n    data-identity=\"{{source_user_id}}\"\r\n    data-width=\"{{photo_width}}\"\r\n    data-height=\"{{photo_height}}\"\r\n    {{#click_through_link}}data-click-through-link=\"{{click_through_link}}\"{{\/click_through_link}}\r\n    {{#click_through_url}}data-click-through-url=\"{{click_through_url}}\"{{\/click_through_url}}\r\n    {{^isInstagramVideo}}style=\"background-image: url('{{image_src}}');\"{{\/isInstagramVideo}}>\r\n    {{#is_audio}}\r\n    <div class=\"fs fs-volume-high tile-audio-play\"><\/div>\r\n    {{\/is_audio}}\r\n    {{#isInstagramVideo}}\r\n    <video width=\"100%\">\r\n        <source src={{mp4_url}} type=\"video\/mp4\" \/>\r\n    <\/video>\r\n    {{\/isInstagramVideo}}\r\n    {{#is_video}}\r\n    <div class=\"fs fs-play tile-video-play\"><\/div>\r\n    {{\/is_video}}\r\n    <div class=\"tile-detail\">\r\n        <div class=\"tile-caption\" data-message=\"{{message}}\">\r\n            {{#emoji}}{{{message}}}{{\/emoji}}\r\n        <\/div>\r\n        <div class=\"tile-user\">\r\n            <i class=\"tile-user-source fs fs-{{icon_name}}\"><\/i>\r\n            {{#show_user_info}}\r\n            {{#user_link}}\r\n            <a\r\n                class=\"tile-user-link\"\r\n                href=\"{{user_link}}\"\r\n                {{#user_link}} target=\"_blank\"{{\/user_link}}>\r\n                <span class=\"tile-user-handle\">{{user}}<\/span>\r\n            <\/a>\r\n            {{\/user_link}}\r\n            {{^user_link}}\r\n            <span class=\"tile-user-handle\">{{user}}<\/span>\r\n            {{\/user_link}}\r\n            {{\/show_user_info}}\r\n        <\/div>\r\n    <\/div>\r\n    <div\r\n        class=\"tile-image\"\r\n        style=\"width: {{photo_width}}px; height: {{photo_height}}px;\">\r\n    <\/div>\r\n    <div class=\"tile-source tile-source-{{source}}\">\r\n        <i class=\"fs fs-{{icon_name}}\"><\/i>\r\n    <\/div>\r\n\t<div class=\"tile-icon\">\r\n\t\t<img data-v-070bad99=\"\" src=\"data:image\/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT56b29tLWluLWljb248L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMTkuNywxOC4zIEwxNiwxNC42IEMxNy4yLDEzLjEgMTgsMTEuMSAxOCw5IEMxOCw0IDE0LDAgOSwwIEM0LDAgMCw0IDAsOSBDMCwxNCA0LDE4IDksMTggQzExLjEsMTggMTMuMSwxNy4zIDE0LjYsMTYgTDE4LjMsMTkuNyBDMTguNSwxOS45IDE4LjgsMjAgMTksMjAgQzE5LjIsMjAgMTkuNSwxOS45IDE5LjcsMTkuNyBDMjAuMSwxOS4zIDIwLjEsMTguNyAxOS43LDE4LjMgWiBNMiw5IEMyLDUuMSA1LjEsMiA5LDIgQzEyLjksMiAxNiw1LjEgMTYsOSBDMTYsMTAuOSAxNS4yLDEyLjcgMTQsMTMuOSBDMTQsMTMuOSAxNCwxMy45IDE0LDEzLjkgQzE0LDEzLjkgMTQsMTMuOSAxNCwxMy45IEMxMi43LDE1LjIgMTEsMTUuOSA5LjEsMTUuOSBDNS4xLDE2IDIsMTIuOSAyLDkgWiBNMTMsOSBDMTMsOS42IDEyLjYsMTAgMTIsMTAgTDEwLDEwIEwxMCwxMiBDMTAsMTIuNiA5LjYsMTMgOSwxMyBDOC40LDEzIDgsMTIuNiA4LDEyIEw4LDEwIEw2LDEwIEM1LjQsMTAgNSw5LjYgNSw5IEM1LDguNCA1LjQsOCA2LDggTDgsOCBMOCw2IEM4LDUuNCA4LjQsNSA5LDUgQzkuNiw1IDEwLDUuNCAxMCw2IEwxMCw4IEwxMiw4IEMxMi42LDggMTMsOC40IDEzLDkgWiIgaWQ9InBhdGgtMSI+PC9wYXRoPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8dXNlIGlkPSJ6b29tLWluLWljb24iIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICA8L2c+Cjwvc3ZnPg==\" alt=\"\">\r\n\t<\/div>\r\n<\/div>\r\n","created":"2021-05-20 19:22:56","modified":"0000-00-00 00:00:00"}},"domain":"widget.stackla.com","im_domain":"im.stackla.com","tracking_pixel_domain":"stp.stack.la","stack":{"skipLogging":false},"ttl":60}, {
        container: '.container',
        appendRoot: '.queue',
        media: {
            exclude: ['text']
        },
        request_params: Stackla.Display.Util.getUrlParams(),
        strings: window.Strings || {}
    });

    // FIXME - Avoid to use global variable
    window.Stackla = window.Stackla || {};
    window.Stackla = _.assign(window.Stackla, {
        debug: false,
        widgetType: setting.widget_type_style,
        widgetOptions: setting
    });

    (new Stackla.GridWidget(setting)).render();
}());
</script>
        <!-- Last Slot (end) -->

        
        <script src="https://assetscdn.stackla.com/media/js/dist/impressions.combine.c09e534d.js"></script>
    </body>
</html>
