;(function ( $, window, document, undefined ) {

    var pluginName = 'p17popup',
        defaults = {
            'ip' : '',
            'hide' : false
        };

    function Plugin( element, options ) {
        this.element = element;

        this.options = $.extend( {}, defaults, options) ;

        this._defaults = defaults;
        this._name = pluginName;

        this._apiKey = '709BC67866FD0EAEFBBE1327CB5CD5F35AF42ECF';
        this._bakeAdUrl = 'http://api.project17.me/api/Baker/BakeAd';
        this._advertDataUrl = 'http://api.project17.me/api/Baker/GetAd';
        this._advertSubmitUrl = 'http://api.project17.me/api/Baker/Redeem';
        this._comeBackToken = false;
        this._popupIsReady = false;
        this._advertData = {};
        this._adverContainer =  $('<div/>',{
            'id' : 'p17popup'
        });

        this.inactiveTimer = false;

        this._advertTemplate = '<div class="p17popup-inner-holder">' +
            '<div class="p17popup-image-holder" style="background-image: url('+"{{ImgUrl}}"+')"></div>' +
            '<div class="p17popup-image-content">' +
                //'<div id="p17popup-close"></div>' +
                '<div class="p17popup-image-controls">' +
                    '<a href="javascript:void(0)" id="p17popup-image-controls-no" class="mrgvlovaniCaps">áá  ááááá</a>' +
                    '<a href="javascript:void(0)" id="p17popup-image-controls-yes" class="mrgvlovaniCaps">ááááá</a>' +
                '</div>' +
                '<div class="p17popup-vertical">' +
                    '<h3 class="mrgvlovaniCaps">áááááªááá, áá¥ááá áááá¦áá <br/> á¡áá¡áá©á£á¥á á ááá£á©áá á!</h3>' +
                    '<p class="mrgvlovaniCaps">á¤áá¡áááááááá¡ ááááá¡ ááá¡áá¦áááá á¨ááá§ááááá <br/> áááá¥á¢á ááá£áá á¤áá¡á¢áá¡ ááá¡áááá áá</p>' +
                    '<form id="p17popup-form">' +
                        '<div class="input-holder">' +
                            '<input type="email" id="p17popup-email" class="mrgvlovaniCaps" placeholder="áá. á¤áá¡á¢á" /> ' +
                            '<input type="submit" id="p17popup-submit" value="ááááá¦áááá" class="mrgvlovaniCaps" />' +
                        '</div>' +
                    '</form>' +
                    '<div id="p17popup-sent" class="mrgvlovaniCaps">á¡áá¡áá©á£á¥á á áá£ááááá¡ áááá á¬áá ááá¢áááá ááááááááá<br/> áááá¥á¢á ááá£áá á¤áá¡á¢áá¡ áááááááá£á ááá¡áááá ááá</div>' +
                '<div>' +
            '</div>' +
        '</div>';

        this.init();
    }

    Plugin.prototype.init = function () {
        this._adverContainer.appendTo($(this.element));
        this.setupListners();
    };

    Plugin.prototype.setupListners = function () {
        var _self = this;
        $('body').on('click','#p17popup-image-controls-no, #p17popup-close',function(e){
            e.preventDefault();
            _self._hidePopup();
            if (typeof _self.options.hide == 'function') {
                _self.options.hide();
            }
        });

        $('body').on('click','#p17popup-image-controls-yes',function(e){
            e.preventDefault();
            clearTimeout(_self.inactiveTimer);
            $('#p17popup .p17popup-image-controls').hide();
            $('#p17popup').addClass('active');
            $('#p17popup-email').focus();
        });

        $('body').on('submit','#p17popup-form',function(e){
            e.preventDefault();
            var email = $('#p17popup-email').val();
            $('#p17popup-email').removeClass('invalid');
            if(!_self.validateEmail(email)){
                setTimeout(function(){
                    $('#p17popup-email').addClass('invalid');
                },100);

                return;
            }
            $('#p17popup-form').remove();
            $('#p17popup h3').remove();
            $('#p17popup p').remove();
            $('#p17popup-sent').css('display','inline-block');
            $('#p17popup.active .p17popup-image-content').css('background-color','transparent');

            setTimeout(function(){
                _self._hidePopup();
                if (typeof _self.options.hide == 'function') {
                    _self.options.hide();
                }
            },3000);

            _self.submitEmailToServer(email,function(sent,error){
                //$('#p17popup-email,#p17popup-submit').attr('disabled','disabled');
                //if(sent){
                //
                //}else {
                //    $('#p17popup-email,#p17popup-submit').removeAttr('disabled');
                //}
            });
        });

    };

    Plugin.prototype._hidePopup = function () {
        $('#p17popup').hide();
        clearTimeout(this.inactiveTimer);
    };

    Plugin.prototype.hidePopup = function () {
        $('#p17popup').hide();
        clearTimeout(this.inactiveTimer);
    };

    Plugin.prototype.showPopup = function () {
        if(!this._popupIsReady){
            if (typeof this.options.hide == 'function') {
                this.options.hide();
            }
            return;
        }
        $('#p17popup').show();
        this.inactiveTimer = setTimeout(function(){
            $('#p17popup-image-controls-no').trigger('click');
        },20000);
    };

    Plugin.prototype.validateEmail = function(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    Plugin.prototype.updateAdvertContainer = function () {
        var _self = this;
        var template = Handlebars.compile(this._advertTemplate);
        $('#p17popup').removeClass('active');
        this._adverContainer.html(template(this._advertData));
    };

    Plugin.prototype.preparePopup = function () {
        var _self = this;
        this._hidePopup();
        _self._popupIsReady = false;
        this._requestNewToken(function(token){
            _self._getAdvert(function(advertData){
                _self.updateAdvertContainer();
                if(advertData['ImgUrl']) {
                    _self._popupIsReady = true;
                }
            });
        });
    };

    Plugin.prototype._requestNewToken = function(callback){
        var _self = this;
        $.post(this._bakeAdUrl,{
            "ApiKey": this._apiKey,
            "Event" : 'Myvideo',
            "Ip"    : this.options.ip,
            "UserAgent" : navigator.userAgent
        },function(response){
            _self._comeBackToken = response.ComeBackToken;
            if (typeof callback == "function") {
                callback(_self._comeBackToken);
            }
        });
    };

    Plugin.prototype._getAdvert = function(callback){
        var _self = this;
        $.post(this._advertDataUrl,{
            'Token' : this._comeBackToken
        },function(response){
            _self._advertData = response;
            if (typeof callback == "function") {
                callback(_self._advertData);
            }
        });
    };

    Plugin.prototype.submitEmailToServer = function (email,callback) {

        if (!this.validateEmail(email)) {
            if (typeof callback == 'function') {
                callback(false,'áá áá¡á¬áá á áá-á¤áá¡á¢áá¡ ááá¡áááá áá');
            }
            return;
        }

        var _self = this;

        $.post(this._advertSubmitUrl, {
            'Token' : this._comeBackToken,
            'Mail'  : email
        }, function(response){

            if (typeof callback == "function") {
                callback(true,false);
            }
        });
    };


    $.fn[pluginName] = function ( options ) {
        var args = arguments;

        if (options === undefined || typeof options === 'object') {
            return this.each(function () {
                if (!$.data(this, 'plugin_' + pluginName)) {
                    $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
                }
            });

        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
            var returns;

            this.each(function () {
                var instance = $.data(this, 'plugin_' + pluginName);
                if (instance instanceof Plugin && typeof instance[options] === 'function') {
                    returns = instance[options].apply( instance, Array.prototype.slice.call( args, 1 ) );
                }
                if (options === 'destroy') {
                    $.data(this, 'plugin_' + pluginName, null);
                }
            });

            return returns !== undefined ? returns : this;
        }
    };

}(jQuery, window, document));