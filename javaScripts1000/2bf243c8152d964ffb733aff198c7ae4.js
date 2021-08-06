// cienradios-radios-home.js

var crApp   = Cienradios || {};

$(document).ready(function(){
    liveRadios();
    setInterval(function(){
        liveRadios();
    }, 5000);
});

function liveRadios(){

    var dias = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        date = new Date(),
        hoy = dias[date.getDay()],
        horas = date.getHours(),
        minutos = date.getMinutes();

    var programas = ( typeof grillaProgramacion === 'undefined' || grillaProgramacion === null ? false : grillaProgramacion  );
    if ( programas === false || typeof programas !== 'object'  ) {
        programas = crApp.liveRadios.ready();
    }


    if ( programas !== false ) {

        // Loop Programas Radios OBJ
        $.each(programas, function(i,e){
            var id_radio = e.idEncoder;
            var radio_programas = e.programas;

            // Loop Programas de Radio ID
            $.each(radio_programas, function(k,v){
                // Verifico dia
                if (v.diasSemana.indexOf(hoy) >= 0  ) {
                    var inicio = v.horarioInicio,
                        fin    = v.horarioFin;

                    inicioMinutos = parseInt(inicio.substr(3,2));
                    inicioHoras = parseInt(inicio.substr(0,2));

                    finMinutos = parseInt(fin.substr(3,2));
                    finHoras = parseInt(fin.substr(0,2));

                    current_time = new Date( date.getFullYear(), date.getDate(), date.getDay(), horas, minutos );
                    inicio_time  = new Date( date.getFullYear(), date.getDate(), date.getDay(), inicioHoras, inicioMinutos );
                    fin_time     = new Date( date.getFullYear(), date.getDate(), date.getDay(), finHoras, finMinutos );

                    // Verifico que este dentro del horario del programa para imprimirlo
                    if ( (current_time-inicio_time) >= 0 && (current_time-fin_time) <= 0 ) {

                        var nombre = v.nombre,
                            descripcion = v.descripcion,
                            programa_id = v.id,
                            imagen      = 'https://reproductor.cienradios.com.ar/player/Player/ImagenProgramaV2/'+programa_id+'/650';

                        // Verifiy content
                        current_img         = $('.live-radios-item[data-id="'+id_radio+'"] .live-radios-item-img').attr("src");
                        current_nombre      = $('.live-radios-item[data-id="'+id_radio+'"] .live-radios-item-title').html();
                        current_descripcion = $('.live-radios-item[data-id="'+id_radio+'"] .live-radios-item-host').html();
                        if ( current_img !== imagen || current_nombre !== nombre || current_descripcion !== descripcion ) {
                            $('.live-radios-item[data-id="'+id_radio+'"] .live-radios-item-img').attr("src", imagen );
                            $('.live-radios-item[data-id="'+id_radio+'"] .live-radios-item-title').html(nombre);
                            $('.live-radios-item[data-id="'+id_radio+'"] .live-radios-item-host').html(descripcion);
                        }

                    }
                }

            });
        });
    }
}
