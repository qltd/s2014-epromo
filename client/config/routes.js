'use strict';

var app = angular.module('ePromo.routes', []);

/**
 * Routes
 */
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');

  $routeProvider.when('/', {
    templateUrl: '/countdown/app/views/countdown/index.html',
    controller: 'countdown.index'
  });
  $routeProvider.when('/:item', {
    templateUrl: '/countdown/app/views/countdown/show.html',
    controller: 'countdown.show'
  });

  // default route
  $routeProvider.otherwise({
    redirectTo: '/'
  });
}]);
