/**
 * @describe: UI模块A的业务逻辑
 */
define(function (require, exports, module) {
    var $ = require('jquery');
    exports.init = function () {
        var data = {hi: 'flyku', hello: 'world'};
        require('template/example-test').init();
        $('#html').html(require('template/example-test').render(data));
    }
});
