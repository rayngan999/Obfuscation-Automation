(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{80:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.init=function(){var e=document.getElementsByClassName("data-main__truefit");$.ajax({url:e[0].getAttribute("data-action"),type:"get",dataType:"json",success:function(t){if(""!=t.tf.userID){window.tfcapi("calculate",{userId:t.tf.userID,registered:!0});for(var a=e.length,i=0;i<a;i++)e[i].removeAttribute("data-true-fit-plp")}else window.tfcapi("calculate",{registered:!1})},error:function(){}})}}}]);