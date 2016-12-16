app.controller('topicController',['$scope', 'topicFactory','userFactory','commentFactory','answerFactory', '$location','$rootScope', '$routeParams', function($scope, topicFactory,userFactory,commentFactory,answerFactory, $location, $rootScope, $routeParams){
console.log("topicController");
  if(!$rootScope.user){
    $location.url('/')
  } else {
    $scope.user = $rootScope.user
  }
  
  var index = function(){
    topicFactory.show($routeParams.id, function(returnedData){
      $scope.topic = returnedData;
      console.log($scope.topic);
    });
  };
  index();

  $scope.postAnswer = function(){
    console.log("posting");
    console.log(this.newAnswer);
    this.newAnswer.topic = this.topic;
    this.newAnswer.user = $rootScope.user;
    answerFactory.create(this.newAnswer, function(returnedData){
      index();
      console.log(returnedData);
    })
  }
}]);
