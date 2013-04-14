'use strict';
angular.module('YoSailsAngularApp')
	.controller('MainCtrl', [
		'$scope','$resource',
		function ($scope, $resource) {
			$scope.users = $resource('users').query();
			$scope.awesomeThings = [
				'HTML5 Boilerplate',
				'AngularJS',
				'Karma'
			];
		}
	]);