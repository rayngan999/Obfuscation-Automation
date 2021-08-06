$jq(document).ready(function () {
   
    $jq("#password").keypress(function (e) {
        if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
            $jq("#btlogin").click();
            return false;
        } else {
            return true;
        }
    });

    $jq("#step2").keypress(function (e) {
        if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
            $jq("#btnSubmit").click();
            return false;
        } else {
            return true;
        }
    });


    if ($jq('.ajaxGeoLatam').length != 0) {
        Cortado.Bootloader.require("/scripts/site/ajaxGeo.js", function () {
           
            $jq('.ajaxGeoLatam').each(function () {
                var countryList = $jq('.countryPane SELECT', this);
                var stateList = $jq('.statePane SELECT', this);
                var cityList = $jq('.cityPane SELECT', this);
                var postalField = $jq('.postalPane INPUT', this);
             //   var _state = MatchCore.UI.Site.Translate.getTranslation('MatchContent.Latam.Index.IndexPage.meet');
                var geo = new MatchCore.AjaxGeo();
                var includeNoAnswer = {
                    forCountry: false,
                    aliasForCountry: "",
                    forState: true,
                    aliasForState: MatchCore.UI.Site.Translate.getTranslation('MatchContent.Latam.Index.IndexPage.my_State'),
                    forCity: true,
                    aliasForCity: MatchCore.UI.Site.Translate.getTranslation('MatchContent.Latam.Index.IndexPage.my_City')
                };
                geo.init({
                    container: this,
                    meta: {
                        "countryList": (countryList.length > 0) ? countryList[0] : null,
                        "stateList": (stateList.length > 0) ? stateList[0] : null,
                        "cityList": (cityList.length > 0) ? cityList[0] : null,
                        "includeNoAnswer": includeNoAnswer,
                        "selectedCountryCode": parseInt($jq("#selectedcountry").val())
                    }
                });
                geo.StateFilledEvent(parseQueryString);
            });
        });
    }


    $jq("select[name='countryCode']").change(function () {

        MatchCore.CPX.Messaging.reset();
    });

    $jq("select[name='stateCode']").change(function () {

        MatchCore.CPX.Messaging.reset();
    });

    $jq("select[name='cityCode']").change(function () {

        MatchCore.CPX.Messaging.reset();
    });

    $jq("select[name='genderGenderSeek']").change(function() {

        MatchCore.CPX.Messaging.reset();
    });

    $jq("#username").focusout(function () {
        MatchCore.CPX.Messaging.reset();
        if ($jq('.btn-progressive:hover').length) {
            $jq('.btn-progressive').click();
        }
        var _handle = $jq("#username").val();

        if (_handle.length > 0) {
            var postData = {
                "handle": _handle,
                "BirthDay": "01",
                "BirthMonth": "01",
                "BirthYear": "1911",
                "EnablePartialLogging": true
            };
            MatchCore.CPX.ui_busy();
            $jq.ajax({
                url: '/Registration/ValidatePartialRegistration/',
                data: postData,
                type: 'POST',
                dataType: 'json',
                success: function (response) {
                    MatchCore.CPX.ui_done();
                    if (!response.Success) {
                        MatchCore.CPX.Messaging.reset();
                        if (response.Messages[0].Field.indexOf("handle") > -1) {

                            var index = response.Messages[0].Text.indexOf("<ul>");
                            var strsize = response.Messages[0].Text.indexOf("</ul>");

                            if (index === -1) {
                                $jq("#handle-generic").show();
                                $jq("#handle-generic div").html(response.Messages[0].Text);
                            } else {
                                $jq("#suggestions-placeholder-reg").show();

                                $jq(response.Messages[0].Text.substring(index, strsize)).appendTo("#ul-suggestions-placeholder-reg");
                                $jq("#ul-suggestions-placeholder-reg ul li").click(function() {
                                    $jq("#username").val($jq(this).text());
                                    $jq("#suggestions-placeholder-reg").hide();
                                });
                            }

                        }

                    }
                },
                failure: function (response) {
                    MatchCore.CPX.ui_done();
                    invalid({ "Messages": [{ Text: "There was a problem submitting your registration information." }] });
                }
            });
        }
    });

    $jq("#email").focusout(function() {
        MatchCore.CPX.Messaging.reset();
        if ($jq('.btn-progressive:hover').length) {
            $jq('.btn-progressive').click();
        }
        var _email = $jq("#email").val();

        if (_email.length > 0) {
            var postData = {
                "email": _email,
                "BirthDay": "01",
                "BirthMonth": "01",
                "BirthYear": "1911",
                "EnablePartialLogging": true
            };
            MatchCore.CPX.ui_busy();
            $jq.ajax({
                url: '/Registration/ValidatePartialRegistration/',
                data: postData,
                type: 'POST',
                dataType: 'json',
                success: function (response) {
                    MatchCore.CPX.ui_done();
                    if (response.Success) {
                      $jq("#boxErrorEmail").addClass('hide');

                    } else {
                      MatchCore.CPX.Messaging.reset();
                      var emailCannotBeUsedMsg = MatchCore.UI.Site.Translate.getTranslation('MatchContent.Strings.RegistrationMessages.EmailCannotBeUsed');
                      var errorMessage;
                      if (response.Messages && response.Messages.length > 0) {
                          if(emailCannotBeUsedMsg === response.Messages[0].Text ){
                              $jq("#mlt_latam_logos").removeClass('hide');
                          }else {
                              $jq("#mlt_latam_logos").addClass('hide');
                          }
                          errorMessage = response.Messages[0].Text;
                      } else {
                          errorMessage = MatchCore.CPX.ClientMessages.RegEmail;
                          $jq("#mlt_latam_logos").addClass('hide');
                      }
                      $jq("#msgErrorEmail").html(errorMessage);
                      $jq("#boxErrorEmail").removeClass('hide');
                  }
                },
                failure: function (response) {
                    MatchCore.CPX.ui_done();
                    invalid({ "Messages": [{ Text: "There was a problem submitting your registration information." }] });
                }
            });
        }
    });

    $jq(".btn-progressive").click(function () {
        MatchCore.CPX.Messaging.reset();

        var _container = $jq(this).parents(".form-registration");
        var _countryCode = 0, _cityCode = 0, _stateCode = 0, _gender = 0, _genderSeek = 0, _errorMessages = [];
        var genderGenderSeek = parseInt($jq("SELECT[name='genderGenderSeek']", _container).val());

        _countryCode = parseInt(($jq("INPUT[name='countryCode']", _container).length === 1) ? $jq("INPUT[name='countryCode']", _container).val() : $jq("SELECT[name='countryCode']", _container).val());
        _stateCode = parseInt($jq("SELECT[name='stateCode']", _container).val());
        _cityCode = parseInt($jq("SELECT[name='cityCode']", _container).val());

        if (genderGenderSeek === 0) {
            _errorMessages.push({ "Field": "error-gender", "Text": "Please choose the gender." });

        }

        if (_countryCode === -1) {
            _errorMessages.push({ "Field": "error-country", "Text": "invalid country." });

        }

        if (_stateCode === -1) {
            _errorMessages.push({ "Field": "error-state", "Text": "invalid state." });

        }

        if (_cityCode === -1) {
            _errorMessages.push({ "Field": "error-city", "Text": "invalid cityCode." });

        }

        if (_errorMessages.length > 0) {
            MatchCore.CPX.Messaging.showFirst(_errorMessages);
            //MatchCore.CPX.Messaging.show(_errorMessages);
        }
        else{

            if (!MatchCore.CPX.CurrentUser.LoggedIn()) {


                if ($jq("SELECT[name='genderGenderSeek']", _container).length === 1) {

                    if (!isNaN(genderGenderSeek)) {
                        if (genderGenderSeek === 1) {
                            _gender = 1;
                            _genderSeek = 1;
                        }
                        if (genderGenderSeek === 2) {
                            _gender = 1;
                            _genderSeek = 2;
                        }
                        if (genderGenderSeek === 3) {
                            _gender = 2;
                            _genderSeek = 2;
                        }
                        if (genderGenderSeek == 4) {
                            _gender = 2;
                            _genderSeek = 1;
                        }
                    }
                }


                var postData = {
                    "CountryCode": _countryCode,
                    "StateCode": _stateCode,
                    "CityCode": _cityCode,
                    "Gender": _gender,
                    "GenderSeek": _genderSeek,
                    "BirthDay": "01",
                    "BirthMonth": "01",
                    "BirthYear": "1911",
                    "EnablePartialLogging": true

                };
                MatchCore.CPX.ui_busy();
                $jq.ajax({
                    url: '/Registration/ValidatePartialRegistration/',
                    data: postData,
                    type: 'POST',
                    dataType: 'json',
                    success: function(response) {
                        MatchCore.CPX.ui_done();
                        if (response.Success) {
                            $jq("#step1").hide();
                            $jq("#step2").show();
                            $jq(".after").show();
                            $jq("#mainplace").attr('class', 'mlt_secStep');

                            var image = "list" + $jq("#urlCode").val() + "_" + _genderSeek ;

                            $jq("#userList").addClass(image);

                            if (!isNaN(genderGenderSeek)) {
                                if (genderGenderSeek === 1) {
                                    $jq("li[name='photoFemale'").hide();
                                }
                                if (genderGenderSeek === 2) {
                                    $jq("li[name='photoMale'").hide();
                                }
                                if (genderGenderSeek === 3) {
                                    $jq("li[name='photoMale'").hide();
                                }
                                if (genderGenderSeek == 4) {
                                    $jq("li[name='photoFemale'").hide();
                                }
                            }

                            var photos = $jq("li[name^='photo'");
                            for (var j = 0; j < photos.length; j++) {
                                if (j > 35) {
                                    $jq(photos[j]).hide();
                                }
                            }


                        } else {
                            MatchCore.CPX.Messaging.reset();
                            for (i = 0; i < response.Messages.length; i++) {
                                _errorMessages.push(response.Messages[i]);

                            }
                            MatchCore.CPX.Messaging.show(_errorMessages);
                        }
                    },
                    failure: function(response) {
                        MatchCore.CPX.ui_done();
                        invalid({ "Messages": [{ Text: "There was a problem submitting your registration information." }] });
                    }
                });
            }
        }
    });


    $jq(".btn-registerlatam").click(function () {


        _container = $jq(this).parents(".form-registration");
        if (!MatchCore.CPX.CurrentUser.LoggedIn()) {

            _handle = $jq("INPUT[name='handle']", _container).val();
            _password = $jq("INPUT[name='password']", _container).val();
            _email = $jq("INPUT[name='email']", _container).val();
            _birthDay = $jq("SELECT[name='birthDay']", _container).val();
            _birthMonth = $jq("SELECT[name='birthMonth']", _container).val();
            _birthYear = $jq("SELECT[name='birthYear']", _container).val();
            _countryCode = ($jq("INPUT[name='countryCode']", _container).length == 1) ? $jq("INPUT[name='countryCode']", _container).val() : $jq("SELECT[name='countryCode']", _container).val();
            _stateCode = $jq("SELECT[name='stateCode']", _container).val();
            _cityCode = $jq("SELECT[name='cityCode']", _container).val();
            _ageSeekLow = $jq("INPUT[name='ageSeekLow']", _container).val();
            _ageSeekHigh = $jq("INPUT[name='ageSeekHigh']", _container).val();
            _enablePartialLogging = true;

            if ($jq("SELECT[name='genderGenderSeek']", _container).length == 1) {
                var genderGenderSeek = parseInt($jq("SELECT[name='genderGenderSeek']", _container).val());
                if (!isNaN(genderGenderSeek)) {
                    if (genderGenderSeek == 0) {
                        _gender = 0;
                        _genderSeek = 0;
                    }
                    if (genderGenderSeek == 1) {
                        _gender = 1;
                        _genderSeek = 1;
                    }
                    if (genderGenderSeek == 2) {
                        _gender = 1;
                        _genderSeek = 2;
                    }
                    if (genderGenderSeek == 3) {
                        _gender = 2;
                        _genderSeek = 2;
                    }
                    if (genderGenderSeek == 4) {
                        _gender = 2;
                        _genderSeek = 1;
                    }
                }
            }
            var errors = [];

            if (_handle == null || _handle == "") {
                errors.push({ Field: "boxErrorUsername", Text: MatchCore.CPX.ClientMessages.RegHandle });
            }
            if (_password == null || _password == "") {
                errors.push({ Field: "boxErrorPassword", Text: MatchCore.CPX.ClientMessages.RegPassword });
            }
            if (_email == null || _email == "") {
                errors.push({ Field: "boxErrorEmail", Text: MatchCore.CPX.ClientMessages.RegEmail });
            }

            if (_birthDay == "0" && _birthMonth == "0" && _birthYear == "0") {
                errors.push({ Field: "boxErrorBirthday", Text: MatchCore.CPX.ClientMessages.RegBirthGeneric });
            } else if ((_birthMonth > 0) && (_birthDay > 0) && (_birthYear > 0)) {              
                if (((_birthMonth == 2) && (_birthYear % 4 != 0) && (_birthDay > 28))) {                   
                    errors.push({ Field: "boxErrorBirthday", Text: MatchCore.CPX.ClientMessages.RegBirthGeneric });                  
                }
                else if (((_birthMonth == 2) && (_birthYear % 4 == 0) && (_birthDay > 29))) {
                    errors.push({ Field: "boxErrorBirthday", Text: MatchCore.CPX.ClientMessages.RegBirthGeneric });
                }
                else if (((_birthMonth == 4 || _birthMonth == 6 || _birthMonth == 9 || _birthMonth == 11) && (_birthDay > 30))) {
                    errors.push({ Field: "boxErrorBirthday", Text: MatchCore.CPX.ClientMessages.RegBirthGeneric });
                }
            }
            else {
                if (_birthDay == null || _birthDay == '0') {
                    errors.push({ Field: "boxErrorBirthday", Text: MatchCore.CPX.ClientMessages.RegBirthDay });
                }
                if (_birthMonth == null || _birthMonth == '0') {
                    errors.push({ Field: "boxErrorBirthday", Text: MatchCore.CPX.ClientMessages.RegBirthMonth });
                }
                if (_birthYear == null || _birthYear == '0') {
                    errors.push({ Field: "boxErrorBirthday", Text: MatchCore.CPX.ClientMessages.RegBirthYear });
                }
            }

            if (errors.length > 0) {
                MatchCore.CPX.Messaging.reset();
                MatchCore.CPX.Messaging.showFirst(errors);
                return;
            }


            var postData = {
                "Handle": _handle,
                "Password": _password,
                "Email": _email,
                "BirthDay": _birthDay,
                "BirthMonth": _birthMonth,
                "BirthYear": _birthYear,
                "CountryCode": _countryCode,
                "StateCode": _stateCode,
                "CityCode": _cityCode,
                "Gender": _gender,
                "GenderSeek": _genderSeek,
                "PageID": MatchCore.CPX.PageID(),
                "PageVersion": MatchCore.CPX.PageVersion(),
                "AgeSeekHigh" : _ageSeekHigh,
                "AgeSeekLow" : _ageSeekLow
            };
            MatchCore.CPX.ui_busy();
            $jq.ajax({
                type: "POST",
                url: '/Registration/Register/',
                dataType: 'json',
                data: postData,
                success: function(response) {
                    if (response.Success) {
                        MatchCore.CPX.CurrentUser.LoggedIn(true)
                        MatchCore.CPX.CurrentUser.Token(response.Data.Token);
                        MatchCore.CPX.Services.persistCookies(response);

                        var hash;
                        if ($jq.readCookie('MatchSearch2') == undefined) {
                            hash = [];
                            hash['K11'] = "20";
                            hash['K01'] = _gender;
                            hash['K02'] = _genderSeek;

                            $jq.createCookie('MatchSearch2', hash, false, true);
                        } else {
                            hash = $jq.readCookie('MatchSearch2');
                        }
                        MatchCore.CPX.ui_busy();
                        if (response.redirectURL) {
                            location.href = response.redirectURL;
                        }
                        else {
                            location.href = '/profile/create';
                        }

                    } else {
                        MatchCore.CPX.ui_done();
                        MatchCore.CPX.Messaging.reset();
                        if (response.Messages.length >= 2 && response.Messages[0].Text == response.Messages[1].Text) {
                            response.Messages = response.Messages.splice(1);
                        }
                        MatchCore.CPX.Messaging.show(response.Messages);
                    }
                },
                failure: function(response) {
                    MatchCore.CPX.ui_done();
                    MatchCore.CPX.Messaging.reset();
                    MatchCore.CPX.Messaging.show({ "Messages": [{ Text: "There was a problem submitting your registration information." }] });

                }
            });
        } else {
            success({ "Success": true, "Messages": [{ Text: "Already registered." }] });
        }


    });

    MatchCore.CPX.Messaging.showFirst = function (messages, status) {
        var i = 0, id = "";

        for (i = 0; i < messages.length; i++) {
           id = "#" + messages[i].Field;
           if(id === "#boxErrorEmail"){
             $jq("#mlt_latam_logos").addClass('hide');
             $jq("#msgErrorEmail").html(messages[i].Text);
             $jq(id).removeClass("hide");
          }else{
             $jq(id).show();
          }

           id = "#errorMsgLogin" + messages[i].Field;
           $jq(id).show();
        }
    }

    MatchCore.CPX.Messaging.show = function (messages, status) {
        var i = 0, id = "";
        $jq('#errorList').empty();
        $jq('#boxErrorEmail').addClass('hide');
        for (i = 0 ; i < messages.length; i++) {


            $jq("#errorList").append("<li>" + messages[i].Text + "</li>");


           /* id = "#" + messages[i].Field;
            $jq(id).show();

            id = "#errorMsgLogin" + messages[i].Field;
            $jq(id).show();

            if (messages[i].Text.indexOf("aboutDoubleblind") > -1 ) {
                $jq("#boxErrorEmailEqualsUsername").show();
            }


            if ( messages[i].Text.indexOf("mail") > -1) {
                $jq("#boxErrorEmail").show();
                return;
            }



            if (messages[i].Text.indexOf("18") > -1 || messages[i].Text.indexOf("data")) {
                $jq("#boxErrorYouMustBe18").show();
            }*/




        }
        $jq("#errorList").show();


    };

    MatchCore.CPX.Messaging.reset = function () {
        $jq("#errorList").hide();
        $jq('#errorList').empty();
        $jq("#error-gender").hide();
        $jq("#error-country").hide();
        $jq("#error-state").hide();
        $jq("#error-city").hide();

        $jq("#boxErrorBirthday").hide();
        $jq("#boxErrorUsername").hide();
        $jq("#boxErrorPassword").hide();
        $jq("#boxErrorEmailEqualsUsername").hide();
        $jq("#suggestions-placeholder-reg").hide();
        $jq("#handle-generic").hide();
        $jq('#errorMsgLoginpassword').empty();
        $jq("#errorMsgLoginpassword").hide();
        /*

        $jq("#boxErrorYouMustBe18").hide();*/

    };

    $jq("select[name^='birth']").change(function() {
        MatchCore.CPX.Messaging.reset();
    });


    MatchCore.CPX.Login.onSuccess(function (response) {
        MatchCore.CPX.ui_busy();
         if (response[0].RedirectUrl) {
            location.href = response[0].RedirectUrl;
        }
        else {
            location.href = '/profile/create';
        }
    });

    MatchCore.CPX.Login.onFailure(function (response) {
        MatchCore.CPX.Messaging.reset();


        $jq("#errorMsgLoginpassword").append("<span class='tab' style='font-family: CoreSansC-45Regular; font-size: 13px;color: #c23d4b;'>" + response[0].Messages[0].Text + "</span>");
        $jq("#errorMsgLoginpassword").show();



    });


    MatchCore.CPX.ui_busy = function() {
        $jq(".btn-registerlatam").toggleClass( "background-btn-disabled" );
    }

    MatchCore.CPX.ui_done = function () {
       $jq(".btn-registerlatam").toggleClass( "background-btn-disabled" );
    }


    var title = $jq("#regTitle").val();

    if (title != undefined && title.length > 0) {
        $jq("#titleRegistrationStep1").html(title);
    }

    var getParameterByName = function(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    var replaceSpecialChars=function(str)
    {
        str = str.replace(/[ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½]/,"A");
        str = str.replace(/[ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½]/,"a");
        str = str.replace(/[ï¿½ï¿½ï¿½ï¿½]/,"E");
        str = str.replace(/[ï¿½ï¿½ï¿½ï¿½]/,"E");
        str = str.replace(/[ï¿½ï¿½ï¿½ï¿½ï¿½]/,"O");
        str = str.replace(/[ï¿½ï¿½ï¿½ï¿½ï¿½]/,"o");
        str = str.replace(/[ï¿½ï¿½ï¿½]/,"I");
        str = str.replace(/[ï¿½ï¿½ï¿½]/,"i");
        str = str.replace(/[ï¿½]/,"C");
        str = str.replace(/[ï¿½]/,"c");

        // o resto

        return str.replace(/[^a-z0-9]/gi,'');
    }

var IsNumeric = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

    var parseQueryString = function(){
        var genderMap = new Object();

        genderMap["mulheres-solteiras"] = "4";
        genderMap["homens-solteiros"] = "2";
        genderMap["mujeres-solas"] = "4";
        genderMap["hombres-solos"] = "2";

        var q = getParameterByName("Q");

        if(q.length>0){
            var queryString = q.split("_");
            //selecting the state from query string
            var stateName = "" + queryString[queryString.length-2];
            stateName = stateName.replace(new RegExp('-', 'g'), ' ');

            $jq("SELECT[name='stateCode'] > option").each(function() {
               // console.log(this.text + ' ' + this.value);

                pureValue = replaceSpecialChars(this.text).toLowerCase();
                stateName = replaceSpecialChars(stateName).toLowerCase();

                if(stateName==pureValue){
                    $jq(this).prop('selected',true);
                }

            });

            //selecting gender seek from query string
            var genderSeek = queryString[queryString.length-3];

            var genderID = genderMap[genderSeek];

            $jq("SELECT[name='genderGenderSeek']").val(genderID)
        }else{

             var gender = getParameterByName("gender");
             if(gender==1){
                $jq("SELECT[name='genderGenderSeek']").val(4)
             }
             if(gender==2){
                $jq("SELECT[name='genderGenderSeek']").val(2)
             }

             var state = getParameterByName("stateb");

             if(IsNumeric(state)){
                $jq("SELECT[name='stateCode']").val(state);
             }

        }






    };



});
