var salWidget={options:{sal_url:"http://www.sal.pr/",widget_url:"https://d37uu5vx6wkhnq.cloudfront.net/external_widget/",key:"",showSearch:"1",loadCSS:"1",referer:"",target:"",callback:function(){}},show:function(config){for(var prop in this.options){if(prop in config){this.options[prop]=config[prop];}}
this.loadWidget(this.options.callback);},loadWidget:function(callback){var xmlhttp;if(window.XMLHttpRequest){xmlhttp=new XMLHttpRequest();}else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==4){if(xmlhttp.status==200){document.getElementById(salWidget.options.target).innerHTML=xmlhttp.responseText;callback();}else if(xmlhttp.status==400){document.getElementById(salWidget.options.target).innerHTML="<!-- Error loading Sal! widget. -->";}else{document.getElementById(salWidget.options.target).innerHTML="<!-- Error loading Sal! widget. -->";}}};xmlhttp.open("GET",this.options.widget_url+
"?loadCSS="+
this.options.loadCSS+
"&hiddenHtml=1&widget_key="+
this.options.key+
"&showSearch="+
this.options.showSearch+
"&referer="+
this.options.referer+
"&rand="+
Math.floor(Math.random()*128+1),true);xmlhttp.send();}};function salWidget_goSearch(){var searchButton=document.getElementById("salWidget_search");searchButton.href="#";var urlString=salWidget.options.sal_url+"restaurants/";var values={};values.tipo=document.getElementById("tipo_de_comida").value;values.sn=document.getElementById("sn").value;for(var prop in values){if(values[prop]=="0"){values[prop]="";}}
if(values.tipo!==""){urlString+=values.tipo+"/";}
if(values.sn!==""){urlString+=values.sn+"/";}
urlString+="?t=1&as=1&s=+&search=5";window.open(urlString);return false;}
function salWidget_defaultImg(event){var img=document.getElementById("img_thumb");img.src="https://d37uu5vx6wkhnq.cloudfront.net/widgets/assets/imgs/thumb-placeholder.png";img.width="130";}