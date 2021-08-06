<!doctype html>
<html lang="pt-br" class="nav-no-js">
<head>
<title>SÃ³ Biologia - Portal de Biologia e CiÃªncias</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<meta property="og:site_name" content="SÃ³ Biologia" />
<meta property="og:title" content="SÃ³ Biologia - Portal de Biologia e CiÃªncias" />
<meta property="og:description" content="Portal educativo com materiais de CiÃªncias e Biologia, exercÃ­cios, provas on-line, jogos, curiosidades, notÃ­cias, glossÃ¡rio e muito mais." />
<meta property="og:url" content="http://www.sobiologia.com.br/" />
<meta property="og:type" content="website" />
<!-- <meta property="og:image" content="https://sobiologia.com.br/imagens/tags/material.jpg" /> -->

<meta name="description" content="Portal educativo com materiais de CiÃªncias e Biologia, exercÃ­cios, provas on-line, jogos, curiosidades, notÃ­cias, glossÃ¡rio e muito mais.">

    <link rel="stylesheet" href="/cssjs/normalize.min.css">
    <link rel="stylesheet" href="/cssjs/rslider/responsiveslides.css">    
    <link rel="stylesheet" href="/cssjs/estilosHome.css">
    <link rel="stylesheet" href="/cssjs/estilos.css">
	<link rel="stylesheet" href="/cssjs/fonts/styles.css">
       
    <!--[if lt IE 9]>
    <link rel="stylesheet" href=/cssjs/ie8-core.min.css">
    <link rel="stylesheet" href="/cssjs/ie8-layout.min.css">
    <script src="/cssjs/html5shiv.min.js"></script>
    <![endif]-->
    
	<script src="/cssjs/jquery.min.js"></script>    
    <script src="/cssjs/rslider/responsiveslides.min.js"></script> 
    <script src="/cssjs/funcoes.js"></script>
    
<script>
  $(function() {
    $("#slides1").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  pager: false,           // Boolean: Show pager, true or false
  nav: true,             // Boolean: Show navigation, true or false
  maxwidth: "640"           // Integer: Max-width of the slideshow, in pixels
});
  });
</script>

<!-- DFP -->
<script async='async' src='https://www.googletagservices.com/tag/js/gpt.js'></script>
<script>
  var googletag = googletag || {};
  googletag.cmd = googletag.cmd || [];
</script>

<script>
  googletag.cmd.push(function() {
	  
	// cabeÃ§alho
	var mapeamento1 = googletag.sizeMapping().
	  addSize([970, 200], [970, 250]).
	  addSize([0, 0], [300, 250]).
	  build();

	// lateral
	var mapeamento2 = googletag.sizeMapping().
	  addSize([970, 200], [300, 600]).
	  addSize([468, 300], [160, 600]).
	  addSize([0, 0], []).
	  build();
  
	// GPT slots
	 var gptAdSlots = [];
	  
    gptAdSlots[0] = googletag.defineSlot('/21611696256/970x250_Sobiologia', [300, 250], 'div-gpt-ad-1519662696300-0').defineSizeMapping(mapeamento1).addService(googletag.pubads());
	gptAdSlots[1] = googletag.defineSlot('/21611696256/300x600_Sobiologia', [[300, 600], [160, 600]], 'div-gpt-ad-1519677249029-0').defineSizeMapping(mapeamento2).addService(googletag.pubads());
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
  });
</script>
<!-- FIM DFP -->

</head>
<body>

<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.11';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>


<header>
<div id="header" class="clearfix">
	<div id="logo"><a href="/"><img src="/imagens/logo_sobiologia.png"></a></div>
	<div id="imgHeader" align="center"><img src="/imagens/center.jpg"></div>
	<div id="botoesTopo" align="right">
        <div id="icCarrinho" align="center" class="iconesTopo"><a href="/shopping.php"><img src="/imagens/carrinho.gif"><br>Produtos</a></div>
        <div id="icSites" align="center" class="iconesTopo"><a href="#" onClick="javascript:exibeSites();"><img id="imgSites" src="/imagens/sites.gif"><br>Sites</a></div>
		<div id="icBusca" align="center" class="iconesTopo"><a href="#" onClick="javascript:exibeBusca();"><img id="imgBusca" src="/imagens/buscar.gif"><br>Busca</a></div>

        <div id="formBusca" align="right">
        <form action="/busca.php" method="GET" name="fbusca">
                <input type="text"  name="palavra" id="palavra" value="Pesquise em nossos sites" onFocus="javascript:this.value=''"><input type="submit" name="enviar" id="enviar" value="&#128270;">
            </form>
        </div>
    </div>


