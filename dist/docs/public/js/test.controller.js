(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('TestController', TestController);

    function TestController() {
        this.test = test;
        this.username = "RobertJ";
        this.city = "Madrid";
        this.other = "";

        function test() {
            console.log("TestController: test");
        }
    }
})();
