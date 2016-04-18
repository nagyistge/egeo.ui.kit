(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('TestController', TestController);

    function TestController() {
        this.test = test;
        this.username = "Robert J";
        this.city = "Madrid";
        this.other = "";
        this.cboptions = [{id: 1, label: "opt 1"}, {id: 2, label: "opt 2"}, {id: 3, label: "opt 3"}];
        this.cboresult = {id: 2, label: "opt 2"};
        this.tools = [{ icon: 'icon-cog', label: 'Configuration', sref: 'config' }, { icon: 'icon-help2', label: 'Help', href: 'https://stratio.atlassian.net/wiki', target: '_blank' }];
        this.mainMenu = [{icon: 'icon-paper', label: 'My Viewer', sref: 'page1', count:'0' }, {icon: 'icon-grid-2', label: 'Pages', sref: 'page2' }, {icon: 'icon-server', label: 'Data Sources', count:'12', isOpen: false, submenu: [{label: 'Triggered', sref: 'triggered', active: 'true'}, {label: 'Setup', sref: 'setup'}] }, {icon: 'icon-monitor', label: 'Data Views', sref: 'page4' }, {icon: 'icon-box', label: 'Widgets', sref: 'page5' }];
        this.note = {href: 'http://www.google.com', target: '_blank', leftIcon: 'icon-thermometer', label: 'Global Status Panel' };
        this.userDropdownItems = [{icon: 'icon-logout', label: 'Logout', sref: 'logout'}, {icon: 'icon-book1', label: 'Documentation', href: 'https://stratio.atlassian.net/wiki', target: '_blank'}];
        this.apps = null;
        this.isFocused = true;
        this.isHelpShown = true;
        this.isValid = false;
        this.isTouched = true;
        this.error;
        this.falseValue = false;
        this.trueValue = true;

        function test() {
            console.log("TestController: test");
        }
    }
})();
