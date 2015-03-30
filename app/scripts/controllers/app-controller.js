(function() {
    'use strict';
    saviour.app.controller('AppController', function($scope, $location) {
      $scope.loadLocations = function(){
        alert("Enter something");
      };
      console.log("hello");
      $scope.searchPlace = function(){
        console.log("I am touched...");
        $location.url("search");
      };
    });
}).call(this);