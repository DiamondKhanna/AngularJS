var app=angular
		.module("myModule",['ngMaterial','ngRoute'])
		.config(function($routeProvider,$locationProvider)
			{
				$routeProvider
					.when('/',{
						templateUrl:"templatefolder/profile.html",
						controller:"myController"
					})
				$locationProvider.html5Mode(true);
			},
			function($mdThemingProvider)
			{
				$mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();

			})
		.controller("myController",function($scope)
		{
			$scope.message="profile section";
		});