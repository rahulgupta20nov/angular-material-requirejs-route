define([], function() {
    var app = angular.module('myApp', ['ngRoute', 'ngMaterial']);
    app.controller('LoginCtrl', function() {

    });

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'login.html',
                controller: 'LoginCtrl'
            });
    }]);

    app.controller('AppController', function($scope) {
    });
});
