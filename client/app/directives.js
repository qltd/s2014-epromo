'use strict';

var app = angular.module('ePromo.directives', []);

/**
 * Markup to display whie content is loading
 */
app.directive('loadingBlock', function () {
  return {
    template: '<i class="fa fa-spin fa-spinner"></i><span class="loading-text">Loading</span>'
  };
});

/**
 * Adds responsiveness to tags that do not support automatically determined heights
 */
app.directive('resizeMediaHeight', ['$window', function ($window) {
  return function (scope, element, attributes) {
    var count, media;
    var addResizeEvent = function () {
      angular.element($window).bind('resize', function () {
        resizeElements();
      });
      scope.$on('$destroy', function () {
        while (count--) media[count].style.display = 'none'; // prevents weird ie8 bug
        angular.element($window).off('resize');
      });
      resizeElements();
    };
    var resizeElements = function () {
      var i = count;
      while (i--) {
        var height = parseInt(media[i].height || 0);
        var width = parseInt(media[i].width || 0);
        var offsetWidth = parseInt(media[i].offsetWidth || 0);
        if (height > 0 && width > 0 && offsetWidth > 0) media[i].style.height = (( height * offsetWidth ) / width ) + 'px';
      }
    };
    element.ready(function () {
      media = element.find(attributes.resizeMediaHeight);
      count = media.length;
      if (count > 0) addResizeEvent();
    });
  };
}]);
