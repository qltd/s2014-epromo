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
 * Adds temporary div with loading block directive after unloaded media
 */
app.directive('mediaLoadEvents', ['$compile', function ($compile) {
  return function (scope, element, attributes) {
    var tags = ['img', 'iframe'];
    var i = tags.length;
    element.ready(function () {
      while (i--) {
        var media = element.find(tags[i]);
        var count = media.length;
        while (count--) if (!media[count].complete) { // do not do anything to cached images; TODO: find similar measure for iframes
          var loadingBlock = $compile('<div class="loading-block loading-media" data-loading-block></div>')(scope);
          var m = angular.element(media[count]);
          loadingBlock.css('width', media[count].style.width || m.attr('width') + 'px' || '100%');
          m.addClass('hidden');
          m.after(loadingBlock);
          m.one('load', function () {
            var loadedMedia = angular.element(this);
            loadedMedia.removeClass('hidden');
            loadedMedia.next().remove();
          });
        }
      }
    });
  };
}]);

/**
 * Adds responsiveness to media-containing iframes that have set attributes for height and width
 */
app.directive('resizeMediaHeight', ['$window', function ($window) {
  return function (scope, element, attributes) {
    var count, media;
    var addResizeEvent = function () {
      angular.element($window).bind('resize', function () {
        resizeElements();
      });
      scope.$on('$destroy', function () {
        media.css('display', 'none'); // prevents weird ie8 bug
        angular.element($window).off('resize');
      });
      resizeElements();
    };
    var resizeElements = function () { // this will only work if the media has its height set attributionally
      var i = count;
      while (i--) {
        var height = parseInt(media[i].height || 0);
        var width = parseInt(media[i].width || 0);
        var offsetWidth = parseInt(media[i].offsetWidth || 0);
        if (height > 0 && width > 0 && offsetWidth > 0) angular.element(media[i]).css('height', (( height * offsetWidth ) / width ) + 'px');
      }
    };
    element.ready(function () {
      media = element.find('iframe');
      count = media.length;
      if (count > 0) addResizeEvent();
    });
  };
}]);