<!-- busca mobile -->
        <div id="formBusca2" align="center">
        <form action="/busca.php" method="GET" name="fbusca2">
                <input type="text"  name="palavra2" id="palavra2" value="Pesquise em nossos sites" onFocus="javascript:this.value=''"><input type="submit" name="enviar2" id="enviar2" value="&#128270;">
            </form>
        </div>
<!-- fim busca mobile -->        

</div>


<!-- sites -->
        <div id="sites" align="center" class="clearfix">
        <div id="painelSites">
			<div class="logos"><a href="https://www.somatematica.com.br" target="_blank"><img src="/imagens/logo_somatematica.png" class="imgLogos"></a></div>
			<div class="logos"><a href="https://www.soportugues.com.br" target="_blank"><img src="/imagens/logo_soportugues.png" class="imgLogos"></a></div>
			<div class="logos"><a href="http://www.sofisica.com.br" target="_blank"><img src="/imagens/logo_sofisica.png" class="imgLogos"></a></div>
			<div class="logos"><a href="http://www.sohistoria.com.br" target="_blank"><img src="/imagens/logo_sohistoria.png" class="imgLogos"></a></div>
			<div class="logos"><a href="http://www.sogeografia.com.br" target="_blank"><img src="/imagens/logo_sogeografia.png" class="imgLogos"></a></div>
			<div class="logos"><a href="http://www.soquimica.com.br" target="_blank"><img src="/imagens/logo_soq.png" class="imgLogos"></a></div>
			<div class="logos"><a href="http://www.soliteratura.com.br" target="_blank"><img src="/imagens/logo_soliteratura.png" class="imgLogos"></a></div>
			<div class="logos"><a href="http://www.pedagogia.com.br" target="_blank"><img src="/imagens/logo_sopedagogia.png" class="imgLogos"></a></div>
			<div class="logos"><a href="http://www.sonutricao.com.br" target="_blank"><img src="/imagens/logo_sonutricao.png" class="imgLogos"></a></div>
			<div class="logos"><a href="http://www.solinguainglesa.com.br" target="_blank"><img src="/imagens/logo_solinguainglesa.png" class="imgLogos"></a></div>
			<div class="logos"><a href="http://www.soespanhol.com.br" target="_blank"><img src="/imagens/logo_soespanhol.png" class="imgLogos"></a></div>
			<div class="logos"><a href="http://www.soitaliano.com.br" target="_blank"><img src="/imagens/logo_soitaliano.png" class="imgLogos"></a></div>
			<div class="logos"><a href="http://www.sorusso.com.br" target="_blank"><img src="/imagens/logo_sorusso.png" class="imgLogos"></a></div>
			<div class="logos"><a href="http://www.socontabilidade.com.br" target="_blank"><img src="/imagens/logo_socontabilidade.png" class="imgLogos"></a></div>
			<div class="logos"><a href="http://www.filosofia.com.br" target="_blank"><img src="/imagens/logo_sofilosofia.png" class="imgLogos"></a></div>
			<div class="logos"><a href="http://www.soxadrez.com.br" target="_blank"><img src="/imagens/logo_soxadrez.png" class="imgLogos"></a></div>
			<div class="logos"><a href="http://www.soturismo.com.br" target="_blank"><img src="/imagens/logo_soturismo.png" class="imgLogos"></a></div>
			<div class="logos"><a href="http://www.pral.com.br" target="_blank"><img src="/imagens/logo_pral.png" class="imgLogos"></a></div>
           </div>
        </div>
<!-- fim sites -->        
</header>


<div id="menuContainer">
	<div id="opcoesMenu">
    
    
<a id="topo"></a>


<div id="botoes">

