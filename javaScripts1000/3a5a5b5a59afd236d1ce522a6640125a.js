$(document).ready(function(x){var whichInput=0;var output;var countSearch;$("#egp-canvas-search-input").on("change keyup paste",function(e){var searchLength=$("#egp-canvas-search-input").val().length;countSearch=$('.input').length;console.log("There are "+countSearch+" search suggestions");var keyCode=e.keyCode||e.which,arrow={left:37,up:38,right:39,down:40,enter:13};$(".input").removeClass("Keyboard-active");if(keyCode==37||keyCode==38||keyCode==39||keyCode==40||keyCode==13){console.log("Arrows Selection");switch(keyCode){case arrow.up:console.log("up");whichInput=(whichInput-1);if(whichInput<0)
{whichInput=0;}
if(whichInput==0)
{$("#egp-canvas-search-input").focus();}
if(whichInput>=1&&whichInput<=countSearch)
{output=$("#input"+whichInput).attr("data");$("#input"+whichInput).addClass("Keyboard-active");$("#whichInput").val(output);console.log("new idex is: "+whichInput+" selected value: "+output);}
break;case arrow.down:console.log("down");whichInput=(whichInput+1);if(whichInput>countSearch)
{whichInput=countSearch;}
if(whichInput>=1&&whichInput<=countSearch)
{output=$("#input"+whichInput).attr("data");$("#input"+whichInput).addClass("Keyboard-active");$("#whichInput").val(output);console.log("new idex is: "+whichInput+" selected value: "+output);}
break;console.log("final : "+whichInput);case arrow.right:if(whichInput>=1&&whichInput<=countSearch)
{console.log("right");$("#egp-canvas-search-input").val(output);whichInput=0;return false;}
break;case arrow.enter:if(whichInput>=1&&whichInput<=countSearch)
{console.log("right");$("#egp-canvas-search-input").val(output);whichInput=0;return false;}
break;}}
if(keyCode!=37&&keyCode!=38&&keyCode!=39&&keyCode!=40&&keyCode!=13){var autocomp=$(this).val();if(autocomp.length==0)
{$("#autocomplete, #autocomplete2").parent().hide();}
if(autocomp.length>2)
{$.ajax({url:"../ajax/ajax_autocomplete.php",type:"GET",data:"q="+autocomp,datatype:"json",cache:false,success:function(jsonData)
{var response=jQuery.parseJSON(jsonData);if(response!="")
{$("#autocomplete, #autocomplete2").empty();$("#autocount, #autocount2").empty();$("#autocomplete, #autocomplete2").parent().show();}
if(response=="")
{$("#autocomplete, #autocomplete2").parent().hide();}
var count=response[0].count;console.log("count is "+count);var searchQ=autocomp;searchQ=searchQ.trim();searchQ=searchQ.replace(/(<([^>]+)>)/ig,"");searchQ=searchQ.toLowerCase();searchQ=searchQ.replace(/\(|\)/g,"");searchQ=searchQ.split(' ').join('+');if(count>1)
{$("#autocount, #autocount2").append("<div class='autocount'><a href='/en/search?q="+searchQ+"'><i class='fa fa-search'></i> Search among "+count+" more results...</a></div>");}
var i=0;$.each(response,function(key,data)
{var test2=data.test;if(test2!=undefined)
{i++;var clean=test2;clean=clean.trim();clean=clean.replace(/(<([^>]+)>)/ig,"");clean=clean.toLowerCase();clean=clean.replace(/\(|\)/g,"");var searchData=clean;clean=clean.split(' ').join('+');$("#autocomplete, #autocomplete2").append("<div id='input"+i+"' class='autocomp input' data='"+searchData+"'><a  href='/en/search?q="+clean+"'>"+test2+"</a></div>");}});}});}}});});