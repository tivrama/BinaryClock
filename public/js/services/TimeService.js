// public/js/services/TimeService.js
angular.module('TimeService', []).factory('Time', ['$http', function($http) {

  return {

    getTheTime : function() {
      return $http.get('/api/time');
    },

		dec2bin : function(dec){
		    return (dec >>> 0).toString(2);
		}, 

    secondsToTime : function(seconds) {
			var parsedTime = {};
			parsedTime.hours = Math.floor((seconds / 60) / 60);
			parsedTime.minutes = Math.floor((seconds - parsedTime.hours * 60 * 60) / 60);
			parsedTime.seconds = seconds - (parsedTime.hours * 60 * 60) - (parsedTime.minutes * 60);
			return parsedTime;
		}

  }       

}]);