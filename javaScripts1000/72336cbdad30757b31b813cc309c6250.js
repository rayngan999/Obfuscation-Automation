'use strict';

define(['jquery', 'materialize'], function($, _materialize) {
  function debounce(callback, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate)
          callback.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow)
        callback.apply(context, args);
    };
  }
  function setShowTargetListner(selector, switchDelay, callBack) {
    $(selector).on('click', function(event) {
      event.preventDefault();
      var self = $(this);
        // callback may or may not use switchDelay to implement a setTimeOut.
      if (callBack)
        callBack(self, switchDelay);
      window.setTimeout(function() {
        var targetContainerSelector = self.data('targetSectionSelector');
        var currentContainerSelector = self.data('currentSectionSelector');
        $(currentContainerSelector).addClass('hide');
        $(targetContainerSelector).removeClass('hide');
      }, switchDelay);
    });
  }
  function getQueryString(uri, key, value) {
    var re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i');
    var separator = uri.indexOf('?') !== -1 ? '&' : '?';
    if (uri.match(re))
      return uri.replace(re, '$1' + key + '=' + value + '$2');
    return uri + separator + key + '=' + value;
  }
  function getURLParamsObj(qs) {
    qs = qs.split('+').join(' ');
    var params = {},
    tokens,
    re = /[?&]?([^=]+)=([^&]*)/g;
    while (tokens = re.exec(qs)) {
      params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }
    return params;
  }
  function getURLParam(paramKey) {
    var results = new RegExp('[\?&]' + paramKey + '=([^&#]*)').exec(window.location.href);
    if (!results)
      return null;
    return decodeURI(results[1]) || 0;
  }
  function getLastSlug() {
    var results = location.pathname.split('/');
    if (results[results.length - 1] === '')
      return results[results.length - 2];
    return results[results.length - 1];
  }
  function isOverflowing(el) {
    var curOverflow = el.style.overflow;

    if (!curOverflow || curOverflow === 'visible')
      el.style.overflow = 'hidden';

    el.style.overflow = curOverflow;

    return el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight;
  }
  function convertArrayToString(array) {
    var returnString = '';
    array.forEach(function(arrayItem) {
      returnString += arrayItem;
      returnString += ', ';
    });
    return returnString.slice(0, -2);
  }
  function openModal(heading, content, ctaText, ctaLink) {
    var dialog = $('#js-alert-dialog');
    dialog.find('#js-alert-heading').text(heading || '').toggle(Boolean(heading));
    dialog.find('#js-alert-content').text(content).toggle(Boolean(content));
    dialog.find('#js-alert-cta').text(ctaText || 'Ok').attr('href', ctaLink);
    dialog.modal('open');
  }
  function openHomePopModal(heading, ctaText, ctaLink) {
    var dialog = $('#js-home-pop-dialog');
    dialog.find('#js-home-pop-heading').text(heading).toggle(Boolean(heading));
    dialog.find('#js-home-pop-cta').text(ctaText || 'Get SMS with App Link');
    dialog.modal('open');
  }
  function customDialog(data) {
    if (!data.primary_cta)
      data.primary_cta = {};
    openModal(data.heading, data.message, data.primary_cta.text, data.primary_cta.link);
  }
  function toCSV(input) {
    if (input && isFinite(input)) {
      var result = Number(input).toLocaleString('en-IN');
      return result;
    }
    return input;
  }
  function formToObject(formSelector) {
    // converts form to json, checkboxes will be converted array with key as name of input
    var formInputs = $(formSelector).find('input, select, textarea');
    var returnObj = {};
    formInputs.each(function(_index, input) {
      switch (input.type) {
      case 'radio':
        if (input.checked)
          returnObj[input.name] = input.value;
        break;
      case 'checkbox':
        if (!returnObj.hasOwnProperty(input.name))
          returnObj[input.name] = [];
        if (input.checked)
          returnObj[input.name].push(input.value);

        break;
      default: returnObj[input.name] = input.value;
      }
    });
    return returnObj;
  }

  function otptimer(remaining, id) {
    var m = Math.floor(remaining / 60);
    var s = remaining % 60;

    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    document.getElementById(id).innerHTML = m + ':' + s;
    remaining -= 1;

    if(remaining >= 0) {
      setTimeout(function() {
        otptimer(remaining, id);
      }, 1000);
      return;
    }
  
    if(remaining == -1) {
      document.getElementById(id).removeAttribute("disabled");
      document.getElementById(id).innerHTML= "Re-send OTP";
    }
  }

  function populateDownloadList(linkArray, parentSelector, dofa_scheme_code=null ) {
    let returnText;
    var noDocMessage = 'No Document Found';
     if (linkArray && linkArray.length ) {
      returnText = '';
      for (let i in linkArray) {
        if(linkArray[i].type == "xlsx"){
          returnText += '<div class="col s12 m6 l4 download-link"><span class="index-con" data-url="'
          + linkArray[i].url
          + '">'
          + linkArray[i].name
          + '</span></div>';
        }else{
          returnText += '<div class="col s12 m6 l4 download-link"><a href="'
          + linkArray[i].url
          + '" target="_blank">'
          + linkArray[i].name
          + '</a></div>';
        }
       }
       if(dofa_scheme_code && dofa_scheme_code == '233'){
        noDocMessage =   'Investors of UTI Gold Exchange Traded Fund (UTI Gold ETF), can buy/sell units on NSE and/or BSE. In case of creation or redemption of units directly with the scheme/AMC, please write a mail to etfgroup@uti.co.in mentioning your contact details';
        returnText += '<div class="s1 m6 l12 no-resuts float-left">'+ noDocMessage +'</div>'
      }
    } 
    else {
      if(linkArray.length === 0 && parentSelector === '#js-application-download-list') {
        noDocMessage = 'Investors of UTI Gold Exchange Traded Fund (UTI Gold ETF), can buy/sell units on NSE and/or BSE. In case of creation or redemption of units directly with the scheme/AMC, please write a mail to etfgroup@uti.co.in mentioning your contact details';
      }
      returnText = '<div class="s12 m6 l4 no-resuts">'+ noDocMessage +'</div>';
     }

    $(parentSelector).html(returnText);
    downloadevent();
    return returnText;
  }
  function downloadevent(){
    $('.index-con').click(function(){
      var indfile = $(this).attr('data-url');
      window.open(indfile, "_blank");
      });
  }
  function populateOptionList(dropdownSelector, array, valueLabel, nameLabel) {
    var dropdownSelect = $(dropdownSelector);
    var optionList = '<option disabled selected>Select</option>';

    if (valueLabel) {
      for (let i in array)
        optionList += '<option value="' + array[i][valueLabel] + '">' + array[i][nameLabel] + '</option>';
    } else {
      for (let i in array)
        optionList += '<option value="' + array[i] + '">' + array[i] + '</option>';
    }
    dropdownSelect.html(optionList).attr('disabled', false).material_select();
  }
  function toCurrency(input, fractionSize) {
    if (input) {
      var output = input;
      var options = {
        'style': 'currency',
        'currency': 'INR'
      };
      var isInt = output % 1 === 0;

      options.maximumFractionDigits = fractionSize > 0 ? fractionSize : 2;

      output = Number(input).toLocaleString('en-IN', options);
      if (isInt) {
        var numArray = output.split('.');
        output = numArray[0];
      }
      return output;
    }
    return input;
  }
  function toNAVCurrency(input, fractionSize) {
    if (input) {
      var output = input;
      var options = {
        'style': 'currency',
        'currency': 'INR'
      };
      var isInt = output % 1 === 0;

      // options.maximumFractionDigits = fractionSize > 0 ? fractionSize : 4;
      options.minimumFractionDigits = 4;

      output = Number(input).toLocaleString('en-IN', options);
      if (isInt) {
        var numArray = output.split('.');
        output = numArray[0];
      }
      return output;
    }
    return input;
  }

  var setSessionStorageObject = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value))
  }

  var getSessionStorageObject = (key) => {
    let obj = sessionStorage.getItem(key) || null
    obj = JSON.parse(obj) || {};
    return obj;
  }

  var setCampaignInfo = (key, value) =>{
    var campaignData = getCampaignInfo()
    if(value)
      campaignData[key] = value
    else
      Object.assign(campaignData, key)

    setSessionStorageObject('campaignData', campaignData)
  }

  var getCampaignInfo = (key) => {
    let returnObj = getSessionStorageObject('campaignData')
    if(key)
      return returnObj[key]

    return returnObj
  }

  var deleteCampaignInfo = (key) => {
    if(key) {
      var campaignData = getCampaignInfo()
      delete campaignData[key];
      setSessionStorageObject('campaignData', campaignData);
    } else {
      sessionStorage.removeItem('campaignData');
    }


  }
    function otptimer(remaining, id) {
      var m = Math.floor(remaining / 60);
      var s = remaining % 60;

      m = m < 10 ? "0" + m : m;
      s = s < 10 ? "0" + s : s;
      document.getElementById(id).innerHTML = m + ":" + s;
      remaining -= 1;

      if (remaining >= 0) {
        setTimeout(function () {
          otptimer(remaining, id);
        }, 1000);
        return;
      }

      if (remaining == -1) {
        document.getElementById(id).removeAttribute("disabled");
        document.getElementById(id).innerHTML = "Re-send OTP";
      }
    }

  return {
    'debounce': debounce,
    'setShowTargetListner': setShowTargetListner,
    'getQueryString': getQueryString,
    'getURLParamsObj': getURLParamsObj,
    'getURLParam': getURLParam,
    'getLastSlug': getLastSlug,
    'isOverflowing': isOverflowing,
    'otptimer':otptimer,
    'convertArrayToString': convertArrayToString,
    'openModal': openModal,
    'openHomePopModal':openHomePopModal,
    'customDialog': customDialog,
    'toCSV': toCSV,
    'formToObject': formToObject,
    'populateDownloadList': populateDownloadList,
    'populateOptionList': populateOptionList,
    'toCurrency': toCurrency,
    'toNAVCurrency': toNAVCurrency,
    'setSessionStorageObject': setSessionStorageObject,
    'getSessionStorageObject': getSessionStorageObject,
    'setCampaignInfo': setCampaignInfo,
    'getCampaignInfo': getCampaignInfo,
    'deleteCampaignInfo': deleteCampaignInfo
  };
});
