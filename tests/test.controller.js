(function() {
    'use strict';

    angular
        .module('egeo')
        .controller('TestController', TestController);

    function TestController() {
        this.test = test;
        this.username = "RobertJ";
        this.city = "Madrid";
        this.other = "";
        this.cboptions = [{id: 1, label: "opt 1", selected: false}, {id: 2, label: "opt 2", selected: true}, {id: 3, label: "opt 3"}];
        this.cbovalue = "opt 1";

        function test() {
            console.log("TestController: test");
        }
    }
})();
