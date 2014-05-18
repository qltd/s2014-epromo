'use strict';

var app = angular.module('ePromo.controllers', []);


/**
 * Countdown index
 * TEMPLATE /app/views/countdown/index.html
 */
app.controller('countdown.index', ['$scope', 'Countdown', function ($scope, Countdown) {
  // 10 weekly dates, beginning on June 3, 2014
  Countdown.generate(10, new Date(2014, 5, 3)).then(function (index) {
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
app.controller('countdown.show', ['$scope', '$routeParams', '$location', '_', 'Head', 'API', 'Countdown', 'ScrollY', function ($scope, $routeParams, $location, _, Head, API, Countdown, ScrollY) {
  ScrollY();
  API('countdown/' + $routeParams.item).success(function (item) {
    if (_.isEmpty(item)) return $location.path('/');
    $scope.item = item || {};
    $scope.Countdown = Countdown;
    Head.setTitle(item.title);
    Head.setDescription(item.description);
  }).error(function (err) {
    $location.path('/');
  });
}]);
