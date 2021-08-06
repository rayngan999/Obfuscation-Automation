/* Resize */
let viewport = $(window).width();
if ($('#otra-informacion-detalle .comentarios').length > 0 ||Â $('#otra-informacion-detalle .equipamiento').length > 0) {
  alturaComentariosDetalle();
  alturaEquipamientoDetalle();
}

$(window).resize(() => {
  viewport = $(window).width();
  if ($('#otra-informacion-detalle .comentarios').length > 0 ||Â $('#otra-informacion-detalle .equipamiento').length > 0) {
    alturaComentariosDetalle();
    alturaEquipamientoDetalle();
  }
});

/* Seccion especifica */
if ($('.gallery-slider').length > 0) {
  var swiper = new Swiper('.gallery-slider', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    spaceBetween: 8,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    watchSlidesProgress: true,
    slidesPerView: 1,
  });

  setTimeout(() => {
    swiper.update();
  }, 500);
}

if ($('#volver-arriba-detalle').length > 0) {
  $(window).on("scroll", function() {
    scrollTopButton();
  });
  scrollTopButton();

  function scrollTopButton() {
    const div_subir = $('#volver-arriba-detalle');
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();

    if (div_subir.hasClass('visible')) {
      if (scrollPosition <= (scrollHeight / 4 )) {
        div_subir.removeClass('visible');
      }
    } else {
      if (scrollPosition > (scrollHeight / 4 )) {
        div_subir.addClass('visible');
      }
    }
  }

  $('#volver-arriba-detalle').click(() => {
    $('html, body').animate({scrollTop:0}, 500, 'swing', () => {});
  });
}

/* Change */
$('.contenedor-select select').on('change', function() {
  const valor = $(this).val();
  $(this).parent().find('.dropdown-toggle').html($(this).children('option:selected').text());
  $(this).parent().find('.opcion').removeClass('activo');
  $(this).parent().find('.opcion').each(function() {
    if ($(this).data('valor') == valor) {
      $(this).addClass('activo');
      return false;
    }
  });
});

$('#select-marca').on('change', () => {
  $.ajax({
    type: "POST",
    url: "https://ocasion.neomotor.com/index/modelos/" + $('#select-marca').val(),
    cache:false,
    async:true,
    success: function(datos){
      datos = datos.trim();
      $(".contenedor-modelos").html(datos);
    }
  });
});

$('#filtro-home select').on('change', () => {
  $('#filtro-home .boton').html('Ver vehÃ­culos');
});

/* Submit */
$('#formulario-contacto-detalle form').submit(function(event) {
  event.preventDefault();
  $('#formulario-contacto-detalle .error').hide();
  $.ajax({
    url: '/detalle/contactar/' + $('#formulario-contacto-detalle form').data('anuncio'),
    type: 'post',
    dataType: 'json',
    data: $('#formulario-contacto-detalle form').serialize(),
    success: function(respuesta) {
      if (respuesta.enviado) {
        $('#formulario-contacto-detalle form').remove();
        $('#formulario-contacto-detalle .correcto').show();
        dataLayer.push({
          'event':'VirtualPageView',
          'virtualPageURL':'/Solicitudenviada.html',
          'virtualPageTitle' : 'Solicitud Enviada'
          });
      } else {
        $('#formulario-contacto-detalle .error').show();
      }
    }
  });
});

$('#contactar form').submit(function(event) {
  event.preventDefault();
  $('#contactar .error').hide();
  $.ajax({
    url: '/contactar/contactar/' + $('#contactar form').data('anuncio'),
    type: 'post',
    dataType: 'json',
    data: $('#contactar form').serialize(),
    success: function(respuesta) {
      if (respuesta.enviado) {
        $('#contactar form').remove();
        $('#contactar .correcto').show();
      } else {
        $('#contactar .error').show();
      }
    }
  });
});


/* Submit */
$('#formulario-contacto-whatsapp form').submit(function(event) {
  event.preventDefault();
  $('#formulario-contacto-whatsapp .error').hide();
  $.ajax({
    url: '/detalle/contactar/' + $('#formulario-contacto-whatsapp form').data('anuncio'),
    type: 'post',
    dataType: 'json',
    data: $('#formulario-contacto-whatsapp form').serialize(),
    success: function(respuesta) {
      if (respuesta.enviado) {
        $('#formulario-contacto-whatsapp form').remove();
        $('#formulario-contacto-whatsapp .correcto').show();
      } else {
        $('#formulario-contacto-whatsapp .error').show();
      }
    }
  });
});
$('#modal-login form').submit(function(event) {
  event.preventDefault();
  $('#modal-login .error').hide();
  $.ajax({
    url: '/usuario/iniciarsession/',
    type: 'post',
    dataType: 'json',
    data: $('#modal-login form').serialize(),
    success: function(respuesta) {
      if (respuesta) {
        $('#modal-login .error').remove();
        location.reload();
      } else {
        $('#modal-login .error').show();
      }
    }
  });
});



