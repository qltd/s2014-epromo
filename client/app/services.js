'use strict';

var app = angular.module('ePromo.services', []);

/*------------------------------------*\
    EXTERNAL LIBRARY SERVICES
\*------------------------------------*/

/**
 * Underscore Service
 */
app.factory('_', function () {
  return require('underscore');
});

/*------------------------------------*\
    GENERAL SERVICES
\*------------------------------------*/

/**
 * API Service
 */
app.factory('API', ['$http', function ($http) {
  return function (url, method) {
    url = '/api/' + url;
    method = method || 'GET';
    return $http({ method: method, url: url, params: { t: new Date().getTime() }});
  };
}]);

/**
 * Countdown index service
 */
app.factory('CountdownIndex', [function () {}]);

/**
 *
 */
app.service('NoView', ['Head', function (Head) {
  return function () {
    Head.setTitle('Countdown to Technology, Innovation, and Inspiration');
    Head.setDescription('Weekly countdown to SIGGRAPH 2014');
  };
}]);

/*------------------------------------*\
    ELEMENTAL SERVICES
\*------------------------------------*/

/**
 * <head> Service
 */
app.factory('Head', ['$rootScope', function ($rootScope) {
  var title = 'Countdown to Technology, Innovation, and Inspiration | SIGGRAPH 2014';
  var description = 'Countdown to Technology, Innovation, and Inspiration';
  $rootScope.getDescription = function () {
    return description;
  };
  $rootScope.getTitle = function () {
    return title;
  };
  return {
    setDescription: function (d) {
      description = d;
    },
    setTitle: function (t) {
      title = t + ' | SIGGRAPH 2014';
    }
  };
}]);
