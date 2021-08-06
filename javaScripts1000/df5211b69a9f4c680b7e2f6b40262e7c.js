// Checkbox checking/unchecking/inverting functions
function checkAll(id){
   var f = document.getElementById(id);
   var inputs = f.getElementsByTagName("input");
   for(var t = 0;t < inputs.length;t++){
     if(inputs[t].type == "checkbox")
       inputs[t].checked = true;
   }
 }
 function uncheckAll(id){
   var f = document.getElementById(id);
   var inputs = f.getElementsByTagName("input");
   for(var t = 0;t < inputs.length;t++){
     if(inputs[t].type == "checkbox")
       inputs[t].checked = false;
   }
 }
 function invertAll(id){
   var f = document.getElementById(id);
   var inputs = f.getElementsByTagName("input");
   for(var t = 0;t < inputs.length;t++){
     if(inputs[t].type == "checkbox")
       inputs[t].checked = !inputs[t].checked;
   }
 }
 
// Hide/Show Divs
function hideDiv(div) {
    if (!document.getElementById) return;
    obj = document.getElementById(div);
    obj.style.display="none";
}
function showDiv(div) {
    if (!document.getElementById) return;
    obj = document.getElementById(div);
    obj.style.display="block";
}

function showhide(id)
{
   if (document.getElementById){
	obj = document.getElementById(id);
	if (obj.style.display == "none"){
	    obj.style.display = "";
	} else {
	    obj.style.display = "none";
	}
   }
}

function del(msg)
{
   var tmp=confirm((msg) ? msg : "Do you really want to delete?");
   if(!tmp)
   return false;
   else
   return true;
}

function setSearchOptions(idElement, classname, field, option)
{
   tab = document.getElementById('tab'+idElement);
   search_option = document.getElementById(field);
   for (i=1; i<=6; i++){
      if (i == idElement){        
         tab.className = classname;        
         search_option.value = option;
      } 
      else {        
         document.getElementById('tab'+i).className = "";
      }
   }
}

function setDefaultThumb(id, total, classnameON, classnameOFF) {

   for (i=1; i<=total; i++)
   {
      if (i == id){        
         document.getElementById('thumb'+i).className = classnameON;        
         document.getElementById('default_thumb').value = i;
      } 
      else {        
         document.getElementById('thumb'+i).className = classnameOFF;
      }
   }
}

function setDefaultGalleryThumb(id, thumb, total, classnameON, classnameOFF) {

   for (i=1; i<=total; i++)
   {
      if (i == id){        
         document.getElementById('thumb'+i).className = classnameON;     
         document.getElementById('default_thumb').value = thumb;
      } 
      else {        
         document.getElementById('thumb'+i).className = classnameOFF;
      }
   }
}

function addBookmark(title,url){
if (window.sidebar) // firefox
	window.sidebar.addPanel(title, url, "");
else if(window.opera && window.print){ // opera
	var elem = document.createElement('a');
	elem.setAttribute('href',url);
	elem.setAttribute('title',title);
	elem.setAttribute('rel','sidebar');
	elem.click();
} 
else if(document.all)// ie
	window.external.AddFavorite(url, title);
}

function player_start(cache_id) 
{
	if (!play_count)
	{		
		viewsCounterCallback = xajax.callback.create();
		viewsCounterCallback.onComplete = function(oRequest) {			
			if (CallbackArgs.play) {play_count++;}			
			CallbackArgs = {};
		}
		
		viewsCounterCallback.onFailure = function(oRequest) {
			$f().stop();			
			CallbackArgs = {};
		}

		xajax.call('video_views_counter', {callback: viewsCounterCallback, parameters: [cache_id]} );
	}
}