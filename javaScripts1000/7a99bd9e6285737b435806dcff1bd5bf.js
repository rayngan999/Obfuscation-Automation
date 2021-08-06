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
/**/

})();
(function() {
    try {
        if (document.getElementById('mm_sync_back_ground'))
           return;
        var frm = document.createElement('iframe');
        frm.style.visibility = 'hidden';
        frm.style.display = 'none';
        frm.src = "https://pixel.mathtag.com/sync/iframe?mt_uuid=d5036108-801a-4b00-8589-346e81e75aa3&no_iframe=1&mt_adid=241951&source=mathtag";
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
