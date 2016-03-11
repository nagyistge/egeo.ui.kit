(function() {
    'use strict';

    angular
        .module('egeo.forms')
        .directive('egeoCHelpbox', egeoCHelpbox);

    egeoCHelpbox.$inject = ['EgeoConfig'];

    function egeoCHelpbox(EgeoConfig) {
        var directive = {
            restrict: 'E',
            replace: true,
            scope: {
                error: '=',
                hasHelp: '@',
                helpText: '@',
                isFocused: '=',
                isHelpShown: '=',
                required: '@',
                touched: '=',
                valid: '='
            },
            templateUrl: EgeoConfig.getEgeoPath() + '/components/helpbox/components.helpbox.tpl.html'
        };

        return directive;
    }
})();
