describe('components.row.directive', function() {
  var compile, scope, directiveElem, $httpBackend;

  beforeEach(function(){
    module('egeo.config');
    module('egeo.row');

    inject(function($compile, $rootScope, $templateCache){
      compile = $compile;
      scope = $rootScope.$new();
      $templateCache.put('public/js/egeo/components/row/components.row.tpl.html', '<div class="egeo-c-row egeo-c-row--{{variant}}" data-ng-transclude data-ng-class="{\'egeo-u-tx-align--right\': contentAtRight, \'egeo-u-tx-align--center\': contentCentered}"></div>');
    });
    
    directiveElem = getCompiledElement();
  });

  function getCompiledElement(){
    var element = angular.element('<egeo-c-row data-content-at-right="true" data-content-centered="true" data-variant="b1">Sample of row</egeo-c-row>');
    var compiledElement = compile(element)(scope);
    scope.$digest();
    return compiledElement;
  }

  it('should have a div HTML tag', function() {
    var tag = directiveElem[0];
    expect(tag).toBeDefined();
    expect(tag.tagName).toBe('DIV');
  });

  it('should have the class egeo-c-row', function() {
    var tag = directiveElem[0];
    expect(tag).toBeDefined();
    expect(tag.className.indexOf('egeo-c-row')).not.toBe(-1);
  });

  it('should have the class egeo-c-row--b1', function() {
    var tag = directiveElem[0];
    expect(tag).toBeDefined();
    expect(tag.className.indexOf('egeo-c-row--b1')).not.toBe(-1);
  });

  it('should have the class egeo-u-tx-align--right', function() {
    var tag = directiveElem[0];
    expect(tag).toBeDefined();
    expect(tag.className.indexOf('egeo-u-tx-align--right')).not.toBe(-1);
  });

  it('should have the class egeo-u-tx-align--center', function() {
    var tag = directiveElem[0];
    expect(tag).toBeDefined();
    expect(tag.className.indexOf('egeo-u-tx-align--center')).not.toBe(-1);
  });
});
