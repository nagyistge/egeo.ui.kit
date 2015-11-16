'use strict';

angular
	.module('StratioUI.helper.passAllAttributes', [])
	.factory('stPassAllAttributes', function(){return function(scope, element, attributes){
		
		var watchAttributes = Object.keys(attributes).indexOf("watchAttributes") != -1;

		for(var attr in attributes){
			if(typeof attributes[attr] == 'string'){
				scope[attr] = attributes[attr];

				if(watchAttributes){
					(function(attributes, attr){
						scope.$watch(function(){
							return attributes[attr];
						}, function(newValue){
							scope[attr] = newValue;
						});
					})(attributes, attr);
				}
			}
		}
	}});