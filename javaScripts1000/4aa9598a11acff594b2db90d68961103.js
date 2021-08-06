sitesAbertos=false;
indiceAberto=false;
function exibeBusca() {
	document.getElementById("formBusca").style.display='none';
	document.getElementById("formBusca2").style.display='block';
}
function exibeSites() {
	if(!sitesAbertos){
		document.getElementById("sites").style.display='block';
		sitesAbertos=true;
	}
	else {
		document.getElementById("sites").style.display='none';
		sitesAbertos=false;
	}
}
function Abre(url)  {
	wnd = window.open(url, "SÃ³ MatemÃ¡tica", "width=500,height=400,,toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=0");
}
function verIndice(){
	if(!indiceAberto) { document.getElementById("indiceAtual").style.display='block'; indiceAberto=true;}
	else { document.getElementById("indiceAtual").style.display='none'; indiceAberto=false;}
};
