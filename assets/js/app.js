angular.module("app", ["ngRoute", "app.controllers"])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'homeCtrl'});
  $routeProvider.when('/profile', {templateUrl: 'partials/profile.html', controller: 'profileCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
