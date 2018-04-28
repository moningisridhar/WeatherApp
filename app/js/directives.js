'use strict';

/* Directives */

angular.module('openWeatherApp.directives', [])

.directive('weatherPanelWind',[function factory() {
  return {
    restrict: 'EA',

    scope: {
      useDayForecast: '=showEntry',
      dailyForecast: '=weatherPanel'
    },

    templateUrl: 'views/_weather-panel-wind.html',

    link: function(scope, element, attrs) {
      scope.getIconImageUrl = function(iconName) {
        return (iconName ? 'http://openweathermap.org/img/w/' + iconName + '.png' : '');
      };

      scope.parseDate = function (time) {
        return new Date(time * 1000);
      };
    }
  }
}]);

