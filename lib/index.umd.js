(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('vue-class-component-practice')) :
    typeof define === 'function' && define.amd ? define(['exports', 'vue', 'vue-class-component-practice'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.VuePropertyDecoratorPractice = {}, global.Vue, global.VueClassComponentPractice));
})(this, (function (exports, vue, vueClassComponentPractice) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var vue__default = /*#__PURE__*/_interopDefaultLegacy(vue);
    var vueClassComponentPractice__default = /*#__PURE__*/_interopDefaultLegacy(vueClassComponentPractice);

    var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };
    var hyphenateRE = /\B([A-Z])/g;
    var hyphenate = function (str) { return str.replace(hyphenateRE, '-$1').toLowerCase(); };
    function Emit(event) {
        return function (_target, propertyKey, descriptor) {
            var key = hyphenate(propertyKey);
            var original = descriptor.value;
            descriptor.value = function emitter() {
                var _this = this;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var emit = function (returnValue) {
                    var emitName = event || key;
                    if (returnValue === undefined) {
                        if (args.length === 0) {
                            _this.$emit(emitName);
                        }
                        else if (args.length === 1) {
                            _this.$emit(emitName, args[0]);
                        }
                        else {
                            _this.$emit.apply(_this, __spreadArrays([emitName], args));
                        }
                    }
                    else {
                        args.unshift(returnValue);
                        _this.$emit.apply(_this, __spreadArrays([emitName], args));
                    }
                };
                var returnValue = original.apply(this, args);
                if (isPromise(returnValue)) {
                    returnValue.then(emit);
                }
                else {
                    emit(returnValue);
                }
                return returnValue;
            };
        };
    }
    function isPromise(obj) {
        return obj instanceof Promise || (obj && typeof obj.then === 'function');
    }

    Object.defineProperty(exports, 'Vue', {
        enumerable: true,
        get: function () { return vue__default["default"]; }
    });
    Object.defineProperty(exports, 'Component', {
        enumerable: true,
        get: function () { return vueClassComponentPractice__default["default"]; }
    });
    Object.defineProperty(exports, 'Mixins', {
        enumerable: true,
        get: function () { return vueClassComponentPractice.mixins; }
    });
    exports.Emit = Emit;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
