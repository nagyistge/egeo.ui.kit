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
        this.tools = [{ icon: 'icon-cog', label: 'Configuration', sref: 'config' }, { icon: 'icon-help2', label: 'Help', href: 'https://stratio.atlassian.net/wiki', target: '_blank' }];
        this.mainMenu = [{ index: 1, icon: 'icon-paper', label: 'My Viewer', sref: 'page1', count:'0' }, { index: 2, icon: 'icon-grid-2', label: 'Pages', sref: 'page2' }, { index: 3, label: 'Data Sources', count:'12', isOpen: false, submenu: [{ index: 1, label: 'Triggered', sref: 'triggered', active: 'true'}, { index: 2, label: 'Setup', sref: 'setup'}] }, { index: 4, icon: 'icon-monitor', label: 'Data Views', sref: 'page4' }, { index: 5, icon: 'icon-box', label: 'Widgets', sref: 'page5' }];
        this.note = {href: 'http://www.google.com', target: '_blank', leftIcon: 'icon-thermometer', label: 'Global Status Panel' };
        this.userDropdownItems = [{icon: 'icon-logout', label: 'Logout', sref: 'logout'}, {icon: 'icon-head', label: 'Profile', sref: 'profile'}];
        this.apps = null;

        function test() {
            console.log("TestController: test");
        }
    }
})();
