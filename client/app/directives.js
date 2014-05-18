'use strict';

var app = angular.module('ePromo.directives', []);

app.directive('loadingBlock', function () {
  return {
    template: '<i class="fa fa-spin fa-spinner"></i><span class="loading-text">Loading</span>'
  };
});
