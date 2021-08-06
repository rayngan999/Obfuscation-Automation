/*
 Cienradios JS  | v 0.0.5
 DocumentaciÃ³n: http://documentacion.rmsa.com/books/sistemas-digitales-cienradios-v2/page/cienradios-js
*/

var Cienradios = Cienradios || {
    debugger: true,

    is_mobile: false,

    url_base: '',
    api_url: '',
    sls_url: '',
    ga_id: '',
    fb_app_id: '',

    comscore_c2: '',
    comscore_ns_site: '',
    comscore_name: '',
    cxense_id: '',
    cs_name: '',
    url_name: '',

    timeCollector: 1000,
    timeQuery: 30000, // 30 segundos
    sessionStorage: '',
    localStorage: '',

    init: function () { },
    onReady: function () {
        this.url_base = jQuery('meta[name="url_base"]').attr('content');
        this.api_url = jQuery('meta[name="api:url"]').attr('content');
        this.sls_url = jQuery('meta[name="sls:url"]').attr('content');

        this.ga_id = jQuery('meta[name="ga:id"]').attr('content');
        this.fb_app_id = jQuery('meta[name="fb:app_id"]').attr('content');

        this.comscore_c2 = jQuery('meta[name="comscore:c2"]').attr('content');
        this.comscore_ns_site = jQuery('meta[name="comscore:ns_site"]').attr('content');
        this.comscore_name = jQuery('meta[name="comscore:name"]').attr('content');
        this.cxense_id = jQuery('meta[name="cxense:id"]').attr('content');
        cs_name = this.comscore_name.split('.');
        this.url_name = cs_name[1];

        this.sessionStorage = typeof sessionStorage === 'object' ? true : false;
        this.localStorage = typeof localStorage === 'object' ? true : false;

        // this.iRadios_enabled = jQuery('meta[name="cienradios:iradios.enabled"]').attr('content');

        // if (this.iRadios_enabled === '1') {
        //     console.log('LO LLAMO DESDE CIENRADIOS-MAIN.JS');
        //     Cienradios.radiosCollector.collect();
        //     Cienradios.radiosCollector.setRadio();
        //     // console.log('radiosCollector ready');
        // } else {
        //     // OnDemand / se inicia desde otros scripts del documento
        // }

        Cienradios.liveRadios.ready();
    },
    onScroll: function () { },
    onResize: function () { },
    event: function () { },
    isMobile: function () {
        if ($('html').hasClass('mobile') || $('html').hasClass('phone')) {
            this.is_mobile = true;
        }
        return this.is_mobile;
    },
    visible: function (element, check) {
        // if element is visible
        return element.visible();
    },
    hasFocus: function () {
        return document.hasFocus();
    },

    debug: function (where, error_msg) {
        if (Cienradios.debugger) {
            // console.log( where, 'Msg '+error_msg );
        }
    }
};

