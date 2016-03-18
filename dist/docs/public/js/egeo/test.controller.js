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
        this.cboptions = [{id: 1, label: "opt 1", selected: false}, {id: 2, label: "opt 2", selected: true}, {id: 3, label: "opt 3"}];
        this.cbovalue = "opt 1";
        this.mainMenu = [{ icon: 'icon-paper', label: 'My Viewer', sref: 'page1', count:'0' }, { icon: 'icon-grid-2', label: 'Pages', sref: 'page2' }, { label: 'Data Sources', sref: 'page3', count:'12' }, { icon: 'icon-monitor', label: 'Data Views', sref: 'page4' }, { icon: 'icon-box', label: 'Widgets', sref: 'page5' }];
        this.note = {href: 'http://www.google.com', target: '_blank', leftIcon: 'icon-thermometer', label: 'Global Status Panel' };

        function test() {
            console.log("TestController: test");
        }
    }
})();
