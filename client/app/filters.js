'use strict';

var app = angular.module('ePromo.filters', []);

/**
 * AddThis id
 */
app.filter('addthisId', function () {
  return function (input) {
    input = input || '';
    return 'addthis-toolbox-' + input;
  };
});

/**
 * Format countdown date
 */
app.filter('countdownDate', ['Months', function (Months) {
  return function (input) {
    input = input || '';
    input = new Date(input);
    return input.getDate() + ' ' + Months[input.getMonth()].abbreviation;
  };
}]);

/**
 * Format countdown title
 */
app.filter('countdownTitle', function () {
  return function (input, number) {
    input = input || '';
    number = number || -1;
    return number > -1 ? number + '. ' + input : input;
  };
});

/**
 * Html to plain text filter
 */
app.filter('htmlToPlainText', function () {
  return function (input) {
    input = input || '';
    return String(input).replace(/<[^>]+>/gm, '');
  };
});

/**
 * Format title
 */
app.filter('pageTitle', function () {
  return function (input) {
    input = input || '';
    return input + ' | SIGGRAPH 2014';
  };
});

/**
 * Trust-as-html filter
 */
app.filter('renderHtml', ['$sce', function ($sce) {
  return function (input) {
    input = input || '';
    return $sce.trustAsHtml(input);
  };
}]);

/**
 * Summarize filter
 */
app.filter('summarize', function () {
  return function (input, maxLength) {
    input = input || '';
    maxLength = maxLength || 160;
    if (input.length <= maxLength) return input;
    input = String(input).substring(0, maxLength);
    var output = String(input).match(/.*[\.\?\!]/);
    if (output && output[0]) return output[0];
    return input;
  };
});
