gapi.loaded_2(function(_){var window=this;
_.O.MC("bubble",function(a){(0,_.vg)("iframes-styles-bubble",a)});

_.O.MC("slide-menu",function(a){(0,_.vg)("iframes-styles-slide-menu",a)});

_.B("gapi.plusone.render",_.N1);_.B("gapi.plusone.go",_.O1);

var P1={tall:{"true":{width:50,height:60},"false":{width:50,height:24}},small:{"false":{width:24,height:15},"true":{width:70,height:15}},medium:{"false":{width:32,height:20},"true":{width:90,height:20}},standard:{"false":{width:38,height:24},"true":{width:106,height:24}}},Q1={width:180,height:35},R1=function(a){return"string"==typeof a?""!=a&&"0"!=a&&"false"!=a.toLowerCase():!!a},S1=function(a){var b=parseInt(a,10);if(b==a)return String(b)},T1=function(a){if(R1(a))return"true"},U1=function(a){return"string"==
typeof a&&P1[a.toLowerCase()]?a.toLowerCase():"standard"},V1=function(a,b){return"tall"==U1(b)?"true":null==a||R1(a)?"true":"false"},W1=function(a,b){return P1[U1(a)][V1(b,a)]},X1=function(a,b,c){a=_.Rp(a);b=U1(b);if(""!=a){if("inline"==a||"only"==a)return a=450,c.width&&(a=120<c.width?c.width:120),{width:a,height:P1[b]["false"].height};if("bubble"!=a){if("none"==a)return P1[b]["false"];if("pp"==a)return Q1}}return P1[b]["true"]},Y1={href:[_.Un,"url"],width:[S1],size:[U1],resize:[T1],autosize:[T1],
count:[function(a,b){return V1(b.count,b.size)}],db:[_.Vn],ecp:[_.Wn],textcolor:[function(a){if("string"==typeof a&&a.match(/^[0-9A-F]{6}$/i))return a}],drm:[T1],recommendations:[],fu:[],ad:[T1],cr:[S1],ag:[S1],"fr-ai":[],"fr-sigh":[]};
(function(){var a={0:"plusone"},b=_.V("iframes/plusone/preloadUrl");b&&(a[7]=b);_.Tp(Y1);a[1]=Y1;a[2]={width:[function(c,d){return d.annotation?X1(d.annotation,d.size,d).width:W1(d.size,d.count).width}],height:[function(c,d){return d.annotation?X1(d.annotation,d.size,d).height:W1(d.size,d.count).height}]};a[3]={onPlusOne:{Nw:function(c){return"on"==c.state?"+1":null},UD:"callback"},onstartinteraction:!0,onendinteraction:!0,onpopup:!0};a[4]=["div","button"];a=_.Mp(a);_.O1=a.go;_.N1=a.ta})();

});
// Google Inc.
