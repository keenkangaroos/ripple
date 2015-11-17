angular.module('topforty', ['firebase'])

.controller('SongsController', function($scope, $firebaseArray){
  var ref = new Firebase("https://blazing-fire-8914.firebaseio.com/2/5/");
  $scope.songs = {};
  $scope.songs.list = $firebaseArray(ref);
})
