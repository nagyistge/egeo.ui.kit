describe('components.label.directive', function() {
  var compile, scope, directiveElem, $httpBackend;

  beforeEach(function(){
    module('egeo.config');
    module('egeo.forms');

    inject(function($compile, $rootScope, $templateCache){
      compile = $compile;
      scope = $rootScope.$new();
      $templateCache.put('public/js/egeo/components/label/components.label.tpl.html', '<label class="egeo-c-label" for="{{id}}" ng-show="{{label}}">{{label}}</label>');
    });
    
    directiveElem = getCompiledElement();
  });

  function getCompiledElement(){
    var element = angular.element('<egeo-c-label id="TestLabel" label="Test"></egeo-c-label>');
    var compiledElement = compile(element)(scope);
    scope.$digest();
    return compiledElement;
  }

  it('should have a label HTML tag', function() {
    var tag = directiveElem[0];
    expect(tag).toBeDefined();
    expect(tag.tagName).toBe('LABEL');
  });

  it('should have an Id', function() {
    var tag = directiveElem[0];
    expect(tag).toBeDefined();
    expect(tag.id.replace(/ /g,'')).toBe('TestLabel');
  });

  it('should have the class egeo-c-label', function() {
    var tag = directiveElem[0];
    expect(tag).toBeDefined();
    expect(tag.className.indexOf('egeo-c-label')).not.toBe(-1);
  });

  it('should have content', function() {
    var tag = directiveElem[0];
    expect(tag).toBeDefined();
    expect(tag.textContent).toBe('Test');
  });
});
