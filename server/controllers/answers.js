console.log("Answer Controller");

var mongoose = require('mongoose'),
Answer = mongoose.model('Answer');
User = mongoose.model('User');
Topic = mongoose.model('Topic');

function AnswerController(){
  this.index = function(req,res){
    Answer.find({}, function(err,results){
      if(err){
        console.log("couldnt find answers");
      } else {
        console.log("found answers");
        res.json(results)
      }
    })
  };
  this.create = function(req,res){
    // console.log(req.body);
    console.log("****START CREATE****");
    console.log(req.body.answer);
    console.log(req.body.user._id);
    console.log(req.body.topic._id);
    var answer = new Answer({ answer : req.body.text, _user: req.body.user._id, _topic: req.body.topic._id})
    answer.save(function(errA){
      if(errA){
        console.log("error creating answer");
      } else {
        console.log("created answer");
        User.findOne({_id:req.body.user._id}, function(errU, result){
          result.answers.push(answer)
          result.save(function(errR){
            if(errR){
              console.log("couldnt save associated user");
            } else {
              console.log("created association w/ user");
              Topic.findOne({_id:req.body.topic._id}, function(errT, data){
                data.answers.push(answer)
                data.save(function(errD){
                  if(errD){
                    console.log("couldnt save associated topic");
                  } else {
                    console.log("created association w/ topic");
                    res.json(answer);
                  }
                })
              })
            }

          })
        })
      }
    })
  };
  this.update = function(req,res){
  };
  this.delete = function(req,res){
  };
  this.show = function(req,res){
  };
}

module.exports = new AnswerController();
