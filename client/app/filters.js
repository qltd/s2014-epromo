'use strict';

var app = angular.module('ePromo.filters', []);

/**
 * Trust-as-html filter
 */
app.filter('renderHtml', ['$sce', function($sce) {
  return function (input) {
    input = input || '';
    return $sce.trustAsHtml(input);
  };
}]);
