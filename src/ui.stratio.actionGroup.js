(function($){

'use strict';

angular
	.module('StratioUI.components.actionGroup', [])
	.directive('stActionGroup', stActionGroup);

stActionGroup.$inject = ['TEMPLATE_URL'];
function stActionGroup(TEMPLATE_URL){
	var directive = {
		restrict: 'AE',
		scope: true,
		templateUrl: TEMPLATE_URL('components', 'actionGroup'),
		transclude: true,
		replace: true,
		controller: controller,
		link: link
	};

	controller.$inject = ['stToggleFloatingElement', '$scope', '$element'];

	return directive;

	function controller(stToggleFloatingElement, $scope, $element){

		$scope.toggleId = 'action-group-' + $scope.$id;

		stToggleFloatingElement($scope.$root, $scope, $element.find('.floating-menu__list'));
	}

	function link(scope, elem, attrs, ctrl, transclude){
		transclude(function(content){
			angular.forEach(content, function(element){
				if(element.nodeType != 3)
					elem.find('[ng-modified-transclude]').append(element);
			});
		});
		elem.find('.buttons [title]').attr('title', '');

		elem.css('opacity', '0');

		var visibleActionsControll = new SetVisibleActions(elem);
		
		setTimeout(visibleActionsControll.init, 0);

		$(window).on('resize', visibleActionsControll.checkVisibility);
	}


	function SetVisibleActions(element){
		var self = this;

		var _container = element.closest('.heading');
		var _text = element.closest('.heading').find('.heading__title-wrapper');

		var _buttons = element.find('.buttons .menu-element');
		var _length = element.find('.buttons .menu-element').length;
		var _list = element.find('.list .menu-element');
		var _extra = element.find('.extra');

		var _actions = element;
		var _actionsWidth = 0;

		var _oldContainerWidth = 0;

		this.init = function(){
			_actionsWidth = _actions.outerWidth();

			_actions.addClass('action-group--check-width');
			self.checkVisibility();
			setTimeout(function(){
				_actions.removeClass('action-group--check-width');
				_actions.css('opacity', '');
			}, 0);

			setInterval(self.checkVisibility, 200);
		}

		self.checkVisibility = function(){
			if(_container.outerWidth() == _oldContainerWidth){
				return;
			}
			_setVisibles(
				(_container.outerWidth() - _text.outerWidth()) / _actionsWidth
			);
			_oldContainerWidth = _container.outerWidth();
		}

		self.checkVisibilityInterval = function(){
			if(_container.outerWidth() == _oldContainerWidth){
				return;
			}
			self.checkVisibility();
			setTimeout(self.checkVisibilityInterval, 50);
		}


		function _setVisibles(n){
			var n = Math.floor(n * _length - 0.999);

			if(n == (_length - 1)){
				n++;
			}
			if(_length == 1){
				n = 1;
			}
			console.log({
				inButtons: n,
				inList: n,
				showList:  n >= _length
			})
			_setElementVisibles(n, n, n >= _length);
		}

		function _setElementVisibles(inButtons, inList, showList){
			_buttons
				.addClass('hidden')
				.slice(0, inButtons)
				.removeClass('hidden');

			_list
				.addClass('hidden')
				.slice(inList)
				.removeClass('hidden');

			_extra
				.toggleClass('hidden', showList);
		}

	}

}

})(jQuery);
