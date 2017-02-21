/**
 * @describe: UI模块A的业务逻辑
 */
define(function(require, exports, module) {
    var $ = require('jquery');
    exports.init = function() {
        var data = { hi: 'flyku', hello: 'world' };
        $('#html').html(require('template/example-test').render(data));
        require('template/example-test').init();
    }
});
