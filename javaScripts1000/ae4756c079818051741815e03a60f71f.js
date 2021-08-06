ï»¿$jq.namespace('MatchCore');

MatchCore.AjaxGeo = function () {
    var loadingOpt = { value: '', text: MatchCore.UI.Site.Translate.getTranslation('MatchContent.Profile.Profile.ProfileCreateProLoading')};
    var countryCodesWithPostal = [1, 2];

    var selectedCountryCode = -1;
    var selectedStateCode = -1;
    var selectedCityCodes = [];

    var _container = null;
    var countryList;
    var stateList;
    var cityList;
    var postalCodeField;

    var config = null;
    var countryFilledDelegate = new MatchCore.Delegate();
    var stateFilledDelegate = new MatchCore.Delegate();
    var countryOverride;
    var includeNoAnswer = {
        forCountry: false,
        aliasForCountry: "",
        forState: false,
        aliasForState: "",
        forCity: false,
        aliasForCity: ""
    };

    var countriesJson = null;
    var statesJson = null;

    var country_changed_handlers = [];

    var service = new MatchCore.ServiceProxy(MatchCore.Application.resolveUrl('~/MainService/'));

    var country_changed = function () {
        selectedCountryCode = get_selectedCountryCode();
        selectedStateCode = -1;
        selectedCityCodes = [];

        checkPostalVisibility();
        console.log('filling');
        fillStateList();

        if ($jq.uniform) {
            setTimeout(function () {
                $jq.uniform.update(countryList);
            }, 0);
        }
    };

    var state_changed = function () {
        selectedStateCode = get_selectedStateCode();
        selectedCityCodes = [];
        fillCityList();
        if ($jq.uniform) {
            setTimeout(function () {
                $jq.uniform.update(stateList);
            }, 0);
        }
    };

    var city_changed = function () {
        selectedCityCodes = get_selectedCityCodes();
        if ($jq('#dist')) {
            if (selectedCityCodes[0] != "-1") {
                $jq('#dist').show();
            } else {
                $jq('#dist').hide();
            }
            
        }
        if ($jq.uniform) {
            setTimeout(function () {
                $jq.uniform.update(cityList);
            }, 0);
        }
    };

    var get_selectedCountryCode = function () {
        var countryCode = $jq('option:selected', countryList).val();

        if (countryCode == null)	//get first value
            countryCode = $jq('option', countryList).val();

        return countryCode;
    };

    var get_selectedStateCode = function () {
        var stateCode = $jq('option:selected', stateList).val();

        if (stateCode == null)	//get first value
            stateCode = $jq('option', stateList).val();

        return stateCode;
    };

    var get_selectedCityCodes = function () {
        var temp = [];

        $jq('option:selected', cityList).each(function () {
            temp.push($jq(this).val());
        });

        return temp;
    };

    var fillCountryList = function () {
        if (countryOverride) {
            handle_fillCountryList(countryOverride);
        } else {
            service.invoke({
                method: 'GetAllCountries',
                success: handle_fillCountryList
            });
        }
    };

    var checkPostalVisibility = function () {
        if (postalCodeField) {
            var countryCode = get_selectedCountryCode();
            var showPostal = false;

            for (var i = 0; i < countryCodesWithPostal.length; i++) {
                if (countryCode.toString() == countryCodesWithPostal[i].toString()) {
                    showPostal = true;
                    break;
                }
            }

            if (showPostal)
                $jq(postalCodeField).parents('.postalPane').show();
            else
                $jq(postalCodeField).parents('.postalPane').hide();
        }
    };

    var handle_fillCountryList = function (response) {
        $jq(countryList).clearOptions();

        if (response[0].Code) {
            response = response.filter(filterEuropeanCountries);
            countriesJson = response;

            if (includeNoAnswer.forCountry) {
                $jq(countryList).addOption(
					{ value: -1, text: includeNoAnswer.aliasForCountry, selected: (selectedCountryCode == -1) }
				);
            }

            for (var i = 0; i < response.length; i++) {
                var text = response[i].Name;
                if (config != null && config.CountryAbv)
                    text = response[i].ShortName;

                $jq(countryList).addOption(
					{ value: response[i].Code, text: text, selected: (response[i].Code.toString() == selectedCountryCode.toString()) }
				);
            }

            countryFilledDelegate.fireAndPreserve();

            checkPostalVisibility();

            fillStateList();
            if ($jq.uniform) {
                setTimeout(function () {
                    $jq.uniform.update(countryList);
                }, 0);
            }
        }
        else alert(MatchCore.UI.Site.Translate.getTranslation('MatchContent.Account.AccountSettings.ErrorLoadingCountries'));
    };

    var filterEuropeanCountries = function (country) {
        var europeanCountriesCode = [80, 97, 16, 103, 23, 105, 34, 118, 55, 124, 53, 125, 57, 133, 189, 150, 189, 171, 196, 172, 66, 224, 72, 56, 73, 176, 83, 204, 159, 190];
        //return !europeanCountriesCode.includes(country.Code); //Don't support IE and Opera
        return !europeanCountriesCode.indexOf(country.Code) >= 0;
    };

    var fillStateList = function () {
        if (stateList) {
            deactivateStatePane();
            deactivateCityPane();
            
            var countryCode = get_selectedCountryCode();
            var currentCountry = findCountry(countryCode);

            if (currentCountry != null) {
                if (currentCountry.HasStates) {
                    $jq(stateList).addOption(loadingOpt);
                    $jq(cityList).addOption(loadingOpt);
                    $jq(stateList).parents('.statePane').show();

                    service.invoke({
                        method: 'GetStatesByCountryCode',
                        data: {
                            'countryCode': countryCode
                        },
                        success: handle_fillStateList
                    });
                } else if (currentCountry.HasCities) {
                    $jq(cityList).addOption(loadingOpt);
                    fillCityListNoStates();
                }
            }
        }
    };

    var handle_fillStateList = function (response) {
        $jq(stateList).clearOptions();

        if (response[0].Code) {
            statesJson = response;

            if (includeNoAnswer.forState) {
                $jq(stateList).addOption(
					{ value: -1, text: includeNoAnswer.aliasForState, selected: (selectedStateCode == -1) }
				);
            }

            for (var i = 0; i < response.length; i++) {
                var text = response[i].Name;
                if (config != null && config.StateAbv)
                    text = response[i].Abbreviation;

                $jq(stateList).addOption(
					{ value: response[i].Code, text: text, selected: (response[i].Code.toString() == selectedStateCode.toString()) }
				);
                
                $jq(stateList).children("option:last-child").attr("data-hascities", response[i].HasCities);
            }
            stateFilledDelegate.fireAndPreserve();
            fillCityList();
            if ($jq.uniform) {
                setTimeout(function () {
                    $jq.uniform.update(stateList);
                }, 0);
            }
        }
        else alert(MatchCore.UI.Site.Translate.getTranslation('MatchContent.Search.SearchForms.RegErrorLoadingStates'));
    };

    var fillCityList = function () {
        if (cityList) {
            $jq(cityList).clearOptions();
            $jq(cityList).addOption(loadingOpt);

            var countryCode = get_selectedCountryCode();
            var currentCountry = findCountry(countryCode);

            var stateCode = get_selectedStateCode();
            var currentState = findState(stateCode);

            if (currentCountry != null && currentState != null && currentState.HasCities) {
                $jq(cityList).parents('.cityPane').show();
                $jq(cityList).show();

                service.invoke({
                    method: 'GetCitiesByStateCodeAndCountryCode',
                    data: {
                        'stateCode': stateCode,
                        'countryCode': countryCode
                    },
                    success: handle_fillCityList
                });
            }
            else {
                deactivateCityPane();
            }
        }
    };

    var fillCityListNoStates = function () {
        if (cityList) {
            var countryCode = $jq('option:selected', countryList).val();

            var countryCode = get_selectedCountryCode();
            var currentCountry = findCountry(countryCode);

            if (currentCountry != null && currentCountry.HasCities) {
                $jq(cityList).parents('.cityPane').show();
                $jq(cityList).show();

                service.invoke({
                    method: 'GetCitiesByCountryCode',
                    data: {
                        'countryCode': countryCode
                    },
                    success: handle_fillCityList,
                    failure: function() {
                        deactivateCityPane();
                        //alert(MatchCore.UI.Site.Translate.getTranslation('MatchContent.Account.AccountSettings.ErrorLoadingCities'));
                    }
                });
            }
            else {
                deactivateCityPane();
            }
        }
    };

    var handle_fillCityList = function (response) {
        $jq(cityList).clearOptions();

        if (includeNoAnswer.forCity) {
            $jq(cityList).addOption(
				{ value: -1, text: includeNoAnswer.aliasForCity, selected: (selectedCityCodes.length == 0) }
			);
        }

        var _cityList = $jq(cityList)[0];
        var _fragment = document.createDocumentFragment();
        var _option = null;
        var _isVisible = false;

        for (var i = 0, rl = response.length; i < rl; i++) {
            _option = document.createElement('option');
            _option.appendChild(document.createTextNode(response[i].Name));
            _option.value = response[i].Code;
            if (isCityCodeSelected(response[i].Code)) {
                _option.setAttribute("selected", true);
                _isVisible = true;
                $jq('#dist').show();
            } else {
                if (!_isVisible)
                    $jq('#dist').hide();
            }
            _fragment.appendChild(_option);
        }
        _cityList.appendChild(_fragment.cloneNode(true));
        if ($jq.uniform) {
            setTimeout(function () {
                $jq.uniform.update(cityList);
            }, 0);
        }
    };

    var findCountry = function (code) {
        for (var i = 0; i < countriesJson.length; i++) {
            if (countriesJson[i].Code == code)
                return countriesJson[i];
        }

        return null;
    };

    var findState = function (code) {
        for (var i = 0; i < statesJson.length; i++) {
            if (statesJson[i].Code == code)
                return statesJson[i];
        }

        return null;
    };

    var isCityCodeSelected = function (cityCode) {
        for (var i = 0; i < selectedCityCodes.length; i++) {
            if (selectedCityCodes[i].toString() == cityCode.toString())
                return true;
        }

        return false;
    };

    var deactivateStatePane = function () {
        $jq(stateList).parents('.statePane').hide();
        $jq(stateList).clearOptions();
    };

    var deactivateCityPane = function () {
        if (cityList) {
            $jq(cityList).parents('.cityPane').hide();
            $jq(cityList).hide();
            $jq(cityList).clearOptions();
            $jq(cityList).append('<option selected="selected" value="-1">All Cities</option>');
        }
    };

    var self = {
        init: function (opts) {

            config = opts.meta;
            _container = opts.container;

            postalCodeField = $jq(config.postalField);
            countryList = (config.countryList != undefined) ? $jq(config.countryList) : $jq('.countryList', _container).get(0);
            stateList = (config.stateList != undefined) ? $jq(config.stateList) : $jq('.stateList', _container).get(0);
            cityList = (config.cityList != undefined) ? $jq(config.cityList) : $jq('.cityList', _container).get(0);
            countryOverride = (config.countryOverride != undefined) ? config.countryOverride : null;

            if (config.selectedCountryCode)
                selectedCountryCode = config.selectedCountryCode;

            if (config.selectedCityCodes)
                selectedCityCodes = config.selectedCityCodes;

            if (config.selectedStateCode)
                selectedStateCode = config.selectedStateCode;

            if (config.includeNoAnswer)
                includeNoAnswer = config.includeNoAnswer;

            //wireup event handlers
            $jq(countryList).change(country_changed);
            $jq(stateList).change(state_changed);
            $jq(cityList).change(city_changed);

            self.render();
        },

        render: function () {
            //render waiting state

            $jq(countryList).addOption(loadingOpt);
            $jq(stateList).addOption(loadingOpt);
            $jq(cityList).addOption(loadingOpt);

            if (countryList || countryOverride !== null)
                fillCountryList();
        },

        get_countryList: function () {
            return countryList;
        },

        CountryFilledEvent: function (handler) {
            countryFilledDelegate.add(handler);
        },

        StateFilledEvent: function (handler) {
            stateFilledDelegate.add(handler);
        },

        setLocation: function (countryCode, stateCode, cityCodes) {
            if (arguments.length > 0 && countryCode != undefined) {
                selectedCountryCode = countryCode;
            }

            if (arguments.length > 1 && stateCode != undefined) {
                selectedStateCode = stateCode;
            }

            if (arguments.length > 2 && cityCodes != undefined) {
                selectedCityCodes = cityCodes;
            }
        },

        countryCode: function () {
            return (selectedCountryCode > -1) ? selectedCountryCode : null;
        },

        stateCode: function () {
            return (selectedStateCode > -1) ? selectedStateCode : null;
        },

        cityCodes: function () {
            return selectedCityCodes;
        }
    };

    return self;
};
