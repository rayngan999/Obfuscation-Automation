!function r(u,s,a){function c(t,e){if(!s[t]){if(!u[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(f)return f(t,!0);var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}var i=s[t]={exports:{}};u[t][0].call(i.exports,function(e){return c(u[t][1][e]||e)},i,i.exports,r,u,s,a)}return s[t].exports}for(var f="function"==typeof require&&require,e=0;e<a.length;e++)c(a[e]);return c}({1:[function(e,t,n){"use strict";var o,i=e("./modules/Funcionarios/funcionarios-index.js"),r=(o=i)&&o.__esModule?o:{default:o};document.addEventListener("DOMContentLoaded",r.default.init)},{"./modules/Funcionarios/funcionarios-index.js":7}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={funcionarios:{user:{id:"",cpf:"",email:"",date:"",value:"",spent:"",name:""},global:{spent:0}}}},{}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.save_user=n.get_cpf=void 0;var o=u(e("./__el-selectors.js")),i=u(e("./_funcionarios__cookie.js")),r=u(e("./_funcionarios__requests.js"));function u(e){return e&&e.__esModule?e:{default:e}}var s=o.default.funcionarios,a={init:function(){a.funcionarios_config(),a.toggleOptions(),a.funcionarios_updateItems(),a.funcionarios_logout(),a.funcionarios_testAB()},funcionarios_config:function(){$(".x-header__logo-link").attr("href","/home"),"https://funcionarios.jequiti.com.br/"==window.location.href&&$("#cpf").mask("000.000.000-00",{reverse:!0})},is_user_defined:function(){s.user.cpf=i.default.getCookie("x-funcionarios");var e=i.default.getCookie("x-funcionarios"),t=window.location.href;return 1!=e?""==s.user.cpf&&"/"!=window.location.pathname?!(window.location.href="/"):(""!=s.user.cpf||"https://funcionarios.jequiti.com.br/"!=t)&&(""!=s.user.cpf&&"https://funcionarios.jequiti.com.br/"==t?window.location.href="/home":s.user.cpf,!0):1==e?(""==e&&"https://funcionarios.jequiti.com.br/"==t&&(window.location.href="/home"),!0):void 0},home_settings:function(){$(".x-funcionario__form").on("submit",function(e){if(e.preventDefault(),s.user.cpf=$("#cpf").val(),$("#sbt").is(":checked")){var t=new Date;t.setTime(t.getTime()+72e5),i.default.setCookie("x-funcionarios",$("#sbt").val(),t),setTimeout(function(){window.location.href="/home"},200)}else r.default.setClient(s.user.cpf).then(function(e){if(null!=e[0]){var t=new Date;t.setTime(t.getTime()+72e5),i.default.setCookie("x-funcionarios",s.user.cpf,t),c(e),setTimeout(function(){window.location.href="/home"},200)}else alert("CPF NÃ£o Cadastrado")})})},toggleOptions:function(){var t=$("#jequiti"),n=$('label[for="jequiti"]'),o=$('label[for="sbt"]'),i=$("#sbt"),r=$(".x-container-cpf.is--hide");t.on("change",function(e){e.preventDefault(),t.remove(),n.remove(),o.remove(),i.remove(),r.removeClass("is--hide")}),i.on("change",function(e){e.preventDefault(),t.remove(),n.remove()})},validating_month:function(e,t){new Date(e.getFullYear()+"-"+e.getMonth()+"-15").getTime(),new Date(e.getFullYear()+"-"+(e.getMonth()+1)+"-15").getTime();r.default.sendData(s.user).then(function(e){console.log("resposta",e)})},create_credit_view:function(){vtexjs.checkout.getOrderForm().done(function(e){var t=null!=vtexjs.checkout.orderForm?vtexjs.checkout.orderForm.value:0,n=s.user.value-t/100;n=n.toFixed(2).replace(".",",");var o=""!=s.user.name?"OlÃ¡, "+s.user.name+".":"";$("body").append('<div class="x-credit__view"><span class="x-credit__name">'+o+'</span>      <span>Seu saldo restante: <span id="x-credit__credit">R$'+n+'.</span></span>      <span class="x-credit__logout">NÃ£o Ã© vocÃª?</span>'),a.update_funcionarios_limit()})},update_funcionarios_limit:function(){$(window).on("orderFormUpdated.vtex",function(e,t){vtexjs.checkout.getOrderForm().done(function(e){var t=null!=vtexjs.checkout.orderForm?vtexjs.checkout.orderForm.value:0,n=s.user.value-t/100;n=n.toFixed(2).replace(".",","),$("#x-credit__credit").text(n)})})},funcionarios_updateItems:function(){$(document).on("update.vtexMinicart",function(e,t,n,o){"true"!=Cookies.get("x-funcionarios")&&"905.632.557-49"!=Cookies.get("x-funcionarios")&&220<t.value/100&&(setTimeout(function(){$(".has--minus").eq(n).click()},500),alert("Compra nÃ£o pode ser realizada pois supera o valor limite."),vtexjs.checkout.getOrderForm().then(function(e){e.items[0];return vtexjs.checkout.removeItems([{index:0,quantity:0}])}))})},funcionarios_logout:function(){$(document).on("click",".x-credit__logout",function(){i.default.deleteCookie("x-funcionarios"),setTimeout(function(){window.location.href="/"})})},funcionarios_testAB:function(){setTimeout(function(){if(0<$(".x-product__buy-btn").length){var e=$(".x-product__buy-btn").attr("href");e=e.replace("sc=1","sc=3"),$(".x-product__buy-btn").attr("href",e)}},300)}},c=(n.get_cpf=function(){return $.Deferred(function(e){1==a.is_user_defined()?(s.user.cpf=i.default.getCookie("x-funcionarios"),e.resolve()):(a.home_settings(),e.reject())}).promise()},n.save_user=function(e){var t=(new Date).getTime(),n=(new Date(t),new Date),o=n.getMonth()+1;n.getDate();s.user.id=null!=e[0].id?e[0].id:"",s.user.name=null!=e[0].name?e[0].name:"",s.user.date=null!=e[0].date?e[0].date:o,s.user.value=null!=e[0].value?e[0].value:220,s.user.spent=null!=e[0].value?220-e[0].value:0,s.user.dataRecarga=null!=e[0].value?e[0].dataRecarga:t,a.create_credit_view(s.user),$(document).trigger("save_user_end.funcionarios",[s.user])});n.default={init:a.init}},{"./__el-selectors.js":2,"./_funcionarios__cookie.js":4,"./_funcionarios__requests.js":6}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={setCookie:function(e,t,n){console.log(e,t,n);var o="expires="+n.toUTCString();document.cookie=e+"="+t+";"+o+";path=/"},getCookie:function(e){for(var t=e+"=",n=document.cookie.split(";"),o=0;o<n.length;o++){for(var i=n[o];" "==i.charAt(0);)i=i.substring(1);if(0==i.indexOf(t))return i.substring(t.length,i.length)}return""},deleteCookie:function(e){document.cookie=e+"=; expires=Thu, 01 Jan 2100 00:00:01 GMT;"}}},{}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=s(e("./__el-selectors.js")),i=s(e("./_funcionarios__requests.js")),r=e("./_funcionarios__actions.js"),u=s(r);function s(e){return e&&e.__esModule?e:{default:e}}var a=o.default.funcionarios,c={init:function(){c.getClient(),u.default.init()},getClient:function(){(0,r.get_cpf)().then(function(e){i.default.setClient(a.user.cpf).then(function(e){(0,r.save_user)(e)})})}};n.default={init:c.init}},{"./__el-selectors.js":2,"./_funcionarios__actions.js":3,"./_funcionarios__requests.js":6}],6:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={setClient:function(e){return $.Deferred(function(t){$.ajax({type:"get",headers:{Accept:"application/vnd.vtex.ds.v10+json","Content-Type":"application/json","REST-Range":"resources=0-2000"},url:"/api/dataentities/FU/search?_fields=id,name,value,date,dataRecarga&_where=cpf="+e+"&"+(new Date).getTime()}).then(function(e){t.resolve(e)},function(e){t.reject(e)})}).promise()},sendData:function(e){return $.Deferred().promise()}}},{}],7:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o,i=e("./_funcionarios__init.js"),r=(o=i)&&o.__esModule?o:{default:o};var u=window.location.host.indexOf("funcionarios");function s(){$("body").hasClass("x-product")&&$("body").hasClass("jequiti-funcionarios")&&$(".x-product__discount-card-wrapper").css("display","none")}window.addEventListener("DOMContentLoaded",function(){setTimeout(s,800)}),n.default={init:function(){0==u&&(r.default.init(),console.log("Site de FuncionÃ¡rios Identificado"))}}},{"./_funcionarios__init.js":5}]},{},[1]);