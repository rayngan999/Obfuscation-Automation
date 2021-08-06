var html = '<li class="visible-xs visible-sm" id="entrar-mob"><a href="/login.php" class="login"><span class="icon-user"></span>Entrar</a></li><li class="xyz"><a href="/login.php" class="login">Entrar</a></li><li class="xyz"><a href="/criarconta.php" class="signup">Cadastrar</a></li><li class="user"><span></span><ul><li class="h">Bem-vindo ao <strong>Pensador</strong></li><li><a href="/login.php" id="login" class="login"><span></span>Entrar</a></li><li><a href="/criarconta.php" id="signup" class="signup"><span></span>Cadastrar</a></li></ul></li>';
var modal = '<div id="popup"><div class="close"></div><div class="login wrapper"><div class="heading">Entrar no Pensador</div><div class="modal-form-wrapper"><button class="btn-facebook" scope="public_profile,email" onclick="pensador.facebook.login(this);"><span class="icon"></span>Entrar com Facebook</button><div class="form-separator"><span>ou</span></div><form method="post" action="/login.php" id="login-form"><input type="hidden" name="subm" value="true" /><input type="hidden" name="ref" value="" /><fieldset><div class="input-wrapper email"><input placeholder="Username ou Email" type="text" name="username"> <span></span> </div> <div class="input-wrapper password"> <input placeholder="Senha" type="password" name="password" autocomplete="password"><span></span></div></fieldset><div class="forgot-password"><a href="/lembra.php">Esqueceu a sua senha?</a></div><input type="submit" class="btn colored" value="Entrar"></form></div><div class="bottom">NÃ£o estÃ¡ cadastrado? <a href="/criarconta.php" class="cadastro" title="Cadastrar">Cadastre-se jÃ¡</a></div></div></div>';

var usermenu = document.getElementById('user-menu');
usermenu.innerHTML = html;
usermenu.className += " notlogged";

var overlay = document.createElement('div');
overlay.id = 'overlay';
overlay.innerHTML = modal;
document.body.appendChild(overlay);