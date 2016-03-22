(function() {
    'use strict';

    angular
        .module('egeo.forms')
        .directive('egeoCLabel', egeoCLabel);

    egeoCLabel.$inject = ['EgeoConfig'];

    function egeoCLabel(EgeoConfig) {
        var directive = {
            link: link,
            replace: true,
            restrict: 'E',
            scope: {
                for: '@',
                hasHelp: '=',
                id: '@',
                label: '@',
                isHelpShown: '=',
                required: '@'
            },
            templateUrl: EgeoConfig.getEgeoPath() + '/components/label/components.label.tpl.html'
        };

        return directive;

        function link(scope, element, attrs, ctrl) {
            scope.toggleHelp = function() {
                scope.isHelpShown = !scope.isHelpShown;
            }           
        }
    }
})();
