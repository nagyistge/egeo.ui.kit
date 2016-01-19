describe('components.button', function() {
  var compile, scope, directiveElem, $httpBackend, ctrl, controller;

  beforeEach(function(){
    module('egeo.config');
    module('egeo.buttons');

    inject(function($compile, $controller, $rootScope, $templateCache){
      compile = $compile;
      scope = $rootScope.$new();
      $templateCache.put('public/js/egeo/components/button/components.button.tpl.html', '<button type="{{type}}" class="egeo-c-button egeo-c-button--{{modifier}}" data-ng-class="{\'egeo-c-button--rounded\': rounded, \'egeo-c-button--small\': small, \'egeo-c-button--xxsmall\': xxsmall, \'egeo-u-float--right\': atRight}" role="button" tabindex="{{tabindex}}"><i class="egeo-c-icon {{iconLeft}}" data-ng-if="iconLeft != null"></i><span data-ng-if="!rounded">{{label}}</span><i class="egeo-c-icon {{iconRight}}" data-ng-if="iconRight != null"></i><div class="egeo-c-popover__arrow egeo-c-popover__arrow--top" data-ng-if="vm.hasPopover"></div><div class="egeo-c-popover__arrow-shadow egeo-c-popover__arrow-shadow--top" data-ng-if="vm.hasPopover"></div></button>');
      controller = $controller('EgeoButtonController', {$scope: scope, $element: getCompiledPopoverElement()});
    });
    
    directiveElem = getCompiledElement();
  });

  function getCompiledElement(){
    var element = angular.element('<egeo-c-button data-type="submit" data-modifier="main-2" data-icon-left="icon-cog" data-icon-right="icon-arrow2_down" data-label="AngularJS Button" data-small="true" data-xxsmall="true" data-at-right="true"></egeo-c-button>');
    var compiledElement = compile(element)(scope);
    scope.$digest();
    return compiledElement;
  }

  function getCompiledRoundedElement(){
    var element = angular.element('<egeo-c-button data-type="submit" data-modifier="ellipsis" data-rounded="true" data-small="true" data-icon-left="icon-datetime" data-at-right="true"></egeo-c-button>');
    var compiledRoundedElement = compile(element)(scope);
    crl = element.controller();
    scope.$digest();
    return compiledRoundedElement;
  }

  function getCompiledPopoverElement(){
    var element = angular.element('<egeo-c-button data-popover="popover-test" data-type="submit" data-modifier="ellipsis" data-rounded="true" data-small="true" data-icon-left="icon-datetime" data-at-right="true"></egeo-c-button>');
    var compiledRoundedElement = compile(element)(scope);
    scope.$digest();
    return compiledRoundedElement;
  }

  // DIRECTIVE TESTS

  it('should have a button HTML tag', function() {
    var tag = directiveElem[0];
    expect(tag).toBeDefined();
    expect(tag.tagName).toBe('BUTTON');
  });

  it('should have the class egeo-c-button', function() {
    var tag = directiveElem[0];
    expect(tag.className.indexOf('egeo-c-button')).not.toBe(-1);
  });

  it('should have the main-2 modifier', function() {
    var tag = directiveElem[0];
    expect(tag.className.indexOf('egeo-c-button--main-2')).not.toBe(-1);
  });

  it('should have the small class', function() {
    var tag = directiveElem[0];
    expect(tag.className.indexOf('egeo-c-button--small')).not.toBe(-1);
  });

  it('should have the xxsmall class', function() {
    var tag = directiveElem[0];
    expect(tag.className.indexOf('egeo-c-button--xxsmall')).not.toBe(-1);
  });

  it('should have the egeo-u-float--right class', function() {
    var tag = directiveElem[0];
    expect(tag.className.indexOf('egeo-u-float--right')).not.toBe(-1);
  });

  it('should have a left icon', function() {
    var tag = directiveElem[0].children[0];
    expect(tag).toBeDefined();
    expect(tag.tagName).toBe('I');
    expect(tag.className.indexOf('icon-cog')).not.toBe(-1);
  });

  it('should have a text inside the button', function() {
    var tag = directiveElem[0].children[1];
    expect(tag).toBeDefined();
    expect(tag.tagName).toBe('SPAN');
    expect(tag.textContent).toBe('AngularJS Button');
  });

  it('should have a right icon', function() {
    var tag = directiveElem[0].children[2];
    expect(tag).toBeDefined();
    expect(tag.tagName).toBe('I');
    expect(tag.className.indexOf('icon-arrow2_down')).not.toBe(-1);
  });

  it('should be rounded', function() {
    directiveElem = getCompiledRoundedElement();
    var tag = directiveElem[0];
    expect(tag.className.indexOf('egeo-c-button--rounded')).not.toBe(-1);
  });

  it('should have popover arrows', function() {
    directiveElem = getCompiledPopoverElement();
    var tag = directiveElem[0].children[1];
    var tagShadow = directiveElem[0].children[2];
    expect(tag).toBeDefined();
    expect(tag.className.indexOf('egeo-c-popover__arrow')).not.toBe(-1);
    expect(tagShadow.className.indexOf('egeo-c-popover__arrow-shadow')).not.toBe(-1);
  });

  it('should have a controller', function() {
    directiveElem = getCompiledPopoverElement();
    var ctrl = directiveElem.controller;
    expect(ctrl).toBeDefined();
  });

  // CONTROLLER TESTS

  it('should toggle the popover shown status to opened', function() {
    directiveElem = getCompiledPopoverElement();
    controller.togglePopover();
    expect(controller.isOpenPopover).toBe(true);
  });

  it('should toggle the popover shown status to closed', function() {
    controller.isOpenPopover = true;
    controller.togglePopover();
    expect(controller.isOpenPopover).toBe(false);
  });
});
