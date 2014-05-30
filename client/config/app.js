'use strict';

// AddThis config
window.addthis_config = window.addthis_config || {};
window.addthis_config.data_track_addressbar = false;
window.addthis_config.data_track_clickback = false;
window.addthis_config.pubid = 'ra-538787ae42451625';

// Core Angular modules
require('../assets/lib/angular/angular');
require('../assets/lib/angular-route/angular-route');
require('../assets/lib/angular-touch/angular-touch');

// Third-party modules
require('../assets/lib/angular-scroll/angular-scroll');

// App dependencies
require('../app/controllers');
require('../app/directives');
require('../app/filters');
require('../app/services');

// Router
require('./routes');

// AngularJS/App modules
var app = angular.module('ePromo', [
  'ngRoute',
  'ngTouch',
  'ePromo.controllers',
  'ePromo.directives',
  'ePromo.filters',
  'ePromo.services',
  'ePromo.routes'
]);
