app.factory('answerFactory', ['$http', function($http){
  var answers = [],
  answer = {};

  function AnswerFactory(){
    this.index = function(callback){
      $http.get('/answers').then(function(returned_data){
        if(typeof(callback)=='function'){
          answers = returned_data.data;
          callback(answers);
        }
      });
    };
    this.show = function(id, callback){
      $http.get('/answers/'+id).then(function(returned_data){
        if(typeof(callback)=='function'){
          answer = returned_data.data;
          callback(answer);
        }
      });
    };
    this.create = function(newAnswer, callback){
      $http.post('/answers',newAnswer).then(function(returned_data){
        if(typeof(callback)=='function'){
          answer = returned_data.data;
          callback(answer);
        }
      });
    };
    this.update = function(id,updateAnswer, callback){
      $http.put('/answers'+id, updateAnswer).then(function(returned_data){
        if(typeof(callback)=='function'){
          answer = returned_data.data;
          callback(answer);
        }
      });
    };
  }
  return new AnswerFactory();
}])
