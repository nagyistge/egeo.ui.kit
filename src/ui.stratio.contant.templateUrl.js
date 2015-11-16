'use strict';

angular
	.module('StratioUI.helper.constant.templateUrl', [])
	.constant('TEMPLATE_URL', function(type, name){
		return 'public/js/ui.stratio.' + name + '.html';
	});