;(function ( $, window, document, undefined ) {

    var pluginName = "mvComments",
        defaults = {
            commentBox  : '#comText',
            lengthBox   : '#length-counter',
            comSubmitBtn: '#comSubmit',
            commentBox  : '#comText',
            com_options : '.com-options'
        };


    function Plugin( element, options ) {
        this.element = element;

        this.options = $.extend( {}, defaults, options) ;
        this._defaults = defaults;
        this._name = pluginName;

        this.commentMaxLen = $(this.options.commentBox).attr('data-length');
        this.allowComment = false;
        this.comResult = $('<div>').attr({
            'id':'comResult',
            'class':'comPreloader comResult'
        });

        this.init();
    }

    Plugin.prototype = {


        init: function() {
            console.info('mvComments init');
            this.bindAutoGrowTo(this.options.commentBox);
            this.initCharCounters();
            this.initCommentSubmitListner();
            this.replyInit();
            this.deleteInit();
            this.deleteAllInit();
            this.reportInit();
            this.moderationInit();
            this.loadMoreInit();
        },

        trackEvent: function(event_name,desc,value){
            if (typeof desc == 'number'){
                desc = desc.toString();
            }
            _gaq.push(['_trackEvent', 'mvfeed', event_name,desc,value]);
        },

        loadMoreInit: function(){
            var _self  = this;
            $('body').on('click','#comments-load',function() {

                var video 	= $(this).attr('data-video');
                var pager	= $(this).attr('data-pager');
                var t 		= $(this);
                var top_com_ids = $('#top_comments_exc').val();

                if(!video || !pager) {
                    return false;
                }

                $.ajax({
                    type: 'GET',
                    url: '?CIA=1&ci_c=comments&ci_m=pager&vid=' + video + '&page=' + pager + '&ctops=' + top_com_ids,
                    dataType: 'json',
                    success: function (ret) {

                        if(ret.status == 'success') {
                            t.attr('data-pager', ret.next);
                            if(ret.current) {
                                var pageSpliter = $('<li>').attr({
                                    'class':'comments-page-spliter'
                                });
                                var pageDiv = $('<div>').text(ret.current).appendTo(pageSpliter);
                                pageSpliter.appendTo('#comments-list-root');
                            }
                            $(ret.html).appendTo('#comments-list-root');
                            if(ret.next > ret.pages) {
                                t.remove();
                            }
                        } else {
                            t.remove();
                        }
                    }
                });

            });

            $('body').on('click','.more_answers_spliter div',function(){
                if($(this).parents('li').find('.comment-replies-root').is(':visible')){
                    $(this).parents('li').find('.comment-replies-root').hide();
                }else{
                    $(this).parents('li').find('.comment-replies-root').show();
                }
            });
        },

        moderationInit: function(){
            var _self = this;
            $('body').on('click','a.option-disapproved',function() {

                var video 	= $(this).attr('data-video');
                var comment = $(this).attr('data-comment');
                var t 		= $(this);

                if(!video || !comment) {
                    return false;
                }

                $(t).addClass('button-loading');

                $.ajax({
                    type: 'GET',
                    url: '?CIA=1&ci_c=comments&ci_m=approveComment&comment_id=' + comment + '&vid=' + video,
                    dataType: 'json',
                    success: function (ret) {

                        $(t).removeClass('button-loading');

                        if(ret.status == 'success') {

                            $(t).parents('li.comment-li').removeClass('comment-not-approved');
                            $(t).parent().remove();

                        } else {

                            var statusError = $('<li>').attr({
                                'class':'status-error'
                            }).text(ret.message);

                            $(t).parents('li.comment-li').before(statusError);

                            statusError.delay(5000).slideUp(800, function() { $(this).remove(); });
                        }
                    }
                });

            });

            $('body').on('click','a.option-ban',function() {

                var user	= $(this).attr('data-user');
                var t 		= $(this);

                if(!user) {
                    return false;
                }

                $(t).addClass('button-loading');

                $.ajax({
                    type: 'GET',
                    url: '?CIA=1&ci_c=comments&ci_m=banUser&user=' + user,
                    dataType: 'json',
                    success: function (ret) {

                        $(t).removeClass('button-loading');

                        if(ret.status == 'success') {

                            $(t).parent().remove();

                        }
                    }
                });

            });
        },

        reportInit: function(){
            var _self = this;
            //report comment
            $('body').on('click','a.option-report',function() {

                var video 	= $(this).attr('data-video');
                var comment = $(this).attr('data-comment');
                var user	= $(this).attr('data-user');
                var t 		= $(this);

                if(!video || !comment || !user) {
                    return false;
                }

                $(t).addClass('button-loading');

                $.ajax({
                    type: 'GET',
                    url: '?CIA=1&ci_c=comments&ci_m=reportComment&comment=' + comment + '&video=' + video + '&user=' + user,
                    dataType: 'json',
                    success: function (ret) {

                        $(t).removeClass('button-loading');

                        if(ret.status == 'success') {

                            $(t).parent().remove();

                        }
                    }
                });

            });
        },

        deleteAllInit: function(){
            var _self = this;
            $('body').on('click','.option-delete-all',function() {

                var user	= $(this).attr('data-user');
                var t 		= $(this);

                if(!user) {
                    return false;
                }

                if(!confirm('do you realy want to delete all comments?')) {
                    return false;
                }

                $(t).addClass('button-loading');


                $.ajax({
                    type: 'GET',
                    url: '?CIA=1&ci_c=comments&ci_m=deleteUserComments&usr=' + user,
                    dataType: 'json',
                    success: function (ret) {

                        $(t).removeClass('button-loading');

                        if(ret.status == 'success') {

                            $('ul#comments-list-root').find("[data-commenter='" + ret.user + "']").fadeOut('slow');

                        } else {


                        }
                    }
                });

            });
        },

        deleteInit: function(){
            var _self = this;
            $('body').on('click','.option-delete',function() {

                var video 	= $(this).attr('data-video');
                var comment = $(this).attr('data-comment');
                var t 		= $(this);

                if(!video || !comment) {
                    return false;
                }

                $(t).addClass('button-loading');


                $.ajax({
                    type: 'GET',
                    url: '?CIA=1&ci_c=comments&ci_m=deleteComment&comment_id=' + comment + '&vid=' + video,
                    dataType: 'json',
                    success: function (ret) {

                        $(t).removeClass('button-loading');

                        if(ret.status == 'success') {

                            $('#comment-' + comment).replaceWith('<li class="comment-removed">'+ ret.message +'</li>');

                        } else {

                            var statusError = $('<li>').attr({
                                'class':'status-error'
                            }).text(ret.message);

                            $(t).parents('li.comment-li').before(statusError);

                            statusError.delay(5000).slideUp(800, function() { $(this).remove(); });
                        }
                    }
                });

            });
        },

        replyInit: function(){
            var _self = this;
            $('body').on('click','.comment_reply', function() {

                var comment_reply_tpl = '<div id="comReplayBox{comment}" class="comReplayBox"><div class="comreply-avatar left"><img src="{avatar}" /></div><div class="comreplay-form left"><form id="comreplay-form"><textarea id="comreplay_comtext" name="comreplay_comtext"></textarea><input type="hidden" id="comreplay_comid" name="comreplay_comid" value="{comment}" /><input type="hidden" id="comreplay_videoid" name="comreplay_videoid" value="{video}" /><div class="comreplay_options"><div class="option-length left"><span>1000</span></div><div class="option_submit right"><input type="submit" name="comreplaySubmit" id="comreplaySubmit" class="comreplay_submit disabled right" value="{btntxt}"/></div></form><div class="kbdbox"><a title="á¥áá áá£áá ááááááá¢á£á áá¡ ááááá¨áá" id="comm-kbd-reply" class="kbd_flags_reply"></a><input type="checkbox" name="geo" value="" alt="Georgian Keyboard" checked="checked" class="geo" id="kbd_comment_reply"></div></div>';

                $('.comReplayBox').remove();
                $('.reply-btns-group').show();

                var comment_data = $(this).data();

                if(typeof(comment_data) != 'object') {
                    return false;
                }

                for(k in comment_data) {
                    if (comment_data.hasOwnProperty(k)) {
                        var re = new RegExp('{'+k+'}', "g");
                        comment_reply_tpl = comment_reply_tpl.replace(re,comment_data[k]);
                    }
                }

                $('li.reply-btn-' + comment_data.realid).hide();
                $('li#comment-' + comment_data.realid).find('div#reply-box-' + comment_data.realid).prepend(comment_reply_tpl);

                _self.bindAutoGrowTo('#comreplay_comtext');

                GeoKBD.map('comreplay-form', 'comreplay_comtext','geo');

                $('body').on('click','.kbdbox #comm-kbd-reply',function(e)
                {
                    e.preventDefault();

                    $('#kbd_comment_reply').click();

                    if($('#kbd_comment_reply').is(":checked")) {

                        $(this).attr('title','á¥áá áá£áá ááááááá¢á£á áá¡ ááááá¨áá');
                        $(this).animate({
                            left:'0px'
                        },'fast');
                    } else {

                        $(this).attr('title','á¥áá áá£áá ááááááá¢á£á áá¡ á©áá ááá');
                        $(this).animate({
                            left:'-24px'
                        },'fast');
                    }
                });

                $("#comreplay_comtext").keypress(function(event)
                {
                    if(event.which == 96) {
                        if($('#kbd_comment_reply').is(":checked")) {
                            $('#comm-kbd-reply').attr('title','á¥áá áá£áá ááááááá¢á£á áá¡ á©áá ááá');
                            $('#comm-kbd-reply').animate({
                                left:'-24px'
                            },'fast');
                        } else {
                            $('#comm-kbd-reply').attr('title','á¥áá áá£áá ááááááá¢á£á áá¡ ááááá¨áá');
                            $('#comm-kbd-reply').animate({
                                left:'0px'
                            },'fast');
                        }
                    }
                });
            });

            $('body').on('click','#comreplaySubmit',function(event) {

                event.preventDefault();

                var commentText = $('#comreplay_comtext').val();
                var comment_id  = $('#comreplay_comid').val();
                var video_id	= $('#comreplay_videoid').val();
                //var top_com_ids = $('#top_comments_exc').val();

                if(!_self.allowComment) {
                    return false;
                }

                if(!$.trim(commentText).length) {
                    $('#comText').addClass('error');
                    return false;
                }

                if(!$.trim(commentText).length > _self.commentMaxLen) {
                    $('#comText').addClass('error');
                    return false;
                }

                _self.allowComment = false;

                $('#comReplayBox'+comment_id).html('');
                $('#comReplayBox'+comment_id).text('loading..');

                _self.trackEvent('comment-reply',video_id);

                $.ajax({
                    type: 'POST',
                    url: '?CIA=1&ci_c=comments&ci_m=reply',
                    dataType: 'json',
                    data: {comment:commentText,video_id:video_id,comment_id:comment_id},
                    success: function (ret) {
                        if(ret.status == 'success') {

                            if(ret.aproved == 1) {

                                $('#cr' + ret.pid).html(ret.html);
                                $('#cr' + ret.pid).addClass('comment-replies-loaded');
                                $('#comReplayBox'+comment_id).remove();

                            } else {
                                $('#comReplayBox'+comment_id).html(ret.message + ', ' + ret.msg_warning);
                            }

                        } else {

                            //comResult.addClass('comResult-error');

                        }

                    }
                });


            });
        },

        initCommentSubmitListner: function(){
            var _self = this;
            $('body').on('click',this.options.comSubmitBtn,function(event) {

                event.preventDefault();

                var commentText = $('#comText').val();
                var video		= $('#vid').val();
                var top_com_ids = $('#top_comments_exc').val();

                if(!_self.allowComment) {
                    return false;
                }

                if(!$.trim(commentText).length) {
                    $('#comText').addClass('error');
                    return false;
                }

                if(!$.trim(commentText).length > _self.commentMaxLen) {
                    $('#comText').addClass('error');
                    return false;
                }

                _self.allowComment = false;

                $(_self.options.comSubmitBtn).remove();
                $(_self.options.commentBox).remove();
                $(_self.options.lengthBox).remove();
                $(_self.options.com_options).remove();

                $('div.comments-area-input-wrapper').prepend(_self.comResult);

                _self.trackEvent('comment-write',video);

                $.ajax({
                    type: 'POST',
                    url: '?CIA=1&ci_c=comments&ci_m=add&ctops=' + top_com_ids,
                    dataType: 'json',
                    data: {comment:commentText,video_id:video},
                    success: function (ret) {

                        _self.comResult.removeClass('comPreloader');
                        _self.comResult.html(ret.message);

                        if(ret.status == 'success') {

                            _self.comResult.addClass('comResult-success');

                            if(ret.aproved == 1) {
                                $('#comments-list-root').html('');
                                $('#comments-list-root').html(ret.html);
                            } else {
                                $('<p>').attr({
                                    'class':'warning'
                                }).text(ret.msg_warning).appendTo(_self.comResult);

                            }


                        } else {

                            _self.comResult.addClass('comResult-error');

                        }

                    }
                });


            });
        },

        bindAutoGrowTo: function(element){
            $(element).autogrow();
        },

        initCharCounters: function(){
            var _self = this;
            $(this.options.commentBox).keyup(function() {

                var len	= $.trim($(this).val()).length;

                $(_self.options.lengthBox).find('span').html(len);

                if (len > _self.commentMaxLen) {
                    $(_self.options.lengthBox).find('span').text('0');
                    $(_self.options.comSubmitBtn).addClass('disabled');
                    _self.allowComment = false;
                } else if(len == 0){
                    $(_self.options.lengthBox).find('span').text(_self.commentMaxLen);
                    $(_self.options.comSubmitBtn).addClass('disabled');
                    _self.allowComment = false;
                } else {
                    var char = _self.commentMaxLen - len;
                    $(_self.options.lengthBox).find('span').text(char);
                    $(_self.options.comSubmitBtn).removeClass("disabled");
                    _self.allowComment = true;
                }
            });

            $('#comreplay_comtext').live('keyup', function() {
                var len	= $.trim($(this).val()).length;

                $('.option-length span').html(len);

                if (len > _self.commentMaxLen) {
                    $('.option-length span').text('0');
                    $('.comreplay_submit').addClass('disabled');
                    _self.allowComment = false;
                } else if(len == 0){
                    $('.option-length span').text(_self.commentMaxLen);
                    $('.comreplay_submit').addClass('disabled');
                    _self.allowComment = false;
                } else {
                    var char = _self.commentMaxLen - len;
                    $('.option-length span').text(char);
                    $('.comreplay_submit').removeClass("disabled");
                    _self.allowComment = true;
                }
            });
        }
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName,
                    new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );