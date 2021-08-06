
function refreshRevive(){
    // placements to refresh
    var adSlots = '#kotwica-banner';

    // remove data-revive-loaded attribute
    $(adSlots).each(function(i,e){
        var o = $(e);
        o.removeAttr('data-revive-loaded');
        reviveAsync[o.attr('data-revive-id')].refresh();
    }); 
}


var float_banner_bottom_added=false;
function show_ads_server_ads(){

    const run_revive = () => {
        if(!float_banner_bottom_added){
                
            if($('#coupon').length > 0)
                return;
            
            var screenwidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
            var randomn = new Date().getTime();
            var banner_code = null;
            var height = 110;

            if(screenwidth > 768){
                banner_code = '<ins id="kotwica-banner" data-revive-zoneid="4" data-revive-id="405e6452f0574c03dc898bc4ce36883b"></ins>';
            }else{
                height=100;
                banner_code='<ins id="kotwica-banner" data-revive-zoneid="6" data-revive-id="405e6452f0574c03dc898bc4ce36883b"></ins>';
            }

            if(banner_code){
                setInterval(()=>{
                    refreshRevive();
                },30000);

                var sm = $('.subpage-menu');
                var html_banner='<div style="padding:5px;display:block;margin: 4px 0;text-align:center;">'+banner_code+'</div>';
                float_banner_bottom_added=true;

                if(sm.length > 0){
                    if(screenwidth <= 768)
                        sm.css('bottom',(height-8)+'px');

                    sm.append('<div style="background:#e3e3e3;width:100%;height:'+height+'px;">'+html_banner+'</div>');
                }else{               
                    $('body').append('<div style="background:#e3e3e3;position:fixed;z-index:99999;bottom:0;height:'+height+'px;width:100%;">'+html_banner+'</div>');
                }
                refreshRevive();
            }
        }
    }

    if(window.jQuery){
        run_revive();
    }else{
        document.addEventListener("site-build", function(event) { 
            run_revive();
        });
    }
}



         
