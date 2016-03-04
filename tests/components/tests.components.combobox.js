describe('components.combobox', function() {
  var compile, scope, directiveElem, $httpBackend, ctrl, controller;

  beforeEach(function(){
    module('egeo');
    module('egeo.config');
    module('egeo.forms');

    inject(function($compile, $controller, $rootScope, $templateCache){
      compile = $compile;
      scope = $rootScope.$new();
      $templateCache.put('public/js/egeo/components/combobox/components.combobox.tpl.html', '<div ng-form name="{{id}}" class="egeo-c-formgroup"><label class="egeo-c-label" for="{{id}}" ng-show="{{(label != null)}}">{{label}}<span class="egeo-c-label__optional-mark" data-ng-if="!required"></span><i class="egeo-c-icon icon-help2" data-ng-if="vm.hasHelp" data-ng-click="vm.isHelpShown = !vm.isHelpShown"></i></label><select class="egeo-c-combobox" id="{{id}}" name="{{id}}" data-ng-model="model" data-ng-required="{{required}}" data-ng-disabled="{{disabled}}" data-ng-focus="vm.isFocused = true" data-ng-blur="vm.isFocused = false" data-ng-options="o.label for o in {{options}} track by o.id" data-ng-model="model"><option value="">{{text}}</option></select><div class="egeo-c-helpbox" data-ng-if="(vm.isFocused && vm.hasHelp) || (!this[id].$valid && this[id][id].$touched)"><div class="egeo-c-helpbox__text"><div class="egeo-c-message" data-ng-if="!this[id].$valid && this[id][id].$touched" data-ng-class="{\'egeo-c-message--error\': required, \'egeo-c-message--warn\': !required}"><i class="egeo-c-icon icon-alert" data-ng-if="!required && this[id][id].$error.pattern"></i><i class="egeo-c-icon icon-circle-cross" data-ng-if="this[id][id].$error.required || (this[id][id].$error.pattern && required)"></i><span class="egeo-c-message__text" data-ng-if="this[id][id].$error.required">This field is required.</span><span class="egeo-c-message__text" data-ng-if="this[id][id].$error.pattern">This field has wrong format.</span></div>{{helpText}}</div></div></div>');
      $templateCache.put('public/js/egeo/components/form/components.form.tpl.html', '<form role="form" class="egeo-c-form" id="{{id}}" accept-charset="utf-8" method="{{method}}" novalidate ng-transclude></form>');
      controller = $controller('EgeoComboboxController', {$scope: scope, $element: getCompiledElement()});
    });
    
    directiveElem = getCompiledElement();
  });

  function getCompiledElement(){
    var element = angular.element('<div ng-controller="TestController as vm"><egeo-c-form id="TestForm" method="post"><egeo-c-combobox data-text="--- Please select ---" data-options="{{vm.cboptions}}" data-model="{{vm.cbovalue}}" data-id="test-combobox" data-label="Select an option" data-required="true" data-qa="id-for-combobox" data-help-text="The acceptance of conditions is needed to continue."></egeo-c-combobox></egeo-c-form></div>');
    var compiledElement = compile(element)(scope);
    scope.$digest();
    return compiledElement;
  }

  function getCompiledNoHelpElement(){
    var element = angular.element('<div ng-controller="TestController as vm"><egeo-c-form id="TestForm" method="post"><egeo-c-combobox data-text="--- Please select ---" data-options="{{vm.cboptions}}" data-model="{{vm.cbovalue}}" data-id="test-combobox" data-label="Select an option" data-required="true" data-qa="id-for-combobox"></egeo-c-combobox></egeo-c-form></div>');
    var compiledElement = compile(element)(scope);
    scope.$digest();
    return compiledElement;
  }

  // DIRECTIVE TESTS

  it('should be inside a ng-form tag', function() {
    var tag = directiveElem[0].children[0];
    expect(tag).toBeDefined();
    // If has the ng-pristine class then the ng-form attribute was well applied.
    expect(tag.className.indexOf('ng-pristine')).not.toBe(-1);
  });

  it('should be part of an egeo-c-formgroup tag', function() {
    var tag = directiveElem[0].children[0].children[0];
    expect(tag).toBeDefined();
    expect(tag.className.indexOf('egeo-c-formgroup')).not.toBe(-1);
  });

  it('should be a type select input', function() {
    var tag = directiveElem[0].children[0].children[0].children[1];
    expect(tag).toBeDefined();
    expect(tag.tagName).toBe('SELECT');
  });

  it('should have the class egeo-c-combobox', function() {
    var tag = directiveElem[0].children[0].children[0].children[1];
    expect(tag).toBeDefined();
    expect(tag.className.indexOf('egeo-c-combobox')).not.toBe(-1);
  });

  it('should have the same id than the "for" attribute of the label', function() {
    var tag = directiveElem[0].children[0].children[0].children[1];
    expect(tag).toBeDefined();
    expect(tag.getAttribute('id')).toBe('test-combobox');
    var tag = directiveElem[0].children[0].children[0].children[0];
    expect(tag).toBeDefined();
    expect(tag.tagName).toBe('LABEL');
    expect(tag.getAttribute('for')).toBe('test-combobox');
  });

  it('should have the help icon', function() {
    var tag = directiveElem[0].children[0].children[0].children[0].children[0];
    expect(tag).toBeDefined();
    expect(tag.tagName).toBe('I');
    expect(tag.className.indexOf('icon-help2')).not.toBe(-1);
  });

  it('shouldn\'t have the help icon', function() {
    directiveElem = getCompiledNoHelpElement();
    var tag = directiveElem[0].children[0].children[0].children[0].children[0];
    expect(tag).not.toBeDefined();
  });

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
