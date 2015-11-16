(function() {
    'use strict';

    /**
     * @ngdoc overview
     * @name webApp
     * @description
     * # webApp
     *
     * Main module of the application.
     */

    angular
        .module('myApp', [
            'ngSanitize',
            'angular-bind-html-compile',
            'egeo.config',
            'egeo.buttons',
            'egeo.childrenClass',
            'egeo.toolbar',
            'egeo.dropdown',
            'egeo.app-header',
            'egeo.row',
            'StratioUI.components.actionButton',
            'StratioUI.components.actionGroup',
            'StratioUI.components.menuElement',
            'StratioUI.helper.passAllAttributes',
            'StratioUI.helper.toggleFloatingElement',
            'StratioUI.helper.constant.templateUrl'
        ])

        .config(function(EgeoConfigProvider){
            EgeoConfigProvider.setEgeoPath('public/js/egeo');
        });
})();
