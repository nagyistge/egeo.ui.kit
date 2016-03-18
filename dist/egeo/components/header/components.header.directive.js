(function(){
    'use strict';

    angular
        .module('egeo.header', [])
        .directive('egeoCHeader', egeoCHeader);

    egeoCHeader.$inject = ['EgeoConfig'];

    function egeoCHeader(EgeoConfig) {
      var directive = {
          link: link,
          replace: true,
          restrict: 'E',
          scope: {
              appLogo: '@',
              appName: '@',
              appRoot: '@',
              mainMenu: '=',
              note: '='
          },
          templateUrl: EgeoConfig.getEgeoPath() + '/components/header/components.header.tpl.html'
      };

      return directive;

      function link(scope, element, attrs) {
          console.log(typeof(scope.mainMenu));
          console.log(scope.mainMenu);
      }
    }
})();
