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

/*------------------------------------*\
    ELEMENTAL SERVICES
\*------------------------------------*/

/**
 * <head> Service
 */
app.factory('Head', function () {
  var defaultTitle = 'SIGGRAPH 2014';
  var title = defaultTitle;
  var description = 'Countdown to Technology, Innovation, and Inspriation';
  return {
    description: function (newDescription) {
      if (typeof newDescription !== 'undefined') description = newDescription;
      else return description;
    },
    title: function (newTitle) {
      if (typeof newTitle !== 'undefined') title = ( newTitle === defaultTitle ? defaultTitle : newTitle + ' || ' + defaultTitle );
      else return title;
    }
  };
});
