// Initialize myApp as angularjs app module
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider
    .when('/default', {
      templateUrl: 'views/default.html',
      controller: 'alphaCtrl'
    })
    .when('/view1', {
      templateUrl: 'views/view1.html',
      controller: 'v1Ctrl'
    })
    .when('/view2', {
      templateUrl: 'views/view2.html',
      controller: 'v2Ctrl'
    })
    .when('/testView', {
      templateUrl: 'views/testView.html',
      controller: 'testViewCtrl'
    });
});

myApp.controller('mainCtrl', function($scope) {
  $scope.message = 'WE AREN\'T DEAD YET!!!!'
});

myApp.controller('alphaCtrl', function ($scope) {
  $scope.message = 'Hello everyone, ready to optimize?'
});

myApp.controller('v1Ctrl', function ($scope) {
  $scope.message = 'View1 Message!'
});

myApp.controller('v2Ctrl', function ($scope) {
  $scope.message = 'View2 Message!'
});

myApp.controller('testViewCtrl', function ($scope) {
  $scope.message = 'TestView Message!'
});
