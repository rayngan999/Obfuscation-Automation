var webshop=window.webshop=window.webshop||{};webshop.analytics=webshop.analytics||{};webshop.analytics.criteo=(function(document,$,Backbone){"use strict";var properties={clickBeaconAttributeName:'data-si-click-beacon',clickBeaconAttributeSelector:'[data-si-click-beacon]',pageBeaconAttributeName:'data-si-page-beacon',pageBeaconAttributeSelector:'[data-si-page-beacon]',viewBeaconAttributeName:'data-si-view-beacon'};function managePageBeacons(){var $elementWithPageBeaconAttribute=$(properties.pageBeaconAttributeSelector);fireBeacon($elementWithPageBeaconAttribute.attr(properties.pageBeaconAttributeName));$(properties.clickBeaconAttributeSelector).each(manageProductRelatedBeacons);}
function manageProductRelatedBeacons(_,productNode){var clickBeacon=productNode.getAttribute(properties.clickBeaconAttributeName);var viewBeacon=productNode.getAttribute(properties.viewBeaconAttributeName);$(productNode).one('click.criteo',function(){fireBeacon(clickBeacon);});fireBeacon(viewBeacon);}
function fireBeacon(beacon){if(!beacon){return;}
var img=new Image();img.src=beacon;document.body.appendChild(img);}
return{init:function(){if(!Backbone.Webshop.mixins.isBetaFeatureEnabled('CRITEO_ADS')){return;}
setTimeout(managePageBeacons,0);}};}(document,jQ,Backbone));