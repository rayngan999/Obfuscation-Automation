var res = $(".drop");
$(".lang").on("click", funk);

$(document).click(function(e) {
  if ($(e.target).closest(res).length || $(e.target).closest('.lang').length) return;
  res.fadeOut(100);
  e.stopPropagation();
});

function funk(){
  if(res.css("display") == "none"){
    res.fadeIn(600);
  }
  else{
    res.fadeOut(100);
  }
}