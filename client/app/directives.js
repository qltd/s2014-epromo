'use strict';

var app = angular.module('ePromo.directives', []);

/**
 * Append AddThis toolbox to an element's content
 */
app.directive('addthisAppend', ['$compile', '$document', '$location', '$window', function ($compile, $document, $location, $window) {
  return function (scope, element, attributes) {
    scope.toggleSocial = function (e) {
      var addThis = angular.element($window.document.getElementById(attributes.addthisId));
      if (!addThis.hasClass('hidden-social')) return;
      e.stopPropagation();
      $document.one('click', function () {
        addThis.addClass('hidden-social');
      });
      addThis.removeClass('hidden-social');
    };
    element.ready(function () {
      var addThis = angular.element($window.document.createElement('div'));
      var container = angular.element($window.document.createElement('div'));
      addThis.attr({
        class: 'addthis_toolbox addthis_default_style social-icons hidden-social',
        'data-addthis-toolbox': '',
        'data-url': String($location.absUrl()).replace(/\/?#!/, ''),
        'data-description': attributes.addthisDescription,
        'data-title': attributes.addthisTitle,
        id: attributes.addthisId
      });
      container.attr({
        class: 'content-social'
      });
      container.html('<h4><a class="social-toggle" role="button" data-ng-click="toggleSocial($event)"><i class="fa fa-share-square"></i>Share</a></h4>');
      element.append($compile(container.append(addThis))(scope));
    });
  };
}]);

/**
 * AddThis async init
 */
app.directive('addthisInit', ['$document', 'addthis', function ($document, addthis) {
  return function (scope, element, attributes) {
    $document.ready(function () {
      addthis.init();
    });
  };
}]);

/**
 * AddThis async toolbox
 */
app.directive('addthisToolbox', ['addthis', function (addthis) {
  return {
    link: function (scope, element, attributes) {
      var pill = scope.pill = {
        id: attributes.id + '-pill'
      };
      element.ready(function () {
        addthis.toolbox('#' + attributes.id, {}, {
          description: attributes.description,
          title: attributes.title,
          url: attributes.url
        });
        addthis.counter('#' + pill.id, {}, {
          description: attributes.description,
          title: attributes.title,
          url: attributes.url
        });
      });
    },
    scope: true,
    templateUrl: '/countdown/app/views/addthis/show.html'
  };
}]);

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
          var mediaElement = angular.element(media[count]);
          loadingBlock.css('width', media[count].style.width || mediaElement.attr('width') + 'px' || '100%');
          mediaElement.addClass('hidden-loading');
          mediaElement.after(loadingBlock);
          mediaElement.one('load', function () {
            var loadedMedia = angular.element(this);
            var loadingBlock = loadedMedia.next();
            if (loadingBlock.hasClass('loading-block')) loadingBlock.remove();
            loadedMedia.removeClass('hidden-loading');
          });
        }
      }
    });
  };
}]);

/**
 * Adds responsiveness to media-containing iframes (YouTube, Vimeo, etc.) that have set attributes for height and width
 */
app.directive('mediaResizeHeight', ['$window', function ($window) {
  return function (scope, element, attributes) {
    var addResizeEvent = function (media, count) {
      angular.element($window).on('resize', function () {
        resizeElements(media, count);
      });
      scope.$on('$destroy', function () {
        media.css('display', 'none'); // prevents weird IE8 bug
        angular.element($window).off('resize');
      });
      resizeElements(media, count);
    };
    var resizeElements = function (media, count) { // this will only work if the media has its height and width set attributionally
      var i = count;
      while (i--) {
        var height = parseInt(media[i].height || 0);
        var width = parseInt(media[i].width || 0);
        var offsetWidth = parseInt(media[i].offsetWidth || 0);
        if (height > 0 && width > 0 && offsetWidth > 0) angular.element(media[i]).css('height', (( height * offsetWidth ) / width ) + 'px');
      }
    };
    element.ready(function () {
      var media = element.find('iframe');
      var count = media.length;
      if (count > 0) addResizeEvent(media, count);
    });
  };
}]);
