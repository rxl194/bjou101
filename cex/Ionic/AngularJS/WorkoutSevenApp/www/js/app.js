// Ionic WorkoutSevenApp App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'WorkoutSevenApp' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('WorkoutSevenApp', ['ionic', '7minWorkout', 'mediaPlayer'])

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

.config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider',
  function($stateProvider, $urlRouterProvider, $sceDelegateProvider) {

    $stateProvider
    
    .state('start', {
      url: "/start",
      templateUrl: "partials/start.html"
    })
    
    .state('workout', {
      url: "/workout",
      templateUrl: "partials/workout.html",
      controller: 'WorkoutController'
    })

    .state('finish', {
      url: "/finish",
      templateUrl: "partials/finish.html"
    })    
    
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/start');    
   
    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from our assets domain.  Notice the difference between * and **.
      'http://*.youtube.com/**']);
      
  }
])

angular.module('7minWorkout', []);