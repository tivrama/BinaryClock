// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController', function($scope, Time, $interval) {

  $scope.displayTime = 'fetching the time'
  $scope.time;
  $scope.parsedTime = {};


  var syncItUp = function() {
    $scope.parsedTime = Time.secondsToTime($scope.time);
    $scope.displayTime = Time.dec2bin($scope.parsedTime.hours) + ',' + Time.dec2bin($scope.parsedTime.minutes) + ',' + Time.dec2bin($scope.parsedTime.seconds);
  };

	var tickTock = $interval(function() {
		$scope.time++;
		if ($scope.time >= 86400) {
			$interval.cancel(tickTock);
			startTime();
		}
    syncItUp();
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
      syncItUp();

  		tickTock;
    });
  })();

});