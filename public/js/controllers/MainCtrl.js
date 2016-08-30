// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController', function($scope, Time, $interval) {

  $scope.time;
  $scope.parsedTime = {};

	var dec2bin = function(dec){
	    return (dec >>> 0).toString(2);
	};

  (function () {
    Time.getTheTime(function() {
    }).then(function(res) {
    	// Change time to seconds (midnight being 000000);
    	console.log(res.data.slice(10, 19).split(':').join(''))
    	var hours = res.data.slice(10, 13) * 60 * 60;
    	var minutes = res.data.slice(14, 16) * 60;
    	var seconds = res.data.slice(17, 19) * 1;
    	$scope.time = hours + minutes + seconds;

    	$scope.parsedTime = Time.secondsToTime($scope.time);
    	$scope.tagline = dec2bin($scope.parsedTime.hours) + ',' + dec2bin($scope.parsedTime.minutes) + ',' + dec2bin($scope.parsedTime.seconds);

  		$interval(function() {
  			$scope.time++;
  			$scope.parsedTime = Time.secondsToTime($scope.time);
  			$scope.tagline = dec2bin($scope.parsedTime.hours) + ',' + dec2bin($scope.parsedTime.minutes) + ',' + dec2bin($scope.parsedTime.seconds);
  		}, 1000);
    });
  })();

});