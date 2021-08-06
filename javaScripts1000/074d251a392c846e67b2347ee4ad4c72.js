(function($) {
    // This is not how you write a jQuery module, Dustin -- even if it's just being ported
    /* Multifaceted Lightbox by Greg Neustaetter - http://www.gregphoto.net */
    window.Lightbox = {
        lightboxType : null,
        lightboxURL: null, // HACK anthony volodkin, lets us know what's currently in the LB
        lightboxCurrentContentID : null,

        showBoxString : function(content, boxWidth, boxHeight){
            this.setLightboxDimensions(boxWidth, boxHeight);
            this.lightboxType = 'string';
            var contents = $('#boxContents');
            contents.html(content);
            this.showBox();
            return false;
        },


        showBoxImage : function(href) {
            this.lightboxType = 'image';
            var contents = $('#boxContents');
            var objImage = document.createElement("img");
            objImage.setAttribute('id','lightboxImage');
            contents.appendChild(objImage);
            imgPreload = new Image();
            imgPreload.onload=function(){
                objImage.src = href;
                Lightbox.showBox();
            }
            imgPreload.src = href;
            return false;
        },

        showBoxByID : function(id, boxWidth, boxHeight) {
            this.lightboxType = 'id';
            this.lightboxCurrentContentID = id;
            this.setLightboxDimensions(boxWidth, boxHeight);
            var element = $(id);
            var contents = $('#boxContents');
            contents.appendChild(element);
            Element.show(id);
            this.showBox();
            return false;
        },

        showBoxByAJAX : function(href, boxWidth, boxHeight) {
            this.lightboxType = 'ajax';
            this.lightboxURL = href;
            this.setLightboxDimensions(boxWidth, boxHeight);
            var contents = $('#boxContents').load(href);
            //var myAjax = new Ajax.Updater(contents, href, {method: 'get', evalScripts:true});

            this.showBox();
            return false;
        },

        setLightboxDimensions : function(width, height) {
            var windowSize = this.getPageDimensions();
            if(width) {
                //if(width < windowSize[0]) {
                    $('#box').css('width', width + 'px');
                //} else {
                //    $('#box').css('width', (windowSize[0] - 50) + 'px');
                //}
            }
            if(height) {
                //if(height < windowSize[1]) {
                    $('#box').css('height', height + 'px');
                //} else {
                //    $('#box').css('height', (windowSize[1] - 50) + 'px');
                //}
            }
        },


        showBox : function() {
            $('#overlay').show();
            this.center($('#box'));
            return false;
        },


        hideBox : function(){
            var contents = $('#boxContents');
            if(this.lightboxType == 'id') {
                var body = document.getElementsByTagName("body").item(0);
                Element.hide(this.lightboxCurrentContentID);
                body.appendChild($(this.lightboxCurrentContentID));
            }
            contents.html('');

    //        flashObjects = document.getElementsByClassName('playdiv')
    //        flashObjects.each(
    //            function(object){
    //                Element.show(object);
    //        });

            $('#box').css('width', null);
            $('#box').css('height', null);
            $('#box').hide();
            $('#overlay').hide();
            return false;
        },

        // taken from lightbox js, modified argument return order
        getPageDimensions : function(){
            var xScroll, yScroll;

            if (window.innerHeight && window.scrollMaxY) {
                xScroll = document.body.scrollWidth;
                yScroll = window.innerHeight + window.scrollMaxY;
            } else if (document.body.scrollHeight > document.body.offsetHeight){ // all but Explorer Mac
                xScroll = document.body.scrollWidth;
                yScroll = document.body.scrollHeight;
            } else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
                xScroll = document.body.offsetWidth;
                yScroll = document.body.offsetHeight;
            }

            var windowWidth, windowHeight;
            if (self.innerHeight) {    // all except Explorer
                windowWidth = self.innerWidth;
                windowHeight = self.innerHeight;
            } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
                windowWidth = document.documentElement.clientWidth;
                windowHeight = document.documentElement.clientHeight;
            } else if (document.body) { // other Explorers
                windowWidth = document.body.clientWidth;
                windowHeight = document.body.clientHeight;
            }

            // for small pages with total height less then height of the viewport
            if(yScroll < windowHeight){
                pageHeight = windowHeight;
            } else {
                pageHeight = yScroll;
            }

            // for small pages with total width less then width of the viewport
            if(xScroll < windowWidth){
                pageWidth = windowWidth;
            } else {
                pageWidth = xScroll;
            }
            arrayPageSize = new Array(windowWidth,windowHeight,pageWidth,pageHeight)
            return arrayPageSize;
        },

        center : function(element){

            var windowSize = this.getPageDimensions();
            var window_width  = windowSize[0];
            var window_height = windowSize[1];

            $('#overlay').css('height', windowSize[3] + 'px');

            element.css('position', 'absolute');
            element.css('z-index', 99999);

            var scrollY = 0;

            if ( document.documentElement && document.documentElement.scrollTop ){
                scrollY = document.documentElement.scrollTop;
            }else if ( document.body && document.body.scrollTop ){
                scrollY = document.body.scrollTop;
            }else if ( window.pageYOffset ){
                scrollY = window.pageYOffset;
            }else if ( window.scrollY ){
                scrollY = window.scrollY;
            }

            //var elementDimensions = Element.getDimensions(element);
            var setX = ( window_width  - $(element).outerWidth()  ) / 2;
            var setY = ( window_height - $(element).outerHeight() ) / 2 + scrollY;

            setX = ( setX < 0 ) ? 0 : setX;
            setY = ( setY < 0 ) ? 0 : setY;

            element.css('left', setX + "px");
            element.css('top', setY + "px");
            element.show();
        },

        init : function() {
            var lightboxtext = '<div id="overlay" style="display:none"></div>';
            lightboxtext += '<div id="box" style="display:none">';
            lightboxtext += '<img id="close" src="//hypem.com/images/close.gif" onClick="lightbox_close_handler(Lightbox.lightboxURL);return false;" alt="Close" title="Close this window" />';
            lightboxtext += '<div id="boxContents"></div>';
            lightboxtext += '</div>';

            $("body").append(lightboxtext);
        }
    }
})(jQuery);
