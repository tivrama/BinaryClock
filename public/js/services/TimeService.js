// public/js/services/TimeService.js
angular.module('TimeService', []).factory('Time', ['$http', function($http) {

    return {
        get : function() {
            return $http.get('/api/time');
        }
    }       

}]);