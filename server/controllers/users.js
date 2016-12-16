console.log("User Controller");

var mongoose = require('mongoose'),
User = mongoose.model('User');

function UserController(){
  this.index = function(req,res){
    User.find({}, function(err, results){
      if(err){
        console.log("error finding all users");
      } else {
        console.log("found all users");
        res.json(results)
      }
    })
  };
  this.create = function(req,res){
    console.log(req.body.name);

    User.findOne({ name:req.body.name }, function(err1, exists){
      if(err1){
        console.log("went wrong while looking for existing user");
      } else {
        if(exists == null){
          console.log(req.body.name);

          var user = new User({name: req.body.name})

          user.save(function(err2){
            if(err2){
              console.log("didn't create a new user");
              res.json(true)
            } else {
              console.log("new user saved");
              res.json(user)
            }
          })
        } else {
            console.log("user exists");
            res.json(exists)
        }
      }
    })
  };
  this.update = function(req,res){
  };
  this.delete = function(req,res){
  };
  this.show = function(req,res){
    User.findOne({_id:req.params.id}, function(err,result){
      if(err){
        console.log("poop");
      } else {
        console.log("good");
        res.json(result)
      }
    })
  };
}

module.exports = new UserController();
