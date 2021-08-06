var afterReady = afterReady || [];
    afterReady.push(function(){  
      var _rd = {
        ads: {adUnit: ''},
        adRadio: null,
        $cont: $('#homeRadioComponent'),
        setItemNext: function(item, data){
          item.show();
          var dateInit1 = new Date(data.startTime * 1000),
          dateEnd1 = new Date(data.stopTime * 1000);
          $('.sch-name', item).text(data.name);
          $('.sch-name', item).attr('href', data.url_programa);          
          $('.time-hhmm', item).text(dateInit1.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}));
          swift.bindLink($('.sch-name', item)[0]);
          
        },
        binnedRadio: function(){
          var that = this;
          playPause = $('.live-play', this.$cont);
          playPause.off('click').on('click', function(e){
            e.preventDefault();
            if(typeof radioApp == 'object'){
              if(radioApp.config.method != 'live'){
                radioApp.lastStatusRadio = 'on';
                radioApp.handleReturn();
                if(audioArray.lima.second){
                  $('html').addClass("secondRd");    
                }
              }else{                
                if(this.dataset.second){
                  //audioArray.lima.media = audioArray.lima.secondMedia;
                  if(!audioArray.lima.second && radioApp.playing) radioApp.disconnect();
                  audioArray.lima.second = true;
                  $('html').addClass("secondRd");                  
                   
                  if(!radioApp.playing) ga('send', 'event', 'RPP_Player', 'click', window.location.origin+window.location.pathname+'|play-primaria');                  
                }else{
                  if(audioArray.lima.second && radioApp.playing) radioApp.disconnect();
                  audioArray.lima.second = false;
                  $('html').removeClass("secondRd");

                  if(!radioApp.playing) ga('send', 'event', 'RPP_Player', 'click', window.location.origin+window.location.pathname+'|play-alterna');                            
                }

                $(radioApp.ui.playPause).trigger('click');
              } 
            } 
          });

          if(!this.$cont.data('offAutohide')){

            $(window).off('scroll.plyRd').on('scroll.plyRd', function(){
              var offset = that.$cont.offset();
              if(offset){
                if(offset.top + that.$cont.height() > $(window).scrollTop()){
                  $('body').addClass('hide-rplayer');
                }else $('body').removeClass('hide-rplayer');
              }else $(window).off('scroll.plyRd');
            }).trigger('scroll.plyRd');

            if(typeof swSpa === 'object'){
              swSpa.beforemount.push(function(){
                $(window).off('scroll.plyRd');
              });
            }

          }
        },
        drawAd: function(adUnit){
          var that = this;
          if(this.ads.adUnit == adUnit) return;
          if(adUnit && adUnit !== ''){
            that.adRadio = document.createElement('div');
            that.adRadio.className = 'item item-add-radio';
            that.adRadio.innerHTML = '<div class="inner-ad"><div class="txby">Gracias a:</div> <div class="x-ads ads" id="'+ adUnit +'" data-size="[59, 23]"></div></div>';
           $('.schedule', this.$cont).append(that.adRadio);
            this.ads.adUnit = adUnit;     
            swift.renderAd(that.adRadio.querySelector('.x-ads'), true);
            that.$cont.addClass('add-single');
          }else{
            for (var i = 0; i < googletag.slots.length; i++) {
              var unit = googletag.slots[i];
              if(unit.getAdUnitPath() == '/1028310/'+this.ads.adUnit){
                googletag.cmd.push(function(){
                  googletag.destroySlots([unit]);
                  googletag.pubads().clear([unit]);
                  that.ads.adUnit = '';
                  that.adRadio.innerHTML = '';
                  that.adRadio.remove(); 
                });     

                that.$cont.removeClass('add-single');

              }
            }         
          }
        },
        refreshImage_2: function (data, stationArray, $cont, gb_main) {
          var that = this;              
          cover =  $('.image-cover', $cont),
          title = $('[data-setting="title"]', $cont),
          dial = $('.dial', $cont),
          bg = $('.bg-filter', that.$cont),
          nameDial = $('[data-setting="dial"]', $cont);


          
          var coverUrl = data.onlive.imageWeb || data.onlive.imageUrl;
          title.text(data.onlive.name);
          title.attr('href', (data.onlive.url_programa || ''));
          cover.attr('href', (data.onlive.url_programa || ''));  

          nameDial.text('RPP+');
          //dial[0].textContent = stationArray.dial;
          //nameDial.text(data.onlive.serviceName);

       
         // var bgImg = new Image();
           // bgImg.onload = function(){

             
            cover.css({backgroundImage: 'url('+ coverUrl +')'});    
            if(gb_main) bg.css('backgroundImage', 'url('+ coverUrl +')');
            that.$cont.addClass('loaded');
           // };
          //  bgImg.src = coverUrl;
           
          //}
          
        },
        refreshImage: function(data, stationArray){

          var that = this, $cont = this.$cont;
          
          itemsNext =  $('.item-next', $cont),      
          cover =  $('.image-cover', $cont),
          title = $('.title-live', $cont),
          stationName = $('.name-station', $cont),
          dial = $('.dial', $cont),
          bg = $('.bg-filter', $cont);
          
          var coverUrl = data.onlive.imageWeb || data.onlive.imageUrl;
          title.text(data.onlive.name);
          title.attr('href', (data.onlive.url_programa || ''));
          cover.attr('href', (data.onlive.url_programa || ''));   

          stationName[0].textContent = stationArray.title; 
          dial[0].textContent = stationArray.dial;

          if(data.onlive.type == 'PE_E') itemsNext.hide();
          else{
            if(data.next[0]) this.setItemNext(itemsNext.eq(0), data.next[0]);          
            else itemsNext.eq(0).hide();
            if(data.next[1]) this.setItemNext(itemsNext.eq(1), data.next[1]); 
            else itemsNext.eq(1).hide();     
          }
          var bgImg = new Image();
          bgImg.onload = function(){
            cover.css({backgroundImage: 'url('+ coverUrl +')'});      
            bg.css('backgroundImage', 'url('+ coverUrl +')');
            that.$cont.addClass('loaded');
          };
          bgImg.src = coverUrl;
          this.drawAd(data.onlive.ad_code ? data.onlive.ad_code+'-player':'');
        }
      }

      var timerGetInfo = function(){
        
        var stationArray = xsl.fn.getStationArray(), $cont = $('#homeRadioComponent');
        if(!$cont.hasClass('double')){
          xsl.fn.setLive(stationArray.id).then(function(data) {
             _rd.refreshImage(data, stationArray);
          });
        }else{
          xsl.fn.setLive(stationArray.id).then(function(data) {
            _rd.refreshImage_2(data, stationArray, $(".first-player", $cont), true);
          });
          xsl.fn.setLive(54).then(function(data) {
            _rd.refreshImage_2(data, stationArray, $(".second-player", $cont));
          });
        }


      }        

      var intv = setInterval(timerGetInfo,60000);
      try {        
        swSpa.beforemount.push(function(){
          clearInterval(intv);
        });
      } catch (e) { }

      _rd.binnedRadio();
      timerGetInfo(); 
     
    });    
