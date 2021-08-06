function openNav() {
	var slideNav = document.getElementById("sidenav-wrap");
	slideNav.classList.add("open");
	document.body.style.overflow = "hidden";	
}

function closeNav() {
	//e.stopPropagation();
  	var slideNav = document.getElementById("sidenav-wrap");
	slideNav.classList.remove("open");
	document.body.style.overflow = "auto";
}		

function tabs(e, cityName) {
  var i, tabcontent, tablinks, parentEle, tabContainer;
  //Selecting the clicked elements parent
  parentEle = e.parentNode;
  //Parent Wrapper
  tabContainer = e.parentNode.parentNode;
  tablinks = parentEle.children;
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  if (e.classList.contains('active')) {
    e.classList.remove('active');
  } else {
    e.classList.add('active');
  }

  /*Show Hide tabcontent which is direct descendant. Will not execute for inner tab structure*/
  tabcontent = Array.from(tabContainer.children).filter(function (x) {
    return x.matches('.tabcontent');
  });

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "block";
}

function searchBox() {
   var search = document.getElementById("mySEARCH");
   search.classList.toggle("active");
}

function socialShare(shareIcon) {
  document.querySelectorAll('.thumb-social').forEach((elem) => {
    if(shareIcon.previousElementSibling !== elem){
      elem.classList.remove('open')
    }
  });

  shareIcon.previousElementSibling.classList.toggle('open');

  /*if(shareIcon.previousElementSibling.classList.contains('open')){
      shareIcon.previousElementSibling.classList.remove('open');
  } else {
    shareIcon.previousElementSibling.classList.add('open');
  }*/
}

//Check if element exists in the page
function checkElement(element){
  return document.body.contains(document.getElementById(element))
}

if(checkElement('podcastSlider')){
  var podslide = new Glide('#podcastSlider',{
    type: "carousel",
    startAt: 0,
    perView: 2,
    rewind: false,
    gap: 20,
    autoplay: "10000",
  });
  
  podslide.mount()
}

if(checkElement('mainstoryslider')){
  window.addEventListener('load', ()=>{
    setTimeout(()=>{
      var topglide = new Glide('#mainstoryslider',{
        type: 'carousel',
        perView:1,
        startAt: 0,
        rewind:false,
        slidesToScroll: 1,
        autoplay: 5000,
        duration: 5000,
        animationDuration: 600,
        animationTimingFunc: 'linear',
      });
      
      topglide.mount()
    }, 3000)
  })
}

if(checkElement('crickettickerslider')){
  var crickglide = new Glide('#crickettickerslider',{
  type: 'slider',
  perView:1,
  startAt: 0,
  rewind:false,
  slidesToScroll: 1,
  autoplay: false,
  duration: 5000,
  animationDuration: 600,
  animationTimingFunc: 'linear',
  });
  
  crickglide.mount()
}

if(checkElement('videosslider')){
  var videoslide = new Glide('#videosslider',{
   type: "carousel",
   perView:3,
   startAt: 0,
   rewind:false,
   slidesToScroll: 1,
   autoplay: false,
   duration: 5000,
   animationDuration: 600,
   animationTimingFunc: 'linear',
   gap:20,
  });
  
  videoslide.mount()
}
if(checkElement('showtickerslider')){
  var showglide = new Glide('#showtickerslider',{
    type: 'carousel',
  perView:10,
  startAt: 0,
  rewind:false,
  slidesToScroll: 1,
  autoplay: false,
  duration: 5000,
  animationDuration: 600,
  animationTimingFunc: 'linear',
  });
  
  showglide.mount()
}

if(checkElement('logoGlide')){
  var logoglide = new Glide('#logoGlide', {
    type: 'carousel',
    autoplay: 3000,
    perView: 1
    })
    
    logoglide.mount();
}

if ($(".ajax_strip_widget").length > 0 ) {  
  getStripScoreData();      
  setInterval(function () {      
          getStripScoreData();      
  }, 30000);  
  function getStripScoreData(){  
      $.ajax({
          url: '/ajaxCalls/getScoreStripData',
          type: 'GET',
          data:{'matchID':"AllStrip"},          
          success:function(data){            
              $(".ajax_strip_widget").html(data);              
          }
      })
  }
}

if($('.t-out-span').length > 1){
  $('.covid-tooltip').on('mouseover', function(){
    $('.div-covid-tooltip').hide();
    $('.div-covid-tooltip').removeClass('extra-class');
    $(this).next('.div-covid-tooltip').toggleClass('extra-class');
    $(this).next('.div-covid-tooltip').toggle();
  });

  $('.div-covid-tooltip').on('click', function(){
    $(this).hide();
  });
}

$(document).on('click', function(e){
  
  if($('.div-covid-tooltip').hasClass('extra-class')){
    $('.div-covid-tooltip').hide()
  } 
})