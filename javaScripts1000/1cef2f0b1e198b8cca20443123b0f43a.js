<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="robots" content="noindex,nofollow" />

<title>Tra cá»©u giÃ¡ xe</title>
<script type="text/javascript" src="https://giaxe.2banh.vn/style/frontend/js/jquery.min.js"></script>

<link href="https://giaxe.2banh.vn/style/frontend/css/widget-search.css" rel="stylesheet" type="text/css" />

</head>

<body>
<div class="search_price">
	<h3>Tra cá»©u giÃ¡ xe</h3>
	<div class="content_wrp_sp">
		<form action="https://giaxe.2banh.vn/tim-kiem.html" method="post" id="filter_form" target="_blank">
                <div class="row_item">
                    <div class="select_item item01" style="display: none;">
                    <select name="search-price">
					                    <option value="0" selected="selected">Táº¥t cáº£ cÃ¡c má»©c giÃ¡</option>
					                    <option value="1">DÆ°á»i 15 triá»u</option>
					                    <option value="2">Tá»« 15 triá»u Äáº¿n 20 triá»u</option>
					                    <option value="3">Tá»« 20 triá»u Äáº¿n 30 triá»u</option>
					                    <option value="4">Tá»« 30 triá»u Äáº¿n 50 triá»u</option>
					                    <option value="5">Tá»« 80 triá»u Äáº¿n 120 triá»u</option>
					                    <option value="6">TrÃªn 120 triá»u</option>
					                    </select>
                    </div>
                    <div class="select_item item02" style="display: none;">
                    <select name="search-cate">
                    <option selected="selected" value="0">Chá»n dÃ²ng xe</option>
					
													 <option value="1">Xe tay ga</option>
									 <option value="2">Xe sá»</option>
									 <option value="3">Xe cÃ´n tay</option>
									 <option value="4">Xe phÃ¢n khá»i lá»n</option>
														 
									 
					                    </select>
                    </div>
                    <div class="select_item item01">
                    <select name="search-man" class="sel_man_top">
                    <option selected="selected" value="0">Chá»n hÃ£ng</option>
																	<option value="1">Honda</option>
											<option value="2">Yamaha</option>
											<option value="3">Suzuki</option>
											<option value="4">Piaggio</option>
											<option value="5">Sym</option>
											<option value="15">Kymco</option>
											<option value="8">Kawasaki</option>
											<option value="10">Ducati</option>
											<option value="9">KTM</option>
											<option value="11">Triumph</option>
											<option value="13">Harley Davidson</option>
											<option value="14">Benelli</option>
											<option value="16">Brixton</option>
											<option value="18">GPX</option>
											<option value="20">VinFast</option>
											<option value="12">BMW</option>
											<option value="17">Peugeot</option>
											<option value="19">Royal Enfield</option>
										                    </select>
                    </div>
                    <div class="select_item item02">
                    <select name="search-type" class="sel_type_top">
                    <option selected="selected" value="0">Chá»n loáº¡i xe</option>
                    <option value="0">Chá»n hÃ£ng trÆ°á»c</option>
                    </select>
                    </div>
                    <div class="submit_item"><input id="submitfilter" class="submit_filter" value="TÃ¬m kiáº¿m" name="submit" type="submit"></div>
            	</div>
                </form>
		</div>
