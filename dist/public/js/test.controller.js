(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('TestController', TestController);

    function TestController() {
        this.test = test;

        function test() {
            console.log("TestController: test");
        }
    }
})();
