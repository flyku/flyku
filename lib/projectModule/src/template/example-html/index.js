/**
 * js模版的生成，以此为模版
 */
define(function (require, exports, module) {
    var tpHelper = require('tpHelper'); // 用于模版模块生成的工具类
    module.exports = {
        init: function () {
            var $ = require('jquery');
            $('#test a').on('click', function () {
                alert('Welcome to use knighkit template html.');
            });
        },
        render: function (data) {
            return ___template___(data);
        }
    };
});