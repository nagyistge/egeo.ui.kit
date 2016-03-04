(function() {
    'use strict';

    angular
        .module('egeo.forms')
        .directive('egeoCCombobox', egeoCCombobox);

    egeoCCombobox.$inject = ['EgeoConfig'];

    function egeoCCombobox(EgeoConfig) {
        var directive = {
            controller: 'EgeoComboboxController as vm',
            link: link,
            restrict: 'E',
            replace: true,
            scope: {
                disabled: '@',
                helpText: '@',
                id: '@',
                label: '@',
                model: '@',
                options: '@',
                required: '@',
                select: '@',
                text: '@'
            },
            templateUrl: EgeoConfig.getEgeoPath() + '/components/combobox/components.combobox.tpl.html'
        }

        return directive;

        function link(scope, element, attrs, ctrl) {
            if (scope.helpText) { 
                ctrl.hasHelp = true; 
            }
        }
    }
})();
