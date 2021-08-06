var $boxLogin = jQuery(".box-login");
var $boxCadastro = jQuery(".box-cadastro");

jQuery(".btn-facebook, .btn-google").click(function(e) {
  e.preventDefault();
});

jQuery(".link-login, .login-password").click(function(e) {
  e.preventDefault();
  $boxCadastro.hide();
  $boxLogin.fadeIn();
});

jQuery(".link-cadastro").click(function(e) {
  e.preventDefault();
  $boxCadastro.fadeIn();
  $boxLogin.hide();
});