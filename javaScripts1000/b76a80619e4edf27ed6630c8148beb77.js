var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
System.register(['./index-1307bc24.system.js', './index-993fa554.system.js', './index-1458f63a.system.js'], function (exports) {
    'use strict';
    var registerInstance, h, createEvent, Host, getElement, Utils, Decorators, css, Adapt;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
                createEvent = module.c;
                Host = module.H;
                getElement = module.g;
            }, function (module) {
                Utils = module.U;
                Decorators = module.D;
            }, function (module) {
                css = module.c;
                Adapt = module.A;
            }],
        execute: function () {
            var TextField = function (textfield) { return "\n  :host(.soma-text-field) {\n    display: block;\n  }\n\n  label {\n    display: block;\n    transform: translateY(-14px);\n    font-size: " + textfield.label.font.fontSize + ";\n    font-family: " + textfield.label.font.fontFamily + ";\n    font-weight: " + textfield.label.font.fontWeight + ";\n    color: " + textfield.label.font.color + ";\n    left: " + textfield.label.shape.left + ";\n    position: absolute;\n    transition: all 0.3s;\n    width: 100%;\n    top: 50%;\n    transform: translateY(-50%);\n    cursor: text;\n    text-align: left;\n  }\n\n  :host(.soma-text-field:hover) label {\n    color: " + textfield.label.hover.font.color + ";\n  }\n\n  :host(.soma-text-field:hover) label.disabled {\n    color: " + textfield.label.hover.disabled.font.color + ";\n  }\n\n  label.disabled {\n    cursor: default;\n    color: " + textfield.label.disabled.font.color + ";\n    cursor: not-allowed;\n  }\n\n  .control {\n    background: " + textfield.control.shape.backgroundColor + ";\n    border-radius: " + textfield.control.shape.borderRadius + ";\n    overflow: hidden;\n    position: relative;\n    width: 100%;\n  }\n\n  .bar {\n    bottom: 0;\n    content: \"\";\n    display: block;\n    left: 0;\n    position: absolute;\n    right: 0;\n    transition: all 0.3s;\n    width: 0px;\n    margin: " + textfield.bar.shape.margin.auto + ";\n    border-bottom: " + textfield.bar.shape.borderWidth + " \n      " + textfield.bar.shape.borderStyle + " \n      " + textfield.bar.shape.borderColor + ";\n  }\n\n  .bar.success {\n    border-bottom: " + textfield.bar.success.shape.borderWidth + " \n      " + textfield.bar.success.shape.borderStyle + " \n      " + textfield.bar.success.shape.borderColor + ";\n  }\n\n  .bar.error {\n    border-bottom: " + textfield.bar.error.shape.borderWidth + " \n      " + textfield.bar.error.shape.borderStyle + " \n      " + textfield.bar.error.shape.borderColor + ";\n  }\n\n  input {\n    appearance: none;\n    background: transparent;\n    border: none;\n    display: block;\n    outline: 0;\n    width: 100%;\n    height: " + textfield.input.shape.height + ";\n    box-sizing: border-box;\n    -webkit-transition: all 0.1s ease-out;\n    transition: all 0.1s ease-out;\n    font-family: " + textfield.input.font.fontFamily + ";\n    font-size: " + textfield.input.font.fontSize + ";\n    color: " + textfield.input.font.color + ";\n    font-weight: " + textfield.input.font.fontWeight + ";\n    border-bottom: " + textfield.input.shape.borderWidth + " \n      " + textfield.input.shape.borderStyle + " \n      " + textfield.input.shape.borderColor + ";\n    padding: " + textfield.input.shape.padding.top + " \n      " + textfield.input.shape.padding.right + " \n      " + textfield.input.shape.padding.bottom + " \n      " + textfield.input.shape.padding.left + ";\n  }\n\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  input[type=number] {\n    -moz-appearance:textfield;\n  }\n\n  input:visited {\n    background-color: " + textfield.input.visited.shape.backgroundColor + ";\n  }\n\n  input:active {\n    background-color: " + textfield.input.active.shape.backgroundColor + ";\n  }\n\n  input:disabled {\n    background-color: " + textfield.input.disabled.shape.backgroundColor + ";\n    color: " + textfield.input.disabled.font.color + ";\n    cursor: not-allowed;\n  }\n\n  input:-ms-input-placeholder ~ label {\n    font-size: " + textfield.placeholder.font.fontSize + ";\n    color: " + textfield.placeholder.font.color + ";\n    transform: translateY(0);\n  }\n\n  input:hover:-ms-input-placeholder ~ label {\n    color: " + textfield.placeholder.hover.font.color + ";\n  }\n\n  input::-ms-clear {\n    display: none;\n  }\n\n  :host(.soma-text-field.filled) input ~ label {\n    font-size: " + textfield.label.filled.font.fontSize + ";\n    transform: translateY(-20px);\n    color: " + textfield.label.filled.font.color + ";\n  }\n\n  :host(.soma-text-field.filled) input ~ label.success {\n    color: " + textfield.label.filled.success.font.color + ";\n  }\n\n  :host(.soma-text-field.filled) input ~ label.error {\n    color: " + textfield.label.filled.error.font.color + ";\n  }\n\n  input:focus ~ .bar,\n  .bar.focus {\n    width: 100%;\n  }\n\n  input:disabled:-ms-input-placeholder ~ label {\n    color: " + textfield.placeholder.disabled.font.color + ";\n  }\n\n  input:disabled:placeholder-shown ~ label {\n    color: " + textfield.placeholder.disabled.font.color + ";\n  }\n\n  .feedback {\n    font-family: " + textfield.feedback.font.fontFamily + ";\n    font-size: " + textfield.feedback.font.fontSize + ";\n  }\n\n  .feedback.error {\n    color: " + textfield.feedback.error.font.color + ";\n  }\n\n  .feedback.success {\n    color: " + textfield.feedback.success.font.color + ";\n  }\n\n  .soma-text-field.error {\n    display: block;\n    margin-bottom: " + textfield.input.error.shape.margin.bottom + ";\n  }\n\n  :host(.soma-text-field.error) input:placeholder-shown ~ label {\n    color: " + textfield.placeholder.error.font.color + ";\n  }\n\n  :host(.soma-text-field.error) input {\n    border-bottom: " + textfield.input.error.shape.borderWidth + " \n      " + textfield.input.error.shape.borderStyle + " \n      " + textfield.input.error.shape.borderColor + ";\n  }\n\n  :host(.soma-text-field.error) input:focus ~ label {\n    color: " + textfield.label.error.font.color + ";\n  }\n\n  .control.icon label {\n    left: " + textfield.control.icon.label.shape.left + ";\n  }\n\n  .control.icon input{\n    padding-left: " + textfield.control.icon.input.shape.padding.left + ";\n  }\n\n  .control.action-icon input{\n    padding-right: " + textfield.control.icon.input.shape.padding.left + ";\n  }\n\n  .icon-field {\n    position: absolute;\n    width: " + textfield.control.icon.shape.width + ";\n    height: " + textfield.control.icon.shape.height + ";\n    left: " + textfield.control.icon.shape.left + ";\n    top: 50%;\n    transform: translateY(-50%);\n  }\n\n  .icon-action {\n    position: absolute;\n    width: " + textfield.control.icon.shape.width + ";\n    height: " + textfield.control.icon.shape.height + ";\n    right: " + textfield.control.icon.shape.left + ";\n    top: 50%;\n    transform: translateY(-50%);\n    cursor: pointer;\n  }\n\n  :host(.soma-text-field.inverse) .control {\n    background: " + textfield.input.inverse.shape.backgroundColor + ";\n    input {\n      background: " + textfield.input.inverse.shape.backgroundColor + ";\n      color: " + textfield.input.inverse.font.color + ";\n    }\n    label {\n      color: " + textfield.label.inverse.font.color + ";\n    }\n    label:hover:not(.disabled):not(.success):not(.error) {\n      color: " + textfield.label.inverse.hover.font.color + ";\n    }\n    .bar:not(.success):not(.error) {\n      border-bottom: " + textfield.bar.inverse.shape.borderWidth + " \n        " + textfield.bar.inverse.shape.borderStyle + " \n        " + textfield.bar.inverse.shape.borderColor + ";\n    }\n  }\n\n  :host(.soma-text-field.inverse) .control.disabled {\n    input{\n      background: " + textfield.input.inverse.disabled.shape.backgroundColor + ";\n      color: " + textfield.input.inverse.disabled.font.color + ";\n    }\n    label {\n      color: " + textfield.label.inverse.disabled.font.color + ";\n    }\n  }\n"; };
            var SomaInputStyle = css(__makeTemplateObject(["", ""], ["", ""]), function (_b) {
                var textfield = _b.theme.components.textfield;
                return TextField(textfield);
            });
            var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var SomaTextField = exports('soma_text_field', /** @class */ (function () {
                function class_1(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    /**
                      [*] Define tipo de input
                    */
                    this.type = "text";
                    /**
                      Define se o campo serÃ¡ apenas para leitura
                    */
                    this.readOnly = false;
                    /**
                      Desabilita o componente
                    */
                    this.disabled = false;
                    /**
                      Habilita que o componente possa ser utilizado em fundos escuros
                    */
                    this.inverse = false;
                    this.getIconColor = function (disabled, inverse) {
                        if (!inverse && disabled)
                            return "theme.components.textfield.input.disabled.font.color";
                        else if (inverse && disabled)
                            return "theme.components.textfield.input.inverse.disabled.font.color";
                        else if (inverse && !disabled)
                            return "theme.components.textfield.input.inverse.font.color";
                        else
                            return "theme.components.textfield.control.icon.shape.fill";
                    };
                    this.handleChange = function (event) {
                        var input = event.target;
                        if (input) {
                            _this.value = input.value || '';
                            _this.somaChange.emit(input.value);
                        }
                    };
                    this.handleActionIconClick = function () {
                        _this.somaActionClick.emit(_this.el);
                    };
                    this.renderIcon = function (type) {
                        if (type === void 0) { type = 'field'; }
                        return function (icon, disabled, inverse) {
                            if (!icon)
                                return null;
                            return (h("div", { class: "icon-" + type, onClick: function () { return type == 'action' && _this.handleActionIconClick(); } }, h("soma-icon", { icon: icon, color: _this.getIconColor(disabled, inverse), size: "md" })));
                        };
                    };
                    this.getLabelClass = function (feedback, disabled) { return (feedback ? feedback : '') + " " + (disabled ? 'disabled' : ''); };
                    this.getBarClass = function (feedback, focus) { return "bar " + (feedback ? feedback : '') + " " + (focus ? 'focus' : ''); };
                    this.getFeedbackClass = function (feedback) { return "feedback " + (feedback ? feedback : ''); };
                    this.getControlClass = function (icon) { return "control " + (icon ? 'icon' : '') + " " + (_this.actionIcon ? 'action-icon' : '') + " " + (_this.disabled ? 'disabled' : ''); };
                    this.onFocus = function () {
                        var _a;
                        (_a = _this.inputEl) === null || _a === void 0 ? void 0 : _a.focus();
                        _this.inputFocus = true;
                        _this.somaFocus.emit();
                    };
                    this.onBlur = function () {
                        var _a;
                        (_a = _this.inputEl) === null || _a === void 0 ? void 0 : _a.blur();
                        _this.inputFocus = false;
                        _this.somaBlur.emit();
                    };
                    this.getInputEl = function () {
                        if (_this.el.shadowRoot) {
                            return _this.el.shadowRoot.querySelector('input');
                        }
                        return _this.el.querySelector('input');
                    };
                    this.somaChange = createEvent(this, "somaChange", 7);
                    this.somaFocus = createEvent(this, "somaFocus", 7);
                    this.somaBlur = createEvent(this, "somaBlur", 7);
                    this.somaActionClick = createEvent(this, "somaActionClick", 7);
                }
                class_1.prototype.componentDidRender = function () {
                    this.inputEl = this.getInputEl();
                };
                class_1.prototype.render = function () {
                    var _this = this;
                    var _b = this, icon = _b.icon, type = _b.type, disabled = _b.disabled, value = _b.value, ariaLabel = _b.ariaLabel, label = _b.label, feedback = _b.feedback, message = _b.message, name = _b.name, inputId = _b.inputId, inverse = _b.inverse, actionIcon = _b.actionIcon, readOnly = _b.readOnly, maxLength = _b.maxLength;
                    var className = Utils.Classes.combine({
                        root: 'soma-text-field',
                        conditions: {
                            disabled: disabled,
                            filled: !!value || this.inputFocus,
                            inverse: inverse
                        }
                    });
                    return (h(Host, { class: className }, h("div", { class: this.getControlClass(icon) }, h("input", { id: inputId, type: type, placeholder: "", disabled: disabled, onInput: this.handleChange, onFocus: this.onFocus, onBlur: this.onBlur, name: name, "aria-disabled": disabled ? true : null, "aria-label": ariaLabel, value: value, readOnly: readOnly, maxLength: maxLength }), this.renderIcon('field')(icon, disabled, inverse), h("label", { class: this.getLabelClass(feedback, disabled), htmlFor: inputId, onClick: function () { var _a; return (_a = _this.inputEl) === null || _a === void 0 ? void 0 : _a.focus(); } }, label), this.renderIcon('action')(actionIcon, disabled, inverse), h("div", { class: this.getBarClass(feedback, value) })), feedback &&
                        message &&
                        h("span", { class: this.getFeedbackClass(feedback) }, message)));
                };
                class_1.prototype.componentWillLoad = function () { };
                class_1.prototype.componentWillUpdate = function () { };
                class_1.prototype.connectedCallback = function () { };
                class_1.prototype.disconnectedCallback = function () { };
                Object.defineProperty(class_1.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }()));
            __decorate([
                Decorators.Required()
            ], SomaTextField.prototype, "type", void 0);
            __decorate([
                Decorators.Required()
            ], SomaTextField.prototype, "ariaLabel", void 0);
            __decorate([
                Decorators.ContextObservable()
            ], SomaTextField.prototype, "inverse", void 0);
            __decorate([
                Adapt({
                    css: SomaInputStyle
                })
            ], SomaTextField.prototype, "render", null);
        }
    };
});
