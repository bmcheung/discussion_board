console.log("Topic Controller");

var mongoose = require('mongoose'),
Topic = mongoose.model('Topic'),
User = mongoose.model('User')
Answer = mongoose.model('Answer')

function TopicController(){
  this.index = function(req,res){
    Topic.find({}).populate('_user').exec(function(err, results){
      if(err){
        console.log("error finding all topics");
      } else {
        console.log("found all topics");
        res.json(results)
      }
    })
  };
  this.create = function(req,res){
    var topic = new Topic({category: req.body.category, topic:req.body.topic, description:req.body.description, _user:req.body._id})
    topic.save(function(errT){
      if(errT){
        console.log("error saving topic");
      } else {
        console.log("created topic");
        User.findOne({_id:req.body._id}, function(errU,result){
          if(errU){
            console.log("error finding associated user");
          } else {
            console.log("found associated user");
            result.topics.push(topic)
            result.save(function(errR){
              if(errR){
                console.log("error saving topic to associated user");
              } else {
                console.log("connected associated user");
                res.json(topic)
              }
            })
          }
        })
      }
    })
  };
  this.update = function(req,res){
  };
  this.delete = function(req,res){
  };
  this.show = function(req,res){
    console.log(req.params.id);
    Topic.findOne({_id:req.params.id}).populate('_user answers').exec(function(err1, result){
      if(err1){
        console.log("shit went wrong");
      } else {
        console.log(result);
        Answer.populate(result, {path:'answers._user', model:User}, function(err2,data){
          if(err2){
            console.log("dang");
          } else {
            console.log("good");
            res.json(data)
          }
        })
      }
    })
  };
}

module.exports = new TopicController();
