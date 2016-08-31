// public/js/controllers/StopCtrl.js
angular.module('StopCtrl', []).controller('StopController', function($scope, Time, $interval) {

		$scope.watch = 0;
		$scope.parsedWatchTime = {};

    $scope.displayStop = $scope.watch; 

		var start = function() {
			$scope.parsedWatchTime = Time.secondsToTime($scope.watch);
			$scope.displayStop = Time.dec2bin($scope.parsedWatchTime.hours) + ',' + Time.dec2bin($scope.parsedWatchTime.minutes) + ',' + Time.dec2bin($scope.parsedWatchTime.seconds);

			$interval(function() {
				$scope.watch++;
				$scope.parsedWatchTime = Time.secondsToTime($scope.watch);
				$scope.displayStop = Time.dec2bin($scope.parsedWatchTime.hours) + ',' + Time.dec2bin($scope.parsedWatchTime.minutes) + ',' + Time.dec2bin($scope.parsedWatchTime.seconds);				
			}, 1000);

		};
		start();

});