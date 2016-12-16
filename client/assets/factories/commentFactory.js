app.factory('commentFactory', ['$http', function($http){
  var comments = [],
  comment = {};

  function CommentFactory(){
    this.index = function(callback){
      $http.get('/comments').then(function(returned_data){
        if(typeof(callback)=='function'){
          comments = returned_data.data;
          callback(comments);
        }
      });
    };
    this.show = function(id, callback){
      $http.get('/comments/'+id).then(function(returned_data){
        if(typeof(callback)=='function'){
          comment = returned_data.data;
          callback(comment);
        }
      })
    };
    this.create = function(newComment, callback){
      $http.post('/comments',newComment).then(function(returned_data){
        if(typeof(callback)=='function'){
          comment = returned_data.data;
          callback(comment);
        }
      });
    };
  }
  return new CommentFactory();
}])
