console.log("Comment Controller");

var mongoose = require('mongoose'),
Comment = mongoose.model('Comment');

function CommentController(){
  this.index = function(req,res){
  };
  this.create = function(req,res){
  };
  this.update = function(req,res){
  };
  this.delete = function(req,res){
  };
  this.show = function(req,res){
  };
}

module.exports = new CommentController();