<a href="#" class="nav-button">Menu &#8801;</a>
<nav class="nav">

    <ul>
        <li class="nav-submenu"><a href="#"><span class="icon icon-paper-sheet"></span> SÃ³ CiÃªncias</a>
            <ul>
             <li><a href="/conteudos/Ciencias/">Ãndice dos conteÃºdos</a></li>
             <li><a href="/conteudos/Universo/">Universo</a></li>
              <li><a href="/conteudos/Universo/sistemasolar.php">Sistema solar</a></li>
              <li><a href="/conteudos/Ar/">Ar</a></li>
              <li><a href="/conteudos/Agua/">Ãgua</a></li>
              <li><a href="/conteudos/Solo/">Solo</a></li>
              <li><a href="/conteudos/Ecologia/">Ecologia</a></li>
              <li><a href="/conteudos/Seresvivos/Ciencias/Caracteristicasgerais.php">Seres Vivos</a></li>
              <li><a href="/conteudos/Reinos2/animal.php">Reino dos animais</a></li>
              <li><a href="/conteudos/Reinos4/plantas.php">Reino das plantas</a></li>
              <li><a href="/conteudos/Corpo/corpohumano.php">Corpo humano</a></li>
            </ul>
        </li>
        <li class="nav-submenu"><a href="#"><span class="icon icon-paper-sheet"></span> SÃ³ Biologia</a>
            <ul>
             <li><a href="/conteudos/Biologia/">Ãndice dos conteÃºdos</a></li>
             <li><a href="/conteudos/Seresvivos/Ciencias/bioclassifidosseresvivos.php">Seres Vivos</a></li>
              <li><a href="/conteudos/Seresvivos/Ciencias/biovirus.php">Os VÃ­rus</a></li>
              <li><a href="/conteudos/Reinos/biomonera.php">Reino Monera</a></li>
              <li><a href="/conteudos/Reinos/bioprotista.php">Reino Protista</a></li>
              <li><a href="/conteudos/Reinos/biofungos.php">Reino Fungi</a></li>
              <li><a href="/conteudos/Reinos4/bioplantas.php">Reino Plantae</a></li>
              <li><a href="/conteudos/Genetica/leismendel.php">GenÃ©tica</a></li>
              <li><a href="/conteudos/Citologia/cito.php">Citologia</a></li>
              <li><a href="/biotecnologia.php">Biotecnologia</a></li>
            </ul>
        </li>
        <li class="nav-submenu"><a href="#" onClick="window.location='#topo'"><span class="icon icon-shopping-cart"></span> Produtos</a>
            <ul>
              <li><a href="/shopping.php">Shopping educacional</a></li>
              <li><a href="https://www.sobiologia.com.br/videoaulas/contratar.php" target="_blank">Videoaulas on-line</a></li>
              <li><a href="https://www.virtuous.com.br/busca.php?t=C&d=C" target="_blank">Softwares de CiÃªncias</a></li>
              <li><a href="https://www.virtuous.com.br/busca.php?t=C&d=B" target="_blank">Softwares de Biologia</a></li>
              <li><a href="https://www.virtuous.com.br/promocoes.php" target="_blank">Pacotes promocionais</a></li>
            </ul>
        </li>
        <li class="nav-submenu"><a href="#" onClick="window.location='#topo'"><span class="icon icon-pencil"></span> Pratique</a>
            <ul>
              <li><a href="/exercicios.php">ExercÃ­cios resolvidos</a></li>
              <li><a href="/GeradorExercicios">Gerador de exercÃ­cios</a></li>
              <li><a href="/provas.php">Provas de vestibular</a></li>
              <li><a href="/simulados.php">Simulados on-line</a></li>
            </ul>
        </li>
        <li class="nav-submenu"><a href="#" onClick="window.location='#topo'"><span class="icon icon-music-play"></span> Entretenimento</a>
            <ul>
             <li><a href="/jogos.php">Jogos de CiÃªncias</a></li>
              <li><a href="/biokids.php">Biokids</a></li>
              <li><a href="/curiosidades.php">Curiosidades</a></li>
              <li><a href="/conteudos/Curiosidades/macetes.php">Macetes</a></li>
            </ul>
        </li>
        <li class="nav-submenu"><a href="#" onClick="window.location='#topo'"><span class="icon icon-spread"></span> InformaÃ§Ãµes</a>
            <ul>
              <li><a href="/glossario.php">GlossÃ¡rio biolÃ³gico</a></li>
              <li><a href="/conteudos/etiqueta/">Dicas de etiqueta</a></li>
              <li><a href="/conteudos/jornal/">Jornal SÃ³ Biologia</a></li>
              <li><a href="/conteudos/noticias/">NotÃ­cias</a></li>
              <li><a href="/conteudos/Seresvivos/Ciencias/Cientistas.php">Grandes cientistas</a></li>
              <li><a href="http://www.soensino.com.br/foruns/viewforum.php?f=15" target="_blank">FÃ³rum de discussÃ£o</a></li>
              <li><a href="/professores.php">Ãrea dos professores</a></li>
              <li><a href="/laifisBiologia.php">Laifis de Biologia</a></li>
              <li><a href="/livros.php">IndicaÃ§Ã£o de Livros</a></li>
            </ul>
        </li> 
    </ul>
</nav>
<a href="#" class="nav-close">Fechar menu</a>
</div>


    <div id="redes">
    <a href="https://www.facebook.com/GrupoVirtuous/" target="_blank"><img src="/imagens/facebook.png" width="25" height="25"></a></li> &nbsp;<a href="https://twitter.com/GrupoVirtuous" target="_blank"><img src="/imagens/twitter.png" width="25" height="25"></a>
    </div>


