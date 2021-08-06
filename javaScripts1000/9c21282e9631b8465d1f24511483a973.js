setTimeout(function(){

if (window.location.href.includes("8357353")){
           jQuery("#size-variant-2030818").text("3 MÃSTA");
}

}, 3000);
if (tc_vars.page_cat1==="VAD") {
	if(tc_vars.page_cat2 === "STEP_4") {
			// Add the addresses where you want to change payment labels
			var deliveryAdresses = [
				{
					name: 'Liberec',
					address1: 'SousedskÃ¡ 625',
					postCode: '46001',
					city: 'Liberec'
				},{
					name: 'NovÃ½ SmÃ­chov',
					address1: '8 PlzeÅskÃ¡',
					postCode: '15000',
					city: 'Praha'
				}, {
					name: 'Brno - ModÅice',
					address1: 'SplaviskÃ¡ 1137',
					postCode: '66442',
					city: 'Brno'
				}, {
					name: 'Hradec KrÃ¡lovÃ©',
					address1: 'RaÅ¡Ã­nova TÅÃ­da 1686',
					postCode: '50002',
					city: 'Hradec KrÃ¡lovÃ©'
				}, {
					name: 'Metropole ZliÄÃ­n',
					address1: 'ÅevnickÃ¡ 1',
					postCode: '15521',
					city: 'Praha'
				}, {
					name: 'Teplice',
					address1: 'SrbickÃ¡ 464',
					postCode: '41501',
					city: 'Teplice'
				}, {
					name: 'Chodov',
					address1: 'TÃ¼rkova 1272/7',
					postCode: '14900',
					city: 'Praha'
				}, {
					name: 'LetÅany',
					address1: 'VeselskÃ¡ 721',
					postCode: '19900',
					city: 'Praha'
				}, {
					name: 'Ostrava centrum',
					address1: 'VarenskÃ¡ 3309/50',
					postCode: '70200',
					city: 'Ostrava'
				}, {
					name: 'ÄeskÃ© BudÄjovice',
					address1: 'ÄeskÃ© VrbnÃ© 2352',
					postCode: '37011',
					city: 'ÄeskÃ© BudÄjovice'
				}, {
					name: 'ÄernÃ½ Most',
					address1: 'ChlumeckÃ¡ 765/6',
					postCode: '19800',
					city: 'Praha'
				}, {
					name: 'PlzeÅ',
					address1: 'StavbaÅskÃ¡ 2',
					postCode: '30100',
					city: 'PlzeÅ - Bory'
				}, {
					name: 'Olomouc',
					address1: 'Kafkova 462/3',
					postCode: '77900',
					city: 'Olomouc'
				}, {
					name: 'Ostrava - Avion',
					address1: 'RudnÃ¡ 3186/73',
					postCode: '70030',
					city: 'OSTRAVA'
				}, {
					name: 'Jihlava',
					address1: 'BrnÄnskÃ¡ 4971/74',
					postCode: '58601',
					city: 'Jihlava'
				}, {
					name: 'Mlada Boleslav',
					address1: 'JiÄÃ­nskÃ¡ 1419',
					postCode: '29301',
					city: 'MladÃ¡ Boleslav'
				}, {
					name: 'Brno - Ivanovice',
					address1: 'HradeckÃ¡ 408/40',
					postCode: '62100',
					city: 'Brno'
				}, {
					name: 'TÅebÃ­Ä',
					address1: 'SpojovacÃ­ 1345',
					postCode: '67401',
					city: 'TÅebÃ­Ä'
				}, {
					name: 'Opava',
					address1: 'TÄÅ¡Ã­nskÃ¡ 2914/44',
					postCode: '74601',
					city: 'Opava'
				}, {
					name: 'ZlÃ­n',
					address1: 'TÅÃ­da 3. kvÄtna 1170',
					postCode: '76202',
					city: 'ZlÃ­n'
				}, {
					name: 'TÃ¡bor',
					address1: 'SobÄslavskÃ¡ 3191',
					postCode: '39005',
					city: 'TÃ¡bor'
				}, {
					name: 'Kladno',
					address1: 'AmerickÃ¡ 3252',
					postCode: '27201',
					city: 'Kladno'
				}, {
					name: 'FrÃ½dek-MÃ­stek',
					address1: 'PÅÃ­borskÃ¡ 2270',
					postCode: '73802',
					city: 'FrÃ½dek-Mistek'
				}, {
					name: 'Pardubice',
					address1: 'PodÄbradskÃ¡ 588',
					postCode: '53009',
					city: 'Pardubice'			
				},{
					name: 'Karlovy Vary',
					address1: 'ObchodnÃ­ 30',
					postCode: '36001',
					city: 'JeniÅ¡ov'			
				}
			];

			// Read the actual delivery address
			if(document.querySelector('.paymentaddressshipping_name-value') != null) {
				var deliveryAddressName = document.querySelector('.paymentaddressshipping_name-value').innerText;
			}
			if(document.querySelector('.paymentaddressshipping_address1-value') != null) {
				var deliveryAddress = document.querySelector('.paymentaddressshipping_address1-value').innerText;
			}
			if(document.querySelector('.paymentaddressshipping_postalCode-value') != null) {
				var deliveryPostalCode = document.querySelector('.paymentaddressshipping_postalCode-value').innerText.replace(/\s/g,'');
			}
			if(document.querySelector('.paymentaddressshipping_city-value') != null) {
				var deliveryCity = document.querySelector('.paymentaddressshipping_city-value').innerText;
			}
			
			var y = Number(tc_vars["order_delivery_time"])+Number(1)
			// Find a match between the delivery address and the list
			var storeAdress = deliveryAdresses.find(function(address){
				return address.name === deliveryAddressName && address.address1 === deliveryAddress && address.postCode.replace(/\s/g,'') === deliveryPostalCode && address.city === deliveryCity;
			});

			if(typeof storeAdress !== 'undefined') {
				// change payment labels
				document.querySelector('#EXT_EP_DELIVERY_payment_selector .title-card').innerHTML = "Platba pÅi pÅevzetÃ­";
				document.querySelector('#EXT_EP_DELIVERY_payment_selector .visible-mobile.inline-b .title-card').innerText="Platba pÅi pÅevzetÃ­"
				document.querySelector('#EXT_EP_DELIVERY_payment_selector .hidden-mobile .title-card').innerText="Platba pÅi pÅevzetÃ­";
				document.querySelector('#collapsePaymentEXT_EP_DELIVERY .panel-body').innerHTML = "Platba pÅi pÅevzetÃ­ je moÅ¾nÃ¡ <b><font style='color:red'>POUZE PLATEBNÃ KARTOU.</font></b><p>DÃ¡rkovou kartu nebo VÄrnostnÃ­ Å¡ek uplatnÄte v pÅÃ­sluÅ¡nÃ©m polÃ­Äku.</p>";
			}
		}
}
if(Osmose.context.pageType === 'BASKET') {
  var productBasketLimit = {
    8325168 :3,
8325114 :3,
8562855 :3,
8562868 :3,
8640929 :3,
8328485 :3,
8555637 :3,
8359349 :3,
8404869 :3,
8387035 :3,
8541158 :3,
8203903 :3,
8555774 :3,
968556 :3,
8203902 :3,
8298767 :3,
8333196 :3,
8555779 :3,
8555780 :3,
8334083 :3,
8555781 :3,
8405196 :2
  };
  jQuery('.quantityComponent').each(function() {
    // On rÃ©cupÃ¨re le modÃ¨le de l'input
    var inputElement = jQuery(this).find("input[name='quantity']");
    var modelId = inputElement.attr('data-model-id');
    var maxItems = productBasketLimit[modelId];
    if(maxItems === undefined) {
      return;
    }
    var inputValue = inputElement.val();
    // S'il y en a trop
    if (inputValue > maxItems) {
      inputElement.val(maxItems);
      inputElement.trigger("change");
    }
    // Si c'est le max
    if(inputValue == maxItems) {
      inputElement.prop("disabled", true);
      jQuery(this).find('.increase').css('visibility', 'hidden');
      jQuery(this).after('<div style="color:red; text-transform: uppercase; width: 100%; font-size:0.8em;" >PÅekroÄen limit na objednÃ¡vku</div>')
    }
   
  });
}
if(tc_vars.page_cat2==="STEP_4") {
	if (tc_vars["page_cat1"] == "ERESA") {
		document.querySelector('#EXT_EP_DELIVERY_payment_selector .title-card').innerHTML = "Platba pÅi pÅevzetÃ­";
		document.querySelector('#EXT_EP_DELIVERY_payment_selector .visible-mobile.inline-b .title-card').innerText="Platba pÅi pÅevzetÃ­"
		document.querySelector('#EXT_EP_DELIVERY_payment_selector .hidden-mobile .title-card').innerText="Platba pÅi pÅevzetÃ­";
		document.querySelector('#collapsePaymentEXT_EP_DELIVERY .panel-body').innerHTML = "<b>- Po potvrzenÃ­ bude rezervace platnÃ¡ 24 hodin, potÃ© bude automaticky stornovÃ¡na. UPÅEDNOSTÅUJEME PLATBU PLATEBNÃ KARTOU pÅÃ­padnÄ dÃ¡rkovou kartou nebo vÄrnostnÃ­m Å¡ekem.</b>";	
	}
}
try{
 if(tc_vars.page_cat1 === "VAD" && tc_vars.page_cat2 === "STEP_1") {
  document.getElementById('accordionDelivery').classList.add("visible");
  document.querySelector('#headingPromotionCode [href=\\#collapsePromotionCode]').click();
 }
}
catch(e){
console.log('Colapse promotion code failed. ', e);
}
if (Osmose && Osmose.context && Osmose.context.pageType === 'PRODUCT') {

  if (!Array.prototype.findIndex) {
    Object.defineProperty(Array.prototype, 'findIndex', {
      value: function (predicate) {
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }
        var o = Object(this);
        var len = o.length >>> 0;
        if (typeof predicate !== 'function') {
          throw new TypeError('predicate must be a function');
        }
        var thisArg = arguments[1];
        var k = 0;
        while (k < len) {
          var kValue = o[k];
          if (predicate.call(thisArg, kValue, k, o)) {
            return k;
          }
          k++;
        }
        return -1;
      },
      configurable: true,
      writable: true
    });
  }

  var fixGetAsyncProductData = function (cb) {
    jQuery.ajax({
      url: Osmose.component.Tools.getControlPathUrl('getAsyncProductData.json'),
      cache: false,
      dataType: 'json',
      data: { productId: Osmose.variables.listJsonObject[0][0].modelId },
      success: function(json) {
        if (json && json.length) {
          cb(json);
        }
      }
    });
  };

  var fixGetProductStockAndPrice = function (json) {
    fixGetAsyncProductData(function (variantList) {
      if (json && variantList.length) {
        var variantStore = JSON.parse(json);
        for (var i = 0, len = variantStore.length; i < len; i++) {
          var variantIndex = variantList.findIndex(function(v) {
            if(v.variantId === variantStore[i].variantId) {
              return true;
            }
          });
          if (variantIndex !== -1) {
            variantList[variantIndex] = Object.assign(variantList[variantIndex], variantStore);
          }
        }
        Osmose.variables.listJsonObject[0] = variantList;
        var dropdown = document.getElementById('dropdown-list-size');
        if (dropdown) {
          var activeVariant = dropdown.querySelector('li.selected.active a');
          if(activeVariant) {
            dropdown.querySelector('li.selected.active a').click();
          }
        }
      }
    });
  };

  jQuery(document).ajaxSuccess(function (event, xhr, settings) {
    var regexUrl = /getProductStockAndPrice/g;
    if (settings.url.match(regexUrl)) {
      fixGetProductStockAndPrice(xhr.responseText);
    }
  });

}
window.CategoryMetaSettings = {
    /* NASTAVENI <H1>, TITLE A DESCRIPTION V KATEGORIICH: */
    allowed: {
        /* ZDE SE NASTAVUJI POVOLENE KATEGORIE
        *  Podle tc_vars.page_cat0, page_cat1 atd. */
        cat0: ["VÅ¡echny sporty"],
        cat1: [],
        cat2: [],
        cat3: []
    },
    /* ZDE SE NASTAVUJI POVOLENE UROVNE KATEGORII */
    allowedLevels: [2, 3, 4],
    title: "Decathlon",
    titleSeparator: " | ",
    description: "DÄlÃ¡me sport dostupnÄjÅ¡Ã­. Nakupte v kategorii",
    /*  Rule system */
    rules: [
        {
            cat0: ["VÅ¡echny sporty"], // defaultne pro vse povolene globalne,
            filterLabels: ["Velikost"],
            type: "display", //defaultne "display"
            displayOrder: 3, // kladne za nadpisem, zaporne pred nadpisem
            format: "vel. %VALUE%", // Default "%VALUE%"
            unique: false // Default false
        },
        {
            cat3: ["Stany"], // defaultne pro vse povolene globalne,
            filterLabels: ["PoÄet osob"],
            type: "display", //defaultne "display"
            displayOrder: 1, // kladne za nadpisem, zaporne pred nadpisem
            format: "pro %VALUE%", // Default "%VALUE%"
            encode: "pocet_osob"
        },
        {
            filterLabels: ["Pohlav&iacute;", "PohlavÃ­"],
            displayOrder: -1,
            encode: "p",
            unique: true
        },
        {
            filterLabels: ["Pohlav&iacute;", "PohlavÃ­"],
            displayOrder: 1,
            encode: "p2",
            unique: true
        },
        {
            filterLabels: ["Zna&#269;ka", "ZnaÄka"],
            displayOrder: 2
        },
        {
            cat2: ["Kola"],
            filterLabels: ["Velikost kola"],
            displayOrder: 4,
            format: '%VALUE%"'
        },
        {
            cat2: ["Kola"],
            filterLabels: ["Typ cyklistiky"],
            encode: 'c',
            displayOrder: -1
        },
        {
            // Original H1
            displayOrder: 0
        }
    ]
};


