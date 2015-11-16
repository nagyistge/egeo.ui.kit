'use strict';

(function($){

angular
	.module('StratioUI.helper.toggleFloatingElement', [])
	.factory('stToggleFloatingElement', function(){

		var defaultMargin = 40;
		var defaultStepsChecked = 5;
		var hideFloatingMenu = {};
		var initialTop = 0;
		var lockToggle = false;
		var minMaxHeight = 400;
		var oldElementHeight = 0;
		var onMovimentElement = null;
		var stepsChecked = 5;
		var toggleArrow = null;

		var toggleFloatingElement = function($rootScope, $scope, $element){
			if(!$rootScope.stToggleFloatingMenu)
				$rootScope.stToggleFloatingMenu = {};

			$rootScope.stToggleFloatingMenu[$scope.toggleId] = showFloatingMenu($scope, $rootScope, $element);
			hideFloatingMenu[$scope.toggleId] = initHideFloatingMenu($scope, $rootScope);

			$scope.controlOverflow = function(){
				controlOverflow(true);
				
				setTimeout(function(){
					controlOverflow(true);
				}, 50);
			};

			$(window).on('click', hideAllFloatingMenu);
		}

		toggleFloatingElement.$inject = ['$rootScope', '$scope', '$element'];

		return toggleFloatingElement;

		function showFloatingMenu($scope, $rootScope, $element){
			return function(){
				var isVisible = $scope.visible;

				hideAllFloatingMenu();
				setLockToggle();

				$scope.visible = !isVisible;
				
				onMovimentElement = $element.children().not('[no-transform]');
				toggleArrow = $element.find('[arrow]');

				controlOverflow(true);

				if($rootScope.$$phase == null)
					$scope.$apply();
			}
		}

		function initHideFloatingMenu($scope, $rootScope){
			return function(event){
				$scope.visible = false;

				$(window).off('click', hideFloatingMenu[$scope.toggleId]);

				if(onMovimentElement){
					
					//onMovimentElement.css("top", "0px");
					setTimeout(function(){
						onMovimentElement.css("transform", "translate3d(0px, 0px, 0px)");
					}, 10);
				}

				if($rootScope.$$phase == null)
					$scope.$apply();
			}
		}

		function hideAllFloatingMenu(event){
			if(event)
				event.stopImmediatePropagation();
			if(lockToggle)
				return;
			for(var menu in hideFloatingMenu){
				hideFloatingMenu[menu]();
				$(window).off('click', hideFloatingMenu[menu]);
			}
		}

		function setLockToggle(){
			lockToggle = true;

			setTimeout(function(){
				lockToggle = false;
			}, 20);
		}


		function controlOverflow(initial){
			if(!onMovimentElement)
				return;

			if(oldElementHeight != onMovimentElement.height() || stepsChecked > 0){
				checkOverflow();
				setTimeout(controlOverflow, 1000 / 62);
			}

			if(initial || oldElementHeight != onMovimentElement.height()){
				stepsChecked = defaultStepsChecked;
			}

			stepsChecked --;
			oldElementHeight = onMovimentElement.height();
		}

		function checkOverflow(){

			var windowHeight = $(document).outerHeight();
			var windowVisibleHeight = $(document.body).outerHeight();
			var windowHeightFinal = windowHeight - defaultMargin;
			var windowScroll = $(document.body).scrollTop() || $('html').scrollTop();
			var windowScrollFinal = windowScroll + windowVisibleHeight - defaultMargin;
			var windowScrollInitial = windowScroll + defaultMargin;
			var listHeight = onMovimentElement.outerHeight()
			var listBottom = onMovimentElement.parent().offset().top - 4 + listHeight;
			var listTop = onMovimentElement.offset().top;

			var showArrow = true;

			//console.log(stepsChecked, " | ", windowScrollFinal, '<', listBottom, windowScrollFinal < listBottom, " | ", windowScrollInitial, '>', listTop, windowScrollInitial > listTop)

			var newTop = (windowScrollFinal - listBottom);

			if(windowScrollFinal >= listBottom){
				newTop = (-windowScrollFinal + (listTop + listHeight));
				if(newTop < 0)
					newTop = 0;
				showArrow = false;
			}

			toggleArrow.toggle(!showArrow);

			//onMovimentElement.css('top', newTop + 'px');
			onMovimentElement.css("transform", "translate3d(0px, " + newTop + "px, 0px)");

			if(windowScrollInitial > listTop){
				var newHeight = windowVisibleHeight - (defaultMargin * 2);

				onMovimentElement.css('max-height', Math.min(newHeight, minMaxHeight));
			}
		}

	});

})(jQuery);