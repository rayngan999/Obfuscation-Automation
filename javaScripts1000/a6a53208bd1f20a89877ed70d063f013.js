//This is the file/content that is inserted into the body of a page to initialise chat
var VERSION = 0.03;
(function(url){
  if (document.getElementById("iframeChat") != null) {
    return;
  }

  var callback = "";
  var scriptTable = document.getElementsByTagName('script');
  for (var i = 0; i <= scriptTable.length;i++) {
    if (scriptTable[i] !== undefined && scriptTable[i].src.indexOf("chat-init") > -1) {
      if (scriptTable[i].getAttribute('callback') !== undefined && scriptTable[i].getAttribute('callback') !== null) {
        callback = scriptTable[i].getAttribute('callback');
      } else {
	callback = scriptTable[i].getAttribute('src');
        callback = callback.split('callback=')[1];
      }
    }
  }

  var grataDom,grataDoc,grataWhere,grataIframe = document.createElement('iframe');
  var grataDiv = document.createElement('div');

  /*if (callback == 839731165445 || callback == 6) {
    grataDiv.id = 'grataChatWrapper';
    parent.window.document.body.appendChild(grataDiv);
  }*/

  grataIframe.src = "javascript:false";
  grataIframe.id = 'iframeChat';
  (grataIframe.frameElement || grataIframe).style.cssText = "display:none;height:0;border: none; margin: 0; padding: 0;";

  /*if (callback == 839731165445 || callback == 6) {
    document.getElementById('grataWrapper').append(grataIframe);
  } else {*/
    parent.window.document.body.appendChild(grataIframe);
  //}

  try {
    grataDoc = grataIframe.contentWindow.document;
  } catch(e) {
    grataDom = document.domain;
    grataIframe.src = "javascript:var d=document.open();d.domain='"+grataDom+"';void(0);";
    grataDoc = grataIframe.contentWindow.document;
  }

  grataDoc.open()._l = function() {
    var grataHead = document.getElementById('iframeChat').contentWindow.document.getElementsByTagName('head')[0];
    var grataScript = document.createElement('script');
    var grataJq = document.createElement('script');
    var FApro = document.createElement('link');
    var lightFont = document.createElement('link');
    var solidFont = document.createElement('link');
    var duoFont = document.createElement('link');

    duoFont.rel = "icon";
    duoFont.as = "font";
    duoFont.href = "https://cdn.grata.cn/domestic/webfonts/fa-duotone-900.woff2";
    duoFont.type = "font/woff2";
    duoFont.crossOrigin = "anonymous";
    grataHead.appendChild(duoFont);

    solidFont.rel = "icon";
    solidFont.as = "font";
    solidFont.href = "https://cdn.grata.cn/domestic/webfonts/fa-solid-900.woff2";
    solidFont.type = "font/woff2";
    solidFont.crossOrigin = "anonymous";
    grataHead.appendChild(solidFont);

    lightFont.rel = "icon";
    lightFont.as = "font";
    lightFont.href = "https://cdn.grata.cn/domestic/webfonts/fa-light-300.woff2";
    lightFont.type = "font/woff2";
    lightFont.crossOrigin = "anonymous";
    grataHead.appendChild(lightFont);

    FApro.rel = "stylesheet";
    FApro.href = "https://cdn.grata.cn/domestic/js/allnew.min.css";//"https://cdntest.grata.cn/testwebchat/src/allnew.min.css";
    FApro.type = "text/css";
    FApro.media = "all";
    grataHead.appendChild(FApro);

    try{ 
            document.createEvent("TouchEvent");
            if (screen.availWidth > 700) {
            } else {
		var css = '.ui-loader {display: none !important;}',
                style = document.createElement('style');

                grataHead.appendChild(style);

                style.type = 'text/css';
                if (style.styleSheet){
                  style.styleSheet.cssText = css;
                } else {
                  style.appendChild(document.createTextNode(css));
                }

		var jQm = document.createElement('script');
		jQm.src = 'https://cdn.grata.cn/domestic/js/min/jquery.mobile-1.4.5.min.js';
		grataHead.appendChild(jQm);
                //return true;
            }
        }
        catch(e){ /*return false;*/ }

    grataScript.type = 'text/javascript';
    grataScript.src = url;
    grataScript.id = "helper";
    grataScript.name = "1";

    grataHead.appendChild(grataScript);


    grataScript.onload = function () {
      //console.log("Chatbox loaded");
      loadJQ();
    };

    function loadJQ() {
      grataJq.type = 'text/javascript';
      grataJq.src = 'https://cdn.grata.cn/vendor/js/min/jquery-1.10.2.min.js';
      grataJq.onload = function() {
        setTimeout(function() {initRequest()}, 1000);
      };
      grataHead.appendChild(grataJq);
    }

  function initRequest() {
    var grataS1 = document.createElement('script');
    var grataAccessCode = callback;
    var apiPrefix = "";
    var id = "";
    if (grataAccessCode == 205250481355 || grataAccessCode == 023258393135) {apiPrefix = "cd";}
    if (grataAccessCode == 986800640417) {apiPrefix = "lv";}
    if (grataAccessCode == 839731165445) {id = document.getElementsByClassName('grata-chat_launcher_desc_content')[0].id}
    if (grataAccessCode == 6) {apiPrefix = "";}

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4) {
        var data = JSON.parse(xmlhttp.responseText.trim());
        var theWidth = (screen.availWidth < 480) ? screen.availWidth - 54 : 480;
        (grataIframe.frameElement || grataIframe).style.cssText = "display:block;wmode: transparent; border: 0px; z-index: 9999999; position: fixed; height: 0px; width: " + theWidth + "px; right: 27px; bottom: 0px;right:20px;";
        var grataStr = JSON.stringify(data);
        grataAccessCode = JSON.stringify(grataAccessCode);
        grataS1.innerHTML = 'var grataCb = new Chatbox('+grataStr+', '+grataAccessCode+'); grataCb.init();';
	setTimeout(function() {
          grataHead.appendChild(grataS1);
	}, 1000);
      }
    };
  

    xmlhttp.open("GET", "https://" + apiPrefix + "api.guestops.com/organization/getWebchatOptions.jsn?access="+grataAccessCode+"&buttonId="+id, true);
    xmlhttp.send();
  }
}
  grataDoc.write('<body onload="document._l();">');
  grataDoc.close();
//Change url to load chat.js from localhost
})('https://cdn.grata.cn/domestic/js/js/chat-prod.js?version='+VERSION);
