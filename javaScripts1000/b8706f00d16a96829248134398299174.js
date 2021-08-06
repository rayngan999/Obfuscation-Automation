
	var titulo = "Blusa de TricÃ´ Ombro Aberto com Fio Precioso";
	
	/*   NOME DA IMAGEM 300 X 330 "EX: blusa2.jpg"   */
	var imagem = "home-receita-precioso.jpg";

	/*     EXEMPLO: https://blog.bazarhorizonte.com.br/2017/07/20/blusa-de-croche-bege-fio-cisne-hobby/     */
	var linkReceita = "https://blog.bazarhorizonte.com.br/2021/03/10/blusa-de-trico-ombro-aberto-com-fio-precioso/";


	$("#imagem-blog").attr('src', 'https://bazarhorizonte.vteximg.com.br/arquivos/' + imagem);



	$("#receita").append( "<span>#blog.bazarhorizonte</span>" );
	$("#receita").append( "<strong>"+titulo+"</strong>" );


	$("#receita").append( document.createElement( "p" ) );
	$("#receita p").append( "<strong>Material</strong> <br /><br />" );

	/* COLOCAR OS MATERIAS DAS RECEITA REPETINDO AS LINHAS ABAIXO */

	$("#receita p").append( '<a href="/fio-precioso-circulo-100g-042819/p">- Fio Precioso (100g) â 5 novelos na Cor: 2952 (luau); </a><br />' );
	$("#receita p").append( '<a href="/croche-e-trico/agulhas/croche">- Agulha para tricÃ´ CÃ­rculo de 5,0mm; </a><br />' );
	$("#receita p").append( '<a href="/croche-e-trico/acessorios">- Agulha de gancho CÃ­rculo (2 peÃ§as); </a><br />' );
	$("#receita p").append( '<a href="/bordado/agulhas" target="_blank" >â Agulha para tapeÃ§aria CÃ­rculo; </a><br>' );
	$("#receita p").append( '<a>â Papel vegetal; </a><br>' );
	$("#receita p").append( '<a href="/escolar/lapis-de-cor" target="_blank" >â LÃ¡pis; </a><br>' );
	$("#receita p").append( '<a href="/bordado/tesouras" target="_blank" >â Tesoura; </a><br>' );
	$("#receita p").append( '<a href="/bordado/acessorios" target="_blank" >â Fita mÃ©trica.</a>' );

	/* FIM DOS MATERIAIS */

	$("#receita").append( '<div class="section-content-actions"><a href="'+ linkReceita +'?utm_source=home-site&utm_medium=receita" target="_blank" class="btn btn-darkred">visitar blog</a></div>' );	

