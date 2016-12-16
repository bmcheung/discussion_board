app.factory('topicFactory', ['$http', function($http){
  var topics = [],
  topic = {};

  function TopicFactory(){
    this.index = function(callback){
      $http.get('/topics').then(function(returned_data){
        if(typeof(callback)=='function'){
          topics = returned_data.data;
          callback(topics);
        }
      });
    };
    this.show = function(id, callback){
      $http.get('/topics/'+id).then(function(returned_data){
        if(typeof(callback)=='function'){
          topic = returned_data.data;
          callback(topic);
        }
      })
    };
    this.create = function(newTopic, callback){
      $http.post('/topics',newTopic).then(function(returned_data){
        if(typeof(callback)=='function'){
          topic = returned_data.data;
          callback(topic);
        }
      });
    };
  }
  return new TopicFactory();
}])
