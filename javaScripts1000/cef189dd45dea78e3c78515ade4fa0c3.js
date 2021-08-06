(function() { function bxBootstrap() {
	var re = /bot|crawl|slurp|spider|mediapartners|headlesschrome/i;
	if (re.test(navigator.userAgent) || navigator.userAgent == '') {
		return;
	}

	if (!(window.bouncex&&bouncex.website)) {
		var pushedData = [];
		if(window.bouncex && bouncex.push && bouncex.length){
			pushedData = bouncex;
		}
		window.bouncex = {};
		bouncex.pushedData = pushedData;
		bouncex.website = {"id":3393,"name":"rag & bone","cookie_name":"bounceClientVisit3393","domain":"rag-bone.com","ct":"bind_to_domain","ally":0,"ei":0,"tcjs":"","cjs":"","force_https":false,"waypoints":false,"content_width":900,"gai":"UA-18456029-1","swids":"","sd":0,"ljq":"auto","campaign_id":0,"is_preview":false,"aco":{"first_party_limit":"3500","local_storage":"1"},"cmp":{"gdpr":0,"gmp":0,"whitelist_check":0},"burls":[],"ple":false,"fbe":true,"mas":2,"map":1,"gar":true,"ete":1,"ettm":false,"etjs":"var SALE_SITE_PATH = 'ragandbonesale',\n    SALE_SITE_HOSTNAME = 'sale.rag-bone.com',\n    REG_SITE_COOKIE_NAME = 'dwanonymous_401042b81ab76065abf562c66e900eb2',\n\tSALE_SITE_COOKIE_NAME = 'dwanonymous_c50d4d2e6b5972475607dec538b45607';\n\n// HELPER FUNCTIONS //\nfunction isIncludedHostname() {\n\treturn window.location.hostname === 'www.rag-bone.com';\n}\n\nfunction isStagingSite() {\n  return window.location.hostname.indexOf('staging-web-ragandbone.demandware.net') > -1;\n}\n\nfunction isSaleSite() {\n  return window.location.pathname.indexOf(SALE_SITE_PATH) > -1\n         || window.location.hostname.indexOf(SALE_SITE_HOSTNAME) > -1;\n}\n\nfunction getCartCookieName() {\n  return isSaleSite() ? SALE_SITE_COOKIE_NAME : REG_SITE_COOKIE_NAME;\n}\n\n/* track auto-generated on submission coupon code */\n\nbouncex.et.onVarChange('coupon_code', function(oldVal, newVal){\n\tif (newVal && !bouncex.vars.tracked_coupon){\n\t\tbouncex.push(['coupon', {\n\t\t\tcode: bouncex.vars.coupon_code\n\t\t}]);\n\t\tbouncex.setv('tracked_coupon', true);\n\t\tsetBounceCookie();\n\t}\n});\n\nfunction toProperCase(copy) {\n\tvar uppercasedArray = copy.split(' ').map(function(word) {\n\t\tvar firstLetter = word.charAt(0).toUpperCase();\n\t\tword = word.replace(word.charAt(0), firstLetter);\n\t\tvar hyphenIndex = word.indexOf('-');\n\t\tif (hyphenIndex > -1) {\n\t\t\tvar letterAfterHyphen = word.charAt(hyphenIndex + 1);\n\t\t\tvar letterAfterHyphenUppercased = letterAfterHyphen.toUpperCase();\n\t\t\tword = word.replace(\n\t\t\t\tword.charAt(hyphenIndex + 1),\n\t\t\t\tletterAfterHyphenUppercased\n\t\t\t);\n\t\t}\n\t\treturn word;\n\t});\n\treturn uppercasedArray.join(' ');\n}\n\nfunction isGiftcard() {\n\treturn window.location.href.indexOf('gift-card') > -1;\n}\n\nfunction hasProductGrid() {\n\treturn jQuery('.product-tile').length > 0;\n}\n\nfunction hasSetGrid() {\n\treturn jQuery('.productsetItem').length > 0;\n}\n\nfunction isPdp() {\n\treturn bouncex.website.pts === 'product' && !isGiftcard() && !hasSetGrid();\n}\n\nfunction isSetPdp() {\n\treturn bouncex.website.pts === 'product' && !isGiftcard() && hasSetGrid();\n}\n\nfunction getItemCategory() {\n  var category = bouncex.vars.item_category;\n  if (isSaleSite()) {\n    category = \"sale items\";\n  }\n  return category;\n}\n\n// GET DATA FUNCTIONS //\nfunction getProductData() {\n\treturn {\n\t\tid: bouncex.vars.item_id_product,\n\t\tcopy: toProperCase(bouncex.vars.item_copy),\n\t\timageurl: bouncex.vars.item_image_url,\n\t\tcategory: getItemCategory(),\n\t\turl: bouncex.vars.page_url,\n\t\tinstock: bouncex.vars.item_in_stock\n\t};\n}\n\nfunction getCategoryData() {\n\treturn {\n\t\t'items:ids': bouncex.vars.items_ids,\n\t\t'page:url': bouncex.vars.page_url,\n\t\t'page:title': bouncex.vars.page_title,\n\t\t'sale:issalesite': isSaleSite()\n\t};\n}\n\nfunction getEmail() {\n\treturn jQuery('.pt-account-landing__col-right .pt-account-landing__option')\n\t\t.first()\n\t\t.text()\n\t\t.replace('Email: ', '');\n}\n\nfunction getSku() {\n\treturn jQuery('input#pid').attr('value');\n}\n\nfunction getGroupId() {\n    var canonicalUrlSplit = jQuery('link[rel=\"canonical\"]').attr('href').split('-');\n    return canonicalUrlSplit[canonicalUrlSplit.length - 1].replace('.html','');\n}\n\nfunction validataItemId() {\n\treturn bouncex.vars.item_id_product;\n}\n\n// FIRE EVENT FUNCTIONS //\nfunction trackLoggedInUser() {\n\tvar email = getEmail();\n\tif (bouncex.vars.logged_in && !bouncex.vars.logged_in_identified && email) {\n\t\tbouncex.push(['user', {\n\t\t\temail: email,\n\t\t\tsource: 'LoggedIn'\n\t\t}]);\n\t}\n\tbouncex.setv('logged_in_identified', true);\n\tsetBounceCookie();\n}\n\nfunction fireViewCategory() {\n\tvar data = getCategoryData();\n\tbouncex.push(['view category', data]);\n}\n\nfunction fireViewCategoryOnSetPdp() {\n\tvar data = {\n\t\t'items:ids': bouncex.vars.items_ids,\n\t\t'page:url': bouncex.vars.page_url,\n\t\t'page:title': toProperCase(jQuery('h1.product-name').text()),\n\t\t'sale:issalesite': isSaleSite()\n\t};\n\tbouncex.push(['view category', data]);\n}\n\nfunction fireItemTrackingOnLoad() {\n\tvar item = getProductData();\n\tbouncex.push(['item', item]);\n}\n\nfunction fireItemTrackingOnChange() {\n\tvar item = getProductData();\n\tif (item.imageurl.indexOf(item.id > -1)) {\n\t\tbouncex.push(['item', item]);\n\t}\n}\n\nfunction fireViewItem() {\n\tbouncex.et.onTrue(validataItemId, function(){\n\t\tvar item = {\n\t\t\t'item:id': bouncex.vars.item_id_product,\n\t\t\t'sale:issalesite': isSaleSite(),\n\t\t\t'item:shq_id': bouncex.vars.shq_id\n\t\t};\n\n\t\tif (!isSaleSite()) {\n\t\t\titem['item:itemgroupid'] = getGroupId();\n\t\t}\n  \n\t\tbouncex.push(['view item', item]); \n\t}, 50);\n}\n\n/********  Sku tracking *********/\nfunction trackSku() {\n\tbouncex.et.onVarChange('sku', fireSelectSku);\n}\n\nfunction fireSelectSku() {\n\tvar sku = getSku(),\n\t\titemId = bouncex.vars.item_id_product,\n\t\tgroupId = getGroupId();\n\t\t\n\tif (bouncex.vars.prev_sku.toString() !== sku) {\n\t\tbouncex.push(['select_sku', {\n\t\t\t'item:id': itemId,\n\t\t\t'item:itemgroupid': groupId,\n\t\t\t'item:feedid': sku,\n\t\t\t'sale:issalesite': isSaleSite()\n\t\t}]);\n\n\t\tbouncex.setv('prev_sku', sku);\n\t\tsetBounceCookie();\n\t}\n}\n\n// CART TRACKING FUNCTIONS //\nbouncex.et.cart.init({\n\tstoreValues: [],\n\treplenish: replenish,\n\treplenishmentType: 'cookie'\n});\n\nfunction replenish(cart) {\n\tif (cart.token) {\n\t\tbouncex.utils.cookies.create({\n\t\t\tname: getCartCookieName(),\n\t\t\tvalue: cart.token\n\t\t});\n\t\twindow.location.href = window.location.pathname + '?bx_replen=true';\n\t}\n}\n\nfunction trackCartOnPdp() {\n\tbouncex.et.on(jQuery(document), 'ajaxComplete', function(e, xhr, settings) {\n\t\tif (\n\t\t\tsettings.url.indexOf('Cart-AddProduct') > -1 &&\n\t\t\tsettings.type === 'POST' &&\n\t\t\txhr.status === 200\n\t\t) {\n\t\t\tbouncex.push(['add to cart', {\n\t\t\t\t'item:id': bouncex.vars.item_id_product,\n\t\t\t\t'item:shq_id': bouncex.vars.sku,\n\t\t\t\t'cart:token': getBounceCookie(getCartCookieName()),\n\t\t\t\t'sale:issalesite': isSaleSite()\n\t\t\t}]);\n\t\t\t\n\t\t\t/* mask in cart RTV */\n\t\t\tif(bouncex.website.pts === \"product\" && bouncex.vars.item_copy.indexOf('mask') > -1){\n                bouncex.setVar('mask_in_cart', true);\n                bouncex.setBounceCookie();\n            }\n\t\t}\n\t});\n}\n\nfunction trackEmptyCart() {\n\tbouncex.et.onVarChange('cart_qty', function() {\n\t\tif (bouncex.vars.cart_qty === 0) {\n\t\t\tbouncex.push(['empty_cart']);\n\t\t}\n\t});\n}\n\nfunction trackingReadyDomain() {\n  return (\n    (\n      isIncludedHostname()\n      || isSaleSite()\n    )\n    && !isStagingSite()\n  );\n}\n\n// INIT TRACKING //\nif (trackingReadyDomain()) {\n\n\t//Standard product page with one product\n\tif (isPdp()) {\n\n\t\t// only fire catalog events on regular site \n\t\tif(!isSaleSite()){\n\t\t\tbouncex.setv('prev_sku', bouncex.vars.sku);\n\t\t\tsetBounceCookie();\n\t\t\ttrackSku();\n\t\t}\n\n\t\tfireItemTrackingOnLoad();\n\t\tfireViewItem();\n\t\ttrackCartOnPdp();\n\n\t\tbouncex.et.on(jQuery('.swatches.color li'), 'click', function() {\n\t\t\tsetTimeout(function() {\n\t\t\t\tfireItemTrackingOnChange();\n\t\t\t\tfireViewItem();\n\t\t\t}, 1000);\n\t\t});\n\t}\n\n\t//Product pages that house a \"collection\" - will fire View Category\n\tif (isSetPdp()) {\n\t\tfireViewCategoryOnSetPdp();\n\t}\n\n\t//Fires View Category only if the category page has a product grid\n\tif (bouncex.website.pts === 'category' && hasProductGrid()) {\n\t\tfireViewCategory();\n\t}\n\n\tbouncex.et.onVarChange('logged_in', function() {\n\t\ttrackLoggedInUser();\n\t});\n\n\tif (bouncex.website.pts === 'cart') {\n\t\ttrackEmptyCart();\n\t}\n}\n","dge":true,"bxidLoadFirst":false,"gbi_enabled":0,"gbi":{"rblocks":null},"bpush":false,"pt":{"cart":{"testmode":false,"val":[[{"activation":"current_page_url","prop":"contains","prop2":"","prop3":"","val":"/cart"}],[{"activation":"js","prop":"","prop2":"","prop3":"","val":"document.querySelectorAll('#pdpMain').length === 0;"}]]},"category":{"testmode":false,"val":[[{"activation":"js","prop":"","prop2":"","prop3":"","val":"document.querySelectorAll('.product-listings').length > 0;"}],[{"activation":"current_page_url","prop":"not_contains","prop2":"","prop3":"","val":"/search"}]]},"checkout":{"testmode":false,"val":[[{"activation":"current_page_url","prop":"contains","prop2":"","prop3":"","val":"/checkout"}]]},"home":{"testmode":false,"val":[[{"activation":"js","prop":"","prop2":"","prop3":"","val":"document.querySelectorAll('.pt_storefront').length > 0;"}]]},"product":{"testmode":false,"val":[[{"activation":"js","prop":"","prop2":"","prop3":"","val":"document.querySelectorAll('#pdpMain').length > 0;"}]]},"search":{"testmode":false,"val":[[{"activation":"current_page_url","prop":"contains","prop2":"","prop3":"","val":"/search"}]]}},"els":{"CART - Checkout Button":"a.mini-cart-link-checkout","CART - Promo Code Apply Button":"button#add-coupon","CART - Promo Code Box":"div.coupon-code","CAT - Product Grid Image":"div.product-item","CAT - Quickview Box":"","CAT-AddtoCartButton":"","CAT-QuickviewAddtoCart":"","Footer":"div#footer","Navigation bar":"section#header-container","PDP - Add to Cart Button":"","PDP - Color Option":"ul.swatches.color","PDP - Hero Image":"img.primary-image","PDP - Product Name":"h1.product-name","PDP - Product Price":"div.product-price","PDP - Quantity Option":"div.quantity","PDP - Review Stars":"","PDP - Size Option":"ul.sizes","PDP - Thumbnail Image":"img[itemprop=\"thumbnail\"]:not(.primary-image)","SEARCH - Product Grid Image":"div.product-item"},"vars":[{"name":"logged_in","polling":"none","persist":"no","page_types":[],"testmode":false,"default":"false","code":"jQuery('#dialog-account .account-logout').length > 0;","trigger":""},{"name":"ever_logged_in","polling":"none","persist":"permanent","page_types":[],"testmode":false,"default":"false","code":"bouncex.vars.logged_in || null;","trigger":""},{"name":"cart_qty","polling":"all","persist":"visit","page_types":[],"testmode":false,"default":"0","code":"jQuery('.mini-cart-qty').text().replace(/[^0-9]/g, '');","trigger":""},{"name":"cart_value","polling":"all","persist":"visit","page_types":[],"testmode":false,"default":"0","code":"(function(){\n    var mini_cart_total = jQuery('.mini-cart-subtotals .value');\n    if (mini_cart_total.length > 0) {\n        return mini_cart_total.text().replace(/[^0-9.]/g, '');\n    } else if (bouncex.website.pts === 'cart') {\n        return jQuery('.order-subtotal td:eq(1)').text().replace(/[^0-9.]/g, '') || 0;\n    } else {\n        return null;\n    }\n})();","trigger":""},{"name":"submitted_onsite","polling":"all","persist":"permanent","page_types":[],"testmode":false,"default":"false","code":"jQuery('.ui-dialog').text().indexOf('Thank You') > -1 || null;","trigger":""},{"name":"item_id_product","polling":"vars","persist":"no","page_types":["product"],"testmode":false,"default":"false","code":"(function() {\n\tvar selectedJSON = JSON.parse(\n\t\tjQuery('li.selected a')\n\t\t\t.first()\n\t\t\t.attr('data-lgimg')\n\t);\n\tvar imgLink = selectedJSON.hires.split('/');\n\tvar slug = imgLink[imgLink.length - 2].split('-');\n\tvar cleanSlug = slug.slice(0, 2);\n\treturn cleanSlug.join('-');\n})();\n","trigger":""},{"name":"items_ids","polling":"none","persist":"no","page_types":["category","product"],"testmode":false,"default":"false","code":"(function() {\n\tvar items = jQuery('.thumb-link');\n\tvar maxLength = items.length < 20 ? items.length : 20;\n\tvar itemIds = [];\n\tfor (var i = 0; i < maxLength; i++) {\n\t\t\t\n\t\tvar imgLink = jQuery(items[i])\n\t\t\t\t.find('img')\n\t\t\t\t.attr('src')\n\t\t\t\t.split('/');\n\t\tvar slug = imgLink[imgLink.length - 2].split('-');\n\t\tvar cleanSlug = slug.slice(0, 2).join('-');\n\t\tif (itemIds.indexOf(cleanSlug) === -1) {\n\t\t\titemIds.push(cleanSlug);\n\t\t}\n\t}\n\treturn itemIds.join(',') || false;\n})();","trigger":""},{"name":"page_url","polling":"none","persist":"no","page_types":["category","search","product"],"testmode":false,"default":"false","code":"jQuery('link[rel=\"canonical\"]').attr('href');","trigger":""},{"name":"item_image_url","polling":"vars","persist":"no","page_types":["product"],"testmode":false,"default":"false","code":"(function() {\n\tvar url = jQuery('.primary-image')\n\t\t.first()\n\t\t.attr('src');\n\tif (url) {\n\t\treturn 'https:' + url;\n\t} else {\n\t\treturn false;\n\t}\n})();","trigger":""},{"name":"item_category","polling":"none","persist":"no","page_types":["product"],"testmode":false,"default":"false","code":"(function() {\n\tvar hasBreadcrumbs = jQuery('.pdp-breadcrumb a').length > 1;\n\tvar category;\n\tif (!hasBreadcrumbs) {\n\t\tcategory = 'Global';\n\t} else {\n\t\tcategory =\n\t\t\tjQuery('li.divider')\n\t\t\t\t.last()\n\t\t\t\t.text()\n\t\t\t\t.trim() +\n\t\t\t'-' +\n\t\t\tjQuery('li.last')\n\t\t\t\t.text()\n\t\t\t\t.trim();\n\t}\n\treturn category;\n})();","trigger":""},{"name":"item_price","polling":"none","persist":"no","page_types":["product"],"testmode":false,"default":"false","code":"jQuery('.product-price .price-sales') ? jQuery('.product-price .price-sales').text().replace(/[^0-9.]/g, '') : jQuery('.product-price').text().replace(/[^0-9.]/g, '');","trigger":""},{"name":"item_in_stock","polling":"none","persist":"no","page_types":["product"],"testmode":false,"default":"false","code":"true;","trigger":""},{"name":"page_title","polling":"none","persist":"no","page_types":["category"],"testmode":false,"default":"false","code":"jQuery('.h1-cat').first().text().trim();","trigger":""},{"name":"item_copy","polling":"none","persist":"no","page_types":["product"],"testmode":false,"default":"false","code":"jQuery('.product-name-pdp').text().trim();","trigger":"pageload"},{"name":"logged_in_identified","polling":"none","persist":"visit","page_types":[],"testmode":false,"default":"false","code":"null;","trigger":"pageload"},{"name":"cart","polling":"none","persist":"visit","page_types":[],"testmode":false,"default":"false","code":"null;","trigger":"pageload"},{"name":"coupon_code","polling":"vars","persist":"visit","page_types":[],"testmode":false,"default":"false","code":"(function() {\n  return jQuery('.coupon').length && jQuery('.coupon').text();\n})();","trigger":"pageload"},{"name":"tracked_coupon","polling":"none","persist":"visit","page_types":[],"testmode":false,"default":"false","code":"null;","trigger":"pageload"},{"name":"ibx_promo_code","polling":"none","persist":"permanent","page_types":[],"testmode":false,"default":"false","code":"(function() {\n  var code = bouncex.utils.getParam('cpn');\n  if (code.indexOf('nil') > -1 || code === '') { return null; }\n  return code;\n})();","trigger":"pageload"},{"name":"cart_plurality","polling":"all","persist":"visit","page_types":[],"testmode":false,"default":"false","code":"bouncex.vars.cart_qty > 1 ? 'items' : 'item';","trigger":"pageload"},{"name":"cart_plurality_are","polling":"all","persist":"visit","page_types":[],"testmode":false,"default":"false","code":"bouncex.vars.cart_qty > 1 ? 'are' : 'is';","trigger":"pageload"},{"name":"page_type","polling":"none","persist":"no","page_types":[],"testmode":false,"default":"false","code":"bouncex.website.pts;","trigger":"pageload"},{"name":"prev_sku","polling":"none","persist":"visit","page_types":[],"testmode":false,"default":"false","code":"null;","trigger":"pageload"},{"name":"sku","polling":"vars","persist":"visit","page_types":[],"testmode":false,"default":"false","code":"jQuery('input#pid').attr('value');\n","trigger":"pageload"},{"name":"cookie_bar_present","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"jQuery('.js-footer-cookie-banner').length > 0;","trigger":"pageload"},{"name":"mask_in_cart","polling":"all","persist":"visit","page_types":[],"testmode":false,"default":"false","code":"(function(){\r\n    if(bouncex.website.pts === \"cart\"){\r\n       return jQuery('#cart-table .cart-row').filter(function(_,item){\r\n           return jQuery(item).find('.name').text().trim().toLowerCase().indexOf('mask') > -1\r\n        }).length > 0\r\n    }\r\n    return null\r\n})()","trigger":"pageload"},{"name":"mask_in_stock","polling":"all","persist":"no","page_types":["category"],"testmode":false,"default":"false","code":"window.location.href.indexOf(\"/mask\") > -1 && jQuery('.product-item').length > 0","trigger":"pageload"},{"name":"shq_id","polling":"none","persist":"no","page_types":["product"],"testmode":false,"default":0,"code":"jQuery('#pdpMain').data().id;","trigger":"pageload"}],"dgu":"pixel.cdnwidget.com","dgp":false,"ba":{"enabled":0,"fbte":0},"biu":"assets.bounceexchange.com","bau":"api.bounceexchange.com","beu":"events.bouncex.net","ibx":{"tjs":"","cjs":"","miw":1,"mibcx":1,"te":1,"cart_rep":{"get":"","set":""},"ulpj":{"et_rid":"espemailid"},"cus":"","miw_exclude":"#gc_email,#gc_confirm_email,input[name*=dwfrm_cart_sendToEmail]"},"etjson":null,"osre":true,"osru":"osr.bounceexchange.com/v1/osr/items","checkDfp":false,"spa":0,"spatm":1,"preinit_cjs":"","mat":0,"math":0,"cpnu":"coupons.bounceexchange.com","dfpcms":0,"sms":{"optm":"Hit 'Send' to sign-up for automated, recurring rag & bone mktg txts (like cart reminders) to this #, per terms.","eventSharing":true,"shqId":"9ex3hw93a9-1"},"pde":true,"fmc":["US","CA"],"fme":true,"fmx":"#gc_email,#gc_confirm_email,input[name*=dwfrm_cart_sendToEmail]","sdk":{"android":false,"ios":false,"javascript":false}}
;
		bouncex.tag = 'tag3';
		bouncex.$ = window.jQuery;
		bouncex.env = 'production';
		bouncex.restrictedTlds = {"casl":{"ca":1},"gdpr":{"ad":1,"al":1,"at":1,"ax":1,"ba":1,"be":1,"bg":1,"by":1,"xn--90ais":1,"ch":1,"cy":1,"cz":1,"de":1,"dk":1,"ee":1,"es":1,"eu":1,"fi":1,"fo":1,"fr":1,"uk":1,"gb":1,"gg":1,"gi":1,"gr":1,"hr":1,"hu":1,"ie":1,"im":1,"is":1,"it":1,"je":1,"li":1,"lt":1,"lu":1,"lv":1,"mc":1,"md":1,"me":1,"mk":1,"xn--d1al":1,"mt":1,"nl":1,"no":1,"pl":1,"pt":1,"ro":1,"rs":1,"xn--90a3ac":1,"ru":1,"su":1,"xn--p1ai":1,"se":1,"si":1,"sj":1,"sk":1,"sm":1,"ua":1,"xn--j1amh":1,"va":1,"tr":1}};
		bouncex.assets = {"creativesBaseStyles":"d63dbc50"};
		bouncex.push = function(pushData) {
			bouncex.pushedData.push(pushData);
		}
		var script = document.createElement('script');
		script.setAttribute('src', '//assets.bounceexchange.com/assets/smart-tag/versioned/ijs_all_modules_cjs_min_f0af7f2eb5df5e03c3dd565f9ccccd5a.js');

		var scriptAttrs = [{"Key":"id","Value":"c.js"},{"Key":"async","Value":"true"},{"Key":"data-apikey","Value":"2^HIykD"},{"Key":"data-cb","Value":"bouncex.dg.initPostDeviceGraph"},{"Key":"data-bx","Value":"1"},{"Key":"data-gm","Value":"1"},{"Key":"data-fire","Value":"1"}];
		if (scriptAttrs) {
			for (var i = 0; i < scriptAttrs.length; i++) {
				script.setAttribute(scriptAttrs[i].Key, scriptAttrs[i].Value);
			}
		}

		document.body.appendChild(script);
	}

  
		var eventSharingCartridge = document.createElement('script');
    eventSharingCartridge.setAttribute('src', '//d1n00d49gkbray.cloudfront.net/wknd/wknd_cartridge.js');
		document.body.appendChild(eventSharingCartridge);
  
}
if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", bxBootstrap);
} else {
	bxBootstrap();
}})();