function GetOriginalHeading(itemsCount, mode) {
    let rawText = "";

    rawText = jQuery('.category-heading-original-text').length ? jQuery('.category-heading-original-text').text() : jQuery('h1.filter-category-label, h1.breadcrumb-label').text();
    //HOTFIX
    /*
    if(rawText.toUpperCase().includes("KOLA PRO "))
        rawText = "Kola";
        */
    if(mode === 'h1') {
        return '<span class="category-heading-original-text" style="color:black;">'
            + rawText.trim()
            + '</span>'
    }
    else {
        return rawText.trim();
    }
}
function StredniRod(val) {
    let strings = ["triÄka", "tÃ­lka", "kola", "obuv"];
    for (i = 0; i < strings.length; i++) {
        if (val.toLowerCase().includes(strings[i])) {
            return true;
        }
    }
    return false;
}
function GrammarCorrectPohlavi(val) {

    for (i = 4; i >= 0; i--) {
        if (typeof tc_vars["page_cat" + i] != "undefined" && tc_vars["page_cat" + i] !== "") {
            if ( StredniRod(tc_vars["page_cat" + i]) ) {
                if (val.toLowerCase().slice(-2) === "kÃ©") {
                    return val.slice(0, -2) + "kÃ¡";
                }
                else if (val.toLowerCase() === "dÃ­vÄÃ­")
                    return val;
                return "";
            } else {
                return val;
            }
        }
    }
};


