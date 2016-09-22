// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('page1', {
            url: '/page1',
            templateUrl: 'page1.html'
        })
        .state('page2', {
            url: '/page2',
            templateUrl: 'page2.html'
        });

    $urlRouterProvider.otherwise('/page1');
})

.controller('PageOneCtrl', function($scope, $ionicNavBarDelegate, $ionicHistory) {
  
    $ionicNavBarDelegate.title('Page 1');

    console.log('currentView', $ionicHistory.currentView());
    console.log('currentHistoryId', $ionicHistory.currentHistoryId());
    console.log('currentTitle', $ionicHistory.currentTitle());
    console.log('backView', $ionicHistory.backView());
    console.log('backTitle', $ionicHistory.backTitle());
    console.log('forwardView', $ionicHistory.forwardView());
    console.log('currentStateName', $ionicHistory.currentStateName());

})

.controller('PageTwoCtrl', function($scope, $ionicNavBarDelegate, $ionicHistory) {
   
    $ionicNavBarDelegate.title('Page 2');
    $ionicNavBarDelegate.showBackButton(false);

    console.log('viewHistory', $ionicHistory.viewHistory());
})




