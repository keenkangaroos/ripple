
angular.module('MyApp', ["firebase"])

// .controller('SongsController', function($scope, $firebaseArray){
//   var ref = new Firebase("https://blazing-fire-8914.firebaseio.com/2/5/");
//   $scope.songs = {};
//   $scope.songs.list = $firebaseArray(ref);
// })

//try in separate branch.
.controller('MyController', ['$scope', '$http', '$firebaseArray', function ($scope, $http, $firebaseArray, $timeout) {
	$scope.decade;
	$scope.year;
	$('a').on('click', function() {
		$scope.decade = $(this).parent().parent().data('decade');
		$scope.year = $(this).data('year');
		//console.log($scope.decade, $scope.year, "https://blazing-fire-8914.firebaseio.com/"+$scope.decade+"/"+$scope.year+"/")
		var ref = $firebaseArray(new Firebase("https://blazing-fire-8914.firebaseio.com/"+$scope.decade+"/"+$scope.year+"/"));
	  // $scope.songs = {};
	  ref.$loaded(function(data){
	  	$scope.songs = {};
		  $scope.songs.list = data;
		  //console.log(data.length);
	  })
	})
}])

.directive('dropdown', function($document) {
	return {
		restrict: "C",
		link: function(scope, elem, attr) {
			
			elem.bind('click', function() {
				elem.toggleClass('dropdown-active');
				elem.addClass('active-recent');
			});
			
			$document.bind('click', function() {
				if(!elem.hasClass('active-recent')) {
					elem.removeClass('dropdown-active');
				}
				elem.removeClass('active-recent');
			});
			
		}
	}
});