</div>
</div>


<!-- inÃ­cio publicidade -->   
<div id="anuncio970_90" align="center" style="padding-bottom:0px">
	<div id="anuncio970x90" align="center"></div>
	<div id="anuncio320x100" align="center"></div>
</div>
<script type='text/javascript'>

   if (screen.width<970){  // mobile
					// repasse
						var slotid = "anuncio320x100"; var div = document.getElementById(slotid);
						if (div) {
						var s = document.createElement('script'); s.setAttribute('async', ''); s.setAttribute('src', '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'); 
						div.appendChild(s);
						/* CabeÃ§alho Mobile */
						div.innerHTML+= '<ins class="adsbygoogle" style="display:inline-block;width:320px;height:100px" data-ad-client="ca-pub-8501993473232048" data-ad-slot="1223451561"></ins>';
						(adsbygoogle = window.adsbygoogle || []).push({});
						}					
			document.getElementById('anuncio970x90').style.display='none';

   }else{ // desktop
					// repasse Adsense
						var slotid = "anuncio970x90"; var div = document.getElementById(slotid);
						if (div) {
						var s = document.createElement('script'); s.setAttribute('async', ''); s.setAttribute('src', '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'); 
						div.appendChild(s);
						/* CabeÃ§alho grande */
						div.innerHTML+= '<ins class="adsbygoogle" style="display:inline-block;width:970px;height:90px" data-ad-client="ca-pub-8501993473232048" data-ad-slot="2411871825"></ins>';
						(adsbygoogle = window.adsbygoogle || []).push({});
						}					
		document.getElementById('anuncio320x100').style.display='none';
   }
</script>
<!-- fim publicidade -->   




<!-- PRIMEIRA PÃGINA DA HOME --> 
<div id="pagina" class="clearfix">

<div id="content">

<section>



<div id="wrapper">
<div class="rslides_container">
<ul class="rslides" id="slides1">
  <li>
  		<a href="/conteudos/Curiosidades/gripe_resfriado.php"><img src="imagens/home/slider_gripe.jpg"></a>
    	<p class="caption">VocÃª sabe qual Ã© a diferenÃ§a entre gripe e resfriado? Veja em nossa seÃ§Ã£o de curiosidades.</p>
  </li>
  <li>
  		<a href="/GeradorExercicios"><img src="imagens/home/slider_gerador.jpg"></a>
    	<p class="caption">ConheÃ§a o nosso Gerador de ExercÃ­cios on-line, um programa gratuito que gera milhares de listas de exercÃ­cios.</p>
  </li>
  <li>
  		<a href="/conteudos/Curiosidades/Curiosidades5.php"><img src="imagens/home/slider_tosse.jpg"></a>
    	<p class="caption">Susto pode curar o soluÃ§o? Como acontece o reflexo do espirro? Porque Ã© impossÃ­vel espirrar de olhos abertos?</p>
  </li>
</ul>
</div>
</div>

</section>
<section id="contentDestaques">

	  <h1>Seja bem-vindo ao SÃ³ Biologia!</h1>
		<div class="paragrafo">...vocÃª estÃ¡ acessando o portal de CiÃªncias e Biologia que mais cresce no Brasil! Aqui vocÃª encontrarÃ¡ inÃºmeras pÃ¡ginas com conteÃºdos, exercÃ­cios, provas on-line, jogos, curiosidades, notÃ­cias, glossÃ¡rio e muito mais.</div>
        
<div class="blocoDestaque clearfix">
	<div class="destaqueEsquerda" style="background-image:url(/imagens/home/jogos.jpg);" onClick="javascript:window.location.href='/jogos.php'">
    	<div><a href="/jogos.php" class="tituloMateria">Jogos</a></div>
	    <div class="descDestaque" style="padding-top:40px;">Com nossos jogos on-line, vocÃª pratica CiÃªncias e Biologia de forma divertida e interativa.</div>
    </div>
	<div class="destaqueDireita" style="background-image:url(/imagens/home/seres.jpg);" onClick="javascript:window.location.href='/conteudos/Seresvivos/Ciencias/Caracteristicasgerais.php'">
    	<div><a href="/conteudos/Seresvivos/Ciencias/Caracteristicasgerais.php" class="tituloMateria">Seres vivos</a></div>
	    <div class="descDestaque" style="padding-top:40px;">Biodiversidade, classificaÃ§Ã£o dos seres vivos, evoluÃ§Ã£o, vÃ­rus, vacinas e soros...</div>
    </div>