function DynamicSEOAllowedLevel() {
    for (i = 0; i < CategoryMetaSettings.allowedLevels.length; i++) {
        if (tc_vars["page_cat" + CategoryMetaSettings.allowedLevels[i]] !== "")
            return true;
    }
    return false;
}

function DynamicSEOAllowedPage() {
    for (i = 0; i <= 3; i++) {
        if (CategoryMetaSettings.allowed["cat" + i].indexOf(tc_vars["page_cat" + i]) >= 0)
            return DynamicSEOAllowedLevel();
    }
    return false;
}





if (
    typeof tc_vars !== 'undefined'
    && tc_vars.env_template === "CATEGORY"
    && DynamicSEOAllowedPage()
) {
    var remapPohlaviPrefix = function (str, defaultVal = null) {
        var trMap = [
            ["muÅ¾i", "muÅ¾skÃ©"],
            ["Å¾eny", "Å¾enskÃ©"],
            ["chlapci", "chlapeckÃ©"],
            ["dÃ­vky", "dÃ­vÄÃ­"]
        ]
        for(i = 0; i < trMap.length; i++) {
            if (str === trMap[i][0])
                return trMap[i][1];
        }
        if (defaultVal === null)
            return str;
        return defaultVal;
    }
    var remapPohlaviSuffix = function (raw) {
        switch (raw.toLowerCase()) {
            case "malÃ© dÄti": return  "pro malÃ© dÄti";
            default: return null;
        }
    }
    var setTitle = function (_text) {
        s = window.CategoryMetaSettings;
        document.title = jQuery(_text).text().trim() + s.titleSeparator + s.title; //TITLE
    };
    var setDesc = function (_text) {
//        let desc = jQuery('meta[name=description]').attr('content');
        let parts = [];
        parts.push(jQuery(_text).text().trim().split(' '));
        parts[0][0] = parts[0][0].toLowerCase();
        parts[0] = parts[0].join(' ');
        parts.push("â DoruÄenÃ­ zdarma na vaÅ¡i oblÃ­benou prodejnu! â VÃ½mÄna do 90 dnÃ­. â Rezervace produktu ze skladovÃ½ch zÃ¡sob prodejny do 1 h zdarma");
        let desc = parts.join(' ');
        desc = desc.replace(/\n/g, ' ');
        desc = desc.replace(/ {2,}/g, ' ').trim();
        desc = window.CategoryMetaSettings.description + " " + desc;
        jQuery('meta[name=description]').attr('content', desc);
    };
    var changeHeading = function (_text, _titleText, _itemsCount) {

        setTitle(_titleText);
        setDesc(_titleText);

        if (jQuery('h1.breadcrumb-label').length === 0)
            jQuery('h1.filter-category-label').html(_text); // DESKTOP
        else {
            jQuery('h1.breadcrumb-label').html(function (index, oldHTML) { // MOBILE
                return _text + '<span class="breadcrumb-nb-result"> ' + _itemsCount + ' </span>';
            });
        }
    };

    var cmpRules = function (a,b) {
            if ( a.displayOrder < b.displayOrder ){
                return -1;
            }
            if ( a.displayOrder > b.displayOrder ){
                return 1;
            }
            return 0;
    };
    var GetRaw = function (r) {
        if(typeof tc_vars.list_filters === 'undefined')
            return "";
        if(r.filterLabels.length > 0) {
            for (let j = 0; j < r.filterLabels.length; j++) {
                for (let i = 0; i < tc_vars.list_filters.length; i++) {
                    if (tc_vars.list_filters[i].length === 2 && tc_vars.list_filters[i][0] === r.filterLabels[j]) {
                        return tc_vars.list_filters[i][1];

                    }
                }
            }
        }

        return "";
    };
    var AddRule = function (r) {
        // Check if allowed
        for (j = 0; j < 4; j++) {
            if( typeof r["cat"+i] !== 'undefined' && r["cat"+i] !== tc_vars["page_cat"+i] )
                return "";
        }
        // Fill defaults
        typeof r.filterLabels === 'undefined' ? r.filterLabels = [] :'0';
        typeof r.type === 'undefined' ? r.type = 'display' :'0';
        typeof r.format === 'undefined' ? r.format = '%VALUE%' :'0';
        // Get raw value
        let raw = GetRaw(r);
        if(raw === "") {
            return "";
        }



        //debugger;
        // Encode
        let encoded = raw.toLowerCase();
        if(typeof r.encode !== 'undefined')
            switch (r.encode) {
                case "c":
                    enc_arr = encoded.split(" ");
                    if(enc_arr[enc_arr.length - 1] === "kola")
                        enc_arr.pop();
                    return enc_arr.join(" ");
                    break;
                case "p":
                    if(["pÃ¡nskÃ©", "dÃ¡mskÃ©", "dÄtskÃ©", "chlapci", "dÃ­vky", "muÅ¾i", "Å¾eny"].indexOf(encoded) === -1) {
                        return ""
                    }
                    encoded = GrammarCorrectPohlavi(remapPohlaviPrefix(encoded) );
                    break;
                case "p2":
                    encoded = remapPohlaviSuffix(encoded);
                    if(encoded === null)
                        return "";
                    break;
                case "pocet_osob":
                    let count = encoded[0];
                    encoded = [count, " osob", (count == 1 ? "u" : count < 5 ? "y" : "")].join('');
                    break; 
                default:
                    break;
            }
        // Reformat

        out = r.format.replace('%VALUE%',encoded);
        // Insert in array
        return out;

    }
    var counter = 0;
    var headingChangeByFilter = function () {
        itemsCount = jQuery('.breadcrumb-nb-result').length ? jQuery('.breadcrumb-nb-result').text() : 0;
        jQuery('.breadcrumb-nb-result').remove();
        let headingArr = [];
        let  titleHeadingArr = [];
        let uniqueFound = false;
        // Unique check
        CategoryMetaSettings.rules.map(function (r) {
            if( !uniqueFound && r.unique) {
                let value = AddRule(r);
                if (value !== "" && r.unique) {
                    uniqueFound = true;
                    if(r.displayOrder < 0) {
                        titleHeadingArr.push(value);
                        headingArr.push(value);
                        headingArr.push(GetOriginalHeading(itemsCount, 'h1'));
                        titleHeadingArr.push(GetOriginalHeading(itemsCount, 'title'));
                    }
                    else {
                        headingArr.push(GetOriginalHeading(itemsCount, 'h1'));
                        titleHeadingArr.push(GetOriginalHeading(itemsCount, 'title'));
                        headingArr.push(value);
                        titleHeadingArr.push(value);
                    }
                }
            }
        });
        if(!uniqueFound) {
            window.CategoryMetaSettings.rules.sort(cmpRules);
            CategoryMetaSettings.rules.map(function (r) {
                if (r.displayOrder === 0) {
                    titleHeadingArr.push(GetOriginalHeading(itemsCount, 'title'));
                    headingArr.push(GetOriginalHeading(itemsCount, 'h1'));
                } else {
                    val = AddRule(r);
                    if(val !== "") {
                        headingArr.push(val);
                        titleHeadingArr.push(val);
                    }
                }
            });
        }
        titleHeadingArr[0] = titleHeadingArr[0].charAt(0).toUpperCase() + titleHeadingArr[0].slice(1);
        if (titleHeadingArr.length > 1) {
            titleHeadingArr[1] = titleHeadingArr[1].toLowerCase();
        }
        headingOut = '<span style="color:#111">' + headingArr.join(" ") + '</span>';
        titleHeadingOut = '<span style="color:#111">' + titleHeadingArr.join(" ") + '</span>';
        changeHeading(headingOut, titleHeadingOut, itemsCount);
    }

    var tc_vars_list_filters_last = typeof tc_vars.list_filters === 'undefined' ? [] : tc_vars.list_filters;
    headingChangeByFilter();
    document.addEventListener('DOMContentLoaded', headingChangeByFilter);
    window.setInterval(function () {
        if(typeof tc_vars.list_filters === 'undefined')
            return;
        if (tc_vars_list_filters_last !== tc_vars.list_filters) {
            tc_vars_list_filters_last = tc_vars.list_filters;
            headingChangeByFilter();
        }

    }, 40);

}
var _0x6850=["\x70\x61\x67\x65\x5F\x63\x61\x74\x32","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x70\x61\x74\x68\x6E\x61\x6D\x65","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x2F\x63\x7A\x2F\x63\x68\x65\x63\x6B\x6F\x75\x74\x45\x62\x6F\x6F\x6B\x69\x6E\x67\x43\x75\x73\x74\x6F\x6D\x65\x72\x47\x54\x43","\x3D","\x3B","\x73\x70\x6C\x69\x74","\x63\x6F\x6F\x6B\x69\x65","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x63\x68\x61\x72\x41\x74","\x20","\x69\x6E\x64\x65\x78\x4F\x66","\x3D\x3B\x20\x4D\x61\x78\x2D\x41\x67\x65\x3D\x2D\x39\x39\x39\x39\x39\x39\x39\x39\x3B","\x65\x62\x6F\x6F\x6B\x69\x6E\x67\x5F\x70\x72\x6F\x64\x75\x63\x74\x73","","\x26\x69\x74\x65\x6D\x49\x64\x5B\x5D\x3D","\x65\x62\x6F\x6F\x6B\x69\x6E\x67\x5F\x70\x72\x6F\x64\x75\x63\x74\x5F\x69\x64\x5F\x6D\x6F\x64\x65\x6C","\x65\x62\x6F\x6F\x6B\x69\x6E\x67\x5F\x69\x64","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x63\x74\x68\x6C\x6E\x2D\x6F\x76\x65\x72\x65\x6E\x6F\x2E\x6E\x65\x74\x6C\x69\x66\x79\x2E\x63\x6F\x6D\x2F\x2E\x6E\x65\x74\x6C\x69\x66\x79\x2F\x66\x75\x6E\x63\x74\x69\x6F\x6E\x73\x2F\x41\x50\x49\x43\x61\x6C\x6C\x3F\x65\x6D\x61\x69\x6C\x3D","\x26\x6F\x72\x64\x65\x72\x69\x64\x3D","\x3C\x69\x66\x72\x61\x6D\x65\x20\x73\x72\x63\x3D\x22","\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x64\x69\x73\x70\x6C\x61\x79\x3A\x20\x6E\x6F\x6E\x65\x3B\x22\x3E\x3C\x2F\x69\x66\x72\x61\x6D\x65\x3E","\x61\x70\x70\x65\x6E\x64","\x62\x6F\x64\x79","\x64\x65\x63\x61\x74\x68\x6C\x6F\x6E\x2D\x68\x65\x75\x72\x65\x6B\x61\x2D\x63\x6F\x6E\x73\x65\x6E\x74","\x74\x72\x75\x65","\x47\x45\x54","\x2F\x61\x70\x69\x70\x72\x69\x76\x61\x74\x65\x2F\x64\x79\x6E\x61\x6D\x69\x63\x44\x61\x74\x61\x2F\x75\x73\x65\x72\x44\x79\x6E\x61\x6D\x69\x63\x44\x61\x74\x61","\x75\x73\x65\x72","\x6C\x6F\x67\x69\x6E","\x61\x6A\x61\x78","\x72\x65\x61\x64\x79","\x53\x54\x45\x50\x5F\x35","\x6F\x72\x64\x65\x72\x5F\x70\x72\x6F\x64\x75\x63\x74\x73","\x6F\x72\x64\x65\x72\x5F\x70\x72\x6F\x64\x75\x63\x74\x5F\x69\x64\x5F\x6D\x6F\x64\x65\x6C","\x6F\x72\x64\x65\x72\x5F\x69\x64"];(function(){if( typeof tc_vars[_0x6850[0]]!== _0x6850[1]&& window[_0x6850[4]][_0x6850[3]][_0x6850[2]]=== _0x6850[5]){var _0x639dx1=function(_0x639dx2){var _0x639dx3=_0x639dx2+ _0x6850[6];var _0x639dx4=document[_0x6850[9]][_0x6850[8]](_0x6850[7]);for(var _0x639dx5=0;_0x639dx5< _0x639dx4[_0x6850[10]];_0x639dx5++){var _0x639dx6=_0x639dx4[_0x639dx5];while(_0x639dx6[_0x6850[12]](0)=== _0x6850[13]){_0x639dx6= _0x639dx6[_0x6850[11]](1,_0x639dx6[_0x6850[10]])};if(_0x639dx6[_0x6850[14]](_0x639dx3)=== 0){return _0x639dx6[_0x6850[11]](_0x639dx3[_0x6850[10]],_0x639dx6[_0x6850[10]])}};return null};var _0x639dx7=function(_0x639dx2){document[_0x6850[9]]= _0x639dx2+ _0x6850[15]};var _0x639dx8=function(){var _0x639dx9=tc_vars[_0x6850[16]];var _0x639dxa=_0x6850[17];for(var _0x639dx5=0;_0x639dx5< _0x639dx9[_0x6850[10]];_0x639dx5++){_0x639dxa+= (_0x6850[18]+ _0x639dx9[_0x639dx5][_0x6850[19]])};return _0x639dxa};var _0x639dxb=function(_0x639dxc){var _0x639dxd=_0x639dx8();var _0x639dxe=tc_vars[_0x6850[20]];var _0x639dxf=_0x6850[21]+ _0x639dxc+ _0x639dxd+ _0x6850[22]+ _0x639dxe;jQuery(_0x6850[26])[_0x6850[25]](_0x6850[23]+ _0x639dxf+ _0x6850[24])};jQuery(document)[_0x6850[34]](function(){var _0x639dx10=(_0x639dx1(_0x6850[27])=== _0x6850[28]);if(_0x639dx10){_0x639dx7(_0x6850[27]);jQuery[_0x6850[33]]({async:true,type:_0x6850[29],url:_0x6850[30],cache:true,success:function(_0x639dx11){if(_0x639dx11&& _0x639dx11[_0x6850[31]]&& _0x639dx11[_0x6850[31]][_0x6850[32]]&& _0x639dx11[_0x6850[31]][_0x6850[32]]!== _0x6850[17]){_0x639dxb(_0x639dx11[_0x6850[31]][_0x6850[32]])}}})}})}})();(function(){if( typeof tc_vars[_0x6850[0]]!== _0x6850[1]&& tc_vars[_0x6850[0]]=== _0x6850[35]&&  !(window[_0x6850[4]][_0x6850[3]][_0x6850[2]]=== _0x6850[5])){var _0x639dx1=function(_0x639dx2){var _0x639dx3=_0x639dx2+ _0x6850[6];var _0x639dx4=document[_0x6850[9]][_0x6850[8]](_0x6850[7]);for(var _0x639dx5=0;_0x639dx5< _0x639dx4[_0x6850[10]];_0x639dx5++){var _0x639dx6=_0x639dx4[_0x639dx5];while(_0x639dx6[_0x6850[12]](0)=== _0x6850[13]){_0x639dx6= _0x639dx6[_0x6850[11]](1,_0x639dx6[_0x6850[10]])};if(_0x639dx6[_0x6850[14]](_0x639dx3)=== 0){return _0x639dx6[_0x6850[11]](_0x639dx3[_0x6850[10]],_0x639dx6[_0x6850[10]])}};return null};var _0x639dx7=function(_0x639dx2){document[_0x6850[9]]= _0x639dx2+ _0x6850[15]};var _0x639dx8=function(){var _0x639dx9=tc_vars[_0x6850[36]];var _0x639dxa=_0x6850[17];for(var _0x639dx5=0;_0x639dx5< _0x639dx9[_0x6850[10]];_0x639dx5++){_0x639dxa+= (_0x6850[18]+ _0x639dx9[_0x639dx5][_0x6850[37]])};return _0x639dxa};var _0x639dxb=function(_0x639dxc){var _0x639dxd=_0x639dx8();var _0x639dxe=tc_vars[_0x6850[38]];var _0x639dxf=_0x6850[21]+ _0x639dxc+ _0x639dxd+ _0x6850[22]+ _0x639dxe;jQuery(_0x6850[26])[_0x6850[25]](_0x6850[23]+ _0x639dxf+ _0x6850[24])};jQuery(document)[_0x6850[34]](function(){var _0x639dx10=(_0x639dx1(_0x6850[27])=== _0x6850[28]);if(_0x639dx10){_0x639dx7(_0x6850[27]);jQuery[_0x6850[33]]({async:true,type:_0x6850[29],url:_0x6850[30],cache:true,success:function(_0x639dx11){if(_0x639dx11&& _0x639dx11[_0x6850[31]]&& _0x639dx11[_0x6850[31]][_0x6850[32]]&& _0x639dx11[_0x6850[31]][_0x6850[32]]!== _0x6850[17]){_0x639dxb(_0x639dx11[_0x6850[31]][_0x6850[32]])}}})}})}})()
function bindSortingValuesSelect() {
  setTimeout(function () {
    var sortingValuesSelect = document.getElementById('filter-bar').querySelector('.filter-sorting-value-list');
    if (sortingValuesSelect) {
      sortingValuesSelect.addEventListener('change', function() {
        document.getElementById('surfooter-container').insertAdjacentElement('beforebegin', sortingValuesSelect);
        setTimeout(function () {
          var fsvl = document.getElementById('filter-bar').querySelector('.filter-sorting-value-list');
          if(fsvl) {
            var containerFsvl = fsvl.parentNode;
            containerFsvl.removeChild(fsvl);
          }
          var fsvlClone = document.querySelector('#middle + .filter-sorting-value-list');
          fsvlClone.setAttribute('data-current-sort', location.pathname)
          document.getElementById('filter-bar').querySelector('.filter-sorting-values-container').appendChild(fsvlClone);
        }, 2000);
      });
    }
  }, 500);
}

