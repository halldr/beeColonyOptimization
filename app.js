(function(angular) {
'use strict';

// Initialize optApp as angularjs app module
var optApp = angular.module('optApp', ['ngRoute'])

.controller('mainCtrl', ['$scope', function($scope) {
  $scope.message = 'WE AREN\'T DEAD YET!!!!'
}])

.config(function($routeProvider) {
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
    })
    .otherwise({redirectTo: '/'});
})


.controller('alphaCtrl', function ($scope) {
  $scope.message = 'Hello everyone, ready to optimize?'
})

.controller('v1Ctrl', function ($scope) {
  $scope.message = 'View1 Message!'
})

.controller('v2Ctrl', function ($scope) {
  $scope.message = 'View2 Message!'
})

.controller('testViewCtrl', function ($scope) {
  $scope.message = 'TestView Message!'
});
})(window.angular);