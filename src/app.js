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
            'egeo.config',
            'egeo.buttons',
            'egeo.childrenClass',
            'egeo.toolbar',
            'egeo.dropdown',
            'egeo.app-header',
            'egeo.row'
        ])

        .config(function(EgeoConfigProvider){
            EgeoConfigProvider.setEgeoPath('public/js/egeo');
        });
})();
