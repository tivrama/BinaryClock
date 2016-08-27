// public/js/services/NerdService.js
angular.module('TimeService', []).factory('Time', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/time');
        }
    }       

}]);