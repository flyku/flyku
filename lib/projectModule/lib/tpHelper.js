/**
 * @describe: 模版公用方法
 * @time: 上午11:42
 * @author: KnightWu
 */
define(function (require, exports, module) {
    var utils = {};
    var tpHelper = {};
    ['forEach', 'some', 'every', 'filter', 'map'].forEach(function (fnName) {
        utils[fnName] = function (arr, fn, context) {
            if (!arr || typeof arr == 'string') return arr;
            context = context || this;
            if (arr[fnName]) {
                return arr[fnName](fn, context);
            } else {
                var keys = Object.keys(arr);
                return keys[fnName](function (key) {
                    return fn.call(context, arr[key], key, arr);
                }, context);
            }
        };
    });
    tpHelper.mixin = function mixin(to, from) {
        utils.forEach(from, function (val, key) {
            var toString = {}.toString.call(val);
            if (toString == '[object Array]' || toString == '[object Object]') {
                to[key] = mixin(val, to[key] || {});
            } else {
                to[key] = val;
            }
        });
        return to;
    };
    tpHelper.hogan = require('./tpHelper/hogan');
    tpHelper.html = require('./tpHelper/html');
    tpHelper.jade = require('./tpHelper/jade');
    tpHelper.vm = require('./tpHelper/vm');
    if (typeof ___kkit___ === 'undefined') {
        window['___kkit___'] = {tph: tpHelper};
    } else {
        ___kkit___.tph = tpHelper;
    }

    return tpHelper;
});