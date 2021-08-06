ï»¿/*
* Thickbox 3.1 - One Box To Rule Them All.
* By Cody Lindley (http://www.codylindley.com)
* Copyright (c) 2007 cody lindley
* Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
*/

/*!!!!!!!!!!!!!!!!! edit below this line at your own risk !!!!!!!!!!!!!!!!!!!!!!!*/

//on page load call tb_init
$(window).load(function() {
  tb_init('a.thickbox, area.thickbox, input.thickbox');
  $(document).ajaxStop(function () {
      if(!($('a.thickbox, area.thickbox, input.thickbox').length == $('a.thickbox.qvBinded, area.thickbox.qvBinded, input.thickbox.qvBinded').length)) {
        tb_init('a.thickbox, area.thickbox, input.thickbox'); //pass where to apply thickbox
      }
  });
});

//add thickbox to href & area elements that have a class of .thickbox
function tb_init(domChunk) {
    $(domChunk).not('.qvBinded').addClass('qvBinded').unbind('click').on("click", function (e) {
        e.stopImmediatePropagation();
        var t = this.title || this.name || null;
        var a = this.href || this.alt;
        var g = this.rel || false;
        tb_show(t, a, g);
        this.blur();
        return false;
    });
}

function tb_show(caption, url, imageGroup) {//function called when the user clicks on a thickbox link
    try {
        if (caption == null &&
            url == "" &&
            !(imageGroup)) {
            return;
        }

        if (typeof document.body.style.maxHeight === "undefined") {//if IE 6
            $("body", "html").css({ height: "100%", width: "100%" });
            $("html").css("overflow", "hidden");
            if (document.getElementById("TB_HideSelect") === null) {//iframe to hide select elements in ie6
                $("body").append("<iframe id='TB_HideSelect'></iframe><div id='TB_overlay' style='position:fixed;z-index:10000;top:0px;left:0px;height:100%;width:100%'></div><div id='TB_window' style='position:fixed;z-index:10002;display:none;top:50%;left:50%'></div>");
                $("#TB_overlay").click(tb_remove);
            }
        } else {//all others
            if (document.getElementById("TB_overlay") === null) {
                $("body").append("<div id='TB_overlay' style='position:fixed;z-index:10000;top:0px;left:0px;height:100%;width:100%'></div><div id='TB_window' style='position:fixed;z-index:10002;display:none;top:50%;left:50%'></div>");
                $("#TB_overlay").click(tb_remove);
            }
        }

        if (caption === null) {
            caption = "";
        }

        $("body").append("<div id='TB_load' style='position:fixed;display:none;z-index:10003'></div>"); //add loader to the page
        $('#TB_load').show(); //show loader

        var baseURL;
        if (url.indexOf("?") !== -1) { //ff there is a query string involved
            baseURL = url.substr(0, url.indexOf("?"));
        } else {
            baseURL = url;
        }

        var urlString = /\.jpg$|\.jpeg$|\.png$|\.gif$|\.bmp$/;
        var urlType = baseURL.toLowerCase().match(urlString);

        if (urlType == '.jpg' || urlType == '.jpeg' || urlType == '.png' || urlType == '.gif' || urlType == '.bmp') {//code to show images
            TB_PrevCaption = "";
            TB_PrevURL = "";
            TB_PrevHTML = "";
            TB_NextCaption = "";
            TB_NextURL = "";
            TB_NextHTML = "";
            TB_imageCount = "";
            TB_FoundURL = false;
            if (imageGroup) {
                TB_TempArray = $("a[@rel=" + imageGroup + "]").get();
                for (TB_Counter = 0; ((TB_Counter < TB_TempArray.length) && (TB_NextHTML === "")); TB_Counter++) {
                    var urlTypeTemp = TB_TempArray[TB_Counter].href.toLowerCase().match(urlString);
                    if (!(TB_TempArray[TB_Counter].href == url)) {
                        if (TB_FoundURL) {
                            TB_NextCaption = TB_TempArray[TB_Counter].title;
                            TB_NextURL = TB_TempArray[TB_Counter].href;
                            TB_NextHTML = "<span id='TB_next'>&nbsp;&nbsp;<a href='#'>Next &gt;</a></span>";
                        } else {
                            TB_PrevCaption = TB_TempArray[TB_Counter].title;
                            TB_PrevURL = TB_TempArray[TB_Counter].href;
                            TB_PrevHTML = "<span id='TB_prev'>&nbsp;&nbsp;<a href='#'>&lt; Prev</a></span>";
                        }
                    } else {
                        TB_FoundURL = true;
                        TB_imageCount = "Image " + (TB_Counter + 1) + " of " + (TB_TempArray.length);
                    }
                }
            }

            imgPreloader = new Image();
            imgPreloader.onload = function () {
                imgPreloader.onload = null;

                // Resizing large images - orginal by Christian Montoya edited by me.
                var pagesize = tb_getPageSize();
                var x = pagesize[0] - 150;
                var y = pagesize[1] - 150;
                var imageWidth = imgPreloader.width;
                var imageHeight = imgPreloader.height;
                if (imageWidth > x) {
                    imageHeight = imageHeight * (x / imageWidth);
                    imageWidth = x;
                    if (imageHeight > y) {
                        imageWidth = imageWidth * (y / imageHeight);
                        imageHeight = y;
                    }
                } else if (imageHeight > y) {
                    imageWidth = imageWidth * (y / imageHeight);
                    imageHeight = y;
                    if (imageWidth > x) {
                        imageHeight = imageHeight * (x / imageWidth);
                        imageWidth = x;
                    }
                }
                // End Resizing

                TB_WIDTH = imageWidth + 30;
                TB_HEIGHT = imageHeight + 60;
                $("#TB_window").append("<a href='' id='TB_ImageOff' title='Close'><img id='TB_Image' src='" + url + "' width='" + imageWidth + "' height='" + imageHeight + "' alt='" + caption + "'/></a>" + "<div id='TB_caption'>" + caption + "<div id='TB_secondLine'>" + TB_imageCount + TB_PrevHTML + TB_NextHTML + "</div></div><div id='TB_closeWindow' style='float:right;padding:11px 25px 10px 0'><a href='#' id='TB_closeWindowButton' title='Fechar'>Fechar</a></div>");

                $("#TB_closeWindowButton").click(tb_remove);

                if (!(TB_PrevHTML === "")) {
                    function goPrev() {
                        if ($(document).unbind("click", goPrev)) { $(document).unbind("click", goPrev); }
                        $("#TB_window").remove();
                        $("body").append("<div id='TB_window'></div>");
                        tb_show(TB_PrevCaption, TB_PrevURL, imageGroup);
                        return false;
                    }
                    $("#TB_prev").click(goPrev);
                }

                if (!(TB_NextHTML === "")) {
                    function goNext() {
                        $("#TB_window").remove();
                        $("body").append("<div id='TB_window'></div>");
                        tb_show(TB_NextCaption, TB_NextURL, imageGroup);
                        return false;
                    }
                    $("#TB_next").click(goNext);

                }

                document.onkeydown = function (e) {
                    if (e == null) { // ie
                        keycode = event.keyCode;
                    } else { // mozilla
                        keycode = e.which;
                    }
                    if (keycode == 27) { // close
                        tb_remove();
                    } else if (keycode == 190) { // display previous image
                        if (!(TB_NextHTML == "")) {
                            document.onkeydown = "";
                            goNext();
                        }
                    } else if (keycode == 188) { // display next image
                        if (!(TB_PrevHTML == "")) {
                            document.onkeydown = "";
                            goPrev();
                        }
                    }
                };

                tb_position();
                $("#TB_load").remove();
                $("#TB_ImageOff").click(tb_remove);
                $("#TB_window").css({ display: "block" }); //for safari using css instead of show
            };

            imgPreloader.src = url;
        } else {//code to show html
            var queryString = url.replace(/^[^\?]+\??/, '');
            var params = tb_parseQuery(queryString);

            TB_WIDTH = (params['width'] * 1) + 30 || 630; //defaults to 630 if no paramaters were added to URL
            TB_HEIGHT = (params['height'] * 1) + 40 || 440; //defaults to 440 if no paramaters were added to URL
            ajaxContentW = TB_WIDTH - 30;
            ajaxContentH = TB_HEIGHT - 45;

            if (url.indexOf('TB_iframe') != -1) {// either iframe or ajax window
                urlNoQuery = url.split('TB_');
                $("#TB_iframeContent").remove();
                if (params['modal'] != "true") {//iframe no modal
                    $("#TB_window").html("<div id='TB_title'><div id='TB_ajaxWindowTitle' style='float:left;padding:7px 0 5px 10px;margin-bottom:1px'>" + caption + "</div><div id='TB_closeAjaxWindow' style='float:right;padding:7px 10px 5px 0'><a href='#' id='TB_closeWindowButton' title='Fechar'>Fechar</a></div></div><iframe frameborder='0' hspace='0' src='" + urlNoQuery[0] + "' id='TB_iframeContent' name='TB_iframeContent" + Math.round(Math.random() * 1000) + "' onload='tb_showIframe()' style='width:" + (ajaxContentW + 29) + "px;height:" + (ajaxContentH + 17) + "px;' > </iframe>");
                } else {//iframe modal
                    $("#TB_overlay").unbind();
                    $("#TB_window").append("<iframe frameborder='0' hspace='0' src='" + urlNoQuery[0] + "' id='TB_iframeContent' name='TB_iframeContent" + Math.round(Math.random() * 1000) + "' onload='tb_showIframe()' style='width:" + (ajaxContentW + 29) + "px;height:" + (ajaxContentH + 17) + "px;'> </iframe>");
                }
            } else {// not an iframe, ajax
                if ($("#TB_window").css("display") != "block") {
                    if (params['modal'] != "true") {//ajax no modal
                        $("#TB_window").html("<div id='TB_title'><div id='TB_ajaxWindowTitle' style='float:left;padding:7px 0 5px 10px;margin-bottom:1px'>" + caption + "</div><div id='TB_closeAjaxWindow' style='float:right;padding:7px 10px 5px 0'><a href='#' id='TB_closeWindowButton' title='Fechar'>Fechar</a></div></div><div id='TB_ajaxContent' style='width:" + ajaxContentW + "px;height:" + ajaxContentH + "px;clear:both;overflow:auto;padding:2px 15px 15px 15px'></div>");
                    } else {//ajax modal
                        $("#TB_overlay").unbind();
                        $("#TB_window").append("<div id='TB_ajaxContent' class='TB_modal' style='width:" + ajaxContentW + "px;height:" + ajaxContentH + "px;clear:both;overflow:auto;padding:2px 15px 15px 15px'></div>");
                    }
                } else {//this means the window is already up, we are just loading new content via ajax
                    $("#TB_ajaxContent")[0].style.width = ajaxContentW + "px";
                    $("#TB_ajaxContent")[0].style.height = ajaxContentH + "px";
                    $("#TB_ajaxContent")[0].scrollTop = 0;
                    $("#TB_ajaxWindowTitle").html(caption);
                }
            }

            $("#TB_closeWindowButton").click(tb_remove);

            if (url.indexOf('TB_inline') != -1) {
                $("#TB_ajaxContent").append($('#' + params['inlineId']).children());
                $("#TB_window").unload(function () {
                    $('#' + params['inlineId']).append($("#TB_ajaxContent").children()); // move elements back when you're finished
                });
                tb_position();
                $("#TB_load").remove();
                $("#TB_window").css({ display: "block" });
            } else if (url.indexOf('TB_iframe') != -1) {
                tb_position();
                if ($.browser.safari) {//safari needs help because it will not fire iframe onload
                    $("#TB_load").remove();
                    $("#TB_window").css({ display: "block" });
                }
            } else {
                $("#TB_ajaxContent").load(url += "&random=" + (new Date().getTime()), function () {//to do a post change this load method
                    tb_position();
                    $("#TB_load").remove();
                    tb_init("#TB_ajaxContent a.thickbox");
                    $("#TB_window").css({ display: "block" });
                });
            }

        }

        if (!params['modal']) {
            document.onkeyup = function (e) {
                if (e == null) { // ie
                    keycode = event.keyCode;
                } else { // mozilla
                    keycode = e.which;
                }
                if (keycode == 27) { // close
                    tb_remove();
                }
            };
        }

    } catch (e) {
        //nothing here
    }
}

