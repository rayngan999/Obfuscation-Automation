jQuery(document).ready(function($) {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
      $(".header").addClass("header-bg");
    } else {
      $(".header").removeClass("header-bg");
    }

    if (scroll >= 100) {
      $(".ShowSearch").addClass("SShow");
    } else {
      $(".ShowSearch").removeClass("SShow");
    }
  });

  $('[data-toggle="popover"]').popover();

  var $boxLogin = $(".box-login");
  var $boxCadastro = $(".box-cadastro");

  $(".box-login, .box-cadastro").click(function(e) {
    if (this.contains(e.target)) {
      return;
    }
  });

  $(".btn-facebook, .btn-google").click(function(e) {
    e.preventDefault();
  });

  $(".link-login, .login-password").click(function(e) {
    e.preventDefault();
    $boxLogin.toggleClass("hidden");
    $boxCadastro.toggleClass("hidden", true);
  });

  $(".link-cadastro").click(function(e) {
    e.preventDefault();
    $boxCadastro.toggleClass("hidden");
    $boxLogin.toggleClass("hidden", true);
  });

  $(".btn-action").click(function(e) {
    e.preventDefault();
    var $content = $(".trabalho-conteudo");
    var $fontSize = parseInt($content.css("font-size"));
    if ($(e.target).hasClass("increase-font")) {
      $content.css("fontSize", $fontSize + 1);
    } else if ($(e.target).hasClass("decrease-font")) {
      $content.css("fontSize", $fontSize - 1);
    } else if ($(e.target).hasClass("print-page")) {
      window.print();
    }
  });

  // Loads Select2 Plugin
  if (jQuery().select2 && window.location.pathname !== "/finalizar-compra/") {
    $(".select2").select2({
      language: "pt-BR"
    });
  }

  // using jQuery Mask Plugin v1.7.5
  // http://jsfiddle.net/d29m6enx/2/

  var maskBehavior = function(val) {
    return val.replace(/\D/g, "").length === 11
      ? "(00) 00000-0000"
      : "(00) 0000-00009";
  };

  var options = {
    onKeyPress: function(val, e, field, options) {
      field.mask(maskBehavior.apply({}, arguments), options);
    }
  };

  // Loads Mask Plugin
  if (jQuery().mask) {
    $("#billing_phone").mask(maskBehavior, options);
    $("#billing_postcode").mask("99999-999");
    $("#born-date").mask("00/00/0000", { placeholder: "dd/mm/aaaa" });
    $("#cpf").mask("000.000.000-00");
    $("#postcode").mask("00000-000");
  }

  function limpa_formulÃ¡rio_cep() {
      // Limpa valores do formulÃ¡rio de cep.
      $("#address_1").val("");
      $("#district").val("");
      $("#city").val("");
      $("#state").val("");
  }

  //Quando o campo cep perde o foco.
  $("#postcode").blur(function() {

      //Nova variÃ¡vel "cep" somente com dÃ­gitos.
      var cep = $(this).val().replace(/\D/g, '');

      //Verifica se campo cep possui valor informado.
      if (cep != "") {

          //ExpressÃ£o regular para validar o CEP.
          var validacep = /^[0-9]{8}$/;

          //Valida o formato do CEP.
          if(validacep.test(cep)) {

              //Consulta o webservice viacep.com.br/
              $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

                  if (!("erro" in dados)) {
                      //Atualiza os campos com os valores da consulta.
                      $("#address_1").val(dados.logradouro);
                      $("#district").val(dados.bairro);
                      $("#city").val(dados.localidade);
                      $("#state").val(dados.uf);
                  } //end if.
                  else {
                      //CEP pesquisado nÃ£o foi encontrado.
                      limpa_formulÃ¡rio_cep();
                      alert("CEP nÃ£o encontrado.");
                  }
              });
          } //end if.
          else {
              //cep Ã© invÃ¡lido.
              limpa_formulÃ¡rio_cep();
              alert("Formato de CEP invÃ¡lido.");
          }
      } //end if.
      else {
          //cep sem valor, limpa formulÃ¡rio.
          limpa_formulÃ¡rio_cep();
      }
  });
});
