// Initialize optimizeApp as angularjs app module
var optimizeApp = angular.module('optimizeApp', ['ngRoute'])

//initialize myAppModule as angularUI Sortable module
var sortable = angular.module('sortable', ['ui.sortable'])

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
    .otherwise({
      redirectTo:'/default'
    });
})

.controller('mainCtrl', function($scope) {
  $scope.data = 'WE AREN\'T DEAD YET!!!!'
})

.controller('alphaCtrl', function ($scope) {
  $scope.message = 'Click View 1 to view basic layout example!'
})

.controller('v1Ctrl', function ($scope) {
  $scope.message = 'View1 Message!'
})

.controller('v2Ctrl', function ($scope) {
  $scope.message = 'View2 Message!'
  $scope.alertMessage = 'ALERTTTT!'
  $scope.toggleValue = 'false'
  $scope.toggle1 = function () {
    $scope.toggleValue = !$scope.toggleValue;
  }
})

.controller('testViewCtrl', function ($scope) {
  $scope.message = 'TestView Message!'
});
