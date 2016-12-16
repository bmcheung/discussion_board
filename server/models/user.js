console.log('User Model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// build your friend schema and add it to the mongoose.models
UserSchema = new mongoose.Schema({
  name: {type:String, required:true},
  topics: [{type: Schema.Types.ObjectId, ref: 'Topic'}],
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
  answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
},
{
  timestamps:true
}),
User = mongoose.model('User', UserSchema);
