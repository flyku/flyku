/**
 * @date 16-12-2016
 * @describe:
 * @author: flyku
 * @version: 1.0.0
 */
define(function(require, exports, module) {
	var $ = require('jquery');
	var nomod = require('template/example-nomodule');
	$(function(){
		nomod.init();
	})
});