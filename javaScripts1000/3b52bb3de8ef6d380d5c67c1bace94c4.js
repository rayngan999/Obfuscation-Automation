let lgpdUrl = 'https://jsonplaceholder.typicode.com/posts'
let lgpdHtml = `<div class="lgpd">
		<div class="lgpd--left">
			NÃ³s utilizamos "cookies" para uma melhor navegaÃ§Ã£o e personalizaÃ§Ã£o de conteÃºdo,<br>ao navegar nessse site vocÃª concorda com esses termos.<br>
			<a href="https://www.bazarhorizonte.com.br/institucional/politica-de-privacidade">Clique aqui para saber mais sobre nossa polÃ­tica de privacidade e como tratamos os seus dados.</a>
		</div>
		<div class="lgpd--right" style="padding-top: 10px;">
			
			<button>Entendi e fechar</button>
		</div>

	</div>
	<link rel="stylesheet" type="text/css" href="/arquivos/lgpd.css">`;

let IsContent = localStorage.getItem('lgpd');
if(!IsContent) {

	document.body.innerHTML += lgpdHtml;

	let lgpdArea = document.querySelector('.lgpd');
	let lgpdButton = lgpdArea.querySelector('button');

	lgpdButton.addEventListener('click', async ()=>{

			lgpdArea.remove();

			let result = await fetch(lgpdUrl);
			let json = await result.json();

			if (json.error != '') {
				let id = '123';
				localStorage.setItem('lgpd', id)
			}

			localStorage.setItem('lgpd', '123');

	})

} 