</div>
</body>
</html>
<script type="text/javascript" charset="utf-8">
			document.getElementById("submitfilter").onclick = function(e) {
		    $.get("http://linktrack.info/giaxe-timkiem");
		    //e.preventDefault();
		};
		
	$(function(){
		var types= new Array();

	
	types[1]  = '[{"optionValue":"404","optionDisplay":"ADV 150"},{"optionValue":"5","optionDisplay":"Air Blade 125"},{"optionValue":"423","optionDisplay":"Air Blade 150"},{"optionValue":"392","optionDisplay":"BeAT 110"},{"optionValue":"94","optionDisplay":"Blade 110"},{"optionValue":"281","optionDisplay":"CB Hornet 160R"},{"optionValue":"349","optionDisplay":"CB1000R"},{"optionValue":"403","optionDisplay":"CB1000R Limited Edition"},{"optionValue":"275","optionDisplay":"CB1100 EX "},{"optionValue":"277","optionDisplay":"CB150"},{"optionValue":"391","optionDisplay":"CB150R Exmotion"},{"optionValue":"394","optionDisplay":"CB150R StreetFire"},{"optionValue":"405","optionDisplay":"CB300R"},{"optionValue":"345","optionDisplay":"CB500"},{"optionValue":"348","optionDisplay":"CB650F"},{"optionValue":"378","optionDisplay":"CB650R"},{"optionValue":"315","optionDisplay":"CBF125R 2018"},{"optionValue":"105","optionDisplay":"CBR 600RR"},{"optionValue":"351","optionDisplay":"CBR1000RR Fireblade"},{"optionValue":"422","optionDisplay":"CBR1000RR-R"},{"optionValue":"276","optionDisplay":"CBR150"},{"optionValue":"282","optionDisplay":"CBR250RR"},{"optionValue":"382","optionDisplay":"CBR500R"},{"optionValue":"347","optionDisplay":"CBR650F"},{"optionValue":"383","optionDisplay":"CBR650R"},{"optionValue":"343","optionDisplay":"Click 150"},{"optionValue":"455","optionDisplay":"CT125 2021"},{"optionValue":"428","optionDisplay":"Dio 110"},{"optionValue":"15","optionDisplay":"Dream"},{"optionValue":"284","optionDisplay":"Dunk"},{"optionValue":"430","optionDisplay":"Forza 300"},{"optionValue":"443","optionDisplay":"Forza 350"},{"optionValue":"367","optionDisplay":"Fury 1300"},{"optionValue":"8","optionDisplay":"Future 125"},{"optionValue":"414","optionDisplay":"Genio 110"},{"optionValue":"340","optionDisplay":"Giorno"},{"optionValue":"352","optionDisplay":"Goldwing"},{"optionValue":"6","optionDisplay":"Lead 125"},{"optionValue":"371","optionDisplay":"Monkey 125"},{"optionValue":"336","optionDisplay":"Moove"},{"optionValue":"93","optionDisplay":"MSX125"},{"optionValue":"3","optionDisplay":"PCX"},{"optionValue":"441","optionDisplay":"PCX 2021"},{"optionValue":"365","optionDisplay":"PCX Hybrid"},{"optionValue":"364","optionDisplay":"Rebel 250"},{"optionValue":"236","optionDisplay":"Rebel 300"},{"optionValue":"318","optionDisplay":"Rebel 500"},{"optionValue":"329","optionDisplay":"Scoopy"},{"optionValue":"1","optionDisplay":"SH"},{"optionValue":"2","optionDisplay":"SH Mode"},{"optionValue":"143","optionDisplay":"SH300i"},{"optionValue":"442","optionDisplay":"SH350i"},{"optionValue":"366","optionDisplay":"Shadow Phantom 750"},{"optionValue":"278","optionDisplay":"Sonic 150R"},{"optionValue":"374","optionDisplay":"Super Cub C125"},{"optionValue":"299","optionDisplay":"Today 50cc"},{"optionValue":"341","optionDisplay":"Vario"},{"optionValue":"211","optionDisplay":"Vision"},{"optionValue":"11","optionDisplay":"Wave 110"},{"optionValue":"14","optionDisplay":"Wave Alpha"},{"optionValue":"189","optionDisplay":"Winner 150"},{"optionValue":"398","optionDisplay":"Winner X"},{"optionValue":"457","optionDisplay":"X-ADV 750"}]';types[2]  = '[{"optionValue":"150","optionDisplay":"Acruzo"},{"optionValue":"22","optionDisplay":"Cuxi Fi"},{"optionValue":"20","optionDisplay":"Exciter 135"},{"optionValue":"160","optionDisplay":"Exciter 150"},{"optionValue":"400","optionDisplay":"Exciter 155"},{"optionValue":"393","optionDisplay":"FreeGo 125"},{"optionValue":"85","optionDisplay":"FZ150i"},{"optionValue":"288","optionDisplay":"FZ155i VVA"},{"optionValue":"317","optionDisplay":"FZ25"},{"optionValue":"225","optionDisplay":"Grande"},{"optionValue":"206","optionDisplay":"Janus"},{"optionValue":"76","optionDisplay":"Jupiter"},{"optionValue":"397","optionDisplay":"Latte 125"},{"optionValue":"27","optionDisplay":"Lexam"},{"optionValue":"16","optionDisplay":"Luvias"},{"optionValue":"81","optionDisplay":"Mio"},{"optionValue":"237","optionDisplay":"MT-03"},{"optionValue":"456","optionDisplay":"MT-07"},{"optionValue":"310","optionDisplay":"MT-09"},{"optionValue":"384","optionDisplay":"MT-15"},{"optionValue":"432","optionDisplay":"MT-25"},{"optionValue":"145","optionDisplay":"NM-X"},{"optionValue":"34","optionDisplay":"Nouvo"},{"optionValue":"28","optionDisplay":"Nozza"},{"optionValue":"212","optionDisplay":"NVX"},{"optionValue":"437","optionDisplay":"NVX 2021"},{"optionValue":"415","optionDisplay":"R1 2020"},{"optionValue":"235","optionDisplay":"R15"},{"optionValue":"369","optionDisplay":"R3"},{"optionValue":"144","optionDisplay":"R3"},{"optionValue":"424","optionDisplay":"R6 2020"},{"optionValue":"448","optionDisplay":"R7 2021"},{"optionValue":"30","optionDisplay":"Sirius "},{"optionValue":"86","optionDisplay":"Sirius RC FI 2014"},{"optionValue":"24","optionDisplay":"Sirius RL"},{"optionValue":"29","optionDisplay":"Taurus"},{"optionValue":"209","optionDisplay":"TFX150"},{"optionValue":"440","optionDisplay":"TMax 560"},{"optionValue":"453","optionDisplay":"Vinoora 125"},{"optionValue":"449","optionDisplay":"XSR 125"},{"optionValue":"411","optionDisplay":"XSR155"},{"optionValue":"379","optionDisplay":"XSR900"}]';types[3]  = '[{"optionValue":"175","optionDisplay":"Address 110"},{"optionValue":"43","optionDisplay":"Axelo 125"},{"optionValue":"17","optionDisplay":"Axelo 125 c\u00f4n tay "},{"optionValue":"446","optionDisplay":"Burgman Street 125"},{"optionValue":"35","optionDisplay":"En 150"},{"optionValue":"79","optionDisplay":"En150-A"},{"optionValue":"18","optionDisplay":"Ez 150"},{"optionValue":"234","optionDisplay":"GD110"},{"optionValue":"75","optionDisplay":"Gladius 650"},{"optionValue":"363","optionDisplay":"GSX-150 Bandit"},{"optionValue":"232","optionDisplay":"GSX-R150 "},{"optionValue":"233","optionDisplay":"GSX-S150"},{"optionValue":"78","optionDisplay":"Gz-150A"},{"optionValue":"74","optionDisplay":"Hayabusa 1300"},{"optionValue":"458","optionDisplay":"Hayabusa 2021"},{"optionValue":"39","optionDisplay":"Hayate 125"},{"optionValue":"90","optionDisplay":"Impulse 125"},{"optionValue":"433","optionDisplay":"Intruder 150"},{"optionValue":"84","optionDisplay":"Raider 150"},{"optionValue":"45","optionDisplay":"Revo 110"},{"optionValue":"373","optionDisplay":"Satria F150"},{"optionValue":"41","optionDisplay":"Skydrive"},{"optionValue":"171","optionDisplay":"Suzuki GSX-S1000 "},{"optionValue":"40","optionDisplay":"Ua 125"},{"optionValue":"454","optionDisplay":"V-Strom 1050"},{"optionValue":"42","optionDisplay":"Viva 115"},{"optionValue":"44","optionDisplay":"Xbike 125"}]';types[4]  = '[{"optionValue":"56","optionDisplay":"Beverly"},{"optionValue":"58","optionDisplay":"Fly"},{"optionValue":"283","optionDisplay":"Guzzi V9 Roamer"},{"optionValue":"151","optionDisplay":"Liberty"},{"optionValue":"57","optionDisplay":"Liberty 3V i.e"},{"optionValue":"425","optionDisplay":"Liberty 50"},{"optionValue":"399","optionDisplay":"Liberty One"},{"optionValue":"187","optionDisplay":"Medley"},{"optionValue":"203","optionDisplay":"Medley S 150"},{"optionValue":"300","optionDisplay":"Vespa 946"},{"optionValue":"434","optionDisplay":"Vespa GTS 150 Racing Sixties"},{"optionValue":"268","optionDisplay":"Vespa GTS Super"},{"optionValue":"48","optionDisplay":"Vespa LT 125  3V i.e"},{"optionValue":"50","optionDisplay":"Vespa LX"},{"optionValue":"52","optionDisplay":"Vespa LXV"},{"optionValue":"83","optionDisplay":"Vespa Primavera"},{"optionValue":"55","optionDisplay":"Vespa PX"},{"optionValue":"53","optionDisplay":"Vespa S"},{"optionValue":"51","optionDisplay":"Vespa S 150 3V i.e"},{"optionValue":"358","optionDisplay":"Vespa Sei Giorni"},{"optionValue":"89","optionDisplay":"Vespa Sprint"},{"optionValue":"435","optionDisplay":"Vespa Sprint 150 Racing Sixties"},{"optionValue":"80","optionDisplay":"Zip"}]';types[5]  = '[{"optionValue":"357","optionDisplay":"Abela 110"},{"optionValue":"245","optionDisplay":"Amigo 50"},{"optionValue":"68","optionDisplay":"Angela "},{"optionValue":"73","optionDisplay":"Attila"},{"optionValue":"69","optionDisplay":"Elegant"},{"optionValue":"246","optionDisplay":"ELITE 50"},{"optionValue":"66","optionDisplay":"Elizabeth "},{"optionValue":"326","optionDisplay":"Fancy 125"},{"optionValue":"71","optionDisplay":"Galaxy 110"},{"optionValue":"130","optionDisplay":"Galaxy Sport"},{"optionValue":"324","optionDisplay":"Husky 125"},{"optionValue":"64","optionDisplay":"Joyride"},{"optionValue":"82","optionDisplay":"Passing"},{"optionValue":"60","optionDisplay":"Shark"},{"optionValue":"285","optionDisplay":"Star SR 125"},{"optionValue":"381","optionDisplay":"Star SR 170"},{"optionValue":"247","optionDisplay":"Venus"},{"optionValue":"356","optionDisplay":"VF3i"}]';types[15]  = '[{"optionValue":"323","optionDisplay":"AK 550"},{"optionValue":"198","optionDisplay":"Candy Hi 50cc"},{"optionValue":"197","optionDisplay":"Candy S 50cc"},{"optionValue":"201","optionDisplay":"Jockey 125cc "},{"optionValue":"190","optionDisplay":"K-Pipe 125"},{"optionValue":"361","optionDisplay":"K-Pipe 50"},{"optionValue":"377","optionDisplay":"Like 125 ABS"},{"optionValue":"199","optionDisplay":"Like 125cc"},{"optionValue":"200","optionDisplay":"Like 50"},{"optionValue":"353","optionDisplay":"Many 110 EV"},{"optionValue":"195","optionDisplay":"Many 125cc"},{"optionValue":"196","optionDisplay":"Many 50cc"},{"optionValue":"192","optionDisplay":"People 125"},{"optionValue":"360","optionDisplay":"Visar 50"}]';types[8]  = '[{"optionValue":"173","optionDisplay":"ER-6N"},{"optionValue":"120","optionDisplay":"H2"},{"optionValue":"390","optionDisplay":"H2 SX SE"},{"optionValue":"350","optionDisplay":"Ninja 250"},{"optionValue":"129","optionDisplay":"Ninja 300"},{"optionValue":"319","optionDisplay":"Ninja 400"},{"optionValue":"280","optionDisplay":"Ninja 650"},{"optionValue":"111","optionDisplay":"Ninja ZX-10R "},{"optionValue":"419","optionDisplay":"Ninja ZX-25R"},{"optionValue":"402","optionDisplay":"Ninja ZX-6R"},{"optionValue":"241","optionDisplay":"Versys 1000 ABS"},{"optionValue":"240","optionDisplay":"Versys 650 ABS"},{"optionValue":"385","optionDisplay":"Versys X300"},{"optionValue":"368","optionDisplay":"Vulcan 900 Custom"},{"optionValue":"387","optionDisplay":"Vulcan Cafe ABS"},{"optionValue":"243","optionDisplay":"Vulcan S ABS"},{"optionValue":"322","optionDisplay":"W175"},{"optionValue":"289","optionDisplay":"Z1000"},{"optionValue":"242","optionDisplay":"Z1000R"},{"optionValue":"388","optionDisplay":"Z1000SX"},{"optionValue":"274","optionDisplay":"z125 pro "},{"optionValue":"170","optionDisplay":"Z300"},{"optionValue":"421","optionDisplay":"Z400"},{"optionValue":"238","optionDisplay":"Z650 ABS"},{"optionValue":"121","optionDisplay":"Z800"},{"optionValue":"239","optionDisplay":"Z900 ABS"},{"optionValue":"386","optionDisplay":"Z900 RS"},{"optionValue":"301","optionDisplay":"ZX-10R 2018"}]';types[10]  = '[{"optionValue":"123","optionDisplay":"1199 panigale"},{"optionValue":"265","optionDisplay":"1299 Panigale"},{"optionValue":"122","optionDisplay":"899 panigale"},{"optionValue":"264","optionDisplay":"959 Panigale"},{"optionValue":"407","optionDisplay":"959 Panigale Corse"},{"optionValue":"416","optionDisplay":"Diavel 1260"},{"optionValue":"263","optionDisplay":"Hypermotard 939"},{"optionValue":"262","optionDisplay":"Hypermotard 939 SP"},{"optionValue":"450","optionDisplay":"Hypermotard 950 RVE"},{"optionValue":"452","optionDisplay":"Monster 2021"},{"optionValue":"102","optionDisplay":"Monster 795"},{"optionValue":"260","optionDisplay":"Monster 797"},{"optionValue":"261","optionDisplay":"Monster 821"},{"optionValue":"408","optionDisplay":"Multistrada 1260 Enduro"},{"optionValue":"355","optionDisplay":"Panigale V4 S "},{"optionValue":"359","optionDisplay":"Scrambler 1100"},{"optionValue":"266","optionDisplay":"Scrambler Cafe Racer"},{"optionValue":"267","optionDisplay":"Scrambler Desert Sled"},{"optionValue":"269","optionDisplay":"Scrambler Sixty2"},{"optionValue":"427","optionDisplay":"Streetfighter V4"},{"optionValue":"286","optionDisplay":"SuperSport"},{"optionValue":"272","optionDisplay":"XDiavel S "}]';types[9]  = '[{"optionValue":"258","optionDisplay":"1050 Adventure"},{"optionValue":"259","optionDisplay":"1190 Adventure"},{"optionValue":"108","optionDisplay":"1190 RC8R"},{"optionValue":"184","optionDisplay":"1290 Super Adventure "},{"optionValue":"178","optionDisplay":"1290 Super Duke R"},{"optionValue":"438","optionDisplay":"390 Duke Adventure"},{"optionValue":"429","optionDisplay":"790 Duke"},{"optionValue":"445","optionDisplay":"890 Duke"},{"optionValue":"104","optionDisplay":"Duke 200"},{"optionValue":"183","optionDisplay":"Duke 250"},{"optionValue":"313","optionDisplay":"Duke 390"},{"optionValue":"182","optionDisplay":"Duke 690"},{"optionValue":"174","optionDisplay":"RC 200"},{"optionValue":"176","optionDisplay":"RC 250"},{"optionValue":"177","optionDisplay":"RC 390"}]';types[11]  = '[{"optionValue":"271","optionDisplay":"Bonneville Bobber 2017"},{"optionValue":"273","optionDisplay":"Bonneville T120"},{"optionValue":"396","optionDisplay":"Scrambler 1200"},{"optionValue":"304","optionDisplay":"Street Triple RS "},{"optionValue":"395","optionDisplay":"Tiger 800"},{"optionValue":"344","optionDisplay":"Tiger 800 XCA"},{"optionValue":"451","optionDisplay":"Tiger 900"},{"optionValue":"305","optionDisplay":"Tiger Explorer XCx"},{"optionValue":"439","optionDisplay":"Trident 660"},{"optionValue":"292","optionDisplay":"Triumph Street Cup"},{"optionValue":"287","optionDisplay":"Triumph Street Scrambler"},{"optionValue":"291","optionDisplay":"Triumph Street Twin"}]';types[13]  = '[{"optionValue":"303","optionDisplay":"Breakout 114"},{"optionValue":"298","optionDisplay":"CVO Street Glide"},{"optionValue":"306","optionDisplay":"Fat Bob 114"},{"optionValue":"307","optionDisplay":"Fat Boy 114"},{"optionValue":"295","optionDisplay":"Iron 883 "},{"optionValue":"447","optionDisplay":"Pan America 1250"},{"optionValue":"297","optionDisplay":"Roadster"},{"optionValue":"296","optionDisplay":"Softail Slim S"},{"optionValue":"293","optionDisplay":"Street 750"},{"optionValue":"294","optionDisplay":"Street Rod 750"},{"optionValue":"114","optionDisplay":"V-Rod Muscle"},{"optionValue":"113","optionDisplay":"XL 1200X Fotry - Eight"}]';types[14]  = '[{"optionValue":"250","optionDisplay":"302R"},{"optionValue":"389","optionDisplay":"302S"},{"optionValue":"406","optionDisplay":"502C"},{"optionValue":"370","optionDisplay":"752S"},{"optionValue":"254","optionDisplay":"BN 251"},{"optionValue":"109","optionDisplay":"BN 302"},{"optionValue":"110","optionDisplay":"BN 600i"},{"optionValue":"327","optionDisplay":"Leoncino 500 "},{"optionValue":"228","optionDisplay":"RFS 150"},{"optionValue":"219","optionDisplay":"TNT 125"},{"optionValue":"255","optionDisplay":"TNT 175"},{"optionValue":"253","optionDisplay":"TNT 600GT"},{"optionValue":"252","optionDisplay":"TNT R160"},{"optionValue":"256","optionDisplay":"TNT15"},{"optionValue":"251","optionDisplay":"TRK 502 "},{"optionValue":"417","optionDisplay":"VZ125i"}]';types[16]  = '[{"optionValue":"230","optionDisplay":"BX 125"},{"optionValue":"231","optionDisplay":"BX 150"},{"optionValue":"314","optionDisplay":"BX 150 Limited Edition "}]';types[18]  = '[{"optionValue":"331","optionDisplay":"Demon 150 GN"},{"optionValue":"330","optionDisplay":"Demon 150 GR"},{"optionValue":"334","optionDisplay":"Demon X 125"},{"optionValue":"333","optionDisplay":"Legend 150s"},{"optionValue":"335","optionDisplay":"Legend 200"},{"optionValue":"332","optionDisplay":"Legend Gentleman 200"},{"optionValue":"380","optionDisplay":"Razer 220"}]';types[20]  = '[{"optionValue":"375","optionDisplay":"Klara"}]';types[12]  = '[{"optionValue":"126","optionDisplay":"BMW R nine T"},{"optionValue":"410","optionDisplay":"C 400 GT"},{"optionValue":"409","optionDisplay":"C 400 X"},{"optionValue":"413","optionDisplay":"F 850 GS"},{"optionValue":"431","optionDisplay":"F 900 XR"},{"optionValue":"128","optionDisplay":"F800GS "},{"optionValue":"312","optionDisplay":"F800R"},{"optionValue":"337","optionDisplay":"G310GS"},{"optionValue":"308","optionDisplay":"G310R"},{"optionValue":"362","optionDisplay":"K1600B"},{"optionValue":"412","optionDisplay":"R 1250 GS"},{"optionValue":"444","optionDisplay":"R 18"},{"optionValue":"436","optionDisplay":"R NineT 2021"},{"optionValue":"279","optionDisplay":"R nineT Racer"},{"optionValue":"316","optionDisplay":"R NineT Scrambler"},{"optionValue":"311","optionDisplay":"R1200GS"},{"optionValue":"302","optionDisplay":"R1200R 2018"},{"optionValue":"309","optionDisplay":"R1200RS"},{"optionValue":"125","optionDisplay":"S1000R"},{"optionValue":"124","optionDisplay":"S1000RR"},{"optionValue":"418","optionDisplay":"S1000XR"}]';types[17]  = '[{"optionValue":"321","optionDisplay":"Citystar 125 RS"},{"optionValue":"320","optionDisplay":"Django 125"},{"optionValue":"328","optionDisplay":"Satelis RS400 "}]';types[19]  = '[{"optionValue":"338","optionDisplay":"Bullet 500"},{"optionValue":"342","optionDisplay":"Classic 500"},{"optionValue":"339","optionDisplay":"Continental GT"}]';	 

var fman = 0;
  $("select.sel_man_top").change(function(){
  if($(this).val() ==0 && fman <=0){
		return ;
	}
	if($(this).val() >0)
		fman = $(this).val();
	var j = jQuery.parseJSON(types[fman]);
      var options = '';
	  var fsearch = 0;
	  options += '<option value="0"> Chá»n dÃ²ng xe</option>';
      for (var i = 0; i < j.length; i++) {
         if(j[i].optionValue ==fsearch) 
			options += '<option value="' + j[i].optionValue + '" selected="selected">' + j[i].optionDisplay + '</option>';
		else 
			options += '<option value="' + j[i].optionValue + '">' + j[i].optionDisplay + '</option>';
      }
      $("select.sel_type_top").html(options);
  });
  if(fman >0)
	$(".sel_man_top").trigger('change');
	
  
  
	
})
</script>