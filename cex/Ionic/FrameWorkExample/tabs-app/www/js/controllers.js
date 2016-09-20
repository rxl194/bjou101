angular.module('starter.controllers', [])

.controller('WallController', function($scope) {
  // var postsDatabaseRef = new Firebase("https://luminous-inferno-8905.firebaseio.com").child('posts');
  // var postsData = $firebaseArray(postsDatabaseRef);
  var postsData = [];

  $scope.post = {
    message : ''
  };

  $scope.posts = postsData;

  $scope.addPost = function () {
    $scope.posts.$add($scope.post);

    $scope.post = {
      message: ''
    };
  };
})
  
.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
