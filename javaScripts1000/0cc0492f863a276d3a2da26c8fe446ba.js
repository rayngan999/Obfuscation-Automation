System.register(['./index-1307bc24.system.js', './index-993fa554.system.js'], function (exports) {
    'use strict';
    var registerInstance, h, Host, Utils;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
                Host = module.H;
            }, function (module) {
                Utils = module.U;
            }],
        execute: function () {
            var SomaContext = exports('soma_context', /** @class */ (function () {
                function class_1(hostRef) {
                    registerInstance(this, hostRef);
                    /**
                     Use para definir se o tema dos componentes aninhados mudarÃ£o para inverse
                    */
                    this.inverse = null;
                    /**
                     Use para definir um EventEmmiter customizado responsÃ¡vel por emitir os eventos de mudanÃ§a de contexto
                    */
                    this.publisher = new Utils.Event.EventEmitter();
                }
                class_1.prototype.onInverseChange = function (value) {
                    this.publisher.emit('context-change', { inverse: value });
                };
                class_1.prototype.render = function () {
                    return (h(Host, null, h("slot", null)));
                };
                class_1.prototype.componentWillLoad = function () { };
                class_1.prototype.componentWillUpdate = function () { };
                class_1.prototype.connectedCallback = function () {
                    this.publisher.emit('context-change', { inverse: this.inverse });
                };
                class_1.prototype.disconnectedCallback = function () { };
                Object.defineProperty(class_1, "watchers", {
                    get: function () {
                        return {
                            "inverse": ["onInverseChange"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }()));
        }
    };
});
