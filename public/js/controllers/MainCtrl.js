// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController', function($scope, Time, $interval) {

  $scope.displayTime = 'fetching the time'
  $scope.time;
  $scope.parsedTime = {};

	var tickTock = $interval(function() {
		$scope.time++;
		if ($scope.time >= 86400) {
			$interval.cancel(tickTock);
			startTime();
		}
		$scope.parsedTime = Time.secondsToTime($scope.time);
		$scope.displayTime = Time.dec2bin($scope.parsedTime.hours) + ',' + Time.dec2bin($scope.parsedTime.minutes) + ',' + Time.dec2bin($scope.parsedTime.seconds);
	}, 1000);


  (function () {
    Time.getTheTime(function() {
    }).then(function(res) {
    	console.log(res.data.slice(10, 19))
    	// Change time to seconds (midnight being 000000);
    	var hours = res.data.slice(10, 13) * 60 * 60;
    	var minutes = res.data.slice(14, 16) * 60;
    	var seconds = res.data.slice(17, 19) * 1;
    	$scope.time = hours + minutes + seconds;
    	// Display time in binary
    	$scope.parsedTime = Time.secondsToTime($scope.time);
    	$scope.displayTime = Time.dec2bin($scope.parsedTime.hours) + ',' + Time.dec2bin($scope.parsedTime.minutes) + ',' + Time.dec2bin($scope.parsedTime.seconds);

  		tickTock;
    });
  })();

  $scope.nTOb = function() {
    $scope.nTObResult = ($scope.userEntry1 >>> 0).toString(2);
  };

  $scope.bTOn = function() {
    for (var i = 0; i < $scope.userEntry2.length; i++) {
      if ($scope.userEntry2[i] !== '1' && $scope.userEntry2[i] !== '0') {
        return $scope.bTOnResult = 'Only 1\'s and 0\'s please';
      }
    };
    $scope.bTOnResult = parseInt($scope.userEntry2, 2);
  };

});