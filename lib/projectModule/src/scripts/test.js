/**
 * @date 16-12-2016
 * @describe:
 * @author: flyku
 * @version: 1.0.0
 */
define(function(require, exports) {
    var $ = require('jquery');
    var global = require('global');
    var modB = require('./ui/moduleTEST/index');
    $(function() {
        modB.init();
    });
});
