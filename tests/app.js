(function() {
    'use strict';

    angular
        .module('egeo', [
            'ngMockE2E',
            'myApp',
            'egeo.config',
        	'egeo.childrenClass',
            'egeo.forms'
        ]);

    angular.module('myApp', []);
})();