//helper functions below
function tb_showIframe() {
    $("#TB_load").remove();
    $("#TB_window").css({ display: "block" });
}

function tb_remove() {
    $("#TB_imageOff").unbind("click");
    $("#TB_closeWindowButton").unbind("click");
    $("#TB_window").fadeOut("fast", function () { $('#TB_window,#TB_overlay,#TB_HideSelect').trigger("unload").unbind().remove(); });
    $("#TB_load").remove();
    if (typeof document.body.style.maxHeight == "undefined") {//if IE 6
        $("body", "html").css({ height: "auto", width: "auto" });
        $("html").css("overflow", "");
    }
    document.onkeydown = "";
    document.onkeyup = "";
    return false;
}

function tb_position() {
    $("#TB_window").css({ marginLeft: '-' + parseInt((TB_WIDTH / 2), 10) + 'px', width: TB_WIDTH + 'px' });
    if (!(jQuery.browser.msie && jQuery.browser.version < 7)) { // take away IE6
        $("#TB_window").css({ marginTop: '-' + parseInt((TB_HEIGHT / 2), 10) + 'px' });
    }
}

function tb_parseQuery(query) {
    var Params = {};
    if (!query) { return Params; } // return empty object
    var Pairs = query.split(/[;&]/);
    for (var i = 0; i < Pairs.length; i++) {
        var KeyVal = Pairs[i].split('=');
        if (!KeyVal || KeyVal.length != 2) { continue; }
        var key = unescape(KeyVal[0]);
        var val = unescape(KeyVal[1]);
        val = val.replace(/\+/g, ' ');
        Params[key] = val;
    }
    return Params;
}

function tb_getPageSize() {
    var de = document.documentElement;
    var w = window.innerWidth || self.innerWidth || (de && de.clientWidth) || document.body.clientWidth;
    var h = window.innerHeight || self.innerHeight || (de && de.clientHeight) || document.body.clientHeight;
    arrayPageSize = [w, h];
    return arrayPageSize;
}

function tb_detectMacXFF() {
    var userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('mac') != -1 && userAgent.indexOf('firefox') != -1) {
        return true;
    }
}