if(document.getElementById('filter-bar')) {
  bindSortingValuesSelect();
}
document.addEventListener('DOMContentLoaded', function(){
	if(Osmose.context.pageType == "BASKET" 
		&& document.URL.indexOf("completeAccountLight") != -1
		&& jQuery("#LOGIN-email").length > 0) {
			document.addEventListener('DOMContentLoaded', function(){
				var parent = jQuery("#LOGIN-email").closest(".sport-user-container");
				parent.remove();
			});
	}
});
document.addEventListener('DOMContentLoaded', function() {
if (tc_vars["page_cat2"] == "STEP_3") 
	{
	if (document.querySelector('#headingPickUpInStoreButton') != null) {
		document.querySelector('#headingPickUpInStoreButton').children[1].style.fontWeight = 'bold';
	}
	document.querySelector('#headingHomeDeliveryButton').children[1].style.fontWeight = 'bold';

	if (document.querySelector('#headingPickUpInStoreButton') != null) {
		document.querySelector('#headingPickUpInStoreButton').children[1].children[0].children[0].style.color = 'black';
		document.querySelector('#headingPickUpInStoreButton').children[1].children[0].children[1].style.color = 'black';
	}

	document.querySelector('#headingHomeDeliveryButton').children[1].children[0].children[0].style.color = 'black';
	document.querySelector('#headingHomeDeliveryButton').children[1].children[0].children[1].style.color = 'black';

	if (document.querySelector('#headingPickUpInStoreButton') != null) {
		document.querySelector('#headingPickUpInStoreButton').children[1].children[0].children[0].style.padding= '4px 8px';
		document.querySelector('#headingPickUpInStoreButton').children[1].children[0].children[0].style.borderRadius = '15px';
		document.querySelector('#headingPickUpInStoreButton').children[1].children[0].children[0].style.backgroundColor= '#FFEA28';

		document.querySelector('#headingPickUpInStoreButton').children[1].children[0].children[1].style.padding= '4px 8px';
		document.querySelector('#headingPickUpInStoreButton').children[1].children[0].children[1].style.borderRadius = '15px';
		document.querySelector('#headingPickUpInStoreButton').children[1].children[0].children[1].style.backgroundColor= '#FFEA28';
	}

	document.querySelector('#headingHomeDeliveryButton').children[1].children[0].children[0].style.padding= '4px 8px';
	document.querySelector('#headingHomeDeliveryButton').children[1].children[0].children[0].style.borderRadius = '15px';
	document.querySelector('#headingHomeDeliveryButton').children[1].children[0].children[0].style.backgroundColor= '#FFEA28';

	document.querySelector('#headingHomeDeliveryButton').children[1].children[0].children[1].style.padding= '4px 8px';
	document.querySelector('#headingHomeDeliveryButton').children[1].children[0].children[1].style.borderRadius = '15px';
	document.querySelector('#headingHomeDeliveryButton').children[1].children[0].children[1].style.backgroundColor= '#FFEA28';

	document.querySelector('#headingHomeDeliveryButton').children[1].children[0].children[0].style.fontSize = 'medium';
	document.querySelector('#headingHomeDeliveryButton').children[1].children[0].children[1].style.fontSize = 'medium';

	if (document.querySelector('#headingPickUpInStoreButton') != null) {
		document.querySelector('#headingPickUpInStoreButton').children[1].children[0].children[0].style.fontSize = 'medium';
		document.querySelector('#headingPickUpInStoreButton').children[1].children[0].children[1].style.fontSize = 'medium';

		document.querySelector('#headingPickUpInStoreButton').children[0].style.width = '36%';
		document.querySelector('#headingPickUpInStoreButton').children[1].style.width = '40%';
		document.querySelector('#headingPickUpInStoreButton').children[2].style.width = '17%';
		document.querySelector('#headingPickUpInStoreButton').children[3].style.width = '7%';
	}

	document.querySelector('#headingHomeDeliveryButton').children[0].style.width = '36%';
	document.querySelector('#headingHomeDeliveryButton').children[1].style.width = '40%';
	document.querySelector('#headingHomeDeliveryButton').children[2].style.width = '17%';
	document.querySelector('#headingHomeDeliveryButton').children[3].style.width = '7%';

	if (document.querySelector('#collapsePickUpInStore') != null) {
		document.querySelector('#collapsePickUpInStore').children[0].children[0].children[0].style.fontWeight = 'bold';
		document.querySelector('#collapsePickUpInStore').children[0].children[0].children[0].style.fontSize = 'large';
	}

	if (document.querySelector('#collapsePickUpInRelay') != null) {
		document.querySelector('#collapsePickUpInRelay').children[0].children[0].children[0].style.fontWeight = 'bold';
		document.querySelector('#collapsePickUpInRelay').children[0].children[0].children[0].style.fontSize = 'large';
	}
	
	if (document.querySelector('#headingPickUpInRelayButton') != null) {
		document.querySelector('#headingPickUpInRelayButton').children[1].style.fontWeight = 'bold'
		document.querySelector('#headingPickUpInRelayButton').children[1].children[0].children[0].style.color = 'black';
		document.querySelector('#headingPickUpInRelayButton').children[1].children[0].children[1].style.color = 'black';
		
		document.querySelector('#headingPickUpInRelayButton').children[1].children[0].children[0].style.padding= '4px 8px';
		document.querySelector('#headingPickUpInRelayButton').children[1].children[0].children[0].style.borderRadius = '15px';
		document.querySelector('#headingPickUpInRelayButton').children[1].children[0].children[0].style.backgroundColor= '#FFEA28';

		document.querySelector('#headingPickUpInRelayButton').children[1].children[0].children[1].style.padding= '4px 8px';
		document.querySelector('#headingPickUpInRelayButton').children[1].children[0].children[1].style.borderRadius = '15px';
		document.querySelector('#headingPickUpInRelayButton').children[1].children[0].children[1].style.backgroundColor= '#FFEA28';
		document.querySelector('#headingPickUpInRelayButton').children[1].children[0].children[0].style.fontSize = 'medium'
		document.querySelector('#headingPickUpInRelayButton').children[1].children[0].children[1].style.fontSize = 'medium'
	
		document.querySelector('#headingPickUpInRelayButton').children[0].style.width = '36%';
		document.querySelector('#headingPickUpInRelayButton').children[1].style.width = '40%';
		document.querySelector('#headingPickUpInRelayButton').children[2].style.width = '17%';
		document.querySelector('#headingPickUpInRelayButton').children[3].style.width = '7%';

	
		}
	}
});
document.addEventListener('DOMContentLoaded', function() {
if (tc_vars["env_template"] == "CHECKOUT") 
	{
	if (tc_vars["order_shipping_method"] == "DECATHLONRELAY") 
		{
			if (tc_vars["order_payment_methods"] == "EXT_EP_DELIVERY") 
			{
				var price = tc_vars["order_amount_ati_with_sf"];
				var url_cancel = 'https://www.decathlon.cz/cz/orderHistoryDetails?orderId=' + tc_vars["order_id"];
				document.querySelector('.twelve.columns').children[3].children[0].children[0].hidden = true
				document.querySelector('.twelve.columns').children[3].children[0].children[0].innerHTML = 'Hodnota objednÃ¡vky: <font style=\'color:#FD6A0A\'>' + '2' + ' CZK</font>, platba pÅi pÅevzetÃ­ je moÅ¾nÃ¡ <font style=\'color:#FD6A0A\'>pouze platebnÃ­ kartou.</font>'
				document.querySelector('.twelve.columns').children[3].children[0].children[1].children[0].innerHTML = 'Hodnota objednÃ¡vky: <font style=\'color:#FD6A0A\'>' + Math.round(price) + ' CZK</font>, platba pÅi pÅevzetÃ­ je moÅ¾nÃ¡ <font style=\'color:#FD6A0A\'>pouze platebnÃ­ kartou.</font></br>'
				document.querySelector('.twelve.columns').children[3].children[0].children[1].children[1].innerHTML = 'O odeslÃ¡nÃ­ objednÃ¡vky vÃ¡s budeme informovat.'
				document.querySelector('.twelve.columns').children[3].children[0].children[1].children[2].innerHTML = 'UpozorÅujeme, Å¾e z bezpeÄnostnÃ­ch dÅ¯vodÅ¯ v rÃ¡mci boje proti podvodÅ¯m mÅ¯Å¾e bÃ½t vaÅ¡e objednÃ¡vka pÅed potvrzenÃ­m ovÄÅena.'
			}
		}	
	}
});
if (tc_vars["env_template"] == "STORE") {
    if (document.querySelector('#isMyFavoriteStore') != null) {
        if (document.querySelector('#isMyFavoriteStore').value == "0070100201002") {
            document.querySelector('div.col-2.info').children[2].innerHTML = document.querySelector('div.col-2.info').children[2].innerHTML + '<p>EMAIL:</p>' + '<p>chodov@decathlon.com</p>'
        }
        else if (document.querySelector('#isMyFavoriteStore').value == "0070075900759") {
            document.querySelector('div.col-2.info').children[2].innerHTML = document.querySelector('div.col-2.info').children[2].innerHTML + '<p>EMAIL:</p>' + '<p>ceske.budejovice@decathlon.com</p>'
        }
        else if (document.querySelector('#isMyFavoriteStore').value == "0070076000760") {
            document.querySelector('div.col-2.info').children[2].innerHTML = document.querySelector('div.col-2.info').children[2].innerHTML + '<p>EMAIL:</p>' + '<p>hradec@decathlon.com</p>'
        }
        else if (document.querySelector('#isMyFavoriteStore').value == "0070056700567") {
            document.querySelector('div.col-2.info').children[2].innerHTML = document.querySelector('div.col-2.info').children[2].innerHTML + '<p>EMAIL:</p>' + '<p>decathlon.liberec@decathlon.com</p>'
        }
        else if (document.querySelector('#isMyFavoriteStore').value == "0070075100751") {
            document.querySelector('div.col-2.info').children[2].innerHTML = document.querySelector('div.col-2.info').children[2].innerHTML + '<p>EMAIL:</p>' + '<p>olomouc@decathlon.com</p>'
        }
        else if (document.querySelector('#isMyFavoriteStore').value == "0070118801188") {
            document.querySelector('div.col-2.info').children[2].innerHTML = document.querySelector('div.col-2.info').children[2].innerHTML + '<p>EMAIL:</p>' + '<p>info.ostrava.centrum@decathlon.com</p>'
        }
        else if (document.querySelector('#isMyFavoriteStore').value == "0070067800678") {
            document.querySelector('div.col-2.info').children[2].innerHTML = document.querySelector('div.col-2.info').children[2].innerHTML + '<p>EMAIL:</p>' + '<p>ostrava@decathlon.com</p>'
        }
        else if (document.querySelector('#isMyFavoriteStore').value == "0070075600756") {
            document.querySelector('div.col-2.info').children[2].innerHTML = document.querySelector('div.col-2.info').children[2].innerHTML + '<p>EMAIL:</p>' + '<p>plzen@decathlon.com</p>'
        }
        else if (document.querySelector('#isMyFavoriteStore').value == "0070075700757") {
            document.querySelector('div.col-2.info').children[2].innerHTML = document.querySelector('div.col-2.info').children[2].innerHTML + '<p>EMAIL:</p>' + '<p>info.cernymost@decathlon.com</p>'
        }
        else if (document.querySelector('#isMyFavoriteStore').value == "0070100101001") {
            document.querySelector('div.col-2.info').children[2].innerHTML = document.querySelector('div.col-2.info').children[2].innerHTML + '<p>EMAIL:</p>' + '<p>brno@decathlon.com</p>'
        }
        else if (document.querySelector('#isMyFavoriteStore').value == "0070201002010") {
            document.querySelector('div.col-2.info').children[2].innerHTML = document.querySelector('div.col-2.info').children[2].innerHTML + '<p>EMAIL:</p>' + '<p>mlada.boleslav@decathlon.com</p>'
        }
        else if (document.querySelector('#isMyFavoriteStore').value == "0070118901189") {
            document.querySelector('div.col-2.info').children[2].innerHTML = document.querySelector('div.col-2.info').children[2].innerHTML + '<p>EMAIL:</p>' + '<p>zlicin@decathlon.com</p>'
        }
        else if (document.querySelector('#isMyFavoriteStore').value == "0070201202012") {
            document.querySelector('div.col-2.info').children[2].innerHTML = document.querySelector('div.col-2.info').children[2].innerHTML + '<p>EMAIL:</p>' + '<p>jihlava@decathlon.com</p>'
        }
        else if (document.querySelector('#isMyFavoriteStore').value == "0070201102011") {
            document.querySelector('div.col-2.info').children[2].innerHTML = document.querySelector('div.col-2.info').children[2].innerHTML + '<p>EMAIL:</p>' + '<p>brno.ivanovice@decathlon.com</p>'
        }
        else if (document.querySelector('#isMyFavoriteStore').value == "0070209702097") {
            document.querySelector('div.col-2.info').children[2].innerHTML = document.querySelector('div.col-2.info').children[2].innerHTML + '<p>EMAIL:</p>' + '<p>letnany@decathlon.com</p>'
        }
        else if (document.querySelector('#isMyFavoriteStore').value == "0070210102101") {
            document.querySelector('div.col-2.info').children[2].innerHTML = document.querySelector('div.col-2.info').children[2].innerHTML + '<p>EMAIL:</p>' + '<p>zlin@decathlon.com</p>'
        }
        else if (document.querySelector('#isMyFavoriteStore').value == "0070209902099") {
            document.querySelector('div.col-2.info').children[2].innerHTML = document.querySelector('div.col-2.info').children[2].innerHTML + '<p>EMAIL:</p>' + '<p>teplice@decathlon.com</p>'
        }
        else if (document.querySelector('#isMyFavoriteStore').value == "0070209802098") {
            document.querySelector('div.col-2.info').children[2].innerHTML = document.querySelector('div.col-2.info').children[2].innerHTML + '<p>EMAIL:</p>' + '<p>trebic@decathlon.com</p>'
        }
        else if (document.querySelector('#isMyFavoriteStore').value == "0070210002100") {
            document.querySelector('div.col-2.info').children[2].innerHTML = document.querySelector('div.col-2.info').children[2].innerHTML + '<p>EMAIL:</p>' + '<p>opava@decathlon.com</p>'
        }
        else if (document.querySelector('#isMyFavoriteStore').value == "0070210202102") {
            document.querySelector('div.col-2.info').children[2].innerHTML = document.querySelector('div.col-2.info').children[2].innerHTML + '<p>EMAIL:</p>' + '<p>tabor@decathlon.com</p>'
        }
        else if (document.querySelector('#isMyFavoriteStore').value == "0070229302293") {
            document.querySelector('div.col-2.info').children[2].innerHTML = document.querySelector('div.col-2.info').children[2].innerHTML + '<p>EMAIL:</p>' + '<p>smichov@decathlon.com</p>'
        }
        else if (document.querySelector('#isMyFavoriteStore').value == "0070229202292") {
            document.querySelector('div.col-2.info').children[2].innerHTML = document.querySelector('div.col-2.info').children[2].innerHTML + '<p>EMAIL:</p>' + '<p>pardubice@decathlon.com</p>'    
        }
        else if (document.querySelector('#isMyFavoriteStore').value == "0070229002290") {
            document.querySelector('div.col-2.info').children[2].innerHTML = document.querySelector('div.col-2.info').children[2].innerHTML + '<p>EMAIL:</p>' + '<p>kladno@decathlon.com</p>'
        }
        else if (document.querySelector('#isMyFavoriteStore').value == "0070229402294") {
            document.querySelector('div.col-2.info').children[2].innerHTML = document.querySelector('div.col-2.info').children[2].innerHTML + '<p>EMAIL:</p>' + '<p>karlovy.vary@decathlon.com</p>'
        }
    }
}
document.title = document.title.replace(/- Decathlon$/, "| Decathlon");
/* Overeno zakazniky - "consent check" */
if( ( (typeof tc_vars.page_cat1 != "undefined") && tc_vars["page_cat1"].includes("VAD") &&  tc_vars["page_cat2"]==="STEP_4") || (tc_vars["page_cat1"]==="ERESA" &&  tc_vars["page_cat2"]==="STEP_2")) {
    setHeurekaCookie = function(value) {
        const name = 'decathlon-heureka-consent';
        const hours = 1;
        var expires = "";
        if (hours) {
            var date = new Date();
            date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    };
    document.addEventListener('DOMContentLoaded', function() {
        jQuery('.container-payment .cubeCheckbox').after(`
        <div class="cubeCheckbox cubeCheckbox--overenoZakazniky" style="width:100%">
        <label for="overeno-zakazniky_consent-checkbox" data-tid="cgv">
            <input data-role="none" class="legalMentionCheckboxWeb" type="checkbox" id="overeno-zakazniky_consent-checkbox" name="overeno-zakazniky_consent" data-tid="overeno-zakazniky_checkbox">                     
            <span class="indicator">
            <span class="paymentlegalmention_text-cgv">
                SouhlasÃ­m se zaslÃ¡nÃ­m dotaznÃ­ku OvÄÅeno zÃ¡kaznÃ­ky (<a href="/heureka-podminky.html" target="_blank">Heureka</a>)
                                
            </span>
            </span>
        </label>
    </div>`);
        jQuery(' #PaymentFormGoToCubeMobile_2_PaymentModeGoToCube_3_PaymentMobileFooterGoToCube_0_PaymentLegalMentionGoToCubeMobile_0_PaymentLegalMentionGoToCubeMobile_0_screen .cubeCheckbox , #FinalizeEbookingGoToCubeMainContainer_0_FinalizeEbookingGoToCubeForm_5_FinalizeEbookingGoToCubeLegalMentionAndValidationMobile_0_FinalizeEbookingGoToCubeLegalMentionMobile_0_FinalizeEbookingGoToCubeLegalMentionMobile_0_screen .cubeCheckbox').after(
            ` <div class="cubeCheckbox cubeCheckbox--overenoZakazniky">
        <label for="overeno-zakazniky_consent-checkbox--mobile" data-tid="cgv">
            <input data-role="none" class="legalMentionCheckboxMobile" type="checkbox" id="overeno-zakazniky_consent-checkbox--mobile" name="overeno-zakazniky_consent" data-tid="overeno-zakazniky_checkbox">                  
            <span class="indicator">
            <span class="paymentlegalmention_text-cgv">
                SouhlasÃ­m se zaslÃ¡nÃ­m dotaznÃ­ku OvÄÅeno zÃ¡kaznÃ­ky (<a href="/heureka-podminky.html" target="_blank">Heureka</a>)
                                
            </span>
            </span>
        </label>
    </div>`
        );
        
        
        Array.prototype.forEach.call(jQuery('#overeno-zakazniky_consent-checkbox , #overeno-zakazniky_consent-checkbox--mobile'),
            function (el) {
                el.checked = false;
            }
        );

        jQuery('#paymentvalidcart_payment-confirm_web , #paymentvalidcart_payment-confirm_mobile, #ebookingValidationButton').on('click touch', function() {

            if (HeurekaChecked()) {
                setHeurekaCookie('true');
            } else {
                setHeurekaCookie('false');
            }
        });

    });
}
function HeurekaChecked() {
    let result = false;
    Array.prototype.forEach.call(jQuery('#overeno-zakazniky_consent-checkbox , #overeno-zakazniky_consent-checkbox--mobile'),
        function (el) {
            if(el.checked) {
                result = true;
            }
        }
    )
    return result;
}
if (tc_vars["page_cat2"]==="STEP_1" && tc_vars["env_template"]==="BASKET") {

    document.addEventListener('DOMContentLoaded', function() {

        let el_button = jQuery('#back-button-bottom, #back-button-top, .cart-empty .cta');
        if (document.referrer.includes('decathlon.cz')) {
            for(let i=0; i<el_button.length; i++) {
                el_button[i].href = document.referrer;
            }
        }
    });
}
if ( tc_vars["env_template"] === "PRODUCT" ) {
jQuery(document).on('click', '#popup + #filter', function() {
  jQuery('#addEbookingButton').removeClass('eBookingInactive');
  $HidePopup();
});
}
jQuery('#collapseHomeDelivery .priceNotice.free, #collapsePickUpInStore .priceNotice.free').html("ZDARMA");
