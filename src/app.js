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
            'egeo.row',
            'egeo.forms',
            'egeo.header'
        ])

        .config(function(EgeoConfigProvider) {
            EgeoConfigProvider.setEgeoPath('public/js/egeo');
        });
})();
