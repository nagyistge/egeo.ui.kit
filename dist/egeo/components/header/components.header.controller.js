(function() {
    'use strict';

    angular
        .module('egeo.header')
        .controller('EgeoHeaderController', EgeoHeaderController);

    function EgeoHeaderController($scope, $element) {
        var vm = this;
        var USER_DROPDOWN_INDEX = 1;
        var APP_DROPDOWN_INDEX = 2;

        vm.id = $scope.$id;
        vm.isUserDropdownVisible = false;
        vm.isAppDropdownVisible = false;
        vm.submenu;

        vm.toggleSubmenu = toggleSubmenu;
        vm.toggleDropdown = toggleDropdown;

        function toggleSubmenu(item, initial) {
            for (var i = 0; i < $scope.mainMenu.length; i++) {
                if ( $scope.mainMenu[i] != item ) {
                    if ( $scope.mainMenu[i].submenu ) $scope.mainMenu[i].isOpen = false;
                } else {
                    if ( initial ) {
                        $scope.mainMenu[i].isOpen = true;
                    } else {
                        $scope.mainMenu[i].isOpen = !$scope.mainMenu[i].isOpen;
                    }

                    if ( !$scope.mainMenu[i].isOpen ) vm.submenu = null;
                }
            }

            if ( item.isOpen ) vm.submenu = item.submenu;
        }

        function toggleDropdown(index) {
            if ( index == USER_DROPDOWN_INDEX ) {
                vm.isUserDropdownVisible? closeDropdown(index) : openDropdown(index);
            } else if ( index == APP_DROPDOWN_INDEX ) {
                vm.isAppDropdownVisible? closeDropdown(index) : openDropdown(index);
            }
        }

        function openDropdown(index) {
            if ( index == USER_DROPDOWN_INDEX ) {
                vm.isUserDropdownVisible = true;
            } else if ( index == APP_DROPDOWN_INDEX ) {
                vm.isAppDropdownVisible = true;
            }
        }

        function closeDropdown(index) {
            if ( index == USER_DROPDOWN_INDEX ) {
                vm.isUserDropdownVisible = false;
            } else if ( index == APP_DROPDOWN_INDEX ) {
                vm.isAppDropdownVisible = false;
            }
        }
    }
})();
