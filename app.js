// Initialize optimizeApp as angularjs app module
var optimizeApp = angular.module('optimizeApp', [
  'ngRoute',
  'ui'
])

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

.controller('mainCtrl', function($scope, $window) {
  $scope.data = 'WE AREN\'T DEAD YET!!!!'
  $scope.sidebarValue = 'false'
  $scope.toggle2 = function () {
    $scope.sidebarValue = !$scope.sidebarValue;
  };
  $scope.x = $window.innerWidth
})

.directive('resizer', ['$window', function ($window) {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {      
            angular.element($window).on('resize', function () {
                scope.$apply(function(){
                    scope.sidebarValue = $window.innerWidth > 640 ? true : false;
                })
            });
        }
    }
}])

.controller('alphaCtrl', function ($scope) {
  $scope.message = 'Click View 1 to view basic layout example!'
})

.controller('v1Ctrl', function ($scope, $window) {
  $scope.message = 'View1 Message!'
  $scope.x = $window.innerWidth;
})

.controller('v2Ctrl', function ($scope) {
  $scope.message = 'View2 Message!'
  $scope.alertMessage = 'ALERTTTT!'
  $scope.toggleValue = 'false'
})

.controller('testViewCtrl', function ($scope) {
  $scope.message = 'TestView Message!'
})

.controller('sortableController', function ($scope) {
    $scope.list1 = ["Soonest Graduation Time[G]", "Highest Ranked Professors[P]", "Most Break Time[B]", "Lowest Avg Course Load[C]"];
    $scope.item1Short = $scope.list1[0].substring($scope.list1[0].length-3, $scope.list1[0].length);
    $scope.item2Short = $scope.list1[1].substring($scope.list1[1].length-3, $scope.list1[1].length);
    $scope.item3Short = $scope.list1[2].substring($scope.list1[2].length-3, $scope.list1[2].length);
    $scope.item4Short = $scope.list1[3].substring($scope.list1[3].length-3, $scope.list1[3].length);
    $scope.sortableOptions = {
        connectWith: '.connectedList'
    };
});
