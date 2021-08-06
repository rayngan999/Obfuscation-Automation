/**
 * Cienradios Event - v 0.0.1
 * Sistemas Digitales - RMSA
 * Registra eventos on click que usen data-cienradios-event como etiqueta
 */
(function(){
    $(document).ready(function(){
        var url_base = jQuery('meta[name="url_base"]').attr('content'),
            comscore_c2 = jQuery('meta[name="comscore:c2"]').attr('content'),
            comscore_ns_site = jQuery('meta[name="comscore:ns_site"]').attr('content'),
            comscore_name = jQuery('meta[name="comscore:name"]').attr('content'),
            cxense_id = jQuery('meta[name="cxense:id"]').attr('content');
        var cs_name = comscore_name.split('.'),
            url_name = cs_name[1];


        // $('body').on('click', '[data-cienradios-event]', function(){
        //     var event = $(this).data('cienradios-event'),
        //         info = $(this).data('cienradios-info');
        //     generateEvent(event, info);
        // } );
        /**
         *
         **/
        function generateEvent(event, info) {
            var rand = Math.random(),
                time = getCurrentTime();
            // GA
            if (typeof _gaq !== 'undefined') {
                _gaq.push(['_trackPageview', '/'+url_name+'.event='+event+'.info='+info+'.time='+time]);
            }
            else if (typeof ga !== 'undefined') {
                ga('send', 'pageview', {'page':'/'+url_name+'.event='+event+'.info='+info+'.time='+time,'title':document.title});
            }
            // cXense
            if(typeof cX !== 'undefined' ){
                cX.initializePage();
                cX.callQueue.push(['setSiteId',cxense_id]);
                cX.callQueue.push(['setCustomParameters', { 'page=':url_name, 'event':event, 'info':info, 'time':time}]);
                cX.callQueue.push(['sendPageViewEvent']);
            }
            // DAX
    		$.ajax({
                url: url_base+'/comscore-pageview.txt?rand='+rand,
    		    type: 'GET'
    		});
        	// <![CDATA[
        	function udm_(e){var t="comScore=",n=document,r=n.cookie,i="",s="indexOf",o="substring",u="length",a=2048,f,l="&ns_",c="&",h,p,d,v,m=window,g=m.encodeURIComponent||escape;if(r[s](t)+1)for(d=0,p=r.split(";"),v=p[u];d<v;d++)h=p[d][s](t),h+1&&(i=c+unescape(p[d][o](h+t[u])));e+=l+"_t="+ +(new Date)+l+"c="+(n.characterSet||n.defaultCharset||"")+"&c8="+g(n.title)+i+"&c7="+g(n.URL)+"&c9="+g(n.referrer),e[u]>a&&e[s](c)>0&&(f=e[o](0,a-8).lastIndexOf(c),e=(e[o](0,f)+l+"cut="+g(e[o](f+1)))[o](0,a)),n.images?(h=new Image,m.ns_p||(ns_p=h),h.src=e):n.write("<","p","><",'img src="',e,'" height="1" width="1" alt="*"',"><","/p",">")};
        	udm_('http'+(document.location.href.charAt(4)=='s'?'s://sb':'://b')+'.scorecardresearch.com/b?c1=2&c2='+comscore_c2+'&ns_site='+comscore_ns_site+'&name='+comscore_name+'.event='+event+'.info='+info+'.time='+time);
        	// ]]>
    	}

        function getCurrentTime(){
            var date = new Date();
            return date.getTime();
        }
    });

})();
