(function() {
try {
    (function() {
    metric = function(url, wait)
    {
        setTimeout(function() {
                var e = document.createElement("img");
                e.src = url;
            }, wait);
    }
    var intervals = [0, 10];
    var inlen = intervals.length;
    for (var k = 0; k < inlen; ++k)
        this.metric("https://pixel.mathtag.com/misc/img?mm_bnc&bcdv="+k, intervals[k] * 1000);
})();
(function(){
/*
//pixel.mathtag.com/event/js?mt_id=854855&mt_adid=144724&v1=&v2=&v3=&s1=&s2=&s3=
//pixel.mathtag.com/event/img?mt_id=1154602&mt_adid=166226&mt_exem=&mt_excl=&v1=&v2=&v3=&s1=&s2=&s3=
*/

  var mm_ri = String( Math.random() );
  mm_ri = mm_ri.replace( /0\./g,'' );

  var mm_protocol = location.protocol;
  if ( mm_protocol != 'http:' && mm_protocol != 'https:' ){ mm_protocol = 'http:'; }

  var mm_el0 = document.createElement('script');
  mm_el0.style.display = 'none';
  var url0 = '//pixel.mathtag.com/event/js?mt_id=854855&mt_adid=144724&v1=&v2=&v3=&s1=&s2=&s3=&mt_uuid=37c06108-70a8-4d00-be0f-3064d2795e84';
  url0 = url0.replace("\[RANDOM_NUMBER\]", mm_ri);
  mm_el0.src = url0;
  document.body.appendChild(mm_el0);

  var mm_el1 = document.createElement('img');
  var url1 = '//pixel.mathtag.com/event/img?mt_id=1154602&mt_adid=166226&mt_exem=&mt_excl=&v1=&v2=&v3=&s1=&s2=&s3=&mt_uuid=37c06108-70a8-4d00-be0f-3064d2795e84';
  url1 = url1.replace("\[RANDOM_NUMBER\]", mm_ri);
  mm_el1.width = 1;
  mm_el1.height = 1;
  mm_el1.style.display = 'none';
  mm_el1.src = url1;
  document.body.appendChild(mm_el1);


})();
(function() {
    try {
        if (document.getElementById('mm_sync_back_ground'))
           return;
        var frm = document.createElement('iframe');
        frm.style.visibility = 'hidden';
        frm.style.display = 'none';
        frm.src = "https://pixel.mathtag.com/sync/iframe?mt_uuid=37c06108-70a8-4d00-be0f-3064d2795e84&no_iframe=1&mt_adid=145053&skipsync=F&source=mathtag";
        frm.setAttribute("id", "mm_sync_back_ground");
        frm.title="MediaMath Advertising";

        if (document.body)
            document.body.appendChild(frm);
        else
            if (document.head)
                document.head.appendChild(frm);
    }
    catch(ex)
    {
        document.createElement("img").src="//pixel.mathtag.com/error/img?error_domain=synciframe&what="+encodeURIComponent(ex.message);
    }
})();

}
catch(ex)
{
   document.createElement("img").src="//pixel.mathtag.com/error/img?error_domain=wrap_js&what="+encodeURIComponent(ex.message);
}
})();
