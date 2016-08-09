var app=angular
		.module('myModel',['ngRoute'])
		.config([$routeProvider,function($routeProvider)
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
			}])
			.controller("homeController",function($scope)
			{
				console.log('asd');
				$scope.message="WELCOME 2 HOME PAGE.... JEE AYAA NU!!";
			})
			// .controller('mainController', ['$route',
			// 	  function($route) {
			// 	    this.$route = $route;
			// 	    //this.$location = $location;
			// 	    //this.$routeParams = $routeParams;
			// 	}])
			.controller("coursesController",function($scope)
			{
				console.log("course");
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
				console.log("facilities");
			})


		
		