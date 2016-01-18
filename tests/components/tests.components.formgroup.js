describe('components.formgroup.directive', function() {
  var compile, scope, directiveElem, $httpBackend;

  beforeEach(function(){
    module('egeo.config');
    module('egeo.forms');

    inject(function($compile, $rootScope, $templateCache){
      compile = $compile;
      scope = $rootScope.$new();
      $templateCache.put('public/js/egeo/components/formgroup/components.formgroup.tpl.html', '<div class="egeo-c-formgroup" ng-transclude></div>');
    });
    
    directiveElem = getCompiledElement();
  });

  function getCompiledElement(){
    var element = angular.element('<egeo-c-formgroup>Test</egeo-c-formgroup>');
    var compiledElement = compile(element)(scope);
    scope.$digest();
    return compiledElement;
  }

  it('should have a div HTML tag', function() {
    var tag = directiveElem[0];
    expect(tag).toBeDefined();
    expect(tag.tagName).toBe('DIV');
  });

  it('should have the class egeo-c-formgroup', function() {
    var tag = directiveElem[0];
    expect(tag).toBeDefined();
    expect(tag.className.indexOf('egeo-c-formgroup')).not.toBe(-1);
  });

  it('should have transclude content', function() {
    var tag = directiveElem[0];
    expect(tag).toBeDefined();
    expect(tag.textContent).toBe('Test');
  });
});
