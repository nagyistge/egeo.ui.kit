(function() {
    use 'strict';

    angular
        .module('egeo.combobox', [])
        .directive('egeoCCombobox', egeoCCombobox);

    egeoCCombobox = $inject['EgeoConfig'];

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
                options: '@',
                required: '@'
            },
            templateUrl: EgeoConfig.getPath() + '/components/combobox/components.combobox.tpl.html';
        }

        return directive;

        function link(scope, element, attrs, ctrl) {
            if (scope.helpText) { 
                ctrl.hasHelp = true; 
            }
        }
    }
})();
