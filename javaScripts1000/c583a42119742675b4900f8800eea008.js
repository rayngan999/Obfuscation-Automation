/** GO AWAY ! IT'S MINE !!! My precious, gollum, gollum **/
;(function ( $, window, document, undefined ) {

    var pluginName = "MyvideoLikeDis",
        defaults = {
            target              : '?CIA=1&ci_c=likedislike',
            likes_holder        : '#likes_count',
            dislikes_holder     : '#dislikes_count',
            like_button         : '#like',
            dislike_button      : '#dislike',
            sprinter_enabled    : true,
            preloader_enabled   : true,
            action_type_holder  : 'id',
            comments_like       : false,
            didFinishAction     : false
        };
    
    function Plugin( element, options ) {
        this.element = element;

        this.options    = $.extend( {}, defaults, options );
        this._defaults  = defaults;
        this._name      = pluginName;
        
        this._element_obj       = $(this.element);
        this._current_item      = false;
        
        this.init();
    }

    Plugin.prototype = {

        init: function() {
            if(this.options.comments_like){
                this._CommclickListner();
            }else{
                this._clickListner();
            }
        },
        
        _CommclickListner : function(){
            var _self    = this;
            this._element_obj.find('.likedislike').live('click',function(event) {
                event.preventDefault();
                
                _self._current_item = $(this);
                
                _self._likes_holder      = _self._current_item.parents('.comment_likebox').find(_self.options.likes_holder);
                _self._dislikes_holder   = _self._current_item.parents('.comment_likebox').find(_self.options.dislikes_holder);
                
                if(_self.options.preloader_enabled){
                    $('#like_dislike_preaload_fade,#like_dislike_preaload').show();
                }
                
                if(_self._element_obj.hasClass('proccesing')){
                    return false;
                }
                
                if(!_self._element_obj.hasClass('proccesing')){
                    //_self._element_obj.addClass('proccesing');
                }
                
                //PARSE CLICKED ELEMENT ATTRIBUTES AND GET DATA FROM IT
                var data_object = {};
                data_object.action_type = _self._current_item.attr(_self.options.action_type_holder);
                for (var i=0, attrs=this.attributes, l=attrs.length; i<l; i++){
                    if(!attrs.item(i).nodeName.indexOf('data')){
                        data_object[attrs.item(i).nodeName] = attrs.item(i).value;
                    }
                }
                
                var likes = parseInt(_self._likes_holder.html());
                var dislikes = parseInt(_self._dislikes_holder.html());
                
                $.post(_self.options.target,$.param(data_object),function(data){
                    if(data = $.parseJSON(data)){
                        if(_self._current_item.attr(_self.options.action_type_holder) == 'like'){
                            if(data.status == 1){
                                likes = (likes+1);
                                _self._likes_holder.html(likes);
                                dislikes = (dislikes-1);
                                if(dislikes >= 0){
                                    _self._dislikes_holder.html(dislikes);
                                    _self._current_item.parents('.comment_likebox').find(_self.options.dislike_button).removeClass('active');
                                    _self._current_item.parents('.comment_likebox').removeClass('active');
                                    _self._current_item.addClass('active');
                                }
                            }else if(data.status == 2){
                                _self._current_item.removeClass('active').addClass('clicked');
                                likes = (likes-1);
                                if(likes >= 0){
                                    _self._likes_holder.html(likes);
                                }
                            }
                        }else if(_self._current_item.attr(_self.options.action_type_holder) == 'dislike'){
                            if(data.status == 1){
                                dislikes = (dislikes+1);
                                _self._dislikes_holder.html(dislikes);
                                likes = (likes-1);
                                if(likes >= 0){
                                    _self._likes_holder.html(likes);
                                    _self._current_item.parents('.comment_likebox').find(_self.options.like_button).removeClass('active');
                                    _self._current_item.addClass('active');
                                }
                            }else if(data.status == 2){
                                _self._current_item.removeClass('active');
                                dislikes = (dislikes-1);
                                if(dislikes >= 0){
                                    _self._dislikes_holder.html(dislikes);
                                }
                            }
                        }
                    }
                    
                    if(_self.options.sprinter_enabled){
                        total = data.total;
                        //console.log(total+'--'+likes+'--'+dislikes);
                        precent_likes = (data.likes*100)/total;
                        precent_dislikes = (data.dislikes*100)/total;
                        
                        if(!parseInt(precent_dislikes)){
                            precent_dislikes = 0;
                        }
                        
                        if(!parseInt(precent_likes)){
                            precent_likes = 0;
                        }
                        
                        if($('.rating_sprint_holder').hasClass('hidden')){
                            $('.rating_sprint_holder').show().removeClass('hidden');
                        }
                        
                        if(total == 0){
                            precent_likes = 50;
                            precent_dislikes = 50;
                        }
                        
                        _self._likes_holder.html(data.likes);
                        _self._dislikes_holder.html(data.dislikes);
                        
                        $('.rating_sprint .likes').css({'width': precent_likes+'%'});
                        $('.rating_sprint .dislikes').css({'width': precent_dislikes+'%'});
                    }
                    
                    if(_self.options.preloader_enabled){
                        $('#like_dislike_preaload_fade,#like_dislike_preaload').hide();
                    }
                    _self._element_obj.removeClass('proccesing');


                    
                });//POST END
                
            });
        },
        
        _clickListner : function(){
            var _self    = this;
            this._element_obj.find('.likedislike').live('click',function(event) {
                event.preventDefault();
                
                _self._current_item = $(this);
                
                _self._likes_holder      = _self._element_obj.find(_self.options.likes_holder);
                _self._dislikes_holder   = _self._element_obj.find(_self.options.dislikes_holder);
                
                if(_self.options.preloader_enabled){
                    $('#like_dislike_preaload_fade,#like_dislike_preaload').show();
                }
                
                if(_self._element_obj.hasClass('proccesing')){
                    return false;
                }
                
                if(!_self._element_obj.hasClass('proccesing')){
                    //_self._element_obj.addClass('proccesing');
                }
                
                //PARSE CLICKED ELEMENT ATTRIBUTES AND GET DATA FROM IT
                var data_object = {};
                data_object.action_type = _self._current_item.attr(_self.options.action_type_holder);
                for (var i=0, attrs=this.attributes, l=attrs.length; i<l; i++){
                    if(!attrs.item(i).nodeName.indexOf('data')){
                        data_object[attrs.item(i).nodeName] = attrs.item(i).value;
                    }
                }
                
                var likes = parseInt(_self._likes_holder.html());
                var dislikes = parseInt(_self._dislikes_holder.html());
                
                $.post(_self.options.target,$.param(data_object),function(data){
                    if(data = $.parseJSON(data)){
                        if(_self._current_item.attr(_self.options.action_type_holder) == 'like'){
                            if(data.status == 1){
                                likes = (likes+1);
                                _self._likes_holder.html(likes);
                                if(_self._element_obj.find(_self.options.dislike_button).hasClass('active')){
                                    dislikes = (dislikes-1);
                                    _self._dislikes_holder.html(dislikes);
                                    _self._element_obj.find(_self.options.dislike_button).removeClass('active');
                                }
                                _self._current_item.addClass('active');
                            }else if(data.status == 2){
                                _self._current_item.removeClass('active').addClass('clicked');
                                likes = (likes-1);
                                _self._likes_holder.html(likes);
                            }
                        }else if(_self._current_item.attr(_self.options.action_type_holder) == 'dislike'){
                            if(data.status == 1){
                                dislikes = (dislikes+1);
                                _self._dislikes_holder.html(dislikes);
                                if(_self._element_obj.find(_self.options.like_button).hasClass('active')){
                                    likes = (likes-1);
                                    _self._likes_holder.html(likes);
                                    _self._element_obj.find(_self.options.like_button).removeClass('active')
                                }
                                _self._current_item.addClass('active');
                            }else if(data.status == 2){
                                _self._current_item.removeClass('active');
                                dislikes = (dislikes-1);
                                _self._dislikes_holder.html(dislikes);
                            }
                        }
                    }
                    
                    if(_self.options.sprinter_enabled){
                        total = data.total;
                        //console.log(total+'--'+likes+'--'+dislikes);
                        precent_likes = (data.likes*100)/total;
                        precent_dislikes = (data.dislikes*100)/total;
                        
                        if(!parseInt(precent_dislikes)){
                            precent_dislikes = 0;
                        }
                        
                        if(!parseInt(precent_likes)){
                            precent_likes = 0;
                        }
                        
                        if($('.rating_sprint_holder').hasClass('hidden')){
                            $('.rating_sprint_holder').show().removeClass('hidden');
                        }
                        
                        if(total == 0){
                            precent_likes = 50;
                            precent_dislikes = 50;
                        }
                        
                        _self._likes_holder.html(data.likes);
                        _self._dislikes_holder.html(data.dislikes);
                        
                        $('.rating_sprint .likes').css({'width': precent_likes+'%'});
                        $('.rating_sprint .dislikes').css({'width': precent_dislikes+'%'});
                    }
                    
                    if(_self.options.preloader_enabled){
                        $('#like_dislike_preaload_fade,#like_dislike_preaload').hide();
                    }
                    _self._element_obj.removeClass('proccesing');

                    if(typeof _self.options.didFinishAction == 'function'){
                        _self.options.didFinishAction(data);
                    }
                    
                });//POST END
                
            });
        }
        
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );