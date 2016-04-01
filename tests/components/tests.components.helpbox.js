describe('components.helpbox', function() {
  var compile, scope, directiveElem, controller, testCtrl, $httpBackend;

  beforeEach(function(){
    module('egeo');
    module('egeo.config');
    module('egeo.forms');

    inject(function($compile, $controller, $rootScope, $templateCache){
      compile = $compile;
      scope = $rootScope.$new();
      $templateCache.put('public/js/egeo/components/helpbox/components.helpbox.tpl.html', '<div><div class="egeo-c-helpbox" data-ng-if="((isFocused || isHelpShown) && (helpText != null)) || (!valid && touched)"><div class="egeo-c-helpbox__text"><div class="egeo-c-message" data-ng-if="!$parent.valid && $parent.touched" data-ng-class="{\'egeo-c-message--error\': $parent.required, \'egeo-c-message--warn\': !$parent.required}"><i class="egeo-c-icon icon-alert" data-ng-if="!$parent.required && $parent.error.pattern"></i><i class="egeo-c-icon icon-circle-cross" data-ng-if="$parent.error.required || ($parent.error.pattern && $parent.required)"></i><span class="egeo-c-message__text" data-ng-if="$parent.error.required">This field is required.</span><span class="egeo-c-message__text" data-ng-if="$parent.error.pattern">This field has wrong format.</span></div>{{helpText}}</div></div></div>');
    });

    directiveElem = getCompiledElement();
  });

  function getCompiledElement(){
    var element = angular.element('<div ng-controller="TestController as vm"><egeo-c-helpbox data-is-help-shown="vm.isHelpShown" data-valid="vm.isValid" data-touched="vm.isTouched" data-error="vm.error" data-required="true" data-help-text="Lorem ipsum dolor sit amet."></egeo-c-helpbox></div>');
    var compiledElement = compile(element)(scope);
    scope.$digest();
    return compiledElement;
  }

  function getNoHelpShownCompiledElement(){
    var element = angular.element('<div ng-controller="TestController as vm"><egeo-c-helpbox data-is-help-shown="vm.falseValue" data-valid="vm.trueValue" data-touched="vm.falseValue" data-error="vm.error" data-required="true" data-help-text="Lorem ipsum dolor sit amet."></egeo-c-helpbox></div>');
    var compiledElement = compile(element)(scope);
    scope.$digest();
    return compiledElement;
  }

  // DIRECTIVE TESTS

  it('should be shown', function() {
    var tag = getCompiledElement()[0];
    expect(tag.children[0].children[0]).toBeDefined();
  });

  it('should be hidden', function() {
    var tag = getNoHelpShownCompiledElement()[0];
    expect(tag.children[0].children[0]).not.toBeDefined();
  });

  it('should have the text of the help', function() {
    var tag = getCompiledElement()[0];
    expect(tag.children[0].children[0].textContent).toBe('Lorem ipsum dolor sit amet.');
  });
});
