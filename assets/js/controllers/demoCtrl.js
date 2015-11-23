var app = angular.module("sampleApp", ["firebase"]);

app.factory("demoController", ["$scope", "$firebaseArray",
		function($scope, $firebaseArray) {
			//create a reference to the database location in FB, where demo data will be stored
			var randomPatientId = Math.round(Math.random() * 100000000);
			var ref = new Firebase ("https://pur.firebaseio.com/Patients/" + randomPatientId);

			//this uses AngularFire to create the synchronized array
			return $firebaseArray(ref);
		}
	]);

app.controller("patientController", ["$scope", "demoController",
			//This is where we pass the demoController factory into the controller
		function($scope, demoController) {
			$scope.user = "Guest " + Math.round(Math.random() * 100);

			//We add a patient array to the scope to be used in our ng-repeater.
			$scope.patients = Patients;

			//A method to create new patients in the array; called by ng-submit
			$scope.addPatient = function( {
			//Calling $add on a synch'd array is like Array.push(), except that it saves		
				$scope.patients.$add({
					from: $scope.user,
					content: $scope.patients
				});
				//Reset the patient input
				$scope.patients = "Duh";
			});
		};
	]);