</div>

<div class="blocoDestaque clearfix">
	<div class="destaqueEsquerda" style="background-image:url(/imagens/home/agua.jpg);" onClick="javascript:window.location.href='/conteudos/Agua/'">
    	<div><a href="/conteudos/Agua/" class="tituloMateria">Ãgua</a></div>
	    <div class="descDestaque" style="padding-top:40px;">Estados fÃ­sicos da matÃ©ria, mudanÃ§as de estados fÃ­sicos, propriedades da Ã¡gua, o ciclo da Ã¡gua...</div>
    </div>
	<div class="destaqueDireita" style="background-image:url(/imagens/home/material.jpg);" onClick="javascript:window.location.href='/conteudos.php'">
    	<div><a href="/conteudos.php" class="tituloMateria">Material de apoio</a></div>
	    <div class="descDestaque" style="padding-top:40px;">Temos um material completo de ensino fundamental (CiÃªncias) e de ensino mÃ©dio (Biologia). Confira!</div>
    </div>
</div>

<div class="blocoDestaque clearfix">
	<div class="destaqueEsquerda" style="background-image:url(/imagens/home/corpo.jpg);" onClick="javascript:window.location.href='/conteudos/Corpo/corpohumano.php'">
    	<div><a href="/conteudos/Corpo/corpohumano.php" class="tituloMateria">Corpo humano</a></div>
	    <div class="descDestaque" style="padding-top:40px;">CÃ©lulas, tecidos, Ã³rgÃ£os, sistema genital, sistema digestivo, sistema respiratÃ³rio...</div>
    </div>
	<div class="destaqueDireita" style="background-image:url(/imagens/home/solo.jpg);" onClick="javascript:window.location.href='/conteudos/Solo/'">
    	<div><a href="/conteudos/Solo/" class="tituloMateria">Solo</a></div>
	    <div class="descDestaque" style="padding-top:40px;">Tipos de solo, formaÃ§Ã£o do solo, rochas magmÃ¡ticas, rochas sedimentares, rochas metamÃ³rficas...</div>
    </div>
</div>
</section>        
</div>

<div id="sidebar">
    <section>
        <div id="destaques" align="center">
            <div id="titDestaques" align="center">Produtos em destaque</div>
    <div id="prod1">
            <a href="https://www.virtuous.com.br/produto.php?id=96" target="_blank">CiÃªncias Divertida<br>
            <img src="/imagens/produtos/96_4.jpg" width="72" height="56"></a><br><span class="descricaoDestaques">Aprenda CiÃªncias por meio de jogos</span>
            </div><div id="prod2">
            <a href="https://www.sobiologia.com.br/videoaulas/contratar.php" target="_blank">Videoaulas de Biologia<br>
            <img src="/imagens/produtos/216_4.jpg" width="56" height="56"></a><br><span class="descricaoDestaques">Assista e aprenda Biologia em casa</span>
            </div><div id="prod3">
            <a href="https://www.virtuous.com.br/produto.php?id=206" target="_blank">Gerenciador de QuestÃµes e AvaliaÃ§Ãµes<br>
            <img src="/imagens/produtos/206_4.jpg" width="72" height="56"></a><br><span class="descricaoDestaques">Organize suas questÃµes e gere avaliaÃ§Ãµes</span>
            </div><div id="prod4">
            <a href="https://www.virtuous.com.br/produto.php?id=73" target="_blank">Jogos DidÃ¡ticos<br>
            <img src="/imagens/produtos/73_4.jpg" width="72" height="56"></a><br><span class="descricaoDestaques">34 jogos para o ensino fundamental</span>
            </div><div id="prod5">
            <a href="https://www.virtuous.com.br/produto.php?id=154" target="_blank">NutriÃ§Ã£o Divertida<br>
            <img src="/imagens/produtos/154_4.jpg" width="72" height="56"></a><br><span class="descricaoDestaques">Jogos para auxiliar na educaÃ§Ã£o nutriciconal</span>
            </div><div id="prod6">
            <a href="https://www.amazon.com.br/gp/search?ie=UTF8&tag=virtuous03-20&linkCode=ur2&linkId=751c8aa74a3f33bf8defa6488086a375&camp=1789&creative=9325&index=books&keywords=biologia" target="_blank">[Amazon] Livros de Biologia<br>
            <img src="/imagens/amazon/3.jpg" width="72" height="56"></a><br><span class="descricaoDestaques">Livros diversos de Biologia</span>
            </div>            
        </div>
    </section>
    
