// public/js/services/TimeService.js
angular.module('TimeService', []).factory('Time', ['$http', function($http) {

  return {
    getTheTime : function() {
      return $http.get('/api/time');
    }, 


    secondsToTime : function(seconds) {
			// var days = seconds % 86400;
			// if (seconds % days > 0) {
			// 	seconds = seconds - (days * 86400);
			// };
			var parsedTime = {};
			parsedTime.hours = Math.floor((seconds / 60) / 60);
			parsedTime.minutes = Math.floor((seconds - parsedTime.hours * 60 * 60) / 60);
			parsedTime.seconds = seconds - (parsedTime.hours * 60 * 60) - (parsedTime.minutes * 60);
			return parsedTime;
		}
  }       

}]);