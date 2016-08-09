//EXAMPLE 1 (DATA BINDING)----------------------------------------------------------------->

/*var myApp=angular
			.module("myModule",[])
			.controller("myController",function($scope){
				var employee={
					firstName:"diamond",
					secondName:"khanna",
					gender:"male"
				};
			$scope.employee=employee;
			});*/

//EXAMPLE 1 ENDS--------------------------------------------------------------------------->


//practice example begins same on data binding--------------------------------------------->

/*var myApp=angular
			.module("myModule",[])
			.controller("myController",function($scope){
				var box={
					color:"green"
				};
				$scope.box=box;
			});*/

//practice example ends------------------------------------------------------------------->


//EXAMPLE 2 begins (based on table and populating it with data---------------------------->

/*var myApp=angular
			.module("myModule",[])
			.controller("myController",function($scope){
				var members=[
					{name:"Diamond Khanna",
					age:"22",
					gender:"male",
					course:"CSE"},
					
					{name:"Vanita Khanna",
					age:"26",
					gender:"female",
					course:"MBA"},
					
					{name:"Vinay Khanna",
					age:"58",
					gender:"male",
					course:"ME"},
					
					{name:"Madhu Khanna",
					age:"57",
					gender:"female",
					course:"homemaker"}
				];

				var countries=[
				{
					name:"INDIA",
					cities:["CHANDIGARH","AMRITSAR","JALANDHAR"]
				},
				{
					name:"AUSTRALIA",
					cities:["MELBOURNE","SYDNEY","VICTORIA"]
				},
				{
					name:"ENGLAND",
					cities:["BIRMINGHAM","MANCHESTER","LEEDS"]
				}
				];
				$scope.members=members;
				$scope.countries=countries;
			});
			*/
	
//EXAMPLE 2 ends (based on table and populating it with data------------------------------>


// Event Handeling Example script begins--------------------------------------------------->

/*var myApp=angular
			.module("myModule",[])
			.controller("myController",function($scope)
			{
				subjects=[
				{
					name:"Physics",
					likes:0,
					dislikes:0
				},
				{
					name:"Chemistry",
					likes:0,
					dislikes:0
				},
				{
					name:"Biology",
					likes:0,
					dislikes:0
				},
				{
					name:"Maths",
					likes:0,
					dislikes:0
				}
				];

				$scope.incrementlikes=function(subject)
				{
					subject.likes=subject.likes+1;
				};
				$scope.incrementdislikes=function(subject)
				{
					subject.dislikes=subject.dislikes+1;
				};

				$scope.subjects=subjects;
			});*/

// Event Handeling Example script ends----------------------------------------------------->