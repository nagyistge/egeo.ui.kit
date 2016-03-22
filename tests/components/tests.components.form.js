describe('components.form.directive', function() {
  var compile, scope, directiveElem, $httpBackend;

  beforeEach(function(){
    module('egeo.config');
    module('egeo.forms');

    inject(function($compile, $rootScope, $templateCache){
      compile = $compile;
      scope = $rootScope.$new();
      $templateCache.put('public/js/egeo/components/form/components.form.tpl.html', '<div><form role="form" class="egeo-c-form" id="{{id}}" accept-charset="utf-8" method="{{method}}" novalidate ng-transclude></form></div>');
    });

    directiveElem = getCompiledElement();
  });

  function getCompiledElement(){
    var element = angular.element('<egeo-c-form id="TestForm" method="post"></egeo-c-form>');
    var compiledElement = compile(element)(scope);
    scope.$digest();
    return compiledElement;
  }

  it('should have a form HTML tag', function() {
    var tag = directiveElem[0].children[0];
    expect(tag).toBeDefined();
    expect(tag.tagName).toBe('FORM');
  });

  it('should have an Id', function() {
    var tag = directiveElem[0].children[0];
    expect(tag).toBeDefined();
    expect(tag.id.replace(/ /g,'')).toBe('TestForm');
  });

  it('should have a method', function() {
    var tag = directiveElem[0].children[0];
    expect(tag).toBeDefined();
    expect(tag.method.replace(/ /g,'')).toBe('post');
  });

  it('should have the class egeo-c-form', function() {
    var tag = directiveElem[0].children[0];
    expect(tag).toBeDefined();
    expect(tag.className.indexOf('egeo-c-form')).not.toBe(-1);
  });
});
