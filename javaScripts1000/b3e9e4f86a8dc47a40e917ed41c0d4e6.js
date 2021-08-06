!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=4)}([function(module,exports,__webpack_require__){"use strict";function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}return Array.from(arr)}function merge(a,b){return a="object"===(void 0===a?"undefined":_typeof(a))?a:{},b="object"===(void 0===b?"undefined":_typeof(b))?b:{},Object.keys(a).concat(Object.keys(b)).reduce(function(merged,key){return merged[key]=b[key]||a[key],merged},{})}function tryOrLogError(fn){try{return fn()}catch(err){for(var _console,_len=arguments.length,messages=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)messages[_key-1]=arguments[_key];(_console=console).error.apply(_console,messages.concat([err]))}}Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},ERROR_CUSTOM_DATA=function(event){return"Ocorreu um erro ao tentar obter dados customizados para o evento '"+event+"'.\n\n"},helpers={waitFor:function(pred){var options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(resolve){var interval=options.interval||200,retries="number"==typeof options.retries?options.retries:10;setTimeout(function callback(retryCount){return function(){retries>0&&retryCount>=retries||pred()?resolve():setTimeout(callback(retryCount+1),interval)}}(0),interval)})},waitForWithReject:function(pred){var options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(resolve,reject){var interval=options.interval||200,retries="number"==typeof options.retries?options.retries:10;setTimeout(function callback(retryCount){return function(){retries>0&&retryCount<=retries?pred()?resolve():setTimeout(callback(retryCount+1),interval):retryCount>retries&&"function"==typeof reject&&reject()}}(0),interval)})},mergeObjects:function(){for(var _len2=arguments.length,objs=Array(_len2),_key2=0;_key2<_len2;_key2++)objs[_key2]=arguments[_key2];return objs.reduce(merge,{})},buildCustomDataProvider:function(){for(var _len3=arguments.length,dependencies=Array(_len3>1?_len3-1:0),_key3=1;_key3<_len3;_key3++)dependencies[_key3-1]=arguments[_key3];var source=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{identify:identify,track:track};return{getCustomUserData:function(){var _source$identify;return"object"===(void 0===source?"undefined":_typeof(source))&&"function"==typeof source.identify?tryOrLogError((_source$identify=source.identify).bind.apply(_source$identify,[null,{}].concat(dependencies))):{}},getCustomEventData:function(event){var _source$track$event,params=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"object"===(void 0===source?"undefined":_typeof(source))&&"object"===_typeof(source.track)&&"function"==typeof source.track[event]?tryOrLogError((_source$track$event=source.track[event]).bind.apply(_source$track$event,[null,params].concat(dependencies)),ERROR_CUSTOM_DATA(event)):{}}}},formatBirthday:function(birthday){if(!birthday||10!==birthday.length)return null;if(birthday.match("-")){var splitBirthday=birthday.split("-");if(4===splitBirthday[0].length&&"Invalid Date"!==new Date(birthday).toString())return birthday;if(4===splitBirthday[2].length&&"Invalid Date"!==new Date(splitBirthday[2]+"-"+splitBirthday[1]+"-"+splitBirthday[0]).toString())return splitBirthday[2]+"-"+splitBirthday[1]+"-"+splitBirthday[0]}if(birthday.match("/")){var _splitBirthday=birthday.split("/");if("Invalid Date"!==new Date(_splitBirthday[1]+"/"+_splitBirthday[0]+"/"+_splitBirthday[2]).toString())return _splitBirthday[2]+"-"+_splitBirthday[1]+"-"+_splitBirthday[0]}return null},transformDataJs:function(selector){return[].concat(_toConsumableArray(document.querySelectorAll(selector))).reduce(function(initial,curr){return curr.value&&(initial[curr.name]=curr.value),initial},{})},track:function(pages){pages.forEach(function(page){helpers.isPath(page.regex)&&dito.track({action:page.action,data:page.data})})},dig:function(ground,layers,structure){return layers=layers.split("."),ground&&1==layers.length?ground[layers[0]]||structure:ground&&ground[layers[0]]?helpers.dig(ground[layers[0]],layers.slice(1).join("."),structure)||structure:structure},formatGender:function(str){var males=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["m","masculino"],females=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["f","feminino"];if(str&&0!==str.length)return males.some(function(value){return value===str.toLowerCase().trim()})?"male":females.some(function(value){return value===str.toLowerCase().trim()})?"female":void 0},formatPrices:function(text){if(text&&0!==text.length)return parseFloat(text.replace(/R\$(\s?)/,"").replace(/\./g,"").replace(/,/g,".").trim())},formatCpf:function(text){return String(text).replace(/\W/g,"")||void 0},formatCnpj:function(text){return text.replace(/\./g,"").replace(/-/g,"").replace(/\//g,"").trim().toString()},formatHyphen:function(text){return String(text).replace(/-/g," ").toString()},formatAction:function(str){return str=String(str).trim(),str.replace(/[Ã¡Ã Ã¤Ã¢Ã£ÃÃÃÃÃ]/g,"a").replace(/[Ã©Ã¨Ã«áº½ÃªÃÃÃáº¼]/g,"e").replace(/[Ã­Ã¬Ä©Ã®Ã¯ÃÃÄ¨ÃÃ]/g,"i").replace(/[Ã³ÃµÃ²Ã´Ã¶ÃÃÃÃÃ]/g,"o").replace(/[ÃºÅ©Ã¹Ã»Ã¼ÃÃÅ¨ÃÃ]/g,"u").replace(/Ã§/g,"c").replace(/\s|\_/g,"-").replace(/\-+/g,"-").toLowerCase().replace(/[^a-z\-]/g,"").replace(/-*$/,"")},formatPhone:function(phone){return phone?phone.toString().replace(/\D/g,""):""},isUnmasked:function(text){return-1===text.indexOf("*")},isPath:function(pathname){return window.location.pathname.match(pathname)},isPathHash:function(pathname){return window.location.hash.match(pathname)},getFormData:function(selector){if(void 0===("undefined"==typeof jQuery?"undefined":_typeof(jQuery)))return{};var form=jQuery(selector).serializeArray(),data={};return form.forEach(function(element){data[element.name]=element.value}),data},pathSearch:function(string){return window.location.search.match(string)},clearEmptyValue:function(obj){for(var prop in obj)null===obj[prop]||void 0===obj[prop]||""===obj[prop]||" "===obj[prop]?delete obj[prop]:"object"===_typeof(obj[prop])&&helpers.clearEmptyValue(obj[prop])},getUrlParameter:function(name){name=name.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var regex=new RegExp("[\\?&]"+name+"=([^&#]*)"),results=regex.exec(location.search);return null===results?"":decodeURIComponent(results[1].replace(/\+/g," "))},arrayUnique:function(array){return array.filter(function(item,pos){return array.indexOf(item)==pos}),array}};helpers.html={findParentByClass:function(element,className){if(!element||!element.parentNode)return null;var parent=element.parentNode;return parent.classList.contains(className)?parent:helpers.html.findParentByClass(parent,className)},findElement:function(selectorOrSelectors){if("string"==typeof selectorOrSelectors)return document.querySelector(selectorOrSelectors);var _iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,_iterator=selectorOrSelectors[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){var selector=_step.value,element=helpers.html.findElement(selector);if(element)return element}}catch(err){_didIteratorError=!0,_iteratorError=err}finally{try{!_iteratorNormalCompletion&&_iterator.return&&_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}}},helpers.validate={email:function(s){var validHtml=new RegExp("<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>");if(s&&0!==s.length&&!validHtml.test(s))return s.match(/^([a-zA-Z0-9_\-\.+]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)}},exports.default=helpers},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _helpers=__webpack_require__(0),_helpers2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_helpers),gtm={_listeners:{},data:function(name){var data=void 0;return(window.dataLayer||[]).forEach(function(obj){return obj[name]&&(data=obj[name])}),data},on:function(eventName,func){var listeners=gtm._listeners[eventName]||[];listeners.push(func),gtm._listeners[eventName]=listeners},install:function(){return _helpers2.default.waitFor(function(){return window.dataLayer},{retries:0}).then(function(){var notifyListeners=function(d){d.event&&gtm._listeners[d.event]&&gtm._listeners[d.event].forEach(function(f){return f(d)})},dataLayer=window.dataLayer||[],push=dataLayer.push.bind(dataLayer);dataLayer.push=function(d){push(d),notifyListeners(d)},dataLayer.forEach(notifyListeners)})}};exports.default=gtm},,,function(module,exports,__webpack_require__){"use strict";var _vtex=__webpack_require__(5),_vtex2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_vtex),ADD_TO_CART={clickSelector: ''},NEWSLETTER={clickSelector: '#newsletterButtonOK', emailSelector: '#newsletterClientEmail', nameSelector: ''},POPUP={clickSelector: '', emailSelector: '', nameSelector: ''},CUSTOM_DATA={
  track: {
    'acessou-checkout-email': function(params, dito, gtm){
      return { transportadora: gtm.data('orderFormShippingMethod')[0] }
    },
    'acessou-checkout-dados-pessoais': function(params, dito, gtm){
      return { transportadora: gtm.data('orderFormShippingMethod')[0] }
    },
    'acessou-checkout-endereco-entrega': function(params, dito, gtm){
      return { transportadora: gtm.data('orderFormShippingMethod')[0] }
    },
    'acessou-checkout-pagamento': function(params, dito, gtm){
      return { transportadora: gtm.data('orderFormShippingMethod')[0] }
    },
  }
},CUSTOM_EVENTS={
  addToCart: function(params, dito, gtm) {
    var btn = document.getElementsByClassName('buy-button buy-button-ref');
    var btns = document.getElementsByClassName('btn btn-green-large');
  
    if (btn.length == 0 || btns.length == 0) return
  
    btn[0].addEventListener('click', function() {
      dito.track({
        action: 'adicionou-produto-ao-carrinho',
        data: {
          id_produto: gtm.data('productId'),
          categorias_produto: gtm.data('productCategoryName'),
          nome_departamento: gtm.data('productDepartmentName'),
          nome_produto: gtm.data('productName'),
          preco_produto: parseFloat(gtm.data('productPriceFrom')),
          marca: gtm.data('productBrandName'),
          seller_id: gtm.data('sellerId'),
          url_produto: gtm.data('pageUrl')
        }
      });
    });
  
    for (var i = 0; i < btns.length; i += 1) {
      btns[i].addEventListener('click', function(){
        dito.track({
          action: 'adicionou-produto-ao-carrinho',
          data: {
            id_produto: gtm.data('productId'),
            categorias_produto: gtm.data('productCategoryName'),
            nome_departamento: gtm.data('productDepartmentName'),
            nome_produto: gtm.data('productName'),
            preco_produto: parseFloat(gtm.data('productPriceFrom')),
            marca: gtm.data('productBrandName'),
            seller_id: gtm.data('sellerId'),
            url_produto: gtm.data('pageUrl')
          }
        });
      })
    };
  },

  newProductSearch: function(params, dito, gtm) {
    gtm.on('biggy.search.query', function(event) {
      if (!window.location.search) return
      dito.track({
        action: 'buscou-produto',
        data: {
          termo: event.biggy.text
        }
      })
    })
  }

},CONFIGS={id: 'cpf', revenue: false, newsletter: true};_vtex2.default.install({addToCart:ADD_TO_CART,newsletter:NEWSLETTER,popup:POPUP,customData:CUSTOM_DATA,customEvents:CUSTOM_EVENTS,configs:CONFIGS})},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _helpers=__webpack_require__(0),_helpers2=_interopRequireDefault(_helpers),_gtm=__webpack_require__(1),_gtm2=_interopRequireDefault(_gtm),mergeObjects=_helpers2.default.mergeObjects,formatString=function(field){if(field&&!field.match(/&lt;|<|>|iframe/))return field},clearData=function(data){Object.keys(data).length&&Object.keys(data).forEach(function(item){"data"!==item&&(data[item]=formatString(data[item]))})},parseCartFloat=function(value){return-1===value.toString().indexOf(".")?value/100:value},cartData=function(action){var shipping=parseCartFloat(_gtm2.default.data("orderFormShipping")||0),total=parseCartFloat(_gtm2.default.data("orderFormTotal")||0),subtotal=total-shipping;return{quantidade_produtos:_gtm2.default.data("orderFormProducts").length,total:total,subtotal:subtotal,total_frete:shipping}},_configs={},checkoutUserData=function(){return _helpers2.default.waitFor(function(){return $&&$(".neighborhood").length>0&&$(".city").length>0&&$(".state").length>0&&$(".street").length>0&&$(".number").length>0&&$(".complement").length>0}).then(function(){var email=$("#client-pre-email"),firstName=$("#client-first-name"),lastName=$("#client-last-name"),cpf=$("#client-document"),phone=$("#client-phone"),newsletter=$("#opt-in-newsletter"),companyName=$("#client-company-name"),companyNickname=$("#client-company-nickname"),companyIe=$("#client-company-ie"),cnpj=$("#client-company-document"),neighborhood=$(".neighborhood").text(),city=$(".city").text(),state=$(".state").text(),street=$(".street").text(),number=$(".number").text(),info=$(".complement").text();0===neighborhood.length&&3===$(".ship-info-text span").length&&(neighborhood=$(".ship-info-text span")[0].innerHTML),0===city.length&&3===$(".ship-info-text span").length&&(city=$(".ship-info-text span")[1].innerHTML),0===state.length&&3===$(".ship-info-text span").length&&(state=$(".ship-info-text span")[2].innerHTML),0===street.length&&$(".ship-street-text span").length>0&&(street=$(".ship-street-text span")[0].innerHTML),0===number.length&&(number=$("#ship-number").val()),0===info.length&&(info=$("#ship-more-info").val());var address=[street,number,info].join(" ").trim();if(_helpers2.default.validate.email(email.val())){var user={email:email.val(),data:{opt_in_newsletter:newsletter.is(":checked")?"Sim":"NÃ£o"}},name=firstName.val()+" "+lastName.val(),cpfIsUnmasked=-1===cpf.val().indexOf("*");cpfIsUnmasked&&cpf.val().length>0&&(user.name=name,user.data.cpf=cpf.val(),user.data.telefone=phone.val()),"cpf"===_configs.id&&cpfIsUnmasked&&cpf.val().length>0?user.id=_helpers2.default.formatCpf(cpf.val()):_helpers2.default.validate.email(email.val())&&(user.id=dito.generateID(email.val()));-1===cnpj.val().indexOf("*")&&cnpj.val().length>0&&(user.name=name,user.data.telefone=phone.val(),user.data.cnpj=cnpj.val(),user.data.nome_fantasia=companyNickname.val(),user.data.razao_social=companyName.val(),user.data.inscricao_estadual=companyIe.val());return-1===city.indexOf("*")&&(city.length>0&&(user.location=city),address.length>0&&(user.data.endereco=address),neighborhood.length>0&&(user.data.bairro=neighborhood),state.length>0&&(user.data.uf=state)),clearData(user.data),clearData(user),user}return null})},accountPageUserData=function(){return $(".vtex-profile-form__profile-summary label").toArray().reduce(function(acc,atual){var label=atual.innerHTML.replace(/ /g,"_").normalize("NFD").replace(/[\u0300-\u036f]|-/g,"").toLowerCase(),value=atual.nextSibling.innerHTML;return acc[label]=value,acc},{})},buildTrackings=function(_ref){var getCustomEventData=_ref.getCustomEventData,getCustomUserData=_ref.getCustomUserData;return{configs:function(){var params=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_configs=params},userLogin:function(){"cpf"!==_configs.id&&_gtm2.default.on("gtm.load",function(){if(_gtm2.default.data("visitorLoginState")){var contactInfo=_gtm2.default.data("visitorContactInfo")||[],demographicInfo=_gtm2.default.data("visitorDemographicInfo")||{},email=contactInfo[0],firstName=contactInfo[1],lastName=contactInfo[2],gender=demographicInfo.gender;if(_helpers2.default.validate.email(email)){var user={email:email,id:dito.generateID(email),data:getCustomUserData()};firstName&&-1===firstName.indexOf("*")&&(user.name=lastName?firstName+" "+lastName:firstName),gender&&("M"===gender?user.gender="male":"F"===gender&&(user.gender="female")),clearData(user.data),clearData(user),user.data=_helpers2.default.clearEmptyValue(user.data),dito.identify(user)}}})},accountPage:function(){var identifyUsers=function(){_helpers2.default.waitForWithReject(function(){return Object.keys(accountPageUserData()).length},{retries:20}).then(function(){var _accountPageUserData=accountPageUserData(),inscricao_estadual=_accountPageUserData.inscricao_estadual,razao_social=_accountPageUserData.razao_social,nome_fantasia=_accountPageUserData.nome_fantasia,telefone=_accountPageUserData.telefone,telefone_corporativo=_accountPageUserData.telefone_corporativo,cpf=_accountPageUserData.cpf,cnpj=_accountPageUserData.cnpj,email=_accountPageUserData.email,genero=_accountPageUserData.genero,nome=_accountPageUserData.nome,sobrenome=_accountPageUserData.sobrenome,data_de_nascimento=_accountPageUserData.data_de_nascimento,genderMap={Feminino:"female",Masculino:"male"},data={inscricao_estadual:inscricao_estadual,razao_social:razao_social,nome_fantasia:nome_fantasia,telefone:telefone,telefone_corporativo:telefone_corporativo,cpf:cpf,cnpj:cnpj};clearData(data);var id=void 0;"cpf"===_configs.id?formatString(cpf)&&(id=_helpers2.default.formatCpf(cpf)):_helpers2.default.validate.email(email)&&(id=dito.generateID(email));var user={id:id,name:nome+" "+sobrenome,email:email,gender:genderMap[genero],birthday:_helpers2.default.formatBirthday(data_de_nascimento),data:data};clearData(user),dito.identify(user)}).catch(function(_){console.log("Error on Dito identify")})};window.location.pathname.match("account")&&identifyUsers(),window.addEventListener("hashchange",function(){window.location.pathname.match("account")&&window.location.hash.match("#/profile")&&identifyUsers()})},homeView:function(){_gtm2.default.on("homeView",function(){dito.track({action:"acessou-home",data:getCustomEventData("acessou-home")})})},productView:function(){_gtm2.default.on("productView",function(){var productSKU=Object.keys(_gtm2.default.data("skuStocks")||{});dito.track({action:"acessou-produto",data:mergeObjects({id_produto:_gtm2.default.data("productId"),nome_departamento:_gtm2.default.data("productDepartmentName"),nome_categoria:_gtm2.default.data("productCategoryName"),marca:_gtm2.default.data("productBrandName"),nome_produto:_gtm2.default.data("productName"),preco_produto:parseFloat(_gtm2.default.data("productPriceFrom")),reference_id:_gtm2.default.data("productReferenceId"),sku_produto:productSKU.join(", "),seller_id:_gtm2.default.data("sellerId"),url_produto:_gtm2.default.data("pageUrl")},getCustomEventData("acessou-produto"))})})},categoryView:function(){_gtm2.default.on("categoryView",function(){dito.track({action:"acessou-categoria",data:mergeObjects({nome_categoria:_gtm2.default.data("categoryName"),nome_departamento:_gtm2.default.data("pageDepartment")},getCustomEventData("acessou-categoria"))})}),_gtm2.default.on("departmentView",function(){dito.track({action:"acessou-departamento",data:mergeObjects({nome_departamento:_gtm2.default.data("departmentName")},getCustomEventData("acessou-departamento"))})}),_gtm2.default.on("otherView",function(){var nome_departamento=_gtm2.default.data("pageDepartment"),nome_categoria=_gtm2.default.data("pageCategory");(_gtm2.default.data("pageFacets")||[]).find(function(child){return child.match(/categories/)})&&(!nome_departamento||nome_categoria&&"Department"!==nome_categoria?dito.track({action:"acessou-categoria",data:mergeObjects({nome_categoria:nome_categoria,nome_departamento:nome_departamento},getCustomEventData("acessou-categoria"))}):dito.track({action:"acessou-departamento",data:mergeObjects({nome_departamento:nome_departamento},getCustomEventData("acessou-departamento"))}))})},productSearch:function(){_gtm2.default.on("internalSiteSearchView",function(){dito.track({action:"buscou-produto",data:mergeObjects({termo:_gtm2.default.data("siteSearchTerm")},getCustomEventData("buscou-produto"))})})},cartView:function(){_gtm2.default.on("cart",function(){var cart_id=_helpers2.default.dig(vtexjs,"checkout.orderFormId","");dito.track({action:"acessou-carrinho",data:mergeObjects(cartData(),{cart_id:cart_id},getCustomEventData("acessou-carrinho"))})})},checkoutEmail:function(){_gtm2.default.on("email",function(){dito.track({action:"acessou-checkout-email",data:mergeObjects(cartData(),getCustomEventData("acessou-checkout-email"))})})},checkoutProfile:function(){_gtm2.default.on("profile",function(){var cart_id=_helpers2.default.dig(vtexjs,"checkout.orderFormId","");dito.track({action:"acessou-checkout-dados-pessoais",data:mergeObjects(cartData(),{cart_id:cart_id},getCustomEventData("acessou-checkout-dados-pessoais"))})})},checkoutShipping:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];_gtm2.default.on("shipping",function(){var cart_id=_helpers2.default.dig(vtexjs,"checkout.orderFormId","");dito.track({action:"acessou-checkout-endereco-entrega",data:mergeObjects(cartData(),{cart_id:cart_id},getCustomEventData("acessou-checkout-endereco-entrega"))}),checkoutUserData().then(function(user){if(user.data=mergeObjects(user.data,getCustomUserData()),user.id)return clearData(user.data),clearData(user),dito.identify(user)})})},checkoutPayment:function(){_gtm2.default.on("payment",function(){var cart_id=_helpers2.default.dig(vtexjs,"checkout.orderFormId","");dito.track({action:"acessou-checkout-pagamento",data:mergeObjects(cartData(),{cart_id:cart_id},getCustomEventData("acessou-checkout-pagamento"))}),localStorage.setItem("cart_id",cart_id),checkoutUserData().then(function(user){if(user.data=mergeObjects(user.data,getCustomUserData()),user.id)return clearData(user.data),clearData(user),dito.identify(user)})})},orderPlaced:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];_gtm2.default.on("orderPlaced",function(){var transactionId=_gtm2.default.data("transactionId"),products=_gtm2.default.data("transactionProducts"),action_produto=_configs.revenue?"comprou-produto":"fez-pedido-produto",action_comprou=_configs.revenue?"comprou":"fez-pedido",cart_id=localStorage.getItem("cart_id");localStorage.removeItem("cart_id"),products.forEach(function(product){dito.track({action:action_produto,message_id:dito.Helpers.sha1(transactionId+product.id),data:mergeObjects({id_produto:product.id,quantidade:product.quantity,categorias_produto:product.categoryTree,nome_departamento:product.categoryTree[0],nome_produto:product.name,preco_produto:product.sellingPrice,marca:product.brand,sku:product.sku,cart_id:cart_id,id_transacao:transactionId},getCustomEventData(action_produto,{product:product}))})});var totalProducts=products.reduce(function(total,product){return total+product.quantity},0),total=_gtm2.default.data("transactionTotal"),shipping=_gtm2.default.data("transactionShipping"),subtotal=total-shipping,revenue=_configs.revenue?total:null,metodo_pagamento=_gtm2.default.data("transactionPaymentType")||{},apiKey=dito.AppSettings.apiKey;dito.track({action:action_comprou,revenue:revenue,message_id:dito.Helpers.sha1(apiKey+transactionId),data:mergeObjects({id_transacao:transactionId,quantidade_produtos:totalProducts,cart_id:cart_id,metodo_pagamento:_helpers2.default.dig(metodo_pagamento,"0.paymentSystemName",void 0),total:total,subtotal:subtotal,total_frete:shipping},getCustomEventData(action_comprou))})})},addToCart:function(){var params=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var track=function(){return dito.track({action:"adicionou-produto-ao-carrinho",data:mergeObjects({id_produto:_gtm2.default.data("productId"),categorias_produto:_gtm2.default.data("productCategoryName"),nome_departamento:_gtm2.default.data("productDepartmentName"),nome_produto:_gtm2.default.data("productName"),preco_produto:parseFloat(_gtm2.default.data("productPriceFrom")),marca:_gtm2.default.data("productBrandName"),seller_id:_gtm2.default.data("sellerId"),url_produto:_gtm2.default.data("pageUrl")},getCustomEventData("adicionou-produto-ao-carrinho"))})};params.clickSelector.includes(".buy-button")?$(".buy-button").on("buyButtonThrough.vtex",function(){track()}):$(params.clickSelector).on("click",function(){track()})}catch(err){}},newsletter:function(){var params=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(_configs.newsletter&&params.clickSelector&&params.emailSelector){var alias=function(email){return dito.alias({portal:{id:dito.generateID(email)}})},identify=function(email,name){return dito.identify({id:dito.generateID(email),name:name,email:email,data:mergeObjects({origem_cadastro:"newsletter"},getCustomUserData())})},watchedEmail=void 0,watchedName=void 0;$(document).on("change",params.emailSelector,function(){watchedEmail=$(this).val()}),$(document).on("change",params.nameSelector,function(){watchedName=$(this).val()}),$(document).on("click",params.clickSelector,function(){var email=$(params.emailSelector).val()||watchedEmail,name=formatString($(params.nameSelector).val()||watchedName),user=dito.CurrentUser.get();_helpers2.default.validate.email(email)&&(user?alias(email):identify(email,name))})}},popup:function(){var params=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(params.clickSelector&&params.emailSelector){var identify=function(email,name){return dito.identify({id:dito.generateID(email),name:name,email:email,data:mergeObjects({origem_cadastro:"popup"},getCustomUserData())})},alias=function(email){return dito.alias({portal:{id:dito.generateID(email)}})},watchedEmail=void 0,watchedName=void 0;$(document).on("change",params.emailSelector,function(){watchedEmail=$(this).val()}),$(document).on("change",params.nameSelector,function(){watchedName=$(this).val()}),$(document).on("click",params.clickSelector,function(){var email=$(params.emailSelector).val()||watchedEmail,name=formatString($(params.nameSelector).val()||watchedName);_helpers2.default.validate.email(email)&&(dito.CurrentUser.get()?alias(email):identify(email,name))})}}}},vtex={install:function(){var params=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},trackings=mergeObjects(buildTrackings(_helpers2.default.buildCustomDataProvider(params.customData,dito,_gtm2.default)),params.customEvents);return _helpers2.default.waitFor(function(){return window.dito},{retries:0}).then(function(){return Object.keys(trackings).forEach(function(key){return trackings[key](params[key],dito,_gtm2.default)})}).then(_gtm2.default.install)}};exports.default=vtex}]);