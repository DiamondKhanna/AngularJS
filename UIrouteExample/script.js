var app=angular
		.module('myModel',['ui.router'])
		.config(function($stateProvider,$locationProvider)
			{
				$stateProvider
					.state('home',{
						url:"/home",
						views:{
								one:{
									templateUrl:"templatefolder/home.html",
									controller:"homeController"
								}
								
							}	
					})
					.state('courses',{
						url:"/courses",
						views:{
								one:{},					
								two:{
									templateUrl:"templatefolder/courses.html",
									controller:"coursesController"
								}
							}	
					})
					.state('facilities',{
						url:"/facilities",
						views:{
								one:{
									templateUrl:"templatefolder/home.html",
									controller:"homeController"
								},								
								two:{
									templateUrl:"templatefolder/facilities.html",
									controller:"facilitiesController"
									
								}
							}	
						
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


		
		