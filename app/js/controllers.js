'use strict';

/* Controllers */

angular.module('openWeatherApp.controllers', [])
  .controller('OpenWeatherCtrl',
    ['$scope','openWeatherMap','stormLocations','ISO3166',
      function($scope,openWeatherMap,stormLocations,ISO3166) {

    $scope.message = '';
    $scope.hasState = '';
    $scope.showFlag = false;
    
    $scope.stormLocations = stormLocations;
    $scope.iconBaseUrl = 'http://openweathermap.org/img/w/';

    $scope.getForecastByLocation = function() {

      if ($scope.location == '' || $scope.location == undefined) {
        $scope.hasState = 'has-warning';
        $scope.message = 'Please provide a location';
        return;
      }

      $scope.hasState = 'has-success';
      $scope.showFlag = false;

      $scope.forecast = openWeatherMap.queryWeather({
        location: $scope.location
      });
    };

    $scope.getDailyForecastByLocation = function() {    
      $scope.showFlag = true;
      $scope.dailyForecast = openWeatherMap.queryForecastDaily({
        location: $scope.location
      });
    };

    $scope.setLocation = function(loc) {
      $scope.location = loc;
      $scope.getForecastByLocation();
    };

    $scope.getIconImageUrl = function(iconName) {
      return (iconName ? $scope.iconBaseUrl + iconName + '.png' : '');
    };

    $scope.parseDate = function (time) {
      return new Date(time * 1000);
    };



  }])
