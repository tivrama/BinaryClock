// public/js/controllers/StopCtrl.js
angular.module('StopCtrl', []).controller('StopController', function($scope, Time, $interval) {

		$scope.watch = 0;
		$scope.parsedWatchTime = {};
		$scope.pause = false;

    $scope.displayStop = $scope.watch; 

		$scope.start = function() {
			if (!$scope.pause) {
				$scope.pause = true;
				$scope.parsedWatchTime = Time.secondsToTime($scope.watch);
				$scope.displayStop = Time.dec2bin($scope.parsedWatchTime.hours) + ',' + Time.dec2bin($scope.parsedWatchTime.minutes) + ',' + Time.dec2bin($scope.parsedWatchTime.seconds);

				var tick = $interval(function() {
					$scope.watch++;
					$scope.parsedWatchTime = Time.secondsToTime($scope.watch);
					$scope.displayStop = Time.dec2bin($scope.parsedWatchTime.hours) + ',' + Time.dec2bin($scope.parsedWatchTime.minutes) + ',' + Time.dec2bin($scope.parsedWatchTime.seconds);				
				}, 1000);
			} else {
				console.log('hello')
				$interval.cancel(tick);
				$scope.pause = false;
			}

		};

});