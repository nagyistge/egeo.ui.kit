describe('components.toolbar.directive', function() {
  var compile, scope, directiveElem;

  beforeEach(function(done){
    module('egeo.config');
    module('egeo.childrenClass');
    module('egeo.toolbar');

    inject(function($compile, $rootScope, $templateCache, $injector){
      compile = $compile;
      scope = $rootScope.$new();
      $templateCache.put('public/js/egeo/components/toolbar/components.toolbar.tpl.html', '<div class="egeo-c-toolbar" data-ng-class="{\'egeo-u-float--right\': atRight}" data-ng-transclude></div>');
    });
    
    directiveElem = getCompiledElement();
    
    setTimeout(function() {
      done();
    }, 400);
  });

  function getCompiledElement(){
    var element = angular.element('<egeo-c-toolbar at-right="true"><span>Test</span></egeo-c-toolbar>');
    var compiledElement = compile(element)(scope);
    scope.$digest();

    return compiledElement;
  }

  it('should have a div HTML tag', function() {
    var tag = directiveElem[0];
    expect(tag).toBeDefined();
    expect(tag.tagName).toBe('DIV');
  });

  it('should have be right aligned', function() {
    var tag = directiveElem[0];
    expect(tag).toBeDefined();
    expect(tag.className.indexOf('egeo-u-float--right')).not.toBe(-1);
  });

  it('should have the class egeo-c-toolbar', function() {
    var tag = directiveElem[0];
    expect(tag).toBeDefined();
    expect(tag.className.indexOf('egeo-c-toolbar')).not.toBe(-1);
  });

  it('should have a child', function() {
    var tag = directiveElem[0];
    expect(tag).toBeDefined();
    expect(tag.firstChild).toBeDefined();
    expect(tag.firstChild.tagName).toBe('SPAN');
  });

  it('should have children with item class', function() {
    var flag = false;
    var tag = directiveElem[0];
    expect(tag).toBeDefined();
    expect(tag.firstChild.className.indexOf('egeo-c-toolbar__item')).not.toBe(-1);
    expect(tag.firstChild.textContent).toBe('Test');
  });
});
