'use strict';

var app = angular.module('ePromo.controllers', []);

/**
 * Countdown index
 * ROUTE /#!/
 * TEMPLATE /app/views/countdown/index.html
 */
app.controller('countdown.index', ['$scope', 'API', function ($scope, API) {
  var i = 10;
  $scope.index = [];
  while (i--) $scope.index.push({});
  API('countdown').success(function (index) {
    var i = index.length;
    while (i--) if (index[i].countdownNumber) $scope.index[parseInt(index[i].countdownNumber) - 1] = index[i];
  }).error(function () {

  });
}]);

/**
 * Countdown show
 * ROUTE /#!/:number
 * TEMPLATE /app/views/countdown/show.html
 */
app.controller('countdown.show', ['$scope', '$sce', '$routeParams', 'API', function ($scope, $sce, $routeParams, API) {
  API('countdown/' + $routeParams.item).success(function (item) {
    $scope.item = item || {};
  }).error(function () {

  });
}]);

/**
 * <head> controller
 */
app.controller('html.head', ['$scope', function ($scope) {}]);
