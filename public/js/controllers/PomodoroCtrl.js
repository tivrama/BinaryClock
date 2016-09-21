// public/js/controllers/PomodoroCtrl.js
angular.module('PomodoroCtrl', []).controller('PomodoroController', function($scope, Time, $interval) { 



	// Add button/function to put on cycle of twenty-five minutes on (1) and five minutes off (0).

	// Change alert - maybe add a sound


  $scope.pommer = 1500; //1500 or 25 minutes
	$scope.parsedPomTime = {};

  $scope.displayPom = $scope.pommer; 

  var syncItUp = function() {
  	$scope.parsedPomTime = Time.secondsToTime($scope.pommer);
		$scope.displayPom = Time.dec2bin($scope.parsedPomTime.hours) + ',' + Time.dec2bin($scope.parsedPomTime.minutes) + ',' + Time.dec2bin($scope.parsedPomTime.seconds);
  };

  syncItUp();

	var tick;
	var work = true;
	var audio = new Audio('../../sounds/beep-07.mp3');

	$scope.start = function() {
		syncItUp();

		if (angular.isDefined(tick)) {
			return;
		}

		tick = $interval(function() {
			if ($scope.pommer === 0) {
				if (work) {
					audio.play();
					alert('Time for a Break!');
					work = false;
					return $scope.fiveMinCycle()
				} else {
					audio.play();
					alert('Now you must Work!');
					work = true;
					return $scope.twentyfiveMinCycle();
				}
			}
			$scope.pommer--;
			syncItUp();
		}, 1000);
	};




	$scope.fiveMinCycle = function() {
		$scope.pommer = 300; //300 or 5 minutes
		syncItUp();
	};

	$scope.twentyfiveMinCycle = function() {
		$scope.pommer = 4; //1500 or 25 minutes
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