(function (group) {
if (group == "") {
// Format: [ "groupName", lowerBounds, upperBounds ]
var groups = [ ["A",0,69], ["B",70,99]];
var rnd = BrightTag.Random.integer() % 100;
var g = groups.length; // always default to the Control
for (var i=0; i<=groups.length; i++) {
if (rnd>=groups[i][1] && rnd<=groups[i][2]) {
g = i;
break;
}
}
var date = new Date();
date.setTime(date.getTime()+(365*86400000));
var expires = date.toGMTString();
var cookieValue = "SignalSpring2016=" + groups[g][0] + ";path=/;expires=" + expires;
document.cookie = cookieValue;
//console.log(cookieValue);
}
}(bt_cookie("SignalSpring2016")))