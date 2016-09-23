// public/js/controllers/TimerCtrl.js
angular.module('TimerCtrl', []).controller('TimerController', function($scope, Time, $interval) {

  $scope.timer = 0;
	$scope.parsedTimerTime = {};

  $scope.displayTimer = $scope.timer; 

  var syncItUp = function() {
  	$scope.parsedTimerTime = Time.secondsToTime($scope.timer);
		$scope.displayTimer = Time.dec2bin($scope.parsedTimerTime.hours) + ',' + Time.dec2bin($scope.parsedTimerTime.minutes) + ',' + Time.dec2bin($scope.parsedTimerTime.seconds);
  };

  syncItUp();

	var tick;
	var audio = new Audio('../../sounds/pacman.wav');

	var parseUserInput = function() {
	  var hours = $scope.timerEntry.slice(0, 2) * 60 * 60;
  	var minutes = $scope.timerEntry.slice(3, 5) * 60;
  	var seconds = $scope.timerEntry.slice(6, 8) * 1;
  	$scope.timer = hours + minutes + seconds
		$scope.parsedTimerTime = Time.secondsToTime($scope.timer);
	};

	$scope.start = function() {
		// call function to parse user input
		parseUserInput();

		syncItUp();

		if (angular.isDefined(tick)) {
			return;
		}

		tick = $interval(function() {
			if ($scope.timer === 0) {
				audio.play();
				alert('Countdown is done!');
				$scope.timerEntry = '';
				return $scope.reset();
			}
			$scope.timer--;
			syncItUp();
		}, 1000);
	};

	$scope.stop = function() {
		if (angular.isDefined(tick)) {
			$interval.cancel(tick);
			tick = undefined;
		}
	}

	$scope.reset = function() {
		$scope.stop();
		$scope.timer = 0;
		syncItUp();
	};

});