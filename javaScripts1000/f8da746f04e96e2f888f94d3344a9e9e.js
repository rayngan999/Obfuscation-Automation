(function() {
	var object = {
		0:{
			'date':new Date(2000, 12 - 1, 20, 00, 00, 00),
			'html':'',
		},
		1:{
			'date':new Date(2018, 10 - 1, 21, 00, 00, 00),
			'html':'<style type="text/css">#dummy_left{ float:left; margin:0 0 0 -200px; width:200px; height:800px; position:absolute; } #dummy_right{ float:right; margin:0 0 0 1320px; width:200px; height:800px; position:absolute; } body { background:url("http://jin115.com/adv/daikokai_1712x800_BgJack.jpg") no-repeat scroll center top #C9DCF2;}</style><div id="dummy_left"><a href="http://ccrt.biz/4yuGClcc" target="_blank"><img src="http://jin115.com/image/dummy.gif" border="0" width="200" height="800"></a></div><div id="dummy_right"><a href="http://ccrt.biz/4yuGClcc" target="_blank"><img src="http://jin115.com/image/dummy.gif" border="0" width="200" height="800"></a></div>',
		},
		2:{
			'date':new Date(2018, 11 - 1, 05, 00, 00, 00),
			'html':'',
		},
	}

	var now = new Date();
	var tmp_date = '';
	var tmp_html = '';

	for (var i in object){
		if(now >= object[i]['date']) {
			if(tmp_date == '' || object[i]['date'] >= tmp_date) {
				tmp_date = object[i]['date'];
				tmp_html = object[i]['html'];
			}
		}
	}
	document.write(tmp_html);
}());