<!-- inÃ­cio publicidade -->   
<div id="anuncioLateral" align="center">
    <!-- /21611696256/300x600_Sobiologia -->
    <div id='div-gpt-ad-1519677249029-0'>
    <script>
    googletag.cmd.push(function() { googletag.display('div-gpt-ad-1519677249029-0'); });
    </script>
    </div>
</div>
<!-- fim publicidade -->  
    
    </div>

</div> 
<!-- FIM DA PRIMEIRA PÃGINA DA HOME --> 

 



<!-- inÃ­cio publicidade -->   
<div id="anuncio970_home" align="center">
    <!-- /21611696256/970x250_Sobiologia -->
    <div id='div-gpt-ad-1519662696300-0'>
    <script>
    googletag.cmd.push(function() { googletag.display('div-gpt-ad-1519662696300-0'); });
    </script>
    </div>

</div>
<!-- fim publicidade -->   



<!-- SEGUNDA PÃGINA DA HOME --> 
<div id="pagina2" class="clearfix">

 <div id="content2">
<section>
        
<div class="blocoDestaqueLongo clearfix" style="height:auto">
	<div class="destaqueDuasColunas" style="margin-bottom:25px">
    	<div><a href="#" class="tituloMateria">Curiosidades</a></div>
	    <div class="descDestaque">
<span class="icon icon-eye"></span> <a href="/conteudos/Curiosidades/curiosidades_amizade.php">6 curiosidades cientÃ­ficas sobre a amizade</a><br><span class="icon icon-eye"></span> <a href="/conteudos/Curiosidades/dez_animais_gigantes.php">Dez animais gigantes que raramente sÃ£o vistos</a><br><span class="icon icon-eye"></span> <a href="/conteudos/Curiosidades/insetos_deixassem_existir.php">O que aconteceria conosco se todos os insetos deixassem de existir?</a><br><span class="icon icon-eye"></span> <a href="/conteudos/Curiosidades/apetite_bacterias.php">O seu apetite pode estar sendo controlado por bactÃ©rias</a><br><span class="icon icon-eye"></span> <a href="/conteudos/Curiosidades/fatos_bizarros_bebes.php">13 Fatos bizarros sobre bebÃªs que vocÃª provavelmente nÃ£o sabia</a><br><span class="icon icon-eye"></span> <a href="/conteudos/Curiosidades/animais_dentes_medonhos.php">ConheÃ§a 9 animais com dentes muito medonhos</a><br><span class="icon icon-eye"></span> <a href="/conteudos/Curiosidades/cerebro_bacteria_neuronio.php">BactÃ©rias se comunicam do mesmo jeito que os nossos neurÃ´nios</a><br>        <div class="chamadaDireita">Para ver mais curiosidades, <a href="/curiosidades.php" class="menu">clique aqui</a>.</div>
        </div>
    </div>
</div>

<div class="blocoDestaqueLongo clearfix">
	<div class="destaqueEsquerdaG">
    	<div><a href="#" class="tituloMateria">GlossÃ¡rio</a></div>
	    <div class="descDestaque">
		<p><span class="icon icon-spread"></span> <strong>MitocÃ´ndria</strong> - Organela citoplasmÃ¡tica das cÃ©lulas eucariontes, responsÃ¡vel pela respiraÃ§Ã£o celular.</p><p><span class="icon icon-spread"></span> <strong>AerÃ³bico</strong> - Ser ou organismo que vive, cresce ou metaboliza apenas em presenÃ§a do oxigÃªnio.</p><p><span class="icon icon-spread"></span> <strong>Biodiversidade</strong> - representa o conjunto de espÃ©cies animais e vegetais viventes.</p>        <div class="chamadaDireita">Para ver todo o glossÃ¡rio, <a href="/glossario.php" class="menu">clique aqui</a>.</div>
        </div>
    </div>
	<div class="destaqueDireitaG">
    	<div><a href="#" class="tituloMateria">Novidades</a></div>
	    <div class="descDestaque">
		<span class="icon icon-dialogue-text"></span> <a href="/conteudos/Curiosidades/coronavirus_parou_mundo.php"> <strong>Curiosidades</strong> - CoronavÃ­rus: o vÃ­rus que parou o mundo</a><br>
