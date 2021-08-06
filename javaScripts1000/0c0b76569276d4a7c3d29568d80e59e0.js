/*! talkable-integration v4.5.7 | (c) Talkable | talkable.com */
"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),function(window,document,JSON,Object){var anotherIntegration=window.talkable||window.curebit,talkable=window.talkable=function(){var customerData={},UUID_KEY="tkbl_cvuuid",UUID_REGEXP=/^[0-9a-f]{8}-[0-9a-f]{4}-[34][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/,LOYALTY_OPTIN_KEY="tkbl_loyalty_optin",EMPTY_PLACEMENTS=["0"],IOS_REGEXP=/(iPad|iPhone|iPod)/i,ANDROID_REGEXP=/Android/i,MOBILE_PLATFORM_REGEXP=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,MOBILE_DEVICE_REGEXP=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,config={testing:!1,debug:!1,verify_integration:!1,site_id:"",server:"https://www.talkable.com",version:"4.5.7",queue_check_interval:200,async:!1,url_length_limit:2e3,email_capture_show_offer:!0,email_capture_show_timeout:10,integration_platform:""},utils={lastLoadedIframeName:[],gleamRewardCallback:void 0,placements:[],log:function(message,source){"undefined"!=typeof window.console&&config.debug&&(source=source||"all-"+config.version,console.log(source+" >> "+message))},isObject:function(arg){return"[object Object]"===Object.prototype.toString.call(arg)},serialize:function(object,prefix){var i,key;if(!object)return"";if(!prefix&&!this.isObject(object))throw new Error("Url parameters should be a javascript hash");var s=[];if(Array.isArray(object))for(i=0,object.length;i<object.length;++i)s.push(this.serialize(object[i],prefix+"[]"));else if(this.isObject(object)){for(key in object)if(this.hasProperty(object,key)){var prop=object[key];if(null!=prop){0===prop&&(prop=prop.toString()),null!=prefix&&(key=""+prefix+"["+key+"]");var fragment=this.serialize(prop,key);fragment&&s.push(this.serialize(prop,key))}}}else object&&s.push(""+encodeURIComponent(prefix.toString())+"="+encodeURIComponent(object.toString()));return s.length?s.join("&"):""},merge:function(target,src){if("object"==typeof target){var dst={};for(var key in target)dst[key]=target[key];for(var key in src)"object"==typeof src[key]&&src[key]&&target[key]?dst[key]=utils.merge(target[key],src[key]):dst[key]=src[key];return dst}},clone:function(object){return utils.merge(object,{})},postmessage:{send:function(json,target,targetElement){if("undefined"==typeof target)throw new Error("You must supply a target as a string");"undefined"==typeof targetElement&&(targetElement=window.parent),targetElement.postMessage(JSON.stringify(json),target)},listen:function(callback){var parseHostname=function(url){var parser=document.createElement("a");return parser.href=url,parser.hostname},isOriginAllowed=function(origin){if(!origin)return!1;var originHostname=parseHostname(origin);return/\.talkable\.(com|local)$/.test(originHostname)||/^curebit(-(development|staging|test))?\.s3\.amazonaws\.com$/.test(originHostname)||/^(d2jjzw81hqbuqv|d3pfcpkel4p4mo|di6re4dxelnn2)\.cloudfront\.net$/.test(originHostname)||parseHostname(config.server)===originHostname},receiveMessage=function(message){if(!isOriginAllowed(message.origin))return void utils.log("Origin is not allowed: "+message.origin);try{var o=JSON.parse(message.data);o&&"object"==typeof o&&null!==o&&callback(o)}catch(ex){}};window.addEventListener?window.addEventListener("message",receiveMessage,!1):window.attachEvent("onmessage",receiveMessage)}},event_list:[],subscribe:function(event_name,iframe_name,callback){if(!callback)return void utils.log("Subscribe: callback is required");for(var found=!1,i=0;i<utils.event_list.length;i++)if(utils.event_list[i].event_name==event_name&&utils.event_list[i].iframe_name==iframe_name&&utils.event_list[i].callback.toString()==callback.toString()){utils.event_list[i].callback=callback,found=!0;break}found||utils.event_list.push({event_name:event_name,iframe_name:iframe_name,callback:callback})},publish:function(name,iframe_name,data,is_global){var server=config.server,msg_data={type:name,iframe_name:iframe_name,data:data||{}};"undefined"!=typeof is_global&&is_global&&(server="*"),-1!==utils.lastLoadedIframeName.indexOf(iframe_name)&&window.frames[iframe_name]?utils.postmessage.send(msg_data,server,window.frames[iframe_name]):this.subscribe("offer_loaded",iframe_name,function(data,iframe_data){iframe_data.name==iframe_name&&utils.postmessage.send(msg_data,server,window.frames[iframe_name])})},startListening:function(){utils.postmessage.listen(function(message){if(message.data&&message.data.transmit)for(var t=0;t<utils.lastLoadedIframeName.length;t++)utils.lastLoadedIframeName[t]!=message.iframe_name&&utils.publish(message.type,utils.lastLoadedIframeName[t],message.data,!0);for(var i=0;i<utils.event_list.length;i++)if(message.type==utils.event_list[i].event_name&&message.iframe_name&&utils.event_list[i].callback){var iframe=document.querySelector("#"+utils.event_list[i].iframe_name+" iframe")||document.querySelector('iframe[name="'+utils.event_list[i].iframe_name+'"]');iframe&&iframe.name==message.iframe_name&&utils.event_list[i].callback.call(talkable,message.data,iframe)}})},notifyIntegrationError:function(message,dev){utils.addImage(utils.namespace(window.talkable.config.server,window.talkable.config.site_id)+"/notify_integration_error.gif?"+utils.serialize({message:message,dev:dev}))},isBrowserSupported:function(){var ua=window.navigator.userAgent;return-1==ua.indexOf("MSIE 6.0")&&-1==ua.indexOf("MSIE 7.0")&&-1==ua.indexOf("MSIE 8.0")},getIframeCreationExtension:function(){return this.isBrowserSupported()?"html":"gif"},isGenerated:function(el){return"true"==el.getAttribute("data-talkable-generated")},hasProperty:function(options,key){return options.hasOwnProperty(key)},setAttributes:function(element,attrs){for(var key in attrs)element.setAttribute(key,attrs[key])},location_parameter:function(name){for(var vars={},current_location=window.location.href.split("#")[0],hashes=current_location.slice(current_location.indexOf("?")+1).split("&"),i=0;i<hashes.length;i++){var hash=hashes[i].split("=");"undefined"!=typeof hash[1]&&(vars[hash[0]]=decodeURIComponent(hash[1]))}return vars[name]},callbacks:{},before:function(method_name,callback){utils.callbacks[method_name]=callback},matches:function(matcher){if(!matcher||matcher.blank)return!0;if(matcher.regexp)return window.location.href.match(RegExp(matcher.regexp));if(matcher.host_pattern&&matcher.host_pattern!==window.location.hostname)return!1;for(var name in matcher.query_pattern)if(-1==window.location.search.indexOf(name+"="+matcher.query_pattern[name]))return!1;if(matcher.path_pattern){if(talkablePlacementsConfig.site_url){var site_url=document.createElement("a");site_url.href=talkablePlacementsConfig.site_url+matcher.path_pattern,matcher.path_pattern=site_url.pathname.replace(/(^\/*)/g,"/")}if(matcher.path_pattern!==window.location.pathname)return!1}return!0},device_type:function(){var agent=window.navigator.userAgent;return agent.match(IOS_REGEXP)||agent.match(ANDROID_REGEXP)?agent.match(MOBILE_PLATFORM_REGEXP)||agent.substr(0,4).match(MOBILE_DEVICE_REGEXP)?"mobile":"tablet":"desktop"},match_placements:function(event_category){"undefined"==typeof event_category&&(event_category="affiliate_member");for(var matched=[],i=0;i<talkablePlacementsConfig.placements.length;i++){var placement=talkablePlacementsConfig.placements[i],exclusion_matched=!1,device_type=utils.device_type();if(!(placement.event_category&&placement.event_category!=event_category||placement.device_types&&device_type&&!(placement.device_types.indexOf(device_type)>=0))){if(placement.exclusion_matchers)for(var k=0;k<placement.exclusion_matchers.length&&!exclusion_matched;k++)exclusion_matched=utils.matches(placement.exclusion_matchers[k]);if(!exclusion_matched)for(var matchers=placement.inclusion_matchers||[placement.inclusion_matcher],j=0;j<matchers.length;j++)if(utils.matches(matchers[j])){matched.push(placement.id),utils.placements.push(placement.id);break}}}return matched.length?matched:EMPTY_PLACEMENTS},ensureInitialized:function(){if(!window.talkable.initialized)throw new Error("You need to call 'init' first")},namespace:function(server,site_id){return(server||config.server)+"/public/"+encodeURIComponent(site_id||config.site_id)},addImage:function(url){utils.log("addImage: "+url),document.images&&((new Image).src=url)},defaultIframeOptions:function(name){return name=name||"talkable-offer",{container:name,name:name+"-iframe"}},insertIframeIntoContainer:function(iframe,containerId){var containerEl=document.getElementById(containerId.replace("#",""));if(containerEl){containerEl.innerHTML="",containerEl.appendChild(iframe);for(var cs=document.querySelectorAll("#"+containerId),i=1;i<cs.length;i++)cs[i].remove()}else this.domReady(function(){containerEl=document.getElementById(containerId.replace("#","")),containerEl?containerEl.innerHTML="":(containerEl=document.createElement("div"),containerEl.setAttribute("data-talkable-generated",!0),containerEl.setAttribute("id",containerId),document.body.appendChild(containerEl)),containerEl.appendChild(iframe)})},setIntegrationCss:function(data){if(data&&data.css){styleTag=document.createElement("style"),styleTag.id=data.attribute_value,styleTag.dataset.talkableIntegrationCss=!0,styleTag.type="text/css",styleTag.styleSheet?styleTag.styleSheet.cssText=data.css:styleTag.appendChild(document.createTextNode(data.css));var styleTagNode=document.getElementById(data.attribute_value);styleTagNode&&styleTagNode.remove(),document.body&&document.body.appendChild(styleTag)}},addIframeElement:function(url,options){utils.log("addIframeElement: "+url),options=utils.clone(options||{}),options.frameBorder="0",options.allowTransparency=!0,options.src=url;var container=options.container||utils.generateRandomIframeName();delete options.container,utils.addRandomIframeName(options);var iframe=null,styleTag=null;return iframe=document.createElement("iframe"),iframe.style.display="none",iframe.style.opacity="0",this.setAttributes(iframe,options),this.insertIframeIntoContainer(iframe,container),utils.subscribe("responsive_iframe_height",iframe.name,function(data,iframe){iframe.style.height=data.height+"px"}),utils.subscribe("change_offer_state",iframe.name,function(data,iframe){"inline"===data.campaign_appearance&&iframe.parentNode&&utils.isGenerated(iframe.parentNode)||data&&data.offer_state&&data.offer_state_attribute&&(data.width&&(iframe.style.width=data.width),data.height&&(iframe.style.height=data.height),data.integration_css&&utils.setIntegrationCss(data.integration_css),currentAttribute=document.body.getAttribute(data.offer_state_attribute)||"","add"==data.action&&-1==currentAttribute.indexOf(data.offer_state)?document.body.setAttribute(data.offer_state_attribute,(data.offer_state+" "+currentAttribute).trim()):"remove"==data.action?document.body.setAttribute(data.offer_state_attribute,currentAttribute.replace(data.offer_state,"").trim()):"set"==data.action&&document.body.setAttribute(data.offer_state_attribute,data.offer_state),setTimeout(function(){document.all&&!window.atob&&(document.body.className=document.body.className)},0))}),utils.subscribe("change_loyalty_member_state",iframe.name,function(data){"remove"==data.action?utils.deleteCookie(LOYALTY_OPTIN_KEY):"set"==data.action&&utils.setCookie(LOYALTY_OPTIN_KEY,!0)}),utils.subscribe("set_location",iframe.name,function(data){data&&data.href&&-1==data.href.toLowerCase().indexOf("javascript:")&&(window.location.href=data.href)}),utils.subscribe("scroll_to",iframe.name,function(data,iframe){if(data.selector){var matches=document.querySelectorAll(data.selector);matches.length>0&&(data.y=matches[0].offsetTop)}window.scrollTo(data.x,data.y||iframe.offsetTop)}),utils.subscribe("offer_close",iframe.name,function(data,iframe){var index=utils.lastLoadedIframeName.indexOf(iframe.name);-1!=index&&utils.lastLoadedIframeName.splice(index,1),iframe.style.display="none",styleTag&&styleTag.remove(),styleTag=null,setTimeout(function(){iframe.remove(),iframe=null},1e3)}),utils.subscribe("offer_loaded",iframe.name,function(data){if(utils.lastLoadedIframeName.push(iframe.name),data.perform_snapshot&&utils.scrapeDOM(),utils.gleamRewardCallback&&data.gleam_reward)try{utils.gleamRewardCallback(data.gleam_reward)}catch(ex){utils.log(ex)}"inline"===data.campaign_appearance&&iframe.parentNode&&utils.isGenerated(iframe.parentNode)||(data.integration_css||data.integration_css.css)&&(styleTag=document.createElement("style"),styleTag.id=data.integration_css.attribute_value,styleTag.dataset.talkableIntegrationCss=!0,styleTag.type="text/css",styleTag.styleSheet?styleTag.styleSheet.cssText=data.integration_css.css:styleTag.appendChild(document.createTextNode(data.integration_css.css)),document.getElementById(data.integration_css.attribute_value)||document.body&&document.body.appendChild(styleTag),data.integration_css.attribute_name&&data.integration_css.attribute_value&&iframe.setAttribute(data.integration_css.attribute_name,data.integration_css.attribute_value),data.page_title&&iframe.setAttribute("title",data.page_title))}),iframe},buildJs:function(url){var result=document.createElement("script");return result.type="text/javascript",result.async=config.async,result.src=url,result},addJs:function(url){utils.log("addJs: "+url);var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(utils.buildJs(url),s)},createUrl:function(path,parameters){var create_url=utils.namespace()+path,items=null;if(parameters=utils.merge({v:config.version},parameters),parameters.o&&parameters.o.i&&(items=parameters.o.i,delete parameters.o.i),create_url=create_url+"?"+utils.serialize(parameters),items)for(var i=0;i<items.length;i++){var item=items[i],itemsParams="&"+utils.serialize({product_id:item.product_id,price:item.price,quantity:item.quantity},"o[i]["+i+"]");(create_url+itemsParams).length<config.url_length_limit&&(create_url+=itemsParams)}return create_url},formStaticWidget:function(options,urlParameters){var placement=utils.staticHtmlPlacement(urlParameters.matched_placement_ids);if(!placement)return!1;if(options.iframe.container&&options.iframe.container==options.trigger_widget.container)throw new Error("`trigger_widget` container should be different from `iframe` container.");if(!utils.isBrowserSupported())return!1;var iframeOptions=utils.merge(utils.defaultIframeOptions(),options.iframe),popupName=iframeOptions.name+"-popup",triggeredIframeOptions={container:popupName,name:popupName};options.trigger_widget&&options.trigger_widget.container&&(iframeOptions=utils.merge(utils.defaultIframeOptions(),options.trigger_widget),triggeredIframeOptions=utils.merge(triggeredIframeOptions,options.iframe));var iframe=utils.addIframeElement(placement.staticHtmlUrl,iframeOptions);return utils.subscribe("static_widget_triggered",iframe.name,function(){urlParameters=utils.clone(urlParameters),urlParameters.matched_placement_ids=[placement.id],urlParameters.widget_enabled="false";var staticWidgetOfferUrl=utils.createUrl("/affiliate_members/create",urlParameters);utils.addIframeElement(staticWidgetOfferUrl,triggeredIframeOptions)}),!0},staticHtmlPlacement:function(matchedPlacementIds){for(var urls,placement,i=0,j=0,deviceType=this.device_type();i<talkablePlacementsConfig.placements.length;i++){if(placement=talkablePlacementsConfig.placements[i],!this.hasProperty(placement,"appearance"))return!1;if(!this.hasProperty(placement,"static_html"))return!1;if(-1!==matchedPlacementIds.indexOf(placement.id)&&"gleam"!==placement.appearance)break;placement=null}if(!placement)return!1;for(;j<placement.static_html.length;j++)if(urls=placement.static_html[j],this.hasProperty(urls,deviceType))return utils.merge(placement,{staticHtmlUrl:urls[deviceType]});return!1},formIframe:function(options,url_path,url_parameters){if(options.iframe.container&&options.iframe.container==options.trigger_widget.container)throw new Error("`trigger_widget` container should be different from `iframe` container.");url_path=url_path+"."+utils.getIframeCreationExtension(),url_parameters.o&&url_parameters.o.email&&window.btoa&&(url_parameters.o.email=btoa(url_parameters.o.email)),url_parameters.cvuuid=utils.ensureUUID();var create_url=utils.createUrl(url_path,url_parameters);utils.showOffer(utils.merge(options,{url:create_url}))},showOffer:function(options){if(utils.isBrowserSupported()){var iframe_options=utils.merge(utils.defaultIframeOptions(),options.iframe),popupName=iframe_options.name+"-popup",triggered_iframe_options={container:popupName,name:popupName};options.trigger_widget&&options.trigger_widget.container&&(iframe_options=utils.merge(utils.defaultIframeOptions(),options.trigger_widget),triggered_iframe_options=utils.merge(triggered_iframe_options,options.iframe));var iframe=utils.addIframeElement(options.url,iframe_options);utils.subscribe("offer_triggered",iframe.name,function(data){utils.addIframeElement(config.server+data.offer_share_path,triggered_iframe_options)})}else utils.addImage(options.url)},cleanupRegisterData:function(data){delete data.campaign_tags,delete data.device,delete data.iframe,delete data.campaign_template,delete data.trigger_widget,delete data.tkbl_expand,delete data.custom_properties},extractOriginData:function(data,key){var result;return this.hasProperty(data,key)?(result=utils.merge(data.customer||{},data[key]),delete data.customer):result=data,result},doubleIntegrationCheck:function(){anotherIntegration&&parseInt(config.version)!=parseInt(anotherIntegration.config.version)&&utils.notifyIntegrationError("Another Talkable integration with site ID "+anotherIntegration.config.site_id+" and version "+anotherIntegration.config.version+" is present with current integration with site ID "+config.site_id+" and "+config.version+" version on "+window.location.href)},generateRandomIframeName:function(){return"talkable_integration_"+Math.random().toString(36).substring(2)},addRandomIframeName:function(params){var name=this.generateRandomIframeName();return params&&!params.name&&(params.name=name),name},scrapeDOM:function(){var iframeName=utils.lastLoadedIframeName[utils.lastLoadedIframeName.length-1];if(document.documentElement){var doctypeNode=document.doctype,doctypeString="<!DOCTYPE "+doctypeNode.name+(doctypeNode.publicId?' PUBLIC "'+doctypeNode.publicId+'"':"")+(!doctypeNode.publicId&&doctypeNode.systemId?" SYSTEM":"")+(doctypeNode.systemId?' "'+doctypeNode.systemId+'"':"")+">",domString=doctypeString;domString+="<html>",domString+=document.documentElement.innerHTML,domString+="</html>",this.publish("dom_capture",iframeName,{dom:domString,url:document.location.href})}},domReady:function(callback){var ready=!1,detach=function(){document.addEventListener?(document.removeEventListener("DOMContentLoaded",completed),window.removeEventListener("load",completed)):(document.detachEvent("onreadystatechange",completed),window.detachEvent("onload",completed))},completed=function(){ready||!document.addEventListener&&"load"!==event.type&&"complete"!==document.readyState||(ready=!0,detach(),callback())};if("complete"===document.readyState)callback();else if(document.addEventListener)document.addEventListener("DOMContentLoaded",completed),window.addEventListener("load",completed);else{document.attachEvent("onreadystatechange",completed),window.attachEvent("onload",completed);var top=!1;try{top=null==window.frameElement&&document.documentElement}catch(e){}top&&top.doScroll&&!function scrollCheck(){if(!ready){try{top.doScroll("left")}catch(e){return setTimeout(scrollCheck,50)}ready=!0,detach(),callback()}}()}},getCookie:function(name){var query="(^|; )"+name+"=([^;]*)";return(document.cookie.match(query)||[]).pop()},setCookie:function(name,value){if(name&&value){var date=new Date;date.setTime(date.getTime()+63072e7),document.cookie=name+"="+value+"; expires="+date.toGMTString()+"; path=/"}},deleteCookie:function(name){document.cookie=name+"=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;"},ensureUUID:function(){var uuid=utils.location_parameter(UUID_KEY);return UUID_REGEXP.test(uuid)||(uuid=this.getCookie(UUID_KEY)||this.generateUUID()),this.getCookie(UUID_KEY)!==uuid&&this.setCookie(UUID_KEY,uuid),uuid},generateUUID:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(c){var r=16*Math.random()|0,v="x"==c?r:3&r|8;return v.toString(16)})}};utils.doubleIntegrationCheck(),utils.startListening();var methods={init:function(options){for(var key in options)utils.hasProperty(options,key)&&(config[key]=options[key]);if(!config.site_id)throw new Error("site_id must be specified!");utils.ensureUUID(),talkable.initialized=!0},authenticate_customer:function(data){var registerData=utils.clone(data||{}),customer=registerData.customer?utils.clone(registerData.customer):registerData;utils.isObject(customer)&&(customerData=customer)},register_affiliate:function(data){utils.ensureInitialized();for(var registerData=utils.clone(data||{}),affiliate_member=registerData.customer||registerData.affiliate_member||{},options={iframe:registerData.iframe||{},trigger_widget:registerData.trigger_widget||{}},verify_integration=utils.location_parameter("tkbl_verify_integration")||config.verify_integration,url_parameters=["email","first_name","last_name","traffic_source"],i=0;i<url_parameters.length;i++){var parameter=url_parameters[i];utils.location_parameter(parameter)&&(affiliate_member[parameter]=utils.location_parameter(parameter))}var matched_placement_ids=utils.match_placements("affiliate_member"),parameters={o:utils.merge(customerData,affiliate_member),campaign_tags:utils.location_parameter("campaign_tags")||registerData.campaign_tags,affiliate_campaign_id:utils.location_parameter("tkbl_campaign_id"),custom_properties:registerData.custom_properties,integration_platform:config.integration_platform,tkbl_expand:utils.location_parameter("tkbl_expand")||registerData.expand_trigger_widget,matched_placement_ids:matched_placement_ids,ts:talkablePlacementsConfig.timestamp,ii:talkablePlacementsConfig.integration_id,vi:verify_integration};parameters.affiliate_campaign_id||parameters.campaign_tags||parameters.tkbl_expand?utils.formIframe(options,"/affiliate_members/create",parameters):matched_placement_ids!=EMPTY_PLACEMENTS?utils.formStaticWidget(options,parameters)||utils.formIframe(options,"/affiliate_members/create",parameters):utils.log("No campaign placements matched. Ignoring affiliate_member origin.")},register_purchase:function(data){utils.ensureInitialized();var registerData=utils.clone(data||{}),purchase=utils.extractOriginData(registerData,"purchase");purchase.customer_email&&(purchase.email=purchase.customer_email,delete purchase.customer_email);var items=purchase.items;delete purchase.items;var options={iframe:registerData.iframe||{},trigger_widget:registerData.trigger_widget||{}},campaign_tags=utils.location_parameter("campaign_tags")||registerData.campaign_tags,custom_properties=registerData.custom_properties,verify_integration=utils.location_parameter("tkbl_verify_integration")||config.verify_integration;utils.cleanupRegisterData(registerData);var parameters={o:utils.merge(customerData,purchase),campaign_tags:campaign_tags,affiliate_campaign_id:utils.location_parameter("tkbl_campaign_id"),custom_properties:custom_properties,integration_platform:config.integration_platform,matched_placement_ids:utils.match_placements("purchase"),ts:talkablePlacementsConfig.timestamp,ii:talkablePlacementsConfig.integration_id,vi:verify_integration};if(items){parameters.o.i=[];for(var i=0;i<items.length;i++){var item=items[i];parameters.o.i.push({product_id:item.product_id,price:item.price,quantity:item.quantity}),(item.url||item.image_url||item.title)&&methods._register_products([{product_id:item.product_id,url:item.url,image_url:item.image_url,title:item.title,price:item.price}])}}utils.formIframe(options,"/purchases/create",parameters)},register_event:function(data){utils.ensureInitialized();var registerData=utils.clone(data||{}),options={iframe:registerData.iframe||{},trigger_widget:registerData.trigger_widget||{}},campaign_tags=utils.location_parameter("campaign_tags")||registerData.campaign_tags,custom_properties=registerData.custom_properties,verify_integration=utils.location_parameter("tkbl_verify_integration")||config.verify_integration;utils.cleanupRegisterData(registerData);var event=utils.extractOriginData(registerData,"event"),parameters={o:utils.merge(customerData,event),campaign_tags:campaign_tags,affiliate_campaign_id:utils.location_parameter("tkbl_campaign_id"),custom_properties:custom_properties,integration_platform:config.integration_platform,matched_placement_ids:utils.match_placements(event.event_category),ts:talkablePlacementsConfig.timestamp,ii:talkablePlacementsConfig.integration_id,vi:verify_integration};utils.formIframe(options,"/events/create",parameters)},show_email_capture_offer:function(data){utils.ensureInitialized();var options={iframe:utils.defaultIframeOptions("talkable-email-capture-offer"),trigger_widget:{}},registerData=utils.clone(data||{}),parameters={traffic_source:registerData.traffic_source,campaign_tags:registerData.campaign_tags},showAfter=1e3*config.email_capture_show_timeout;setTimeout(function(){config.email_capture_show_offer&&utils.formIframe(options,"/email_capture/offers/create",parameters)},showAfter)},show_loyalty:function(){utils.ensureInitialized();var options={iframe:utils.defaultIframeOptions("talkable-loyalty"),trigger_widget:{}};utils.formIframe(options,"/loyalty/show",{email:customerData.email,optin:utils.getCookie(LOYALTY_OPTIN_KEY)})},show_loyalty_redeem_widget:function(){utils.ensureInitialized();var options={iframe:utils.defaultIframeOptions("talkable-loyalty"),trigger_widget:{}};utils.formIframe(options,"/loyalty/redeem_widget",{email:customerData.email})},show_offer:function(options){utils.showOffer(options)},gleam_reward:function(data){utils.gleamRewardCallback=data.callback},_register_products:function(products){utils.ensureInitialized();for(var i=0;i<products.length;i++)utils.addImage(utils.createUrl("/products/create.gif",{p:products[i]}))},talkable_loaded:function(callback){"function"==typeof callback&&callback()}};return{initialized:!1,config:config,before:utils.before,methods:methods,domReady:utils.domReady,subscribe:utils.subscribe,publish:utils.publish,scrapeDOM:utils.scrapeDOM,match_placements:utils.match_placements,device_type:utils.device_type,check:function(){if("undefined"!=typeof _talkableq&&Array.isArray(_talkableq))for(;_talkableq.length>0;){var action=_talkableq.shift(),method=action[0],params=action[1];utils.callbacks[method]&&(params=utils.callbacks[method].call(talkable,params)),params&&methods[method].call(talkable,params)}},run:function(){talkable.check(),talkable._timer=setInterval(talkable.check,config.queue_check_interval)},_timer:null}}();talkable.run()}(window,document,JSON,Object);
//# sourceMappingURL=talkable-4.5.7.min.map