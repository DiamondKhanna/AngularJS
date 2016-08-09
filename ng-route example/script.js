var app=angular
		.module('myModel',['ngRoute'])
		.config(function($routeProvider,$locationProvider)
			{
				$routeProvider
					.when('/home',{
						templateUrl:"templatefolder/home.html",
						controller:"homeController"
					})
					.when('/courses',{
						templateUrl:"templatefolder/courses.html",
						controller:"coursesController"
					})
					.when('/facilities',{
						templateUrl:"templatefolder/facilities.html",
						controller:"facilitiesController"
					})
					/*.otherwise({redirectTo:"/home"})*/
				$locationProvider.html5Mode(true);
			})
			.controller("homeController",function($scope)
			{
				
				$scope.message="WELCOME 2 HOME PAGE.... JEE AYAA NU!!";
			})
			
			.controller("coursesController",function($scope)
			{
				
				courses=[
					{
						course:"cse",
						duration:"4 years"
					},
					{
						course:"ese",
						duration:"4 years"
					},
					{
						course:"me",
						duration:"4 years"
					},
					{
						course:"ce",
						duration:"4 years"
					},
					{
						course:"bba",
						duration:"2 years"
					},
					{
						course:"mba",
						duration:"2 years"
					},
					{
						course:"bcom",
						duration:"3 years"
					},
					{
						course:"mcom",
						duration:"2 years"
					}

				];
				$scope.courses=courses;
			})
			.controller("facilitiesController",function($scope)
			{
				
			})


		
		