app.controller("PatientsController", ["$scope", "$filter", "ngTableParams", "Patients",  
	function ($scope, $filter, ngTableParams, Patients) {
		var data = Patients;
		$scope.data = Patients;
		
		//var data = Patients;
		//$scope.data = Patients;
		//var data = $firebaseArray(new Firebase('https://pur.firebaseio.com/Patients'));
		//$scope.data = data;
		
		// var ref = new Firebase('https://pur.firebaseio.com/Patients');

		// var patientInfo = $firebaseArray(ref);
		// var patientArr = patientInfo.$asArray();

		// patientArr.$loaded().then(function(patients) {
		// 	$scope.patients = patients;
		// });
		
		$scope.tableParams = new ngTableParams({

	        page: 1,
	        count: 10
	    }, {
	        total: data.length,
	        getData: function ($defer, params) {
	        	
	        	$scope.data.$loaded()
					.then(function() {
					$scope.data = data;
					})
					.catch(function(err) {
					console.error(err)
			});
	            var orderedData = params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data;
	            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
	            
	            

	        }
	    });
		
	    $scope.editId = -1;

	    $scope.setEditId = function (pid) {
	        $scope.editId = pid;
    };
	}]);