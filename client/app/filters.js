'use strict';

var app = angular.module('ePromo.filters', []);

/**
 * Format date
 */
app.filter('formatDate', ['DateHandler', function (DateHandler) {
  return function (input) {
    input = input || '';
    input = new Date(input);
    return input.getDate() + ' ' + DateHandler.month[input.getMonth()].abbreviation;
  };
}]);

/**
 * Trust-as-html filter
 */
app.filter('renderHtml', ['$sce', function($sce) {
  return function (input) {
    input = input || '';
    return $sce.trustAsHtml(input);
  };
}]);
