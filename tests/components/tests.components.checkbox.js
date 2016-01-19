describe('components.checkbox', function() {
  var compile, scope, directiveElem, $httpBackend, ctrl, controller;

  beforeEach(function(){
    module('egeo.config');
    module('egeo.forms');

    inject(function($compile, $controller, $rootScope, $templateCache){
      compile = $compile;
      scope = $rootScope.$new();
      $templateCache.put('public/js/egeo/components/checkbox/components.checkbox.tpl.html', '<div ng-form name="{{id}}" class="egeo-c-formgroup"><input type="checkbox" class="egeo-c-checkbox" id="{{id}}" name="{{id}}" data-ng-model="model" data-ng-required="{{required}}" data-ng-disabled="{{disabled}}" data-qa="{{qa}}" data-ng-trim="false" data-ng-focus="vm.isFocused = true" data-ng-blur="vm.isFocused = false"><label class="egeo-c-label" for="{{id}}" ng-show="{{(label != null)}}">{{label}}<span class="egeo-c-label__optional-mark" data-ng-if="!required"></span></label><i class="egeo-c-icon icon-help2" data-ng-if="vm.hasHelp" data-ng-click="vm.isHelpShown = !vm.isHelpShown"></i><div class="egeo-c-helpbox egeo-c-helpbox--arrow-to-left" data-ng-if="(vm.isHelpShown && vm.hasHelp) || (!this[id].$valid && this[id][id].$touched)"><div class="egeo-c-helpbox__text"><div class="egeo-c-message" data-ng-if="!this[id].$valid && this[id][id].$touched" data-ng-class="{\'egeo-c-message--error\': required, \'egeo-c-message--warn\': !required}"><i class="egeo-c-icon icon-alert" data-ng-if="!required && this[id][id].$error.pattern"></i><i class="egeo-c-icon icon-circle-cross" data-ng-if="this[id][id].$error.required || (this[id][id].$error.pattern && required)"></i><span class="egeo-c-message__text" data-ng-if="this[id][id].$error.required">This field is required.</span><span class="egeo-c-message__text" data-ng-if="this[id][id].$error.pattern">This field has wrong format.</span></div>{{helpText}}</div></div></div>');
      controller = $controller('EgeoCheckboxController', {$scope: scope, $element: getCompiledElement()});
    });
    
    directiveElem = getCompiledElement();
  });

  function getCompiledElement(){
    var element = angular.element('<egeo-c-checkbox data-id="test-checkbox" data-label="I read and accept the conditions" data-model="vm.isRead" data-required="true" data-qa="id-for-checkbox" data-help-text="The acceptance of conditions is needed to continue."></egeo-c-checkbox>');
    var compiledElement = compile(element)(scope);
    scope.$digest();
    return compiledElement;
  }

  // DIRECTIVE TESTS

  it('should be inside a ng-form tag', function() {
    var tag = directiveElem[0];
    expect(tag).toBeDefined();
    // If has the ng-pristine class then the ng-form attribute was well applied.
    expect(tag.className.indexOf('ng-pristine')).not.toBe(-1);
  });

  it('should be part of an egeo-c-formgroup tag', function() {
    var tag = directiveElem[0];
    expect(tag).toBeDefined();
    expect(tag.className.indexOf('egeo-c-formgroup')).not.toBe(-1);
  });

  it('should be a type checkbox input', function() {
    var tag = directiveElem[0].children[0];
    expect(tag).toBeDefined();
    expect(tag.tagName).toBe('INPUT');
    expect(tag.getAttribute('type')).toBe('checkbox');
  });

  it('should have the class egeo-c-checkbox', function() {
    var tag = directiveElem[0].children[0];
    expect(tag).toBeDefined();
    expect(tag.className.indexOf('egeo-c-checkbox')).not.toBe(-1);
  });

  it('should have the same id than the "for" attribute of the label', function() {
    var tag = directiveElem[0].children[0];
    expect(tag).toBeDefined();
    expect(tag.getAttribute('id')).toBe('test-checkbox');
    var tag = directiveElem[0].children[1];
    expect(tag).toBeDefined();
    expect(tag.tagName).toBe('LABEL');
    expect(tag.getAttribute('for')).toBe('test-checkbox');
  });

  it('should have the help icon', function() {
    var tag = directiveElem[0].children[2];
    expect(tag).toBeDefined();
    expect(tag.tagName).toBe('I');
    expect(tag.className.indexOf('icon-help2')).not.toBe(-1);
  });

  // CONTROLLER TESTS
/* test doesn't work because $digest cycle seems to be not launched and the html code is not re-write 
   with the controller changes.

  it('should show the help', function() {
    controller.isHelpShown = true;
    scope.$digest();
    console.log(directiveElem[0]);
    //expect(controller.isOpenPopover).toBe(true);
  });
*/
  it('should have a boolean true when focused', function() {
    controller.onFocus();
    expect(controller.isFocused).toBe(true);
  });

});
