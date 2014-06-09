'use strict';

var app = angular.module('ePromo.controllers', []);

/**
 * Countdown index
 * TEMPLATE /app/views/countdown/index.html
 */
app.controller('countdown.index', ['$scope', 'Countdown', function ($scope, Countdown) {
  Countdown.generate(10, 7, new Date(2014, 5, 3)).then(function (index) { // 10 dates, in 7 day intervals, beginning on June 3, 2014
    $scope.index = index;
  }, function (failedIndex) {
    $scope.index = failedIndex;
  });
}]);

/**
 * Countdown show
 * ROUTE /#!/:number
 * TEMPLATE /app/views/countdown/show.html
 */
app.controller('countdown.show', ['$scope', '$routeParams', '$location', '_', 'GoogleAnalytics', 'Head', 'API', 'Countdown', 'ScrollY', function ($scope, $routeParams, $location, _, GoogleAnalytics, Head, API, Countdown, ScrollY) {
  ScrollY('header');
  API('countdown/' + $routeParams.item).success(function (item) {
    if (_.isEmpty(item)) return $location.path('/');
    $scope.item = item || {};
    $scope.Countdown = Countdown;
    Head.setTitle(item.title);
    Head.setDescription(item.description);
    GoogleAnalytics.trackPageview();
  }).error(function (err) {
    $location.path('/');
  });
}]);
