var myApp = angular.module("myModule", []);

myApp.controller("AppCtrl", function($scope){

//	var myTasks = [
//	   {"name": "Clean", "description": "Tidy and dust"},
//	   {"name": "Laundry", "description": "Separate out clothes and wash and hang on line"},
//	   {"name": "Shopping", "description": "Go to supermarket, delicatessan and bakery"}
//	];

	$scope.tasks = [];
	$scope.addNewTask = function(){
		
		var name = $("#name").val();
		if(name === ""){
			$("#error").css("display", "block");
		}else{

			$scope.tasks.push(
				{
					name: $scope.newTask.name, 
					description: $scope.newTask.description
				}
			); 
			$("input").val("");
			$scope.newTask.name = "";
			$scope.newTask.description = "";
			$("#error").css("display", "none");
		}
	}

	$scope.delete = function(index){
		$scope.tasks.splice(index, 1);
	}
});