/* Loads */
$(function () {
  $('[data-toggle="popover"]').popover();
});

$(window).on("load", () => {
  if($("#mapa").length > 0){

    let latitud = $("#mapa").data('latitud');
    let longitud = $("#mapa").data('longitud');
    const ciudad = $("#mapa").data('ciudad');
    const pais = $("#mapa").data('pais');
    const codigo_postal = $("#mapa").data('codigopostal');

    if (latitud === '' || longitud === '') {
      const url_get_coordenadas = 'https://nominatim.openstreetmap.org/search?postalcode=' + codigo_postal + '&country=' + pais + '&city=' + ciudad + '&format=json';

      $.get(url_get_coordenadas, function(data) {
        if (data.length > 0) {
          latitud = data[0].lat;
          longitud = data[0].lon;
          cargarMapa();
        }
      });
    } else {
      cargarMapa();
    }

    function cargarMapa() {
      const marker = $("#mapa").data('marker');

      var map = L.map('mapa',{
        zoomControl: false
      }).setView([latitud, longitud], 14);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.control.zoom({
        position:'bottomleft'
      }).addTo(map);
      if (marker) {
        L.marker([latitud, longitud]).addTo(map);
      }
    }
  };
});


/* Clicks */
$('.imprimir').click(() => {
  window.print();
});

$('#acciones-detalle .contactar').click(() => {
  cerrarGaleria();
  let pixeles_top = 55;
  if (viewport >= 992) {
    pixeles_top = 70;
  }
  $('html, body').animate({
    scrollTop: $('#formulario-contacto-detalle').offset().top - pixeles_top
  }, 400);
  $('#formulario-contacto-detalle .formulario').show();
  $('#formulario-contacto-detalle .correcto').hide();
});

$('input[name="cambio_id"]').click(function(){
    if ($(this).data('waschecked') == true) {
      $(this).prop('checked', false);
      $(this).data('waschecked', false);
    }
    else{
      $(this).data('waschecked', true);
    }
    

    const id = $(this)[0].id;

    $('input[name="cambio_id"]').each(function(){
      if ($(this)[0].id !== id) {
        $(this).data('waschecked', false);
      }
    });
});

$('#otra-informacion-detalle .contenido .comentarios .mostrar-mas').click(() => {
  $('#otra-informacion-detalle .comentarios .valor').addClass('abierto');
});

$('#otra-informacion-detalle .contenido .comentarios .mostrar-menos').click(() => {
  $('#otra-informacion-detalle .comentarios .valor').removeClass('abierto');
});

$('#otra-informacion-detalle .contenido .equipamiento .mostrar-mas').click(() => {
  $('#otra-informacion-detalle .equipamiento .tipos-equipamiento').addClass('abierto');
});

$('#otra-informacion-detalle .contenido .equipamiento .mostrar-menos').click(() => {
  $('#otra-informacion-detalle .equipamiento .tipos-equipamiento').removeClass('abierto');
});

$('#galeria-detalle .boton-pantalla-completa').click(function() {
  $('#galeria-detalle .contenido').addClass('pantalla-completa');
  $('body').addClass('galeria-abierta');
  $('#acciones-detalle').addClass('galeria');
  if ($('.gallery-slider').length > 0) {
    swiper.update();
  }
});

$('#galeria-detalle .boton-pantalla-normal').click(() => {
  cerrarGaleria();
});

$('.boton-orden, #modal-orden .sombra-fondo, #modal-orden .cerrar').click(() => {
  $('#modal-orden').toggleClass('abierto');
  $('body').toggleClass('modal-abierto');
});

$('.boton-login, #modal-login .sombra-fondo, #modal-login .cerrar').click(() => {
  $('#modal-login').toggleClass('abierto');
  $('body').toggleClass('modal-abierto');
});

$('.boton-whatsapp, #modal-solicitud-whatsapp .sombra-fondo, #modal-solicitud-whatsapp .cerrar').click(() => {
  $('#modal-solicitud-whatsapp').toggleClass('abierto');
  $('body').toggleClass('modal-abierto');
});

$('.boton-compartir, #modal-compartir .sombra-fondo, #modal-compartir .cerrar').click(() => {
  $('#modal-compartir').toggleClass('abierto');
  $('body').toggleClass('modal-abierto');
});

$('.boton-filtrar, #anuncios-listado .filtros .cerrar').click(() => {
  $('#anuncios-listado .filtros').toggleClass('abierto');
  $('body').toggleClass('filtros-abierto');
});

