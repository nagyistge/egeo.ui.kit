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

        vm.toggleDropdown = toggleDropdown;

        function toggleDropdown(index) {
            if ( index == USER_DROPDOWN_INDEX ) {
                vm.isUserDropdownVisible? closeDropdown(index) : openDropdown(index);
            } else if ( index == APP_DROPDOWN_INDEX ) {
                vm.isAppDropdownVisible? closeDropdown(index) : openDropdown(index);
            }
        }

        function openDropdown(index) {
            console.log('Opening Dropdown ' + index);

            if ( index == USER_DROPDOWN_INDEX ) {
                vm.isUserDropdownVisible = true;
            } else if ( index == APP_DROPDOWN_INDEX ) {
                vm.isAppDropdownVisible = true;
            }
        }

        function closeDropdown(index) {
            console.log('Closing Dropdown ' + index);

            if ( index == USER_DROPDOWN_INDEX ) {
                vm.isUserDropdownVisible = false;
            } else if ( index == APP_DROPDOWN_INDEX ) {
                vm.isAppDropdownVisible = false;
            }
        }
    }
})();