<span class="icon icon-dialogue-text"></span> <a href="/conteudos/Curiosidades/beber_alcool_gripe.php"> <strong>Curiosidades</strong> - Beber Ã¡lcool gripado faz mal?</a><br>
<span class="icon icon-dialogue-text"></span> <a href="/conteudos/Curiosidades/gripe_resfriado.php"> <strong>Curiosidades</strong> - DiferenÃ§a entre gripe e resfriado</a><br>
<span class="icon icon-dialogue-text"></span> <a href="/jogos/quiz/"> <strong>Jogos</strong> - Quiz de CiÃªncias e Biologia</a><br>
<span class="icon icon-dialogue-text"></span> <a href="/conteudos/Curiosidades/guardar_escova_dentes.php"> <strong>Curiosidades</strong> - Como guardar a escova de dentes?</a><br>
<span class="icon icon-dialogue-text"></span> <a href="/conteudos/Curiosidades/ra_perereca_sapo.php"> <strong>Curiosidades</strong> - Qual a diferenÃ§a entre rÃ£, perereca e sapo?</a><br>
<span class="icon icon-dialogue-text"></span> <a href="/conteudos/Curiosidades/moscas_banheiro.php"> <strong>Curiosidades</strong> - Mosquinhas do banheiro: como acabar com elas</a><br>
        </div>
    </div>
</div>

</section>        
</div>

<div id="sidebar2">
    <section>
<div id="faceBox">
<div class="fb-page" data-href="https://www.facebook.com/GrupoVirtuous/" data-tabs="timeline" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/GrupoVirtuous/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/GrupoVirtuous/">Grupo Virtuous</a></blockquote></div>
</div>    
    
    
    
    
    
<!-- inÃ­cio publicidade -->   
<div align="center" id="anuncioFim"></div>
<script type='text/javascript'>

					// repasse
						var slotid = "anuncioFim"; var div = document.getElementById(slotid);
						if (div) {
						var s = document.createElement('script'); s.setAttribute('async', ''); s.setAttribute('src', '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'); 
						div.appendChild(s);
						/* RetÃ¢ngulo 1 */
						div.innerHTML+= '<ins class="adsbygoogle" style="display:inline-block;width:320px;height:250px" data-ad-client="ca-pub-8501993473232048" data-ad-slot="8048421829"></ins>';
						(adsbygoogle = window.adsbygoogle || []).push({});
						}					

</script>
<!-- fim publicidade -->   
        
        
    </section>
    </div>
    
</div>
 <!-- FIM DA SEGUNDA PÃGINA DA HOME --> 


<div id="recomendacoes">
<div id="recomendacoesLinks">

<div class="OUTBRAIN" data-src="https://www.sobiologia.com.br" data-widget-id="AR_1" data-ob-template="virtuous"></div>
<script type="text/javascript" async src="https://widgets.outbrain.com/outbrain.js"></script>    

</div>
</div>


<footer> 
  <div id="rodapeContainer">
        <div id="rodape" class="clearfix">
            <div class="box-rodape">
                 <h3>Quem somos</h3>
                 <ul>
                    <li><a href="/sobrenos.php">Sobre a Virtuous</a></li>
                    <li style="color:#FFFFFF">Redes sociais</li>
                    <li><a href="https://www.facebook.com/GrupoVirtuous/" target="_blank"><img src="/imagens/facebook.png" width="25" height="25"></a> <a href="https://twitter.com/GrupoVirtuous" target="_blank"><img src="/imagens/twitter.png" width="25" height="25"></a></li>
                </ul>
            </div>    
    
            <div class="box-rodape">
                 <h3>Loja virtual</h3>
                 <ul>
                    <li><a href="https://www.virtuous.com.br/" target="_blank">Softwares educativos</a></li>
                    <li><a href="https://www.sobiologia.com.br/videoaulas/contratar.php" target="_blank">Videoaulas on-line</a></li>
                    <li><a href="https://www.virtuous.com.br/promocoes.php" target="_blank">Pacotes promocionais</a></li>
                    <li><a href="https://www.virtuous.com.br/meusPedidos.php" target="_blank">Meus pedidos</a></li>
                </ul>
            </div>    
    
            <div class="box-rodape">
                 <h3>InformaÃ§Ãµes</h3>
                 <ul>
                    <li><a href="/privacidade.php">PolÃ­tica de privacidade</a></li>
                    <li><a href="/contrato.php">Contrato do usuÃ¡rio</a></li>
                    <li><a href="/anuncie.php">Anuncie</a></li>
                </ul>
            </div>    
    
            <div class="box-rodape">
                 <h3>Contato</h3>
                 <ul>
                    <li><a href="javascript:Abre('/indique.php');">&#10150; Indique o site</a></li>
                    <li><a href="javascript:Abre('https://www.somatematica.com.br/informativo.php');">&#9998; Receba o informativo</a></li>
                   <li><a href="/contato.php">&#9993 Fale conosco</a></li>
                </ul>
            </div>    
        </div>
    </div>    
    
    
