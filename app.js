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
    .when('/view3', {
      templateUrl: 'views/view3.html',
      controller: 'view3Ctrl'
    })
    .otherwise({
      redirectTo:'/default'
    });
})

.controller('mainCtrl', function($scope, $window, $location) {
  $scope.data = 'WE AREN\'T DEAD YET!!!!'
  $scope.sidebarValue = 'false'
  // toggle2 toggles the sidebar on and off
  $scope.toggle2 = function () { 
    $scope.sidebarValue = !$scope.sidebarValue;
  };
  // isActive function returns true if the current path and expected path are same
  // (this is for the menu links)
  $scope.isActive = function(viewLocation) {
    return viewLocation === $location.path();
  }
})

.controller('alphaCtrl', function ($scope) {
  $scope.message = 'Click View 1 to view basic layout example!'
})

.controller('v1Ctrl', function ($scope, $window) {
  $scope.message = 'View1 Message!'
})

.controller('v2Ctrl', function ($scope) {
  $scope.message = 'View2 Message!'
  $scope.results = [
    {
      name: 'Plan Scatter Plot',
      image: 'views/pictures/fakeGraph1.png',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }, {
      name: 'Optimum Plan Fitness',
      image: 'views/pictures/fakeGraph2.png',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }, {
      name: 'Workload by Quarter',
      image: 'views/pictures/fakeGraph3.png',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];
})

.controller('view3Ctrl', function ($scope) {
  $scope.message = 'view3 Message!'
  $scope.team = [
    {
      name: 'Drew Hall',
      image: 'views/pictures/DrewPhoto.jpg',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }, {
      name: 'Shane Thompson',
      image: 'views/pictures/ShanePhoto.jpg',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }, {
      name: 'Peyton Radford',
      image: 'views/pictures/PeytonPhoto.jpg',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }, {
      name: 'Tim Tasse',
      image: 'views/pictures/TimPhoto.jpg',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }, {
      name: 'Jonathan Hammond',
      image: 'views/pictures/JonathanPhoto.jpg',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];
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
})

// This directive dynamically checks for screen size on resize,
// Called resizer. changes binary sidebarValue at 640px width breakpoint.
.directive('resizer', ['$window', function ($window) {
    return {
        restrict: 'A',
        link: function ($scope, elem, attrs) {      
            angular.element($window).on('resize', function () {
                $scope.$apply(function(){
                    $scope.sidebarValue = $window.innerWidth > 640 ? true : false;
                })
            });
        }
    }
}]);
