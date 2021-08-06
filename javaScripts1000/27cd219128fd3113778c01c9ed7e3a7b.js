;
(function($,window,document){
    var close = $('#sign .close');
    var login = $('#user-login,#cc-user-login');

    var user = $('.nav-avatar-wrap img');
    var userMenu = $('.user-menu');
    var addCollection = $('.add-collection');
    var addCollectionPop = $('.add-collection .add-pop');
    var commentAvatar = $('#comments .comment-avatar');
    var commentAvatarPop = $('#comments .comment-avatar .user-info-pop');

    function IsPC(){
        var userAgentInfo = navigator.userAgent;
        var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
        }
        return flag;
    }

    close.on('click',function(){
        $('body').removeClass('modal-open');
        $('#sign').css('display','none');
    });


    login.on('click',function(){
        var top = $(document).scrollTop();
        $('body').addClass('modal-open');
        $('#sign').css('display','block');
      
    });
    /*è¯è®ºåå¤åæ¶
     $('.comment-reply .reply a').on('click',function(e){
     e.preventDefault();
     $('body').addClass('modal-open');
     $('#sign').css('display','block');
     })
     */
    $('body').on('click','.must-log-in a,.comment-reply-login',function(e){
        e.preventDefault();
        var top = $(document).scrollTop();
        $('body').addClass('modal-open');
        $('#sign').css('display','block');
        $('#sign').css('top', top + 'px');
    })


    $('.collection a').on('click',function(e){
        e.preventDefault();
        $('body').addClass('modal-open');
        $('#sign').css('display','block');
    })


    user.on('click',function(){
        userMenu.toggle();
    });
    $('body').on("click",'.add-collection', function(event){
        $(this).children('.add-pop').css('display','block');
    });

    $('.search-fly-wrap input').click(function (e) {
        e.stopPropagation();
    })
    $('.nav-avatar-wrap .user-menu').click(function (e) {
        e.stopPropagation();
    })
    commentAvatar.on('mouseenter',function(){
        if(IsPC()){
            $(this).children('.user-info-pop').css('display','block');
        }
    });
    commentAvatar.on('mouseleave',function(){
        $(this).children('.user-info-pop').css('display','none');
    });
    $('#site').children().click(function () {
    });
    $('#site').on("click",function(e){
        console.log('body');

        var _con = user;   // è®¾ç½®ç®æ åºå
        var _con1 = $('.add-collection');   // è®¾ç½®ç®æ åºå
        var _con2 = $('#comments .comment-avatar');
        var _con3 = $('.nav-search-but');
        var _con4 = $('.nav-top-but');
        var _con5 = $('.nav-top-modal');
        console.log(!_con1.is(e.target) && _con1.has(e.target).length === 0);
        if(!_con.is(e.target) && _con.has(e.target).length === 0){ // Mark 1
            userMenu.css('display','none');   // åè½ä»£ç 
        }
        if(!_con1.is(e.target) && _con1.has(e.target).length === 0){ // Mark 2
            $('.add-collection .add-pop').css('display','none');   // åè½ä»£ç 
        }
        if(!_con2.is(e.target) && _con2.has(e.target).length === 0){ // Mark 2
            commentAvatarPop.css('display','none');   // åè½ä»£ç 
        }
        if(!_con3.is(e.target) && _con3.has(e.target).length === 0){
            $(".search-fly-wrap").slideUp(200);
        }
        if(!_con4.is(e.target) && _con4.has(e.target).length === 0 && !_con5.is(e.target) && _con5.has(e.target).length === 0){
            $(".nav-top-modal").hide();
        }
    });

    //topå¯¼èªé¨åçjs

    $(".nav-top-but").click(function () {
        $(".nav-top-modal").show();
    })

    $(".nav-top-modal .tab li").click(function(){
        var role = $(this).attr('role');
        $(".nav-top-modal .tab li").removeClass('active');
        $(this).addClass('active');
        var selector = ".content[role=" + role + "]";
        $(".nav-top-modal .content").hide();
        $(selector).show();
    })


})(jQuery,window,document)
