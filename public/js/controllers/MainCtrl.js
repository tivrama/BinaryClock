// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController', function($scope) {

	// var time = new Date();
  // $scope.tagline = time.getTime();

	var newTime = Date.now()

	function dec2bin(dec){
	    return (dec >>> 0).toString(2);
	};

	// use setInterval to advance the clock



	newTime = dec2bin(parseInt(newTime));


  $scope.tagline = newTime;


});