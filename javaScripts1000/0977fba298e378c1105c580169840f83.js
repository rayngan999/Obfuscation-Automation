/**
 * Refresh home page of Makor Rishon
 * @param window.makorHPR [int] 30 minutes
 * @author Shlomo Framowitz
 **/
(function ($) {
    $(document).ready(function () {
        if($('body').hasClass('logged-in')) {
            return;
        }
        var data = window.makorAutoReload || {};
        if (!data) return;

        var refresh_timeout = (data.isFront == "1") ? (parseInt(data['front-page']) || 5) : (parseInt(data['articles']) || 30);
        if (refresh_timeout > -1) {
            refresh_timeout = refresh_timeout * 60000; // time is given in minutes
            if (console && console.log) console.log('××××× ××ª×¨×¢× × ×¢×× ' + refresh_timeout / 60000 + ' ××§××ª');
            setTimeout(function () {
                window.location.reload()
            }, refresh_timeout);
        }

    })
})(jQuery);
(function($) {
    function addCaptchaToken(action, callback){
        grecaptcha.ready(function() {
            grecaptcha.execute('6LdmnRcaAAAAAGGp1iA5fh-VrYIGDGigCkzfsaNt', {action: action}).then(function(token) {
                callback(token);
            });
        });
    }

    if(window.grecaptcha){
        $(document).on('submit','#wpcf7-f7767-p58-o1', function(e){
            if($('input[name="_wpcf7_recaptcha_response"]',$(this)).length === 0){
                e.preventDefault();
                var _this = $(this).find('form')[0];
                addCaptchaToken('contact_form', function(token){
                    $('<input type="hidden" name="_wpcf7_recaptcha_response" />')
                        .val(token)
                        .appendTo(_this);
                    setTimeout(function (){
                        _this.submit();
                    }, 3000)
                });
            }

        })

    }
})(jQuery);
/**
 * Autoload posts, apply custom js libreries 
 * @author Shlomo Framowitz
 **/
(function ($) {
    $(document).ready(function () {
        $(document).ajaxComplete(function (event, xhr, settings) {
            // rerender contact form 7 if needed
            if (wpcf7 && wpcf7.initForm && xhr.responseText && (xhr.responseText).match(/wpcf7-form/)) jQuery('.wpcf7-form').filter(function (i, el) { return jQuery('.ajax-loader', el).size() == 0 }).each(function (i, el) { wpcf7.initForm(el) });

            // render needed captch fields
            if (xhr.responseText && (xhr.responseText).match(/g-recaptcha/) && grecaptcha && grecaptcha.render) {
                $('.g-recaptcha:empty').each(function (i, el) {
                    var params = {
                        'sitekey': el.getAttribute('data-sitekey'),
                        'type': el.getAttribute('data-type'),
                        'size': el.getAttribute('data-size'),
                        'theme': el.getAttribute('data-theme'),
                        'badge': el.getAttribute('data-badge'),
                        'tabindex': el.getAttribute('data-tabindex')
                    };
                    grecaptcha.render(el, params);

                })
            }
        })
    });
})(jQuery);

/*
    Pikud Haoref live alert on siren
    Using socket.io from Makor Rishon server via express
*/
(function ($) {
    $(document).ready(function () {
        var io = io || false; // protect against if socket.io not included
        if (!io) return false

        var element = $('#redAlertStripe');
        var alertsContainer = $('div.alerts', element);
        var close = $('a.close', element);
        var play = $('div.play', element);
        var playSound = true;
        var snd;
        var soundUrl;
        close.on('click touch', function () {
            element.addClass('hide');
        })
        play.on('click touch', function () {
            playSound = !playSound;
            if (playSound) {
                play.html('<i class="fa fa-volume-up"></i>')
            } else {
                play.html('<span class="fa-stack fa-lg"><i class="fa fa-volume-up fa-stack-1x"></i><i class="fa fa-ban fa-stack-2x text-danger"></i></span>')
            }
        })

        var socket = io();
        var timeout;
        socket.on("message", function (data) {
            if (!data || !data.alerts) return false;
            clearTimeout(timeout);
            var ttl = (data[0] && data[0]['alerts:ttl']) ? (parseInt(data[0]['alerts:ttl']) * 1000) : 5000;
            var texts = [];
            // load sound once if needed and not ovorload memory
            if (!soundUrl || soundUrl != data.alerts[0].enclosure[0]['$'].url) snd = new Audio(data.alerts[0].enclosure[0]['$'].url);


            for (let index = 0; index < data.alerts.length; index++) {
                const el = data.alerts[index];
                texts.push((el.title[0] || '') + ' ' + (el.description[0] || ''));
            }
            element.removeClass('hide');

            alertsContainer.html(texts.join(", "));
            if (playSound && snd && snd.play) snd.play();
            timeout = setTimeout(function () {
                element.addClass('hide');
                alertsContainer.html('');
            }, ttl)


        })
    });
})(jQuery);

/* chartbeat.com */ 
var _sf_async_config = _sf_async_config || {};
(function($) {

    $(document).ready(function(){
        var section = '×¢××× ××××ª'
        var author = $('.jeg_meta_author>a:first').text().trim();

        
        try{
            if($('body').hasClass('home')){
                section = '×¢××× ××××ª'
            }else{
                var articleTitle = $('[property="article:section"]').attr('content');
                var pageTitle = $('title').text().replace(' â ××§××¨ ×¨××©××', '');
                section = articleTitle ? articleTitle : pageTitle;
            }  
        }catch(e){

        }
        


             /** CONFIGURATION START **/
            _sf_async_config.uid = 44983
            _sf_async_config.domain = 'www.makorrishon.co.il';
            _sf_async_config.sections = section;
             var isAndroid = navigator.userAgent.indexOf( 'MakorR_Android' ) > -1;
             var isIos = navigator.userAgent.indexOf( 'MakorR_IOS' ) > -1;
             if (isIos || isAndroid)
                _sf_async_config.mobileApp = true;
            if(author && author != "" && !$('body').hasClass('category') && !$('body').hasClass('home')) _sf_async_config.authors = author;

            /** CONFIGURATION END **/
             (function () {
                  function loadChartbeat() {
                       window._sf_endpt = (new Date()).getTime();
                       var e = document.createElement('script');
                       e.setAttribute('language', 'javascript');
                       e.setAttribute('type', 'text/javascript');
                       e.setAttribute('src', '//static.chartbeat.com/js/chartbeat.js');
                       document.body.appendChild(e);
                  }
                  loadChartbeat();
                 /*remove taboola function loadTaboolaInitPush() {
                     window.page_counter = 0;
                     _taboola.push({article:'auto', url: window.location.href});
                     _taboola.push({
                         mode: 'alternating-thumbnails-b',
                         container: 'taboola-below-article-'+makorAutoReload.postID,
                         placement: 'Below Article',
                         target_type: 'mix'
                     });

                     $('#taboola-below-article-'+makorAutoReload.postID).addClass('loadViaScroll');
                 }
                 if($('.post-wrap.post-autoload').length == 1){
                     loadTaboolaInitPush();
                 }*/
             })();

    })


})(jQuery);
