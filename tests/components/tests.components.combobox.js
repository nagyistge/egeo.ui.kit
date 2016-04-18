describe('components.combobox', function() {
  var compile, scope, directiveElem, $httpBackend, ctrl, controller;

  beforeEach(function(){
    module('egeo');
    module('egeo.config');
    module('egeo.forms');

    inject(function($compile, $controller, $rootScope, $templateCache){
      compile = $compile;
      scope = $rootScope.$new();
      $templateCache.put('public/js/egeo/components/combobox/components.combobox.tpl.html', '<div ng-form name="{{id}}" class="egeo-c-formgroup"><egeo-c-label data-for="{{id}}" data-label="{{label}}" ng-show="{{(label != null)}}" data-required="{{required}}" data-is-help-shown="vm.isHelpShown" data-has-help="vm.hasHelp"></egeo-c-label><select class="egeo-c-combobox" id="{{id}}" name="{{id}}" data-ng-model="model" data-ng-required="{{required}}" data-ng-disabled="{{disabled}}" data-ng-focus="vm.isFocused = true" data-ng-blur="vm.isFocused = false; vm.isHelpShown = false" data-ng-options="o.label for o in {{options}} track by o.id" data-qa="{{qa}}"><option value="">{{text}}</option></select><egeo-c-helpbox data-is-focused="vm.isFocused" data-is-help-shown="vm.isHelpShown" data-has-help="vm.hasHelp" data-valid="this[id].$valid" data-touched="this[id][id].$touched" data-error="this[id][id].$error" data-required="{{required}}" data-help-text="{{helpText}}"></egeo-c-helpbox></div>');
      $templateCache.put('public/js/egeo/components/form/components.form.tpl.html', '<form role="form" class="egeo-c-form" id="{{id}}" accept-charset="utf-8" method="{{method}}" novalidate ng-transclude></form>');
      $templateCache.put('public/js/egeo/components/label/components.label.tpl.html', '<span><label for="{{for}}" class="egeo-c-label" ng-show="{{(label != null)}}">{{label}}<span class="egeo-c-label__optional-mark" data-ng-if="!required"></span><i class="egeo-c-icon icon-help2" data-ng-if="hasHelp" data-ng-click="toggleHelp()"></i></label></span>');
      $templateCache.put('public/js/egeo/components/helpbox/components.helpbox.tpl.html', '<div><div class="egeo-c-helpbox" data-ng-if="((isFocused || isHelpShown) && (helpText != null)) || (!valid && touched)"><div class="egeo-c-helpbox__text"><div class="egeo-c-message" data-ng-if="!$parent.valid && $parent.touched" data-ng-class="{\'egeo-c-message--error\': $parent.required, \'egeo-c-message--warn\': !$parent.required}"><i class="egeo-c-icon icon-alert" data-ng-if="!$parent.required && $parent.error.pattern"></i><i class="egeo-c-icon icon-circle-cross" data-ng-if="$parent.error.required || ($parent.error.pattern && $parent.required)"></i><span class="egeo-c-message__text" data-ng-if="$parent.error.required">This field is required.</span><span class="egeo-c-message__text" data-ng-if="$parent.error.pattern">This field has wrong format.</span></div>{{helpText}}</div></div></div>');
      controller = $controller('EgeoComboboxController', {$scope: scope, $element: getCompiledElement()});
    });

    directiveElem = getCompiledElement();
  });

  function getCompiledElement(){
    var element = angular.element('<div ng-controller="TestController as vm"><egeo-c-form id="TestForm" method="post"><egeo-c-combobox data-text="--- Please select ---" data-options="{{vm.cboptions}}" data-model="vm.cboresult" data-id="test-combobox" data-label="Select an option" data-required="true" data-qa="id-for-combobox" data-help-text="Lorem ipsum dolor sit amet." data-help-text="The acceptance of conditions is needed to continue."></egeo-c-combobox></egeo-c-form></div>');
    var compiledElement = compile(element)(scope);
    scope.$digest();
    return compiledElement;
  }

  function getCompiledNoHelpElement(){
    var element = angular.element('<div ng-controller="TestController as vm"><egeo-c-form id="TestForm" method="post"><egeo-c-combobox data-text="--- Please select ---" data-options="{{vm.cboptions}}" data-model="vm.cboresult" data-id="test-combobox" data-label="Select an option" data-required="true" data-qa="id-for-combobox"></egeo-c-combobox></egeo-c-form></div>');
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
    var tag = directiveElem[0].children[0].children[0].children[0].children[0];
    expect(tag).toBeDefined();
    expect(tag.tagName).toBe('LABEL');
    expect(tag.getAttribute('for')).toBe('test-combobox');
  });

  it('should have the help icon', function() {
    var tag = directiveElem[0].children[0].children[0].children[0].children[0].children[0];
    expect(tag).toBeDefined();
    expect(tag.tagName).toBe('I');
    expect(tag.className.indexOf('icon-help2')).not.toBe(-1);
  });

  it('shouldn\'t have the help icon', function() {
    directiveElem = getCompiledNoHelpElement();
    var tag = directiveElem[0].children[0].children[0].children[0].children[0].children[0];
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
