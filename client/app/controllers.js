'use strict';

var app = angular.module('ePromo.controllers', []);


/**
 * Countdown index
 * TEMPLATE /app/views/countdown/index.html
 */
app.controller('countdown.index', ['$scope', 'CountdownCreate', function ($scope, CountdownCreate) {
  // 10 dates, beginning on June 3, 2014
  CountdownCreate(10, new Date(2014, 5, 3)).then(function (index) {
    $scope.index = index;
  }, function (failedIndex) {
    $scope.index = failedIndex;
  });

  // var i = 10;
  // $scope.index = [];
  // while (i--) $scope.index.push({});
  // API('countdown').success(function (index) {
  //   var i = index.length;
  //   while (i--) if (index[i].countdownNumber) $scope.index[parseInt(index[i].countdownNumber) - 1] = index[i];
  //   $scope.index.reverse();
  // }).error(function () {});
}]);

/**
 * Countdown show
 * ROUTE /#!/:number
 * TEMPLATE /app/views/countdown/show.html
 */
app.controller('countdown.show', ['$scope', '$routeParams', 'Head', 'API', function ($scope, $routeParams, Head, API) {
  API('countdown/' + $routeParams.item).success(function (item) {
    $scope.item = item || {};
    Head.setTitle(item.title);
    Head.setDescription(item.description);
  }).error(function () {});
}]);
