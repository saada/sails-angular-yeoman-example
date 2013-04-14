'use strict';
angular.module('YoSailsAngularApp')
	.controller('MainCtrl', [
		'$scope','$resource',
		function ($scope, $resource) {
			$scope.awesomeThings = [
				'HTML5 Boilerplate',
				'AngularJS',
				'Karma'
			];

			// RESTful stuff
			var users = $resource('users');
			$scope.users = users.query();

			$scope.add = function(user){
				if(typeof user.count === 'undefined'){
					user.count = 0;
				}
				else{
					user.count++;
				}
				var restUser = users.get({id:user.id},function(){
					restUser.count = user.count;
					restUser.save();
				});
			};
		}
	]);