// Recolecta los elementos que tiene que actualizarse con la info de las radios
Cienradios.radiosCollector = {
    // Obj donde se guardarÃ¡n las radios
    radios: {},
    defaultStorage: 'radiosCollector',
    collect: function (flush) {
        if (flush !== 'undefined' && flush === true) {
            clearInterval(collectInterval);
        }
        var collectInterval = setInterval(function () {
            // Busco todos los elementos que tenga que agregar la informaciÃ³n
            $('[rel="setRadio"]').each(function () {
                var id = $(this).data('radio-id'),
                    selector = $(this).data('radio-selector'),
                    el = $(this);
                // Verifico la visibilidad del elemento
                if (Cienradios.visible(el)) {
                    // Envio el ID y SELECTOR para agregar la radio
                    Cienradios.radiosCollector.addRadio(id, selector);
                } else {
                    Cienradios.radiosCollector.removeRadio(id);
                }
            });
        }, Cienradios.timeCollector);

        // Save this.radios OBJ IN sessionStorage
        Cienradios.radiosCollector.setStorage();

        return collectInterval;
    },
    addRadio: function (id, selector) {
        // Verifico si el ID de la radio estÃ¡ en el objeto de datos
        if (Cienradios.radiosCollector.radios[id] !== 'undefined') {
            Cienradios.radiosCollector.radios[id] = [selector];
        } else {
            Cienradios.radiosCollector.radios[id].push(selector);
        }
    },
    removeRadio: function (id) {
        if (Cienradios.radiosCollector.radios[id] !== 'undefined') {
            delete Cienradios.radiosCollector.radios.id;
        }
    },
    setRadio: function () {
        // Verifico si ya hay un intervalo corriendo
        if (queryInterval) {
            Cienradios.debug('setRadio', 'queryInterval ya esta declarado y corriendo.');
            return false;
        }

        var queryInterval = setInterval(function () {
            radios_ids = '';

            // Loop radios{} get IDs
            $.each(Cienradios.radiosCollector.radios, function (i, e) {
                var el = $('' + e);
                if (Cienradios.visible(el)) {
                    radios_ids += i + ',';
                }
            });

            query = false;
            // Verify & Run Query
            if (radios_ids !== '') {
                query = Cienradios.radiosCollector.getQuery(radios_ids);
            }

            // Check Updated Times of Radios
            if (query !== false) {
                // Set Data if update time differ, PUT radio data by id IN selector
                for (var i = 0; i < query.length; i++) {
                    if (query[i]) {
                        if (query[i].id in Cienradios.radiosCollector.radios) {
                            key = query[i].id;
                            selector = Cienradios.radiosCollector.radios[key];
                            el = $('' + selector);
                            cr4seg = query[i].titulo.match(/CR4SEG/gim);
                            updated = el.data('metadata_updated');

                            if (!cr4seg && updated !== query[i].metadata_updated) {
                                // Update
                                el.html(query[i].titulo);
                                el.data('metadata_updated', query[i].metadata_updated);
                            }
                        }
                    }
                }
                // console.log(query, Cienradios.radiosCollector.radios);
            } else {
                Cienradios.debug('getQuery is false');
            }
        }, Cienradios.timeQuery);

        return queryInterval;
    },
    getQuery: function (radios_ids) {
        if (radios_ids !== false && radios_ids !== '') {
            var response = false;
            $.ajax({
                url: Cienradios.sls_url + '/radios/byID/' + radios_ids + '/',
                type: 'GET',
                async: false,
                dataType: 'JSON',
                beforeSend: function () {
                    // Start Loading Animation
                },
                success: function (data) {
                    // Stop Loading Animation

                    // Work with data
                    if (Object.keys(data).length > 0) {
                        response = data;
                    } else {
                        Cienradios.debug('Bad Data Ajax Response', data);
                        response = false;
                    }
                },
                error: function (data) {
                    // Stop Loading Animation

                    // Log Error
                    Cienradios.debug(this, 'error: ' + data);
                    response = false;
                }
            });

            return response;
        } else {
            Cienradios.debug(this, 'wrong parameters');
            return false;
        }
    },
    setStorage: function () {
        // Store Last Collection
        if (Cienradios.sessionStorage) {
            var radios = JSON.stringify(this.radios);
            try {
                sessionStorage.setItem(Cienradios.radiosCollector.defaultStorage, radios);
            } catch (e) {
                return false;
            }
        } else if (Cienradios.localStorage) {
            try {
                localStorage.setItem(Cienradios.radiosCollector.defaultStorage, radios);
            } catch (e) {
                return false;
            }
        } else {
            return false;
        }
    },
    getStorage: function () {
        if (Cienradios.sessionStorage) {
            var radios = sessionStorage.getItem(Cienradios.radiosCollector.defaultStorage);
            return JSON.parse(radios);
        } else if (Cienradios.localStorage) {
            var radios = localStorage.getItem(Cienradios.radiosCollector.defaultStorage);
            return JSON.parse(radios);
        } else {
            return false;
        }
    }
};

