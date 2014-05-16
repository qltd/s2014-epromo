'use strict';

var app = angular.module('ePromo.filters', []);

/**
 * Format date
 */
app.filter('formatDate', ['Months', function (Months) {
  return function (input) {
    input = input || '';
    input = new Date(input);
    return input.getDate() + ' ' + Months[input.getMonth()].abbreviation;
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
