app.controller('dashboardController',['$scope', 'topicFactory','$location', '$rootScope', function($scope, topicFactory, $location, $rootScope){
console.log("dashboardController");
  if(!$rootScope.user){
    $location.url('/')
  } else {
    $scope.user = $rootScope.user
  }

  function index(){
    topicFactory.index(function(returnedData){
      $scope.topics = returnedData;
    });
  };
  index();

  $scope.submit = function(){
    if((this.newTopic.topic.length >0)&&(this.newTopic.description.length >0)&&(this.newTopic.category.length >0)){
      this.newTopic._id = $rootScope.user._id;
      topicFactory.create(this.newTopic,function(data){
        index();
      })
    }
  }
}]);
