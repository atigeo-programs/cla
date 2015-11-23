app.factory("Patients", ["$firebaseArray",
	function($firebaseArray) {
		//create a reference to the patient database where we will store patient data
		var ref = new Firebase("https://pur.firebaseio.com/Patients");
		return $firebaseArray(ref);
	}
]);
