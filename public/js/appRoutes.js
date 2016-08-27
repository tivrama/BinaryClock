// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        .when('/timer', {
            templateUrl: 'views/timer.html',
            controller: 'TimerController'
        })

        .when('/pomodoro', {
            templateUrl: 'views/pomodoro.html',
            controller: 'PomodoroController'
        })

        .when('/stop', {
            templateUrl: 'views/stop.html',
            controller: 'StopController'
        });

    $locationProvider.html5Mode(true);

}]);