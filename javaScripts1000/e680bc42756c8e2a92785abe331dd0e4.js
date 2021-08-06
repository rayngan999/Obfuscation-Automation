(function () {

  function uuidv4() {
      var dt = new Date().getTime();
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = (dt + Math.random() * 16) % 16 | 0;
          dt = Math.floor(dt / 16);
          return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
      return uuid;
  }
  
  function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
  }

  function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + "; path=/; Secure; SameSite=None";
  }
  
  function isValid(v) {
    return v && v.length && v != "null";
  }

  function getUuid() {
    var xsid = getCookie("nxg");
    if (isValid(xsid)) return xsid;
    xsid = window.sessionStorage.getItem('apex__sessionUUID');
    if (isValid(xsid)) {
      setCookie("nxg", xsid);
      return xsid;
    }
    xsid = getCookie("apex__sessionUUID");
    if (isValid(xsid)) {
      setCookie("nxg", xsid);
      return xsid;
    }
    xsid = uuidv4();
    setCookie("nxg", xsid);
    return xsid;
  }
    
  function getImpData(qsName, cName) {
    var qsValue = qs.get(qsName);
    if (!(isValid(qsValue))) {
        qsValue = qs.get(qsName.toUpperCase())
    }
    if (isValid(qsValue)) {
      setCookie(cName, qsValue);
      return qsValue;
    }
    return "";
  }

  var qs = new URLSearchParams(window.location.search);

  var g = getUuid();  
  var r = getImpData("reqid", "nxr");
  var c = getImpData("cmpid", "nxc");
  var j = getImpData("nxjid", "nxj");
  var a = getImpData("nxadv", "nxa");
  var e = getImpData("nxeid", "nxe");
  
  var tc = getImpData("nxtcid", "nxtc");
  var p = getImpData("nxpid", "nxp");
  var src = getImpData("nxsrc", "nxsrc");
  var cid = getImpData("nxcid", "nxcid");
  var aff = getImpData("nxaff", "nxaff");
  var sgid = getImpData("nxsgid", "nxsgid");
  
  var x = document.referrer || "";  
  setCookie("nxx", x);
  
  var rt = isValid(j) ? "1" : "";

  var mmid = "";
  var tl1 = "ExtPixel";
  var tv1 = "";
  if (isValid(c) && (c.toUpperCase() == "DANECH5776H7" || c.toUpperCase() == "DANECH0022H7" || c.toUpperCase() == "DANECH0023H7")) {
    var p = window.location.href.toLowerCase();
    if (p.startsWith("https://www.amazondelivers.jobs/?")) {
        mmid = "1540857";
        tv1 = "Main";
    }
    else if (p.includes("amazon.force.com/bbjobdetails")) {
        mmid = "1540859";
        tv1 = "JobDetails";
    }
    else if (p.includes("amazon.force.com/bbindex")) {
        mmid = "1540864";
        tv1 = "Inactive";
    }
    else if (p.includes("search.amazondelivers.jobs")) {
        mmid = "1540858";
        tv1 = "Node";
    }
  }

  var imgSrc = "https://p.nexxt.com/t?tcid=75573&ttid=1&etq=Y&rtid=" + rt + "&rid=" + j + "&xsid=" + g + "&xjid=" + encodeURIComponent(r) + "&xcmpid=" + encodeURIComponent(c) + "&xref=" + encodeURIComponent(x) + "&emid=" + encodeURIComponent(e) + "&sgid=" + sgid;

  if (tv1.length > 0) {
    imgSrc += "&tl1=" + tl1 + "&tv1=" + tv1;
  }
     
  var img = document.createElement("img");
  img.src = imgSrc;
  img.height = 0;
  img.width = 0;
  document.body.appendChild(img);
  
  if (mmid.length > 0) {
    var scr = document.createElement("script");
    scr.src = "//pixel.mathtag.com/event/js?mt_id=" + mmid + "&mt_adid=245249&mt_exem=&mt_excl=&v1=&v2=&v3=&s1=&s2=&s3=";
    scr.async = true;
    scr.lang = "JavaScript1.1"
    document.body.appendChild(scr);
  }

})();