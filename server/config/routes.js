// var mongoose = require('mongoose'),
var path = require('path');
var users = require(path.join(__dirname, './../controllers/users.js')),
topics = require(path.join(__dirname, './../controllers/topics.js')),
answers = require(path.join(__dirname, './../controllers/answers.js')),
comments = require(path.join(__dirname, './../controllers/comments.js'));

module.exports = function(app){
  //show all users
  app.get('/users', users.index);
  //show logged in user
  app.get('/users/:id', users.show);
  //create user
  app.post('/users', users.create);

  //show all topics
  app.get('/topics', topics.index);
  //show one topic
  app.get('/topics/:id', topics.show);
  //create topic
  app.post('/topics', topics.create);

  //show all answers
  app.get('/answers', answers.index);
  //show specific answer
  app.get('/answers/:id', answers.show);
  //create new answer
  app.post('/answers', answers.create);
  //update answer, used to update likes
  app.put('/answers/:id', answers.update);

  //show all comments
  app.get('/comments', comments.index);
  //show one comment
  app.get('/comments/:id', comments.show);
  //create comment
  app.post('/comments', comments.create);

}
