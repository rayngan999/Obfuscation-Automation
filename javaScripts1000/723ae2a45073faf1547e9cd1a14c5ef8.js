// // cienradios-home-discover-music.js
( function(){


    var discoverMusic_settings = {
        // Texts
        ahoraResults_title: 'Ahora suena:',
        radiosResults_title: 'Radios:',
        errorMessage_noradios: 'No se encontraron radios en esta categorÃ­a. Por favor selecione otra.',
        active_className: 'active',
        skeleton_max: 20,
        skeletonEl: '<a href="" target="_blank" class="radio-item skeleton"></a>',
        radios_item_max: 20,
        radioEl_format: '<a href="%s" target="_blank" class="radio-item lazyBackground" data-id="%s" data-nombre="%s" title="%s" style="background-color:#%s" data-original="https://reproductor.cienradios.com.ar/player/Player/ShowImageMobileJpg/%s/250" alt="%s" onclick="javascript:ga(\'send\', \'event\', \'Emisoras\', \'Radio\', \'%s\', \'%s\');">%s</a>',
        searchRadios_errorText: 'No se encontraron radios.'
    };

    var discoverMusic = {
        // Config
        mainCointainer: document.querySelector('.music-discover'),
        categoryCointainer: null,
        categoryButtons: null,
        radiosContainer: null,
        searchContainer: null,
        search_close: null,
        search_input: null,
        search_submit: null,
        search_form: null,
        categoryEl: null,
        href: window.location.host,
        sitio: null,
        subdominio: null,
        api_url: null,

        init: function(){

            this.api_url = 'https://api.cienradios.com';

            this.sitio = this.href.split('.');
            this.subdominio = this.sitio.shift();

            // Remove hidden class to avoid flickers
            removeClass(this.mainCointainer, 'hidden');

            this.categoryCointainer = this.mainCointainer.querySelector('.music-discover--categories-container');
            this.categoryButtons = this.categoryCointainer.querySelectorAll('.category-button');
            this.radiosContainer = this.mainCointainer.querySelector('.music-discover--radios');
            this.searchContainer = this.radiosContainer.querySelector('.search-block');
            this.search_close = this.mainCointainer.querySelector('.music-discover--search-close');
            this.search_input = this.mainCointainer.querySelector('.music-discover--title');
            this.search_submit = this.mainCointainer.querySelector('.music-discover--search-submit');
            this.search_form = this.mainCointainer.querySelector('.music-discover--search-form');

            // Setup Category Scroll
            Ps.initialize(this.categoryCointainer, { theme: 'minimalis' } );
            // Events for category buttons
            this.categoryButtons.forEach(function(value, index){
                detectEventClickOrTouch(value, categoryAction);
            });

            // Setup Recomended Scroll
            var recomendedContainer = this.radiosContainer.querySelectorAll('.recomended-block .recomended-block--content');
            recomendedContainer.forEach(function(value){
                Ps.initialize(value, {
                    theme: 'minimalis',
                    suppressScrollY: 'true',
                    swipeEasing: false
                });
            });

            // Search Binds
            // close btn
            detectEventClickOrTouch(this.search_close, cleanSearch);
            // submit
            detectEventClickOrTouch(this.search_submit, submitSearch);
            //input
            this.search_input.addEventListener('keydown', inputSearch);
            // form control
            this.search_form.addEventListener('submit', formSearch);
        }

    };

    var cleanSearch =  function cleanSearch(e){
        e.preventDefault();
        //clean
        discoverMusic.search_input.value = '';
        discoverMusic.searchContainer.innerHTML = '';
        removeClass(discoverMusic.searchContainer, discoverMusic_settings.active_className);
        // active recomended
        discoverMusic.categoryButtons.forEach(function(value){
            if (value.getAttribute('data-category')==='0') {
                addClass(value, discoverMusic_settings.active_className);
            }
        });
        var recomendedBlock = discoverMusic.radiosContainer.querySelector('.recomended-block');
        addClass(recomendedBlock, discoverMusic_settings.active_className);
        // de-activate search close btn
        removeClass(discoverMusic.search_close, discoverMusic_settings.active_className);
    };

    var submitSearch = function submitSearch(e) {
        e.preventDefault();
        // discoverMusic.search_form.submit();
        formSearch();
    };

    var inputSearch = function inputSearch(e) {
        if (e.keyCode === 13) {
            // discoverMusic.search_form.submit();
            formSearch();
            e.preventDefault();
            return;
        }
    };

    var formSearch = function formSearch(){
        // console.log(e);
        // e.preventDefault();
        var val = discoverMusic.search_input.value;
        if (val==='') {
            discoverMusic.search_input.focus();
            removeClass(discoverMusic.search_close, discoverMusic_settings.active_className);
        } else {
            ga('send', 'event', 'Emisoras', 'Buscar', val);
            var container = discoverMusic.searchContainer;
            var loader = document.createElement('div');
            container.appendChild(loader);
            addClass(loader, '.loading.white');
            // reset html
            container.innerHTML = '';

            // remove actives blocks
            var currentRadiosActive = discoverMusic.radiosContainer.querySelector('.'+ discoverMusic_settings.active_className);
            removeClass(currentRadiosActive, discoverMusic_settings.active_className);
            var currentCategoryActive = discoverMusic.categoryCointainer.querySelector('.'+ discoverMusic_settings.active_className);
            if (currentCategoryActive) {
                removeClass(currentCategoryActive, discoverMusic_settings.active_className);
            }
            // activate results box
            addClass(container, discoverMusic_settings.active_className);
            // activate clean search btn
            addClass(discoverMusic.search_close, discoverMusic_settings.active_className);

            searchRadios(val, container);
            searchAhora(val, container);
            addClass(loader, 'loaded');
        }
    };

    var categoryAction = function categoryAction(e){
        e.preventDefault();
        cleanSearch(e);
        var category = (typeof this.getAttribute('data-category') !== 'undefined' ? this.getAttribute('data-category') : false );

        if (category) {
            var categoryName = this.innerText;
            ga('send', 'event', 'Emisoras', 'Categoria', categoryName, category);
            var parentNode = this.offsetParent,
            currentActive = parentNode.querySelectorAll('.'+ discoverMusic_settings.active_className);
            // Remove current Btn Active and set the new one
            if (currentActive) {
                currentActive.forEach(function(value){
                    removeClass(value, discoverMusic_settings.active_className);
                });
            }
            addClass(this, discoverMusic_settings.active_className);

            var categoryEl = discoverMusic.radiosContainer.querySelector('.category_'+ category),
            categoryHolder = discoverMusic.radiosContainer.querySelector('.category_holder.'+ discoverMusic_settings.active_className);
            // Verify if element exist or create
            if (categoryEl === null) {
                var categoryEl_new = document.createElement('div');
                categoryEl_new.className = 'music-discover--radios-info category_holder category_'+category;
                discoverMusic.radiosContainer.appendChild(categoryEl_new);
                categoryEl = discoverMusic.radiosContainer.querySelector('.category_'+ category);
            }
            discoverMusic.categoryEl = categoryEl;
            // Verify if active
            if (categoryEl.classList) {
                if (categoryEl.classList.contains(discoverMusic_settings.active_className)) {
                    console.log('Selected category already active.');
                    setUpScroll(categoryEl);
                }
            }
            // Set Category data
            categoryEl.setAttribute('data-categoryId',category);

            // Get data if category != 0
            if (category !== '0') {
                generateRadios(category, categoryEl);
            }

            var categoryEl_active = categoryEl.parentNode.querySelectorAll('.'+ discoverMusic_settings.active_className);
            if (categoryEl_active) {
                categoryEl_active.forEach(function(value){
                    removeClass(value, discoverMusic_settings.active_className);
                });
            }
            addClass(categoryEl, discoverMusic_settings.active_className);
        }
    };

    var generateRadios = function generateRadios(category, categoryEl){
        // skeelon data as placeholder
        var skeleton_max = discoverMusic_settings.skeleton_max,
        skeleton_html = '',
        skeletonEl = discoverMusic_settings.skeletonEl;
        for (var i = 0; i < skeleton_max; i++) {
            skeleton_html += skeletonEl;
        }
        categoryEl.innerHTML = skeleton_html;

        var jsonUrl = getCategoriasConRadiosById+category;
        getJson(jsonUrl, successRadiosData, errorRadiosData );
    };

    var errorRadiosData = function errorRadiosData() {
        console.warn('Error al obtener radios de categoria');
        var error_msj = '<div class="message error">'+ discoverMusic_settings.errorMessage_noradios +'</div>';
        discoverMusic.categoryEl.innerHTML = error_msj;
    };

    var successRadiosData = function successRadiosData(args) {
        var data = args.data;
        console.log('data', data);
        if (data.length===0) {
            errorRadiosData();
            return;
        }
        var radios_item_max = discoverMusic_settings.radios_item_max,
        radios = data[0].radios,
        radios_amount = radios.lenght,
        radios_html = '';
        if (radios_item_max !== false && radios_item_max < radios_amount) {
            radios_item_max = radios_amount;
        }
        var categoryEl = discoverMusic.categoryEl;
        // reset html
        categoryEl.innerHTML = '';
        // create node radios-info--content
        var categoryEl_content = document.createElement('div');
        categoryEl_content.className = 'music-discover--radios-info--content';
        categoryEl.appendChild(categoryEl_content);

        radios.forEach(function(value, index){
            if (index > radios_item_max) { return; }
            var idRadio = value.idRadio,
            fotoColor = value.fotoColor,
            nombre = value.nombre,
            url = urlPlayer+value.urlPlayer,
            sitioPertenencia = value.sitioPertenencia;

            var radioEl_format = discoverMusic_settings.radioEl_format;
            radios_html = sprintf(radioEl_format, url, idRadio, nombre, nombre, fotoColor, idRadio, nombre, nombre, idRadio, nombre);

            categoryEl_content.insertAdjacentHTML('beforeend', radios_html);
        });

        addClass(categoryEl,'data-loaded');
        // Add lazyload background image
        setUpLazy(categoryEl_content, '.lazyBackground');
        // Scroll
        // setUpScroll(categoryEl);
    };

    var searchRadiosLoading = function searchRadiosLoading(container){
        console.log('searchRadiosLoading', container);
        container.innerHTML = '<div class="loading white"></div>';
    };

    var searchRadios = function(input, container){
        var jsonUrl = 'https://reproductor.cienradios.com.ar/player/apiv3/GetRadiosSimplificado';
        if ('ar' === discoverMusic.subdominio || 'uy' === discoverMusic.subdominio) {
            jsonUrl = 'https://reproductor.cienradios.com.ar/player/apiv3/'+discoverMusic.subdominio+'/GetRadiosSimplificado';
        }
        // searchRadiosLoading(container);

        var args = {
            input: input,
            container: container
        };
        getJson(jsonUrl, searchRadiosSuccess, searchRadiosError, args);
    };

    var searchRadiosSuccess = function searchRadiosSuccess(args){
        var input = ( args.input ? args.input : null),
        container = (args.container ? args.container : null),
            data = args.data;

        setData('radios', data, input, container);
    };

    var searchRadiosError = function searchRadiosError(args) {
        var container = (args.container ? args.container : null);
        if (container) {
            var html = sprintf('<div class="message error">%s</div>', discoverMusic_settings.searchRadios_errorText);
            container.innerHTML = html;
        } else {
            console.warn('searchRadiosError, no container to render error.');
        }
    };


    var searchAhora = function(input, container){
        var jsonUrl = discoverMusic.api_url + '/radios/search/'+ input +'/';
        var ajaxTime = new Date().getTime();
        var args = {
            input: input,
            container: container,
            time: ajaxTime
        };
        getJson(jsonUrl, searchAhoraSuccess, searchAhoraError, args);
    };

    var searchAhoraSuccess = function searchAhoraSuccess(args){
        var input = ( args.input ? args.input : null),
            container = (args.container ? args.container : null),
            data = args.data,
            time = args.time;

        var totalTime = new Date().getTime()-time;
        console.log('Search Ahora - response: '+totalTime);
        setData('ahora', data, input, container);
    };

    var searchAhoraError = function searchAhoraError(args){
        var container = (args.container ? args.container : null);
        if (container) {
            var html = sprintf('<div class="message error">%s</div>', discoverMusic_settings.searchRadios_errorText);
            container.innerHTML = html;
        } else {
            console.warn('searchRadiosError, no container to render error.');
        }
    };

    var setData = function(type, data, query, container){
        var items = '',
        countItems = 0,
        html = '',
        html_skeleton = '',
        no_results_html = '',
        searchTitle = '',
        searchContent = '';

        switch (type) {
            case 'radios':
            html = '';
            if (data.length>0) {
                data.forEach(function(radio, index){
                    if (searchNeedle(radio.nombre, query)) {
                        var urlReproductor = radio.urlReproductor.split('/'),
                        url = 'https://ar.cienradios.com/player/';
                        if ( 'ar' === discoverMusic.subdominio || 'uy' === discoverMusic.subdominio ) {
                            url = 'https://'+discoverMusic.subdominio+'.cienradios.com/player/';
                        }
                        url += urlReproductor.pop();
                        // si estoy en uy y el sitio de pertenencia de la radio es AR lo le muestro una bandera de AR
                        var sitioPertenencia = '';
                        if ( 'uy' === discoverMusic.subdominio ) {
                            sitioPertenencia += '<span class="sitioPertenencia '+ radio.sitioPertenencia +'"></span>';
                        }

                        var html_skeleton = '<a href="%s" data-id="%s" target="_blank" class="radio-item lazyBackground" data-nombre="%s" title="%s" style="background-color:#%s" data-original="https://reproductor.cienradios.com.ar/player/Player/ShowImageMobileJpg/%s/250"><span class="nombre">%s</span>%s</a>';
                        html += sprintf(html_skeleton, url, radio.id, radio.nombre, radio.nombre, radio.fotoColor, radio.id, highlightResult(radio.nombre, query), sitioPertenencia);

                        countItems+=1;
                    }
                });
                searchTitle = document.createElement('div');
                searchTitle.className = 'search-block--title';
                searchTitle.innerHTML = discoverMusic_settings.radiosResults_title + ' <span>'+ countItems +'</span>';
                container.appendChild(searchTitle);
                searchContent = document.createElement('div');
                searchContent.className = 'search-block--content content-radios';
                container.appendChild(searchContent);
                if (countItems>0) {
                    searchContent.innerHTML = html;
                    // activate container
                    addClass(container, discoverMusic_settings.active_className);
                    // add lazy
                    setUpLazy(searchContent, '.lazyBackground');
                    setUpScroll(searchContent, {
                        theme: 'minimalis',
                        suppressScrollY: 'true',
                        swipeEasing: false }
                    );
                } else {
                    no_results_html = sprintf('<div class="message error">%s</div>', discoverMusic_settings.searchRadios_errorText);
                    searchContent.innerHTML = no_results_html;
                }

            } else {
                console.warn('setData Radios, no data given');
                return;
            }
            break;
            case 'ahora':
            html ='';
            if ( data.length>0 ) {
                data.forEach(function(radio, index){
                    if (searchNeedle(radio.titulo, query)) {
                        var idRadio = (typeof radio.id_mount !== 'undefined' ? radio.id_mount : radio.id),
                        nombre = radio.titulo,
                        urlPlayer = radio.mount_parsed,
                        fotoColor = '333';
                        if(nombre!==''){
                            var url = 'https://ar.cienradios.com/player/';
                            if ( 'ar' === discoverMusic.subdominio || 'uy' === discoverMusic.subdominio ) {
                                url = 'https://'+discoverMusic.subdominio+'.cienradios.com/player/';
                            }
                            url += urlPlayer;

                            html_skeleton = '<a href="%s" data-id="%s" target="_blank" class="radio-item lazyBackground" data-nombre="%s" title="%s" style="background-color:#%s" data-original="https://reproductor.cienradios.com.ar/player/Player/ShowImageMobileJpg/%s/250">%s</a>';

                            html += sprintf(html_skeleton, url, idRadio, nombre, nombre, fotoColor, idRadio, highlightResult(nombre, query) );

                            countItems+=1;
                        }
                    }
                });

                searchTitle = document.createElement('div');
                searchTitle.className = 'search-block--title';
                searchTitle.innerHTML = discoverMusic_settings.ahoraResults_title + ' <span>'+ countItems +'</span>';
                container.appendChild(searchTitle);
                searchContent = document.createElement('div');
                searchContent.className = 'search-block--content content-ahora';
                container.appendChild(searchContent);
                if (countItems>0) {
                    searchContent.innerHTML = html;
                    // activate container
                    addClass(container, discoverMusic_settings.active_className);
                    // add lazy
                    setUpLazy(searchContent, '.lazyBackground');
                    setUpScroll(searchContent, {
                        theme: 'minimalis',
                        suppressScrollY: 'true',
                        swipeEasing: false }
                    );
                } else {
                    no_results_html = sprintf('<div class="message error">%s</div>', discoverMusic_settings.searchRadios_errorText);
                    searchContent.innerHTML = no_results_html;
                }

            }
            break;
            default:
            return;
        }

    };


    var setUpLazy = function setUpLazy(container, element) {
        element = typeof element !== 'undefined' ? element : '';
        var myLazyLoad = new LazyLoad({
            container: container,
            elements_selector: element
        });
    };

    var setUpScroll = function setUpScroll(el, options){
        options = options ? options : '';
        if (el) {
            Ps.initialize(el, options );
        }
    };


    /* Helpers */

    var highlightResult = function(result, query){
        var regex = new RegExp( '(' + query + ')', 'gi' );
        return result.replace( regex, "<mark>$1</mark>" );
    };

    var searchNeedle = function(stack, needle){
        var replace = {
            'Ã¡': 'a',
            'Ã©': 'e',
            'Ã­': 'i',
            'Ã³': 'o',
            'Ãº': 'u'
        };
        needle = needle.toLowerCase();
        stack = stack.toLowerCase();

        String.prototype.replaceAll = function(search, replacement) {
            var target = this;
            return target.replace(new RegExp(search, 'g'), replacement);
        };
        function replaceAll(str, map){
            for(var key in map){
                str = str.replaceAll(key, map[key]);
            }
            return str;
        }
        needle = replaceAll(needle, replace);
        stack = replaceAll(stack, replace);

        if (stack.search(needle)>=0) {
            return stack;
        }else{
            return false;
        }
    };

    var sprintf = function sprintf(format) {
        var args = Array.prototype.slice.call(arguments);
        args.map(function(value, index){
            if (index===0) { return; }
            format = format.replace(/%s/, args[index]);
        });
        return format;
    };

    var getJson = function getJson(url, callback, errorCallback, args) {
        args = args ? args : {};
        var data;
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                // Success!
                data = JSON.parse(request.responseText);
                args.data = data;
                callCallback(callback, args );
            } else {
                // We reached our target server, but it returned an error
                callCallback(errorCallback, args);
            }
        };
        request.onerror = function() {
            callCallback(errorCallback, args);
        };
        request.send();
    };

    var supportsClassList = !!document.body.classList;

    var addClass = function addClass(element, className) {
        if (supportsClassList) {
            element.classList.add(className);
            return;
        }
        element.className += (element.className ? " " : "") + className;
    };

    var removeClass = function removeClass(element, className) {
        if (supportsClassList) {
            element.classList.remove(className);
            return;
        }
        element.className = element.className.replace(new RegExp("(^|\\s+)" + className + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
    };

    var callCallback = function callCallback(callback, argument) {
        if (callback) {
            callback(argument);
        }
    };

    var isTouchDevice = function isTouchDevice(){
        return true === ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
    };

    var detectEventClickOrTouch = function detectEventClickOrTouch(element, functionToCall){
        // if(isTouchDevice()){
        // element.addEventListener("touchend", functionToCall);
        // } else{
        element.addEventListener("click", functionToCall);
        // }
    };

    discoverMusic.init();
}());
