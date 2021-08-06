function getSCookie(name) {
    var re = new RegExp('[; ]' + name + '=([^\\s;]*)'), matches = null;
    if (document.cookie.length > 0) {
        matches = document.cookie.match(re);
        if (matches && matches.length === 2) {
            return decodeURIComponent(matches[1]);
        }
    }
}
function glacier() {
    var result = {
        c: getSCookie('SID')
    };
    return result;
}
function getIdentifier(url) {
    var lle = 30307,
        prod = 30306,
        subdomain = url.split('.')[1],
        isProd = (subdomain !== 'ecnp');
    return (isProd) ? prod : lle;
}
(function () {
  var f = document,
    e = window,
    i = e.location.protocol,
    b = [
      [
        "src",
        [
          i === "https:" ? "https:/" : "http:/",
          "rail.bankofamerica.com",
          getIdentifier(e.location.host),
          "hover.js?dt=login&r=" + Math.random(),
        ].join("/"),
      ],
      ["type", "text/javascript"],
      ["async", true],
    ],
    c = f.createElement("script"),
    h = f.getElementsByTagName("head")[0];

  setTimeout(function () {
    var d = 0,
      l = b.length;
    for (; d < l; d++) {
      c.setAttribute(b[d][0], b[d][1]);
    }
    h.appendChild(c);
  }, 0);
})();
(function (d) {
  /*
   * Gets the document referral and append it's value as a hidden field in the homepage login form
   * @var {rf} referral field
   * @returns {hidden form field}
   */
  var arrayOfFormIds = [
    "signinInfo",
    "ah-secure-signin-container"
  ]
  var x;
  for (x in arrayOfFormIds) {
    var id = document.getElementById(arrayOfFormIds[x]);
    if (id != null) {
      var formId = arrayOfFormIds[x];
      var rf = d.createElement("input");
      rf.type = "hidden";
      rf.value = d.referrer;
      rf.name = "_dr";
      d.getElementById(formId).appendChild(rf);
    }
  }
})(document);

/*
 * Keystroke Dynamics
 * _.underscorejs enabled
 * nbk3vg0
 * 04/20/20
 */
if(typeof enableKeypress === 'boolean' && enableKeypress===true){
(function () {
    
  var id1 = document.getElementById('signinInfo');
  var id2 = document.getElementById('ah-secure-signin-container');
  
  if(id1!=null){                             //id for homepage   
   var signInFormId = "signinInfo";
   var inputFieldName = "onlineId1";
   var pwFieldName = "passcode1";
   }
   else if(id2!=null){                      //id for caw and oca widgets 
   var signInFormId =  "ah-secure-signin-container";
   var inputFieldName = "oid";
   var pwFieldName = "pass";
   }
   else{                                   //id not found
       console.log("form id not found");
       return;                               
   }

   var outputHiddenFieldName = "_kdthdbg";

   var keyMap = [];
   var inputf = document.getElementById(inputFieldName);
   var pwf = document.getElementById(pwFieldName);
   inputf.addEventListener("keydown", keydown, false);
   inputf.addEventListener("keyup", keyup, false);
   pwf.addEventListener("keydown", keydown, false);
   pwf.addEventListener("keyup", keyup, false);

   var hf = document.createElement("input");
   hf.type = "hidden";
   hf.name = outputHiddenFieldName;
   hf.id = outputHiddenFieldName;

   // todo: optimize selector use
   document.getElementById(signInFormId).appendChild(hf);

   function keydown(event) {
     var keycode = event.keyCode;
     var valid = (keycode > 47 && keycode < 58) || // number keys
       (keycode > 64 && keycode < 91) || // letter keys
       (keycode > 95 && keycode < 112);   // numpad keys

     if (
       keyMap.some(function (i) {
         i.pressed && i.key === event.key;
       })
     )
       return;

     if (valid && event.target.id === inputFieldName) {  //capture only alphanumeric key and ignore passcode field
       keyMap.push({
         pressed: true,
         down: Math.round(event.timeStamp),
         key: event.key,
       });
     }

   }

   function keyup(event) {
     var evt = keyMap.find(function (i) {
       return i.pressed && i.key === event.key;
     });

     if (!evt) return;

     _.extend(evt, {
       pressed: false,
       up: Math.round(event.timeStamp),
       dwell: Math.round(event.timeStamp - evt.down),
     });

     delete evt.pressed;
     delete evt.key;
     render();
   }

   function render() {
     // assign the payload to hidden field
     var payloadObj = JSON.stringify(keyMap);
     document.getElementById(outputHiddenFieldName).value = payloadObj;
   }

   render();
})();
};