Cienradios.liveRadios = {
    // url_liveRadios: 'https://reproductor.cienradios.com.ar/player/apiV3/GetGrillaProgramacion?idsRadios=602,824,825,938,956,959,1006,1007,1058,1061,1062,1068,1070,1072,1077,1082,1184,1403,1405,1421,1422,1423,1425',
    url_liveRadios:
        'https://reproductor.cienradios.com.ar/player/apiv3/GetGrillaProgramacion?idsRadios=' +
        jQuery('meta[name="cienradios:ids_radios_slider"]').attr('content'),
    expire: '', // md5 para comparar
    subdomain: '',
    storageKey: '', //this.subdomain + '_programasTodos',
    programasTodos: {},

    getProgramas: function () {
        $.ajax({
            url: Cienradios.liveRadios.url_liveRadios,
            type: 'GET',
            dataType: 'json',
            async: false,
            beforeSend: function () {
                // Start Loading Animation
            },
            success: function (data) {
                // Stop Loading Animation

                if (Object.keys(data).length > 0) {
                    Cienradios.liveRadios.programasTodos = data;

                    if (Cienradios.localStorage) {
                        Cienradios.liveRadios.setStorage(data, Cienradios.liveRadios.storageKey, 'local');
                    } else if (Cienradios.sessionStorage) {
                        Cienradios.liveRadios.setStorage(data, Cienradios.liveRadios.storageKey, 'session');
                    }

                    return data;
                } else {
                    return false;
                }
            },
            error: function (error) {
                // Stop Loading Animation

                Cienradios.debug('error Cienradios.liveRadios.getProgramas ', error);
                return false;
            }
        });
    },
    checkStorage: function () {
        storage = false;
        if (Cienradios.localStorage) {
            if (localStorage.getItem(Cienradios.liveRadios.storageKey)) {
                storage = JSON.parse(localStorage.getItem(Cienradios.liveRadios.storageKey));
                // console.log('use localStorage');
                // Verifica la diferencia en tiempo segun el expire
                if (storage.timestamp !== Cienradios.liveRadios.expire) {
                    return false;
                }
                storage = storage.data;
            }
        } else if (Cienradios.sessionStorage) {
            if (sessionStorage.getItem(Cienradios.liveRadios.storageKey)) {
                storage = JSON.parse(sessionStorage.getItem(Cienradios.liveRadios.storageKey));
                // console.log('use sessionStorage');
                // Verifica el md5 para ver si cambio para generar un expire
                if (storage.timestamp !== Cienradios.liveRadios.expire) {
                    return false;
                }
                storage = storage.data;
            }
        } else {
            storage = Cienradios.liveRadios.programasTodos;
        }
        return storage;
    },
    setStorage: function (data, key, storage) {
        if (Object.keys(data).length < 1) {
            Cienradios.debug('Cienradios.setStorage - wrong parameters');
            return false;
        }

        store = { timestamp: Cienradios.liveRadios.expire, data: data };

        if (storage == 'local') {
            try {
                localStorage.setItem(key, JSON.stringify(store));
            } catch (e) {
                return false;
            }
        } else if (storage == 'session') {
            try {
                sessionStorage.setItem(key, JSON.stringify(store));
            } catch (e) {
                return false;
            }
        }
    },
    ready: function () {
        var host = window.location.host.split('.');
        this.subdomain = host[0];
        this.storageKey = this.subdomain + '_programasTodos';

        if (Cienradios.liveRadios.expire === '') {
            Cienradios.liveRadios.expire = jQuery('meta[name="cienradios:liveradios.hash"]').attr('content');
        }

        storage = Cienradios.liveRadios.checkStorage();

        if (storage === false) {
            storage = Cienradios.liveRadios.getProgramas();
        }
        return storage;
    }
};

Cienradios.init();

$(document).ready(function () {
    Cienradios.onReady();
});
$(window).scroll(function () {
    Cienradios.onScroll();
});
$(window).resize(function () {
    Cienradios.onResize();
});
