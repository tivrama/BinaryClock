// public/js/controllers/StopCtrl.js
angular.module('StopCtrl', []).controller('StopController', function($scope, Time, $interval) {

	$scope.watch = 0;
	$scope.parsedWatchTime = {};

  $scope.displayStop = $scope.watch; 

  var syncItUp = function() {
  	$scope.parsedWatchTime = Time.secondsToTime($scope.watch);
		$scope.displayStop = Time.dec2bin($scope.parsedWatchTime.hours) + ',' + Time.dec2bin($scope.parsedWatchTime.minutes) + ',' + Time.dec2bin($scope.parsedWatchTime.seconds);
  };

  syncItUp();

	var tick; 

	$scope.start = function() {		
		if ( angular.isDefined(tick) ) {
			return;
		}
		tick = $interval(function() {
			$scope.watch++;
			syncItUp();
		}, 1000);
	};

	$scope.stop = function() {
		if ( angular.isDefined(tick) ) {
			$interval.cancel(tick);
			tick = undefined;
		}
	}

	$scope.reset = function() {
		$scope.stop();
		$scope.watch = 0;
		syncItUp();
	};

});