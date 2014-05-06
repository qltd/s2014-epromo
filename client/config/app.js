'use strict';

// Core Angular modules
require('../assets/lib/angular/angular');
require('../assets/lib/angular-animate/angular-animate');
require('../assets/lib/angular-route/angular-route');
require('../assets/lib/angular-touch/angular-touch');

// App Dependencies
require('../app/controllers');
require('../app/filters');
require('../app/services');

// Router
require('./routes');

// AngularJS/App modules
var app = angular.module('ePromo', [
  'ngAnimate',
  'ngRoute',
  'ngTouch',
  'ePromo.controllers',
  'ePromo.filters',
  'ePromo.services',
  'ePromo.routes'
]);
