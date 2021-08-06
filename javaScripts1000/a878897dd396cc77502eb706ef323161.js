<html><body>
<script type="text/javascript">
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
/**/
(function() {
    try {
	var sync_4815162342 = function() {
this.urls = [
[0, "https://pixel.mathtag.com/misc/img?mop_seq=0:1&mt_cb=108199&mop_top="],
[10000, "https://app.retargetly.com/sync?sid=d5036108-801a-4b00-8589-346e81e75aa3&pid=10"],
[0, "https://pixel.mathtag.com/misc/img?mop_seq=1:1&mt_cb=192540&check=d5036108-801a-4b00-8589-346e81e75aa3&mop_top="]
]
this.progress = 0;
	    var self = this;
	    var tims = "";
	    var errs = "";
	    this.sync = function(i) {
                var e = document.createElement("img");
                var now = new Date();
            if (e.addEventListener) {
                e.addEventListener('load', function() {
                    var temp = new Date().getTime() - now.getTime(); tims += self.urls[i][0]+':'+temp+"|";
                });
                e.addEventListener('error', function() {
                    var temp = new Date().getTime() - now.getTime(); errs += self.urls[i][0]+':'+temp+"|";
                });
            }
		    e.src = self.urls[i][1];
	    }
	    this.batch = function(){
		    for (var i = self.progress; i < self.urls.length; ++i){
		        self.sync(i);
		    }
	    }
	    this.final = function(){
            var e = document.createElement("img");
            e.src = self.urls[self.urls.length-1][1]+"&final&timings="+tims+"&errors="+errs;
	    }
	    this.some = function(howmany){
            var count = 0;
            for (var i = self.progress; i < self.urls.length && count < howmany; ++i){
                self.sync(i);
                self.progress++;
                count++;
		    }
	    }
	}
	var s_4815162342 = new sync_4815162342();
	s_4815162342.some(1);
	setTimeout(function(){s_4815162342.some(2);}, 1000);
	setTimeout(s_4815162342.batch, 3000);
	setTimeout(s_4815162342.final, 10000);
    }
    catch(ex) {
	  document.createElement("img").src="//pixel.mathtag.com/error/img?error_domain=syncjs&what="+encodeURIComponent(ex.message);
    }
})();

}
catch(ex)
{
   document.createElement("img").src="//pixel.mathtag.com/error/img?error_domain=wrap_iframe&what="+encodeURIComponent(ex.message);
}
</script>

</body></html>
