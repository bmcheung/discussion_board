app.controller('userController',['$scope', 'userFactory', '$location','$rootScope','$routeParams', function($scope, userFactory, $location, $rootScope, $routeParams){
console.log("userController");

  var index = function(){
    userFactory.show($routeParams.id, function(returnedData){
      $scope.user = returnedData;
    });
  };
  index();

  $scope.create = function(){
    userFactory.create(this.newFriend,function(){
      $location.url('/dashboard')
    })
  }
}]);
