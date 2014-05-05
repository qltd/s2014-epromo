'use strict';

var app = angular.module('ePromo.controllers', []);

/**
 * Countdown index
 * ROUTE /#!/
 * TEMPLATE /app/views/countdown/index.html
 */
app.controller('countdown.index', ['$scope', function ($scope) {

}]);

/**
 * Countdown show
 * ROUTE /#!/:number
 * TEMPLATE /app/views/countdown/show.html
 */
app.controller('countdown.show', ['$scope', function ($scope) {}]);

/**
 * <head> controller
 */
app.controller('html.head', ['$scope', function ($scope) {}]);
