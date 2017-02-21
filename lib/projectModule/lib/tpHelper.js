/**
 * @describe: 模版公用方法
 * @time: 上午11:42
 * @author: flyku
 */
define(function(require, exports, module) {
    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function forEach(callback, thisArg) {
            var T, k;
            if (this == null) {
                throw new TypeError("this is null or not defined");
            }
            var O = Object(this);
            var len = O.length >>> 0;
            if (typeof callback !== "function") {
                throw new TypeError(callback + " is not a function");
            }
            if (arguments.length > 1) {
                T = thisArg;
            }
            k = 0;

            while (k < len) {

                var kValue;
                if (k in O) {

                    kValue = O[k];
                    callback.call(T, kValue, k, O);
                }
                k++;
            }
        };
    }
    var utils = {};
    var tpHelper = {};
    ['forEach', 'some', 'every', 'filter', 'map'].forEach(function(fnName) {
        utils[fnName] = function(arr, fn, context) {
            if (!arr || typeof arr == 'string') return arr;
            context = context || this;
            if (arr[fnName]) {
                return arr[fnName](fn, context);
            } else {
                var keys = Object.keys(arr);
                return keys[fnName](function(key) {
                    return fn.call(context, arr[key], key, arr);
                }, context);
            }
        };
    });
    tpHelper.mixin = function mixin(to, from) {
        utils.forEach(from, function(val, key) {
            var toString = {}.toString.call(val);
            if (toString == '[object Array]' || toString == '[object Object]') {
                to[key] = mixin(val, to[key] || {});
            } else {
                to[key] = val;
            }
        });
        return to;
    };
    tpHelper.html = require('./tpHelper/html');
    if (typeof ___flyku___ === 'undefined') {
        window['___flyku___'] = {
            tph: tpHelper
        };
    } else {
        ___flyku___.tph = tpHelper;
    }

    return tpHelper;
});