$('.contenedor-select .dropdown-menu .opcion').click(function() {
  $(this).closest('.contenedor-select').children('select').val($(this).data('valor'));
  $(this).closest('.contenedor-select').children('select').change();
});

$('.abrir-cerrar-menu, header .sombra-fondo').click(() => {
  $('.menu-lateral').toggleClass('abierto');
  $('body').toggleClass('menu-abierto');
});

$('.boton-favorito').click(() => {
  $.ajax({
    url: '/detalle/marcarfavorito/' + $('.boton-favorito').data('anuncio'),
    type: 'post',
    dataType: 'json',
    success: function(respuesta) {
      if (respuesta) {
        $('.boton-favorito').html('<svg class="icono"><use xlink:href="/icon/ibercoches.svg#star-active"></use></svg>');
        creaerToast('AÃ±adido a Favoritos correctamente');
      } else {
        $('.boton-favorito').html('<svg class="icono"><use xlink:href="/icon/ibercoches.svg#star"></use></svg>');
        creaerToast('Se ha borrado de tus Favoritos');
      }
    }
  });
});


$('.boton-alerta').click(() => {
  $.ajax({
    url: '/ajax/crearAlerta',
    type: 'post',
    dataType: 'json',
    data: {url: window.location.href},
    success: function(respuesta) {
      if (respuesta) {
        creaerToast('Alerta creada correctamente');
      } else {
        creaerToast('Error al crear alerta');
      }
    }
  });
});

$('.boton-alerta-detalle').click(() => {
  $.ajax({
    url: '/ajax/crearAlertaAnuncio/'+ $('.boton-favorito').data('anuncio'),
    type: 'post',
    dataType: 'json',
    success: function(respuesta) {
      if (respuesta) {
        creaerToast('Alerta creada correctamente');
      } else {
        creaerToast('Error al crear alerta');
      }
    }
  });
});

/*
$(".aceptar-cookies").click(function() {
	document.cookie = "cookies_aceptadas=aceptada; expires=" + new Date(new Date().getTime() + 7776000000);

	if (GetCookie("cookies_aceptadas") == 1) { $('#banner-cookies').hide(); }
});*/

/* Funciones */
function cerrarGaleria() {
  $('#galeria-detalle .contenido').removeClass('pantalla-completa');
  $('body').removeClass('galeria-abierta');
  $('#acciones-detalle').removeClass('galeria');
  if ($('.gallery-slider').length > 0) {
    swiper.update();
  }
}

function alturaComentariosDetalle() {
  const div_comentarios = $('#otra-informacion-detalle .comentarios .valor');
  const div_height = div_comentarios.height();

  let line_height = 1;
  let maximo_lineas = 1;
  if (viewport < 992) {
    line_height = 18;
    maximo_lineas = 5;
    const min_height = (line_height * maximo_lineas) + (line_height * 2);
    if (min_height > div_height) {
      $('#otra-informacion-detalle .contenido .comentarios .mostrar-mas').hide();
    }
  }
}

function alturaEquipamientoDetalle() {
  const div_equipamiento = $('#otra-informacion-detalle .equipamiento .tipos-equipamiento');
  const div_height = div_equipamiento.height();

  let line_height = 1;
  let maximo_lineas = 1;
  if (viewport < 992) {
    line_height = 18;
    maximo_lineas = 5;
    
    const min_height = (line_height * maximo_lineas) + (line_height * 2);
    if (min_height > div_height) {
      $('#otra-informacion-detalle .contenido .equipamiento .mostrar-mas').hide();
    }
  }
}

function creaerToast(texto) {
  const id = Math.floor(Math.random() * 100000000000000000);
  $.ajax({
    url: '/ajax/toast/',
    type: 'post',
    dataType: 'html',
    data: {id: id, texto: texto},
    success: function(html) {
      $('#toasts').append(html);
      $('#toast' + id).toast('show');
    }
  });
}

function GetCookie(name) {
	var arg = name + "=", alen = arg.length, clen = document.cookie.length, i = 0;
	while (i < clen) {
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg) return "1";
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) break;
	}
	return null;
}

/* Mouse UP */
$("html").on("mouseup", function (e) {
  var l = $(e.target);
  if (l[0].tagName !== 'svg' &&Â l[0].tagName !== 'use'){
    if (l[0].className.indexOf("popover") == -1) {
      $(".popover").each(function () {
        $(this).popover("hide");
      });
    }
  }
});


/* SCROLL CABECERA */
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

    if (prevScrollpos >= currentScrollPos) {
      document.getElementById("navCabecera").style.top = "0";
    } else {
      if(currentScrollPos > 50)
    {
      var altura_cabecera1 = -1*document.getElementById("navCabecera1").clientHeight + "px";
      document.getElementById("navCabecera").style.top = altura_cabecera1;
    }
    }
    prevScrollpos = currentScrollPos;
}