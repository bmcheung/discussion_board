console.log('Answer Model');
var mongoose = require('mongoose')
var Schema = mongoose.Schema


AnswerSchema = new mongoose.Schema({
  answer: {type:String, required:true},
  likedBy: [{type: Schema.Types.ObjectId, ref: 'User'}],
  dislikedBy: [{type: Schema.Types.ObjectId, ref: 'User'}],
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  _topic: {type: Schema.Types.ObjectId, ref: 'Topic'},
  comments: [{type:Schema.Types.ObjectId, ref: 'Comment'}]
},
{
  timestamps:true
}),
Answer = mongoose.model('Answer', AnswerSchema);
