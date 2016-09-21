// public/js/controllers/PomodoroCtrl.js
angular.module('PomodoroCtrl', []).controller('PomodoroController', function($scope, Time, $interval) { 



	// Add button/function to put on cycle of twenty-five minutes on (1) and five minutes off (0).

	// Change alert - maybe add a sound


  $scope.pommer = 1500;
	$scope.parsedPomTime = {};

  $scope.displayPom = $scope.pommer; 

  var syncItUp = function() {
  	$scope.parsedPomTime = Time.secondsToTime($scope.pommer);
		$scope.displayPom = Time.dec2bin($scope.parsedPomTime.hours) + ',' + Time.dec2bin($scope.parsedPomTime.minutes) + ',' + Time.dec2bin($scope.parsedPomTime.seconds);
  };

  syncItUp();

	var tick;
	var work = true;

	$scope.start = function() {
		syncItUp();

		if (angular.isDefined(tick)) {
			return;
		}

		tick = $interval(function() {
			if ($scope.pommer === 0) {
				alert('Countdown is done!');
				if (work) {
					work = false;
					return $scope.fiveMinCycle()
				} else {
					work = true;
					return $scope.twentyfiveMinCycle();
				}
			}
			$scope.pommer--;
			syncItUp();
		}, 1000);
	};


	$scope.fiveMinCycle = function() {
		$scope.pommer = 300;
		syncItUp();
	};

	$scope.twentyfiveMinCycle = function() {
		$scope.pommer = 1500;
		syncItUp();
	};	

	$scope.stop = function() {
		if (angular.isDefined(tick)) {
			$interval.cancel(tick);
			tick = undefined;
		}
	};

	$scope.reset = function() {
		$scope.stop();
		$scope.pommer = 1500;
		syncItUp();
	}; 

});