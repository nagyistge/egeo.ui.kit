describe('components.header.directive', function() {
  var compile, scope, directiveElem, controller, testCtrl, $httpBackend;

  beforeEach(function(){
    module('egeo');
    module('egeo.config');
    module('egeo.header');

    inject(function($compile, $controller, $rootScope, $templateCache){
      compile = $compile;
      scope = $rootScope.$new();
      $templateCache.put('public/js/egeo/components/header/components.header.tpl.html', '<header role="banner"><div class="egeo-c-header"><i class="egeo-c-icon icon-menu egeo-c-header__mobile-menu"></i><h1 class="egeo-c-header__logo" data-ng-if="appLogo" data-sref="{{appRoot}}"><img ng-src="{{appLogo}}" title="{{appName}}" alt="The logo of the application" /></h1><aside class="egeo-c-header__user-bar"><span class="egeo-c-user-dropdown" data-ng-click="vm.toggleDropdown(1)"><i class="egeo-c-icon icon-head"></i><span class="egeo-c-user-dropdown__label">{{userName}}</span><ul class="egeo-c-dropdown-box" data-dropdown-index="1" data-ng-show="vm.isUserDropdownVisible"><li class="egeo-c-dropdown-box-item" data-ng-repeat="item in userDropdownItems"><a href="{{item.href}}" target="{{item.target}}" data-ng-if="item.href"><i class="egeo-c-icon {{item.icon}} egeo-c-dropdown-box-item__icon" title="{{item.label}}"></i><span class="egeo-c-dropdown-box-item__label">{{item.label}}</span></a><span data-sref="{{item.sref}}" data-ng-if="item.sref"><i class="egeo-c-icon {{item.icon}} egeo-c-dropdown-box-item__icon" title="{{item.label}}"></i><span class="egeo-c-dropdown-box-item__label">{{item.label}}</span></span></li></ul></span><ul class="egeo-c-header__tools"><li class="egeo-c-header__tools-item" data-ng-repeat="item in tools"><i class="egeo-c-icon {{item.icon}} egeo-c-header__tools-item__icon" title="{{item.label}}" data-sref="{{item.sref}}" data-ng-if="item.sref"></i><a href="{{item.href}}" target="{{item.target}}" data-ng-if="item.href" title="{{item.label}}"><i class="egeo-c-icon {{item.icon}} egeo-c-header__tools-item__icon"></i></a></li></ul><span class="egeo-c-header__app-dropdown" data-ng-if="apps"><i class="egeo-c-icon icon-grid-dots"></i></span></aside><nav class="egeo-c-header__navigation" role="navigation"><ul class="egeo-c-header__menu"><li class="egeo-c-header__menu-item" data-ng-click="vm.toggleSubmenu(item)" data-ng-repeat="item in mainMenu"><i class="egeo-c-icon {{item.icon}} egeo-c-header__menu-item__icon" data-ng-if="item.icon"></i><span data-sref="{{item.sref}}" class="egeo-c-header__menu-item__label" data-ng-if="item.sref">{{item.label}}</span><span class="egeo-c-header__menu-item__label" data-ng-if="item.submenu">{{item.label}}</span><span class="egeo-c-badge" data-ng-if="item.count && item.count > 0">{{item.count}}</span><ul class="egeo-c-header__submenu" data-ng-if="item.submenu" data-ng-show="item.isOpen"><li class="egeo-c-header__submenu-item" data-ng-class="{\'egeo-c-header__submenu-item--active\': subitem.active}" data-ng-repeat="subitem in item.submenu"><span class="egeo-c-header__submenu-item__label" data-sref="{{subitem.sref}}">{{subitem.label}}</span></li></ul></li></ul></nav><div class="egeo-c-header__note" data-ng-if="note"><a class="egeo-c-header__note__link" href="{{note.href}}" target="{{note.target}}"><i class="egeo-c-icon {{note.leftIcon}}" data-ng-if="note.leftIcon"></i><span class="egeo-c-header__note__label">{{note.label}}</span><i class="egeo-c-icon {{note.rightIcon}}" data-ng-if="note.rightIcon"></i></a></div></div></header>');
      controller = $controller('EgeoHeaderController', {$scope: scope, $element: getCompiledElement()});
    });

    directiveElem = getCompiledElement();
  });

  function getCompiledElement(){
    var element = angular.element('<div ng-controller="TestController as vm"><egeo-c-header data-app-logo="public/assets/images/app-logo.png" data-app-name="Stratio Viewer" data-user-name="Antonio H." data-user-dropdown-items="vm.userDropdownItems" data-tools="vm.tools" data-main-menu="vm.mainMenu" data-note="vm.note"></egeo-c-header></div>');
    var compiledElement = compile(element)(scope);
    scope.$digest();
    return compiledElement;
  }

  it('should have a Header HTML tag as a root element', function() {
    var tag = directiveElem[0].children[0];
    expect(tag).toBeDefined();
    expect(tag.tagName).toBe('HEADER');
  });

  it('should have the banner Aria Role', function() {
    var tag = directiveElem[0].children[0];
    expect(tag).toBeDefined();
    expect(tag.getAttribute('role')).toBe('banner');
  });

  it('should have the class egeo-c-header', function() {
    var tag = directiveElem[0].children[0].children[0];
    expect(tag).toBeDefined();
    expect(tag.className.indexOf('egeo-c-header')).not.toBe(-1);
  });

  it('should have the user-dropdown with the name of the user', function() {
    var tag = directiveElem[0].children[0].children[0].children[2].children[0].children[1];
    expect(tag).toBeDefined();
    expect(tag.textContent).toBe('Antonio H.');
  });

  it('should have the user-dropdown with the options defined', function() {
    var tag = directiveElem[0].children[0].children[0].children[2].children[0].children[2];
    var items = scope.$$childTail.$$childTail.$$childTail.userDropdownItems;

    for (var i = 0; i < tag.children.length; i++) {
      expect(tag.children[i]).toBeDefined();
      expect(tag.children[i].className.indexOf('egeo-c-dropdown-box-item')).not.toBe(-1);

      if ( items[i].sref ) {
        expect(tag.children[i].children[0].getAttribute('data-sref')).toBe(items[i].sref);
      } else if (items[i].href) {
        expect(tag.children[i].children[0].getAttribute('href')).toBe(items[i].href);
        expect(tag.children[i].children[0].getAttribute('target')).toBe(items[i].target);
      }
      expect(tag.children[i].children[0].textContent).toBe(items[i].label);
    }
  });

  it('should have the tools with the options defined', function() {
    var tag = directiveElem[0].children[0].children[0].children[2].children[1];
    var items = scope.$$childTail.$$childTail.$$childTail.tools;

    for (var i = 0; i < tag.children.length; i++) {
      expect(tag.children[i]).toBeDefined();
      expect(tag.children[i].className.indexOf('egeo-c-header__tools-item')).not.toBe(-1);

      if ( items[i].sref ) {
        expect(tag.children[i].children[0].getAttribute('data-sref')).toBe(items[i].sref);
      } else if (items[i].href) {
        expect(tag.children[i].children[0].getAttribute('href')).toBe(items[i].href);
        expect(tag.children[i].children[0].getAttribute('target')).toBe(items[i].target);
      }
      expect(tag.children[i].children[0].getAttribute('title')).toBe(items[i].label);
    }
  });

  it('should have the Main Menu with the options defined', function() {
    var tag = directiveElem[0].children[0].children[0].children[3].children[0];
    var items = scope.$$childTail.$$childTail.$$childTail.mainMenu;

    for (var i = 0; i < tag.children.length; i++) {
      expect(tag.children[i]).toBeDefined();
      expect(tag.children[i].className.indexOf('egeo-c-header__menu-item')).not.toBe(-1);

      expect(tag.children[i].children[0].className.indexOf(items[i].icon)).not.toBe(-1);
      if ( items[i].sref ) {
        expect(tag.children[i].children[1].getAttribute('data-sref')).toBe(items[i].sref);
      } else {
        expect(tag.children[i].children[1].textContent).toBe(items[i].label);
      }

      if ( items[i].count && ( items[i].count > 0 ) ) expect(tag.children[i].children[2].textContent).toBe(items[i].count);

      if ( items[i].submenu ) {
        expect(tag.children[i].children[3].className.indexOf('egeo-c-header__submenu')).not.toBe(-1);

        for (var c = 0; c < tag.children[i].children[3].children.length; c++) {
          expect(tag.children[i].children[3].children[c].className.indexOf('egeo-c-header__submenu-item')).not.toBe(-1);
          expect(tag.children[i].children[3].children[c].children[0].getAttribute('data-sref')).toBe(items[i].submenu[c].sref);
          expect(tag.children[i].children[3].children[c].children[0].textContent).toBe(items[i].submenu[c].label);
        }
      }
    }
  });

  it('should have a note with the options defined', function() {
    var tag = directiveElem[0].children[0].children[0].children[4];
    var item = scope.$$childTail.$$childTail.$$childTail.note;

    expect(tag).toBeDefined();
    expect(tag.className.indexOf('egeo-c-header__note')).not.toBe(-1);
    expect(tag.children[0].getAttribute('href')).toBe(item.href);
    expect(tag.children[0].getAttribute('target')).toBe(item.target);
    if ( item.leftIcon ) { expect(tag.children[0].children[0].className.indexOf(item.leftIcon)).not.toBe(-1); }
    expect(tag.children[0].children[1].textContent).toBe(item.label);
    if ( item.rightIcon ) { expect(tag.children[0].children[2].className.indexOf(item.rightIcon)).not.toBe(-1); }
  });

  // CONTROLLER TESTS

  it('should change the user dropdown isOpen option', function() {
    controller.toggleDropdown(1);
    expect(controller.isUserDropdownVisible).toBe(true);
    controller.toggleDropdown(1);
    expect(controller.isUserDropdownVisible).toBe(false);
  });

  it('should change the app dropdown isOpen option', function() {
    controller.toggleDropdown(2);
    expect(controller.isAppDropdownVisible).toBe(true);
    controller.toggleDropdown(2);
    expect(controller.isAppDropdownVisible).toBe(false);
  });

  it('should change the submenu dropdown isOpen option', function() {
    // Mock a false scope to be coincident with the original scope in the application
    scope.mainMenu = scope.$$childTail.$$childTail.$$childTail.mainMenu;
    
    controller.toggleSubmenu(scope.$$childTail.$$childTail.$$childTail.mainMenu[2]);
    expect(scope.$$childTail.$$childTail.$$childTail.mainMenu[2].isOpen).toBe(true);
    controller.toggleSubmenu(scope.$$childTail.$$childTail.$$childTail.mainMenu[2]);
    expect(scope.$$childTail.$$childTail.$$childTail.mainMenu[2].isOpen).toBe(false);
  });
});
