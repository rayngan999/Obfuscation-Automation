// *****  SDC Namespace and Create Namespace Methods
if( window.SDC != "object" ) {
  window.SDC = (function() {

      // ***** Publicly available functions
      var _createNS = function(namespace) {
        var nsparts = namespace.split(".");
        var parent = SDC;

        // we want to be able to include or exclude the root namespace
        // So we strip it if it's in the namespace
        if(nsparts[0] === "MYAPPLICATION") {
          nsparts = nsparts.slice(1);
        }

        // loop through the parts and create
        // a nested namespace if necessary
        for(var i = 0; i < nsparts.length; i++) {
          var partname = nsparts[i];
          // check if the current parent already has
          // the namespace declared, if not create it
          if(typeof parent[partname] === "undefined") {
            parent[partname] = {};
          }
          // get a reference to the deepest element
          // in the hierarchy so far
          parent = parent[partname];
        }
        // the parent is now completely constructed
        // with empty namespaces and can be used.
        return parent;
      };

      var _getQueryStringParameter = function(pname){
        pname = pname.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&"); // escape RegEx meta chars
        var match = location.search.match(new RegExp("[?&]"+pname+"=([^&]+)(&|$)"));
        return match && decodeURIComponent(match[1].replace(/\+/g, " "));
      };

      function _removeQueryStringParameter(parameter) {
        //prefer to use l.search if you have a location/link object
        var url = window.location.href
        var urlparts= url.split('?');
        if (urlparts.length>=2) {

            var prefix= encodeURIComponent(parameter)+'=';
            var pars= urlparts[1].split(/[&;]/g);

            //reverse iteration as may be destructive
            for (var i= pars.length; i-- > 0;) {
                //idiom for string.startsWith
                if (pars[i].lastIndexOf(prefix, 0) !== -1) {
                    pars.splice(i, 1);
                }
            }

            url= urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : "");
            return url;
        } else {
            return url;
        }
    }

      var _getCookie = function(cname) {
        var name = decodeURIComponent(cname) + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while(c.charAt(0) == ' ') c = c.substring(1);
          if(c.indexOf(name) == 0) return decodeURIComponent(c.substring(name.length, c.length));
        }
        return "";
      };

      function _setCookie(cname, cvalue, exdays) {
        if( typeof(exdays) != "number" ){
          exdays = 1;
        }
        if(typeof(cvalue) != "string"){
          throw "Only strings can be placed in cookies";
        }

        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = encodeURIComponent(cname) + "=" + encodeURIComponent(cvalue) + "; " + expires + "; path=/";
      }

      var _setFormReadOnly = function(form_id_or_class) {
        // description: sets form to read only and prevent submit events from firing
        // dependencies: jQuery
        $(form_id_or_class).attr('action', '').find('input, select, textarea').prop('disabled', true);
      };

      function _browserWidth(iframe) {
        if(typeof(iframe) == "boolean" && iframe){
          return $(window.parent).width();
        }
        return $(window).width();
      }

      function _browserHeight(iframe) {
        if(typeof(iframe) == "boolean" && iframe){
          return $(window.parent).height();
        }
        return $(window).height();
      }

      function _compressedMode(iframe){
          var browser_width = SDC.browserWidth(iframe);
          var i_device = _is_iPhone_or_iPod();
          return i_device || browser_width <= SDC.Constants.RULES.COMPRESSED_FORMAT_MAXIMUM_WITH;
      }

      function _is_iPhone_or_iPod(){
        return navigator.platform.match(/i(Phone|Pod)/i) != null;
      }

      function _loadCountryRegions(countryCode) {
        var url = '/api/locations/countries/' + countryCode + '/regions_with_default';

        $.get(url)
          .done(repopulateRegionDropdown)
          .fail(
            function (err) {
              console.error(err.message);
            }
          );
      }

      function repopulateRegionDropdown(data) {
        var $region = $(".address-region")
        $region.empty();

        if (data) {
          var itm = JSON.parse($('#existing_addresses').val());
          data.forEach(function (keyValArray) {
            var option = $('<option></option>').val(keyValArray[0]).html(keyValArray[1]);
            $region.append(option);
            $region.val(itm.region);
          });
        }
      }

      function _formatPriceWithSeps(centAmount, th_sep, dec_sep, currencyFormat="{0}") {
        if (!isNaN(centAmount)) {
          if (typeof (centAmount) === "string"){
            centAmount = parseInt(centAmount);
          }
          var amount = parseFloat(centAmount / 100);
          result = (
            amount.toFixed(2).toString()
              .replace(".", dec_sep)
              .replace(/\B(?=(\d{3})+(?!\d))/g, th_sep)
          );
        } else {
          result = centAmount;
        }
        return currencyFormat.replace("{0}", result);
      }

      function _priceToInt(strAmount, th_sep, dec_sep, currencyFormat="{0}") {
        currency_sign = currencyFormat.replace("{0}", "").replace(" ", "");
        strAmount = strAmount.replace(currency_sign, "");
        if (typeof (strAmount) === "string") {
          var parts = strAmount.split(dec_sep);
          var re = new RegExp("[" + th_sep + "]");
          parts[0] = parts[0].replace(re, '');
          return parseInt(parseFloat(parts.join('.')) * 100);
        }
        return strAmount;
      }

      // ***** Return our closure
      return {
        createNS: _createNS,
        getCookie: _getCookie,
        setCookie: _setCookie,
        setFormReadOnly: _setFormReadOnly,
        browserWidth: _browserWidth,
        browserHeight: _browserHeight,
        GetQueryStringParameter: _getQueryStringParameter,
        RemoveQueryStringParameter: _removeQueryStringParameter,
        CompressedMode: _compressedMode,
        loadCountryRegions: _loadCountryRegions,
        formatPriceWithSeps: _formatPriceWithSeps,
        priceToInt: _priceToInt,
      }

    })();
}
