function addCommas(nStr,commas) {
    if (commas==null) commas=",";
	nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + commas + '$2');
    }
    return x1 + x2;
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function getDocumentHeight(){
 return Math.max(
        document.documentElement.clientHeight,
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight
    );
}
