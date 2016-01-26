describe('components.input', function() {
  var compile, scope, directiveElem, ctrl, controller;

  beforeEach(function(){
    module('egeo.config');
    module('egeo.forms');

    inject(function($compile, $controller, $rootScope, $templateCache){
      compile = $compile;
      scope = $rootScope.$new();
      $templateCache.put('public/js/egeo/components/input/components.input.tpl.html', '<div ng-form name="{{id}}" class="egeo-c-formgroup"><label class="egeo-c-label" for="{{id}}" ng-show="{{(label != null)}}">{{label}}<span class="egeo-c-label__optional-mark" data-ng-if="!required"></span><i class="egeo-c-icon icon-help2" data-ng-if="vm.hasHelp" data-ng-click="vm.isHelpShown = !vm.isHelpShown"></i>    </label>    <input type="{{type}}" class="egeo-c-input" id="{{id}}" name="{{id}}" placeholder="{{placeholder}}" data-ng-model="model" data-ng-pattern="pattern" data-ng-required="{{required}}" data-ng-disabled="{{disabled}}" data-qa="{{qa}}" data-ng-trim="false" data-ng-focus="vm.isFocused = true" data-ng-blur="vm.isFocused = false">    <div class="egeo-c-helpbox" data-ng-if="(vm.isFocused && vm.hasHelp) || (!this[id].$valid && this[id][id].$touched)"><div class="egeo-c-helpbox__text"><div class="egeo-c-message" data-ng-if="!this[id].$valid && this[id][id].$touched" data-ng-class="{\'egeo-c-message--error\': required, \'egeo-c-message--warn\': !required}"><i class="egeo-c-icon icon-alert" data-ng-if="!required && this[id][id].$error.pattern"></i><i class="egeo-c-icon icon-circle-cross" data-ng-if="this[id][id].$error.required || (this[id][id].$error.pattern && required)"></i><span class="egeo-c-message__text" data-ng-if="this[id][id].$error.required">This field is required.</span><span class="egeo-c-message__text" data-ng-if="this[id][id].$error.pattern">This field has wrong format.</span></div>{{helpText}}</div></div></div>');
      controller = $controller('EgeoInputController', {$scope: scope, $element: getCompiledElement()});
      controllerNoHelp = $controller('EgeoInputController', {$scope: scope, $element: getCompiledNoHelpElement()});
    });
    
    directiveElem = getCompiledElement();
  });

  function getCompiledElement(){
    var element = angular.element('<egeo-c-input data-id="username" data-label="username" data-placeholder="Ex. dwalsh" data-type="text" data-model="vm.username" data-pattern="\'([a-zA-Z0-9]*)\'" data-required="true" data-qa="id-for-username" data-help-text="The username is needed to login into our applications. Only numbers and letters are allowed."></egeo-c-input>');
    var compiledElement = compile(element)(scope);
    scope.$digest();
    return compiledElement;
  }

  function getCompiledNoHelpElement(){
    var element = angular.element('<egeo-c-input data-id="username" data-label="username" data-placeholder="Ex. dwalsh" data-type="text" data-model="vm.username" data-pattern="\'([a-zA-Z0-9]*)\'" data-required="true" data-qa="id-for-username"></egeo-c-input>');
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

  it('should be a type textbox input', function() {
    var tag = directiveElem[0].children[1];
    expect(tag).toBeDefined();
    expect(tag.tagName).toBe('INPUT');
    expect(tag.getAttribute('type')).toBe('text');
  });

  it('should have the class egeo-c-input', function() {
    var tag = directiveElem[0].children[1];
    expect(tag).toBeDefined();
    expect(tag.className.indexOf('egeo-c-input')).not.toBe(-1);
  });

  it('should have a placeholder', function() {
    var tag = directiveElem[0].children[1];
    expect(tag).toBeDefined();
    expect(tag.getAttribute('placeholder')).toBe('Ex. dwalsh');
  });

  it('should have the same id than the "for" attribute of the label', function() {
    var tag = directiveElem[0].children[1];
    expect(tag).toBeDefined();
    expect(tag.getAttribute('id')).toBe('username');
    var tag = directiveElem[0].children[0];
    expect(tag).toBeDefined();
    expect(tag.tagName).toBe('LABEL');
    expect(tag.getAttribute('for')).toBe('username');
  });

  it('should have the help icon', function() {
    var tag = directiveElem[0].children[0].children[0];
    expect(tag).toBeDefined();
    expect(tag.tagName).toBe('I');
    expect(tag.className.indexOf('icon-help2')).not.toBe(-1);
    // Test no works because link function is not called
    //expect(controller.hasHelp).toBe(true);
  });
/*
  it('should have not the help icon', function() {
    directiveElem = getCompiledNoHelpElement();
    var tag = directiveElem[0].children[0].children[0];
    
    // Test no works because link function is not called
    
    //expect(tag).not.toBeDefined();
    //expect(controllerNoHelp.hasHelp).toBe(false);
  });
*/
  // CONTROLLER TESTS
/* test doesn't work because $digest cycle seems to be not launched and the html code is not re-write 
   with the controller changes.

  it('should show the help', function() {
    controller.isHelpShown = true;
    scope.$digest();
    //expect(controller.isOpenPopover).toBe(true);
  });
*/
  it('should have a boolean true when focused', function() {
    controller.onFocus();
    expect(controller.isFocused).toBe(true);
  });

});
