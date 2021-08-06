const bbbprotocol =
  "https:" == document.location.protocol ? "https://" : "http://";
-(function () {
  var s = document.createElement("script");
  s.src =
    bbbprotocol +
    "seal-nashville.bbb.org" +
    unescape("%2Flogo%2Fsmiledirectclub-37111672.js");
  s.type = "text/javascript";
  s.async = true;
  var st = document.getElementsByTagName("script");
  st = st[st.length - 1];
  var pt = st.parentNode;
  pt.insertBefore(s, pt.nextSibling);
})();
