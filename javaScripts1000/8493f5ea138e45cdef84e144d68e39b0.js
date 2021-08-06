// APAGA QUALQUER COOKIE COM : NO NOME. ESSE CARACTER INVÃLIDO QUEBRA O CLIENT
// DO .NET E IMPEDE A LEITURA DE QUALQUER COOKIE.
// SENDO REMOVIDO AQUI PORQUE ESSE SCRIPT ATUA TANTO NO PORTAL ANTIGO QUANTO
// NO NOVO.

(function (d, c) {
  var cookies = d.cookie.split('; ');

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].split('=');

    if (cookie[0].indexOf(':') !== -1) {
      d.cookie = cookie[0] + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      if (c && typeof(c.warn) === 'function') c.warn('Remove cookie invÃ¡lido: ' + cookie[0]);
    }
  }
})(document, console);

window.vtex = window.vtex || {};
vtex.analytics = vtex.analytics || {};

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
