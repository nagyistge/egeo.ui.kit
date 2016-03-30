(function(){
    'use strict';

    angular
        .module('egeo.header', [])
        .directive('egeoCHeader', egeoCHeader);

    egeoCHeader.$inject = ['EgeoConfig'];

    function egeoCHeader(EgeoConfig) {
      var directive = {
          controller: 'EgeoHeaderController as vm',
          replace: true,
          restrict: 'E',
          scope: {
              appLogo: '@',
              appName: '@',
              appRoot: '@',
              mainMenu: '=',
              note: '=',
              tools: '=',
              userDropdownItems: '=',
              userName: '@'
          },
          templateUrl: EgeoConfig.getEgeoPath() + '/components/header/components.header.tpl.html'
      };

      return directive;
    }
})();
