(function() {
    var s = "<body>" + ctv + "</body>";
    var k = document.createElement("iframe");
    k.src = "about:blank";
    k.setAttribute("class", "cfh5 cfadif cfadif" + zi);
    k.setAttribute("width", w);
    k.setAttribute("height", h);
    k.setAttribute("scrolling", "no");
    k.setAttribute("marginheight", "0");
    k.setAttribute("marginwidth", "0");
    k.setAttribute("allowtransparency", "true");
    k.setAttribute("vspace", 0);
    k.setAttribute("hspace", 0);
    k.setAttribute("frameborder", 0);
    document.body.appendChild(k);
    k.contentDocument.write(s);
    k.contentDocument.close();
    var i = document.createElement("img");
    i.setAttribute("src", iu);
    i.setAttribute("width", 0);
    i.setAttribute("height", 0);
    i.setAttribute("style", "display:none;");
    document.body.appendChild(i); 
})();