<!-- sites -->
        <div id="sites2" align="center" class="clearfix">
        <div id="painelSites2">
			<div class="logos2"><a href="https://www.somatematica.com.br" target="_blank"><img src="/imagens/logo_somatematica.png" class="imgLogos2"></a></div>
			<div class="logos2"><a href="https://www.soportugues.com.br" target="_blank"><img src="/imagens/logo_soportugues.png" class="imgLogos2"></a></div>
			<div class="logos2"><a href="http://www.sofisica.com.br" target="_blank"><img src="/imagens/logo_sofisica.png" class="imgLogos2"></a></div>
			<div class="logos2"><a href="http://www.sohistoria.com.br" target="_blank"><img src="/imagens/logo_sohistoria.png" class="imgLogos2"></a></div>
			<div class="logos2"><a href="http://www.sogeografia.com.br" target="_blank"><img src="/imagens/logo_sogeografia.png" class="imgLogos2"></a></div>
			<div class="logos2"><a href="http://www.soquimica.com.br" target="_blank"><img src="/imagens/logo_soq.png" class="imgLogos2"></a></div>
			<div class="logos2"><a href="http://www.soliteratura.com.br" target="_blank"><img src="/imagens/logo_soliteratura.png" class="imgLogos2"></a></div>
			<div class="logos2"><a href="http://www.pedagogia.com.br" target="_blank"><img src="/imagens/logo_sopedagogia.png" class="imgLogos2"></a></div>
			<div class="logos2"><a href="http://www.sonutricao.com.br" target="_blank"><img src="/imagens/logo_sonutricao.png" class="imgLogos2"></a></div>
			<div class="logos2"><a href="http://www.solinguainglesa.com.br" target="_blank"><img src="/imagens/logo_solinguainglesa.png" class="imgLogos2"></a></div>
			<div class="logos2"><a href="http://www.soespanhol.com.br" target="_blank"><img src="/imagens/logo_soespanhol.png" class="imgLogos2"></a></div>
			<div class="logos2"><a href="http://www.soitaliano.com.br" target="_blank"><img src="/imagens/logo_soitaliano.png" class="imgLogos2"></a></div>
			<div class="logos2"><a href="http://www.sorusso.com.br" target="_blank"><img src="/imagens/logo_sorusso.png" class="imgLogos2"></a></div>
			<div class="logos2"><a href="http://www.socontabilidade.com.br" target="_blank"><img src="/imagens/logo_socontabilidade.png" class="imgLogos2"></a></div>
			<div class="logos2"><a href="http://www.filosofia.com.br" target="_blank"><img src="/imagens/logo_sofilosofia.png" class="imgLogos2"></a></div>
			<div class="logos2"><a href="http://www.soxadrez.com.br" target="_blank"><img src="/imagens/logo_soxadrez.png" class="imgLogos2"></a></div>
			<div class="logos2"><a href="http://www.soturismo.com.br" target="_blank"><img src="/imagens/logo_soturismo.png" class="imgLogos2"></a></div>
			<div class="logos2"><a href="http://www.pral.com.br" target="_blank"><img src="/imagens/logo_pral.png" class="imgLogos2"></a></div>
           </div>
        </div>
<!-- fim sites -->        

  <div id="direitos">
  <div id="copyrights" align="right">
		Copyright Â© 2007 - 2021 <a href="/" class="branco"><strong>SÃ³ Biologia</strong></a>. Todos os direitos reservados. Desenvolvido por <a href="https://www.virtuous.com.br" target="_blank"  class="branco"><strong>Virtuous</strong></a>.
	</div>
  </div>    

    
</footer>

<a href="#" class="voltar-ao-topo"><span class="icon icon-arrow-up"></span></a>
<a id="fimPag"></a>

<script src="/cssjs/nav.jquery.min.js"></script>
<script>
    $('.nav').nav();
</script>

<script>
jQuery("document").ready(function($){

	var menuTopo = $('#menuContainer');

	$(window).scroll(function () {
		if($(window).width()>970){	
			if ($(this).scrollTop() > 132) {
				menuTopo.addClass("menufixo");
			} else {
				menuTopo.removeClass("menufixo");
			}
		}
		else{
			if (jQuery(this).scrollTop() > 200) {
				jQuery('.voltar-ao-topo').fadeIn(200);
			} else {
				jQuery('.voltar-ao-topo').fadeOut(200);
			}			
		}
	});
	
// AnimaÃ§Ã£o para subir
	jQuery('.voltar-ao-topo').click(function(event) {
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: 0}, 300);
	})	

});
</script>

<script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
	
<script type="text/javascript">
var pageTracker = _gat._getTracker("UA-5341639-2");
pageTracker._trackPageview();
</script>

</body>
</html>
