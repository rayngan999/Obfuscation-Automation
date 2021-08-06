
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" >
<head><title>
	i-mobile adSpot
</title><meta http-equiv="pragma" content="no-cache" /><meta http-equiv="cache-control" content="no-cache" /><link type="text/css" rel="Stylesheet" href="css/style.css" /></head>
<body>

<div id="adspotdiv" class="adspot_img" style="width: 160px; height: 600px; visibility:visible;" >
	
	
	
	
	
		<a href="https://spsvcpc-tls.i-mobile.co.jp/ad_link.ashx?pid=56096&asid=1057941&advid=6455478&vh=63ebd93705e1c78b9a6eb20ea6f48de5" target="_blank">
			<img src="https://spcdnpc.i-mobile.co.jp/ad_creative.ashx?advid=6455478" alt="AD" />
		</a>
	
	
	
</div>
<script type="text/javascript">
    var InformationIcon = {
        logo: document.getElementById("panel_L"),
        icon: document.getElementById("panel_S"),
        isSmartPhone:("ontouchstart" in window),
        Init: function(){
            if(this.logo && this.icon)
            {
                var that = this;
                if (this.isSmartPhone) {
                    this.icon.onclick = function () {
                        that.showLogo();
                    };
                }
                else
                {
                    this.icon.onmouseover = function () {
                        that.showLogo();
                    };
                }
                this.logo.onclick = function() {
                    that.goToIMobileSite();
                };
                this.logo.onmouseout = function () {
                    that.hideLogo();
                };
                var initialOpen = false;
                if(initialOpen)
                {
                    setTimeout(that.fadeOut, 2000);
                }
            }
        },
        showLogo: function () {
            this.logo.style.display = "block";
            this.icon.style.display = "none";
            if(this.isSmartPhone)
            {
                var that = this;
                setTimeout(that.fadeOut, 2000);
            }
        },
        hideLogo: function () {
            this.icon.style.display = "block";
            this.logo.style.display = "none";
        },
        fadeOut: function () {
            window.InformationIcon.hideLogo();
        },
        goToIMobileSite: function () {
            window.open("http://www.i-mobile.co.jp/about-service.aspx");
        }
    };
	InformationIcon.Init();

	
</script>




<script type="text/javascript">
	
</script>
</body>
</html>