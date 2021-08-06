ï»¿function TransformePagerToMobile() {
    // cria o container

    $('#mobilePagerWrap').remove();

    $('.pager:last').after('<div id="mobilePagerWrap" style="clear:both"></div>');

    // cria anterior e proximo
    $('.pager:last .anterior, .pager:last .proximo').each(function () {
        var myClass = $(this).text();
        if ($(this).hasClass('pgEmpty')) {
            myClass += ' pgEmpty';
        }
        $('#mobilePagerWrap').append('<span class="' + myClass + '">' + $(this).text() + '</span>');
    });

    // cria o evento para anterior e proximo
    $('#mobilePagerWrap span').click(function () {
        var opt = $('#mobilePagerWrap option:selected');
        opt.removeAttr('selected');

        if ($(this).hasClass('anterior')) {
            opt.prev().attr('selected', 'selected');
        } else {
            opt.next().attr('selected', 'selected');
        }
        $('#mobilePagerWrap select').change();
    });

    // cria o dropdown
    $('#mobilePagerWrap .anterior').after('<select></select>');

    // captura a string da funcao e o numero total de paginas
	var str = $('.sub:first').next().text();
	
	var fnPager = str.search(/PageClick_/i);
	fnPager = str.substr(fnPager, 26);
	fnPager = fnPager.split('(')[0];

	pgcount = str.substr(320, 20);
	pgcount = pgcount.split('=')[1];
	pgcount = parseInt($.trim(pgcount));
	
	var pgcurrent = $('.pager:last li.pgCurrent').text();
	

    // cria os itens do dropdown
	for (i = 1; i <= pgcount; i++) {
        if (i == pgcurrent) {
            var opt = '<option selected="selected" pgnumber="' + i + '">PÃÂ¡gina ' + i + '</option>';
        } else {
            var opt = '<option pgnumber="' + i + '">PÃÂ¡gina ' + i + '</option>';
        }
        $('#mobilePagerWrap select').append(opt);
	}
	
    // cria o evento para os itens do dropdown
    $('#mobilePagerWrap select').change(function () {
		eval(fnPager + "('" + $(this).find(':selected').attr('pgnumber') + "');");
    });
}
