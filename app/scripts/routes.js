(function() {
  "use strict";
  saviour.app.config([
    '$stateProvider',
    function($stateProvider) {
      return $stateProvider.state('home', {
        url: "/home",
        views: {
          default: {
            templateUrl: "views/home.html",
            controller: "AppController"
          }
        }
      });
    }
  ]);
}).call(this);