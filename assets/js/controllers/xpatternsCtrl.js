app.controller('xpatternsController', function($scope, $http) {
    var pendingTask;

    if ($scope.search === undefined) {
      $scope.search = "SFO";
      fetch();
    }

    $scope.change = function() {
      if (pendingTask) {
        clearTimeout(pendingTask);
      }
      pendingTask = setTimeout(fetch, 800);
    };

    function fetch() {
      $http.get("https://console.staging.xpatterns.com/export-api/v2/userId/atigeo/jobID/163/apiName/airtraffic?sortBy=id&sortType=ASC&limit=3")
        .success(function(response) {
          $scope.details = response;
        });

      $http.get("https://console.staging.xpatterns.com/export-api/v2/userId/atigeo/jobID/163/apiName/airtraffic?sortBy=" + $scope.search)
        .success(function(response) {
          $scope.related = response;
        });
    }

    $scope.update = function(flight) {
      $scope.search = flight.dest;
      $scope.change();
    };

    $scope.select = function() {
      this.setSelectionRange(0, this.value.length);
    }
  });