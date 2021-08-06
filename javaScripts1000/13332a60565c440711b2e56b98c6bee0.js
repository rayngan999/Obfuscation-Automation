/* eslint no-var:0, func-names:0, vars-on-top:0 */

var map = typeof Map !== "undefined";
var set = typeof Set !== "undefined";
var supported = map && set;
var message = document.getElementById("browser-detect-message");
if (supported) {
  message.parentNode.removeChild(message);
} else {
  var clone = message.cloneNode(true);
  document.body.innerHTML = "";
  document.body.appendChild(clone);
  clone.style.display = "block";
}
