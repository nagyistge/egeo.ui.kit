(function() {
    'use strict';

    angular
        .module('egeo.forms')
        .directive('egeoCRadiobutton', egeoCRadiobutton);

    egeoCRadiobutton.$inject = ['EgeoConfig'];

    function egeoCRadiobutton(EgeoConfig) {
        var directive = {
            controller: 'EgeoRadiobuttonController as vm',
            link: link,
            restrict: 'E',
            replace: true,
            scope: {
                disabled: '@',
                helpText: '@',
                id: '@',
                label: '@',
                cname: '@',
                model: '=',
                qa: '@',
                required: '@',
                value: '@'
            },
            templateUrl: EgeoConfig.getEgeoPath() + '/components/radiobutton/components.radiobutton.tpl.html'
        };

        return directive;

        function link(scope, element, attrs, ctrl) {
            if (scope.helpText) { 
                ctrl.hasHelp = true; 
            }
        }
    }
})();
