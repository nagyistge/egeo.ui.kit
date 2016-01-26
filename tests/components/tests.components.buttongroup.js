describe('components.buttongroup', function() {
  var compile, scope, directiveElem, $httpBackend, ctrl, controller, element, document;

  beforeEach(function(){
    module('egeo.childrenClass');
    module('egeo.config');
    module('egeo.buttons');

    inject(function($compile, $controller, $rootScope, $templateCache, $document){
      compile = $compile;
      scope = $rootScope.$new();
      document = $document;
      $templateCache.put('public/js/egeo/components/button/components.button.tpl.html', '<button type="{{type}}" class="egeo-c-button egeo-c-button--{{modifier}}" data-ng-class="{\'egeo-c-button--rounded\': rounded, \'egeo-c-button--small\': small, \'egeo-c-button--xxsmall\': xxsmall, \'egeo-u-float--right\': atRight}" role="button" tabindex="{{tabindex}}"><i class="egeo-c-icon {{iconLeft}}" data-ng-if="iconLeft != null"></i><span data-ng-if="!rounded">{{label}}</span><i class="egeo-c-icon {{iconRight}}" data-ng-if="iconRight != null"></i><div class="egeo-c-popover__arrow egeo-c-popover__arrow--top" data-ng-if="vm.hasPopover"></div><div class="egeo-c-popover__arrow-shadow egeo-c-popover__arrow-shadow--top" data-ng-if="vm.hasPopover"></div></button>');
      $templateCache.put('public/js/egeo/components/buttongroup/components.buttongroup.tpl.html', '<span class="egeo-c-buttongroup"><span id="transclude" ng-transclude><!-- this span will be replaced by the transcluded content --></span><span class="egeo-c-buttongroup__more" data-ng-show="vm.areItemsHidden"><egeo-c-button data-type="submit" data-popover="popover-{{vm.id}}" data-modifier="tool-ellipsis" data-rounded="true" data-small="{{small}}" data-icon-left="icon-waiting"></egeo-c-button><div class="egeo-c-popover" data-id="popover-{{vm.id}}" data-ng-show="vm.isPopoverShown"><div class="egeo-c-popover__listitems" ng-transclude></div></div></span></span>');
      controller = $controller('EgeoButtongroupController', {$scope: scope, $element: getCompiledElement()});
    });
    
    directiveElem = getCompiledElement();
  });

  function getCompiledElement(){
    var element = angular.element('<div style="width: 110px"><egeo-c-buttongroup><button class="egeo-c-button egeo-c-button--main-1"><span>test</span></button></egeo-c-buttongroup></div>');
    var compiledElement = compile(element)(scope);
    directiveElem
    scope.$digest();

    return compiledElement;
  }

  // DIRECTIVE TESTS

  it('should have the class egeo-c-buttongroup', function() {
    var tag = directiveElem[0].children[0];
    expect(tag.className.indexOf('egeo-c-buttongroup')).not.toBe(-1);
  });

  // CONTROLLER TEST

  it('should launch a test log', function() {
    expect(controller.test()).toBe('test');
  });
});