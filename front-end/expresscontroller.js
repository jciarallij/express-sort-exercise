var expressApp = angular.module('expressApp', []);
expressApp.controller('expressController', function($scope, $http){

	$scope.message = "Express Exercise Test!";

	// $scope.students = [
	// 	"Josh",
	// 	"Tristan",
	// 	"Bogdan",
	// 	"Will",
	// 	"Keith",
	// 	"Curtis",
	// 	"Joe",
	// 	"Kochan",
	// 	"Jeremy",
	// 	"Patrick",
	// 	"Jonathan"

	// ];


		getStudents('students')

		$scope.studentsSort = function(){
			getStudents('students/reverse')
		}

		$scope.studentsUnsort = function(){
			getStudents('students');
		}


		function getStudents(urlEnding){
			var apiUrl ="http://localhost:3050/"+urlEnding;
			$http.get(apiUrl)
			.then(function successCallback(response){
				$scope.studentList = response.data;
				$scope.status = response.status;
		
			}, function errorCallback(response){
				$scope.result = "ERROR!!!";

			});
		}



});